var t={615:(t,o,i)=>{i.d(o,{A:()=>e});class e{constructor(t,o,i){this.el=t,this.options=o,this.events=i,this.el=t,this.options=o,this.events={}}createCollection(t,o){var i;t.push({id:(null===(i=null==o?void 0:o.el)||void 0===i?void 0:i.id)||t.length+1,element:o})}fireEvent(t,o=null){if(this.events.hasOwnProperty(t))return this.events[t](o)}on(t,o){this.events[t]=o}}}},o={};function i(e){var s=o[e];if(void 0!==s)return s.exports;var n=o[e]={exports:{}};return t[e](n,n.exports,i),n.exports}i.d=(t,o)=>{for(var e in o)i.o(o,e)&&!i.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})},i.o=(t,o)=>Object.prototype.hasOwnProperty.call(t,o);var e={};i.d(e,{A:()=>r});var s=i(615);
/*
 * HSRangeSlider
 * @version: 2.5.1
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */class n extends s.A{constructor(t,o,i){super(t,o,i);const e=t.getAttribute("data-hs-range-slider"),s=e?JSON.parse(e):{};this.concatOptions=Object.assign(Object.assign(Object.assign({},s),o),{cssClasses:Object.assign(Object.assign({},noUiSlider.cssClasses),this.processClasses(s.cssClasses))}),this.init()}get formattedValue(){const t=this.el.noUiSlider.get();if(Array.isArray(t)&&this.format){const o=[];return t.forEach((t=>{o.push(this.format.to(t))})),o}return this.format?this.format.to(t):t}processClasses(t){const o={};return Object.keys(t).forEach((i=>{i&&(o[i]=`${noUiSlider.cssClasses[i]} ${t[i]}`)})),o}init(){var t,o,i,e,s,n,r,a,l,d,c,v,h;this.createCollection(window.$hsRangeSliderCollection,this),("object"==typeof(null===(t=this.concatOptions)||void 0===t?void 0:t.formatter)?"thousandsSeparatorAndDecimalPoints"===(null===(i=null===(o=this.concatOptions)||void 0===o?void 0:o.formatter)||void 0===i?void 0:i.type):"thousandsSeparatorAndDecimalPoints"===(null===(e=this.concatOptions)||void 0===e?void 0:e.formatter))?this.thousandsSeparatorAndDecimalPointsFormatter():("object"==typeof(null===(s=this.concatOptions)||void 0===s?void 0:s.formatter)?"integer"===(null===(r=null===(n=this.concatOptions)||void 0===n?void 0:n.formatter)||void 0===r?void 0:r.type):"integer"===(null===(a=this.concatOptions)||void 0===a?void 0:a.formatter))?this.integerFormatter():"object"==typeof(null===(l=this.concatOptions)||void 0===l?void 0:l.formatter)&&((null===(c=null===(d=this.concatOptions)||void 0===d?void 0:d.formatter)||void 0===c?void 0:c.prefix)||(null===(h=null===(v=this.concatOptions)||void 0===v?void 0:v.formatter)||void 0===h?void 0:h.postfix))&&this.prefixOrPostfixFormatter(),noUiSlider.create(this.el,this.concatOptions),this.concatOptions.disabled&&this.setDisabled()}formatValue(t){var o,i,e,s,n,r,a,l,d;let c="";return"object"==typeof(null===(o=this.concatOptions)||void 0===o?void 0:o.formatter)?((null===(e=null===(i=this.concatOptions)||void 0===i?void 0:i.formatter)||void 0===e?void 0:e.prefix)&&(c+=null===(n=null===(s=this.concatOptions)||void 0===s?void 0:s.formatter)||void 0===n?void 0:n.prefix),c+=t,(null===(a=null===(r=this.concatOptions)||void 0===r?void 0:r.formatter)||void 0===a?void 0:a.postfix)&&(c+=null===(d=null===(l=this.concatOptions)||void 0===l?void 0:l.formatter)||void 0===d?void 0:d.postfix)):c+=t,c}integerFormatter(){var t;this.format={to:t=>this.formatValue(Math.round(t)),from:t=>Math.round(+t)},(null===(t=this.concatOptions)||void 0===t?void 0:t.tooltips)&&(this.concatOptions.tooltips=this.format)}prefixOrPostfixFormatter(){var t;this.format={to:t=>this.formatValue(t),from:t=>+t},(null===(t=this.concatOptions)||void 0===t?void 0:t.tooltips)&&(this.concatOptions.tooltips=this.format)}thousandsSeparatorAndDecimalPointsFormatter(){var t;this.format={to:t=>this.formatValue(new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}).format(t)),from:t=>parseFloat(t.replace(/,/g,""))},(null===(t=this.concatOptions)||void 0===t?void 0:t.tooltips)&&(this.concatOptions.tooltips=this.format)}setDisabled(){this.el.setAttribute("disabled","disabled"),this.el.classList.add("disabled")}static getInstance(t,o=!1){const i=window.$hsRangeSliderCollection.find((o=>o.element.el===("string"==typeof t?document.querySelector(t):t)));return i?o?i:i.element.el:null}static autoInit(){window.$hsRangeSliderCollection||(window.$hsRangeSliderCollection=[]),document.querySelectorAll("[data-hs-range-slider]:not(.--prevent-on-load-init)").forEach((t=>{window.$hsRangeSliderCollection.find((o=>{var i;return(null===(i=null==o?void 0:o.element)||void 0===i?void 0:i.el)===t}))||new n(t)}))}static on(t,o,i){const e=window.$hsRangeSliderCollection.find((t=>t.element.el===("string"==typeof o?document.querySelector(o):o)));e&&(e.element.events[t]=i)}}window.addEventListener("load",(()=>{n.autoInit()})),"undefined"!=typeof window&&(window.HSRangeSlider=n);const r=n;var a=e.A;export{a as default};