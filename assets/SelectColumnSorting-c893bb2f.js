import{t as H,v as T,w as $,bm as Z,_ as c,bn as U,r as d,y as _,bo as ee,aL as te,j as o,C as L,aK as g,D as N,bp as O,aN as oe,x as ne,q,B as se,n as ae,S as ce,p as re,af as ie,O as le,T as E,ag as de,bq as ue}from"./index-3da84cb3.js";function pe(e){return H("PrivateSwitchBase",e)}T("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const he=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],fe=e=>{const{classes:t,checked:s,disabled:r,edge:n}=e,a={root:["root",s&&"checked",r&&"disabled",n&&`edge${g(n)}`],input:["input"]};return N(a,pe,t)},me=$(Z)(({ownerState:e})=>c({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),xe=$("input",{shouldForwardProp:U})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Ce=d.forwardRef(function(t,s){const{autoFocus:r,checked:n,checkedIcon:a,className:u,defaultChecked:k,disabled:y,disableFocusRipple:p=!1,edge:b=!1,icon:B,id:h,inputProps:j,inputRef:S,name:v,onBlur:f,onChange:m,onFocus:x,readOnly:V,required:G=!1,tabIndex:K,type:I,value:R}=t,A=_(t,he),[F,W]=ee({controlled:n,default:!!k,name:"SwitchBase",state:"checked"}),l=te(),J=i=>{x&&x(i),l&&l.onFocus&&l.onFocus(i)},Q=i=>{f&&f(i),l&&l.onBlur&&l.onBlur(i)},X=i=>{if(i.nativeEvent.defaultPrevented)return;const D=i.target.checked;W(D),m&&m(i,D)};let C=y;l&&typeof C>"u"&&(C=l.disabled);const Y=I==="checkbox"||I==="radio",w=c({},t,{checked:F,disabled:C,disableFocusRipple:p,edge:b}),M=fe(w);return o.jsxs(me,c({component:"span",className:L(M.root,u),centerRipple:!0,focusRipple:!p,disabled:C,tabIndex:null,role:void 0,onFocus:J,onBlur:Q,ownerState:w,ref:s},A,{children:[o.jsx(xe,c({autoFocus:r,checked:n,defaultChecked:k,className:M.input,disabled:C,id:Y?h:void 0,name:v,onChange:X,readOnly:V,ref:S,required:G,ownerState:w,tabIndex:K,type:I},I==="checkbox"&&R===void 0?{}:{value:R},j)),F?a:B]}))}),ge=Ce,ke=O(o.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),be=O(o.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),ve=O(o.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function Ie(e){return H("MuiCheckbox",e)}const ye=T("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),z=ye,Be=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],je=e=>{const{classes:t,indeterminate:s,color:r,size:n}=e,a={root:["root",s&&"indeterminate",`color${g(r)}`,`size${g(n)}`]},u=N(a,Ie,t);return c({},t,u)},Se=$(ge,{shouldForwardProp:e=>U(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.indeterminate&&t.indeterminate,t[`size${g(s.size)}`],s.color!=="default"&&t[`color${g(s.color)}`]]}})(({theme:e,ownerState:t})=>c({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${t.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:oe(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${z.checked}, &.${z.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${z.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),we=o.jsx(be,{}),ze=o.jsx(ke,{}),Pe=o.jsx(ve,{}),$e=d.forwardRef(function(t,s){var r,n;const a=ne({props:t,name:"MuiCheckbox"}),{checkedIcon:u=we,color:k="primary",icon:y=ze,indeterminate:p=!1,indeterminateIcon:b=Pe,inputProps:B,size:h="medium",className:j}=a,S=_(a,Be),v=p?b:y,f=p?b:u,m=c({},a,{color:k,indeterminate:p,size:h}),x=je(m);return o.jsx(Se,c({type:"checkbox",inputProps:c({"data-indeterminate":p},B),icon:d.cloneElement(v,{fontSize:(r=v.props.fontSize)!=null?r:h}),checkedIcon:d.cloneElement(f,{fontSize:(n=f.props.fontSize)!=null?n:h}),ownerState:m,ref:s,className:L(x.root,j)},S,{classes:x}))}),Oe=$e;var Re={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]},name:"caret-down",theme:"outlined"};const Fe=Re;var Me=function(t,s){return d.createElement(q,c({},t,{ref:s,icon:Fe}))},De=d.forwardRef(Me);const Ee=De;var He={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"}}]},name:"caret-up",theme:"outlined"};const Te=He;var Ue=function(t,s){return d.createElement(q,c({},t,{ref:s,icon:Te}))},_e=d.forwardRef(Ue);const Le=_e,P=({type:e})=>{const t=ae();return o.jsxs(ce,{sx:{color:"secondary.light"},children:[o.jsx(Le,{style:{fontSize:"0.625rem",color:e==="asc"?t.palette.text.secondary:"inherit"}}),o.jsx(Ee,{style:{fontSize:"0.625rem",marginTop:-2,color:e==="desc"?t.palette.text.secondary:"inherit"}})]})},Ke=({column:e,sort:t})=>o.jsx(se,{...t&&{onClick:e.getToggleSortingHandler(),className:"cursor-pointer prevent-select"},children:{asc:o.jsx(P,{type:"asc"}),desc:o.jsx(P,{type:"desc"})}[e.getIsSorted()]??o.jsx(P,{})}),Ne=48,qe=8,Ve={PaperProps:{style:{maxHeight:Ne*4.5+qe,width:200}}},Ae=({getState:e,getAllColumns:t,setSorting:s,size:r="medium"})=>o.jsx(re,{sx:{width:200},children:o.jsx(ie,{id:"column-sorting",multiple:!0,displayEmpty:!0,value:e().sorting.length>0?e().sorting:[],input:o.jsx(le,{id:"select-column-sorting",placeholder:"select column"}),renderValue:n=>{const a=t().filter(u=>n.length>0&&u.id===n[0].id)[0];return a?o.jsxs(E,{variant:"subtitle2",children:["(",typeof a.columnDef.header=="string"?a.columnDef.header:"#",")"]}):o.jsx(E,{variant:"subtitle2",children:"Filtar"})},MenuProps:Ve,size:r,children:t().map(n=>n.columnDef.accessorKey&&n.getCanSort()&&o.jsxs(de,{value:n.id,onClick:()=>s(e().sorting.length>0&&n.id===e().sorting[0].id?[]:[{id:n.id,desc:!1}]),children:[o.jsx(Oe,{checked:e().sorting.length>0&&n.id===e().sorting[0].id,color:"success"}),o.jsx(ue,{primary:n.columnDef.header})]},n.id))})});export{Oe as C,Ke as H,Ae as S,ge as a};
