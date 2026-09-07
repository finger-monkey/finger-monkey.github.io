(() => {
  const body = document.body;
  const button = document.getElementById('langToggle');
  const year = document.getElementById('year');
  const stored = localStorage.getItem('yg-lang');
  const initial = stored || (navigator.language && navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en');

  function setLanguage(lang) {
    body.dataset.lang = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    button.textContent = lang === 'zh' ? 'EN' : '中文';
    button.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
    localStorage.setItem('yg-lang', lang);
  }

  setLanguage(initial);
  button.addEventListener('click', () => setLanguage(body.dataset.lang === 'zh' ? 'en' : 'zh'));
  year.textContent = new Date().getFullYear();
})();
