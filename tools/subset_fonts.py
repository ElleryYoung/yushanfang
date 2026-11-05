# -*- coding: utf-8 -*-
"""字体子集化：只保留站点实际用到的字符，输出 woff2 到 fonts/。

用法（在 yushanfang 目录的上一级 cooking 目录下运行亦可，直接指定路径即可）：
    uv run --with fonttools --with brotli python tools/subset_fonts.py

以后新增菜品、改了文案之后，重新跑一次本脚本即可。
"""
import os
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SOURCES = [
    ('../康熙字典體(Demo).ttf', 'fonts/kangxi-subset.woff2'),
    ('../方正清刻本悦宋简体.TTF', 'fonts/yuesong-subset.woff2'),
]

SCAN_EXT = ('.html', '.css', '.js')

EXTRA_CHARS = (
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    '，。、；：？！…—·「」『』（）《》〈〉【】℃°%~～-—/±×'
    '〇一二三四五六七八九十百'
    '年月日春夏秋冬今菜谱御膳房点菜确认返回首页保存图片再选一次'
    '已选道日期手机上也可长按'
)


def collect_chars():
    chars = set(EXTRA_CHARS)
    for root, _dirs, files in os.walk(BASE):
        if 'fonts' in root or 'tools' in root:
            continue
        for f in files:
            if f.endswith(SCAN_EXT):
                with open(os.path.join(root, f), encoding='utf-8') as fp:
                    chars.update(fp.read())
    chars.discard('')
    return ''.join(sorted(c for c in chars if not c.isspace()))


def main():
    from fontTools import subset
    from fontTools.ttLib import TTFont

    text = collect_chars()
    print('站点用字 %d 个' % len(text))

    for src, dst in SOURCES:
        src_path = os.path.join(BASE, src)
        dst_path = os.path.join(BASE, dst)
        if not os.path.exists(src_path):
            print('!! 找不到字体文件 %s' % src_path)
            continue

        missing = [c for c in text
                   if ord(c) not in TTFont(src_path).getBestCmap()]
        if missing:
            print('!! %s 缺字：%s' % (os.path.basename(src), ''.join(missing)))

        opts = subset.Options()
        opts.flavor = 'woff2'
        opts.desubroutinize = True
        opts.name_IDs = ['*']
        opts.notdef_outline = True
        opts.recalc_bounds = True
        opts.drop_tables += ['FFTM']
        font = subset.load_font(src_path, opts)
        sub = subset.Subsetter(opts)
        sub.populate(text=text)
        sub.subset(font)
        font.save(dst_path)
        size_kb = os.path.getsize(dst_path) / 1024
        print('OK %s -> %s（%.0f KB）' % (os.path.basename(src), dst, size_kb))


if __name__ == '__main__':
    sys.exit(main())
