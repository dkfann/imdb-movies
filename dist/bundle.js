!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,r){(function(e,n){/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.0
 */
!function(e,r){t.exports=r()}(0,function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function o(t){return"function"==typeof t}function i(t){K=t}function s(t){V=t}function u(){return void 0!==Y?function(){Y(c)}:a()}function a(){var t=setTimeout;return function(){return t(c,1)}}function c(){for(var t=0;t<G;t+=2){(0,Q[t])(Q[t+1]),Q[t]=void 0,Q[t+1]=void 0}G=0}function f(t,e){var r=arguments,n=this,o=new this.constructor(h);void 0===o[tt]&&U(o);var i=n._state;return i?function(){var t=r[i-1];V(function(){return j(i,o,t,n._result)})}():x(n,o,t,e),o}function l(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var r=new e(h);return _(r,t),r}function h(){}function p(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function y(t){try{return t.then}catch(t){return ot.error=t,ot}}function v(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}function b(t,e,r){V(function(t){var n=!1,o=v(r,e,function(r){n||(n=!0,e!==r?_(t,r):T(t,r))},function(e){n||(n=!0,A(t,e))},"Settle: "+(t._label||" unknown promise"));!n&&o&&(n=!0,A(t,o))},t)}function m(t,e){e._state===rt?T(t,e._result):e._state===nt?A(t,e._result):x(e,void 0,function(e){return _(t,e)},function(e){return A(t,e)})}function w(t,e,r){e.constructor===t.constructor&&r===f&&e.constructor.resolve===l?m(t,e):r===ot?(A(t,ot.error),ot.error=null):void 0===r?T(t,e):o(r)?b(t,e,r):T(t,e)}function _(e,r){e===r?A(e,p()):t(r)?w(e,r,y(r)):T(e,r)}function g(t){t._onerror&&t._onerror(t._result),E(t)}function T(t,e){t._state===et&&(t._result=e,t._state=rt,0!==t._subscribers.length&&V(E,t))}function A(t,e){t._state===et&&(t._state=nt,t._result=e,V(g,t))}function x(t,e,r,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+rt]=r,o[i+nt]=n,0===i&&t._state&&V(E,t)}function E(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)n=e[s],o=e[s+r],n?j(r,n,o,i):o(i);t._subscribers.length=0}}function B(){this.error=null}function P(t,e){try{return t(e)}catch(t){return it.error=t,it}}function j(t,e,r,n){var i=o(r),s=void 0,u=void 0,a=void 0,c=void 0;if(i){if(s=P(r,n),s===it?(c=!0,u=s.error,s.error=null):a=!0,e===s)return void A(e,d())}else s=n,a=!0;e._state!==et||(i&&a?_(e,s):c?A(e,u):t===rt?T(e,s):t===nt&&A(e,s))}function O(t,e){try{e(function(e){_(t,e)},function(e){A(t,e)})}catch(e){A(t,e)}}function S(){return st++}function U(t){t[tt]=st++,t._state=void 0,t._result=void 0,t._subscribers=[]}function R(t,e){this._instanceConstructor=t,this.promise=new t(h),this.promise[tt]||U(this.promise),N(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?T(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&T(this.promise,this._result))):A(this.promise,I())}function I(){return new Error("Array Methods must be provided an Array")}function k(t){return new R(this,t).promise}function D(t){var e=this;return new e(N(t)?function(r,n){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(r,n)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function F(t){var e=this,r=new e(h);return A(r,t),r}function L(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function C(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function M(t){this[tt]=S(),this._result=this._state=void 0,this._subscribers=[],h!==t&&("function"!=typeof t&&L(),this instanceof M?O(this,t):C())}function q(){var t=void 0;if(void 0!==n)t=n;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=M}var H=void 0;H=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var N=H,G=0,Y=void 0,K=void 0,V=function(t,e){Q[G]=t,Q[G+1]=e,2===(G+=2)&&(K?K(c):Z())},X="undefined"!=typeof window?window:void 0,z=X||{},J=z.MutationObserver||z.WebKitMutationObserver,W="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),$="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Q=new Array(1e3),Z=void 0;Z=W?function(){return function(){return e.nextTick(c)}}():J?function(){var t=0,e=new J(c),r=document.createTextNode("");return e.observe(r,{characterData:!0}),function(){r.data=t=++t%2}}():$?function(){var t=new MessageChannel;return t.port1.onmessage=c,function(){return t.port2.postMessage(0)}}():void 0===X?function(){try{var t=r(6);return Y=t.runOnLoop||t.runOnContext,u()}catch(t){return a()}}():a();var tt=Math.random().toString(36).substring(16),et=void 0,rt=1,nt=2,ot=new B,it=new B,st=0;return R.prototype._enumerate=function(){for(var t=this.length,e=this._input,r=0;this._state===et&&r<t;r++)this._eachEntry(e[r],r)},R.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===l){var o=y(t);if(o===f&&t._state!==et)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(r===M){var i=new r(h);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new r(function(e){return e(t)}),e)}else this._willSettleAt(n(t),e)},R.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===et&&(this._remaining--,t===nt?A(n,r):this._result[e]=r),0===this._remaining&&T(n,this._result)},R.prototype._willSettleAt=function(t,e){var r=this;x(t,void 0,function(t){return r._settledAt(rt,e,t)},function(t){return r._settledAt(nt,e,t)})},M.all=k,M.race=D,M.resolve=l,M.reject=F,M._setScheduler=i,M._setAsap=s,M._asap=V,M.prototype={constructor:M,then:f,catch:function(t){return this.then(null,t)}},M.polyfill=q,M.Promise=M,M})}).call(e,r(3),r(4))},function(t,e,r){r(5),t.exports=self.fetch.bind(self)},function(t,e,r){"use strict";function n(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function n(o,i){try{var s=e[o](i),u=s.value}catch(t){return void r(t)}if(!s.done)return Promise.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}return n("next")})}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();r(0).polyfill(),r(1);var s=function(){function t(){o(this,t)}return i(t,[{key:"fetchImdbMovie",value:function(){function t(t){return e.apply(this,arguments)}var e=n(regeneratorRuntime.mark(function t(e){var r,n,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://www.omdbapi.com"+e,t.next=3,fetch(r);case 3:return n=t.sent,t.next=6,n.json();case 6:if(o=t.sent,200===n.status){t.next=9;break}throw Error(o.message);case 9:return t.abrupt("return",o);case 10:case"end":return t.stop()}},t,this)}));return t}()},{key:"getByTitle",value:function(){function t(t){return e.apply(this,arguments)}var e=n(regeneratorRuntime.mark(function t(e){var r,n,o,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=3;break}return console.error("title is required!"),t.abrupt("return");case 3:return t.prev=3,r=i?"&Season="+i:"",n=s?"&Episode="+s:"",t.next=8,this.fetchImdbMovie("/?t="+e+r+n);case 8:return o=t.sent,console.log(o),t.abrupt("return",o);case 13:t.prev=13,t.t0=t.catch(3),console.error("Error: "+t.t0.message);case 16:case"end":return t.stop()}},t,this,[[3,13]])}));return t}()},{key:"getById",value:function(){function t(t){return e.apply(this,arguments)}var e=n(regeneratorRuntime.mark(function t(e){var r,n,o,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=3;break}return console.error("id is required!"),t.abrupt("return");case 3:return t.prev=3,r=i?"&Season="+i:"",n=s?"&Episode="+s:"",t.next=8,this.fetchImdbMovie("/?i="+e+r+n);case 8:return o=t.sent,console.log(o),t.abrupt("return",o);case 13:t.prev=13,t.t0=t.catch(3),console.error("Error: "+t.t0.message);case 16:case"end":return t.stop()}},t,this,[[3,13]])}));return t}()},{key:"hello",value:function(){return"hello world"}}]),t}();t.exports=s},function(t,e){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===n||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function s(){y&&p&&(y=!1,p.length?d=p.concat(d):v=-1,d.length&&u())}function u(){if(!y){var t=o(s);y=!0;for(var e=d.length;e;){for(p=d,d=[];++v<e;)p&&p[v].run();v=-1,e=d.length}p=null,y=!1,i(t)}}function a(t,e){this.fun=t,this.array=e}function c(){}var f,l,h=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(t){f=r}try{l="function"==typeof clearTimeout?clearTimeout:n}catch(t){l=n}}();var p,d=[],y=!1,v=-1;h.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];d.push(new a(t,e)),1!==d.length||y||o(u)},a.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=c,h.addListener=c,h.once=c,h.off=c,h.removeListener=c,h.removeAllListeners=c,h.emit=c,h.prependListener=c,h.prependOnceListener=c,h.listeners=function(t){return[]},h.binding=function(t){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(t){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e){!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!=typeof t&&(t=String(t)),t}function n(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return b.iterable&&(e[Symbol.iterator]=function(){return e}),e}function o(t){this.map={},t instanceof o?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function i(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function s(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function u(t){var e=new FileReader,r=s(e);return e.readAsArrayBuffer(t),r}function a(t){var e=new FileReader,r=s(e);return e.readAsText(t),r}function c(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}function f(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(b.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(b.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(b.arrayBuffer&&b.blob&&w(t))this._bodyArrayBuffer=f(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!b.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!_(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(u)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return a(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(c(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(d)}),this.json=function(){return this.text().then(JSON.parse)},this}function h(t){var e=t.toUpperCase();return g.indexOf(e)>-1?e:t}function p(t,e){e=e||{};var r=e.body;if(t instanceof p){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new o(e.headers)),this.method=h(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function d(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function y(t){var e=new o;return t.split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e}function v(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new o(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var b={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(b.arrayBuffer)var m=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],w=function(t){return t&&DataView.prototype.isPrototypeOf(t)},_=ArrayBuffer.isView||function(t){return t&&m.indexOf(Object.prototype.toString.call(t))>-1};o.prototype.append=function(t,n){t=e(t),n=r(n);var o=this.map[t];this.map[t]=o?o+","+n:n},o.prototype.delete=function(t){delete this.map[e(t)]},o.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},o.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},o.prototype.set=function(t,n){this.map[e(t)]=r(n)},o.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},o.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),n(t)},o.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),n(t)},o.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),n(t)},b.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},l.call(p.prototype),l.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var T=[301,302,303,307,308];v.redirect=function(t,e){if(-1===T.indexOf(e))throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})},t.Headers=o,t.Request=p,t.Response=v,t.fetch=function(t,e){return new Promise(function(r,n){var o=new p(t,e),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var e="response"in i?i.response:i.responseText;r(new v(e,t))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&b.blob&&(i.responseType="blob"),o.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},function(t,e){}]);