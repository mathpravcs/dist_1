import{v as F,t as U,w as N,_ as o,r as d,x as E,y as R,bv as I,j as l,C as L,D,bw as Z,aN as x,bx as tt,by as et,bz as st,bA as B,bm as ot}from"./index-7f10300b.js";function at(t){return U("MuiListItem",t)}const nt=F("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),b=nt;function it(t){return U("MuiListItemSecondaryAction",t)}F("MuiListItemSecondaryAction",["root","disableGutters"]);const rt=["className"],ct=t=>{const{disableGutters:e,classes:s}=t;return D({root:["root",e&&"disableGutters"]},it,s)},lt=N("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.disableGutters&&e.disableGutters]}})(({ownerState:t})=>o({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),z=d.forwardRef(function(e,s){const a=E({props:e,name:"MuiListItemSecondaryAction"}),{className:n}=a,i=R(a,rt),p=d.useContext(I),u=o({},a,{disableGutters:p.disableGutters}),g=ct(u);return l.jsx(lt,o({className:L(g.root,n),ownerState:u,ref:s},i))});z.muiName="ListItemSecondaryAction";const dt=z,pt=["className"],ut=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],mt=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.button&&e.button,s.hasSecondaryAction&&e.secondaryAction]},bt=t=>{const{alignItems:e,button:s,classes:a,dense:n,disabled:i,disableGutters:p,disablePadding:u,divider:g,hasSecondaryAction:f,selected:A}=t;return D({root:["root",n&&"dense",!p&&"gutters",!u&&"padding",g&&"divider",i&&"disabled",s&&"button",e==="flex-start"&&"alignItemsFlexStart",f&&"secondaryAction",A&&"selected"],container:["container"]},at,a)},gt=N("div",{name:"MuiListItem",slot:"Root",overridesResolver:mt})(({theme:t,ownerState:e})=>o({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&o({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${Z.root}`]:{paddingRight:48}},{[`&.${b.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${b.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:x(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${b.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:x(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${b.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${b.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:x(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:x(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),ft=N("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),vt=d.forwardRef(function(e,s){const a=E({props:e,name:"MuiListItem"}),{alignItems:n="center",autoFocus:i=!1,button:p=!1,children:u,className:g,component:f,components:A={},componentsProps:G={},ContainerComponent:O="li",ContainerProps:{className:T}={},dense:j=!1,disabled:M=!1,disableGutters:$=!1,disablePadding:H=!1,divider:W=!1,focusVisibleClassName:Y,secondaryAction:h,selected:q=!1,slotProps:J={},slots:K={}}=a,Q=R(a.ContainerProps,pt),X=R(a,ut),k=d.useContext(I),P=d.useMemo(()=>({dense:j||k.dense||!1,alignItems:n,disableGutters:$}),[n,k.dense,j,$]),S=d.useRef(null);tt(()=>{i&&S.current&&S.current.focus()},[i]);const m=d.Children.toArray(u),w=m.length&&et(m[m.length-1],["ListItemSecondaryAction"]),y=o({},a,{alignItems:n,autoFocus:i,button:p,dense:P.dense,disabled:M,disableGutters:$,disablePadding:H,divider:W,hasSecondaryAction:w,selected:q}),V=bt(y),_=st(S,s),C=K.root||A.Root||gt,v=J.root||G.root||{},r=o({className:L(V.root,v.className,g),disabled:M},X);let c=f||"li";return p&&(r.component=f||"div",r.focusVisibleClassName=L(b.focusVisible,Y),c=ot),w?(c=!r.component&&!f?"div":c,O==="li"&&(c==="li"?c="div":r.component==="li"&&(r.component="div")),l.jsx(I.Provider,{value:P,children:l.jsxs(ft,o({as:O,className:L(V.container,T),ref:_,ownerState:y},Q,{children:[l.jsx(C,o({},v,!B(C)&&{as:c,ownerState:o({},y,v.ownerState)},r,{children:m})),m.pop()]}))})):l.jsx(I.Provider,{value:P,children:l.jsxs(C,o({},v,{as:c,ref:_},!B(C)&&{ownerState:o({},y,v.ownerState)},r,{children:[m,h&&l.jsx(dt,{children:h})]}))})}),Ct=vt;export{Ct as L};
