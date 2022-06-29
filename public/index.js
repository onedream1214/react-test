
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
	'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var react = {exports: {}};

	var react_production_min = {};

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	var objectAssign;
	var hasRequiredObjectAssign;

	function requireObjectAssign () {
		if (hasRequiredObjectAssign) return objectAssign;
		hasRequiredObjectAssign = 1;
		/* eslint-disable no-unused-vars */
		var getOwnPropertySymbols = Object.getOwnPropertySymbols;
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		var propIsEnumerable = Object.prototype.propertyIsEnumerable;

		function toObject(val) {
			if (val === null || val === undefined) {
				throw new TypeError('Object.assign cannot be called with null or undefined');
			}

			return Object(val);
		}

		function shouldUseNative() {
			try {
				if (!Object.assign) {
					return false;
				}

				// Detect buggy property enumeration order in older V8 versions.

				// https://bugs.chromium.org/p/v8/issues/detail?id=4118
				var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
				test1[5] = 'de';
				if (Object.getOwnPropertyNames(test1)[0] === '5') {
					return false;
				}

				// https://bugs.chromium.org/p/v8/issues/detail?id=3056
				var test2 = {};
				for (var i = 0; i < 10; i++) {
					test2['_' + String.fromCharCode(i)] = i;
				}
				var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
					return test2[n];
				});
				if (order2.join('') !== '0123456789') {
					return false;
				}

				// https://bugs.chromium.org/p/v8/issues/detail?id=3056
				var test3 = {};
				'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
					test3[letter] = letter;
				});
				if (Object.keys(Object.assign({}, test3)).join('') !==
						'abcdefghijklmnopqrst') {
					return false;
				}

				return true;
			} catch (err) {
				// We don't expect any of the above to throw, but better to be safe.
				return false;
			}
		}

		objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
			var from;
			var to = toObject(target);
			var symbols;

			for (var s = 1; s < arguments.length; s++) {
				from = Object(arguments[s]);

				for (var key in from) {
					if (hasOwnProperty.call(from, key)) {
						to[key] = from[key];
					}
				}

				if (getOwnPropertySymbols) {
					symbols = getOwnPropertySymbols(from);
					for (var i = 0; i < symbols.length; i++) {
						if (propIsEnumerable.call(from, symbols[i])) {
							to[symbols[i]] = from[symbols[i]];
						}
					}
				}
			}

			return to;
		};
		return objectAssign;
	}

	/** @license React v17.0.0
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReact_production_min;

	function requireReact_production_min () {
		if (hasRequiredReact_production_min) return react_production_min;
		hasRequiredReact_production_min = 1;
	var l=requireObjectAssign(),n=60103,p=60106;react_production_min.Fragment=60107;react_production_min.StrictMode=60108;react_production_min.Profiler=60114;var q=60109,r=60110,t=60112;react_production_min.Suspense=60113;var u=60115,v=60116;
		if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");react_production_min.Fragment=w("react.fragment");react_production_min.StrictMode=w("react.strict_mode");react_production_min.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");react_production_min.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy");}var x="function"===typeof Symbol&&Symbol.iterator;
		function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return "function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
		var A={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A;}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState");};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};
		function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A;}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
		function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f;}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return {$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
		function K(a,b){return {$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return "object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
		function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0;}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
		0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d);}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
		function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b);},function(b){0===a._status&&(a._status=2,a._result=b);});}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
		react_production_min.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments);},c);},count:function(a){var b=0;P(a,function(){b++;});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};react_production_min.Component=C;react_production_min.PureComponent=E;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
		react_production_min.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g;}return {$$typeof:n,type:a.type,
		key:d,ref:k,props:e,_owner:h}};react_production_min.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};react_production_min.createElement=J;react_production_min.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};react_production_min.forwardRef=function(a){return {$$typeof:t,render:a}};react_production_min.isValidElement=L;
		react_production_min.lazy=function(a){return {$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};react_production_min.memo=function(a,b){return {$$typeof:u,type:a,compare:void 0===b?null:b}};react_production_min.useCallback=function(a,b){return S().useCallback(a,b)};react_production_min.useContext=function(a,b){return S().useContext(a,b)};react_production_min.useDebugValue=function(){};react_production_min.useEffect=function(a,b){return S().useEffect(a,b)};react_production_min.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
		react_production_min.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return S().useMemo(a,b)};react_production_min.useReducer=function(a,b,c){return S().useReducer(a,b,c)};react_production_min.useRef=function(a){return S().useRef(a)};react_production_min.useState=function(a){return S().useState(a)};react_production_min.version="17.0.0";
		return react_production_min;
	}

	(function (module) {

		{
		  module.exports = requireReact_production_min();
		}
	} (react));

	var React = /*@__PURE__*/getDefaultExportFromCjs(react.exports);

	var reactDom = {exports: {}};

	var reactDom_production_min = {};

	var scheduler = {exports: {}};

	var scheduler_production_min = {};

	/** @license React v0.20.2
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredScheduler_production_min;

	function requireScheduler_production_min () {
		if (hasRequiredScheduler_production_min) return scheduler_production_min;
		hasRequiredScheduler_production_min = 1;
		(function (exports) {
	var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q};}
			if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null;}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0));};g=function(a,b){u=setTimeout(a,b);};h=function(){clearTimeout(u);};exports.unstable_shouldYield=function(){return !1};k=exports.unstable_forceFrameRate=function(){};}else {var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
			window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
			E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5;};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null);}catch(b){throw G.postMessage(null),b;}}else A=!1;};f=function(a){B=a;A||(A=!0,G.postMessage(null));};g=function(a,b){C=
			x(function(){a(exports.unstable_now());},b);};h=function(){y(C);C=-1;};}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
			function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
			function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M);}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else {var b=J(M);null!==b&&g(U,b.startTime-a);}}
			function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b);}else K(L);O=J(L);}if(null!==O)var m=!0;else {var n=J(M);null!==n&&g(U,n.startTime-b);m=!1;}return m}finally{O=null,P=c,Q=!1;}}var W=k;exports.unstable_IdlePriority=5;
			exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V));};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
			exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P;}var c=P;P=b;try{return a()}finally{P=c;}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=P;P=a;try{return b()}finally{P=c;}};
			exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
			exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c;}}};
	} (scheduler_production_min));
		return scheduler_production_min;
	}

	var hasRequiredScheduler;

	function requireScheduler () {
		if (hasRequiredScheduler) return scheduler.exports;
		hasRequiredScheduler = 1;
		(function (module) {

			{
			  module.exports = requireScheduler_production_min();
			}
	} (scheduler));
		return scheduler.exports;
	}

	/** @license React v17.0.0
	 * react-dom.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactDom_production_min;

	function requireReactDom_production_min () {
		if (hasRequiredReactDom_production_min) return reactDom_production_min;
		hasRequiredReactDom_production_min = 1;
	var aa=react.exports,m=requireObjectAssign(),r=requireScheduler();function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b);}
		function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a]);}
		var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
		ja={},ka={};function la(a){if(ia.call(ka,a))return !0;if(ia.call(ja,a))return !1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return !1}function ma(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
		function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var D={};
		"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1);});
		["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1);});
		["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1);});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1);});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1);});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1);});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
		"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
		pa);D[b]=new B(b,1,!1,a,null,!1,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1);});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1);});
		D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0);});
		function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))));}
		var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
		if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden");}
		var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return "function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||"";}return "\n"+Ma+a}var Oa=!1;
		function Pa(a,b){if(!a||Oa)return "";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(k){var d=k;}Reflect.construct(a,[],b);}else {try{b.call();}catch(k){d=k;}a.call(b.prototype);}else {try{throw Error();}catch(k){d=k;}a();}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
		f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return "\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Na(a):""}
		function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return ""}}
		function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return "Fragment";case ta:return "Portal";case xa:return "Profiler";case wa:return "StrictMode";case Ba:return "Suspense";case Ca:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return (a.displayName||"Context")+".Consumer";case ya:return (a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
		return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return ""}}function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
		function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
		null;delete a[b];}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
		function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1);}
		function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
		function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
		function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}function eb(a,b){a=m({children:void 0},b);if(b=db(b.children))a.children=b;return a}
		function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
		function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}
		function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
		function lb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
		var nb,ob=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else {nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
		function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
		var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
		floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a];});});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
		function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
		function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
		function wb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
		function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb();}
		function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb();}}
		function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==
		typeof c)throw Error(y(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0;}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb);}catch(a){Pb=!1;}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(n){this.onError(n);}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a;}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments);}
		function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null;}else throw Error(y(198));Ub||(Ub=!0,Vb=l);}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y(188));}
		function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling;}throw Error(y(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
		c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else {if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return null}
		function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return !0;b=b.return;}return !1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
		function rc(a,b,c,d,e){return {blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId);}}
		function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
		function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return !0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return !1}
		function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){gc(c);});});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
		function xc(a){if(null!==a.blockedOn)return !1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift();}return !0}function zc(a,b,c){xc(a)&&c.delete(b);}
		function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift();}null===a.blockedOn&&jc.shift();}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc);}
		function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ac)));}
		function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift();}
		function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
		fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
		var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
		"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d]);}}var Qc=r.unstable_now;Qc();var F=8;
		function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
		F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}
		function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F));}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e;}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
		function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y(358,a));}function Yc(a){return a&-a}
		function Zc(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c;}var Vc=Math.clz32?Math.clz32:$c,ad=Math.log,bd=Math.LN2;function $c(a){return 0===a?32:31-(ad(a)/bd|0)|0}var cd=r.unstable_UserBlockingPriority,dd=r.unstable_runWithPriority,ed=!0;function fd(a,b,c,d){Kb||Ib();var e=gd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d);}finally{(Kb=f)||Mb();}}function hd(a,b,c,d){dd(cd,gd.bind(null,a,b,c,d));}
		function gd(a,b,c,d){if(ed){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else {var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else {if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d);}id(a,b,d,null,c);}}}}
		function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else {var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null;}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null;}else f!==e&&(e=null);}}id(a,b,d,e,c);return null}var jd=null,kd=null,ld=null;
		function md(){if(ld)return ld;var a,b=kd,c=b.length,d,e="value"in jd?jd.value:jd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return ld=e.slice(a,1<d?1-d:void 0)}function nd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function od(){return !0}function pd(){return !1}
		function qd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?od:pd;this.isPropagationStopped=pd;return this}m(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
		(a.returnValue=!1),this.isDefaultPrevented=od);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=od);},persist:function(){},isPersistent:od});return b}
		var rd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sd=qd(rd),td=m({},rd,{view:0,detail:0}),ud=qd(td),vd,wd,xd,zd=m({},td,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
		a)return a.movementX;a!==xd&&(xd&&"mousemove"===a.type?(vd=a.screenX-xd.screenX,wd=a.screenY-xd.screenY):wd=vd=0,xd=a);return vd},movementY:function(a){return "movementY"in a?a.movementY:wd}}),Ad=qd(zd),Bd=m({},zd,{dataTransfer:0}),Cd=qd(Bd),Dd=m({},td,{relatedTarget:0}),Ed=qd(Dd),Fd=m({},rd,{animationName:0,elapsedTime:0,pseudoElement:0}),Gd=qd(Fd),Hd=m({},rd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Id=qd(Hd),Jd=m({},rd,{data:0}),Kd=qd(Jd),Ld={Esc:"Escape",
		Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Md={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
		119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Od(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Nd[a])?!!b[a]:!1}function yd(){return Od}
		var Pd=m({},td,{key:function(a){if(a.key){var b=Ld[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=nd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Md[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yd,charCode:function(a){return "keypress"===a.type?nd(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
		a.type?nd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Qd=qd(Pd),Rd=m({},zd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sd=qd(Rd),Td=m({},td,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yd}),Ud=qd(Td),Vd=m({},rd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wd=qd(Vd),Xd=m({},zd,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
		deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Yd=qd(Xd),Zd=[9,13,27,32],$d=fa&&"CompositionEvent"in window,ae=null;fa&&"documentMode"in document&&(ae=document.documentMode);var be=fa&&"TextEvent"in window&&!ae,ce=fa&&(!$d||ae&&8<ae&&11>=ae),de=String.fromCharCode(32),ee=!1;
		function fe(a,b){switch(a){case "keyup":return -1!==Zd.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return !0;default:return !1}}function ge(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var he=!1;function ie(a,b){switch(a){case "compositionend":return ge(b);case "keypress":if(32!==b.which)return null;ee=!0;return de;case "textInput":return a=b.data,a===de&&ee?null:a;default:return null}}
		function je(a,b){if(he)return "compositionend"===a||!$d&&fe(a,b)?(a=md(),ld=kd=jd=null,he=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return ce&&"ko"!==b.locale?null:b.data;default:return null}}
		var ke={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function le(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!ke[a.type]:"textarea"===b?!0:!1}function me(a,b,c,d){Eb(d);b=ne(b,"onChange");0<b.length&&(c=new sd("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var oe=null,pe=null;function qe(a){re(a,0);}function se(a){var b=te(a);if(Wa(b))return a}
		function ue(a,b){if("change"===a)return b}var ve=!1;if(fa){var we;if(fa){var xe="oninput"in document;if(!xe){var ye=document.createElement("div");ye.setAttribute("oninput","return;");xe="function"===typeof ye.oninput;}we=xe;}else we=!1;ve=we&&(!document.documentMode||9<document.documentMode);}function ze(){oe&&(oe.detachEvent("onpropertychange",Ae),pe=oe=null);}function Ae(a){if("value"===a.propertyName&&se(pe)){var b=[];me(b,pe,a,xb(a));a=qe;if(Kb)a(b);else {Kb=!0;try{Gb(a,b);}finally{Kb=!1,Mb();}}}}
		function Be(a,b,c){"focusin"===a?(ze(),oe=b,pe=c,oe.attachEvent("onpropertychange",Ae)):"focusout"===a&&ze();}function Ce(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return se(pe)}function De(a,b){if("click"===a)return se(b)}function Ee(a,b){if("input"===a||"change"===a)return se(b)}function Fe(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var Ge="function"===typeof Object.is?Object.is:Fe,He=Object.prototype.hasOwnProperty;
		function Ie(a,b){if(Ge(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++)if(!He.call(b,c[d])||!Ge(a[c[d]],b[c[d]]))return !1;return !0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
		function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Je(c);}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
		function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
		var Oe=fa&&"documentMode"in document&&11>=document.documentMode,Pe=null,Qe=null,Re=null,Se=!1;
		function Te(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Se||null==Pe||Pe!==Xa(d)||(d=Pe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Re&&Ie(Re,d)||(Re=d,d=ne(Qe,"onSelect"),0<d.length&&(b=new sd("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Pe)));}
		Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
		0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ue="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Ve=0;Ve<Ue.length;Ve++)Nc.set(Ue[Ve],0);ea("onMouseEnter",["mouseout","mouseover"]);
		ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
		da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var We="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xe=new Set("cancel close invalid load scroll toggle".split(" ").concat(We));
		function Ye(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null;}
		function re(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ye(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ye(e,h,l);f=k;}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
		function G(a,b){var c=Ze(b),d=a+"__bubble";c.has(d)||($e(b,a,2,!1),c.add(d));}var af="_reactListening"+Math.random().toString(36).slice(2);function bf(a){a[af]||(a[af]=!0,ba.forEach(function(b){Xe.has(b)||cf(b,!1,a,null);cf(b,!0,a,null);}));}
		function cf(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Xe.has(a)){if("scroll"!==a)return;e|=2;f=d;}var g=Ze(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),$e(f,a,e,b),g.add(h));}
		function $e(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=fd;break;case 1:e=hd;break;default:e=gd;}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1);}
		function id(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Nb(function(){var d=f,e=xb(c),g=[];
		a:{var h=Mc.get(a);if(void 0!==h){var k=sd,x=a;switch(a){case "keypress":if(0===nd(c))break a;case "keydown":case "keyup":k=Qd;break;case "focusin":x="focus";k=Ed;break;case "focusout":x="blur";k=Ed;break;case "beforeblur":case "afterblur":k=Ed;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Ad;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
		Cd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Ud;break;case Ic:case Jc:case Kc:k=Gd;break;case Lc:k=Wd;break;case "scroll":k=ud;break;case "wheel":k=Yd;break;case "copy":case "cut":case "paste":k=Id;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Sd;}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
		t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(df(t,v,q))));if(z)break;t=t.return;}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ef]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
		x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null;}else k=null,x=d;if(k!==x){w=Ad;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Sd,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:te(k);q=null==x?h:te(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=ff(q))t++;q=0;for(v=u;v;v=ff(v))q++;for(;0<t-q;)w=ff(w),t--;for(;0<q-t;)u=
		ff(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=ff(w);u=ff(u);}w=null;}else w=null;null!==k&&gf(g,h,k,w,!1);null!==x&&null!==z&&gf(g,z,x,w,!0);}}}a:{h=d?te(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ue;else if(le(h))if(ve)J=Ee;else {J=Ce;var K=Be;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=De);if(J&&(J=J(a,d))){me(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
		K.controlled&&"number"===h.type&&bb(h,"number",h.value);}K=d?te(d):window;switch(a){case "focusin":if(le(K)||"true"===K.contentEditable)Pe=K,Qe=d,Re=null;break;case "focusout":Re=Qe=Pe=null;break;case "mousedown":Se=!0;break;case "contextmenu":case "mouseup":case "dragend":Se=!1;Te(g,c,e);break;case "selectionchange":if(Oe)break;case "keydown":case "keyup":Te(g,c,e);}var Q;if($d)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
		case "compositionupdate":L="onCompositionUpdate";break b}L=void 0;}else he?fe(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(ce&&"ko"!==c.locale&&(he||"onCompositionStart"!==L?"onCompositionEnd"===L&&he&&(Q=md()):(jd=e,kd="value"in jd?jd.value:jd.textContent,he=!0)),K=ne(d,L),0<K.length&&(L=new Kd(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=ge(c),null!==Q&&(L.data=Q))));if(Q=be?ie(a,c):je(a,c))d=ne(d,"onBeforeInput"),0<d.length&&(e=new Kd("onBeforeInput",
		"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q);}re(g,b);});}function df(a,b,c){return {instance:a,listener:b,currentTarget:c}}function ne(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(df(a,f,e)),f=Ob(a,b),null!=f&&d.push(df(a,f,e)));a=a.return;}return d}function ff(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
		function gf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(df(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(df(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}function hf(){}var jf=null,kf=null;function lf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return !!b.autoFocus}return !1}
		function mf(a,b){return "textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var nf="function"===typeof setTimeout?setTimeout:void 0,of="function"===typeof clearTimeout?clearTimeout:void 0;function pf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""));}
		function qf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function rf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var sf=0;function tf(a){return {$$typeof:Ga,toString:a,valueOf:a}}var uf=Math.random().toString(36).slice(2),vf="__reactFiber$"+uf,wf="__reactProps$"+uf,ef="__reactContainer$"+uf,xf="__reactEvents$"+uf;
		function wc(a){var b=a[vf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ef]||c[vf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=rf(a);null!==a;){if(c=a[vf])return c;a=rf(a);}return b}a=c;c=a.parentNode;}return null}function Cb(a){a=a[vf]||a[ef];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function te(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[wf]||null}
		function Ze(a){var b=a[xf];void 0===b&&(b=a[xf]=new Set);return b}var yf=[],zf=-1;function Af(a){return {current:a}}function H(a){0>zf||(a.current=yf[zf],yf[zf]=null,zf--);}function I(a,b){zf++;yf[zf]=a.current;a.current=b;}var Bf={},M=Af(Bf),N=Af(!1),Cf=Bf;
		function Df(a,b){var c=a.type.contextTypes;if(!c)return Bf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ef(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ff(){H(N);H(M);}function Gf(a,b,c){if(M.current!==Bf)throw Error(y(168));I(M,b);I(N,c);}
		function Hf(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return m({},c,d)}function If(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Bf;Cf=M.current;I(M,a);I(N,N.current);return !0}function Jf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=Hf(a,b,Cf),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c);}
		var Kf=null,Lf=null,Mf=r.unstable_runWithPriority,Nf=r.unstable_scheduleCallback,Of=r.unstable_cancelCallback,Pf=r.unstable_shouldYield,Qf=r.unstable_requestPaint,Rf=r.unstable_now,Sf=r.unstable_getCurrentPriorityLevel,Tf=r.unstable_ImmediatePriority,Uf=r.unstable_UserBlockingPriority,Vf=r.unstable_NormalPriority,Wf=r.unstable_LowPriority,Xf=r.unstable_IdlePriority,Yf={},Zf=void 0!==Qf?Qf:function(){},$f=null,ag=null,bg=!1,cg=Rf(),O=1E4>cg?Rf:function(){return Rf()-cg};
		function dg(){switch(Sf()){case Tf:return 99;case Uf:return 98;case Vf:return 97;case Wf:return 96;case Xf:return 95;default:throw Error(y(332));}}function eg(a){switch(a){case 99:return Tf;case 98:return Uf;case 97:return Vf;case 96:return Wf;case 95:return Xf;default:throw Error(y(332));}}function fg(a,b){a=eg(a);return Mf(a,b)}function gg(a,b,c){a=eg(a);return Nf(a,b,c)}function hg(){if(null!==ag){var a=ag;ag=null;Of(a);}ig();}
		function ig(){if(!bg&&null!==$f){bg=!0;var a=0;try{var b=$f;fg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});$f=null;}catch(c){throw null!==$f&&($f=$f.slice(a+1)),Nf(Tf,hg),c;}finally{bg=!1;}}}var jg=ra.ReactCurrentBatchConfig;function kg(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var lg=Af(null),mg=null,ng=null,og=null;function pg(){og=ng=mg=null;}
		function qg(a){var b=lg.current;H(lg);a.type._context._currentValue=b;}function rg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return;}}function sg(a,b){mg=a;og=ng=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(tg=!0),a.firstContext=null);}
		function ug(a,b){if(og!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)og=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===ng){if(null===mg)throw Error(y(308));ng=b;mg.dependencies={lanes:0,firstContext:b,responders:null};}else ng=ng.next=b;}return a._currentValue}var vg=!1;function wg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null};}
		function xg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function yg(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function zg(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}}
		function Ag(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
		b;c.lastBaseUpdate=b;}
		function Bg(a,b,c,d){var e=a.updateQueue;vg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k);}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
		next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=m({},A,h);break a;case 2:vg=!0;}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f));}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
		f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null;}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Cg|=g;a.lanes=g;a.memoizedState=A;}}function Dg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d);}}}var Eg=(new aa.Component).refs;
		function Fg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
		var Jg={isMounted:function(a){return (a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Gg(),e=Hg(a),f=yg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);zg(a,f);Ig(a,e,d);},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Gg(),e=Hg(a),f=yg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);zg(a,f);Ig(a,e,d);},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Gg(),d=Hg(a),e=yg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
		b);zg(a,e);Ig(a,d,c);}};function Kg(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
		function Lg(a,b,c){var d=!1,e=Bf;var f=b.contextType;"object"===typeof f&&null!==f?f=ug(f):(e=Ef(b)?Cf:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Df(a,e):Bf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Jg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
		function Mg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jg.enqueueReplaceState(b,b.state,null);}
		function Ng(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Eg;wg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=ug(f):(f=Ef(b)?Cf:M.current,e.context=Df(a,f));Bg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Fg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
		(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jg.enqueueReplaceState(e,e.state,null),Bg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4);}var Og=Array.isArray;
		function Pg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode;}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Eg&&(b=d.refs={});null===a?delete b[e]:b[e]=a;};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a}
		function Qg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
		function Rg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8;}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Sg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
		c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Tg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Pg(a,b,c),d.return=a,d;d=Ug(c.type,c.key,c.props,null,a.mode,d);d.ref=Pg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
		Vg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Wg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Tg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Ug(b.type,b.key,b.props,null,a.mode,c),c.ref=Pg(a,null,b),c.return=a,c;case ta:return b=Vg(b,a.mode,c),b.return=a,b}if(Og(b)||La(b))return b=Wg(b,
		a.mode,c,null),b.return=a,b;Qg(a,b);}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Og(c)||La(c))return null!==e?null:n(a,b,c,d,null);Qg(a,c);}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
		null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Og(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Qg(b,d);}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
		n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q;}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==
		h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q;}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
		u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
		d=e(k,f.props);d.ref=Pg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling;}f.type===ua?(d=Wg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ug(f.type,f.key,f.props,null,a.mode,h),h.ref=Pg(a,d,f),h.return=a,a=h);}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=
		Vg(f,a.mode,h);d.return=a;a=d;}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Tg(f,a.mode,h),d.return=a,a=d),g(a);if(Og(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Qg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d)}}var Xg=Rg(!0),Yg=Rg(!1),Zg={},$g=Af(Zg),ah=Af(Zg),bh=Af(Zg);
		function ch(a){if(a===Zg)throw Error(y(174));return a}function dh(a,b){I(bh,b);I(ah,a);I($g,Zg);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a);}H($g);I($g,b);}function eh(){H($g);H(ah);H(bh);}function fh(a){ch(bh.current);var b=ch($g.current);var c=mb(b,a.type);b!==c&&(I(ah,a),I($g,c));}function gh(a){ah.current===a&&(H($g),H(ah));}var P=Af(0);
		function hh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var ih=null,jh=null,kh=!1;
		function lh(a,b){var c=mh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c;}function nh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return !1;default:return !1}}
		function oh(a){if(kh){var b=jh;if(b){var c=b;if(!nh(a,b)){b=qf(c.nextSibling);if(!b||!nh(a,b)){a.flags=a.flags&-1025|2;kh=!1;ih=a;return}lh(ih,c);}ih=a;jh=qf(b.firstChild);}else a.flags=a.flags&-1025|2,kh=!1,ih=a;}}function ph(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;ih=a;}
		function qh(a){if(a!==ih)return !1;if(!kh)return ph(a),kh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!mf(b,a.memoizedProps))for(b=jh;b;)lh(a,b),b=qf(b.nextSibling);ph(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){jh=qf(a.nextSibling);break a}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}jh=null;}}else jh=ih?qf(a.stateNode.nextSibling):null;return !0}
		function rh(){jh=ih=null;kh=!1;}var sh=[];function th(){for(var a=0;a<sh.length;a++)sh[a]._workInProgressVersionPrimary=null;sh.length=0;}var uh=ra.ReactCurrentDispatcher,vh=ra.ReactCurrentBatchConfig,wh=0,R=null,S=null,T=null,xh=!1,yh=!1;function zh(){throw Error(y(321));}function Ah(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!Ge(a[c],b[c]))return !1;return !0}
		function Bh(a,b,c,d,e,f){wh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;uh.current=null===a||null===a.memoizedState?Ch:Dh;a=c(d,e);if(yh){f=0;do{yh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;uh.current=Eh;a=c(d,e);}while(yh)}uh.current=Fh;b=null!==S&&null!==S.next;wh=0;T=S=R=null;xh=!1;if(b)throw Error(y(300));return a}function Gh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
		function Hh(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null;}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else {if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a;}return T}function Ih(a,b){return "function"===typeof b?b(a):b}
		function Jh(a){var b=Hh(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((wh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else {var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
		eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Cg|=l;}k=k.next;}while(null!==k&&k!==e);null===h?f=d:h.next=g;Ge(d,b.memoizedState)||(tg=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d;}return [b.memoizedState,c.dispatch]}
		function Kh(a){var b=Hh(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);Ge(f,b.memoizedState)||(tg=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}
		function Lh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(wh&a)===a)b._workInProgressVersionPrimary=d,sh.push(b);if(a)return c(b._source);sh.push(b);throw Error(y(350));}
		function Mh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=uh.current,k=h.useState(function(){return Lh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!Ge(g,a)){a=c(b._source);Ge(n,a)||(l(a),a=Hg(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
		e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v;}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Hg(w);e.mutableReadLanes|=d&e.pendingLanes;}catch(q){c(function(){throw q;});}})},[b,d]);Ge(C,c)&&Ge(x,b)&&Ge(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Ih,lastRenderedState:n},a.dispatch=l=Nh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Lh(e,b,c),k.memoizedState=k.baseState=n);return n}
		function Oh(a,b,c){var d=Hh();return Mh(d,a,b,c)}function Ph(a){var b=Gh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Ih,lastRenderedState:a};a=a.dispatch=Nh.bind(null,R,a);return [b.memoizedState,a]}
		function Qh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Rh(a){var b=Gh();a={current:a};return b.memoizedState=a}function Sh(){return Hh().memoizedState}function Th(a,b,c,d){var e=Gh();R.flags|=a;e.memoizedState=Qh(1|b,c,void 0,void 0===d?null:d);}
		function Uh(a,b,c,d){var e=Hh();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Ah(d,g.deps)){Qh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Qh(1|b,c,f,d);}function Vh(a,b){return Th(516,4,a,b)}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Uh(4,2,a,b)}function Yh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}
		function Zh(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Yh.bind(null,b,a),c)}function $h(){}function ai(a,b){var c=Hh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Ah(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function bi(a,b){var c=Hh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Ah(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
		function ci(a,b){var c=dg();fg(98>c?98:c,function(){a(!0);});fg(97<c?97:c,function(){var c=vh.transition;vh.transition=1;try{a(!1),b();}finally{vh.transition=c;}});}
		function Nh(a,b,c){var d=Gg(),e=Hg(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)yh=xh=!0;else {if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(Ge(k,h))return}catch(l){}finally{}Ig(a,e,d);}}
		var Fh={readContext:ug,useCallback:zh,useContext:zh,useEffect:zh,useImperativeHandle:zh,useLayoutEffect:zh,useMemo:zh,useReducer:zh,useRef:zh,useState:zh,useDebugValue:zh,useDeferredValue:zh,useTransition:zh,useMutableSource:zh,useOpaqueIdentifier:zh,unstable_isNewReconciler:!1},Ch={readContext:ug,useCallback:function(a,b){Gh().memoizedState=[a,void 0===b?null:b];return a},useContext:ug,useEffect:Vh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Th(4,2,Yh.bind(null,
		b,a),c)},useLayoutEffect:function(a,b){return Th(4,2,a,b)},useMemo:function(a,b){var c=Gh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Gh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Nh.bind(null,R,a);return [d.memoizedState,a]},useRef:Rh,useState:Ph,useDebugValue:$h,useDeferredValue:function(a){var b=Ph(a),c=b[0],d=b[1];Vh(function(){var b=vh.transition;
		vh.transition=1;try{d(a);}finally{vh.transition=b;}},[a]);return c},useTransition:function(){var a=Ph(!1),b=a[0];a=ci.bind(null,a[1]);Rh(a);return [a,b]},useMutableSource:function(a,b,c){var d=Gh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Mh(d,a,b,c)},useOpaqueIdentifier:function(){if(kh){var a=!1,b=tf(function(){a||(a=!0,c("r:"+(sf++).toString(36)));throw Error(y(355));}),c=Ph(b)[1];0===(R.mode&2)&&(R.flags|=516,Qh(5,function(){c("r:"+(sf++).toString(36));},
		void 0,null));return b}b="r:"+(sf++).toString(36);Ph(b);return b},unstable_isNewReconciler:!1},Dh={readContext:ug,useCallback:ai,useContext:ug,useEffect:Wh,useImperativeHandle:Zh,useLayoutEffect:Xh,useMemo:bi,useReducer:Jh,useRef:Sh,useState:function(){return Jh(Ih)},useDebugValue:$h,useDeferredValue:function(a){var b=Jh(Ih),c=b[0],d=b[1];Wh(function(){var b=vh.transition;vh.transition=1;try{d(a);}finally{vh.transition=b;}},[a]);return c},useTransition:function(){var a=Jh(Ih)[0];return [Sh().current,
		a]},useMutableSource:Oh,useOpaqueIdentifier:function(){return Jh(Ih)[0]},unstable_isNewReconciler:!1},Eh={readContext:ug,useCallback:ai,useContext:ug,useEffect:Wh,useImperativeHandle:Zh,useLayoutEffect:Xh,useMemo:bi,useReducer:Kh,useRef:Sh,useState:function(){return Kh(Ih)},useDebugValue:$h,useDeferredValue:function(a){var b=Kh(Ih),c=b[0],d=b[1];Wh(function(){var b=vh.transition;vh.transition=1;try{d(a);}finally{vh.transition=b;}},[a]);return c},useTransition:function(){var a=Kh(Ih)[0];return [Sh().current,
		a]},useMutableSource:Oh,useOpaqueIdentifier:function(){return Kh(Ih)[0]},unstable_isNewReconciler:!1},di=ra.ReactCurrentOwner,tg=!1;function ei(a,b,c,d){b.child=null===a?Yg(b,null,c,d):Xg(b,a.child,c,d);}function fi(a,b,c,d,e){c=c.render;var f=b.ref;sg(b,e);d=Bh(a,b,c,d,f,e);if(null!==a&&!tg)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,gi(a,b,e);b.flags|=1;ei(a,b,d,e);return b.child}
		function hi(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ii(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ji(a,b,g,d,e,f);a=Ug(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Ie,c(e,d)&&a.ref===b.ref))return gi(a,b,f);b.flags|=1;a=Sg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
		function ji(a,b,c,d,e,f){if(null!==a&&Ie(a.memoizedProps,d)&&a.ref===b.ref)if(tg=!1,0!==(f&e))0!==(a.flags&16384)&&(tg=!0);else return b.lanes=a.lanes,gi(a,b,f);return ki(a,b,c,d,f)}
		function li(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},mi(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},mi(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},mi(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,mi(b,d);ei(a,b,e,c);return b.child}
		function ni(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128;}function ki(a,b,c,d,e){var f=Ef(c)?Cf:M.current;f=Df(b,f);sg(b,e);c=Bh(a,b,c,d,f,e);if(null!==a&&!tg)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,gi(a,b,e);b.flags|=1;ei(a,b,c,e);return b.child}
		function oi(a,b,c,d,e){if(Ef(c)){var f=!0;If(b);}else f=!1;sg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Lg(b,c,d),Ng(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=ug(l):(l=Ef(c)?Cf:M.current,l=Df(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
		"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l);vg=!1;var p=b.memoizedState;g.state=p;Bg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||vg?("function"===typeof n&&(Fg(b,c,n,d),k=b.memoizedState),(h=vg||Kg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
		typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1);}else {g=b.stateNode;xg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:kg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=ug(k):(k=Ef(c)?Cf:M.current,k=Df(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
		"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Mg(b,g,d,k);vg=!1;p=b.memoizedState;g.state=p;Bg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||vg?("function"===typeof C&&(Fg(b,c,C,d),x=b.memoizedState),(l=vg||Kg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
		x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
		h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1);}return pi(a,b,c,d,f,e)}
		function pi(a,b,c,d,e,f){ni(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Jf(b,c,!1),gi(a,b,f);d=b.stateNode;di.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Xg(b,a.child,null,f),b.child=Xg(b,null,h,f)):ei(a,b,h,f);b.memoizedState=d.state;e&&Jf(b,c,!0);return b.child}function qi(a){var b=a.stateNode;b.pendingContext?Gf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Gf(a,b.context,!1);dh(a,b.containerInfo);}
		var ri={dehydrated:null,retryLane:0};
		function si(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&oh(b);a=d.children;e=d.fallback;if(f)return a=ti(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=ri,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ti(b,a,e,c),b.child.memoizedState={baseLanes:c},
		b.memoizedState=ri,b.lanes=33554432,a;c=ui({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=vi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=ri,d;c=wi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=vi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
		{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=ri,d;c=wi(a,b,d.children,c);b.memoizedState=null;return c}function ti(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=ui(b,e,0,null);c=Wg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
		function wi(a,b,c,d){var e=a.child;a=e.sibling;c=Sg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
		function vi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Sg(g,h);null!==a?d=Sg(a,d):(d=Wg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function xi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);rg(a.return,b);}
		function yi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f);}
		function zi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;ei(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else {if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&xi(a,c);else if(19===a.tag)xi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}I(P,d);if(0===(b.mode&2))b.memoizedState=
		null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===hh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);yi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===hh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}yi(b,!0,c,null,f,b.lastEffect);break;case "together":yi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null;}return b.child}
		function gi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Cg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Sg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Sg(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}return null}var Ai,Bi,Ci,Di;
		Ai=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Bi=function(){};
		Ci=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;ch($g.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=m({},e,{value:void 0});d=m({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=hf);}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
		l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
		(c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",
		c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Di=function(a,b,c,d){c!==d&&(b.flags|=4);};function Ei(a,b){if(!kh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
		function Fi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ef(b.type)&&Ff(),null;case 3:eh();H(N);H(M);th();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)qh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Bi(b);return null;case 5:gh(b);var e=ch(bh.current);c=b.type;if(null!==a&&null!=b.stateNode)Ci(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else {if(!d){if(null===
		b.stateNode)throw Error(y(166));return null}a=ch($g.current);if(qh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[vf]=b;d[wf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<We.length;a++)G(We[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
		{wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d);}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
		hf);}d=a;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[vf]=b;a[wf]=d;Ai(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
		e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<We.length;e++)G(We[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=m({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
		gb(a,d);G("invalid",a);break;default:e=d;}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g));}switch(c){case "input":Va(a);cb(a,d,!1);
		break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=hf);}lf(c,d)&&(b.flags|=4);}null!==b.ref&&(b.flags|=128);}return null;case 6:if(a&&null!=b.stateNode)Di(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));
		c=ch(bh.current);ch($g.current);qh(b)?(d=b.stateNode,c=b.memoizedProps,d[vf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[vf]=b,b.stateNode=d);}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&qh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else {if(0===V||3===V)V=
		4;null===U||0===(Cg&134217727)&&0===(Gi&134217727)||Hi(U,W);}if(d||c)b.flags|=4;return null;case 4:return eh(),Bi(b),null===a&&bf(b.stateNode.containerInfo),null;case 10:return qg(b),null;case 17:return Ef(b.type)&&Ff(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Ei(d,!1);else {if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=hh(a);if(null!==g){b.flags|=64;Ei(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
		null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
		f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling;}null!==d.tail&&O()>Ii&&(b.flags|=64,f=!0,Ei(d,!1),b.lanes=33554432);}else {if(!f)if(a=hh(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Ei(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!kh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ii&&1073741824!==c&&(b.flags|=
		64,f=!0,Ei(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g);}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ji(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y(156,b.tag));}
		function Ki(a){switch(a.tag){case 1:Ef(a.type)&&Ff();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:eh();H(N);H(M);th();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return gh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return eh(),null;case 10:return qg(a),null;case 23:case 24:return Ji(),null;default:return null}}
		function Li(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e}}function Mi(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Ni="function"===typeof WeakMap?WeakMap:Map;function Oi(a,b,c){c=yg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Pi||(Pi=!0,Qi=d);Mi(a,b);};return c}
		function Ri(a,b,c){c=yg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Mi(a,b);return d(e)};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Si?Si=new Set([this]):Si.add(this),Mi(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}var Ti="function"===typeof WeakSet?WeakSet:Set;
		function Ui(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null);}catch(c){Vi(a,c);}else b.current=null;}function Wi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:kg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b;}return;case 3:b.flags&256&&pf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163));}
		function Xi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d();}a=a.next;}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Yi(c,a),Zi(c,a));a=d;}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:kg(c.type,b.memoizedProps),a.componentDidUpdate(d,
		b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Dg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode;}Dg(c,b,a);}return;case 5:a=c.stateNode;null===b&&c.flags&4&&lf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
		return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163));}
		function $i(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else {d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e);}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
		a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}}
		function aj(a,b){if(Lf&&"function"===typeof Lf.onCommitFiberUnmount)try{Lf.onCommitFiberUnmount(Kf,b);}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Yi(b,c);else {d=b;try{e();}catch(f){Vi(d,f);}}c=c.next;}while(c!==a)}break;case 1:Ui(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount();}catch(f){Vi(b,
		f);}break;case 5:Ui(b);break;case 4:bj(a,b);}}function cj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null;}function dj(a){return 5===a.tag||3===a.tag||4===a.tag}
		function ej(a){a:{for(var b=a.return;null!==b;){if(dj(b))break a;b=b.return;}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||dj(c.return)){c=null;break a}c=c.return;}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
		c.child||4===c.tag)continue b;else c.child.return=c,c=c.child;}if(!(c.flags&2)){c=c.stateNode;break a}}d?fj(a,c,b):gj(a,c,b);}
		function fj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=hf));else if(4!==d&&(a=a.child,null!==a))for(fj(a,b,c),a=a.sibling;null!==a;)fj(a,b,c),a=a.sibling;}
		function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling;}
		function bj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return;}d=!0;}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(aj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else {if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return;}k.sibling.return=k.return;k=k.sibling;}f?(g=e,h=c.stateNode,
		8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode);}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(aj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1);}c.sibling.return=c.return;c=c.sibling;}}
		function hj(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[wf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
		2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b);}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1));}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=
		b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(ij=O(),$i(b.child,!0));jj(b);return;case 19:jj(b);return;case 17:return;case 23:case 24:$i(b,null!==b.memoizedState);return}throw Error(y(163));}function jj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ti);b.forEach(function(b){var d=kj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
		function lj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var mj=Math.ceil,nj=ra.ReactCurrentDispatcher,oj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,pj=0,qj=Af(0),V=0,rj=null,sj=0,Cg=0,Gi=0,tj=0,uj=null,ij=0,Ii=Infinity;function vj(){Ii=O()+500;}var Z=null,Pi=!1,Qi=null,Si=null,wj=!1,xj=null,yj=90,zj=[],Aj=[],Bj=null,Cj=0,Dj=null,Ej=-1,Fj=0,Gj=0,Hj=null,Ij=!1;function Gg(){return 0!==(X&48)?O():-1!==Ej?Ej:Ej=O()}
		function Hg(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===dg()?1:2;0===Fj&&(Fj=sj);if(0!==jg.transition){0!==Gj&&(Gj=null!==uj?uj.pendingLanes:0);a=Fj;var b=4186112&~Gj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=dg();0!==(X&4)&&98===a?a=Xc(12,Fj):(a=Sc(a),a=Xc(a,Fj));return a}
		function Ig(a,b,c){if(50<Cj)throw Cj=0,Dj=null,Error(y(185));a=Jj(a,b);if(null===a)return null;Zc(a,b,c);a===U&&(Gi|=b,4===V&&Hi(a,W));var d=dg();1===b?0!==(X&8)&&0===(X&48)?Kj(a):(Lj(a,c),0===X&&(vj(),hg())):(0===(X&4)||98!==d&&99!==d||(null===Bj?Bj=new Set([a]):Bj.add(a)),Lj(a,c));uj=a;}function Jj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
		function Lj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1;}}else l<=b&&(a.expiredLanes|=k);g&=~k;}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Yf&&Of(c),a.callbackNode=null,a.callbackPriority=0);else {if(null!==c){if(a.callbackPriority===b)return;c!==Yf&&Of(c);}15===b?(c=Kj.bind(null,a),null===$f?($f=[c],ag=Nf(Tf,ig)):$f.push(c),
		c=Yf):14===b?c=gg(99,Kj.bind(null,a)):(c=Tc(b),c=gg(c,Mj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c;}}
		function Mj(a){Ej=-1;Gj=Fj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Nj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Oj();if(U!==a||W!==d)vj(),Pj(a,d);do try{Qj();break}catch(h){Rj(a,h);}while(1);pg();nj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(sj&Gi))Pj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,pf(a.containerInfo)),c=Wc(a),0!==c&&(d=Sj(a,c)));if(1===d)throw b=rj,Pj(a,0),Hi(a,c),Lj(a,O()),b;a.finishedWork=
		a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Tj(a);break;case 3:Hi(a,c);if((c&62914560)===c&&(d=ij+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Gg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=nf(Tj.bind(null,a),d);break}Tj(a);break;case 4:Hi(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f;}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
		c?4320:1960*mj(c/1960))-c;if(10<c){a.timeoutHandle=nf(Tj.bind(null,a),c);break}Tj(a);break;case 5:Tj(a);break;default:throw Error(y(329));}}Lj(a,O());return a.callbackNode===b?Mj.bind(null,a):null}function Hi(a,b){b&=~tj;b&=~Gi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d;}}
		function Kj(a){if(0!==(X&48))throw Error(y(327));Nj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Sj(a,b);0!==(sj&Gi)&&(b=Uc(a,b),c=Sj(a,b));}else b=Uc(a,0),c=Sj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,pf(a.containerInfo)),b=Wc(a),0!==b&&(c=Sj(a,b)));if(1===c)throw c=rj,Pj(a,0),Hi(a,b),Lj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Tj(a);Lj(a,O());return null}
		function Uj(){if(null!==Bj){var a=Bj;Bj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Lj(a,O());});}hg();}function Vj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(vj(),hg());}}function Wj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(vj(),hg());}}function mi(a,b){I(qj,pj);pj|=b;sj|=b;}function Ji(){pj=qj.current;H(qj);}
		function Pj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,of(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Ff();break;case 3:eh();H(N);H(M);th();break;case 5:gh(d);break;case 4:eh();break;case 13:H(P);break;case 19:H(P);break;case 10:qg(d);break;case 23:case 24:Ji();}c=c.return;}U=a;Y=Sg(a.current,null);W=pj=sj=b;V=0;rj=null;tj=Gi=Cg=0;}
		function Rj(a,b){do{var c=Y;try{pg();uh.current=Fh;if(xh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}xh=!1;}wh=0;T=S=R=null;yh=!1;oj.current=null;if(null===c||null===c.return){V=1;rj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
		(h.updateQueue=null,h.memoizedState=null);}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else {var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0;}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u;}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else {var t=yg(-1,1);t.tag=2;zg(h,t);}h.lanes|=1;break a}k=
		void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Ni,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Xj.bind(null,f,l,h);l.then(v,v);}p.flags|=4096;p.lanes=b;break a}p=p.return;}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");}5!==V&&(V=2);k=Li(k,h);p=
		g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Oi(p,f,b);Ag(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Si||!Si.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Ri(p,f,b);Ag(p,L);break a}}p=p.return;}while(null!==p)}Yj(c);}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
		function Oj(){var a=nj.current;nj.current=Fh;return null===a?Fh:a}function Sj(a,b){var c=X;X|=16;var d=Oj();U===a&&W===b||Pj(a,b);do try{Zj();break}catch(e){Rj(a,e);}while(1);pg();X=c;nj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V}function Zj(){for(;null!==Y;)ak(Y);}function Qj(){for(;null!==Y&&!Pf();)ak(Y);}function ak(a){var b=bk(a.alternate,a,pj);a.memoizedProps=a.pendingProps;null===b?Yj(a):Y=b;oj.current=null;}
		function Yj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Fi(c,b,pj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(pj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d;}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
		a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b));}else {c=Ki(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048);}b=b.sibling;if(null!==b){Y=b;return}Y=b=a;}while(null!==b);0===V&&(V=5);}function Tj(a){var b=dg();fg(99,ck.bind(null,a,b));return null}
		function ck(a,b){do Nj();while(null!==xj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l;}null!==
		Bj&&0===(d&24)&&Bj.has(a)&&Bj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;oj.current=null;jf=ed;g=Me();if(Ne(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType;}catch(va){h=null;
		break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u;}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode;}w=u;}h=-1===A||-1===p?null:{start:A,end:p};}else h=null;h=h||{start:0,end:0};}else h=null;kf={focusedElem:g,selectionRange:h};ed=!1;Hj=null;Ij=!1;Z=d;do try{dk();}catch(va){if(null===
		Z)throw Error(y(330));Vi(Z,va);Z=Z.nextEffect;}while(null!==Z);Hj=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null);}}switch(t&1038){case 2:ej(Z);Z.flags&=-3;break;case 6:ej(Z);Z.flags&=-3;hj(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;hj(Z.alternate,Z);break;case 4:hj(Z.alternate,Z);break;case 8:h=Z;bj(g,h);var J=h.alternate;cj(h);null!==
		J&&cj(J);}Z=Z.nextEffect;}}catch(va){if(null===Z)throw Error(y(330));Vi(Z,va);Z=Z.nextEffect;}while(null!==Z);v=kf;q=Me();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Le(t.ownerDocument.documentElement,t)){null!==g&&Ne(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
		g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Ke(t,J),f=Ke(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
		0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top;}ed=!!jf;kf=jf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Xi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L;}"function"===typeof Q?Q(q):Q.current=q;}}Z=Z.nextEffect;}}catch(va){if(null===Z)throw Error(y(330));Vi(Z,va);Z=Z.nextEffect;}while(null!==Z);Z=null;Zf();X=e;}else a.current=c;if(wj)wj=!1,xj=a,yj=b;else for(Z=d;null!==Z;)b=
		Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Si=null);1===d?a===Dj?Cj++:(Cj=0,Dj=a):Cj=0;c=c.stateNode;if(Lf&&"function"===typeof Lf.onCommitFiberRoot)try{Lf.onCommitFiberRoot(Kf,c,void 0,64===(c.current.flags&64));}catch(va){}Lj(a,O());if(Pi)throw Pi=!1,a=Qi,Qi=null,a;if(0!==(X&8))return null;hg();return null}
		function dk(){for(;null!==Z;){var a=Z.alternate;Ij||null===Hj||(0!==(Z.flags&8)?dc(Z,Hj)&&(Ij=!0):13===Z.tag&&lj(a,Z)&&dc(Z,Hj)&&(Ij=!0));var b=Z.flags;0!==(b&256)&&Wi(a,Z);0===(b&512)||wj||(wj=!0,gg(97,function(){Nj();return null}));Z=Z.nextEffect;}}function Nj(){if(90!==yj){var a=97<yj?97:yj;yj=90;return fg(a,ek)}return !1}function Zi(a,b){zj.push(b,a);wj||(wj=!0,gg(97,function(){Nj();return null}));}function Yi(a,b){Aj.push(b,a);wj||(wj=!0,gg(97,function(){Nj();return null}));}
		function ek(){if(null===xj)return !1;var a=xj;xj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Aj;Aj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g();}catch(k){if(null===f)throw Error(y(330));Vi(f,k);}}c=zj;zj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h();}catch(k){if(null===f)throw Error(y(330));Vi(f,k);}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
		null,h.stateNode=null),h=a;X=b;hg();return !0}function fk(a,b,c){b=Li(c,b);b=Oi(a,b,1);zg(a,b);b=Gg();a=Jj(a,1);null!==a&&(Zc(a,1,b),Lj(a,b));}
		function Vi(a,b){if(3===a.tag)fk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){fk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Si||!Si.has(d))){a=Li(b,a);var e=Ri(c,a,1);zg(c,e);e=Gg();c=Jj(c,1);if(null!==c)Zc(c,1,e),Lj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Si||!Si.has(d)))try{d.componentDidCatch(b,a);}catch(f){}break}}c=c.return;}}
		function Xj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Gg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-ij?Pj(a,0):tj|=c);Lj(a,b);}function kj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===dg()?1:2:(0===Fj&&(Fj=sj),b=Yc(62914560&~Fj),0===b&&(b=4194304)));c=Gg();a=Jj(a,b);null!==a&&(Zc(a,b,c),Lj(a,c));}var bk;
		bk=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)tg=!0;else if(0!==(c&d))tg=0!==(a.flags&16384)?!0:!1;else {tg=!1;switch(b.tag){case 3:qi(b);rh();break;case 5:fh(b);break;case 1:Ef(b.type)&&If(b);break;case 4:dh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(lg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return si(a,b,c);I(P,P.current&1);b=gi(a,b,c);return null!==
		b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return zi(a,b,c);b.flags|=64;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,li(a,b,c)}return gi(a,b,c)}else tg=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Df(b,M.current);sg(b,c);e=Bh(null,b,d,a,e,c);b.flags|=1;if("object"===
		typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ef(d)){var f=!0;If(b);}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;wg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Fg(b,d,g,a);e.updater=Jg;b.stateNode=e;e._reactInternals=b;Ng(b,d,a,c);b=pi(null,b,d,!0,f,c);}else b.tag=0,ei(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
		a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=gk(e);a=kg(e,a);switch(f){case 0:b=ki(null,b,e,a,c);break a;case 1:b=oi(null,b,e,a,c);break a;case 11:b=fi(null,b,e,a,c);break a;case 14:b=hi(null,b,e,kg(e.type,a),d,c);break a}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:kg(d,e),ki(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:kg(d,e),oi(a,b,d,e,c);case 3:qi(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));
		d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;xg(a,b);Bg(b,d,null,c);d=b.memoizedState.element;if(d===e)rh(),b=gi(a,b,c);else {e=b.stateNode;if(f=e.hydrate)jh=qf(b.stateNode.containerInfo.firstChild),ih=b,f=kh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],sh.push(f);c=Yg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling;}else ei(a,b,d,c),rh();b=b.child;}return b;case 5:return fh(b),null===a&&
		oh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,mf(d,e)?g=null:null!==f&&mf(d,f)&&(b.flags|=16),ni(a,b),ei(a,b,g,c),b.child;case 6:return null===a&&oh(b),null;case 13:return si(a,b,c);case 4:return dh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Xg(b,null,d,c):ei(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:kg(d,e),fi(a,b,d,e,c);case 7:return ei(a,b,b.pendingProps,c),b.child;case 8:return ei(a,b,b.pendingProps.children,
		c),b.child;case 12:return ei(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(lg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=Ge(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=gi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
		k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=yg(-1,c&-c),l.tag=2,zg(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);rg(h.return,c);k.lanes|=c;break}l=l.next;}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return;}h=g;}ei(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,sg(b,c),e=ug(e,
		f.unstable_observedBits),d=d(e),b.flags|=1,ei(a,b,d,c),b.child;case 14:return e=b.type,f=kg(e,b.pendingProps),f=kg(e.type,f),hi(a,b,e,f,d,c);case 15:return ji(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:kg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ef(d)?(a=!0,If(b)):a=!1,sg(b,c),Lg(b,d,e),Ng(b,d,e,c),pi(null,b,d,!0,a,c);case 19:return zi(a,b,c);case 23:return li(a,b,c);case 24:return li(a,b,c)}throw Error(y(156,b.tag));
		};function hk(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null;}function mh(a,b,c,d){return new hk(a,b,c,d)}function ii(a){a=a.prototype;return !(!a||!a.isReactComponent)}
		function gk(a){if("function"===typeof a)return ii(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
		function Sg(a,b){var c=a.alternate;null===c?(c=mh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
		c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
		function Ug(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ii(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Wg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=mh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=mh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=mh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return ui(c,e,f,b);case Ja:return a=mh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
		typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y(130,null==a?a:typeof a,""));}b=mh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Wg(a,b,c,d){a=mh(7,a,d,b);a.lanes=c;return a}function ui(a,b,c,d){a=mh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Tg(a,b,c){a=mh(6,a,null,b);a.lanes=c;return a}
		function Vg(a,b,c){b=mh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
		function ik(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Array(31).fill(0);this.expirationTimes=Array(31).fill(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Array(31).fill(0);this.mutableSourceEagerHydrationData=
		null;}function jk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
		function kk(a,b,c,d){var e=b.current,f=Gg(),g=Hg(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ef(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return;}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ef(k)){c=Hf(c,k,h);break a}}c=h;}else c=Bf;null===b.context?b.context=c:b.pendingContext=c;b=yg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
		d&&(b.callback=d);zg(e,b);Ig(e,g,f);return g}function lk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function mk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function nk(a,b){mk(a,b);(a=a.alternate)&&mk(a,b);}function ok(){return null}
		function pk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new ik(a,b,null!=c&&!0===c.hydrate);b=mh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;wg(b);a[ef]=c.current;bf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e);}this._internalRoot=c;}
		pk.prototype.render=function(a){kk(a,this._internalRoot,null,null);};pk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;kk(null,a,null,function(){b[ef]=null;});};function qk(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
		function rk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new pk(a,0,b?{hydrate:!0}:void 0)}
		function sk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=lk(g);h.call(a);};}kk(b,g,a,e);}else {f=c._reactRootContainer=rk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=lk(g);k.call(a);};}Wj(function(){kk(b,g,a,e);});}return lk(g)}ec=function(a){if(13===a.tag){var b=Gg();Ig(a,4,b);nk(a,4);}};fc=function(a){if(13===a.tag){var b=Gg();Ig(a,67108864,b);nk(a,67108864);}};
		gc=function(a){if(13===a.tag){var b=Gg(),c=Hg(a);Ig(a,c,b);nk(a,c);}};hc=function(a,b){return b()};
		yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e);}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1);}};Gb=Vj;
		Hb=function(a,b,c,d,e){var f=X;X|=4;try{return fg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(vj(),hg());}};Ib=function(){0===(X&49)&&(Uj(),Nj());};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(vj(),hg());}};function tk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!qk(b))throw Error(y(200));return jk(a,b,null,c)}var uk={Events:[Cb,te,Db,Eb,Fb,Nj,{current:!1}]},vk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.0",rendererPackageName:"react-dom"};
		var wk={bundleType:vk.bundleType,version:vk.version,rendererPackageName:vk.rendererPackageName,rendererConfig:vk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:vk.findFiberByHostInstance||
		ok,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var xk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xk.isDisabled&&xk.supportsFiber)try{Kf=xk.inject(wk),Lf=xk;}catch(a){}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uk;reactDom_production_min.createPortal=tk;
		reactDom_production_min.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};reactDom_production_min.flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return fg(99,a.bind(null,b))}finally{X=c,hg();}};reactDom_production_min.hydrate=function(a,b,c){if(!qk(b))throw Error(y(200));return sk(null,a,b,!0,c)};
		reactDom_production_min.render=function(a,b,c){if(!qk(b))throw Error(y(200));return sk(null,a,b,!1,c)};reactDom_production_min.unmountComponentAtNode=function(a){if(!qk(a))throw Error(y(40));return a._reactRootContainer?(Wj(function(){sk(null,null,a,!1,function(){a._reactRootContainer=null;a[ef]=null;});}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Vj;reactDom_production_min.unstable_createPortal=function(a,b){return tk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
		reactDom_production_min.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!qk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return sk(a,b,c,!1,d)};reactDom_production_min.version="17.0.0";
		return reactDom_production_min;
	}

	(function (module) {

		function checkDCE() {
		  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		  if (
		    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
		    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
		  ) {
		    return;
		  }
		  try {
		    // Verify that the code above has been dead code eliminated (DCE'd).
		    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		  } catch (err) {
		    // DevTools shouldn't crash React, no matter what.
		    // We should still report in case we break this code.
		    console.error(err);
		  }
		}

		{
		  // DCE check should happen before ReactDOM bundle executes so that
		  // DevTools can report bad minification during injection.
		  checkDCE();
		  module.exports = requireReactDom_production_min();
		}
	} (reactDom));

	var ReactDOM = /*@__PURE__*/getDefaultExportFromCjs(reactDom.exports);

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  Object.defineProperty(subClass, "prototype", {
	    writable: false
	  });
	  if (superClass) _setPrototypeOf$1(subClass, superClass);
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	function _setPrototypeOf$1(o, p) {
	  _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };
	  return _setPrototypeOf$1(o, p);
	}

	function _isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;

	  try {
	    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function _assertThisInitialized$1(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (typeof call === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }

	  return _assertThisInitialized$1(self);
	}

	function _createSuper(Derived) {
	  var hasNativeReflectConstruct = _isNativeReflectConstruct();

	  return function _createSuperInternal() {
	    var Super = _getPrototypeOf(Derived),
	        result;

	    if (hasNativeReflectConstruct) {
	      var NewTarget = _getPrototypeOf(this).constructor;

	      result = Reflect.construct(Super, arguments, NewTarget);
	    } else {
	      result = Super.apply(this, arguments);
	    }

	    return _possibleConstructorReturn(this, result);
	  };
	}

	function styleInject(css, ref) {
	  if ( ref === void 0 ) ref = {};
	  var insertAt = ref.insertAt;

	  if (!css || typeof document === 'undefined') { return; }

	  var head = document.head || document.getElementsByTagName('head')[0];
	  var style = document.createElement('style');
	  style.type = 'text/css';

	  if (insertAt === 'top') {
	    if (head.firstChild) {
	      head.insertBefore(style, head.firstChild);
	    } else {
	      head.appendChild(style);
	    }
	  } else {
	    head.appendChild(style);
	  }

	  if (style.styleSheet) {
	    style.styleSheet.cssText = css;
	  } else {
	    style.appendChild(document.createTextNode(css));
	  }
	}

	var css_248z$2 = "\r\n@media only screen and (min-width: 768px) {\r\n    #root {\r\n        overflow-x: hidden;\r\n    }\r\n    \r\n    .header_back {\r\n        background-image: url(\"/back_1.svg\");\r\n        width: 100vw;\r\n        height: 1127px;\r\n        background-size: cover;\r\n        background-position:center;\r\n        overflow: hidden;\r\n        background-repeat: no-repeat;\r\n    }\r\n    \r\n    .header {\r\n        padding-top: 19px;\r\n        /* background: #C4C4C4; */\r\n    }\r\n    \r\n    .header_t {\r\n        padding-top: 39px;\r\n    }\r\n    \r\n    .header_l {\r\n        text-align: left;\r\n        padding-top: 22px;\r\n        padding-left: 106px !important;\r\n    }\r\n    \r\n    .header_m {\r\n        text-align: center;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n        padding: 0px;\r\n        gap: 1px;\r\n        padding-left: 16% !important;\r\n        padding-top: 26px;\r\n    }\r\n    \r\n    .header_mc {\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: flex-start;\r\n        padding: 0px;\r\n        gap: 48px;\r\n        width: 387px;\r\n        height: 24px;\r\n        flex: none;\r\n        order: 0;\r\n        flex-grow: 0;\r\n    }\r\n    \r\n    .header_mc1 {\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: flex-start;\r\n        padding: 0px;\r\n        gap: 20px;\r\n        width: 387px;\r\n        height: 24px;\r\n        flex: none;\r\n        order: 0;\r\n        flex-grow: 0;\r\n    }\r\n    .header_mc1 a {\r\n        text-decoration: none;\r\n        cursor: pointer;\r\n    }\r\n    \r\n    .header_mp {\r\n        height: 24px;\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        font-size: 14px;\r\n        line-height: 24px;\r\n        display: flex;\r\n        align-items: center;\r\n        color: #FFFFFF;\r\n        flex: none;\r\n        order: 0;\r\n        flex-grow: 0;\r\n    }\r\n    \r\n    .header_r {\r\n        text-align: right;\r\n        padding-right: 122px !important;\r\n        padding-top: 17px;\r\n    }\r\n    \r\n    .header_rb {\r\n        width: 79px;\r\n        height: 47px;\r\n        background: linear-gradient(93.58deg, rgba(0, 77, 0, 0.33) 7.62%, rgba(1, 48, 30, 0.33) 104.97%);\r\n        border-radius: 4px;\r\n        float: right;\r\n        border: 0px;\r\n    }\r\n    \r\n    .header_rb p {\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        font-size: 12px;\r\n        line-height: 24px;\r\n        padding-top: 9px;\r\n        align-items: center;\r\n        letter-spacing: 0.09em;\r\n        color: #FFFFFF;\r\n    }\r\n    \r\n    .logo_p {\r\n        padding-top: 5px;\r\n        padding-left: 39px;\r\n        font-family: 'PT Mono';\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        font-size: 18.7727px;\r\n        line-height: 21px;\r\n        letter-spacing: 0.02em;\r\n        color: #FFFFFF;\r\n    }\r\n    \r\n    .s_p2 {\r\n        width: 560px;\r\n        height: 83px;\r\n        margin-bottom: 0px !important;\r\n        font-family: 'Rubik';\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        font-size: 79px;\r\n        line-height: 83px;\r\n        display: flex;\r\n        align-items: center;\r\n        text-align: center;\r\n        letter-spacing: 0.06em;\r\n        background: linear-gradient(270deg, #1B4347 -1.39%, #3D906A 99.46%);\r\n        -webkit-background-clip: text;\r\n        -webkit-text-fill-color: transparent;\r\n        background-clip: text;\r\n        text-fill-color: transparent;\r\n        text-shadow: 3px 4px 17px rgba(255, 255, 255, 0.2);\r\n        \r\n    }\r\n    \r\n    .s_p2::after {\r\n        content: \"Hatom Token\";\r\n        margin-left: -515px;\r\n        /* width: 565px; */\r\n        height: 83px;\r\n        font-family: 'Rubik';\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        font-size: 80px;\r\n        line-height: 80px;\r\n        display: flex;\r\n        align-items: center;\r\n        text-align: center;\r\n        letter-spacing: 0.06em;\r\n        color: #FFFFFF;\r\n        text-shadow: 3px 4px 17px rgba(255, 255, 255, 0.2);\r\n        -webkit-text-fill-color: white;\r\n    }\r\n    \r\n    .s_p1 {\r\n        width: 479px;\r\n        height: 24px;\r\n        padding-left: 9%;\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 18px;\r\n        line-height: 24px;\r\n        /* display: flex; */\r\n        align-items: center;\r\n        text-align: center;\r\n        letter-spacing: 0.02em;\r\n        background: linear-gradient(270deg, #367E6B -1.39%, #3D906A 99.46%);\r\n        -webkit-background-clip: text;\r\n        -webkit-text-fill-color: transparent;\r\n        background-clip: text;\r\n        text-fill-color: transparent;\r\n    }\r\n    \r\n    .buy {\r\n        padding-top: 40px;\r\n    }\r\n    \r\n    .buy_p1 {\r\n        width: 401px;\r\n        height: 34px;\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 34px;\r\n        line-height: 34px;\r\n        display: flex;\r\n        align-items: center;\r\n        text-align: center;\r\n        color: #000000;\r\n        padding-bottom: 0px !important;\r\n        margin-bottom: 0px !important;\r\n    }\r\n    \r\n    .buy_p1 p {\r\n        padding-bottom: 0px !important;\r\n        margin-bottom: 0px !important;\r\n    }\r\n    \r\n    .buy_p2 {\r\n        width: 391px;\r\n        height: 22px;\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 18px;\r\n        line-height: 22px;\r\n        display: flex;\r\n        align-items: center;\r\n        text-align: center;\r\n        color: #5C5C5C;\r\n    }\r\n    \r\n    .buy_b {\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: flex-start;\r\n        padding: 16px 20px;\r\n        gap: 10px;\r\n        width: 200px;\r\n        height: 54px;\r\n        background: linear-gradient(270deg, #1B4347 -1.39%, #3D906A 99.46%);\r\n        border-radius: 12px;\r\n        float: right;\r\n        border: 0px;\r\n    }\r\n    \r\n    .buy_b p {\r\n        width: 160px;\r\n        height: 22px;\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 18px;\r\n        line-height: 22px;\r\n        align-items: center;\r\n        text-align: center;\r\n        color: #FFFFFF;\r\n        flex: none;\r\n        order: 0;\r\n        flex-grow: 0;\r\n    }\r\n    \r\n    .coin {\r\n        padding-top: 100px;\r\n    }\r\n    \r\n    .coin_p1 {\r\n        width: 526px;\r\n        height: 50px;\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 40px;\r\n        line-height: 50px;\r\n        display: flex;\r\n        align-items: center;\r\n        text-align: center;\r\n        color: #3555F7;\r\n    }\r\n    \r\n    .coin_pt {\r\n        font-family: 'Rubik';\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        font-size: 32px;\r\n        line-height: 38px;\r\n        display: flex;\r\n        align-items: center;\r\n        text-align: center;\r\n        color: #000000;\r\n    }\r\n    \r\n    .coin_pc {\r\n        font-family: 'Rubik';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 18px;\r\n        line-height: 21px;\r\n        display: flex;\r\n        align-items: center;\r\n        color: #222222;\r\n    }\r\n    \r\n    .coin_dot {\r\n        width: 8px;\r\n        height: 8px;\r\n        background: #179C64;\r\n        border-radius: 4px;\r\n        float: left;\r\n        margin-top: 7px;\r\n        margin-right: 16px;\r\n    }\r\n    \r\n    .coin_back_t {\r\n        margin-top: 48px !important;\r\n        margin-left: 65% !important;\r\n    }\r\n    \r\n    .coin_back_b {\r\n        margin-top: -48px !important;\r\n        margin-left: 50% !important;\r\n    }\r\n    \r\n    .sub {\r\n        margin-top: 95px !important;\r\n        width: 100vw;\r\n        height: 301px;\r\n        background: linear-gradient(90deg, #265B5C 0%, #11206B 100%);\r\n    }\r\n    \r\n    .sub_c {\r\n        padding-top: 64px;\r\n        text-align: center;\r\n        align-items: center;\r\n        align-content: center;\r\n    }\r\n    \r\n    .sub_ct {\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 40px;\r\n        line-height: 50px;\r\n        align-items: center;\r\n        text-align: center;\r\n        color: #FFFFFF;\r\n        margin-bottom: 0px !important;\r\n    }\r\n    \r\n    .sub_cc {\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 18px;\r\n        line-height: 24px;\r\n        align-items: center;\r\n        letter-spacing: 0.03em;\r\n        color: #C4D3EA;\r\n    }\r\n    \r\n    .search_sub {\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-items: center !important;\r\n        padding: 0px;\r\n        gap: 278px;\r\n        width: 55px !important;\r\n        height: 52px;\r\n        flex: none;\r\n        order: 0;\r\n        flex-grow: 0;\r\n        background-color: #315B82 !important;\r\n        border: 0px !important;\r\n    }\r\n    \r\n    .sub_con {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n        padding: 6px 6px 6px 32px;\r\n        margin: auto;\r\n        gap: 10px;\r\n        width: 601px;\r\n        height: 63.63px;\r\n        background: #315B82;\r\n        border-radius: 12px;\r\n    }\r\n    \r\n    .sub_con1 {\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-items: center;\r\n        padding: 0px;\r\n        width: 563px;\r\n        height: 52px;\r\n        flex: none;\r\n        order: 0;\r\n        flex-grow: 0;\r\n    }\r\n    \r\n    .sub_btn {\r\n        display: flex;\r\n        color: #FFFFFF !important;\r\n        flex-direction: row;\r\n        align-items: flex-start;\r\n        padding: 16px 36px;\r\n        gap: 10px;\r\n        width: 149px;\r\n        height: 52px;\r\n        background: linear-gradient(270deg, #1B4347 -1.39%, #3D906A 99.46%);\r\n        border-radius: 12px !important;\r\n    }\r\n    \r\n    .sub_btn p {\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 16px;\r\n        line-height: 20px;\r\n        display: flex;\r\n        align-items: center;\r\n        color: #FFFFFF;\r\n        flex: none;\r\n        order: 0;\r\n        flex-grow: 0;\r\n    }\r\n    \r\n    .footer_l1 {\r\n        padding-top: 179.5px !important;\r\n        padding-left: 50%;\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 12px;\r\n        line-height: 24px;\r\n        display: flex;\r\n        align-items: center;\r\n        color: #8493B5;\r\n    }\r\n    \r\n    .footer_ct {\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        font-size: 14px;\r\n        line-height: 24px;\r\n        display: flex;\r\n        align-items: center;\r\n        color: #FFFFFF;\r\n    }\r\n    \r\n    .footer_cc {\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 12px;\r\n        line-height: 24px;\r\n        display: flex;\r\n        align-items: center;\r\n        color: #8493B5;\r\n    }\r\n    \r\n    .footer_r {\r\n        text-align: right;\r\n        padding-right: 122px !important;\r\n    }\r\n    \r\n    .footer_line {\r\n        /* width: 1271px; */\r\n        height: 1px;\r\n        background: #0F2945;\r\n        margin-left: 12%;\r\n        margin-right: 118px;\r\n    }\r\n    \r\n    .footer_1 {\r\n        width: 9px;\r\n        height: 9px;\r\n        background: #00D395;\r\n        border-radius: 5px;\r\n        float: left;\r\n        margin-top: 5px;\r\n    }\r\n    \r\n    .footer_2 {\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        font-size: 11.6px;\r\n        line-height: 24px;\r\n        display: flex;\r\n        align-items: center;\r\n        color: #8493B5;\r\n        margin-left: 15px;\r\n    }\r\n\r\n    .footer_logo {\r\n        padding-left: 50%;\r\n    }\r\n    \r\n    #animation {\r\n        background-image: url('/coin-sequence.png');\r\n        background-repeat: no-repeat;\r\n        height: 200px;\r\n        width: 200px;\r\n        background-size: 200px, 200px;\r\n        margin-top: -50% !important;\r\n        margin-left: 240% !important;\r\n    }\r\n    \r\n    .header_rb_m {\r\n        padding-top: 2px;\r\n        padding-left: 10px;\r\n        width: 90px;\r\n        height: 26px;\r\n        background: linear-gradient(90deg, #46A273 -0.2%, #46A273 0.36%, #133641 100.2%);\r\n        border-radius: 4px;\r\n        float: right;\r\n        display: none;\r\n    }\r\n    \r\n    .herder_rb_m1 {\r\n        background: #021326;\r\n        float: right;\r\n        padding-top: 3px;\r\n        padding-left: 10px;\r\n        display: none;\r\n    }\r\n\r\n    .footer_l1_m {\r\n        padding-left: 10%;\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 12px;\r\n        line-height: 24px;\r\n        display: flex;\r\n        align-items: center;\r\n        color: #8493B5;\r\n        display: none;\r\n    }\r\n\r\n    .sub_btn_m {\r\n        display: flex;\r\n        color: #FFFFFF !important;\r\n        flex-direction: row;\r\n        align-items: flex-start;\r\n        padding: 16px 36px;\r\n        gap: 10px;\r\n        width: 149px;\r\n        height: 52px;\r\n        background: linear-gradient(270deg, #1B4347 -1.39%, #3D906A 99.46%);\r\n        border-radius: 12px !important;\r\n        display: none !important;\r\n    }\r\n\r\n    .buy_b_m {\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: flex-start;\r\n        padding: 16px 20px;\r\n        gap: 10px;\r\n        width: 200px;\r\n        height: 54px;\r\n        background: linear-gradient(270deg, #1B4347 -1.39%, #3D906A 99.46%);\r\n        border-radius: 12px;\r\n        border: 0px;\r\n    }\r\n\r\n    .buy_b_m p {\r\n        width: 160px;\r\n        height: 22px;\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 18px;\r\n        line-height: 22px;\r\n        align-items: center;\r\n        text-align: center;\r\n        color: #FFFFFF;\r\n        flex: none;\r\n        order: 0;\r\n        flex-grow: 0;\r\n    }\r\n    \r\n    .buy_m {\r\n        padding-top: 40px;\r\n        display: none !important;\r\n    }\r\n\r\n    .coin_m {\r\n        padding-top: 100px;\r\n        display: none !important;\r\n    }\r\n}\r\n";
	styleInject(css_248z$2);

	var css_248z$1 = "/* Small Devices, Tablets */\r\n@media only screen and (max-width: 768px) {\r\n    #root {\r\n        overflow-x: hidden;\r\n    }\r\n\r\n    .row {\r\n        margin-left: 0px !important;\r\n        margin-right: 0px !important;\r\n        margin-top: 0px !important;\r\n    }\r\n\r\n    .header_back {\r\n        background-image: url('/bg-phone.png');\r\n        width: 100vw;\r\n        height: 647px;\r\n        background-size: 100% 100%;\r\n        background-position: center;\r\n        overflow: hidden;\r\n        background-repeat: no-repeat;\r\n    }\r\n\r\n    .header {\r\n        padding-top: 0px;\r\n        /* background: #C4C4C4; */\r\n    }\r\n\r\n    .header_l {\r\n        text-align: left;\r\n        padding-top: 15px;\r\n        padding-left: 11px !important;\r\n    }\r\n\r\n    .header_m {\r\n        text-align: center;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n        padding: 0px;\r\n        gap: 1px;\r\n        padding-left: 16% !important;\r\n        padding-top: 26px;\r\n        display: none;\r\n    }\r\n\r\n    .header_mc {\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: flex-start;\r\n        padding: 0px;\r\n        gap: 48px;\r\n        width: 387px;\r\n        height: 24px;\r\n        flex: none;\r\n        order: 0;\r\n        flex-grow: 0;\r\n    }\r\n\r\n    .header_mc1 {\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: flex-start;\r\n        padding: 0px;\r\n        gap: 20px;\r\n        width: 387px;\r\n        height: 24px;\r\n        flex: none;\r\n        order: 0;\r\n        flex-grow: 0;\r\n    }\r\n    .header_mc1 a {\r\n        text-decoration: none;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .header_mp {\r\n        height: 24px;\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        font-size: 14px;\r\n        line-height: 24px;\r\n        display: flex;\r\n        align-items: center;\r\n        color: #FFFFFF;\r\n        flex: none;\r\n        order: 0;\r\n        flex-grow: 0;\r\n    }\r\n\r\n    .header_r {\r\n        text-align: right;\r\n        padding-top: 15px;\r\n        padding-right: 11px !important;\r\n        flex: auto;\r\n    }\r\n\r\n    .header_rb {\r\n        width: 79px;\r\n        height: 47px;\r\n        background: linear-gradient(93.58deg, rgba(0, 77, 0, 0.33) 7.62%, rgba(1, 48, 30, 0.33) 104.97%);\r\n        border-radius: 4px;\r\n        float: right;\r\n        border: 0px;\r\n        display: none;\r\n    }\r\n\r\n    .header_rb_m {\r\n        padding-top: 4px;\r\n        padding-left: 10px;\r\n        width: 90px;\r\n        height: 26px;\r\n        background: linear-gradient(90deg, #46A273 -0.2%, #46A273 0.36%, #133641 100.2%);\r\n        border-radius: 4px;\r\n        float: right;\r\n    }\r\n\r\n    .herder_rb_m1 {\r\n        background: #021326;\r\n        float: right;\r\n        padding-top: 3px;\r\n        padding-left: 10px;\r\n    }\r\n\r\n    .header_rb_m p {\r\n        padding-left: 7px;\r\n        padding-top: 3px;\r\n        width: 43px;\r\n        height: 15px;\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        font-size: 12px;\r\n        line-height: 15px;\r\n        display: flex;\r\n        align-items: center;\r\n        letter-spacing: 0.09em;\r\n        color: #FFFFFF;\r\n    }\r\n\r\n    .header_rb p {\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        font-size: 12px;\r\n        line-height: 24px;\r\n        padding-top: 9px;\r\n        align-items: center;\r\n        letter-spacing: 0.09em;\r\n        color: #FFFFFF;\r\n        display: none;\r\n    }\r\n\r\n    .logo_p {\r\n        padding-top: 5px;\r\n        padding-left: 39px;\r\n        font-family: 'PT Mono';\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        font-size: 18.7727px;\r\n        line-height: 21px;\r\n        letter-spacing: 0.02em;\r\n        color: #FFFFFF;\r\n    }\r\n\r\n    .s_p2 {\r\n        width: 290px;\r\n        height: 43px;\r\n        margin-bottom: 0px !important;\r\n        font-family: 'Rubik';\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        font-size: 41px;\r\n        line-height: 43px;\r\n        display: flex;\r\n        align-items: center;\r\n        text-align: center;\r\n        letter-spacing: 0.06em;\r\n        background: linear-gradient(270deg, #1B4347 -1.39%, #3D906A 99.46%);\r\n        -webkit-background-clip: text;\r\n        -webkit-text-fill-color: transparent;\r\n        background-clip: text;\r\n        text-fill-color: transparent;\r\n        text-shadow: 3px 4px 17px rgba(255, 255, 255, 0.2);\r\n        \r\n    }\r\n\r\n    .s_p2::after {\r\n        content: \"Hatom Token\";\r\n        margin-left: -269px;\r\n        /* width: 565px; */\r\n        height: 43px;\r\n        margin-bottom: 0px !important;\r\n        font-family: 'Rubik';\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        font-size: 41px;\r\n        line-height: 43px;\r\n        display: flex;\r\n        align-items: center;\r\n        text-align: center;\r\n        letter-spacing: 0.06em;\r\n        color: #FFFFFF;\r\n        text-shadow: 3px 4px 17px rgba(255, 255, 255, 0.2);\r\n        -webkit-text-fill-color: white;\r\n    }\r\n\r\n    .header_t {\r\n        padding-left: 0%;\r\n        padding-top: 39px;\r\n    }\r\n\r\n    .s_p1 {\r\n        align-items: center;\r\n        text-align: center;\r\n        letter-spacing: 0.02em;\r\n        width: 265px;\r\n        height: 52px;\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        font-size: 18px;\r\n        line-height: 26px;\r\n        display: flex;\r\n        align-items: center;\r\n        text-align: center;\r\n        letter-spacing: 0.06em;\r\n        color: #3D906A;\r\n    }\r\n\r\n    .buy {\r\n        padding-top: 40px;\r\n        display: none !important;\r\n    }\r\n\r\n    .buy_m {\r\n        padding-top: 40px;\r\n        margin-bottom: 50px;\r\n    }\r\n\r\n    .buy_p1_m {\r\n        padding-bottom: 0px !important;\r\n        margin-bottom: 0px !important;\r\n        font-family: 'Arial';\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        font-size: 24px;\r\n        line-height: 18px;\r\n        display: flex;\r\n        align-items: center;\r\n        text-align: center;\r\n        color: #000000;\r\n    }\r\n\r\n    .buy_p12_m {\r\n        font-family: 'Arial';\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        font-size: 32px;\r\n        line-height: 37px;\r\n        display: flex;\r\n        align-items: center;\r\n        text-align: center;\r\n        letter-spacing: 0.03em;\r\n        color: #3555F7;\r\n    }\r\n\r\n    .buy_p1_m p {\r\n        padding-bottom: 0px !important;\r\n        margin-bottom: 0px !important;\r\n    }\r\n\r\n    .buy_p2_m {\r\n        margin-top: 13px !important;\r\n        margin-bottom: 37px !important;\r\n        font-family: 'Arial';\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        font-size: 16px;\r\n        line-height: 18px;\r\n        display: flex;\r\n        align-items: center;\r\n        text-align: center;\r\n        color: #5C5C5C;\r\n    }\r\n\r\n    .buy_p11_m {\r\n        font-family: 'Rubik';\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        font-size: 32px;\r\n        line-height: 38px;\r\n        display: flex;\r\n        align-items: center;\r\n        text-align: center;\r\n        color: #000000; \r\n        padding-left: 20px;\r\n    }\r\n\r\n    .buy_p22_m {\r\n        font-family: 'Rubik';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 16px;\r\n        line-height: 19px;\r\n        display: flex;\r\n        align-items: center;\r\n        text-align: center;\r\n        color: #222222;\r\n    }\r\n\r\n    .buy_b {\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: flex-start;\r\n        padding: 16px 20px;\r\n        gap: 10px;\r\n        width: 200px;\r\n        height: 54px;\r\n        background: linear-gradient(270deg, #1B4347 -1.39%, #3D906A 99.46%);\r\n        border-radius: 12px;\r\n        float: right;\r\n        border: 0px;\r\n    }\r\n\r\n    .buy_b_m {\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: flex-start;\r\n        padding: 16px 20px;\r\n        gap: 10px;\r\n        width: 200px;\r\n        height: 54px;\r\n        background: linear-gradient(270deg, #1B4347 -1.39%, #3D906A 99.46%);\r\n        border-radius: 12px;\r\n        border: 0px;\r\n    }\r\n\r\n    .buy_b p {\r\n        width: 160px;\r\n        height: 22px;\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 18px;\r\n        line-height: 22px;\r\n        align-items: center;\r\n        text-align: center;\r\n        color: #FFFFFF;\r\n        flex: none;\r\n        order: 0;\r\n        flex-grow: 0;\r\n    }\r\n\r\n    .buy_b_m p {\r\n        width: 160px;\r\n        height: 22px;\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 18px;\r\n        line-height: 22px;\r\n        align-items: center;\r\n        text-align: center;\r\n        color: #FFFFFF;\r\n        flex: none;\r\n        order: 0;\r\n        flex-grow: 0;\r\n    }\r\n\r\n    .coin {\r\n        padding-top: 100px;\r\n        display: none !important;\r\n    }\r\n\r\n    .coin_m {\r\n        padding-top: 100px;\r\n    }\r\n\r\n    .coin_p1 {\r\n        width: 526px;\r\n        height: 50px;\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 40px;\r\n        line-height: 50px;\r\n        display: flex;\r\n        align-items: center;\r\n        text-align: center;\r\n        color: #3555F7;\r\n    }\r\n\r\n    .coin_pt {\r\n        font-family: 'Rubik';\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        font-size: 32px;\r\n        line-height: 38px;\r\n        display: flex;\r\n        align-items: center;\r\n        text-align: center;\r\n        color: #000000;\r\n    }\r\n\r\n    .coin_pc {\r\n        font-family: 'Rubik';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 18px;\r\n        line-height: 21px;\r\n        display: flex;\r\n        align-items: center;\r\n        color: #222222;\r\n    }\r\n\r\n    .coin_dot {\r\n        width: 8px;\r\n        height: 8px;\r\n        background: #179C64;\r\n        border-radius: 4px;\r\n        float: left;\r\n        margin-top: 7px;\r\n        margin-right: 16px;\r\n    }\r\n\r\n    .coin_back_t {\r\n        margin-top: 48px !important;\r\n        margin-left: 65% !important;\r\n    }\r\n\r\n    .coin_back_b {\r\n        margin-top: -48px !important;\r\n        margin-left: 50% !important;\r\n    }\r\n\r\n    .sub {\r\n        margin-top: 78px !important;\r\n        width: 100vw;\r\n        height: 478px;\r\n        background: linear-gradient(90deg, #265B5C 0%, #11206B 100%);\r\n    }\r\n\r\n    .sub_c {\r\n        padding-top: 64px;\r\n        text-align: center;\r\n        align-items: center;\r\n        align-content: center;\r\n    }\r\n\r\n    .sub_ct {\r\n        margin-bottom: 0px !important;\r\n        /* width: 407px; */\r\n        height: 50px;\r\n        font-family: 'Arial';\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        font-size: 32px;\r\n        line-height: 37px;\r\n        align-items: center;\r\n        text-align: center;\r\n        color: #FFFFFF;\r\n    }\r\n\r\n    .sub_cc {\r\n        /* width: 312px; */\r\n        height: 24px;\r\n        font-family: 'Arial';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 18px;\r\n        line-height: 24px;\r\n        align-items: center;\r\n        text-align: center;\r\n        letter-spacing: 0.03em;\r\n        color: #C4D3EA;\r\n        padding-top: 54px;\r\n    }\r\n\r\n    .search_sub {\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-items: center !important;\r\n        padding: 0px;\r\n        gap: 278px;\r\n        width: 55px !important;\r\n        height: 52px;\r\n        flex: none;\r\n        order: 0;\r\n        flex-grow: 0;\r\n        background-color: #315B82 !important;\r\n        border: 0px !important;\r\n    }\r\n\r\n    .sub_con {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n        padding: 6px 6px 6px 32px;\r\n        margin: auto;\r\n        gap: 10px;\r\n        /* width: 363px; */\r\n        height: 63.63px;\r\n        background: #315B82;\r\n        border-radius: 12px;\r\n        align-items: center;\r\n        margin-top: 100px;\r\n    }\r\n\r\n    .sub_con1 {\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-items: center;\r\n        padding: 0px;\r\n        width: 563px;\r\n        height: 52px;\r\n        flex: none;\r\n        order: 0;\r\n        flex-grow: 0;\r\n    }\r\n\r\n    .sub_btn {\r\n        display: flex;\r\n        color: #FFFFFF !important;\r\n        flex-direction: row;\r\n        align-items: flex-start;\r\n        padding: 16px 36px;\r\n        gap: 10px;\r\n        width: 149px;\r\n        height: 52px;\r\n        background: linear-gradient(270deg, #1B4347 -1.39%, #3D906A 99.46%);\r\n        border-radius: 12px !important;\r\n        display: none !important;\r\n    }\r\n\r\n    .sub_btn_m {\r\n        display: flex;\r\n        color: #FFFFFF !important;\r\n        flex-direction: row;\r\n        align-items: flex-start;\r\n        padding: 16px 36px !important;\r\n        gap: 10px;\r\n        width: 149px;\r\n        height: 52px;\r\n        background: linear-gradient(270deg, #1B4347 -1.39%, #3D906A 99.46%);\r\n        border-radius: 12px !important;\r\n        margin-top: 30px;\r\n    }\r\n\r\n    .sub_btn p {\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 16px;\r\n        line-height: 20px;\r\n        display: flex;\r\n        align-items: center;\r\n        color: #FFFFFF;\r\n        flex: none;\r\n        order: 0;\r\n        flex-grow: 0;\r\n    }\r\n\r\n    .footer_l1 {\r\n        padding-top: 179.5px !important;\r\n        padding-left: 50%;\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 12px;\r\n        line-height: 24px;\r\n        display: flex;\r\n        align-items: center;\r\n        color: #8493B5;\r\n        display: none;\r\n    }\r\n\r\n    .footer_l1_m {\r\n        padding-right: 20px;\r\n        float: right;\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 12px;\r\n        line-height: 24px;\r\n        display: flex;\r\n        align-items: center;\r\n        color: #8493B5;\r\n    }\r\n\r\n    .footer_c {\r\n        padding-left: 22px !important;\r\n    }\r\n\r\n    .footer_logo {\r\n        padding-left: 22px;\r\n        margin-bottom: -50px;\r\n    }\r\n\r\n    .footer_ct {\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        font-size: 14px;\r\n        line-height: 24px;\r\n        display: flex;\r\n        align-items: center;\r\n        color: #FFFFFF;\r\n        padding-top: 60px;\r\n    }\r\n\r\n    .footer_cc {\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 12px;\r\n        line-height: 24px;\r\n        display: flex;\r\n        align-items: center;\r\n        color: #8493B5;\r\n    }\r\n\r\n    .footer_r {\r\n        text-align: right;\r\n        padding-right: 122px !important;\r\n    }\r\n\r\n    .footer_line {\r\n        width: 100vw;\r\n        height: 1px;\r\n        background: #0F2945;\r\n        margin-left: 0%;\r\n        margin-right: 118px;\r\n        margin-top: 50px;\r\n    }\r\n\r\n    .footer_1 {\r\n        width: 9px;\r\n        height: 9px;\r\n        background: #00D395;\r\n        border-radius: 5px;\r\n        float: left;\r\n        margin-top: 5px;\r\n        margin-left: -40px;\r\n    }\r\n\r\n    .footer_1_m {\r\n        width: 9px;\r\n        height: 9px;\r\n        background: #00D395;\r\n        border-radius: 5px;\r\n        float: left;\r\n        margin-top: 5px;\r\n        margin-left: 15px;\r\n        margin-right: 15px;\r\n    }\r\n\r\n    .footer_2 {\r\n        font-family: 'Neue Haas Grotesk Text Pro';\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        font-size: 11.6px;\r\n        line-height: 24px;\r\n        display: flex;\r\n        align-items: center;\r\n        color: #8493B5;\r\n        margin-left: -20px;\r\n        float: left;\r\n    }\r\n\r\n    #animation {\r\n        background-image: url('/coin-sequence.png');\r\n        background-repeat: no-repeat;\r\n        height: 200px;\r\n        width: 200px;\r\n        background-size: 200px, 200px;\r\n        margin-top: 50% !important;\r\n        margin-left: 120% !important;\r\n    }\r\n\r\n    #animation_m {\r\n        background-image: url('/coin-sequence.png');\r\n        background-repeat: no-repeat;\r\n        height: 200px;\r\n        width: 200px;\r\n        background-size: 200px, 200px;\r\n        margin-top: 50% !important;\r\n        margin-left: 120% !important;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n";
	styleInject(css_248z$1);

	var propTypes = {exports: {}};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret_1;
	var hasRequiredReactPropTypesSecret;

	function requireReactPropTypesSecret () {
		if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
		hasRequiredReactPropTypesSecret = 1;

		var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

		ReactPropTypesSecret_1 = ReactPropTypesSecret;
		return ReactPropTypesSecret_1;
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var factoryWithThrowingShims;
	var hasRequiredFactoryWithThrowingShims;

	function requireFactoryWithThrowingShims () {
		if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
		hasRequiredFactoryWithThrowingShims = 1;

		var ReactPropTypesSecret = requireReactPropTypesSecret();

		function emptyFunction() {}
		function emptyFunctionWithReset() {}
		emptyFunctionWithReset.resetWarningCache = emptyFunction;

		factoryWithThrowingShims = function() {
		  function shim(props, propName, componentName, location, propFullName, secret) {
		    if (secret === ReactPropTypesSecret) {
		      // It is still safe when called from React.
		      return;
		    }
		    var err = new Error(
		      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
		      'Use PropTypes.checkPropTypes() to call them. ' +
		      'Read more at http://fb.me/use-check-prop-types'
		    );
		    err.name = 'Invariant Violation';
		    throw err;
		  }	  shim.isRequired = shim;
		  function getShim() {
		    return shim;
		  }	  // Important!
		  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
		  var ReactPropTypes = {
		    array: shim,
		    bigint: shim,
		    bool: shim,
		    func: shim,
		    number: shim,
		    object: shim,
		    string: shim,
		    symbol: shim,

		    any: shim,
		    arrayOf: getShim,
		    element: shim,
		    elementType: shim,
		    instanceOf: getShim,
		    node: shim,
		    objectOf: getShim,
		    oneOf: getShim,
		    oneOfType: getShim,
		    shape: getShim,
		    exact: getShim,

		    checkPropTypes: emptyFunctionWithReset,
		    resetWarningCache: emptyFunction
		  };

		  ReactPropTypes.PropTypes = ReactPropTypes;

		  return ReactPropTypes;
		};
		return factoryWithThrowingShims;
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  propTypes.exports = requireFactoryWithThrowingShims()();
	}

	var classnames = {exports: {}};

	/*!
	  Copyright (c) 2018 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	(function (module) {
		/* global define */

		(function () {

			var hasOwn = {}.hasOwnProperty;

			function classNames() {
				var classes = [];

				for (var i = 0; i < arguments.length; i++) {
					var arg = arguments[i];
					if (!arg) continue;

					var argType = typeof arg;

					if (argType === 'string' || argType === 'number') {
						classes.push(arg);
					} else if (Array.isArray(arg)) {
						if (arg.length) {
							var inner = classNames.apply(null, arg);
							if (inner) {
								classes.push(inner);
							}
						}
					} else if (argType === 'object') {
						if (arg.toString === Object.prototype.toString) {
							for (var key in arg) {
								if (hasOwn.call(arg, key) && arg[key]) {
									classes.push(key);
								}
							}
						} else {
							classes.push(arg.toString());
						}
					}
				}

				return classes.join(' ');
			}

			if (module.exports) {
				classNames.default = classNames;
				module.exports = classNames;
			} else {
				window.classNames = classNames;
			}
		}());
	} (classnames));

	var classNames = classnames.exports;

	var ManagerReferenceNodeContext = react.exports.createContext();
	var ManagerReferenceNodeSetterContext = react.exports.createContext();
	function Manager(_ref) {
	  var children = _ref.children;

	  var _React$useState = react.exports.useState(null),
	      referenceNode = _React$useState[0],
	      setReferenceNode = _React$useState[1];

	  var hasUnmounted = react.exports.useRef(false);
	  react.exports.useEffect(function () {
	    return function () {
	      hasUnmounted.current = true;
	    };
	  }, []);
	  var handleSetReferenceNode = react.exports.useCallback(function (node) {
	    if (!hasUnmounted.current) {
	      setReferenceNode(node);
	    }
	  }, []);
	  return /*#__PURE__*/react.exports.createElement(ManagerReferenceNodeContext.Provider, {
	    value: referenceNode
	  }, /*#__PURE__*/react.exports.createElement(ManagerReferenceNodeSetterContext.Provider, {
	    value: handleSetReferenceNode
	  }, children));
	}

	/**
	 * Takes an argument and if it's an array, returns the first item in the array,
	 * otherwise returns the argument. Used for Preact compatibility.
	 */
	var unwrapArray = function unwrapArray(arg) {
	  return Array.isArray(arg) ? arg[0] : arg;
	};
	/**
	 * Takes a maybe-undefined function and arbitrary args and invokes the function
	 * only if it is defined.
	 */

	var safeInvoke = function safeInvoke(fn) {
	  if (typeof fn === 'function') {
	    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    return fn.apply(void 0, args);
	  }
	};
	/**
	 * Sets a ref using either a ref callback or a ref object
	 */

	var setRef = function setRef(ref, node) {
	  // if its a function call it
	  if (typeof ref === 'function') {
	    return safeInvoke(ref, node);
	  } // otherwise we should treat it as a ref object
	  else if (ref != null) {
	      ref.current = node;
	    }
	};
	/**
	 * Simple ponyfill for Object.fromEntries
	 */

	var fromEntries = function fromEntries(entries) {
	  return entries.reduce(function (acc, _ref) {
	    var key = _ref[0],
	        value = _ref[1];
	    acc[key] = value;
	    return acc;
	  }, {});
	};
	/**
	 * Small wrapper around `useLayoutEffect` to get rid of the warning on SSR envs
	 */

	var useIsomorphicLayoutEffect = typeof window !== 'undefined' && window.document && window.document.createElement ? react.exports.useLayoutEffect : react.exports.useEffect;

	var top = 'top';
	var bottom = 'bottom';
	var right = 'right';
	var left = 'left';
	var auto = 'auto';
	var basePlacements = [top, bottom, right, left];
	var start = 'start';
	var end = 'end';
	var clippingParents = 'clippingParents';
	var viewport = 'viewport';
	var popper = 'popper';
	var reference = 'reference';
	var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
	  return acc.concat([placement + "-" + start, placement + "-" + end]);
	}, []);
	var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
	  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
	}, []); // modifiers that need to read the DOM

	var beforeRead = 'beforeRead';
	var read = 'read';
	var afterRead = 'afterRead'; // pure-logic modifiers

	var beforeMain = 'beforeMain';
	var main = 'main';
	var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

	var beforeWrite = 'beforeWrite';
	var write = 'write';
	var afterWrite = 'afterWrite';
	var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

	function getNodeName(element) {
	  return element ? (element.nodeName || '').toLowerCase() : null;
	}

	function getWindow(node) {
	  if (node == null) {
	    return window;
	  }

	  if (node.toString() !== '[object Window]') {
	    var ownerDocument = node.ownerDocument;
	    return ownerDocument ? ownerDocument.defaultView || window : window;
	  }

	  return node;
	}

	function isElement(node) {
	  var OwnElement = getWindow(node).Element;
	  return node instanceof OwnElement || node instanceof Element;
	}

	function isHTMLElement(node) {
	  var OwnElement = getWindow(node).HTMLElement;
	  return node instanceof OwnElement || node instanceof HTMLElement;
	}

	function isShadowRoot(node) {
	  // IE 11 has no ShadowRoot
	  if (typeof ShadowRoot === 'undefined') {
	    return false;
	  }

	  var OwnElement = getWindow(node).ShadowRoot;
	  return node instanceof OwnElement || node instanceof ShadowRoot;
	}

	// and applies them to the HTMLElements such as popper and arrow

	function applyStyles(_ref) {
	  var state = _ref.state;
	  Object.keys(state.elements).forEach(function (name) {
	    var style = state.styles[name] || {};
	    var attributes = state.attributes[name] || {};
	    var element = state.elements[name]; // arrow is optional + virtual elements

	    if (!isHTMLElement(element) || !getNodeName(element)) {
	      return;
	    } // Flow doesn't support to extend this property, but it's the most
	    // effective way to apply styles to an HTMLElement
	    // $FlowFixMe[cannot-write]


	    Object.assign(element.style, style);
	    Object.keys(attributes).forEach(function (name) {
	      var value = attributes[name];

	      if (value === false) {
	        element.removeAttribute(name);
	      } else {
	        element.setAttribute(name, value === true ? '' : value);
	      }
	    });
	  });
	}

	function effect$2(_ref2) {
	  var state = _ref2.state;
	  var initialStyles = {
	    popper: {
	      position: state.options.strategy,
	      left: '0',
	      top: '0',
	      margin: '0'
	    },
	    arrow: {
	      position: 'absolute'
	    },
	    reference: {}
	  };
	  Object.assign(state.elements.popper.style, initialStyles.popper);
	  state.styles = initialStyles;

	  if (state.elements.arrow) {
	    Object.assign(state.elements.arrow.style, initialStyles.arrow);
	  }

	  return function () {
	    Object.keys(state.elements).forEach(function (name) {
	      var element = state.elements[name];
	      var attributes = state.attributes[name] || {};
	      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

	      var style = styleProperties.reduce(function (style, property) {
	        style[property] = '';
	        return style;
	      }, {}); // arrow is optional + virtual elements

	      if (!isHTMLElement(element) || !getNodeName(element)) {
	        return;
	      }

	      Object.assign(element.style, style);
	      Object.keys(attributes).forEach(function (attribute) {
	        element.removeAttribute(attribute);
	      });
	    });
	  };
	} // eslint-disable-next-line import/no-unused-modules


	var applyStyles$1 = {
	  name: 'applyStyles',
	  enabled: true,
	  phase: 'write',
	  fn: applyStyles,
	  effect: effect$2,
	  requires: ['computeStyles']
	};

	function getBasePlacement(placement) {
	  return placement.split('-')[0];
	}

	var max = Math.max;
	var min = Math.min;
	var round = Math.round;

	function getBoundingClientRect(element, includeScale) {
	  if (includeScale === void 0) {
	    includeScale = false;
	  }

	  var rect = element.getBoundingClientRect();
	  var scaleX = 1;
	  var scaleY = 1;

	  if (isHTMLElement(element) && includeScale) {
	    var offsetHeight = element.offsetHeight;
	    var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
	    // Fallback to 1 in case both values are `0`

	    if (offsetWidth > 0) {
	      scaleX = round(rect.width) / offsetWidth || 1;
	    }

	    if (offsetHeight > 0) {
	      scaleY = round(rect.height) / offsetHeight || 1;
	    }
	  }

	  return {
	    width: rect.width / scaleX,
	    height: rect.height / scaleY,
	    top: rect.top / scaleY,
	    right: rect.right / scaleX,
	    bottom: rect.bottom / scaleY,
	    left: rect.left / scaleX,
	    x: rect.left / scaleX,
	    y: rect.top / scaleY
	  };
	}

	// means it doesn't take into account transforms.

	function getLayoutRect(element) {
	  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
	  // Fixes https://github.com/popperjs/popper-core/issues/1223

	  var width = element.offsetWidth;
	  var height = element.offsetHeight;

	  if (Math.abs(clientRect.width - width) <= 1) {
	    width = clientRect.width;
	  }

	  if (Math.abs(clientRect.height - height) <= 1) {
	    height = clientRect.height;
	  }

	  return {
	    x: element.offsetLeft,
	    y: element.offsetTop,
	    width: width,
	    height: height
	  };
	}

	function contains(parent, child) {
	  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

	  if (parent.contains(child)) {
	    return true;
	  } // then fallback to custom implementation with Shadow DOM support
	  else if (rootNode && isShadowRoot(rootNode)) {
	      var next = child;

	      do {
	        if (next && parent.isSameNode(next)) {
	          return true;
	        } // $FlowFixMe[prop-missing]: need a better way to handle this...


	        next = next.parentNode || next.host;
	      } while (next);
	    } // Give up, the result is false


	  return false;
	}

	function getComputedStyle(element) {
	  return getWindow(element).getComputedStyle(element);
	}

	function isTableElement(element) {
	  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
	}

	function getDocumentElement(element) {
	  // $FlowFixMe[incompatible-return]: assume body is always available
	  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
	  element.document) || window.document).documentElement;
	}

	function getParentNode(element) {
	  if (getNodeName(element) === 'html') {
	    return element;
	  }

	  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
	    // $FlowFixMe[incompatible-return]
	    // $FlowFixMe[prop-missing]
	    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
	    element.parentNode || ( // DOM Element detected
	    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
	    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
	    getDocumentElement(element) // fallback

	  );
	}

	function getTrueOffsetParent(element) {
	  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
	  getComputedStyle(element).position === 'fixed') {
	    return null;
	  }

	  return element.offsetParent;
	} // `.offsetParent` reports `null` for fixed elements, while absolute elements
	// return the containing block


	function getContainingBlock(element) {
	  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
	  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

	  if (isIE && isHTMLElement(element)) {
	    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
	    var elementCss = getComputedStyle(element);

	    if (elementCss.position === 'fixed') {
	      return null;
	    }
	  }

	  var currentNode = getParentNode(element);

	  if (isShadowRoot(currentNode)) {
	    currentNode = currentNode.host;
	  }

	  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
	    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
	    // create a containing block.
	    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

	    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
	      return currentNode;
	    } else {
	      currentNode = currentNode.parentNode;
	    }
	  }

	  return null;
	} // Gets the closest ancestor positioned element. Handles some edge cases,
	// such as table ancestors and cross browser bugs.


	function getOffsetParent(element) {
	  var window = getWindow(element);
	  var offsetParent = getTrueOffsetParent(element);

	  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
	    offsetParent = getTrueOffsetParent(offsetParent);
	  }

	  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
	    return window;
	  }

	  return offsetParent || getContainingBlock(element) || window;
	}

	function getMainAxisFromPlacement(placement) {
	  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
	}

	function within(min$1, value, max$1) {
	  return max(min$1, min(value, max$1));
	}
	function withinMaxClamp(min, value, max) {
	  var v = within(min, value, max);
	  return v > max ? max : v;
	}

	function getFreshSideObject() {
	  return {
	    top: 0,
	    right: 0,
	    bottom: 0,
	    left: 0
	  };
	}

	function mergePaddingObject(paddingObject) {
	  return Object.assign({}, getFreshSideObject(), paddingObject);
	}

	function expandToHashMap(value, keys) {
	  return keys.reduce(function (hashMap, key) {
	    hashMap[key] = value;
	    return hashMap;
	  }, {});
	}

	var toPaddingObject = function toPaddingObject(padding, state) {
	  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
	    placement: state.placement
	  })) : padding;
	  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
	};

	function arrow(_ref) {
	  var _state$modifiersData$;

	  var state = _ref.state,
	      name = _ref.name,
	      options = _ref.options;
	  var arrowElement = state.elements.arrow;
	  var popperOffsets = state.modifiersData.popperOffsets;
	  var basePlacement = getBasePlacement(state.placement);
	  var axis = getMainAxisFromPlacement(basePlacement);
	  var isVertical = [left, right].indexOf(basePlacement) >= 0;
	  var len = isVertical ? 'height' : 'width';

	  if (!arrowElement || !popperOffsets) {
	    return;
	  }

	  var paddingObject = toPaddingObject(options.padding, state);
	  var arrowRect = getLayoutRect(arrowElement);
	  var minProp = axis === 'y' ? top : left;
	  var maxProp = axis === 'y' ? bottom : right;
	  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
	  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
	  var arrowOffsetParent = getOffsetParent(arrowElement);
	  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
	  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
	  // outside of the popper bounds

	  var min = paddingObject[minProp];
	  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
	  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
	  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

	  var axisProp = axis;
	  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
	}

	function effect$1(_ref2) {
	  var state = _ref2.state,
	      options = _ref2.options;
	  var _options$element = options.element,
	      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

	  if (arrowElement == null) {
	    return;
	  } // CSS selector


	  if (typeof arrowElement === 'string') {
	    arrowElement = state.elements.popper.querySelector(arrowElement);

	    if (!arrowElement) {
	      return;
	    }
	  }

	  if (!contains(state.elements.popper, arrowElement)) {

	    return;
	  }

	  state.elements.arrow = arrowElement;
	} // eslint-disable-next-line import/no-unused-modules


	var arrow$1 = {
	  name: 'arrow',
	  enabled: true,
	  phase: 'main',
	  fn: arrow,
	  effect: effect$1,
	  requires: ['popperOffsets'],
	  requiresIfExists: ['preventOverflow']
	};

	function getVariation(placement) {
	  return placement.split('-')[1];
	}

	var unsetSides = {
	  top: 'auto',
	  right: 'auto',
	  bottom: 'auto',
	  left: 'auto'
	}; // Round the offsets to the nearest suitable subpixel based on the DPR.
	// Zooming can change the DPR, but it seems to report a value that will
	// cleanly divide the values into the appropriate subpixels.

	function roundOffsetsByDPR(_ref) {
	  var x = _ref.x,
	      y = _ref.y;
	  var win = window;
	  var dpr = win.devicePixelRatio || 1;
	  return {
	    x: round(x * dpr) / dpr || 0,
	    y: round(y * dpr) / dpr || 0
	  };
	}

	function mapToStyles(_ref2) {
	  var _Object$assign2;

	  var popper = _ref2.popper,
	      popperRect = _ref2.popperRect,
	      placement = _ref2.placement,
	      variation = _ref2.variation,
	      offsets = _ref2.offsets,
	      position = _ref2.position,
	      gpuAcceleration = _ref2.gpuAcceleration,
	      adaptive = _ref2.adaptive,
	      roundOffsets = _ref2.roundOffsets,
	      isFixed = _ref2.isFixed;
	  var _offsets$x = offsets.x,
	      x = _offsets$x === void 0 ? 0 : _offsets$x,
	      _offsets$y = offsets.y,
	      y = _offsets$y === void 0 ? 0 : _offsets$y;

	  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
	    x: x,
	    y: y
	  }) : {
	    x: x,
	    y: y
	  };

	  x = _ref3.x;
	  y = _ref3.y;
	  var hasX = offsets.hasOwnProperty('x');
	  var hasY = offsets.hasOwnProperty('y');
	  var sideX = left;
	  var sideY = top;
	  var win = window;

	  if (adaptive) {
	    var offsetParent = getOffsetParent(popper);
	    var heightProp = 'clientHeight';
	    var widthProp = 'clientWidth';

	    if (offsetParent === getWindow(popper)) {
	      offsetParent = getDocumentElement(popper);

	      if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
	        heightProp = 'scrollHeight';
	        widthProp = 'scrollWidth';
	      }
	    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


	    offsetParent = offsetParent;

	    if (placement === top || (placement === left || placement === right) && variation === end) {
	      sideY = bottom;
	      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
	      offsetParent[heightProp];
	      y -= offsetY - popperRect.height;
	      y *= gpuAcceleration ? 1 : -1;
	    }

	    if (placement === left || (placement === top || placement === bottom) && variation === end) {
	      sideX = right;
	      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
	      offsetParent[widthProp];
	      x -= offsetX - popperRect.width;
	      x *= gpuAcceleration ? 1 : -1;
	    }
	  }

	  var commonStyles = Object.assign({
	    position: position
	  }, adaptive && unsetSides);

	  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
	    x: x,
	    y: y
	  }) : {
	    x: x,
	    y: y
	  };

	  x = _ref4.x;
	  y = _ref4.y;

	  if (gpuAcceleration) {
	    var _Object$assign;

	    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
	  }

	  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
	}

	function computeStyles(_ref5) {
	  var state = _ref5.state,
	      options = _ref5.options;
	  var _options$gpuAccelerat = options.gpuAcceleration,
	      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
	      _options$adaptive = options.adaptive,
	      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
	      _options$roundOffsets = options.roundOffsets,
	      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

	  var commonStyles = {
	    placement: getBasePlacement(state.placement),
	    variation: getVariation(state.placement),
	    popper: state.elements.popper,
	    popperRect: state.rects.popper,
	    gpuAcceleration: gpuAcceleration,
	    isFixed: state.options.strategy === 'fixed'
	  };

	  if (state.modifiersData.popperOffsets != null) {
	    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
	      offsets: state.modifiersData.popperOffsets,
	      position: state.options.strategy,
	      adaptive: adaptive,
	      roundOffsets: roundOffsets
	    })));
	  }

	  if (state.modifiersData.arrow != null) {
	    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
	      offsets: state.modifiersData.arrow,
	      position: 'absolute',
	      adaptive: false,
	      roundOffsets: roundOffsets
	    })));
	  }

	  state.attributes.popper = Object.assign({}, state.attributes.popper, {
	    'data-popper-placement': state.placement
	  });
	} // eslint-disable-next-line import/no-unused-modules


	var computeStyles$1 = {
	  name: 'computeStyles',
	  enabled: true,
	  phase: 'beforeWrite',
	  fn: computeStyles,
	  data: {}
	};

	var passive = {
	  passive: true
	};

	function effect(_ref) {
	  var state = _ref.state,
	      instance = _ref.instance,
	      options = _ref.options;
	  var _options$scroll = options.scroll,
	      scroll = _options$scroll === void 0 ? true : _options$scroll,
	      _options$resize = options.resize,
	      resize = _options$resize === void 0 ? true : _options$resize;
	  var window = getWindow(state.elements.popper);
	  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

	  if (scroll) {
	    scrollParents.forEach(function (scrollParent) {
	      scrollParent.addEventListener('scroll', instance.update, passive);
	    });
	  }

	  if (resize) {
	    window.addEventListener('resize', instance.update, passive);
	  }

	  return function () {
	    if (scroll) {
	      scrollParents.forEach(function (scrollParent) {
	        scrollParent.removeEventListener('scroll', instance.update, passive);
	      });
	    }

	    if (resize) {
	      window.removeEventListener('resize', instance.update, passive);
	    }
	  };
	} // eslint-disable-next-line import/no-unused-modules


	var eventListeners = {
	  name: 'eventListeners',
	  enabled: true,
	  phase: 'write',
	  fn: function fn() {},
	  effect: effect,
	  data: {}
	};

	var hash$1 = {
	  left: 'right',
	  right: 'left',
	  bottom: 'top',
	  top: 'bottom'
	};
	function getOppositePlacement(placement) {
	  return placement.replace(/left|right|bottom|top/g, function (matched) {
	    return hash$1[matched];
	  });
	}

	var hash = {
	  start: 'end',
	  end: 'start'
	};
	function getOppositeVariationPlacement(placement) {
	  return placement.replace(/start|end/g, function (matched) {
	    return hash[matched];
	  });
	}

	function getWindowScroll(node) {
	  var win = getWindow(node);
	  var scrollLeft = win.pageXOffset;
	  var scrollTop = win.pageYOffset;
	  return {
	    scrollLeft: scrollLeft,
	    scrollTop: scrollTop
	  };
	}

	function getWindowScrollBarX(element) {
	  // If <html> has a CSS width greater than the viewport, then this will be
	  // incorrect for RTL.
	  // Popper 1 is broken in this case and never had a bug report so let's assume
	  // it's not an issue. I don't think anyone ever specifies width on <html>
	  // anyway.
	  // Browsers where the left scrollbar doesn't cause an issue report `0` for
	  // this (e.g. Edge 2019, IE11, Safari)
	  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
	}

	function getViewportRect(element) {
	  var win = getWindow(element);
	  var html = getDocumentElement(element);
	  var visualViewport = win.visualViewport;
	  var width = html.clientWidth;
	  var height = html.clientHeight;
	  var x = 0;
	  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
	  // can be obscured underneath it.
	  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
	  // if it isn't open, so if this isn't available, the popper will be detected
	  // to overflow the bottom of the screen too early.

	  if (visualViewport) {
	    width = visualViewport.width;
	    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
	    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
	    // errors due to floating point numbers, so we need to check precision.
	    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
	    // Feature detection fails in mobile emulation mode in Chrome.
	    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
	    // 0.001
	    // Fallback here: "Not Safari" userAgent

	    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
	      x = visualViewport.offsetLeft;
	      y = visualViewport.offsetTop;
	    }
	  }

	  return {
	    width: width,
	    height: height,
	    x: x + getWindowScrollBarX(element),
	    y: y
	  };
	}

	// of the `<html>` and `<body>` rect bounds if horizontally scrollable

	function getDocumentRect(element) {
	  var _element$ownerDocumen;

	  var html = getDocumentElement(element);
	  var winScroll = getWindowScroll(element);
	  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
	  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
	  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
	  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
	  var y = -winScroll.scrollTop;

	  if (getComputedStyle(body || html).direction === 'rtl') {
	    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
	  }

	  return {
	    width: width,
	    height: height,
	    x: x,
	    y: y
	  };
	}

	function isScrollParent(element) {
	  // Firefox wants us to check `-x` and `-y` variations as well
	  var _getComputedStyle = getComputedStyle(element),
	      overflow = _getComputedStyle.overflow,
	      overflowX = _getComputedStyle.overflowX,
	      overflowY = _getComputedStyle.overflowY;

	  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
	}

	function getScrollParent(node) {
	  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
	    // $FlowFixMe[incompatible-return]: assume body is always available
	    return node.ownerDocument.body;
	  }

	  if (isHTMLElement(node) && isScrollParent(node)) {
	    return node;
	  }

	  return getScrollParent(getParentNode(node));
	}

	/*
	given a DOM element, return the list of all scroll parents, up the list of ancesors
	until we get to the top window object. This list is what we attach scroll listeners
	to, because if any of these parent elements scroll, we'll need to re-calculate the
	reference element's position.
	*/

	function listScrollParents(element, list) {
	  var _element$ownerDocumen;

	  if (list === void 0) {
	    list = [];
	  }

	  var scrollParent = getScrollParent(element);
	  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
	  var win = getWindow(scrollParent);
	  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
	  var updatedList = list.concat(target);
	  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
	  updatedList.concat(listScrollParents(getParentNode(target)));
	}

	function rectToClientRect(rect) {
	  return Object.assign({}, rect, {
	    left: rect.x,
	    top: rect.y,
	    right: rect.x + rect.width,
	    bottom: rect.y + rect.height
	  });
	}

	function getInnerBoundingClientRect(element) {
	  var rect = getBoundingClientRect(element);
	  rect.top = rect.top + element.clientTop;
	  rect.left = rect.left + element.clientLeft;
	  rect.bottom = rect.top + element.clientHeight;
	  rect.right = rect.left + element.clientWidth;
	  rect.width = element.clientWidth;
	  rect.height = element.clientHeight;
	  rect.x = rect.left;
	  rect.y = rect.top;
	  return rect;
	}

	function getClientRectFromMixedType(element, clippingParent) {
	  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
	} // A "clipping parent" is an overflowable container with the characteristic of
	// clipping (or hiding) overflowing elements with a position different from
	// `initial`


	function getClippingParents(element) {
	  var clippingParents = listScrollParents(getParentNode(element));
	  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
	  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

	  if (!isElement(clipperElement)) {
	    return [];
	  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


	  return clippingParents.filter(function (clippingParent) {
	    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
	  });
	} // Gets the maximum area that the element is visible in due to any number of
	// clipping parents


	function getClippingRect(element, boundary, rootBoundary) {
	  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
	  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
	  var firstClippingParent = clippingParents[0];
	  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
	    var rect = getClientRectFromMixedType(element, clippingParent);
	    accRect.top = max(rect.top, accRect.top);
	    accRect.right = min(rect.right, accRect.right);
	    accRect.bottom = min(rect.bottom, accRect.bottom);
	    accRect.left = max(rect.left, accRect.left);
	    return accRect;
	  }, getClientRectFromMixedType(element, firstClippingParent));
	  clippingRect.width = clippingRect.right - clippingRect.left;
	  clippingRect.height = clippingRect.bottom - clippingRect.top;
	  clippingRect.x = clippingRect.left;
	  clippingRect.y = clippingRect.top;
	  return clippingRect;
	}

	function computeOffsets(_ref) {
	  var reference = _ref.reference,
	      element = _ref.element,
	      placement = _ref.placement;
	  var basePlacement = placement ? getBasePlacement(placement) : null;
	  var variation = placement ? getVariation(placement) : null;
	  var commonX = reference.x + reference.width / 2 - element.width / 2;
	  var commonY = reference.y + reference.height / 2 - element.height / 2;
	  var offsets;

	  switch (basePlacement) {
	    case top:
	      offsets = {
	        x: commonX,
	        y: reference.y - element.height
	      };
	      break;

	    case bottom:
	      offsets = {
	        x: commonX,
	        y: reference.y + reference.height
	      };
	      break;

	    case right:
	      offsets = {
	        x: reference.x + reference.width,
	        y: commonY
	      };
	      break;

	    case left:
	      offsets = {
	        x: reference.x - element.width,
	        y: commonY
	      };
	      break;

	    default:
	      offsets = {
	        x: reference.x,
	        y: reference.y
	      };
	  }

	  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

	  if (mainAxis != null) {
	    var len = mainAxis === 'y' ? 'height' : 'width';

	    switch (variation) {
	      case start:
	        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
	        break;

	      case end:
	        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
	        break;
	    }
	  }

	  return offsets;
	}

	function detectOverflow(state, options) {
	  if (options === void 0) {
	    options = {};
	  }

	  var _options = options,
	      _options$placement = _options.placement,
	      placement = _options$placement === void 0 ? state.placement : _options$placement,
	      _options$boundary = _options.boundary,
	      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
	      _options$rootBoundary = _options.rootBoundary,
	      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
	      _options$elementConte = _options.elementContext,
	      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
	      _options$altBoundary = _options.altBoundary,
	      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
	      _options$padding = _options.padding,
	      padding = _options$padding === void 0 ? 0 : _options$padding;
	  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
	  var altContext = elementContext === popper ? reference : popper;
	  var popperRect = state.rects.popper;
	  var element = state.elements[altBoundary ? altContext : elementContext];
	  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
	  var referenceClientRect = getBoundingClientRect(state.elements.reference);
	  var popperOffsets = computeOffsets({
	    reference: referenceClientRect,
	    element: popperRect,
	    strategy: 'absolute',
	    placement: placement
	  });
	  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
	  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
	  // 0 or negative = within the clipping rect

	  var overflowOffsets = {
	    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
	    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
	    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
	    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
	  };
	  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

	  if (elementContext === popper && offsetData) {
	    var offset = offsetData[placement];
	    Object.keys(overflowOffsets).forEach(function (key) {
	      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
	      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
	      overflowOffsets[key] += offset[axis] * multiply;
	    });
	  }

	  return overflowOffsets;
	}

	function computeAutoPlacement(state, options) {
	  if (options === void 0) {
	    options = {};
	  }

	  var _options = options,
	      placement = _options.placement,
	      boundary = _options.boundary,
	      rootBoundary = _options.rootBoundary,
	      padding = _options.padding,
	      flipVariations = _options.flipVariations,
	      _options$allowedAutoP = _options.allowedAutoPlacements,
	      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
	  var variation = getVariation(placement);
	  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
	    return getVariation(placement) === variation;
	  }) : basePlacements;
	  var allowedPlacements = placements$1.filter(function (placement) {
	    return allowedAutoPlacements.indexOf(placement) >= 0;
	  });

	  if (allowedPlacements.length === 0) {
	    allowedPlacements = placements$1;
	  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


	  var overflows = allowedPlacements.reduce(function (acc, placement) {
	    acc[placement] = detectOverflow(state, {
	      placement: placement,
	      boundary: boundary,
	      rootBoundary: rootBoundary,
	      padding: padding
	    })[getBasePlacement(placement)];
	    return acc;
	  }, {});
	  return Object.keys(overflows).sort(function (a, b) {
	    return overflows[a] - overflows[b];
	  });
	}

	function getExpandedFallbackPlacements(placement) {
	  if (getBasePlacement(placement) === auto) {
	    return [];
	  }

	  var oppositePlacement = getOppositePlacement(placement);
	  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
	}

	function flip(_ref) {
	  var state = _ref.state,
	      options = _ref.options,
	      name = _ref.name;

	  if (state.modifiersData[name]._skip) {
	    return;
	  }

	  var _options$mainAxis = options.mainAxis,
	      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
	      _options$altAxis = options.altAxis,
	      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
	      specifiedFallbackPlacements = options.fallbackPlacements,
	      padding = options.padding,
	      boundary = options.boundary,
	      rootBoundary = options.rootBoundary,
	      altBoundary = options.altBoundary,
	      _options$flipVariatio = options.flipVariations,
	      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
	      allowedAutoPlacements = options.allowedAutoPlacements;
	  var preferredPlacement = state.options.placement;
	  var basePlacement = getBasePlacement(preferredPlacement);
	  var isBasePlacement = basePlacement === preferredPlacement;
	  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
	  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
	    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
	      placement: placement,
	      boundary: boundary,
	      rootBoundary: rootBoundary,
	      padding: padding,
	      flipVariations: flipVariations,
	      allowedAutoPlacements: allowedAutoPlacements
	    }) : placement);
	  }, []);
	  var referenceRect = state.rects.reference;
	  var popperRect = state.rects.popper;
	  var checksMap = new Map();
	  var makeFallbackChecks = true;
	  var firstFittingPlacement = placements[0];

	  for (var i = 0; i < placements.length; i++) {
	    var placement = placements[i];

	    var _basePlacement = getBasePlacement(placement);

	    var isStartVariation = getVariation(placement) === start;
	    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
	    var len = isVertical ? 'width' : 'height';
	    var overflow = detectOverflow(state, {
	      placement: placement,
	      boundary: boundary,
	      rootBoundary: rootBoundary,
	      altBoundary: altBoundary,
	      padding: padding
	    });
	    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

	    if (referenceRect[len] > popperRect[len]) {
	      mainVariationSide = getOppositePlacement(mainVariationSide);
	    }

	    var altVariationSide = getOppositePlacement(mainVariationSide);
	    var checks = [];

	    if (checkMainAxis) {
	      checks.push(overflow[_basePlacement] <= 0);
	    }

	    if (checkAltAxis) {
	      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
	    }

	    if (checks.every(function (check) {
	      return check;
	    })) {
	      firstFittingPlacement = placement;
	      makeFallbackChecks = false;
	      break;
	    }

	    checksMap.set(placement, checks);
	  }

	  if (makeFallbackChecks) {
	    // `2` may be desired in some cases – research later
	    var numberOfChecks = flipVariations ? 3 : 1;

	    var _loop = function _loop(_i) {
	      var fittingPlacement = placements.find(function (placement) {
	        var checks = checksMap.get(placement);

	        if (checks) {
	          return checks.slice(0, _i).every(function (check) {
	            return check;
	          });
	        }
	      });

	      if (fittingPlacement) {
	        firstFittingPlacement = fittingPlacement;
	        return "break";
	      }
	    };

	    for (var _i = numberOfChecks; _i > 0; _i--) {
	      var _ret = _loop(_i);

	      if (_ret === "break") break;
	    }
	  }

	  if (state.placement !== firstFittingPlacement) {
	    state.modifiersData[name]._skip = true;
	    state.placement = firstFittingPlacement;
	    state.reset = true;
	  }
	} // eslint-disable-next-line import/no-unused-modules


	var flip$1 = {
	  name: 'flip',
	  enabled: true,
	  phase: 'main',
	  fn: flip,
	  requiresIfExists: ['offset'],
	  data: {
	    _skip: false
	  }
	};

	function getSideOffsets(overflow, rect, preventedOffsets) {
	  if (preventedOffsets === void 0) {
	    preventedOffsets = {
	      x: 0,
	      y: 0
	    };
	  }

	  return {
	    top: overflow.top - rect.height - preventedOffsets.y,
	    right: overflow.right - rect.width + preventedOffsets.x,
	    bottom: overflow.bottom - rect.height + preventedOffsets.y,
	    left: overflow.left - rect.width - preventedOffsets.x
	  };
	}

	function isAnySideFullyClipped(overflow) {
	  return [top, right, bottom, left].some(function (side) {
	    return overflow[side] >= 0;
	  });
	}

	function hide(_ref) {
	  var state = _ref.state,
	      name = _ref.name;
	  var referenceRect = state.rects.reference;
	  var popperRect = state.rects.popper;
	  var preventedOffsets = state.modifiersData.preventOverflow;
	  var referenceOverflow = detectOverflow(state, {
	    elementContext: 'reference'
	  });
	  var popperAltOverflow = detectOverflow(state, {
	    altBoundary: true
	  });
	  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
	  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
	  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
	  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
	  state.modifiersData[name] = {
	    referenceClippingOffsets: referenceClippingOffsets,
	    popperEscapeOffsets: popperEscapeOffsets,
	    isReferenceHidden: isReferenceHidden,
	    hasPopperEscaped: hasPopperEscaped
	  };
	  state.attributes.popper = Object.assign({}, state.attributes.popper, {
	    'data-popper-reference-hidden': isReferenceHidden,
	    'data-popper-escaped': hasPopperEscaped
	  });
	} // eslint-disable-next-line import/no-unused-modules


	var hide$1 = {
	  name: 'hide',
	  enabled: true,
	  phase: 'main',
	  requiresIfExists: ['preventOverflow'],
	  fn: hide
	};

	function distanceAndSkiddingToXY(placement, rects, offset) {
	  var basePlacement = getBasePlacement(placement);
	  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

	  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
	    placement: placement
	  })) : offset,
	      skidding = _ref[0],
	      distance = _ref[1];

	  skidding = skidding || 0;
	  distance = (distance || 0) * invertDistance;
	  return [left, right].indexOf(basePlacement) >= 0 ? {
	    x: distance,
	    y: skidding
	  } : {
	    x: skidding,
	    y: distance
	  };
	}

	function offset(_ref2) {
	  var state = _ref2.state,
	      options = _ref2.options,
	      name = _ref2.name;
	  var _options$offset = options.offset,
	      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
	  var data = placements.reduce(function (acc, placement) {
	    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
	    return acc;
	  }, {});
	  var _data$state$placement = data[state.placement],
	      x = _data$state$placement.x,
	      y = _data$state$placement.y;

	  if (state.modifiersData.popperOffsets != null) {
	    state.modifiersData.popperOffsets.x += x;
	    state.modifiersData.popperOffsets.y += y;
	  }

	  state.modifiersData[name] = data;
	} // eslint-disable-next-line import/no-unused-modules


	var offset$1 = {
	  name: 'offset',
	  enabled: true,
	  phase: 'main',
	  requires: ['popperOffsets'],
	  fn: offset
	};

	function popperOffsets(_ref) {
	  var state = _ref.state,
	      name = _ref.name;
	  // Offsets are the actual position the popper needs to have to be
	  // properly positioned near its reference element
	  // This is the most basic placement, and will be adjusted by
	  // the modifiers in the next step
	  state.modifiersData[name] = computeOffsets({
	    reference: state.rects.reference,
	    element: state.rects.popper,
	    strategy: 'absolute',
	    placement: state.placement
	  });
	} // eslint-disable-next-line import/no-unused-modules


	var popperOffsets$1 = {
	  name: 'popperOffsets',
	  enabled: true,
	  phase: 'read',
	  fn: popperOffsets,
	  data: {}
	};

	function getAltAxis(axis) {
	  return axis === 'x' ? 'y' : 'x';
	}

	function preventOverflow(_ref) {
	  var state = _ref.state,
	      options = _ref.options,
	      name = _ref.name;
	  var _options$mainAxis = options.mainAxis,
	      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
	      _options$altAxis = options.altAxis,
	      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
	      boundary = options.boundary,
	      rootBoundary = options.rootBoundary,
	      altBoundary = options.altBoundary,
	      padding = options.padding,
	      _options$tether = options.tether,
	      tether = _options$tether === void 0 ? true : _options$tether,
	      _options$tetherOffset = options.tetherOffset,
	      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
	  var overflow = detectOverflow(state, {
	    boundary: boundary,
	    rootBoundary: rootBoundary,
	    padding: padding,
	    altBoundary: altBoundary
	  });
	  var basePlacement = getBasePlacement(state.placement);
	  var variation = getVariation(state.placement);
	  var isBasePlacement = !variation;
	  var mainAxis = getMainAxisFromPlacement(basePlacement);
	  var altAxis = getAltAxis(mainAxis);
	  var popperOffsets = state.modifiersData.popperOffsets;
	  var referenceRect = state.rects.reference;
	  var popperRect = state.rects.popper;
	  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
	    placement: state.placement
	  })) : tetherOffset;
	  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
	    mainAxis: tetherOffsetValue,
	    altAxis: tetherOffsetValue
	  } : Object.assign({
	    mainAxis: 0,
	    altAxis: 0
	  }, tetherOffsetValue);
	  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
	  var data = {
	    x: 0,
	    y: 0
	  };

	  if (!popperOffsets) {
	    return;
	  }

	  if (checkMainAxis) {
	    var _offsetModifierState$;

	    var mainSide = mainAxis === 'y' ? top : left;
	    var altSide = mainAxis === 'y' ? bottom : right;
	    var len = mainAxis === 'y' ? 'height' : 'width';
	    var offset = popperOffsets[mainAxis];
	    var min$1 = offset + overflow[mainSide];
	    var max$1 = offset - overflow[altSide];
	    var additive = tether ? -popperRect[len] / 2 : 0;
	    var minLen = variation === start ? referenceRect[len] : popperRect[len];
	    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
	    // outside the reference bounds

	    var arrowElement = state.elements.arrow;
	    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
	      width: 0,
	      height: 0
	    };
	    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
	    var arrowPaddingMin = arrowPaddingObject[mainSide];
	    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
	    // to include its full size in the calculation. If the reference is small
	    // and near the edge of a boundary, the popper can overflow even if the
	    // reference is not overflowing as well (e.g. virtual elements with no
	    // width or height)

	    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
	    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
	    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
	    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
	    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
	    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
	    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
	    var tetherMax = offset + maxOffset - offsetModifierValue;
	    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
	    popperOffsets[mainAxis] = preventedOffset;
	    data[mainAxis] = preventedOffset - offset;
	  }

	  if (checkAltAxis) {
	    var _offsetModifierState$2;

	    var _mainSide = mainAxis === 'x' ? top : left;

	    var _altSide = mainAxis === 'x' ? bottom : right;

	    var _offset = popperOffsets[altAxis];

	    var _len = altAxis === 'y' ? 'height' : 'width';

	    var _min = _offset + overflow[_mainSide];

	    var _max = _offset - overflow[_altSide];

	    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

	    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

	    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

	    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

	    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

	    popperOffsets[altAxis] = _preventedOffset;
	    data[altAxis] = _preventedOffset - _offset;
	  }

	  state.modifiersData[name] = data;
	} // eslint-disable-next-line import/no-unused-modules


	var preventOverflow$1 = {
	  name: 'preventOverflow',
	  enabled: true,
	  phase: 'main',
	  fn: preventOverflow,
	  requiresIfExists: ['offset']
	};

	function getHTMLElementScroll(element) {
	  return {
	    scrollLeft: element.scrollLeft,
	    scrollTop: element.scrollTop
	  };
	}

	function getNodeScroll(node) {
	  if (node === getWindow(node) || !isHTMLElement(node)) {
	    return getWindowScroll(node);
	  } else {
	    return getHTMLElementScroll(node);
	  }
	}

	function isElementScaled(element) {
	  var rect = element.getBoundingClientRect();
	  var scaleX = round(rect.width) / element.offsetWidth || 1;
	  var scaleY = round(rect.height) / element.offsetHeight || 1;
	  return scaleX !== 1 || scaleY !== 1;
	} // Returns the composite rect of an element relative to its offsetParent.
	// Composite means it takes into account transforms as well as layout.


	function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
	  if (isFixed === void 0) {
	    isFixed = false;
	  }

	  var isOffsetParentAnElement = isHTMLElement(offsetParent);
	  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
	  var documentElement = getDocumentElement(offsetParent);
	  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
	  var scroll = {
	    scrollLeft: 0,
	    scrollTop: 0
	  };
	  var offsets = {
	    x: 0,
	    y: 0
	  };

	  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
	    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
	    isScrollParent(documentElement)) {
	      scroll = getNodeScroll(offsetParent);
	    }

	    if (isHTMLElement(offsetParent)) {
	      offsets = getBoundingClientRect(offsetParent, true);
	      offsets.x += offsetParent.clientLeft;
	      offsets.y += offsetParent.clientTop;
	    } else if (documentElement) {
	      offsets.x = getWindowScrollBarX(documentElement);
	    }
	  }

	  return {
	    x: rect.left + scroll.scrollLeft - offsets.x,
	    y: rect.top + scroll.scrollTop - offsets.y,
	    width: rect.width,
	    height: rect.height
	  };
	}

	function order(modifiers) {
	  var map = new Map();
	  var visited = new Set();
	  var result = [];
	  modifiers.forEach(function (modifier) {
	    map.set(modifier.name, modifier);
	  }); // On visiting object, check for its dependencies and visit them recursively

	  function sort(modifier) {
	    visited.add(modifier.name);
	    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
	    requires.forEach(function (dep) {
	      if (!visited.has(dep)) {
	        var depModifier = map.get(dep);

	        if (depModifier) {
	          sort(depModifier);
	        }
	      }
	    });
	    result.push(modifier);
	  }

	  modifiers.forEach(function (modifier) {
	    if (!visited.has(modifier.name)) {
	      // check for visited object
	      sort(modifier);
	    }
	  });
	  return result;
	}

	function orderModifiers(modifiers) {
	  // order based on dependencies
	  var orderedModifiers = order(modifiers); // order based on phase

	  return modifierPhases.reduce(function (acc, phase) {
	    return acc.concat(orderedModifiers.filter(function (modifier) {
	      return modifier.phase === phase;
	    }));
	  }, []);
	}

	function debounce(fn) {
	  var pending;
	  return function () {
	    if (!pending) {
	      pending = new Promise(function (resolve) {
	        Promise.resolve().then(function () {
	          pending = undefined;
	          resolve(fn());
	        });
	      });
	    }

	    return pending;
	  };
	}

	function mergeByName(modifiers) {
	  var merged = modifiers.reduce(function (merged, current) {
	    var existing = merged[current.name];
	    merged[current.name] = existing ? Object.assign({}, existing, current, {
	      options: Object.assign({}, existing.options, current.options),
	      data: Object.assign({}, existing.data, current.data)
	    }) : current;
	    return merged;
	  }, {}); // IE11 does not support Object.values

	  return Object.keys(merged).map(function (key) {
	    return merged[key];
	  });
	}

	var DEFAULT_OPTIONS = {
	  placement: 'bottom',
	  modifiers: [],
	  strategy: 'absolute'
	};

	function areValidElements() {
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  return !args.some(function (element) {
	    return !(element && typeof element.getBoundingClientRect === 'function');
	  });
	}

	function popperGenerator(generatorOptions) {
	  if (generatorOptions === void 0) {
	    generatorOptions = {};
	  }

	  var _generatorOptions = generatorOptions,
	      _generatorOptions$def = _generatorOptions.defaultModifiers,
	      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
	      _generatorOptions$def2 = _generatorOptions.defaultOptions,
	      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
	  return function createPopper(reference, popper, options) {
	    if (options === void 0) {
	      options = defaultOptions;
	    }

	    var state = {
	      placement: 'bottom',
	      orderedModifiers: [],
	      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
	      modifiersData: {},
	      elements: {
	        reference: reference,
	        popper: popper
	      },
	      attributes: {},
	      styles: {}
	    };
	    var effectCleanupFns = [];
	    var isDestroyed = false;
	    var instance = {
	      state: state,
	      setOptions: function setOptions(setOptionsAction) {
	        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
	        cleanupModifierEffects();
	        state.options = Object.assign({}, defaultOptions, state.options, options);
	        state.scrollParents = {
	          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
	          popper: listScrollParents(popper)
	        }; // Orders the modifiers based on their dependencies and `phase`
	        // properties

	        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

	        state.orderedModifiers = orderedModifiers.filter(function (m) {
	          return m.enabled;
	        }); // Validate the provided modifiers so that the consumer will get warned

	        runModifierEffects();
	        return instance.update();
	      },
	      // Sync update – it will always be executed, even if not necessary. This
	      // is useful for low frequency updates where sync behavior simplifies the
	      // logic.
	      // For high frequency updates (e.g. `resize` and `scroll` events), always
	      // prefer the async Popper#update method
	      forceUpdate: function forceUpdate() {
	        if (isDestroyed) {
	          return;
	        }

	        var _state$elements = state.elements,
	            reference = _state$elements.reference,
	            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
	        // anymore

	        if (!areValidElements(reference, popper)) {

	          return;
	        } // Store the reference and popper rects to be read by modifiers


	        state.rects = {
	          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
	          popper: getLayoutRect(popper)
	        }; // Modifiers have the ability to reset the current update cycle. The
	        // most common use case for this is the `flip` modifier changing the
	        // placement, which then needs to re-run all the modifiers, because the
	        // logic was previously ran for the previous placement and is therefore
	        // stale/incorrect

	        state.reset = false;
	        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
	        // is filled with the initial data specified by the modifier. This means
	        // it doesn't persist and is fresh on each update.
	        // To ensure persistent data, use `${name}#persistent`

	        state.orderedModifiers.forEach(function (modifier) {
	          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
	        });

	        for (var index = 0; index < state.orderedModifiers.length; index++) {

	          if (state.reset === true) {
	            state.reset = false;
	            index = -1;
	            continue;
	          }

	          var _state$orderedModifie = state.orderedModifiers[index],
	              fn = _state$orderedModifie.fn,
	              _state$orderedModifie2 = _state$orderedModifie.options,
	              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
	              name = _state$orderedModifie.name;

	          if (typeof fn === 'function') {
	            state = fn({
	              state: state,
	              options: _options,
	              name: name,
	              instance: instance
	            }) || state;
	          }
	        }
	      },
	      // Async and optimistically optimized update – it will not be executed if
	      // not necessary (debounced to run at most once-per-tick)
	      update: debounce(function () {
	        return new Promise(function (resolve) {
	          instance.forceUpdate();
	          resolve(state);
	        });
	      }),
	      destroy: function destroy() {
	        cleanupModifierEffects();
	        isDestroyed = true;
	      }
	    };

	    if (!areValidElements(reference, popper)) {

	      return instance;
	    }

	    instance.setOptions(options).then(function (state) {
	      if (!isDestroyed && options.onFirstUpdate) {
	        options.onFirstUpdate(state);
	      }
	    }); // Modifiers have the ability to execute arbitrary code before the first
	    // update cycle runs. They will be executed in the same order as the update
	    // cycle. This is useful when a modifier adds some persistent data that
	    // other modifiers need to use, but the modifier is run after the dependent
	    // one.

	    function runModifierEffects() {
	      state.orderedModifiers.forEach(function (_ref3) {
	        var name = _ref3.name,
	            _ref3$options = _ref3.options,
	            options = _ref3$options === void 0 ? {} : _ref3$options,
	            effect = _ref3.effect;

	        if (typeof effect === 'function') {
	          var cleanupFn = effect({
	            state: state,
	            name: name,
	            instance: instance,
	            options: options
	          });

	          var noopFn = function noopFn() {};

	          effectCleanupFns.push(cleanupFn || noopFn);
	        }
	      });
	    }

	    function cleanupModifierEffects() {
	      effectCleanupFns.forEach(function (fn) {
	        return fn();
	      });
	      effectCleanupFns = [];
	    }

	    return instance;
	  };
	}

	var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
	var createPopper = /*#__PURE__*/popperGenerator({
	  defaultModifiers: defaultModifiers
	}); // eslint-disable-next-line import/no-unused-modules

	/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

	var hasElementType = typeof Element !== 'undefined';
	var hasMap = typeof Map === 'function';
	var hasSet = typeof Set === 'function';
	var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

	// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

	function equal(a, b) {
	  // START: fast-deep-equal es6/index.js 3.1.1
	  if (a === b) return true;

	  if (a && b && typeof a == 'object' && typeof b == 'object') {
	    if (a.constructor !== b.constructor) return false;

	    var length, i, keys;
	    if (Array.isArray(a)) {
	      length = a.length;
	      if (length != b.length) return false;
	      for (i = length; i-- !== 0;)
	        if (!equal(a[i], b[i])) return false;
	      return true;
	    }

	    // START: Modifications:
	    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
	    //    to co-exist with es5.
	    // 2. Replace `for of` with es5 compliant iteration using `for`.
	    //    Basically, take:
	    //
	    //    ```js
	    //    for (i of a.entries())
	    //      if (!b.has(i[0])) return false;
	    //    ```
	    //
	    //    ... and convert to:
	    //
	    //    ```js
	    //    it = a.entries();
	    //    while (!(i = it.next()).done)
	    //      if (!b.has(i.value[0])) return false;
	    //    ```
	    //
	    //    **Note**: `i` access switches to `i.value`.
	    var it;
	    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
	      if (a.size !== b.size) return false;
	      it = a.entries();
	      while (!(i = it.next()).done)
	        if (!b.has(i.value[0])) return false;
	      it = a.entries();
	      while (!(i = it.next()).done)
	        if (!equal(i.value[1], b.get(i.value[0]))) return false;
	      return true;
	    }

	    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
	      if (a.size !== b.size) return false;
	      it = a.entries();
	      while (!(i = it.next()).done)
	        if (!b.has(i.value[0])) return false;
	      return true;
	    }
	    // END: Modifications

	    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
	      length = a.length;
	      if (length != b.length) return false;
	      for (i = length; i-- !== 0;)
	        if (a[i] !== b[i]) return false;
	      return true;
	    }

	    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
	    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
	    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

	    keys = Object.keys(a);
	    length = keys.length;
	    if (length !== Object.keys(b).length) return false;

	    for (i = length; i-- !== 0;)
	      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
	    // END: fast-deep-equal

	    // START: react-fast-compare
	    // custom handling for DOM elements
	    if (hasElementType && a instanceof Element) return false;

	    // custom handling for React/Preact
	    for (i = length; i-- !== 0;) {
	      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
	        // React-specific: avoid traversing React elements' _owner
	        // Preact-specific: avoid traversing Preact elements' __v and __o
	        //    __v = $_original / $_vnode
	        //    __o = $_owner
	        // These properties contain circular references and are not needed when
	        // comparing the actual elements (and not their owners)
	        // .$$typeof and ._store on just reasonable markers of elements

	        continue;
	      }

	      // all other properties should be traversed as usual
	      if (!equal(a[keys[i]], b[keys[i]])) return false;
	    }
	    // END: react-fast-compare

	    // START: fast-deep-equal
	    return true;
	  }

	  return a !== a && b !== b;
	}
	// end fast-deep-equal

	var reactFastCompare = function isEqual(a, b) {
	  try {
	    return equal(a, b);
	  } catch (error) {
	    if (((error.message || '').match(/stack|recursion/i))) {
	      // warn on circular references, don't crash
	      // browsers give this different errors name and messages:
	      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
	      // firefox: "InternalError", too much recursion"
	      // edge: "Error", "Out of stack space"
	      console.warn('react-fast-compare cannot handle circular refs');
	      return false;
	    }
	    // some other error. we should definitely know about these
	    throw error;
	  }
	};

	var EMPTY_MODIFIERS$1 = [];
	var usePopper = function usePopper(referenceElement, popperElement, options) {
	  if (options === void 0) {
	    options = {};
	  }

	  var prevOptions = react.exports.useRef(null);
	  var optionsWithDefaults = {
	    onFirstUpdate: options.onFirstUpdate,
	    placement: options.placement || 'bottom',
	    strategy: options.strategy || 'absolute',
	    modifiers: options.modifiers || EMPTY_MODIFIERS$1
	  };

	  var _React$useState = react.exports.useState({
	    styles: {
	      popper: {
	        position: optionsWithDefaults.strategy,
	        left: '0',
	        top: '0'
	      },
	      arrow: {
	        position: 'absolute'
	      }
	    },
	    attributes: {}
	  }),
	      state = _React$useState[0],
	      setState = _React$useState[1];

	  var updateStateModifier = react.exports.useMemo(function () {
	    return {
	      name: 'updateState',
	      enabled: true,
	      phase: 'write',
	      fn: function fn(_ref) {
	        var state = _ref.state;
	        var elements = Object.keys(state.elements);
	        reactDom.exports.flushSync(function () {
	          setState({
	            styles: fromEntries(elements.map(function (element) {
	              return [element, state.styles[element] || {}];
	            })),
	            attributes: fromEntries(elements.map(function (element) {
	              return [element, state.attributes[element]];
	            }))
	          });
	        });
	      },
	      requires: ['computeStyles']
	    };
	  }, []);
	  var popperOptions = react.exports.useMemo(function () {
	    var newOptions = {
	      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
	      placement: optionsWithDefaults.placement,
	      strategy: optionsWithDefaults.strategy,
	      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
	        name: 'applyStyles',
	        enabled: false
	      }])
	    };

	    if (reactFastCompare(prevOptions.current, newOptions)) {
	      return prevOptions.current || newOptions;
	    } else {
	      prevOptions.current = newOptions;
	      return newOptions;
	    }
	  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
	  var popperInstanceRef = react.exports.useRef();
	  useIsomorphicLayoutEffect(function () {
	    if (popperInstanceRef.current) {
	      popperInstanceRef.current.setOptions(popperOptions);
	    }
	  }, [popperOptions]);
	  useIsomorphicLayoutEffect(function () {
	    if (referenceElement == null || popperElement == null) {
	      return;
	    }

	    var createPopper$1 = options.createPopper || createPopper;
	    var popperInstance = createPopper$1(referenceElement, popperElement, popperOptions);
	    popperInstanceRef.current = popperInstance;
	    return function () {
	      popperInstance.destroy();
	      popperInstanceRef.current = null;
	    };
	  }, [referenceElement, popperElement, options.createPopper]);
	  return {
	    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
	    styles: state.styles,
	    attributes: state.attributes,
	    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
	    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
	  };
	};

	var NOOP = function NOOP() {
	  return void 0;
	};

	var NOOP_PROMISE = function NOOP_PROMISE() {
	  return Promise.resolve(null);
	};

	var EMPTY_MODIFIERS = [];
	function Popper(_ref) {
	  var _ref$placement = _ref.placement,
	      placement = _ref$placement === void 0 ? 'bottom' : _ref$placement,
	      _ref$strategy = _ref.strategy,
	      strategy = _ref$strategy === void 0 ? 'absolute' : _ref$strategy,
	      _ref$modifiers = _ref.modifiers,
	      modifiers = _ref$modifiers === void 0 ? EMPTY_MODIFIERS : _ref$modifiers,
	      referenceElement = _ref.referenceElement,
	      onFirstUpdate = _ref.onFirstUpdate,
	      innerRef = _ref.innerRef,
	      children = _ref.children;
	  var referenceNode = react.exports.useContext(ManagerReferenceNodeContext);

	  var _React$useState = react.exports.useState(null),
	      popperElement = _React$useState[0],
	      setPopperElement = _React$useState[1];

	  var _React$useState2 = react.exports.useState(null),
	      arrowElement = _React$useState2[0],
	      setArrowElement = _React$useState2[1];

	  react.exports.useEffect(function () {
	    setRef(innerRef, popperElement);
	  }, [innerRef, popperElement]);
	  var options = react.exports.useMemo(function () {
	    return {
	      placement: placement,
	      strategy: strategy,
	      onFirstUpdate: onFirstUpdate,
	      modifiers: [].concat(modifiers, [{
	        name: 'arrow',
	        enabled: arrowElement != null,
	        options: {
	          element: arrowElement
	        }
	      }])
	    };
	  }, [placement, strategy, onFirstUpdate, modifiers, arrowElement]);

	  var _usePopper = usePopper(referenceElement || referenceNode, popperElement, options),
	      state = _usePopper.state,
	      styles = _usePopper.styles,
	      forceUpdate = _usePopper.forceUpdate,
	      update = _usePopper.update;

	  var childrenProps = react.exports.useMemo(function () {
	    return {
	      ref: setPopperElement,
	      style: styles.popper,
	      placement: state ? state.placement : placement,
	      hasPopperEscaped: state && state.modifiersData.hide ? state.modifiersData.hide.hasPopperEscaped : null,
	      isReferenceHidden: state && state.modifiersData.hide ? state.modifiersData.hide.isReferenceHidden : null,
	      arrowProps: {
	        style: styles.arrow,
	        ref: setArrowElement
	      },
	      forceUpdate: forceUpdate || NOOP,
	      update: update || NOOP_PROMISE
	    };
	  }, [setPopperElement, setArrowElement, placement, state, styles, update, forceUpdate]);
	  return unwrapArray(children)(childrenProps);
	}

	function Reference(_ref) {
	  var children = _ref.children,
	      innerRef = _ref.innerRef;
	  var setReferenceNode = react.exports.useContext(ManagerReferenceNodeSetterContext);
	  var refHandler = react.exports.useCallback(function (node) {
	    setRef(innerRef, node);
	    safeInvoke(setReferenceNode, node);
	  }, [innerRef, setReferenceNode]); // ran on unmount
	  // eslint-disable-next-line react-hooks/exhaustive-deps

	  react.exports.useEffect(function () {
	    return function () {
	      return setRef(innerRef, null);
	    };
	  }, []);
	  react.exports.useEffect(function () {
	  }, [setReferenceNode]);
	  return unwrapArray(children)({
	    ref: refHandler
	  });
	}

	function _extends$1() {
	  _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };
	  return _extends$1.apply(this, arguments);
	}

	function _objectWithoutPropertiesLoose$1(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };
	  return _setPrototypeOf(o, p);
	}

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  _setPrototypeOf(subClass, superClass);
	}

	/**
	 * Checks if a given element has a CSS class.
	 * 
	 * @param element the element
	 * @param className the CSS class name
	 */
	function hasClass(element, className) {
	  if (element.classList) return !!className && element.classList.contains(className);
	  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
	}

	/**
	 * Adds a CSS class to a given element.
	 * 
	 * @param element the element
	 * @param className the CSS class name
	 */

	function addClass(element, className) {
	  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
	}

	function replaceClassName(origClass, classToRemove) {
	  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
	}
	/**
	 * Removes a CSS class from a given element.
	 * 
	 * @param element the element
	 * @param className the CSS class name
	 */


	function removeClass$1(element, className) {
	  if (element.classList) {
	    element.classList.remove(className);
	  } else if (typeof element.className === 'string') {
	    element.className = replaceClassName(element.className, className);
	  } else {
	    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
	  }
	}

	var config = {
	  disabled: false
	};

	var TransitionGroupContext = React.createContext(null);

	var UNMOUNTED = 'unmounted';
	var EXITED = 'exited';
	var ENTERING = 'entering';
	var ENTERED = 'entered';
	var EXITING = 'exiting';
	/**
	 * The Transition component lets you describe a transition from one component
	 * state to another _over time_ with a simple declarative API. Most commonly
	 * it's used to animate the mounting and unmounting of a component, but can also
	 * be used to describe in-place transition states as well.
	 *
	 * ---
	 *
	 * **Note**: `Transition` is a platform-agnostic base component. If you're using
	 * transitions in CSS, you'll probably want to use
	 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
	 * instead. It inherits all the features of `Transition`, but contains
	 * additional features necessary to play nice with CSS transitions (hence the
	 * name of the component).
	 *
	 * ---
	 *
	 * By default the `Transition` component does not alter the behavior of the
	 * component it renders, it only tracks "enter" and "exit" states for the
	 * components. It's up to you to give meaning and effect to those states. For
	 * example we can add styles to a component when it enters or exits:
	 *
	 * ```jsx
	 * import { Transition } from 'react-transition-group';
	 *
	 * const duration = 300;
	 *
	 * const defaultStyle = {
	 *   transition: `opacity ${duration}ms ease-in-out`,
	 *   opacity: 0,
	 * }
	 *
	 * const transitionStyles = {
	 *   entering: { opacity: 1 },
	 *   entered:  { opacity: 1 },
	 *   exiting:  { opacity: 0 },
	 *   exited:  { opacity: 0 },
	 * };
	 *
	 * const Fade = ({ in: inProp }) => (
	 *   <Transition in={inProp} timeout={duration}>
	 *     {state => (
	 *       <div style={{
	 *         ...defaultStyle,
	 *         ...transitionStyles[state]
	 *       }}>
	 *         I'm a fade Transition!
	 *       </div>
	 *     )}
	 *   </Transition>
	 * );
	 * ```
	 *
	 * There are 4 main states a Transition can be in:
	 *  - `'entering'`
	 *  - `'entered'`
	 *  - `'exiting'`
	 *  - `'exited'`
	 *
	 * Transition state is toggled via the `in` prop. When `true` the component
	 * begins the "Enter" stage. During this stage, the component will shift from
	 * its current transition state, to `'entering'` for the duration of the
	 * transition and then to the `'entered'` stage once it's complete. Let's take
	 * the following example (we'll use the
	 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
	 *
	 * ```jsx
	 * function App() {
	 *   const [inProp, setInProp] = useState(false);
	 *   return (
	 *     <div>
	 *       <Transition in={inProp} timeout={500}>
	 *         {state => (
	 *           // ...
	 *         )}
	 *       </Transition>
	 *       <button onClick={() => setInProp(true)}>
	 *         Click to Enter
	 *       </button>
	 *     </div>
	 *   );
	 * }
	 * ```
	 *
	 * When the button is clicked the component will shift to the `'entering'` state
	 * and stay there for 500ms (the value of `timeout`) before it finally switches
	 * to `'entered'`.
	 *
	 * When `in` is `false` the same thing happens except the state moves from
	 * `'exiting'` to `'exited'`.
	 */

	var Transition = /*#__PURE__*/function (_React$Component) {
	  _inheritsLoose(Transition, _React$Component);

	  function Transition(props, context) {
	    var _this;

	    _this = _React$Component.call(this, props, context) || this;
	    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

	    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
	    var initialStatus;
	    _this.appearStatus = null;

	    if (props.in) {
	      if (appear) {
	        initialStatus = EXITED;
	        _this.appearStatus = ENTERING;
	      } else {
	        initialStatus = ENTERED;
	      }
	    } else {
	      if (props.unmountOnExit || props.mountOnEnter) {
	        initialStatus = UNMOUNTED;
	      } else {
	        initialStatus = EXITED;
	      }
	    }

	    _this.state = {
	      status: initialStatus
	    };
	    _this.nextCallback = null;
	    return _this;
	  }

	  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
	    var nextIn = _ref.in;

	    if (nextIn && prevState.status === UNMOUNTED) {
	      return {
	        status: EXITED
	      };
	    }

	    return null;
	  } // getSnapshotBeforeUpdate(prevProps) {
	  //   let nextStatus = null
	  //   if (prevProps !== this.props) {
	  //     const { status } = this.state
	  //     if (this.props.in) {
	  //       if (status !== ENTERING && status !== ENTERED) {
	  //         nextStatus = ENTERING
	  //       }
	  //     } else {
	  //       if (status === ENTERING || status === ENTERED) {
	  //         nextStatus = EXITING
	  //       }
	  //     }
	  //   }
	  //   return { nextStatus }
	  // }
	  ;

	  var _proto = Transition.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    this.updateStatus(true, this.appearStatus);
	  };

	  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var nextStatus = null;

	    if (prevProps !== this.props) {
	      var status = this.state.status;

	      if (this.props.in) {
	        if (status !== ENTERING && status !== ENTERED) {
	          nextStatus = ENTERING;
	        }
	      } else {
	        if (status === ENTERING || status === ENTERED) {
	          nextStatus = EXITING;
	        }
	      }
	    }

	    this.updateStatus(false, nextStatus);
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    this.cancelNextCallback();
	  };

	  _proto.getTimeouts = function getTimeouts() {
	    var timeout = this.props.timeout;
	    var exit, enter, appear;
	    exit = enter = appear = timeout;

	    if (timeout != null && typeof timeout !== 'number') {
	      exit = timeout.exit;
	      enter = timeout.enter; // TODO: remove fallback for next major

	      appear = timeout.appear !== undefined ? timeout.appear : enter;
	    }

	    return {
	      exit: exit,
	      enter: enter,
	      appear: appear
	    };
	  };

	  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
	    if (mounting === void 0) {
	      mounting = false;
	    }

	    if (nextStatus !== null) {
	      // nextStatus will always be ENTERING or EXITING.
	      this.cancelNextCallback();

	      if (nextStatus === ENTERING) {
	        this.performEnter(mounting);
	      } else {
	        this.performExit();
	      }
	    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
	      this.setState({
	        status: UNMOUNTED
	      });
	    }
	  };

	  _proto.performEnter = function performEnter(mounting) {
	    var _this2 = this;

	    var enter = this.props.enter;
	    var appearing = this.context ? this.context.isMounting : mounting;

	    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing],
	        maybeNode = _ref2[0],
	        maybeAppearing = _ref2[1];

	    var timeouts = this.getTimeouts();
	    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
	    // if we are mounting and running this it means appear _must_ be set

	    if (!mounting && !enter || config.disabled) {
	      this.safeSetState({
	        status: ENTERED
	      }, function () {
	        _this2.props.onEntered(maybeNode);
	      });
	      return;
	    }

	    this.props.onEnter(maybeNode, maybeAppearing);
	    this.safeSetState({
	      status: ENTERING
	    }, function () {
	      _this2.props.onEntering(maybeNode, maybeAppearing);

	      _this2.onTransitionEnd(enterTimeout, function () {
	        _this2.safeSetState({
	          status: ENTERED
	        }, function () {
	          _this2.props.onEntered(maybeNode, maybeAppearing);
	        });
	      });
	    });
	  };

	  _proto.performExit = function performExit() {
	    var _this3 = this;

	    var exit = this.props.exit;
	    var timeouts = this.getTimeouts();
	    var maybeNode = this.props.nodeRef ? undefined : ReactDOM.findDOMNode(this); // no exit animation skip right to EXITED

	    if (!exit || config.disabled) {
	      this.safeSetState({
	        status: EXITED
	      }, function () {
	        _this3.props.onExited(maybeNode);
	      });
	      return;
	    }

	    this.props.onExit(maybeNode);
	    this.safeSetState({
	      status: EXITING
	    }, function () {
	      _this3.props.onExiting(maybeNode);

	      _this3.onTransitionEnd(timeouts.exit, function () {
	        _this3.safeSetState({
	          status: EXITED
	        }, function () {
	          _this3.props.onExited(maybeNode);
	        });
	      });
	    });
	  };

	  _proto.cancelNextCallback = function cancelNextCallback() {
	    if (this.nextCallback !== null) {
	      this.nextCallback.cancel();
	      this.nextCallback = null;
	    }
	  };

	  _proto.safeSetState = function safeSetState(nextState, callback) {
	    // This shouldn't be necessary, but there are weird race conditions with
	    // setState callbacks and unmounting in testing, so always make sure that
	    // we can cancel any pending setState callbacks after we unmount.
	    callback = this.setNextCallback(callback);
	    this.setState(nextState, callback);
	  };

	  _proto.setNextCallback = function setNextCallback(callback) {
	    var _this4 = this;

	    var active = true;

	    this.nextCallback = function (event) {
	      if (active) {
	        active = false;
	        _this4.nextCallback = null;
	        callback(event);
	      }
	    };

	    this.nextCallback.cancel = function () {
	      active = false;
	    };

	    return this.nextCallback;
	  };

	  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
	    this.setNextCallback(handler);
	    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
	    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

	    if (!node || doesNotHaveTimeoutOrListener) {
	      setTimeout(this.nextCallback, 0);
	      return;
	    }

	    if (this.props.addEndListener) {
	      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
	          maybeNode = _ref3[0],
	          maybeNextCallback = _ref3[1];

	      this.props.addEndListener(maybeNode, maybeNextCallback);
	    }

	    if (timeout != null) {
	      setTimeout(this.nextCallback, timeout);
	    }
	  };

	  _proto.render = function render() {
	    var status = this.state.status;

	    if (status === UNMOUNTED) {
	      return null;
	    }

	    var _this$props = this.props,
	        children = _this$props.children;
	        _this$props.in;
	        _this$props.mountOnEnter;
	        _this$props.unmountOnExit;
	        _this$props.appear;
	        _this$props.enter;
	        _this$props.exit;
	        _this$props.timeout;
	        _this$props.addEndListener;
	        _this$props.onEnter;
	        _this$props.onEntering;
	        _this$props.onEntered;
	        _this$props.onExit;
	        _this$props.onExiting;
	        _this$props.onExited;
	        _this$props.nodeRef;
	        var childProps = _objectWithoutPropertiesLoose$1(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

	    return (
	      /*#__PURE__*/
	      // allows for nested Transitions
	      React.createElement(TransitionGroupContext.Provider, {
	        value: null
	      }, typeof children === 'function' ? children(status, childProps) : React.cloneElement(React.Children.only(children), childProps))
	    );
	  };

	  return Transition;
	}(React.Component);

	Transition.contextType = TransitionGroupContext;
	Transition.propTypes = {}; // Name the function so it is clearer in the documentation

	function noop$3() {}

	Transition.defaultProps = {
	  in: false,
	  mountOnEnter: false,
	  unmountOnExit: false,
	  appear: false,
	  enter: true,
	  exit: true,
	  onEnter: noop$3,
	  onEntering: noop$3,
	  onEntered: noop$3,
	  onExit: noop$3,
	  onExiting: noop$3,
	  onExited: noop$3
	};
	Transition.UNMOUNTED = UNMOUNTED;
	Transition.EXITED = EXITED;
	Transition.ENTERING = ENTERING;
	Transition.ENTERED = ENTERED;
	Transition.EXITING = EXITING;

	var _addClass = function addClass$1(node, classes) {
	  return node && classes && classes.split(' ').forEach(function (c) {
	    return addClass(node, c);
	  });
	};

	var removeClass = function removeClass(node, classes) {
	  return node && classes && classes.split(' ').forEach(function (c) {
	    return removeClass$1(node, c);
	  });
	};
	/**
	 * A transition component inspired by the excellent
	 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
	 * use it if you're using CSS transitions or animations. It's built upon the
	 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
	 * component, so it inherits all of its props.
	 *
	 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
	 * and `exit` states of the transition. The first class is applied and then a
	 * second `*-active` class in order to activate the CSS transition. After the
	 * transition, matching `*-done` class names are applied to persist the
	 * transition state.
	 *
	 * ```jsx
	 * function App() {
	 *   const [inProp, setInProp] = useState(false);
	 *   return (
	 *     <div>
	 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
	 *         <div>
	 *           {"I'll receive my-node-* classes"}
	 *         </div>
	 *       </CSSTransition>
	 *       <button type="button" onClick={() => setInProp(true)}>
	 *         Click to Enter
	 *       </button>
	 *     </div>
	 *   );
	 * }
	 * ```
	 *
	 * When the `in` prop is set to `true`, the child component will first receive
	 * the class `example-enter`, then the `example-enter-active` will be added in
	 * the next tick. `CSSTransition` [forces a
	 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
	 * between before adding the `example-enter-active`. This is an important trick
	 * because it allows us to transition between `example-enter` and
	 * `example-enter-active` even though they were added immediately one after
	 * another. Most notably, this is what makes it possible for us to animate
	 * _appearance_.
	 *
	 * ```css
	 * .my-node-enter {
	 *   opacity: 0;
	 * }
	 * .my-node-enter-active {
	 *   opacity: 1;
	 *   transition: opacity 200ms;
	 * }
	 * .my-node-exit {
	 *   opacity: 1;
	 * }
	 * .my-node-exit-active {
	 *   opacity: 0;
	 *   transition: opacity 200ms;
	 * }
	 * ```
	 *
	 * `*-active` classes represent which styles you want to animate **to**, so it's
	 * important to add `transition` declaration only to them, otherwise transitions
	 * might not behave as intended! This might not be obvious when the transitions
	 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
	 * the example above (minus `transition`), but it becomes apparent in more
	 * complex transitions.
	 *
	 * **Note**: If you're using the
	 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
	 * prop, make sure to define styles for `.appear-*` classes as well.
	 */


	var CSSTransition = /*#__PURE__*/function (_React$Component) {
	  _inheritsLoose(CSSTransition, _React$Component);

	  function CSSTransition() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
	    _this.appliedClasses = {
	      appear: {},
	      enter: {},
	      exit: {}
	    };

	    _this.onEnter = function (maybeNode, maybeAppearing) {
	      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
	          node = _this$resolveArgument[0],
	          appearing = _this$resolveArgument[1];

	      _this.removeClasses(node, 'exit');

	      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

	      if (_this.props.onEnter) {
	        _this.props.onEnter(maybeNode, maybeAppearing);
	      }
	    };

	    _this.onEntering = function (maybeNode, maybeAppearing) {
	      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
	          node = _this$resolveArgument2[0],
	          appearing = _this$resolveArgument2[1];

	      var type = appearing ? 'appear' : 'enter';

	      _this.addClass(node, type, 'active');

	      if (_this.props.onEntering) {
	        _this.props.onEntering(maybeNode, maybeAppearing);
	      }
	    };

	    _this.onEntered = function (maybeNode, maybeAppearing) {
	      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
	          node = _this$resolveArgument3[0],
	          appearing = _this$resolveArgument3[1];

	      var type = appearing ? 'appear' : 'enter';

	      _this.removeClasses(node, type);

	      _this.addClass(node, type, 'done');

	      if (_this.props.onEntered) {
	        _this.props.onEntered(maybeNode, maybeAppearing);
	      }
	    };

	    _this.onExit = function (maybeNode) {
	      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
	          node = _this$resolveArgument4[0];

	      _this.removeClasses(node, 'appear');

	      _this.removeClasses(node, 'enter');

	      _this.addClass(node, 'exit', 'base');

	      if (_this.props.onExit) {
	        _this.props.onExit(maybeNode);
	      }
	    };

	    _this.onExiting = function (maybeNode) {
	      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
	          node = _this$resolveArgument5[0];

	      _this.addClass(node, 'exit', 'active');

	      if (_this.props.onExiting) {
	        _this.props.onExiting(maybeNode);
	      }
	    };

	    _this.onExited = function (maybeNode) {
	      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
	          node = _this$resolveArgument6[0];

	      _this.removeClasses(node, 'exit');

	      _this.addClass(node, 'exit', 'done');

	      if (_this.props.onExited) {
	        _this.props.onExited(maybeNode);
	      }
	    };

	    _this.resolveArguments = function (maybeNode, maybeAppearing) {
	      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
	      : [maybeNode, maybeAppearing];
	    };

	    _this.getClassNames = function (type) {
	      var classNames = _this.props.classNames;
	      var isStringClassNames = typeof classNames === 'string';
	      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
	      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
	      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
	      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
	      return {
	        baseClassName: baseClassName,
	        activeClassName: activeClassName,
	        doneClassName: doneClassName
	      };
	    };

	    return _this;
	  }

	  var _proto = CSSTransition.prototype;

	  _proto.addClass = function addClass(node, type, phase) {
	    var className = this.getClassNames(type)[phase + "ClassName"];

	    var _this$getClassNames = this.getClassNames('enter'),
	        doneClassName = _this$getClassNames.doneClassName;

	    if (type === 'appear' && phase === 'done' && doneClassName) {
	      className += " " + doneClassName;
	    } // This is to force a repaint,
	    // which is necessary in order to transition styles when adding a class name.


	    if (phase === 'active') {
	      /* eslint-disable no-unused-expressions */
	      node && node.scrollTop;
	    }

	    if (className) {
	      this.appliedClasses[type][phase] = className;

	      _addClass(node, className);
	    }
	  };

	  _proto.removeClasses = function removeClasses(node, type) {
	    var _this$appliedClasses$ = this.appliedClasses[type],
	        baseClassName = _this$appliedClasses$.base,
	        activeClassName = _this$appliedClasses$.active,
	        doneClassName = _this$appliedClasses$.done;
	    this.appliedClasses[type] = {};

	    if (baseClassName) {
	      removeClass(node, baseClassName);
	    }

	    if (activeClassName) {
	      removeClass(node, activeClassName);
	    }

	    if (doneClassName) {
	      removeClass(node, doneClassName);
	    }
	  };

	  _proto.render = function render() {
	    var _this$props = this.props;
	        _this$props.classNames;
	        var props = _objectWithoutPropertiesLoose$1(_this$props, ["classNames"]);

	    return /*#__PURE__*/React.createElement(Transition, _extends$1({}, props, {
	      onEnter: this.onEnter,
	      onEntered: this.onEntered,
	      onEntering: this.onEntering,
	      onExit: this.onExit,
	      onExiting: this.onExiting,
	      onExited: this.onExited
	    }));
	  };

	  return CSSTransition;
	}(React.Component);

	CSSTransition.defaultProps = {
	  classNames: ''
	};
	CSSTransition.propTypes = {};

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	/**
	 * Given `this.props.children`, return an object mapping key to child.
	 *
	 * @param {*} children `this.props.children`
	 * @return {object} Mapping of key to child
	 */

	function getChildMapping(children, mapFn) {
	  var mapper = function mapper(child) {
	    return mapFn && react.exports.isValidElement(child) ? mapFn(child) : child;
	  };

	  var result = Object.create(null);
	  if (children) react.exports.Children.map(children, function (c) {
	    return c;
	  }).forEach(function (child) {
	    // run the map function here instead so that the key is the computed one
	    result[child.key] = mapper(child);
	  });
	  return result;
	}
	/**
	 * When you're adding or removing children some may be added or removed in the
	 * same render pass. We want to show *both* since we want to simultaneously
	 * animate elements in and out. This function takes a previous set of keys
	 * and a new set of keys and merges them with its best guess of the correct
	 * ordering. In the future we may expose some of the utilities in
	 * ReactMultiChild to make this easy, but for now React itself does not
	 * directly have this concept of the union of prevChildren and nextChildren
	 * so we implement it here.
	 *
	 * @param {object} prev prev children as returned from
	 * `ReactTransitionChildMapping.getChildMapping()`.
	 * @param {object} next next children as returned from
	 * `ReactTransitionChildMapping.getChildMapping()`.
	 * @return {object} a key set that contains all keys in `prev` and all keys
	 * in `next` in a reasonable order.
	 */

	function mergeChildMappings(prev, next) {
	  prev = prev || {};
	  next = next || {};

	  function getValueForKey(key) {
	    return key in next ? next[key] : prev[key];
	  } // For each key of `next`, the list of keys to insert before that key in
	  // the combined list


	  var nextKeysPending = Object.create(null);
	  var pendingKeys = [];

	  for (var prevKey in prev) {
	    if (prevKey in next) {
	      if (pendingKeys.length) {
	        nextKeysPending[prevKey] = pendingKeys;
	        pendingKeys = [];
	      }
	    } else {
	      pendingKeys.push(prevKey);
	    }
	  }

	  var i;
	  var childMapping = {};

	  for (var nextKey in next) {
	    if (nextKeysPending[nextKey]) {
	      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	        var pendingNextKey = nextKeysPending[nextKey][i];
	        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	      }
	    }

	    childMapping[nextKey] = getValueForKey(nextKey);
	  } // Finally, add the keys which didn't appear before any key in `next`


	  for (i = 0; i < pendingKeys.length; i++) {
	    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	  }

	  return childMapping;
	}

	function getProp(child, prop, props) {
	  return props[prop] != null ? props[prop] : child.props[prop];
	}

	function getInitialChildMapping(props, onExited) {
	  return getChildMapping(props.children, function (child) {
	    return react.exports.cloneElement(child, {
	      onExited: onExited.bind(null, child),
	      in: true,
	      appear: getProp(child, 'appear', props),
	      enter: getProp(child, 'enter', props),
	      exit: getProp(child, 'exit', props)
	    });
	  });
	}
	function getNextChildMapping(nextProps, prevChildMapping, onExited) {
	  var nextChildMapping = getChildMapping(nextProps.children);
	  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
	  Object.keys(children).forEach(function (key) {
	    var child = children[key];
	    if (!react.exports.isValidElement(child)) return;
	    var hasPrev = (key in prevChildMapping);
	    var hasNext = (key in nextChildMapping);
	    var prevChild = prevChildMapping[key];
	    var isLeaving = react.exports.isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

	    if (hasNext && (!hasPrev || isLeaving)) {
	      // console.log('entering', key)
	      children[key] = react.exports.cloneElement(child, {
	        onExited: onExited.bind(null, child),
	        in: true,
	        exit: getProp(child, 'exit', nextProps),
	        enter: getProp(child, 'enter', nextProps)
	      });
	    } else if (!hasNext && hasPrev && !isLeaving) {
	      // item is old (exiting)
	      // console.log('leaving', key)
	      children[key] = react.exports.cloneElement(child, {
	        in: false
	      });
	    } else if (hasNext && hasPrev && react.exports.isValidElement(prevChild)) {
	      // item hasn't changed transition states
	      // copy over the last transition props;
	      // console.log('unchanged', key)
	      children[key] = react.exports.cloneElement(child, {
	        onExited: onExited.bind(null, child),
	        in: prevChild.props.in,
	        exit: getProp(child, 'exit', nextProps),
	        enter: getProp(child, 'enter', nextProps)
	      });
	    }
	  });
	  return children;
	}

	var values = Object.values || function (obj) {
	  return Object.keys(obj).map(function (k) {
	    return obj[k];
	  });
	};

	var defaultProps = {
	  component: 'div',
	  childFactory: function childFactory(child) {
	    return child;
	  }
	};
	/**
	 * The `<TransitionGroup>` component manages a set of transition components
	 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
	 * components, `<TransitionGroup>` is a state machine for managing the mounting
	 * and unmounting of components over time.
	 *
	 * Consider the example below. As items are removed or added to the TodoList the
	 * `in` prop is toggled automatically by the `<TransitionGroup>`.
	 *
	 * Note that `<TransitionGroup>`  does not define any animation behavior!
	 * Exactly _how_ a list item animates is up to the individual transition
	 * component. This means you can mix and match animations across different list
	 * items.
	 */

	var TransitionGroup = /*#__PURE__*/function (_React$Component) {
	  _inheritsLoose(TransitionGroup, _React$Component);

	  function TransitionGroup(props, context) {
	    var _this;

	    _this = _React$Component.call(this, props, context) || this;

	    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


	    _this.state = {
	      contextValue: {
	        isMounting: true
	      },
	      handleExited: handleExited,
	      firstRender: true
	    };
	    return _this;
	  }

	  var _proto = TransitionGroup.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    this.mounted = true;
	    this.setState({
	      contextValue: {
	        isMounting: false
	      }
	    });
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    this.mounted = false;
	  };

	  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
	    var prevChildMapping = _ref.children,
	        handleExited = _ref.handleExited,
	        firstRender = _ref.firstRender;
	    return {
	      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
	      firstRender: false
	    };
	  } // node is `undefined` when user provided `nodeRef` prop
	  ;

	  _proto.handleExited = function handleExited(child, node) {
	    var currentChildMapping = getChildMapping(this.props.children);
	    if (child.key in currentChildMapping) return;

	    if (child.props.onExited) {
	      child.props.onExited(node);
	    }

	    if (this.mounted) {
	      this.setState(function (state) {
	        var children = _extends$1({}, state.children);

	        delete children[child.key];
	        return {
	          children: children
	        };
	      });
	    }
	  };

	  _proto.render = function render() {
	    var _this$props = this.props,
	        Component = _this$props.component,
	        childFactory = _this$props.childFactory,
	        props = _objectWithoutPropertiesLoose$1(_this$props, ["component", "childFactory"]);

	    var contextValue = this.state.contextValue;
	    var children = values(this.state.children).map(childFactory);
	    delete props.appear;
	    delete props.enter;
	    delete props.exit;

	    if (Component === null) {
	      return /*#__PURE__*/React.createElement(TransitionGroupContext.Provider, {
	        value: contextValue
	      }, children);
	    }

	    return /*#__PURE__*/React.createElement(TransitionGroupContext.Provider, {
	      value: contextValue
	    }, /*#__PURE__*/React.createElement(Component, props, children));
	  };

	  return TransitionGroup;
	}(React.Component);

	TransitionGroup.propTypes = {};
	TransitionGroup.defaultProps = defaultProps;

	/**
	 * The `<ReplaceTransition>` component is a specialized `Transition` component
	 * that animates between two children.
	 *
	 * ```jsx
	 * <ReplaceTransition in>
	 *   <Fade><div>I appear first</div></Fade>
	 *   <Fade><div>I replace the above</div></Fade>
	 * </ReplaceTransition>
	 * ```
	 */

	var ReplaceTransition = /*#__PURE__*/function (_React$Component) {
	  _inheritsLoose(ReplaceTransition, _React$Component);

	  function ReplaceTransition() {
	    var _this;

	    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
	      _args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

	    _this.handleEnter = function () {
	      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      return _this.handleLifecycle('onEnter', 0, args);
	    };

	    _this.handleEntering = function () {
	      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }

	      return _this.handleLifecycle('onEntering', 0, args);
	    };

	    _this.handleEntered = function () {
	      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        args[_key4] = arguments[_key4];
	      }

	      return _this.handleLifecycle('onEntered', 0, args);
	    };

	    _this.handleExit = function () {
	      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	        args[_key5] = arguments[_key5];
	      }

	      return _this.handleLifecycle('onExit', 1, args);
	    };

	    _this.handleExiting = function () {
	      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	        args[_key6] = arguments[_key6];
	      }

	      return _this.handleLifecycle('onExiting', 1, args);
	    };

	    _this.handleExited = function () {
	      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	        args[_key7] = arguments[_key7];
	      }

	      return _this.handleLifecycle('onExited', 1, args);
	    };

	    return _this;
	  }

	  var _proto = ReplaceTransition.prototype;

	  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
	    var _child$props;

	    var children = this.props.children;
	    var child = React.Children.toArray(children)[idx];
	    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);

	    if (this.props[handler]) {
	      var maybeNode = child.props.nodeRef ? undefined : ReactDOM.findDOMNode(this);
	      this.props[handler](maybeNode);
	    }
	  };

	  _proto.render = function render() {
	    var _this$props = this.props,
	        children = _this$props.children,
	        inProp = _this$props.in,
	        props = _objectWithoutPropertiesLoose$1(_this$props, ["children", "in"]);

	    var _React$Children$toArr = React.Children.toArray(children),
	        first = _React$Children$toArr[0],
	        second = _React$Children$toArr[1];

	    delete props.onEnter;
	    delete props.onEntering;
	    delete props.onEntered;
	    delete props.onExit;
	    delete props.onExiting;
	    delete props.onExited;
	    return /*#__PURE__*/React.createElement(TransitionGroup, props, inProp ? React.cloneElement(first, {
	      key: 'first',
	      onEnter: this.handleEnter,
	      onEntering: this.handleEntering,
	      onEntered: this.handleEntered
	    }) : React.cloneElement(second, {
	      key: 'second',
	      onEnter: this.handleExit,
	      onEntering: this.handleExiting,
	      onEntered: this.handleExited
	    }));
	  };

	  return ReplaceTransition;
	}(React.Component);

	ReplaceTransition.propTypes = {};

	var _leaveRenders, _enterRenders;

	function areChildrenDifferent(oldChildren, newChildren) {
	  if (oldChildren === newChildren) return false;

	  if (React.isValidElement(oldChildren) && React.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
	    return false;
	  }

	  return true;
	}
	/**
	 * Enum of modes for SwitchTransition component
	 * @enum { string }
	 */


	var modes = {
	  out: 'out-in',
	  in: 'in-out'
	};

	var callHook = function callHook(element, name, cb) {
	  return function () {
	    var _element$props;

	    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
	    cb();
	  };
	};

	var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
	  var current = _ref.current,
	      changeState = _ref.changeState;
	  return React.cloneElement(current, {
	    in: false,
	    onExited: callHook(current, 'onExited', function () {
	      changeState(ENTERING, null);
	    })
	  });
	}, _leaveRenders[modes.in] = function (_ref2) {
	  var current = _ref2.current,
	      changeState = _ref2.changeState,
	      children = _ref2.children;
	  return [current, React.cloneElement(children, {
	    in: true,
	    onEntered: callHook(children, 'onEntered', function () {
	      changeState(ENTERING);
	    })
	  })];
	}, _leaveRenders);
	var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
	  var children = _ref3.children,
	      changeState = _ref3.changeState;
	  return React.cloneElement(children, {
	    in: true,
	    onEntered: callHook(children, 'onEntered', function () {
	      changeState(ENTERED, React.cloneElement(children, {
	        in: true
	      }));
	    })
	  });
	}, _enterRenders[modes.in] = function (_ref4) {
	  var current = _ref4.current,
	      children = _ref4.children,
	      changeState = _ref4.changeState;
	  return [React.cloneElement(current, {
	    in: false,
	    onExited: callHook(current, 'onExited', function () {
	      changeState(ENTERED, React.cloneElement(children, {
	        in: true
	      }));
	    })
	  }), React.cloneElement(children, {
	    in: true
	  })];
	}, _enterRenders);
	/**
	 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
	 * You can use it when you want to control the render between state transitions.
	 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
	 *
	 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
	 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child.
	 *
	 * **Note**: If you want the animation to happen simultaneously
	 * (that is, to have the old child removed and a new child inserted **at the same time**),
	 * you should use
	 * [`TransitionGroup`](https://reactcommunity.org/react-transition-group/transition-group)
	 * instead.
	 *
	 * ```jsx
	 * function App() {
	 *  const [state, setState] = useState(false);
	 *  return (
	 *    <SwitchTransition>
	 *      <CSSTransition
	 *        key={state ? "Goodbye, world!" : "Hello, world!"}
	 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
	 *        classNames='fade'
	 *      >
	 *        <button onClick={() => setState(state => !state)}>
	 *          {state ? "Goodbye, world!" : "Hello, world!"}
	 *        </button>
	 *      </CSSTransition>
	 *    </SwitchTransition>
	 *  );
	 * }
	 * ```
	 *
	 * ```css
	 * .fade-enter{
	 *    opacity: 0;
	 * }
	 * .fade-exit{
	 *    opacity: 1;
	 * }
	 * .fade-enter-active{
	 *    opacity: 1;
	 * }
	 * .fade-exit-active{
	 *    opacity: 0;
	 * }
	 * .fade-enter-active,
	 * .fade-exit-active{
	 *    transition: opacity 500ms;
	 * }
	 * ```
	 */

	var SwitchTransition = /*#__PURE__*/function (_React$Component) {
	  _inheritsLoose(SwitchTransition, _React$Component);

	  function SwitchTransition() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
	    _this.state = {
	      status: ENTERED,
	      current: null
	    };
	    _this.appeared = false;

	    _this.changeState = function (status, current) {
	      if (current === void 0) {
	        current = _this.state.current;
	      }

	      _this.setState({
	        status: status,
	        current: current
	      });
	    };

	    return _this;
	  }

	  var _proto = SwitchTransition.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    this.appeared = true;
	  };

	  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
	    if (props.children == null) {
	      return {
	        current: null
	      };
	    }

	    if (state.status === ENTERING && props.mode === modes.in) {
	      return {
	        status: ENTERING
	      };
	    }

	    if (state.current && areChildrenDifferent(state.current, props.children)) {
	      return {
	        status: EXITING
	      };
	    }

	    return {
	      current: React.cloneElement(props.children, {
	        in: true
	      })
	    };
	  };

	  _proto.render = function render() {
	    var _this$props = this.props,
	        children = _this$props.children,
	        mode = _this$props.mode,
	        _this$state = this.state,
	        status = _this$state.status,
	        current = _this$state.current;
	    var data = {
	      children: children,
	      current: current,
	      changeState: this.changeState,
	      status: status
	    };
	    var component;

	    switch (status) {
	      case ENTERING:
	        component = enterRenders[mode](data);
	        break;

	      case EXITING:
	        component = leaveRenders[mode](data);
	        break;

	      case ENTERED:
	        component = current;
	    }

	    return /*#__PURE__*/React.createElement(TransitionGroupContext.Provider, {
	      value: {
	        isMounting: !this.appeared
	      }
	    }, component);
	  };

	  return SwitchTransition;
	}(React.Component);

	SwitchTransition.propTypes = {};
	SwitchTransition.defaultProps = {
	  mode: modes.out
	};

	function ownKeys(object, enumerableOnly) {
	  var keys = Object.keys(object);

	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);

	    if (enumerableOnly) {
	      symbols = symbols.filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	      });
	    }

	    keys.push.apply(keys, symbols);
	  }

	  return keys;
	}

	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};

	    if (i % 2) {
	      ownKeys(Object(source), true).forEach(function (key) {
	        _defineProperty(target, key, source[key]);
	      });
	    } else if (Object.getOwnPropertyDescriptors) {
	      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	    } else {
	      ownKeys(Object(source)).forEach(function (key) {
	        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	      });
	    }
	  }

	  return target;
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};

	  var target = _objectWithoutPropertiesLoose(source, excluded);

	  var key, i;

	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	function getScrollbarWidth() {
	  let scrollDiv = document.createElement('div'); // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113

	  scrollDiv.style.position = 'absolute';
	  scrollDiv.style.top = '-9999px';
	  scrollDiv.style.width = '50px';
	  scrollDiv.style.height = '50px';
	  scrollDiv.style.overflow = 'scroll';
	  document.body.appendChild(scrollDiv);
	  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	  document.body.removeChild(scrollDiv);
	  return scrollbarWidth;
	}
	function setScrollbarWidth(padding) {
	  document.body.style.paddingRight = padding > 0 ? `${padding}px` : null;
	}
	function isBodyOverflowing() {
	  return document.body.clientWidth < window.innerWidth;
	}
	function getOriginalBodyPadding() {
	  const style = window.getComputedStyle(document.body, null);
	  return parseInt(style && style.getPropertyValue('padding-right') || 0, 10);
	}
	function conditionallyUpdateScrollbar() {
	  const scrollbarWidth = getScrollbarWidth(); // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433

	  const fixedContent = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0];
	  const bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;

	  if (isBodyOverflowing()) {
	    setScrollbarWidth(bodyPadding + scrollbarWidth);
	  }
	}
	let globalCssModule;
	function mapToCssModules(className = '', cssModule = globalCssModule) {
	  if (!cssModule) return className;
	  return className.split(' ').map(c => cssModule[c] || c).join(' ');
	}
	/**
	 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
	 */

	function omit(obj, omitKeys) {
	  const result = {};
	  Object.keys(obj).forEach(key => {
	    if (omitKeys.indexOf(key) === -1) {
	      result[key] = obj[key];
	    }
	  });
	  return result;
	}
	/**
	 * Returns a filtered copy of an object with only the specified keys.
	 */

	function pick(obj, keys) {
	  const pickKeys = Array.isArray(keys) ? keys : [keys];
	  let length = pickKeys.length;
	  let key;
	  const result = {};

	  while (length > 0) {
	    length -= 1;
	    key = pickKeys[length];
	    result[key] = obj[key];
	  }

	  return result;
	}
	let warned = {};
	function warnOnce(message) {
	  if (!warned[message]) {
	    /* istanbul ignore else */
	    if (typeof console !== 'undefined') {
	      console.error(message); // eslint-disable-line no-console
	    }

	    warned[message] = true;
	  }
	}
	function deprecated(propType, explanation) {
	  return function validate(props, propName, componentName, ...rest) {
	    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
	      warnOnce(`"${propName}" property of "${componentName}" has been deprecated.\n${explanation}`);
	    }

	    return propType(props, propName, componentName, ...rest);
	  };
	} // Shim Element if needed (e.g. in Node environment)

	const Element$1 = typeof window === 'object' && window.Element || function () {};

	function DOMElement(props, propName, componentName) {
	  if (!(props[propName] instanceof Element$1)) {
	    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
	  }
	}
	const targetPropType = propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.func, DOMElement, propTypes.exports.shape({
	  current: propTypes.exports.any
	})]);
	const tagPropType = propTypes.exports.oneOfType([propTypes.exports.func, propTypes.exports.string, propTypes.exports.shape({
	  $$typeof: propTypes.exports.symbol,
	  render: propTypes.exports.func
	}), propTypes.exports.arrayOf(propTypes.exports.oneOfType([propTypes.exports.func, propTypes.exports.string, propTypes.exports.shape({
	  $$typeof: propTypes.exports.symbol,
	  render: propTypes.exports.func
	})]))]);
	/* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
	// These are all setup to match what is in the bootstrap _variables.scss
	// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss

	const TransitionTimeouts = {
	  Fade: 150,
	  // $transition-fade
	  Collapse: 350,
	  // $transition-collapse
	  Modal: 300,
	  // $modal-transition
	  Carousel: 600,
	  // $carousel-transition
	  Offcanvas: 300 // $offcanvas-transition

	}; // Duplicated Transition.propType keys to ensure that Reactstrap builds
	// for distribution properly exclude these keys for nested child HTML attributes
	// since `react-transition-group` removes propTypes in production builds.

	const TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];
	const TransitionStatuses = {
	  ENTERING: 'entering',
	  ENTERED: 'entered',
	  EXITING: 'exiting',
	  EXITED: 'exited'
	};
	const keyCodes = {
	  esc: 27,
	  space: 32,
	  enter: 13,
	  tab: 9,
	  up: 38,
	  down: 40,
	  home: 36,
	  end: 35,
	  n: 78,
	  p: 80
	};
	const PopperPlacements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
	const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	function isReactRefObj(target) {
	  if (target && typeof target === 'object') {
	    return 'current' in target;
	  }

	  return false;
	}

	function getTag(value) {
	  if (value == null) {
	    return value === undefined ? '[object Undefined]' : '[object Null]';
	  }

	  return Object.prototype.toString.call(value);
	}
	function isObject(value) {
	  const type = typeof value;
	  return value != null && (type === 'object' || type === 'function');
	}
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }

	  const tag = getTag(value);
	  return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object Proxy]';
	}
	function findDOMElements(target) {
	  if (isReactRefObj(target)) {
	    return target.current;
	  }

	  if (isFunction(target)) {
	    return target();
	  }

	  if (typeof target === 'string' && canUseDOM) {
	    let selection = document.querySelectorAll(target);

	    if (!selection.length) {
	      selection = document.querySelectorAll(`#${target}`);
	    }

	    if (!selection.length) {
	      throw new Error(`The target '${target}' could not be identified in the dom, tip: check spelling`);
	    }

	    return selection;
	  }

	  return target;
	}
	function isArrayOrNodeList(els) {
	  if (els === null) {
	    return false;
	  }

	  return Array.isArray(els) || canUseDOM && typeof els.length === 'number';
	}
	function getTarget(target, allElements) {
	  const els = findDOMElements(target);

	  if (allElements) {
	    if (isArrayOrNodeList(els)) {
	      return els;
	    }

	    if (els === null) {
	      return [];
	    }

	    return [els];
	  } else {
	    if (isArrayOrNodeList(els)) {
	      return els[0];
	    }

	    return els;
	  }
	}
	const defaultToggleEvents = ['touchstart', 'click'];
	function addMultipleEventListeners(_els, handler, _events, useCapture) {
	  let els = _els;

	  if (!isArrayOrNodeList(els)) {
	    els = [els];
	  }

	  let events = _events;

	  if (typeof events === 'string') {
	    events = events.split(/\s+/);
	  }

	  if (!isArrayOrNodeList(els) || typeof handler !== 'function' || !Array.isArray(events)) {
	    throw new Error(`
      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.
      The second must be a function.
      The third is a string or an array of strings that represents DOM events
    `);
	  }

	  Array.prototype.forEach.call(events, event => {
	    Array.prototype.forEach.call(els, el => {
	      el.addEventListener(event, handler, useCapture);
	    });
	  });
	  return function removeEvents() {
	    Array.prototype.forEach.call(events, event => {
	      Array.prototype.forEach.call(els, el => {
	        el.removeEventListener(event, handler, useCapture);
	      });
	    });
	  };
	}
	const focusableElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'object', 'embed', '[tabindex]:not(.modal)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];
	({
	  tag: tagPropType,
	  fluid: propTypes.exports.oneOfType([propTypes.exports.bool, propTypes.exports.string]),
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});

	const _excluded$1e = ["className", "cssModule", "noGutters", "tag", "widths"];
	const rowColWidths = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
	const rowColsPropType = propTypes.exports.oneOfType([propTypes.exports.number, propTypes.exports.string]);
	const propTypes$1k = {
	  tag: tagPropType,
	  noGutters: deprecated(propTypes.exports.bool, "Please use Bootstrap 5 gutter utility classes. https://getbootstrap.com/docs/5.0/layout/gutters/"),
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  xs: rowColsPropType,
	  sm: rowColsPropType,
	  md: rowColsPropType,
	  lg: rowColsPropType,
	  xl: rowColsPropType,
	  xxl: rowColsPropType
	};
	const defaultProps$1i = {
	  tag: 'div',
	  widths: rowColWidths
	};

	const Row = props => {
	  const {
	    className,
	    cssModule,
	    noGutters,
	    tag: Tag,
	    widths
	  } = props,
	        attributes = _objectWithoutProperties(props, _excluded$1e);

	  const colClasses = [];
	  widths.forEach((colWidth, i) => {
	    let colSize = props[colWidth];
	    delete attributes[colWidth];

	    if (!colSize) {
	      return;
	    }

	    const isXs = !i;
	    colClasses.push(isXs ? `row-cols-${colSize}` : `row-cols-${colWidth}-${colSize}`);
	  });
	  const classes = mapToCssModules(classNames(className, noGutters ? 'gx-0' : null, 'row', colClasses), cssModule);
	  return /*#__PURE__*/React.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	Row.propTypes = propTypes$1k;
	Row.defaultProps = defaultProps$1i;
	var Row$1 = Row;

	const _excluded$1d = ["className", "cssModule", "widths", "tag"];
	const colWidths$1 = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
	const stringOrNumberProp$1 = propTypes.exports.oneOfType([propTypes.exports.number, propTypes.exports.string]);
	const columnProps$1 = propTypes.exports.oneOfType([propTypes.exports.bool, propTypes.exports.number, propTypes.exports.string, propTypes.exports.shape({
	  size: propTypes.exports.oneOfType([propTypes.exports.bool, propTypes.exports.number, propTypes.exports.string]),
	  order: stringOrNumberProp$1,
	  offset: stringOrNumberProp$1
	})]);
	const propTypes$1j = {
	  tag: tagPropType,
	  xs: columnProps$1,
	  sm: columnProps$1,
	  md: columnProps$1,
	  lg: columnProps$1,
	  xl: columnProps$1,
	  xxl: columnProps$1,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  widths: propTypes.exports.array
	};
	const defaultProps$1h = {
	  tag: 'div',
	  widths: colWidths$1
	};

	const getColumnSizeClass$1 = (isXs, colWidth, colSize) => {
	  if (colSize === true || colSize === '') {
	    return isXs ? 'col' : `col-${colWidth}`;
	  } else if (colSize === 'auto') {
	    return isXs ? 'col-auto' : `col-${colWidth}-auto`;
	  }

	  return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`;
	};

	const getColumnClasses = (attributes, cssModule, widths = colWidths$1) => {
	  const colClasses = [];
	  widths.forEach((colWidth, i) => {
	    let columnProp = attributes[colWidth];
	    delete attributes[colWidth];

	    if (!columnProp && columnProp !== '') {
	      return;
	    }

	    const isXs = !i;

	    if (isObject(columnProp)) {
	      const colSizeInterfix = isXs ? '-' : `-${colWidth}-`;
	      const colClass = getColumnSizeClass$1(isXs, colWidth, columnProp.size);
	      colClasses.push(mapToCssModules(classNames({
	        [colClass]: columnProp.size || columnProp.size === '',
	        [`order${colSizeInterfix}${columnProp.order}`]: columnProp.order || columnProp.order === 0,
	        [`offset${colSizeInterfix}${columnProp.offset}`]: columnProp.offset || columnProp.offset === 0
	      }), cssModule));
	    } else {
	      const colClass = getColumnSizeClass$1(isXs, colWidth, columnProp);
	      colClasses.push(colClass);
	    }
	  });
	  return {
	    colClasses,
	    attributes
	  };
	};

	const Col = props => {
	  const {
	    className,
	    cssModule,
	    widths,
	    tag: Tag
	  } = props,
	        attributes = _objectWithoutProperties(props, _excluded$1d);

	  let {
	    attributes: modifiedAttributes,
	    colClasses
	  } = getColumnClasses(attributes, cssModule, widths);

	  if (!colClasses.length) {
	    colClasses.push('col');
	  }

	  const classes = mapToCssModules(classNames(className, colClasses), cssModule);
	  return /*#__PURE__*/React.createElement(Tag, _extends({}, modifiedAttributes, {
	    className: classes
	  }));
	};

	Col.propTypes = propTypes$1j;
	Col.defaultProps = defaultProps$1h;
	var Col$1 = Col;
	({
	  light: propTypes.exports.bool,
	  dark: propTypes.exports.bool,
	  full: propTypes.exports.bool,
	  fixed: propTypes.exports.string,
	  sticky: propTypes.exports.string,
	  color: propTypes.exports.string,
	  role: propTypes.exports.string,
	  tag: tagPropType,
	  container: propTypes.exports.oneOfType([propTypes.exports.bool, propTypes.exports.string]),
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  expand: propTypes.exports.oneOfType([propTypes.exports.bool, propTypes.exports.string]),
	  children: propTypes.exports.node
	});
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});
	({
	  tag: tagPropType,
	  type: propTypes.exports.string,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  children: propTypes.exports.node
	});
	({
	  tabs: propTypes.exports.bool,
	  pills: propTypes.exports.bool,
	  vertical: propTypes.exports.oneOfType([propTypes.exports.bool, propTypes.exports.string]),
	  horizontal: propTypes.exports.string,
	  justified: propTypes.exports.bool,
	  fill: propTypes.exports.bool,
	  navbar: propTypes.exports.bool,
	  card: propTypes.exports.bool,
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});
	({
	  tag: tagPropType,
	  active: propTypes.exports.bool,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});

	const _excluded$16 = ["className", "cssModule", "active", "tag", "innerRef"];
	const propTypes$1c = {
	  tag: tagPropType,
	  innerRef: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.func, propTypes.exports.string]),
	  disabled: propTypes.exports.bool,
	  active: propTypes.exports.bool,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  onClick: propTypes.exports.func,
	  href: propTypes.exports.any
	};
	const defaultProps$1a = {
	  tag: 'a'
	};

	class NavLink extends React.Component {
	  constructor(props) {
	    super(props);
	    this.onClick = this.onClick.bind(this);
	  }

	  onClick(e) {
	    if (this.props.disabled) {
	      e.preventDefault();
	      return;
	    }

	    if (this.props.href === '#') {
	      e.preventDefault();
	    }

	    if (this.props.onClick) {
	      this.props.onClick(e);
	    }
	  }

	  render() {
	    let _this$props = this.props,
	        {
	      className,
	      cssModule,
	      active,
	      tag: Tag,
	      innerRef
	    } = _this$props,
	        attributes = _objectWithoutProperties(_this$props, _excluded$16);

	    const classes = mapToCssModules(classNames(className, 'nav-link', {
	      disabled: attributes.disabled,
	      active: active
	    }), cssModule);
	    return /*#__PURE__*/React.createElement(Tag, _extends({}, attributes, {
	      ref: innerRef,
	      onClick: this.onClick,
	      className: classes
	    }));
	  }

	}

	NavLink.propTypes = propTypes$1c;
	NavLink.defaultProps = defaultProps$1a;
	({
	  tag: tagPropType,
	  listTag: tagPropType,
	  className: propTypes.exports.string,
	  listClassName: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  children: propTypes.exports.node,
	  'aria-label': propTypes.exports.string
	});
	({
	  tag: tagPropType,
	  active: propTypes.exports.bool,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});

	const _excluded$13 = ["className", "cssModule", "variant", "innerRef"];
	const propTypes$19 = {
	  active: propTypes.exports.bool,
	  'aria-label': propTypes.exports.string,
	  onClick: propTypes.exports.func,
	  variant: propTypes.exports.oneOf(['white'])
	};
	const defaultProps$17 = {
	  'aria-label': 'close'
	};

	const CloseButton = props => {
	  const {
	    className,
	    cssModule,
	    variant,
	    innerRef
	  } = props,
	        attributes = _objectWithoutProperties(props, _excluded$13);

	  const classes = mapToCssModules(classNames(className, 'btn-close', variant && `btn-close-${variant}`));
	  return /*#__PURE__*/React.createElement("button", _extends({
	    ref: innerRef,
	    type: "button",
	    className: classes
	  }, attributes));
	};

	CloseButton.propTypes = propTypes$19;
	CloseButton.defaultProps = defaultProps$17;
	var CloseButton$1 = CloseButton;

	const _excluded$12 = ["active", "aria-label", "block", "className", "close", "cssModule", "color", "outline", "size", "tag", "innerRef"];
	const propTypes$18 = {
	  active: propTypes.exports.bool,
	  'aria-label': propTypes.exports.string,
	  block: propTypes.exports.bool,
	  color: propTypes.exports.string,
	  disabled: propTypes.exports.bool,
	  outline: propTypes.exports.bool,
	  tag: tagPropType,
	  innerRef: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.func, propTypes.exports.string]),
	  onClick: propTypes.exports.func,
	  size: propTypes.exports.string,
	  children: propTypes.exports.node,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  close: propTypes.exports.bool
	};
	const defaultProps$16 = {
	  color: 'secondary',
	  tag: 'button'
	};

	function Button(props) {
	  const onClick = react.exports.useCallback(e => {
	    if (props.disabled) {
	      e.preventDefault();
	      return;
	    }

	    if (props.onClick) {
	      return props.onClick(e);
	    }
	  }, [props.onClick, props.disabled]);

	  let {
	    active,
	    'aria-label': ariaLabel,
	    block,
	    className,
	    close,
	    cssModule,
	    color,
	    outline,
	    size,
	    tag: Tag,
	    innerRef
	  } = props,
	      attributes = _objectWithoutProperties(props, _excluded$12);

	  if (close) {
	    return /*#__PURE__*/React.createElement(CloseButton$1, attributes);
	  }

	  const btnOutlineColor = `btn${outline ? '-outline' : ''}-${color}`;
	  const classes = mapToCssModules(classNames(className, 'btn', btnOutlineColor, size ? `btn-${size}` : false, block ? 'd-block w-100' : false, {
	    active,
	    disabled: props.disabled
	  }), cssModule);

	  if (attributes.href && Tag === 'button') {
	    Tag = 'a';
	  }

	  return /*#__PURE__*/React.createElement(Tag, _extends({
	    type: Tag === 'button' && attributes.onClick ? 'button' : undefined
	  }, attributes, {
	    className: classes,
	    ref: innerRef,
	    onClick: onClick,
	    "aria-label": ariaLabel
	  }));
	}

	Button.propTypes = propTypes$18;
	Button.defaultProps = defaultProps$16;

	const _excluded$11 = ["className"];
	const propTypes$17 = {
	  onClick: propTypes.exports.func,
	  onBlur: propTypes.exports.func,
	  onFocus: propTypes.exports.func,
	  defaultValue: propTypes.exports.bool
	};
	const defaultProps$15 = {
	  defaultValue: false
	};

	class ButtonToggle extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      toggled: props.defaultValue,
	      focus: false
	    };
	    this.onBlur = this.onBlur.bind(this);
	    this.onFocus = this.onFocus.bind(this);
	    this.onClick = this.onClick.bind(this);
	  }

	  onBlur(e) {
	    if (this.props.onBlur) {
	      this.props.onBlur(e);
	    }

	    this.setState({
	      focus: false
	    });
	  }

	  onFocus(e) {
	    if (this.props.onFocus) {
	      this.props.onFocus(e);
	    }

	    this.setState({
	      focus: true
	    });
	  }

	  onClick(e) {
	    if (this.props.onClick) {
	      this.props.onClick(e);
	    }

	    this.setState(({
	      toggled
	    }) => ({
	      toggled: !toggled
	    }));
	  }

	  render() {
	    const _this$props = this.props,
	          {
	      className
	    } = _this$props,
	          attributes = _objectWithoutProperties(_this$props, _excluded$11);

	    const classes = mapToCssModules(classNames(className, {
	      focus: this.state.focus
	    }), this.props.cssModule);
	    return /*#__PURE__*/React.createElement(Button, _extends({
	      active: this.state.toggled,
	      onBlur: this.onBlur,
	      onFocus: this.onFocus,
	      onClick: this.onClick,
	      className: classes
	    }, attributes));
	  }

	}

	ButtonToggle.propTypes = propTypes$17;
	ButtonToggle.defaultProps = defaultProps$15;

	/**
	 * DropdownContext
	 * {
	 *  toggle: PropTypes.func.isRequired,
	 *  isOpen: PropTypes.bool.isRequired,
	 *  direction: PropTypes.oneOf(['up', 'down', 'start', 'end']).isRequired,
	 *  inNavbar: PropTypes.bool.isRequired,
	 *  disabled: PropTypes.bool
	 * }
	 */

	const DropdownContext = React.createContext({});

	const _excluded$10 = ["className", "cssModule", "direction", "isOpen", "group", "size", "nav", "setActiveFromChild", "active", "tag", "menuRole"];
	const propTypes$16 = {
	  a11y: propTypes.exports.bool,
	  disabled: propTypes.exports.bool,
	  direction: propTypes.exports.oneOf(['up', 'down', 'start', 'end', 'left', 'right']),
	  group: propTypes.exports.bool,
	  isOpen: propTypes.exports.bool,
	  nav: propTypes.exports.bool,
	  active: propTypes.exports.bool,
	  size: propTypes.exports.string,
	  tag: tagPropType,
	  toggle: propTypes.exports.func,
	  children: propTypes.exports.node,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  inNavbar: propTypes.exports.bool,
	  setActiveFromChild: propTypes.exports.bool,
	  menuRole: propTypes.exports.oneOf(['listbox', 'menu'])
	};
	const defaultProps$14 = {
	  a11y: true,
	  isOpen: false,
	  direction: 'down',
	  nav: false,
	  active: false,
	  inNavbar: false,
	  setActiveFromChild: false
	};
	const preventDefaultKeys = [keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down, keyCodes.end, keyCodes.home];

	class Dropdown extends React.Component {
	  constructor(props) {
	    super(props);
	    this.addEvents = this.addEvents.bind(this);
	    this.handleDocumentClick = this.handleDocumentClick.bind(this);
	    this.handleKeyDown = this.handleKeyDown.bind(this);
	    this.removeEvents = this.removeEvents.bind(this);
	    this.toggle = this.toggle.bind(this);
	    this.handleMenuRef = this.handleMenuRef.bind(this);
	    this.containerRef = React.createRef();
	    this.menuRef = React.createRef();
	  }

	  handleMenuRef(menuRef) {
	    this.menuRef.current = menuRef;
	  }

	  getContextValue() {
	    return {
	      toggle: this.toggle,
	      isOpen: this.props.isOpen,
	      direction: this.props.direction === 'down' && this.props.dropup ? 'up' : this.props.direction,
	      inNavbar: this.props.inNavbar,
	      disabled: this.props.disabled,
	      // Callback that should be called by DropdownMenu to provide a ref to
	      // a HTML tag that's used for the DropdownMenu
	      onMenuRef: this.handleMenuRef,
	      menuRole: this.props.menuRole
	    };
	  }

	  componentDidMount() {
	    this.handleProps();
	  }

	  componentDidUpdate(prevProps) {
	    if (this.props.isOpen !== prevProps.isOpen) {
	      this.handleProps();
	    }
	  }

	  componentWillUnmount() {
	    this.removeEvents();
	  }

	  getContainer() {
	    return this.containerRef.current;
	  }

	  getMenu() {
	    return this.menuRef.current;
	  }

	  getMenuCtrl() {
	    if (this._$menuCtrl) return this._$menuCtrl;
	    this._$menuCtrl = this.getContainer().querySelector('[aria-expanded]');
	    return this._$menuCtrl;
	  }

	  getItemType() {
	    if (this.context.menuRole === 'listbox') {
	      return 'option';
	    }

	    return 'menuitem';
	  }

	  getMenuItems() {
	    // In a real menu with a child DropdownMenu, `this.getMenu()` should never
	    // be null, but it is sometimes null in tests. To mitigate that, we just
	    // use `this.getContainer()` as the fallback `menuContainer`.
	    const menuContainer = this.getMenu() || this.getContainer();
	    return [].slice.call(menuContainer.querySelectorAll(`[role="${this.getItemType()}"]`));
	  }

	  addEvents() {
	    ['click', 'touchstart', 'keyup'].forEach(event => document.addEventListener(event, this.handleDocumentClick, true));
	  }

	  removeEvents() {
	    ['click', 'touchstart', 'keyup'].forEach(event => document.removeEventListener(event, this.handleDocumentClick, true));
	  }

	  handleDocumentClick(e) {
	    if (e && (e.which === 3 || e.type === 'keyup' && e.which !== keyCodes.tab)) return;
	    const container = this.getContainer();
	    const menu = this.getMenu();
	    const clickIsInContainer = container.contains(e.target) && container !== e.target;
	    const clickIsInInput = container.classList.contains('input-group') && container.classList.contains('dropdown') && e.target.tagName === 'INPUT';
	    const clickIsInMenu = menu && menu.contains(e.target) && menu !== e.target;

	    if ((clickIsInContainer && !clickIsInInput || clickIsInMenu) && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
	      return;
	    }

	    this.toggle(e);
	  }

	  handleKeyDown(e) {
	    const isTargetMenuItem = e.target.getAttribute('role') === 'menuitem' || e.target.getAttribute('role') === 'option';
	    const isTargetMenuCtrl = this.getMenuCtrl() === e.target;
	    const isTab = keyCodes.tab === e.which;

	    if (/input|textarea/i.test(e.target.tagName) || isTab && !this.props.a11y || isTab && !(isTargetMenuItem || isTargetMenuCtrl)) {
	      return;
	    }

	    if (preventDefaultKeys.indexOf(e.which) !== -1 || e.which >= 48 && e.which <= 90) {
	      e.preventDefault();
	    }

	    if (this.props.disabled) return;

	    if (isTargetMenuCtrl) {
	      if ([keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down].indexOf(e.which) > -1) {
	        // Open the menu (if not open) and focus the first menu item
	        if (!this.props.isOpen) {
	          this.toggle(e);
	        }

	        setTimeout(() => this.getMenuItems()[0].focus());
	      } else if (this.props.isOpen && isTab) {
	        // Focus the first menu item if tabbing from an open menu. We need this
	        // for cases where the DropdownMenu sets a custom container, which may
	        // not be the natural next item to tab to from the DropdownToggle.
	        e.preventDefault();
	        this.getMenuItems()[0].focus();
	      } else if (this.props.isOpen && e.which === keyCodes.esc) {
	        this.toggle(e);
	      }
	    }

	    if (this.props.isOpen && isTargetMenuItem) {
	      if ([keyCodes.tab, keyCodes.esc].indexOf(e.which) > -1) {
	        this.toggle(e);
	        this.getMenuCtrl().focus();
	      } else if ([keyCodes.space, keyCodes.enter].indexOf(e.which) > -1) {
	        e.target.click();
	        this.getMenuCtrl().focus();
	      } else if ([keyCodes.down, keyCodes.up].indexOf(e.which) > -1 || [keyCodes.n, keyCodes.p].indexOf(e.which) > -1 && e.ctrlKey) {
	        const $menuitems = this.getMenuItems();
	        let index = $menuitems.indexOf(e.target);

	        if (keyCodes.up === e.which || keyCodes.p === e.which && e.ctrlKey) {
	          index = index !== 0 ? index - 1 : $menuitems.length - 1;
	        } else if (keyCodes.down === e.which || keyCodes.n === e.which && e.ctrlKey) {
	          index = index === $menuitems.length - 1 ? 0 : index + 1;
	        }

	        $menuitems[index].focus();
	      } else if (keyCodes.end === e.which) {
	        const $menuitems = this.getMenuItems();
	        $menuitems[$menuitems.length - 1].focus();
	      } else if (keyCodes.home === e.which) {
	        const $menuitems = this.getMenuItems();
	        $menuitems[0].focus();
	      } else if (e.which >= 48 && e.which <= 90) {
	        const $menuitems = this.getMenuItems();
	        const charPressed = String.fromCharCode(e.which).toLowerCase();

	        for (let i = 0; i < $menuitems.length; i += 1) {
	          const firstLetter = $menuitems[i].textContent && $menuitems[i].textContent[0].toLowerCase();

	          if (firstLetter === charPressed) {
	            $menuitems[i].focus();
	            break;
	          }
	        }
	      }
	    }
	  }

	  handleProps() {
	    if (this.props.isOpen) {
	      this.addEvents();
	    } else {
	      this.removeEvents();
	    }
	  }

	  toggle(e) {
	    if (this.props.disabled) {
	      return e && e.preventDefault();
	    }

	    return this.props.toggle(e);
	  }

	  render() {
	    const _omit = omit(this.props, ['toggle', 'disabled', 'inNavbar', 'a11y']),
	          {
	      className,
	      cssModule,
	      direction,
	      isOpen,
	      group,
	      size,
	      nav,
	      setActiveFromChild,
	      active,
	      tag,
	      menuRole
	    } = _omit,
	          attrs = _objectWithoutProperties(_omit, _excluded$10);

	    const Tag = tag || (nav ? 'li' : 'div');
	    let subItemIsActive = false;

	    if (setActiveFromChild) {
	      React.Children.map(this.props.children[1].props.children, dropdownItem => {
	        if (dropdownItem && dropdownItem.props.active) subItemIsActive = true;
	      });
	    }

	    const classes = mapToCssModules(classNames(className, nav && active ? 'active' : false, setActiveFromChild && subItemIsActive ? 'active' : false, {
	      'btn-group': group,
	      [`btn-group-${size}`]: !!size,
	      dropdown: !group,
	      dropup: direction === 'up',
	      dropstart: direction === 'start' || direction === 'left',
	      dropend: direction === 'end' || direction === 'right',
	      show: isOpen,
	      'nav-item': nav
	    }), cssModule);
	    return /*#__PURE__*/React.createElement(DropdownContext.Provider, {
	      value: this.getContextValue()
	    }, /*#__PURE__*/React.createElement(Manager, null, /*#__PURE__*/React.createElement(Tag, _extends({}, attrs, {
	      [typeof Tag === 'string' ? 'ref' : 'innerRef']: this.containerRef,
	      onKeyDown: this.handleKeyDown,
	      className: classes
	    }))));
	  }

	}

	Dropdown.propTypes = propTypes$16;
	Dropdown.defaultProps = defaultProps$14;
	var Dropdown$1 = Dropdown;

	const propTypes$15 = {
	  children: propTypes.exports.node
	};

	const ButtonDropdown = props => {
	  return /*#__PURE__*/React.createElement(Dropdown$1, _extends({
	    group: true
	  }, props));
	};

	ButtonDropdown.propTypes = propTypes$15;
	var ButtonDropdown$1 = ButtonDropdown;
	({
	  tag: tagPropType,
	  'aria-label': propTypes.exports.string,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  role: propTypes.exports.string,
	  size: propTypes.exports.string,
	  vertical: propTypes.exports.bool
	});
	({
	  tag: tagPropType,
	  'aria-label': propTypes.exports.string,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  role: propTypes.exports.string
	});

	const _excluded$Z = ["className", "cssModule", "divider", "tag", "header", "active", "text"];
	const propTypes$12 = {
	  children: propTypes.exports.node,
	  active: propTypes.exports.bool,
	  disabled: propTypes.exports.bool,
	  divider: propTypes.exports.bool,
	  tag: tagPropType,
	  header: propTypes.exports.bool,
	  onClick: propTypes.exports.func,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  toggle: propTypes.exports.bool,
	  text: propTypes.exports.bool
	};
	const defaultProps$11 = {
	  tag: 'button',
	  toggle: true
	};

	class DropdownItem extends React.Component {
	  constructor(props) {
	    super(props);
	    this.onClick = this.onClick.bind(this);
	    this.getTabIndex = this.getTabIndex.bind(this);
	  }

	  getRole() {
	    if (this.context.menuRole === 'listbox') {
	      return 'option';
	    }

	    return 'menuitem';
	  }

	  onClick(e) {
	    const {
	      disabled,
	      header,
	      divider,
	      text
	    } = this.props;

	    if (disabled || header || divider || text) {
	      e.preventDefault();
	      return;
	    }

	    if (this.props.onClick) {
	      this.props.onClick(e);
	    }

	    if (this.props.toggle) {
	      this.context.toggle(e);
	    }
	  }

	  getTabIndex() {
	    const {
	      disabled,
	      header,
	      divider,
	      text
	    } = this.props;

	    if (disabled || header || divider || text) {
	      return '-1';
	    }

	    return '0';
	  }

	  render() {
	    const tabIndex = this.getTabIndex();
	    const role = tabIndex > -1 ? this.getRole() : undefined;

	    let _omit = omit(this.props, ['toggle']),
	        {
	      className,
	      cssModule,
	      divider,
	      tag: Tag,
	      header,
	      active,
	      text
	    } = _omit,
	        props = _objectWithoutProperties(_omit, _excluded$Z);

	    const classes = mapToCssModules(classNames(className, {
	      disabled: props.disabled,
	      'dropdown-item': !divider && !header && !text,
	      active: active,
	      'dropdown-header': header,
	      'dropdown-divider': divider,
	      'dropdown-item-text': text
	    }), cssModule);

	    if (Tag === 'button') {
	      if (header) {
	        Tag = 'h6';
	      } else if (divider) {
	        Tag = 'div';
	      } else if (props.href) {
	        Tag = 'a';
	      } else if (text) {
	        Tag = 'span';
	      }
	    }

	    return /*#__PURE__*/React.createElement(Tag, _extends({
	      type: Tag === 'button' && (props.onClick || this.props.toggle) ? 'button' : undefined
	    }, props, {
	      tabIndex: tabIndex,
	      role: role,
	      className: classes,
	      onClick: this.onClick
	    }));
	  }

	}

	DropdownItem.propTypes = propTypes$12;
	DropdownItem.defaultProps = defaultProps$11;
	DropdownItem.contextType = DropdownContext;

	const _excluded$Y = ["className", "cssModule", "dark", "end", "right", "tag", "flip", "modifiers", "persist", "strategy", "container", "updateOnSelect"];
	const propTypes$11 = {
	  tag: tagPropType,
	  children: propTypes.exports.node.isRequired,
	  dark: propTypes.exports.bool,
	  end: propTypes.exports.bool,
	  flip: propTypes.exports.bool,
	  modifiers: propTypes.exports.array,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  persist: propTypes.exports.bool,
	  strategy: propTypes.exports.string,
	  container: targetPropType,

	  /** Update popper layout when a click event comes up. This leverages event bubbling. */
	  updateOnSelect: propTypes.exports.bool,
	  right: deprecated(propTypes.exports.bool, 'Please use "end" instead.')
	};
	const defaultProps$10 = {
	  tag: 'div',
	  flip: true,
	  modifiers: []
	};
	const directionPositionMap = {
	  up: 'top',
	  left: 'left',
	  right: 'right',
	  start: 'left',
	  end: 'right',
	  down: 'bottom'
	};

	class DropdownMenu extends React.Component {
	  getRole() {
	    if (this.context.menuRole === 'listbox') {
	      return 'listbox';
	    }

	    return 'menu';
	  }

	  render() {
	    const _this$props = this.props,
	          {
	      className,
	      cssModule,
	      dark,
	      end,
	      right,
	      tag,
	      flip,
	      modifiers,
	      persist,
	      strategy,
	      container,
	      updateOnSelect
	    } = _this$props,
	          attrs = _objectWithoutProperties(_this$props, _excluded$Y);

	    const classes = mapToCssModules(classNames(className, 'dropdown-menu', {
	      'dropdown-menu-dark': dark,
	      'dropdown-menu-end': end || right,
	      show: this.context.isOpen
	    }), cssModule);
	    const Tag = tag;

	    if (persist || this.context.isOpen && !this.context.inNavbar) {
	      const position1 = directionPositionMap[this.context.direction] || 'bottom';
	      const position2 = end || right ? 'end' : 'start';
	      const poperPlacement = `${position1}-${position2}`;
	      const poperModifiers = [...modifiers, {
	        name: 'flip',
	        enabled: !!flip
	      }];
	      const popper = /*#__PURE__*/React.createElement(Popper, {
	        placement: poperPlacement,
	        modifiers: poperModifiers,
	        strategy: strategy
	      }, ({
	        ref,
	        style,
	        placement,
	        update
	      }) => {
	        let combinedStyle = _objectSpread2(_objectSpread2({}, this.props.style), style);

	        const handleRef = tagRef => {
	          // Send the ref to `react-popper`
	          ref(tagRef); // Send the ref to the parent Dropdown so that clicks outside
	          // it will cause it to close

	          const {
	            onMenuRef
	          } = this.context;
	          if (onMenuRef) onMenuRef(tagRef);
	        };

	        return /*#__PURE__*/React.createElement(Tag, _extends({
	          tabIndex: "-1",
	          role: this.getRole(),
	          ref: handleRef
	        }, attrs, {
	          style: combinedStyle,
	          "aria-hidden": !this.context.isOpen,
	          className: classes,
	          "data-popper-placement": placement,
	          onClick: () => updateOnSelect && update()
	        }));
	      });

	      if (container) {
	        return ReactDOM.createPortal(popper, getTarget(container));
	      } else {
	        return popper;
	      }
	    }

	    return /*#__PURE__*/React.createElement(Tag, _extends({
	      tabIndex: "-1",
	      role: this.getRole()
	    }, attrs, {
	      "aria-hidden": !this.context.isOpen,
	      className: classes,
	      "data-popper-placement": attrs.placement
	    }));
	  }

	}
	DropdownMenu.propTypes = propTypes$11;
	DropdownMenu.defaultProps = defaultProps$10;
	DropdownMenu.contextType = DropdownContext;

	const _excluded$X = ["className", "color", "cssModule", "caret", "split", "nav", "tag", "innerRef"];
	const propTypes$10 = {
	  caret: propTypes.exports.bool,
	  color: propTypes.exports.string,
	  children: propTypes.exports.node,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  disabled: propTypes.exports.bool,
	  onClick: propTypes.exports.func,
	  'aria-haspopup': propTypes.exports.bool,
	  split: propTypes.exports.bool,
	  tag: tagPropType,
	  nav: propTypes.exports.bool
	};
	const defaultProps$$ = {
	  color: 'secondary',
	  'aria-haspopup': true
	};

	class DropdownToggle extends React.Component {
	  constructor(props) {
	    super(props);
	    this.onClick = this.onClick.bind(this);
	  }

	  onClick(e) {
	    if (this.props.disabled || this.context.disabled) {
	      e.preventDefault();
	      return;
	    }

	    if (this.props.nav && !this.props.tag) {
	      e.preventDefault();
	    }

	    if (this.props.onClick) {
	      this.props.onClick(e);
	    }

	    this.context.toggle(e);
	  }

	  getRole() {
	    return this.context.menuRole || this.props['aria-haspopup'];
	  }

	  render() {
	    const _this$props = this.props,
	          {
	      className,
	      color,
	      cssModule,
	      caret,
	      split,
	      nav,
	      tag,
	      innerRef
	    } = _this$props,
	          props = _objectWithoutProperties(_this$props, _excluded$X);

	    const ariaLabel = props['aria-label'] || 'Toggle Dropdown';
	    const classes = mapToCssModules(classNames(className, {
	      'dropdown-toggle': caret || split,
	      'dropdown-toggle-split': split,
	      'nav-link': nav
	    }), cssModule);
	    const children = typeof props.children !== 'undefined' ? props.children : /*#__PURE__*/React.createElement("span", {
	      className: "visually-hidden"
	    }, ariaLabel);
	    let Tag;

	    if (nav && !tag) {
	      Tag = 'a';
	      props.href = '#';
	    } else if (!tag) {
	      Tag = Button;
	      props.color = color;
	      props.cssModule = cssModule;
	    } else {
	      Tag = tag;
	    }

	    if (this.context.inNavbar) {
	      return /*#__PURE__*/React.createElement(Tag, _extends({}, props, {
	        className: classes,
	        onClick: this.onClick,
	        "aria-expanded": this.context.isOpen,
	        "aria-haspopup": this.getRole(),
	        children: children
	      }));
	    }

	    return /*#__PURE__*/React.createElement(Reference, {
	      innerRef: innerRef
	    }, ({
	      ref
	    }) => /*#__PURE__*/React.createElement(Tag, _extends({}, props, {
	      [typeof Tag === 'string' ? 'ref' : 'innerRef']: ref,
	      className: classes,
	      onClick: this.onClick,
	      "aria-expanded": this.context.isOpen,
	      "aria-haspopup": this.getRole(),
	      children: children
	    })));
	  }

	}

	DropdownToggle.propTypes = propTypes$10;
	DropdownToggle.defaultProps = defaultProps$$;
	DropdownToggle.contextType = DropdownContext;

	const _excluded$W = ["tag", "baseClass", "baseClassActive", "className", "cssModule", "children", "innerRef"];

	const propTypes$$ = _objectSpread2(_objectSpread2({}, Transition.propTypes), {}, {
	  children: propTypes.exports.oneOfType([propTypes.exports.arrayOf(propTypes.exports.node), propTypes.exports.node]),
	  tag: tagPropType,
	  baseClass: propTypes.exports.string,
	  baseClassActive: propTypes.exports.string,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  innerRef: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.string, propTypes.exports.func])
	});

	const defaultProps$_ = _objectSpread2(_objectSpread2({}, Transition.defaultProps), {}, {
	  tag: 'div',
	  baseClass: 'fade',
	  baseClassActive: 'show',
	  timeout: TransitionTimeouts.Fade,
	  appear: true,
	  enter: true,
	  exit: true,
	  in: true
	});

	function Fade(props) {
	  const {
	    tag: Tag,
	    baseClass,
	    baseClassActive,
	    className,
	    cssModule,
	    children,
	    innerRef
	  } = props,
	        otherProps = _objectWithoutProperties(props, _excluded$W);

	  const transitionProps = pick(otherProps, TransitionPropTypeKeys);
	  const childProps = omit(otherProps, TransitionPropTypeKeys);
	  return /*#__PURE__*/React.createElement(Transition, transitionProps, status => {
	    const isActive = status === 'entered';
	    const classes = mapToCssModules(classNames(className, baseClass, isActive && baseClassActive), cssModule);
	    return /*#__PURE__*/React.createElement(Tag, _extends({
	      className: classes
	    }, childProps, {
	      ref: innerRef
	    }), children);
	  });
	}

	Fade.propTypes = propTypes$$;
	Fade.defaultProps = defaultProps$_;

	/**
	 * AccordionContext
	 * {
	 *  toggle: PropTypes.func.isRequired,
	 *  openId: PropTypes.string,    
	 * }
	 */

	React.createContext({});
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  innerRef: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.string, propTypes.exports.func]),
	  children: propTypes.exports.node,
	  flush: propTypes.exports.bool,
	  open: propTypes.exports.oneOfType([propTypes.exports.array, propTypes.exports.string]).isRequired,
	  toggle: propTypes.exports.func.isRequired
	});
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  innerRef: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.string, propTypes.exports.func]),
	  children: propTypes.exports.node,
	  defaultOpen: propTypes.exports.oneOfType([propTypes.exports.array, propTypes.exports.string]),
	  stayOpen: propTypes.exports.bool
	});
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  innerRef: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.string, propTypes.exports.func]),
	  children: propTypes.exports.node,
	  targetId: propTypes.exports.string.isRequired
	});
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  innerRef: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.string, propTypes.exports.func]),
	  children: propTypes.exports.node
	});

	const _excluded$R = ["tag", "horizontal", "isOpen", "className", "navbar", "cssModule", "children", "innerRef"];

	const propTypes$W = _objectSpread2(_objectSpread2({}, Transition.propTypes), {}, {
	  horizontal: propTypes.exports.bool,
	  isOpen: propTypes.exports.bool,
	  children: propTypes.exports.oneOfType([propTypes.exports.arrayOf(propTypes.exports.node), propTypes.exports.node]),
	  tag: tagPropType,
	  className: propTypes.exports.node,
	  navbar: propTypes.exports.bool,
	  cssModule: propTypes.exports.object,
	  innerRef: propTypes.exports.oneOfType([propTypes.exports.func, propTypes.exports.string, propTypes.exports.object])
	});

	const defaultProps$V = _objectSpread2(_objectSpread2({}, Transition.defaultProps), {}, {
	  horizontal: false,
	  isOpen: false,
	  appear: false,
	  enter: true,
	  exit: true,
	  tag: 'div',
	  timeout: TransitionTimeouts.Collapse
	});

	const transitionStatusToClassHash = {
	  [TransitionStatuses.ENTERING]: 'collapsing',
	  [TransitionStatuses.ENTERED]: 'collapse show',
	  [TransitionStatuses.EXITING]: 'collapsing',
	  [TransitionStatuses.EXITED]: 'collapse'
	};

	function getTransitionClass(status) {
	  return transitionStatusToClassHash[status] || 'collapse';
	}

	class Collapse extends react.exports.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      dimension: null
	    };
	    ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach(name => {
	      this[name] = this[name].bind(this);
	    });
	  }

	  getDimension(node) {
	    return this.props.horizontal ? node.scrollWidth : node.scrollHeight;
	  }

	  onEntering(node, isAppearing) {
	    this.setState({
	      dimension: this.getDimension(node)
	    });
	    this.props.onEntering(node, isAppearing);
	  }

	  onEntered(node, isAppearing) {
	    this.setState({
	      dimension: null
	    });
	    this.props.onEntered(node, isAppearing);
	  }

	  onExit(node) {
	    this.setState({
	      dimension: this.getDimension(node)
	    });
	    this.props.onExit(node);
	  }

	  onExiting(node) {
	    // getting this variable triggers a reflow
	    this.getDimension(node); // eslint-disable-line no-unused-vars


	    this.setState({
	      dimension: 0
	    });
	    this.props.onExiting(node);
	  }

	  onExited(node) {
	    this.setState({
	      dimension: null
	    });
	    this.props.onExited(node);
	  }

	  render() {
	    const _this$props = this.props,
	          {
	      tag: Tag,
	      horizontal,
	      isOpen,
	      className,
	      navbar,
	      cssModule,
	      children,
	      innerRef
	    } = _this$props,
	          otherProps = _objectWithoutProperties(_this$props, _excluded$R);

	    const {
	      dimension
	    } = this.state;
	    const transitionProps = pick(otherProps, TransitionPropTypeKeys);
	    const childProps = omit(otherProps, TransitionPropTypeKeys);
	    return /*#__PURE__*/React.createElement(Transition, _extends({}, transitionProps, {
	      in: isOpen,
	      onEntering: this.onEntering,
	      onEntered: this.onEntered,
	      onExit: this.onExit,
	      onExiting: this.onExiting,
	      onExited: this.onExited
	    }), status => {
	      let collapseClass = getTransitionClass(status);
	      const classes = mapToCssModules(classNames(className, horizontal && 'collapse-horizontal', collapseClass, navbar && 'navbar-collapse'), cssModule);
	      const style = dimension === null ? null : {
	        [horizontal ? 'width' : 'height']: dimension
	      };
	      return /*#__PURE__*/React.createElement(Tag, _extends({}, childProps, {
	        style: _objectSpread2(_objectSpread2({}, childProps.style), style),
	        className: classes,
	        ref: this.props.innerRef
	      }), children);
	    });
	  }

	}

	Collapse.propTypes = propTypes$W;
	Collapse.defaultProps = defaultProps$V;
	var Collapse$1 = Collapse;
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  innerRef: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.string, propTypes.exports.func]),
	  children: propTypes.exports.node,
	  accordionId: propTypes.exports.string.isRequired
	});
	({
	  color: propTypes.exports.string,
	  pill: propTypes.exports.bool,
	  tag: tagPropType,
	  innerRef: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.func, propTypes.exports.string]),
	  children: propTypes.exports.node,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});
	({
	  tag: tagPropType,
	  inverse: propTypes.exports.bool,
	  color: propTypes.exports.string,
	  body: propTypes.exports.bool,
	  outline: propTypes.exports.bool,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  innerRef: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.string, propTypes.exports.func])
	});
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  innerRef: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.string, propTypes.exports.func])
	});
	({
	  tag: tagPropType,
	  innerRef: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.func, propTypes.exports.string]),
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});
	({
	  tag: tagPropType,
	  top: propTypes.exports.bool,
	  bottom: propTypes.exports.bool,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});

	const _excluded$E = ["in", "children", "cssModule", "slide", "tag", "className"];

	class CarouselItem extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      startAnimation: false
	    };
	    this.onEnter = this.onEnter.bind(this);
	    this.onEntering = this.onEntering.bind(this);
	    this.onExit = this.onExit.bind(this);
	    this.onExiting = this.onExiting.bind(this);
	    this.onExited = this.onExited.bind(this);
	  }

	  onEnter(node, isAppearing) {
	    this.setState({
	      startAnimation: false
	    });
	    this.props.onEnter(node, isAppearing);
	  }

	  onEntering(node, isAppearing) {
	    // getting this variable triggers a reflow
	    const offsetHeight = node.offsetHeight;
	    this.setState({
	      startAnimation: true
	    });
	    this.props.onEntering(node, isAppearing);
	    return offsetHeight;
	  }

	  onExit(node) {
	    this.setState({
	      startAnimation: false
	    });
	    this.props.onExit(node);
	  }

	  onExiting(node) {
	    this.setState({
	      startAnimation: true
	    });
	    node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
	    this.props.onExiting(node);
	  }

	  onExited(node) {
	    node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
	    this.props.onExited(node);
	  }

	  render() {
	    const _this$props = this.props,
	          {
	      in: isIn,
	      children,
	      cssModule,
	      slide,
	      tag: Tag,
	      className
	    } = _this$props,
	          transitionProps = _objectWithoutProperties(_this$props, _excluded$E);

	    return /*#__PURE__*/React.createElement(Transition, _extends({}, transitionProps, {
	      enter: slide,
	      exit: slide,
	      in: isIn,
	      onEnter: this.onEnter,
	      onEntering: this.onEntering,
	      onExit: this.onExit,
	      onExiting: this.onExiting,
	      onExited: this.onExited
	    }), status => {
	      const {
	        direction
	      } = this.context;
	      const isActive = status === TransitionStatuses.ENTERED || status === TransitionStatuses.EXITING;
	      const directionClassName = (status === TransitionStatuses.ENTERING || status === TransitionStatuses.EXITING) && this.state.startAnimation && (direction === 'end' ? 'carousel-item-start' : 'carousel-item-end');
	      const orderClassName = status === TransitionStatuses.ENTERING && (direction === 'end' ? 'carousel-item-next' : 'carousel-item-prev');
	      const itemClasses = mapToCssModules(classNames(className, 'carousel-item', isActive && 'active', directionClassName, orderClassName), cssModule);
	      return /*#__PURE__*/React.createElement(Tag, {
	        className: itemClasses
	      }, children);
	    });
	  }

	}

	CarouselItem.propTypes = _objectSpread2(_objectSpread2({}, Transition.propTypes), {}, {
	  tag: tagPropType,
	  in: propTypes.exports.bool,
	  cssModule: propTypes.exports.object,
	  children: propTypes.exports.node,
	  slide: propTypes.exports.bool,
	  className: propTypes.exports.string
	});
	CarouselItem.defaultProps = _objectSpread2(_objectSpread2({}, Transition.defaultProps), {}, {
	  tag: 'div',
	  timeout: TransitionTimeouts.Carousel,
	  slide: true
	});
	CarouselItem.contextTypes = {
	  direction: propTypes.exports.string
	};
	var CarouselItem$1 = CarouselItem;

	/**
	 * CarouselContext
	 * {
	 *  direction: PropTypes.oneOf(['start', 'end']).isRequired,
	 * }
	 */

	const CarouselContext = React.createContext({});

	const SWIPE_THRESHOLD = 40;

	class Carousel extends React.Component {
	  constructor(props) {
	    super(props);
	    this.handleKeyPress = this.handleKeyPress.bind(this);
	    this.renderItems = this.renderItems.bind(this);
	    this.hoverStart = this.hoverStart.bind(this);
	    this.hoverEnd = this.hoverEnd.bind(this);
	    this.handleTouchStart = this.handleTouchStart.bind(this);
	    this.handleTouchEnd = this.handleTouchEnd.bind(this);
	    this.touchStartX = 0;
	    this.touchStartY = 0;
	    this.state = {
	      activeIndex: this.props.activeIndex,
	      direction: 'end',
	      indicatorClicked: false
	    };
	  }

	  getContextValue() {
	    return {
	      direction: this.state.direction
	    };
	  }

	  componentDidMount() {
	    // Set up the cycle
	    if (this.props.ride === 'carousel') {
	      this.setInterval();
	    } // TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.


	    document.addEventListener('keyup', this.handleKeyPress);
	  }

	  static getDerivedStateFromProps(nextProps, prevState) {
	    let newState = null;
	    let {
	      activeIndex,
	      direction,
	      indicatorClicked
	    } = prevState;

	    if (nextProps.activeIndex !== activeIndex) {
	      // Calculate the direction to turn
	      if (nextProps.activeIndex === activeIndex + 1) {
	        direction = 'end';
	      } else if (nextProps.activeIndex === activeIndex - 1) {
	        direction = 'start';
	      } else if (nextProps.activeIndex < activeIndex) {
	        direction = indicatorClicked ? 'start' : 'end';
	      } else if (nextProps.activeIndex !== activeIndex) {
	        direction = indicatorClicked ? 'end' : 'start';
	      }

	      newState = {
	        activeIndex: nextProps.activeIndex,
	        direction,
	        indicatorClicked: false
	      };
	    }

	    return newState;
	  }

	  componentDidUpdate(prevProps, prevState) {
	    if (prevState.activeIndex === this.state.activeIndex) return;
	    this.setInterval(this.props);
	  }

	  componentWillUnmount() {
	    this.clearInterval();
	    document.removeEventListener('keyup', this.handleKeyPress);
	  }

	  setInterval(props = this.props) {
	    // make sure not to have multiple intervals going...
	    this.clearInterval();

	    if (props.interval) {
	      this.cycleInterval = setInterval(() => {
	        props.next();
	      }, parseInt(props.interval, 10));
	    }
	  }

	  clearInterval() {
	    clearInterval(this.cycleInterval);
	  }

	  hoverStart(...args) {
	    if (this.props.pause === 'hover') {
	      this.clearInterval();
	    }

	    if (this.props.mouseEnter) {
	      this.props.mouseEnter(...args);
	    }
	  }

	  hoverEnd(...args) {
	    if (this.props.pause === 'hover') {
	      this.setInterval();
	    }

	    if (this.props.mouseLeave) {
	      this.props.mouseLeave(...args);
	    }
	  }

	  handleKeyPress(evt) {
	    if (this.props.keyboard) {
	      if (evt.keyCode === 37) {
	        this.props.previous();
	      } else if (evt.keyCode === 39) {
	        this.props.next();
	      }
	    }
	  }

	  handleTouchStart(e) {
	    if (!this.props.enableTouch) {
	      return;
	    }

	    this.touchStartX = e.changedTouches[0].screenX;
	    this.touchStartY = e.changedTouches[0].screenY;
	  }

	  handleTouchEnd(e) {
	    if (!this.props.enableTouch) {
	      return;
	    }

	    const currentX = e.changedTouches[0].screenX;
	    const currentY = e.changedTouches[0].screenY;
	    const diffX = Math.abs(this.touchStartX - currentX);
	    const diffY = Math.abs(this.touchStartY - currentY); // Don't swipe if Y-movement is bigger than X-movement

	    if (diffX < diffY) {
	      return;
	    }

	    if (diffX < SWIPE_THRESHOLD) {
	      return;
	    }

	    if (currentX < this.touchStartX) {
	      this.props.next();
	    } else {
	      this.props.previous();
	    }
	  }

	  renderItems(carouselItems, className) {
	    const {
	      slide
	    } = this.props;
	    return /*#__PURE__*/React.createElement("div", {
	      className: className
	    }, carouselItems.map((item, index) => {
	      const isIn = index === this.state.activeIndex;
	      return React.cloneElement(item, {
	        in: isIn,
	        slide: slide
	      });
	    }));
	  }

	  render() {
	    const {
	      cssModule,
	      slide,
	      className,
	      dark,
	      fade
	    } = this.props;
	    const outerClasses = mapToCssModules(classNames(className, 'carousel', fade, slide && 'slide', dark && 'carousel-dark'), cssModule);
	    const innerClasses = mapToCssModules(classNames('carousel-inner'), cssModule); // filter out booleans, null, or undefined

	    const children = this.props.children.filter(child => child !== null && child !== undefined && typeof child !== 'boolean');
	    const slidesOnly = children.every(child => child.type === CarouselItem$1); // Rendering only slides

	    if (slidesOnly) {
	      return /*#__PURE__*/React.createElement("div", {
	        className: outerClasses,
	        onMouseEnter: this.hoverStart,
	        onMouseLeave: this.hoverEnd
	      }, /*#__PURE__*/React.createElement(CarouselContext.Provider, {
	        value: this.getContextValue()
	      }, this.renderItems(children, innerClasses)));
	    } // Rendering slides and controls


	    if (children[0] instanceof Array) {
	      const _carouselItems = children[0];
	      const _controlLeft = children[1];
	      const _controlRight = children[2];
	      return /*#__PURE__*/React.createElement("div", {
	        className: outerClasses,
	        onMouseEnter: this.hoverStart,
	        onMouseLeave: this.hoverEnd
	      }, /*#__PURE__*/React.createElement(CarouselContext.Provider, {
	        value: this.getContextValue()
	      }, this.renderItems(_carouselItems, innerClasses), _controlLeft, _controlRight));
	    } // Rendering indicators, slides and controls


	    const indicators = children[0];

	    const wrappedOnClick = e => {
	      if (typeof indicators.props.onClickHandler === 'function') {
	        this.setState({
	          indicatorClicked: true
	        }, () => indicators.props.onClickHandler(e));
	      }
	    };

	    const wrappedIndicators = React.cloneElement(indicators, {
	      onClickHandler: wrappedOnClick
	    });
	    const carouselItems = children[1];
	    const controlLeft = children[2];
	    const controlRight = children[3];
	    return /*#__PURE__*/React.createElement("div", {
	      className: outerClasses,
	      onMouseEnter: this.hoverStart,
	      onMouseLeave: this.hoverEnd,
	      onTouchStart: this.handleTouchStart,
	      onTouchEnd: this.handleTouchEnd
	    }, /*#__PURE__*/React.createElement(CarouselContext.Provider, {
	      value: this.getContextValue()
	    }, wrappedIndicators, this.renderItems(carouselItems, innerClasses), controlLeft, controlRight));
	  }

	}

	Carousel.propTypes = {
	  // the current active slide of the carousel
	  activeIndex: propTypes.exports.number,
	  // a function which should advance the carousel to the next slide (via activeIndex)
	  next: propTypes.exports.func.isRequired,
	  // a function which should advance the carousel to the previous slide (via activeIndex)
	  previous: propTypes.exports.func.isRequired,
	  // controls if the left and right arrow keys should control the carousel
	  keyboard: propTypes.exports.bool,

	  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
	   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
	   */
	  pause: propTypes.exports.oneOf(['hover', false]),
	  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
	  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
	  ride: propTypes.exports.oneOf(['carousel']),
	  // the interval at which the carousel automatically cycles (default: 5000)
	  // eslint-disable-next-line react/no-unused-prop-types
	  interval: propTypes.exports.oneOfType([propTypes.exports.number, propTypes.exports.string, propTypes.exports.bool]),
	  children: propTypes.exports.array,
	  // called when the mouse enters the Carousel
	  mouseEnter: propTypes.exports.func,
	  // called when the mouse exits the Carousel
	  mouseLeave: propTypes.exports.func,
	  // controls whether the slide animation on the Carousel works or not
	  slide: propTypes.exports.bool,
	  // make the controls, indicators and captions dark on the Carousel
	  dark: propTypes.exports.bool,
	  cssModule: propTypes.exports.object,
	  className: propTypes.exports.string,
	  enableTouch: propTypes.exports.bool
	};
	Carousel.defaultProps = {
	  interval: 5000,
	  pause: 'hover',
	  keyboard: true,
	  slide: true,
	  enableTouch: true,
	  fade: false
	};
	Carousel.childContextTypes = {
	  direction: propTypes.exports.string
	};
	var Carousel$1 = Carousel;

	const CarouselControl = props => {
	  const {
	    direction,
	    onClickHandler,
	    cssModule,
	    directionText,
	    className
	  } = props;
	  const anchorClasses = mapToCssModules(classNames(className, `carousel-control-${direction}`), cssModule);
	  const iconClasses = mapToCssModules(classNames(`carousel-control-${direction}-icon`), cssModule);
	  const screenReaderClasses = mapToCssModules(classNames('visually-hidden'), cssModule);
	  return (
	    /*#__PURE__*/
	    // We need to disable this linting rule to use an `<a>` instead of
	    // `<button>` because that's what the Bootstrap examples require:
	    // https://getbootstrap.com/docs/4.5/components/carousel/#with-controls
	    // eslint-disable-next-line jsx-a11y/anchor-is-valid
	    React.createElement("a", {
	      className: anchorClasses,
	      style: {
	        cursor: "pointer"
	      },
	      role: "button",
	      tabIndex: "0",
	      onClick: e => {
	        e.preventDefault();
	        onClickHandler();
	      }
	    }, /*#__PURE__*/React.createElement("span", {
	      className: iconClasses,
	      "aria-hidden": "true"
	    }), /*#__PURE__*/React.createElement("span", {
	      className: screenReaderClasses
	    }, directionText || direction))
	  );
	};

	CarouselControl.propTypes = {
	  direction: propTypes.exports.oneOf(['prev', 'next']).isRequired,
	  onClickHandler: propTypes.exports.func.isRequired,
	  cssModule: propTypes.exports.object,
	  directionText: propTypes.exports.string,
	  className: propTypes.exports.string
	};
	var CarouselControl$1 = CarouselControl;

	const CarouselIndicators = props => {
	  const {
	    items,
	    activeIndex,
	    cssModule,
	    onClickHandler,
	    className
	  } = props;
	  const listClasses = mapToCssModules(classNames(className, 'carousel-indicators'), cssModule);
	  const indicators = items.map((item, idx) => {
	    const indicatorClasses = mapToCssModules(classNames({
	      active: activeIndex === idx
	    }), cssModule);
	    return /*#__PURE__*/React.createElement("button", {
	      "aria-label": item.caption,
	      "data-bs-target": true,
	      key: `${item.key || Object.values(item).join('')}`,
	      onClick: e => {
	        e.preventDefault();
	        onClickHandler(idx);
	      },
	      className: indicatorClasses
	    });
	  });
	  return /*#__PURE__*/React.createElement("div", {
	    className: listClasses
	  }, indicators);
	};

	CarouselIndicators.propTypes = {
	  items: propTypes.exports.array.isRequired,
	  activeIndex: propTypes.exports.number.isRequired,
	  cssModule: propTypes.exports.object,
	  onClickHandler: propTypes.exports.func.isRequired,
	  className: propTypes.exports.string
	};
	var CarouselIndicators$1 = CarouselIndicators;

	const CarouselCaption = props => {
	  const {
	    captionHeader,
	    captionText,
	    cssModule,
	    className
	  } = props;
	  const classes = mapToCssModules(classNames(className, 'carousel-caption', 'd-none', 'd-md-block'), cssModule);
	  return /*#__PURE__*/React.createElement("div", {
	    className: classes
	  }, /*#__PURE__*/React.createElement("h3", null, captionHeader), /*#__PURE__*/React.createElement("p", null, captionText));
	};

	CarouselCaption.propTypes = {
	  captionHeader: propTypes.exports.node,
	  captionText: propTypes.exports.node.isRequired,
	  cssModule: propTypes.exports.object,
	  className: propTypes.exports.string
	};
	var CarouselCaption$1 = CarouselCaption;

	const _excluded$D = ["defaultActiveIndex", "autoPlay", "indicators", "controls", "items", "goToIndex"];
	const propTypes$J = {
	  items: propTypes.exports.array.isRequired,
	  indicators: propTypes.exports.bool,
	  controls: propTypes.exports.bool,
	  autoPlay: propTypes.exports.bool,
	  defaultActiveIndex: propTypes.exports.number,
	  activeIndex: propTypes.exports.number,
	  next: propTypes.exports.func,
	  previous: propTypes.exports.func,
	  goToIndex: propTypes.exports.func
	};

	class UncontrolledCarousel extends react.exports.Component {
	  constructor(props) {
	    super(props);
	    this.animating = false;
	    this.state = {
	      activeIndex: props.defaultActiveIndex || 0
	    };
	    this.next = this.next.bind(this);
	    this.previous = this.previous.bind(this);
	    this.goToIndex = this.goToIndex.bind(this);
	    this.onExiting = this.onExiting.bind(this);
	    this.onExited = this.onExited.bind(this);
	  }

	  onExiting() {
	    this.animating = true;
	  }

	  onExited() {
	    this.animating = false;
	  }

	  next() {
	    if (this.animating) return;
	    const nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
	    this.setState({
	      activeIndex: nextIndex
	    });
	  }

	  previous() {
	    if (this.animating) return;
	    const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
	    this.setState({
	      activeIndex: nextIndex
	    });
	  }

	  goToIndex(newIndex) {
	    if (this.animating) return;
	    this.setState({
	      activeIndex: newIndex
	    });
	  }

	  render() {
	    const _this$props = this.props,
	          {
	      defaultActiveIndex,
	      autoPlay,
	      indicators,
	      controls,
	      items,
	      goToIndex
	    } = _this$props,
	          props = _objectWithoutProperties(_this$props, _excluded$D);

	    const {
	      activeIndex
	    } = this.state;
	    const slides = items.map(item => {
	      const key = item.key || item.src;
	      return /*#__PURE__*/React.createElement(CarouselItem$1, {
	        onExiting: this.onExiting,
	        onExited: this.onExited,
	        key: key
	      }, /*#__PURE__*/React.createElement("img", {
	        className: "d-block w-100",
	        src: item.src,
	        alt: item.altText
	      }), /*#__PURE__*/React.createElement(CarouselCaption$1, {
	        captionText: item.caption,
	        captionHeader: item.header || item.caption
	      }));
	    });
	    return /*#__PURE__*/React.createElement(Carousel$1, _extends({
	      activeIndex: activeIndex,
	      next: this.next,
	      previous: this.previous,
	      ride: autoPlay ? 'carousel' : undefined
	    }, props), indicators && /*#__PURE__*/React.createElement(CarouselIndicators$1, {
	      items: items,
	      activeIndex: props.activeIndex || activeIndex,
	      onClickHandler: goToIndex || this.goToIndex
	    }), slides, controls && /*#__PURE__*/React.createElement(CarouselControl$1, {
	      direction: "prev",
	      directionText: "Previous",
	      onClickHandler: props.previous || this.previous
	    }), controls && /*#__PURE__*/React.createElement(CarouselControl$1, {
	      direction: "next",
	      directionText: "Next",
	      onClickHandler: props.next || this.next
	    }));
	  }

	}

	UncontrolledCarousel.propTypes = propTypes$J;
	UncontrolledCarousel.defaultProps = {
	  controls: true,
	  indicators: true,
	  autoPlay: true
	};
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});

	const _excluded$z = ["cssModule", "children", "isOpen", "flip", "target", "offset", "fallbackPlacements", "placementPrefix", "arrowClassName", "hideArrow", "popperClassName", "tag", "container", "modifiers", "strategy", "boundariesElement", "onClosed", "fade", "transition", "placement"];

	function noop$2() {}

	const propTypes$F = {
	  children: propTypes.exports.oneOfType([propTypes.exports.node, propTypes.exports.func]).isRequired,
	  popperClassName: propTypes.exports.string,
	  placement: propTypes.exports.string,
	  placementPrefix: propTypes.exports.string,
	  arrowClassName: propTypes.exports.string,
	  hideArrow: propTypes.exports.bool,
	  tag: tagPropType,
	  isOpen: propTypes.exports.bool.isRequired,
	  cssModule: propTypes.exports.object,
	  offset: propTypes.exports.arrayOf(propTypes.exports.number),
	  fallbackPlacements: propTypes.exports.array,
	  flip: propTypes.exports.bool,
	  container: targetPropType,
	  target: targetPropType.isRequired,
	  modifiers: propTypes.exports.array,
	  strategy: propTypes.exports.string,
	  boundariesElement: propTypes.exports.oneOfType([propTypes.exports.string, DOMElement]),
	  onClosed: propTypes.exports.func,
	  fade: propTypes.exports.bool,
	  transition: propTypes.exports.shape(Fade.propTypes)
	};
	const defaultProps$F = {
	  boundariesElement: 'scrollParent',
	  placement: 'auto',
	  hideArrow: false,
	  isOpen: false,
	  offset: [0, 0],
	  flip: true,
	  container: 'body',
	  modifiers: [],
	  onClosed: noop$2,
	  fade: true,
	  transition: _objectSpread2({}, Fade.defaultProps)
	};

	class PopperContent extends React.Component {
	  constructor(props) {
	    super(props);
	    this.setTargetNode = this.setTargetNode.bind(this);
	    this.getTargetNode = this.getTargetNode.bind(this);
	    this.getRef = this.getRef.bind(this);
	    this.onClosed = this.onClosed.bind(this);
	    this.state = {
	      isOpen: props.isOpen
	    };
	  }

	  static getDerivedStateFromProps(props, state) {
	    if (props.isOpen && !state.isOpen) {
	      return {
	        isOpen: props.isOpen
	      };
	    } else return null;
	  }

	  componentDidUpdate() {
	    if (this._element && this._element.childNodes && this._element.childNodes[0] && this._element.childNodes[0].focus) {
	      this._element.childNodes[0].focus();
	    }
	  }

	  setTargetNode(node) {
	    this.targetNode = typeof node === 'string' ? getTarget(node) : node;
	  }

	  getTargetNode() {
	    return this.targetNode;
	  }

	  getContainerNode() {
	    return getTarget(this.props.container);
	  }

	  getRef(ref) {
	    this._element = ref;
	  }

	  onClosed() {
	    this.props.onClosed();
	    this.setState({
	      isOpen: false
	    });
	  }

	  renderChildren() {
	    const _this$props = this.props,
	          {
	      cssModule,
	      children,
	      isOpen,
	      flip,
	      target,
	      offset,
	      fallbackPlacements,
	      placementPrefix,
	      arrowClassName: _arrowClassName,
	      hideArrow,
	      popperClassName: _popperClassName,
	      tag,
	      container,
	      modifiers,
	      strategy,
	      boundariesElement,
	      onClosed,
	      fade,
	      transition,
	      placement
	    } = _this$props,
	          attrs = _objectWithoutProperties(_this$props, _excluded$z);

	    const arrowClassName = mapToCssModules(classNames('arrow', _arrowClassName), cssModule);
	    const popperClassName = mapToCssModules(classNames(_popperClassName, placementPrefix ? `${placementPrefix}-auto` : ''), this.props.cssModule);
	    const modifierNames = modifiers.map(m => m.name);
	    const baseModifiers = [{
	      name: 'offset',
	      options: {
	        offset
	      }
	    }, {
	      name: 'flip',
	      enabled: flip,
	      options: {
	        fallbackPlacements
	      }
	    }, {
	      name: 'preventOverflow',
	      options: {
	        boundary: boundariesElement
	      }
	    }].filter(m => !modifierNames.includes(m.name));
	    const extendedModifiers = [...baseModifiers, ...modifiers];

	    const popperTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), transition), {}, {
	      baseClass: fade ? transition.baseClass : '',
	      timeout: fade ? transition.timeout : 0
	    });

	    return /*#__PURE__*/React.createElement(Fade, _extends({}, popperTransition, attrs, {
	      in: isOpen,
	      onExited: this.onClosed,
	      tag: tag
	    }), /*#__PURE__*/React.createElement(Popper, {
	      referenceElement: this.targetNode,
	      modifiers: extendedModifiers,
	      placement: placement,
	      strategy: strategy
	    }, ({
	      ref,
	      style,
	      placement: popperPlacement,
	      isReferenceHidden,
	      arrowProps,
	      update
	    }) => /*#__PURE__*/React.createElement("div", {
	      ref: ref,
	      style: style,
	      className: popperClassName,
	      "data-popper-placement": popperPlacement,
	      "data-popper-reference-hidden": isReferenceHidden ? 'true' : undefined
	    }, typeof children === 'function' ? children({
	      update
	    }) : children, !hideArrow && /*#__PURE__*/React.createElement("span", {
	      ref: arrowProps.ref,
	      className: arrowClassName,
	      style: arrowProps.style
	    }))));
	  }

	  render() {
	    this.setTargetNode(this.props.target);

	    if (this.state.isOpen) {
	      return this.props.container === 'inline' ? this.renderChildren() : ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", {
	        ref: this.getRef
	      }, this.renderChildren()), this.getContainerNode());
	    }

	    return null;
	  }

	}

	PopperContent.propTypes = propTypes$F;
	PopperContent.defaultProps = defaultProps$F;
	var PopperContent$1 = PopperContent;

	({
	  popperManager: propTypes.exports.object.isRequired
	});
	({
	  target: targetPropType.isRequired
	});

	const propTypes$E = {
	  children: propTypes.exports.oneOfType([propTypes.exports.node, propTypes.exports.func]),
	  placement: propTypes.exports.oneOf(PopperPlacements),
	  target: targetPropType.isRequired,
	  container: targetPropType,
	  isOpen: propTypes.exports.bool,
	  disabled: propTypes.exports.bool,
	  hideArrow: propTypes.exports.bool,
	  boundariesElement: propTypes.exports.oneOfType([propTypes.exports.string, DOMElement]),
	  className: propTypes.exports.string,
	  innerClassName: propTypes.exports.string,
	  arrowClassName: propTypes.exports.string,
	  popperClassName: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  toggle: propTypes.exports.func,
	  autohide: propTypes.exports.bool,
	  placementPrefix: propTypes.exports.string,
	  delay: propTypes.exports.oneOfType([propTypes.exports.shape({
	    show: propTypes.exports.number,
	    hide: propTypes.exports.number
	  }), propTypes.exports.number]),
	  modifiers: propTypes.exports.array,
	  strategy: propTypes.exports.string,
	  offset: propTypes.exports.arrayOf(propTypes.exports.number),
	  innerRef: propTypes.exports.oneOfType([propTypes.exports.func, propTypes.exports.string, propTypes.exports.object]),
	  trigger: propTypes.exports.string,
	  fade: propTypes.exports.bool,
	  flip: propTypes.exports.bool
	};
	const DEFAULT_DELAYS = {
	  show: 0,
	  hide: 50
	};
	const defaultProps$E = {
	  isOpen: false,
	  hideArrow: false,
	  autohide: false,
	  delay: DEFAULT_DELAYS,
	  toggle: function () {},
	  trigger: 'click',
	  fade: true
	};

	function isInDOMSubtree(element, subtreeRoot) {
	  return subtreeRoot && (element === subtreeRoot || subtreeRoot.contains(element));
	}

	function isInDOMSubtrees(element, subtreeRoots = []) {
	  return subtreeRoots && subtreeRoots.length && subtreeRoots.filter(subTreeRoot => isInDOMSubtree(element, subTreeRoot))[0];
	}

	class TooltipPopoverWrapper extends React.Component {
	  constructor(props) {
	    super(props);
	    this._targets = [];
	    this.currentTargetElement = null;
	    this.addTargetEvents = this.addTargetEvents.bind(this);
	    this.handleDocumentClick = this.handleDocumentClick.bind(this);
	    this.removeTargetEvents = this.removeTargetEvents.bind(this);
	    this.toggle = this.toggle.bind(this);
	    this.showWithDelay = this.showWithDelay.bind(this);
	    this.hideWithDelay = this.hideWithDelay.bind(this);
	    this.onMouseOverTooltipContent = this.onMouseOverTooltipContent.bind(this);
	    this.onMouseLeaveTooltipContent = this.onMouseLeaveTooltipContent.bind(this);
	    this.show = this.show.bind(this);
	    this.hide = this.hide.bind(this);
	    this.onEscKeyDown = this.onEscKeyDown.bind(this);
	    this.getRef = this.getRef.bind(this);
	    this.state = {
	      isOpen: props.isOpen
	    };
	    this._isMounted = false;
	  }

	  componentDidMount() {
	    this._isMounted = true;
	    this.updateTarget();
	  }

	  componentWillUnmount() {
	    this._isMounted = false;
	    this.removeTargetEvents();
	    this._targets = null;
	    this.clearShowTimeout();
	    this.clearHideTimeout();
	  }

	  static getDerivedStateFromProps(props, state) {
	    if (props.isOpen && !state.isOpen) {
	      return {
	        isOpen: props.isOpen
	      };
	    } else return null;
	  }

	  onMouseOverTooltipContent() {
	    if (this.props.trigger.indexOf('hover') > -1 && !this.props.autohide) {
	      if (this._hideTimeout) {
	        this.clearHideTimeout();
	      }

	      if (this.state.isOpen && !this.props.isOpen) {
	        this.toggle();
	      }
	    }
	  }

	  onMouseLeaveTooltipContent(e) {
	    if (this.props.trigger.indexOf('hover') > -1 && !this.props.autohide) {
	      if (this._showTimeout) {
	        this.clearShowTimeout();
	      }

	      e.persist();
	      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
	    }
	  }

	  onEscKeyDown(e) {
	    if (e.key === 'Escape') {
	      this.hide(e);
	    }
	  }

	  getRef(ref) {
	    const {
	      innerRef
	    } = this.props;

	    if (innerRef) {
	      if (typeof innerRef === 'function') {
	        innerRef(ref);
	      } else if (typeof innerRef === 'object') {
	        innerRef.current = ref;
	      }
	    }

	    this._popover = ref;
	  }

	  getDelay(key) {
	    const {
	      delay
	    } = this.props;

	    if (typeof delay === 'object') {
	      return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
	    }

	    return delay;
	  }

	  getCurrentTarget(target) {
	    if (!target) return null;

	    const index = this._targets.indexOf(target);

	    if (index >= 0) return this._targets[index];
	    return this.getCurrentTarget(target.parentElement);
	  }

	  show(e) {
	    if (!this.props.isOpen) {
	      this.clearShowTimeout();
	      this.currentTargetElement = e ? e.currentTarget || this.getCurrentTarget(e.target) : null;

	      if (e && e.composedPath && typeof e.composedPath === 'function') {
	        const path = e.composedPath();
	        this.currentTargetElement = path && path[0] || this.currentTargetElement;
	      }

	      this.toggle(e);
	    }
	  }

	  showWithDelay(e) {
	    if (this._hideTimeout) {
	      this.clearHideTimeout();
	    }

	    this._showTimeout = setTimeout(this.show.bind(this, e), this.getDelay('show'));
	  }

	  hide(e) {
	    if (this.props.isOpen) {
	      this.clearHideTimeout();
	      this.currentTargetElement = null;
	      this.toggle(e);
	    }
	  }

	  hideWithDelay(e) {
	    if (this._showTimeout) {
	      this.clearShowTimeout();
	    }

	    this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
	  }

	  clearShowTimeout() {
	    clearTimeout(this._showTimeout);
	    this._showTimeout = undefined;
	  }

	  clearHideTimeout() {
	    clearTimeout(this._hideTimeout);
	    this._hideTimeout = undefined;
	  }

	  handleDocumentClick(e) {
	    const triggers = this.props.trigger.split(' ');

	    if (triggers.indexOf('legacy') > -1 && (this.props.isOpen || isInDOMSubtrees(e.target, this._targets))) {
	      if (this._hideTimeout) {
	        this.clearHideTimeout();
	      }

	      if (this.props.isOpen && !isInDOMSubtree(e.target, this._popover)) {
	        this.hideWithDelay(e);
	      } else if (!this.props.isOpen) {
	        this.showWithDelay(e);
	      }
	    } else if (triggers.indexOf('click') > -1 && isInDOMSubtrees(e.target, this._targets)) {
	      if (this._hideTimeout) {
	        this.clearHideTimeout();
	      }

	      if (!this.props.isOpen) {
	        this.showWithDelay(e);
	      } else {
	        this.hideWithDelay(e);
	      }
	    }
	  }

	  addEventOnTargets(type, handler, isBubble) {
	    this._targets.forEach(target => {
	      target.addEventListener(type, handler, isBubble);
	    });
	  }

	  removeEventOnTargets(type, handler, isBubble) {
	    this._targets.forEach(target => {
	      target.removeEventListener(type, handler, isBubble);
	    });
	  }

	  addTargetEvents() {
	    if (this.props.trigger) {
	      let triggers = this.props.trigger.split(' ');

	      if (triggers.indexOf('manual') === -1) {
	        if (triggers.indexOf('click') > -1 || triggers.indexOf('legacy') > -1) {
	          document.addEventListener('click', this.handleDocumentClick, true);
	        }

	        if (this._targets && this._targets.length) {
	          if (triggers.indexOf('hover') > -1) {
	            this.addEventOnTargets('mouseover', this.showWithDelay, true);
	            this.addEventOnTargets('mouseout', this.hideWithDelay, true);
	          }

	          if (triggers.indexOf('focus') > -1) {
	            this.addEventOnTargets('focusin', this.show, true);
	            this.addEventOnTargets('focusout', this.hide, true);
	          }

	          this.addEventOnTargets('keydown', this.onEscKeyDown, true);
	        }
	      }
	    }
	  }

	  removeTargetEvents() {
	    if (this._targets) {
	      this.removeEventOnTargets('mouseover', this.showWithDelay, true);
	      this.removeEventOnTargets('mouseout', this.hideWithDelay, true);
	      this.removeEventOnTargets('keydown', this.onEscKeyDown, true);
	      this.removeEventOnTargets('focusin', this.show, true);
	      this.removeEventOnTargets('focusout', this.hide, true);
	    }

	    document.removeEventListener('click', this.handleDocumentClick, true);
	  }

	  updateTarget() {
	    const newTarget = getTarget(this.props.target, true);

	    if (newTarget !== this._targets) {
	      this.removeTargetEvents();
	      this._targets = newTarget ? Array.from(newTarget) : [];
	      this.currentTargetElement = this.currentTargetElement || this._targets[0];
	      this.addTargetEvents();
	    }
	  }

	  toggle(e) {
	    if (this.props.disabled || !this._isMounted) {
	      return e && e.preventDefault();
	    }

	    return this.props.toggle(e);
	  }

	  render() {
	    if (this.props.isOpen) {
	      this.updateTarget();
	    }

	    const target = this.currentTargetElement || this._targets[0];

	    if (!target) {
	      return null;
	    }

	    const {
	      className,
	      cssModule,
	      innerClassName,
	      isOpen,
	      hideArrow,
	      boundariesElement,
	      placement,
	      placementPrefix,
	      arrowClassName,
	      popperClassName,
	      container,
	      modifiers,
	      strategy,
	      offset,
	      fade,
	      flip,
	      children
	    } = this.props;
	    const attributes = omit(this.props, Object.keys(propTypes$E));
	    const popperClasses = mapToCssModules(popperClassName, cssModule);
	    const classes = mapToCssModules(innerClassName, cssModule);
	    return /*#__PURE__*/React.createElement(PopperContent$1, {
	      className: className,
	      target: target,
	      isOpen: isOpen,
	      hideArrow: hideArrow,
	      boundariesElement: boundariesElement,
	      placement: placement,
	      placementPrefix: placementPrefix,
	      arrowClassName: arrowClassName,
	      popperClassName: popperClasses,
	      container: container,
	      modifiers: modifiers,
	      strategy: strategy,
	      offset: offset,
	      cssModule: cssModule,
	      fade: fade,
	      flip: flip
	    }, ({
	      update
	    }) => /*#__PURE__*/React.createElement("div", _extends({}, attributes, {
	      ref: this.getRef,
	      className: classes,
	      role: "tooltip",
	      onMouseOver: this.onMouseOverTooltipContent,
	      onMouseLeave: this.onMouseLeaveTooltipContent,
	      onKeyDown: this.onEscKeyDown
	    }), typeof children === 'function' ? children({
	      update
	    }) : children));
	  }

	}

	TooltipPopoverWrapper.propTypes = propTypes$E;
	TooltipPopoverWrapper.defaultProps = defaultProps$E;
	var TooltipPopoverWrapper$1 = TooltipPopoverWrapper;

	const defaultProps$D = {
	  placement: 'right',
	  placementPrefix: 'bs-popover',
	  trigger: 'click',
	  offset: [0, 8]
	};

	const Popover = props => {
	  const popperClasses = classNames('popover', 'show', props.popperClassName);
	  const classes = classNames('popover-inner', props.innerClassName);
	  return /*#__PURE__*/React.createElement(TooltipPopoverWrapper$1, _extends({}, props, {
	    arrowClassName: "popover-arrow",
	    popperClassName: popperClasses,
	    innerClassName: classes
	  }));
	};

	Popover.propTypes = propTypes$E;
	Popover.defaultProps = defaultProps$D;
	var Popover$1 = Popover;

	const omitKeys$4 = ['defaultOpen'];
	class UncontrolledPopover extends react.exports.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      isOpen: props.defaultOpen || false
	    };
	    this.toggle = this.toggle.bind(this);
	  }

	  toggle() {
	    this.setState({
	      isOpen: !this.state.isOpen
	    });
	  }

	  render() {
	    return /*#__PURE__*/React.createElement(Popover$1, _extends({
	      isOpen: this.state.isOpen,
	      toggle: this.toggle
	    }, omit(this.props, omitKeys$4)));
	  }

	}
	UncontrolledPopover.propTypes = _objectSpread2({
	  defaultOpen: propTypes.exports.bool
	}, Popover$1.propTypes);
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});
	({
	  children: propTypes.exports.node,
	  bar: propTypes.exports.bool,
	  multi: propTypes.exports.bool,
	  tag: tagPropType,
	  value: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.number]),
	  min: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.number]),
	  max: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.number]),
	  animated: propTypes.exports.bool,
	  striped: propTypes.exports.bool,
	  color: propTypes.exports.string,
	  className: propTypes.exports.string,
	  barClassName: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  style: propTypes.exports.object,
	  barStyle: propTypes.exports.object,
	  barAriaValueText: propTypes.exports.string,
	  barAriaLabelledBy: propTypes.exports.string
	});

	const propTypes$A = {
	  children: propTypes.exports.node.isRequired,
	  node: propTypes.exports.any
	};

	class Portal extends React.Component {
	  componentWillUnmount() {
	    if (this.defaultNode) {
	      document.body.removeChild(this.defaultNode);
	    }

	    this.defaultNode = null;
	  }

	  render() {
	    if (!canUseDOM) {
	      return null;
	    }

	    if (!this.props.node && !this.defaultNode) {
	      this.defaultNode = document.createElement('div');
	      document.body.appendChild(this.defaultNode);
	    }

	    return ReactDOM.createPortal(this.props.children, this.props.node || this.defaultNode);
	  }

	}

	Portal.propTypes = propTypes$A;
	var Portal$1 = Portal;

	function noop$1() {}

	const FadePropTypes$1 = propTypes.exports.shape(Fade.propTypes);
	const propTypes$z = {
	  isOpen: propTypes.exports.bool,
	  autoFocus: propTypes.exports.bool,
	  centered: propTypes.exports.bool,
	  fullscreen: propTypes.exports.oneOfType([propTypes.exports.bool, propTypes.exports.oneOf(['sm', 'md', 'lg', 'xl'])]),
	  scrollable: propTypes.exports.bool,
	  size: propTypes.exports.string,
	  toggle: propTypes.exports.func,
	  keyboard: propTypes.exports.bool,
	  role: propTypes.exports.string,
	  labelledBy: propTypes.exports.string,
	  backdrop: propTypes.exports.oneOfType([propTypes.exports.bool, propTypes.exports.oneOf(['static'])]),
	  onEnter: propTypes.exports.func,
	  onExit: propTypes.exports.func,
	  onOpened: propTypes.exports.func,
	  onClosed: propTypes.exports.func,
	  children: propTypes.exports.node,
	  className: propTypes.exports.string,
	  wrapClassName: propTypes.exports.string,
	  modalClassName: propTypes.exports.string,
	  backdropClassName: propTypes.exports.string,
	  contentClassName: propTypes.exports.string,
	  external: propTypes.exports.node,
	  fade: propTypes.exports.bool,
	  cssModule: propTypes.exports.object,
	  zIndex: propTypes.exports.oneOfType([propTypes.exports.number, propTypes.exports.string]),
	  backdropTransition: FadePropTypes$1,
	  modalTransition: FadePropTypes$1,
	  innerRef: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.string, propTypes.exports.func]),
	  unmountOnClose: propTypes.exports.bool,
	  returnFocusAfterClose: propTypes.exports.bool,
	  container: targetPropType,
	  trapFocus: propTypes.exports.bool
	};
	const propsToOmit$1 = Object.keys(propTypes$z);
	const defaultProps$z = {
	  isOpen: false,
	  autoFocus: true,
	  centered: false,
	  scrollable: false,
	  role: 'dialog',
	  backdrop: true,
	  keyboard: true,
	  zIndex: 1050,
	  fade: true,
	  onOpened: noop$1,
	  onClosed: noop$1,
	  modalTransition: {
	    timeout: TransitionTimeouts.Modal
	  },
	  backdropTransition: {
	    mountOnEnter: true,
	    timeout: TransitionTimeouts.Fade // uses standard fade transition

	  },
	  unmountOnClose: true,
	  returnFocusAfterClose: true,
	  container: 'body',
	  trapFocus: false
	};

	class Modal extends React.Component {
	  constructor(props) {
	    super(props);
	    this._element = null;
	    this._originalBodyPadding = null;
	    this._originalBodyOverflow = null;
	    this.getFocusableChildren = this.getFocusableChildren.bind(this);
	    this.handleBackdropClick = this.handleBackdropClick.bind(this);
	    this.handleBackdropMouseDown = this.handleBackdropMouseDown.bind(this);
	    this.handleEscape = this.handleEscape.bind(this);
	    this.handleStaticBackdropAnimation = this.handleStaticBackdropAnimation.bind(this);
	    this.handleTab = this.handleTab.bind(this);
	    this.onOpened = this.onOpened.bind(this);
	    this.onClosed = this.onClosed.bind(this);
	    this.manageFocusAfterClose = this.manageFocusAfterClose.bind(this);
	    this.clearBackdropAnimationTimeout = this.clearBackdropAnimationTimeout.bind(this);
	    this.trapFocus = this.trapFocus.bind(this);
	    this.state = {
	      isOpen: false,
	      showStaticBackdropAnimation: false
	    };
	  }

	  componentDidMount() {
	    const {
	      isOpen,
	      autoFocus,
	      onEnter
	    } = this.props;

	    if (isOpen) {
	      this.init();
	      this.setState({
	        isOpen: true
	      });

	      if (autoFocus) {
	        this.setFocus();
	      }
	    }

	    if (onEnter) {
	      onEnter();
	    } // traps focus inside the Modal, even if the browser address bar is focused


	    document.addEventListener('focus', this.trapFocus, true);
	    this._isMounted = true;
	  }

	  componentDidUpdate(prevProps, prevState) {
	    if (this.props.isOpen && !prevProps.isOpen) {
	      this.init();
	      this.setState({
	        isOpen: true
	      }); // let render() renders Modal Dialog first

	      return;
	    } // now Modal Dialog is rendered and we can refer this._element and this._dialog


	    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
	      this.setFocus();
	    }

	    if (this._element && prevProps.zIndex !== this.props.zIndex) {
	      this._element.style.zIndex = this.props.zIndex;
	    }
	  }

	  componentWillUnmount() {
	    this.clearBackdropAnimationTimeout();

	    if (this.props.onExit) {
	      this.props.onExit();
	    }

	    if (this._element) {
	      this.destroy();

	      if (this.props.isOpen || this.state.isOpen) {
	        this.close();
	      }
	    }

	    document.removeEventListener('focus', this.trapFocus, true);
	    this._isMounted = false;
	  }

	  trapFocus(ev) {
	    if (!this.props.trapFocus) {
	      return;
	    }

	    if (!this._element) //element is not attached
	      return;
	    if (this._dialog && this._dialog.parentNode === ev.target) // initial focus when the Modal is opened
	      return;
	    if (this.modalIndex < Modal.openCount - 1) // last opened modal
	      return;
	    const children = this.getFocusableChildren();

	    for (let i = 0; i < children.length; i++) {
	      // focus is already inside the Modal
	      if (children[i] === ev.target) return;
	    }

	    if (children.length > 0) {
	      // otherwise focus the first focusable element in the Modal
	      ev.preventDefault();
	      ev.stopPropagation();
	      children[0].focus();
	    }
	  }

	  onOpened(node, isAppearing) {
	    this.props.onOpened();
	    (this.props.modalTransition.onEntered || noop$1)(node, isAppearing);
	  }

	  onClosed(node) {
	    const {
	      unmountOnClose
	    } = this.props; // so all methods get called before it is unmounted

	    this.props.onClosed();
	    (this.props.modalTransition.onExited || noop$1)(node);

	    if (unmountOnClose) {
	      this.destroy();
	    }

	    this.close();

	    if (this._isMounted) {
	      this.setState({
	        isOpen: false
	      });
	    }
	  }

	  setFocus() {
	    if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
	      this._dialog.parentNode.focus();
	    }
	  }

	  getFocusableChildren() {
	    return this._element.querySelectorAll(focusableElements.join(', '));
	  }

	  getFocusedChild() {
	    let currentFocus;
	    const focusableChildren = this.getFocusableChildren();

	    try {
	      currentFocus = document.activeElement;
	    } catch (err) {
	      currentFocus = focusableChildren[0];
	    }

	    return currentFocus;
	  } // not mouseUp because scrollbar fires it, shouldn't close when user scrolls


	  handleBackdropClick(e) {
	    if (e.target === this._mouseDownElement) {
	      e.stopPropagation();
	      const backdrop = this._dialog ? this._dialog.parentNode : null;

	      if (backdrop && e.target === backdrop && this.props.backdrop === 'static') {
	        this.handleStaticBackdropAnimation();
	      }

	      if (!this.props.isOpen || this.props.backdrop !== true) return;

	      if (backdrop && e.target === backdrop && this.props.toggle) {
	        this.props.toggle(e);
	      }
	    }
	  }

	  handleTab(e) {
	    if (e.which !== 9) return;
	    if (this.modalIndex < Modal.openCount - 1) return; // last opened modal

	    const focusableChildren = this.getFocusableChildren();
	    const totalFocusable = focusableChildren.length;
	    if (totalFocusable === 0) return;
	    const currentFocus = this.getFocusedChild();
	    let focusedIndex = 0;

	    for (let i = 0; i < totalFocusable; i += 1) {
	      if (focusableChildren[i] === currentFocus) {
	        focusedIndex = i;
	        break;
	      }
	    }

	    if (e.shiftKey && focusedIndex === 0) {
	      e.preventDefault();
	      focusableChildren[totalFocusable - 1].focus();
	    } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
	      e.preventDefault();
	      focusableChildren[0].focus();
	    }
	  }

	  handleBackdropMouseDown(e) {
	    this._mouseDownElement = e.target;
	  }

	  handleEscape(e) {
	    if (this.props.isOpen && e.keyCode === keyCodes.esc && this.props.toggle) {
	      if (this.props.keyboard) {
	        e.preventDefault();
	        e.stopPropagation();
	        this.props.toggle(e);
	      } else if (this.props.backdrop === 'static') {
	        e.preventDefault();
	        e.stopPropagation();
	        this.handleStaticBackdropAnimation();
	      }
	    }
	  }

	  handleStaticBackdropAnimation() {
	    this.clearBackdropAnimationTimeout();
	    this.setState({
	      showStaticBackdropAnimation: true
	    });
	    this._backdropAnimationTimeout = setTimeout(() => {
	      this.setState({
	        showStaticBackdropAnimation: false
	      });
	    }, 100);
	  }

	  init() {
	    try {
	      this._triggeringElement = document.activeElement;
	    } catch (err) {
	      this._triggeringElement = null;
	    }

	    if (!this._element) {
	      this._element = document.createElement('div');

	      this._element.setAttribute('tabindex', '-1');

	      this._element.style.position = 'relative';
	      this._element.style.zIndex = this.props.zIndex;
	      this._mountContainer = getTarget(this.props.container);

	      this._mountContainer.appendChild(this._element);
	    }

	    this._originalBodyPadding = getOriginalBodyPadding();
	    this._originalBodyOverflow = window.getComputedStyle(document.body).overflow;
	    conditionallyUpdateScrollbar();

	    if (Modal.openCount === 0) {
	      document.body.className = classNames(document.body.className, mapToCssModules('modal-open', this.props.cssModule));
	      document.body.style.overflow = 'hidden';
	    }

	    this.modalIndex = Modal.openCount;
	    Modal.openCount += 1;
	  }

	  destroy() {
	    if (this._element) {
	      this._mountContainer.removeChild(this._element);

	      this._element = null;
	    }

	    this.manageFocusAfterClose();
	  }

	  manageFocusAfterClose() {
	    if (this._triggeringElement) {
	      const {
	        returnFocusAfterClose
	      } = this.props;
	      if (this._triggeringElement.focus && returnFocusAfterClose) this._triggeringElement.focus();
	      this._triggeringElement = null;
	    }
	  }

	  close() {
	    if (Modal.openCount <= 1) {
	      const modalOpenClassName = mapToCssModules('modal-open', this.props.cssModule); // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`

	      const modalOpenClassNameRegex = new RegExp(`(^| )${modalOpenClassName}( |$)`);
	      document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();
	      document.body.style.overflow = this._originalBodyOverflow;
	    }

	    this.manageFocusAfterClose();
	    Modal.openCount = Math.max(0, Modal.openCount - 1);
	    setScrollbarWidth(this._originalBodyPadding);
	  }

	  renderModalDialog() {
	    const attributes = omit(this.props, propsToOmit$1);
	    const dialogBaseClass = 'modal-dialog';
	    return /*#__PURE__*/React.createElement("div", _extends({}, attributes, {
	      className: mapToCssModules(classNames(dialogBaseClass, this.props.className, {
	        [`modal-${this.props.size}`]: this.props.size,
	        [`${dialogBaseClass}-centered`]: this.props.centered,
	        [`${dialogBaseClass}-scrollable`]: this.props.scrollable,
	        'modal-fullscreen': this.props.fullscreen === true,
	        [`modal-fullscreen-${this.props.fullscreen}-down`]: typeof this.props.fullscreen === 'string'
	      }), this.props.cssModule),
	      role: "document",
	      ref: c => {
	        this._dialog = c;
	      }
	    }), /*#__PURE__*/React.createElement("div", {
	      className: mapToCssModules(classNames('modal-content', this.props.contentClassName), this.props.cssModule)
	    }, this.props.children));
	  }

	  render() {
	    const {
	      unmountOnClose
	    } = this.props;

	    if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
	      const isModalHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
	      this._element.style.display = isModalHidden ? 'none' : 'block';
	      const {
	        wrapClassName,
	        modalClassName,
	        backdropClassName,
	        cssModule,
	        isOpen,
	        backdrop,
	        role,
	        labelledBy,
	        external,
	        innerRef
	      } = this.props;
	      const modalAttributes = {
	        onClick: this.handleBackdropClick,
	        onMouseDown: this.handleBackdropMouseDown,
	        onKeyUp: this.handleEscape,
	        onKeyDown: this.handleTab,
	        style: {
	          display: 'block'
	        },
	        'aria-labelledby': labelledBy,
	        role,
	        tabIndex: '-1'
	      };
	      const hasTransition = this.props.fade;

	      const modalTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), this.props.modalTransition), {}, {
	        baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
	        timeout: hasTransition ? this.props.modalTransition.timeout : 0
	      });

	      const backdropTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), this.props.backdropTransition), {}, {
	        baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
	        timeout: hasTransition ? this.props.backdropTransition.timeout : 0
	      });

	      const Backdrop = backdrop && (hasTransition ? /*#__PURE__*/React.createElement(Fade, _extends({}, backdropTransition, {
	        in: isOpen && !!backdrop,
	        cssModule: cssModule,
	        className: mapToCssModules(classNames('modal-backdrop', backdropClassName), cssModule)
	      })) : /*#__PURE__*/React.createElement("div", {
	        className: mapToCssModules(classNames('modal-backdrop', 'show', backdropClassName), cssModule)
	      }));
	      return /*#__PURE__*/React.createElement(Portal$1, {
	        node: this._element
	      }, /*#__PURE__*/React.createElement("div", {
	        className: mapToCssModules(wrapClassName)
	      }, /*#__PURE__*/React.createElement(Fade, _extends({}, modalAttributes, modalTransition, {
	        in: isOpen,
	        onEntered: this.onOpened,
	        onExited: this.onClosed,
	        cssModule: cssModule,
	        className: mapToCssModules(classNames('modal', modalClassName, this.state.showStaticBackdropAnimation && 'modal-static'), cssModule),
	        innerRef: innerRef
	      }), external, this.renderModalDialog()), Backdrop));
	    }

	    return null;
	  }

	  clearBackdropAnimationTimeout() {
	    if (this._backdropAnimationTimeout) {
	      clearTimeout(this._backdropAnimationTimeout);
	      this._backdropAnimationTimeout = undefined;
	    }
	  }

	}

	Modal.propTypes = propTypes$z;
	Modal.defaultProps = defaultProps$z;
	Modal.openCount = 0;
	({
	  tag: tagPropType,
	  wrapTag: tagPropType,
	  toggle: propTypes.exports.func,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  children: propTypes.exports.node,
	  closeAriaLabel: propTypes.exports.string,
	  close: propTypes.exports.object
	});
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});

	const defaultProps$v = {
	  placement: 'top',
	  autohide: true,
	  placementPrefix: 'bs-tooltip',
	  trigger: 'hover focus'
	};

	const Tooltip = props => {
	  const popperClasses = classNames('tooltip', 'show', props.popperClassName);
	  const classes = classNames('tooltip-inner', props.innerClassName);
	  return /*#__PURE__*/React.createElement(TooltipPopoverWrapper$1, _extends({}, props, {
	    arrowClassName: "tooltip-arrow",
	    popperClassName: popperClasses,
	    innerClassName: classes
	  }));
	};

	Tooltip.propTypes = propTypes$E;
	Tooltip.defaultProps = defaultProps$v;
	var Tooltip$1 = Tooltip;
	({
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  size: propTypes.exports.string,
	  bordered: propTypes.exports.bool,
	  borderless: propTypes.exports.bool,
	  striped: propTypes.exports.bool,
	  dark: propTypes.exports.bool,
	  hover: propTypes.exports.bool,
	  responsive: propTypes.exports.oneOfType([propTypes.exports.bool, propTypes.exports.string]),
	  tag: tagPropType,
	  responsiveTag: tagPropType,
	  innerRef: propTypes.exports.oneOfType([propTypes.exports.func, propTypes.exports.string, propTypes.exports.object])
	});
	({
	  tag: tagPropType,
	  flush: propTypes.exports.bool,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  horizontal: propTypes.exports.oneOfType([propTypes.exports.bool, propTypes.exports.string]),
	  numbered: propTypes.exports.bool
	});

	const _excluded$q = ["className", "cssModule", "inline", "tag", "innerRef"];
	const propTypes$t = {
	  children: propTypes.exports.node,
	  inline: propTypes.exports.bool,
	  tag: tagPropType,
	  innerRef: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.func, propTypes.exports.string]),
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	};
	const defaultProps$s = {
	  tag: 'form'
	};

	class Form extends react.exports.Component {
	  constructor(props) {
	    super(props);
	    this.getRef = this.getRef.bind(this);
	    this.submit = this.submit.bind(this);
	  }

	  getRef(ref) {
	    if (this.props.innerRef) {
	      this.props.innerRef(ref);
	    }

	    this.ref = ref;
	  }

	  submit() {
	    if (this.ref) {
	      this.ref.submit();
	    }
	  }

	  render() {
	    const _this$props = this.props,
	          {
	      className,
	      cssModule,
	      inline,
	      tag: Tag,
	      innerRef
	    } = _this$props,
	          attributes = _objectWithoutProperties(_this$props, _excluded$q);

	    const classes = mapToCssModules(classNames(className, inline ? 'form-inline' : false), cssModule);
	    return /*#__PURE__*/React.createElement(Tag, _extends({}, attributes, {
	      ref: innerRef,
	      className: classes
	    }));
	  }

	}

	Form.propTypes = propTypes$t;
	Form.defaultProps = defaultProps$s;
	({
	  children: propTypes.exports.node,
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  valid: propTypes.exports.bool,
	  tooltip: propTypes.exports.bool
	});
	({
	  children: propTypes.exports.node,
	  row: propTypes.exports.bool,
	  check: propTypes.exports.bool,
	  switch: propTypes.exports.bool,
	  inline: propTypes.exports.bool,
	  floating: propTypes.exports.bool,
	  disabled: propTypes.exports.bool,
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});
	({
	  children: propTypes.exports.node,
	  inline: propTypes.exports.bool,
	  tag: tagPropType,
	  color: propTypes.exports.string,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});

	const _excluded$m = ["className", "cssModule", "type", "bsSize", "valid", "invalid", "tag", "addon", "plaintext", "innerRef"];
	const propTypes$p = {
	  children: propTypes.exports.node,
	  type: propTypes.exports.string,
	  size: propTypes.exports.oneOfType([propTypes.exports.number, propTypes.exports.string]),
	  bsSize: propTypes.exports.string,
	  valid: propTypes.exports.bool,
	  invalid: propTypes.exports.bool,
	  tag: tagPropType,
	  innerRef: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.func, propTypes.exports.string]),
	  plaintext: propTypes.exports.bool,
	  addon: propTypes.exports.bool,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	};
	const defaultProps$o = {
	  type: 'text'
	};

	class Input extends React.Component {
	  constructor(props) {
	    super(props);
	    this.getRef = this.getRef.bind(this);
	    this.focus = this.focus.bind(this);
	  }

	  getRef(ref) {
	    if (this.props.innerRef) {
	      this.props.innerRef(ref);
	    }

	    this.ref = ref;
	  }

	  focus() {
	    if (this.ref) {
	      this.ref.focus();
	    }
	  }

	  render() {
	    let _this$props = this.props,
	        {
	      className,
	      cssModule,
	      type,
	      bsSize,
	      valid,
	      invalid,
	      tag,
	      addon,
	      plaintext,
	      innerRef
	    } = _this$props,
	        attributes = _objectWithoutProperties(_this$props, _excluded$m);

	    const checkInput = ['switch', 'radio', 'checkbox'].indexOf(type) > -1;
	    const isNotaNumber = new RegExp('\\D', 'g');
	    const textareaInput = type === 'textarea';
	    const selectInput = type === 'select';
	    const rangeInput = type === 'range';
	    let Tag = tag || (selectInput || textareaInput ? type : 'input');
	    let formControlClass = 'form-control';

	    if (plaintext) {
	      formControlClass = `${formControlClass}-plaintext`;
	      Tag = tag || 'input';
	    } else if (rangeInput) {
	      formControlClass = 'form-range';
	    } else if (selectInput) {
	      formControlClass = "form-select";
	    } else if (checkInput) {
	      if (addon) {
	        formControlClass = null;
	      } else {
	        formControlClass = 'form-check-input';
	      }
	    }

	    if (attributes.size && isNotaNumber.test(attributes.size)) {
	      warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
	      bsSize = attributes.size;
	      delete attributes.size;
	    }

	    const classes = mapToCssModules(classNames(className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? selectInput ? `form-select-${bsSize}` : `form-control-${bsSize}` : false, formControlClass), cssModule);

	    if (Tag === 'input' || tag && typeof tag === 'function') {
	      attributes.type = type === 'switch' ? 'checkbox' : type;
	    }

	    if (attributes.children && !(plaintext || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
	      warnOnce(`Input with a type of "${type}" cannot have children. Please use "value"/"defaultValue" instead.`);
	      delete attributes.children;
	    }

	    return /*#__PURE__*/React.createElement(Tag, _extends({}, attributes, {
	      ref: innerRef,
	      className: classes,
	      "aria-invalid": invalid
	    }));
	  }

	}

	Input.propTypes = propTypes$p;
	Input.defaultProps = defaultProps$o;
	({
	  tag: tagPropType,
	  type: propTypes.exports.bool,
	  size: propTypes.exports.string,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});
	const stringOrNumberProp = propTypes.exports.oneOfType([propTypes.exports.number, propTypes.exports.string]);
	const columnProps = propTypes.exports.oneOfType([propTypes.exports.bool, propTypes.exports.string, propTypes.exports.number, propTypes.exports.shape({
	  size: stringOrNumberProp,
	  order: stringOrNumberProp,
	  offset: stringOrNumberProp
	})]);
	({
	  children: propTypes.exports.node,
	  hidden: propTypes.exports.bool,
	  check: propTypes.exports.bool,
	  size: propTypes.exports.string,
	  for: propTypes.exports.string,
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  xs: columnProps,
	  sm: columnProps,
	  md: columnProps,
	  lg: columnProps,
	  xl: columnProps,
	  xxl: columnProps,
	  widths: propTypes.exports.array
	});
	({
	  body: propTypes.exports.bool,
	  bottom: propTypes.exports.bool,
	  children: propTypes.exports.node,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  heading: propTypes.exports.bool,
	  left: propTypes.exports.bool,
	  list: propTypes.exports.bool,
	  middle: propTypes.exports.bool,
	  object: propTypes.exports.bool,
	  right: propTypes.exports.bool,
	  tag: tagPropType,
	  top: propTypes.exports.bool
	});

	function noop() {}

	const FadePropTypes = propTypes.exports.shape(Fade.propTypes);
	const propTypes$k = {
	  autoFocus: propTypes.exports.bool,
	  backdrop: propTypes.exports.bool,
	  backdropClassName: propTypes.exports.string,
	  backdropTransition: FadePropTypes,
	  children: propTypes.exports.node,
	  className: propTypes.exports.string,
	  container: targetPropType,
	  cssModule: propTypes.exports.object,
	  direction: propTypes.exports.oneOf(['start', 'end', 'bottom', 'top']),
	  fade: propTypes.exports.bool,
	  innerRef: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.string, propTypes.exports.func]),
	  isOpen: propTypes.exports.bool,
	  keyboard: propTypes.exports.bool,
	  labelledBy: propTypes.exports.string,
	  offcanvasTransition: FadePropTypes,
	  onClosed: propTypes.exports.func,
	  onEnter: propTypes.exports.func,
	  onExit: propTypes.exports.func,
	  onOpened: propTypes.exports.func,
	  returnFocusAfterClose: propTypes.exports.bool,
	  role: propTypes.exports.string,
	  scrollable: propTypes.exports.bool,
	  toggle: propTypes.exports.func,
	  trapFocus: propTypes.exports.bool,
	  unmountOnClose: propTypes.exports.bool,
	  zIndex: propTypes.exports.oneOfType([propTypes.exports.number, propTypes.exports.string])
	};
	const propsToOmit = Object.keys(propTypes$k);
	const defaultProps$k = {
	  isOpen: false,
	  autoFocus: true,
	  direction: 'start',
	  scrollable: false,
	  role: 'dialog',
	  backdrop: true,
	  keyboard: true,
	  zIndex: 1050,
	  fade: true,
	  onOpened: noop,
	  onClosed: noop,
	  offcanvasTransition: {
	    timeout: TransitionTimeouts.Offcanvas
	  },
	  backdropTransition: {
	    mountOnEnter: true,
	    timeout: TransitionTimeouts.Fade // uses standard fade transition

	  },
	  unmountOnClose: true,
	  returnFocusAfterClose: true,
	  container: 'body',
	  trapFocus: false
	};

	class Offcanvas extends React.Component {
	  constructor(props) {
	    super(props);
	    this._element = null;
	    this._originalBodyPadding = null;
	    this.getFocusableChildren = this.getFocusableChildren.bind(this);
	    this.handleBackdropClick = this.handleBackdropClick.bind(this);
	    this.handleBackdropMouseDown = this.handleBackdropMouseDown.bind(this);
	    this.handleEscape = this.handleEscape.bind(this);
	    this.handleTab = this.handleTab.bind(this);
	    this.onOpened = this.onOpened.bind(this);
	    this.onClosed = this.onClosed.bind(this);
	    this.manageFocusAfterClose = this.manageFocusAfterClose.bind(this);
	    this.clearBackdropAnimationTimeout = this.clearBackdropAnimationTimeout.bind(this);
	    this.trapFocus = this.trapFocus.bind(this);
	    this.state = {
	      isOpen: false
	    };
	  }

	  componentDidMount() {
	    const {
	      isOpen,
	      autoFocus,
	      onEnter
	    } = this.props;

	    if (isOpen) {
	      this.init();
	      this.setState({
	        isOpen: true
	      });

	      if (autoFocus) {
	        this.setFocus();
	      }
	    }

	    if (onEnter) {
	      onEnter();
	    } // traps focus inside the Offcanvas, even if the browser address bar is focused


	    document.addEventListener('focus', this.trapFocus, true);
	    this._isMounted = true;
	  }

	  componentDidUpdate(prevProps, prevState) {
	    if (this.props.isOpen && !prevProps.isOpen) {
	      this.init();
	      this.setState({
	        isOpen: true
	      });
	      return;
	    } // now Offcanvas Dialog is rendered and we can refer this._element and this._dialog


	    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
	      this.setFocus();
	    }

	    if (this._element && prevProps.zIndex !== this.props.zIndex) {
	      this._element.style.zIndex = this.props.zIndex;
	    }
	  }

	  componentWillUnmount() {
	    this.clearBackdropAnimationTimeout();

	    if (this.props.onExit) {
	      this.props.onExit();
	    }

	    if (this._element) {
	      this.destroy();

	      if (this.props.isOpen || this.state.isOpen) {
	        this.close();
	      }
	    }

	    document.removeEventListener('focus', this.trapFocus, true);
	    this._isMounted = false;
	  }

	  trapFocus(ev) {
	    if (!this.props.trapFocus) {
	      return;
	    }

	    if (!this._element) //element is not attached
	      return;
	    if (this._dialog === ev.target) // initial focus when the Offcanvas is opened
	      return;
	    if (this.offcanvasIndex < Offcanvas.openCount - 1) // last opened offcanvas
	      return;
	    const children = this.getFocusableChildren();

	    for (let i = 0; i < children.length; i++) {
	      // focus is already inside the Offcanvas
	      if (children[i] === ev.target) return;
	    }

	    if (children.length > 0) {
	      // otherwise focus the first focusable element in the Offcanvas
	      ev.preventDefault();
	      ev.stopPropagation();
	      children[0].focus();
	    }
	  }

	  onOpened(node, isAppearing) {
	    this.props.onOpened();
	    (this.props.offcanvasTransition.onEntered || noop)(node, isAppearing);
	  }

	  onClosed(node) {
	    const {
	      unmountOnClose
	    } = this.props; // so all methods get called before it is unmounted

	    this.props.onClosed();
	    (this.props.offcanvasTransition.onExited || noop)(node);

	    if (unmountOnClose) {
	      this.destroy();
	    }

	    this.close();

	    if (this._isMounted) {
	      this.setState({
	        isOpen: false
	      });
	    }
	  }

	  setFocus() {
	    if (this._dialog && typeof this._dialog.focus === 'function') {
	      this._dialog.focus();
	    }
	  }

	  getFocusableChildren() {
	    return this._element.querySelectorAll(focusableElements.join(', '));
	  }

	  getFocusedChild() {
	    let currentFocus;
	    const focusableChildren = this.getFocusableChildren();

	    try {
	      currentFocus = document.activeElement;
	    } catch (err) {
	      currentFocus = focusableChildren[0];
	    }

	    return currentFocus;
	  } // not mouseUp because scrollbar fires it, shouldn't close when user scrolls


	  handleBackdropClick(e) {
	    if (e.target === this._mouseDownElement) {
	      e.stopPropagation();
	      const backdrop = this._backdrop;
	      if (!this.props.isOpen || this.props.backdrop !== true) return;

	      if (backdrop && e.target === backdrop && this.props.toggle) {
	        this.props.toggle(e);
	      }
	    }
	  }

	  handleTab(e) {
	    if (e.which !== 9) return;
	    if (this.offcanvasIndex < Offcanvas.openCount - 1) return; // last opened offcanvas

	    const focusableChildren = this.getFocusableChildren();
	    const totalFocusable = focusableChildren.length;
	    if (totalFocusable === 0) return;
	    const currentFocus = this.getFocusedChild();
	    let focusedIndex = 0;

	    for (let i = 0; i < totalFocusable; i += 1) {
	      if (focusableChildren[i] === currentFocus) {
	        focusedIndex = i;
	        break;
	      }
	    }

	    if (e.shiftKey && focusedIndex === 0) {
	      e.preventDefault();
	      focusableChildren[totalFocusable - 1].focus();
	    } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
	      e.preventDefault();
	      focusableChildren[0].focus();
	    }
	  }

	  handleBackdropMouseDown(e) {
	    this._mouseDownElement = e.target;
	  }

	  handleEscape(e) {
	    if (this.props.isOpen && e.keyCode === keyCodes.esc && this.props.toggle) {
	      if (this.props.keyboard) {
	        e.preventDefault();
	        e.stopPropagation();
	        this.props.toggle(e);
	      }
	    }
	  }

	  init() {
	    try {
	      this._triggeringElement = document.activeElement;
	    } catch (err) {
	      this._triggeringElement = null;
	    }

	    if (!this._element) {
	      this._element = document.createElement('div');

	      this._element.setAttribute('tabindex', '-1');

	      this._element.style.position = 'relative';
	      this._element.style.zIndex = this.props.zIndex;
	      this._mountContainer = getTarget(this.props.container);

	      this._mountContainer.appendChild(this._element);
	    }

	    this._originalBodyPadding = getOriginalBodyPadding();
	    conditionallyUpdateScrollbar();

	    if (Offcanvas.openCount === 0 && this.props.backdrop && !this.props.scrollable) {
	      document.body.style.overflow = 'hidden';
	    }

	    this.offcanvasIndex = Offcanvas.openCount;
	    Offcanvas.openCount += 1;
	  }

	  destroy() {
	    if (this._element) {
	      this._mountContainer.removeChild(this._element);

	      this._element = null;
	    }

	    this.manageFocusAfterClose();
	  }

	  manageFocusAfterClose() {
	    if (this._triggeringElement) {
	      const {
	        returnFocusAfterClose
	      } = this.props;
	      if (this._triggeringElement.focus && returnFocusAfterClose) this._triggeringElement.focus();
	      this._triggeringElement = null;
	    }
	  }

	  close() {
	    this.manageFocusAfterClose();
	    Offcanvas.openCount = Math.max(0, Offcanvas.openCount - 1);
	    document.body.style.overflow = null;
	    setScrollbarWidth(this._originalBodyPadding);
	  }

	  render() {
	    const {
	      direction,
	      unmountOnClose
	    } = this.props;

	    if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
	      const isOffcanvasHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
	      this._element.style.display = isOffcanvasHidden ? 'none' : 'block';
	      const {
	        className,
	        backdropClassName,
	        cssModule,
	        isOpen,
	        backdrop,
	        role,
	        labelledBy,
	        style
	      } = this.props;
	      const offcanvasAttributes = {
	        onKeyUp: this.handleEscape,
	        onKeyDown: this.handleTab,
	        'aria-labelledby': labelledBy,
	        role,
	        tabIndex: '-1'
	      };
	      const hasTransition = this.props.fade;

	      const offcanvasTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), this.props.offcanvasTransition), {}, {
	        baseClass: hasTransition ? this.props.offcanvasTransition.baseClass : '',
	        timeout: hasTransition ? this.props.offcanvasTransition.timeout : 0
	      });

	      const backdropTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), this.props.backdropTransition), {}, {
	        baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
	        timeout: hasTransition ? this.props.backdropTransition.timeout : 0
	      });

	      const Backdrop = backdrop && (hasTransition ? /*#__PURE__*/React.createElement(Fade, _extends({}, backdropTransition, {
	        in: isOpen && !!backdrop,
	        innerRef: c => {
	          this._backdrop = c;
	        },
	        cssModule: cssModule,
	        className: mapToCssModules(classNames('offcanvas-backdrop', backdropClassName), cssModule),
	        onClick: this.handleBackdropClick,
	        onMouseDown: this.handleBackdropMouseDown
	      })) : /*#__PURE__*/React.createElement("div", {
	        className: mapToCssModules(classNames('offcanvas-backdrop', 'show', backdropClassName), cssModule),
	        onClick: this.handleBackdropClick,
	        onMouseDown: this.handleBackdropMouseDown
	      }));
	      const attributes = omit(this.props, propsToOmit);
	      return /*#__PURE__*/React.createElement(Portal$1, {
	        node: this._element
	      }, /*#__PURE__*/React.createElement(Fade, _extends({}, attributes, offcanvasAttributes, offcanvasTransition, {
	        in: isOpen,
	        onEntered: this.onOpened,
	        onExited: this.onClosed,
	        cssModule: cssModule,
	        className: mapToCssModules(classNames('offcanvas', className, `offcanvas-${direction}`), cssModule),
	        innerRef: c => {
	          this._dialog = c;
	        },
	        style: _objectSpread2(_objectSpread2({}, style), {}, {
	          visibility: isOpen ? 'visible' : 'hidden'
	        })
	      }), this.props.children), Backdrop);
	    }

	    return null;
	  }

	  clearBackdropAnimationTimeout() {
	    if (this._backdropAnimationTimeout) {
	      clearTimeout(this._backdropAnimationTimeout);
	      this._backdropAnimationTimeout = undefined;
	    }
	  }

	}

	Offcanvas.propTypes = propTypes$k;
	Offcanvas.defaultProps = defaultProps$k;
	Offcanvas.openCount = 0;
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	});
	({
	  children: propTypes.exports.node,
	  className: propTypes.exports.string,
	  close: propTypes.exports.object,
	  closeAriaLabel: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  tag: tagPropType,
	  toggle: propTypes.exports.func,
	  wrapTag: tagPropType
	});
	({
	  children: propTypes.exports.node,
	  className: propTypes.exports.string,
	  listClassName: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  size: propTypes.exports.string,
	  tag: tagPropType,
	  listTag: tagPropType,
	  'aria-label': propTypes.exports.string
	});
	({
	  active: propTypes.exports.bool,
	  children: propTypes.exports.node,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  disabled: propTypes.exports.bool,
	  tag: tagPropType
	});
	({
	  'aria-label': propTypes.exports.string,
	  children: propTypes.exports.node,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  next: propTypes.exports.bool,
	  previous: propTypes.exports.bool,
	  first: propTypes.exports.bool,
	  last: propTypes.exports.bool,
	  tag: tagPropType
	});

	/**
	 * TabContext
	 * {
	 *  activeTabId: PropTypes.any
	 * }
	 */

	const TabContext = React.createContext({});

	const propTypes$e = {
	  tag: tagPropType,
	  activeTab: propTypes.exports.any,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	};
	const defaultProps$e = {
	  tag: 'div'
	};

	class TabContent extends react.exports.Component {
	  static getDerivedStateFromProps(nextProps, prevState) {
	    if (prevState.activeTab !== nextProps.activeTab) {
	      return {
	        activeTab: nextProps.activeTab
	      };
	    }

	    return null;
	  }

	  constructor(props) {
	    super(props);
	    this.state = {
	      activeTab: this.props.activeTab
	    };
	  }

	  render() {
	    const {
	      className,
	      cssModule,
	      tag: Tag
	    } = this.props;
	    const attributes = omit(this.props, Object.keys(propTypes$e));
	    const classes = mapToCssModules(classNames('tab-content', className), cssModule);
	    return /*#__PURE__*/React.createElement(TabContext.Provider, {
	      value: {
	        activeTabId: this.state.activeTab
	      }
	    }, /*#__PURE__*/React.createElement(Tag, _extends({}, attributes, {
	      className: classes
	    })));
	  }

	}
	TabContent.propTypes = propTypes$e;
	TabContent.defaultProps = defaultProps$e;
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  tabId: propTypes.exports.any
	});
	({
	  children: propTypes.exports.node,
	  className: propTypes.exports.string,
	  closeClassName: propTypes.exports.string,
	  closeAriaLabel: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  color: propTypes.exports.string,
	  fade: propTypes.exports.bool,
	  isOpen: propTypes.exports.bool,
	  toggle: propTypes.exports.func,
	  tag: tagPropType,
	  transition: propTypes.exports.shape(Fade.propTypes),
	  innerRef: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.string, propTypes.exports.func])
	});
	({
	  color: 'success',
	  isOpen: true,
	  tag: 'div',
	  closeAriaLabel: 'Close',
	  fade: true,
	  transition: _objectSpread2(_objectSpread2({}, Fade.defaultProps), {}, {
	    unmountOnExit: true
	  })
	});
	({
	  children: propTypes.exports.node,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  fade: propTypes.exports.bool,
	  isOpen: propTypes.exports.bool,
	  tag: tagPropType,
	  transition: propTypes.exports.shape(Fade.propTypes),
	  innerRef: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.string, propTypes.exports.func])
	});
	({
	  isOpen: true,
	  tag: 'div',
	  fade: true,
	  transition: _objectSpread2(_objectSpread2({}, Fade.defaultProps), {}, {
	    unmountOnExit: true
	  })
	});
	({
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  innerRef: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.string, propTypes.exports.func])
	});
	({
	  tag: tagPropType,
	  icon: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.node]),
	  wrapTag: tagPropType,
	  toggle: propTypes.exports.func,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  children: propTypes.exports.node,
	  closeAriaLabel: propTypes.exports.string,
	  charCode: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.number]),
	  close: propTypes.exports.object
	});
	({
	  tag: tagPropType,
	  active: propTypes.exports.bool,
	  disabled: propTypes.exports.bool,
	  color: propTypes.exports.string,
	  action: propTypes.exports.bool,
	  className: propTypes.exports.any,
	  cssModule: propTypes.exports.object
	});
	({
	  tag: tagPropType,
	  className: propTypes.exports.any,
	  cssModule: propTypes.exports.object
	});
	({
	  tag: tagPropType,
	  className: propTypes.exports.any,
	  cssModule: propTypes.exports.object
	});

	const _excluded$4 = ["className", "cssModule", "tag", "type"];
	const propTypes$5 = {
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  type: propTypes.exports.string
	};
	const defaultProps$5 = {
	  tag: 'ul'
	};
	const List = react.exports.forwardRef((props, ref) => {
	  const {
	    className,
	    cssModule,
	    tag: Tag,
	    type
	  } = props,
	        attributes = _objectWithoutProperties(props, _excluded$4);

	  const classes = mapToCssModules(classNames(className, type ? `list-${type}` : false), cssModule);
	  return /*#__PURE__*/React.createElement(Tag, _extends({}, attributes, {
	    className: classes,
	    ref: ref
	  }));
	});
	List.name = 'List';
	List.propTypes = propTypes$5;
	List.defaultProps = defaultProps$5;

	const _excluded$3 = ["className", "cssModule", "tag"];
	const propTypes$4 = {
	  tag: tagPropType,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object
	};
	const defaultProps$4 = {
	  tag: 'li'
	};
	const ListInlineItem = react.exports.forwardRef((props, ref) => {
	  const {
	    className,
	    cssModule,
	    tag: Tag
	  } = props,
	        attributes = _objectWithoutProperties(props, _excluded$3);

	  const classes = mapToCssModules(classNames(className, 'list-inline-item'), cssModule);
	  return /*#__PURE__*/React.createElement(Tag, _extends({}, attributes, {
	    className: classes,
	    ref: ref
	  }));
	});
	ListInlineItem.name = 'ListInlineItem';
	ListInlineItem.propTypes = propTypes$4;
	ListInlineItem.defaultProps = defaultProps$4;

	const omitKeys$3 = ['defaultOpen'];
	class UncontrolledButtonDropdown extends react.exports.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      isOpen: props.defaultOpen || false
	    };
	    this.toggle = this.toggle.bind(this);
	  }

	  toggle() {
	    this.setState({
	      isOpen: !this.state.isOpen
	    });
	  }

	  render() {
	    return /*#__PURE__*/React.createElement(ButtonDropdown$1, _extends({
	      isOpen: this.state.isOpen,
	      toggle: this.toggle
	    }, omit(this.props, omitKeys$3)));
	  }

	}
	UncontrolledButtonDropdown.propTypes = _objectSpread2({
	  defaultOpen: propTypes.exports.bool
	}, ButtonDropdown$1.propTypes);

	const omitKeys$2 = ['toggleEvents', 'defaultOpen'];
	const propTypes$3 = {
	  defaultOpen: propTypes.exports.bool,
	  toggler: propTypes.exports.string.isRequired,
	  toggleEvents: propTypes.exports.arrayOf(propTypes.exports.string)
	};
	const defaultProps$3 = {
	  toggleEvents: defaultToggleEvents
	};

	class UncontrolledCollapse extends react.exports.Component {
	  constructor(props) {
	    super(props);
	    this.togglers = null;
	    this.removeEventListeners = null;
	    this.toggle = this.toggle.bind(this);
	    this.state = {
	      isOpen: props.defaultOpen || false
	    };
	  }

	  componentDidMount() {
	    this.togglers = findDOMElements(this.props.toggler);

	    if (this.togglers.length) {
	      this.removeEventListeners = addMultipleEventListeners(this.togglers, this.toggle, this.props.toggleEvents);
	    }
	  }

	  componentWillUnmount() {
	    if (this.togglers.length && this.removeEventListeners) {
	      this.removeEventListeners();
	    }
	  }

	  toggle(e) {
	    this.setState(({
	      isOpen
	    }) => ({
	      isOpen: !isOpen
	    }));
	    e.preventDefault();
	  }

	  render() {
	    return /*#__PURE__*/React.createElement(Collapse$1, _extends({
	      isOpen: this.state.isOpen
	    }, omit(this.props, omitKeys$2)));
	  }

	}

	UncontrolledCollapse.propTypes = propTypes$3;
	UncontrolledCollapse.defaultProps = defaultProps$3;

	const omitKeys$1 = ['defaultOpen'];
	class UncontrolledDropdown extends react.exports.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      isOpen: props.defaultOpen || false
	    };
	    this.toggle = this.toggle.bind(this);
	  }

	  toggle(e) {
	    const isOpen = !this.state.isOpen;
	    this.setState({
	      isOpen
	    }, () => {
	      if (this.props.onToggle) {
	        this.props.onToggle(e, isOpen);
	      }
	    });
	  }

	  render() {
	    return /*#__PURE__*/React.createElement(Dropdown$1, _extends({
	      isOpen: this.state.isOpen,
	      toggle: this.toggle
	    }, omit(this.props, omitKeys$1)));
	  }

	}
	UncontrolledDropdown.propTypes = _objectSpread2({
	  defaultOpen: propTypes.exports.bool,
	  onToggle: propTypes.exports.func
	}, Dropdown$1.propTypes);

	const omitKeys = ['defaultOpen'];
	class UncontrolledTooltip extends react.exports.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      isOpen: props.defaultOpen || false
	    };
	    this.toggle = this.toggle.bind(this);
	  }

	  toggle() {
	    this.setState({
	      isOpen: !this.state.isOpen
	    });
	  }

	  render() {
	    return /*#__PURE__*/React.createElement(Tooltip$1, _extends({
	      isOpen: this.state.isOpen,
	      toggle: this.toggle
	    }, omit(this.props, omitKeys)));
	  }

	}
	UncontrolledTooltip.propTypes = _objectSpread2({
	  defaultOpen: propTypes.exports.bool
	}, Tooltip$1.propTypes);
	({
	  tag: tagPropType,
	  type: propTypes.exports.string,
	  size: propTypes.exports.string,
	  color: propTypes.exports.string,
	  className: propTypes.exports.string,
	  cssModule: propTypes.exports.object,
	  children: propTypes.exports.string
	});

	_objectSpread2(_objectSpread2({}, Col$1.propTypes), {}, {
	  color: propTypes.exports.string,
	  tag: tagPropType,
	  animation: propTypes.exports.oneOf(['glow', 'wave']),
	  innerRef: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.func, propTypes.exports.string]),
	  size: propTypes.exports.oneOf(['lg', 'sm', 'xs'])
	});
	({
	  size: propTypes.exports.string,
	  color: propTypes.exports.string,
	  outline: propTypes.exports.bool,
	  className: propTypes.exports.string,
	  tag: tagPropType
	});

	(() => {
	  if (typeof window !== 'object' || typeof window.CustomEvent === 'function') return;

	  const CustomEvent = (event, params) => {
	    params = params || {
	      bubbles: false,
	      cancelable: false,
	      detail: null
	    };
	    var evt = document.createEvent('CustomEvent');
	    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	    return evt;
	  };

	  window.CustomEvent = CustomEvent;
	})();

	(() => {
	  if (typeof Object.values === 'function') return;

	  const values = O => Object.keys(O).map(key => O[key]);

	  Object.values = values;
	})();

	var img$5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAWGSURBVHgBtVdviFRVFD/33vdmdlZ3d9Y13d3UfSFBlNKI2h+oHI2oINA+CAWBSl80imY/VaA5goFENIrUJhi7BSFBwQoRBOU8Q2wJtV0TCcQaW2lXWt1Zd+b9u/86921rGZY72+wP3r599717z+/8zrnn3CGAyB3JOeOSFIdD+8CxF9/eD3OIDR++Vlgxn29qVGr9vuf3l6gZlITuDiLmaM42whxDhXam4hNHa5UzzzEBEcms71FQgVWGOYasWpeuexZEXG8xz9ZLvbkM59LxvQbg0h6EOYYMWKmqGUSWSG9+L5exBMis4Aoi39JasAmYY8ggUQ4k2kspmKd5lgqu1/FIQlhJEjGHIfjhl960uauqVY48G3ikQHJ5P5WRTJsHUU1qGdiQ7ck57xbfqvtO+OTsxVy2Z7sjA4rONuoolBD4JEO5UI5RQPoWEClbUglS7Egn6q7EhrsXlVOJVJFo2oK2iCFApJemIlKOwAcVMJJsn8jdt6jJWd7WWII6Y3GKlVd3tjiJjqs55dsQodOebzvUeM8xCQmLwL5jwlm7pAXqjWxvLo7/yvYmSCwuOzTpQRQqUMIDowBwVKBx+W+Qshmg93DhotW14dAbOagTvPOdvVd8mTZrpywKjUtHYpt+NQFGgZIhYS+oQGdTEjwP4OOv/TxQnYY6wf+5Nf35j+MF8/8KVMFq9+IQSBGVKA9VSSgNkGBwZ0sD9H/JYNKuQl2hAM6fS8KpkUloTdkAjAIHAlGgDAExpFB6gwaU58xZBlZLBEhpHdQJhBJHlBNw4vJ10FLHYxJJREHDEEUp+oVQ8eCx0xzGrhIgtjDTMtme1x34n1i5uWer1roLHYaRSghnhydiEtrCcuwv7KcDhz9zJYBrPva5jCeFI01ANGAO0GK2MHsSK547mKWUFojxqc2Lx4aveaDQTlRJlM598Y471Y5l+oC5EyamCFyeb0Jgri5tWWceK7y5G2pAZmshndnyfoFRq6jREZoSYLf58TtZxe6DSU8bgz2xzelJjx58uRiNy2z1dAZjxqBh2XWYd88YNihK8MKeTUsKWJ8KSd/JnTsv3crwmu2FLGi2UQm6Bee0Ko6uo4Xm1VfASvu47zlM/PQ72K3Jwe93HV5l5rDpyQsevPeomow6FOcZwttAVmyQnk2sJsxXijHDEgoSsng9uyz7eHnYPTZ0w+NcPr1k7cYj6M8+pchDWkFKKwIsIWH+yjGwm8N4jYkLYyBC7uqAPj06MBjcRGDUHQxGTw71L1jTeYnKZofoxnYVWiDKSbCakQTDFRX6o2kaF9+09JEnYPjbb46bucsefuY7fIfe42v8DBTVdlOECl4lrBHDisb9axV38tfxPecPfdo9bfymEPwTJnspI7uJpRxgCpKLq1isQtACjWBItMSLw3qJRzn0tVej3ArHCG4ouy2ExEKsJZYGnO9i5Pe4O/a5t7LzrwRuyPvCB68SS+ZRgTRNCqzlXpydeHgx+XFcSdIFgtwVk8LvEws9MF6j4RK11Db3lb3uf61/WwIxia09DmWyiEQcmuKYRJHW3KhAyF+KkDjTaVIZ4/2MwTa3O3/btk5nQmCwb0dJ2Xw9uljWEYtbN5iAgxFjyofYa8woLDolVpmZ8XgezBCjp74qdzzwZIhl9amYuY07XKMCiuAJmwKbxwmGCY9ZatWJfH50puvOSIFpnOnpNkc1FzDZpl3HABBqYyyoyQDSN5DPl2pYsjYCU5BHdZyEhgQWbKRALR0nJmrxEdSImgkIm/aZu9mGaNGooIGaZkZKJ3btcqFG1ExgcH93GZ129VQDNRWOmGDgHxdmgVmEIFb+aHzHrQf0z/4uRM3yz5qAANqHZv++zUoDe2uXf9YE4jDgz2uMfgnFd01JhlniDy9fxD8O9VF0AAAAAElFTkSuQmCC";

	var img$4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtEAAABZCAYAAAD4tXibAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAoFSURBVHgB7d1NUhtJGgbglIBe9Iq5AXMDvCQkEXCD9gksTmD7BCOfwO4TNJzAnhOIKKnNsrnBcAR2HdEIMfnholuhwOZPP1XS80TIlTLYCzuofPVV5peNVBoMBgeNRuM/Nzc3u/m6nX/rNF9PWq3WcQIAgDVxTy4+z9dfJ3NxI375/fff45t69/0l+Q/08h/4kAAAYMWdnZ29ub6+Pv7Ol0/b7fZhDBo5QHdzgP7tR39Z/vphp9M5TQAAsKL6/f7O1tbW/370PTkXf8i5uNfMgzfpAVHOTgAAsMJygH4w8+Zc/Pb2OhwObxLAfFxcXV0dZhcJgLn50dJcZu/nn3/eaebrZQKYj3gs1o/HYwmAuRCgF+/PP//8V1Si+3l88MD3/r2IGuAxBoNBb2Ip2EUev261WucJgJnJOe5jvryLcb7PHumq9jJ57vp0t1zjBy5yLv53rIl+sPNGtLpLAE8Qmy4m7i87edzP1ZLdBMBM5AAdjSHe5fvrZTSBEKBfbjQafXroe/K/9W0uvm1xN1Uxmv7G2x2ICeAZiqLoNpvNuw5Al/lec6giDfB8/X5/e2trKyrQ0WHtMge/2Hvivjoj+cNJVPY/fufL/7S4u/udstVddOo4iP+QPNGdlwH6NAG8wFSQThsbG929vT1PuACeqAzQsRQ3nuzF5u3XAvTsxV6en3766eN4PD64O4Qwv/6bA/TflepGAliAWMoRSzryMG5GgjTAE90ToHU/WqJmAkjzF0s4YilHKjsCxWlQsaM8AfCg8hAQAbpChGhgYSJI5xv/qzy8iPfRkkmQBvgxAbqaLOcAFm5iQtiJ97lC3csB+8FOQQDrZup+KUBXiBANLIUgDfBjU/fJ8zJAOySvIoRoYGkEaYD7CdDVZ000sDTxSDImhjy8bc8Ua6TL07cA1lYO0Lubm5t/pG8HVX0RoKtJJRpYuqm2TeG43W4fJYA1UwbofvQmHo/HJ/v7+91EJQnRQGUURXHcbDbj0KdY2vHlr7/+OlJ9AdbF2dnZmzh2WoCuByEaqJTJIJ2sAwTWRATo6J8f4/LE6F6i0qyJBiolKi8xgZRvd2OZR2ywSQAr6uvXr28F6PpRiQYqaTAY9PIjzbuDWPRGBVZSHDgVm6pjLEDXixANVJYgDawyAbrehGig0gRpYBVNBujsfbvd/pSoFSEaqLzhcPguX+76RwvSQK1NBuhcJDhqtVrHidoRooFaKIqi22w2fyvfCtJALeWiQNzHYgP1Zb6nvReg60uIBmojV29288QTh7Js59dlruAc5gnoPAHUwGSAHo1GUQhw/6oxIRqoFUEaqJvyVNZYkiZArxB9ooFaicB8dXX1Kg8v8ms7AnUcUpAAKqgM0PHBv5tfFwL06lCJBmopDmApJ6adeL+xsdHd29s7SQAVMRGgd5O9HCtHJRqopZiIYkJK3yrSKU77Krt4ACxd+UH/jyRArywhGqit6SCdfYzWUQlgiaaelAnQK0qIBmptIkjfrjGM3quCNLAsAvT6sCYaWAlTaw/jAINeq9X6kAAWZCpAn5cB+jKxklSigZUQE1VMWOPx+HZzoYo0sEg5QO8K0OtFJRpYOUVRHDebzbu2d5/a7fb7BDAnEaA3Nzf7+QnYdnyQv76+fidArz4hGlhJg8Gglye0u0r0cQ7SRwlgxqYD9P7+fjexFiznAFZSp9Pp3dzc3K2J7pbH7QLMTBz0FG3sIkDn+82vAvR6UYkGVtpURdo6RWAmIkBHf/oYxwf2+OCeWCsq0cBKm6pI3278iU4eCeCZvn79+laARiUaWAvlaYYfy7d6twLPEl1/ovtPjAXo9SZEA2ujKIpus9m8WxstSANPIkAzSYgG1spgMDhoNBqf8zCWdAjSwKNMBuh8DzlqtVrHibUmRANrJ0+Gu3kyjEMRBGngQQI097GxEFg7eQKMLh2v8vAiv3bKzYY7CWBKtMeMAJ1flwI0k1SigbUVwXnimN6LPEG+joCdANK3AJ0v3QjQo9Eonli5P/A3IRpYa1NBOipNh4I0rLdog5nvC7F34kCA5nss5wDWWqyFjjXR6dvSjjh1rF8UxS8JWEtlgI4P1gf5dZED9CsBmvsI0cDamwjSMVFuN5vNz3EaWQLWysSTqd1k0zEPsJwDoDRRgYoJNG1sbHT39vZOErDypvdICNA8RCUaoJQnzMuYOBuNxpd4H8f6RmurBKw0AZrnUIkGuEdRFMfNZvN2SUcO1b1Wq/UhAStnKkBH+8vXAjSPoRINcI/9/f1oa3UbnKNHrIo0rJ57ArQKNI8mRAN8R6fT6QnSsJpygN69J0BfJngkyzkAHjAYDHqNRuM2QFvaAfUXAXpzc7Off563x+PxSTx5SvBEQjTAI0wG6ey43W4fJaB28s/yQb58FqB5Kcs5AB4hlnbky/vybbc8Dhiokej/nsPzbQX65ubmVwGal1CJBniCoii6zWbzLkCfljv5raOEiosAHW0rYxx7HcoPxvBsKtEAT5ArV8f5EfDrPIzgfBAbk+KQlgRUVmwKFqCZNZVogGfIk/JunoxjZ38EaL1loaIiQEd3nRgL0MySSjTAM7RarQjOr/LwIr92y4r0TgIqQ4BmnlSiAV7AccFQTZMButFoHOUPvscJZkiIBnghQRqqZTgcfsyXdzEWoJkXIRpgBgRpqIay/WQ3V6Fj8+/rTqdzmmAOrIkGmIEIzBGc8/A8v24DdWw+TMDCTAbo0Wh0KEAzTyrRADMU7e7KinQE6Mv8KPkwNiEmYG7Kn7vPeXiQvj0Jim45fu6YK5VogBmKg1eiIp3D85f8Nk5FU5GGOZr44HqQ/llKJUAzdyrRAHNSFMVxs9l8E+ONjY3u3t7eSQJmptyLEBXo+KBqLwILJUQDzNFgMPiUq9JvYyxIw+zYzMuyWc4BMEedTuddHPIQ4zh2OHrXJuBFBGiqQIgGmLM4Je0uSMfhD4I0PN9UgD4XoFkWyzkAFmQwGPQajcZtgM7XXqvV+pCAR/tOgL5MsARCNMACDYfDOEUtTlOLR9CvBAB4nBygdzc3N/v5A+h2fntatrHz88PSCNEAC1YUxS/X19fnHkHD40wG6PF4fLK/v99NsGRCNABQWWdnZ29Go9EnAZqqsbEQAKikCNDR1SYCdGzOFaCpEpVoAKBy7gJ0jCNAR5ebBBWiEg0AVEq0gRSgqTqVaACgMiJARz/1GAvQVJkQDQBUwmSAzt632+1PCSpKiAYAlm4yQDcajaNWq3WcoMKEaABgqYbDYRxAFAcRCdDUhhANACxNDtC/5Us3V6EvR6NRHON9nqAGhGgAYOH6/f721tZWVKAFaGppMwEALFAZoPt5uJtfFzlAvxagqRuVaABgYaYD9NXVVVSgLxLUjBANACxEGaD/yMOdJEBTc04sBAAWIgfmy5ubm5MkQAMAwNNERTpBzf0fkVLhjOr/vKwAAAAASUVORK5CYII=";

	var img$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVAAAABPCAYAAAC9H50jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQgSURBVHgB7d3fURprGMDhXQbvU0JK0GvA0Q5OB8mpIKaCYyo4poKYClKCzoB4eSwhJeRekLOvs2YIKih+wP55nhnHnUhuf7MfC++bZQAAsGlXV1f/xE9c5xkALxLhnM1mp3Gd5/lBNwNgpdFo9K2I58fi51en0/nc6/Vu3IECrBDxLH7dx3MymRwXbuLf3YECPOPi4uJdt9uNeP61GM8goABPiHju7e1dFJf7xc/PMp4/51/jCA+wYDGet7e3j+IZBBRgThHP92U832dL4hkEFKD0mngGAQXIXh/PIKBA6y3E86aM569V/6+TAbRYEc/9deIZBBRorYhnt9u9j+fd3d3318QzOMIDrTQcDo+KXz/yPH8X8Tw8PPyYvZI7UKB1rq+vPxThvIh4zmazr+vEMwgo0CoRz+l0eh7XRTy/DAaDk2xNAgq0xng8/rQQz9PsDQQUaIWY5Vm813kW1yniGTxEAhpvfhByqngGAQUabT6ehc/9fv8sS0RAgcZaWMHxd6/XO88SElCgkeanyJcrOM6zxAQUaJznVnCkJqBAY5SDkH8Ul0ebjmew0gNohJes4EjN50CB2psbR7d0BUdqjvBAra0zCDkVAQVqa5fxDAIK1NKu4xkEFKiddVdwpOYhElAr5RT5/7IdxzMIKFAbDys4HqbI7zKewREeqIUUKzhScwcKVF6qFRypCShQaSlXcKQmoEBlxTi6lCs4UvMeKFBJm5oin5KAApVTh3gGAQUqZZMrOFITUKAyRqPRv8Wv+4dEm1jBkZqHSEAllFPkT2IQch3iGdyBAju3rRUcqQkosDPzU+TrFs/gCA/sxBMrOA7qFM8goMDW7WoFR2qO8MBWVWEQcioCCmxNk+IZBBTYiqbFMwgosHFVWcGRmodIwEZVaQVHagIKbEzVVnCk5ggPbEQMQp5MJmdVWsGRmoACyS1Mkf9apSnyKTnCA0mNx+NPVV3BkZqAAsnELM/iuH4/v7PKg5BTcYQHkqjLFPmUBBR4szbGMwgo8CZ1WsGRmoACa6vbCo7UPEQC1lLHFRypuQMFXqUchBx3nrVbwZGagAIvVvcVHKk5wgMv0oQVHKm5AwVWauIszxQEFFhKPJ8noMCzxHM5AQWeJJ6reYgEPBKDkBdWcByI52Pdh4vhcHiU53l8JWs/BqAW/3RZ/P7exg/HQps9TJEvLqMDjVrBkdr9EX7hu6x/viDPT4uIfsmAxltcwTGdTk/E83l5Ec/4NsG3ZS8q/n48GAwuM6Cx5qfIN3UFR2qdIo4fVr0ojvYZ0FiLKzjE82Xy0Wg0ywCyds3yTCGewnt/AxDPNcRT+Pgu69GK1132+/3jDIDf4j3QlU/Y4+NMGQB/6MTT9WURjb/5LCjAY7+/yll+nCmeyB+VE6ZvyvdELjMAHvkfhSkIGMM9vh4AAAAASUVORK5CYII=";

	var img$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAcSSURBVHgBxZZ7TFvXGcDvw/f6+n39wAYTE0OMMY/EJBgMpXk0S0I6mnSr1mzqkmgp67amm5pV6x9ZMwV12rQ/Ji3q1mpKK2VrmrZDFdrapVMCJISkPBwgwjw9GzA2fmEbG7/uvb7XvgOiRKRam0BA/f11dc/5zvfTd+757gGAFdj8rh98OGk5AWwgn/b382+Pus/++YPurffeQfcexqPeqguX3mftA0OlwAZSvaWk5k9vvzMcjkUPvfXW59wHJKwTY7UtrZ9OihAsD9hAGDKbUqtyS7+4ccWuKd9ifEBCwMKFAA/EODyMADYQBqZcZQZ9scdhdbEwWHtformlBU3GkwwCwShL0xFgAylUKv0UleYuliQd8PuU9yWO1tebunu7R0CYw4FZcB7YYJJUZrHaNBBfCIH3JdgMbei/8cVMKpvGURihl94Nzk5+C1hHIhEWH5pOme/mY7MZkMdPUFm4tbVVvizh9rgURIJMZXlIhsVQ1EaEzwIY+iKwjlgsVprMwlcvdFMGlMfnwixAT3uiUbW6VLsskU6RIElRmTQCZYNceu8V28ApCAJcwDrS0GBMotl4bODOxN9gDFexHJpxu90EzIPvSiwWgaDTaYClGdIKxSrG/tN1C0gzC8A6k6VT/pHb1yMT80I0S6WZeCwBE2kWuXtEedzlpvHLEz9R/nfOEx6Zso8Fo9FMt9vxOrAO2DyhfXZncrvL7ZkDCfdwisHkIAiyQgEu5HBQcllClZcr4PE4UEgIV02OT7hikcgMxucdlQp5p4B1QICimIfgtpI0zGRSxJzNMcOYdz9dWK7Pl3P5kjBnadLmPHUAWaRndlyQGXUH6irMwLDfKS6YF4eBdSAVibEztnHY4WOkkXm/F+TafIKyUqMCx6TBwJRjuRIgCA9UPlFXwA+SeTIvyex79pmGCZzh9g8OOpeGgcckSJCiGzcttzYVbq0rM5TowMjwAiqUy0U8MHJwl8m3LKGRKCzPNB7aSSCsQJjOxvwSyNwxOiBqvdlm/U3nR08Cj0lHj1MWBzehGRYGtMWVT/LBZAwX8ZWmSn18afz+v4Mnk0xqtFo5gqApiqFlC24/gVfqj3x88aMdr/7rnApYI10D9obZKLYnR6XeMT/npfNy83CEL+do1Uq9SIR3PCBRUVLct01TDMH6/KLRGUcSjZHkbNCb1pjKX2v75/Wfnvrs4h5gFYRZVvzXi5f3dw3TTTXbK/YOj0wwXq+XCoZCye11+4wCPpwwVWy6vjT3gf0+eend44QUP8PEQlxbyCWatA7Nyg2FCChAFawncbNUIG2HaeRy65nfzXxV8t5wWOzqnzLPhuDDHiJ/Z45MpOxub5mJLKQk5lpzYSrqH9bpCsHqYs7Pd5r0fUsx8MoFjnzneUfYT3JRXX0lSNBYJkkA0WQsE/L5g/7IPDfI4Zj9JFynb2g0mXfvuj3R2UmujH+h+ULldFR1utvOf+H2GKm2OiJp57iFYrOUWJMnV5SVFDFcHuZz2cfOvvzDXV334v7vl//80SYdUbjje0hhyY8hxskJp9x0KD4XmL1jG0RIjA+WbTNxZbKAXib9Y8fPXmpbijl8/pPX5pjNR1mrNZJwjA3xpQUFRVpt8WI7wnBFvpCkaOuCz/p5jUF09WTTEdvKfF95/Hp77eJb1sG6tnnokHCzbA8TugM7Ex5wzha4xUswk5znvn9ShXBiJxv3H7zWN9zIojmn3dcsM75rn32s0NQ/nZ+v1qrVKkGKVfgQaurqFhXd8srxxonFlOyXcz20B1y3TOdeau98IqjEf0XG7Tynd4aJu6I9kFiCHXvjjReldPoyDiJlhDcBvfPbc5/I8CKTSiEX6gxbpQuxhU5Bpv/355pPO78uB/QwiadqCv3v/fpEq4mKN2Vw3WguroRQqaQ6Oxcg2vss3jSMNii5eMEHV3x2ISaTSYQYmq/VidDM3L8PVonefJjAI1ViJc1/Oa+3iPELgbFe1udP2QmGCu0s3UYHyBzJQl+XRSE3nCjVF0lEYsWIGPO+3PzKkcSjrLvqltz09nuHXCLoD+6xWS+nu+tdHsSCVEbEoKLiXG1J1bGiIl3s5oe/eLanp+eRL8wP3Y4vYxBprkFCRZ+xtFInFOYAHIZNg1Q4oS2pLTOUm9Q5/Og/ViOwJonXjzck1Q7n3zVaM1ZiPKxfvBZAPCQLVVXv0GJcxGrUybtWu+aqJZY49tQBPzYVsFWVb168nAA0xMIZgxbXEEHrnQO7t9uBVbImib3VBlvQ7WkX4LkVDJWOS/KN4lAMUGrE6TZgDXCANZKDhS0JUPrqt390pkmhLCoIeN2DB/bUTgNrAAbWSHJe4coxlhi3KAX7QJivnLIPvPnSd+v7gDWwpu1YYmDgPF0mj7w/4nAMOV2zHc/tr7EA3xTDgYSq38Pygcfgf8LkKhlM7mjPAAAAAElFTkSuQmCC";

	var img$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEUSURBVHgBnVMBEcIwDEynoBLqgEqoBRQwCUjAARKGBBwwB4AChoIOBSXZPpDbldsducst6SdN8s0csZRSonPuRhD2E38iq2cdWW+M9waf49noyiwHSWK9lLo8gLfwzw1fdMeFUiGwJvrKYOwA/WDOtKliWx2Bt8DOGGfUtgNrZt3JLKJUEWAJcRIf7MwiHpfFSmKAnZUjca5wOsu2BmuysU9KIJmq7aJaQhdpca5sl4bWxf/yJXmAHRdtDsyoYP2i+gbfie0DushIrLUaoN6M2REOMmZJK08VEfeQyxoswpawGNJWjTyat2tA3HYaiYEj2thjAVQyKmRztkPc9M5C2MsUedKXQI9qym4P/MO67vZfv+QblbCKEfAIGHQAAAAASUVORK5CYII=";

	var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABfSURBVHgB7dRBDYBADETRX4KAlYAEJGABJWhA2SIBByABFJSOhu6NfckkPc1lkuLu1du4ImUAJtooiqk1jpm808weujSNokE28jTIrsIax0Ib66jWyE3eGzno8v73bT4RP7O7XAkWoAAAAABJRU5ErkJggg==";

	var HelloWorld = /*#__PURE__*/function (_React$Component) {
	  _inherits(HelloWorld, _React$Component);

	  var _super = _createSuper(HelloWorld);

	  function HelloWorld(props) {
	    _classCallCheck(this, HelloWorld);

	    return _super.call(this, props);
	  }

	  _createClass(HelloWorld, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      var frameHeight = 200;
	      var frames = 23;
	      var frame = 0;
	      setInterval(function () {
	        var frameOffset = ++frame % frames * -frameHeight;
	        var backgroundPosition = "0px " + frameOffset + "px";
	        var animdiv = document.querySelector('#animation');
	        var animdiv_m = document.querySelector('#animation_m');
	        animdiv.style.setProperty('background-position', backgroundPosition);
	        animdiv_m.style.setProperty('background-position', backgroundPosition);
	      }, 100);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
	        className: "header_back"
	      }, /*#__PURE__*/React.createElement(Row$1, {
	        className: "header"
	      }, /*#__PURE__*/React.createElement(Col$1, {
	        lg: 3,
	        md: 3,
	        xs: 6,
	        className: "header_l"
	      }, /*#__PURE__*/React.createElement("img", {
	        src: img$5,
	        alt: "logo_img",
	        style: {
	          float: "left"
	        }
	      }), /*#__PURE__*/React.createElement("p", {
	        className: "logo_p"
	      }, "hatom")), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 6,
	        md: 6,
	        xs: 12,
	        className: "header_m"
	      }, /*#__PURE__*/React.createElement("div", {
	        className: "header_mc"
	      }, /*#__PURE__*/React.createElement("div", {
	        className: "header_mc1"
	      }, /*#__PURE__*/React.createElement("a", {
	        className: "header_mp",
	        style: {
	          width: '56px'
	        }
	      }, "Markets"), /*#__PURE__*/React.createElement("a", {
	        className: "header_mp",
	        style: {
	          width: '83px'
	        }
	      }, "Governance"), /*#__PURE__*/React.createElement("a", {
	        className: "header_mp",
	        style: {
	          width: '43px'
	        }
	      }, "Prices"), /*#__PURE__*/React.createElement("a", {
	        className: "header_mp",
	        style: {
	          width: '35px'
	        }
	      }, "Docs"), /*#__PURE__*/React.createElement(Row$1, null, /*#__PURE__*/React.createElement(Col$1, null, /*#__PURE__*/React.createElement("a", {
	        className: "header_mp",
	        style: {
	          width: '90px',
	          color: '#3555F7'
	        }
	      }, "Hatom Token")), /*#__PURE__*/React.createElement(Col$1, null, /*#__PURE__*/React.createElement("div", {
	        style: {
	          width: '82px',
	          height: '2px',
	          background: '#102860',
	          borderRadius: '20px'
	        }
	      }))), /*#__PURE__*/React.createElement("div", {
	        style: {
	          marginTop: '7px',
	          marginLeft: '-30px',
	          width: '2px',
	          height: '2px',
	          background: '#00D395',
	          border: '1.5px solid rgba(0, 211, 149, 0.43)',
	          borderRadius: '2px'
	        }
	      })))), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 3,
	        md: 3,
	        xs: 6,
	        className: "header_r"
	      }, /*#__PURE__*/React.createElement("button", {
	        className: "header_rb"
	      }, /*#__PURE__*/React.createElement("p", null, "App")), /*#__PURE__*/React.createElement("div", {
	        className: "herder_rb_m1",
	        style: {
	          background: '#021326',
	          float: 'right'
	        }
	      }, /*#__PURE__*/React.createElement("img", {
	        src: img,
	        style: {
	          float: "left"
	        }
	      })), /*#__PURE__*/React.createElement("div", {
	        className: "header_rb_m"
	      }, /*#__PURE__*/React.createElement("img", {
	        src: img$1,
	        style: {
	          float: "left"
	        }
	      }), /*#__PURE__*/React.createElement("p", null, "Elrond")))), /*#__PURE__*/React.createElement(Row$1, {
	        className: "header_t"
	      }, /*#__PURE__*/React.createElement(Col$1, {
	        lg: 4,
	        md: 4,
	        xs: 2
	      }), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 4,
	        md: 4,
	        xs: 10
	      }, /*#__PURE__*/React.createElement("p", {
	        className: "s_p2"
	      }, "Hatom Token"), /*#__PURE__*/React.createElement("p", {
	        className: "s_p1"
	      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 4,
	        md: 4,
	        xs: 2
	      }))), /*#__PURE__*/React.createElement(Row$1, {
	        className: "buy"
	      }, /*#__PURE__*/React.createElement(Col$1, {
	        lg: 2,
	        md: 2,
	        xs: 1
	      }), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 7,
	        md: 7,
	        xs: 12
	      }, /*#__PURE__*/React.createElement(Row$1, null, /*#__PURE__*/React.createElement(Col$1, {
	        lg: 6,
	        md: 6,
	        xs: 6
	      }, /*#__PURE__*/React.createElement("div", {
	        className: "buy_p1"
	      }, /*#__PURE__*/React.createElement("p", null, "$9,449,627.26"), /*#__PURE__*/React.createElement("p", {
	        style: {
	          color: '#179C64',
	          paddingLeft: '8px'
	        }
	      }, "Dividends")), /*#__PURE__*/React.createElement("p", {
	        className: "buy_p2"
	      }, "Paid out to Hatom Token Holders over 3 years")), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 6,
	        md: 6,
	        xs: 6
	      }, /*#__PURE__*/React.createElement("button", {
	        className: "buy_b"
	      }, /*#__PURE__*/React.createElement("p", null, "Buy Hatom Tokens"))))), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 2,
	        md: 2,
	        xs: 1
	      })), /*#__PURE__*/React.createElement(Row$1, {
	        className: "coin_m"
	      }, /*#__PURE__*/React.createElement(Col$1, {
	        lg: 1,
	        md: 1,
	        xs: 1
	      }), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 10,
	        md: 10,
	        xs: 10
	      }, /*#__PURE__*/React.createElement(Row$1, null, /*#__PURE__*/React.createElement(Col$1, {
	        lg: 3,
	        md: 3,
	        xs: 3,
	        style: {
	          width: '20%'
	        }
	      }, /*#__PURE__*/React.createElement("div", {
	        id: "animation_m"
	      })), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 7,
	        md: 7,
	        xs: 7
	      }), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 2,
	        md: 2,
	        xs: 3,
	        style: {
	          marginLeft: '-4%',
	          marginRight: '-4%',
	          width: '20%',
	          marginTop: '32px'
	        }
	      }))), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 1,
	        md: 1,
	        xs: 1
	      })), /*#__PURE__*/React.createElement(Row$1, {
	        className: "coin"
	      }, /*#__PURE__*/React.createElement(Col$1, {
	        lg: 1,
	        md: 1,
	        xs: 1
	      }), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 10,
	        md: 10,
	        xs: 10
	      }, /*#__PURE__*/React.createElement("div", {
	        className: "coin_p1"
	      }, /*#__PURE__*/React.createElement("p", null, "Features"), /*#__PURE__*/React.createElement("p", {
	        style: {
	          color: '#000000',
	          paddingLeft: '8px'
	        }
	      }, "of Hatom Protocol")), /*#__PURE__*/React.createElement(Row$1, null, /*#__PURE__*/React.createElement(Col$1, {
	        lg: 3,
	        md: 3,
	        xs: 3,
	        style: {
	          width: '20%'
	        }
	      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
	        style: {
	          display: 'flex'
	        }
	      }, /*#__PURE__*/React.createElement("p", {
	        className: "coin_pt"
	      }, "Earn"), /*#__PURE__*/React.createElement("div", {
	        className: "coin_back_t"
	      }, /*#__PURE__*/React.createElement("img", {
	        src: img$4,
	        alt: "coin_back_img",
	        style: {
	          float: "left",
	          width: '46vw'
	        }
	      }))), /*#__PURE__*/React.createElement("p", {
	        className: "coin_pc"
	      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.")), /*#__PURE__*/React.createElement("div", {
	        id: "animation"
	      }), /*#__PURE__*/React.createElement("div", {
	        style: {
	          paddingTop: '40px'
	        }
	      }, /*#__PURE__*/React.createElement("div", {
	        style: {
	          display: 'flex'
	        }
	      }, /*#__PURE__*/React.createElement("p", {
	        className: "coin_pt"
	      }, "Borrow"), /*#__PURE__*/React.createElement("div", {
	        className: "coin_back_b"
	      }, /*#__PURE__*/React.createElement("img", {
	        src: img$3,
	        alt: "coin_back_img",
	        style: {
	          float: "left",
	          width: '22vw'
	        }
	      }))), /*#__PURE__*/React.createElement("p", {
	        className: "coin_pc"
	      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")), /*#__PURE__*/React.createElement("div", null)), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 7,
	        md: 7,
	        xs: 7
	      }), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 2,
	        md: 2,
	        xs: 3,
	        style: {
	          marginLeft: '-4%',
	          marginRight: '-4%',
	          width: '20%',
	          marginTop: '32px'
	        }
	      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
	        className: "coin_pt"
	      }, "Dividends"), /*#__PURE__*/React.createElement("p", {
	        className: "coin_pc"
	      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. tortor, dignissim sit amet."), /*#__PURE__*/React.createElement("div", {
	        className: "coin_dot"
	      }), /*#__PURE__*/React.createElement("p", {
	        className: "coin_pc"
	      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. tort, dignissim sit ametent."), /*#__PURE__*/React.createElement("div", {
	        className: "coin_dot"
	      }), /*#__PURE__*/React.createElement("p", {
	        className: "coin_pc"
	      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. tort dignissim sit amet.ectetur adip from one ex-diivident date othe next"))))), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 1,
	        md: 1,
	        xs: 1
	      })), /*#__PURE__*/React.createElement(Row$1, {
	        className: "buy_m"
	      }, /*#__PURE__*/React.createElement(Col$1, {
	        lg: 2,
	        md: 2,
	        xs: 2
	      }), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 7,
	        md: 7,
	        xs: 10,
	        style: {
	          alignContent: 'center',
	          textAlign: '-webkit-center'
	        }
	      }, /*#__PURE__*/React.createElement("div", {
	        className: "buy_p12_m"
	      }, /*#__PURE__*/React.createElement("p", null, "Features"), /*#__PURE__*/React.createElement("p", {
	        style: {
	          color: '#000000',
	          paddingLeft: '8px'
	        }
	      }, " of Hatom")), /*#__PURE__*/React.createElement("div", {
	        className: "buy_p12_m"
	      }, /*#__PURE__*/React.createElement("p", {
	        style: {
	          color: '#000000',
	          paddingLeft: '80px'
	        }
	      }, "Token"))), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 2,
	        md: 2,
	        xs: 1
	      })), /*#__PURE__*/React.createElement(Row$1, {
	        className: "buy_m"
	      }, /*#__PURE__*/React.createElement(Col$1, {
	        lg: 2,
	        md: 2,
	        xs: 2
	      }), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 7,
	        md: 7,
	        xs: 8,
	        style: {
	          alignContent: 'center',
	          textAlign: '-webkit-center'
	        }
	      }, /*#__PURE__*/React.createElement("div", {
	        className: "buy_p11_m",
	        style: {
	          paddingLeft: '100px'
	        }
	      }, /*#__PURE__*/React.createElement("p", null, "Earn")), /*#__PURE__*/React.createElement("p", {
	        className: "buy_p22_m"
	      }, "Stake your Hatom tokens to earn a share of the protocol's revenue. Dividends are paid in EGLD, USDC, MEX, HTM, and RIDE.")), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 2,
	        md: 2,
	        xs: 2
	      })), /*#__PURE__*/React.createElement(Row$1, {
	        className: "buy_m"
	      }, /*#__PURE__*/React.createElement(Col$1, {
	        lg: 2,
	        md: 2,
	        xs: 2
	      }), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 7,
	        md: 7,
	        xs: 8,
	        style: {
	          alignContent: 'center',
	          textAlign: '-webkit-center'
	        }
	      }, /*#__PURE__*/React.createElement("div", {
	        className: "buy_p11_m",
	        style: {
	          paddingLeft: '100px'
	        }
	      }, /*#__PURE__*/React.createElement("p", null, "Vote")), /*#__PURE__*/React.createElement("p", {
	        className: "buy_p22_m"
	      }, "Decide which token should be listed next, and what upgrade or feature should be integrated into the protocol.")), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 2,
	        md: 2,
	        xs: 2
	      })), /*#__PURE__*/React.createElement(Row$1, {
	        className: "buy_m"
	      }, /*#__PURE__*/React.createElement(Col$1, {
	        lg: 2,
	        md: 2,
	        xs: 2
	      }), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 7,
	        md: 7,
	        xs: 8,
	        style: {
	          alignContent: 'center',
	          textAlign: '-webkit-center'
	        }
	      }, /*#__PURE__*/React.createElement("div", {
	        className: "buy_p11_m"
	      }, /*#__PURE__*/React.createElement("p", null, "Supply & Borrow")), /*#__PURE__*/React.createElement("p", {
	        className: "buy_p22_m"
	      }, "Hatom token holders can use the HTM Money Market to :"), /*#__PURE__*/React.createElement("div", {
	        className: "footer_1_m"
	      }), /*#__PURE__*/React.createElement("p", {
	        className: "buy_p22_m",
	        style: {
	          textAlign: 'left'
	        }
	      }, "Supply HTM and earn interest on their deposit."), /*#__PURE__*/React.createElement("div", {
	        className: "footer_1_m"
	      }), /*#__PURE__*/React.createElement("p", {
	        className: "buy_p22_m",
	        style: {
	          textAlign: 'left'
	        }
	      }, "Use HTM as collateral and take a loan of any available crypto asset.")), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 2,
	        md: 2,
	        xs: 2
	      })), /*#__PURE__*/React.createElement(Row$1, {
	        className: "buy_m"
	      }, /*#__PURE__*/React.createElement(Col$1, {
	        lg: 2,
	        md: 2,
	        xs: 2
	      }), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 7,
	        md: 7,
	        xs: 8,
	        style: {
	          alignContent: 'center',
	          textAlign: '-webkit-center'
	        }
	      }, /*#__PURE__*/React.createElement("div", {
	        className: "buy_p1_m"
	      }, /*#__PURE__*/React.createElement("p", null, "$9,449,627.26"), /*#__PURE__*/React.createElement("p", {
	        style: {
	          color: '#179C64',
	          paddingLeft: '8px'
	        }
	      }, "Dividends")), /*#__PURE__*/React.createElement("p", {
	        className: "buy_p2_m"
	      }, "Paid out to Hatom Token Holders over 3 years"), /*#__PURE__*/React.createElement("button", {
	        className: "buy_b_m"
	      }, /*#__PURE__*/React.createElement("p", null, "Buy Hatom Tokens"))), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 2,
	        md: 2,
	        xs: 2
	      })), /*#__PURE__*/React.createElement(Row$1, {
	        className: "sub"
	      }, /*#__PURE__*/React.createElement(Col$1, {
	        lg: 3,
	        md: 3,
	        xs: 1
	      }), /*#__PURE__*/React.createElement(Col$1, {
	        className: "sub_c",
	        lg: 6,
	        md: 6,
	        xs: 10
	      }, /*#__PURE__*/React.createElement("p", {
	        className: "sub_ct"
	      }, "Subscribe to Hatom newsletter"), /*#__PURE__*/React.createElement("p", {
	        className: "sub_cc"
	      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. tort dignissim sit ."), /*#__PURE__*/React.createElement("div", {
	        className: "sub_con"
	      }, /*#__PURE__*/React.createElement("div", {
	        class: "input-group sub_con1"
	      }, /*#__PURE__*/React.createElement("input", {
	        type: "search",
	        className: "form-control rounded search_sub",
	        placeholder: "Enter your email",
	        "aria-label": "Search",
	        "aria-describedby": "search-addon"
	      }), /*#__PURE__*/React.createElement("button", {
	        type: "button",
	        className: "btn btn-outline-primary sub_btn"
	      }, "Subscribe")), /*#__PURE__*/React.createElement("button", {
	        type: "button",
	        className: "btn btn-outline-primary sub_btn_m"
	      }, "Subscribe"))), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 3,
	        md: 3,
	        xs: 1
	      })), /*#__PURE__*/React.createElement(Row$1, {
	        style: {
	          background: '#031222',
	          paddingTop: '94px'
	        }
	      }, /*#__PURE__*/React.createElement(Col$1, {
	        lg: 3,
	        md: 3,
	        xs: 6
	      }, /*#__PURE__*/React.createElement("img", {
	        src: img$2,
	        alt: "logo_b_img",
	        className: "footer_logo"
	      }), /*#__PURE__*/React.createElement("p", {
	        className: "footer_l1"
	      }, "\xA9 2022 Hatom ,LLC.")), /*#__PURE__*/React.createElement(Col$1, {
	        className: "footer_c",
	        lg: 6,
	        md: 6,
	        xs: 12
	      }, /*#__PURE__*/React.createElement(Row$1, null, /*#__PURE__*/React.createElement(Col$1, {
	        lg: 4,
	        md: 4,
	        xs: 6
	      }, /*#__PURE__*/React.createElement("p", {
	        className: "footer_ct"
	      }, "Protocol"), /*#__PURE__*/React.createElement("p", {
	        className: "footer_cc"
	      }, "Markets"), /*#__PURE__*/React.createElement("p", {
	        className: "footer_cc"
	      }, "Prices"), /*#__PURE__*/React.createElement("p", {
	        className: "footer_cc"
	      }, "Docs")), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 4,
	        md: 4,
	        xs: 6
	      }, /*#__PURE__*/React.createElement("p", {
	        className: "footer_ct"
	      }, "Governance"), /*#__PURE__*/React.createElement("p", {
	        className: "footer_cc"
	      }, "Overview"), /*#__PURE__*/React.createElement("p", {
	        className: "footer_cc"
	      }, "Hatom token")), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 4,
	        md: 4,
	        xs: 6
	      }, /*#__PURE__*/React.createElement("p", {
	        className: "footer_ct"
	      }, "Security"), /*#__PURE__*/React.createElement("p", {
	        className: "footer_cc"
	      }, "Audits"), /*#__PURE__*/React.createElement("p", {
	        className: "footer_cc"
	      }, "Formal Verifications"), /*#__PURE__*/React.createElement("p", {
	        className: "footer_cc"
	      }, "Economic Security"), /*#__PURE__*/React.createElement("p", {
	        className: "footer_cc"
	      }, "Bug Bounty")))), /*#__PURE__*/React.createElement(Col$1, {
	        lg: 3,
	        md: 3,
	        xs: 6,
	        className: "footer_r"
	      }, /*#__PURE__*/React.createElement("button", {
	        className: "header_rb"
	      }, /*#__PURE__*/React.createElement("p", null, "App")))), /*#__PURE__*/React.createElement("div", {
	        style: {
	          background: '#031222',
	          paddingTop: '14px'
	        }
	      }, /*#__PURE__*/React.createElement("div", {
	        className: "footer_line"
	      }), /*#__PURE__*/React.createElement("div", {
	        className: "footer_line"
	      })), /*#__PURE__*/React.createElement("div", {
	        style: {
	          background: '#031222',
	          paddingTop: '10px',
	          paddingLeft: '61px',
	          height: '40px'
	        }
	      }, /*#__PURE__*/React.createElement("div", {
	        className: "footer_1"
	      }), /*#__PURE__*/React.createElement("p", {
	        className: "footer_2"
	      }, "Latest Block: 14296113"), /*#__PURE__*/React.createElement("p", {
	        className: "footer_l1_m"
	      }, "\xA9 2022 Hatom ,LLC.")));
	    }
	  }]);

	  return HelloWorld;
	}(React.Component);

	var css_248z = "@charset \"UTF-8\";/*!\n * Bootstrap v5.1.3 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#6c757d;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-primary-rgb:13,110,253;--bs-secondary-rgb:108,117,125;--bs-success-rgb:25,135,84;--bs-info-rgb:13,202,240;--bs-warning-rgb:255,193,7;--bs-danger-rgb:220,53,69;--bs-light-rgb:248,249,250;--bs-dark-rgb:33,37,41;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-body-color-rgb:33,37,41;--bs-body-bg-rgb:255,255,255;--bs-font-sans-serif:system-ui,-apple-system,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));--bs-body-font-family:var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#212529;--bs-body-bg:#fff}*,::after,::before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}hr{margin:1rem 0;color:inherit;background-color:currentColor;border:0;opacity:.25}hr:not([size]){height:1px}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){.h1,h1{font-size:2.5rem}}.h2,h2{font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){.h2,h2{font-size:2rem}}.h3,h3{font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){.h3,h3{font-size:1.75rem}}.h4,h4{font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){.h4,h4{font-size:1.5rem}}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}p{margin-top:0;margin-bottom:1rem}abbr[data-bs-original-title],abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul{padding-left:2rem}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}.small,small{font-size:.875em}.mark,mark{padding:.2em;background-color:#fcf8e3}sub,sup{position:relative;font-size:.75em;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#0d6efd;text-decoration:underline}a:hover{color:#0a58ca}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:var(--bs-font-monospace);font-size:1em;direction:ltr;unicode-bidi:bidi-override}pre{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:.875em}pre code{font-size:inherit;color:inherit;word-break:normal}code{font-size:.875em;color:#d63384;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:.875em;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:1em;font-weight:700}figure{margin:0 0 1rem}img,svg{vertical-align:middle}table{caption-side:bottom;border-collapse:collapse}caption{padding-top:.5rem;padding-bottom:.5rem;color:#6c757d;text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}tbody,td,tfoot,th,thead,tr{border-color:inherit;border-style:solid;border-width:0}label{display:inline-block}button{border-radius:0}button:focus:not(:focus-visible){outline:0}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}select:disabled{opacity:1}[list]::-webkit-calendar-picker-indicator{display:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}::-moz-focus-inner{padding:0;border-style:none}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{float:left;width:100%;padding:0;margin-bottom:.5rem;font-size:calc(1.275rem + .3vw);line-height:inherit}@media (min-width:1200px){legend{font-size:1.5rem}}legend+*{clear:left}::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:textfield}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::-webkit-file-upload-button{font:inherit}::file-selector-button{font:inherit}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}iframe{border:0}summary{display:list-item;cursor:pointer}progress{vertical-align:baseline}[hidden]{display:none!important}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-1{font-size:5rem}}.display-2{font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-2{font-size:4.5rem}}.display-3{font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-3{font-size:4rem}}.display-4{font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-4{font-size:3.5rem}}.display-5{font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-5{font-size:3rem}}.display-6{font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-6{font-size:2.5rem}}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:.875em;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote>:last-child{margin-bottom:0}.blockquote-footer{margin-top:-1rem;margin-bottom:1rem;font-size:.875em;color:#6c757d}.blockquote-footer::before{content:\"— \"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:.875em;color:#6c757d}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{width:100%;padding-right:var(--bs-gutter-x,.75rem);padding-left:var(--bs-gutter-x,.75rem);margin-right:auto;margin-left:auto}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}@media (min-width:1400px){.container,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{max-width:1320px}}.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-top:calc(-1 * var(--bs-gutter-y));margin-right:calc(-.5 * var(--bs-gutter-x));margin-left:calc(-.5 * var(--bs-gutter-x))}.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-top:var(--bs-gutter-y)}.col{flex:1 0 0%}.row-cols-auto>*{flex:0 0 auto;width:auto}.row-cols-1>*{flex:0 0 auto;width:100%}.row-cols-2>*{flex:0 0 auto;width:50%}.row-cols-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-4>*{flex:0 0 auto;width:25%}.row-cols-5>*{flex:0 0 auto;width:20%}.row-cols-6>*{flex:0 0 auto;width:16.6666666667%}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.33333333%}.col-2{flex:0 0 auto;width:16.66666667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.33333333%}.col-5{flex:0 0 auto;width:41.66666667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.33333333%}.col-8{flex:0 0 auto;width:66.66666667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.33333333%}.col-11{flex:0 0 auto;width:91.66666667%}.col-12{flex:0 0 auto;width:100%}.offset-1{margin-left:8.33333333%}.offset-2{margin-left:16.66666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333333%}.offset-5{margin-left:41.66666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333333%}.offset-8{margin-left:66.66666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333333%}.offset-11{margin-left:91.66666667%}.g-0,.gx-0{--bs-gutter-x:0}.g-0,.gy-0{--bs-gutter-y:0}.g-1,.gx-1{--bs-gutter-x:0.25rem}.g-1,.gy-1{--bs-gutter-y:0.25rem}.g-2,.gx-2{--bs-gutter-x:0.5rem}.g-2,.gy-2{--bs-gutter-y:0.5rem}.g-3,.gx-3{--bs-gutter-x:1rem}.g-3,.gy-3{--bs-gutter-y:1rem}.g-4,.gx-4{--bs-gutter-x:1.5rem}.g-4,.gy-4{--bs-gutter-y:1.5rem}.g-5,.gx-5{--bs-gutter-x:3rem}.g-5,.gy-5{--bs-gutter-y:3rem}@media (min-width:576px){.col-sm{flex:1 0 0%}.row-cols-sm-auto>*{flex:0 0 auto;width:auto}.row-cols-sm-1>*{flex:0 0 auto;width:100%}.row-cols-sm-2>*{flex:0 0 auto;width:50%}.row-cols-sm-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4>*{flex:0 0 auto;width:25%}.row-cols-sm-5>*{flex:0 0 auto;width:20%}.row-cols-sm-6>*{flex:0 0 auto;width:16.6666666667%}.col-sm-auto{flex:0 0 auto;width:auto}.col-sm-1{flex:0 0 auto;width:8.33333333%}.col-sm-2{flex:0 0 auto;width:16.66666667%}.col-sm-3{flex:0 0 auto;width:25%}.col-sm-4{flex:0 0 auto;width:33.33333333%}.col-sm-5{flex:0 0 auto;width:41.66666667%}.col-sm-6{flex:0 0 auto;width:50%}.col-sm-7{flex:0 0 auto;width:58.33333333%}.col-sm-8{flex:0 0 auto;width:66.66666667%}.col-sm-9{flex:0 0 auto;width:75%}.col-sm-10{flex:0 0 auto;width:83.33333333%}.col-sm-11{flex:0 0 auto;width:91.66666667%}.col-sm-12{flex:0 0 auto;width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333333%}.offset-sm-2{margin-left:16.66666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333333%}.offset-sm-5{margin-left:41.66666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333333%}.offset-sm-8{margin-left:66.66666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333333%}.offset-sm-11{margin-left:91.66666667%}.g-sm-0,.gx-sm-0{--bs-gutter-x:0}.g-sm-0,.gy-sm-0{--bs-gutter-y:0}.g-sm-1,.gx-sm-1{--bs-gutter-x:0.25rem}.g-sm-1,.gy-sm-1{--bs-gutter-y:0.25rem}.g-sm-2,.gx-sm-2{--bs-gutter-x:0.5rem}.g-sm-2,.gy-sm-2{--bs-gutter-y:0.5rem}.g-sm-3,.gx-sm-3{--bs-gutter-x:1rem}.g-sm-3,.gy-sm-3{--bs-gutter-y:1rem}.g-sm-4,.gx-sm-4{--bs-gutter-x:1.5rem}.g-sm-4,.gy-sm-4{--bs-gutter-y:1.5rem}.g-sm-5,.gx-sm-5{--bs-gutter-x:3rem}.g-sm-5,.gy-sm-5{--bs-gutter-y:3rem}}@media (min-width:768px){.col-md{flex:1 0 0%}.row-cols-md-auto>*{flex:0 0 auto;width:auto}.row-cols-md-1>*{flex:0 0 auto;width:100%}.row-cols-md-2>*{flex:0 0 auto;width:50%}.row-cols-md-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-md-4>*{flex:0 0 auto;width:25%}.row-cols-md-5>*{flex:0 0 auto;width:20%}.row-cols-md-6>*{flex:0 0 auto;width:16.6666666667%}.col-md-auto{flex:0 0 auto;width:auto}.col-md-1{flex:0 0 auto;width:8.33333333%}.col-md-2{flex:0 0 auto;width:16.66666667%}.col-md-3{flex:0 0 auto;width:25%}.col-md-4{flex:0 0 auto;width:33.33333333%}.col-md-5{flex:0 0 auto;width:41.66666667%}.col-md-6{flex:0 0 auto;width:50%}.col-md-7{flex:0 0 auto;width:58.33333333%}.col-md-8{flex:0 0 auto;width:66.66666667%}.col-md-9{flex:0 0 auto;width:75%}.col-md-10{flex:0 0 auto;width:83.33333333%}.col-md-11{flex:0 0 auto;width:91.66666667%}.col-md-12{flex:0 0 auto;width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333333%}.offset-md-2{margin-left:16.66666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333333%}.offset-md-5{margin-left:41.66666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333333%}.offset-md-8{margin-left:66.66666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333333%}.offset-md-11{margin-left:91.66666667%}.g-md-0,.gx-md-0{--bs-gutter-x:0}.g-md-0,.gy-md-0{--bs-gutter-y:0}.g-md-1,.gx-md-1{--bs-gutter-x:0.25rem}.g-md-1,.gy-md-1{--bs-gutter-y:0.25rem}.g-md-2,.gx-md-2{--bs-gutter-x:0.5rem}.g-md-2,.gy-md-2{--bs-gutter-y:0.5rem}.g-md-3,.gx-md-3{--bs-gutter-x:1rem}.g-md-3,.gy-md-3{--bs-gutter-y:1rem}.g-md-4,.gx-md-4{--bs-gutter-x:1.5rem}.g-md-4,.gy-md-4{--bs-gutter-y:1.5rem}.g-md-5,.gx-md-5{--bs-gutter-x:3rem}.g-md-5,.gy-md-5{--bs-gutter-y:3rem}}@media (min-width:992px){.col-lg{flex:1 0 0%}.row-cols-lg-auto>*{flex:0 0 auto;width:auto}.row-cols-lg-1>*{flex:0 0 auto;width:100%}.row-cols-lg-2>*{flex:0 0 auto;width:50%}.row-cols-lg-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4>*{flex:0 0 auto;width:25%}.row-cols-lg-5>*{flex:0 0 auto;width:20%}.row-cols-lg-6>*{flex:0 0 auto;width:16.6666666667%}.col-lg-auto{flex:0 0 auto;width:auto}.col-lg-1{flex:0 0 auto;width:8.33333333%}.col-lg-2{flex:0 0 auto;width:16.66666667%}.col-lg-3{flex:0 0 auto;width:25%}.col-lg-4{flex:0 0 auto;width:33.33333333%}.col-lg-5{flex:0 0 auto;width:41.66666667%}.col-lg-6{flex:0 0 auto;width:50%}.col-lg-7{flex:0 0 auto;width:58.33333333%}.col-lg-8{flex:0 0 auto;width:66.66666667%}.col-lg-9{flex:0 0 auto;width:75%}.col-lg-10{flex:0 0 auto;width:83.33333333%}.col-lg-11{flex:0 0 auto;width:91.66666667%}.col-lg-12{flex:0 0 auto;width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333333%}.offset-lg-2{margin-left:16.66666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333333%}.offset-lg-5{margin-left:41.66666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333333%}.offset-lg-8{margin-left:66.66666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333333%}.offset-lg-11{margin-left:91.66666667%}.g-lg-0,.gx-lg-0{--bs-gutter-x:0}.g-lg-0,.gy-lg-0{--bs-gutter-y:0}.g-lg-1,.gx-lg-1{--bs-gutter-x:0.25rem}.g-lg-1,.gy-lg-1{--bs-gutter-y:0.25rem}.g-lg-2,.gx-lg-2{--bs-gutter-x:0.5rem}.g-lg-2,.gy-lg-2{--bs-gutter-y:0.5rem}.g-lg-3,.gx-lg-3{--bs-gutter-x:1rem}.g-lg-3,.gy-lg-3{--bs-gutter-y:1rem}.g-lg-4,.gx-lg-4{--bs-gutter-x:1.5rem}.g-lg-4,.gy-lg-4{--bs-gutter-y:1.5rem}.g-lg-5,.gx-lg-5{--bs-gutter-x:3rem}.g-lg-5,.gy-lg-5{--bs-gutter-y:3rem}}@media (min-width:1200px){.col-xl{flex:1 0 0%}.row-cols-xl-auto>*{flex:0 0 auto;width:auto}.row-cols-xl-1>*{flex:0 0 auto;width:100%}.row-cols-xl-2>*{flex:0 0 auto;width:50%}.row-cols-xl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4>*{flex:0 0 auto;width:25%}.row-cols-xl-5>*{flex:0 0 auto;width:20%}.row-cols-xl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xl-auto{flex:0 0 auto;width:auto}.col-xl-1{flex:0 0 auto;width:8.33333333%}.col-xl-2{flex:0 0 auto;width:16.66666667%}.col-xl-3{flex:0 0 auto;width:25%}.col-xl-4{flex:0 0 auto;width:33.33333333%}.col-xl-5{flex:0 0 auto;width:41.66666667%}.col-xl-6{flex:0 0 auto;width:50%}.col-xl-7{flex:0 0 auto;width:58.33333333%}.col-xl-8{flex:0 0 auto;width:66.66666667%}.col-xl-9{flex:0 0 auto;width:75%}.col-xl-10{flex:0 0 auto;width:83.33333333%}.col-xl-11{flex:0 0 auto;width:91.66666667%}.col-xl-12{flex:0 0 auto;width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333333%}.offset-xl-2{margin-left:16.66666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333333%}.offset-xl-5{margin-left:41.66666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333333%}.offset-xl-8{margin-left:66.66666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333333%}.offset-xl-11{margin-left:91.66666667%}.g-xl-0,.gx-xl-0{--bs-gutter-x:0}.g-xl-0,.gy-xl-0{--bs-gutter-y:0}.g-xl-1,.gx-xl-1{--bs-gutter-x:0.25rem}.g-xl-1,.gy-xl-1{--bs-gutter-y:0.25rem}.g-xl-2,.gx-xl-2{--bs-gutter-x:0.5rem}.g-xl-2,.gy-xl-2{--bs-gutter-y:0.5rem}.g-xl-3,.gx-xl-3{--bs-gutter-x:1rem}.g-xl-3,.gy-xl-3{--bs-gutter-y:1rem}.g-xl-4,.gx-xl-4{--bs-gutter-x:1.5rem}.g-xl-4,.gy-xl-4{--bs-gutter-y:1.5rem}.g-xl-5,.gx-xl-5{--bs-gutter-x:3rem}.g-xl-5,.gy-xl-5{--bs-gutter-y:3rem}}@media (min-width:1400px){.col-xxl{flex:1 0 0%}.row-cols-xxl-auto>*{flex:0 0 auto;width:auto}.row-cols-xxl-1>*{flex:0 0 auto;width:100%}.row-cols-xxl-2>*{flex:0 0 auto;width:50%}.row-cols-xxl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4>*{flex:0 0 auto;width:25%}.row-cols-xxl-5>*{flex:0 0 auto;width:20%}.row-cols-xxl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xxl-auto{flex:0 0 auto;width:auto}.col-xxl-1{flex:0 0 auto;width:8.33333333%}.col-xxl-2{flex:0 0 auto;width:16.66666667%}.col-xxl-3{flex:0 0 auto;width:25%}.col-xxl-4{flex:0 0 auto;width:33.33333333%}.col-xxl-5{flex:0 0 auto;width:41.66666667%}.col-xxl-6{flex:0 0 auto;width:50%}.col-xxl-7{flex:0 0 auto;width:58.33333333%}.col-xxl-8{flex:0 0 auto;width:66.66666667%}.col-xxl-9{flex:0 0 auto;width:75%}.col-xxl-10{flex:0 0 auto;width:83.33333333%}.col-xxl-11{flex:0 0 auto;width:91.66666667%}.col-xxl-12{flex:0 0 auto;width:100%}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.33333333%}.offset-xxl-2{margin-left:16.66666667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.33333333%}.offset-xxl-5{margin-left:41.66666667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.33333333%}.offset-xxl-8{margin-left:66.66666667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.33333333%}.offset-xxl-11{margin-left:91.66666667%}.g-xxl-0,.gx-xxl-0{--bs-gutter-x:0}.g-xxl-0,.gy-xxl-0{--bs-gutter-y:0}.g-xxl-1,.gx-xxl-1{--bs-gutter-x:0.25rem}.g-xxl-1,.gy-xxl-1{--bs-gutter-y:0.25rem}.g-xxl-2,.gx-xxl-2{--bs-gutter-x:0.5rem}.g-xxl-2,.gy-xxl-2{--bs-gutter-y:0.5rem}.g-xxl-3,.gx-xxl-3{--bs-gutter-x:1rem}.g-xxl-3,.gy-xxl-3{--bs-gutter-y:1rem}.g-xxl-4,.gx-xxl-4{--bs-gutter-x:1.5rem}.g-xxl-4,.gy-xxl-4{--bs-gutter-y:1.5rem}.g-xxl-5,.gx-xxl-5{--bs-gutter-x:3rem}.g-xxl-5,.gy-xxl-5{--bs-gutter-y:3rem}}.table{--bs-table-bg:transparent;--bs-table-accent-bg:transparent;--bs-table-striped-color:#212529;--bs-table-striped-bg:rgba(0, 0, 0, 0.05);--bs-table-active-color:#212529;--bs-table-active-bg:rgba(0, 0, 0, 0.1);--bs-table-hover-color:#212529;--bs-table-hover-bg:rgba(0, 0, 0, 0.075);width:100%;margin-bottom:1rem;color:#212529;vertical-align:top;border-color:#dee2e6}.table>:not(caption)>*>*{padding:.5rem .5rem;background-color:var(--bs-table-bg);border-bottom-width:1px;box-shadow:inset 0 0 0 9999px var(--bs-table-accent-bg)}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table>:not(:first-child){border-top:2px solid currentColor}.caption-top{caption-side:top}.table-sm>:not(caption)>*>*{padding:.25rem .25rem}.table-bordered>:not(caption)>*{border-width:1px 0}.table-bordered>:not(caption)>*>*{border-width:0 1px}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-borderless>:not(:first-child){border-top-width:0}.table-striped>tbody>tr:nth-of-type(odd)>*{--bs-table-accent-bg:var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-active{--bs-table-accent-bg:var(--bs-table-active-bg);color:var(--bs-table-active-color)}.table-hover>tbody>tr:hover>*{--bs-table-accent-bg:var(--bs-table-hover-bg);color:var(--bs-table-hover-color)}.table-primary{--bs-table-bg:#cfe2ff;--bs-table-striped-bg:#c5d7f2;--bs-table-striped-color:#000;--bs-table-active-bg:#bacbe6;--bs-table-active-color:#000;--bs-table-hover-bg:#bfd1ec;--bs-table-hover-color:#000;color:#000;border-color:#bacbe6}.table-secondary{--bs-table-bg:#e2e3e5;--bs-table-striped-bg:#d7d8da;--bs-table-striped-color:#000;--bs-table-active-bg:#cbccce;--bs-table-active-color:#000;--bs-table-hover-bg:#d1d2d4;--bs-table-hover-color:#000;color:#000;border-color:#cbccce}.table-success{--bs-table-bg:#d1e7dd;--bs-table-striped-bg:#c7dbd2;--bs-table-striped-color:#000;--bs-table-active-bg:#bcd0c7;--bs-table-active-color:#000;--bs-table-hover-bg:#c1d6cc;--bs-table-hover-color:#000;color:#000;border-color:#bcd0c7}.table-info{--bs-table-bg:#cff4fc;--bs-table-striped-bg:#c5e8ef;--bs-table-striped-color:#000;--bs-table-active-bg:#badce3;--bs-table-active-color:#000;--bs-table-hover-bg:#bfe2e9;--bs-table-hover-color:#000;color:#000;border-color:#badce3}.table-warning{--bs-table-bg:#fff3cd;--bs-table-striped-bg:#f2e7c3;--bs-table-striped-color:#000;--bs-table-active-bg:#e6dbb9;--bs-table-active-color:#000;--bs-table-hover-bg:#ece1be;--bs-table-hover-color:#000;color:#000;border-color:#e6dbb9}.table-danger{--bs-table-bg:#f8d7da;--bs-table-striped-bg:#eccccf;--bs-table-striped-color:#000;--bs-table-active-bg:#dfc2c4;--bs-table-active-color:#000;--bs-table-hover-bg:#e5c7ca;--bs-table-hover-color:#000;color:#000;border-color:#dfc2c4}.table-light{--bs-table-bg:#f8f9fa;--bs-table-striped-bg:#ecedee;--bs-table-striped-color:#000;--bs-table-active-bg:#dfe0e1;--bs-table-active-color:#000;--bs-table-hover-bg:#e5e6e7;--bs-table-hover-color:#000;color:#000;border-color:#dfe0e1}.table-dark{--bs-table-bg:#212529;--bs-table-striped-bg:#2c3034;--bs-table-striped-color:#fff;--bs-table-active-bg:#373b3e;--bs-table-active-color:#fff;--bs-table-hover-bg:#323539;--bs-table-hover-color:#fff;color:#fff;border-color:#373b3e}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}@media (max-width:575.98px){.table-responsive-sm{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:767.98px){.table-responsive-md{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:991.98px){.table-responsive-lg{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:1199.98px){.table-responsive-xl{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:1399.98px){.table-responsive-xxl{overflow-x:auto;-webkit-overflow-scrolling:touch}}.form-label{margin-bottom:.5rem}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem}.form-text{margin-top:.25rem;font-size:.875em;color:#6c757d}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{color:#212529;background-color:#fff;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-control::-webkit-date-and-time-value{height:1.5em}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}.form-control::-webkit-file-upload-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.form-control::file-selector-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::-webkit-file-upload-button{-webkit-transition:none;transition:none}.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button{background-color:#dde0e3}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:#dde0e3}.form-control::-webkit-file-upload-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::-webkit-file-upload-button{-webkit-transition:none;transition:none}}.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button{background-color:#dde0e3}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{min-height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.form-control-sm::-webkit-file-upload-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem;margin-inline-end:.5rem}.form-control-sm::file-selector-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem;margin-inline-end:.5rem}.form-control-sm::-webkit-file-upload-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem;margin-inline-end:.5rem}.form-control-lg{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.form-control-lg::-webkit-file-upload-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}.form-control-lg::file-selector-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}.form-control-lg::-webkit-file-upload-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}textarea.form-control{min-height:calc(1.5em + .75rem + 2px)}textarea.form-control-sm{min-height:calc(1.5em + .5rem + 2px)}textarea.form-control-lg{min-height:calc(1.5em + 1rem + 2px)}.form-control-color{width:3rem;height:auto;padding:.375rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{height:1.5em;border-radius:.25rem}.form-control-color::-webkit-color-swatch{height:1.5em;border-radius:.25rem}.form-select{display:block;width:100%;padding:.375rem 2.25rem .375rem .75rem;-moz-padding-start:calc(0.75rem - 3px);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-select{transition:none}}.form-select:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-select[multiple],.form-select[size]:not([size=\"1\"]){padding-right:.75rem;background-image:none}.form-select:disabled{background-color:#e9ecef}.form-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #212529}.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem;border-radius:.2rem}.form-select-lg{padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem;border-radius:.3rem}.form-check{display:block;min-height:1.5rem;padding-left:1.5em;margin-bottom:.125rem}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-input{width:1em;height:1em;margin-top:.25em;vertical-align:top;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid rgba(0,0,0,.25);-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;color-adjust:exact}.form-check-input[type=checkbox]{border-radius:.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e\")}.form-check-input:checked[type=radio]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")}.form-check-input[type=checkbox]:indeterminate{background-color:#0d6efd;border-color:#0d6efd;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\")}.form-check-input:disabled{pointer-events:none;filter:none;opacity:.5}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{width:2em;margin-left:-2.5em;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\");background-position:left center;border-radius:2em;transition:background-position .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e\")}.form-switch .form-check-input:checked{background-position:right center;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.btn-check:disabled+.btn,.btn-check[disabled]+.btn{pointer-events:none;filter:none;opacity:.65}.form-range{width:100%;height:1.5rem;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#0d6efd;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#0d6efd;border:0;border-radius:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-range::-moz-range-thumb{-moz-transition:none;transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.form-range:disabled::-moz-range-thumb{background-color:#adb5bd}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-select{height:calc(3.5rem + 2px);line-height:1.25}.form-floating>label{position:absolute;top:0;left:0;height:100%;padding:1rem .75rem;pointer-events:none;border:1px solid transparent;transform-origin:0 0;transition:opacity .1s ease-in-out,transform .1s ease-in-out}@media (prefers-reduced-motion:reduce){.form-floating>label{transition:none}}.form-floating>.form-control{padding:1rem .75rem}.form-floating>.form-control::-moz-placeholder{color:transparent}.form-floating>.form-control::placeholder{color:transparent}.form-floating>.form-control:not(:-moz-placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:-webkit-autofill{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-select{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:not(:-moz-placeholder-shown)~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-select~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control:-webkit-autofill~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-select{position:relative;flex:1 1 auto;width:1%;min-width:0}.input-group>.form-control:focus,.input-group>.form-select:focus{z-index:3}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:3}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-lg>.btn,.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.input-group-sm>.btn,.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:3rem}.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu){border-top-right-radius:0;border-bottom-right-radius:0}.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#198754}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(25,135,84,.9);border-radius:.25rem}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{border-color:#198754;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.form-select.is-valid,.was-validated .form-select:valid{border-color:#198754}.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size=\"1\"],.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size=\"1\"]{padding-right:4.125rem;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"),url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.form-select.is-valid:focus,.was-validated .form-select:valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.form-check-input.is-valid,.was-validated .form-check-input:valid{border-color:#198754}.form-check-input.is-valid:checked,.was-validated .form-check-input:valid:checked{background-color:#198754}.form-check-input.is-valid:focus,.was-validated .form-check-input:valid:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#198754}.form-check-inline .form-check-input~.valid-feedback{margin-left:.5em}.input-group .form-control.is-valid,.input-group .form-select.is-valid,.was-validated .input-group .form-control:valid,.was-validated .input-group .form-select:valid{z-index:1}.input-group .form-control.is-valid:focus,.input-group .form-select.is-valid:focus,.was-validated .input-group .form-control:valid:focus,.was-validated .input-group .form-select:valid:focus{z-index:3}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.form-select.is-invalid,.was-validated .form-select:invalid{border-color:#dc3545}.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size=\"1\"],.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size=\"1\"]{padding-right:4.125rem;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"),url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.form-select.is-invalid:focus,.was-validated .form-select:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.form-check-input.is-invalid,.was-validated .form-check-input:invalid{border-color:#dc3545}.form-check-input.is-invalid:checked,.was-validated .form-check-input:invalid:checked{background-color:#dc3545}.form-check-input.is-invalid:focus,.was-validated .form-check-input:invalid:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-inline .form-check-input~.invalid-feedback{margin-left:.5em}.input-group .form-control.is-invalid,.input-group .form-select.is-invalid,.was-validated .input-group .form-control:invalid,.was-validated .input-group .form-select:invalid{z-index:2}.input-group .form-control.is-invalid:focus,.input-group .form-select.is-invalid:focus,.was-validated .input-group .form-control:invalid:focus,.was-validated .input-group .form-select:invalid:focus{z-index:3}.btn{display:inline-block;font-weight:400;line-height:1.5;color:#212529;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#212529}.btn-check:focus+.btn,.btn:focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.btn.disabled,.btn:disabled,fieldset:disabled .btn{pointer-events:none;opacity:.65}.btn-primary{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-primary:hover{color:#fff;background-color:#0b5ed7;border-color:#0a58ca}.btn-check:focus+.btn-primary,.btn-primary:focus{color:#fff;background-color:#0b5ed7;border-color:#0a58ca;box-shadow:0 0 0 .25rem rgba(49,132,253,.5)}.btn-check:active+.btn-primary,.btn-check:checked+.btn-primary,.btn-primary.active,.btn-primary:active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0a58ca;border-color:#0a53be}.btn-check:active+.btn-primary:focus,.btn-check:checked+.btn-primary:focus,.btn-primary.active:focus,.btn-primary:active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(49,132,253,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:hover{color:#fff;background-color:#5c636a;border-color:#565e64}.btn-check:focus+.btn-secondary,.btn-secondary:focus{color:#fff;background-color:#5c636a;border-color:#565e64;box-shadow:0 0 0 .25rem rgba(130,138,145,.5)}.btn-check:active+.btn-secondary,.btn-check:checked+.btn-secondary,.btn-secondary.active,.btn-secondary:active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#565e64;border-color:#51585e}.btn-check:active+.btn-secondary:focus,.btn-check:checked+.btn-secondary:focus,.btn-secondary.active:focus,.btn-secondary:active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(130,138,145,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-success{color:#fff;background-color:#198754;border-color:#198754}.btn-success:hover{color:#fff;background-color:#157347;border-color:#146c43}.btn-check:focus+.btn-success,.btn-success:focus{color:#fff;background-color:#157347;border-color:#146c43;box-shadow:0 0 0 .25rem rgba(60,153,110,.5)}.btn-check:active+.btn-success,.btn-check:checked+.btn-success,.btn-success.active,.btn-success:active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#146c43;border-color:#13653f}.btn-check:active+.btn-success:focus,.btn-check:checked+.btn-success:focus,.btn-success.active:focus,.btn-success:active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(60,153,110,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#198754;border-color:#198754}.btn-info{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-info:hover{color:#000;background-color:#31d2f2;border-color:#25cff2}.btn-check:focus+.btn-info,.btn-info:focus{color:#000;background-color:#31d2f2;border-color:#25cff2;box-shadow:0 0 0 .25rem rgba(11,172,204,.5)}.btn-check:active+.btn-info,.btn-check:checked+.btn-info,.btn-info.active,.btn-info:active,.show>.btn-info.dropdown-toggle{color:#000;background-color:#3dd5f3;border-color:#25cff2}.btn-check:active+.btn-info:focus,.btn-check:checked+.btn-info:focus,.btn-info.active:focus,.btn-info:active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(11,172,204,.5)}.btn-info.disabled,.btn-info:disabled{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-warning{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#000;background-color:#ffca2c;border-color:#ffc720}.btn-check:focus+.btn-warning,.btn-warning:focus{color:#000;background-color:#ffca2c;border-color:#ffc720;box-shadow:0 0 0 .25rem rgba(217,164,6,.5)}.btn-check:active+.btn-warning,.btn-check:checked+.btn-warning,.btn-warning.active,.btn-warning:active,.show>.btn-warning.dropdown-toggle{color:#000;background-color:#ffcd39;border-color:#ffc720}.btn-check:active+.btn-warning:focus,.btn-check:checked+.btn-warning:focus,.btn-warning.active:focus,.btn-warning:active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(217,164,6,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#bb2d3b;border-color:#b02a37}.btn-check:focus+.btn-danger,.btn-danger:focus{color:#fff;background-color:#bb2d3b;border-color:#b02a37;box-shadow:0 0 0 .25rem rgba(225,83,97,.5)}.btn-check:active+.btn-danger,.btn-check:checked+.btn-danger,.btn-danger.active,.btn-danger:active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#b02a37;border-color:#a52834}.btn-check:active+.btn-danger:focus,.btn-check:checked+.btn-danger:focus,.btn-danger.active:focus,.btn-danger:active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-light{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#000;background-color:#f9fafb;border-color:#f9fafb}.btn-check:focus+.btn-light,.btn-light:focus{color:#000;background-color:#f9fafb;border-color:#f9fafb;box-shadow:0 0 0 .25rem rgba(211,212,213,.5)}.btn-check:active+.btn-light,.btn-check:checked+.btn-light,.btn-light.active,.btn-light:active,.show>.btn-light.dropdown-toggle{color:#000;background-color:#f9fafb;border-color:#f9fafb}.btn-check:active+.btn-light:focus,.btn-check:checked+.btn-light:focus,.btn-light.active:focus,.btn-light:active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(211,212,213,.5)}.btn-light.disabled,.btn-light:disabled{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-dark{color:#fff;background-color:#212529;border-color:#212529}.btn-dark:hover{color:#fff;background-color:#1c1f23;border-color:#1a1e21}.btn-check:focus+.btn-dark,.btn-dark:focus{color:#fff;background-color:#1c1f23;border-color:#1a1e21;box-shadow:0 0 0 .25rem rgba(66,70,73,.5)}.btn-check:active+.btn-dark,.btn-check:checked+.btn-dark,.btn-dark.active,.btn-dark:active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1a1e21;border-color:#191c1f}.btn-check:active+.btn-dark:focus,.btn-check:checked+.btn-dark:focus,.btn-dark.active:focus,.btn-dark:active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(66,70,73,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#212529;border-color:#212529}.btn-outline-primary{color:#0d6efd;border-color:#0d6efd}.btn-outline-primary:hover{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-check:focus+.btn-outline-primary,.btn-outline-primary:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,.5)}.btn-check:active+.btn-outline-primary,.btn-check:checked+.btn-outline-primary,.btn-outline-primary.active,.btn-outline-primary.dropdown-toggle.show,.btn-outline-primary:active{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-check:active+.btn-outline-primary:focus,.btn-check:checked+.btn-outline-primary:focus,.btn-outline-primary.active:focus,.btn-outline-primary.dropdown-toggle.show:focus,.btn-outline-primary:active:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#0d6efd;background-color:transparent}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-check:focus+.btn-outline-secondary,.btn-outline-secondary:focus{box-shadow:0 0 0 .25rem rgba(108,117,125,.5)}.btn-check:active+.btn-outline-secondary,.btn-check:checked+.btn-outline-secondary,.btn-outline-secondary.active,.btn-outline-secondary.dropdown-toggle.show,.btn-outline-secondary:active{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-check:active+.btn-outline-secondary:focus,.btn-check:checked+.btn-outline-secondary:focus,.btn-outline-secondary.active:focus,.btn-outline-secondary.dropdown-toggle.show:focus,.btn-outline-secondary:active:focus{box-shadow:0 0 0 .25rem rgba(108,117,125,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-success{color:#198754;border-color:#198754}.btn-outline-success:hover{color:#fff;background-color:#198754;border-color:#198754}.btn-check:focus+.btn-outline-success,.btn-outline-success:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.5)}.btn-check:active+.btn-outline-success,.btn-check:checked+.btn-outline-success,.btn-outline-success.active,.btn-outline-success.dropdown-toggle.show,.btn-outline-success:active{color:#fff;background-color:#198754;border-color:#198754}.btn-check:active+.btn-outline-success:focus,.btn-check:checked+.btn-outline-success:focus,.btn-outline-success.active:focus,.btn-outline-success.dropdown-toggle.show:focus,.btn-outline-success:active:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#198754;background-color:transparent}.btn-outline-info{color:#0dcaf0;border-color:#0dcaf0}.btn-outline-info:hover{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-check:focus+.btn-outline-info,.btn-outline-info:focus{box-shadow:0 0 0 .25rem rgba(13,202,240,.5)}.btn-check:active+.btn-outline-info,.btn-check:checked+.btn-outline-info,.btn-outline-info.active,.btn-outline-info.dropdown-toggle.show,.btn-outline-info:active{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-check:active+.btn-outline-info:focus,.btn-check:checked+.btn-outline-info:focus,.btn-outline-info.active:focus,.btn-outline-info.dropdown-toggle.show:focus,.btn-outline-info:active:focus{box-shadow:0 0 0 .25rem rgba(13,202,240,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#0dcaf0;background-color:transparent}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-check:focus+.btn-outline-warning,.btn-outline-warning:focus{box-shadow:0 0 0 .25rem rgba(255,193,7,.5)}.btn-check:active+.btn-outline-warning,.btn-check:checked+.btn-outline-warning,.btn-outline-warning.active,.btn-outline-warning.dropdown-toggle.show,.btn-outline-warning:active{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-check:active+.btn-outline-warning:focus,.btn-check:checked+.btn-outline-warning:focus,.btn-outline-warning.active:focus,.btn-outline-warning.dropdown-toggle.show:focus,.btn-outline-warning:active:focus{box-shadow:0 0 0 .25rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-check:focus+.btn-outline-danger,.btn-outline-danger:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.5)}.btn-check:active+.btn-outline-danger,.btn-check:checked+.btn-outline-danger,.btn-outline-danger.active,.btn-outline-danger.dropdown-toggle.show,.btn-outline-danger:active{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-check:active+.btn-outline-danger:focus,.btn-check:checked+.btn-outline-danger:focus,.btn-outline-danger.active:focus,.btn-outline-danger.dropdown-toggle.show:focus,.btn-outline-danger:active:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-check:focus+.btn-outline-light,.btn-outline-light:focus{box-shadow:0 0 0 .25rem rgba(248,249,250,.5)}.btn-check:active+.btn-outline-light,.btn-check:checked+.btn-outline-light,.btn-outline-light.active,.btn-outline-light.dropdown-toggle.show,.btn-outline-light:active{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-check:active+.btn-outline-light:focus,.btn-check:checked+.btn-outline-light:focus,.btn-outline-light.active:focus,.btn-outline-light.dropdown-toggle.show:focus,.btn-outline-light:active:focus{box-shadow:0 0 0 .25rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-dark{color:#212529;border-color:#212529}.btn-outline-dark:hover{color:#fff;background-color:#212529;border-color:#212529}.btn-check:focus+.btn-outline-dark,.btn-outline-dark:focus{box-shadow:0 0 0 .25rem rgba(33,37,41,.5)}.btn-check:active+.btn-outline-dark,.btn-check:checked+.btn-outline-dark,.btn-outline-dark.active,.btn-outline-dark.dropdown-toggle.show,.btn-outline-dark:active{color:#fff;background-color:#212529;border-color:#212529}.btn-check:active+.btn-outline-dark:focus,.btn-check:checked+.btn-outline-dark:focus,.btn-outline-dark.active:focus,.btn-outline-dark.dropdown-toggle.show:focus,.btn-outline-dark:active:focus{box-shadow:0 0 0 .25rem rgba(33,37,41,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#212529;background-color:transparent}.btn-link{font-weight:400;color:#0d6efd;text-decoration:underline}.btn-link:hover{color:#0a58ca}.btn-link.disabled,.btn-link:disabled{color:#6c757d}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.collapsing.collapse-horizontal{width:0;height:auto;transition:width .35s ease}@media (prefers-reduced-motion:reduce){.collapsing.collapse-horizontal{transition:none}}.dropdown,.dropend,.dropstart,.dropup{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;z-index:1000;display:none;min-width:10rem;padding:.5rem 0;margin:0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu[data-bs-popper]{top:100%;left:0;margin-top:.125rem}.dropdown-menu-start{--bs-position:start}.dropdown-menu-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-end{--bs-position:end}.dropdown-menu-end[data-bs-popper]{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-start{--bs-position:start}.dropdown-menu-sm-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-sm-end{--bs-position:end}.dropdown-menu-sm-end[data-bs-popper]{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-start{--bs-position:start}.dropdown-menu-md-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-md-end{--bs-position:end}.dropdown-menu-md-end[data-bs-popper]{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-start{--bs-position:start}.dropdown-menu-lg-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-lg-end{--bs-position:end}.dropdown-menu-lg-end[data-bs-popper]{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-start{--bs-position:start}.dropdown-menu-xl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xl-end{--bs-position:end}.dropdown-menu-xl-end[data-bs-popper]{right:0;left:auto}}@media (min-width:1400px){.dropdown-menu-xxl-start{--bs-position:start}.dropdown-menu-xxl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xxl-end{--bs-position:end}.dropdown-menu-xxl-end[data-bs-popper]{right:0;left:auto}}.dropup .dropdown-menu[data-bs-popper]{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-menu[data-bs-popper]{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropend .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropend .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-toggle::after{vertical-align:0}.dropstart .dropdown-menu[data-bs-popper]{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropstart .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropstart .dropdown-toggle::after{display:none}.dropstart .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropstart .dropdown-toggle:empty::after{margin-left:0}.dropstart .dropdown-toggle::before{vertical-align:0}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid rgba(0,0,0,.15)}.dropdown-item{display:block;width:100%;padding:.25rem 1rem;clear:both;font-weight:400;color:#212529;text-align:inherit;text-decoration:none;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#1e2125;background-color:#e9ecef}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#0d6efd}.dropdown-item.disabled,.dropdown-item:disabled{color:#adb5bd;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1rem;color:#212529}.dropdown-menu-dark{color:#dee2e6;background-color:#343a40;border-color:rgba(0,0,0,.15)}.dropdown-menu-dark .dropdown-item{color:#dee2e6}.dropdown-menu-dark .dropdown-item:focus,.dropdown-menu-dark .dropdown-item:hover{color:#fff;background-color:rgba(255,255,255,.15)}.dropdown-menu-dark .dropdown-item.active,.dropdown-menu-dark .dropdown-item:active{color:#fff;background-color:#0d6efd}.dropdown-menu-dark .dropdown-item.disabled,.dropdown-menu-dark .dropdown-item:disabled{color:#adb5bd}.dropdown-menu-dark .dropdown-divider{border-color:rgba(0,0,0,.15)}.dropdown-menu-dark .dropdown-item-text{color:#dee2e6}.dropdown-menu-dark .dropdown-header{color:#adb5bd}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:1 1 auto}.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn{border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropend .dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after{margin-left:0}.dropstart .dropdown-toggle-split::before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn~.btn{border-top-left-radius:0;border-top-right-radius:0}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem;color:#0d6efd;text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media (prefers-reduced-motion:reduce){.nav-link{transition:none}}.nav-link:focus,.nav-link:hover{color:#0a58ca}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-link{margin-bottom:-1px;background:0 0;border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6;isolation:isolate}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{background:0 0;border:0;border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#0d6efd}.nav-fill .nav-item,.nav-fill>.nav-link{flex:1 1 auto;text-align:center}.nav-justified .nav-item,.nav-justified>.nav-link{flex-basis:0;flex-grow:1;text-align:center}.nav-fill .nav-item .nav-link,.nav-justified .nav-item .nav-link{width:100%}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding-top:.5rem;padding-bottom:.5rem}.navbar>.container,.navbar>.container-fluid,.navbar>.container-lg,.navbar>.container-md,.navbar>.container-sm,.navbar>.container-xl,.navbar>.container-xxl{display:flex;flex-wrap:inherit;align-items:center;justify-content:space-between}.navbar-brand{padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;text-decoration:none;white-space:nowrap}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static}.navbar-text{padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem;transition:box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.navbar-toggler{transition:none}}.navbar-toggler:hover{text-decoration:none}.navbar-toggler:focus{text-decoration:none;outline:0;box-shadow:0 0 0 .25rem}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;background-repeat:no-repeat;background-position:center;background-size:100%}.navbar-nav-scroll{max-height:var(--bs-scroll-height,75vh);overflow-y:auto}@media (min-width:576px){.navbar-expand-sm{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}.navbar-expand-sm .offcanvas-header{display:none}.navbar-expand-sm .offcanvas{position:inherit;bottom:0;z-index:1000;flex-grow:1;visibility:visible!important;background-color:transparent;border-right:0;border-left:0;transition:none;transform:none}.navbar-expand-sm .offcanvas-bottom,.navbar-expand-sm .offcanvas-top{height:auto;border-top:0;border-bottom:0}.navbar-expand-sm .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media (min-width:768px){.navbar-expand-md{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}.navbar-expand-md .offcanvas-header{display:none}.navbar-expand-md .offcanvas{position:inherit;bottom:0;z-index:1000;flex-grow:1;visibility:visible!important;background-color:transparent;border-right:0;border-left:0;transition:none;transform:none}.navbar-expand-md .offcanvas-bottom,.navbar-expand-md .offcanvas-top{height:auto;border-top:0;border-bottom:0}.navbar-expand-md .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media (min-width:992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}.navbar-expand-lg .offcanvas-header{display:none}.navbar-expand-lg .offcanvas{position:inherit;bottom:0;z-index:1000;flex-grow:1;visibility:visible!important;background-color:transparent;border-right:0;border-left:0;transition:none;transform:none}.navbar-expand-lg .offcanvas-bottom,.navbar-expand-lg .offcanvas-top{height:auto;border-top:0;border-bottom:0}.navbar-expand-lg .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media (min-width:1200px){.navbar-expand-xl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}.navbar-expand-xl .offcanvas-header{display:none}.navbar-expand-xl .offcanvas{position:inherit;bottom:0;z-index:1000;flex-grow:1;visibility:visible!important;background-color:transparent;border-right:0;border-left:0;transition:none;transform:none}.navbar-expand-xl .offcanvas-bottom,.navbar-expand-xl .offcanvas-top{height:auto;border-top:0;border-bottom:0}.navbar-expand-xl .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media (min-width:1400px){.navbar-expand-xxl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xxl .navbar-nav-scroll{overflow:visible}.navbar-expand-xxl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xxl .navbar-toggler{display:none}.navbar-expand-xxl .offcanvas-header{display:none}.navbar-expand-xxl .offcanvas{position:inherit;bottom:0;z-index:1000;flex-grow:1;visibility:visible!important;background-color:transparent;border-right:0;border-left:0;transition:none;transform:none}.navbar-expand-xxl .offcanvas-bottom,.navbar-expand-xxl .offcanvas-top{height:auto;border-top:0;border-bottom:0}.navbar-expand-xxl .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}.navbar-expand{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-expand .offcanvas-header{display:none}.navbar-expand .offcanvas{position:inherit;bottom:0;z-index:1000;flex-grow:1;visibility:visible!important;background-color:transparent;border-right:0;border-left:0;transition:none;transform:none}.navbar-expand .offcanvas-bottom,.navbar-expand .offcanvas-top{height:auto;border-top:0;border-bottom:0}.navbar-expand .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}.navbar-light .navbar-brand{color:rgba(0,0,0,.9)}.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.55)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.55);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-light .navbar-text{color:rgba(0,0,0,.55)}.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.55)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:rgba(255,255,255,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,.55);border-color:rgba(255,255,255,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-dark .navbar-text{color:rgba(255,255,255,.55)}.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;padding:1rem 1rem}.card-title{margin-bottom:.5rem}.card-subtitle{margin-top:-.25rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link+.card-link{margin-left:1rem}.card-header{padding:.5rem 1rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-footer{padding:.5rem 1rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.5rem;margin-bottom:-.5rem;margin-left:-.5rem;border-bottom:0}.card-header-pills{margin-right:-.5rem;margin-left:-.5rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1rem;border-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom,.card-img-top{width:100%}.card-img,.card-img-top{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom{border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-group>.card{margin-bottom:.75rem}@media (min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.accordion-button{position:relative;display:flex;align-items:center;width:100%;padding:1rem 1.25rem;font-size:1rem;color:#212529;text-align:left;background-color:#fff;border:0;border-radius:0;overflow-anchor:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,border-radius .15s ease}@media (prefers-reduced-motion:reduce){.accordion-button{transition:none}}.accordion-button:not(.collapsed){color:#0c63e4;background-color:#e7f1ff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.125)}.accordion-button:not(.collapsed)::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");transform:rotate(-180deg)}.accordion-button::after{flex-shrink:0;width:1.25rem;height:1.25rem;margin-left:auto;content:\"\";background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-size:1.25rem;transition:transform .2s ease-in-out}@media (prefers-reduced-motion:reduce){.accordion-button::after{transition:none}}.accordion-button:hover{z-index:2}.accordion-button:focus{z-index:3;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.accordion-header{margin-bottom:0}.accordion-item{background-color:#fff;border:1px solid rgba(0,0,0,.125)}.accordion-item:first-of-type{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.accordion-item:first-of-type .accordion-button{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.accordion-item:not(:first-of-type){border-top:0}.accordion-item:last-of-type{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.accordion-item:last-of-type .accordion-button.collapsed{border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.accordion-item:last-of-type .accordion-collapse{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.accordion-body{padding:1rem 1.25rem}.accordion-flush .accordion-collapse{border-width:0}.accordion-flush .accordion-item{border-right:0;border-left:0;border-radius:0}.accordion-flush .accordion-item:first-child{border-top:0}.accordion-flush .accordion-item:last-child{border-bottom:0}.accordion-flush .accordion-item .accordion-button{border-radius:0}.breadcrumb{display:flex;flex-wrap:wrap;padding:0 0;margin-bottom:1rem;list-style:none}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item::before{float:left;padding-right:.5rem;color:#6c757d;content:var(--bs-breadcrumb-divider, \"/\")}.breadcrumb-item.active{color:#6c757d}.pagination{display:flex;padding-left:0;list-style:none}.page-link{position:relative;display:block;color:#0d6efd;text-decoration:none;background-color:#fff;border:1px solid #dee2e6;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.page-link{transition:none}}.page-link:hover{z-index:2;color:#0a58ca;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:3;color:#0a58ca;background-color:#e9ecef;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.page-item:not(:first-child) .page-link{margin-left:-1px}.page-item.active .page-link{z-index:3;color:#fff;background-color:#0d6efd;border-color:#0d6efd}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;background-color:#fff;border-color:#dee2e6}.page-link{padding:.375rem .75rem}.page-item:first-child .page-link{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.35em .65em;font-size:.75em;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.alert{position:relative;padding:1rem 1rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:3rem}.alert-dismissible .btn-close{position:absolute;top:0;right:0;z-index:2;padding:1.25rem 1rem}.alert-primary{color:#084298;background-color:#cfe2ff;border-color:#b6d4fe}.alert-primary .alert-link{color:#06357a}.alert-secondary{color:#41464b;background-color:#e2e3e5;border-color:#d3d6d8}.alert-secondary .alert-link{color:#34383c}.alert-success{color:#0f5132;background-color:#d1e7dd;border-color:#badbcc}.alert-success .alert-link{color:#0c4128}.alert-info{color:#055160;background-color:#cff4fc;border-color:#b6effb}.alert-info .alert-link{color:#04414d}.alert-warning{color:#664d03;background-color:#fff3cd;border-color:#ffecb5}.alert-warning .alert-link{color:#523e02}.alert-danger{color:#842029;background-color:#f8d7da;border-color:#f5c2c7}.alert-danger .alert-link{color:#6a1a21}.alert-light{color:#636464;background-color:#fefefe;border-color:#fdfdfe}.alert-light .alert-link{color:#4f5050}.alert-dark{color:#141619;background-color:#d3d3d4;border-color:#bcbebf}.alert-dark .alert-link{color:#101214}@-webkit-keyframes progress-bar-stripes{0%{background-position-x:1rem}}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}.progress{display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:#0d6efd;transition:width .6s ease}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:1s linear infinite progress-bar-stripes;animation:1s linear infinite progress-bar-stripes}@media (prefers-reduced-motion:reduce){.progress-bar-animated{-webkit-animation:none;animation:none}}.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:.25rem}.list-group-numbered{list-style-type:none;counter-reset:section}.list-group-numbered>li::before{content:counters(section, \".\") \". \";counter-increment:section}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.5rem 1rem;color:#212529;text-decoration:none;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#0d6efd;border-color:#0d6efd}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:1400px){.list-group-horizontal-xxl{flex-direction:row}.list-group-horizontal-xxl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xxl>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xxl>.list-group-item.active{margin-top:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#084298;background-color:#cfe2ff}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#084298;background-color:#bacbe6}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#084298;border-color:#084298}.list-group-item-secondary{color:#41464b;background-color:#e2e3e5}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#41464b;background-color:#cbccce}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#41464b;border-color:#41464b}.list-group-item-success{color:#0f5132;background-color:#d1e7dd}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#0f5132;background-color:#bcd0c7}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#0f5132;border-color:#0f5132}.list-group-item-info{color:#055160;background-color:#cff4fc}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#055160;background-color:#badce3}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#055160;border-color:#055160}.list-group-item-warning{color:#664d03;background-color:#fff3cd}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#664d03;background-color:#e6dbb9}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#664d03;border-color:#664d03}.list-group-item-danger{color:#842029;background-color:#f8d7da}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#842029;background-color:#dfc2c4}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#842029;border-color:#842029}.list-group-item-light{color:#636464;background-color:#fefefe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#636464;background-color:#e5e5e5}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#636464;border-color:#636464}.list-group-item-dark{color:#141619;background-color:#d3d3d4}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#141619;background-color:#bebebf}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#141619;border-color:#141619}.btn-close{box-sizing:content-box;width:1em;height:1em;padding:.25em .25em;color:#000;background:transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e\") center/1em auto no-repeat;border:0;border-radius:.25rem;opacity:.5}.btn-close:hover{color:#000;text-decoration:none;opacity:.75}.btn-close:focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);opacity:1}.btn-close.disabled,.btn-close:disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:.25}.btn-close-white{filter:invert(1) grayscale(100%) brightness(200%)}.toast{width:350px;max-width:100%;font-size:.875rem;pointer-events:auto;background-color:rgba(255,255,255,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .5rem 1rem rgba(0,0,0,.15);border-radius:.25rem}.toast.showing{opacity:0}.toast:not(.show){display:none}.toast-container{width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:100%;pointer-events:none}.toast-container>:not(:last-child){margin-bottom:.75rem}.toast-header{display:flex;align-items:center;padding:.5rem .75rem;color:#6c757d;background-color:rgba(255,255,255,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05);border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.toast-header .btn-close{margin-right:-.375rem;margin-left:.75rem}.toast-body{padding:.75rem;word-wrap:break-word}.modal{position:fixed;top:0;left:0;z-index:1055;display:none;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translate(0,-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1050;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;flex-shrink:0;align-items:center;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.modal-header .btn-close{padding:.5rem .5rem;margin:-.5rem -.5rem -.5rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;flex-wrap:wrap;flex-shrink:0;align-items:center;justify-content:flex-end;padding:.75rem;border-top:1px solid #dee2e6;border-bottom-right-radius:calc(.3rem - 1px);border-bottom-left-radius:calc(.3rem - 1px)}.modal-footer>*{margin:.25rem}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{height:calc(100% - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}.modal-fullscreen{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen .modal-header{border-radius:0}.modal-fullscreen .modal-body{overflow-y:auto}.modal-fullscreen .modal-footer{border-radius:0}@media (max-width:575.98px){.modal-fullscreen-sm-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-sm-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-sm-down .modal-header{border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}.modal-fullscreen-sm-down .modal-footer{border-radius:0}}@media (max-width:767.98px){.modal-fullscreen-md-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-md-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-md-down .modal-header{border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}.modal-fullscreen-md-down .modal-footer{border-radius:0}}@media (max-width:991.98px){.modal-fullscreen-lg-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-lg-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-lg-down .modal-header{border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}.modal-fullscreen-lg-down .modal-footer{border-radius:0}}@media (max-width:1199.98px){.modal-fullscreen-xl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xl-down .modal-header{border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}.modal-fullscreen-xl-down .modal-footer{border-radius:0}}@media (max-width:1399.98px){.modal-fullscreen-xxl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xxl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xxl-down .modal-header{border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}.modal-fullscreen-xxl-down .modal-footer{border-radius:0}}.tooltip{position:absolute;z-index:1080;display:block;margin:0;font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .tooltip-arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .tooltip-arrow::before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-auto[data-popper-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow,.bs-tooltip-top .tooltip-arrow{bottom:0}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before,.bs-tooltip-top .tooltip-arrow::before{top:-1px;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[data-popper-placement^=right],.bs-tooltip-end{padding:0 .4rem}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow,.bs-tooltip-end .tooltip-arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before,.bs-tooltip-end .tooltip-arrow::before{right:-1px;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[data-popper-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow,.bs-tooltip-bottom .tooltip-arrow{top:0}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before,.bs-tooltip-bottom .tooltip-arrow::before{bottom:-1px;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[data-popper-placement^=left],.bs-tooltip-start{padding:0 .4rem}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow,.bs-tooltip-start .tooltip-arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before,.bs-tooltip-start .tooltip-arrow::before{left:-1px;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover{position:absolute;top:0;left:0;z-index:1070;display:block;max-width:276px;font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover .popover-arrow{position:absolute;display:block;width:1rem;height:.5rem}.popover .popover-arrow::after,.popover .popover-arrow::before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow,.bs-popover-top>.popover-arrow{bottom:calc(-.5rem - 1px)}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::before,.bs-popover-top>.popover-arrow::before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::after,.bs-popover-top>.popover-arrow::after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow,.bs-popover-end>.popover-arrow{left:calc(-.5rem - 1px);width:.5rem;height:1rem}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::before,.bs-popover-end>.popover-arrow::before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::after,.bs-popover-end>.popover-arrow::after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow,.bs-popover-bottom>.popover-arrow{top:calc(-.5rem - 1px)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::before,.bs-popover-bottom>.popover-arrow::before{top:0;border-width:0 .5rem .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::after,.bs-popover-bottom>.popover-arrow::after{top:1px;border-width:0 .5rem .5rem .5rem;border-bottom-color:#fff}.bs-popover-auto[data-popper-placement^=bottom] .popover-header::before,.bs-popover-bottom .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f0f0f0}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow,.bs-popover-start>.popover-arrow{right:calc(-.5rem - 1px);width:.5rem;height:1rem}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::before,.bs-popover-start>.popover-arrow::before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::after,.bs-popover-start>.popover-arrow::after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem 1rem;margin-bottom:0;font-size:1rem;background-color:#f0f0f0;border-bottom:1px solid rgba(0,0,0,.2);border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:1rem 1rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-end,.carousel-item-next:not(.carousel-item-start){transform:translateX(100%)}.active.carousel-item-start,.carousel-item-prev:not(.carousel-item-end){transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;padding:0;color:#fff;text-align:center;background:0 0;border:0;opacity:.5;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:2rem;height:2rem;background-repeat:no-repeat;background-position:50%;background-size:100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:2;display:flex;justify-content:center;padding:0;margin-right:15%;margin-bottom:1rem;margin-left:15%;list-style:none}.carousel-indicators [data-bs-target]{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;padding:0;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border:0;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-indicators [data-bs-target]{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:1.25rem;left:15%;padding-top:1.25rem;padding-bottom:1.25rem;color:#fff;text-align:center}.carousel-dark .carousel-control-next-icon,.carousel-dark .carousel-control-prev-icon{filter:invert(1) grayscale(100)}.carousel-dark .carousel-indicators [data-bs-target]{background-color:#000}.carousel-dark .carousel-caption{color:#000}@-webkit-keyframes spinner-border{to{transform:rotate(360deg)}}@keyframes spinner-border{to{transform:rotate(360deg)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:-.125em;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;-webkit-animation:.75s linear infinite spinner-border;animation:.75s linear infinite spinner-border}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@-webkit-keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:-.125em;background-color:currentColor;border-radius:50%;opacity:0;-webkit-animation:.75s linear infinite spinner-grow;animation:.75s linear infinite spinner-grow}.spinner-grow-sm{width:1rem;height:1rem}@media (prefers-reduced-motion:reduce){.spinner-border,.spinner-grow{-webkit-animation-duration:1.5s;animation-duration:1.5s}}.offcanvas{position:fixed;bottom:0;z-index:1045;display:flex;flex-direction:column;max-width:100%;visibility:hidden;background-color:#fff;background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}@media (prefers-reduced-motion:reduce){.offcanvas{transition:none}}.offcanvas-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.offcanvas-backdrop.fade{opacity:0}.offcanvas-backdrop.show{opacity:.5}.offcanvas-header{display:flex;align-items:center;justify-content:space-between;padding:1rem 1rem}.offcanvas-header .btn-close{padding:.5rem .5rem;margin-top:-.5rem;margin-right:-.5rem;margin-bottom:-.5rem}.offcanvas-title{margin-bottom:0;line-height:1.5}.offcanvas-body{flex-grow:1;padding:1rem 1rem;overflow-y:auto}.offcanvas-start{top:0;left:0;width:400px;border-right:1px solid rgba(0,0,0,.2);transform:translateX(-100%)}.offcanvas-end{top:0;right:0;width:400px;border-left:1px solid rgba(0,0,0,.2);transform:translateX(100%)}.offcanvas-top{top:0;right:0;left:0;height:30vh;max-height:100%;border-bottom:1px solid rgba(0,0,0,.2);transform:translateY(-100%)}.offcanvas-bottom{right:0;left:0;height:30vh;max-height:100%;border-top:1px solid rgba(0,0,0,.2);transform:translateY(100%)}.offcanvas.show{transform:none}.placeholder{display:inline-block;min-height:1em;vertical-align:middle;cursor:wait;background-color:currentColor;opacity:.5}.placeholder.btn::before{display:inline-block;content:\"\"}.placeholder-xs{min-height:.6em}.placeholder-sm{min-height:.8em}.placeholder-lg{min-height:1.2em}.placeholder-glow .placeholder{-webkit-animation:placeholder-glow 2s ease-in-out infinite;animation:placeholder-glow 2s ease-in-out infinite}@-webkit-keyframes placeholder-glow{50%{opacity:.2}}@keyframes placeholder-glow{50%{opacity:.2}}.placeholder-wave{-webkit-mask-image:linear-gradient(130deg,#000 55%,rgba(0,0,0,0.8) 75%,#000 95%);mask-image:linear-gradient(130deg,#000 55%,rgba(0,0,0,0.8) 75%,#000 95%);-webkit-mask-size:200% 100%;mask-size:200% 100%;-webkit-animation:placeholder-wave 2s linear infinite;animation:placeholder-wave 2s linear infinite}@-webkit-keyframes placeholder-wave{100%{-webkit-mask-position:-200% 0%;mask-position:-200% 0%}}@keyframes placeholder-wave{100%{-webkit-mask-position:-200% 0%;mask-position:-200% 0%}}.clearfix::after{display:block;clear:both;content:\"\"}.link-primary{color:#0d6efd}.link-primary:focus,.link-primary:hover{color:#0a58ca}.link-secondary{color:#6c757d}.link-secondary:focus,.link-secondary:hover{color:#565e64}.link-success{color:#198754}.link-success:focus,.link-success:hover{color:#146c43}.link-info{color:#0dcaf0}.link-info:focus,.link-info:hover{color:#3dd5f3}.link-warning{color:#ffc107}.link-warning:focus,.link-warning:hover{color:#ffcd39}.link-danger{color:#dc3545}.link-danger:focus,.link-danger:hover{color:#b02a37}.link-light{color:#f8f9fa}.link-light:focus,.link-light:hover{color:#f9fafb}.link-dark{color:#212529}.link-dark:focus,.link-dark:hover{color:#1a1e21}.ratio{position:relative;width:100%}.ratio::before{display:block;padding-top:var(--bs-aspect-ratio);content:\"\"}.ratio>*{position:absolute;top:0;left:0;width:100%;height:100%}.ratio-1x1{--bs-aspect-ratio:100%}.ratio-4x3{--bs-aspect-ratio:75%}.ratio-16x9{--bs-aspect-ratio:56.25%}.ratio-21x9{--bs-aspect-ratio:42.8571428571%}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}@media (min-width:576px){.sticky-sm-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}@media (min-width:768px){.sticky-md-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}@media (min-width:992px){.sticky-lg-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}@media (min-width:1200px){.sticky-xl-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}@media (min-width:1400px){.sticky-xxl-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.hstack{display:flex;flex-direction:row;align-items:center;align-self:stretch}.vstack{display:flex;flex:1 1 auto;flex-direction:column;align-self:stretch}.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within){position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:\"\"}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vr{display:inline-block;align-self:stretch;width:1px;min-height:1em;background-color:currentColor;opacity:.25}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.float-start{float:left!important}.float-end{float:right!important}.float-none{float:none!important}.opacity-0{opacity:0!important}.opacity-25{opacity:.25!important}.opacity-50{opacity:.5!important}.opacity-75{opacity:.75!important}.opacity-100{opacity:1!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.overflow-visible{overflow:visible!important}.overflow-scroll{overflow:scroll!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-grid{display:grid!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}.d-none{display:none!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.top-0{top:0!important}.top-50{top:50%!important}.top-100{top:100%!important}.bottom-0{bottom:0!important}.bottom-50{bottom:50%!important}.bottom-100{bottom:100%!important}.start-0{left:0!important}.start-50{left:50%!important}.start-100{left:100%!important}.end-0{right:0!important}.end-50{right:50%!important}.end-100{right:100%!important}.translate-middle{transform:translate(-50%,-50%)!important}.translate-middle-x{transform:translateX(-50%)!important}.translate-middle-y{transform:translateY(-50%)!important}.border{border:1px solid #dee2e6!important}.border-0{border:0!important}.border-top{border-top:1px solid #dee2e6!important}.border-top-0{border-top:0!important}.border-end{border-right:1px solid #dee2e6!important}.border-end-0{border-right:0!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-bottom-0{border-bottom:0!important}.border-start{border-left:1px solid #dee2e6!important}.border-start-0{border-left:0!important}.border-primary{border-color:#0d6efd!important}.border-secondary{border-color:#6c757d!important}.border-success{border-color:#198754!important}.border-info{border-color:#0dcaf0!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#212529!important}.border-white{border-color:#fff!important}.border-1{border-width:1px!important}.border-2{border-width:2px!important}.border-3{border-width:3px!important}.border-4{border-width:4px!important}.border-5{border-width:5px!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.mw-100{max-width:100%!important}.vw-100{width:100vw!important}.min-vw-100{min-width:100vw!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mh-100{max-height:100%!important}.vh-100{height:100vh!important}.min-vh-100{min-height:100vh!important}.flex-fill{flex:1 1 auto!important}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-0{gap:0!important}.gap-1{gap:.25rem!important}.gap-2{gap:.5rem!important}.gap-3{gap:1rem!important}.gap-4{gap:1.5rem!important}.gap-5{gap:3rem!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.justify-content-evenly{justify-content:space-evenly!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}.order-first{order:-1!important}.order-0{order:0!important}.order-1{order:1!important}.order-2{order:2!important}.order-3{order:3!important}.order-4{order:4!important}.order-5{order:5!important}.order-last{order:6!important}.m-0{margin:0!important}.m-1{margin:.25rem!important}.m-2{margin:.5rem!important}.m-3{margin:1rem!important}.m-4{margin:1.5rem!important}.m-5{margin:3rem!important}.m-auto{margin:auto!important}.mx-0{margin-right:0!important;margin-left:0!important}.mx-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-3{margin-right:1rem!important;margin-left:1rem!important}.mx-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-5{margin-right:3rem!important;margin-left:3rem!important}.mx-auto{margin-right:auto!important;margin-left:auto!important}.my-0{margin-top:0!important;margin-bottom:0!important}.my-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-0{margin-top:0!important}.mt-1{margin-top:.25rem!important}.mt-2{margin-top:.5rem!important}.mt-3{margin-top:1rem!important}.mt-4{margin-top:1.5rem!important}.mt-5{margin-top:3rem!important}.mt-auto{margin-top:auto!important}.me-0{margin-right:0!important}.me-1{margin-right:.25rem!important}.me-2{margin-right:.5rem!important}.me-3{margin-right:1rem!important}.me-4{margin-right:1.5rem!important}.me-5{margin-right:3rem!important}.me-auto{margin-right:auto!important}.mb-0{margin-bottom:0!important}.mb-1{margin-bottom:.25rem!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:1rem!important}.mb-4{margin-bottom:1.5rem!important}.mb-5{margin-bottom:3rem!important}.mb-auto{margin-bottom:auto!important}.ms-0{margin-left:0!important}.ms-1{margin-left:.25rem!important}.ms-2{margin-left:.5rem!important}.ms-3{margin-left:1rem!important}.ms-4{margin-left:1.5rem!important}.ms-5{margin-left:3rem!important}.ms-auto{margin-left:auto!important}.p-0{padding:0!important}.p-1{padding:.25rem!important}.p-2{padding:.5rem!important}.p-3{padding:1rem!important}.p-4{padding:1.5rem!important}.p-5{padding:3rem!important}.px-0{padding-right:0!important;padding-left:0!important}.px-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-3{padding-right:1rem!important;padding-left:1rem!important}.px-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-5{padding-right:3rem!important;padding-left:3rem!important}.py-0{padding-top:0!important;padding-bottom:0!important}.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-0{padding-top:0!important}.pt-1{padding-top:.25rem!important}.pt-2{padding-top:.5rem!important}.pt-3{padding-top:1rem!important}.pt-4{padding-top:1.5rem!important}.pt-5{padding-top:3rem!important}.pe-0{padding-right:0!important}.pe-1{padding-right:.25rem!important}.pe-2{padding-right:.5rem!important}.pe-3{padding-right:1rem!important}.pe-4{padding-right:1.5rem!important}.pe-5{padding-right:3rem!important}.pb-0{padding-bottom:0!important}.pb-1{padding-bottom:.25rem!important}.pb-2{padding-bottom:.5rem!important}.pb-3{padding-bottom:1rem!important}.pb-4{padding-bottom:1.5rem!important}.pb-5{padding-bottom:3rem!important}.ps-0{padding-left:0!important}.ps-1{padding-left:.25rem!important}.ps-2{padding-left:.5rem!important}.ps-3{padding-left:1rem!important}.ps-4{padding-left:1.5rem!important}.ps-5{padding-left:3rem!important}.font-monospace{font-family:var(--bs-font-monospace)!important}.fs-1{font-size:calc(1.375rem + 1.5vw)!important}.fs-2{font-size:calc(1.325rem + .9vw)!important}.fs-3{font-size:calc(1.3rem + .6vw)!important}.fs-4{font-size:calc(1.275rem + .3vw)!important}.fs-5{font-size:1.25rem!important}.fs-6{font-size:1rem!important}.fst-italic{font-style:italic!important}.fst-normal{font-style:normal!important}.fw-light{font-weight:300!important}.fw-lighter{font-weight:lighter!important}.fw-normal{font-weight:400!important}.fw-bold{font-weight:700!important}.fw-bolder{font-weight:bolder!important}.lh-1{line-height:1!important}.lh-sm{line-height:1.25!important}.lh-base{line-height:1.5!important}.lh-lg{line-height:2!important}.text-start{text-align:left!important}.text-end{text-align:right!important}.text-center{text-align:center!important}.text-decoration-none{text-decoration:none!important}.text-decoration-underline{text-decoration:underline!important}.text-decoration-line-through{text-decoration:line-through!important}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-break{word-wrap:break-word!important;word-break:break-word!important}.text-primary{--bs-text-opacity:1;color:rgba(var(--bs-primary-rgb),var(--bs-text-opacity))!important}.text-secondary{--bs-text-opacity:1;color:rgba(var(--bs-secondary-rgb),var(--bs-text-opacity))!important}.text-success{--bs-text-opacity:1;color:rgba(var(--bs-success-rgb),var(--bs-text-opacity))!important}.text-info{--bs-text-opacity:1;color:rgba(var(--bs-info-rgb),var(--bs-text-opacity))!important}.text-warning{--bs-text-opacity:1;color:rgba(var(--bs-warning-rgb),var(--bs-text-opacity))!important}.text-danger{--bs-text-opacity:1;color:rgba(var(--bs-danger-rgb),var(--bs-text-opacity))!important}.text-light{--bs-text-opacity:1;color:rgba(var(--bs-light-rgb),var(--bs-text-opacity))!important}.text-dark{--bs-text-opacity:1;color:rgba(var(--bs-dark-rgb),var(--bs-text-opacity))!important}.text-black{--bs-text-opacity:1;color:rgba(var(--bs-black-rgb),var(--bs-text-opacity))!important}.text-white{--bs-text-opacity:1;color:rgba(var(--bs-white-rgb),var(--bs-text-opacity))!important}.text-body{--bs-text-opacity:1;color:rgba(var(--bs-body-color-rgb),var(--bs-text-opacity))!important}.text-muted{--bs-text-opacity:1;color:#6c757d!important}.text-black-50{--bs-text-opacity:1;color:rgba(0,0,0,.5)!important}.text-white-50{--bs-text-opacity:1;color:rgba(255,255,255,.5)!important}.text-reset{--bs-text-opacity:1;color:inherit!important}.text-opacity-25{--bs-text-opacity:0.25}.text-opacity-50{--bs-text-opacity:0.5}.text-opacity-75{--bs-text-opacity:0.75}.text-opacity-100{--bs-text-opacity:1}.bg-primary{--bs-bg-opacity:1;background-color:rgba(var(--bs-primary-rgb),var(--bs-bg-opacity))!important}.bg-secondary{--bs-bg-opacity:1;background-color:rgba(var(--bs-secondary-rgb),var(--bs-bg-opacity))!important}.bg-success{--bs-bg-opacity:1;background-color:rgba(var(--bs-success-rgb),var(--bs-bg-opacity))!important}.bg-info{--bs-bg-opacity:1;background-color:rgba(var(--bs-info-rgb),var(--bs-bg-opacity))!important}.bg-warning{--bs-bg-opacity:1;background-color:rgba(var(--bs-warning-rgb),var(--bs-bg-opacity))!important}.bg-danger{--bs-bg-opacity:1;background-color:rgba(var(--bs-danger-rgb),var(--bs-bg-opacity))!important}.bg-light{--bs-bg-opacity:1;background-color:rgba(var(--bs-light-rgb),var(--bs-bg-opacity))!important}.bg-dark{--bs-bg-opacity:1;background-color:rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important}.bg-black{--bs-bg-opacity:1;background-color:rgba(var(--bs-black-rgb),var(--bs-bg-opacity))!important}.bg-white{--bs-bg-opacity:1;background-color:rgba(var(--bs-white-rgb),var(--bs-bg-opacity))!important}.bg-body{--bs-bg-opacity:1;background-color:rgba(var(--bs-body-bg-rgb),var(--bs-bg-opacity))!important}.bg-transparent{--bs-bg-opacity:1;background-color:transparent!important}.bg-opacity-10{--bs-bg-opacity:0.1}.bg-opacity-25{--bs-bg-opacity:0.25}.bg-opacity-50{--bs-bg-opacity:0.5}.bg-opacity-75{--bs-bg-opacity:0.75}.bg-opacity-100{--bs-bg-opacity:1}.bg-gradient{background-image:var(--bs-gradient)!important}.user-select-all{-webkit-user-select:all!important;-moz-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;-moz-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important}.pe-none{pointer-events:none!important}.pe-auto{pointer-events:auto!important}.rounded{border-radius:.25rem!important}.rounded-0{border-radius:0!important}.rounded-1{border-radius:.2rem!important}.rounded-2{border-radius:.25rem!important}.rounded-3{border-radius:.3rem!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-top{border-top-left-radius:.25rem!important;border-top-right-radius:.25rem!important}.rounded-end{border-top-right-radius:.25rem!important;border-bottom-right-radius:.25rem!important}.rounded-bottom{border-bottom-right-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-start{border-bottom-left-radius:.25rem!important;border-top-left-radius:.25rem!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media (min-width:576px){.float-sm-start{float:left!important}.float-sm-end{float:right!important}.float-sm-none{float:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-grid{display:grid!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}.d-sm-none{display:none!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-sm-0{gap:0!important}.gap-sm-1{gap:.25rem!important}.gap-sm-2{gap:.5rem!important}.gap-sm-3{gap:1rem!important}.gap-sm-4{gap:1.5rem!important}.gap-sm-5{gap:3rem!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.justify-content-sm-evenly{justify-content:space-evenly!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}.order-sm-first{order:-1!important}.order-sm-0{order:0!important}.order-sm-1{order:1!important}.order-sm-2{order:2!important}.order-sm-3{order:3!important}.order-sm-4{order:4!important}.order-sm-5{order:5!important}.order-sm-last{order:6!important}.m-sm-0{margin:0!important}.m-sm-1{margin:.25rem!important}.m-sm-2{margin:.5rem!important}.m-sm-3{margin:1rem!important}.m-sm-4{margin:1.5rem!important}.m-sm-5{margin:3rem!important}.m-sm-auto{margin:auto!important}.mx-sm-0{margin-right:0!important;margin-left:0!important}.mx-sm-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-sm-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-sm-3{margin-right:1rem!important;margin-left:1rem!important}.mx-sm-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-sm-5{margin-right:3rem!important;margin-left:3rem!important}.mx-sm-auto{margin-right:auto!important;margin-left:auto!important}.my-sm-0{margin-top:0!important;margin-bottom:0!important}.my-sm-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-sm-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-sm-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-sm-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-sm-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-sm-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-sm-0{margin-top:0!important}.mt-sm-1{margin-top:.25rem!important}.mt-sm-2{margin-top:.5rem!important}.mt-sm-3{margin-top:1rem!important}.mt-sm-4{margin-top:1.5rem!important}.mt-sm-5{margin-top:3rem!important}.mt-sm-auto{margin-top:auto!important}.me-sm-0{margin-right:0!important}.me-sm-1{margin-right:.25rem!important}.me-sm-2{margin-right:.5rem!important}.me-sm-3{margin-right:1rem!important}.me-sm-4{margin-right:1.5rem!important}.me-sm-5{margin-right:3rem!important}.me-sm-auto{margin-right:auto!important}.mb-sm-0{margin-bottom:0!important}.mb-sm-1{margin-bottom:.25rem!important}.mb-sm-2{margin-bottom:.5rem!important}.mb-sm-3{margin-bottom:1rem!important}.mb-sm-4{margin-bottom:1.5rem!important}.mb-sm-5{margin-bottom:3rem!important}.mb-sm-auto{margin-bottom:auto!important}.ms-sm-0{margin-left:0!important}.ms-sm-1{margin-left:.25rem!important}.ms-sm-2{margin-left:.5rem!important}.ms-sm-3{margin-left:1rem!important}.ms-sm-4{margin-left:1.5rem!important}.ms-sm-5{margin-left:3rem!important}.ms-sm-auto{margin-left:auto!important}.p-sm-0{padding:0!important}.p-sm-1{padding:.25rem!important}.p-sm-2{padding:.5rem!important}.p-sm-3{padding:1rem!important}.p-sm-4{padding:1.5rem!important}.p-sm-5{padding:3rem!important}.px-sm-0{padding-right:0!important;padding-left:0!important}.px-sm-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-sm-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-sm-3{padding-right:1rem!important;padding-left:1rem!important}.px-sm-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-sm-5{padding-right:3rem!important;padding-left:3rem!important}.py-sm-0{padding-top:0!important;padding-bottom:0!important}.py-sm-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-sm-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-sm-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-sm-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-sm-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-sm-0{padding-top:0!important}.pt-sm-1{padding-top:.25rem!important}.pt-sm-2{padding-top:.5rem!important}.pt-sm-3{padding-top:1rem!important}.pt-sm-4{padding-top:1.5rem!important}.pt-sm-5{padding-top:3rem!important}.pe-sm-0{padding-right:0!important}.pe-sm-1{padding-right:.25rem!important}.pe-sm-2{padding-right:.5rem!important}.pe-sm-3{padding-right:1rem!important}.pe-sm-4{padding-right:1.5rem!important}.pe-sm-5{padding-right:3rem!important}.pb-sm-0{padding-bottom:0!important}.pb-sm-1{padding-bottom:.25rem!important}.pb-sm-2{padding-bottom:.5rem!important}.pb-sm-3{padding-bottom:1rem!important}.pb-sm-4{padding-bottom:1.5rem!important}.pb-sm-5{padding-bottom:3rem!important}.ps-sm-0{padding-left:0!important}.ps-sm-1{padding-left:.25rem!important}.ps-sm-2{padding-left:.5rem!important}.ps-sm-3{padding-left:1rem!important}.ps-sm-4{padding-left:1.5rem!important}.ps-sm-5{padding-left:3rem!important}.text-sm-start{text-align:left!important}.text-sm-end{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.float-md-start{float:left!important}.float-md-end{float:right!important}.float-md-none{float:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-grid{display:grid!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}.d-md-none{display:none!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-md-0{gap:0!important}.gap-md-1{gap:.25rem!important}.gap-md-2{gap:.5rem!important}.gap-md-3{gap:1rem!important}.gap-md-4{gap:1.5rem!important}.gap-md-5{gap:3rem!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.justify-content-md-evenly{justify-content:space-evenly!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}.order-md-first{order:-1!important}.order-md-0{order:0!important}.order-md-1{order:1!important}.order-md-2{order:2!important}.order-md-3{order:3!important}.order-md-4{order:4!important}.order-md-5{order:5!important}.order-md-last{order:6!important}.m-md-0{margin:0!important}.m-md-1{margin:.25rem!important}.m-md-2{margin:.5rem!important}.m-md-3{margin:1rem!important}.m-md-4{margin:1.5rem!important}.m-md-5{margin:3rem!important}.m-md-auto{margin:auto!important}.mx-md-0{margin-right:0!important;margin-left:0!important}.mx-md-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-md-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-md-3{margin-right:1rem!important;margin-left:1rem!important}.mx-md-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-md-5{margin-right:3rem!important;margin-left:3rem!important}.mx-md-auto{margin-right:auto!important;margin-left:auto!important}.my-md-0{margin-top:0!important;margin-bottom:0!important}.my-md-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-md-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-md-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-md-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-md-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-md-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-md-0{margin-top:0!important}.mt-md-1{margin-top:.25rem!important}.mt-md-2{margin-top:.5rem!important}.mt-md-3{margin-top:1rem!important}.mt-md-4{margin-top:1.5rem!important}.mt-md-5{margin-top:3rem!important}.mt-md-auto{margin-top:auto!important}.me-md-0{margin-right:0!important}.me-md-1{margin-right:.25rem!important}.me-md-2{margin-right:.5rem!important}.me-md-3{margin-right:1rem!important}.me-md-4{margin-right:1.5rem!important}.me-md-5{margin-right:3rem!important}.me-md-auto{margin-right:auto!important}.mb-md-0{margin-bottom:0!important}.mb-md-1{margin-bottom:.25rem!important}.mb-md-2{margin-bottom:.5rem!important}.mb-md-3{margin-bottom:1rem!important}.mb-md-4{margin-bottom:1.5rem!important}.mb-md-5{margin-bottom:3rem!important}.mb-md-auto{margin-bottom:auto!important}.ms-md-0{margin-left:0!important}.ms-md-1{margin-left:.25rem!important}.ms-md-2{margin-left:.5rem!important}.ms-md-3{margin-left:1rem!important}.ms-md-4{margin-left:1.5rem!important}.ms-md-5{margin-left:3rem!important}.ms-md-auto{margin-left:auto!important}.p-md-0{padding:0!important}.p-md-1{padding:.25rem!important}.p-md-2{padding:.5rem!important}.p-md-3{padding:1rem!important}.p-md-4{padding:1.5rem!important}.p-md-5{padding:3rem!important}.px-md-0{padding-right:0!important;padding-left:0!important}.px-md-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-md-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-md-3{padding-right:1rem!important;padding-left:1rem!important}.px-md-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-md-5{padding-right:3rem!important;padding-left:3rem!important}.py-md-0{padding-top:0!important;padding-bottom:0!important}.py-md-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-md-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-md-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-md-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-md-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-md-0{padding-top:0!important}.pt-md-1{padding-top:.25rem!important}.pt-md-2{padding-top:.5rem!important}.pt-md-3{padding-top:1rem!important}.pt-md-4{padding-top:1.5rem!important}.pt-md-5{padding-top:3rem!important}.pe-md-0{padding-right:0!important}.pe-md-1{padding-right:.25rem!important}.pe-md-2{padding-right:.5rem!important}.pe-md-3{padding-right:1rem!important}.pe-md-4{padding-right:1.5rem!important}.pe-md-5{padding-right:3rem!important}.pb-md-0{padding-bottom:0!important}.pb-md-1{padding-bottom:.25rem!important}.pb-md-2{padding-bottom:.5rem!important}.pb-md-3{padding-bottom:1rem!important}.pb-md-4{padding-bottom:1.5rem!important}.pb-md-5{padding-bottom:3rem!important}.ps-md-0{padding-left:0!important}.ps-md-1{padding-left:.25rem!important}.ps-md-2{padding-left:.5rem!important}.ps-md-3{padding-left:1rem!important}.ps-md-4{padding-left:1.5rem!important}.ps-md-5{padding-left:3rem!important}.text-md-start{text-align:left!important}.text-md-end{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.float-lg-start{float:left!important}.float-lg-end{float:right!important}.float-lg-none{float:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-grid{display:grid!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}.d-lg-none{display:none!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-lg-0{gap:0!important}.gap-lg-1{gap:.25rem!important}.gap-lg-2{gap:.5rem!important}.gap-lg-3{gap:1rem!important}.gap-lg-4{gap:1.5rem!important}.gap-lg-5{gap:3rem!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.justify-content-lg-evenly{justify-content:space-evenly!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}.order-lg-first{order:-1!important}.order-lg-0{order:0!important}.order-lg-1{order:1!important}.order-lg-2{order:2!important}.order-lg-3{order:3!important}.order-lg-4{order:4!important}.order-lg-5{order:5!important}.order-lg-last{order:6!important}.m-lg-0{margin:0!important}.m-lg-1{margin:.25rem!important}.m-lg-2{margin:.5rem!important}.m-lg-3{margin:1rem!important}.m-lg-4{margin:1.5rem!important}.m-lg-5{margin:3rem!important}.m-lg-auto{margin:auto!important}.mx-lg-0{margin-right:0!important;margin-left:0!important}.mx-lg-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-lg-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-lg-3{margin-right:1rem!important;margin-left:1rem!important}.mx-lg-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-lg-5{margin-right:3rem!important;margin-left:3rem!important}.mx-lg-auto{margin-right:auto!important;margin-left:auto!important}.my-lg-0{margin-top:0!important;margin-bottom:0!important}.my-lg-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-lg-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-lg-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-lg-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-lg-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-lg-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-lg-0{margin-top:0!important}.mt-lg-1{margin-top:.25rem!important}.mt-lg-2{margin-top:.5rem!important}.mt-lg-3{margin-top:1rem!important}.mt-lg-4{margin-top:1.5rem!important}.mt-lg-5{margin-top:3rem!important}.mt-lg-auto{margin-top:auto!important}.me-lg-0{margin-right:0!important}.me-lg-1{margin-right:.25rem!important}.me-lg-2{margin-right:.5rem!important}.me-lg-3{margin-right:1rem!important}.me-lg-4{margin-right:1.5rem!important}.me-lg-5{margin-right:3rem!important}.me-lg-auto{margin-right:auto!important}.mb-lg-0{margin-bottom:0!important}.mb-lg-1{margin-bottom:.25rem!important}.mb-lg-2{margin-bottom:.5rem!important}.mb-lg-3{margin-bottom:1rem!important}.mb-lg-4{margin-bottom:1.5rem!important}.mb-lg-5{margin-bottom:3rem!important}.mb-lg-auto{margin-bottom:auto!important}.ms-lg-0{margin-left:0!important}.ms-lg-1{margin-left:.25rem!important}.ms-lg-2{margin-left:.5rem!important}.ms-lg-3{margin-left:1rem!important}.ms-lg-4{margin-left:1.5rem!important}.ms-lg-5{margin-left:3rem!important}.ms-lg-auto{margin-left:auto!important}.p-lg-0{padding:0!important}.p-lg-1{padding:.25rem!important}.p-lg-2{padding:.5rem!important}.p-lg-3{padding:1rem!important}.p-lg-4{padding:1.5rem!important}.p-lg-5{padding:3rem!important}.px-lg-0{padding-right:0!important;padding-left:0!important}.px-lg-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-lg-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-lg-3{padding-right:1rem!important;padding-left:1rem!important}.px-lg-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-lg-5{padding-right:3rem!important;padding-left:3rem!important}.py-lg-0{padding-top:0!important;padding-bottom:0!important}.py-lg-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-lg-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-lg-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-lg-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-lg-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-lg-0{padding-top:0!important}.pt-lg-1{padding-top:.25rem!important}.pt-lg-2{padding-top:.5rem!important}.pt-lg-3{padding-top:1rem!important}.pt-lg-4{padding-top:1.5rem!important}.pt-lg-5{padding-top:3rem!important}.pe-lg-0{padding-right:0!important}.pe-lg-1{padding-right:.25rem!important}.pe-lg-2{padding-right:.5rem!important}.pe-lg-3{padding-right:1rem!important}.pe-lg-4{padding-right:1.5rem!important}.pe-lg-5{padding-right:3rem!important}.pb-lg-0{padding-bottom:0!important}.pb-lg-1{padding-bottom:.25rem!important}.pb-lg-2{padding-bottom:.5rem!important}.pb-lg-3{padding-bottom:1rem!important}.pb-lg-4{padding-bottom:1.5rem!important}.pb-lg-5{padding-bottom:3rem!important}.ps-lg-0{padding-left:0!important}.ps-lg-1{padding-left:.25rem!important}.ps-lg-2{padding-left:.5rem!important}.ps-lg-3{padding-left:1rem!important}.ps-lg-4{padding-left:1.5rem!important}.ps-lg-5{padding-left:3rem!important}.text-lg-start{text-align:left!important}.text-lg-end{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.float-xl-start{float:left!important}.float-xl-end{float:right!important}.float-xl-none{float:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-grid{display:grid!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}.d-xl-none{display:none!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-xl-0{gap:0!important}.gap-xl-1{gap:.25rem!important}.gap-xl-2{gap:.5rem!important}.gap-xl-3{gap:1rem!important}.gap-xl-4{gap:1.5rem!important}.gap-xl-5{gap:3rem!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.justify-content-xl-evenly{justify-content:space-evenly!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}.order-xl-first{order:-1!important}.order-xl-0{order:0!important}.order-xl-1{order:1!important}.order-xl-2{order:2!important}.order-xl-3{order:3!important}.order-xl-4{order:4!important}.order-xl-5{order:5!important}.order-xl-last{order:6!important}.m-xl-0{margin:0!important}.m-xl-1{margin:.25rem!important}.m-xl-2{margin:.5rem!important}.m-xl-3{margin:1rem!important}.m-xl-4{margin:1.5rem!important}.m-xl-5{margin:3rem!important}.m-xl-auto{margin:auto!important}.mx-xl-0{margin-right:0!important;margin-left:0!important}.mx-xl-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-xl-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-xl-3{margin-right:1rem!important;margin-left:1rem!important}.mx-xl-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-xl-5{margin-right:3rem!important;margin-left:3rem!important}.mx-xl-auto{margin-right:auto!important;margin-left:auto!important}.my-xl-0{margin-top:0!important;margin-bottom:0!important}.my-xl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xl-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-xl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xl-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-xl-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-xl-0{margin-top:0!important}.mt-xl-1{margin-top:.25rem!important}.mt-xl-2{margin-top:.5rem!important}.mt-xl-3{margin-top:1rem!important}.mt-xl-4{margin-top:1.5rem!important}.mt-xl-5{margin-top:3rem!important}.mt-xl-auto{margin-top:auto!important}.me-xl-0{margin-right:0!important}.me-xl-1{margin-right:.25rem!important}.me-xl-2{margin-right:.5rem!important}.me-xl-3{margin-right:1rem!important}.me-xl-4{margin-right:1.5rem!important}.me-xl-5{margin-right:3rem!important}.me-xl-auto{margin-right:auto!important}.mb-xl-0{margin-bottom:0!important}.mb-xl-1{margin-bottom:.25rem!important}.mb-xl-2{margin-bottom:.5rem!important}.mb-xl-3{margin-bottom:1rem!important}.mb-xl-4{margin-bottom:1.5rem!important}.mb-xl-5{margin-bottom:3rem!important}.mb-xl-auto{margin-bottom:auto!important}.ms-xl-0{margin-left:0!important}.ms-xl-1{margin-left:.25rem!important}.ms-xl-2{margin-left:.5rem!important}.ms-xl-3{margin-left:1rem!important}.ms-xl-4{margin-left:1.5rem!important}.ms-xl-5{margin-left:3rem!important}.ms-xl-auto{margin-left:auto!important}.p-xl-0{padding:0!important}.p-xl-1{padding:.25rem!important}.p-xl-2{padding:.5rem!important}.p-xl-3{padding:1rem!important}.p-xl-4{padding:1.5rem!important}.p-xl-5{padding:3rem!important}.px-xl-0{padding-right:0!important;padding-left:0!important}.px-xl-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-xl-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-xl-3{padding-right:1rem!important;padding-left:1rem!important}.px-xl-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-xl-5{padding-right:3rem!important;padding-left:3rem!important}.py-xl-0{padding-top:0!important;padding-bottom:0!important}.py-xl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xl-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-xl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xl-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xl-0{padding-top:0!important}.pt-xl-1{padding-top:.25rem!important}.pt-xl-2{padding-top:.5rem!important}.pt-xl-3{padding-top:1rem!important}.pt-xl-4{padding-top:1.5rem!important}.pt-xl-5{padding-top:3rem!important}.pe-xl-0{padding-right:0!important}.pe-xl-1{padding-right:.25rem!important}.pe-xl-2{padding-right:.5rem!important}.pe-xl-3{padding-right:1rem!important}.pe-xl-4{padding-right:1.5rem!important}.pe-xl-5{padding-right:3rem!important}.pb-xl-0{padding-bottom:0!important}.pb-xl-1{padding-bottom:.25rem!important}.pb-xl-2{padding-bottom:.5rem!important}.pb-xl-3{padding-bottom:1rem!important}.pb-xl-4{padding-bottom:1.5rem!important}.pb-xl-5{padding-bottom:3rem!important}.ps-xl-0{padding-left:0!important}.ps-xl-1{padding-left:.25rem!important}.ps-xl-2{padding-left:.5rem!important}.ps-xl-3{padding-left:1rem!important}.ps-xl-4{padding-left:1.5rem!important}.ps-xl-5{padding-left:3rem!important}.text-xl-start{text-align:left!important}.text-xl-end{text-align:right!important}.text-xl-center{text-align:center!important}}@media (min-width:1400px){.float-xxl-start{float:left!important}.float-xxl-end{float:right!important}.float-xxl-none{float:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-grid{display:grid!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:flex!important}.d-xxl-inline-flex{display:inline-flex!important}.d-xxl-none{display:none!important}.flex-xxl-fill{flex:1 1 auto!important}.flex-xxl-row{flex-direction:row!important}.flex-xxl-column{flex-direction:column!important}.flex-xxl-row-reverse{flex-direction:row-reverse!important}.flex-xxl-column-reverse{flex-direction:column-reverse!important}.flex-xxl-grow-0{flex-grow:0!important}.flex-xxl-grow-1{flex-grow:1!important}.flex-xxl-shrink-0{flex-shrink:0!important}.flex-xxl-shrink-1{flex-shrink:1!important}.flex-xxl-wrap{flex-wrap:wrap!important}.flex-xxl-nowrap{flex-wrap:nowrap!important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-xxl-0{gap:0!important}.gap-xxl-1{gap:.25rem!important}.gap-xxl-2{gap:.5rem!important}.gap-xxl-3{gap:1rem!important}.gap-xxl-4{gap:1.5rem!important}.gap-xxl-5{gap:3rem!important}.justify-content-xxl-start{justify-content:flex-start!important}.justify-content-xxl-end{justify-content:flex-end!important}.justify-content-xxl-center{justify-content:center!important}.justify-content-xxl-between{justify-content:space-between!important}.justify-content-xxl-around{justify-content:space-around!important}.justify-content-xxl-evenly{justify-content:space-evenly!important}.align-items-xxl-start{align-items:flex-start!important}.align-items-xxl-end{align-items:flex-end!important}.align-items-xxl-center{align-items:center!important}.align-items-xxl-baseline{align-items:baseline!important}.align-items-xxl-stretch{align-items:stretch!important}.align-content-xxl-start{align-content:flex-start!important}.align-content-xxl-end{align-content:flex-end!important}.align-content-xxl-center{align-content:center!important}.align-content-xxl-between{align-content:space-between!important}.align-content-xxl-around{align-content:space-around!important}.align-content-xxl-stretch{align-content:stretch!important}.align-self-xxl-auto{align-self:auto!important}.align-self-xxl-start{align-self:flex-start!important}.align-self-xxl-end{align-self:flex-end!important}.align-self-xxl-center{align-self:center!important}.align-self-xxl-baseline{align-self:baseline!important}.align-self-xxl-stretch{align-self:stretch!important}.order-xxl-first{order:-1!important}.order-xxl-0{order:0!important}.order-xxl-1{order:1!important}.order-xxl-2{order:2!important}.order-xxl-3{order:3!important}.order-xxl-4{order:4!important}.order-xxl-5{order:5!important}.order-xxl-last{order:6!important}.m-xxl-0{margin:0!important}.m-xxl-1{margin:.25rem!important}.m-xxl-2{margin:.5rem!important}.m-xxl-3{margin:1rem!important}.m-xxl-4{margin:1.5rem!important}.m-xxl-5{margin:3rem!important}.m-xxl-auto{margin:auto!important}.mx-xxl-0{margin-right:0!important;margin-left:0!important}.mx-xxl-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-xxl-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-xxl-3{margin-right:1rem!important;margin-left:1rem!important}.mx-xxl-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-xxl-5{margin-right:3rem!important;margin-left:3rem!important}.mx-xxl-auto{margin-right:auto!important;margin-left:auto!important}.my-xxl-0{margin-top:0!important;margin-bottom:0!important}.my-xxl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xxl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xxl-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-xxl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xxl-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-xxl-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-xxl-0{margin-top:0!important}.mt-xxl-1{margin-top:.25rem!important}.mt-xxl-2{margin-top:.5rem!important}.mt-xxl-3{margin-top:1rem!important}.mt-xxl-4{margin-top:1.5rem!important}.mt-xxl-5{margin-top:3rem!important}.mt-xxl-auto{margin-top:auto!important}.me-xxl-0{margin-right:0!important}.me-xxl-1{margin-right:.25rem!important}.me-xxl-2{margin-right:.5rem!important}.me-xxl-3{margin-right:1rem!important}.me-xxl-4{margin-right:1.5rem!important}.me-xxl-5{margin-right:3rem!important}.me-xxl-auto{margin-right:auto!important}.mb-xxl-0{margin-bottom:0!important}.mb-xxl-1{margin-bottom:.25rem!important}.mb-xxl-2{margin-bottom:.5rem!important}.mb-xxl-3{margin-bottom:1rem!important}.mb-xxl-4{margin-bottom:1.5rem!important}.mb-xxl-5{margin-bottom:3rem!important}.mb-xxl-auto{margin-bottom:auto!important}.ms-xxl-0{margin-left:0!important}.ms-xxl-1{margin-left:.25rem!important}.ms-xxl-2{margin-left:.5rem!important}.ms-xxl-3{margin-left:1rem!important}.ms-xxl-4{margin-left:1.5rem!important}.ms-xxl-5{margin-left:3rem!important}.ms-xxl-auto{margin-left:auto!important}.p-xxl-0{padding:0!important}.p-xxl-1{padding:.25rem!important}.p-xxl-2{padding:.5rem!important}.p-xxl-3{padding:1rem!important}.p-xxl-4{padding:1.5rem!important}.p-xxl-5{padding:3rem!important}.px-xxl-0{padding-right:0!important;padding-left:0!important}.px-xxl-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-xxl-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-xxl-3{padding-right:1rem!important;padding-left:1rem!important}.px-xxl-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-xxl-5{padding-right:3rem!important;padding-left:3rem!important}.py-xxl-0{padding-top:0!important;padding-bottom:0!important}.py-xxl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xxl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xxl-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-xxl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xxl-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xxl-0{padding-top:0!important}.pt-xxl-1{padding-top:.25rem!important}.pt-xxl-2{padding-top:.5rem!important}.pt-xxl-3{padding-top:1rem!important}.pt-xxl-4{padding-top:1.5rem!important}.pt-xxl-5{padding-top:3rem!important}.pe-xxl-0{padding-right:0!important}.pe-xxl-1{padding-right:.25rem!important}.pe-xxl-2{padding-right:.5rem!important}.pe-xxl-3{padding-right:1rem!important}.pe-xxl-4{padding-right:1.5rem!important}.pe-xxl-5{padding-right:3rem!important}.pb-xxl-0{padding-bottom:0!important}.pb-xxl-1{padding-bottom:.25rem!important}.pb-xxl-2{padding-bottom:.5rem!important}.pb-xxl-3{padding-bottom:1rem!important}.pb-xxl-4{padding-bottom:1.5rem!important}.pb-xxl-5{padding-bottom:3rem!important}.ps-xxl-0{padding-left:0!important}.ps-xxl-1{padding-left:.25rem!important}.ps-xxl-2{padding-left:.5rem!important}.ps-xxl-3{padding-left:1rem!important}.ps-xxl-4{padding-left:1.5rem!important}.ps-xxl-5{padding-left:3rem!important}.text-xxl-start{text-align:left!important}.text-xxl-end{text-align:right!important}.text-xxl-center{text-align:center!important}}@media (min-width:1200px){.fs-1{font-size:2.5rem!important}.fs-2{font-size:2rem!important}.fs-3{font-size:1.75rem!important}.fs-4{font-size:1.5rem!important}}@media print{.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-grid{display:grid!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}.d-print-none{display:none!important}}";
	styleInject(css_248z);

	ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(HelloWorld, null)), document.getElementById('root'));

})();
