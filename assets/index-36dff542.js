import{j as e,a3 as J,a4 as ie,a5 as I,S as s,a6 as ce,T as N,h as v,k as R,r as l,c as G,a as g,a7 as Q,a8 as X,a9 as U,aa as Y,ab as Z,ac as z,G as i,I as m,ad as h,p as k,ar as _,af as ee,ag as oe,b as O,ae as re,as as de,ah as me,M as te,ai as pe,B as W,n as ae,J as ue,K as he,at as xe,aj as ge,Q as je,U as fe,W as be,X as Se,Y as q,Z as V,$ as H,a0 as Ce,ak as Fe,al as ye,P as we,am as De,N as Te,an as Pe,ao as Ee,ap as $,aq as L}from"./index-ee215eff.js";import{D as ve,P as Re,R as Me,r as Be,I as K,a as Ie}from"./index-0eedb002.js";import{L as ne,A as se,C as ke,E as We}from"./CircularWithPath-a0e089d2.js";import{I as A}from"./index-2455885d.js";import{S as Ae,H as Ne}from"./SelectColumnSorting-26107784.js";function qe({id:j,title:p,open:r,handleClose:x,name:S}){const E=async F=>{try{await R.delete(`/inventory/departments/${F}`)}catch(C){throw console.error("Erro ao deletar o polo:",C),C}},w=async()=>{try{await E(j),x(),window.location.reload()}catch{}};return e.jsx(J,{open:r,onClose:x,keepMounted:!0,TransitionComponent:ie,maxWidth:"xs","aria-labelledby":"column-delete-title","aria-describedby":"column-delete-description",children:e.jsx(I,{sx:{mt:2,my:1},children:e.jsxs(s,{alignItems:"center",spacing:3.5,children:[e.jsx(ce,{color:"error",sx:{width:72,height:72,fontSize:"1.75rem"},children:e.jsx(ve,{})}),e.jsxs(s,{spacing:2,children:[e.jsx(N,{variant:"h4",align:"center",children:"Você tem certeza?"}),e.jsxs(N,{align:"center",children:["Você está deletando o departamento",e.jsx(N,{variant:"subtitle1",component:"span",sx:{ml:.5},children:S}),", esta operação não pode ser desfeita."]})]}),e.jsxs(s,{direction:"row",spacing:2,sx:{width:1},children:[e.jsx(v,{fullWidth:!0,onClick:x,color:"secondary",variant:"outlined",children:"Cancelar"}),e.jsx(v,{fullWidth:!0,color:"error",variant:"contained",onClick:w,autoFocus:!0,children:"Deletar"})]})]})})})}const Ve=[{code:"ac",name:"Acre"},{code:"al",name:"Alagoas"},{code:"ap",name:"Amapá"},{code:"am",name:"Amazonas"},{code:"ba",name:"Bahia"},{code:"ce",name:"Ceará"},{code:"df",name:"Distrito Federal"},{code:"es",name:"Espírito Santo"},{code:"go",name:"Goiás"},{code:"ma",name:"Maranhão"},{code:"mt",name:"Mato Grosso"},{code:"ms",name:"Mato Grosso do Sul"},{code:"mg",name:"Minas Gerais"},{code:"pa",name:"Pará"},{code:"pb",name:"Paraíba"},{code:"pr",name:"Paraná"},{code:"pe",name:"Pernambuco"},{code:"pi",name:"Piauí"},{code:"rj",name:"Rio de Janeiro"},{code:"rn",name:"Rio Grande do Norte"},{code:"rs",name:"Rio Grande do Sul"},{code:"ro",name:"Rondônia"},{code:"rr",name:"Roraima"},{code:"sc",name:"Santa Catarina"},{code:"sp",name:"São Paulo"},{code:"se",name:"Sergipe"},{code:"to",name:"Tocantins"}],Ge=async j=>{try{const p=await fetch(`https://brasilapi.com.br/api/cep/v2/${j}`);if(!p.ok)throw new Error(`Error fetching address: ${p.statusText}`);return await p.json()}catch(p){return console.error("Failed to fetch address:",p),null}},Oe=({departament:j,closeModal:p})=>{const[r,x]=l.useState(""),[S,E]=l.useState("");l.useState([]);const[w,F]=l.useState(!0);l.useState("");const[C,D]=l.useState([]);l.useEffect(()=>{(async()=>{if(r.length===9)try{const u=await Ge(r.replace("-",""));if(u){await c.setFieldValue("rua",u.street),await c.setFieldValue("bairro",u.neighborhood),await c.setFieldValue("cidade",u.city);const y=u.state.toLowerCase();E(y),await c.setFieldValue("estado",y)}}catch(u){console.error("Failed to fetch address:",u)}})()},[r]);const T=t=>{const u={departamento:"",telefone:"",cep:"",rua:"",numero:"",complemento:"",bairro:"",cidade:"",estado:"",descricao:"",polo:""};return t?de.merge({},u,t):u},d=G().shape({departamento:g().max(255).required("Nome é obrigatório"),telefone:g().required("Telefone é obrigatório"),cep:g().required("CEP é obrigatório"),rua:g().max(255).required("Endereço é obrigatório"),bairro:g().max(255).required("Bairro é obrigatório"),cidade:g().max(255).required("Cidade é obrigatória"),estado:g().max(2).required("Estado é obrigatório"),numero:Q().required("Número é obrigatório"),complemento:g().max(255),descricao:g().max(500),polo:g().max(255).required("Polo é obrigatório")}),c=X({initialValues:T(j),validationSchema:d,enableReinitialize:!0,onSubmit:async(t,{setSubmitting:u})=>{try{const y=await R.post("/inventory/departments",{departamento:t.departamento,poloId:t.polo,telefone:t.telefone.replace(/\D/g,""),cep:t.cep.replace(/\D/g,""),rua:t.rua,numero:t.numero,complemento:t.complemento,bairro:t.bairro,cidade:t.cidade,estado:t.estado,descricao:t.descricao});u(!1),p()}catch(y){console.error(y)}}}),{errors:o,touched:a,handleSubmit:M,isSubmitting:B,getFieldProps:f,setFieldValue:P}=c,n=async()=>{try{const t=await R.get("/inventory/polo/details");D(t.data.polos)}catch(t){console.error("Error fetching polos:",t)}finally{F(!1)}};return l.useEffect(()=>{n()},[]),e.jsx(U,{value:c,children:e.jsx(ne,{dateAdapter:se,children:e.jsxs(Y,{autoComplete:"off",noValidate:!0,onSubmit:M,children:[e.jsx(Z,{children:"Novo Departamento"}),e.jsx(z,{}),e.jsx(I,{sx:{p:2.5},children:e.jsx(i,{container:!0,spacing:3,children:e.jsx(i,{item:!0,xs:12,children:e.jsxs(i,{container:!0,spacing:3,children:[e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(s,{spacing:1,children:[e.jsx(m,{htmlFor:"departamento",children:"Nome do Departamento"}),e.jsx(h,{fullWidth:!0,id:"departamento",placeholder:"Nome",...f("departamento"),error:!!(a.departamento&&o.departamento),helperText:typeof o.departamento=="string"?o.departamento:null})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(s,{spacing:1,children:[e.jsx(m,{htmlFor:"polo",children:"Nome do Polo"}),e.jsx(k,{fullWidth:!0,error:!!(a.polo&&o.polo),children:e.jsx(_,{id:"polo",value:C.find(t=>t.id===c.values.polo)??null,options:C,getOptionLabel:t=>t.polo,renderInput:t=>e.jsx(h,{...t,error:c.touched.polo&&!!c.errors.polo,placeholder:"Selecione o polo"}),onChange:async(t,u)=>{await c.setFieldValue("polo",u?u.id:"")},isOptionEqualToValue:(t,u)=>t.id===u.id})})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(s,{spacing:1,children:[e.jsx(m,{htmlFor:"telefone",children:"Telefone"}),e.jsx(A,{mask:"(99)9999-9999",value:c.values.telefone,onChange:t=>{P("telefone",t.target.value)},children:t=>e.jsx(h,{fullWidth:!0,id:"telefone",placeholder:"Telefone",...t,error:!!(a.telefone&&o.telefone),helperText:e.jsx(e.Fragment,{children:a.telefone&&o.telefone})})})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(s,{spacing:1,children:[e.jsx(m,{htmlFor:"cep",children:"CEP"}),e.jsx(A,{mask:"99999-999",value:r,onChange:t=>{x(t.target.value),P("cep",t.target.value)},children:t=>e.jsx(h,{fullWidth:!0,id:"cep",placeholder:"CEP",...t,error:!!(a.cep&&o.cep),helperText:a.cep&&o.cep})})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(s,{spacing:1,children:[e.jsx(m,{htmlFor:"rua",children:"Rua"}),e.jsx(h,{fullWidth:!0,id:"rua",placeholder:"Rua",...f("rua"),error:!!(a.rua&&o.rua),helperText:e.jsx(e.Fragment,{children:a.rua&&o.rua})})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(s,{spacing:1,children:[e.jsx(m,{htmlFor:"numero",children:"Número"}),e.jsx(h,{fullWidth:!0,id:"numero",placeholder:"Número",...f("numero"),error:!!(a.numero&&o.numero),helperText:e.jsx(e.Fragment,{children:a.numero&&o.numero})})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(s,{spacing:1,children:[e.jsx(m,{htmlFor:"complemento",children:"Complemento"}),e.jsx(h,{fullWidth:!0,id:"complemento",placeholder:"Complemento",...f("complemento"),error:!!(a.complemento&&o.complemento),helperText:e.jsx(e.Fragment,{children:a.complemento&&o.complemento})})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(s,{spacing:1,children:[e.jsx(m,{htmlFor:"bairro",children:"Bairro"}),e.jsx(h,{fullWidth:!0,id:"bairro",placeholder:"Bairro",...f("bairro"),error:!!(a.bairro&&o.bairro),helperText:e.jsx(e.Fragment,{children:a.bairro&&o.bairro})})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(s,{spacing:1,children:[e.jsx(m,{htmlFor:"cidade",children:"Cidade"}),e.jsx(h,{fullWidth:!0,id:"cidade",placeholder:"Cidade",...f("cidade"),error:!!(a.cidade&&o.cidade),helperText:e.jsx(e.Fragment,{children:a.cidade&&o.cidade})})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(s,{spacing:1,children:[e.jsx(m,{htmlFor:"estado",children:"Estado"}),e.jsxs(k,{fullWidth:!0,error:!!(a.estado&&o.estado),children:[e.jsx(ee,{id:"estado",value:c.values.estado,onChange:async t=>await P("estado",t.target.value),children:Ve.map(t=>e.jsx(oe,{value:t.code,children:t.name},t.code))}),a.estado&&o.estado&&e.jsx(O,{children:e.jsx(e.Fragment,{children:o.estado})})]})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(s,{spacing:1,children:[e.jsx(m,{htmlFor:"descricao",children:"Descrição"}),e.jsx(h,{fullWidth:!0,id:"descricao",placeholder:"Descrição",...f("descricao"),error:!!(a.descricao&&o.descricao),helperText:e.jsx(e.Fragment,{children:a.descricao&&o.descricao})})]})})]})})})}),e.jsxs(re,{children:[e.jsx(v,{variant:"outlined",color:"secondary",onClick:p,children:"Cancelar"}),e.jsx(v,{type:"submit",variant:"contained",color:"primary",disabled:B,children:"Salvar"})]})]})})})},ze=({openModalCreate:j,modalToggler:p,department:r})=>{const x=()=>{p(!1)},S=r?e.jsx(W,{sx:{p:5},children:e.jsx(s,{direction:"row",justifyContent:"center",children:e.jsx(ke,{})})}):e.jsx(Oe,{departament:r??null,closeModal:x});return e.jsx(me,{open:j,onClose:x,"aria-labelledby":"modal-pole-add-label","aria-describedby":"modal-pole-add-description",sx:{"& .MuiPaper-root:focus":{outline:"none"}},children:e.jsx(te,{sx:{width:"calc(100% - 48px)",minWidth:340,maxWidth:880,height:"auto",maxHeight:"calc(100vh - 48px)"},modal:!0,content:!1,children:e.jsx(pe,{sx:{maxHeight:"calc(100vh - 48px)","& .simplebar-content":{display:"flex",flexDirection:"column"}},children:S})})})},He=[{code:"ac",name:"Acre"},{code:"al",name:"Alagoas"},{code:"ap",name:"Amapá"},{code:"am",name:"Amazonas"},{code:"ba",name:"Bahia"},{code:"ce",name:"Ceará"},{code:"df",name:"Distrito Federal"},{code:"es",name:"Espírito Santo"},{code:"go",name:"Goiás"},{code:"ma",name:"Maranhão"},{code:"mt",name:"Mato Grosso"},{code:"ms",name:"Mato Grosso do Sul"},{code:"mg",name:"Minas Gerais"},{code:"pa",name:"Pará"},{code:"pb",name:"Paraíba"},{code:"pr",name:"Paraná"},{code:"pe",name:"Pernambuco"},{code:"pi",name:"Piauí"},{code:"rj",name:"Rio de Janeiro"},{code:"rn",name:"Rio Grande do Norte"},{code:"rs",name:"Rio Grande do Sul"},{code:"ro",name:"Rondônia"},{code:"rr",name:"Roraima"},{code:"sc",name:"Santa Catarina"},{code:"sp",name:"São Paulo"},{code:"se",name:"Sergipe"},{code:"to",name:"Tocantins"}];function $e({handleClose:j,modalEdit:p,data:r}){const[x,S]=l.useState(""),[E,w]=l.useState([]),[F,C]=l.useState(!0);l.useState(""),l.useEffect(()=>{},[x]);const D=n=>({departamento:(r==null?void 0:r.departamento)??"",telefone:(r==null?void 0:r.telefone)??"",cep:(r==null?void 0:r.cep)??"",rua:(r==null?void 0:r.rua)??"",numero:(r==null?void 0:r.numero)??"",complemento:(r==null?void 0:r.complemento)??"",bairro:(r==null?void 0:r.bairro)??"",cidade:(r==null?void 0:r.cidade)??"",estado:(r==null?void 0:r.estado)??"",descricao:(r==null?void 0:r.descricao)??"",polo:{id:r==null?void 0:r.poloId,polo:r==null?void 0:r.polo.polo}}),T=G().shape({departamento:g().max(255).required("Nome é obrigatório"),telefone:g().required("Telefone é obrigatório"),cep:g().required("CEP é obrigatório"),rua:g().max(255).required("Endereço é obrigatório"),bairro:g().max(255).required("Bairro é obrigatório"),cidade:g().max(255).required("Cidade é obrigatória"),estado:g().max(2).required("Estado é obrigatório"),numero:Q().required("Número é obrigatório"),complemento:g().max(255),descricao:g().max(500),polo:G().required("Polo é obrigatório")}),d=X({initialValues:D(),validationSchema:T,enableReinitialize:!0,onSubmit:async(n,{setSubmitting:t,resetForm:u})=>{try{const y=await R.put(`/inventory/departments/${r.id}`,{departamento:n.departamento,poloId:n.polo.id,telefone:n.telefone.replace(/\D/g,""),cep:n.cep.replace(/\D/g,""),rua:n.rua,numero:n.numero,complemento:n.complemento,bairro:n.bairro,cidade:n.cidade,estado:n.estado,descricao:n.descricao});u(),j(!1)}catch(y){console.error(y),t(!1)}}}),c=async()=>{try{const n=await R.get("/inventory/polo/details");w(n.data.polos)}catch(n){console.error("Error fetching polos:",n)}finally{C(!1)}};l.useEffect(()=>{c()},[]);const{errors:o,touched:a,handleSubmit:M,isSubmitting:B,getFieldProps:f,setFieldValue:P}=d;return e.jsx("div",{children:e.jsx(J,{open:p,keepMounted:!0,onClose:()=>j(!1),"aria-describedby":"alert-dialog-slide-description",children:e.jsx(W,{sx:{p:1,py:1.5},children:e.jsx(I,{children:e.jsx(U,{value:d,children:e.jsxs(Y,{autoComplete:"off",noValidate:!0,onSubmit:M,children:[e.jsxs(ne,{dateAdapter:se,children:[e.jsx(Z,{children:"Editar Departamento"}),e.jsx(z,{}),e.jsx(I,{sx:{p:2.5},children:e.jsx(i,{container:!0,spacing:3,children:e.jsx(i,{item:!0,xs:12,children:e.jsxs(i,{container:!0,spacing:3,children:[e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(s,{spacing:1,children:[e.jsx(m,{htmlFor:"departamento",children:"Nome Departamento"}),e.jsx(h,{fullWidth:!0,id:"departamento",placeholder:"Nome",...f("departamento"),error:!!(a.departamento&&o.departamento),helperText:typeof o.departamento=="string"?o.departamento:null})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(s,{spacing:1,children:[e.jsx(m,{htmlFor:"polo",children:"Nome do Polo"}),e.jsxs(k,{fullWidth:!0,error:!!(a.polo&&o.polo),children:[e.jsx(_,{id:"polo",value:d.values.polo,options:E,getOptionLabel:n=>n.polo??"",renderInput:n=>e.jsx(h,{...n,error:a.polo&&!!o.polo,placeholder:"Selecione o polo"}),onChange:(n,t)=>{d.setFieldValue("polo",t)},isOptionEqualToValue:(n,t)=>n.id===(t==null?void 0:t.id)}),a.polo&&o.polo&&e.jsx(O,{children:e.jsx(e.Fragment,{children:o.polo})})]})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(s,{spacing:1,children:[e.jsx(m,{htmlFor:"telefone",children:"Telefone"}),e.jsx(A,{mask:"(99)9999-9999",value:d.values.telefone,onChange:async n=>await P("telefone",n.target.value),children:n=>e.jsx(h,{fullWidth:!0,id:"telefone",placeholder:"Telefone",...n,error:!!(a.telefone&&o.telefone),helperText:a.telefone&&o.telefone})})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(s,{spacing:1,children:[e.jsx(m,{htmlFor:"cep",children:"CEP"}),e.jsx(A,{mask:"99999-999",value:d.values.cep,onChange:n=>{S(n.target.value),P("cep",n.target.value)},children:n=>e.jsx(h,{fullWidth:!0,id:"cep",placeholder:"CEP",...n,error:!!(a.cep&&o.cep),helperText:e.jsx(e.Fragment,{children:a.cep&&o.cep})})})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(s,{spacing:1,children:[e.jsx(m,{htmlFor:"bairro",children:"Bairro"}),e.jsx(h,{fullWidth:!0,id:"bairro",placeholder:"Bairro",...f("bairro"),error:!!(a.bairro&&o.bairro),helperText:e.jsx(e.Fragment,{children:a.bairro&&o.bairro})})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(s,{spacing:1,children:[e.jsx(m,{htmlFor:"rua",children:"Endereço"}),e.jsx(h,{fullWidth:!0,id:"rua",placeholder:"Endereço",...f("rua"),error:!!(a.rua&&o.rua),helperText:e.jsx(e.Fragment,{children:a.rua&&o.rua})})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(s,{spacing:1,children:[e.jsx(m,{htmlFor:"cidade",children:"Cidade"}),e.jsx(h,{fullWidth:!0,id:"cidade",placeholder:"Cidade",...f("cidade"),error:!!(a.cidade&&o.cidade),helperText:e.jsx(e.Fragment,{children:a.cidade&&o.cidade})})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(s,{spacing:1,children:[e.jsx(m,{htmlFor:"estado",children:"Estado"}),e.jsxs(k,{fullWidth:!0,error:!!(a.estado&&o.estado),children:[e.jsx(ee,{id:"estado",value:d.values.estado,onChange:async n=>await P("estado",n.target.value),children:He.map(n=>e.jsx(oe,{value:n.code,children:n.name},n.code))}),a.estado&&o.estado&&e.jsx(O,{children:e.jsx(e.Fragment,{children:o.estado})})]})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(s,{spacing:1,children:[e.jsx(m,{htmlFor:"numero",children:"Numero"}),e.jsx(h,{type:"number",fullWidth:!0,id:"numero",placeholder:"Numero",...f("numero"),error:!!(a.numero&&o.numero),helperText:e.jsx(e.Fragment,{children:a.numero&&o.numero})})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(s,{spacing:1,children:[e.jsx(m,{htmlFor:"complemento",children:"Complemento"}),e.jsx(h,{fullWidth:!0,id:"complemento",placeholder:"Complemento",...f("complemento"),error:!!(a.complemento&&o.complemento),helperText:e.jsx(e.Fragment,{children:a.complemento&&o.complemento})})]})}),e.jsx(i,{item:!0,xs:12,children:e.jsxs(s,{spacing:1,children:[e.jsx(m,{htmlFor:"descricao",children:"Descrição"}),e.jsx(h,{fullWidth:!0,id:"descricao",multiline:!0,minRows:2,placeholder:"Descrição",...f("descricao"),error:!!(a.descricao&&o.descricao),helperText:e.jsx(e.Fragment,{children:a.descricao&&o.descricao})})]})})]})})})})]}),e.jsxs(re,{children:[e.jsx(v,{color:"error",onClick:()=>j(!1),children:"Cancelar"}),e.jsx(v,{variant:"contained",type:"submit",children:"Cadastrar"})]})]})})})})})})}const Le=(j,p,r,x)=>{const S=Be(j.getValue(p),r);return x(S),S.passed};function Ke({data:j,columns:p,modalToggler:r}){const x=ae(),S=ue(x.breakpoints.down("sm")),[E,w]=l.useState([{id:"id",desc:!0}]),[F,C]=l.useState({}),[D,T]=l.useState(""),d=he({data:j,columns:p,state:{sorting:E,rowSelection:F,globalFilter:D},enableRowSelection:!0,onSortingChange:w,onRowSelectionChange:C,onGlobalFilterChange:T,getRowCanExpand:()=>!0,getSortedRowModel:we(),getFilteredRowModel:De(),getCoreRowModel:Te(),getPaginationRowModel:Pe(),getExpandedRowModel:Ee(),globalFilterFn:Le,debugTable:!0});return xe(x.palette.primary.lighter,.1),e.jsxs(te,{content:!1,children:[e.jsxs(s,{direction:{xs:"column",sm:"row"},spacing:2,alignItems:"center",justifyContent:"space-between",sx:{padding:2,...S&&{"& .MuiOutlinedInput-root, & .MuiFormControl-root":{width:"100%"}}},children:[e.jsx(ge,{value:D??"",onFilterChange:c=>{T(String(c))},placeholder:`Search ${j.length} records...`}),e.jsxs(s,{direction:{xs:"column",sm:"row"},spacing:2,alignItems:"center",sx:{width:{xs:"100%",sm:"auto"}},children:[e.jsx(Ae,{getState:d.getState,getAllColumns:d.getAllColumns,setSorting:w}),e.jsx(s,{direction:"row",spacing:2,alignItems:"center",children:e.jsx(v,{variant:"contained",startIcon:e.jsx(Re,{}),onClick:r,children:"Adicionar Departamento"})})]})]}),e.jsx(je,{children:e.jsxs(s,{children:[e.jsx(Me,{selected:Object.keys(F).length}),e.jsx(fe,{children:e.jsxs(be,{children:[e.jsx(Se,{children:d.getHeaderGroups().map(c=>e.jsx(q,{children:c.headers.map(o=>(o.column.columnDef.meta!==void 0&&o.column.getCanSort()&&Object.assign(o.column.columnDef.meta,{className:o.column.columnDef.meta.className+" cursor-pointer prevent-select"}),e.jsx(V,{...o.column.columnDef.meta,onClick:o.column.getToggleSortingHandler(),...o.column.getCanSort()&&o.column.columnDef.meta===void 0&&{className:"cursor-pointer prevent-select"},children:o.isPlaceholder?null:e.jsxs(s,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(W,{children:H(o.column.columnDef.header,o.getContext())}),o.column.getCanSort()&&e.jsx(Ne,{column:o.column})]})},o.id)))},c.id))}),e.jsx(Ce,{children:d.getRowModel().rows.length===0?e.jsx(q,{children:e.jsx(V,{colSpan:p.length,align:"center",children:e.jsx(Fe,{msg:"Nenhum registro encontrado"})})}):d.getRowModel().rows.map(c=>e.jsx(l.Fragment,{children:e.jsx(q,{children:c.getVisibleCells().map(o=>e.jsx(V,{...o.column.columnDef.meta,children:H(o.column.columnDef.cell,o.getContext())},o.id))})},c.original.id))})]})}),e.jsxs(e.Fragment,{children:[e.jsx(z,{}),e.jsx(W,{sx:{p:2},children:e.jsx(ye,{setPageSize:d.setPageSize,setPageIndex:d.setPageIndex,getState:d.getState,getPageCount:d.getPageCount})})]})]})})]})}function Ze(){const j=ae(),[p,r]=l.useState(!1),[x,S]=l.useState(!1),[E,w]=l.useState(!1),[F,C]=l.useState(!1),[D,T]=l.useState(null),[d,c]=l.useState(""),[o,a]=l.useState(""),[M,B]=l.useState([]),[f,P]=l.useState(!1),n=async()=>{try{const b=await R.get("/inventory/departments");B(b.data.departamentos.rows)}catch(b){console.error("Erro ao buscar dados:",b)}};l.useEffect(()=>{n()},[F,d,o,x,D,f,P]);const t=()=>{r(!p)},u=()=>{C(!0)},y=()=>{S(!x)},le=l.useMemo(()=>[{id:"select",header:({table:b})=>e.jsx(K,{checked:b.getIsAllRowsSelected(),indeterminate:b.getIsSomeRowsSelected(),onChange:b.getToggleAllRowsSelectedHandler()}),cell:({row:b})=>e.jsx(K,{checked:b.getIsSelected(),disabled:!b.getCanSelect(),indeterminate:b.getIsSomeSelected(),onChange:b.getToggleSelectedHandler()}),meta:{className:"p-0"}},{accessorKey:"departamento",header:"Departamento"},{accessorKey:"polo.polo",header:"Polo"},{accessorKey:"telefone",header:"Telefone"},{accessorKey:"cep",header:"CEP"},{accessorKey:"rua",header:"Endereço"},{accessorKey:"numero",header:"Número"},{accessorKey:"complemento",header:"Complemento"},{id:"actions",header:"Actions",cell:({row:b})=>e.jsxs(s,{direction:"row",spacing:1,children:[e.jsx($,{title:"Editar",children:e.jsx(L,{color:"primary",onClick:()=>{T(b.original),u()},children:e.jsx(We,{})})}),e.jsx($,{title:"Excluir",children:e.jsx(L,{color:"error",onClick:()=>{c(b.original.id),r(!0),a(b.original.departamento)},children:e.jsx(Ie,{})})})]})}],[j]);return e.jsxs(e.Fragment,{children:[e.jsx(Ke,{data:M,columns:le,modalToggler:()=>{w(!0),T(null),y()}}),e.jsx(qe,{id:d,title:d,open:p,handleClose:t,name:o}),e.jsx(ze,{openModalCreate:x,modalToggler:y}),e.jsx($e,{modalEdit:F,handleClose:C,data:D})]})}export{Ze as default};
