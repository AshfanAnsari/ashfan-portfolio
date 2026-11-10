(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function ym(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var fu={exports:{}},bo={},du={exports:{}},at={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function I0(){if(mp)return at;mp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function y(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function v(D,ie,Pe){this.props=D,this.context=ie,this.refs=R,this.updater=Pe||S}v.prototype.isReactComponent={},v.prototype.setState=function(D,ie){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,ie,"setState")},v.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function g(){}g.prototype=v.prototype;function I(D,ie,Pe){this.props=D,this.context=ie,this.refs=R,this.updater=Pe||S}var P=I.prototype=new g;P.constructor=I,T(P,v.prototype),P.isPureReactComponent=!0;var F=Array.isArray,Y=Object.prototype.hasOwnProperty,k={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function V(D,ie,Pe){var K,ue={},_e=null,Se=null;if(ie!=null)for(K in ie.ref!==void 0&&(Se=ie.ref),ie.key!==void 0&&(_e=""+ie.key),ie)Y.call(ie,K)&&!N.hasOwnProperty(K)&&(ue[K]=ie[K]);var Ae=arguments.length-2;if(Ae===1)ue.children=Pe;else if(1<Ae){for(var Le=Array(Ae),et=0;et<Ae;et++)Le[et]=arguments[et+2];ue.children=Le}if(D&&D.defaultProps)for(K in Ae=D.defaultProps,Ae)ue[K]===void 0&&(ue[K]=Ae[K]);return{$$typeof:s,type:D,key:_e,ref:Se,props:ue,_owner:k.current}}function le(D,ie){return{$$typeof:s,type:D.type,key:ie,ref:D.ref,props:D.props,_owner:D._owner}}function E(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function A(D){var ie={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Pe){return ie[Pe]})}var ne=/\/+/g;function Z(D,ie){return typeof D=="object"&&D!==null&&D.key!=null?A(""+D.key):ie.toString(36)}function oe(D,ie,Pe,K,ue){var _e=typeof D;(_e==="undefined"||_e==="boolean")&&(D=null);var Se=!1;if(D===null)Se=!0;else switch(_e){case"string":case"number":Se=!0;break;case"object":switch(D.$$typeof){case s:case e:Se=!0}}if(Se)return Se=D,ue=ue(Se),D=K===""?"."+Z(Se,0):K,F(ue)?(Pe="",D!=null&&(Pe=D.replace(ne,"$&/")+"/"),oe(ue,ie,Pe,"",function(et){return et})):ue!=null&&(E(ue)&&(ue=le(ue,Pe+(!ue.key||Se&&Se.key===ue.key?"":(""+ue.key).replace(ne,"$&/")+"/")+D)),ie.push(ue)),1;if(Se=0,K=K===""?".":K+":",F(D))for(var Ae=0;Ae<D.length;Ae++){_e=D[Ae];var Le=K+Z(_e,Ae);Se+=oe(_e,ie,Pe,Le,ue)}else if(Le=y(D),typeof Le=="function")for(D=Le.call(D),Ae=0;!(_e=D.next()).done;)_e=_e.value,Le=K+Z(_e,Ae++),Se+=oe(_e,ie,Pe,Le,ue);else if(_e==="object")throw ie=String(D),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return Se}function de(D,ie,Pe){if(D==null)return D;var K=[],ue=0;return oe(D,K,"","",function(_e){return ie.call(Pe,_e,ue++)}),K}function re(D){if(D._status===-1){var ie=D._result;ie=ie(),ie.then(function(Pe){(D._status===0||D._status===-1)&&(D._status=1,D._result=Pe)},function(Pe){(D._status===0||D._status===-1)&&(D._status=2,D._result=Pe)}),D._status===-1&&(D._status=0,D._result=ie)}if(D._status===1)return D._result.default;throw D._result}var ce={current:null},z={transition:null},fe={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:z,ReactCurrentOwner:k};function J(){throw Error("act(...) is not supported in production builds of React.")}return at.Children={map:de,forEach:function(D,ie,Pe){de(D,function(){ie.apply(this,arguments)},Pe)},count:function(D){var ie=0;return de(D,function(){ie++}),ie},toArray:function(D){return de(D,function(ie){return ie})||[]},only:function(D){if(!E(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},at.Component=v,at.Fragment=n,at.Profiler=a,at.PureComponent=I,at.StrictMode=r,at.Suspense=p,at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,at.act=J,at.cloneElement=function(D,ie,Pe){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var K=T({},D.props),ue=D.key,_e=D.ref,Se=D._owner;if(ie!=null){if(ie.ref!==void 0&&(_e=ie.ref,Se=k.current),ie.key!==void 0&&(ue=""+ie.key),D.type&&D.type.defaultProps)var Ae=D.type.defaultProps;for(Le in ie)Y.call(ie,Le)&&!N.hasOwnProperty(Le)&&(K[Le]=ie[Le]===void 0&&Ae!==void 0?Ae[Le]:ie[Le])}var Le=arguments.length-2;if(Le===1)K.children=Pe;else if(1<Le){Ae=Array(Le);for(var et=0;et<Le;et++)Ae[et]=arguments[et+2];K.children=Ae}return{$$typeof:s,type:D.type,key:ue,ref:_e,props:K,_owner:Se}},at.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:c,_context:D},D.Consumer=D},at.createElement=V,at.createFactory=function(D){var ie=V.bind(null,D);return ie.type=D,ie},at.createRef=function(){return{current:null}},at.forwardRef=function(D){return{$$typeof:d,render:D}},at.isValidElement=E,at.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:re}},at.memo=function(D,ie){return{$$typeof:m,type:D,compare:ie===void 0?null:ie}},at.startTransition=function(D){var ie=z.transition;z.transition={};try{D()}finally{z.transition=ie}},at.unstable_act=J,at.useCallback=function(D,ie){return ce.current.useCallback(D,ie)},at.useContext=function(D){return ce.current.useContext(D)},at.useDebugValue=function(){},at.useDeferredValue=function(D){return ce.current.useDeferredValue(D)},at.useEffect=function(D,ie){return ce.current.useEffect(D,ie)},at.useId=function(){return ce.current.useId()},at.useImperativeHandle=function(D,ie,Pe){return ce.current.useImperativeHandle(D,ie,Pe)},at.useInsertionEffect=function(D,ie){return ce.current.useInsertionEffect(D,ie)},at.useLayoutEffect=function(D,ie){return ce.current.useLayoutEffect(D,ie)},at.useMemo=function(D,ie){return ce.current.useMemo(D,ie)},at.useReducer=function(D,ie,Pe){return ce.current.useReducer(D,ie,Pe)},at.useRef=function(D){return ce.current.useRef(D)},at.useState=function(D){return ce.current.useState(D)},at.useSyncExternalStore=function(D,ie,Pe){return ce.current.useSyncExternalStore(D,ie,Pe)},at.useTransition=function(){return ce.current.useTransition()},at.version="18.3.1",at}var gp;function Ff(){return gp||(gp=1,du.exports=I0()),du.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function U0(){if(vp)return bo;vp=1;var s=Ff(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var _,x={},y=null,S=null;m!==void 0&&(y=""+m),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!c.hasOwnProperty(_)&&(x[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)x[_]===void 0&&(x[_]=p[_]);return{$$typeof:e,type:d,key:y,ref:S,props:x,_owner:a.current}}return bo.Fragment=n,bo.jsx=f,bo.jsxs=f,bo}var _p;function F0(){return _p||(_p=1,fu.exports=U0()),fu.exports}var b=F0(),ot=Ff();const k0=ym(ot);var $a={},hu={exports:{}},wn={},pu={exports:{}},mu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function O0(){return xp||(xp=1,(function(s){function e(z,fe){var J=z.length;z.push(fe);e:for(;0<J;){var D=J-1>>>1,ie=z[D];if(0<a(ie,fe))z[D]=fe,z[J]=ie,J=D;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var fe=z[0],J=z.pop();if(J!==fe){z[0]=J;e:for(var D=0,ie=z.length,Pe=ie>>>1;D<Pe;){var K=2*(D+1)-1,ue=z[K],_e=K+1,Se=z[_e];if(0>a(ue,J))_e<ie&&0>a(Se,ue)?(z[D]=Se,z[_e]=J,D=_e):(z[D]=ue,z[K]=J,D=K);else if(_e<ie&&0>a(Se,J))z[D]=Se,z[_e]=J,D=_e;else break e}}return fe}function a(z,fe){var J=z.sortIndex-fe.sortIndex;return J!==0?J:z.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],_=1,x=null,y=3,S=!1,T=!1,R=!1,v=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(z){for(var fe=n(m);fe!==null;){if(fe.callback===null)r(m);else if(fe.startTime<=z)r(m),fe.sortIndex=fe.expirationTime,e(p,fe);else break;fe=n(m)}}function F(z){if(R=!1,P(z),!T)if(n(p)!==null)T=!0,re(Y);else{var fe=n(m);fe!==null&&ce(F,fe.startTime-z)}}function Y(z,fe){T=!1,R&&(R=!1,g(V),V=-1),S=!0;var J=y;try{for(P(fe),x=n(p);x!==null&&(!(x.expirationTime>fe)||z&&!A());){var D=x.callback;if(typeof D=="function"){x.callback=null,y=x.priorityLevel;var ie=D(x.expirationTime<=fe);fe=s.unstable_now(),typeof ie=="function"?x.callback=ie:x===n(p)&&r(p),P(fe)}else r(p);x=n(p)}if(x!==null)var Pe=!0;else{var K=n(m);K!==null&&ce(F,K.startTime-fe),Pe=!1}return Pe}finally{x=null,y=J,S=!1}}var k=!1,N=null,V=-1,le=5,E=-1;function A(){return!(s.unstable_now()-E<le)}function ne(){if(N!==null){var z=s.unstable_now();E=z;var fe=!0;try{fe=N(!0,z)}finally{fe?Z():(k=!1,N=null)}}else k=!1}var Z;if(typeof I=="function")Z=function(){I(ne)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,de=oe.port2;oe.port1.onmessage=ne,Z=function(){de.postMessage(null)}}else Z=function(){v(ne,0)};function re(z){N=z,k||(k=!0,Z())}function ce(z,fe){V=v(function(){z(s.unstable_now())},fe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,re(Y))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(z){switch(y){case 1:case 2:case 3:var fe=3;break;default:fe=y}var J=y;y=fe;try{return z()}finally{y=J}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,fe){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=y;y=z;try{return fe()}finally{y=J}},s.unstable_scheduleCallback=function(z,fe,J){var D=s.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?D+J:D):J=D,z){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=J+ie,z={id:_++,callback:fe,priorityLevel:z,startTime:J,expirationTime:ie,sortIndex:-1},J>D?(z.sortIndex=J,e(m,z),n(p)===null&&z===n(m)&&(R?(g(V),V=-1):R=!0,ce(F,J-D))):(z.sortIndex=ie,e(p,z),T||S||(T=!0,re(Y))),z},s.unstable_shouldYield=A,s.unstable_wrapCallback=function(z){var fe=y;return function(){var J=y;y=fe;try{return z.apply(this,arguments)}finally{y=J}}}})(mu)),mu}var yp;function B0(){return yp||(yp=1,pu.exports=O0()),pu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function z0(){if(Sp)return wn;Sp=1;var s=Ff(),e=B0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function y(t){return p.call(x,t)?!0:p.call(_,t)?!1:m.test(t)?x[t]=!0:(_[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,o,l,u,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,I);v[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,I);v[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,I);v[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,o,l){var u=v.hasOwnProperty(i)?v[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,u,l)&&(o=null),l||u===null?y(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):u.mustUseProperty?t[u.propertyName]=o===null?u.type===3?!1:"":o:(i=u.attributeName,l=u.attributeNamespace,o===null?t.removeAttribute(i):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var F=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Y=Symbol.for("react.element"),k=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),le=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),A=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),z=Symbol.iterator;function fe(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var J=Object.assign,D;function ie(t){if(D===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+t}var Pe=!1;function K(t,i){if(!t||Pe)return"";Pe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var l=te}Reflect.construct(t,[],i)}else{try{i.call()}catch(te){l=te}t.call(i.prototype)}else{try{throw Error()}catch(te){l=te}t()}}catch(te){if(te&&l&&typeof te.stack=="string"){for(var u=te.stack.split(`
`),h=l.stack.split(`
`),M=u.length-1,U=h.length-1;1<=M&&0<=U&&u[M]!==h[U];)U--;for(;1<=M&&0<=U;M--,U--)if(u[M]!==h[U]){if(M!==1||U!==1)do if(M--,U--,0>U||u[M]!==h[U]){var O=`
`+u[M].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=M&&0<=U);break}}}finally{Pe=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ie(t):""}function ue(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=K(t.type,!1),t;case 11:return t=K(t.type.render,!1),t;case 1:return t=K(t.type,!0),t;default:return""}}function _e(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case k:return"Portal";case le:return"Profiler";case V:return"StrictMode";case Z:return"Suspense";case oe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case A:return(t.displayName||"Context")+".Consumer";case E:return(t._context.displayName||"Context")+".Provider";case ne:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case de:return i=t.displayName||null,i!==null?i:_e(t.type)||"Memo";case re:i=t._payload,t=t._init;try{return _e(t(i))}catch{}}return null}function Se(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _e(i);case 8:return i===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Le(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function et(t){var i=Le(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function mt(t){t._valueTracker||(t._valueTracker=et(t))}function ct(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Le(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function B(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sn(t,i){var o=i.checked;return J({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function lt(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Ae(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function dt(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function Ke(t,i){dt(t,i);var o=Ae(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Qe(t,i.type,o):i.hasOwnProperty("defaultValue")&&Qe(t,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Tt(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Qe(t,i,o){(i!=="number"||B(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var L=Array.isArray;function w(t,i,o,l){if(t=t.options,i){i={};for(var u=0;u<o.length;u++)i["$"+o[u]]=!0;for(o=0;o<t.length;o++)u=i.hasOwnProperty("$"+t[o].value),t[o].selected!==u&&(t[o].selected=u),u&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Ae(o),i=null,u=0;u<t.length;u++){if(t[u].value===o){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function $(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return J({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pe(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(L(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Ae(o)}}function xe(t,i){var o=Ae(i.value),l=Ae(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function he(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Xe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ce(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Xe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fe,ht=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,u){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,u)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Fe=Fe||document.createElement("div"),Fe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Fe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ee(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var ke={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tt=["Webkit","ms","Moz","O"];Object.keys(ke).forEach(function(t){tt.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ke[i]=ke[t]})});function Je(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ke.hasOwnProperty(t)&&ke[t]?(""+i).trim():i+"px"}function Be(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,u=Je(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,u):t[o]=u}}var ut=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function it(t,i){if(i){if(ut[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Et(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var G=null;function Ne(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ae=null,me=null,Re=null;function Ie(t){if(t=po(t)){if(typeof ae!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ua(i),ae(t.stateNode,t.type,i))}}function ft(t){me?Re?Re.push(t):Re=[t]:me=t}function kt(){if(me){var t=me,i=Re;if(Re=me=null,Ie(t),i)for(t=0;t<i.length;t++)Ie(i[t])}}function on(t,i){return t(i)}function pt(){}var Zt=!1;function On(t,i,o){if(Zt)return t(i,o);Zt=!0;try{return on(t,i,o)}finally{Zt=!1,(me!==null||Re!==null)&&(pt(),kt())}}function zi(t,i){var o=t.stateNode;if(o===null)return null;var l=ua(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var $r=!1;if(d)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){$r=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{$r=!1}function qs(t,i,o,l,u,h,M,U,O){var te=Array.prototype.slice.call(arguments,3);try{i.apply(o,te)}catch(ve){this.onError(ve)}}var Hi=!1,xr=null,vi=!1,Kr=null,Zr={onError:function(t){Hi=!0,xr=t}};function jo(t,i,o,l,u,h,M,U,O){Hi=!1,xr=null,qs.apply(Zr,arguments)}function Xo(t,i,o,l,u,h,M,U,O){if(jo.apply(this,arguments),Hi){if(Hi){var te=xr;Hi=!1,xr=null}else throw Error(n(198));vi||(vi=!0,Kr=te)}}function _i(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Yo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function qo(t){if(_i(t)!==t)throw Error(n(188))}function C(t){var i=t.alternate;if(!i){if(i=_i(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var u=o.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){o=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===o)return qo(u),t;if(h===l)return qo(u),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=u,l=h;else{for(var M=!1,U=u.child;U;){if(U===o){M=!0,o=u,l=h;break}if(U===l){M=!0,l=u,o=h;break}U=U.sibling}if(!M){for(U=h.child;U;){if(U===o){M=!0,o=h,l=u;break}if(U===l){M=!0,l=h,o=u;break}U=U.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function W(t){return t=C(t),t!==null?Q(t):null}function Q(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Q(t);if(i!==null)return i;t=t.sibling}return null}var ee=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,we=e.unstable_shouldYield,De=e.unstable_requestPaint,Te=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,$e=e.unstable_ImmediatePriority,Ze=e.unstable_UserBlockingPriority,We=e.unstable_NormalPriority,St=e.unstable_LowPriority,At=e.unstable_IdlePriority,bt=null,Ut=null;function vt(t){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(bt,t,void 0,(t.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Pn,Xt=Math.log,_t=Math.LN2;function Pn(t){return t>>>=0,t===0?32:31-(Xt(t)/_t|0)|0}var qn=64,Qt=4194304;function xi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pt(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,u=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var U=M&~u;U!==0?l=xi(U):(h&=M,h!==0&&(l=xi(h)))}else M=o&~u,M!==0?l=xi(M):h!==0&&(l=xi(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&u)===0&&(u=l&-l,h=i&-i,u>=h||u===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-Oe(i),u=1<<o,l|=t[o],i&=~u;return l}function li(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $s(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-Oe(h),U=1<<M,O=u[M];O===-1?((U&o)===0||(U&l)!==0)&&(u[M]=li(U,i)):O<=i&&(t.expiredLanes|=U),h&=~U}}function cn(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Qr(){var t=qn;return qn<<=1,(qn&4194240)===0&&(qn=64),t}function Ks(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Vi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Oe(i),t[i]=o}function tg(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var u=31-Oe(o),h=1<<u;i[u]=0,l[u]=-1,t[u]=-1,o&=~h}}function Il(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-Oe(o),u=1<<l;u&i|t[l]&i&&(t[l]|=i),o&=~u}}var wt=0;function Yf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var qf,Ul,$f,Kf,Zf,Fl=!1,$o=[],Gi=null,Wi=null,ji=null,Zs=new Map,Qs=new Map,Xi=[],ng="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qf(t,i){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":Zs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qs.delete(i.pointerId)}}function Js(t,i,o,l,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},i!==null&&(i=po(i),i!==null&&Ul(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function ig(t,i,o,l,u){switch(i){case"focusin":return Gi=Js(Gi,t,i,o,l,u),!0;case"dragenter":return Wi=Js(Wi,t,i,o,l,u),!0;case"mouseover":return ji=Js(ji,t,i,o,l,u),!0;case"pointerover":var h=u.pointerId;return Zs.set(h,Js(Zs.get(h)||null,t,i,o,l,u)),!0;case"gotpointercapture":return h=u.pointerId,Qs.set(h,Js(Qs.get(h)||null,t,i,o,l,u)),!0}return!1}function Jf(t){var i=yr(t.target);if(i!==null){var o=_i(i);if(o!==null){if(i=o.tag,i===13){if(i=Yo(o),i!==null){t.blockedOn=i,Zf(t.priority,function(){$f(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ko(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Ol(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);G=l,o.target.dispatchEvent(l),G=null}else return i=po(o),i!==null&&Ul(i),t.blockedOn=o,!1;i.shift()}return!0}function ed(t,i,o){Ko(t)&&o.delete(i)}function rg(){Fl=!1,Gi!==null&&Ko(Gi)&&(Gi=null),Wi!==null&&Ko(Wi)&&(Wi=null),ji!==null&&Ko(ji)&&(ji=null),Zs.forEach(ed),Qs.forEach(ed)}function eo(t,i){t.blockedOn===i&&(t.blockedOn=null,Fl||(Fl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,rg)))}function to(t){function i(u){return eo(u,t)}if(0<$o.length){eo($o[0],t);for(var o=1;o<$o.length;o++){var l=$o[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Gi!==null&&eo(Gi,t),Wi!==null&&eo(Wi,t),ji!==null&&eo(ji,t),Zs.forEach(i),Qs.forEach(i),o=0;o<Xi.length;o++)l=Xi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Xi.length&&(o=Xi[0],o.blockedOn===null);)Jf(o),o.blockedOn===null&&Xi.shift()}var Jr=F.ReactCurrentBatchConfig,Zo=!0;function sg(t,i,o,l){var u=wt,h=Jr.transition;Jr.transition=null;try{wt=1,kl(t,i,o,l)}finally{wt=u,Jr.transition=h}}function og(t,i,o,l){var u=wt,h=Jr.transition;Jr.transition=null;try{wt=4,kl(t,i,o,l)}finally{wt=u,Jr.transition=h}}function kl(t,i,o,l){if(Zo){var u=Ol(t,i,o,l);if(u===null)tc(t,i,l,Qo,o),Qf(t,l);else if(ig(u,t,i,o,l))l.stopPropagation();else if(Qf(t,l),i&4&&-1<ng.indexOf(t)){for(;u!==null;){var h=po(u);if(h!==null&&qf(h),h=Ol(t,i,o,l),h===null&&tc(t,i,l,Qo,o),h===u)break;u=h}u!==null&&l.stopPropagation()}else tc(t,i,l,null,o)}}var Qo=null;function Ol(t,i,o,l){if(Qo=null,t=Ne(l),t=yr(t),t!==null)if(i=_i(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Yo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Qo=t,null}function td(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case $e:return 1;case Ze:return 4;case We:case St:return 16;case At:return 536870912;default:return 16}default:return 16}}var Yi=null,Bl=null,Jo=null;function nd(){if(Jo)return Jo;var t,i=Bl,o=i.length,l,u="value"in Yi?Yi.value:Yi.textContent,h=u.length;for(t=0;t<o&&i[t]===u[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===u[h-l];l++);return Jo=u.slice(t,1<l?1-l:void 0)}function ea(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ta(){return!0}function id(){return!1}function Ln(t){function i(o,l,u,h,M){this._reactName=o,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(o=t[U],this[U]=o?o(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ta:id,this.isPropagationStopped=id,this}return J(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),i}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=Ln(es),no=J({},es,{view:0,detail:0}),ag=Ln(no),Hl,Vl,io,na=J({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(Hl=t.screenX-io.screenX,Vl=t.screenY-io.screenY):Vl=Hl=0,io=t),Hl)},movementY:function(t){return"movementY"in t?t.movementY:Vl}}),rd=Ln(na),lg=J({},na,{dataTransfer:0}),cg=Ln(lg),ug=J({},no,{relatedTarget:0}),Gl=Ln(ug),fg=J({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),dg=Ln(fg),hg=J({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pg=Ln(hg),mg=J({},es,{data:0}),sd=Ln(mg),gg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_g={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=_g[t])?!!i[t]:!1}function Wl(){return xg}var yg=J({},no,{key:function(t){if(t.key){var i=gg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ea(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wl,charCode:function(t){return t.type==="keypress"?ea(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ea(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sg=Ln(yg),Eg=J({},na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),od=Ln(Eg),Mg=J({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wl}),wg=Ln(Mg),Tg=J({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ag=Ln(Tg),Cg=J({},na,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Rg=Ln(Cg),bg=[9,13,27,32],jl=d&&"CompositionEvent"in window,ro=null;d&&"documentMode"in document&&(ro=document.documentMode);var Pg=d&&"TextEvent"in window&&!ro,ad=d&&(!jl||ro&&8<ro&&11>=ro),ld=" ",cd=!1;function ud(t,i){switch(t){case"keyup":return bg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function Lg(t,i){switch(t){case"compositionend":return fd(i);case"keypress":return i.which!==32?null:(cd=!0,ld);case"textInput":return t=i.data,t===ld&&cd?null:t;default:return null}}function Ng(t,i){if(ts)return t==="compositionend"||!jl&&ud(t,i)?(t=nd(),Jo=Bl=Yi=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ad&&i.locale!=="ko"?null:i.data;default:return null}}var Dg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Dg[t.type]:i==="textarea"}function hd(t,i,o,l){ft(l),i=aa(i,"onChange"),0<i.length&&(o=new zl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var so=null,oo=null;function Ig(t){Ld(t,0)}function ia(t){var i=os(t);if(ct(i))return t}function Ug(t,i){if(t==="change")return i}var pd=!1;if(d){var Xl;if(d){var Yl="oninput"in document;if(!Yl){var md=document.createElement("div");md.setAttribute("oninput","return;"),Yl=typeof md.oninput=="function"}Xl=Yl}else Xl=!1;pd=Xl&&(!document.documentMode||9<document.documentMode)}function gd(){so&&(so.detachEvent("onpropertychange",vd),oo=so=null)}function vd(t){if(t.propertyName==="value"&&ia(oo)){var i=[];hd(i,oo,t,Ne(t)),On(Ig,i)}}function Fg(t,i,o){t==="focusin"?(gd(),so=i,oo=o,so.attachEvent("onpropertychange",vd)):t==="focusout"&&gd()}function kg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ia(oo)}function Og(t,i){if(t==="click")return ia(i)}function Bg(t,i){if(t==="input"||t==="change")return ia(i)}function zg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var $n=typeof Object.is=="function"?Object.is:zg;function ao(t,i){if($n(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var u=o[l];if(!p.call(i,u)||!$n(t[u],i[u]))return!1}return!0}function _d(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xd(t,i){var o=_d(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=_d(o)}}function yd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?yd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Sd(){for(var t=window,i=B();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=B(t.document)}return i}function ql(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Hg(t){var i=Sd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&yd(o.ownerDocument.documentElement,o)){if(l!==null&&ql(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=o.textContent.length,h=Math.min(l.start,u);l=l.end===void 0?h:Math.min(l.end,u),!t.extend&&h>l&&(u=l,l=h,h=u),u=xd(o,h);var M=xd(o,l);u&&M&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Vg=d&&"documentMode"in document&&11>=document.documentMode,ns=null,$l=null,lo=null,Kl=!1;function Ed(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Kl||ns==null||ns!==B(l)||(l=ns,"selectionStart"in l&&ql(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),lo&&ao(lo,l)||(lo=l,l=aa($l,"onSelect"),0<l.length&&(i=new zl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=ns)))}function ra(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var is={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},Zl={},Md={};d&&(Md=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function sa(t){if(Zl[t])return Zl[t];if(!is[t])return t;var i=is[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Md)return Zl[t]=i[o];return t}var wd=sa("animationend"),Td=sa("animationiteration"),Ad=sa("animationstart"),Cd=sa("transitionend"),Rd=new Map,bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(t,i){Rd.set(t,i),c(i,[t])}for(var Ql=0;Ql<bd.length;Ql++){var Jl=bd[Ql],Gg=Jl.toLowerCase(),Wg=Jl[0].toUpperCase()+Jl.slice(1);qi(Gg,"on"+Wg)}qi(wd,"onAnimationEnd"),qi(Td,"onAnimationIteration"),qi(Ad,"onAnimationStart"),qi("dblclick","onDoubleClick"),qi("focusin","onFocus"),qi("focusout","onBlur"),qi(Cd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jg=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function Pd(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Xo(l,i,void 0,t),t.currentTarget=null}function Ld(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],u=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var U=l[M],O=U.instance,te=U.currentTarget;if(U=U.listener,O!==h&&u.isPropagationStopped())break e;Pd(u,U,te),h=O}else for(M=0;M<l.length;M++){if(U=l[M],O=U.instance,te=U.currentTarget,U=U.listener,O!==h&&u.isPropagationStopped())break e;Pd(u,U,te),h=O}}}if(vi)throw t=Kr,vi=!1,Kr=null,t}function Nt(t,i){var o=i[ac];o===void 0&&(o=i[ac]=new Set);var l=t+"__bubble";o.has(l)||(Nd(i,t,2,!1),o.add(l))}function ec(t,i,o){var l=0;i&&(l|=4),Nd(o,t,l,i)}var oa="_reactListening"+Math.random().toString(36).slice(2);function uo(t){if(!t[oa]){t[oa]=!0,r.forEach(function(o){o!=="selectionchange"&&(jg.has(o)||ec(o,!1,t),ec(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[oa]||(i[oa]=!0,ec("selectionchange",!1,i))}}function Nd(t,i,o,l){switch(td(i)){case 1:var u=sg;break;case 4:u=og;break;default:u=kl}o=u.bind(null,i,o,t),u=void 0,!$r||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,o,{capture:!0,passive:u}):t.addEventListener(i,o,!0):u!==void 0?t.addEventListener(i,o,{passive:u}):t.addEventListener(i,o,!1)}function tc(t,i,o,l,u){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var U=l.stateNode.containerInfo;if(U===u||U.nodeType===8&&U.parentNode===u)break;if(M===4)for(M=l.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===u||O.nodeType===8&&O.parentNode===u))return;M=M.return}for(;U!==null;){if(M=yr(U),M===null)return;if(O=M.tag,O===5||O===6){l=h=M;continue e}U=U.parentNode}}l=l.return}On(function(){var te=h,ve=Ne(o),ye=[];e:{var ge=Rd.get(t);if(ge!==void 0){var Ue=zl,He=t;switch(t){case"keypress":if(ea(o)===0)break e;case"keydown":case"keyup":Ue=Sg;break;case"focusin":He="focus",Ue=Gl;break;case"focusout":He="blur",Ue=Gl;break;case"beforeblur":case"afterblur":Ue=Gl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=cg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=wg;break;case wd:case Td:case Ad:Ue=dg;break;case Cd:Ue=Ag;break;case"scroll":Ue=ag;break;case"wheel":Ue=Rg;break;case"copy":case"cut":case"paste":Ue=pg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=od}var Ve=(i&4)!==0,Ht=!Ve&&t==="scroll",X=Ve?ge!==null?ge+"Capture":null:ge;Ve=[];for(var H=te,q;H!==null;){q=H;var Me=q.stateNode;if(q.tag===5&&Me!==null&&(q=Me,X!==null&&(Me=zi(H,X),Me!=null&&Ve.push(fo(H,Me,q)))),Ht)break;H=H.return}0<Ve.length&&(ge=new Ue(ge,He,null,o,ve),ye.push({event:ge,listeners:Ve}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Ue=t==="mouseout"||t==="pointerout",ge&&o!==G&&(He=o.relatedTarget||o.fromElement)&&(yr(He)||He[yi]))break e;if((Ue||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ue?(He=o.relatedTarget||o.toElement,Ue=te,He=He?yr(He):null,He!==null&&(Ht=_i(He),He!==Ht||He.tag!==5&&He.tag!==6)&&(He=null)):(Ue=null,He=te),Ue!==He)){if(Ve=rd,Me="onMouseLeave",X="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=od,Me="onPointerLeave",X="onPointerEnter",H="pointer"),Ht=Ue==null?ge:os(Ue),q=He==null?ge:os(He),ge=new Ve(Me,H+"leave",Ue,o,ve),ge.target=Ht,ge.relatedTarget=q,Me=null,yr(ve)===te&&(Ve=new Ve(X,H+"enter",He,o,ve),Ve.target=q,Ve.relatedTarget=Ht,Me=Ve),Ht=Me,Ue&&He)t:{for(Ve=Ue,X=He,H=0,q=Ve;q;q=rs(q))H++;for(q=0,Me=X;Me;Me=rs(Me))q++;for(;0<H-q;)Ve=rs(Ve),H--;for(;0<q-H;)X=rs(X),q--;for(;H--;){if(Ve===X||X!==null&&Ve===X.alternate)break t;Ve=rs(Ve),X=rs(X)}Ve=null}else Ve=null;Ue!==null&&Dd(ye,ge,Ue,Ve,!1),He!==null&&Ht!==null&&Dd(ye,Ht,He,Ve,!0)}}e:{if(ge=te?os(te):window,Ue=ge.nodeName&&ge.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ge.type==="file")var je=Ug;else if(dd(ge))if(pd)je=Bg;else{je=kg;var Ye=Fg}else(Ue=ge.nodeName)&&Ue.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=Og);if(je&&(je=je(t,te))){hd(ye,je,o,ve);break e}Ye&&Ye(t,ge,te),t==="focusout"&&(Ye=ge._wrapperState)&&Ye.controlled&&ge.type==="number"&&Qe(ge,"number",ge.value)}switch(Ye=te?os(te):window,t){case"focusin":(dd(Ye)||Ye.contentEditable==="true")&&(ns=Ye,$l=te,lo=null);break;case"focusout":lo=$l=ns=null;break;case"mousedown":Kl=!0;break;case"contextmenu":case"mouseup":case"dragend":Kl=!1,Ed(ye,o,ve);break;case"selectionchange":if(Vg)break;case"keydown":case"keyup":Ed(ye,o,ve)}var qe;if(jl)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ts?ud(t,o)&&(nt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(ad&&o.locale!=="ko"&&(ts||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ts&&(qe=nd()):(Yi=ve,Bl="value"in Yi?Yi.value:Yi.textContent,ts=!0)),Ye=aa(te,nt),0<Ye.length&&(nt=new sd(nt,t,null,o,ve),ye.push({event:nt,listeners:Ye}),qe?nt.data=qe:(qe=fd(o),qe!==null&&(nt.data=qe)))),(qe=Pg?Lg(t,o):Ng(t,o))&&(te=aa(te,"onBeforeInput"),0<te.length&&(ve=new sd("onBeforeInput","beforeinput",null,o,ve),ye.push({event:ve,listeners:te}),ve.data=qe))}Ld(ye,i)})}function fo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function aa(t,i){for(var o=i+"Capture",l=[];t!==null;){var u=t,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=zi(t,o),h!=null&&l.unshift(fo(t,h,u)),h=zi(t,i),h!=null&&l.push(fo(t,h,u))),t=t.return}return l}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dd(t,i,o,l,u){for(var h=i._reactName,M=[];o!==null&&o!==l;){var U=o,O=U.alternate,te=U.stateNode;if(O!==null&&O===l)break;U.tag===5&&te!==null&&(U=te,u?(O=zi(o,h),O!=null&&M.unshift(fo(o,O,U))):u||(O=zi(o,h),O!=null&&M.push(fo(o,O,U)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var Xg=/\r\n?/g,Yg=/\u0000|\uFFFD/g;function Id(t){return(typeof t=="string"?t:""+t).replace(Xg,`
`).replace(Yg,"")}function la(t,i,o){if(i=Id(i),Id(t)!==i&&o)throw Error(n(425))}function ca(){}var nc=null,ic=null;function rc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var sc=typeof setTimeout=="function"?setTimeout:void 0,qg=typeof clearTimeout=="function"?clearTimeout:void 0,Ud=typeof Promise=="function"?Promise:void 0,$g=typeof queueMicrotask=="function"?queueMicrotask:typeof Ud<"u"?function(t){return Ud.resolve(null).then(t).catch(Kg)}:sc;function Kg(t){setTimeout(function(){throw t})}function oc(t,i){var o=i,l=0;do{var u=o.nextSibling;if(t.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(l===0){t.removeChild(u),to(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=u}while(o);to(i)}function $i(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Fd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var ss=Math.random().toString(36).slice(2),ci="__reactFiber$"+ss,ho="__reactProps$"+ss,yi="__reactContainer$"+ss,ac="__reactEvents$"+ss,Zg="__reactListeners$"+ss,Qg="__reactHandles$"+ss;function yr(t){var i=t[ci];if(i)return i;for(var o=t.parentNode;o;){if(i=o[yi]||o[ci]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Fd(t);t!==null;){if(o=t[ci])return o;t=Fd(t)}return i}t=o,o=t.parentNode}return null}function po(t){return t=t[ci]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ua(t){return t[ho]||null}var lc=[],as=-1;function Ki(t){return{current:t}}function Dt(t){0>as||(t.current=lc[as],lc[as]=null,as--)}function Lt(t,i){as++,lc[as]=t.current,t.current=i}var Zi={},un=Ki(Zi),xn=Ki(!1),Sr=Zi;function ls(t,i){var o=t.type.contextTypes;if(!o)return Zi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in o)u[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function yn(t){return t=t.childContextTypes,t!=null}function fa(){Dt(xn),Dt(un)}function kd(t,i,o){if(un.current!==Zi)throw Error(n(168));Lt(un,i),Lt(xn,o)}function Od(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(n(108,Se(t)||"Unknown",u));return J({},o,l)}function da(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,Sr=un.current,Lt(un,t),Lt(xn,xn.current),!0}function Bd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Od(t,i,Sr),l.__reactInternalMemoizedMergedChildContext=t,Dt(xn),Dt(un),Lt(un,t)):Dt(xn),Lt(xn,o)}var Si=null,ha=!1,cc=!1;function zd(t){Si===null?Si=[t]:Si.push(t)}function Jg(t){ha=!0,zd(t)}function Qi(){if(!cc&&Si!==null){cc=!0;var t=0,i=wt;try{var o=Si;for(wt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Si=null,ha=!1}catch(u){throw Si!==null&&(Si=Si.slice(t+1)),ee($e,Qi),u}finally{wt=i,cc=!1}}return null}var cs=[],us=0,pa=null,ma=0,Bn=[],zn=0,Er=null,Ei=1,Mi="";function Mr(t,i){cs[us++]=ma,cs[us++]=pa,pa=t,ma=i}function Hd(t,i,o){Bn[zn++]=Ei,Bn[zn++]=Mi,Bn[zn++]=Er,Er=t;var l=Ei;t=Mi;var u=32-Oe(l)-1;l&=~(1<<u),o+=1;var h=32-Oe(i)+u;if(30<h){var M=u-u%5;h=(l&(1<<M)-1).toString(32),l>>=M,u-=M,Ei=1<<32-Oe(i)+u|o<<u|l,Mi=h+t}else Ei=1<<h|o<<u|l,Mi=t}function uc(t){t.return!==null&&(Mr(t,1),Hd(t,1,0))}function fc(t){for(;t===pa;)pa=cs[--us],cs[us]=null,ma=cs[--us],cs[us]=null;for(;t===Er;)Er=Bn[--zn],Bn[zn]=null,Mi=Bn[--zn],Bn[zn]=null,Ei=Bn[--zn],Bn[zn]=null}var Nn=null,Dn=null,Ft=!1,Kn=null;function Vd(t,i){var o=Wn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Gd(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Nn=t,Dn=$i(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Nn=t,Dn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Er!==null?{id:Ei,overflow:Mi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Wn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Nn=t,Dn=null,!0):!1;default:return!1}}function dc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hc(t){if(Ft){var i=Dn;if(i){var o=i;if(!Gd(t,i)){if(dc(t))throw Error(n(418));i=$i(o.nextSibling);var l=Nn;i&&Gd(t,i)?Vd(l,o):(t.flags=t.flags&-4097|2,Ft=!1,Nn=t)}}else{if(dc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,Nn=t}}}function Wd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function ga(t){if(t!==Nn)return!1;if(!Ft)return Wd(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!rc(t.type,t.memoizedProps)),i&&(i=Dn)){if(dc(t))throw jd(),Error(n(418));for(;i;)Vd(t,i),i=$i(i.nextSibling)}if(Wd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Dn=$i(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Dn=null}}else Dn=Nn?$i(t.stateNode.nextSibling):null;return!0}function jd(){for(var t=Dn;t;)t=$i(t.nextSibling)}function fs(){Dn=Nn=null,Ft=!1}function pc(t){Kn===null?Kn=[t]:Kn.push(t)}var e0=F.ReactCurrentBatchConfig;function mo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var u=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var U=u.refs;M===null?delete U[h]:U[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function va(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Xd(t){var i=t._init;return i(t._payload)}function Yd(t){function i(X,H){if(t){var q=X.deletions;q===null?(X.deletions=[H],X.flags|=16):q.push(H)}}function o(X,H){if(!t)return null;for(;H!==null;)i(X,H),H=H.sibling;return null}function l(X,H){for(X=new Map;H!==null;)H.key!==null?X.set(H.key,H):X.set(H.index,H),H=H.sibling;return X}function u(X,H){return X=or(X,H),X.index=0,X.sibling=null,X}function h(X,H,q){return X.index=q,t?(q=X.alternate,q!==null?(q=q.index,q<H?(X.flags|=2,H):q):(X.flags|=2,H)):(X.flags|=1048576,H)}function M(X){return t&&X.alternate===null&&(X.flags|=2),X}function U(X,H,q,Me){return H===null||H.tag!==6?(H=su(q,X.mode,Me),H.return=X,H):(H=u(H,q),H.return=X,H)}function O(X,H,q,Me){var je=q.type;return je===N?ve(X,H,q.props.children,Me,q.key):H!==null&&(H.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===re&&Xd(je)===H.type)?(Me=u(H,q.props),Me.ref=mo(X,H,q),Me.return=X,Me):(Me=Ha(q.type,q.key,q.props,null,X.mode,Me),Me.ref=mo(X,H,q),Me.return=X,Me)}function te(X,H,q,Me){return H===null||H.tag!==4||H.stateNode.containerInfo!==q.containerInfo||H.stateNode.implementation!==q.implementation?(H=ou(q,X.mode,Me),H.return=X,H):(H=u(H,q.children||[]),H.return=X,H)}function ve(X,H,q,Me,je){return H===null||H.tag!==7?(H=Lr(q,X.mode,Me,je),H.return=X,H):(H=u(H,q),H.return=X,H)}function ye(X,H,q){if(typeof H=="string"&&H!==""||typeof H=="number")return H=su(""+H,X.mode,q),H.return=X,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case Y:return q=Ha(H.type,H.key,H.props,null,X.mode,q),q.ref=mo(X,null,H),q.return=X,q;case k:return H=ou(H,X.mode,q),H.return=X,H;case re:var Me=H._init;return ye(X,Me(H._payload),q)}if(L(H)||fe(H))return H=Lr(H,X.mode,q,null),H.return=X,H;va(X,H)}return null}function ge(X,H,q,Me){var je=H!==null?H.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return je!==null?null:U(X,H,""+q,Me);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case Y:return q.key===je?O(X,H,q,Me):null;case k:return q.key===je?te(X,H,q,Me):null;case re:return je=q._init,ge(X,H,je(q._payload),Me)}if(L(q)||fe(q))return je!==null?null:ve(X,H,q,Me,null);va(X,q)}return null}function Ue(X,H,q,Me,je){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return X=X.get(q)||null,U(H,X,""+Me,je);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case Y:return X=X.get(Me.key===null?q:Me.key)||null,O(H,X,Me,je);case k:return X=X.get(Me.key===null?q:Me.key)||null,te(H,X,Me,je);case re:var Ye=Me._init;return Ue(X,H,q,Ye(Me._payload),je)}if(L(Me)||fe(Me))return X=X.get(q)||null,ve(H,X,Me,je,null);va(H,Me)}return null}function He(X,H,q,Me){for(var je=null,Ye=null,qe=H,nt=H=0,tn=null;qe!==null&&nt<q.length;nt++){qe.index>nt?(tn=qe,qe=null):tn=qe.sibling;var xt=ge(X,qe,q[nt],Me);if(xt===null){qe===null&&(qe=tn);break}t&&qe&&xt.alternate===null&&i(X,qe),H=h(xt,H,nt),Ye===null?je=xt:Ye.sibling=xt,Ye=xt,qe=tn}if(nt===q.length)return o(X,qe),Ft&&Mr(X,nt),je;if(qe===null){for(;nt<q.length;nt++)qe=ye(X,q[nt],Me),qe!==null&&(H=h(qe,H,nt),Ye===null?je=qe:Ye.sibling=qe,Ye=qe);return Ft&&Mr(X,nt),je}for(qe=l(X,qe);nt<q.length;nt++)tn=Ue(qe,X,nt,q[nt],Me),tn!==null&&(t&&tn.alternate!==null&&qe.delete(tn.key===null?nt:tn.key),H=h(tn,H,nt),Ye===null?je=tn:Ye.sibling=tn,Ye=tn);return t&&qe.forEach(function(ar){return i(X,ar)}),Ft&&Mr(X,nt),je}function Ve(X,H,q,Me){var je=fe(q);if(typeof je!="function")throw Error(n(150));if(q=je.call(q),q==null)throw Error(n(151));for(var Ye=je=null,qe=H,nt=H=0,tn=null,xt=q.next();qe!==null&&!xt.done;nt++,xt=q.next()){qe.index>nt?(tn=qe,qe=null):tn=qe.sibling;var ar=ge(X,qe,xt.value,Me);if(ar===null){qe===null&&(qe=tn);break}t&&qe&&ar.alternate===null&&i(X,qe),H=h(ar,H,nt),Ye===null?je=ar:Ye.sibling=ar,Ye=ar,qe=tn}if(xt.done)return o(X,qe),Ft&&Mr(X,nt),je;if(qe===null){for(;!xt.done;nt++,xt=q.next())xt=ye(X,xt.value,Me),xt!==null&&(H=h(xt,H,nt),Ye===null?je=xt:Ye.sibling=xt,Ye=xt);return Ft&&Mr(X,nt),je}for(qe=l(X,qe);!xt.done;nt++,xt=q.next())xt=Ue(qe,X,nt,xt.value,Me),xt!==null&&(t&&xt.alternate!==null&&qe.delete(xt.key===null?nt:xt.key),H=h(xt,H,nt),Ye===null?je=xt:Ye.sibling=xt,Ye=xt);return t&&qe.forEach(function(D0){return i(X,D0)}),Ft&&Mr(X,nt),je}function Ht(X,H,q,Me){if(typeof q=="object"&&q!==null&&q.type===N&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case Y:e:{for(var je=q.key,Ye=H;Ye!==null;){if(Ye.key===je){if(je=q.type,je===N){if(Ye.tag===7){o(X,Ye.sibling),H=u(Ye,q.props.children),H.return=X,X=H;break e}}else if(Ye.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===re&&Xd(je)===Ye.type){o(X,Ye.sibling),H=u(Ye,q.props),H.ref=mo(X,Ye,q),H.return=X,X=H;break e}o(X,Ye);break}else i(X,Ye);Ye=Ye.sibling}q.type===N?(H=Lr(q.props.children,X.mode,Me,q.key),H.return=X,X=H):(Me=Ha(q.type,q.key,q.props,null,X.mode,Me),Me.ref=mo(X,H,q),Me.return=X,X=Me)}return M(X);case k:e:{for(Ye=q.key;H!==null;){if(H.key===Ye)if(H.tag===4&&H.stateNode.containerInfo===q.containerInfo&&H.stateNode.implementation===q.implementation){o(X,H.sibling),H=u(H,q.children||[]),H.return=X,X=H;break e}else{o(X,H);break}else i(X,H);H=H.sibling}H=ou(q,X.mode,Me),H.return=X,X=H}return M(X);case re:return Ye=q._init,Ht(X,H,Ye(q._payload),Me)}if(L(q))return He(X,H,q,Me);if(fe(q))return Ve(X,H,q,Me);va(X,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,H!==null&&H.tag===6?(o(X,H.sibling),H=u(H,q),H.return=X,X=H):(o(X,H),H=su(q,X.mode,Me),H.return=X,X=H),M(X)):o(X,H)}return Ht}var ds=Yd(!0),qd=Yd(!1),_a=Ki(null),xa=null,hs=null,mc=null;function gc(){mc=hs=xa=null}function vc(t){var i=_a.current;Dt(_a),t._currentValue=i}function _c(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ps(t,i){xa=t,mc=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Sn=!0),t.firstContext=null)}function Hn(t){var i=t._currentValue;if(mc!==t)if(t={context:t,memoizedValue:i,next:null},hs===null){if(xa===null)throw Error(n(308));hs=t,xa.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return i}var wr=null;function xc(t){wr===null?wr=[t]:wr.push(t)}function $d(t,i,o,l){var u=i.interleaved;return u===null?(o.next=o,xc(i)):(o.next=u.next,u.next=o),i.interleaved=o,wi(t,l)}function wi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Ji=!1;function yc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function er(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(gt&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,wi(t,o)}return u=l.interleaved,u===null?(i.next=i,xc(l)):(i.next=u.next,u.next=i),l.interleaved=i,wi(t,o)}function ya(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Il(t,o)}}function Zd(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var u=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?u=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?u=h=i:h=h.next=i}else u=h=i;o={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Sa(t,i,o,l){var u=t.updateQueue;Ji=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,U=u.shared.pending;if(U!==null){u.shared.pending=null;var O=U,te=O.next;O.next=null,M===null?h=te:M.next=te,M=O;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,U=ve.lastBaseUpdate,U!==M&&(U===null?ve.firstBaseUpdate=te:U.next=te,ve.lastBaseUpdate=O))}if(h!==null){var ye=u.baseState;M=0,ve=te=O=null,U=h;do{var ge=U.lane,Ue=U.eventTime;if((l&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Ue,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var He=t,Ve=U;switch(ge=i,Ue=o,Ve.tag){case 1:if(He=Ve.payload,typeof He=="function"){ye=He.call(Ue,ye,ge);break e}ye=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ve.payload,ge=typeof He=="function"?He.call(Ue,ye,ge):He,ge==null)break e;ye=J({},ye,ge);break e;case 2:Ji=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,ge=u.effects,ge===null?u.effects=[U]:ge.push(U))}else Ue={eventTime:Ue,lane:ge,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ve===null?(te=ve=Ue,O=ye):ve=ve.next=Ue,M|=ge;if(U=U.next,U===null){if(U=u.shared.pending,U===null)break;ge=U,U=ge.next,ge.next=null,u.lastBaseUpdate=ge,u.shared.pending=null}}while(!0);if(ve===null&&(O=ye),u.baseState=O,u.firstBaseUpdate=te,u.lastBaseUpdate=ve,i=u.shared.interleaved,i!==null){u=i;do M|=u.lane,u=u.next;while(u!==i)}else h===null&&(u.shared.lanes=0);Cr|=M,t.lanes=M,t.memoizedState=ye}}function Qd(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],u=l.callback;if(u!==null){if(l.callback=null,l=o,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var go={},ui=Ki(go),vo=Ki(go),_o=Ki(go);function Tr(t){if(t===go)throw Error(n(174));return t}function Sc(t,i){switch(Lt(_o,i),Lt(vo,t),Lt(ui,go),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ce(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ce(i,t)}Dt(ui),Lt(ui,i)}function ms(){Dt(ui),Dt(vo),Dt(_o)}function Jd(t){Tr(_o.current);var i=Tr(ui.current),o=Ce(i,t.type);i!==o&&(Lt(vo,t),Lt(ui,o))}function Ec(t){vo.current===t&&(Dt(ui),Dt(vo))}var Ot=Ki(0);function Ea(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Mc=[];function wc(){for(var t=0;t<Mc.length;t++)Mc[t]._workInProgressVersionPrimary=null;Mc.length=0}var Ma=F.ReactCurrentDispatcher,Tc=F.ReactCurrentBatchConfig,Ar=0,Bt=null,Yt=null,Jt=null,wa=!1,xo=!1,yo=0,t0=0;function fn(){throw Error(n(321))}function Ac(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!$n(t[o],i[o]))return!1;return!0}function Cc(t,i,o,l,u,h){if(Ar=h,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ma.current=t===null||t.memoizedState===null?s0:o0,t=o(l,u),xo){h=0;do{if(xo=!1,yo=0,25<=h)throw Error(n(301));h+=1,Jt=Yt=null,i.updateQueue=null,Ma.current=a0,t=o(l,u)}while(xo)}if(Ma.current=Ca,i=Yt!==null&&Yt.next!==null,Ar=0,Jt=Yt=Bt=null,wa=!1,i)throw Error(n(300));return t}function Rc(){var t=yo!==0;return yo=0,t}function fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?Bt.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function Vn(){if(Yt===null){var t=Bt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var i=Jt===null?Bt.memoizedState:Jt.next;if(i!==null)Jt=i,Yt=t;else{if(t===null)throw Error(n(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Jt===null?Bt.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function So(t,i){return typeof i=="function"?i(t):i}function bc(t){var i=Vn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Yt,u=l.baseQueue,h=o.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}l.baseQueue=u=h,o.pending=null}if(u!==null){h=u.next,l=l.baseState;var U=M=null,O=null,te=h;do{var ve=te.lane;if((Ar&ve)===ve)O!==null&&(O=O.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),l=te.hasEagerState?te.eagerState:t(l,te.action);else{var ye={lane:ve,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};O===null?(U=O=ye,M=l):O=O.next=ye,Bt.lanes|=ve,Cr|=ve}te=te.next}while(te!==null&&te!==h);O===null?M=l:O.next=U,$n(l,i.memoizedState)||(Sn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=O,o.lastRenderedState=l}if(t=o.interleaved,t!==null){u=t;do h=u.lane,Bt.lanes|=h,Cr|=h,u=u.next;while(u!==t)}else u===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Pc(t){var i=Vn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,u=o.pending,h=i.memoizedState;if(u!==null){o.pending=null;var M=u=u.next;do h=t(h,M.action),M=M.next;while(M!==u);$n(h,i.memoizedState)||(Sn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function eh(){}function th(t,i){var o=Bt,l=Vn(),u=i(),h=!$n(l.memoizedState,u);if(h&&(l.memoizedState=u,Sn=!0),l=l.queue,Lc(rh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||Jt!==null&&Jt.memoizedState.tag&1){if(o.flags|=2048,Eo(9,ih.bind(null,o,l,u,i),void 0,null),en===null)throw Error(n(349));(Ar&30)!==0||nh(o,i,u)}return u}function nh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function ih(t,i,o,l){i.value=o,i.getSnapshot=l,sh(i)&&oh(t)}function rh(t,i,o){return o(function(){sh(i)&&oh(t)})}function sh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!$n(t,o)}catch{return!0}}function oh(t){var i=wi(t,1);i!==null&&ei(i,t,1,-1)}function ah(t){var i=fi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:t},i.queue=t,t=t.dispatch=r0.bind(null,Bt,t),[i.memoizedState,t]}function Eo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function lh(){return Vn().memoizedState}function Ta(t,i,o,l){var u=fi();Bt.flags|=t,u.memoizedState=Eo(1|i,o,void 0,l===void 0?null:l)}function Aa(t,i,o,l){var u=Vn();l=l===void 0?null:l;var h=void 0;if(Yt!==null){var M=Yt.memoizedState;if(h=M.destroy,l!==null&&Ac(l,M.deps)){u.memoizedState=Eo(i,o,h,l);return}}Bt.flags|=t,u.memoizedState=Eo(1|i,o,h,l)}function ch(t,i){return Ta(8390656,8,t,i)}function Lc(t,i){return Aa(2048,8,t,i)}function uh(t,i){return Aa(4,2,t,i)}function fh(t,i){return Aa(4,4,t,i)}function dh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function hh(t,i,o){return o=o!=null?o.concat([t]):null,Aa(4,4,dh.bind(null,i,t),o)}function Nc(){}function ph(t,i){var o=Vn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Ac(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function mh(t,i){var o=Vn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Ac(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function gh(t,i,o){return(Ar&21)===0?(t.baseState&&(t.baseState=!1,Sn=!0),t.memoizedState=o):($n(o,i)||(o=Qr(),Bt.lanes|=o,Cr|=o,t.baseState=!0),i)}function n0(t,i){var o=wt;wt=o!==0&&4>o?o:4,t(!0);var l=Tc.transition;Tc.transition={};try{t(!1),i()}finally{wt=o,Tc.transition=l}}function vh(){return Vn().memoizedState}function i0(t,i,o){var l=rr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},_h(t))xh(i,o);else if(o=$d(t,i,o,l),o!==null){var u=vn();ei(o,t,l,u),yh(o,i,l)}}function r0(t,i,o){var l=rr(t),u={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(_h(t))xh(i,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,U=h(M,o);if(u.hasEagerState=!0,u.eagerState=U,$n(U,M)){var O=i.interleaved;O===null?(u.next=u,xc(i)):(u.next=O.next,O.next=u),i.interleaved=u;return}}catch{}finally{}o=$d(t,i,u,l),o!==null&&(u=vn(),ei(o,t,l,u),yh(o,i,l))}}function _h(t){var i=t.alternate;return t===Bt||i!==null&&i===Bt}function xh(t,i){xo=wa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function yh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Il(t,o)}}var Ca={readContext:Hn,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},s0={readContext:Hn,useCallback:function(t,i){return fi().memoizedState=[t,i===void 0?null:i],t},useContext:Hn,useEffect:ch,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ta(4194308,4,dh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ta(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ta(4,2,t,i)},useMemo:function(t,i){var o=fi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=fi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=i0.bind(null,Bt,t),[l.memoizedState,t]},useRef:function(t){var i=fi();return t={current:t},i.memoizedState=t},useState:ah,useDebugValue:Nc,useDeferredValue:function(t){return fi().memoizedState=t},useTransition:function(){var t=ah(!1),i=t[0];return t=n0.bind(null,t[1]),fi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Bt,u=fi();if(Ft){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),en===null)throw Error(n(349));(Ar&30)!==0||nh(l,i,o)}u.memoizedState=o;var h={value:o,getSnapshot:i};return u.queue=h,ch(rh.bind(null,l,h,t),[t]),l.flags|=2048,Eo(9,ih.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=fi(),i=en.identifierPrefix;if(Ft){var o=Mi,l=Ei;o=(l&~(1<<32-Oe(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=yo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=t0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},o0={readContext:Hn,useCallback:ph,useContext:Hn,useEffect:Lc,useImperativeHandle:hh,useInsertionEffect:uh,useLayoutEffect:fh,useMemo:mh,useReducer:bc,useRef:lh,useState:function(){return bc(So)},useDebugValue:Nc,useDeferredValue:function(t){var i=Vn();return gh(i,Yt.memoizedState,t)},useTransition:function(){var t=bc(So)[0],i=Vn().memoizedState;return[t,i]},useMutableSource:eh,useSyncExternalStore:th,useId:vh,unstable_isNewReconciler:!1},a0={readContext:Hn,useCallback:ph,useContext:Hn,useEffect:Lc,useImperativeHandle:hh,useInsertionEffect:uh,useLayoutEffect:fh,useMemo:mh,useReducer:Pc,useRef:lh,useState:function(){return Pc(So)},useDebugValue:Nc,useDeferredValue:function(t){var i=Vn();return Yt===null?i.memoizedState=t:gh(i,Yt.memoizedState,t)},useTransition:function(){var t=Pc(So)[0],i=Vn().memoizedState;return[t,i]},useMutableSource:eh,useSyncExternalStore:th,useId:vh,unstable_isNewReconciler:!1};function Zn(t,i){if(t&&t.defaultProps){i=J({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Dc(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:J({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ra={isMounted:function(t){return(t=t._reactInternals)?_i(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=vn(),u=rr(t),h=Ti(l,u);h.payload=i,o!=null&&(h.callback=o),i=er(t,h,u),i!==null&&(ei(i,t,u,l),ya(i,t,u))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=vn(),u=rr(t),h=Ti(l,u);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=er(t,h,u),i!==null&&(ei(i,t,u,l),ya(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=vn(),l=rr(t),u=Ti(o,l);u.tag=2,i!=null&&(u.callback=i),i=er(t,u,l),i!==null&&(ei(i,t,l,o),ya(i,t,l))}};function Sh(t,i,o,l,u,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!ao(o,l)||!ao(u,h):!0}function Eh(t,i,o){var l=!1,u=Zi,h=i.contextType;return typeof h=="object"&&h!==null?h=Hn(h):(u=yn(i)?Sr:un.current,l=i.contextTypes,h=(l=l!=null)?ls(t,u):Zi),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ra,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=h),i}function Mh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Ra.enqueueReplaceState(i,i.state,null)}function Ic(t,i,o,l){var u=t.stateNode;u.props=o,u.state=t.memoizedState,u.refs={},yc(t);var h=i.contextType;typeof h=="object"&&h!==null?u.context=Hn(h):(h=yn(i)?Sr:un.current,u.context=ls(t,h)),u.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Dc(t,i,h,o),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Ra.enqueueReplaceState(u,u.state,null),Sa(t,o,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function gs(t,i){try{var o="",l=i;do o+=ue(l),l=l.return;while(l);var u=o}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:u,digest:null}}function Uc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Fc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var l0=typeof WeakMap=="function"?WeakMap:Map;function wh(t,i,o){o=Ti(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Ua||(Ua=!0,Zc=l),Fc(t,i)},o}function Th(t,i,o){o=Ti(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;o.payload=function(){return l(u)},o.callback=function(){Fc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Fc(t,i),typeof l!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Ah(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new l0;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(o)||(u.add(o),t=E0.bind(null,t,i,o),i.then(t,t))}function Ch(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Rh(t,i,o,l,u){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ti(-1,1),i.tag=2,er(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var c0=F.ReactCurrentOwner,Sn=!1;function gn(t,i,o,l){i.child=t===null?qd(i,null,o,l):ds(i,t.child,o,l)}function bh(t,i,o,l,u){o=o.render;var h=i.ref;return ps(i,u),l=Cc(t,i,o,l,h,u),o=Rc(),t!==null&&!Sn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Ai(t,i,u)):(Ft&&o&&uc(i),i.flags|=1,gn(t,i,l,u),i.child)}function Ph(t,i,o,l,u){if(t===null){var h=o.type;return typeof h=="function"&&!ru(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Lh(t,i,h,l,u)):(t=Ha(o.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&u)===0){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:ao,o(M,l)&&t.ref===i.ref)return Ai(t,i,u)}return i.flags|=1,t=or(h,l),t.ref=i.ref,t.return=i,i.child=t}function Lh(t,i,o,l,u){if(t!==null){var h=t.memoizedProps;if(ao(h,l)&&t.ref===i.ref)if(Sn=!1,i.pendingProps=l=h,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Sn=!0);else return i.lanes=t.lanes,Ai(t,i,u)}return kc(t,i,o,l,u)}function Nh(t,i,o){var l=i.pendingProps,u=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(_s,In),In|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Lt(_s,In),In|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Lt(_s,In),In|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Lt(_s,In),In|=l;return gn(t,i,u,o),i.child}function Dh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function kc(t,i,o,l,u){var h=yn(o)?Sr:un.current;return h=ls(i,h),ps(i,u),o=Cc(t,i,o,l,h,u),l=Rc(),t!==null&&!Sn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Ai(t,i,u)):(Ft&&l&&uc(i),i.flags|=1,gn(t,i,o,u),i.child)}function Ih(t,i,o,l,u){if(yn(o)){var h=!0;da(i)}else h=!1;if(ps(i,u),i.stateNode===null)Pa(t,i),Eh(i,o,l),Ic(i,o,l,u),l=!0;else if(t===null){var M=i.stateNode,U=i.memoizedProps;M.props=U;var O=M.context,te=o.contextType;typeof te=="object"&&te!==null?te=Hn(te):(te=yn(o)?Sr:un.current,te=ls(i,te));var ve=o.getDerivedStateFromProps,ye=typeof ve=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==l||O!==te)&&Mh(i,M,l,te),Ji=!1;var ge=i.memoizedState;M.state=ge,Sa(i,l,M,u),O=i.memoizedState,U!==l||ge!==O||xn.current||Ji?(typeof ve=="function"&&(Dc(i,o,ve,l),O=i.memoizedState),(U=Ji||Sh(i,o,U,l,ge,O,te))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),M.props=l,M.state=O,M.context=te,l=U):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,Kd(t,i),U=i.memoizedProps,te=i.type===i.elementType?U:Zn(i.type,U),M.props=te,ye=i.pendingProps,ge=M.context,O=o.contextType,typeof O=="object"&&O!==null?O=Hn(O):(O=yn(o)?Sr:un.current,O=ls(i,O));var Ue=o.getDerivedStateFromProps;(ve=typeof Ue=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==ye||ge!==O)&&Mh(i,M,l,O),Ji=!1,ge=i.memoizedState,M.state=ge,Sa(i,l,M,u);var He=i.memoizedState;U!==ye||ge!==He||xn.current||Ji?(typeof Ue=="function"&&(Dc(i,o,Ue,l),He=i.memoizedState),(te=Ji||Sh(i,o,te,l,ge,He,O)||!1)?(ve||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,He,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,He,O)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||U===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=He),M.props=l,M.state=He,M.context=O,l=te):(typeof M.componentDidUpdate!="function"||U===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return Oc(t,i,o,l,h,u)}function Oc(t,i,o,l,u,h){Dh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return u&&Bd(i,o,!1),Ai(t,i,h);l=i.stateNode,c0.current=i;var U=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=ds(i,t.child,null,h),i.child=ds(i,null,U,h)):gn(t,i,U,h),i.memoizedState=l.state,u&&Bd(i,o,!0),i.child}function Uh(t){var i=t.stateNode;i.pendingContext?kd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&kd(t,i.context,!1),Sc(t,i.containerInfo)}function Fh(t,i,o,l,u){return fs(),pc(u),i.flags|=256,gn(t,i,o,l),i.child}var Bc={dehydrated:null,treeContext:null,retryLane:0};function zc(t){return{baseLanes:t,cachePool:null,transitions:null}}function kh(t,i,o){var l=i.pendingProps,u=Ot.current,h=!1,M=(i.flags&128)!==0,U;if((U=M)||(U=t!==null&&t.memoizedState===null?!1:(u&2)!==0),U?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Lt(Ot,u&1),t===null)return hc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Va(M,l,0,null),t=Lr(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=zc(o),i.memoizedState=Bc,t):Hc(i,M));if(u=t.memoizedState,u!==null&&(U=u.dehydrated,U!==null))return u0(t,i,M,l,U,u,o);if(h){h=l.fallback,M=i.mode,u=t.child,U=u.sibling;var O={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=or(u,O),l.subtreeFlags=u.subtreeFlags&14680064),U!==null?h=or(U,h):(h=Lr(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?zc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=Bc,l}return h=t.child,t=h.sibling,l=or(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Hc(t,i){return i=Va({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function ba(t,i,o,l){return l!==null&&pc(l),ds(i,t.child,null,o),t=Hc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function u0(t,i,o,l,u,h,M){if(o)return i.flags&256?(i.flags&=-257,l=Uc(Error(n(422))),ba(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,u=i.mode,l=Va({mode:"visible",children:l.children},u,0,null),h=Lr(h,u,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&ds(i,t.child,null,M),i.child.memoizedState=zc(M),i.memoizedState=Bc,h);if((i.mode&1)===0)return ba(t,i,M,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var U=l.dgst;return l=U,h=Error(n(419)),l=Uc(h,l,void 0),ba(t,i,M,l)}if(U=(M&t.childLanes)!==0,Sn||U){if(l=en,l!==null){switch(M&-M){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|M))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,wi(t,u),ei(l,t,u,-1))}return iu(),l=Uc(Error(n(421))),ba(t,i,M,l)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=M0.bind(null,t),u._reactRetry=i,null):(t=h.treeContext,Dn=$i(u.nextSibling),Nn=i,Ft=!0,Kn=null,t!==null&&(Bn[zn++]=Ei,Bn[zn++]=Mi,Bn[zn++]=Er,Ei=t.id,Mi=t.overflow,Er=i),i=Hc(i,l.children),i.flags|=4096,i)}function Oh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),_c(t.return,i,o)}function Vc(t,i,o,l,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:u}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=u)}function Bh(t,i,o){var l=i.pendingProps,u=l.revealOrder,h=l.tail;if(gn(t,i,l.children,o),l=Ot.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Oh(t,o,i);else if(t.tag===19)Oh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Lt(Ot,l),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(o=i.child,u=null;o!==null;)t=o.alternate,t!==null&&Ea(t)===null&&(u=o),o=o.sibling;o=u,o===null?(u=i.child,i.child=null):(u=o.sibling,o.sibling=null),Vc(i,!1,u,o,h);break;case"backwards":for(o=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&Ea(t)===null){i.child=u;break}t=u.sibling,u.sibling=o,o=u,u=t}Vc(i,!0,o,null,h);break;case"together":Vc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Pa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ai(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Cr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=or(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=or(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function f0(t,i,o){switch(i.tag){case 3:Uh(i),fs();break;case 5:Jd(i);break;case 1:yn(i.type)&&da(i);break;case 4:Sc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;Lt(_a,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Lt(Ot,Ot.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?kh(t,i,o):(Lt(Ot,Ot.current&1),t=Ai(t,i,o),t!==null?t.sibling:null);Lt(Ot,Ot.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Bh(t,i,o);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Lt(Ot,Ot.current),l)break;return null;case 22:case 23:return i.lanes=0,Nh(t,i,o)}return Ai(t,i,o)}var zh,Gc,Hh,Vh;zh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Gc=function(){},Hh=function(t,i,o,l){var u=t.memoizedProps;if(u!==l){t=i.stateNode,Tr(ui.current);var h=null;switch(o){case"input":u=sn(t,u),l=sn(t,l),h=[];break;case"select":u=J({},u,{value:void 0}),l=J({},l,{value:void 0}),h=[];break;case"textarea":u=$(t,u),l=$(t,l),h=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ca)}it(o,l);var M;o=null;for(te in u)if(!l.hasOwnProperty(te)&&u.hasOwnProperty(te)&&u[te]!=null)if(te==="style"){var U=u[te];for(M in U)U.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?h||(h=[]):(h=h||[]).push(te,null));for(te in l){var O=l[te];if(U=u!=null?u[te]:void 0,l.hasOwnProperty(te)&&O!==U&&(O!=null||U!=null))if(te==="style")if(U){for(M in U)!U.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in O)O.hasOwnProperty(M)&&U[M]!==O[M]&&(o||(o={}),o[M]=O[M])}else o||(h||(h=[]),h.push(te,o)),o=O;else te==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,U=U?U.__html:void 0,O!=null&&U!==O&&(h=h||[]).push(te,O)):te==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(te,""+O):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(O!=null&&te==="onScroll"&&Nt("scroll",t),h||U===O||(h=[])):(h=h||[]).push(te,O))}o&&(h=h||[]).push("style",o);var te=h;(i.updateQueue=te)&&(i.flags|=4)}},Vh=function(t,i,o,l){o!==l&&(i.flags|=4)};function Mo(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function d0(t,i,o){var l=i.pendingProps;switch(fc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return yn(i.type)&&fa(),dn(i),null;case 3:return l=i.stateNode,ms(),Dt(xn),Dt(un),wc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ga(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Kn!==null&&(eu(Kn),Kn=null))),Gc(t,i),dn(i),null;case 5:Ec(i);var u=Tr(_o.current);if(o=i.type,t!==null&&i.stateNode!=null)Hh(t,i,o,l,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return dn(i),null}if(t=Tr(ui.current),ga(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[ci]=i,l[ho]=h,t=(i.mode&1)!==0,o){case"dialog":Nt("cancel",l),Nt("close",l);break;case"iframe":case"object":case"embed":Nt("load",l);break;case"video":case"audio":for(u=0;u<co.length;u++)Nt(co[u],l);break;case"source":Nt("error",l);break;case"img":case"image":case"link":Nt("error",l),Nt("load",l);break;case"details":Nt("toggle",l);break;case"input":lt(l,h),Nt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Nt("invalid",l);break;case"textarea":pe(l,h),Nt("invalid",l)}it(o,h),u=null;for(var M in h)if(h.hasOwnProperty(M)){var U=h[M];M==="children"?typeof U=="string"?l.textContent!==U&&(h.suppressHydrationWarning!==!0&&la(l.textContent,U,t),u=["children",U]):typeof U=="number"&&l.textContent!==""+U&&(h.suppressHydrationWarning!==!0&&la(l.textContent,U,t),u=["children",""+U]):a.hasOwnProperty(M)&&U!=null&&M==="onScroll"&&Nt("scroll",l)}switch(o){case"input":mt(l),Tt(l,h,!0);break;case"textarea":mt(l),he(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=ca)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xe(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[ci]=i,t[ho]=l,zh(t,i,!1,!1),i.stateNode=t;e:{switch(M=Et(o,l),o){case"dialog":Nt("cancel",t),Nt("close",t),u=l;break;case"iframe":case"object":case"embed":Nt("load",t),u=l;break;case"video":case"audio":for(u=0;u<co.length;u++)Nt(co[u],t);u=l;break;case"source":Nt("error",t),u=l;break;case"img":case"image":case"link":Nt("error",t),Nt("load",t),u=l;break;case"details":Nt("toggle",t),u=l;break;case"input":lt(t,l),u=sn(t,l),Nt("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=J({},l,{value:void 0}),Nt("invalid",t);break;case"textarea":pe(t,l),u=$(t,l),Nt("invalid",t);break;default:u=l}it(o,u),U=u;for(h in U)if(U.hasOwnProperty(h)){var O=U[h];h==="style"?Be(t,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&ht(t,O)):h==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&Ee(t,O):typeof O=="number"&&Ee(t,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?O!=null&&h==="onScroll"&&Nt("scroll",t):O!=null&&P(t,h,O,M))}switch(o){case"input":mt(t),Tt(t,l,!1);break;case"textarea":mt(t),he(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ae(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?w(t,!!l.multiple,h,!1):l.defaultValue!=null&&w(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=ca)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(t&&i.stateNode!=null)Vh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Tr(_o.current),Tr(ui.current),ga(i)){if(l=i.stateNode,o=i.memoizedProps,l[ci]=i,(h=l.nodeValue!==o)&&(t=Nn,t!==null))switch(t.tag){case 3:la(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&la(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[ci]=i,i.stateNode=l}return dn(i),null;case 13:if(Dt(Ot),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&Dn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)jd(),fs(),i.flags|=98560,h=!1;else if(h=ga(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ci]=i}else fs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),h=!1}else Kn!==null&&(eu(Kn),Kn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ot.current&1)!==0?qt===0&&(qt=3):iu())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return ms(),Gc(t,i),t===null&&uo(i.stateNode.containerInfo),dn(i),null;case 10:return vc(i.type._context),dn(i),null;case 17:return yn(i.type)&&fa(),dn(i),null;case 19:if(Dt(Ot),h=i.memoizedState,h===null)return dn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)Mo(h,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Ea(t),M!==null){for(i.flags|=128,Mo(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Lt(Ot,Ot.current&1|2),i.child}t=t.sibling}h.tail!==null&&Te()>xs&&(i.flags|=128,l=!0,Mo(h,!1),i.lanes=4194304)}else{if(!l)if(t=Ea(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Mo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ft)return dn(i),null}else 2*Te()-h.renderingStartTime>xs&&o!==1073741824&&(i.flags|=128,l=!0,Mo(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Te(),i.sibling=null,o=Ot.current,Lt(Ot,l?o&1|2:o&1),i):(dn(i),null);case 22:case 23:return nu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(In&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function h0(t,i){switch(fc(i),i.tag){case 1:return yn(i.type)&&fa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ms(),Dt(xn),Dt(un),wc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Ec(i),null;case 13:if(Dt(Ot),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));fs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Dt(Ot),null;case 4:return ms(),null;case 10:return vc(i.type._context),null;case 22:case 23:return nu(),null;case 24:return null;default:return null}}var La=!1,hn=!1,p0=typeof WeakSet=="function"?WeakSet:Set,ze=null;function vs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){zt(t,i,l)}else o.current=null}function Wc(t,i,o){try{o()}catch(l){zt(t,i,l)}}var Gh=!1;function m0(t,i){if(nc=Zo,t=Sd(),ql(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,U=-1,O=-1,te=0,ve=0,ye=t,ge=null;t:for(;;){for(var Ue;ye!==o||u!==0&&ye.nodeType!==3||(U=M+u),ye!==h||l!==0&&ye.nodeType!==3||(O=M+l),ye.nodeType===3&&(M+=ye.nodeValue.length),(Ue=ye.firstChild)!==null;)ge=ye,ye=Ue;for(;;){if(ye===t)break t;if(ge===o&&++te===u&&(U=M),ge===h&&++ve===l&&(O=M),(Ue=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Ue}o=U===-1||O===-1?null:{start:U,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(ic={focusedElem:t,selectionRange:o},Zo=!1,ze=i;ze!==null;)if(i=ze,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ze=t;else for(;ze!==null;){i=ze;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ve=He.memoizedProps,Ht=He.memoizedState,X=i.stateNode,H=X.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:Zn(i.type,Ve),Ht);X.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var q=i.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Me){zt(i,i.return,Me)}if(t=i.sibling,t!==null){t.return=i.return,ze=t;break}ze=i.return}return He=Gh,Gh=!1,He}function wo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var h=u.destroy;u.destroy=void 0,h!==void 0&&Wc(i,o,h)}u=u.next}while(u!==l)}}function Na(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function jc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Wh(t){var i=t.alternate;i!==null&&(t.alternate=null,Wh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ci],delete i[ho],delete i[ac],delete i[Zg],delete i[Qg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jh(t){return t.tag===5||t.tag===3||t.tag===4}function Xh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ca));else if(l!==4&&(t=t.child,t!==null))for(Xc(t,i,o),t=t.sibling;t!==null;)Xc(t,i,o),t=t.sibling}function Yc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Yc(t,i,o),t=t.sibling;t!==null;)Yc(t,i,o),t=t.sibling}var an=null,Qn=!1;function tr(t,i,o){for(o=o.child;o!==null;)Yh(t,i,o),o=o.sibling}function Yh(t,i,o){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(bt,o)}catch{}switch(o.tag){case 5:hn||vs(o,i);case 6:var l=an,u=Qn;an=null,tr(t,i,o),an=l,Qn=u,an!==null&&(Qn?(t=an,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):an.removeChild(o.stateNode));break;case 18:an!==null&&(Qn?(t=an,o=o.stateNode,t.nodeType===8?oc(t.parentNode,o):t.nodeType===1&&oc(t,o),to(t)):oc(an,o.stateNode));break;case 4:l=an,u=Qn,an=o.stateNode.containerInfo,Qn=!0,tr(t,i,o),an=l,Qn=u;break;case 0:case 11:case 14:case 15:if(!hn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var h=u,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&Wc(o,i,M),u=u.next}while(u!==l)}tr(t,i,o);break;case 1:if(!hn&&(vs(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(U){zt(o,i,U)}tr(t,i,o);break;case 21:tr(t,i,o);break;case 22:o.mode&1?(hn=(l=hn)||o.memoizedState!==null,tr(t,i,o),hn=l):tr(t,i,o);break;default:tr(t,i,o)}}function qh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new p0),i.forEach(function(l){var u=w0.bind(null,t,l);o.has(l)||(o.add(l),l.then(u,u))})}}function Jn(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var u=o[l];try{var h=t,M=i,U=M;e:for(;U!==null;){switch(U.tag){case 5:an=U.stateNode,Qn=!1;break e;case 3:an=U.stateNode.containerInfo,Qn=!0;break e;case 4:an=U.stateNode.containerInfo,Qn=!0;break e}U=U.return}if(an===null)throw Error(n(160));Yh(h,M,u),an=null,Qn=!1;var O=u.alternate;O!==null&&(O.return=null),u.return=null}catch(te){zt(u,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)$h(i,t),i=i.sibling}function $h(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(i,t),di(t),l&4){try{wo(3,t,t.return),Na(3,t)}catch(Ve){zt(t,t.return,Ve)}try{wo(5,t,t.return)}catch(Ve){zt(t,t.return,Ve)}}break;case 1:Jn(i,t),di(t),l&512&&o!==null&&vs(o,o.return);break;case 5:if(Jn(i,t),di(t),l&512&&o!==null&&vs(o,o.return),t.flags&32){var u=t.stateNode;try{Ee(u,"")}catch(Ve){zt(t,t.return,Ve)}}if(l&4&&(u=t.stateNode,u!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,U=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{U==="input"&&h.type==="radio"&&h.name!=null&&dt(u,h),Et(U,M);var te=Et(U,h);for(M=0;M<O.length;M+=2){var ve=O[M],ye=O[M+1];ve==="style"?Be(u,ye):ve==="dangerouslySetInnerHTML"?ht(u,ye):ve==="children"?Ee(u,ye):P(u,ve,ye,te)}switch(U){case"input":Ke(u,h);break;case"textarea":xe(u,h);break;case"select":var ge=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var Ue=h.value;Ue!=null?w(u,!!h.multiple,Ue,!1):ge!==!!h.multiple&&(h.defaultValue!=null?w(u,!!h.multiple,h.defaultValue,!0):w(u,!!h.multiple,h.multiple?[]:"",!1))}u[ho]=h}catch(Ve){zt(t,t.return,Ve)}}break;case 6:if(Jn(i,t),di(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,h=t.memoizedProps;try{u.nodeValue=h}catch(Ve){zt(t,t.return,Ve)}}break;case 3:if(Jn(i,t),di(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{to(i.containerInfo)}catch(Ve){zt(t,t.return,Ve)}break;case 4:Jn(i,t),di(t);break;case 13:Jn(i,t),di(t),u=t.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(Kc=Te())),l&4&&qh(t);break;case 22:if(ve=o!==null&&o.memoizedState!==null,t.mode&1?(hn=(te=hn)||ve,Jn(i,t),hn=te):Jn(i,t),di(t),l&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!ve&&(t.mode&1)!==0)for(ze=t,ve=t.child;ve!==null;){for(ye=ze=ve;ze!==null;){switch(ge=ze,Ue=ge.child,ge.tag){case 0:case 11:case 14:case 15:wo(4,ge,ge.return);break;case 1:vs(ge,ge.return);var He=ge.stateNode;if(typeof He.componentWillUnmount=="function"){l=ge,o=ge.return;try{i=l,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ve){zt(l,o,Ve)}}break;case 5:vs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Qh(ye);continue}}Ue!==null?(Ue.return=ge,ze=Ue):Qh(ye)}ve=ve.sibling}e:for(ve=null,ye=t;;){if(ye.tag===5){if(ve===null){ve=ye;try{u=ye.stateNode,te?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(U=ye.stateNode,O=ye.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,U.style.display=Je("display",M))}catch(Ve){zt(t,t.return,Ve)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=te?"":ye.memoizedProps}catch(Ve){zt(t,t.return,Ve)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:Jn(i,t),di(t),l&4&&qh(t);break;case 21:break;default:Jn(i,t),di(t)}}function di(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(jh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(Ee(u,""),l.flags&=-33);var h=Xh(t);Yc(t,h,u);break;case 3:case 4:var M=l.stateNode.containerInfo,U=Xh(t);Xc(t,U,M);break;default:throw Error(n(161))}}catch(O){zt(t,t.return,O)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function g0(t,i,o){ze=t,Kh(t)}function Kh(t,i,o){for(var l=(t.mode&1)!==0;ze!==null;){var u=ze,h=u.child;if(u.tag===22&&l){var M=u.memoizedState!==null||La;if(!M){var U=u.alternate,O=U!==null&&U.memoizedState!==null||hn;U=La;var te=hn;if(La=M,(hn=O)&&!te)for(ze=u;ze!==null;)M=ze,O=M.child,M.tag===22&&M.memoizedState!==null?Jh(u):O!==null?(O.return=M,ze=O):Jh(u);for(;h!==null;)ze=h,Kh(h),h=h.sibling;ze=u,La=U,hn=te}Zh(t)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,ze=h):Zh(t)}}function Zh(t){for(;ze!==null;){var i=ze;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:hn||Na(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!hn)if(o===null)l.componentDidMount();else{var u=i.elementType===i.type?o.memoizedProps:Zn(i.type,o.memoizedProps);l.componentDidUpdate(u,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Qd(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Qd(i,M,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var ve=te.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&to(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}hn||i.flags&512&&jc(i)}catch(ge){zt(i,i.return,ge)}}if(i===t){ze=null;break}if(o=i.sibling,o!==null){o.return=i.return,ze=o;break}ze=i.return}}function Qh(t){for(;ze!==null;){var i=ze;if(i===t){ze=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ze=o;break}ze=i.return}}function Jh(t){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Na(4,i)}catch(O){zt(i,o,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(O){zt(i,u,O)}}var h=i.return;try{jc(i)}catch(O){zt(i,h,O)}break;case 5:var M=i.return;try{jc(i)}catch(O){zt(i,M,O)}}}catch(O){zt(i,i.return,O)}if(i===t){ze=null;break}var U=i.sibling;if(U!==null){U.return=i.return,ze=U;break}ze=i.return}}var v0=Math.ceil,Da=F.ReactCurrentDispatcher,qc=F.ReactCurrentOwner,Gn=F.ReactCurrentBatchConfig,gt=0,en=null,Gt=null,ln=0,In=0,_s=Ki(0),qt=0,To=null,Cr=0,Ia=0,$c=0,Ao=null,En=null,Kc=0,xs=1/0,Ci=null,Ua=!1,Zc=null,nr=null,Fa=!1,ir=null,ka=0,Co=0,Qc=null,Oa=-1,Ba=0;function vn(){return(gt&6)!==0?Te():Oa!==-1?Oa:Oa=Te()}function rr(t){return(t.mode&1)===0?1:(gt&2)!==0&&ln!==0?ln&-ln:e0.transition!==null?(Ba===0&&(Ba=Qr()),Ba):(t=wt,t!==0||(t=window.event,t=t===void 0?16:td(t.type)),t)}function ei(t,i,o,l){if(50<Co)throw Co=0,Qc=null,Error(n(185));Vi(t,o,l),((gt&2)===0||t!==en)&&(t===en&&((gt&2)===0&&(Ia|=o),qt===4&&sr(t,ln)),Mn(t,l),o===1&&gt===0&&(i.mode&1)===0&&(xs=Te()+500,ha&&Qi()))}function Mn(t,i){var o=t.callbackNode;$s(t,i);var l=Pt(t,t===en?ln:0);if(l===0)o!==null&&j(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&j(o),i===1)t.tag===0?Jg(tp.bind(null,t)):zd(tp.bind(null,t)),$g(function(){(gt&6)===0&&Qi()}),o=null;else{switch(Yf(l)){case 1:o=$e;break;case 4:o=Ze;break;case 16:o=We;break;case 536870912:o=At;break;default:o=We}o=cp(o,ep.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function ep(t,i){if(Oa=-1,Ba=0,(gt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(ys()&&t.callbackNode!==o)return null;var l=Pt(t,t===en?ln:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=za(t,l);else{i=l;var u=gt;gt|=2;var h=ip();(en!==t||ln!==i)&&(Ci=null,xs=Te()+500,br(t,i));do try{y0();break}catch(U){np(t,U)}while(!0);gc(),Da.current=h,gt=u,Gt!==null?i=0:(en=null,ln=0,i=qt)}if(i!==0){if(i===2&&(u=cn(t),u!==0&&(l=u,i=Jc(t,u))),i===1)throw o=To,br(t,0),sr(t,l),Mn(t,Te()),o;if(i===6)sr(t,l);else{if(u=t.current.alternate,(l&30)===0&&!_0(u)&&(i=za(t,l),i===2&&(h=cn(t),h!==0&&(l=h,i=Jc(t,h))),i===1))throw o=To,br(t,0),sr(t,l),Mn(t,Te()),o;switch(t.finishedWork=u,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Pr(t,En,Ci);break;case 3:if(sr(t,l),(l&130023424)===l&&(i=Kc+500-Te(),10<i)){if(Pt(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){vn(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=sc(Pr.bind(null,t,En,Ci),i);break}Pr(t,En,Ci);break;case 4:if(sr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,u=-1;0<l;){var M=31-Oe(l);h=1<<M,M=i[M],M>u&&(u=M),l&=~h}if(l=u,l=Te()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*v0(l/1960))-l,10<l){t.timeoutHandle=sc(Pr.bind(null,t,En,Ci),l);break}Pr(t,En,Ci);break;case 5:Pr(t,En,Ci);break;default:throw Error(n(329))}}}return Mn(t,Te()),t.callbackNode===o?ep.bind(null,t):null}function Jc(t,i){var o=Ao;return t.current.memoizedState.isDehydrated&&(br(t,i).flags|=256),t=za(t,i),t!==2&&(i=En,En=o,i!==null&&eu(i)),t}function eu(t){En===null?En=t:En.push.apply(En,t)}function _0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var u=o[l],h=u.getSnapshot;u=u.value;try{if(!$n(h(),u))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function sr(t,i){for(i&=~$c,i&=~Ia,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Oe(i),l=1<<o;t[o]=-1,i&=~l}}function tp(t){if((gt&6)!==0)throw Error(n(327));ys();var i=Pt(t,0);if((i&1)===0)return Mn(t,Te()),null;var o=za(t,i);if(t.tag!==0&&o===2){var l=cn(t);l!==0&&(i=l,o=Jc(t,l))}if(o===1)throw o=To,br(t,0),sr(t,i),Mn(t,Te()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Pr(t,En,Ci),Mn(t,Te()),null}function tu(t,i){var o=gt;gt|=1;try{return t(i)}finally{gt=o,gt===0&&(xs=Te()+500,ha&&Qi())}}function Rr(t){ir!==null&&ir.tag===0&&(gt&6)===0&&ys();var i=gt;gt|=1;var o=Gn.transition,l=wt;try{if(Gn.transition=null,wt=1,t)return t()}finally{wt=l,Gn.transition=o,gt=i,(gt&6)===0&&Qi()}}function nu(){In=_s.current,Dt(_s)}function br(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,qg(o)),Gt!==null)for(o=Gt.return;o!==null;){var l=o;switch(fc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&fa();break;case 3:ms(),Dt(xn),Dt(un),wc();break;case 5:Ec(l);break;case 4:ms();break;case 13:Dt(Ot);break;case 19:Dt(Ot);break;case 10:vc(l.type._context);break;case 22:case 23:nu()}o=o.return}if(en=t,Gt=t=or(t.current,null),ln=In=i,qt=0,To=null,$c=Ia=Cr=0,En=Ao=null,wr!==null){for(i=0;i<wr.length;i++)if(o=wr[i],l=o.interleaved,l!==null){o.interleaved=null;var u=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=u,l.next=M}o.pending=l}wr=null}return t}function np(t,i){do{var o=Gt;try{if(gc(),Ma.current=Ca,wa){for(var l=Bt.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}wa=!1}if(Ar=0,Jt=Yt=Bt=null,xo=!1,yo=0,qc.current=null,o===null||o.return===null){qt=1,To=i,Gt=null;break}e:{var h=t,M=o.return,U=o,O=i;if(i=ln,U.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var te=O,ve=U,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ue=Ch(M);if(Ue!==null){Ue.flags&=-257,Rh(Ue,M,U,h,i),Ue.mode&1&&Ah(h,te,i),i=Ue,O=te;var He=i.updateQueue;if(He===null){var Ve=new Set;Ve.add(O),i.updateQueue=Ve}else He.add(O);break e}else{if((i&1)===0){Ah(h,te,i),iu();break e}O=Error(n(426))}}else if(Ft&&U.mode&1){var Ht=Ch(M);if(Ht!==null){(Ht.flags&65536)===0&&(Ht.flags|=256),Rh(Ht,M,U,h,i),pc(gs(O,U));break e}}h=O=gs(O,U),qt!==4&&(qt=2),Ao===null?Ao=[h]:Ao.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var X=wh(h,O,i);Zd(h,X);break e;case 1:U=O;var H=h.type,q=h.stateNode;if((h.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(nr===null||!nr.has(q)))){h.flags|=65536,i&=-i,h.lanes|=i;var Me=Th(h,U,i);Zd(h,Me);break e}}h=h.return}while(h!==null)}sp(o)}catch(je){i=je,Gt===o&&o!==null&&(Gt=o=o.return);continue}break}while(!0)}function ip(){var t=Da.current;return Da.current=Ca,t===null?Ca:t}function iu(){(qt===0||qt===3||qt===2)&&(qt=4),en===null||(Cr&268435455)===0&&(Ia&268435455)===0||sr(en,ln)}function za(t,i){var o=gt;gt|=2;var l=ip();(en!==t||ln!==i)&&(Ci=null,br(t,i));do try{x0();break}catch(u){np(t,u)}while(!0);if(gc(),gt=o,Da.current=l,Gt!==null)throw Error(n(261));return en=null,ln=0,qt}function x0(){for(;Gt!==null;)rp(Gt)}function y0(){for(;Gt!==null&&!we();)rp(Gt)}function rp(t){var i=lp(t.alternate,t,In);t.memoizedProps=t.pendingProps,i===null?sp(t):Gt=i,qc.current=null}function sp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=d0(o,i,In),o!==null){Gt=o;return}}else{if(o=h0(o,i),o!==null){o.flags&=32767,Gt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,Gt=null;return}}if(i=i.sibling,i!==null){Gt=i;return}Gt=i=t}while(i!==null);qt===0&&(qt=5)}function Pr(t,i,o){var l=wt,u=Gn.transition;try{Gn.transition=null,wt=1,S0(t,i,o,l)}finally{Gn.transition=u,wt=l}return null}function S0(t,i,o,l){do ys();while(ir!==null);if((gt&6)!==0)throw Error(n(327));o=t.finishedWork;var u=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(tg(t,h),t===en&&(Gt=en=null,ln=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Fa||(Fa=!0,cp(We,function(){return ys(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Gn.transition,Gn.transition=null;var M=wt;wt=1;var U=gt;gt|=4,qc.current=null,m0(t,o),$h(o,t),Hg(ic),Zo=!!nc,ic=nc=null,t.current=o,g0(o),De(),gt=U,wt=M,Gn.transition=h}else t.current=o;if(Fa&&(Fa=!1,ir=t,ka=u),h=t.pendingLanes,h===0&&(nr=null),vt(o.stateNode),Mn(t,Te()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)u=i[o],l(u.value,{componentStack:u.stack,digest:u.digest});if(Ua)throw Ua=!1,t=Zc,Zc=null,t;return(ka&1)!==0&&t.tag!==0&&ys(),h=t.pendingLanes,(h&1)!==0?t===Qc?Co++:(Co=0,Qc=t):Co=0,Qi(),null}function ys(){if(ir!==null){var t=Yf(ka),i=Gn.transition,o=wt;try{if(Gn.transition=null,wt=16>t?16:t,ir===null)var l=!1;else{if(t=ir,ir=null,ka=0,(gt&6)!==0)throw Error(n(331));var u=gt;for(gt|=4,ze=t.current;ze!==null;){var h=ze,M=h.child;if((ze.flags&16)!==0){var U=h.deletions;if(U!==null){for(var O=0;O<U.length;O++){var te=U[O];for(ze=te;ze!==null;){var ve=ze;switch(ve.tag){case 0:case 11:case 15:wo(8,ve,h)}var ye=ve.child;if(ye!==null)ye.return=ve,ze=ye;else for(;ze!==null;){ve=ze;var ge=ve.sibling,Ue=ve.return;if(Wh(ve),ve===te){ze=null;break}if(ge!==null){ge.return=Ue,ze=ge;break}ze=Ue}}}var He=h.alternate;if(He!==null){var Ve=He.child;if(Ve!==null){He.child=null;do{var Ht=Ve.sibling;Ve.sibling=null,Ve=Ht}while(Ve!==null)}}ze=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,ze=M;else e:for(;ze!==null;){if(h=ze,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:wo(9,h,h.return)}var X=h.sibling;if(X!==null){X.return=h.return,ze=X;break e}ze=h.return}}var H=t.current;for(ze=H;ze!==null;){M=ze;var q=M.child;if((M.subtreeFlags&2064)!==0&&q!==null)q.return=M,ze=q;else e:for(M=H;ze!==null;){if(U=ze,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Na(9,U)}}catch(je){zt(U,U.return,je)}if(U===M){ze=null;break e}var Me=U.sibling;if(Me!==null){Me.return=U.return,ze=Me;break e}ze=U.return}}if(gt=u,Qi(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(bt,t)}catch{}l=!0}return l}finally{wt=o,Gn.transition=i}}return!1}function op(t,i,o){i=gs(o,i),i=wh(t,i,1),t=er(t,i,1),i=vn(),t!==null&&(Vi(t,1,i),Mn(t,i))}function zt(t,i,o){if(t.tag===3)op(t,t,o);else for(;i!==null;){if(i.tag===3){op(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(nr===null||!nr.has(l))){t=gs(o,t),t=Th(i,t,1),i=er(i,t,1),t=vn(),i!==null&&(Vi(i,1,t),Mn(i,t));break}}i=i.return}}function E0(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=vn(),t.pingedLanes|=t.suspendedLanes&o,en===t&&(ln&o)===o&&(qt===4||qt===3&&(ln&130023424)===ln&&500>Te()-Kc?br(t,0):$c|=o),Mn(t,i)}function ap(t,i){i===0&&((t.mode&1)===0?i=1:(i=Qt,Qt<<=1,(Qt&130023424)===0&&(Qt=4194304)));var o=vn();t=wi(t,i),t!==null&&(Vi(t,i,o),Mn(t,o))}function M0(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),ap(t,o)}function w0(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(o=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),ap(t,o)}var lp;lp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||xn.current)Sn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Sn=!1,f0(t,i,o);Sn=(t.flags&131072)!==0}else Sn=!1,Ft&&(i.flags&1048576)!==0&&Hd(i,ma,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Pa(t,i),t=i.pendingProps;var u=ls(i,un.current);ps(i,o),u=Cc(null,i,l,t,u,o);var h=Rc();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,yn(l)?(h=!0,da(i)):h=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,yc(i),u.updater=Ra,i.stateNode=u,u._reactInternals=i,Ic(i,l,t,o),i=Oc(null,i,l,!0,h,o)):(i.tag=0,Ft&&h&&uc(i),gn(null,i,u,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Pa(t,i),t=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=A0(l),t=Zn(l,t),u){case 0:i=kc(null,i,l,t,o);break e;case 1:i=Ih(null,i,l,t,o);break e;case 11:i=bh(null,i,l,t,o);break e;case 14:i=Ph(null,i,l,Zn(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Zn(l,u),kc(t,i,l,u,o);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Zn(l,u),Ih(t,i,l,u,o);case 3:e:{if(Uh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,u=h.element,Kd(t,i),Sa(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){u=gs(Error(n(423)),i),i=Fh(t,i,l,o,u);break e}else if(l!==u){u=gs(Error(n(424)),i),i=Fh(t,i,l,o,u);break e}else for(Dn=$i(i.stateNode.containerInfo.firstChild),Nn=i,Ft=!0,Kn=null,o=qd(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(fs(),l===u){i=Ai(t,i,o);break e}gn(t,i,l,o)}i=i.child}return i;case 5:return Jd(i),t===null&&hc(i),l=i.type,u=i.pendingProps,h=t!==null?t.memoizedProps:null,M=u.children,rc(l,u)?M=null:h!==null&&rc(l,h)&&(i.flags|=32),Dh(t,i),gn(t,i,M,o),i.child;case 6:return t===null&&hc(i),null;case 13:return kh(t,i,o);case 4:return Sc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ds(i,null,l,o):gn(t,i,l,o),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Zn(l,u),bh(t,i,l,u,o);case 7:return gn(t,i,i.pendingProps,o),i.child;case 8:return gn(t,i,i.pendingProps.children,o),i.child;case 12:return gn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,h=i.memoizedProps,M=u.value,Lt(_a,l._currentValue),l._currentValue=M,h!==null)if($n(h.value,M)){if(h.children===u.children&&!xn.current){i=Ai(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var U=h.dependencies;if(U!==null){M=h.child;for(var O=U.firstContext;O!==null;){if(O.context===l){if(h.tag===1){O=Ti(-1,o&-o),O.tag=2;var te=h.updateQueue;if(te!==null){te=te.shared;var ve=te.pending;ve===null?O.next=O:(O.next=ve.next,ve.next=O),te.pending=O}}h.lanes|=o,O=h.alternate,O!==null&&(O.lanes|=o),_c(h.return,o,i),U.lanes|=o;break}O=O.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,U=M.alternate,U!==null&&(U.lanes|=o),_c(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}gn(t,i,u.children,o),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,ps(i,o),u=Hn(u),l=l(u),i.flags|=1,gn(t,i,l,o),i.child;case 14:return l=i.type,u=Zn(l,i.pendingProps),u=Zn(l.type,u),Ph(t,i,l,u,o);case 15:return Lh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Zn(l,u),Pa(t,i),i.tag=1,yn(l)?(t=!0,da(i)):t=!1,ps(i,o),Eh(i,l,u),Ic(i,l,u,o),Oc(null,i,l,!0,t,o);case 19:return Bh(t,i,o);case 22:return Nh(t,i,o)}throw Error(n(156,i.tag))};function cp(t,i){return ee(t,i)}function T0(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,i,o,l){return new T0(t,i,o,l)}function ru(t){return t=t.prototype,!(!t||!t.isReactComponent)}function A0(t){if(typeof t=="function")return ru(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ne)return 11;if(t===de)return 14}return 2}function or(t,i){var o=t.alternate;return o===null?(o=Wn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ha(t,i,o,l,u,h){var M=2;if(l=t,typeof t=="function")ru(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case N:return Lr(o.children,u,h,i);case V:M=8,u|=8;break;case le:return t=Wn(12,o,i,u|2),t.elementType=le,t.lanes=h,t;case Z:return t=Wn(13,o,i,u),t.elementType=Z,t.lanes=h,t;case oe:return t=Wn(19,o,i,u),t.elementType=oe,t.lanes=h,t;case ce:return Va(o,u,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E:M=10;break e;case A:M=9;break e;case ne:M=11;break e;case de:M=14;break e;case re:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Wn(M,o,i,u),i.elementType=t,i.type=l,i.lanes=h,i}function Lr(t,i,o,l){return t=Wn(7,t,l,i),t.lanes=o,t}function Va(t,i,o,l){return t=Wn(22,t,l,i),t.elementType=ce,t.lanes=o,t.stateNode={isHidden:!1},t}function su(t,i,o){return t=Wn(6,t,null,i),t.lanes=o,t}function ou(t,i,o){return i=Wn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function C0(t,i,o,l,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ks(0),this.expirationTimes=Ks(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ks(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function au(t,i,o,l,u,h,M,U,O){return t=new C0(t,i,o,U,O),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Wn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},yc(h),t}function R0(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function up(t){if(!t)return Zi;t=t._reactInternals;e:{if(_i(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(yn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(yn(o))return Od(t,o,i)}return i}function fp(t,i,o,l,u,h,M,U,O){return t=au(o,l,!0,t,u,h,M,U,O),t.context=up(null),o=t.current,l=vn(),u=rr(o),h=Ti(l,u),h.callback=i??null,er(o,h,u),t.current.lanes=u,Vi(t,u,l),Mn(t,l),t}function Ga(t,i,o,l){var u=i.current,h=vn(),M=rr(u);return o=up(o),i.context===null?i.context=o:i.pendingContext=o,i=Ti(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=er(u,i,M),t!==null&&(ei(t,u,M,h),ya(t,u,M)),M}function Wa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function lu(t,i){dp(t,i),(t=t.alternate)&&dp(t,i)}function b0(){return null}var hp=typeof reportError=="function"?reportError:function(t){console.error(t)};function cu(t){this._internalRoot=t}ja.prototype.render=cu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ga(t,i,null,null)},ja.prototype.unmount=cu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Rr(function(){Ga(null,t,null,null)}),i[yi]=null}};function ja(t){this._internalRoot=t}ja.prototype.unstable_scheduleHydration=function(t){if(t){var i=Kf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Xi.length&&i!==0&&i<Xi[o].priority;o++);Xi.splice(o,0,t),o===0&&Jf(t)}};function uu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pp(){}function P0(t,i,o,l,u){if(u){if(typeof l=="function"){var h=l;l=function(){var te=Wa(M);h.call(te)}}var M=fp(i,l,t,0,null,!1,!1,"",pp);return t._reactRootContainer=M,t[yi]=M.current,uo(t.nodeType===8?t.parentNode:t),Rr(),M}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var U=l;l=function(){var te=Wa(O);U.call(te)}}var O=au(t,0,!1,null,null,!1,!1,"",pp);return t._reactRootContainer=O,t[yi]=O.current,uo(t.nodeType===8?t.parentNode:t),Rr(function(){Ga(i,O,o,l)}),O}function Ya(t,i,o,l,u){var h=o._reactRootContainer;if(h){var M=h;if(typeof u=="function"){var U=u;u=function(){var O=Wa(M);U.call(O)}}Ga(i,M,t,u)}else M=P0(o,i,t,u,l);return Wa(M)}qf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=xi(i.pendingLanes);o!==0&&(Il(i,o|1),Mn(i,Te()),(gt&6)===0&&(xs=Te()+500,Qi()))}break;case 13:Rr(function(){var l=wi(t,1);if(l!==null){var u=vn();ei(l,t,1,u)}}),lu(t,1)}},Ul=function(t){if(t.tag===13){var i=wi(t,134217728);if(i!==null){var o=vn();ei(i,t,134217728,o)}lu(t,134217728)}},$f=function(t){if(t.tag===13){var i=rr(t),o=wi(t,i);if(o!==null){var l=vn();ei(o,t,i,l)}lu(t,i)}},Kf=function(){return wt},Zf=function(t,i){var o=wt;try{return wt=t,i()}finally{wt=o}},ae=function(t,i,o){switch(i){case"input":if(Ke(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var u=ua(l);if(!u)throw Error(n(90));ct(l),Ke(l,u)}}}break;case"textarea":xe(t,o);break;case"select":i=o.value,i!=null&&w(t,!!o.multiple,i,!1)}},on=tu,pt=Rr;var L0={usingClientEntryPoint:!1,Events:[po,os,ua,ft,kt,tu]},Ro={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},N0={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:F.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=W(t),t===null?null:t.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||b0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qa.isDisabled&&qa.supportsFiber)try{bt=qa.inject(N0),Ut=qa}catch{}}return wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L0,wn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uu(i))throw Error(n(200));return R0(t,i,null,o)},wn.createRoot=function(t,i){if(!uu(t))throw Error(n(299));var o=!1,l="",u=hp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=au(t,1,!1,null,null,o,!1,l,u),t[yi]=i.current,uo(t.nodeType===8?t.parentNode:t),new cu(i)},wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=W(i),t=t===null?null:t.stateNode,t},wn.flushSync=function(t){return Rr(t)},wn.hydrate=function(t,i,o){if(!Xa(i))throw Error(n(200));return Ya(null,t,i,!0,o)},wn.hydrateRoot=function(t,i,o){if(!uu(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,u=!1,h="",M=hp;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=fp(i,null,t,1,o??null,u,!1,h,M),t[yi]=i.current,uo(t),l)for(t=0;t<l.length;t++)o=l[t],u=o._getVersion,u=u(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,u]:i.mutableSourceEagerHydrationData.push(o,u);return new ja(i)},wn.render=function(t,i,o){if(!Xa(i))throw Error(n(200));return Ya(null,t,i,!1,o)},wn.unmountComponentAtNode=function(t){if(!Xa(t))throw Error(n(40));return t._reactRootContainer?(Rr(function(){Ya(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1},wn.unstable_batchedUpdates=tu,wn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Xa(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ya(t,i,o,!1,l)},wn.version="18.3.1-next-f1338f8080-20240426",wn}var Ep;function H0(){if(Ep)return hu.exports;Ep=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),hu.exports=z0(),hu.exports}var Mp;function V0(){if(Mp)return $a;Mp=1;var s=H0();return $a.createRoot=s.createRoot,$a.hydrateRoot=s.hydrateRoot,$a}var G0=V0();const W0=ym(G0);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kf="169",j0=0,wp=1,X0=2,Sm=1,Y0=2,Di=3,vr=0,Cn=1,Ii=2,mr=0,ks=1,Tp=2,Ap=3,Cp=4,q0=5,zr=100,$0=101,K0=102,Z0=103,Q0=104,J0=200,ev=201,tv=202,nv=203,qu=204,$u=205,iv=206,rv=207,sv=208,ov=209,av=210,lv=211,cv=212,uv=213,fv=214,Ku=0,Zu=1,Qu=2,zs=3,Ju=4,ef=5,tf=6,nf=7,Em=0,dv=1,hv=2,gr=0,pv=1,mv=2,gv=3,vv=4,_v=5,xv=6,yv=7,Mm=300,Hs=301,Vs=302,rf=303,sf=304,Pl=306,of=1e3,Vr=1001,af=1002,Yn=1003,Sv=1004,Ka=1005,si=1006,gu=1007,Gr=1008,ki=1009,wm=1010,Tm=1011,Oo=1012,Of=1013,Xr=1014,Ui=1015,Bo=1016,Bf=1017,zf=1018,Gs=1020,Am=35902,Cm=1021,Rm=1022,ai=1023,bm=1024,Pm=1025,Os=1026,Ws=1027,Lm=1028,Hf=1029,Nm=1030,Vf=1031,Gf=1033,_l=33776,xl=33777,yl=33778,Sl=33779,lf=35840,cf=35841,uf=35842,ff=35843,df=36196,hf=37492,pf=37496,mf=37808,gf=37809,vf=37810,_f=37811,xf=37812,yf=37813,Sf=37814,Ef=37815,Mf=37816,wf=37817,Tf=37818,Af=37819,Cf=37820,Rf=37821,El=36492,bf=36494,Pf=36495,Dm=36283,Lf=36284,Nf=36285,Df=36286,Ev=3200,Mv=3201,wv=0,Tv=1,pr="",hi="srgb",_r="srgb-linear",Wf="display-p3",Ll="display-p3-linear",Tl="linear",It="srgb",Al="rec709",Cl="p3",Ss=7680,Rp=519,Av=512,Cv=513,Rv=514,Im=515,bv=516,Pv=517,Lv=518,Nv=519,bp=35044,Pp="300 es",Fi=2e3,Rl=2001;class Xs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,f=a.length;c<f;c++)a[c].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vu=Math.PI/180,If=180/Math.PI;function zo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pn[s&255]+pn[s>>8&255]+pn[s>>16&255]+pn[s>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]).toLowerCase()}function An(s,e,n){return Math.max(e,Math.min(n,s))}function Dv(s,e){return(s%e+e)%e}function _u(s,e,n){return(1-n)*s+n*e}function Po(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Tn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,n=0){Rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(An(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*a+e.x,this.y=c*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,n,r,a,c,f,d,p,m){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,f,d,p,m)}set(e,n,r,a,c,f,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=c,_[5]=p,_[6]=r,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],_=r[4],x=r[7],y=r[2],S=r[5],T=r[8],R=a[0],v=a[3],g=a[6],I=a[1],P=a[4],F=a[7],Y=a[2],k=a[5],N=a[8];return c[0]=f*R+d*I+p*Y,c[3]=f*v+d*P+p*k,c[6]=f*g+d*F+p*N,c[1]=m*R+_*I+x*Y,c[4]=m*v+_*P+x*k,c[7]=m*g+_*F+x*N,c[2]=y*R+S*I+T*Y,c[5]=y*v+S*P+T*k,c[8]=y*g+S*F+T*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return n*f*_-n*d*m-r*c*_+r*d*p+a*c*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],x=_*f-d*m,y=d*p-_*c,S=m*c-f*p,T=n*x+r*y+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=x*R,e[1]=(a*m-_*r)*R,e[2]=(d*r-a*f)*R,e[3]=y*R,e[4]=(_*n-a*p)*R,e[5]=(a*c-d*n)*R,e[6]=S*R,e[7]=(r*p-m*n)*R,e[8]=(f*n-r*c)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(xu.makeScale(e,n)),this}rotate(e){return this.premultiply(xu.makeRotation(-e)),this}translate(e,n){return this.premultiply(xu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xu=new st;function Um(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function bl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Iv(){const s=bl("canvas");return s.style.display="block",s}const Lp={};function Ml(s){s in Lp||(Lp[s]=!0,console.warn(s))}function Uv(s,e,n){return new Promise(function(r,a){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function Fv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function kv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Np=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dp=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Lo={[_r]:{transfer:Tl,primaries:Al,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[hi]:{transfer:It,primaries:Al,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ll]:{transfer:Tl,primaries:Cl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Dp),fromReference:s=>s.applyMatrix3(Np)},[Wf]:{transfer:It,primaries:Cl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Dp),fromReference:s=>s.applyMatrix3(Np).convertLinearToSRGB()}},Ov=new Set([_r,Ll]),Mt={enabled:!0,_workingColorSpace:_r,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ov.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=Lo[e].toReference,a=Lo[n].fromReference;return a(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Lo[s].primaries},getTransfer:function(s){return s===pr?Tl:Lo[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Lo[e].luminanceCoefficients)}};function Bs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function yu(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Es;class Bv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Es===void 0&&(Es=bl("canvas")),Es.width=e.width,Es.height=e.height;const r=Es.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Es}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=bl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let f=0;f<c.length;f++)c[f]=Bs(c[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Bs(n[r]/255)*255):n[r]=Bs(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zv=0;class Fm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=zo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?c.push(Su(a[f].image)):c.push(Su(a[f]))}else c=Su(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function Su(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Bv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hv=0;class Rn extends Xs{constructor(e=Rn.DEFAULT_IMAGE,n=Rn.DEFAULT_MAPPING,r=Vr,a=Vr,c=si,f=Gr,d=ai,p=ki,m=Rn.DEFAULT_ANISOTROPY,_=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=zo(),this.name="",this.source=new Fm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case of:e.x=e.x-Math.floor(e.x);break;case Vr:e.x=e.x<0?0:1;break;case af:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case of:e.y=e.y-Math.floor(e.y);break;case Vr:e.y=e.y<0?0:1;break;case af:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Mm;Rn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,n=0,r=0,a=1){Vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const p=e.elements,m=p[0],_=p[4],x=p[8],y=p[1],S=p[5],T=p[9],R=p[2],v=p[6],g=p[10];if(Math.abs(_-y)<.01&&Math.abs(x-R)<.01&&Math.abs(T-v)<.01){if(Math.abs(_+y)<.1&&Math.abs(x+R)<.1&&Math.abs(T+v)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(m+1)/2,F=(S+1)/2,Y=(g+1)/2,k=(_+y)/4,N=(x+R)/4,V=(T+v)/4;return P>F&&P>Y?P<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(P),a=k/r,c=N/r):F>Y?F<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(F),r=k/a,c=V/a):Y<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt(Y),r=N/c,a=V/c),this.set(r,a,c,n),this}let I=Math.sqrt((v-T)*(v-T)+(x-R)*(x-R)+(y-_)*(y-_));return Math.abs(I)<.001&&(I=1),this.x=(v-T)/I,this.y=(x-R)/I,this.z=(y-_)/I,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vv extends Xs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Vt(0,0,e,n),this.scissorTest=!1,this.viewport=new Vt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Rn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Fm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends Vv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class km extends Rn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gv extends Rn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,f,d){let p=r[a+0],m=r[a+1],_=r[a+2],x=r[a+3];const y=c[f+0],S=c[f+1],T=c[f+2],R=c[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(d===1){e[n+0]=y,e[n+1]=S,e[n+2]=T,e[n+3]=R;return}if(x!==R||p!==y||m!==S||_!==T){let v=1-d;const g=p*y+m*S+_*T+x*R,I=g>=0?1:-1,P=1-g*g;if(P>Number.EPSILON){const Y=Math.sqrt(P),k=Math.atan2(Y,g*I);v=Math.sin(v*k)/Y,d=Math.sin(d*k)/Y}const F=d*I;if(p=p*v+y*F,m=m*v+S*F,_=_*v+T*F,x=x*v+R*F,v===1-d){const Y=1/Math.sqrt(p*p+m*m+_*_+x*x);p*=Y,m*=Y,_*=Y,x*=Y}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,c,f){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],x=c[f],y=c[f+1],S=c[f+2],T=c[f+3];return e[n]=d*T+_*x+p*S-m*y,e[n+1]=p*T+_*y+m*x-d*S,e[n+2]=m*T+_*S+d*y-p*x,e[n+3]=_*T-d*x-p*y-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),x=d(c/2),y=p(r/2),S=p(a/2),T=p(c/2);switch(f){case"XYZ":this._x=y*_*x+m*S*T,this._y=m*S*x-y*_*T,this._z=m*_*T+y*S*x,this._w=m*_*x-y*S*T;break;case"YXZ":this._x=y*_*x+m*S*T,this._y=m*S*x-y*_*T,this._z=m*_*T-y*S*x,this._w=m*_*x+y*S*T;break;case"ZXY":this._x=y*_*x-m*S*T,this._y=m*S*x+y*_*T,this._z=m*_*T+y*S*x,this._w=m*_*x-y*S*T;break;case"ZYX":this._x=y*_*x-m*S*T,this._y=m*S*x+y*_*T,this._z=m*_*T-y*S*x,this._w=m*_*x+y*S*T;break;case"YZX":this._x=y*_*x+m*S*T,this._y=m*S*x+y*_*T,this._z=m*_*T-y*S*x,this._w=m*_*x-y*S*T;break;case"XZY":this._x=y*_*x-m*S*T,this._y=m*S*x-y*_*T,this._z=m*_*T+y*S*x,this._w=m*_*x+y*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],f=n[1],d=n[5],p=n[9],m=n[2],_=n[6],x=n[10],y=r+d+x;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(_-p)*S,this._y=(c-m)*S,this._z=(f-a)*S}else if(r>d&&r>x){const S=2*Math.sqrt(1+r-d-x);this._w=(_-p)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(c+m)/S}else if(d>x){const S=2*Math.sqrt(1+d-r-x);this._w=(c-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+x-r-d);this._w=(f-a)/S,this._x=(c+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(An(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,f=e._w,d=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+f*d+a*m-c*p,this._y=a*_+f*p+c*d-r*m,this._z=c*_+f*m+r*p-a*d,this._w=f*_-r*d-a*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),x=Math.sin((1-n)*_)/m,y=Math.sin(n*_)/m;return this._w=f*x+this._w*y,this._x=r*x+this._x*y,this._y=a*x+this._y*y,this._z=c*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,n=0,r=0){se.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ip.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ip.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,f=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),_=2*(d*n-c*a),x=2*(c*r-f*n);return this.x=n+p*m+f*x-d*_,this.y=r+p*_+d*m-c*x,this.z=a+p*x+c*_-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-c*d,this.y=c*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Eu.copy(this).projectOnVector(e),this.sub(Eu)}reflect(e){return this.sub(Eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(An(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eu=new se,Ip=new Ho;class Vo{constructor(e=new se(1/0,1/0,1/0),n=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ti):ti.fromBufferAttribute(c,f),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Za.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Za.copy(r.boundingBox)),Za.applyMatrix4(e.matrixWorld),this.union(Za)}const a=e.children;for(let c=0,f=a.length;c<f;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),Qa.subVectors(this.max,No),Ms.subVectors(e.a,No),ws.subVectors(e.b,No),Ts.subVectors(e.c,No),lr.subVectors(ws,Ms),cr.subVectors(Ts,ws),Nr.subVectors(Ms,Ts);let n=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Nr.z,Nr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Nr.z,0,-Nr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Nr.y,Nr.x,0];return!Mu(n,Ms,ws,Ts,Qa)||(n=[1,0,0,0,1,0,0,0,1],!Mu(n,Ms,ws,Ts,Qa))?!1:(Ja.crossVectors(lr,cr),n=[Ja.x,Ja.y,Ja.z],Mu(n,Ms,ws,Ts,Qa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new se,new se,new se,new se,new se,new se,new se,new se],ti=new se,Za=new Vo,Ms=new se,ws=new se,Ts=new se,lr=new se,cr=new se,Nr=new se,No=new se,Qa=new se,Ja=new se,Dr=new se;function Mu(s,e,n,r,a){for(let c=0,f=s.length-3;c<=f;c+=3){Dr.fromArray(s,c);const d=a.x*Math.abs(Dr.x)+a.y*Math.abs(Dr.y)+a.z*Math.abs(Dr.z),p=e.dot(Dr),m=n.dot(Dr),_=r.dot(Dr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const Wv=new Vo,Do=new se,wu=new se;class jf{constructor(e=new se,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Wv.setFromPoints(e).getCenter(r);let a=0;for(let c=0,f=e.length;c<f;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const n=Do.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Do,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(wu)),this.expandByPoint(Do.copy(e.center).sub(wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new se,Tu=new se,el=new se,ur=new se,Au=new se,tl=new se,Cu=new se;class jv{constructor(e=new se,n=new se(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,n),bi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Tu.copy(e).add(n).multiplyScalar(.5),el.copy(n).sub(e).normalize(),ur.copy(this.origin).sub(Tu);const c=e.distanceTo(n)*.5,f=-this.direction.dot(el),d=ur.dot(this.direction),p=-ur.dot(el),m=ur.lengthSq(),_=Math.abs(1-f*f);let x,y,S,T;if(_>0)if(x=f*p-d,y=f*d-p,T=c*_,x>=0)if(y>=-T)if(y<=T){const R=1/_;x*=R,y*=R,S=x*(x+f*y+2*d)+y*(f*x+y+2*p)+m}else y=c,x=Math.max(0,-(f*y+d)),S=-x*x+y*(y+2*p)+m;else y=-c,x=Math.max(0,-(f*y+d)),S=-x*x+y*(y+2*p)+m;else y<=-T?(x=Math.max(0,-(-f*c+d)),y=x>0?-c:Math.min(Math.max(-c,-p),c),S=-x*x+y*(y+2*p)+m):y<=T?(x=0,y=Math.min(Math.max(-c,-p),c),S=y*(y+2*p)+m):(x=Math.max(0,-(f*c+d)),y=x>0?c:Math.min(Math.max(-c,-p),c),S=-x*x+y*(y+2*p)+m);else y=f>0?-c:c,x=Math.max(0,-(f*y+d)),S=-x*x+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Tu).addScaledVector(el,y),S}intersectSphere(e,n){bi.subVectors(e.center,this.origin);const r=bi.dot(this.direction),a=bi.dot(bi)-r*r,c=e.radius*e.radius;if(a>c)return null;const f=Math.sqrt(c-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,f,d,p;const m=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,a=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,a=(e.min.x-y.x)*m),_>=0?(c=(e.min.y-y.y)*_,f=(e.max.y-y.y)*_):(c=(e.max.y-y.y)*_,f=(e.min.y-y.y)*_),r>f||c>a||((c>r||isNaN(r))&&(r=c),(f<a||isNaN(a))&&(a=f),x>=0?(d=(e.min.z-y.z)*x,p=(e.max.z-y.z)*x):(d=(e.max.z-y.z)*x,p=(e.min.z-y.z)*x),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,n,r,a,c){Au.subVectors(n,e),tl.subVectors(r,e),Cu.crossVectors(Au,tl);let f=this.direction.dot(Cu),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ur.subVectors(this.origin,e);const p=d*this.direction.dot(tl.crossVectors(ur,tl));if(p<0)return null;const m=d*this.direction.dot(Au.cross(ur));if(m<0||p+m>f)return null;const _=-d*ur.dot(Cu);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,n,r,a,c,f,d,p,m,_,x,y,S,T,R,v){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,f,d,p,m,_,x,y,S,T,R,v)}set(e,n,r,a,c,f,d,p,m,_,x,y,S,T,R,v){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=c,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=x,g[14]=y,g[3]=S,g[7]=T,g[11]=R,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/As.setFromMatrixColumn(e,0).length(),c=1/As.setFromMatrixColumn(e,1).length(),f=1/As.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const y=f*_,S=f*x,T=d*_,R=d*x;n[0]=p*_,n[4]=-p*x,n[8]=m,n[1]=S+T*m,n[5]=y-R*m,n[9]=-d*p,n[2]=R-y*m,n[6]=T+S*m,n[10]=f*p}else if(e.order==="YXZ"){const y=p*_,S=p*x,T=m*_,R=m*x;n[0]=y+R*d,n[4]=T*d-S,n[8]=f*m,n[1]=f*x,n[5]=f*_,n[9]=-d,n[2]=S*d-T,n[6]=R+y*d,n[10]=f*p}else if(e.order==="ZXY"){const y=p*_,S=p*x,T=m*_,R=m*x;n[0]=y-R*d,n[4]=-f*x,n[8]=T+S*d,n[1]=S+T*d,n[5]=f*_,n[9]=R-y*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const y=f*_,S=f*x,T=d*_,R=d*x;n[0]=p*_,n[4]=T*m-S,n[8]=y*m+R,n[1]=p*x,n[5]=R*m+y,n[9]=S*m-T,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const y=f*p,S=f*m,T=d*p,R=d*m;n[0]=p*_,n[4]=R-y*x,n[8]=T*x+S,n[1]=x,n[5]=f*_,n[9]=-d*_,n[2]=-m*_,n[6]=S*x+T,n[10]=y-R*x}else if(e.order==="XZY"){const y=f*p,S=f*m,T=d*p,R=d*m;n[0]=p*_,n[4]=-x,n[8]=m*_,n[1]=y*x+R,n[5]=f*_,n[9]=S*x-T,n[2]=T*x-S,n[6]=d*_,n[10]=R*x+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xv,e,Yv)}lookAt(e,n,r){const a=this.elements;return Un.subVectors(e,n),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),fr.crossVectors(r,Un),fr.lengthSq()===0&&(Math.abs(r.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),fr.crossVectors(r,Un)),fr.normalize(),nl.crossVectors(Un,fr),a[0]=fr.x,a[4]=nl.x,a[8]=Un.x,a[1]=fr.y,a[5]=nl.y,a[9]=Un.y,a[2]=fr.z,a[6]=nl.z,a[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],_=r[1],x=r[5],y=r[9],S=r[13],T=r[2],R=r[6],v=r[10],g=r[14],I=r[3],P=r[7],F=r[11],Y=r[15],k=a[0],N=a[4],V=a[8],le=a[12],E=a[1],A=a[5],ne=a[9],Z=a[13],oe=a[2],de=a[6],re=a[10],ce=a[14],z=a[3],fe=a[7],J=a[11],D=a[15];return c[0]=f*k+d*E+p*oe+m*z,c[4]=f*N+d*A+p*de+m*fe,c[8]=f*V+d*ne+p*re+m*J,c[12]=f*le+d*Z+p*ce+m*D,c[1]=_*k+x*E+y*oe+S*z,c[5]=_*N+x*A+y*de+S*fe,c[9]=_*V+x*ne+y*re+S*J,c[13]=_*le+x*Z+y*ce+S*D,c[2]=T*k+R*E+v*oe+g*z,c[6]=T*N+R*A+v*de+g*fe,c[10]=T*V+R*ne+v*re+g*J,c[14]=T*le+R*Z+v*ce+g*D,c[3]=I*k+P*E+F*oe+Y*z,c[7]=I*N+P*A+F*de+Y*fe,c[11]=I*V+P*ne+F*re+Y*J,c[15]=I*le+P*Z+F*ce+Y*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],f=e[1],d=e[5],p=e[9],m=e[13],_=e[2],x=e[6],y=e[10],S=e[14],T=e[3],R=e[7],v=e[11],g=e[15];return T*(+c*p*x-a*m*x-c*d*y+r*m*y+a*d*S-r*p*S)+R*(+n*p*S-n*m*y+c*f*y-a*f*S+a*m*_-c*p*_)+v*(+n*m*x-n*d*S-c*f*x+r*f*S+c*d*_-r*m*_)+g*(-a*d*_-n*p*x+n*d*y+a*f*x-r*f*y+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],x=e[9],y=e[10],S=e[11],T=e[12],R=e[13],v=e[14],g=e[15],I=x*v*m-R*y*m+R*p*S-d*v*S-x*p*g+d*y*g,P=T*y*m-_*v*m-T*p*S+f*v*S+_*p*g-f*y*g,F=_*R*m-T*x*m+T*d*S-f*R*S-_*d*g+f*x*g,Y=T*x*p-_*R*p-T*d*y+f*R*y+_*d*v-f*x*v,k=n*I+r*P+a*F+c*Y;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/k;return e[0]=I*N,e[1]=(R*y*c-x*v*c-R*a*S+r*v*S+x*a*g-r*y*g)*N,e[2]=(d*v*c-R*p*c+R*a*m-r*v*m-d*a*g+r*p*g)*N,e[3]=(x*p*c-d*y*c-x*a*m+r*y*m+d*a*S-r*p*S)*N,e[4]=P*N,e[5]=(_*v*c-T*y*c+T*a*S-n*v*S-_*a*g+n*y*g)*N,e[6]=(T*p*c-f*v*c-T*a*m+n*v*m+f*a*g-n*p*g)*N,e[7]=(f*y*c-_*p*c+_*a*m-n*y*m-f*a*S+n*p*S)*N,e[8]=F*N,e[9]=(T*x*c-_*R*c-T*r*S+n*R*S+_*r*g-n*x*g)*N,e[10]=(f*R*c-T*d*c+T*r*m-n*R*m-f*r*g+n*d*g)*N,e[11]=(_*d*c-f*x*c-_*r*m+n*x*m+f*r*S-n*d*S)*N,e[12]=Y*N,e[13]=(_*R*a-T*x*a+T*r*y-n*R*y-_*r*v+n*x*v)*N,e[14]=(T*d*a-f*R*a-T*r*p+n*R*p+f*r*v-n*d*v)*N,e[15]=(f*x*a-_*d*a+_*r*p-n*x*p-f*r*y+n*d*y)*N,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,f=e.x,d=e.y,p=e.z,m=c*f,_=c*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*f,0,m*p-a*d,_*p+a*f,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,f){return this.set(1,r,c,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,f=n._y,d=n._z,p=n._w,m=c+c,_=f+f,x=d+d,y=c*m,S=c*_,T=c*x,R=f*_,v=f*x,g=d*x,I=p*m,P=p*_,F=p*x,Y=r.x,k=r.y,N=r.z;return a[0]=(1-(R+g))*Y,a[1]=(S+F)*Y,a[2]=(T-P)*Y,a[3]=0,a[4]=(S-F)*k,a[5]=(1-(y+g))*k,a[6]=(v+I)*k,a[7]=0,a[8]=(T+P)*N,a[9]=(v-I)*N,a[10]=(1-(y+R))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=As.set(a[0],a[1],a[2]).length();const f=As.set(a[4],a[5],a[6]).length(),d=As.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],ni.copy(this);const m=1/c,_=1/f,x=1/d;return ni.elements[0]*=m,ni.elements[1]*=m,ni.elements[2]*=m,ni.elements[4]*=_,ni.elements[5]*=_,ni.elements[6]*=_,ni.elements[8]*=x,ni.elements[9]*=x,ni.elements[10]*=x,n.setFromRotationMatrix(ni),r.x=c,r.y=f,r.z=d,this}makePerspective(e,n,r,a,c,f,d=Fi){const p=this.elements,m=2*c/(n-e),_=2*c/(r-a),x=(n+e)/(n-e),y=(r+a)/(r-a);let S,T;if(d===Fi)S=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(d===Rl)S=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,c,f,d=Fi){const p=this.elements,m=1/(n-e),_=1/(r-a),x=1/(f-c),y=(n+e)*m,S=(r+a)*_;let T,R;if(d===Fi)T=(f+c)*x,R=-2*x;else if(d===Rl)T=c*x,R=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=R,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const As=new se,ni=new jt,Xv=new se(0,0,0),Yv=new se(1,1,1),fr=new se,nl=new se,Un=new se,Up=new jt,Fp=new Ho;class Oi{constructor(e=0,n=0,r=0,a=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],f=a[4],d=a[8],p=a[1],m=a[5],_=a[9],x=a[2],y=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(An(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-An(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(An(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-An(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(An(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-An(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Up,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fp.setFromEuler(this),this.setFromQuaternion(Fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class Om{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qv=0;const kp=new se,Cs=new Ho,Pi=new jt,il=new se,Io=new se,$v=new se,Kv=new Ho,Op=new se(1,0,0),Bp=new se(0,1,0),zp=new se(0,0,1),Hp={type:"added"},Zv={type:"removed"},Rs={type:"childadded",child:null},Ru={type:"childremoved",child:null};class kn extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new se,n=new Oi,r=new Ho,a=new se(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new jt},normalMatrix:{value:new st}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Om,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Op,e)}rotateY(e){return this.rotateOnAxis(Bp,e)}rotateZ(e){return this.rotateOnAxis(zp,e)}translateOnAxis(e,n){return kp.copy(e).applyQuaternion(this.quaternion),this.position.add(kp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Op,e)}translateY(e){return this.translateOnAxis(Bp,e)}translateZ(e){return this.translateOnAxis(zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?il.copy(e):il.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Io,il,this.up):Pi.lookAt(il,Io,this.up),this.quaternion.setFromRotationMatrix(Pi),a&&(Pi.extractRotation(a.matrixWorld),Cs.setFromRotationMatrix(Pi),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hp),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Zv),Ru.child=e,this.dispatchEvent(Ru),Ru.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hp),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,f=a.length;c<f;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,$v),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,Kv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,f=a.length;c<f;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const x=p[m];c(e.shapes,x)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));a.material=d}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(c(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),_=f(e.images),x=f(e.shapes),y=f(e.skeletons),S=f(e.animations),T=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function f(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}kn.DEFAULT_UP=new se(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new se,Li=new se,bu=new se,Ni=new se,bs=new se,Ps=new se,Vp=new se,Pu=new se,Lu=new se,Nu=new se,Du=new Vt,Iu=new Vt,Uu=new Vt;class oi{constructor(e=new se,n=new se,r=new se){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ii.subVectors(e,n),a.cross(ii);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){ii.subVectors(a,n),Li.subVectors(r,n),bu.subVectors(e,n);const f=ii.dot(ii),d=ii.dot(Li),p=ii.dot(bu),m=Li.dot(Li),_=Li.dot(bu),x=f*m-d*d;if(x===0)return c.set(0,0,0),null;const y=1/x,S=(m*p-d*_)*y,T=(f*_-d*p)*y;return c.set(1-S-T,T,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,r,a,c,f,d,p){return this.getBarycoord(e,n,r,a,Ni)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ni.x),p.addScaledVector(f,Ni.y),p.addScaledVector(d,Ni.z),p)}static getInterpolatedAttribute(e,n,r,a,c,f){return Du.setScalar(0),Iu.setScalar(0),Uu.setScalar(0),Du.fromBufferAttribute(e,n),Iu.fromBufferAttribute(e,r),Uu.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Du,c.x),f.addScaledVector(Iu,c.y),f.addScaledVector(Uu,c.z),f}static isFrontFacing(e,n,r,a){return ii.subVectors(r,n),Li.subVectors(e,n),ii.cross(Li).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ii.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return oi.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let f,d;bs.subVectors(a,r),Ps.subVectors(c,r),Pu.subVectors(e,r);const p=bs.dot(Pu),m=Ps.dot(Pu);if(p<=0&&m<=0)return n.copy(r);Lu.subVectors(e,a);const _=bs.dot(Lu),x=Ps.dot(Lu);if(_>=0&&x<=_)return n.copy(a);const y=p*x-_*m;if(y<=0&&p>=0&&_<=0)return f=p/(p-_),n.copy(r).addScaledVector(bs,f);Nu.subVectors(e,c);const S=bs.dot(Nu),T=Ps.dot(Nu);if(T>=0&&S<=T)return n.copy(c);const R=S*m-p*T;if(R<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(r).addScaledVector(Ps,d);const v=_*T-S*x;if(v<=0&&x-_>=0&&S-T>=0)return Vp.subVectors(c,a),d=(x-_)/(x-_+(S-T)),n.copy(a).addScaledVector(Vp,d);const g=1/(v+R+y);return f=R*g,d=y*g,n.copy(r).addScaledVector(bs,f).addScaledVector(Ps,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},rl={h:0,s:0,l:0};function Fu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Ct{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Mt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Mt.workingColorSpace){if(e=Dv(e,1),n=An(n,0,1),r=An(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=Fu(f,c,e+1/3),this.g=Fu(f,c,e),this.b=Fu(f,c,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,n=hi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=hi){const r=Bm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=yu(e.r),this.g=yu(e.g),this.b=yu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Mt.fromWorkingColorSpace(mn.copy(this),e),Math.round(An(mn.r*255,0,255))*65536+Math.round(An(mn.g*255,0,255))*256+Math.round(An(mn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(mn.copy(this),n);const r=mn.r,a=mn.g,c=mn.b,f=Math.max(r,a,c),d=Math.min(r,a,c);let p,m;const _=(d+f)/2;if(d===f)p=0,m=0;else{const x=f-d;switch(m=_<=.5?x/(f+d):x/(2-f-d),f){case r:p=(a-c)/x+(a<c?6:0);break;case a:p=(c-r)/x+2;break;case c:p=(r-a)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=hi){Mt.fromWorkingColorSpace(mn.copy(this),e);const n=mn.r,r=mn.g,a=mn.b;return e!==hi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+n,dr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(dr),e.getHSL(rl);const r=_u(dr.h,rl.h,n),a=_u(dr.s,rl.s,n),c=_u(dr.l,rl.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new Ct;Ct.NAMES=Bm;let Qv=0;class Nl extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=zo(),this.name="",this.type="Material",this.blending=ks,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qu,this.blendDst=$u,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(r.blending=this.blending),this.side!==vr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==qu&&(r.blendSrc=this.blendSrc),this.blendDst!==$u&&(r.blendDst=this.blendDst),this.blendEquation!==zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(n){const c=a(e.textures),f=a(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zm extends Nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Em,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new se,sl=new Rt;class gi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=bp,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)sl.fromBufferAttribute(this,n),sl.applyMatrix3(e),this.setXY(n,sl.x,sl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Po(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Tn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Po(n,this.array)),n}setX(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Po(n,this.array)),n}setY(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Po(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Po(n,this.array)),n}setW(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array),a=Tn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array),a=Tn(a,this.array),c=Tn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bp&&(e.usage=this.usage),e}}class Hm extends gi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Vm extends gi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Wr extends gi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Jv=0;const jn=new jt,ku=new kn,Ls=new se,Fn=new Vo,Uo=new Vo,nn=new se;class qr extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=zo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Um(e)?Vm:Hm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new st().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,n,r){return jn.makeTranslation(e,n,r),this.applyMatrix4(jn),this}scale(e,n,r){return jn.makeScale(e,n,r),this.applyMatrix4(jn),this}lookAt(e){return ku.lookAt(e),ku.updateMatrix(),this.applyMatrix4(ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new Wr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];Fn.setFromBufferAttribute(c),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const r=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const d=n[c];Uo.setFromBufferAttribute(d),this.morphTargetsRelative?(nn.addVectors(Fn.min,Uo.min),Fn.expandByPoint(nn),nn.addVectors(Fn.max,Uo.max),Fn.expandByPoint(nn)):(Fn.expandByPoint(Uo.min),Fn.expandByPoint(Uo.max))}Fn.getCenter(r);let a=0;for(let c=0,f=e.count;c<f;c++)nn.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(nn));if(n)for(let c=0,f=n.length;c<f;c++){const d=n[c],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)nn.fromBufferAttribute(d,m),p&&(Ls.fromBufferAttribute(e,m),nn.add(Ls)),a=Math.max(a,r.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let V=0;V<r.count;V++)d[V]=new se,p[V]=new se;const m=new se,_=new se,x=new se,y=new Rt,S=new Rt,T=new Rt,R=new se,v=new se;function g(V,le,E){m.fromBufferAttribute(r,V),_.fromBufferAttribute(r,le),x.fromBufferAttribute(r,E),y.fromBufferAttribute(c,V),S.fromBufferAttribute(c,le),T.fromBufferAttribute(c,E),_.sub(m),x.sub(m),S.sub(y),T.sub(y);const A=1/(S.x*T.y-T.x*S.y);isFinite(A)&&(R.copy(_).multiplyScalar(T.y).addScaledVector(x,-S.y).multiplyScalar(A),v.copy(x).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(A),d[V].add(R),d[le].add(R),d[E].add(R),p[V].add(v),p[le].add(v),p[E].add(v))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let V=0,le=I.length;V<le;++V){const E=I[V],A=E.start,ne=E.count;for(let Z=A,oe=A+ne;Z<oe;Z+=3)g(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const P=new se,F=new se,Y=new se,k=new se;function N(V){Y.fromBufferAttribute(a,V),k.copy(Y);const le=d[V];P.copy(le),P.sub(Y.multiplyScalar(Y.dot(le))).normalize(),F.crossVectors(k,le);const A=F.dot(p[V])<0?-1:1;f.setXYZW(V,P.x,P.y,P.z,A)}for(let V=0,le=I.length;V<le;++V){const E=I[V],A=E.start,ne=E.count;for(let Z=A,oe=A+ne;Z<oe;Z+=3)N(e.getX(Z+0)),N(e.getX(Z+1)),N(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new gi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const a=new se,c=new se,f=new se,d=new se,p=new se,m=new se,_=new se,x=new se;if(e)for(let y=0,S=e.count;y<S;y+=3){const T=e.getX(y+0),R=e.getX(y+1),v=e.getX(y+2);a.fromBufferAttribute(n,T),c.fromBufferAttribute(n,R),f.fromBufferAttribute(n,v),_.subVectors(f,c),x.subVectors(a,c),_.cross(x),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,v),d.add(_),p.add(_),m.add(_),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let y=0,S=n.count;y<S;y+=3)a.fromBufferAttribute(n,y+0),c.fromBufferAttribute(n,y+1),f.fromBufferAttribute(n,y+2),_.subVectors(f,c),x.subVectors(a,c),_.cross(x),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)nn.fromBufferAttribute(e,n),nn.normalize(),e.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,x=d.normalized,y=new m.constructor(p.length*_);let S=0,T=0;for(let R=0,v=p.length;R<v;R++){d.isInterleavedBufferAttribute?S=p[R]*d.data.stride+d.offset:S=p[R]*_;for(let g=0;g<_;g++)y[T++]=m[S++]}return new gi(y,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qr,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let _=0,x=m.length;_<x;_++){const y=m[_],S=e(y,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let x=0,y=m.length;x<y;x++){const S=m[x];_.push(S.toJSON(e.data))}_.length>0&&(a[p]=_,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const c=e.morphAttributes;for(const m in c){const _=[],x=c[m];for(let y=0,S=x.length;y<S;y++)_.push(x[y].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,_=f.length;m<_;m++){const x=f[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gp=new jt,Ir=new jv,ol=new jf,Wp=new se,al=new se,ll=new se,cl=new se,Ou=new se,ul=new se,jp=new se,fl=new se;class mi extends kn{constructor(e=new qr,n=new zm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=a.length;c<f;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(c&&d){ul.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=d[p],x=c[p];_!==0&&(Ou.fromBufferAttribute(x,e),f?ul.addScaledVector(Ou,_):ul.addScaledVector(Ou.sub(n),_))}n.add(ul)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ol.copy(r.boundingSphere),ol.applyMatrix4(c),Ir.copy(e.ray).recast(e.near),!(ol.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(ol,Wp)===null||Ir.origin.distanceToSquared(Wp)>(e.far-e.near)**2))&&(Gp.copy(c).invert(),Ir.copy(e.ray).applyMatrix4(Gp),!(r.boundingBox!==null&&Ir.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Ir)))}_computeIntersections(e,n,r){let a;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,R=y.length;T<R;T++){const v=y[T],g=f[v.materialIndex],I=Math.max(v.start,S.start),P=Math.min(d.count,Math.min(v.start+v.count,S.start+S.count));for(let F=I,Y=P;F<Y;F+=3){const k=d.getX(F),N=d.getX(F+1),V=d.getX(F+2);a=dl(this,g,e,r,m,_,x,k,N,V),a&&(a.faceIndex=Math.floor(F/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let v=T,g=R;v<g;v+=3){const I=d.getX(v),P=d.getX(v+1),F=d.getX(v+2);a=dl(this,f,e,r,m,_,x,I,P,F),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let T=0,R=y.length;T<R;T++){const v=y[T],g=f[v.materialIndex],I=Math.max(v.start,S.start),P=Math.min(p.count,Math.min(v.start+v.count,S.start+S.count));for(let F=I,Y=P;F<Y;F+=3){const k=F,N=F+1,V=F+2;a=dl(this,g,e,r,m,_,x,k,N,V),a&&(a.faceIndex=Math.floor(F/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let v=T,g=R;v<g;v+=3){const I=v,P=v+1,F=v+2;a=dl(this,f,e,r,m,_,x,I,P,F),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}}}function e_(s,e,n,r,a,c,f,d){let p;if(e.side===Cn?p=r.intersectTriangle(f,c,a,!0,d):p=r.intersectTriangle(a,c,f,e.side===vr,d),p===null)return null;fl.copy(d),fl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(fl);return m<n.near||m>n.far?null:{distance:m,point:fl.clone(),object:s}}function dl(s,e,n,r,a,c,f,d,p,m){s.getVertexPosition(d,al),s.getVertexPosition(p,ll),s.getVertexPosition(m,cl);const _=e_(s,e,n,r,al,ll,cl,jp);if(_){const x=new se;oi.getBarycoord(jp,al,ll,cl,x),a&&(_.uv=oi.getInterpolatedAttribute(a,d,p,m,x,new Rt)),c&&(_.uv1=oi.getInterpolatedAttribute(c,d,p,m,x,new Rt)),f&&(_.normal=oi.getInterpolatedAttribute(f,d,p,m,x,new se),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new se,materialIndex:0};oi.getNormal(al,ll,cl,y.normal),_.face=y,_.barycoord=x}return _}class Go extends qr{constructor(e=1,n=1,r=1,a=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:f};const d=this;a=Math.floor(a),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],_=[],x=[];let y=0,S=0;T("z","y","x",-1,-1,r,n,e,f,c,0),T("z","y","x",1,-1,r,n,-e,f,c,1),T("x","z","y",1,1,e,r,n,a,f,2),T("x","z","y",1,-1,e,r,-n,a,f,3),T("x","y","z",1,-1,e,n,r,a,c,4),T("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(p),this.setAttribute("position",new Wr(m,3)),this.setAttribute("normal",new Wr(_,3)),this.setAttribute("uv",new Wr(x,2));function T(R,v,g,I,P,F,Y,k,N,V,le){const E=F/N,A=Y/V,ne=F/2,Z=Y/2,oe=k/2,de=N+1,re=V+1;let ce=0,z=0;const fe=new se;for(let J=0;J<re;J++){const D=J*A-Z;for(let ie=0;ie<de;ie++){const Pe=ie*E-ne;fe[R]=Pe*I,fe[v]=D*P,fe[g]=oe,m.push(fe.x,fe.y,fe.z),fe[R]=0,fe[v]=0,fe[g]=k>0?1:-1,_.push(fe.x,fe.y,fe.z),x.push(ie/N),x.push(1-J/V),ce+=1}}for(let J=0;J<V;J++)for(let D=0;D<N;D++){const ie=y+D+de*J,Pe=y+D+de*(J+1),K=y+(D+1)+de*(J+1),ue=y+(D+1)+de*J;p.push(ie,Pe,ue),p.push(Pe,K,ue),z+=6}d.addGroup(S,z,le),S+=z,y+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function _n(s){const e={};for(let n=0;n<s.length;n++){const r=js(s[n]);for(const a in r)e[a]=r[a]}return e}function t_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Gm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const n_={clone:js,merge:_n};var i_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends Nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i_,this.fragmentShader=r_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=t_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Wm extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hr=new se,Xp=new Rt,Yp=new Rt;class ri extends Wm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=If*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return If*2*Math.atan(Math.tan(vu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,n){return this.getViewBounds(e,Xp,Yp),n.subVectors(Yp,Xp)}setViewOffset(e,n,r,a,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(vu*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ns=-90,Ds=1;class s_ extends kn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ri(Ns,Ds,e,n);a.layers=this.layers,this.add(a);const c=new ri(Ns,Ds,e,n);c.layers=this.layers,this.add(c);const f=new ri(Ns,Ds,e,n);f.layers=this.layers,this.add(f);const d=new ri(Ns,Ds,e,n);d.layers=this.layers,this.add(d);const p=new ri(Ns,Ds,e,n);p.layers=this.layers,this.add(p);const m=new ri(Ns,Ds,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,f,d,p]=n;for(const m of n)this.remove(m);if(e===Fi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Rl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,_]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(x,y,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class jm extends Rn{constructor(e,n,r,a,c,f,d,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:Hs,super(e,n,r,a,c,f,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class o_ extends Yr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new jm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:si}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Go(5,5,5),c=new Bi({name:"CubemapFromEquirect",uniforms:js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Cn,blending:mr});c.uniforms.tEquirect.value=n;const f=new mi(a,c),d=n.minFilter;return n.minFilter===Gr&&(n.minFilter=si),new s_(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(c)}}const Bu=new se,a_=new se,l_=new st;class Or{constructor(e=new se(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Bu.subVectors(r,n).cross(a_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Bu),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||l_.getNormalMatrix(e),a=this.coplanarPoint(Bu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new jf,hl=new se;class Xm{constructor(e=new Or,n=new Or,r=new Or,a=new Or,c=new Or,f=new Or){this.planes=[e,n,r,a,c,f]}set(e,n,r,a,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(c),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Fi){const r=this.planes,a=e.elements,c=a[0],f=a[1],d=a[2],p=a[3],m=a[4],_=a[5],x=a[6],y=a[7],S=a[8],T=a[9],R=a[10],v=a[11],g=a[12],I=a[13],P=a[14],F=a[15];if(r[0].setComponents(p-c,y-m,v-S,F-g).normalize(),r[1].setComponents(p+c,y+m,v+S,F+g).normalize(),r[2].setComponents(p+f,y+_,v+T,F+I).normalize(),r[3].setComponents(p-f,y-_,v-T,F-I).normalize(),r[4].setComponents(p-d,y-x,v-R,F-P).normalize(),n===Fi)r[5].setComponents(p+d,y+x,v+R,F+P).normalize();else if(n===Rl)r[5].setComponents(d,x,R,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(hl.x=a.normal.x>0?e.max.x:e.min.x,hl.y=a.normal.y>0?e.max.y:e.min.y,hl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(hl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ym(){let s=null,e=!1,n=null,r=null;function a(c,f){n(c,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function c_(s){const e=new WeakMap;function n(d,p){const m=d.array,_=d.usage,x=m.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,p,m){const _=p.array,x=p.updateRanges;if(s.bindBuffer(m,d),x.length===0)s.bufferSubData(m,0,_);else{x.sort((S,T)=>S.start-T.start);let y=0;for(let S=1;S<x.length;S++){const T=x[y],R=x[S];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++y,x[y]=R)}x.length=y+1;for(let S=0,T=x.length;S<T;S++){const R=x[S];s.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:c,update:f}}class Wo extends qr{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,x=e/d,y=n/p,S=[],T=[],R=[],v=[];for(let g=0;g<_;g++){const I=g*y-f;for(let P=0;P<m;P++){const F=P*x-c;T.push(F,-I,0),R.push(0,0,1),v.push(P/d),v.push(1-g/p)}}for(let g=0;g<p;g++)for(let I=0;I<d;I++){const P=I+m*g,F=I+m*(g+1),Y=I+1+m*(g+1),k=I+1+m*g;S.push(P,F,k),S.push(F,Y,k)}this.setIndex(S),this.setAttribute("position",new Wr(T,3)),this.setAttribute("normal",new Wr(R,3)),this.setAttribute("uv",new Wr(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.widthSegments,e.heightSegments)}}var u_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f_=`#ifdef USE_ALPHAHASH
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
#endif`,d_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g_=`#ifdef USE_AOMAP
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
#endif`,v_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,__=`#ifdef USE_BATCHING
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
#endif`,x_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,M_=`#ifdef USE_IRIDESCENCE
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
#endif`,w_=`#ifdef USE_BUMPMAP
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
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,D_=`#define PI 3.141592653589793
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
} // validated`,I_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,U_=`vec3 transformedNormal = objectNormal;
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
#endif`,F_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z_="gl_FragColor = linearToOutputTexel( gl_FragColor );",H_=`
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
}`,V_=`#ifdef USE_ENVMAP
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
#endif`,G_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,W_=`#ifdef USE_ENVMAP
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
#endif`,j_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X_=`#ifdef USE_ENVMAP
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
#endif`,Y_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z_=`#ifdef USE_GRADIENTMAP
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
}`,Q_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tx=`uniform bool receiveShadow;
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
#endif`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ax=`PhysicalMaterial material;
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
#endif`,lx=`struct PhysicalMaterial {
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
}`,cx=`
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
#endif`,ux=`#if defined( RE_IndirectDiffuse )
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
#endif`,fx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,px=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_x=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xx=`#if defined( USE_POINTS_UV )
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
#endif`,yx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ax=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nx=`#ifdef USE_NORMALMAP
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
#endif`,Dx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ox=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qx=`float getShadowMask() {
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
}`,$x=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kx=`#ifdef USE_SKINNING
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
#endif`,Zx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,Jx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ey=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ty=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ny=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iy=`#ifdef USE_TRANSMISSION
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
#endif`,ry=`#ifdef USE_TRANSMISSION
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
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ly=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uy=`uniform sampler2D t2D;
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
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`#include <common>
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
}`,gy=`#if DEPTH_PACKING == 3200
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
}`,vy=`#define DISTANCE
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
}`,_y=`#define DISTANCE
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
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`uniform float scale;
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
}`,Ey=`uniform vec3 diffuse;
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
}`,My=`#include <common>
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
}`,wy=`uniform vec3 diffuse;
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
}`,Ty=`#define LAMBERT
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
}`,Ay=`#define LAMBERT
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
}`,Cy=`#define MATCAP
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
}`,Ry=`#define MATCAP
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
}`,by=`#define NORMAL
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
}`,Py=`#define NORMAL
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
}`,Ly=`#define PHONG
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
}`,Ny=`#define PHONG
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
}`,Dy=`#define STANDARD
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
}`,Iy=`#define STANDARD
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
}`,Uy=`#define TOON
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
}`,Fy=`#define TOON
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
}`,ky=`uniform float size;
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
}`,Oy=`uniform vec3 diffuse;
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
}`,By=`#include <common>
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
}`,zy=`uniform vec3 color;
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
}`,Hy=`uniform float rotation;
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
}`,Vy=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:u_,alphahash_pars_fragment:f_,alphamap_fragment:d_,alphamap_pars_fragment:h_,alphatest_fragment:p_,alphatest_pars_fragment:m_,aomap_fragment:g_,aomap_pars_fragment:v_,batching_pars_vertex:__,batching_vertex:x_,begin_vertex:y_,beginnormal_vertex:S_,bsdfs:E_,iridescence_fragment:M_,bumpmap_pars_fragment:w_,clipping_planes_fragment:T_,clipping_planes_pars_fragment:A_,clipping_planes_pars_vertex:C_,clipping_planes_vertex:R_,color_fragment:b_,color_pars_fragment:P_,color_pars_vertex:L_,color_vertex:N_,common:D_,cube_uv_reflection_fragment:I_,defaultnormal_vertex:U_,displacementmap_pars_vertex:F_,displacementmap_vertex:k_,emissivemap_fragment:O_,emissivemap_pars_fragment:B_,colorspace_fragment:z_,colorspace_pars_fragment:H_,envmap_fragment:V_,envmap_common_pars_fragment:G_,envmap_pars_fragment:W_,envmap_pars_vertex:j_,envmap_physical_pars_fragment:nx,envmap_vertex:X_,fog_vertex:Y_,fog_pars_vertex:q_,fog_fragment:$_,fog_pars_fragment:K_,gradientmap_pars_fragment:Z_,lightmap_pars_fragment:Q_,lights_lambert_fragment:J_,lights_lambert_pars_fragment:ex,lights_pars_begin:tx,lights_toon_fragment:ix,lights_toon_pars_fragment:rx,lights_phong_fragment:sx,lights_phong_pars_fragment:ox,lights_physical_fragment:ax,lights_physical_pars_fragment:lx,lights_fragment_begin:cx,lights_fragment_maps:ux,lights_fragment_end:fx,logdepthbuf_fragment:dx,logdepthbuf_pars_fragment:hx,logdepthbuf_pars_vertex:px,logdepthbuf_vertex:mx,map_fragment:gx,map_pars_fragment:vx,map_particle_fragment:_x,map_particle_pars_fragment:xx,metalnessmap_fragment:yx,metalnessmap_pars_fragment:Sx,morphinstance_vertex:Ex,morphcolor_vertex:Mx,morphnormal_vertex:wx,morphtarget_pars_vertex:Tx,morphtarget_vertex:Ax,normal_fragment_begin:Cx,normal_fragment_maps:Rx,normal_pars_fragment:bx,normal_pars_vertex:Px,normal_vertex:Lx,normalmap_pars_fragment:Nx,clearcoat_normal_fragment_begin:Dx,clearcoat_normal_fragment_maps:Ix,clearcoat_pars_fragment:Ux,iridescence_pars_fragment:Fx,opaque_fragment:kx,packing:Ox,premultiplied_alpha_fragment:Bx,project_vertex:zx,dithering_fragment:Hx,dithering_pars_fragment:Vx,roughnessmap_fragment:Gx,roughnessmap_pars_fragment:Wx,shadowmap_pars_fragment:jx,shadowmap_pars_vertex:Xx,shadowmap_vertex:Yx,shadowmask_pars_fragment:qx,skinbase_vertex:$x,skinning_pars_vertex:Kx,skinning_vertex:Zx,skinnormal_vertex:Qx,specularmap_fragment:Jx,specularmap_pars_fragment:ey,tonemapping_fragment:ty,tonemapping_pars_fragment:ny,transmission_fragment:iy,transmission_pars_fragment:ry,uv_pars_fragment:sy,uv_pars_vertex:oy,uv_vertex:ay,worldpos_vertex:ly,background_vert:cy,background_frag:uy,backgroundCube_vert:fy,backgroundCube_frag:dy,cube_vert:hy,cube_frag:py,depth_vert:my,depth_frag:gy,distanceRGBA_vert:vy,distanceRGBA_frag:_y,equirect_vert:xy,equirect_frag:yy,linedashed_vert:Sy,linedashed_frag:Ey,meshbasic_vert:My,meshbasic_frag:wy,meshlambert_vert:Ty,meshlambert_frag:Ay,meshmatcap_vert:Cy,meshmatcap_frag:Ry,meshnormal_vert:by,meshnormal_frag:Py,meshphong_vert:Ly,meshphong_frag:Ny,meshphysical_vert:Dy,meshphysical_frag:Iy,meshtoon_vert:Uy,meshtoon_frag:Fy,points_vert:ky,points_frag:Oy,shadow_vert:By,shadow_frag:zy,sprite_vert:Hy,sprite_frag:Vy},be={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},pi={basic:{uniforms:_n([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:_n([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:_n([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:_n([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:_n([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:_n([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:_n([be.points,be.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:_n([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:_n([be.common,be.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:_n([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:_n([be.sprite,be.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:_n([be.common,be.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:_n([be.lights,be.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};pi.physical={uniforms:_n([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const pl={r:0,b:0,g:0},Fr=new Oi,Gy=new jt;function Wy(s,e,n,r,a,c,f){const d=new Ct(0);let p=c===!0?0:1,m,_,x=null,y=0,S=null;function T(I){let P=I.isScene===!0?I.background:null;return P&&P.isTexture&&(P=(I.backgroundBlurriness>0?n:e).get(P)),P}function R(I){let P=!1;const F=T(I);F===null?g(d,p):F&&F.isColor&&(g(F,1),P=!0);const Y=s.xr.getEnvironmentBlendMode();Y==="additive"?r.buffers.color.setClear(0,0,0,1,f):Y==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(I,P){const F=T(P);F&&(F.isCubeTexture||F.mapping===Pl)?(_===void 0&&(_=new mi(new Go(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:js(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(Y,k,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Fr.copy(P.backgroundRotation),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),_.material.uniforms.envMap.value=F,_.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Gy.makeRotationFromEuler(Fr)),_.material.toneMapped=Mt.getTransfer(F.colorSpace)!==It,(x!==F||y!==F.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,x=F,y=F.version,S=s.toneMapping),_.layers.enableAll(),I.unshift(_,_.geometry,_.material,0,0,null)):F&&F.isTexture&&(m===void 0&&(m=new mi(new Wo(2,2),new Bi({name:"BackgroundMaterial",uniforms:js(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=F,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(F.colorSpace)!==It,F.matrixAutoUpdate===!0&&F.updateMatrix(),m.material.uniforms.uvTransform.value.copy(F.matrix),(x!==F||y!==F.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,x=F,y=F.version,S=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function g(I,P){I.getRGB(pl,Gm(s)),r.buffers.color.setClear(pl.r,pl.g,pl.b,P,f)}return{getClearColor:function(){return d},setClearColor:function(I,P=1){d.set(I),p=P,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,g(d,p)},render:R,addToRenderList:v}}function jy(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=y(null);let c=a,f=!1;function d(E,A,ne,Z,oe){let de=!1;const re=x(Z,ne,A);c!==re&&(c=re,m(c.object)),de=S(E,Z,ne,oe),de&&T(E,Z,ne,oe),oe!==null&&e.update(oe,s.ELEMENT_ARRAY_BUFFER),(de||f)&&(f=!1,F(E,A,ne,Z),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function p(){return s.createVertexArray()}function m(E){return s.bindVertexArray(E)}function _(E){return s.deleteVertexArray(E)}function x(E,A,ne){const Z=ne.wireframe===!0;let oe=r[E.id];oe===void 0&&(oe={},r[E.id]=oe);let de=oe[A.id];de===void 0&&(de={},oe[A.id]=de);let re=de[Z];return re===void 0&&(re=y(p()),de[Z]=re),re}function y(E){const A=[],ne=[],Z=[];for(let oe=0;oe<n;oe++)A[oe]=0,ne[oe]=0,Z[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:ne,attributeDivisors:Z,object:E,attributes:{},index:null}}function S(E,A,ne,Z){const oe=c.attributes,de=A.attributes;let re=0;const ce=ne.getAttributes();for(const z in ce)if(ce[z].location>=0){const J=oe[z];let D=de[z];if(D===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(D=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(D=E.instanceColor)),J===void 0||J.attribute!==D||D&&J.data!==D.data)return!0;re++}return c.attributesNum!==re||c.index!==Z}function T(E,A,ne,Z){const oe={},de=A.attributes;let re=0;const ce=ne.getAttributes();for(const z in ce)if(ce[z].location>=0){let J=de[z];J===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(J=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(J=E.instanceColor));const D={};D.attribute=J,J&&J.data&&(D.data=J.data),oe[z]=D,re++}c.attributes=oe,c.attributesNum=re,c.index=Z}function R(){const E=c.newAttributes;for(let A=0,ne=E.length;A<ne;A++)E[A]=0}function v(E){g(E,0)}function g(E,A){const ne=c.newAttributes,Z=c.enabledAttributes,oe=c.attributeDivisors;ne[E]=1,Z[E]===0&&(s.enableVertexAttribArray(E),Z[E]=1),oe[E]!==A&&(s.vertexAttribDivisor(E,A),oe[E]=A)}function I(){const E=c.newAttributes,A=c.enabledAttributes;for(let ne=0,Z=A.length;ne<Z;ne++)A[ne]!==E[ne]&&(s.disableVertexAttribArray(ne),A[ne]=0)}function P(E,A,ne,Z,oe,de,re){re===!0?s.vertexAttribIPointer(E,A,ne,oe,de):s.vertexAttribPointer(E,A,ne,Z,oe,de)}function F(E,A,ne,Z){R();const oe=Z.attributes,de=ne.getAttributes(),re=A.defaultAttributeValues;for(const ce in de){const z=de[ce];if(z.location>=0){let fe=oe[ce];if(fe===void 0&&(ce==="instanceMatrix"&&E.instanceMatrix&&(fe=E.instanceMatrix),ce==="instanceColor"&&E.instanceColor&&(fe=E.instanceColor)),fe!==void 0){const J=fe.normalized,D=fe.itemSize,ie=e.get(fe);if(ie===void 0)continue;const Pe=ie.buffer,K=ie.type,ue=ie.bytesPerElement,_e=K===s.INT||K===s.UNSIGNED_INT||fe.gpuType===Of;if(fe.isInterleavedBufferAttribute){const Se=fe.data,Ae=Se.stride,Le=fe.offset;if(Se.isInstancedInterleavedBuffer){for(let et=0;et<z.locationSize;et++)g(z.location+et,Se.meshPerAttribute);E.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let et=0;et<z.locationSize;et++)v(z.location+et);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let et=0;et<z.locationSize;et++)P(z.location+et,D/z.locationSize,K,J,Ae*ue,(Le+D/z.locationSize*et)*ue,_e)}else{if(fe.isInstancedBufferAttribute){for(let Se=0;Se<z.locationSize;Se++)g(z.location+Se,fe.meshPerAttribute);E.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Se=0;Se<z.locationSize;Se++)v(z.location+Se);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let Se=0;Se<z.locationSize;Se++)P(z.location+Se,D/z.locationSize,K,J,D*ue,D/z.locationSize*Se*ue,_e)}}else if(re!==void 0){const J=re[ce];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(z.location,J);break;case 3:s.vertexAttrib3fv(z.location,J);break;case 4:s.vertexAttrib4fv(z.location,J);break;default:s.vertexAttrib1fv(z.location,J)}}}}I()}function Y(){V();for(const E in r){const A=r[E];for(const ne in A){const Z=A[ne];for(const oe in Z)_(Z[oe].object),delete Z[oe];delete A[ne]}delete r[E]}}function k(E){if(r[E.id]===void 0)return;const A=r[E.id];for(const ne in A){const Z=A[ne];for(const oe in Z)_(Z[oe].object),delete Z[oe];delete A[ne]}delete r[E.id]}function N(E){for(const A in r){const ne=r[A];if(ne[E.id]===void 0)continue;const Z=ne[E.id];for(const oe in Z)_(Z[oe].object),delete Z[oe];delete ne[E.id]}}function V(){le(),f=!0,c!==a&&(c=a,m(c.object))}function le(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:V,resetDefaultState:le,dispose:Y,releaseStatesOfGeometry:k,releaseStatesOfProgram:N,initAttributes:R,enableAttribute:v,disableUnusedAttributes:I}}function Xy(s,e,n){let r;function a(m){r=m}function c(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function f(m,_,x){x!==0&&(s.drawArraysInstanced(r,m,_,x),n.update(_,r,x))}function d(m,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,x);let S=0;for(let T=0;T<x;T++)S+=_[T];n.update(S,r,1)}function p(m,_,x,y){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)f(m[T],_[T],y[T]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,y,0,x);let T=0;for(let R=0;R<x;R++)T+=_[R];for(let R=0;R<y.length;R++)n.update(T,r,y[R])}}this.setMode=a,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Yy(s,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(N){return!(N!==ai&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const V=N===Bo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==ki&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Ui&&!V)}function p(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const x=n.logarithmicDepthBuffer===!0,y=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(y===!0){const N=e.get("EXT_clip_control");N.clipControlEXT(N.LOWER_LEFT_EXT,N.ZERO_TO_ONE_EXT)}const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),F=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),Y=T>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:I,maxVaryings:P,maxFragmentUniforms:F,vertexTextures:Y,maxSamples:k}}function qy(s){const e=this;let n=null,r=0,a=!1,c=!1;const f=new Or,d=new st,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const S=x.length!==0||y||r!==0||a;return a=y,r=x.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,y){n=_(x,y,0)},this.setState=function(x,y,S){const T=x.clippingPlanes,R=x.clipIntersection,v=x.clipShadows,g=s.get(x);if(!a||T===null||T.length===0||c&&!v)c?_(null):m();else{const I=c?0:r,P=I*4;let F=g.clippingState||null;p.value=F,F=_(T,y,P,S);for(let Y=0;Y!==P;++Y)F[Y]=n[Y];g.clippingState=F,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(x,y,S,T){const R=x!==null?x.length:0;let v=null;if(R!==0){if(v=p.value,T!==!0||v===null){const g=S+R*4,I=y.matrixWorldInverse;d.getNormalMatrix(I),(v===null||v.length<g)&&(v=new Float32Array(g));for(let P=0,F=S;P!==R;++P,F+=4)f.copy(x[P]).applyMatrix4(I,d),f.normal.toArray(v,F),v[F+3]=f.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,v}}function $y(s){let e=new WeakMap;function n(f,d){return d===rf?f.mapping=Hs:d===sf&&(f.mapping=Vs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===rf||d===sf)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new o_(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class qm extends Wm{constructor(e=-1,n=1,r=1,a=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fs=4,qp=[.125,.215,.35,.446,.526,.582],Hr=20,zu=new qm,$p=new Ct;let Hu=null,Vu=0,Gu=0,Wu=!1;const Br=(1+Math.sqrt(5))/2,Is=1/Br,Kp=[new se(-Br,Is,0),new se(Br,Is,0),new se(-Is,0,Br),new se(Is,0,Br),new se(0,Br,-Is),new se(0,Br,Is),new se(-1,1,-1),new se(1,1,-1),new se(-1,1,1),new se(1,1,1)];class Zp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Hu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hu,Vu,Gu),this._renderer.xr.enabled=Wu,e.scissorTest=!1,ml(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:si,minFilter:si,generateMipmaps:!1,type:Bo,format:ai,colorSpace:_r,depthBuffer:!1},a=Qp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qp(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ky(c)),this._blurMaterial=Zy(c,e,n)}return a}_compileMaterial(e){const n=new mi(this._lodPlanes[0],e);this._renderer.compile(n,zu)}_sceneToCubeUV(e,n,r,a){const d=new ri(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor($p),_.toneMapping=gr,_.autoClear=!1;const S=new zm({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),T=new mi(new Go,S);let R=!1;const v=e.background;v?v.isColor&&(S.color.copy(v),e.background=null,R=!0):(S.color.copy($p),R=!0);for(let g=0;g<6;g++){const I=g%3;I===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):I===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const P=this._cubeSize;ml(a,I*P,g>2?P:0,P,P),_.setRenderTarget(a),R&&_.render(T,d),_.render(e,d)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=y,_.autoClear=x,e.background=v}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Hs||e.mapping===Vs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jp());const c=a?this._cubemapMaterial:this._equirectMaterial,f=new mi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;ml(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,zu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=Kp[(a-c-1)%Kp.length];this._blur(e,c-1,c,f,d)}n.autoClear=r}_blur(e,n,r,a,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",c),this._halfBlur(f,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new mi(this._lodPlanes[a],m),y=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Hr-1),R=c/T,v=isFinite(c)?1+Math.floor(_*R):Hr;v>Hr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Hr}`);const g=[];let I=0;for(let N=0;N<Hr;++N){const V=N/R,le=Math.exp(-V*V/2);g.push(le),N===0?I+=le:N<v&&(I+=2*le)}for(let N=0;N<g.length;N++)g[N]=g[N]/I;y.envMap.value=e.texture,y.samples.value=v,y.weights.value=g,y.latitudinal.value=f==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:P}=this;y.dTheta.value=T,y.mipInt.value=P-r;const F=this._sizeLods[a],Y=3*F*(a>P-Fs?a-P+Fs:0),k=4*(this._cubeSize-F);ml(n,Y,k,3*F,2*F),p.setRenderTarget(n),p.render(x,zu)}}function Ky(s){const e=[],n=[],r=[];let a=s;const c=s-Fs+1+qp.length;for(let f=0;f<c;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>s-Fs?p=qp[f-s+Fs-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,x=1+m,y=[_,_,x,_,x,x,_,_,x,x,_,x],S=6,T=6,R=3,v=2,g=1,I=new Float32Array(R*T*S),P=new Float32Array(v*T*S),F=new Float32Array(g*T*S);for(let k=0;k<S;k++){const N=k%3*2/3-1,V=k>2?0:-1,le=[N,V,0,N+2/3,V,0,N+2/3,V+1,0,N,V,0,N+2/3,V+1,0,N,V+1,0];I.set(le,R*T*k),P.set(y,v*T*k);const E=[k,k,k,k,k,k];F.set(E,g*T*k)}const Y=new qr;Y.setAttribute("position",new gi(I,R)),Y.setAttribute("uv",new gi(P,v)),Y.setAttribute("faceIndex",new gi(F,g)),e.push(Y),a>Fs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Qp(s,e,n){const r=new Yr(s,e,n);return r.texture.mapping=Pl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ml(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function Zy(s,e,n){const r=new Float32Array(Hr),a=new se(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Xf(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Jp(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xf(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function em(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Xf(){return`

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
	`}function Qy(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===rf||p===sf,_=p===Hs||p===Vs;if(m||_){let x=e.get(d);const y=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return n===null&&(n=new Zp(s)),x=m?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new Zp(s)),x=m?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",c),x.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function Jy(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Ml("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function eS(s,e,n,r){const a={},c=new WeakMap;function f(x){const y=x.target;y.index!==null&&e.remove(y.index);for(const T in y.attributes)e.remove(y.attributes[T]);for(const T in y.morphAttributes){const R=y.morphAttributes[T];for(let v=0,g=R.length;v<g;v++)e.remove(R[v])}y.removeEventListener("dispose",f),delete a[y.id];const S=c.get(y);S&&(e.remove(S),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function d(x,y){return a[y.id]===!0||(y.addEventListener("dispose",f),a[y.id]=!0,n.memory.geometries++),y}function p(x){const y=x.attributes;for(const T in y)e.update(y[T],s.ARRAY_BUFFER);const S=x.morphAttributes;for(const T in S){const R=S[T];for(let v=0,g=R.length;v<g;v++)e.update(R[v],s.ARRAY_BUFFER)}}function m(x){const y=[],S=x.index,T=x.attributes.position;let R=0;if(S!==null){const I=S.array;R=S.version;for(let P=0,F=I.length;P<F;P+=3){const Y=I[P+0],k=I[P+1],N=I[P+2];y.push(Y,k,k,N,N,Y)}}else if(T!==void 0){const I=T.array;R=T.version;for(let P=0,F=I.length/3-1;P<F;P+=3){const Y=P+0,k=P+1,N=P+2;y.push(Y,k,k,N,N,Y)}}else return;const v=new(Um(y)?Vm:Hm)(y,1);v.version=R;const g=c.get(x);g&&e.remove(g),c.set(x,v)}function _(x){const y=c.get(x);if(y){const S=x.index;S!==null&&y.version<S.version&&m(x)}else m(x);return c.get(x)}return{get:d,update:p,getWireframeAttribute:_}}function tS(s,e,n){let r;function a(y){r=y}let c,f;function d(y){c=y.type,f=y.bytesPerElement}function p(y,S){s.drawElements(r,S,c,y*f),n.update(S,r,1)}function m(y,S,T){T!==0&&(s.drawElementsInstanced(r,S,c,y*f,T),n.update(S,r,T))}function _(y,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,y,0,T);let v=0;for(let g=0;g<T;g++)v+=S[g];n.update(v,r,1)}function x(y,S,T,R){if(T===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<y.length;g++)m(y[g]/f,S[g],R[g]);else{v.multiDrawElementsInstancedWEBGL(r,S,0,c,y,0,R,0,T);let g=0;for(let I=0;I<T;I++)g+=S[I];for(let I=0;I<R.length;I++)n.update(g,r,R[I])}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function nS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(c/3);break;case s.LINES:n.lines+=d*(c/2);break;case s.LINE_STRIP:n.lines+=d*(c-1);break;case s.LINE_LOOP:n.lines+=d*c;break;case s.POINTS:n.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function iS(s,e,n){const r=new WeakMap,a=new Vt;function c(f,d,p){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let y=r.get(d);if(y===void 0||y.count!==x){let E=function(){V.dispose(),r.delete(d),d.removeEventListener("dispose",E)};var S=E;y!==void 0&&y.texture.dispose();const T=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let F=0;T===!0&&(F=1),R===!0&&(F=2),v===!0&&(F=3);let Y=d.attributes.position.count*F,k=1;Y>e.maxTextureSize&&(k=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const N=new Float32Array(Y*k*4*x),V=new km(N,Y,k,x);V.type=Ui,V.needsUpdate=!0;const le=F*4;for(let A=0;A<x;A++){const ne=g[A],Z=I[A],oe=P[A],de=Y*k*4*A;for(let re=0;re<ne.count;re++){const ce=re*le;T===!0&&(a.fromBufferAttribute(ne,re),N[de+ce+0]=a.x,N[de+ce+1]=a.y,N[de+ce+2]=a.z,N[de+ce+3]=0),R===!0&&(a.fromBufferAttribute(Z,re),N[de+ce+4]=a.x,N[de+ce+5]=a.y,N[de+ce+6]=a.z,N[de+ce+7]=0),v===!0&&(a.fromBufferAttribute(oe,re),N[de+ce+8]=a.x,N[de+ce+9]=a.y,N[de+ce+10]=a.z,N[de+ce+11]=oe.itemSize===4?a.w:1)}}y={count:x,texture:V,size:new Rt(Y,k)},r.set(d,y),d.addEventListener("dispose",E)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let T=0;for(let v=0;v<m.length;v++)T+=m[v];const R=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",R),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function rS(s,e,n,r){let a=new WeakMap;function c(p){const m=r.render.frame,_=p.geometry,x=e.get(p,_);if(a.get(x)!==m&&(e.update(x),a.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;a.get(y)!==m&&(y.update(),a.set(y,m))}return x}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:f}}class $m extends Rn{constructor(e,n,r,a,c,f,d,p,m,_=Os){if(_!==Os&&_!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Os&&(r=Xr),r===void 0&&_===Ws&&(r=Gs),super(null,a,c,f,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:Yn,this.minFilter=p!==void 0?p:Yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Km=new Rn,tm=new $m(1,1),Zm=new km,Qm=new Gv,Jm=new jm,nm=[],im=[],rm=new Float32Array(16),sm=new Float32Array(9),om=new Float32Array(4);function Ys(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let c=nm[a];if(c===void 0&&(c=new Float32Array(a),nm[a]=c),e!==0){r.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(c,d)}return c}function $t(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Kt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Dl(s,e){let n=im[e];n===void 0&&(n=new Int32Array(e),im[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function sS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function oS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2fv(this.addr,e),Kt(n,e)}}function aS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;s.uniform3fv(this.addr,e),Kt(n,e)}}function lS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4fv(this.addr,e),Kt(n,e)}}function cS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;om.set(r),s.uniformMatrix2fv(this.addr,!1,om),Kt(n,r)}}function uS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;sm.set(r),s.uniformMatrix3fv(this.addr,!1,sm),Kt(n,r)}}function fS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;rm.set(r),s.uniformMatrix4fv(this.addr,!1,rm),Kt(n,r)}}function dS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function hS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2iv(this.addr,e),Kt(n,e)}}function pS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3iv(this.addr,e),Kt(n,e)}}function mS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4iv(this.addr,e),Kt(n,e)}}function gS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function vS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2uiv(this.addr,e),Kt(n,e)}}function _S(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3uiv(this.addr,e),Kt(n,e)}}function xS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4uiv(this.addr,e),Kt(n,e)}}function yS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let c;this.type===s.SAMPLER_2D_SHADOW?(tm.compareFunction=Im,c=tm):c=Km,n.setTexture2D(e||c,a)}function SS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Qm,a)}function ES(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Jm,a)}function MS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Zm,a)}function wS(s){switch(s){case 5126:return sS;case 35664:return oS;case 35665:return aS;case 35666:return lS;case 35674:return cS;case 35675:return uS;case 35676:return fS;case 5124:case 35670:return dS;case 35667:case 35671:return hS;case 35668:case 35672:return pS;case 35669:case 35673:return mS;case 5125:return gS;case 36294:return vS;case 36295:return _S;case 36296:return xS;case 35678:case 36198:case 36298:case 36306:case 35682:return yS;case 35679:case 36299:case 36307:return SS;case 35680:case 36300:case 36308:case 36293:return ES;case 36289:case 36303:case 36311:case 36292:return MS}}function TS(s,e){s.uniform1fv(this.addr,e)}function AS(s,e){const n=Ys(e,this.size,2);s.uniform2fv(this.addr,n)}function CS(s,e){const n=Ys(e,this.size,3);s.uniform3fv(this.addr,n)}function RS(s,e){const n=Ys(e,this.size,4);s.uniform4fv(this.addr,n)}function bS(s,e){const n=Ys(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function PS(s,e){const n=Ys(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function LS(s,e){const n=Ys(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function NS(s,e){s.uniform1iv(this.addr,e)}function DS(s,e){s.uniform2iv(this.addr,e)}function IS(s,e){s.uniform3iv(this.addr,e)}function US(s,e){s.uniform4iv(this.addr,e)}function FS(s,e){s.uniform1uiv(this.addr,e)}function kS(s,e){s.uniform2uiv(this.addr,e)}function OS(s,e){s.uniform3uiv(this.addr,e)}function BS(s,e){s.uniform4uiv(this.addr,e)}function zS(s,e,n){const r=this.cache,a=e.length,c=Dl(n,a);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||Km,c[f])}function HS(s,e,n){const r=this.cache,a=e.length,c=Dl(n,a);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||Qm,c[f])}function VS(s,e,n){const r=this.cache,a=e.length,c=Dl(n,a);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||Jm,c[f])}function GS(s,e,n){const r=this.cache,a=e.length,c=Dl(n,a);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||Zm,c[f])}function WS(s){switch(s){case 5126:return TS;case 35664:return AS;case 35665:return CS;case 35666:return RS;case 35674:return bS;case 35675:return PS;case 35676:return LS;case 5124:case 35670:return NS;case 35667:case 35671:return DS;case 35668:case 35672:return IS;case 35669:case 35673:return US;case 5125:return FS;case 36294:return kS;case 36295:return OS;case 36296:return BS;case 35678:case 36198:case 36298:case 36306:case 35682:return zS;case 35679:case 36299:case 36307:return HS;case 35680:case 36300:case 36308:case 36293:return VS;case 36289:case 36303:case 36311:case 36292:return GS}}class jS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=wS(n.type)}}class XS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=WS(n.type)}}class YS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,f=a.length;c!==f;++c){const d=a[c];d.setValue(e,n[d.id],r)}}}const ju=/(\w+)(\])?(\[|\.)?/g;function am(s,e){s.seq.push(e),s.map[e.id]=e}function qS(s,e,n){const r=s.name,a=r.length;for(ju.lastIndex=0;;){const c=ju.exec(r),f=ju.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){am(n,m===void 0?new jS(d,s,e):new XS(d,s,e));break}else{let x=n.map[d];x===void 0&&(x=new YS(d),am(n,x)),n=x}}}class wl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),f=e.getUniformLocation(n,c.name);qS(c,f,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,f=n.length;c!==f;++c){const d=n[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function lm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const $S=37297;let KS=0;function ZS(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=a;f<c;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}function QS(s){const e=Mt.getPrimaries(Mt.workingColorSpace),n=Mt.getPrimaries(s);let r;switch(e===n?r="":e===Cl&&n===Al?r="LinearDisplayP3ToLinearSRGB":e===Al&&n===Cl&&(r="LinearSRGBToLinearDisplayP3"),s){case _r:case Ll:return[r,"LinearTransferOETF"];case hi:case Wf:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function cm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+ZS(s.getShaderSource(e),f)}else return a}function JS(s,e){const n=QS(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function eE(s,e){let n;switch(e){case pv:n="Linear";break;case mv:n="Reinhard";break;case gv:n="Cineon";break;case vv:n="ACESFilmic";break;case xv:n="AgX";break;case yv:n="Neutral";break;case _v:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const gl=new se;function tE(){Mt.getLuminanceCoefficients(gl);const s=gl.x.toFixed(4),e=gl.y.toFixed(4),n=gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function iE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function rE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=s.getActiveAttrib(e,a),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),n[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function Fo(s){return s!==""}function um(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uf(s){return s.replace(sE,aE)}const oE=new Map;function aE(s,e){let n=rt[e];if(n===void 0){const r=oE.get(e);if(r!==void 0)n=rt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Uf(n)}const lE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dm(s){return s.replace(lE,cE)}function cE(s,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function hm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function uE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Sm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Y0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function fE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hs:case Vs:e="ENVMAP_TYPE_CUBE";break;case Pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function hE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Em:e="ENVMAP_BLENDING_MULTIPLY";break;case dv:e="ENVMAP_BLENDING_MIX";break;case hv:e="ENVMAP_BLENDING_ADD";break}return e}function pE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function mE(s,e,n,r){const a=s.getContext(),c=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=uE(n),m=fE(n),_=dE(n),x=hE(n),y=pE(n),S=nE(n),T=iE(c),R=a.createProgram();let v,g,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Fo).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Fo).join(`
`),g.length>0&&(g+=`
`)):(v=[hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),g=[hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gr?"#define TONE_MAPPING":"",n.toneMapping!==gr?rt.tonemapping_pars_fragment:"",n.toneMapping!==gr?eE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,JS("linearToOutputTexel",n.outputColorSpace),tE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fo).join(`
`)),f=Uf(f),f=um(f,n),f=fm(f,n),d=Uf(d),d=um(d,n),d=fm(d,n),f=dm(f),d=dm(d),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,v=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",n.glslVersion===Pp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Pp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const P=I+v+f,F=I+g+d,Y=lm(a,a.VERTEX_SHADER,P),k=lm(a,a.FRAGMENT_SHADER,F);a.attachShader(R,Y),a.attachShader(R,k),n.index0AttributeName!==void 0?a.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function N(A){if(s.debug.checkShaderErrors){const ne=a.getProgramInfoLog(R).trim(),Z=a.getShaderInfoLog(Y).trim(),oe=a.getShaderInfoLog(k).trim();let de=!0,re=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,R,Y,k);else{const ce=cm(a,Y,"vertex"),z=cm(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+ne+`
`+ce+`
`+z)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(Z===""||oe==="")&&(re=!1);re&&(A.diagnostics={runnable:de,programLog:ne,vertexShader:{log:Z,prefix:v},fragmentShader:{log:oe,prefix:g}})}a.deleteShader(Y),a.deleteShader(k),V=new wl(a,R),le=rE(a,R)}let V;this.getUniforms=function(){return V===void 0&&N(this),V};let le;this.getAttributes=function(){return le===void 0&&N(this),le};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(R,$S)),E},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=KS++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=Y,this.fragmentShader=k,this}let gE=0;class vE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new _E(e),n.set(e,r)),r}}class _E{constructor(e){this.id=gE++,this.code=e,this.usedTimes=0}}function xE(s,e,n,r,a,c,f){const d=new Om,p=new vE,m=new Set,_=[],x=a.logarithmicDepthBuffer,y=a.reverseDepthBuffer,S=a.vertexTextures;let T=a.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return m.add(E),E===0?"uv":`uv${E}`}function g(E,A,ne,Z,oe){const de=Z.fog,re=oe.geometry,ce=E.isMeshStandardMaterial?Z.environment:null,z=(E.isMeshStandardMaterial?n:e).get(E.envMap||ce),fe=z&&z.mapping===Pl?z.image.height:null,J=R[E.type];E.precision!==null&&(T=a.getMaxPrecision(E.precision),T!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",T,"instead."));const D=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,ie=D!==void 0?D.length:0;let Pe=0;re.morphAttributes.position!==void 0&&(Pe=1),re.morphAttributes.normal!==void 0&&(Pe=2),re.morphAttributes.color!==void 0&&(Pe=3);let K,ue,_e,Se;if(J){const Zt=pi[J];K=Zt.vertexShader,ue=Zt.fragmentShader}else K=E.vertexShader,ue=E.fragmentShader,p.update(E),_e=p.getVertexShaderID(E),Se=p.getFragmentShaderID(E);const Ae=s.getRenderTarget(),Le=oe.isInstancedMesh===!0,et=oe.isBatchedMesh===!0,mt=!!E.map,ct=!!E.matcap,B=!!z,sn=!!E.aoMap,lt=!!E.lightMap,dt=!!E.bumpMap,Ke=!!E.normalMap,Tt=!!E.displacementMap,Qe=!!E.emissiveMap,L=!!E.metalnessMap,w=!!E.roughnessMap,$=E.anisotropy>0,pe=E.clearcoat>0,xe=E.dispersion>0,he=E.iridescence>0,Xe=E.sheen>0,Ce=E.transmission>0,Fe=$&&!!E.anisotropyMap,ht=pe&&!!E.clearcoatMap,Ee=pe&&!!E.clearcoatNormalMap,ke=pe&&!!E.clearcoatRoughnessMap,tt=he&&!!E.iridescenceMap,Je=he&&!!E.iridescenceThicknessMap,Be=Xe&&!!E.sheenColorMap,ut=Xe&&!!E.sheenRoughnessMap,it=!!E.specularMap,Et=!!E.specularColorMap,G=!!E.specularIntensityMap,Ne=Ce&&!!E.transmissionMap,ae=Ce&&!!E.thicknessMap,me=!!E.gradientMap,Re=!!E.alphaMap,Ie=E.alphaTest>0,ft=!!E.alphaHash,kt=!!E.extensions;let on=gr;E.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(on=s.toneMapping);const pt={shaderID:J,shaderType:E.type,shaderName:E.name,vertexShader:K,fragmentShader:ue,defines:E.defines,customVertexShaderID:_e,customFragmentShaderID:Se,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:T,batching:et,batchingColor:et&&oe._colorsTexture!==null,instancing:Le,instancingColor:Le&&oe.instanceColor!==null,instancingMorph:Le&&oe.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Ae===null?s.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:_r,alphaToCoverage:!!E.alphaToCoverage,map:mt,matcap:ct,envMap:B,envMapMode:B&&z.mapping,envMapCubeUVHeight:fe,aoMap:sn,lightMap:lt,bumpMap:dt,normalMap:Ke,displacementMap:S&&Tt,emissiveMap:Qe,normalMapObjectSpace:Ke&&E.normalMapType===Tv,normalMapTangentSpace:Ke&&E.normalMapType===wv,metalnessMap:L,roughnessMap:w,anisotropy:$,anisotropyMap:Fe,clearcoat:pe,clearcoatMap:ht,clearcoatNormalMap:Ee,clearcoatRoughnessMap:ke,dispersion:xe,iridescence:he,iridescenceMap:tt,iridescenceThicknessMap:Je,sheen:Xe,sheenColorMap:Be,sheenRoughnessMap:ut,specularMap:it,specularColorMap:Et,specularIntensityMap:G,transmission:Ce,transmissionMap:Ne,thicknessMap:ae,gradientMap:me,opaque:E.transparent===!1&&E.blending===ks&&E.alphaToCoverage===!1,alphaMap:Re,alphaTest:Ie,alphaHash:ft,combine:E.combine,mapUv:mt&&v(E.map.channel),aoMapUv:sn&&v(E.aoMap.channel),lightMapUv:lt&&v(E.lightMap.channel),bumpMapUv:dt&&v(E.bumpMap.channel),normalMapUv:Ke&&v(E.normalMap.channel),displacementMapUv:Tt&&v(E.displacementMap.channel),emissiveMapUv:Qe&&v(E.emissiveMap.channel),metalnessMapUv:L&&v(E.metalnessMap.channel),roughnessMapUv:w&&v(E.roughnessMap.channel),anisotropyMapUv:Fe&&v(E.anisotropyMap.channel),clearcoatMapUv:ht&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:ut&&v(E.sheenRoughnessMap.channel),specularMapUv:it&&v(E.specularMap.channel),specularColorMapUv:Et&&v(E.specularColorMap.channel),specularIntensityMapUv:G&&v(E.specularIntensityMap.channel),transmissionMapUv:Ne&&v(E.transmissionMap.channel),thicknessMapUv:ae&&v(E.thicknessMap.channel),alphaMapUv:Re&&v(E.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Ke||$),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!re.attributes.uv&&(mt||Re),fog:!!de,useFog:E.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:y,skinning:oe.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Pe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&ne.length>0,shadowMapType:s.shadowMap.type,toneMapping:on,decodeVideoTexture:mt&&E.map.isVideoTexture===!0&&Mt.getTransfer(E.map.colorSpace)===It,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ii,flipSided:E.side===Cn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:kt&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&E.extensions.multiDraw===!0||et)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return pt.vertexUv1s=m.has(1),pt.vertexUv2s=m.has(2),pt.vertexUv3s=m.has(3),m.clear(),pt}function I(E){const A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(const ne in E.defines)A.push(ne),A.push(E.defines[ne]);return E.isRawShaderMaterial===!1&&(P(A,E),F(A,E),A.push(s.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function P(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.anisotropyMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.numLightProbes),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function F(E,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),E.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.alphaToCoverage&&d.enable(20),E.push(d.mask)}function Y(E){const A=R[E.type];let ne;if(A){const Z=pi[A];ne=n_.clone(Z.uniforms)}else ne=E.uniforms;return ne}function k(E,A){let ne;for(let Z=0,oe=_.length;Z<oe;Z++){const de=_[Z];if(de.cacheKey===A){ne=de,++ne.usedTimes;break}}return ne===void 0&&(ne=new mE(s,A,E,c),_.push(ne)),ne}function N(E){if(--E.usedTimes===0){const A=_.indexOf(E);_[A]=_[_.length-1],_.pop(),E.destroy()}}function V(E){p.remove(E)}function le(){p.dispose()}return{getParameters:g,getProgramCacheKey:I,getUniforms:Y,acquireProgram:k,releaseProgram:N,releaseShaderCache:V,programs:_,dispose:le}}function yE(){let s=new WeakMap;function e(f){return s.has(f)}function n(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function a(f,d,p){s.get(f)[d]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:c}}function SE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function pm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function mm(){const s=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function f(x,y,S,T,R,v){let g=s[e];return g===void 0?(g={id:x.id,object:x,geometry:y,material:S,groupOrder:T,renderOrder:x.renderOrder,z:R,group:v},s[e]=g):(g.id=x.id,g.object=x,g.geometry=y,g.material=S,g.groupOrder=T,g.renderOrder=x.renderOrder,g.z=R,g.group=v),e++,g}function d(x,y,S,T,R,v){const g=f(x,y,S,T,R,v);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function p(x,y,S,T,R,v){const g=f(x,y,S,T,R,v);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(x,y){n.length>1&&n.sort(x||SE),r.length>1&&r.sort(y||pm),a.length>1&&a.sort(y||pm)}function _(){for(let x=e,y=s.length;x<y;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:d,unshift:p,finish:_,sort:m}}function EE(){let s=new WeakMap;function e(r,a){const c=s.get(r);let f;return c===void 0?(f=new mm,s.set(r,[f])):a>=c.length?(f=new mm,c.push(f)):f=c[a],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function ME(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new se,color:new Ct};break;case"SpotLight":n={position:new se,direction:new se,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new se,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new se,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":n={color:new Ct,position:new se,halfWidth:new se,halfHeight:new se};break}return s[e.id]=n,n}}}function wE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let TE=0;function AE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function CE(s){const e=new ME,n=wE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new se);const a=new se,c=new jt,f=new jt;function d(m){let _=0,x=0,y=0;for(let le=0;le<9;le++)r.probe[le].set(0,0,0);let S=0,T=0,R=0,v=0,g=0,I=0,P=0,F=0,Y=0,k=0,N=0;m.sort(AE);for(let le=0,E=m.length;le<E;le++){const A=m[le],ne=A.color,Z=A.intensity,oe=A.distance,de=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)_+=ne.r*Z,x+=ne.g*Z,y+=ne.b*Z;else if(A.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(A.sh.coefficients[re],Z);N++}else if(A.isDirectionalLight){const re=e.get(A);if(re.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const ce=A.shadow,z=n.get(A);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,r.directionalShadow[S]=z,r.directionalShadowMap[S]=de,r.directionalShadowMatrix[S]=A.shadow.matrix,I++}r.directional[S]=re,S++}else if(A.isSpotLight){const re=e.get(A);re.position.setFromMatrixPosition(A.matrixWorld),re.color.copy(ne).multiplyScalar(Z),re.distance=oe,re.coneCos=Math.cos(A.angle),re.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),re.decay=A.decay,r.spot[R]=re;const ce=A.shadow;if(A.map&&(r.spotLightMap[Y]=A.map,Y++,ce.updateMatrices(A),A.castShadow&&k++),r.spotLightMatrix[R]=ce.matrix,A.castShadow){const z=n.get(A);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,r.spotShadow[R]=z,r.spotShadowMap[R]=de,F++}R++}else if(A.isRectAreaLight){const re=e.get(A);re.color.copy(ne).multiplyScalar(Z),re.halfWidth.set(A.width*.5,0,0),re.halfHeight.set(0,A.height*.5,0),r.rectArea[v]=re,v++}else if(A.isPointLight){const re=e.get(A);if(re.color.copy(A.color).multiplyScalar(A.intensity),re.distance=A.distance,re.decay=A.decay,A.castShadow){const ce=A.shadow,z=n.get(A);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,z.shadowCameraNear=ce.camera.near,z.shadowCameraFar=ce.camera.far,r.pointShadow[T]=z,r.pointShadowMap[T]=de,r.pointShadowMatrix[T]=A.shadow.matrix,P++}r.point[T]=re,T++}else if(A.isHemisphereLight){const re=e.get(A);re.skyColor.copy(A.color).multiplyScalar(Z),re.groundColor.copy(A.groundColor).multiplyScalar(Z),r.hemi[g]=re,g++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=y;const V=r.hash;(V.directionalLength!==S||V.pointLength!==T||V.spotLength!==R||V.rectAreaLength!==v||V.hemiLength!==g||V.numDirectionalShadows!==I||V.numPointShadows!==P||V.numSpotShadows!==F||V.numSpotMaps!==Y||V.numLightProbes!==N)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=v,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=F,r.spotShadowMap.length=F,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=F+Y-k,r.spotLightMap.length=Y,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=N,V.directionalLength=S,V.pointLength=T,V.spotLength=R,V.rectAreaLength=v,V.hemiLength=g,V.numDirectionalShadows=I,V.numPointShadows=P,V.numSpotShadows=F,V.numSpotMaps=Y,V.numLightProbes=N,r.version=TE++)}function p(m,_){let x=0,y=0,S=0,T=0,R=0;const v=_.matrixWorldInverse;for(let g=0,I=m.length;g<I;g++){const P=m[g];if(P.isDirectionalLight){const F=r.directional[x];F.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(v),x++}else if(P.isSpotLight){const F=r.spot[S];F.position.setFromMatrixPosition(P.matrixWorld),F.position.applyMatrix4(v),F.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(v),S++}else if(P.isRectAreaLight){const F=r.rectArea[T];F.position.setFromMatrixPosition(P.matrixWorld),F.position.applyMatrix4(v),f.identity(),c.copy(P.matrixWorld),c.premultiply(v),f.extractRotation(c),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),F.halfWidth.applyMatrix4(f),F.halfHeight.applyMatrix4(f),T++}else if(P.isPointLight){const F=r.point[y];F.position.setFromMatrixPosition(P.matrixWorld),F.position.applyMatrix4(v),y++}else if(P.isHemisphereLight){const F=r.hemi[R];F.direction.setFromMatrixPosition(P.matrixWorld),F.direction.transformDirection(v),R++}}}return{setup:d,setupView:p,state:r}}function gm(s){const e=new CE(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function c(_){n.push(_)}function f(_){r.push(_)}function d(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function RE(s){let e=new WeakMap;function n(a,c=0){const f=e.get(a);let d;return f===void 0?(d=new gm(s),e.set(a,[d])):c>=f.length?(d=new gm(s),f.push(d)):d=f[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class bE extends Nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ev,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PE extends Nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const LE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NE=`uniform sampler2D shadow_pass;
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
}`;function DE(s,e,n){let r=new Xm;const a=new Rt,c=new Rt,f=new Vt,d=new bE({depthPacking:Mv}),p=new PE,m={},_=n.maxTextureSize,x={[vr]:Cn,[Cn]:vr,[Ii]:Ii},y=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:LE,fragmentShader:NE}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const T=new qr;T.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new mi(T,y),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sm;let g=this.type;this.render=function(k,N,V){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||k.length===0)return;const le=s.getRenderTarget(),E=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),ne=s.state;ne.setBlending(mr),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const Z=g!==Di&&this.type===Di,oe=g===Di&&this.type!==Di;for(let de=0,re=k.length;de<re;de++){const ce=k[de],z=ce.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const fe=z.getFrameExtents();if(a.multiply(fe),c.copy(z.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(c.x=Math.floor(_/fe.x),a.x=c.x*fe.x,z.mapSize.x=c.x),a.y>_&&(c.y=Math.floor(_/fe.y),a.y=c.y*fe.y,z.mapSize.y=c.y)),z.map===null||Z===!0||oe===!0){const D=this.type!==Di?{minFilter:Yn,magFilter:Yn}:{};z.map!==null&&z.map.dispose(),z.map=new Yr(a.x,a.y,D),z.map.texture.name=ce.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const J=z.getViewportCount();for(let D=0;D<J;D++){const ie=z.getViewport(D);f.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),ne.viewport(f),z.updateMatrices(ce,D),r=z.getFrustum(),F(N,V,z.camera,ce,this.type)}z.isPointLightShadow!==!0&&this.type===Di&&I(z,V),z.needsUpdate=!1}g=this.type,v.needsUpdate=!1,s.setRenderTarget(le,E,A)};function I(k,N){const V=e.update(R);y.defines.VSM_SAMPLES!==k.blurSamples&&(y.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Yr(a.x,a.y)),y.uniforms.shadow_pass.value=k.map.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(N,null,V,y,R,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(N,null,V,S,R,null)}function P(k,N,V,le){let E=null;const A=V.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(A!==void 0)E=A;else if(E=V.isPointLight===!0?p:d,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const ne=E.uuid,Z=N.uuid;let oe=m[ne];oe===void 0&&(oe={},m[ne]=oe);let de=oe[Z];de===void 0&&(de=E.clone(),oe[Z]=de,N.addEventListener("dispose",Y)),E=de}if(E.visible=N.visible,E.wireframe=N.wireframe,le===Di?E.side=N.shadowSide!==null?N.shadowSide:N.side:E.side=N.shadowSide!==null?N.shadowSide:x[N.side],E.alphaMap=N.alphaMap,E.alphaTest=N.alphaTest,E.map=N.map,E.clipShadows=N.clipShadows,E.clippingPlanes=N.clippingPlanes,E.clipIntersection=N.clipIntersection,E.displacementMap=N.displacementMap,E.displacementScale=N.displacementScale,E.displacementBias=N.displacementBias,E.wireframeLinewidth=N.wireframeLinewidth,E.linewidth=N.linewidth,V.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const ne=s.properties.get(E);ne.light=V}return E}function F(k,N,V,le,E){if(k.visible===!1)return;if(k.layers.test(N.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&E===Di)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,k.matrixWorld);const Z=e.update(k),oe=k.material;if(Array.isArray(oe)){const de=Z.groups;for(let re=0,ce=de.length;re<ce;re++){const z=de[re],fe=oe[z.materialIndex];if(fe&&fe.visible){const J=P(k,fe,le,E);k.onBeforeShadow(s,k,N,V,Z,J,z),s.renderBufferDirect(V,null,Z,J,k,z),k.onAfterShadow(s,k,N,V,Z,J,z)}}}else if(oe.visible){const de=P(k,oe,le,E);k.onBeforeShadow(s,k,N,V,Z,de,null),s.renderBufferDirect(V,null,Z,de,k,null),k.onAfterShadow(s,k,N,V,Z,de,null)}}const ne=k.children;for(let Z=0,oe=ne.length;Z<oe;Z++)F(ne[Z],N,V,le,E)}function Y(k){k.target.removeEventListener("dispose",Y);for(const V in m){const le=m[V],E=k.target.uuid;E in le&&(le[E].dispose(),delete le[E])}}}const IE={[Ku]:Zu,[Qu]:tf,[Ju]:nf,[zs]:ef,[Zu]:Ku,[tf]:Qu,[nf]:Ju,[ef]:zs};function UE(s){function e(){let G=!1;const Ne=new Vt;let ae=null;const me=new Vt(0,0,0,0);return{setMask:function(Re){ae!==Re&&!G&&(s.colorMask(Re,Re,Re,Re),ae=Re)},setLocked:function(Re){G=Re},setClear:function(Re,Ie,ft,kt,on){on===!0&&(Re*=kt,Ie*=kt,ft*=kt),Ne.set(Re,Ie,ft,kt),me.equals(Ne)===!1&&(s.clearColor(Re,Ie,ft,kt),me.copy(Ne))},reset:function(){G=!1,ae=null,me.set(-1,0,0,0)}}}function n(){let G=!1,Ne=!1,ae=null,me=null,Re=null;return{setReversed:function(Ie){Ne=Ie},setTest:function(Ie){Ie?_e(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(Ie){ae!==Ie&&!G&&(s.depthMask(Ie),ae=Ie)},setFunc:function(Ie){if(Ne&&(Ie=IE[Ie]),me!==Ie){switch(Ie){case Ku:s.depthFunc(s.NEVER);break;case Zu:s.depthFunc(s.ALWAYS);break;case Qu:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case Ju:s.depthFunc(s.EQUAL);break;case ef:s.depthFunc(s.GEQUAL);break;case tf:s.depthFunc(s.GREATER);break;case nf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=Ie}},setLocked:function(Ie){G=Ie},setClear:function(Ie){Re!==Ie&&(s.clearDepth(Ie),Re=Ie)},reset:function(){G=!1,ae=null,me=null,Re=null}}}function r(){let G=!1,Ne=null,ae=null,me=null,Re=null,Ie=null,ft=null,kt=null,on=null;return{setTest:function(pt){G||(pt?_e(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(pt){Ne!==pt&&!G&&(s.stencilMask(pt),Ne=pt)},setFunc:function(pt,Zt,On){(ae!==pt||me!==Zt||Re!==On)&&(s.stencilFunc(pt,Zt,On),ae=pt,me=Zt,Re=On)},setOp:function(pt,Zt,On){(Ie!==pt||ft!==Zt||kt!==On)&&(s.stencilOp(pt,Zt,On),Ie=pt,ft=Zt,kt=On)},setLocked:function(pt){G=pt},setClear:function(pt){on!==pt&&(s.clearStencil(pt),on=pt)},reset:function(){G=!1,Ne=null,ae=null,me=null,Re=null,Ie=null,ft=null,kt=null,on=null}}}const a=new e,c=new n,f=new r,d=new WeakMap,p=new WeakMap;let m={},_={},x=new WeakMap,y=[],S=null,T=!1,R=null,v=null,g=null,I=null,P=null,F=null,Y=null,k=new Ct(0,0,0),N=0,V=!1,le=null,E=null,A=null,ne=null,Z=null;const oe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let de=!1,re=0;const ce=s.getParameter(s.VERSION);ce.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(ce)[1]),de=re>=1):ce.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),de=re>=2);let z=null,fe={};const J=s.getParameter(s.SCISSOR_BOX),D=s.getParameter(s.VIEWPORT),ie=new Vt().fromArray(J),Pe=new Vt().fromArray(D);function K(G,Ne,ae,me){const Re=new Uint8Array(4),Ie=s.createTexture();s.bindTexture(G,Ie),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ft=0;ft<ae;ft++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,Re):s.texImage2D(Ne+ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Re);return Ie}const ue={};ue[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),ue[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ue[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),f.setClear(0),_e(s.DEPTH_TEST),c.setFunc(zs),lt(!1),dt(wp),_e(s.CULL_FACE),B(mr);function _e(G){m[G]!==!0&&(s.enable(G),m[G]=!0)}function Se(G){m[G]!==!1&&(s.disable(G),m[G]=!1)}function Ae(G,Ne){return _[G]!==Ne?(s.bindFramebuffer(G,Ne),_[G]=Ne,G===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ne),G===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Le(G,Ne){let ae=y,me=!1;if(G){ae=x.get(Ne),ae===void 0&&(ae=[],x.set(Ne,ae));const Re=G.textures;if(ae.length!==Re.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let Ie=0,ft=Re.length;Ie<ft;Ie++)ae[Ie]=s.COLOR_ATTACHMENT0+Ie;ae.length=Re.length,me=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,me=!0);me&&s.drawBuffers(ae)}function et(G){return S!==G?(s.useProgram(G),S=G,!0):!1}const mt={[zr]:s.FUNC_ADD,[$0]:s.FUNC_SUBTRACT,[K0]:s.FUNC_REVERSE_SUBTRACT};mt[Z0]=s.MIN,mt[Q0]=s.MAX;const ct={[J0]:s.ZERO,[ev]:s.ONE,[tv]:s.SRC_COLOR,[qu]:s.SRC_ALPHA,[av]:s.SRC_ALPHA_SATURATE,[sv]:s.DST_COLOR,[iv]:s.DST_ALPHA,[nv]:s.ONE_MINUS_SRC_COLOR,[$u]:s.ONE_MINUS_SRC_ALPHA,[ov]:s.ONE_MINUS_DST_COLOR,[rv]:s.ONE_MINUS_DST_ALPHA,[lv]:s.CONSTANT_COLOR,[cv]:s.ONE_MINUS_CONSTANT_COLOR,[uv]:s.CONSTANT_ALPHA,[fv]:s.ONE_MINUS_CONSTANT_ALPHA};function B(G,Ne,ae,me,Re,Ie,ft,kt,on,pt){if(G===mr){T===!0&&(Se(s.BLEND),T=!1);return}if(T===!1&&(_e(s.BLEND),T=!0),G!==q0){if(G!==R||pt!==V){if((v!==zr||P!==zr)&&(s.blendEquation(s.FUNC_ADD),v=zr,P=zr),pt)switch(G){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tp:s.blendFunc(s.ONE,s.ONE);break;case Ap:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ap:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}g=null,I=null,F=null,Y=null,k.set(0,0,0),N=0,R=G,V=pt}return}Re=Re||Ne,Ie=Ie||ae,ft=ft||me,(Ne!==v||Re!==P)&&(s.blendEquationSeparate(mt[Ne],mt[Re]),v=Ne,P=Re),(ae!==g||me!==I||Ie!==F||ft!==Y)&&(s.blendFuncSeparate(ct[ae],ct[me],ct[Ie],ct[ft]),g=ae,I=me,F=Ie,Y=ft),(kt.equals(k)===!1||on!==N)&&(s.blendColor(kt.r,kt.g,kt.b,on),k.copy(kt),N=on),R=G,V=!1}function sn(G,Ne){G.side===Ii?Se(s.CULL_FACE):_e(s.CULL_FACE);let ae=G.side===Cn;Ne&&(ae=!ae),lt(ae),G.blending===ks&&G.transparent===!1?B(mr):B(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);const me=G.stencilWrite;f.setTest(me),me&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Tt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(G){le!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),le=G)}function dt(G){G!==j0?(_e(s.CULL_FACE),G!==E&&(G===wp?s.cullFace(s.BACK):G===X0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),E=G}function Ke(G){G!==A&&(de&&s.lineWidth(G),A=G)}function Tt(G,Ne,ae){G?(_e(s.POLYGON_OFFSET_FILL),(ne!==Ne||Z!==ae)&&(s.polygonOffset(Ne,ae),ne=Ne,Z=ae)):Se(s.POLYGON_OFFSET_FILL)}function Qe(G){G?_e(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function L(G){G===void 0&&(G=s.TEXTURE0+oe-1),z!==G&&(s.activeTexture(G),z=G)}function w(G,Ne,ae){ae===void 0&&(z===null?ae=s.TEXTURE0+oe-1:ae=z);let me=fe[ae];me===void 0&&(me={type:void 0,texture:void 0},fe[ae]=me),(me.type!==G||me.texture!==Ne)&&(z!==ae&&(s.activeTexture(ae),z=ae),s.bindTexture(G,Ne||ue[G]),me.type=G,me.texture=Ne)}function $(){const G=fe[z];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xe(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(G){ie.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),ie.copy(G))}function Be(G){Pe.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Pe.copy(G))}function ut(G,Ne){let ae=p.get(Ne);ae===void 0&&(ae=new WeakMap,p.set(Ne,ae));let me=ae.get(G);me===void 0&&(me=s.getUniformBlockIndex(Ne,G.name),ae.set(G,me))}function it(G,Ne){const me=p.get(Ne).get(G);d.get(Ne)!==me&&(s.uniformBlockBinding(Ne,me,G.__bindingPointIndex),d.set(Ne,me))}function Et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},z=null,fe={},_={},x=new WeakMap,y=[],S=null,T=!1,R=null,v=null,g=null,I=null,P=null,F=null,Y=null,k=new Ct(0,0,0),N=0,V=!1,le=null,E=null,A=null,ne=null,Z=null,ie.set(0,0,s.canvas.width,s.canvas.height),Pe.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),f.reset()}return{buffers:{color:a,depth:c,stencil:f},enable:_e,disable:Se,bindFramebuffer:Ae,drawBuffers:Le,useProgram:et,setBlending:B,setMaterial:sn,setFlipSided:lt,setCullFace:dt,setLineWidth:Ke,setPolygonOffset:Tt,setScissorTest:Qe,activeTexture:L,bindTexture:w,unbindTexture:$,compressedTexImage2D:pe,compressedTexImage3D:xe,texImage2D:ke,texImage3D:tt,updateUBOMapping:ut,uniformBlockBinding:it,texStorage2D:ht,texStorage3D:Ee,texSubImage2D:he,texSubImage3D:Xe,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Fe,scissor:Je,viewport:Be,reset:Et}}function vm(s,e,n,r){const a=FE(r);switch(n){case Cm:return s*e;case bm:return s*e;case Pm:return s*e*2;case Lm:return s*e/a.components*a.byteLength;case Hf:return s*e/a.components*a.byteLength;case Nm:return s*e*2/a.components*a.byteLength;case Vf:return s*e*2/a.components*a.byteLength;case Rm:return s*e*3/a.components*a.byteLength;case ai:return s*e*4/a.components*a.byteLength;case Gf:return s*e*4/a.components*a.byteLength;case _l:case xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yl:case Sl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cf:case ff:return Math.max(s,16)*Math.max(e,8)/4;case lf:case uf:return Math.max(s,8)*Math.max(e,8)/2;case df:case hf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case vf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case _f:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case xf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case yf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Sf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ef:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Mf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case wf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Af:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Cf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Rf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case El:case bf:case Pf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Dm:case Lf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Nf:case Df:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function FE(s){switch(s){case ki:case wm:return{byteLength:1,components:1};case Oo:case Tm:case Bo:return{byteLength:2,components:1};case Bf:case zf:return{byteLength:2,components:4};case Xr:case Of:case Ui:return{byteLength:4,components:1};case Am:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function kE(s,e,n,r,a,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Rt,_=new WeakMap;let x;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,w){return S?new OffscreenCanvas(L,w):bl("canvas")}function R(L,w,$){let pe=1;const xe=Qe(L);if((xe.width>$||xe.height>$)&&(pe=$/Math.max(xe.width,xe.height)),pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const he=Math.floor(pe*xe.width),Xe=Math.floor(pe*xe.height);x===void 0&&(x=T(he,Xe));const Ce=w?T(he,Xe):x;return Ce.width=he,Ce.height=Xe,Ce.getContext("2d").drawImage(L,0,0,he,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+he+"x"+Xe+")."),Ce}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),L;return L}function v(L){return L.generateMipmaps&&L.minFilter!==Yn&&L.minFilter!==si}function g(L){s.generateMipmap(L)}function I(L,w,$,pe,xe=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let he=w;if(w===s.RED&&($===s.FLOAT&&(he=s.R32F),$===s.HALF_FLOAT&&(he=s.R16F),$===s.UNSIGNED_BYTE&&(he=s.R8)),w===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(he=s.R8UI),$===s.UNSIGNED_SHORT&&(he=s.R16UI),$===s.UNSIGNED_INT&&(he=s.R32UI),$===s.BYTE&&(he=s.R8I),$===s.SHORT&&(he=s.R16I),$===s.INT&&(he=s.R32I)),w===s.RG&&($===s.FLOAT&&(he=s.RG32F),$===s.HALF_FLOAT&&(he=s.RG16F),$===s.UNSIGNED_BYTE&&(he=s.RG8)),w===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(he=s.RG8UI),$===s.UNSIGNED_SHORT&&(he=s.RG16UI),$===s.UNSIGNED_INT&&(he=s.RG32UI),$===s.BYTE&&(he=s.RG8I),$===s.SHORT&&(he=s.RG16I),$===s.INT&&(he=s.RG32I)),w===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(he=s.RGB8UI),$===s.UNSIGNED_SHORT&&(he=s.RGB16UI),$===s.UNSIGNED_INT&&(he=s.RGB32UI),$===s.BYTE&&(he=s.RGB8I),$===s.SHORT&&(he=s.RGB16I),$===s.INT&&(he=s.RGB32I)),w===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),$===s.UNSIGNED_INT&&(he=s.RGBA32UI),$===s.BYTE&&(he=s.RGBA8I),$===s.SHORT&&(he=s.RGBA16I),$===s.INT&&(he=s.RGBA32I)),w===s.RGB&&$===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),w===s.RGBA){const Xe=xe?Tl:Mt.getTransfer(pe);$===s.FLOAT&&(he=s.RGBA32F),$===s.HALF_FLOAT&&(he=s.RGBA16F),$===s.UNSIGNED_BYTE&&(he=Xe===It?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function P(L,w){let $;return L?w===null||w===Xr||w===Gs?$=s.DEPTH24_STENCIL8:w===Ui?$=s.DEPTH32F_STENCIL8:w===Oo&&($=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Xr||w===Gs?$=s.DEPTH_COMPONENT24:w===Ui?$=s.DEPTH_COMPONENT32F:w===Oo&&($=s.DEPTH_COMPONENT16),$}function F(L,w){return v(L)===!0||L.isFramebufferTexture&&L.minFilter!==Yn&&L.minFilter!==si?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function Y(L){const w=L.target;w.removeEventListener("dispose",Y),N(w),w.isVideoTexture&&_.delete(w)}function k(L){const w=L.target;w.removeEventListener("dispose",k),le(w)}function N(L){const w=r.get(L);if(w.__webglInit===void 0)return;const $=L.source,pe=y.get($);if(pe){const xe=pe[w.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&V(L),Object.keys(pe).length===0&&y.delete($)}r.remove(L)}function V(L){const w=r.get(L);s.deleteTexture(w.__webglTexture);const $=L.source,pe=y.get($);delete pe[w.__cacheKey],f.memory.textures--}function le(L){const w=r.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let xe=0;xe<w.__webglFramebuffer[pe].length;xe++)s.deleteFramebuffer(w.__webglFramebuffer[pe][xe]);else s.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)s.deleteFramebuffer(w.__webglFramebuffer[pe]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const $=L.textures;for(let pe=0,xe=$.length;pe<xe;pe++){const he=r.get($[pe]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),f.memory.textures--),r.remove($[pe])}r.remove(L)}let E=0;function A(){E=0}function ne(){const L=E;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),E+=1,L}function Z(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function oe(L,w){const $=r.get(L);if(L.isVideoTexture&&Ke(L),L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){const pe=L.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe($,L,w);return}}n.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+w)}function de(L,w){const $=r.get(L);if(L.version>0&&$.__version!==L.version){Pe($,L,w);return}n.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+w)}function re(L,w){const $=r.get(L);if(L.version>0&&$.__version!==L.version){Pe($,L,w);return}n.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+w)}function ce(L,w){const $=r.get(L);if(L.version>0&&$.__version!==L.version){K($,L,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+w)}const z={[of]:s.REPEAT,[Vr]:s.CLAMP_TO_EDGE,[af]:s.MIRRORED_REPEAT},fe={[Yn]:s.NEAREST,[Sv]:s.NEAREST_MIPMAP_NEAREST,[Ka]:s.NEAREST_MIPMAP_LINEAR,[si]:s.LINEAR,[gu]:s.LINEAR_MIPMAP_NEAREST,[Gr]:s.LINEAR_MIPMAP_LINEAR},J={[Av]:s.NEVER,[Nv]:s.ALWAYS,[Cv]:s.LESS,[Im]:s.LEQUAL,[Rv]:s.EQUAL,[Lv]:s.GEQUAL,[bv]:s.GREATER,[Pv]:s.NOTEQUAL};function D(L,w){if(w.type===Ui&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===si||w.magFilter===gu||w.magFilter===Ka||w.magFilter===Gr||w.minFilter===si||w.minFilter===gu||w.minFilter===Ka||w.minFilter===Gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,z[w.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,z[w.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,z[w.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,fe[w.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,fe[w.minFilter]),w.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,J[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Yn||w.minFilter!==Ka&&w.minFilter!==Gr||w.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function ie(L,w){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",Y));const pe=w.source;let xe=y.get(pe);xe===void 0&&(xe={},y.set(pe,xe));const he=Z(w);if(he!==L.__cacheKey){xe[he]===void 0&&(xe[he]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,$=!0),xe[he].usedTimes++;const Xe=xe[L.__cacheKey];Xe!==void 0&&(xe[L.__cacheKey].usedTimes--,Xe.usedTimes===0&&V(w)),L.__cacheKey=he,L.__webglTexture=xe[he].texture}return $}function Pe(L,w,$){let pe=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=s.TEXTURE_3D);const xe=ie(L,w),he=w.source;n.bindTexture(pe,L.__webglTexture,s.TEXTURE0+$);const Xe=r.get(he);if(he.version!==Xe.__version||xe===!0){n.activeTexture(s.TEXTURE0+$);const Ce=Mt.getPrimaries(Mt.workingColorSpace),Fe=w.colorSpace===pr?null:Mt.getPrimaries(w.colorSpace),ht=w.colorSpace===pr||Ce===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Ee=R(w.image,!1,a.maxTextureSize);Ee=Tt(w,Ee);const ke=c.convert(w.format,w.colorSpace),tt=c.convert(w.type);let Je=I(w.internalFormat,ke,tt,w.colorSpace,w.isVideoTexture);D(pe,w);let Be;const ut=w.mipmaps,it=w.isVideoTexture!==!0,Et=Xe.__version===void 0||xe===!0,G=he.dataReady,Ne=F(w,Ee);if(w.isDepthTexture)Je=P(w.format===Ws,w.type),Et&&(it?n.texStorage2D(s.TEXTURE_2D,1,Je,Ee.width,Ee.height):n.texImage2D(s.TEXTURE_2D,0,Je,Ee.width,Ee.height,0,ke,tt,null));else if(w.isDataTexture)if(ut.length>0){it&&Et&&n.texStorage2D(s.TEXTURE_2D,Ne,Je,ut[0].width,ut[0].height);for(let ae=0,me=ut.length;ae<me;ae++)Be=ut[ae],it?G&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,Be.width,Be.height,ke,tt,Be.data):n.texImage2D(s.TEXTURE_2D,ae,Je,Be.width,Be.height,0,ke,tt,Be.data);w.generateMipmaps=!1}else it?(Et&&n.texStorage2D(s.TEXTURE_2D,Ne,Je,Ee.width,Ee.height),G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,ke,tt,Ee.data)):n.texImage2D(s.TEXTURE_2D,0,Je,Ee.width,Ee.height,0,ke,tt,Ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){it&&Et&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,Je,ut[0].width,ut[0].height,Ee.depth);for(let ae=0,me=ut.length;ae<me;ae++)if(Be=ut[ae],w.format!==ai)if(ke!==null)if(it){if(G)if(w.layerUpdates.size>0){const Re=vm(Be.width,Be.height,w.format,w.type);for(const Ie of w.layerUpdates){const ft=Be.data.subarray(Ie*Re/Be.data.BYTES_PER_ELEMENT,(Ie+1)*Re/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,Ie,Be.width,Be.height,1,ke,ft,0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Be.width,Be.height,Ee.depth,ke,Be.data,0,0)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,Je,Be.width,Be.height,Ee.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?G&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Be.width,Be.height,Ee.depth,ke,tt,Be.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ae,Je,Be.width,Be.height,Ee.depth,0,ke,tt,Be.data)}else{it&&Et&&n.texStorage2D(s.TEXTURE_2D,Ne,Je,ut[0].width,ut[0].height);for(let ae=0,me=ut.length;ae<me;ae++)Be=ut[ae],w.format!==ai?ke!==null?it?G&&n.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,Be.width,Be.height,ke,Be.data):n.compressedTexImage2D(s.TEXTURE_2D,ae,Je,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?G&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,Be.width,Be.height,ke,tt,Be.data):n.texImage2D(s.TEXTURE_2D,ae,Je,Be.width,Be.height,0,ke,tt,Be.data)}else if(w.isDataArrayTexture)if(it){if(Et&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,Je,Ee.width,Ee.height,Ee.depth),G)if(w.layerUpdates.size>0){const ae=vm(Ee.width,Ee.height,w.format,w.type);for(const me of w.layerUpdates){const Re=Ee.data.subarray(me*ae/Ee.data.BYTES_PER_ELEMENT,(me+1)*ae/Ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,Ee.width,Ee.height,1,ke,tt,Re)}w.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,ke,tt,Ee.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Ee.width,Ee.height,Ee.depth,0,ke,tt,Ee.data);else if(w.isData3DTexture)it?(Et&&n.texStorage3D(s.TEXTURE_3D,Ne,Je,Ee.width,Ee.height,Ee.depth),G&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,ke,tt,Ee.data)):n.texImage3D(s.TEXTURE_3D,0,Je,Ee.width,Ee.height,Ee.depth,0,ke,tt,Ee.data);else if(w.isFramebufferTexture){if(Et)if(it)n.texStorage2D(s.TEXTURE_2D,Ne,Je,Ee.width,Ee.height);else{let ae=Ee.width,me=Ee.height;for(let Re=0;Re<Ne;Re++)n.texImage2D(s.TEXTURE_2D,Re,Je,ae,me,0,ke,tt,null),ae>>=1,me>>=1}}else if(ut.length>0){if(it&&Et){const ae=Qe(ut[0]);n.texStorage2D(s.TEXTURE_2D,Ne,Je,ae.width,ae.height)}for(let ae=0,me=ut.length;ae<me;ae++)Be=ut[ae],it?G&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,ke,tt,Be):n.texImage2D(s.TEXTURE_2D,ae,Je,ke,tt,Be);w.generateMipmaps=!1}else if(it){if(Et){const ae=Qe(Ee);n.texStorage2D(s.TEXTURE_2D,Ne,Je,ae.width,ae.height)}G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,tt,Ee)}else n.texImage2D(s.TEXTURE_2D,0,Je,ke,tt,Ee);v(w)&&g(pe),Xe.__version=he.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function K(L,w,$){if(w.image.length!==6)return;const pe=ie(L,w),xe=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+$);const he=r.get(xe);if(xe.version!==he.__version||pe===!0){n.activeTexture(s.TEXTURE0+$);const Xe=Mt.getPrimaries(Mt.workingColorSpace),Ce=w.colorSpace===pr?null:Mt.getPrimaries(w.colorSpace),Fe=w.colorSpace===pr||Xe===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ht=w.isCompressedTexture||w.image[0].isCompressedTexture,Ee=w.image[0]&&w.image[0].isDataTexture,ke=[];for(let me=0;me<6;me++)!ht&&!Ee?ke[me]=R(w.image[me],!0,a.maxCubemapSize):ke[me]=Ee?w.image[me].image:w.image[me],ke[me]=Tt(w,ke[me]);const tt=ke[0],Je=c.convert(w.format,w.colorSpace),Be=c.convert(w.type),ut=I(w.internalFormat,Je,Be,w.colorSpace),it=w.isVideoTexture!==!0,Et=he.__version===void 0||pe===!0,G=xe.dataReady;let Ne=F(w,tt);D(s.TEXTURE_CUBE_MAP,w);let ae;if(ht){it&&Et&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,ut,tt.width,tt.height);for(let me=0;me<6;me++){ae=ke[me].mipmaps;for(let Re=0;Re<ae.length;Re++){const Ie=ae[Re];w.format!==ai?Je!==null?it?G&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,0,0,Ie.width,Ie.height,Je,Ie.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,ut,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,0,0,Ie.width,Ie.height,Je,Be,Ie.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,ut,Ie.width,Ie.height,0,Je,Be,Ie.data)}}}else{if(ae=w.mipmaps,it&&Et){ae.length>0&&Ne++;const me=Qe(ke[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,ut,me.width,me.height)}for(let me=0;me<6;me++)if(Ee){it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ke[me].width,ke[me].height,Je,Be,ke[me].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ut,ke[me].width,ke[me].height,0,Je,Be,ke[me].data);for(let Re=0;Re<ae.length;Re++){const ft=ae[Re].image[me].image;it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,0,0,ft.width,ft.height,Je,Be,ft.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,ut,ft.width,ft.height,0,Je,Be,ft.data)}}else{it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Je,Be,ke[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ut,Je,Be,ke[me]);for(let Re=0;Re<ae.length;Re++){const Ie=ae[Re];it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,0,0,Je,Be,Ie.image[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,ut,Je,Be,Ie.image[me])}}}v(w)&&g(s.TEXTURE_CUBE_MAP),he.__version=xe.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ue(L,w,$,pe,xe,he){const Xe=c.convert($.format,$.colorSpace),Ce=c.convert($.type),Fe=I($.internalFormat,Xe,Ce,$.colorSpace);if(!r.get(w).__hasExternalTextures){const Ee=Math.max(1,w.width>>he),ke=Math.max(1,w.height>>he);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?n.texImage3D(xe,he,Fe,Ee,ke,w.depth,0,Xe,Ce,null):n.texImage2D(xe,he,Fe,Ee,ke,0,Xe,Ce,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),dt(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,xe,r.get($).__webglTexture,0,lt(w)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,xe,r.get($).__webglTexture,he),n.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(L,w,$){if(s.bindRenderbuffer(s.RENDERBUFFER,L),w.depthBuffer){const pe=w.depthTexture,xe=pe&&pe.isDepthTexture?pe.type:null,he=P(w.stencilBuffer,xe),Xe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=lt(w);dt(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,he,w.width,w.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,he,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,he,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Xe,s.RENDERBUFFER,L)}else{const pe=w.textures;for(let xe=0;xe<pe.length;xe++){const he=pe[xe],Xe=c.convert(he.format,he.colorSpace),Ce=c.convert(he.type),Fe=I(he.internalFormat,Xe,Ce,he.colorSpace),ht=lt(w);$&&dt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,Fe,w.width,w.height):dt(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,Fe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Se(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),oe(w.depthTexture,0);const pe=r.get(w.depthTexture).__webglTexture,xe=lt(w);if(w.depthTexture.format===Os)dt(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0);else if(w.depthTexture.format===Ws)dt(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Ae(L){const w=r.get(L),$=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const pe=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pe){const xe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pe.removeEventListener("dispose",xe)};pe.addEventListener("dispose",xe),w.__depthDisposeCallback=xe}w.__boundDepthTexture=pe}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Se(w.__webglFramebuffer,L)}else if($){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]===void 0)w.__webglDepthbuffer[pe]=s.createRenderbuffer(),_e(w.__webglDepthbuffer[pe],L,!1);else{const xe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,he)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),_e(w.__webglDepthbuffer,L,!1);else{const pe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,xe)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(L,w,$){const pe=r.get(L);w!==void 0&&ue(pe.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Ae(L)}function et(L){const w=L.texture,$=r.get(L),pe=r.get(w);L.addEventListener("dispose",k);const xe=L.textures,he=L.isWebGLCubeRenderTarget===!0,Xe=xe.length>1;if(Xe||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=w.version,f.memory.textures++),he){$.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer[Ce]=[];for(let Fe=0;Fe<w.mipmaps.length;Fe++)$.__webglFramebuffer[Ce][Fe]=s.createFramebuffer()}else $.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)$.__webglFramebuffer[Ce]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Xe)for(let Ce=0,Fe=xe.length;Ce<Fe;Ce++){const ht=r.get(xe[Ce]);ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&dt(L)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ce=0;Ce<xe.length;Ce++){const Fe=xe[Ce];$.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[Ce]);const ht=c.convert(Fe.format,Fe.colorSpace),Ee=c.convert(Fe.type),ke=I(Fe.internalFormat,ht,Ee,Fe.colorSpace,L.isXRRenderTarget===!0),tt=lt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,ke,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,$.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),_e($.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),D(s.TEXTURE_CUBE_MAP,w);for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)ue($.__webglFramebuffer[Ce][Fe],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Fe);else ue($.__webglFramebuffer[Ce],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);v(w)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Xe){for(let Ce=0,Fe=xe.length;Ce<Fe;Ce++){const ht=xe[Ce],Ee=r.get(ht);n.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),D(s.TEXTURE_2D,ht),ue($.__webglFramebuffer,L,ht,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),v(ht)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ce,pe.__webglTexture),D(Ce,w),w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)ue($.__webglFramebuffer[Fe],L,w,s.COLOR_ATTACHMENT0,Ce,Fe);else ue($.__webglFramebuffer,L,w,s.COLOR_ATTACHMENT0,Ce,0);v(w)&&g(Ce),n.unbindTexture()}L.depthBuffer&&Ae(L)}function mt(L){const w=L.textures;for(let $=0,pe=w.length;$<pe;$++){const xe=w[$];if(v(xe)){const he=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Xe=r.get(xe).__webglTexture;n.bindTexture(he,Xe),g(he),n.unbindTexture()}}}const ct=[],B=[];function sn(L){if(L.samples>0){if(dt(L)===!1){const w=L.textures,$=L.width,pe=L.height;let xe=s.COLOR_BUFFER_BIT;const he=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Xe=r.get(L),Ce=w.length>1;if(Ce)for(let Fe=0;Fe<w.length;Fe++)n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Fe]);const ht=r.get(w[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ht,0)}s.blitFramebuffer(0,0,$,pe,0,0,$,pe,xe,s.NEAREST),p===!0&&(ct.length=0,B.length=0,ct.push(s.COLOR_ATTACHMENT0+Fe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ct.push(he),B.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ct))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Fe=0;Fe<w.length;Fe++){n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Fe]);const ht=r.get(w[Fe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,ht,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const w=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function lt(L){return Math.min(a.maxSamples,L.samples)}function dt(L){const w=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ke(L){const w=f.render.frame;_.get(L)!==w&&(_.set(L,w),L.update())}function Tt(L,w){const $=L.colorSpace,pe=L.format,xe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==_r&&$!==pr&&(Mt.getTransfer($)===It?(pe!==ai||xe!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),w}function Qe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=ne,this.resetTextureUnits=A,this.setTexture2D=oe,this.setTexture2DArray=de,this.setTexture3D=re,this.setTextureCube=ce,this.rebindTextures=Le,this.setupRenderTarget=et,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=dt}function OE(s,e){function n(r,a=pr){let c;const f=Mt.getTransfer(a);if(r===ki)return s.UNSIGNED_BYTE;if(r===Bf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===zf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Am)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===wm)return s.BYTE;if(r===Tm)return s.SHORT;if(r===Oo)return s.UNSIGNED_SHORT;if(r===Of)return s.INT;if(r===Xr)return s.UNSIGNED_INT;if(r===Ui)return s.FLOAT;if(r===Bo)return s.HALF_FLOAT;if(r===Cm)return s.ALPHA;if(r===Rm)return s.RGB;if(r===ai)return s.RGBA;if(r===bm)return s.LUMINANCE;if(r===Pm)return s.LUMINANCE_ALPHA;if(r===Os)return s.DEPTH_COMPONENT;if(r===Ws)return s.DEPTH_STENCIL;if(r===Lm)return s.RED;if(r===Hf)return s.RED_INTEGER;if(r===Nm)return s.RG;if(r===Vf)return s.RG_INTEGER;if(r===Gf)return s.RGBA_INTEGER;if(r===_l||r===xl||r===yl||r===Sl)if(f===It)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===_l)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===yl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Sl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===_l)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===yl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Sl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lf||r===cf||r===uf||r===ff)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===lf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===uf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ff)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===df||r===hf||r===pf)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===df||r===hf)return f===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===pf)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===mf||r===gf||r===vf||r===_f||r===xf||r===yf||r===Sf||r===Ef||r===Mf||r===wf||r===Tf||r===Af||r===Cf||r===Rf)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===mf)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gf)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vf)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_f)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xf)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yf)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sf)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ef)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mf)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wf)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Tf)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Af)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Cf)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rf)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===El||r===bf||r===Pf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===El)return f===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Pf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Dm||r===Lf||r===Nf||r===Df)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===El)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Lf)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Nf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Df)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Gs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class BE extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vl extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zE={type:"move"};class Xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const R of e.hand.values()){const v=n.getJointPose(R,r),g=this._getHandJoint(m,R);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const _=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],y=_.position.distanceTo(x.position),S=.02,T=.005;m.inputState.pinching&&y>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(zE)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new vl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const HE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VE=`
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

}`;class GE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Rn,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Bi({vertexShader:HE,fragmentShader:VE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new mi(new Wo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WE extends Xs{constructor(e,n){super();const r=this;let a=null,c=1,f=null,d="local-floor",p=1,m=null,_=null,x=null,y=null,S=null,T=null;const R=new GE,v=n.getContextAttributes();let g=null,I=null;const P=[],F=[],Y=new Rt;let k=null;const N=new ri;N.layers.enable(1),N.viewport=new Vt;const V=new ri;V.layers.enable(2),V.viewport=new Vt;const le=[N,V],E=new BE;E.layers.enable(1),E.layers.enable(2);let A=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ue=P[K];return ue===void 0&&(ue=new Xu,P[K]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(K){let ue=P[K];return ue===void 0&&(ue=new Xu,P[K]=ue),ue.getGripSpace()},this.getHand=function(K){let ue=P[K];return ue===void 0&&(ue=new Xu,P[K]=ue),ue.getHandSpace()};function Z(K){const ue=F.indexOf(K.inputSource);if(ue===-1)return;const _e=P[ue];_e!==void 0&&(_e.update(K.inputSource,K.frame,m||f),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function oe(){a.removeEventListener("select",Z),a.removeEventListener("selectstart",Z),a.removeEventListener("selectend",Z),a.removeEventListener("squeeze",Z),a.removeEventListener("squeezestart",Z),a.removeEventListener("squeezeend",Z),a.removeEventListener("end",oe),a.removeEventListener("inputsourceschange",de);for(let K=0;K<P.length;K++){const ue=F[K];ue!==null&&(F[K]=null,P[K].disconnect(ue))}A=null,ne=null,R.reset(),e.setRenderTarget(g),S=null,y=null,x=null,a=null,I=null,Pe.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(Y.width,Y.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return x},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",Z),a.addEventListener("selectstart",Z),a.addEventListener("selectend",Z),a.addEventListener("squeeze",Z),a.addEventListener("squeezestart",Z),a.addEventListener("squeezeend",Z),a.addEventListener("end",oe),a.addEventListener("inputsourceschange",de),v.xrCompatible!==!0&&await n.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(Y),a.renderState.layers===void 0){const ue={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(a,n,ue),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new Yr(S.framebufferWidth,S.framebufferHeight,{format:ai,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ue=null,_e=null,Se=null;v.depth&&(Se=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=v.stencil?Ws:Os,_e=v.stencil?Gs:Xr);const Ae={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:c};x=new XRWebGLBinding(a,n),y=x.createProjectionLayer(Ae),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),I=new Yr(y.textureWidth,y.textureHeight,{format:ai,type:ki,depthTexture:new $m(y.textureWidth,y.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Pe.setContext(a),Pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function de(K){for(let ue=0;ue<K.removed.length;ue++){const _e=K.removed[ue],Se=F.indexOf(_e);Se>=0&&(F[Se]=null,P[Se].disconnect(_e))}for(let ue=0;ue<K.added.length;ue++){const _e=K.added[ue];let Se=F.indexOf(_e);if(Se===-1){for(let Le=0;Le<P.length;Le++)if(Le>=F.length){F.push(_e),Se=Le;break}else if(F[Le]===null){F[Le]=_e,Se=Le;break}if(Se===-1)break}const Ae=P[Se];Ae&&Ae.connect(_e)}}const re=new se,ce=new se;function z(K,ue,_e){re.setFromMatrixPosition(ue.matrixWorld),ce.setFromMatrixPosition(_e.matrixWorld);const Se=re.distanceTo(ce),Ae=ue.projectionMatrix.elements,Le=_e.projectionMatrix.elements,et=Ae[14]/(Ae[10]-1),mt=Ae[14]/(Ae[10]+1),ct=(Ae[9]+1)/Ae[5],B=(Ae[9]-1)/Ae[5],sn=(Ae[8]-1)/Ae[0],lt=(Le[8]+1)/Le[0],dt=et*sn,Ke=et*lt,Tt=Se/(-sn+lt),Qe=Tt*-sn;if(ue.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Qe),K.translateZ(Tt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ae[10]===-1)K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const L=et+Tt,w=mt+Tt,$=dt-Qe,pe=Ke+(Se-Qe),xe=ct*mt/w*L,he=B*mt/w*L;K.projectionMatrix.makePerspective($,pe,xe,he,L,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function fe(K,ue){ue===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ue.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let ue=K.near,_e=K.far;R.texture!==null&&(R.depthNear>0&&(ue=R.depthNear),R.depthFar>0&&(_e=R.depthFar)),E.near=V.near=N.near=ue,E.far=V.far=N.far=_e,(A!==E.near||ne!==E.far)&&(a.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,ne=E.far);const Se=K.parent,Ae=E.cameras;fe(E,Se);for(let Le=0;Le<Ae.length;Le++)fe(Ae[Le],Se);Ae.length===2?z(E,N,V):E.projectionMatrix.copy(N.projectionMatrix),J(K,E,Se)};function J(K,ue,_e){_e===null?K.matrix.copy(ue.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(ue.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=If*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function(K){p=K,y!==null&&(y.fixedFoveation=K),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=K)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(E)};let D=null;function ie(K,ue){if(_=ue.getViewerPose(m||f),T=ue,_!==null){const _e=_.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let Se=!1;_e.length!==E.cameras.length&&(E.cameras.length=0,Se=!0);for(let Le=0;Le<_e.length;Le++){const et=_e[Le];let mt=null;if(S!==null)mt=S.getViewport(et);else{const B=x.getViewSubImage(y,et);mt=B.viewport,Le===0&&(e.setRenderTargetTextures(I,B.colorTexture,y.ignoreDepthValues?void 0:B.depthStencilTexture),e.setRenderTarget(I))}let ct=le[Le];ct===void 0&&(ct=new ri,ct.layers.enable(Le),ct.viewport=new Vt,le[Le]=ct),ct.matrix.fromArray(et.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(et.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(mt.x,mt.y,mt.width,mt.height),Le===0&&(E.matrix.copy(ct.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Se===!0&&E.cameras.push(ct)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Le=x.getDepthInformation(_e[0]);Le&&Le.isValid&&Le.texture&&R.init(e,Le,a.renderState)}}for(let _e=0;_e<P.length;_e++){const Se=F[_e],Ae=P[_e];Se!==null&&Ae!==void 0&&Ae.update(Se,ue,m||f)}D&&D(K,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),T=null}const Pe=new Ym;Pe.setAnimationLoop(ie),this.setAnimationLoop=function(K){D=K},this.dispose=function(){}}}const kr=new Oi,jE=new jt;function XE(s,e){function n(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function r(v,g){g.color.getRGB(v.fogColor.value,Gm(s)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function a(v,g,I,P,F){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(v,g):g.isMeshToonMaterial?(c(v,g),x(v,g)):g.isMeshPhongMaterial?(c(v,g),_(v,g)):g.isMeshStandardMaterial?(c(v,g),y(v,g),g.isMeshPhysicalMaterial&&S(v,g,F)):g.isMeshMatcapMaterial?(c(v,g),T(v,g)):g.isMeshDepthMaterial?c(v,g):g.isMeshDistanceMaterial?(c(v,g),R(v,g)):g.isMeshNormalMaterial?c(v,g):g.isLineBasicMaterial?(f(v,g),g.isLineDashedMaterial&&d(v,g)):g.isPointsMaterial?p(v,g,I,P):g.isSpriteMaterial?m(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,n(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,n(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===Cn&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,n(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===Cn&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,n(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,n(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const I=e.get(g),P=I.envMap,F=I.envMapRotation;P&&(v.envMap.value=P,kr.copy(F),kr.x*=-1,kr.y*=-1,kr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),v.envMapRotation.value.setFromMatrix4(jE.makeRotationFromEuler(kr)),v.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,v.aoMapTransform))}function f(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,n(g.map,v.mapTransform))}function d(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function p(v,g,I,P){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*I,v.scale.value=P*.5,g.map&&(v.map.value=g.map,n(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function m(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,n(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function _(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function x(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function y(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function S(v,g,I){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Cn&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=I.texture,v.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,v.specularIntensityMapTransform))}function T(v,g){g.matcap&&(v.matcap.value=g.matcap)}function R(v,g){const I=e.get(g).light;v.referencePosition.value.setFromMatrixPosition(I.matrixWorld),v.nearDistance.value=I.shadow.camera.near,v.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function YE(s,e,n,r){let a={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,P){const F=P.program;r.uniformBlockBinding(I,F)}function m(I,P){let F=a[I.id];F===void 0&&(T(I),F=_(I),a[I.id]=F,I.addEventListener("dispose",v));const Y=P.program;r.updateUBOMapping(I,Y);const k=e.render.frame;c[I.id]!==k&&(y(I),c[I.id]=k)}function _(I){const P=x();I.__bindingPointIndex=P;const F=s.createBuffer(),Y=I.__size,k=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,F),s.bufferData(s.UNIFORM_BUFFER,Y,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,F),F}function x(){for(let I=0;I<d;I++)if(f.indexOf(I)===-1)return f.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const P=a[I.id],F=I.uniforms,Y=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let k=0,N=F.length;k<N;k++){const V=Array.isArray(F[k])?F[k]:[F[k]];for(let le=0,E=V.length;le<E;le++){const A=V[le];if(S(A,k,le,Y)===!0){const ne=A.__offset,Z=Array.isArray(A.value)?A.value:[A.value];let oe=0;for(let de=0;de<Z.length;de++){const re=Z[de],ce=R(re);typeof re=="number"||typeof re=="boolean"?(A.__data[0]=re,s.bufferSubData(s.UNIFORM_BUFFER,ne+oe,A.__data)):re.isMatrix3?(A.__data[0]=re.elements[0],A.__data[1]=re.elements[1],A.__data[2]=re.elements[2],A.__data[3]=0,A.__data[4]=re.elements[3],A.__data[5]=re.elements[4],A.__data[6]=re.elements[5],A.__data[7]=0,A.__data[8]=re.elements[6],A.__data[9]=re.elements[7],A.__data[10]=re.elements[8],A.__data[11]=0):(re.toArray(A.__data,oe),oe+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ne,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,P,F,Y){const k=I.value,N=P+"_"+F;if(Y[N]===void 0)return typeof k=="number"||typeof k=="boolean"?Y[N]=k:Y[N]=k.clone(),!0;{const V=Y[N];if(typeof k=="number"||typeof k=="boolean"){if(V!==k)return Y[N]=k,!0}else if(V.equals(k)===!1)return V.copy(k),!0}return!1}function T(I){const P=I.uniforms;let F=0;const Y=16;for(let N=0,V=P.length;N<V;N++){const le=Array.isArray(P[N])?P[N]:[P[N]];for(let E=0,A=le.length;E<A;E++){const ne=le[E],Z=Array.isArray(ne.value)?ne.value:[ne.value];for(let oe=0,de=Z.length;oe<de;oe++){const re=Z[oe],ce=R(re),z=F%Y,fe=z%ce.boundary,J=z+fe;F+=fe,J!==0&&Y-J<ce.storage&&(F+=Y-J),ne.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=F,F+=ce.storage}}}const k=F%Y;return k>0&&(F+=Y-k),I.__size=F,I.__cache={},this}function R(I){const P={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(P.boundary=4,P.storage=4):I.isVector2?(P.boundary=8,P.storage=8):I.isVector3||I.isColor?(P.boundary=16,P.storage=12):I.isVector4?(P.boundary=16,P.storage=16):I.isMatrix3?(P.boundary=48,P.storage=48):I.isMatrix4?(P.boundary=64,P.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),P}function v(I){const P=I.target;P.removeEventListener("dispose",v);const F=f.indexOf(P.__bindingPointIndex);f.splice(F,1),s.deleteBuffer(a[P.id]),delete a[P.id],delete c[P.id]}function g(){for(const I in a)s.deleteBuffer(a[I]);f=[],a={},c={}}return{bind:p,update:m,dispose:g}}class qE{constructor(e={}){const{canvas:n=Iv(),context:r=null,depth:a=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const S=new Uint32Array(4),T=new Int32Array(4);let R=null,v=null;const g=[],I=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hi,this.toneMapping=gr,this.toneMappingExposure=1;const P=this;let F=!1,Y=0,k=0,N=null,V=-1,le=null;const E=new Vt,A=new Vt;let ne=null;const Z=new Ct(0);let oe=0,de=n.width,re=n.height,ce=1,z=null,fe=null;const J=new Vt(0,0,de,re),D=new Vt(0,0,de,re);let ie=!1;const Pe=new Xm;let K=!1,ue=!1;const _e=new jt,Se=new jt,Ae=new se,Le=new Vt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function ct(){return N===null?ce:1}let B=r;function sn(C,W){return n.getContext(C,W)}try{const C={alpha:!0,depth:a,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${kf}`),n.addEventListener("webglcontextlost",me,!1),n.addEventListener("webglcontextrestored",Re,!1),n.addEventListener("webglcontextcreationerror",Ie,!1),B===null){const W="webgl2";if(B=sn(W,C),B===null)throw sn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let lt,dt,Ke,Tt,Qe,L,w,$,pe,xe,he,Xe,Ce,Fe,ht,Ee,ke,tt,Je,Be,ut,it,Et,G;function Ne(){lt=new Jy(B),lt.init(),it=new OE(B,lt),dt=new Yy(B,lt,e,it),Ke=new UE(B),dt.reverseDepthBuffer&&Ke.buffers.depth.setReversed(!0),Tt=new nS(B),Qe=new yE,L=new kE(B,lt,Ke,Qe,dt,it,Tt),w=new $y(P),$=new Qy(P),pe=new c_(B),Et=new jy(B,pe),xe=new eS(B,pe,Tt,Et),he=new rS(B,xe,pe,Tt),Je=new iS(B,dt,L),Ee=new qy(Qe),Xe=new xE(P,w,$,lt,dt,Et,Ee),Ce=new XE(P,Qe),Fe=new EE,ht=new RE(lt),tt=new Wy(P,w,$,Ke,he,y,p),ke=new DE(P,he,dt),G=new YE(B,Tt,dt,Ke),Be=new Xy(B,lt,Tt),ut=new tS(B,lt,Tt),Tt.programs=Xe.programs,P.capabilities=dt,P.extensions=lt,P.properties=Qe,P.renderLists=Fe,P.shadowMap=ke,P.state=Ke,P.info=Tt}Ne();const ae=new WE(P,B);this.xr=ae,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=lt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=lt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(C){C!==void 0&&(ce=C,this.setSize(de,re,!1))},this.getSize=function(C){return C.set(de,re)},this.setSize=function(C,W,Q=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=C,re=W,n.width=Math.floor(C*ce),n.height=Math.floor(W*ce),Q===!0&&(n.style.width=C+"px",n.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(de*ce,re*ce).floor()},this.setDrawingBufferSize=function(C,W,Q){de=C,re=W,ce=Q,n.width=Math.floor(C*Q),n.height=Math.floor(W*Q),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(J)},this.setViewport=function(C,W,Q,ee){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,W,Q,ee),Ke.viewport(E.copy(J).multiplyScalar(ce).round())},this.getScissor=function(C){return C.copy(D)},this.setScissor=function(C,W,Q,ee){C.isVector4?D.set(C.x,C.y,C.z,C.w):D.set(C,W,Q,ee),Ke.scissor(A.copy(D).multiplyScalar(ce).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(C){Ke.setScissorTest(ie=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){fe=C},this.getClearColor=function(C){return C.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(C=!0,W=!0,Q=!0){let ee=0;if(C){let j=!1;if(N!==null){const we=N.texture.format;j=we===Gf||we===Vf||we===Hf}if(j){const we=N.texture.type,De=we===ki||we===Xr||we===Oo||we===Gs||we===Bf||we===zf,Te=tt.getClearColor(),Ge=tt.getClearAlpha(),$e=Te.r,Ze=Te.g,We=Te.b;De?(S[0]=$e,S[1]=Ze,S[2]=We,S[3]=Ge,B.clearBufferuiv(B.COLOR,0,S)):(T[0]=$e,T[1]=Ze,T[2]=We,T[3]=Ge,B.clearBufferiv(B.COLOR,0,T))}else ee|=B.COLOR_BUFFER_BIT}W&&(ee|=B.DEPTH_BUFFER_BIT,B.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Q&&(ee|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",me,!1),n.removeEventListener("webglcontextrestored",Re,!1),n.removeEventListener("webglcontextcreationerror",Ie,!1),Fe.dispose(),ht.dispose(),Qe.dispose(),w.dispose(),$.dispose(),he.dispose(),Et.dispose(),G.dispose(),Xe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",zi),ae.removeEventListener("sessionend",$r),bn.stop()};function me(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const C=Tt.autoReset,W=ke.enabled,Q=ke.autoUpdate,ee=ke.needsUpdate,j=ke.type;Ne(),Tt.autoReset=C,ke.enabled=W,ke.autoUpdate=Q,ke.needsUpdate=ee,ke.type=j}function Ie(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ft(C){const W=C.target;W.removeEventListener("dispose",ft),kt(W)}function kt(C){on(C),Qe.remove(C)}function on(C){const W=Qe.get(C).programs;W!==void 0&&(W.forEach(function(Q){Xe.releaseProgram(Q)}),C.isShaderMaterial&&Xe.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,Q,ee,j,we){W===null&&(W=et);const De=j.isMesh&&j.matrixWorld.determinant()<0,Te=_i(C,W,Q,ee,j);Ke.setMaterial(ee,De);let Ge=Q.index,$e=1;if(ee.wireframe===!0){if(Ge=xe.getWireframeAttribute(Q),Ge===void 0)return;$e=2}const Ze=Q.drawRange,We=Q.attributes.position;let St=Ze.start*$e,At=(Ze.start+Ze.count)*$e;we!==null&&(St=Math.max(St,we.start*$e),At=Math.min(At,(we.start+we.count)*$e)),Ge!==null?(St=Math.max(St,0),At=Math.min(At,Ge.count)):We!=null&&(St=Math.max(St,0),At=Math.min(At,We.count));const bt=At-St;if(bt<0||bt===1/0)return;Et.setup(j,ee,Te,Q,Ge);let Ut,vt=Be;if(Ge!==null&&(Ut=pe.get(Ge),vt=ut,vt.setIndex(Ut)),j.isMesh)ee.wireframe===!0?(Ke.setLineWidth(ee.wireframeLinewidth*ct()),vt.setMode(B.LINES)):vt.setMode(B.TRIANGLES);else if(j.isLine){let Oe=ee.linewidth;Oe===void 0&&(Oe=1),Ke.setLineWidth(Oe*ct()),j.isLineSegments?vt.setMode(B.LINES):j.isLineLoop?vt.setMode(B.LINE_LOOP):vt.setMode(B.LINE_STRIP)}else j.isPoints?vt.setMode(B.POINTS):j.isSprite&&vt.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)vt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))vt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Oe=j._multiDrawStarts,Xt=j._multiDrawCounts,_t=j._multiDrawCount,Pn=Ge?pe.get(Ge).bytesPerElement:1,qn=Qe.get(ee).currentProgram.getUniforms();for(let Qt=0;Qt<_t;Qt++)qn.setValue(B,"_gl_DrawID",Qt),vt.render(Oe[Qt]/Pn,Xt[Qt])}else if(j.isInstancedMesh)vt.renderInstances(St,bt,j.count);else if(Q.isInstancedBufferGeometry){const Oe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Xt=Math.min(Q.instanceCount,Oe);vt.renderInstances(St,bt,Xt)}else vt.render(St,bt)};function pt(C,W,Q){C.transparent===!0&&C.side===Ii&&C.forceSinglePass===!1?(C.side=Cn,C.needsUpdate=!0,Zr(C,W,Q),C.side=vr,C.needsUpdate=!0,Zr(C,W,Q),C.side=Ii):Zr(C,W,Q)}this.compile=function(C,W,Q=null){Q===null&&(Q=C),v=ht.get(Q),v.init(W),I.push(v),Q.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),C!==Q&&C.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),v.setupLights();const ee=new Set;return C.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const we=j.material;if(we)if(Array.isArray(we))for(let De=0;De<we.length;De++){const Te=we[De];pt(Te,Q,j),ee.add(Te)}else pt(we,Q,j),ee.add(we)}),I.pop(),v=null,ee},this.compileAsync=function(C,W,Q=null){const ee=this.compile(C,W,Q);return new Promise(j=>{function we(){if(ee.forEach(function(De){Qe.get(De).currentProgram.isReady()&&ee.delete(De)}),ee.size===0){j(C);return}setTimeout(we,10)}lt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Zt=null;function On(C){Zt&&Zt(C)}function zi(){bn.stop()}function $r(){bn.start()}const bn=new Ym;bn.setAnimationLoop(On),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(C){Zt=C,ae.setAnimationLoop(C),C===null?bn.stop():bn.start()},ae.addEventListener("sessionstart",zi),ae.addEventListener("sessionend",$r),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(W),W=ae.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,W,N),v=ht.get(C,I.length),v.init(W),I.push(v),Se.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Pe.setFromProjectionMatrix(Se),ue=this.localClippingEnabled,K=Ee.init(this.clippingPlanes,ue),R=Fe.get(C,g.length),R.init(),g.push(R),ae.enabled===!0&&ae.isPresenting===!0){const we=P.xr.getDepthSensingMesh();we!==null&&qs(we,W,-1/0,P.sortObjects)}qs(C,W,0,P.sortObjects),R.finish(),P.sortObjects===!0&&R.sort(z,fe),mt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,mt&&tt.addToRenderList(R,C),this.info.render.frame++,K===!0&&Ee.beginShadows();const Q=v.state.shadowsArray;ke.render(Q,C,W),K===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=R.opaque,j=R.transmissive;if(v.setupLights(),W.isArrayCamera){const we=W.cameras;if(j.length>0)for(let De=0,Te=we.length;De<Te;De++){const Ge=we[De];xr(ee,j,C,Ge)}mt&&tt.render(C);for(let De=0,Te=we.length;De<Te;De++){const Ge=we[De];Hi(R,C,Ge,Ge.viewport)}}else j.length>0&&xr(ee,j,C,W),mt&&tt.render(C),Hi(R,C,W);N!==null&&(L.updateMultisampleRenderTarget(N),L.updateRenderTargetMipmap(N)),C.isScene===!0&&C.onAfterRender(P,C,W),Et.resetDefaultState(),V=-1,le=null,I.pop(),I.length>0?(v=I[I.length-1],K===!0&&Ee.setGlobalState(P.clippingPlanes,v.state.camera)):v=null,g.pop(),g.length>0?R=g[g.length-1]:R=null};function qs(C,W,Q,ee){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Pe.intersectsSprite(C)){ee&&Le.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Se);const De=he.update(C),Te=C.material;Te.visible&&R.push(C,De,Te,Q,Le.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Pe.intersectsObject(C))){const De=he.update(C),Te=C.material;if(ee&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Le.copy(C.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Le.copy(De.boundingSphere.center)),Le.applyMatrix4(C.matrixWorld).applyMatrix4(Se)),Array.isArray(Te)){const Ge=De.groups;for(let $e=0,Ze=Ge.length;$e<Ze;$e++){const We=Ge[$e],St=Te[We.materialIndex];St&&St.visible&&R.push(C,De,St,Q,Le.z,We)}}else Te.visible&&R.push(C,De,Te,Q,Le.z,null)}}const we=C.children;for(let De=0,Te=we.length;De<Te;De++)qs(we[De],W,Q,ee)}function Hi(C,W,Q,ee){const j=C.opaque,we=C.transmissive,De=C.transparent;v.setupLightsView(Q),K===!0&&Ee.setGlobalState(P.clippingPlanes,Q),ee&&Ke.viewport(E.copy(ee)),j.length>0&&vi(j,W,Q),we.length>0&&vi(we,W,Q),De.length>0&&vi(De,W,Q),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function xr(C,W,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ee.id]===void 0&&(v.state.transmissionRenderTarget[ee.id]=new Yr(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?Bo:ki,minFilter:Gr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const we=v.state.transmissionRenderTarget[ee.id],De=ee.viewport||E;we.setSize(De.z,De.w);const Te=P.getRenderTarget();P.setRenderTarget(we),P.getClearColor(Z),oe=P.getClearAlpha(),oe<1&&P.setClearColor(16777215,.5),P.clear(),mt&&tt.render(Q);const Ge=P.toneMapping;P.toneMapping=gr;const $e=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),v.setupLightsView(ee),K===!0&&Ee.setGlobalState(P.clippingPlanes,ee),vi(C,Q,ee),L.updateMultisampleRenderTarget(we),L.updateRenderTargetMipmap(we),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let We=0,St=W.length;We<St;We++){const At=W[We],bt=At.object,Ut=At.geometry,vt=At.material,Oe=At.group;if(vt.side===Ii&&bt.layers.test(ee.layers)){const Xt=vt.side;vt.side=Cn,vt.needsUpdate=!0,Kr(bt,Q,ee,Ut,vt,Oe),vt.side=Xt,vt.needsUpdate=!0,Ze=!0}}Ze===!0&&(L.updateMultisampleRenderTarget(we),L.updateRenderTargetMipmap(we))}P.setRenderTarget(Te),P.setClearColor(Z,oe),$e!==void 0&&(ee.viewport=$e),P.toneMapping=Ge}function vi(C,W,Q){const ee=W.isScene===!0?W.overrideMaterial:null;for(let j=0,we=C.length;j<we;j++){const De=C[j],Te=De.object,Ge=De.geometry,$e=ee===null?De.material:ee,Ze=De.group;Te.layers.test(Q.layers)&&Kr(Te,W,Q,Ge,$e,Ze)}}function Kr(C,W,Q,ee,j,we){C.onBeforeRender(P,W,Q,ee,j,we),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(P,W,Q,ee,C,we),j.transparent===!0&&j.side===Ii&&j.forceSinglePass===!1?(j.side=Cn,j.needsUpdate=!0,P.renderBufferDirect(Q,W,ee,j,C,we),j.side=vr,j.needsUpdate=!0,P.renderBufferDirect(Q,W,ee,j,C,we),j.side=Ii):P.renderBufferDirect(Q,W,ee,j,C,we),C.onAfterRender(P,W,Q,ee,j,we)}function Zr(C,W,Q){W.isScene!==!0&&(W=et);const ee=Qe.get(C),j=v.state.lights,we=v.state.shadowsArray,De=j.state.version,Te=Xe.getParameters(C,j.state,we,W,Q),Ge=Xe.getProgramCacheKey(Te);let $e=ee.programs;ee.environment=C.isMeshStandardMaterial?W.environment:null,ee.fog=W.fog,ee.envMap=(C.isMeshStandardMaterial?$:w).get(C.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,$e===void 0&&(C.addEventListener("dispose",ft),$e=new Map,ee.programs=$e);let Ze=$e.get(Ge);if(Ze!==void 0){if(ee.currentProgram===Ze&&ee.lightsStateVersion===De)return Xo(C,Te),Ze}else Te.uniforms=Xe.getUniforms(C),C.onBeforeCompile(Te,P),Ze=Xe.acquireProgram(Te,Ge),$e.set(Ge,Ze),ee.uniforms=Te.uniforms;const We=ee.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=Ee.uniform),Xo(C,Te),ee.needsLights=qo(C),ee.lightsStateVersion=De,ee.needsLights&&(We.ambientLightColor.value=j.state.ambient,We.lightProbe.value=j.state.probe,We.directionalLights.value=j.state.directional,We.directionalLightShadows.value=j.state.directionalShadow,We.spotLights.value=j.state.spot,We.spotLightShadows.value=j.state.spotShadow,We.rectAreaLights.value=j.state.rectArea,We.ltc_1.value=j.state.rectAreaLTC1,We.ltc_2.value=j.state.rectAreaLTC2,We.pointLights.value=j.state.point,We.pointLightShadows.value=j.state.pointShadow,We.hemisphereLights.value=j.state.hemi,We.directionalShadowMap.value=j.state.directionalShadowMap,We.directionalShadowMatrix.value=j.state.directionalShadowMatrix,We.spotShadowMap.value=j.state.spotShadowMap,We.spotLightMatrix.value=j.state.spotLightMatrix,We.spotLightMap.value=j.state.spotLightMap,We.pointShadowMap.value=j.state.pointShadowMap,We.pointShadowMatrix.value=j.state.pointShadowMatrix),ee.currentProgram=Ze,ee.uniformsList=null,Ze}function jo(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=wl.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function Xo(C,W){const Q=Qe.get(C);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function _i(C,W,Q,ee,j){W.isScene!==!0&&(W=et),L.resetTextureUnits();const we=W.fog,De=ee.isMeshStandardMaterial?W.environment:null,Te=N===null?P.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:_r,Ge=(ee.isMeshStandardMaterial?$:w).get(ee.envMap||De),$e=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ze=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),We=!!Q.morphAttributes.position,St=!!Q.morphAttributes.normal,At=!!Q.morphAttributes.color;let bt=gr;ee.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(bt=P.toneMapping);const Ut=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,vt=Ut!==void 0?Ut.length:0,Oe=Qe.get(ee),Xt=v.state.lights;if(K===!0&&(ue===!0||C!==le)){const cn=C===le&&ee.id===V;Ee.setState(ee,C,cn)}let _t=!1;ee.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Xt.state.version||Oe.outputColorSpace!==Te||j.isBatchedMesh&&Oe.batching===!1||!j.isBatchedMesh&&Oe.batching===!0||j.isBatchedMesh&&Oe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Oe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Oe.instancing===!1||!j.isInstancedMesh&&Oe.instancing===!0||j.isSkinnedMesh&&Oe.skinning===!1||!j.isSkinnedMesh&&Oe.skinning===!0||j.isInstancedMesh&&Oe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Oe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Oe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Oe.instancingMorph===!1&&j.morphTexture!==null||Oe.envMap!==Ge||ee.fog===!0&&Oe.fog!==we||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Ee.numPlanes||Oe.numIntersection!==Ee.numIntersection)||Oe.vertexAlphas!==$e||Oe.vertexTangents!==Ze||Oe.morphTargets!==We||Oe.morphNormals!==St||Oe.morphColors!==At||Oe.toneMapping!==bt||Oe.morphTargetsCount!==vt)&&(_t=!0):(_t=!0,Oe.__version=ee.version);let Pn=Oe.currentProgram;_t===!0&&(Pn=Zr(ee,W,j));let qn=!1,Qt=!1,xi=!1;const Pt=Pn.getUniforms(),li=Oe.uniforms;if(Ke.useProgram(Pn.program)&&(qn=!0,Qt=!0,xi=!0),ee.id!==V&&(V=ee.id,Qt=!0),qn||le!==C){dt.reverseDepthBuffer?(_e.copy(C.projectionMatrix),Fv(_e),kv(_e),Pt.setValue(B,"projectionMatrix",_e)):Pt.setValue(B,"projectionMatrix",C.projectionMatrix),Pt.setValue(B,"viewMatrix",C.matrixWorldInverse);const cn=Pt.map.cameraPosition;cn!==void 0&&cn.setValue(B,Ae.setFromMatrixPosition(C.matrixWorld)),dt.logarithmicDepthBuffer&&Pt.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Pt.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),le!==C&&(le=C,Qt=!0,xi=!0)}if(j.isSkinnedMesh){Pt.setOptional(B,j,"bindMatrix"),Pt.setOptional(B,j,"bindMatrixInverse");const cn=j.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Pt.setValue(B,"boneTexture",cn.boneTexture,L))}j.isBatchedMesh&&(Pt.setOptional(B,j,"batchingTexture"),Pt.setValue(B,"batchingTexture",j._matricesTexture,L),Pt.setOptional(B,j,"batchingIdTexture"),Pt.setValue(B,"batchingIdTexture",j._indirectTexture,L),Pt.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&Pt.setValue(B,"batchingColorTexture",j._colorsTexture,L));const $s=Q.morphAttributes;if(($s.position!==void 0||$s.normal!==void 0||$s.color!==void 0)&&Je.update(j,Q,Pn),(Qt||Oe.receiveShadow!==j.receiveShadow)&&(Oe.receiveShadow=j.receiveShadow,Pt.setValue(B,"receiveShadow",j.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(li.envMap.value=Ge,li.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&W.environment!==null&&(li.envMapIntensity.value=W.environmentIntensity),Qt&&(Pt.setValue(B,"toneMappingExposure",P.toneMappingExposure),Oe.needsLights&&Yo(li,xi),we&&ee.fog===!0&&Ce.refreshFogUniforms(li,we),Ce.refreshMaterialUniforms(li,ee,ce,re,v.state.transmissionRenderTarget[C.id]),wl.upload(B,jo(Oe),li,L)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(wl.upload(B,jo(Oe),li,L),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Pt.setValue(B,"center",j.center),Pt.setValue(B,"modelViewMatrix",j.modelViewMatrix),Pt.setValue(B,"normalMatrix",j.normalMatrix),Pt.setValue(B,"modelMatrix",j.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const cn=ee.uniformsGroups;for(let Qr=0,Ks=cn.length;Qr<Ks;Qr++){const Vi=cn[Qr];G.update(Vi,Pn),G.bind(Vi,Pn)}}return Pn}function Yo(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function qo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(C,W,Q){Qe.get(C.texture).__webglTexture=W,Qe.get(C.depthTexture).__webglTexture=Q;const ee=Qe.get(C);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=Q===void 0,ee.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){const Q=Qe.get(C);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,Q=0){N=C,Y=W,k=Q;let ee=!0,j=null,we=!1,De=!1;if(C){const Ge=Qe.get(C);if(Ge.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(B.FRAMEBUFFER,null),ee=!1;else if(Ge.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(Ge.__hasExternalTextures)L.rebindTextures(C,Qe.get(C.texture).__webglTexture,Qe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const We=C.depthTexture;if(Ge.__boundDepthTexture!==We){if(We!==null&&Qe.has(We)&&(C.width!==We.image.width||C.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(De=!0);const Ze=Qe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ze[W])?j=Ze[W][Q]:j=Ze[W],we=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?j=Qe.get(C).__webglMultisampledFramebuffer:Array.isArray(Ze)?j=Ze[Q]:j=Ze,E.copy(C.viewport),A.copy(C.scissor),ne=C.scissorTest}else E.copy(J).multiplyScalar(ce).floor(),A.copy(D).multiplyScalar(ce).floor(),ne=ie;if(Ke.bindFramebuffer(B.FRAMEBUFFER,j)&&ee&&Ke.drawBuffers(C,j),Ke.viewport(E),Ke.scissor(A),Ke.setScissorTest(ne),we){const Ge=Qe.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ge.__webglTexture,Q)}else if(De){const Ge=Qe.get(C.texture),$e=W||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ge.__webglTexture,Q||0,$e)}V=-1},this.readRenderTargetPixels=function(C,W,Q,ee,j,we,De){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Te=Te[De]),Te){Ke.bindFramebuffer(B.FRAMEBUFFER,Te);try{const Ge=C.texture,$e=Ge.format,Ze=Ge.type;if(!dt.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-ee&&Q>=0&&Q<=C.height-j&&B.readPixels(W,Q,ee,j,it.convert($e),it.convert(Ze),we)}finally{const Ge=N!==null?Qe.get(N).__webglFramebuffer:null;Ke.bindFramebuffer(B.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(C,W,Q,ee,j,we,De){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Te=Te[De]),Te){const Ge=C.texture,$e=Ge.format,Ze=Ge.type;if(!dt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-ee&&Q>=0&&Q<=C.height-j){Ke.bindFramebuffer(B.FRAMEBUFFER,Te);const We=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,We),B.bufferData(B.PIXEL_PACK_BUFFER,we.byteLength,B.STREAM_READ),B.readPixels(W,Q,ee,j,it.convert($e),it.convert(Ze),0);const St=N!==null?Qe.get(N).__webglFramebuffer:null;Ke.bindFramebuffer(B.FRAMEBUFFER,St);const At=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Uv(B,At,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,We),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,we),B.deleteBuffer(We),B.deleteSync(At),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,W=null,Q=0){C.isTexture!==!0&&(Ml("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);const ee=Math.pow(2,-Q),j=Math.floor(C.image.width*ee),we=Math.floor(C.image.height*ee),De=W!==null?W.x:0,Te=W!==null?W.y:0;L.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,Q,0,0,De,Te,j,we),Ke.unbindTexture()},this.copyTextureToTexture=function(C,W,Q=null,ee=null,j=0){C.isTexture!==!0&&(Ml("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,C=arguments[1],W=arguments[2],j=arguments[3]||0,Q=null);let we,De,Te,Ge,$e,Ze;Q!==null?(we=Q.max.x-Q.min.x,De=Q.max.y-Q.min.y,Te=Q.min.x,Ge=Q.min.y):(we=C.image.width,De=C.image.height,Te=0,Ge=0),ee!==null?($e=ee.x,Ze=ee.y):($e=0,Ze=0);const We=it.convert(W.format),St=it.convert(W.type);L.setTexture2D(W,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const At=B.getParameter(B.UNPACK_ROW_LENGTH),bt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ut=B.getParameter(B.UNPACK_SKIP_PIXELS),vt=B.getParameter(B.UNPACK_SKIP_ROWS),Oe=B.getParameter(B.UNPACK_SKIP_IMAGES),Xt=C.isCompressedTexture?C.mipmaps[j]:C.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Xt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Xt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Te),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ge),C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,j,$e,Ze,we,De,We,St,Xt.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,j,$e,Ze,Xt.width,Xt.height,We,Xt.data):B.texSubImage2D(B.TEXTURE_2D,j,$e,Ze,we,De,We,St,Xt),B.pixelStorei(B.UNPACK_ROW_LENGTH,At),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,bt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ut),B.pixelStorei(B.UNPACK_SKIP_ROWS,vt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Oe),j===0&&W.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Ke.unbindTexture()},this.copyTextureToTexture3D=function(C,W,Q=null,ee=null,j=0){C.isTexture!==!0&&(Ml("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,ee=arguments[1]||null,C=arguments[2],W=arguments[3],j=arguments[4]||0);let we,De,Te,Ge,$e,Ze,We,St,At;const bt=C.isCompressedTexture?C.mipmaps[j]:C.image;Q!==null?(we=Q.max.x-Q.min.x,De=Q.max.y-Q.min.y,Te=Q.max.z-Q.min.z,Ge=Q.min.x,$e=Q.min.y,Ze=Q.min.z):(we=bt.width,De=bt.height,Te=bt.depth,Ge=0,$e=0,Ze=0),ee!==null?(We=ee.x,St=ee.y,At=ee.z):(We=0,St=0,At=0);const Ut=it.convert(W.format),vt=it.convert(W.type);let Oe;if(W.isData3DTexture)L.setTexture3D(W,0),Oe=B.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)L.setTexture2DArray(W,0),Oe=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const Xt=B.getParameter(B.UNPACK_ROW_LENGTH),_t=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Pn=B.getParameter(B.UNPACK_SKIP_PIXELS),qn=B.getParameter(B.UNPACK_SKIP_ROWS),Qt=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,bt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,bt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ge),B.pixelStorei(B.UNPACK_SKIP_ROWS,$e),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ze),C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Oe,j,We,St,At,we,De,Te,Ut,vt,bt.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Oe,j,We,St,At,we,De,Te,Ut,bt.data):B.texSubImage3D(Oe,j,We,St,At,we,De,Te,Ut,vt,bt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Xt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_t),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Pn),B.pixelStorei(B.UNPACK_SKIP_ROWS,qn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Qt),j===0&&W.generateMipmaps&&B.generateMipmap(Oe),Ke.unbindTexture()},this.initRenderTarget=function(C){Qe.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Ke.unbindTexture()},this.resetState=function(){Y=0,k=0,N=null,Ke.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Wf?"display-p3":"srgb",n.unpackColorSpace=Mt.workingColorSpace===Ll?"display-p3":"srgb"}}class $E extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class KE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_m(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=_m();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function _m(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kf);function ZE(s){const e=s.replace("#",""),n=parseInt(e,16);if(e.length===3){const f=(n>>8&15)*17,d=(n>>4&15)*17,p=(n&15)*17;return[f/255,d/255,p/255]}const r=n>>16&255,a=n>>8&255,c=n&255;return[r/255,a/255,c/255]}const QE=({scrollProgress:s,activeProjectTint:e,strain:n})=>{const r=ot.useRef(null),a=ot.useRef({active:0,color:new se(.1,.1,.1)}),c=ot.useRef(0),f=ot.useRef({uTime:{value:0},uScroll:{value:0},uHorizon:{value:.36},uResolution:{value:new Rt(window.innerWidth,window.innerHeight)},uProjectTintActive:{value:0},uProjectColor:{value:new se(.1,.1,.1)},uStrain:{value:0}});return ot.useEffect(()=>{const d=r.current;if(!d)return;const p=new $E,m=new qm(-1,1,1,-1,0,1),_=new qE({antialias:!0,powerPreference:"high-performance",alpha:!1});_.setSize(window.innerWidth,window.innerHeight),_.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.innerHTML="",d.appendChild(_.domElement);const x=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,y=`
      uniform float uTime;
      uniform float uScroll;
      uniform float uHorizon;
      uniform vec2 uResolution;
      uniform float uProjectTintActive;
      uniform vec3 uProjectColor;
      uniform float uStrain;
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

        // Hero-resistance strain: while the user pushes against
        // the shore zone, the water strains — gated to the shore
        // stretch of the journey so mid/far water never feels it.
        // The waterline sags a hair under the tension.
        float strainAmt = uStrain * (1.0 - smoothstep(0.02, 0.14, uScroll));

        // Subtle horizon arc responding to scroll progression (66% at shore -> 68% mid-journey -> 65% at far shore)
        float horizon = uHorizon - sin(uScroll * 3.14159) * 0.035 - strainAmt * 0.004;

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
          // Under strain the pattern is dragged a little toward
          // the viewer — the surface reads as pulled taut.
          float forwardGlide = uScroll * 14.0;
          vec2 waterCoord = vec2(
            (uv.x - 0.5) * aspect * invDepth * 3.5,
            invDepth * 5.5 + uTime * 0.6 + forwardGlide - strainAmt * 0.5
          );

          // Multi-frequency wave normals — amplitudes swell under
          // strain (the water churns harder against the push).
          float ampBoost = 1.0 + strainAmt * 0.85;
          float w1 = sin(waterCoord.y * 1.5 + uTime * 1.4) * 0.06 * ampBoost;
          float w2 = cos(waterCoord.x * 2.2 + waterCoord.y * 0.8 + uTime * 1.8) * 0.04 * ampBoost;
          float w3 = sin(waterCoord.x * 5.0 - waterCoord.y * 3.0 + uTime * 2.5) * 0.02 * ampBoost;
          float waves = w1 + w2 + w3;

          // Ambient expanding ripple rings every ~3.0s
          float rippleCycle = mod(uTime, 3.2);
          vec2 center = vec2(0.0, 8.0);
          float ringDist = length(waterCoord - center);
          float rippleWave = sin((ringDist - rippleCycle * 5.0) * 2.5) * exp(-ringDist * 0.1) * max(0.0, 1.0 - rippleCycle / 3.2);
          waves += rippleWave * 0.025 * (1.0 + strainAmt * 1.2);

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
    `,S=new Bi({vertexShader:x,fragmentShader:y,uniforms:f.current}),T=new Wo(2,2),R=new mi(T,S);p.add(R);let v;const g=new KE;let I=0;const P=()=>{const Y=g.getElapsedTime(),k=Math.min(Math.max(Y-I,0),.25);I=Y,f.current.uTime.value=Y;const N=1-Math.exp(-k*7),V=f.current;V.uProjectTintActive.value+=(a.current.active-V.uProjectTintActive.value)*N,V.uProjectColor.value.lerp(a.current.color,N),V.uStrain.value+=(c.current-V.uStrain.value)*(1-Math.exp(-k*6)),_.render(p,m),v=requestAnimationFrame(P)};P();const F=()=>{_.setSize(window.innerWidth,window.innerHeight),_.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.current.uResolution.value.set(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",F),()=>{cancelAnimationFrame(v),window.removeEventListener("resize",F),_.dispose(),T.dispose(),S.dispose(),d.contains(_.domElement)&&d.removeChild(_.domElement)}},[]),ot.useEffect(()=>{if(f.current.uScroll&&(f.current.uScroll.value=s),c.current=n??0,e){const d=ZE(e);a.current.color.set(d[0],d[1],d[2]),a.current.active=1}else a.current.active=0},[s,e,n]),b.jsx("div",{ref:r,className:"fixed inset-0 pointer-events-none z-0 overflow-hidden","aria-hidden":"true"})},JE=({onNavigate:s,scrollProgress:e})=>{const[n,r]=ot.useState(!1),a=e>.85;return b.jsxs("header",{className:`fixed top-0 inset-x-0 z-40 px-4 sm:px-6 md:px-12 py-4 sm:py-5 transition-colors duration-500 ${a?"text-white":"text-[#1A1C1E]"}`,children:[b.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[b.jsxs("button",{onClick:()=>s("hero"),className:"group flex items-center space-x-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B57E08] rounded-sm","aria-label":"Ashfan — Back to Shore",children:[b.jsx("span",{className:"font-serif italic text-xl sm:text-2xl tracking-tight font-medium group-hover:text-[#B57E08] transition-colors",children:"Ashfan"}),b.jsx("span",{className:"text-[10px] font-mono tracking-widest opacity-60",children:"2026"})]}),b.jsxs("nav",{className:"hidden md:flex items-center space-x-8 text-xs font-mono uppercase tracking-[0.16em] opacity-80","aria-label":"Primary Navigation",children:[b.jsx("button",{onClick:()=>s("projects"),className:"hover:text-[#B57E08] transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B57E08]",children:"01 / Projects"}),b.jsx("button",{onClick:()=>s("channels"),className:"hover:text-[#B57E08] transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B57E08]",children:"02 / Channels"}),b.jsx("button",{onClick:()=>s("services"),className:"hover:text-[#B57E08] transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B57E08]",children:"03 / Services"}),b.jsx("button",{onClick:()=>s("about"),className:"hover:text-[#B57E08] transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B57E08]",children:"04 / About"}),b.jsx("button",{onClick:()=>s("contact"),className:"hover:text-[#B57E08] transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B57E08]",children:"05 / Far Shore"})]}),b.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-3 flex-shrink-0",children:[b.jsxs("button",{onClick:()=>s("contact"),className:`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-[0.14em] font-medium whitespace-nowrap transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B57E08] ${a?"bg-gradient-to-r from-[#F5B81E] to-[#FDE68A] text-[#0A0A0C] hover:opacity-90 shadow-lg shadow-[#F5B81E]/20":"bg-[#1A1C1E] text-white hover:bg-[#F5B81E] hover:text-[#1A1C1E] shadow-sm"}`,children:[b.jsx("span",{className:"hidden sm:inline",children:"Let's Talk"}),b.jsx("span",{className:"sm:hidden",children:"Talk"})]}),b.jsx("button",{onClick:()=>r(!n),className:"md:hidden p-1.5 sm:p-2 text-current focus:outline-none","aria-label":"Toggle Navigation Menu",children:b.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:n?b.jsx("path",{d:"M6 18L18 6M6 6l12 12",strokeLinecap:"round",strokeLinejoin:"round"}):b.jsx("path",{d:"M4 8h16M4 16h16",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]}),n&&b.jsx("div",{className:`md:hidden mt-4 py-6 px-6 rounded-2xl border transition-all ${a?"bg-[#121316]/95 border-white/10 text-white":"bg-white/95 border-[#1A1C1E]/10 text-[#1A1C1E]"} shadow-2xl backdrop-blur-md`,children:b.jsxs("div",{className:"flex flex-col space-y-4 font-mono text-xs uppercase tracking-[0.16em]",children:[b.jsx("button",{onClick:()=>{s("projects"),r(!1)},className:"text-left py-2 border-b border-current/10 hover:text-[#B57E08]",children:"01 / Projects"}),b.jsx("button",{onClick:()=>{s("channels"),r(!1)},className:"text-left py-2 border-b border-current/10 hover:text-[#B57E08]",children:"02 / Channels"}),b.jsx("button",{onClick:()=>{s("services"),r(!1)},className:"text-left py-2 border-b border-current/10 hover:text-[#B57E08]",children:"03 / Services"}),b.jsx("button",{onClick:()=>{s("about"),r(!1)},className:"text-left py-2 border-b border-current/10 hover:text-[#B57E08]",children:"04 / About"}),b.jsx("button",{onClick:()=>{s("contact"),r(!1)},className:"text-left py-2 hover:text-[#B57E08]",children:"05 / Far Shore"})]})})]})},eM=s=>Math.min(1,Math.max(0,s)),jr=(s,e,n)=>eM((s-e)/(n-e)),yt=(s,e,n)=>{const r=jr(s,e,n);return r*r*r*(r*(r*6-15)+10)},rn=(s,e=22,n=0)=>s>=.999?{opacity:1}:{opacity:s,translate:`0 ${(1-s)*e}px`,...n>0?{filter:`blur(${(1-s)*n}px)`}:{}},tM=({scrollProgress:s})=>{const e=1-jr(s,0,.2),n=1-jr(s,.04,.28);return e<=.02&&n<=.02?null:b.jsx("div",{className:"fixed inset-x-0 top-20 px-6 md:px-12 pointer-events-none z-30 hidden sm:block",children:b.jsxs("div",{className:"flex justify-between items-center text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#1A1C1E]/70",children:[b.jsxs("div",{className:"flex items-center space-x-2",style:{opacity:e},children:[b.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#F5B81E] inline-block animate-pulse"}),b.jsx("span",{children:"Websites · Motion · AI Visuals"})]}),b.jsxs("div",{className:"flex items-center space-x-2",style:{opacity:n},children:[b.jsx("span",{children:"Gorakhpur, India"}),b.jsx("span",{className:"text-[#1A1C1E]/30",children:"|"}),b.jsx("span",{className:"text-[#1A1C1E]/50",children:"Available for Craft"})]})]})})},Xn=s=>("./".endsWith("/")?"./":".//")+s.replace(/^\/+/,""),nM=Xn("assets/hero-alpha2.webm"),xm=Xn("assets/hero-poster2.png"),Us=7.93,eg=.12,iM=.18,Yu=[[0,1],[45,2],[90,3],[135,3.9],[180,4.5],[225,5.5],[270,6.25],[315,7],[360,1+Us]],rM=["RIGHT","UP-RIGHT","UP","UP-LEFT","LEFT","DOWN-LEFT","DOWN","DOWN-RIGHT"];function sM(s,e){if(Math.hypot(s,e)<eg)return 0;const r=(Math.atan2(-e,s)*180/Math.PI+360)%360;for(let a=0;a<Yu.length-1;a++){const[c,f]=Yu[a],[d,p]=Yu[a+1];if(r>=c&&r<=d)return f+(r-c)/(d-c)*(p-f)}return 0}const oM=({boxRef:s,onLabel:e,mediaClassName:n=""})=>{const r=ot.useRef(null),a=ot.useRef(null),[c,f]=ot.useState("pending"),[d,p]=ot.useState("FRONT");return ot.useEffect(()=>{e==null||e(d)},[d,e]),ot.useEffect(()=>{const m=s.current,_=r.current;if(!m||!_)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){f("still");return}let x=!1,y=0,S=0,T=0,R=0,v=0,g=0,I=0,P=!1;const F=()=>{try{const le=document.createElement("canvas");le.width=_.videoWidth||1152,le.height=_.videoHeight||1560;const E=le.getContext("2d");if(!E)return!1;E.drawImage(_,0,0);const A=E.getImageData(Math.floor(le.width/2),2,1,1).data,ne=E.getImageData(Math.floor(le.width/2),Math.floor(le.height/2),1,1).data;return A[3]<128&&ne[3]>128}catch{return!1}},Y=()=>{if(x)return;if(P=_.canPlayType('video/webm; codecs="vp9"')!==""&&F(),f(P?"video":"still"),P){_.pause();try{_.currentTime=0}catch{}}};_.readyState>=2?Y():_.addEventListener("loadeddata",Y,{once:!0}),_.addEventListener("error",()=>!x&&f("still"),{once:!0});const k=le=>{const E=m.getBoundingClientRect(),A=E.left+E.width/2,ne=E.top+E.height/2,Z=Math.max(-1,Math.min(1,(le.clientX-A)/(window.innerWidth*.5))),oe=Math.max(-1,Math.min(1,(le.clientY-ne)/(window.innerHeight*.5)));if(S=sM(Z,oe),g=Z*6,I=oe*4,Math.hypot(Z,oe)>=eg){const de=(Math.atan2(-oe,Z)*180/Math.PI+360)%360;p(rM[Math.round(de/45)%8])}else p("FRONT")},N=()=>{S=0,g=0,I=0,p("FRONT")};window.addEventListener("pointermove",k,{passive:!0}),document.documentElement.addEventListener("mouseleave",N),window.addEventListener("blur",N);const V=()=>{if(!x){if(P){let le=S-T;if(T>.05&&(le-=Us*Math.round(le/Us)),Math.abs(le)>.001&&(T=((T+le*iM)%Us+Us)%Us),!_.seeking&&Math.abs(_.currentTime-T)>.1)try{_.currentTime=T}catch{}}else if(a.current){R+=(g-R)*.12,v+=(I-v)*.12;const le=R/6*1.5;a.current.style.transform=`translate(${R.toFixed(1)}px, ${v.toFixed(1)}px) rotate(${le.toFixed(2)}deg)`}y=requestAnimationFrame(V)}};return y=requestAnimationFrame(V),()=>{x=!0,cancelAnimationFrame(y),_.removeEventListener("loadeddata",Y),window.removeEventListener("pointermove",k),document.documentElement.removeEventListener("mouseleave",N),window.removeEventListener("blur",N)}},[s]),b.jsx("div",{className:"relative w-full h-full","data-gaze":d,"data-mode":c,role:"img","aria-label":"Animated character whose gaze follows your cursor in every direction",children:c==="still"?b.jsx("span",{ref:a,className:"block w-full h-full will-change-transform",children:b.jsx("img",{className:n,src:xm,alt:"",width:1152,height:1560,draggable:!1})}):b.jsx("video",{ref:r,className:n,src:nM,poster:xm,width:1152,height:1560,muted:!0,playsInline:!0,preload:"auto",disablePictureInPicture:!0})})},aM=Xn("assets/hero-poster2.png"),lM=({sourceRef:s,className:e=""})=>{const n=ot.useRef(null);return ot.useEffect(()=>{const r=n.current,a=s.current;if(!r||!a)return;const c=r.getContext("2d");if(!c)return;const f=new Image;f.src=aM;const d=()=>a.querySelector("video")??a.querySelector("img"),p=()=>{const g=d();return g?g instanceof HTMLVideoElement?g.readyState>=2?`v:${g.currentTime.toFixed(2)}`:"v:poster":`i:${g.src}`:"none"},m=()=>{const g=d();return g instanceof HTMLVideoElement?g.readyState>=2&&g.videoWidth>0?g:f.complete&&f.naturalWidth>0?f:null:g instanceof HTMLImageElement?g.complete&&g.naturalWidth>0?g:null:f.complete&&f.naturalWidth>0?f:null},_=g=>g instanceof HTMLVideoElement?g.videoWidth>0?{w:g.videoWidth,h:g.videoHeight}:null:g instanceof HTMLImageElement&&g.naturalWidth>0?{w:g.naturalWidth,h:g.naturalHeight}:null;let x=0,y=!1,S="";const T=()=>{const g=m();if(!g)return;const I=_(g);if(!I)return;const P=r.clientWidth,F=r.clientHeight;if(P<2||F<2)return;const Y=Math.min(window.devicePixelRatio||1,2),k=Math.round(P*Y),N=Math.round(F*Y);(r.width!==k||r.height!==N)&&(r.width=k,r.height=N);const V=Math.min(k/I.w,N/I.h),le=I.w*V,E=I.h*V;c.clearRect(0,0,k,N),c.drawImage(g,(k-le)/2,(N-E)/2,le,E),S=p()},R=()=>{y||(p()!==S&&T(),x=requestAnimationFrame(R))};T(),x=requestAnimationFrame(R),f.addEventListener("load",T);const v=new MutationObserver(T);return v.observe(a,{childList:!0,subtree:!0}),()=>{y=!0,cancelAnimationFrame(x),v.disconnect(),f.removeEventListener("load",T)}},[s]),b.jsx("canvas",{ref:n,className:e,"aria-hidden":"true"})},cM=({onExploreWork:s,scrollProgress:e,strain:n})=>{const[r,a]=ot.useState("FRONT"),c=ot.useRef(null),f=Math.min(1,Math.max(0,n??0)),d=e,p=1-jr(d,.12,.23),m=1-jr(d,0,.09),_=1-jr(d,0,.05),x=1-yt(d,.03,.17),y=1-yt(d,.06,.2),S=d*140;return d>=.235?null:b.jsxs("section",{className:"relative min-h-screen w-full flex flex-col justify-between items-center pointer-events-auto select-none overflow-hidden",style:{opacity:p,transform:`translateY(${S}px)`},children:[b.jsx("svg",{className:"hidden",children:b.jsxs("filter",{id:"waterRippleDistort",children:[b.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.02 0.08",numOctaves:"2",result:"noise",children:b.jsx("animate",{attributeName:"baseFrequency",dur:"6s",values:"0.02 0.08; 0.03 0.12; 0.02 0.08",repeatCount:"indefinite"})}),b.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:"14",xChannelSelector:"R",yChannelSelector:"G"})]})}),b.jsx("div",{className:"absolute inset-x-0 z-10 pointer-events-none select-none",style:{top:"64vh",opacity:m,transform:`translateY(${(f*3.5).toFixed(2)}px) scaleY(${(1-.008*f).toFixed(4)})`,transformOrigin:"50% 100%"},"aria-hidden":"true",children:b.jsxs("div",{className:"relative h-0 animate-rockbob",style:{fontSize:"17.5vw"},children:[b.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 w-[68%] h-[26px] rounded-[100%]",style:{top:"-13px",background:"radial-gradient(ellipse at center, rgba(24,32,40,0.38) 0%, rgba(24,32,40,0.13) 55%, transparent 72%)",filter:"blur(5px)"}}),b.jsx("div",{className:"absolute inset-x-0",style:{top:"-0.72em",height:"1.44em"},children:b.jsx("div",{className:"absolute inset-0",style:{transform:"scaleY(-0.55)",filter:"url(#waterRippleDistort) blur(1.2px) brightness(0.94) contrast(0.92)",opacity:.34,maskImage:"linear-gradient(to top, transparent 0%, rgba(0,0,0,0.65) 50%, transparent 98%)",WebkitMaskImage:"linear-gradient(to top, transparent 0%, rgba(0,0,0,0.65) 50%, transparent 98%)"},children:b.jsx("span",{className:"absolute inset-x-0 text-center font-rock font-semibold uppercase leading-[0.78] tracking-[0.03em] bg-gradient-to-b from-[#A9B8C1] via-[#8496A2] to-[#5A6D78] sm:from-[#96A8B4] sm:via-[#687B88] sm:to-[#3C4C57] bg-clip-text text-transparent",style:{top:"0.72em",transform:"translateY(-100%) translateY(0.04em)"},children:"ASHFAN"})})}),b.jsx("span",{className:"absolute inset-x-0 text-center font-rock font-semibold uppercase leading-[0.78] tracking-[0.03em] bg-gradient-to-b from-[#A9B8C1] via-[#8496A2] to-[#5A6D78] sm:from-[#96A8B4] sm:via-[#687B88] sm:to-[#3C4C57] bg-clip-text text-transparent",style:{bottom:"-0.04em",filter:"drop-shadow(0 3px 2px rgba(24,34,42,0.30))"},children:"ASHFAN"})]})}),b.jsx("div",{className:"h-28 w-full"}),b.jsxs("div",{className:"relative z-20 flex flex-col items-center justify-center my-auto",style:{scale:(1-.012*f).toFixed(4),translate:`0 ${(f*5).toFixed(2)}px`},children:[b.jsx("div",{style:{opacity:x,translate:`0 ${(1-x)*-18}px`},children:b.jsxs("div",{ref:c,className:"relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 origin-bottom scale-[1.28] sm:scale-[1.32] md:scale-[1.34]",style:{scale:(1-.01*f).toFixed(4)},children:[b.jsx("div",{className:"absolute inset-0 rounded-full bg-white/20 filter blur-xl scale-95 pointer-events-none"}),b.jsx(oM,{boxRef:c,onLabel:a,mediaClassName:"w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(26,28,30,0.18)]"}),b.jsx("div",{className:"absolute -bottom-2 inset-x-0 flex justify-center pointer-events-none",children:b.jsxs("span",{className:"px-2.5 py-0.5 rounded-full bg-white/70 backdrop-blur-sm border border-[#1A1C1E]/10 text-[9px] font-mono tracking-widest text-[#1A1C1E]/80 shadow-xs tabular-nums",children:["GAZE: ",r]})}),b.jsx("div",{className:"absolute top-[96%] inset-x-0 h-full pointer-events-none overflow-hidden opacity-45",style:{transform:`scaleY(${(-.9-.07*f).toFixed(3)}) translateY(${(4+3*f).toFixed(1)}px)`,filter:"url(#waterRippleDistort) blur(1.5px) contrast(0.85) brightness(0.9)",maskImage:"linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)",WebkitMaskImage:"linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)"},children:b.jsx(lM,{sourceRef:c,className:"w-full h-full filter saturate-75 opacity-70"})}),b.jsx("div",{className:"absolute top-[98%] left-1/2 -translate-x-1/2 w-32 h-6 rounded-full border border-white/40 scale-x-125 filter blur-[1px] animate-ripple pointer-events-none"})]})}),b.jsxs("div",{className:"mt-5 text-center w-full max-w-[320px] sm:max-w-xl px-2 sm:px-6 relative z-20 mx-auto",style:{opacity:y,translate:`0 ${(1-y)*-12}px`},children:[b.jsx("p",{className:"font-mono text-[9px] sm:text-xs uppercase tracking-[0.2em] text-[#1A1C1E]/60 mb-2",children:"The Shoreline · Personal Portfolio"}),b.jsxs("h1",{className:"font-serif text-xl sm:text-3xl md:text-5xl font-normal tracking-tight text-[#1A1C1E] leading-snug",children:["Crafting digital products, motion narratives, & ",b.jsx("span",{className:"italic text-[#9A7208]",children:"tactile WebGL"})," worlds."]}),b.jsx("p",{className:"mt-2.5 text-[11px] sm:text-sm text-[#1A1C1E]/75 max-w-[280px] sm:max-w-md mx-auto font-sans font-light leading-relaxed",children:"Independent creative developer and motion director based in Gorakhpur, India. A continuous journey across real work."}),b.jsxs("div",{className:"mt-5 flex flex-row items-center justify-center gap-2.5 sm:gap-3",children:[b.jsxs("button",{onClick:s,className:"group px-4 sm:px-7 py-2 sm:py-3 rounded-full bg-[#1A1C1E] text-white text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-[0.16em] font-medium hover:bg-[#F5B81E] hover:text-[#1A1C1E] transition-all duration-300 shadow-md hover:shadow-lg flex items-center space-x-1.5 sm:space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A7208]",children:[b.jsx("span",{children:"See the Work"}),b.jsx("svg",{className:"w-3 sm:w-3.5 h-3 sm:h-3.5 transform group-hover:translate-x-1 transition-transform",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",children:b.jsx("path",{d:"M3 8h10M9 4l4 4-4 4",strokeLinecap:"round",strokeLinejoin:"round"})})]}),b.jsx("a",{href:"#about",className:"px-3.5 sm:px-6 py-2 sm:py-3 rounded-full border border-[#1A1C1E]/20 text-[#1A1C1E] text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-[0.16em] hover:bg-white/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1C1E]",children:"The Story"})]})]})]}),b.jsxs("div",{className:"pb-8 pt-4 flex flex-col items-center justify-center space-y-2 pointer-events-none z-20",style:{opacity:_},children:[b.jsx("span",{className:"text-[10px] font-mono uppercase tracking-[0.25em] text-[#1A1C1E]/50",children:"Scroll to Begin Journey"}),b.jsx("div",{className:"w-5 h-8 rounded-full border border-[#1A1C1E]/30 flex justify-center p-1",children:b.jsx("div",{className:"w-1 h-2 rounded-full bg-[#1A1C1E]/60 animate-bounce"})})]})]})},ko=[{id:"cutlab",number:"01",title:"CutLab",tagline:"Precision motion curation & frame-accurate editorial pacing.",category:"Motion Platform & Creative Tool",year:"2026",tintColor:"#2B394A",image:Xn("assets/06-seasonal-smoothie-figcraft.png"),liveUrl:"https://ashfanansari.github.io/cutlab/",status:"Live",overview:"CutLab was conceived as a high-density motion playground and editorial pacing engine. Designed for creators dissecting kinetic typography, frame transitions, and visual rhythm.",highlights:["Zero-latency video frame scrub and timeline visualization.","Bespoke editorial typography and high-contrast dark aesthetic.","Real-time pacing curves and visual waveform synchronization."],stack:["React","TypeScript","Tailwind CSS","Framer Motion","Canvas API"],clientOrContext:"Independent Motion & Web Product"},{id:"our-study-home",number:"02",title:"Our Study Home",tagline:"NEET revision workspace, focus planner, and paired study companion.",category:"Product & Web App",year:"2026",tintColor:"#364B44",image:Xn("assets/04-our-study-home.png"),liveUrl:"https://ashfanansari.github.io/our-study-home",status:"Live",overview:"A focused, distraction-free study environment tailored for intensive competitive exam preparation. Features real-time pair synchronization, daily syllabus planner, the interactive Mochi study buddy, and mono architectural redesign.",highlights:["Paired real-time study timer and sync status for mutual accountability.","Syllabus tracker with spaced-repetition revision cycles.","Minimalist monochrome aesthetic designed to prevent cognitive fatigue."],stack:["React","Tailwind CSS","Vite","Local-first State","WebSockets"],clientOrContext:"Personal Flagship NEET Platform"},{id:"duostudy",number:"03",title:"DuoStudy",tagline:"Next-gen collaborative revision room with ambient audio & synchronized notes.",category:"Web Experience & Workspace",year:"2026",tintColor:"#223843",image:Xn("assets/10-wallpaper-silver-boy.webp"),liveUrl:"https://ashfanansari.github.io/duostudy/",status:"Live",overview:"The successor companion to Our Study Home, DuoStudy experiments with soft tactile surfaces, ambient study sounds, interactive flashcard stacks, and frictionless note synchronization.",highlights:["Tactile card decks with keyboard-driven review flow.","Integrated ambient soundscapes for deep concentration.","Instant session sharing without complex authentication barriers."],stack:["React","TypeScript","Tailwind CSS","Web Audio API"],clientOrContext:"Collaborative Learning Suite"},{id:"aerix-volt",number:"04",title:"AERIX Volt",tagline:"High-performance electric footwear showcase with 3D breakout mechanics.",category:"Interactive E-Commerce & WebGL",year:"2026",tintColor:"#4A3420",image:Xn("assets/01-aerix-volt-breakout-hero.png"),liveUrl:"https://ashfanansari.github.io/aerix-volt/",status:"Live",overview:"An editorial product experience built around the Dark Volt silhouette. Features 4 distinct colorways across multiple camera angles, drag-to-rotate breakout hero tiles, and smooth scroll-linked zoom dynamics.",highlights:["Tile-breaking hero animation with cursor parallax perspective.","Dynamic colorway switcher updating shadows and lighting in real time.","High-resolution multi-angle photography pipeline integration."],stack:["React","Three.js / WebGL","Tailwind CSS","Motion"],clientOrContext:"Concept Product Showcase"},{id:"this-website",number:"05",title:"The Journey",tagline:"Continuous WebGL sky-over-water camera glide portfolio.",category:"Creative Dev & WebGL Experience",year:"2026",tintColor:"#1A1C1E",image:Xn("assets/08-unsaid-sepia-reel-frame.png"),liveUrl:"#top",status:"Living Experiment",overview:"This living portfolio site. Built on the principle that the web should feel like an atmospheric continuum rather than stacked boxes. Features custom water normal shaders, mooring scroll mechanics, and a 26-state gaze-tracking avatar.",highlights:["Custom WebGL water shader with dynamic sunlight specular glint & caustics.","Mooring scroll lock transitioning fluidly into 3D cylindrical carousel navigation.","Full 5-stop ambient color progression from dawn haze to obsidian Kryntix night."],stack:["Vite","React 18","TypeScript","Three.js / GLSL","Tailwind CSS"],clientOrContext:"Ashfan Personal Portfolio Flagship"}],uM=({scrollProgress:s,onSelectProject:e,onActiveProjectChange:n,onToggleFullIndex:r,isFullIndexOpen:a})=>{const[c,f]=ot.useState(0),[d,p]=ot.useState(!1),m=ot.useRef(0),_=ot.useRef(0),x=ko.length,y=(Math.round(c)%x+x)%x,S=ko[y];ot.useEffect(()=>{S&&n(S.tintColor)},[y,S,n]),ot.useEffect(()=>{if(s>=.22&&s<=.5&&!d){const k=(s-.22)/.28,V=k*k*k*(k*(k*6-15)+10)*(x-1);f(V)}},[s,x,d]),ot.useEffect(()=>{const k=N=>{a||(N.key==="ArrowRight"?f(V=>Math.round(V)+1):N.key==="ArrowLeft"&&f(V=>Math.round(V)-1))};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[a]);const T=k=>{p(!0),m.current=k,_.current=c},R=ot.useCallback(k=>{if(!d)return;const V=-(k-m.current)/220;f(_.current+V)},[d]),v=ot.useCallback(()=>{d&&(p(!1),f(k=>Math.round(k)))},[d]);ot.useEffect(()=>{const k=le=>R(le.clientX),N=le=>{le.touches.length>0&&R(le.touches[0].clientX)},V=()=>v();return d&&(window.addEventListener("mousemove",k),window.addEventListener("mouseup",V),window.addEventListener("touchmove",N),window.addEventListener("touchend",V)),()=>{window.removeEventListener("mousemove",k),window.removeEventListener("mouseup",V),window.removeEventListener("touchmove",N),window.removeEventListener("touchend",V)}},[d,R,v]);const g=s;if(g<.1||g>.58)return null;const I=Math.min(yt(g,.1,.2),1-yt(g,.5,.58)),P=yt(g,.13,.23),F=yt(g,.17,.29),Y=yt(g,.23,.33);return b.jsxs("section",{className:"fixed inset-0 pointer-events-auto flex flex-col justify-between items-center py-20 px-4 z-20 select-none overflow-hidden",style:{opacity:I},children:[b.jsxs("div",{className:"w-full max-w-6xl mx-auto flex justify-between items-center z-30 pt-4",style:{opacity:P,translate:`0 ${(1-P)*14}px`},children:[b.jsxs("div",{className:"flex items-center space-x-3",children:[b.jsx("span",{className:"text-[10px] font-mono uppercase tracking-[0.22em] text-[#1A1C1E]/60 bg-white/60 px-3 py-1 rounded-full border border-[#1A1C1E]/10 backdrop-blur-xs",children:"01 / Featured Passage"}),b.jsx("span",{className:"hidden sm:inline text-xs font-serif italic text-[#1A1C1E]/70",children:"Adrift on calm waters"})]}),b.jsxs("div",{className:"flex items-center bg-white/70 backdrop-blur-sm p-1 rounded-full border border-[#1A1C1E]/10 shadow-xs",children:[b.jsx("button",{onClick:()=>{a&&r()},className:`px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase transition-all ${a?"text-[#1A1C1E]/70 hover:text-[#1A1C1E]":"bg-[#1A1C1E] text-white shadow-xs"}`,children:"Featured (3D)"}),b.jsx("button",{onClick:()=>{a||r()},className:`px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase transition-all ${a?"bg-[#1A1C1E] text-white shadow-xs":"text-[#1A1C1E]/70 hover:text-[#1A1C1E]"}`,children:"Full Index"})]})]}),b.jsx("div",{className:"relative w-full max-w-5xl h-[460px] md:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing my-auto",onMouseDown:k=>T(k.clientX),onTouchStart:k=>{k.touches.length>0&&T(k.touches[0].clientX)},style:{perspective:"1200px",opacity:F,scale:`${.965+.035*F}`},children:ko.map((k,N)=>{let V=N-c;V=((V+x/2)%x+x)%x-x/2;const le=V*(Math.PI*2/x),E=window.innerWidth<640?320:460,A=Math.sin(le)*E,ne=(Math.cos(le)-1)*E*.9,Z=V*-28,oe=Math.abs(V)<.45,de=Math.max(.15,Math.cos(le)*1.1);return b.jsxs("div",{onClick:()=>{oe?e(k):f(re=>re+V)},className:"absolute w-[290px] sm:w-[350px] md:w-[400px] rounded-2xl bg-white/90 backdrop-blur-md border border-[#1A1C1E]/10 shadow-[0_20px_45px_rgba(26,28,30,0.14)] p-5 transition-all duration-150 ease-out select-none",style:{transform:`translateX(${A}px) translateZ(${ne}px) rotateY(${Z}deg) scale(${oe?1.04:.92})`,opacity:de,zIndex:Math.round(100+ne),cursor:oe?"pointer":"grab"},children:[b.jsxs("div",{className:"relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#1A1C1E]/5 mb-4 group",children:[b.jsx("img",{src:k.image,alt:k.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",draggable:!1}),b.jsx("div",{className:"absolute top-3 left-3 px-2 py-0.5 rounded-full bg-[#1A1C1E]/80 text-white font-mono text-[9px] tracking-widest backdrop-blur-xs",children:k.number}),b.jsx("div",{className:"absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-white/90 text-[#1A1C1E] font-mono text-[9px] tracking-wider uppercase backdrop-blur-xs",children:k.category.split(" ")[0]})]}),b.jsxs("div",{className:"flex items-baseline justify-between",children:[b.jsx("h3",{className:"font-serif text-2xl font-normal text-[#1A1C1E] tracking-tight",children:k.title}),b.jsx("span",{className:"font-mono text-[10px] text-[#1A1C1E]/50 tabular-nums",children:k.year})]}),b.jsx("p",{className:"mt-1 text-xs text-[#1A1C1E]/70 line-clamp-2 font-sans font-light leading-relaxed",children:k.tagline}),oe&&b.jsxs("div",{className:"mt-4 pt-3 border-t border-[#1A1C1E]/10 flex items-center justify-between",children:[b.jsxs("span",{className:"text-[10px] font-mono uppercase tracking-widest text-[#9A7208] font-medium flex items-center space-x-1",children:[b.jsx("span",{children:"Explore Case"}),b.jsx("span",{children:"→"})]}),b.jsx("span",{className:"text-[9px] font-mono uppercase text-[#1A1C1E]/40 tracking-wider",children:"Click to Open"})]}),b.jsx("div",{className:"absolute top-[102%] inset-x-0 h-28 pointer-events-none overflow-hidden opacity-30",style:{transform:"scaleY(-0.7)",filter:"blur(3px) contrast(0.8)",maskImage:"linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)",WebkitMaskImage:"linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)"},children:b.jsx("div",{className:"w-full h-full bg-white/40 rounded-2xl"})})]},k.id)})}),b.jsxs("div",{className:"w-full max-w-md mx-auto flex items-center justify-between z-30 pb-4",style:{opacity:Y,translate:`0 ${(1-Y)*12}px`},children:[b.jsx("button",{onClick:()=>f(k=>Math.round(k)-1),className:"p-2.5 rounded-full bg-white/80 hover:bg-white text-[#1A1C1E] border border-[#1A1C1E]/10 shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A7208]","aria-label":"Previous project",children:b.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:b.jsx("path",{d:"M15 18l-6-6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})})}),b.jsx("div",{className:"flex items-center space-x-2",children:ko.map((k,N)=>b.jsx("button",{onClick:()=>{const V=N-y;f(le=>le+V)},className:`transition-all duration-300 rounded-full ${N===y?"w-7 h-1.5 bg-[#F5B81E]":"w-1.5 h-1.5 bg-[#1A1C1E]/30 hover:bg-[#1A1C1E]/60"}`,"aria-label":`Go to project ${k.title}`},k.id))}),b.jsx("button",{onClick:()=>f(k=>Math.round(k)+1),className:"p-2.5 rounded-full bg-white/80 hover:bg-white text-[#1A1C1E] border border-[#1A1C1E]/10 shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A7208]","aria-label":"Next project",children:b.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:b.jsx("path",{d:"M9 18l6-6-6-6",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})},fM=({project:s,onClose:e})=>(ot.useEffect(()=>{const n=r=>{r.key==="Escape"&&e()};return s&&(window.addEventListener("keydown",n),document.body.style.overflow="hidden"),()=>{window.removeEventListener("keydown",n),document.body.style.overflow=""}},[s,e]),s?b.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-auto",role:"dialog","aria-modal":"true","aria-labelledby":"modal-project-title",children:[b.jsx("div",{className:"absolute inset-0 bg-[#0A0A0C]/65 backdrop-blur-md transition-opacity duration-300",onClick:e}),b.jsxs("div",{className:"relative w-full max-w-4xl max-h-[90vh] bg-[#F7F8FA] rounded-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200",children:[b.jsxs("div",{className:"flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#1A1C1E]/10 bg-white/60 backdrop-blur-xs",children:[b.jsxs("div",{className:"flex items-center space-x-3",children:[b.jsx("span",{className:"font-mono text-xs text-[#9A7208] font-semibold tracking-widest",children:s.number}),b.jsx("span",{className:"text-[#1A1C1E]/20",children:"/"}),b.jsx("span",{className:"font-mono text-xs uppercase tracking-widest text-[#1A1C1E]/60",children:s.category})]}),b.jsx("button",{onClick:e,className:"p-2 rounded-full hover:bg-[#1A1C1E]/5 text-[#1A1C1E] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A7208]","aria-label":"Close Case Study",children:b.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:b.jsx("path",{d:"M18 6L6 18M6 6l12 12",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),b.jsxs("div",{className:"overflow-y-auto p-6 sm:p-8 space-y-8",children:[b.jsxs("div",{className:"relative w-full aspect-[21/9] sm:aspect-[2/1] rounded-2xl overflow-hidden bg-[#1A1C1E]/10 border border-[#1A1C1E]/5 shadow-inner",children:[b.jsx("img",{src:s.image,alt:s.title,className:"w-full h-full object-cover"}),b.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6",children:b.jsxs("span",{className:"px-3 py-1 rounded-full bg-white/90 text-[#1A1C1E] font-mono text-[10px] uppercase tracking-widest",children:["Status: ",s.status]})})]}),b.jsxs("div",{children:[b.jsx("h2",{id:"modal-project-title",className:"font-serif text-3xl sm:text-4xl text-[#1A1C1E] font-normal tracking-tight",children:s.title}),b.jsx("p",{className:"mt-2 text-base text-[#1A1C1E]/80 font-serif italic",children:s.tagline})]}),b.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-[#1A1C1E]/10",children:[b.jsxs("div",{className:"md:col-span-2 space-y-4",children:[b.jsx("h4",{className:"font-mono text-xs uppercase tracking-widest text-[#1A1C1E]/50",children:"Narrative & Context"}),b.jsx("p",{className:"text-sm sm:text-base text-[#1A1C1E]/80 leading-relaxed font-sans",children:s.overview}),b.jsxs("div",{className:"pt-4 space-y-2",children:[b.jsx("h5",{className:"font-mono text-xs uppercase tracking-widest text-[#1A1C1E]/60",children:"Key Craft Highlights"}),b.jsx("ul",{className:"space-y-2 text-sm text-[#1A1C1E]/75",children:s.highlights.map((n,r)=>b.jsxs("li",{className:"flex items-start space-x-2",children:[b.jsx("span",{className:"text-[#9A7208] font-bold mt-0.5",children:"•"}),b.jsx("span",{children:n})]},r))})]})]}),b.jsxs("div",{className:"space-y-6 md:border-l md:border-[#1A1C1E]/10 md:pl-6",children:[b.jsxs("div",{children:[b.jsx("h4",{className:"font-mono text-[10px] uppercase tracking-widest text-[#1A1C1E]/50 mb-1",children:"Context / Initiative"}),b.jsx("p",{className:"text-xs font-medium text-[#1A1C1E]",children:s.clientOrContext})]}),b.jsxs("div",{children:[b.jsx("h4",{className:"font-mono text-[10px] uppercase tracking-widest text-[#1A1C1E]/50 mb-1",children:"Year"}),b.jsx("p",{className:"text-xs font-mono text-[#1A1C1E] tabular-nums",children:s.year})]}),b.jsxs("div",{children:[b.jsx("h4",{className:"font-mono text-[10px] uppercase tracking-widest text-[#1A1C1E]/50 mb-2",children:"Technical Stack"}),b.jsx("div",{className:"flex flex-wrap gap-1.5",children:s.stack.map(n=>b.jsx("span",{className:"px-2 py-0.5 rounded-md bg-[#1A1C1E]/5 border border-[#1A1C1E]/10 text-[10px] font-mono text-[#1A1C1E]/80",children:n},n))})]}),s.liveUrl&&s.liveUrl!=="#top"&&b.jsx("div",{className:"pt-4",children:b.jsxs("a",{href:s.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-[#1A1C1E] text-white hover:bg-[#F5B81E] hover:text-[#1A1C1E] text-xs font-mono uppercase tracking-widest transition-colors shadow-sm",children:[b.jsx("span",{children:"Launch Live Site"}),b.jsx("svg",{className:"w-3.5 h-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:b.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3",strokeLinecap:"round",strokeLinejoin:"round"})})]})})]})]})]})]})]}):null),dM=({isOpen:s,onClose:e,onSelectProject:n})=>s?b.jsxs("div",{className:"fixed inset-0 z-50 bg-[#0A0A0C]/90 backdrop-blur-xl text-white flex flex-col p-6 sm:p-12 md:p-16 overflow-y-auto animate-in fade-in duration-200",role:"dialog","aria-modal":"true",children:[b.jsxs("div",{className:"w-full max-w-5xl mx-auto flex justify-between items-center pb-8 border-b border-white/10",children:[b.jsxs("div",{children:[b.jsx("span",{className:"font-mono text-xs text-[#F5B81E] tracking-widest uppercase",children:"Archive Index"}),b.jsx("h2",{className:"font-serif text-3xl sm:text-4xl font-normal mt-1",children:"All Projects & Experiments"})]}),b.jsx("button",{onClick:e,className:"p-3 rounded-full hover:bg-white/10 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B81E]","aria-label":"Close Index",children:b.jsx("svg",{className:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:b.jsx("path",{d:"M18 6L6 18M6 6l12 12",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),b.jsx("div",{className:"w-full max-w-5xl mx-auto divide-y divide-white/10 mt-6",children:ko.map(r=>b.jsxs("div",{onClick:()=>{e(),n(r)},className:"group py-6 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:bg-white/[0.03] px-4 rounded-xl transition-colors",children:[b.jsxs("div",{className:"flex items-baseline space-x-6",children:[b.jsx("span",{className:"font-mono text-xs text-[#F5B81E] tracking-widest",children:r.number}),b.jsxs("div",{children:[b.jsx("h3",{className:"font-serif text-2xl group-hover:text-[#F5B81E] transition-colors",children:r.title}),b.jsx("p",{className:"text-xs text-white/50 font-sans mt-0.5",children:r.tagline})]})]}),b.jsxs("div",{className:"mt-3 md:mt-0 flex items-center space-x-6 text-xs font-mono text-white/60 tabular-nums",children:[b.jsx("span",{className:"hidden sm:inline uppercase tracking-widest",children:r.category}),b.jsx("span",{className:"text-white/40",children:r.year}),b.jsx("span",{className:"text-white/70 group-hover:text-white transition-colors",children:"View →"})]})]},r.id))})]}):null,hM=[{id:"infography",name:"InfoGraphy",handle:"@InfoGraphy",tagline:"Data visualization & deep motion essays.",description:"Deconstructing complex ideas through cinematic data visualization, isometric typography, and documentary-style pacing.",genre:"Motion Essays & Visual Data",url:"https://www.youtube.com/channel/UCFy7kD_6Z0luge4mAO9QB7w",statsLabel:"Flagship Ek Sawal Pilot",coverImage:Xn("assets/02-aerix-vision-posters.png"),accent:"#D4851F"},{id:"pixelnest",name:"PixelNest",handle:"@PixelNest",tagline:"Design systems, creative coding & UI crafts.",description:"A lab exploring micro-interactions, layout physics, and short-form visual engineering experiments.",genre:"Creative Code & UI Experiments",url:"https://www.youtube.com/shorts/T8m9EYiRHJw",statsLabel:"Umbrella Boy Series",coverImage:Xn("assets/channel-avatar-3d.png"),accent:"#4A6984"},{id:"mili-toons",name:"Mili Toons",handle:"@MiliToons",tagline:"Animated storytelling & character shorts.",description:"Bite-sized animated narratives exploring whimsical human situations, emotional warmth, and character keyframing.",genre:"Character Animation & Shorts",url:"https://www.youtube.com/channel/UCt_ZVOzqJMUjNHm4ykDXRvA",statsLabel:"Human-Mili Animation",coverImage:Xn("assets/mili-human-lock-B.webp"),accent:"#8CA381"},{id:"unsaid",name:"Unsaid",handle:"@Unsaid2D",tagline:"Raw emotional visual narratives & sepia saga.",description:"Intimate visual shorts, heartfelt character vignettes, and nostalgic monochrome illustration reels.",genre:"2D Narrative & Sepia Reels",url:"https://www.youtube.com/@Unsaid2D",statsLabel:"Sepia Saga & Reels",coverImage:Xn("assets/08-unsaid-sepia-reel-frame.png"),accent:"#A65B32"}],pM=({scrollProgress:s})=>{const e=s;if(e<.49||e>.69)return null;const n=Math.min(yt(e,.49,.56),1-yt(e,.62,.69)),r=yt(e,.52,.6),a=yt(e,.57,.64);return b.jsxs("section",{id:"channels",className:"fixed inset-0 pointer-events-auto flex flex-col justify-between items-center py-20 px-6 z-20 select-none overflow-hidden",style:{opacity:n},children:[b.jsxs("div",{className:"w-full max-w-6xl mx-auto flex justify-between items-baseline pt-4",style:rn(r,16),children:[b.jsxs("div",{children:[b.jsx("span",{className:"text-[10px] font-mono uppercase tracking-[0.22em] text-[#1A1C1E]/60 bg-white/60 px-3 py-1 rounded-full border border-[#1A1C1E]/10 backdrop-blur-xs",children:"02 / Channels Drift"}),b.jsx("h2",{className:"font-serif text-3xl sm:text-4xl text-[#1A1C1E] font-normal tracking-tight mt-2",children:"Independent Media & Animation Labs"})]}),b.jsx("span",{className:"hidden sm:inline text-xs font-mono text-[#1A1C1E]/50 tracking-wider",children:"FLOATING ADRIFT"})]}),b.jsx("div",{className:"w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-auto",children:hM.map((c,f)=>{const d=`${f*.7}s`,p=yt(e,.52+f*.018,.6+f*.018);return b.jsxs("div",{className:"relative rounded-2xl bg-white/85 backdrop-blur-md border border-[#1A1C1E]/10 p-5 shadow-[0_16px_36px_rgba(26,28,30,0.12)] hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between",style:{animation:"float 5s ease-in-out infinite",animationDelay:d,...rn(p,26,5)},children:[b.jsxs("div",{children:[b.jsxs("div",{className:"relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#1A1C1E]/5 mb-4",children:[b.jsx("img",{src:c.coverImage,alt:c.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),b.jsx("div",{className:"absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-[#1A1C1E]/80 text-white font-mono text-[9px] tracking-widest backdrop-blur-xs",children:c.handle})]}),b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsx("h3",{className:"font-serif text-2xl font-normal text-[#1A1C1E] tracking-tight group-hover:text-[#9A7208] transition-colors",children:c.name}),b.jsx("span",{className:"w-2.5 h-2.5 rounded-full",style:{backgroundColor:c.accent}})]}),b.jsx("p",{className:"font-mono text-[10px] uppercase tracking-wider text-[#1A1C1E]/50 mt-0.5",children:c.genre}),b.jsx("p",{className:"mt-2 text-xs text-[#1A1C1E]/75 line-clamp-3 leading-relaxed font-sans",children:c.description})]}),b.jsxs("div",{className:"mt-5 pt-3 border-t border-[#1A1C1E]/10 flex items-center justify-between",children:[b.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-[#1A1C1E]/60",children:c.statsLabel}),b.jsxs("a",{href:c.url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-1.5 text-[10px] font-mono uppercase tracking-widest text-[#1A1C1E] font-medium group-hover:text-[#9A7208] transition-colors",children:[b.jsx("span",{children:"Visit"}),b.jsx("svg",{className:"w-3 h-3",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:b.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",strokeLinecap:"round",strokeLinejoin:"round"})})]})]}),b.jsx("div",{className:"absolute top-[102%] inset-x-0 h-16 pointer-events-none opacity-20",style:{transform:"scaleY(-0.6)",filter:"blur(3px)",maskImage:"linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)",WebkitMaskImage:"linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)"},children:b.jsx("div",{className:"w-full h-full bg-white/50 rounded-xl"})})]},c.id)})}),b.jsx("div",{className:"w-full max-w-6xl mx-auto flex justify-center pb-4 text-center",style:rn(a,10),children:b.jsx("p",{className:"text-[11px] font-mono uppercase tracking-[0.2em] text-[#1A1C1E]/50",children:"Independent storytelling, frame timing & creative coding"})})]})},mM=[{id:"websites",num:"01",title:"Websites & WebGL",subtitle:"Living digital flagships and interactive frontends",description:"Bespoke web applications built with ruthless attention to craft, type scale, spatial continuity, and smooth 60 FPS interactions. No generic templates, no AI slop.",deliverables:["Interactive Product Experiences & Portfolios","Custom WebGL / Three.js Shaders & 3D Stages","Fluid Micro-interactions & Tactile Physics","Accessible, High-Performance Vite & React Stacks"],tools:["React","TypeScript","Three.js / GLSL","Tailwind CSS","Framer Motion"]},{id:"motion",num:"02",title:"Motion Design & Direction",subtitle:"Kinetic typography, launch showreels & video essays",description:"Transforming technical products and abstract ideas into gripping visual stories with frame-by-frame pacing, custom audio sync, and refined editorial elegance.",deliverables:["Product Launch & Feature Reveal Videos","Kinetic Brand Typography & Visual Loops","Editorial Explainer Animations & Documentaries","Social Cutdowns & Vertical Story Reels"],tools:["After Effects","Premiere Pro","Blender","Photoshop","FigCraft"]},{id:"ai-visuals",num:"03",title:"AI Visuals & Neural Workflows",subtitle:"Character consistency, cinematic art direction & synthetic pipelines",description:"Harnessing frontier generative models with disciplined art direction. Multi-angle character consistency, high-resolution product cutouts, and hyper-curated art pipelines.",deliverables:["Consistent Multi-Pose Character References","Hyper-Detailed Concept Visuals & Mood Boards","Automated Masking, Upscaling & Retouching Pipelines","Brand Asset Generation with Precise Art Direction"],tools:["Midjourney","FLUX","ComfyUI","Photoshop Neural","Custom Python Tooling"]},{id:"creative-dev",num:"04",title:"Digital Experiences & Creative Dev",subtitle:"Interactive tools, 3D configurators & experimental software",description:"Prototyping playful, tactile digital tools that push browser capabilities. From custom colorway configurators to scroll-sequence product breakdowns.",deliverables:["3D Product Configurators & Material Viewers","Scroll-Driven Frame Sequences & Scrubbers","Custom Design Systems & Interactive Widgets","Novel Canvas Physics & Sensory Feedback Experiments"],tools:["Web Audio API","Canvas 2D / WebGL","Tailwind","Vite","Node.js"]}],gM=({scrollProgress:s})=>{const e=s;if(e<.65||e>.83)return null;const n=Math.min(yt(e,.65,.71),1-yt(e,.78,.83)),r=yt(e,.66,.74),a=yt(e,.73,.79);return b.jsxs("section",{id:"services",className:"fixed inset-0 pointer-events-auto flex flex-col justify-between items-center py-20 px-6 z-20 select-none overflow-hidden",style:{opacity:n},children:[b.jsxs("div",{className:"w-full max-w-6xl mx-auto flex justify-between items-baseline pt-4",style:rn(r,16),children:[b.jsxs("div",{children:[b.jsx("span",{className:"text-[10px] font-mono uppercase tracking-[0.22em] text-[#1A1C1E]/60 bg-white/60 px-3 py-1 rounded-full border border-[#1A1C1E]/10 backdrop-blur-xs",children:"03 / Services & Capabilities"}),b.jsx("h2",{className:"font-serif text-3xl sm:text-4xl text-[#1A1C1E] font-normal tracking-tight mt-2",children:"Discipline & Craftsmanship"})]}),b.jsx("span",{className:"hidden sm:inline text-xs font-mono text-[#1A1C1E]/50 tracking-wider",children:"STEPPED FLOATING DECK"})]}),b.jsx("div",{className:"w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-auto",children:mM.map((c,f)=>{const d=yt(e,.68+f*.015,.75+f*.015);return b.jsxs("div",{className:"rounded-2xl bg-white/90 backdrop-blur-md border border-[#1A1C1E]/10 p-6 shadow-[0_18px_40px_rgba(26,28,30,0.12)] flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group",style:{marginTop:`${f*16}px`,...rn(d,30,4)},children:[b.jsxs("div",{children:[b.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-[#1A1C1E]/10 mb-4",children:[b.jsx("span",{className:"font-mono text-xs text-[#9A7208] font-semibold tracking-widest",children:c.num}),b.jsx("span",{className:"font-mono text-[9px] uppercase tracking-wider text-[#1A1C1E]/40",children:"Discipline"})]}),b.jsx("h3",{className:"font-serif text-2xl font-normal text-[#1A1C1E] tracking-tight group-hover:text-[#9A7208] transition-colors",children:c.title}),b.jsx("p",{className:"mt-1 text-xs font-serif italic text-[#1A1C1E]/60",children:c.subtitle}),b.jsx("p",{className:"mt-3 text-xs text-[#1A1C1E]/75 leading-relaxed font-sans",children:c.description}),b.jsxs("div",{className:"mt-5 space-y-1.5",children:[b.jsx("span",{className:"font-mono text-[9px] uppercase tracking-widest text-[#1A1C1E]/50 block",children:"Deliverables"}),c.deliverables.map((p,m)=>b.jsxs("div",{className:"text-[11px] text-[#1A1C1E]/80 flex items-start space-x-1.5",children:[b.jsx("span",{className:"text-[#9A7208] text-xs",children:"•"}),b.jsx("span",{children:p})]},m))]})]}),b.jsx("div",{className:"mt-6 pt-3 border-t border-[#1A1C1E]/10 flex flex-wrap gap-1",children:c.tools.map(p=>b.jsx("span",{className:"px-2 py-0.5 rounded bg-[#1A1C1E]/5 text-[9px] font-mono text-[#1A1C1E]/70",children:p},p))})]},c.id)})}),b.jsx("div",{className:"w-full max-w-6xl mx-auto flex justify-center pb-4 text-center",style:rn(a,10),children:b.jsx("span",{className:"text-[10px] font-mono uppercase tracking-[0.2em] text-[#1A1C1E]/50",children:"Built for teams who refuse average"})})]})},vM=({scrollProgress:s})=>{const e=s;if(e<.79||e>.93)return null;const n=Math.min(yt(e,.79,.85),1-yt(e,.885,.93)),r=yt(e,.8,.86),a=yt(e,.815,.875),c=yt(e,.83,.885),f=yt(e,.84,.895),d=yt(e,.85,.905);return b.jsx("section",{id:"about",className:"fixed inset-0 pointer-events-auto flex items-center justify-center p-6 z-20 select-none overflow-hidden",style:{opacity:n},children:b.jsxs("div",{className:"w-full max-w-3xl rounded-3xl bg-white/90 backdrop-blur-md border border-[#1A1C1E]/10 p-8 sm:p-12 shadow-[0_24px_60px_rgba(26,28,30,0.14)] relative",children:[b.jsxs("div",{className:"flex items-center justify-between pb-6 border-b border-[#1A1C1E]/10",style:rn(r,12),children:[b.jsxs("div",{className:"flex items-center space-x-2",children:[b.jsx("span",{className:"w-2 h-2 rounded-full bg-[#F5B81E]"}),b.jsx("span",{className:"font-mono text-[10px] uppercase tracking-[0.2em] text-[#1A1C1E]/70",children:"04 / The About Shoal"})]}),b.jsx("span",{className:"font-mono text-[10px] uppercase tracking-widest text-[#1A1C1E]/40",children:"Latitude 26.7606° N, 83.3732° E"})]}),b.jsxs("div",{className:"mt-8 space-y-5",children:[b.jsxs("h2",{className:"font-serif text-3xl sm:text-4xl text-[#1A1C1E] font-normal tracking-tight leading-tight",style:rn(a,16),children:["Building with weight, atmosphere, and ",b.jsx("span",{className:"italic text-[#9A7208]",children:"singular focus"}),"."]}),b.jsx("p",{className:"text-sm sm:text-base text-[#1A1C1E]/80 leading-relaxed font-sans font-light",style:rn(c,14),children:"I operate out of Gorakhpur, India. My work sits at the cross-section of frontend engineering, motion direction, and visual narrative. I build websites that feel like continuous worlds rather than generic slide decks, and animate stories that hold emotional residue."}),b.jsx("p",{className:"text-sm sm:text-base text-[#1A1C1E]/80 leading-relaxed font-sans font-light",style:rn(f,14),children:"Every build follows a simple standard: real evidence, real screenshots, hand-tuned wave normals, zero decorative slop, and ruthless typography. Whether it is an interactive 3D product showcase or an animated YouTube short, the craft is non-negotiable."})]}),b.jsxs("div",{className:"mt-8 pt-6 border-t border-[#1A1C1E]/10 grid grid-cols-2 sm:grid-cols-3 gap-6",style:rn(d,12),children:[b.jsxs("div",{children:[b.jsx("span",{className:"font-mono text-[9px] uppercase tracking-widest text-[#1A1C1E]/40 block",children:"Base Studio"}),b.jsx("span",{className:"font-serif text-base text-[#1A1C1E] mt-0.5 block",children:"Gorakhpur, India"})]}),b.jsxs("div",{children:[b.jsx("span",{className:"font-mono text-[9px] uppercase tracking-widest text-[#1A1C1E]/40 block",children:"Specialization"}),b.jsx("span",{className:"font-serif text-base text-[#1A1C1E] mt-0.5 block",children:"Web & Motion"})]}),b.jsxs("div",{className:"col-span-2 sm:col-span-1",children:[b.jsx("span",{className:"font-mono text-[9px] uppercase tracking-widest text-[#1A1C1E]/40 block",children:"Philosophy"}),b.jsx("span",{className:"font-serif text-base text-[#1A1C1E] mt-0.5 block",children:"Anti-Slop Craft"})]})]}),b.jsx("div",{className:"absolute top-[102%] inset-x-8 h-20 pointer-events-none opacity-25",style:{transform:"scaleY(-0.7)",filter:"blur(3px)",maskImage:"linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)",WebkitMaskImage:"linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)"},children:b.jsx("div",{className:"w-full h-full bg-white/60 rounded-3xl"})})]})})},_M=({scrollProgress:s,onBackToShore:e,onShowToast:n})=>{const[r,a]=ot.useState(!1),c="ashfanansari19@gmail.com",f=()=>{navigator.clipboard.writeText(c),a(!0),n("Email copied to clipboard · Looking forward to building"),setTimeout(()=>a(!1),3e3)},d=s;if(d<.885)return null;const p=yt(d,.885,.945),m=yt(d,.89,.94),_=yt(d,.9,.95),x=yt(d,.905,.955),y=yt(d,.915,.96),S=yt(d,.925,.97),T=yt(d,.935,.975),R=yt(d,.945,.985);return b.jsxs("section",{id:"contact",className:"fixed inset-0 pointer-events-auto flex flex-col justify-between items-center py-20 px-6 z-20 text-white select-none overflow-hidden",style:{opacity:p},children:[b.jsxs("div",{className:"w-full max-w-5xl mx-auto flex justify-between items-center pt-4",style:rn(m,12),children:[b.jsxs("div",{className:"flex items-center space-x-2",children:[b.jsx("span",{className:"w-2 h-2 rounded-full bg-[#F5B81E] animate-pulse"}),b.jsx("span",{className:"font-mono text-xs uppercase tracking-[0.22em] text-[#F5B81E]",children:"05 / The Far Shore"})]}),b.jsx("button",{onClick:e,className:"text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors flex items-center space-x-1",children:b.jsx("span",{children:"↑ Return to Shore"})})]}),b.jsxs("div",{className:"w-full max-w-3xl mx-auto text-center my-auto space-y-6",children:[b.jsx("span",{className:"font-mono text-[11px] uppercase tracking-[0.25em] text-[#F5B81E] block",style:rn(_,10),children:"Arrival · Night Water"}),b.jsx("h2",{className:"font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight bg-gradient-to-r from-[#FDE68A] to-[#FFF3C4] bg-clip-text text-transparent leading-[1.08]",style:rn(x,20),children:"Build with Ashfan."}),b.jsx("p",{className:"max-w-xl mx-auto text-sm sm:text-base text-white/70 font-sans font-light leading-relaxed",style:rn(y,14),children:"Open for select website commissions, motion direction, and interactive product collaborations. Reach out directly or copy the address below."}),b.jsxs("div",{className:"pt-4 flex flex-col sm:flex-row items-center justify-center gap-4",style:rn(S,14),children:[b.jsxs("button",{onClick:f,className:"group px-8 py-4 rounded-full bg-gradient-to-r from-[#F5B81E] to-[#FDE68A] text-[#0A0A0C] font-mono text-xs uppercase tracking-[0.16em] font-semibold hover:brightness-110 active:scale-98 transition-all shadow-[0_0_30px_rgba(245,184,30,0.35)] flex items-center space-x-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white",children:[b.jsx("span",{children:c}),b.jsx("span",{className:"text-[10px] bg-[#0A0A0C]/15 px-2 py-0.5 rounded-full",children:r?"Copied ✓":"Copy"})]}),b.jsx("a",{href:`mailto:${c}`,className:"px-7 py-4 rounded-full border border-white/20 hover:border-white/50 text-white font-mono text-xs uppercase tracking-[0.16em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B81E]",children:"Open Mail Client ↗"})]}),b.jsxs("div",{className:"pt-8 flex items-center justify-center space-x-8 text-xs font-mono uppercase tracking-widest text-white/60",style:rn(T,10),children:[b.jsx("a",{href:"https://github.com/ashfanansari",target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#F5B81E] transition-colors",children:"GitHub"}),b.jsx("a",{href:"https://www.youtube.com/@Unsaid2D",target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#F5B81E] transition-colors",children:"YouTube"}),b.jsx("a",{href:"https://instagram.com/zavine.webs",target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#F5B81E] transition-colors",children:"Instagram"})]})]}),b.jsxs("div",{className:"w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-6 pb-2 text-[10px] font-mono text-white/40 tracking-wider",style:rn(R,8),children:[b.jsx("span",{children:"© 2026 Ashfan Ansari · All Rights Reserved"}),b.jsx("span",{className:"mt-2 sm:mt-0",children:"Gorakhpur, India · The Journey Portfolio"})]})]})},xM=({message:s})=>s?b.jsx("div",{className:"fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-in fade-in slide-in-from-bottom-4 duration-300",children:b.jsxs("div",{className:"px-5 py-2.5 rounded-full bg-[#1A1C1E] text-white border border-white/20 shadow-2xl flex items-center space-x-2.5 text-xs font-mono tracking-wider backdrop-blur-md",children:[b.jsx("span",{className:"w-2 h-2 rounded-full bg-[#F5B81E] animate-pulse"}),b.jsx("span",{children:s})]})}):null,yM=()=>{const s=()=>{if(typeof window<"u"){const g=new URLSearchParams(window.location.search).get("scroll");if(g)return Math.min(1,Math.max(0,parseFloat(g)))}return 0},[e,n]=ot.useState(s),[r,a]=ot.useState(0),[c,f]=ot.useState(null),[d,p]=ot.useState(null),[m,_]=ot.useState(!1),[x,y]=ot.useState(null),S=ot.useRef(null);ot.useEffect(()=>{const k=J=>{const D=Math.min(1,Math.max(0,J));return D*D*D*(D*(D*6-15)+10)},N=J=>{if(J<=0)return 0;if(J>=.34)return J;const D=J/.34,ie=1-k(D);return J-.238*D*ie*ie},V=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let le,E=s(),A=E,ne=0,Z=A,oe=0,de=0,re=performance.now();const ce=()=>{const J=window.scrollY,D=document.documentElement.scrollHeight-window.innerHeight;D>0&&(E=Math.min(1,Math.max(0,J/D)))},z=J=>{const D=N(E),ie=D-A,Pe=Math.max(-.12,Math.min(.12,ie*7));ne+=(Pe-ne)*(1-Math.exp(-J/.16)),A+=ne*J,(ie>0&&A>D||ie<0&&A<D)&&(A=D,ne=0),Math.abs(D-A)<4e-4&&Math.abs(ne)<.002&&(A=D,ne=0)},fe=J=>{let D=(J-re)/1e3;re=J,D=Math.min(Math.max(D,0),.25);const ie=Math.max(1,Math.ceil(D/(1/60))),Pe=D/ie;for(let Ae=0;Ae<ie;Ae++)z(Pe);const K=N(E),ue=Math.abs(K-A)<4e-4&&Math.abs(ne)<.002;let _e=0;if(!V&&!ue&&E>A){const Ae=1-jr(A,.1,.16);_e=Math.min(1,(E-A)/.045)*Ae}oe+=(_e-oe)*(1-Math.exp(-D/.12)),_e===0&&oe<.002&&(oe=0);const Se=window;Se.__journeyProgress=A,Se.__journeyTarget=E,Se.__journeyStrain=oe,Math.abs(A-Z)>1e-4&&(Z=A,n(A)),Math.abs(oe-de)>.003&&(de=oe,a(oe)),le=requestAnimationFrame(fe)};return window.addEventListener("scroll",ce,{passive:!0}),E>0?setTimeout(()=>{const J=document.documentElement.scrollHeight-window.innerHeight;window.scrollTo(0,E*J)},50):ce(),le=requestAnimationFrame(fe),()=>{window.removeEventListener("scroll",ce),cancelAnimationFrame(le)}},[]);const T=ot.useCallback(v=>{y(v),setTimeout(()=>{y(null)},3500)},[]),R=v=>{const g=document.documentElement.scrollHeight-window.innerHeight;let I=0;v==="hero"?I=0:v==="projects"?I=.32*g:v==="channels"?I=.58*g:v==="services"?I=.74*g:v==="about"?I=.86*g:v==="contact"&&(I=.96*g),window.scrollTo({top:I,behavior:"smooth"})};return b.jsxs("div",{ref:S,className:"relative min-h-[1150vh] w-full selection:bg-[#F5B81E] selection:text-[#1A1C1E]",children:[b.jsx(QE,{scrollProgress:e,activeProjectTint:c,strain:r}),b.jsx(JE,{onNavigate:R,scrollProgress:e}),b.jsx(tM,{scrollProgress:e}),b.jsx(cM,{onExploreWork:()=>R("projects"),scrollProgress:e,strain:r}),b.jsx(uM,{scrollProgress:e,onSelectProject:v=>p(v),onActiveProjectChange:v=>f(v),onToggleFullIndex:()=>_(!0),isFullIndexOpen:m}),b.jsx(pM,{scrollProgress:e}),b.jsx(gM,{scrollProgress:e}),b.jsx(vM,{scrollProgress:e}),b.jsx(_M,{scrollProgress:e,onBackToShore:()=>R("hero"),onShowToast:T}),b.jsx(fM,{project:d,onClose:()=>p(null)}),b.jsx(dM,{isOpen:m,onClose:()=>_(!1),onSelectProject:v=>p(v)}),b.jsx(xM,{message:x})]})};W0.createRoot(document.getElementById("root")).render(b.jsx(k0.StrictMode,{children:b.jsx(yM,{})}));
