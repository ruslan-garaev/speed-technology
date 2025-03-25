function changeQuillTheme(id, options) {
  const editor = document.querySelector(id);
  const tabpanel = editor.closest('[role="tabpanel"]');
  const changeTheme = (theme = localStorage.getItem('hs_theme')) => {
    if (theme === 'dark') {
      editor.classList.remove(...options.lightThemeClasses);
      editor.classList.add(...options.darkThemeClasses);
    } else {
      editor.classList.remove(...options.darkThemeClasses);
      editor.classList.add(...options.lightThemeClasses);
    }
  };

  changeTheme();

  window.addEventListener('on-hs-appearance-change', (evt) => changeTheme(evt.detail));

  tabpanel.addEventListener('on-hs-appearance-change', (evt) => changeTheme(evt.detail));
}