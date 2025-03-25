!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o=e();for(var i in o)("object"==typeof exports?exports:t)[i]=o[i]}}(self,(()=>(()=>{"use strict";var t={223:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BREAKPOINTS=e.COMBO_BOX_ACCESSIBILITY_KEY_SET=e.SELECT_ACCESSIBILITY_KEY_SET=e.TABS_ACCESSIBILITY_KEY_SET=e.OVERLAY_ACCESSIBILITY_KEY_SET=e.DROPDOWN_ACCESSIBILITY_KEY_SET=e.POSITIONS=void 0,e.POSITIONS={auto:"auto","auto-start":"auto-start","auto-end":"auto-end",top:"top","top-left":"top-start","top-right":"top-end",bottom:"bottom","bottom-left":"bottom-start","bottom-right":"bottom-end",right:"right","right-start":"right-start","right-end":"right-end",left:"left","left-start":"left-start","left-end":"left-end"},e.DROPDOWN_ACCESSIBILITY_KEY_SET=["Escape","ArrowUp","ArrowDown","Home","End","Enter"],e.OVERLAY_ACCESSIBILITY_KEY_SET=["Escape","Tab"],e.TABS_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End"],e.SELECT_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End","Escape","Enter","Tab"],e.COMBO_BOX_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End","Escape","Enter"],e.BREAKPOINTS={xs:0,sm:640,md:768,lg:1024,xl:1280,"2xl":1536}},961:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e,o){this.el=t,this.options=e,this.events=o,this.el=t,this.options=e,this.events={}}return t.prototype.createCollection=function(t,e){var o;t.push({id:(null===(o=null==e?void 0:e.el)||void 0===o?void 0:o.id)||t.length+1,element:e})},t.prototype.fireEvent=function(t,e){if(void 0===e&&(e=null),this.events.hasOwnProperty(t))return this.events[t](e)},t.prototype.on=function(t,e){this.events[t]=e},t}();e.default=o},809:function(t,e,o){
/*
 * HSComboBox
 * @version: 2.5.1
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
var i,n=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,o=1,i=arguments.length;o<i;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},r.apply(this,arguments)},s=this&&this.__awaiter||function(t,e,o,i){return new(o||(o=Promise))((function(n,r){function s(t){try{a(i.next(t))}catch(t){r(t)}}function l(t){try{a(i.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,l)}a((i=i.apply(t,e||[])).next())}))},l=this&&this.__generator||function(t,e){var o,i,n,r,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(l){return function(a){return function(l){if(o)throw new TypeError("Generator is already executing.");for(;r&&(r=0,l[0]&&(s=0)),s;)try{if(o=1,i&&(n=2&l[0]?i.return:l[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,l[1])).done)return n;switch(i=0,n&&(l=[2&l[0],n.value]),l[0]){case 0:case 1:n=l;break;case 4:return s.label++,{value:l[1],done:!1};case 5:s.label++,i=l[1],l=[0];continue;case 7:l=s.ops.pop(),s.trys.pop();continue;default:if(!(n=s.trys,(n=n.length>0&&n[n.length-1])||6!==l[0]&&2!==l[0])){s=0;continue}if(3===l[0]&&(!n||l[1]>n[0]&&l[1]<n[3])){s.label=l[1];break}if(6===l[0]&&s.label<n[1]){s.label=n[1],n=l;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(l);break}n[2]&&s.ops.pop(),s.trys.pop();continue}l=e.call(t,s)}catch(t){l=[6,t],i=0}finally{o=n=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,a])}}},a=this&&this.__spreadArray||function(t,e,o){if(o||2===arguments.length)for(var i,n=0,r=e.length;n<r;n++)!i&&n in e||(i||(i=Array.prototype.slice.call(e,0,n)),i[n]=e[n]);return t.concat(i||Array.prototype.slice.call(e))},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var p=o(292),c=u(o(961)),d=o(223),h=function(t){function e(e,o,i){var n,s,l,a,u,p,c,d,h,m,f,b,v,g,y,x,E,T,S,w,A,I,C,L,O,P=t.call(this,e,o,i)||this,_=e.getAttribute("data-hs-combo-box"),B=_?JSON.parse(_):{},k=r(r({},B),o);return P.gap=5,P.viewport=null!==(n="string"==typeof(null==k?void 0:k.viewport)?document.querySelector(null==k?void 0:k.viewport):null==k?void 0:k.viewport)&&void 0!==n?n:null,P.preventVisibility=null!==(s=null==k?void 0:k.preventVisibility)&&void 0!==s&&s,P.apiUrl=null!==(l=null==k?void 0:k.apiUrl)&&void 0!==l?l:null,P.apiDataPart=null!==(a=null==k?void 0:k.apiDataPart)&&void 0!==a?a:null,P.apiQuery=null!==(u=null==k?void 0:k.apiQuery)&&void 0!==u?u:null,P.apiSearchQuery=null!==(p=null==k?void 0:k.apiSearchQuery)&&void 0!==p?p:null,P.apiHeaders=null!==(c=null==k?void 0:k.apiHeaders)&&void 0!==c?c:{},P.apiGroupField=null!==(d=null==k?void 0:k.apiGroupField)&&void 0!==d?d:null,P.outputItemTemplate=null!==(h=null==k?void 0:k.outputItemTemplate)&&void 0!==h?h:'<div class="cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-hs-combo-box-output-item>\n\t\t\t\t<div class="flex justify-between items-center w-full">\n\t\t\t\t\t<span data-hs-combo-box-search-text></span>\n\t\t\t\t\t<span class="hidden hs-combo-box-selected:block">\n\t\t\t\t\t\t<svg class="shrink-0 size-3.5 text-blue-600 dark:text-blue-500" xmlns="http:.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">\n\t\t\t\t\t\t\t<polyline points="20 6 9 17 4 12"></polyline>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>',P.outputEmptyTemplate=null!==(m=null==k?void 0:k.outputEmptyTemplate)&&void 0!==m?m:'<div class="py-2 px-4 w-full text-sm text-gray-800 rounded-lg dark:bg-neutral-900 dark:text-neutral-200">Nothing found...</div>',P.outputLoaderTemplate=null!==(f=null==k?void 0:k.outputLoaderTemplate)&&void 0!==f?f:'<div class="flex justify-center items-center py-2 px-4 text-sm text-gray-800 rounded-lg bg-white dark:bg-neutral-900 dark:text-neutral-200">\n\t\t\t\t<div class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">\n\t\t\t\t\t<span class="sr-only">Loading...</span>\n\t\t\t\t</div>\n\t\t\t</div>',P.groupingType=null!==(b=null==k?void 0:k.groupingType)&&void 0!==b?b:null,P.groupingTitleTemplate=null!==(v=null==k?void 0:k.groupingTitleTemplate)&&void 0!==v?v:"default"===P.groupingType?'<div class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500"></div>':'<button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold whitespace-nowrap rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"></button>',P.tabsWrapperTemplate=null!==(g=null==k?void 0:k.tabsWrapperTemplate)&&void 0!==g?g:'<div class="overflow-x-auto p-4"></div>',P.preventSelection=null!==(y=null==k?void 0:k.preventSelection)&&void 0!==y&&y,P.preventAutoPosition=null!==(x=null==k?void 0:k.preventAutoPosition)&&void 0!==x&&x,P.isOpenOnFocus=null!==(E=null==k?void 0:k.isOpenOnFocus)&&void 0!==E&&E,P.input=null!==(T=P.el.querySelector("[data-hs-combo-box-input]"))&&void 0!==T?T:null,P.output=null!==(S=P.el.querySelector("[data-hs-combo-box-output]"))&&void 0!==S?S:null,P.itemsWrapper=null!==(w=P.el.querySelector("[data-hs-combo-box-output-items-wrapper]"))&&void 0!==w?w:null,P.items=null!==(A=Array.from(P.el.querySelectorAll("[data-hs-combo-box-output-item]")))&&void 0!==A?A:[],P.tabs=[],P.toggle=null!==(I=P.el.querySelector("[data-hs-combo-box-toggle]"))&&void 0!==I?I:null,P.toggleClose=null!==(C=P.el.querySelector("[data-hs-combo-box-close]"))&&void 0!==C?C:null,P.toggleOpen=null!==(L=P.el.querySelector("[data-hs-combo-box-open]"))&&void 0!==L?L:null,P.outputPlaceholder=null,P.selected=P.value=null!==(O=P.el.querySelector("[data-hs-combo-box-input]").value)&&void 0!==O?O:"",P.isOpened=!1,P.isCurrent=!1,P.animationInProcess=!1,P.selectedGroup="all",P.init(),P}return n(e,t),e.prototype.init=function(){this.createCollection(window.$hsComboBoxCollection,this),this.build()},e.prototype.build=function(){this.buildInput(),this.groupingType&&this.setGroups(),this.buildItems(),this.preventVisibility&&(this.preventAutoPosition||this.recalculateDirection()),this.toggle&&this.buildToggle(),this.toggleClose&&this.buildToggleClose(),this.toggleOpen&&this.buildToggleOpen()},e.prototype.setResultAndRender=function(t){void 0===t&&(t="");var e=this.preventVisibility?this.input.value:t;this.setResults(e),this.apiSearchQuery&&this.itemsFromJson()},e.prototype.buildInput=function(){var t=this;this.isOpenOnFocus&&this.input.addEventListener("focus",(function(){t.isOpened||(t.setResultAndRender(),t.open())})),this.input.addEventListener("input",(0,p.debounce)((function(e){t.setResultAndRender(e.target.value),""!==t.input.value?t.el.classList.add("has-value"):t.el.classList.remove("has-value"),t.isOpened||t.open()})))},e.prototype.buildItems=function(){this.output.role="listbox",this.output.tabIndex=-1,this.output.ariaOrientation="vertical",this.apiUrl?this.itemsFromJson():(this.itemsWrapper?this.itemsWrapper.innerHTML="":this.output.innerHTML="",this.itemsFromHtml())},e.prototype.setResults=function(t){this.value=t,this.resultItems(),this.hasVisibleItems()?this.destroyOutputPlaceholder():this.buildOutputPlaceholder()},e.prototype.isItemExists=function(t){return this.items.some((function(e){var o,i,n,r=null!==(o=e.getAttribute("data-hs-combo-box-output-item-group-field"))&&void 0!==o?o:null,s=null!==(i=JSON.parse(e.getAttribute("data-hs-combo-box-output-item")))&&void 0!==i?i:null,l=null;return r&&(null===(n=null==s?void 0:s.group)||void 0===n?void 0:n.name)&&(l=t[r]),Array.from(e.querySelectorAll("[data-hs-combo-box-search-text]")).some((function(e){var o;return(null===(o=null==s?void 0:s.group)||void 0===o?void 0:o.name)&&l?l===s.group.name&&e.getAttribute("data-hs-combo-box-search-text")===t[e.getAttribute("data-hs-combo-box-output-item-field")]:e.getAttribute("data-hs-combo-box-search-text")===t[e.getAttribute("data-hs-combo-box-output-item-field")]}))}))},e.prototype.isTextExists=function(t,e){var o=e.map((function(t){return t.toLowerCase()}));return Array.from(t.querySelectorAll("[data-hs-combo-box-search-text]")).some((function(t){return o.includes(t.getAttribute("data-hs-combo-box-search-text").toLowerCase())}))},e.prototype.isTextExistsAny=function(t,e){return Array.from(t.querySelectorAll("[data-hs-combo-box-search-text]")).some((function(t){return t.getAttribute("data-hs-combo-box-search-text").toLowerCase().includes(e.toLowerCase())}))},e.prototype.valuesBySelector=function(t){return Array.from(t.querySelectorAll("[data-hs-combo-box-search-text]")).reduce((function(t,e){return a(a([],t,!0),[e.getAttribute("data-hs-combo-box-search-text")],!1)}),[])},e.prototype.buildOutputLoader=function(){if(this.outputLoader)return!1;this.outputLoader=(0,p.htmlToElement)(this.outputLoaderTemplate),this.items.length||this.outputPlaceholder?(this.outputLoader.style.position="absolute",this.outputLoader.style.top="0",this.outputLoader.style.bottom="0",this.outputLoader.style.left="0",this.outputLoader.style.right="0",this.outputLoader.style.zIndex="2"):(this.outputLoader.style.position="",this.outputLoader.style.top="",this.outputLoader.style.bottom="",this.outputLoader.style.left="",this.outputLoader.style.right="",this.outputLoader.style.zIndex="",this.outputLoader.style.height="30px"),this.output.append(this.outputLoader)},e.prototype.destroyOutputLoader=function(){this.outputLoader&&this.outputLoader.remove(),this.outputLoader=null},e.prototype.itemsFromJson=function(){return s(this,void 0,void 0,(function(){var t,e,o,i,n,r=this;return l(this,(function(s){switch(s.label){case 0:this.buildOutputLoader(),s.label=1;case 1:return s.trys.push([1,4,,5]),t="".concat(this.apiQuery),e="".concat(this.apiSearchQuery,"=").concat(this.value.toLowerCase()),o=this.apiUrl,this.apiQuery&&this.apiSearchQuery?o+="?".concat(e,"&").concat(t):this.apiQuery?o+="?".concat(t):this.apiSearchQuery&&(o+="?".concat(e)),[4,fetch(o,this.apiHeaders)];case 2:return[4,s.sent().json()];case 3:return i=s.sent(),this.apiDataPart&&(i=i[this.apiDataPart]),this.apiSearchQuery&&(this.items=[]),this.itemsWrapper?this.itemsWrapper.innerHTML="":this.output.innerHTML="","tabs"===this.groupingType?(this.setApiGroups(i),this.groupTabsRender(),this.jsonItemsRender(i)):"default"===this.groupingType?(this.setApiGroups(i),this.groups.forEach((function(t){var e=(0,p.htmlToElement)(r.groupingTitleTemplate);e.setAttribute("data-hs-combo-box-group-title",t.name),e.classList.add("--exclude-accessibility"),e.innerText=t.title;var o=i.filter((function(e){return e[r.apiGroupField]===t.name}));r.itemsWrapper?r.itemsWrapper.append(e):r.output.append(e),r.jsonItemsRender(o)}))):this.jsonItemsRender(i),this.setResults(this.input.value),[3,5];case 4:return n=s.sent(),console.error(n),[3,5];case 5:return this.destroyOutputLoader(),[2]}}))}))},e.prototype.jsonItemsRender=function(t){var e=this;t.forEach((function(t,o){var i=(0,p.htmlToElement)(e.outputItemTemplate);i.querySelectorAll("[data-hs-combo-box-output-item-field]").forEach((function(e){var o=t[e.getAttribute("data-hs-combo-box-output-item-field")],i=e.hasAttribute("data-hs-combo-box-output-item-hide-if-empty");e.textContent=null!=o?o:"",!o&&i&&(e.style.display="none")})),i.querySelectorAll("[data-hs-combo-box-search-text]").forEach((function(e){var o;e.setAttribute("data-hs-combo-box-search-text",null!==(o=t[e.getAttribute("data-hs-combo-box-output-item-field")])&&void 0!==o?o:"")})),i.querySelectorAll("[data-hs-combo-box-output-item-attr]").forEach((function(e){JSON.parse(e.getAttribute("data-hs-combo-box-output-item-attr")).forEach((function(o){e.setAttribute(o.attr,t[o.valueFrom])}))})),i.setAttribute("tabIndex","".concat(o)),"tabs"!==e.groupingType&&"default"!==e.groupingType||i.setAttribute("data-hs-combo-box-output-item",'{"group": {"name": "'.concat(t[e.apiGroupField],'", "title": "').concat(t[e.apiGroupField],'"}}')),e.items=a(a([],e.items,!0),[i],!1),e.preventSelection||i.addEventListener("click",(function(){e.close(i.querySelector("[data-hs-combo-box-value]").getAttribute("data-hs-combo-box-search-text")),e.setSelectedByValue(e.valuesBySelector(i))})),e.appendItemsToWrapper(i)}))},e.prototype.setGroups=function(){var t=[];this.items.forEach((function(e){var o=JSON.parse(e.getAttribute("data-hs-combo-box-output-item")).group;t.some((function(t){return(null==t?void 0:t.name)===o.name}))||t.push(o)})),this.groups=t},e.prototype.setCurrent=function(){window.$hsComboBoxCollection.length&&(window.$hsComboBoxCollection.map((function(t){return t.element.isCurrent=!1})),this.isCurrent=!0)},e.prototype.setApiGroups=function(t){var e=this,o=[];t.forEach((function(t){var i=t[e.apiGroupField];o.some((function(t){return t.name===i}))||o.push({name:i,title:i})})),this.groups=o},e.prototype.sortItems=function(){return this.items.sort((function(t,e){var o=t.querySelector("[data-hs-combo-box-value]").getAttribute("data-hs-combo-box-search-text"),i=e.querySelector("[data-hs-combo-box-value]").getAttribute("data-hs-combo-box-search-text");return o<i?-1:o>i?1:0}))},e.prototype.itemRender=function(t){var e=this,o=t.querySelector("[data-hs-combo-box-value]").getAttribute("data-hs-combo-box-search-text");this.itemsWrapper?this.itemsWrapper.append(t):this.output.append(t),this.preventSelection||t.addEventListener("click",(function(){e.close(o),e.setSelectedByValue(e.valuesBySelector(t))}))},e.prototype.plainRender=function(t){var e=this;t.forEach((function(t){e.itemRender(t)}))},e.prototype.groupTabsRender=function(){var t=this,e=(0,p.htmlToElement)(this.tabsWrapperTemplate),o=(0,p.htmlToElement)('<div class="flex flex-nowrap gap-x-2"></div>');e.append(o),this.output.insertBefore(e,this.output.firstChild);var i=(0,p.htmlToElement)(this.groupingTitleTemplate);i.setAttribute("data-hs-combo-box-group-title","all"),i.classList.add("--exclude-accessibility","active"),i.innerText="All",this.tabs=a(a([],this.tabs,!0),[i],!1),o.append(i),i.addEventListener("click",(function(){t.selectedGroup="all";var e=t.tabs.find((function(e){return e.getAttribute("data-hs-combo-box-group-title")===t.selectedGroup}));t.tabs.forEach((function(t){return t.classList.remove("active")})),e.classList.add("active"),t.setItemsVisibility()})),this.groups.forEach((function(e){var i=(0,p.htmlToElement)(t.groupingTitleTemplate);i.setAttribute("data-hs-combo-box-group-title",e.name),i.classList.add("--exclude-accessibility"),i.innerText=e.title,t.tabs=a(a([],t.tabs,!0),[i],!1),o.append(i),i.addEventListener("click",(function(){t.selectedGroup=e.name;var o=t.tabs.find((function(e){return e.getAttribute("data-hs-combo-box-group-title")===t.selectedGroup}));t.tabs.forEach((function(t){return t.classList.remove("active")})),o.classList.add("active"),t.setItemsVisibility()}))}))},e.prototype.groupDefaultRender=function(){var t=this;this.groups.forEach((function(e){var o=(0,p.htmlToElement)(t.groupingTitleTemplate);o.setAttribute("data-hs-combo-box-group-title",e.name),o.classList.add("--exclude-accessibility"),o.innerText=e.title,t.itemsWrapper?t.itemsWrapper.append(o):t.output.append(o);var i=t.sortItems().filter((function(t){return JSON.parse(t.getAttribute("data-hs-combo-box-output-item")).group.name===e.name}));t.plainRender(i)}))},e.prototype.itemsFromHtml=function(){if("default"===this.groupingType)this.groupDefaultRender();else if("tabs"===this.groupingType){var t=this.sortItems();this.groupTabsRender(),this.plainRender(t)}else{t=this.sortItems();this.plainRender(t)}this.setResults(this.input.value)},e.prototype.buildToggle=function(){var t,e,o,i,n=this;this.isOpened?((null===(t=null==this?void 0:this.toggle)||void 0===t?void 0:t.ariaExpanded)&&(this.toggle.ariaExpanded="true"),(null===(e=null==this?void 0:this.input)||void 0===e?void 0:e.ariaExpanded)&&(this.input.ariaExpanded="true")):((null===(o=null==this?void 0:this.toggle)||void 0===o?void 0:o.ariaExpanded)&&(this.toggle.ariaExpanded="false"),(null===(i=null==this?void 0:this.input)||void 0===i?void 0:i.ariaExpanded)&&(this.input.ariaExpanded="false")),this.toggle.addEventListener("click",(function(){n.isOpened?n.close():n.open(n.toggle.getAttribute("data-hs-combo-box-toggle"))}))},e.prototype.buildToggleClose=function(){var t=this;this.toggleClose.addEventListener("click",(function(){return t.close()}))},e.prototype.buildToggleOpen=function(){var t=this;this.toggleOpen.addEventListener("click",(function(){return t.open()}))},e.prototype.setSelectedByValue=function(t){var e=this;this.items.forEach((function(o){e.isTextExists(o,t)?o.classList.add("selected"):o.classList.remove("selected")}))},e.prototype.setValue=function(t){this.selected=t,this.value=t,this.input.value=t,this.fireEvent("select",this.el),(0,p.dispatch)("select.hs.combobox",this.el,this.value)},e.prototype.setItemsVisibility=function(){var t=this;"tabs"===this.groupingType&&"all"!==this.selectedGroup&&this.items.forEach((function(t){t.style.display="none"}));var e="tabs"===this.groupingType?"all"===this.selectedGroup?this.items:this.items.filter((function(e){return JSON.parse(e.getAttribute("data-hs-combo-box-output-item")).group.name===t.selectedGroup})):this.items;"tabs"===this.groupingType&&"all"!==this.selectedGroup&&e.forEach((function(t){t.style.display="block"})),e.forEach((function(e){t.isTextExistsAny(e,t.value)?e.style.display="block":e.style.display="none"})),"default"===this.groupingType&&this.output.querySelectorAll("[data-hs-combo-box-group-title]").forEach((function(e){var o=e.getAttribute("data-hs-combo-box-group-title");t.items.filter((function(t){return JSON.parse(t.getAttribute("data-hs-combo-box-output-item")).group.name===o&&"block"===t.style.display})).length?e.style.display="block":e.style.display="none"}))},e.prototype.hasVisibleItems=function(){return!!this.items.length&&this.items.some((function(t){return"block"===t.style.display}))},e.prototype.appendItemsToWrapper=function(t){this.itemsWrapper?this.itemsWrapper.append(t):this.output.append(t)},e.prototype.buildOutputPlaceholder=function(){this.outputPlaceholder||(this.outputPlaceholder=(0,p.htmlToElement)(this.outputEmptyTemplate)),this.appendItemsToWrapper(this.outputPlaceholder)},e.prototype.destroyOutputPlaceholder=function(){this.outputPlaceholder&&this.outputPlaceholder.remove(),this.outputPlaceholder=null},e.prototype.resultItems=function(){if(!this.items.length)return!1;this.setItemsVisibility(),this.setSelectedByValue([this.selected])},e.prototype.setValueAndOpen=function(t){this.value=t,this.items.length&&this.setItemsVisibility()},e.prototype.open=function(t){var e=this;return!this.animationInProcess&&(void 0!==t&&this.setValueAndOpen(t),!this.preventVisibility&&(this.animationInProcess=!0,this.output.style.display="block",this.preventAutoPosition||this.recalculateDirection(),setTimeout((function(){var t,o;(null===(t=null==e?void 0:e.input)||void 0===t?void 0:t.ariaExpanded)&&(e.input.ariaExpanded="true"),(null===(o=null==e?void 0:e.toggle)||void 0===o?void 0:o.ariaExpanded)&&(e.toggle.ariaExpanded="true"),e.el.classList.add("active"),e.animationInProcess=!1})),void(this.isOpened=!0)))},e.prototype.setValueAndClear=function(t){t?this.setValue(t):this.setValue(this.selected),this.outputPlaceholder&&this.destroyOutputPlaceholder()},e.prototype.close=function(t){var e,o,i=this;return!this.animationInProcess&&(this.preventVisibility?(this.setValueAndClear(t),""!==this.input.value?this.el.classList.add("has-value"):this.el.classList.remove("has-value"),!1):(this.animationInProcess=!0,(null===(e=null==this?void 0:this.input)||void 0===e?void 0:e.ariaExpanded)&&(this.input.ariaExpanded="false"),(null===(o=null==this?void 0:this.toggle)||void 0===o?void 0:o.ariaExpanded)&&(this.toggle.ariaExpanded="false"),this.el.classList.remove("active"),this.preventAutoPosition||(this.output.classList.remove("bottom-full","top-full"),this.output.style.marginTop="",this.output.style.marginBottom=""),(0,p.afterTransition)(this.output,(function(){i.output.style.display="none",i.setValueAndClear(t),i.animationInProcess=!1})),""!==this.input.value?this.el.classList.add("has-value"):this.el.classList.remove("has-value"),void(this.isOpened=!1)))},e.prototype.recalculateDirection=function(){(0,p.isEnoughSpace)(this.output,this.input,"bottom",this.gap,this.viewport)?(this.output.classList.remove("bottom-full"),this.output.style.marginBottom="",this.output.classList.add("top-full"),this.output.style.marginTop="".concat(this.gap,"px")):(this.output.classList.remove("top-full"),this.output.style.marginTop="",this.output.classList.add("bottom-full"),this.output.style.marginBottom="".concat(this.gap,"px"))},e.getInstance=function(t,e){var o=window.$hsComboBoxCollection.find((function(e){return e.element.el===("string"==typeof t?document.querySelector(t):t)}));return o?e?o:o.element:null},e.autoInit=function(){window.$hsComboBoxCollection||(window.$hsComboBoxCollection=[]),document.querySelectorAll("[data-hs-combo-box]:not(.--prevent-on-load-init)").forEach((function(t){if(!window.$hsComboBoxCollection.find((function(e){var o;return(null===(o=null==e?void 0:e.element)||void 0===o?void 0:o.el)===t}))){var o=t.getAttribute("data-hs-combo-box"),i=o?JSON.parse(o):{};new e(t,i)}})),window.$hsComboBoxCollection&&(window.addEventListener("click",(function(t){var o=t.target;e.closeCurrentlyOpened(o)})),document.addEventListener("keydown",(function(t){return e.accessibility(t)})))},e.close=function(t){var e=window.$hsComboBoxCollection.find((function(e){return e.element.el===("string"==typeof t?document.querySelector(t):t)}));e&&e.element.isOpened&&e.element.close()},e.closeCurrentlyOpened=function(t){if(void 0===t&&(t=null),!t.closest("[data-hs-combo-box].active")){var e=window.$hsComboBoxCollection.filter((function(t){return t.element.isOpened}))||null;e&&e.forEach((function(t){t.element.close()}))}},e.getPreparedItems=function(t,e){return void 0===t&&(t=!1),e?(t?Array.from(e.querySelectorAll(":scope > *:not(.--exclude-accessibility)")).filter((function(t){return"none"!==t.style.display})).reverse():Array.from(e.querySelectorAll(":scope > *:not(.--exclude-accessibility)")).filter((function(t){return"none"!==t.style.display}))).filter((function(t){return!t.classList.contains("disabled")})):null},e.setHighlighted=function(t,e,o){e.focus(),o.value=e.querySelector("[data-hs-combo-box-value]").getAttribute("data-hs-combo-box-search-text"),t&&t.classList.remove("hs-combo-box-output-item-highlighted"),e.classList.add("hs-combo-box-output-item-highlighted")},e.accessibility=function(t){if(window.$hsComboBoxCollection.find((function(t){return t.element.preventVisibility?t.element.isCurrent:t.element.isOpened}))&&d.COMBO_BOX_ACCESSIBILITY_KEY_SET.includes(t.code)&&!t.metaKey)switch(t.code){case"Escape":t.preventDefault(),this.onEscape();break;case"ArrowUp":t.preventDefault(),t.stopImmediatePropagation(),this.onArrow();break;case"ArrowDown":t.preventDefault(),t.stopImmediatePropagation(),this.onArrow(!1);break;case"Home":t.preventDefault(),t.stopImmediatePropagation(),this.onStartEnd();break;case"End":t.preventDefault(),t.stopImmediatePropagation(),this.onStartEnd(!1);break;case"Enter":t.preventDefault(),this.onEnter(t)}},e.onEscape=function(){var t=window.$hsComboBoxCollection.find((function(t){return!t.element.preventVisibility&&t.element.isOpened}));t&&(t.element.close(),t.element.input.blur())},e.onArrow=function(t){var o;void 0===t&&(t=!0);var i=window.$hsComboBoxCollection.find((function(t){return t.element.preventVisibility?t.element.isCurrent:t.element.isOpened}));if(i){var n=null!==(o=i.element.itemsWrapper)&&void 0!==o?o:i.element.output;if(!n)return!1;var r,s=e.getPreparedItems(t,n),l=n.querySelector(".hs-combo-box-output-item-highlighted");l||s[0].classList.add("hs-combo-box-output-item-highlighted");var a=s.findIndex((function(t){return t===l}));a+1<s.length&&a++,r=s[a],e.setHighlighted(l,r,i.element.input)}},e.onStartEnd=function(t){var o;void 0===t&&(t=!0);var i=window.$hsComboBoxCollection.find((function(t){return t.element.preventVisibility?t.element.isCurrent:t.element.isOpened}));if(i){var n=null!==(o=i.element.itemsWrapper)&&void 0!==o?o:i.element.output;if(!n)return!1;var r=e.getPreparedItems(t,n),s=n.querySelector(".hs-combo-box-output-item-highlighted");r.length&&e.setHighlighted(s,r[0],i.element.input)}},e.onEnter=function(t){var e=t.target,o=window.$hsComboBoxCollection.find((function(e){return!(0,p.isParentOrElementHidden)(e.element.el)&&t.target.closest("[data-hs-combo-box]")===e.element.el})),i=o.element.el.querySelector(".hs-combo-box-output-item-highlighted a");e.hasAttribute("data-hs-combo-box-input")?(o.element.close(),e.blur()):(o.element.preventSelection||o.element.setSelectedByValue(o.element.valuesBySelector(t.target)),o.element.preventSelection&&i&&window.location.assign(i.getAttribute("href")),o.element.close(o.element.preventSelection?null:t.target.querySelector("[data-hs-combo-box-value]").getAttribute("data-hs-combo-box-search-text")))},e}(c.default);window.addEventListener("load",(function(){h.autoInit()})),document.addEventListener("scroll",(function(){if(!window.$hsComboBoxCollection)return!1;var t=window.$hsComboBoxCollection.find((function(t){return t.element.isOpened}));t&&!t.element.preventAutoPosition&&t.element.recalculateDirection()})),"undefined"!=typeof window&&(window.HSComboBox=h),e.default=h},292:function(t,e){
/*
 * @version: 2.5.1
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
var o=this;Object.defineProperty(e,"__esModule",{value:!0}),e.menuSearchHistory=e.classToClassList=e.htmlToElement=e.afterTransition=e.dispatch=e.debounce=e.isDirectChild=e.isFormElement=e.isParentOrElementHidden=e.isEnoughSpace=e.isIpadOS=e.isIOS=e.getZIndex=e.getClassPropertyAlt=e.getClassProperty=e.stringToBoolean=void 0,e.getHighestZIndex=function(t){var e=Number.NEGATIVE_INFINITY;return t.forEach((function(t){var o=i(t);"auto"!==o&&(o=parseInt(o,10))>e&&(e=o)})),e};e.stringToBoolean=function(t){return"true"===t};e.getClassProperty=function(t,e,o){return void 0===o&&(o=""),(window.getComputedStyle(t).getPropertyValue(e)||o).replace(" ","")};e.getClassPropertyAlt=function(t,e,o){void 0===o&&(o="");var i="";return t.classList.forEach((function(t){t.includes(e)&&(i=t)})),i.match(/:(.*)]/)?i.match(/:(.*)]/)[1]:o};var i=function(t){return window.getComputedStyle(t).getPropertyValue("z-index")};e.getZIndex=i;e.isIOS=function(){return!!/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)};e.isIpadOS=function(){return navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)};e.isDirectChild=function(t,e){for(var o=t.children,i=0;i<o.length;i++)if(o[i]===e)return!0;return!1};e.isEnoughSpace=function(t,e,o,i,n){void 0===o&&(o="auto"),void 0===i&&(i=10),void 0===n&&(n=null);var r=e.getBoundingClientRect(),s=n?n.getBoundingClientRect():null,l=window.innerHeight,a=s?r.top-s.top:r.top,u=(n?s.bottom:l)-r.bottom,p=t.clientHeight+i;return"bottom"===o?u>=p:"top"===o?a>=p:a>=p||u>=p};e.isFormElement=function(t){return t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement};var n=function(t){return!!t&&("none"===window.getComputedStyle(t).display||n(t.parentElement))};e.isParentOrElementHidden=n;e.debounce=function(t,e){var i;return void 0===e&&(e=200),function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];clearTimeout(i),i=setTimeout((function(){t.apply(o,n)}),e)}};e.dispatch=function(t,e,o){void 0===o&&(o=null);var i=new CustomEvent(t,{detail:{payload:o},bubbles:!0,cancelable:!0,composed:!1});e.dispatchEvent(i)};e.afterTransition=function(t,e){var o=function(){e(),t.removeEventListener("transitionend",o,!0)},i=window.getComputedStyle(t),n=i.getPropertyValue("transition-duration");"none"!==i.getPropertyValue("transition-property")&&parseFloat(n)>0?t.addEventListener("transitionend",o,!0):e()};e.htmlToElement=function(t){var e=document.createElement("template");return t=t.trim(),e.innerHTML=t,e.content.firstChild};e.classToClassList=function(t,e,o,i){void 0===o&&(o=" "),void 0===i&&(i="add"),t.split(o).forEach((function(t){return"add"===i?e.classList.add(t):e.classList.remove(t)}))};e.menuSearchHistory={historyIndex:-1,addHistory:function(t){this.historyIndex=t},existsInHistory:function(t){return t>this.historyIndex},clearHistory:function(){this.historyIndex=-1}}}},e={};var o=function o(i){var n=e[i];if(void 0!==n)return n.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,o),r.exports}(809);return o})()));