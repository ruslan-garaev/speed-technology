/*
 * Clipboard wrapper
 * @version: 2.1.0
 * @author: Preline
 * @license: Preline Libraries (https://preline.com/licenses)
 * Copyright 2024 Preline
 */

const globalIsDark = localStorage.getItem("hs-clipboard-is-dark");
if (!globalIsDark) localStorage.setItem("hs-clipboard-is-dark", "dark");

const HSClipboard = {
  collection: [],
  dataAttributeName: "data-hs-clipboard-options",
  defaults: {
    type: null,
    tooltip: false,
    contentTarget: null,
    classChangeTarget: null,
    defaultClass: null,
    successText: null,
    successClass: null,
    originalTitle: null,
  },

  init(el, options = {}, id) {
    let items;

    if (el instanceof HTMLElement) items = [el];
    else if (el instanceof Object) items = el;
    else items = document.querySelectorAll(el);

    for (let i = 0; i < items.length; i += 1) {
      if (!items[i].id)
        items[i].id = `copy-markup-${i + 1 < 10 ? "0" : ""}${i + 1}`;

      this.addToCollection(items[i], options, id || items[i].id);
    }

    if (!this.collection.length) {
      return false;
    }

    this._init();
  },

  _init: function () {
    for (let i = 0; i < this.collection.length; i += 1) {
      if (this.collection[i].hasOwnProperty("$initializedEl")) continue;
      else this.collection[i].$initializedEl = null;

      let { $el, $initializedEl, options } = this.collection[i];

      /* Start : Init */
      if (options.contentTarget) this.setShortcodes(options);
      if (options.toggleLight)
        this._buildToggleLight(
          document.querySelector(options.toggleLight),
          this.collection[i].id
        );

      $initializedEl = new ClipboardJS($el, options);

      $initializedEl.on("success", () => {
        const clipboardDefault = $el.querySelector(".js-clipboard-default");
        const clipboardSuccess = $el.querySelector(".js-clipboard-success");
        const clipboardSuccessTarget = $el.querySelector(
          ".js-clipboard-success-text"
        );
        const successText = options.successText;
        const tooltip = options.tooltip;
        let tempSuccessText;

        if (clipboardSuccessTarget) {
          tempSuccessText = clipboardSuccessTarget.textContent;
          clipboardSuccessTarget.textContent = successText;
        }
        if (clipboardDefault && clipboardSuccess) {
          clipboardDefault.style.display = "none";
          clipboardSuccess.style.display = "block";
        }
        if (tooltip) HSTooltip.show($el);

        setTimeout(function () {
          if (clipboardSuccessTarget && tempSuccessText)
            clipboardSuccessTarget.textContent = tempSuccessText;
          if (tooltip) HSTooltip.hide($el);
          if (clipboardDefault && clipboardSuccess) {
            clipboardSuccess.style.display = "";
            clipboardDefault.style.display = "";
          }
        }, 800);
      });

      /* End : Init */
    }

    this._forceChangeTheme(globalIsDark);
  },

  _buildToggleLight(el, id) {
    const instance = this._getInstanceById(id);

    if (this._isFormElement(el)) {
      el.addEventListener("change", (evt) => {
        instance.options.isDark = evt.target.checked;

        if (instance.options.isDarkGlobally) {
          this.collection.map((item) => {
            if (item.options.toggleLight !== `#${el.getAttribute("id")}`) {
              const toggle = document.querySelector(item.options.toggleLight);

              if (toggle) {
                toggle.checked = item.options.isDark = !item.options.isDark;

                localStorage.setItem(
                  "hs-clipboard-is-dark",
                  item.options.isDark ? "dark" : "light"
                );
              }
            }
          });
        }
      });
    } else {
      el.addEventListener("click", () => {
        instance.options.isDark = !instance.options.isDark;
      });
    }
  },

  _getInstanceById(id) {
    return this.collection.find((el) => el.id === id);
  },

  _forceChangeTheme(theme = "dark") {
    const isDark = theme === "dark" ? true : false;

    this.collection.map((item) => {
      const toggle = document.querySelector(item.options.toggleLight);

      if (toggle) toggle.checked = item.options.isDark = isDark;
    });
  },

  _removeDarkClasses(str) {
    let temp = str.replace(
      /\bdark:[^\s>]*\burl\(['"]?[^'"\)]*['"]?\)/g,
      (match) => match.substring(0, match.indexOf("url(")) + "url()"
    );

    return temp.replace(/(\b|\s)dark:[^"'\s]+/g, "");
  },

  _isFormElement(el) {
    return (
      el.tagName === "SELECT" ||
      el.tagName === "INPUT" ||
      el.tagName === "TEXTAREA"
    );
  },

  // Public methods
  addToCollection(item, options, id) {
    (options = Object.assign(
      {
        shortCodes: {},
        isDark: globalIsDark ?? true,
        isDarkGlobally: true,
      },
      this.defaults,
      item.hasAttribute(this.dataAttributeName)
        ? JSON.parse(item.getAttribute(this.dataAttributeName))
        : {},
      options
    )),
      this.collection.push({
        $el: item,
        id: id || null,
        options: Object.assign({}, options, {
          windowWidth: window.outerWidth,
          defaultText: item.lastChild.nodeValue,
          title: item.getAttribute("data-bs-original-title"),
          container: !!this.defaults.container
            ? document.querySelector(this.defaults.container)
            : false,
          text: (button) => {
            const id = button.getAttribute("id");
            const dataSettings = JSON.parse(
              button.getAttribute("data-hs-clipboard-options")
            );
            const instance = this._getInstanceById(id);
            const markup = instance.options.isDark
              ? options.shortCodes[dataSettings.contentTarget].dark
              : options.shortCodes[dataSettings.contentTarget].light;

            // Uncomment the code below for debugging
            // console.log(id, markup);

            return markup;
          },
        }),
      });
  },

  setShortcodes(params) {
    const contentTarget = document.querySelector(params.contentTarget);
    const toggleLight = document.querySelector(params?.toggleLight) || null;

    if (!contentTarget) return false;

    params.shortCodes[params.contentTarget] = {
      dark: null,
      light: null,
    };

    if (this._isFormElement(contentTarget))
      params.shortCodes[params.contentTarget].dark = contentTarget.value;
    else
      params.shortCodes[params.contentTarget].dark = contentTarget.textContent;

    if (params?.lightOnly || toggleLight)
      params.shortCodes[params.contentTarget].light = this._removeDarkClasses(
        contentTarget.textContent
      );
  },

  getItems() {
    let newCollection = [];

    for (let i = 0; i < this.collection.length; i += 1)
      newCollection.push(this.collection[i].$initializedEl);

    return newCollection;
  },

  getItem(item) {
    if (typeof item === "number") {
      return this.collection[item].$initializedEl;
    } else {
      return this.collection.find((el) => {
        return el.id === item;
      }).$initializedEl;
    }
  },
};
