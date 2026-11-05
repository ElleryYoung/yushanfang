/* 御膳房 · 公共脚本 */

/* 生成菜品封面：有图用图，无图回退为首字占位 */
function coverHTML(dish, extraClass) {
  const cls = extraClass ? ' ' + extraClass : '';
  return '<img class="cover' + cls + '" src="' + dishCover(dish) + '" alt="' + dish.name +
    '" onerror="coverFallback(this, \'' + (dish.nameKx || dish.name) + '\')">';
}

function coverFallback(img, name) {
  img.onerror = null;
  const ph = document.createElement('div');
  ph.className = 'cover-ph';
  ph.textContent = name.charAt(0);
  img.replaceWith(ph);
}

function param(name) {
  return new URLSearchParams(location.search).get(name);
}

/* 康熙字典体为繁体字形，标题用它渲染时需用繁体写法 */
const KX_TITLES = {
  '食材': '食材', '调料': '調料', '配料': '配料', '操作': '操作',
  '备菜': '備菜', '注意事项': '注意事項', '器具': '器具', '食材与用量': '食材與用量'
};
function kangxiTitle(t) {
  return KX_TITLES[t] || t;
}

function topbarHTML(right) {
  return '<div class="topbar"><div class="topbar-inner">' +
    '<a class="brand" href="index.html">御膳房</a>' + (right || '') +
    '</div></div>';
}

function footerHTML() {
  return '<div class="footer">四时有序 · 不时不食</div>';
}
