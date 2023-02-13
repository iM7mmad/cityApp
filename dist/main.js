(()=>{"use strict";var e={817:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,":root{--primary-color: #393E46;--secondary-color: #6D9886;--backgroundAndHoverColor: #F7EFE5;--default-transition: 0.2s}*{box-sizing:border-box;font-family:'Ubuntu', sans-serif}body{display:flex;flex-direction:column;gap:30px;height:100vh;margin:0;padding:0;background-color:var(--backgroundAndHoverColor)}.container{border-radius:10px;width:100%;background-color:white;display:flex;height:100%;justify-content:space-between;align-items:center;padding:10px;margin:20px auto}body .header{display:flex;width:30%;gap:20px;flex-direction:column;justify-content:center;align-items:center}.header h1{color:var(--primary-color);transition:var(--default-transition);padding:10px;margin:0}.header p{color:var(--secondary-color);font-weight:bold;font-size:10px;margin:0}#entryHolder{width:70%;height:100%;display:flex;justify-content:center;align-items:center;border-radius:10px;background-color:var(--primary-color);color:white;gap:10px;flex-direction:column}#entryHolder #date{font-size:20px}@media (max-width: 580px){.container{flex-direction:column}body .header{width:100%;height:50%}#entryHolder{width:100%;height:50%}}@media (min-width: 768px){.container{width:750px}.header h1{font-size:45px}.header p{font-size:15px}}@media (min-width: 992px){.container{width:970px}.header h1{font-size:50px}.header p{font-size:18px}}@media (min-width: 1200px){.container{width:1170px}.header h1{font-size:75px}.header p{font-size:18px}}#entryHolder img{border-radius:15px;width:50px;padding:0;background-color:var(--secondary-color);transition:var(--default-transition)}#entryHolder #picture{display:flex;justify-content:center}#entryHolder #picture img{border-radius:5px;width:60%}img:hover{transform:rotate(-1deg)}input{padding:10px;width:80%;height:35px;border-radius:8px;border:none;background-color:var(--backgroundAndHoverColor);outline:none;color:var(--primary-color);font-weight:600}input::placeholder{font-size:small;font-weight:400}button{width:60%;font-size:large;font-weight:bold;border-radius:30px;padding:8px;border:none;cursor:pointer;outline:none;color:white;transition:var(--default-transition);background-color:var(--primary-color)}button:hover{color:var(--secondary-color);background-color:var(--primary-color)}.information{color:var(--backgroundAndHoverColor);letter-spacing:2px}#entryHolder #date{font-weight:bold;color:var(--secondary-color)}\n",""]);const d=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],d=0;d<e.length;d++){var c=e[d],s=o.base?c[0]+o.base:c[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=n(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=r(h,o);o.byIndex=d,t.splice(d,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=n(a[i]);t[d].references--}for(var c=o(e,r),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e="af37cdc0f6bd4c77a2cdddf01a1ad539",t="33608293-07d7a9e438e90c83066b9dd2b",o="im7mmad";let r=new Date,a=r.getMonth()+1+"-"+r.getDate()+"-"+r.getFullYear();var i=n(379),d=n.n(i),c=n(795),s=n.n(c),l=n(569),u=n.n(l),p=n(565),h=n.n(p),f=n(216),g=n.n(f),m=n(589),v=n.n(m),y=n(817),x={};x.styleTagTransform=v(),x.setAttributes=h(),x.insert=u().bind(null,"head"),x.domAPI=s(),x.insertStyleElement=g(),d()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals,document.getElementById("generate").addEventListener("click",(n=>{!async function(n){n.preventDefault(),console.log("Started Handling Button Click");let r=document.getElementById("cityname").value;document.getElementById("feelings");try{const n=`http://api.geonames.org/searchJSON?q=${r}&maxRows=10&username=${o}`,i=`https://pixabay.com/api/?key=${t}&q=${r}&image_type=photo&pretty=true`,d=`https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=${e}&include=minutely&city=${r}`,c=await fetch(d).then((e=>e.json())),s=await fetch(n).then((e=>e.json())),l=await fetch(i).then((e=>e.json())),u=c.data[0].city_name;console.log(u);const p=s.geonames[0].population,h=l.hits[0].largeImageURL,f=c.data[0].country_code,g=Math.round(c.data[0].lon),m=Math.round(c.data[0].lat),v=c.data[0].timezone,y=c.data[0].weather.icon;await fetch("http://localhost:5000/weather",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:a,city:u,country:f,lon:g,lat:m,timezone:v,population:p,picture:h})}),async function(e){let t=document.getElementById("entryHolder");const n=await fetch("http://localhost:5000/all"),o=await n.json();t.innerHTML=`\n            <div id="date">Today is: <strong><u>${o.date}</u></strong></div>\n            <div id="country">Country is: <strong><u>${o.country}</u></strong></div>\n            <div id="coordinates"> The coordinates are: Latitude: <strong><u>${o.lat}</u></strong>, Longtitude: <strong><u>${o.lon}</u></strong></div>\n            <img src="https://www.weatherbit.io/static/img/icons/${e}.png">\n            <div id="timezone"> Timezone: <strong><u>${o.timezone}</u></strong></div>\n            <div id="population"> The population is: <strong><u>${o.population}</u></strong></div>\n            <div id="picture"><img src="${o.picture}"></div>\n    \n    `}(y)}catch(e){console.log("Zipcode is wrong",e)}}(n)}))})()})();