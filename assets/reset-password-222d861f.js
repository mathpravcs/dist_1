import{r as N,m as Re,n as Ne,o as ke,j as s,G as m,S as z,T as V,A as Fe,h as fe,i as Te,u as Ve,F as Le,c as Be,a as le,k as Me,I as pe,O as de,d as $e,e as We,b as ee,p as qe,B as ze}from"./index-58b69ef5.js";import{A as he}from"./AnimateButton-ef4314e4.js";import{M as Ue}from"./index-ddd491d3.js";import{u as Ke}from"./useScriptRef-9200286b.js";import{E as Ge,a as Ze}from"./EyeOutlined-2c2e2be5.js";var me={};(function(c){Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var f=L(N),$=["placeholder","separator","isLastChild","ariaLabelOverride","shouldRender","inputStyle","focus","isDisabled","hasErrored","errorStyle","isSuccessed","successStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure","onSubmit"];function w(t){if(typeof WeakMap!="function")return null;var a=new WeakMap,i=new WeakMap;return(w=function(n){return n?i:a})(t)}function L(t,a){if(!a&&t&&t.__esModule)return t;if(t===null||W(t)!=="object"&&typeof t!="function")return{default:t};var i=w(a);if(i&&i.has(t))return i.get(t);var e={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if(u!=="default"&&Object.prototype.hasOwnProperty.call(t,u)){var d=n?Object.getOwnPropertyDescriptor(t,u):null;d&&(d.get||d.set)?Object.defineProperty(e,u,d):e[u]=t[u]}return e.default=t,i&&i.set(t,e),e}function C(){return C=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e])}return t},C.apply(this,arguments)}function B(t,a){if(t==null)return{};var i=M(t,a),e,n;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)e=u[n],!(a.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}function M(t,a){if(t==null)return{};var i={},e=Object.keys(t),n,u;for(u=0;u<e.length;u++)n=e[u],!(a.indexOf(n)>=0)&&(i[n]=t[n]);return i}function k(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function A(t,a){for(var i=0;i<a.length;i++){var e=a[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function p(t,a,i){return a&&A(t.prototype,a),i&&A(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function b(t,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(a&&a.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),a&&j(t,a)}function j(t,a){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},j(t,a)}function y(t){var a=U();return function(){var e=T(t),n;if(a){var u=T(this).constructor;n=Reflect.construct(e,arguments,u)}else n=e.apply(this,arguments);return F(this,n)}}function F(t,a){if(a&&(W(a)==="object"||typeof a=="function"))return a;if(a!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return l(t)}function l(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function U(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},T(t)}function v(t,a,i){return a in t?Object.defineProperty(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t}function W(t){"@babel/helpers - typeof";return W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},W(t)}var ve=8,ye=37,ge=39,xe=46,be=32,we=13,E=function(a){return W(a)==="object"},Se=function(t){b(i,t);var a=y(i);function i(e){var n;return k(this,i),n=a.call(this,e),v(l(n),"getClasses",function(){for(var u=arguments.length,d=new Array(u),r=0;r<u;r++)d[r]=arguments[r];return d.filter(function(o){return!E(o)&&o!==!1}).join(" ")}),v(l(n),"getType",function(){var u=n.props,d=u.isInputSecure,r=u.isInputNum;return d?"password":r?"tel":"text"}),v(l(n),"getAriaLabel",function(u,d){var r=n.props.ariaLabelOverride;return r||"".concat(u===0?"Please enter verification code. ":"").concat(d?"Digit":"Character"," ").concat(u+1)}),n.input=f.default.createRef(),n}return p(i,[{key:"componentDidMount",value:function(){var n=this.props,u=n.focus,d=n.shouldAutoFocus,r=this.input.current;r&&u&&d&&r.focus()}},{key:"componentDidUpdate",value:function(n){var u=this.props.focus,d=this.input.current;n.focus!==u&&d&&u&&(d.focus(),d.select())}},{key:"render",value:function(){var n=this.props,u=n.placeholder,d=n.separator,r=n.isLastChild;n.ariaLabelOverride;var o=n.shouldRender,h=n.inputStyle,S=n.focus,P=n.isDisabled,I=n.hasErrored,g=n.errorStyle,O=n.isSuccessed,_=n.successStyle,R=n.focusStyle,D=n.disabledStyle;n.shouldAutoFocus;var G=n.isInputNum,Z=n.index,K=n.value,H=n.className;n.isInputSecure,n.onSubmit;var J=B(n,$);return f.default.createElement("div",{className:H,style:{display:"flex",alignItems:"center"}},f.default.createElement("input",C({"aria-label":this.getAriaLabel(Z,G),style:Object.assign({width:"1em",textAlign:"center",padding:0},E(h)&&h,S&&E(R)&&R,P&&E(D)&&D,I&&!O&&E(g)&&g,O&&!I&&E(_)&&_),placeholder:u,className:this.getClasses(h,S&&R,P&&D,I&&!O&&g,O&&!I&&_),type:this.getType(),ref:this.input,disabled:P,value:K||""},J)),!r&&o&&d)}}]),i}(f.PureComponent),te=function(t){b(i,t);var a=y(i);function i(){var e;k(this,i);for(var n=arguments.length,u=new Array(n),d=0;d<n;d++)u[d]=arguments[d];return e=a.call.apply(a,[this].concat(u)),v(l(e),"state",{activeInput:0}),v(l(e),"getOtpValue",function(){return e.props.value?e.props.value.toString().split(""):[]}),v(l(e),"getPlaceholderValue",function(){var r=e.props,o=r.placeholder,h=r.numInputs;if(typeof o=="string"){if(o.length===h)return o;o.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}}),v(l(e),"handleOtpChange",function(r){var o=e.props.onChange,h=r.join("");o(h)}),v(l(e),"isInputValueValid",function(r){var o=e.props.isInputNum?!isNaN(parseInt(r,10)):typeof r=="string";return o&&r.trim().length===1}),v(l(e),"focusInput",function(r){var o=e.props.numInputs,h=Math.max(Math.min(o-1,r),0);e.setState({activeInput:h})}),v(l(e),"focusNextInput",function(){var r=e.state.activeInput;e.focusInput(r+1)}),v(l(e),"focusPrevInput",function(){var r=e.state.activeInput;e.focusInput(r-1)}),v(l(e),"changeCodeAtFocus",function(r){var o=e.state.activeInput,h=e.getOtpValue();h[o]=r[0],e.handleOtpChange(h)}),v(l(e),"handleOnPaste",function(r){r.preventDefault();var o=e.state.activeInput,h=e.props,S=h.numInputs,P=h.isDisabled;if(!P){for(var I=e.getOtpValue(),g=o,O=r.clipboardData.getData("text/plain"),_=e.props.isInputNum?O.replace(/\D/g,""):O,R=_.slice(0,S-o).split(""),D=0;D<S;++D)D>=o&&R.length>0&&(I[D]=R.shift(),g++);e.setState({activeInput:g},function(){e.focusInput(g),e.handleOtpChange(I)})}}),v(l(e),"handleOnChange",function(r){var o=r.target.value;e.isInputValueValid(o)&&e.changeCodeAtFocus(o)}),v(l(e),"handleOnKeyDown",function(r){r.keyCode===ve||r.key==="Backspace"?(r.preventDefault(),e.changeCodeAtFocus(""),e.focusInput(e.state.activeInput-1)):r.keyCode===xe||r.key==="Delete"?(r.preventDefault(),e.changeCodeAtFocus("")):r.keyCode===ye||r.key==="ArrowLeft"?(r.preventDefault(),e.focusPrevInput()):r.keyCode===ge||r.key==="ArrowRight"?(r.preventDefault(),e.focusNextInput()):r.keyCode===be||r.key===" "||r.key==="Spacebar"||r.key==="Space"?r.preventDefault():(r.keyCode===we||r.key==="Enter")&&e.props.onSubmit()}),v(l(e),"handleOnInput",function(r){var o=r.target.value;if(r.target.value){if(r.target.value&&r.target.value.length>1){r.preventDefault();for(var h=e.props.numInputs,S=e.state.activeInput,P=e.getOtpValue(),I=r.target.value.slice(0,h-S).split(""),g=0;g<h;++g)g>=S&&I.length>0&&(P[g]=I.shift());e.handleOtpChange(P),e.focusInput(e.props.numInputs)}else if(o&&o.trim().length>1)r.clipboardData={getData:function(){return o.trim()}},e.handleOnPaste(r);else if(e.isInputValueValid(r.target.value))e.focusNextInput();else if(!e.props.isInputNum){var O=r.nativeEvent;O.data===null&&O.inputType==="deleteContentBackward"&&(r.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}}}),v(l(e),"renderInputs",function(){for(var r=e.state.activeInput,o=e.props,h=o.id,S=o.autoComplete,P=o.numInputs,I=o.inputStyle,g=o.focusStyle,O=o.separator,_=o.separateAfter,R=_===void 0?1:_,D=o.isDisabled,G=o.disabledStyle,Z=o.hasErrored,K=o.errorStyle,H=o.isSuccessed,J=o.successStyle,Oe=o.shouldAutoFocus,je=o.isInputNum,Pe=o.isInputSecure,Ce=o.className,q=o.inputProps,De=o.onSubmit,re=[],ne=e.getOtpValue(),ae=e.getPlaceholderValue(),se=e.props["data-cy"],oe=e.props["data-testid"],ie=e.props["custom-test-attr"],ue=e.props["custom-test-id"],Ae=function(x){var X=void 0;(x+1)%parseInt(R)===0?X=!0:X=!1;var ce={};ie&&(ce[ie]=ue&&"".concat(ue,"-").concat(x));var Y={};q&&(Array.isArray(q)?q[x]&&(Y=q[x]):Y=q),re.push(f.default.createElement(Se,C({id:h&&"".concat(h,"-").concat(x),autoComplete:S??"off",placeholder:ae&&ae[x],key:x,index:x,focus:r===x,value:ne&&ne[x],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(Ee){e.setState({activeInput:x}),Ee.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:O,inputStyle:I,focusStyle:g,isLastChild:x===P-1,isDisabled:D,disabledStyle:G,hasErrored:Z,errorStyle:K,isSuccessed:H,successStyle:J,shouldAutoFocus:Oe,isInputNum:je,isInputSecure:Pe,className:Ce,"data-cy":se&&"".concat(se,"-").concat(x),"data-testid":oe&&"".concat(oe,"-").concat(x),shouldRender:X,onSubmit:De},Y,ce)))},Q=0;Q<P;Q++)Ae(Q);return re}),e}return p(i,[{key:"componentDidUpdate",value:function(){var n=this.props.value,u=this.state.activeInput;n==""&&u>0&&this.setState({activeInput:0})}},{key:"render",value:function(){var n=this.props.containerStyle;return f.default.createElement("div",{style:Object.assign({display:"flex"},E(n)&&n),className:E(n)?"":n},this.renderInputs())}}]),i}(f.Component);v(te,"defaultProps",{numInputs:4,onChange:function(a){return console.log(a)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1,onSubmit:function(a){return console.log(a)}});var Ie=te;c.default=Ie})(me);const He=Re(me);function Je({handleShow:c}){const[f,$]=N.useState(void 0),[w,L]=N.useState(""),[C,B]=N.useState(!1),M=window.location.href,k=new URL(M),A=k.searchParams.get("code");A&&$(A);const p=k.searchParams.get("token");p&&localStorage.setItem("passwordToken",p);const b=M.replace(`&code=${A}`,"").replace(`?token=${p}`,"");window.history.replaceState({},document.title,b);const j=()=>{B(!1),f===w?c(!0):(B(!0),L(""))},y=Ne(),F=y.palette.mode===ke.DARK?y.palette.grey[200]:y.palette.grey[300];return s.jsxs(m,{container:!0,spacing:3,children:[s.jsx(m,{item:!0,xs:12,children:s.jsxs(z,{spacing:1,children:[s.jsx(V,{variant:"h3",children:"Digite o código de verificação"}),s.jsx(V,{color:"secondary",children:"Enviamos para você por e-mail."})]})}),C&&s.jsx(m,{item:!0,xs:12,children:s.jsx(Fe,{variant:"filled",severity:"error",icon:s.jsx(Ue,{}),children:"Código inválido!"})}),s.jsx(m,{item:!0,xs:12,children:s.jsxs(m,{container:!0,spacing:3,children:[s.jsx(m,{item:!0,xs:12,children:s.jsx(He,{value:w,onChange:l=>{L(l)},numInputs:6,containerStyle:{justifyContent:"space-between"},inputStyle:{width:"100%",margin:"8px",padding:"10px",border:`1px solid ${F}`,borderRadius:4,":hover":{borderColor:y.palette.primary.main}},focusStyle:{outline:"none",boxShadow:y.customShadows.primary,border:`1px solid ${y.palette.primary.main}`}})}),s.jsx(m,{item:!0,xs:12,children:s.jsx(he,{children:s.jsx(fe,{disableElevation:!0,fullWidth:!0,size:"large",type:"submit",variant:"contained",onClick:j,children:"Continuar"})})}),s.jsx(m,{item:!0,xs:12,children:s.jsxs(z,{direction:"column",justifyContent:"space-between",alignItems:"baseline",children:[s.jsx(V,{children:"Não recebeu o e-mail? Verifique sua caixa de SPAM ou"}),s.jsx(V,{variant:"body1",sx:{minWidth:85,ml:2,textDecoration:"none",cursor:"pointer"},color:"primary",children:"clique aqui para reenviar o e-mail"})]})})]})})]})}const Qe=c=>new RegExp(/[0-9]/).test(c),Xe=c=>new RegExp(/[a-z]/).test(c)&&new RegExp(/[A-Z]/).test(c),Ye=c=>new RegExp(/[!#@$%^&*)(+=._-]/).test(c),et=c=>c<1?{label:"Pobre",color:"error.main"}:c<2?{label:"Pobre",color:"error.main"}:c<3?{label:"Fraca",color:"warning.main"}:c<4?{label:"Normal",color:"warning.dark"}:c<5?{label:"Bom",color:"success.main"}:c<6?{label:"Forte",color:"success.dark"}:{label:"Forte",color:"success.dark"},tt=c=>{let f=0;return c.length>3&&(f+=1),c.length>5&&(f+=1),c.length>7&&(f+=1),Qe(c)&&(f+=1),Ye(c)&&(f+=1),Xe(c)&&(f+=1),f};function rt(){const c=Ke(),f=Te(),{isLoggedIn:$}=Ve(),[w,L]=N.useState(),[C,B]=N.useState(!1),M=()=>{B(!C)},k=p=>{p.preventDefault()},A=p=>{const b=tt(p);L(et(b))};return N.useEffect(()=>{A("")},[]),s.jsxs(m,{container:!0,spacing:3,children:[s.jsx(m,{item:!0,xs:12,children:s.jsxs(z,{sx:{mb:{xs:-.5,sm:.5}},spacing:1,children:[s.jsx(V,{variant:"h3",children:"Redefinição de Senha"}),s.jsx(V,{color:"secondary",children:"Digite sua nova senha"})]})}),s.jsx(m,{item:!0,xs:12,children:s.jsx(Le,{initialValues:{password:"",confirmPassword:"",submit:null},validationSchema:Be().shape({password:le().max(255).required("Digite a senha").min(8,"A senha deve ter pelo menos 8 caracteres").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/,"A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial"),confirmPassword:le().required("Confirme a nova senha").test("confirmPassword","As senhas não coincidem!",(p,b)=>b.parent.password===p)}),onSubmit:async(p,{setErrors:b,setStatus:j,setSubmitting:y})=>{const F=localStorage.getItem("passwordToken");try{y(!0),await Me.post("/auth/reset-password",{token:F,password:p.password,confirm_password:p.confirmPassword}),j({success:!0,successMessage:"Senha alterada com sucesso!"}),setTimeout(()=>{f($?"/auth/login":"/login",{replace:!0})},1500)}catch(l){c.current&&(j({success:!1}),b({submit:l.errors}),y(!1))}finally{y(!1)}},children:({errors:p,handleBlur:b,handleChange:j,handleSubmit:y,isSubmitting:F,touched:l,values:U})=>s.jsx("form",{noValidate:!0,onSubmit:y,children:s.jsxs(m,{container:!0,spacing:3,children:[s.jsxs(m,{item:!0,xs:12,children:[s.jsxs(z,{spacing:1,children:[s.jsx(pe,{htmlFor:"password-reset",children:"Nova Senha"}),s.jsx(de,{fullWidth:!0,error:!!(l.password&&p.password),id:"password-reset",type:C?"text":"password",value:U.password,name:"password",onBlur:b,onChange:T=>{j(T),A(T.target.value)},endAdornment:s.jsx($e,{position:"end",children:s.jsx(We,{"aria-label":"toggle password visibility",onClick:M,onMouseDown:k,edge:"end",color:"secondary",children:C?s.jsx(Ge,{}):s.jsx(Ze,{})})}),placeholder:"Digite sua nova senha"})]}),l.password&&p.password&&s.jsx(ee,{error:!0,id:"helper-text-password-reset",children:p.password}),p.submit&&s.jsx(m,{item:!0,xs:12,children:s.jsx(ee,{error:!0,children:p.submit})}),s.jsx(qe,{fullWidth:!0,sx:{mt:2},children:s.jsxs(m,{container:!0,spacing:2,alignItems:"center",children:[s.jsx(m,{item:!0,children:s.jsx(ze,{sx:{bgcolor:w==null?void 0:w.color,width:85,height:8,borderRadius:"7px"}})}),s.jsx(m,{item:!0,children:s.jsx(V,{variant:"subtitle1",fontSize:"0.75rem",children:w==null?void 0:w.label})})]})})]}),s.jsxs(m,{item:!0,xs:12,children:[s.jsxs(z,{spacing:1,children:[s.jsx(pe,{htmlFor:"confirm-password-reset",children:"Confirme a Nova Senha"}),s.jsx(de,{fullWidth:!0,error:!!(l.confirmPassword&&p.confirmPassword),id:"confirm-password-reset",type:"password",value:U.confirmPassword,name:"confirmPassword",onBlur:b,onChange:j,placeholder:"Confirme sua nova senha"})]}),l.confirmPassword&&p.confirmPassword&&s.jsx(ee,{error:!0,id:"helper-text-confirm-password-reset",children:p.confirmPassword})]}),s.jsx(m,{item:!0,xs:12,children:s.jsx(he,{children:s.jsx(fe,{disableElevation:!0,disabled:F,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Enviar"})})})]})})})})]})}function ct(){const[c,f]=N.useState(!1);return s.jsx(s.Fragment,{children:c?s.jsx(rt,{}):s.jsx(Je,{handleShow:f})})}export{ct as default};
