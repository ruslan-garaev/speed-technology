// Dark Moda
(function () {
  const HSThemeAppearance = {
    init() {
      const defaultTheme = 'default'
      let theme = localStorage.getItem('hs_theme') || defaultTheme
      
      if (document.querySelector('html').classList.contains('dark')) return
      this.setAppearance(theme)
    },
    _resetStylesOnLoad() {
      const $resetStyles = document.createElement('style')
      $resetStyles.innerText = `*{transition: unset !important;}`
      $resetStyles.setAttribute('data-hs-appearance-onload-styles', '')
      document.head.appendChild($resetStyles)
      return $resetStyles
    },
    setAppearance(theme, saveInStore = true, dispatchEvent = true) {
      const $resetStylesEl = this._resetStylesOnLoad()
      
      if (saveInStore) {
        localStorage.setItem('hs_theme', theme)
      }
      
      if (theme === 'auto') {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default'
      }
      
      document.querySelector('html').classList.remove('dark')
      document.querySelector('html').classList.remove('default')
      document.querySelector('html').classList.remove('auto')
      
      document.querySelector('html').classList.add(this.getOriginalAppearance())
      
      setTimeout(() => {
        $resetStylesEl.remove()
      })
      
      if (dispatchEvent) {
        window.dispatchEvent(new CustomEvent('on-hs-appearance-change', {detail: theme}))
      }
    },
    getAppearance() {
      let theme = this.getOriginalAppearance()
      if (theme === 'auto') {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default'
      }
      return theme
    },
    getOriginalAppearance() {
      const defaultTheme = 'default'
      return localStorage.getItem('hs_theme') || defaultTheme
    }
  }
  HSThemeAppearance.init()
  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (HSThemeAppearance.getOriginalAppearance() === 'auto') {
      HSThemeAppearance.setAppearance('auto', false)
    }
  })
  
  window.addEventListener('load', () => {
    const $clickableThemes = document.querySelectorAll('[data-hs-theme-click-value]')
    const $switchableThemes = document.querySelectorAll('[data-hs-theme-switch]')
    
    $clickableThemes.forEach($item => {
      $item.addEventListener('click', () => HSThemeAppearance.setAppearance($item.getAttribute('data-hs-theme-click-value'), true, $item))
    })
    
    $switchableThemes.forEach($item => {
      $item.addEventListener('change', (e) => {
        HSThemeAppearance.setAppearance(e.target.checked ? 'dark' : 'default')
      })
      
      $item.checked = HSThemeAppearance.getAppearance() === 'dark'
    })
    
    window.addEventListener('on-hs-appearance-change', e => {
      $switchableThemes.forEach($item => {
        $item.checked = e.detail === 'dark'
      })
    })
  })
})();


// Clipboard
(function () {
  window.addEventListener('load', () => {
    const $clipboards = document.querySelectorAll('.js-clipboard');
    $clipboards.forEach((el) => {
      const clipboard = new ClipboardJS(el, {
        text: (trigger) => {
          const clipboardText = trigger.dataset.clipboardText;
          
          if (clipboardText) return clipboardText;
          
          const clipboardTarget = trigger.dataset.clipboardTarget;
          const $element = document.querySelector(clipboardTarget);
          
          if (
            $element.tagName === 'SELECT'
            || $element.tagName === 'INPUT'
            || $element.tagName === 'TEXTAREA'
          ) return $element.value
          else return $element.textContent;
        }
      });
      clipboard.on('success', () => {
        const $default = el.querySelector('.js-clipboard-default');
        const $success = el.querySelector('.js-clipboard-success');
        const $successText = el.querySelector('.js-clipboard-success-text');
        const successText = el.dataset.clipboardSuccessText || '';
        const tooltip = el.closest('.hs-tooltip');
        let oldSuccessText;
        
        if ($successText) {
          oldSuccessText = $successText.textContent
          $successText.textContent = successText
        }
        if ($default && $success) {
          $default.style.display = 'none'
          $success.style.display = 'block'
        }
        if (tooltip) HSTooltip.show(tooltip);
        
        setTimeout(function () {
          if ($successText && oldSuccessText) $successText.textContent = oldSuccessText;
          if (tooltip) HSTooltip.hide(tooltip);
          if ($default && $success) {
            $success.style.display = '';
            $default.style.display = '';
          }
        }, 800);
      });
    });
  })
})();