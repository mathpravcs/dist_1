import{v as te,t as ne,w as L,aL as D,_ as I,r as f,x as se,y as ie,aM as _e,aN as ye,T as H,j as e,C as Z,S as u,D as le,aO as ee,aP as Fe,aQ as Pe,a3 as ce,a4 as ke,a5 as K,a6 as Re,i as N,l as z,c as de,a as g,aR as ue,a8 as me,B as X,a9 as he,aa as pe,ab as xe,ac as J,G as m,I as h,ad as C,q as O,af as q,ag as a,d as W,ae as ge,ah as Te,M as je,ai as Me,o as fe,J as Be,K as Ee,at as $e,aj as Ae,Q as De,U as Ie,W as Ne,X as Oe,Y as Q,Z as Y,$ as oe,a0 as qe,ak as We,al as ze,P as Le,am as Ge,N as Ve,an as He,ao as Je,aA as G,ap as U,aq as re}from"./index-4a286e5b.js";import{D as Ue,P as Ke,R as Xe,r as Qe,I as ae,a as Ye}from"./index-12584614.js";import{I as A}from"./index-757055f0.js";import{L as ve,A as be,C as Ze,E as eo}from"./CircularWithPath-2be210af.js";import{a as oo,S as ro,H as ao}from"./SelectColumnSorting-8f7c879d.js";function to(o){return ne("MuiFormControlLabel",o)}const no=te("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),V=no,so=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],io=o=>{const{classes:n,disabled:r,labelPlacement:p,error:v,required:S}=o,F={root:["root",r&&"disabled",`labelPlacement${D(p)}`,v&&"error",S&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",v&&"error"]};return le(F,to,n)},lo=L("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(o,n)=>{const{ownerState:r}=o;return[{[`& .${V.label}`]:n.label},n.root,n[`labelPlacement${D(r.labelPlacement)}`]]}})(({theme:o,ownerState:n})=>I({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${V.disabled}`]:{cursor:"default"}},n.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},n.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},n.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${V.label}`]:{[`&.${V.disabled}`]:{color:(o.vars||o).palette.text.disabled}}})),co=L("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(o,n)=>n.asterisk})(({theme:o})=>({[`&.${V.error}`]:{color:(o.vars||o).palette.error.main}})),uo=f.forwardRef(function(n,r){var p,v;const S=se({props:n,name:"MuiFormControlLabel"}),{className:F,componentsProps:P={},control:_,disabled:y,disableTypography:l,label:t,labelPlacement:c="end",required:s,slotProps:b={}}=S,M=ie(S,so),j=_e(),T=(p=y??_.props.disabled)!=null?p:j==null?void 0:j.disabled,$=s??_.props.required,x={disabled:T,required:$};["checked","name","onChange","value","inputRef"].forEach(E=>{typeof _.props[E]>"u"&&typeof S[E]<"u"&&(x[E]=S[E])});const k=ye({props:S,muiFormControl:j,states:["error"]}),i=I({},S,{disabled:T,labelPlacement:c,required:$,error:k.error}),d=io(i),B=(v=b.typography)!=null?v:P.typography;let w=t;return w!=null&&w.type!==H&&!l&&(w=e.jsx(H,I({component:"span"},B,{className:Z(d.label,B==null?void 0:B.className),children:w}))),e.jsxs(lo,I({className:Z(d.root,F),ownerState:i,ref:r},M,{children:[f.cloneElement(_,x),$?e.jsxs(u,{display:"block",children:[w,e.jsxs(co,{ownerState:i,"aria-hidden":!0,className:d.asterisk,children:[" ","*"]})]}):w]}))}),Ce=uo;function mo(o){return ne("MuiSwitch",o)}const ho=te("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),R=ho,po=["className","color","edge","size","sx"],xo=o=>{const{classes:n,edge:r,size:p,color:v,checked:S,disabled:F}=o,P={root:["root",r&&`edge${D(r)}`,`size${D(p)}`],switchBase:["switchBase",`color${D(v)}`,S&&"checked",F&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},_=le(P,mo,n);return I({},n,_)},go=L("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(o,n)=>{const{ownerState:r}=o;return[n.root,r.edge&&n[`edge${D(r.edge)}`],n[`size${D(r.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${R.thumb}`]:{width:16,height:16},[`& .${R.switchBase}`]:{padding:4,[`&.${R.checked}`]:{transform:"translateX(16px)"}}}}]}),jo=L(oo,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(o,n)=>{const{ownerState:r}=o;return[n.switchBase,{[`& .${R.input}`]:n.input},r.color!=="default"&&n[`color${D(r.color)}`]]}})(({theme:o})=>({position:"absolute",top:0,left:0,zIndex:1,color:o.vars?o.vars.palette.Switch.defaultColor:`${o.palette.mode==="light"?o.palette.common.white:o.palette.grey[300]}`,transition:o.transitions.create(["left","transform"],{duration:o.transitions.duration.shortest}),[`&.${R.checked}`]:{transform:"translateX(20px)"},[`&.${R.disabled}`]:{color:o.vars?o.vars.palette.Switch.defaultDisabledColor:`${o.palette.mode==="light"?o.palette.grey[100]:o.palette.grey[600]}`},[`&.${R.checked} + .${R.track}`]:{opacity:.5},[`&.${R.disabled} + .${R.track}`]:{opacity:o.vars?o.vars.opacity.switchTrackDisabled:`${o.palette.mode==="light"?.12:.2}`},[`& .${R.input}`]:{left:"-100%",width:"300%"}}),({theme:o})=>({"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:ee(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(o.palette).filter(([,n])=>n.main&&n.light).map(([n])=>({props:{color:n},style:{[`&.${R.checked}`]:{color:(o.vars||o).palette[n].main,"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette[n].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:ee(o.palette[n].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${R.disabled}`]:{color:o.vars?o.vars.palette.Switch[`${n}DisabledColor`]:`${o.palette.mode==="light"?Fe(o.palette[n].main,.62):Pe(o.palette[n].main,.55)}`}},[`&.${R.checked} + .${R.track}`]:{backgroundColor:(o.vars||o).palette[n].main}}}))]})),fo=L("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(o,n)=>n.track})(({theme:o})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:o.transitions.create(["opacity","background-color"],{duration:o.transitions.duration.shortest}),backgroundColor:o.vars?o.vars.palette.common.onBackground:`${o.palette.mode==="light"?o.palette.common.black:o.palette.common.white}`,opacity:o.vars?o.vars.opacity.switchTrack:`${o.palette.mode==="light"?.38:.3}`})),vo=L("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(o,n)=>n.thumb})(({theme:o})=>({boxShadow:(o.vars||o).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),bo=f.forwardRef(function(n,r){const p=se({props:n,name:"MuiSwitch"}),{className:v,color:S="primary",edge:F=!1,size:P="medium",sx:_}=p,y=ie(p,po),l=I({},p,{color:S,edge:F,size:P}),t=xo(l),c=e.jsx(vo,{className:t.thumb,ownerState:l});return e.jsxs(go,{className:Z(t.root,v),sx:_,ownerState:l,children:[e.jsx(jo,I({type:"checkbox",icon:c,checkedIcon:c,ref:r,ownerState:l},y,{classes:I({},t,{root:t.switchBase})})),e.jsx(fo,{className:t.track,ownerState:l})]})}),Se=bo;function Co({id:o,title:n,open:r,handleClose:p,name:v}){const S=async P=>{try{await z.delete(`/inventory/suppliers/${P}`)}catch(_){throw console.error("Erro ao deletar o polo:",_),_}},F=async()=>{try{await S(o),p(),window.location.reload()}catch{}};return e.jsx(ce,{open:r,onClose:p,keepMounted:!0,TransitionComponent:ke,maxWidth:"xs","aria-labelledby":"column-delete-title","aria-describedby":"column-delete-description",children:e.jsx(K,{sx:{mt:2,my:1},children:e.jsxs(u,{alignItems:"center",spacing:3.5,children:[e.jsx(Re,{color:"error",sx:{width:72,height:72,fontSize:"1.75rem"},children:e.jsx(Ue,{})}),e.jsxs(u,{spacing:2,children:[e.jsx(H,{variant:"h4",align:"center",children:"Você tem certeza?"}),e.jsxs(H,{align:"center",children:["Você está deletando o departamento",e.jsx(H,{variant:"subtitle1",component:"span",sx:{ml:.5},children:v}),", esta operação não pode ser desfeita."]})]}),e.jsxs(u,{direction:"row",spacing:2,sx:{width:1},children:[e.jsx(N,{fullWidth:!0,onClick:p,color:"secondary",variant:"outlined",children:"Cancelar"}),e.jsx(N,{fullWidth:!0,color:"error",variant:"contained",onClick:F,autoFocus:!0,children:"Deletar"})]})]})})})}function So({handleClose:o,modalEdit:n,data:r}){const[p,v]=f.useState(!0),[S,F]=f.useState([]),[P,_]=f.useState({}),y=i=>({nome:(r==null?void 0:r.nome)||"",cnpj:(r==null?void 0:r.cnpj)||"",inscricao_estadual:(r==null?void 0:r.inscricao_estadual)||"",rua:(r==null?void 0:r.rua)||"",numero:(r==null?void 0:r.numero)||"",complemento:(r==null?void 0:r.complemento)||"",bairro:(r==null?void 0:r.bairro)||"",cep:(r==null?void 0:r.cep)||"",cidade:(r==null?void 0:r.cidade)||"",estado:(r==null?void 0:r.estado)||"",email:(r==null?void 0:r.email)||"",telefone:(r==null?void 0:r.telefone)||"",nome_contato:(r==null?void 0:r.nome_contato)||"",telefone_contato:(r==null?void 0:r.telefone_contato)||"",email_contato:(r==null?void 0:r.email_contato)||"",categoria:(r==null?void 0:r.categoria.id)||"",condicoes_pagamento:(r==null?void 0:r.condicoes_pagamento.split(","))||[],status:(r==null?void 0:r.status)||""}),l=de().shape({nome:g().required("O nome do fornecedor deve ser informado"),cnpj:g().required("O CNPJ do fornecedor deve ser informado"),inscricao_estadual:g(),rua:g().required("O logradouro do fornecedor deve ser informado"),bairro:g().required("O bairro do fornecedor deve ser informado"),cep:g().required("O CEP do fornecedor deve ser informado"),estado:g().required("O estado do fornecedor deve ser informado"),cidade:g().required("A cidade do fornecedor deve ser informada"),email:g().email("Formato de e-mail inválido").required("O email do fornecedor deve ser informado"),telefone:g().required("O telefone do fornecedor deve ser informado"),nome_contato:g().required("O nome do contato do fornecedor deve ser informado"),telefone_contato:g().required("O telefone do contato do fornecedor deve ser informado"),email_contato:g().required("O email do contato do fornecedor deve ser informado").email("Formato de e-mail inválido"),categoria:g().required("A categoria do fornecedor deve ser informada"),condicoes_pagamento:ue().min(1,"Pelo menos uma condição de pagamento deve ser selecionada").required("As condições de pagamento devem ser informadas")}),t=me({initialValues:y(),validationSchema:l,enableReinitialize:!0,onSubmit:async(i,{setSubmitting:d,resetForm:B})=>{try{(await z.put(`/inventory/suppliers/${r.id}`,{nome:i.nome,cnpj:i.cnpj.replace(/\D/g,""),inscricao_estadual:i.inscricao_estadual,rua:i.rua,numero:i.numero,complemento:i.complemento,bairro:i.bairro,cep:i.cep.replace(/\D/g,""),estado:i.estado,cidade:i.cidade,email:i.email,nome_contato:i.nome_contato,email_contato:i.email_contato,telefone_contato:i.telefone_contato.replace(/\D/g,""),condicoes_pagamento:i.condicoes_pagamento.join(","),status:i.status,categoriaId:i.categoria,telefone:i.telefone.replace(/\D/g,""),departamentoId:i.departamento,descricao:i.descricao})).data.success===!0&&(B(),o())}catch(w){console.error(w)}}}),{errors:c,touched:s,handleSubmit:b,isSubmitting:M,getFieldProps:j,setFieldValue:T}=t,$=async i=>{try{const d=await fetch(`https://brasilapi.com.br/api/cep/v2/${i}`);if(!d.ok)throw new Error("Não foi possível encontrar o CEP");return await d.json()}catch(d){return console.error(d),null}},x=async i=>{const{value:d}=i.target;await T("cep",d);const B=d.replace(/\D/g,"");if(B.length===8){const w=await $(B);w&&(_(w),await T("logradouro",w.street),await T("bairro",w.neighborhood),await T("cidade",w.city),await T("estado",w.state))}},k=async()=>{try{const i=await z.get("/inventory/categories/");F(i.data.categorias.rows)}catch(i){console.error("Error fetching categorias:",i)}finally{v(!1)}};return f.useEffect(()=>{k()},[]),e.jsx("div",{children:e.jsx(ce,{open:n,keepMounted:!0,onClose:()=>{o()},"aria-describedby":"alert-dialog-slide-description",maxWidth:"md",children:e.jsx(X,{sx:{p:1,py:1.5},children:e.jsx(K,{children:e.jsx(he,{value:t,children:e.jsx(ve,{dateAdapter:be,children:e.jsxs(pe,{autoComplete:"off",noValidate:!0,onSubmit:b,children:[e.jsx(xe,{children:"Novo fornecedor"}),e.jsx(J,{}),e.jsx(K,{sx:{p:2.5},children:e.jsx(m,{container:!0,spacing:3,children:e.jsx(m,{item:!0,xs:12,children:e.jsxs(m,{container:!0,spacing:3,children:[e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"nome",children:"Nome do fornecedor"}),e.jsx(C,{fullWidth:!0,id:"nome",placeholder:"Nome",...j("nome"),error:!!(s.nome&&c.nome),helperText:e.jsx(e.Fragment,{children:s.nome&&c.nome})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"cnpj",children:"CNPJ"}),e.jsx(A,{mask:"99.999.999/9999-99",value:j("cnpj").value,onChange:j("cnpj").onChange,children:()=>e.jsx(C,{fullWidth:!0,id:"cnpj",placeholder:"CNPJ",error:!!(s.cnpj&&c.cnpj),helperText:e.jsx(e.Fragment,{children:s.cnpj&&c.cnpj})})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"inscricao_estadual",children:"Inscrição Estadual"}),e.jsx(C,{fullWidth:!0,id:"inscricao_estadual",placeholder:"Inscrição Estadual",...j("inscricao_estadual"),error:!!(s.inscricao_estadual&&c.inscricao_estadual),helperText:e.jsx(e.Fragment,{children:s.inscricao_estadual&&c.inscricao_estadual})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"cep",children:"CEP"}),e.jsx(A,{mask:"99999-999",value:j("cep").value,onChange:()=>x,children:()=>e.jsx(C,{fullWidth:!0,id:"cep",placeholder:"CEP",error:!!(s.cep&&c.cep),helperText:e.jsx(e.Fragment,{children:s.cep&&c.cep})})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"rua",children:"Endereço"}),e.jsx(C,{fullWidth:!0,id:"rua",placeholder:"Endereço",...j("rua"),error:!!(s.rua&&c.rua),helperText:e.jsx(e.Fragment,{children:s.rua&&c.rua})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"bairro",children:"Bairro"}),e.jsx(C,{fullWidth:!0,id:"bairro",placeholder:"Bairro",...j("bairro"),error:!!(s.bairro&&c.bairro),helperText:e.jsx(e.Fragment,{children:s.bairro&&c.bairro})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"cidade",children:"Cidade"}),e.jsx(C,{fullWidth:!0,id:"cidade",placeholder:"Cidade",...j("cidade"),error:!!(s.cidade&&c.cidade),helperText:e.jsx(e.Fragment,{children:s.cidade&&c.cidade})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"estado",children:"Estado"}),e.jsxs(O,{fullWidth:!0,error:!!(s.estado&&c.estado),children:[e.jsxs(q,{id:"estado",...j("estado"),onChange:async i=>await T("estado",i.target.value),value:t.values.estado||"",displayEmpty:!0,children:[e.jsx(a,{value:"",children:"Selecione"}),e.jsx(a,{value:"AC",children:"Acre"}),e.jsx(a,{value:"AL",children:"Alagoas"}),e.jsx(a,{value:"AP",children:"Amapá"}),e.jsx(a,{value:"AM",children:"Amazonas"}),e.jsx(a,{value:"BA",children:"Bahia"}),e.jsx(a,{value:"CE",children:"Ceará"}),e.jsx(a,{value:"DF",children:"Distrito Federal"}),e.jsx(a,{value:"ES",children:"Espírito Santo"}),e.jsx(a,{value:"GO",children:"Goiás"}),e.jsx(a,{value:"MA",children:"Maranhão"}),e.jsx(a,{value:"MT",children:"Mato Grosso"}),e.jsx(a,{value:"MS",children:"Mato Grosso do Sul"}),e.jsx(a,{value:"MG",children:"Minas Gerais"}),e.jsx(a,{value:"PA",children:"Pará"}),e.jsx(a,{value:"PB",children:"Paraíba"}),e.jsx(a,{value:"PR",children:"Paraná"}),e.jsx(a,{value:"PE",children:"Pernambuco"}),e.jsx(a,{value:"PI",children:"Piauí"}),e.jsx(a,{value:"RJ",children:"Rio de Janeiro"}),e.jsx(a,{value:"RN",children:"Rio Grande do Norte"}),e.jsx(a,{value:"RS",children:"Rio Grande do Sul"}),e.jsx(a,{value:"RO",children:"Rondônia"}),e.jsx(a,{value:"RR",children:"Roraima"}),e.jsx(a,{value:"SC",children:"Santa Catarina"}),e.jsx(a,{value:"SP",children:"São Paulo"}),e.jsx(a,{value:"SE",children:"Sergipe"}),e.jsx(a,{value:"TO",children:"Tocantins"})]}),e.jsx(W,{children:e.jsx(e.Fragment,{children:s.estado&&c.estado})})]})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"email",children:"Email"}),e.jsx(C,{fullWidth:!0,id:"email",placeholder:"Email",...j("email"),error:!!(s.email&&c.email),helperText:e.jsx(e.Fragment,{children:s.email&&c.email}),type:"email"})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"telefone",children:"Telefone"}),e.jsx(A,{mask:"(99) 99999-9999",value:j("telefone").value,onChange:j("telefone").onChange,children:()=>e.jsx(C,{fullWidth:!0,id:"telefone",placeholder:"Telefone",error:!!(s.telefone&&c.telefone),helperText:e.jsx(e.Fragment,{children:s.telefone&&c.telefone})})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"nome_contato",children:"Nome do contato"}),e.jsx(C,{fullWidth:!0,id:"nome_contato",placeholder:"Nome do contato",...j("nome_contato"),error:!!(s.nome_contato&&c.nome_contato),helperText:e.jsx(e.Fragment,{children:s.nome_contato&&c.nome_contato})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"email_contato",children:"Email do contato"}),e.jsx(C,{fullWidth:!0,id:"email_contato",placeholder:"Email",...j("email_contato"),error:!!(s.email_contato&&c.email_contato),helperText:e.jsx(e.Fragment,{children:s.email_contato&&c.email_contato}),type:"email"})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"telefone_contato",children:"Telefone do contato"}),e.jsx(A,{mask:"(99) 99999-9999",value:j("telefone_contato").value,onChange:j("telefone_contato").onChange,children:()=>e.jsx(C,{fullWidth:!0,id:"telefone_contato",placeholder:"Telefone",error:!!(s.telefone_contato&&c.telefone_contato),helperText:e.jsx(e.Fragment,{children:s.telefone_contato&&c.telefone_contato})})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"categoria",children:"Categoria"}),e.jsxs(O,{fullWidth:!0,error:!!(s.name&&c.name),children:[e.jsx(q,{id:"categoria",placeholder:"Nome",...j("categoria"),value:t.values.categoria,children:S.map(i=>e.jsx(a,{value:i.id,children:i.categoria},"ct_"+i.id))}),s.categoria&&c.categoria&&e.jsx(W,{children:typeof c.categoria})]})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"condicoes_pagamento",children:"Condições de pagamento"}),e.jsxs(O,{fullWidth:!0,error:!!(t.touched.condicoes_pagamento&&t.errors.condicoes_pagamento),children:[e.jsxs(q,{id:"condicoes_pagamento",...t.getFieldProps("condicoes_pagamento"),value:t.values.condicoes_pagamento,multiple:!0,onChange:i=>{const{target:{value:d}}=i;t.setFieldValue("condicoes_pagamento",typeof d=="string"?d.split(","):d)},children:[e.jsx(a,{value:"Pix",children:"Pix"}),e.jsx(a,{value:"Cartao de credito",children:"Cartão de crédito"}),e.jsx(a,{value:"Boleto",children:"Boleto"})]}),e.jsx(W,{children:e.jsx(e.Fragment,{children:s.condicoes_pagamento&&c.condicoes_pagamento})})]})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsx(u,{spacing:1,direction:"row",alignItems:"center",children:e.jsx(Ce,{control:e.jsx(Se,{checked:t.values.status,onChange:async i=>await T("status",i.target.checked),name:"status"}),label:"Ativar ou desativar fornecedor"})})})]})})})}),e.jsx(J,{}),e.jsx(ge,{sx:{p:2.5},children:e.jsx(m,{container:!0,alignItems:"center",display:{justifyContent:"flex-end"},children:e.jsx(m,{item:!0,children:e.jsxs(u,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(N,{color:"error",onClick:o,children:"Cancelar"}),e.jsx(N,{type:"submit",variant:"contained",disabled:M,children:"Cadastrar"})]})})})})]})})})})})})})}const wo=o=>({nome:"",cnpj:"",inscricao_estadual:"",rua:"",numero:"",complemento:"",bairro:"",cep:"",cidade:"",uf:"",email:"",telefone:"",nome_contato:"",telefone_contato:"",email_contato:"",categoria:"",condicoes_pagamento:[],status:!1}),_o=({supplier:o,closeModal:n})=>{const[r,p]=f.useState(!1),[v,S]=f.useState([]),[F,P]=f.useState({}),_=de().shape({nome:g().required("O nome do fornecedor deve ser informado"),cnpj:g().required("O CNPJ do fornecedor deve ser informado"),inscricao_estadual:g(),rua:g().required("O logradouro do fornecedor deve ser informado"),bairro:g().required("O bairro do fornecedor deve ser informado"),cep:g().required("O CEP do fornecedor deve ser informado"),estado:g().required("O estado do fornecedor deve ser informado"),cidade:g().required("A cidade do fornecedor deve ser informada"),email:g().email("Formato de e-mail inválido").required("O email do fornecedor deve ser informado"),telefone:g().required("O telefone do fornecedor deve ser informado"),nome_contato:g().required("O nome do contato do fornecedor deve ser informado"),telefone_contato:g().required("O telefone do contato do fornecedor deve ser informado"),email_contato:g().required("O email do contato do fornecedor deve ser informado").email("Formato de e-mail inválido"),categoria:g().required("A categoria do fornecedor deve ser informada"),condicoes_pagamento:ue().min(1,"Pelo menos uma condição de pagamento deve ser selecionada").required("As condições de pagamento devem ser informadas")}),y=me({initialValues:wo(),validationSchema:_,enableReinitialize:!0,onSubmit:async(x,{setSubmitting:k})=>{try{const{categoria:i,...d}=x,B=await z.post("/inventory/suppliers",{...d,categoriaId:x.categoria,telefone:x.telefone.replace(/\D/g,""),telefone_contato:x.telefone_contato.replace(/\D/g,""),condicoes_pagamento:x.condicoes_pagamento.join(",")});k(!1),n()}catch(i){console.error(i)}}}),{errors:l,touched:t,handleSubmit:c,isSubmitting:s,getFieldProps:b,setFieldValue:M}=y,j=async x=>{try{const k=await fetch(`https://brasilapi.com.br/api/cep/v2/${x}`);if(!k.ok)throw new Error("Não foi possível encontrar o CEP");return await k.json()}catch(k){return console.error(k),null}},T=async x=>{const{value:k}=x.target;await M("cep",k);const i=k.replace(/\D/g,"");if(i.length===8){const d=await j(i);d&&(P(d),await M("rua",d.street),await M("bairro",d.neighborhood),await M("cidade",d.city),await M("estado",d.state))}},$=async()=>{try{const x=await z.get("/inventory/categories/");S(x.data.categorias.rows)}catch(x){console.error("Error fetching categorias:",x)}finally{p(!1)}};return f.useEffect(()=>{$()},[]),e.jsx(he,{value:y,children:e.jsx(ve,{dateAdapter:be,children:e.jsxs(pe,{autoComplete:"off",noValidate:!0,onSubmit:c,children:[e.jsx(xe,{children:"Novo fornecedor"}),e.jsx(J,{}),e.jsx(K,{sx:{p:2.5},children:e.jsx(m,{container:!0,spacing:3,children:e.jsx(m,{item:!0,xs:12,children:e.jsxs(m,{container:!0,spacing:3,children:[e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"nome",children:"Nome do fornecedor"}),e.jsx(C,{fullWidth:!0,id:"nome",placeholder:"Nome",...b("nome"),error:!!(t.nome&&l.nome),helperText:e.jsx(e.Fragment,{children:t.nome&&l.nome})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"cnpj",children:"CNPJ"}),e.jsx(A,{mask:"99.999.999/9999-99",value:b("cnpj").value,onChange:b("cnpj").onChange,children:()=>e.jsx(C,{fullWidth:!0,id:"cnpj",placeholder:"CNPJ",error:!!(t.cnpj&&l.cnpj),helperText:e.jsx(e.Fragment,{children:t.cnpj&&l.cnpj})})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"inscricao_estadual",children:"Inscrição Estadual"}),e.jsx(C,{fullWidth:!0,id:"inscricao_estadual",placeholder:"Inscrição Estadual",...b("inscricao_estadual"),error:!!(t.inscricao_estadual&&l.inscricao_estadual),helperText:e.jsx(e.Fragment,{children:t.inscricao_estadual&&l.inscricao_estadual})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"cep",children:"CEP"}),e.jsx(A,{mask:"99999-999",value:b("cep").value,onChange:T,children:()=>e.jsx(C,{fullWidth:!0,id:"cep",placeholder:"CEP",error:!!(t.cep&&l.cep),helperText:e.jsx(e.Fragment,{children:t.cep&&l.cep})})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"rua",children:"Endereço"}),e.jsx(C,{fullWidth:!0,id:"rua",placeholder:"Endereço",...b("rua"),error:!!(t.rua&&l.rua),helperText:e.jsx(e.Fragment,{children:t.rua&&l.rua})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"bairro",children:"Bairro"}),e.jsx(C,{fullWidth:!0,id:"bairro",placeholder:"Bairro",...b("bairro"),error:!!(t.bairro&&l.bairro),helperText:e.jsx(e.Fragment,{children:t.bairro&&l.bairro})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"cidade",children:"Cidade"}),e.jsx(C,{fullWidth:!0,id:"cidade",placeholder:"Cidade",...b("cidade"),error:!!(t.cidade&&l.cidade),helperText:e.jsx(e.Fragment,{children:t.cidade&&l.cidade})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"estado",children:"Estado"}),e.jsxs(O,{fullWidth:!0,error:!!(t.estado&&l.estado),children:[e.jsxs(q,{id:"estado",...b("estado"),onChange:async x=>await M("estado",x.target.value),value:y.values.estado||"",displayEmpty:!0,children:[e.jsx(a,{value:"",children:"Selecione"}),e.jsx(a,{value:"AC",children:"Acre"}),e.jsx(a,{value:"AL",children:"Alagoas"}),e.jsx(a,{value:"AP",children:"Amapá"}),e.jsx(a,{value:"AM",children:"Amazonas"}),e.jsx(a,{value:"BA",children:"Bahia"}),e.jsx(a,{value:"CE",children:"Ceará"}),e.jsx(a,{value:"DF",children:"Distrito Federal"}),e.jsx(a,{value:"ES",children:"Espírito Santo"}),e.jsx(a,{value:"GO",children:"Goiás"}),e.jsx(a,{value:"MA",children:"Maranhão"}),e.jsx(a,{value:"MT",children:"Mato Grosso"}),e.jsx(a,{value:"MS",children:"Mato Grosso do Sul"}),e.jsx(a,{value:"MG",children:"Minas Gerais"}),e.jsx(a,{value:"PA",children:"Pará"}),e.jsx(a,{value:"PB",children:"Paraíba"}),e.jsx(a,{value:"PR",children:"Paraná"}),e.jsx(a,{value:"PE",children:"Pernambuco"}),e.jsx(a,{value:"PI",children:"Piauí"}),e.jsx(a,{value:"RJ",children:"Rio de Janeiro"}),e.jsx(a,{value:"RN",children:"Rio Grande do Norte"}),e.jsx(a,{value:"RS",children:"Rio Grande do Sul"}),e.jsx(a,{value:"RO",children:"Rondônia"}),e.jsx(a,{value:"RR",children:"Roraima"}),e.jsx(a,{value:"SC",children:"Santa Catarina"}),e.jsx(a,{value:"SP",children:"São Paulo"}),e.jsx(a,{value:"SE",children:"Sergipe"}),e.jsx(a,{value:"TO",children:"Tocantins"})]}),e.jsx(W,{children:e.jsx(e.Fragment,{children:t.estado&&l.estado})})]})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"email",children:"Email"}),e.jsx(C,{fullWidth:!0,id:"email",placeholder:"Email",...b("email"),error:!!(t.email&&l.email),helperText:e.jsx(e.Fragment,{children:t.email&&l.email}),type:"email"})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"telefone",children:"Telefone"}),e.jsx(A,{mask:"(99) 99999-9999",value:b("telefone").value,onChange:b("telefone").onChange,children:()=>e.jsx(C,{fullWidth:!0,id:"telefone",placeholder:"Telefone",error:!!(t.telefone&&l.telefone),helperText:e.jsx(e.Fragment,{children:t.telefone&&l.telefone})})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"nome_contato",children:"Nome do contato"}),e.jsx(C,{fullWidth:!0,id:"nome_contato",placeholder:"Nome do contato",...b("nome_contato"),error:!!(t.nome_contato&&l.nome_contato),helperText:e.jsx(e.Fragment,{children:t.nome_contato&&l.nome_contato})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"email_contato",children:"Email do contato"}),e.jsx(C,{fullWidth:!0,id:"email_contato",placeholder:"Email",...b("email_contato"),error:!!(t.email_contato&&l.email_contato),helperText:e.jsx(e.Fragment,{children:t.email_contato&&l.email_contato}),type:"email"})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"telefone_contato",children:"Telefone do contato"}),e.jsx(A,{mask:"(99) 9999-9999",value:b("telefone_contato").value,onChange:b("telefone_contato").onChange,children:()=>e.jsx(C,{fullWidth:!0,id:"telefone_contato",placeholder:"Telefone",error:!!(t.telefone_contato&&l.telefone_contato),helperText:e.jsx(e.Fragment,{children:t.telefone_contato&&l.telefone_contato})})})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"categoria",children:"Categoria"}),e.jsxs(O,{fullWidth:!0,error:!!(t.name&&l.name),children:[e.jsx(q,{id:"categoria",placeholder:"Nome",...b("categoria"),value:y.values.categoria,children:v.map(x=>e.jsx(a,{value:x.id,children:x.categoria},"ct_"+x.id))}),t.categoria&&l.categoria&&e.jsx(W,{children:e.jsx(e.Fragment,{children:l.categoria})})]})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(h,{htmlFor:"condicoes_pagamento",children:"Condições de pagamento"}),e.jsxs(O,{fullWidth:!0,error:!!(t.condicoes_pagamento&&l.condicoes_pagamento),children:[e.jsxs(q,{id:"condicoes_pagamento",...b("condicoes_pagamento"),value:y.values.condicoes_pagamento,multiple:!0,children:[e.jsx(a,{value:"Pix",children:"Pix"}),e.jsx(a,{value:"Cartao de credito",children:"Cartão de crédito"}),e.jsx(a,{value:"Boleto",children:"Boleto"})]}),e.jsx(W,{children:e.jsx(e.Fragment,{children:t.condicoes_pagamento&&l.condicoes_pagamento})})]})]})}),e.jsx(m,{item:!0,xs:12,sm:4,children:e.jsx(u,{spacing:1,direction:"row",alignItems:"center",children:e.jsx(Ce,{control:e.jsx(Se,{checked:y.values.status,onChange:async x=>await M("status",x.target.checked),name:"status"}),label:"Ativar ou desativar fornecedor"})})})]})})})}),e.jsx(J,{}),e.jsx(ge,{sx:{p:2.5},children:e.jsx(m,{container:!0,alignItems:"center",display:{justifyContent:"flex-end"},children:e.jsx(m,{item:!0,children:e.jsxs(u,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(N,{color:"error",onClick:n,children:"Cancelar"}),e.jsx(N,{type:"submit",variant:"contained",disabled:s,children:"Cadastrar"})]})})})})]})})})},yo=({openModalCreate:o,modalToggler:n,supplier:r})=>{const p=()=>{n(!1)},v=r?e.jsx(X,{sx:{p:5},children:e.jsx(u,{direction:"row",justifyContent:"center",children:e.jsx(Ze,{})})}):e.jsx(_o,{supplier:r??null,closeModal:p});return e.jsx(Te,{open:o,onClose:p,"aria-labelledby":"modal-supplier-add-label","aria-describedby":"modal-supplier-add-description",sx:{"& .MuiPaper-root:focus":{outline:"none"}},children:e.jsx(je,{sx:{width:"calc(100% - 48px)",minWidth:340,maxWidth:880,height:"auto",maxHeight:"calc(100vh - 48px)"},modal:!0,content:!1,children:e.jsx(Me,{sx:{maxHeight:"calc(100vh - 48px)","& .simplebar-content":{display:"flex",flexDirection:"column"}},children:v})})})},Fo=(o,n,r,p)=>{const v=Qe(o.getValue(n),r);return p(v),v.passed};function Po({data:o,columns:n,modalToggler:r}){const p=fe(),v=Be(p.breakpoints.down("sm")),[S,F]=f.useState([{id:"id",desc:!0}]),[P,_]=f.useState({}),[y,l]=f.useState(""),t=Ee({data:o,columns:n,state:{sorting:S,rowSelection:P,globalFilter:y},enableRowSelection:!0,onSortingChange:F,onRowSelectionChange:_,onGlobalFilterChange:l,getRowCanExpand:()=>!0,getSortedRowModel:Le(),getFilteredRowModel:Ge(),getCoreRowModel:Ve(),getPaginationRowModel:He(),getExpandedRowModel:Je(),globalFilterFn:Fo,debugTable:!0});return $e(p.palette.primary.lighter,.1),e.jsxs(je,{content:!1,children:[e.jsxs(u,{direction:{xs:"column",sm:"row"},spacing:2,alignItems:"center",justifyContent:"space-between",sx:{padding:2,...v&&{"& .MuiOutlinedInput-root, & .MuiFormControl-root":{width:"100%"}}},children:[e.jsx(Ae,{value:y??"",onFilterChange:c=>{l(String(c))},placeholder:`Search ${o.length} records...`}),e.jsxs(u,{direction:{xs:"column",sm:"row"},spacing:2,alignItems:"center",sx:{width:{xs:"100%",sm:"auto"}},children:[e.jsx(ro,{getState:t.getState,getAllColumns:t.getAllColumns,setSorting:F}),e.jsx(u,{direction:"row",spacing:2,alignItems:"center",children:e.jsx(N,{variant:"contained",startIcon:e.jsx(Ke,{}),onClick:r,children:"Adicionar Fornecedor"})})]})]}),e.jsx(De,{children:e.jsxs(u,{children:[e.jsx(Xe,{selected:Object.keys(P).length}),e.jsx(Ie,{children:e.jsxs(Ne,{children:[e.jsx(Oe,{children:t.getHeaderGroups().map(c=>e.jsx(Q,{children:c.headers.map(s=>(s.column.columnDef.meta!==void 0&&s.column.getCanSort()&&Object.assign(s.column.columnDef.meta,{className:s.column.columnDef.meta.className+" cursor-pointer prevent-select"}),e.jsx(Y,{...s.column.columnDef.meta,onClick:s.column.getToggleSortingHandler(),...s.column.getCanSort()&&s.column.columnDef.meta===void 0&&{className:"cursor-pointer prevent-select"},children:s.isPlaceholder?null:e.jsxs(u,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(X,{children:oe(s.column.columnDef.header,s.getContext())}),s.column.getCanSort()&&e.jsx(ao,{column:s.column})]})},s.id)))},c.id))}),e.jsx(qe,{children:t.getRowModel().rows.length===0?e.jsx(Q,{children:e.jsx(Y,{colSpan:n.length,align:"center",children:e.jsx(We,{msg:"Nenhum registro encontrado"})})}):t.getRowModel().rows.map(c=>e.jsx(f.Fragment,{children:e.jsx(Q,{children:c.getVisibleCells().map(s=>e.jsx(Y,{...s.column.columnDef.meta,children:oe(s.column.columnDef.cell,s.getContext())},s.id))})},c.id))})]})}),e.jsxs(e.Fragment,{children:[e.jsx(J,{}),e.jsx(X,{sx:{p:2},children:e.jsx(ze,{setPageSize:t.setPageSize,setPageIndex:t.setPageIndex,getState:t.getState,getPageCount:t.getPageCount})})]})]})})]})}function Eo(){const o=fe(),[n,r]=f.useState(!1),[p,v]=f.useState(!1),[S,F]=f.useState(!1),[P,_]=f.useState(!1),[y,l]=f.useState(null),[t,c]=f.useState(""),[s,b]=f.useState(""),[M,j]=f.useState([]),T=async()=>{try{const d=await z.get("/inventory/suppliers");j(d.data.fornecedores.rows)}catch(d){console.error("Erro ao buscar dados:",d)}};f.useEffect(()=>{T()},[P,p]);const $=()=>{r(!n)},x=()=>{_(!0)},k=()=>{v(!p)},i=f.useMemo(()=>[{id:"select",header:({table:d})=>e.jsx(ae,{checked:d.getIsAllRowsSelected(),indeterminate:d.getIsSomeRowsSelected(),onChange:d.getToggleAllRowsSelectedHandler()}),cell:({row:d})=>e.jsx(ae,{checked:d.getIsSelected(),disabled:!d.getCanSelect(),indeterminate:d.getIsSomeSelected(),onChange:d.getToggleSelectedHandler()}),meta:{className:"p-0"}},{accessorKey:"nome",header:"Nome do fornecedor"},{accessorKey:"cnpj",header:"cnpj"},{accessorKey:"categoria.categoria",header:"categoria"},{accessorKey:"condicoes_pagamento",header:"Condição de pagamento",cell:({row:d})=>{const B=d.original.condicoes_pagamento;let w=[];if(B)try{w=B.split(",").map(E=>E.trim())}catch(E){console.error("Erro ao fazer parsing das condições de pagamento:",E)}return!w||w.length===0?e.jsx(G,{label:"Nenhuma condição",size:"small",variant:"outlined"}):e.jsx(u,{direction:"row",spacing:1,children:w.map((E,we)=>e.jsx(G,{label:E,size:"small",variant:"outlined"},we))})}},{accessorKey:"status",header:"Status",cell:d=>{switch(d.getValue()){case!1:return e.jsx(U,{title:"Para ativar o fornecedor, clique no botão de editar.",children:e.jsx(G,{color:"error",label:"Inativo",size:"small",variant:"light"})});case!0:return e.jsx(U,{title:"Para desativar o fornecedor, clique no botão de editar.",children:e.jsx(G,{color:"success",label:"Ativo",size:"small",variant:"light"})});case null:default:return e.jsx(G,{color:"info",label:"Pendente",size:"small",variant:"light"})}}},{id:"actions",header:"Actions",cell:({row:d})=>e.jsxs(u,{direction:"row",spacing:1,children:[e.jsx(U,{title:"Editar",children:e.jsx(re,{color:"primary",onClick:()=>{l(d.original),x()},children:e.jsx(eo,{})})}),e.jsx(U,{title:"Excluir",children:e.jsx(re,{color:"error",onClick:()=>{c(d.original.id),r(!0),b(d.original.nome)},children:e.jsx(Ye,{})})})]})}],[o]);return e.jsxs(e.Fragment,{children:[e.jsx(Po,{data:M,columns:i,modalToggler:()=>{F(!0),l(null),k()}}),e.jsx(Co,{id:t,title:t,open:n,handleClose:$,name:s}),e.jsx(yo,{openModalCreate:p,modalToggler:k}),e.jsx(So,{modalEdit:P,handleClose:()=>{_(!1)},data:y})]})}export{Eo as default};
