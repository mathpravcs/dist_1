import{j as e,a3 as z,a4 as re,a5 as M,S as m,a6 as oe,T as E,i as C,l as T,r as o,c as O,a as D,a8 as q,B as I,a9 as L,aa as $,ab as K,ac as _,G as h,I as w,ad as F,q as G,af as Q,ag as X,d as J,ae as U,ah as se,M as Y,ai as le,o as Z,J as ie,K as ce,aj as de,Q as me,U as ue,W as pe,X as xe,Y as P,Z as N,$ as A,a0 as he,ak as ge,al as je,P as be,am as fe,N as Se,an as De,ao as we,ap as B,aq as V}from"./index-5e823bed.js";import{D as Ce,P as ye,R as ve,r as Fe,I as H,a as Te}from"./index-def5ea50.js";import{I as ee}from"./index-107e0593.js";import{L as te,A as ae,C as Re,E as Me}from"./CircularWithPath-3f585062.js";import{C as Ie}from"./CSVExport-e45e2f49.js";import{S as _e,H as ke}from"./SelectColumnSorting-94064958.js";import"./index-04c6b67c.js";const Ee=async i=>{try{await T.delete(`/inventory/sub-departments/${i}`)}catch(c){throw console.error("Erro ao deletar o polo:",c),c}};function Pe({id:i,title:c,open:a,handleClose:u,name:g}){const S=async()=>{try{await Ee(i),u(),window.location.reload()}catch{}};return e.jsx(z,{open:a,onClose:u,keepMounted:!0,TransitionComponent:re,maxWidth:"xs","aria-labelledby":"column-delete-title","aria-describedby":"column-delete-description",children:e.jsx(M,{sx:{mt:2,my:1},children:e.jsxs(m,{alignItems:"center",spacing:3.5,children:[e.jsx(oe,{color:"error",sx:{width:72,height:72,fontSize:"1.75rem"},children:e.jsx(Ce,{})}),e.jsxs(m,{spacing:2,children:[e.jsx(E,{variant:"h4",align:"center",children:"Você tem certeza?"}),e.jsxs(E,{align:"center",children:["Você está deletando o Subdepartamento",e.jsx(E,{variant:"subtitle1",component:"span",sx:{ml:.5},children:g}),", esta operação não pode ser desfeita."]})]}),e.jsxs(m,{direction:"row",spacing:2,sx:{width:1},children:[e.jsx(C,{fullWidth:!0,onClick:u,color:"secondary",variant:"outlined",children:"Cancelar"}),e.jsx(C,{fullWidth:!0,color:"error",variant:"contained",onClick:S,autoFocus:!0,children:"Deletar"})]})]})})})}function Ne({handleClose:i,modalEdit:c,data:a}){const[u,g]=o.useState(!0),[S,b]=o.useState([]),f=s=>({sub_departamento:(a==null?void 0:a.sub_departamento)||"",departamento:(a==null?void 0:a.departamentoId)||"",telefone:(a==null?void 0:a.telefone)||"",descricao:(a==null?void 0:a.descricao)||""}),j=O().shape({sub_departamento:D().max(255).required("Nome é obrigatorio"),departamento:D().max(255).required("Nome do Departamento é obrigatorio"),telefone:D().required("Telefone é obrigatorio"),descricao:D().max(500)}),d=q({initialValues:f(),validationSchema:j,enableReinitialize:!0,onSubmit:async(s,{setSubmitting:v,resetForm:k})=>{try{(await T.put(`/inventory/sub-departments/${a.id}`,{sub_departamento:s.sub_departamento,telefone:s.telefone.replace(/\D/g,""),departamentoId:s.departamento,descricao:s.descricao})).data.success===!0&&(k(),i(!1))}catch(R){console.error(R)}}}),{errors:r,touched:n,handleSubmit:p,getFieldProps:t,setFieldValue:y}=d,l=async()=>{try{const s=await T.get("/inventory/departments/");b(s.data.departamentos.rows)}catch(s){console.error("Error fetching polos:",s)}finally{g(!1)}};return o.useEffect(()=>{l()},[]),e.jsx("div",{children:e.jsx(z,{open:c,keepMounted:!0,onClose:()=>i(!1),"aria-describedby":"alert-dialog-slide-description",children:e.jsx(I,{sx:{p:1,py:1.5},children:e.jsx(M,{children:e.jsx(L,{value:d,children:e.jsxs($,{autoComplete:"off",noValidate:!0,onSubmit:p,children:[e.jsxs(te,{dateAdapter:ae,children:[e.jsx(K,{children:"Editar SubDepartamento"}),e.jsx(_,{}),e.jsx(M,{sx:{p:2.5},children:e.jsx(h,{container:!0,spacing:3,children:e.jsx(h,{item:!0,xs:12,children:e.jsxs(h,{container:!0,spacing:3,children:[e.jsx(h,{item:!0,xs:12,sm:6,children:e.jsxs(m,{spacing:1,children:[e.jsx(w,{htmlFor:"sub_departamento",children:"Nome SubDepartamento"}),e.jsx(F,{fullWidth:!0,id:"sub_departamento",placeholder:"Nome",...t("sub_departamento"),error:!!(n.sub_departamento&&r.sub_departamento),helperText:e.jsx(e.Fragment,{children:n.sub_departamento&&r.sub_departamento})})]})}),e.jsx(h,{item:!0,xs:12,sm:6,children:e.jsxs(m,{spacing:1,children:[e.jsx(w,{htmlFor:"telefone",children:"Telefone"}),e.jsx(ee,{mask:"(99) 9999-9999",value:d.values.telefone,onChange:async s=>await y("telefone",s.target.value),children:s=>e.jsx(F,{fullWidth:!0,id:"telefone",placeholder:"Telefone",...s,error:!!(n.telefone&&r.telefone),helperText:n.telefone&&r.telefone})})]})}),e.jsx(h,{item:!0,xs:12,sm:6,children:e.jsxs(m,{spacing:1,children:[e.jsx(w,{htmlFor:"departamento",children:"Departamento"}),e.jsxs(G,{fullWidth:!0,error:!!(n.departamento&&r.departamento),children:[e.jsx(Q,{id:"departamento",placeholder:"Nome",...t("departamento"),value:d.values.departamento,children:!u&&S.map(s=>e.jsx(X,{value:s.id,children:s.departamento},"dp_"+s.id))}),n.departamento&&r.departamento&&e.jsx(J,{children:typeof r.departamento})]})]})}),e.jsx(h,{item:!0,xs:12,children:e.jsxs(m,{spacing:1,children:[e.jsx(w,{htmlFor:"descricao",children:"Descrição"}),e.jsx(F,{fullWidth:!0,id:"descricao",multiline:!0,minRows:2,placeholder:"Descrição",...t("descricao"),error:!!(n.descricao&&r.descricao),helperText:e.jsx(e.Fragment,{children:n.descricao&&r.descricao})})]})})]})})})})]}),e.jsxs(U,{children:[e.jsx(C,{color:"error",onClick:()=>i(!1),children:"Cancelar"}),e.jsx(C,{variant:"contained",type:"submit",children:"Cadastrar"})]})]})})})})})})}const We=i=>({sub_departamento:"",departamento:"",telefone:"",descricao:""}),Ae=({subDepartament:i,closeModal:c})=>{o.useState([]);const[a,u]=o.useState(!0),[g,S]=o.useState([]),b=O().shape({departamento:D().max(255).required("Nome do Departamento é obrigatorio"),sub_departamento:D().max(255).required("Nome do SubDepartamento é obrigatorio"),telefone:D().required("Telefone é obrigatorio"),descricao:D().max(500)}),f=async()=>{try{const l=await T.get("/inventory/departments/");S(l.data.departamentos.rows)}catch(l){console.error("Error fetching polos:",l)}finally{u(!1)}};o.useEffect(()=>{f()},[]);const j=q({initialValues:We(),validationSchema:b,enableReinitialize:!0,onSubmit:async(l,{setSubmitting:s})=>{try{const v=await T.post("/inventory/sub-departments",{sub_departamento:l.sub_departamento,departamentoId:l.departamento,telefone:l.telefone.replace(/\D/g,""),descricao:l.descricao});s(!1),c()}catch(v){console.error(v)}}}),{errors:d,touched:r,handleSubmit:n,isSubmitting:p,getFieldProps:t,setFieldValue:y}=j;return e.jsx(L,{value:j,children:e.jsx(te,{dateAdapter:ae,children:e.jsxs($,{autoComplete:"off",noValidate:!0,onSubmit:n,children:[e.jsx(K,{children:"Novo Sub Departamento"}),e.jsx(_,{}),e.jsx(M,{sx:{p:2.5},children:e.jsx(h,{container:!0,spacing:3,children:e.jsx(h,{item:!0,xs:12,children:e.jsxs(h,{container:!0,spacing:3,children:[e.jsx(h,{item:!0,xs:12,sm:4,children:e.jsxs(m,{spacing:1,children:[e.jsx(w,{htmlFor:"sub_departamento",children:"Nome do SubDepartamento"}),e.jsx(F,{fullWidth:!0,id:"sub_departamento",placeholder:"Nome",...t("sub_departamento"),error:!!(r.sub_departamento&&d.sub_departamento),helperText:e.jsx(e.Fragment,{children:r.sub_departamento&&d.sub_departamento})})]})}),e.jsx(h,{item:!0,xs:12,sm:3,children:e.jsxs(m,{spacing:1,children:[e.jsx(w,{htmlFor:"telefone",children:"Telefone"}),e.jsx(ee,{mask:"(99)9999-9999",value:j.values.telefone,onChange:async l=>await y("telefone",l.target.value),children:l=>e.jsx(F,{fullWidth:!0,id:"telefone",placeholder:"Telefone",...l,error:!!(r.telefone&&d.telefone),helperText:r.telefone&&d.telefone})})]})}),e.jsx(h,{item:!0,xs:12,sm:4,children:e.jsxs(m,{spacing:1,children:[e.jsx(w,{htmlFor:"departamento",children:"Departamento"}),e.jsxs(G,{fullWidth:!0,error:!!(r.name&&d.name),children:[e.jsx(Q,{id:"departamento",placeholder:"Nome",...t("departamento"),value:j.values.departamento,children:g.map(l=>e.jsx(X,{value:l.id,children:l.departamento},"dp_"+l.id))}),r.departamento&&d.departamento&&e.jsx(J,{children:typeof d.departamento})]})]})}),e.jsx(h,{item:!0,xs:12,children:e.jsxs(m,{spacing:1,children:[e.jsx(w,{htmlFor:"descricao",children:"Descrição"}),e.jsx(F,{fullWidth:!0,id:"descricao",multiline:!0,minRows:2,placeholder:"Descrição",...t("descricao"),error:!!(r.descricao&&d.descricao),helperText:e.jsx(e.Fragment,{children:r.descricao&&d.descricao})})]})})]})})})}),e.jsx(_,{}),e.jsx(U,{sx:{p:2.5},children:e.jsx(h,{container:!0,justifyContent:"flex-end",alignItems:"center",children:e.jsx(h,{item:!0,children:e.jsxs(m,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(C,{color:"error",onClick:c,children:"Cancelar"}),e.jsx(C,{type:"submit",variant:"contained",disabled:p,children:"Cadastrar"})]})})})})]})})})},Be=({openModalCreate:i,modalToggler:c,subdepartament:a})=>{const u=()=>{c(!1)},g=a?e.jsx(I,{sx:{p:5},children:e.jsx(m,{direction:"row",justifyContent:"center",children:e.jsx(Re,{})})}):e.jsx(Ae,{subDepartament:a??null,closeModal:u});return e.jsx(se,{open:i,onClose:u,"aria-labelledby":"modal-subdepartament-add-label","aria-describedby":"modal-subedepartament-add-description",sx:{"& .MuiPaper-root:focus":{outline:"none"}},children:e.jsx(Y,{sx:{width:"calc(100% - 48px)",minWidth:340,maxWidth:880,height:"auto",maxHeight:"calc(100vh - 48px)"},modal:!0,content:!1,children:e.jsx(le,{sx:{maxHeight:"calc(100vh - 48px)","& .simplebar-content":{display:"flex",flexDirection:"column"}},children:g})})})},Ve=(i,c,a,u)=>{const g=Fe(i.getValue(c),a);return u(g),g.passed};function He({data:i,columns:c,modalToggler:a}){const u=Z(),g=ie(u.breakpoints.down("sm")),[S,b]=o.useState([{id:"id",desc:!0}]),[f,j]=o.useState({}),[d,r]=o.useState(""),n=ce({data:i,columns:c,state:{sorting:S,rowSelection:f,globalFilter:d},enableRowSelection:!0,onSortingChange:b,onRowSelectionChange:j,onGlobalFilterChange:r,getRowCanExpand:()=>!0,getSortedRowModel:be(),getFilteredRowModel:fe(),getCoreRowModel:Se(),getPaginationRowModel:De(),getExpandedRowModel:we(),globalFilterFn:Ve,debugTable:!0});return e.jsxs(Y,{content:!1,children:[e.jsxs(m,{direction:{xs:"column",sm:"row"},spacing:2,alignItems:"center",justifyContent:"space-between",sx:{padding:2,...g&&{"& .MuiOutlinedInput-root, & .MuiFormControl-root":{width:"100%"}}},children:[e.jsx(de,{value:d??"",onFilterChange:p=>{r(String(p))},placeholder:`Search ${i.length} records...`}),e.jsxs(m,{direction:{xs:"column",sm:"row"},spacing:2,alignItems:"center",sx:{width:{xs:"100%",sm:"auto"}},children:[e.jsx(_e,{getState:n.getState,getAllColumns:n.getAllColumns,setSorting:b}),e.jsxs(m,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(C,{variant:"contained",startIcon:e.jsx(ye,{}),onClick:a,children:"Adicionar Sub-Departamento"}),e.jsx(Ie,{data:n.getSelectedRowModel().flatRows.map(p=>p.original).length===0?i:n.getSelectedRowModel().flatRows.map(p=>p.original),filename:"SubDepartament-list.csv"})]})]})]}),e.jsx(me,{children:e.jsxs(m,{children:[e.jsx(ve,{selected:Object.keys(f).length}),e.jsx(ue,{children:e.jsxs(pe,{children:[e.jsx(xe,{children:n.getHeaderGroups().map(p=>e.jsx(P,{children:p.headers.map(t=>(t.column.columnDef.meta!==void 0&&t.column.getCanSort()&&Object.assign(t.column.columnDef.meta,{className:t.column.columnDef.meta.className+" cursor-pointer prevent-select"}),e.jsx(N,{...t.column.columnDef.meta,onClick:t.column.getToggleSortingHandler(),...t.column.getCanSort()&&t.column.columnDef.meta===void 0&&{className:"cursor-pointer prevent-select"},children:t.isPlaceholder?null:e.jsxs(m,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(I,{children:A(t.column.columnDef.header,t.getContext())}),t.column.getCanSort()&&e.jsx(ke,{column:t.column})]})},t.id)))},p.id))}),e.jsx(he,{children:n.getRowModel().rows.length===0?e.jsx(P,{children:e.jsx(N,{colSpan:c.length,align:"center",children:e.jsx(ge,{msg:"Nenhum registro encontrado"})})}):n.getRowModel().rows.map(p=>e.jsx(o.Fragment,{children:e.jsx(P,{children:p.getVisibleCells().map(t=>e.jsx(N,{...t.column.columnDef.meta,children:A(t.column.columnDef.cell,t.getContext())},t.id))})},p.id))})]})}),e.jsxs(e.Fragment,{children:[e.jsx(_,{}),e.jsx(I,{sx:{p:2},children:e.jsx(je,{setPageSize:n.setPageSize,setPageIndex:n.setPageIndex,getState:n.getState,getPageCount:n.getPageCount})})]})]})})]})}function Qe(){const i=Z(),[c,a]=o.useState(!1),[u,g]=o.useState(!1),[S,b]=o.useState(!1),[f,j]=o.useState(!1),[d,r]=o.useState(null),[n,p]=o.useState(""),[t,y]=o.useState(""),[l,s]=o.useState([]);o.useState(!1);const v=async()=>{try{const x=await T.get("/inventory/sub-departments");s(x.data.sub_departamentos.rows)}catch(x){console.error("Erro ao buscar dados:",x)}};o.useEffect(()=>{v()},[f,u,n,p,t,y]);const k=()=>{a(!c)},R=()=>{j(!0)},W=()=>{g(!u)},ne=o.useMemo(()=>[{id:"select",header:({table:x})=>e.jsx(H,{checked:x.getIsAllRowsSelected(),indeterminate:x.getIsSomeRowsSelected(),onChange:x.getToggleAllRowsSelectedHandler()}),cell:({row:x})=>e.jsx(H,{checked:x.getIsSelected(),disabled:!x.getCanSelect(),indeterminate:x.getIsSomeSelected(),onChange:x.getToggleSelectedHandler()}),meta:{className:"p-0"}},{accessorKey:"sub_departamento",header:"sub-Departamento"},{accessorKey:"telefone",header:"Telefone"},{accessorKey:"departamentos.departamento",header:"Departamento"},{accessorKey:"descricao",header:"Descrição"},{id:"actions",header:"Actions",cell:({row:x})=>e.jsxs(m,{direction:"row",spacing:1,children:[e.jsx(B,{title:"Editar",children:e.jsx(V,{color:"primary",onClick:()=>{r(x.original),R()},children:e.jsx(Me,{})})}),e.jsx(B,{title:"Excluir",children:e.jsx(V,{color:"error",onClick:()=>{p(x.original.id),a(!0),y(x.original.sub_departamento)},children:e.jsx(Te,{})})})]})}],[i]);return e.jsxs(e.Fragment,{children:[e.jsx(He,{data:l,columns:ne,modalToggler:()=>{b(!0),r(null),W()}}),e.jsx(Pe,{id:n,title:n,open:c,handleClose:k,name:t}),e.jsx(Be,{openModalCreate:u,modalToggler:W}),e.jsx(Ne,{modalEdit:f,handleClose:j,data:d})]})}export{Qe as default};
