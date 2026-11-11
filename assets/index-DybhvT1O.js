(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function Dm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var vu={exports:{}},No={},_u={exports:{}},lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function Y0(){if(wp)return lt;wp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=x&&F[x]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,b={};function _(F,ne,Re){this.props=F,this.context=ne,this.refs=b,this.updater=Re||S}_.prototype.isReactComponent={},_.prototype.setState=function(F,ne){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ne,"setState")},_.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function g(){}g.prototype=_.prototype;function D(F,ne,Re){this.props=F,this.context=ne,this.refs=b,this.updater=Re||S}var P=D.prototype=new g;P.constructor=D,w(P,_.prototype),P.isPureReactComponent=!0;var N=Array.isArray,Z=Object.prototype.hasOwnProperty,k={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function q(F,ne,Re){var G,ce={},ge=null,xe=null;if(ne!=null)for(G in ne.ref!==void 0&&(xe=ne.ref),ne.key!==void 0&&(ge=""+ne.key),ne)Z.call(ne,G)&&!I.hasOwnProperty(G)&&(ce[G]=ne[G]);var Ne=arguments.length-2;if(Ne===1)ce.children=Re;else if(1<Ne){for(var Ae=Array(Ne),qe=0;qe<Ne;qe++)Ae[qe]=arguments[qe+2];ce.children=Ae}if(F&&F.defaultProps)for(G in Ne=F.defaultProps,Ne)ce[G]===void 0&&(ce[G]=Ne[G]);return{$$typeof:s,type:F,key:ge,ref:xe,props:ce,_owner:k.current}}function me(F,ne){return{$$typeof:s,type:F.type,key:ne,ref:F.ref,props:F.props,_owner:F._owner}}function E(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function R(F){var ne={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Re){return ne[Re]})}var V=/\/+/g;function j(F,ne){return typeof F=="object"&&F!==null&&F.key!=null?R(""+F.key):ne.toString(36)}function $(F,ne,Re,G,ce){var ge=typeof F;(ge==="undefined"||ge==="boolean")&&(F=null);var xe=!1;if(F===null)xe=!0;else switch(ge){case"string":case"number":xe=!0;break;case"object":switch(F.$$typeof){case s:case e:xe=!0}}if(xe)return xe=F,ce=ce(xe),F=G===""?"."+j(xe,0):G,N(ce)?(Re="",F!=null&&(Re=F.replace(V,"$&/")+"/"),$(ce,ne,Re,"",function(qe){return qe})):ce!=null&&(E(ce)&&(ce=me(ce,Re+(!ce.key||xe&&xe.key===ce.key?"":(""+ce.key).replace(V,"$&/")+"/")+F)),ne.push(ce)),1;if(xe=0,G=G===""?".":G+":",N(F))for(var Ne=0;Ne<F.length;Ne++){ge=F[Ne];var Ae=G+j(ge,Ne);xe+=$(ge,ne,Re,Ae,ce)}else if(Ae=y(F),typeof Ae=="function")for(F=Ae.call(F),Ne=0;!(ge=F.next()).done;)ge=ge.value,Ae=G+j(ge,Ne++),xe+=$(ge,ne,Re,Ae,ce);else if(ge==="object")throw ne=String(F),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return xe}function ae(F,ne,Re){if(F==null)return F;var G=[],ce=0;return $(F,G,"","",function(ge){return ne.call(Re,ge,ce++)}),G}function J(F){if(F._status===-1){var ne=F._result;ne=ne(),ne.then(function(Re){(F._status===0||F._status===-1)&&(F._status=1,F._result=Re)},function(Re){(F._status===0||F._status===-1)&&(F._status=2,F._result=Re)}),F._status===-1&&(F._status=0,F._result=ne)}if(F._status===1)return F._result.default;throw F._result}var le={current:null},O={transition:null},de={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:O,ReactCurrentOwner:k};function se(){throw Error("act(...) is not supported in production builds of React.")}return lt.Children={map:ae,forEach:function(F,ne,Re){ae(F,function(){ne.apply(this,arguments)},Re)},count:function(F){var ne=0;return ae(F,function(){ne++}),ne},toArray:function(F){return ae(F,function(ne){return ne})||[]},only:function(F){if(!E(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},lt.Component=_,lt.Fragment=n,lt.Profiler=a,lt.PureComponent=D,lt.StrictMode=r,lt.Suspense=p,lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,lt.act=se,lt.cloneElement=function(F,ne,Re){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var G=w({},F.props),ce=F.key,ge=F.ref,xe=F._owner;if(ne!=null){if(ne.ref!==void 0&&(ge=ne.ref,xe=k.current),ne.key!==void 0&&(ce=""+ne.key),F.type&&F.type.defaultProps)var Ne=F.type.defaultProps;for(Ae in ne)Z.call(ne,Ae)&&!I.hasOwnProperty(Ae)&&(G[Ae]=ne[Ae]===void 0&&Ne!==void 0?Ne[Ae]:ne[Ae])}var Ae=arguments.length-2;if(Ae===1)G.children=Re;else if(1<Ae){Ne=Array(Ae);for(var qe=0;qe<Ae;qe++)Ne[qe]=arguments[qe+2];G.children=Ne}return{$$typeof:s,type:F.type,key:ce,ref:ge,props:G,_owner:xe}},lt.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:c,_context:F},F.Consumer=F},lt.createElement=q,lt.createFactory=function(F){var ne=q.bind(null,F);return ne.type=F,ne},lt.createRef=function(){return{current:null}},lt.forwardRef=function(F){return{$$typeof:f,render:F}},lt.isValidElement=E,lt.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:J}},lt.memo=function(F,ne){return{$$typeof:m,type:F,compare:ne===void 0?null:ne}},lt.startTransition=function(F){var ne=O.transition;O.transition={};try{F()}finally{O.transition=ne}},lt.unstable_act=se,lt.useCallback=function(F,ne){return le.current.useCallback(F,ne)},lt.useContext=function(F){return le.current.useContext(F)},lt.useDebugValue=function(){},lt.useDeferredValue=function(F){return le.current.useDeferredValue(F)},lt.useEffect=function(F,ne){return le.current.useEffect(F,ne)},lt.useId=function(){return le.current.useId()},lt.useImperativeHandle=function(F,ne,Re){return le.current.useImperativeHandle(F,ne,Re)},lt.useInsertionEffect=function(F,ne){return le.current.useInsertionEffect(F,ne)},lt.useLayoutEffect=function(F,ne){return le.current.useLayoutEffect(F,ne)},lt.useMemo=function(F,ne){return le.current.useMemo(F,ne)},lt.useReducer=function(F,ne,Re){return le.current.useReducer(F,ne,Re)},lt.useRef=function(F){return le.current.useRef(F)},lt.useState=function(F){return le.current.useState(F)},lt.useSyncExternalStore=function(F,ne,Re){return le.current.useSyncExternalStore(F,ne,Re)},lt.useTransition=function(){return le.current.useTransition()},lt.version="18.3.1",lt}var Tp;function Gd(){return Tp||(Tp=1,_u.exports=Y0()),_u.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function q0(){if(Ap)return No;Ap=1;var s=Gd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,m){var v,x={},y=null,S=null;m!==void 0&&(y=""+m),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(S=p.ref);for(v in p)r.call(p,v)&&!c.hasOwnProperty(v)&&(x[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)x[v]===void 0&&(x[v]=p[v]);return{$$typeof:e,type:f,key:y,ref:S,props:x,_owner:a.current}}return No.Fragment=n,No.jsx=d,No.jsxs=d,No}var Cp;function $0(){return Cp||(Cp=1,vu.exports=q0()),vu.exports}var A=$0(),nt=Gd();const K0=Dm(nt);var Za={},xu={exports:{}},Tn={},yu={exports:{}},Su={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function Z0(){return bp||(bp=1,(function(s){function e(O,de){var se=O.length;O.push(de);e:for(;0<se;){var F=se-1>>>1,ne=O[F];if(0<a(ne,de))O[F]=de,O[se]=ne,se=F;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var de=O[0],se=O.pop();if(se!==de){O[0]=se;e:for(var F=0,ne=O.length,Re=ne>>>1;F<Re;){var G=2*(F+1)-1,ce=O[G],ge=G+1,xe=O[ge];if(0>a(ce,se))ge<ne&&0>a(xe,ce)?(O[F]=xe,O[ge]=se,F=ge):(O[F]=ce,O[G]=se,F=G);else if(ge<ne&&0>a(xe,se))O[F]=xe,O[ge]=se,F=ge;else break e}}return de}function a(O,de){var se=O.sortIndex-de.sortIndex;return se!==0?se:O.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var p=[],m=[],v=1,x=null,y=3,S=!1,w=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(O){for(var de=n(m);de!==null;){if(de.callback===null)r(m);else if(de.startTime<=O)r(m),de.sortIndex=de.expirationTime,e(p,de);else break;de=n(m)}}function N(O){if(b=!1,P(O),!w)if(n(p)!==null)w=!0,J(Z);else{var de=n(m);de!==null&&le(N,de.startTime-O)}}function Z(O,de){w=!1,b&&(b=!1,g(q),q=-1),S=!0;var se=y;try{for(P(de),x=n(p);x!==null&&(!(x.expirationTime>de)||O&&!R());){var F=x.callback;if(typeof F=="function"){x.callback=null,y=x.priorityLevel;var ne=F(x.expirationTime<=de);de=s.unstable_now(),typeof ne=="function"?x.callback=ne:x===n(p)&&r(p),P(de)}else r(p);x=n(p)}if(x!==null)var Re=!0;else{var G=n(m);G!==null&&le(N,G.startTime-de),Re=!1}return Re}finally{x=null,y=se,S=!1}}var k=!1,I=null,q=-1,me=5,E=-1;function R(){return!(s.unstable_now()-E<me)}function V(){if(I!==null){var O=s.unstable_now();E=O;var de=!0;try{de=I(!0,O)}finally{de?j():(k=!1,I=null)}}else k=!1}var j;if(typeof D=="function")j=function(){D(V)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ae=$.port2;$.port1.onmessage=V,j=function(){ae.postMessage(null)}}else j=function(){_(V,0)};function J(O){I=O,k||(k=!0,j())}function le(O,de){q=_(function(){O(s.unstable_now())},de)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,J(Z))},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):me=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(O){switch(y){case 1:case 2:case 3:var de=3;break;default:de=y}var se=y;y=de;try{return O()}finally{y=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(O,de){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var se=y;y=O;try{return de()}finally{y=se}},s.unstable_scheduleCallback=function(O,de,se){var F=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?F+se:F):se=F,O){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=se+ne,O={id:v++,callback:de,priorityLevel:O,startTime:se,expirationTime:ne,sortIndex:-1},se>F?(O.sortIndex=se,e(m,O),n(p)===null&&O===n(m)&&(b?(g(q),q=-1):b=!0,le(N,se-F))):(O.sortIndex=ne,e(p,O),w||S||(w=!0,J(Z))),O},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(O){var de=y;return function(){var se=y;y=de;try{return O.apply(this,arguments)}finally{y=se}}}})(Su)),Su}var Rp;function Q0(){return Rp||(Rp=1,yu.exports=Z0()),yu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function J0(){if(Pp)return Tn;Pp=1;var s=Gd(),e=Q0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function y(t){return p.call(x,t)?!0:p.call(v,t)?!1:m.test(t)?x[t]=!0:(v[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(t,i,o,l,u,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new b(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new b(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new b(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new b(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new b(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new b(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new b(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new b(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new b(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,D);_[i]=new b(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,D);_[i]=new b(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,D);_[i]=new b(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new b(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new b(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,o,l){var u=_.hasOwnProperty(i)?_[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,u,l)&&(o=null),l||u===null?y(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):u.mustUseProperty?t[u.propertyName]=o===null?u.type===3?!1:"":o:(i=u.attributeName,l=u.attributeNamespace,o===null?t.removeAttribute(i):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Z=Symbol.for("react.element"),k=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),me=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),R=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),O=Symbol.iterator;function de(t){return t===null||typeof t!="object"?null:(t=O&&t[O]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,F;function ne(t){if(F===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+t}var Re=!1;function G(t,i){if(!t||Re)return"";Re=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var l=re}Reflect.construct(t,[],i)}else{try{i.call()}catch(re){l=re}t.call(i.prototype)}else{try{throw Error()}catch(re){l=re}t()}}catch(re){if(re&&l&&typeof re.stack=="string"){for(var u=re.stack.split(`
`),h=l.stack.split(`
`),M=u.length-1,U=h.length-1;1<=M&&0<=U&&u[M]!==h[U];)U--;for(;1<=M&&0<=U;M--,U--)if(u[M]!==h[U]){if(M!==1||U!==1)do if(M--,U--,0>U||u[M]!==h[U]){var z=`
`+u[M].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=M&&0<=U);break}}}finally{Re=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ne(t):""}function ce(t){switch(t.tag){case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return t=G(t.type,!1),t;case 11:return t=G(t.type.render,!1),t;case 1:return t=G(t.type,!0),t;default:return""}}function ge(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case k:return"Portal";case me:return"Profiler";case q:return"StrictMode";case j:return"Suspense";case $:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case R:return(t.displayName||"Context")+".Consumer";case E:return(t._context.displayName||"Context")+".Provider";case V:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ae:return i=t.displayName||null,i!==null?i:ge(t.type)||"Memo";case J:i=t._payload,t=t._init;try{return ge(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(i);case 8:return i===q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ne(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ae(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function qe(t){var i=Ae(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ht(t){t._valueTracker||(t._valueTracker=qe(t))}function ut(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ae(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function B(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function on(t,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function ct(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Ne(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function Qe(t,i){pt(t,i);var o=Ne(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?et(t,i.type,o):i.hasOwnProperty("defaultValue")&&et(t,i.type,Ne(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function At(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function et(t,i,o){(i!=="number"||B(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var L=Array.isArray;function T(t,i,o,l){if(t=t.options,i){i={};for(var u=0;u<o.length;u++)i["$"+o[u]]=!0;for(o=0;o<t.length;o++)u=i.hasOwnProperty("$"+t[o].value),t[o].selected!==u&&(t[o].selected=u),u&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Ne(o),i=null,u=0;u<t.length;u++){if(t[u].value===o){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function ee(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function he(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(L(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Ne(o)}}function ye(t,i){var o=Ne(i.value),l=Ne(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function fe(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Ye(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ce(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Ye(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fe,mt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,u){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,u)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Fe=Fe||document.createElement("div"),Fe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Fe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Me(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var ke={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},it=["Webkit","ms","Moz","O"];Object.keys(ke).forEach(function(t){it.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ke[i]=ke[t]})});function tt(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ke.hasOwnProperty(t)&&ke[t]?(""+i).trim():i+"px"}function ze(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,u=tt(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,u):t[o]=u}}var dt=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function st(t,i){if(i){if(dt[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Et(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var W=null;function Le(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ue=null,pe=null,be=null;function Ie(t){if(t=go(t)){if(typeof ue!="function")throw Error(n(280));var i=t.stateNode;i&&(i=fa(i),ue(t.stateNode,t.type,i))}}function ft(t){pe?be?be.push(t):be=[t]:pe=t}function Ot(){if(pe){var t=pe,i=be;if(be=pe=null,Ie(t),i)for(t=0;t<i.length;t++)Ie(i[t])}}function an(t,i){return t(i)}function gt(){}var Qt=!1;function zn(t,i,o){if(Qt)return t(i,o);Qt=!0;try{return an(t,i,o)}finally{Qt=!1,(pe!==null||be!==null)&&(gt(),Ot())}}function Hi(t,i){var o=t.stateNode;if(o===null)return null;var l=fa(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Zr=!1;if(f)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){Zr=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{Zr=!1}function Ks(t,i,o,l,u,h,M,U,z){var re=Array.prototype.slice.call(arguments,3);try{i.apply(o,re)}catch(_e){this.onError(_e)}}var Vi=!1,Sr=null,_i=!1,Qr=null,Jr={onError:function(t){Vi=!0,Sr=t}};function Yo(t,i,o,l,u,h,M,U,z){Vi=!1,Sr=null,Ks.apply(Jr,arguments)}function qo(t,i,o,l,u,h,M,U,z){if(Yo.apply(this,arguments),Vi){if(Vi){var re=Sr;Vi=!1,Sr=null}else throw Error(n(198));_i||(_i=!0,Qr=re)}}function xi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function $o(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Ko(t){if(xi(t)!==t)throw Error(n(188))}function C(t){var i=t.alternate;if(!i){if(i=xi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var u=o.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){o=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===o)return Ko(u),t;if(h===l)return Ko(u),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=u,l=h;else{for(var M=!1,U=u.child;U;){if(U===o){M=!0,o=u,l=h;break}if(U===l){M=!0,l=u,o=h;break}U=U.sibling}if(!M){for(U=h.child;U;){if(U===o){M=!0,o=h,l=u;break}if(U===l){M=!0,l=h,o=u;break}U=U.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function X(t){return t=C(t),t!==null?te(t):null}function te(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=te(t);if(i!==null)return i;t=t.sibling}return null}var ie=e.unstable_scheduleCallback,Y=e.unstable_cancelCallback,we=e.unstable_shouldYield,De=e.unstable_requestPaint,Te=e.unstable_now,We=e.unstable_getCurrentPriorityLevel,Ze=e.unstable_ImmediatePriority,Je=e.unstable_UserBlockingPriority,je=e.unstable_NormalPriority,Mt=e.unstable_LowPriority,Ct=e.unstable_IdlePriority,Pt=null,Ft=null;function _t(t){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Pt,t,void 0,(t.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Nn,Yt=Math.log,xt=Math.LN2;function Nn(t){return t>>>=0,t===0?32:31-(Yt(t)/xt|0)|0}var qn=64,Jt=4194304;function yi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nt(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,u=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var U=M&~u;U!==0?l=yi(U):(h&=M,h!==0&&(l=yi(h)))}else M=o&~u,M!==0?l=yi(M):h!==0&&(l=yi(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&u)===0&&(u=l&-l,h=i&-i,u>=h||u===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-Oe(i),u=1<<o,l|=t[o],i&=~u;return l}function li(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zs(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-Oe(h),U=1<<M,z=u[M];z===-1?((U&o)===0||(U&l)!==0)&&(u[M]=li(U,i)):z<=i&&(t.expiredLanes|=U),h&=~U}}function un(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function es(){var t=qn;return qn<<=1,(qn&4194240)===0&&(qn=64),t}function Qs(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Gi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Oe(i),t[i]=o}function pg(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var u=31-Oe(o),h=1<<u;i[u]=0,l[u]=-1,t[u]=-1,o&=~h}}function Bl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-Oe(o),u=1<<l;u&i|t[l]&i&&(t[l]|=i),o&=~u}}var Tt=0;function tf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var nf,Hl,rf,sf,of,Vl=!1,Zo=[],Wi=null,ji=null,Xi=null,Js=new Map,eo=new Map,Yi=[],mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function af(t,i){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":Js.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(i.pointerId)}}function to(t,i,o,l,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},i!==null&&(i=go(i),i!==null&&Hl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function gg(t,i,o,l,u){switch(i){case"focusin":return Wi=to(Wi,t,i,o,l,u),!0;case"dragenter":return ji=to(ji,t,i,o,l,u),!0;case"mouseover":return Xi=to(Xi,t,i,o,l,u),!0;case"pointerover":var h=u.pointerId;return Js.set(h,to(Js.get(h)||null,t,i,o,l,u)),!0;case"gotpointercapture":return h=u.pointerId,eo.set(h,to(eo.get(h)||null,t,i,o,l,u)),!0}return!1}function lf(t){var i=Mr(t.target);if(i!==null){var o=xi(i);if(o!==null){if(i=o.tag,i===13){if(i=$o(o),i!==null){t.blockedOn=i,of(t.priority,function(){rf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Wl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);W=l,o.target.dispatchEvent(l),W=null}else return i=go(o),i!==null&&Hl(i),t.blockedOn=o,!1;i.shift()}return!0}function cf(t,i,o){Qo(t)&&o.delete(i)}function vg(){Vl=!1,Wi!==null&&Qo(Wi)&&(Wi=null),ji!==null&&Qo(ji)&&(ji=null),Xi!==null&&Qo(Xi)&&(Xi=null),Js.forEach(cf),eo.forEach(cf)}function no(t,i){t.blockedOn===i&&(t.blockedOn=null,Vl||(Vl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,vg)))}function io(t){function i(u){return no(u,t)}if(0<Zo.length){no(Zo[0],t);for(var o=1;o<Zo.length;o++){var l=Zo[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Wi!==null&&no(Wi,t),ji!==null&&no(ji,t),Xi!==null&&no(Xi,t),Js.forEach(i),eo.forEach(i),o=0;o<Yi.length;o++)l=Yi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Yi.length&&(o=Yi[0],o.blockedOn===null);)lf(o),o.blockedOn===null&&Yi.shift()}var ts=N.ReactCurrentBatchConfig,Jo=!0;function _g(t,i,o,l){var u=Tt,h=ts.transition;ts.transition=null;try{Tt=1,Gl(t,i,o,l)}finally{Tt=u,ts.transition=h}}function xg(t,i,o,l){var u=Tt,h=ts.transition;ts.transition=null;try{Tt=4,Gl(t,i,o,l)}finally{Tt=u,ts.transition=h}}function Gl(t,i,o,l){if(Jo){var u=Wl(t,i,o,l);if(u===null)ac(t,i,l,ea,o),af(t,l);else if(gg(u,t,i,o,l))l.stopPropagation();else if(af(t,l),i&4&&-1<mg.indexOf(t)){for(;u!==null;){var h=go(u);if(h!==null&&nf(h),h=Wl(t,i,o,l),h===null&&ac(t,i,l,ea,o),h===u)break;u=h}u!==null&&l.stopPropagation()}else ac(t,i,l,null,o)}}var ea=null;function Wl(t,i,o,l){if(ea=null,t=Le(l),t=Mr(t),t!==null)if(i=xi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=$o(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ea=t,null}function uf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(We()){case Ze:return 1;case Je:return 4;case je:case Mt:return 16;case Ct:return 536870912;default:return 16}default:return 16}}var qi=null,jl=null,ta=null;function df(){if(ta)return ta;var t,i=jl,o=i.length,l,u="value"in qi?qi.value:qi.textContent,h=u.length;for(t=0;t<o&&i[t]===u[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===u[h-l];l++);return ta=u.slice(t,1<l?1-l:void 0)}function na(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ia(){return!0}function ff(){return!1}function Ln(t){function i(o,l,u,h,M){this._reactName=o,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(o=t[U],this[U]=o?o(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ia:ff,this.isPropagationStopped=ff,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ia)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ia)},persist:function(){},isPersistent:ia}),i}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Ln(ns),ro=se({},ns,{view:0,detail:0}),yg=Ln(ro),Yl,ql,so,ra=se({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==so&&(so&&t.type==="mousemove"?(Yl=t.screenX-so.screenX,ql=t.screenY-so.screenY):ql=Yl=0,so=t),Yl)},movementY:function(t){return"movementY"in t?t.movementY:ql}}),hf=Ln(ra),Sg=se({},ra,{dataTransfer:0}),Mg=Ln(Sg),Eg=se({},ro,{relatedTarget:0}),$l=Ln(Eg),wg=se({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),Tg=Ln(wg),Ag=se({},ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cg=Ln(Ag),bg=se({},ns,{data:0}),pf=Ln(bg),Rg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ng={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ng[t])?!!i[t]:!1}function Kl(){return Lg}var Dg=se({},ro,{key:function(t){if(t.key){var i=Rg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=na(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Pg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kl,charCode:function(t){return t.type==="keypress"?na(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?na(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ig=Ln(Dg),Ug=se({},ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mf=Ln(Ug),Fg=se({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kl}),kg=Ln(Fg),Og=se({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),zg=Ln(Og),Bg=se({},ra,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hg=Ln(Bg),Vg=[9,13,27,32],Zl=f&&"CompositionEvent"in window,oo=null;f&&"documentMode"in document&&(oo=document.documentMode);var Gg=f&&"TextEvent"in window&&!oo,gf=f&&(!Zl||oo&&8<oo&&11>=oo),vf=" ",_f=!1;function xf(t,i){switch(t){case"keyup":return Vg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function Wg(t,i){switch(t){case"compositionend":return yf(i);case"keypress":return i.which!==32?null:(_f=!0,vf);case"textInput":return t=i.data,t===vf&&_f?null:t;default:return null}}function jg(t,i){if(is)return t==="compositionend"||!Zl&&xf(t,i)?(t=df(),ta=jl=qi=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return gf&&i.locale!=="ko"?null:i.data;default:return null}}var Xg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Xg[t.type]:i==="textarea"}function Mf(t,i,o,l){ft(l),i=ca(i,"onChange"),0<i.length&&(o=new Xl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var ao=null,lo=null;function Yg(t){Bf(t,0)}function sa(t){var i=ls(t);if(ut(i))return t}function qg(t,i){if(t==="change")return i}var Ef=!1;if(f){var Ql;if(f){var Jl="oninput"in document;if(!Jl){var wf=document.createElement("div");wf.setAttribute("oninput","return;"),Jl=typeof wf.oninput=="function"}Ql=Jl}else Ql=!1;Ef=Ql&&(!document.documentMode||9<document.documentMode)}function Tf(){ao&&(ao.detachEvent("onpropertychange",Af),lo=ao=null)}function Af(t){if(t.propertyName==="value"&&sa(lo)){var i=[];Mf(i,lo,t,Le(t)),zn(Yg,i)}}function $g(t,i,o){t==="focusin"?(Tf(),ao=i,lo=o,ao.attachEvent("onpropertychange",Af)):t==="focusout"&&Tf()}function Kg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sa(lo)}function Zg(t,i){if(t==="click")return sa(i)}function Qg(t,i){if(t==="input"||t==="change")return sa(i)}function Jg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var $n=typeof Object.is=="function"?Object.is:Jg;function co(t,i){if($n(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var u=o[l];if(!p.call(i,u)||!$n(t[u],i[u]))return!1}return!0}function Cf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bf(t,i){var o=Cf(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Cf(o)}}function Rf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Rf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Pf(){for(var t=window,i=B();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=B(t.document)}return i}function ec(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function e0(t){var i=Pf(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Rf(o.ownerDocument.documentElement,o)){if(l!==null&&ec(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=o.textContent.length,h=Math.min(l.start,u);l=l.end===void 0?h:Math.min(l.end,u),!t.extend&&h>l&&(u=l,l=h,h=u),u=bf(o,h);var M=bf(o,l);u&&M&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var t0=f&&"documentMode"in document&&11>=document.documentMode,rs=null,tc=null,uo=null,nc=!1;function Nf(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;nc||rs==null||rs!==B(l)||(l=rs,"selectionStart"in l&&ec(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),uo&&co(uo,l)||(uo=l,l=ca(tc,"onSelect"),0<l.length&&(i=new Xl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=rs)))}function oa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ss={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionend:oa("Transition","TransitionEnd")},ic={},Lf={};f&&(Lf=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function aa(t){if(ic[t])return ic[t];if(!ss[t])return t;var i=ss[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Lf)return ic[t]=i[o];return t}var Df=aa("animationend"),If=aa("animationiteration"),Uf=aa("animationstart"),Ff=aa("transitionend"),kf=new Map,Of="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,i){kf.set(t,i),c(i,[t])}for(var rc=0;rc<Of.length;rc++){var sc=Of[rc],n0=sc.toLowerCase(),i0=sc[0].toUpperCase()+sc.slice(1);$i(n0,"on"+i0)}$i(Df,"onAnimationEnd"),$i(If,"onAnimationIteration"),$i(Uf,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(Ff,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r0=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function zf(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,qo(l,i,void 0,t),t.currentTarget=null}function Bf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],u=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var U=l[M],z=U.instance,re=U.currentTarget;if(U=U.listener,z!==h&&u.isPropagationStopped())break e;zf(u,U,re),h=z}else for(M=0;M<l.length;M++){if(U=l[M],z=U.instance,re=U.currentTarget,U=U.listener,z!==h&&u.isPropagationStopped())break e;zf(u,U,re),h=z}}}if(_i)throw t=Qr,_i=!1,Qr=null,t}function Dt(t,i){var o=i[hc];o===void 0&&(o=i[hc]=new Set);var l=t+"__bubble";o.has(l)||(Hf(i,t,2,!1),o.add(l))}function oc(t,i,o){var l=0;i&&(l|=4),Hf(o,t,l,i)}var la="_reactListening"+Math.random().toString(36).slice(2);function ho(t){if(!t[la]){t[la]=!0,r.forEach(function(o){o!=="selectionchange"&&(r0.has(o)||oc(o,!1,t),oc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[la]||(i[la]=!0,oc("selectionchange",!1,i))}}function Hf(t,i,o,l){switch(uf(i)){case 1:var u=_g;break;case 4:u=xg;break;default:u=Gl}o=u.bind(null,i,o,t),u=void 0,!Zr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,o,{capture:!0,passive:u}):t.addEventListener(i,o,!0):u!==void 0?t.addEventListener(i,o,{passive:u}):t.addEventListener(i,o,!1)}function ac(t,i,o,l,u){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var U=l.stateNode.containerInfo;if(U===u||U.nodeType===8&&U.parentNode===u)break;if(M===4)for(M=l.return;M!==null;){var z=M.tag;if((z===3||z===4)&&(z=M.stateNode.containerInfo,z===u||z.nodeType===8&&z.parentNode===u))return;M=M.return}for(;U!==null;){if(M=Mr(U),M===null)return;if(z=M.tag,z===5||z===6){l=h=M;continue e}U=U.parentNode}}l=l.return}zn(function(){var re=h,_e=Le(o),Se=[];e:{var ve=kf.get(t);if(ve!==void 0){var Ue=Xl,Ve=t;switch(t){case"keypress":if(na(o)===0)break e;case"keydown":case"keyup":Ue=Ig;break;case"focusin":Ve="focus",Ue=$l;break;case"focusout":Ve="blur",Ue=$l;break;case"beforeblur":case"afterblur":Ue=$l;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=hf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=Mg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=kg;break;case Df:case If:case Uf:Ue=Tg;break;case Ff:Ue=zg;break;case"scroll":Ue=yg;break;case"wheel":Ue=Hg;break;case"copy":case"cut":case"paste":Ue=Cg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=mf}var Ge=(i&4)!==0,Vt=!Ge&&t==="scroll",K=Ge?ve!==null?ve+"Capture":null:ve;Ge=[];for(var H=re,Q;H!==null;){Q=H;var Ee=Q.stateNode;if(Q.tag===5&&Ee!==null&&(Q=Ee,K!==null&&(Ee=Hi(H,K),Ee!=null&&Ge.push(po(H,Ee,Q)))),Vt)break;H=H.return}0<Ge.length&&(ve=new Ue(ve,Ve,null,o,_e),Se.push({event:ve,listeners:Ge}))}}if((i&7)===0){e:{if(ve=t==="mouseover"||t==="pointerover",Ue=t==="mouseout"||t==="pointerout",ve&&o!==W&&(Ve=o.relatedTarget||o.fromElement)&&(Mr(Ve)||Ve[Si]))break e;if((Ue||ve)&&(ve=_e.window===_e?_e:(ve=_e.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ue?(Ve=o.relatedTarget||o.toElement,Ue=re,Ve=Ve?Mr(Ve):null,Ve!==null&&(Vt=xi(Ve),Ve!==Vt||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Ue=null,Ve=re),Ue!==Ve)){if(Ge=hf,Ee="onMouseLeave",K="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Ge=mf,Ee="onPointerLeave",K="onPointerEnter",H="pointer"),Vt=Ue==null?ve:ls(Ue),Q=Ve==null?ve:ls(Ve),ve=new Ge(Ee,H+"leave",Ue,o,_e),ve.target=Vt,ve.relatedTarget=Q,Ee=null,Mr(_e)===re&&(Ge=new Ge(K,H+"enter",Ve,o,_e),Ge.target=Q,Ge.relatedTarget=Vt,Ee=Ge),Vt=Ee,Ue&&Ve)t:{for(Ge=Ue,K=Ve,H=0,Q=Ge;Q;Q=os(Q))H++;for(Q=0,Ee=K;Ee;Ee=os(Ee))Q++;for(;0<H-Q;)Ge=os(Ge),H--;for(;0<Q-H;)K=os(K),Q--;for(;H--;){if(Ge===K||K!==null&&Ge===K.alternate)break t;Ge=os(Ge),K=os(K)}Ge=null}else Ge=null;Ue!==null&&Vf(Se,ve,Ue,Ge,!1),Ve!==null&&Vt!==null&&Vf(Se,Vt,Ve,Ge,!0)}}e:{if(ve=re?ls(re):window,Ue=ve.nodeName&&ve.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ve.type==="file")var Xe=qg;else if(Sf(ve))if(Ef)Xe=Qg;else{Xe=Kg;var $e=$g}else(Ue=ve.nodeName)&&Ue.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Xe=Zg);if(Xe&&(Xe=Xe(t,re))){Mf(Se,Xe,o,_e);break e}$e&&$e(t,ve,re),t==="focusout"&&($e=ve._wrapperState)&&$e.controlled&&ve.type==="number"&&et(ve,"number",ve.value)}switch($e=re?ls(re):window,t){case"focusin":(Sf($e)||$e.contentEditable==="true")&&(rs=$e,tc=re,uo=null);break;case"focusout":uo=tc=rs=null;break;case"mousedown":nc=!0;break;case"contextmenu":case"mouseup":case"dragend":nc=!1,Nf(Se,o,_e);break;case"selectionchange":if(t0)break;case"keydown":case"keyup":Nf(Se,o,_e)}var Ke;if(Zl)e:{switch(t){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else is?xf(t,o)&&(rt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(rt="onCompositionStart");rt&&(gf&&o.locale!=="ko"&&(is||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&is&&(Ke=df()):(qi=_e,jl="value"in qi?qi.value:qi.textContent,is=!0)),$e=ca(re,rt),0<$e.length&&(rt=new pf(rt,t,null,o,_e),Se.push({event:rt,listeners:$e}),Ke?rt.data=Ke:(Ke=yf(o),Ke!==null&&(rt.data=Ke)))),(Ke=Gg?Wg(t,o):jg(t,o))&&(re=ca(re,"onBeforeInput"),0<re.length&&(_e=new pf("onBeforeInput","beforeinput",null,o,_e),Se.push({event:_e,listeners:re}),_e.data=Ke))}Bf(Se,i)})}function po(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ca(t,i){for(var o=i+"Capture",l=[];t!==null;){var u=t,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=Hi(t,o),h!=null&&l.unshift(po(t,h,u)),h=Hi(t,i),h!=null&&l.push(po(t,h,u))),t=t.return}return l}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vf(t,i,o,l,u){for(var h=i._reactName,M=[];o!==null&&o!==l;){var U=o,z=U.alternate,re=U.stateNode;if(z!==null&&z===l)break;U.tag===5&&re!==null&&(U=re,u?(z=Hi(o,h),z!=null&&M.unshift(po(o,z,U))):u||(z=Hi(o,h),z!=null&&M.push(po(o,z,U)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var s0=/\r\n?/g,o0=/\u0000|\uFFFD/g;function Gf(t){return(typeof t=="string"?t:""+t).replace(s0,`
`).replace(o0,"")}function ua(t,i,o){if(i=Gf(i),Gf(t)!==i&&o)throw Error(n(425))}function da(){}var lc=null,cc=null;function uc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var dc=typeof setTimeout=="function"?setTimeout:void 0,a0=typeof clearTimeout=="function"?clearTimeout:void 0,Wf=typeof Promise=="function"?Promise:void 0,l0=typeof queueMicrotask=="function"?queueMicrotask:typeof Wf<"u"?function(t){return Wf.resolve(null).then(t).catch(c0)}:dc;function c0(t){setTimeout(function(){throw t})}function fc(t,i){var o=i,l=0;do{var u=o.nextSibling;if(t.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(l===0){t.removeChild(u),io(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=u}while(o);io(i)}function Ki(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function jf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var as=Math.random().toString(36).slice(2),ci="__reactFiber$"+as,mo="__reactProps$"+as,Si="__reactContainer$"+as,hc="__reactEvents$"+as,u0="__reactListeners$"+as,d0="__reactHandles$"+as;function Mr(t){var i=t[ci];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Si]||o[ci]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=jf(t);t!==null;){if(o=t[ci])return o;t=jf(t)}return i}t=o,o=t.parentNode}return null}function go(t){return t=t[ci]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function fa(t){return t[mo]||null}var pc=[],cs=-1;function Zi(t){return{current:t}}function It(t){0>cs||(t.current=pc[cs],pc[cs]=null,cs--)}function Lt(t,i){cs++,pc[cs]=t.current,t.current=i}var Qi={},dn=Zi(Qi),yn=Zi(!1),Er=Qi;function us(t,i){var o=t.type.contextTypes;if(!o)return Qi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in o)u[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function Sn(t){return t=t.childContextTypes,t!=null}function ha(){It(yn),It(dn)}function Xf(t,i,o){if(dn.current!==Qi)throw Error(n(168));Lt(dn,i),Lt(yn,o)}function Yf(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(n(108,xe(t)||"Unknown",u));return se({},o,l)}function pa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Er=dn.current,Lt(dn,t),Lt(yn,yn.current),!0}function qf(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Yf(t,i,Er),l.__reactInternalMemoizedMergedChildContext=t,It(yn),It(dn),Lt(dn,t)):It(yn),Lt(yn,o)}var Mi=null,ma=!1,mc=!1;function $f(t){Mi===null?Mi=[t]:Mi.push(t)}function f0(t){ma=!0,$f(t)}function Ji(){if(!mc&&Mi!==null){mc=!0;var t=0,i=Tt;try{var o=Mi;for(Tt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Mi=null,ma=!1}catch(u){throw Mi!==null&&(Mi=Mi.slice(t+1)),ie(Ze,Ji),u}finally{Tt=i,mc=!1}}return null}var ds=[],fs=0,ga=null,va=0,Bn=[],Hn=0,wr=null,Ei=1,wi="";function Tr(t,i){ds[fs++]=va,ds[fs++]=ga,ga=t,va=i}function Kf(t,i,o){Bn[Hn++]=Ei,Bn[Hn++]=wi,Bn[Hn++]=wr,wr=t;var l=Ei;t=wi;var u=32-Oe(l)-1;l&=~(1<<u),o+=1;var h=32-Oe(i)+u;if(30<h){var M=u-u%5;h=(l&(1<<M)-1).toString(32),l>>=M,u-=M,Ei=1<<32-Oe(i)+u|o<<u|l,wi=h+t}else Ei=1<<h|o<<u|l,wi=t}function gc(t){t.return!==null&&(Tr(t,1),Kf(t,1,0))}function vc(t){for(;t===ga;)ga=ds[--fs],ds[fs]=null,va=ds[--fs],ds[fs]=null;for(;t===wr;)wr=Bn[--Hn],Bn[Hn]=null,wi=Bn[--Hn],Bn[Hn]=null,Ei=Bn[--Hn],Bn[Hn]=null}var Dn=null,In=null,kt=!1,Kn=null;function Zf(t,i){var o=jn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Qf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Dn=t,In=Ki(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Dn=t,In=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=wr!==null?{id:Ei,overflow:wi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=jn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Dn=t,In=null,!0):!1;default:return!1}}function _c(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xc(t){if(kt){var i=In;if(i){var o=i;if(!Qf(t,i)){if(_c(t))throw Error(n(418));i=Ki(o.nextSibling);var l=Dn;i&&Qf(t,i)?Zf(l,o):(t.flags=t.flags&-4097|2,kt=!1,Dn=t)}}else{if(_c(t))throw Error(n(418));t.flags=t.flags&-4097|2,kt=!1,Dn=t}}}function Jf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function _a(t){if(t!==Dn)return!1;if(!kt)return Jf(t),kt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!uc(t.type,t.memoizedProps)),i&&(i=In)){if(_c(t))throw eh(),Error(n(418));for(;i;)Zf(t,i),i=Ki(i.nextSibling)}if(Jf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){In=Ki(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}In=null}}else In=Dn?Ki(t.stateNode.nextSibling):null;return!0}function eh(){for(var t=In;t;)t=Ki(t.nextSibling)}function hs(){In=Dn=null,kt=!1}function yc(t){Kn===null?Kn=[t]:Kn.push(t)}var h0=N.ReactCurrentBatchConfig;function vo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var u=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var U=u.refs;M===null?delete U[h]:U[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function xa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function th(t){var i=t._init;return i(t._payload)}function nh(t){function i(K,H){if(t){var Q=K.deletions;Q===null?(K.deletions=[H],K.flags|=16):Q.push(H)}}function o(K,H){if(!t)return null;for(;H!==null;)i(K,H),H=H.sibling;return null}function l(K,H){for(K=new Map;H!==null;)H.key!==null?K.set(H.key,H):K.set(H.index,H),H=H.sibling;return K}function u(K,H){return K=ar(K,H),K.index=0,K.sibling=null,K}function h(K,H,Q){return K.index=Q,t?(Q=K.alternate,Q!==null?(Q=Q.index,Q<H?(K.flags|=2,H):Q):(K.flags|=2,H)):(K.flags|=1048576,H)}function M(K){return t&&K.alternate===null&&(K.flags|=2),K}function U(K,H,Q,Ee){return H===null||H.tag!==6?(H=du(Q,K.mode,Ee),H.return=K,H):(H=u(H,Q),H.return=K,H)}function z(K,H,Q,Ee){var Xe=Q.type;return Xe===I?_e(K,H,Q.props.children,Ee,Q.key):H!==null&&(H.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===J&&th(Xe)===H.type)?(Ee=u(H,Q.props),Ee.ref=vo(K,H,Q),Ee.return=K,Ee):(Ee=Ga(Q.type,Q.key,Q.props,null,K.mode,Ee),Ee.ref=vo(K,H,Q),Ee.return=K,Ee)}function re(K,H,Q,Ee){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=fu(Q,K.mode,Ee),H.return=K,H):(H=u(H,Q.children||[]),H.return=K,H)}function _e(K,H,Q,Ee,Xe){return H===null||H.tag!==7?(H=Dr(Q,K.mode,Ee,Xe),H.return=K,H):(H=u(H,Q),H.return=K,H)}function Se(K,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number")return H=du(""+H,K.mode,Q),H.return=K,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case Z:return Q=Ga(H.type,H.key,H.props,null,K.mode,Q),Q.ref=vo(K,null,H),Q.return=K,Q;case k:return H=fu(H,K.mode,Q),H.return=K,H;case J:var Ee=H._init;return Se(K,Ee(H._payload),Q)}if(L(H)||de(H))return H=Dr(H,K.mode,Q,null),H.return=K,H;xa(K,H)}return null}function ve(K,H,Q,Ee){var Xe=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Xe!==null?null:U(K,H,""+Q,Ee);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case Z:return Q.key===Xe?z(K,H,Q,Ee):null;case k:return Q.key===Xe?re(K,H,Q,Ee):null;case J:return Xe=Q._init,ve(K,H,Xe(Q._payload),Ee)}if(L(Q)||de(Q))return Xe!==null?null:_e(K,H,Q,Ee,null);xa(K,Q)}return null}function Ue(K,H,Q,Ee,Xe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return K=K.get(Q)||null,U(H,K,""+Ee,Xe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case Z:return K=K.get(Ee.key===null?Q:Ee.key)||null,z(H,K,Ee,Xe);case k:return K=K.get(Ee.key===null?Q:Ee.key)||null,re(H,K,Ee,Xe);case J:var $e=Ee._init;return Ue(K,H,Q,$e(Ee._payload),Xe)}if(L(Ee)||de(Ee))return K=K.get(Q)||null,_e(H,K,Ee,Xe,null);xa(H,Ee)}return null}function Ve(K,H,Q,Ee){for(var Xe=null,$e=null,Ke=H,rt=H=0,nn=null;Ke!==null&&rt<Q.length;rt++){Ke.index>rt?(nn=Ke,Ke=null):nn=Ke.sibling;var yt=ve(K,Ke,Q[rt],Ee);if(yt===null){Ke===null&&(Ke=nn);break}t&&Ke&&yt.alternate===null&&i(K,Ke),H=h(yt,H,rt),$e===null?Xe=yt:$e.sibling=yt,$e=yt,Ke=nn}if(rt===Q.length)return o(K,Ke),kt&&Tr(K,rt),Xe;if(Ke===null){for(;rt<Q.length;rt++)Ke=Se(K,Q[rt],Ee),Ke!==null&&(H=h(Ke,H,rt),$e===null?Xe=Ke:$e.sibling=Ke,$e=Ke);return kt&&Tr(K,rt),Xe}for(Ke=l(K,Ke);rt<Q.length;rt++)nn=Ue(Ke,K,rt,Q[rt],Ee),nn!==null&&(t&&nn.alternate!==null&&Ke.delete(nn.key===null?rt:nn.key),H=h(nn,H,rt),$e===null?Xe=nn:$e.sibling=nn,$e=nn);return t&&Ke.forEach(function(lr){return i(K,lr)}),kt&&Tr(K,rt),Xe}function Ge(K,H,Q,Ee){var Xe=de(Q);if(typeof Xe!="function")throw Error(n(150));if(Q=Xe.call(Q),Q==null)throw Error(n(151));for(var $e=Xe=null,Ke=H,rt=H=0,nn=null,yt=Q.next();Ke!==null&&!yt.done;rt++,yt=Q.next()){Ke.index>rt?(nn=Ke,Ke=null):nn=Ke.sibling;var lr=ve(K,Ke,yt.value,Ee);if(lr===null){Ke===null&&(Ke=nn);break}t&&Ke&&lr.alternate===null&&i(K,Ke),H=h(lr,H,rt),$e===null?Xe=lr:$e.sibling=lr,$e=lr,Ke=nn}if(yt.done)return o(K,Ke),kt&&Tr(K,rt),Xe;if(Ke===null){for(;!yt.done;rt++,yt=Q.next())yt=Se(K,yt.value,Ee),yt!==null&&(H=h(yt,H,rt),$e===null?Xe=yt:$e.sibling=yt,$e=yt);return kt&&Tr(K,rt),Xe}for(Ke=l(K,Ke);!yt.done;rt++,yt=Q.next())yt=Ue(Ke,K,rt,yt.value,Ee),yt!==null&&(t&&yt.alternate!==null&&Ke.delete(yt.key===null?rt:yt.key),H=h(yt,H,rt),$e===null?Xe=yt:$e.sibling=yt,$e=yt);return t&&Ke.forEach(function(X0){return i(K,X0)}),kt&&Tr(K,rt),Xe}function Vt(K,H,Q,Ee){if(typeof Q=="object"&&Q!==null&&Q.type===I&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case Z:e:{for(var Xe=Q.key,$e=H;$e!==null;){if($e.key===Xe){if(Xe=Q.type,Xe===I){if($e.tag===7){o(K,$e.sibling),H=u($e,Q.props.children),H.return=K,K=H;break e}}else if($e.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===J&&th(Xe)===$e.type){o(K,$e.sibling),H=u($e,Q.props),H.ref=vo(K,$e,Q),H.return=K,K=H;break e}o(K,$e);break}else i(K,$e);$e=$e.sibling}Q.type===I?(H=Dr(Q.props.children,K.mode,Ee,Q.key),H.return=K,K=H):(Ee=Ga(Q.type,Q.key,Q.props,null,K.mode,Ee),Ee.ref=vo(K,H,Q),Ee.return=K,K=Ee)}return M(K);case k:e:{for($e=Q.key;H!==null;){if(H.key===$e)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){o(K,H.sibling),H=u(H,Q.children||[]),H.return=K,K=H;break e}else{o(K,H);break}else i(K,H);H=H.sibling}H=fu(Q,K.mode,Ee),H.return=K,K=H}return M(K);case J:return $e=Q._init,Vt(K,H,$e(Q._payload),Ee)}if(L(Q))return Ve(K,H,Q,Ee);if(de(Q))return Ge(K,H,Q,Ee);xa(K,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,H!==null&&H.tag===6?(o(K,H.sibling),H=u(H,Q),H.return=K,K=H):(o(K,H),H=du(Q,K.mode,Ee),H.return=K,K=H),M(K)):o(K,H)}return Vt}var ps=nh(!0),ih=nh(!1),ya=Zi(null),Sa=null,ms=null,Sc=null;function Mc(){Sc=ms=Sa=null}function Ec(t){var i=ya.current;It(ya),t._currentValue=i}function wc(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function gs(t,i){Sa=t,Sc=ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Mn=!0),t.firstContext=null)}function Vn(t){var i=t._currentValue;if(Sc!==t)if(t={context:t,memoizedValue:i,next:null},ms===null){if(Sa===null)throw Error(n(308));ms=t,Sa.dependencies={lanes:0,firstContext:t}}else ms=ms.next=t;return i}var Ar=null;function Tc(t){Ar===null?Ar=[t]:Ar.push(t)}function rh(t,i,o,l){var u=i.interleaved;return u===null?(o.next=o,Tc(i)):(o.next=u.next,u.next=o),i.interleaved=o,Ti(t,l)}function Ti(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var er=!1;function Ac(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function tr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(vt&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,Ti(t,o)}return u=l.interleaved,u===null?(i.next=i,Tc(l)):(i.next=u.next,u.next=i),l.interleaved=i,Ti(t,o)}function Ma(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Bl(t,o)}}function oh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var u=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?u=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?u=h=i:h=h.next=i}else u=h=i;o={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ea(t,i,o,l){var u=t.updateQueue;er=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,U=u.shared.pending;if(U!==null){u.shared.pending=null;var z=U,re=z.next;z.next=null,M===null?h=re:M.next=re,M=z;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,U=_e.lastBaseUpdate,U!==M&&(U===null?_e.firstBaseUpdate=re:U.next=re,_e.lastBaseUpdate=z))}if(h!==null){var Se=u.baseState;M=0,_e=re=z=null,U=h;do{var ve=U.lane,Ue=U.eventTime;if((l&ve)===ve){_e!==null&&(_e=_e.next={eventTime:Ue,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Ve=t,Ge=U;switch(ve=i,Ue=o,Ge.tag){case 1:if(Ve=Ge.payload,typeof Ve=="function"){Se=Ve.call(Ue,Se,ve);break e}Se=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=Ge.payload,ve=typeof Ve=="function"?Ve.call(Ue,Se,ve):Ve,ve==null)break e;Se=se({},Se,ve);break e;case 2:er=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,ve=u.effects,ve===null?u.effects=[U]:ve.push(U))}else Ue={eventTime:Ue,lane:ve,tag:U.tag,payload:U.payload,callback:U.callback,next:null},_e===null?(re=_e=Ue,z=Se):_e=_e.next=Ue,M|=ve;if(U=U.next,U===null){if(U=u.shared.pending,U===null)break;ve=U,U=ve.next,ve.next=null,u.lastBaseUpdate=ve,u.shared.pending=null}}while(!0);if(_e===null&&(z=Se),u.baseState=z,u.firstBaseUpdate=re,u.lastBaseUpdate=_e,i=u.shared.interleaved,i!==null){u=i;do M|=u.lane,u=u.next;while(u!==i)}else h===null&&(u.shared.lanes=0);Rr|=M,t.lanes=M,t.memoizedState=Se}}function ah(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],u=l.callback;if(u!==null){if(l.callback=null,l=o,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var _o={},ui=Zi(_o),xo=Zi(_o),yo=Zi(_o);function Cr(t){if(t===_o)throw Error(n(174));return t}function Cc(t,i){switch(Lt(yo,i),Lt(xo,t),Lt(ui,_o),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ce(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ce(i,t)}It(ui),Lt(ui,i)}function vs(){It(ui),It(xo),It(yo)}function lh(t){Cr(yo.current);var i=Cr(ui.current),o=Ce(i,t.type);i!==o&&(Lt(xo,t),Lt(ui,o))}function bc(t){xo.current===t&&(It(ui),It(xo))}var zt=Zi(0);function wa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Rc=[];function Pc(){for(var t=0;t<Rc.length;t++)Rc[t]._workInProgressVersionPrimary=null;Rc.length=0}var Ta=N.ReactCurrentDispatcher,Nc=N.ReactCurrentBatchConfig,br=0,Bt=null,qt=null,en=null,Aa=!1,So=!1,Mo=0,p0=0;function fn(){throw Error(n(321))}function Lc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!$n(t[o],i[o]))return!1;return!0}function Dc(t,i,o,l,u,h){if(br=h,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ta.current=t===null||t.memoizedState===null?_0:x0,t=o(l,u),So){h=0;do{if(So=!1,Mo=0,25<=h)throw Error(n(301));h+=1,en=qt=null,i.updateQueue=null,Ta.current=y0,t=o(l,u)}while(So)}if(Ta.current=Ra,i=qt!==null&&qt.next!==null,br=0,en=qt=Bt=null,Aa=!1,i)throw Error(n(300));return t}function Ic(){var t=Mo!==0;return Mo=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?Bt.memoizedState=en=t:en=en.next=t,en}function Gn(){if(qt===null){var t=Bt.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var i=en===null?Bt.memoizedState:en.next;if(i!==null)en=i,qt=t;else{if(t===null)throw Error(n(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},en===null?Bt.memoizedState=en=t:en=en.next=t}return en}function Eo(t,i){return typeof i=="function"?i(t):i}function Uc(t){var i=Gn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=qt,u=l.baseQueue,h=o.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}l.baseQueue=u=h,o.pending=null}if(u!==null){h=u.next,l=l.baseState;var U=M=null,z=null,re=h;do{var _e=re.lane;if((br&_e)===_e)z!==null&&(z=z.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),l=re.hasEagerState?re.eagerState:t(l,re.action);else{var Se={lane:_e,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};z===null?(U=z=Se,M=l):z=z.next=Se,Bt.lanes|=_e,Rr|=_e}re=re.next}while(re!==null&&re!==h);z===null?M=l:z.next=U,$n(l,i.memoizedState)||(Mn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=z,o.lastRenderedState=l}if(t=o.interleaved,t!==null){u=t;do h=u.lane,Bt.lanes|=h,Rr|=h,u=u.next;while(u!==t)}else u===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Fc(t){var i=Gn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,u=o.pending,h=i.memoizedState;if(u!==null){o.pending=null;var M=u=u.next;do h=t(h,M.action),M=M.next;while(M!==u);$n(h,i.memoizedState)||(Mn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function ch(){}function uh(t,i){var o=Bt,l=Gn(),u=i(),h=!$n(l.memoizedState,u);if(h&&(l.memoizedState=u,Mn=!0),l=l.queue,kc(hh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||en!==null&&en.memoizedState.tag&1){if(o.flags|=2048,wo(9,fh.bind(null,o,l,u,i),void 0,null),tn===null)throw Error(n(349));(br&30)!==0||dh(o,i,u)}return u}function dh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function fh(t,i,o,l){i.value=o,i.getSnapshot=l,ph(i)&&mh(t)}function hh(t,i,o){return o(function(){ph(i)&&mh(t)})}function ph(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!$n(t,o)}catch{return!0}}function mh(t){var i=Ti(t,1);i!==null&&ei(i,t,1,-1)}function gh(t){var i=di();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:t},i.queue=t,t=t.dispatch=v0.bind(null,Bt,t),[i.memoizedState,t]}function wo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function vh(){return Gn().memoizedState}function Ca(t,i,o,l){var u=di();Bt.flags|=t,u.memoizedState=wo(1|i,o,void 0,l===void 0?null:l)}function ba(t,i,o,l){var u=Gn();l=l===void 0?null:l;var h=void 0;if(qt!==null){var M=qt.memoizedState;if(h=M.destroy,l!==null&&Lc(l,M.deps)){u.memoizedState=wo(i,o,h,l);return}}Bt.flags|=t,u.memoizedState=wo(1|i,o,h,l)}function _h(t,i){return Ca(8390656,8,t,i)}function kc(t,i){return ba(2048,8,t,i)}function xh(t,i){return ba(4,2,t,i)}function yh(t,i){return ba(4,4,t,i)}function Sh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Mh(t,i,o){return o=o!=null?o.concat([t]):null,ba(4,4,Sh.bind(null,i,t),o)}function Oc(){}function Eh(t,i){var o=Gn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Lc(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function wh(t,i){var o=Gn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Lc(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Th(t,i,o){return(br&21)===0?(t.baseState&&(t.baseState=!1,Mn=!0),t.memoizedState=o):($n(o,i)||(o=es(),Bt.lanes|=o,Rr|=o,t.baseState=!0),i)}function m0(t,i){var o=Tt;Tt=o!==0&&4>o?o:4,t(!0);var l=Nc.transition;Nc.transition={};try{t(!1),i()}finally{Tt=o,Nc.transition=l}}function Ah(){return Gn().memoizedState}function g0(t,i,o){var l=sr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Ch(t))bh(i,o);else if(o=rh(t,i,o,l),o!==null){var u=_n();ei(o,t,l,u),Rh(o,i,l)}}function v0(t,i,o){var l=sr(t),u={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ch(t))bh(i,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,U=h(M,o);if(u.hasEagerState=!0,u.eagerState=U,$n(U,M)){var z=i.interleaved;z===null?(u.next=u,Tc(i)):(u.next=z.next,z.next=u),i.interleaved=u;return}}catch{}finally{}o=rh(t,i,u,l),o!==null&&(u=_n(),ei(o,t,l,u),Rh(o,i,l))}}function Ch(t){var i=t.alternate;return t===Bt||i!==null&&i===Bt}function bh(t,i){So=Aa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Rh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Bl(t,o)}}var Ra={readContext:Vn,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},_0={readContext:Vn,useCallback:function(t,i){return di().memoizedState=[t,i===void 0?null:i],t},useContext:Vn,useEffect:_h,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ca(4194308,4,Sh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ca(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ca(4,2,t,i)},useMemo:function(t,i){var o=di();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=di();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=g0.bind(null,Bt,t),[l.memoizedState,t]},useRef:function(t){var i=di();return t={current:t},i.memoizedState=t},useState:gh,useDebugValue:Oc,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=gh(!1),i=t[0];return t=m0.bind(null,t[1]),di().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Bt,u=di();if(kt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),tn===null)throw Error(n(349));(br&30)!==0||dh(l,i,o)}u.memoizedState=o;var h={value:o,getSnapshot:i};return u.queue=h,_h(hh.bind(null,l,h,t),[t]),l.flags|=2048,wo(9,fh.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=di(),i=tn.identifierPrefix;if(kt){var o=wi,l=Ei;o=(l&~(1<<32-Oe(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=Mo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=p0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},x0={readContext:Vn,useCallback:Eh,useContext:Vn,useEffect:kc,useImperativeHandle:Mh,useInsertionEffect:xh,useLayoutEffect:yh,useMemo:wh,useReducer:Uc,useRef:vh,useState:function(){return Uc(Eo)},useDebugValue:Oc,useDeferredValue:function(t){var i=Gn();return Th(i,qt.memoizedState,t)},useTransition:function(){var t=Uc(Eo)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:ch,useSyncExternalStore:uh,useId:Ah,unstable_isNewReconciler:!1},y0={readContext:Vn,useCallback:Eh,useContext:Vn,useEffect:kc,useImperativeHandle:Mh,useInsertionEffect:xh,useLayoutEffect:yh,useMemo:wh,useReducer:Fc,useRef:vh,useState:function(){return Fc(Eo)},useDebugValue:Oc,useDeferredValue:function(t){var i=Gn();return qt===null?i.memoizedState=t:Th(i,qt.memoizedState,t)},useTransition:function(){var t=Fc(Eo)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:ch,useSyncExternalStore:uh,useId:Ah,unstable_isNewReconciler:!1};function Zn(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function zc(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:se({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Pa={isMounted:function(t){return(t=t._reactInternals)?xi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=_n(),u=sr(t),h=Ai(l,u);h.payload=i,o!=null&&(h.callback=o),i=tr(t,h,u),i!==null&&(ei(i,t,u,l),Ma(i,t,u))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=_n(),u=sr(t),h=Ai(l,u);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=tr(t,h,u),i!==null&&(ei(i,t,u,l),Ma(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=_n(),l=sr(t),u=Ai(o,l);u.tag=2,i!=null&&(u.callback=i),i=tr(t,u,l),i!==null&&(ei(i,t,l,o),Ma(i,t,l))}};function Ph(t,i,o,l,u,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!co(o,l)||!co(u,h):!0}function Nh(t,i,o){var l=!1,u=Qi,h=i.contextType;return typeof h=="object"&&h!==null?h=Vn(h):(u=Sn(i)?Er:dn.current,l=i.contextTypes,h=(l=l!=null)?us(t,u):Qi),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Pa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=h),i}function Lh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Pa.enqueueReplaceState(i,i.state,null)}function Bc(t,i,o,l){var u=t.stateNode;u.props=o,u.state=t.memoizedState,u.refs={},Ac(t);var h=i.contextType;typeof h=="object"&&h!==null?u.context=Vn(h):(h=Sn(i)?Er:dn.current,u.context=us(t,h)),u.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(zc(t,i,h,o),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Pa.enqueueReplaceState(u,u.state,null),Ea(t,o,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,i){try{var o="",l=i;do o+=ce(l),l=l.return;while(l);var u=o}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:u,digest:null}}function Hc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Vc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var S0=typeof WeakMap=="function"?WeakMap:Map;function Dh(t,i,o){o=Ai(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){ka||(ka=!0,iu=l),Vc(t,i)},o}function Ih(t,i,o){o=Ai(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;o.payload=function(){return l(u)},o.callback=function(){Vc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Vc(t,i),typeof l!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Uh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new S0;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(o)||(u.add(o),t=U0.bind(null,t,i,o),i.then(t,t))}function Fh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function kh(t,i,o,l,u){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ai(-1,1),i.tag=2,tr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var M0=N.ReactCurrentOwner,Mn=!1;function vn(t,i,o,l){i.child=t===null?ih(i,null,o,l):ps(i,t.child,o,l)}function Oh(t,i,o,l,u){o=o.render;var h=i.ref;return gs(i,u),l=Dc(t,i,o,l,h,u),o=Ic(),t!==null&&!Mn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Ci(t,i,u)):(kt&&o&&gc(i),i.flags|=1,vn(t,i,l,u),i.child)}function zh(t,i,o,l,u){if(t===null){var h=o.type;return typeof h=="function"&&!uu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Bh(t,i,h,l,u)):(t=Ga(o.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&u)===0){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:co,o(M,l)&&t.ref===i.ref)return Ci(t,i,u)}return i.flags|=1,t=ar(h,l),t.ref=i.ref,t.return=i,i.child=t}function Bh(t,i,o,l,u){if(t!==null){var h=t.memoizedProps;if(co(h,l)&&t.ref===i.ref)if(Mn=!1,i.pendingProps=l=h,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Mn=!0);else return i.lanes=t.lanes,Ci(t,i,u)}return Gc(t,i,o,l,u)}function Hh(t,i,o){var l=i.pendingProps,u=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(ys,Un),Un|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Lt(ys,Un),Un|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Lt(ys,Un),Un|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Lt(ys,Un),Un|=l;return vn(t,i,u,o),i.child}function Vh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Gc(t,i,o,l,u){var h=Sn(o)?Er:dn.current;return h=us(i,h),gs(i,u),o=Dc(t,i,o,l,h,u),l=Ic(),t!==null&&!Mn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Ci(t,i,u)):(kt&&l&&gc(i),i.flags|=1,vn(t,i,o,u),i.child)}function Gh(t,i,o,l,u){if(Sn(o)){var h=!0;pa(i)}else h=!1;if(gs(i,u),i.stateNode===null)La(t,i),Nh(i,o,l),Bc(i,o,l,u),l=!0;else if(t===null){var M=i.stateNode,U=i.memoizedProps;M.props=U;var z=M.context,re=o.contextType;typeof re=="object"&&re!==null?re=Vn(re):(re=Sn(o)?Er:dn.current,re=us(i,re));var _e=o.getDerivedStateFromProps,Se=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==l||z!==re)&&Lh(i,M,l,re),er=!1;var ve=i.memoizedState;M.state=ve,Ea(i,l,M,u),z=i.memoizedState,U!==l||ve!==z||yn.current||er?(typeof _e=="function"&&(zc(i,o,_e,l),z=i.memoizedState),(U=er||Ph(i,o,U,l,ve,z,re))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=z),M.props=l,M.state=z,M.context=re,l=U):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,sh(t,i),U=i.memoizedProps,re=i.type===i.elementType?U:Zn(i.type,U),M.props=re,Se=i.pendingProps,ve=M.context,z=o.contextType,typeof z=="object"&&z!==null?z=Vn(z):(z=Sn(o)?Er:dn.current,z=us(i,z));var Ue=o.getDerivedStateFromProps;(_e=typeof Ue=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==Se||ve!==z)&&Lh(i,M,l,z),er=!1,ve=i.memoizedState,M.state=ve,Ea(i,l,M,u);var Ve=i.memoizedState;U!==Se||ve!==Ve||yn.current||er?(typeof Ue=="function"&&(zc(i,o,Ue,l),Ve=i.memoizedState),(re=er||Ph(i,o,re,l,ve,Ve,z)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Ve,z),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Ve,z)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ve),M.props=l,M.state=Ve,M.context=z,l=re):(typeof M.componentDidUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),l=!1)}return Wc(t,i,o,l,h,u)}function Wc(t,i,o,l,u,h){Vh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return u&&qf(i,o,!1),Ci(t,i,h);l=i.stateNode,M0.current=i;var U=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=ps(i,t.child,null,h),i.child=ps(i,null,U,h)):vn(t,i,U,h),i.memoizedState=l.state,u&&qf(i,o,!0),i.child}function Wh(t){var i=t.stateNode;i.pendingContext?Xf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Xf(t,i.context,!1),Cc(t,i.containerInfo)}function jh(t,i,o,l,u){return hs(),yc(u),i.flags|=256,vn(t,i,o,l),i.child}var jc={dehydrated:null,treeContext:null,retryLane:0};function Xc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Xh(t,i,o){var l=i.pendingProps,u=zt.current,h=!1,M=(i.flags&128)!==0,U;if((U=M)||(U=t!==null&&t.memoizedState===null?!1:(u&2)!==0),U?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Lt(zt,u&1),t===null)return xc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Wa(M,l,0,null),t=Dr(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Xc(o),i.memoizedState=jc,t):Yc(i,M));if(u=t.memoizedState,u!==null&&(U=u.dehydrated,U!==null))return E0(t,i,M,l,U,u,o);if(h){h=l.fallback,M=i.mode,u=t.child,U=u.sibling;var z={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=z,i.deletions=null):(l=ar(u,z),l.subtreeFlags=u.subtreeFlags&14680064),U!==null?h=ar(U,h):(h=Dr(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Xc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=jc,l}return h=t.child,t=h.sibling,l=ar(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Yc(t,i){return i=Wa({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Na(t,i,o,l){return l!==null&&yc(l),ps(i,t.child,null,o),t=Yc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function E0(t,i,o,l,u,h,M){if(o)return i.flags&256?(i.flags&=-257,l=Hc(Error(n(422))),Na(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,u=i.mode,l=Wa({mode:"visible",children:l.children},u,0,null),h=Dr(h,u,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&ps(i,t.child,null,M),i.child.memoizedState=Xc(M),i.memoizedState=jc,h);if((i.mode&1)===0)return Na(t,i,M,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var U=l.dgst;return l=U,h=Error(n(419)),l=Hc(h,l,void 0),Na(t,i,M,l)}if(U=(M&t.childLanes)!==0,Mn||U){if(l=tn,l!==null){switch(M&-M){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|M))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,Ti(t,u),ei(l,t,u,-1))}return cu(),l=Hc(Error(n(421))),Na(t,i,M,l)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=F0.bind(null,t),u._reactRetry=i,null):(t=h.treeContext,In=Ki(u.nextSibling),Dn=i,kt=!0,Kn=null,t!==null&&(Bn[Hn++]=Ei,Bn[Hn++]=wi,Bn[Hn++]=wr,Ei=t.id,wi=t.overflow,wr=i),i=Yc(i,l.children),i.flags|=4096,i)}function Yh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),wc(t.return,i,o)}function qc(t,i,o,l,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:u}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=u)}function qh(t,i,o){var l=i.pendingProps,u=l.revealOrder,h=l.tail;if(vn(t,i,l.children,o),l=zt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yh(t,o,i);else if(t.tag===19)Yh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Lt(zt,l),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(o=i.child,u=null;o!==null;)t=o.alternate,t!==null&&wa(t)===null&&(u=o),o=o.sibling;o=u,o===null?(u=i.child,i.child=null):(u=o.sibling,o.sibling=null),qc(i,!1,u,o,h);break;case"backwards":for(o=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&wa(t)===null){i.child=u;break}t=u.sibling,u.sibling=o,o=u,u=t}qc(i,!0,o,null,h);break;case"together":qc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function La(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ci(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Rr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=ar(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=ar(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function w0(t,i,o){switch(i.tag){case 3:Wh(i),hs();break;case 5:lh(i);break;case 1:Sn(i.type)&&pa(i);break;case 4:Cc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;Lt(ya,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Lt(zt,zt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Xh(t,i,o):(Lt(zt,zt.current&1),t=Ci(t,i,o),t!==null?t.sibling:null);Lt(zt,zt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return qh(t,i,o);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Lt(zt,zt.current),l)break;return null;case 22:case 23:return i.lanes=0,Hh(t,i,o)}return Ci(t,i,o)}var $h,$c,Kh,Zh;$h=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},$c=function(){},Kh=function(t,i,o,l){var u=t.memoizedProps;if(u!==l){t=i.stateNode,Cr(ui.current);var h=null;switch(o){case"input":u=on(t,u),l=on(t,l),h=[];break;case"select":u=se({},u,{value:void 0}),l=se({},l,{value:void 0}),h=[];break;case"textarea":u=ee(t,u),l=ee(t,l),h=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=da)}st(o,l);var M;o=null;for(re in u)if(!l.hasOwnProperty(re)&&u.hasOwnProperty(re)&&u[re]!=null)if(re==="style"){var U=u[re];for(M in U)U.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(a.hasOwnProperty(re)?h||(h=[]):(h=h||[]).push(re,null));for(re in l){var z=l[re];if(U=u!=null?u[re]:void 0,l.hasOwnProperty(re)&&z!==U&&(z!=null||U!=null))if(re==="style")if(U){for(M in U)!U.hasOwnProperty(M)||z&&z.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in z)z.hasOwnProperty(M)&&U[M]!==z[M]&&(o||(o={}),o[M]=z[M])}else o||(h||(h=[]),h.push(re,o)),o=z;else re==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,U=U?U.__html:void 0,z!=null&&U!==z&&(h=h||[]).push(re,z)):re==="children"?typeof z!="string"&&typeof z!="number"||(h=h||[]).push(re,""+z):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(a.hasOwnProperty(re)?(z!=null&&re==="onScroll"&&Dt("scroll",t),h||U===z||(h=[])):(h=h||[]).push(re,z))}o&&(h=h||[]).push("style",o);var re=h;(i.updateQueue=re)&&(i.flags|=4)}},Zh=function(t,i,o,l){o!==l&&(i.flags|=4)};function To(t,i){if(!kt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function hn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function T0(t,i,o){var l=i.pendingProps;switch(vc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(i),null;case 1:return Sn(i.type)&&ha(),hn(i),null;case 3:return l=i.stateNode,vs(),It(yn),It(dn),Pc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(_a(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Kn!==null&&(ou(Kn),Kn=null))),$c(t,i),hn(i),null;case 5:bc(i);var u=Cr(yo.current);if(o=i.type,t!==null&&i.stateNode!=null)Kh(t,i,o,l,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return hn(i),null}if(t=Cr(ui.current),_a(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[ci]=i,l[mo]=h,t=(i.mode&1)!==0,o){case"dialog":Dt("cancel",l),Dt("close",l);break;case"iframe":case"object":case"embed":Dt("load",l);break;case"video":case"audio":for(u=0;u<fo.length;u++)Dt(fo[u],l);break;case"source":Dt("error",l);break;case"img":case"image":case"link":Dt("error",l),Dt("load",l);break;case"details":Dt("toggle",l);break;case"input":ct(l,h),Dt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Dt("invalid",l);break;case"textarea":he(l,h),Dt("invalid",l)}st(o,h),u=null;for(var M in h)if(h.hasOwnProperty(M)){var U=h[M];M==="children"?typeof U=="string"?l.textContent!==U&&(h.suppressHydrationWarning!==!0&&ua(l.textContent,U,t),u=["children",U]):typeof U=="number"&&l.textContent!==""+U&&(h.suppressHydrationWarning!==!0&&ua(l.textContent,U,t),u=["children",""+U]):a.hasOwnProperty(M)&&U!=null&&M==="onScroll"&&Dt("scroll",l)}switch(o){case"input":ht(l),At(l,h,!0);break;case"textarea":ht(l),fe(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=da)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ye(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[ci]=i,t[mo]=l,$h(t,i,!1,!1),i.stateNode=t;e:{switch(M=Et(o,l),o){case"dialog":Dt("cancel",t),Dt("close",t),u=l;break;case"iframe":case"object":case"embed":Dt("load",t),u=l;break;case"video":case"audio":for(u=0;u<fo.length;u++)Dt(fo[u],t);u=l;break;case"source":Dt("error",t),u=l;break;case"img":case"image":case"link":Dt("error",t),Dt("load",t),u=l;break;case"details":Dt("toggle",t),u=l;break;case"input":ct(t,l),u=on(t,l),Dt("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=se({},l,{value:void 0}),Dt("invalid",t);break;case"textarea":he(t,l),u=ee(t,l),Dt("invalid",t);break;default:u=l}st(o,u),U=u;for(h in U)if(U.hasOwnProperty(h)){var z=U[h];h==="style"?ze(t,z):h==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&mt(t,z)):h==="children"?typeof z=="string"?(o!=="textarea"||z!=="")&&Me(t,z):typeof z=="number"&&Me(t,""+z):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?z!=null&&h==="onScroll"&&Dt("scroll",t):z!=null&&P(t,h,z,M))}switch(o){case"input":ht(t),At(t,l,!1);break;case"textarea":ht(t),fe(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ne(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?T(t,!!l.multiple,h,!1):l.defaultValue!=null&&T(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=da)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return hn(i),null;case 6:if(t&&i.stateNode!=null)Zh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Cr(yo.current),Cr(ui.current),_a(i)){if(l=i.stateNode,o=i.memoizedProps,l[ci]=i,(h=l.nodeValue!==o)&&(t=Dn,t!==null))switch(t.tag){case 3:ua(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ua(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[ci]=i,i.stateNode=l}return hn(i),null;case 13:if(It(zt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(kt&&In!==null&&(i.mode&1)!==0&&(i.flags&128)===0)eh(),hs(),i.flags|=98560,h=!1;else if(h=_a(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ci]=i}else hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;hn(i),h=!1}else Kn!==null&&(ou(Kn),Kn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(zt.current&1)!==0?$t===0&&($t=3):cu())),i.updateQueue!==null&&(i.flags|=4),hn(i),null);case 4:return vs(),$c(t,i),t===null&&ho(i.stateNode.containerInfo),hn(i),null;case 10:return Ec(i.type._context),hn(i),null;case 17:return Sn(i.type)&&ha(),hn(i),null;case 19:if(It(zt),h=i.memoizedState,h===null)return hn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)To(h,!1);else{if($t!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=wa(t),M!==null){for(i.flags|=128,To(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Lt(zt,zt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Te()>Ss&&(i.flags|=128,l=!0,To(h,!1),i.lanes=4194304)}else{if(!l)if(t=wa(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),To(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!kt)return hn(i),null}else 2*Te()-h.renderingStartTime>Ss&&o!==1073741824&&(i.flags|=128,l=!0,To(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Te(),i.sibling=null,o=zt.current,Lt(zt,l?o&1|2:o&1),i):(hn(i),null);case 22:case 23:return lu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Un&1073741824)!==0&&(hn(i),i.subtreeFlags&6&&(i.flags|=8192)):hn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function A0(t,i){switch(vc(i),i.tag){case 1:return Sn(i.type)&&ha(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return vs(),It(yn),It(dn),Pc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return bc(i),null;case 13:if(It(zt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));hs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return It(zt),null;case 4:return vs(),null;case 10:return Ec(i.type._context),null;case 22:case 23:return lu(),null;case 24:return null;default:return null}}var Da=!1,pn=!1,C0=typeof WeakSet=="function"?WeakSet:Set,Be=null;function xs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Ht(t,i,l)}else o.current=null}function Kc(t,i,o){try{o()}catch(l){Ht(t,i,l)}}var Qh=!1;function b0(t,i){if(lc=Jo,t=Pf(),ec(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,U=-1,z=-1,re=0,_e=0,Se=t,ve=null;t:for(;;){for(var Ue;Se!==o||u!==0&&Se.nodeType!==3||(U=M+u),Se!==h||l!==0&&Se.nodeType!==3||(z=M+l),Se.nodeType===3&&(M+=Se.nodeValue.length),(Ue=Se.firstChild)!==null;)ve=Se,Se=Ue;for(;;){if(Se===t)break t;if(ve===o&&++re===u&&(U=M),ve===h&&++_e===l&&(z=M),(Ue=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=Ue}o=U===-1||z===-1?null:{start:U,end:z}}else o=null}o=o||{start:0,end:0}}else o=null;for(cc={focusedElem:t,selectionRange:o},Jo=!1,Be=i;Be!==null;)if(i=Be,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Be=t;else for(;Be!==null;){i=Be;try{var Ve=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var Ge=Ve.memoizedProps,Vt=Ve.memoizedState,K=i.stateNode,H=K.getSnapshotBeforeUpdate(i.elementType===i.type?Ge:Zn(i.type,Ge),Vt);K.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var Q=i.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Ht(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Be=t;break}Be=i.return}return Ve=Qh,Qh=!1,Ve}function Ao(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var h=u.destroy;u.destroy=void 0,h!==void 0&&Kc(i,o,h)}u=u.next}while(u!==l)}}function Ia(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Zc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Jh(t){var i=t.alternate;i!==null&&(t.alternate=null,Jh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ci],delete i[mo],delete i[hc],delete i[u0],delete i[d0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ep(t){return t.tag===5||t.tag===3||t.tag===4}function tp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ep(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=da));else if(l!==4&&(t=t.child,t!==null))for(Qc(t,i,o),t=t.sibling;t!==null;)Qc(t,i,o),t=t.sibling}function Jc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Jc(t,i,o),t=t.sibling;t!==null;)Jc(t,i,o),t=t.sibling}var ln=null,Qn=!1;function nr(t,i,o){for(o=o.child;o!==null;)np(t,i,o),o=o.sibling}function np(t,i,o){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Pt,o)}catch{}switch(o.tag){case 5:pn||xs(o,i);case 6:var l=ln,u=Qn;ln=null,nr(t,i,o),ln=l,Qn=u,ln!==null&&(Qn?(t=ln,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):ln.removeChild(o.stateNode));break;case 18:ln!==null&&(Qn?(t=ln,o=o.stateNode,t.nodeType===8?fc(t.parentNode,o):t.nodeType===1&&fc(t,o),io(t)):fc(ln,o.stateNode));break;case 4:l=ln,u=Qn,ln=o.stateNode.containerInfo,Qn=!0,nr(t,i,o),ln=l,Qn=u;break;case 0:case 11:case 14:case 15:if(!pn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var h=u,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&Kc(o,i,M),u=u.next}while(u!==l)}nr(t,i,o);break;case 1:if(!pn&&(xs(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(U){Ht(o,i,U)}nr(t,i,o);break;case 21:nr(t,i,o);break;case 22:o.mode&1?(pn=(l=pn)||o.memoizedState!==null,nr(t,i,o),pn=l):nr(t,i,o);break;default:nr(t,i,o)}}function ip(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new C0),i.forEach(function(l){var u=k0.bind(null,t,l);o.has(l)||(o.add(l),l.then(u,u))})}}function Jn(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var u=o[l];try{var h=t,M=i,U=M;e:for(;U!==null;){switch(U.tag){case 5:ln=U.stateNode,Qn=!1;break e;case 3:ln=U.stateNode.containerInfo,Qn=!0;break e;case 4:ln=U.stateNode.containerInfo,Qn=!0;break e}U=U.return}if(ln===null)throw Error(n(160));np(h,M,u),ln=null,Qn=!1;var z=u.alternate;z!==null&&(z.return=null),u.return=null}catch(re){Ht(u,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)rp(i,t),i=i.sibling}function rp(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(i,t),fi(t),l&4){try{Ao(3,t,t.return),Ia(3,t)}catch(Ge){Ht(t,t.return,Ge)}try{Ao(5,t,t.return)}catch(Ge){Ht(t,t.return,Ge)}}break;case 1:Jn(i,t),fi(t),l&512&&o!==null&&xs(o,o.return);break;case 5:if(Jn(i,t),fi(t),l&512&&o!==null&&xs(o,o.return),t.flags&32){var u=t.stateNode;try{Me(u,"")}catch(Ge){Ht(t,t.return,Ge)}}if(l&4&&(u=t.stateNode,u!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,U=t.type,z=t.updateQueue;if(t.updateQueue=null,z!==null)try{U==="input"&&h.type==="radio"&&h.name!=null&&pt(u,h),Et(U,M);var re=Et(U,h);for(M=0;M<z.length;M+=2){var _e=z[M],Se=z[M+1];_e==="style"?ze(u,Se):_e==="dangerouslySetInnerHTML"?mt(u,Se):_e==="children"?Me(u,Se):P(u,_e,Se,re)}switch(U){case"input":Qe(u,h);break;case"textarea":ye(u,h);break;case"select":var ve=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var Ue=h.value;Ue!=null?T(u,!!h.multiple,Ue,!1):ve!==!!h.multiple&&(h.defaultValue!=null?T(u,!!h.multiple,h.defaultValue,!0):T(u,!!h.multiple,h.multiple?[]:"",!1))}u[mo]=h}catch(Ge){Ht(t,t.return,Ge)}}break;case 6:if(Jn(i,t),fi(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,h=t.memoizedProps;try{u.nodeValue=h}catch(Ge){Ht(t,t.return,Ge)}}break;case 3:if(Jn(i,t),fi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{io(i.containerInfo)}catch(Ge){Ht(t,t.return,Ge)}break;case 4:Jn(i,t),fi(t);break;case 13:Jn(i,t),fi(t),u=t.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(nu=Te())),l&4&&ip(t);break;case 22:if(_e=o!==null&&o.memoizedState!==null,t.mode&1?(pn=(re=pn)||_e,Jn(i,t),pn=re):Jn(i,t),fi(t),l&8192){if(re=t.memoizedState!==null,(t.stateNode.isHidden=re)&&!_e&&(t.mode&1)!==0)for(Be=t,_e=t.child;_e!==null;){for(Se=Be=_e;Be!==null;){switch(ve=Be,Ue=ve.child,ve.tag){case 0:case 11:case 14:case 15:Ao(4,ve,ve.return);break;case 1:xs(ve,ve.return);var Ve=ve.stateNode;if(typeof Ve.componentWillUnmount=="function"){l=ve,o=ve.return;try{i=l,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(Ge){Ht(l,o,Ge)}}break;case 5:xs(ve,ve.return);break;case 22:if(ve.memoizedState!==null){ap(Se);continue}}Ue!==null?(Ue.return=ve,Be=Ue):ap(Se)}_e=_e.sibling}e:for(_e=null,Se=t;;){if(Se.tag===5){if(_e===null){_e=Se;try{u=Se.stateNode,re?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(U=Se.stateNode,z=Se.memoizedProps.style,M=z!=null&&z.hasOwnProperty("display")?z.display:null,U.style.display=tt("display",M))}catch(Ge){Ht(t,t.return,Ge)}}}else if(Se.tag===6){if(_e===null)try{Se.stateNode.nodeValue=re?"":Se.memoizedProps}catch(Ge){Ht(t,t.return,Ge)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;_e===Se&&(_e=null),Se=Se.return}_e===Se&&(_e=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Jn(i,t),fi(t),l&4&&ip(t);break;case 21:break;default:Jn(i,t),fi(t)}}function fi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(ep(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(Me(u,""),l.flags&=-33);var h=tp(t);Jc(t,h,u);break;case 3:case 4:var M=l.stateNode.containerInfo,U=tp(t);Qc(t,U,M);break;default:throw Error(n(161))}}catch(z){Ht(t,t.return,z)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function R0(t,i,o){Be=t,sp(t)}function sp(t,i,o){for(var l=(t.mode&1)!==0;Be!==null;){var u=Be,h=u.child;if(u.tag===22&&l){var M=u.memoizedState!==null||Da;if(!M){var U=u.alternate,z=U!==null&&U.memoizedState!==null||pn;U=Da;var re=pn;if(Da=M,(pn=z)&&!re)for(Be=u;Be!==null;)M=Be,z=M.child,M.tag===22&&M.memoizedState!==null?lp(u):z!==null?(z.return=M,Be=z):lp(u);for(;h!==null;)Be=h,sp(h),h=h.sibling;Be=u,Da=U,pn=re}op(t)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,Be=h):op(t)}}function op(t){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:pn||Ia(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!pn)if(o===null)l.componentDidMount();else{var u=i.elementType===i.type?o.memoizedProps:Zn(i.type,o.memoizedProps);l.componentDidUpdate(u,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&ah(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}ah(i,M,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&o.focus();break;case"img":z.src&&(o.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var _e=re.memoizedState;if(_e!==null){var Se=_e.dehydrated;Se!==null&&io(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}pn||i.flags&512&&Zc(i)}catch(ve){Ht(i,i.return,ve)}}if(i===t){Be=null;break}if(o=i.sibling,o!==null){o.return=i.return,Be=o;break}Be=i.return}}function ap(t){for(;Be!==null;){var i=Be;if(i===t){Be=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Be=o;break}Be=i.return}}function lp(t){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ia(4,i)}catch(z){Ht(i,o,z)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(z){Ht(i,u,z)}}var h=i.return;try{Zc(i)}catch(z){Ht(i,h,z)}break;case 5:var M=i.return;try{Zc(i)}catch(z){Ht(i,M,z)}}}catch(z){Ht(i,i.return,z)}if(i===t){Be=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Be=U;break}Be=i.return}}var P0=Math.ceil,Ua=N.ReactCurrentDispatcher,eu=N.ReactCurrentOwner,Wn=N.ReactCurrentBatchConfig,vt=0,tn=null,Wt=null,cn=0,Un=0,ys=Zi(0),$t=0,Co=null,Rr=0,Fa=0,tu=0,bo=null,En=null,nu=0,Ss=1/0,bi=null,ka=!1,iu=null,ir=null,Oa=!1,rr=null,za=0,Ro=0,ru=null,Ba=-1,Ha=0;function _n(){return(vt&6)!==0?Te():Ba!==-1?Ba:Ba=Te()}function sr(t){return(t.mode&1)===0?1:(vt&2)!==0&&cn!==0?cn&-cn:h0.transition!==null?(Ha===0&&(Ha=es()),Ha):(t=Tt,t!==0||(t=window.event,t=t===void 0?16:uf(t.type)),t)}function ei(t,i,o,l){if(50<Ro)throw Ro=0,ru=null,Error(n(185));Gi(t,o,l),((vt&2)===0||t!==tn)&&(t===tn&&((vt&2)===0&&(Fa|=o),$t===4&&or(t,cn)),wn(t,l),o===1&&vt===0&&(i.mode&1)===0&&(Ss=Te()+500,ma&&Ji()))}function wn(t,i){var o=t.callbackNode;Zs(t,i);var l=Nt(t,t===tn?cn:0);if(l===0)o!==null&&Y(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&Y(o),i===1)t.tag===0?f0(up.bind(null,t)):$f(up.bind(null,t)),l0(function(){(vt&6)===0&&Ji()}),o=null;else{switch(tf(l)){case 1:o=Ze;break;case 4:o=Je;break;case 16:o=je;break;case 536870912:o=Ct;break;default:o=je}o=_p(o,cp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function cp(t,i){if(Ba=-1,Ha=0,(vt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ms()&&t.callbackNode!==o)return null;var l=Nt(t,t===tn?cn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Va(t,l);else{i=l;var u=vt;vt|=2;var h=fp();(tn!==t||cn!==i)&&(bi=null,Ss=Te()+500,Nr(t,i));do try{D0();break}catch(U){dp(t,U)}while(!0);Mc(),Ua.current=h,vt=u,Wt!==null?i=0:(tn=null,cn=0,i=$t)}if(i!==0){if(i===2&&(u=un(t),u!==0&&(l=u,i=su(t,u))),i===1)throw o=Co,Nr(t,0),or(t,l),wn(t,Te()),o;if(i===6)or(t,l);else{if(u=t.current.alternate,(l&30)===0&&!N0(u)&&(i=Va(t,l),i===2&&(h=un(t),h!==0&&(l=h,i=su(t,h))),i===1))throw o=Co,Nr(t,0),or(t,l),wn(t,Te()),o;switch(t.finishedWork=u,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Lr(t,En,bi);break;case 3:if(or(t,l),(l&130023424)===l&&(i=nu+500-Te(),10<i)){if(Nt(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){_n(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=dc(Lr.bind(null,t,En,bi),i);break}Lr(t,En,bi);break;case 4:if(or(t,l),(l&4194240)===l)break;for(i=t.eventTimes,u=-1;0<l;){var M=31-Oe(l);h=1<<M,M=i[M],M>u&&(u=M),l&=~h}if(l=u,l=Te()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*P0(l/1960))-l,10<l){t.timeoutHandle=dc(Lr.bind(null,t,En,bi),l);break}Lr(t,En,bi);break;case 5:Lr(t,En,bi);break;default:throw Error(n(329))}}}return wn(t,Te()),t.callbackNode===o?cp.bind(null,t):null}function su(t,i){var o=bo;return t.current.memoizedState.isDehydrated&&(Nr(t,i).flags|=256),t=Va(t,i),t!==2&&(i=En,En=o,i!==null&&ou(i)),t}function ou(t){En===null?En=t:En.push.apply(En,t)}function N0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var u=o[l],h=u.getSnapshot;u=u.value;try{if(!$n(h(),u))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function or(t,i){for(i&=~tu,i&=~Fa,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Oe(i),l=1<<o;t[o]=-1,i&=~l}}function up(t){if((vt&6)!==0)throw Error(n(327));Ms();var i=Nt(t,0);if((i&1)===0)return wn(t,Te()),null;var o=Va(t,i);if(t.tag!==0&&o===2){var l=un(t);l!==0&&(i=l,o=su(t,l))}if(o===1)throw o=Co,Nr(t,0),or(t,i),wn(t,Te()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Lr(t,En,bi),wn(t,Te()),null}function au(t,i){var o=vt;vt|=1;try{return t(i)}finally{vt=o,vt===0&&(Ss=Te()+500,ma&&Ji())}}function Pr(t){rr!==null&&rr.tag===0&&(vt&6)===0&&Ms();var i=vt;vt|=1;var o=Wn.transition,l=Tt;try{if(Wn.transition=null,Tt=1,t)return t()}finally{Tt=l,Wn.transition=o,vt=i,(vt&6)===0&&Ji()}}function lu(){Un=ys.current,It(ys)}function Nr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,a0(o)),Wt!==null)for(o=Wt.return;o!==null;){var l=o;switch(vc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ha();break;case 3:vs(),It(yn),It(dn),Pc();break;case 5:bc(l);break;case 4:vs();break;case 13:It(zt);break;case 19:It(zt);break;case 10:Ec(l.type._context);break;case 22:case 23:lu()}o=o.return}if(tn=t,Wt=t=ar(t.current,null),cn=Un=i,$t=0,Co=null,tu=Fa=Rr=0,En=bo=null,Ar!==null){for(i=0;i<Ar.length;i++)if(o=Ar[i],l=o.interleaved,l!==null){o.interleaved=null;var u=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=u,l.next=M}o.pending=l}Ar=null}return t}function dp(t,i){do{var o=Wt;try{if(Mc(),Ta.current=Ra,Aa){for(var l=Bt.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}Aa=!1}if(br=0,en=qt=Bt=null,So=!1,Mo=0,eu.current=null,o===null||o.return===null){$t=1,Co=i,Wt=null;break}e:{var h=t,M=o.return,U=o,z=i;if(i=cn,U.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var re=z,_e=U,Se=_e.tag;if((_e.mode&1)===0&&(Se===0||Se===11||Se===15)){var ve=_e.alternate;ve?(_e.updateQueue=ve.updateQueue,_e.memoizedState=ve.memoizedState,_e.lanes=ve.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ue=Fh(M);if(Ue!==null){Ue.flags&=-257,kh(Ue,M,U,h,i),Ue.mode&1&&Uh(h,re,i),i=Ue,z=re;var Ve=i.updateQueue;if(Ve===null){var Ge=new Set;Ge.add(z),i.updateQueue=Ge}else Ve.add(z);break e}else{if((i&1)===0){Uh(h,re,i),cu();break e}z=Error(n(426))}}else if(kt&&U.mode&1){var Vt=Fh(M);if(Vt!==null){(Vt.flags&65536)===0&&(Vt.flags|=256),kh(Vt,M,U,h,i),yc(_s(z,U));break e}}h=z=_s(z,U),$t!==4&&($t=2),bo===null?bo=[h]:bo.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var K=Dh(h,z,i);oh(h,K);break e;case 1:U=z;var H=h.type,Q=h.stateNode;if((h.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(ir===null||!ir.has(Q)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=Ih(h,U,i);oh(h,Ee);break e}}h=h.return}while(h!==null)}pp(o)}catch(Xe){i=Xe,Wt===o&&o!==null&&(Wt=o=o.return);continue}break}while(!0)}function fp(){var t=Ua.current;return Ua.current=Ra,t===null?Ra:t}function cu(){($t===0||$t===3||$t===2)&&($t=4),tn===null||(Rr&268435455)===0&&(Fa&268435455)===0||or(tn,cn)}function Va(t,i){var o=vt;vt|=2;var l=fp();(tn!==t||cn!==i)&&(bi=null,Nr(t,i));do try{L0();break}catch(u){dp(t,u)}while(!0);if(Mc(),vt=o,Ua.current=l,Wt!==null)throw Error(n(261));return tn=null,cn=0,$t}function L0(){for(;Wt!==null;)hp(Wt)}function D0(){for(;Wt!==null&&!we();)hp(Wt)}function hp(t){var i=vp(t.alternate,t,Un);t.memoizedProps=t.pendingProps,i===null?pp(t):Wt=i,eu.current=null}function pp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=T0(o,i,Un),o!==null){Wt=o;return}}else{if(o=A0(o,i),o!==null){o.flags&=32767,Wt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$t=6,Wt=null;return}}if(i=i.sibling,i!==null){Wt=i;return}Wt=i=t}while(i!==null);$t===0&&($t=5)}function Lr(t,i,o){var l=Tt,u=Wn.transition;try{Wn.transition=null,Tt=1,I0(t,i,o,l)}finally{Wn.transition=u,Tt=l}return null}function I0(t,i,o,l){do Ms();while(rr!==null);if((vt&6)!==0)throw Error(n(327));o=t.finishedWork;var u=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(pg(t,h),t===tn&&(Wt=tn=null,cn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Oa||(Oa=!0,_p(je,function(){return Ms(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Wn.transition,Wn.transition=null;var M=Tt;Tt=1;var U=vt;vt|=4,eu.current=null,b0(t,o),rp(o,t),e0(cc),Jo=!!lc,cc=lc=null,t.current=o,R0(o),De(),vt=U,Tt=M,Wn.transition=h}else t.current=o;if(Oa&&(Oa=!1,rr=t,za=u),h=t.pendingLanes,h===0&&(ir=null),_t(o.stateNode),wn(t,Te()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)u=i[o],l(u.value,{componentStack:u.stack,digest:u.digest});if(ka)throw ka=!1,t=iu,iu=null,t;return(za&1)!==0&&t.tag!==0&&Ms(),h=t.pendingLanes,(h&1)!==0?t===ru?Ro++:(Ro=0,ru=t):Ro=0,Ji(),null}function Ms(){if(rr!==null){var t=tf(za),i=Wn.transition,o=Tt;try{if(Wn.transition=null,Tt=16>t?16:t,rr===null)var l=!1;else{if(t=rr,rr=null,za=0,(vt&6)!==0)throw Error(n(331));var u=vt;for(vt|=4,Be=t.current;Be!==null;){var h=Be,M=h.child;if((Be.flags&16)!==0){var U=h.deletions;if(U!==null){for(var z=0;z<U.length;z++){var re=U[z];for(Be=re;Be!==null;){var _e=Be;switch(_e.tag){case 0:case 11:case 15:Ao(8,_e,h)}var Se=_e.child;if(Se!==null)Se.return=_e,Be=Se;else for(;Be!==null;){_e=Be;var ve=_e.sibling,Ue=_e.return;if(Jh(_e),_e===re){Be=null;break}if(ve!==null){ve.return=Ue,Be=ve;break}Be=Ue}}}var Ve=h.alternate;if(Ve!==null){var Ge=Ve.child;if(Ge!==null){Ve.child=null;do{var Vt=Ge.sibling;Ge.sibling=null,Ge=Vt}while(Ge!==null)}}Be=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,Be=M;else e:for(;Be!==null;){if(h=Be,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Ao(9,h,h.return)}var K=h.sibling;if(K!==null){K.return=h.return,Be=K;break e}Be=h.return}}var H=t.current;for(Be=H;Be!==null;){M=Be;var Q=M.child;if((M.subtreeFlags&2064)!==0&&Q!==null)Q.return=M,Be=Q;else e:for(M=H;Be!==null;){if(U=Be,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Ia(9,U)}}catch(Xe){Ht(U,U.return,Xe)}if(U===M){Be=null;break e}var Ee=U.sibling;if(Ee!==null){Ee.return=U.return,Be=Ee;break e}Be=U.return}}if(vt=u,Ji(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Pt,t)}catch{}l=!0}return l}finally{Tt=o,Wn.transition=i}}return!1}function mp(t,i,o){i=_s(o,i),i=Dh(t,i,1),t=tr(t,i,1),i=_n(),t!==null&&(Gi(t,1,i),wn(t,i))}function Ht(t,i,o){if(t.tag===3)mp(t,t,o);else for(;i!==null;){if(i.tag===3){mp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ir===null||!ir.has(l))){t=_s(o,t),t=Ih(i,t,1),i=tr(i,t,1),t=_n(),i!==null&&(Gi(i,1,t),wn(i,t));break}}i=i.return}}function U0(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=_n(),t.pingedLanes|=t.suspendedLanes&o,tn===t&&(cn&o)===o&&($t===4||$t===3&&(cn&130023424)===cn&&500>Te()-nu?Nr(t,0):tu|=o),wn(t,i)}function gp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Jt,Jt<<=1,(Jt&130023424)===0&&(Jt=4194304)));var o=_n();t=Ti(t,i),t!==null&&(Gi(t,i,o),wn(t,o))}function F0(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),gp(t,o)}function k0(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(o=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),gp(t,o)}var vp;vp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||yn.current)Mn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Mn=!1,w0(t,i,o);Mn=(t.flags&131072)!==0}else Mn=!1,kt&&(i.flags&1048576)!==0&&Kf(i,va,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;La(t,i),t=i.pendingProps;var u=us(i,dn.current);gs(i,o),u=Dc(null,i,l,t,u,o);var h=Ic();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Sn(l)?(h=!0,pa(i)):h=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Ac(i),u.updater=Pa,i.stateNode=u,u._reactInternals=i,Bc(i,l,t,o),i=Wc(null,i,l,!0,h,o)):(i.tag=0,kt&&h&&gc(i),vn(null,i,u,o),i=i.child),i;case 16:l=i.elementType;e:{switch(La(t,i),t=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=z0(l),t=Zn(l,t),u){case 0:i=Gc(null,i,l,t,o);break e;case 1:i=Gh(null,i,l,t,o);break e;case 11:i=Oh(null,i,l,t,o);break e;case 14:i=zh(null,i,l,Zn(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Zn(l,u),Gc(t,i,l,u,o);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Zn(l,u),Gh(t,i,l,u,o);case 3:e:{if(Wh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,u=h.element,sh(t,i),Ea(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){u=_s(Error(n(423)),i),i=jh(t,i,l,o,u);break e}else if(l!==u){u=_s(Error(n(424)),i),i=jh(t,i,l,o,u);break e}else for(In=Ki(i.stateNode.containerInfo.firstChild),Dn=i,kt=!0,Kn=null,o=ih(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(hs(),l===u){i=Ci(t,i,o);break e}vn(t,i,l,o)}i=i.child}return i;case 5:return lh(i),t===null&&xc(i),l=i.type,u=i.pendingProps,h=t!==null?t.memoizedProps:null,M=u.children,uc(l,u)?M=null:h!==null&&uc(l,h)&&(i.flags|=32),Vh(t,i),vn(t,i,M,o),i.child;case 6:return t===null&&xc(i),null;case 13:return Xh(t,i,o);case 4:return Cc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ps(i,null,l,o):vn(t,i,l,o),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Zn(l,u),Oh(t,i,l,u,o);case 7:return vn(t,i,i.pendingProps,o),i.child;case 8:return vn(t,i,i.pendingProps.children,o),i.child;case 12:return vn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,h=i.memoizedProps,M=u.value,Lt(ya,l._currentValue),l._currentValue=M,h!==null)if($n(h.value,M)){if(h.children===u.children&&!yn.current){i=Ci(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var U=h.dependencies;if(U!==null){M=h.child;for(var z=U.firstContext;z!==null;){if(z.context===l){if(h.tag===1){z=Ai(-1,o&-o),z.tag=2;var re=h.updateQueue;if(re!==null){re=re.shared;var _e=re.pending;_e===null?z.next=z:(z.next=_e.next,_e.next=z),re.pending=z}}h.lanes|=o,z=h.alternate,z!==null&&(z.lanes|=o),wc(h.return,o,i),U.lanes|=o;break}z=z.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,U=M.alternate,U!==null&&(U.lanes|=o),wc(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}vn(t,i,u.children,o),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,gs(i,o),u=Vn(u),l=l(u),i.flags|=1,vn(t,i,l,o),i.child;case 14:return l=i.type,u=Zn(l,i.pendingProps),u=Zn(l.type,u),zh(t,i,l,u,o);case 15:return Bh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Zn(l,u),La(t,i),i.tag=1,Sn(l)?(t=!0,pa(i)):t=!1,gs(i,o),Nh(i,l,u),Bc(i,l,u,o),Wc(null,i,l,!0,t,o);case 19:return qh(t,i,o);case 22:return Hh(t,i,o)}throw Error(n(156,i.tag))};function _p(t,i){return ie(t,i)}function O0(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,i,o,l){return new O0(t,i,o,l)}function uu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function z0(t){if(typeof t=="function")return uu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===V)return 11;if(t===ae)return 14}return 2}function ar(t,i){var o=t.alternate;return o===null?(o=jn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ga(t,i,o,l,u,h){var M=2;if(l=t,typeof t=="function")uu(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case I:return Dr(o.children,u,h,i);case q:M=8,u|=8;break;case me:return t=jn(12,o,i,u|2),t.elementType=me,t.lanes=h,t;case j:return t=jn(13,o,i,u),t.elementType=j,t.lanes=h,t;case $:return t=jn(19,o,i,u),t.elementType=$,t.lanes=h,t;case le:return Wa(o,u,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E:M=10;break e;case R:M=9;break e;case V:M=11;break e;case ae:M=14;break e;case J:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=jn(M,o,i,u),i.elementType=t,i.type=l,i.lanes=h,i}function Dr(t,i,o,l){return t=jn(7,t,l,i),t.lanes=o,t}function Wa(t,i,o,l){return t=jn(22,t,l,i),t.elementType=le,t.lanes=o,t.stateNode={isHidden:!1},t}function du(t,i,o){return t=jn(6,t,null,i),t.lanes=o,t}function fu(t,i,o){return i=jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function B0(t,i,o,l,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qs(0),this.expirationTimes=Qs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qs(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function hu(t,i,o,l,u,h,M,U,z){return t=new B0(t,i,o,U,z),i===1?(i=1,h===!0&&(i|=8)):i=0,h=jn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ac(h),t}function H0(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function xp(t){if(!t)return Qi;t=t._reactInternals;e:{if(xi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Sn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Sn(o))return Yf(t,o,i)}return i}function yp(t,i,o,l,u,h,M,U,z){return t=hu(o,l,!0,t,u,h,M,U,z),t.context=xp(null),o=t.current,l=_n(),u=sr(o),h=Ai(l,u),h.callback=i??null,tr(o,h,u),t.current.lanes=u,Gi(t,u,l),wn(t,l),t}function ja(t,i,o,l){var u=i.current,h=_n(),M=sr(u);return o=xp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ai(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=tr(u,i,M),t!==null&&(ei(t,u,M,h),Ma(t,u,M)),M}function Xa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function pu(t,i){Sp(t,i),(t=t.alternate)&&Sp(t,i)}function V0(){return null}var Mp=typeof reportError=="function"?reportError:function(t){console.error(t)};function mu(t){this._internalRoot=t}Ya.prototype.render=mu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ja(t,i,null,null)},Ya.prototype.unmount=mu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Pr(function(){ja(null,t,null,null)}),i[Si]=null}};function Ya(t){this._internalRoot=t}Ya.prototype.unstable_scheduleHydration=function(t){if(t){var i=sf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Yi.length&&i!==0&&i<Yi[o].priority;o++);Yi.splice(o,0,t),o===0&&lf(t)}};function gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function qa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ep(){}function G0(t,i,o,l,u){if(u){if(typeof l=="function"){var h=l;l=function(){var re=Xa(M);h.call(re)}}var M=yp(i,l,t,0,null,!1,!1,"",Ep);return t._reactRootContainer=M,t[Si]=M.current,ho(t.nodeType===8?t.parentNode:t),Pr(),M}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var U=l;l=function(){var re=Xa(z);U.call(re)}}var z=hu(t,0,!1,null,null,!1,!1,"",Ep);return t._reactRootContainer=z,t[Si]=z.current,ho(t.nodeType===8?t.parentNode:t),Pr(function(){ja(i,z,o,l)}),z}function $a(t,i,o,l,u){var h=o._reactRootContainer;if(h){var M=h;if(typeof u=="function"){var U=u;u=function(){var z=Xa(M);U.call(z)}}ja(i,M,t,u)}else M=G0(o,i,t,u,l);return Xa(M)}nf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=yi(i.pendingLanes);o!==0&&(Bl(i,o|1),wn(i,Te()),(vt&6)===0&&(Ss=Te()+500,Ji()))}break;case 13:Pr(function(){var l=Ti(t,1);if(l!==null){var u=_n();ei(l,t,1,u)}}),pu(t,1)}},Hl=function(t){if(t.tag===13){var i=Ti(t,134217728);if(i!==null){var o=_n();ei(i,t,134217728,o)}pu(t,134217728)}},rf=function(t){if(t.tag===13){var i=sr(t),o=Ti(t,i);if(o!==null){var l=_n();ei(o,t,i,l)}pu(t,i)}},sf=function(){return Tt},of=function(t,i){var o=Tt;try{return Tt=t,i()}finally{Tt=o}},ue=function(t,i,o){switch(i){case"input":if(Qe(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var u=fa(l);if(!u)throw Error(n(90));ut(l),Qe(l,u)}}}break;case"textarea":ye(t,o);break;case"select":i=o.value,i!=null&&T(t,!!o.multiple,i,!1)}},an=au,gt=Pr;var W0={usingClientEntryPoint:!1,Events:[go,ls,fa,ft,Ot,au]},Po={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j0={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=X(t),t===null?null:t.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||V0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ka.isDisabled&&Ka.supportsFiber)try{Pt=Ka.inject(j0),Ft=Ka}catch{}}return Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W0,Tn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gu(i))throw Error(n(200));return H0(t,i,null,o)},Tn.createRoot=function(t,i){if(!gu(t))throw Error(n(299));var o=!1,l="",u=Mp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=hu(t,1,!1,null,null,o,!1,l,u),t[Si]=i.current,ho(t.nodeType===8?t.parentNode:t),new mu(i)},Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=X(i),t=t===null?null:t.stateNode,t},Tn.flushSync=function(t){return Pr(t)},Tn.hydrate=function(t,i,o){if(!qa(i))throw Error(n(200));return $a(null,t,i,!0,o)},Tn.hydrateRoot=function(t,i,o){if(!gu(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,u=!1,h="",M=Mp;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=yp(i,null,t,1,o??null,u,!1,h,M),t[Si]=i.current,ho(t),l)for(t=0;t<l.length;t++)o=l[t],u=o._getVersion,u=u(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,u]:i.mutableSourceEagerHydrationData.push(o,u);return new Ya(i)},Tn.render=function(t,i,o){if(!qa(i))throw Error(n(200));return $a(null,t,i,!1,o)},Tn.unmountComponentAtNode=function(t){if(!qa(t))throw Error(n(40));return t._reactRootContainer?(Pr(function(){$a(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1},Tn.unstable_batchedUpdates=au,Tn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!qa(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return $a(t,i,o,!1,l)},Tn.version="18.3.1-next-f1338f8080-20240426",Tn}var Np;function ev(){if(Np)return xu.exports;Np=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),xu.exports=J0(),xu.exports}var Lp;function tv(){if(Lp)return Za;Lp=1;var s=ev();return Za.createRoot=s.createRoot,Za.hydrateRoot=s.hydrateRoot,Za}var nv=tv();const iv=Dm(nv);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wd="169",rv=0,Dp=1,sv=2,Im=1,ov=2,Ii=3,xr=0,bn=1,Ui=2,vr=0,zs=1,Ip=2,Up=3,Fp=4,av=5,Vr=100,lv=101,cv=102,uv=103,dv=104,fv=200,hv=201,pv=202,mv=203,nd=204,id=205,gv=206,vv=207,_v=208,xv=209,yv=210,Sv=211,Mv=212,Ev=213,wv=214,rd=0,sd=1,od=2,Vs=3,ad=4,ld=5,cd=6,ud=7,Um=0,Tv=1,Av=2,_r=0,Cv=1,bv=2,Rv=3,Pv=4,Nv=5,Lv=6,Dv=7,Fm=300,Gs=301,Ws=302,dd=303,fd=304,Ll=306,hd=1e3,Wr=1001,pd=1002,Yn=1003,Iv=1004,Qa=1005,si=1006,Mu=1007,jr=1008,Oi=1009,km=1010,Om=1011,Bo=1012,jd=1013,Yr=1014,Fi=1015,Ho=1016,Xd=1017,Yd=1018,js=1020,zm=35902,Bm=1021,Hm=1022,ai=1023,Vm=1024,Gm=1025,Bs=1026,Xs=1027,Wm=1028,qd=1029,jm=1030,$d=1031,Kd=1033,yl=33776,Sl=33777,Ml=33778,El=33779,md=35840,gd=35841,vd=35842,_d=35843,xd=36196,yd=37492,Sd=37496,Md=37808,Ed=37809,wd=37810,Td=37811,Ad=37812,Cd=37813,bd=37814,Rd=37815,Pd=37816,Nd=37817,Ld=37818,Dd=37819,Id=37820,Ud=37821,wl=36492,Fd=36494,kd=36495,Xm=36283,Od=36284,zd=36285,Bd=36286,Uv=3200,Fv=3201,kv=0,Ov=1,mr="",hi="srgb",yr="srgb-linear",Zd="display-p3",Dl="display-p3-linear",Cl="linear",Ut="srgb",bl="rec709",Rl="p3",Es=7680,kp=519,zv=512,Bv=513,Hv=514,Ym=515,Vv=516,Gv=517,Wv=518,jv=519,Op=35044,zp="300 es",ki=2e3,Pl=2001;class qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,d=a.length;c<d;c++)a[c].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eu=Math.PI/180,Hd=180/Math.PI;function Vo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mn[s&255]+mn[s>>8&255]+mn[s>>16&255]+mn[s>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[n&63|128]+mn[n>>8&255]+"-"+mn[n>>16&255]+mn[n>>24&255]+mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]).toLowerCase()}function Cn(s,e,n){return Math.max(e,Math.min(n,s))}function Xv(s,e){return(s%e+e)%e}function wu(s,e,n){return(1-n)*s+n*e}function Lo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function An(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,n=0){Rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Cn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*a+e.x,this.y=c*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,n,r,a,c,d,f,p,m){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,d,f,p,m)}set(e,n,r,a,c,d,f,p,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=f,v[3]=n,v[4]=c,v[5]=p,v[6]=r,v[7]=d,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,d=r[0],f=r[3],p=r[6],m=r[1],v=r[4],x=r[7],y=r[2],S=r[5],w=r[8],b=a[0],_=a[3],g=a[6],D=a[1],P=a[4],N=a[7],Z=a[2],k=a[5],I=a[8];return c[0]=d*b+f*D+p*Z,c[3]=d*_+f*P+p*k,c[6]=d*g+f*N+p*I,c[1]=m*b+v*D+x*Z,c[4]=m*_+v*P+x*k,c[7]=m*g+v*N+x*I,c[2]=y*b+S*D+w*Z,c[5]=y*_+S*P+w*k,c[8]=y*g+S*N+w*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],v=e[8];return n*d*v-n*f*m-r*c*v+r*f*p+a*c*m-a*d*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],v=e[8],x=v*d-f*m,y=f*p-v*c,S=m*c-d*p,w=n*x+r*y+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=x*b,e[1]=(a*m-v*r)*b,e[2]=(f*r-a*d)*b,e[3]=y*b,e[4]=(v*n-a*p)*b,e[5]=(a*c-f*n)*b,e[6]=S*b,e[7]=(r*p-m*n)*b,e[8]=(d*n-r*c)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,d,f){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*d+m*f)+d+e,-a*m,a*p,-a*(-m*d+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Tu.makeScale(e,n)),this}rotate(e){return this.premultiply(Tu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Tu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tu=new at;function qm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Nl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yv(){const s=Nl("canvas");return s.style.display="block",s}const Bp={};function Tl(s){s in Bp||(Bp[s]=!0,console.warn(s))}function qv(s,e,n){return new Promise(function(r,a){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function $v(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Kv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Hp=new at().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vp=new at().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Do={[yr]:{transfer:Cl,primaries:bl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[hi]:{transfer:Ut,primaries:bl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Dl]:{transfer:Cl,primaries:Rl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Vp),fromReference:s=>s.applyMatrix3(Hp)},[Zd]:{transfer:Ut,primaries:Rl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Vp),fromReference:s=>s.applyMatrix3(Hp).convertLinearToSRGB()}},Zv=new Set([yr,Dl]),wt={enabled:!0,_workingColorSpace:yr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Zv.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=Do[e].toReference,a=Do[n].fromReference;return a(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Do[s].primaries},getTransfer:function(s){return s===mr?Cl:Do[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Do[e].luminanceCoefficients)}};function Hs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Au(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ws;class Qv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ws===void 0&&(ws=Nl("canvas")),ws.width=e.width,ws.height=e.height;const r=ws.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ws}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Nl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let d=0;d<c.length;d++)c[d]=Hs(c[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Hs(n[r]/255)*255):n[r]=Hs(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jv=0;class $m{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=Vo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let d=0,f=a.length;d<f;d++)a[d].isDataTexture?c.push(Cu(a[d].image)):c.push(Cu(a[d]))}else c=Cu(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function Cu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let e_=0;class Rn extends qs{constructor(e=Rn.DEFAULT_IMAGE,n=Rn.DEFAULT_MAPPING,r=Wr,a=Wr,c=si,d=jr,f=ai,p=Oi,m=Rn.DEFAULT_ANISOTROPY,v=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=Vo(),this.name="",this.source=new $m(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hd:e.x=e.x-Math.floor(e.x);break;case Wr:e.x=e.x<0?0:1;break;case pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hd:e.y=e.y-Math.floor(e.y);break;case Wr:e.y=e.y<0?0:1;break;case pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Fm;Rn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,n=0,r=0,a=1){Gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*c,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*c,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*c,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const p=e.elements,m=p[0],v=p[4],x=p[8],y=p[1],S=p[5],w=p[9],b=p[2],_=p[6],g=p[10];if(Math.abs(v-y)<.01&&Math.abs(x-b)<.01&&Math.abs(w-_)<.01){if(Math.abs(v+y)<.1&&Math.abs(x+b)<.1&&Math.abs(w+_)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(m+1)/2,N=(S+1)/2,Z=(g+1)/2,k=(v+y)/4,I=(x+b)/4,q=(w+_)/4;return P>N&&P>Z?P<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(P),a=k/r,c=I/r):N>Z?N<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(N),r=k/a,c=q/a):Z<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt(Z),r=I/c,a=q/c),this.set(r,a,c,n),this}let D=Math.sqrt((_-w)*(_-w)+(x-b)*(x-b)+(y-v)*(y-v));return Math.abs(D)<.001&&(D=1),this.x=(_-w)/D,this.y=(x-b)/D,this.z=(y-v)/D,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class t_ extends qs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Gt(0,0,e,n),this.scissorTest=!1,this.viewport=new Gt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Rn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new $m(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends t_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Km extends Rn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class n_ extends Rn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Go{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,d,f){let p=r[a+0],m=r[a+1],v=r[a+2],x=r[a+3];const y=c[d+0],S=c[d+1],w=c[d+2],b=c[d+3];if(f===0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=x;return}if(f===1){e[n+0]=y,e[n+1]=S,e[n+2]=w,e[n+3]=b;return}if(x!==b||p!==y||m!==S||v!==w){let _=1-f;const g=p*y+m*S+v*w+x*b,D=g>=0?1:-1,P=1-g*g;if(P>Number.EPSILON){const Z=Math.sqrt(P),k=Math.atan2(Z,g*D);_=Math.sin(_*k)/Z,f=Math.sin(f*k)/Z}const N=f*D;if(p=p*_+y*N,m=m*_+S*N,v=v*_+w*N,x=x*_+b*N,_===1-f){const Z=1/Math.sqrt(p*p+m*m+v*v+x*x);p*=Z,m*=Z,v*=Z,x*=Z}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,c,d){const f=r[a],p=r[a+1],m=r[a+2],v=r[a+3],x=c[d],y=c[d+1],S=c[d+2],w=c[d+3];return e[n]=f*w+v*x+p*S-m*y,e[n+1]=p*w+v*y+m*x-f*S,e[n+2]=m*w+v*S+f*y-p*x,e[n+3]=v*w-f*x-p*y-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,d=e._order,f=Math.cos,p=Math.sin,m=f(r/2),v=f(a/2),x=f(c/2),y=p(r/2),S=p(a/2),w=p(c/2);switch(d){case"XYZ":this._x=y*v*x+m*S*w,this._y=m*S*x-y*v*w,this._z=m*v*w+y*S*x,this._w=m*v*x-y*S*w;break;case"YXZ":this._x=y*v*x+m*S*w,this._y=m*S*x-y*v*w,this._z=m*v*w-y*S*x,this._w=m*v*x+y*S*w;break;case"ZXY":this._x=y*v*x-m*S*w,this._y=m*S*x+y*v*w,this._z=m*v*w+y*S*x,this._w=m*v*x-y*S*w;break;case"ZYX":this._x=y*v*x-m*S*w,this._y=m*S*x+y*v*w,this._z=m*v*w-y*S*x,this._w=m*v*x+y*S*w;break;case"YZX":this._x=y*v*x+m*S*w,this._y=m*S*x+y*v*w,this._z=m*v*w-y*S*x,this._w=m*v*x-y*S*w;break;case"XZY":this._x=y*v*x-m*S*w,this._y=m*S*x-y*v*w,this._z=m*v*w+y*S*x,this._w=m*v*x+y*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],d=n[1],f=n[5],p=n[9],m=n[2],v=n[6],x=n[10],y=r+f+x;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(v-p)*S,this._y=(c-m)*S,this._z=(d-a)*S}else if(r>f&&r>x){const S=2*Math.sqrt(1+r-f-x);this._w=(v-p)/S,this._x=.25*S,this._y=(a+d)/S,this._z=(c+m)/S}else if(f>x){const S=2*Math.sqrt(1+f-r-x);this._w=(c-m)/S,this._x=(a+d)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+x-r-f);this._w=(d-a)/S,this._x=(c+m)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Cn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,d=e._w,f=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+d*f+a*m-c*p,this._y=a*v+d*p+c*f-r*m,this._z=c*v+d*m+r*p-a*f,this._w=d*v-r*f-a*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,d=this._w;let f=d*e._w+r*e._x+a*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=r,this._y=a,this._z=c,this;const p=1-f*f;if(p<=Number.EPSILON){const S=1-n;return this._w=S*d+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,f),x=Math.sin((1-n)*v)/m,y=Math.sin(n*v)/m;return this._w=d*x+this._w*y,this._x=r*x+this._x*y,this._y=a*x+this._y*y,this._z=c*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,n=0,r=0){oe.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Gp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Gp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,d=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*d,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*d,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,d=e.y,f=e.z,p=e.w,m=2*(d*a-f*r),v=2*(f*n-c*a),x=2*(c*r-d*n);return this.x=n+p*m+d*x-f*v,this.y=r+p*v+f*m-c*x,this.z=a+p*x+c*v-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,d=n.x,f=n.y,p=n.z;return this.x=a*p-c*f,this.y=c*d-r*p,this.z=r*f-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return bu.copy(this).projectOnVector(e),this.sub(bu)}reflect(e){return this.sub(bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Cn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bu=new oe,Gp=new Go;class Wo{constructor(e=new oe(1/0,1/0,1/0),n=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=c.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,ti):ti.fromBufferAttribute(c,d),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ja.copy(r.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}const a=e.children;for(let c=0,d=a.length;c<d;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),el.subVectors(this.max,Io),Ts.subVectors(e.a,Io),As.subVectors(e.b,Io),Cs.subVectors(e.c,Io),cr.subVectors(As,Ts),ur.subVectors(Cs,As),Ir.subVectors(Ts,Cs);let n=[0,-cr.z,cr.y,0,-ur.z,ur.y,0,-Ir.z,Ir.y,cr.z,0,-cr.x,ur.z,0,-ur.x,Ir.z,0,-Ir.x,-cr.y,cr.x,0,-ur.y,ur.x,0,-Ir.y,Ir.x,0];return!Ru(n,Ts,As,Cs,el)||(n=[1,0,0,0,1,0,0,0,1],!Ru(n,Ts,As,Cs,el))?!1:(tl.crossVectors(cr,ur),n=[tl.x,tl.y,tl.z],Ru(n,Ts,As,Cs,el))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],ti=new oe,Ja=new Wo,Ts=new oe,As=new oe,Cs=new oe,cr=new oe,ur=new oe,Ir=new oe,Io=new oe,el=new oe,tl=new oe,Ur=new oe;function Ru(s,e,n,r,a){for(let c=0,d=s.length-3;c<=d;c+=3){Ur.fromArray(s,c);const f=a.x*Math.abs(Ur.x)+a.y*Math.abs(Ur.y)+a.z*Math.abs(Ur.z),p=e.dot(Ur),m=n.dot(Ur),v=r.dot(Ur);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>f)return!1}return!0}const i_=new Wo,Uo=new oe,Pu=new oe;class Qd{constructor(e=new oe,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):i_.setFromPoints(e).getCenter(r);let a=0;for(let c=0,d=e.length;c<d;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const n=Uo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Uo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(Pu)),this.expandByPoint(Uo.copy(e.center).sub(Pu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new oe,Nu=new oe,nl=new oe,dr=new oe,Lu=new oe,il=new oe,Du=new oe;class r_{constructor(e=new oe,n=new oe(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,n),Pi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Nu.copy(e).add(n).multiplyScalar(.5),nl.copy(n).sub(e).normalize(),dr.copy(this.origin).sub(Nu);const c=e.distanceTo(n)*.5,d=-this.direction.dot(nl),f=dr.dot(this.direction),p=-dr.dot(nl),m=dr.lengthSq(),v=Math.abs(1-d*d);let x,y,S,w;if(v>0)if(x=d*p-f,y=d*f-p,w=c*v,x>=0)if(y>=-w)if(y<=w){const b=1/v;x*=b,y*=b,S=x*(x+d*y+2*f)+y*(d*x+y+2*p)+m}else y=c,x=Math.max(0,-(d*y+f)),S=-x*x+y*(y+2*p)+m;else y=-c,x=Math.max(0,-(d*y+f)),S=-x*x+y*(y+2*p)+m;else y<=-w?(x=Math.max(0,-(-d*c+f)),y=x>0?-c:Math.min(Math.max(-c,-p),c),S=-x*x+y*(y+2*p)+m):y<=w?(x=0,y=Math.min(Math.max(-c,-p),c),S=y*(y+2*p)+m):(x=Math.max(0,-(d*c+f)),y=x>0?c:Math.min(Math.max(-c,-p),c),S=-x*x+y*(y+2*p)+m);else y=d>0?-c:c,x=Math.max(0,-(d*y+f)),S=-x*x+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Nu).addScaledVector(nl,y),S}intersectSphere(e,n){Pi.subVectors(e.center,this.origin);const r=Pi.dot(this.direction),a=Pi.dot(Pi)-r*r,c=e.radius*e.radius;if(a>c)return null;const d=Math.sqrt(c-a),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,d,f,p;const m=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,a=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,a=(e.min.x-y.x)*m),v>=0?(c=(e.min.y-y.y)*v,d=(e.max.y-y.y)*v):(c=(e.max.y-y.y)*v,d=(e.min.y-y.y)*v),r>d||c>a||((c>r||isNaN(r))&&(r=c),(d<a||isNaN(a))&&(a=d),x>=0?(f=(e.min.z-y.z)*x,p=(e.max.z-y.z)*x):(f=(e.max.z-y.z)*x,p=(e.min.z-y.z)*x),r>p||f>a)||((f>r||r!==r)&&(r=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,n,r,a,c){Lu.subVectors(n,e),il.subVectors(r,e),Du.crossVectors(Lu,il);let d=this.direction.dot(Du),f;if(d>0){if(a)return null;f=1}else if(d<0)f=-1,d=-d;else return null;dr.subVectors(this.origin,e);const p=f*this.direction.dot(il.crossVectors(dr,il));if(p<0)return null;const m=f*this.direction.dot(Lu.cross(dr));if(m<0||p+m>d)return null;const v=-f*dr.dot(Du);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,n,r,a,c,d,f,p,m,v,x,y,S,w,b,_){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,d,f,p,m,v,x,y,S,w,b,_)}set(e,n,r,a,c,d,f,p,m,v,x,y,S,w,b,_){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=c,g[5]=d,g[9]=f,g[13]=p,g[2]=m,g[6]=v,g[10]=x,g[14]=y,g[3]=S,g[7]=w,g[11]=b,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/bs.setFromMatrixColumn(e,0).length(),c=1/bs.setFromMatrixColumn(e,1).length(),d=1/bs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(a),m=Math.sin(a),v=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const y=d*v,S=d*x,w=f*v,b=f*x;n[0]=p*v,n[4]=-p*x,n[8]=m,n[1]=S+w*m,n[5]=y-b*m,n[9]=-f*p,n[2]=b-y*m,n[6]=w+S*m,n[10]=d*p}else if(e.order==="YXZ"){const y=p*v,S=p*x,w=m*v,b=m*x;n[0]=y+b*f,n[4]=w*f-S,n[8]=d*m,n[1]=d*x,n[5]=d*v,n[9]=-f,n[2]=S*f-w,n[6]=b+y*f,n[10]=d*p}else if(e.order==="ZXY"){const y=p*v,S=p*x,w=m*v,b=m*x;n[0]=y-b*f,n[4]=-d*x,n[8]=w+S*f,n[1]=S+w*f,n[5]=d*v,n[9]=b-y*f,n[2]=-d*m,n[6]=f,n[10]=d*p}else if(e.order==="ZYX"){const y=d*v,S=d*x,w=f*v,b=f*x;n[0]=p*v,n[4]=w*m-S,n[8]=y*m+b,n[1]=p*x,n[5]=b*m+y,n[9]=S*m-w,n[2]=-m,n[6]=f*p,n[10]=d*p}else if(e.order==="YZX"){const y=d*p,S=d*m,w=f*p,b=f*m;n[0]=p*v,n[4]=b-y*x,n[8]=w*x+S,n[1]=x,n[5]=d*v,n[9]=-f*v,n[2]=-m*v,n[6]=S*x+w,n[10]=y-b*x}else if(e.order==="XZY"){const y=d*p,S=d*m,w=f*p,b=f*m;n[0]=p*v,n[4]=-x,n[8]=m*v,n[1]=y*x+b,n[5]=d*v,n[9]=S*x-w,n[2]=w*x-S,n[6]=f*v,n[10]=b*x+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(s_,e,o_)}lookAt(e,n,r){const a=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),fr.crossVectors(r,Fn),fr.lengthSq()===0&&(Math.abs(r.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),fr.crossVectors(r,Fn)),fr.normalize(),rl.crossVectors(Fn,fr),a[0]=fr.x,a[4]=rl.x,a[8]=Fn.x,a[1]=fr.y,a[5]=rl.y,a[9]=Fn.y,a[2]=fr.z,a[6]=rl.z,a[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,d=r[0],f=r[4],p=r[8],m=r[12],v=r[1],x=r[5],y=r[9],S=r[13],w=r[2],b=r[6],_=r[10],g=r[14],D=r[3],P=r[7],N=r[11],Z=r[15],k=a[0],I=a[4],q=a[8],me=a[12],E=a[1],R=a[5],V=a[9],j=a[13],$=a[2],ae=a[6],J=a[10],le=a[14],O=a[3],de=a[7],se=a[11],F=a[15];return c[0]=d*k+f*E+p*$+m*O,c[4]=d*I+f*R+p*ae+m*de,c[8]=d*q+f*V+p*J+m*se,c[12]=d*me+f*j+p*le+m*F,c[1]=v*k+x*E+y*$+S*O,c[5]=v*I+x*R+y*ae+S*de,c[9]=v*q+x*V+y*J+S*se,c[13]=v*me+x*j+y*le+S*F,c[2]=w*k+b*E+_*$+g*O,c[6]=w*I+b*R+_*ae+g*de,c[10]=w*q+b*V+_*J+g*se,c[14]=w*me+b*j+_*le+g*F,c[3]=D*k+P*E+N*$+Z*O,c[7]=D*I+P*R+N*ae+Z*de,c[11]=D*q+P*V+N*J+Z*se,c[15]=D*me+P*j+N*le+Z*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],d=e[1],f=e[5],p=e[9],m=e[13],v=e[2],x=e[6],y=e[10],S=e[14],w=e[3],b=e[7],_=e[11],g=e[15];return w*(+c*p*x-a*m*x-c*f*y+r*m*y+a*f*S-r*p*S)+b*(+n*p*S-n*m*y+c*d*y-a*d*S+a*m*v-c*p*v)+_*(+n*m*x-n*f*S-c*d*x+r*d*S+c*f*v-r*m*v)+g*(-a*f*v-n*p*x+n*f*y+a*d*x-r*d*y+r*p*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],v=e[8],x=e[9],y=e[10],S=e[11],w=e[12],b=e[13],_=e[14],g=e[15],D=x*_*m-b*y*m+b*p*S-f*_*S-x*p*g+f*y*g,P=w*y*m-v*_*m-w*p*S+d*_*S+v*p*g-d*y*g,N=v*b*m-w*x*m+w*f*S-d*b*S-v*f*g+d*x*g,Z=w*x*p-v*b*p-w*f*y+d*b*y+v*f*_-d*x*_,k=n*D+r*P+a*N+c*Z;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/k;return e[0]=D*I,e[1]=(b*y*c-x*_*c-b*a*S+r*_*S+x*a*g-r*y*g)*I,e[2]=(f*_*c-b*p*c+b*a*m-r*_*m-f*a*g+r*p*g)*I,e[3]=(x*p*c-f*y*c-x*a*m+r*y*m+f*a*S-r*p*S)*I,e[4]=P*I,e[5]=(v*_*c-w*y*c+w*a*S-n*_*S-v*a*g+n*y*g)*I,e[6]=(w*p*c-d*_*c-w*a*m+n*_*m+d*a*g-n*p*g)*I,e[7]=(d*y*c-v*p*c+v*a*m-n*y*m-d*a*S+n*p*S)*I,e[8]=N*I,e[9]=(w*x*c-v*b*c-w*r*S+n*b*S+v*r*g-n*x*g)*I,e[10]=(d*b*c-w*f*c+w*r*m-n*b*m-d*r*g+n*f*g)*I,e[11]=(v*f*c-d*x*c-v*r*m+n*x*m+d*r*S-n*f*S)*I,e[12]=Z*I,e[13]=(v*b*a-w*x*a+w*r*y-n*b*y-v*r*_+n*x*_)*I,e[14]=(w*f*a-d*b*a-w*r*p+n*b*p+d*r*_-n*f*_)*I,e[15]=(d*x*a-v*f*a+v*r*p-n*x*p-d*r*y+n*f*y)*I,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,d=e.x,f=e.y,p=e.z,m=c*d,v=c*f;return this.set(m*d+r,m*f-a*p,m*p+a*f,0,m*f+a*p,v*f+r,v*p-a*d,0,m*p-a*f,v*p+a*d,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,d){return this.set(1,r,c,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,d=n._y,f=n._z,p=n._w,m=c+c,v=d+d,x=f+f,y=c*m,S=c*v,w=c*x,b=d*v,_=d*x,g=f*x,D=p*m,P=p*v,N=p*x,Z=r.x,k=r.y,I=r.z;return a[0]=(1-(b+g))*Z,a[1]=(S+N)*Z,a[2]=(w-P)*Z,a[3]=0,a[4]=(S-N)*k,a[5]=(1-(y+g))*k,a[6]=(_+D)*k,a[7]=0,a[8]=(w+P)*I,a[9]=(_-D)*I,a[10]=(1-(y+b))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=bs.set(a[0],a[1],a[2]).length();const d=bs.set(a[4],a[5],a[6]).length(),f=bs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],ni.copy(this);const m=1/c,v=1/d,x=1/f;return ni.elements[0]*=m,ni.elements[1]*=m,ni.elements[2]*=m,ni.elements[4]*=v,ni.elements[5]*=v,ni.elements[6]*=v,ni.elements[8]*=x,ni.elements[9]*=x,ni.elements[10]*=x,n.setFromRotationMatrix(ni),r.x=c,r.y=d,r.z=f,this}makePerspective(e,n,r,a,c,d,f=ki){const p=this.elements,m=2*c/(n-e),v=2*c/(r-a),x=(n+e)/(n-e),y=(r+a)/(r-a);let S,w;if(f===ki)S=-(d+c)/(d-c),w=-2*d*c/(d-c);else if(f===Pl)S=-d/(d-c),w=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,c,d,f=ki){const p=this.elements,m=1/(n-e),v=1/(r-a),x=1/(d-c),y=(n+e)*m,S=(r+a)*v;let w,b;if(f===ki)w=(d+c)*x,b=-2*x;else if(f===Pl)w=c*x,b=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=b,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const bs=new oe,ni=new Xt,s_=new oe(0,0,0),o_=new oe(1,1,1),fr=new oe,rl=new oe,Fn=new oe,Wp=new Xt,jp=new Go;class zi{constructor(e=0,n=0,r=0,a=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],d=a[4],f=a[8],p=a[1],m=a[5],v=a[9],x=a[2],y=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(Cn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Cn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Cn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Wp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return jp.setFromEuler(this),this.setFromQuaternion(jp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class Zm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let a_=0;const Xp=new oe,Rs=new Go,Ni=new Xt,sl=new oe,Fo=new oe,l_=new oe,c_=new Go,Yp=new oe(1,0,0),qp=new oe(0,1,0),$p=new oe(0,0,1),Kp={type:"added"},u_={type:"removed"},Ps={type:"childadded",child:null},Iu={type:"childremoved",child:null};class On extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new oe,n=new zi,r=new Go,a=new oe(1,1,1);function c(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Xt},normalMatrix:{value:new at}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(Yp,e)}rotateY(e){return this.rotateOnAxis(qp,e)}rotateZ(e){return this.rotateOnAxis($p,e)}translateOnAxis(e,n){return Xp.copy(e).applyQuaternion(this.quaternion),this.position.add(Xp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Yp,e)}translateY(e){return this.translateOnAxis(qp,e)}translateZ(e){return this.translateOnAxis($p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?sl.copy(e):sl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Fo,sl,this.up):Ni.lookAt(sl,Fo,this.up),this.quaternion.setFromRotationMatrix(Ni),a&&(Ni.extractRotation(a.matrixWorld),Rs.setFromRotationMatrix(Ni),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kp),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(u_),Iu.child=e,this.dispatchEvent(Iu),Iu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kp),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,d=a.length;c<d;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,l_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,c_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,d=a.length;c<d;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const x=p[m];c(e.shapes,x)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(c(e.materials,this.material[p]));a.material=f}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(c(e.animations,p))}}if(n){const f=d(e.geometries),p=d(e.materials),m=d(e.textures),v=d(e.images),x=d(e.shapes),y=d(e.skeletons),S=d(e.animations),w=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function d(f){const p=[];for(const m in f){const v=f[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}On.DEFAULT_UP=new oe(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new oe,Li=new oe,Uu=new oe,Di=new oe,Ns=new oe,Ls=new oe,Zp=new oe,Fu=new oe,ku=new oe,Ou=new oe,zu=new Gt,Bu=new Gt,Hu=new Gt;class oi{constructor(e=new oe,n=new oe,r=new oe){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ii.subVectors(e,n),a.cross(ii);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){ii.subVectors(a,n),Li.subVectors(r,n),Uu.subVectors(e,n);const d=ii.dot(ii),f=ii.dot(Li),p=ii.dot(Uu),m=Li.dot(Li),v=Li.dot(Uu),x=d*m-f*f;if(x===0)return c.set(0,0,0),null;const y=1/x,S=(m*p-f*v)*y,w=(d*v-f*p)*y;return c.set(1-S-w,w,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,n,r,a,c,d,f,p){return this.getBarycoord(e,n,r,a,Di)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Di.x),p.addScaledVector(d,Di.y),p.addScaledVector(f,Di.z),p)}static getInterpolatedAttribute(e,n,r,a,c,d){return zu.setScalar(0),Bu.setScalar(0),Hu.setScalar(0),zu.fromBufferAttribute(e,n),Bu.fromBufferAttribute(e,r),Hu.fromBufferAttribute(e,a),d.setScalar(0),d.addScaledVector(zu,c.x),d.addScaledVector(Bu,c.y),d.addScaledVector(Hu,c.z),d}static isFrontFacing(e,n,r,a){return ii.subVectors(r,n),Li.subVectors(e,n),ii.cross(Li).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ii.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return oi.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let d,f;Ns.subVectors(a,r),Ls.subVectors(c,r),Fu.subVectors(e,r);const p=Ns.dot(Fu),m=Ls.dot(Fu);if(p<=0&&m<=0)return n.copy(r);ku.subVectors(e,a);const v=Ns.dot(ku),x=Ls.dot(ku);if(v>=0&&x<=v)return n.copy(a);const y=p*x-v*m;if(y<=0&&p>=0&&v<=0)return d=p/(p-v),n.copy(r).addScaledVector(Ns,d);Ou.subVectors(e,c);const S=Ns.dot(Ou),w=Ls.dot(Ou);if(w>=0&&S<=w)return n.copy(c);const b=S*m-p*w;if(b<=0&&m>=0&&w<=0)return f=m/(m-w),n.copy(r).addScaledVector(Ls,f);const _=v*w-S*x;if(_<=0&&x-v>=0&&S-w>=0)return Zp.subVectors(c,a),f=(x-v)/(x-v+(S-w)),n.copy(a).addScaledVector(Zp,f);const g=1/(_+b+y);return d=b*g,f=y*g,n.copy(r).addScaledVector(Ns,d).addScaledVector(Ls,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},ol={h:0,s:0,l:0};function Vu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class bt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=wt.workingColorSpace){return this.r=e,this.g=n,this.b=r,wt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=wt.workingColorSpace){if(e=Xv(e,1),n=Cn(n,0,1),r=Cn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,d=2*r-c;this.r=Vu(d,c,e+1/3),this.g=Vu(d,c,e),this.b=Vu(d,c,e-1/3)}return wt.toWorkingColorSpace(this,a),this}setStyle(e,n=hi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=a[1],f=a[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=hi){const r=Qm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}copyLinearToSRGB(e){return this.r=Au(e.r),this.g=Au(e.g),this.b=Au(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return wt.fromWorkingColorSpace(gn.copy(this),e),Math.round(Cn(gn.r*255,0,255))*65536+Math.round(Cn(gn.g*255,0,255))*256+Math.round(Cn(gn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=wt.workingColorSpace){wt.fromWorkingColorSpace(gn.copy(this),n);const r=gn.r,a=gn.g,c=gn.b,d=Math.max(r,a,c),f=Math.min(r,a,c);let p,m;const v=(f+d)/2;if(f===d)p=0,m=0;else{const x=d-f;switch(m=v<=.5?x/(d+f):x/(2-d-f),d){case r:p=(a-c)/x+(a<c?6:0);break;case a:p=(c-r)/x+2;break;case c:p=(r-a)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=wt.workingColorSpace){return wt.fromWorkingColorSpace(gn.copy(this),n),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=hi){wt.fromWorkingColorSpace(gn.copy(this),e);const n=gn.r,r=gn.g,a=gn.b;return e!==hi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+n,hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(hr),e.getHSL(ol);const r=wu(hr.h,ol.h,n),a=wu(hr.s,ol.s,n),c=wu(hr.l,ol.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new bt;bt.NAMES=Qm;let d_=0;class Il extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=Vo(),this.name="",this.type="Material",this.blending=zs,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nd,this.blendDst=id,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(r.blending=this.blending),this.side!==xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==nd&&(r.blendSrc=this.blendSrc),this.blendDst!==id&&(r.blendDst=this.blendDst),this.blendEquation!==Vr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const d=[];for(const f in c){const p=c[f];delete p.metadata,d.push(p)}return d}if(n){const c=a(e.textures),d=a(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jm extends Il{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Um,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new oe,al=new Rt;class vi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Op,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)al.fromBufferAttribute(this,n),al.applyMatrix3(e),this.setXY(n,al.x,al.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix3(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix4(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyNormalMatrix(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.transformDirection(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Lo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=An(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Lo(n,this.array)),n}setX(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Lo(n,this.array)),n}setY(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Lo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Lo(n,this.array)),n}setW(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array),a=An(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array),a=An(a,this.array),c=An(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Op&&(e.usage=this.usage),e}}class eg extends vi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class tg extends vi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Xr extends vi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let f_=0;const Xn=new Xt,Gu=new On,Ds=new oe,kn=new Wo,ko=new Wo,rn=new oe;class Kr extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qm(e)?tg:eg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new at().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,n,r){return Xn.makeTranslation(e,n,r),this.applyMatrix4(Xn),this}scale(e,n,r){return Xn.makeScale(e,n,r),this.applyMatrix4(Xn),this}lookAt(e){return Gu.lookAt(e),Gu.updateMatrix(),this.applyMatrix4(Gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new Xr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];kn.setFromBufferAttribute(c),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const r=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),n)for(let c=0,d=n.length;c<d;c++){const f=n[c];ko.setFromBufferAttribute(f),this.morphTargetsRelative?(rn.addVectors(kn.min,ko.min),kn.expandByPoint(rn),rn.addVectors(kn.max,ko.max),kn.expandByPoint(rn)):(kn.expandByPoint(ko.min),kn.expandByPoint(ko.max))}kn.getCenter(r);let a=0;for(let c=0,d=e.count;c<d;c++)rn.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(rn));if(n)for(let c=0,d=n.length;c<d;c++){const f=n[c],p=this.morphTargetsRelative;for(let m=0,v=f.count;m<v;m++)rn.fromBufferAttribute(f,m),p&&(Ds.fromBufferAttribute(e,m),rn.add(Ds)),a=Math.max(a,r.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],p=[];for(let q=0;q<r.count;q++)f[q]=new oe,p[q]=new oe;const m=new oe,v=new oe,x=new oe,y=new Rt,S=new Rt,w=new Rt,b=new oe,_=new oe;function g(q,me,E){m.fromBufferAttribute(r,q),v.fromBufferAttribute(r,me),x.fromBufferAttribute(r,E),y.fromBufferAttribute(c,q),S.fromBufferAttribute(c,me),w.fromBufferAttribute(c,E),v.sub(m),x.sub(m),S.sub(y),w.sub(y);const R=1/(S.x*w.y-w.x*S.y);isFinite(R)&&(b.copy(v).multiplyScalar(w.y).addScaledVector(x,-S.y).multiplyScalar(R),_.copy(x).multiplyScalar(S.x).addScaledVector(v,-w.x).multiplyScalar(R),f[q].add(b),f[me].add(b),f[E].add(b),p[q].add(_),p[me].add(_),p[E].add(_))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let q=0,me=D.length;q<me;++q){const E=D[q],R=E.start,V=E.count;for(let j=R,$=R+V;j<$;j+=3)g(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const P=new oe,N=new oe,Z=new oe,k=new oe;function I(q){Z.fromBufferAttribute(a,q),k.copy(Z);const me=f[q];P.copy(me),P.sub(Z.multiplyScalar(Z.dot(me))).normalize(),N.crossVectors(k,me);const R=N.dot(p[q])<0?-1:1;d.setXYZW(q,P.x,P.y,P.z,R)}for(let q=0,me=D.length;q<me;++q){const E=D[q],R=E.start,V=E.count;for(let j=R,$=R+V;j<$;j+=3)I(e.getX(j+0)),I(e.getX(j+1)),I(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const a=new oe,c=new oe,d=new oe,f=new oe,p=new oe,m=new oe,v=new oe,x=new oe;if(e)for(let y=0,S=e.count;y<S;y+=3){const w=e.getX(y+0),b=e.getX(y+1),_=e.getX(y+2);a.fromBufferAttribute(n,w),c.fromBufferAttribute(n,b),d.fromBufferAttribute(n,_),v.subVectors(d,c),x.subVectors(a,c),v.cross(x),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,_),f.add(v),p.add(v),m.add(v),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(_,m.x,m.y,m.z)}else for(let y=0,S=n.count;y<S;y+=3)a.fromBufferAttribute(n,y+0),c.fromBufferAttribute(n,y+1),d.fromBufferAttribute(n,y+2),v.subVectors(d,c),x.subVectors(a,c),v.cross(x),r.setXYZ(y+0,v.x,v.y,v.z),r.setXYZ(y+1,v.x,v.y,v.z),r.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)rn.fromBufferAttribute(e,n),rn.normalize(),e.setXYZ(n,rn.x,rn.y,rn.z)}toNonIndexed(){function e(f,p){const m=f.array,v=f.itemSize,x=f.normalized,y=new m.constructor(p.length*v);let S=0,w=0;for(let b=0,_=p.length;b<_;b++){f.isInterleavedBufferAttribute?S=p[b]*f.data.stride+f.offset:S=p[b]*v;for(let g=0;g<v;g++)y[w++]=m[S++]}return new vi(y,v,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Kr,r=this.index.array,a=this.attributes;for(const f in a){const p=a[f],m=e(p,r);n.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const p=[],m=c[f];for(let v=0,x=m.length;v<x;v++){const y=m[v],S=e(y,r);p.push(S)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const m=d[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let x=0,y=m.length;x<y;x++){const S=m[x];v.push(S.toJSON(e.data))}v.length>0&&(a[p]=v,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(n))}const c=e.morphAttributes;for(const m in c){const v=[],x=c[m];for(let y=0,S=x.length;y<S;y++)v.push(x[y].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,v=d.length;m<v;m++){const x=d[m];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qp=new Xt,Fr=new r_,ll=new Qd,Jp=new oe,cl=new oe,ul=new oe,dl=new oe,Wu=new oe,fl=new oe,em=new oe,hl=new oe;class gi extends On{constructor(e=new Kr,n=new Jm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=a.length;c<d;c++){const f=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(c&&f){fl.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=f[p],x=c[p];v!==0&&(Wu.fromBufferAttribute(x,e),d?fl.addScaledVector(Wu,v):fl.addScaledVector(Wu.sub(n),v))}n.add(fl)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ll.copy(r.boundingSphere),ll.applyMatrix4(c),Fr.copy(e.ray).recast(e.near),!(ll.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(ll,Jp)===null||Fr.origin.distanceToSquared(Jp)>(e.far-e.near)**2))&&(Qp.copy(c).invert(),Fr.copy(e.ray).applyMatrix4(Qp),!(r.boundingBox!==null&&Fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Fr)))}_computeIntersections(e,n,r){let a;const c=this.geometry,d=this.material,f=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,x=c.attributes.normal,y=c.groups,S=c.drawRange;if(f!==null)if(Array.isArray(d))for(let w=0,b=y.length;w<b;w++){const _=y[w],g=d[_.materialIndex],D=Math.max(_.start,S.start),P=Math.min(f.count,Math.min(_.start+_.count,S.start+S.count));for(let N=D,Z=P;N<Z;N+=3){const k=f.getX(N),I=f.getX(N+1),q=f.getX(N+2);a=pl(this,g,e,r,m,v,x,k,I,q),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),b=Math.min(f.count,S.start+S.count);for(let _=w,g=b;_<g;_+=3){const D=f.getX(_),P=f.getX(_+1),N=f.getX(_+2);a=pl(this,d,e,r,m,v,x,D,P,N),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(d))for(let w=0,b=y.length;w<b;w++){const _=y[w],g=d[_.materialIndex],D=Math.max(_.start,S.start),P=Math.min(p.count,Math.min(_.start+_.count,S.start+S.count));for(let N=D,Z=P;N<Z;N+=3){const k=N,I=N+1,q=N+2;a=pl(this,g,e,r,m,v,x,k,I,q),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),b=Math.min(p.count,S.start+S.count);for(let _=w,g=b;_<g;_+=3){const D=_,P=_+1,N=_+2;a=pl(this,d,e,r,m,v,x,D,P,N),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}}}function h_(s,e,n,r,a,c,d,f){let p;if(e.side===bn?p=r.intersectTriangle(d,c,a,!0,f):p=r.intersectTriangle(a,c,d,e.side===xr,f),p===null)return null;hl.copy(f),hl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(hl);return m<n.near||m>n.far?null:{distance:m,point:hl.clone(),object:s}}function pl(s,e,n,r,a,c,d,f,p,m){s.getVertexPosition(f,cl),s.getVertexPosition(p,ul),s.getVertexPosition(m,dl);const v=h_(s,e,n,r,cl,ul,dl,em);if(v){const x=new oe;oi.getBarycoord(em,cl,ul,dl,x),a&&(v.uv=oi.getInterpolatedAttribute(a,f,p,m,x,new Rt)),c&&(v.uv1=oi.getInterpolatedAttribute(c,f,p,m,x,new Rt)),d&&(v.normal=oi.getInterpolatedAttribute(d,f,p,m,x,new oe),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:f,b:p,c:m,normal:new oe,materialIndex:0};oi.getNormal(cl,ul,dl,y.normal),v.face=y,v.barycoord=x}return v}class jo extends Kr{constructor(e=1,n=1,r=1,a=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:d};const f=this;a=Math.floor(a),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],v=[],x=[];let y=0,S=0;w("z","y","x",-1,-1,r,n,e,d,c,0),w("z","y","x",1,-1,r,n,-e,d,c,1),w("x","z","y",1,1,e,r,n,a,d,2),w("x","z","y",1,-1,e,r,-n,a,d,3),w("x","y","z",1,-1,e,n,r,a,c,4),w("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(p),this.setAttribute("position",new Xr(m,3)),this.setAttribute("normal",new Xr(v,3)),this.setAttribute("uv",new Xr(x,2));function w(b,_,g,D,P,N,Z,k,I,q,me){const E=N/I,R=Z/q,V=N/2,j=Z/2,$=k/2,ae=I+1,J=q+1;let le=0,O=0;const de=new oe;for(let se=0;se<J;se++){const F=se*R-j;for(let ne=0;ne<ae;ne++){const Re=ne*E-V;de[b]=Re*D,de[_]=F*P,de[g]=$,m.push(de.x,de.y,de.z),de[b]=0,de[_]=0,de[g]=k>0?1:-1,v.push(de.x,de.y,de.z),x.push(ne/I),x.push(1-se/q),le+=1}}for(let se=0;se<q;se++)for(let F=0;F<I;F++){const ne=y+F+ae*se,Re=y+F+ae*(se+1),G=y+(F+1)+ae*(se+1),ce=y+(F+1)+ae*se;p.push(ne,Re,ce),p.push(Re,G,ce),O+=6}f.addGroup(S,O,me),S+=O,y+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function xn(s){const e={};for(let n=0;n<s.length;n++){const r=Ys(s[n]);for(const a in r)e[a]=r[a]}return e}function p_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function ng(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const m_={clone:Ys,merge:xn};var g_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends Il{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g_,this.fragmentShader=v_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=p_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class ig extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=ki}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pr=new oe,tm=new Rt,nm=new Rt;class ri extends ig{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Hd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Eu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hd*2*Math.atan(Math.tan(Eu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,n){return this.getViewBounds(e,tm,nm),n.subVectors(nm,tm)}setViewOffset(e,n,r,a,c,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Eu*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*a/p,n-=d.offsetY*r/m,a*=d.width/p,r*=d.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Is=-90,Us=1;class __ extends On{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ri(Is,Us,e,n);a.layers=this.layers,this.add(a);const c=new ri(Is,Us,e,n);c.layers=this.layers,this.add(c);const d=new ri(Is,Us,e,n);d.layers=this.layers,this.add(d);const f=new ri(Is,Us,e,n);f.layers=this.layers,this.add(f);const p=new ri(Is,Us,e,n);p.layers=this.layers,this.add(p);const m=new ri(Is,Us,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,d,f,p]=n;for(const m of n)this.remove(m);if(e===ki)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Pl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,f,p,m,v]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,d),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(x,y,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class rg extends Rn{constructor(e,n,r,a,c,d,f,p,m,v){e=e!==void 0?e:[],n=n!==void 0?n:Gs,super(e,n,r,a,c,d,f,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class x_ extends qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new rg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:si}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new jo(5,5,5),c=new Bi({name:"CubemapFromEquirect",uniforms:Ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:bn,blending:vr});c.uniforms.tEquirect.value=n;const d=new gi(a,c),f=n.minFilter;return n.minFilter===jr&&(n.minFilter=si),new __(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,a){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(c)}}const ju=new oe,y_=new oe,S_=new at;class Br{constructor(e=new oe(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=ju.subVectors(r,n).cross(y_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(ju),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||S_.getNormalMatrix(e),a=this.coplanarPoint(ju).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new Qd,ml=new oe;class sg{constructor(e=new Br,n=new Br,r=new Br,a=new Br,c=new Br,d=new Br){this.planes=[e,n,r,a,c,d]}set(e,n,r,a,c,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(c),f[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ki){const r=this.planes,a=e.elements,c=a[0],d=a[1],f=a[2],p=a[3],m=a[4],v=a[5],x=a[6],y=a[7],S=a[8],w=a[9],b=a[10],_=a[11],g=a[12],D=a[13],P=a[14],N=a[15];if(r[0].setComponents(p-c,y-m,_-S,N-g).normalize(),r[1].setComponents(p+c,y+m,_+S,N+g).normalize(),r[2].setComponents(p+d,y+v,_+w,N+D).normalize(),r[3].setComponents(p-d,y-v,_-w,N-D).normalize(),r[4].setComponents(p-f,y-x,_-b,N-P).normalize(),n===ki)r[5].setComponents(p+f,y+x,_+b,N+P).normalize();else if(n===Pl)r[5].setComponents(f,x,b,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(ml.x=a.normal.x>0?e.max.x:e.min.x,ml.y=a.normal.y>0?e.max.y:e.min.y,ml.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function og(){let s=null,e=!1,n=null,r=null;function a(c,d){n(c,d),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function M_(s){const e=new WeakMap;function n(f,p){const m=f.array,v=f.usage,x=m.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,m,v),f.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,p,m){const v=p.array,x=p.updateRanges;if(s.bindBuffer(m,f),x.length===0)s.bufferSubData(m,0,v);else{x.sort((S,w)=>S.start-w.start);let y=0;for(let S=1;S<x.length;S++){const w=x[y],b=x[S];b.start<=w.start+w.count+1?w.count=Math.max(w.count,b.start+b.count-w.start):(++y,x[y]=b)}x.length=y+1;for(let S=0,w=x.length;S<w;S++){const b=x[S];s.bufferSubData(m,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:a,remove:c,update:d}}class Xo extends Kr{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,d=n/2,f=Math.floor(r),p=Math.floor(a),m=f+1,v=p+1,x=e/f,y=n/p,S=[],w=[],b=[],_=[];for(let g=0;g<v;g++){const D=g*y-d;for(let P=0;P<m;P++){const N=P*x-c;w.push(N,-D,0),b.push(0,0,1),_.push(P/f),_.push(1-g/p)}}for(let g=0;g<p;g++)for(let D=0;D<f;D++){const P=D+m*g,N=D+m*(g+1),Z=D+1+m*(g+1),k=D+1+m*g;S.push(P,N,k),S.push(N,Z,k)}this.setIndex(S),this.setAttribute("position",new Xr(w,3)),this.setAttribute("normal",new Xr(b,3)),this.setAttribute("uv",new Xr(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.widthSegments,e.heightSegments)}}var E_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,T_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,L_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,F_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,k_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,X_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Y_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,q_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J_="gl_FragColor = linearToOutputTexel( gl_FragColor );",ex=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ix=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ux=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,px=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ax=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ux=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$x=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ey=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ty=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ay=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,my=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const My=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ey=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,by=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ry=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Py=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ny=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ky=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,By=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$y=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ky=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,eS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:E_,alphahash_pars_fragment:w_,alphamap_fragment:T_,alphamap_pars_fragment:A_,alphatest_fragment:C_,alphatest_pars_fragment:b_,aomap_fragment:R_,aomap_pars_fragment:P_,batching_pars_vertex:N_,batching_vertex:L_,begin_vertex:D_,beginnormal_vertex:I_,bsdfs:U_,iridescence_fragment:F_,bumpmap_pars_fragment:k_,clipping_planes_fragment:O_,clipping_planes_pars_fragment:z_,clipping_planes_pars_vertex:B_,clipping_planes_vertex:H_,color_fragment:V_,color_pars_fragment:G_,color_pars_vertex:W_,color_vertex:j_,common:X_,cube_uv_reflection_fragment:Y_,defaultnormal_vertex:q_,displacementmap_pars_vertex:$_,displacementmap_vertex:K_,emissivemap_fragment:Z_,emissivemap_pars_fragment:Q_,colorspace_fragment:J_,colorspace_pars_fragment:ex,envmap_fragment:tx,envmap_common_pars_fragment:nx,envmap_pars_fragment:ix,envmap_pars_vertex:rx,envmap_physical_pars_fragment:mx,envmap_vertex:sx,fog_vertex:ox,fog_pars_vertex:ax,fog_fragment:lx,fog_pars_fragment:cx,gradientmap_pars_fragment:ux,lightmap_pars_fragment:dx,lights_lambert_fragment:fx,lights_lambert_pars_fragment:hx,lights_pars_begin:px,lights_toon_fragment:gx,lights_toon_pars_fragment:vx,lights_phong_fragment:_x,lights_phong_pars_fragment:xx,lights_physical_fragment:yx,lights_physical_pars_fragment:Sx,lights_fragment_begin:Mx,lights_fragment_maps:Ex,lights_fragment_end:wx,logdepthbuf_fragment:Tx,logdepthbuf_pars_fragment:Ax,logdepthbuf_pars_vertex:Cx,logdepthbuf_vertex:bx,map_fragment:Rx,map_pars_fragment:Px,map_particle_fragment:Nx,map_particle_pars_fragment:Lx,metalnessmap_fragment:Dx,metalnessmap_pars_fragment:Ix,morphinstance_vertex:Ux,morphcolor_vertex:Fx,morphnormal_vertex:kx,morphtarget_pars_vertex:Ox,morphtarget_vertex:zx,normal_fragment_begin:Bx,normal_fragment_maps:Hx,normal_pars_fragment:Vx,normal_pars_vertex:Gx,normal_vertex:Wx,normalmap_pars_fragment:jx,clearcoat_normal_fragment_begin:Xx,clearcoat_normal_fragment_maps:Yx,clearcoat_pars_fragment:qx,iridescence_pars_fragment:$x,opaque_fragment:Kx,packing:Zx,premultiplied_alpha_fragment:Qx,project_vertex:Jx,dithering_fragment:ey,dithering_pars_fragment:ty,roughnessmap_fragment:ny,roughnessmap_pars_fragment:iy,shadowmap_pars_fragment:ry,shadowmap_pars_vertex:sy,shadowmap_vertex:oy,shadowmask_pars_fragment:ay,skinbase_vertex:ly,skinning_pars_vertex:cy,skinning_vertex:uy,skinnormal_vertex:dy,specularmap_fragment:fy,specularmap_pars_fragment:hy,tonemapping_fragment:py,tonemapping_pars_fragment:my,transmission_fragment:gy,transmission_pars_fragment:vy,uv_pars_fragment:_y,uv_pars_vertex:xy,uv_vertex:yy,worldpos_vertex:Sy,background_vert:My,background_frag:Ey,backgroundCube_vert:wy,backgroundCube_frag:Ty,cube_vert:Ay,cube_frag:Cy,depth_vert:by,depth_frag:Ry,distanceRGBA_vert:Py,distanceRGBA_frag:Ny,equirect_vert:Ly,equirect_frag:Dy,linedashed_vert:Iy,linedashed_frag:Uy,meshbasic_vert:Fy,meshbasic_frag:ky,meshlambert_vert:Oy,meshlambert_frag:zy,meshmatcap_vert:By,meshmatcap_frag:Hy,meshnormal_vert:Vy,meshnormal_frag:Gy,meshphong_vert:Wy,meshphong_frag:jy,meshphysical_vert:Xy,meshphysical_frag:Yy,meshtoon_vert:qy,meshtoon_frag:$y,points_vert:Ky,points_frag:Zy,shadow_vert:Qy,shadow_frag:Jy,sprite_vert:eS,sprite_frag:tS},Pe={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},pi={basic:{uniforms:xn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:xn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new bt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:xn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:xn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:xn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new bt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:xn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:xn([Pe.points,Pe.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:xn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:xn([Pe.common,Pe.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:xn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:xn([Pe.sprite,Pe.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:xn([Pe.common,Pe.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:xn([Pe.lights,Pe.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};pi.physical={uniforms:xn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const gl={r:0,b:0,g:0},Or=new zi,nS=new Xt;function iS(s,e,n,r,a,c,d){const f=new bt(0);let p=c===!0?0:1,m,v,x=null,y=0,S=null;function w(D){let P=D.isScene===!0?D.background:null;return P&&P.isTexture&&(P=(D.backgroundBlurriness>0?n:e).get(P)),P}function b(D){let P=!1;const N=w(D);N===null?g(f,p):N&&N.isColor&&(g(N,1),P=!0);const Z=s.xr.getEnvironmentBlendMode();Z==="additive"?r.buffers.color.setClear(0,0,0,1,d):Z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(D,P){const N=w(P);N&&(N.isCubeTexture||N.mapping===Ll)?(v===void 0&&(v=new gi(new jo(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:Ys(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(Z,k,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),Or.copy(P.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),v.material.uniforms.envMap.value=N,v.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(nS.makeRotationFromEuler(Or)),v.material.toneMapped=wt.getTransfer(N.colorSpace)!==Ut,(x!==N||y!==N.version||S!==s.toneMapping)&&(v.material.needsUpdate=!0,x=N,y=N.version,S=s.toneMapping),v.layers.enableAll(),D.unshift(v,v.geometry,v.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new gi(new Xo(2,2),new Bi({name:"BackgroundMaterial",uniforms:Ys(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=wt.getTransfer(N.colorSpace)!==Ut,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(x!==N||y!==N.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,x=N,y=N.version,S=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function g(D,P){D.getRGB(gl,ng(s)),r.buffers.color.setClear(gl.r,gl.g,gl.b,P,d)}return{getClearColor:function(){return f},setClearColor:function(D,P=1){f.set(D),p=P,g(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,g(f,p)},render:b,addToRenderList:_}}function rS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=y(null);let c=a,d=!1;function f(E,R,V,j,$){let ae=!1;const J=x(j,V,R);c!==J&&(c=J,m(c.object)),ae=S(E,j,V,$),ae&&w(E,j,V,$),$!==null&&e.update($,s.ELEMENT_ARRAY_BUFFER),(ae||d)&&(d=!1,N(E,R,V,j),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function p(){return s.createVertexArray()}function m(E){return s.bindVertexArray(E)}function v(E){return s.deleteVertexArray(E)}function x(E,R,V){const j=V.wireframe===!0;let $=r[E.id];$===void 0&&($={},r[E.id]=$);let ae=$[R.id];ae===void 0&&(ae={},$[R.id]=ae);let J=ae[j];return J===void 0&&(J=y(p()),ae[j]=J),J}function y(E){const R=[],V=[],j=[];for(let $=0;$<n;$++)R[$]=0,V[$]=0,j[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:V,attributeDivisors:j,object:E,attributes:{},index:null}}function S(E,R,V,j){const $=c.attributes,ae=R.attributes;let J=0;const le=V.getAttributes();for(const O in le)if(le[O].location>=0){const se=$[O];let F=ae[O];if(F===void 0&&(O==="instanceMatrix"&&E.instanceMatrix&&(F=E.instanceMatrix),O==="instanceColor"&&E.instanceColor&&(F=E.instanceColor)),se===void 0||se.attribute!==F||F&&se.data!==F.data)return!0;J++}return c.attributesNum!==J||c.index!==j}function w(E,R,V,j){const $={},ae=R.attributes;let J=0;const le=V.getAttributes();for(const O in le)if(le[O].location>=0){let se=ae[O];se===void 0&&(O==="instanceMatrix"&&E.instanceMatrix&&(se=E.instanceMatrix),O==="instanceColor"&&E.instanceColor&&(se=E.instanceColor));const F={};F.attribute=se,se&&se.data&&(F.data=se.data),$[O]=F,J++}c.attributes=$,c.attributesNum=J,c.index=j}function b(){const E=c.newAttributes;for(let R=0,V=E.length;R<V;R++)E[R]=0}function _(E){g(E,0)}function g(E,R){const V=c.newAttributes,j=c.enabledAttributes,$=c.attributeDivisors;V[E]=1,j[E]===0&&(s.enableVertexAttribArray(E),j[E]=1),$[E]!==R&&(s.vertexAttribDivisor(E,R),$[E]=R)}function D(){const E=c.newAttributes,R=c.enabledAttributes;for(let V=0,j=R.length;V<j;V++)R[V]!==E[V]&&(s.disableVertexAttribArray(V),R[V]=0)}function P(E,R,V,j,$,ae,J){J===!0?s.vertexAttribIPointer(E,R,V,$,ae):s.vertexAttribPointer(E,R,V,j,$,ae)}function N(E,R,V,j){b();const $=j.attributes,ae=V.getAttributes(),J=R.defaultAttributeValues;for(const le in ae){const O=ae[le];if(O.location>=0){let de=$[le];if(de===void 0&&(le==="instanceMatrix"&&E.instanceMatrix&&(de=E.instanceMatrix),le==="instanceColor"&&E.instanceColor&&(de=E.instanceColor)),de!==void 0){const se=de.normalized,F=de.itemSize,ne=e.get(de);if(ne===void 0)continue;const Re=ne.buffer,G=ne.type,ce=ne.bytesPerElement,ge=G===s.INT||G===s.UNSIGNED_INT||de.gpuType===jd;if(de.isInterleavedBufferAttribute){const xe=de.data,Ne=xe.stride,Ae=de.offset;if(xe.isInstancedInterleavedBuffer){for(let qe=0;qe<O.locationSize;qe++)g(O.location+qe,xe.meshPerAttribute);E.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let qe=0;qe<O.locationSize;qe++)_(O.location+qe);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let qe=0;qe<O.locationSize;qe++)P(O.location+qe,F/O.locationSize,G,se,Ne*ce,(Ae+F/O.locationSize*qe)*ce,ge)}else{if(de.isInstancedBufferAttribute){for(let xe=0;xe<O.locationSize;xe++)g(O.location+xe,de.meshPerAttribute);E.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let xe=0;xe<O.locationSize;xe++)_(O.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let xe=0;xe<O.locationSize;xe++)P(O.location+xe,F/O.locationSize,G,se,F*ce,F/O.locationSize*xe*ce,ge)}}else if(J!==void 0){const se=J[le];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(O.location,se);break;case 3:s.vertexAttrib3fv(O.location,se);break;case 4:s.vertexAttrib4fv(O.location,se);break;default:s.vertexAttrib1fv(O.location,se)}}}}D()}function Z(){q();for(const E in r){const R=r[E];for(const V in R){const j=R[V];for(const $ in j)v(j[$].object),delete j[$];delete R[V]}delete r[E]}}function k(E){if(r[E.id]===void 0)return;const R=r[E.id];for(const V in R){const j=R[V];for(const $ in j)v(j[$].object),delete j[$];delete R[V]}delete r[E.id]}function I(E){for(const R in r){const V=r[R];if(V[E.id]===void 0)continue;const j=V[E.id];for(const $ in j)v(j[$].object),delete j[$];delete V[E.id]}}function q(){me(),d=!0,c!==a&&(c=a,m(c.object))}function me(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:q,resetDefaultState:me,dispose:Z,releaseStatesOfGeometry:k,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:_,disableUnusedAttributes:D}}function sS(s,e,n){let r;function a(m){r=m}function c(m,v){s.drawArrays(r,m,v),n.update(v,r,1)}function d(m,v,x){x!==0&&(s.drawArraysInstanced(r,m,v,x),n.update(v,r,x))}function f(m,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,x);let S=0;for(let w=0;w<x;w++)S+=v[w];n.update(S,r,1)}function p(m,v,x,y){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<m.length;w++)d(m[w],v[w],y[w]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,v,0,y,0,x);let w=0;for(let b=0;b<x;b++)w+=v[b];for(let b=0;b<y.length;b++)n.update(w,r,y[b])}}this.setMode=a,this.render=c,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function oS(s,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function d(I){return!(I!==ai&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const q=I===Ho&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Oi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Fi&&!q)}function p(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const x=n.logarithmicDepthBuffer===!0,y=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(y===!0){const I=e.get("EXT_clip_control");I.clipControlEXT(I.LOWER_LEFT_EXT,I.ZERO_TO_ONE_EXT)}const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),Z=w>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:w,maxTextureSize:b,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:N,vertexTextures:Z,maxSamples:k}}function aS(s){const e=this;let n=null,r=0,a=!1,c=!1;const d=new Br,f=new at,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const S=x.length!==0||y||r!==0||a;return a=y,r=x.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,y){n=v(x,y,0)},this.setState=function(x,y,S){const w=x.clippingPlanes,b=x.clipIntersection,_=x.clipShadows,g=s.get(x);if(!a||w===null||w.length===0||c&&!_)c?v(null):m();else{const D=c?0:r,P=D*4;let N=g.clippingState||null;p.value=N,N=v(w,y,P,S);for(let Z=0;Z!==P;++Z)N[Z]=n[Z];g.clippingState=N,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,y,S,w){const b=x!==null?x.length:0;let _=null;if(b!==0){if(_=p.value,w!==!0||_===null){const g=S+b*4,D=y.matrixWorldInverse;f.getNormalMatrix(D),(_===null||_.length<g)&&(_=new Float32Array(g));for(let P=0,N=S;P!==b;++P,N+=4)d.copy(x[P]).applyMatrix4(D,f),d.normal.toArray(_,N),_[N+3]=d.constant}p.value=_,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,_}}function lS(s){let e=new WeakMap;function n(d,f){return f===dd?d.mapping=Gs:f===fd&&(d.mapping=Ws),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===dd||f===fd)if(e.has(d)){const p=e.get(d).texture;return n(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new x_(p.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",a),n(m.texture,d.mapping)}else return null}}return d}function a(d){const f=d.target;f.removeEventListener("dispose",a);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class ag extends ig{constructor(e=-1,n=1,r=1,a=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,d=r+e,f=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,f-=v*this.view.offsetY,p=f-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Os=4,im=[.125,.215,.35,.446,.526,.582],Gr=20,Xu=new ag,rm=new bt;let Yu=null,qu=0,$u=0,Ku=!1;const Hr=(1+Math.sqrt(5))/2,Fs=1/Hr,sm=[new oe(-Hr,Fs,0),new oe(Hr,Fs,0),new oe(-Fs,0,Hr),new oe(Fs,0,Hr),new oe(0,Hr,-Fs),new oe(0,Hr,Fs),new oe(-1,1,-1),new oe(1,1,-1),new oe(-1,1,1),new oe(1,1,1)];class om{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Yu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yu,qu,$u),this._renderer.xr.enabled=Ku,e.scissorTest=!1,vl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:si,minFilter:si,generateMipmaps:!1,type:Ho,format:ai,colorSpace:yr,depthBuffer:!1},a=am(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=am(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cS(c)),this._blurMaterial=uS(c,e,n)}return a}_compileMaterial(e){const n=new gi(this._lodPlanes[0],e);this._renderer.compile(n,Xu)}_sceneToCubeUV(e,n,r,a){const f=new ri(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(rm),v.toneMapping=_r,v.autoClear=!1;const S=new Jm({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),w=new gi(new jo,S);let b=!1;const _=e.background;_?_.isColor&&(S.color.copy(_),e.background=null,b=!0):(S.color.copy(rm),b=!0);for(let g=0;g<6;g++){const D=g%3;D===0?(f.up.set(0,p[g],0),f.lookAt(m[g],0,0)):D===1?(f.up.set(0,0,p[g]),f.lookAt(0,m[g],0)):(f.up.set(0,p[g],0),f.lookAt(0,0,m[g]));const P=this._cubeSize;vl(a,D*P,g>2?P:0,P,P),v.setRenderTarget(a),b&&v.render(w,f),v.render(e,f)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=y,v.autoClear=x,e.background=_}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Gs||e.mapping===Ws;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lm());const c=a?this._cubemapMaterial:this._equirectMaterial,d=new gi(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const p=this._cubeSize;vl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(d,Xu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=sm[(a-c-1)%sm.length];this._blur(e,c-1,c,d,f)}n.autoClear=r}_blur(e,n,r,a,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",c),this._halfBlur(d,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,d,f){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,x=new gi(this._lodPlanes[a],m),y=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Gr-1),b=c/w,_=isFinite(c)?1+Math.floor(v*b):Gr;_>Gr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Gr}`);const g=[];let D=0;for(let I=0;I<Gr;++I){const q=I/b,me=Math.exp(-q*q/2);g.push(me),I===0?D+=me:I<_&&(D+=2*me)}for(let I=0;I<g.length;I++)g[I]=g[I]/D;y.envMap.value=e.texture,y.samples.value=_,y.weights.value=g,y.latitudinal.value=d==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:P}=this;y.dTheta.value=w,y.mipInt.value=P-r;const N=this._sizeLods[a],Z=3*N*(a>P-Os?a-P+Os:0),k=4*(this._cubeSize-N);vl(n,Z,k,3*N,2*N),p.setRenderTarget(n),p.render(x,Xu)}}function cS(s){const e=[],n=[],r=[];let a=s;const c=s-Os+1+im.length;for(let d=0;d<c;d++){const f=Math.pow(2,a);n.push(f);let p=1/f;d>s-Os?p=im[d-s+Os-1]:d===0&&(p=0),r.push(p);const m=1/(f-2),v=-m,x=1+m,y=[v,v,x,v,x,x,v,v,x,x,v,x],S=6,w=6,b=3,_=2,g=1,D=new Float32Array(b*w*S),P=new Float32Array(_*w*S),N=new Float32Array(g*w*S);for(let k=0;k<S;k++){const I=k%3*2/3-1,q=k>2?0:-1,me=[I,q,0,I+2/3,q,0,I+2/3,q+1,0,I,q,0,I+2/3,q+1,0,I,q+1,0];D.set(me,b*w*k),P.set(y,_*w*k);const E=[k,k,k,k,k,k];N.set(E,g*w*k)}const Z=new Kr;Z.setAttribute("position",new vi(D,b)),Z.setAttribute("uv",new vi(P,_)),Z.setAttribute("faceIndex",new vi(N,g)),e.push(Z),a>Os&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function am(s,e,n){const r=new qr(s,e,n);return r.texture.mapping=Ll,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function uS(s,e,n){const r=new Float32Array(Gr),a=new oe(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function lm(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function cm(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Jd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dS(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,m=p===dd||p===fd,v=p===Gs||p===Ws;if(m||v){let x=e.get(f);const y=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==y)return n===null&&(n=new om(s)),x=m?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const S=f.image;return m&&S&&S.height>0||v&&S&&a(S)?(n===null&&(n=new om(s)),x=m?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",c),x.texture):null}}}return f}function a(f){let p=0;const m=6;for(let v=0;v<m;v++)f[v]!==void 0&&p++;return p===m}function c(f){const p=f.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function fS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Tl("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function hS(s,e,n,r){const a={},c=new WeakMap;function d(x){const y=x.target;y.index!==null&&e.remove(y.index);for(const w in y.attributes)e.remove(y.attributes[w]);for(const w in y.morphAttributes){const b=y.morphAttributes[w];for(let _=0,g=b.length;_<g;_++)e.remove(b[_])}y.removeEventListener("dispose",d),delete a[y.id];const S=c.get(y);S&&(e.remove(S),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function f(x,y){return a[y.id]===!0||(y.addEventListener("dispose",d),a[y.id]=!0,n.memory.geometries++),y}function p(x){const y=x.attributes;for(const w in y)e.update(y[w],s.ARRAY_BUFFER);const S=x.morphAttributes;for(const w in S){const b=S[w];for(let _=0,g=b.length;_<g;_++)e.update(b[_],s.ARRAY_BUFFER)}}function m(x){const y=[],S=x.index,w=x.attributes.position;let b=0;if(S!==null){const D=S.array;b=S.version;for(let P=0,N=D.length;P<N;P+=3){const Z=D[P+0],k=D[P+1],I=D[P+2];y.push(Z,k,k,I,I,Z)}}else if(w!==void 0){const D=w.array;b=w.version;for(let P=0,N=D.length/3-1;P<N;P+=3){const Z=P+0,k=P+1,I=P+2;y.push(Z,k,k,I,I,Z)}}else return;const _=new(qm(y)?tg:eg)(y,1);_.version=b;const g=c.get(x);g&&e.remove(g),c.set(x,_)}function v(x){const y=c.get(x);if(y){const S=x.index;S!==null&&y.version<S.version&&m(x)}else m(x);return c.get(x)}return{get:f,update:p,getWireframeAttribute:v}}function pS(s,e,n){let r;function a(y){r=y}let c,d;function f(y){c=y.type,d=y.bytesPerElement}function p(y,S){s.drawElements(r,S,c,y*d),n.update(S,r,1)}function m(y,S,w){w!==0&&(s.drawElementsInstanced(r,S,c,y*d,w),n.update(S,r,w))}function v(y,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,y,0,w);let _=0;for(let g=0;g<w;g++)_+=S[g];n.update(_,r,1)}function x(y,S,w,b){if(w===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<y.length;g++)m(y[g]/d,S[g],b[g]);else{_.multiDrawElementsInstancedWEBGL(r,S,0,c,y,0,b,0,w);let g=0;for(let D=0;D<w;D++)g+=S[D];for(let D=0;D<b.length;D++)n.update(g,r,b[D])}}this.setMode=a,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function mS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,f){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function gS(s,e,n){const r=new WeakMap,a=new Gt;function c(d,f,p){const m=d.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=v!==void 0?v.length:0;let y=r.get(f);if(y===void 0||y.count!==x){let E=function(){q.dispose(),r.delete(f),f.removeEventListener("dispose",E)};var S=E;y!==void 0&&y.texture.dispose();const w=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,_=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let N=0;w===!0&&(N=1),b===!0&&(N=2),_===!0&&(N=3);let Z=f.attributes.position.count*N,k=1;Z>e.maxTextureSize&&(k=Math.ceil(Z/e.maxTextureSize),Z=e.maxTextureSize);const I=new Float32Array(Z*k*4*x),q=new Km(I,Z,k,x);q.type=Fi,q.needsUpdate=!0;const me=N*4;for(let R=0;R<x;R++){const V=g[R],j=D[R],$=P[R],ae=Z*k*4*R;for(let J=0;J<V.count;J++){const le=J*me;w===!0&&(a.fromBufferAttribute(V,J),I[ae+le+0]=a.x,I[ae+le+1]=a.y,I[ae+le+2]=a.z,I[ae+le+3]=0),b===!0&&(a.fromBufferAttribute(j,J),I[ae+le+4]=a.x,I[ae+le+5]=a.y,I[ae+le+6]=a.z,I[ae+le+7]=0),_===!0&&(a.fromBufferAttribute($,J),I[ae+le+8]=a.x,I[ae+le+9]=a.y,I[ae+le+10]=a.z,I[ae+le+11]=$.itemSize===4?a.w:1)}}y={count:x,texture:q,size:new Rt(Z,k)},r.set(f,y),f.addEventListener("dispose",E)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let w=0;for(let _=0;_<m.length;_++)w+=m[_];const b=f.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",b),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function vS(s,e,n,r){let a=new WeakMap;function c(p){const m=r.render.frame,v=p.geometry,x=e.get(p,v);if(a.get(x)!==m&&(e.update(x),a.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;a.get(y)!==m&&(y.update(),a.set(y,m))}return x}function d(){a=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:d}}class lg extends Rn{constructor(e,n,r,a,c,d,f,p,m,v=Bs){if(v!==Bs&&v!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Bs&&(r=Yr),r===void 0&&v===Xs&&(r=js),super(null,a,c,d,f,p,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:Yn,this.minFilter=p!==void 0?p:Yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const cg=new Rn,um=new lg(1,1),ug=new Km,dg=new n_,fg=new rg,dm=[],fm=[],hm=new Float32Array(16),pm=new Float32Array(9),mm=new Float32Array(4);function $s(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let c=dm[a];if(c===void 0&&(c=new Float32Array(a),dm[a]=c),e!==0){r.toArray(c,0);for(let d=1,f=0;d!==e;++d)f+=n,s[d].toArray(c,f)}return c}function Kt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Zt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Ul(s,e){let n=fm[e];n===void 0&&(n=new Int32Array(e),fm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function _S(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function xS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2fv(this.addr,e),Zt(n,e)}}function yS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;s.uniform3fv(this.addr,e),Zt(n,e)}}function SS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4fv(this.addr,e),Zt(n,e)}}function MS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;mm.set(r),s.uniformMatrix2fv(this.addr,!1,mm),Zt(n,r)}}function ES(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;pm.set(r),s.uniformMatrix3fv(this.addr,!1,pm),Zt(n,r)}}function wS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;hm.set(r),s.uniformMatrix4fv(this.addr,!1,hm),Zt(n,r)}}function TS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function AS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2iv(this.addr,e),Zt(n,e)}}function CS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;s.uniform3iv(this.addr,e),Zt(n,e)}}function bS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4iv(this.addr,e),Zt(n,e)}}function RS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function PS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2uiv(this.addr,e),Zt(n,e)}}function NS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;s.uniform3uiv(this.addr,e),Zt(n,e)}}function LS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4uiv(this.addr,e),Zt(n,e)}}function DS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let c;this.type===s.SAMPLER_2D_SHADOW?(um.compareFunction=Ym,c=um):c=cg,n.setTexture2D(e||c,a)}function IS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||dg,a)}function US(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||fg,a)}function FS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||ug,a)}function kS(s){switch(s){case 5126:return _S;case 35664:return xS;case 35665:return yS;case 35666:return SS;case 35674:return MS;case 35675:return ES;case 35676:return wS;case 5124:case 35670:return TS;case 35667:case 35671:return AS;case 35668:case 35672:return CS;case 35669:case 35673:return bS;case 5125:return RS;case 36294:return PS;case 36295:return NS;case 36296:return LS;case 35678:case 36198:case 36298:case 36306:case 35682:return DS;case 35679:case 36299:case 36307:return IS;case 35680:case 36300:case 36308:case 36293:return US;case 36289:case 36303:case 36311:case 36292:return FS}}function OS(s,e){s.uniform1fv(this.addr,e)}function zS(s,e){const n=$s(e,this.size,2);s.uniform2fv(this.addr,n)}function BS(s,e){const n=$s(e,this.size,3);s.uniform3fv(this.addr,n)}function HS(s,e){const n=$s(e,this.size,4);s.uniform4fv(this.addr,n)}function VS(s,e){const n=$s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function GS(s,e){const n=$s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function WS(s,e){const n=$s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function jS(s,e){s.uniform1iv(this.addr,e)}function XS(s,e){s.uniform2iv(this.addr,e)}function YS(s,e){s.uniform3iv(this.addr,e)}function qS(s,e){s.uniform4iv(this.addr,e)}function $S(s,e){s.uniform1uiv(this.addr,e)}function KS(s,e){s.uniform2uiv(this.addr,e)}function ZS(s,e){s.uniform3uiv(this.addr,e)}function QS(s,e){s.uniform4uiv(this.addr,e)}function JS(s,e,n){const r=this.cache,a=e.length,c=Ul(n,a);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||cg,c[d])}function eM(s,e,n){const r=this.cache,a=e.length,c=Ul(n,a);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||dg,c[d])}function tM(s,e,n){const r=this.cache,a=e.length,c=Ul(n,a);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||fg,c[d])}function nM(s,e,n){const r=this.cache,a=e.length,c=Ul(n,a);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||ug,c[d])}function iM(s){switch(s){case 5126:return OS;case 35664:return zS;case 35665:return BS;case 35666:return HS;case 35674:return VS;case 35675:return GS;case 35676:return WS;case 5124:case 35670:return jS;case 35667:case 35671:return XS;case 35668:case 35672:return YS;case 35669:case 35673:return qS;case 5125:return $S;case 36294:return KS;case 36295:return ZS;case 36296:return QS;case 35678:case 36198:case 36298:case 36306:case 35682:return JS;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return nM}}class rM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=kS(n.type)}}class sM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=iM(n.type)}}class oM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,d=a.length;c!==d;++c){const f=a[c];f.setValue(e,n[f.id],r)}}}const Zu=/(\w+)(\])?(\[|\.)?/g;function gm(s,e){s.seq.push(e),s.map[e.id]=e}function aM(s,e,n){const r=s.name,a=r.length;for(Zu.lastIndex=0;;){const c=Zu.exec(r),d=Zu.lastIndex;let f=c[1];const p=c[2]==="]",m=c[3];if(p&&(f=f|0),m===void 0||m==="["&&d+2===a){gm(n,m===void 0?new rM(f,s,e):new sM(f,s,e));break}else{let x=n.map[f];x===void 0&&(x=new oM(f),gm(n,x)),n=x}}}class Al{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),d=e.getUniformLocation(n,c.name);aM(c,d,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,d=n.length;c!==d;++c){const f=n[c],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function vm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const lM=37297;let cM=0;function uM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let d=a;d<c;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return r.join(`
`)}function dM(s){const e=wt.getPrimaries(wt.workingColorSpace),n=wt.getPrimaries(s);let r;switch(e===n?r="":e===Rl&&n===bl?r="LinearDisplayP3ToLinearSRGB":e===bl&&n===Rl&&(r="LinearSRGBToLinearDisplayP3"),s){case yr:case Dl:return[r,"LinearTransferOETF"];case hi:case Zd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function _m(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+uM(s.getShaderSource(e),d)}else return a}function fM(s,e){const n=dM(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function hM(s,e){let n;switch(e){case Cv:n="Linear";break;case bv:n="Reinhard";break;case Rv:n="Cineon";break;case Pv:n="ACESFilmic";break;case Lv:n="AgX";break;case Dv:n="Neutral";break;case Nv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const _l=new oe;function pM(){wt.getLuminanceCoefficients(_l);const s=_l.x.toFixed(4),e=_l.y.toFixed(4),n=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function gM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function vM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=s.getActiveAttrib(e,a),d=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:f}}return n}function Oo(s){return s!==""}function xm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ym(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _M=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vd(s){return s.replace(_M,yM)}const xM=new Map;function yM(s,e){let n=ot[e];if(n===void 0){const r=xM.get(e);if(r!==void 0)n=ot[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Vd(n)}const SM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sm(s){return s.replace(SM,MM)}function MM(s,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function Mm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function EM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Im?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ov?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function wM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case Ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function AM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Um:e="ENVMAP_BLENDING_MULTIPLY";break;case Tv:e="ENVMAP_BLENDING_MIX";break;case Av:e="ENVMAP_BLENDING_ADD";break}return e}function CM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function bM(s,e,n,r){const a=s.getContext(),c=n.defines;let d=n.vertexShader,f=n.fragmentShader;const p=EM(n),m=wM(n),v=TM(n),x=AM(n),y=CM(n),S=mM(n),w=gM(c),b=a.createProgram();let _,g,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Oo).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Oo).join(`
`),g.length>0&&(g+=`
`)):(_=[Mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),g=[Mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_r?"#define TONE_MAPPING":"",n.toneMapping!==_r?ot.tonemapping_pars_fragment:"",n.toneMapping!==_r?hM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,fM("linearToOutputTexel",n.outputColorSpace),pM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oo).join(`
`)),d=Vd(d),d=xm(d,n),d=ym(d,n),f=Vd(f),f=xm(f,n),f=ym(f,n),d=Sm(d),f=Sm(f),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",n.glslVersion===zp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===zp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const P=D+_+d,N=D+g+f,Z=vm(a,a.VERTEX_SHADER,P),k=vm(a,a.FRAGMENT_SHADER,N);a.attachShader(b,Z),a.attachShader(b,k),n.index0AttributeName!==void 0?a.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function I(R){if(s.debug.checkShaderErrors){const V=a.getProgramInfoLog(b).trim(),j=a.getShaderInfoLog(Z).trim(),$=a.getShaderInfoLog(k).trim();let ae=!0,J=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(ae=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,b,Z,k);else{const le=_m(a,Z,"vertex"),O=_m(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+le+`
`+O)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(j===""||$==="")&&(J=!1);J&&(R.diagnostics={runnable:ae,programLog:V,vertexShader:{log:j,prefix:_},fragmentShader:{log:$,prefix:g}})}a.deleteShader(Z),a.deleteShader(k),q=new Al(a,b),me=vM(a,b)}let q;this.getUniforms=function(){return q===void 0&&I(this),q};let me;this.getAttributes=function(){return me===void 0&&I(this),me};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(b,lM)),E},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cM++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=Z,this.fragmentShader=k,this}let RM=0;class PM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new NM(e),n.set(e,r)),r}}class NM{constructor(e){this.id=RM++,this.code=e,this.usedTimes=0}}function LM(s,e,n,r,a,c,d){const f=new Zm,p=new PM,m=new Set,v=[],x=a.logarithmicDepthBuffer,y=a.reverseDepthBuffer,S=a.vertexTextures;let w=a.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return m.add(E),E===0?"uv":`uv${E}`}function g(E,R,V,j,$){const ae=j.fog,J=$.geometry,le=E.isMeshStandardMaterial?j.environment:null,O=(E.isMeshStandardMaterial?n:e).get(E.envMap||le),de=O&&O.mapping===Ll?O.image.height:null,se=b[E.type];E.precision!==null&&(w=a.getMaxPrecision(E.precision),w!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",w,"instead."));const F=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ne=F!==void 0?F.length:0;let Re=0;J.morphAttributes.position!==void 0&&(Re=1),J.morphAttributes.normal!==void 0&&(Re=2),J.morphAttributes.color!==void 0&&(Re=3);let G,ce,ge,xe;if(se){const Qt=pi[se];G=Qt.vertexShader,ce=Qt.fragmentShader}else G=E.vertexShader,ce=E.fragmentShader,p.update(E),ge=p.getVertexShaderID(E),xe=p.getFragmentShaderID(E);const Ne=s.getRenderTarget(),Ae=$.isInstancedMesh===!0,qe=$.isBatchedMesh===!0,ht=!!E.map,ut=!!E.matcap,B=!!O,on=!!E.aoMap,ct=!!E.lightMap,pt=!!E.bumpMap,Qe=!!E.normalMap,At=!!E.displacementMap,et=!!E.emissiveMap,L=!!E.metalnessMap,T=!!E.roughnessMap,ee=E.anisotropy>0,he=E.clearcoat>0,ye=E.dispersion>0,fe=E.iridescence>0,Ye=E.sheen>0,Ce=E.transmission>0,Fe=ee&&!!E.anisotropyMap,mt=he&&!!E.clearcoatMap,Me=he&&!!E.clearcoatNormalMap,ke=he&&!!E.clearcoatRoughnessMap,it=fe&&!!E.iridescenceMap,tt=fe&&!!E.iridescenceThicknessMap,ze=Ye&&!!E.sheenColorMap,dt=Ye&&!!E.sheenRoughnessMap,st=!!E.specularMap,Et=!!E.specularColorMap,W=!!E.specularIntensityMap,Le=Ce&&!!E.transmissionMap,ue=Ce&&!!E.thicknessMap,pe=!!E.gradientMap,be=!!E.alphaMap,Ie=E.alphaTest>0,ft=!!E.alphaHash,Ot=!!E.extensions;let an=_r;E.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(an=s.toneMapping);const gt={shaderID:se,shaderType:E.type,shaderName:E.name,vertexShader:G,fragmentShader:ce,defines:E.defines,customVertexShaderID:ge,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:w,batching:qe,batchingColor:qe&&$._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&$.instanceColor!==null,instancingMorph:Ae&&$.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Ne===null?s.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:yr,alphaToCoverage:!!E.alphaToCoverage,map:ht,matcap:ut,envMap:B,envMapMode:B&&O.mapping,envMapCubeUVHeight:de,aoMap:on,lightMap:ct,bumpMap:pt,normalMap:Qe,displacementMap:S&&At,emissiveMap:et,normalMapObjectSpace:Qe&&E.normalMapType===Ov,normalMapTangentSpace:Qe&&E.normalMapType===kv,metalnessMap:L,roughnessMap:T,anisotropy:ee,anisotropyMap:Fe,clearcoat:he,clearcoatMap:mt,clearcoatNormalMap:Me,clearcoatRoughnessMap:ke,dispersion:ye,iridescence:fe,iridescenceMap:it,iridescenceThicknessMap:tt,sheen:Ye,sheenColorMap:ze,sheenRoughnessMap:dt,specularMap:st,specularColorMap:Et,specularIntensityMap:W,transmission:Ce,transmissionMap:Le,thicknessMap:ue,gradientMap:pe,opaque:E.transparent===!1&&E.blending===zs&&E.alphaToCoverage===!1,alphaMap:be,alphaTest:Ie,alphaHash:ft,combine:E.combine,mapUv:ht&&_(E.map.channel),aoMapUv:on&&_(E.aoMap.channel),lightMapUv:ct&&_(E.lightMap.channel),bumpMapUv:pt&&_(E.bumpMap.channel),normalMapUv:Qe&&_(E.normalMap.channel),displacementMapUv:At&&_(E.displacementMap.channel),emissiveMapUv:et&&_(E.emissiveMap.channel),metalnessMapUv:L&&_(E.metalnessMap.channel),roughnessMapUv:T&&_(E.roughnessMap.channel),anisotropyMapUv:Fe&&_(E.anisotropyMap.channel),clearcoatMapUv:mt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Me&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:dt&&_(E.sheenRoughnessMap.channel),specularMapUv:st&&_(E.specularMap.channel),specularColorMapUv:Et&&_(E.specularColorMap.channel),specularIntensityMapUv:W&&_(E.specularIntensityMap.channel),transmissionMapUv:Le&&_(E.transmissionMap.channel),thicknessMapUv:ue&&_(E.thicknessMap.channel),alphaMapUv:be&&_(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Qe||ee),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!J.attributes.uv&&(ht||be),fog:!!ae,useFog:E.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:y,skinning:$.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Re,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:an,decodeVideoTexture:ht&&E.map.isVideoTexture===!0&&wt.getTransfer(E.map.colorSpace)===Ut,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ui,flipSided:E.side===bn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ot&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&E.extensions.multiDraw===!0||qe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return gt.vertexUv1s=m.has(1),gt.vertexUv2s=m.has(2),gt.vertexUv3s=m.has(3),m.clear(),gt}function D(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const V in E.defines)R.push(V),R.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(P(R,E),N(R,E),R.push(s.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function P(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function N(E,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),E.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.alphaToCoverage&&f.enable(20),E.push(f.mask)}function Z(E){const R=b[E.type];let V;if(R){const j=pi[R];V=m_.clone(j.uniforms)}else V=E.uniforms;return V}function k(E,R){let V;for(let j=0,$=v.length;j<$;j++){const ae=v[j];if(ae.cacheKey===R){V=ae,++V.usedTimes;break}}return V===void 0&&(V=new bM(s,R,E,c),v.push(V)),V}function I(E){if(--E.usedTimes===0){const R=v.indexOf(E);v[R]=v[v.length-1],v.pop(),E.destroy()}}function q(E){p.remove(E)}function me(){p.dispose()}return{getParameters:g,getProgramCacheKey:D,getUniforms:Z,acquireProgram:k,releaseProgram:I,releaseShaderCache:q,programs:v,dispose:me}}function DM(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function a(d,f,p){s.get(d)[f]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:c}}function IM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Em(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function wm(){const s=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function d(x,y,S,w,b,_){let g=s[e];return g===void 0?(g={id:x.id,object:x,geometry:y,material:S,groupOrder:w,renderOrder:x.renderOrder,z:b,group:_},s[e]=g):(g.id=x.id,g.object=x,g.geometry=y,g.material=S,g.groupOrder=w,g.renderOrder=x.renderOrder,g.z=b,g.group=_),e++,g}function f(x,y,S,w,b,_){const g=d(x,y,S,w,b,_);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function p(x,y,S,w,b,_){const g=d(x,y,S,w,b,_);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(x,y){n.length>1&&n.sort(x||IM),r.length>1&&r.sort(y||Em),a.length>1&&a.sort(y||Em)}function v(){for(let x=e,y=s.length;x<y;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:f,unshift:p,finish:v,sort:m}}function UM(){let s=new WeakMap;function e(r,a){const c=s.get(r);let d;return c===void 0?(d=new wm,s.set(r,[d])):a>=c.length?(d=new wm,c.push(d)):d=c[a],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function FM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new oe,color:new bt};break;case"SpotLight":n={position:new oe,direction:new oe,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new oe,color:new bt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new oe,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":n={color:new bt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return s[e.id]=n,n}}}function kM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let OM=0;function zM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function BM(s){const e=new FM,n=kM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new oe);const a=new oe,c=new Xt,d=new Xt;function f(m){let v=0,x=0,y=0;for(let me=0;me<9;me++)r.probe[me].set(0,0,0);let S=0,w=0,b=0,_=0,g=0,D=0,P=0,N=0,Z=0,k=0,I=0;m.sort(zM);for(let me=0,E=m.length;me<E;me++){const R=m[me],V=R.color,j=R.intensity,$=R.distance,ae=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)v+=V.r*j,x+=V.g*j,y+=V.b*j;else if(R.isLightProbe){for(let J=0;J<9;J++)r.probe[J].addScaledVector(R.sh.coefficients[J],j);I++}else if(R.isDirectionalLight){const J=e.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const le=R.shadow,O=n.get(R);O.shadowIntensity=le.intensity,O.shadowBias=le.bias,O.shadowNormalBias=le.normalBias,O.shadowRadius=le.radius,O.shadowMapSize=le.mapSize,r.directionalShadow[S]=O,r.directionalShadowMap[S]=ae,r.directionalShadowMatrix[S]=R.shadow.matrix,D++}r.directional[S]=J,S++}else if(R.isSpotLight){const J=e.get(R);J.position.setFromMatrixPosition(R.matrixWorld),J.color.copy(V).multiplyScalar(j),J.distance=$,J.coneCos=Math.cos(R.angle),J.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),J.decay=R.decay,r.spot[b]=J;const le=R.shadow;if(R.map&&(r.spotLightMap[Z]=R.map,Z++,le.updateMatrices(R),R.castShadow&&k++),r.spotLightMatrix[b]=le.matrix,R.castShadow){const O=n.get(R);O.shadowIntensity=le.intensity,O.shadowBias=le.bias,O.shadowNormalBias=le.normalBias,O.shadowRadius=le.radius,O.shadowMapSize=le.mapSize,r.spotShadow[b]=O,r.spotShadowMap[b]=ae,N++}b++}else if(R.isRectAreaLight){const J=e.get(R);J.color.copy(V).multiplyScalar(j),J.halfWidth.set(R.width*.5,0,0),J.halfHeight.set(0,R.height*.5,0),r.rectArea[_]=J,_++}else if(R.isPointLight){const J=e.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity),J.distance=R.distance,J.decay=R.decay,R.castShadow){const le=R.shadow,O=n.get(R);O.shadowIntensity=le.intensity,O.shadowBias=le.bias,O.shadowNormalBias=le.normalBias,O.shadowRadius=le.radius,O.shadowMapSize=le.mapSize,O.shadowCameraNear=le.camera.near,O.shadowCameraFar=le.camera.far,r.pointShadow[w]=O,r.pointShadowMap[w]=ae,r.pointShadowMatrix[w]=R.shadow.matrix,P++}r.point[w]=J,w++}else if(R.isHemisphereLight){const J=e.get(R);J.skyColor.copy(R.color).multiplyScalar(j),J.groundColor.copy(R.groundColor).multiplyScalar(j),r.hemi[g]=J,g++}}_>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=y;const q=r.hash;(q.directionalLength!==S||q.pointLength!==w||q.spotLength!==b||q.rectAreaLength!==_||q.hemiLength!==g||q.numDirectionalShadows!==D||q.numPointShadows!==P||q.numSpotShadows!==N||q.numSpotMaps!==Z||q.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=b,r.rectArea.length=_,r.point.length=w,r.hemi.length=g,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=N+Z-k,r.spotLightMap.length=Z,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=I,q.directionalLength=S,q.pointLength=w,q.spotLength=b,q.rectAreaLength=_,q.hemiLength=g,q.numDirectionalShadows=D,q.numPointShadows=P,q.numSpotShadows=N,q.numSpotMaps=Z,q.numLightProbes=I,r.version=OM++)}function p(m,v){let x=0,y=0,S=0,w=0,b=0;const _=v.matrixWorldInverse;for(let g=0,D=m.length;g<D;g++){const P=m[g];if(P.isDirectionalLight){const N=r.directional[x];N.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(_),x++}else if(P.isSpotLight){const N=r.spot[S];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(_),N.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(_),S++}else if(P.isRectAreaLight){const N=r.rectArea[w];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(_),d.identity(),c.copy(P.matrixWorld),c.premultiply(_),d.extractRotation(c),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),w++}else if(P.isPointLight){const N=r.point[y];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(_),y++}else if(P.isHemisphereLight){const N=r.hemi[b];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(_),b++}}}return{setup:f,setupView:p,state:r}}function Tm(s){const e=new BM(s),n=[],r=[];function a(v){m.camera=v,n.length=0,r.length=0}function c(v){n.push(v)}function d(v){r.push(v)}function f(){e.setup(n)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:d}}function HM(s){let e=new WeakMap;function n(a,c=0){const d=e.get(a);let f;return d===void 0?(f=new Tm(s),e.set(a,[f])):c>=d.length?(f=new Tm(s),d.push(f)):f=d[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class VM extends Il{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GM extends Il{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const WM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function XM(s,e,n){let r=new sg;const a=new Rt,c=new Rt,d=new Gt,f=new VM({depthPacking:Fv}),p=new GM,m={},v=n.maxTextureSize,x={[xr]:bn,[bn]:xr,[Ui]:Ui},y=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:WM,fragmentShader:jM}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const w=new Kr;w.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new gi(w,y),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Im;let g=this.type;this.render=function(k,I,q){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||k.length===0)return;const me=s.getRenderTarget(),E=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),V=s.state;V.setBlending(vr),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const j=g!==Ii&&this.type===Ii,$=g===Ii&&this.type!==Ii;for(let ae=0,J=k.length;ae<J;ae++){const le=k[ae],O=le.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);const de=O.getFrameExtents();if(a.multiply(de),c.copy(O.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(c.x=Math.floor(v/de.x),a.x=c.x*de.x,O.mapSize.x=c.x),a.y>v&&(c.y=Math.floor(v/de.y),a.y=c.y*de.y,O.mapSize.y=c.y)),O.map===null||j===!0||$===!0){const F=this.type!==Ii?{minFilter:Yn,magFilter:Yn}:{};O.map!==null&&O.map.dispose(),O.map=new qr(a.x,a.y,F),O.map.texture.name=le.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const se=O.getViewportCount();for(let F=0;F<se;F++){const ne=O.getViewport(F);d.set(c.x*ne.x,c.y*ne.y,c.x*ne.z,c.y*ne.w),V.viewport(d),O.updateMatrices(le,F),r=O.getFrustum(),N(I,q,O.camera,le,this.type)}O.isPointLightShadow!==!0&&this.type===Ii&&D(O,q),O.needsUpdate=!1}g=this.type,_.needsUpdate=!1,s.setRenderTarget(me,E,R)};function D(k,I){const q=e.update(b);y.defines.VSM_SAMPLES!==k.blurSamples&&(y.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new qr(a.x,a.y)),y.uniforms.shadow_pass.value=k.map.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(I,null,q,y,b,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(I,null,q,S,b,null)}function P(k,I,q,me){let E=null;const R=q.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(R!==void 0)E=R;else if(E=q.isPointLight===!0?p:f,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const V=E.uuid,j=I.uuid;let $=m[V];$===void 0&&($={},m[V]=$);let ae=$[j];ae===void 0&&(ae=E.clone(),$[j]=ae,I.addEventListener("dispose",Z)),E=ae}if(E.visible=I.visible,E.wireframe=I.wireframe,me===Ii?E.side=I.shadowSide!==null?I.shadowSide:I.side:E.side=I.shadowSide!==null?I.shadowSide:x[I.side],E.alphaMap=I.alphaMap,E.alphaTest=I.alphaTest,E.map=I.map,E.clipShadows=I.clipShadows,E.clippingPlanes=I.clippingPlanes,E.clipIntersection=I.clipIntersection,E.displacementMap=I.displacementMap,E.displacementScale=I.displacementScale,E.displacementBias=I.displacementBias,E.wireframeLinewidth=I.wireframeLinewidth,E.linewidth=I.linewidth,q.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const V=s.properties.get(E);V.light=q}return E}function N(k,I,q,me,E){if(k.visible===!1)return;if(k.layers.test(I.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&E===Ii)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,k.matrixWorld);const j=e.update(k),$=k.material;if(Array.isArray($)){const ae=j.groups;for(let J=0,le=ae.length;J<le;J++){const O=ae[J],de=$[O.materialIndex];if(de&&de.visible){const se=P(k,de,me,E);k.onBeforeShadow(s,k,I,q,j,se,O),s.renderBufferDirect(q,null,j,se,k,O),k.onAfterShadow(s,k,I,q,j,se,O)}}}else if($.visible){const ae=P(k,$,me,E);k.onBeforeShadow(s,k,I,q,j,ae,null),s.renderBufferDirect(q,null,j,ae,k,null),k.onAfterShadow(s,k,I,q,j,ae,null)}}const V=k.children;for(let j=0,$=V.length;j<$;j++)N(V[j],I,q,me,E)}function Z(k){k.target.removeEventListener("dispose",Z);for(const q in m){const me=m[q],E=k.target.uuid;E in me&&(me[E].dispose(),delete me[E])}}}const YM={[rd]:sd,[od]:cd,[ad]:ud,[Vs]:ld,[sd]:rd,[cd]:od,[ud]:ad,[ld]:Vs};function qM(s){function e(){let W=!1;const Le=new Gt;let ue=null;const pe=new Gt(0,0,0,0);return{setMask:function(be){ue!==be&&!W&&(s.colorMask(be,be,be,be),ue=be)},setLocked:function(be){W=be},setClear:function(be,Ie,ft,Ot,an){an===!0&&(be*=Ot,Ie*=Ot,ft*=Ot),Le.set(be,Ie,ft,Ot),pe.equals(Le)===!1&&(s.clearColor(be,Ie,ft,Ot),pe.copy(Le))},reset:function(){W=!1,ue=null,pe.set(-1,0,0,0)}}}function n(){let W=!1,Le=!1,ue=null,pe=null,be=null;return{setReversed:function(Ie){Le=Ie},setTest:function(Ie){Ie?ge(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(Ie){ue!==Ie&&!W&&(s.depthMask(Ie),ue=Ie)},setFunc:function(Ie){if(Le&&(Ie=YM[Ie]),pe!==Ie){switch(Ie){case rd:s.depthFunc(s.NEVER);break;case sd:s.depthFunc(s.ALWAYS);break;case od:s.depthFunc(s.LESS);break;case Vs:s.depthFunc(s.LEQUAL);break;case ad:s.depthFunc(s.EQUAL);break;case ld:s.depthFunc(s.GEQUAL);break;case cd:s.depthFunc(s.GREATER);break;case ud:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Ie}},setLocked:function(Ie){W=Ie},setClear:function(Ie){be!==Ie&&(s.clearDepth(Ie),be=Ie)},reset:function(){W=!1,ue=null,pe=null,be=null}}}function r(){let W=!1,Le=null,ue=null,pe=null,be=null,Ie=null,ft=null,Ot=null,an=null;return{setTest:function(gt){W||(gt?ge(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(gt){Le!==gt&&!W&&(s.stencilMask(gt),Le=gt)},setFunc:function(gt,Qt,zn){(ue!==gt||pe!==Qt||be!==zn)&&(s.stencilFunc(gt,Qt,zn),ue=gt,pe=Qt,be=zn)},setOp:function(gt,Qt,zn){(Ie!==gt||ft!==Qt||Ot!==zn)&&(s.stencilOp(gt,Qt,zn),Ie=gt,ft=Qt,Ot=zn)},setLocked:function(gt){W=gt},setClear:function(gt){an!==gt&&(s.clearStencil(gt),an=gt)},reset:function(){W=!1,Le=null,ue=null,pe=null,be=null,Ie=null,ft=null,Ot=null,an=null}}}const a=new e,c=new n,d=new r,f=new WeakMap,p=new WeakMap;let m={},v={},x=new WeakMap,y=[],S=null,w=!1,b=null,_=null,g=null,D=null,P=null,N=null,Z=null,k=new bt(0,0,0),I=0,q=!1,me=null,E=null,R=null,V=null,j=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,J=0;const le=s.getParameter(s.VERSION);le.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(le)[1]),ae=J>=1):le.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),ae=J>=2);let O=null,de={};const se=s.getParameter(s.SCISSOR_BOX),F=s.getParameter(s.VIEWPORT),ne=new Gt().fromArray(se),Re=new Gt().fromArray(F);function G(W,Le,ue,pe){const be=new Uint8Array(4),Ie=s.createTexture();s.bindTexture(W,Ie),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ft=0;ft<ue;ft++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(Le+ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return Ie}const ce={};ce[s.TEXTURE_2D]=G(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=G(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[s.TEXTURE_2D_ARRAY]=G(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=G(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ge(s.DEPTH_TEST),c.setFunc(Vs),ct(!1),pt(Dp),ge(s.CULL_FACE),B(vr);function ge(W){m[W]!==!0&&(s.enable(W),m[W]=!0)}function xe(W){m[W]!==!1&&(s.disable(W),m[W]=!1)}function Ne(W,Le){return v[W]!==Le?(s.bindFramebuffer(W,Le),v[W]=Le,W===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Le),W===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ae(W,Le){let ue=y,pe=!1;if(W){ue=x.get(Le),ue===void 0&&(ue=[],x.set(Le,ue));const be=W.textures;if(ue.length!==be.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let Ie=0,ft=be.length;Ie<ft;Ie++)ue[Ie]=s.COLOR_ATTACHMENT0+Ie;ue.length=be.length,pe=!0}}else ue[0]!==s.BACK&&(ue[0]=s.BACK,pe=!0);pe&&s.drawBuffers(ue)}function qe(W){return S!==W?(s.useProgram(W),S=W,!0):!1}const ht={[Vr]:s.FUNC_ADD,[lv]:s.FUNC_SUBTRACT,[cv]:s.FUNC_REVERSE_SUBTRACT};ht[uv]=s.MIN,ht[dv]=s.MAX;const ut={[fv]:s.ZERO,[hv]:s.ONE,[pv]:s.SRC_COLOR,[nd]:s.SRC_ALPHA,[yv]:s.SRC_ALPHA_SATURATE,[_v]:s.DST_COLOR,[gv]:s.DST_ALPHA,[mv]:s.ONE_MINUS_SRC_COLOR,[id]:s.ONE_MINUS_SRC_ALPHA,[xv]:s.ONE_MINUS_DST_COLOR,[vv]:s.ONE_MINUS_DST_ALPHA,[Sv]:s.CONSTANT_COLOR,[Mv]:s.ONE_MINUS_CONSTANT_COLOR,[Ev]:s.CONSTANT_ALPHA,[wv]:s.ONE_MINUS_CONSTANT_ALPHA};function B(W,Le,ue,pe,be,Ie,ft,Ot,an,gt){if(W===vr){w===!0&&(xe(s.BLEND),w=!1);return}if(w===!1&&(ge(s.BLEND),w=!0),W!==av){if(W!==b||gt!==q){if((_!==Vr||P!==Vr)&&(s.blendEquation(s.FUNC_ADD),_=Vr,P=Vr),gt)switch(W){case zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ip:s.blendFunc(s.ONE,s.ONE);break;case Up:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ip:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Up:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}g=null,D=null,N=null,Z=null,k.set(0,0,0),I=0,b=W,q=gt}return}be=be||Le,Ie=Ie||ue,ft=ft||pe,(Le!==_||be!==P)&&(s.blendEquationSeparate(ht[Le],ht[be]),_=Le,P=be),(ue!==g||pe!==D||Ie!==N||ft!==Z)&&(s.blendFuncSeparate(ut[ue],ut[pe],ut[Ie],ut[ft]),g=ue,D=pe,N=Ie,Z=ft),(Ot.equals(k)===!1||an!==I)&&(s.blendColor(Ot.r,Ot.g,Ot.b,an),k.copy(Ot),I=an),b=W,q=!1}function on(W,Le){W.side===Ui?xe(s.CULL_FACE):ge(s.CULL_FACE);let ue=W.side===bn;Le&&(ue=!ue),ct(ue),W.blending===zs&&W.transparent===!1?B(vr):B(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),a.setMask(W.colorWrite);const pe=W.stencilWrite;d.setTest(pe),pe&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),At(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ge(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(W){me!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),me=W)}function pt(W){W!==rv?(ge(s.CULL_FACE),W!==E&&(W===Dp?s.cullFace(s.BACK):W===sv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),E=W}function Qe(W){W!==R&&(ae&&s.lineWidth(W),R=W)}function At(W,Le,ue){W?(ge(s.POLYGON_OFFSET_FILL),(V!==Le||j!==ue)&&(s.polygonOffset(Le,ue),V=Le,j=ue)):xe(s.POLYGON_OFFSET_FILL)}function et(W){W?ge(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function L(W){W===void 0&&(W=s.TEXTURE0+$-1),O!==W&&(s.activeTexture(W),O=W)}function T(W,Le,ue){ue===void 0&&(O===null?ue=s.TEXTURE0+$-1:ue=O);let pe=de[ue];pe===void 0&&(pe={type:void 0,texture:void 0},de[ue]=pe),(pe.type!==W||pe.texture!==Le)&&(O!==ue&&(s.activeTexture(ue),O=ue),s.bindTexture(W,Le||ce[W]),pe.type=W,pe.texture=Le)}function ee(){const W=de[O];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function he(){try{s.compressedTexImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ye(){try{s.compressedTexImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ye(){try{s.texSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function mt(){try{s.texStorage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{s.texImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function it(){try{s.texImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function tt(W){ne.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),ne.copy(W))}function ze(W){Re.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Re.copy(W))}function dt(W,Le){let ue=p.get(Le);ue===void 0&&(ue=new WeakMap,p.set(Le,ue));let pe=ue.get(W);pe===void 0&&(pe=s.getUniformBlockIndex(Le,W.name),ue.set(W,pe))}function st(W,Le){const pe=p.get(Le).get(W);f.get(Le)!==pe&&(s.uniformBlockBinding(Le,pe,W.__bindingPointIndex),f.set(Le,pe))}function Et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},O=null,de={},v={},x=new WeakMap,y=[],S=null,w=!1,b=null,_=null,g=null,D=null,P=null,N=null,Z=null,k=new bt(0,0,0),I=0,q=!1,me=null,E=null,R=null,V=null,j=null,ne.set(0,0,s.canvas.width,s.canvas.height),Re.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),d.reset()}return{buffers:{color:a,depth:c,stencil:d},enable:ge,disable:xe,bindFramebuffer:Ne,drawBuffers:Ae,useProgram:qe,setBlending:B,setMaterial:on,setFlipSided:ct,setCullFace:pt,setLineWidth:Qe,setPolygonOffset:At,setScissorTest:et,activeTexture:L,bindTexture:T,unbindTexture:ee,compressedTexImage2D:he,compressedTexImage3D:ye,texImage2D:ke,texImage3D:it,updateUBOMapping:dt,uniformBlockBinding:st,texStorage2D:mt,texStorage3D:Me,texSubImage2D:fe,texSubImage3D:Ye,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Fe,scissor:tt,viewport:ze,reset:Et}}function Am(s,e,n,r){const a=$M(r);switch(n){case Bm:return s*e;case Vm:return s*e;case Gm:return s*e*2;case Wm:return s*e/a.components*a.byteLength;case qd:return s*e/a.components*a.byteLength;case jm:return s*e*2/a.components*a.byteLength;case $d:return s*e*2/a.components*a.byteLength;case Hm:return s*e*3/a.components*a.byteLength;case ai:return s*e*4/a.components*a.byteLength;case Kd:return s*e*4/a.components*a.byteLength;case yl:case Sl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ml:case El:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gd:case _d:return Math.max(s,16)*Math.max(e,8)/4;case md:case vd:return Math.max(s,8)*Math.max(e,8)/2;case xd:case yd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Sd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Md:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case wd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Td:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Cd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case bd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Pd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Id:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ud:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case wl:case Fd:case kd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Xm:case Od:return Math.ceil(s/4)*Math.ceil(e/4)*8;case zd:case Bd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function $M(s){switch(s){case Oi:case km:return{byteLength:1,components:1};case Bo:case Om:case Ho:return{byteLength:2,components:1};case Xd:case Yd:return{byteLength:2,components:4};case Yr:case jd:case Fi:return{byteLength:4,components:1};case zm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function KM(s,e,n,r,a,c,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Rt,v=new WeakMap;let x;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(L,T){return S?new OffscreenCanvas(L,T):Nl("canvas")}function b(L,T,ee){let he=1;const ye=et(L);if((ye.width>ee||ye.height>ee)&&(he=ee/Math.max(ye.width,ye.height)),he<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(he*ye.width),Ye=Math.floor(he*ye.height);x===void 0&&(x=w(fe,Ye));const Ce=T?w(fe,Ye):x;return Ce.width=fe,Ce.height=Ye,Ce.getContext("2d").drawImage(L,0,0,fe,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+fe+"x"+Ye+")."),Ce}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),L;return L}function _(L){return L.generateMipmaps&&L.minFilter!==Yn&&L.minFilter!==si}function g(L){s.generateMipmap(L)}function D(L,T,ee,he,ye=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=T;if(T===s.RED&&(ee===s.FLOAT&&(fe=s.R32F),ee===s.HALF_FLOAT&&(fe=s.R16F),ee===s.UNSIGNED_BYTE&&(fe=s.R8)),T===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.R8UI),ee===s.UNSIGNED_SHORT&&(fe=s.R16UI),ee===s.UNSIGNED_INT&&(fe=s.R32UI),ee===s.BYTE&&(fe=s.R8I),ee===s.SHORT&&(fe=s.R16I),ee===s.INT&&(fe=s.R32I)),T===s.RG&&(ee===s.FLOAT&&(fe=s.RG32F),ee===s.HALF_FLOAT&&(fe=s.RG16F),ee===s.UNSIGNED_BYTE&&(fe=s.RG8)),T===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RG8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RG16UI),ee===s.UNSIGNED_INT&&(fe=s.RG32UI),ee===s.BYTE&&(fe=s.RG8I),ee===s.SHORT&&(fe=s.RG16I),ee===s.INT&&(fe=s.RG32I)),T===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),ee===s.UNSIGNED_INT&&(fe=s.RGB32UI),ee===s.BYTE&&(fe=s.RGB8I),ee===s.SHORT&&(fe=s.RGB16I),ee===s.INT&&(fe=s.RGB32I)),T===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),ee===s.UNSIGNED_INT&&(fe=s.RGBA32UI),ee===s.BYTE&&(fe=s.RGBA8I),ee===s.SHORT&&(fe=s.RGBA16I),ee===s.INT&&(fe=s.RGBA32I)),T===s.RGB&&ee===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),T===s.RGBA){const Ye=ye?Cl:wt.getTransfer(he);ee===s.FLOAT&&(fe=s.RGBA32F),ee===s.HALF_FLOAT&&(fe=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(fe=Ye===Ut?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function P(L,T){let ee;return L?T===null||T===Yr||T===js?ee=s.DEPTH24_STENCIL8:T===Fi?ee=s.DEPTH32F_STENCIL8:T===Bo&&(ee=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Yr||T===js?ee=s.DEPTH_COMPONENT24:T===Fi?ee=s.DEPTH_COMPONENT32F:T===Bo&&(ee=s.DEPTH_COMPONENT16),ee}function N(L,T){return _(L)===!0||L.isFramebufferTexture&&L.minFilter!==Yn&&L.minFilter!==si?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function Z(L){const T=L.target;T.removeEventListener("dispose",Z),I(T),T.isVideoTexture&&v.delete(T)}function k(L){const T=L.target;T.removeEventListener("dispose",k),me(T)}function I(L){const T=r.get(L);if(T.__webglInit===void 0)return;const ee=L.source,he=y.get(ee);if(he){const ye=he[T.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&q(L),Object.keys(he).length===0&&y.delete(ee)}r.remove(L)}function q(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const ee=L.source,he=y.get(ee);delete he[T.__cacheKey],d.memory.textures--}function me(L){const T=r.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(T.__webglFramebuffer[he]))for(let ye=0;ye<T.__webglFramebuffer[he].length;ye++)s.deleteFramebuffer(T.__webglFramebuffer[he][ye]);else s.deleteFramebuffer(T.__webglFramebuffer[he]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[he])}else{if(Array.isArray(T.__webglFramebuffer))for(let he=0;he<T.__webglFramebuffer.length;he++)s.deleteFramebuffer(T.__webglFramebuffer[he]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let he=0;he<T.__webglColorRenderbuffer.length;he++)T.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[he]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ee=L.textures;for(let he=0,ye=ee.length;he<ye;he++){const fe=r.get(ee[he]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),d.memory.textures--),r.remove(ee[he])}r.remove(L)}let E=0;function R(){E=0}function V(){const L=E;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),E+=1,L}function j(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function $(L,T){const ee=r.get(L);if(L.isVideoTexture&&Qe(L),L.isRenderTargetTexture===!1&&L.version>0&&ee.__version!==L.version){const he=L.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(ee,L,T);return}}n.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+T)}function ae(L,T){const ee=r.get(L);if(L.version>0&&ee.__version!==L.version){Re(ee,L,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+T)}function J(L,T){const ee=r.get(L);if(L.version>0&&ee.__version!==L.version){Re(ee,L,T);return}n.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+T)}function le(L,T){const ee=r.get(L);if(L.version>0&&ee.__version!==L.version){G(ee,L,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+T)}const O={[hd]:s.REPEAT,[Wr]:s.CLAMP_TO_EDGE,[pd]:s.MIRRORED_REPEAT},de={[Yn]:s.NEAREST,[Iv]:s.NEAREST_MIPMAP_NEAREST,[Qa]:s.NEAREST_MIPMAP_LINEAR,[si]:s.LINEAR,[Mu]:s.LINEAR_MIPMAP_NEAREST,[jr]:s.LINEAR_MIPMAP_LINEAR},se={[zv]:s.NEVER,[jv]:s.ALWAYS,[Bv]:s.LESS,[Ym]:s.LEQUAL,[Hv]:s.EQUAL,[Wv]:s.GEQUAL,[Vv]:s.GREATER,[Gv]:s.NOTEQUAL};function F(L,T){if(T.type===Fi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===si||T.magFilter===Mu||T.magFilter===Qa||T.magFilter===jr||T.minFilter===si||T.minFilter===Mu||T.minFilter===Qa||T.minFilter===jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,O[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,O[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,O[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,de[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,de[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,se[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Yn||T.minFilter!==Qa&&T.minFilter!==jr||T.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function ne(L,T){let ee=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",Z));const he=T.source;let ye=y.get(he);ye===void 0&&(ye={},y.set(he,ye));const fe=j(T);if(fe!==L.__cacheKey){ye[fe]===void 0&&(ye[fe]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,ee=!0),ye[fe].usedTimes++;const Ye=ye[L.__cacheKey];Ye!==void 0&&(ye[L.__cacheKey].usedTimes--,Ye.usedTimes===0&&q(T)),L.__cacheKey=fe,L.__webglTexture=ye[fe].texture}return ee}function Re(L,T,ee){let he=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(he=s.TEXTURE_3D);const ye=ne(L,T),fe=T.source;n.bindTexture(he,L.__webglTexture,s.TEXTURE0+ee);const Ye=r.get(fe);if(fe.version!==Ye.__version||ye===!0){n.activeTexture(s.TEXTURE0+ee);const Ce=wt.getPrimaries(wt.workingColorSpace),Fe=T.colorSpace===mr?null:wt.getPrimaries(T.colorSpace),mt=T.colorSpace===mr||Ce===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Me=b(T.image,!1,a.maxTextureSize);Me=At(T,Me);const ke=c.convert(T.format,T.colorSpace),it=c.convert(T.type);let tt=D(T.internalFormat,ke,it,T.colorSpace,T.isVideoTexture);F(he,T);let ze;const dt=T.mipmaps,st=T.isVideoTexture!==!0,Et=Ye.__version===void 0||ye===!0,W=fe.dataReady,Le=N(T,Me);if(T.isDepthTexture)tt=P(T.format===Xs,T.type),Et&&(st?n.texStorage2D(s.TEXTURE_2D,1,tt,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,tt,Me.width,Me.height,0,ke,it,null));else if(T.isDataTexture)if(dt.length>0){st&&Et&&n.texStorage2D(s.TEXTURE_2D,Le,tt,dt[0].width,dt[0].height);for(let ue=0,pe=dt.length;ue<pe;ue++)ze=dt[ue],st?W&&n.texSubImage2D(s.TEXTURE_2D,ue,0,0,ze.width,ze.height,ke,it,ze.data):n.texImage2D(s.TEXTURE_2D,ue,tt,ze.width,ze.height,0,ke,it,ze.data);T.generateMipmaps=!1}else st?(Et&&n.texStorage2D(s.TEXTURE_2D,Le,tt,Me.width,Me.height),W&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,ke,it,Me.data)):n.texImage2D(s.TEXTURE_2D,0,tt,Me.width,Me.height,0,ke,it,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){st&&Et&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Le,tt,dt[0].width,dt[0].height,Me.depth);for(let ue=0,pe=dt.length;ue<pe;ue++)if(ze=dt[ue],T.format!==ai)if(ke!==null)if(st){if(W)if(T.layerUpdates.size>0){const be=Am(ze.width,ze.height,T.format,T.type);for(const Ie of T.layerUpdates){const ft=ze.data.subarray(Ie*be/ze.data.BYTES_PER_ELEMENT,(Ie+1)*be/ze.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,Ie,ze.width,ze.height,1,ke,ft,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,ze.width,ze.height,Me.depth,ke,ze.data,0,0)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ue,tt,ze.width,ze.height,Me.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?W&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,ze.width,ze.height,Me.depth,ke,it,ze.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ue,tt,ze.width,ze.height,Me.depth,0,ke,it,ze.data)}else{st&&Et&&n.texStorage2D(s.TEXTURE_2D,Le,tt,dt[0].width,dt[0].height);for(let ue=0,pe=dt.length;ue<pe;ue++)ze=dt[ue],T.format!==ai?ke!==null?st?W&&n.compressedTexSubImage2D(s.TEXTURE_2D,ue,0,0,ze.width,ze.height,ke,ze.data):n.compressedTexImage2D(s.TEXTURE_2D,ue,tt,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?W&&n.texSubImage2D(s.TEXTURE_2D,ue,0,0,ze.width,ze.height,ke,it,ze.data):n.texImage2D(s.TEXTURE_2D,ue,tt,ze.width,ze.height,0,ke,it,ze.data)}else if(T.isDataArrayTexture)if(st){if(Et&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Le,tt,Me.width,Me.height,Me.depth),W)if(T.layerUpdates.size>0){const ue=Am(Me.width,Me.height,T.format,T.type);for(const pe of T.layerUpdates){const be=Me.data.subarray(pe*ue/Me.data.BYTES_PER_ELEMENT,(pe+1)*ue/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,ke,it,be)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ke,it,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,Me.width,Me.height,Me.depth,0,ke,it,Me.data);else if(T.isData3DTexture)st?(Et&&n.texStorage3D(s.TEXTURE_3D,Le,tt,Me.width,Me.height,Me.depth),W&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ke,it,Me.data)):n.texImage3D(s.TEXTURE_3D,0,tt,Me.width,Me.height,Me.depth,0,ke,it,Me.data);else if(T.isFramebufferTexture){if(Et)if(st)n.texStorage2D(s.TEXTURE_2D,Le,tt,Me.width,Me.height);else{let ue=Me.width,pe=Me.height;for(let be=0;be<Le;be++)n.texImage2D(s.TEXTURE_2D,be,tt,ue,pe,0,ke,it,null),ue>>=1,pe>>=1}}else if(dt.length>0){if(st&&Et){const ue=et(dt[0]);n.texStorage2D(s.TEXTURE_2D,Le,tt,ue.width,ue.height)}for(let ue=0,pe=dt.length;ue<pe;ue++)ze=dt[ue],st?W&&n.texSubImage2D(s.TEXTURE_2D,ue,0,0,ke,it,ze):n.texImage2D(s.TEXTURE_2D,ue,tt,ke,it,ze);T.generateMipmaps=!1}else if(st){if(Et){const ue=et(Me);n.texStorage2D(s.TEXTURE_2D,Le,tt,ue.width,ue.height)}W&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,it,Me)}else n.texImage2D(s.TEXTURE_2D,0,tt,ke,it,Me);_(T)&&g(he),Ye.__version=fe.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function G(L,T,ee){if(T.image.length!==6)return;const he=ne(L,T),ye=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+ee);const fe=r.get(ye);if(ye.version!==fe.__version||he===!0){n.activeTexture(s.TEXTURE0+ee);const Ye=wt.getPrimaries(wt.workingColorSpace),Ce=T.colorSpace===mr?null:wt.getPrimaries(T.colorSpace),Fe=T.colorSpace===mr||Ye===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const mt=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,ke=[];for(let pe=0;pe<6;pe++)!mt&&!Me?ke[pe]=b(T.image[pe],!0,a.maxCubemapSize):ke[pe]=Me?T.image[pe].image:T.image[pe],ke[pe]=At(T,ke[pe]);const it=ke[0],tt=c.convert(T.format,T.colorSpace),ze=c.convert(T.type),dt=D(T.internalFormat,tt,ze,T.colorSpace),st=T.isVideoTexture!==!0,Et=fe.__version===void 0||he===!0,W=ye.dataReady;let Le=N(T,it);F(s.TEXTURE_CUBE_MAP,T);let ue;if(mt){st&&Et&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Le,dt,it.width,it.height);for(let pe=0;pe<6;pe++){ue=ke[pe].mipmaps;for(let be=0;be<ue.length;be++){const Ie=ue[be];T.format!==ai?tt!==null?st?W&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,0,0,Ie.width,Ie.height,tt,Ie.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,dt,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,0,0,Ie.width,Ie.height,tt,ze,Ie.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,dt,Ie.width,Ie.height,0,tt,ze,Ie.data)}}}else{if(ue=T.mipmaps,st&&Et){ue.length>0&&Le++;const pe=et(ke[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Le,dt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){st?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ke[pe].width,ke[pe].height,tt,ze,ke[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,dt,ke[pe].width,ke[pe].height,0,tt,ze,ke[pe].data);for(let be=0;be<ue.length;be++){const ft=ue[be].image[pe].image;st?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,0,0,ft.width,ft.height,tt,ze,ft.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,dt,ft.width,ft.height,0,tt,ze,ft.data)}}else{st?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,tt,ze,ke[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,dt,tt,ze,ke[pe]);for(let be=0;be<ue.length;be++){const Ie=ue[be];st?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,0,0,tt,ze,Ie.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,dt,tt,ze,Ie.image[pe])}}}_(T)&&g(s.TEXTURE_CUBE_MAP),fe.__version=ye.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ce(L,T,ee,he,ye,fe){const Ye=c.convert(ee.format,ee.colorSpace),Ce=c.convert(ee.type),Fe=D(ee.internalFormat,Ye,Ce,ee.colorSpace);if(!r.get(T).__hasExternalTextures){const Me=Math.max(1,T.width>>fe),ke=Math.max(1,T.height>>fe);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?n.texImage3D(ye,fe,Fe,Me,ke,T.depth,0,Ye,Ce,null):n.texImage2D(ye,fe,Fe,Me,ke,0,Ye,Ce,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),pt(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ye,r.get(ee).__webglTexture,0,ct(T)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,ye,r.get(ee).__webglTexture,fe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(L,T,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const he=T.depthTexture,ye=he&&he.isDepthTexture?he.type:null,fe=P(T.stencilBuffer,ye),Ye=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=ct(T);pt(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,fe,T.width,T.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,fe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,fe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ye,s.RENDERBUFFER,L)}else{const he=T.textures;for(let ye=0;ye<he.length;ye++){const fe=he[ye],Ye=c.convert(fe.format,fe.colorSpace),Ce=c.convert(fe.type),Fe=D(fe.internalFormat,Ye,Ce,fe.colorSpace),mt=ct(T);ee&&pt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,Fe,T.width,T.height):pt(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt,Fe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xe(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),$(T.depthTexture,0);const he=r.get(T.depthTexture).__webglTexture,ye=ct(T);if(T.depthTexture.format===Bs)pt(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0);else if(T.depthTexture.format===Xs)pt(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function Ne(L){const T=r.get(L),ee=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const he=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),he){const ye=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,he.removeEventListener("dispose",ye)};he.addEventListener("dispose",ye),T.__depthDisposeCallback=ye}T.__boundDepthTexture=he}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");xe(T.__webglFramebuffer,L)}else if(ee){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]===void 0)T.__webglDepthbuffer[he]=s.createRenderbuffer(),ge(T.__webglDepthbuffer[he],L,!1);else{const ye=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,fe)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ge(T.__webglDepthbuffer,L,!1);else{const he=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ye),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,ye)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(L,T,ee){const he=r.get(L);T!==void 0&&ce(he.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&Ne(L)}function qe(L){const T=L.texture,ee=r.get(L),he=r.get(T);L.addEventListener("dispose",k);const ye=L.textures,fe=L.isWebGLCubeRenderTarget===!0,Ye=ye.length>1;if(Ye||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=T.version,d.memory.textures++),fe){ee.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer[Ce]=[];for(let Fe=0;Fe<T.mipmaps.length;Fe++)ee.__webglFramebuffer[Ce][Fe]=s.createFramebuffer()}else ee.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)ee.__webglFramebuffer[Ce]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Ye)for(let Ce=0,Fe=ye.length;Ce<Fe;Ce++){const mt=r.get(ye[Ce]);mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture(),d.memory.textures++)}if(L.samples>0&&pt(L)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ye.length;Ce++){const Fe=ye[Ce];ee.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ce]);const mt=c.convert(Fe.format,Fe.colorSpace),Me=c.convert(Fe.type),ke=D(Fe.internalFormat,mt,Me,Fe.colorSpace,L.isXRRenderTarget===!0),it=ct(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,it,ke,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),ge(ee.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){n.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),F(s.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)ce(ee.__webglFramebuffer[Ce][Fe],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Fe);else ce(ee.__webglFramebuffer[Ce],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);_(T)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ye){for(let Ce=0,Fe=ye.length;Ce<Fe;Ce++){const mt=ye[Ce],Me=r.get(mt);n.bindTexture(s.TEXTURE_2D,Me.__webglTexture),F(s.TEXTURE_2D,mt),ce(ee.__webglFramebuffer,L,mt,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),_(mt)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ce,he.__webglTexture),F(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)ce(ee.__webglFramebuffer[Fe],L,T,s.COLOR_ATTACHMENT0,Ce,Fe);else ce(ee.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,Ce,0);_(T)&&g(Ce),n.unbindTexture()}L.depthBuffer&&Ne(L)}function ht(L){const T=L.textures;for(let ee=0,he=T.length;ee<he;ee++){const ye=T[ee];if(_(ye)){const fe=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ye=r.get(ye).__webglTexture;n.bindTexture(fe,Ye),g(fe),n.unbindTexture()}}}const ut=[],B=[];function on(L){if(L.samples>0){if(pt(L)===!1){const T=L.textures,ee=L.width,he=L.height;let ye=s.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ye=r.get(L),Ce=T.length>1;if(Ce)for(let Fe=0;Fe<T.length;Fe++)n.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let Fe=0;Fe<T.length;Fe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[Fe]);const mt=r.get(T[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,mt,0)}s.blitFramebuffer(0,0,ee,he,0,0,ee,he,ye,s.NEAREST),p===!0&&(ut.length=0,B.length=0,ut.push(s.COLOR_ATTACHMENT0+Fe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ut.push(fe),B.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ut))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Fe=0;Fe<T.length;Fe++){n.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[Fe]);const mt=r.get(T[Fe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,mt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ct(L){return Math.min(a.maxSamples,L.samples)}function pt(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Qe(L){const T=d.render.frame;v.get(L)!==T&&(v.set(L,T),L.update())}function At(L,T){const ee=L.colorSpace,he=L.format,ye=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ee!==yr&&ee!==mr&&(wt.getTransfer(ee)===Ut?(he!==ai||ye!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),T}function et(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=V,this.resetTextureUnits=R,this.setTexture2D=$,this.setTexture2DArray=ae,this.setTexture3D=J,this.setTextureCube=le,this.rebindTextures=Ae,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=pt}function ZM(s,e){function n(r,a=mr){let c;const d=wt.getTransfer(a);if(r===Oi)return s.UNSIGNED_BYTE;if(r===Xd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Yd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===zm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===km)return s.BYTE;if(r===Om)return s.SHORT;if(r===Bo)return s.UNSIGNED_SHORT;if(r===jd)return s.INT;if(r===Yr)return s.UNSIGNED_INT;if(r===Fi)return s.FLOAT;if(r===Ho)return s.HALF_FLOAT;if(r===Bm)return s.ALPHA;if(r===Hm)return s.RGB;if(r===ai)return s.RGBA;if(r===Vm)return s.LUMINANCE;if(r===Gm)return s.LUMINANCE_ALPHA;if(r===Bs)return s.DEPTH_COMPONENT;if(r===Xs)return s.DEPTH_STENCIL;if(r===Wm)return s.RED;if(r===qd)return s.RED_INTEGER;if(r===jm)return s.RG;if(r===$d)return s.RG_INTEGER;if(r===Kd)return s.RGBA_INTEGER;if(r===yl||r===Sl||r===Ml||r===El)if(d===Ut)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===yl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ml)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===El)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===yl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ml)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===El)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===md||r===gd||r===vd||r===_d)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===md)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===gd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_d)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xd||r===yd||r===Sd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===xd||r===yd)return d===Ut?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Sd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Md||r===Ed||r===wd||r===Td||r===Ad||r===Cd||r===bd||r===Rd||r===Pd||r===Nd||r===Ld||r===Dd||r===Id||r===Ud)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Md)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ed)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Td)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ad)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Cd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Rd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ld)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Dd)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Id)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ud)return d===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===wl||r===Fd||r===kd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===wl)return d===Ut?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Fd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===kd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Xm||r===Od||r===zd||r===Bd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===wl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Od)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Bd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===js?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class QM extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xl extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JM={type:"move"};class Qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,d=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const b of e.hand.values()){const _=n.getJointPose(b,r),g=this._getHandJoint(m,b);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const v=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],y=v.position.distanceTo(x.position),S=.02,w=.005;m.inputState.pinching&&y>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(JM)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new xl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const eE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Rn,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Bi({vertexShader:eE,fragmentShader:tE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new gi(new Xo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iE extends qs{constructor(e,n){super();const r=this;let a=null,c=1,d=null,f="local-floor",p=1,m=null,v=null,x=null,y=null,S=null,w=null;const b=new nE,_=n.getContextAttributes();let g=null,D=null;const P=[],N=[],Z=new Rt;let k=null;const I=new ri;I.layers.enable(1),I.viewport=new Gt;const q=new ri;q.layers.enable(2),q.viewport=new Gt;const me=[I,q],E=new QM;E.layers.enable(1),E.layers.enable(2);let R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ce=P[G];return ce===void 0&&(ce=new Qu,P[G]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(G){let ce=P[G];return ce===void 0&&(ce=new Qu,P[G]=ce),ce.getGripSpace()},this.getHand=function(G){let ce=P[G];return ce===void 0&&(ce=new Qu,P[G]=ce),ce.getHandSpace()};function j(G){const ce=N.indexOf(G.inputSource);if(ce===-1)return;const ge=P[ce];ge!==void 0&&(ge.update(G.inputSource,G.frame,m||d),ge.dispatchEvent({type:G.type,data:G.inputSource}))}function $(){a.removeEventListener("select",j),a.removeEventListener("selectstart",j),a.removeEventListener("selectend",j),a.removeEventListener("squeeze",j),a.removeEventListener("squeezestart",j),a.removeEventListener("squeezeend",j),a.removeEventListener("end",$),a.removeEventListener("inputsourceschange",ae);for(let G=0;G<P.length;G++){const ce=N[G];ce!==null&&(N[G]=null,P[G].disconnect(ce))}R=null,V=null,b.reset(),e.setRenderTarget(g),S=null,y=null,x=null,a=null,D=null,Re.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(Z.width,Z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){c=G,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){f=G,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(G){m=G},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return x},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(G){if(a=G,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",j),a.addEventListener("selectstart",j),a.addEventListener("selectend",j),a.addEventListener("squeeze",j),a.addEventListener("squeezestart",j),a.addEventListener("squeezeend",j),a.addEventListener("end",$),a.addEventListener("inputsourceschange",ae),_.xrCompatible!==!0&&await n.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(Z),a.renderState.layers===void 0){const ce={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(a,n,ce),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new qr(S.framebufferWidth,S.framebufferHeight,{format:ai,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ce=null,ge=null,xe=null;_.depth&&(xe=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=_.stencil?Xs:Bs,ge=_.stencil?js:Yr);const Ne={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:c};x=new XRWebGLBinding(a,n),y=x.createProjectionLayer(Ne),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),D=new qr(y.textureWidth,y.textureHeight,{format:ai,type:Oi,depthTexture:new lg(y.textureWidth,y.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await a.requestReferenceSpace(f),Re.setContext(a),Re.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ae(G){for(let ce=0;ce<G.removed.length;ce++){const ge=G.removed[ce],xe=N.indexOf(ge);xe>=0&&(N[xe]=null,P[xe].disconnect(ge))}for(let ce=0;ce<G.added.length;ce++){const ge=G.added[ce];let xe=N.indexOf(ge);if(xe===-1){for(let Ae=0;Ae<P.length;Ae++)if(Ae>=N.length){N.push(ge),xe=Ae;break}else if(N[Ae]===null){N[Ae]=ge,xe=Ae;break}if(xe===-1)break}const Ne=P[xe];Ne&&Ne.connect(ge)}}const J=new oe,le=new oe;function O(G,ce,ge){J.setFromMatrixPosition(ce.matrixWorld),le.setFromMatrixPosition(ge.matrixWorld);const xe=J.distanceTo(le),Ne=ce.projectionMatrix.elements,Ae=ge.projectionMatrix.elements,qe=Ne[14]/(Ne[10]-1),ht=Ne[14]/(Ne[10]+1),ut=(Ne[9]+1)/Ne[5],B=(Ne[9]-1)/Ne[5],on=(Ne[8]-1)/Ne[0],ct=(Ae[8]+1)/Ae[0],pt=qe*on,Qe=qe*ct,At=xe/(-on+ct),et=At*-on;if(ce.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(et),G.translateZ(At),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Ne[10]===-1)G.projectionMatrix.copy(ce.projectionMatrix),G.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const L=qe+At,T=ht+At,ee=pt-et,he=Qe+(xe-et),ye=ut*ht/T*L,fe=B*ht/T*L;G.projectionMatrix.makePerspective(ee,he,ye,fe,L,T),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function de(G,ce){ce===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ce.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(a===null)return;let ce=G.near,ge=G.far;b.texture!==null&&(b.depthNear>0&&(ce=b.depthNear),b.depthFar>0&&(ge=b.depthFar)),E.near=q.near=I.near=ce,E.far=q.far=I.far=ge,(R!==E.near||V!==E.far)&&(a.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,V=E.far);const xe=G.parent,Ne=E.cameras;de(E,xe);for(let Ae=0;Ae<Ne.length;Ae++)de(Ne[Ae],xe);Ne.length===2?O(E,I,q):E.projectionMatrix.copy(I.projectionMatrix),se(G,E,xe)};function se(G,ce,ge){ge===null?G.matrix.copy(ce.matrixWorld):(G.matrix.copy(ge.matrixWorld),G.matrix.invert(),G.matrix.multiply(ce.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ce.projectionMatrix),G.projectionMatrixInverse.copy(ce.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Hd*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function(G){p=G,y!==null&&(y.fixedFoveation=G),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=G)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(E)};let F=null;function ne(G,ce){if(v=ce.getViewerPose(m||d),w=ce,v!==null){const ge=v.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let xe=!1;ge.length!==E.cameras.length&&(E.cameras.length=0,xe=!0);for(let Ae=0;Ae<ge.length;Ae++){const qe=ge[Ae];let ht=null;if(S!==null)ht=S.getViewport(qe);else{const B=x.getViewSubImage(y,qe);ht=B.viewport,Ae===0&&(e.setRenderTargetTextures(D,B.colorTexture,y.ignoreDepthValues?void 0:B.depthStencilTexture),e.setRenderTarget(D))}let ut=me[Ae];ut===void 0&&(ut=new ri,ut.layers.enable(Ae),ut.viewport=new Gt,me[Ae]=ut),ut.matrix.fromArray(qe.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(qe.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(ht.x,ht.y,ht.width,ht.height),Ae===0&&(E.matrix.copy(ut.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),xe===!0&&E.cameras.push(ut)}const Ne=a.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Ae=x.getDepthInformation(ge[0]);Ae&&Ae.isValid&&Ae.texture&&b.init(e,Ae,a.renderState)}}for(let ge=0;ge<P.length;ge++){const xe=N[ge],Ne=P[ge];xe!==null&&Ne!==void 0&&Ne.update(xe,ce,m||d)}F&&F(G,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),w=null}const Re=new og;Re.setAnimationLoop(ne),this.setAnimationLoop=function(G){F=G},this.dispose=function(){}}}const zr=new zi,rE=new Xt;function sE(s,e){function n(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function r(_,g){g.color.getRGB(_.fogColor.value,ng(s)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function a(_,g,D,P,N){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(_,g):g.isMeshToonMaterial?(c(_,g),x(_,g)):g.isMeshPhongMaterial?(c(_,g),v(_,g)):g.isMeshStandardMaterial?(c(_,g),y(_,g),g.isMeshPhysicalMaterial&&S(_,g,N)):g.isMeshMatcapMaterial?(c(_,g),w(_,g)):g.isMeshDepthMaterial?c(_,g):g.isMeshDistanceMaterial?(c(_,g),b(_,g)):g.isMeshNormalMaterial?c(_,g):g.isLineBasicMaterial?(d(_,g),g.isLineDashedMaterial&&f(_,g)):g.isPointsMaterial?p(_,g,D,P):g.isSpriteMaterial?m(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,n(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,n(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===bn&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,n(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===bn&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,n(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,n(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const D=e.get(g),P=D.envMap,N=D.envMapRotation;P&&(_.envMap.value=P,zr.copy(N),zr.x*=-1,zr.y*=-1,zr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),_.envMapRotation.value.setFromMatrix4(rE.makeRotationFromEuler(zr)),_.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,_.aoMapTransform))}function d(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,n(g.map,_.mapTransform))}function f(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function p(_,g,D,P){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*D,_.scale.value=P*.5,g.map&&(_.map.value=g.map,n(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function m(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,n(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function v(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function x(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function y(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function S(_,g,D){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===bn&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=D.texture,_.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,_.specularIntensityMapTransform))}function w(_,g){g.matcap&&(_.matcap.value=g.matcap)}function b(_,g){const D=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(D.matrixWorld),_.nearDistance.value=D.shadow.camera.near,_.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function oE(s,e,n,r){let a={},c={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,P){const N=P.program;r.uniformBlockBinding(D,N)}function m(D,P){let N=a[D.id];N===void 0&&(w(D),N=v(D),a[D.id]=N,D.addEventListener("dispose",_));const Z=P.program;r.updateUBOMapping(D,Z);const k=e.render.frame;c[D.id]!==k&&(y(D),c[D.id]=k)}function v(D){const P=x();D.__bindingPointIndex=P;const N=s.createBuffer(),Z=D.__size,k=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,Z,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,N),N}function x(){for(let D=0;D<f;D++)if(d.indexOf(D)===-1)return d.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(D){const P=a[D.id],N=D.uniforms,Z=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let k=0,I=N.length;k<I;k++){const q=Array.isArray(N[k])?N[k]:[N[k]];for(let me=0,E=q.length;me<E;me++){const R=q[me];if(S(R,k,me,Z)===!0){const V=R.__offset,j=Array.isArray(R.value)?R.value:[R.value];let $=0;for(let ae=0;ae<j.length;ae++){const J=j[ae],le=b(J);typeof J=="number"||typeof J=="boolean"?(R.__data[0]=J,s.bufferSubData(s.UNIFORM_BUFFER,V+$,R.__data)):J.isMatrix3?(R.__data[0]=J.elements[0],R.__data[1]=J.elements[1],R.__data[2]=J.elements[2],R.__data[3]=0,R.__data[4]=J.elements[3],R.__data[5]=J.elements[4],R.__data[6]=J.elements[5],R.__data[7]=0,R.__data[8]=J.elements[6],R.__data[9]=J.elements[7],R.__data[10]=J.elements[8],R.__data[11]=0):(J.toArray(R.__data,$),$+=le.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(D,P,N,Z){const k=D.value,I=P+"_"+N;if(Z[I]===void 0)return typeof k=="number"||typeof k=="boolean"?Z[I]=k:Z[I]=k.clone(),!0;{const q=Z[I];if(typeof k=="number"||typeof k=="boolean"){if(q!==k)return Z[I]=k,!0}else if(q.equals(k)===!1)return q.copy(k),!0}return!1}function w(D){const P=D.uniforms;let N=0;const Z=16;for(let I=0,q=P.length;I<q;I++){const me=Array.isArray(P[I])?P[I]:[P[I]];for(let E=0,R=me.length;E<R;E++){const V=me[E],j=Array.isArray(V.value)?V.value:[V.value];for(let $=0,ae=j.length;$<ae;$++){const J=j[$],le=b(J),O=N%Z,de=O%le.boundary,se=O+de;N+=de,se!==0&&Z-se<le.storage&&(N+=Z-se),V.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=N,N+=le.storage}}}const k=N%Z;return k>0&&(N+=Z-k),D.__size=N,D.__cache={},this}function b(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),P}function _(D){const P=D.target;P.removeEventListener("dispose",_);const N=d.indexOf(P.__bindingPointIndex);d.splice(N,1),s.deleteBuffer(a[P.id]),delete a[P.id],delete c[P.id]}function g(){for(const D in a)s.deleteBuffer(a[D]);d=[],a={},c={}}return{bind:p,update:m,dispose:g}}class aE{constructor(e={}){const{canvas:n=Yv(),context:r=null,depth:a=!0,stencil:c=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=d;const S=new Uint32Array(4),w=new Int32Array(4);let b=null,_=null;const g=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hi,this.toneMapping=_r,this.toneMappingExposure=1;const P=this;let N=!1,Z=0,k=0,I=null,q=-1,me=null;const E=new Gt,R=new Gt;let V=null;const j=new bt(0);let $=0,ae=n.width,J=n.height,le=1,O=null,de=null;const se=new Gt(0,0,ae,J),F=new Gt(0,0,ae,J);let ne=!1;const Re=new sg;let G=!1,ce=!1;const ge=new Xt,xe=new Xt,Ne=new oe,Ae=new Gt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function ut(){return I===null?le:1}let B=r;function on(C,X){return n.getContext(C,X)}try{const C={alpha:!0,depth:a,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wd}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",Ie,!1),B===null){const X="webgl2";if(B=on(X,C),B===null)throw on(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ct,pt,Qe,At,et,L,T,ee,he,ye,fe,Ye,Ce,Fe,mt,Me,ke,it,tt,ze,dt,st,Et,W;function Le(){ct=new fS(B),ct.init(),st=new ZM(B,ct),pt=new oS(B,ct,e,st),Qe=new qM(B),pt.reverseDepthBuffer&&Qe.buffers.depth.setReversed(!0),At=new mS(B),et=new DM,L=new KM(B,ct,Qe,et,pt,st,At),T=new lS(P),ee=new dS(P),he=new M_(B),Et=new rS(B,he),ye=new hS(B,he,At,Et),fe=new vS(B,ye,he,At),tt=new gS(B,pt,L),Me=new aS(et),Ye=new LM(P,T,ee,ct,pt,Et,Me),Ce=new sE(P,et),Fe=new UM,mt=new HM(ct),it=new iS(P,T,ee,Qe,fe,y,p),ke=new XM(P,fe,pt),W=new oE(B,At,pt,Qe),ze=new sS(B,ct,At),dt=new pS(B,ct,At),At.programs=Ye.programs,P.capabilities=pt,P.extensions=ct,P.properties=et,P.renderLists=Fe,P.shadowMap=ke,P.state=Qe,P.info=At}Le();const ue=new iE(P,B);this.xr=ue,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=ct.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ct.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(C){C!==void 0&&(le=C,this.setSize(ae,J,!1))},this.getSize=function(C){return C.set(ae,J)},this.setSize=function(C,X,te=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=C,J=X,n.width=Math.floor(C*le),n.height=Math.floor(X*le),te===!0&&(n.style.width=C+"px",n.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(ae*le,J*le).floor()},this.setDrawingBufferSize=function(C,X,te){ae=C,J=X,le=te,n.width=Math.floor(C*te),n.height=Math.floor(X*te),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(se)},this.setViewport=function(C,X,te,ie){C.isVector4?se.set(C.x,C.y,C.z,C.w):se.set(C,X,te,ie),Qe.viewport(E.copy(se).multiplyScalar(le).round())},this.getScissor=function(C){return C.copy(F)},this.setScissor=function(C,X,te,ie){C.isVector4?F.set(C.x,C.y,C.z,C.w):F.set(C,X,te,ie),Qe.scissor(R.copy(F).multiplyScalar(le).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(C){Qe.setScissorTest(ne=C)},this.setOpaqueSort=function(C){O=C},this.setTransparentSort=function(C){de=C},this.getClearColor=function(C){return C.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(C=!0,X=!0,te=!0){let ie=0;if(C){let Y=!1;if(I!==null){const we=I.texture.format;Y=we===Kd||we===$d||we===qd}if(Y){const we=I.texture.type,De=we===Oi||we===Yr||we===Bo||we===js||we===Xd||we===Yd,Te=it.getClearColor(),We=it.getClearAlpha(),Ze=Te.r,Je=Te.g,je=Te.b;De?(S[0]=Ze,S[1]=Je,S[2]=je,S[3]=We,B.clearBufferuiv(B.COLOR,0,S)):(w[0]=Ze,w[1]=Je,w[2]=je,w[3]=We,B.clearBufferiv(B.COLOR,0,w))}else ie|=B.COLOR_BUFFER_BIT}X&&(ie|=B.DEPTH_BUFFER_BIT,B.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),te&&(ie|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",Ie,!1),Fe.dispose(),mt.dispose(),et.dispose(),T.dispose(),ee.dispose(),fe.dispose(),Et.dispose(),W.dispose(),Ye.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Hi),ue.removeEventListener("sessionend",Zr),Pn.stop()};function pe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const C=At.autoReset,X=ke.enabled,te=ke.autoUpdate,ie=ke.needsUpdate,Y=ke.type;Le(),At.autoReset=C,ke.enabled=X,ke.autoUpdate=te,ke.needsUpdate=ie,ke.type=Y}function Ie(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ft(C){const X=C.target;X.removeEventListener("dispose",ft),Ot(X)}function Ot(C){an(C),et.remove(C)}function an(C){const X=et.get(C).programs;X!==void 0&&(X.forEach(function(te){Ye.releaseProgram(te)}),C.isShaderMaterial&&Ye.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,te,ie,Y,we){X===null&&(X=qe);const De=Y.isMesh&&Y.matrixWorld.determinant()<0,Te=xi(C,X,te,ie,Y);Qe.setMaterial(ie,De);let We=te.index,Ze=1;if(ie.wireframe===!0){if(We=ye.getWireframeAttribute(te),We===void 0)return;Ze=2}const Je=te.drawRange,je=te.attributes.position;let Mt=Je.start*Ze,Ct=(Je.start+Je.count)*Ze;we!==null&&(Mt=Math.max(Mt,we.start*Ze),Ct=Math.min(Ct,(we.start+we.count)*Ze)),We!==null?(Mt=Math.max(Mt,0),Ct=Math.min(Ct,We.count)):je!=null&&(Mt=Math.max(Mt,0),Ct=Math.min(Ct,je.count));const Pt=Ct-Mt;if(Pt<0||Pt===1/0)return;Et.setup(Y,ie,Te,te,We);let Ft,_t=ze;if(We!==null&&(Ft=he.get(We),_t=dt,_t.setIndex(Ft)),Y.isMesh)ie.wireframe===!0?(Qe.setLineWidth(ie.wireframeLinewidth*ut()),_t.setMode(B.LINES)):_t.setMode(B.TRIANGLES);else if(Y.isLine){let Oe=ie.linewidth;Oe===void 0&&(Oe=1),Qe.setLineWidth(Oe*ut()),Y.isLineSegments?_t.setMode(B.LINES):Y.isLineLoop?_t.setMode(B.LINE_LOOP):_t.setMode(B.LINE_STRIP)}else Y.isPoints?_t.setMode(B.POINTS):Y.isSprite&&_t.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)_t.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))_t.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Oe=Y._multiDrawStarts,Yt=Y._multiDrawCounts,xt=Y._multiDrawCount,Nn=We?he.get(We).bytesPerElement:1,qn=et.get(ie).currentProgram.getUniforms();for(let Jt=0;Jt<xt;Jt++)qn.setValue(B,"_gl_DrawID",Jt),_t.render(Oe[Jt]/Nn,Yt[Jt])}else if(Y.isInstancedMesh)_t.renderInstances(Mt,Pt,Y.count);else if(te.isInstancedBufferGeometry){const Oe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Yt=Math.min(te.instanceCount,Oe);_t.renderInstances(Mt,Pt,Yt)}else _t.render(Mt,Pt)};function gt(C,X,te){C.transparent===!0&&C.side===Ui&&C.forceSinglePass===!1?(C.side=bn,C.needsUpdate=!0,Jr(C,X,te),C.side=xr,C.needsUpdate=!0,Jr(C,X,te),C.side=Ui):Jr(C,X,te)}this.compile=function(C,X,te=null){te===null&&(te=C),_=mt.get(te),_.init(X),D.push(_),te.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),C!==te&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const ie=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const we=Y.material;if(we)if(Array.isArray(we))for(let De=0;De<we.length;De++){const Te=we[De];gt(Te,te,Y),ie.add(Te)}else gt(we,te,Y),ie.add(we)}),D.pop(),_=null,ie},this.compileAsync=function(C,X,te=null){const ie=this.compile(C,X,te);return new Promise(Y=>{function we(){if(ie.forEach(function(De){et.get(De).currentProgram.isReady()&&ie.delete(De)}),ie.size===0){Y(C);return}setTimeout(we,10)}ct.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Qt=null;function zn(C){Qt&&Qt(C)}function Hi(){Pn.stop()}function Zr(){Pn.start()}const Pn=new og;Pn.setAnimationLoop(zn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(C){Qt=C,ue.setAnimationLoop(C),C===null?Pn.stop():Pn.start()},ue.addEventListener("sessionstart",Hi),ue.addEventListener("sessionend",Zr),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(X),X=ue.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,X,I),_=mt.get(C,D.length),_.init(X),D.push(_),xe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Re.setFromProjectionMatrix(xe),ce=this.localClippingEnabled,G=Me.init(this.clippingPlanes,ce),b=Fe.get(C,g.length),b.init(),g.push(b),ue.enabled===!0&&ue.isPresenting===!0){const we=P.xr.getDepthSensingMesh();we!==null&&Ks(we,X,-1/0,P.sortObjects)}Ks(C,X,0,P.sortObjects),b.finish(),P.sortObjects===!0&&b.sort(O,de),ht=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,ht&&it.addToRenderList(b,C),this.info.render.frame++,G===!0&&Me.beginShadows();const te=_.state.shadowsArray;ke.render(te,C,X),G===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=b.opaque,Y=b.transmissive;if(_.setupLights(),X.isArrayCamera){const we=X.cameras;if(Y.length>0)for(let De=0,Te=we.length;De<Te;De++){const We=we[De];Sr(ie,Y,C,We)}ht&&it.render(C);for(let De=0,Te=we.length;De<Te;De++){const We=we[De];Vi(b,C,We,We.viewport)}}else Y.length>0&&Sr(ie,Y,C,X),ht&&it.render(C),Vi(b,C,X);I!==null&&(L.updateMultisampleRenderTarget(I),L.updateRenderTargetMipmap(I)),C.isScene===!0&&C.onAfterRender(P,C,X),Et.resetDefaultState(),q=-1,me=null,D.pop(),D.length>0?(_=D[D.length-1],G===!0&&Me.setGlobalState(P.clippingPlanes,_.state.camera)):_=null,g.pop(),g.length>0?b=g[g.length-1]:b=null};function Ks(C,X,te,ie){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)te=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Re.intersectsSprite(C)){ie&&Ae.setFromMatrixPosition(C.matrixWorld).applyMatrix4(xe);const De=fe.update(C),Te=C.material;Te.visible&&b.push(C,De,Te,te,Ae.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Re.intersectsObject(C))){const De=fe.update(C),Te=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ae.copy(C.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ae.copy(De.boundingSphere.center)),Ae.applyMatrix4(C.matrixWorld).applyMatrix4(xe)),Array.isArray(Te)){const We=De.groups;for(let Ze=0,Je=We.length;Ze<Je;Ze++){const je=We[Ze],Mt=Te[je.materialIndex];Mt&&Mt.visible&&b.push(C,De,Mt,te,Ae.z,je)}}else Te.visible&&b.push(C,De,Te,te,Ae.z,null)}}const we=C.children;for(let De=0,Te=we.length;De<Te;De++)Ks(we[De],X,te,ie)}function Vi(C,X,te,ie){const Y=C.opaque,we=C.transmissive,De=C.transparent;_.setupLightsView(te),G===!0&&Me.setGlobalState(P.clippingPlanes,te),ie&&Qe.viewport(E.copy(ie)),Y.length>0&&_i(Y,X,te),we.length>0&&_i(we,X,te),De.length>0&&_i(De,X,te),Qe.buffers.depth.setTest(!0),Qe.buffers.depth.setMask(!0),Qe.buffers.color.setMask(!0),Qe.setPolygonOffset(!1)}function Sr(C,X,te,ie){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ie.id]===void 0&&(_.state.transmissionRenderTarget[ie.id]=new qr(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?Ho:Oi,minFilter:jr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const we=_.state.transmissionRenderTarget[ie.id],De=ie.viewport||E;we.setSize(De.z,De.w);const Te=P.getRenderTarget();P.setRenderTarget(we),P.getClearColor(j),$=P.getClearAlpha(),$<1&&P.setClearColor(16777215,.5),P.clear(),ht&&it.render(te);const We=P.toneMapping;P.toneMapping=_r;const Ze=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),_.setupLightsView(ie),G===!0&&Me.setGlobalState(P.clippingPlanes,ie),_i(C,te,ie),L.updateMultisampleRenderTarget(we),L.updateRenderTargetMipmap(we),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let je=0,Mt=X.length;je<Mt;je++){const Ct=X[je],Pt=Ct.object,Ft=Ct.geometry,_t=Ct.material,Oe=Ct.group;if(_t.side===Ui&&Pt.layers.test(ie.layers)){const Yt=_t.side;_t.side=bn,_t.needsUpdate=!0,Qr(Pt,te,ie,Ft,_t,Oe),_t.side=Yt,_t.needsUpdate=!0,Je=!0}}Je===!0&&(L.updateMultisampleRenderTarget(we),L.updateRenderTargetMipmap(we))}P.setRenderTarget(Te),P.setClearColor(j,$),Ze!==void 0&&(ie.viewport=Ze),P.toneMapping=We}function _i(C,X,te){const ie=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,we=C.length;Y<we;Y++){const De=C[Y],Te=De.object,We=De.geometry,Ze=ie===null?De.material:ie,Je=De.group;Te.layers.test(te.layers)&&Qr(Te,X,te,We,Ze,Je)}}function Qr(C,X,te,ie,Y,we){C.onBeforeRender(P,X,te,ie,Y,we),C.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(P,X,te,ie,C,we),Y.transparent===!0&&Y.side===Ui&&Y.forceSinglePass===!1?(Y.side=bn,Y.needsUpdate=!0,P.renderBufferDirect(te,X,ie,Y,C,we),Y.side=xr,Y.needsUpdate=!0,P.renderBufferDirect(te,X,ie,Y,C,we),Y.side=Ui):P.renderBufferDirect(te,X,ie,Y,C,we),C.onAfterRender(P,X,te,ie,Y,we)}function Jr(C,X,te){X.isScene!==!0&&(X=qe);const ie=et.get(C),Y=_.state.lights,we=_.state.shadowsArray,De=Y.state.version,Te=Ye.getParameters(C,Y.state,we,X,te),We=Ye.getProgramCacheKey(Te);let Ze=ie.programs;ie.environment=C.isMeshStandardMaterial?X.environment:null,ie.fog=X.fog,ie.envMap=(C.isMeshStandardMaterial?ee:T).get(C.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,Ze===void 0&&(C.addEventListener("dispose",ft),Ze=new Map,ie.programs=Ze);let Je=Ze.get(We);if(Je!==void 0){if(ie.currentProgram===Je&&ie.lightsStateVersion===De)return qo(C,Te),Je}else Te.uniforms=Ye.getUniforms(C),C.onBeforeCompile(Te,P),Je=Ye.acquireProgram(Te,We),Ze.set(We,Je),ie.uniforms=Te.uniforms;const je=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(je.clippingPlanes=Me.uniform),qo(C,Te),ie.needsLights=Ko(C),ie.lightsStateVersion=De,ie.needsLights&&(je.ambientLightColor.value=Y.state.ambient,je.lightProbe.value=Y.state.probe,je.directionalLights.value=Y.state.directional,je.directionalLightShadows.value=Y.state.directionalShadow,je.spotLights.value=Y.state.spot,je.spotLightShadows.value=Y.state.spotShadow,je.rectAreaLights.value=Y.state.rectArea,je.ltc_1.value=Y.state.rectAreaLTC1,je.ltc_2.value=Y.state.rectAreaLTC2,je.pointLights.value=Y.state.point,je.pointLightShadows.value=Y.state.pointShadow,je.hemisphereLights.value=Y.state.hemi,je.directionalShadowMap.value=Y.state.directionalShadowMap,je.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,je.spotShadowMap.value=Y.state.spotShadowMap,je.spotLightMatrix.value=Y.state.spotLightMatrix,je.spotLightMap.value=Y.state.spotLightMap,je.pointShadowMap.value=Y.state.pointShadowMap,je.pointShadowMatrix.value=Y.state.pointShadowMatrix),ie.currentProgram=Je,ie.uniformsList=null,Je}function Yo(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Al.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function qo(C,X){const te=et.get(C);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function xi(C,X,te,ie,Y){X.isScene!==!0&&(X=qe),L.resetTextureUnits();const we=X.fog,De=ie.isMeshStandardMaterial?X.environment:null,Te=I===null?P.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:yr,We=(ie.isMeshStandardMaterial?ee:T).get(ie.envMap||De),Ze=ie.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Je=!!te.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),je=!!te.morphAttributes.position,Mt=!!te.morphAttributes.normal,Ct=!!te.morphAttributes.color;let Pt=_r;ie.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Pt=P.toneMapping);const Ft=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,_t=Ft!==void 0?Ft.length:0,Oe=et.get(ie),Yt=_.state.lights;if(G===!0&&(ce===!0||C!==me)){const un=C===me&&ie.id===q;Me.setState(ie,C,un)}let xt=!1;ie.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Yt.state.version||Oe.outputColorSpace!==Te||Y.isBatchedMesh&&Oe.batching===!1||!Y.isBatchedMesh&&Oe.batching===!0||Y.isBatchedMesh&&Oe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Oe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Oe.instancing===!1||!Y.isInstancedMesh&&Oe.instancing===!0||Y.isSkinnedMesh&&Oe.skinning===!1||!Y.isSkinnedMesh&&Oe.skinning===!0||Y.isInstancedMesh&&Oe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Oe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Oe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Oe.instancingMorph===!1&&Y.morphTexture!==null||Oe.envMap!==We||ie.fog===!0&&Oe.fog!==we||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Me.numPlanes||Oe.numIntersection!==Me.numIntersection)||Oe.vertexAlphas!==Ze||Oe.vertexTangents!==Je||Oe.morphTargets!==je||Oe.morphNormals!==Mt||Oe.morphColors!==Ct||Oe.toneMapping!==Pt||Oe.morphTargetsCount!==_t)&&(xt=!0):(xt=!0,Oe.__version=ie.version);let Nn=Oe.currentProgram;xt===!0&&(Nn=Jr(ie,X,Y));let qn=!1,Jt=!1,yi=!1;const Nt=Nn.getUniforms(),li=Oe.uniforms;if(Qe.useProgram(Nn.program)&&(qn=!0,Jt=!0,yi=!0),ie.id!==q&&(q=ie.id,Jt=!0),qn||me!==C){pt.reverseDepthBuffer?(ge.copy(C.projectionMatrix),$v(ge),Kv(ge),Nt.setValue(B,"projectionMatrix",ge)):Nt.setValue(B,"projectionMatrix",C.projectionMatrix),Nt.setValue(B,"viewMatrix",C.matrixWorldInverse);const un=Nt.map.cameraPosition;un!==void 0&&un.setValue(B,Ne.setFromMatrixPosition(C.matrixWorld)),pt.logarithmicDepthBuffer&&Nt.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Nt.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),me!==C&&(me=C,Jt=!0,yi=!0)}if(Y.isSkinnedMesh){Nt.setOptional(B,Y,"bindMatrix"),Nt.setOptional(B,Y,"bindMatrixInverse");const un=Y.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Nt.setValue(B,"boneTexture",un.boneTexture,L))}Y.isBatchedMesh&&(Nt.setOptional(B,Y,"batchingTexture"),Nt.setValue(B,"batchingTexture",Y._matricesTexture,L),Nt.setOptional(B,Y,"batchingIdTexture"),Nt.setValue(B,"batchingIdTexture",Y._indirectTexture,L),Nt.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Nt.setValue(B,"batchingColorTexture",Y._colorsTexture,L));const Zs=te.morphAttributes;if((Zs.position!==void 0||Zs.normal!==void 0||Zs.color!==void 0)&&tt.update(Y,te,Nn),(Jt||Oe.receiveShadow!==Y.receiveShadow)&&(Oe.receiveShadow=Y.receiveShadow,Nt.setValue(B,"receiveShadow",Y.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(li.envMap.value=We,li.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&X.environment!==null&&(li.envMapIntensity.value=X.environmentIntensity),Jt&&(Nt.setValue(B,"toneMappingExposure",P.toneMappingExposure),Oe.needsLights&&$o(li,yi),we&&ie.fog===!0&&Ce.refreshFogUniforms(li,we),Ce.refreshMaterialUniforms(li,ie,le,J,_.state.transmissionRenderTarget[C.id]),Al.upload(B,Yo(Oe),li,L)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Al.upload(B,Yo(Oe),li,L),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Nt.setValue(B,"center",Y.center),Nt.setValue(B,"modelViewMatrix",Y.modelViewMatrix),Nt.setValue(B,"normalMatrix",Y.normalMatrix),Nt.setValue(B,"modelMatrix",Y.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const un=ie.uniformsGroups;for(let es=0,Qs=un.length;es<Qs;es++){const Gi=un[es];W.update(Gi,Nn),W.bind(Gi,Nn)}}return Nn}function $o(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Ko(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(C,X,te){et.get(C.texture).__webglTexture=X,et.get(C.depthTexture).__webglTexture=te;const ie=et.get(C);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=te===void 0,ie.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,X){const te=et.get(C);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,te=0){I=C,Z=X,k=te;let ie=!0,Y=null,we=!1,De=!1;if(C){const We=et.get(C);if(We.__useDefaultFramebuffer!==void 0)Qe.bindFramebuffer(B.FRAMEBUFFER,null),ie=!1;else if(We.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(We.__hasExternalTextures)L.rebindTextures(C,et.get(C.texture).__webglTexture,et.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const je=C.depthTexture;if(We.__boundDepthTexture!==je){if(je!==null&&et.has(je)&&(C.width!==je.image.width||C.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const Ze=C.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(De=!0);const Je=et.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Je[X])?Y=Je[X][te]:Y=Je[X],we=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?Y=et.get(C).__webglMultisampledFramebuffer:Array.isArray(Je)?Y=Je[te]:Y=Je,E.copy(C.viewport),R.copy(C.scissor),V=C.scissorTest}else E.copy(se).multiplyScalar(le).floor(),R.copy(F).multiplyScalar(le).floor(),V=ne;if(Qe.bindFramebuffer(B.FRAMEBUFFER,Y)&&ie&&Qe.drawBuffers(C,Y),Qe.viewport(E),Qe.scissor(R),Qe.setScissorTest(V),we){const We=et.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,We.__webglTexture,te)}else if(De){const We=et.get(C.texture),Ze=X||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.__webglTexture,te||0,Ze)}q=-1},this.readRenderTargetPixels=function(C,X,te,ie,Y,we,De){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=et.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Te=Te[De]),Te){Qe.bindFramebuffer(B.FRAMEBUFFER,Te);try{const We=C.texture,Ze=We.format,Je=We.type;if(!pt.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-ie&&te>=0&&te<=C.height-Y&&B.readPixels(X,te,ie,Y,st.convert(Ze),st.convert(Je),we)}finally{const We=I!==null?et.get(I).__webglFramebuffer:null;Qe.bindFramebuffer(B.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(C,X,te,ie,Y,we,De){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=et.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Te=Te[De]),Te){const We=C.texture,Ze=We.format,Je=We.type;if(!pt.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=C.width-ie&&te>=0&&te<=C.height-Y){Qe.bindFramebuffer(B.FRAMEBUFFER,Te);const je=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,je),B.bufferData(B.PIXEL_PACK_BUFFER,we.byteLength,B.STREAM_READ),B.readPixels(X,te,ie,Y,st.convert(Ze),st.convert(Je),0);const Mt=I!==null?et.get(I).__webglFramebuffer:null;Qe.bindFramebuffer(B.FRAMEBUFFER,Mt);const Ct=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await qv(B,Ct,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,je),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,we),B.deleteBuffer(je),B.deleteSync(Ct),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,X=null,te=0){C.isTexture!==!0&&(Tl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1]);const ie=Math.pow(2,-te),Y=Math.floor(C.image.width*ie),we=Math.floor(C.image.height*ie),De=X!==null?X.x:0,Te=X!==null?X.y:0;L.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,te,0,0,De,Te,Y,we),Qe.unbindTexture()},this.copyTextureToTexture=function(C,X,te=null,ie=null,Y=0){C.isTexture!==!0&&(Tl("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,C=arguments[1],X=arguments[2],Y=arguments[3]||0,te=null);let we,De,Te,We,Ze,Je;te!==null?(we=te.max.x-te.min.x,De=te.max.y-te.min.y,Te=te.min.x,We=te.min.y):(we=C.image.width,De=C.image.height,Te=0,We=0),ie!==null?(Ze=ie.x,Je=ie.y):(Ze=0,Je=0);const je=st.convert(X.format),Mt=st.convert(X.type);L.setTexture2D(X,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const Ct=B.getParameter(B.UNPACK_ROW_LENGTH),Pt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ft=B.getParameter(B.UNPACK_SKIP_PIXELS),_t=B.getParameter(B.UNPACK_SKIP_ROWS),Oe=B.getParameter(B.UNPACK_SKIP_IMAGES),Yt=C.isCompressedTexture?C.mipmaps[Y]:C.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Yt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Yt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Te),B.pixelStorei(B.UNPACK_SKIP_ROWS,We),C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Y,Ze,Je,we,De,je,Mt,Yt.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Y,Ze,Je,Yt.width,Yt.height,je,Yt.data):B.texSubImage2D(B.TEXTURE_2D,Y,Ze,Je,we,De,je,Mt,Yt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ct),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Pt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ft),B.pixelStorei(B.UNPACK_SKIP_ROWS,_t),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Oe),Y===0&&X.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Qe.unbindTexture()},this.copyTextureToTexture3D=function(C,X,te=null,ie=null,Y=0){C.isTexture!==!0&&(Tl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ie=arguments[1]||null,C=arguments[2],X=arguments[3],Y=arguments[4]||0);let we,De,Te,We,Ze,Je,je,Mt,Ct;const Pt=C.isCompressedTexture?C.mipmaps[Y]:C.image;te!==null?(we=te.max.x-te.min.x,De=te.max.y-te.min.y,Te=te.max.z-te.min.z,We=te.min.x,Ze=te.min.y,Je=te.min.z):(we=Pt.width,De=Pt.height,Te=Pt.depth,We=0,Ze=0,Je=0),ie!==null?(je=ie.x,Mt=ie.y,Ct=ie.z):(je=0,Mt=0,Ct=0);const Ft=st.convert(X.format),_t=st.convert(X.type);let Oe;if(X.isData3DTexture)L.setTexture3D(X,0),Oe=B.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)L.setTexture2DArray(X,0),Oe=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const Yt=B.getParameter(B.UNPACK_ROW_LENGTH),xt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Nn=B.getParameter(B.UNPACK_SKIP_PIXELS),qn=B.getParameter(B.UNPACK_SKIP_ROWS),Jt=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Pt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Pt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,We),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ze),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Je),C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Oe,Y,je,Mt,Ct,we,De,Te,Ft,_t,Pt.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(Oe,Y,je,Mt,Ct,we,De,Te,Ft,Pt.data):B.texSubImage3D(Oe,Y,je,Mt,Ct,we,De,Te,Ft,_t,Pt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Yt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,xt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Nn),B.pixelStorei(B.UNPACK_SKIP_ROWS,qn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Jt),Y===0&&X.generateMipmaps&&B.generateMipmap(Oe),Qe.unbindTexture()},this.initRenderTarget=function(C){et.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Qe.unbindTexture()},this.resetState=function(){Z=0,k=0,I=null,Qe.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Zd?"display-p3":"srgb",n.unpackColorSpace=wt.workingColorSpace===Dl?"display-p3":"srgb"}}class lE extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class cE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Cm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Cm(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wd);function uE(s){const e=s.replace("#",""),n=parseInt(e,16);if(e.length===3){const d=(n>>8&15)*17,f=(n>>4&15)*17,p=(n&15)*17;return[d/255,f/255,p/255]}const r=n>>16&255,a=n>>8&255,c=n&255;return[r/255,a/255,c/255]}const bm=[{skyHorizon:"#E8E4E2",waterHorizon:"#9AAAB5",waterNear:"#7E8F9A"},{skyHorizon:"#EAE2D8",waterHorizon:"#94A5B1",waterNear:"#768897"},{skyHorizon:"#A8B6BF",waterHorizon:"#5B7080",waterNear:"#465764"},{skyHorizon:"#3A4454",waterHorizon:"#2D3748",waterNear:"#212936"},{skyHorizon:"#0A0A0C",waterHorizon:"#060709",waterNear:"#0A0B0E"}],Rm=s=>[parseInt(s.slice(1,3),16),parseInt(s.slice(3,5),16),parseInt(s.slice(5,7),16)],Ju=(s,e,n)=>{const r=Rm(s),a=Rm(e),c=r.map((d,f)=>Math.round(d+(a[f]-d)*n));return`rgb(${c[0]}, ${c[1]}, ${c[2]})`},ef=s=>{const e=Math.min(1,Math.max(0,s)),n=Math.min(3,Math.floor(e/.25)),r=(e-n*.25)/.25,a=bm[n],c=bm[n+1];return{skyHorizon:Ju(a.skyHorizon,c.skyHorizon,r),waterHorizon:Ju(a.waterHorizon,c.waterHorizon,r),waterNear:Ju(a.waterNear,c.waterNear,r)}},dE=s=>ef(s),fE=s=>{const e=ef(s),n=e.waterHorizon.match(/\d+/g).map(Number),r=e.waterNear.match(/\d+/g).map(Number),a=n.map((c,d)=>Math.round((c+r[d])/2));return`rgb(${a[0]}, ${a[1]}, ${a[2]})`},hE=s=>ef(s).skyHorizon,pE=({scrollProgress:s,activeProjectTint:e,overlayOpen:n=!1})=>{const r=nt.useRef(null),[a,c]=nt.useState(!1),d=nt.useRef(n);nt.useEffect(()=>{d.current=n},[n]);const f=nt.useRef({active:0,color:new oe(.1,.1,.1)}),p=nt.useRef({uTime:{value:0},uScroll:{value:0},uHorizon:{value:.36},uHorizonDip:{value:0},uResolution:{value:new Rt(window.innerWidth,window.innerHeight)},uProjectTintActive:{value:0},uProjectColor:{value:new oe(.1,.1,.1)}});nt.useEffect(()=>{const v=r.current;if(!v)return;const x=new lE,y=new ag(-1,1,1,-1,0,1);let S;try{S=new aE({antialias:!0,powerPreference:"high-performance",alpha:!1})}catch{c(!0);return}S.domElement.addEventListener("webglcontextlost",O=>{O.preventDefault(),c(!0)});const w=[1.5,1.25,1];let b=Math.min(window.devicePixelRatio||1,w[0]);const _=O=>{b=O,S.setPixelRatio(O),S.setSize(window.innerWidth,window.innerHeight)};_(b),v.innerHTML="",v.appendChild(S.domElement);const g=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,D=`
      uniform float uTime;
      uniform float uScroll;
      uniform float uHorizon;
      uniform float uHorizonDip;
      uniform vec2 uResolution;
      uniform float uProjectTintActive;
      uniform vec3 uProjectColor;
      varying vec2 vUv;

      // Hash function for pseudo-random ripples
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      // Smooth noise function
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
                   mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
      }

      // Color stop structure
      struct Atmosphere {
        vec3 skyZenith;
        vec3 skyHorizon;
        vec3 waterHorizon;
        vec3 waterNear;
        vec3 sunGlitter;
      };

      Atmosphere getAtmosphere(float t) {
        // Stop 0: Morning Pale Dawn (0.00)
        Atmosphere a0;
        a0.skyZenith    = vec3(0.788, 0.812, 0.839); // #C9CFD6
        a0.skyHorizon   = vec3(0.910, 0.894, 0.886); // #E8E4E2
        a0.waterHorizon = vec3(0.604, 0.667, 0.710); // #9AAAB5
        a0.waterNear    = vec3(0.494, 0.561, 0.604); // #7E8F9A
        a0.sunGlitter   = vec3(1.000, 0.953, 0.839); // #FFF3D6

        // Stop 1: Midday Warmth (0.25) — Kryntix family, warm at
        // the horizon but DEEPER than the shore stop, never paler
        // (design pass: the old stop washed out to flat grey).
        Atmosphere a1;
        a1.skyZenith    = vec3(0.784, 0.812, 0.831); // #C8CFD4
        a1.skyHorizon   = vec3(0.918, 0.886, 0.847); // #EAE2D8
        a1.waterHorizon = vec3(0.580, 0.647, 0.694); // #94A5B1
        a1.waterNear    = vec3(0.463, 0.533, 0.592); // #768897
        a1.sunGlitter   = vec3(1.000, 0.953, 0.839); // #FFF3D6

        // Stop 2: Deep Blue-Slate Ocean (0.50)
        Atmosphere a2;
        a2.skyZenith    = vec3(0.541, 0.604, 0.647); // #8A9AA5
        a2.skyHorizon   = vec3(0.659, 0.714, 0.749); // #A8B6BF
        a2.waterHorizon = vec3(0.357, 0.439, 0.502); // #5B7080
        a2.waterNear    = vec3(0.275, 0.341, 0.392); // #465764
        a2.sunGlitter   = vec3(0.900, 0.920, 0.960);

        // Stop 3: Dusk Amber (0.75)
        Atmosphere a3;
        a3.skyZenith    = vec3(0.290, 0.333, 0.408); // #4A5568
        a3.skyHorizon   = vec3(0.227, 0.267, 0.329); // #3A4454
        a3.waterHorizon = vec3(0.176, 0.216, 0.282); // #2D3748
        a3.waterNear    = vec3(0.129, 0.161, 0.212); // #212936
        a3.sunGlitter   = vec3(0.831, 0.522, 0.122); // #D4851F warm amber

        // Stop 4: Far Shore Black + Gold (1.00)
        Atmosphere a4;
        a4.skyZenith    = vec3(0.020, 0.020, 0.020); // #050505
        a4.skyHorizon   = vec3(0.039, 0.039, 0.047); // #0A0A0C
        a4.waterHorizon = vec3(0.024, 0.027, 0.035); // #060709
        a4.waterNear    = vec3(0.039, 0.043, 0.055); // #0A0B0E
        a4.sunGlitter   = vec3(0.773, 0.604, 0.247); // #C59A3F gold specular

        Atmosphere res;
        if (t < 0.25) {
          float f = t / 0.25;
          res.skyZenith    = mix(a0.skyZenith, a1.skyZenith, f);
          res.skyHorizon   = mix(a0.skyHorizon, a1.skyHorizon, f);
          res.waterHorizon = mix(a0.waterHorizon, a1.waterHorizon, f);
          res.waterNear    = mix(a0.waterNear, a1.waterNear, f);
          res.sunGlitter   = mix(a0.sunGlitter, a1.sunGlitter, f);
        } else if (t < 0.50) {
          float f = (t - 0.25) / 0.25;
          res.skyZenith    = mix(a1.skyZenith, a2.skyZenith, f);
          res.skyHorizon   = mix(a1.skyHorizon, a2.skyHorizon, f);
          res.waterHorizon = mix(a1.waterHorizon, a2.waterHorizon, f);
          res.waterNear    = mix(a1.waterNear, a2.waterNear, f);
          res.sunGlitter   = mix(a1.sunGlitter, a2.sunGlitter, f);
        } else if (t < 0.75) {
          float f = (t - 0.50) / 0.25;
          res.skyZenith    = mix(a2.skyZenith, a3.skyZenith, f);
          res.skyHorizon   = mix(a2.skyHorizon, a3.skyHorizon, f);
          res.waterHorizon = mix(a2.waterHorizon, a3.waterHorizon, f);
          res.waterNear    = mix(a2.waterNear, a3.waterNear, f);
          res.sunGlitter   = mix(a2.sunGlitter, a3.sunGlitter, f);
        } else {
          float f = (t - 0.75) / 0.25;
          res.skyZenith    = mix(a3.skyZenith, a4.skyZenith, f);
          res.skyHorizon   = mix(a3.skyHorizon, a4.skyHorizon, f);
          res.waterHorizon = mix(a3.waterHorizon, a4.waterHorizon, f);
          res.waterNear    = mix(a3.waterNear, a4.waterNear, f);
          res.sunGlitter   = mix(a3.sunGlitter, a4.sunGlitter, f);
        }
        return res;
      }

      void main() {
        vec2 uv = vUv;
        float aspect = uResolution.x / uResolution.y;

        // Subtle horizon arc responding to scroll progression (66% at shore -> 68% mid-journey -> 65% at far shore)
        // Phase 2 (§2.2): uHorizonDip presses the line 6px lower
        // across each hand-off band and lets it settle — the
        // world's one answering motion to a place change.
        float horizon = uHorizon - sin(uScroll * 3.14159) * 0.035 - uHorizonDip;

        // Smooth color interpolation across 5 stops
        Atmosphere atm = getAtmosphere(clamp(uScroll, 0.0, 1.0));

        // Inject subtle project tint if active (lerp up to 25% influence)
        if (uProjectTintActive > 0.0) {
          atm.waterNear = mix(atm.waterNear, uProjectColor * 0.7, uProjectTintActive * 0.35);
          atm.waterHorizon = mix(atm.waterHorizon, uProjectColor * 0.9, uProjectTintActive * 0.25);
          atm.skyHorizon = mix(atm.skyHorizon, uProjectColor * 1.1, uProjectTintActive * 0.15);
        }

        vec3 color = vec3(0.0);

        if (uv.y > horizon) {
          // ================= SKY REGION =================
          float skyFactor = (uv.y - horizon) / (1.0 - horizon);
          // Exponential decay towards horizon creates realistic atmospheric haze
          float haze = pow(1.0 - skyFactor, 1.8);
          color = mix(atm.skyZenith, atm.skyHorizon, haze);

          // Subtle sun position glow near horizon center
          vec2 sunPos = vec2(0.5, horizon + 0.12);
          vec2 sunDelta = vec2((uv.x - sunPos.x) * aspect, uv.y - sunPos.y);
          float sunDist = length(sunDelta);
          float sunGlow = exp(-sunDist * 3.5) * 0.18;
          color += atm.sunGlitter * sunGlow;

        } else {
          // ================= WATER REGION =================
          // Perspective depth: distance increases toward the horizon
          float waterFactor = (horizon - uv.y) / horizon; // 0.0 at horizon, 1.0 at screen bottom
          float depth = max(waterFactor, 0.001);
          float invDepth = 1.0 / (depth * 2.2 + 0.1);

          // Water coordinates with forward travel speed increased by scroll.
          float forwardGlide = uScroll * 14.0;
          vec2 waterCoord = vec2(
            (uv.x - 0.5) * aspect * invDepth * 3.5,
            invDepth * 5.5 + uTime * 0.6 + forwardGlide
          );

          // Multi-frequency wave normals
          float w1 = sin(waterCoord.y * 1.5 + uTime * 1.4) * 0.06;
          float w2 = cos(waterCoord.x * 2.2 + waterCoord.y * 0.8 + uTime * 1.8) * 0.04;
          float w3 = sin(waterCoord.x * 5.0 - waterCoord.y * 3.0 + uTime * 2.5) * 0.02;
          float waves = w1 + w2 + w3;

          // Ambient expanding ripple rings every ~3.0s
          float rippleCycle = mod(uTime, 3.2);
          vec2 center = vec2(0.0, 8.0);
          float ringDist = length(waterCoord - center);
          float rippleWave = sin((ringDist - rippleCycle * 5.0) * 2.5) * exp(-ringDist * 0.1) * max(0.0, 1.0 - rippleCycle / 3.2);
          waves += rippleWave * 0.025;

          // Base water gradient
          vec3 baseWater = mix(atm.waterHorizon, atm.waterNear, pow(depth, 0.7));

          // Directional sun specular glitter path down the center
          float sunAlignment = abs(uv.x - 0.5);
          float glintColumn = exp(-sunAlignment * 8.0 * (1.0 - depth * 0.6));
          float glintSparkle = smoothstep(0.02, 0.08, waves + noise(waterCoord * 4.0 + uTime) * 0.04);
          vec3 specular = atm.sunGlitter * glintColumn * glintSparkle * 0.75 * (1.0 - depth * 0.5);

          // Subsurface caustic highlights
          float caustics = (noise(waterCoord * 1.8 - uTime * 0.5) * noise(waterCoord * 2.4 + uTime * 0.4)) * 0.09 * depth;

          // Fresnel reflectance: more sky reflection looking toward horizon (shallow angle)
          float fresnel = pow(1.0 - depth, 2.8) * 0.65;
          vec3 reflectedSky = mix(atm.skyHorizon, atm.skyZenith, 0.3);

          color = mix(baseWater + caustics, reflectedSky, fresnel) + specular;

          // Drifting particle field (the STUDY recipe's water
          // detail, restored in Phase 2 §2.3): ~40 soft points
          // on a coarse grid, rising slowly through the water,
          // lit by the stop's glare colour. Hash-gated cells keep
          // the count honest; the rise is slow enough that cell
          // changes read as drift, not popping.
          vec2 pc = vec2(uv.x * aspect * 10.0, uv.y * 10.0 - uTime * 0.05);
          vec2 pCell = floor(pc);
          float pHash = hash(pCell);
          if (pHash > 0.75) {
            vec2 pCentre = vec2(hash(pCell + 11.3), hash(pCell + 27.9));
            float pDist = length(fract(pc) - pCentre);
            float pPoint = smoothstep(0.17, 0.02, pDist) * 0.28;
            color += atm.sunGlitter * pPoint * (1.0 - depth * 0.5);
          }

          // Horizon atmospheric blend transition (soft misty waterline)
          float edgeSoftness = smoothstep(0.0, 0.015, horizon - uv.y);
          color = mix(atm.skyHorizon, color, edgeSoftness);
        }

        // Output final color
        gl_FragColor = vec4(color, 1.0);
      }
    `,P=new Bi({vertexShader:g,fragmentShader:D,uniforms:p.current}),N=new Xo(2,2),Z=new gi(N,P);x.add(Z);let k;const I=new cE;let q=0,me=0,E=0,R=performance.now(),V=0,j=0,$=0,ae=performance.now();const J=()=>{if(k=requestAnimationFrame(J),document.hidden)return;const O=I.getElapsedTime(),de=Math.min(Math.max(O-q,0),.25);q=O,p.current.uTime.value=O;const se=1-Math.exp(-de*7),F=p.current;F.uProjectTintActive.value+=(f.current.active-F.uProjectTintActive.value)*se,F.uProjectColor.value.lerp(f.current.color,se),me+=1,(!d.current||me%2===0)&&S.render(x,y),E+=1;const ne=performance.now();if(E>=30){V=E*1e3/Math.max(1,ne-R),E=0,R=ne;const Re=(ne-ae)/1e3;V<45?(j+=Re,$=0):V>58?($+=Re,j=0):(j=0,$=0),ae=ne;const G=w.findIndex(ge=>Math.abs(ge-b)<.01);j>=2&&G>=0&&G<w.length-1?(_(w[G+1]),j=0):$>=5&&G>0&&(_(w[G-1]),$=0);const ce=window;ce.__worldGovernor={dpr:b,fps:Math.round(V)}}};J();const le=()=>{S.setSize(window.innerWidth,window.innerHeight),S.setPixelRatio(b),p.current.uResolution.value.set(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",le),()=>{cancelAnimationFrame(k),window.removeEventListener("resize",le),S.dispose(),N.dispose(),P.dispose(),v.contains(S.domElement)&&v.removeChild(S.domElement)}},[]),nt.useEffect(()=>{if(p.current.uScroll&&(p.current.uScroll.value=s),p.current.uHorizonDip){const v=[[.54,.585],[.655,.685],[.775,.8],[.885,.905]];let x=0;for(const[y,S]of v){const w=Math.min(1,Math.max(0,(s-y)/(S-y)));x=Math.max(x,Math.sin(w*Math.PI))}p.current.uHorizonDip.value=x*6/Math.max(1,window.innerHeight)}if(e){const v=uE(e);f.current.color.set(v[0],v[1],v[2]),f.current.active=1}else f.current.active=0},[s,e]);const m=dE(s);return A.jsx("div",{ref:r,className:"p3-load-fade fixed inset-0 pointer-events-none z-0 overflow-hidden","aria-hidden":"true",children:a&&A.jsx("div",{"data-world-fallback":!0,className:"absolute inset-0",style:{background:`linear-gradient(to bottom, ${m.skyHorizon} 0%, ${m.skyHorizon} 63.5%, ${m.waterHorizon} 64.5%, ${m.waterNear} 100%)`}})})},mE=({onNavigate:s,scrollProgress:e})=>{const[n,r]=nt.useState(!1),a=e>.85;return A.jsxs("header",{className:`fixed top-0 inset-x-0 z-40 px-4 sm:px-6 md:px-12 py-4 sm:py-5 transition-colors duration-500 ${a?"text-white":"text-[#1A1C1E]"}`,children:[A.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[A.jsxs("button",{onClick:()=>s("hero"),className:"group flex items-center space-x-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B57E08] rounded-sm","aria-label":"Ashfan — Back to Shore",children:[A.jsx("span",{className:"font-serif italic text-xl sm:text-2xl tracking-tight font-medium group-hover:text-[#B57E08] transition-colors",children:"Ashfan"}),A.jsx("span",{className:"text-[10px] font-mono tracking-widest opacity-60",children:"2026"})]}),A.jsxs("nav",{className:"hidden md:flex items-center space-x-8 text-xs font-mono uppercase tracking-[0.16em] opacity-80","aria-label":"Primary Navigation",children:[A.jsx("button",{onClick:()=>s("projects"),className:"hover:text-[#B57E08] transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B57E08]",children:"01 / Projects"}),A.jsx("button",{onClick:()=>s("channels"),className:"hover:text-[#B57E08] transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B57E08]",children:"02 / Channels"}),A.jsx("button",{onClick:()=>s("services"),className:"hover:text-[#B57E08] transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B57E08]",children:"03 / Services"}),A.jsx("button",{onClick:()=>s("about"),className:"hover:text-[#B57E08] transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B57E08]",children:"04 / About"}),A.jsx("button",{onClick:()=>s("contact"),className:"hover:text-[#B57E08] transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B57E08]",children:"05 / Far Shore"})]}),A.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-3 flex-shrink-0",children:[A.jsxs("button",{onClick:()=>s("contact"),className:`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-[0.14em] font-medium whitespace-nowrap transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B57E08] ${a?"bg-gradient-to-r from-[#F5B81E] to-[#FDE68A] text-[#0A0A0C] hover:opacity-90 shadow-lg shadow-[#F5B81E]/20":"bg-[#1A1C1E] text-white hover:bg-[#F5B81E] hover:text-[#1A1C1E] shadow-sm"}`,children:[A.jsx("span",{className:"hidden sm:inline",children:"Let's Talk"}),A.jsx("span",{className:"sm:hidden",children:"Talk"})]}),A.jsx("button",{onClick:()=>r(!n),className:"md:hidden p-1.5 sm:p-2 text-current focus:outline-none","aria-label":"Toggle Navigation Menu",children:A.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:n?A.jsx("path",{d:"M6 18L18 6M6 6l12 12",strokeLinecap:"round",strokeLinejoin:"round"}):A.jsx("path",{d:"M4 8h16M4 16h16",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]}),n&&A.jsx("div",{className:`md:hidden mt-4 py-6 px-6 rounded-2xl border transition-all ${a?"bg-[#121316]/95 border-white/10 text-white":"bg-white/95 border-[#1A1C1E]/10 text-[#1A1C1E]"} shadow-2xl backdrop-blur-md`,children:A.jsxs("div",{className:"flex flex-col space-y-4 font-mono text-xs uppercase tracking-[0.16em]",children:[A.jsx("button",{onClick:()=>{s("projects"),r(!1)},className:"text-left py-2 border-b border-current/10 hover:text-[#B57E08]",children:"01 / Projects"}),A.jsx("button",{onClick:()=>{s("channels"),r(!1)},className:"text-left py-2 border-b border-current/10 hover:text-[#B57E08]",children:"02 / Channels"}),A.jsx("button",{onClick:()=>{s("services"),r(!1)},className:"text-left py-2 border-b border-current/10 hover:text-[#B57E08]",children:"03 / Services"}),A.jsx("button",{onClick:()=>{s("about"),r(!1)},className:"text-left py-2 border-b border-current/10 hover:text-[#B57E08]",children:"04 / About"}),A.jsx("button",{onClick:()=>{s("contact"),r(!1)},className:"text-left py-2 hover:text-[#B57E08]",children:"05 / Far Shore"})]})})]})},gE=s=>Math.min(1,Math.max(0,s)),$r=(s,e,n)=>gE((s-e)/(n-e)),He=(s,e,n)=>{const r=$r(s,e,n);return r*r*r*(r*(r*6-15)+10)},mi={shore:s=>1-$r(s,.12,.23),featured:s=>Math.min(He(s,.185,.23),1-He(s,.567,.585)),channels:s=>Math.min(He(s,.58,.615),1-He(s,.67,.685)),services:s=>Math.min(He(s,.685,.705),1-He(s,.79,.8)),about:s=>Math.min(He(s,.8,.815),1-He(s,.897,.905)),farShore:s=>He(s,.885,.945)},gr={featured:s=>.42*He(s,.11,.17)*(1-He(s,.17,.185)),channels:s=>.42*He(s,.54,.567)*(1-He(s,.567,.585)),services:s=>.42*He(s,.655,.67)*(1-He(s,.67,.685)),about:s=>.42*He(s,.775,.79)*(1-He(s,.79,.8))},Fl=(s,e)=>Math.max(s,e),kl=(s,e,n)=>{const r=He(s,e,n);return{t:r,scale:1+.045*r,ty:-26*r}},Ol=(s,e,n,r=.94,a=3,c=30)=>{const d=He(s,e,n);return{t:d,scale:r+(1-r)*d,blur:a*(1-d),ty:c*(1-d)}},zl=s=>{if(s<=.001)return;const n=`linear-gradient(to bottom, rgba(0,0,0,1) 62%, rgba(0,0,0,${Math.max(0,1-.8*s).toFixed(3)}) 100%)`;return{maskImage:n,WebkitMaskImage:n}},sn=(s,e=22,n=0)=>s>=.999?{opacity:1}:{opacity:s,translate:`0 ${(1-s)*e}px`,...n>0?{filter:`blur(${(1-s)*n}px)`}:{}},vE=({scrollProgress:s,gazeLabel:e})=>{const n=1-$r(s,0,.2),r=1-$r(s,.04,.28);return n<=.02&&r<=.02?null:A.jsxs(A.Fragment,{children:[A.jsx("div",{className:"fixed top-[68px] right-4 pointer-events-none z-30 sm:hidden",style:{opacity:n},children:A.jsxs("span",{"data-gaze-line":!0,className:"font-mono text-[9px] uppercase tracking-[0.2em] text-[#1A1C1E]/45 tabular-nums",children:["Gaze — ",e]})}),A.jsx("div",{className:"fixed inset-x-0 top-20 px-6 md:px-12 pointer-events-none z-30 hidden sm:block",children:A.jsxs("div",{className:"flex justify-between items-start text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#1A1C1E]/70",children:[A.jsxs("div",{className:"flex flex-col items-start gap-1.5",style:{opacity:n},children:[A.jsxs("div",{className:"flex items-center space-x-2",children:[A.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#F5B81E] inline-block animate-pulse"}),A.jsx("span",{children:"Websites · Motion · AI Visuals"})]}),A.jsxs("span",{"data-gaze-line":!0,className:"text-[9px] tracking-[0.2em] text-[#1A1C1E]/45 tabular-nums",children:["Gaze — ",e]})]}),A.jsxs("div",{className:"flex items-center space-x-2",style:{opacity:r},children:[A.jsx("span",{children:"Gorakhpur, India"}),A.jsx("span",{className:"text-[#1A1C1E]/30",children:"|"}),A.jsx("span",{className:"text-[#1A1C1E]/50",children:"Available for Craft"})]})]})})]})},St=s=>("./".endsWith("/")?"./":".//")+s.replace(/^\/+/,""),_E=St("assets/hero-alpha2.webm"),ed=St("assets/hero-poster2.webp"),ks=7.93,hg=.12,xE=.18,td=[[0,1],[45,2],[90,3],[135,3.9],[180,4.5],[225,5.5],[270,6.25],[315,7],[360,1+ks]],yE=["RIGHT","UP-RIGHT","UP","UP-LEFT","LEFT","DOWN-LEFT","DOWN","DOWN-RIGHT"];function Pm(s,e){if(Math.hypot(s,e)<hg)return 0;const r=(Math.atan2(-e,s)*180/Math.PI+360)%360;for(let a=0;a<td.length-1;a++){const[c,d]=td[a],[f,p]=td[a+1];if(r>=c&&r<=f)return d+(r-c)/(f-c)*(p-d)}return 0}const Nm=[[0,0,"FRONT"],[-.85,0,"LEFT"],[-.6,-.6,"UP-LEFT"],[0,0,"FRONT"],[.85,0,"RIGHT"],[0,.85,"DOWN"],[0,0,"FRONT"]],SE=2e3,ME=2500,EE=5e3,wE=({boxRef:s,onLabel:e,active:n=!0,mediaClassName:r=""})=>{const a=nt.useRef(null),c=nt.useRef(null),[d,f]=nt.useState("pending"),[p,m]=nt.useState("FRONT"),[v,x]=nt.useState(!1),y=nt.useRef(n);return nt.useEffect(()=>{y.current=n},[n]),nt.useEffect(()=>{e==null||e(p)},[p,e]),nt.useEffect(()=>{const S=s.current,w=a.current;if(!S||!w)return;const b=window.matchMedia("(prefers-reduced-motion: reduce)").matches,_=window.matchMedia("(pointer: coarse)").matches;b&&f("still");let g=!1,D=0,P=0,N=0,Z=0,k=0,I=0,q=0,me=!1,E=performance.now(),R=ME,V=!1,j=0,$=0;const ae=G=>{V!==G&&(V=G,x(G))},J=()=>{try{const G=document.createElement("canvas");G.width=w.videoWidth||1152,G.height=w.videoHeight||1560;const ce=G.getContext("2d");if(!ce)return!1;ce.drawImage(w,0,0);const ge=ce.getImageData(Math.floor(G.width/2),2,1,1).data,xe=ce.getImageData(Math.floor(G.width/2),Math.floor(G.height/2),1,1).data;return ge[3]<128&&xe[3]>128}catch{return!1}},le=()=>{if(g)return;if(me=w.canPlayType('video/webm; codecs="vp9"')!==""&&J(),f(me?"video":"still"),me){w.pause();try{w.currentTime=0}catch{}}};b||(w.readyState>=2?le():w.addEventListener("loadeddata",le,{once:!0}),w.addEventListener("error",()=>!g&&f("still"),{once:!0}));const O=(G,ce)=>{const ge=S.getBoundingClientRect(),xe=ge.left+ge.width/2,Ne=ge.top+ge.height/2,Ae=Math.max(-1,Math.min(1,(G-xe)/(window.innerWidth*.5))),qe=Math.max(-1,Math.min(1,(ce-Ne)/(window.innerHeight*.5)));if(P=Pm(Ae,qe),I=Ae*6,q=qe*4,Math.hypot(Ae,qe)>=hg){const ht=(Math.atan2(-qe,Ae)*180/Math.PI+360)%360;m(yE[Math.round(ht/45)%8])}else m("FRONT")},de=()=>{E=performance.now(),R=EE,ae(!1)},se=G=>{O(G.clientX,G.clientY),de()},F=G=>{_&&(O(G.clientX,G.clientY),de())},ne=()=>{P=0,I=0,q=0,m("FRONT")};window.addEventListener("pointermove",se,{passive:!0}),window.addEventListener("pointerdown",F,{passive:!0}),document.documentElement.addEventListener("mouseleave",ne),window.addEventListener("blur",ne);const Re=()=>{if(!g){if(_&&!b&&y.current&&!document.hidden&&performance.now()-E>R){V||(ae(!0),j=0,$=0);const G=performance.now();if(G>=$){const[ce,ge,xe]=Nm[j%Nm.length];P=Pm(ce,ge),I=ce*6,q=ge*4,m(xe),j+=1,$=G+SE}}else V&&ae(!1);if(me){let G=P-N;if(N>.05&&(G-=ks*Math.round(G/ks)),Math.abs(G)>.001&&(N=((N+G*xE)%ks+ks)%ks),!w.seeking&&Math.abs(w.currentTime-N)>.1)try{w.currentTime=N}catch{}}else if(c.current){Z+=(I-Z)*.12,k+=(q-k)*.12;const G=Z/6*1.5;c.current.style.transform=`translate(${Z.toFixed(1)}px, ${k.toFixed(1)}px) rotate(${G.toFixed(2)}deg)`}D=requestAnimationFrame(Re)}};return D=requestAnimationFrame(Re),()=>{g=!0,cancelAnimationFrame(D),w.removeEventListener("loadeddata",le),window.removeEventListener("pointermove",se),window.removeEventListener("pointerdown",F),document.documentElement.removeEventListener("mouseleave",ne),window.removeEventListener("blur",ne)}},[s]),A.jsx("div",{className:"relative w-full h-full","data-gaze":p,"data-mode":d,"data-tour":v?"on":"off",role:"img","aria-label":"Animated character whose gaze follows your cursor in every direction",children:d==="still"?A.jsx("span",{ref:c,className:"block w-full h-full will-change-transform",children:A.jsx("img",{className:r,src:ed,alt:"",width:1152,height:1560,draggable:!1})}):A.jsxs(A.Fragment,{children:[A.jsx("img",{className:`${r} absolute inset-0`,src:ed,alt:"",width:1152,height:1560,draggable:!1,"aria-hidden":"true"}),A.jsx("video",{ref:a,className:`${r} absolute inset-0`,style:{opacity:d==="video"?1:0,transition:"opacity 200ms ease-out"},src:_E,poster:ed,width:1152,height:1560,muted:!0,playsInline:!0,preload:"auto",disablePictureInPicture:!0})]})})},TE=St("assets/hero-poster2.webp"),AE=({sourceRef:s,className:e=""})=>{const n=nt.useRef(null);return nt.useEffect(()=>{const r=n.current,a=s.current;if(!r||!a)return;const c=r.getContext("2d");if(!c)return;const d=new Image;d.src=TE;const f=()=>a.querySelector("video")??a.querySelector("img"),p=()=>{const g=f();return g?g instanceof HTMLVideoElement?g.readyState>=2?`v:${g.currentTime.toFixed(2)}`:"v:poster":`i:${g.src}`:"none"},m=()=>{const g=f();return g instanceof HTMLVideoElement?g.readyState>=2&&g.videoWidth>0?g:d.complete&&d.naturalWidth>0?d:null:g instanceof HTMLImageElement?g.complete&&g.naturalWidth>0?g:null:d.complete&&d.naturalWidth>0?d:null},v=g=>g instanceof HTMLVideoElement?g.videoWidth>0?{w:g.videoWidth,h:g.videoHeight}:null:g instanceof HTMLImageElement&&g.naturalWidth>0?{w:g.naturalWidth,h:g.naturalHeight}:null;let x=0,y=!1,S="";const w=()=>{const g=m();if(!g)return;const D=v(g);if(!D)return;const P=r.clientWidth,N=r.clientHeight;if(P<2||N<2)return;const Z=Math.min(window.devicePixelRatio||1,2),k=Math.round(P*Z),I=Math.round(N*Z);(r.width!==k||r.height!==I)&&(r.width=k,r.height=I);const q=Math.min(k/D.w,I/D.h),me=D.w*q,E=D.h*q;c.clearRect(0,0,k,I),c.drawImage(g,(k-me)/2,(I-E)/2,me,E),S=p()},b=()=>{y||(!document.hidden&&p()!==S&&w(),x=requestAnimationFrame(b))};w(),x=requestAnimationFrame(b),d.addEventListener("load",w);const _=new MutationObserver(w);return _.observe(a,{childList:!0,subtree:!0}),()=>{y=!0,cancelAnimationFrame(x),_.disconnect(),d.removeEventListener("load",w)}},[s]),A.jsx("canvas",{ref:n,className:e,"aria-hidden":"true"})},CE=({onExploreWork:s,scrollProgress:e,onGazeLabel:n})=>{const r=nt.useRef(null),a=e,c=1-$r(a,.12,.23),d=1-$r(a,0,.05),f=1-He(a,.03,.17),p=1-He(a,.06,.2),m=He(a,.004,.058),v=1-He(a,.04,.065),x=1-He(a,.004,.048),y=2.5*He(a,.004,.015)*(1-He(a,.015,.026)),S=He(a,.055,.2);return a>=.235?null:A.jsxs("section",{className:"fixed inset-0 z-10 w-full flex flex-col justify-between items-center select-none overflow-hidden",style:{opacity:c,transform:`translateY(${(-55*S).toFixed(2)}vh)`,pointerEvents:a>=.16?"none":"auto"},children:[A.jsx("div",{"data-standing-word":!0,"aria-hidden":"true",className:"p3-load-word absolute inset-x-0 z-10 pointer-events-none select-none",style:{top:"64vh"},children:A.jsxs("div",{className:"relative h-0 animate-rockbob",style:{fontSize:"max(17.5vw, 28vh)"},children:[A.jsxs("div",{className:"absolute inset-x-0 top-0 h-0",children:[A.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 w-[68%] h-[26px] rounded-[100%]",style:{top:"-13px",background:"radial-gradient(ellipse at center, rgba(24,32,40,0.38) 0%, rgba(24,32,40,0.13) 55%, transparent 72%)",filter:"blur(5px)",opacity:x}}),A.jsx("div",{className:"absolute inset-x-0",style:{top:"-0.72em",height:"1.44em",transform:`translateY(${(5*m).toFixed(1)}px)`},children:A.jsx("div",{"data-standing-reflection":!0,className:"absolute inset-0",style:{transform:`scaleY(${(-.55-.35*m).toFixed(3)})`,filter:"url(#waterRippleDistort) blur(1.2px) brightness(0.94) contrast(0.92)",opacity:.34*x,maskImage:"linear-gradient(to top, transparent 0%, rgba(0,0,0,0.65) 50%, transparent 98%)",WebkitMaskImage:"linear-gradient(to top, transparent 0%, rgba(0,0,0,0.65) 50%, transparent 98%)"},children:A.jsx("span",{className:"absolute inset-x-0 text-center font-rock font-semibold uppercase leading-[0.78] tracking-[0.03em] bg-gradient-to-b from-[#96A8B4] via-[#687B88] to-[#3C4C57] bg-clip-text text-transparent",style:{top:"0.72em",transform:"translateY(-100%) translateY(0.04em)"},children:"ASHFAN"})})})]}),A.jsx("div",{className:"absolute inset-x-0 top-0 h-0",style:{transform:`translateY(calc(${(-46*m).toFixed(2)}vh + ${y.toFixed(2)}px))`,opacity:v},children:A.jsx("span",{"data-standing-letters":!0,className:"absolute inset-x-0 text-center font-rock font-semibold uppercase leading-[0.78] tracking-[0.03em] bg-gradient-to-b from-[#96A8B4] via-[#687B88] to-[#3C4C57] bg-clip-text text-transparent",style:{bottom:"-0.04em",filter:"drop-shadow(0 3px 2px rgba(24,34,42,0.30))"},children:"ASHFAN"})})]})}),A.jsx("div",{className:"h-28 w-full"}),A.jsxs("div",{className:"p3-load-stage relative z-20 flex flex-col items-center justify-center my-auto",children:[A.jsx("div",{className:"p3-figure-sink",children:A.jsx("div",{className:"relative",style:{opacity:f,translate:`0 ${(1-f)*-18}px`},children:A.jsxs("div",{ref:r,className:"relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 origin-bottom scale-[1.28] sm:scale-[1.32] md:scale-[1.34]",children:[A.jsx("div",{className:"absolute inset-0 rounded-full bg-white/20 filter blur-xl scale-95 pointer-events-none"}),A.jsx(wE,{boxRef:r,onLabel:n,active:a<=.12,mediaClassName:"w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(26,28,30,0.18)]"}),A.jsx("div",{"aria-hidden":"true","data-contact-line":!0,className:"p3-line-top absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[26px] rounded-[100%] pointer-events-none",style:{background:"radial-gradient(ellipse at center, rgba(10,16,22,0.26) 0%, rgba(10,16,22,0.10) 55%, transparent 72%)",filter:"blur(8px)"}}),A.jsx("div",{"data-figure-reflection":!0,className:"p3-reflection-line absolute inset-x-0 pointer-events-none overflow-hidden opacity-45",style:{transform:"scaleY(-0.9)",filter:"url(#waterRippleDistort) blur(1.5px) contrast(0.85) brightness(0.9)",maskImage:"linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)",WebkitMaskImage:"linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)"},children:A.jsx(AE,{sourceRef:r,className:"w-full h-full filter saturate-75 opacity-70"})}),A.jsx("div",{className:"p3-line-top absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-6 rounded-full border border-white/40 scale-x-125 filter blur-[1px] animate-ripple pointer-events-none"})]})})}),A.jsx("div",{className:"p3-copy-sink p3-load-copy w-full",children:A.jsxs("div",{className:"mt-5 text-center w-full max-w-[320px] sm:max-w-xl px-2 sm:px-6 relative z-20 mx-auto",style:{opacity:p,translate:`0 ${(1-p)*-12}px`},children:[A.jsx("p",{className:"font-mono text-[9px] sm:text-xs uppercase tracking-[0.2em] text-[#1A1C1E]/60 mb-2",children:"The Shoreline · Personal Portfolio"}),A.jsxs("h1",{className:"font-serif text-xl sm:text-3xl md:text-5xl font-normal tracking-tight text-[#1A1C1E] leading-snug",children:["Crafting digital products, motion narratives, & ",A.jsx("span",{className:"italic text-[#9A7208]",children:"tactile WebGL"})," worlds."]}),A.jsx("p",{className:"mt-2.5 text-[11px] sm:text-sm text-[#1A1C1E]/75 max-w-[280px] sm:max-w-md mx-auto font-sans font-light leading-relaxed",children:"Independent creative developer and motion director based in Gorakhpur, India. A continuous journey across real work."}),A.jsxs("div",{className:"mt-5 flex flex-row items-center justify-center gap-2.5 sm:gap-3",children:[A.jsxs("button",{onClick:s,className:"group px-4 sm:px-7 py-2 sm:py-3 rounded-full bg-[#1A1C1E] text-white text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-[0.16em] font-medium hover:bg-[#F5B81E] hover:text-[#1A1C1E] transition-all duration-300 shadow-md hover:shadow-lg flex items-center space-x-1.5 sm:space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A7208]",children:[A.jsx("span",{children:"See the Work"}),A.jsx("svg",{className:"w-3 sm:w-3.5 h-3 sm:h-3.5 transform group-hover:translate-x-1 transition-transform",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",children:A.jsx("path",{d:"M3 8h10M9 4l4 4-4 4",strokeLinecap:"round",strokeLinejoin:"round"})})]}),A.jsx("a",{href:"#about",className:"px-3.5 sm:px-6 py-2 sm:py-3 rounded-full border border-[#1A1C1E]/20 text-[#1A1C1E] text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-[0.16em] hover:bg-white/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1C1E]",children:"The Story"})]})]})})]}),A.jsxs("div",{className:"h-[103px] w-full flex flex-col items-center justify-end pb-[10px] pointer-events-none z-20",style:{opacity:d},"data-scroll-cue":!0,children:[A.jsx("span",{className:"text-[10px] font-mono uppercase tracking-[0.3em] text-[#1A1C1E]/55",children:"Scroll"}),A.jsx("div",{className:"mt-1.5 w-px h-[38px] bg-gradient-to-b from-[#1A1C1E]/45 to-[#1A1C1E]/10"}),A.jsx("div",{className:"p3-cue-ring","aria-hidden":"true"})]})]})},zo=[{id:"cutlab",number:"01",title:"CutLab",tagline:"Precision motion curation & frame-accurate editorial pacing.",category:"Motion Platform & Creative Tool",year:"2026",tintColor:"#2B394A",image:St("assets/evidence/cover-cutlab.webp"),gallery:[St("assets/evidence/gallery-cutlab-1.webp"),St("assets/evidence/gallery-cutlab-2.webp"),St("assets/evidence/gallery-cutlab-3.webp")],sections:{problem:"Most editors keep their best tools UI-only — nothing can drive them but a hand on a mouse, so automation stops at the glass.",build:"A browser editor on a Supabase relay: media sits in a private bucket, originals never leave the user’s machine, and the full engine — 96+ tools — is exposed over MCP.",result:"100% of the engine is agent-callable, zero UI-only features. The repo is public and the editor is live."},role:"Design & Build",scope:"Browser editor · MCP server",liveUrl:"https://ashfanansari.github.io/cutlab-x9p7/",status:"Live",overview:"A browser video editor whose whole engine is callable by agents — no feature lives only behind a button.",highlights:["100% of the engine is agent-callable — 96+ MCP tools, zero UI-only features","Private relay: project media in a private bucket, originals stay on your machine","Users connect a chat, never an API key"],stack:["React","TypeScript","Supabase","MCP","Tailwind CSS"],clientOrContext:"Independent Motion & Web Product"},{id:"our-study-home",number:"02",title:"Our Study Home",tagline:"NEET revision workspace, focus planner, and paired study companion.",category:"Product & Web App",year:"2026",tintColor:"#364B44",image:St("assets/evidence/cover-our-study-home.webp"),gallery:[St("assets/evidence/gallery-our-study-home-1.webp"),St("assets/evidence/gallery-our-study-home-2.webp"),St("assets/evidence/gallery-our-study-home-3.webp")],sections:{problem:"Two NEET droppers revising one syllabus with no shared view of the plan — progress lived in two heads and drifted apart.",build:"A paired planner with hard rules: Day 1 is the account-creation day, the first pass ends 20 Jan 2027 behind a 15-day buffer. Mochi keeps company; blade auth and the mono room redesign keep it calm.",result:"Live, and in daily use by both study partners."},role:"Design & Build",scope:"Web app · Supabase",liveUrl:"https://ashfanansari.github.io/our-study-home",status:"Live",overview:"A focused, distraction-free study environment tailored for intensive competitive exam preparation. Features real-time pair synchronization, daily syllabus planner, the interactive Mochi study buddy, and mono architectural redesign.",highlights:["Paired real-time study timer and sync status for mutual accountability.","Syllabus tracker with spaced-repetition revision cycles.","Minimalist monochrome aesthetic designed to prevent cognitive fatigue."],stack:["React","Tailwind CSS","Vite","Supabase Realtime"],clientOrContext:"Personal Flagship NEET Platform"},{id:"duostudy",number:"03",title:"DuoStudy",tagline:"Next-gen collaborative revision room with ambient audio & synchronized notes.",category:"Web Experience & Workspace",year:"2026",tintColor:"#223843",image:St("assets/evidence/cover-duostudy.webp"),gallery:[St("assets/evidence/gallery-duostudy-1.webp"),St("assets/evidence/gallery-duostudy-2.webp"),St("assets/evidence/gallery-duostudy-3.webp")],sections:{problem:"Our Study Home works, but its mono room is all business. Could the same paired discipline feel softer without losing the shared view?",build:"A liquid-glass revision room: one shared NEET countdown, Your Desk / Her’s Desk kept in live sync, and a study stopwatch that logs sessions against both profiles.",result:"Live as the calmer companion — same plan discipline, gentler surface."},role:"Design & Build",scope:"Web app · paired sync",liveUrl:"https://ashfanansari.github.io/duostudy/",status:"Live",overview:"The successor companion to Our Study Home, DuoStudy experiments with soft tactile surfaces, ambient study sounds, interactive flashcard stacks, and frictionless note synchronization.",highlights:["Tactile card decks with keyboard-driven review flow.","Integrated ambient soundscapes for deep concentration.","Instant session sharing without complex authentication barriers."],stack:["React","TypeScript","Tailwind CSS","Web Audio API"],clientOrContext:"Collaborative Learning Suite"},{id:"aerix-volt",number:"04",title:"AERIX Volt",tagline:"High-performance electric footwear showcase with 3D breakout mechanics.",category:"Interactive E-Commerce & WebGL",year:"2026",tintColor:"#4A3420",image:St("assets/evidence/cover-aerix-volt.webp"),gallery:[St("assets/evidence/gallery-aerix-1.webp"),St("assets/evidence/gallery-aerix-2.webp"),St("assets/evidence/gallery-aerix-3.webp")],sections:{problem:"A footwear concept a flat grid of photos couldn’t sell — the shoe needed to move like a product film, not sit in a catalogue.",build:"A slider built natively in FigCraft: four colourways of the Dark Volt silhouette, breakout hero tiles, and scroll-linked camera moves across the breakout.",result:"An interactive showcase — the colourway system and the breakout mechanics carry the whole page."},role:"Design & Build",scope:"Interactive showcase · FigCraft",status:"Interactive Showcase",overview:"An editorial product experience built around the Dark Volt silhouette. Features 4 distinct colorways across multiple camera angles, drag-to-rotate breakout hero tiles, and smooth scroll-linked zoom dynamics.",highlights:["Tile-breaking hero animation with cursor parallax perspective.","Dynamic colorway switcher updating shadows and lighting in real time.","High-resolution multi-angle photography pipeline integration."],stack:["React","Three.js / WebGL","Tailwind CSS","Motion"],clientOrContext:"Concept Product Showcase"},{id:"this-website",number:"05",title:"The Journey",tagline:"One continuous sky-over-water scroll journey.",category:"Creative Dev & WebGL Experience",year:"2026",tintColor:"#1A1C1E",image:St("assets/evidence/cover-this-website.webp"),gallery:[St("assets/evidence/gallery-this-website-1.webp"),St("assets/evidence/gallery-this-website-2.webp"),St("assets/evidence/gallery-this-website-3.webp")],sections:{problem:"Portfolios are stacked boxes. This one had to feel like a single place you travel through, not a page you read.",build:"One continuous sky-over-water world on an 1150vh track: travel capped at 0.12/s so a hard scroll can’t skip a place, a name-first hero exit, and a mooring that spends scroll turning the projects carousel.",result:"This site — a five-stop atmosphere arc from pale morning to black-and-gold, every place staged on its own scroll windows."},role:"Design & Build",scope:"WebGL scroll experience",liveUrl:"#top",status:"Living Experiment",overview:"This living portfolio. One world instead of stacked boxes: a gaze avatar performed as one video — he follows your cursor; on touch, he follows your tap and looks around on his own — over a custom water shader.",highlights:["Custom WebGL water shader with dynamic sunlight specular glint & caustics.","Scroll is spent turning the carousel before the page moves on — the mooring","Full 5-stop ambient color progression from dawn haze to obsidian Kryntix night."],stack:["Vite","React 18","TypeScript","Three.js / GLSL","Tailwind CSS"],clientOrContext:"Ashfan Personal Portfolio Flagship"}],bE=({scrollProgress:s,onSelectProject:e,onActiveProjectChange:n,onToggleFullIndex:r,isFullIndexOpen:a})=>{const[c,d]=nt.useState(0),[f,p]=nt.useState(!1),m=nt.useRef(0),v=nt.useRef(0),x=nt.useRef(null),y=nt.useRef(0),S=nt.useRef(null),w=zo.length,b=(Math.round(c)%w+w)%w,_=zo[b];nt.useEffect(()=>{_&&n(_.tintColor)},[b,_,n]),nt.useEffect(()=>{if(s>=.22&&s<=.5&&!f){if(S.current){if(Math.abs(s-S.current.progress)<.002)return;S.current=null}const V=(s-.22)/(.5-.22),$=V*V*V*(V*(V*6-15)+10)*(w-1);d($)}},[s,w,f]),nt.useEffect(()=>{const V=j=>{a||(j.key==="ArrowRight"?d($=>Math.round($)+1):j.key==="ArrowLeft"&&d($=>Math.round($)-1))};return window.addEventListener("keydown",V),()=>window.removeEventListener("keydown",V)},[a]);const g=(V,j=0)=>{p(!0),m.current=V,v.current=c,x.current={x:V,y:j},y.current=0},D=nt.useCallback((V,j=0)=>{if(x.current){const J=V-x.current.x,le=j-x.current.y;y.current=Math.max(y.current,Math.hypot(J,le))}if(!f)return;const ae=-(V-m.current)/220;d(v.current+ae)},[f]),P=nt.useCallback(()=>{f&&(p(!1),d(V=>{const j=Math.round(V);return S.current={index:j,progress:s},j}))},[f,s]);nt.useEffect(()=>{const V=ae=>D(ae.clientX,ae.clientY),j=ae=>{ae.touches.length>0&&D(ae.touches[0].clientX,ae.touches[0].clientY)},$=()=>P();return f&&(window.addEventListener("mousemove",V),window.addEventListener("mouseup",$),window.addEventListener("touchmove",j),window.addEventListener("touchend",$),window.addEventListener("touchcancel",$)),()=>{window.removeEventListener("mousemove",V),window.removeEventListener("mouseup",$),window.removeEventListener("touchmove",j),window.removeEventListener("touchend",$),window.removeEventListener("touchcancel",$)}},[f,D,P]);const N=s;if(N<.105||N>.59)return null;const Z=Fl(mi.featured(N),gr.featured(N)),k=kl(N,.54,.585),I=Ol(N,.11,.17),q=Math.min(He(N,.17,.21),1-He(N,.5,.54)),me=He(N,.19,.3),E=Math.min(He(N,.23,.33),1-He(N,.5,.545)),R=He(N,.19,.3);return A.jsxs("section",{"data-place":"featured",className:"fixed inset-0 pointer-events-auto flex flex-col justify-between items-center py-20 px-4 z-20 select-none overflow-hidden",style:{opacity:Z,transform:`scale(${k.scale.toFixed(4)}) translateY(${k.ty.toFixed(1)}px)`},children:[A.jsxs("div",{"data-place-header":!0,className:"w-full max-w-6xl mx-auto flex justify-between items-center z-30 pt-4",style:{opacity:q,translate:`0 ${(1-q)*14}px`},children:[A.jsxs("div",{className:"flex items-center space-x-3",children:[A.jsx("span",{className:"text-[10px] font-mono uppercase tracking-[0.22em] text-[#1A1C1E]/60 bg-white/60 px-3 py-1 rounded-full border border-[#1A1C1E]/10 backdrop-blur-xs",children:"01 / Featured Passage"}),A.jsx("span",{className:"hidden sm:inline text-xs font-serif italic text-[#1A1C1E]/70",children:"Adrift on calm waters"})]}),A.jsxs("div",{className:"flex items-center bg-white/70 backdrop-blur-sm p-1 rounded-full border border-[#1A1C1E]/10 shadow-xs",children:[A.jsx("button",{onClick:()=>{a&&r()},className:`px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase transition-all ${a?"text-[#1A1C1E]/70 hover:text-[#1A1C1E]":"bg-[#1A1C1E] text-white shadow-xs"}`,children:"Featured (3D)"}),A.jsx("button",{onClick:()=>{a||r()},className:`px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase transition-all ${a?"bg-[#1A1C1E] text-white shadow-xs":"text-[#1A1C1E]/70 hover:text-[#1A1C1E]"}`,children:"Full Index"})]})]}),A.jsx("div",{className:"relative w-full max-w-5xl h-[460px] md:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing my-auto",onMouseDown:V=>g(V.clientX,V.clientY),onTouchStart:V=>{V.touches.length>0&&g(V.touches[0].clientX,V.touches[0].clientY)},style:{perspective:"1200px",opacity:me,transform:`scale(${(I.scale*(.965+.035*me)).toFixed(4)}) translateY(${I.ty.toFixed(1)}px)`,filter:I.blur>.01?`blur(${I.blur.toFixed(2)}px)`:void 0,touchAction:"pan-y",...zl(k.t)},children:zo.map((V,j)=>{let $=j-c;$=(($+w/2)%w+w)%w-w/2;const ae=$*(Math.PI*2/w),J=window.innerWidth<640?320:460,le=Math.sin(ae)*J,O=(Math.cos(ae)-1)*J*.9,de=$*-28,se=Math.abs($)<.45,F=Math.max(.15,Math.cos(ae)*1.1);return A.jsxs("div",{"data-card":V.id,"data-current":se?"true":void 0,onClick:()=>{if(!(y.current>6))if(se)e(V);else{const ne=Math.round(c+$);S.current={index:ne,progress:s},d(ne)}},className:"world-lit absolute w-[78vw] sm:w-[350px] md:w-[400px] rounded-2xl bg-white/90 backdrop-blur-md border border-[#1A1C1E]/10 p-5 transition-all duration-150 ease-out select-none",style:{transform:`translateX(${le}px) translateZ(${O}px) rotateY(${de}deg) scale(${se?1.04:.92})`,opacity:F,zIndex:Math.round(100+O),cursor:"pointer",touchAction:"pan-y"},children:[A.jsxs("div",{className:"relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#1A1C1E]/5 mb-4 group",children:[A.jsx("img",{src:V.image,alt:V.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",draggable:!1,loading:"lazy",decoding:"async"}),A.jsx("div",{className:"absolute top-3 left-3 px-2 py-0.5 rounded-full bg-[#1A1C1E]/80 text-white font-mono text-[9px] tracking-widest backdrop-blur-xs",children:V.number}),A.jsx("div",{className:"absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-white/90 text-[#1A1C1E] font-mono text-[9px] tracking-wider uppercase backdrop-blur-xs",children:V.category.split(" ")[0]})]}),A.jsxs("div",{className:"flex items-baseline justify-between",children:[A.jsx("h3",{className:"font-serif text-2xl font-normal text-[#1A1C1E] tracking-tight",children:V.title}),A.jsx("span",{className:"font-mono text-[10px] text-[#1A1C1E]/50 tabular-nums",children:V.year})]}),A.jsx("p",{className:"mt-1 text-xs text-[#1A1C1E]/70 line-clamp-2 font-sans font-light leading-relaxed",children:V.tagline}),se&&A.jsxs("div",{className:"mt-4 pt-3 border-t border-[#1A1C1E]/10 flex items-center justify-between",children:[A.jsxs("span",{className:"text-[10px] font-mono uppercase tracking-widest text-[#9A7208] font-medium flex items-center space-x-1",children:[A.jsx("span",{children:"Explore Case"}),A.jsx("span",{children:"→"})]}),A.jsx("span",{className:"text-[9px] font-mono uppercase text-[#1A1C1E]/40 tracking-wider",children:"Click to Open"})]}),se&&A.jsxs(A.Fragment,{children:[A.jsx("div",{"aria-hidden":"true",className:"contact-shadow absolute left-[9%] w-[82%] h-[24px]",style:{top:"calc(100% + 2px)",opacity:.9*R}}),A.jsx("div",{"aria-hidden":"true","data-reflection-for":V.id,className:"absolute inset-x-0 pointer-events-none overflow-hidden rounded-b-2xl",style:{top:"100%",height:"38%",opacity:.2,maskImage:"linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 88%)",WebkitMaskImage:"linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 88%)"},children:A.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:`url(${V.image})`,backgroundSize:"cover",backgroundPosition:"center bottom",transform:"scaleY(-1)",filter:"url(#waterRippleDistort)"}})})]})]},V.id)})}),A.jsxs("div",{className:"w-full max-w-md mx-auto flex items-center justify-between z-30 pb-4",style:{opacity:E,translate:`0 ${(1-E)*12}px`},children:[A.jsx("button",{onClick:()=>d(V=>{const j=Math.round(V)-1;return S.current={index:j,progress:s},j}),className:"p-2.5 rounded-full bg-white/80 hover:bg-white text-[#1A1C1E] border border-[#1A1C1E]/10 shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A7208]","aria-label":"Previous project",children:A.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:A.jsx("path",{d:"M15 18l-6-6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})})}),A.jsx("div",{className:"flex items-center space-x-2",children:zo.map((V,j)=>A.jsx("button",{onClick:()=>{const $=j-b;d(ae=>{const J=ae+$;return S.current={index:J,progress:s},J})},className:`transition-all duration-300 rounded-full ${j===b?"w-7 h-1.5 bg-[#F5B81E]":"w-1.5 h-1.5 bg-[#1A1C1E]/30 hover:bg-[#1A1C1E]/60"}`,"aria-label":`Go to project ${V.title}`},V.id))}),A.jsx("button",{onClick:()=>d(V=>{const j=Math.round(V)+1;return S.current={index:j,progress:s},j}),className:"p-2.5 rounded-full bg-white/80 hover:bg-white text-[#1A1C1E] border border-[#1A1C1E]/10 shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A7208]","aria-label":"Next project",children:A.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:A.jsx("path",{d:"M9 18l6-6-6-6",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})},RE=({project:s,onClose:e})=>(nt.useEffect(()=>{const n=r=>{r.key==="Escape"&&e()};return s&&(window.addEventListener("keydown",n),document.body.style.overflow="hidden"),()=>{window.removeEventListener("keydown",n),document.body.style.overflow=""}},[s,e]),s?A.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-auto",role:"dialog","aria-modal":"true","aria-labelledby":"modal-project-title",children:[A.jsx("div",{className:"absolute inset-0 bg-[#0A0A0C]/65 backdrop-blur-md transition-opacity duration-300",onClick:e}),A.jsxs("div",{className:"relative w-full max-w-4xl max-h-[90vh] bg-[#F7F8FA] rounded-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200",children:[A.jsxs("div",{className:"flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#1A1C1E]/10 bg-white/60 backdrop-blur-xs",children:[A.jsxs("div",{className:"flex items-center space-x-3",children:[A.jsx("span",{className:"font-mono text-xs text-[#9A7208] font-semibold tracking-widest",children:s.number}),A.jsx("span",{className:"text-[#1A1C1E]/20",children:"/"}),A.jsx("span",{className:"font-mono text-xs uppercase tracking-widest text-[#1A1C1E]/60",children:s.category})]}),A.jsx("button",{onClick:e,className:"p-2 rounded-full hover:bg-[#1A1C1E]/5 text-[#1A1C1E] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A7208]","aria-label":"Close Case Study",children:A.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:A.jsx("path",{d:"M18 6L6 18M6 6l12 12",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),A.jsxs("div",{className:"overflow-y-auto p-6 sm:p-8 space-y-8",children:[A.jsxs("div",{className:"relative w-full aspect-[21/9] sm:aspect-[2/1] rounded-2xl overflow-hidden bg-[#1A1C1E]/10 border border-[#1A1C1E]/5 shadow-inner",children:[A.jsx("img",{src:s.image,alt:s.title,className:"w-full h-full object-cover",loading:"lazy",decoding:"async"}),A.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6",children:A.jsxs("span",{className:"px-3 py-1 rounded-full bg-white/90 text-[#1A1C1E] font-mono text-[10px] uppercase tracking-widest",children:["Status: ",s.status]})})]}),A.jsx("div",{className:"flex gap-3 overflow-x-auto snap-x snap-mandatory pb-1","aria-label":`${s.title} evidence gallery`,children:s.gallery.map((n,r)=>A.jsx("img",{src:n,alt:`${s.title} — evidence ${r+1}`,loading:"lazy",decoding:"async",className:"h-36 sm:h-44 w-auto max-w-none shrink-0 rounded-xl object-cover snap-start border border-[#1A1C1E]/10 bg-[#1A1C1E]/5"},r))}),A.jsxs("div",{children:[A.jsx("h2",{id:"modal-project-title",className:"font-serif text-3xl sm:text-4xl text-[#1A1C1E] font-normal tracking-tight",children:s.title}),A.jsx("p",{className:"mt-2 text-base text-[#1A1C1E]/80 font-serif italic",children:s.tagline})]}),A.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-[#1A1C1E]/10",children:[A.jsxs("div",{className:"md:col-span-2 space-y-6",children:[A.jsxs("div",{className:"space-y-2",children:[A.jsx("h4",{className:"font-mono text-xs uppercase tracking-widest text-[#1A1C1E]/50",children:"The Problem"}),A.jsx("p",{className:"text-sm sm:text-base text-[#1A1C1E]/80 leading-relaxed font-sans",children:s.sections.problem})]}),A.jsxs("div",{className:"space-y-2",children:[A.jsx("h4",{className:"font-mono text-xs uppercase tracking-widest text-[#1A1C1E]/50",children:"The Build"}),A.jsx("p",{className:"text-sm sm:text-base text-[#1A1C1E]/80 leading-relaxed font-sans",children:s.sections.build})]}),A.jsxs("div",{className:"space-y-2",children:[A.jsx("h4",{className:"font-mono text-xs uppercase tracking-widest text-[#1A1C1E]/50",children:"The Result"}),A.jsx("p",{className:"text-sm sm:text-base text-[#1A1C1E]/80 leading-relaxed font-sans",children:s.sections.result})]})]}),A.jsxs("div",{className:"space-y-6 md:border-l md:border-[#1A1C1E]/10 md:pl-6",children:[A.jsxs("div",{children:[A.jsx("h4",{className:"font-mono text-[10px] uppercase tracking-widest text-[#1A1C1E]/50 mb-1",children:"Context / Initiative"}),A.jsx("p",{className:"text-xs font-medium text-[#1A1C1E]",children:s.clientOrContext})]}),A.jsxs("div",{children:[A.jsx("h4",{className:"font-mono text-[10px] uppercase tracking-widest text-[#1A1C1E]/50 mb-1",children:"Year"}),A.jsx("p",{className:"text-xs font-mono text-[#1A1C1E] tabular-nums",children:s.year})]}),A.jsxs("div",{children:[A.jsx("h4",{className:"font-mono text-[10px] uppercase tracking-widest text-[#1A1C1E]/50 mb-1",children:"Role"}),A.jsx("p",{className:"text-xs font-medium text-[#1A1C1E]",children:s.role})]}),A.jsxs("div",{children:[A.jsx("h4",{className:"font-mono text-[10px] uppercase tracking-widest text-[#1A1C1E]/50 mb-1",children:"Scope"}),A.jsx("p",{className:"text-xs font-medium text-[#1A1C1E]",children:s.scope})]}),A.jsxs("div",{children:[A.jsx("h4",{className:"font-mono text-[10px] uppercase tracking-widest text-[#1A1C1E]/50 mb-2",children:"Technical Stack"}),A.jsx("div",{className:"flex flex-wrap gap-1.5",children:s.stack.map(n=>A.jsx("span",{className:"px-2 py-0.5 rounded-md bg-[#1A1C1E]/5 border border-[#1A1C1E]/10 text-[10px] font-mono text-[#1A1C1E]/80",children:n},n))})]}),s.liveUrl&&s.liveUrl!=="#top"&&A.jsx("div",{className:"pt-4",children:A.jsxs("a",{href:s.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-[#1A1C1E] text-white hover:bg-[#F5B81E] hover:text-[#1A1C1E] text-xs font-mono uppercase tracking-widest transition-colors shadow-sm",children:[A.jsx("span",{children:"Launch Live Site"}),A.jsx("svg",{className:"w-3.5 h-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:A.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3",strokeLinecap:"round",strokeLinejoin:"round"})})]})})]})]})]})]})]}):null),PE=({isOpen:s,onClose:e,onSelectProject:n})=>s?A.jsxs("div",{className:"fixed inset-0 z-50 bg-[#0A0A0C]/90 backdrop-blur-xl text-white flex flex-col p-6 sm:p-12 md:p-16 overflow-y-auto animate-in fade-in duration-200",role:"dialog","aria-modal":"true",children:[A.jsxs("div",{className:"w-full max-w-5xl mx-auto flex justify-between items-center pb-8 border-b border-white/10",children:[A.jsxs("div",{children:[A.jsx("span",{className:"font-mono text-xs text-[#F5B81E] tracking-widest uppercase",children:"Archive Index"}),A.jsx("h2",{className:"font-serif text-3xl sm:text-4xl font-normal mt-1",children:"All Projects & Experiments"})]}),A.jsx("button",{onClick:e,className:"p-3 rounded-full hover:bg-white/10 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B81E]","aria-label":"Close Index",children:A.jsx("svg",{className:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:A.jsx("path",{d:"M18 6L6 18M6 6l12 12",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),A.jsx("div",{className:"w-full max-w-5xl mx-auto divide-y divide-white/10 mt-6",children:zo.map(r=>A.jsxs("div",{onClick:()=>{e(),n(r)},className:"group py-6 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:bg-white/[0.03] px-4 rounded-xl transition-colors",children:[A.jsxs("div",{className:"flex items-baseline space-x-6",children:[A.jsx("span",{className:"font-mono text-xs text-[#F5B81E] tracking-widest",children:r.number}),A.jsxs("div",{children:[A.jsx("h3",{className:"font-serif text-2xl group-hover:text-[#F5B81E] transition-colors",children:r.title}),A.jsx("p",{className:"text-xs text-white/50 font-sans mt-0.5",children:r.tagline})]})]}),A.jsxs("div",{className:"mt-3 md:mt-0 flex items-center space-x-6 text-xs font-mono text-white/60 tabular-nums",children:[A.jsx("span",{className:"hidden sm:inline uppercase tracking-widest",children:r.category}),A.jsx("span",{className:"text-white/40",children:r.year}),A.jsx("span",{className:"text-white/70 group-hover:text-white transition-colors",children:"View →"})]})]},r.id))})]}):null,Lm=[{id:"infography",name:"InfoGraphy",handle:"@InfoGraphy",tagline:"Data visualization & deep motion essays.",description:"‘Ek Sawal’ — one irresistible question per Short: tech, science and current affairs, explained with motion graphics.",genre:"Tech & Science Shorts",url:"https://www.youtube.com/channel/UCFy7kD_6Z0luge4mAO9QB7w",statsLabel:"Format — Ek Sawal Shorts",coverImage:St("assets/evidence/cover-infography.webp"),avatar:St("assets/evidence/avatar-infography.webp"),accent:"#D4851F"},{id:"pixelnest",name:"PixelNest",handle:"@PixelNest",tagline:"A cozy corner for all things anime.",description:"Anime moral stories and short tales in a cozy corner of the internet — new stories Wed, Fri and Sun.",genre:"Anime Stories & Shorts",url:"https://www.youtube.com/shorts/T8m9EYiRHJw",statsLabel:"Series — Umbrella Boy",coverImage:St("assets/evidence/cover-pixelnest.webp"),avatar:St("assets/channel-avatar-3d.webp"),accent:"#4A6984"},{id:"mili-toons",name:"Mili Toons",handle:"@MiliToons",tagline:"Animated storytelling & character shorts.",description:"Bite-sized animated narratives exploring whimsical human situations, emotional warmth, and character keyframing.",genre:"Character Animation & Shorts",url:"https://www.youtube.com/channel/UCt_ZVOzqJMUjNHm4ykDXRvA",statsLabel:"Format — Human-Mili stories",coverImage:St("assets/evidence/cover-mili-toons.webp"),avatar:St("assets/evidence/avatar-mili-toons.webp"),accent:"#8CA381"},{id:"unsaid",name:"Unsaid",handle:"@Unsaid2D",tagline:"Raw emotional visual narratives & sepia saga.",description:"Intimate visual shorts, heartfelt character vignettes, and nostalgic monochrome illustration reels.",genre:"2D Narrative & Sepia Reels",url:"https://www.youtube.com/@Unsaid2D",statsLabel:"Series — Sepia reels",coverImage:St("assets/evidence/cover-unsaid.webp"),avatar:St("assets/evidence/cover-unsaid.webp"),accent:"#A65B32"}],NE=({scrollProgress:s})=>{const e=s;if(e<.5||e>.69)return null;const n=Fl(mi.channels(e),gr.channels(e)),r=kl(e,.655,.685),a=Ol(e,.54,.615),c=Math.min(He(e,.585,.625),1-He(e,.625,.655)),d=Math.min(He(e,.6,.645),1-He(e,.63,.66)),f=He(e,.545,.575)*(1-He(e,.6,.63)),p=$r(e,.545,.615),m=[{left:"10%",top:"70%",size:36},{left:"33%",top:"66%",size:47},{left:"57%",top:"72%",size:58},{left:"79%",top:"67%",size:72}];return A.jsxs(A.Fragment,{children:[f>.001&&A.jsx("div",{"aria-hidden":"true",className:"fixed inset-0 pointer-events-none z-[15] overflow-hidden hidden sm:block",style:{opacity:f},children:Lm.map((v,x)=>{const y=m[x],S=[.5,.65,.8,1][x];return A.jsx("div",{"data-buoy":v.id,className:"absolute",style:{left:y.left,top:y.top,transform:`translateX(${(18*p).toFixed(1)}px)`},children:A.jsx("div",{className:"animate-buoybob rounded-full overflow-hidden border border-white/40",style:{width:y.size,height:y.size,filter:`blur(${((1-S)*4).toFixed(1)}px)`,boxShadow:"0 10px 22px rgba(8,12,16,0.30)",animationDuration:`${(3.6+x*.5).toFixed(1)}s`,animationDelay:`${(x*.6).toFixed(1)}s`},children:A.jsx("img",{src:v.avatar,alt:"",className:"w-full h-full object-cover",draggable:!1,loading:"lazy",decoding:"async"})})},v.id)})}),A.jsxs("section",{id:"channels","data-place":"channels",className:"fixed inset-0 pointer-events-auto flex flex-col justify-between items-center py-20 px-6 z-20 select-none overflow-hidden",style:{opacity:n,transform:`scale(${r.scale.toFixed(4)}) translateY(${r.ty.toFixed(1)}px)`},children:[A.jsxs("div",{"data-place-header":!0,className:"w-full max-w-6xl mx-auto flex justify-between items-baseline pt-4",style:sn(c,16),children:[A.jsxs("div",{children:[A.jsx("span",{className:"text-[10px] font-mono uppercase tracking-[0.22em] text-[#10181F]/70 bg-white/60 px-3 py-1 rounded-full border border-[#10181F]/10",children:"02 / Channels Drift"}),A.jsx("h2",{className:"place-h2 text-[#10181F] mt-3",children:"Independent Media & Animation Labs"})]}),A.jsx("span",{className:"hidden sm:inline text-xs font-mono text-[#10181F]/60 tracking-wider",children:"FLOATING ADRIFT"})]}),A.jsx("div",{className:"w-full max-w-6xl mx-auto",style:{transform:`scale(${a.scale.toFixed(4)}) translateY(${a.ty.toFixed(1)}px)`,filter:a.blur>.01?`blur(${a.blur.toFixed(2)}px)`:void 0,...zl(r.t)},children:A.jsx("div",{"data-channel-strip":!0,className:"flex gap-5 overflow-x-auto snap-x snap-mandatory overscroll-x-contain pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible sm:pb-0",children:Lm.map((v,x)=>{const y=He(e,.56+x*.01,.61+x*.01);return A.jsxs("div",{className:"relative flex-none w-[82vw] snap-center sm:w-auto",children:[A.jsx("div",{"aria-hidden":"true",className:"contact-shadow absolute left-[9%] w-[82%] h-[22px]",style:{top:"calc(100% + 4px)",opacity:.9*y}}),A.jsxs("div",{"data-screen":v.id,className:"world-lit relative rounded-[18px] border border-white/10 p-3 flex flex-col",style:{backgroundColor:"rgba(9,13,17,0.86)",animation:"float 7s ease-in-out infinite",animationDelay:`${x*.7}s`,...sn(y,26,5)},children:[A.jsxs("div",{className:"relative aspect-video w-full rounded-[10px] overflow-hidden bg-black/40",children:[A.jsx("img",{src:v.coverImage,alt:v.name,className:"w-full h-full object-cover",draggable:!1,loading:"lazy",decoding:"async"}),A.jsx("div",{className:"absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/70 text-white font-mono text-[9px] tracking-widest",children:v.handle})]}),A.jsx("div",{"aria-hidden":"true","data-reflection-for":v.id,className:"w-full aspect-[16/3.4] pointer-events-none overflow-hidden",style:{opacity:.2,maskImage:"linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 88%)",WebkitMaskImage:"linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 88%)"},children:A.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:`url(${v.coverImage})`,backgroundSize:"cover",backgroundPosition:"center bottom",transform:"scaleY(-1)",filter:"url(#waterRippleDistort)"}})}),A.jsx("h3",{className:"font-serif text-[22px] leading-tight font-normal text-[#EDF2F5] tracking-tight mt-1",children:v.name}),A.jsx("p",{className:"font-mono text-[9px] uppercase tracking-wider text-white/40 mt-0.5",children:v.genre}),A.jsx("p",{className:"max-sm:hidden mt-1.5 text-[11px] text-white/60 line-clamp-2 leading-relaxed font-sans font-light",children:v.description}),A.jsxs("a",{href:v.url,target:"_blank",rel:"noopener noreferrer",className:"mt-3 pt-2.5 border-t border-white/10 flex items-center gap-2.5 group",children:[A.jsx("img",{src:v.avatar,alt:"",className:"w-7 h-7 rounded-full object-cover border border-white/20",draggable:!1,loading:"lazy",decoding:"async"}),A.jsxs("span",{className:"flex flex-col min-w-0",children:[A.jsx("span",{className:"font-mono text-[11px] text-white/85 leading-tight",children:v.handle}),A.jsx("span",{className:"font-mono text-[9px] uppercase tracking-wider text-white/45 leading-tight truncate",children:v.statsLabel})]}),A.jsxs("span",{className:"ml-auto flex items-center gap-2 shrink-0",children:[A.jsx("span",{className:"w-2 h-2 rounded-full bg-[#F5B81E]",style:{boxShadow:"0 0 8px rgba(245,184,30,0.8)"}}),A.jsx("svg",{className:"w-3.5 h-3.5 text-white/70 group-hover:text-[#F5B81E] transition-colors",viewBox:"0 0 24 24",fill:"currentColor",children:A.jsx("path",{d:"M8 5.5v13l11-6.5-11-6.5z"})})]})]})]})]},v.id)})})}),A.jsx("div",{className:"w-full max-w-6xl mx-auto flex justify-center pb-4 text-center",style:sn(d,10),children:A.jsx("p",{className:"text-[11px] font-mono uppercase tracking-[0.2em] text-[#10181F]/60",children:"Independent storytelling, frame timing & creative coding"})})]})]})},LE=[{id:"websites",num:"01",title:"Websites & WebGL",subtitle:"Living digital flagships and interactive frontends",description:"Bespoke web applications built with ruthless attention to craft, type scale, and spatial continuity. No generic templates, no AI slop.",deliverables:["Interactive Product Experiences & Portfolios","Custom WebGL / Three.js Shaders & 3D Stages","Fluid Micro-interactions & Tactile Physics","Accessible, High-Performance Vite & React Stacks"],tools:["React","TypeScript","Three.js / GLSL","Tailwind CSS","Framer Motion"]},{id:"motion",num:"02",title:"Motion Design & Direction",subtitle:"Kinetic typography, launch showreels & video essays",description:"Transforming technical products and abstract ideas into gripping visual stories with frame-by-frame pacing, custom audio sync, and refined editorial elegance.",deliverables:["Product Launch & Feature Reveal Videos","Kinetic Brand Typography & Visual Loops","Editorial Explainer Animations & Documentaries","Social Cutdowns & Vertical Story Reels"],tools:["After Effects","Premiere Pro","Blender","Photoshop","FigCraft"]},{id:"ai-visuals",num:"03",title:"AI Visuals & Neural Workflows",subtitle:"Character consistency, cinematic art direction & synthetic pipelines",description:"Harnessing frontier generative models with disciplined art direction. Multi-angle character consistency, high-resolution product cutouts, and hyper-curated art pipelines.",deliverables:["Consistent Multi-Pose Character References","Hyper-Detailed Concept Visuals & Mood Boards","Automated Masking, Upscaling & Retouching Pipelines","Brand Asset Generation with Precise Art Direction"],tools:["Midjourney","FLUX","ComfyUI","Photoshop Neural","Custom Python Tooling"]},{id:"creative-dev",num:"04",title:"Digital Experiences & Creative Dev",subtitle:"Interactive tools, 3D configurators & experimental software",description:"Prototyping playful, tactile digital tools that push browser capabilities. From custom colorway configurators to scroll-sequence product breakdowns.",deliverables:["3D Product Configurators & Material Viewers","Scroll-Driven Frame Sequences & Scrubbers","Custom Design Systems & Interactive Widgets","Novel Canvas Physics & Sensory Feedback Experiments"],tools:["Web Audio API","Canvas 2D / WebGL","Tailwind","Vite","Node.js"]}],DE=({scrollProgress:s})=>{const e=s;if(e<.61||e>.805)return null;const n=Fl(mi.services(e),gr.services(e)),r=kl(e,.775,.8),a=Ol(e,.655,.705,.95,2,24),c=Math.min(He(e,.69,.72),1-He(e,.75,.775)),d=Math.min(He(e,.72,.76),1-He(e,.76,.79)),f=He(e,.685,.72),p=x=>He(e,.657+x*.008,.682+x*.008),m=({i:x,cls:y=""})=>A.jsx("div",{"aria-hidden":"true",className:`h-px w-full ${y}`,style:{backgroundColor:"rgba(255,255,255,0.09)",transform:`scaleX(${p(x).toFixed(4)})`,transformOrigin:"left center"}}),v=x=>{const y=.028749999999999998,S=.685+x*y,w=S+y,b=He(e,S,Math.min(S+.012,w)),_=x<3?1-He(e,w,w+.012):1;return b*_};return A.jsxs("section",{id:"services","data-place":"services",className:"fixed inset-0 pointer-events-auto flex flex-col justify-between items-center py-20 px-6 z-20 select-none overflow-hidden",style:{opacity:n,transform:`scale(${r.scale.toFixed(4)}) translateY(${r.ty.toFixed(1)}px)`},children:[A.jsx("div",{className:"flex-1"}),A.jsxs("div",{className:"relative w-full max-w-6xl mx-auto",children:[A.jsx("div",{"aria-hidden":"true",className:"contact-shadow absolute left-[9%] w-[82%] h-[26px]",style:{top:"calc(100% + 4px)",opacity:.9*f}}),A.jsxs("div",{"data-plate":!0,className:"world-lit relative rounded-[22px] px-6 sm:px-10 py-7 sm:py-9",style:{backgroundColor:"rgba(34,48,60,0.94)",transform:`scale(${a.scale.toFixed(4)}) translateY(${a.ty.toFixed(1)}px)`,filter:a.blur>.01?`blur(${a.blur.toFixed(2)}px)`:void 0,...zl(r.t)},children:[A.jsx(m,{i:0}),A.jsxs("div",{"data-place-header":!0,className:"flex justify-between items-baseline pt-5 pb-2",style:sn(c,14),children:[A.jsxs("div",{children:[A.jsx("span",{className:"text-[10px] font-mono uppercase tracking-[0.22em] text-white/55 border border-white/15 bg-white/5 px-3 py-1 rounded-full",children:"03 / Services & Capabilities"}),A.jsx("h2",{className:"place-h2 text-[#EDF2F5] mt-3",children:"Discipline & Craftsmanship"})]}),A.jsx("span",{className:"hidden sm:inline text-xs font-mono text-white/40 tracking-wider",children:"THE CHART TABLE"})]}),A.jsx("div",{className:"max-sm:grid sm:block",children:LE.map((x,y)=>{const S=He(e,.685+y*.008,.72+y*.008);return A.jsxs("div",{className:"max-sm:col-start-1 max-sm:row-start-1 sm:contents max-sm:[opacity:var(--rowpo)]",style:{"--rowpo":v(y).toFixed(3)},children:[A.jsxs("div",{className:"grid grid-cols-[auto_1fr] sm:grid-cols-[64px_1fr_auto] gap-x-5 gap-y-1 items-baseline py-4 sm:py-5",style:sn(S,22,3),children:[A.jsx("span",{className:"font-mono text-sm text-[#F5B81E] font-medium tracking-widest",children:x.num}),A.jsxs("div",{className:"min-w-0",children:[A.jsx("h3",{className:"font-serif text-2xl sm:text-[2rem] leading-none font-normal text-[#EDF2F5] tracking-tight",children:x.title}),A.jsxs("p",{className:"mt-1.5 text-xs sm:text-[13px] text-white/60 font-sans font-light leading-relaxed",children:[A.jsxs("span",{className:"font-serif italic text-white/75",children:[x.subtitle,"."]})," ",x.description]}),A.jsx("p",{className:"mt-1.5 font-mono text-[9px] uppercase tracking-wider text-white/35",children:x.tools.join(" · ")})]}),A.jsxs("span",{className:"col-start-2 sm:col-start-3 font-mono text-[10px] uppercase tracking-widest text-white/55 text-left sm:text-right tabular-nums",children:[String(x.deliverables.length).padStart(2,"0")," deliverables"]})]}),A.jsx(m,{i:y+1,cls:"hidden sm:block"})]},x.id)})}),A.jsx("div",{className:"sm:hidden",children:A.jsx(m,{i:4})})]})]}),A.jsx("div",{className:"flex-1"}),A.jsx("div",{className:"w-full max-w-6xl mx-auto flex justify-center pb-4 text-center",style:sn(d,10),children:A.jsx("span",{className:"text-[10px] font-mono uppercase tracking-[0.2em] text-white/55",children:"Built for teams who refuse average"})})]})},IE=[{text:"1150vh of track",left:"7%",top:"26%"},{text:"travel capped at 0.12 / second",left:"36%",top:"58%"},{text:"96+ tools, one MCP surface",left:"64%",top:"34%"}],UE=({scrollProgress:s})=>{const e=s;if(e<.745||e>.91)return null;const n=Fl(mi.about(e),gr.about(e)),r=kl(e,.885,.905),a=Ol(e,.775,.815,.95,2,24),c=He(e,.795,.835),d=He(e,.805,.84),f=He(e,.82,.865),p=He(e,.825,.865),m=He(e,.835,.875),v=He(e,.8,.83),x=He(e,.775,.7875)*(1-He(e,.79,.8)),y=He(e,.775,.8);return A.jsxs(A.Fragment,{children:[x>.001&&A.jsx("div",{"aria-hidden":"true",className:"fixed inset-0 pointer-events-none z-[15] overflow-hidden",style:{opacity:.4*x},children:IE.map((S,w)=>A.jsx("span",{"data-fragment":w,className:"absolute font-mono text-[11px] tracking-[0.18em] text-white whitespace-nowrap",style:{left:S.left,top:S.top,transform:`translateX(${(12*y).toFixed(1)}px)`,textShadow:"0 1px 8px rgba(10,14,20,0.45)"},children:S.text},S.text))}),A.jsx("section",{id:"about","data-place":"about",className:"fixed inset-0 pointer-events-auto flex items-center justify-center p-6 z-20 select-none overflow-hidden",style:{opacity:n,transform:`scale(${r.scale.toFixed(4)}) translateY(${r.ty.toFixed(1)}px)`},children:A.jsxs("div",{className:"relative w-full max-w-4xl",children:[A.jsx("div",{"aria-hidden":"true",className:"contact-shadow absolute left-[9%] w-[82%] h-[24px]",style:{top:"calc(100% + 4px)",opacity:.9*v}}),A.jsx("div",{"data-slab":!0,className:"world-lit p3-about-compact relative rounded-[14px] overflow-hidden",style:{backgroundColor:"#E9E2D6",transform:`scale(${a.scale.toFixed(4)}) translateY(${a.ty.toFixed(1)}px)`,filter:a.blur>.01?`blur(${a.blur.toFixed(2)}px)`:void 0,...zl(r.t)},children:A.jsxs("div",{className:"grid sm:grid-cols-[250px_1fr]",children:[A.jsx("div",{className:"p3-about-photo relative aspect-[16/10] sm:aspect-auto sm:h-auto",children:A.jsx("img",{src:St("assets/user-profile-reference.jpg"),alt:"Ashfan Ansari",className:"absolute inset-0 w-full h-full object-cover",draggable:!1,loading:"lazy",decoding:"async"})}),A.jsxs("div",{className:"p-6 sm:p-10",children:[A.jsxs("div",{className:"p3-about-badge flex items-center justify-between pb-5 border-b border-[#1A1C1E]/15",style:sn(c,12),children:[A.jsxs("div",{className:"flex items-center space-x-2",children:[A.jsx("span",{className:"w-2 h-2 rounded-full bg-[#F5B81E]"}),A.jsx("span",{className:"font-mono text-[10px] uppercase tracking-[0.2em] text-[#1A1C1E]/70",children:"04 / The About Shoal"})]}),A.jsx("span",{className:"hidden md:inline font-mono text-[10px] uppercase tracking-widest text-[#1A1C1E]/40",children:"Latitude 26.7606° N, 83.3732° E"})]}),A.jsxs("h2",{"data-place-header":!0,className:"place-h2 p3-about-h2 text-[#1A1C1E] mt-6",style:sn(d,16),children:["Building with weight, atmosphere, and"," ",A.jsx("span",{className:"italic text-[#9A7208]",children:"singular focus"}),"."]}),A.jsx("p",{className:"p3-about-p1 mt-5 text-sm sm:text-[15px] text-[#1A1C1E]/80 leading-relaxed font-sans font-light",style:sn(f,14),children:"I operate out of Gorakhpur, India. My work sits at the cross-section of frontend engineering, motion direction, and visual narrative. I build websites that feel like continuous worlds rather than generic slide decks, and animate stories that hold emotional residue."}),A.jsx("p",{className:"mt-3 text-sm sm:text-[15px] text-[#1A1C1E]/80 leading-relaxed font-sans font-light",style:sn(p,14),children:"Every build follows a simple standard: real evidence, real screenshots, hand-tuned wave normals, zero decorative slop, and ruthless typography. Whether it is an interactive 3D product showcase or an animated YouTube short, the craft is non-negotiable."}),A.jsx("div",{className:"p3-about-facts mt-7",style:sn(m,12),children:[["Base Studio","Gorakhpur, India"],["Specialization","Web & Motion"],["Philosophy","Anti-Slop Craft"]].map(([S,w])=>A.jsxs("div",{className:"flex items-baseline justify-between py-2.5 border-t border-[#1A1C1E]/15",children:[A.jsx("span",{className:"font-mono text-[9px] uppercase tracking-widest text-[#1A1C1E]/45",children:S}),A.jsx("span",{className:"font-serif text-base text-[#1A1C1E]",children:w})]},S))})]})]})})]})})]})},FE=({scrollProgress:s,onBackToShore:e,onShowToast:n})=>{const[r,a]=nt.useState(!1),c="ashfanansari19@gmail.com",d=()=>{navigator.clipboard.writeText(c),a(!0),n("Email copied to clipboard · Looking forward to building"),setTimeout(()=>a(!1),3e3)},f=s;if(f<.885)return null;const p=He(f,.885,.945),m=He(f,.89,.94),v=He(f,.9,.95),x=He(f,.905,.955),y=He(f,.915,.96),S=He(f,.925,.97),w=He(f,.935,.975),b=He(f,.945,.985);return A.jsxs("section",{id:"contact",className:"fixed inset-0 pointer-events-auto flex flex-col justify-between items-center py-20 px-6 z-20 text-white select-none overflow-hidden",style:{opacity:p},children:[A.jsxs("div",{className:"w-full max-w-5xl mx-auto flex justify-between items-center pt-4",style:sn(m,12),children:[A.jsxs("div",{className:"flex items-center space-x-2",children:[A.jsx("span",{className:"w-2 h-2 rounded-full bg-[#F5B81E] animate-pulse"}),A.jsx("span",{className:"font-mono text-xs uppercase tracking-[0.22em] text-[#F5B81E]",children:"05 / The Far Shore"})]}),A.jsx("button",{onClick:e,className:"text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors flex items-center space-x-1",children:A.jsx("span",{children:"↑ Return to Shore"})})]}),A.jsxs("div",{className:"w-full max-w-3xl mx-auto text-center my-auto space-y-6",children:[A.jsx("span",{className:"font-mono text-[11px] uppercase tracking-[0.25em] text-[#F5B81E] block",style:sn(v,10),children:"Arrival · Night Water"}),A.jsx("h2",{className:"font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight bg-gradient-to-r from-[#FDE68A] to-[#FFF3C4] bg-clip-text text-transparent leading-[1.08]",style:sn(x,20),children:"Build with Ashfan."}),A.jsx("p",{className:"max-w-xl mx-auto text-sm sm:text-base text-white/70 font-sans font-light leading-relaxed",style:sn(y,14),children:"Open for select website commissions, motion direction, and interactive product collaborations. Reach out directly or copy the address below."}),A.jsxs("div",{className:"pt-4 flex flex-col sm:flex-row items-center justify-center gap-4",style:sn(S,14),children:[A.jsxs("button",{onClick:d,className:"group px-8 py-4 rounded-full bg-gradient-to-r from-[#F5B81E] to-[#FDE68A] text-[#0A0A0C] font-mono text-xs uppercase tracking-[0.16em] font-semibold hover:brightness-110 active:scale-98 transition-all shadow-[0_0_30px_rgba(245,184,30,0.35)] flex items-center space-x-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white",children:[A.jsx("span",{children:c}),A.jsx("span",{className:"text-[10px] bg-[#0A0A0C]/15 px-2 py-0.5 rounded-full",children:r?"Copied ✓":"Copy"})]}),A.jsx("a",{href:`mailto:${c}`,className:"px-7 py-4 rounded-full border border-white/20 hover:border-white/50 text-white font-mono text-xs uppercase tracking-[0.16em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B81E]",children:"Open Mail Client ↗"})]}),A.jsxs("div",{className:"pt-8 flex items-center justify-center space-x-8 text-xs font-mono uppercase tracking-widest text-white/60",style:sn(w,10),children:[A.jsx("a",{href:"https://github.com/ashfanansari",target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#F5B81E] transition-colors",children:"GitHub"}),A.jsx("a",{href:"https://www.youtube.com/@Unsaid2D",target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#F5B81E] transition-colors",children:"YouTube"}),A.jsx("a",{href:"https://instagram.com/zavine.webs",target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#F5B81E] transition-colors",children:"Instagram"})]})]}),A.jsxs("div",{className:"w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-6 pb-2 text-[10px] font-mono text-white/40 tracking-wider",style:sn(b,8),children:[A.jsx("span",{children:"© 2026 Ashfan Ansari · All Rights Reserved"}),A.jsx("span",{className:"mt-2 sm:mt-0",children:"Gorakhpur, India · The Journey Portfolio"})]})]})},kE=({message:s})=>s?A.jsx("div",{className:"fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-in fade-in slide-in-from-bottom-4 duration-300",children:A.jsxs("div",{className:"px-5 py-2.5 rounded-full bg-[#1A1C1E] text-white border border-white/20 shadow-2xl flex items-center space-x-2.5 text-xs font-mono tracking-wider backdrop-blur-md",children:[A.jsx("span",{className:"w-2 h-2 rounded-full bg-[#F5B81E] animate-pulse"}),A.jsx("span",{children:s})]})}):null,OE=()=>{const s=()=>{if(typeof window<"u"){const D=new URLSearchParams(window.location.search).get("scroll");if(D)return Math.min(1,Math.max(0,parseFloat(D)))}return 0},[e,n]=nt.useState(s),[r,a]=nt.useState("FRONT"),[c,d]=nt.useState(null),[f,p]=nt.useState(null),[m,v]=nt.useState(!1),[x,y]=nt.useState(null),S=nt.useRef(null);nt.useEffect(()=>{let N,Z=s(),k=Z,I=0,q=k,me=performance.now();const E=()=>{const j=window.scrollY,$=document.documentElement.scrollHeight-window.innerHeight;$>0&&(Z=Math.min(1,Math.max(0,j/$)))},R=j=>{const $=Z,ae=$-k,J=Math.max(-.12,Math.min(.12,ae*7));I+=(J-I)*(1-Math.exp(-j/.16)),k+=I*j,(ae>0&&k>$||ae<0&&k<$)&&(k=$,I=0),Math.abs($-k)<4e-4&&Math.abs(I)<.002&&(k=$,I=0)},V=j=>{let $=(j-me)/1e3;me=j,$=Math.min(Math.max($,0),.25);const ae=Math.max(1,Math.ceil($/(1/60))),J=$/ae;for(let O=0;O<ae;O++)R(J);const le=window;le.__journeyProgress=k,Math.abs(k-q)>1e-4&&(q=k,n(k)),N=requestAnimationFrame(V)};return window.addEventListener("scroll",E,{passive:!0}),Z>0?setTimeout(()=>{const j=document.documentElement.scrollHeight-window.innerHeight;window.scrollTo(0,Z*j)},50):E(),N=requestAnimationFrame(V),()=>{window.removeEventListener("scroll",E),cancelAnimationFrame(N)}},[]);const w=nt.useRef("");nt.useEffect(()=>{const g=fE(e);if(g!==w.current){w.current=g;const P=document.documentElement.style;P.setProperty("--world-tint",g),P.setProperty("--world-haze",hE(e))}const D=window;D.__placeEnvelopes={shore:{owner:mi.shore(e),far:0},featured:{owner:mi.featured(e),far:gr.featured(e)},channels:{owner:mi.channels(e),far:gr.channels(e)},services:{owner:mi.services(e),far:gr.services(e)},about:{owner:mi.about(e),far:gr.about(e)},farShore:{owner:mi.farShore(e),far:0}}},[e]);const b=nt.useCallback(g=>{y(g),setTimeout(()=>{y(null)},3500)},[]),_=g=>{const D=document.documentElement.scrollHeight-window.innerHeight;let P=0;g==="hero"?P=0:g==="projects"?P=.32*D:g==="channels"?P=.63*D:g==="services"?P=.74*D:g==="about"?P=.86*D:g==="contact"&&(P=.96*D),window.scrollTo({top:P,behavior:"smooth"})};return A.jsxs("div",{ref:S,className:"relative min-h-[1150vh] w-full selection:bg-[#F5B81E] selection:text-[#1A1C1E]",children:[A.jsx(pE,{scrollProgress:e,activeProjectTint:c,overlayOpen:f!==null||m}),A.jsx("svg",{className:"hidden","aria-hidden":"true",children:A.jsxs("filter",{id:"waterRippleDistort",children:[A.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.02 0.08",numOctaves:"2",result:"noise",children:A.jsx("animate",{attributeName:"baseFrequency",dur:"6s",values:"0.02 0.08; 0.03 0.12; 0.02 0.08",repeatCount:"indefinite"})}),A.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:"14",xChannelSelector:"R",yChannelSelector:"G"})]})}),A.jsx("div",{"aria-hidden":"true",className:"fixed left-0 right-0 pointer-events-none",style:{top:"calc(64vh - 34px)",height:"34px",zIndex:4,background:"linear-gradient(to bottom, transparent 0%, color-mix(in srgb, var(--world-haze) 55%, transparent) 100%)"}}),A.jsx(mE,{onNavigate:_,scrollProgress:e}),A.jsx(vE,{scrollProgress:e,gazeLabel:r}),A.jsx(CE,{onExploreWork:()=>_("projects"),scrollProgress:e,onGazeLabel:a}),A.jsx(bE,{scrollProgress:e,onSelectProject:g=>p(g),onActiveProjectChange:g=>d(g),onToggleFullIndex:()=>v(!0),isFullIndexOpen:m}),A.jsx(NE,{scrollProgress:e}),A.jsx(DE,{scrollProgress:e}),A.jsx(UE,{scrollProgress:e}),A.jsx(FE,{scrollProgress:e,onBackToShore:()=>_("hero"),onShowToast:b}),A.jsx(RE,{project:f,onClose:()=>p(null)}),A.jsx(PE,{isOpen:m,onClose:()=>v(!1),onSelectProject:g=>p(g)}),A.jsx(kE,{message:x})]})};iv.createRoot(document.getElementById("root")).render(A.jsx(K0.StrictMode,{children:A.jsx(OE,{})}));
