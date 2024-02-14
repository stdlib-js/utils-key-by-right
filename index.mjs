// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function s(s,n,i){var o,m;if(!t(s))throw new TypeError(r("invalid argument. First argument must be a collection. Value: `%s`.",s));if(!e(n))throw new TypeError(r("invalid argument. Second argument must be a function. Value: `%s`.",n));for(o={},m=s.length-1;m>=0;m--)o[n.call(i,s[m],m)]=s[m];return o}export{s as default};
//# sourceMappingURL=index.mjs.map
