import{n as B,j as e,ag as V,al as se,a1 as z,a2 as le,a3 as _,S as u,a4 as ie,T as k,h as w,k as v,r as l,c as L,a as D,a6 as q,B as I,a7 as K,a8 as G,a9 as $,Q as E,G as h,I as C,aa as T,p as Q,ac as X,ad as J,b as U,ab as Y,ae as ce,M as Z,af as de,w as me,x as ue,D as pe,y as xe,z as he,C as ge,E as je,H as P,J as N,K as A,N as be,P as fe,U as Se,V as De,W as Ce,X as we,Y as ye,Z as Fe,ah as H}from"./index-58b69ef5.js";import{S as Te,R as ve,H as Re,r as Ie,I as O}from"./index-304d875e.js";import{D as Me,P as ke,a as _e}from"./PlusOutlined-11338bad.js";import{I as ee}from"./index-c70c00f4.js";import{L as te,A as ae,C as Ee,E as Pe}from"./CircularWithPath-351eaabc.js";import{C as Ne}from"./index-9514c6c3.js";import{C as Ve}from"./CircularProgress-1b9dc137.js";const Be=({data:c,filename:i,headers:a})=>{const d=B();return e.jsx(Ne,{data:c,filename:i,headers:a,children:e.jsx(V,{title:"CSV Export",children:e.jsx(se,{style:{fontSize:"24px",color:d.palette.text.secondary,marginTop:4,marginRight:4,marginLeft:4}})})})},We=async c=>{try{await v.delete(`/inventory/sub-departments/${c}`)}catch(i){throw console.error("Erro ao deletar o polo:",i),i}};function Ae({id:c,title:i,open:a,handleClose:d,name:g}){const S=async()=>{try{await We(c),d(),window.location.reload()}catch{}};return e.jsx(z,{open:a,onClose:d,keepMounted:!0,TransitionComponent:le,maxWidth:"xs","aria-labelledby":"column-delete-title","aria-describedby":"column-delete-description",children:e.jsx(_,{sx:{mt:2,my:1},children:e.jsxs(u,{alignItems:"center",spacing:3.5,children:[e.jsx(ie,{color:"error",sx:{width:72,height:72,fontSize:"1.75rem"},children:e.jsx(Me,{})}),e.jsxs(u,{spacing:2,children:[e.jsx(k,{variant:"h4",align:"center",children:"Você tem certeza?"}),e.jsxs(k,{align:"center",children:["Você está deletando o Subdepartamento",e.jsx(k,{variant:"subtitle1",component:"span",sx:{ml:.5},children:g}),", esta operação não pode ser desfeita."]})]}),e.jsxs(u,{direction:"row",spacing:2,sx:{width:1},children:[e.jsx(w,{fullWidth:!0,onClick:d,color:"secondary",variant:"outlined",children:"Cancelar"}),e.jsx(w,{fullWidth:!0,color:"error",variant:"contained",onClick:S,autoFocus:!0,children:"Deletar"})]})]})})})}function He({handleClose:c,modalEdit:i,data:a}){const[d,g]=l.useState(!0),[S,b]=l.useState([]),f=s=>({sub_departamento:(a==null?void 0:a.sub_departamento)||"",departamento:(a==null?void 0:a.departamentoId)||"",telefone:(a==null?void 0:a.telefone)||"",descricao:(a==null?void 0:a.descricao)||""}),j=L().shape({sub_departamento:D().max(255).required("Nome é obrigatório"),departamento:D().max(255).required("Nome do Departamento é obrigatório"),telefone:D().required("Telefone é obrigatório"),descricao:D().max(500)}),m=q({initialValues:f(),validationSchema:j,enableReinitialize:!0,onSubmit:async(s,{setSubmitting:F,resetForm:R})=>{try{(await v.put(`/inventory/sub-departments/${a.id}`,{sub_departamento:s.sub_departamento,telefone:s.telefone.replace(/\D/g,""),departamentoId:s.departamento,descricao:s.descricao})).data.success===!0&&(R(),c(!1))}catch(M){console.error(M)}}}),{errors:r,touched:n,handleSubmit:p,getFieldProps:t,setFieldValue:y}=m,o=async()=>{try{const s=await v.get("/inventory/departments/");b(s.data.departamentos.rows)}catch(s){console.error("Error fetching polos:",s)}finally{g(!1)}};return l.useEffect(()=>{o()},[]),e.jsx("div",{children:e.jsx(z,{open:i,keepMounted:!0,onClose:()=>c(!1),"aria-describedby":"alert-dialog-slide-description",children:e.jsx(I,{sx:{p:1,py:1.5},children:e.jsx(_,{children:e.jsx(K,{value:m,children:e.jsxs(G,{autoComplete:"off",noValidate:!0,onSubmit:p,children:[e.jsxs(te,{dateAdapter:ae,children:[e.jsx($,{children:"Editar Subdepartamento"}),e.jsx(E,{}),e.jsx(_,{sx:{p:2.5},children:e.jsx(h,{container:!0,spacing:3,children:e.jsx(h,{item:!0,xs:12,children:e.jsxs(h,{container:!0,spacing:3,children:[e.jsx(h,{item:!0,xs:12,sm:6,children:e.jsxs(u,{spacing:1,children:[e.jsx(C,{htmlFor:"sub_departamento",children:"Nome SubDepartamento"}),e.jsx(T,{fullWidth:!0,id:"sub_departamento",placeholder:"Nome",...t("sub_departamento"),error:!!(n.sub_departamento&&r.sub_departamento),helperText:e.jsx(e.Fragment,{children:n.sub_departamento&&r.sub_departamento})})]})}),e.jsx(h,{item:!0,xs:12,sm:6,children:e.jsxs(u,{spacing:1,children:[e.jsx(C,{htmlFor:"telefone",children:"Telefone"}),e.jsx(ee,{mask:"(99) 9999-9999",value:m.values.telefone,onChange:async s=>await y("telefone",s.target.value),children:s=>e.jsx(T,{fullWidth:!0,id:"telefone",placeholder:"Telefone",...s,error:!!(n.telefone&&r.telefone),helperText:n.telefone&&r.telefone})})]})}),e.jsx(h,{item:!0,xs:12,sm:6,children:e.jsxs(u,{spacing:1,children:[e.jsx(C,{htmlFor:"departamento",children:"Departamento"}),e.jsxs(Q,{fullWidth:!0,error:!!(n.departamento&&r.departamento),children:[e.jsx(X,{id:"departamento",placeholder:"Nome",...t("departamento"),value:m.values.departamento,children:!d&&S.map(s=>e.jsx(J,{value:s.id,children:s.departamento},"dp_"+s.id))}),n.departamento&&r.departamento&&e.jsx(U,{children:typeof r.departamento})]})]})}),e.jsx(h,{item:!0,xs:12,children:e.jsxs(u,{spacing:1,children:[e.jsx(C,{htmlFor:"descricao",children:"Descrição"}),e.jsx(T,{fullWidth:!0,id:"descricao",multiline:!0,minRows:2,placeholder:"Descrição",...t("descricao"),error:!!(n.descricao&&r.descricao),helperText:e.jsx(e.Fragment,{children:n.descricao&&r.descricao})})]})})]})})})})]}),e.jsxs(Y,{children:[e.jsx(w,{color:"error",onClick:()=>c(!1),children:"Cancelar"}),e.jsx(w,{variant:"contained",type:"submit",children:"Cadastrar"})]})]})})})})})})}const Oe=c=>({sub_departamento:"",departamento:"",telefone:"",descricao:""}),ze=({subDepartament:c,closeModal:i})=>{l.useState([]);const[a,d]=l.useState(!0),[g,S]=l.useState([]),b=L().shape({departamento:D().max(255).required("Nome do Departamento é obrigatorio"),sub_departamento:D().max(255).required("Nome do SubDepartamento é obrigatorio"),telefone:D().test("minimo-8-digitos","O telefone deve ter no mínimo 8 números",o=>{const s=o==null?void 0:o.replace(/\D/g,"");return s&&s.length>=10}).required("Telefone é obrigatório"),descricao:D().max(500)}),f=async()=>{try{const o=await v.get("/inventory/departments/");S(o.data.departamentos.rows)}catch(o){console.error("Error fetching polos:",o)}finally{d(!1)}};l.useEffect(()=>{f()},[]);const j=q({initialValues:Oe(),validationSchema:b,enableReinitialize:!0,onSubmit:async(o,{setSubmitting:s})=>{try{const F=await v.post("/inventory/sub-departments",{sub_departamento:o.sub_departamento,departamentoId:o.departamento,telefone:o.telefone.replace(/\D/g,""),descricao:o.descricao});s(!1),i()}catch(F){console.error(F)}}}),{errors:m,touched:r,handleSubmit:n,isSubmitting:p,getFieldProps:t,setFieldValue:y}=j;return e.jsx(K,{value:j,children:e.jsx(te,{dateAdapter:ae,children:e.jsxs(G,{autoComplete:"off",noValidate:!0,onSubmit:n,children:[e.jsx($,{children:"Novo Sub Departamento"}),e.jsx(E,{}),e.jsx(_,{sx:{p:2.5},children:e.jsx(h,{container:!0,spacing:3,children:e.jsx(h,{item:!0,xs:12,children:e.jsxs(h,{container:!0,spacing:3,children:[e.jsx(h,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(C,{htmlFor:"sub_departamento",children:"Nome do SubDepartamento"}),e.jsx(T,{fullWidth:!0,id:"sub_departamento",placeholder:"Nome",...t("sub_departamento"),error:!!(r.sub_departamento&&m.sub_departamento),helperText:e.jsx(e.Fragment,{children:r.sub_departamento&&m.sub_departamento})})]})}),e.jsx(h,{item:!0,xs:12,sm:3,children:e.jsxs(u,{spacing:1,children:[e.jsx(C,{htmlFor:"telefone",children:"Telefone"}),e.jsx(ee,{mask:"(99)9999-9999",value:j.values.telefone,onChange:async o=>await y("telefone",o.target.value),children:o=>e.jsx(T,{fullWidth:!0,id:"telefone",placeholder:"Telefone",...o,error:!!(r.telefone&&m.telefone),helperText:r.telefone&&m.telefone})})]})}),e.jsx(h,{item:!0,xs:12,sm:4,children:e.jsxs(u,{spacing:1,children:[e.jsx(C,{htmlFor:"departamento",children:"Departamento"}),e.jsxs(Q,{fullWidth:!0,error:!!(r.name&&m.name),children:[e.jsx(X,{id:"departamento",placeholder:"Nome",...t("departamento"),value:j.values.departamento,children:g.map(o=>e.jsx(J,{value:o.id,children:o.departamento},"dp_"+o.id))}),r.departamento&&m.departamento&&e.jsx(U,{children:typeof m.departamento})]})]})}),e.jsx(h,{item:!0,xs:12,children:e.jsxs(u,{spacing:1,children:[e.jsx(C,{htmlFor:"descricao",children:"Descrição"}),e.jsx(T,{fullWidth:!0,id:"descricao",multiline:!0,minRows:2,placeholder:"Descrição",...t("descricao"),error:!!(r.descricao&&m.descricao),helperText:e.jsx(e.Fragment,{children:r.descricao&&m.descricao})})]})})]})})})}),e.jsx(E,{}),e.jsx(Y,{sx:{p:2.5},children:e.jsx(h,{container:!0,justifyContent:"flex-end",alignItems:"center",children:e.jsx(h,{item:!0,children:e.jsxs(u,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(w,{color:"error",onClick:i,children:"Cancelar"}),e.jsx(w,{type:"submit",variant:"contained",disabled:p,children:"Cadastrar"})]})})})})]})})})},Le=({openModalCreate:c,modalToggler:i,subdepartament:a})=>{const d=()=>{i(!1)},g=a?e.jsx(I,{sx:{p:5},children:e.jsx(u,{direction:"row",justifyContent:"center",children:e.jsx(Ee,{})})}):e.jsx(ze,{subDepartament:a??null,closeModal:d});return e.jsx(ce,{open:c,onClose:d,"aria-labelledby":"modal-subdepartament-add-label","aria-describedby":"modal-subedepartament-add-description",sx:{"& .MuiPaper-root:focus":{outline:"none"}},children:e.jsx(Z,{sx:{width:"calc(100% - 48px)",minWidth:340,maxWidth:880,height:"auto",maxHeight:"calc(100vh - 48px)"},modal:!0,content:!1,children:e.jsx(de,{sx:{maxHeight:"calc(100vh - 48px)","& .simplebar-content":{display:"flex",flexDirection:"column"}},children:g})})})},qe=(c,i,a,d)=>{const g=Ie(c.getValue(i),a);return d(g),g.passed};function Ke({data:c,columns:i,modalToggler:a}){const d=B(),g=me(d.breakpoints.down("sm")),[S,b]=l.useState([{id:"id",desc:!0}]),[f,j]=l.useState({}),[m,r]=l.useState(""),n=ue({data:c,columns:i,state:{sorting:S,rowSelection:f,globalFilter:m},enableRowSelection:!0,onSortingChange:b,onRowSelectionChange:j,onGlobalFilterChange:r,getRowCanExpand:()=>!0,getSortedRowModel:De(),getFilteredRowModel:Ce(),getCoreRowModel:we(),getPaginationRowModel:ye(),getExpandedRowModel:Fe(),globalFilterFn:qe,debugTable:!0});return e.jsxs(Z,{content:!1,children:[e.jsxs(u,{direction:{xs:"column",sm:"row"},spacing:2,alignItems:"center",justifyContent:"space-between",sx:{padding:2,...g&&{"& .MuiOutlinedInput-root, & .MuiFormControl-root":{width:"100%"}}},children:[e.jsx(pe,{value:m??"",onFilterChange:p=>{r(String(p))},placeholder:"Buscar Subdepartamento ..."}),e.jsxs(u,{direction:{xs:"column",sm:"row"},spacing:2,alignItems:"center",sx:{width:{xs:"100%",sm:"auto"}},children:[e.jsx(Te,{getState:n.getState,getAllColumns:n.getAllColumns,setSorting:b}),e.jsxs(u,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(w,{variant:"contained",startIcon:e.jsx(ke,{}),onClick:a,children:"Adicionar Subdepartamento"}),e.jsx(Be,{data:n.getSelectedRowModel().flatRows.map(p=>p.original).length===0?c:n.getSelectedRowModel().flatRows.map(p=>p.original),filename:"SubDepartament-list.csv"})]})]})]}),e.jsx(xe,{children:e.jsxs(u,{children:[e.jsx(ve,{selected:Object.keys(f).length}),e.jsx(he,{children:e.jsxs(ge,{children:[e.jsx(je,{children:n.getHeaderGroups().map(p=>e.jsx(P,{children:p.headers.map(t=>(t.column.columnDef.meta!==void 0&&t.column.getCanSort()&&Object.assign(t.column.columnDef.meta,{className:t.column.columnDef.meta.className+" cursor-pointer prevent-select"}),e.jsx(N,{...t.column.columnDef.meta,onClick:t.column.getToggleSortingHandler(),...t.column.getCanSort()&&t.column.columnDef.meta===void 0&&{className:"cursor-pointer prevent-select"},children:t.isPlaceholder?null:e.jsxs(u,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(I,{children:A(t.column.columnDef.header,t.getContext())}),t.column.getCanSort()&&e.jsx(Re,{column:t.column})]})},t.id)))},p.id))}),e.jsx(be,{children:n.getRowModel().rows.length===0?e.jsx(P,{children:e.jsx(N,{colSpan:i.length,align:"center",children:e.jsx(fe,{msg:"Nenhum registro encontrado"})})}):n.getRowModel().rows.map(p=>e.jsx(l.Fragment,{children:e.jsx(P,{children:p.getVisibleCells().map(t=>e.jsx(N,{...t.column.columnDef.meta,children:A(t.column.columnDef.cell,t.getContext())},t.id))})},p.id))})]})}),e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx(I,{sx:{p:2},children:e.jsx(Se,{setPageSize:n.setPageSize,setPageIndex:n.setPageIndex,getState:n.getState,getPageCount:n.getPageCount})})]})]})})]})}function Ze(){const c=B(),[i,a]=l.useState(!1),[d,g]=l.useState(!1),[S,b]=l.useState(!1),[f,j]=l.useState(!1),[m,r]=l.useState(null),[n,p]=l.useState(""),[t,y]=l.useState(""),[o,s]=l.useState([]);l.useState(!1);const[F,R]=l.useState(!1),M=async()=>{try{R(!0);const x=await v.get("/inventory/sub-departments");s(x.data.sub_departamentos.rows),R(!1)}catch(x){console.error("Erro ao buscar dados:",x),R(!1)}};l.useEffect(()=>{M()},[f,d,n,p,t,y]);const ne=()=>{a(!i)},re=()=>{j(!0)},W=()=>{g(!d)},oe=l.useMemo(()=>[{id:"select",header:({table:x})=>e.jsx(O,{checked:x.getIsAllRowsSelected(),indeterminate:x.getIsSomeRowsSelected(),onChange:x.getToggleAllRowsSelectedHandler()}),cell:({row:x})=>e.jsx(O,{checked:x.getIsSelected(),disabled:!x.getCanSelect(),indeterminate:x.getIsSomeSelected(),onChange:x.getToggleSelectedHandler()}),meta:{className:"p-0"}},{accessorKey:"sub_departamento",header:"Subdepartamento"},{accessorKey:"telefone",header:"Telefone"},{accessorKey:"departamentos.departamento",header:"Departamento"},{accessorKey:"descricao",header:"Descrição"},{id:"actions",header:"Açôes",cell:({row:x})=>e.jsxs(u,{direction:"row",spacing:1,children:[e.jsx(V,{title:"Editar",children:e.jsx(H,{color:"primary",onClick:()=>{r(x.original),re()},children:e.jsx(Pe,{})})}),e.jsx(V,{title:"Excluir",children:e.jsx(H,{color:"error",onClick:()=>{p(x.original.id),a(!0),y(x.original.sub_departamento)},children:e.jsx(_e,{})})})]})}],[c]);return e.jsxs(e.Fragment,{children:[F?e.jsxs(I,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",children:[e.jsx(Ve,{}),e.jsx(k,{variant:"body2",color:"textSecondary",sx:{mt:2},children:"Carregando..."})]}):e.jsx(Ke,{data:o,columns:oe,modalToggler:()=>{b(!0),r(null),W()}}),e.jsx(Ae,{id:n,title:n,open:i,handleClose:ne,name:t}),e.jsx(Le,{openModalCreate:d,modalToggler:W}),e.jsx(He,{modalEdit:f,handleClose:j,data:m})]})}export{Ze as default};
