import{j as e,a3 as J,a4 as ie,a5 as I,S as s,a6 as ce,T as N,h as R,k as v,r as l,c as G,a as g,a7 as Q,a8 as X,a9 as U,aa as Y,ab as Z,ac as z,G as i,I as p,ad as h,p as k,ar as _,af as ee,ag as oe,b as O,ae as re,as as de,ah as me,M as te,ai as pe,B as W,n as ae,J as ue,K as he,at as xe,aj as ge,Q as je,U as fe,W as be,X as Se,Y as q,Z as V,$ as H,a0 as Ce,ak as Fe,al as ye,P as we,am as De,N as Te,an as Pe,ao as Ee,ap as $,aq as L}from"./index-7f10300b.js";import{D as Re,P as ve,R as Be,r as Me,I as K,a as Ie}from"./index-ddc45734.js";import{L as ne,A as se,C as ke,E as We}from"./CircularWithPath-22c3b59a.js";import{I as A}from"./index-e6a2e436.js";import{S as Ae,H as Ne}from"./SelectColumnSorting-9c2a6f48.js";function qe({id:j,title:u,open:t,handleClose:x,name:S}){const E=async F=>{try{await v.delete(`/inventory/departments/${F}`)}catch(C){throw console.error("Erro ao deletar o polo:",C),C}},w=async()=>{try{await E(j),x(),window.location.reload()}catch{}};return e.jsx(J,{open:t,onClose:x,keepMounted:!0,TransitionComponent:ie,maxWidth:"xs","aria-labelledby":"column-delete-title","aria-describedby":"column-delete-description",children:e.jsx(I,{sx:{mt:2,my:1},children:e.jsxs(s,{alignItems:"center",spacing:3.5,children:[e.jsx(ce,{color:"error",sx:{width:72,height:72,fontSize:"1.75rem"},children:e.jsx(Re,{})}),e.jsxs(s,{spacing:2,children:[e.jsx(N,{variant:"h4",align:"center",children:"Você tem certeza?"}),e.jsxs(N,{align:"center",children:["Você está deletando o departamento",e.jsx(N,{variant:"subtitle1",component:"span",sx:{ml:.5},children:S}),", esta operação não poderá ser desfeita."]})]}),e.jsxs(s,{direction:"row",spacing:2,sx:{width:1},children:[e.jsx(R,{fullWidth:!0,onClick:x,color:"secondary",variant:"outlined",children:"Cancelar"}),e.jsx(R,{fullWidth:!0,color:"error",variant:"contained",onClick:w,autoFocus:!0,children:"Deletar"})]})]})})})}const Ve=[{code:"ac",name:"Acre"},{code:"al",name:"Alagoas"},{code:"ap",name:"Amapá"},{code:"am",name:"Amazonas"},{code:"ba",name:"Bahia"},{code:"ce",name:"Ceará"},{code:"df",name:"Distrito Federal"},{code:"es",name:"Espírito Santo"},{code:"go",name:"Goiás"},{code:"ma",name:"Maranhão"},{code:"mt",name:"Mato Grosso"},{code:"ms",name:"Mato Grosso do Sul"},{code:"mg",name:"Minas Gerais"},{code:"pa",name:"Pará"},{code:"pb",name:"Paraíba"},{code:"pr",name:"Paraná"},{code:"pe",name:"Pernambuco"},{code:"pi",name:"Piauí"},{code:"rj",name:"Rio de Janeiro"},{code:"rn",name:"Rio Grande do Norte"},{code:"rs",name:"Rio Grande do Sul"},{code:"ro",name:"Rondônia"},{code:"rr",name:"Roraima"},{code:"sc",name:"Santa Catarina"},{code:"sp",name:"São Paulo"},{code:"se",name:"Sergipe"},{code:"to",name:"Tocantins"}],Ge=async j=>{try{const u=await fetch(`https://brasilapi.com.br/api/cep/v2/${j}`);if(!u.ok)throw new Error(`Error fetching address: ${u.statusText}`);return await u.json()}catch(u){return console.error("Failed to fetch address:",u),null}},Oe=({departament:j,closeModal:u})=>{const[t,x]=l.useState(""),[S,E]=l.useState("");l.useState([]);const[w,F]=l.useState(!0);l.useState("");const[C,D]=l.useState([]);l.useEffect(()=>{(async()=>{if(t.length===9)try{const d=await Ge(t.replace("-",""));if(d){await c.setFieldValue("rua",d.street),await c.setFieldValue("bairro",d.neighborhood),await c.setFieldValue("cidade",d.city);const y=d.state.toLowerCase();E(y),await c.setFieldValue("estado",y)}}catch(d){console.error("Failed to fetch address:",d)}})()},[t]);const T=r=>{const d={departamento:"",telefone:"",cep:"",rua:"",numero:"",complemento:"",bairro:"",cidade:"",estado:"",descricao:"",polo:""};return r?de.merge({},d,r):d},m=G().shape({departamento:g().max(255).required("Nome é obrigatório"),telefone:g().test("minimo-8-digitos","O telefone deve ter no mínimo 8 números",r=>{const d=r==null?void 0:r.replace(/\D/g,"");return d&&d.length>=10}).required("Telefone é obrigatório"),cep:g().required("CEP é obrigatório"),rua:g().max(255).required("Endereço é obrigatório"),bairro:g().max(255).required("Bairro é obrigatório"),cidade:g().max(255).required("Cidade é obrigatória"),estado:g().max(2).required("Estado é obrigatório"),numero:Q().required("Número é obrigatório"),complemento:g().max(255),descricao:g().max(500),polo:g().max(255).required("Polo é obrigatório")}),c=X({initialValues:T(j),validationSchema:m,enableReinitialize:!0,onSubmit:async(r,{setSubmitting:d})=>{try{const y=await v.post("/inventory/departments",{departamento:r.departamento,poloId:r.polo,telefone:r.telefone.replace(/\D/g,""),cep:r.cep.replace(/\D/g,""),rua:r.rua,numero:r.numero,complemento:r.complemento,bairro:r.bairro,cidade:r.cidade,estado:r.estado,descricao:r.descricao});d(!1),u()}catch(y){console.error(y)}}}),{errors:o,touched:a,handleSubmit:B,isSubmitting:M,getFieldProps:f,setFieldValue:P}=c,n=async()=>{try{const r=await v.get("/inventory/polo/details");D(r.data.polos)}catch(r){console.error("Error fetching polos:",r)}finally{F(!1)}};return l.useEffect(()=>{n()},[]),e.jsx(U,{value:c,children:e.jsx(ne,{dateAdapter:se,children:e.jsxs(Y,{autoComplete:"off",noValidate:!0,onSubmit:B,children:[e.jsx(Z,{children:"Novo Departamento"}),e.jsx(z,{}),e.jsx(I,{sx:{p:2.5},children:e.jsx(i,{container:!0,spacing:3,children:e.jsx(i,{item:!0,xs:12,children:e.jsxs(i,{container:!0,spacing:3,children:[e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(s,{spacing:1,children:[e.jsx(p,{htmlFor:"departamento",children:"Nome do Departamento"}),e.jsx(h,{fullWidth:!0,id:"departamento",placeholder:"Nome",...f("departamento"),error:!!(a.departamento&&o.departamento),helperText:typeof o.departamento=="string"?o.departamento:null})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(s,{spacing:1,children:[e.jsx(p,{htmlFor:"polo",children:"Nome do Polo"}),e.jsx(k,{fullWidth:!0,error:!!(a.polo&&o.polo),children:e.jsx(_,{id:"polo",value:C.find(r=>r.id===c.values.polo)??null,options:C,getOptionLabel:r=>r.polo,renderInput:r=>e.jsx(h,{...r,error:c.touched.polo&&!!c.errors.polo,placeholder:"Selecione o polo"}),onChange:async(r,d)=>{await c.setFieldValue("polo",d?d.id:"")},isOptionEqualToValue:(r,d)=>r.id===d.id})})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(s,{spacing:1,children:[e.jsx(p,{htmlFor:"telefone",children:"Telefone"}),e.jsx(A,{mask:"(99)9999-9999",value:c.values.telefone,onChange:r=>{P("telefone",r.target.value)},children:r=>e.jsx(h,{fullWidth:!0,id:"telefone",placeholder:"Telefone",...r,error:!!(a.telefone&&o.telefone),helperText:e.jsx(e.Fragment,{children:a.telefone&&o.telefone})})})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(s,{spacing:1,children:[e.jsx(p,{htmlFor:"cep",children:"CEP"}),e.jsx(A,{mask:"99999-999",value:t,onChange:r=>{x(r.target.value),P("cep",r.target.value)},children:r=>e.jsx(h,{fullWidth:!0,id:"cep",placeholder:"CEP",...r,error:!!(a.cep&&o.cep),helperText:a.cep&&o.cep})})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(s,{spacing:1,children:[e.jsx(p,{htmlFor:"rua",children:"Rua"}),e.jsx(h,{fullWidth:!0,id:"rua",placeholder:"Rua",...f("rua"),error:!!(a.rua&&o.rua),helperText:e.jsx(e.Fragment,{children:a.rua&&o.rua})})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(s,{spacing:1,children:[e.jsx(p,{htmlFor:"numero",children:"Número"}),e.jsx(h,{fullWidth:!0,id:"numero",placeholder:"Número",...f("numero"),error:!!(a.numero&&o.numero),helperText:e.jsx(e.Fragment,{children:a.numero&&o.numero})})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(s,{spacing:1,children:[e.jsx(p,{htmlFor:"complemento",children:"Complemento"}),e.jsx(h,{fullWidth:!0,id:"complemento",placeholder:"Complemento",...f("complemento"),error:!!(a.complemento&&o.complemento),helperText:e.jsx(e.Fragment,{children:a.complemento&&o.complemento})})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(s,{spacing:1,children:[e.jsx(p,{htmlFor:"bairro",children:"Bairro"}),e.jsx(h,{fullWidth:!0,id:"bairro",placeholder:"Bairro",...f("bairro"),error:!!(a.bairro&&o.bairro),helperText:e.jsx(e.Fragment,{children:a.bairro&&o.bairro})})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(s,{spacing:1,children:[e.jsx(p,{htmlFor:"cidade",children:"Cidade"}),e.jsx(h,{fullWidth:!0,id:"cidade",placeholder:"Cidade",...f("cidade"),error:!!(a.cidade&&o.cidade),helperText:e.jsx(e.Fragment,{children:a.cidade&&o.cidade})})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(s,{spacing:1,children:[e.jsx(p,{htmlFor:"estado",children:"Estado"}),e.jsxs(k,{fullWidth:!0,error:!!(a.estado&&o.estado),children:[e.jsx(ee,{id:"estado",value:c.values.estado,onChange:async r=>await P("estado",r.target.value),children:Ve.map(r=>e.jsx(oe,{value:r.code,children:r.name},r.code))}),a.estado&&o.estado&&e.jsx(O,{children:e.jsx(e.Fragment,{children:o.estado})})]})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(s,{spacing:1,children:[e.jsx(p,{htmlFor:"descricao",children:"Descrição"}),e.jsx(h,{fullWidth:!0,id:"descricao",placeholder:"Descrição",...f("descricao"),error:!!(a.descricao&&o.descricao),helperText:e.jsx(e.Fragment,{children:a.descricao&&o.descricao})})]})})]})})})}),e.jsxs(re,{children:[e.jsx(R,{variant:"outlined",color:"secondary",onClick:u,children:"Cancelar"}),e.jsx(R,{type:"submit",variant:"contained",color:"primary",disabled:M,children:"Salvar"})]})]})})})},ze=({openModalCreate:j,modalToggler:u,department:t})=>{const x=()=>{u(!1)},S=t?e.jsx(W,{sx:{p:5},children:e.jsx(s,{direction:"row",justifyContent:"center",children:e.jsx(ke,{})})}):e.jsx(Oe,{departament:t??null,closeModal:x});return e.jsx(me,{open:j,onClose:x,"aria-labelledby":"modal-pole-add-label","aria-describedby":"modal-pole-add-description",sx:{"& .MuiPaper-root:focus":{outline:"none"}},children:e.jsx(te,{sx:{width:"calc(100% - 48px)",minWidth:340,maxWidth:880,height:"auto",maxHeight:"calc(100vh - 48px)"},modal:!0,content:!1,children:e.jsx(pe,{sx:{maxHeight:"calc(100vh - 48px)","& .simplebar-content":{display:"flex",flexDirection:"column"}},children:S})})})},He=[{code:"ac",name:"Acre"},{code:"al",name:"Alagoas"},{code:"ap",name:"Amapá"},{code:"am",name:"Amazonas"},{code:"ba",name:"Bahia"},{code:"ce",name:"Ceará"},{code:"df",name:"Distrito Federal"},{code:"es",name:"Espírito Santo"},{code:"go",name:"Goiás"},{code:"ma",name:"Maranhão"},{code:"mt",name:"Mato Grosso"},{code:"ms",name:"Mato Grosso do Sul"},{code:"mg",name:"Minas Gerais"},{code:"pa",name:"Pará"},{code:"pb",name:"Paraíba"},{code:"pr",name:"Paraná"},{code:"pe",name:"Pernambuco"},{code:"pi",name:"Piauí"},{code:"rj",name:"Rio de Janeiro"},{code:"rn",name:"Rio Grande do Norte"},{code:"rs",name:"Rio Grande do Sul"},{code:"ro",name:"Rondônia"},{code:"rr",name:"Roraima"},{code:"sc",name:"Santa Catarina"},{code:"sp",name:"São Paulo"},{code:"se",name:"Sergipe"},{code:"to",name:"Tocantins"}];function $e({handleClose:j,modalEdit:u,data:t}){const[x,S]=l.useState(""),[E,w]=l.useState([]),[F,C]=l.useState(!0);l.useState(""),l.useEffect(()=>{},[x]);const D=n=>({departamento:(t==null?void 0:t.departamento)??"",telefone:(t==null?void 0:t.telefone)??"",cep:(t==null?void 0:t.cep)??"",rua:(t==null?void 0:t.rua)??"",numero:(t==null?void 0:t.numero)??"",complemento:(t==null?void 0:t.complemento)??"",bairro:(t==null?void 0:t.bairro)??"",cidade:(t==null?void 0:t.cidade)??"",estado:(t==null?void 0:t.estado)??"",descricao:(t==null?void 0:t.descricao)??"",polo:{id:t==null?void 0:t.poloId,polo:t==null?void 0:t.polo.polo}}),T=G().shape({departamento:g().max(255).required("Nome é obrigatório"),telefone:g().required("Telefone é obrigatório"),cep:g().required("CEP é obrigatório"),rua:g().max(255).required("Endereço é obrigatório"),bairro:g().max(255).required("Bairro é obrigatório"),cidade:g().max(255).required("Cidade é obrigatória"),estado:g().max(2).required("Estado é obrigatório"),numero:Q().required("Número é obrigatório"),complemento:g().max(255),descricao:g().max(500),polo:G().required("Polo é obrigatório")}),m=X({initialValues:D(),validationSchema:T,enableReinitialize:!0,onSubmit:async(n,{setSubmitting:r,resetForm:d})=>{try{const y=await v.put(`/inventory/departments/${t.id}`,{departamento:n.departamento,poloId:n.polo.id,telefone:n.telefone.replace(/\D/g,""),cep:n.cep.replace(/\D/g,""),rua:n.rua,numero:n.numero,complemento:n.complemento,bairro:n.bairro,cidade:n.cidade,estado:n.estado,descricao:n.descricao});d(),j(!1)}catch(y){console.error(y),r(!1)}}}),c=async()=>{try{const n=await v.get("/inventory/polo/details");w(n.data.polos)}catch(n){console.error("Error fetching polos:",n)}finally{C(!1)}};l.useEffect(()=>{c()},[]);const{errors:o,touched:a,handleSubmit:B,isSubmitting:M,getFieldProps:f,setFieldValue:P}=m;return e.jsx("div",{children:e.jsx(J,{open:u,keepMounted:!0,onClose:()=>j(!1),"aria-describedby":"alert-dialog-slide-description",children:e.jsx(W,{sx:{p:1,py:1.5},children:e.jsx(I,{children:e.jsx(U,{value:m,children:e.jsxs(Y,{autoComplete:"off",noValidate:!0,onSubmit:B,children:[e.jsxs(ne,{dateAdapter:se,children:[e.jsx(Z,{children:"Editar Departamento"}),e.jsx(z,{}),e.jsx(I,{sx:{p:2.5},children:e.jsx(i,{container:!0,spacing:3,children:e.jsx(i,{item:!0,xs:12,children:e.jsxs(i,{container:!0,spacing:3,children:[e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(s,{spacing:1,children:[e.jsx(p,{htmlFor:"departamento",children:"Nome do departamento"}),e.jsx(h,{fullWidth:!0,id:"departamento",placeholder:"Nome",...f("departamento"),error:!!(a.departamento&&o.departamento),helperText:typeof o.departamento=="string"?o.departamento:null})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(s,{spacing:1,children:[e.jsx(p,{htmlFor:"polo",children:"Nome do Polo"}),e.jsxs(k,{fullWidth:!0,error:!!(a.polo&&o.polo),children:[e.jsx(_,{id:"polo",value:m.values.polo,options:E,getOptionLabel:n=>n.polo??"",renderInput:n=>e.jsx(h,{...n,error:a.polo&&!!o.polo,placeholder:"Selecione o polo"}),onChange:(n,r)=>{m.setFieldValue("polo",r)},isOptionEqualToValue:(n,r)=>n.id===(r==null?void 0:r.id)}),a.polo&&o.polo&&e.jsx(O,{children:e.jsx(e.Fragment,{children:o.polo})})]})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(s,{spacing:1,children:[e.jsx(p,{htmlFor:"telefone",children:"Telefone"}),e.jsx(A,{mask:"(99)9999-9999",value:m.values.telefone,onChange:async n=>await P("telefone",n.target.value),children:n=>e.jsx(h,{fullWidth:!0,id:"telefone",placeholder:"Telefone",...n,error:!!(a.telefone&&o.telefone),helperText:a.telefone&&o.telefone})})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(s,{spacing:1,children:[e.jsx(p,{htmlFor:"cep",children:"CEP"}),e.jsx(A,{mask:"99999-999",value:m.values.cep,onChange:n=>{S(n.target.value),P("cep",n.target.value)},children:n=>e.jsx(h,{fullWidth:!0,id:"cep",placeholder:"CEP",...n,error:!!(a.cep&&o.cep),helperText:e.jsx(e.Fragment,{children:a.cep&&o.cep})})})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(s,{spacing:1,children:[e.jsx(p,{htmlFor:"bairro",children:"Bairro"}),e.jsx(h,{fullWidth:!0,id:"bairro",placeholder:"Bairro",...f("bairro"),error:!!(a.bairro&&o.bairro),helperText:e.jsx(e.Fragment,{children:a.bairro&&o.bairro})})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(s,{spacing:1,children:[e.jsx(p,{htmlFor:"rua",children:"Endereço"}),e.jsx(h,{fullWidth:!0,id:"rua",placeholder:"Endereço",...f("rua"),error:!!(a.rua&&o.rua),helperText:e.jsx(e.Fragment,{children:a.rua&&o.rua})})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(s,{spacing:1,children:[e.jsx(p,{htmlFor:"cidade",children:"Cidade"}),e.jsx(h,{fullWidth:!0,id:"cidade",placeholder:"Cidade",...f("cidade"),error:!!(a.cidade&&o.cidade),helperText:e.jsx(e.Fragment,{children:a.cidade&&o.cidade})})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(s,{spacing:1,children:[e.jsx(p,{htmlFor:"estado",children:"Estado"}),e.jsxs(k,{fullWidth:!0,error:!!(a.estado&&o.estado),children:[e.jsx(ee,{id:"estado",value:m.values.estado,onChange:async n=>await P("estado",n.target.value),children:He.map(n=>e.jsx(oe,{value:n.code,children:n.name},n.code))}),a.estado&&o.estado&&e.jsx(O,{children:e.jsx(e.Fragment,{children:o.estado})})]})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(s,{spacing:1,children:[e.jsx(p,{htmlFor:"numero",children:"Número"}),e.jsx(h,{fullWidth:!0,id:"numero",placeholder:"Número",...f("numero"),error:!!(a.numero&&o.numero),helperText:e.jsx(e.Fragment,{children:a.numero&&o.numero})})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(s,{spacing:1,children:[e.jsx(p,{htmlFor:"complemento",children:"Complemento"}),e.jsx(h,{fullWidth:!0,id:"complemento",placeholder:"Complemento",...f("complemento"),error:!!(a.complemento&&o.complemento),helperText:e.jsx(e.Fragment,{children:a.complemento&&o.complemento})})]})}),e.jsx(i,{item:!0,xs:12,children:e.jsxs(s,{spacing:1,children:[e.jsx(p,{htmlFor:"descricao",children:"Descrição"}),e.jsx(h,{fullWidth:!0,id:"descricao",multiline:!0,minRows:2,placeholder:"Descrição",...f("descricao"),error:!!(a.descricao&&o.descricao),helperText:e.jsx(e.Fragment,{children:a.descricao&&o.descricao})})]})})]})})})})]}),e.jsxs(re,{children:[e.jsx(R,{color:"error",onClick:()=>j(!1),children:"Cancelar"}),e.jsx(R,{variant:"contained",type:"submit",children:"Cadastrar"})]})]})})})})})})}const Le=(j,u,t,x)=>{const S=Me(j.getValue(u),t);return x(S),S.passed};function Ke({data:j,columns:u,modalToggler:t}){const x=ae(),S=ue(x.breakpoints.down("sm")),[E,w]=l.useState([{id:"id",desc:!0}]),[F,C]=l.useState({}),[D,T]=l.useState(""),m=he({data:j,columns:u,state:{sorting:E,rowSelection:F,globalFilter:D},enableRowSelection:!0,onSortingChange:w,onRowSelectionChange:C,onGlobalFilterChange:T,getRowCanExpand:()=>!0,getSortedRowModel:we(),getFilteredRowModel:De(),getCoreRowModel:Te(),getPaginationRowModel:Pe(),getExpandedRowModel:Ee(),globalFilterFn:Le,debugTable:!0});return xe(x.palette.primary.lighter,.1),e.jsxs(te,{content:!1,children:[e.jsxs(s,{direction:{xs:"column",sm:"row"},spacing:2,alignItems:"center",justifyContent:"space-between",sx:{padding:2,...S&&{"& .MuiOutlinedInput-root, & .MuiFormControl-root":{width:"100%"}}},children:[e.jsx(ge,{value:D??"",onFilterChange:c=>{T(String(c))},placeholder:`Buscar ${j.length} ...`}),e.jsxs(s,{direction:{xs:"column",sm:"row"},spacing:2,alignItems:"center",sx:{width:{xs:"100%",sm:"auto"}},children:[e.jsx(Ae,{getState:m.getState,getAllColumns:m.getAllColumns,setSorting:w}),e.jsx(s,{direction:"row",spacing:2,alignItems:"center",children:e.jsx(R,{variant:"contained",startIcon:e.jsx(ve,{}),onClick:t,children:"Adicionar Departamento"})})]})]}),e.jsx(je,{children:e.jsxs(s,{children:[e.jsx(Be,{selected:Object.keys(F).length}),e.jsx(fe,{children:e.jsxs(be,{children:[e.jsx(Se,{children:m.getHeaderGroups().map(c=>e.jsx(q,{children:c.headers.map(o=>(o.column.columnDef.meta!==void 0&&o.column.getCanSort()&&Object.assign(o.column.columnDef.meta,{className:o.column.columnDef.meta.className+" cursor-pointer prevent-select"}),e.jsx(V,{...o.column.columnDef.meta,onClick:o.column.getToggleSortingHandler(),...o.column.getCanSort()&&o.column.columnDef.meta===void 0&&{className:"cursor-pointer prevent-select"},children:o.isPlaceholder?null:e.jsxs(s,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(W,{children:H(o.column.columnDef.header,o.getContext())}),o.column.getCanSort()&&e.jsx(Ne,{column:o.column})]})},o.id)))},c.id))}),e.jsx(Ce,{children:m.getRowModel().rows.length===0?e.jsx(q,{children:e.jsx(V,{colSpan:u.length,align:"center",children:e.jsx(Fe,{msg:"Nenhum registro encontrado"})})}):m.getRowModel().rows.map(c=>e.jsx(l.Fragment,{children:e.jsx(q,{children:c.getVisibleCells().map(o=>e.jsx(V,{...o.column.columnDef.meta,children:H(o.column.columnDef.cell,o.getContext())},o.id))})},c.original.id))})]})}),e.jsxs(e.Fragment,{children:[e.jsx(z,{}),e.jsx(W,{sx:{p:2},children:e.jsx(ye,{setPageSize:m.setPageSize,setPageIndex:m.setPageIndex,getState:m.getState,getPageCount:m.getPageCount})})]})]})})]})}function Ze(){const j=ae(),[u,t]=l.useState(!1),[x,S]=l.useState(!1),[E,w]=l.useState(!1),[F,C]=l.useState(!1),[D,T]=l.useState(null),[m,c]=l.useState(""),[o,a]=l.useState(""),[B,M]=l.useState([]),[f,P]=l.useState(!1),n=async()=>{try{const b=await v.get("/inventory/departments");M(b.data.departamentos.rows)}catch(b){console.error("Erro ao buscar dados:",b)}};l.useEffect(()=>{n()},[F,m,o,x,D,f,P]);const r=()=>{t(!u)},d=()=>{C(!0)},y=()=>{S(!x)},le=l.useMemo(()=>[{id:"select",header:({table:b})=>e.jsx(K,{checked:b.getIsAllRowsSelected(),indeterminate:b.getIsSomeRowsSelected(),onChange:b.getToggleAllRowsSelectedHandler()}),cell:({row:b})=>e.jsx(K,{checked:b.getIsSelected(),disabled:!b.getCanSelect(),indeterminate:b.getIsSomeSelected(),onChange:b.getToggleSelectedHandler()}),meta:{className:"p-0"}},{accessorKey:"departamento",header:"Departamento"},{accessorKey:"polo.polo",header:"Polo"},{accessorKey:"telefone",header:"Telefone"},{accessorKey:"cep",header:"CEP"},{accessorKey:"rua",header:"Endereço"},{accessorKey:"numero",header:"Número"},{accessorKey:"complemento",header:"Complemento"},{id:"actions",header:"Actions",cell:({row:b})=>e.jsxs(s,{direction:"row",spacing:1,children:[e.jsx($,{title:"Editar",children:e.jsx(L,{color:"primary",onClick:()=>{T(b.original),d()},children:e.jsx(We,{})})}),e.jsx($,{title:"Excluir",children:e.jsx(L,{color:"error",onClick:()=>{c(b.original.id),t(!0),a(b.original.departamento)},children:e.jsx(Ie,{})})})]})}],[j]);return e.jsxs(e.Fragment,{children:[e.jsx(Ke,{data:B,columns:le,modalToggler:()=>{w(!0),T(null),y()}}),e.jsx(qe,{id:m,title:m,open:u,handleClose:r,name:o}),e.jsx(ze,{openModalCreate:x,modalToggler:y}),e.jsx($e,{modalEdit:F,handleClose:C,data:D})]})}export{Ze as default};
