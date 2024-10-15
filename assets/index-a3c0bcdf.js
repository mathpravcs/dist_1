import{bC as U,Z as K,j as e,G as t,r as l,K as N,N as $,an as L,am as V,M as W,S as n,aj as q,ad as E,i as M,T as a,Q as X,U as J,W as Q,X as Y,Y as P,$ as G,a0 as Z,B as ee,al as ae,bD as D,aA as C,aq as re,bE as te,c as se,bF as z,bG as ne,F as ie,bl as I,bm as k,l as B,aa as oe,bH as H,bI as O,bJ as le}from"./index-aff1943f.js";const A=U(K)({maxWidth:150,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"});function ce({data:i,columns:y}){const[r,c]=l.useState(""),[m,p]=l.useState(""),[g,u]=l.useState(""),[S,x]=l.useState(null),[v,j]=l.useState(i);l.useEffect(()=>{i&&j(i)},[i]);const F=s=>{p(s.target.value)},f=s=>{u(s.target.value)},R=()=>{if(x(null),!m||!g){x("Selecione os campos de data.");return}if(new Date(g)<new Date(m)){x("A data de término deve ser maior ou igual à data de início."),p(""),u(""),j(i);return}const s=i.filter(o=>{const h=new Date(o.data_falecimento),_=new Date(m),b=new Date(g);return b.setHours(b.getHours()+24),h>=_&&h<=b});j(s)},w=()=>{p(""),u(""),x(null),j(i)},d=N({data:v,columns:y,state:{globalFilter:r},getCoreRowModel:$(),getPaginationRowModel:L(),getFilteredRowModel:V(),debugTable:!1}),T=[];return d.getAllColumns().map(s=>T.push({label:typeof s.columnDef.header=="string"?s.columnDef.header:"#",key:s.columnDef.accessorKey})),e.jsxs(W,{title:"Guias de Recolhimento",content:!1,children:[e.jsxs(n,{direction:"row",spacing:2,alignItems:"center",sx:{padding:2},children:[e.jsx(q,{value:r??"",onFilterChange:s=>{c(String(s))}}),e.jsx(E,{sx:{width:200},label:"Data de Início do Falecimento",InputLabelProps:{shrink:!0},name:"startDateFilter",type:"date",value:m,onChange:F}),e.jsx(E,{sx:{width:200},label:"Data de Término do Falecimento",InputLabelProps:{shrink:!0},name:"endDateFilter",type:"date",value:g,onChange:f}),e.jsx(M,{onClick:R,variant:"contained",children:"Filtrar"}),e.jsx(M,{onClick:w,variant:"contained",color:"warning",children:"Limpar"}),S&&e.jsx(a,{color:"error",variant:"body2",sx:{marginTop:2},children:S})]}),e.jsx(X,{children:e.jsxs(n,{children:[e.jsx(J,{children:e.jsxs(Q,{children:[e.jsx(Y,{children:d.getHeaderGroups().map(s=>e.jsx(P,{children:s.headers.map(o=>e.jsx(A,{...o.column.columnDef.meta,children:o.isPlaceholder?null:G(o.column.columnDef.header,o.getContext())},o.id))},s.id))}),e.jsx(Z,{children:d.getRowModel().rows.map(s=>e.jsx(P,{children:s.getVisibleCells().map(o=>e.jsx(A,{...o.column.columnDef.meta,children:G(o.column.columnDef.cell,o.getContext())},o.id))},s.id))})]})}),e.jsx(ee,{sx:{p:2},children:e.jsx(ae,{setPageSize:d.setPageSize,setPageIndex:d.setPageIndex,getState:d.getState,getPageCount:d.getPageCount})})]})})]})}const de=({data:i,handleUpdateModalOpen:y})=>{const r=[{header:"Nº da Nota",accessorKey:"txt_numero_nota"},{header:"Falecido",accessorKey:"nome_falecido"},{header:"Data do Falecimento",accessorKey:"data_falecimento",cell:c=>D(c.getValue(),!1)},{header:"Técnico",accessorKey:"tecnico"},{header:"Status",accessorKey:"status",cell:c=>{switch(c.getValue().codigo){case"3":return e.jsx(C,{color:"info",label:"Em trânsito para clínica",size:"small",variant:"light"});case"8.0":return e.jsx(C,{color:"warning",label:"Aguardando preparo",size:"small",variant:"light"});case"8.1":return e.jsx(C,{color:"success",label:"Em preparo",size:"small",variant:"light"});case"8.2":return e.jsx(C,{color:"success",label:"Aguardando Ornamentação",size:"small",variant:"light"});case"8.3":return e.jsx(C,{color:"info",label:"Ornamentação finalizada",size:"small",variant:"light"});case"8.4":return e.jsx(C,{color:"error",label:"Em câmara fria",size:"small",variant:"light"});default:return e.jsx(C,{color:"error",label:"Desconhecido",size:"small",variant:"light"})}}},{header:"Ações",cell:c=>e.jsx(e.Fragment,{children:e.jsx(re,{color:"primary",onClick:()=>{y(c.row.original)},children:e.jsx(te,{})})})}];return e.jsx(t,{container:!0,spacing:3,children:e.jsx(t,{item:!0,xs:12,children:e.jsx(ce,{data:i,columns:r})})})};function me({handleModalClose:i,handleGetUsers:y,json:r}){var w,d,T,s,o;const c=se().shape({entrada_camara_fria:z().required("Selecione a data de entrada na câmara fria"),previsao_saida_camara_fria:z().required("Selecione a previsão de saída da câmara fria").min(ne("entrada_camara_fria"),"A data de término deve ser maior ou igual à data de início.")}),[m,p]=l.useState(!1),[g,u]=l.useState(!1),[S,x]=l.useState(!1),v=()=>{p(!m)},j=()=>{u(!0)},F=()=>{u(!1),i()},f=()=>{x(!0)},R=()=>{x(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(t,{container:!0,spacing:3,children:[e.jsx(t,{item:!0,xs:12,sm:6,md:3,children:e.jsxs(n,{spacing:1,children:[e.jsx(a,{color:"primary",children:"Nº da Nota"}),e.jsx(a,{children:r.txt_numero_nota})]})}),e.jsx(t,{item:!0,xs:12,sm:6,md:3,children:e.jsxs(n,{spacing:1,children:[e.jsx(a,{color:"primary",children:"Nº da Declaração de Óbito"}),e.jsx(a,{children:r.id_contratacao})]})}),e.jsx(t,{item:!0,xs:12,sm:8,md:3,children:e.jsxs(n,{spacing:1,children:[e.jsx(a,{color:"primary",children:"Nome do Falecido"}),e.jsx(a,{children:r.nome_falecido})]})}),e.jsx(t,{item:!0,xs:12,sm:4,md:3,children:e.jsxs(n,{spacing:1,children:[e.jsx(a,{color:"primary",children:"Data do Falecimento"}),e.jsx(a,{children:D(r.data_falecimento,!1)})]})})]}),e.jsxs(t,{container:!0,spacing:2,marginTop:1,children:[e.jsx(t,{item:!0,xs:12,md:9,children:e.jsxs(n,{spacing:1,children:[e.jsx(a,{color:"primary",children:"Urna"}),e.jsx(a,{children:(w=r.urna)==null?void 0:w.descricao})]})}),e.jsx(t,{item:!0,xs:12,md:3,children:e.jsxs(n,{spacing:1,children:[e.jsx(a,{color:"primary",children:"Expedição"}),e.jsx(a,{children:r.polo})]})})]}),e.jsxs(t,{container:!0,spacing:2,marginTop:1,children:[e.jsx(t,{item:!0,xs:12,md:9,children:e.jsxs(n,{spacing:1,children:[e.jsx(a,{color:"primary",children:"Remoção"}),e.jsx(a,{children:r.end_remocao_sel})]})}),e.jsx(t,{item:!0,xs:12,md:3,children:e.jsxs(n,{spacing:1,children:[e.jsx(a,{color:"primary",children:"Condutor"}),e.jsx(a,{children:r.nome_condutor})]})})]}),e.jsxs(t,{container:!0,spacing:3,marginTop:1,children:[e.jsx(t,{item:!0,xs:12,sm:6,md:3,children:e.jsxs(n,{spacing:1,children:[e.jsx(a,{color:"primary",children:"Recebimento na Clínica"}),e.jsx(a,{children:(d=r.user_recebimento_clinica)==null?void 0:d.usuario}),e.jsx(a,{children:D(r.data_recebimento_clinica,!0)})]})}),e.jsx(t,{item:!0,xs:12,sm:6,md:3,children:e.jsxs(n,{spacing:1,children:[e.jsx(a,{color:"primary",children:"Início do Preparo"}),e.jsx(a,{children:(T=r.user_inicio_preparo)==null?void 0:T.usuario}),e.jsx(a,{children:D(r.data_inicio_preparo,!0)})]})}),e.jsx(t,{item:!0,xs:12,sm:6,md:3,children:e.jsxs(n,{spacing:1,children:[e.jsx(a,{color:"primary",children:"Início da Ornamentação"}),e.jsx(a,{children:(s=r.user_inicio_ornamentacao)==null?void 0:s.usuario}),e.jsx(a,{children:D(r.data_inicio_ornamentacao,!0)})]})}),e.jsx(t,{item:!0,xs:12,sm:6,md:3,children:e.jsxs(n,{spacing:1,children:[e.jsx(a,{color:"primary",children:"Liberação Para Remoção"}),e.jsx(a,{children:(o=r.user_liberacao_remocao)==null?void 0:o.usuario}),e.jsx(a,{children:D(r.data_liberacao_remocao,!0)})]})})]}),e.jsx(t,{container:!0,spacing:2,marginTop:3,justifyContent:"center",children:e.jsx(t,{children:e.jsx(M,{type:"button",variant:"contained",color:"primary",onClick:v,children:"Câmara Fria"})})}),m&&e.jsx(ie,{initialValues:{entrada_camara_fria:r!=null&&r.entrada_camara_fria?I(k(new Date(r.entrada_camara_fria),3),"yyyy-MM-dd HH:mm"):"",previsao_saida_camara_fria:r.previsao_saida_camara_fria?I(k(new Date(r.previsao_saida_camara_fria),3),"yyyy-MM-dd HH:mm"):""},validationSchema:c,onSubmit:async h=>{try{(await B.put(`/clinic/collection-guides/${r.id}`,h)).data.success&&(j(),y())}catch{f()}},children:({errors:h,touched:_})=>e.jsx(e.Fragment,{children:e.jsxs(oe,{children:[e.jsxs(t,{container:!0,justifyContent:"center",spacing:2,marginTop:1,children:[e.jsx(t,{item:!0,xs:12,sm:6,md:4,children:e.jsx(n,{spacing:1,children:e.jsx(H,{name:"entrada_camara_fria",children:({field:b})=>e.jsxs(e.Fragment,{children:[e.jsx(a,{color:"primary",children:"Entrada"}),e.jsx(E,{...b,fullWidth:!0,type:"datetime-local",error:_.entrada_camara_fria&&!!h.entrada_camara_fria,helperText:_.entrada_camara_fria&&h.entrada_camara_fria})]})})})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,children:e.jsx(n,{spacing:1,children:e.jsx(H,{name:"previsao_saida_camara_fria",children:({field:b})=>e.jsxs(e.Fragment,{children:[e.jsx(a,{color:"primary",children:"Previsão de Saída"}),e.jsx(E,{...b,fullWidth:!0,type:"datetime-local",error:_.previsao_saida_camara_fria&&!!h.previsao_saida_camara_fria,helperText:_.previsao_saida_camara_fria&&h.previsao_saida_camara_fria})]})})})})]}),e.jsx(t,{container:!0,spacing:2,marginTop:3,justifyContent:"center",children:e.jsx(M,{type:"submit",variant:"contained",color:"success",children:"Salvar"})})]})})}),e.jsx(t,{container:!0,spacing:2,marginTop:3,justifyContent:"center",children:e.jsx(M,{type:"button",variant:"contained",color:"error",onClick:i,children:"Fechar"})}),e.jsx(O,{title:"Sucesso",open:g,handleClose:F,message:"Registro alterado com sucesso"}),e.jsx(O,{title:"Erro",open:S,handleClose:R,message:"Erro ao alterar o registro. Por favor, tente novamente."})]})}function xe(){document.title="Consolare - Guias de Recolhimento";const[i,y]=l.useState([]),[r,c]=l.useState(!1),[m,p]=l.useState([]),[g,u]=l.useState(!1),S=()=>{u(!0)},x=()=>{u(!1)},v=async()=>{try{const f=await B.get("/clinic/collection-guides");y(f.data.guias)}catch{S()}};l.useEffect(()=>{v()},[]);const j=f=>{c(!0),p(f)},F=()=>{c(!1),v(),p([])};return e.jsxs(t,{container:!0,spacing:3,children:[e.jsxs(t,{item:!0,xs:12,children:[e.jsx(de,{data:i,handleUpdateModalOpen:j}),e.jsx(le,{open:r,handleClose:F,handleGetUsers:i,title:"Guia de Recolhimento",Form:me,json:m})]}),e.jsx(O,{title:"Erro",open:g,handleClose:x,message:"Algo deu errado!"})]})}export{xe as default};
