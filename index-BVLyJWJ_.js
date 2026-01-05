function e0(r,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in r)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(r,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function mv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var dd={exports:{}},Fa={},fd={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg;function t0(){if(mg)return Ae;mg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),T=Symbol.iterator;function I(b){return b===null||typeof b!="object"?null:(b=T&&b[T]||b["@@iterator"],typeof b=="function"?b:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,H={};function F(b,q,fe){this.props=b,this.context=q,this.refs=H,this.updater=fe||j}F.prototype.isReactComponent={},F.prototype.setState=function(b,q){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,q,"setState")},F.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function le(){}le.prototype=F.prototype;function ie(b,q,fe){this.props=b,this.context=q,this.refs=H,this.updater=fe||j}var ne=ie.prototype=new le;ne.constructor=ie,$(ne,F.prototype),ne.isPureReactComponent=!0;var ce=Array.isArray,Ce=Object.prototype.hasOwnProperty,Te={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function R(b,q,fe){var Ie,Se={},xe=null,Me=null;if(q!=null)for(Ie in q.ref!==void 0&&(Me=q.ref),q.key!==void 0&&(xe=""+q.key),q)Ce.call(q,Ie)&&!D.hasOwnProperty(Ie)&&(Se[Ie]=q[Ie]);var Fe=arguments.length-2;if(Fe===1)Se.children=fe;else if(1<Fe){for(var Be=Array(Fe),_t=0;_t<Fe;_t++)Be[_t]=arguments[_t+2];Se.children=Be}if(b&&b.defaultProps)for(Ie in Fe=b.defaultProps,Fe)Se[Ie]===void 0&&(Se[Ie]=Fe[Ie]);return{$$typeof:r,type:b,key:xe,ref:Me,props:Se,_owner:Te.current}}function P(b,q){return{$$typeof:r,type:b.type,key:q,ref:b.ref,props:b.props,_owner:b._owner}}function x(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function O(b){var q={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(fe){return q[fe]})}var V=/\/+/g;function C(b,q){return typeof b=="object"&&b!==null&&b.key!=null?O(""+b.key):q.toString(36)}function tt(b,q,fe,Ie,Se){var xe=typeof b;(xe==="undefined"||xe==="boolean")&&(b=null);var Me=!1;if(b===null)Me=!0;else switch(xe){case"string":case"number":Me=!0;break;case"object":switch(b.$$typeof){case r:case e:Me=!0}}if(Me)return Me=b,Se=Se(Me),b=Ie===""?"."+C(Me,0):Ie,ce(Se)?(fe="",b!=null&&(fe=b.replace(V,"$&/")+"/"),tt(Se,q,fe,"",function(_t){return _t})):Se!=null&&(x(Se)&&(Se=P(Se,fe+(!Se.key||Me&&Me.key===Se.key?"":(""+Se.key).replace(V,"$&/")+"/")+b)),q.push(Se)),1;if(Me=0,Ie=Ie===""?".":Ie+":",ce(b))for(var Fe=0;Fe<b.length;Fe++){xe=b[Fe];var Be=Ie+C(xe,Fe);Me+=tt(xe,q,fe,Be,Se)}else if(Be=I(b),typeof Be=="function")for(b=Be.call(b),Fe=0;!(xe=b.next()).done;)xe=xe.value,Be=Ie+C(xe,Fe++),Me+=tt(xe,q,fe,Be,Se);else if(xe==="object")throw q=String(b),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Me}function Nt(b,q,fe){if(b==null)return b;var Ie=[],Se=0;return tt(b,Ie,"","",function(xe){return q.call(fe,xe,Se++)}),Ie}function Dt(b){if(b._status===-1){var q=b._result;q=q(),q.then(function(fe){(b._status===0||b._status===-1)&&(b._status=1,b._result=fe)},function(fe){(b._status===0||b._status===-1)&&(b._status=2,b._result=fe)}),b._status===-1&&(b._status=0,b._result=q)}if(b._status===1)return b._result.default;throw b._result}var je={current:null},ee={transition:null},me={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Te};function se(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:Nt,forEach:function(b,q,fe){Nt(b,function(){q.apply(this,arguments)},fe)},count:function(b){var q=0;return Nt(b,function(){q++}),q},toArray:function(b){return Nt(b,function(q){return q})||[]},only:function(b){if(!x(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},Ae.Component=F,Ae.Fragment=t,Ae.Profiler=o,Ae.PureComponent=ie,Ae.StrictMode=s,Ae.Suspense=m,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Ae.act=se,Ae.cloneElement=function(b,q,fe){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var Ie=$({},b.props),Se=b.key,xe=b.ref,Me=b._owner;if(q!=null){if(q.ref!==void 0&&(xe=q.ref,Me=Te.current),q.key!==void 0&&(Se=""+q.key),b.type&&b.type.defaultProps)var Fe=b.type.defaultProps;for(Be in q)Ce.call(q,Be)&&!D.hasOwnProperty(Be)&&(Ie[Be]=q[Be]===void 0&&Fe!==void 0?Fe[Be]:q[Be])}var Be=arguments.length-2;if(Be===1)Ie.children=fe;else if(1<Be){Fe=Array(Be);for(var _t=0;_t<Be;_t++)Fe[_t]=arguments[_t+2];Ie.children=Fe}return{$$typeof:r,type:b.type,key:Se,ref:xe,props:Ie,_owner:Me}},Ae.createContext=function(b){return b={$$typeof:h,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:l,_context:b},b.Consumer=b},Ae.createElement=R,Ae.createFactory=function(b){var q=R.bind(null,b);return q.type=b,q},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(b){return{$$typeof:f,render:b}},Ae.isValidElement=x,Ae.lazy=function(b){return{$$typeof:_,_payload:{_status:-1,_result:b},_init:Dt}},Ae.memo=function(b,q){return{$$typeof:v,type:b,compare:q===void 0?null:q}},Ae.startTransition=function(b){var q=ee.transition;ee.transition={};try{b()}finally{ee.transition=q}},Ae.unstable_act=se,Ae.useCallback=function(b,q){return je.current.useCallback(b,q)},Ae.useContext=function(b){return je.current.useContext(b)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(b){return je.current.useDeferredValue(b)},Ae.useEffect=function(b,q){return je.current.useEffect(b,q)},Ae.useId=function(){return je.current.useId()},Ae.useImperativeHandle=function(b,q,fe){return je.current.useImperativeHandle(b,q,fe)},Ae.useInsertionEffect=function(b,q){return je.current.useInsertionEffect(b,q)},Ae.useLayoutEffect=function(b,q){return je.current.useLayoutEffect(b,q)},Ae.useMemo=function(b,q){return je.current.useMemo(b,q)},Ae.useReducer=function(b,q,fe){return je.current.useReducer(b,q,fe)},Ae.useRef=function(b){return je.current.useRef(b)},Ae.useState=function(b){return je.current.useState(b)},Ae.useSyncExternalStore=function(b,q,fe){return je.current.useSyncExternalStore(b,q,fe)},Ae.useTransition=function(){return je.current.useTransition()},Ae.version="18.3.1",Ae}var gg;function lf(){return gg||(gg=1,fd.exports=t0()),fd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function n0(){if(yg)return Fa;yg=1;var r=lf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,m,v){var _,T={},I=null,j=null;v!==void 0&&(I=""+v),m.key!==void 0&&(I=""+m.key),m.ref!==void 0&&(j=m.ref);for(_ in m)s.call(m,_)&&!l.hasOwnProperty(_)&&(T[_]=m[_]);if(f&&f.defaultProps)for(_ in m=f.defaultProps,m)T[_]===void 0&&(T[_]=m[_]);return{$$typeof:e,type:f,key:I,ref:j,props:T,_owner:o.current}}return Fa.Fragment=t,Fa.jsx=h,Fa.jsxs=h,Fa}var vg;function r0(){return vg||(vg=1,dd.exports=n0()),dd.exports}var S=r0(),K=lf();const gv=mv(K),i0=e0({__proto__:null,default:gv},[K]);var Vu={},pd={exports:{}},en={},md={exports:{}},gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function s0(){return _g||(_g=1,(function(r){function e(ee,me){var se=ee.length;ee.push(me);e:for(;0<se;){var b=se-1>>>1,q=ee[b];if(0<o(q,me))ee[b]=me,ee[se]=q,se=b;else break e}}function t(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var me=ee[0],se=ee.pop();if(se!==me){ee[0]=se;e:for(var b=0,q=ee.length,fe=q>>>1;b<fe;){var Ie=2*(b+1)-1,Se=ee[Ie],xe=Ie+1,Me=ee[xe];if(0>o(Se,se))xe<q&&0>o(Me,Se)?(ee[b]=Me,ee[xe]=se,b=xe):(ee[b]=Se,ee[Ie]=se,b=Ie);else if(xe<q&&0>o(Me,se))ee[b]=Me,ee[xe]=se,b=xe;else break e}}return me}function o(ee,me){var se=ee.sortIndex-me.sortIndex;return se!==0?se:ee.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var m=[],v=[],_=1,T=null,I=3,j=!1,$=!1,H=!1,F=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(ee){for(var me=t(v);me!==null;){if(me.callback===null)s(v);else if(me.startTime<=ee)s(v),me.sortIndex=me.expirationTime,e(m,me);else break;me=t(v)}}function ce(ee){if(H=!1,ne(ee),!$)if(t(m)!==null)$=!0,Dt(Ce);else{var me=t(v);me!==null&&je(ce,me.startTime-ee)}}function Ce(ee,me){$=!1,H&&(H=!1,le(R),R=-1),j=!0;var se=I;try{for(ne(me),T=t(m);T!==null&&(!(T.expirationTime>me)||ee&&!O());){var b=T.callback;if(typeof b=="function"){T.callback=null,I=T.priorityLevel;var q=b(T.expirationTime<=me);me=r.unstable_now(),typeof q=="function"?T.callback=q:T===t(m)&&s(m),ne(me)}else s(m);T=t(m)}if(T!==null)var fe=!0;else{var Ie=t(v);Ie!==null&&je(ce,Ie.startTime-me),fe=!1}return fe}finally{T=null,I=se,j=!1}}var Te=!1,D=null,R=-1,P=5,x=-1;function O(){return!(r.unstable_now()-x<P)}function V(){if(D!==null){var ee=r.unstable_now();x=ee;var me=!0;try{me=D(!0,ee)}finally{me?C():(Te=!1,D=null)}}else Te=!1}var C;if(typeof ie=="function")C=function(){ie(V)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,Nt=tt.port2;tt.port1.onmessage=V,C=function(){Nt.postMessage(null)}}else C=function(){F(V,0)};function Dt(ee){D=ee,Te||(Te=!0,C())}function je(ee,me){R=F(function(){ee(r.unstable_now())},me)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){$||j||($=!0,Dt(Ce))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return I},r.unstable_getFirstCallbackNode=function(){return t(m)},r.unstable_next=function(ee){switch(I){case 1:case 2:case 3:var me=3;break;default:me=I}var se=I;I=me;try{return ee()}finally{I=se}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,me){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var se=I;I=ee;try{return me()}finally{I=se}},r.unstable_scheduleCallback=function(ee,me,se){var b=r.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?b+se:b):se=b,ee){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=se+q,ee={id:_++,callback:me,priorityLevel:ee,startTime:se,expirationTime:q,sortIndex:-1},se>b?(ee.sortIndex=se,e(v,ee),t(m)===null&&ee===t(v)&&(H?(le(R),R=-1):H=!0,je(ce,se-b))):(ee.sortIndex=q,e(m,ee),$||j||($=!0,Dt(Ce))),ee},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(ee){var me=I;return function(){var se=I;I=me;try{return ee.apply(this,arguments)}finally{I=se}}}})(gd)),gd}var wg;function o0(){return wg||(wg=1,md.exports=s0()),md.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg;function a0(){if(Eg)return en;Eg=1;var r=lf(),e=o0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},T={};function I(n){return m.call(T,n)?!0:m.call(_,n)?!1:v.test(n)?T[n]=!0:(_[n]=!0,!1)}function j(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function $(n,i,a,c){if(i===null||typeof i>"u"||j(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function H(n,i,a,c,d,g,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=w}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){F[n]=new H(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];F[i]=new H(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){F[n]=new H(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){F[n]=new H(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){F[n]=new H(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){F[n]=new H(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){F[n]=new H(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){F[n]=new H(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){F[n]=new H(n,5,!1,n.toLowerCase(),null,!1,!1)});var le=/[\-:]([a-z])/g;function ie(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(le,ie);F[i]=new H(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(le,ie);F[i]=new H(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(le,ie);F[i]=new H(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){F[n]=new H(n,1,!1,n.toLowerCase(),null,!1,!1)}),F.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){F[n]=new H(n,1,!1,n.toLowerCase(),null,!0,!0)});function ne(n,i,a,c){var d=F.hasOwnProperty(i)?F[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&($(i,a,d,c)&&(a=null),c||d===null?I(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var ce=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ce=Symbol.for("react.element"),Te=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),O=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),Nt=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),ee=Symbol.iterator;function me(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,b;function q(n){if(b===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);b=i&&i[1]||""}return`
`+b+n}var fe=!1;function Ie(n,i){if(!n||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(z){var c=z}Reflect.construct(n,[],i)}else{try{i.call()}catch(z){c=z}n.call(i.prototype)}else{try{throw Error()}catch(z){c=z}n()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var d=z.stack.split(`
`),g=c.stack.split(`
`),w=d.length-1,A=g.length-1;1<=w&&0<=A&&d[w]!==g[A];)A--;for(;1<=w&&0<=A;w--,A--)if(d[w]!==g[A]){if(w!==1||A!==1)do if(w--,A--,0>A||d[w]!==g[A]){var k=`
`+d[w].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=w&&0<=A);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function Se(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function xe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case Te:return"Portal";case P:return"Profiler";case R:return"StrictMode";case C:return"Suspense";case tt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case x:return(n._context.displayName||"Context")+".Provider";case V:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Nt:return i=n.displayName||null,i!==null?i:xe(n.type)||"Memo";case Dt:i=n._payload,n=n._init;try{return xe(n(i))}catch{}}return null}function Me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function _t(n){var i=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){c=""+w,g.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function hr(n){n._valueTracker||(n._valueTracker=_t(n))}function Ts(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Vr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function bi(n,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Is(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Fe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ho(n,i){i=i.checked,i!=null&&ne(n,"checked",i,!1)}function qo(n,i){Ho(n,i);var a=Fe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ss(n,i.type,a):i.hasOwnProperty("defaultValue")&&Ss(n,i.type,Fe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function wl(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ss(n,i,a){(i!=="number"||Vr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var dr=Array.isArray;function fr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Fe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Wo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function As(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(dr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Fe(a)}}function Rs(n,i){var a=Fe(i.value),c=Fe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Go(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function dt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ft(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?dt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var pr,Ko=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(pr=pr||document.createElement("div"),pr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=pr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Lr(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Vi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Li=["Webkit","ms","Moz","O"];Object.keys(Vi).forEach(function(n){Li.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Vi[i]=Vi[n]})});function Qo(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Vi.hasOwnProperty(n)&&Vi[n]?(""+i).trim():i+"px"}function Yo(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Qo(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Jo=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xo(n,i){if(i){if(Jo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Zo(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mi=null;function Cs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ps=null,cn=null,zn=null;function ks(n){if(n=Ia(n)){if(typeof Ps!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Yl(i),Ps(n.stateNode,n.type,i))}}function Bn(n){cn?zn?zn.push(n):zn=[n]:cn=n}function ea(){if(cn){var n=cn,i=zn;if(zn=cn=null,ks(n),i)for(n=0;n<i.length;n++)ks(i[n])}}function Fi(n,i){return n(i)}function ta(){}var mr=!1;function na(n,i,a){if(mr)return n(i,a);mr=!0;try{return Fi(n,i,a)}finally{mr=!1,(cn!==null||zn!==null)&&(ta(),ea())}}function nt(n,i){var a=n.stateNode;if(a===null)return null;var c=Yl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var xs=!1;if(f)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){xs=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{xs=!1}function Ui(n,i,a,c,d,g,w,A,k){var z=Array.prototype.slice.call(arguments,3);try{i.apply(a,z)}catch(Q){this.onError(Q)}}var ji=!1,Ns=null,In=!1,ra=null,jc={onError:function(n){ji=!0,Ns=n}};function Ds(n,i,a,c,d,g,w,A,k){ji=!1,Ns=null,Ui.apply(jc,arguments)}function El(n,i,a,c,d,g,w,A,k){if(Ds.apply(this,arguments),ji){if(ji){var z=Ns;ji=!1,Ns=null}else throw Error(t(198));In||(In=!0,ra=z)}}function Sn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function zi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function An(n){if(Sn(n)!==n)throw Error(t(188))}function Tl(n){var i=n.alternate;if(!i){if(i=Sn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return An(d),n;if(g===c)return An(d),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var w=!1,A=d.child;A;){if(A===a){w=!0,a=d,c=g;break}if(A===c){w=!0,c=d,a=g;break}A=A.sibling}if(!w){for(A=g.child;A;){if(A===a){w=!0,a=g,c=d;break}if(A===c){w=!0,c=g,a=d;break}A=A.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ia(n){return n=Tl(n),n!==null?Os(n):null}function Os(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Os(n);if(i!==null)return i;n=n.sibling}return null}var bs=e.unstable_scheduleCallback,sa=e.unstable_cancelCallback,Il=e.unstable_shouldYield,zc=e.unstable_requestPaint,$e=e.unstable_now,Sl=e.unstable_getCurrentPriorityLevel,Bi=e.unstable_ImmediatePriority,Mr=e.unstable_UserBlockingPriority,hn=e.unstable_NormalPriority,oa=e.unstable_LowPriority,Al=e.unstable_IdlePriority,$i=null,nn=null;function Rl(n){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot($i,n,void 0,(n.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:Pl,aa=Math.log,Cl=Math.LN2;function Pl(n){return n>>>=0,n===0?32:31-(aa(n)/Cl|0)|0}var Vs=64,Ls=4194304;function Fr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Hi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,g=n.pingedLanes,w=a&268435455;if(w!==0){var A=w&~d;A!==0?c=Fr(A):(g&=w,g!==0&&(c=Fr(g)))}else w=a&~d,w!==0?c=Fr(w):g!==0&&(c=Fr(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Bt(i),d=1<<a,c|=n[a],i&=~d;return c}function Bc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var w=31-Bt(g),A=1<<w,k=d[w];k===-1?((A&a)===0||(A&c)!==0)&&(d[w]=Bc(A,i)):k<=i&&(n.expiredLanes|=A),g&=~A}}function rn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function qi(){var n=Vs;return Vs<<=1,(Vs&4194240)===0&&(Vs=64),n}function Ur(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function jr(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Bt(i),n[i]=a}function ze(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Bt(a),g=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~g}}function zr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Bt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var ke=0;function Br(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var kl,Ms,xl,Nl,Dl,la=!1,$n=[],At=null,Rn=null,Cn=null,$r=new Map,dn=new Map,Hn=[],$c="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ol(n,i){switch(n){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":$r.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":dn.delete(i.pointerId)}}function Gt(n,i,a,c,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},i!==null&&(i=Ia(i),i!==null&&Ms(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Hc(n,i,a,c,d){switch(i){case"focusin":return At=Gt(At,n,i,a,c,d),!0;case"dragenter":return Rn=Gt(Rn,n,i,a,c,d),!0;case"mouseover":return Cn=Gt(Cn,n,i,a,c,d),!0;case"pointerover":var g=d.pointerId;return $r.set(g,Gt($r.get(g)||null,n,i,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,dn.set(g,Gt(dn.get(g)||null,n,i,a,c,d)),!0}return!1}function bl(n){var i=Yi(n.target);if(i!==null){var a=Sn(i);if(a!==null){if(i=a.tag,i===13){if(i=zi(a),i!==null){n.blockedOn=i,Dl(n.priority,function(){xl(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function yr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Fs(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Mi=c,a.target.dispatchEvent(c),Mi=null}else return i=Ia(a),i!==null&&Ms(i),n.blockedOn=a,!1;i.shift()}return!0}function Wi(n,i,a){yr(n)&&a.delete(i)}function Vl(){la=!1,At!==null&&yr(At)&&(At=null),Rn!==null&&yr(Rn)&&(Rn=null),Cn!==null&&yr(Cn)&&(Cn=null),$r.forEach(Wi),dn.forEach(Wi)}function Pn(n,i){n.blockedOn===i&&(n.blockedOn=null,la||(la=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Vl)))}function kn(n){function i(d){return Pn(d,n)}if(0<$n.length){Pn($n[0],n);for(var a=1;a<$n.length;a++){var c=$n[a];c.blockedOn===n&&(c.blockedOn=null)}}for(At!==null&&Pn(At,n),Rn!==null&&Pn(Rn,n),Cn!==null&&Pn(Cn,n),$r.forEach(i),dn.forEach(i),a=0;a<Hn.length;a++)c=Hn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Hn.length&&(a=Hn[0],a.blockedOn===null);)bl(a),a.blockedOn===null&&Hn.shift()}var vr=ce.ReactCurrentBatchConfig,Hr=!0;function Ke(n,i,a,c){var d=ke,g=vr.transition;vr.transition=null;try{ke=1,ua(n,i,a,c)}finally{ke=d,vr.transition=g}}function qc(n,i,a,c){var d=ke,g=vr.transition;vr.transition=null;try{ke=4,ua(n,i,a,c)}finally{ke=d,vr.transition=g}}function ua(n,i,a,c){if(Hr){var d=Fs(n,i,a,c);if(d===null)nh(n,i,c,Gi,a),Ol(n,c);else if(Hc(d,n,i,a,c))c.stopPropagation();else if(Ol(n,c),i&4&&-1<$c.indexOf(n)){for(;d!==null;){var g=Ia(d);if(g!==null&&kl(g),g=Fs(n,i,a,c),g===null&&nh(n,i,c,Gi,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else nh(n,i,c,null,a)}}var Gi=null;function Fs(n,i,a,c){if(Gi=null,n=Cs(c),n=Yi(n),n!==null)if(i=Sn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=zi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Gi=n,null}function ca(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sl()){case Bi:return 1;case Mr:return 4;case hn:case oa:return 16;case Al:return 536870912;default:return 16}default:return 16}}var sn=null,Us=null,Kt=null;function ha(){if(Kt)return Kt;var n,i=Us,a=i.length,c,d="value"in sn?sn.value:sn.textContent,g=d.length;for(n=0;n<a&&i[n]===d[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===d[g-c];c++);return Kt=d.slice(n,1<c?1-c:void 0)}function js(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function qn(){return!0}function da(){return!1}function Rt(n){function i(a,c,d,g,w){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(a=n[A],this[A]=a?a(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?qn:da,this.isPropagationStopped=da,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),i}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zs=Rt(xn),Wn=se({},xn,{view:0,detail:0}),Wc=Rt(Wn),Bs,_r,qr,Ki=se({},Wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==qr&&(qr&&n.type==="mousemove"?(Bs=n.screenX-qr.screenX,_r=n.screenY-qr.screenY):_r=Bs=0,qr=n),Bs)},movementY:function(n){return"movementY"in n?n.movementY:_r}}),$s=Rt(Ki),fa=se({},Ki,{dataTransfer:0}),Ll=Rt(fa),Hs=se({},Wn,{relatedTarget:0}),qs=Rt(Hs),Ml=se({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),wr=Rt(Ml),Fl=se({},xn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ul=Rt(Fl),jl=se({},xn,{data:0}),pa=Rt(jl),Ws={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=zl[n])?!!i[n]:!1}function Gn(){return Bl}var u=se({},Wn,{key:function(n){if(n.key){var i=Ws[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=js(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$t[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(n){return n.type==="keypress"?js(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?js(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=Rt(u),y=se({},Ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Rt(y),L=se({},Wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn}),B=Rt(L),Z=se({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ue=Rt(Z),pt=se({},Ki,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ne=Rt(pt),wt=[9,13,27,32],at=f&&"CompositionEvent"in window,fn=null;f&&"documentMode"in document&&(fn=document.documentMode);var on=f&&"TextEvent"in window&&!fn,Qi=f&&(!at||fn&&8<fn&&11>=fn),Gs=" ",up=!1;function cp(n,i){switch(n){case"keyup":return wt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ks=!1;function Jw(n,i){switch(n){case"compositionend":return hp(i);case"keypress":return i.which!==32?null:(up=!0,Gs);case"textInput":return n=i.data,n===Gs&&up?null:n;default:return null}}function Xw(n,i){if(Ks)return n==="compositionend"||!at&&cp(n,i)?(n=ha(),Kt=Us=sn=null,Ks=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Qi&&i.locale!=="ko"?null:i.data;default:return null}}var Zw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Zw[n.type]:i==="textarea"}function fp(n,i,a,c){Bn(c),i=Gl(i,"onChange"),0<i.length&&(a=new zs("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ma=null,ga=null;function eE(n){Np(n,0)}function $l(n){var i=Zs(n);if(Ts(i))return n}function tE(n,i){if(n==="change")return i}var pp=!1;if(f){var Gc;if(f){var Kc="oninput"in document;if(!Kc){var mp=document.createElement("div");mp.setAttribute("oninput","return;"),Kc=typeof mp.oninput=="function"}Gc=Kc}else Gc=!1;pp=Gc&&(!document.documentMode||9<document.documentMode)}function gp(){ma&&(ma.detachEvent("onpropertychange",yp),ga=ma=null)}function yp(n){if(n.propertyName==="value"&&$l(ga)){var i=[];fp(i,ga,n,Cs(n)),na(eE,i)}}function nE(n,i,a){n==="focusin"?(gp(),ma=i,ga=a,ma.attachEvent("onpropertychange",yp)):n==="focusout"&&gp()}function rE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return $l(ga)}function iE(n,i){if(n==="click")return $l(i)}function sE(n,i){if(n==="input"||n==="change")return $l(i)}function oE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Nn=typeof Object.is=="function"?Object.is:oE;function ya(n,i){if(Nn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!m.call(i,d)||!Nn(n[d],i[d]))return!1}return!0}function vp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function _p(n,i){var a=vp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vp(a)}}function wp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?wp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Ep(){for(var n=window,i=Vr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Vr(n.document)}return i}function Qc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function aE(n){var i=Ep(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&wp(a.ownerDocument.documentElement,a)){if(c!==null&&Qc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!n.extend&&g>c&&(d=c,c=g,g=d),d=_p(a,g);var w=_p(a,c);d&&w&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var lE=f&&"documentMode"in document&&11>=document.documentMode,Qs=null,Yc=null,va=null,Jc=!1;function Tp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Jc||Qs==null||Qs!==Vr(c)||(c=Qs,"selectionStart"in c&&Qc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),va&&ya(va,c)||(va=c,c=Gl(Yc,"onSelect"),0<c.length&&(i=new zs("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Qs)))}function Hl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ys={animationend:Hl("Animation","AnimationEnd"),animationiteration:Hl("Animation","AnimationIteration"),animationstart:Hl("Animation","AnimationStart"),transitionend:Hl("Transition","TransitionEnd")},Xc={},Ip={};f&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function ql(n){if(Xc[n])return Xc[n];if(!Ys[n])return n;var i=Ys[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Ip)return Xc[n]=i[a];return n}var Sp=ql("animationend"),Ap=ql("animationiteration"),Rp=ql("animationstart"),Cp=ql("transitionend"),Pp=new Map,kp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(n,i){Pp.set(n,i),l(i,[n])}for(var Zc=0;Zc<kp.length;Zc++){var eh=kp[Zc],uE=eh.toLowerCase(),cE=eh[0].toUpperCase()+eh.slice(1);Wr(uE,"on"+cE)}Wr(Sp,"onAnimationEnd"),Wr(Ap,"onAnimationIteration"),Wr(Rp,"onAnimationStart"),Wr("dblclick","onDoubleClick"),Wr("focusin","onFocus"),Wr("focusout","onBlur"),Wr(Cp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hE=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function xp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,El(c,i,void 0,n),n.currentTarget=null}function Np(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var w=c.length-1;0<=w;w--){var A=c[w],k=A.instance,z=A.currentTarget;if(A=A.listener,k!==g&&d.isPropagationStopped())break e;xp(d,A,z),g=k}else for(w=0;w<c.length;w++){if(A=c[w],k=A.instance,z=A.currentTarget,A=A.listener,k!==g&&d.isPropagationStopped())break e;xp(d,A,z),g=k}}}if(In)throw n=ra,In=!1,ra=null,n}function We(n,i){var a=i[lh];a===void 0&&(a=i[lh]=new Set);var c=n+"__bubble";a.has(c)||(Dp(i,n,2,!1),a.add(c))}function th(n,i,a){var c=0;i&&(c|=4),Dp(a,n,c,i)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function wa(n){if(!n[Wl]){n[Wl]=!0,s.forEach(function(a){a!=="selectionchange"&&(hE.has(a)||th(a,!1,n),th(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Wl]||(i[Wl]=!0,th("selectionchange",!1,i))}}function Dp(n,i,a,c){switch(ca(i)){case 1:var d=Ke;break;case 4:d=qc;break;default:d=ua}a=d.bind(null,i,a,n),d=void 0,!xs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function nh(n,i,a,c,d){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var A=c.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(w===4)for(w=c.return;w!==null;){var k=w.tag;if((k===3||k===4)&&(k=w.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;w=w.return}for(;A!==null;){if(w=Yi(A),w===null)return;if(k=w.tag,k===5||k===6){c=g=w;continue e}A=A.parentNode}}c=c.return}na(function(){var z=g,Q=Cs(a),J=[];e:{var G=Pp.get(n);if(G!==void 0){var re=zs,ue=n;switch(n){case"keypress":if(js(a)===0)break e;case"keydown":case"keyup":re=p;break;case"focusin":ue="focus",re=qs;break;case"focusout":ue="blur",re=qs;break;case"beforeblur":case"afterblur":re=qs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=$s;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Ll;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=B;break;case Sp:case Ap:case Rp:re=wr;break;case Cp:re=Ue;break;case"scroll":re=Wc;break;case"wheel":re=Ne;break;case"copy":case"cut":case"paste":re=Ul;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=E}var he=(i&4)!==0,rt=!he&&n==="scroll",M=he?G!==null?G+"Capture":null:G;he=[];for(var N=z,U;N!==null;){U=N;var X=U.stateNode;if(U.tag===5&&X!==null&&(U=X,M!==null&&(X=nt(N,M),X!=null&&he.push(Ea(N,X,U)))),rt)break;N=N.return}0<he.length&&(G=new re(G,ue,null,a,Q),J.push({event:G,listeners:he}))}}if((i&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",re=n==="mouseout"||n==="pointerout",G&&a!==Mi&&(ue=a.relatedTarget||a.fromElement)&&(Yi(ue)||ue[Er]))break e;if((re||G)&&(G=Q.window===Q?Q:(G=Q.ownerDocument)?G.defaultView||G.parentWindow:window,re?(ue=a.relatedTarget||a.toElement,re=z,ue=ue?Yi(ue):null,ue!==null&&(rt=Sn(ue),ue!==rt||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(re=null,ue=z),re!==ue)){if(he=$s,X="onMouseLeave",M="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(he=E,X="onPointerLeave",M="onPointerEnter",N="pointer"),rt=re==null?G:Zs(re),U=ue==null?G:Zs(ue),G=new he(X,N+"leave",re,a,Q),G.target=rt,G.relatedTarget=U,X=null,Yi(Q)===z&&(he=new he(M,N+"enter",ue,a,Q),he.target=U,he.relatedTarget=rt,X=he),rt=X,re&&ue)t:{for(he=re,M=ue,N=0,U=he;U;U=Js(U))N++;for(U=0,X=M;X;X=Js(X))U++;for(;0<N-U;)he=Js(he),N--;for(;0<U-N;)M=Js(M),U--;for(;N--;){if(he===M||M!==null&&he===M.alternate)break t;he=Js(he),M=Js(M)}he=null}else he=null;re!==null&&Op(J,G,re,he,!1),ue!==null&&rt!==null&&Op(J,rt,ue,he,!0)}}e:{if(G=z?Zs(z):window,re=G.nodeName&&G.nodeName.toLowerCase(),re==="select"||re==="input"&&G.type==="file")var de=tE;else if(dp(G))if(pp)de=sE;else{de=rE;var ge=nE}else(re=G.nodeName)&&re.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(de=iE);if(de&&(de=de(n,z))){fp(J,de,a,Q);break e}ge&&ge(n,G,z),n==="focusout"&&(ge=G._wrapperState)&&ge.controlled&&G.type==="number"&&Ss(G,"number",G.value)}switch(ge=z?Zs(z):window,n){case"focusin":(dp(ge)||ge.contentEditable==="true")&&(Qs=ge,Yc=z,va=null);break;case"focusout":va=Yc=Qs=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,Tp(J,a,Q);break;case"selectionchange":if(lE)break;case"keydown":case"keyup":Tp(J,a,Q)}var ye;if(at)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Ks?cp(n,a)&&(_e="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(Qi&&a.locale!=="ko"&&(Ks||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Ks&&(ye=ha()):(sn=Q,Us="value"in sn?sn.value:sn.textContent,Ks=!0)),ge=Gl(z,_e),0<ge.length&&(_e=new pa(_e,n,null,a,Q),J.push({event:_e,listeners:ge}),ye?_e.data=ye:(ye=hp(a),ye!==null&&(_e.data=ye)))),(ye=on?Jw(n,a):Xw(n,a))&&(z=Gl(z,"onBeforeInput"),0<z.length&&(Q=new pa("onBeforeInput","beforeinput",null,a,Q),J.push({event:Q,listeners:z}),Q.data=ye))}Np(J,i)})}function Ea(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Gl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=nt(n,a),g!=null&&c.unshift(Ea(n,g,d)),g=nt(n,i),g!=null&&c.push(Ea(n,g,d))),n=n.return}return c}function Js(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Op(n,i,a,c,d){for(var g=i._reactName,w=[];a!==null&&a!==c;){var A=a,k=A.alternate,z=A.stateNode;if(k!==null&&k===c)break;A.tag===5&&z!==null&&(A=z,d?(k=nt(a,g),k!=null&&w.unshift(Ea(a,k,A))):d||(k=nt(a,g),k!=null&&w.push(Ea(a,k,A)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var dE=/\r\n?/g,fE=/\u0000|\uFFFD/g;function bp(n){return(typeof n=="string"?n:""+n).replace(dE,`
`).replace(fE,"")}function Kl(n,i,a){if(i=bp(i),bp(n)!==i&&a)throw Error(t(425))}function Ql(){}var rh=null,ih=null;function sh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var oh=typeof setTimeout=="function"?setTimeout:void 0,pE=typeof clearTimeout=="function"?clearTimeout:void 0,Vp=typeof Promise=="function"?Promise:void 0,mE=typeof queueMicrotask=="function"?queueMicrotask:typeof Vp<"u"?function(n){return Vp.resolve(null).then(n).catch(gE)}:oh;function gE(n){setTimeout(function(){throw n})}function ah(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),kn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);kn(i)}function Gr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Lp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),Kn="__reactFiber$"+Xs,Ta="__reactProps$"+Xs,Er="__reactContainer$"+Xs,lh="__reactEvents$"+Xs,yE="__reactListeners$"+Xs,vE="__reactHandles$"+Xs;function Yi(n){var i=n[Kn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Er]||a[Kn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Lp(n);n!==null;){if(a=n[Kn])return a;n=Lp(n)}return i}n=a,a=n.parentNode}return null}function Ia(n){return n=n[Kn]||n[Er],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Zs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Yl(n){return n[Ta]||null}var uh=[],eo=-1;function Kr(n){return{current:n}}function Ge(n){0>eo||(n.current=uh[eo],uh[eo]=null,eo--)}function He(n,i){eo++,uh[eo]=n.current,n.current=i}var Qr={},Ot=Kr(Qr),Qt=Kr(!1),Ji=Qr;function to(n,i){var a=n.type.contextTypes;if(!a)return Qr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Yt(n){return n=n.childContextTypes,n!=null}function Jl(){Ge(Qt),Ge(Ot)}function Mp(n,i,a){if(Ot.current!==Qr)throw Error(t(168));He(Ot,i),He(Qt,a)}function Fp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Me(n)||"Unknown",d));return se({},a,c)}function Xl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Qr,Ji=Ot.current,He(Ot,n),He(Qt,Qt.current),!0}function Up(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Fp(n,i,Ji),c.__reactInternalMemoizedMergedChildContext=n,Ge(Qt),Ge(Ot),He(Ot,n)):Ge(Qt),He(Qt,a)}var Tr=null,Zl=!1,ch=!1;function jp(n){Tr===null?Tr=[n]:Tr.push(n)}function _E(n){Zl=!0,jp(n)}function Yr(){if(!ch&&Tr!==null){ch=!0;var n=0,i=ke;try{var a=Tr;for(ke=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Tr=null,Zl=!1}catch(d){throw Tr!==null&&(Tr=Tr.slice(n+1)),bs(Bi,Yr),d}finally{ke=i,ch=!1}}return null}var no=[],ro=0,eu=null,tu=0,pn=[],mn=0,Xi=null,Ir=1,Sr="";function Zi(n,i){no[ro++]=tu,no[ro++]=eu,eu=n,tu=i}function zp(n,i,a){pn[mn++]=Ir,pn[mn++]=Sr,pn[mn++]=Xi,Xi=n;var c=Ir;n=Sr;var d=32-Bt(c)-1;c&=~(1<<d),a+=1;var g=32-Bt(i)+d;if(30<g){var w=d-d%5;g=(c&(1<<w)-1).toString(32),c>>=w,d-=w,Ir=1<<32-Bt(i)+d|a<<d|c,Sr=g+n}else Ir=1<<g|a<<d|c,Sr=n}function hh(n){n.return!==null&&(Zi(n,1),zp(n,1,0))}function dh(n){for(;n===eu;)eu=no[--ro],no[ro]=null,tu=no[--ro],no[ro]=null;for(;n===Xi;)Xi=pn[--mn],pn[mn]=null,Sr=pn[--mn],pn[mn]=null,Ir=pn[--mn],pn[mn]=null}var an=null,ln=null,Qe=!1,Dn=null;function Bp(n,i){var a=_n(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function $p(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,an=n,ln=Gr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,an=n,ln=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Xi!==null?{id:Ir,overflow:Sr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=_n(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,an=n,ln=null,!0):!1;default:return!1}}function fh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ph(n){if(Qe){var i=ln;if(i){var a=i;if(!$p(n,i)){if(fh(n))throw Error(t(418));i=Gr(a.nextSibling);var c=an;i&&$p(n,i)?Bp(c,a):(n.flags=n.flags&-4097|2,Qe=!1,an=n)}}else{if(fh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qe=!1,an=n}}}function Hp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;an=n}function nu(n){if(n!==an)return!1;if(!Qe)return Hp(n),Qe=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!sh(n.type,n.memoizedProps)),i&&(i=ln)){if(fh(n))throw qp(),Error(t(418));for(;i;)Bp(n,i),i=Gr(i.nextSibling)}if(Hp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ln=Gr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ln=null}}else ln=an?Gr(n.stateNode.nextSibling):null;return!0}function qp(){for(var n=ln;n;)n=Gr(n.nextSibling)}function io(){ln=an=null,Qe=!1}function mh(n){Dn===null?Dn=[n]:Dn.push(n)}var wE=ce.ReactCurrentBatchConfig;function Sa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(w){var A=d.refs;w===null?delete A[g]:A[g]=w},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ru(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Wp(n){var i=n._init;return i(n._payload)}function Gp(n){function i(M,N){if(n){var U=M.deletions;U===null?(M.deletions=[N],M.flags|=16):U.push(N)}}function a(M,N){if(!n)return null;for(;N!==null;)i(M,N),N=N.sibling;return null}function c(M,N){for(M=new Map;N!==null;)N.key!==null?M.set(N.key,N):M.set(N.index,N),N=N.sibling;return M}function d(M,N){return M=ii(M,N),M.index=0,M.sibling=null,M}function g(M,N,U){return M.index=U,n?(U=M.alternate,U!==null?(U=U.index,U<N?(M.flags|=2,N):U):(M.flags|=2,N)):(M.flags|=1048576,N)}function w(M){return n&&M.alternate===null&&(M.flags|=2),M}function A(M,N,U,X){return N===null||N.tag!==6?(N=od(U,M.mode,X),N.return=M,N):(N=d(N,U),N.return=M,N)}function k(M,N,U,X){var de=U.type;return de===D?Q(M,N,U.props.children,X,U.key):N!==null&&(N.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Dt&&Wp(de)===N.type)?(X=d(N,U.props),X.ref=Sa(M,N,U),X.return=M,X):(X=Cu(U.type,U.key,U.props,null,M.mode,X),X.ref=Sa(M,N,U),X.return=M,X)}function z(M,N,U,X){return N===null||N.tag!==4||N.stateNode.containerInfo!==U.containerInfo||N.stateNode.implementation!==U.implementation?(N=ad(U,M.mode,X),N.return=M,N):(N=d(N,U.children||[]),N.return=M,N)}function Q(M,N,U,X,de){return N===null||N.tag!==7?(N=as(U,M.mode,X,de),N.return=M,N):(N=d(N,U),N.return=M,N)}function J(M,N,U){if(typeof N=="string"&&N!==""||typeof N=="number")return N=od(""+N,M.mode,U),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ce:return U=Cu(N.type,N.key,N.props,null,M.mode,U),U.ref=Sa(M,null,N),U.return=M,U;case Te:return N=ad(N,M.mode,U),N.return=M,N;case Dt:var X=N._init;return J(M,X(N._payload),U)}if(dr(N)||me(N))return N=as(N,M.mode,U,null),N.return=M,N;ru(M,N)}return null}function G(M,N,U,X){var de=N!==null?N.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return de!==null?null:A(M,N,""+U,X);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Ce:return U.key===de?k(M,N,U,X):null;case Te:return U.key===de?z(M,N,U,X):null;case Dt:return de=U._init,G(M,N,de(U._payload),X)}if(dr(U)||me(U))return de!==null?null:Q(M,N,U,X,null);ru(M,U)}return null}function re(M,N,U,X,de){if(typeof X=="string"&&X!==""||typeof X=="number")return M=M.get(U)||null,A(N,M,""+X,de);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Ce:return M=M.get(X.key===null?U:X.key)||null,k(N,M,X,de);case Te:return M=M.get(X.key===null?U:X.key)||null,z(N,M,X,de);case Dt:var ge=X._init;return re(M,N,U,ge(X._payload),de)}if(dr(X)||me(X))return M=M.get(U)||null,Q(N,M,X,de,null);ru(N,X)}return null}function ue(M,N,U,X){for(var de=null,ge=null,ye=N,_e=N=0,It=null;ye!==null&&_e<U.length;_e++){ye.index>_e?(It=ye,ye=null):It=ye.sibling;var Le=G(M,ye,U[_e],X);if(Le===null){ye===null&&(ye=It);break}n&&ye&&Le.alternate===null&&i(M,ye),N=g(Le,N,_e),ge===null?de=Le:ge.sibling=Le,ge=Le,ye=It}if(_e===U.length)return a(M,ye),Qe&&Zi(M,_e),de;if(ye===null){for(;_e<U.length;_e++)ye=J(M,U[_e],X),ye!==null&&(N=g(ye,N,_e),ge===null?de=ye:ge.sibling=ye,ge=ye);return Qe&&Zi(M,_e),de}for(ye=c(M,ye);_e<U.length;_e++)It=re(ye,M,_e,U[_e],X),It!==null&&(n&&It.alternate!==null&&ye.delete(It.key===null?_e:It.key),N=g(It,N,_e),ge===null?de=It:ge.sibling=It,ge=It);return n&&ye.forEach(function(si){return i(M,si)}),Qe&&Zi(M,_e),de}function he(M,N,U,X){var de=me(U);if(typeof de!="function")throw Error(t(150));if(U=de.call(U),U==null)throw Error(t(151));for(var ge=de=null,ye=N,_e=N=0,It=null,Le=U.next();ye!==null&&!Le.done;_e++,Le=U.next()){ye.index>_e?(It=ye,ye=null):It=ye.sibling;var si=G(M,ye,Le.value,X);if(si===null){ye===null&&(ye=It);break}n&&ye&&si.alternate===null&&i(M,ye),N=g(si,N,_e),ge===null?de=si:ge.sibling=si,ge=si,ye=It}if(Le.done)return a(M,ye),Qe&&Zi(M,_e),de;if(ye===null){for(;!Le.done;_e++,Le=U.next())Le=J(M,Le.value,X),Le!==null&&(N=g(Le,N,_e),ge===null?de=Le:ge.sibling=Le,ge=Le);return Qe&&Zi(M,_e),de}for(ye=c(M,ye);!Le.done;_e++,Le=U.next())Le=re(ye,M,_e,Le.value,X),Le!==null&&(n&&Le.alternate!==null&&ye.delete(Le.key===null?_e:Le.key),N=g(Le,N,_e),ge===null?de=Le:ge.sibling=Le,ge=Le);return n&&ye.forEach(function(ZE){return i(M,ZE)}),Qe&&Zi(M,_e),de}function rt(M,N,U,X){if(typeof U=="object"&&U!==null&&U.type===D&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case Ce:e:{for(var de=U.key,ge=N;ge!==null;){if(ge.key===de){if(de=U.type,de===D){if(ge.tag===7){a(M,ge.sibling),N=d(ge,U.props.children),N.return=M,M=N;break e}}else if(ge.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Dt&&Wp(de)===ge.type){a(M,ge.sibling),N=d(ge,U.props),N.ref=Sa(M,ge,U),N.return=M,M=N;break e}a(M,ge);break}else i(M,ge);ge=ge.sibling}U.type===D?(N=as(U.props.children,M.mode,X,U.key),N.return=M,M=N):(X=Cu(U.type,U.key,U.props,null,M.mode,X),X.ref=Sa(M,N,U),X.return=M,M=X)}return w(M);case Te:e:{for(ge=U.key;N!==null;){if(N.key===ge)if(N.tag===4&&N.stateNode.containerInfo===U.containerInfo&&N.stateNode.implementation===U.implementation){a(M,N.sibling),N=d(N,U.children||[]),N.return=M,M=N;break e}else{a(M,N);break}else i(M,N);N=N.sibling}N=ad(U,M.mode,X),N.return=M,M=N}return w(M);case Dt:return ge=U._init,rt(M,N,ge(U._payload),X)}if(dr(U))return ue(M,N,U,X);if(me(U))return he(M,N,U,X);ru(M,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,N!==null&&N.tag===6?(a(M,N.sibling),N=d(N,U),N.return=M,M=N):(a(M,N),N=od(U,M.mode,X),N.return=M,M=N),w(M)):a(M,N)}return rt}var so=Gp(!0),Kp=Gp(!1),iu=Kr(null),su=null,oo=null,gh=null;function yh(){gh=oo=su=null}function vh(n){var i=iu.current;Ge(iu),n._currentValue=i}function _h(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function ao(n,i){su=n,gh=oo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Jt=!0),n.firstContext=null)}function gn(n){var i=n._currentValue;if(gh!==n)if(n={context:n,memoizedValue:i,next:null},oo===null){if(su===null)throw Error(t(308));oo=n,su.dependencies={lanes:0,firstContext:n}}else oo=oo.next=n;return i}var es=null;function wh(n){es===null?es=[n]:es.push(n)}function Qp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,wh(i)):(a.next=d.next,d.next=a),i.interleaved=a,Ar(n,c)}function Ar(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Jr=!1;function Eh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Rr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Xr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(be&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Ar(n,a)}return d=c.interleaved,d===null?(i.next=i,wh(c)):(i.next=d.next,d.next=i),c.interleaved=i,Ar(n,a)}function ou(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,zr(n,a)}}function Jp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function au(n,i,a,c){var d=n.updateQueue;Jr=!1;var g=d.firstBaseUpdate,w=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var k=A,z=k.next;k.next=null,w===null?g=z:w.next=z,w=k;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,A=Q.lastBaseUpdate,A!==w&&(A===null?Q.firstBaseUpdate=z:A.next=z,Q.lastBaseUpdate=k))}if(g!==null){var J=d.baseState;w=0,Q=z=k=null,A=g;do{var G=A.lane,re=A.eventTime;if((c&G)===G){Q!==null&&(Q=Q.next={eventTime:re,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ue=n,he=A;switch(G=i,re=a,he.tag){case 1:if(ue=he.payload,typeof ue=="function"){J=ue.call(re,J,G);break e}J=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=he.payload,G=typeof ue=="function"?ue.call(re,J,G):ue,G==null)break e;J=se({},J,G);break e;case 2:Jr=!0}}A.callback!==null&&A.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[A]:G.push(A))}else re={eventTime:re,lane:G,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Q===null?(z=Q=re,k=J):Q=Q.next=re,w|=G;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;G=A,A=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(Q===null&&(k=J),d.baseState=k,d.firstBaseUpdate=z,d.lastBaseUpdate=Q,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);rs|=w,n.lanes=w,n.memoizedState=J}}function Xp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Aa={},Qn=Kr(Aa),Ra=Kr(Aa),Ca=Kr(Aa);function ts(n){if(n===Aa)throw Error(t(174));return n}function Th(n,i){switch(He(Ca,i),He(Ra,n),He(Qn,Aa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ft(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ft(i,n)}Ge(Qn),He(Qn,i)}function lo(){Ge(Qn),Ge(Ra),Ge(Ca)}function Zp(n){ts(Ca.current);var i=ts(Qn.current),a=ft(i,n.type);i!==a&&(He(Ra,n),He(Qn,a))}function Ih(n){Ra.current===n&&(Ge(Qn),Ge(Ra))}var Je=Kr(0);function lu(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Sh=[];function Ah(){for(var n=0;n<Sh.length;n++)Sh[n]._workInProgressVersionPrimary=null;Sh.length=0}var uu=ce.ReactCurrentDispatcher,Rh=ce.ReactCurrentBatchConfig,ns=0,Xe=null,mt=null,Et=null,cu=!1,Pa=!1,ka=0,EE=0;function bt(){throw Error(t(321))}function Ch(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Nn(n[a],i[a]))return!1;return!0}function Ph(n,i,a,c,d,g){if(ns=g,Xe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,uu.current=n===null||n.memoizedState===null?AE:RE,n=a(c,d),Pa){g=0;do{if(Pa=!1,ka=0,25<=g)throw Error(t(301));g+=1,Et=mt=null,i.updateQueue=null,uu.current=CE,n=a(c,d)}while(Pa)}if(uu.current=fu,i=mt!==null&&mt.next!==null,ns=0,Et=mt=Xe=null,cu=!1,i)throw Error(t(300));return n}function kh(){var n=ka!==0;return ka=0,n}function Yn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Xe.memoizedState=Et=n:Et=Et.next=n,Et}function yn(){if(mt===null){var n=Xe.alternate;n=n!==null?n.memoizedState:null}else n=mt.next;var i=Et===null?Xe.memoizedState:Et.next;if(i!==null)Et=i,mt=n;else{if(n===null)throw Error(t(310));mt=n,n={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Et===null?Xe.memoizedState=Et=n:Et=Et.next=n}return Et}function xa(n,i){return typeof i=="function"?i(n):i}function xh(n){var i=yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=mt,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var w=d.next;d.next=g.next,g.next=w}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var A=w=null,k=null,z=g;do{var Q=z.lane;if((ns&Q)===Q)k!==null&&(k=k.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),c=z.hasEagerState?z.eagerState:n(c,z.action);else{var J={lane:Q,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};k===null?(A=k=J,w=c):k=k.next=J,Xe.lanes|=Q,rs|=Q}z=z.next}while(z!==null&&z!==g);k===null?w=c:k.next=A,Nn(c,i.memoizedState)||(Jt=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do g=d.lane,Xe.lanes|=g,rs|=g,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Nh(n){var i=yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do g=n(g,w.action),w=w.next;while(w!==d);Nn(g,i.memoizedState)||(Jt=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function em(){}function tm(n,i){var a=Xe,c=yn(),d=i(),g=!Nn(c.memoizedState,d);if(g&&(c.memoizedState=d,Jt=!0),c=c.queue,Dh(im.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,Na(9,rm.bind(null,a,c,d,i),void 0,null),Tt===null)throw Error(t(349));(ns&30)!==0||nm(a,i,d)}return d}function nm(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Xe.updateQueue,i===null?(i={lastEffect:null,stores:null},Xe.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function rm(n,i,a,c){i.value=a,i.getSnapshot=c,sm(i)&&om(n)}function im(n,i,a){return a(function(){sm(i)&&om(n)})}function sm(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Nn(n,a)}catch{return!0}}function om(n){var i=Ar(n,1);i!==null&&Ln(i,n,1,-1)}function am(n){var i=Yn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:n},i.queue=n,n=n.dispatch=SE.bind(null,Xe,n),[i.memoizedState,n]}function Na(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Xe.updateQueue,i===null?(i={lastEffect:null,stores:null},Xe.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function lm(){return yn().memoizedState}function hu(n,i,a,c){var d=Yn();Xe.flags|=n,d.memoizedState=Na(1|i,a,void 0,c===void 0?null:c)}function du(n,i,a,c){var d=yn();c=c===void 0?null:c;var g=void 0;if(mt!==null){var w=mt.memoizedState;if(g=w.destroy,c!==null&&Ch(c,w.deps)){d.memoizedState=Na(i,a,g,c);return}}Xe.flags|=n,d.memoizedState=Na(1|i,a,g,c)}function um(n,i){return hu(8390656,8,n,i)}function Dh(n,i){return du(2048,8,n,i)}function cm(n,i){return du(4,2,n,i)}function hm(n,i){return du(4,4,n,i)}function dm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function fm(n,i,a){return a=a!=null?a.concat([n]):null,du(4,4,dm.bind(null,i,n),a)}function Oh(){}function pm(n,i){var a=yn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Ch(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function mm(n,i){var a=yn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Ch(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function gm(n,i,a){return(ns&21)===0?(n.baseState&&(n.baseState=!1,Jt=!0),n.memoizedState=a):(Nn(a,i)||(a=qi(),Xe.lanes|=a,rs|=a,n.baseState=!0),i)}function TE(n,i){var a=ke;ke=a!==0&&4>a?a:4,n(!0);var c=Rh.transition;Rh.transition={};try{n(!1),i()}finally{ke=a,Rh.transition=c}}function ym(){return yn().memoizedState}function IE(n,i,a){var c=ni(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},vm(n))_m(i,a);else if(a=Qp(n,i,a,c),a!==null){var d=qt();Ln(a,n,c,d),wm(a,i,c)}}function SE(n,i,a){var c=ni(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(vm(n))_m(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var w=i.lastRenderedState,A=g(w,a);if(d.hasEagerState=!0,d.eagerState=A,Nn(A,w)){var k=i.interleaved;k===null?(d.next=d,wh(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}a=Qp(n,i,d,c),a!==null&&(d=qt(),Ln(a,n,c,d),wm(a,i,c))}}function vm(n){var i=n.alternate;return n===Xe||i!==null&&i===Xe}function _m(n,i){Pa=cu=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function wm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,zr(n,a)}}var fu={readContext:gn,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},AE={readContext:gn,useCallback:function(n,i){return Yn().memoizedState=[n,i===void 0?null:i],n},useContext:gn,useEffect:um,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,hu(4194308,4,dm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return hu(4194308,4,n,i)},useInsertionEffect:function(n,i){return hu(4,2,n,i)},useMemo:function(n,i){var a=Yn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Yn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=IE.bind(null,Xe,n),[c.memoizedState,n]},useRef:function(n){var i=Yn();return n={current:n},i.memoizedState=n},useState:am,useDebugValue:Oh,useDeferredValue:function(n){return Yn().memoizedState=n},useTransition:function(){var n=am(!1),i=n[0];return n=TE.bind(null,n[1]),Yn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Xe,d=Yn();if(Qe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Tt===null)throw Error(t(349));(ns&30)!==0||nm(c,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,um(im.bind(null,c,g,n),[n]),c.flags|=2048,Na(9,rm.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Yn(),i=Tt.identifierPrefix;if(Qe){var a=Sr,c=Ir;a=(c&~(1<<32-Bt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=ka++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=EE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},RE={readContext:gn,useCallback:pm,useContext:gn,useEffect:Dh,useImperativeHandle:fm,useInsertionEffect:cm,useLayoutEffect:hm,useMemo:mm,useReducer:xh,useRef:lm,useState:function(){return xh(xa)},useDebugValue:Oh,useDeferredValue:function(n){var i=yn();return gm(i,mt.memoizedState,n)},useTransition:function(){var n=xh(xa)[0],i=yn().memoizedState;return[n,i]},useMutableSource:em,useSyncExternalStore:tm,useId:ym,unstable_isNewReconciler:!1},CE={readContext:gn,useCallback:pm,useContext:gn,useEffect:Dh,useImperativeHandle:fm,useInsertionEffect:cm,useLayoutEffect:hm,useMemo:mm,useReducer:Nh,useRef:lm,useState:function(){return Nh(xa)},useDebugValue:Oh,useDeferredValue:function(n){var i=yn();return mt===null?i.memoizedState=n:gm(i,mt.memoizedState,n)},useTransition:function(){var n=Nh(xa)[0],i=yn().memoizedState;return[n,i]},useMutableSource:em,useSyncExternalStore:tm,useId:ym,unstable_isNewReconciler:!1};function On(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function bh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:se({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var pu={isMounted:function(n){return(n=n._reactInternals)?Sn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=qt(),d=ni(n),g=Rr(c,d);g.payload=i,a!=null&&(g.callback=a),i=Xr(n,g,d),i!==null&&(Ln(i,n,d,c),ou(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=qt(),d=ni(n),g=Rr(c,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Xr(n,g,d),i!==null&&(Ln(i,n,d,c),ou(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=qt(),c=ni(n),d=Rr(a,c);d.tag=2,i!=null&&(d.callback=i),i=Xr(n,d,c),i!==null&&(Ln(i,n,c,a),ou(i,n,c))}};function Em(n,i,a,c,d,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,w):i.prototype&&i.prototype.isPureReactComponent?!ya(a,c)||!ya(d,g):!0}function Tm(n,i,a){var c=!1,d=Qr,g=i.contextType;return typeof g=="object"&&g!==null?g=gn(g):(d=Yt(i)?Ji:Ot.current,c=i.contextTypes,g=(c=c!=null)?to(n,d):Qr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=pu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function Im(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&pu.enqueueReplaceState(i,i.state,null)}function Vh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Eh(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=gn(g):(g=Yt(i)?Ji:Ot.current,d.context=to(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(bh(n,i,g,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&pu.enqueueReplaceState(d,d.state,null),au(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function uo(n,i){try{var a="",c=i;do a+=Se(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function Lh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Mh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var PE=typeof WeakMap=="function"?WeakMap:Map;function Sm(n,i,a){a=Rr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Eu||(Eu=!0,Xh=c),Mh(n,i)},a}function Am(n,i,a){a=Rr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Mh(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Mh(n,i),typeof c!="function"&&(ei===null?ei=new Set([this]):ei.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Rm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new PE;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=BE.bind(null,n,i,a),i.then(n,n))}function Cm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Pm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Rr(-1,1),i.tag=2,Xr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var kE=ce.ReactCurrentOwner,Jt=!1;function Ht(n,i,a,c){i.child=n===null?Kp(i,null,a,c):so(i,n.child,a,c)}function km(n,i,a,c,d){a=a.render;var g=i.ref;return ao(i,d),c=Ph(n,i,a,c,g,d),a=kh(),n!==null&&!Jt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Cr(n,i,d)):(Qe&&a&&hh(i),i.flags|=1,Ht(n,i,c,d),i.child)}function xm(n,i,a,c,d){if(n===null){var g=a.type;return typeof g=="function"&&!sd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Nm(n,i,g,c,d)):(n=Cu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&d)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:ya,a(w,c)&&n.ref===i.ref)return Cr(n,i,d)}return i.flags|=1,n=ii(g,c),n.ref=i.ref,n.return=i,i.child=n}function Nm(n,i,a,c,d){if(n!==null){var g=n.memoizedProps;if(ya(g,c)&&n.ref===i.ref)if(Jt=!1,i.pendingProps=c=g,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Jt=!0);else return i.lanes=n.lanes,Cr(n,i,d)}return Fh(n,i,a,c,d)}function Dm(n,i,a){var c=i.pendingProps,d=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(ho,un),un|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,He(ho,un),un|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,He(ho,un),un|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,He(ho,un),un|=c;return Ht(n,i,d,a),i.child}function Om(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Fh(n,i,a,c,d){var g=Yt(a)?Ji:Ot.current;return g=to(i,g),ao(i,d),a=Ph(n,i,a,c,g,d),c=kh(),n!==null&&!Jt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Cr(n,i,d)):(Qe&&c&&hh(i),i.flags|=1,Ht(n,i,a,d),i.child)}function bm(n,i,a,c,d){if(Yt(a)){var g=!0;Xl(i)}else g=!1;if(ao(i,d),i.stateNode===null)gu(n,i),Tm(i,a,c),Vh(i,a,c,d),c=!0;else if(n===null){var w=i.stateNode,A=i.memoizedProps;w.props=A;var k=w.context,z=a.contextType;typeof z=="object"&&z!==null?z=gn(z):(z=Yt(a)?Ji:Ot.current,z=to(i,z));var Q=a.getDerivedStateFromProps,J=typeof Q=="function"||typeof w.getSnapshotBeforeUpdate=="function";J||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==c||k!==z)&&Im(i,w,c,z),Jr=!1;var G=i.memoizedState;w.state=G,au(i,c,w,d),k=i.memoizedState,A!==c||G!==k||Qt.current||Jr?(typeof Q=="function"&&(bh(i,a,Q,c),k=i.memoizedState),(A=Jr||Em(i,a,A,c,G,k,z))?(J||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=k),w.props=c,w.state=k,w.context=z,c=A):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,Yp(n,i),A=i.memoizedProps,z=i.type===i.elementType?A:On(i.type,A),w.props=z,J=i.pendingProps,G=w.context,k=a.contextType,typeof k=="object"&&k!==null?k=gn(k):(k=Yt(a)?Ji:Ot.current,k=to(i,k));var re=a.getDerivedStateFromProps;(Q=typeof re=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==J||G!==k)&&Im(i,w,c,k),Jr=!1,G=i.memoizedState,w.state=G,au(i,c,w,d);var ue=i.memoizedState;A!==J||G!==ue||Qt.current||Jr?(typeof re=="function"&&(bh(i,a,re,c),ue=i.memoizedState),(z=Jr||Em(i,a,z,c,G,ue,k)||!1)?(Q||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,ue,k),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,ue,k)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||A===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ue),w.props=c,w.state=ue,w.context=k,c=z):(typeof w.componentDidUpdate!="function"||A===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),c=!1)}return Uh(n,i,a,c,g,d)}function Uh(n,i,a,c,d,g){Om(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return d&&Up(i,a,!1),Cr(n,i,g);c=i.stateNode,kE.current=i;var A=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=so(i,n.child,null,g),i.child=so(i,null,A,g)):Ht(n,i,A,g),i.memoizedState=c.state,d&&Up(i,a,!0),i.child}function Vm(n){var i=n.stateNode;i.pendingContext?Mp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Mp(n,i.context,!1),Th(n,i.containerInfo)}function Lm(n,i,a,c,d){return io(),mh(d),i.flags|=256,Ht(n,i,a,c),i.child}var jh={dehydrated:null,treeContext:null,retryLane:0};function zh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Mm(n,i,a){var c=i.pendingProps,d=Je.current,g=!1,w=(i.flags&128)!==0,A;if((A=w)||(A=n!==null&&n.memoizedState===null?!1:(d&2)!==0),A?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Je,d&1),n===null)return ph(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,g?(c=i.mode,g=i.child,w={mode:"hidden",children:w},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=Pu(w,c,0,null),n=as(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=zh(a),i.memoizedState=jh,n):Bh(i,w));if(d=n.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return xE(n,i,w,c,A,d,a);if(g){g=c.fallback,w=i.mode,d=n.child,A=d.sibling;var k={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=k,i.deletions=null):(c=ii(d,k),c.subtreeFlags=d.subtreeFlags&14680064),A!==null?g=ii(A,g):(g=as(g,w,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,w=n.child.memoizedState,w=w===null?zh(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=n.childLanes&~a,i.memoizedState=jh,c}return g=n.child,n=g.sibling,c=ii(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Bh(n,i){return i=Pu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function mu(n,i,a,c){return c!==null&&mh(c),so(i,n.child,null,a),n=Bh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function xE(n,i,a,c,d,g,w){if(a)return i.flags&256?(i.flags&=-257,c=Lh(Error(t(422))),mu(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,d=i.mode,c=Pu({mode:"visible",children:c.children},d,0,null),g=as(g,d,w,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&so(i,n.child,null,w),i.child.memoizedState=zh(w),i.memoizedState=jh,g);if((i.mode&1)===0)return mu(n,i,w,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var A=c.dgst;return c=A,g=Error(t(419)),c=Lh(g,c,void 0),mu(n,i,w,c)}if(A=(w&n.childLanes)!==0,Jt||A){if(c=Tt,c!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|w))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Ar(n,d),Ln(c,n,d,-1))}return id(),c=Lh(Error(t(421))),mu(n,i,w,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=$E.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,ln=Gr(d.nextSibling),an=i,Qe=!0,Dn=null,n!==null&&(pn[mn++]=Ir,pn[mn++]=Sr,pn[mn++]=Xi,Ir=n.id,Sr=n.overflow,Xi=i),i=Bh(i,c.children),i.flags|=4096,i)}function Fm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),_h(n.return,i,a)}function $h(n,i,a,c,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function Um(n,i,a){var c=i.pendingProps,d=c.revealOrder,g=c.tail;if(Ht(n,i,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Fm(n,a,i);else if(n.tag===19)Fm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Je,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&lu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),$h(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&lu(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}$h(i,!0,a,null,g);break;case"together":$h(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function gu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Cr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),rs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ii(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ii(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function NE(n,i,a){switch(i.tag){case 3:Vm(i),io();break;case 5:Zp(i);break;case 1:Yt(i.type)&&Xl(i);break;case 4:Th(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;He(iu,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(He(Je,Je.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Mm(n,i,a):(He(Je,Je.current&1),n=Cr(n,i,a),n!==null?n.sibling:null);He(Je,Je.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Um(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Je,Je.current),c)break;return null;case 22:case 23:return i.lanes=0,Dm(n,i,a)}return Cr(n,i,a)}var jm,Hh,zm,Bm;jm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Hh=function(){},zm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,ts(Qn.current);var g=null;switch(a){case"input":d=bi(n,d),c=bi(n,c),g=[];break;case"select":d=se({},d,{value:void 0}),c=se({},c,{value:void 0}),g=[];break;case"textarea":d=Wo(n,d),c=Wo(n,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ql)}Xo(a,c);var w;a=null;for(z in d)if(!c.hasOwnProperty(z)&&d.hasOwnProperty(z)&&d[z]!=null)if(z==="style"){var A=d[z];for(w in A)A.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?g||(g=[]):(g=g||[]).push(z,null));for(z in c){var k=c[z];if(A=d!=null?d[z]:void 0,c.hasOwnProperty(z)&&k!==A&&(k!=null||A!=null))if(z==="style")if(A){for(w in A)!A.hasOwnProperty(w)||k&&k.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in k)k.hasOwnProperty(w)&&A[w]!==k[w]&&(a||(a={}),a[w]=k[w])}else a||(g||(g=[]),g.push(z,a)),a=k;else z==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,A=A?A.__html:void 0,k!=null&&A!==k&&(g=g||[]).push(z,k)):z==="children"?typeof k!="string"&&typeof k!="number"||(g=g||[]).push(z,""+k):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(k!=null&&z==="onScroll"&&We("scroll",n),g||A===k||(g=[])):(g=g||[]).push(z,k))}a&&(g=g||[]).push("style",a);var z=g;(i.updateQueue=z)&&(i.flags|=4)}},Bm=function(n,i,a,c){a!==c&&(i.flags|=4)};function Da(n,i){if(!Qe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Vt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function DE(n,i,a){var c=i.pendingProps;switch(dh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(i),null;case 1:return Yt(i.type)&&Jl(),Vt(i),null;case 3:return c=i.stateNode,lo(),Ge(Qt),Ge(Ot),Ah(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(nu(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Dn!==null&&(td(Dn),Dn=null))),Hh(n,i),Vt(i),null;case 5:Ih(i);var d=ts(Ca.current);if(a=i.type,n!==null&&i.stateNode!=null)zm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Vt(i),null}if(n=ts(Qn.current),nu(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Kn]=i,c[Ta]=g,n=(i.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<_a.length;d++)We(_a[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":Is(c,g),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},We("invalid",c);break;case"textarea":As(c,g),We("invalid",c)}Xo(a,g),d=null;for(var w in g)if(g.hasOwnProperty(w)){var A=g[w];w==="children"?typeof A=="string"?c.textContent!==A&&(g.suppressHydrationWarning!==!0&&Kl(c.textContent,A,n),d=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&Kl(c.textContent,A,n),d=["children",""+A]):o.hasOwnProperty(w)&&A!=null&&w==="onScroll"&&We("scroll",c)}switch(a){case"input":hr(c),wl(c,g,!0);break;case"textarea":hr(c),Go(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Ql)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=dt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[Kn]=i,n[Ta]=c,jm(n,i,!1,!1),i.stateNode=n;e:{switch(w=Zo(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<_a.length;d++)We(_a[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":Is(n,c),d=bi(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=se({},c,{value:void 0}),We("invalid",n);break;case"textarea":As(n,c),d=Wo(n,c),We("invalid",n);break;default:d=c}Xo(a,d),A=d;for(g in A)if(A.hasOwnProperty(g)){var k=A[g];g==="style"?Yo(n,k):g==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Ko(n,k)):g==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Lr(n,k):typeof k=="number"&&Lr(n,""+k):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?k!=null&&g==="onScroll"&&We("scroll",n):k!=null&&ne(n,g,k,w))}switch(a){case"input":hr(n),wl(n,c,!1);break;case"textarea":hr(n),Go(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Fe(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?fr(n,!!c.multiple,g,!1):c.defaultValue!=null&&fr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ql)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Vt(i),null;case 6:if(n&&i.stateNode!=null)Bm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=ts(Ca.current),ts(Qn.current),nu(i)){if(c=i.stateNode,a=i.memoizedProps,c[Kn]=i,(g=c.nodeValue!==a)&&(n=an,n!==null))switch(n.tag){case 3:Kl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Kl(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Kn]=i,i.stateNode=c}return Vt(i),null;case 13:if(Ge(Je),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qe&&ln!==null&&(i.mode&1)!==0&&(i.flags&128)===0)qp(),io(),i.flags|=98560,g=!1;else if(g=nu(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Kn]=i}else io(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Vt(i),g=!1}else Dn!==null&&(td(Dn),Dn=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Je.current&1)!==0?gt===0&&(gt=3):id())),i.updateQueue!==null&&(i.flags|=4),Vt(i),null);case 4:return lo(),Hh(n,i),n===null&&wa(i.stateNode.containerInfo),Vt(i),null;case 10:return vh(i.type._context),Vt(i),null;case 17:return Yt(i.type)&&Jl(),Vt(i),null;case 19:if(Ge(Je),g=i.memoizedState,g===null)return Vt(i),null;if(c=(i.flags&128)!==0,w=g.rendering,w===null)if(c)Da(g,!1);else{if(gt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=lu(n),w!==null){for(i.flags|=128,Da(g,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,n=w.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Je,Je.current&1|2),i.child}n=n.sibling}g.tail!==null&&$e()>fo&&(i.flags|=128,c=!0,Da(g,!1),i.lanes=4194304)}else{if(!c)if(n=lu(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Da(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Qe)return Vt(i),null}else 2*$e()-g.renderingStartTime>fo&&a!==1073741824&&(i.flags|=128,c=!0,Da(g,!1),i.lanes=4194304);g.isBackwards?(w.sibling=i.child,i.child=w):(a=g.last,a!==null?a.sibling=w:i.child=w,g.last=w)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=$e(),i.sibling=null,a=Je.current,He(Je,c?a&1|2:a&1),i):(Vt(i),null);case 22:case 23:return rd(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(un&1073741824)!==0&&(Vt(i),i.subtreeFlags&6&&(i.flags|=8192)):Vt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function OE(n,i){switch(dh(i),i.tag){case 1:return Yt(i.type)&&Jl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return lo(),Ge(Qt),Ge(Ot),Ah(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Ih(i),null;case 13:if(Ge(Je),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));io()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ge(Je),null;case 4:return lo(),null;case 10:return vh(i.type._context),null;case 22:case 23:return rd(),null;case 24:return null;default:return null}}var yu=!1,Lt=!1,bE=typeof WeakSet=="function"?WeakSet:Set,ae=null;function co(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){et(n,i,c)}else a.current=null}function qh(n,i,a){try{a()}catch(c){et(n,i,c)}}var $m=!1;function VE(n,i){if(rh=Hr,n=Ep(),Qc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,A=-1,k=-1,z=0,Q=0,J=n,G=null;t:for(;;){for(var re;J!==a||d!==0&&J.nodeType!==3||(A=w+d),J!==g||c!==0&&J.nodeType!==3||(k=w+c),J.nodeType===3&&(w+=J.nodeValue.length),(re=J.firstChild)!==null;)G=J,J=re;for(;;){if(J===n)break t;if(G===a&&++z===d&&(A=w),G===g&&++Q===c&&(k=w),(re=J.nextSibling)!==null)break;J=G,G=J.parentNode}J=re}a=A===-1||k===-1?null:{start:A,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(ih={focusedElem:n,selectionRange:a},Hr=!1,ae=i;ae!==null;)if(i=ae,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ae=n;else for(;ae!==null;){i=ae;try{var ue=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var he=ue.memoizedProps,rt=ue.memoizedState,M=i.stateNode,N=M.getSnapshotBeforeUpdate(i.elementType===i.type?he:On(i.type,he),rt);M.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var U=i.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){et(i,i.return,X)}if(n=i.sibling,n!==null){n.return=i.return,ae=n;break}ae=i.return}return ue=$m,$m=!1,ue}function Oa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&qh(i,a,g)}d=d.next}while(d!==c)}}function vu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Wh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Hm(n){var i=n.alternate;i!==null&&(n.alternate=null,Hm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Kn],delete i[Ta],delete i[lh],delete i[yE],delete i[vE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function qm(n){return n.tag===5||n.tag===3||n.tag===4}function Wm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||qm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Gh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ql));else if(c!==4&&(n=n.child,n!==null))for(Gh(n,i,a),n=n.sibling;n!==null;)Gh(n,i,a),n=n.sibling}function Kh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Kh(n,i,a),n=n.sibling;n!==null;)Kh(n,i,a),n=n.sibling}var Ct=null,bn=!1;function Zr(n,i,a){for(a=a.child;a!==null;)Gm(n,i,a),a=a.sibling}function Gm(n,i,a){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount($i,a)}catch{}switch(a.tag){case 5:Lt||co(a,i);case 6:var c=Ct,d=bn;Ct=null,Zr(n,i,a),Ct=c,bn=d,Ct!==null&&(bn?(n=Ct,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(bn?(n=Ct,a=a.stateNode,n.nodeType===8?ah(n.parentNode,a):n.nodeType===1&&ah(n,a),kn(n)):ah(Ct,a.stateNode));break;case 4:c=Ct,d=bn,Ct=a.stateNode.containerInfo,bn=!0,Zr(n,i,a),Ct=c,bn=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&qh(a,i,w),d=d.next}while(d!==c)}Zr(n,i,a);break;case 1:if(!Lt&&(co(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){et(a,i,A)}Zr(n,i,a);break;case 21:Zr(n,i,a);break;case 22:a.mode&1?(Lt=(c=Lt)||a.memoizedState!==null,Zr(n,i,a),Lt=c):Zr(n,i,a);break;default:Zr(n,i,a)}}function Km(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new bE),i.forEach(function(c){var d=HE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Vn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=n,w=i,A=w;e:for(;A!==null;){switch(A.tag){case 5:Ct=A.stateNode,bn=!1;break e;case 3:Ct=A.stateNode.containerInfo,bn=!0;break e;case 4:Ct=A.stateNode.containerInfo,bn=!0;break e}A=A.return}if(Ct===null)throw Error(t(160));Gm(g,w,d),Ct=null,bn=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(z){et(d,i,z)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Qm(i,n),i=i.sibling}function Qm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Vn(i,n),Jn(n),c&4){try{Oa(3,n,n.return),vu(3,n)}catch(he){et(n,n.return,he)}try{Oa(5,n,n.return)}catch(he){et(n,n.return,he)}}break;case 1:Vn(i,n),Jn(n),c&512&&a!==null&&co(a,a.return);break;case 5:if(Vn(i,n),Jn(n),c&512&&a!==null&&co(a,a.return),n.flags&32){var d=n.stateNode;try{Lr(d,"")}catch(he){et(n,n.return,he)}}if(c&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,w=a!==null?a.memoizedProps:g,A=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&Ho(d,g),Zo(A,w);var z=Zo(A,g);for(w=0;w<k.length;w+=2){var Q=k[w],J=k[w+1];Q==="style"?Yo(d,J):Q==="dangerouslySetInnerHTML"?Ko(d,J):Q==="children"?Lr(d,J):ne(d,Q,J,z)}switch(A){case"input":qo(d,g);break;case"textarea":Rs(d,g);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var re=g.value;re!=null?fr(d,!!g.multiple,re,!1):G!==!!g.multiple&&(g.defaultValue!=null?fr(d,!!g.multiple,g.defaultValue,!0):fr(d,!!g.multiple,g.multiple?[]:"",!1))}d[Ta]=g}catch(he){et(n,n.return,he)}}break;case 6:if(Vn(i,n),Jn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(he){et(n,n.return,he)}}break;case 3:if(Vn(i,n),Jn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{kn(i.containerInfo)}catch(he){et(n,n.return,he)}break;case 4:Vn(i,n),Jn(n);break;case 13:Vn(i,n),Jn(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Jh=$e())),c&4&&Km(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(Lt=(z=Lt)||Q,Vn(i,n),Lt=z):Vn(i,n),Jn(n),c&8192){if(z=n.memoizedState!==null,(n.stateNode.isHidden=z)&&!Q&&(n.mode&1)!==0)for(ae=n,Q=n.child;Q!==null;){for(J=ae=Q;ae!==null;){switch(G=ae,re=G.child,G.tag){case 0:case 11:case 14:case 15:Oa(4,G,G.return);break;case 1:co(G,G.return);var ue=G.stateNode;if(typeof ue.componentWillUnmount=="function"){c=G,a=G.return;try{i=c,ue.props=i.memoizedProps,ue.state=i.memoizedState,ue.componentWillUnmount()}catch(he){et(c,a,he)}}break;case 5:co(G,G.return);break;case 22:if(G.memoizedState!==null){Xm(J);continue}}re!==null?(re.return=G,ae=re):Xm(J)}Q=Q.sibling}e:for(Q=null,J=n;;){if(J.tag===5){if(Q===null){Q=J;try{d=J.stateNode,z?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=J.stateNode,k=J.memoizedProps.style,w=k!=null&&k.hasOwnProperty("display")?k.display:null,A.style.display=Qo("display",w))}catch(he){et(n,n.return,he)}}}else if(J.tag===6){if(Q===null)try{J.stateNode.nodeValue=z?"":J.memoizedProps}catch(he){et(n,n.return,he)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===n)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===n)break e;for(;J.sibling===null;){if(J.return===null||J.return===n)break e;Q===J&&(Q=null),J=J.return}Q===J&&(Q=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Vn(i,n),Jn(n),c&4&&Km(n);break;case 21:break;default:Vn(i,n),Jn(n)}}function Jn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(qm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Lr(d,""),c.flags&=-33);var g=Wm(n);Kh(n,g,d);break;case 3:case 4:var w=c.stateNode.containerInfo,A=Wm(n);Gh(n,A,w);break;default:throw Error(t(161))}}catch(k){et(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function LE(n,i,a){ae=n,Ym(n)}function Ym(n,i,a){for(var c=(n.mode&1)!==0;ae!==null;){var d=ae,g=d.child;if(d.tag===22&&c){var w=d.memoizedState!==null||yu;if(!w){var A=d.alternate,k=A!==null&&A.memoizedState!==null||Lt;A=yu;var z=Lt;if(yu=w,(Lt=k)&&!z)for(ae=d;ae!==null;)w=ae,k=w.child,w.tag===22&&w.memoizedState!==null?Zm(d):k!==null?(k.return=w,ae=k):Zm(d);for(;g!==null;)ae=g,Ym(g),g=g.sibling;ae=d,yu=A,Lt=z}Jm(n)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,ae=g):Jm(n)}}function Jm(n){for(;ae!==null;){var i=ae;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Lt||vu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Lt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:On(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Xp(i,g,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Xp(i,w,a)}break;case 5:var A=i.stateNode;if(a===null&&i.flags&4){a=A;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var z=i.alternate;if(z!==null){var Q=z.memoizedState;if(Q!==null){var J=Q.dehydrated;J!==null&&kn(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||i.flags&512&&Wh(i)}catch(G){et(i,i.return,G)}}if(i===n){ae=null;break}if(a=i.sibling,a!==null){a.return=i.return,ae=a;break}ae=i.return}}function Xm(n){for(;ae!==null;){var i=ae;if(i===n){ae=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ae=a;break}ae=i.return}}function Zm(n){for(;ae!==null;){var i=ae;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{vu(4,i)}catch(k){et(i,a,k)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(k){et(i,d,k)}}var g=i.return;try{Wh(i)}catch(k){et(i,g,k)}break;case 5:var w=i.return;try{Wh(i)}catch(k){et(i,w,k)}}}catch(k){et(i,i.return,k)}if(i===n){ae=null;break}var A=i.sibling;if(A!==null){A.return=i.return,ae=A;break}ae=i.return}}var ME=Math.ceil,_u=ce.ReactCurrentDispatcher,Qh=ce.ReactCurrentOwner,vn=ce.ReactCurrentBatchConfig,be=0,Tt=null,lt=null,Pt=0,un=0,ho=Kr(0),gt=0,ba=null,rs=0,wu=0,Yh=0,Va=null,Xt=null,Jh=0,fo=1/0,Pr=null,Eu=!1,Xh=null,ei=null,Tu=!1,ti=null,Iu=0,La=0,Zh=null,Su=-1,Au=0;function qt(){return(be&6)!==0?$e():Su!==-1?Su:Su=$e()}function ni(n){return(n.mode&1)===0?1:(be&2)!==0&&Pt!==0?Pt&-Pt:wE.transition!==null?(Au===0&&(Au=qi()),Au):(n=ke,n!==0||(n=window.event,n=n===void 0?16:ca(n.type)),n)}function Ln(n,i,a,c){if(50<La)throw La=0,Zh=null,Error(t(185));jr(n,a,c),((be&2)===0||n!==Tt)&&(n===Tt&&((be&2)===0&&(wu|=a),gt===4&&ri(n,Pt)),Zt(n,c),a===1&&be===0&&(i.mode&1)===0&&(fo=$e()+500,Zl&&Yr()))}function Zt(n,i){var a=n.callbackNode;gr(n,i);var c=Hi(n,n===Tt?Pt:0);if(c===0)a!==null&&sa(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&sa(a),i===1)n.tag===0?_E(tg.bind(null,n)):jp(tg.bind(null,n)),mE(function(){(be&6)===0&&Yr()}),a=null;else{switch(Br(c)){case 1:a=Bi;break;case 4:a=Mr;break;case 16:a=hn;break;case 536870912:a=Al;break;default:a=hn}a=ug(a,eg.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function eg(n,i){if(Su=-1,Au=0,(be&6)!==0)throw Error(t(327));var a=n.callbackNode;if(po()&&n.callbackNode!==a)return null;var c=Hi(n,n===Tt?Pt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Ru(n,c);else{i=c;var d=be;be|=2;var g=rg();(Tt!==n||Pt!==i)&&(Pr=null,fo=$e()+500,ss(n,i));do try{jE();break}catch(A){ng(n,A)}while(!0);yh(),_u.current=g,be=d,lt!==null?i=0:(Tt=null,Pt=0,i=gt)}if(i!==0){if(i===2&&(d=rn(n),d!==0&&(c=d,i=ed(n,d))),i===1)throw a=ba,ss(n,0),ri(n,c),Zt(n,$e()),a;if(i===6)ri(n,c);else{if(d=n.current.alternate,(c&30)===0&&!FE(d)&&(i=Ru(n,c),i===2&&(g=rn(n),g!==0&&(c=g,i=ed(n,g))),i===1))throw a=ba,ss(n,0),ri(n,c),Zt(n,$e()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:os(n,Xt,Pr);break;case 3:if(ri(n,c),(c&130023424)===c&&(i=Jh+500-$e(),10<i)){if(Hi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){qt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=oh(os.bind(null,n,Xt,Pr),i);break}os(n,Xt,Pr);break;case 4:if(ri(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var w=31-Bt(c);g=1<<w,w=i[w],w>d&&(d=w),c&=~g}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*ME(c/1960))-c,10<c){n.timeoutHandle=oh(os.bind(null,n,Xt,Pr),c);break}os(n,Xt,Pr);break;case 5:os(n,Xt,Pr);break;default:throw Error(t(329))}}}return Zt(n,$e()),n.callbackNode===a?eg.bind(null,n):null}function ed(n,i){var a=Va;return n.current.memoizedState.isDehydrated&&(ss(n,i).flags|=256),n=Ru(n,i),n!==2&&(i=Xt,Xt=a,i!==null&&td(i)),n}function td(n){Xt===null?Xt=n:Xt.push.apply(Xt,n)}function FE(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!Nn(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ri(n,i){for(i&=~Yh,i&=~wu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Bt(i),c=1<<a;n[a]=-1,i&=~c}}function tg(n){if((be&6)!==0)throw Error(t(327));po();var i=Hi(n,0);if((i&1)===0)return Zt(n,$e()),null;var a=Ru(n,i);if(n.tag!==0&&a===2){var c=rn(n);c!==0&&(i=c,a=ed(n,c))}if(a===1)throw a=ba,ss(n,0),ri(n,i),Zt(n,$e()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,os(n,Xt,Pr),Zt(n,$e()),null}function nd(n,i){var a=be;be|=1;try{return n(i)}finally{be=a,be===0&&(fo=$e()+500,Zl&&Yr())}}function is(n){ti!==null&&ti.tag===0&&(be&6)===0&&po();var i=be;be|=1;var a=vn.transition,c=ke;try{if(vn.transition=null,ke=1,n)return n()}finally{ke=c,vn.transition=a,be=i,(be&6)===0&&Yr()}}function rd(){un=ho.current,Ge(ho)}function ss(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,pE(a)),lt!==null)for(a=lt.return;a!==null;){var c=a;switch(dh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Jl();break;case 3:lo(),Ge(Qt),Ge(Ot),Ah();break;case 5:Ih(c);break;case 4:lo();break;case 13:Ge(Je);break;case 19:Ge(Je);break;case 10:vh(c.type._context);break;case 22:case 23:rd()}a=a.return}if(Tt=n,lt=n=ii(n.current,null),Pt=un=i,gt=0,ba=null,Yh=wu=rs=0,Xt=Va=null,es!==null){for(i=0;i<es.length;i++)if(a=es[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var w=g.next;g.next=d,c.next=w}a.pending=c}es=null}return n}function ng(n,i){do{var a=lt;try{if(yh(),uu.current=fu,cu){for(var c=Xe.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}cu=!1}if(ns=0,Et=mt=Xe=null,Pa=!1,ka=0,Qh.current=null,a===null||a.return===null){gt=1,ba=i,lt=null;break}e:{var g=n,w=a.return,A=a,k=i;if(i=Pt,A.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var z=k,Q=A,J=Q.tag;if((Q.mode&1)===0&&(J===0||J===11||J===15)){var G=Q.alternate;G?(Q.updateQueue=G.updateQueue,Q.memoizedState=G.memoizedState,Q.lanes=G.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var re=Cm(w);if(re!==null){re.flags&=-257,Pm(re,w,A,g,i),re.mode&1&&Rm(g,z,i),i=re,k=z;var ue=i.updateQueue;if(ue===null){var he=new Set;he.add(k),i.updateQueue=he}else ue.add(k);break e}else{if((i&1)===0){Rm(g,z,i),id();break e}k=Error(t(426))}}else if(Qe&&A.mode&1){var rt=Cm(w);if(rt!==null){(rt.flags&65536)===0&&(rt.flags|=256),Pm(rt,w,A,g,i),mh(uo(k,A));break e}}g=k=uo(k,A),gt!==4&&(gt=2),Va===null?Va=[g]:Va.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var M=Sm(g,k,i);Jp(g,M);break e;case 1:A=k;var N=g.type,U=g.stateNode;if((g.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(ei===null||!ei.has(U)))){g.flags|=65536,i&=-i,g.lanes|=i;var X=Am(g,A,i);Jp(g,X);break e}}g=g.return}while(g!==null)}sg(a)}catch(de){i=de,lt===a&&a!==null&&(lt=a=a.return);continue}break}while(!0)}function rg(){var n=_u.current;return _u.current=fu,n===null?fu:n}function id(){(gt===0||gt===3||gt===2)&&(gt=4),Tt===null||(rs&268435455)===0&&(wu&268435455)===0||ri(Tt,Pt)}function Ru(n,i){var a=be;be|=2;var c=rg();(Tt!==n||Pt!==i)&&(Pr=null,ss(n,i));do try{UE();break}catch(d){ng(n,d)}while(!0);if(yh(),be=a,_u.current=c,lt!==null)throw Error(t(261));return Tt=null,Pt=0,gt}function UE(){for(;lt!==null;)ig(lt)}function jE(){for(;lt!==null&&!Il();)ig(lt)}function ig(n){var i=lg(n.alternate,n,un);n.memoizedProps=n.pendingProps,i===null?sg(n):lt=i,Qh.current=null}function sg(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=DE(a,i,un),a!==null){lt=a;return}}else{if(a=OE(a,i),a!==null){a.flags&=32767,lt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gt=6,lt=null;return}}if(i=i.sibling,i!==null){lt=i;return}lt=i=n}while(i!==null);gt===0&&(gt=5)}function os(n,i,a){var c=ke,d=vn.transition;try{vn.transition=null,ke=1,zE(n,i,a,c)}finally{vn.transition=d,ke=c}return null}function zE(n,i,a,c){do po();while(ti!==null);if((be&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(ze(n,g),n===Tt&&(lt=Tt=null,Pt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Tu||(Tu=!0,ug(hn,function(){return po(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=vn.transition,vn.transition=null;var w=ke;ke=1;var A=be;be|=4,Qh.current=null,VE(n,a),Qm(a,n),aE(ih),Hr=!!rh,ih=rh=null,n.current=a,LE(a),zc(),be=A,ke=w,vn.transition=g}else n.current=a;if(Tu&&(Tu=!1,ti=n,Iu=d),g=n.pendingLanes,g===0&&(ei=null),Rl(a.stateNode),Zt(n,$e()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Eu)throw Eu=!1,n=Xh,Xh=null,n;return(Iu&1)!==0&&n.tag!==0&&po(),g=n.pendingLanes,(g&1)!==0?n===Zh?La++:(La=0,Zh=n):La=0,Yr(),null}function po(){if(ti!==null){var n=Br(Iu),i=vn.transition,a=ke;try{if(vn.transition=null,ke=16>n?16:n,ti===null)var c=!1;else{if(n=ti,ti=null,Iu=0,(be&6)!==0)throw Error(t(331));var d=be;for(be|=4,ae=n.current;ae!==null;){var g=ae,w=g.child;if((ae.flags&16)!==0){var A=g.deletions;if(A!==null){for(var k=0;k<A.length;k++){var z=A[k];for(ae=z;ae!==null;){var Q=ae;switch(Q.tag){case 0:case 11:case 15:Oa(8,Q,g)}var J=Q.child;if(J!==null)J.return=Q,ae=J;else for(;ae!==null;){Q=ae;var G=Q.sibling,re=Q.return;if(Hm(Q),Q===z){ae=null;break}if(G!==null){G.return=re,ae=G;break}ae=re}}}var ue=g.alternate;if(ue!==null){var he=ue.child;if(he!==null){ue.child=null;do{var rt=he.sibling;he.sibling=null,he=rt}while(he!==null)}}ae=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,ae=w;else e:for(;ae!==null;){if(g=ae,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Oa(9,g,g.return)}var M=g.sibling;if(M!==null){M.return=g.return,ae=M;break e}ae=g.return}}var N=n.current;for(ae=N;ae!==null;){w=ae;var U=w.child;if((w.subtreeFlags&2064)!==0&&U!==null)U.return=w,ae=U;else e:for(w=N;ae!==null;){if(A=ae,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:vu(9,A)}}catch(de){et(A,A.return,de)}if(A===w){ae=null;break e}var X=A.sibling;if(X!==null){X.return=A.return,ae=X;break e}ae=A.return}}if(be=d,Yr(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot($i,n)}catch{}c=!0}return c}finally{ke=a,vn.transition=i}}return!1}function og(n,i,a){i=uo(a,i),i=Sm(n,i,1),n=Xr(n,i,1),i=qt(),n!==null&&(jr(n,1,i),Zt(n,i))}function et(n,i,a){if(n.tag===3)og(n,n,a);else for(;i!==null;){if(i.tag===3){og(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ei===null||!ei.has(c))){n=uo(a,n),n=Am(i,n,1),i=Xr(i,n,1),n=qt(),i!==null&&(jr(i,1,n),Zt(i,n));break}}i=i.return}}function BE(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=qt(),n.pingedLanes|=n.suspendedLanes&a,Tt===n&&(Pt&a)===a&&(gt===4||gt===3&&(Pt&130023424)===Pt&&500>$e()-Jh?ss(n,0):Yh|=a),Zt(n,i)}function ag(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ls,Ls<<=1,(Ls&130023424)===0&&(Ls=4194304)));var a=qt();n=Ar(n,i),n!==null&&(jr(n,i,a),Zt(n,a))}function $E(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),ag(n,a)}function HE(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),ag(n,a)}var lg;lg=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Qt.current)Jt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Jt=!1,NE(n,i,a);Jt=(n.flags&131072)!==0}else Jt=!1,Qe&&(i.flags&1048576)!==0&&zp(i,tu,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;gu(n,i),n=i.pendingProps;var d=to(i,Ot.current);ao(i,a),d=Ph(null,i,c,n,d,a);var g=kh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Yt(c)?(g=!0,Xl(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Eh(i),d.updater=pu,i.stateNode=d,d._reactInternals=i,Vh(i,c,n,a),i=Uh(null,i,c,!0,g,a)):(i.tag=0,Qe&&g&&hh(i),Ht(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(gu(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=WE(c),n=On(c,n),d){case 0:i=Fh(null,i,c,n,a);break e;case 1:i=bm(null,i,c,n,a);break e;case 11:i=km(null,i,c,n,a);break e;case 14:i=xm(null,i,c,On(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),Fh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),bm(n,i,c,d,a);case 3:e:{if(Vm(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,d=g.element,Yp(n,i),au(i,c,null,a);var w=i.memoizedState;if(c=w.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=uo(Error(t(423)),i),i=Lm(n,i,c,a,d);break e}else if(c!==d){d=uo(Error(t(424)),i),i=Lm(n,i,c,a,d);break e}else for(ln=Gr(i.stateNode.containerInfo.firstChild),an=i,Qe=!0,Dn=null,a=Kp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(io(),c===d){i=Cr(n,i,a);break e}Ht(n,i,c,a)}i=i.child}return i;case 5:return Zp(i),n===null&&ph(i),c=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,w=d.children,sh(c,d)?w=null:g!==null&&sh(c,g)&&(i.flags|=32),Om(n,i),Ht(n,i,w,a),i.child;case 6:return n===null&&ph(i),null;case 13:return Mm(n,i,a);case 4:return Th(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=so(i,null,c,a):Ht(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),km(n,i,c,d,a);case 7:return Ht(n,i,i.pendingProps,a),i.child;case 8:return Ht(n,i,i.pendingProps.children,a),i.child;case 12:return Ht(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,g=i.memoizedProps,w=d.value,He(iu,c._currentValue),c._currentValue=w,g!==null)if(Nn(g.value,w)){if(g.children===d.children&&!Qt.current){i=Cr(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var A=g.dependencies;if(A!==null){w=g.child;for(var k=A.firstContext;k!==null;){if(k.context===c){if(g.tag===1){k=Rr(-1,a&-a),k.tag=2;var z=g.updateQueue;if(z!==null){z=z.shared;var Q=z.pending;Q===null?k.next=k:(k.next=Q.next,Q.next=k),z.pending=k}}g.lanes|=a,k=g.alternate,k!==null&&(k.lanes|=a),_h(g.return,a,i),A.lanes|=a;break}k=k.next}}else if(g.tag===10)w=g.type===i.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,A=w.alternate,A!==null&&(A.lanes|=a),_h(w,a,i),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===i){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Ht(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,ao(i,a),d=gn(d),c=c(d),i.flags|=1,Ht(n,i,c,a),i.child;case 14:return c=i.type,d=On(c,i.pendingProps),d=On(c.type,d),xm(n,i,c,d,a);case 15:return Nm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),gu(n,i),i.tag=1,Yt(c)?(n=!0,Xl(i)):n=!1,ao(i,a),Tm(i,c,d),Vh(i,c,d,a),Uh(null,i,c,!0,n,a);case 19:return Um(n,i,a);case 22:return Dm(n,i,a)}throw Error(t(156,i.tag))};function ug(n,i){return bs(n,i)}function qE(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(n,i,a,c){return new qE(n,i,a,c)}function sd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function WE(n){if(typeof n=="function")return sd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===Nt)return 14}return 2}function ii(n,i){var a=n.alternate;return a===null?(a=_n(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Cu(n,i,a,c,d,g){var w=2;if(c=n,typeof n=="function")sd(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case D:return as(a.children,d,g,i);case R:w=8,d|=8;break;case P:return n=_n(12,a,i,d|2),n.elementType=P,n.lanes=g,n;case C:return n=_n(13,a,i,d),n.elementType=C,n.lanes=g,n;case tt:return n=_n(19,a,i,d),n.elementType=tt,n.lanes=g,n;case je:return Pu(a,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:w=10;break e;case O:w=9;break e;case V:w=11;break e;case Nt:w=14;break e;case Dt:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=_n(w,a,i,d),i.elementType=n,i.type=c,i.lanes=g,i}function as(n,i,a,c){return n=_n(7,n,c,i),n.lanes=a,n}function Pu(n,i,a,c){return n=_n(22,n,c,i),n.elementType=je,n.lanes=a,n.stateNode={isHidden:!1},n}function od(n,i,a){return n=_n(6,n,null,i),n.lanes=a,n}function ad(n,i,a){return i=_n(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function GE(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ur(0),this.expirationTimes=Ur(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ur(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ld(n,i,a,c,d,g,w,A,k){return n=new GE(n,i,a,A,k),i===1?(i=1,g===!0&&(i|=8)):i=0,g=_n(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eh(g),n}function KE(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function cg(n){if(!n)return Qr;n=n._reactInternals;e:{if(Sn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Yt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Yt(a))return Fp(n,a,i)}return i}function hg(n,i,a,c,d,g,w,A,k){return n=ld(a,c,!0,n,d,g,w,A,k),n.context=cg(null),a=n.current,c=qt(),d=ni(a),g=Rr(c,d),g.callback=i??null,Xr(a,g,d),n.current.lanes=d,jr(n,d,c),Zt(n,c),n}function ku(n,i,a,c){var d=i.current,g=qt(),w=ni(d);return a=cg(a),i.context===null?i.context=a:i.pendingContext=a,i=Rr(g,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Xr(d,i,w),n!==null&&(Ln(n,d,w,g),ou(n,d,w)),w}function xu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function dg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function ud(n,i){dg(n,i),(n=n.alternate)&&dg(n,i)}function QE(){return null}var fg=typeof reportError=="function"?reportError:function(n){console.error(n)};function cd(n){this._internalRoot=n}Nu.prototype.render=cd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ku(n,i,null,null)},Nu.prototype.unmount=cd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;is(function(){ku(null,n,null,null)}),i[Er]=null}};function Nu(n){this._internalRoot=n}Nu.prototype.unstable_scheduleHydration=function(n){if(n){var i=Nl();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Hn.length&&i!==0&&i<Hn[a].priority;a++);Hn.splice(a,0,n),a===0&&bl(n)}};function hd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Du(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function pg(){}function YE(n,i,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var z=xu(w);g.call(z)}}var w=hg(i,c,n,0,null,!1,!1,"",pg);return n._reactRootContainer=w,n[Er]=w.current,wa(n.nodeType===8?n.parentNode:n),is(),w}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var A=c;c=function(){var z=xu(k);A.call(z)}}var k=ld(n,0,!1,null,null,!1,!1,"",pg);return n._reactRootContainer=k,n[Er]=k.current,wa(n.nodeType===8?n.parentNode:n),is(function(){ku(i,k,a,c)}),k}function Ou(n,i,a,c,d){var g=a._reactRootContainer;if(g){var w=g;if(typeof d=="function"){var A=d;d=function(){var k=xu(w);A.call(k)}}ku(i,w,n,d)}else w=YE(a,i,n,d,c);return xu(w)}kl=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Fr(i.pendingLanes);a!==0&&(zr(i,a|1),Zt(i,$e()),(be&6)===0&&(fo=$e()+500,Yr()))}break;case 13:is(function(){var c=Ar(n,1);if(c!==null){var d=qt();Ln(c,n,1,d)}}),ud(n,1)}},Ms=function(n){if(n.tag===13){var i=Ar(n,134217728);if(i!==null){var a=qt();Ln(i,n,134217728,a)}ud(n,134217728)}},xl=function(n){if(n.tag===13){var i=ni(n),a=Ar(n,i);if(a!==null){var c=qt();Ln(a,n,i,c)}ud(n,i)}},Nl=function(){return ke},Dl=function(n,i){var a=ke;try{return ke=n,i()}finally{ke=a}},Ps=function(n,i,a){switch(i){case"input":if(qo(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Yl(c);if(!d)throw Error(t(90));Ts(c),qo(c,d)}}}break;case"textarea":Rs(n,a);break;case"select":i=a.value,i!=null&&fr(n,!!a.multiple,i,!1)}},Fi=nd,ta=is;var JE={usingClientEntryPoint:!1,Events:[Ia,Zs,Yl,Bn,ea,nd]},Ma={findFiberByHostInstance:Yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},XE={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ia(n),n===null?null:n.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance||QE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bu.isDisabled&&bu.supportsFiber)try{$i=bu.inject(XE),nn=bu}catch{}}return en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JE,en.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hd(i))throw Error(t(200));return KE(n,i,null,a)},en.createRoot=function(n,i){if(!hd(n))throw Error(t(299));var a=!1,c="",d=fg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=ld(n,1,!1,null,null,a,!1,c,d),n[Er]=i.current,wa(n.nodeType===8?n.parentNode:n),new cd(i)},en.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ia(i),n=n===null?null:n.stateNode,n},en.flushSync=function(n){return is(n)},en.hydrate=function(n,i,a){if(!Du(i))throw Error(t(200));return Ou(null,n,i,!0,a)},en.hydrateRoot=function(n,i,a){if(!hd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",w=fg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=hg(i,null,n,1,a??null,d,!1,g,w),n[Er]=i.current,wa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Nu(i)},en.render=function(n,i,a){if(!Du(i))throw Error(t(200));return Ou(null,n,i,!1,a)},en.unmountComponentAtNode=function(n){if(!Du(n))throw Error(t(40));return n._reactRootContainer?(is(function(){Ou(null,null,n,!1,function(){n._reactRootContainer=null,n[Er]=null})}),!0):!1},en.unstable_batchedUpdates=nd,en.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Du(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ou(n,i,a,!1,c)},en.version="18.3.1-next-f1338f8080-20240426",en}var Tg;function yv(){if(Tg)return pd.exports;Tg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),pd.exports=a0(),pd.exports}var Ig;function l0(){if(Ig)return Vu;Ig=1;var r=yv();return Vu.createRoot=r.createRoot,Vu.hydrateRoot=r.hydrateRoot,Vu}var u0=l0();const c0=mv(u0);yv();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xa(){return Xa=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},Xa.apply(this,arguments)}var di;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(di||(di={}));const Sg="popstate";function h0(r){r===void 0&&(r={});function e(s,o){let{pathname:l,search:h,hash:f}=s.location;return Dd("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:Xu(o)}return f0(e,t,null,r)}function st(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function vv(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function d0(){return Math.random().toString(36).substr(2,8)}function Ag(r,e){return{usr:r.state,key:r.key,idx:e}}function Dd(r,e,t,s){return t===void 0&&(t=null),Xa({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?Vo(e):e,{state:t,key:e&&e.key||s||d0()})}function Xu(r){let{pathname:e="/",search:t="",hash:s=""}=r;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function Vo(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substr(s),r=r.substr(0,s)),r&&(e.pathname=r)}return e}function f0(r,e,t,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:l=!1}=s,h=o.history,f=di.Pop,m=null,v=_();v==null&&(v=0,h.replaceState(Xa({},h.state,{idx:v}),""));function _(){return(h.state||{idx:null}).idx}function T(){f=di.Pop;let F=_(),le=F==null?null:F-v;v=F,m&&m({action:f,location:H.location,delta:le})}function I(F,le){f=di.Push;let ie=Dd(H.location,F,le);v=_()+1;let ne=Ag(ie,v),ce=H.createHref(ie);try{h.pushState(ne,"",ce)}catch(Ce){if(Ce instanceof DOMException&&Ce.name==="DataCloneError")throw Ce;o.location.assign(ce)}l&&m&&m({action:f,location:H.location,delta:1})}function j(F,le){f=di.Replace;let ie=Dd(H.location,F,le);v=_();let ne=Ag(ie,v),ce=H.createHref(ie);h.replaceState(ne,"",ce),l&&m&&m({action:f,location:H.location,delta:0})}function $(F){let le=o.location.origin!=="null"?o.location.origin:o.location.href,ie=typeof F=="string"?F:Xu(F);return ie=ie.replace(/ $/,"%20"),st(le,"No window.location.(origin|href) available to create URL for href: "+ie),new URL(ie,le)}let H={get action(){return f},get location(){return r(o,h)},listen(F){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(Sg,T),m=F,()=>{o.removeEventListener(Sg,T),m=null}},createHref(F){return e(o,F)},createURL:$,encodeLocation(F){let le=$(F);return{pathname:le.pathname,search:le.search,hash:le.hash}},push:I,replace:j,go(F){return h.go(F)}};return H}var Rg;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(Rg||(Rg={}));function p0(r,e,t){return t===void 0&&(t="/"),m0(r,e,t)}function m0(r,e,t,s){let o=typeof e=="string"?Vo(e):e,l=uf(o.pathname||"/",t);if(l==null)return null;let h=_v(r);g0(h);let f=null;for(let m=0;f==null&&m<h.length;++m){let v=P0(l);f=A0(h[m],v)}return f}function _v(r,e,t,s){e===void 0&&(e=[]),t===void 0&&(t=[]),s===void 0&&(s="");let o=(l,h,f)=>{let m={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};m.relativePath.startsWith("/")&&(st(m.relativePath.startsWith(s),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(s.length));let v=mi([s,m.relativePath]),_=t.concat(m);l.children&&l.children.length>0&&(st(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+v+'".')),_v(l.children,e,_,v)),!(l.path==null&&!l.index)&&e.push({path:v,score:I0(v,l.index),routesMeta:_})};return r.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let m of wv(l.path))o(l,h,m)}),e}function wv(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let h=wv(s.join("/")),f=[];return f.push(...h.map(m=>m===""?l:[l,m].join("/"))),o&&f.push(...h),f.map(m=>r.startsWith("/")&&m===""?"/":m)}function g0(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:S0(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const y0=/^:[\w-]+$/,v0=3,_0=2,w0=1,E0=10,T0=-2,Cg=r=>r==="*";function I0(r,e){let t=r.split("/"),s=t.length;return t.some(Cg)&&(s+=T0),e&&(s+=_0),t.filter(o=>!Cg(o)).reduce((o,l)=>o+(y0.test(l)?v0:l===""?w0:E0),s)}function S0(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function A0(r,e,t){let{routesMeta:s}=r,o={},l="/",h=[];for(let f=0;f<s.length;++f){let m=s[f],v=f===s.length-1,_=l==="/"?e:e.slice(l.length)||"/",T=R0({path:m.relativePath,caseSensitive:m.caseSensitive,end:v},_),I=m.route;if(!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:mi([l,T.pathname]),pathnameBase:D0(mi([l,T.pathnameBase])),route:I}),T.pathnameBase!=="/"&&(l=mi([l,T.pathnameBase]))}return h}function R0(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=C0(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((v,_,T)=>{let{paramName:I,isOptional:j}=_;if(I==="*"){let H=f[T]||"";h=l.slice(0,l.length-H.length).replace(/(.)\/+$/,"$1")}const $=f[T];return j&&!$?v[I]=void 0:v[I]=($||"").replace(/%2F/g,"/"),v},{}),pathname:l,pathnameBase:h,pattern:r}}function C0(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),vv(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,m)=>(s.push({paramName:f,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function P0(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return vv(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function uf(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function k0(r,e){e===void 0&&(e="/");let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?Vo(r):r;return{pathname:t?t.startsWith("/")?t:x0(t,e):e,search:O0(s),hash:b0(o)}}function x0(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function yd(r,e,t,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function N0(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function cf(r,e){let t=N0(r);return e?t.map((s,o)=>o===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function hf(r,e,t,s){s===void 0&&(s=!1);let o;typeof r=="string"?o=Vo(r):(o=Xa({},r),st(!o.pathname||!o.pathname.includes("?"),yd("?","pathname","search",o)),st(!o.pathname||!o.pathname.includes("#"),yd("#","pathname","hash",o)),st(!o.search||!o.search.includes("#"),yd("#","search","hash",o)));let l=r===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let T=e.length-1;if(!s&&h.startsWith("..")){let I=h.split("/");for(;I[0]==="..";)I.shift(),T-=1;o.pathname=I.join("/")}f=T>=0?e[T]:"/"}let m=k0(o,f),v=h&&h!=="/"&&h.endsWith("/"),_=(l||h===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(v||_)&&(m.pathname+="/"),m}const mi=r=>r.join("/").replace(/\/\/+/g,"/"),D0=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),O0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,b0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function V0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const Ev=["post","put","patch","delete"];new Set(Ev);const L0=["get",...Ev];new Set(L0);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Za(){return Za=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},Za.apply(this,arguments)}const df=K.createContext(null),M0=K.createContext(null),Ni=K.createContext(null),vc=K.createContext(null),br=K.createContext({outlet:null,matches:[],isDataRoute:!1}),Tv=K.createContext(null);function F0(r,e){let{relative:t}=e===void 0?{}:e;Lo()||st(!1);let{basename:s,navigator:o}=K.useContext(Ni),{hash:l,pathname:h,search:f}=Sv(r,{relative:t}),m=h;return s!=="/"&&(m=h==="/"?s:mi([s,h])),o.createHref({pathname:m,search:f,hash:l})}function Lo(){return K.useContext(vc)!=null}function ul(){return Lo()||st(!1),K.useContext(vc).location}function Iv(r){K.useContext(Ni).static||K.useLayoutEffect(r)}function _c(){let{isDataRoute:r}=K.useContext(br);return r?X0():U0()}function U0(){Lo()||st(!1);let r=K.useContext(df),{basename:e,future:t,navigator:s}=K.useContext(Ni),{matches:o}=K.useContext(br),{pathname:l}=ul(),h=JSON.stringify(cf(o,t.v7_relativeSplatPath)),f=K.useRef(!1);return Iv(()=>{f.current=!0}),K.useCallback(function(v,_){if(_===void 0&&(_={}),!f.current)return;if(typeof v=="number"){s.go(v);return}let T=hf(v,JSON.parse(h),l,_.relative==="path");r==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:mi([e,T.pathname])),(_.replace?s.replace:s.push)(T,_.state,_)},[e,s,h,l,r])}function j0(){let{matches:r}=K.useContext(br),e=r[r.length-1];return e?e.params:{}}function Sv(r,e){let{relative:t}=e===void 0?{}:e,{future:s}=K.useContext(Ni),{matches:o}=K.useContext(br),{pathname:l}=ul(),h=JSON.stringify(cf(o,s.v7_relativeSplatPath));return K.useMemo(()=>hf(r,JSON.parse(h),l,t==="path"),[r,h,l,t])}function z0(r,e){return B0(r,e)}function B0(r,e,t,s){Lo()||st(!1);let{navigator:o}=K.useContext(Ni),{matches:l}=K.useContext(br),h=l[l.length-1],f=h?h.params:{};h&&h.pathname;let m=h?h.pathnameBase:"/";h&&h.route;let v=ul(),_;if(e){var T;let F=typeof e=="string"?Vo(e):e;m==="/"||(T=F.pathname)!=null&&T.startsWith(m)||st(!1),_=F}else _=v;let I=_.pathname||"/",j=I;if(m!=="/"){let F=m.replace(/^\//,"").split("/");j="/"+I.replace(/^\//,"").split("/").slice(F.length).join("/")}let $=p0(r,{pathname:j}),H=G0($&&$.map(F=>Object.assign({},F,{params:Object.assign({},f,F.params),pathname:mi([m,o.encodeLocation?o.encodeLocation(F.pathname).pathname:F.pathname]),pathnameBase:F.pathnameBase==="/"?m:mi([m,o.encodeLocation?o.encodeLocation(F.pathnameBase).pathname:F.pathnameBase])})),l,t,s);return e&&H?K.createElement(vc.Provider,{value:{location:Za({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:di.Pop}},H):H}function $0(){let r=J0(),e=V0(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},e),t?K.createElement("pre",{style:o},t):null,null)}const H0=K.createElement($0,null);class q0 extends K.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?K.createElement(br.Provider,{value:this.props.routeContext},K.createElement(Tv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function W0(r){let{routeContext:e,match:t,children:s}=r,o=K.useContext(df);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),K.createElement(br.Provider,{value:e},s)}function G0(r,e,t,s){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),s===void 0&&(s=null),r==null){var l;if(!t)return null;if(t.errors)r=t.matches;else if((l=s)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let h=r,f=(o=t)==null?void 0:o.errors;if(f!=null){let _=h.findIndex(T=>T.route.id&&(f==null?void 0:f[T.route.id])!==void 0);_>=0||st(!1),h=h.slice(0,Math.min(h.length,_+1))}let m=!1,v=-1;if(t&&s&&s.v7_partialHydration)for(let _=0;_<h.length;_++){let T=h[_];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(v=_),T.route.id){let{loaderData:I,errors:j}=t,$=T.route.loader&&I[T.route.id]===void 0&&(!j||j[T.route.id]===void 0);if(T.route.lazy||$){m=!0,v>=0?h=h.slice(0,v+1):h=[h[0]];break}}}return h.reduceRight((_,T,I)=>{let j,$=!1,H=null,F=null;t&&(j=f&&T.route.id?f[T.route.id]:void 0,H=T.route.errorElement||H0,m&&(v<0&&I===0?(Z0("route-fallback"),$=!0,F=null):v===I&&($=!0,F=T.route.hydrateFallbackElement||null)));let le=e.concat(h.slice(0,I+1)),ie=()=>{let ne;return j?ne=H:$?ne=F:T.route.Component?ne=K.createElement(T.route.Component,null):T.route.element?ne=T.route.element:ne=_,K.createElement(W0,{match:T,routeContext:{outlet:_,matches:le,isDataRoute:t!=null},children:ne})};return t&&(T.route.ErrorBoundary||T.route.errorElement||I===0)?K.createElement(q0,{location:t.location,revalidation:t.revalidation,component:H,error:j,children:ie(),routeContext:{outlet:null,matches:le,isDataRoute:!0}}):ie()},null)}var Av=(function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r})(Av||{}),Rv=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(Rv||{});function K0(r){let e=K.useContext(df);return e||st(!1),e}function Q0(r){let e=K.useContext(M0);return e||st(!1),e}function Y0(r){let e=K.useContext(br);return e||st(!1),e}function Cv(r){let e=Y0(),t=e.matches[e.matches.length-1];return t.route.id||st(!1),t.route.id}function J0(){var r;let e=K.useContext(Tv),t=Q0(),s=Cv();return e!==void 0?e:(r=t.errors)==null?void 0:r[s]}function X0(){let{router:r}=K0(Av.UseNavigateStable),e=Cv(Rv.UseNavigateStable),t=K.useRef(!1);return Iv(()=>{t.current=!0}),K.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?r.navigate(o):r.navigate(o,Za({fromRouteId:e},l)))},[r,e])}const Pg={};function Z0(r,e,t){Pg[r]||(Pg[r]=!0)}function eT(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function Pv(r){let{to:e,replace:t,state:s,relative:o}=r;Lo()||st(!1);let{future:l,static:h}=K.useContext(Ni),{matches:f}=K.useContext(br),{pathname:m}=ul(),v=_c(),_=hf(e,cf(f,l.v7_relativeSplatPath),m,o==="path"),T=JSON.stringify(_);return K.useEffect(()=>v(JSON.parse(T),{replace:t,state:s,relative:o}),[v,T,o,t,s]),null}function ai(r){st(!1)}function tT(r){let{basename:e="/",children:t=null,location:s,navigationType:o=di.Pop,navigator:l,static:h=!1,future:f}=r;Lo()&&st(!1);let m=e.replace(/^\/*/,"/"),v=K.useMemo(()=>({basename:m,navigator:l,static:h,future:Za({v7_relativeSplatPath:!1},f)}),[m,f,l,h]);typeof s=="string"&&(s=Vo(s));let{pathname:_="/",search:T="",hash:I="",state:j=null,key:$="default"}=s,H=K.useMemo(()=>{let F=uf(_,m);return F==null?null:{location:{pathname:F,search:T,hash:I,state:j,key:$},navigationType:o}},[m,_,T,I,j,$,o]);return H==null?null:K.createElement(Ni.Provider,{value:v},K.createElement(vc.Provider,{children:t,value:H}))}function nT(r){let{children:e,location:t}=r;return z0(Od(e),t)}new Promise(()=>{});function Od(r,e){e===void 0&&(e=[]);let t=[];return K.Children.forEach(r,(s,o)=>{if(!K.isValidElement(s))return;let l=[...e,o];if(s.type===K.Fragment){t.push.apply(t,Od(s.props.children,l));return}s.type!==ai&&st(!1),!s.props.index||!s.props.children||st(!1);let h={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Od(s.props.children,l)),t.push(h)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bd(){return bd=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},bd.apply(this,arguments)}function rT(r,e){if(r==null)return{};var t={},s=Object.keys(r),o,l;for(l=0;l<s.length;l++)o=s[l],!(e.indexOf(o)>=0)&&(t[o]=r[o]);return t}function iT(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function sT(r,e){return r.button===0&&(!e||e==="_self")&&!iT(r)}const oT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],aT="6";try{window.__reactRouterVersion=aT}catch{}const lT="startTransition",kg=i0[lT];function uT(r){let{basename:e,children:t,future:s,window:o}=r,l=K.useRef();l.current==null&&(l.current=h0({window:o,v5Compat:!0}));let h=l.current,[f,m]=K.useState({action:h.action,location:h.location}),{v7_startTransition:v}=s||{},_=K.useCallback(T=>{v&&kg?kg(()=>m(T)):m(T)},[m,v]);return K.useLayoutEffect(()=>h.listen(_),[h,_]),K.useEffect(()=>eT(s),[s]),K.createElement(tT,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:h,future:s})}const cT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mo=K.forwardRef(function(e,t){let{onClick:s,relative:o,reloadDocument:l,replace:h,state:f,target:m,to:v,preventScrollReset:_,viewTransition:T}=e,I=rT(e,oT),{basename:j}=K.useContext(Ni),$,H=!1;if(typeof v=="string"&&hT.test(v)&&($=v,cT))try{let ne=new URL(window.location.href),ce=v.startsWith("//")?new URL(ne.protocol+v):new URL(v),Ce=uf(ce.pathname,j);ce.origin===ne.origin&&Ce!=null?v=Ce+ce.search+ce.hash:H=!0}catch{}let F=F0(v,{relative:o}),le=dT(v,{replace:h,state:f,target:m,preventScrollReset:_,relative:o,viewTransition:T});function ie(ne){s&&s(ne),ne.defaultPrevented||le(ne)}return K.createElement("a",bd({},I,{href:$||F,onClick:H||l?s:ie,ref:t,target:m}))});var xg;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(xg||(xg={}));var Ng;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(Ng||(Ng={}));function dT(r,e){let{target:t,replace:s,state:o,preventScrollReset:l,relative:h,viewTransition:f}=e===void 0?{}:e,m=_c(),v=ul(),_=Sv(r,{relative:h});return K.useCallback(T=>{if(sT(T,t)){T.preventDefault();let I=s!==void 0?s:Xu(v)===Xu(_);m(r,{replace:I,state:o,preventScrollReset:l,relative:h,viewTransition:f})}},[v,m,_,s,o,t,r,l,h,f])}const fT=()=>{};var Dg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},pT=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],m=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},xv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,m=o+2<r.length,v=m?r[o+2]:0,_=l>>2,T=(l&3)<<4|f>>4;let I=(f&15)<<2|v>>6,j=v&63;m||(j=64,h||(I=64)),s.push(t[_],t[T],t[I],t[j])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(kv(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):pT(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const v=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||v==null||T==null)throw new mT;const I=l<<2|f>>4;if(s.push(I),v!==64){const j=f<<4&240|v>>2;if(s.push(j),T!==64){const $=v<<6&192|T;s.push($)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class mT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gT=function(r){const e=kv(r);return xv.encodeByteArray(e,!0)},Zu=function(r){return gT(r).replace(/\./g,"")},Nv=function(r){try{return xv.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=()=>yT().__FIREBASE_DEFAULTS__,_T=()=>{if(typeof process>"u"||typeof Dg>"u")return;const r=Dg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},wT=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Nv(r[1]);return e&&JSON.parse(e)},wc=()=>{try{return fT()||vT()||_T()||wT()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Dv=r=>{var e,t;return(t=(e=wc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Ov=r=>{const e=Dv(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},bv=()=>{var r;return(r=wc())===null||r===void 0?void 0:r.config},Vv=r=>{var e;return(e=wc())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ff(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Zu(JSON.stringify(t)),Zu(JSON.stringify(h)),""].join(".")}const Wa={};function TT(){const r={prod:[],emulator:[]};for(const e of Object.keys(Wa))Wa[e]?r.emulator.push(e):r.prod.push(e);return r}function IT(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Og=!1;function pf(r,e){if(typeof window>"u"||typeof document>"u"||!vs(window.location.host)||Wa[r]===e||Wa[r]||Og)return;Wa[r]=e;function t(I){return`__firebase__banner__${I}`}const s="__firebase__banner",l=TT().prod.length>0;function h(){const I=document.getElementById(s);I&&I.remove()}function f(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function m(I,j){I.setAttribute("width","24"),I.setAttribute("id",j),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function v(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{Og=!0,h()},I}function _(I,j){I.setAttribute("id",j),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function T(){const I=IT(s),j=t("text"),$=document.getElementById(j)||document.createElement("span"),H=t("learnmore"),F=document.getElementById(H)||document.createElement("a"),le=t("preprendIcon"),ie=document.getElementById(le)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const ne=I.element;f(ne),_(F,H);const ce=v();m(ie,le),ne.append(ie,$,F,ce),document.body.appendChild(ne)}l?($.innerText="Preview backend disconnected.",ie.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ie.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",j)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ST(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function AT(){var r;const e=(r=wc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function CT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function PT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kT(){const r=zt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function xT(){return!AT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function NT(){try{return typeof indexedDB=="object"}catch{return!1}}function DT(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT="FirebaseError";class ur extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=OT,Object.setPrototypeOf(this,ur.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cl.prototype.create)}}class cl{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?bT(l,s):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new ur(o,f,s)}}function bT(r,e){return r.replace(VT,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const VT=/\{\$([^}]+)}/g;function LT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ps(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(bg(l)&&bg(h)){if(!ps(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function bg(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ja(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function za(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function MT(r,e){const t=new FT(r,e);return t.subscribe.bind(t)}class FT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");UT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=vd),o.error===void 0&&(o.error=vd),o.complete===void 0&&(o.complete=vd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function vd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(r){return r&&r._delegate?r._delegate:r}class Ii{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ET;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BT(e))try{this.getOrInitializeService({instanceIdentifier:ls})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=ls){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ls){return this.instances.has(e)}getOptions(e=ls){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zT(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ls){return this.component?this.component.multipleInstances?e:ls:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zT(r){return r===ls?void 0:r}function BT(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Pe||(Pe={}));const HT={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},qT=Pe.INFO,WT={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},GT=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=WT[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mf{constructor(e){this.name=e,this._logLevel=qT,this._logHandler=GT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const KT=(r,e)=>e.some(t=>r instanceof t);let Vg,Lg;function QT(){return Vg||(Vg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YT(){return Lg||(Lg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mv=new WeakMap,Vd=new WeakMap,Fv=new WeakMap,_d=new WeakMap,gf=new WeakMap;function JT(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(gi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Mv.set(t,r)}).catch(()=>{}),gf.set(e,r),e}function XT(r){if(Vd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Vd.set(r,e)}let Ld={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Vd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Fv.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return gi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function ZT(r){Ld=r(Ld)}function eI(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(wd(this),e,...t);return Fv.set(s,e.sort?e.sort():[e]),gi(s)}:YT().includes(r)?function(...e){return r.apply(wd(this),e),gi(Mv.get(this))}:function(...e){return gi(r.apply(wd(this),e))}}function tI(r){return typeof r=="function"?eI(r):(r instanceof IDBTransaction&&XT(r),KT(r,QT())?new Proxy(r,Ld):r)}function gi(r){if(r instanceof IDBRequest)return JT(r);if(_d.has(r))return _d.get(r);const e=tI(r);return e!==r&&(_d.set(r,e),gf.set(e,r)),e}const wd=r=>gf.get(r);function nI(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=gi(h);return s&&h.addEventListener("upgradeneeded",m=>{s(gi(h.result),m.oldVersion,m.newVersion,gi(h.transaction),m)}),t&&h.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),f.then(m=>{l&&m.addEventListener("close",()=>l()),o&&m.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),f}const rI=["get","getKey","getAll","getAllKeys","count"],iI=["put","add","delete","clear"],Ed=new Map;function Mg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Ed.get(e))return Ed.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=iI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||rI.includes(t)))return;const l=async function(h,...f){const m=this.transaction(h,o?"readwrite":"readonly");let v=m.store;return s&&(v=v.index(f.shift())),(await Promise.all([v[t](...f),o&&m.done]))[0]};return Ed.set(e,l),l}ZT(r=>({...r,get:(e,t,s)=>Mg(e,t)||r.get(e,t,s),has:(e,t)=>!!Mg(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(oI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function oI(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Md="@firebase/app",Fg="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new mf("@firebase/app"),aI="@firebase/app-compat",lI="@firebase/analytics-compat",uI="@firebase/analytics",cI="@firebase/app-check-compat",hI="@firebase/app-check",dI="@firebase/auth",fI="@firebase/auth-compat",pI="@firebase/database",mI="@firebase/data-connect",gI="@firebase/database-compat",yI="@firebase/functions",vI="@firebase/functions-compat",_I="@firebase/installations",wI="@firebase/installations-compat",EI="@firebase/messaging",TI="@firebase/messaging-compat",II="@firebase/performance",SI="@firebase/performance-compat",AI="@firebase/remote-config",RI="@firebase/remote-config-compat",CI="@firebase/storage",PI="@firebase/storage-compat",kI="@firebase/firestore",xI="@firebase/ai",NI="@firebase/firestore-compat",DI="firebase",OI="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="[DEFAULT]",bI={[Md]:"fire-core",[aI]:"fire-core-compat",[uI]:"fire-analytics",[lI]:"fire-analytics-compat",[hI]:"fire-app-check",[cI]:"fire-app-check-compat",[dI]:"fire-auth",[fI]:"fire-auth-compat",[pI]:"fire-rtdb",[mI]:"fire-data-connect",[gI]:"fire-rtdb-compat",[yI]:"fire-fn",[vI]:"fire-fn-compat",[_I]:"fire-iid",[wI]:"fire-iid-compat",[EI]:"fire-fcm",[TI]:"fire-fcm-compat",[II]:"fire-perf",[SI]:"fire-perf-compat",[AI]:"fire-rc",[RI]:"fire-rc-compat",[CI]:"fire-gcs",[PI]:"fire-gcs-compat",[kI]:"fire-fst",[NI]:"fire-fst-compat",[xI]:"fire-vertex","fire-js":"fire-js",[DI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=new Map,VI=new Map,Ud=new Map;function Ug(r,e){try{r.container.addComponent(e)}catch(t){Nr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function ms(r){const e=r.name;if(Ud.has(e))return Nr.debug(`There were multiple attempts to register component ${e}.`),!1;Ud.set(e,r);for(const t of ec.values())Ug(t,r);for(const t of VI.values())Ug(t,r);return!0}function Ec(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function wn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yi=new cl("app","Firebase",LI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=OI;function Uv(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Fd,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw yi.create("bad-app-name",{appName:String(o)});if(t||(t=bv()),!t)throw yi.create("no-options");const l=ec.get(o);if(l){if(ps(t,l.options)&&ps(s,l.config))return l;throw yi.create("duplicate-app",{appName:o})}const h=new $T(o);for(const m of Ud.values())h.addComponent(m);const f=new MI(t,s,h);return ec.set(o,f),f}function yf(r=Fd){const e=ec.get(r);if(!e&&r===Fd&&bv())return Uv();if(!e)throw yi.create("no-app",{appName:r});return e}function tr(r,e,t){var s;let o=(s=bI[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nr.warn(f.join(" "));return}ms(new Ii(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI="firebase-heartbeat-database",UI=1,el="firebase-heartbeat-store";let Td=null;function jv(){return Td||(Td=nI(FI,UI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(el)}catch(t){console.warn(t)}}}}).catch(r=>{throw yi.create("idb-open",{originalErrorMessage:r.message})})),Td}async function jI(r){try{const t=(await jv()).transaction(el),s=await t.objectStore(el).get(zv(r));return await t.done,s}catch(e){if(e instanceof ur)Nr.warn(e.message);else{const t=yi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nr.warn(t.message)}}}async function jg(r,e){try{const s=(await jv()).transaction(el,"readwrite");await s.objectStore(el).put(e,zv(r)),await s.done}catch(t){if(t instanceof ur)Nr.warn(t.message);else{const s=yi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Nr.warn(s.message)}}}function zv(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=1024,BI=30;class $I{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=zg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>BI){const h=WI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Nr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zg(),{heartbeatsToSend:s,unsentEntries:o}=HI(this._heartbeatsCache.heartbeats),l=Zu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Nr.warn(t),""}}}function zg(){return new Date().toISOString().substring(0,10)}function HI(r,e=zI){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Bg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Bg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class qI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NT()?DT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await jI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return jg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return jg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Bg(r){return Zu(JSON.stringify({version:2,heartbeats:r})).length}function WI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(r){ms(new Ii("platform-logger",e=>new sI(e),"PRIVATE")),ms(new Ii("heartbeat",e=>new $I(e),"PRIVATE")),tr(Md,Fg,r),tr(Md,Fg,"esm2017"),tr("fire-js","")}GI("");function vf(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function Bv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KI=Bv,$v=new cl("auth","Firebase",Bv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=new mf("@firebase/auth");function QI(r,...e){tc.logLevel<=Pe.WARN&&tc.warn(`Auth (${_s}): ${r}`,...e)}function $u(r,...e){tc.logLevel<=Pe.ERROR&&tc.error(`Auth (${_s}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(r,...e){throw _f(r,...e)}function nr(r,...e){return _f(r,...e)}function Hv(r,e,t){const s=Object.assign(Object.assign({},KI()),{[e]:t});return new cl("auth","Firebase",s).create(e,{appName:r.name})}function vi(r){return Hv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _f(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return $v.create(r,...e)}function ve(r,e,...t){if(!r)throw _f(e,...t)}function kr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw $u(e),new Error(e)}function Dr(r,e){r||kr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function YI(){return $g()==="http:"||$g()==="https:"}function $g(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YI()||CT()||"connection"in navigator)?navigator.onLine:!0}function XI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dr(t>e,"Short delay should be less than long delay!"),this.isMobile=ST()||PT()}get(){return JI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(r,e){Dr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],tS=new dl(3e4,6e4);function ws(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Di(r,e,t,s,o={}){return Wv(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const f=hl(Object.assign({key:r.config.apiKey},h)).slice(1),m=await r._getAdditionalHeaders();m["Content-Type"]="application/json",r.languageCode&&(m["X-Firebase-Locale"]=r.languageCode);const v=Object.assign({method:e,headers:m},l);return RT()||(v.referrerPolicy="no-referrer"),r.emulatorConfig&&vs(r.emulatorConfig.host)&&(v.credentials="include"),qv.fetch()(await Gv(r,r.config.apiHost,t,f),v)})}async function Wv(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},ZI),e);try{const o=new rS(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Lu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[m,v]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lu(r,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw Lu(r,"email-already-in-use",h);if(m==="USER_DISABLED")throw Lu(r,"user-disabled",h);const _=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Hv(r,_,v);Un(r,_)}}catch(o){if(o instanceof ur)throw o;Un(r,"network-request-failed",{message:String(o)})}}async function Tc(r,e,t,s,o={}){const l=await Di(r,e,t,s,o);return"mfaPendingCredential"in l&&Un(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function Gv(r,e,t,s){const o=`${e}${t}?${s}`,l=r,h=l.config.emulator?wf(r.config,o):`${r.config.apiScheme}://${o}`;return eS.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function nS(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class rS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(nr(this.auth,"network-request-failed")),tS.get())})}}function Lu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=nr(r,e,s);return o.customData._tokenResponse=t,o}function Hg(r){return r!==void 0&&r.enterprise!==void 0}class iS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return nS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function sS(r,e){return Di(r,"GET","/v2/recaptchaConfig",ws(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oS(r,e){return Di(r,"POST","/v1/accounts:delete",e)}async function nc(r,e){return Di(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aS(r,e=!1){const t=Wt(r),s=await t.getIdToken(e),o=Ef(s);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Ga(Id(o.auth_time)),issuedAtTime:Ga(Id(o.iat)),expirationTime:Ga(Id(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Id(r){return Number(r)*1e3}function Ef(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return $u("JWT malformed, contained fewer than 3 sections"),null;try{const o=Nv(t);return o?JSON.parse(o):($u("Failed to decode base64 JWT payload"),null)}catch(o){return $u("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function qg(r){const e=Ef(r);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tl(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ur&&lS(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function lS({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ga(this.lastLoginAt),this.creationTime=Ga(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rc(r){var e;const t=r.auth,s=await r.getIdToken(),o=await tl(r,nc(t,{idToken:s}));ve(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Kv(l.providerUserInfo):[],f=hS(r.providerData,h),m=r.isAnonymous,v=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),_=m?v:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new zd(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(r,T)}async function cS(r){const e=Wt(r);await rc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hS(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Kv(r){return r.map(e=>{var{providerId:t}=e,s=vf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dS(r,e){const t=await Wv(r,{},async()=>{const s=hl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await Gv(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:s};return r.emulatorConfig&&vs(r.emulatorConfig.host)&&(m.credentials="include"),qv.fetch()(h,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function fS(r,e){return Di(r,"POST","/v2/accounts:revokeToken",ws(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=qg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await dS(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new Eo;return s&&(ve(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ve(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ve(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Eo,this.toJSON())}_performRefresh(){return kr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(r,e){ve(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Mn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=vf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new zd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await tl(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return aS(this,e)}reload(){return cS(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await rc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wn(this.auth.app))return Promise.reject(vi(this.auth));const e=await this.getIdToken();return await tl(this,oS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,f,m,v,_;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,j=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,$=(h=t.photoURL)!==null&&h!==void 0?h:void 0,H=(f=t.tenantId)!==null&&f!==void 0?f:void 0,F=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,le=(v=t.createdAt)!==null&&v!==void 0?v:void 0,ie=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:ne,emailVerified:ce,isAnonymous:Ce,providerData:Te,stsTokenManager:D}=t;ve(ne&&D,e,"internal-error");const R=Eo.fromJSON(this.name,D);ve(typeof ne=="string",e,"internal-error"),oi(T,e.name),oi(I,e.name),ve(typeof ce=="boolean",e,"internal-error"),ve(typeof Ce=="boolean",e,"internal-error"),oi(j,e.name),oi($,e.name),oi(H,e.name),oi(F,e.name),oi(le,e.name),oi(ie,e.name);const P=new Mn({uid:ne,auth:e,email:I,emailVerified:ce,displayName:T,isAnonymous:Ce,photoURL:$,phoneNumber:j,tenantId:H,stsTokenManager:R,createdAt:le,lastLoginAt:ie});return Te&&Array.isArray(Te)&&(P.providerData=Te.map(x=>Object.assign({},x))),F&&(P._redirectEventId=F),P}static async _fromIdTokenResponse(e,t,s=!1){const o=new Eo;o.updateFromServerResponse(t);const l=new Mn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await rc(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Kv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Eo;f.updateFromIdToken(s);const m=new Mn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new zd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(m,v),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=new Map;function xr(r){Dr(r instanceof Function,"Expected a class definition");let e=Wg.get(r);return e?(Dr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Wg.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Qv.type="NONE";const Gg=Qv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(r,e,t){return`firebase:${r}:${e}:${t}`}class To{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Hu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Hu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await nc(this.auth,{idToken:e}).catch(()=>{});return t?Mn._fromGetAccountInfoResponse(this.auth,t,e):null}return Mn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new To(xr(Gg),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=o[0]||xr(Gg);const h=Hu(s,e.config.apiKey,e.name);let f=null;for(const v of t)try{const _=await v._get(h);if(_){let T;if(typeof _=="string"){const I=await nc(e,{idToken:_}).catch(()=>{});if(!I)break;T=await Mn._fromGetAccountInfoResponse(e,I,_)}else T=Mn._fromJSON(e,_);v!==l&&(f=T),l=v;break}}catch{}const m=o.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new To(l,e,s):(l=m[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async v=>{if(v!==l)try{await v._remove(h)}catch{}})),new To(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(t_(e))return"Blackberry";if(n_(e))return"Webos";if(Jv(e))return"Safari";if((e.includes("chrome/")||Xv(e))&&!e.includes("edge/"))return"Chrome";if(e_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Yv(r=zt()){return/firefox\//i.test(r)}function Jv(r=zt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xv(r=zt()){return/crios\//i.test(r)}function Zv(r=zt()){return/iemobile/i.test(r)}function e_(r=zt()){return/android/i.test(r)}function t_(r=zt()){return/blackberry/i.test(r)}function n_(r=zt()){return/webos/i.test(r)}function Tf(r=zt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function pS(r=zt()){var e;return Tf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mS(){return kT()&&document.documentMode===10}function r_(r=zt()){return Tf(r)||e_(r)||n_(r)||t_(r)||/windows phone/i.test(r)||Zv(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(r,e=[]){let t;switch(r){case"Browser":t=Kg(zt());break;case"Worker":t=`${Kg(zt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${_s}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,f)=>{try{const m=e(l);h(m)}catch(m){f(m)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yS(r,e={}){return Di(r,"GET","/v2/passwordPolicy",ws(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=6;class _S{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:vS,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,f;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(s=m.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(o=m.containsLowercaseLetter)!==null&&o!==void 0?o:!0),m.isValid&&(m.isValid=(l=m.containsUppercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(h=m.containsNumericCharacter)!==null&&h!==void 0?h:!0),m.isValid&&(m.isValid=(f=m.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),m}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qg(this),this.idTokenSubscription=new Qg(this),this.beforeStateQueue=new gS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$v,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xr(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await To.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await nc(this,{idToken:e}),s=await Mn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(wn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,m=await this.tryRedirectSignIn(e);(!h||h===f)&&(m!=null&&m.user)&&(o=m.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await rc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=XI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wn(this.app))return Promise.reject(vi(this));const t=e?Wt(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wn(this.app)?Promise.reject(vi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wn(this.app)?Promise.reject(vi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yS(this),t=new _S(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new cl("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await fS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xr(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await To.create(this,[xr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,s,o);return()=>{h=!0,m()}}else{const m=e.addObserver(t);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=i_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&QI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Mo(r){return Wt(r)}class Qg{constructor(e){this.auth=e,this.observer=null,this.addObserver=MT(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ic={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ES(r){Ic=r}function s_(r){return Ic.loadJS(r)}function TS(){return Ic.recaptchaEnterpriseScript}function IS(){return Ic.gapiScript}function SS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class AS{constructor(){this.enterprise=new RS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class RS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const CS="recaptcha-enterprise",o_="NO_RECAPTCHA";class PS{constructor(e){this.type=CS,this.auth=Mo(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{sS(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const v=new iS(m);return l.tenantId==null?l._agentRecaptchaConfig=v:l._tenantRecaptchaConfigs[l.tenantId]=v,h(v.siteKey)}}).catch(m=>{f(m)})})}function o(l,h,f){const m=window.grecaptcha;Hg(m)?m.enterprise.ready(()=>{m.enterprise.execute(l,{action:e}).then(v=>{h(v)}).catch(()=>{h(o_)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new AS().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(f=>{if(!t&&Hg(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let m=TS();m.length!==0&&(m+=f),s_(m).then(()=>{o(f,l,h)}).catch(v=>{h(v)})}}).catch(f=>{h(f)})})}}async function Yg(r,e,t,s=!1,o=!1){const l=new PS(r);let h;if(o)h=o_;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const m=f.phoneEnrollmentInfo.phoneNumber,v=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const m=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Jg(r,e,t,s,o){var l;if(!((l=r._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Yg(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Yg(r,e,t,t==="getOobCode");return s(r,f)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(r,e){const t=Ec(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(ps(l,e??{}))return o;Un(o,"already-initialized")}return t.initialize({options:e})}function xS(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(xr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function NS(r,e,t){const s=Mo(r);ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=a_(e),{host:h,port:f}=DS(e),m=f===null?"":`:${f}`,v={url:`${l}//${h}${m}/`},_=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ve(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ve(ps(v,s.config.emulator)&&ps(_,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=_,s.settings.appVerificationDisabledForTesting=!0,vs(h)?(ff(`${l}//${h}${m}`),pf("Auth",!0)):OS()}function a_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function DS(r){const e=a_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Xg(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:Xg(h)}}}function Xg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function OS(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return kr("not implemented")}_getIdTokenResponse(e){return kr("not implemented")}_linkToIdToken(e,t){return kr("not implemented")}_getReauthenticationResolver(e){return kr("not implemented")}}async function bS(r,e){return Di(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS(r,e){return Tc(r,"POST","/v1/accounts:signInWithPassword",ws(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LS(r,e){return Tc(r,"POST","/v1/accounts:signInWithEmailLink",ws(r,e))}async function MS(r,e){return Tc(r,"POST","/v1/accounts:signInWithEmailLink",ws(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl extends If{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new nl(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new nl(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jg(e,t,"signInWithPassword",VS);case"emailLink":return LS(e,{email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jg(e,s,"signUpPassword",bS);case"emailLink":return MS(e,{idToken:t,email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(r,e){return Tc(r,"POST","/v1/accounts:signInWithIdp",ws(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS="http://localhost";class gs extends If{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Un("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=vf(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new gs(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Io(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Io(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Io(e,t)}buildRequest(){const e={requestUri:FS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jS(r){const e=ja(za(r)).link,t=e?ja(za(e)).deep_link_id:null,s=ja(za(r)).deep_link_id;return(s?ja(za(s)).link:null)||s||t||e||r}class Sf{constructor(e){var t,s,o,l,h,f;const m=ja(za(e)),v=(t=m.apiKey)!==null&&t!==void 0?t:null,_=(s=m.oobCode)!==null&&s!==void 0?s:null,T=US((o=m.mode)!==null&&o!==void 0?o:null);ve(v&&_&&T,"argument-error"),this.apiKey=v,this.operation=T,this.code=_,this.continueUrl=(l=m.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=m.lang)!==null&&h!==void 0?h:null,this.tenantId=(f=m.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=jS(e);try{return new Sf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.providerId=Fo.PROVIDER_ID}static credential(e,t){return nl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Sf.parseLink(t);return ve(s,"argument-error"),nl._fromEmailAndCode(e,s.code,s.tenantId)}}Fo.PROVIDER_ID="password";Fo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl extends l_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends fl{constructor(){super("facebook.com")}static credential(e){return gs._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return li.credential(e.oauthAccessToken)}catch{return null}}}li.FACEBOOK_SIGN_IN_METHOD="facebook.com";li.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends fl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gs._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ui.credential(t,s)}catch{return null}}}ui.GOOGLE_SIGN_IN_METHOD="google.com";ui.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends fl{constructor(){super("github.com")}static credential(e){return gs._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ci.credential(e.oauthAccessToken)}catch{return null}}}ci.GITHUB_SIGN_IN_METHOD="github.com";ci.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends fl{constructor(){super("twitter.com")}static credential(e,t){return gs._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return hi.credential(t,s)}catch{return null}}}hi.TWITTER_SIGN_IN_METHOD="twitter.com";hi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await Mn._fromIdTokenResponse(e,s,o),h=Zg(s);return new Po({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Zg(s);return new Po({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Zg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic extends ur{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,ic.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new ic(e,t,s,o)}}function u_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?ic._fromErrorAndOperation(r,l,e,s):l})}async function zS(r,e,t=!1){const s=await tl(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Po._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BS(r,e,t=!1){const{auth:s}=r;if(wn(s.app))return Promise.reject(vi(s));const o="reauthenticate";try{const l=await tl(r,u_(s,o,e,r),t);ve(l.idToken,s,"internal-error");const h=Ef(l.idToken);ve(h,s,"internal-error");const{sub:f}=h;return ve(r.uid===f,s,"user-mismatch"),Po._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Un(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c_(r,e,t=!1){if(wn(r.app))return Promise.reject(vi(r));const s="signIn",o=await u_(r,s,e),l=await Po._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function $S(r,e){return c_(Mo(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HS(r){const e=Mo(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function qS(r,e,t){return wn(r.app)?Promise.reject(vi(r)):$S(Wt(r),Fo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&HS(r),s})}function WS(r,e,t,s){return Wt(r).onIdTokenChanged(e,t,s)}function GS(r,e,t){return Wt(r).beforeAuthStateChanged(e,t)}function KS(r,e,t,s){return Wt(r).onAuthStateChanged(e,t,s)}function QS(r){return Wt(r).signOut()}const sc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(sc,"1"),this.storage.removeItem(sc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=1e3,JS=10;class d_ extends h_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=r_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,m)=>{this.notifyListeners(h,m)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);mS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,JS):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},YS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}d_.type="LOCAL";const XS=d_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_ extends h_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}f_.type="SESSION";const p_=f_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Sc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(h).map(async v=>v(t.origin,l)),m=await ZS(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,m)=>{const v=Af("",20);o.port1.start();const _=setTimeout(()=>{m(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===v)switch(I.data.status){case"ack":clearTimeout(_),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(I.data.response);break;default:clearTimeout(_),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(){return window}function t1(r){rr().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(){return typeof rr().WorkerGlobalScope<"u"&&typeof rr().importScripts=="function"}async function n1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function r1(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function i1(){return m_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="firebaseLocalStorageDb",s1=1,oc="firebaseLocalStorage",y_="fbase_key";class pl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ac(r,e){return r.transaction([oc],e?"readwrite":"readonly").objectStore(oc)}function o1(){const r=indexedDB.deleteDatabase(g_);return new pl(r).toPromise()}function Bd(){const r=indexedDB.open(g_,s1);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(oc,{keyPath:y_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(oc)?e(s):(s.close(),await o1(),e(await Bd()))})})}async function ey(r,e,t){const s=Ac(r,!0).put({[y_]:e,value:t});return new pl(s).toPromise()}async function a1(r,e){const t=Ac(r,!1).get(e),s=await new pl(t).toPromise();return s===void 0?null:s.value}function ty(r,e){const t=Ac(r,!0).delete(e);return new pl(t).toPromise()}const l1=800,u1=3;class v_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>u1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return m_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sc._getInstance(i1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await n1(),!this.activeServiceWorker)return;this.sender=new e1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||r1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bd();return await ey(e,sc,"1"),await ty(e,sc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>ey(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>a1(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ty(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Ac(o,!1).getAll();return new pl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),l1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}v_.type="LOCAL";const c1=v_;new dl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(r,e){return e?xr(e):(ve(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf extends If{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Io(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Io(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Io(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function d1(r){return c_(r.auth,new Rf(r),r.bypassAuthState)}function f1(r){const{auth:e,user:t}=r;return ve(t,e,"internal-error"),BS(t,new Rf(r),r.bypassAuthState)}async function p1(r){const{auth:e,user:t}=r;return ve(t,e,"internal-error"),zS(t,new Rf(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return d1;case"linkViaPopup":case"linkViaRedirect":return p1;case"reauthViaPopup":case"reauthViaRedirect":return f1;default:Un(this.auth,"internal-error")}}resolve(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=new dl(2e3,1e4);class wo extends __{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,wo.currentPopupAction&&wo.currentPopupAction.cancel(),wo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){Dr(this.filter.length===1,"Popup operations only handle one event");const e=Af();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,m1.get())};e()}}wo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1="pendingRedirect",qu=new Map;class y1 extends __{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=qu.get(this.auth._key());if(!e){try{const s=await v1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}qu.set(this.auth._key(),e)}return this.bypassAuthState||qu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function v1(r,e){const t=E1(e),s=w1(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function _1(r,e){qu.set(r._key(),e)}function w1(r){return xr(r._redirectPersistence)}function E1(r){return Hu(g1,r.config.apiKey,r.name)}async function T1(r,e,t=!1){if(wn(r.app))return Promise.reject(vi(r));const s=Mo(r),o=h1(s,e),h=await new y1(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1=600*1e3;class S1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!A1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!w_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(nr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=I1&&this.cachedEventUids.clear(),this.cachedEventUids.has(ny(e))}saveEventToCache(e){this.cachedEventUids.add(ny(e)),this.lastProcessedEventTime=Date.now()}}function ny(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function w_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function A1(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return w_(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R1(r,e={}){return Di(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,P1=/^https?/;async function k1(r){if(r.config.emulator)return;const{authorizedDomains:e}=await R1(r);for(const t of e)try{if(x1(t))return}catch{}Un(r,"unauthorized-domain")}function x1(r){const e=jd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!P1.test(t))return!1;if(C1.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1=new dl(3e4,6e4);function ry(){const r=rr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function D1(r){return new Promise((e,t)=>{var s,o,l;function h(){ry(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ry(),t(nr(r,"network-request-failed"))},timeout:N1.get()})}if(!((o=(s=rr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=rr().gapi)===null||l===void 0)&&l.load)h();else{const f=SS("iframefcb");return rr()[f]=()=>{gapi.load?h():t(nr(r,"network-request-failed"))},s_(`${IS()}?onload=${f}`).catch(m=>t(m))}}).catch(e=>{throw Wu=null,e})}let Wu=null;function O1(r){return Wu=Wu||D1(r),Wu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1=new dl(5e3,15e3),V1="__/auth/iframe",L1="emulator/auth/iframe",M1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},F1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function U1(r){const e=r.config;ve(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?wf(e,L1):`https://${r.config.authDomain}/${V1}`,s={apiKey:e.apiKey,appName:r.name,v:_s},o=F1.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${hl(s).slice(1)}`}async function j1(r){const e=await O1(r),t=rr().gapi;return ve(t,r,"internal-error"),e.open({where:document.body,url:U1(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:M1,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=nr(r,"network-request-failed"),f=rr().setTimeout(()=>{l(h)},b1.get());function m(){rr().clearTimeout(f),o(s)}s.ping(m).then(m,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},B1=500,$1=600,H1="_blank",q1="http://localhost";class iy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function W1(r,e,t,s=B1,o=$1){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const m=Object.assign(Object.assign({},z1),{width:s.toString(),height:o.toString(),top:l,left:h}),v=zt().toLowerCase();t&&(f=Xv(v)?H1:t),Yv(v)&&(e=e||q1,m.scrollbars="yes");const _=Object.entries(m).reduce((I,[j,$])=>`${I}${j}=${$},`,"");if(pS(v)&&f!=="_self")return G1(e||"",f),new iy(null);const T=window.open(e||"",f,_);ve(T,r,"popup-blocked");try{T.focus()}catch{}return new iy(T)}function G1(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1="__/auth/handler",Q1="emulator/auth/handler",Y1=encodeURIComponent("fac");async function sy(r,e,t,s,o,l){ve(r.config.authDomain,r,"auth-domain-config-required"),ve(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:_s,eventId:o};if(e instanceof l_){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",LT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,T]of Object.entries({}))h[_]=T}if(e instanceof fl){const _=e.getScopes().filter(T=>T!=="");_.length>0&&(h.scopes=_.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const _ of Object.keys(f))f[_]===void 0&&delete f[_];const m=await r._getAppCheckToken(),v=m?`#${Y1}=${encodeURIComponent(m)}`:"";return`${J1(r)}?${hl(f).slice(1)}${v}`}function J1({config:r}){return r.emulator?wf(r,Q1):`https://${r.authDomain}/${K1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="webStorageSupport";class X1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=p_,this._completeRedirectFn=T1,this._overrideRedirectResult=_1}async _openPopup(e,t,s,o){var l;Dr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await sy(e,t,s,jd(),o);return W1(e,h,Af())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await sy(e,t,s,jd(),o);return t1(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Dr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await j1(e),s=new S1(e);return t.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Sd,{type:Sd},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Sd];h!==void 0&&t(!!h),Un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=k1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return r_()||Jv()||Tf()}}const Z1=X1;var oy="@firebase/auth",ay="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nA(r){ms(new Ii("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=s.options;ve(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:i_(r)},v=new wS(s,o,l,m);return xS(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ms(new Ii("auth-internal",e=>{const t=Mo(e.getProvider("auth").getImmediate());return(s=>new eA(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),tr(oy,ay,tA(r)),tr(oy,ay,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=300,iA=Vv("authIdTokenMaxAge")||rA;let ly=null;const sA=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>iA)return;const o=t==null?void 0:t.token;ly!==o&&(ly=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function oA(r=yf()){const e=Ec(r,"auth");if(e.isInitialized())return e.getImmediate();const t=kS(r,{popupRedirectResolver:Z1,persistence:[c1,XS,p_]}),s=Vv("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=sA(l.toString());GS(t,h,()=>h(t.currentUser)),WS(t,f=>h(f))}}const o=Dv("auth");return o&&NS(t,`http://${o}`),t}function aA(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}ES({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=nr("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",aA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nA("Browser");var lA="firebase",uA="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tr(lA,uA,"app");var uy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _i,E_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,R){function P(){}P.prototype=R.prototype,D.D=R.prototype,D.prototype=new P,D.prototype.constructor=D,D.C=function(x,O,V){for(var C=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)C[tt-2]=arguments[tt];return R.prototype[O].apply(x,C)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,R,P){P||(P=0);var x=Array(16);if(typeof R=="string")for(var O=0;16>O;++O)x[O]=R.charCodeAt(P++)|R.charCodeAt(P++)<<8|R.charCodeAt(P++)<<16|R.charCodeAt(P++)<<24;else for(O=0;16>O;++O)x[O]=R[P++]|R[P++]<<8|R[P++]<<16|R[P++]<<24;R=D.g[0],P=D.g[1],O=D.g[2];var V=D.g[3],C=R+(V^P&(O^V))+x[0]+3614090360&4294967295;R=P+(C<<7&4294967295|C>>>25),C=V+(O^R&(P^O))+x[1]+3905402710&4294967295,V=R+(C<<12&4294967295|C>>>20),C=O+(P^V&(R^P))+x[2]+606105819&4294967295,O=V+(C<<17&4294967295|C>>>15),C=P+(R^O&(V^R))+x[3]+3250441966&4294967295,P=O+(C<<22&4294967295|C>>>10),C=R+(V^P&(O^V))+x[4]+4118548399&4294967295,R=P+(C<<7&4294967295|C>>>25),C=V+(O^R&(P^O))+x[5]+1200080426&4294967295,V=R+(C<<12&4294967295|C>>>20),C=O+(P^V&(R^P))+x[6]+2821735955&4294967295,O=V+(C<<17&4294967295|C>>>15),C=P+(R^O&(V^R))+x[7]+4249261313&4294967295,P=O+(C<<22&4294967295|C>>>10),C=R+(V^P&(O^V))+x[8]+1770035416&4294967295,R=P+(C<<7&4294967295|C>>>25),C=V+(O^R&(P^O))+x[9]+2336552879&4294967295,V=R+(C<<12&4294967295|C>>>20),C=O+(P^V&(R^P))+x[10]+4294925233&4294967295,O=V+(C<<17&4294967295|C>>>15),C=P+(R^O&(V^R))+x[11]+2304563134&4294967295,P=O+(C<<22&4294967295|C>>>10),C=R+(V^P&(O^V))+x[12]+1804603682&4294967295,R=P+(C<<7&4294967295|C>>>25),C=V+(O^R&(P^O))+x[13]+4254626195&4294967295,V=R+(C<<12&4294967295|C>>>20),C=O+(P^V&(R^P))+x[14]+2792965006&4294967295,O=V+(C<<17&4294967295|C>>>15),C=P+(R^O&(V^R))+x[15]+1236535329&4294967295,P=O+(C<<22&4294967295|C>>>10),C=R+(O^V&(P^O))+x[1]+4129170786&4294967295,R=P+(C<<5&4294967295|C>>>27),C=V+(P^O&(R^P))+x[6]+3225465664&4294967295,V=R+(C<<9&4294967295|C>>>23),C=O+(R^P&(V^R))+x[11]+643717713&4294967295,O=V+(C<<14&4294967295|C>>>18),C=P+(V^R&(O^V))+x[0]+3921069994&4294967295,P=O+(C<<20&4294967295|C>>>12),C=R+(O^V&(P^O))+x[5]+3593408605&4294967295,R=P+(C<<5&4294967295|C>>>27),C=V+(P^O&(R^P))+x[10]+38016083&4294967295,V=R+(C<<9&4294967295|C>>>23),C=O+(R^P&(V^R))+x[15]+3634488961&4294967295,O=V+(C<<14&4294967295|C>>>18),C=P+(V^R&(O^V))+x[4]+3889429448&4294967295,P=O+(C<<20&4294967295|C>>>12),C=R+(O^V&(P^O))+x[9]+568446438&4294967295,R=P+(C<<5&4294967295|C>>>27),C=V+(P^O&(R^P))+x[14]+3275163606&4294967295,V=R+(C<<9&4294967295|C>>>23),C=O+(R^P&(V^R))+x[3]+4107603335&4294967295,O=V+(C<<14&4294967295|C>>>18),C=P+(V^R&(O^V))+x[8]+1163531501&4294967295,P=O+(C<<20&4294967295|C>>>12),C=R+(O^V&(P^O))+x[13]+2850285829&4294967295,R=P+(C<<5&4294967295|C>>>27),C=V+(P^O&(R^P))+x[2]+4243563512&4294967295,V=R+(C<<9&4294967295|C>>>23),C=O+(R^P&(V^R))+x[7]+1735328473&4294967295,O=V+(C<<14&4294967295|C>>>18),C=P+(V^R&(O^V))+x[12]+2368359562&4294967295,P=O+(C<<20&4294967295|C>>>12),C=R+(P^O^V)+x[5]+4294588738&4294967295,R=P+(C<<4&4294967295|C>>>28),C=V+(R^P^O)+x[8]+2272392833&4294967295,V=R+(C<<11&4294967295|C>>>21),C=O+(V^R^P)+x[11]+1839030562&4294967295,O=V+(C<<16&4294967295|C>>>16),C=P+(O^V^R)+x[14]+4259657740&4294967295,P=O+(C<<23&4294967295|C>>>9),C=R+(P^O^V)+x[1]+2763975236&4294967295,R=P+(C<<4&4294967295|C>>>28),C=V+(R^P^O)+x[4]+1272893353&4294967295,V=R+(C<<11&4294967295|C>>>21),C=O+(V^R^P)+x[7]+4139469664&4294967295,O=V+(C<<16&4294967295|C>>>16),C=P+(O^V^R)+x[10]+3200236656&4294967295,P=O+(C<<23&4294967295|C>>>9),C=R+(P^O^V)+x[13]+681279174&4294967295,R=P+(C<<4&4294967295|C>>>28),C=V+(R^P^O)+x[0]+3936430074&4294967295,V=R+(C<<11&4294967295|C>>>21),C=O+(V^R^P)+x[3]+3572445317&4294967295,O=V+(C<<16&4294967295|C>>>16),C=P+(O^V^R)+x[6]+76029189&4294967295,P=O+(C<<23&4294967295|C>>>9),C=R+(P^O^V)+x[9]+3654602809&4294967295,R=P+(C<<4&4294967295|C>>>28),C=V+(R^P^O)+x[12]+3873151461&4294967295,V=R+(C<<11&4294967295|C>>>21),C=O+(V^R^P)+x[15]+530742520&4294967295,O=V+(C<<16&4294967295|C>>>16),C=P+(O^V^R)+x[2]+3299628645&4294967295,P=O+(C<<23&4294967295|C>>>9),C=R+(O^(P|~V))+x[0]+4096336452&4294967295,R=P+(C<<6&4294967295|C>>>26),C=V+(P^(R|~O))+x[7]+1126891415&4294967295,V=R+(C<<10&4294967295|C>>>22),C=O+(R^(V|~P))+x[14]+2878612391&4294967295,O=V+(C<<15&4294967295|C>>>17),C=P+(V^(O|~R))+x[5]+4237533241&4294967295,P=O+(C<<21&4294967295|C>>>11),C=R+(O^(P|~V))+x[12]+1700485571&4294967295,R=P+(C<<6&4294967295|C>>>26),C=V+(P^(R|~O))+x[3]+2399980690&4294967295,V=R+(C<<10&4294967295|C>>>22),C=O+(R^(V|~P))+x[10]+4293915773&4294967295,O=V+(C<<15&4294967295|C>>>17),C=P+(V^(O|~R))+x[1]+2240044497&4294967295,P=O+(C<<21&4294967295|C>>>11),C=R+(O^(P|~V))+x[8]+1873313359&4294967295,R=P+(C<<6&4294967295|C>>>26),C=V+(P^(R|~O))+x[15]+4264355552&4294967295,V=R+(C<<10&4294967295|C>>>22),C=O+(R^(V|~P))+x[6]+2734768916&4294967295,O=V+(C<<15&4294967295|C>>>17),C=P+(V^(O|~R))+x[13]+1309151649&4294967295,P=O+(C<<21&4294967295|C>>>11),C=R+(O^(P|~V))+x[4]+4149444226&4294967295,R=P+(C<<6&4294967295|C>>>26),C=V+(P^(R|~O))+x[11]+3174756917&4294967295,V=R+(C<<10&4294967295|C>>>22),C=O+(R^(V|~P))+x[2]+718787259&4294967295,O=V+(C<<15&4294967295|C>>>17),C=P+(V^(O|~R))+x[9]+3951481745&4294967295,D.g[0]=D.g[0]+R&4294967295,D.g[1]=D.g[1]+(O+(C<<21&4294967295|C>>>11))&4294967295,D.g[2]=D.g[2]+O&4294967295,D.g[3]=D.g[3]+V&4294967295}s.prototype.u=function(D,R){R===void 0&&(R=D.length);for(var P=R-this.blockSize,x=this.B,O=this.h,V=0;V<R;){if(O==0)for(;V<=P;)o(this,D,V),V+=this.blockSize;if(typeof D=="string"){for(;V<R;)if(x[O++]=D.charCodeAt(V++),O==this.blockSize){o(this,x),O=0;break}}else for(;V<R;)if(x[O++]=D[V++],O==this.blockSize){o(this,x),O=0;break}}this.h=O,this.o+=R},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var R=1;R<D.length-8;++R)D[R]=0;var P=8*this.o;for(R=D.length-8;R<D.length;++R)D[R]=P&255,P/=256;for(this.u(D),D=Array(16),R=P=0;4>R;++R)for(var x=0;32>x;x+=8)D[P++]=this.g[R]>>>x&255;return D};function l(D,R){var P=f;return Object.prototype.hasOwnProperty.call(P,D)?P[D]:P[D]=R(D)}function h(D,R){this.h=R;for(var P=[],x=!0,O=D.length-1;0<=O;O--){var V=D[O]|0;x&&V==R||(P[O]=V,x=!1)}this.g=P}var f={};function m(D){return-128<=D&&128>D?l(D,function(R){return new h([R|0],0>R?-1:0)}):new h([D|0],0>D?-1:0)}function v(D){if(isNaN(D)||!isFinite(D))return T;if(0>D)return F(v(-D));for(var R=[],P=1,x=0;D>=P;x++)R[x]=D/P|0,P*=4294967296;return new h(R,0)}function _(D,R){if(D.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(D.charAt(0)=="-")return F(_(D.substring(1),R));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=v(Math.pow(R,8)),x=T,O=0;O<D.length;O+=8){var V=Math.min(8,D.length-O),C=parseInt(D.substring(O,O+V),R);8>V?(V=v(Math.pow(R,V)),x=x.j(V).add(v(C))):(x=x.j(P),x=x.add(v(C)))}return x}var T=m(0),I=m(1),j=m(16777216);r=h.prototype,r.m=function(){if(H(this))return-F(this).m();for(var D=0,R=1,P=0;P<this.g.length;P++){var x=this.i(P);D+=(0<=x?x:4294967296+x)*R,R*=4294967296}return D},r.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if($(this))return"0";if(H(this))return"-"+F(this).toString(D);for(var R=v(Math.pow(D,6)),P=this,x="";;){var O=ce(P,R).g;P=le(P,O.j(R));var V=((0<P.g.length?P.g[0]:P.h)>>>0).toString(D);if(P=O,$(P))return V+x;for(;6>V.length;)V="0"+V;x=V+x}},r.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function $(D){if(D.h!=0)return!1;for(var R=0;R<D.g.length;R++)if(D.g[R]!=0)return!1;return!0}function H(D){return D.h==-1}r.l=function(D){return D=le(this,D),H(D)?-1:$(D)?0:1};function F(D){for(var R=D.g.length,P=[],x=0;x<R;x++)P[x]=~D.g[x];return new h(P,~D.h).add(I)}r.abs=function(){return H(this)?F(this):this},r.add=function(D){for(var R=Math.max(this.g.length,D.g.length),P=[],x=0,O=0;O<=R;O++){var V=x+(this.i(O)&65535)+(D.i(O)&65535),C=(V>>>16)+(this.i(O)>>>16)+(D.i(O)>>>16);x=C>>>16,V&=65535,C&=65535,P[O]=C<<16|V}return new h(P,P[P.length-1]&-2147483648?-1:0)};function le(D,R){return D.add(F(R))}r.j=function(D){if($(this)||$(D))return T;if(H(this))return H(D)?F(this).j(F(D)):F(F(this).j(D));if(H(D))return F(this.j(F(D)));if(0>this.l(j)&&0>D.l(j))return v(this.m()*D.m());for(var R=this.g.length+D.g.length,P=[],x=0;x<2*R;x++)P[x]=0;for(x=0;x<this.g.length;x++)for(var O=0;O<D.g.length;O++){var V=this.i(x)>>>16,C=this.i(x)&65535,tt=D.i(O)>>>16,Nt=D.i(O)&65535;P[2*x+2*O]+=C*Nt,ie(P,2*x+2*O),P[2*x+2*O+1]+=V*Nt,ie(P,2*x+2*O+1),P[2*x+2*O+1]+=C*tt,ie(P,2*x+2*O+1),P[2*x+2*O+2]+=V*tt,ie(P,2*x+2*O+2)}for(x=0;x<R;x++)P[x]=P[2*x+1]<<16|P[2*x];for(x=R;x<2*R;x++)P[x]=0;return new h(P,0)};function ie(D,R){for(;(D[R]&65535)!=D[R];)D[R+1]+=D[R]>>>16,D[R]&=65535,R++}function ne(D,R){this.g=D,this.h=R}function ce(D,R){if($(R))throw Error("division by zero");if($(D))return new ne(T,T);if(H(D))return R=ce(F(D),R),new ne(F(R.g),F(R.h));if(H(R))return R=ce(D,F(R)),new ne(F(R.g),R.h);if(30<D.g.length){if(H(D)||H(R))throw Error("slowDivide_ only works with positive integers.");for(var P=I,x=R;0>=x.l(D);)P=Ce(P),x=Ce(x);var O=Te(P,1),V=Te(x,1);for(x=Te(x,2),P=Te(P,2);!$(x);){var C=V.add(x);0>=C.l(D)&&(O=O.add(P),V=C),x=Te(x,1),P=Te(P,1)}return R=le(D,O.j(R)),new ne(O,R)}for(O=T;0<=D.l(R);){for(P=Math.max(1,Math.floor(D.m()/R.m())),x=Math.ceil(Math.log(P)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),V=v(P),C=V.j(R);H(C)||0<C.l(D);)P-=x,V=v(P),C=V.j(R);$(V)&&(V=I),O=O.add(V),D=le(D,C)}return new ne(O,D)}r.A=function(D){return ce(this,D).h},r.and=function(D){for(var R=Math.max(this.g.length,D.g.length),P=[],x=0;x<R;x++)P[x]=this.i(x)&D.i(x);return new h(P,this.h&D.h)},r.or=function(D){for(var R=Math.max(this.g.length,D.g.length),P=[],x=0;x<R;x++)P[x]=this.i(x)|D.i(x);return new h(P,this.h|D.h)},r.xor=function(D){for(var R=Math.max(this.g.length,D.g.length),P=[],x=0;x<R;x++)P[x]=this.i(x)^D.i(x);return new h(P,this.h^D.h)};function Ce(D){for(var R=D.g.length+1,P=[],x=0;x<R;x++)P[x]=D.i(x)<<1|D.i(x-1)>>>31;return new h(P,D.h)}function Te(D,R){var P=R>>5;R%=32;for(var x=D.g.length-P,O=[],V=0;V<x;V++)O[V]=0<R?D.i(V+P)>>>R|D.i(V+P+1)<<32-R:D.i(V+P);return new h(O,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,E_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=_,_i=h}).apply(typeof uy<"u"?uy:typeof self<"u"?self:typeof window<"u"?window:{});var Mu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var T_,Ba,I_,Gu,$d,S_,A_,R_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mu=="object"&&Mu];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,p){if(p)e:{var y=s;u=u.split(".");for(var E=0;E<u.length-1;E++){var L=u[E];if(!(L in y))break e;y=y[L]}u=u[u.length-1],E=y[u],p=p(E),p!=E&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var y=0,E=!1,L={next:function(){if(!E&&y<u.length){var B=y++;return{value:p(B,u[B]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function m(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function v(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function _(u,p,y){return u.call.apply(u.bind,arguments)}function T(u,p,y){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),u.apply(p,L)}}return function(){return u.apply(p,arguments)}}function I(u,p,y){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:T,I.apply(null,arguments)}function j(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function $(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(E,L,B){for(var Z=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)Z[Ue-2]=arguments[Ue];return p.prototype[L].apply(E,Z)}}function H(u){const p=u.length;if(0<p){const y=Array(p);for(let E=0;E<p;E++)y[E]=u[E];return y}return[]}function F(u,p){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(m(E)){const L=u.length||0,B=E.length||0;u.length=L+B;for(let Z=0;Z<B;Z++)u[L+Z]=E[Z]}else u.push(E)}}class le{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function ie(u){return/^[\s\xa0]*$/.test(u)}function ne(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function ce(u){return ce[" "](u),u}ce[" "]=function(){};var Ce=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function Te(u,p,y){for(const E in u)p.call(y,u[E],E,u)}function D(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function R(u){const p={};for(const y in u)p[y]=u[y];return p}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(u,p){let y,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(y in E)u[y]=E[y];for(let B=0;B<P.length;B++)y=P[B],Object.prototype.hasOwnProperty.call(E,y)&&(u[y]=E[y])}}function O(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function V(u){f.setTimeout(()=>{throw u},0)}function C(){var u=me;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class tt{constructor(){this.h=this.g=null}add(p,y){const E=Nt.get();E.set(p,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Nt=new le(()=>new Dt,u=>u.reset());class Dt{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let je,ee=!1,me=new tt,se=()=>{const u=f.Promise.resolve(void 0);je=()=>{u.then(b)}};var b=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(y){V(y)}var p=Nt;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}ee=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Ie=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return u})();function Se(u,p){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(Ce){e:{try{ce(p.nodeName);var L=!0;break e}catch{}L=!1}L||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:xe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Se.aa.h.call(this)}}$(Se,fe);var xe={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function Be(u,p,y,E,L){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!E,this.ha=L,this.key=++Fe,this.da=this.fa=!1}function _t(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function hr(u){this.src=u,this.g={},this.h=0}hr.prototype.add=function(u,p,y,E,L){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var Z=Vr(u,p,E,L);return-1<Z?(p=u[Z],y||(p.fa=!1)):(p=new Be(p,this.src,B,!!E,L),p.fa=y,u.push(p)),p};function Ts(u,p){var y=p.type;if(y in u.g){var E=u.g[y],L=Array.prototype.indexOf.call(E,p,void 0),B;(B=0<=L)&&Array.prototype.splice.call(E,L,1),B&&(_t(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Vr(u,p,y,E){for(var L=0;L<u.length;++L){var B=u[L];if(!B.da&&B.listener==p&&B.capture==!!y&&B.ha==E)return L}return-1}var bi="closure_lm_"+(1e6*Math.random()|0),Is={};function Ho(u,p,y,E,L){if(Array.isArray(p)){for(var B=0;B<p.length;B++)Ho(u,p[B],y,E,L);return null}return y=Go(y),u&&u[Me]?u.K(p,y,v(E)?!!E.capture:!1,L):qo(u,p,y,!1,E,L)}function qo(u,p,y,E,L,B){if(!p)throw Error("Invalid event type");var Z=v(L)?!!L.capture:!!L,Ue=As(u);if(Ue||(u[bi]=Ue=new hr(u)),y=Ue.add(p,y,E,Z,B),y.proxy)return y;if(E=wl(),y.proxy=E,E.src=u,E.listener=y,u.addEventListener)Ie||(L=Z),L===void 0&&(L=!1),u.addEventListener(p.toString(),E,L);else if(u.attachEvent)u.attachEvent(fr(p.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function wl(){function u(y){return p.call(u.src,u.listener,y)}const p=Wo;return u}function Ss(u,p,y,E,L){if(Array.isArray(p))for(var B=0;B<p.length;B++)Ss(u,p[B],y,E,L);else E=v(E)?!!E.capture:!!E,y=Go(y),u&&u[Me]?(u=u.i,p=String(p).toString(),p in u.g&&(B=u.g[p],y=Vr(B,y,E,L),-1<y&&(_t(B[y]),Array.prototype.splice.call(B,y,1),B.length==0&&(delete u.g[p],u.h--)))):u&&(u=As(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Vr(p,y,E,L)),(y=-1<u?p[u]:null)&&dr(y))}function dr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Me])Ts(p.i,u);else{var y=u.type,E=u.proxy;p.removeEventListener?p.removeEventListener(y,E,u.capture):p.detachEvent?p.detachEvent(fr(y),E):p.addListener&&p.removeListener&&p.removeListener(E),(y=As(p))?(Ts(y,u),y.h==0&&(y.src=null,p[bi]=null)):_t(u)}}}function fr(u){return u in Is?Is[u]:Is[u]="on"+u}function Wo(u,p){if(u.da)u=!0;else{p=new Se(p,this);var y=u.listener,E=u.ha||u.src;u.fa&&dr(u),u=y.call(E,p)}return u}function As(u){return u=u[bi],u instanceof hr?u:null}var Rs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Go(u){return typeof u=="function"?u:(u[Rs]||(u[Rs]=function(p){return u.handleEvent(p)}),u[Rs])}function dt(){q.call(this),this.i=new hr(this),this.M=this,this.F=null}$(dt,q),dt.prototype[Me]=!0,dt.prototype.removeEventListener=function(u,p,y,E){Ss(this,u,p,y,E)};function ft(u,p){var y,E=u.F;if(E)for(y=[];E;E=E.F)y.push(E);if(u=u.M,E=p.type||p,typeof p=="string")p=new fe(p,u);else if(p instanceof fe)p.target=p.target||u;else{var L=p;p=new fe(E,u),x(p,L)}if(L=!0,y)for(var B=y.length-1;0<=B;B--){var Z=p.g=y[B];L=pr(Z,E,!0,p)&&L}if(Z=p.g=u,L=pr(Z,E,!0,p)&&L,L=pr(Z,E,!1,p)&&L,y)for(B=0;B<y.length;B++)Z=p.g=y[B],L=pr(Z,E,!1,p)&&L}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],E=0;E<y.length;E++)_t(y[E]);delete u.g[p],u.h--}}this.F=null},dt.prototype.K=function(u,p,y,E){return this.i.add(String(u),p,!1,y,E)},dt.prototype.L=function(u,p,y,E){return this.i.add(String(u),p,!0,y,E)};function pr(u,p,y,E){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var L=!0,B=0;B<p.length;++B){var Z=p[B];if(Z&&!Z.da&&Z.capture==y){var Ue=Z.listener,pt=Z.ha||Z.src;Z.fa&&Ts(u.i,Z),L=Ue.call(pt,E)!==!1&&L}}return L&&!E.defaultPrevented}function Ko(u,p,y){if(typeof u=="function")y&&(u=I(u,y));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function Lr(u){u.g=Ko(()=>{u.g=null,u.i&&(u.i=!1,Lr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Vi extends q{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Lr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Li(u){q.call(this),this.h=u,this.g={}}$(Li,q);var Qo=[];function Yo(u){Te(u.g,function(p,y){this.g.hasOwnProperty(y)&&dr(p)},u),u.g={}}Li.prototype.N=function(){Li.aa.N.call(this),Yo(this)},Li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Jo=f.JSON.stringify,Xo=f.JSON.parse,Zo=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Mi(){}Mi.prototype.h=null;function Cs(u){return u.h||(u.h=u.i())}function Ps(){}var cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zn(){fe.call(this,"d")}$(zn,fe);function ks(){fe.call(this,"c")}$(ks,fe);var Bn={},ea=null;function Fi(){return ea=ea||new dt}Bn.La="serverreachability";function ta(u){fe.call(this,Bn.La,u)}$(ta,fe);function mr(u){const p=Fi();ft(p,new ta(p))}Bn.STAT_EVENT="statevent";function na(u,p){fe.call(this,Bn.STAT_EVENT,u),this.stat=p}$(na,fe);function nt(u){const p=Fi();ft(p,new na(p,u))}Bn.Ma="timingevent";function xs(u,p){fe.call(this,Bn.Ma,u),this.size=p}$(xs,fe);function Tn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function Ui(){this.g=!0}Ui.prototype.xa=function(){this.g=!1};function ji(u,p,y,E,L,B){u.info(function(){if(u.g)if(B)for(var Z="",Ue=B.split("&"),pt=0;pt<Ue.length;pt++){var Ne=Ue[pt].split("=");if(1<Ne.length){var wt=Ne[0];Ne=Ne[1];var at=wt.split("_");Z=2<=at.length&&at[1]=="type"?Z+(wt+"="+Ne+"&"):Z+(wt+"=redacted&")}}else Z=null;else Z=B;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+p+`
`+y+`
`+Z})}function Ns(u,p,y,E,L,B,Z){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+p+`
`+y+`
`+B+" "+Z})}function In(u,p,y,E){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+jc(u,y)+(E?" "+E:"")})}function ra(u,p){u.info(function(){return"TIMEOUT: "+p})}Ui.prototype.info=function(){};function jc(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var E=y[u];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var B=L[0];if(B!="noop"&&B!="stop"&&B!="close")for(var Z=1;Z<L.length;Z++)L[Z]=""}}}}return Jo(y)}catch{return p}}var Ds={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},El={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sn;function zi(){}$(zi,Mi),zi.prototype.g=function(){return new XMLHttpRequest},zi.prototype.i=function(){return{}},Sn=new zi;function An(u,p,y,E){this.j=u,this.i=p,this.l=y,this.R=E||1,this.U=new Li(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tl}function Tl(){this.i=null,this.g="",this.h=!1}var ia={},Os={};function bs(u,p,y){u.L=1,u.v=zr(rn(p)),u.m=y,u.P=!0,sa(u,null)}function sa(u,p){u.F=Date.now(),$e(u),u.A=rn(u.v);var y=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),$r(y.i,"t",E),u.C=0,y=u.j.J,u.h=new Tl,u.g=jl(u.j,y?p:null,!u.m),0<u.O&&(u.M=new Vi(I(u.Y,u,u.g),u.O)),p=u.U,y=u.g,E=u.ca;var L="readystatechange";Array.isArray(L)||(L&&(Qo[0]=L.toString()),L=Qo);for(var B=0;B<L.length;B++){var Z=Ho(y,L[B],E||p.handleEvent,!1,p.h||p);if(!Z)break;p.g[Z.key]=Z}p=u.H?R(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),mr(),ji(u.i,u.u,u.A,u.l,u.R,u.m)}An.prototype.ca=function(u){u=u.target;const p=this.M;p&&Kt(u)==3?p.j():this.Y(u)},An.prototype.Y=function(u){try{if(u==this.g)e:{const at=Kt(this.g);var p=this.g.Ba();const fn=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||ha(this.g)))){this.J||at!=4||p==7||(p==8||0>=fn?mr(3):mr(2)),Bi(this);var y=this.g.Z();this.X=y;t:if(Il(this)){var E=ha(this.g);u="";var L=E.length,B=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),Mr(this);var Z="";break t}this.h.i=new f.TextDecoder}for(p=0;p<L;p++)this.h.h=!0,u+=this.h.i.decode(E[p],{stream:!(B&&p==L-1)});E.length=0,this.h.g+=u,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=y==200,Ns(this.i,this.u,this.A,this.l,this.R,at,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,pt=this.g;if((Ue=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ie(Ue)){var Ne=Ue;break t}}Ne=null}if(y=Ne)In(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oa(this,y);else{this.o=!1,this.s=3,nt(12),hn(this),Mr(this);break e}}if(this.P){y=!0;let on;for(;!this.J&&this.C<Z.length;)if(on=zc(this,Z),on==Os){at==4&&(this.s=4,nt(14),y=!1),In(this.i,this.l,null,"[Incomplete Response]");break}else if(on==ia){this.s=4,nt(15),In(this.i,this.l,Z,"[Invalid Chunk]"),y=!1;break}else In(this.i,this.l,on,null),oa(this,on);if(Il(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||Z.length!=0||this.h.h||(this.s=1,nt(16),y=!1),this.o=this.o&&y,!y)In(this.i,this.l,Z,"[Invalid Chunked Response]"),hn(this),Mr(this);else if(0<Z.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),fa(wt),wt.M=!0,nt(11))}}else In(this.i,this.l,Z,null),oa(this,Z);at==4&&hn(this),this.o&&!this.J&&(at==4?qs(this.j,this):(this.o=!1,$e(this)))}else js(this.g),y==400&&0<Z.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),hn(this),Mr(this)}}}catch{}finally{}};function Il(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function zc(u,p){var y=u.C,E=p.indexOf(`
`,y);return E==-1?Os:(y=Number(p.substring(y,E)),isNaN(y)?ia:(E+=1,E+y>p.length?Os:(p=p.slice(E,E+y),u.C=E+y,p)))}An.prototype.cancel=function(){this.J=!0,hn(this)};function $e(u){u.S=Date.now()+u.I,Sl(u,u.I)}function Sl(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Tn(I(u.ba,u),p)}function Bi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}An.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ra(this.i,this.A),this.L!=2&&(mr(),nt(17)),hn(this),this.s=2,Mr(this)):Sl(this,this.S-u)};function Mr(u){u.j.G==0||u.J||qs(u.j,u)}function hn(u){Bi(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Yo(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function oa(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||Bt(y.h,u))){if(!u.K&&Bt(y.h,u)&&y.G==3){try{var E=y.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Hs(y),xn(y);else break e;$s(y),nt(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=Tn(I(y.Za,y),6e3));if(1>=Rl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else wr(y,11)}else if((u.K||y.g==u)&&Hs(y),!ie(p))for(L=y.Da.g.parse(p),p=0;p<L.length;p++){let Ne=L[p];if(y.T=Ne[0],Ne=Ne[1],y.G==2)if(Ne[0]=="c"){y.K=Ne[1],y.ia=Ne[2];const wt=Ne[3];wt!=null&&(y.la=wt,y.j.info("VER="+y.la));const at=Ne[4];at!=null&&(y.Aa=at,y.j.info("SVER="+y.Aa));const fn=Ne[5];fn!=null&&typeof fn=="number"&&0<fn&&(E=1.5*fn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const on=u.g;if(on){const Qi=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qi){var B=E.h;B.g||Qi.indexOf("spdy")==-1&&Qi.indexOf("quic")==-1&&Qi.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(aa(B,B.h),B.h=null))}if(E.D){const Gs=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;Gs&&(E.ya=Gs,ze(E.I,E.D,Gs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var Z=u;if(E.qa=Ul(E,E.J?E.ia:null,E.W),Z.K){Cl(E.h,Z);var Ue=Z,pt=E.L;pt&&(Ue.I=pt),Ue.B&&(Bi(Ue),$e(Ue)),E.g=Z}else Ki(E);0<y.i.length&&Wn(y)}else Ne[0]!="stop"&&Ne[0]!="close"||wr(y,7);else y.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?wr(y,7):Rt(y):Ne[0]!="noop"&&y.l&&y.l.ta(Ne),y.v=0)}}mr(4)}catch{}}var Al=class{constructor(u,p){this.g=u,this.map=p}};function $i(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Rl(u){return u.h?1:u.g?u.g.size:0}function Bt(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function aa(u,p){u.g?u.g.add(p):u.h=p}function Cl(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}$i.prototype.cancel=function(){if(this.i=Pl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Pl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return H(u.i)}function Vs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(m(u)){for(var p=[],y=u.length,E=0;E<y;E++)p.push(u[E]);return p}p=[],y=0;for(E in u)p[y++]=u[E];return p}function Ls(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(m(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const E in u)p[y++]=E;return p}}}function Fr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(m(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=Ls(u),E=Vs(u),L=E.length,B=0;B<L;B++)p.call(void 0,E[B],y&&y[B],u)}var Hi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bc(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var E=u[y].indexOf("="),L=null;if(0<=E){var B=u[y].substring(0,E);L=u[y].substring(E+1)}else B=u[y];p(B,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function gr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof gr){this.h=u.h,qi(this,u.j),this.o=u.o,this.g=u.g,Ur(this,u.s),this.l=u.l;var p=u.i,y=new $n;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),jr(this,y),this.m=u.m}else u&&(p=String(u).match(Hi))?(this.h=!1,qi(this,p[1]||"",!0),this.o=ke(p[2]||""),this.g=ke(p[3]||"",!0),Ur(this,p[4]),this.l=ke(p[5]||"",!0),jr(this,p[6]||"",!0),this.m=ke(p[7]||"")):(this.h=!1,this.i=new $n(null,this.h))}gr.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Br(p,Ms,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Br(p,Ms,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Br(y,y.charAt(0)=="/"?Nl:xl,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Br(y,la)),u.join("")};function rn(u){return new gr(u)}function qi(u,p,y){u.j=y?ke(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Ur(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function jr(u,p,y){p instanceof $n?(u.i=p,Hn(u.i,u.h)):(y||(p=Br(p,Dl)),u.i=new $n(p,u.h))}function ze(u,p,y){u.i.set(p,y)}function zr(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function ke(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Br(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,kl),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function kl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ms=/[#\/\?@]/g,xl=/[#\?:]/g,Nl=/[#\?]/g,Dl=/[#\?@]/g,la=/#/g;function $n(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function At(u){u.g||(u.g=new Map,u.h=0,u.i&&Bc(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=$n.prototype,r.add=function(u,p){At(this),this.i=null,u=dn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function Rn(u,p){At(u),p=dn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Cn(u,p){return At(u),p=dn(u,p),u.g.has(p)}r.forEach=function(u,p){At(this),this.g.forEach(function(y,E){y.forEach(function(L){u.call(p,L,E,this)},this)},this)},r.na=function(){At(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let E=0;E<p.length;E++){const L=u[E];for(let B=0;B<L.length;B++)y.push(p[E])}return y},r.V=function(u){At(this);let p=[];if(typeof u=="string")Cn(this,u)&&(p=p.concat(this.g.get(dn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},r.set=function(u,p){return At(this),this.i=null,u=dn(this,u),Cn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function $r(u,p,y){Rn(u,p),0<y.length&&(u.i=null,u.g.set(dn(u,p),H(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var E=p[y];const B=encodeURIComponent(String(E)),Z=this.V(E);for(E=0;E<Z.length;E++){var L=B;Z[E]!==""&&(L+="="+encodeURIComponent(String(Z[E]))),u.push(L)}}return this.i=u.join("&")};function dn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Hn(u,p){p&&!u.j&&(At(u),u.i=null,u.g.forEach(function(y,E){var L=E.toLowerCase();E!=L&&(Rn(this,E),$r(this,L,y))},u)),u.j=p}function $c(u,p){const y=new Ui;if(f.Image){const E=new Image;E.onload=j(Gt,y,"TestLoadImage: loaded",!0,p,E),E.onerror=j(Gt,y,"TestLoadImage: error",!1,p,E),E.onabort=j(Gt,y,"TestLoadImage: abort",!1,p,E),E.ontimeout=j(Gt,y,"TestLoadImage: timeout",!1,p,E),f.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else p(!1)}function Ol(u,p){const y=new Ui,E=new AbortController,L=setTimeout(()=>{E.abort(),Gt(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:E.signal}).then(B=>{clearTimeout(L),B.ok?Gt(y,"TestPingServer: ok",!0,p):Gt(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),Gt(y,"TestPingServer: error",!1,p)})}function Gt(u,p,y,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(y)}catch{}}function Hc(){this.g=new Zo}function bl(u,p,y){const E=y||"";try{Fr(u,function(L,B){let Z=L;v(L)&&(Z=Jo(L)),p.push(E+B+"="+encodeURIComponent(Z))})}catch(L){throw p.push(E+"type="+encodeURIComponent("_badmap")),L}}function yr(u){this.l=u.Ub||null,this.j=u.eb||!1}$(yr,Mi),yr.prototype.g=function(){return new Wi(this.l,this.j)},yr.prototype.i=(function(u){return function(){return u}})({});function Wi(u,p){dt.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Wi,dt),r=Wi.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,kn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Pn(this):kn(this),this.readyState==3&&Vl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Pn(this))},r.Qa=function(u){this.g&&(this.response=u,Pn(this))},r.ga=function(){this.g&&Pn(this)};function Pn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,kn(u)}r.setRequestHeader=function(u,p){this.u.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function kn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function vr(u){let p="";return Te(u,function(y,E){p+=E,p+=":",p+=y,p+=`\r
`}),p}function Hr(u,p,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=vr(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):ze(u,p,y))}function Ke(u){dt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(Ke,dt);var qc=/^https?$/i,ua=["POST","PUT"];r=Ke.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,p,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sn.g(),this.v=this.o?Cs(this.o):Cs(Sn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(B){Gi(this,B);return}if(u=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)y.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const B of E.keys())y.set(B,E.get(B));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(B=>B.toLowerCase()=="content-type"),L=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ua,p,void 0))||E||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,Z]of y)this.g.setRequestHeader(B,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Us(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){Gi(this,B)}};function Gi(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Fs(u),sn(u)}function Fs(u){u.A||(u.A=!0,ft(u,"complete"),ft(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ft(this,"complete"),ft(this,"abort"),sn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sn(this,!0)),Ke.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ca(this):this.bb())},r.bb=function(){ca(this)};function ca(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Kt(u)!=4||u.Z()!=2)){if(u.u&&Kt(u)==4)Ko(u.Ea,0,u);else if(ft(u,"readystatechange"),Kt(u)==4){u.h=!1;try{const Z=u.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var E;if(E=Z===0){var L=String(u.D).match(Hi)[1]||null;!L&&f.self&&f.self.location&&(L=f.self.location.protocol.slice(0,-1)),E=!qc.test(L?L.toLowerCase():"")}y=E}if(y)ft(u,"complete"),ft(u,"success");else{u.m=6;try{var B=2<Kt(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",Fs(u)}}finally{sn(u)}}}}function sn(u,p){if(u.g){Us(u);const y=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||ft(u,"ready");try{y.onreadystatechange=E}catch{}}}function Us(u){u.I&&(f.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Kt(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Xo(p)}};function ha(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function js(u){const p={};u=(u.g&&2<=Kt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(ie(u[E]))continue;var y=O(u[E]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const B=p[L]||[];p[L]=B,B.push(y)}D(p,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qn(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function da(u){this.Aa=0,this.i=[],this.j=new Ui,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qn("baseRetryDelayMs",5e3,u),this.cb=qn("retryDelaySeedMs",1e4,u),this.Wa=qn("forwardChannelMaxRetries",2,u),this.wa=qn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new $i(u&&u.concurrentRequestLimit),this.Da=new Hc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=da.prototype,r.la=8,r.G=1,r.connect=function(u,p,y,E){nt(0),this.W=u,this.H=p||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=Ul(this,null,this.W),Wn(this)};function Rt(u){if(zs(u),u.G==3){var p=u.U++,y=rn(u.I);if(ze(y,"SID",u.K),ze(y,"RID",p),ze(y,"TYPE","terminate"),_r(u,y),p=new An(u,u.j,p),p.L=2,p.v=zr(rn(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=jl(p.j,null),p.g.ea(p.v)),p.F=Date.now(),$e(p)}Fl(u)}function xn(u){u.g&&(fa(u),u.g.cancel(),u.g=null)}function zs(u){xn(u),u.u&&(f.clearTimeout(u.u),u.u=null),Hs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Wn(u){if(!nn(u.h)&&!u.s){u.s=!0;var p=u.Ga;je||se(),ee||(je(),ee=!0),me.add(p,u),u.B=0}}function Wc(u,p){return Rl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Tn(I(u.Ga,u,p),Ml(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new An(this,this.j,u);let B=this.o;if(this.S&&(B?(B=R(B),x(B,this.S)):B=this.S),this.m!==null||this.O||(L.H=B,B=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=qr(this,L,p),y=rn(this.I),ze(y,"RID",u),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),_r(this,y),B&&(this.O?p="headers="+encodeURIComponent(String(vr(B)))+"&"+p:this.m&&Hr(y,this.m,B)),aa(this.h,L),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",p),ze(y,"SID","null"),L.T=!0,bs(L,y,null)):bs(L,y,p),this.G=2}}else this.G==3&&(u?Bs(this,u):this.i.length==0||nn(this.h)||Bs(this))};function Bs(u,p){var y;p?y=p.l:y=u.U++;const E=rn(u.I);ze(E,"SID",u.K),ze(E,"RID",y),ze(E,"AID",u.T),_r(u,E),u.m&&u.o&&Hr(E,u.m,u.o),y=new An(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=qr(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),aa(u.h,y),bs(y,E,p)}function _r(u,p){u.H&&Te(u.H,function(y,E){ze(p,E,y)}),u.l&&Fr({},function(y,E){ze(p,E,y)})}function qr(u,p,y){y=Math.min(u.i.length,y);var E=u.l?I(u.l.Na,u.l,u):null;e:{var L=u.i;let B=-1;for(;;){const Z=["count="+y];B==-1?0<y?(B=L[0].g,Z.push("ofs="+B)):B=0:Z.push("ofs="+B);let Ue=!0;for(let pt=0;pt<y;pt++){let Ne=L[pt].g;const wt=L[pt].map;if(Ne-=B,0>Ne)B=Math.max(0,L[pt].g-100),Ue=!1;else try{bl(wt,Z,"req"+Ne+"_")}catch{E&&E(wt)}}if(Ue){E=Z.join("&");break e}}}return u=u.i.splice(0,y),p.D=u,E}function Ki(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;je||se(),ee||(je(),ee=!0),me.add(p,u),u.v=0}}function $s(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Tn(I(u.Fa,u),Ml(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Ll(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Tn(I(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),xn(this),Ll(this))};function fa(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Ll(u){u.g=new An(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=rn(u.qa);ze(p,"RID","rpc"),ze(p,"SID",u.K),ze(p,"AID",u.T),ze(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(p,"TO",u.ja),ze(p,"TYPE","xmlhttp"),_r(u,p),u.m&&u.o&&Hr(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=zr(rn(p)),y.m=null,y.P=!0,sa(y,u)}r.Za=function(){this.C!=null&&(this.C=null,xn(this),$s(this),nt(19))};function Hs(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function qs(u,p){var y=null;if(u.g==p){Hs(u),fa(u),u.g=null;var E=2}else if(Bt(u.h,p))y=p.D,Cl(u.h,p),E=1;else return;if(u.G!=0){if(p.o)if(E==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var L=u.B;E=Fi(),ft(E,new xs(E,y)),Wn(u)}else Ki(u);else if(L=p.s,L==3||L==0&&0<p.X||!(E==1&&Wc(u,p)||E==2&&$s(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),L){case 1:wr(u,5);break;case 4:wr(u,10);break;case 3:wr(u,6);break;default:wr(u,2)}}}function Ml(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function wr(u,p){if(u.j.info("Error code "+p),p==2){var y=I(u.fb,u),E=u.Xa;const L=!E;E=new gr(E||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||qi(E,"https"),zr(E),L?$c(E.toString(),y):Ol(E.toString(),y)}else nt(2);u.G=0,u.l&&u.l.sa(p),Fl(u),zs(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Fl(u){if(u.G=0,u.ka=[],u.l){const p=Pl(u.h);(p.length!=0||u.i.length!=0)&&(F(u.ka,p),F(u.ka,u.i),u.h.i.length=0,H(u.i),u.i.length=0),u.l.ra()}}function Ul(u,p,y){var E=y instanceof gr?rn(y):new gr(y);if(E.g!="")p&&(E.g=p+"."+E.g),Ur(E,E.s);else{var L=f.location;E=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;var B=new gr(null);E&&qi(B,E),p&&(B.g=p),L&&Ur(B,L),y&&(B.l=y),E=B}return y=u.D,p=u.ya,y&&p&&ze(E,y,p),ze(E,"VER",u.la),_r(u,E),E}function jl(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Ke(new yr({eb:y})):new Ke(u.pa),p.Ha(u.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function pa(){}r=pa.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ws(){}Ws.prototype.g=function(u,p){return new $t(u,p)};function $t(u,p){dt.call(this),this.g=new da(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!ie(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!ie(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Gn(this)}$($t,dt),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){Rt(this.g)},$t.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Jo(u),u=y);p.i.push(new Al(p.Ya++,u)),p.G==3&&Wn(p)},$t.prototype.N=function(){this.g.l=null,delete this.j,Rt(this.g),delete this.g,$t.aa.N.call(this)};function zl(u){zn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}$(zl,zn);function Bl(){ks.call(this),this.status=1}$(Bl,ks);function Gn(u){this.g=u}$(Gn,pa),Gn.prototype.ua=function(){ft(this.g,"a")},Gn.prototype.ta=function(u){ft(this.g,new zl(u))},Gn.prototype.sa=function(u){ft(this.g,new Bl)},Gn.prototype.ra=function(){ft(this.g,"b")},Ws.prototype.createWebChannel=Ws.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,R_=function(){return new Ws},A_=function(){return Fi()},S_=Bn,$d={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ds.NO_ERROR=0,Ds.TIMEOUT=8,Ds.HTTP_ERROR=6,Gu=Ds,El.COMPLETE="complete",I_=El,Ps.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Ba=Ps,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,T_=Ke}).apply(typeof Mu<"u"?Mu:typeof self<"u"?self:typeof window<"u"?window:{});const cy="@firebase/firestore",hy="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new mf("@firebase/firestore");function go(){return ys.logLevel}function oe(r,...e){if(ys.logLevel<=Pe.DEBUG){const t=e.map(Cf);ys.debug(`Firestore (${Uo}): ${r}`,...t)}}function Or(r,...e){if(ys.logLevel<=Pe.ERROR){const t=e.map(Cf);ys.error(`Firestore (${Uo}): ${r}`,...t)}}function Si(r,...e){if(ys.logLevel<=Pe.WARN){const t=e.map(Cf);ys.warn(`Firestore (${Uo}): ${r}`,...t)}}function Cf(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,C_(r,s,t)}function C_(r,e,t){let s=`FIRESTORE (${Uo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Or(s),new Error(s)}function Ze(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||C_(e,o,s)}function Oe(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends ur{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ft.UNAUTHENTICATED)))}shutdown(){}}class hA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class dA{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ze(this.o===void 0,42304);let s=this.i;const o=m=>this.i!==s?(s=this.i,t(m)):Promise.resolve();let l=new wi;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new wi,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const m=l;e.enqueueRetryable((async()=>{await m.promise,await o(this.currentUser)}))},f=m=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((m=>f(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?f(m):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new wi)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ze(typeof s.accessToken=="string",31837,{l:s}),new P_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ze(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class fA{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class pA{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new fA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class dy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mA{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ze(this.o===void 0,3512);const s=l=>{l.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,oe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new dy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new dy(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=gA(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function Re(r,e){return r<e?-1:r>e?1:0}function Hd(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Re(s,o);{const l=k_(),h=yA(l.encode(fy(r,t)),l.encode(fy(e,t)));return h!==0?h:Re(s,o)}}t+=s>65535?2:1}return Re(r.length,e.length)}function fy(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function yA(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Re(r[t],e[t]);return Re(r.length,e.length)}function ko(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py="__name__";class Xn{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ee(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ee(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Xn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=Xn.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Re(e.length,t.length)}static compareSegments(e,t){const s=Xn.isNumericId(e),o=Xn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Xn.extractNumericId(e).compare(Xn.extractNumericId(t)):Hd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _i.fromString(e.substring(4,e.length-2))}}class qe extends Xn{construct(e,t,s){return new qe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new te(Y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new qe(t)}static emptyPath(){return new qe([])}}const vA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class jt extends Xn{construct(e,t,s){return new jt(e,t,s)}static isValidIdentifier(e){return vA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),jt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===py}static keyField(){return new jt([py])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new te(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new te(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new te(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(s+=f,o++):(l(),o++)}if(l(),h)throw new te(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new jt(t)}static emptyPath(){return new jt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(qe.fromString(e))}static fromName(e){return new pe(qe.fromString(e).popFirst(5))}static empty(){return new pe(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new qe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(r,e,t){if(!t)throw new te(Y.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function _A(r,e,t,s){if(e===!0&&s===!0)throw new te(Y.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function my(r){if(!pe.isDocumentKey(r))throw new te(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function gy(r){if(pe.isDocumentKey(r))throw new te(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function N_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Rc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ee(12329,{type:typeof r})}function rl(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new te(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Rc(r);throw new te(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function wA(r,e){if(e<=0)throw new te(Y.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(r,e){const t={typeString:r};return e&&(t.value=e),t}function ml(r,e){if(!N_(r))throw new te(Y.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new te(Y.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=-62135596800,vy=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*vy);return new Ye(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<yy)throw new te(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vy}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ml(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-yy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:ht("string",Ye._jsonSchemaVersion),seconds:ht("number"),nanoseconds:ht("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new Ye(0,0))}static max(){return new we(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=-1;function EA(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=we.fromTimestamp(s===1e9?new Ye(t+1,0):new Ye(t,s));return new Ai(o,pe.empty(),e)}function TA(r){return new Ai(r.readTime,r.key,il)}class Ai{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ai(we.min(),pe.empty(),il)}static max(){return new Ai(we.max(),pe.empty(),il)}}function IA(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(r.documentKey,e.documentKey),t!==0?t:Re(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cc(r){if(r.code!==Y.FAILED_PRECONDITION||r.message!==SA)throw r;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):W.reject(t)}static resolve(e){return new W(((t,s)=>{t(e)}))}static reject(e){return new W(((t,s)=>{s(e)}))}static waitFor(e){return new W(((t,s)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(m=>s(m)))})),h=!0,l===o&&t()}))}static or(e){let t=W.resolve(!1);for(const s of e)t=t.next((o=>o?W.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new W(((s,o)=>{const l=e.length,h=new Array(l);let f=0;for(let m=0;m<l;m++){const v=m;t(e[v]).next((_=>{h[v]=_,++f,f===l&&s(h)}),(_=>o(_)))}}))}static doWhile(e,t){return new W(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function RA(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function jo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Pc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=-1;function kc(r){return r==null}function ac(r){return r===0&&1/r==-1/0}function PA(r){return typeof r=="number"&&Number.isInteger(r)&&!ac(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="";function kA(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=_y(e)),e=xA(r.get(t),e);return _y(e)}function xA(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case D_:t+="";break;default:t+=l}}return t}function _y(r){return r+D_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function zo(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function O_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t){this.comparator=e,this.root=t||kt.EMPTY}insert(e,t){return new ot(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(e){return new ot(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fu(this.root,e,this.comparator,!0)}}class Fu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class kt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??kt.RED,this.left=o??kt.EMPTY,this.right=l??kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new kt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return kt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ee(27949);return e+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1;kt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee(57766)}get value(){throw Ee(16141)}get color(){throw Ee(16727)}get left(){throw Ee(29726)}get right(){throw Ee(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.comparator=e,this.data=new ot(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ey(this.data.getIterator())}getIteratorFrom(e){return new Ey(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class Ey{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.fields=e,e.sort(jt.comparator)}static empty(){return new fi([])}unionWith(e){let t=new vt(jt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new fi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ko(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new b_("Invalid base64 string: "+l):l}})(e);return new xt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const NA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ri(r){if(Ze(!!r,39018),typeof r=="string"){let e=0;const t=NA.exec(r);if(Ze(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:it(r.seconds),nanos:it(r.nanos)}}function it(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ci(r){return typeof r=="string"?xt.fromBase64String(r):xt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_="server_timestamp",L_="__type__",M_="__previous_value__",F_="__local_write_time__";function kf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[L_])===null||t===void 0?void 0:t.stringValue)===V_}function xc(r){const e=r.mapValue.fields[M_];return kf(e)?xc(e):e}function sl(r){const e=Ri(r.mapValue.fields[F_].timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,t,s,o,l,h,f,m,v,_){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=m,this.useFetchStreams=v,this.isUsingEmulator=_}}const lc="(default)";class ol{constructor(e,t){this.projectId=e,this.database=t||lc}static empty(){return new ol("","")}get isDefaultDatabase(){return this.database===lc}isEqual(e){return e instanceof ol&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="__type__",OA="__max__",Uu={mapValue:{}},j_="__vector__",uc="value";function Pi(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?kf(r)?4:VA(r)?9007199254740991:bA(r)?10:11:Ee(28295,{value:r})}function ar(r,e){if(r===e)return!0;const t=Pi(r);if(t!==Pi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return sl(r).isEqual(sl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ri(o.timestampValue),f=Ri(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return Ci(o.bytesValue).isEqual(Ci(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return it(o.geoPointValue.latitude)===it(l.geoPointValue.latitude)&&it(o.geoPointValue.longitude)===it(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return it(o.integerValue)===it(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=it(o.doubleValue),f=it(l.doubleValue);return h===f?ac(h)===ac(f):isNaN(h)&&isNaN(f)}return!1})(r,e);case 9:return ko(r.arrayValue.values||[],e.arrayValue.values||[],ar);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(wy(h)!==wy(f))return!1;for(const m in h)if(h.hasOwnProperty(m)&&(f[m]===void 0||!ar(h[m],f[m])))return!1;return!0})(r,e);default:return Ee(52216,{left:r})}}function al(r,e){return(r.values||[]).find((t=>ar(t,e)))!==void 0}function xo(r,e){if(r===e)return 0;const t=Pi(r),s=Pi(e);if(t!==s)return Re(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=it(l.integerValue||l.doubleValue),m=it(h.integerValue||h.doubleValue);return f<m?-1:f>m?1:f===m?0:isNaN(f)?isNaN(m)?0:-1:1})(r,e);case 3:return Ty(r.timestampValue,e.timestampValue);case 4:return Ty(sl(r),sl(e));case 5:return Hd(r.stringValue,e.stringValue);case 6:return(function(l,h){const f=Ci(l),m=Ci(h);return f.compareTo(m)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),m=h.split("/");for(let v=0;v<f.length&&v<m.length;v++){const _=Re(f[v],m[v]);if(_!==0)return _}return Re(f.length,m.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=Re(it(l.latitude),it(h.latitude));return f!==0?f:Re(it(l.longitude),it(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Iy(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var f,m,v,_;const T=l.fields||{},I=h.fields||{},j=(f=T[uc])===null||f===void 0?void 0:f.arrayValue,$=(m=I[uc])===null||m===void 0?void 0:m.arrayValue,H=Re(((v=j==null?void 0:j.values)===null||v===void 0?void 0:v.length)||0,((_=$==null?void 0:$.values)===null||_===void 0?void 0:_.length)||0);return H!==0?H:Iy(j,$)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Uu.mapValue&&h===Uu.mapValue)return 0;if(l===Uu.mapValue)return 1;if(h===Uu.mapValue)return-1;const f=l.fields||{},m=Object.keys(f),v=h.fields||{},_=Object.keys(v);m.sort(),_.sort();for(let T=0;T<m.length&&T<_.length;++T){const I=Hd(m[T],_[T]);if(I!==0)return I;const j=xo(f[m[T]],v[_[T]]);if(j!==0)return j}return Re(m.length,_.length)})(r.mapValue,e.mapValue);default:throw Ee(23264,{le:t})}}function Ty(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Re(r,e);const t=Ri(r),s=Ri(e),o=Re(t.seconds,s.seconds);return o!==0?o:Re(t.nanos,s.nanos)}function Iy(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=xo(t[o],s[o]);if(l)return l}return Re(t.length,s.length)}function No(r){return qd(r)}function qd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=Ri(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Ci(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return pe.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=qd(l);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${qd(t.fields[h])}`;return o+"}"})(r.mapValue):Ee(61005,{value:r})}function Ku(r){switch(Pi(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xc(r);return e?16+Ku(e):16;case 5:return 2*r.stringValue.length;case 6:return Ci(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+Ku(l)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return zo(s.fields,((l,h)=>{o+=l.length+Ku(h)})),o})(r.mapValue);default:throw Ee(13486,{value:r})}}function Sy(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Wd(r){return!!r&&"integerValue"in r}function xf(r){return!!r&&"arrayValue"in r}function Ay(r){return!!r&&"nullValue"in r}function Ry(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ad(r){return!!r&&"mapValue"in r}function bA(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[U_])===null||t===void 0?void 0:t.stringValue)===j_}function Ka(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return zo(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ka(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ka(r.arrayValue.values[t]);return e}return Object.assign({},r)}function VA(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===OA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.value=e}static empty(){return new Zn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ad(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ka(t)}setAll(e){let t=jt.emptyPath(),s={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const m=this.getFieldsMap(t);this.applyChanges(m,s,o),s={},o=[],t=f.popLast()}h?s[f.lastSegment()]=Ka(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());Ad(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ar(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Ad(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){zo(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new Zn(Ka(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,s,o,l,h,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Ut(e,0,we.min(),we.min(),we.min(),Zn.empty(),0)}static newFoundDocument(e,t,s,o){return new Ut(e,1,t,we.min(),s,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,we.min(),we.min(),Zn.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,we.min(),we.min(),Zn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t){this.position=e,this.inclusive=t}}function Cy(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=pe.comparator(pe.fromName(h.referenceValue),t.key):s=xo(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function Py(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!ar(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t="asc"){this.field=e,this.dir=t}}function LA(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{}class ct extends z_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new FA(e,t,s):t==="array-contains"?new zA(e,s):t==="in"?new BA(e,s):t==="not-in"?new $A(e,s):t==="array-contains-any"?new HA(e,s):new ct(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new UA(e,s):new jA(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(xo(t,this.value)):t!==null&&Pi(this.value)===Pi(t)&&this.matchesComparison(xo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends z_{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new jn(e,t)}matches(e){return B_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function B_(r){return r.op==="and"}function $_(r){return MA(r)&&B_(r)}function MA(r){for(const e of r.filters)if(e instanceof jn)return!1;return!0}function Gd(r){if(r instanceof ct)return r.field.canonicalString()+r.op.toString()+No(r.value);if($_(r))return r.filters.map((e=>Gd(e))).join(",");{const e=r.filters.map((t=>Gd(t))).join(",");return`${r.op}(${e})`}}function H_(r,e){return r instanceof ct?(function(s,o){return o instanceof ct&&s.op===o.op&&s.field.isEqual(o.field)&&ar(s.value,o.value)})(r,e):r instanceof jn?(function(s,o){return o instanceof jn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,f)=>l&&H_(h,o.filters[f])),!0):!1})(r,e):void Ee(19439)}function q_(r){return r instanceof ct?(function(t){return`${t.field.canonicalString()} ${t.op} ${No(t.value)}`})(r):r instanceof jn?(function(t){return t.op.toString()+" {"+t.getFilters().map(q_).join(" ,")+"}"})(r):"Filter"}class FA extends ct{constructor(e,t,s){super(e,t,s),this.key=pe.fromName(s.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class UA extends ct{constructor(e,t){super(e,"in",t),this.keys=W_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class jA extends ct{constructor(e,t){super(e,"not-in",t),this.keys=W_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function W_(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>pe.fromName(s.referenceValue)))}class zA extends ct{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return xf(t)&&al(t.arrayValue,this.value)}}class BA extends ct{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&al(this.value.arrayValue,t)}}class $A extends ct{constructor(e,t){super(e,"not-in",t)}matches(e){if(al(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!al(this.value.arrayValue,t)}}class HA extends ct{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!xf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>al(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,t=null,s=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Pe=null}}function ky(r,e=null,t=[],s=[],o=null,l=null,h=null){return new qA(r,e,t,s,o,l,h)}function Nf(r){const e=Oe(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Gd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),kc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>No(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>No(s))).join(",")),e.Pe=t}return e.Pe}function Df(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!LA(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!H_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Py(r.startAt,e.startAt)&&Py(r.endAt,e.endAt)}function Kd(r){return pe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t=null,s=[],o=[],l=null,h="F",f=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=m,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function WA(r,e,t,s,o,l,h,f){return new Bo(r,e,t,s,o,l,h,f)}function Of(r){return new Bo(r)}function xy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function G_(r){return r.collectionGroup!==null}function Qa(r){const e=Oe(r);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new vt(jt.comparator);return h.filters.forEach((m=>{m.getFlattenedFilters().forEach((v=>{v.isInequality()&&(f=f.add(v.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new ll(l,s))})),t.has(jt.keyField().canonicalString())||e.Te.push(new ll(jt.keyField(),s))}return e.Te}function ir(r){const e=Oe(r);return e.Ie||(e.Ie=GA(e,Qa(r))),e.Ie}function GA(r,e){if(r.limitType==="F")return ky(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new ll(o.field,l)}));const t=r.endAt?new cc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new cc(r.startAt.position,r.startAt.inclusive):null;return ky(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Qd(r,e){const t=r.filters.concat([e]);return new Bo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function hc(r,e,t){return new Bo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Nc(r,e){return Df(ir(r),ir(e))&&r.limitType===e.limitType}function K_(r){return`${Nf(ir(r))}|lt:${r.limitType}`}function yo(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>q_(o))).join(", ")}]`),kc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>No(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>No(o))).join(",")),`Target(${s})`})(ir(r))}; limitType=${r.limitType})`}function Dc(r,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):pe.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(r,e)&&(function(s,o){for(const l of Qa(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,f,m){const v=Cy(h,f,m);return h.inclusive?v<=0:v<0})(s.startAt,Qa(s),o)||s.endAt&&!(function(h,f,m){const v=Cy(h,f,m);return h.inclusive?v>=0:v>0})(s.endAt,Qa(s),o))})(r,e)}function KA(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Q_(r){return(e,t)=>{let s=!1;for(const o of Qa(r)){const l=QA(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function QA(r,e,t){const s=r.field.isKeyField()?pe.comparator(e.key,t.key):(function(l,h,f){const m=h.data.field(l),v=f.data.field(l);return m!==null&&v!==null?xo(m,v):Ee(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Ee(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){zo(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return O_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=new ot(pe.comparator);function ki(){return YA}const Y_=new ot(pe.comparator);function $a(...r){let e=Y_;for(const t of r)e=e.insert(t.key,t);return e}function JA(r){let e=Y_;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function us(){return Ya()}function J_(){return Ya()}function Ya(){return new Es((r=>r.toString()),((r,e)=>r.isEqual(e)))}const XA=new vt(pe.comparator);function Ve(...r){let e=XA;for(const t of r)e=e.add(t);return e}const ZA=new vt(Re);function eR(){return ZA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ac(e)?"-0":e}}function X_(r){return{integerValue:""+r}}function tR(r,e){return PA(e)?X_(e):bf(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this._=void 0}}function nR(r,e,t){return r instanceof Yd?(function(o,l){const h={fields:{[L_]:{stringValue:V_},[F_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&kf(l)&&(l=xc(l)),l&&(h.fields[M_]=l),{mapValue:h}})(t,e):r instanceof dc?Z_(r,e):r instanceof fc?ew(r,e):(function(o,l){const h=iR(o,l),f=Ny(h)+Ny(o.Ee);return Wd(h)&&Wd(o.Ee)?X_(f):bf(o.serializer,f)})(r,e)}function rR(r,e,t){return r instanceof dc?Z_(r,e):r instanceof fc?ew(r,e):t}function iR(r,e){return r instanceof Jd?(function(s){return Wd(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class Yd extends Oc{}class dc extends Oc{constructor(e){super(),this.elements=e}}function Z_(r,e){const t=tw(e);for(const s of r.elements)t.some((o=>ar(o,s)))||t.push(s);return{arrayValue:{values:t}}}class fc extends Oc{constructor(e){super(),this.elements=e}}function ew(r,e){let t=tw(e);for(const s of r.elements)t=t.filter((o=>!ar(o,s)));return{arrayValue:{values:t}}}class Jd extends Oc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Ny(r){return it(r.integerValue||r.doubleValue)}function tw(r){return xf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function sR(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof dc&&o instanceof dc||s instanceof fc&&o instanceof fc?ko(s.elements,o.elements,ar):s instanceof Jd&&o instanceof Jd?ar(s.Ee,o.Ee):s instanceof Yd&&o instanceof Yd})(r.transform,e.transform)}class cs{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new cs}static exists(e){return new cs(void 0,e)}static updateTime(e){return new cs(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Vf{}function nw(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new aR(r.key,cs.none()):new Lf(r.key,r.data,cs.none());{const t=r.data,s=Zn.empty();let o=new vt(jt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new bc(r.key,s,new fi(o.toArray()),cs.none())}}function oR(r,e,t){r instanceof Lf?(function(o,l,h){const f=o.value.clone(),m=Oy(o.fieldTransforms,l,h.transformResults);f.setAll(m),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(r,e,t):r instanceof bc?(function(o,l,h){if(!Qu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=Oy(o.fieldTransforms,l,h.transformResults),m=l.data;m.setAll(rw(o)),m.setAll(f),l.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ja(r,e,t,s){return r instanceof Lf?(function(l,h,f,m){if(!Qu(l.precondition,h))return f;const v=l.value.clone(),_=by(l.fieldTransforms,m,h);return v.setAll(_),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(r,e,t,s):r instanceof bc?(function(l,h,f,m){if(!Qu(l.precondition,h))return f;const v=by(l.fieldTransforms,m,h),_=h.data;return _.setAll(rw(l)),_.setAll(v),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(r,e,t,s):(function(l,h,f){return Qu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(r,e,t)}function Dy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&ko(s,o,((l,h)=>sR(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Lf extends Vf{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class bc extends Vf{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function rw(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function Oy(r,e,t){const s=new Map;Ze(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);s.set(l.field,rR(h,f,t[o]))}return s}function by(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,nR(l,h,e))}return s}class aR extends Vf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&oR(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ja(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ja(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=J_();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const m=nw(h,f);m!==null&&s.set(o.key,m),h.isValidDocument()||h.convertToNoDocument(we.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ve())}isEqual(e){return this.batchId===e.batchId&&ko(this.mutations,e.mutations,((t,s)=>Dy(t,s)))&&ko(this.baseMutations,e.baseMutations,((t,s)=>Dy(t,s)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,De;function iw(r){if(r===void 0)return Or("GRPC error has no .code"),Y.UNKNOWN;switch(r){case ut.OK:return Y.OK;case ut.CANCELLED:return Y.CANCELLED;case ut.UNKNOWN:return Y.UNKNOWN;case ut.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case ut.INTERNAL:return Y.INTERNAL;case ut.UNAVAILABLE:return Y.UNAVAILABLE;case ut.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case ut.NOT_FOUND:return Y.NOT_FOUND;case ut.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case ut.ABORTED:return Y.ABORTED;case ut.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case ut.DATA_LOSS:return Y.DATA_LOSS;default:return Ee(39323,{code:r})}}(De=ut||(ut={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR=new _i([4294967295,4294967295],0);function Vy(r){const e=k_().encode(r),t=new E_;return t.update(e),new Uint8Array(t.digest())}function Ly(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new _i([t,s],0),new _i([o,l],0)]}class Mf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ha(`Invalid padding: ${t}`);if(s<0)throw new Ha(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ha(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ha(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=_i.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(_i.fromNumber(s)));return o.compare(hR)===1&&(o=new _i([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Vy(e),[s,o]=Ly(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Mf(l,o,t);return s.forEach((f=>h.insert(f))),h}insert(e){if(this.fe===0)return;const t=Vy(e),[s,o]=Ly(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ha extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,gl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Vc(we.min(),o,new ot(Re),ki(),Ve())}}class gl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new gl(s,t,Ve(),Ve(),Ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class sw{constructor(e,t){this.targetId=e,this.De=t}}class ow{constructor(e,t,s=xt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class My{constructor(){this.ve=0,this.Ce=Fy(),this.Fe=xt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ve(),t=Ve(),s=Ve();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:Ee(38017,{changeType:l})}})),new gl(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=Fy()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ze(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class dR{constructor(e){this.We=e,this.Ge=new Map,this.ze=ki(),this.je=ju(),this.Je=ju(),this.He=new ot(Re)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:Ee(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const l=o.target;if(Kd(l))if(s===0){const h=new pe(l.path);this.Xe(t,h,Ut.newNoDocument(h,we.min()))}else Ze(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const f=this._t(e),m=f?this.ut(f,e,h):1;if(m!==0){this.rt(t);const v=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,v)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Ci(s).toUint8Array()}catch(m){if(m instanceof b_)return Si("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{f=new Mf(h,o,l)}catch(m){return Si(m instanceof Ha?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return f.fe===0?null:f}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.We.lt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const f=this.st(h);if(f){if(l.current&&Kd(f.target)){const m=new pe(f.target.path);this.Tt(m).has(h)||this.It(h,m)||this.Xe(h,m,Ut.newNoDocument(m,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let s=Ve();this.Je.forEach(((l,h)=>{let f=!0;h.forEachWhile((m=>{const v=this.st(m);return!v||v.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(s=s.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new Vc(e,t,this.He,this.ze,s);return this.ze=ki(),this.je=ju(),this.Je=ju(),this.He=new ot(Re),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new My,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new vt(Re),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new vt(Re),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new My),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function ju(){return new ot(pe.comparator)}function Fy(){return new ot(pe.comparator)}const fR={asc:"ASCENDING",desc:"DESCENDING"},pR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mR={and:"AND",or:"OR"};class gR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Xd(r,e){return r.useProto3Json||kc(e)?e:{value:e}}function Zd(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function aw(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function So(r){return Ze(!!r,49232),we.fromTimestamp((function(t){const s=Ri(t);return new Ye(s.seconds,s.nanos)})(r))}function lw(r,e){return ef(r,e).canonicalString()}function ef(r,e){const t=(function(o){return new qe(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function uw(r){const e=qe.fromString(r);return Ze(pw(e),10190,{key:e.toString()}),e}function Rd(r,e){const t=uw(e);if(t.get(1)!==r.databaseId.projectId)throw new te(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new te(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new pe(hw(t))}function cw(r,e){return lw(r.databaseId,e)}function yR(r){const e=uw(r);return e.length===4?qe.emptyPath():hw(e)}function Uy(r){return new qe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function hw(r){return Ze(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function vR(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:Ee(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(v,_){return v.useProto3Json?(Ze(_===void 0||typeof _=="string",58123),xt.fromBase64String(_||"")):(Ze(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),xt.fromUint8Array(_||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(v){const _=v.code===void 0?Y.UNKNOWN:iw(v.code);return new te(_,v.message||"")})(h);t=new ow(s,o,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Rd(r,s.document.name),l=So(s.document.updateTime),h=s.document.createTime?So(s.document.createTime):we.min(),f=new Zn({mapValue:{fields:s.document.fields}}),m=Ut.newFoundDocument(o,l,h,f),v=s.targetIds||[],_=s.removedTargetIds||[];t=new Yu(v,_,m.key,m)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Rd(r,s.document),l=s.readTime?So(s.readTime):we.min(),h=Ut.newNoDocument(o,l),f=s.removedTargetIds||[];t=new Yu([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Rd(r,s.document),l=s.removedTargetIds||[];t=new Yu([],l,o,null)}else{if(!("filter"in e))return Ee(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new cR(o,l),f=s.targetId;t=new sw(f,h)}}return t}function _R(r,e){return{documents:[cw(r,e.path)]}}function wR(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=cw(r,o);const l=(function(v){if(v.length!==0)return fw(jn.create(v,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(v){if(v.length!==0)return v.map((_=>(function(I){return{field:vo(I.field),direction:IR(I.dir)}})(_)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Xd(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{Vt:t,parent:o}}function ER(r){let e=yR(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ze(s===1,65062);const _=t.from[0];_.allDescendants?o=_.collectionId:e=e.child(_.collectionId)}let l=[];t.where&&(l=(function(T){const I=dw(T);return I instanceof jn&&$_(I)?I.getFilters():[I]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((I=>(function($){return new ll(_o($.field),(function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(I)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let I;return I=typeof T=="object"?T.value:T,kc(I)?null:I})(t.limit));let m=null;t.startAt&&(m=(function(T){const I=!!T.before,j=T.values||[];return new cc(j,I)})(t.startAt));let v=null;return t.endAt&&(v=(function(T){const I=!T.before,j=T.values||[];return new cc(j,I)})(t.endAt)),WA(e,o,h,l,f,"F",m,v)}function TR(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function dw(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=_o(t.unaryFilter.field);return ct.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=_o(t.unaryFilter.field);return ct.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=_o(t.unaryFilter.field);return ct.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=_o(t.unaryFilter.field);return ct.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ee(61313);default:return Ee(60726)}})(r):r.fieldFilter!==void 0?(function(t){return ct.create(_o(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ee(58110);default:return Ee(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return jn.create(t.compositeFilter.filters.map((s=>dw(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ee(1026)}})(t.compositeFilter.op))})(r):Ee(30097,{filter:r})}function IR(r){return fR[r]}function SR(r){return pR[r]}function AR(r){return mR[r]}function vo(r){return{fieldPath:r.canonicalString()}}function _o(r){return jt.fromServerFormat(r.fieldPath)}function fw(r){return r instanceof ct?(function(t){if(t.op==="=="){if(Ry(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NAN"}};if(Ay(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ry(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NOT_NAN"}};if(Ay(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vo(t.field),op:SR(t.op),value:t.value}}})(r):r instanceof jn?(function(t){const s=t.getFilters().map((o=>fw(o)));return s.length===1?s[0]:{compositeFilter:{op:AR(t.op),filters:s}}})(r):Ee(54877,{filter:r})}function pw(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t,s,o,l=we.min(),h=we.min(),f=xt.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=m}withSequenceNumber(e){return new pi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.gt=e}}function CR(r){const e=ER({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?hc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(){this.Dn=new kR}addToCollectionParentIndex(e,t){return this.Dn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(Ai.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(Ai.min())}updateCollectionGroup(e,t,s){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class kR{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new vt(qe.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new vt(qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},mw=41943040;class tn{static withCacheSize(e){return new tn(e,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.DEFAULT_COLLECTION_PERCENTILE=10,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tn.DEFAULT=new tn(mw,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tn.DISABLED=new tn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Do(0)}static ur(){return new Do(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy="LruGarbageCollector",xR=1048576;function By([r,e],[t,s]){const o=Re(r,t);return o===0?Re(e,s):o}class NR{constructor(e){this.Tr=e,this.buffer=new vt(By),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();By(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class DR{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){oe(zy,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){jo(t)?oe(zy,"Ignoring IndexedDB error during garbage collection: ",t):await Cc(t)}await this.Rr(3e5)}))}}class OR{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return W.resolve(Pc.ue);const s=new NR(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(jy)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jy):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,l,h,f,m,v;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(s=T,f=Date.now(),this.removeTargets(e,s,t)))).next((T=>(l=T,m=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(v=Date.now(),go()<=Pe.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-_}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(m-f)+`ms
	Removed ${T} documents in `+(v-m)+`ms
Total Duration: ${v-_}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function bR(r,e){return new OR(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(){this.changes=new Es((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?W.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Ja(s.mutation,o,fi.empty(),Ye.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ve()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ve()){const o=us();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=$a();return l.forEach(((f,m)=>{h=h.insert(f,m.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=us();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ve())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,s,o){let l=ki();const h=Ya(),f=(function(){return Ya()})();return t.forEach(((m,v)=>{const _=s.get(v.key);o.has(v.key)&&(_===void 0||_.mutation instanceof bc)?l=l.insert(v.key,v):_!==void 0?(h.set(v.key,_.mutation.getFieldMask()),Ja(_.mutation,v,_.mutation.getFieldMask(),Ye.now())):h.set(v.key,fi.empty())})),this.recalculateAndSaveOverlays(e,l).next((m=>(m.forEach(((v,_)=>h.set(v,_))),t.forEach(((v,_)=>{var T;return f.set(v,new LR(_,(T=h.get(v))!==null&&T!==void 0?T:null))})),f)))}recalculateAndSaveOverlays(e,t){const s=Ya();let o=new ot(((h,f)=>h-f)),l=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((m=>{const v=t.get(m);if(v===null)return;let _=s.get(m)||fi.empty();_=f.applyToLocalView(v,_),s.set(m,_);const T=(o.get(f.batchId)||Ve()).add(m);o=o.insert(f.batchId,T)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const m=f.getNext(),v=m.key,_=m.value,T=J_();_.forEach((I=>{if(!l.has(I)){const j=nw(t.get(I),s.get(I));j!==null&&T.set(I,j),l=l.add(I)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,T))}return W.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return pe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):G_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):W.resolve(us());let f=il,m=l;return h.next((v=>W.forEach(v,((_,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(_)?W.resolve():this.remoteDocumentCache.getEntry(e,_).next((I=>{m=m.insert(_,I)}))))).next((()=>this.populateOverlays(e,v,l))).next((()=>this.computeViews(e,m,v,Ve()))).next((_=>({batchId:f,changes:JA(_)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next((s=>{let o=$a();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=$a();return this.indexManager.getCollectionParents(e,l).next((f=>W.forEach(f,(m=>{const v=(function(T,I){return new Bo(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next((_=>{_.forEach(((T,I)=>{h=h.insert(T,I)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((m,v)=>{const _=v.getKey();h.get(_)===null&&(h=h.insert(_,Ut.newInvalidDocument(_)))}));let f=$a();return h.forEach(((m,v)=>{const _=l.get(m);_!==void 0&&Ja(_.mutation,v,fi.empty(),Ye.now()),Dc(t,v)&&(f=f.insert(m,v))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return W.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:So(o.createTime)}})(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:CR(o.bundledQuery),readTime:So(o.readTime)}})(t)),W.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(){this.overlays=new ot(pe.comparator),this.kr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const s=us();return W.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.wt(e,t,l)})),W.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(s)),W.resolve()}getOverlaysForCollection(e,t,s){const o=us(),l=t.length+1,h=new pe(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const m=f.getNext().value,v=m.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===l&&m.largestBatchId>s&&o.set(m.getKey(),m)}return W.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new ot(((v,_)=>v-_));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let _=l.get(v.largestBatchId);_===null&&(_=us(),l=l.insert(v.largestBatchId,_)),_.set(v.getKey(),v)}}const f=us(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach(((v,_)=>f.set(v,_))),!(f.size()>=o)););return W.resolve(f)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new uR(t,s));let l=this.kr.get(t);l===void 0&&(l=Ve(),this.kr.set(t,l)),this.kr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(){this.qr=new vt(St.Qr),this.$r=new vt(St.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new St(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new St(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new pe(new qe([])),s=new St(t,e),o=new St(t,e+1),l=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new pe(new qe([])),s=new St(t,e),o=new St(t,e+1);let l=Ve();return this.$r.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new St(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class St{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return pe.comparator(e.key,t.key)||Re(e.Hr,t.Hr)}static Ur(e,t){return Re(e.Hr,t.Hr)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new vt(St.Qr)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new lR(l,t,s,o);this.mutationQueue.push(h);for(const f of o)this.Yr=this.Yr.add(new St(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return W.resolve(h)}lookupMutationBatch(e,t){return W.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),l=o<0?0:o;return W.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?CA:this.er-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([s,o],(h=>{const f=this.Zr(h.Hr);l.push(f)})),W.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new vt(Re);return t.forEach((o=>{const l=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(f=>{s=s.add(f.Hr)}))})),W.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;pe.isDocumentKey(l)||(l=l.child(""));const h=new St(new pe(l),0);let f=new vt(Re);return this.Yr.forEachWhile((m=>{const v=m.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(f=f.add(m.Hr)),!0)}),h),W.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ze(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return W.forEach(t.mutations,(o=>{const l=new St(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new St(t,0),o=this.Yr.firstAfterOrEqual(s);return W.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e){this.ni=e,this.docs=(function(){return new ot(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return W.resolve(s?s.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let s=ki();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Ut.newInvalidDocument(o))})),W.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=ki();const h=t.path,f=new pe(h.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(f);for(;m.hasNext();){const{key:v,value:{document:_}}=m.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||IA(TA(_),s)<=0||(o.has(_.key)||Dc(t,_))&&(l=l.insert(_.key,_.mutableCopy()))}return W.resolve(l)}getAllFromCollectionGroup(e,t,s,o){Ee(9500)}ri(e,t){return W.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new $R(this)}getSize(e){return W.resolve(this.size)}}class $R extends VR{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),W.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.persistence=e,this.ii=new Es((t=>Nf(t)),Df),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.si=0,this.oi=new Ff,this.targetCount=0,this._i=Do.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),W.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Do(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.hr(t),W.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.ii.forEach(((h,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),W.waitFor(l).next((()=>o))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return W.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),W.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),W.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return W.resolve(s)}containsKey(e,t){return W.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,t){this.ai={},this.overlays={},this.ui=new Pc(0),this.ci=!1,this.ci=!0,this.li=new jR,this.referenceDelegate=e(this),this.hi=new HR(this),this.indexManager=new PR,this.remoteDocumentCache=(function(o){return new BR(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new RR(t),this.Ti=new FR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new UR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new zR(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){oe("MemoryPersistence","Starting transaction:",e);const o=new qR(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return W.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class qR extends AA{constructor(e){super(),this.currentSequenceNumber=e}}class Uf{constructor(e){this.persistence=e,this.Ai=new Ff,this.Ri=null}static Vi(e){return new Uf(e)}get mi(){if(this.Ri)return this.Ri;throw Ee(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),W.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),W.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.mi,(s=>{const o=pe.fromPath(s);return this.fi(e,o).next((l=>{l||t.removeEntry(o,we.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return W.or([()=>W.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class pc{constructor(e,t){this.persistence=e,this.gi=new Es((s=>kA(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=bR(this,t)}static Vi(e,t){return new pc(e,t)}Ii(){}di(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return W.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((l=>l?W.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((f=>{f||(s++,l.removeEntry(h,we.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),W.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),W.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ku(e.data.value)),t}Sr(e,t,s){return W.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return W.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=Ve(),o=Ve();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new jf(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return xT()?8:RA(zt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new WR;return this.ws(e,t,h).next((f=>{if(l.result=f,this.Rs)return this.Ss(e,t,h,f.size)}))})).next((()=>l.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(go()<=Pe.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",yo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),W.resolve()):(go()<=Pe.DEBUG&&oe("QueryEngine","Query:",yo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(go()<=Pe.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",yo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ir(t))):W.resolve())}ps(e,t){if(xy(t))return W.resolve(null);let s=ir(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=hc(t,null,"F"),s=ir(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=Ve(...l);return this.gs.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,s).next((m=>{const v=this.bs(t,f);return this.Ds(t,v,h,m.readTime)?this.ps(e,hc(t,null,"F")):this.vs(e,v,t,m)}))))})))))}ys(e,t,s,o){return xy(t)||o.isEqual(we.min())?W.resolve(null):this.gs.getDocuments(e,s).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,s,o)?W.resolve(null):(go()<=Pe.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),yo(t)),this.vs(e,h,t,EA(o,il)).next((f=>f)))}))}bs(e,t){let s=new vt(Q_(e));return t.forEach(((o,l)=>{Dc(e,l)&&(s=s.add(l))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,s){return go()<=Pe.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",yo(t)),this.gs.getDocumentsMatchingQuery(e,t,Ai.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf="LocalStore",KR=3e8;class QR{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new ot(Re),this.Ms=new Es((l=>Nf(l)),Df),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new MR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function YR(r,e,t,s){return new QR(r,e,t,s)}async function yw(r,e){const t=Oe(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],f=[];let m=Ve();for(const v of o){h.push(v.batchId);for(const _ of v.mutations)m=m.add(_.key)}for(const v of l){f.push(v.batchId);for(const _ of v.mutations)m=m.add(_.key)}return t.localDocuments.getDocuments(s,m).next((v=>({Bs:v,removedBatchIds:h,addedBatchIds:f})))}))}))}function vw(r){const e=Oe(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function JR(r,e){const t=Oe(r),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const f=[];e.targetChanges.forEach(((_,T)=>{const I=o.get(T);if(!I)return;f.push(t.hi.removeMatchingKeys(l,_.removedDocuments,T).next((()=>t.hi.addMatchingKeys(l,_.addedDocuments,T))));let j=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?j=j.withResumeToken(xt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):_.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(_.resumeToken,s)),o=o.insert(T,j),(function(H,F,le){return H.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=KR?!0:le.addedDocuments.size+le.modifiedDocuments.size+le.removedDocuments.size>0})(I,j,_)&&f.push(t.hi.updateTargetData(l,j))}));let m=ki(),v=Ve();if(e.documentUpdates.forEach((_=>{e.resolvedLimboDocuments.has(_)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,_))})),f.push(XR(l,h,e.documentUpdates).next((_=>{m=_.Ls,v=_.ks}))),!s.isEqual(we.min())){const _=t.hi.getLastRemoteSnapshotVersion(l).next((T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,s)));f.push(_)}return W.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,m,v))).next((()=>m))})).then((l=>(t.Fs=o,l)))}function XR(r,e,t){let s=Ve(),o=Ve();return t.forEach((l=>s=s.add(l))),e.getEntries(r,s).next((l=>{let h=ki();return t.forEach(((f,m)=>{const v=l.get(f);m.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(f)),m.isNoDocument()&&m.version.isEqual(we.min())?(e.removeEntry(f,m.readTime),h=h.insert(f,m)):!v.isValidDocument()||m.version.compareTo(v.version)>0||m.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(m),h=h.insert(f,m)):oe(zf,"Ignoring outdated watch update for ",f,". Current version:",v.version," Watch version:",m.version)})),{Ls:h,ks:o}}))}function ZR(r,e){const t=Oe(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((l=>l?(o=l,W.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new pi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function tf(r,e,t){const s=Oe(r),o=s.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!jo(h))throw h;oe(zf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function $y(r,e,t){const s=Oe(r);let o=we.min(),l=Ve();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(m,v,_){const T=Oe(m),I=T.Ms.get(_);return I!==void 0?W.resolve(T.Fs.get(I)):T.hi.getTargetData(v,_)})(s,h,ir(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,f.targetId).next((m=>{l=m}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?l:Ve()))).next((f=>(eC(s,KA(e),f),{documents:f,qs:l})))))}function eC(r,e,t){let s=r.xs.get(e)||we.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),r.xs.set(e,s)}class Hy{constructor(){this.activeTargetIds=eR()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tC{constructor(){this.Fo=new Hy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Hy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy="ConnectivityMonitor";class Wy{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){oe(qy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){oe(qy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zu=null;function nf(){return zu===null?zu=(function(){return 268435456+Math.round(2147483648*Math.random())})():zu++,"0x"+zu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="RestConnection",rC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class iC{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===lc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,l){const h=nf(),f=this.Go(e,t.toUriEncodedString());oe(Cd,`Sending RPC '${e}' ${h}:`,f,s);const m={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(m,o,l);const{host:v}=new URL(f),_=vs(v);return this.jo(e,f,m,s,_).then((T=>(oe(Cd,`Received RPC '${e}' ${h}: `,T),T)),(T=>{throw Si(Cd,`RPC '${e}' ${h} failed with error: `,T,"url: ",f,"request:",s),T}))}Jo(e,t,s,o,l,h){return this.Wo(e,t,s,o,l)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Uo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const s=rC[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="WebChannelConnection";class oC extends iC{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,l){const h=nf();return new Promise(((f,m)=>{const v=new T_;v.setWithCredentials(!0),v.listenOnce(I_.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case Gu.NO_ERROR:const T=v.getResponseJson();oe(Mt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),f(T);break;case Gu.TIMEOUT:oe(Mt,`RPC '${e}' ${h} timed out`),m(new te(Y.DEADLINE_EXCEEDED,"Request time out"));break;case Gu.HTTP_ERROR:const I=v.getStatus();if(oe(Mt,`RPC '${e}' ${h} failed with status:`,I,"response text:",v.getResponseText()),I>0){let j=v.getResponseJson();Array.isArray(j)&&(j=j[0]);const $=j==null?void 0:j.error;if($&&$.status&&$.message){const H=(function(le){const ie=le.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(ie)>=0?ie:Y.UNKNOWN})($.status);m(new te(H,$.message))}else m(new te(Y.UNKNOWN,"Server responded with status "+v.getStatus()))}else m(new te(Y.UNAVAILABLE,"Connection failed."));break;default:Ee(9055,{c_:e,streamId:h,l_:v.getLastErrorCode(),h_:v.getLastError()})}}finally{oe(Mt,`RPC '${e}' ${h} completed.`)}}));const _=JSON.stringify(o);oe(Mt,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",_,s,15)}))}P_(e,t,s){const o=nf(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=R_(),f=A_(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(m.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(m.useFetchStreams=!0),this.zo(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const _=l.join("");oe(Mt,`Creating RPC '${e}' stream ${o}: ${_}`,m);const T=h.createWebChannel(_,m);this.T_(T);let I=!1,j=!1;const $=new sC({Ho:F=>{j?oe(Mt,`Not sending because RPC '${e}' stream ${o} is closed:`,F):(I||(oe(Mt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),oe(Mt,`RPC '${e}' stream ${o} sending:`,F),T.send(F))},Yo:()=>T.close()}),H=(F,le,ie)=>{F.listen(le,(ne=>{try{ie(ne)}catch(ce){setTimeout((()=>{throw ce}),0)}}))};return H(T,Ba.EventType.OPEN,(()=>{j||(oe(Mt,`RPC '${e}' stream ${o} transport opened.`),$.s_())})),H(T,Ba.EventType.CLOSE,(()=>{j||(j=!0,oe(Mt,`RPC '${e}' stream ${o} transport closed`),$.__(),this.I_(T))})),H(T,Ba.EventType.ERROR,(F=>{j||(j=!0,Si(Mt,`RPC '${e}' stream ${o} transport errored. Name:`,F.name,"Message:",F.message),$.__(new te(Y.UNAVAILABLE,"The operation could not be completed")))})),H(T,Ba.EventType.MESSAGE,(F=>{var le;if(!j){const ie=F.data[0];Ze(!!ie,16349);const ne=ie,ce=(ne==null?void 0:ne.error)||((le=ne[0])===null||le===void 0?void 0:le.error);if(ce){oe(Mt,`RPC '${e}' stream ${o} received error:`,ce);const Ce=ce.status;let Te=(function(P){const x=ut[P];if(x!==void 0)return iw(x)})(Ce),D=ce.message;Te===void 0&&(Te=Y.INTERNAL,D="Unknown error status: "+Ce+" with message "+ce.message),j=!0,$.__(new te(Te,D)),T.close()}else oe(Mt,`RPC '${e}' stream ${o} received:`,ie),$.a_(ie)}})),H(f,S_.STAT_EVENT,(F=>{F.stat===$d.PROXY?oe(Mt,`RPC '${e}' stream ${o} detected buffering proxy`):F.stat===$d.NOPROXY&&oe(Mt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{$.o_()}),0),$}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Pd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(r){return new gR(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy="PersistentStream";class aC{constructor(e,t,s,o,l,h,f,m){this.Fi=e,this.w_=s,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=m,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new _w(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===Y.RESOURCE_EXHAUSTED?(Or(t.toString()),Or("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new te(Y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return oe(Gy,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(oe(Gy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class lC extends aC{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=vR(this.serializer,e),s=(function(l){if(!("targetChange"in l))return we.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?So(h.readTime):we.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Uy(this.serializer),t.addTarget=(function(l,h){let f;const m=h.target;if(f=Kd(m)?{documents:_R(l,m)}:{query:wR(l,m).Vt},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=aw(l,h.resumeToken);const v=Xd(l,h.expectedCount);v!==null&&(f.expectedCount=v)}else if(h.snapshotVersion.compareTo(we.min())>0){f.readTime=Zd(l,h.snapshotVersion.toTimestamp());const v=Xd(l,h.expectedCount);v!==null&&(f.expectedCount=v)}return f})(this.serializer,e);const s=TR(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Uy(this.serializer),t.removeTarget=e,this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{}class cC extends uC{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new te(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,ef(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new te(Y.UNKNOWN,l.toString())}))}Jo(e,t,s,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Jo(e,ef(t,s),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new te(Y.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class hC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Or(t),this._a=!1):oe("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="RemoteStore";class dC{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{vl(this)&&(oe(Oo,"Restarting streams for network reachability change."),await(async function(m){const v=Oe(m);v.Ia.add(4),await yl(v),v.Aa.set("Unknown"),v.Ia.delete(4),await Mc(v)})(this))}))})),this.Aa=new hC(s,o)}}async function Mc(r){if(vl(r))for(const e of r.da)await e(!0)}async function yl(r){for(const e of r.da)await e(!1)}function ww(r,e){const t=Oe(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),qf(t)?Hf(t):$o(t).x_()&&$f(t,e))}function Bf(r,e){const t=Oe(r),s=$o(t);t.Ta.delete(e),s.x_()&&Ew(t,e),t.Ta.size===0&&(s.x_()?s.B_():vl(t)&&t.Aa.set("Unknown"))}function $f(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}$o(r).H_(e)}function Ew(r,e){r.Ra.$e(e),$o(r).Y_(e)}function Hf(r){r.Ra=new dR({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),$o(r).start(),r.Aa.aa()}function qf(r){return vl(r)&&!$o(r).M_()&&r.Ta.size>0}function vl(r){return Oe(r).Ia.size===0}function Tw(r){r.Ra=void 0}async function fC(r){r.Aa.set("Online")}async function pC(r){r.Ta.forEach(((e,t)=>{$f(r,e)}))}async function mC(r,e){Tw(r),qf(r)?(r.Aa.la(e),Hf(r)):r.Aa.set("Unknown")}async function gC(r,e,t){if(r.Aa.set("Online"),e instanceof ow&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ta.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ta.delete(f),o.Ra.removeTarget(f))})(r,e)}catch(s){oe(Oo,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ky(r,s)}else if(e instanceof Yu?r.Ra.Ye(e):e instanceof sw?r.Ra.it(e):r.Ra.et(e),!t.isEqual(we.min()))try{const s=await vw(r.localStore);t.compareTo(s)>=0&&await(function(l,h){const f=l.Ra.Pt(h);return f.targetChanges.forEach(((m,v)=>{if(m.resumeToken.approximateByteSize()>0){const _=l.Ta.get(v);_&&l.Ta.set(v,_.withResumeToken(m.resumeToken,h))}})),f.targetMismatches.forEach(((m,v)=>{const _=l.Ta.get(m);if(!_)return;l.Ta.set(m,_.withResumeToken(xt.EMPTY_BYTE_STRING,_.snapshotVersion)),Ew(l,m);const T=new pi(_.target,m,v,_.sequenceNumber);$f(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(r,t)}catch(s){oe(Oo,"Failed to raise snapshot:",s),await Ky(r,s)}}async function Ky(r,e,t){if(!jo(e))throw e;r.Ia.add(1),await yl(r),r.Aa.set("Offline"),t||(t=()=>vw(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{oe(Oo,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Mc(r)}))}async function Qy(r,e){const t=Oe(r);t.asyncQueue.verifyOperationInProgress(),oe(Oo,"RemoteStore received new credentials");const s=vl(t);t.Ia.add(3),await yl(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Mc(t)}async function yC(r,e){const t=Oe(r);e?(t.Ia.delete(2),await Mc(t)):e||(t.Ia.add(2),await yl(t),t.Aa.set("Unknown"))}function $o(r){return r.Va||(r.Va=(function(t,s,o){const l=Oe(t);return l.ia(),new lC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:fC.bind(null,r),e_:pC.bind(null,r),n_:mC.bind(null,r),J_:gC.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),qf(r)?Hf(r):r.Aa.set("Unknown")):(await r.Va.stop(),Tw(r))}))),r.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new wi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,f=new Wf(e,t,h,o,l);return f.start(s),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Iw(r,e){if(Or("AsyncQueue",`${e}: ${r}`),jo(r))return new te(Y.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{static emptySet(e){return new Ao(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||pe.comparator(t.key,s.key):(t,s)=>pe.comparator(t.key,s.key),this.keyedMap=$a(),this.sortedSet=new ot(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ao)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Ao;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(){this.fa=new ot(pe.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Ee(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class bo{constructor(e,t,s,o,l,h,f,m,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=m,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new bo(e,t,Ao.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class _C{constructor(){this.queries=Jy(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=Oe(t),l=o.queries;o.queries=Jy(),l.forEach(((h,f)=>{for(const m of f.wa)m.onError(s)}))})(this,new te(Y.ABORTED,"Firestore shutting down"))}}function Jy(){return new Es((r=>K_(r)),Nc)}async function Sw(r,e){const t=Oe(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(s=2):(l=new vC,s=e.ba()?0:1);try{switch(s){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Iw(h,`Initialization of query '${yo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&Gf(t)}async function Aw(r,e){const t=Oe(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function wC(r,e){const t=Oe(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.wa)f.Ca(o)&&(s=!0);h.ya=o}}s&&Gf(t)}function EC(r,e,t){const s=Oe(r),o=s.queries.get(e);if(o)for(const l of o.wa)l.onError(t);s.queries.delete(e)}function Gf(r){r.Da.forEach((e=>{e.next()}))}var rf,Xy;(Xy=rf||(rf={})).Fa="default",Xy.Cache="cache";class Rw{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new bo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=bo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==rf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.key=e}}class Pw{constructor(e){this.key=e}}class TC{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ve(),this.mutatedKeys=Ve(),this.Xa=Q_(e),this.eu=new Ao(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new Yy,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((_,T)=>{const I=o.get(_),j=Dc(this.query,T)?T:null,$=!!I&&this.mutatedKeys.has(I.key),H=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let F=!1;I&&j?I.data.isEqual(j.data)?$!==H&&(s.track({type:3,doc:j}),F=!0):this.iu(I,j)||(s.track({type:2,doc:j}),F=!0,(m&&this.Xa(j,m)>0||v&&this.Xa(j,v)<0)&&(f=!0)):!I&&j?(s.track({type:0,doc:j}),F=!0):I&&!j&&(s.track({type:1,doc:I}),F=!0,(m||v)&&(f=!0)),F&&(j?(h=h.add(j),l=H?l.add(_):l.delete(_)):(h=h.delete(_),l=l.delete(_)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const _=this.query.limitType==="F"?h.last():h.first();h=h.delete(_.key),l=l.delete(_.key),s.track({type:1,doc:_})}return{eu:h,ru:s,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((_,T)=>(function(j,$){const H=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee(20277,{At:F})}};return H(j)-H($)})(_.type,T.type)||this.Xa(_.doc,T.doc))),this.su(s),o=o!=null&&o;const f=t&&!o?this.ou():[],m=this.Za.size===0&&this.current&&!o?1:0,v=m!==this.Ya;return this.Ya=m,h.length!==0||v?{snapshot:new bo(this.query,e.eu,l,h,e.mutatedKeys,m===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Yy,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ve(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new Pw(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new Cw(s))})),t}uu(e){this.Ha=e.qs,this.Za=Ve();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return bo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Kf="SyncEngine";class IC{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class SC{constructor(e){this.key=e,this.lu=!1}}class AC{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new Es((f=>K_(f)),Nc),this.Tu=new Map,this.Iu=new Set,this.du=new ot(pe.comparator),this.Eu=new Map,this.Au=new Ff,this.Ru={},this.Vu=new Map,this.mu=Do.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function RC(r,e,t=!0){const s=Ow(r);let o;const l=s.Pu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await kw(s,e,t,!0),o}async function CC(r,e){const t=Ow(r);await kw(t,e,!0,!1)}async function kw(r,e,t,s){const o=await ZR(r.localStore,ir(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await PC(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&ww(r.remoteStore,o),f}async function PC(r,e,t,s,o){r.gu=(T,I,j)=>(async function(H,F,le,ie){let ne=F.view.nu(le);ne.Ds&&(ne=await $y(H.localStore,F.query,!1).then((({documents:D})=>F.view.nu(D,ne))));const ce=ie&&ie.targetChanges.get(F.targetId),Ce=ie&&ie.targetMismatches.get(F.targetId)!=null,Te=F.view.applyChanges(ne,H.isPrimaryClient,ce,Ce);return ev(H,F.targetId,Te._u),Te.snapshot})(r,T,I,j);const l=await $y(r.localStore,e,!0),h=new TC(e,l.qs),f=h.nu(l.documents),m=gl.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),v=h.applyChanges(f,r.isPrimaryClient,m);ev(r,t,v._u);const _=new IC(e,t,h);return r.Pu.set(e,_),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),v.snapshot}async function kC(r,e,t){const s=Oe(r),o=s.Pu.get(e),l=s.Tu.get(o.targetId);if(l.length>1)return s.Tu.set(o.targetId,l.filter((h=>!Nc(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await tf(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Bf(s.remoteStore,o.targetId),sf(s,o.targetId)})).catch(Cc)):(sf(s,o.targetId),await tf(s.localStore,o.targetId,!0))}async function xC(r,e){const t=Oe(r),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Bf(t.remoteStore,s.targetId))}async function xw(r,e){const t=Oe(r);try{const s=await JR(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&(Ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Ze(h.lu,14607):o.removedDocuments.size>0&&(Ze(h.lu,42227),h.lu=!1))})),await Dw(t,s,e)}catch(s){await Cc(s)}}function Zy(r,e,t){const s=Oe(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const m=Oe(h);m.onlineState=f;let v=!1;m.queries.forEach(((_,T)=>{for(const I of T.wa)I.va(f)&&(v=!0)})),v&&Gf(m)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function NC(r,e,t){const s=Oe(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),l=o&&o.key;if(l){let h=new ot(pe.comparator);h=h.insert(l,Ut.newNoDocument(l,we.min()));const f=Ve().add(l),m=new Vc(we.min(),new Map,new ot(Re),h,f);await xw(s,m),s.du=s.du.remove(l),s.Eu.delete(e),Qf(s)}else await tf(s.localStore,e,!1).then((()=>sf(s,e,t))).catch(Cc)}function sf(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Tu.get(e))r.Pu.delete(s),t&&r.hu.pu(s,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((s=>{r.Au.containsKey(s)||Nw(r,s)}))}function Nw(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Bf(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),Qf(r))}function ev(r,e,t){for(const s of t)s instanceof Cw?(r.Au.addReference(s.key,e),DC(r,s)):s instanceof Pw?(oe(Kf,"Document no longer in limbo: "+s.key),r.Au.removeReference(s.key,e),r.Au.containsKey(s.key)||Nw(r,s.key)):Ee(19791,{yu:s})}function DC(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Iu.has(s)||(oe(Kf,"New document in limbo: "+t),r.Iu.add(s),Qf(r))}function Qf(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new pe(qe.fromString(e)),s=r.mu.next();r.Eu.set(s,new SC(t)),r.du=r.du.insert(t,s),ww(r.remoteStore,new pi(ir(Of(t.path)),s,"TargetPurposeLimboResolution",Pc.ue))}}async function Dw(r,e,t){const s=Oe(r),o=[],l=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((f,m)=>{h.push(s.gu(m,e,t).then((v=>{var _;if((v||t)&&s.isPrimaryClient){const T=v?!v.fromCache:(_=t==null?void 0:t.targetChanges.get(m.targetId))===null||_===void 0?void 0:_.current;s.sharedClientState.updateQueryState(m.targetId,T?"current":"not-current")}if(v){o.push(v);const T=jf.Es(m.targetId,v);l.push(T)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(m,v){const _=Oe(m);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>W.forEach(v,(I=>W.forEach(I.Is,(j=>_.persistence.referenceDelegate.addReference(T,I.targetId,j))).next((()=>W.forEach(I.ds,(j=>_.persistence.referenceDelegate.removeReference(T,I.targetId,j)))))))))}catch(T){if(!jo(T))throw T;oe(zf,"Failed to update sequence numbers: "+T)}for(const T of v){const I=T.targetId;if(!T.fromCache){const j=_.Fs.get(I),$=j.snapshotVersion,H=j.withLastLimboFreeSnapshotVersion($);_.Fs=_.Fs.insert(I,H)}}})(s.localStore,l))}async function OC(r,e){const t=Oe(r);if(!t.currentUser.isEqual(e)){oe(Kf,"User change. New user:",e.toKey());const s=await yw(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((f=>{f.forEach((m=>{m.reject(new te(Y.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Dw(t,s.Bs)}}function bC(r,e){const t=Oe(r),s=t.Eu.get(e);if(s&&s.lu)return Ve().add(s.key);{let o=Ve();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const f=t.Pu.get(h);o=o.unionWith(f.view.tu)}return o}}function Ow(r){const e=Oe(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=xw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NC.bind(null,e),e.hu.J_=wC.bind(null,e.eventManager),e.hu.pu=EC.bind(null,e.eventManager),e}class mc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Lc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return YR(this.persistence,new GR,e.initialUser,this.serializer)}Du(e){return new gw(Uf.Vi,this.serializer)}bu(e){return new tC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}mc.provider={build:()=>new mc};class VC extends mc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ze(this.persistence.referenceDelegate instanceof pc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new DR(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?tn.withCacheSize(this.cacheSizeBytes):tn.DEFAULT;return new gw((s=>pc.Vi(s,t)),this.serializer)}}class of{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Zy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=OC.bind(null,this.syncEngine),await yC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new _C})()}createDatastore(e){const t=Lc(e.databaseInfo.databaseId),s=(function(l){return new oC(l)})(e.databaseInfo);return(function(l,h,f,m){return new cC(l,h,f,m)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,f){return new dC(s,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>Zy(this.syncEngine,t,0)),(function(){return Wy.C()?new Wy:new nC})())}createSyncEngine(e,t){return(function(o,l,h,f,m,v,_){const T=new AC(o,l,h,f,m,v);return _&&(T.fu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Oe(o);oe(Oo,"RemoteStore shutting down."),l.Ia.add(5),await yl(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}of.provider={build:()=>new of};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Or("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="FirestoreClient";class LC{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=Pf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{oe(xi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(oe(xi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Iw(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function kd(r,e){r.asyncQueue.verifyOperationInProgress(),oe(xi,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await yw(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{Si("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{oe("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{Si("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),r._offlineComponents=e}async function tv(r,e){r.asyncQueue.verifyOperationInProgress();const t=await MC(r);oe(xi,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>Qy(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>Qy(e.remoteStore,o))),r._onlineComponents=e}async function MC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){oe(xi,"Using user provided OfflineComponentProvider");try{await kd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===Y.FAILED_PRECONDITION||o.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Si("Error using user provided cache. Falling back to memory cache: "+t),await kd(r,new mc)}}else oe(xi,"Using default OfflineComponentProvider"),await kd(r,new VC(void 0));return r._offlineComponents}async function FC(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(oe(xi,"Using user provided OnlineComponentProvider"),await tv(r,r._uninitializedComponentsProvider._online)):(oe(xi,"Using default OnlineComponentProvider"),await tv(r,new of))),r._onlineComponents}async function Vw(r){const e=await FC(r),t=e.eventManager;return t.onListen=RC.bind(null,e.syncEngine),t.onUnlisten=kC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=CC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=xC.bind(null,e.syncEngine),t}function UC(r,e,t={}){const s=new wi;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,m,v){const _=new bw({next:I=>{_.Ou(),h.enqueueAndForget((()=>Aw(l,T)));const j=I.docs.has(f);!j&&I.fromCache?v.reject(new te(Y.UNAVAILABLE,"Failed to get document because the client is offline.")):j&&I.fromCache&&m&&m.source==="server"?v.reject(new te(Y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(I)},error:I=>v.reject(I)}),T=new Rw(Of(f.path),_,{includeMetadataChanges:!0,ka:!0});return Sw(l,T)})(await Vw(r),r.asyncQueue,e,t,s))),s.promise}function jC(r,e,t={}){const s=new wi;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,m,v){const _=new bw({next:I=>{_.Ou(),h.enqueueAndForget((()=>Aw(l,T))),I.fromCache&&m.source==="server"?v.reject(new te(Y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(I)},error:I=>v.reject(I)}),T=new Rw(f,_,{includeMetadataChanges:!0,ka:!0});return Sw(l,T)})(await Vw(r),r.asyncQueue,e,t,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw="firestore.googleapis.com",rv=!0;class iv{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new te(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Mw,this.ssl=rv}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:rv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=mw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xR)throw new te(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_A("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lw((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new te(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new te(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new te(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new cA;switch(s.type){case"firstParty":return new pA(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new te(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=nv.get(t);s&&(oe("ComponentProvider","Removing Datastore"),nv.delete(t),s.terminate())})(this),Promise.resolve()}}function zC(r,e,t,s={}){var o;r=rl(r,Fc);const l=vs(e),h=r._getSettings(),f=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),m=`${e}:${t}`;l&&(ff(`https://${m}`),pf("Firestore",!0)),h.host!==Mw&&h.host!==m&&Si("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v=Object.assign(Object.assign({},h),{host:m,ssl:l,emulatorOptions:s});if(!ps(v,f)&&(r._setSettings(v),s.mockUserToken)){let _,T;if(typeof s.mockUserToken=="string")_=s.mockUserToken,T=Ft.MOCK_USER;else{_=Lv(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const I=s.mockUserToken.sub||s.mockUserToken.user_id;if(!I)throw new te(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Ft(I)}r._authCredentials=new hA(new P_(_,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Oi(this.firestore,e,this._query)}}class yt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}toJSON(){return{type:yt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ml(t,yt._jsonSchema))return new yt(e,s||null,new pe(qe.fromString(t.referencePath)))}}yt._jsonSchemaVersion="firestore/documentReference/1.0",yt._jsonSchema={type:ht("string",yt._jsonSchemaVersion),referencePath:ht("string")};class Ei extends Oi{constructor(e,t,s){super(e,t,Of(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new pe(e))}withConverter(e){return new Ei(this.firestore,e,this._path)}}function hs(r,e,...t){if(r=Wt(r),x_("collection","path",e),r instanceof Fc){const s=qe.fromString(e,...t);return gy(s),new Ei(r,null,s)}{if(!(r instanceof yt||r instanceof Ei))throw new te(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(qe.fromString(e,...t));return gy(s),new Ei(r.firestore,null,s)}}function Yf(r,e,...t){if(r=Wt(r),arguments.length===1&&(e=Pf.newId()),x_("doc","path",e),r instanceof Fc){const s=qe.fromString(e,...t);return my(s),new yt(r,null,new pe(s))}{if(!(r instanceof yt||r instanceof Ei))throw new te(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(qe.fromString(e,...t));return my(s),new yt(r.firestore,r instanceof Ei?r.converter:null,new pe(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv="AsyncQueue";class ov{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new _w(this,"async_queue_retry"),this.oc=()=>{const s=Pd();s&&oe(sv,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=Pd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Pd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new wi;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!jo(e))throw e;oe(sv,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,Or("INTERNAL UNHANDLED ERROR: ",av(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Wf.createAndSchedule(this,e,t,s,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&Ee(47125,{hc:av(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function av(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Jf extends Fc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new ov,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ov(e),this._firestoreClient=void 0,await e}}}function BC(r,e){const t=typeof r=="object"?r:yf(),s=typeof r=="string"?r:lc,o=Ec(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=Ov("firestore");l&&zC(o,...l)}return o}function Fw(r){if(r._terminated)throw new te(Y.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||$C(r),r._firestoreClient}function $C(r){var e,t,s;const o=r._freezeSettings(),l=(function(f,m,v,_){return new DA(f,m,v,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Lw(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new LC(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&(function(f){const m=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(m),_online:m}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this._byteString=e}static fromBase64String(e){try{return new En(xt.fromBase64String(e))}catch(t){throw new te(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new En(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:En._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ml(e,En._jsonSchema))return En.fromBase64String(e.bytes)}}En._jsonSchemaVersion="firestore/bytes/1.0",En._jsonSchema={type:ht("string",En._jsonSchemaVersion),bytes:ht("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new jt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sr._jsonSchemaVersion}}static fromJSON(e){if(ml(e,sr._jsonSchema))return new sr(e.latitude,e.longitude)}}sr._jsonSchemaVersion="firestore/geoPoint/1.0",sr._jsonSchema={type:ht("string",sr._jsonSchemaVersion),latitude:ht("number"),longitude:ht("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:or._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ml(e,or._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new or(e.vectorValues);throw new te(Y.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}or._jsonSchemaVersion="firestore/vectorValue/1.0",or._jsonSchema={type:ht("string",or._jsonSchemaVersion),vectorValues:ht("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=/^__.*__$/;function zw(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee(40011,{Ec:r})}}class Xf{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Xf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return af(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(zw(this.Ec)&&HC.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class qC{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Lc(e)}Dc(e,t,s,o=!1){return new Xf({Ec:e,methodName:t,bc:s,path:jt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function WC(r){const e=r._freezeSettings(),t=Lc(r._databaseId);return new qC(r._databaseId,!!e.ignoreUndefinedProperties,t)}function GC(r,e,t,s=!1){return Zf(t,r.Dc(s?4:3,e))}function Zf(r,e){if(Bw(r=Wt(r)))return QC("Unsupported field value:",e,r),KC(r,e);if(r instanceof jw)return(function(s,o){if(!zw(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const f of s){let m=Zf(f,o.yc(h));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),h++}return{arrayValue:{values:l}}})(r,e)}return(function(s,o){if((s=Wt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return tR(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Ye.fromDate(s);return{timestampValue:Zd(o.serializer,l)}}if(s instanceof Ye){const l=new Ye(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Zd(o.serializer,l)}}if(s instanceof sr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof En)return{bytesValue:aw(o.serializer,s._byteString)};if(s instanceof yt){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:lw(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof or)return(function(h,f){return{mapValue:{fields:{[U_]:{stringValue:j_},[uc]:{arrayValue:{values:h.toArray().map((v=>{if(typeof v!="number")throw f.wc("VectorValues must only contain numeric values.");return bf(f.serializer,v)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${Rc(s)}`)})(r,e)}function KC(r,e){const t={};return O_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zo(r,((s,o)=>{const l=Zf(o,e.Vc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function Bw(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ye||r instanceof sr||r instanceof En||r instanceof yt||r instanceof jw||r instanceof or)}function QC(r,e,t){if(!Bw(t)||!N_(t)){const s=Rc(t);throw s==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+s)}}const YC=new RegExp("[~\\*/\\[\\]]");function JC(r,e,t){if(e.search(YC)>=0)throw af(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Uw(...e.split("."))._internalPath}catch{throw af(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function af(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let m="";return(l||h)&&(m+=" (found",l&&(m+=` in field ${s}`),h&&(m+=` in document ${o}`),m+=")"),new te(Y.INVALID_ARGUMENT,f+r+m)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ep("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class XC extends $w{data(){return super.data()}}function ep(r,e){return typeof e=="string"?JC(r,e):e instanceof Uw?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new te(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tp{}class np extends tp{}function Ro(r,e,...t){let s=[];e instanceof tp&&s.push(e),s=s.concat(t),(function(l){const h=l.filter((m=>m instanceof ip)).length,f=l.filter((m=>m instanceof rp)).length;if(h>1||h>0&&f>0)throw new te(Y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class rp extends np{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new rp(e,t,s)}_apply(e){const t=this._parse(e);return qw(e._query,t),new Oi(e.firestore,e.converter,Qd(e._query,t))}_parse(e){const t=WC(e.firestore);return(function(l,h,f,m,v,_,T){let I;if(v.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new te(Y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){uv(T,_);const $=[];for(const H of T)$.push(lv(m,l,H));I={arrayValue:{values:$}}}else I=lv(m,l,T)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||uv(T,_),I=GC(f,h,T,_==="in"||_==="not-in");return ct.create(v,_,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class ip extends tp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ip(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:jn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const m of f)qw(h,m),h=Qd(h,m)})(e._query,t),new Oi(e.firestore,e.converter,Qd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class sp extends np{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new sp(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new te(Y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new te(Y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ll(l,h)})(e._query,this._field,this._direction);return new Oi(e.firestore,e.converter,(function(o,l){const h=o.explicitOrderBy.concat([l]);return new Bo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function eP(r,e="asc"){const t=e,s=ep("orderBy",r);return sp._create(s,t)}class op extends np{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new op(e,t,s)}_apply(e){return new Oi(e.firestore,e.converter,hc(e._query,this._limit,this._limitType))}}function Hw(r){return wA("limit",r),op._create("limit",r,"F")}function lv(r,e,t){if(typeof(t=Wt(t))=="string"){if(t==="")throw new te(Y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!G_(e)&&t.indexOf("/")!==-1)throw new te(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(qe.fromString(t));if(!pe.isDocumentKey(s))throw new te(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Sy(r,new pe(s))}if(t instanceof yt)return Sy(r,t._key);throw new te(Y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Rc(t)}.`)}function uv(r,e){if(!Array.isArray(r)||r.length===0)throw new te(Y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function qw(r,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new te(Y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(Y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class tP{convertValue(e,t="none"){switch(Pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return zo(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[uc].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>it(h.doubleValue)));return new or(l)}convertGeoPoint(e){return new sr(it(e.latitude),it(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=xc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(sl(e));default:return null}}convertTimestamp(e){const t=Ri(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=qe.fromString(e);Ze(pw(s),9688,{name:e});const o=new ol(s.get(1),s.get(3)),l=new pe(s.popFirst(5));return o.isEqual(t)||Or(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}class qa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ds extends $w{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ju(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ep("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te(Y.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ds._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ds._jsonSchemaVersion="firestore/documentSnapshot/1.0",ds._jsonSchema={type:ht("string",ds._jsonSchemaVersion),bundleSource:ht("string","DocumentSnapshot"),bundleName:ht("string"),bundle:ht("string")};class Ju extends ds{data(e={}){return super.data(e)}}class Co{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new qa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Ju(this._firestore,this._userDataWriter,s.key,s,new qa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const m=new Ju(o._firestore,o._userDataWriter,f.doc.key,f.doc,new qa(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:m,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const m=new Ju(o._firestore,o._userDataWriter,f.doc.key,f.doc,new qa(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,_=-1;return f.type!==0&&(v=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),_=h.indexOf(f.doc.key)),{type:nP(f.type),doc:m,oldIndex:v,newIndex:_}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te(Y.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Co._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Pf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function nP(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(r){r=rl(r,yt);const e=rl(r.firestore,Jf);return UC(Fw(e),r._key).then((t=>rP(e,r,t)))}Co._jsonSchemaVersion="firestore/querySnapshot/1.0",Co._jsonSchema={type:ht("string",Co._jsonSchemaVersion),bundleSource:ht("string","QuerySnapshot"),bundleName:ht("string"),bundle:ht("string")};class Ww extends tP{constructor(e){super(),this.firestore=e}convertBytes(e){return new En(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,t)}}function fs(r){r=rl(r,Oi);const e=rl(r.firestore,Jf),t=Fw(e),s=new Ww(e);return ZC(r._query),jC(t,r._query).then((o=>new Co(e,s,r,o)))}function rP(r,e,t){const s=t.docs.get(e._key),o=new Ww(r);return new ds(r,o,e._key,s,new qa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Uo=o})(_s),ms(new Ii("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),f=new Jf(new dA(s.getProvider("auth-internal")),new mA(h,s.getProvider("app-check-internal")),(function(v,_){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new te(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ol(v.options.projectId,_)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),tr(cy,hy,e),tr(cy,hy,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw="firebasestorage.googleapis.com",iP="storageBucket",sP=120*1e3,oP=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends ur{constructor(e,t,s=0){super(xd(e),`Firebase Storage: ${t} (${xd(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,cr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var lr;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(lr||(lr={}));function xd(r){return"storage/"+r}function aP(){const r="An unknown error occurred, please check the error payload for server response.";return new cr(lr.UNKNOWN,r)}function lP(){return new cr(lr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function uP(){return new cr(lr.CANCELED,"User canceled the upload/download.")}function cP(r){return new cr(lr.INVALID_URL,"Invalid URL '"+r+"'.")}function hP(r){return new cr(lr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function cv(r){return new cr(lr.INVALID_ARGUMENT,r)}function Kw(){return new cr(lr.APP_DELETED,"The Firebase app was deleted.")}function dP(r){return new cr(lr.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=Fn.makeFromUrl(e,t)}catch{return new Fn(e,"")}if(s.path==="")return s;throw hP(e)}static makeFromUrl(e,t){let s=null;const o="([A-Za-z0-9.\\-_]+)";function l(ce){ce.path.charAt(ce.path.length-1)==="/"&&(ce.path_=ce.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),m={bucket:1,path:3};function v(ce){ce.path_=decodeURIComponent(ce.path)}const _="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",j=new RegExp(`^https?://${T}/${_}/b/${o}/o${I}`,"i"),$={bucket:1,path:3},H=t===Gw?"(?:storage.googleapis.com|storage.cloud.google.com)":t,F="([^?#]*)",le=new RegExp(`^https?://${H}/${o}/${F}`,"i"),ne=[{regex:f,indices:m,postModify:l},{regex:j,indices:$,postModify:v},{regex:le,indices:{bucket:1,path:2},postModify:v}];for(let ce=0;ce<ne.length;ce++){const Ce=ne[ce],Te=Ce.regex.exec(e);if(Te){const D=Te[Ce.indices.bucket];let R=Te[Ce.indices.path];R||(R=""),s=new Fn(D,R),Ce.postModify(s);break}}if(s==null)throw cP(e);return s}}class fP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(r,e,t){let s=1,o=null,l=null,h=!1,f=0;function m(){return f===2}let v=!1;function _(...F){v||(v=!0,e.apply(null,F))}function T(F){o=setTimeout(()=>{o=null,r(j,m())},F)}function I(){l&&clearTimeout(l)}function j(F,...le){if(v){I();return}if(F){I(),_.call(null,F,...le);return}if(m()||h){I(),_.call(null,F,...le);return}s<64&&(s*=2);let ne;f===1?(f=2,ne=0):ne=(s+Math.random())*1e3,T(ne)}let $=!1;function H(F){$||($=!0,I(),!v&&(o!==null?(F||(f=2),clearTimeout(o),T(0)):F||(f=1)))}return T(0),l=setTimeout(()=>{h=!0,H(!0)},t),H}function mP(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(r){return r!==void 0}function hv(r,e,t,s){if(s<e)throw cv(`Invalid value for '${r}'. Expected ${e} or greater.`);if(s>t)throw cv(`Invalid value for '${r}'. Expected ${t} or less.`)}function yP(r){const e=encodeURIComponent;let t="?";for(const s in r)if(r.hasOwnProperty(s)){const o=e(s)+"="+e(r[s]);t=t+o+"&"}return t=t.slice(0,-1),t}var gc;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(gc||(gc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(r,e){const t=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,l=e.indexOf(r)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e,t,s,o,l,h,f,m,v,_,T,I=!0,j=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=m,this.timeout_=v,this.progressCallback_=_,this.connectionFactory_=T,this.retry=I,this.isUsingEmulator=j,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(($,H)=>{this.resolve_=$,this.reject_=H,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new Bu(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const m=f.loaded,v=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,v)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===gc.NO_ERROR,m=l.getStatus();if(!f||vP(m,this.additionalRetryCodes_)&&this.retry){const _=l.getErrorCode()===gc.ABORT;s(!1,new Bu(!1,null,_));return}const v=this.successCodes_.indexOf(m)!==-1;s(!0,new Bu(v,l))})},t=(s,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const m=this.callback_(f,f.getResponse());gP(m)?l(m):l()}catch(m){h(m)}else if(f!==null){const m=aP();m.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,m)):h(m)}else if(o.canceled){const m=this.appDelete_?Kw():uP();h(m)}else{const m=lP();h(m)}};this.canceled_?t(!1,new Bu(!1,null,!0)):this.backoffId_=pP(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&mP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Bu{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function wP(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function EP(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function TP(r,e){e&&(r["X-Firebase-GMPID"]=e)}function IP(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function SP(r,e,t,s,o,l,h=!0,f=!1){const m=yP(r.urlParams),v=r.url+m,_=Object.assign({},r.headers);return TP(_,e),wP(_,t),EP(_,l),IP(_,s),new _P(v,r.method,_,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,h,f)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function RP(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t){this._service=e,t instanceof Fn?this._location=t:this._location=Fn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new yc(e,t)}get root(){const e=new Fn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return RP(this._location.path)}get storage(){return this._service}get parent(){const e=AP(this._location.path);if(e===null)return null;const t=new Fn(this._location.bucket,e);return new yc(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw dP(e)}}function dv(r,e){const t=e==null?void 0:e[iP];return t==null?null:Fn.makeFromBucketSpec(t,r)}function CP(r,e,t,s={}){r.host=`${e}:${t}`;const o=vs(e);o&&(ff(`https://${r.host}/b`),pf("Storage",!0)),r._isUsingEmulator=!0,r._protocol=o?"https":"http";const{mockUserToken:l}=s;l&&(r._overrideAuthToken=typeof l=="string"?l:Lv(l,r.app.options.projectId))}class PP{constructor(e,t,s,o,l,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=h,this._bucket=null,this._host=Gw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=sP,this._maxUploadRetryTime=oP,this._requests=new Set,o!=null?this._bucket=Fn.makeFromBucketSpec(o,this._host):this._bucket=dv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Fn.makeFromBucketSpec(this._url,e):this._bucket=dv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new yc(this,e)}_makeRequest(e,t,s,o,l=!0){if(this._deleted)return new fP(Kw());{const h=SP(e,this._appId,s,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,o).getPromise()}}const fv="@firebase/storage",pv="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw="storage";function kP(r=yf(),e){r=Wt(r);const s=Ec(r,Qw).getImmediate({identifier:e}),o=Ov("storage");return o&&xP(s,...o),s}function xP(r,e,t,s={}){CP(r,e,t,s)}function NP(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new PP(t,s,o,e,_s)}function DP(){ms(new Ii(Qw,NP,"PUBLIC").setMultipleInstances(!0)),tr(fv,pv,""),tr(fv,pv,"esm2017")}DP();const OP={apiKey:"AIzaSyDvBE5-77eZO8T18EiJ_MwGAYo5j2bqhbk",authDomain:"holidayhack2025.firebaseapp.com",projectId:"holidayhack2025",storageBucket:"holidayhack2025.firebasestorage.app",messagingSenderId:"341227752777",appId:"1:341227752777:web:7b9017d3d2d83ccf481e98"},lp=Uv(OP),Nd=oA(lp),er=BC(lp);kP(lp);const Yw=K.createContext({}),_l=()=>K.useContext(Yw),bP=({children:r})=>{const[e,t]=K.useState(null),[s,o]=K.useState(null),[l,h]=K.useState(!0);K.useEffect(()=>KS(Nd,async T=>{if(T){t(T);try{const I=await ap(Yf(er,"gnomes",T.uid));I.exists()&&o({id:I.id,...I.data()})}catch(I){console.error("Error fetching gnome profile:",I)}}else t(null),o(null);h(!1)}),[]);const v={user:e,gnomeProfile:s,signIn:async(_,T)=>{try{return{success:!0,user:(await qS(Nd,_,T)).user}}catch(I){return{success:!1,error:I.message}}},signOut:async()=>{try{return await QS(Nd),{success:!0}}catch(_){return{success:!1,error:_.message}}},loading:l};return S.jsx(Yw.Provider,{value:v,children:r})},VP=()=>{const[r,e]=K.useState(""),[t,s]=K.useState(""),[o,l]=K.useState(""),[h,f]=K.useState(!1),{signIn:m,user:v}=_l(),_=_c();K.useEffect(()=>{v&&_("/dashboard")},[v,_]);const T=async I=>{I.preventDefault(),l(""),f(!0);const j=await m(r,t);j.success?_("/dashboard"):l(j.error||"Failed to sign in"),f(!1)};return S.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gnome-green px-4",children:S.jsxs("div",{className:"max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 border-4 border-gnome-purple",children:[S.jsxs("div",{className:"text-center mb-8",children:[S.jsx("img",{src:"/GnomeTeaLogo.png",alt:"GnomeTea",className:"mx-auto mb-4 w-64 h-auto"}),S.jsx("p",{className:"text-gnome-dark font-medium",children:"Spill the tea on your fellow gnomes!"})]}),S.jsxs("form",{onSubmit:T,className:"space-y-6",children:[o&&S.jsx("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded",children:o}),S.jsxs("div",{children:[S.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),S.jsx("input",{id:"email",type:"email",required:!0,value:r,onChange:I=>e(I.target.value),className:"w-full px-4 py-3 border-2 border-gnome-purple rounded-lg focus:ring-4 focus:ring-gnome-pink focus:border-gnome-purple shadow-sm",placeholder:"gnome@gnomemail.dosis"})]}),S.jsxs("div",{children:[S.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 mb-2",children:"Password"}),S.jsx("input",{id:"password",type:"password",required:!0,value:t,onChange:I=>s(I.target.value),className:"w-full px-4 py-3 border-2 border-gnome-purple rounded-lg focus:ring-4 focus:ring-gnome-pink focus:border-gnome-purple shadow-sm",placeholder:"Enter your password"})]}),S.jsx("button",{type:"submit",disabled:h,className:"w-full bg-gnome-purple text-white py-3 rounded-lg hover:bg-gnome-pink transition disabled:opacity-50 disabled:cursor-not-allowed font-bold text-lg shadow-lg",children:h?"Signing in...":"Sign In"})]}),S.jsx("div",{className:"mt-6 text-center text-sm text-gray-600",children:S.jsx("p",{children:"Don't have an account? Contact your local gnome administrator."})})]})})},Uc=({src:r,alt:e,size:t="md",className:s=""})=>{const[o,l]=K.useState(!1),h={xs:"w-8 h-8",sm:"w-10 h-10",md:"w-16 h-16",lg:"w-24 h-24",xl:"w-32 h-32"},f={xs:"text-xl",sm:"text-2xl",md:"text-5xl",lg:"text-6xl",xl:"text-8xl"};return!r||o?S.jsx("div",{className:`flex items-center justify-center ${f[t]}`,children:"🧙"}):S.jsx("img",{src:r,alt:e||"Gnome",className:`${h[t]} rounded-full object-cover border-2 border-gnome-purple ${s}`,onError:()=>l(!0),loading:"lazy"})},Ti=()=>{const{gnomeProfile:r,user:e,signOut:t}=_l(),s=_c(),[o,l]=K.useState(!1),h=async()=>{await t(),s("/login")},f="3loaihgxP0VwCTKmkHHFLe6FZ4m2";return K.useEffect(()=>{const m=()=>{const _=(e==null?void 0:e.uid)===f,T=window.ADMIN_UID===f;l(_||T)};m();const v=setInterval(m,500);return()=>clearInterval(v)},[e==null?void 0:e.uid]),S.jsx("nav",{className:"bg-white shadow-lg border-b-4 border-gnome-purple",children:S.jsx("div",{className:"max-w-7xl mx-auto px-4",children:S.jsxs("div",{className:"flex justify-between items-center h-20",children:[S.jsxs("div",{className:"flex items-center space-x-8",children:[S.jsx(mo,{to:"/dashboard",className:"flex items-center space-x-2",children:S.jsx("img",{src:"/GnomeTeaLogoNoBg.png",alt:"GnomeTea",className:"h-14 w-auto"})}),S.jsxs("div",{className:"hidden md:flex space-x-2",children:[S.jsx(mo,{to:"/dashboard",className:"text-gnome-dark hover:bg-gnome-green hover:text-white px-4 py-2 rounded-lg transition font-medium",children:"Home"}),S.jsx(mo,{to:"/tea",className:"text-gnome-dark hover:bg-gnome-purple hover:text-white px-4 py-2 rounded-lg transition font-medium",children:"Tea Feed"}),S.jsx(mo,{to:"/messages",className:"text-gnome-dark hover:bg-gnome-pink hover:text-white px-4 py-2 rounded-lg transition font-medium",children:"Messages"}),o&&S.jsx(mo,{to:"/admin",className:"text-gnome-dark hover:bg-gnome-accent-red hover:text-white px-4 py-2 rounded-lg transition font-medium",children:"🔒 Admin"})]})]}),S.jsx("div",{className:"flex items-center space-x-4",children:r&&S.jsxs("div",{className:"flex items-center space-x-3",children:[S.jsx(Uc,{src:r.avatarUrl,alt:r.name,size:"sm"}),S.jsx("span",{className:"text-sm font-medium text-gnome-dark",children:r.name||r.email}),S.jsx("button",{onClick:h,className:"bg-gnome-purple hover:bg-gnome-pink text-white px-4 py-2 rounded-lg transition font-medium",children:"Sign Out"})]})})]})})})},LP=()=>{const[r,e]=K.useState([]),[t,s]=K.useState(!0);K.useEffect(()=>{o()},[]);const o=async()=>{try{const l=Ro(hs(er,"gnomes"),Hw(20)),f=(await fs(l)).docs.map(m=>({id:m.id,...m.data()}));e(f)}catch(l){console.error("Error fetching gnomes:",l)}finally{s(!1)}};return S.jsxs("div",{className:"min-h-screen bg-gnome-cream",children:[S.jsx(Ti,{}),S.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-8",children:[S.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 mb-8 border-4 border-gnome-purple",children:[S.jsx("h1",{className:"text-4xl font-bold text-gnome-dark mb-4",children:"🌳 Gnome Community"}),S.jsx("p",{className:"text-gray-700",children:"Welcome to GnomeTea! Browse gnome profiles, read the latest tea, and stay connected with your gnome friends."})]}),t?S.jsxs("div",{className:"text-center py-12",children:[S.jsx("div",{className:"inline-block animate-spin rounded-full h-12 w-12 border-4 border-gnome-green border-t-transparent"}),S.jsx("p",{className:"mt-4 text-gnome-brown",children:"Loading gnomes..."})]}):S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:r.map(l=>S.jsx(mo,{to:`/gnome/${l.id}`,className:"bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border-2 border-transparent hover:border-gnome-purple transform hover:-translate-y-1",children:S.jsxs("div",{className:"flex items-center space-x-4",children:[S.jsx(Uc,{src:l.avatarUrl,alt:l.name,size:"md"}),S.jsxs("div",{className:"flex-1",children:[S.jsx("h3",{className:"font-bold text-xl text-gnome-dark",children:l.name||"Anonymous Gnome"}),S.jsx("p",{className:"text-sm text-gray-600 mt-1",children:l.homeLocation||"Wandering gnome"}),l.bio&&S.jsx("p",{className:"text-xs text-gray-500 mt-2 line-clamp-2",children:l.bio})]})]})},l.id))}),!t&&r.length===0&&S.jsx("div",{className:"text-center py-12 bg-white rounded-lg",children:S.jsx("p",{className:"text-gray-600",children:"No gnomes found. Add some data to get started!"})})]})]})},MP=()=>{const{gnomeId:r}=j0(),[e,t]=K.useState(null),[s,o]=K.useState([]),[l,h]=K.useState([]),[f,m]=K.useState(!0);K.useEffect(()=>{v()},[r]);const v=async()=>{try{const _=await ap(Yf(er,"gnomes",r));if(_.exists()){const T={id:_.id,..._.data()};t(T);const j=(await fs(hs(er,"tea"))).docs.map(F=>({id:F.id,...F.data()})),$=j.filter(F=>F.authorUid===r),H=j.filter(F=>{if(F.authorUid===r)return!1;const le=(F.content||"").toLowerCase(),ie=(T.name||"").toLowerCase();return le.includes(ie)});h($),o(H)}}catch(_){console.error("Error fetching gnome data:",_)}finally{m(!1)}};return f?S.jsxs("div",{className:"min-h-screen bg-gnome-cream",children:[S.jsx(Ti,{}),S.jsxs("div",{className:"text-center py-12",children:[S.jsx("div",{className:"inline-block animate-spin rounded-full h-12 w-12 border-4 border-gnome-green border-t-transparent"}),S.jsx("p",{className:"mt-4 text-gnome-brown",children:"Loading gnome profile..."})]})]}):e?S.jsxs("div",{className:"min-h-screen bg-gnome-cream",children:[S.jsx(Ti,{}),S.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[S.jsx("div",{className:"bg-white rounded-2xl shadow-lg p-8 mb-6 border-4 border-gnome-purple",children:S.jsxs("div",{className:"flex items-start space-x-6",children:[S.jsx(Uc,{src:e.avatarUrl,alt:e.name,size:"xl",className:"border-4"}),S.jsxs("div",{className:"flex-1",children:[S.jsx("h1",{className:"text-3xl font-bold text-gnome-dark mb-2",children:e.name||"Anonymous Gnome"}),S.jsxs("p",{className:"text-gray-600 mb-1",children:["📧 ",e.email]}),S.jsxs("p",{className:"text-gray-600 mb-4",children:["🏡 ",e.homeLocation||"Location unknown"]}),e.bio&&S.jsx("div",{className:"bg-gnome-cream p-4 rounded-lg",children:S.jsx("p",{className:"text-gray-700",children:e.bio})})]})]})}),S.jsxs("div",{className:"mb-8",children:[S.jsxs("h2",{className:"text-2xl font-bold text-gnome-dark mb-4",children:["☕ Tea About ",e.name]}),S.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"What others are saying..."}),s.length>0?S.jsx("div",{className:"space-y-4",children:s.map(_=>{var T,I,j;return S.jsxs("div",{className:"bg-white rounded-xl shadow-md p-6 border-l-4 border-gnome-accent-red",children:[S.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[S.jsx("span",{className:"text-sm font-medium text-gnome-dark",children:_.authorName||"Anonymous"}),S.jsx("span",{className:"text-sm text-gray-500",children:"spilled tea:"})]}),S.jsx("p",{className:"text-gray-700",children:_.content}),S.jsxs("div",{className:"mt-3 text-sm text-gray-500",children:[(j=(I=(T=_.timestamp)==null?void 0:T.toDate)==null?void 0:I.call(T))==null?void 0:j.toLocaleDateString(),_.likes&&` • ❤️ ${_.likes} likes`]})]},_.id)})}):S.jsx("div",{className:"bg-white rounded-xl shadow-md p-6 text-center",children:S.jsx("p",{className:"text-gray-600",children:"No one's talking about them... yet! 🤫"})})]}),S.jsxs("div",{children:[S.jsxs("h2",{className:"text-2xl font-bold text-gnome-dark mb-4",children:["🗣️ Tea By ",e.name]}),S.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"What they've been saying about others..."}),l.length>0?S.jsx("div",{className:"space-y-4",children:l.map(_=>{var T,I,j;return S.jsxs("div",{className:"bg-white rounded-xl shadow-md p-6 border-l-4 border-gnome-green",children:[S.jsx("p",{className:"text-gray-700",children:_.content}),S.jsxs("div",{className:"mt-3 text-sm text-gray-500",children:[(j=(I=(T=_.timestamp)==null?void 0:T.toDate)==null?void 0:I.call(T))==null?void 0:j.toLocaleDateString(),_.likes&&` • ❤️ ${_.likes} likes`]})]},_.id)})}):S.jsx("div",{className:"bg-white rounded-xl shadow-md p-6 text-center",children:S.jsx("p",{className:"text-gray-600",children:"They haven't spilled any tea yet 👀"})})]})]})]}):S.jsxs("div",{className:"min-h-screen bg-gnome-cream",children:[S.jsx(Ti,{}),S.jsx("div",{className:"max-w-4xl mx-auto px-4 py-8",children:S.jsx("div",{className:"bg-white rounded-lg shadow p-6 text-center",children:S.jsx("p",{className:"text-gray-600",children:"Gnome not found"})})})]})},FP=()=>{const[r,e]=K.useState([]),[t,s]=K.useState(!0),[o,l]=K.useState("");K.useEffect(()=>{h()},[]);const h=async()=>{try{const m=Ro(hs(er,"tea"),eP("timestamp","desc"),Hw(50)),_=(await fs(m)).docs.map(T=>({id:T.id,...T.data()}));e(_)}catch(m){console.error("Error fetching tea:",m)}finally{s(!1)}},f=r.filter(m=>{var v,_;return((v=m.content)==null?void 0:v.toLowerCase().includes(o.toLowerCase()))||((_=m.authorName)==null?void 0:_.toLowerCase().includes(o.toLowerCase()))});return S.jsxs("div",{className:"min-h-screen bg-gnome-cream",children:[S.jsx(Ti,{}),S.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[S.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 mb-6 border-4 border-gnome-purple",children:[S.jsx("h1",{className:"text-4xl font-bold text-gnome-dark mb-4",children:"☕ Tea Feed"}),S.jsx("p",{className:"text-gray-700",children:"All the latest gossip from the gnome community. What's brewing today?"})]}),S.jsx("div",{className:"mb-6",children:S.jsx("input",{type:"text",placeholder:"Search tea...",value:o,onChange:m=>l(m.target.value),className:"w-full px-4 py-3 border-2 border-gnome-purple rounded-xl focus:ring-4 focus:ring-gnome-pink focus:border-gnome-purple shadow-sm"})}),t?S.jsxs("div",{className:"text-center py-12",children:[S.jsx("div",{className:"inline-block animate-spin rounded-full h-12 w-12 border-4 border-gnome-green border-t-transparent"}),S.jsx("p",{className:"mt-4 text-gnome-brown",children:"Brewing tea..."})]}):S.jsx("div",{className:"space-y-4",children:f.map(m=>{var v,_,T;return S.jsx("div",{className:"bg-white rounded-xl shadow-md p-6 border-l-4 border-gnome-purple hover:shadow-lg transition",children:S.jsxs("div",{className:"flex items-start space-x-4",children:[S.jsx(Uc,{src:m.authorAvatarUrl,alt:m.authorName,size:"sm"}),S.jsxs("div",{className:"flex-1",children:[S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsx("h3",{className:"font-bold text-gnome-dark",children:m.authorName||"Anonymous Gnome"}),S.jsx("span",{className:"text-sm text-gray-500",children:((T=(_=(v=m.timestamp)==null?void 0:v.toDate)==null?void 0:_.call(v))==null?void 0:T.toLocaleDateString())||"Recently"})]}),S.jsx("p",{className:"mt-2 text-gray-700",children:m.content}),m.likes&&S.jsxs("div",{className:"mt-3 text-sm text-gray-500",children:["❤️ ",m.likes," gnomes liked this"]})]})]})},m.id)})}),!t&&f.length===0&&S.jsx("div",{className:"text-center py-12 bg-white rounded-lg",children:S.jsx("p",{className:"text-gray-600",children:o?"No tea found matching your search.":"No tea spilled yet!"})})]})]})},UP=()=>{const[r,e]=K.useState([]),[t,s]=K.useState(!0),{user:o}=_l();K.useEffect(()=>{l()},[]);const l=async()=>{try{const h=Ro(hs(er,"dms")),v=(await fs(h)).docs.map(_=>({id:_.id,..._.data()})).filter(_=>_.participants&&_.participants.includes(o==null?void 0:o.uid));e(v)}catch(h){console.error("Error fetching DMs:",h)}finally{s(!1)}};return S.jsxs("div",{className:"min-h-screen bg-gnome-cream",children:[S.jsx(Ti,{}),S.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[S.jsx("div",{className:"bg-white rounded-2xl shadow-lg p-8 mb-6 border-4 border-gnome-purple",children:S.jsx("h1",{className:"text-4xl font-bold text-gnome-dark",children:"💬 Direct Messages"})}),t?S.jsxs("div",{className:"text-center py-12",children:[S.jsx("div",{className:"inline-block animate-spin rounded-full h-12 w-12 border-4 border-gnome-green border-t-transparent"}),S.jsx("p",{className:"mt-4 text-gnome-brown",children:"Loading messages..."})]}):S.jsx("div",{className:"space-y-6",children:r.map(h=>{var f;return S.jsxs("div",{className:"bg-white rounded-xl shadow-md p-6 border-l-4 border-gnome-pink",children:[S.jsxs("div",{className:"flex items-center justify-between mb-4",children:[S.jsx("h3",{className:"font-bold text-gnome-dark",children:"Conversation"}),S.jsxs("span",{className:"text-sm text-gray-500",children:[((f=h.participants)==null?void 0:f.length)||0," participants"]})]}),S.jsx("div",{className:"space-y-3",children:h.messages&&h.messages.map((m,v)=>{var _,T,I;return S.jsxs("div",{className:`p-3 rounded-xl ${m.senderUid===(o==null?void 0:o.uid)?"bg-gnome-purple text-white ml-8":"bg-gnome-cream mr-8"}`,children:[S.jsx("p",{className:"text-sm font-medium mb-1",children:m.senderName||m.senderUid}),S.jsx("p",{children:m.content}),S.jsx("p",{className:"text-xs opacity-75 mt-1",children:(I=(T=(_=m.timestamp)==null?void 0:_.toDate)==null?void 0:T.call(_))==null?void 0:I.toLocaleString()})]},v)})})]},h.id)})}),!t&&r.length===0&&S.jsx("div",{className:"bg-white rounded-lg shadow p-6 text-center",children:S.jsx("p",{className:"text-gray-600",children:"No messages yet"})})]})]})},jP=()=>{const[r,e]=K.useState({totalGnomes:0,totalTea:0,totalDMs:0}),[t,s]=K.useState(!0),[o,l]=K.useState(null),[h,f]=K.useState(!1),[m,v]=K.useState(!1),{user:_}=_l(),T="3loaihgxP0VwCTKmkHHFLe6FZ4m2";typeof window<"u"&&(window.EXPECTED_ADMIN_UID=T),K.useEffect(()=>{const $=()=>{const F=(_==null?void 0:_.uid)===T,le=window.ADMIN_UID===T,ie=F||le;v(ie),ie&&!o&&j()};$();const H=setInterval($,500);return()=>clearInterval(H)},[_==null?void 0:_.uid,o]),K.useEffect(()=>{I()},[]);const I=async()=>{try{const $=await fs(Ro(hs(er,"gnomes"))),H=await fs(Ro(hs(er,"tea"))),F=await fs(Ro(hs(er,"dms")));e({totalGnomes:$.size,totalTea:H.size,totalDMs:F.size})}catch($){console.error("Error fetching stats:",$)}finally{s(!1)}},j=async()=>{f(!0);try{const $=Yf(er,"admins","secret_operations"),H=await ap($);H.exists()&&(l(H.data()),console.log("🔓 Secret data loaded:",H.data()))}catch($){console.error("Error fetching secret data:",$)}finally{f(!1)}};return m?S.jsxs("div",{className:"min-h-screen bg-gnome-cream",children:[S.jsx(Ti,{}),S.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[S.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 mb-6 border-4 border-gnome-accent-red",children:[S.jsx("h1",{className:"text-4xl font-bold text-gnome-dark",children:"🔒 Operations Dashboard"}),S.jsx("p",{className:"text-gray-600 mt-2",children:"Dosis Neighborhood Coordination Center"}),S.jsx("p",{className:"text-xs text-green-600 mt-2",children:"✓ Admin access granted"})]}),t?S.jsxs("div",{className:"text-center py-12",children:[S.jsx("div",{className:"inline-block animate-spin rounded-full h-12 w-12 border-4 border-gnome-green border-t-transparent"}),S.jsx("p",{className:"mt-4 text-gnome-brown",children:"Loading statistics..."})]}):S.jsxs(S.Fragment,{children:[S.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[S.jsx("div",{className:"bg-white rounded-xl shadow-md p-6 border-l-4 border-gnome-accent-red",children:S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsxs("div",{children:[S.jsx("p",{className:"text-gray-600 text-sm font-medium",children:"Active Agents"}),S.jsx("p",{className:"text-3xl font-bold text-gnome-dark",children:r.totalGnomes})]}),S.jsx("div",{className:"text-4xl",children:"🧙"})]})}),S.jsx("div",{className:"bg-white rounded-xl shadow-md p-6 border-l-4 border-gnome-accent-blue",children:S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsxs("div",{children:[S.jsx("p",{className:"text-gray-600 text-sm font-medium",children:"Public Posts"}),S.jsx("p",{className:"text-3xl font-bold text-gnome-dark",children:r.totalTea})]}),S.jsx("div",{className:"text-4xl",children:"☕"})]})}),S.jsx("div",{className:"bg-white rounded-xl shadow-md p-6 border-l-4 border-gnome-accent-yellow",children:S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsxs("div",{children:[S.jsx("p",{className:"text-gray-600 text-sm font-medium",children:"Secure Channels"}),S.jsx("p",{className:"text-3xl font-bold text-gnome-dark",children:r.totalDMs})]}),S.jsx("div",{className:"text-4xl",children:"💬"})]})})]}),S.jsxs("div",{className:"bg-white rounded-xl shadow-md p-6 border-l-4 border-gnome-purple",children:[S.jsx("h2",{className:"text-xl font-bold text-gnome-dark mb-4",children:"System Information"}),S.jsxs("div",{className:"space-y-2 text-sm",children:[S.jsxs("p",{children:[S.jsx("span",{className:"font-medium",children:"Network:"})," Dosis Neighborhood"]}),S.jsxs("p",{children:[S.jsx("span",{className:"font-medium",children:"Platform:"})," GnomeTea Social Network"]}),S.jsxs("p",{children:[S.jsx("span",{className:"font-medium",children:"Coordinator ID:"})," ",T]}),S.jsxs("p",{children:[S.jsx("span",{className:"font-medium",children:"Current User:"})," ",_==null?void 0:_.uid]}),S.jsxs("p",{children:[S.jsx("span",{className:"font-medium",children:"window.ADMIN_UID:"})," ",window.ADMIN_UID||"not set"]}),S.jsxs("p",{children:[S.jsx("span",{className:"font-medium",children:"Status:"})," ",S.jsx("span",{className:"text-green-600",children:"Operational"})]})]})]}),o&&S.jsxs("div",{className:"mt-6 bg-purple-50 border-2 border-gnome-purple rounded-xl p-6",children:[S.jsxs("h3",{className:"font-bold text-gnome-dark mb-3 text-xl flex items-center",children:[S.jsx("span",{className:"mr-2",children:"🔒"})," Classified Operations"]}),S.jsxs("div",{className:"space-y-4",children:[S.jsxs("div",{className:"bg-white p-4 rounded-lg border border-gnome-purple",children:[S.jsx("p",{className:"text-sm font-medium text-gray-600 mb-1",children:"Operation Name"}),S.jsx("p",{className:"text-lg font-bold text-gnome-dark",children:o.operationName})]}),S.jsxs("div",{className:"bg-white p-4 rounded-lg border border-gnome-purple",children:[S.jsx("p",{className:"text-sm font-medium text-gray-600 mb-1",children:"Mission Briefing"}),S.jsx("p",{className:"text-gray-700",children:o.missionBriefing})]}),S.jsxs("div",{className:"bg-white p-4 rounded-lg border border-gnome-purple",children:[S.jsx("p",{className:"text-sm font-medium text-gray-600 mb-1",children:"Objective"}),S.jsx("p",{className:"text-gray-700",children:o.objective})]}),S.jsxs("div",{className:"bg-gnome-cream p-4 rounded-lg border-2 border-gnome-accent-red",children:[S.jsx("p",{className:"text-sm font-medium text-red-600 mb-2",children:"🔐 Agent Recognition Protocol"}),S.jsx("p",{className:"text-xs text-gray-600 mb-2",children:"All field agents must use the following passphrase when meeting fellow operatives:"}),S.jsx("div",{className:"bg-white p-3 rounded border border-red-300",children:S.jsx("p",{className:"font-mono text-lg font-bold text-center text-gnome-dark",children:o.passphrase})}),S.jsx("p",{className:"text-xs text-gray-500 mt-2 italic",children:"This passphrase identifies you as part of the organization. Protect it at all costs."})]}),S.jsxs("div",{className:"bg-white p-4 rounded-lg border border-gray-300",children:[S.jsx("p",{className:"text-sm font-medium text-gray-600 mb-1",children:"Status"}),S.jsx("span",{className:"inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium",children:o.status})]})]})]}),h&&S.jsxs("div",{className:"mt-6 text-center py-8",children:[S.jsx("div",{className:"inline-block animate-spin rounded-full h-8 w-8 border-4 border-gnome-purple border-t-transparent"}),S.jsx("p",{className:"mt-2 text-gray-600",children:"Loading classified data..."})]})]})]})]}):S.jsxs("div",{className:"min-h-screen bg-gnome-cream",children:[S.jsx(Ti,{}),S.jsx("div",{className:"max-w-4xl mx-auto px-4 py-8",children:S.jsxs("div",{className:"bg-red-100 border border-red-400 rounded-lg p-6 text-center",children:[S.jsx("h2",{className:"text-2xl font-bold text-red-700 mb-2",children:"🚫 Access Denied"}),S.jsx("p",{className:"text-red-600",children:"You don't have permission to access the operations dashboard."}),S.jsxs("p",{className:"text-sm text-red-500 mt-4",children:["Current UID: ",(_==null?void 0:_.uid)||"Not authenticated"]}),S.jsxs("p",{className:"text-xs text-gray-500 mt-2",children:["Required admin UID: ",T]}),S.jsxs("p",{className:"text-xs text-gray-400 mt-1",children:["window.ADMIN_UID: ",window.ADMIN_UID||"not set"]})]})})]})},Ua=({children:r})=>{const{user:e,loading:t}=_l();return t?S.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gnome-cream",children:S.jsxs("div",{className:"text-center",children:[S.jsx("div",{className:"inline-block animate-spin rounded-full h-12 w-12 border-4 border-gnome-green border-t-transparent"}),S.jsx("p",{className:"mt-4 text-gnome-brown",children:"Loading GnomeTea..."})]})}):e?r:S.jsx(Pv,{to:"/login",replace:!0})};function zP(){return S.jsx(bP,{children:S.jsx(uT,{children:S.jsxs(nT,{children:[S.jsx(ai,{path:"/login",element:S.jsx(VP,{})}),S.jsx(ai,{path:"/dashboard",element:S.jsx(Ua,{children:S.jsx(LP,{})})}),S.jsx(ai,{path:"/gnome/:gnomeId",element:S.jsx(Ua,{children:S.jsx(MP,{})})}),S.jsx(ai,{path:"/tea",element:S.jsx(Ua,{children:S.jsx(FP,{})})}),S.jsx(ai,{path:"/messages",element:S.jsx(Ua,{children:S.jsx(UP,{})})}),S.jsx(ai,{path:"/admin",element:S.jsx(Ua,{children:S.jsx(jP,{})})}),S.jsx(ai,{path:"/",element:S.jsx(Pv,{to:"/login",replace:!0})})]})})})}c0.createRoot(document.getElementById("root")).render(S.jsx(gv.StrictMode,{children:S.jsx(zP,{})}));
