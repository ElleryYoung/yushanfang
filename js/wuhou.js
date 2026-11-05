/* 七十二物候
   每候约五日，以节气为准。此处取公历近似日期，
   仅供菜单图上的时令标注使用。 */

const WUHOU = [
  { m: 1, d: 1, term: '冬至', ord: '三候', name: '水泉动' },
  { m: 1, d: 5, term: '小寒', ord: '初候', name: '雁北乡' },
  { m: 1, d: 10, term: '小寒', ord: '二候', name: '鹊始巢' },
  { m: 1, d: 15, term: '小寒', ord: '三候', name: '雉始雊' },
  { m: 1, d: 20, term: '大寒', ord: '初候', name: '鸡始乳' },
  { m: 1, d: 25, term: '大寒', ord: '二候', name: '征鸟厉疾' },
  { m: 1, d: 30, term: '大寒', ord: '三候', name: '水泽腹坚' },
  { m: 2, d: 4, term: '立春', ord: '初候', name: '东风解冻' },
  { m: 2, d: 9, term: '立春', ord: '二候', name: '蛰虫始振' },
  { m: 2, d: 14, term: '立春', ord: '三候', name: '鱼陟负冰' },
  { m: 2, d: 19, term: '雨水', ord: '初候', name: '獭祭鱼' },
  { m: 2, d: 24, term: '雨水', ord: '二候', name: '候雁北' },
  { m: 3, d: 1, term: '雨水', ord: '三候', name: '草木萌动' },
  { m: 3, d: 6, term: '惊蛰', ord: '初候', name: '桃始华' },
  { m: 3, d: 11, term: '惊蛰', ord: '二候', name: '仓庚鸣' },
  { m: 3, d: 16, term: '惊蛰', ord: '三候', name: '鹰化为鸠' },
  { m: 3, d: 21, term: '春分', ord: '初候', name: '玄鸟至' },
  { m: 3, d: 26, term: '春分', ord: '二候', name: '雷乃发声' },
  { m: 3, d: 31, term: '春分', ord: '三候', name: '始电' },
  { m: 4, d: 5, term: '清明', ord: '初候', name: '桐始华' },
  { m: 4, d: 10, term: '清明', ord: '二候', name: '田鼠化为鴽' },
  { m: 4, d: 15, term: '清明', ord: '三候', name: '虹始见' },
  { m: 4, d: 20, term: '谷雨', ord: '初候', name: '萍始生' },
  { m: 4, d: 25, term: '谷雨', ord: '二候', name: '鸣鸠拂其羽' },
  { m: 4, d: 30, term: '谷雨', ord: '三候', name: '戴胜降于桑' },
  { m: 5, d: 5, term: '立夏', ord: '初候', name: '蝼蝈鸣' },
  { m: 5, d: 10, term: '立夏', ord: '二候', name: '蚯蚓出' },
  { m: 5, d: 15, term: '立夏', ord: '三候', name: '王瓜生' },
  { m: 5, d: 21, term: '小满', ord: '初候', name: '苦菜秀' },
  { m: 5, d: 26, term: '小满', ord: '二候', name: '靡草死' },
  { m: 5, d: 31, term: '小满', ord: '三候', name: '麦秋至' },
  { m: 6, d: 5, term: '芒种', ord: '初候', name: '螳螂生' },
  { m: 6, d: 10, term: '芒种', ord: '二候', name: '鵙始鸣' },
  { m: 6, d: 15, term: '芒种', ord: '三候', name: '反舌无声' },
  { m: 6, d: 21, term: '夏至', ord: '初候', name: '鹿角解' },
  { m: 6, d: 26, term: '夏至', ord: '二候', name: '蜩始鸣' },
  { m: 7, d: 1, term: '夏至', ord: '三候', name: '半夏生' },
  { m: 7, d: 7, term: '小暑', ord: '初候', name: '温风至' },
  { m: 7, d: 12, term: '小暑', ord: '二候', name: '蟋蟀居壁' },
  { m: 7, d: 17, term: '小暑', ord: '三候', name: '鹰始鸷' },
  { m: 7, d: 22, term: '大暑', ord: '初候', name: '腐草为萤' },
  { m: 7, d: 27, term: '大暑', ord: '二候', name: '土润溽暑' },
  { m: 8, d: 1, term: '大暑', ord: '三候', name: '大雨时行' },
  { m: 8, d: 7, term: '立秋', ord: '初候', name: '凉风至' },
  { m: 8, d: 12, term: '立秋', ord: '二候', name: '白露降' },
  { m: 8, d: 17, term: '立秋', ord: '三候', name: '寒蝉鸣' },
  { m: 8, d: 23, term: '处暑', ord: '初候', name: '鹰乃祭鸟' },
  { m: 8, d: 28, term: '处暑', ord: '二候', name: '天地始肃' },
  { m: 9, d: 2, term: '处暑', ord: '三候', name: '禾乃登' },
  { m: 9, d: 7, term: '白露', ord: '初候', name: '鸿雁来' },
  { m: 9, d: 12, term: '白露', ord: '二候', name: '玄鸟归' },
  { m: 9, d: 17, term: '白露', ord: '三候', name: '群鸟养羞' },
  { m: 9, d: 23, term: '秋分', ord: '初候', name: '雷始收声' },
  { m: 9, d: 28, term: '秋分', ord: '二候', name: '蛰虫坯户' },
  { m: 10, d: 3, term: '秋分', ord: '三候', name: '水始涸' },
  { m: 10, d: 8, term: '寒露', ord: '初候', name: '鸿雁来宾' },
  { m: 10, d: 13, term: '寒露', ord: '二候', name: '雀入大水为蛤' },
  { m: 10, d: 18, term: '寒露', ord: '三候', name: '菊有黄华' },
  { m: 10, d: 23, term: '霜降', ord: '初候', name: '豺乃祭兽' },
  { m: 10, d: 28, term: '霜降', ord: '二候', name: '草木黄落' },
  { m: 11, d: 2, term: '霜降', ord: '三候', name: '蛰虫咸俯' },
  { m: 11, d: 7, term: '立冬', ord: '初候', name: '水始冰' },
  { m: 11, d: 12, term: '立冬', ord: '二候', name: '地始冻' },
  { m: 11, d: 17, term: '立冬', ord: '三候', name: '雉入大水为蜃' },
  { m: 11, d: 22, term: '小雪', ord: '初候', name: '虹藏不见' },
  { m: 11, d: 27, term: '小雪', ord: '二候', name: '天气上升地气下降' },
  { m: 12, d: 2, term: '小雪', ord: '三候', name: '闭塞而成冬' },
  { m: 12, d: 7, term: '大雪', ord: '初候', name: '鹖鴠不鸣' },
  { m: 12, d: 12, term: '大雪', ord: '二候', name: '虎始交' },
  { m: 12, d: 17, term: '大雪', ord: '三候', name: '荔挺出' },
  { m: 12, d: 22, term: '冬至', ord: '初候', name: '蚯蚓结' },
  { m: 12, d: 27, term: '冬至', ord: '二候', name: '麋角解' }
];

/* 根据日期查物候，返回 { term, ord, name } */
function wuhouOfDate(date) {
  const md = (date.getMonth() + 1) * 100 + date.getDate();
  let hit = null;
  for (const w of WUHOU) {
    if (w.m * 100 + w.d <= md) hit = w;
    else break;
  }
  return hit || WUHOU[WUHOU.length - 1];
}

function wuhouLabel(date) {
  const w = wuhouOfDate(date);
  return w.term + ' ' + w.ord + ' · ' + w.name;
}
