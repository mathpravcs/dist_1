import{j as e,a3 as H,a4 as te,a5 as D,S as l,a6 as ae,T as k,i as P,l as M,r as p,c as z,a as b,a7 as G,a8 as O,B as v,a9 as K,aa as L,ab as J,ac as A,G as i,I as x,ad as j,ae as Q,q as se,af as le,ag as ne,d as ie,ah as ce,M as U,ai as de,o as Y,J as me,K as ue,aj as he,Q as pe,U as xe,W as ge,X as je,Y as I,Z as W,$ as V,a0 as fe,ak as be,al as Ce,P as Se,am as we,N as ye,an as Fe,ao as Pe,ap as X,aq as q}from"./index-4a286e5b.js";import{D as Te,P as Ee,R as De,r as ve,I as $,a as Re}from"./index-12584614.js";import{I as R}from"./index-757055f0.js";import{L as Z,A as _,C as Me,E as Be}from"./CircularWithPath-2be210af.js";import{S as ke,H as Ie}from"./SelectColumnSorting-8f7c879d.js";const We=async m=>{try{await M.delete(`/inventory/polo/${m}`)}catch(c){throw console.error("Erro ao deletar o polo:",c),c}};function Ae({id:m,title:c,open:u,handleClose:h,polo:S,setAlertDelete:F}){const y=async()=>{try{await We(m),h(),window.location.reload()}catch(f){console.error("Erro ao deletar o polo:",f)}};return e.jsx(H,{open:u,onClose:h,keepMounted:!0,TransitionComponent:te,maxWidth:"xs","aria-labelledby":"column-delete-title","aria-describedby":"column-delete-description",children:e.jsx(D,{sx:{mt:2,my:1},children:e.jsxs(l,{alignItems:"center",spacing:3.5,children:[e.jsx(ae,{color:"error",sx:{width:72,height:72,fontSize:"1.75rem"},children:e.jsx(Te,{})}),e.jsxs(l,{spacing:2,children:[e.jsx(k,{variant:"h4",align:"center",children:"Você tem certeza?"}),e.jsxs(k,{align:"center",children:["Você está deletando o polo",e.jsxs(k,{variant:"subtitle1",component:"span",children:[" ",'"',S,'"'," "]}),", esta operação não pode ser desfeita."]})]}),e.jsxs(l,{direction:"row",spacing:2,sx:{width:1},children:[e.jsx(P,{fullWidth:!0,onClick:h,color:"secondary",variant:"outlined",children:"Cancelar"}),e.jsx(P,{fullWidth:!0,color:"error",variant:"contained",onClick:y,autoFocus:!0,children:"Deletar"})]})]})})})}function Ne({handleClose:m,modalEdit:c,data:u}){const[h,S]=p.useState(""),F=async o=>{try{const d=await fetch(`https://brasilapi.com.br/api/cep/v2/${o}`);if(!d.ok)throw new Error(`Error fetching address: ${d.statusText}`);return await d.json()}catch(d){return console.error("Failed to fetch address:",d),null}};p.useEffect(()=>{(async()=>{if(h.length===9)try{const d=await F(h.replace("-",""));if(d){await a.setFieldValue("rua",d.street),await a.setFieldValue("bairro",d.neighborhood),await a.setFieldValue("cidade",d.city);const T=d.state.toLowerCase();await a.setFieldValue("estado",T)}}catch(d){console.error("Failed to fetch address:",d)}})()},[h]);const y=o=>({polo:(o==null?void 0:o.polo)??"",cep:(o==null?void 0:o.cep)??"",rua:(o==null?void 0:o.rua)??"",cidade:(o==null?void 0:o.cidade)??"",estado:(o==null?void 0:o.estado)??"",numero:(o==null?void 0:o.numero)??"",complemento:(o==null?void 0:o.complemento)??"",telefone:(o==null?void 0:o.telefone)??"",descricao:(o==null?void 0:o.descricao)??"",bairro:(o==null?void 0:o.bairro)??""}),f=z().shape({polo:b().max(255).required("Nome é obrigatorio"),telefone:b().required("Telefone é obrigatorio"),cep:b().required("CEP é obrigatorio"),rua:b().max(255).required("Endereço é obrigatorio"),cidade:b().max(255).required("Cidade é obrigatorio"),estado:b().max(255).required("Estado é obrigatorio"),numero:G().required("Numero é obrigatorio"),complemento:b().max(255),descricao:b().max(500),bairro:b().max(255).required("Bairro é obrigatorio")}),a=O({initialValues:y(u),validationSchema:f,enableReinitialize:!0,onSubmit:async(o,{setSubmitting:d,resetForm:T})=>{try{const E=await M.put(`/inventory/polo/${u.id}`,{polo:o.polo,telefone:o.telefone.replace(/\D/g,""),cep:o.cep.replace(/\D/g,""),rua:o.rua,numero:o.numero,complemento:o.complemento,bairro:o.bairro,cidade:o.cidade,estado:o.estado,descricao:o.descricao});T(),m(!1)}catch(E){console.error(E),d(!1)}}}),{errors:r,touched:n,handleSubmit:C,isSubmitting:g,getFieldProps:t,setFieldValue:s}=a;return e.jsx("div",{children:e.jsx(H,{open:c,keepMounted:!0,onClose:()=>m(!1),"aria-describedby":"alert-dialog-slide-description",children:e.jsx(v,{sx:{p:1,py:1.5},children:e.jsx(D,{children:e.jsx(K,{value:a,children:e.jsxs(L,{autoComplete:"off",noValidate:!0,onSubmit:C,children:[e.jsxs(Z,{dateAdapter:_,children:[e.jsx(J,{children:"Editar Polo"}),e.jsx(A,{}),e.jsx(D,{sx:{p:2.5},children:e.jsx(i,{container:!0,spacing:3,children:e.jsx(i,{item:!0,xs:12,children:e.jsxs(i,{container:!0,spacing:3,children:[e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(x,{htmlFor:"polo",children:"Polo"}),e.jsx(j,{fullWidth:!0,id:"polo",placeholder:"Polo",...t("polo"),error:!!(n.polo&&r.polo),helperText:e.jsx(e.Fragment,{children:n.polo&&r.polo})})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(x,{htmlFor:"telefone",children:"Telefone"}),e.jsx(R,{mask:"(99)9999-9999",value:a.values.telefone,onChange:async o=>await s("telefone",o.target.value),children:o=>e.jsx(j,{fullWidth:!0,id:"telefone",placeholder:"Telefone",...o,error:!!(n.telefone&&r.telefone),helperText:n.telefone&&r.telefone})})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(x,{htmlFor:"cep",children:"CEP"}),e.jsx(R,{mask:"99999-999",value:a.values.cep,onChange:o=>{S(o.target.value),s("cep",o.target.value)},children:o=>e.jsx(j,{fullWidth:!0,id:"cep",placeholder:"CEP",...o,error:!!(n.cep&&r.cep),helperText:n.cep&&r.cep})})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(x,{htmlFor:"rua",children:"Endereço"}),e.jsx(j,{fullWidth:!0,id:"rua",placeholder:"Endereço",...t("rua"),error:!!(n.rua&&r.rua),helperText:typeof r.rua=="string"&&n.rua&&r.rua})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(x,{htmlFor:"bairro",children:"Bairro"}),e.jsx(j,{fullWidth:!0,id:"bairro",placeholder:"Bairro",...t("bairro"),error:!!(n.bairro&&r.bairro),helperText:e.jsx(e.Fragment,{children:n.bairro&&r.bairro})})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(x,{htmlFor:"cidade",children:"Cidade"}),e.jsx(j,{fullWidth:!0,id:"cidade",placeholder:"Cidade",...t("cidade"),error:!!(n.cidade&&r.cidade),helperText:e.jsx(e.Fragment,{children:n.cidade&&r.cidade})})]})}),e.jsx(i,{item:!0,xs:12,sm:3,children:e.jsxs(l,{spacing:1,children:[e.jsx(x,{htmlFor:"estado",children:"Estado"}),e.jsx(j,{fullWidth:!0,id:"estado",placeholder:"Estado",...t("estado"),error:!!(n.estado&&r.estado),helperText:e.jsx(e.Fragment,{children:n.estado&&r.estado})})]})}),e.jsx(i,{item:!0,xs:12,sm:3,children:e.jsxs(l,{spacing:1,children:[e.jsx(x,{htmlFor:"numero",children:"Numero"}),e.jsx(j,{type:"number",fullWidth:!0,id:"numero",placeholder:"Numero",...t("numero"),error:!!(n.numero&&r.numero),helperText:e.jsx(e.Fragment,{children:n.numero&&r.numero})})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(l,{spacing:1,children:[e.jsx(x,{htmlFor:"complemento",children:"Complemento"}),e.jsx(j,{fullWidth:!0,id:"complemento",placeholder:"Complemento",...t("complemento"),error:!!(n.complemento&&r.complemento),helperText:e.jsx(e.Fragment,{children:n.complemento&&r.complemento})})]})}),e.jsx(i,{item:!0,xs:12,children:e.jsxs(l,{spacing:1,children:[e.jsx(x,{htmlFor:"descricao",children:"Descrição"}),e.jsx(j,{fullWidth:!0,id:"descricao",multiline:!0,minRows:2,placeholder:"Descrição",...t("descricao"),error:!!(n.descricao&&r.descricao),helperText:e.jsx(e.Fragment,{children:n.descricao&&r.descricao})})]})})]})})})})]}),e.jsxs(Q,{children:[e.jsx(P,{color:"error",onClick:()=>m(!1),children:"Cancelar"}),e.jsx(P,{variant:"contained",type:"submit",disabled:g,children:"Salvar"})]})]})})})})})})}const Ve=[{code:"ac",name:"Acre"},{code:"al",name:"Alagoas"},{code:"ap",name:"Amapá"},{code:"am",name:"Amazonas"},{code:"ba",name:"Bahia"},{code:"ce",name:"Ceará"},{code:"df",name:"Distrito Federal"},{code:"es",name:"Espírito Santo"},{code:"go",name:"Goiás"},{code:"ma",name:"Maranhão"},{code:"mt",name:"Mato Grosso"},{code:"ms",name:"Mato Grosso do Sul"},{code:"mg",name:"Minas Gerais"},{code:"pa",name:"Pará"},{code:"pb",name:"Paraíba"},{code:"pr",name:"Paraná"},{code:"pe",name:"Pernambuco"},{code:"pi",name:"Piauí"},{code:"rj",name:"Rio de Janeiro"},{code:"rn",name:"Rio Grande do Norte"},{code:"rs",name:"Rio Grande do Sul"},{code:"ro",name:"Rondônia"},{code:"rr",name:"Roraima"},{code:"sc",name:"Santa Catarina"},{code:"sp",name:"São Paulo"},{code:"se",name:"Sergipe"},{code:"to",name:"Tocantins"}],Xe=async m=>{try{const c=await fetch(`https://brasilapi.com.br/api/cep/v2/${m}`);if(!c.ok)throw new Error(`Error fetching address: ${c.statusText}`);return await c.json()}catch(c){return console.error("Failed to fetch address:",c),null}},qe=m=>({polo:"",telefone:"",cep:"",rua:"",numero:"",complemento:"",bairro:"",cidade:"",estado:"",descricao:""}),$e=({pole:m,closeModal:c})=>{const[u,h]=p.useState(""),[S,F]=p.useState("");p.useEffect(()=>{(async()=>{if(u.length===9)try{const o=await Xe(u.replace("-",""));if(o){await f.setFieldValue("rua",o.street),await f.setFieldValue("bairro",o.neighborhood),await f.setFieldValue("cidade",o.city);const d=o.state.toLowerCase();F(d),await f.setFieldValue("estado",d)}}catch(o){console.error("Failed to fetch address:",o)}})()},[u]);const y=z().shape({polo:b().max(255).required("Nome é obrigatório"),telefone:b().matches(/^\(\d{2}\)\d{4}-\d{4}$/,"Telefone deve estar no formato (XX)XXXX-XXXX").required("Telefone é obrigatório"),cep:b().matches(/^\d{5}-\d{3}$/,"CEP deve estar no formato XXXXX-XXX").required("CEP é obrigatório"),rua:b().max(255).required("Endereço é obrigatório"),bairro:b().max(255).required("Bairro é obrigatório"),cidade:b().max(255).required("Cidade é obrigatória"),estado:b().max(2).required("Estado é obrigatório"),numero:G().required("Número é obrigatório"),complemento:b().max(255),descricao:b().max(500)}),f=O({initialValues:qe(),validationSchema:y,enableReinitialize:!0,onSubmit:async(s,{setSubmitting:o})=>{try{const d=await M.post("/inventory/polo",{polo:s.polo,telefone:s.telefone.replace(/\D/g,""),cep:s.cep.replace(/\D/g,""),rua:s.rua,numero:s.numero,complemento:s.complemento,bairro:s.bairro,cidade:s.cidade,estado:s.estado,descricao:s.descricao});o(!1),c()}catch(d){console.error(d)}}}),{errors:a,touched:r,handleSubmit:n,isSubmitting:C,getFieldProps:g,setFieldValue:t}=f;return e.jsx(K,{value:f,children:e.jsx(Z,{dateAdapter:_,children:e.jsxs(L,{autoComplete:"off",noValidate:!0,onSubmit:n,children:[e.jsx(J,{children:"Novo Polo"}),e.jsx(A,{}),e.jsx(D,{sx:{p:2.5},children:e.jsx(i,{container:!0,spacing:3,children:e.jsx(i,{item:!0,xs:12,children:e.jsxs(i,{container:!0,spacing:3,children:[e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(x,{htmlFor:"polo",children:"Nome do Polo"}),e.jsx(j,{fullWidth:!0,id:"polo",placeholder:"Nome",...g("polo"),error:!!(r.polo&&a.polo),helperText:typeof r.polo=="boolean"?a.polo&&"Nome é obrigatório":""})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(x,{htmlFor:"telefone",children:"Telefone"}),e.jsx(R,{mask:"(99)9999-9999",value:f.values.telefone,onChange:async s=>await t("telefone",s.target.value),children:s=>e.jsx(j,{fullWidth:!0,id:"telefone",placeholder:"Telefone",...s,error:!!(r.telefone&&a.telefone),helperText:typeof r.telefone=="boolean"?a.telefone&&"Telefone é obrigatório":""})})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(x,{htmlFor:"cep",children:"CEP"}),e.jsx(R,{mask:"99999-999",value:u,onChange:s=>{h(s.target.value),t("cep",s.target.value)},children:s=>e.jsx(j,{fullWidth:!0,id:"cep",placeholder:"CEP",...s,error:!!(r.cep&&a.cep),helperText:r.cep&&a.cep})})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(x,{htmlFor:"rua",children:"Rua"}),e.jsx(j,{fullWidth:!0,id:"rua",placeholder:"Rua",...g("rua"),error:!!(r.rua&&a.rua),helperText:typeof r.rua=="boolean"?a.rua&&"Endereço é obrigatório":""})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(x,{htmlFor:"numero",children:"Número"}),e.jsx(j,{fullWidth:!0,id:"numero",placeholder:"Número",...g("numero"),error:!!(r.numero&&a.numero),helperText:typeof r.numero=="boolean"?a.numero&&"numero é obrigatório":""})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(x,{htmlFor:"complemento",children:"Complemento"}),e.jsx(j,{fullWidth:!0,id:"complemento",placeholder:"Complemento",...g("complemento"),error:!!(r.complemento&&a.complemento)})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(x,{htmlFor:"bairro",children:"Bairro"}),e.jsx(j,{fullWidth:!0,id:"bairro",placeholder:"Bairro",...g("bairro"),error:!!(r.bairro&&a.bairro),helperText:typeof r.bairro=="boolean"?a.bairro&&"numero é obrigatório":""})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(x,{htmlFor:"cidade",children:"Cidade"}),e.jsx(j,{fullWidth:!0,id:"cidade",placeholder:"Cidade",...g("cidade"),error:!!(r.cidade&&a.cidade),helperText:typeof r.cidade=="boolean"?a.cidade&&"cidade é obrigatório":""})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(x,{htmlFor:"estado",children:"Estado"}),e.jsxs(se,{fullWidth:!0,error:!!(r.estado&&a.estado),children:[e.jsx(le,{id:"estado",value:f.values.estado,onChange:async s=>await t("estado",s.target.value),children:Ve.map(s=>e.jsx(ne,{value:s.code,children:s.name},s.code))}),r.estado&&a.estado&&e.jsx(ie,{children:typeof a.estado})]})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(l,{spacing:1,children:[e.jsx(x,{htmlFor:"descricao",children:"Descrição"}),e.jsx(j,{fullWidth:!0,id:"descricao",placeholder:"Descrição",...g("descricao"),error:!!(r.descricao&&a.descricao)})]})})]})})})}),e.jsxs(Q,{children:[e.jsx(P,{type:"submit",variant:"contained",color:"primary",disabled:C,children:"Salvar"}),e.jsx(P,{variant:"outlined",color:"secondary",onClick:c,children:"Cancelar"})]})]})})})},He=({openModalCreate:m,modalToggler:c,pole:u})=>{const h=()=>{c(!1)},S=u?e.jsx(v,{sx:{p:5},children:e.jsx(l,{direction:"row",justifyContent:"center",children:e.jsx(Me,{})})}):e.jsx($e,{pole:u??null,closeModal:h});return e.jsx(ce,{open:m,onClose:h,"aria-labelledby":"modal-pole-add-label","aria-describedby":"modal-pole-add-description",sx:{"& .MuiPaper-root:focus":{outline:"none"}},children:e.jsx(U,{sx:{width:"calc(100% - 48px)",minWidth:340,maxWidth:880,height:"auto",maxHeight:"calc(100vh - 48px)"},modal:!0,content:!1,children:e.jsx(de,{sx:{maxHeight:"calc(100vh - 48px)","& .simplebar-content":{display:"flex",flexDirection:"column"}},children:S})})})},ze=(m,c,u,h)=>{const S=ve(m.getValue(c),u);return h(S),S.passed};function Ge({data:m,columns:c,modalToggler:u}){const h=Y(),S=me(h.breakpoints.down("sm")),[F,y]=p.useState([{id:"id",desc:!0}]),[f,a]=p.useState({}),[r,n]=p.useState(""),C=ue({data:m,columns:c,state:{sorting:F,rowSelection:f,globalFilter:r},enableRowSelection:!0,onSortingChange:y,onRowSelectionChange:a,onGlobalFilterChange:n,getRowCanExpand:()=>!0,getSortedRowModel:Se(),getFilteredRowModel:we(),getCoreRowModel:ye(),getPaginationRowModel:Fe(),getExpandedRowModel:Pe(),globalFilterFn:ze,debugTable:!1});return e.jsxs(U,{content:!1,children:[e.jsxs(l,{direction:{xs:"column",sm:"row"},spacing:2,alignItems:"center",justifyContent:"space-between",sx:{padding:2,...S&&{"& .MuiOutlinedInput-root, & .MuiFormControl-root":{width:"100%"}}},children:[e.jsx(he,{value:r??"",onFilterChange:g=>{n(String(g))},placeholder:`Search ${m.length} records...`}),e.jsxs(l,{direction:{xs:"column",sm:"row"},spacing:2,alignItems:"center",sx:{width:{xs:"100%",sm:"auto"}},children:[e.jsx(ke,{getState:C.getState,getAllColumns:C.getAllColumns,setSorting:y}),e.jsx(l,{direction:"row",spacing:2,alignItems:"center",children:e.jsx(P,{variant:"contained",startIcon:e.jsx(Ee,{}),onClick:u,children:"Adicionar Polo"})})]})]}),e.jsx(pe,{children:e.jsxs(l,{children:[e.jsx(De,{selected:Object.keys(f).length}),e.jsx(xe,{children:e.jsxs(ge,{children:[e.jsx(je,{children:C.getHeaderGroups().map(g=>e.jsx(I,{children:g.headers.map(t=>(t.column.columnDef.meta!==void 0&&t.column.getCanSort()&&Object.assign(t.column.columnDef.meta,{className:t.column.columnDef.meta.className+" cursor-pointer prevent-select"}),e.jsx(W,{...t.column.columnDef.meta,onClick:t.column.getToggleSortingHandler(),...t.column.getCanSort()&&t.column.columnDef.meta===void 0&&{className:"cursor-pointer prevent-select"},children:t.isPlaceholder?null:e.jsxs(l,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(v,{children:V(t.column.columnDef.header,t.getContext())}),t.column.getCanSort()&&e.jsx(Ie,{column:t.column})]})},t.id)))},g.id))}),e.jsx(fe,{children:C.getRowModel().rows.length===0?e.jsx(I,{children:e.jsx(W,{colSpan:c.length,align:"center",children:e.jsx(be,{msg:"Nenhum registro encontrado"})})}):C.getRowModel().rows.map(g=>e.jsx(p.Fragment,{children:e.jsx(I,{children:g.getVisibleCells().map(t=>e.jsx(W,{...t.column.columnDef.meta,children:V(t.column.columnDef.cell,t.getContext())},t.id))})},g.id))})]})}),e.jsx(A,{}),e.jsx(v,{sx:{p:2},children:e.jsx(Ce,{setPageSize:C.setPageSize,setPageIndex:C.setPageIndex,getState:C.getState,getPageCount:C.getPageCount})})]})})]})}function Ue(){const m=Y(),[c,u]=p.useState(!1),[h,S]=p.useState(!1),[F,y]=p.useState(!1),[f,a]=p.useState(!1),[r,n]=p.useState(null),[C,g]=p.useState(""),[t,s]=p.useState(""),[o,d]=p.useState([]),[T,E]=p.useState(!1);p.useEffect(()=>{(async()=>{try{const B=await M.get("/inventory/polo");d(B.data.polos.rows)}catch(B){console.error("Erro ao buscar dados:",B)}})()},[f,C,t,h,r,T]);const ee=()=>{u(!c)},oe=()=>{a(!0)},N=()=>{S(!h)},re=p.useMemo(()=>[{id:"select",header:({table:w})=>e.jsx($,{checked:w.getIsAllRowsSelected(),indeterminate:w.getIsSomeRowsSelected(),onChange:w.getToggleAllRowsSelectedHandler()}),cell:({row:w})=>e.jsx($,{checked:w.getIsSelected(),disabled:!w.getCanSelect(),indeterminate:w.getIsSomeSelected(),onChange:w.getToggleSelectedHandler()}),meta:{className:"p-0"}},{accessorKey:"id",header:"Identificador"},{accessorKey:"polo",header:"Nome do Polo"},{accessorKey:"telefone",header:"Telefone"},{accessorKey:"cep",header:"Cep"},{accessorKey:"rua",header:"Endereço"},{accessorKey:"descricao",header:"Descrição"},{id:"actions",header:"Actions",cell:({row:w})=>e.jsxs(l,{direction:"row",spacing:1,children:[e.jsx(X,{title:"Editar",children:e.jsx(q,{color:"primary",onClick:()=>{n(w.original),oe()},children:e.jsx(Be,{})})}),e.jsx(X,{title:"Excluir",children:e.jsx(q,{color:"error",onClick:()=>{g(w.original.id),u(!0),s(w.original.polo)},children:e.jsx(Re,{})})})]})}],[m]);return e.jsxs(e.Fragment,{children:[e.jsx(Ge,{data:o,columns:re,modalToggler:()=>{y(!0),n(null),N()}}),e.jsx(Ae,{id:C,title:C,open:c,handleClose:ee,polo:t,setAlertDelete:E}),e.jsx(He,{openModalCreate:h,modalToggler:N}),e.jsx(Ne,{modalEdit:f,handleClose:a,data:r})]})}export{Ue as default};
