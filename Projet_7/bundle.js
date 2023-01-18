(()=>{"use strict";var n={902:(n,t,e)=>{e.d(t,{Z:()=>u});var r=e(81),o=e.n(r),a=e(645),i=e.n(a),c=e(667),s=e.n(c),d=new URL(e(429),e.b),p=i()(o()),l=s()(d);p.push([n.id,"* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\toutline: none;\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nbody {\n\tbackground: linear-gradient(to right, #fe4d21, #fd943c);\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n.container {\n\tbackground: linear-gradient(to right, #5af5d0, #4bcff0);\n\theight: 100%;\n\tborder-radius: 40px;\n\tmargin-top: 10vh;\n}\n\n.form-container {\n\tpadding: 30px 140px;\n}\n\nh1 {\n\ttext-transform: uppercase;\n\tcolor: #5e423d;\n\ttext-shadow: -2px 2px 1px #fe4d21;\n\tfont-size: 3.3rem;\n\tletter-spacing: 8px;\n\tmargin-bottom: 40px;\n}\n\nform {\n\ttext-align: center;\n}\n\ninput {\n\tbackground: linear-gradient(to right, #fe4d21, #fd943c);\n\tfont-size: 1.3rem;\n\tpadding: 10px 0 10px 15px;\n\tcolor: #b0ecc2;\n\tborder-radius: 50px;\n\tmargin: 0 auto;\n\tborder: 2px solid rgb(255, 0, 0);\n\tbox-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.4);\n\tmargin-bottom: 20px;\n}\n\ninput:focus {\n\tborder: 2px solid yellow;\n}\n\ninput::placeholder {\n\t/* color: rgba(255, 255, 255, 0.8); */\n\tcolor: #b0ecc2;\n}\n\nul {\n\tmargin: 0 0 40px 80px;\n\twidth: 80%;\n}\n\nli {\n\tfont-size: 1.2rem;\n\tlist-style-type: circle;\n\tmargin-bottom: 15px;\n\tfont-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',\n\t\t'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n\tcursor: pointer;\n\tanimation: anim 1s forwards;\n}\n\nli::marker {\n\tcolor: black;\n}\n\nul li:after {\n\topacity: 0;\n}\n\nul li:hover::after {\n\tcontent: ' (terminé)';\n\tcolor: #fe4d21;\n\tfont-style: italic;\n\tfont-size: 1rem;\n\tanimation: anim 500ms forwards;\n}\n\n@keyframes anim {\n\tto {\n\t\topacity: 1;\n\t}\n}\n\n.checked {\n\tlist-style-image: url("+l+");\n\ttext-decoration: line-through;\n}\n\nli.checked::after {\n\topacity: 0;\n}\n\nli.checked:hover::after {\n\tcontent: ' (supprimer)';\n\tcolor: #fe4d21;\n\tfont-style: italic;\n\tfont-size: 1rem;\n\tanimation: anim 500ms forwards;\n}\n\n/*********************** RESPONSIVE *************************/\n@media screen and (max-width: 1024px) {\n\t.form-container {\n\t\tpadding: 25px 120px;\n\t}\n\n\th1 {\n\t\tfont-size: 3rem;\n\t}\n}\n\n@media screen and (max-width: 768px) {\n\t.form-container {\n\t\tpadding: 20px 60px;\n\t}\n\n\th1 {\n\t\tfont-size: 2.7rem;\n\t}\n\n\tul {\n\t\tmargin: 0 0 40px 60px;\n\t}\n}\n\n@media screen and (max-width: 425px) {\n\t.form-container {\n\t\tpadding: 20px 10px;\n\t}\n\n\th1 {\n\t\tfont-size: 2.2rem;\n\t\ttext-align: center;\n\t}\n\n\tul {\n\t\tmargin: 0 0 40px 60px;\n\t}\n\n\tinput {\n\t\tfont-size: 1.1rem;\n\t\tpadding: 5px 0 5px 8px;\n\t\tmargin-bottom: 20px;\n\t\twidth: 200px;\n\t}\n}\n\n@media screen and (max-width: 375px) {\n\t.form-container {\n\t\tpadding: 10px 5px;\n\t}\n\n\th1 {\n\t\tfont-size: 2rem;\n\t}\n\n\tul {\n\t\tmargin: 0 0 40px 50px;\n\t}\n\n\tinput {\n\t\tfont-size: 1rem;\n\t\twidth: 150px;\n\t}\n}\n",""]);const u=p},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],p=a[d]||0,l="".concat(d," ").concat(p);a[d]=p+1;var u=e(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);t[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var p=e(a[d]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}a=s}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},429:(n,t,e)=>{n.exports=e.p+"bd4b78e03f5b6c1efc9f.png"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(379),t=e.n(n),r=e(795),o=e.n(r),a=e(569),i=e.n(a),c=e(565),s=e.n(c),d=e(216),p=e.n(d),l=e(589),u=e.n(l),f=e(902),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=p(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=document.querySelector("form"),g=document.querySelector(".form-input"),x=document.querySelector(".list");function v(){window.localStorage.todoList=x.innerHTML}window.addEventListener("load",void(window.localStorage.todoList?x.innerHTML=window.localStorage.todoList:(x.innerHTML="<li>Cliquez sur une tâche pour la supprimer</li>",document.querySelector("li").classList.add("test")))),h.addEventListener("submit",(n=>{n.preventDefault();let t=g.value;g.value="";const e=document.createElement("li");let r=document.createTextNode(t);e.appendChild(r),x.appendChild(e);const o=[e.textContent,!1];data.push(o),v()})),x.addEventListener("click",(n=>{n.target.id,n.target.classList.contains("checked")?(n.target.remove(),v()):(n.target.classList.add("checked"),v())}))})()})();