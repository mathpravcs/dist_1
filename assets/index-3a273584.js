import{aB as se,aC as ie,aD as G,aE as $,_ as D,r as f,aF as le,aG as ce,aH as Fe,aI as Pe,T as O,j as e,aJ as oe,S as d,aK as de,aL as re,aM as ke,aN as Te,a1 as me,a2 as Re,a3 as Y,a4 as Be,h as N,k as L,c as ue,a as j,aO as he,a6 as pe,B as K,a7 as xe,a8 as ge,a9 as je,Q as U,G as m,I as p,aa as S,p as W,ac as q,ad as a,b as z,ab as fe,ae as Ee,M as ve,af as Me,n as be,w as Ae,x as $e,ak as De,D as Ie,y as Ne,z as Oe,C as We,E as qe,H as Z,J as ee,K as ae,N as ze,P as Le,U as Ge,V as Ve,W as He,X as Je,Y as Ke,Z as Ue,ar as H,ag as Q,ah as te}from"./index-005a6a5d.js";import{a as Xe,S as Qe,R as Ye,H as Ze,r as eo,I as ne}from"./index-e1574722.js";import{D as oo,P as ro,a as ao}from"./PlusOutlined-3a5f3e34.js";import{I as A}from"./index-bd3179cc.js";import{L as Ce,A as Se,C as to,E as no}from"./CircularWithPath-5d0c8e8b.js";import{C as so}from"./CircularProgress-533f5603.js";function io(o){return ie("MuiFormControlLabel",o)}const lo=se("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),J=lo,co=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],mo=o=>{const{classes:n,disabled:r,labelPlacement:x,error:b,required:w}=o,P={root:["root",r&&"disabled",`labelPlacement${$(x)}`,b&&"error",w&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",b&&"error"]};return de(P,io,n)},uo=G("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(o,n)=>{const{ownerState:r}=o;return[{[`& .${J.label}`]:n.label},n.root,n[`labelPlacement${$(r.labelPlacement)}`]]}})(({theme:o,ownerState:n})=>D({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${J.disabled}`]:{cursor:"default"}},n.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},n.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},n.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${J.label}`]:{[`&.${J.disabled}`]:{color:(o.vars||o).palette.text.disabled}}})),ho=G("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(o,n)=>n.asterisk})(({theme:o})=>({[`&.${J.error}`]:{color:(o.vars||o).palette.error.main}})),po=f.forwardRef(function(n,r){var x,b;const w=le({props:n,name:"MuiFormControlLabel"}),{className:P,componentsProps:k={},control:y,disabled:F,disableTypography:l,label:t,labelPlacement:c="end",required:s,slotProps:C={}}=w,B=ce(w,co),v=Fe(),R=(x=F??y.props.disabled)!=null?x:v==null?void 0:v.disabled,M=s??y.props.required,h={disabled:R,required:M};["checked","name","onChange","value","inputRef"].forEach(I=>{typeof y.props[I]>"u"&&typeof w[I]<"u"&&(h[I]=w[I])});const _=Pe({props:w,muiFormControl:v,states:["error"]}),i=D({},w,{disabled:R,labelPlacement:c,required:M,error:_.error}),g=mo(i),E=(b=C.typography)!=null?b:k.typography;let u=t;return u!=null&&u.type!==O&&!l&&(u=e.jsx(O,D({component:"span"},E,{className:oe(g.label,E==null?void 0:E.className),children:u}))),e.jsxs(uo,D({className:oe(g.root,P),ownerState:i,ref:r},B,{children:[f.cloneElement(y,h),M?e.jsxs(d,{display:"block",children:[u,e.jsxs(ho,{ownerState:i,"aria-hidden":!0,className:g.asterisk,children:[" ","*"]})]}):u]}))}),we=po;function xo(o){return ie("MuiSwitch",o)}const go=se("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),T=go,jo=["className","color","edge","size","sx"],fo=o=>{const{classes:n,edge:r,size:x,color:b,checked:w,disabled:P}=o,k={root:["root",r&&`edge${$(r)}`,`size${$(x)}`],switchBase:["switchBase",`color${$(b)}`,w&&"checked",P&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},y=de(k,xo,n);return D({},n,y)},vo=G("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(o,n)=>{const{ownerState:r}=o;return[n.root,r.edge&&n[`edge${$(r.edge)}`],n[`size${$(r.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${T.thumb}`]:{width:16,height:16},[`& .${T.switchBase}`]:{padding:4,[`&.${T.checked}`]:{transform:"translateX(16px)"}}}}]}),bo=G(Xe,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(o,n)=>{const{ownerState:r}=o;return[n.switchBase,{[`& .${T.input}`]:n.input},r.color!=="default"&&n[`color${$(r.color)}`]]}})(({theme:o})=>({position:"absolute",top:0,left:0,zIndex:1,color:o.vars?o.vars.palette.Switch.defaultColor:`${o.palette.mode==="light"?o.palette.common.white:o.palette.grey[300]}`,transition:o.transitions.create(["left","transform"],{duration:o.transitions.duration.shortest}),[`&.${T.checked}`]:{transform:"translateX(20px)"},[`&.${T.disabled}`]:{color:o.vars?o.vars.palette.Switch.defaultDisabledColor:`${o.palette.mode==="light"?o.palette.grey[100]:o.palette.grey[600]}`},[`&.${T.checked} + .${T.track}`]:{opacity:.5},[`&.${T.disabled} + .${T.track}`]:{opacity:o.vars?o.vars.opacity.switchTrackDisabled:`${o.palette.mode==="light"?.12:.2}`},[`& .${T.input}`]:{left:"-100%",width:"300%"}}),({theme:o})=>({"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:re(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(o.palette).filter(([,n])=>n.main&&n.light).map(([n])=>({props:{color:n},style:{[`&.${T.checked}`]:{color:(o.vars||o).palette[n].main,"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette[n].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:re(o.palette[n].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${T.disabled}`]:{color:o.vars?o.vars.palette.Switch[`${n}DisabledColor`]:`${o.palette.mode==="light"?ke(o.palette[n].main,.62):Te(o.palette[n].main,.55)}`}},[`&.${T.checked} + .${T.track}`]:{backgroundColor:(o.vars||o).palette[n].main}}}))]})),Co=G("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(o,n)=>n.track})(({theme:o})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:o.transitions.create(["opacity","background-color"],{duration:o.transitions.duration.shortest}),backgroundColor:o.vars?o.vars.palette.common.onBackground:`${o.palette.mode==="light"?o.palette.common.black:o.palette.common.white}`,opacity:o.vars?o.vars.opacity.switchTrack:`${o.palette.mode==="light"?.38:.3}`})),So=G("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(o,n)=>n.thumb})(({theme:o})=>({boxShadow:(o.vars||o).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),wo=f.forwardRef(function(n,r){const x=le({props:n,name:"MuiSwitch"}),{className:b,color:w="primary",edge:P=!1,size:k="medium",sx:y}=x,F=ce(x,jo),l=D({},x,{color:w,edge:P,size:k}),t=fo(l),c=e.jsx(So,{className:t.thumb,ownerState:l});return e.jsxs(vo,{className:oe(t.root,b),sx:y,ownerState:l,children:[e.jsx(bo,D({type:"checkbox",icon:c,checkedIcon:c,ref:r,ownerState:l},F,{classes:D({},t,{root:t.switchBase})})),e.jsx(Co,{className:t.track,ownerState:l})]})}),_e=wo;function _o({id:o,title:n,open:r,handleClose:x,name:b}){const w=async k=>{try{await L.delete(`/inventory/suppliers/${k}`)}catch(y){throw console.error("Erro ao deletar o polo:",y),y}},P=async()=>{try{await w(o),x(),window.location.reload()}catch{}};return e.jsx(me,{open:r,onClose:x,keepMounted:!0,TransitionComponent:Re,maxWidth:"xs","aria-labelledby":"column-delete-title","aria-describedby":"column-delete-description",children:e.jsx(Y,{sx:{mt:2,my:1},children:e.jsxs(d,{alignItems:"center",spacing:3.5,children:[e.jsx(Be,{color:"error",sx:{width:72,height:72,fontSize:"1.75rem"},children:e.jsx(oo,{})}),e.jsxs(d,{spacing:2,children:[e.jsx(O,{variant:"h4",align:"center",children:"Você tem certeza?"}),e.jsxs(O,{align:"center",children:["Você está deletando o departamento",e.jsx(O,{variant:"subtitle1",component:"span",sx:{ml:.5},children:b}),", esta operação não pode ser desfeita."]})]}),e.jsxs(d,{direction:"row",spacing:2,sx:{width:1},children:[e.jsx(N,{fullWidth:!0,onClick:x,color:"secondary",variant:"outlined",children:"Cancelar"}),e.jsx(N,{fullWidth:!0,color:"error",variant:"contained",onClick:P,autoFocus:!0,children:"Deletar"})]})]})})})}function yo({handleClose:o,modalEdit:n,data:r}){const[x,b]=f.useState(!0),[w,P]=f.useState([]),[k,y]=f.useState({}),F=i=>({nome:(r==null?void 0:r.nome)||"",cnpj:(r==null?void 0:r.cnpj)||"",inscricao_estadual:(r==null?void 0:r.inscricao_estadual)||"",rua:(r==null?void 0:r.rua)||"",numero:(r==null?void 0:r.numero)||"",complemento:(r==null?void 0:r.complemento)||"",bairro:(r==null?void 0:r.bairro)||"",cep:(r==null?void 0:r.cep)||"",cidade:(r==null?void 0:r.cidade)||"",estado:(r==null?void 0:r.estado)||"",email:(r==null?void 0:r.email)||"",telefone:(r==null?void 0:r.telefone)||"",nome_contato:(r==null?void 0:r.nome_contato)||"",telefone_contato:(r==null?void 0:r.telefone_contato)||"",email_contato:(r==null?void 0:r.email_contato)||"",categoria:(r==null?void 0:r.categoria.id)||"",condicoes_pagamento:(r==null?void 0:r.condicoes_pagamento.split(","))||[],status:(r==null?void 0:r.status)||""}),l=ue().shape({nome:j().required("O nome do fornecedor deve ser informado"),cnpj:j().required("O CNPJ do fornecedor deve ser informado"),inscricao_estadual:j(),rua:j().required("O logradouro deve ser informado"),bairro:j().required("O bairro deve ser informado"),cep:j().required("O CEP deve ser informado"),estado:j().required("O estado deve ser informado"),cidade:j().required("A cidade deve ser informada"),email:j().email("Formato de e-mail inválido").required("O email deve ser informado"),telefone:j().required("O telefone deve ser informado"),nome_contato:j().required("O nome do contato deve ser informado"),telefone_contato:j().required("O telefone do contato deve ser informado"),email_contato:j().required("O email do contato deve ser informado").email("Formato de e-mail inválido"),categoria:j().required("A categoria do fornecedor deve ser informada"),condicoes_pagamento:he().min(1,"Pelo menos uma condição de pagamento deve ser selecionada").required("As condições de pagamento devem ser informadas")}),t=pe({initialValues:F(),validationSchema:l,enableReinitialize:!0,onSubmit:async(i,{setSubmitting:g,resetForm:E})=>{try{(await L.put(`/inventory/suppliers/${r.id}`,{nome:i.nome,cnpj:i.cnpj.replace(/\D/g,""),inscricao_estadual:i.inscricao_estadual,rua:i.rua,numero:i.numero,complemento:i.complemento,bairro:i.bairro,cep:i.cep.replace(/\D/g,""),estado:i.estado,cidade:i.cidade,email:i.email,nome_contato:i.nome_contato,email_contato:i.email_contato,telefone_contato:i.telefone_contato.replace(/\D/g,""),condicoes_pagamento:i.condicoes_pagamento.join(","),status:i.status,categoriaId:i.categoria,telefone:i.telefone.replace(/\D/g,""),departamentoId:i.departamento,descricao:i.descricao})).data.success===!0&&(E(),o())}catch(u){console.error(u)}}}),{errors:c,touched:s,handleSubmit:C,isSubmitting:B,getFieldProps:v,setFieldValue:R}=t,M=async i=>{try{const g=await fetch(`https://brasilapi.com.br/api/cep/v2/${i}`);if(!g.ok)throw new Error("Não foi possível encontrar o CEP");return await g.json()}catch(g){return console.error(g),null}},h=async i=>{const{value:g}=i.target;await R("cep",g);const E=g.replace(/\D/g,"");if(E.length===8){const u=await M(E);u&&(y(u),await R("logradouro",u.street),await R("bairro",u.neighborhood),await R("cidade",u.city),await R("estado",u.state))}},_=async()=>{try{const i=await L.get("/inventory/categories/");P(i.data.categorias.rows)}catch(i){console.error("Error fetching categorias:",i)}finally{b(!1)}};return f.useEffect(()=>{_()},[]),e.jsx("div",{children:e.jsx(me,{open:n,keepMounted:!0,onClose:()=>{o()},"aria-describedby":"alert-dialog-slide-description",maxWidth:"md",children:e.jsx(K,{sx:{p:1,py:1.5},children:e.jsx(Y,{children:e.jsx(xe,{value:t,children:e.jsx(Ce,{dateAdapter:Se,children:e.jsxs(ge,{autoComplete:"off",noValidate:!0,onSubmit:C,children:[e.jsx(je,{children:"Novo fornecedor"}),e.jsx(U,{}),e.jsx(Y,{sx:{p:2.5},children:e.jsx(m,{container:!0,spacing:3,children:e.jsx(m,{item:!0,xs:12,children:e.jsxs(m,{container:!0,spacing:3,children:[e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"nome",children:"Nome do fornecedor"}),e.jsx(S,{fullWidth:!0,id:"nome",placeholder:"Nome",...v("nome"),error:!!(s.nome&&c.nome),helperText:e.jsx(e.Fragment,{children:s.nome&&c.nome})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"cnpj",children:"CNPJ"}),e.jsx(A,{mask:"99.999.999/9999-99",value:v("cnpj").value,onChange:v("cnpj").onChange,children:()=>e.jsx(S,{fullWidth:!0,id:"cnpj",placeholder:"CNPJ",error:!!(s.cnpj&&c.cnpj),helperText:e.jsx(e.Fragment,{children:s.cnpj&&c.cnpj})})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"inscricao_estadual",children:"Inscrição Estadual"}),e.jsx(S,{fullWidth:!0,id:"inscricao_estadual",placeholder:"Inscrição Estadual",...v("inscricao_estadual"),error:!!(s.inscricao_estadual&&c.inscricao_estadual),helperText:e.jsx(e.Fragment,{children:s.inscricao_estadual&&c.inscricao_estadual})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"cep",children:"CEP"}),e.jsx(A,{mask:"99999-999",value:v("cep").value,onChange:()=>h,children:()=>e.jsx(S,{fullWidth:!0,id:"cep",placeholder:"CEP",error:!!(s.cep&&c.cep),helperText:e.jsx(e.Fragment,{children:s.cep&&c.cep})})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"rua",children:"Endereço"}),e.jsx(S,{fullWidth:!0,id:"rua",placeholder:"Endereço",...v("rua"),error:!!(s.rua&&c.rua),helperText:e.jsx(e.Fragment,{children:s.rua&&c.rua})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"bairro",children:"Bairro"}),e.jsx(S,{fullWidth:!0,id:"bairro",placeholder:"Bairro",...v("bairro"),error:!!(s.bairro&&c.bairro),helperText:e.jsx(e.Fragment,{children:s.bairro&&c.bairro})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"cidade",children:"Cidade"}),e.jsx(S,{fullWidth:!0,id:"cidade",placeholder:"Cidade",...v("cidade"),error:!!(s.cidade&&c.cidade),helperText:e.jsx(e.Fragment,{children:s.cidade&&c.cidade})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"estado",children:"Estado"}),e.jsxs(W,{fullWidth:!0,error:!!(s.estado&&c.estado),children:[e.jsxs(q,{id:"estado",...v("estado"),onChange:async i=>await R("estado",i.target.value),value:t.values.estado||"",displayEmpty:!0,children:[e.jsx(a,{value:"",children:"Selecione"}),e.jsx(a,{value:"AC",children:"Acre"}),e.jsx(a,{value:"AL",children:"Alagoas"}),e.jsx(a,{value:"AP",children:"Amapá"}),e.jsx(a,{value:"AM",children:"Amazonas"}),e.jsx(a,{value:"BA",children:"Bahia"}),e.jsx(a,{value:"CE",children:"Ceará"}),e.jsx(a,{value:"DF",children:"Distrito Federal"}),e.jsx(a,{value:"ES",children:"Espírito Santo"}),e.jsx(a,{value:"GO",children:"Goiás"}),e.jsx(a,{value:"MA",children:"Maranhão"}),e.jsx(a,{value:"MT",children:"Mato Grosso"}),e.jsx(a,{value:"MS",children:"Mato Grosso do Sul"}),e.jsx(a,{value:"MG",children:"Minas Gerais"}),e.jsx(a,{value:"PA",children:"Pará"}),e.jsx(a,{value:"PB",children:"Paraíba"}),e.jsx(a,{value:"PR",children:"Paraná"}),e.jsx(a,{value:"PE",children:"Pernambuco"}),e.jsx(a,{value:"PI",children:"Piauí"}),e.jsx(a,{value:"RJ",children:"Rio de Janeiro"}),e.jsx(a,{value:"RN",children:"Rio Grande do Norte"}),e.jsx(a,{value:"RS",children:"Rio Grande do Sul"}),e.jsx(a,{value:"RO",children:"Rondônia"}),e.jsx(a,{value:"RR",children:"Roraima"}),e.jsx(a,{value:"SC",children:"Santa Catarina"}),e.jsx(a,{value:"SP",children:"São Paulo"}),e.jsx(a,{value:"SE",children:"Sergipe"}),e.jsx(a,{value:"TO",children:"Tocantins"})]}),e.jsx(z,{children:e.jsx(e.Fragment,{children:s.estado&&c.estado})})]})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"email",children:"Email"}),e.jsx(S,{fullWidth:!0,id:"email",placeholder:"Email",...v("email"),error:!!(s.email&&c.email),helperText:e.jsx(e.Fragment,{children:s.email&&c.email}),type:"email"})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"telefone",children:"Telefone"}),e.jsx(A,{mask:"(99) 99999-9999",value:v("telefone").value,onChange:v("telefone").onChange,children:()=>e.jsx(S,{fullWidth:!0,id:"telefone",placeholder:"Telefone",error:!!(s.telefone&&c.telefone),helperText:e.jsx(e.Fragment,{children:s.telefone&&c.telefone})})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"nome_contato",children:"Nome do contato"}),e.jsx(S,{fullWidth:!0,id:"nome_contato",placeholder:"Nome do contato",...v("nome_contato"),error:!!(s.nome_contato&&c.nome_contato),helperText:e.jsx(e.Fragment,{children:s.nome_contato&&c.nome_contato})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"email_contato",children:"Email do contato"}),e.jsx(S,{fullWidth:!0,id:"email_contato",placeholder:"Email",...v("email_contato"),error:!!(s.email_contato&&c.email_contato),helperText:e.jsx(e.Fragment,{children:s.email_contato&&c.email_contato}),type:"email"})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"telefone_contato",children:"Telefone do contato"}),e.jsx(A,{mask:"(99) 99999-9999",value:v("telefone_contato").value,onChange:v("telefone_contato").onChange,children:()=>e.jsx(S,{fullWidth:!0,id:"telefone_contato",placeholder:"Telefone",error:!!(s.telefone_contato&&c.telefone_contato),helperText:e.jsx(e.Fragment,{children:s.telefone_contato&&c.telefone_contato})})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"categoria",children:"Categoria"}),e.jsxs(W,{fullWidth:!0,error:!!(s.name&&c.name),children:[e.jsx(q,{id:"categoria",placeholder:"Nome",...v("categoria"),value:t.values.categoria,children:w.map(i=>e.jsx(a,{value:i.id,children:i.categoria},"ct_"+i.id))}),s.categoria&&c.categoria&&e.jsx(z,{children:typeof c.categoria})]})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"condicoes_pagamento",children:"Condições de pagamento"}),e.jsxs(W,{fullWidth:!0,error:!!(t.touched.condicoes_pagamento&&t.errors.condicoes_pagamento),children:[e.jsxs(q,{id:"condicoes_pagamento",...t.getFieldProps("condicoes_pagamento"),value:t.values.condicoes_pagamento,multiple:!0,onChange:i=>{const{target:{value:g}}=i;t.setFieldValue("condicoes_pagamento",typeof g=="string"?g.split(","):g)},children:[e.jsx(a,{value:"Pix",children:"Pix"}),e.jsx(a,{value:"Cartão de crédito",children:"Cartão de crédito"}),e.jsx(a,{value:"Boleto",children:"Boleto"})]}),e.jsx(z,{children:e.jsx(e.Fragment,{children:s.condicoes_pagamento&&c.condicoes_pagamento})})]})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsx(d,{spacing:1,direction:"row",alignItems:"center",children:e.jsx(we,{control:e.jsx(_e,{checked:t.values.status,onChange:async i=>await R("status",i.target.checked),name:"status"}),label:"Ativar ou desativar fornecedor"})})})]})})})}),e.jsx(U,{}),e.jsx(fe,{sx:{p:2.5},children:e.jsx(m,{container:!0,alignItems:"center",display:{justifyContent:"flex-end"},children:e.jsx(m,{item:!0,children:e.jsxs(d,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(N,{color:"error",onClick:o,children:"Cancelar"}),e.jsx(N,{type:"submit",variant:"contained",disabled:B,children:"Cadastrar"})]})})})})]})})})})})})})}const Fo=o=>({nome:"",cnpj:"",inscricao_estadual:"",rua:"",numero:"",complemento:"",bairro:"",cep:"",cidade:"",uf:"",email:"",telefone:"",nome_contato:"",telefone_contato:"",email_contato:"",categoria:"",condicoes_pagamento:[],status:!1}),Po=({supplier:o,closeModal:n})=>{const[r,x]=f.useState(!1),[b,w]=f.useState([]),[P,k]=f.useState({}),y=ue().shape({nome:j().required("O nome do fornecedor deve ser informado"),cnpj:j().required("O CNPJ do fornecedor deve ser informado"),inscricao_estadual:j().max(9,"A inscrição estadual deve ter no máximo 9 dígitos."),rua:j().required("O logradouro do fornecedor deve ser informado"),bairro:j().required("O bairro do fornecedor deve ser informado"),cep:j().required("O CEP do fornecedor deve ser informado"),estado:j().required("O estado do fornecedor deve ser informado"),cidade:j().required("A cidade do fornecedor deve ser informada"),email:j().email("Formato de e-mail inválido").required("O email do fornecedor deve ser informado"),telefone:j().test("minimo-8-digitos","O telefone deve ter no mínimo 8 números",h=>{const _=h==null?void 0:h.replace(/\D/g,"");return _&&_.length>=10}).required("Telefone é obrigatório"),nome_contato:j().required("O nome do contato do fornecedor deve ser informado"),telefone_contato:j().test("minimo-8-digitos","O telefone deve ter no mínimo 8 números",h=>{const _=h==null?void 0:h.replace(/\D/g,"");return _&&_.length>=10}).required("O telefone do contato do fornecedor deve ser informado"),email_contato:j().required("O email do contato do fornecedor deve ser informado").email("Formato de e-mail inválido"),categoria:j().required("A categoria do fornecedor deve ser informada"),condicoes_pagamento:he().min(1,"Pelo menos uma condição de pagamento deve ser selecionada").required("As condições de pagamento devem ser informadas")}),F=pe({initialValues:Fo(),validationSchema:y,enableReinitialize:!0,onSubmit:async(h,{setSubmitting:_})=>{try{const{categoria:i,...g}=h,E=await L.post("/inventory/suppliers",{...g,categoriaId:h.categoria,telefone:h.telefone.replace(/\D/g,""),telefone_contato:h.telefone_contato.replace(/\D/g,""),condicoes_pagamento:h.condicoes_pagamento.join(",")});_(!1),n()}catch(i){console.error(i)}}}),{errors:l,touched:t,handleSubmit:c,isSubmitting:s,getFieldProps:C,setFieldValue:B}=F,v=async h=>{try{const _=await fetch(`https://brasilapi.com.br/api/cep/v2/${h}`);if(!_.ok)throw new Error("Não foi possível encontrar o CEP");return await _.json()}catch(_){return console.error(_),null}},R=async h=>{const{value:_}=h.target;await B("cep",_);const i=_.replace(/\D/g,"");if(i.length===8){const g=await v(i);g&&(k(g),await B("rua",g.street),await B("bairro",g.neighborhood),await B("cidade",g.city),await B("estado",g.state))}},M=async()=>{try{const h=await L.get("/inventory/categories/");w(h.data.categorias.rows)}catch(h){console.error("Error fetching categorias:",h)}finally{x(!1)}};return f.useEffect(()=>{M()},[]),e.jsx(xe,{value:F,children:e.jsx(Ce,{dateAdapter:Se,children:e.jsxs(ge,{autoComplete:"off",noValidate:!0,onSubmit:c,children:[e.jsx(je,{children:"Novo fornecedor"}),e.jsx(U,{}),e.jsx(Y,{sx:{p:2.5},children:e.jsx(m,{container:!0,spacing:3,children:e.jsx(m,{item:!0,xs:12,children:e.jsxs(m,{container:!0,spacing:3,children:[e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"nome",children:"Nome do fornecedor"}),e.jsx(S,{fullWidth:!0,id:"nome",placeholder:"Nome",...C("nome"),error:!!(t.nome&&l.nome),helperText:e.jsx(e.Fragment,{children:t.nome&&l.nome})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"cnpj",children:"CNPJ"}),e.jsx(A,{mask:"99.999.999/9999-99",value:C("cnpj").value,onChange:C("cnpj").onChange,children:()=>e.jsx(S,{fullWidth:!0,id:"cnpj",placeholder:"CNPJ",error:!!(t.cnpj&&l.cnpj),helperText:e.jsx(e.Fragment,{children:t.cnpj&&l.cnpj})})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"inscricao_estadual",children:"Inscrição Estadual"}),e.jsx(S,{fullWidth:!0,id:"inscricao_estadual",type:"number",placeholder:"Inscrição Estadual",...C("inscricao_estadual"),error:!!(t.inscricao_estadual&&l.inscricao_estadual),helperText:e.jsx(e.Fragment,{children:t.inscricao_estadual&&l.inscricao_estadual})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"cep",children:"CEP"}),e.jsx(A,{mask:"99999-999",value:C("cep").value,onChange:R,children:()=>e.jsx(S,{fullWidth:!0,id:"cep",placeholder:"CEP",error:!!(t.cep&&l.cep),helperText:e.jsx(e.Fragment,{children:t.cep&&l.cep})})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"rua",children:"Endereço"}),e.jsx(S,{fullWidth:!0,id:"rua",placeholder:"Endereço",...C("rua"),error:!!(t.rua&&l.rua),helperText:e.jsx(e.Fragment,{children:t.rua&&l.rua})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"bairro",children:"Bairro"}),e.jsx(S,{fullWidth:!0,id:"bairro",placeholder:"Bairro",...C("bairro"),error:!!(t.bairro&&l.bairro),helperText:e.jsx(e.Fragment,{children:t.bairro&&l.bairro})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"cidade",children:"Cidade"}),e.jsx(S,{fullWidth:!0,id:"cidade",placeholder:"Cidade",...C("cidade"),error:!!(t.cidade&&l.cidade),helperText:e.jsx(e.Fragment,{children:t.cidade&&l.cidade})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"estado",children:"Estado"}),e.jsxs(W,{fullWidth:!0,error:!!(t.estado&&l.estado),children:[e.jsxs(q,{id:"estado",...C("estado"),onChange:async h=>await B("estado",h.target.value),value:F.values.estado||"",displayEmpty:!0,children:[e.jsx(a,{value:"",children:"Selecione"}),e.jsx(a,{value:"AC",children:"Acre"}),e.jsx(a,{value:"AL",children:"Alagoas"}),e.jsx(a,{value:"AP",children:"Amapá"}),e.jsx(a,{value:"AM",children:"Amazonas"}),e.jsx(a,{value:"BA",children:"Bahia"}),e.jsx(a,{value:"CE",children:"Ceará"}),e.jsx(a,{value:"DF",children:"Distrito Federal"}),e.jsx(a,{value:"ES",children:"Espírito Santo"}),e.jsx(a,{value:"GO",children:"Goiás"}),e.jsx(a,{value:"MA",children:"Maranhão"}),e.jsx(a,{value:"MT",children:"Mato Grosso"}),e.jsx(a,{value:"MS",children:"Mato Grosso do Sul"}),e.jsx(a,{value:"MG",children:"Minas Gerais"}),e.jsx(a,{value:"PA",children:"Pará"}),e.jsx(a,{value:"PB",children:"Paraíba"}),e.jsx(a,{value:"PR",children:"Paraná"}),e.jsx(a,{value:"PE",children:"Pernambuco"}),e.jsx(a,{value:"PI",children:"Piauí"}),e.jsx(a,{value:"RJ",children:"Rio de Janeiro"}),e.jsx(a,{value:"RN",children:"Rio Grande do Norte"}),e.jsx(a,{value:"RS",children:"Rio Grande do Sul"}),e.jsx(a,{value:"RO",children:"Rondônia"}),e.jsx(a,{value:"RR",children:"Roraima"}),e.jsx(a,{value:"SC",children:"Santa Catarina"}),e.jsx(a,{value:"SP",children:"São Paulo"}),e.jsx(a,{value:"SE",children:"Sergipe"}),e.jsx(a,{value:"TO",children:"Tocantins"})]}),e.jsx(z,{children:e.jsx(e.Fragment,{children:t.estado&&l.estado})})]})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"email",children:"Email"}),e.jsx(S,{fullWidth:!0,id:"email",placeholder:"Email",...C("email"),error:!!(t.email&&l.email),helperText:e.jsx(e.Fragment,{children:t.email&&l.email}),type:"email"})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"telefone",children:"Telefone"}),e.jsx(A,{mask:"(99) 99999-9999",value:C("telefone").value,onChange:C("telefone").onChange,children:()=>e.jsx(S,{fullWidth:!0,id:"telefone",placeholder:"Telefone",error:!!(t.telefone&&l.telefone),helperText:e.jsx(e.Fragment,{children:t.telefone&&l.telefone})})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"nome_contato",children:"Nome do contato"}),e.jsx(S,{fullWidth:!0,id:"nome_contato",placeholder:"Nome do contato",...C("nome_contato"),error:!!(t.nome_contato&&l.nome_contato),helperText:e.jsx(e.Fragment,{children:t.nome_contato&&l.nome_contato})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"email_contato",children:"Email do contato"}),e.jsx(S,{fullWidth:!0,id:"email_contato",placeholder:"Email",...C("email_contato"),error:!!(t.email_contato&&l.email_contato),helperText:e.jsx(e.Fragment,{children:t.email_contato&&l.email_contato}),type:"email"})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"telefone_contato",children:"Telefone do contato"}),e.jsx(A,{mask:"(99) 9999-9999",value:C("telefone_contato").value,onChange:C("telefone_contato").onChange,children:()=>e.jsx(S,{fullWidth:!0,id:"telefone_contato",placeholder:"Telefone",error:!!(t.telefone_contato&&l.telefone_contato),helperText:e.jsx(e.Fragment,{children:t.telefone_contato&&l.telefone_contato})})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"categoria",children:"Categoria"}),e.jsxs(W,{fullWidth:!0,error:!!(t.name&&l.name),children:[e.jsx(q,{id:"categoria",placeholder:"Nome",...C("categoria"),value:F.values.categoria,children:b.map(h=>e.jsx(a,{value:h.id,children:h.categoria},"ct_"+h.id))}),t.categoria&&l.categoria&&e.jsx(z,{children:e.jsx(e.Fragment,{children:l.categoria})})]})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(p,{htmlFor:"condicoes_pagamento",children:"Condições de pagamento"}),e.jsxs(W,{fullWidth:!0,error:!!(t.condicoes_pagamento&&l.condicoes_pagamento),children:[e.jsxs(q,{id:"condicoes_pagamento",...C("condicoes_pagamento"),value:F.values.condicoes_pagamento,multiple:!0,children:[e.jsx(a,{value:"Pix",children:"Pix"}),e.jsx(a,{value:"Cartão de crédito",children:"Cartão de crédito"}),e.jsx(a,{value:"Boleto",children:"Boleto"})]}),e.jsx(z,{children:e.jsx(e.Fragment,{children:t.condicoes_pagamento&&l.condicoes_pagamento})})]})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsx(d,{spacing:1,direction:"row",alignItems:"center",children:e.jsx(we,{control:e.jsx(_e,{checked:F.values.status,onChange:async h=>await B("status",h.target.checked),name:"status"}),label:"Ativar ou desativar fornecedor"})})})]})})})}),e.jsx(U,{}),e.jsx(fe,{sx:{p:2.5},children:e.jsx(m,{container:!0,alignItems:"center",display:{justifyContent:"flex-end"},children:e.jsx(m,{item:!0,children:e.jsxs(d,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(N,{color:"error",onClick:n,children:"Cancelar"}),e.jsx(N,{type:"submit",variant:"contained",disabled:s,children:"Cadastrar"})]})})})})]})})})},ko=({openModalCreate:o,modalToggler:n,supplier:r})=>{const x=()=>{n(!1)},b=r?e.jsx(K,{sx:{p:5},children:e.jsx(d,{direction:"row",justifyContent:"center",children:e.jsx(to,{})})}):e.jsx(Po,{supplier:r??null,closeModal:x});return e.jsx(Ee,{open:o,onClose:x,"aria-labelledby":"modal-supplier-add-label","aria-describedby":"modal-supplier-add-description",sx:{"& .MuiPaper-root:focus":{outline:"none"}},children:e.jsx(ve,{sx:{width:"calc(100% - 48px)",minWidth:340,maxWidth:880,height:"auto",maxHeight:"calc(100vh - 48px)"},modal:!0,content:!1,children:e.jsx(Me,{sx:{maxHeight:"calc(100vh - 48px)","& .simplebar-content":{display:"flex",flexDirection:"column"}},children:b})})})},To=(o,n,r,x)=>{const b=eo(o.getValue(n),r);return x(b),b.passed};function Ro({data:o,columns:n,modalToggler:r}){const x=be(),b=Ae(x.breakpoints.down("sm")),[w,P]=f.useState([{id:"id",desc:!0}]),[k,y]=f.useState({}),[F,l]=f.useState(""),t=$e({data:o,columns:n,state:{sorting:w,rowSelection:k,globalFilter:F},enableRowSelection:!0,onSortingChange:P,onRowSelectionChange:y,onGlobalFilterChange:l,getRowCanExpand:()=>!0,getSortedRowModel:Ve(),getFilteredRowModel:He(),getCoreRowModel:Je(),getPaginationRowModel:Ke(),getExpandedRowModel:Ue(),globalFilterFn:To,debugTable:!0});return De(x.palette.primary.lighter,.1),e.jsxs(ve,{content:!1,children:[e.jsxs(d,{direction:{xs:"column",sm:"row"},spacing:2,alignItems:"center",justifyContent:"space-between",sx:{padding:2,...b&&{"& .MuiOutlinedInput-root, & .MuiFormControl-root":{width:"100%"}}},children:[e.jsx(Ie,{value:F??"",onFilterChange:c=>{l(String(c))},placeholder:"Buscar Fornecedor..."}),e.jsxs(d,{direction:{xs:"column",sm:"row"},spacing:2,alignItems:"center",sx:{width:{xs:"100%",sm:"auto"}},children:[e.jsx(Qe,{getState:t.getState,getAllColumns:t.getAllColumns,setSorting:P}),e.jsx(d,{direction:"row",spacing:2,alignItems:"center",children:e.jsx(N,{variant:"contained",startIcon:e.jsx(ro,{}),onClick:r,children:"Adicionar Fornecedor"})})]})]}),e.jsx(Ne,{children:e.jsxs(d,{children:[e.jsx(Ye,{selected:Object.keys(k).length}),e.jsx(Oe,{children:e.jsxs(We,{children:[e.jsx(qe,{children:t.getHeaderGroups().map(c=>e.jsx(Z,{children:c.headers.map(s=>(s.column.columnDef.meta!==void 0&&s.column.getCanSort()&&Object.assign(s.column.columnDef.meta,{className:s.column.columnDef.meta.className+" cursor-pointer prevent-select"}),e.jsx(ee,{...s.column.columnDef.meta,onClick:s.column.getToggleSortingHandler(),...s.column.getCanSort()&&s.column.columnDef.meta===void 0&&{className:"cursor-pointer prevent-select"},children:s.isPlaceholder?null:e.jsxs(d,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(K,{children:ae(s.column.columnDef.header,s.getContext())}),s.column.getCanSort()&&e.jsx(Ze,{column:s.column})]})},s.id)))},c.id))}),e.jsx(ze,{children:t.getRowModel().rows.length===0?e.jsx(Z,{children:e.jsx(ee,{colSpan:n.length,align:"center",children:e.jsx(Le,{msg:"Nenhum registro encontrado"})})}):t.getRowModel().rows.map(c=>e.jsx(f.Fragment,{children:e.jsx(Z,{children:c.getVisibleCells().map(s=>e.jsx(ee,{...s.column.columnDef.meta,children:ae(s.column.columnDef.cell,s.getContext())},s.id))})},c.id))})]})}),e.jsxs(e.Fragment,{children:[e.jsx(U,{}),e.jsx(K,{sx:{p:2},children:e.jsx(Ge,{setPageSize:t.setPageSize,setPageIndex:t.setPageIndex,getState:t.getState,getPageCount:t.getPageCount})})]})]})})]})}function Io(){const o=be(),[n,r]=f.useState(!1),[x,b]=f.useState(!1),[w,P]=f.useState(!1),[k,y]=f.useState(!1),[F,l]=f.useState(null),[t,c]=f.useState(""),[s,C]=f.useState(""),[B,v]=f.useState([]),[R,M]=f.useState(!1),h=async()=>{try{M(!0);const u=await L.get("/inventory/suppliers");v(u.data.fornecedores.rows),M(!1)}catch(u){console.error("Erro ao buscar dados:",u),M(!1)}};f.useEffect(()=>{h()},[k,x]);const _=()=>{r(!n)},i=()=>{y(!0)},g=()=>{b(!x)},E=f.useMemo(()=>[{id:"select",header:({table:u})=>e.jsx(ne,{checked:u.getIsAllRowsSelected(),indeterminate:u.getIsSomeRowsSelected(),onChange:u.getToggleAllRowsSelectedHandler()}),cell:({row:u})=>e.jsx(ne,{checked:u.getIsSelected(),disabled:!u.getCanSelect(),indeterminate:u.getIsSomeSelected(),onChange:u.getToggleSelectedHandler()}),meta:{className:"p-0"}},{accessorKey:"nome",header:"Nome do fornecedor"},{accessorKey:"cnpj",header:"CNPJ"},{accessorKey:"categoria.categoria",header:"Categoria"},{accessorKey:"condicoes_pagamento",header:"Condição de pagamento",cell:({row:u})=>{const I=u.original.condicoes_pagamento;let X=[];if(I)try{X=I.split(",").map(V=>V.trim())}catch(V){console.error("Erro ao fazer parsing das condições de pagamento:",V)}return!X||X.length===0?e.jsx(H,{label:"Nenhuma condição",size:"small",variant:"outlined"}):e.jsx(d,{direction:"row",spacing:1,children:X.map((V,ye)=>e.jsx(H,{label:V,size:"small",variant:"outlined"},ye))})}},{accessorKey:"status",header:"Status",cell:u=>{switch(u.getValue()){case!1:return e.jsx(Q,{title:"Para ativar o fornecedor, clique no botão de editar.",children:e.jsx(H,{color:"error",label:"Inativo",size:"small",variant:"light"})});case!0:return e.jsx(Q,{title:"Para desativar o fornecedor, clique no botão de editar.",children:e.jsx(H,{color:"success",label:"Ativo",size:"small",variant:"light"})});case null:default:return e.jsx(H,{color:"info",label:"Pendente",size:"small",variant:"light"})}}},{id:"actions",header:"Actions",cell:({row:u})=>e.jsxs(d,{direction:"row",spacing:1,children:[e.jsx(Q,{title:"Editar",children:e.jsx(te,{color:"primary",onClick:()=>{l(u.original),i()},children:e.jsx(no,{})})}),e.jsx(Q,{title:"Excluir",children:e.jsx(te,{color:"error",onClick:()=>{c(u.original.id),r(!0),C(u.original.nome)},children:e.jsx(ao,{})})})]})}],[o]);return e.jsxs(e.Fragment,{children:[R?e.jsxs(K,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",children:[e.jsx(so,{}),e.jsx(O,{variant:"body2",color:"textSecondary",sx:{mt:2},children:"Carregando..."})]}):e.jsx(Ro,{data:B,columns:E,modalToggler:()=>{P(!0),l(null),g()}}),e.jsx(_o,{id:t,title:t,open:n,handleClose:_,name:s}),e.jsx(ko,{openModalCreate:x,modalToggler:g}),e.jsx(yo,{modalEdit:k,handleClose:()=>{y(!1)},data:F})]})}export{Io as default};
