# 御膳房

四季家宴食谱站，纯静态页面（HTML + CSS + 原生 JS），可直接用 GitHub Pages 托管。

## 目录结构

```
index.html      主页（御膳房 + 四季板块 + 点菜入口）
season.html     季节页（?s=spring|summer|autumn|winter）
dish.html       菜品详情页（?id=菜品id）
order.html      点菜页（勾选菜品 → 生成带物候的菜单图）
css/style.css   样式（中国传统色）
js/data.js      菜品与季节数据（加菜改这里）
js/wuhou.js     七十二物候数据与查询
js/common.js    公共脚本
fonts/          子集化后的字体（woff2）
images/seasons/ 四季 SVG 插画
images/dishes/  菜品封面图（菜名拼音.jpg，见 封面图提示词.md）
tools/subset_fonts.py  字体子集化脚本
```

## 本地预览

```bash
cd yushanfang
python -m http.server 8000
# 打开 http://localhost:8000
```

## 发布到 GitHub Pages

```bash
git init
git add -A
git commit -m "御膳房：四季食谱站"
git branch -M main
git remote add origin https://github.com/<你的用户名>/yushanfang.git
git push -u origin main
```

然后在 GitHub 仓库页面：**Settings → Pages → Source 选 `main` 分支 / `(root)` → Save**，
几分钟后访问 `https://<你的用户名>.github.io/yushanfang/`。

## 日常维护

- **加菜**：在 `js/data.js` 的 `DISHES` 里追加一项（照抄现有格式），
  封面图命名为 `images/dishes/<id>.jpg`。
- **改文案后重新压缩字体**（否则新字会回退成系统字体）：

  ```bash
  uv run --with fonttools --with brotli python tools/subset_fonts.py
  ```

  脚本会扫描所有页面文本，只保留用到的字。

## 注意

- 康熙字典体是繁体字形，所以**标题一律用繁体写法**（数据里的 `nameKx` 字段），
  正文用简体悦宋。
- 悦宋缺「焗」字，个别物候名（鴽、鵙、鹖、雊）也不在字库中，
  这几个字会回退为系统宋体显示，不影响使用。
