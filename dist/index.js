"use strict";var m=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var o=m(function(p,v){
var g=require('@stdlib/assert-is-collection/dist'),y=require('@stdlib/assert-is-function/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function f(e,r,t){var i,u,n,a;if(!g(e))throw new TypeError(s('1V1Ah',e));if(!y(r))throw new TypeError(s('1V12H',r));for(u=e.length,i={},a=u-1;a>=0;a--)n=r.call(t,e[a],a),i[n]=e[a];return i}v.exports=f
});var h=o();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
