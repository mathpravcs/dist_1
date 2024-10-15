import{r as Y,aR as Z,m as G}from"./index-ee215eff.js";var z={exports:{}};function H(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var L=H(Y),J=Z;function K(t,o){for(var a=Object.getOwnPropertyNames(o),n=0;n<a.length;n++){var e=a[n],s=Object.getOwnPropertyDescriptor(o,e);s&&s.configurable&&t[e]===void 0&&Object.defineProperty(t,e,s)}return t}function B(){return(B=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function Q(t,o){t.prototype=Object.create(o.prototype),K(t.prototype.constructor=t,o)}function $(t,o){if(t==null)return{};var a,n,e={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],0<=o.indexOf(a)||(e[a]=t[a]);return e}function E(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var ee=function(t,o,a,n,e,s,f,v){if(!t){var i;if(o===void 0)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[a,n,e,s,f,v],c=0;(i=new Error(o.replace(/%s/g,function(){return l[c++]}))).name="Invariant Violation"}throw i.framesToPop=1,i}},j=ee;function N(t,o,a){if("selectionStart"in t&&"selectionEnd"in t)t.selectionStart=o,t.selectionEnd=a;else{var n=t.createTextRange();n.collapse(!0),n.moveStart("character",o),n.moveEnd("character",a-o),n.select()}}function te(t){var o=0,a=0;if("selectionStart"in t&&"selectionEnd"in t)o=t.selectionStart,a=t.selectionEnd;else{var n=document.selection.createRange();n.parentElement()===t&&(o=-n.moveStart("character",-t.value.length),a=-n.moveEnd("character",-t.value.length))}return{start:o,end:a,length:a-o}}var ne={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},oe="_";function _(t,o,a){var n="",e="",s=null,f=[];if(o===void 0&&(o=oe),a==null&&(a=ne),!t||typeof t!="string")return{maskChar:o,formatChars:a,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var v=!1;return t.split("").forEach(function(i){v=!v&&i==="\\"||(v||!a[i]?(f.push(n.length),n.length===f.length-1&&(e+=i)):s=n.length+1,n+=i,!1)}),{maskChar:o,formatChars:a,prefix:e,mask:n,lastEditablePosition:s,permanents:f}}function O(t,o){return t.permanents.indexOf(o)!==-1}function F(t,o,a){var n=t.mask,e=t.formatChars;if(!a)return!1;if(O(t,o))return n[o]===a;var s=e[n[o]];return new RegExp(s).test(a)}function q(t,o){return o.split("").every(function(a,n){return O(t,n)||!F(t,n,a)})}function y(t,o){var a=t.maskChar,n=t.prefix;if(!a){for(;o.length>n.length&&O(t,o.length-1);)o=o.slice(0,o.length-1);return o.length}for(var e=n.length,s=o.length;s>=n.length;s--){var f=o[s];if(!O(t,s)&&F(t,s,f)){e=s+1;break}}return e}function W(t,o){return y(t,o)===t.mask.length}function M(t,o){var a=t.maskChar,n=t.mask,e=t.prefix;if(!a){for((o=T(t,"",o,0)).length<e.length&&(o=e);o.length<n.length&&O(t,o.length);)o+=n[o.length];return o}if(o)return T(t,M(t,""),o,0);for(var s=0;s<n.length;s++)O(t,s)?o+=n[s]:o+=a;return o}function ae(t,o,a,n){var e=a+n,s=t.maskChar,f=t.mask,v=t.prefix,i=o.split("");if(s)return i.map(function(c,g){return g<a||e<=g?c:O(t,g)?f[g]:s}).join("");for(var l=e;l<i.length;l++)O(t,l)&&(i[l]="");return a=Math.max(v.length,a),i.splice(a,e-a),o=i.join(""),M(t,o)}function T(t,o,a,n){var e=t.mask,s=t.maskChar,f=t.prefix,v=a.split(""),i=W(t,o);return!s&&n>o.length&&(o+=e.slice(o.length,n)),v.every(function(l){for(;k=l,O(t,h=n)&&k!==e[h];){if(n>=o.length&&(o+=e[n]),c=l,g=n,s&&O(t,g)&&c===s)return!0;if(++n>=e.length)return!1}var c,g,h,k;return!F(t,n,l)&&l!==s||(n<o.length?o=s||i||n<f.length?o.slice(0,n)+l+o.slice(n+1):(o=o.slice(0,n)+l+o.slice(n),M(t,o)):s||(o+=l),++n<e.length)}),o}function re(t,o,a,n){var e=t.mask,s=t.maskChar,f=a.split(""),v=n;return f.every(function(i){for(;c=i,O(t,l=n)&&c!==e[l];)if(++n>=e.length)return!1;var l,c;return(F(t,n,i)||i===s)&&n++,n<e.length}),n-v}function se(t,o){for(var a=o;0<=a;--a)if(!O(t,a))return a;return null}function P(t,o){for(var a=t.mask,n=o;n<a.length;++n)if(!O(t,n))return n;return null}function R(t){return t||t===0?t+"":""}function ie(t,o,a,n,e){var s=t.mask,f=t.prefix,v=t.lastEditablePosition,i=o,l="",c=0,g=0,h=Math.min(e.start,a.start);return a.end>e.start?g=(c=re(t,n,l=i.slice(e.start,a.end),h))?e.length:0:i.length<n.length&&(g=n.length-i.length),i=n,g&&(g===1&&!e.length&&(h=e.start===a.start?P(t,a.start):se(t,a.start)),i=ae(t,i,h,g)),i=T(t,i,l,h),(h+=c)>=s.length?h=s.length:h<f.length&&!c?h=f.length:h>=f.length&&h<v&&c&&(h=P(t,h)),l||(l=null),{value:i=M(t,i),enteredString:l,selection:{start:h,end:h}}}function le(){var t=new RegExp("windows","i"),o=new RegExp("phone","i"),a=navigator.userAgent;return t.test(a)&&o.test(a)}function S(t){return typeof t=="function"}function ue(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function X(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function U(t){return(X()?ue():function(){return setTimeout(t,1e3/60)})(t)}function A(t){(X()||clearTimeout)(t)}var ce=function(t){function o(n){var e=t.call(this,n)||this;e.focused=!1,e.mounted=!1,e.previousSelection=null,e.selectionDeferId=null,e.saveSelectionLoopDeferId=null,e.saveSelectionLoop=function(){e.previousSelection=e.getSelection(),e.saveSelectionLoopDeferId=U(e.saveSelectionLoop)},e.runSaveSelectionLoop=function(){e.saveSelectionLoopDeferId===null&&e.saveSelectionLoop()},e.stopSaveSelectionLoop=function(){e.saveSelectionLoopDeferId!==null&&(A(e.saveSelectionLoopDeferId),e.saveSelectionLoopDeferId=null,e.previousSelection=null)},e.getInputDOMNode=function(){if(!e.mounted)return null;var r=J.findDOMNode(E(E(e))),u=typeof window<"u"&&r instanceof window.Element;if(r&&!u)return null;if(r.nodeName!=="INPUT"&&(r=r.querySelector("input")),!r)throw new Error("react-input-mask: inputComponent doesn't contain input node");return r},e.getInputValue=function(){var r=e.getInputDOMNode();return r?r.value:null},e.setInputValue=function(r){var u=e.getInputDOMNode();u&&(e.value=r,u.value=r)},e.setCursorToEnd=function(){var r=y(e.maskOptions,e.value),u=P(e.maskOptions,r);u!==null&&e.setCursorPosition(u)},e.setSelection=function(r,u,m){m===void 0&&(m={});var p=e.getInputDOMNode(),d=e.isFocused();p&&d&&(m.deferred||N(p,r,u),e.selectionDeferId!==null&&A(e.selectionDeferId),e.selectionDeferId=U(function(){e.selectionDeferId=null,N(p,r,u)}),e.previousSelection={start:r,end:u,length:Math.abs(u-r)})},e.getSelection=function(){return te(e.getInputDOMNode())},e.getCursorPosition=function(){return e.getSelection().start},e.setCursorPosition=function(r){e.setSelection(r,r)},e.isFocused=function(){return e.focused},e.getBeforeMaskedValueChangeConfig=function(){var r=e.maskOptions,u=r.mask,m=r.maskChar,p=r.permanents,d=r.formatChars;return{mask:u,maskChar:m,permanents:p,alwaysShowMask:!!e.props.alwaysShowMask,formatChars:d}},e.isInputAutofilled=function(r,u,m,p){var d=e.getInputDOMNode();try{if(d.matches(":-webkit-autofill"))return!0}catch{}return!e.focused||p.end<m.length&&u.end===r.length},e.onChange=function(r){var u=E(E(e)).beforePasteState,m=E(E(e)).previousSelection,p=e.props.beforeMaskedValueChange,d=e.getInputValue(),w=e.value,C=e.getSelection();e.isInputAutofilled(d,C,w,m)&&(w=M(e.maskOptions,""),m={start:0,end:0,length:0}),u&&(m=u.selection,w=u.value,C={start:m.start+d.length,end:m.start+d.length,length:0},d=w.slice(0,m.start)+d+w.slice(m.end),e.beforePasteState=null);var D=ie(e.maskOptions,d,C,w,m),x=D.enteredString,I=D.selection,b=D.value;if(S(p)){var V=p({value:b,selection:I},{value:w,selection:m},x,e.getBeforeMaskedValueChangeConfig());b=V.value,I=V.selection}e.setInputValue(b),S(e.props.onChange)&&e.props.onChange(r),e.isWindowsPhoneBrowser?e.setSelection(I.start,I.end,{deferred:!0}):e.setSelection(I.start,I.end)},e.onFocus=function(r){var u=e.props.beforeMaskedValueChange,m=e.maskOptions,p=m.mask,d=m.prefix;if(e.focused=!0,e.mounted=!0,p){if(e.value)y(e.maskOptions,e.value)<e.maskOptions.mask.length&&e.setCursorToEnd();else{var w=M(e.maskOptions,d),C=M(e.maskOptions,w),D=y(e.maskOptions,C),x=P(e.maskOptions,D),I={start:x,end:x};if(S(u)){var b=u({value:C,selection:I},{value:e.value,selection:null},null,e.getBeforeMaskedValueChangeConfig());C=b.value,I=b.selection}var V=C!==e.getInputValue();V&&e.setInputValue(C),V&&S(e.props.onChange)&&e.props.onChange(r),e.setSelection(I.start,I.end)}e.runSaveSelectionLoop()}S(e.props.onFocus)&&e.props.onFocus(r)},e.onBlur=function(r){var u=e.props.beforeMaskedValueChange,m=e.maskOptions.mask;if(e.stopSaveSelectionLoop(),e.focused=!1,m&&!e.props.alwaysShowMask&&q(e.maskOptions,e.value)){var p="";S(u)&&(p=u({value:p,selection:null},{value:e.value,selection:e.previousSelection},null,e.getBeforeMaskedValueChangeConfig()).value);var d=p!==e.getInputValue();d&&e.setInputValue(p),d&&S(e.props.onChange)&&e.props.onChange(r)}S(e.props.onBlur)&&e.props.onBlur(r)},e.onMouseDown=function(r){if(!e.focused&&document.addEventListener){e.mouseDownX=r.clientX,e.mouseDownY=r.clientY,e.mouseDownTime=new Date().getTime();var u=function m(p){if(document.removeEventListener("mouseup",m),e.focused){var d=Math.abs(p.clientX-e.mouseDownX),w=Math.abs(p.clientY-e.mouseDownY),C=Math.max(d,w),D=new Date().getTime()-e.mouseDownTime;(C<=10&&D<=200||C<=5&&D<=300)&&e.setCursorToEnd()}};document.addEventListener("mouseup",u)}S(e.props.onMouseDown)&&e.props.onMouseDown(r)},e.onPaste=function(r){S(e.props.onPaste)&&e.props.onPaste(r),r.defaultPrevented||(e.beforePasteState={value:e.getInputValue(),selection:e.getSelection()},e.setInputValue(""))},e.handleRef=function(r){e.props.children==null&&S(e.props.inputRef)&&e.props.inputRef(r)};var s=n.mask,f=n.maskChar,v=n.formatChars,i=n.alwaysShowMask,l=n.beforeMaskedValueChange,c=n.defaultValue,g=n.value;e.maskOptions=_(s,f,v),c==null&&(c=""),g==null&&(g=c);var h=R(g);if(e.maskOptions.mask&&(i||h)&&(h=M(e.maskOptions,h),S(l))){var k=n.value;n.value==null&&(k=c),h=l({value:h,selection:null},{value:k=R(k),selection:null},null,e.getBeforeMaskedValueChangeConfig()).value}return e.value=h,e}Q(o,t);var a=o.prototype;return a.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=le(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},a.componentDidUpdate=function(){var n=this.previousSelection,e=this.props,s=e.beforeMaskedValueChange,f=e.alwaysShowMask,v=e.mask,i=e.maskChar,l=e.formatChars,c=this.maskOptions,g=f||this.isFocused(),h=this.props.value!=null,k=h?R(this.props.value):this.value,r=n?n.start:null;if(this.maskOptions=_(v,i,l),this.maskOptions.mask){!c.mask&&this.isFocused()&&this.runSaveSelectionLoop();var u=this.maskOptions.mask&&this.maskOptions.mask!==c.mask;if(c.mask||h||(k=this.getInputValue()),(u||this.maskOptions.mask&&(k||g))&&(k=M(this.maskOptions,k)),u){var m=y(this.maskOptions,k);(r===null||m<r)&&(r=W(this.maskOptions,k)?m:P(this.maskOptions,m))}!this.maskOptions.mask||!q(this.maskOptions,k)||g||h&&this.props.value||(k="");var p={start:r,end:r};if(S(s)){var d=s({value:k,selection:p},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());k=d.value,p=d.selection}this.value=k;var w=this.getInputValue()!==this.value;w?(this.setInputValue(this.value),this.forceUpdate()):u&&this.forceUpdate();var C=!1;p.start!=null&&p.end!=null&&(C=!n||n.start!==p.start||n.end!==p.end),(C||w)&&this.setSelection(p.start,p.end)}else c.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},a.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&A(this.selectionDeferId),this.stopSaveSelectionLoop()},a.render=function(){var n,e=this.props,s=(e.mask,e.alwaysShowMask,e.maskChar,e.formatChars,e.inputRef,e.beforeMaskedValueChange,e.children),f=$(e,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(s){S(s)||j(!1);var v=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],i=B({},f);v.forEach(function(c){return delete i[c]}),n=s(i),v.filter(function(c){return n.props[c]!=null&&n.props[c]!==f[c]}).length&&j(!1)}else n=L.createElement("input",B({ref:this.handleRef},f));var l={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(f.disabled||f.readOnly||(l.onChange=this.onChange,l.onPaste=this.onPaste,l.onMouseDown=this.onMouseDown),f.value!=null&&(l.value=this.value)),n=L.cloneElement(n,l)},o}(L.Component),pe=ce;z.exports=pe;var fe=z.exports;const me=G(fe);export{me as I};
