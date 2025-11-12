// js/theme-switcher.js
(function(){
  // lê modo do localStorage (fallback 0)
  var modo = 0;
  try {
    var s = localStorage.getItem('modo');
    modo = (s !== null) ? Number(s) : 0;
  } catch(e) { modo = 0; }

  // obtém ou cria <link id="themeLink">
  var link = document.getElementById('themeLink');
  if (!link) {
    link = document.createElement('link');
    link.id = 'themeLink';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }

  // aplica href conforme modo
  link.href = (modo === 1) ? '../css/style2.css' : '../css/style.css';

  // funções públicas para outras páginas/scripts
  window.setModo = function(m) {
    m = Number(m) === 1 ? 1 : 0;
    try { localStorage.setItem('modo', String(m)); } catch(e){}
    link.href = (m === 1) ? '../css/style2.css' : '../css/style.css';
  };

  window.getModo = function() {
    try { return Number(localStorage.getItem('modo')) || 0; } catch(e){ return 0; }
  };
})();