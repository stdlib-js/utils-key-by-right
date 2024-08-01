// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function e(e,o,i){var n,d;if(!r(e))throw new TypeError(s("1V1Ah",e));if(!t(o))throw new TypeError(s("1V12H",o));for(n={},d=e.length-1;d>=0;d--)n[o.call(i,e[d],d)]=e[d];return n}export{e as default};
//# sourceMappingURL=index.mjs.map
