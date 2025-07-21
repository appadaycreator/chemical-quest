// PWA登録
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js');
  });
}

// 多言語切替（日本語・英語）
const langSelect = document.getElementById('langSelect');
if (langSelect) {
  langSelect.addEventListener('change', e => {
    localStorage.setItem('lang', e.target.value);
    location.reload();
  });
}

// 文字サイズ変更
function setFontSize(size) {
  document.body.className = '';
  document.body.classList.add('font-size-' + size);
  localStorage.setItem('fontSize', size);
}
const savedFont = localStorage.getItem('fontSize');
if (savedFont) setFontSize(savedFont); 