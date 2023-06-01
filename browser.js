// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).keyByRight=t()}(this,(function(){"use strict";var e=Math.floor;function t(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&(r=t.length,e(r)===r)&&t.length>=0&&t.length<=9007199254740991;var r}var r=/./,n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o,i=Object.defineProperty,u=Object.prototype,f=u.toString,l=u.__defineGetter__,c=u.__defineSetter__,a=u.__lookupGetter__,y=u.__lookupSetter__;o=function(){try{return n({},"x",{}),!0}catch(e){return!1}}()?i:function(e,t,r){var n,o,i,p;if("object"!=typeof e||null===e||"[object Array]"===f.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===f.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(a.call(e,t)||y.call(e,t)?(n=e.__proto__,e.__proto__=u,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),i="get"in r,p="set"in r,o&&(i||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&l&&l.call(e,t,r.get),p&&c&&c.call(e,t,r.set),e};var p=o;function s(e,t,r){p(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function b(e){return"boolean"==typeof e}var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return d&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;var h="function"==typeof Symbol?Symbol.toStringTag:"";var _=v()?function(e){var t,r,n,o,i;if(null==e)return g.call(e);r=e[h],i=h,t=null!=(o=e)&&w.call(o,i);try{e[h]=void 0}catch(t){return g.call(e)}return n=g.call(e),t?e[h]=r:delete e[h],n}:function(e){return g.call(e)},m=Boolean.prototype.toString;var j=v();function S(e){return"object"==typeof e&&(e instanceof Boolean||(j?function(e){try{return m.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===_(e)))}function E(e){return b(e)||S(e)}function O(){return new Function("return this;")()}s(E,"isPrimitive",b),s(E,"isObject",S);var T="object"==typeof self?self:null,A="object"==typeof window?window:null,B="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},P="object"==typeof B?B:null;var k=function(e){if(arguments.length){if(!b(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return O()}if(T)return T;if(A)return A;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}(),x=k.document&&k.document.childNodes,M=Int8Array;function C(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;s(C,"REGEXP",V);var G=Array.isArray?Array.isArray:function(e){return"[object Array]"===_(e)};function L(e){return null!==e&&"object"==typeof e}function R(e){var t,r,n,o;if(("Object"===(r=_(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=V.exec(n.toString()))return t[1]}return L(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}s(L,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!G(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(L));var F="function"==typeof r||"object"==typeof M||"function"==typeof x?function(e){return R(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?R(e).toLowerCase():t};function I(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}return function(e,r,n){var o,i;if(!t(e))throw new TypeError(I("0kMBO",e));if("function"!==F(r))throw new TypeError(I("0kM2S",r));for(o={},i=e.length-1;i>=0;i--)o[r.call(n,e[i],i)]=e[i];return o}}));
//# sourceMappingURL=browser.js.map