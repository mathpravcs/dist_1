import{aC as w,aB as N,bi as D,aD as v,aE as n,_ as o,bj as _,r as E,aF as U,aG as z,j as g,aJ as F,aK as I}from"./index-58b69ef5.js";function K(r){return w("MuiCircularProgress",r)}const B=N("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]),O=B,G=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,P,S,b,$;const a=44,W=D(P||(P=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),J=D(S||(S=l`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),L=r=>{const{classes:s,variant:e,color:t,disableShrink:d}=r,u={root:["root",e,`color${n(t)}`],svg:["svg"],circle:["circle",`circle${n(e)}`,d&&"circleDisableShrink"]};return I(u,K,s)},V=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.root,s[e.variant],s[`color${n(e.color)}`]]}})(({ownerState:r,theme:s})=>o({display:"inline-block"},r.variant==="determinate"&&{transition:s.transitions.create("transform")},r.color!=="inherit"&&{color:(s.vars||s).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&_(b||(b=l`
      animation: ${0} 1.4s linear infinite;
    `),W)),Z=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,s)=>s.svg})({display:"block"}),q=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.circle,s[`circle${n(e.variant)}`],e.disableShrink&&s.circleDisableShrink]}})(({ownerState:r,theme:s})=>o({stroke:"currentColor"},r.variant==="determinate"&&{transition:s.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&_($||($=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),J)),A=E.forwardRef(function(s,e){const t=U({props:s,name:"MuiCircularProgress"}),{className:d,color:u="primary",disableShrink:M=!1,size:m=40,style:R,thickness:i=3.6,value:f=0,variant:k="indeterminate"}=t,j=z(t,G),c=o({},t,{color:u,disableShrink:M,size:m,thickness:i,value:f,variant:k}),p=L(c),h={},x={},C={};if(k==="determinate"){const y=2*Math.PI*((a-i)/2);h.strokeDasharray=y.toFixed(3),C["aria-valuenow"]=Math.round(f),h.strokeDashoffset=`${((100-f)/100*y).toFixed(3)}px`,x.transform="rotate(-90deg)"}return g.jsx(V,o({className:F(p.root,d),style:o({width:m,height:m},x,R),ownerState:c,ref:e,role:"progressbar"},C,j,{children:g.jsx(Z,{className:p.svg,ownerState:c,viewBox:`${a/2} ${a/2} ${a} ${a}`,children:g.jsx(q,{className:p.circle,style:h,ownerState:c,cx:a,cy:a,r:(a-i)/2,fill:"none",strokeWidth:i})})}))}),Q=A;export{Q as C,O as c};
