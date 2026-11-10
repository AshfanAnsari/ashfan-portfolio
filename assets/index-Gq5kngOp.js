(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function Em(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var du={exports:{}},Ro={},fu={exports:{}},at={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function F0(){if(mp)return at;mp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function x(k){return k===null||typeof k!="object"?null:(k=y&&k[y]||k["@@iterator"],typeof k=="function"?k:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,A={};function v(k,re,Le){this.props=k,this.context=re,this.refs=A,this.updater=Le||S}v.prototype.isReactComponent={},v.prototype.setState=function(k,re){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,re,"setState")},v.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function g(){}g.prototype=v.prototype;function I(k,re,Le){this.props=k,this.context=re,this.refs=A,this.updater=Le||S}var P=I.prototype=new g;P.constructor=I,w(P,v.prototype),P.isPureReactComponent=!0;var N=Array.isArray,q=Object.prototype.hasOwnProperty,F={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function G(k,re,Le){var W,ae={},ge=null,xe=null;if(re!=null)for(W in re.ref!==void 0&&(xe=re.ref),re.key!==void 0&&(ge=""+re.key),re)q.call(re,W)&&!D.hasOwnProperty(W)&&(ae[W]=re[W]);var Pe=arguments.length-2;if(Pe===1)ae.children=Le;else if(1<Pe){for(var Ae=Array(Pe),Ye=0;Ye<Pe;Ye++)Ae[Ye]=arguments[Ye+2];ae.children=Ae}if(k&&k.defaultProps)for(W in Pe=k.defaultProps,Pe)ae[W]===void 0&&(ae[W]=Pe[W]);return{$$typeof:s,type:k,key:ge,ref:xe,props:ae,_owner:F.current}}function pe(k,re){return{$$typeof:s,type:k.type,key:re,ref:k.ref,props:k.props,_owner:k._owner}}function M(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function R(k){var re={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Le){return re[Le]})}var te=/\/+/g;function Z(k,re){return typeof k=="object"&&k!==null&&k.key!=null?R(""+k.key):re.toString(36)}function le(k,re,Le,W,ae){var ge=typeof k;(ge==="undefined"||ge==="boolean")&&(k=null);var xe=!1;if(k===null)xe=!0;else switch(ge){case"string":case"number":xe=!0;break;case"object":switch(k.$$typeof){case s:case e:xe=!0}}if(xe)return xe=k,ae=ae(xe),k=W===""?"."+Z(xe,0):W,N(ae)?(Le="",k!=null&&(Le=k.replace(te,"$&/")+"/"),le(ae,re,Le,"",function(Ye){return Ye})):ae!=null&&(M(ae)&&(ae=pe(ae,Le+(!ae.key||xe&&xe.key===ae.key?"":(""+ae.key).replace(te,"$&/")+"/")+k)),re.push(ae)),1;if(xe=0,W=W===""?".":W+":",N(k))for(var Pe=0;Pe<k.length;Pe++){ge=k[Pe];var Ae=W+Z(ge,Pe);xe+=le(ge,re,Le,Ae,ae)}else if(Ae=x(k),typeof Ae=="function")for(k=Ae.call(k),Pe=0;!(ge=k.next()).done;)ge=ge.value,Ae=W+Z(ge,Pe++),xe+=le(ge,re,Le,Ae,ae);else if(ge==="object")throw re=String(k),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return xe}function de(k,re,Le){if(k==null)return k;var W=[],ae=0;return le(k,W,"","",function(ge){return re.call(Le,ge,ae++)}),W}function ne(k){if(k._status===-1){var re=k._result;re=re(),re.then(function(Le){(k._status===0||k._status===-1)&&(k._status=1,k._result=Le)},function(Le){(k._status===0||k._status===-1)&&(k._status=2,k._result=Le)}),k._status===-1&&(k._status=0,k._result=re)}if(k._status===1)return k._result.default;throw k._result}var ce={current:null},B={transition:null},ue={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:B,ReactCurrentOwner:F};function se(){throw Error("act(...) is not supported in production builds of React.")}return at.Children={map:de,forEach:function(k,re,Le){de(k,function(){re.apply(this,arguments)},Le)},count:function(k){var re=0;return de(k,function(){re++}),re},toArray:function(k){return de(k,function(re){return re})||[]},only:function(k){if(!M(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},at.Component=v,at.Fragment=n,at.Profiler=a,at.PureComponent=I,at.StrictMode=r,at.Suspense=p,at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,at.act=se,at.cloneElement=function(k,re,Le){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var W=w({},k.props),ae=k.key,ge=k.ref,xe=k._owner;if(re!=null){if(re.ref!==void 0&&(ge=re.ref,xe=F.current),re.key!==void 0&&(ae=""+re.key),k.type&&k.type.defaultProps)var Pe=k.type.defaultProps;for(Ae in re)q.call(re,Ae)&&!D.hasOwnProperty(Ae)&&(W[Ae]=re[Ae]===void 0&&Pe!==void 0?Pe[Ae]:re[Ae])}var Ae=arguments.length-2;if(Ae===1)W.children=Le;else if(1<Ae){Pe=Array(Ae);for(var Ye=0;Ye<Ae;Ye++)Pe[Ye]=arguments[Ye+2];W.children=Pe}return{$$typeof:s,type:k.type,key:ae,ref:ge,props:W,_owner:xe}},at.createContext=function(k){return k={$$typeof:d,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:c,_context:k},k.Consumer=k},at.createElement=G,at.createFactory=function(k){var re=G.bind(null,k);return re.type=k,re},at.createRef=function(){return{current:null}},at.forwardRef=function(k){return{$$typeof:f,render:k}},at.isValidElement=M,at.lazy=function(k){return{$$typeof:_,_payload:{_status:-1,_result:k},_init:ne}},at.memo=function(k,re){return{$$typeof:m,type:k,compare:re===void 0?null:re}},at.startTransition=function(k){var re=B.transition;B.transition={};try{k()}finally{B.transition=re}},at.unstable_act=se,at.useCallback=function(k,re){return ce.current.useCallback(k,re)},at.useContext=function(k){return ce.current.useContext(k)},at.useDebugValue=function(){},at.useDeferredValue=function(k){return ce.current.useDeferredValue(k)},at.useEffect=function(k,re){return ce.current.useEffect(k,re)},at.useId=function(){return ce.current.useId()},at.useImperativeHandle=function(k,re,Le){return ce.current.useImperativeHandle(k,re,Le)},at.useInsertionEffect=function(k,re){return ce.current.useInsertionEffect(k,re)},at.useLayoutEffect=function(k,re){return ce.current.useLayoutEffect(k,re)},at.useMemo=function(k,re){return ce.current.useMemo(k,re)},at.useReducer=function(k,re,Le){return ce.current.useReducer(k,re,Le)},at.useRef=function(k){return ce.current.useRef(k)},at.useState=function(k){return ce.current.useState(k)},at.useSyncExternalStore=function(k,re,Le){return ce.current.useSyncExternalStore(k,re,Le)},at.useTransition=function(){return ce.current.useTransition()},at.version="18.3.1",at}var gp;function Ud(){return gp||(gp=1,fu.exports=F0()),fu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function k0(){if(vp)return Ro;vp=1;var s=Ud(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,m){var _,y={},x=null,S=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!c.hasOwnProperty(_)&&(y[_]=p[_]);if(f&&f.defaultProps)for(_ in p=f.defaultProps,p)y[_]===void 0&&(y[_]=p[_]);return{$$typeof:e,type:f,key:x,ref:S,props:y,_owner:a.current}}return Ro.Fragment=n,Ro.jsx=d,Ro.jsxs=d,Ro}var _p;function O0(){return _p||(_p=1,du.exports=k0()),du.exports}var b=O0(),rt=Ud();const z0=Em(rt);var $a={},hu={exports:{}},wn={},pu={exports:{}},mu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function B0(){return xp||(xp=1,(function(s){function e(B,ue){var se=B.length;B.push(ue);e:for(;0<se;){var k=se-1>>>1,re=B[k];if(0<a(re,ue))B[k]=ue,B[se]=re,se=k;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ue=B[0],se=B.pop();if(se!==ue){B[0]=se;e:for(var k=0,re=B.length,Le=re>>>1;k<Le;){var W=2*(k+1)-1,ae=B[W],ge=W+1,xe=B[ge];if(0>a(ae,se))ge<re&&0>a(xe,ae)?(B[k]=xe,B[ge]=se,k=ge):(B[k]=ae,B[W]=se,k=W);else if(ge<re&&0>a(xe,se))B[k]=xe,B[ge]=se,k=ge;else break e}}return ue}function a(B,ue){var se=B.sortIndex-ue.sortIndex;return se!==0?se:B.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var p=[],m=[],_=1,y=null,x=3,S=!1,w=!1,A=!1,v=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(B){for(var ue=n(m);ue!==null;){if(ue.callback===null)r(m);else if(ue.startTime<=B)r(m),ue.sortIndex=ue.expirationTime,e(p,ue);else break;ue=n(m)}}function N(B){if(A=!1,P(B),!w)if(n(p)!==null)w=!0,ne(q);else{var ue=n(m);ue!==null&&ce(N,ue.startTime-B)}}function q(B,ue){w=!1,A&&(A=!1,g(G),G=-1),S=!0;var se=x;try{for(P(ue),y=n(p);y!==null&&(!(y.expirationTime>ue)||B&&!R());){var k=y.callback;if(typeof k=="function"){y.callback=null,x=y.priorityLevel;var re=k(y.expirationTime<=ue);ue=s.unstable_now(),typeof re=="function"?y.callback=re:y===n(p)&&r(p),P(ue)}else r(p);y=n(p)}if(y!==null)var Le=!0;else{var W=n(m);W!==null&&ce(N,W.startTime-ue),Le=!1}return Le}finally{y=null,x=se,S=!1}}var F=!1,D=null,G=-1,pe=5,M=-1;function R(){return!(s.unstable_now()-M<pe)}function te(){if(D!==null){var B=s.unstable_now();M=B;var ue=!0;try{ue=D(!0,B)}finally{ue?Z():(F=!1,D=null)}}else F=!1}var Z;if(typeof I=="function")Z=function(){I(te)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,de=le.port2;le.port1.onmessage=te,Z=function(){de.postMessage(null)}}else Z=function(){v(te,0)};function ne(B){D=B,F||(F=!0,Z())}function ce(B,ue){G=v(function(){B(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,ne(q))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pe=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(B){switch(x){case 1:case 2:case 3:var ue=3;break;default:ue=x}var se=x;x=ue;try{return B()}finally{x=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,ue){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var se=x;x=B;try{return ue()}finally{x=se}},s.unstable_scheduleCallback=function(B,ue,se){var k=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?k+se:k):se=k,B){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=se+re,B={id:_++,callback:ue,priorityLevel:B,startTime:se,expirationTime:re,sortIndex:-1},se>k?(B.sortIndex=se,e(m,B),n(p)===null&&B===n(m)&&(A?(g(G),G=-1):A=!0,ce(N,se-k))):(B.sortIndex=re,e(p,B),w||S||(w=!0,ne(q))),B},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(B){var ue=x;return function(){var se=x;x=ue;try{return B.apply(this,arguments)}finally{x=se}}}})(mu)),mu}var yp;function H0(){return yp||(yp=1,pu.exports=B0()),pu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function V0(){if(Sp)return wn;Sp=1;var s=Ud(),e=H0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},y={};function x(t){return p.call(y,t)?!0:p.call(_,t)?!1:m.test(t)?y[t]=!0:(_[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,o,l,u,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,I);v[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,I);v[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,I);v[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,o,l){var u=v.hasOwnProperty(i)?v[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,u,l)&&(o=null),l||u===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):u.mustUseProperty?t[u.propertyName]=o===null?u.type===3?!1:"":o:(i=u.attributeName,l=u.attributeNamespace,o===null?t.removeAttribute(i):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),F=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),pe=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),R=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),B=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,k;function re(t){if(k===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+t}var Le=!1;function W(t,i){if(!t||Le)return"";Le=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var l=ee}Reflect.construct(t,[],i)}else{try{i.call()}catch(ee){l=ee}t.call(i.prototype)}else{try{throw Error()}catch(ee){l=ee}t()}}catch(ee){if(ee&&l&&typeof ee.stack=="string"){for(var u=ee.stack.split(`
`),h=l.stack.split(`
`),E=u.length-1,U=h.length-1;1<=E&&0<=U&&u[E]!==h[U];)U--;for(;1<=E&&0<=U;E--,U--)if(u[E]!==h[U]){if(E!==1||U!==1)do if(E--,U--,0>U||u[E]!==h[U]){var O=`
`+u[E].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=E&&0<=U);break}}}finally{Le=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?re(t):""}function ae(t){switch(t.tag){case 5:return re(t.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return t=W(t.type,!1),t;case 11:return t=W(t.type.render,!1),t;case 1:return t=W(t.type,!0),t;default:return""}}function ge(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case F:return"Portal";case pe:return"Profiler";case G:return"StrictMode";case Z:return"Suspense";case le:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case R:return(t.displayName||"Context")+".Consumer";case M:return(t._context.displayName||"Context")+".Provider";case te:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case de:return i=t.displayName||null,i!==null?i:ge(t.type)||"Memo";case ne:i=t._payload,t=t._init;try{return ge(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(i);case 8:return i===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Pe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ae(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ye(t){var i=Ae(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ft(t){t._valueTracker||(t._valueTracker=Ye(t))}function ct(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ae(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function z(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sn(t,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function lt(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Pe(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function Ze(t,i){ht(t,i);var o=Pe(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Je(t,i.type,o):i.hasOwnProperty("defaultValue")&&Je(t,i.type,Pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Tt(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Je(t,i,o){(i!=="number"||z(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var L=Array.isArray;function T(t,i,o,l){if(t=t.options,i){i={};for(var u=0;u<o.length;u++)i["$"+o[u]]=!0;for(o=0;o<t.length;o++)u=i.hasOwnProperty("$"+t[o].value),t[o].selected!==u&&(t[o].selected=u),u&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Pe(o),i=null,u=0;u<t.length;u++){if(t[u].value===o){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function K(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function he(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(L(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Pe(o)}}function ye(t,i){var o=Pe(i.value),l=Pe(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function fe(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Xe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ce(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Xe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fe,pt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,u){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,u)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Fe=Fe||document.createElement("div"),Fe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Fe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ee(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var ke={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tt=["Webkit","ms","Moz","O"];Object.keys(ke).forEach(function(t){tt.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ke[i]=ke[t]})});function et(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ke.hasOwnProperty(t)&&ke[t]?(""+i).trim():i+"px"}function ze(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,u=et(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,u):t[o]=u}}var ut=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function it(t,i){if(i){if(ut[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Et(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var V=null;function Ne(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var oe=null,me=null,Re=null;function Ie(t){if(t=ho(t)){if(typeof oe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ua(i),oe(t.stateNode,t.type,i))}}function dt(t){me?Re?Re.push(t):Re=[t]:me=t}function kt(){if(me){var t=me,i=Re;if(Re=me=null,Ie(t),i)for(t=0;t<i.length;t++)Ie(i[t])}}function on(t,i){return t(i)}function gt(){}var Zt=!1;function On(t,i,o){if(Zt)return t(i,o);Zt=!0;try{return on(t,i,o)}finally{Zt=!1,(me!==null||Re!==null)&&(gt(),kt())}}function Bi(t,i){var o=t.stateNode;if(o===null)return null;var l=ua(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var qr=!1;if(f)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){qr=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{qr=!1}function Ys(t,i,o,l,u,h,E,U,O){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(o,ee)}catch(_e){this.onError(_e)}}var Hi=!1,xr=null,vi=!1,$r=null,Kr={onError:function(t){Hi=!0,xr=t}};function jo(t,i,o,l,u,h,E,U,O){Hi=!1,xr=null,Ys.apply(Kr,arguments)}function Xo(t,i,o,l,u,h,E,U,O){if(jo.apply(this,arguments),Hi){if(Hi){var ee=xr;Hi=!1,xr=null}else throw Error(n(198));vi||(vi=!0,$r=ee)}}function _i(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Yo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function qo(t){if(_i(t)!==t)throw Error(n(188))}function C(t){var i=t.alternate;if(!i){if(i=_i(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var u=o.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){o=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===o)return qo(u),t;if(h===l)return qo(u),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=u,l=h;else{for(var E=!1,U=u.child;U;){if(U===o){E=!0,o=u,l=h;break}if(U===l){E=!0,l=u,o=h;break}U=U.sibling}if(!E){for(U=h.child;U;){if(U===o){E=!0,o=h,l=u;break}if(U===l){E=!0,l=h,o=u;break}U=U.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function j(t){return t=C(t),t!==null?Q(t):null}function Q(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Q(t);if(i!==null)return i;t=t.sibling}return null}var J=e.unstable_scheduleCallback,X=e.unstable_cancelCallback,we=e.unstable_shouldYield,De=e.unstable_requestPaint,Te=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,Ke=e.unstable_ImmediatePriority,Qe=e.unstable_UserBlockingPriority,We=e.unstable_NormalPriority,St=e.unstable_LowPriority,At=e.unstable_IdlePriority,bt=null,Ut=null;function _t(t){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(bt,t,void 0,(t.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Pn,Xt=Math.log,xt=Math.LN2;function Pn(t){return t>>>=0,t===0?32:31-(Xt(t)/xt|0)|0}var qn=64,Qt=4194304;function xi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pt(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,u=t.suspendedLanes,h=t.pingedLanes,E=o&268435455;if(E!==0){var U=E&~u;U!==0?l=xi(U):(h&=E,h!==0&&(l=xi(h)))}else E=o&~u,E!==0?l=xi(E):h!==0&&(l=xi(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&u)===0&&(u=l&-l,h=i&-i,u>=h||u===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-Oe(i),u=1<<o,l|=t[o],i&=~u;return l}function li(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qs(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-Oe(h),U=1<<E,O=u[E];O===-1?((U&o)===0||(U&l)!==0)&&(u[E]=li(U,i)):O<=i&&(t.expiredLanes|=U),h&=~U}}function cn(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zr(){var t=qn;return qn<<=1,(qn&4194240)===0&&(qn=64),t}function $s(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Vi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Oe(i),t[i]=o}function ig(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var u=31-Oe(o),h=1<<u;i[u]=0,l[u]=-1,t[u]=-1,o&=~h}}function Il(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-Oe(o),u=1<<l;u&i|t[l]&i&&(t[l]|=i),o&=~u}}var wt=0;function Xd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Yd,Ul,qd,$d,Kd,Fl=!1,$o=[],Gi=null,Wi=null,ji=null,Ks=new Map,Zs=new Map,Xi=[],rg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zd(t,i){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":Ks.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(i.pointerId)}}function Qs(t,i,o,l,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},i!==null&&(i=ho(i),i!==null&&Ul(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function sg(t,i,o,l,u){switch(i){case"focusin":return Gi=Qs(Gi,t,i,o,l,u),!0;case"dragenter":return Wi=Qs(Wi,t,i,o,l,u),!0;case"mouseover":return ji=Qs(ji,t,i,o,l,u),!0;case"pointerover":var h=u.pointerId;return Ks.set(h,Qs(Ks.get(h)||null,t,i,o,l,u)),!0;case"gotpointercapture":return h=u.pointerId,Zs.set(h,Qs(Zs.get(h)||null,t,i,o,l,u)),!0}return!1}function Qd(t){var i=yr(t.target);if(i!==null){var o=_i(i);if(o!==null){if(i=o.tag,i===13){if(i=Yo(o),i!==null){t.blockedOn=i,Kd(t.priority,function(){qd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ko(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Ol(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);V=l,o.target.dispatchEvent(l),V=null}else return i=ho(o),i!==null&&Ul(i),t.blockedOn=o,!1;i.shift()}return!0}function Jd(t,i,o){Ko(t)&&o.delete(i)}function og(){Fl=!1,Gi!==null&&Ko(Gi)&&(Gi=null),Wi!==null&&Ko(Wi)&&(Wi=null),ji!==null&&Ko(ji)&&(ji=null),Ks.forEach(Jd),Zs.forEach(Jd)}function Js(t,i){t.blockedOn===i&&(t.blockedOn=null,Fl||(Fl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,og)))}function eo(t){function i(u){return Js(u,t)}if(0<$o.length){Js($o[0],t);for(var o=1;o<$o.length;o++){var l=$o[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Gi!==null&&Js(Gi,t),Wi!==null&&Js(Wi,t),ji!==null&&Js(ji,t),Ks.forEach(i),Zs.forEach(i),o=0;o<Xi.length;o++)l=Xi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Xi.length&&(o=Xi[0],o.blockedOn===null);)Qd(o),o.blockedOn===null&&Xi.shift()}var Qr=N.ReactCurrentBatchConfig,Zo=!0;function ag(t,i,o,l){var u=wt,h=Qr.transition;Qr.transition=null;try{wt=1,kl(t,i,o,l)}finally{wt=u,Qr.transition=h}}function lg(t,i,o,l){var u=wt,h=Qr.transition;Qr.transition=null;try{wt=4,kl(t,i,o,l)}finally{wt=u,Qr.transition=h}}function kl(t,i,o,l){if(Zo){var u=Ol(t,i,o,l);if(u===null)tc(t,i,l,Qo,o),Zd(t,l);else if(sg(u,t,i,o,l))l.stopPropagation();else if(Zd(t,l),i&4&&-1<rg.indexOf(t)){for(;u!==null;){var h=ho(u);if(h!==null&&Yd(h),h=Ol(t,i,o,l),h===null&&tc(t,i,l,Qo,o),h===u)break;u=h}u!==null&&l.stopPropagation()}else tc(t,i,l,null,o)}}var Qo=null;function Ol(t,i,o,l){if(Qo=null,t=Ne(l),t=yr(t),t!==null)if(i=_i(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Yo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Qo=t,null}function ef(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case Ke:return 1;case Qe:return 4;case We:case St:return 16;case At:return 536870912;default:return 16}default:return 16}}var Yi=null,zl=null,Jo=null;function tf(){if(Jo)return Jo;var t,i=zl,o=i.length,l,u="value"in Yi?Yi.value:Yi.textContent,h=u.length;for(t=0;t<o&&i[t]===u[t];t++);var E=o-t;for(l=1;l<=E&&i[o-l]===u[h-l];l++);return Jo=u.slice(t,1<l?1-l:void 0)}function ea(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ta(){return!0}function nf(){return!1}function Ln(t){function i(o,l,u,h,E){this._reactName=o,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(o=t[U],this[U]=o?o(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ta:nf,this.isPropagationStopped=nf,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),i}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bl=Ln(Jr),to=se({},Jr,{view:0,detail:0}),cg=Ln(to),Hl,Vl,no,na=se({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(Hl=t.screenX-no.screenX,Vl=t.screenY-no.screenY):Vl=Hl=0,no=t),Hl)},movementY:function(t){return"movementY"in t?t.movementY:Vl}}),rf=Ln(na),ug=se({},na,{dataTransfer:0}),dg=Ln(ug),fg=se({},to,{relatedTarget:0}),Gl=Ln(fg),hg=se({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),pg=Ln(hg),mg=se({},Jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gg=Ln(mg),vg=se({},Jr,{data:0}),sf=Ln(vg),_g={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=yg[t])?!!i[t]:!1}function Wl(){return Sg}var Eg=se({},to,{key:function(t){if(t.key){var i=_g[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ea(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wl,charCode:function(t){return t.type==="keypress"?ea(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ea(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Mg=Ln(Eg),wg=se({},na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),of=Ln(wg),Tg=se({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wl}),Ag=Ln(Tg),Cg=se({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rg=Ln(Cg),bg=se({},na,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Pg=Ln(bg),Lg=[9,13,27,32],jl=f&&"CompositionEvent"in window,io=null;f&&"documentMode"in document&&(io=document.documentMode);var Ng=f&&"TextEvent"in window&&!io,af=f&&(!jl||io&&8<io&&11>=io),lf=" ",cf=!1;function uf(t,i){switch(t){case"keyup":return Lg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function df(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function Dg(t,i){switch(t){case"compositionend":return df(i);case"keypress":return i.which!==32?null:(cf=!0,lf);case"textInput":return t=i.data,t===lf&&cf?null:t;default:return null}}function Ig(t,i){if(es)return t==="compositionend"||!jl&&uf(t,i)?(t=tf(),Jo=zl=Yi=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return af&&i.locale!=="ko"?null:i.data;default:return null}}var Ug={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ff(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Ug[t.type]:i==="textarea"}function hf(t,i,o,l){dt(l),i=aa(i,"onChange"),0<i.length&&(o=new Bl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var ro=null,so=null;function Fg(t){Lf(t,0)}function ia(t){var i=ss(t);if(ct(i))return t}function kg(t,i){if(t==="change")return i}var pf=!1;if(f){var Xl;if(f){var Yl="oninput"in document;if(!Yl){var mf=document.createElement("div");mf.setAttribute("oninput","return;"),Yl=typeof mf.oninput=="function"}Xl=Yl}else Xl=!1;pf=Xl&&(!document.documentMode||9<document.documentMode)}function gf(){ro&&(ro.detachEvent("onpropertychange",vf),so=ro=null)}function vf(t){if(t.propertyName==="value"&&ia(so)){var i=[];hf(i,so,t,Ne(t)),On(Fg,i)}}function Og(t,i,o){t==="focusin"?(gf(),ro=i,so=o,ro.attachEvent("onpropertychange",vf)):t==="focusout"&&gf()}function zg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ia(so)}function Bg(t,i){if(t==="click")return ia(i)}function Hg(t,i){if(t==="input"||t==="change")return ia(i)}function Vg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var $n=typeof Object.is=="function"?Object.is:Vg;function oo(t,i){if($n(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var u=o[l];if(!p.call(i,u)||!$n(t[u],i[u]))return!1}return!0}function _f(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xf(t,i){var o=_f(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=_f(o)}}function yf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?yf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Sf(){for(var t=window,i=z();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=z(t.document)}return i}function ql(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Gg(t){var i=Sf(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&yf(o.ownerDocument.documentElement,o)){if(l!==null&&ql(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=o.textContent.length,h=Math.min(l.start,u);l=l.end===void 0?h:Math.min(l.end,u),!t.extend&&h>l&&(u=l,l=h,h=u),u=xf(o,h);var E=xf(o,l);u&&E&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Wg=f&&"documentMode"in document&&11>=document.documentMode,ts=null,$l=null,ao=null,Kl=!1;function Ef(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Kl||ts==null||ts!==z(l)||(l=ts,"selectionStart"in l&&ql(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ao&&oo(ao,l)||(ao=l,l=aa($l,"onSelect"),0<l.length&&(i=new Bl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=ts)))}function ra(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ns={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},Zl={},Mf={};f&&(Mf=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function sa(t){if(Zl[t])return Zl[t];if(!ns[t])return t;var i=ns[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Mf)return Zl[t]=i[o];return t}var wf=sa("animationend"),Tf=sa("animationiteration"),Af=sa("animationstart"),Cf=sa("transitionend"),Rf=new Map,bf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(t,i){Rf.set(t,i),c(i,[t])}for(var Ql=0;Ql<bf.length;Ql++){var Jl=bf[Ql],jg=Jl.toLowerCase(),Xg=Jl[0].toUpperCase()+Jl.slice(1);qi(jg,"on"+Xg)}qi(wf,"onAnimationEnd"),qi(Tf,"onAnimationIteration"),qi(Af,"onAnimationStart"),qi("dblclick","onDoubleClick"),qi("focusin","onFocus"),qi("focusout","onBlur"),qi(Cf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yg=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function Pf(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Xo(l,i,void 0,t),t.currentTarget=null}function Lf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],u=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var U=l[E],O=U.instance,ee=U.currentTarget;if(U=U.listener,O!==h&&u.isPropagationStopped())break e;Pf(u,U,ee),h=O}else for(E=0;E<l.length;E++){if(U=l[E],O=U.instance,ee=U.currentTarget,U=U.listener,O!==h&&u.isPropagationStopped())break e;Pf(u,U,ee),h=O}}}if(vi)throw t=$r,vi=!1,$r=null,t}function Nt(t,i){var o=i[ac];o===void 0&&(o=i[ac]=new Set);var l=t+"__bubble";o.has(l)||(Nf(i,t,2,!1),o.add(l))}function ec(t,i,o){var l=0;i&&(l|=4),Nf(o,t,l,i)}var oa="_reactListening"+Math.random().toString(36).slice(2);function co(t){if(!t[oa]){t[oa]=!0,r.forEach(function(o){o!=="selectionchange"&&(Yg.has(o)||ec(o,!1,t),ec(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[oa]||(i[oa]=!0,ec("selectionchange",!1,i))}}function Nf(t,i,o,l){switch(ef(i)){case 1:var u=ag;break;case 4:u=lg;break;default:u=kl}o=u.bind(null,i,o,t),u=void 0,!qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,o,{capture:!0,passive:u}):t.addEventListener(i,o,!0):u!==void 0?t.addEventListener(i,o,{passive:u}):t.addEventListener(i,o,!1)}function tc(t,i,o,l,u){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var U=l.stateNode.containerInfo;if(U===u||U.nodeType===8&&U.parentNode===u)break;if(E===4)for(E=l.return;E!==null;){var O=E.tag;if((O===3||O===4)&&(O=E.stateNode.containerInfo,O===u||O.nodeType===8&&O.parentNode===u))return;E=E.return}for(;U!==null;){if(E=yr(U),E===null)return;if(O=E.tag,O===5||O===6){l=h=E;continue e}U=U.parentNode}}l=l.return}On(function(){var ee=h,_e=Ne(o),Se=[];e:{var ve=Rf.get(t);if(ve!==void 0){var Ue=Bl,He=t;switch(t){case"keypress":if(ea(o)===0)break e;case"keydown":case"keyup":Ue=Mg;break;case"focusin":He="focus",Ue=Gl;break;case"focusout":He="blur",Ue=Gl;break;case"beforeblur":case"afterblur":Ue=Gl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=rf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=dg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=Ag;break;case wf:case Tf:case Af:Ue=pg;break;case Cf:Ue=Rg;break;case"scroll":Ue=cg;break;case"wheel":Ue=Pg;break;case"copy":case"cut":case"paste":Ue=gg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=of}var Ve=(i&4)!==0,Ht=!Ve&&t==="scroll",Y=Ve?ve!==null?ve+"Capture":null:ve;Ve=[];for(var H=ee,$;H!==null;){$=H;var Me=$.stateNode;if($.tag===5&&Me!==null&&($=Me,Y!==null&&(Me=Bi(H,Y),Me!=null&&Ve.push(uo(H,Me,$)))),Ht)break;H=H.return}0<Ve.length&&(ve=new Ue(ve,He,null,o,_e),Se.push({event:ve,listeners:Ve}))}}if((i&7)===0){e:{if(ve=t==="mouseover"||t==="pointerover",Ue=t==="mouseout"||t==="pointerout",ve&&o!==V&&(He=o.relatedTarget||o.fromElement)&&(yr(He)||He[yi]))break e;if((Ue||ve)&&(ve=_e.window===_e?_e:(ve=_e.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ue?(He=o.relatedTarget||o.toElement,Ue=ee,He=He?yr(He):null,He!==null&&(Ht=_i(He),He!==Ht||He.tag!==5&&He.tag!==6)&&(He=null)):(Ue=null,He=ee),Ue!==He)){if(Ve=rf,Me="onMouseLeave",Y="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=of,Me="onPointerLeave",Y="onPointerEnter",H="pointer"),Ht=Ue==null?ve:ss(Ue),$=He==null?ve:ss(He),ve=new Ve(Me,H+"leave",Ue,o,_e),ve.target=Ht,ve.relatedTarget=$,Me=null,yr(_e)===ee&&(Ve=new Ve(Y,H+"enter",He,o,_e),Ve.target=$,Ve.relatedTarget=Ht,Me=Ve),Ht=Me,Ue&&He)t:{for(Ve=Ue,Y=He,H=0,$=Ve;$;$=is($))H++;for($=0,Me=Y;Me;Me=is(Me))$++;for(;0<H-$;)Ve=is(Ve),H--;for(;0<$-H;)Y=is(Y),$--;for(;H--;){if(Ve===Y||Y!==null&&Ve===Y.alternate)break t;Ve=is(Ve),Y=is(Y)}Ve=null}else Ve=null;Ue!==null&&Df(Se,ve,Ue,Ve,!1),He!==null&&Ht!==null&&Df(Se,Ht,He,Ve,!0)}}e:{if(ve=ee?ss(ee):window,Ue=ve.nodeName&&ve.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ve.type==="file")var je=kg;else if(ff(ve))if(pf)je=Hg;else{je=zg;var qe=Og}else(Ue=ve.nodeName)&&Ue.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(je=Bg);if(je&&(je=je(t,ee))){hf(Se,je,o,_e);break e}qe&&qe(t,ve,ee),t==="focusout"&&(qe=ve._wrapperState)&&qe.controlled&&ve.type==="number"&&Je(ve,"number",ve.value)}switch(qe=ee?ss(ee):window,t){case"focusin":(ff(qe)||qe.contentEditable==="true")&&(ts=qe,$l=ee,ao=null);break;case"focusout":ao=$l=ts=null;break;case"mousedown":Kl=!0;break;case"contextmenu":case"mouseup":case"dragend":Kl=!1,Ef(Se,o,_e);break;case"selectionchange":if(Wg)break;case"keydown":case"keyup":Ef(Se,o,_e)}var $e;if(jl)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else es?uf(t,o)&&(nt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(af&&o.locale!=="ko"&&(es||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&es&&($e=tf()):(Yi=_e,zl="value"in Yi?Yi.value:Yi.textContent,es=!0)),qe=aa(ee,nt),0<qe.length&&(nt=new sf(nt,t,null,o,_e),Se.push({event:nt,listeners:qe}),$e?nt.data=$e:($e=df(o),$e!==null&&(nt.data=$e)))),($e=Ng?Dg(t,o):Ig(t,o))&&(ee=aa(ee,"onBeforeInput"),0<ee.length&&(_e=new sf("onBeforeInput","beforeinput",null,o,_e),Se.push({event:_e,listeners:ee}),_e.data=$e))}Lf(Se,i)})}function uo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function aa(t,i){for(var o=i+"Capture",l=[];t!==null;){var u=t,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=Bi(t,o),h!=null&&l.unshift(uo(t,h,u)),h=Bi(t,i),h!=null&&l.push(uo(t,h,u))),t=t.return}return l}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Df(t,i,o,l,u){for(var h=i._reactName,E=[];o!==null&&o!==l;){var U=o,O=U.alternate,ee=U.stateNode;if(O!==null&&O===l)break;U.tag===5&&ee!==null&&(U=ee,u?(O=Bi(o,h),O!=null&&E.unshift(uo(o,O,U))):u||(O=Bi(o,h),O!=null&&E.push(uo(o,O,U)))),o=o.return}E.length!==0&&t.push({event:i,listeners:E})}var qg=/\r\n?/g,$g=/\u0000|\uFFFD/g;function If(t){return(typeof t=="string"?t:""+t).replace(qg,`
`).replace($g,"")}function la(t,i,o){if(i=If(i),If(t)!==i&&o)throw Error(n(425))}function ca(){}var nc=null,ic=null;function rc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var sc=typeof setTimeout=="function"?setTimeout:void 0,Kg=typeof clearTimeout=="function"?clearTimeout:void 0,Uf=typeof Promise=="function"?Promise:void 0,Zg=typeof queueMicrotask=="function"?queueMicrotask:typeof Uf<"u"?function(t){return Uf.resolve(null).then(t).catch(Qg)}:sc;function Qg(t){setTimeout(function(){throw t})}function oc(t,i){var o=i,l=0;do{var u=o.nextSibling;if(t.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(l===0){t.removeChild(u),eo(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=u}while(o);eo(i)}function $i(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Ff(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var rs=Math.random().toString(36).slice(2),ci="__reactFiber$"+rs,fo="__reactProps$"+rs,yi="__reactContainer$"+rs,ac="__reactEvents$"+rs,Jg="__reactListeners$"+rs,e0="__reactHandles$"+rs;function yr(t){var i=t[ci];if(i)return i;for(var o=t.parentNode;o;){if(i=o[yi]||o[ci]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Ff(t);t!==null;){if(o=t[ci])return o;t=Ff(t)}return i}t=o,o=t.parentNode}return null}function ho(t){return t=t[ci]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ua(t){return t[fo]||null}var lc=[],os=-1;function Ki(t){return{current:t}}function Dt(t){0>os||(t.current=lc[os],lc[os]=null,os--)}function Lt(t,i){os++,lc[os]=t.current,t.current=i}var Zi={},un=Ki(Zi),xn=Ki(!1),Sr=Zi;function as(t,i){var o=t.type.contextTypes;if(!o)return Zi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in o)u[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function yn(t){return t=t.childContextTypes,t!=null}function da(){Dt(xn),Dt(un)}function kf(t,i,o){if(un.current!==Zi)throw Error(n(168));Lt(un,i),Lt(xn,o)}function Of(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(n(108,xe(t)||"Unknown",u));return se({},o,l)}function fa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,Sr=un.current,Lt(un,t),Lt(xn,xn.current),!0}function zf(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Of(t,i,Sr),l.__reactInternalMemoizedMergedChildContext=t,Dt(xn),Dt(un),Lt(un,t)):Dt(xn),Lt(xn,o)}var Si=null,ha=!1,cc=!1;function Bf(t){Si===null?Si=[t]:Si.push(t)}function t0(t){ha=!0,Bf(t)}function Qi(){if(!cc&&Si!==null){cc=!0;var t=0,i=wt;try{var o=Si;for(wt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Si=null,ha=!1}catch(u){throw Si!==null&&(Si=Si.slice(t+1)),J(Ke,Qi),u}finally{wt=i,cc=!1}}return null}var ls=[],cs=0,pa=null,ma=0,zn=[],Bn=0,Er=null,Ei=1,Mi="";function Mr(t,i){ls[cs++]=ma,ls[cs++]=pa,pa=t,ma=i}function Hf(t,i,o){zn[Bn++]=Ei,zn[Bn++]=Mi,zn[Bn++]=Er,Er=t;var l=Ei;t=Mi;var u=32-Oe(l)-1;l&=~(1<<u),o+=1;var h=32-Oe(i)+u;if(30<h){var E=u-u%5;h=(l&(1<<E)-1).toString(32),l>>=E,u-=E,Ei=1<<32-Oe(i)+u|o<<u|l,Mi=h+t}else Ei=1<<h|o<<u|l,Mi=t}function uc(t){t.return!==null&&(Mr(t,1),Hf(t,1,0))}function dc(t){for(;t===pa;)pa=ls[--cs],ls[cs]=null,ma=ls[--cs],ls[cs]=null;for(;t===Er;)Er=zn[--Bn],zn[Bn]=null,Mi=zn[--Bn],zn[Bn]=null,Ei=zn[--Bn],zn[Bn]=null}var Nn=null,Dn=null,Ft=!1,Kn=null;function Vf(t,i){var o=Wn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Gf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Nn=t,Dn=$i(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Nn=t,Dn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Er!==null?{id:Ei,overflow:Mi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Wn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Nn=t,Dn=null,!0):!1;default:return!1}}function fc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hc(t){if(Ft){var i=Dn;if(i){var o=i;if(!Gf(t,i)){if(fc(t))throw Error(n(418));i=$i(o.nextSibling);var l=Nn;i&&Gf(t,i)?Vf(l,o):(t.flags=t.flags&-4097|2,Ft=!1,Nn=t)}}else{if(fc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,Nn=t}}}function Wf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function ga(t){if(t!==Nn)return!1;if(!Ft)return Wf(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!rc(t.type,t.memoizedProps)),i&&(i=Dn)){if(fc(t))throw jf(),Error(n(418));for(;i;)Vf(t,i),i=$i(i.nextSibling)}if(Wf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Dn=$i(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Dn=null}}else Dn=Nn?$i(t.stateNode.nextSibling):null;return!0}function jf(){for(var t=Dn;t;)t=$i(t.nextSibling)}function us(){Dn=Nn=null,Ft=!1}function pc(t){Kn===null?Kn=[t]:Kn.push(t)}var n0=N.ReactCurrentBatchConfig;function po(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var u=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var U=u.refs;E===null?delete U[h]:U[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function va(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Xf(t){var i=t._init;return i(t._payload)}function Yf(t){function i(Y,H){if(t){var $=Y.deletions;$===null?(Y.deletions=[H],Y.flags|=16):$.push(H)}}function o(Y,H){if(!t)return null;for(;H!==null;)i(Y,H),H=H.sibling;return null}function l(Y,H){for(Y=new Map;H!==null;)H.key!==null?Y.set(H.key,H):Y.set(H.index,H),H=H.sibling;return Y}function u(Y,H){return Y=or(Y,H),Y.index=0,Y.sibling=null,Y}function h(Y,H,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<H?(Y.flags|=2,H):$):(Y.flags|=2,H)):(Y.flags|=1048576,H)}function E(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function U(Y,H,$,Me){return H===null||H.tag!==6?(H=su($,Y.mode,Me),H.return=Y,H):(H=u(H,$),H.return=Y,H)}function O(Y,H,$,Me){var je=$.type;return je===D?_e(Y,H,$.props.children,Me,$.key):H!==null&&(H.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ne&&Xf(je)===H.type)?(Me=u(H,$.props),Me.ref=po(Y,H,$),Me.return=Y,Me):(Me=Ha($.type,$.key,$.props,null,Y.mode,Me),Me.ref=po(Y,H,$),Me.return=Y,Me)}function ee(Y,H,$,Me){return H===null||H.tag!==4||H.stateNode.containerInfo!==$.containerInfo||H.stateNode.implementation!==$.implementation?(H=ou($,Y.mode,Me),H.return=Y,H):(H=u(H,$.children||[]),H.return=Y,H)}function _e(Y,H,$,Me,je){return H===null||H.tag!==7?(H=Lr($,Y.mode,Me,je),H.return=Y,H):(H=u(H,$),H.return=Y,H)}function Se(Y,H,$){if(typeof H=="string"&&H!==""||typeof H=="number")return H=su(""+H,Y.mode,$),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case q:return $=Ha(H.type,H.key,H.props,null,Y.mode,$),$.ref=po(Y,null,H),$.return=Y,$;case F:return H=ou(H,Y.mode,$),H.return=Y,H;case ne:var Me=H._init;return Se(Y,Me(H._payload),$)}if(L(H)||ue(H))return H=Lr(H,Y.mode,$,null),H.return=Y,H;va(Y,H)}return null}function ve(Y,H,$,Me){var je=H!==null?H.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return je!==null?null:U(Y,H,""+$,Me);if(typeof $=="object"&&$!==null){switch($.$$typeof){case q:return $.key===je?O(Y,H,$,Me):null;case F:return $.key===je?ee(Y,H,$,Me):null;case ne:return je=$._init,ve(Y,H,je($._payload),Me)}if(L($)||ue($))return je!==null?null:_e(Y,H,$,Me,null);va(Y,$)}return null}function Ue(Y,H,$,Me,je){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return Y=Y.get($)||null,U(H,Y,""+Me,je);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case q:return Y=Y.get(Me.key===null?$:Me.key)||null,O(H,Y,Me,je);case F:return Y=Y.get(Me.key===null?$:Me.key)||null,ee(H,Y,Me,je);case ne:var qe=Me._init;return Ue(Y,H,$,qe(Me._payload),je)}if(L(Me)||ue(Me))return Y=Y.get($)||null,_e(H,Y,Me,je,null);va(H,Me)}return null}function He(Y,H,$,Me){for(var je=null,qe=null,$e=H,nt=H=0,tn=null;$e!==null&&nt<$.length;nt++){$e.index>nt?(tn=$e,$e=null):tn=$e.sibling;var yt=ve(Y,$e,$[nt],Me);if(yt===null){$e===null&&($e=tn);break}t&&$e&&yt.alternate===null&&i(Y,$e),H=h(yt,H,nt),qe===null?je=yt:qe.sibling=yt,qe=yt,$e=tn}if(nt===$.length)return o(Y,$e),Ft&&Mr(Y,nt),je;if($e===null){for(;nt<$.length;nt++)$e=Se(Y,$[nt],Me),$e!==null&&(H=h($e,H,nt),qe===null?je=$e:qe.sibling=$e,qe=$e);return Ft&&Mr(Y,nt),je}for($e=l(Y,$e);nt<$.length;nt++)tn=Ue($e,Y,nt,$[nt],Me),tn!==null&&(t&&tn.alternate!==null&&$e.delete(tn.key===null?nt:tn.key),H=h(tn,H,nt),qe===null?je=tn:qe.sibling=tn,qe=tn);return t&&$e.forEach(function(ar){return i(Y,ar)}),Ft&&Mr(Y,nt),je}function Ve(Y,H,$,Me){var je=ue($);if(typeof je!="function")throw Error(n(150));if($=je.call($),$==null)throw Error(n(151));for(var qe=je=null,$e=H,nt=H=0,tn=null,yt=$.next();$e!==null&&!yt.done;nt++,yt=$.next()){$e.index>nt?(tn=$e,$e=null):tn=$e.sibling;var ar=ve(Y,$e,yt.value,Me);if(ar===null){$e===null&&($e=tn);break}t&&$e&&ar.alternate===null&&i(Y,$e),H=h(ar,H,nt),qe===null?je=ar:qe.sibling=ar,qe=ar,$e=tn}if(yt.done)return o(Y,$e),Ft&&Mr(Y,nt),je;if($e===null){for(;!yt.done;nt++,yt=$.next())yt=Se(Y,yt.value,Me),yt!==null&&(H=h(yt,H,nt),qe===null?je=yt:qe.sibling=yt,qe=yt);return Ft&&Mr(Y,nt),je}for($e=l(Y,$e);!yt.done;nt++,yt=$.next())yt=Ue($e,Y,nt,yt.value,Me),yt!==null&&(t&&yt.alternate!==null&&$e.delete(yt.key===null?nt:yt.key),H=h(yt,H,nt),qe===null?je=yt:qe.sibling=yt,qe=yt);return t&&$e.forEach(function(U0){return i(Y,U0)}),Ft&&Mr(Y,nt),je}function Ht(Y,H,$,Me){if(typeof $=="object"&&$!==null&&$.type===D&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case q:e:{for(var je=$.key,qe=H;qe!==null;){if(qe.key===je){if(je=$.type,je===D){if(qe.tag===7){o(Y,qe.sibling),H=u(qe,$.props.children),H.return=Y,Y=H;break e}}else if(qe.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ne&&Xf(je)===qe.type){o(Y,qe.sibling),H=u(qe,$.props),H.ref=po(Y,qe,$),H.return=Y,Y=H;break e}o(Y,qe);break}else i(Y,qe);qe=qe.sibling}$.type===D?(H=Lr($.props.children,Y.mode,Me,$.key),H.return=Y,Y=H):(Me=Ha($.type,$.key,$.props,null,Y.mode,Me),Me.ref=po(Y,H,$),Me.return=Y,Y=Me)}return E(Y);case F:e:{for(qe=$.key;H!==null;){if(H.key===qe)if(H.tag===4&&H.stateNode.containerInfo===$.containerInfo&&H.stateNode.implementation===$.implementation){o(Y,H.sibling),H=u(H,$.children||[]),H.return=Y,Y=H;break e}else{o(Y,H);break}else i(Y,H);H=H.sibling}H=ou($,Y.mode,Me),H.return=Y,Y=H}return E(Y);case ne:return qe=$._init,Ht(Y,H,qe($._payload),Me)}if(L($))return He(Y,H,$,Me);if(ue($))return Ve(Y,H,$,Me);va(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,H!==null&&H.tag===6?(o(Y,H.sibling),H=u(H,$),H.return=Y,Y=H):(o(Y,H),H=su($,Y.mode,Me),H.return=Y,Y=H),E(Y)):o(Y,H)}return Ht}var ds=Yf(!0),qf=Yf(!1),_a=Ki(null),xa=null,fs=null,mc=null;function gc(){mc=fs=xa=null}function vc(t){var i=_a.current;Dt(_a),t._currentValue=i}function _c(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function hs(t,i){xa=t,mc=fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Sn=!0),t.firstContext=null)}function Hn(t){var i=t._currentValue;if(mc!==t)if(t={context:t,memoizedValue:i,next:null},fs===null){if(xa===null)throw Error(n(308));fs=t,xa.dependencies={lanes:0,firstContext:t}}else fs=fs.next=t;return i}var wr=null;function xc(t){wr===null?wr=[t]:wr.push(t)}function $f(t,i,o,l){var u=i.interleaved;return u===null?(o.next=o,xc(i)):(o.next=u.next,u.next=o),i.interleaved=o,wi(t,l)}function wi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Ji=!1;function yc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function er(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(vt&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,wi(t,o)}return u=l.interleaved,u===null?(i.next=i,xc(l)):(i.next=u.next,u.next=i),l.interleaved=i,wi(t,o)}function ya(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Il(t,o)}}function Zf(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var u=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?u=h=E:h=h.next=E,o=o.next}while(o!==null);h===null?u=h=i:h=h.next=i}else u=h=i;o={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Sa(t,i,o,l){var u=t.updateQueue;Ji=!1;var h=u.firstBaseUpdate,E=u.lastBaseUpdate,U=u.shared.pending;if(U!==null){u.shared.pending=null;var O=U,ee=O.next;O.next=null,E===null?h=ee:E.next=ee,E=O;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,U=_e.lastBaseUpdate,U!==E&&(U===null?_e.firstBaseUpdate=ee:U.next=ee,_e.lastBaseUpdate=O))}if(h!==null){var Se=u.baseState;E=0,_e=ee=O=null,U=h;do{var ve=U.lane,Ue=U.eventTime;if((l&ve)===ve){_e!==null&&(_e=_e.next={eventTime:Ue,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var He=t,Ve=U;switch(ve=i,Ue=o,Ve.tag){case 1:if(He=Ve.payload,typeof He=="function"){Se=He.call(Ue,Se,ve);break e}Se=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ve.payload,ve=typeof He=="function"?He.call(Ue,Se,ve):He,ve==null)break e;Se=se({},Se,ve);break e;case 2:Ji=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,ve=u.effects,ve===null?u.effects=[U]:ve.push(U))}else Ue={eventTime:Ue,lane:ve,tag:U.tag,payload:U.payload,callback:U.callback,next:null},_e===null?(ee=_e=Ue,O=Se):_e=_e.next=Ue,E|=ve;if(U=U.next,U===null){if(U=u.shared.pending,U===null)break;ve=U,U=ve.next,ve.next=null,u.lastBaseUpdate=ve,u.shared.pending=null}}while(!0);if(_e===null&&(O=Se),u.baseState=O,u.firstBaseUpdate=ee,u.lastBaseUpdate=_e,i=u.shared.interleaved,i!==null){u=i;do E|=u.lane,u=u.next;while(u!==i)}else h===null&&(u.shared.lanes=0);Cr|=E,t.lanes=E,t.memoizedState=Se}}function Qf(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],u=l.callback;if(u!==null){if(l.callback=null,l=o,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var mo={},ui=Ki(mo),go=Ki(mo),vo=Ki(mo);function Tr(t){if(t===mo)throw Error(n(174));return t}function Sc(t,i){switch(Lt(vo,i),Lt(go,t),Lt(ui,mo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ce(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ce(i,t)}Dt(ui),Lt(ui,i)}function ps(){Dt(ui),Dt(go),Dt(vo)}function Jf(t){Tr(vo.current);var i=Tr(ui.current),o=Ce(i,t.type);i!==o&&(Lt(go,t),Lt(ui,o))}function Ec(t){go.current===t&&(Dt(ui),Dt(go))}var Ot=Ki(0);function Ea(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Mc=[];function wc(){for(var t=0;t<Mc.length;t++)Mc[t]._workInProgressVersionPrimary=null;Mc.length=0}var Ma=N.ReactCurrentDispatcher,Tc=N.ReactCurrentBatchConfig,Ar=0,zt=null,Yt=null,Jt=null,wa=!1,_o=!1,xo=0,i0=0;function dn(){throw Error(n(321))}function Ac(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!$n(t[o],i[o]))return!1;return!0}function Cc(t,i,o,l,u,h){if(Ar=h,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ma.current=t===null||t.memoizedState===null?a0:l0,t=o(l,u),_o){h=0;do{if(_o=!1,xo=0,25<=h)throw Error(n(301));h+=1,Jt=Yt=null,i.updateQueue=null,Ma.current=c0,t=o(l,u)}while(_o)}if(Ma.current=Ca,i=Yt!==null&&Yt.next!==null,Ar=0,Jt=Yt=zt=null,wa=!1,i)throw Error(n(300));return t}function Rc(){var t=xo!==0;return xo=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?zt.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function Vn(){if(Yt===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var i=Jt===null?zt.memoizedState:Jt.next;if(i!==null)Jt=i,Yt=t;else{if(t===null)throw Error(n(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Jt===null?zt.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function yo(t,i){return typeof i=="function"?i(t):i}function bc(t){var i=Vn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Yt,u=l.baseQueue,h=o.pending;if(h!==null){if(u!==null){var E=u.next;u.next=h.next,h.next=E}l.baseQueue=u=h,o.pending=null}if(u!==null){h=u.next,l=l.baseState;var U=E=null,O=null,ee=h;do{var _e=ee.lane;if((Ar&_e)===_e)O!==null&&(O=O.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),l=ee.hasEagerState?ee.eagerState:t(l,ee.action);else{var Se={lane:_e,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};O===null?(U=O=Se,E=l):O=O.next=Se,zt.lanes|=_e,Cr|=_e}ee=ee.next}while(ee!==null&&ee!==h);O===null?E=l:O.next=U,$n(l,i.memoizedState)||(Sn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=O,o.lastRenderedState=l}if(t=o.interleaved,t!==null){u=t;do h=u.lane,zt.lanes|=h,Cr|=h,u=u.next;while(u!==t)}else u===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Pc(t){var i=Vn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,u=o.pending,h=i.memoizedState;if(u!==null){o.pending=null;var E=u=u.next;do h=t(h,E.action),E=E.next;while(E!==u);$n(h,i.memoizedState)||(Sn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function eh(){}function th(t,i){var o=zt,l=Vn(),u=i(),h=!$n(l.memoizedState,u);if(h&&(l.memoizedState=u,Sn=!0),l=l.queue,Lc(rh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||Jt!==null&&Jt.memoizedState.tag&1){if(o.flags|=2048,So(9,ih.bind(null,o,l,u,i),void 0,null),en===null)throw Error(n(349));(Ar&30)!==0||nh(o,i,u)}return u}function nh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function ih(t,i,o,l){i.value=o,i.getSnapshot=l,sh(i)&&oh(t)}function rh(t,i,o){return o(function(){sh(i)&&oh(t)})}function sh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!$n(t,o)}catch{return!0}}function oh(t){var i=wi(t,1);i!==null&&ei(i,t,1,-1)}function ah(t){var i=di();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:t},i.queue=t,t=t.dispatch=o0.bind(null,zt,t),[i.memoizedState,t]}function So(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function lh(){return Vn().memoizedState}function Ta(t,i,o,l){var u=di();zt.flags|=t,u.memoizedState=So(1|i,o,void 0,l===void 0?null:l)}function Aa(t,i,o,l){var u=Vn();l=l===void 0?null:l;var h=void 0;if(Yt!==null){var E=Yt.memoizedState;if(h=E.destroy,l!==null&&Ac(l,E.deps)){u.memoizedState=So(i,o,h,l);return}}zt.flags|=t,u.memoizedState=So(1|i,o,h,l)}function ch(t,i){return Ta(8390656,8,t,i)}function Lc(t,i){return Aa(2048,8,t,i)}function uh(t,i){return Aa(4,2,t,i)}function dh(t,i){return Aa(4,4,t,i)}function fh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function hh(t,i,o){return o=o!=null?o.concat([t]):null,Aa(4,4,fh.bind(null,i,t),o)}function Nc(){}function ph(t,i){var o=Vn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Ac(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function mh(t,i){var o=Vn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Ac(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function gh(t,i,o){return(Ar&21)===0?(t.baseState&&(t.baseState=!1,Sn=!0),t.memoizedState=o):($n(o,i)||(o=Zr(),zt.lanes|=o,Cr|=o,t.baseState=!0),i)}function r0(t,i){var o=wt;wt=o!==0&&4>o?o:4,t(!0);var l=Tc.transition;Tc.transition={};try{t(!1),i()}finally{wt=o,Tc.transition=l}}function vh(){return Vn().memoizedState}function s0(t,i,o){var l=rr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},_h(t))xh(i,o);else if(o=$f(t,i,o,l),o!==null){var u=vn();ei(o,t,l,u),yh(o,i,l)}}function o0(t,i,o){var l=rr(t),u={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(_h(t))xh(i,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,U=h(E,o);if(u.hasEagerState=!0,u.eagerState=U,$n(U,E)){var O=i.interleaved;O===null?(u.next=u,xc(i)):(u.next=O.next,O.next=u),i.interleaved=u;return}}catch{}finally{}o=$f(t,i,u,l),o!==null&&(u=vn(),ei(o,t,l,u),yh(o,i,l))}}function _h(t){var i=t.alternate;return t===zt||i!==null&&i===zt}function xh(t,i){_o=wa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function yh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Il(t,o)}}var Ca={readContext:Hn,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},a0={readContext:Hn,useCallback:function(t,i){return di().memoizedState=[t,i===void 0?null:i],t},useContext:Hn,useEffect:ch,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ta(4194308,4,fh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ta(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ta(4,2,t,i)},useMemo:function(t,i){var o=di();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=di();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=s0.bind(null,zt,t),[l.memoizedState,t]},useRef:function(t){var i=di();return t={current:t},i.memoizedState=t},useState:ah,useDebugValue:Nc,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=ah(!1),i=t[0];return t=r0.bind(null,t[1]),di().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=zt,u=di();if(Ft){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),en===null)throw Error(n(349));(Ar&30)!==0||nh(l,i,o)}u.memoizedState=o;var h={value:o,getSnapshot:i};return u.queue=h,ch(rh.bind(null,l,h,t),[t]),l.flags|=2048,So(9,ih.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=di(),i=en.identifierPrefix;if(Ft){var o=Mi,l=Ei;o=(l&~(1<<32-Oe(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=xo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=i0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},l0={readContext:Hn,useCallback:ph,useContext:Hn,useEffect:Lc,useImperativeHandle:hh,useInsertionEffect:uh,useLayoutEffect:dh,useMemo:mh,useReducer:bc,useRef:lh,useState:function(){return bc(yo)},useDebugValue:Nc,useDeferredValue:function(t){var i=Vn();return gh(i,Yt.memoizedState,t)},useTransition:function(){var t=bc(yo)[0],i=Vn().memoizedState;return[t,i]},useMutableSource:eh,useSyncExternalStore:th,useId:vh,unstable_isNewReconciler:!1},c0={readContext:Hn,useCallback:ph,useContext:Hn,useEffect:Lc,useImperativeHandle:hh,useInsertionEffect:uh,useLayoutEffect:dh,useMemo:mh,useReducer:Pc,useRef:lh,useState:function(){return Pc(yo)},useDebugValue:Nc,useDeferredValue:function(t){var i=Vn();return Yt===null?i.memoizedState=t:gh(i,Yt.memoizedState,t)},useTransition:function(){var t=Pc(yo)[0],i=Vn().memoizedState;return[t,i]},useMutableSource:eh,useSyncExternalStore:th,useId:vh,unstable_isNewReconciler:!1};function Zn(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Dc(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:se({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ra={isMounted:function(t){return(t=t._reactInternals)?_i(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=vn(),u=rr(t),h=Ti(l,u);h.payload=i,o!=null&&(h.callback=o),i=er(t,h,u),i!==null&&(ei(i,t,u,l),ya(i,t,u))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=vn(),u=rr(t),h=Ti(l,u);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=er(t,h,u),i!==null&&(ei(i,t,u,l),ya(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=vn(),l=rr(t),u=Ti(o,l);u.tag=2,i!=null&&(u.callback=i),i=er(t,u,l),i!==null&&(ei(i,t,l,o),ya(i,t,l))}};function Sh(t,i,o,l,u,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!oo(o,l)||!oo(u,h):!0}function Eh(t,i,o){var l=!1,u=Zi,h=i.contextType;return typeof h=="object"&&h!==null?h=Hn(h):(u=yn(i)?Sr:un.current,l=i.contextTypes,h=(l=l!=null)?as(t,u):Zi),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ra,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=h),i}function Mh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Ra.enqueueReplaceState(i,i.state,null)}function Ic(t,i,o,l){var u=t.stateNode;u.props=o,u.state=t.memoizedState,u.refs={},yc(t);var h=i.contextType;typeof h=="object"&&h!==null?u.context=Hn(h):(h=yn(i)?Sr:un.current,u.context=as(t,h)),u.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Dc(t,i,h,o),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Ra.enqueueReplaceState(u,u.state,null),Sa(t,o,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,i){try{var o="",l=i;do o+=ae(l),l=l.return;while(l);var u=o}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:u,digest:null}}function Uc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Fc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var u0=typeof WeakMap=="function"?WeakMap:Map;function wh(t,i,o){o=Ti(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Ua||(Ua=!0,Zc=l),Fc(t,i)},o}function Th(t,i,o){o=Ti(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;o.payload=function(){return l(u)},o.callback=function(){Fc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Fc(t,i),typeof l!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function Ah(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new u0;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(o)||(u.add(o),t=w0.bind(null,t,i,o),i.then(t,t))}function Ch(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Rh(t,i,o,l,u){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ti(-1,1),i.tag=2,er(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var d0=N.ReactCurrentOwner,Sn=!1;function gn(t,i,o,l){i.child=t===null?qf(i,null,o,l):ds(i,t.child,o,l)}function bh(t,i,o,l,u){o=o.render;var h=i.ref;return hs(i,u),l=Cc(t,i,o,l,h,u),o=Rc(),t!==null&&!Sn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Ai(t,i,u)):(Ft&&o&&uc(i),i.flags|=1,gn(t,i,l,u),i.child)}function Ph(t,i,o,l,u){if(t===null){var h=o.type;return typeof h=="function"&&!ru(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Lh(t,i,h,l,u)):(t=Ha(o.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&u)===0){var E=h.memoizedProps;if(o=o.compare,o=o!==null?o:oo,o(E,l)&&t.ref===i.ref)return Ai(t,i,u)}return i.flags|=1,t=or(h,l),t.ref=i.ref,t.return=i,i.child=t}function Lh(t,i,o,l,u){if(t!==null){var h=t.memoizedProps;if(oo(h,l)&&t.ref===i.ref)if(Sn=!1,i.pendingProps=l=h,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Sn=!0);else return i.lanes=t.lanes,Ai(t,i,u)}return kc(t,i,o,l,u)}function Nh(t,i,o){var l=i.pendingProps,u=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(vs,In),In|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Lt(vs,In),In|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Lt(vs,In),In|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Lt(vs,In),In|=l;return gn(t,i,u,o),i.child}function Dh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function kc(t,i,o,l,u){var h=yn(o)?Sr:un.current;return h=as(i,h),hs(i,u),o=Cc(t,i,o,l,h,u),l=Rc(),t!==null&&!Sn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Ai(t,i,u)):(Ft&&l&&uc(i),i.flags|=1,gn(t,i,o,u),i.child)}function Ih(t,i,o,l,u){if(yn(o)){var h=!0;fa(i)}else h=!1;if(hs(i,u),i.stateNode===null)Pa(t,i),Eh(i,o,l),Ic(i,o,l,u),l=!0;else if(t===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var O=E.context,ee=o.contextType;typeof ee=="object"&&ee!==null?ee=Hn(ee):(ee=yn(o)?Sr:un.current,ee=as(i,ee));var _e=o.getDerivedStateFromProps,Se=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";Se||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==l||O!==ee)&&Mh(i,E,l,ee),Ji=!1;var ve=i.memoizedState;E.state=ve,Sa(i,l,E,u),O=i.memoizedState,U!==l||ve!==O||xn.current||Ji?(typeof _e=="function"&&(Dc(i,o,_e,l),O=i.memoizedState),(U=Ji||Sh(i,o,U,l,ve,O,ee))?(Se||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),E.props=l,E.state=O,E.context=ee,l=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,Kf(t,i),U=i.memoizedProps,ee=i.type===i.elementType?U:Zn(i.type,U),E.props=ee,Se=i.pendingProps,ve=E.context,O=o.contextType,typeof O=="object"&&O!==null?O=Hn(O):(O=yn(o)?Sr:un.current,O=as(i,O));var Ue=o.getDerivedStateFromProps;(_e=typeof Ue=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==Se||ve!==O)&&Mh(i,E,l,O),Ji=!1,ve=i.memoizedState,E.state=ve,Sa(i,l,E,u);var He=i.memoizedState;U!==Se||ve!==He||xn.current||Ji?(typeof Ue=="function"&&(Dc(i,o,Ue,l),He=i.memoizedState),(ee=Ji||Sh(i,o,ee,l,ve,He,O)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,He,O),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,He,O)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=He),E.props=l,E.state=He,E.context=O,l=ee):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),l=!1)}return Oc(t,i,o,l,h,u)}function Oc(t,i,o,l,u,h){Dh(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return u&&zf(i,o,!1),Ai(t,i,h);l=i.stateNode,d0.current=i;var U=E&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=ds(i,t.child,null,h),i.child=ds(i,null,U,h)):gn(t,i,U,h),i.memoizedState=l.state,u&&zf(i,o,!0),i.child}function Uh(t){var i=t.stateNode;i.pendingContext?kf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&kf(t,i.context,!1),Sc(t,i.containerInfo)}function Fh(t,i,o,l,u){return us(),pc(u),i.flags|=256,gn(t,i,o,l),i.child}var zc={dehydrated:null,treeContext:null,retryLane:0};function Bc(t){return{baseLanes:t,cachePool:null,transitions:null}}function kh(t,i,o){var l=i.pendingProps,u=Ot.current,h=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=t!==null&&t.memoizedState===null?!1:(u&2)!==0),U?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Lt(Ot,u&1),t===null)return hc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,h?(l=i.mode,h=i.child,E={mode:"hidden",children:E},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=Va(E,l,0,null),t=Lr(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Bc(o),i.memoizedState=zc,t):Hc(i,E));if(u=t.memoizedState,u!==null&&(U=u.dehydrated,U!==null))return f0(t,i,E,l,U,u,o);if(h){h=l.fallback,E=i.mode,u=t.child,U=u.sibling;var O={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=or(u,O),l.subtreeFlags=u.subtreeFlags&14680064),U!==null?h=or(U,h):(h=Lr(h,E,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E=E===null?Bc(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~o,i.memoizedState=zc,l}return h=t.child,t=h.sibling,l=or(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Hc(t,i){return i=Va({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function ba(t,i,o,l){return l!==null&&pc(l),ds(i,t.child,null,o),t=Hc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function f0(t,i,o,l,u,h,E){if(o)return i.flags&256?(i.flags&=-257,l=Uc(Error(n(422))),ba(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,u=i.mode,l=Va({mode:"visible",children:l.children},u,0,null),h=Lr(h,u,E,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&ds(i,t.child,null,E),i.child.memoizedState=Bc(E),i.memoizedState=zc,h);if((i.mode&1)===0)return ba(t,i,E,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var U=l.dgst;return l=U,h=Error(n(419)),l=Uc(h,l,void 0),ba(t,i,E,l)}if(U=(E&t.childLanes)!==0,Sn||U){if(l=en,l!==null){switch(E&-E){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|E))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,wi(t,u),ei(l,t,u,-1))}return iu(),l=Uc(Error(n(421))),ba(t,i,E,l)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=T0.bind(null,t),u._reactRetry=i,null):(t=h.treeContext,Dn=$i(u.nextSibling),Nn=i,Ft=!0,Kn=null,t!==null&&(zn[Bn++]=Ei,zn[Bn++]=Mi,zn[Bn++]=Er,Ei=t.id,Mi=t.overflow,Er=i),i=Hc(i,l.children),i.flags|=4096,i)}function Oh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),_c(t.return,i,o)}function Vc(t,i,o,l,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:u}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=u)}function zh(t,i,o){var l=i.pendingProps,u=l.revealOrder,h=l.tail;if(gn(t,i,l.children,o),l=Ot.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Oh(t,o,i);else if(t.tag===19)Oh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Lt(Ot,l),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(o=i.child,u=null;o!==null;)t=o.alternate,t!==null&&Ea(t)===null&&(u=o),o=o.sibling;o=u,o===null?(u=i.child,i.child=null):(u=o.sibling,o.sibling=null),Vc(i,!1,u,o,h);break;case"backwards":for(o=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&Ea(t)===null){i.child=u;break}t=u.sibling,u.sibling=o,o=u,u=t}Vc(i,!0,o,null,h);break;case"together":Vc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Pa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ai(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Cr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=or(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=or(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function h0(t,i,o){switch(i.tag){case 3:Uh(i),us();break;case 5:Jf(i);break;case 1:yn(i.type)&&fa(i);break;case 4:Sc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;Lt(_a,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Lt(Ot,Ot.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?kh(t,i,o):(Lt(Ot,Ot.current&1),t=Ai(t,i,o),t!==null?t.sibling:null);Lt(Ot,Ot.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return zh(t,i,o);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Lt(Ot,Ot.current),l)break;return null;case 22:case 23:return i.lanes=0,Nh(t,i,o)}return Ai(t,i,o)}var Bh,Gc,Hh,Vh;Bh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Gc=function(){},Hh=function(t,i,o,l){var u=t.memoizedProps;if(u!==l){t=i.stateNode,Tr(ui.current);var h=null;switch(o){case"input":u=sn(t,u),l=sn(t,l),h=[];break;case"select":u=se({},u,{value:void 0}),l=se({},l,{value:void 0}),h=[];break;case"textarea":u=K(t,u),l=K(t,l),h=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ca)}it(o,l);var E;o=null;for(ee in u)if(!l.hasOwnProperty(ee)&&u.hasOwnProperty(ee)&&u[ee]!=null)if(ee==="style"){var U=u[ee];for(E in U)U.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(a.hasOwnProperty(ee)?h||(h=[]):(h=h||[]).push(ee,null));for(ee in l){var O=l[ee];if(U=u!=null?u[ee]:void 0,l.hasOwnProperty(ee)&&O!==U&&(O!=null||U!=null))if(ee==="style")if(U){for(E in U)!U.hasOwnProperty(E)||O&&O.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in O)O.hasOwnProperty(E)&&U[E]!==O[E]&&(o||(o={}),o[E]=O[E])}else o||(h||(h=[]),h.push(ee,o)),o=O;else ee==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,U=U?U.__html:void 0,O!=null&&U!==O&&(h=h||[]).push(ee,O)):ee==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(ee,""+O):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(a.hasOwnProperty(ee)?(O!=null&&ee==="onScroll"&&Nt("scroll",t),h||U===O||(h=[])):(h=h||[]).push(ee,O))}o&&(h=h||[]).push("style",o);var ee=h;(i.updateQueue=ee)&&(i.flags|=4)}},Vh=function(t,i,o,l){o!==l&&(i.flags|=4)};function Eo(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function fn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function p0(t,i,o){var l=i.pendingProps;switch(dc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(i),null;case 1:return yn(i.type)&&da(),fn(i),null;case 3:return l=i.stateNode,ps(),Dt(xn),Dt(un),wc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ga(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Kn!==null&&(eu(Kn),Kn=null))),Gc(t,i),fn(i),null;case 5:Ec(i);var u=Tr(vo.current);if(o=i.type,t!==null&&i.stateNode!=null)Hh(t,i,o,l,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return fn(i),null}if(t=Tr(ui.current),ga(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[ci]=i,l[fo]=h,t=(i.mode&1)!==0,o){case"dialog":Nt("cancel",l),Nt("close",l);break;case"iframe":case"object":case"embed":Nt("load",l);break;case"video":case"audio":for(u=0;u<lo.length;u++)Nt(lo[u],l);break;case"source":Nt("error",l);break;case"img":case"image":case"link":Nt("error",l),Nt("load",l);break;case"details":Nt("toggle",l);break;case"input":lt(l,h),Nt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Nt("invalid",l);break;case"textarea":he(l,h),Nt("invalid",l)}it(o,h),u=null;for(var E in h)if(h.hasOwnProperty(E)){var U=h[E];E==="children"?typeof U=="string"?l.textContent!==U&&(h.suppressHydrationWarning!==!0&&la(l.textContent,U,t),u=["children",U]):typeof U=="number"&&l.textContent!==""+U&&(h.suppressHydrationWarning!==!0&&la(l.textContent,U,t),u=["children",""+U]):a.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&Nt("scroll",l)}switch(o){case"input":ft(l),Tt(l,h,!0);break;case"textarea":ft(l),fe(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=ca)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xe(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(o,{is:l.is}):(t=E.createElement(o),o==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,o),t[ci]=i,t[fo]=l,Bh(t,i,!1,!1),i.stateNode=t;e:{switch(E=Et(o,l),o){case"dialog":Nt("cancel",t),Nt("close",t),u=l;break;case"iframe":case"object":case"embed":Nt("load",t),u=l;break;case"video":case"audio":for(u=0;u<lo.length;u++)Nt(lo[u],t);u=l;break;case"source":Nt("error",t),u=l;break;case"img":case"image":case"link":Nt("error",t),Nt("load",t),u=l;break;case"details":Nt("toggle",t),u=l;break;case"input":lt(t,l),u=sn(t,l),Nt("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=se({},l,{value:void 0}),Nt("invalid",t);break;case"textarea":he(t,l),u=K(t,l),Nt("invalid",t);break;default:u=l}it(o,u),U=u;for(h in U)if(U.hasOwnProperty(h)){var O=U[h];h==="style"?ze(t,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&pt(t,O)):h==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&Ee(t,O):typeof O=="number"&&Ee(t,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?O!=null&&h==="onScroll"&&Nt("scroll",t):O!=null&&P(t,h,O,E))}switch(o){case"input":ft(t),Tt(t,l,!1);break;case"textarea":ft(t),fe(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Pe(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?T(t,!!l.multiple,h,!1):l.defaultValue!=null&&T(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=ca)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return fn(i),null;case 6:if(t&&i.stateNode!=null)Vh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Tr(vo.current),Tr(ui.current),ga(i)){if(l=i.stateNode,o=i.memoizedProps,l[ci]=i,(h=l.nodeValue!==o)&&(t=Nn,t!==null))switch(t.tag){case 3:la(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&la(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[ci]=i,i.stateNode=l}return fn(i),null;case 13:if(Dt(Ot),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&Dn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)jf(),us(),i.flags|=98560,h=!1;else if(h=ga(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ci]=i}else us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),h=!1}else Kn!==null&&(eu(Kn),Kn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ot.current&1)!==0?qt===0&&(qt=3):iu())),i.updateQueue!==null&&(i.flags|=4),fn(i),null);case 4:return ps(),Gc(t,i),t===null&&co(i.stateNode.containerInfo),fn(i),null;case 10:return vc(i.type._context),fn(i),null;case 17:return yn(i.type)&&da(),fn(i),null;case 19:if(Dt(Ot),h=i.memoizedState,h===null)return fn(i),null;if(l=(i.flags&128)!==0,E=h.rendering,E===null)if(l)Eo(h,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Ea(t),E!==null){for(i.flags|=128,Eo(h,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Lt(Ot,Ot.current&1|2),i.child}t=t.sibling}h.tail!==null&&Te()>_s&&(i.flags|=128,l=!0,Eo(h,!1),i.lanes=4194304)}else{if(!l)if(t=Ea(E),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Eo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!Ft)return fn(i),null}else 2*Te()-h.renderingStartTime>_s&&o!==1073741824&&(i.flags|=128,l=!0,Eo(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(o=h.last,o!==null?o.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Te(),i.sibling=null,o=Ot.current,Lt(Ot,l?o&1|2:o&1),i):(fn(i),null);case 22:case 23:return nu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(In&1073741824)!==0&&(fn(i),i.subtreeFlags&6&&(i.flags|=8192)):fn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function m0(t,i){switch(dc(i),i.tag){case 1:return yn(i.type)&&da(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ps(),Dt(xn),Dt(un),wc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Ec(i),null;case 13:if(Dt(Ot),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));us()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Dt(Ot),null;case 4:return ps(),null;case 10:return vc(i.type._context),null;case 22:case 23:return nu(),null;case 24:return null;default:return null}}var La=!1,hn=!1,g0=typeof WeakSet=="function"?WeakSet:Set,Be=null;function gs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Bt(t,i,l)}else o.current=null}function Wc(t,i,o){try{o()}catch(l){Bt(t,i,l)}}var Gh=!1;function v0(t,i){if(nc=Zo,t=Sf(),ql(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var E=0,U=-1,O=-1,ee=0,_e=0,Se=t,ve=null;t:for(;;){for(var Ue;Se!==o||u!==0&&Se.nodeType!==3||(U=E+u),Se!==h||l!==0&&Se.nodeType!==3||(O=E+l),Se.nodeType===3&&(E+=Se.nodeValue.length),(Ue=Se.firstChild)!==null;)ve=Se,Se=Ue;for(;;){if(Se===t)break t;if(ve===o&&++ee===u&&(U=E),ve===h&&++_e===l&&(O=E),(Ue=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=Ue}o=U===-1||O===-1?null:{start:U,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(ic={focusedElem:t,selectionRange:o},Zo=!1,Be=i;Be!==null;)if(i=Be,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Be=t;else for(;Be!==null;){i=Be;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ve=He.memoizedProps,Ht=He.memoizedState,Y=i.stateNode,H=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:Zn(i.type,Ve),Ht);Y.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Me){Bt(i,i.return,Me)}if(t=i.sibling,t!==null){t.return=i.return,Be=t;break}Be=i.return}return He=Gh,Gh=!1,He}function Mo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var h=u.destroy;u.destroy=void 0,h!==void 0&&Wc(i,o,h)}u=u.next}while(u!==l)}}function Na(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function jc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Wh(t){var i=t.alternate;i!==null&&(t.alternate=null,Wh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ci],delete i[fo],delete i[ac],delete i[Jg],delete i[e0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jh(t){return t.tag===5||t.tag===3||t.tag===4}function Xh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ca));else if(l!==4&&(t=t.child,t!==null))for(Xc(t,i,o),t=t.sibling;t!==null;)Xc(t,i,o),t=t.sibling}function Yc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Yc(t,i,o),t=t.sibling;t!==null;)Yc(t,i,o),t=t.sibling}var an=null,Qn=!1;function tr(t,i,o){for(o=o.child;o!==null;)Yh(t,i,o),o=o.sibling}function Yh(t,i,o){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(bt,o)}catch{}switch(o.tag){case 5:hn||gs(o,i);case 6:var l=an,u=Qn;an=null,tr(t,i,o),an=l,Qn=u,an!==null&&(Qn?(t=an,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):an.removeChild(o.stateNode));break;case 18:an!==null&&(Qn?(t=an,o=o.stateNode,t.nodeType===8?oc(t.parentNode,o):t.nodeType===1&&oc(t,o),eo(t)):oc(an,o.stateNode));break;case 4:l=an,u=Qn,an=o.stateNode.containerInfo,Qn=!0,tr(t,i,o),an=l,Qn=u;break;case 0:case 11:case 14:case 15:if(!hn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var h=u,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&Wc(o,i,E),u=u.next}while(u!==l)}tr(t,i,o);break;case 1:if(!hn&&(gs(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(U){Bt(o,i,U)}tr(t,i,o);break;case 21:tr(t,i,o);break;case 22:o.mode&1?(hn=(l=hn)||o.memoizedState!==null,tr(t,i,o),hn=l):tr(t,i,o);break;default:tr(t,i,o)}}function qh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new g0),i.forEach(function(l){var u=A0.bind(null,t,l);o.has(l)||(o.add(l),l.then(u,u))})}}function Jn(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var u=o[l];try{var h=t,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:an=U.stateNode,Qn=!1;break e;case 3:an=U.stateNode.containerInfo,Qn=!0;break e;case 4:an=U.stateNode.containerInfo,Qn=!0;break e}U=U.return}if(an===null)throw Error(n(160));Yh(h,E,u),an=null,Qn=!1;var O=u.alternate;O!==null&&(O.return=null),u.return=null}catch(ee){Bt(u,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)$h(i,t),i=i.sibling}function $h(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(i,t),fi(t),l&4){try{Mo(3,t,t.return),Na(3,t)}catch(Ve){Bt(t,t.return,Ve)}try{Mo(5,t,t.return)}catch(Ve){Bt(t,t.return,Ve)}}break;case 1:Jn(i,t),fi(t),l&512&&o!==null&&gs(o,o.return);break;case 5:if(Jn(i,t),fi(t),l&512&&o!==null&&gs(o,o.return),t.flags&32){var u=t.stateNode;try{Ee(u,"")}catch(Ve){Bt(t,t.return,Ve)}}if(l&4&&(u=t.stateNode,u!=null)){var h=t.memoizedProps,E=o!==null?o.memoizedProps:h,U=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{U==="input"&&h.type==="radio"&&h.name!=null&&ht(u,h),Et(U,E);var ee=Et(U,h);for(E=0;E<O.length;E+=2){var _e=O[E],Se=O[E+1];_e==="style"?ze(u,Se):_e==="dangerouslySetInnerHTML"?pt(u,Se):_e==="children"?Ee(u,Se):P(u,_e,Se,ee)}switch(U){case"input":Ze(u,h);break;case"textarea":ye(u,h);break;case"select":var ve=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var Ue=h.value;Ue!=null?T(u,!!h.multiple,Ue,!1):ve!==!!h.multiple&&(h.defaultValue!=null?T(u,!!h.multiple,h.defaultValue,!0):T(u,!!h.multiple,h.multiple?[]:"",!1))}u[fo]=h}catch(Ve){Bt(t,t.return,Ve)}}break;case 6:if(Jn(i,t),fi(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,h=t.memoizedProps;try{u.nodeValue=h}catch(Ve){Bt(t,t.return,Ve)}}break;case 3:if(Jn(i,t),fi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{eo(i.containerInfo)}catch(Ve){Bt(t,t.return,Ve)}break;case 4:Jn(i,t),fi(t);break;case 13:Jn(i,t),fi(t),u=t.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(Kc=Te())),l&4&&qh(t);break;case 22:if(_e=o!==null&&o.memoizedState!==null,t.mode&1?(hn=(ee=hn)||_e,Jn(i,t),hn=ee):Jn(i,t),fi(t),l&8192){if(ee=t.memoizedState!==null,(t.stateNode.isHidden=ee)&&!_e&&(t.mode&1)!==0)for(Be=t,_e=t.child;_e!==null;){for(Se=Be=_e;Be!==null;){switch(ve=Be,Ue=ve.child,ve.tag){case 0:case 11:case 14:case 15:Mo(4,ve,ve.return);break;case 1:gs(ve,ve.return);var He=ve.stateNode;if(typeof He.componentWillUnmount=="function"){l=ve,o=ve.return;try{i=l,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ve){Bt(l,o,Ve)}}break;case 5:gs(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Qh(Se);continue}}Ue!==null?(Ue.return=ve,Be=Ue):Qh(Se)}_e=_e.sibling}e:for(_e=null,Se=t;;){if(Se.tag===5){if(_e===null){_e=Se;try{u=Se.stateNode,ee?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(U=Se.stateNode,O=Se.memoizedProps.style,E=O!=null&&O.hasOwnProperty("display")?O.display:null,U.style.display=et("display",E))}catch(Ve){Bt(t,t.return,Ve)}}}else if(Se.tag===6){if(_e===null)try{Se.stateNode.nodeValue=ee?"":Se.memoizedProps}catch(Ve){Bt(t,t.return,Ve)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;_e===Se&&(_e=null),Se=Se.return}_e===Se&&(_e=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Jn(i,t),fi(t),l&4&&qh(t);break;case 21:break;default:Jn(i,t),fi(t)}}function fi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(jh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(Ee(u,""),l.flags&=-33);var h=Xh(t);Yc(t,h,u);break;case 3:case 4:var E=l.stateNode.containerInfo,U=Xh(t);Xc(t,U,E);break;default:throw Error(n(161))}}catch(O){Bt(t,t.return,O)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function _0(t,i,o){Be=t,Kh(t)}function Kh(t,i,o){for(var l=(t.mode&1)!==0;Be!==null;){var u=Be,h=u.child;if(u.tag===22&&l){var E=u.memoizedState!==null||La;if(!E){var U=u.alternate,O=U!==null&&U.memoizedState!==null||hn;U=La;var ee=hn;if(La=E,(hn=O)&&!ee)for(Be=u;Be!==null;)E=Be,O=E.child,E.tag===22&&E.memoizedState!==null?Jh(u):O!==null?(O.return=E,Be=O):Jh(u);for(;h!==null;)Be=h,Kh(h),h=h.sibling;Be=u,La=U,hn=ee}Zh(t)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,Be=h):Zh(t)}}function Zh(t){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:hn||Na(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!hn)if(o===null)l.componentDidMount();else{var u=i.elementType===i.type?o.memoizedProps:Zn(i.type,o.memoizedProps);l.componentDidUpdate(u,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Qf(i,h,l);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Qf(i,E,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var _e=ee.memoizedState;if(_e!==null){var Se=_e.dehydrated;Se!==null&&eo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}hn||i.flags&512&&jc(i)}catch(ve){Bt(i,i.return,ve)}}if(i===t){Be=null;break}if(o=i.sibling,o!==null){o.return=i.return,Be=o;break}Be=i.return}}function Qh(t){for(;Be!==null;){var i=Be;if(i===t){Be=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Be=o;break}Be=i.return}}function Jh(t){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Na(4,i)}catch(O){Bt(i,o,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(O){Bt(i,u,O)}}var h=i.return;try{jc(i)}catch(O){Bt(i,h,O)}break;case 5:var E=i.return;try{jc(i)}catch(O){Bt(i,E,O)}}}catch(O){Bt(i,i.return,O)}if(i===t){Be=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Be=U;break}Be=i.return}}var x0=Math.ceil,Da=N.ReactCurrentDispatcher,qc=N.ReactCurrentOwner,Gn=N.ReactCurrentBatchConfig,vt=0,en=null,Gt=null,ln=0,In=0,vs=Ki(0),qt=0,wo=null,Cr=0,Ia=0,$c=0,To=null,En=null,Kc=0,_s=1/0,Ci=null,Ua=!1,Zc=null,nr=null,Fa=!1,ir=null,ka=0,Ao=0,Qc=null,Oa=-1,za=0;function vn(){return(vt&6)!==0?Te():Oa!==-1?Oa:Oa=Te()}function rr(t){return(t.mode&1)===0?1:(vt&2)!==0&&ln!==0?ln&-ln:n0.transition!==null?(za===0&&(za=Zr()),za):(t=wt,t!==0||(t=window.event,t=t===void 0?16:ef(t.type)),t)}function ei(t,i,o,l){if(50<Ao)throw Ao=0,Qc=null,Error(n(185));Vi(t,o,l),((vt&2)===0||t!==en)&&(t===en&&((vt&2)===0&&(Ia|=o),qt===4&&sr(t,ln)),Mn(t,l),o===1&&vt===0&&(i.mode&1)===0&&(_s=Te()+500,ha&&Qi()))}function Mn(t,i){var o=t.callbackNode;qs(t,i);var l=Pt(t,t===en?ln:0);if(l===0)o!==null&&X(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&X(o),i===1)t.tag===0?t0(tp.bind(null,t)):Bf(tp.bind(null,t)),Zg(function(){(vt&6)===0&&Qi()}),o=null;else{switch(Xd(l)){case 1:o=Ke;break;case 4:o=Qe;break;case 16:o=We;break;case 536870912:o=At;break;default:o=We}o=cp(o,ep.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function ep(t,i){if(Oa=-1,za=0,(vt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(xs()&&t.callbackNode!==o)return null;var l=Pt(t,t===en?ln:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ba(t,l);else{i=l;var u=vt;vt|=2;var h=ip();(en!==t||ln!==i)&&(Ci=null,_s=Te()+500,br(t,i));do try{E0();break}catch(U){np(t,U)}while(!0);gc(),Da.current=h,vt=u,Gt!==null?i=0:(en=null,ln=0,i=qt)}if(i!==0){if(i===2&&(u=cn(t),u!==0&&(l=u,i=Jc(t,u))),i===1)throw o=wo,br(t,0),sr(t,l),Mn(t,Te()),o;if(i===6)sr(t,l);else{if(u=t.current.alternate,(l&30)===0&&!y0(u)&&(i=Ba(t,l),i===2&&(h=cn(t),h!==0&&(l=h,i=Jc(t,h))),i===1))throw o=wo,br(t,0),sr(t,l),Mn(t,Te()),o;switch(t.finishedWork=u,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Pr(t,En,Ci);break;case 3:if(sr(t,l),(l&130023424)===l&&(i=Kc+500-Te(),10<i)){if(Pt(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){vn(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=sc(Pr.bind(null,t,En,Ci),i);break}Pr(t,En,Ci);break;case 4:if(sr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,u=-1;0<l;){var E=31-Oe(l);h=1<<E,E=i[E],E>u&&(u=E),l&=~h}if(l=u,l=Te()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*x0(l/1960))-l,10<l){t.timeoutHandle=sc(Pr.bind(null,t,En,Ci),l);break}Pr(t,En,Ci);break;case 5:Pr(t,En,Ci);break;default:throw Error(n(329))}}}return Mn(t,Te()),t.callbackNode===o?ep.bind(null,t):null}function Jc(t,i){var o=To;return t.current.memoizedState.isDehydrated&&(br(t,i).flags|=256),t=Ba(t,i),t!==2&&(i=En,En=o,i!==null&&eu(i)),t}function eu(t){En===null?En=t:En.push.apply(En,t)}function y0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var u=o[l],h=u.getSnapshot;u=u.value;try{if(!$n(h(),u))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function sr(t,i){for(i&=~$c,i&=~Ia,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Oe(i),l=1<<o;t[o]=-1,i&=~l}}function tp(t){if((vt&6)!==0)throw Error(n(327));xs();var i=Pt(t,0);if((i&1)===0)return Mn(t,Te()),null;var o=Ba(t,i);if(t.tag!==0&&o===2){var l=cn(t);l!==0&&(i=l,o=Jc(t,l))}if(o===1)throw o=wo,br(t,0),sr(t,i),Mn(t,Te()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Pr(t,En,Ci),Mn(t,Te()),null}function tu(t,i){var o=vt;vt|=1;try{return t(i)}finally{vt=o,vt===0&&(_s=Te()+500,ha&&Qi())}}function Rr(t){ir!==null&&ir.tag===0&&(vt&6)===0&&xs();var i=vt;vt|=1;var o=Gn.transition,l=wt;try{if(Gn.transition=null,wt=1,t)return t()}finally{wt=l,Gn.transition=o,vt=i,(vt&6)===0&&Qi()}}function nu(){In=vs.current,Dt(vs)}function br(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Kg(o)),Gt!==null)for(o=Gt.return;o!==null;){var l=o;switch(dc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&da();break;case 3:ps(),Dt(xn),Dt(un),wc();break;case 5:Ec(l);break;case 4:ps();break;case 13:Dt(Ot);break;case 19:Dt(Ot);break;case 10:vc(l.type._context);break;case 22:case 23:nu()}o=o.return}if(en=t,Gt=t=or(t.current,null),ln=In=i,qt=0,wo=null,$c=Ia=Cr=0,En=To=null,wr!==null){for(i=0;i<wr.length;i++)if(o=wr[i],l=o.interleaved,l!==null){o.interleaved=null;var u=l.next,h=o.pending;if(h!==null){var E=h.next;h.next=u,l.next=E}o.pending=l}wr=null}return t}function np(t,i){do{var o=Gt;try{if(gc(),Ma.current=Ca,wa){for(var l=zt.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}wa=!1}if(Ar=0,Jt=Yt=zt=null,_o=!1,xo=0,qc.current=null,o===null||o.return===null){qt=1,wo=i,Gt=null;break}e:{var h=t,E=o.return,U=o,O=i;if(i=ln,U.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var ee=O,_e=U,Se=_e.tag;if((_e.mode&1)===0&&(Se===0||Se===11||Se===15)){var ve=_e.alternate;ve?(_e.updateQueue=ve.updateQueue,_e.memoizedState=ve.memoizedState,_e.lanes=ve.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ue=Ch(E);if(Ue!==null){Ue.flags&=-257,Rh(Ue,E,U,h,i),Ue.mode&1&&Ah(h,ee,i),i=Ue,O=ee;var He=i.updateQueue;if(He===null){var Ve=new Set;Ve.add(O),i.updateQueue=Ve}else He.add(O);break e}else{if((i&1)===0){Ah(h,ee,i),iu();break e}O=Error(n(426))}}else if(Ft&&U.mode&1){var Ht=Ch(E);if(Ht!==null){(Ht.flags&65536)===0&&(Ht.flags|=256),Rh(Ht,E,U,h,i),pc(ms(O,U));break e}}h=O=ms(O,U),qt!==4&&(qt=2),To===null?To=[h]:To.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Y=wh(h,O,i);Zf(h,Y);break e;case 1:U=O;var H=h.type,$=h.stateNode;if((h.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(nr===null||!nr.has($)))){h.flags|=65536,i&=-i,h.lanes|=i;var Me=Th(h,U,i);Zf(h,Me);break e}}h=h.return}while(h!==null)}sp(o)}catch(je){i=je,Gt===o&&o!==null&&(Gt=o=o.return);continue}break}while(!0)}function ip(){var t=Da.current;return Da.current=Ca,t===null?Ca:t}function iu(){(qt===0||qt===3||qt===2)&&(qt=4),en===null||(Cr&268435455)===0&&(Ia&268435455)===0||sr(en,ln)}function Ba(t,i){var o=vt;vt|=2;var l=ip();(en!==t||ln!==i)&&(Ci=null,br(t,i));do try{S0();break}catch(u){np(t,u)}while(!0);if(gc(),vt=o,Da.current=l,Gt!==null)throw Error(n(261));return en=null,ln=0,qt}function S0(){for(;Gt!==null;)rp(Gt)}function E0(){for(;Gt!==null&&!we();)rp(Gt)}function rp(t){var i=lp(t.alternate,t,In);t.memoizedProps=t.pendingProps,i===null?sp(t):Gt=i,qc.current=null}function sp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=p0(o,i,In),o!==null){Gt=o;return}}else{if(o=m0(o,i),o!==null){o.flags&=32767,Gt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,Gt=null;return}}if(i=i.sibling,i!==null){Gt=i;return}Gt=i=t}while(i!==null);qt===0&&(qt=5)}function Pr(t,i,o){var l=wt,u=Gn.transition;try{Gn.transition=null,wt=1,M0(t,i,o,l)}finally{Gn.transition=u,wt=l}return null}function M0(t,i,o,l){do xs();while(ir!==null);if((vt&6)!==0)throw Error(n(327));o=t.finishedWork;var u=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(ig(t,h),t===en&&(Gt=en=null,ln=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Fa||(Fa=!0,cp(We,function(){return xs(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Gn.transition,Gn.transition=null;var E=wt;wt=1;var U=vt;vt|=4,qc.current=null,v0(t,o),$h(o,t),Gg(ic),Zo=!!nc,ic=nc=null,t.current=o,_0(o),De(),vt=U,wt=E,Gn.transition=h}else t.current=o;if(Fa&&(Fa=!1,ir=t,ka=u),h=t.pendingLanes,h===0&&(nr=null),_t(o.stateNode),Mn(t,Te()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)u=i[o],l(u.value,{componentStack:u.stack,digest:u.digest});if(Ua)throw Ua=!1,t=Zc,Zc=null,t;return(ka&1)!==0&&t.tag!==0&&xs(),h=t.pendingLanes,(h&1)!==0?t===Qc?Ao++:(Ao=0,Qc=t):Ao=0,Qi(),null}function xs(){if(ir!==null){var t=Xd(ka),i=Gn.transition,o=wt;try{if(Gn.transition=null,wt=16>t?16:t,ir===null)var l=!1;else{if(t=ir,ir=null,ka=0,(vt&6)!==0)throw Error(n(331));var u=vt;for(vt|=4,Be=t.current;Be!==null;){var h=Be,E=h.child;if((Be.flags&16)!==0){var U=h.deletions;if(U!==null){for(var O=0;O<U.length;O++){var ee=U[O];for(Be=ee;Be!==null;){var _e=Be;switch(_e.tag){case 0:case 11:case 15:Mo(8,_e,h)}var Se=_e.child;if(Se!==null)Se.return=_e,Be=Se;else for(;Be!==null;){_e=Be;var ve=_e.sibling,Ue=_e.return;if(Wh(_e),_e===ee){Be=null;break}if(ve!==null){ve.return=Ue,Be=ve;break}Be=Ue}}}var He=h.alternate;if(He!==null){var Ve=He.child;if(Ve!==null){He.child=null;do{var Ht=Ve.sibling;Ve.sibling=null,Ve=Ht}while(Ve!==null)}}Be=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,Be=E;else e:for(;Be!==null;){if(h=Be,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Mo(9,h,h.return)}var Y=h.sibling;if(Y!==null){Y.return=h.return,Be=Y;break e}Be=h.return}}var H=t.current;for(Be=H;Be!==null;){E=Be;var $=E.child;if((E.subtreeFlags&2064)!==0&&$!==null)$.return=E,Be=$;else e:for(E=H;Be!==null;){if(U=Be,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Na(9,U)}}catch(je){Bt(U,U.return,je)}if(U===E){Be=null;break e}var Me=U.sibling;if(Me!==null){Me.return=U.return,Be=Me;break e}Be=U.return}}if(vt=u,Qi(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(bt,t)}catch{}l=!0}return l}finally{wt=o,Gn.transition=i}}return!1}function op(t,i,o){i=ms(o,i),i=wh(t,i,1),t=er(t,i,1),i=vn(),t!==null&&(Vi(t,1,i),Mn(t,i))}function Bt(t,i,o){if(t.tag===3)op(t,t,o);else for(;i!==null;){if(i.tag===3){op(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(nr===null||!nr.has(l))){t=ms(o,t),t=Th(i,t,1),i=er(i,t,1),t=vn(),i!==null&&(Vi(i,1,t),Mn(i,t));break}}i=i.return}}function w0(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=vn(),t.pingedLanes|=t.suspendedLanes&o,en===t&&(ln&o)===o&&(qt===4||qt===3&&(ln&130023424)===ln&&500>Te()-Kc?br(t,0):$c|=o),Mn(t,i)}function ap(t,i){i===0&&((t.mode&1)===0?i=1:(i=Qt,Qt<<=1,(Qt&130023424)===0&&(Qt=4194304)));var o=vn();t=wi(t,i),t!==null&&(Vi(t,i,o),Mn(t,o))}function T0(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),ap(t,o)}function A0(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(o=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),ap(t,o)}var lp;lp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||xn.current)Sn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Sn=!1,h0(t,i,o);Sn=(t.flags&131072)!==0}else Sn=!1,Ft&&(i.flags&1048576)!==0&&Hf(i,ma,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Pa(t,i),t=i.pendingProps;var u=as(i,un.current);hs(i,o),u=Cc(null,i,l,t,u,o);var h=Rc();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,yn(l)?(h=!0,fa(i)):h=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,yc(i),u.updater=Ra,i.stateNode=u,u._reactInternals=i,Ic(i,l,t,o),i=Oc(null,i,l,!0,h,o)):(i.tag=0,Ft&&h&&uc(i),gn(null,i,u,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Pa(t,i),t=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=R0(l),t=Zn(l,t),u){case 0:i=kc(null,i,l,t,o);break e;case 1:i=Ih(null,i,l,t,o);break e;case 11:i=bh(null,i,l,t,o);break e;case 14:i=Ph(null,i,l,Zn(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Zn(l,u),kc(t,i,l,u,o);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Zn(l,u),Ih(t,i,l,u,o);case 3:e:{if(Uh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,u=h.element,Kf(t,i),Sa(i,l,null,o);var E=i.memoizedState;if(l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){u=ms(Error(n(423)),i),i=Fh(t,i,l,o,u);break e}else if(l!==u){u=ms(Error(n(424)),i),i=Fh(t,i,l,o,u);break e}else for(Dn=$i(i.stateNode.containerInfo.firstChild),Nn=i,Ft=!0,Kn=null,o=qf(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(us(),l===u){i=Ai(t,i,o);break e}gn(t,i,l,o)}i=i.child}return i;case 5:return Jf(i),t===null&&hc(i),l=i.type,u=i.pendingProps,h=t!==null?t.memoizedProps:null,E=u.children,rc(l,u)?E=null:h!==null&&rc(l,h)&&(i.flags|=32),Dh(t,i),gn(t,i,E,o),i.child;case 6:return t===null&&hc(i),null;case 13:return kh(t,i,o);case 4:return Sc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ds(i,null,l,o):gn(t,i,l,o),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Zn(l,u),bh(t,i,l,u,o);case 7:return gn(t,i,i.pendingProps,o),i.child;case 8:return gn(t,i,i.pendingProps.children,o),i.child;case 12:return gn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,h=i.memoizedProps,E=u.value,Lt(_a,l._currentValue),l._currentValue=E,h!==null)if($n(h.value,E)){if(h.children===u.children&&!xn.current){i=Ai(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var U=h.dependencies;if(U!==null){E=h.child;for(var O=U.firstContext;O!==null;){if(O.context===l){if(h.tag===1){O=Ti(-1,o&-o),O.tag=2;var ee=h.updateQueue;if(ee!==null){ee=ee.shared;var _e=ee.pending;_e===null?O.next=O:(O.next=_e.next,_e.next=O),ee.pending=O}}h.lanes|=o,O=h.alternate,O!==null&&(O.lanes|=o),_c(h.return,o,i),U.lanes|=o;break}O=O.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=o,U=E.alternate,U!==null&&(U.lanes|=o),_c(E,o,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}gn(t,i,u.children,o),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,hs(i,o),u=Hn(u),l=l(u),i.flags|=1,gn(t,i,l,o),i.child;case 14:return l=i.type,u=Zn(l,i.pendingProps),u=Zn(l.type,u),Ph(t,i,l,u,o);case 15:return Lh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Zn(l,u),Pa(t,i),i.tag=1,yn(l)?(t=!0,fa(i)):t=!1,hs(i,o),Eh(i,l,u),Ic(i,l,u,o),Oc(null,i,l,!0,t,o);case 19:return zh(t,i,o);case 22:return Nh(t,i,o)}throw Error(n(156,i.tag))};function cp(t,i){return J(t,i)}function C0(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,i,o,l){return new C0(t,i,o,l)}function ru(t){return t=t.prototype,!(!t||!t.isReactComponent)}function R0(t){if(typeof t=="function")return ru(t)?1:0;if(t!=null){if(t=t.$$typeof,t===te)return 11;if(t===de)return 14}return 2}function or(t,i){var o=t.alternate;return o===null?(o=Wn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ha(t,i,o,l,u,h){var E=2;if(l=t,typeof t=="function")ru(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case D:return Lr(o.children,u,h,i);case G:E=8,u|=8;break;case pe:return t=Wn(12,o,i,u|2),t.elementType=pe,t.lanes=h,t;case Z:return t=Wn(13,o,i,u),t.elementType=Z,t.lanes=h,t;case le:return t=Wn(19,o,i,u),t.elementType=le,t.lanes=h,t;case ce:return Va(o,u,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case M:E=10;break e;case R:E=9;break e;case te:E=11;break e;case de:E=14;break e;case ne:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Wn(E,o,i,u),i.elementType=t,i.type=l,i.lanes=h,i}function Lr(t,i,o,l){return t=Wn(7,t,l,i),t.lanes=o,t}function Va(t,i,o,l){return t=Wn(22,t,l,i),t.elementType=ce,t.lanes=o,t.stateNode={isHidden:!1},t}function su(t,i,o){return t=Wn(6,t,null,i),t.lanes=o,t}function ou(t,i,o){return i=Wn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function b0(t,i,o,l,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$s(0),this.expirationTimes=$s(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$s(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function au(t,i,o,l,u,h,E,U,O){return t=new b0(t,i,o,U,O),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Wn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},yc(h),t}function P0(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function up(t){if(!t)return Zi;t=t._reactInternals;e:{if(_i(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(yn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(yn(o))return Of(t,o,i)}return i}function dp(t,i,o,l,u,h,E,U,O){return t=au(o,l,!0,t,u,h,E,U,O),t.context=up(null),o=t.current,l=vn(),u=rr(o),h=Ti(l,u),h.callback=i??null,er(o,h,u),t.current.lanes=u,Vi(t,u,l),Mn(t,l),t}function Ga(t,i,o,l){var u=i.current,h=vn(),E=rr(u);return o=up(o),i.context===null?i.context=o:i.pendingContext=o,i=Ti(h,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=er(u,i,E),t!==null&&(ei(t,u,E,h),ya(t,u,E)),E}function Wa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function lu(t,i){fp(t,i),(t=t.alternate)&&fp(t,i)}function L0(){return null}var hp=typeof reportError=="function"?reportError:function(t){console.error(t)};function cu(t){this._internalRoot=t}ja.prototype.render=cu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ga(t,i,null,null)},ja.prototype.unmount=cu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Rr(function(){Ga(null,t,null,null)}),i[yi]=null}};function ja(t){this._internalRoot=t}ja.prototype.unstable_scheduleHydration=function(t){if(t){var i=$d();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Xi.length&&i!==0&&i<Xi[o].priority;o++);Xi.splice(o,0,t),o===0&&Qd(t)}};function uu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pp(){}function N0(t,i,o,l,u){if(u){if(typeof l=="function"){var h=l;l=function(){var ee=Wa(E);h.call(ee)}}var E=dp(i,l,t,0,null,!1,!1,"",pp);return t._reactRootContainer=E,t[yi]=E.current,co(t.nodeType===8?t.parentNode:t),Rr(),E}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var U=l;l=function(){var ee=Wa(O);U.call(ee)}}var O=au(t,0,!1,null,null,!1,!1,"",pp);return t._reactRootContainer=O,t[yi]=O.current,co(t.nodeType===8?t.parentNode:t),Rr(function(){Ga(i,O,o,l)}),O}function Ya(t,i,o,l,u){var h=o._reactRootContainer;if(h){var E=h;if(typeof u=="function"){var U=u;u=function(){var O=Wa(E);U.call(O)}}Ga(i,E,t,u)}else E=N0(o,i,t,u,l);return Wa(E)}Yd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=xi(i.pendingLanes);o!==0&&(Il(i,o|1),Mn(i,Te()),(vt&6)===0&&(_s=Te()+500,Qi()))}break;case 13:Rr(function(){var l=wi(t,1);if(l!==null){var u=vn();ei(l,t,1,u)}}),lu(t,1)}},Ul=function(t){if(t.tag===13){var i=wi(t,134217728);if(i!==null){var o=vn();ei(i,t,134217728,o)}lu(t,134217728)}},qd=function(t){if(t.tag===13){var i=rr(t),o=wi(t,i);if(o!==null){var l=vn();ei(o,t,i,l)}lu(t,i)}},$d=function(){return wt},Kd=function(t,i){var o=wt;try{return wt=t,i()}finally{wt=o}},oe=function(t,i,o){switch(i){case"input":if(Ze(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var u=ua(l);if(!u)throw Error(n(90));ct(l),Ze(l,u)}}}break;case"textarea":ye(t,o);break;case"select":i=o.value,i!=null&&T(t,!!o.multiple,i,!1)}},on=tu,gt=Rr;var D0={usingClientEntryPoint:!1,Events:[ho,ss,ua,dt,kt,tu]},Co={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},I0={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=j(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||L0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qa.isDisabled&&qa.supportsFiber)try{bt=qa.inject(I0),Ut=qa}catch{}}return wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D0,wn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uu(i))throw Error(n(200));return P0(t,i,null,o)},wn.createRoot=function(t,i){if(!uu(t))throw Error(n(299));var o=!1,l="",u=hp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=au(t,1,!1,null,null,o,!1,l,u),t[yi]=i.current,co(t.nodeType===8?t.parentNode:t),new cu(i)},wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=j(i),t=t===null?null:t.stateNode,t},wn.flushSync=function(t){return Rr(t)},wn.hydrate=function(t,i,o){if(!Xa(i))throw Error(n(200));return Ya(null,t,i,!0,o)},wn.hydrateRoot=function(t,i,o){if(!uu(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,u=!1,h="",E=hp;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=dp(i,null,t,1,o??null,u,!1,h,E),t[yi]=i.current,co(t),l)for(t=0;t<l.length;t++)o=l[t],u=o._getVersion,u=u(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,u]:i.mutableSourceEagerHydrationData.push(o,u);return new ja(i)},wn.render=function(t,i,o){if(!Xa(i))throw Error(n(200));return Ya(null,t,i,!1,o)},wn.unmountComponentAtNode=function(t){if(!Xa(t))throw Error(n(40));return t._reactRootContainer?(Rr(function(){Ya(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1},wn.unstable_batchedUpdates=tu,wn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Xa(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ya(t,i,o,!1,l)},wn.version="18.3.1-next-f1338f8080-20240426",wn}var Ep;function G0(){if(Ep)return hu.exports;Ep=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),hu.exports=V0(),hu.exports}var Mp;function W0(){if(Mp)return $a;Mp=1;var s=G0();return $a.createRoot=s.createRoot,$a.hydrateRoot=s.hydrateRoot,$a}var j0=W0();const X0=Em(j0);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fd="169",Y0=0,wp=1,q0=2,Mm=1,$0=2,Di=3,vr=0,Cn=1,Ii=2,mr=0,Fs=1,Tp=2,Ap=3,Cp=4,K0=5,Br=100,Z0=101,Q0=102,J0=103,ev=104,tv=200,nv=201,iv=202,rv=203,qu=204,$u=205,sv=206,ov=207,av=208,lv=209,cv=210,uv=211,dv=212,fv=213,hv=214,Ku=0,Zu=1,Qu=2,zs=3,Ju=4,ed=5,td=6,nd=7,wm=0,pv=1,mv=2,gr=0,gv=1,vv=2,_v=3,xv=4,yv=5,Sv=6,Ev=7,Tm=300,Bs=301,Hs=302,id=303,rd=304,Pl=306,sd=1e3,Vr=1001,od=1002,Yn=1003,Mv=1004,Ka=1005,si=1006,gu=1007,Gr=1008,ki=1009,Am=1010,Cm=1011,ko=1012,kd=1013,jr=1014,Ui=1015,zo=1016,Od=1017,zd=1018,Vs=1020,Rm=35902,bm=1021,Pm=1022,ai=1023,Lm=1024,Nm=1025,ks=1026,Gs=1027,Dm=1028,Bd=1029,Im=1030,Hd=1031,Vd=1033,_l=33776,xl=33777,yl=33778,Sl=33779,ad=35840,ld=35841,cd=35842,ud=35843,dd=36196,fd=37492,hd=37496,pd=37808,md=37809,gd=37810,vd=37811,_d=37812,xd=37813,yd=37814,Sd=37815,Ed=37816,Md=37817,wd=37818,Td=37819,Ad=37820,Cd=37821,El=36492,Rd=36494,bd=36495,Um=36283,Pd=36284,Ld=36285,Nd=36286,wv=3200,Tv=3201,Av=0,Cv=1,pr="",hi="srgb",_r="srgb-linear",Gd="display-p3",Ll="display-p3-linear",Tl="linear",It="srgb",Al="rec709",Cl="p3",ys=7680,Rp=519,Rv=512,bv=513,Pv=514,Fm=515,Lv=516,Nv=517,Dv=518,Iv=519,bp=35044,Pp="300 es",Fi=2e3,Rl=2001;class js{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,d=a.length;c<d;c++)a[c].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vu=Math.PI/180,Dd=180/Math.PI;function Bo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pn[s&255]+pn[s>>8&255]+pn[s>>16&255]+pn[s>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]).toLowerCase()}function An(s,e,n){return Math.max(e,Math.min(n,s))}function Uv(s,e){return(s%e+e)%e}function _u(s,e,n){return(1-n)*s+n*e}function bo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Tn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,n=0){Rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(An(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*a+e.x,this.y=c*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,a,c,d,f,p,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,d,f,p,m)}set(e,n,r,a,c,d,f,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=f,_[3]=n,_[4]=c,_[5]=p,_[6]=r,_[7]=d,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,d=r[0],f=r[3],p=r[6],m=r[1],_=r[4],y=r[7],x=r[2],S=r[5],w=r[8],A=a[0],v=a[3],g=a[6],I=a[1],P=a[4],N=a[7],q=a[2],F=a[5],D=a[8];return c[0]=d*A+f*I+p*q,c[3]=d*v+f*P+p*F,c[6]=d*g+f*N+p*D,c[1]=m*A+_*I+y*q,c[4]=m*v+_*P+y*F,c[7]=m*g+_*N+y*D,c[2]=x*A+S*I+w*q,c[5]=x*v+S*P+w*F,c[8]=x*g+S*N+w*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],_=e[8];return n*d*_-n*f*m-r*c*_+r*f*p+a*c*m-a*d*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],_=e[8],y=_*d-f*m,x=f*p-_*c,S=m*c-d*p,w=n*y+r*x+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=y*A,e[1]=(a*m-_*r)*A,e[2]=(f*r-a*d)*A,e[3]=x*A,e[4]=(_*n-a*p)*A,e[5]=(a*c-f*n)*A,e[6]=S*A,e[7]=(r*p-m*n)*A,e[8]=(d*n-r*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,d,f){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*d+m*f)+d+e,-a*m,a*p,-a*(-m*d+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(xu.makeScale(e,n)),this}rotate(e){return this.premultiply(xu.makeRotation(-e)),this}translate(e,n){return this.premultiply(xu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xu=new ot;function km(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function bl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Fv(){const s=bl("canvas");return s.style.display="block",s}const Lp={};function Ml(s){s in Lp||(Lp[s]=!0,console.warn(s))}function kv(s,e,n){return new Promise(function(r,a){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function Ov(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Np=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dp=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Po={[_r]:{transfer:Tl,primaries:Al,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[hi]:{transfer:It,primaries:Al,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ll]:{transfer:Tl,primaries:Cl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Dp),fromReference:s=>s.applyMatrix3(Np)},[Gd]:{transfer:It,primaries:Cl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Dp),fromReference:s=>s.applyMatrix3(Np).convertLinearToSRGB()}},Bv=new Set([_r,Ll]),Mt={enabled:!0,_workingColorSpace:_r,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Bv.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=Po[e].toReference,a=Po[n].fromReference;return a(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Po[s].primaries},getTransfer:function(s){return s===pr?Tl:Po[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Po[e].luminanceCoefficients)}};function Os(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function yu(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ss;class Hv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ss===void 0&&(Ss=bl("canvas")),Ss.width=e.width,Ss.height=e.height;const r=Ss.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ss}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=bl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let d=0;d<c.length;d++)c[d]=Os(c[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Os(n[r]/255)*255):n[r]=Os(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vv=0;class Om{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=Bo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let d=0,f=a.length;d<f;d++)a[d].isDataTexture?c.push(Su(a[d].image)):c.push(Su(a[d]))}else c=Su(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function Su(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Hv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gv=0;class Rn extends js{constructor(e=Rn.DEFAULT_IMAGE,n=Rn.DEFAULT_MAPPING,r=Vr,a=Vr,c=si,d=Gr,f=ai,p=ki,m=Rn.DEFAULT_ANISOTROPY,_=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Bo(),this.name="",this.source=new Om(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sd:e.x=e.x-Math.floor(e.x);break;case Vr:e.x=e.x<0?0:1;break;case od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sd:e.y=e.y-Math.floor(e.y);break;case Vr:e.y=e.y<0?0:1;break;case od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Tm;Rn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,n=0,r=0,a=1){Vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*c,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*c,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*c,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const p=e.elements,m=p[0],_=p[4],y=p[8],x=p[1],S=p[5],w=p[9],A=p[2],v=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(y-A)<.01&&Math.abs(w-v)<.01){if(Math.abs(_+x)<.1&&Math.abs(y+A)<.1&&Math.abs(w+v)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(m+1)/2,N=(S+1)/2,q=(g+1)/2,F=(_+x)/4,D=(y+A)/4,G=(w+v)/4;return P>N&&P>q?P<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(P),a=F/r,c=D/r):N>q?N<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(N),r=F/a,c=G/a):q<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt(q),r=D/c,a=G/c),this.set(r,a,c,n),this}let I=Math.sqrt((v-w)*(v-w)+(y-A)*(y-A)+(x-_)*(x-_));return Math.abs(I)<.001&&(I=1),this.x=(v-w)/I,this.y=(y-A)/I,this.z=(x-_)/I,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wv extends js{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Vt(0,0,e,n),this.scissorTest=!1,this.viewport=new Vt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Rn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Om(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr extends Wv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class zm extends Rn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jv extends Rn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,d,f){let p=r[a+0],m=r[a+1],_=r[a+2],y=r[a+3];const x=c[d+0],S=c[d+1],w=c[d+2],A=c[d+3];if(f===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(f===1){e[n+0]=x,e[n+1]=S,e[n+2]=w,e[n+3]=A;return}if(y!==A||p!==x||m!==S||_!==w){let v=1-f;const g=p*x+m*S+_*w+y*A,I=g>=0?1:-1,P=1-g*g;if(P>Number.EPSILON){const q=Math.sqrt(P),F=Math.atan2(q,g*I);v=Math.sin(v*F)/q,f=Math.sin(f*F)/q}const N=f*I;if(p=p*v+x*N,m=m*v+S*N,_=_*v+w*N,y=y*v+A*N,v===1-f){const q=1/Math.sqrt(p*p+m*m+_*_+y*y);p*=q,m*=q,_*=q,y*=q}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,a,c,d){const f=r[a],p=r[a+1],m=r[a+2],_=r[a+3],y=c[d],x=c[d+1],S=c[d+2],w=c[d+3];return e[n]=f*w+_*y+p*S-m*x,e[n+1]=p*w+_*x+m*y-f*S,e[n+2]=m*w+_*S+f*x-p*y,e[n+3]=_*w-f*y-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,d=e._order,f=Math.cos,p=Math.sin,m=f(r/2),_=f(a/2),y=f(c/2),x=p(r/2),S=p(a/2),w=p(c/2);switch(d){case"XYZ":this._x=x*_*y+m*S*w,this._y=m*S*y-x*_*w,this._z=m*_*w+x*S*y,this._w=m*_*y-x*S*w;break;case"YXZ":this._x=x*_*y+m*S*w,this._y=m*S*y-x*_*w,this._z=m*_*w-x*S*y,this._w=m*_*y+x*S*w;break;case"ZXY":this._x=x*_*y-m*S*w,this._y=m*S*y+x*_*w,this._z=m*_*w+x*S*y,this._w=m*_*y-x*S*w;break;case"ZYX":this._x=x*_*y-m*S*w,this._y=m*S*y+x*_*w,this._z=m*_*w-x*S*y,this._w=m*_*y+x*S*w;break;case"YZX":this._x=x*_*y+m*S*w,this._y=m*S*y+x*_*w,this._z=m*_*w-x*S*y,this._w=m*_*y-x*S*w;break;case"XZY":this._x=x*_*y-m*S*w,this._y=m*S*y-x*_*w,this._z=m*_*w+x*S*y,this._w=m*_*y+x*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],d=n[1],f=n[5],p=n[9],m=n[2],_=n[6],y=n[10],x=r+f+y;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-p)*S,this._y=(c-m)*S,this._z=(d-a)*S}else if(r>f&&r>y){const S=2*Math.sqrt(1+r-f-y);this._w=(_-p)/S,this._x=.25*S,this._y=(a+d)/S,this._z=(c+m)/S}else if(f>y){const S=2*Math.sqrt(1+f-r-y);this._w=(c-m)/S,this._x=(a+d)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+y-r-f);this._w=(d-a)/S,this._x=(c+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(An(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,d=e._w,f=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+d*f+a*m-c*p,this._y=a*_+d*p+c*f-r*m,this._z=c*_+d*m+r*p-a*f,this._w=d*_-r*f-a*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,d=this._w;let f=d*e._w+r*e._x+a*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=r,this._y=a,this._z=c,this;const p=1-f*f;if(p<=Number.EPSILON){const S=1-n;return this._w=S*d+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,f),y=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=d*y+this._w*x,this._x=r*y+this._x*x,this._y=a*y+this._y*x,this._z=c*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,n=0,r=0){ie.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ip.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ip.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,d=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*d,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*d,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,d=e.y,f=e.z,p=e.w,m=2*(d*a-f*r),_=2*(f*n-c*a),y=2*(c*r-d*n);return this.x=n+p*m+d*y-f*_,this.y=r+p*_+f*m-c*y,this.z=a+p*y+c*_-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,d=n.x,f=n.y,p=n.z;return this.x=a*p-c*f,this.y=c*d-r*p,this.z=r*f-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Eu.copy(this).projectOnVector(e),this.sub(Eu)}reflect(e){return this.sub(Eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(An(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eu=new ie,Ip=new Ho;class Vo{constructor(e=new ie(1/0,1/0,1/0),n=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=c.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,ti):ti.fromBufferAttribute(c,d),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Za.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Za.copy(r.boundingBox)),Za.applyMatrix4(e.matrixWorld),this.union(Za)}const a=e.children;for(let c=0,d=a.length;c<d;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),Qa.subVectors(this.max,Lo),Es.subVectors(e.a,Lo),Ms.subVectors(e.b,Lo),ws.subVectors(e.c,Lo),lr.subVectors(Ms,Es),cr.subVectors(ws,Ms),Nr.subVectors(Es,ws);let n=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Nr.z,Nr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Nr.z,0,-Nr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Nr.y,Nr.x,0];return!Mu(n,Es,Ms,ws,Qa)||(n=[1,0,0,0,1,0,0,0,1],!Mu(n,Es,Ms,ws,Qa))?!1:(Ja.crossVectors(lr,cr),n=[Ja.x,Ja.y,Ja.z],Mu(n,Es,Ms,ws,Qa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],ti=new ie,Za=new Vo,Es=new ie,Ms=new ie,ws=new ie,lr=new ie,cr=new ie,Nr=new ie,Lo=new ie,Qa=new ie,Ja=new ie,Dr=new ie;function Mu(s,e,n,r,a){for(let c=0,d=s.length-3;c<=d;c+=3){Dr.fromArray(s,c);const f=a.x*Math.abs(Dr.x)+a.y*Math.abs(Dr.y)+a.z*Math.abs(Dr.z),p=e.dot(Dr),m=n.dot(Dr),_=r.dot(Dr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>f)return!1}return!0}const Xv=new Vo,No=new ie,wu=new ie;class Wd{constructor(e=new ie,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Xv.setFromPoints(e).getCenter(r);let a=0;for(let c=0,d=e.length;c<d;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const n=No.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(No,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(wu)),this.expandByPoint(No.copy(e.center).sub(wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new ie,Tu=new ie,el=new ie,ur=new ie,Au=new ie,tl=new ie,Cu=new ie;class Yv{constructor(e=new ie,n=new ie(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,n),bi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Tu.copy(e).add(n).multiplyScalar(.5),el.copy(n).sub(e).normalize(),ur.copy(this.origin).sub(Tu);const c=e.distanceTo(n)*.5,d=-this.direction.dot(el),f=ur.dot(this.direction),p=-ur.dot(el),m=ur.lengthSq(),_=Math.abs(1-d*d);let y,x,S,w;if(_>0)if(y=d*p-f,x=d*f-p,w=c*_,y>=0)if(x>=-w)if(x<=w){const A=1/_;y*=A,x*=A,S=y*(y+d*x+2*f)+x*(d*y+x+2*p)+m}else x=c,y=Math.max(0,-(d*x+f)),S=-y*y+x*(x+2*p)+m;else x=-c,y=Math.max(0,-(d*x+f)),S=-y*y+x*(x+2*p)+m;else x<=-w?(y=Math.max(0,-(-d*c+f)),x=y>0?-c:Math.min(Math.max(-c,-p),c),S=-y*y+x*(x+2*p)+m):x<=w?(y=0,x=Math.min(Math.max(-c,-p),c),S=x*(x+2*p)+m):(y=Math.max(0,-(d*c+f)),x=y>0?c:Math.min(Math.max(-c,-p),c),S=-y*y+x*(x+2*p)+m);else x=d>0?-c:c,y=Math.max(0,-(d*x+f)),S=-y*y+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(Tu).addScaledVector(el,x),S}intersectSphere(e,n){bi.subVectors(e.center,this.origin);const r=bi.dot(this.direction),a=bi.dot(bi)-r*r,c=e.radius*e.radius;if(a>c)return null;const d=Math.sqrt(c-a),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,d,f,p;const m=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(c=(e.min.y-x.y)*_,d=(e.max.y-x.y)*_):(c=(e.max.y-x.y)*_,d=(e.min.y-x.y)*_),r>d||c>a||((c>r||isNaN(r))&&(r=c),(d<a||isNaN(a))&&(a=d),y>=0?(f=(e.min.z-x.z)*y,p=(e.max.z-x.z)*y):(f=(e.max.z-x.z)*y,p=(e.min.z-x.z)*y),r>p||f>a)||((f>r||r!==r)&&(r=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,n,r,a,c){Au.subVectors(n,e),tl.subVectors(r,e),Cu.crossVectors(Au,tl);let d=this.direction.dot(Cu),f;if(d>0){if(a)return null;f=1}else if(d<0)f=-1,d=-d;else return null;ur.subVectors(this.origin,e);const p=f*this.direction.dot(tl.crossVectors(ur,tl));if(p<0)return null;const m=f*this.direction.dot(Au.cross(ur));if(m<0||p+m>d)return null;const _=-f*ur.dot(Cu);return _<0?null:this.at(_/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,n,r,a,c,d,f,p,m,_,y,x,S,w,A,v){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,d,f,p,m,_,y,x,S,w,A,v)}set(e,n,r,a,c,d,f,p,m,_,y,x,S,w,A,v){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=c,g[5]=d,g[9]=f,g[13]=p,g[2]=m,g[6]=_,g[10]=y,g[14]=x,g[3]=S,g[7]=w,g[11]=A,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ts.setFromMatrixColumn(e,0).length(),c=1/Ts.setFromMatrixColumn(e,1).length(),d=1/Ts.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(c),y=Math.sin(c);if(e.order==="XYZ"){const x=d*_,S=d*y,w=f*_,A=f*y;n[0]=p*_,n[4]=-p*y,n[8]=m,n[1]=S+w*m,n[5]=x-A*m,n[9]=-f*p,n[2]=A-x*m,n[6]=w+S*m,n[10]=d*p}else if(e.order==="YXZ"){const x=p*_,S=p*y,w=m*_,A=m*y;n[0]=x+A*f,n[4]=w*f-S,n[8]=d*m,n[1]=d*y,n[5]=d*_,n[9]=-f,n[2]=S*f-w,n[6]=A+x*f,n[10]=d*p}else if(e.order==="ZXY"){const x=p*_,S=p*y,w=m*_,A=m*y;n[0]=x-A*f,n[4]=-d*y,n[8]=w+S*f,n[1]=S+w*f,n[5]=d*_,n[9]=A-x*f,n[2]=-d*m,n[6]=f,n[10]=d*p}else if(e.order==="ZYX"){const x=d*_,S=d*y,w=f*_,A=f*y;n[0]=p*_,n[4]=w*m-S,n[8]=x*m+A,n[1]=p*y,n[5]=A*m+x,n[9]=S*m-w,n[2]=-m,n[6]=f*p,n[10]=d*p}else if(e.order==="YZX"){const x=d*p,S=d*m,w=f*p,A=f*m;n[0]=p*_,n[4]=A-x*y,n[8]=w*y+S,n[1]=y,n[5]=d*_,n[9]=-f*_,n[2]=-m*_,n[6]=S*y+w,n[10]=x-A*y}else if(e.order==="XZY"){const x=d*p,S=d*m,w=f*p,A=f*m;n[0]=p*_,n[4]=-y,n[8]=m*_,n[1]=x*y+A,n[5]=d*_,n[9]=S*y-w,n[2]=w*y-S,n[6]=f*_,n[10]=A*y+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qv,e,$v)}lookAt(e,n,r){const a=this.elements;return Un.subVectors(e,n),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),dr.crossVectors(r,Un),dr.lengthSq()===0&&(Math.abs(r.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),dr.crossVectors(r,Un)),dr.normalize(),nl.crossVectors(Un,dr),a[0]=dr.x,a[4]=nl.x,a[8]=Un.x,a[1]=dr.y,a[5]=nl.y,a[9]=Un.y,a[2]=dr.z,a[6]=nl.z,a[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,d=r[0],f=r[4],p=r[8],m=r[12],_=r[1],y=r[5],x=r[9],S=r[13],w=r[2],A=r[6],v=r[10],g=r[14],I=r[3],P=r[7],N=r[11],q=r[15],F=a[0],D=a[4],G=a[8],pe=a[12],M=a[1],R=a[5],te=a[9],Z=a[13],le=a[2],de=a[6],ne=a[10],ce=a[14],B=a[3],ue=a[7],se=a[11],k=a[15];return c[0]=d*F+f*M+p*le+m*B,c[4]=d*D+f*R+p*de+m*ue,c[8]=d*G+f*te+p*ne+m*se,c[12]=d*pe+f*Z+p*ce+m*k,c[1]=_*F+y*M+x*le+S*B,c[5]=_*D+y*R+x*de+S*ue,c[9]=_*G+y*te+x*ne+S*se,c[13]=_*pe+y*Z+x*ce+S*k,c[2]=w*F+A*M+v*le+g*B,c[6]=w*D+A*R+v*de+g*ue,c[10]=w*G+A*te+v*ne+g*se,c[14]=w*pe+A*Z+v*ce+g*k,c[3]=I*F+P*M+N*le+q*B,c[7]=I*D+P*R+N*de+q*ue,c[11]=I*G+P*te+N*ne+q*se,c[15]=I*pe+P*Z+N*ce+q*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],d=e[1],f=e[5],p=e[9],m=e[13],_=e[2],y=e[6],x=e[10],S=e[14],w=e[3],A=e[7],v=e[11],g=e[15];return w*(+c*p*y-a*m*y-c*f*x+r*m*x+a*f*S-r*p*S)+A*(+n*p*S-n*m*x+c*d*x-a*d*S+a*m*_-c*p*_)+v*(+n*m*y-n*f*S-c*d*y+r*d*S+c*f*_-r*m*_)+g*(-a*f*_-n*p*y+n*f*x+a*d*y-r*d*x+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],_=e[8],y=e[9],x=e[10],S=e[11],w=e[12],A=e[13],v=e[14],g=e[15],I=y*v*m-A*x*m+A*p*S-f*v*S-y*p*g+f*x*g,P=w*x*m-_*v*m-w*p*S+d*v*S+_*p*g-d*x*g,N=_*A*m-w*y*m+w*f*S-d*A*S-_*f*g+d*y*g,q=w*y*p-_*A*p-w*f*x+d*A*x+_*f*v-d*y*v,F=n*I+r*P+a*N+c*q;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/F;return e[0]=I*D,e[1]=(A*x*c-y*v*c-A*a*S+r*v*S+y*a*g-r*x*g)*D,e[2]=(f*v*c-A*p*c+A*a*m-r*v*m-f*a*g+r*p*g)*D,e[3]=(y*p*c-f*x*c-y*a*m+r*x*m+f*a*S-r*p*S)*D,e[4]=P*D,e[5]=(_*v*c-w*x*c+w*a*S-n*v*S-_*a*g+n*x*g)*D,e[6]=(w*p*c-d*v*c-w*a*m+n*v*m+d*a*g-n*p*g)*D,e[7]=(d*x*c-_*p*c+_*a*m-n*x*m-d*a*S+n*p*S)*D,e[8]=N*D,e[9]=(w*y*c-_*A*c-w*r*S+n*A*S+_*r*g-n*y*g)*D,e[10]=(d*A*c-w*f*c+w*r*m-n*A*m-d*r*g+n*f*g)*D,e[11]=(_*f*c-d*y*c-_*r*m+n*y*m+d*r*S-n*f*S)*D,e[12]=q*D,e[13]=(_*A*a-w*y*a+w*r*x-n*A*x-_*r*v+n*y*v)*D,e[14]=(w*f*a-d*A*a-w*r*p+n*A*p+d*r*v-n*f*v)*D,e[15]=(d*y*a-_*f*a+_*r*p-n*y*p-d*r*x+n*f*x)*D,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,d=e.x,f=e.y,p=e.z,m=c*d,_=c*f;return this.set(m*d+r,m*f-a*p,m*p+a*f,0,m*f+a*p,_*f+r,_*p-a*d,0,m*p-a*f,_*p+a*d,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,d){return this.set(1,r,c,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,d=n._y,f=n._z,p=n._w,m=c+c,_=d+d,y=f+f,x=c*m,S=c*_,w=c*y,A=d*_,v=d*y,g=f*y,I=p*m,P=p*_,N=p*y,q=r.x,F=r.y,D=r.z;return a[0]=(1-(A+g))*q,a[1]=(S+N)*q,a[2]=(w-P)*q,a[3]=0,a[4]=(S-N)*F,a[5]=(1-(x+g))*F,a[6]=(v+I)*F,a[7]=0,a[8]=(w+P)*D,a[9]=(v-I)*D,a[10]=(1-(x+A))*D,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=Ts.set(a[0],a[1],a[2]).length();const d=Ts.set(a[4],a[5],a[6]).length(),f=Ts.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],ni.copy(this);const m=1/c,_=1/d,y=1/f;return ni.elements[0]*=m,ni.elements[1]*=m,ni.elements[2]*=m,ni.elements[4]*=_,ni.elements[5]*=_,ni.elements[6]*=_,ni.elements[8]*=y,ni.elements[9]*=y,ni.elements[10]*=y,n.setFromRotationMatrix(ni),r.x=c,r.y=d,r.z=f,this}makePerspective(e,n,r,a,c,d,f=Fi){const p=this.elements,m=2*c/(n-e),_=2*c/(r-a),y=(n+e)/(n-e),x=(r+a)/(r-a);let S,w;if(f===Fi)S=-(d+c)/(d-c),w=-2*d*c/(d-c);else if(f===Rl)S=-d/(d-c),w=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,c,d,f=Fi){const p=this.elements,m=1/(n-e),_=1/(r-a),y=1/(d-c),x=(n+e)*m,S=(r+a)*_;let w,A;if(f===Fi)w=(d+c)*y,A=-2*y;else if(f===Rl)w=c*y,A=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=A,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ts=new ie,ni=new jt,qv=new ie(0,0,0),$v=new ie(1,1,1),dr=new ie,nl=new ie,Un=new ie,Up=new jt,Fp=new Ho;class Oi{constructor(e=0,n=0,r=0,a=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],d=a[4],f=a[8],p=a[1],m=a[5],_=a[9],y=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(An(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-An(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(An(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-An(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(An(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-An(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Up,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fp.setFromEuler(this),this.setFromQuaternion(Fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class Bm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kv=0;const kp=new ie,As=new Ho,Pi=new jt,il=new ie,Do=new ie,Zv=new ie,Qv=new Ho,Op=new ie(1,0,0),zp=new ie(0,1,0),Bp=new ie(0,0,1),Hp={type:"added"},Jv={type:"removed"},Cs={type:"childadded",child:null},Ru={type:"childremoved",child:null};class kn extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new ie,n=new Oi,r=new Ho,a=new ie(1,1,1);function c(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new jt},normalMatrix:{value:new ot}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(Op,e)}rotateY(e){return this.rotateOnAxis(zp,e)}rotateZ(e){return this.rotateOnAxis(Bp,e)}translateOnAxis(e,n){return kp.copy(e).applyQuaternion(this.quaternion),this.position.add(kp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Op,e)}translateY(e){return this.translateOnAxis(zp,e)}translateZ(e){return this.translateOnAxis(Bp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?il.copy(e):il.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Do,il,this.up):Pi.lookAt(il,Do,this.up),this.quaternion.setFromRotationMatrix(Pi),a&&(Pi.extractRotation(a.matrixWorld),As.setFromRotationMatrix(Pi),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hp),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Jv),Ru.child=e,this.dispatchEvent(Ru),Ru.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hp),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,d=a.length;c<d;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,Zv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,Qv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,d=a.length;c<d;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const y=p[m];c(e.shapes,y)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(c(e.materials,this.material[p]));a.material=f}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(c(e.animations,p))}}if(n){const f=d(e.geometries),p=d(e.materials),m=d(e.textures),_=d(e.images),y=d(e.shapes),x=d(e.skeletons),S=d(e.animations),w=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function d(f){const p=[];for(const m in f){const _=f[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}kn.DEFAULT_UP=new ie(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new ie,Li=new ie,bu=new ie,Ni=new ie,Rs=new ie,bs=new ie,Vp=new ie,Pu=new ie,Lu=new ie,Nu=new ie,Du=new Vt,Iu=new Vt,Uu=new Vt;class oi{constructor(e=new ie,n=new ie,r=new ie){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ii.subVectors(e,n),a.cross(ii);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){ii.subVectors(a,n),Li.subVectors(r,n),bu.subVectors(e,n);const d=ii.dot(ii),f=ii.dot(Li),p=ii.dot(bu),m=Li.dot(Li),_=Li.dot(bu),y=d*m-f*f;if(y===0)return c.set(0,0,0),null;const x=1/y,S=(m*p-f*_)*x,w=(d*_-f*p)*x;return c.set(1-S-w,w,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,r,a,c,d,f,p){return this.getBarycoord(e,n,r,a,Ni)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ni.x),p.addScaledVector(d,Ni.y),p.addScaledVector(f,Ni.z),p)}static getInterpolatedAttribute(e,n,r,a,c,d){return Du.setScalar(0),Iu.setScalar(0),Uu.setScalar(0),Du.fromBufferAttribute(e,n),Iu.fromBufferAttribute(e,r),Uu.fromBufferAttribute(e,a),d.setScalar(0),d.addScaledVector(Du,c.x),d.addScaledVector(Iu,c.y),d.addScaledVector(Uu,c.z),d}static isFrontFacing(e,n,r,a){return ii.subVectors(r,n),Li.subVectors(e,n),ii.cross(Li).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ii.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return oi.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let d,f;Rs.subVectors(a,r),bs.subVectors(c,r),Pu.subVectors(e,r);const p=Rs.dot(Pu),m=bs.dot(Pu);if(p<=0&&m<=0)return n.copy(r);Lu.subVectors(e,a);const _=Rs.dot(Lu),y=bs.dot(Lu);if(_>=0&&y<=_)return n.copy(a);const x=p*y-_*m;if(x<=0&&p>=0&&_<=0)return d=p/(p-_),n.copy(r).addScaledVector(Rs,d);Nu.subVectors(e,c);const S=Rs.dot(Nu),w=bs.dot(Nu);if(w>=0&&S<=w)return n.copy(c);const A=S*m-p*w;if(A<=0&&m>=0&&w<=0)return f=m/(m-w),n.copy(r).addScaledVector(bs,f);const v=_*w-S*y;if(v<=0&&y-_>=0&&S-w>=0)return Vp.subVectors(c,a),f=(y-_)/(y-_+(S-w)),n.copy(a).addScaledVector(Vp,f);const g=1/(v+A+x);return d=A*g,f=x*g,n.copy(r).addScaledVector(Rs,d).addScaledVector(bs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},rl={h:0,s:0,l:0};function Fu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Ct{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Mt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Mt.workingColorSpace){if(e=Uv(e,1),n=An(n,0,1),r=An(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,d=2*r-c;this.r=Fu(d,c,e+1/3),this.g=Fu(d,c,e),this.b=Fu(d,c,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,n=hi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=a[1],f=a[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=hi){const r=Hm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=yu(e.r),this.g=yu(e.g),this.b=yu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Mt.fromWorkingColorSpace(mn.copy(this),e),Math.round(An(mn.r*255,0,255))*65536+Math.round(An(mn.g*255,0,255))*256+Math.round(An(mn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(mn.copy(this),n);const r=mn.r,a=mn.g,c=mn.b,d=Math.max(r,a,c),f=Math.min(r,a,c);let p,m;const _=(f+d)/2;if(f===d)p=0,m=0;else{const y=d-f;switch(m=_<=.5?y/(d+f):y/(2-d-f),d){case r:p=(a-c)/y+(a<c?6:0);break;case a:p=(c-r)/y+2;break;case c:p=(r-a)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=hi){Mt.fromWorkingColorSpace(mn.copy(this),e);const n=mn.r,r=mn.g,a=mn.b;return e!==hi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+n,fr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(fr),e.getHSL(rl);const r=_u(fr.h,rl.h,n),a=_u(fr.s,rl.s,n),c=_u(fr.l,rl.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new Ct;Ct.NAMES=Hm;let e_=0;class Nl extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=Fs,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qu,this.blendDst=$u,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(r.blending=this.blending),this.side!==vr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==qu&&(r.blendSrc=this.blendSrc),this.blendDst!==$u&&(r.blendDst=this.blendDst),this.blendEquation!==Br&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const d=[];for(const f in c){const p=c[f];delete p.metadata,d.push(p)}return d}if(n){const c=a(e.textures),d=a(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vm extends Nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=wm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new ie,sl=new Rt;class gi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=bp,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)sl.fromBufferAttribute(this,n),sl.applyMatrix3(e),this.setXY(n,sl.x,sl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=bo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Tn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=bo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=bo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=bo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=bo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array),a=Tn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array),a=Tn(a,this.array),c=Tn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bp&&(e.usage=this.usage),e}}class Gm extends gi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Wm extends gi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Wr extends gi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let t_=0;const jn=new jt,ku=new kn,Ps=new ie,Fn=new Vo,Io=new Vo,nn=new ie;class Yr extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(km(e)?Wm:Gm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ot().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,n,r){return jn.makeTranslation(e,n,r),this.applyMatrix4(jn),this}scale(e,n,r){return jn.makeScale(e,n,r),this.applyMatrix4(jn),this}lookAt(e){return ku.lookAt(e),ku.updateMatrix(),this.applyMatrix4(ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new Wr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];Fn.setFromBufferAttribute(c),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),n)for(let c=0,d=n.length;c<d;c++){const f=n[c];Io.setFromBufferAttribute(f),this.morphTargetsRelative?(nn.addVectors(Fn.min,Io.min),Fn.expandByPoint(nn),nn.addVectors(Fn.max,Io.max),Fn.expandByPoint(nn)):(Fn.expandByPoint(Io.min),Fn.expandByPoint(Io.max))}Fn.getCenter(r);let a=0;for(let c=0,d=e.count;c<d;c++)nn.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(nn));if(n)for(let c=0,d=n.length;c<d;c++){const f=n[c],p=this.morphTargetsRelative;for(let m=0,_=f.count;m<_;m++)nn.fromBufferAttribute(f,m),p&&(Ps.fromBufferAttribute(e,m),nn.add(Ps)),a=Math.max(a,r.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],p=[];for(let G=0;G<r.count;G++)f[G]=new ie,p[G]=new ie;const m=new ie,_=new ie,y=new ie,x=new Rt,S=new Rt,w=new Rt,A=new ie,v=new ie;function g(G,pe,M){m.fromBufferAttribute(r,G),_.fromBufferAttribute(r,pe),y.fromBufferAttribute(r,M),x.fromBufferAttribute(c,G),S.fromBufferAttribute(c,pe),w.fromBufferAttribute(c,M),_.sub(m),y.sub(m),S.sub(x),w.sub(x);const R=1/(S.x*w.y-w.x*S.y);isFinite(R)&&(A.copy(_).multiplyScalar(w.y).addScaledVector(y,-S.y).multiplyScalar(R),v.copy(y).multiplyScalar(S.x).addScaledVector(_,-w.x).multiplyScalar(R),f[G].add(A),f[pe].add(A),f[M].add(A),p[G].add(v),p[pe].add(v),p[M].add(v))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let G=0,pe=I.length;G<pe;++G){const M=I[G],R=M.start,te=M.count;for(let Z=R,le=R+te;Z<le;Z+=3)g(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const P=new ie,N=new ie,q=new ie,F=new ie;function D(G){q.fromBufferAttribute(a,G),F.copy(q);const pe=f[G];P.copy(pe),P.sub(q.multiplyScalar(q.dot(pe))).normalize(),N.crossVectors(F,pe);const R=N.dot(p[G])<0?-1:1;d.setXYZW(G,P.x,P.y,P.z,R)}for(let G=0,pe=I.length;G<pe;++G){const M=I[G],R=M.start,te=M.count;for(let Z=R,le=R+te;Z<le;Z+=3)D(e.getX(Z+0)),D(e.getX(Z+1)),D(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new gi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new ie,c=new ie,d=new ie,f=new ie,p=new ie,m=new ie,_=new ie,y=new ie;if(e)for(let x=0,S=e.count;x<S;x+=3){const w=e.getX(x+0),A=e.getX(x+1),v=e.getX(x+2);a.fromBufferAttribute(n,w),c.fromBufferAttribute(n,A),d.fromBufferAttribute(n,v),_.subVectors(d,c),y.subVectors(a,c),_.cross(y),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,v),f.add(_),p.add(_),m.add(_),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),d.fromBufferAttribute(n,x+2),_.subVectors(d,c),y.subVectors(a,c),_.cross(y),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)nn.fromBufferAttribute(e,n),nn.normalize(),e.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function e(f,p){const m=f.array,_=f.itemSize,y=f.normalized,x=new m.constructor(p.length*_);let S=0,w=0;for(let A=0,v=p.length;A<v;A++){f.isInterleavedBufferAttribute?S=p[A]*f.data.stride+f.offset:S=p[A]*_;for(let g=0;g<_;g++)x[w++]=m[S++]}return new gi(x,_,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yr,r=this.index.array,a=this.attributes;for(const f in a){const p=a[f],m=e(p,r);n.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const p=[],m=c[f];for(let _=0,y=m.length;_<y;_++){const x=m[_],S=e(x,r);p.push(S)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const m=d[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let y=0,x=m.length;y<x;y++){const S=m[y];_.push(S.toJSON(e.data))}_.length>0&&(a[p]=_,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const c=e.morphAttributes;for(const m in c){const _=[],y=c[m];for(let x=0,S=y.length;x<S;x++)_.push(y[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,_=d.length;m<_;m++){const y=d[m];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gp=new jt,Ir=new Yv,ol=new Wd,Wp=new ie,al=new ie,ll=new ie,cl=new ie,Ou=new ie,ul=new ie,jp=new ie,dl=new ie;class mi extends kn{constructor(e=new Yr,n=new Vm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=a.length;c<d;c++){const f=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(c&&f){ul.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=f[p],y=c[p];_!==0&&(Ou.fromBufferAttribute(y,e),d?ul.addScaledVector(Ou,_):ul.addScaledVector(Ou.sub(n),_))}n.add(ul)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ol.copy(r.boundingSphere),ol.applyMatrix4(c),Ir.copy(e.ray).recast(e.near),!(ol.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(ol,Wp)===null||Ir.origin.distanceToSquared(Wp)>(e.far-e.near)**2))&&(Gp.copy(c).invert(),Ir.copy(e.ray).applyMatrix4(Gp),!(r.boundingBox!==null&&Ir.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Ir)))}_computeIntersections(e,n,r){let a;const c=this.geometry,d=this.material,f=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,y=c.attributes.normal,x=c.groups,S=c.drawRange;if(f!==null)if(Array.isArray(d))for(let w=0,A=x.length;w<A;w++){const v=x[w],g=d[v.materialIndex],I=Math.max(v.start,S.start),P=Math.min(f.count,Math.min(v.start+v.count,S.start+S.count));for(let N=I,q=P;N<q;N+=3){const F=f.getX(N),D=f.getX(N+1),G=f.getX(N+2);a=fl(this,g,e,r,m,_,y,F,D,G),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),A=Math.min(f.count,S.start+S.count);for(let v=w,g=A;v<g;v+=3){const I=f.getX(v),P=f.getX(v+1),N=f.getX(v+2);a=fl(this,d,e,r,m,_,y,I,P,N),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(d))for(let w=0,A=x.length;w<A;w++){const v=x[w],g=d[v.materialIndex],I=Math.max(v.start,S.start),P=Math.min(p.count,Math.min(v.start+v.count,S.start+S.count));for(let N=I,q=P;N<q;N+=3){const F=N,D=N+1,G=N+2;a=fl(this,g,e,r,m,_,y,F,D,G),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),A=Math.min(p.count,S.start+S.count);for(let v=w,g=A;v<g;v+=3){const I=v,P=v+1,N=v+2;a=fl(this,d,e,r,m,_,y,I,P,N),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}}}function n_(s,e,n,r,a,c,d,f){let p;if(e.side===Cn?p=r.intersectTriangle(d,c,a,!0,f):p=r.intersectTriangle(a,c,d,e.side===vr,f),p===null)return null;dl.copy(f),dl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(dl);return m<n.near||m>n.far?null:{distance:m,point:dl.clone(),object:s}}function fl(s,e,n,r,a,c,d,f,p,m){s.getVertexPosition(f,al),s.getVertexPosition(p,ll),s.getVertexPosition(m,cl);const _=n_(s,e,n,r,al,ll,cl,jp);if(_){const y=new ie;oi.getBarycoord(jp,al,ll,cl,y),a&&(_.uv=oi.getInterpolatedAttribute(a,f,p,m,y,new Rt)),c&&(_.uv1=oi.getInterpolatedAttribute(c,f,p,m,y,new Rt)),d&&(_.normal=oi.getInterpolatedAttribute(d,f,p,m,y,new ie),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:f,b:p,c:m,normal:new ie,materialIndex:0};oi.getNormal(al,ll,cl,x.normal),_.face=x,_.barycoord=y}return _}class Go extends Yr{constructor(e=1,n=1,r=1,a=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:d};const f=this;a=Math.floor(a),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],_=[],y=[];let x=0,S=0;w("z","y","x",-1,-1,r,n,e,d,c,0),w("z","y","x",1,-1,r,n,-e,d,c,1),w("x","z","y",1,1,e,r,n,a,d,2),w("x","z","y",1,-1,e,r,-n,a,d,3),w("x","y","z",1,-1,e,n,r,a,c,4),w("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(p),this.setAttribute("position",new Wr(m,3)),this.setAttribute("normal",new Wr(_,3)),this.setAttribute("uv",new Wr(y,2));function w(A,v,g,I,P,N,q,F,D,G,pe){const M=N/D,R=q/G,te=N/2,Z=q/2,le=F/2,de=D+1,ne=G+1;let ce=0,B=0;const ue=new ie;for(let se=0;se<ne;se++){const k=se*R-Z;for(let re=0;re<de;re++){const Le=re*M-te;ue[A]=Le*I,ue[v]=k*P,ue[g]=le,m.push(ue.x,ue.y,ue.z),ue[A]=0,ue[v]=0,ue[g]=F>0?1:-1,_.push(ue.x,ue.y,ue.z),y.push(re/D),y.push(1-se/G),ce+=1}}for(let se=0;se<G;se++)for(let k=0;k<D;k++){const re=x+k+de*se,Le=x+k+de*(se+1),W=x+(k+1)+de*(se+1),ae=x+(k+1)+de*se;p.push(re,Le,ae),p.push(Le,W,ae),B+=6}f.addGroup(S,B,pe),S+=B,x+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function _n(s){const e={};for(let n=0;n<s.length;n++){const r=Ws(s[n]);for(const a in r)e[a]=r[a]}return e}function i_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function jm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const r_={clone:Ws,merge:_n};var s_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends Nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s_,this.fragmentShader=o_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=i_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Xm extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hr=new ie,Xp=new Rt,Yp=new Rt;class ri extends Xm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Dd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dd*2*Math.atan(Math.tan(vu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,n){return this.getViewBounds(e,Xp,Yp),n.subVectors(Yp,Xp)}setViewOffset(e,n,r,a,c,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(vu*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*a/p,n-=d.offsetY*r/m,a*=d.width/p,r*=d.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ls=-90,Ns=1;class a_ extends kn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ri(Ls,Ns,e,n);a.layers=this.layers,this.add(a);const c=new ri(Ls,Ns,e,n);c.layers=this.layers,this.add(c);const d=new ri(Ls,Ns,e,n);d.layers=this.layers,this.add(d);const f=new ri(Ls,Ns,e,n);f.layers=this.layers,this.add(f);const p=new ri(Ls,Ns,e,n);p.layers=this.layers,this.add(p);const m=new ri(Ls,Ns,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,d,f,p]=n;for(const m of n)this.remove(m);if(e===Fi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Rl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,f,p,m,_]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,d),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(y,x,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Ym extends Rn{constructor(e,n,r,a,c,d,f,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:Bs,super(e,n,r,a,c,d,f,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class l_ extends Xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Ym(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:si}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Go(5,5,5),c=new zi({name:"CubemapFromEquirect",uniforms:Ws(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Cn,blending:mr});c.uniforms.tEquirect.value=n;const d=new mi(a,c),f=n.minFilter;return n.minFilter===Gr&&(n.minFilter=si),new a_(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,a){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(c)}}const zu=new ie,c_=new ie,u_=new ot;class Or{constructor(e=new ie(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=zu.subVectors(r,n).cross(c_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(zu),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||u_.getNormalMatrix(e),a=this.coplanarPoint(zu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new Wd,hl=new ie;class qm{constructor(e=new Or,n=new Or,r=new Or,a=new Or,c=new Or,d=new Or){this.planes=[e,n,r,a,c,d]}set(e,n,r,a,c,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(c),f[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Fi){const r=this.planes,a=e.elements,c=a[0],d=a[1],f=a[2],p=a[3],m=a[4],_=a[5],y=a[6],x=a[7],S=a[8],w=a[9],A=a[10],v=a[11],g=a[12],I=a[13],P=a[14],N=a[15];if(r[0].setComponents(p-c,x-m,v-S,N-g).normalize(),r[1].setComponents(p+c,x+m,v+S,N+g).normalize(),r[2].setComponents(p+d,x+_,v+w,N+I).normalize(),r[3].setComponents(p-d,x-_,v-w,N-I).normalize(),r[4].setComponents(p-f,x-y,v-A,N-P).normalize(),n===Fi)r[5].setComponents(p+f,x+y,v+A,N+P).normalize();else if(n===Rl)r[5].setComponents(f,y,A,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(hl.x=a.normal.x>0?e.max.x:e.min.x,hl.y=a.normal.y>0?e.max.y:e.min.y,hl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(hl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $m(){let s=null,e=!1,n=null,r=null;function a(c,d){n(c,d),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function d_(s){const e=new WeakMap;function n(f,p){const m=f.array,_=f.usage,y=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,_),f.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:y}}function r(f,p,m){const _=p.array,y=p.updateRanges;if(s.bindBuffer(m,f),y.length===0)s.bufferSubData(m,0,_);else{y.sort((S,w)=>S.start-w.start);let x=0;for(let S=1;S<y.length;S++){const w=y[x],A=y[S];A.start<=w.start+w.count+1?w.count=Math.max(w.count,A.start+A.count-w.start):(++x,y[x]=A)}y.length=x+1;for(let S=0,w=y.length;S<w;S++){const A=y[S];s.bufferSubData(m,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:a,remove:c,update:d}}class Wo extends Yr{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,d=n/2,f=Math.floor(r),p=Math.floor(a),m=f+1,_=p+1,y=e/f,x=n/p,S=[],w=[],A=[],v=[];for(let g=0;g<_;g++){const I=g*x-d;for(let P=0;P<m;P++){const N=P*y-c;w.push(N,-I,0),A.push(0,0,1),v.push(P/f),v.push(1-g/p)}}for(let g=0;g<p;g++)for(let I=0;I<f;I++){const P=I+m*g,N=I+m*(g+1),q=I+1+m*(g+1),F=I+1+m*g;S.push(P,N,F),S.push(N,q,F)}this.setIndex(S),this.setAttribute("position",new Wr(w,3)),this.setAttribute("normal",new Wr(A,3)),this.setAttribute("uv",new Wr(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.widthSegments,e.heightSegments)}}var f_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h_=`#ifdef USE_ALPHAHASH
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
#endif`,p_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,__=`#ifdef USE_AOMAP
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
#endif`,x_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y_=`#ifdef USE_BATCHING
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
#endif`,S_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T_=`#ifdef USE_IRIDESCENCE
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
#endif`,A_=`#ifdef USE_BUMPMAP
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
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,D_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,U_=`#define PI 3.141592653589793
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
} // validated`,F_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,k_=`vec3 transformedNormal = objectNormal;
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
#endif`,O_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V_="gl_FragColor = linearToOutputTexel( gl_FragColor );",G_=`
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
}`,W_=`#ifdef USE_ENVMAP
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
#endif`,j_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,X_=`#ifdef USE_ENVMAP
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
#endif`,Y_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q_=`#ifdef USE_ENVMAP
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
#endif`,$_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J_=`#ifdef USE_GRADIENTMAP
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
}`,ex=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ix=`uniform bool receiveShadow;
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
#endif`,rx=`#ifdef USE_ENVMAP
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
#endif`,sx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ax=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cx=`PhysicalMaterial material;
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
#endif`,ux=`struct PhysicalMaterial {
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
}`,dx=`
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
#endif`,fx=`#if defined( RE_IndirectDiffuse )
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
#endif`,hx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,px=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_x=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sx=`#if defined( USE_POINTS_UV )
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
#endif`,Ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cx=`#ifdef USE_MORPHTARGETS
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
#endif`,Rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Px=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ix=`#ifdef USE_NORMALMAP
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
#endif`,Ux=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$x=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kx=`float getShadowMask() {
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
}`,Zx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,Jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ey=`#ifdef USE_SKINNING
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
#endif`,ty=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ny=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ry=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sy=`#ifdef USE_TRANSMISSION
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
#endif`,oy=`#ifdef USE_TRANSMISSION
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
#endif`,ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fy=`uniform sampler2D t2D;
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
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`#ifdef ENVMAP_TYPE_CUBE
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
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vy=`#include <common>
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
}`,_y=`#if DEPTH_PACKING == 3200
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
}`,xy=`#define DISTANCE
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
}`,yy=`#define DISTANCE
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ey=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`uniform float scale;
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
}`,wy=`uniform vec3 diffuse;
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
}`,Ty=`#include <common>
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Cy=`#define LAMBERT
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
}`,Ry=`#define LAMBERT
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
}`,by=`#define MATCAP
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
}`,Py=`#define MATCAP
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
}`,Ly=`#define NORMAL
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
}`,Ny=`#define NORMAL
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
}`,Dy=`#define PHONG
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
}`,Iy=`#define PHONG
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
}`,Uy=`#define STANDARD
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
}`,Fy=`#define STANDARD
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
}`,ky=`#define TOON
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
}`,Oy=`#define TOON
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
}`,zy=`uniform float size;
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
}`,By=`uniform vec3 diffuse;
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
}`,Hy=`#include <common>
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
}`,Vy=`uniform vec3 color;
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
}`,Gy=`uniform float rotation;
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
}`,Wy=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:f_,alphahash_pars_fragment:h_,alphamap_fragment:p_,alphamap_pars_fragment:m_,alphatest_fragment:g_,alphatest_pars_fragment:v_,aomap_fragment:__,aomap_pars_fragment:x_,batching_pars_vertex:y_,batching_vertex:S_,begin_vertex:E_,beginnormal_vertex:M_,bsdfs:w_,iridescence_fragment:T_,bumpmap_pars_fragment:A_,clipping_planes_fragment:C_,clipping_planes_pars_fragment:R_,clipping_planes_pars_vertex:b_,clipping_planes_vertex:P_,color_fragment:L_,color_pars_fragment:N_,color_pars_vertex:D_,color_vertex:I_,common:U_,cube_uv_reflection_fragment:F_,defaultnormal_vertex:k_,displacementmap_pars_vertex:O_,displacementmap_vertex:z_,emissivemap_fragment:B_,emissivemap_pars_fragment:H_,colorspace_fragment:V_,colorspace_pars_fragment:G_,envmap_fragment:W_,envmap_common_pars_fragment:j_,envmap_pars_fragment:X_,envmap_pars_vertex:Y_,envmap_physical_pars_fragment:rx,envmap_vertex:q_,fog_vertex:$_,fog_pars_vertex:K_,fog_fragment:Z_,fog_pars_fragment:Q_,gradientmap_pars_fragment:J_,lightmap_pars_fragment:ex,lights_lambert_fragment:tx,lights_lambert_pars_fragment:nx,lights_pars_begin:ix,lights_toon_fragment:sx,lights_toon_pars_fragment:ox,lights_phong_fragment:ax,lights_phong_pars_fragment:lx,lights_physical_fragment:cx,lights_physical_pars_fragment:ux,lights_fragment_begin:dx,lights_fragment_maps:fx,lights_fragment_end:hx,logdepthbuf_fragment:px,logdepthbuf_pars_fragment:mx,logdepthbuf_pars_vertex:gx,logdepthbuf_vertex:vx,map_fragment:_x,map_pars_fragment:xx,map_particle_fragment:yx,map_particle_pars_fragment:Sx,metalnessmap_fragment:Ex,metalnessmap_pars_fragment:Mx,morphinstance_vertex:wx,morphcolor_vertex:Tx,morphnormal_vertex:Ax,morphtarget_pars_vertex:Cx,morphtarget_vertex:Rx,normal_fragment_begin:bx,normal_fragment_maps:Px,normal_pars_fragment:Lx,normal_pars_vertex:Nx,normal_vertex:Dx,normalmap_pars_fragment:Ix,clearcoat_normal_fragment_begin:Ux,clearcoat_normal_fragment_maps:Fx,clearcoat_pars_fragment:kx,iridescence_pars_fragment:Ox,opaque_fragment:zx,packing:Bx,premultiplied_alpha_fragment:Hx,project_vertex:Vx,dithering_fragment:Gx,dithering_pars_fragment:Wx,roughnessmap_fragment:jx,roughnessmap_pars_fragment:Xx,shadowmap_pars_fragment:Yx,shadowmap_pars_vertex:qx,shadowmap_vertex:$x,shadowmask_pars_fragment:Kx,skinbase_vertex:Zx,skinning_pars_vertex:Qx,skinning_vertex:Jx,skinnormal_vertex:ey,specularmap_fragment:ty,specularmap_pars_fragment:ny,tonemapping_fragment:iy,tonemapping_pars_fragment:ry,transmission_fragment:sy,transmission_pars_fragment:oy,uv_pars_fragment:ay,uv_pars_vertex:ly,uv_vertex:cy,worldpos_vertex:uy,background_vert:dy,background_frag:fy,backgroundCube_vert:hy,backgroundCube_frag:py,cube_vert:my,cube_frag:gy,depth_vert:vy,depth_frag:_y,distanceRGBA_vert:xy,distanceRGBA_frag:yy,equirect_vert:Sy,equirect_frag:Ey,linedashed_vert:My,linedashed_frag:wy,meshbasic_vert:Ty,meshbasic_frag:Ay,meshlambert_vert:Cy,meshlambert_frag:Ry,meshmatcap_vert:by,meshmatcap_frag:Py,meshnormal_vert:Ly,meshnormal_frag:Ny,meshphong_vert:Dy,meshphong_frag:Iy,meshphysical_vert:Uy,meshphysical_frag:Fy,meshtoon_vert:ky,meshtoon_frag:Oy,points_vert:zy,points_frag:By,shadow_vert:Hy,shadow_frag:Vy,sprite_vert:Gy,sprite_frag:Wy},be={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},pi={basic:{uniforms:_n([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:_n([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:_n([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:_n([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:_n([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:_n([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:_n([be.points,be.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:_n([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:_n([be.common,be.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:_n([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:_n([be.sprite,be.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:_n([be.common,be.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:_n([be.lights,be.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};pi.physical={uniforms:_n([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const pl={r:0,b:0,g:0},Fr=new Oi,jy=new jt;function Xy(s,e,n,r,a,c,d){const f=new Ct(0);let p=c===!0?0:1,m,_,y=null,x=0,S=null;function w(I){let P=I.isScene===!0?I.background:null;return P&&P.isTexture&&(P=(I.backgroundBlurriness>0?n:e).get(P)),P}function A(I){let P=!1;const N=w(I);N===null?g(f,p):N&&N.isColor&&(g(N,1),P=!0);const q=s.xr.getEnvironmentBlendMode();q==="additive"?r.buffers.color.setClear(0,0,0,1,d):q==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(I,P){const N=w(P);N&&(N.isCubeTexture||N.mapping===Pl)?(_===void 0&&(_=new mi(new Go(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:Ws(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(q,F,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Fr.copy(P.backgroundRotation),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),_.material.uniforms.envMap.value=N,_.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(jy.makeRotationFromEuler(Fr)),_.material.toneMapped=Mt.getTransfer(N.colorSpace)!==It,(y!==N||x!==N.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,y=N,x=N.version,S=s.toneMapping),_.layers.enableAll(),I.unshift(_,_.geometry,_.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new mi(new Wo(2,2),new zi({name:"BackgroundMaterial",uniforms:Ws(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(N.colorSpace)!==It,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(y!==N||x!==N.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,y=N,x=N.version,S=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function g(I,P){I.getRGB(pl,jm(s)),r.buffers.color.setClear(pl.r,pl.g,pl.b,P,d)}return{getClearColor:function(){return f},setClearColor:function(I,P=1){f.set(I),p=P,g(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,g(f,p)},render:A,addToRenderList:v}}function Yy(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let c=a,d=!1;function f(M,R,te,Z,le){let de=!1;const ne=y(Z,te,R);c!==ne&&(c=ne,m(c.object)),de=S(M,Z,te,le),de&&w(M,Z,te,le),le!==null&&e.update(le,s.ELEMENT_ARRAY_BUFFER),(de||d)&&(d=!1,N(M,R,te,Z),le!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function p(){return s.createVertexArray()}function m(M){return s.bindVertexArray(M)}function _(M){return s.deleteVertexArray(M)}function y(M,R,te){const Z=te.wireframe===!0;let le=r[M.id];le===void 0&&(le={},r[M.id]=le);let de=le[R.id];de===void 0&&(de={},le[R.id]=de);let ne=de[Z];return ne===void 0&&(ne=x(p()),de[Z]=ne),ne}function x(M){const R=[],te=[],Z=[];for(let le=0;le<n;le++)R[le]=0,te[le]=0,Z[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:te,attributeDivisors:Z,object:M,attributes:{},index:null}}function S(M,R,te,Z){const le=c.attributes,de=R.attributes;let ne=0;const ce=te.getAttributes();for(const B in ce)if(ce[B].location>=0){const se=le[B];let k=de[B];if(k===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(k=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(k=M.instanceColor)),se===void 0||se.attribute!==k||k&&se.data!==k.data)return!0;ne++}return c.attributesNum!==ne||c.index!==Z}function w(M,R,te,Z){const le={},de=R.attributes;let ne=0;const ce=te.getAttributes();for(const B in ce)if(ce[B].location>=0){let se=de[B];se===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(se=M.instanceColor));const k={};k.attribute=se,se&&se.data&&(k.data=se.data),le[B]=k,ne++}c.attributes=le,c.attributesNum=ne,c.index=Z}function A(){const M=c.newAttributes;for(let R=0,te=M.length;R<te;R++)M[R]=0}function v(M){g(M,0)}function g(M,R){const te=c.newAttributes,Z=c.enabledAttributes,le=c.attributeDivisors;te[M]=1,Z[M]===0&&(s.enableVertexAttribArray(M),Z[M]=1),le[M]!==R&&(s.vertexAttribDivisor(M,R),le[M]=R)}function I(){const M=c.newAttributes,R=c.enabledAttributes;for(let te=0,Z=R.length;te<Z;te++)R[te]!==M[te]&&(s.disableVertexAttribArray(te),R[te]=0)}function P(M,R,te,Z,le,de,ne){ne===!0?s.vertexAttribIPointer(M,R,te,le,de):s.vertexAttribPointer(M,R,te,Z,le,de)}function N(M,R,te,Z){A();const le=Z.attributes,de=te.getAttributes(),ne=R.defaultAttributeValues;for(const ce in de){const B=de[ce];if(B.location>=0){let ue=le[ce];if(ue===void 0&&(ce==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),ce==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),ue!==void 0){const se=ue.normalized,k=ue.itemSize,re=e.get(ue);if(re===void 0)continue;const Le=re.buffer,W=re.type,ae=re.bytesPerElement,ge=W===s.INT||W===s.UNSIGNED_INT||ue.gpuType===kd;if(ue.isInterleavedBufferAttribute){const xe=ue.data,Pe=xe.stride,Ae=ue.offset;if(xe.isInstancedInterleavedBuffer){for(let Ye=0;Ye<B.locationSize;Ye++)g(B.location+Ye,xe.meshPerAttribute);M.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ye=0;Ye<B.locationSize;Ye++)v(B.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let Ye=0;Ye<B.locationSize;Ye++)P(B.location+Ye,k/B.locationSize,W,se,Pe*ae,(Ae+k/B.locationSize*Ye)*ae,ge)}else{if(ue.isInstancedBufferAttribute){for(let xe=0;xe<B.locationSize;xe++)g(B.location+xe,ue.meshPerAttribute);M.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let xe=0;xe<B.locationSize;xe++)v(B.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let xe=0;xe<B.locationSize;xe++)P(B.location+xe,k/B.locationSize,W,se,k*ae,k/B.locationSize*xe*ae,ge)}}else if(ne!==void 0){const se=ne[ce];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(B.location,se);break;case 3:s.vertexAttrib3fv(B.location,se);break;case 4:s.vertexAttrib4fv(B.location,se);break;default:s.vertexAttrib1fv(B.location,se)}}}}I()}function q(){G();for(const M in r){const R=r[M];for(const te in R){const Z=R[te];for(const le in Z)_(Z[le].object),delete Z[le];delete R[te]}delete r[M]}}function F(M){if(r[M.id]===void 0)return;const R=r[M.id];for(const te in R){const Z=R[te];for(const le in Z)_(Z[le].object),delete Z[le];delete R[te]}delete r[M.id]}function D(M){for(const R in r){const te=r[R];if(te[M.id]===void 0)continue;const Z=te[M.id];for(const le in Z)_(Z[le].object),delete Z[le];delete te[M.id]}}function G(){pe(),d=!0,c!==a&&(c=a,m(c.object))}function pe(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:G,resetDefaultState:pe,dispose:q,releaseStatesOfGeometry:F,releaseStatesOfProgram:D,initAttributes:A,enableAttribute:v,disableUnusedAttributes:I}}function qy(s,e,n){let r;function a(m){r=m}function c(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function d(m,_,y){y!==0&&(s.drawArraysInstanced(r,m,_,y),n.update(_,r,y))}function f(m,_,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,y);let S=0;for(let w=0;w<y;w++)S+=_[w];n.update(S,r,1)}function p(m,_,y,x){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<m.length;w++)d(m[w],_[w],x[w]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,y);let w=0;for(let A=0;A<y;A++)w+=_[A];for(let A=0;A<x.length;A++)n.update(w,r,x[A])}}this.setMode=a,this.render=c,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function $y(s,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function d(D){return!(D!==ai&&r.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(D){const G=D===zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==ki&&r.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Ui&&!G)}function p(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const y=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(x===!0){const D=e.get("EXT_clip_control");D.clipControlEXT(D.LOWER_LEFT_EXT,D.ZERO_TO_ONE_EXT)}const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),q=w>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:y,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:w,maxTextureSize:A,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:I,maxVaryings:P,maxFragmentUniforms:N,vertexTextures:q,maxSamples:F}}function Ky(s){const e=this;let n=null,r=0,a=!1,c=!1;const d=new Or,f=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const S=y.length!==0||x||r!==0||a;return a=x,r=y.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,x){n=_(y,x,0)},this.setState=function(y,x,S){const w=y.clippingPlanes,A=y.clipIntersection,v=y.clipShadows,g=s.get(y);if(!a||w===null||w.length===0||c&&!v)c?_(null):m();else{const I=c?0:r,P=I*4;let N=g.clippingState||null;p.value=N,N=_(w,x,P,S);for(let q=0;q!==P;++q)N[q]=n[q];g.clippingState=N,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(y,x,S,w){const A=y!==null?y.length:0;let v=null;if(A!==0){if(v=p.value,w!==!0||v===null){const g=S+A*4,I=x.matrixWorldInverse;f.getNormalMatrix(I),(v===null||v.length<g)&&(v=new Float32Array(g));for(let P=0,N=S;P!==A;++P,N+=4)d.copy(y[P]).applyMatrix4(I,f),d.normal.toArray(v,N),v[N+3]=d.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,v}}function Zy(s){let e=new WeakMap;function n(d,f){return f===id?d.mapping=Bs:f===rd&&(d.mapping=Hs),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===id||f===rd)if(e.has(d)){const p=e.get(d).texture;return n(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new l_(p.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",a),n(m.texture,d.mapping)}else return null}}return d}function a(d){const f=d.target;f.removeEventListener("dispose",a);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class Km extends Xm{constructor(e=-1,n=1,r=1,a=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,d=r+e,f=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(c,d,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Us=4,qp=[.125,.215,.35,.446,.526,.582],Hr=20,Bu=new Km,$p=new Ct;let Hu=null,Vu=0,Gu=0,Wu=!1;const zr=(1+Math.sqrt(5))/2,Ds=1/zr,Kp=[new ie(-zr,Ds,0),new ie(zr,Ds,0),new ie(-Ds,0,zr),new ie(Ds,0,zr),new ie(0,zr,-Ds),new ie(0,zr,Ds),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)];class Zp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Hu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hu,Vu,Gu),this._renderer.xr.enabled=Wu,e.scissorTest=!1,ml(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:si,minFilter:si,generateMipmaps:!1,type:zo,format:ai,colorSpace:_r,depthBuffer:!1},a=Qp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qp(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qy(c)),this._blurMaterial=Jy(c,e,n)}return a}_compileMaterial(e){const n=new mi(this._lodPlanes[0],e);this._renderer.compile(n,Bu)}_sceneToCubeUV(e,n,r,a){const f=new ri(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,x=_.toneMapping;_.getClearColor($p),_.toneMapping=gr,_.autoClear=!1;const S=new Vm({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),w=new mi(new Go,S);let A=!1;const v=e.background;v?v.isColor&&(S.color.copy(v),e.background=null,A=!0):(S.color.copy($p),A=!0);for(let g=0;g<6;g++){const I=g%3;I===0?(f.up.set(0,p[g],0),f.lookAt(m[g],0,0)):I===1?(f.up.set(0,0,p[g]),f.lookAt(0,m[g],0)):(f.up.set(0,p[g],0),f.lookAt(0,0,m[g]));const P=this._cubeSize;ml(a,I*P,g>2?P:0,P,P),_.setRenderTarget(a),A&&_.render(w,f),_.render(e,f)}w.geometry.dispose(),w.material.dispose(),_.toneMapping=x,_.autoClear=y,e.background=v}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Bs||e.mapping===Hs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jp());const c=a?this._cubemapMaterial:this._equirectMaterial,d=new mi(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const p=this._cubeSize;ml(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(d,Bu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=Kp[(a-c-1)%Kp.length];this._blur(e,c-1,c,d,f)}n.autoClear=r}_blur(e,n,r,a,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",c),this._halfBlur(d,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,d,f){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,y=new mi(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Hr-1),A=c/w,v=isFinite(c)?1+Math.floor(_*A):Hr;v>Hr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Hr}`);const g=[];let I=0;for(let D=0;D<Hr;++D){const G=D/A,pe=Math.exp(-G*G/2);g.push(pe),D===0?I+=pe:D<v&&(I+=2*pe)}for(let D=0;D<g.length;D++)g[D]=g[D]/I;x.envMap.value=e.texture,x.samples.value=v,x.weights.value=g,x.latitudinal.value=d==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:P}=this;x.dTheta.value=w,x.mipInt.value=P-r;const N=this._sizeLods[a],q=3*N*(a>P-Us?a-P+Us:0),F=4*(this._cubeSize-N);ml(n,q,F,3*N,2*N),p.setRenderTarget(n),p.render(y,Bu)}}function Qy(s){const e=[],n=[],r=[];let a=s;const c=s-Us+1+qp.length;for(let d=0;d<c;d++){const f=Math.pow(2,a);n.push(f);let p=1/f;d>s-Us?p=qp[d-s+Us-1]:d===0&&(p=0),r.push(p);const m=1/(f-2),_=-m,y=1+m,x=[_,_,y,_,y,y,_,_,y,y,_,y],S=6,w=6,A=3,v=2,g=1,I=new Float32Array(A*w*S),P=new Float32Array(v*w*S),N=new Float32Array(g*w*S);for(let F=0;F<S;F++){const D=F%3*2/3-1,G=F>2?0:-1,pe=[D,G,0,D+2/3,G,0,D+2/3,G+1,0,D,G,0,D+2/3,G+1,0,D,G+1,0];I.set(pe,A*w*F),P.set(x,v*w*F);const M=[F,F,F,F,F,F];N.set(M,g*w*F)}const q=new Yr;q.setAttribute("position",new gi(I,A)),q.setAttribute("uv",new gi(P,v)),q.setAttribute("faceIndex",new gi(N,g)),e.push(q),a>Us&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Qp(s,e,n){const r=new Xr(s,e,n);return r.texture.mapping=Pl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ml(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function Jy(s,e,n){const r=new Float32Array(Hr),a=new ie(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:jd(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Jp(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jd(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function em(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function jd(){return`

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
	`}function eS(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,m=p===id||p===rd,_=p===Bs||p===Hs;if(m||_){let y=e.get(f);const x=y!==void 0?y.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new Zp(s)),y=m?n.fromEquirectangular(f,y):n.fromCubemap(f,y),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),y.texture;if(y!==void 0)return y.texture;{const S=f.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new Zp(s)),y=m?n.fromEquirectangular(f):n.fromCubemap(f),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),f.addEventListener("dispose",c),y.texture):null}}}return f}function a(f){let p=0;const m=6;for(let _=0;_<m;_++)f[_]!==void 0&&p++;return p===m}function c(f){const p=f.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function tS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Ml("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function nS(s,e,n,r){const a={},c=new WeakMap;function d(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);for(const w in x.morphAttributes){const A=x.morphAttributes[w];for(let v=0,g=A.length;v<g;v++)e.remove(A[v])}x.removeEventListener("dispose",d),delete a[x.id];const S=c.get(x);S&&(e.remove(S),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(y,x){return a[x.id]===!0||(x.addEventListener("dispose",d),a[x.id]=!0,n.memory.geometries++),x}function p(y){const x=y.attributes;for(const w in x)e.update(x[w],s.ARRAY_BUFFER);const S=y.morphAttributes;for(const w in S){const A=S[w];for(let v=0,g=A.length;v<g;v++)e.update(A[v],s.ARRAY_BUFFER)}}function m(y){const x=[],S=y.index,w=y.attributes.position;let A=0;if(S!==null){const I=S.array;A=S.version;for(let P=0,N=I.length;P<N;P+=3){const q=I[P+0],F=I[P+1],D=I[P+2];x.push(q,F,F,D,D,q)}}else if(w!==void 0){const I=w.array;A=w.version;for(let P=0,N=I.length/3-1;P<N;P+=3){const q=P+0,F=P+1,D=P+2;x.push(q,F,F,D,D,q)}}else return;const v=new(km(x)?Wm:Gm)(x,1);v.version=A;const g=c.get(y);g&&e.remove(g),c.set(y,v)}function _(y){const x=c.get(y);if(x){const S=y.index;S!==null&&x.version<S.version&&m(y)}else m(y);return c.get(y)}return{get:f,update:p,getWireframeAttribute:_}}function iS(s,e,n){let r;function a(x){r=x}let c,d;function f(x){c=x.type,d=x.bytesPerElement}function p(x,S){s.drawElements(r,S,c,x*d),n.update(S,r,1)}function m(x,S,w){w!==0&&(s.drawElementsInstanced(r,S,c,x*d,w),n.update(S,r,w))}function _(x,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,x,0,w);let v=0;for(let g=0;g<w;g++)v+=S[g];n.update(v,r,1)}function y(x,S,w,A){if(w===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<x.length;g++)m(x[g]/d,S[g],A[g]);else{v.multiDrawElementsInstancedWEBGL(r,S,0,c,x,0,A,0,w);let g=0;for(let I=0;I<w;I++)g+=S[I];for(let I=0;I<A.length;I++)n.update(g,r,A[I])}}this.setMode=a,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=y}function rS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,f){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function sS(s,e,n){const r=new WeakMap,a=new Vt;function c(d,f,p){const m=d.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=_!==void 0?_.length:0;let x=r.get(f);if(x===void 0||x.count!==y){let M=function(){G.dispose(),r.delete(f),f.removeEventListener("dispose",M)};var S=M;x!==void 0&&x.texture.dispose();const w=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,v=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],I=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let N=0;w===!0&&(N=1),A===!0&&(N=2),v===!0&&(N=3);let q=f.attributes.position.count*N,F=1;q>e.maxTextureSize&&(F=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const D=new Float32Array(q*F*4*y),G=new zm(D,q,F,y);G.type=Ui,G.needsUpdate=!0;const pe=N*4;for(let R=0;R<y;R++){const te=g[R],Z=I[R],le=P[R],de=q*F*4*R;for(let ne=0;ne<te.count;ne++){const ce=ne*pe;w===!0&&(a.fromBufferAttribute(te,ne),D[de+ce+0]=a.x,D[de+ce+1]=a.y,D[de+ce+2]=a.z,D[de+ce+3]=0),A===!0&&(a.fromBufferAttribute(Z,ne),D[de+ce+4]=a.x,D[de+ce+5]=a.y,D[de+ce+6]=a.z,D[de+ce+7]=0),v===!0&&(a.fromBufferAttribute(le,ne),D[de+ce+8]=a.x,D[de+ce+9]=a.y,D[de+ce+10]=a.z,D[de+ce+11]=le.itemSize===4?a.w:1)}}x={count:y,texture:G,size:new Rt(q,F)},r.set(f,x),f.addEventListener("dispose",M)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let w=0;for(let v=0;v<m.length;v++)w+=m[v];const A=f.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function oS(s,e,n,r){let a=new WeakMap;function c(p){const m=r.render.frame,_=p.geometry,y=e.get(p,_);if(a.get(y)!==m&&(e.update(y),a.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return y}function d(){a=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:d}}class Zm extends Rn{constructor(e,n,r,a,c,d,f,p,m,_=ks){if(_!==ks&&_!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===ks&&(r=jr),r===void 0&&_===Gs&&(r=Vs),super(null,a,c,d,f,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:Yn,this.minFilter=p!==void 0?p:Yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Qm=new Rn,tm=new Zm(1,1),Jm=new zm,eg=new jv,tg=new Ym,nm=[],im=[],rm=new Float32Array(16),sm=new Float32Array(9),om=new Float32Array(4);function Xs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let c=nm[a];if(c===void 0&&(c=new Float32Array(a),nm[a]=c),e!==0){r.toArray(c,0);for(let d=1,f=0;d!==e;++d)f+=n,s[d].toArray(c,f)}return c}function $t(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Kt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Dl(s,e){let n=im[e];n===void 0&&(n=new Int32Array(e),im[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function aS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function lS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2fv(this.addr,e),Kt(n,e)}}function cS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;s.uniform3fv(this.addr,e),Kt(n,e)}}function uS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4fv(this.addr,e),Kt(n,e)}}function dS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;om.set(r),s.uniformMatrix2fv(this.addr,!1,om),Kt(n,r)}}function fS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;sm.set(r),s.uniformMatrix3fv(this.addr,!1,sm),Kt(n,r)}}function hS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;rm.set(r),s.uniformMatrix4fv(this.addr,!1,rm),Kt(n,r)}}function pS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function mS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2iv(this.addr,e),Kt(n,e)}}function gS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3iv(this.addr,e),Kt(n,e)}}function vS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4iv(this.addr,e),Kt(n,e)}}function _S(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function xS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2uiv(this.addr,e),Kt(n,e)}}function yS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3uiv(this.addr,e),Kt(n,e)}}function SS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4uiv(this.addr,e),Kt(n,e)}}function ES(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let c;this.type===s.SAMPLER_2D_SHADOW?(tm.compareFunction=Fm,c=tm):c=Qm,n.setTexture2D(e||c,a)}function MS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||eg,a)}function wS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||tg,a)}function TS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Jm,a)}function AS(s){switch(s){case 5126:return aS;case 35664:return lS;case 35665:return cS;case 35666:return uS;case 35674:return dS;case 35675:return fS;case 35676:return hS;case 5124:case 35670:return pS;case 35667:case 35671:return mS;case 35668:case 35672:return gS;case 35669:case 35673:return vS;case 5125:return _S;case 36294:return xS;case 36295:return yS;case 36296:return SS;case 35678:case 36198:case 36298:case 36306:case 35682:return ES;case 35679:case 36299:case 36307:return MS;case 35680:case 36300:case 36308:case 36293:return wS;case 36289:case 36303:case 36311:case 36292:return TS}}function CS(s,e){s.uniform1fv(this.addr,e)}function RS(s,e){const n=Xs(e,this.size,2);s.uniform2fv(this.addr,n)}function bS(s,e){const n=Xs(e,this.size,3);s.uniform3fv(this.addr,n)}function PS(s,e){const n=Xs(e,this.size,4);s.uniform4fv(this.addr,n)}function LS(s,e){const n=Xs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function NS(s,e){const n=Xs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function DS(s,e){const n=Xs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function IS(s,e){s.uniform1iv(this.addr,e)}function US(s,e){s.uniform2iv(this.addr,e)}function FS(s,e){s.uniform3iv(this.addr,e)}function kS(s,e){s.uniform4iv(this.addr,e)}function OS(s,e){s.uniform1uiv(this.addr,e)}function zS(s,e){s.uniform2uiv(this.addr,e)}function BS(s,e){s.uniform3uiv(this.addr,e)}function HS(s,e){s.uniform4uiv(this.addr,e)}function VS(s,e,n){const r=this.cache,a=e.length,c=Dl(n,a);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||Qm,c[d])}function GS(s,e,n){const r=this.cache,a=e.length,c=Dl(n,a);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||eg,c[d])}function WS(s,e,n){const r=this.cache,a=e.length,c=Dl(n,a);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||tg,c[d])}function jS(s,e,n){const r=this.cache,a=e.length,c=Dl(n,a);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||Jm,c[d])}function XS(s){switch(s){case 5126:return CS;case 35664:return RS;case 35665:return bS;case 35666:return PS;case 35674:return LS;case 35675:return NS;case 35676:return DS;case 5124:case 35670:return IS;case 35667:case 35671:return US;case 35668:case 35672:return FS;case 35669:case 35673:return kS;case 5125:return OS;case 36294:return zS;case 36295:return BS;case 36296:return HS;case 35678:case 36198:case 36298:case 36306:case 35682:return VS;case 35679:case 36299:case 36307:return GS;case 35680:case 36300:case 36308:case 36293:return WS;case 36289:case 36303:case 36311:case 36292:return jS}}class YS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=AS(n.type)}}class qS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XS(n.type)}}class $S{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,d=a.length;c!==d;++c){const f=a[c];f.setValue(e,n[f.id],r)}}}const ju=/(\w+)(\])?(\[|\.)?/g;function am(s,e){s.seq.push(e),s.map[e.id]=e}function KS(s,e,n){const r=s.name,a=r.length;for(ju.lastIndex=0;;){const c=ju.exec(r),d=ju.lastIndex;let f=c[1];const p=c[2]==="]",m=c[3];if(p&&(f=f|0),m===void 0||m==="["&&d+2===a){am(n,m===void 0?new YS(f,s,e):new qS(f,s,e));break}else{let y=n.map[f];y===void 0&&(y=new $S(f),am(n,y)),n=y}}}class wl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),d=e.getUniformLocation(n,c.name);KS(c,d,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,d=n.length;c!==d;++c){const f=n[c],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function lm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const ZS=37297;let QS=0;function JS(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let d=a;d<c;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return r.join(`
`)}function eE(s){const e=Mt.getPrimaries(Mt.workingColorSpace),n=Mt.getPrimaries(s);let r;switch(e===n?r="":e===Cl&&n===Al?r="LinearDisplayP3ToLinearSRGB":e===Al&&n===Cl&&(r="LinearSRGBToLinearDisplayP3"),s){case _r:case Ll:return[r,"LinearTransferOETF"];case hi:case Gd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function cm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+JS(s.getShaderSource(e),d)}else return a}function tE(s,e){const n=eE(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function nE(s,e){let n;switch(e){case gv:n="Linear";break;case vv:n="Reinhard";break;case _v:n="Cineon";break;case xv:n="ACESFilmic";break;case Sv:n="AgX";break;case Ev:n="Neutral";break;case yv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const gl=new ie;function iE(){Mt.getLuminanceCoefficients(gl);const s=gl.x.toFixed(4),e=gl.y.toFixed(4),n=gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function sE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function oE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=s.getActiveAttrib(e,a),d=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:f}}return n}function Uo(s){return s!==""}function um(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Id(s){return s.replace(aE,cE)}const lE=new Map;function cE(s,e){let n=st[e];if(n===void 0){const r=lE.get(e);if(r!==void 0)n=st[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Id(n)}const uE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fm(s){return s.replace(uE,dE)}function dE(s,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function hm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function fE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Mm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===$0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function hE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Bs:case Hs:e="ENVMAP_TYPE_CUBE";break;case Pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function mE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wm:e="ENVMAP_BLENDING_MULTIPLY";break;case pv:e="ENVMAP_BLENDING_MIX";break;case mv:e="ENVMAP_BLENDING_ADD";break}return e}function gE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function vE(s,e,n,r){const a=s.getContext(),c=n.defines;let d=n.vertexShader,f=n.fragmentShader;const p=fE(n),m=hE(n),_=pE(n),y=mE(n),x=gE(n),S=rE(n),w=sE(c),A=a.createProgram();let v,g,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Uo).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Uo).join(`
`),g.length>0&&(g+=`
`)):(v=[hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),g=[hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gr?"#define TONE_MAPPING":"",n.toneMapping!==gr?st.tonemapping_pars_fragment:"",n.toneMapping!==gr?nE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,tE("linearToOutputTexel",n.outputColorSpace),iE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Uo).join(`
`)),d=Id(d),d=um(d,n),d=dm(d,n),f=Id(f),f=um(f,n),f=dm(f,n),d=fm(d),f=fm(f),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,v=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",n.glslVersion===Pp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Pp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const P=I+v+d,N=I+g+f,q=lm(a,a.VERTEX_SHADER,P),F=lm(a,a.FRAGMENT_SHADER,N);a.attachShader(A,q),a.attachShader(A,F),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function D(R){if(s.debug.checkShaderErrors){const te=a.getProgramInfoLog(A).trim(),Z=a.getShaderInfoLog(q).trim(),le=a.getShaderInfoLog(F).trim();let de=!0,ne=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,A,q,F);else{const ce=cm(a,q,"vertex"),B=cm(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+te+`
`+ce+`
`+B)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(Z===""||le==="")&&(ne=!1);ne&&(R.diagnostics={runnable:de,programLog:te,vertexShader:{log:Z,prefix:v},fragmentShader:{log:le,prefix:g}})}a.deleteShader(q),a.deleteShader(F),G=new wl(a,A),pe=oE(a,A)}let G;this.getUniforms=function(){return G===void 0&&D(this),G};let pe;this.getAttributes=function(){return pe===void 0&&D(this),pe};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=a.getProgramParameter(A,ZS)),M},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=QS++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=q,this.fragmentShader=F,this}let _E=0;class xE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new yE(e),n.set(e,r)),r}}class yE{constructor(e){this.id=_E++,this.code=e,this.usedTimes=0}}function SE(s,e,n,r,a,c,d){const f=new Bm,p=new xE,m=new Set,_=[],y=a.logarithmicDepthBuffer,x=a.reverseDepthBuffer,S=a.vertexTextures;let w=a.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return m.add(M),M===0?"uv":`uv${M}`}function g(M,R,te,Z,le){const de=Z.fog,ne=le.geometry,ce=M.isMeshStandardMaterial?Z.environment:null,B=(M.isMeshStandardMaterial?n:e).get(M.envMap||ce),ue=B&&B.mapping===Pl?B.image.height:null,se=A[M.type];M.precision!==null&&(w=a.getMaxPrecision(M.precision),w!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",w,"instead."));const k=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,re=k!==void 0?k.length:0;let Le=0;ne.morphAttributes.position!==void 0&&(Le=1),ne.morphAttributes.normal!==void 0&&(Le=2),ne.morphAttributes.color!==void 0&&(Le=3);let W,ae,ge,xe;if(se){const Zt=pi[se];W=Zt.vertexShader,ae=Zt.fragmentShader}else W=M.vertexShader,ae=M.fragmentShader,p.update(M),ge=p.getVertexShaderID(M),xe=p.getFragmentShaderID(M);const Pe=s.getRenderTarget(),Ae=le.isInstancedMesh===!0,Ye=le.isBatchedMesh===!0,ft=!!M.map,ct=!!M.matcap,z=!!B,sn=!!M.aoMap,lt=!!M.lightMap,ht=!!M.bumpMap,Ze=!!M.normalMap,Tt=!!M.displacementMap,Je=!!M.emissiveMap,L=!!M.metalnessMap,T=!!M.roughnessMap,K=M.anisotropy>0,he=M.clearcoat>0,ye=M.dispersion>0,fe=M.iridescence>0,Xe=M.sheen>0,Ce=M.transmission>0,Fe=K&&!!M.anisotropyMap,pt=he&&!!M.clearcoatMap,Ee=he&&!!M.clearcoatNormalMap,ke=he&&!!M.clearcoatRoughnessMap,tt=fe&&!!M.iridescenceMap,et=fe&&!!M.iridescenceThicknessMap,ze=Xe&&!!M.sheenColorMap,ut=Xe&&!!M.sheenRoughnessMap,it=!!M.specularMap,Et=!!M.specularColorMap,V=!!M.specularIntensityMap,Ne=Ce&&!!M.transmissionMap,oe=Ce&&!!M.thicknessMap,me=!!M.gradientMap,Re=!!M.alphaMap,Ie=M.alphaTest>0,dt=!!M.alphaHash,kt=!!M.extensions;let on=gr;M.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(on=s.toneMapping);const gt={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:W,fragmentShader:ae,defines:M.defines,customVertexShaderID:ge,customFragmentShaderID:xe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:w,batching:Ye,batchingColor:Ye&&le._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&le.instanceColor!==null,instancingMorph:Ae&&le.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Pe===null?s.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:_r,alphaToCoverage:!!M.alphaToCoverage,map:ft,matcap:ct,envMap:z,envMapMode:z&&B.mapping,envMapCubeUVHeight:ue,aoMap:sn,lightMap:lt,bumpMap:ht,normalMap:Ze,displacementMap:S&&Tt,emissiveMap:Je,normalMapObjectSpace:Ze&&M.normalMapType===Cv,normalMapTangentSpace:Ze&&M.normalMapType===Av,metalnessMap:L,roughnessMap:T,anisotropy:K,anisotropyMap:Fe,clearcoat:he,clearcoatMap:pt,clearcoatNormalMap:Ee,clearcoatRoughnessMap:ke,dispersion:ye,iridescence:fe,iridescenceMap:tt,iridescenceThicknessMap:et,sheen:Xe,sheenColorMap:ze,sheenRoughnessMap:ut,specularMap:it,specularColorMap:Et,specularIntensityMap:V,transmission:Ce,transmissionMap:Ne,thicknessMap:oe,gradientMap:me,opaque:M.transparent===!1&&M.blending===Fs&&M.alphaToCoverage===!1,alphaMap:Re,alphaTest:Ie,alphaHash:dt,combine:M.combine,mapUv:ft&&v(M.map.channel),aoMapUv:sn&&v(M.aoMap.channel),lightMapUv:lt&&v(M.lightMap.channel),bumpMapUv:ht&&v(M.bumpMap.channel),normalMapUv:Ze&&v(M.normalMap.channel),displacementMapUv:Tt&&v(M.displacementMap.channel),emissiveMapUv:Je&&v(M.emissiveMap.channel),metalnessMapUv:L&&v(M.metalnessMap.channel),roughnessMapUv:T&&v(M.roughnessMap.channel),anisotropyMapUv:Fe&&v(M.anisotropyMap.channel),clearcoatMapUv:pt&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:et&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:ut&&v(M.sheenRoughnessMap.channel),specularMapUv:it&&v(M.specularMap.channel),specularColorMapUv:Et&&v(M.specularColorMap.channel),specularIntensityMapUv:V&&v(M.specularIntensityMap.channel),transmissionMapUv:Ne&&v(M.transmissionMap.channel),thicknessMapUv:oe&&v(M.thicknessMap.channel),alphaMapUv:Re&&v(M.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Ze||K),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!ne.attributes.uv&&(ft||Re),fog:!!de,useFog:M.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:x,skinning:le.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Le,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&te.length>0,shadowMapType:s.shadowMap.type,toneMapping:on,decodeVideoTexture:ft&&M.map.isVideoTexture===!0&&Mt.getTransfer(M.map.colorSpace)===It,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ii,flipSided:M.side===Cn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:kt&&M.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&M.extensions.multiDraw===!0||Ye)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return gt.vertexUv1s=m.has(1),gt.vertexUv2s=m.has(2),gt.vertexUv3s=m.has(3),m.clear(),gt}function I(M){const R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(const te in M.defines)R.push(te),R.push(M.defines[te]);return M.isRawShaderMaterial===!1&&(P(R,M),N(R,M),R.push(s.outputColorSpace)),R.push(M.customProgramCacheKey),R.join()}function P(M,R){M.push(R.precision),M.push(R.outputColorSpace),M.push(R.envMapMode),M.push(R.envMapCubeUVHeight),M.push(R.mapUv),M.push(R.alphaMapUv),M.push(R.lightMapUv),M.push(R.aoMapUv),M.push(R.bumpMapUv),M.push(R.normalMapUv),M.push(R.displacementMapUv),M.push(R.emissiveMapUv),M.push(R.metalnessMapUv),M.push(R.roughnessMapUv),M.push(R.anisotropyMapUv),M.push(R.clearcoatMapUv),M.push(R.clearcoatNormalMapUv),M.push(R.clearcoatRoughnessMapUv),M.push(R.iridescenceMapUv),M.push(R.iridescenceThicknessMapUv),M.push(R.sheenColorMapUv),M.push(R.sheenRoughnessMapUv),M.push(R.specularMapUv),M.push(R.specularColorMapUv),M.push(R.specularIntensityMapUv),M.push(R.transmissionMapUv),M.push(R.thicknessMapUv),M.push(R.combine),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.morphAttributeCount),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numSpotLightMaps),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.numSpotLightShadowsWithMaps),M.push(R.numLightProbes),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function N(M,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),M.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.alphaToCoverage&&f.enable(20),M.push(f.mask)}function q(M){const R=A[M.type];let te;if(R){const Z=pi[R];te=r_.clone(Z.uniforms)}else te=M.uniforms;return te}function F(M,R){let te;for(let Z=0,le=_.length;Z<le;Z++){const de=_[Z];if(de.cacheKey===R){te=de,++te.usedTimes;break}}return te===void 0&&(te=new vE(s,R,M,c),_.push(te)),te}function D(M){if(--M.usedTimes===0){const R=_.indexOf(M);_[R]=_[_.length-1],_.pop(),M.destroy()}}function G(M){p.remove(M)}function pe(){p.dispose()}return{getParameters:g,getProgramCacheKey:I,getUniforms:q,acquireProgram:F,releaseProgram:D,releaseShaderCache:G,programs:_,dispose:pe}}function EE(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function a(d,f,p){s.get(d)[f]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:c}}function ME(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function pm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function mm(){const s=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function d(y,x,S,w,A,v){let g=s[e];return g===void 0?(g={id:y.id,object:y,geometry:x,material:S,groupOrder:w,renderOrder:y.renderOrder,z:A,group:v},s[e]=g):(g.id=y.id,g.object=y,g.geometry=x,g.material=S,g.groupOrder=w,g.renderOrder=y.renderOrder,g.z=A,g.group=v),e++,g}function f(y,x,S,w,A,v){const g=d(y,x,S,w,A,v);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function p(y,x,S,w,A,v){const g=d(y,x,S,w,A,v);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(y,x){n.length>1&&n.sort(y||ME),r.length>1&&r.sort(x||pm),a.length>1&&a.sort(x||pm)}function _(){for(let y=e,x=s.length;y<x;y++){const S=s[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:f,unshift:p,finish:_,sort:m}}function wE(){let s=new WeakMap;function e(r,a){const c=s.get(r);let d;return c===void 0?(d=new mm,s.set(r,[d])):a>=c.length?(d=new mm,c.push(d)):d=c[a],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function TE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ie,color:new Ct};break;case"SpotLight":n={position:new ie,direction:new ie,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ie,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ie,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":n={color:new Ct,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=n,n}}}function AE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let CE=0;function RE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function bE(s){const e=new TE,n=AE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ie);const a=new ie,c=new jt,d=new jt;function f(m){let _=0,y=0,x=0;for(let pe=0;pe<9;pe++)r.probe[pe].set(0,0,0);let S=0,w=0,A=0,v=0,g=0,I=0,P=0,N=0,q=0,F=0,D=0;m.sort(RE);for(let pe=0,M=m.length;pe<M;pe++){const R=m[pe],te=R.color,Z=R.intensity,le=R.distance,de=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)_+=te.r*Z,y+=te.g*Z,x+=te.b*Z;else if(R.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(R.sh.coefficients[ne],Z);D++}else if(R.isDirectionalLight){const ne=e.get(R);if(ne.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const ce=R.shadow,B=n.get(R);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,r.directionalShadow[S]=B,r.directionalShadowMap[S]=de,r.directionalShadowMatrix[S]=R.shadow.matrix,I++}r.directional[S]=ne,S++}else if(R.isSpotLight){const ne=e.get(R);ne.position.setFromMatrixPosition(R.matrixWorld),ne.color.copy(te).multiplyScalar(Z),ne.distance=le,ne.coneCos=Math.cos(R.angle),ne.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),ne.decay=R.decay,r.spot[A]=ne;const ce=R.shadow;if(R.map&&(r.spotLightMap[q]=R.map,q++,ce.updateMatrices(R),R.castShadow&&F++),r.spotLightMatrix[A]=ce.matrix,R.castShadow){const B=n.get(R);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,r.spotShadow[A]=B,r.spotShadowMap[A]=de,N++}A++}else if(R.isRectAreaLight){const ne=e.get(R);ne.color.copy(te).multiplyScalar(Z),ne.halfWidth.set(R.width*.5,0,0),ne.halfHeight.set(0,R.height*.5,0),r.rectArea[v]=ne,v++}else if(R.isPointLight){const ne=e.get(R);if(ne.color.copy(R.color).multiplyScalar(R.intensity),ne.distance=R.distance,ne.decay=R.decay,R.castShadow){const ce=R.shadow,B=n.get(R);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,B.shadowCameraNear=ce.camera.near,B.shadowCameraFar=ce.camera.far,r.pointShadow[w]=B,r.pointShadowMap[w]=de,r.pointShadowMatrix[w]=R.shadow.matrix,P++}r.point[w]=ne,w++}else if(R.isHemisphereLight){const ne=e.get(R);ne.skyColor.copy(R.color).multiplyScalar(Z),ne.groundColor.copy(R.groundColor).multiplyScalar(Z),r.hemi[g]=ne,g++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=y,r.ambient[2]=x;const G=r.hash;(G.directionalLength!==S||G.pointLength!==w||G.spotLength!==A||G.rectAreaLength!==v||G.hemiLength!==g||G.numDirectionalShadows!==I||G.numPointShadows!==P||G.numSpotShadows!==N||G.numSpotMaps!==q||G.numLightProbes!==D)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=v,r.point.length=w,r.hemi.length=g,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=N+q-F,r.spotLightMap.length=q,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=D,G.directionalLength=S,G.pointLength=w,G.spotLength=A,G.rectAreaLength=v,G.hemiLength=g,G.numDirectionalShadows=I,G.numPointShadows=P,G.numSpotShadows=N,G.numSpotMaps=q,G.numLightProbes=D,r.version=CE++)}function p(m,_){let y=0,x=0,S=0,w=0,A=0;const v=_.matrixWorldInverse;for(let g=0,I=m.length;g<I;g++){const P=m[g];if(P.isDirectionalLight){const N=r.directional[y];N.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(v),y++}else if(P.isSpotLight){const N=r.spot[S];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(v),N.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(v),S++}else if(P.isRectAreaLight){const N=r.rectArea[w];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(v),d.identity(),c.copy(P.matrixWorld),c.premultiply(v),d.extractRotation(c),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),w++}else if(P.isPointLight){const N=r.point[x];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(v),x++}else if(P.isHemisphereLight){const N=r.hemi[A];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(v),A++}}}return{setup:f,setupView:p,state:r}}function gm(s){const e=new bE(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function c(_){n.push(_)}function d(_){r.push(_)}function f(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:d}}function PE(s){let e=new WeakMap;function n(a,c=0){const d=e.get(a);let f;return d===void 0?(f=new gm(s),e.set(a,[f])):c>=d.length?(f=new gm(s),d.push(f)):f=d[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class LE extends Nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NE extends Nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const DE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IE=`uniform sampler2D shadow_pass;
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
}`;function UE(s,e,n){let r=new qm;const a=new Rt,c=new Rt,d=new Vt,f=new LE({depthPacking:Tv}),p=new NE,m={},_=n.maxTextureSize,y={[vr]:Cn,[Cn]:vr,[Ii]:Ii},x=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:DE,fragmentShader:IE}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const w=new Yr;w.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new mi(w,x),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mm;let g=this.type;this.render=function(F,D,G){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||F.length===0)return;const pe=s.getRenderTarget(),M=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),te=s.state;te.setBlending(mr),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const Z=g!==Di&&this.type===Di,le=g===Di&&this.type!==Di;for(let de=0,ne=F.length;de<ne;de++){const ce=F[de],B=ce.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const ue=B.getFrameExtents();if(a.multiply(ue),c.copy(B.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(c.x=Math.floor(_/ue.x),a.x=c.x*ue.x,B.mapSize.x=c.x),a.y>_&&(c.y=Math.floor(_/ue.y),a.y=c.y*ue.y,B.mapSize.y=c.y)),B.map===null||Z===!0||le===!0){const k=this.type!==Di?{minFilter:Yn,magFilter:Yn}:{};B.map!==null&&B.map.dispose(),B.map=new Xr(a.x,a.y,k),B.map.texture.name=ce.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const se=B.getViewportCount();for(let k=0;k<se;k++){const re=B.getViewport(k);d.set(c.x*re.x,c.y*re.y,c.x*re.z,c.y*re.w),te.viewport(d),B.updateMatrices(ce,k),r=B.getFrustum(),N(D,G,B.camera,ce,this.type)}B.isPointLightShadow!==!0&&this.type===Di&&I(B,G),B.needsUpdate=!1}g=this.type,v.needsUpdate=!1,s.setRenderTarget(pe,M,R)};function I(F,D){const G=e.update(A);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Xr(a.x,a.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(D,null,G,x,A,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(D,null,G,S,A,null)}function P(F,D,G,pe){let M=null;const R=G.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(R!==void 0)M=R;else if(M=G.isPointLight===!0?p:f,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const te=M.uuid,Z=D.uuid;let le=m[te];le===void 0&&(le={},m[te]=le);let de=le[Z];de===void 0&&(de=M.clone(),le[Z]=de,D.addEventListener("dispose",q)),M=de}if(M.visible=D.visible,M.wireframe=D.wireframe,pe===Di?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:y[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,G.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const te=s.properties.get(M);te.light=G}return M}function N(F,D,G,pe,M){if(F.visible===!1)return;if(F.layers.test(D.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&M===Di)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,F.matrixWorld);const Z=e.update(F),le=F.material;if(Array.isArray(le)){const de=Z.groups;for(let ne=0,ce=de.length;ne<ce;ne++){const B=de[ne],ue=le[B.materialIndex];if(ue&&ue.visible){const se=P(F,ue,pe,M);F.onBeforeShadow(s,F,D,G,Z,se,B),s.renderBufferDirect(G,null,Z,se,F,B),F.onAfterShadow(s,F,D,G,Z,se,B)}}}else if(le.visible){const de=P(F,le,pe,M);F.onBeforeShadow(s,F,D,G,Z,de,null),s.renderBufferDirect(G,null,Z,de,F,null),F.onAfterShadow(s,F,D,G,Z,de,null)}}const te=F.children;for(let Z=0,le=te.length;Z<le;Z++)N(te[Z],D,G,pe,M)}function q(F){F.target.removeEventListener("dispose",q);for(const G in m){const pe=m[G],M=F.target.uuid;M in pe&&(pe[M].dispose(),delete pe[M])}}}const FE={[Ku]:Zu,[Qu]:td,[Ju]:nd,[zs]:ed,[Zu]:Ku,[td]:Qu,[nd]:Ju,[ed]:zs};function kE(s){function e(){let V=!1;const Ne=new Vt;let oe=null;const me=new Vt(0,0,0,0);return{setMask:function(Re){oe!==Re&&!V&&(s.colorMask(Re,Re,Re,Re),oe=Re)},setLocked:function(Re){V=Re},setClear:function(Re,Ie,dt,kt,on){on===!0&&(Re*=kt,Ie*=kt,dt*=kt),Ne.set(Re,Ie,dt,kt),me.equals(Ne)===!1&&(s.clearColor(Re,Ie,dt,kt),me.copy(Ne))},reset:function(){V=!1,oe=null,me.set(-1,0,0,0)}}}function n(){let V=!1,Ne=!1,oe=null,me=null,Re=null;return{setReversed:function(Ie){Ne=Ie},setTest:function(Ie){Ie?ge(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(Ie){oe!==Ie&&!V&&(s.depthMask(Ie),oe=Ie)},setFunc:function(Ie){if(Ne&&(Ie=FE[Ie]),me!==Ie){switch(Ie){case Ku:s.depthFunc(s.NEVER);break;case Zu:s.depthFunc(s.ALWAYS);break;case Qu:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case Ju:s.depthFunc(s.EQUAL);break;case ed:s.depthFunc(s.GEQUAL);break;case td:s.depthFunc(s.GREATER);break;case nd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=Ie}},setLocked:function(Ie){V=Ie},setClear:function(Ie){Re!==Ie&&(s.clearDepth(Ie),Re=Ie)},reset:function(){V=!1,oe=null,me=null,Re=null}}}function r(){let V=!1,Ne=null,oe=null,me=null,Re=null,Ie=null,dt=null,kt=null,on=null;return{setTest:function(gt){V||(gt?ge(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(gt){Ne!==gt&&!V&&(s.stencilMask(gt),Ne=gt)},setFunc:function(gt,Zt,On){(oe!==gt||me!==Zt||Re!==On)&&(s.stencilFunc(gt,Zt,On),oe=gt,me=Zt,Re=On)},setOp:function(gt,Zt,On){(Ie!==gt||dt!==Zt||kt!==On)&&(s.stencilOp(gt,Zt,On),Ie=gt,dt=Zt,kt=On)},setLocked:function(gt){V=gt},setClear:function(gt){on!==gt&&(s.clearStencil(gt),on=gt)},reset:function(){V=!1,Ne=null,oe=null,me=null,Re=null,Ie=null,dt=null,kt=null,on=null}}}const a=new e,c=new n,d=new r,f=new WeakMap,p=new WeakMap;let m={},_={},y=new WeakMap,x=[],S=null,w=!1,A=null,v=null,g=null,I=null,P=null,N=null,q=null,F=new Ct(0,0,0),D=0,G=!1,pe=null,M=null,R=null,te=null,Z=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let de=!1,ne=0;const ce=s.getParameter(s.VERSION);ce.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ce)[1]),de=ne>=1):ce.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),de=ne>=2);let B=null,ue={};const se=s.getParameter(s.SCISSOR_BOX),k=s.getParameter(s.VIEWPORT),re=new Vt().fromArray(se),Le=new Vt().fromArray(k);function W(V,Ne,oe,me){const Re=new Uint8Array(4),Ie=s.createTexture();s.bindTexture(V,Ie),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<oe;dt++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,Re):s.texImage2D(Ne+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Re);return Ie}const ae={};ae[s.TEXTURE_2D]=W(s.TEXTURE_2D,s.TEXTURE_2D,1),ae[s.TEXTURE_CUBE_MAP]=W(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[s.TEXTURE_2D_ARRAY]=W(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ae[s.TEXTURE_3D]=W(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ge(s.DEPTH_TEST),c.setFunc(zs),lt(!1),ht(wp),ge(s.CULL_FACE),z(mr);function ge(V){m[V]!==!0&&(s.enable(V),m[V]=!0)}function xe(V){m[V]!==!1&&(s.disable(V),m[V]=!1)}function Pe(V,Ne){return _[V]!==Ne?(s.bindFramebuffer(V,Ne),_[V]=Ne,V===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ne),V===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ae(V,Ne){let oe=x,me=!1;if(V){oe=y.get(Ne),oe===void 0&&(oe=[],y.set(Ne,oe));const Re=V.textures;if(oe.length!==Re.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let Ie=0,dt=Re.length;Ie<dt;Ie++)oe[Ie]=s.COLOR_ATTACHMENT0+Ie;oe.length=Re.length,me=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,me=!0);me&&s.drawBuffers(oe)}function Ye(V){return S!==V?(s.useProgram(V),S=V,!0):!1}const ft={[Br]:s.FUNC_ADD,[Z0]:s.FUNC_SUBTRACT,[Q0]:s.FUNC_REVERSE_SUBTRACT};ft[J0]=s.MIN,ft[ev]=s.MAX;const ct={[tv]:s.ZERO,[nv]:s.ONE,[iv]:s.SRC_COLOR,[qu]:s.SRC_ALPHA,[cv]:s.SRC_ALPHA_SATURATE,[av]:s.DST_COLOR,[sv]:s.DST_ALPHA,[rv]:s.ONE_MINUS_SRC_COLOR,[$u]:s.ONE_MINUS_SRC_ALPHA,[lv]:s.ONE_MINUS_DST_COLOR,[ov]:s.ONE_MINUS_DST_ALPHA,[uv]:s.CONSTANT_COLOR,[dv]:s.ONE_MINUS_CONSTANT_COLOR,[fv]:s.CONSTANT_ALPHA,[hv]:s.ONE_MINUS_CONSTANT_ALPHA};function z(V,Ne,oe,me,Re,Ie,dt,kt,on,gt){if(V===mr){w===!0&&(xe(s.BLEND),w=!1);return}if(w===!1&&(ge(s.BLEND),w=!0),V!==K0){if(V!==A||gt!==G){if((v!==Br||P!==Br)&&(s.blendEquation(s.FUNC_ADD),v=Br,P=Br),gt)switch(V){case Fs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tp:s.blendFunc(s.ONE,s.ONE);break;case Ap:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ap:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}g=null,I=null,N=null,q=null,F.set(0,0,0),D=0,A=V,G=gt}return}Re=Re||Ne,Ie=Ie||oe,dt=dt||me,(Ne!==v||Re!==P)&&(s.blendEquationSeparate(ft[Ne],ft[Re]),v=Ne,P=Re),(oe!==g||me!==I||Ie!==N||dt!==q)&&(s.blendFuncSeparate(ct[oe],ct[me],ct[Ie],ct[dt]),g=oe,I=me,N=Ie,q=dt),(kt.equals(F)===!1||on!==D)&&(s.blendColor(kt.r,kt.g,kt.b,on),F.copy(kt),D=on),A=V,G=!1}function sn(V,Ne){V.side===Ii?xe(s.CULL_FACE):ge(s.CULL_FACE);let oe=V.side===Cn;Ne&&(oe=!oe),lt(oe),V.blending===Fs&&V.transparent===!1?z(mr):z(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),a.setMask(V.colorWrite);const me=V.stencilWrite;d.setTest(me),me&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Tt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ge(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(V){pe!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),pe=V)}function ht(V){V!==Y0?(ge(s.CULL_FACE),V!==M&&(V===wp?s.cullFace(s.BACK):V===q0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),M=V}function Ze(V){V!==R&&(de&&s.lineWidth(V),R=V)}function Tt(V,Ne,oe){V?(ge(s.POLYGON_OFFSET_FILL),(te!==Ne||Z!==oe)&&(s.polygonOffset(Ne,oe),te=Ne,Z=oe)):xe(s.POLYGON_OFFSET_FILL)}function Je(V){V?ge(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function L(V){V===void 0&&(V=s.TEXTURE0+le-1),B!==V&&(s.activeTexture(V),B=V)}function T(V,Ne,oe){oe===void 0&&(B===null?oe=s.TEXTURE0+le-1:oe=B);let me=ue[oe];me===void 0&&(me={type:void 0,texture:void 0},ue[oe]=me),(me.type!==V||me.texture!==Ne)&&(B!==oe&&(s.activeTexture(oe),B=oe),s.bindTexture(V,Ne||ae[V]),me.type=V,me.texture=Ne)}function K(){const V=ue[B];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function he(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xe(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ke(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function tt(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(V){re.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),re.copy(V))}function ze(V){Le.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Le.copy(V))}function ut(V,Ne){let oe=p.get(Ne);oe===void 0&&(oe=new WeakMap,p.set(Ne,oe));let me=oe.get(V);me===void 0&&(me=s.getUniformBlockIndex(Ne,V.name),oe.set(V,me))}function it(V,Ne){const me=p.get(Ne).get(V);f.get(Ne)!==me&&(s.uniformBlockBinding(Ne,me,V.__bindingPointIndex),f.set(Ne,me))}function Et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},B=null,ue={},_={},y=new WeakMap,x=[],S=null,w=!1,A=null,v=null,g=null,I=null,P=null,N=null,q=null,F=new Ct(0,0,0),D=0,G=!1,pe=null,M=null,R=null,te=null,Z=null,re.set(0,0,s.canvas.width,s.canvas.height),Le.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),d.reset()}return{buffers:{color:a,depth:c,stencil:d},enable:ge,disable:xe,bindFramebuffer:Pe,drawBuffers:Ae,useProgram:Ye,setBlending:z,setMaterial:sn,setFlipSided:lt,setCullFace:ht,setLineWidth:Ze,setPolygonOffset:Tt,setScissorTest:Je,activeTexture:L,bindTexture:T,unbindTexture:K,compressedTexImage2D:he,compressedTexImage3D:ye,texImage2D:ke,texImage3D:tt,updateUBOMapping:ut,uniformBlockBinding:it,texStorage2D:pt,texStorage3D:Ee,texSubImage2D:fe,texSubImage3D:Xe,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Fe,scissor:et,viewport:ze,reset:Et}}function vm(s,e,n,r){const a=OE(r);switch(n){case bm:return s*e;case Lm:return s*e;case Nm:return s*e*2;case Dm:return s*e/a.components*a.byteLength;case Bd:return s*e/a.components*a.byteLength;case Im:return s*e*2/a.components*a.byteLength;case Hd:return s*e*2/a.components*a.byteLength;case Pm:return s*e*3/a.components*a.byteLength;case ai:return s*e*4/a.components*a.byteLength;case Vd:return s*e*4/a.components*a.byteLength;case _l:case xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yl:case Sl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ld:case ud:return Math.max(s,16)*Math.max(e,8)/4;case ad:case cd:return Math.max(s,8)*Math.max(e,8)/2;case dd:case fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case hd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case md:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case gd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case _d:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case yd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ed:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Md:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case wd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Td:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ad:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Cd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case El:case Rd:case bd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Um:case Pd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ld:case Nd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function OE(s){switch(s){case ki:case Am:return{byteLength:1,components:1};case ko:case Cm:case zo:return{byteLength:2,components:1};case Od:case zd:return{byteLength:2,components:4};case jr:case kd:case Ui:return{byteLength:4,components:1};case Rm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function zE(s,e,n,r,a,c,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Rt,_=new WeakMap;let y;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(L,T){return S?new OffscreenCanvas(L,T):bl("canvas")}function A(L,T,K){let he=1;const ye=Je(L);if((ye.width>K||ye.height>K)&&(he=K/Math.max(ye.width,ye.height)),he<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(he*ye.width),Xe=Math.floor(he*ye.height);y===void 0&&(y=w(fe,Xe));const Ce=T?w(fe,Xe):y;return Ce.width=fe,Ce.height=Xe,Ce.getContext("2d").drawImage(L,0,0,fe,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+fe+"x"+Xe+")."),Ce}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),L;return L}function v(L){return L.generateMipmaps&&L.minFilter!==Yn&&L.minFilter!==si}function g(L){s.generateMipmap(L)}function I(L,T,K,he,ye=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=T;if(T===s.RED&&(K===s.FLOAT&&(fe=s.R32F),K===s.HALF_FLOAT&&(fe=s.R16F),K===s.UNSIGNED_BYTE&&(fe=s.R8)),T===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.R8UI),K===s.UNSIGNED_SHORT&&(fe=s.R16UI),K===s.UNSIGNED_INT&&(fe=s.R32UI),K===s.BYTE&&(fe=s.R8I),K===s.SHORT&&(fe=s.R16I),K===s.INT&&(fe=s.R32I)),T===s.RG&&(K===s.FLOAT&&(fe=s.RG32F),K===s.HALF_FLOAT&&(fe=s.RG16F),K===s.UNSIGNED_BYTE&&(fe=s.RG8)),T===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RG8UI),K===s.UNSIGNED_SHORT&&(fe=s.RG16UI),K===s.UNSIGNED_INT&&(fe=s.RG32UI),K===s.BYTE&&(fe=s.RG8I),K===s.SHORT&&(fe=s.RG16I),K===s.INT&&(fe=s.RG32I)),T===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),K===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),K===s.UNSIGNED_INT&&(fe=s.RGB32UI),K===s.BYTE&&(fe=s.RGB8I),K===s.SHORT&&(fe=s.RGB16I),K===s.INT&&(fe=s.RGB32I)),T===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),K===s.UNSIGNED_INT&&(fe=s.RGBA32UI),K===s.BYTE&&(fe=s.RGBA8I),K===s.SHORT&&(fe=s.RGBA16I),K===s.INT&&(fe=s.RGBA32I)),T===s.RGB&&K===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),T===s.RGBA){const Xe=ye?Tl:Mt.getTransfer(he);K===s.FLOAT&&(fe=s.RGBA32F),K===s.HALF_FLOAT&&(fe=s.RGBA16F),K===s.UNSIGNED_BYTE&&(fe=Xe===It?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function P(L,T){let K;return L?T===null||T===jr||T===Vs?K=s.DEPTH24_STENCIL8:T===Ui?K=s.DEPTH32F_STENCIL8:T===ko&&(K=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===jr||T===Vs?K=s.DEPTH_COMPONENT24:T===Ui?K=s.DEPTH_COMPONENT32F:T===ko&&(K=s.DEPTH_COMPONENT16),K}function N(L,T){return v(L)===!0||L.isFramebufferTexture&&L.minFilter!==Yn&&L.minFilter!==si?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function q(L){const T=L.target;T.removeEventListener("dispose",q),D(T),T.isVideoTexture&&_.delete(T)}function F(L){const T=L.target;T.removeEventListener("dispose",F),pe(T)}function D(L){const T=r.get(L);if(T.__webglInit===void 0)return;const K=L.source,he=x.get(K);if(he){const ye=he[T.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&G(L),Object.keys(he).length===0&&x.delete(K)}r.remove(L)}function G(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const K=L.source,he=x.get(K);delete he[T.__cacheKey],d.memory.textures--}function pe(L){const T=r.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(T.__webglFramebuffer[he]))for(let ye=0;ye<T.__webglFramebuffer[he].length;ye++)s.deleteFramebuffer(T.__webglFramebuffer[he][ye]);else s.deleteFramebuffer(T.__webglFramebuffer[he]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[he])}else{if(Array.isArray(T.__webglFramebuffer))for(let he=0;he<T.__webglFramebuffer.length;he++)s.deleteFramebuffer(T.__webglFramebuffer[he]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let he=0;he<T.__webglColorRenderbuffer.length;he++)T.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[he]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=L.textures;for(let he=0,ye=K.length;he<ye;he++){const fe=r.get(K[he]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),d.memory.textures--),r.remove(K[he])}r.remove(L)}let M=0;function R(){M=0}function te(){const L=M;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),M+=1,L}function Z(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function le(L,T){const K=r.get(L);if(L.isVideoTexture&&Ze(L),L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){const he=L.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(K,L,T);return}}n.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+T)}function de(L,T){const K=r.get(L);if(L.version>0&&K.__version!==L.version){Le(K,L,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+T)}function ne(L,T){const K=r.get(L);if(L.version>0&&K.__version!==L.version){Le(K,L,T);return}n.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+T)}function ce(L,T){const K=r.get(L);if(L.version>0&&K.__version!==L.version){W(K,L,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+T)}const B={[sd]:s.REPEAT,[Vr]:s.CLAMP_TO_EDGE,[od]:s.MIRRORED_REPEAT},ue={[Yn]:s.NEAREST,[Mv]:s.NEAREST_MIPMAP_NEAREST,[Ka]:s.NEAREST_MIPMAP_LINEAR,[si]:s.LINEAR,[gu]:s.LINEAR_MIPMAP_NEAREST,[Gr]:s.LINEAR_MIPMAP_LINEAR},se={[Rv]:s.NEVER,[Iv]:s.ALWAYS,[bv]:s.LESS,[Fm]:s.LEQUAL,[Pv]:s.EQUAL,[Dv]:s.GEQUAL,[Lv]:s.GREATER,[Nv]:s.NOTEQUAL};function k(L,T){if(T.type===Ui&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===si||T.magFilter===gu||T.magFilter===Ka||T.magFilter===Gr||T.minFilter===si||T.minFilter===gu||T.minFilter===Ka||T.minFilter===Gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,B[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,B[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,B[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ue[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ue[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,se[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Yn||T.minFilter!==Ka&&T.minFilter!==Gr||T.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function re(L,T){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",q));const he=T.source;let ye=x.get(he);ye===void 0&&(ye={},x.set(he,ye));const fe=Z(T);if(fe!==L.__cacheKey){ye[fe]===void 0&&(ye[fe]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,K=!0),ye[fe].usedTimes++;const Xe=ye[L.__cacheKey];Xe!==void 0&&(ye[L.__cacheKey].usedTimes--,Xe.usedTimes===0&&G(T)),L.__cacheKey=fe,L.__webglTexture=ye[fe].texture}return K}function Le(L,T,K){let he=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(he=s.TEXTURE_3D);const ye=re(L,T),fe=T.source;n.bindTexture(he,L.__webglTexture,s.TEXTURE0+K);const Xe=r.get(fe);if(fe.version!==Xe.__version||ye===!0){n.activeTexture(s.TEXTURE0+K);const Ce=Mt.getPrimaries(Mt.workingColorSpace),Fe=T.colorSpace===pr?null:Mt.getPrimaries(T.colorSpace),pt=T.colorSpace===pr||Ce===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Ee=A(T.image,!1,a.maxTextureSize);Ee=Tt(T,Ee);const ke=c.convert(T.format,T.colorSpace),tt=c.convert(T.type);let et=I(T.internalFormat,ke,tt,T.colorSpace,T.isVideoTexture);k(he,T);let ze;const ut=T.mipmaps,it=T.isVideoTexture!==!0,Et=Xe.__version===void 0||ye===!0,V=fe.dataReady,Ne=N(T,Ee);if(T.isDepthTexture)et=P(T.format===Gs,T.type),Et&&(it?n.texStorage2D(s.TEXTURE_2D,1,et,Ee.width,Ee.height):n.texImage2D(s.TEXTURE_2D,0,et,Ee.width,Ee.height,0,ke,tt,null));else if(T.isDataTexture)if(ut.length>0){it&&Et&&n.texStorage2D(s.TEXTURE_2D,Ne,et,ut[0].width,ut[0].height);for(let oe=0,me=ut.length;oe<me;oe++)ze=ut[oe],it?V&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,ze.width,ze.height,ke,tt,ze.data):n.texImage2D(s.TEXTURE_2D,oe,et,ze.width,ze.height,0,ke,tt,ze.data);T.generateMipmaps=!1}else it?(Et&&n.texStorage2D(s.TEXTURE_2D,Ne,et,Ee.width,Ee.height),V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,ke,tt,Ee.data)):n.texImage2D(s.TEXTURE_2D,0,et,Ee.width,Ee.height,0,ke,tt,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){it&&Et&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,et,ut[0].width,ut[0].height,Ee.depth);for(let oe=0,me=ut.length;oe<me;oe++)if(ze=ut[oe],T.format!==ai)if(ke!==null)if(it){if(V)if(T.layerUpdates.size>0){const Re=vm(ze.width,ze.height,T.format,T.type);for(const Ie of T.layerUpdates){const dt=ze.data.subarray(Ie*Re/ze.data.BYTES_PER_ELEMENT,(Ie+1)*Re/ze.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,Ie,ze.width,ze.height,1,ke,dt,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,ze.width,ze.height,Ee.depth,ke,ze.data,0,0)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,et,ze.width,ze.height,Ee.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?V&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,ze.width,ze.height,Ee.depth,ke,tt,ze.data):n.texImage3D(s.TEXTURE_2D_ARRAY,oe,et,ze.width,ze.height,Ee.depth,0,ke,tt,ze.data)}else{it&&Et&&n.texStorage2D(s.TEXTURE_2D,Ne,et,ut[0].width,ut[0].height);for(let oe=0,me=ut.length;oe<me;oe++)ze=ut[oe],T.format!==ai?ke!==null?it?V&&n.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,ze.width,ze.height,ke,ze.data):n.compressedTexImage2D(s.TEXTURE_2D,oe,et,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?V&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,ze.width,ze.height,ke,tt,ze.data):n.texImage2D(s.TEXTURE_2D,oe,et,ze.width,ze.height,0,ke,tt,ze.data)}else if(T.isDataArrayTexture)if(it){if(Et&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,et,Ee.width,Ee.height,Ee.depth),V)if(T.layerUpdates.size>0){const oe=vm(Ee.width,Ee.height,T.format,T.type);for(const me of T.layerUpdates){const Re=Ee.data.subarray(me*oe/Ee.data.BYTES_PER_ELEMENT,(me+1)*oe/Ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,Ee.width,Ee.height,1,ke,tt,Re)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,ke,tt,Ee.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Ee.width,Ee.height,Ee.depth,0,ke,tt,Ee.data);else if(T.isData3DTexture)it?(Et&&n.texStorage3D(s.TEXTURE_3D,Ne,et,Ee.width,Ee.height,Ee.depth),V&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,ke,tt,Ee.data)):n.texImage3D(s.TEXTURE_3D,0,et,Ee.width,Ee.height,Ee.depth,0,ke,tt,Ee.data);else if(T.isFramebufferTexture){if(Et)if(it)n.texStorage2D(s.TEXTURE_2D,Ne,et,Ee.width,Ee.height);else{let oe=Ee.width,me=Ee.height;for(let Re=0;Re<Ne;Re++)n.texImage2D(s.TEXTURE_2D,Re,et,oe,me,0,ke,tt,null),oe>>=1,me>>=1}}else if(ut.length>0){if(it&&Et){const oe=Je(ut[0]);n.texStorage2D(s.TEXTURE_2D,Ne,et,oe.width,oe.height)}for(let oe=0,me=ut.length;oe<me;oe++)ze=ut[oe],it?V&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,ke,tt,ze):n.texImage2D(s.TEXTURE_2D,oe,et,ke,tt,ze);T.generateMipmaps=!1}else if(it){if(Et){const oe=Je(Ee);n.texStorage2D(s.TEXTURE_2D,Ne,et,oe.width,oe.height)}V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,tt,Ee)}else n.texImage2D(s.TEXTURE_2D,0,et,ke,tt,Ee);v(T)&&g(he),Xe.__version=fe.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function W(L,T,K){if(T.image.length!==6)return;const he=re(L,T),ye=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+K);const fe=r.get(ye);if(ye.version!==fe.__version||he===!0){n.activeTexture(s.TEXTURE0+K);const Xe=Mt.getPrimaries(Mt.workingColorSpace),Ce=T.colorSpace===pr?null:Mt.getPrimaries(T.colorSpace),Fe=T.colorSpace===pr||Xe===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const pt=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,ke=[];for(let me=0;me<6;me++)!pt&&!Ee?ke[me]=A(T.image[me],!0,a.maxCubemapSize):ke[me]=Ee?T.image[me].image:T.image[me],ke[me]=Tt(T,ke[me]);const tt=ke[0],et=c.convert(T.format,T.colorSpace),ze=c.convert(T.type),ut=I(T.internalFormat,et,ze,T.colorSpace),it=T.isVideoTexture!==!0,Et=fe.__version===void 0||he===!0,V=ye.dataReady;let Ne=N(T,tt);k(s.TEXTURE_CUBE_MAP,T);let oe;if(pt){it&&Et&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,ut,tt.width,tt.height);for(let me=0;me<6;me++){oe=ke[me].mipmaps;for(let Re=0;Re<oe.length;Re++){const Ie=oe[Re];T.format!==ai?et!==null?it?V&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,0,0,Ie.width,Ie.height,et,Ie.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,ut,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,0,0,Ie.width,Ie.height,et,ze,Ie.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,ut,Ie.width,Ie.height,0,et,ze,Ie.data)}}}else{if(oe=T.mipmaps,it&&Et){oe.length>0&&Ne++;const me=Je(ke[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,ut,me.width,me.height)}for(let me=0;me<6;me++)if(Ee){it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ke[me].width,ke[me].height,et,ze,ke[me].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ut,ke[me].width,ke[me].height,0,et,ze,ke[me].data);for(let Re=0;Re<oe.length;Re++){const dt=oe[Re].image[me].image;it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,0,0,dt.width,dt.height,et,ze,dt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,ut,dt.width,dt.height,0,et,ze,dt.data)}}else{it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,et,ze,ke[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ut,et,ze,ke[me]);for(let Re=0;Re<oe.length;Re++){const Ie=oe[Re];it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,0,0,et,ze,Ie.image[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,ut,et,ze,Ie.image[me])}}}v(T)&&g(s.TEXTURE_CUBE_MAP),fe.__version=ye.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ae(L,T,K,he,ye,fe){const Xe=c.convert(K.format,K.colorSpace),Ce=c.convert(K.type),Fe=I(K.internalFormat,Xe,Ce,K.colorSpace);if(!r.get(T).__hasExternalTextures){const Ee=Math.max(1,T.width>>fe),ke=Math.max(1,T.height>>fe);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?n.texImage3D(ye,fe,Fe,Ee,ke,T.depth,0,Xe,Ce,null):n.texImage2D(ye,fe,Fe,Ee,ke,0,Xe,Ce,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),ht(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ye,r.get(K).__webglTexture,0,lt(T)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,ye,r.get(K).__webglTexture,fe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(L,T,K){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const he=T.depthTexture,ye=he&&he.isDepthTexture?he.type:null,fe=P(T.stencilBuffer,ye),Xe=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=lt(T);ht(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,fe,T.width,T.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,fe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,fe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Xe,s.RENDERBUFFER,L)}else{const he=T.textures;for(let ye=0;ye<he.length;ye++){const fe=he[ye],Xe=c.convert(fe.format,fe.colorSpace),Ce=c.convert(fe.type),Fe=I(fe.internalFormat,Xe,Ce,fe.colorSpace),pt=lt(T);K&&ht(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,Fe,T.width,T.height):ht(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,Fe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xe(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),le(T.depthTexture,0);const he=r.get(T.depthTexture).__webglTexture,ye=lt(T);if(T.depthTexture.format===ks)ht(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0);else if(T.depthTexture.format===Gs)ht(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function Pe(L){const T=r.get(L),K=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const he=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),he){const ye=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,he.removeEventListener("dispose",ye)};he.addEventListener("dispose",ye),T.__depthDisposeCallback=ye}T.__boundDepthTexture=he}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");xe(T.__webglFramebuffer,L)}else if(K){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]===void 0)T.__webglDepthbuffer[he]=s.createRenderbuffer(),ge(T.__webglDepthbuffer[he],L,!1);else{const ye=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,fe)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ge(T.__webglDepthbuffer,L,!1);else{const he=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ye),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,ye)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(L,T,K){const he=r.get(L);T!==void 0&&ae(he.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&Pe(L)}function Ye(L){const T=L.texture,K=r.get(L),he=r.get(T);L.addEventListener("dispose",F);const ye=L.textures,fe=L.isWebGLCubeRenderTarget===!0,Xe=ye.length>1;if(Xe||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=T.version,d.memory.textures++),fe){K.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[Ce]=[];for(let Fe=0;Fe<T.mipmaps.length;Fe++)K.__webglFramebuffer[Ce][Fe]=s.createFramebuffer()}else K.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)K.__webglFramebuffer[Ce]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Xe)for(let Ce=0,Fe=ye.length;Ce<Fe;Ce++){const pt=r.get(ye[Ce]);pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture(),d.memory.textures++)}if(L.samples>0&&ht(L)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ye.length;Ce++){const Fe=ye[Ce];K.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[Ce]);const pt=c.convert(Fe.format,Fe.colorSpace),Ee=c.convert(Fe.type),ke=I(Fe.internalFormat,pt,Ee,Fe.colorSpace,L.isXRRenderTarget===!0),tt=lt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,ke,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,K.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),ge(K.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){n.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),k(s.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)ae(K.__webglFramebuffer[Ce][Fe],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Fe);else ae(K.__webglFramebuffer[Ce],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);v(T)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Xe){for(let Ce=0,Fe=ye.length;Ce<Fe;Ce++){const pt=ye[Ce],Ee=r.get(pt);n.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),k(s.TEXTURE_2D,pt),ae(K.__webglFramebuffer,L,pt,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),v(pt)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ce,he.__webglTexture),k(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)ae(K.__webglFramebuffer[Fe],L,T,s.COLOR_ATTACHMENT0,Ce,Fe);else ae(K.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,Ce,0);v(T)&&g(Ce),n.unbindTexture()}L.depthBuffer&&Pe(L)}function ft(L){const T=L.textures;for(let K=0,he=T.length;K<he;K++){const ye=T[K];if(v(ye)){const fe=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Xe=r.get(ye).__webglTexture;n.bindTexture(fe,Xe),g(fe),n.unbindTexture()}}}const ct=[],z=[];function sn(L){if(L.samples>0){if(ht(L)===!1){const T=L.textures,K=L.width,he=L.height;let ye=s.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Xe=r.get(L),Ce=T.length>1;if(Ce)for(let Fe=0;Fe<T.length;Fe++)n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Fe=0;Fe<T.length;Fe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Fe]);const pt=r.get(T[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pt,0)}s.blitFramebuffer(0,0,K,he,0,0,K,he,ye,s.NEAREST),p===!0&&(ct.length=0,z.length=0,ct.push(s.COLOR_ATTACHMENT0+Fe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ct.push(fe),z.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ct))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Fe=0;Fe<T.length;Fe++){n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Fe]);const pt=r.get(T[Fe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,pt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function lt(L){return Math.min(a.maxSamples,L.samples)}function ht(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ze(L){const T=d.render.frame;_.get(L)!==T&&(_.set(L,T),L.update())}function Tt(L,T){const K=L.colorSpace,he=L.format,ye=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==_r&&K!==pr&&(Mt.getTransfer(K)===It?(he!==ai||ye!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),T}function Je(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=te,this.resetTextureUnits=R,this.setTexture2D=le,this.setTexture2DArray=de,this.setTexture3D=ne,this.setTextureCube=ce,this.rebindTextures=Ae,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ht}function BE(s,e){function n(r,a=pr){let c;const d=Mt.getTransfer(a);if(r===ki)return s.UNSIGNED_BYTE;if(r===Od)return s.UNSIGNED_SHORT_4_4_4_4;if(r===zd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Rm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Am)return s.BYTE;if(r===Cm)return s.SHORT;if(r===ko)return s.UNSIGNED_SHORT;if(r===kd)return s.INT;if(r===jr)return s.UNSIGNED_INT;if(r===Ui)return s.FLOAT;if(r===zo)return s.HALF_FLOAT;if(r===bm)return s.ALPHA;if(r===Pm)return s.RGB;if(r===ai)return s.RGBA;if(r===Lm)return s.LUMINANCE;if(r===Nm)return s.LUMINANCE_ALPHA;if(r===ks)return s.DEPTH_COMPONENT;if(r===Gs)return s.DEPTH_STENCIL;if(r===Dm)return s.RED;if(r===Bd)return s.RED_INTEGER;if(r===Im)return s.RG;if(r===Hd)return s.RG_INTEGER;if(r===Vd)return s.RGBA_INTEGER;if(r===_l||r===xl||r===yl||r===Sl)if(d===It)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===_l)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===yl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Sl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===_l)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===yl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Sl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ad||r===ld||r===cd||r===ud)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===ad)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ld)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===cd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ud)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===dd||r===fd||r===hd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===dd||r===fd)return d===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===hd)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===pd||r===md||r===gd||r===vd||r===_d||r===xd||r===yd||r===Sd||r===Ed||r===Md||r===wd||r===Td||r===Ad||r===Cd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===pd)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===md)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gd)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vd)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_d)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xd)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yd)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sd)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ed)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Md)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wd)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Td)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ad)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cd)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===El||r===Rd||r===bd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===El)return d===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===bd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Um||r===Pd||r===Ld||r===Nd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===El)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Pd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ld)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class HE extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vl extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VE={type:"move"};class Xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,d=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const A of e.hand.values()){const v=n.getJointPose(A,r),g=this._getHandJoint(m,A);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const _=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=_.position.distanceTo(y.position),S=.02,w=.005;m.inputState.pinching&&x>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(VE)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new vl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const GE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WE=`
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

}`;class jE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Rn,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new zi({vertexShader:GE,fragmentShader:WE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new mi(new Wo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XE extends js{constructor(e,n){super();const r=this;let a=null,c=1,d=null,f="local-floor",p=1,m=null,_=null,y=null,x=null,S=null,w=null;const A=new jE,v=n.getContextAttributes();let g=null,I=null;const P=[],N=[],q=new Rt;let F=null;const D=new ri;D.layers.enable(1),D.viewport=new Vt;const G=new ri;G.layers.enable(2),G.viewport=new Vt;const pe=[D,G],M=new HE;M.layers.enable(1),M.layers.enable(2);let R=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ae=P[W];return ae===void 0&&(ae=new Xu,P[W]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(W){let ae=P[W];return ae===void 0&&(ae=new Xu,P[W]=ae),ae.getGripSpace()},this.getHand=function(W){let ae=P[W];return ae===void 0&&(ae=new Xu,P[W]=ae),ae.getHandSpace()};function Z(W){const ae=N.indexOf(W.inputSource);if(ae===-1)return;const ge=P[ae];ge!==void 0&&(ge.update(W.inputSource,W.frame,m||d),ge.dispatchEvent({type:W.type,data:W.inputSource}))}function le(){a.removeEventListener("select",Z),a.removeEventListener("selectstart",Z),a.removeEventListener("selectend",Z),a.removeEventListener("squeeze",Z),a.removeEventListener("squeezestart",Z),a.removeEventListener("squeezeend",Z),a.removeEventListener("end",le),a.removeEventListener("inputsourceschange",de);for(let W=0;W<P.length;W++){const ae=N[W];ae!==null&&(N[W]=null,P[W].disconnect(ae))}R=null,te=null,A.reset(),e.setRenderTarget(g),S=null,x=null,y=null,a=null,I=null,Le.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(q.width,q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){c=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){f=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(W){m=W},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return y},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(W){if(a=W,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",Z),a.addEventListener("selectstart",Z),a.addEventListener("selectend",Z),a.addEventListener("squeeze",Z),a.addEventListener("squeezestart",Z),a.addEventListener("squeezeend",Z),a.addEventListener("end",le),a.addEventListener("inputsourceschange",de),v.xrCompatible!==!0&&await n.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(q),a.renderState.layers===void 0){const ae={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(a,n,ae),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new Xr(S.framebufferWidth,S.framebufferHeight,{format:ai,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ae=null,ge=null,xe=null;v.depth&&(xe=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=v.stencil?Gs:ks,ge=v.stencil?Vs:jr);const Pe={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:c};y=new XRWebGLBinding(a,n),x=y.createProjectionLayer(Pe),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new Xr(x.textureWidth,x.textureHeight,{format:ai,type:ki,depthTexture:new Zm(x.textureWidth,x.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await a.requestReferenceSpace(f),Le.setContext(a),Le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function de(W){for(let ae=0;ae<W.removed.length;ae++){const ge=W.removed[ae],xe=N.indexOf(ge);xe>=0&&(N[xe]=null,P[xe].disconnect(ge))}for(let ae=0;ae<W.added.length;ae++){const ge=W.added[ae];let xe=N.indexOf(ge);if(xe===-1){for(let Ae=0;Ae<P.length;Ae++)if(Ae>=N.length){N.push(ge),xe=Ae;break}else if(N[Ae]===null){N[Ae]=ge,xe=Ae;break}if(xe===-1)break}const Pe=P[xe];Pe&&Pe.connect(ge)}}const ne=new ie,ce=new ie;function B(W,ae,ge){ne.setFromMatrixPosition(ae.matrixWorld),ce.setFromMatrixPosition(ge.matrixWorld);const xe=ne.distanceTo(ce),Pe=ae.projectionMatrix.elements,Ae=ge.projectionMatrix.elements,Ye=Pe[14]/(Pe[10]-1),ft=Pe[14]/(Pe[10]+1),ct=(Pe[9]+1)/Pe[5],z=(Pe[9]-1)/Pe[5],sn=(Pe[8]-1)/Pe[0],lt=(Ae[8]+1)/Ae[0],ht=Ye*sn,Ze=Ye*lt,Tt=xe/(-sn+lt),Je=Tt*-sn;if(ae.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Je),W.translateZ(Tt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Pe[10]===-1)W.projectionMatrix.copy(ae.projectionMatrix),W.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const L=Ye+Tt,T=ft+Tt,K=ht-Je,he=Ze+(xe-Je),ye=ct*ft/T*L,fe=z*ft/T*L;W.projectionMatrix.makePerspective(K,he,ye,fe,L,T),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ue(W,ae){ae===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ae.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(a===null)return;let ae=W.near,ge=W.far;A.texture!==null&&(A.depthNear>0&&(ae=A.depthNear),A.depthFar>0&&(ge=A.depthFar)),M.near=G.near=D.near=ae,M.far=G.far=D.far=ge,(R!==M.near||te!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,te=M.far);const xe=W.parent,Pe=M.cameras;ue(M,xe);for(let Ae=0;Ae<Pe.length;Ae++)ue(Pe[Ae],xe);Pe.length===2?B(M,D,G):M.projectionMatrix.copy(D.projectionMatrix),se(W,M,xe)};function se(W,ae,ge){ge===null?W.matrix.copy(ae.matrixWorld):(W.matrix.copy(ge.matrixWorld),W.matrix.invert(),W.matrix.multiply(ae.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ae.projectionMatrix),W.projectionMatrixInverse.copy(ae.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Dd*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(W){p=W,x!==null&&(x.fixedFoveation=W),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=W)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(M)};let k=null;function re(W,ae){if(_=ae.getViewerPose(m||d),w=ae,_!==null){const ge=_.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let xe=!1;ge.length!==M.cameras.length&&(M.cameras.length=0,xe=!0);for(let Ae=0;Ae<ge.length;Ae++){const Ye=ge[Ae];let ft=null;if(S!==null)ft=S.getViewport(Ye);else{const z=y.getViewSubImage(x,Ye);ft=z.viewport,Ae===0&&(e.setRenderTargetTextures(I,z.colorTexture,x.ignoreDepthValues?void 0:z.depthStencilTexture),e.setRenderTarget(I))}let ct=pe[Ae];ct===void 0&&(ct=new ri,ct.layers.enable(Ae),ct.viewport=new Vt,pe[Ae]=ct),ct.matrix.fromArray(Ye.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(Ye.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(ft.x,ft.y,ft.width,ft.height),Ae===0&&(M.matrix.copy(ct.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),xe===!0&&M.cameras.push(ct)}const Pe=a.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Ae=y.getDepthInformation(ge[0]);Ae&&Ae.isValid&&Ae.texture&&A.init(e,Ae,a.renderState)}}for(let ge=0;ge<P.length;ge++){const xe=N[ge],Pe=P[ge];xe!==null&&Pe!==void 0&&Pe.update(xe,ae,m||d)}k&&k(W,ae),ae.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ae}),w=null}const Le=new $m;Le.setAnimationLoop(re),this.setAnimationLoop=function(W){k=W},this.dispose=function(){}}}const kr=new Oi,YE=new jt;function qE(s,e){function n(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function r(v,g){g.color.getRGB(v.fogColor.value,jm(s)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function a(v,g,I,P,N){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(v,g):g.isMeshToonMaterial?(c(v,g),y(v,g)):g.isMeshPhongMaterial?(c(v,g),_(v,g)):g.isMeshStandardMaterial?(c(v,g),x(v,g),g.isMeshPhysicalMaterial&&S(v,g,N)):g.isMeshMatcapMaterial?(c(v,g),w(v,g)):g.isMeshDepthMaterial?c(v,g):g.isMeshDistanceMaterial?(c(v,g),A(v,g)):g.isMeshNormalMaterial?c(v,g):g.isLineBasicMaterial?(d(v,g),g.isLineDashedMaterial&&f(v,g)):g.isPointsMaterial?p(v,g,I,P):g.isSpriteMaterial?m(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,n(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,n(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===Cn&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,n(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===Cn&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,n(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,n(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const I=e.get(g),P=I.envMap,N=I.envMapRotation;P&&(v.envMap.value=P,kr.copy(N),kr.x*=-1,kr.y*=-1,kr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),v.envMapRotation.value.setFromMatrix4(YE.makeRotationFromEuler(kr)),v.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,v.aoMapTransform))}function d(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,n(g.map,v.mapTransform))}function f(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function p(v,g,I,P){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*I,v.scale.value=P*.5,g.map&&(v.map.value=g.map,n(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function m(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,n(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function _(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function y(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function x(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function S(v,g,I){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Cn&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=I.texture,v.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,v.specularIntensityMapTransform))}function w(v,g){g.matcap&&(v.matcap.value=g.matcap)}function A(v,g){const I=e.get(g).light;v.referencePosition.value.setFromMatrixPosition(I.matrixWorld),v.nearDistance.value=I.shadow.camera.near,v.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function $E(s,e,n,r){let a={},c={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,P){const N=P.program;r.uniformBlockBinding(I,N)}function m(I,P){let N=a[I.id];N===void 0&&(w(I),N=_(I),a[I.id]=N,I.addEventListener("dispose",v));const q=P.program;r.updateUBOMapping(I,q);const F=e.render.frame;c[I.id]!==F&&(x(I),c[I.id]=F)}function _(I){const P=y();I.__bindingPointIndex=P;const N=s.createBuffer(),q=I.__size,F=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,q,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,N),N}function y(){for(let I=0;I<f;I++)if(d.indexOf(I)===-1)return d.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const P=a[I.id],N=I.uniforms,q=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let F=0,D=N.length;F<D;F++){const G=Array.isArray(N[F])?N[F]:[N[F]];for(let pe=0,M=G.length;pe<M;pe++){const R=G[pe];if(S(R,F,pe,q)===!0){const te=R.__offset,Z=Array.isArray(R.value)?R.value:[R.value];let le=0;for(let de=0;de<Z.length;de++){const ne=Z[de],ce=A(ne);typeof ne=="number"||typeof ne=="boolean"?(R.__data[0]=ne,s.bufferSubData(s.UNIFORM_BUFFER,te+le,R.__data)):ne.isMatrix3?(R.__data[0]=ne.elements[0],R.__data[1]=ne.elements[1],R.__data[2]=ne.elements[2],R.__data[3]=0,R.__data[4]=ne.elements[3],R.__data[5]=ne.elements[4],R.__data[6]=ne.elements[5],R.__data[7]=0,R.__data[8]=ne.elements[6],R.__data[9]=ne.elements[7],R.__data[10]=ne.elements[8],R.__data[11]=0):(ne.toArray(R.__data,le),le+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,te,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,P,N,q){const F=I.value,D=P+"_"+N;if(q[D]===void 0)return typeof F=="number"||typeof F=="boolean"?q[D]=F:q[D]=F.clone(),!0;{const G=q[D];if(typeof F=="number"||typeof F=="boolean"){if(G!==F)return q[D]=F,!0}else if(G.equals(F)===!1)return G.copy(F),!0}return!1}function w(I){const P=I.uniforms;let N=0;const q=16;for(let D=0,G=P.length;D<G;D++){const pe=Array.isArray(P[D])?P[D]:[P[D]];for(let M=0,R=pe.length;M<R;M++){const te=pe[M],Z=Array.isArray(te.value)?te.value:[te.value];for(let le=0,de=Z.length;le<de;le++){const ne=Z[le],ce=A(ne),B=N%q,ue=B%ce.boundary,se=B+ue;N+=ue,se!==0&&q-se<ce.storage&&(N+=q-se),te.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=N,N+=ce.storage}}}const F=N%q;return F>0&&(N+=q-F),I.__size=N,I.__cache={},this}function A(I){const P={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(P.boundary=4,P.storage=4):I.isVector2?(P.boundary=8,P.storage=8):I.isVector3||I.isColor?(P.boundary=16,P.storage=12):I.isVector4?(P.boundary=16,P.storage=16):I.isMatrix3?(P.boundary=48,P.storage=48):I.isMatrix4?(P.boundary=64,P.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),P}function v(I){const P=I.target;P.removeEventListener("dispose",v);const N=d.indexOf(P.__bindingPointIndex);d.splice(N,1),s.deleteBuffer(a[P.id]),delete a[P.id],delete c[P.id]}function g(){for(const I in a)s.deleteBuffer(a[I]);d=[],a={},c={}}return{bind:p,update:m,dispose:g}}class KE{constructor(e={}){const{canvas:n=Fv(),context:r=null,depth:a=!0,stencil:c=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=d;const S=new Uint32Array(4),w=new Int32Array(4);let A=null,v=null;const g=[],I=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hi,this.toneMapping=gr,this.toneMappingExposure=1;const P=this;let N=!1,q=0,F=0,D=null,G=-1,pe=null;const M=new Vt,R=new Vt;let te=null;const Z=new Ct(0);let le=0,de=n.width,ne=n.height,ce=1,B=null,ue=null;const se=new Vt(0,0,de,ne),k=new Vt(0,0,de,ne);let re=!1;const Le=new qm;let W=!1,ae=!1;const ge=new jt,xe=new jt,Pe=new ie,Ae=new Vt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function ct(){return D===null?ce:1}let z=r;function sn(C,j){return n.getContext(C,j)}try{const C={alpha:!0,depth:a,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Fd}`),n.addEventListener("webglcontextlost",me,!1),n.addEventListener("webglcontextrestored",Re,!1),n.addEventListener("webglcontextcreationerror",Ie,!1),z===null){const j="webgl2";if(z=sn(j,C),z===null)throw sn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let lt,ht,Ze,Tt,Je,L,T,K,he,ye,fe,Xe,Ce,Fe,pt,Ee,ke,tt,et,ze,ut,it,Et,V;function Ne(){lt=new tS(z),lt.init(),it=new BE(z,lt),ht=new $y(z,lt,e,it),Ze=new kE(z),ht.reverseDepthBuffer&&Ze.buffers.depth.setReversed(!0),Tt=new rS(z),Je=new EE,L=new zE(z,lt,Ze,Je,ht,it,Tt),T=new Zy(P),K=new eS(P),he=new d_(z),Et=new Yy(z,he),ye=new nS(z,he,Tt,Et),fe=new oS(z,ye,he,Tt),et=new sS(z,ht,L),Ee=new Ky(Je),Xe=new SE(P,T,K,lt,ht,Et,Ee),Ce=new qE(P,Je),Fe=new wE,pt=new PE(lt),tt=new Xy(P,T,K,Ze,fe,x,p),ke=new UE(P,fe,ht),V=new $E(z,Tt,ht,Ze),ze=new qy(z,lt,Tt),ut=new iS(z,lt,Tt),Tt.programs=Xe.programs,P.capabilities=ht,P.extensions=lt,P.properties=Je,P.renderLists=Fe,P.shadowMap=ke,P.state=Ze,P.info=Tt}Ne();const oe=new XE(P,z);this.xr=oe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const C=lt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=lt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(C){C!==void 0&&(ce=C,this.setSize(de,ne,!1))},this.getSize=function(C){return C.set(de,ne)},this.setSize=function(C,j,Q=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=C,ne=j,n.width=Math.floor(C*ce),n.height=Math.floor(j*ce),Q===!0&&(n.style.width=C+"px",n.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(de*ce,ne*ce).floor()},this.setDrawingBufferSize=function(C,j,Q){de=C,ne=j,ce=Q,n.width=Math.floor(C*Q),n.height=Math.floor(j*Q),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(se)},this.setViewport=function(C,j,Q,J){C.isVector4?se.set(C.x,C.y,C.z,C.w):se.set(C,j,Q,J),Ze.viewport(M.copy(se).multiplyScalar(ce).round())},this.getScissor=function(C){return C.copy(k)},this.setScissor=function(C,j,Q,J){C.isVector4?k.set(C.x,C.y,C.z,C.w):k.set(C,j,Q,J),Ze.scissor(R.copy(k).multiplyScalar(ce).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(C){Ze.setScissorTest(re=C)},this.setOpaqueSort=function(C){B=C},this.setTransparentSort=function(C){ue=C},this.getClearColor=function(C){return C.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(C=!0,j=!0,Q=!0){let J=0;if(C){let X=!1;if(D!==null){const we=D.texture.format;X=we===Vd||we===Hd||we===Bd}if(X){const we=D.texture.type,De=we===ki||we===jr||we===ko||we===Vs||we===Od||we===zd,Te=tt.getClearColor(),Ge=tt.getClearAlpha(),Ke=Te.r,Qe=Te.g,We=Te.b;De?(S[0]=Ke,S[1]=Qe,S[2]=We,S[3]=Ge,z.clearBufferuiv(z.COLOR,0,S)):(w[0]=Ke,w[1]=Qe,w[2]=We,w[3]=Ge,z.clearBufferiv(z.COLOR,0,w))}else J|=z.COLOR_BUFFER_BIT}j&&(J|=z.DEPTH_BUFFER_BIT,z.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Q&&(J|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",me,!1),n.removeEventListener("webglcontextrestored",Re,!1),n.removeEventListener("webglcontextcreationerror",Ie,!1),Fe.dispose(),pt.dispose(),Je.dispose(),T.dispose(),K.dispose(),fe.dispose(),Et.dispose(),V.dispose(),Xe.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Bi),oe.removeEventListener("sessionend",qr),bn.stop()};function me(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const C=Tt.autoReset,j=ke.enabled,Q=ke.autoUpdate,J=ke.needsUpdate,X=ke.type;Ne(),Tt.autoReset=C,ke.enabled=j,ke.autoUpdate=Q,ke.needsUpdate=J,ke.type=X}function Ie(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function dt(C){const j=C.target;j.removeEventListener("dispose",dt),kt(j)}function kt(C){on(C),Je.remove(C)}function on(C){const j=Je.get(C).programs;j!==void 0&&(j.forEach(function(Q){Xe.releaseProgram(Q)}),C.isShaderMaterial&&Xe.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,Q,J,X,we){j===null&&(j=Ye);const De=X.isMesh&&X.matrixWorld.determinant()<0,Te=_i(C,j,Q,J,X);Ze.setMaterial(J,De);let Ge=Q.index,Ke=1;if(J.wireframe===!0){if(Ge=ye.getWireframeAttribute(Q),Ge===void 0)return;Ke=2}const Qe=Q.drawRange,We=Q.attributes.position;let St=Qe.start*Ke,At=(Qe.start+Qe.count)*Ke;we!==null&&(St=Math.max(St,we.start*Ke),At=Math.min(At,(we.start+we.count)*Ke)),Ge!==null?(St=Math.max(St,0),At=Math.min(At,Ge.count)):We!=null&&(St=Math.max(St,0),At=Math.min(At,We.count));const bt=At-St;if(bt<0||bt===1/0)return;Et.setup(X,J,Te,Q,Ge);let Ut,_t=ze;if(Ge!==null&&(Ut=he.get(Ge),_t=ut,_t.setIndex(Ut)),X.isMesh)J.wireframe===!0?(Ze.setLineWidth(J.wireframeLinewidth*ct()),_t.setMode(z.LINES)):_t.setMode(z.TRIANGLES);else if(X.isLine){let Oe=J.linewidth;Oe===void 0&&(Oe=1),Ze.setLineWidth(Oe*ct()),X.isLineSegments?_t.setMode(z.LINES):X.isLineLoop?_t.setMode(z.LINE_LOOP):_t.setMode(z.LINE_STRIP)}else X.isPoints?_t.setMode(z.POINTS):X.isSprite&&_t.setMode(z.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)_t.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))_t.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Oe=X._multiDrawStarts,Xt=X._multiDrawCounts,xt=X._multiDrawCount,Pn=Ge?he.get(Ge).bytesPerElement:1,qn=Je.get(J).currentProgram.getUniforms();for(let Qt=0;Qt<xt;Qt++)qn.setValue(z,"_gl_DrawID",Qt),_t.render(Oe[Qt]/Pn,Xt[Qt])}else if(X.isInstancedMesh)_t.renderInstances(St,bt,X.count);else if(Q.isInstancedBufferGeometry){const Oe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Xt=Math.min(Q.instanceCount,Oe);_t.renderInstances(St,bt,Xt)}else _t.render(St,bt)};function gt(C,j,Q){C.transparent===!0&&C.side===Ii&&C.forceSinglePass===!1?(C.side=Cn,C.needsUpdate=!0,Kr(C,j,Q),C.side=vr,C.needsUpdate=!0,Kr(C,j,Q),C.side=Ii):Kr(C,j,Q)}this.compile=function(C,j,Q=null){Q===null&&(Q=C),v=pt.get(Q),v.init(j),I.push(v),Q.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(v.pushLight(X),X.castShadow&&v.pushShadow(X))}),C!==Q&&C.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(v.pushLight(X),X.castShadow&&v.pushShadow(X))}),v.setupLights();const J=new Set;return C.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const we=X.material;if(we)if(Array.isArray(we))for(let De=0;De<we.length;De++){const Te=we[De];gt(Te,Q,X),J.add(Te)}else gt(we,Q,X),J.add(we)}),I.pop(),v=null,J},this.compileAsync=function(C,j,Q=null){const J=this.compile(C,j,Q);return new Promise(X=>{function we(){if(J.forEach(function(De){Je.get(De).currentProgram.isReady()&&J.delete(De)}),J.size===0){X(C);return}setTimeout(we,10)}lt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Zt=null;function On(C){Zt&&Zt(C)}function Bi(){bn.stop()}function qr(){bn.start()}const bn=new $m;bn.setAnimationLoop(On),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(C){Zt=C,oe.setAnimationLoop(C),C===null?bn.stop():bn.start()},oe.addEventListener("sessionstart",Bi),oe.addEventListener("sessionend",qr),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(j),j=oe.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,j,D),v=pt.get(C,I.length),v.init(j),I.push(v),xe.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Le.setFromProjectionMatrix(xe),ae=this.localClippingEnabled,W=Ee.init(this.clippingPlanes,ae),A=Fe.get(C,g.length),A.init(),g.push(A),oe.enabled===!0&&oe.isPresenting===!0){const we=P.xr.getDepthSensingMesh();we!==null&&Ys(we,j,-1/0,P.sortObjects)}Ys(C,j,0,P.sortObjects),A.finish(),P.sortObjects===!0&&A.sort(B,ue),ft=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,ft&&tt.addToRenderList(A,C),this.info.render.frame++,W===!0&&Ee.beginShadows();const Q=v.state.shadowsArray;ke.render(Q,C,j),W===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=A.opaque,X=A.transmissive;if(v.setupLights(),j.isArrayCamera){const we=j.cameras;if(X.length>0)for(let De=0,Te=we.length;De<Te;De++){const Ge=we[De];xr(J,X,C,Ge)}ft&&tt.render(C);for(let De=0,Te=we.length;De<Te;De++){const Ge=we[De];Hi(A,C,Ge,Ge.viewport)}}else X.length>0&&xr(J,X,C,j),ft&&tt.render(C),Hi(A,C,j);D!==null&&(L.updateMultisampleRenderTarget(D),L.updateRenderTargetMipmap(D)),C.isScene===!0&&C.onAfterRender(P,C,j),Et.resetDefaultState(),G=-1,pe=null,I.pop(),I.length>0?(v=I[I.length-1],W===!0&&Ee.setGlobalState(P.clippingPlanes,v.state.camera)):v=null,g.pop(),g.length>0?A=g[g.length-1]:A=null};function Ys(C,j,Q,J){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Le.intersectsSprite(C)){J&&Ae.setFromMatrixPosition(C.matrixWorld).applyMatrix4(xe);const De=fe.update(C),Te=C.material;Te.visible&&A.push(C,De,Te,Q,Ae.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Le.intersectsObject(C))){const De=fe.update(C),Te=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ae.copy(C.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ae.copy(De.boundingSphere.center)),Ae.applyMatrix4(C.matrixWorld).applyMatrix4(xe)),Array.isArray(Te)){const Ge=De.groups;for(let Ke=0,Qe=Ge.length;Ke<Qe;Ke++){const We=Ge[Ke],St=Te[We.materialIndex];St&&St.visible&&A.push(C,De,St,Q,Ae.z,We)}}else Te.visible&&A.push(C,De,Te,Q,Ae.z,null)}}const we=C.children;for(let De=0,Te=we.length;De<Te;De++)Ys(we[De],j,Q,J)}function Hi(C,j,Q,J){const X=C.opaque,we=C.transmissive,De=C.transparent;v.setupLightsView(Q),W===!0&&Ee.setGlobalState(P.clippingPlanes,Q),J&&Ze.viewport(M.copy(J)),X.length>0&&vi(X,j,Q),we.length>0&&vi(we,j,Q),De.length>0&&vi(De,j,Q),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function xr(C,j,Q,J){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[J.id]===void 0&&(v.state.transmissionRenderTarget[J.id]=new Xr(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?zo:ki,minFilter:Gr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const we=v.state.transmissionRenderTarget[J.id],De=J.viewport||M;we.setSize(De.z,De.w);const Te=P.getRenderTarget();P.setRenderTarget(we),P.getClearColor(Z),le=P.getClearAlpha(),le<1&&P.setClearColor(16777215,.5),P.clear(),ft&&tt.render(Q);const Ge=P.toneMapping;P.toneMapping=gr;const Ke=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),v.setupLightsView(J),W===!0&&Ee.setGlobalState(P.clippingPlanes,J),vi(C,Q,J),L.updateMultisampleRenderTarget(we),L.updateRenderTargetMipmap(we),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let We=0,St=j.length;We<St;We++){const At=j[We],bt=At.object,Ut=At.geometry,_t=At.material,Oe=At.group;if(_t.side===Ii&&bt.layers.test(J.layers)){const Xt=_t.side;_t.side=Cn,_t.needsUpdate=!0,$r(bt,Q,J,Ut,_t,Oe),_t.side=Xt,_t.needsUpdate=!0,Qe=!0}}Qe===!0&&(L.updateMultisampleRenderTarget(we),L.updateRenderTargetMipmap(we))}P.setRenderTarget(Te),P.setClearColor(Z,le),Ke!==void 0&&(J.viewport=Ke),P.toneMapping=Ge}function vi(C,j,Q){const J=j.isScene===!0?j.overrideMaterial:null;for(let X=0,we=C.length;X<we;X++){const De=C[X],Te=De.object,Ge=De.geometry,Ke=J===null?De.material:J,Qe=De.group;Te.layers.test(Q.layers)&&$r(Te,j,Q,Ge,Ke,Qe)}}function $r(C,j,Q,J,X,we){C.onBeforeRender(P,j,Q,J,X,we),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(P,j,Q,J,C,we),X.transparent===!0&&X.side===Ii&&X.forceSinglePass===!1?(X.side=Cn,X.needsUpdate=!0,P.renderBufferDirect(Q,j,J,X,C,we),X.side=vr,X.needsUpdate=!0,P.renderBufferDirect(Q,j,J,X,C,we),X.side=Ii):P.renderBufferDirect(Q,j,J,X,C,we),C.onAfterRender(P,j,Q,J,X,we)}function Kr(C,j,Q){j.isScene!==!0&&(j=Ye);const J=Je.get(C),X=v.state.lights,we=v.state.shadowsArray,De=X.state.version,Te=Xe.getParameters(C,X.state,we,j,Q),Ge=Xe.getProgramCacheKey(Te);let Ke=J.programs;J.environment=C.isMeshStandardMaterial?j.environment:null,J.fog=j.fog,J.envMap=(C.isMeshStandardMaterial?K:T).get(C.envMap||J.environment),J.envMapRotation=J.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,Ke===void 0&&(C.addEventListener("dispose",dt),Ke=new Map,J.programs=Ke);let Qe=Ke.get(Ge);if(Qe!==void 0){if(J.currentProgram===Qe&&J.lightsStateVersion===De)return Xo(C,Te),Qe}else Te.uniforms=Xe.getUniforms(C),C.onBeforeCompile(Te,P),Qe=Xe.acquireProgram(Te,Ge),Ke.set(Ge,Qe),J.uniforms=Te.uniforms;const We=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=Ee.uniform),Xo(C,Te),J.needsLights=qo(C),J.lightsStateVersion=De,J.needsLights&&(We.ambientLightColor.value=X.state.ambient,We.lightProbe.value=X.state.probe,We.directionalLights.value=X.state.directional,We.directionalLightShadows.value=X.state.directionalShadow,We.spotLights.value=X.state.spot,We.spotLightShadows.value=X.state.spotShadow,We.rectAreaLights.value=X.state.rectArea,We.ltc_1.value=X.state.rectAreaLTC1,We.ltc_2.value=X.state.rectAreaLTC2,We.pointLights.value=X.state.point,We.pointLightShadows.value=X.state.pointShadow,We.hemisphereLights.value=X.state.hemi,We.directionalShadowMap.value=X.state.directionalShadowMap,We.directionalShadowMatrix.value=X.state.directionalShadowMatrix,We.spotShadowMap.value=X.state.spotShadowMap,We.spotLightMatrix.value=X.state.spotLightMatrix,We.spotLightMap.value=X.state.spotLightMap,We.pointShadowMap.value=X.state.pointShadowMap,We.pointShadowMatrix.value=X.state.pointShadowMatrix),J.currentProgram=Qe,J.uniformsList=null,Qe}function jo(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=wl.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Xo(C,j){const Q=Je.get(C);Q.outputColorSpace=j.outputColorSpace,Q.batching=j.batching,Q.batchingColor=j.batchingColor,Q.instancing=j.instancing,Q.instancingColor=j.instancingColor,Q.instancingMorph=j.instancingMorph,Q.skinning=j.skinning,Q.morphTargets=j.morphTargets,Q.morphNormals=j.morphNormals,Q.morphColors=j.morphColors,Q.morphTargetsCount=j.morphTargetsCount,Q.numClippingPlanes=j.numClippingPlanes,Q.numIntersection=j.numClipIntersection,Q.vertexAlphas=j.vertexAlphas,Q.vertexTangents=j.vertexTangents,Q.toneMapping=j.toneMapping}function _i(C,j,Q,J,X){j.isScene!==!0&&(j=Ye),L.resetTextureUnits();const we=j.fog,De=J.isMeshStandardMaterial?j.environment:null,Te=D===null?P.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:_r,Ge=(J.isMeshStandardMaterial?K:T).get(J.envMap||De),Ke=J.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Qe=!!Q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),We=!!Q.morphAttributes.position,St=!!Q.morphAttributes.normal,At=!!Q.morphAttributes.color;let bt=gr;J.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(bt=P.toneMapping);const Ut=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,_t=Ut!==void 0?Ut.length:0,Oe=Je.get(J),Xt=v.state.lights;if(W===!0&&(ae===!0||C!==pe)){const cn=C===pe&&J.id===G;Ee.setState(J,C,cn)}let xt=!1;J.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Xt.state.version||Oe.outputColorSpace!==Te||X.isBatchedMesh&&Oe.batching===!1||!X.isBatchedMesh&&Oe.batching===!0||X.isBatchedMesh&&Oe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Oe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Oe.instancing===!1||!X.isInstancedMesh&&Oe.instancing===!0||X.isSkinnedMesh&&Oe.skinning===!1||!X.isSkinnedMesh&&Oe.skinning===!0||X.isInstancedMesh&&Oe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Oe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Oe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Oe.instancingMorph===!1&&X.morphTexture!==null||Oe.envMap!==Ge||J.fog===!0&&Oe.fog!==we||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Ee.numPlanes||Oe.numIntersection!==Ee.numIntersection)||Oe.vertexAlphas!==Ke||Oe.vertexTangents!==Qe||Oe.morphTargets!==We||Oe.morphNormals!==St||Oe.morphColors!==At||Oe.toneMapping!==bt||Oe.morphTargetsCount!==_t)&&(xt=!0):(xt=!0,Oe.__version=J.version);let Pn=Oe.currentProgram;xt===!0&&(Pn=Kr(J,j,X));let qn=!1,Qt=!1,xi=!1;const Pt=Pn.getUniforms(),li=Oe.uniforms;if(Ze.useProgram(Pn.program)&&(qn=!0,Qt=!0,xi=!0),J.id!==G&&(G=J.id,Qt=!0),qn||pe!==C){ht.reverseDepthBuffer?(ge.copy(C.projectionMatrix),Ov(ge),zv(ge),Pt.setValue(z,"projectionMatrix",ge)):Pt.setValue(z,"projectionMatrix",C.projectionMatrix),Pt.setValue(z,"viewMatrix",C.matrixWorldInverse);const cn=Pt.map.cameraPosition;cn!==void 0&&cn.setValue(z,Pe.setFromMatrixPosition(C.matrixWorld)),ht.logarithmicDepthBuffer&&Pt.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Pt.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),pe!==C&&(pe=C,Qt=!0,xi=!0)}if(X.isSkinnedMesh){Pt.setOptional(z,X,"bindMatrix"),Pt.setOptional(z,X,"bindMatrixInverse");const cn=X.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Pt.setValue(z,"boneTexture",cn.boneTexture,L))}X.isBatchedMesh&&(Pt.setOptional(z,X,"batchingTexture"),Pt.setValue(z,"batchingTexture",X._matricesTexture,L),Pt.setOptional(z,X,"batchingIdTexture"),Pt.setValue(z,"batchingIdTexture",X._indirectTexture,L),Pt.setOptional(z,X,"batchingColorTexture"),X._colorsTexture!==null&&Pt.setValue(z,"batchingColorTexture",X._colorsTexture,L));const qs=Q.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&et.update(X,Q,Pn),(Qt||Oe.receiveShadow!==X.receiveShadow)&&(Oe.receiveShadow=X.receiveShadow,Pt.setValue(z,"receiveShadow",X.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(li.envMap.value=Ge,li.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&j.environment!==null&&(li.envMapIntensity.value=j.environmentIntensity),Qt&&(Pt.setValue(z,"toneMappingExposure",P.toneMappingExposure),Oe.needsLights&&Yo(li,xi),we&&J.fog===!0&&Ce.refreshFogUniforms(li,we),Ce.refreshMaterialUniforms(li,J,ce,ne,v.state.transmissionRenderTarget[C.id]),wl.upload(z,jo(Oe),li,L)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(wl.upload(z,jo(Oe),li,L),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Pt.setValue(z,"center",X.center),Pt.setValue(z,"modelViewMatrix",X.modelViewMatrix),Pt.setValue(z,"normalMatrix",X.normalMatrix),Pt.setValue(z,"modelMatrix",X.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const cn=J.uniformsGroups;for(let Zr=0,$s=cn.length;Zr<$s;Zr++){const Vi=cn[Zr];V.update(Vi,Pn),V.bind(Vi,Pn)}}return Pn}function Yo(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function qo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(C,j,Q){Je.get(C.texture).__webglTexture=j,Je.get(C.depthTexture).__webglTexture=Q;const J=Je.get(C);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Q===void 0,J.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,j){const Q=Je.get(C);Q.__webglFramebuffer=j,Q.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,Q=0){D=C,q=j,F=Q;let J=!0,X=null,we=!1,De=!1;if(C){const Ge=Je.get(C);if(Ge.__useDefaultFramebuffer!==void 0)Ze.bindFramebuffer(z.FRAMEBUFFER,null),J=!1;else if(Ge.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(Ge.__hasExternalTextures)L.rebindTextures(C,Je.get(C.texture).__webglTexture,Je.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const We=C.depthTexture;if(Ge.__boundDepthTexture!==We){if(We!==null&&Je.has(We)&&(C.width!==We.image.width||C.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const Ke=C.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(De=!0);const Qe=Je.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qe[j])?X=Qe[j][Q]:X=Qe[j],we=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?X=Je.get(C).__webglMultisampledFramebuffer:Array.isArray(Qe)?X=Qe[Q]:X=Qe,M.copy(C.viewport),R.copy(C.scissor),te=C.scissorTest}else M.copy(se).multiplyScalar(ce).floor(),R.copy(k).multiplyScalar(ce).floor(),te=re;if(Ze.bindFramebuffer(z.FRAMEBUFFER,X)&&J&&Ze.drawBuffers(C,X),Ze.viewport(M),Ze.scissor(R),Ze.setScissorTest(te),we){const Ge=Je.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ge.__webglTexture,Q)}else if(De){const Ge=Je.get(C.texture),Ke=j||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ge.__webglTexture,Q||0,Ke)}G=-1},this.readRenderTargetPixels=function(C,j,Q,J,X,we,De){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Je.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Te=Te[De]),Te){Ze.bindFramebuffer(z.FRAMEBUFFER,Te);try{const Ge=C.texture,Ke=Ge.format,Qe=Ge.type;if(!ht.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-J&&Q>=0&&Q<=C.height-X&&z.readPixels(j,Q,J,X,it.convert(Ke),it.convert(Qe),we)}finally{const Ge=D!==null?Je.get(D).__webglFramebuffer:null;Ze.bindFramebuffer(z.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(C,j,Q,J,X,we,De){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Je.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Te=Te[De]),Te){const Ge=C.texture,Ke=Ge.format,Qe=Ge.type;if(!ht.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=C.width-J&&Q>=0&&Q<=C.height-X){Ze.bindFramebuffer(z.FRAMEBUFFER,Te);const We=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,We),z.bufferData(z.PIXEL_PACK_BUFFER,we.byteLength,z.STREAM_READ),z.readPixels(j,Q,J,X,it.convert(Ke),it.convert(Qe),0);const St=D!==null?Je.get(D).__webglFramebuffer:null;Ze.bindFramebuffer(z.FRAMEBUFFER,St);const At=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await kv(z,At,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,We),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,we),z.deleteBuffer(We),z.deleteSync(At),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,j=null,Q=0){C.isTexture!==!0&&(Ml("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,C=arguments[1]);const J=Math.pow(2,-Q),X=Math.floor(C.image.width*J),we=Math.floor(C.image.height*J),De=j!==null?j.x:0,Te=j!==null?j.y:0;L.setTexture2D(C,0),z.copyTexSubImage2D(z.TEXTURE_2D,Q,0,0,De,Te,X,we),Ze.unbindTexture()},this.copyTextureToTexture=function(C,j,Q=null,J=null,X=0){C.isTexture!==!0&&(Ml("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,C=arguments[1],j=arguments[2],X=arguments[3]||0,Q=null);let we,De,Te,Ge,Ke,Qe;Q!==null?(we=Q.max.x-Q.min.x,De=Q.max.y-Q.min.y,Te=Q.min.x,Ge=Q.min.y):(we=C.image.width,De=C.image.height,Te=0,Ge=0),J!==null?(Ke=J.x,Qe=J.y):(Ke=0,Qe=0);const We=it.convert(j.format),St=it.convert(j.type);L.setTexture2D(j,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment);const At=z.getParameter(z.UNPACK_ROW_LENGTH),bt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ut=z.getParameter(z.UNPACK_SKIP_PIXELS),_t=z.getParameter(z.UNPACK_SKIP_ROWS),Oe=z.getParameter(z.UNPACK_SKIP_IMAGES),Xt=C.isCompressedTexture?C.mipmaps[X]:C.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Xt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Xt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Te),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ge),C.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,X,Ke,Qe,we,De,We,St,Xt.data):C.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,X,Ke,Qe,Xt.width,Xt.height,We,Xt.data):z.texSubImage2D(z.TEXTURE_2D,X,Ke,Qe,we,De,We,St,Xt),z.pixelStorei(z.UNPACK_ROW_LENGTH,At),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,bt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ut),z.pixelStorei(z.UNPACK_SKIP_ROWS,_t),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Oe),X===0&&j.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Ze.unbindTexture()},this.copyTextureToTexture3D=function(C,j,Q=null,J=null,X=0){C.isTexture!==!0&&(Ml("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,J=arguments[1]||null,C=arguments[2],j=arguments[3],X=arguments[4]||0);let we,De,Te,Ge,Ke,Qe,We,St,At;const bt=C.isCompressedTexture?C.mipmaps[X]:C.image;Q!==null?(we=Q.max.x-Q.min.x,De=Q.max.y-Q.min.y,Te=Q.max.z-Q.min.z,Ge=Q.min.x,Ke=Q.min.y,Qe=Q.min.z):(we=bt.width,De=bt.height,Te=bt.depth,Ge=0,Ke=0,Qe=0),J!==null?(We=J.x,St=J.y,At=J.z):(We=0,St=0,At=0);const Ut=it.convert(j.format),_t=it.convert(j.type);let Oe;if(j.isData3DTexture)L.setTexture3D(j,0),Oe=z.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)L.setTexture2DArray(j,0),Oe=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment);const Xt=z.getParameter(z.UNPACK_ROW_LENGTH),xt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Pn=z.getParameter(z.UNPACK_SKIP_PIXELS),qn=z.getParameter(z.UNPACK_SKIP_ROWS),Qt=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,bt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,bt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ge),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ke),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Qe),C.isDataTexture||C.isData3DTexture?z.texSubImage3D(Oe,X,We,St,At,we,De,Te,Ut,_t,bt.data):j.isCompressedArrayTexture?z.compressedTexSubImage3D(Oe,X,We,St,At,we,De,Te,Ut,bt.data):z.texSubImage3D(Oe,X,We,St,At,we,De,Te,Ut,_t,bt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Xt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Pn),z.pixelStorei(z.UNPACK_SKIP_ROWS,qn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Qt),X===0&&j.generateMipmaps&&z.generateMipmap(Oe),Ze.unbindTexture()},this.initRenderTarget=function(C){Je.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Ze.unbindTexture()},this.resetState=function(){q=0,F=0,D=null,Ze.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Gd?"display-p3":"srgb",n.unpackColorSpace=Mt.workingColorSpace===Ll?"display-p3":"srgb"}}class ZE extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class QE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_m(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=_m();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function _m(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fd);function JE(s){const e=s.replace("#",""),n=parseInt(e,16);if(e.length===3){const d=(n>>8&15)*17,f=(n>>4&15)*17,p=(n&15)*17;return[d/255,f/255,p/255]}const r=n>>16&255,a=n>>8&255,c=n&255;return[r/255,a/255,c/255]}const eM=({scrollProgress:s,activeProjectTint:e})=>{const n=rt.useRef(null),r=rt.useRef({active:0,color:new ie(.1,.1,.1)}),a=rt.useRef({uTime:{value:0},uScroll:{value:0},uHorizon:{value:.36},uResolution:{value:new Rt(window.innerWidth,window.innerHeight)},uProjectTintActive:{value:0},uProjectColor:{value:new ie(.1,.1,.1)}});return rt.useEffect(()=>{const c=n.current;if(!c)return;const d=new ZE,f=new Km(-1,1,1,-1,0,1),p=new KE({antialias:!0,powerPreference:"high-performance",alpha:!1});p.setSize(window.innerWidth,window.innerHeight),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.innerHTML="",c.appendChild(p.domElement);const m=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,_=`
      uniform float uTime;
      uniform float uScroll;
      uniform float uHorizon;
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
        float horizon = uHorizon - sin(uScroll * 3.14159) * 0.035;

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

          // Horizon atmospheric blend transition (soft misty waterline)
          float edgeSoftness = smoothstep(0.0, 0.015, horizon - uv.y);
          color = mix(atm.skyHorizon, color, edgeSoftness);
        }

        // Output final color
        gl_FragColor = vec4(color, 1.0);
      }
    `,y=new zi({vertexShader:m,fragmentShader:_,uniforms:a.current}),x=new Wo(2,2),S=new mi(x,y);d.add(S);let w;const A=new QE;let v=0;const g=()=>{const P=A.getElapsedTime(),N=Math.min(Math.max(P-v,0),.25);v=P,a.current.uTime.value=P;const q=1-Math.exp(-N*7),F=a.current;F.uProjectTintActive.value+=(r.current.active-F.uProjectTintActive.value)*q,F.uProjectColor.value.lerp(r.current.color,q),p.render(d,f),w=requestAnimationFrame(g)};g();const I=()=>{p.setSize(window.innerWidth,window.innerHeight),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.current.uResolution.value.set(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",I),()=>{cancelAnimationFrame(w),window.removeEventListener("resize",I),p.dispose(),x.dispose(),y.dispose(),c.contains(p.domElement)&&c.removeChild(p.domElement)}},[]),rt.useEffect(()=>{if(a.current.uScroll&&(a.current.uScroll.value=s),e){const c=JE(e);r.current.color.set(c[0],c[1],c[2]),r.current.active=1}else r.current.active=0},[s,e]),b.jsx("div",{ref:n,className:"fixed inset-0 pointer-events-none z-0 overflow-hidden","aria-hidden":"true"})},tM=({onNavigate:s,scrollProgress:e})=>{const[n,r]=rt.useState(!1),a=e>.85;return b.jsxs("header",{className:`fixed top-0 inset-x-0 z-40 px-4 sm:px-6 md:px-12 py-4 sm:py-5 transition-colors duration-500 ${a?"text-white":"text-[#1A1C1E]"}`,children:[b.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[b.jsxs("button",{onClick:()=>s("hero"),className:"group flex items-center space-x-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B57E08] rounded-sm","aria-label":"Ashfan — Back to Shore",children:[b.jsx("span",{className:"font-serif italic text-xl sm:text-2xl tracking-tight font-medium group-hover:text-[#B57E08] transition-colors",children:"Ashfan"}),b.jsx("span",{className:"text-[10px] font-mono tracking-widest opacity-60",children:"2026"})]}),b.jsxs("nav",{className:"hidden md:flex items-center space-x-8 text-xs font-mono uppercase tracking-[0.16em] opacity-80","aria-label":"Primary Navigation",children:[b.jsx("button",{onClick:()=>s("projects"),className:"hover:text-[#B57E08] transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B57E08]",children:"01 / Projects"}),b.jsx("button",{onClick:()=>s("channels"),className:"hover:text-[#B57E08] transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B57E08]",children:"02 / Channels"}),b.jsx("button",{onClick:()=>s("services"),className:"hover:text-[#B57E08] transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B57E08]",children:"03 / Services"}),b.jsx("button",{onClick:()=>s("about"),className:"hover:text-[#B57E08] transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B57E08]",children:"04 / About"}),b.jsx("button",{onClick:()=>s("contact"),className:"hover:text-[#B57E08] transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B57E08]",children:"05 / Far Shore"})]}),b.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-3 flex-shrink-0",children:[b.jsxs("button",{onClick:()=>s("contact"),className:`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-[0.14em] font-medium whitespace-nowrap transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B57E08] ${a?"bg-gradient-to-r from-[#F5B81E] to-[#FDE68A] text-[#0A0A0C] hover:opacity-90 shadow-lg shadow-[#F5B81E]/20":"bg-[#1A1C1E] text-white hover:bg-[#F5B81E] hover:text-[#1A1C1E] shadow-sm"}`,children:[b.jsx("span",{className:"hidden sm:inline",children:"Let's Talk"}),b.jsx("span",{className:"sm:hidden",children:"Talk"})]}),b.jsx("button",{onClick:()=>r(!n),className:"md:hidden p-1.5 sm:p-2 text-current focus:outline-none","aria-label":"Toggle Navigation Menu",children:b.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:n?b.jsx("path",{d:"M6 18L18 6M6 6l12 12",strokeLinecap:"round",strokeLinejoin:"round"}):b.jsx("path",{d:"M4 8h16M4 16h16",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]}),n&&b.jsx("div",{className:`md:hidden mt-4 py-6 px-6 rounded-2xl border transition-all ${a?"bg-[#121316]/95 border-white/10 text-white":"bg-white/95 border-[#1A1C1E]/10 text-[#1A1C1E]"} shadow-2xl backdrop-blur-md`,children:b.jsxs("div",{className:"flex flex-col space-y-4 font-mono text-xs uppercase tracking-[0.16em]",children:[b.jsx("button",{onClick:()=>{s("projects"),r(!1)},className:"text-left py-2 border-b border-current/10 hover:text-[#B57E08]",children:"01 / Projects"}),b.jsx("button",{onClick:()=>{s("channels"),r(!1)},className:"text-left py-2 border-b border-current/10 hover:text-[#B57E08]",children:"02 / Channels"}),b.jsx("button",{onClick:()=>{s("services"),r(!1)},className:"text-left py-2 border-b border-current/10 hover:text-[#B57E08]",children:"03 / Services"}),b.jsx("button",{onClick:()=>{s("about"),r(!1)},className:"text-left py-2 border-b border-current/10 hover:text-[#B57E08]",children:"04 / About"}),b.jsx("button",{onClick:()=>{s("contact"),r(!1)},className:"text-left py-2 hover:text-[#B57E08]",children:"05 / Far Shore"})]})})]})},nM=s=>Math.min(1,Math.max(0,s)),Oo=(s,e,n)=>nM((s-e)/(n-e)),mt=(s,e,n)=>{const r=Oo(s,e,n);return r*r*r*(r*(r*6-15)+10)},rn=(s,e=22,n=0)=>s>=.999?{opacity:1}:{opacity:s,translate:`0 ${(1-s)*e}px`,...n>0?{filter:`blur(${(1-s)*n}px)`}:{}},iM=({scrollProgress:s})=>{const e=1-Oo(s,0,.2),n=1-Oo(s,.04,.28);return e<=.02&&n<=.02?null:b.jsx("div",{className:"fixed inset-x-0 top-20 px-6 md:px-12 pointer-events-none z-30 hidden sm:block",children:b.jsxs("div",{className:"flex justify-between items-center text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#1A1C1E]/70",children:[b.jsxs("div",{className:"flex items-center space-x-2",style:{opacity:e},children:[b.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#F5B81E] inline-block animate-pulse"}),b.jsx("span",{children:"Websites · Motion · AI Visuals"})]}),b.jsxs("div",{className:"flex items-center space-x-2",style:{opacity:n},children:[b.jsx("span",{children:"Gorakhpur, India"}),b.jsx("span",{className:"text-[#1A1C1E]/30",children:"|"}),b.jsx("span",{className:"text-[#1A1C1E]/50",children:"Available for Craft"})]})]})})},Xn=s=>("./".endsWith("/")?"./":".//")+s.replace(/^\/+/,""),rM=Xn("assets/hero-alpha2.webm"),xm=Xn("assets/hero-poster2.png"),Is=7.93,ng=.12,sM=.18,Yu=[[0,1],[45,2],[90,3],[135,3.9],[180,4.5],[225,5.5],[270,6.25],[315,7],[360,1+Is]],oM=["RIGHT","UP-RIGHT","UP","UP-LEFT","LEFT","DOWN-LEFT","DOWN","DOWN-RIGHT"];function ym(s,e){if(Math.hypot(s,e)<ng)return 0;const r=(Math.atan2(-e,s)*180/Math.PI+360)%360;for(let a=0;a<Yu.length-1;a++){const[c,d]=Yu[a],[f,p]=Yu[a+1];if(r>=c&&r<=f)return d+(r-c)/(f-c)*(p-d)}return 0}const Sm=[[0,0,"FRONT"],[-.85,0,"LEFT"],[-.6,-.6,"UP-LEFT"],[0,0,"FRONT"],[.85,0,"RIGHT"],[0,.85,"DOWN"],[0,0,"FRONT"]],aM=2e3,lM=2500,cM=5e3,uM=({boxRef:s,onLabel:e,active:n=!0,mediaClassName:r=""})=>{const a=rt.useRef(null),c=rt.useRef(null),[d,f]=rt.useState("pending"),[p,m]=rt.useState("FRONT"),[_,y]=rt.useState(!1),x=rt.useRef(n);return rt.useEffect(()=>{x.current=n},[n]),rt.useEffect(()=>{e==null||e(p)},[p,e]),rt.useEffect(()=>{const S=s.current,w=a.current;if(!S||!w)return;const A=window.matchMedia("(prefers-reduced-motion: reduce)").matches,v=window.matchMedia("(pointer: coarse)").matches;A&&f("still");let g=!1,I=0,P=0,N=0,q=0,F=0,D=0,G=0,pe=!1,M=performance.now(),R=lM,te=!1,Z=0,le=0;const de=W=>{te!==W&&(te=W,y(W))},ne=()=>{try{const W=document.createElement("canvas");W.width=w.videoWidth||1152,W.height=w.videoHeight||1560;const ae=W.getContext("2d");if(!ae)return!1;ae.drawImage(w,0,0);const ge=ae.getImageData(Math.floor(W.width/2),2,1,1).data,xe=ae.getImageData(Math.floor(W.width/2),Math.floor(W.height/2),1,1).data;return ge[3]<128&&xe[3]>128}catch{return!1}},ce=()=>{if(g)return;if(pe=w.canPlayType('video/webm; codecs="vp9"')!==""&&ne(),f(pe?"video":"still"),pe){w.pause();try{w.currentTime=0}catch{}}};A||(w.readyState>=2?ce():w.addEventListener("loadeddata",ce,{once:!0}),w.addEventListener("error",()=>!g&&f("still"),{once:!0}));const B=(W,ae)=>{const ge=S.getBoundingClientRect(),xe=ge.left+ge.width/2,Pe=ge.top+ge.height/2,Ae=Math.max(-1,Math.min(1,(W-xe)/(window.innerWidth*.5))),Ye=Math.max(-1,Math.min(1,(ae-Pe)/(window.innerHeight*.5)));if(P=ym(Ae,Ye),D=Ae*6,G=Ye*4,Math.hypot(Ae,Ye)>=ng){const ft=(Math.atan2(-Ye,Ae)*180/Math.PI+360)%360;m(oM[Math.round(ft/45)%8])}else m("FRONT")},ue=()=>{M=performance.now(),R=cM,de(!1)},se=W=>{B(W.clientX,W.clientY),ue()},k=W=>{v&&(B(W.clientX,W.clientY),ue())},re=()=>{P=0,D=0,G=0,m("FRONT")};window.addEventListener("pointermove",se,{passive:!0}),window.addEventListener("pointerdown",k,{passive:!0}),document.documentElement.addEventListener("mouseleave",re),window.addEventListener("blur",re);const Le=()=>{if(!g){if(v&&!A&&x.current&&!document.hidden&&performance.now()-M>R){te||(de(!0),Z=0,le=0);const W=performance.now();if(W>=le){const[ae,ge,xe]=Sm[Z%Sm.length];P=ym(ae,ge),D=ae*6,G=ge*4,m(xe),Z+=1,le=W+aM}}else te&&de(!1);if(pe){let W=P-N;if(N>.05&&(W-=Is*Math.round(W/Is)),Math.abs(W)>.001&&(N=((N+W*sM)%Is+Is)%Is),!w.seeking&&Math.abs(w.currentTime-N)>.1)try{w.currentTime=N}catch{}}else if(c.current){q+=(D-q)*.12,F+=(G-F)*.12;const W=q/6*1.5;c.current.style.transform=`translate(${q.toFixed(1)}px, ${F.toFixed(1)}px) rotate(${W.toFixed(2)}deg)`}I=requestAnimationFrame(Le)}};return I=requestAnimationFrame(Le),()=>{g=!0,cancelAnimationFrame(I),w.removeEventListener("loadeddata",ce),window.removeEventListener("pointermove",se),window.removeEventListener("pointerdown",k),document.documentElement.removeEventListener("mouseleave",re),window.removeEventListener("blur",re)}},[s]),b.jsx("div",{className:"relative w-full h-full","data-gaze":p,"data-mode":d,"data-tour":_?"on":"off",role:"img","aria-label":"Animated character whose gaze follows your cursor in every direction",children:d==="still"?b.jsx("span",{ref:c,className:"block w-full h-full will-change-transform",children:b.jsx("img",{className:r,src:xm,alt:"",width:1152,height:1560,draggable:!1})}):b.jsx("video",{ref:a,className:r,src:rM,poster:xm,width:1152,height:1560,muted:!0,playsInline:!0,preload:"auto",disablePictureInPicture:!0})})},dM=Xn("assets/hero-poster2.png"),fM=({sourceRef:s,className:e=""})=>{const n=rt.useRef(null);return rt.useEffect(()=>{const r=n.current,a=s.current;if(!r||!a)return;const c=r.getContext("2d");if(!c)return;const d=new Image;d.src=dM;const f=()=>a.querySelector("video")??a.querySelector("img"),p=()=>{const g=f();return g?g instanceof HTMLVideoElement?g.readyState>=2?`v:${g.currentTime.toFixed(2)}`:"v:poster":`i:${g.src}`:"none"},m=()=>{const g=f();return g instanceof HTMLVideoElement?g.readyState>=2&&g.videoWidth>0?g:d.complete&&d.naturalWidth>0?d:null:g instanceof HTMLImageElement?g.complete&&g.naturalWidth>0?g:null:d.complete&&d.naturalWidth>0?d:null},_=g=>g instanceof HTMLVideoElement?g.videoWidth>0?{w:g.videoWidth,h:g.videoHeight}:null:g instanceof HTMLImageElement&&g.naturalWidth>0?{w:g.naturalWidth,h:g.naturalHeight}:null;let y=0,x=!1,S="";const w=()=>{const g=m();if(!g)return;const I=_(g);if(!I)return;const P=r.clientWidth,N=r.clientHeight;if(P<2||N<2)return;const q=Math.min(window.devicePixelRatio||1,2),F=Math.round(P*q),D=Math.round(N*q);(r.width!==F||r.height!==D)&&(r.width=F,r.height=D);const G=Math.min(F/I.w,D/I.h),pe=I.w*G,M=I.h*G;c.clearRect(0,0,F,D),c.drawImage(g,(F-pe)/2,(D-M)/2,pe,M),S=p()},A=()=>{x||(p()!==S&&w(),y=requestAnimationFrame(A))};w(),y=requestAnimationFrame(A),d.addEventListener("load",w);const v=new MutationObserver(w);return v.observe(a,{childList:!0,subtree:!0}),()=>{x=!0,cancelAnimationFrame(y),v.disconnect(),d.removeEventListener("load",w)}},[s]),b.jsx("canvas",{ref:n,className:e,"aria-hidden":"true"})},hM=({onExploreWork:s,scrollProgress:e})=>{const[n,r]=rt.useState("FRONT"),a=rt.useRef(null),c=e,d=1-Oo(c,.12,.23),f=1-Oo(c,0,.05),p=1-mt(c,.03,.17),m=1-mt(c,.06,.2),_=mt(c,.004,.058),y=1-mt(c,.04,.065),x=typeof window<"u"&&window.matchMedia("(max-width: 767.98px)").matches,S=x?54:58,w=x?95:120,A=S-(S-10)*_,v=-15*_,g=.35*(1-.65*_),I=mt(c,.055,.2);return rt.useEffect(()=>{const P=document.querySelector("#seabedRipple feDisplacementMap");P&&P.setAttribute("scale",(11-7.5*_).toFixed(1))},[_]),c>=.235?null:b.jsxs("section",{className:"fixed inset-0 z-10 w-full flex flex-col justify-between items-center select-none overflow-hidden",style:{opacity:d,transform:`translateY(${(-55*I).toFixed(2)}vh)`,pointerEvents:c>=.16?"none":"auto"},children:[b.jsxs("svg",{className:"hidden",children:[b.jsxs("filter",{id:"waterRippleDistort",children:[b.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.02 0.08",numOctaves:"2",result:"noise",children:b.jsx("animate",{attributeName:"baseFrequency",dur:"6s",values:"0.02 0.08; 0.03 0.12; 0.02 0.08",repeatCount:"indefinite"})}),b.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:"14",xChannelSelector:"R",yChannelSelector:"G"})]}),b.jsxs("filter",{id:"seabedRipple",x:"-5%",y:"-20%",width:"110%",height:"140%",children:[b.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.02 0.035",numOctaves:"2",result:"noise",children:b.jsx("animate",{attributeName:"baseFrequency",dur:"7s",values:"0.02 0.035; 0.026 0.045; 0.02 0.035",repeatCount:"indefinite"})}),b.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:"11",xChannelSelector:"R",yChannelSelector:"G"})]})]}),b.jsx("div",{"data-seabed-word":!0,"aria-hidden":"true",className:"absolute inset-x-0 top-[76.5vh] max-[380px]:top-[78.5vh] md:top-[86vh] z-[5] pointer-events-none select-none",style:{opacity:y},children:b.jsx("div",{className:"animate-seabed-drift",children:b.jsxs("div",{"data-seabed-plane":!0,className:"relative h-[44vh] md:h-[40vh]",style:{width:"180vw",left:"50%",transform:`translateX(-50%) translateY(${v.toFixed(2)}vh) perspective(${w}vh) rotateX(${A.toFixed(2)}deg)`,transformOrigin:"50% 0%"},children:[b.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(to bottom, rgba(23,42,54,0.16) 0%, rgba(23,42,54,0.05) 45%, rgba(23,42,54,0.10) 100%)"}}),b.jsx("div",{className:"absolute inset-x-0 top-0",style:{filter:"url(#seabedRipple)"},children:b.jsx("span",{"data-seabed-letters":!0,className:"block text-center font-rock font-semibold uppercase leading-[0.78] tracking-[0.03em] text-[27vw] md:text-[20vw] bg-gradient-to-b from-[#2E4757] via-[#4E6A7C] to-[#7E97A8] bg-clip-text text-transparent",style:{maskImage:"linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 22%, black 42%)",WebkitMaskImage:"linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 22%, black 42%)"},children:"ASHFAN"})}),b.jsx("div",{className:"animate-caustics absolute -inset-[12%] mix-blend-soft-light",style:{opacity:g,backgroundImage:"radial-gradient(ellipse 120px 34px at 18% 30%, rgba(255,244,214,0.5), transparent 70%), radial-gradient(ellipse 90px 26px at 62% 55%, rgba(255,244,214,0.42), transparent 70%), radial-gradient(ellipse 150px 40px at 85% 22%, rgba(255,244,214,0.36), transparent 70%), radial-gradient(ellipse 70px 22px at 38% 78%, rgba(255,244,214,0.45), transparent 70%)",backgroundSize:"340px 210px",maskImage:"linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 25%, black 50%)",WebkitMaskImage:"linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 25%, black 50%)"}})]})})}),b.jsx("div",{className:"h-28 w-full"}),b.jsxs("div",{className:"relative z-20 flex flex-col items-center justify-center my-auto",children:[b.jsx("div",{className:"relative",style:{opacity:p,translate:`0 ${(1-p)*-18}px`},children:b.jsxs("div",{ref:a,className:"relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 origin-bottom scale-[1.28] sm:scale-[1.32] md:scale-[1.34]",children:[b.jsx("div",{className:"absolute inset-0 rounded-full bg-white/20 filter blur-xl scale-95 pointer-events-none"}),b.jsx(uM,{boxRef:a,onLabel:r,active:c<=.12,mediaClassName:"w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(26,28,30,0.18)]"}),b.jsx("div",{className:"absolute -bottom-2 inset-x-0 flex justify-center pointer-events-none",children:b.jsxs("span",{className:"px-2.5 py-0.5 rounded-full bg-white/70 backdrop-blur-sm border border-[#1A1C1E]/10 text-[9px] font-mono tracking-widest text-[#1A1C1E]/80 shadow-xs tabular-nums",children:["GAZE: ",n]})}),b.jsx("div",{className:"absolute top-[96%] inset-x-0 h-full pointer-events-none overflow-hidden opacity-45",style:{transform:"scaleY(-0.9) translateY(4px)",filter:"url(#waterRippleDistort) blur(1.5px) contrast(0.85) brightness(0.9)",maskImage:"linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)",WebkitMaskImage:"linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)"},children:b.jsx(fM,{sourceRef:a,className:"w-full h-full filter saturate-75 opacity-70"})}),b.jsx("div",{className:"absolute top-[98%] left-1/2 -translate-x-1/2 w-32 h-6 rounded-full border border-white/40 scale-x-125 filter blur-[1px] animate-ripple pointer-events-none"})]})}),b.jsxs("div",{className:"mt-5 text-center w-full max-w-[320px] sm:max-w-xl px-2 sm:px-6 relative z-20 mx-auto",style:{opacity:m,translate:`0 ${(1-m)*-12}px`},children:[b.jsx("p",{className:"font-mono text-[9px] sm:text-xs uppercase tracking-[0.2em] text-[#1A1C1E]/60 mb-2",children:"The Shoreline · Personal Portfolio"}),b.jsxs("h1",{className:"font-serif text-xl sm:text-3xl md:text-5xl font-normal tracking-tight text-[#1A1C1E] leading-snug",children:["Crafting digital products, motion narratives, & ",b.jsx("span",{className:"italic text-[#9A7208]",children:"tactile WebGL"})," worlds."]}),b.jsx("p",{className:"mt-2.5 text-[11px] sm:text-sm text-[#1A1C1E]/75 max-w-[280px] sm:max-w-md mx-auto font-sans font-light leading-relaxed",children:"Independent creative developer and motion director based in Gorakhpur, India. A continuous journey across real work."}),b.jsxs("div",{className:"mt-5 flex flex-row items-center justify-center gap-2.5 sm:gap-3",children:[b.jsxs("button",{onClick:s,className:"group px-4 sm:px-7 py-2 sm:py-3 rounded-full bg-[#1A1C1E] text-white text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-[0.16em] font-medium hover:bg-[#F5B81E] hover:text-[#1A1C1E] transition-all duration-300 shadow-md hover:shadow-lg flex items-center space-x-1.5 sm:space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A7208]",children:[b.jsx("span",{children:"See the Work"}),b.jsx("svg",{className:"w-3 sm:w-3.5 h-3 sm:h-3.5 transform group-hover:translate-x-1 transition-transform",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",children:b.jsx("path",{d:"M3 8h10M9 4l4 4-4 4",strokeLinecap:"round",strokeLinejoin:"round"})})]}),b.jsx("a",{href:"#about",className:"px-3.5 sm:px-6 py-2 sm:py-3 rounded-full border border-[#1A1C1E]/20 text-[#1A1C1E] text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-[0.16em] hover:bg-white/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1C1E]",children:"The Story"})]})]})]}),b.jsxs("div",{className:"pb-8 pt-4 flex flex-col items-center justify-center space-y-2 pointer-events-none z-20",style:{opacity:f},children:[b.jsx("span",{className:"text-[10px] font-mono uppercase tracking-[0.25em] text-[#1A1C1E]/50",children:"Scroll to Begin Journey"}),b.jsx("div",{className:"w-5 h-8 rounded-full border border-[#1A1C1E]/30 flex justify-center p-1",children:b.jsx("div",{className:"w-1 h-2 rounded-full bg-[#1A1C1E]/60 animate-bounce"})})]})]})},Fo=[{id:"cutlab",number:"01",title:"CutLab",tagline:"Precision motion curation & frame-accurate editorial pacing.",category:"Motion Platform & Creative Tool",year:"2026",tintColor:"#2B394A",image:Xn("assets/06-seasonal-smoothie-figcraft.png"),liveUrl:"https://ashfanansari.github.io/cutlab/",status:"Live",overview:"CutLab was conceived as a high-density motion playground and editorial pacing engine. Designed for creators dissecting kinetic typography, frame transitions, and visual rhythm.",highlights:["Zero-latency video frame scrub and timeline visualization.","Bespoke editorial typography and high-contrast dark aesthetic.","Real-time pacing curves and visual waveform synchronization."],stack:["React","TypeScript","Tailwind CSS","Framer Motion","Canvas API"],clientOrContext:"Independent Motion & Web Product"},{id:"our-study-home",number:"02",title:"Our Study Home",tagline:"NEET revision workspace, focus planner, and paired study companion.",category:"Product & Web App",year:"2026",tintColor:"#364B44",image:Xn("assets/04-our-study-home.png"),liveUrl:"https://ashfanansari.github.io/our-study-home",status:"Live",overview:"A focused, distraction-free study environment tailored for intensive competitive exam preparation. Features real-time pair synchronization, daily syllabus planner, the interactive Mochi study buddy, and mono architectural redesign.",highlights:["Paired real-time study timer and sync status for mutual accountability.","Syllabus tracker with spaced-repetition revision cycles.","Minimalist monochrome aesthetic designed to prevent cognitive fatigue."],stack:["React","Tailwind CSS","Vite","Local-first State","WebSockets"],clientOrContext:"Personal Flagship NEET Platform"},{id:"duostudy",number:"03",title:"DuoStudy",tagline:"Next-gen collaborative revision room with ambient audio & synchronized notes.",category:"Web Experience & Workspace",year:"2026",tintColor:"#223843",image:Xn("assets/10-wallpaper-silver-boy.webp"),liveUrl:"https://ashfanansari.github.io/duostudy/",status:"Live",overview:"The successor companion to Our Study Home, DuoStudy experiments with soft tactile surfaces, ambient study sounds, interactive flashcard stacks, and frictionless note synchronization.",highlights:["Tactile card decks with keyboard-driven review flow.","Integrated ambient soundscapes for deep concentration.","Instant session sharing without complex authentication barriers."],stack:["React","TypeScript","Tailwind CSS","Web Audio API"],clientOrContext:"Collaborative Learning Suite"},{id:"aerix-volt",number:"04",title:"AERIX Volt",tagline:"High-performance electric footwear showcase with 3D breakout mechanics.",category:"Interactive E-Commerce & WebGL",year:"2026",tintColor:"#4A3420",image:Xn("assets/01-aerix-volt-breakout-hero.png"),liveUrl:"https://ashfanansari.github.io/aerix-volt/",status:"Live",overview:"An editorial product experience built around the Dark Volt silhouette. Features 4 distinct colorways across multiple camera angles, drag-to-rotate breakout hero tiles, and smooth scroll-linked zoom dynamics.",highlights:["Tile-breaking hero animation with cursor parallax perspective.","Dynamic colorway switcher updating shadows and lighting in real time.","High-resolution multi-angle photography pipeline integration."],stack:["React","Three.js / WebGL","Tailwind CSS","Motion"],clientOrContext:"Concept Product Showcase"},{id:"this-website",number:"05",title:"The Journey",tagline:"Continuous WebGL sky-over-water camera glide portfolio.",category:"Creative Dev & WebGL Experience",year:"2026",tintColor:"#1A1C1E",image:Xn("assets/08-unsaid-sepia-reel-frame.png"),liveUrl:"#top",status:"Living Experiment",overview:"This living portfolio site. Built on the principle that the web should feel like an atmospheric continuum rather than stacked boxes. Features custom water normal shaders, mooring scroll mechanics, and a 26-state gaze-tracking avatar.",highlights:["Custom WebGL water shader with dynamic sunlight specular glint & caustics.","Mooring scroll lock transitioning fluidly into 3D cylindrical carousel navigation.","Full 5-stop ambient color progression from dawn haze to obsidian Kryntix night."],stack:["Vite","React 18","TypeScript","Three.js / GLSL","Tailwind CSS"],clientOrContext:"Ashfan Personal Portfolio Flagship"}],pM=({scrollProgress:s,onSelectProject:e,onActiveProjectChange:n,onToggleFullIndex:r,isFullIndexOpen:a})=>{const[c,d]=rt.useState(0),[f,p]=rt.useState(!1),m=rt.useRef(0),_=rt.useRef(0),y=Fo.length,x=(Math.round(c)%y+y)%y,S=Fo[x];rt.useEffect(()=>{S&&n(S.tintColor)},[x,S,n]),rt.useEffect(()=>{if(s>=.22&&s<=.5&&!f){const F=(s-.22)/.28,G=F*F*F*(F*(F*6-15)+10)*(y-1);d(G)}},[s,y,f]),rt.useEffect(()=>{const F=D=>{a||(D.key==="ArrowRight"?d(G=>Math.round(G)+1):D.key==="ArrowLeft"&&d(G=>Math.round(G)-1))};return window.addEventListener("keydown",F),()=>window.removeEventListener("keydown",F)},[a]);const w=F=>{p(!0),m.current=F,_.current=c},A=rt.useCallback(F=>{if(!f)return;const G=-(F-m.current)/220;d(_.current+G)},[f]),v=rt.useCallback(()=>{f&&(p(!1),d(F=>Math.round(F)))},[f]);rt.useEffect(()=>{const F=pe=>A(pe.clientX),D=pe=>{pe.touches.length>0&&A(pe.touches[0].clientX)},G=()=>v();return f&&(window.addEventListener("mousemove",F),window.addEventListener("mouseup",G),window.addEventListener("touchmove",D),window.addEventListener("touchend",G)),()=>{window.removeEventListener("mousemove",F),window.removeEventListener("mouseup",G),window.removeEventListener("touchmove",D),window.removeEventListener("touchend",G)}},[f,A,v]);const g=s;if(g<.1||g>.58)return null;const I=Math.min(mt(g,.1,.2),1-mt(g,.5,.58)),P=mt(g,.13,.23),N=mt(g,.17,.29),q=mt(g,.23,.33);return b.jsxs("section",{className:"fixed inset-0 pointer-events-auto flex flex-col justify-between items-center py-20 px-4 z-20 select-none overflow-hidden",style:{opacity:I},children:[b.jsxs("div",{className:"w-full max-w-6xl mx-auto flex justify-between items-center z-30 pt-4",style:{opacity:P,translate:`0 ${(1-P)*14}px`},children:[b.jsxs("div",{className:"flex items-center space-x-3",children:[b.jsx("span",{className:"text-[10px] font-mono uppercase tracking-[0.22em] text-[#1A1C1E]/60 bg-white/60 px-3 py-1 rounded-full border border-[#1A1C1E]/10 backdrop-blur-xs",children:"01 / Featured Passage"}),b.jsx("span",{className:"hidden sm:inline text-xs font-serif italic text-[#1A1C1E]/70",children:"Adrift on calm waters"})]}),b.jsxs("div",{className:"flex items-center bg-white/70 backdrop-blur-sm p-1 rounded-full border border-[#1A1C1E]/10 shadow-xs",children:[b.jsx("button",{onClick:()=>{a&&r()},className:`px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase transition-all ${a?"text-[#1A1C1E]/70 hover:text-[#1A1C1E]":"bg-[#1A1C1E] text-white shadow-xs"}`,children:"Featured (3D)"}),b.jsx("button",{onClick:()=>{a||r()},className:`px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase transition-all ${a?"bg-[#1A1C1E] text-white shadow-xs":"text-[#1A1C1E]/70 hover:text-[#1A1C1E]"}`,children:"Full Index"})]})]}),b.jsx("div",{className:"relative w-full max-w-5xl h-[460px] md:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing my-auto",onMouseDown:F=>w(F.clientX),onTouchStart:F=>{F.touches.length>0&&w(F.touches[0].clientX)},style:{perspective:"1200px",opacity:N,scale:`${.965+.035*N}`},children:Fo.map((F,D)=>{let G=D-c;G=((G+y/2)%y+y)%y-y/2;const pe=G*(Math.PI*2/y),M=window.innerWidth<640?320:460,R=Math.sin(pe)*M,te=(Math.cos(pe)-1)*M*.9,Z=G*-28,le=Math.abs(G)<.45,de=Math.max(.15,Math.cos(pe)*1.1);return b.jsxs("div",{onClick:()=>{le?e(F):d(ne=>ne+G)},className:"absolute w-[290px] sm:w-[350px] md:w-[400px] rounded-2xl bg-white/90 backdrop-blur-md border border-[#1A1C1E]/10 shadow-[0_20px_45px_rgba(26,28,30,0.14)] p-5 transition-all duration-150 ease-out select-none",style:{transform:`translateX(${R}px) translateZ(${te}px) rotateY(${Z}deg) scale(${le?1.04:.92})`,opacity:de,zIndex:Math.round(100+te),cursor:le?"pointer":"grab"},children:[b.jsxs("div",{className:"relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#1A1C1E]/5 mb-4 group",children:[b.jsx("img",{src:F.image,alt:F.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",draggable:!1}),b.jsx("div",{className:"absolute top-3 left-3 px-2 py-0.5 rounded-full bg-[#1A1C1E]/80 text-white font-mono text-[9px] tracking-widest backdrop-blur-xs",children:F.number}),b.jsx("div",{className:"absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-white/90 text-[#1A1C1E] font-mono text-[9px] tracking-wider uppercase backdrop-blur-xs",children:F.category.split(" ")[0]})]}),b.jsxs("div",{className:"flex items-baseline justify-between",children:[b.jsx("h3",{className:"font-serif text-2xl font-normal text-[#1A1C1E] tracking-tight",children:F.title}),b.jsx("span",{className:"font-mono text-[10px] text-[#1A1C1E]/50 tabular-nums",children:F.year})]}),b.jsx("p",{className:"mt-1 text-xs text-[#1A1C1E]/70 line-clamp-2 font-sans font-light leading-relaxed",children:F.tagline}),le&&b.jsxs("div",{className:"mt-4 pt-3 border-t border-[#1A1C1E]/10 flex items-center justify-between",children:[b.jsxs("span",{className:"text-[10px] font-mono uppercase tracking-widest text-[#9A7208] font-medium flex items-center space-x-1",children:[b.jsx("span",{children:"Explore Case"}),b.jsx("span",{children:"→"})]}),b.jsx("span",{className:"text-[9px] font-mono uppercase text-[#1A1C1E]/40 tracking-wider",children:"Click to Open"})]}),b.jsx("div",{className:"absolute top-[102%] inset-x-0 h-28 pointer-events-none overflow-hidden opacity-30",style:{transform:"scaleY(-0.7)",filter:"blur(3px) contrast(0.8)",maskImage:"linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)",WebkitMaskImage:"linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)"},children:b.jsx("div",{className:"w-full h-full bg-white/40 rounded-2xl"})})]},F.id)})}),b.jsxs("div",{className:"w-full max-w-md mx-auto flex items-center justify-between z-30 pb-4",style:{opacity:q,translate:`0 ${(1-q)*12}px`},children:[b.jsx("button",{onClick:()=>d(F=>Math.round(F)-1),className:"p-2.5 rounded-full bg-white/80 hover:bg-white text-[#1A1C1E] border border-[#1A1C1E]/10 shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A7208]","aria-label":"Previous project",children:b.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:b.jsx("path",{d:"M15 18l-6-6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})})}),b.jsx("div",{className:"flex items-center space-x-2",children:Fo.map((F,D)=>b.jsx("button",{onClick:()=>{const G=D-x;d(pe=>pe+G)},className:`transition-all duration-300 rounded-full ${D===x?"w-7 h-1.5 bg-[#F5B81E]":"w-1.5 h-1.5 bg-[#1A1C1E]/30 hover:bg-[#1A1C1E]/60"}`,"aria-label":`Go to project ${F.title}`},F.id))}),b.jsx("button",{onClick:()=>d(F=>Math.round(F)+1),className:"p-2.5 rounded-full bg-white/80 hover:bg-white text-[#1A1C1E] border border-[#1A1C1E]/10 shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A7208]","aria-label":"Next project",children:b.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:b.jsx("path",{d:"M9 18l6-6-6-6",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})},mM=({project:s,onClose:e})=>(rt.useEffect(()=>{const n=r=>{r.key==="Escape"&&e()};return s&&(window.addEventListener("keydown",n),document.body.style.overflow="hidden"),()=>{window.removeEventListener("keydown",n),document.body.style.overflow=""}},[s,e]),s?b.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-auto",role:"dialog","aria-modal":"true","aria-labelledby":"modal-project-title",children:[b.jsx("div",{className:"absolute inset-0 bg-[#0A0A0C]/65 backdrop-blur-md transition-opacity duration-300",onClick:e}),b.jsxs("div",{className:"relative w-full max-w-4xl max-h-[90vh] bg-[#F7F8FA] rounded-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200",children:[b.jsxs("div",{className:"flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#1A1C1E]/10 bg-white/60 backdrop-blur-xs",children:[b.jsxs("div",{className:"flex items-center space-x-3",children:[b.jsx("span",{className:"font-mono text-xs text-[#9A7208] font-semibold tracking-widest",children:s.number}),b.jsx("span",{className:"text-[#1A1C1E]/20",children:"/"}),b.jsx("span",{className:"font-mono text-xs uppercase tracking-widest text-[#1A1C1E]/60",children:s.category})]}),b.jsx("button",{onClick:e,className:"p-2 rounded-full hover:bg-[#1A1C1E]/5 text-[#1A1C1E] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A7208]","aria-label":"Close Case Study",children:b.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:b.jsx("path",{d:"M18 6L6 18M6 6l12 12",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),b.jsxs("div",{className:"overflow-y-auto p-6 sm:p-8 space-y-8",children:[b.jsxs("div",{className:"relative w-full aspect-[21/9] sm:aspect-[2/1] rounded-2xl overflow-hidden bg-[#1A1C1E]/10 border border-[#1A1C1E]/5 shadow-inner",children:[b.jsx("img",{src:s.image,alt:s.title,className:"w-full h-full object-cover"}),b.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6",children:b.jsxs("span",{className:"px-3 py-1 rounded-full bg-white/90 text-[#1A1C1E] font-mono text-[10px] uppercase tracking-widest",children:["Status: ",s.status]})})]}),b.jsxs("div",{children:[b.jsx("h2",{id:"modal-project-title",className:"font-serif text-3xl sm:text-4xl text-[#1A1C1E] font-normal tracking-tight",children:s.title}),b.jsx("p",{className:"mt-2 text-base text-[#1A1C1E]/80 font-serif italic",children:s.tagline})]}),b.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-[#1A1C1E]/10",children:[b.jsxs("div",{className:"md:col-span-2 space-y-4",children:[b.jsx("h4",{className:"font-mono text-xs uppercase tracking-widest text-[#1A1C1E]/50",children:"Narrative & Context"}),b.jsx("p",{className:"text-sm sm:text-base text-[#1A1C1E]/80 leading-relaxed font-sans",children:s.overview}),b.jsxs("div",{className:"pt-4 space-y-2",children:[b.jsx("h5",{className:"font-mono text-xs uppercase tracking-widest text-[#1A1C1E]/60",children:"Key Craft Highlights"}),b.jsx("ul",{className:"space-y-2 text-sm text-[#1A1C1E]/75",children:s.highlights.map((n,r)=>b.jsxs("li",{className:"flex items-start space-x-2",children:[b.jsx("span",{className:"text-[#9A7208] font-bold mt-0.5",children:"•"}),b.jsx("span",{children:n})]},r))})]})]}),b.jsxs("div",{className:"space-y-6 md:border-l md:border-[#1A1C1E]/10 md:pl-6",children:[b.jsxs("div",{children:[b.jsx("h4",{className:"font-mono text-[10px] uppercase tracking-widest text-[#1A1C1E]/50 mb-1",children:"Context / Initiative"}),b.jsx("p",{className:"text-xs font-medium text-[#1A1C1E]",children:s.clientOrContext})]}),b.jsxs("div",{children:[b.jsx("h4",{className:"font-mono text-[10px] uppercase tracking-widest text-[#1A1C1E]/50 mb-1",children:"Year"}),b.jsx("p",{className:"text-xs font-mono text-[#1A1C1E] tabular-nums",children:s.year})]}),b.jsxs("div",{children:[b.jsx("h4",{className:"font-mono text-[10px] uppercase tracking-widest text-[#1A1C1E]/50 mb-2",children:"Technical Stack"}),b.jsx("div",{className:"flex flex-wrap gap-1.5",children:s.stack.map(n=>b.jsx("span",{className:"px-2 py-0.5 rounded-md bg-[#1A1C1E]/5 border border-[#1A1C1E]/10 text-[10px] font-mono text-[#1A1C1E]/80",children:n},n))})]}),s.liveUrl&&s.liveUrl!=="#top"&&b.jsx("div",{className:"pt-4",children:b.jsxs("a",{href:s.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-[#1A1C1E] text-white hover:bg-[#F5B81E] hover:text-[#1A1C1E] text-xs font-mono uppercase tracking-widest transition-colors shadow-sm",children:[b.jsx("span",{children:"Launch Live Site"}),b.jsx("svg",{className:"w-3.5 h-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:b.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3",strokeLinecap:"round",strokeLinejoin:"round"})})]})})]})]})]})]})]}):null),gM=({isOpen:s,onClose:e,onSelectProject:n})=>s?b.jsxs("div",{className:"fixed inset-0 z-50 bg-[#0A0A0C]/90 backdrop-blur-xl text-white flex flex-col p-6 sm:p-12 md:p-16 overflow-y-auto animate-in fade-in duration-200",role:"dialog","aria-modal":"true",children:[b.jsxs("div",{className:"w-full max-w-5xl mx-auto flex justify-between items-center pb-8 border-b border-white/10",children:[b.jsxs("div",{children:[b.jsx("span",{className:"font-mono text-xs text-[#F5B81E] tracking-widest uppercase",children:"Archive Index"}),b.jsx("h2",{className:"font-serif text-3xl sm:text-4xl font-normal mt-1",children:"All Projects & Experiments"})]}),b.jsx("button",{onClick:e,className:"p-3 rounded-full hover:bg-white/10 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B81E]","aria-label":"Close Index",children:b.jsx("svg",{className:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:b.jsx("path",{d:"M18 6L6 18M6 6l12 12",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),b.jsx("div",{className:"w-full max-w-5xl mx-auto divide-y divide-white/10 mt-6",children:Fo.map(r=>b.jsxs("div",{onClick:()=>{e(),n(r)},className:"group py-6 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:bg-white/[0.03] px-4 rounded-xl transition-colors",children:[b.jsxs("div",{className:"flex items-baseline space-x-6",children:[b.jsx("span",{className:"font-mono text-xs text-[#F5B81E] tracking-widest",children:r.number}),b.jsxs("div",{children:[b.jsx("h3",{className:"font-serif text-2xl group-hover:text-[#F5B81E] transition-colors",children:r.title}),b.jsx("p",{className:"text-xs text-white/50 font-sans mt-0.5",children:r.tagline})]})]}),b.jsxs("div",{className:"mt-3 md:mt-0 flex items-center space-x-6 text-xs font-mono text-white/60 tabular-nums",children:[b.jsx("span",{className:"hidden sm:inline uppercase tracking-widest",children:r.category}),b.jsx("span",{className:"text-white/40",children:r.year}),b.jsx("span",{className:"text-white/70 group-hover:text-white transition-colors",children:"View →"})]})]},r.id))})]}):null,vM=[{id:"infography",name:"InfoGraphy",handle:"@InfoGraphy",tagline:"Data visualization & deep motion essays.",description:"Deconstructing complex ideas through cinematic data visualization, isometric typography, and documentary-style pacing.",genre:"Motion Essays & Visual Data",url:"https://www.youtube.com/channel/UCFy7kD_6Z0luge4mAO9QB7w",statsLabel:"Flagship Ek Sawal Pilot",coverImage:Xn("assets/02-aerix-vision-posters.png"),accent:"#D4851F"},{id:"pixelnest",name:"PixelNest",handle:"@PixelNest",tagline:"Design systems, creative coding & UI crafts.",description:"A lab exploring micro-interactions, layout physics, and short-form visual engineering experiments.",genre:"Creative Code & UI Experiments",url:"https://www.youtube.com/shorts/T8m9EYiRHJw",statsLabel:"Umbrella Boy Series",coverImage:Xn("assets/channel-avatar-3d.png"),accent:"#4A6984"},{id:"mili-toons",name:"Mili Toons",handle:"@MiliToons",tagline:"Animated storytelling & character shorts.",description:"Bite-sized animated narratives exploring whimsical human situations, emotional warmth, and character keyframing.",genre:"Character Animation & Shorts",url:"https://www.youtube.com/channel/UCt_ZVOzqJMUjNHm4ykDXRvA",statsLabel:"Human-Mili Animation",coverImage:Xn("assets/mili-human-lock-B.webp"),accent:"#8CA381"},{id:"unsaid",name:"Unsaid",handle:"@Unsaid2D",tagline:"Raw emotional visual narratives & sepia saga.",description:"Intimate visual shorts, heartfelt character vignettes, and nostalgic monochrome illustration reels.",genre:"2D Narrative & Sepia Reels",url:"https://www.youtube.com/@Unsaid2D",statsLabel:"Sepia Saga & Reels",coverImage:Xn("assets/08-unsaid-sepia-reel-frame.png"),accent:"#A65B32"}],_M=({scrollProgress:s})=>{const e=s;if(e<.49||e>.69)return null;const n=Math.min(mt(e,.49,.56),1-mt(e,.62,.69)),r=mt(e,.52,.6),a=mt(e,.57,.64);return b.jsxs("section",{id:"channels",className:"fixed inset-0 pointer-events-auto flex flex-col justify-between items-center py-20 px-6 z-20 select-none overflow-hidden",style:{opacity:n},children:[b.jsxs("div",{className:"w-full max-w-6xl mx-auto flex justify-between items-baseline pt-4",style:rn(r,16),children:[b.jsxs("div",{children:[b.jsx("span",{className:"text-[10px] font-mono uppercase tracking-[0.22em] text-[#1A1C1E]/60 bg-white/60 px-3 py-1 rounded-full border border-[#1A1C1E]/10 backdrop-blur-xs",children:"02 / Channels Drift"}),b.jsx("h2",{className:"font-serif text-3xl sm:text-4xl text-[#1A1C1E] font-normal tracking-tight mt-2",children:"Independent Media & Animation Labs"})]}),b.jsx("span",{className:"hidden sm:inline text-xs font-mono text-[#1A1C1E]/50 tracking-wider",children:"FLOATING ADRIFT"})]}),b.jsx("div",{className:"w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-auto",children:vM.map((c,d)=>{const f=`${d*.7}s`,p=mt(e,.52+d*.018,.6+d*.018);return b.jsxs("div",{className:"relative rounded-2xl bg-white/85 backdrop-blur-md border border-[#1A1C1E]/10 p-5 shadow-[0_16px_36px_rgba(26,28,30,0.12)] hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between",style:{animation:"float 5s ease-in-out infinite",animationDelay:f,...rn(p,26,5)},children:[b.jsxs("div",{children:[b.jsxs("div",{className:"relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#1A1C1E]/5 mb-4",children:[b.jsx("img",{src:c.coverImage,alt:c.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),b.jsx("div",{className:"absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-[#1A1C1E]/80 text-white font-mono text-[9px] tracking-widest backdrop-blur-xs",children:c.handle})]}),b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsx("h3",{className:"font-serif text-2xl font-normal text-[#1A1C1E] tracking-tight group-hover:text-[#9A7208] transition-colors",children:c.name}),b.jsx("span",{className:"w-2.5 h-2.5 rounded-full",style:{backgroundColor:c.accent}})]}),b.jsx("p",{className:"font-mono text-[10px] uppercase tracking-wider text-[#1A1C1E]/50 mt-0.5",children:c.genre}),b.jsx("p",{className:"mt-2 text-xs text-[#1A1C1E]/75 line-clamp-3 leading-relaxed font-sans",children:c.description})]}),b.jsxs("div",{className:"mt-5 pt-3 border-t border-[#1A1C1E]/10 flex items-center justify-between",children:[b.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-[#1A1C1E]/60",children:c.statsLabel}),b.jsxs("a",{href:c.url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-1.5 text-[10px] font-mono uppercase tracking-widest text-[#1A1C1E] font-medium group-hover:text-[#9A7208] transition-colors",children:[b.jsx("span",{children:"Visit"}),b.jsx("svg",{className:"w-3 h-3",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:b.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",strokeLinecap:"round",strokeLinejoin:"round"})})]})]}),b.jsx("div",{className:"absolute top-[102%] inset-x-0 h-16 pointer-events-none opacity-20",style:{transform:"scaleY(-0.6)",filter:"blur(3px)",maskImage:"linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)",WebkitMaskImage:"linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)"},children:b.jsx("div",{className:"w-full h-full bg-white/50 rounded-xl"})})]},c.id)})}),b.jsx("div",{className:"w-full max-w-6xl mx-auto flex justify-center pb-4 text-center",style:rn(a,10),children:b.jsx("p",{className:"text-[11px] font-mono uppercase tracking-[0.2em] text-[#1A1C1E]/50",children:"Independent storytelling, frame timing & creative coding"})})]})},xM=[{id:"websites",num:"01",title:"Websites & WebGL",subtitle:"Living digital flagships and interactive frontends",description:"Bespoke web applications built with ruthless attention to craft, type scale, spatial continuity, and smooth 60 FPS interactions. No generic templates, no AI slop.",deliverables:["Interactive Product Experiences & Portfolios","Custom WebGL / Three.js Shaders & 3D Stages","Fluid Micro-interactions & Tactile Physics","Accessible, High-Performance Vite & React Stacks"],tools:["React","TypeScript","Three.js / GLSL","Tailwind CSS","Framer Motion"]},{id:"motion",num:"02",title:"Motion Design & Direction",subtitle:"Kinetic typography, launch showreels & video essays",description:"Transforming technical products and abstract ideas into gripping visual stories with frame-by-frame pacing, custom audio sync, and refined editorial elegance.",deliverables:["Product Launch & Feature Reveal Videos","Kinetic Brand Typography & Visual Loops","Editorial Explainer Animations & Documentaries","Social Cutdowns & Vertical Story Reels"],tools:["After Effects","Premiere Pro","Blender","Photoshop","FigCraft"]},{id:"ai-visuals",num:"03",title:"AI Visuals & Neural Workflows",subtitle:"Character consistency, cinematic art direction & synthetic pipelines",description:"Harnessing frontier generative models with disciplined art direction. Multi-angle character consistency, high-resolution product cutouts, and hyper-curated art pipelines.",deliverables:["Consistent Multi-Pose Character References","Hyper-Detailed Concept Visuals & Mood Boards","Automated Masking, Upscaling & Retouching Pipelines","Brand Asset Generation with Precise Art Direction"],tools:["Midjourney","FLUX","ComfyUI","Photoshop Neural","Custom Python Tooling"]},{id:"creative-dev",num:"04",title:"Digital Experiences & Creative Dev",subtitle:"Interactive tools, 3D configurators & experimental software",description:"Prototyping playful, tactile digital tools that push browser capabilities. From custom colorway configurators to scroll-sequence product breakdowns.",deliverables:["3D Product Configurators & Material Viewers","Scroll-Driven Frame Sequences & Scrubbers","Custom Design Systems & Interactive Widgets","Novel Canvas Physics & Sensory Feedback Experiments"],tools:["Web Audio API","Canvas 2D / WebGL","Tailwind","Vite","Node.js"]}],yM=({scrollProgress:s})=>{const e=s;if(e<.65||e>.83)return null;const n=Math.min(mt(e,.65,.71),1-mt(e,.78,.83)),r=mt(e,.66,.74),a=mt(e,.73,.79);return b.jsxs("section",{id:"services",className:"fixed inset-0 pointer-events-auto flex flex-col justify-between items-center py-20 px-6 z-20 select-none overflow-hidden",style:{opacity:n},children:[b.jsxs("div",{className:"w-full max-w-6xl mx-auto flex justify-between items-baseline pt-4",style:rn(r,16),children:[b.jsxs("div",{children:[b.jsx("span",{className:"text-[10px] font-mono uppercase tracking-[0.22em] text-[#1A1C1E]/60 bg-white/60 px-3 py-1 rounded-full border border-[#1A1C1E]/10 backdrop-blur-xs",children:"03 / Services & Capabilities"}),b.jsx("h2",{className:"font-serif text-3xl sm:text-4xl text-[#1A1C1E] font-normal tracking-tight mt-2",children:"Discipline & Craftsmanship"})]}),b.jsx("span",{className:"hidden sm:inline text-xs font-mono text-[#1A1C1E]/50 tracking-wider",children:"STEPPED FLOATING DECK"})]}),b.jsx("div",{className:"w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-auto",children:xM.map((c,d)=>{const f=mt(e,.68+d*.015,.75+d*.015);return b.jsxs("div",{className:"rounded-2xl bg-white/90 backdrop-blur-md border border-[#1A1C1E]/10 p-6 shadow-[0_18px_40px_rgba(26,28,30,0.12)] flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group",style:{marginTop:`${d*16}px`,...rn(f,30,4)},children:[b.jsxs("div",{children:[b.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-[#1A1C1E]/10 mb-4",children:[b.jsx("span",{className:"font-mono text-xs text-[#9A7208] font-semibold tracking-widest",children:c.num}),b.jsx("span",{className:"font-mono text-[9px] uppercase tracking-wider text-[#1A1C1E]/40",children:"Discipline"})]}),b.jsx("h3",{className:"font-serif text-2xl font-normal text-[#1A1C1E] tracking-tight group-hover:text-[#9A7208] transition-colors",children:c.title}),b.jsx("p",{className:"mt-1 text-xs font-serif italic text-[#1A1C1E]/60",children:c.subtitle}),b.jsx("p",{className:"mt-3 text-xs text-[#1A1C1E]/75 leading-relaxed font-sans",children:c.description}),b.jsxs("div",{className:"mt-5 space-y-1.5",children:[b.jsx("span",{className:"font-mono text-[9px] uppercase tracking-widest text-[#1A1C1E]/50 block",children:"Deliverables"}),c.deliverables.map((p,m)=>b.jsxs("div",{className:"text-[11px] text-[#1A1C1E]/80 flex items-start space-x-1.5",children:[b.jsx("span",{className:"text-[#9A7208] text-xs",children:"•"}),b.jsx("span",{children:p})]},m))]})]}),b.jsx("div",{className:"mt-6 pt-3 border-t border-[#1A1C1E]/10 flex flex-wrap gap-1",children:c.tools.map(p=>b.jsx("span",{className:"px-2 py-0.5 rounded bg-[#1A1C1E]/5 text-[9px] font-mono text-[#1A1C1E]/70",children:p},p))})]},c.id)})}),b.jsx("div",{className:"w-full max-w-6xl mx-auto flex justify-center pb-4 text-center",style:rn(a,10),children:b.jsx("span",{className:"text-[10px] font-mono uppercase tracking-[0.2em] text-[#1A1C1E]/50",children:"Built for teams who refuse average"})})]})},SM=({scrollProgress:s})=>{const e=s;if(e<.79||e>.93)return null;const n=Math.min(mt(e,.79,.85),1-mt(e,.885,.93)),r=mt(e,.8,.86),a=mt(e,.815,.875),c=mt(e,.83,.885),d=mt(e,.84,.895),f=mt(e,.85,.905);return b.jsx("section",{id:"about",className:"fixed inset-0 pointer-events-auto flex items-center justify-center p-6 z-20 select-none overflow-hidden",style:{opacity:n},children:b.jsxs("div",{className:"w-full max-w-3xl rounded-3xl bg-white/90 backdrop-blur-md border border-[#1A1C1E]/10 p-8 sm:p-12 shadow-[0_24px_60px_rgba(26,28,30,0.14)] relative",children:[b.jsxs("div",{className:"flex items-center justify-between pb-6 border-b border-[#1A1C1E]/10",style:rn(r,12),children:[b.jsxs("div",{className:"flex items-center space-x-2",children:[b.jsx("span",{className:"w-2 h-2 rounded-full bg-[#F5B81E]"}),b.jsx("span",{className:"font-mono text-[10px] uppercase tracking-[0.2em] text-[#1A1C1E]/70",children:"04 / The About Shoal"})]}),b.jsx("span",{className:"font-mono text-[10px] uppercase tracking-widest text-[#1A1C1E]/40",children:"Latitude 26.7606° N, 83.3732° E"})]}),b.jsxs("div",{className:"mt-8 space-y-5",children:[b.jsxs("h2",{className:"font-serif text-3xl sm:text-4xl text-[#1A1C1E] font-normal tracking-tight leading-tight",style:rn(a,16),children:["Building with weight, atmosphere, and ",b.jsx("span",{className:"italic text-[#9A7208]",children:"singular focus"}),"."]}),b.jsx("p",{className:"text-sm sm:text-base text-[#1A1C1E]/80 leading-relaxed font-sans font-light",style:rn(c,14),children:"I operate out of Gorakhpur, India. My work sits at the cross-section of frontend engineering, motion direction, and visual narrative. I build websites that feel like continuous worlds rather than generic slide decks, and animate stories that hold emotional residue."}),b.jsx("p",{className:"text-sm sm:text-base text-[#1A1C1E]/80 leading-relaxed font-sans font-light",style:rn(d,14),children:"Every build follows a simple standard: real evidence, real screenshots, hand-tuned wave normals, zero decorative slop, and ruthless typography. Whether it is an interactive 3D product showcase or an animated YouTube short, the craft is non-negotiable."})]}),b.jsxs("div",{className:"mt-8 pt-6 border-t border-[#1A1C1E]/10 grid grid-cols-2 sm:grid-cols-3 gap-6",style:rn(f,12),children:[b.jsxs("div",{children:[b.jsx("span",{className:"font-mono text-[9px] uppercase tracking-widest text-[#1A1C1E]/40 block",children:"Base Studio"}),b.jsx("span",{className:"font-serif text-base text-[#1A1C1E] mt-0.5 block",children:"Gorakhpur, India"})]}),b.jsxs("div",{children:[b.jsx("span",{className:"font-mono text-[9px] uppercase tracking-widest text-[#1A1C1E]/40 block",children:"Specialization"}),b.jsx("span",{className:"font-serif text-base text-[#1A1C1E] mt-0.5 block",children:"Web & Motion"})]}),b.jsxs("div",{className:"col-span-2 sm:col-span-1",children:[b.jsx("span",{className:"font-mono text-[9px] uppercase tracking-widest text-[#1A1C1E]/40 block",children:"Philosophy"}),b.jsx("span",{className:"font-serif text-base text-[#1A1C1E] mt-0.5 block",children:"Anti-Slop Craft"})]})]}),b.jsx("div",{className:"absolute top-[102%] inset-x-8 h-20 pointer-events-none opacity-25",style:{transform:"scaleY(-0.7)",filter:"blur(3px)",maskImage:"linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)",WebkitMaskImage:"linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)"},children:b.jsx("div",{className:"w-full h-full bg-white/60 rounded-3xl"})})]})})},EM=({scrollProgress:s,onBackToShore:e,onShowToast:n})=>{const[r,a]=rt.useState(!1),c="ashfanansari19@gmail.com",d=()=>{navigator.clipboard.writeText(c),a(!0),n("Email copied to clipboard · Looking forward to building"),setTimeout(()=>a(!1),3e3)},f=s;if(f<.885)return null;const p=mt(f,.885,.945),m=mt(f,.89,.94),_=mt(f,.9,.95),y=mt(f,.905,.955),x=mt(f,.915,.96),S=mt(f,.925,.97),w=mt(f,.935,.975),A=mt(f,.945,.985);return b.jsxs("section",{id:"contact",className:"fixed inset-0 pointer-events-auto flex flex-col justify-between items-center py-20 px-6 z-20 text-white select-none overflow-hidden",style:{opacity:p},children:[b.jsxs("div",{className:"w-full max-w-5xl mx-auto flex justify-between items-center pt-4",style:rn(m,12),children:[b.jsxs("div",{className:"flex items-center space-x-2",children:[b.jsx("span",{className:"w-2 h-2 rounded-full bg-[#F5B81E] animate-pulse"}),b.jsx("span",{className:"font-mono text-xs uppercase tracking-[0.22em] text-[#F5B81E]",children:"05 / The Far Shore"})]}),b.jsx("button",{onClick:e,className:"text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors flex items-center space-x-1",children:b.jsx("span",{children:"↑ Return to Shore"})})]}),b.jsxs("div",{className:"w-full max-w-3xl mx-auto text-center my-auto space-y-6",children:[b.jsx("span",{className:"font-mono text-[11px] uppercase tracking-[0.25em] text-[#F5B81E] block",style:rn(_,10),children:"Arrival · Night Water"}),b.jsx("h2",{className:"font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight bg-gradient-to-r from-[#FDE68A] to-[#FFF3C4] bg-clip-text text-transparent leading-[1.08]",style:rn(y,20),children:"Build with Ashfan."}),b.jsx("p",{className:"max-w-xl mx-auto text-sm sm:text-base text-white/70 font-sans font-light leading-relaxed",style:rn(x,14),children:"Open for select website commissions, motion direction, and interactive product collaborations. Reach out directly or copy the address below."}),b.jsxs("div",{className:"pt-4 flex flex-col sm:flex-row items-center justify-center gap-4",style:rn(S,14),children:[b.jsxs("button",{onClick:d,className:"group px-8 py-4 rounded-full bg-gradient-to-r from-[#F5B81E] to-[#FDE68A] text-[#0A0A0C] font-mono text-xs uppercase tracking-[0.16em] font-semibold hover:brightness-110 active:scale-98 transition-all shadow-[0_0_30px_rgba(245,184,30,0.35)] flex items-center space-x-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white",children:[b.jsx("span",{children:c}),b.jsx("span",{className:"text-[10px] bg-[#0A0A0C]/15 px-2 py-0.5 rounded-full",children:r?"Copied ✓":"Copy"})]}),b.jsx("a",{href:`mailto:${c}`,className:"px-7 py-4 rounded-full border border-white/20 hover:border-white/50 text-white font-mono text-xs uppercase tracking-[0.16em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B81E]",children:"Open Mail Client ↗"})]}),b.jsxs("div",{className:"pt-8 flex items-center justify-center space-x-8 text-xs font-mono uppercase tracking-widest text-white/60",style:rn(w,10),children:[b.jsx("a",{href:"https://github.com/ashfanansari",target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#F5B81E] transition-colors",children:"GitHub"}),b.jsx("a",{href:"https://www.youtube.com/@Unsaid2D",target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#F5B81E] transition-colors",children:"YouTube"}),b.jsx("a",{href:"https://instagram.com/zavine.webs",target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#F5B81E] transition-colors",children:"Instagram"})]})]}),b.jsxs("div",{className:"w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-6 pb-2 text-[10px] font-mono text-white/40 tracking-wider",style:rn(A,8),children:[b.jsx("span",{children:"© 2026 Ashfan Ansari · All Rights Reserved"}),b.jsx("span",{className:"mt-2 sm:mt-0",children:"Gorakhpur, India · The Journey Portfolio"})]})]})},MM=({message:s})=>s?b.jsx("div",{className:"fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-in fade-in slide-in-from-bottom-4 duration-300",children:b.jsxs("div",{className:"px-5 py-2.5 rounded-full bg-[#1A1C1E] text-white border border-white/20 shadow-2xl flex items-center space-x-2.5 text-xs font-mono tracking-wider backdrop-blur-md",children:[b.jsx("span",{className:"w-2 h-2 rounded-full bg-[#F5B81E] animate-pulse"}),b.jsx("span",{children:s})]})}):null,wM=()=>{const s=()=>{if(typeof window<"u"){const A=new URLSearchParams(window.location.search).get("scroll");if(A)return Math.min(1,Math.max(0,parseFloat(A)))}return 0},[e,n]=rt.useState(s),[r,a]=rt.useState(null),[c,d]=rt.useState(null),[f,p]=rt.useState(!1),[m,_]=rt.useState(null),y=rt.useRef(null);rt.useEffect(()=>{let g,I=s(),P=I,N=0,q=P,F=performance.now();const D=()=>{const M=window.scrollY,R=document.documentElement.scrollHeight-window.innerHeight;R>0&&(I=Math.min(1,Math.max(0,M/R)))},G=M=>{const R=I,te=R-P,Z=Math.max(-.12,Math.min(.12,te*7));N+=(Z-N)*(1-Math.exp(-M/.16)),P+=N*M,(te>0&&P>R||te<0&&P<R)&&(P=R,N=0),Math.abs(R-P)<4e-4&&Math.abs(N)<.002&&(P=R,N=0)},pe=M=>{let R=(M-F)/1e3;F=M,R=Math.min(Math.max(R,0),.25);const te=Math.max(1,Math.ceil(R/(1/60))),Z=R/te;for(let de=0;de<te;de++)G(Z);const le=window;le.__journeyProgress=P,Math.abs(P-q)>1e-4&&(q=P,n(P)),g=requestAnimationFrame(pe)};return window.addEventListener("scroll",D,{passive:!0}),I>0?setTimeout(()=>{const M=document.documentElement.scrollHeight-window.innerHeight;window.scrollTo(0,I*M)},50):D(),g=requestAnimationFrame(pe),()=>{window.removeEventListener("scroll",D),cancelAnimationFrame(g)}},[]);const x=rt.useCallback(w=>{_(w),setTimeout(()=>{_(null)},3500)},[]),S=w=>{const A=document.documentElement.scrollHeight-window.innerHeight;let v=0;w==="hero"?v=0:w==="projects"?v=.32*A:w==="channels"?v=.58*A:w==="services"?v=.74*A:w==="about"?v=.86*A:w==="contact"&&(v=.96*A),window.scrollTo({top:v,behavior:"smooth"})};return b.jsxs("div",{ref:y,className:"relative min-h-[1150vh] w-full selection:bg-[#F5B81E] selection:text-[#1A1C1E]",children:[b.jsx(eM,{scrollProgress:e,activeProjectTint:r}),b.jsx(tM,{onNavigate:S,scrollProgress:e}),b.jsx(iM,{scrollProgress:e}),b.jsx(hM,{onExploreWork:()=>S("projects"),scrollProgress:e}),b.jsx(pM,{scrollProgress:e,onSelectProject:w=>d(w),onActiveProjectChange:w=>a(w),onToggleFullIndex:()=>p(!0),isFullIndexOpen:f}),b.jsx(_M,{scrollProgress:e}),b.jsx(yM,{scrollProgress:e}),b.jsx(SM,{scrollProgress:e}),b.jsx(EM,{scrollProgress:e,onBackToShore:()=>S("hero"),onShowToast:x}),b.jsx(mM,{project:c,onClose:()=>d(null)}),b.jsx(gM,{isOpen:f,onClose:()=>p(!1),onSelectProject:w=>d(w)}),b.jsx(MM,{message:m})]})};X0.createRoot(document.getElementById("root")).render(b.jsx(z0.StrictMode,{children:b.jsx(wM,{})}));
