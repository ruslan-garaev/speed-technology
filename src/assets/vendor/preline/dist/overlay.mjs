var e={189:(e,t,o)=>{o.d(t,{LO:()=>l});const l={xs:0,sm:640,md:768,lg:1024,xl:1280,"2xl":1536}},615:(e,t,o)=>{o.d(t,{A:()=>l});class l{constructor(e,t,o){this.el=e,this.options=t,this.events=o,this.el=e,this.options=t,this.events={}}createCollection(e,t){var o;e.push({id:(null===(o=null==t?void 0:t.el)||void 0===o?void 0:o.id)||e.length+1,element:t})}fireEvent(e,t=null){if(this.events.hasOwnProperty(e))return this.events[e](t)}on(e,t){this.events[e]=t}}},926:(e,t,o)=>{o.d(t,{JD:()=>a,PK:()=>l,gj:()=>i,sH:()=>n,wC:()=>s,yd:()=>r});
/*
 * @version: 2.5.1
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
const l=e=>"true"===e,i=(e,t,o="")=>(window.getComputedStyle(e).getPropertyValue(t)||o).replace(" ","");const s=(e,t)=>{const o=e.children;for(let e=0;e<o.length;e++)if(o[e]===t)return!0;return!1},n=e=>{if(!e)return!1;return"none"===window.getComputedStyle(e).display||n(e.parentElement)},a=(e,t,o=null)=>{const l=new CustomEvent(e,{detail:{payload:o},bubbles:!0,cancelable:!0,composed:!1});t.dispatchEvent(l)},r=(e,t)=>{const o=()=>{t(),e.removeEventListener("transitionend",o,!0)},l=window.getComputedStyle(e),i=l.getPropertyValue("transition-duration");"none"!==l.getPropertyValue("transition-property")&&parseFloat(i)>0?e.addEventListener("transitionend",o,!0):t()}}},t={};function o(l){var i=t[l];if(void 0!==i)return i.exports;var s=t[l]={exports:{}};return e[l](s,s.exports,o),s.exports}o.d=(e,t)=>{for(var l in t)o.o(t,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var l={};o.d(l,{A:()=>d});var i=o(926),s=o(189),n=o(615);
/*
 * HSOverlay
 * @version: 2.5.1
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
class a extends n.A{constructor(e,t,o){var l,n,a,r,d;super(e,t,o);const c=e.getAttribute("data-hs-overlay-options"),h=c?JSON.parse(c):{},y=Object.assign(Object.assign({},h),t);if(this.hiddenClass=(null==y?void 0:y.hiddenClass)||"hidden",this.emulateScrollbarSpace=(null==y?void 0:y.emulateScrollbarSpace)||!1,this.isClosePrev=null===(l=null==y?void 0:y.isClosePrev)||void 0===l||l,this.backdropClasses=null!==(n=null==y?void 0:y.backdropClasses)&&void 0!==n?n:"hs-overlay-backdrop transition duration fixed inset-0 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 dark:bg-neutral-900",this.backdropExtraClasses=null!==(a=null==y?void 0:y.backdropExtraClasses)&&void 0!==a?a:"",this.moveOverlayToBody=(null==y?void 0:y.moveOverlayToBody)||null,this.openNextOverlay=!1,this.autoHide=null,this.overlayId=this.el.getAttribute("data-hs-overlay"),this.overlay=document.querySelector(this.overlayId),this.initContainer=(null===(r=this.overlay)||void 0===r?void 0:r.parentElement)||null,this.overlay){this.isCloseWhenClickInside=(0,i.PK)((0,i.gj)(this.overlay,"--close-when-click-inside","false")||"false"),this.isTabAccessibilityLimited=(0,i.PK)((0,i.gj)(this.overlay,"--tab-accessibility-limited","true")||"true"),this.isLayoutAffect=(0,i.PK)((0,i.gj)(this.overlay,"--is-layout-affect","false")||"false"),this.hasAutofocus=(0,i.PK)((0,i.gj)(this.overlay,"--has-autofocus","true")||"true"),this.hasAbilityToCloseOnBackdropClick=(0,i.PK)(this.overlay.getAttribute("data-hs-overlay-keyboard")||"true");const e=(0,i.gj)(this.overlay,"--auto-close");this.autoClose=!isNaN(+e)&&isFinite(+e)?+e:s.LO[e]||null;const t=(0,i.gj)(this.overlay,"--opened");this.openedBreakpoint=(!isNaN(+t)&&isFinite(+t)?+t:s.LO[t])||null}this.animationTarget=(null===(d=null==this?void 0:this.overlay)||void 0===d?void 0:d.querySelector(".hs-overlay-animation-target"))||this.overlay,this.overlay&&this.init()}init(){var e;if(this.createCollection(window.$hsOverlayCollection,this),this.isLayoutAffect&&this.openedBreakpoint){const e=a.getInstance(this.el,!0);a.setOpened(this.openedBreakpoint,e)}(null===(e=null==this?void 0:this.el)||void 0===e?void 0:e.ariaExpanded)&&(this.overlay.classList.contains("opened")?this.el.ariaExpanded="true":this.el.ariaExpanded="false"),this.el.addEventListener("click",(()=>{this.overlay.classList.contains("opened")?this.close():this.open()})),this.overlay.addEventListener("click",(e=>{e.target.id&&`#${e.target.id}`===this.overlayId&&this.isCloseWhenClickInside&&this.hasAbilityToCloseOnBackdropClick&&this.close()}))}hideAuto(){const e=parseInt((0,i.gj)(this.overlay,"--auto-hide","0"));e&&(this.autoHide=setTimeout((()=>{this.close()}),e))}checkTimer(){this.autoHide&&(clearTimeout(this.autoHide),this.autoHide=null)}buildBackdrop(){const e=this.overlay.classList.value.split(" "),t=parseInt(window.getComputedStyle(this.overlay).getPropertyValue("z-index")),o=this.overlay.getAttribute("data-hs-overlay-backdrop-container")||!1;let l=document.createElement("div"),s=`${this.backdropClasses} ${this.backdropExtraClasses}`;const n="static"!==(0,i.gj)(this.overlay,"--overlay-backdrop","true"),a="false"===(0,i.gj)(this.overlay,"--overlay-backdrop","true");l.id=`${this.overlay.id}-backdrop`,"style"in l&&(l.style.zIndex=""+(t-1));for(const t of e)(t.startsWith("hs-overlay-backdrop-open:")||t.includes(":hs-overlay-backdrop-open:"))&&(s+=` ${t}`);a||(o&&(l=document.querySelector(o).cloneNode(!0),l.classList.remove("hidden"),s=`${l.classList.toString()}`,l.classList.value=""),n&&l.addEventListener("click",(()=>this.close()),!0),l.setAttribute("data-hs-overlay-backdrop-template",""),document.body.appendChild(l),setTimeout((()=>{l.classList.value=s})))}destroyBackdrop(){const e=document.querySelector(`#${this.overlay.id}-backdrop`);e&&(this.openNextOverlay&&(e.style.transitionDuration=1.8*parseFloat(window.getComputedStyle(e).transitionDuration.replace(/[^\d.-]/g,""))+"s"),e.classList.add("opacity-0"),(0,i.yd)(e,(()=>{e.remove()})))}focusElement(){const e=this.overlay.querySelector("[autofocus]");if(!e)return!1;e.focus()}getScrollbarSize(){let e=document.createElement("div");e.style.overflow="scroll",e.style.width="100px",e.style.height="100px",document.body.appendChild(e);let t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}open(){if(!this.overlay)return!1;const e=document.querySelectorAll(".hs-overlay.open"),t=window.$hsOverlayCollection.find((t=>Array.from(e).includes(t.element.overlay)&&!t.element.isLayoutAffect)),o=document.querySelectorAll(`[data-hs-overlay="#${this.overlay.id}"]`),l="true"!==(0,i.gj)(this.overlay,"--body-scroll","false");if(this.isClosePrev&&t)return this.openNextOverlay=!0,t.element.close().then((()=>{this.open(),this.openNextOverlay=!1}));l&&(document.body.style.overflow="hidden",this.emulateScrollbarSpace&&(document.body.style.paddingRight=`${this.getScrollbarSize()}px`)),this.buildBackdrop(),this.checkTimer(),this.hideAuto(),o.forEach((e=>{e.ariaExpanded&&(e.ariaExpanded="true")})),this.overlay.classList.remove(this.hiddenClass),this.overlay.setAttribute("aria-overlay","true"),this.overlay.setAttribute("tabindex","-1"),setTimeout((()=>{if(this.overlay.classList.contains("opened"))return!1;this.overlay.classList.add("open","opened"),this.isLayoutAffect&&document.body.classList.add("hs-overlay-body-open"),this.fireEvent("open",this.el),(0,i.JD)("open.hs.overlay",this.el,this.el),this.hasAutofocus&&this.focusElement()}),50)}close(e=!1){this.isLayoutAffect&&document.body.classList.remove("hs-overlay-body-open");const t=e=>{if(this.overlay.classList.contains("open"))return!1;document.querySelectorAll(`[data-hs-overlay="#${this.overlay.id}"]`).forEach((e=>{e.ariaExpanded&&(e.ariaExpanded="false")})),this.overlay.classList.add(this.hiddenClass),this.destroyBackdrop(),this.fireEvent("close",this.el),(0,i.JD)("close.hs.overlay",this.el,this.el),document.querySelector(".hs-overlay.opened")||(document.body.style.overflow="",this.emulateScrollbarSpace&&(document.body.style.paddingRight="")),e(this.overlay)};return new Promise((o=>{if(!this.overlay)return!1;this.overlay.classList.remove("open","opened"),this.overlay.removeAttribute("aria-overlay"),this.overlay.removeAttribute("tabindex"),e?t(o):(0,i.yd)(this.animationTarget,(()=>t(o)))}))}static getInstance(e,t){const o=window.$hsOverlayCollection.find((t=>t.element.el===("string"==typeof e?document.querySelector(e):e)||t.element.overlay===("string"==typeof e?document.querySelector(e):e)));return o?t?o:o.element.el:null}static autoInit(){window.$hsOverlayCollection||(window.$hsOverlayCollection=[]),document.querySelectorAll("[data-hs-overlay]:not(.--prevent-on-load-init)").forEach((e=>{window.$hsOverlayCollection.find((t=>{var o;return(null===(o=null==t?void 0:t.element)||void 0===o?void 0:o.el)===e}))||new a(e)})),window.$hsOverlayCollection&&document.addEventListener("keydown",(e=>a.accessibility(e)))}static open(e){const t=window.$hsOverlayCollection.find((t=>t.element.el===("string"==typeof e?document.querySelector(e):e)||t.element.overlay===("string"==typeof e?document.querySelector(e):e)));t&&t.element.overlay.classList.contains(t.element.hiddenClass)&&t.element.open()}static close(e){const t=window.$hsOverlayCollection.find((t=>t.element.el===("string"==typeof e?document.querySelector(e):e)||t.element.overlay===("string"==typeof e?document.querySelector(e):e)));t&&!t.element.overlay.classList.contains(t.element.hiddenClass)&&t.element.close()}static setOpened(e,t){document.body.clientWidth>=e?(document.body.classList.add("hs-overlay-body-open"),t.element.overlay.classList.add("opened")):t.element.close(!0)}static accessibility(e){var t,o;const l=window.$hsOverlayCollection.filter((e=>e.element.overlay.classList.contains("open"))),s=l[l.length-1],n=null===(o=null===(t=null==s?void 0:s.element)||void 0===t?void 0:t.overlay)||void 0===o?void 0:o.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),a=[];(null==n?void 0:n.length)&&n.forEach((e=>{(0,i.sH)(e)||a.push(e)}));const r=s&&!e.metaKey;if(r&&!s.element.isTabAccessibilityLimited&&"Tab"===e.code)return!1;r&&a.length&&"Tab"===e.code&&(e.preventDefault(),this.onTab(s,a)),r&&"Escape"===e.code&&(e.preventDefault(),this.onEscape(s))}static onEscape(e){e&&e.element.hasAbilityToCloseOnBackdropClick&&e.element.close()}static onTab(e,t){if(!t.length)return!1;const o=e.element.overlay.querySelector(":focus"),l=Array.from(t).indexOf(o);if(l>-1){t[(l+1)%t.length].focus()}else t[0].focus()}static on(e,t,o){const l=window.$hsOverlayCollection.find((e=>e.element.el===("string"==typeof t?document.querySelector(t):t)||e.element.overlay===("string"==typeof t?document.querySelector(t):t)));l&&(l.element.events[e]=o)}}const r=()=>{if(!window.$hsOverlayCollection.length||!window.$hsOverlayCollection.find((e=>e.element.moveOverlayToBody)))return!1;window.$hsOverlayCollection.filter((e=>e.element.moveOverlayToBody)).forEach((e=>{const t=e.element.moveOverlayToBody,o=e.element.initContainer,l=document.querySelector("body"),s=e.element.overlay;if(!o&&s)return!1;document.body.clientWidth<=t&&!(0,i.wC)(l,s)?l.appendChild(s):document.body.clientWidth>t&&!o.contains(s)&&o.appendChild(s)}))};window.addEventListener("load",(()=>{a.autoInit(),r()})),window.addEventListener("resize",(()=>{(()=>{if(!window.$hsOverlayCollection.length||!window.$hsOverlayCollection.find((e=>e.element.autoClose)))return!1;window.$hsOverlayCollection.filter((e=>e.element.autoClose)).forEach((e=>{document.body.clientWidth>=e.element.autoClose&&e.element.close(!0)}))})(),r(),(()=>{if(!window.$hsOverlayCollection.length||!window.$hsOverlayCollection.find((e=>e.element.autoClose)))return!1;window.$hsOverlayCollection.filter((e=>e.element.autoClose)).forEach((e=>{document.body.clientWidth>=e.element.autoClose&&e.element.close(!0)}))})(),(()=>{if(!window.$hsOverlayCollection.length||!window.$hsOverlayCollection.find((e=>e.element.overlay.classList.contains("opened"))))return!1;window.$hsOverlayCollection.filter((e=>e.element.overlay.classList.contains("opened"))).forEach((e=>{const t=parseInt(window.getComputedStyle(e.element.overlay).getPropertyValue("z-index")),o=document.querySelector(`#${e.element.overlay.id}-backdrop`);if(t===parseInt(window.getComputedStyle(o).getPropertyValue("z-index"))+1)return!1;"style"in o&&(o.style.zIndex=""+(t-1)),document.body.classList.add("hs-overlay-body-open")}))})()})),"undefined"!=typeof window&&(window.HSOverlay=a);const d=a;var c=l.A;export{c as default};