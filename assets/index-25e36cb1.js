import{j as e,a3 as le,a4 as qe,a5 as X,S as l,a6 as Re,T as G,h as T,k as $,r as d,c as ge,a as g,a8 as ce,a9 as de,aa as je,ab as fe,ac as J,G as i,I as j,ad as I,p as N,af as k,ag as V,b as B,B as M,ae as me,ah as Pe,M as _e,ai as Ne,n as ye,J as ke,K as Ve,aj as Be,Q as $e,U as Ee,W as We,X as Me,Y as se,Z as ne,$ as he,a0 as Ae,ak as Le,al as Oe,P as ze,am as He,N as Je,an as Qe,ao as Ke,az as Ue,ap as ee,aA as Ge,aB as Xe,aC as Ye,aq as ie,aD as Ze}from"./index-3da84cb3.js";import{D as er,P as rr,R as or,r as tr,I as xe,a as ar}from"./index-723a5d14.js";import{L as ve,A as Ce,a as be,C as sr,E as nr}from"./CircularWithPath-c76bba70.js";import{a as ir}from"./app-cb24a545.js";import{S as lr,H as cr}from"./SelectColumnSorting-c893bb2f.js";import{L as dr}from"./ListItem-f088641f.js";function mr({id:t,title:C,open:y,handleClose:s}){const p=async o=>{try{await $.delete(`/inventory/inventories/${o}`)}catch(w){throw console.error("Erro ao deletar o polo:",w),w}},a=async()=>{try{await p(t),s(),window.location.reload()}catch{}};return e.jsx(le,{open:y,onClose:s,keepMounted:!0,TransitionComponent:qe,maxWidth:"xs","aria-labelledby":"column-delete-title","aria-describedby":"column-delete-description",children:e.jsx(X,{sx:{mt:2,my:1},children:e.jsxs(l,{alignItems:"center",spacing:3.5,children:[e.jsx(Re,{color:"error",sx:{width:72,height:72,fontSize:"1.75rem"},children:e.jsx(er,{})}),e.jsxs(l,{spacing:2,children:[e.jsx(G,{variant:"h4",align:"center",children:"Você tem certeza?"}),e.jsxs(G,{align:"center",children:["Você está deletando o item",e.jsx(G,{variant:"subtitle1",component:"span",sx:{ml:.5}}),", esta operação não pode ser desfeita."]})]}),e.jsxs(l,{direction:"row",spacing:2,sx:{width:1},children:[e.jsx(T,{fullWidth:!0,onClick:s,color:"secondary",variant:"outlined",children:"Cancelar"}),e.jsx(T,{fullWidth:!0,color:"error",variant:"contained",onClick:a,autoFocus:!0,children:"Deletar"})]})]})})})}const ur=t=>({nome_item:"",polo:"",departamento:"",sub_departamento:"",sala:"",categoria:"",valor:"",quantidade:"",descricao:"",imagem:"",numero_nota_fiscal:"",numero_serie:"",numero_folha:"",data_emissao:"",cnpj_emissor:"",fornecedor:""}),pr=({room:t,closeModal:C})=>{const[y,s]=d.useState(null),[p,a]=d.useState(null),o=d.useRef(null),w=d.useRef(null),[R,_]=d.useState(!1),[b,S]=d.useState(!1),[F,c]=d.useState([]),[D,n]=d.useState(),[E,f]=d.useState(),[L,A]=d.useState([]),[Q,O]=d.useState([]),[K,z]=d.useState([]),H=ge().shape({nome_item:g().max(255).required("Nome é obrigatorio"),polo:g().max(255).required("Nome do Polo é obrigatorio"),departamento:g().max(255).required("Departamento é obrigatorio"),fornecedor:g().max(255),sub_departamento:g().max(255),sala:g().max(255).required("Sala é obrigatorio"),categoria:g().max(255).required("Categria é obrigatorio"),valor:g().max(255).required("Valor é obrigatorio"),quantidade:g().max(255).required("Quantidade é obrigatorio"),descricao:g().max(500),numero_nota_fiscal:g().max(255),numero_serie:g().max(255),numero_folha:g().max(255),data_emissao:g().max(255),cnpj_emissor:g().max(255)}),h=ce({initialValues:ur(),validationSchema:H,enableReinitialize:!0,onSubmit:async(r,{setSubmitting:P})=>{try{const v=new FormData;if(v.append("nome_item",r.nome_item),v.append("polo_id",r.polo),v.append("departamento_id",r.departamento),v.append("sub_departamento_id",r.sub_departamento_id),v.append("sala_id",r.sala),v.append("categoria_id",r.categoria),v.append("fornecedor_id",r.fornecedores),v.append("valor",r.valor.replace(/\D/g,"")),v.append("quantidade",r.quantidade),v.append("descricao",r.descricao),v.append("numero_nota_fiscal",r.numero_nota_fiscal),v.append("numero_serie",r.numero_serie),v.append("numero_folha",r.numero_folha),v.append("data_emissao",r.data_emissao),v.append("cnpj_emissor",r.cnpj_emissor),p){const De=await(await fetch(p)).blob();v.append("imagem",De,"captured-photo.png")}await $.post("/inventory/inventories",v,{headers:{"Content-Type":"multipart/form-data"}}),P(!1),C(),window.location.reload()}catch(v){console.error("Error saving data:",v)}}}),{errors:m,touched:u,handleSubmit:Y,isSubmitting:re,getFieldProps:q,setFieldValue:Z}=h,oe=r=>r&&r.replace(/[^\d]/g,"").replace(/(\d)(\d{2})$/,"$1.$2").replace(/\B(?=(\d{3})+(?!\d))/g,"."),te=async r=>{const P=oe(r.target.value);await Z("valor",P)},ae=r=>r.replace(/\D/g,"").replace(/^(\d{2})(\d)/,"$1.$2").replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3").replace(/\.(\d{3})(\d)/,".$1/$2").replace(/(\d{4})(\d)/,"$1-$2").replace(/(-\d{2})\d+?$/,"$1"),x=async r=>{const{value:P}=r.target,v=ae(P);await Z("cnpj_emissor",v)},W=async()=>{try{S(!0);const r=await navigator.mediaDevices.getUserMedia({video:!0});setTimeout(async()=>{s(r),o.current&&(o.current.srcObject=r,await o.current.play()),S(!1)},500),_(!0)}catch(r){console.error("Error accessing camera:",r),S(!1)}},U=()=>{y&&(y.getTracks().forEach(r=>{r.stop()}),s(null)),_(!1)},ue=()=>{if(o.current&&w.current){const r=w.current.getContext("2d");if(r){w.current.width=o.current.videoWidth,w.current.height=o.current.videoHeight,r.drawImage(o.current,0,0);const P=w.current.toDataURL("image/png");a(P),U()}}},Se=()=>{a(null)},we=async()=>{try{const r=await $.get("/inventory/polo/details");c(r.data.polos)}catch(r){console.error("Error fetching data:",r)}};d.useEffect(()=>{we()},[]);const Fe=async()=>{try{const r=await $.get("/inventory/categories");O(r.data.categorias.rows)}catch(r){console.error("Error fetching data:",r)}};d.useEffect(()=>{Fe()},[]);const pe=async r=>{try{const P=await $.get(`/inventory/polo/associations/${r}`);n(P.data.polos.departamentos),f(P.data.polos.departamentos.flatMap(v=>v.sub_departamentos)),A(P.data.polos.salas),await h.setFieldValue("departamento",""),await h.setFieldValue("sub_departamento",""),await h.setFieldValue("polo",r)}catch(P){console.error("Error fetching data:",P)}};d.useEffect(()=>{pe(h.values.polo)},[]);const Ie=async()=>{try{const r=await $.get("/inventory/suppliers");z(r.data.fornecedores.rows)}catch(r){console.error("Error fetching data:",r)}};return d.useEffect(()=>{Ie()},[]),e.jsx(de,{value:h,children:e.jsx(ve,{dateAdapter:Ce,children:e.jsxs(je,{autoComplete:"off",noValidate:!0,onSubmit:Y,children:[e.jsx(fe,{children:"Nova item"}),e.jsx(J,{}),e.jsx(X,{sx:{p:2.5},children:e.jsx(i,{container:!0,spacing:3,children:e.jsx(i,{item:!0,xs:12,children:e.jsxs(i,{container:!0,spacing:3,children:[e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"novo item",children:"Nome do item *"}),e.jsx(I,{fullWidth:!0,id:"nome_item",placeholder:"Nome",...q("nome_item"),error:!!(u.nome_item&&m.nome_item),helperText:typeof m.nome_item=="string"?m.nome_item:""})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"polo",children:"Polo *"}),e.jsxs(N,{fullWidth:!0,error:!!(u.polo&&m.polo),children:[e.jsx(k,{id:"polo",placeholder:"Nome",...q("polo"),value:h.values.polo,onChange:async r=>{await pe(r.target.value)},children:F==null?void 0:F.map(r=>e.jsx(V,{value:r.id,children:r.polo},"polo"+r.id))}),u.polo&&m.polo&&e.jsx(B,{children:typeof m.polo=="string"?m.polo:""})]})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"departamento",children:"Departamento *"}),e.jsxs(N,{fullWidth:!0,error:!!(u.departamento&&m.departamento),children:[e.jsx(k,{id:"departamento",placeholder:"Nome",...q("departamento"),value:h.values.departamento,children:D==null?void 0:D.map(r=>e.jsx(V,{value:r.id,children:r.departamento},"departamento_"+r.id))}),u.departamento&&m.departamento&&e.jsx(B,{children:typeof m.departamento})]})]})}),e.jsx(i,{item:!0,xs:12,sm:3,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"sub_departamento",children:"subDepartamento *"}),e.jsxs(N,{fullWidth:!0,error:!!(u.sub_departamento&&m.sub_departamento),children:[e.jsx(k,{id:"sub_departamento",placeholder:"Nome",...q("sub_departamento_id"),value:h.values.sub_departamento_id,children:E==null?void 0:E.map(r=>e.jsx(V,{value:r.id,children:r.sub_departamento},"sub"+r.id))}),u.sub&&m.sub_departamento&&e.jsx(B,{children:typeof m.sub_departamento})]})]})}),e.jsx(i,{item:!0,xs:12,sm:3,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"sala",children:"Sala *"}),e.jsxs(N,{fullWidth:!0,error:!!(u.sala&&m.sala),children:[e.jsx(k,{id:"sala",placeholder:"Nome",...q("sala"),value:h.values.sala,children:L.map(r=>e.jsx(V,{value:r.id,children:r.sala},"sala"+r.id))}),u.sala&&m.sala&&e.jsx(B,{children:typeof m.sala})]})]})}),e.jsx(i,{item:!0,xs:12,sm:3,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"categoria",children:"Categoria *"}),e.jsxs(N,{fullWidth:!0,error:!!(u.categoria&&m.categoria),children:[e.jsx(k,{id:"categoria",placeholder:"Nome",...q("categoria"),value:h.values.categoria,children:Q.map(r=>e.jsx(V,{value:r.id,children:r.categoria},"categoria_"+r.id))}),u.categoria&&m.categoria&&e.jsx(B,{children:typeof m.categoria})]})]})}),e.jsx(i,{item:!0,xs:12,sm:3,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"fornecedores",children:"Fornecedores *"}),e.jsxs(N,{fullWidth:!0,error:!!(u.fornecedores&&m.fornecedores),children:[e.jsx(k,{id:"fornecedores",placeholder:"Nome",...q("fornecedores"),value:h.values.fornecedores,children:K.map(r=>e.jsx(V,{value:r.id,children:r.nome},"fornecedor"+r.id))}),u.fornecedores&&m.fornecedores&&e.jsx(B,{children:typeof m.fornecedores})]})]})}),e.jsx(i,{item:!0,xs:12,sm:2,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"valor",children:"Valor *"}),e.jsx(I,{fullWidth:!0,id:"valor",placeholder:"Valor",...q("valor"),onChange:te,error:!!(u.valor&&m.valor),helperText:typeof u.valor=="string"?u.valor&&m.valor:""})]})}),e.jsx(i,{item:!0,xs:12,sm:2,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"quantidade",children:"Quantidade *"}),e.jsx(I,{fullWidth:!0,id:"quantidade",type:"number",placeholder:"Quantidade",...q("quantidade"),error:!!(u.quantidade&&m.quantidade),helperText:typeof u.quantidade=="string"?u.quantidade&&m.quantidade:"",inputProps:{min:0}})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"numero_nota_fiscal",children:"Nota fiscal"}),e.jsx(I,{fullWidth:!0,id:"numero_nota_fiscal",placeholder:"notafiscal",...q("numero_nota_fiscal"),error:!!(u.numero_nota_fiscal&&m.numero_nota_fiscal),helperText:typeof u.numero_nota_fiscal=="string"?u.numero_nota_fiscal&&m.numero_nota_fiscal:""})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"numero_serie",children:"Numero de serie"}),e.jsx(I,{fullWidth:!0,id:"numero_serie",placeholder:"Numero de serie",...q("numero_serie"),error:!!(u.numero_serie&&m.numero_serie),helperText:typeof u.numero_serie=="string"?m.numero_serie&&u.numero_serie:""})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"numero_folha",children:"Numero da folha "}),e.jsx(I,{fullWidth:!0,id:"numero_folha",placeholder:"Numero da folha",...q("numero_folha"),error:!!(u.numero_folha&&m.numero_folha),helperText:typeof u.numero_folha=="string"?m.numero_folha&&u.numero_folha:""})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"data_emissao",children:"Data de emissão "}),e.jsx(I,{fullWidth:!0,id:"data_emissao",type:"date",placeholder:"Data de emissão ",...q("data_emissao"),error:!!(u.data_emissao&&m.data_emissao),helperText:typeof u.data_emissao=="string"?m.data_emissao&&u.data_emissao:""})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"cnpj_emissor",children:"CNPJ do emissor"}),e.jsx(I,{fullWidth:!0,id:"cnpj_emissor",placeholder:"CNPJ do emissor",value:h.values.cnpj_emissor||"",onChange:x,error:!!(u.cnpj_emissor&&m.cnpj_emissor),helperText:typeof u.cnpj_emissor=="string"?m.cnpj_emissor&&u.cnpj_emissor:""})]})}),e.jsx(i,{item:!0,xs:12,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"descricao",children:"Descrição"}),e.jsx(I,{fullWidth:!0,id:"descricao",multiline:!0,minRows:2,placeholder:"Descrição",...q("descricao"),error:!!(u.descricao&&m.descricao),helperText:typeof u.descricao=="string"?m.descricao&&u.descricao:""})]})}),e.jsx(i,{item:!0,xs:12,children:e.jsxs(l,{spacing:1,alignItems:"center",children:[b&&e.jsx(i,{item:!0,xs:4,children:e.jsx(M,{style:{display:"flex",width:"20%",height:"auto",marginTop:20,justifyContent:"center",alignItems:"center"},children:e.jsx(be,{})})}),!R&&!p&&!b&&e.jsx(T,{variant:"contained",onClick:W,children:"Abrir Câmera"}),R&&e.jsxs(e.Fragment,{children:[e.jsx("video",{ref:o,style:{width:"20%",height:"auto",marginTop:20}}),e.jsx("canvas",{ref:w,style:{display:"none"}}),e.jsxs(l,{direction:"row",spacing:2,style:{marginTop:20},children:[e.jsx(T,{variant:"outlined",color:"error",onClick:U,children:"Cancelar"}),e.jsx(T,{variant:"contained",onClick:ue,children:"Tirar Foto"})]})]}),p&&e.jsxs(l,{spacing:2,style:{marginTop:20,alignItems:"center"},children:[e.jsx("img",{src:p,alt:"Captured",style:{width:"20%",height:"auto"}}),e.jsx(T,{variant:"outlined",color:"error",onClick:Se,children:"Remover Foto"})]})]})})]})})})}),e.jsx(J,{}),e.jsx(me,{sx:{p:2.5},children:e.jsx(i,{container:!0,justifyContent:"flex-end",alignItems:"center",children:e.jsx(i,{item:!0,children:e.jsxs(l,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(T,{color:"error",onClick:C,children:"Cancelar"}),e.jsx(T,{type:"submit",variant:"contained",disabled:re,children:"Cadastrar"})]})})})})]})})})},hr=({openModalCreate:t,modalToggler:C,inventory:y})=>{const s=()=>{C(!1)},p=y?e.jsx(M,{sx:{p:5},children:e.jsx(l,{direction:"row",justifyContent:"center",children:e.jsx(sr,{})})}):e.jsx(pr,{room:y??null,closeModal:s});return e.jsx(Pe,{open:t,onClose:s,"aria-labelledby":"modal-inventory-add-label","aria-describedby":"modal-inventory-add-description",sx:{"& .MuiPaper-root:focus":{outline:"none"}},children:e.jsx(_e,{sx:{width:"calc(100% - 48px)",minWidth:340,maxWidth:880,height:"auto",maxHeight:"calc(100vh - 48px)"},modal:!0,content:!1,children:e.jsx(Ne,{sx:{maxHeight:"calc(100vh - 48px)","& .simplebar-content":{display:"flex",flexDirection:"column"}},children:p})})})},xr=({data:t})=>{const[C,y]=d.useState(null),[s,p]=d.useState(null),a=d.useRef(null),o=d.useRef(null),[w,R]=d.useState(!1),[_,b]=d.useState(!1),[S,F]=d.useState([]),[c,D]=d.useState(),[n,E]=d.useState(),[f,L]=d.useState([]),[A,Q]=d.useState([]),[O,K]=d.useState([]),z=x=>({nome_item:(t==null?void 0:t.nome_item)||"",polo:(t==null?void 0:t.polo.id)||"",departamento:(t==null?void 0:t.departamento.id)||"",sub_departamento:(t==null?void 0:t.sub_departamento.id)||"",sala:(t==null?void 0:t.sala.id)||"",categoria:(t==null?void 0:t.categoria.id)||"",valor:(t==null?void 0:t.valor)||"",quantidade:(t==null?void 0:t.quantidade)||"",descricao:(t==null?void 0:t.descricao)||"",imagem:(t==null?void 0:t.imagem)||"",numero_nota_fiscal:(t==null?void 0:t.numero_nota_fiscal)||"",numero_serie:(t==null?void 0:t.numero_serie)||"",numero_folha:(t==null?void 0:t.numero_folha)||"",data_emissao:(t==null?void 0:t.data_emissao)||"",cnpj_emissor:(t==null?void 0:t.cnpj_emissor)||"",fornecedor:(t==null?void 0:t.fornecedor.id)||""}),H=ge().shape({nome_item:g().max(255).required("Nome é obrigatorio"),polo:g().max(255).required("Nome do Polo é obrigatorio"),departamento:g().max(255).required("Departamento é obrigatorio"),fornecedor:g().max(255),sub_departamento:g().max(255),sala:g().max(255).required("Sala é obrigatorio"),categoria:g().max(255).required("Categria é obrigatorio"),valor:g().max(255).required("Valor é obrigatorio"),quantidade:g().max(255).required("Quantidade é obrigatorio"),descricao:g().max(500),numero_nota_fiscal:g().max(255),numero_serie:g().max(255),numero_folha:g().max(255),data_emissao:g().max(255),cnpj_emissor:g().max(255)}),h=x=>x&&x.replace(/[^\d]/g,"").replace(/(\d)(\d{2})$/,"$1.$2").replace(/\B(?=(\d{3})+(?!\d))/g,"."),m=x=>x.replace(/\D/g,"").replace(/^(\d{2})(\d)/,"$1.$2").replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3").replace(/\.(\d{3})(\d)/,".$1/$2").replace(/(\d{4})(\d)/,"$1-$2").replace(/(-\d{2})\d+?$/,"$1"),u=async()=>{try{b(!0);const x=await navigator.mediaDevices.getUserMedia({video:!0});setTimeout(async()=>{y(x),a.current&&(a.current.srcObject=x,await a.current.play()),b(!1)},500),R(!0)}catch(x){console.error("Error accessing camera:",x),b(!1)}},Y=()=>{C&&(C.getTracks().forEach(x=>{x.stop()}),y(null)),R(!1)},re=()=>{if(a.current&&o.current){const x=o.current.getContext("2d");if(x){o.current.width=a.current.videoWidth,o.current.height=a.current.videoHeight,x.drawImage(a.current,0,0);const W=o.current.toDataURL("image/png");p(W),Y()}}},q=()=>{p(null)},Z=async()=>{try{const x=await $.get("/inventory/polo/details");F(x.data.polos)}catch(x){console.error("Error fetching data:",x)}},oe=async()=>{try{const x=await $.get("/inventory/categories");Q(x.data.categorias.rows)}catch(x){console.error("Error fetching data:",x)}},te=async x=>{try{const W=await $.get(`/inventory/polo/associations/${x}`);D(W.data.polos.departamentos),E(W.data.polos.departamentos.flatMap(U=>U.sub_departamentos)),L(W.data.polos.salas)}catch(W){console.error("Error fetching data:",W)}},ae=async()=>{try{const x=await $.get("/inventory/suppliers");K(x.data.fornecedores.rows)}catch(x){console.error("Error fetching data:",x)}};return d.useMemo(()=>({getInitialValues:z,RoomSchema:H,departamentos:c,sub_departamentos:n,salas:f,categorias:A,formatCurrency:h,formatCNPJ:m,isLoading:_,isCameraOpen:w,capturedImage:s,videoRef:a,canvasRef:o,startCamera:u,stopCamera:Y,capturePhoto:re,removePhoto:q,fetchPolos:Z,fetchCategorias:oe,handlePoloChange:te,fetchFornecedores:ae,fornecedores:O,polos:S}),[c,n,f,A,_,w,s,a,o,O,S,H])};function gr({handleClose:t,modalEdit:C,data:y}){var F,c,D;const s=xr({data:y}),p=ce({initialValues:s.getInitialValues(y),validationSchema:s.RoomSchema,enableReinitialize:!0,onSubmit:async(n,{setSubmitting:E})=>{try{const f=new FormData;if(f.append("nome_item",n.nome_item),f.append("polo_id",n.polo),f.append("departamento_id",n.departamento),f.append("sub_departamento_id",n.sub_departamento),f.append("sala_id",n.sala),f.append("categoria_id",n.categoria),f.append("fornecedor_id",n.fornecedor),f.append("valor",n.valor),f.append("quantidade",n.quantidade),f.append("descricao",n.descricao),f.append("numero_nota_fiscal",n.numero_nota_fiscal),f.append("numero_serie",n.numero_serie),f.append("numero_folha",n.numero_folha),f.append("data_emissao",n.data_emissao),f.append("cnpj_emissor",n.cnpj_emissor),s.capturedImage){const A=await(await fetch(s.capturedImage)).blob();f.append("imagem",A,"captured-photo.png")}await $.put(`/inventory/inventories/${y.id}`,f,{headers:{"Content-Type":"multipart/form-data"}}),E(!1),t(!1),window.location.reload()}catch(f){console.error("Error saving data:",f)}}}),{errors:a,touched:o,handleSubmit:w,isSubmitting:R,getFieldProps:_,setFieldValue:b}=p;d.useEffect(()=>{C&&(s.fetchPolos(),s.fetchCategorias(),s.fetchFornecedores(),s.handlePoloChange(y==null?void 0:y.polo.id))},[C]);const S=async n=>{const{value:E}=n.target,f=s.formatCNPJ(E);await b("cnpj_emissor",f)};return e.jsx(le,{open:C,onClose:()=>t(!1),"aria-describedby":"alert-dialog-slide-description",children:e.jsx(M,{sx:{p:1,py:1.5},children:e.jsx(X,{children:e.jsx(de,{value:p,children:e.jsx(ve,{dateAdapter:Ce,children:e.jsxs(je,{autoComplete:"off",noValidate:!0,onSubmit:w,children:[e.jsx(fe,{children:"Nova item"}),e.jsx(J,{}),e.jsx(X,{sx:{p:2.5},children:e.jsx(i,{container:!0,spacing:3,children:e.jsx(i,{item:!0,xs:12,children:e.jsxs(i,{container:!0,spacing:3,children:[e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"novo item",children:"Nome do item *"}),e.jsx(I,{fullWidth:!0,id:"nome_item",placeholder:"Nome",..._("nome_item"),error:!!(o.nome_item&&a.nome_item),helperText:typeof a.nome_item=="string"})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"polo",children:"Polo *"}),e.jsxs(N,{fullWidth:!0,error:!!(o.polo&&a.polo),children:[e.jsx(k,{id:"polo",placeholder:"Nome",..._("polo"),value:p.values.polo,onChange:n=>{b("polo",n.target.value),s.handlePoloChange(n.target.value)},children:(F=s.polos)==null?void 0:F.map(n=>e.jsx(V,{value:n.id,children:n.polo},"polo"+n.id))}),o.polo&&a.polo&&e.jsx(B,{children:typeof a.polo})]})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"departamento",children:"Departamento *"}),e.jsxs(N,{fullWidth:!0,error:!!(o.departamento&&a.departamento),children:[e.jsx(k,{id:"departamento",placeholder:"Nome",..._("departamento"),value:p.values.departamento,children:(c=s.departamentos)==null?void 0:c.map(n=>e.jsx(V,{value:n.id,children:n.departamento},"departamento_"+n.id))}),o.departamento&&a.departamento&&e.jsx(B,{children:typeof a.departamento})]})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"sub_departamento",children:"subDepartamento *"}),e.jsxs(N,{fullWidth:!0,error:!!(o.sub_departamento&&a.sub_departamento),children:[e.jsx(k,{id:"sub_departamento",placeholder:"Nome",..._("sub_departamento"),value:p.values.sub_departamento,children:(D=s.sub_departamentos)==null?void 0:D.map(n=>e.jsx(V,{value:n.id,children:n.sub_departamento},"sub"+n.id))}),o.sub&&a.sub_departamento&&e.jsx(B,{children:typeof a.sub_departamento})]})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"sala",children:"Sala *"}),e.jsxs(N,{fullWidth:!0,error:!!(o.sala&&a.sala),children:[e.jsx(k,{id:"sala",placeholder:"Nome",..._("sala"),value:p.values.sala,children:s.salas.map(n=>e.jsx(V,{value:n.id,children:n.sala},"sala"+n.id))}),o.sala&&a.sala&&e.jsx(B,{children:typeof a.sala})]})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"categoria",children:"Categoria *"}),e.jsxs(N,{fullWidth:!0,error:!!(o.categoria&&a.categoria),children:[e.jsx(k,{id:"categoria",placeholder:"Nome",..._("categoria"),value:p.values.categoria,children:s.categorias.map(n=>e.jsx(V,{value:n.id,children:n.categoria},"categoria_"+n.id))}),o.categoria&&a.categoria&&e.jsx(B,{children:typeof a.categoria})]})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"fornecedores",children:"Fornecedores *"}),e.jsxs(N,{fullWidth:!0,error:!!(o.fornecedores&&a.fornecedores),children:[e.jsx(k,{id:"fornecedores",placeholder:"Nome",..._("fornecedores"),value:p.values.fornecedor,children:s.fornecedores.map(n=>e.jsx(V,{value:n.id,children:n.nome},"fornecedor"+n.id))}),o.fornecedores&&a.fornecedores&&e.jsx(B,{children:typeof a.fornecedores})]})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"valor",children:"Valor *"}),e.jsx(I,{fullWidth:!0,id:"valor",placeholder:"Valor",..._("valor"),onChange:()=>{},error:!!(o.valor&&a.valor),helperText:typeof o.valor=="string"?a.valor&&o.valor:""})]})}),e.jsx(i,{item:!0,xs:12,sm:2,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"quantidade",children:"Quantidade *"}),e.jsx(I,{fullWidth:!0,id:"quantidade",type:"number",placeholder:"Quantidade",..._("quantidade"),error:!!(o.quantidade&&a.quantidade),helperText:typeof o.quantidade=="string"?a.quantidade&&o.quantidade:"",inputProps:{min:0}})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"numero_nota_fiscal",children:"Nota fiscal"}),e.jsx(I,{fullWidth:!0,id:"numero_nota_fiscal",placeholder:"notafiscal",..._("numero_nota_fiscal"),error:!!(o.numero_nota_fiscal&&a.numero_nota_fiscal),helperText:typeof o.numero_nota_fiscal=="string"?a.numero_nota_fiscal&&o.numero_nota_fiscal:""})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"numero_serie",children:"Numero de serie"}),e.jsx(I,{fullWidth:!0,id:"numero_serie",placeholder:"Numero de serie",..._("numero_serie"),error:!!(o.numero_serie&&a.numero_serie),helperText:typeof o.numero_serie=="string"?a.numero_serie&&o.numero_serie:""})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"numero_folha",children:"Numero da folha "}),e.jsx(I,{fullWidth:!0,id:"numero_folha",placeholder:"Numero da folha",..._("numero_folha"),error:!!(o.numero_folha&&a.numero_folha),helperText:typeof o.numero_folha=="string"?a.numero_folha&&o.numero_folha:""})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"data_emissao",children:"Data de emissão "}),e.jsx(I,{fullWidth:!0,id:"data_emissao",type:"date",placeholder:"Data de emissão ",..._("data_emissao"),error:!!(o.data_emissao&&a.data_emissao),helperText:typeof o.data_emissao=="string"?a.data_emissao&&o.data_emissao:""})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"cnpj_emissor",children:"CNPJ do emissor"}),e.jsx(I,{fullWidth:!0,id:"cnpj_emissor",placeholder:"CNPJ do emissor",value:p.values.cnpj_emissor||"",onChange:S,error:!!(o.cnpj_emissor&&a.cnpj_emissor),helperText:typeof o.cnpj_emissor=="string"?a.cnpj_emissor&&o.cnpj_emissor:""})]})}),e.jsx(i,{item:!0,xs:12,children:e.jsxs(l,{spacing:1,children:[e.jsx(j,{htmlFor:"descricao",children:"Descrição"}),e.jsx(I,{fullWidth:!0,id:"descricao",multiline:!0,minRows:2,placeholder:"Descrição",..._("descricao"),error:!!(o.descricao&&a.descricao),helperText:typeof o.descricao=="string"?a.descricao&&o.descricao:""})]})}),e.jsx(i,{item:!0,xs:12,children:e.jsxs(l,{spacing:1,sx:{alignItems:"center",justifyContent:"center"},children:[s.isLoading&&e.jsx(M,{style:{display:"flex",width:"20%",height:"auto",marginTop:20,justifyContent:"center",alignItems:"center"},children:e.jsx(be,{})}),!s.isCameraOpen&&!p.values.img&&!s.isLoading&&e.jsx(T,{variant:"contained",onClick:s.startCamera,children:"alterar imagem"}),s.isCameraOpen&&e.jsxs(e.Fragment,{children:[e.jsx("video",{ref:s.videoRef,style:{width:"20%",height:"auto",marginTop:20}}),e.jsx("canvas",{ref:s.canvasRef,style:{display:"none"}}),e.jsxs(l,{direction:"row",spacing:2,style:{marginTop:20},children:[e.jsx(T,{variant:"outlined",color:"error",onClick:s.stopCamera,children:"Cancelar"}),e.jsx(T,{variant:"contained",onClick:s.capturePhoto,children:"Tirar Foto"})]})]}),s.capturedImage&&e.jsxs(l,{spacing:2,style:{marginTop:20,alignItems:"center"},children:[e.jsx("img",{src:s.capturedImage,alt:"Captured",style:{width:"20%",height:"auto"}}),e.jsx(T,{variant:"outlined",color:"error",onClick:s.removePhoto,children:"Remover Foto"})]}),!s.capturedImage&&!s.isCameraOpen&&e.jsx("img",{src:`${ir.api_url}/${p.values.imagem}`,alt:"Sala",style:{width:"20%",height:"auto",marginTop:20}})]})})]})})})}),e.jsx(J,{}),e.jsx(me,{sx:{p:2.5},children:e.jsx(i,{container:!0,justifyContent:"flex-end",alignItems:"center",children:e.jsx(i,{item:!0,children:e.jsxs(l,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(T,{color:"error",onClick:()=>t(!1),children:"Cancelar"}),e.jsx(T,{type:"submit",variant:"contained",disabled:R,children:"Cadastrar"})]})})})})]})})})})})})}const jr=(t,C,y,s)=>{const p=tr(t.getValue(C),y);return s(p),p.passed};function fr({data:t,columns:C,modalToggler:y}){const s=ye(),p=ke(s.breakpoints.down("sm")),[a,o]=d.useState([{id:"id",desc:!0}]),[w,R]=d.useState({}),[_,b]=d.useState(""),S=Ve({data:t,columns:C,state:{sorting:a,rowSelection:w,globalFilter:_},enableRowSelection:!0,onSortingChange:o,onRowSelectionChange:R,onGlobalFilterChange:b,getRowCanExpand:()=>!0,getSortedRowModel:ze(),getFilteredRowModel:He(),getCoreRowModel:Je(),getPaginationRowModel:Qe(),getExpandedRowModel:Ke(),globalFilterFn:jr,debugTable:!0});return e.jsxs(_e,{content:!1,children:[e.jsxs(l,{direction:{xs:"column",sm:"row"},spacing:2,alignItems:"center",justifyContent:"space-between",sx:{padding:2,...p&&{"& .MuiOutlinedInput-root, & .MuiFormControl-root":{width:"100%"}}},children:[e.jsx(Be,{value:_??"",onFilterChange:F=>{b(String(F))},placeholder:`Search ${t.length} records...`}),e.jsxs(l,{direction:{xs:"column",sm:"row"},spacing:2,alignItems:"center",sx:{width:{xs:"100%",sm:"auto"}},children:[e.jsx(lr,{getState:S.getState,getAllColumns:S.getAllColumns,setSorting:o}),e.jsx(l,{direction:"row",spacing:2,alignItems:"center",children:e.jsx(T,{variant:"contained",startIcon:e.jsx(rr,{}),onClick:y,children:"Adicionar Inventario"})})]})]}),e.jsx($e,{children:e.jsxs(l,{children:[e.jsx(or,{selected:Object.keys(w).length}),e.jsx(Ee,{children:e.jsxs(We,{children:[e.jsx(Me,{children:S.getHeaderGroups().map(F=>e.jsx(se,{children:F.headers.map(c=>(c.column.columnDef.meta!==void 0&&c.column.getCanSort()&&Object.assign(c.column.columnDef.meta,{className:c.column.columnDef.meta.className+" cursor-pointer prevent-select"}),e.jsx(ne,{...c.column.columnDef.meta,onClick:c.column.getToggleSortingHandler(),...c.column.getCanSort()&&c.column.columnDef.meta===void 0&&{className:"cursor-pointer prevent-select"},children:c.isPlaceholder?null:e.jsxs(l,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(M,{children:he(c.column.columnDef.header,c.getContext())}),c.column.getCanSort()&&e.jsx(cr,{column:c.column})]})},c.id)))},F.id))}),e.jsx(Ae,{children:S.getRowModel().rows.length===0?e.jsx(se,{children:e.jsx(ne,{colSpan:C.length,align:"center",children:e.jsx(Le,{msg:"Nenhum registro encontrado."})})}):S.getRowModel().rows.map(F=>e.jsx(d.Fragment,{children:e.jsx(se,{children:F.getVisibleCells().map(c=>e.jsx(ne,{...c.column.columnDef.meta,children:he(c.column.columnDef.cell,c.getContext())},c.id))})},F.id))})]})}),e.jsxs(e.Fragment,{children:[e.jsx(J,{}),e.jsx(M,{sx:{p:2},children:e.jsx(Oe,{setPageSize:S.setPageSize,setPageIndex:S.setPageIndex,getState:S.getState,getPageCount:S.getPageCount})})]})]})})]})}function _r({handleClose:t,tagsInvetory:C,data:y}){const[s,p]=d.useState(1),a=10,[o,w]=d.useState(null),R=()=>{},b=ce({initialValues:(c=>({id:c==null?void 0:c.id,nome_item:(c==null?void 0:c.nome_item)??"",etiquetas:Array.isArray(c==null?void 0:c.etiquetas)?c==null?void 0:c.etiquetas:[]}))(y),enableReinitialize:!0,onSubmit:()=>{}}),S=c=>{w(c)},F=()=>{w(null)};return e.jsx(le,{open:C,keepMounted:!0,onClose:()=>t(!1),"aria-describedby":"alert-dialog-slide-description",children:e.jsx(M,{sx:{p:1,py:1.5},children:e.jsx(X,{children:e.jsx(de,{value:b,children:e.jsxs(i,{id:"print",container:!0,spacing:2.25,children:[e.jsx(i,{item:!0,xs:12,justifyContent:"center",children:e.jsxs(M,{sx:{textAlign:"center",justifyContent:"center"},children:[o===null?e.jsx(G,{variant:"h1",gutterBottom:!0,children:b.values.nome_item}):e.jsxs(G,{variant:"h4",gutterBottom:!0,children:[b.values.etiquetas[o].nome," "]}),o===null?e.jsx(Ue,{sx:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},children:b.values.etiquetas.slice((s-1)*a,s*a).map((c,D)=>e.jsxs(dr,{sx:{justifyContent:"center",display:"flex",width:"100%"},children:[e.jsx(ee,{title:"Clique para visualizar a etiqueta",children:e.jsx(Ge,{avatar:e.jsx(Xe,{children:e.jsx("img",{src:c.qrcode,alt:`Etiqueta ${D+1}`,style:{width:"100%",height:"100%",objectFit:"cover"}})}),label:c.nome,color:"success",variant:"light",size:"small",sx:{fontSize:"1rem",display:"flex",alignItems:"center"},onClick:()=>{S(D)}})}),e.jsx(T,{variant:"light",size:"small",onClick:R,children:"Gerar Etiqueta"})]},D))}):e.jsx(M,{sx:{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"200px"},children:e.jsx("img",{src:b.values.etiquetas[o].qrcode,alt:"Etiqueta Ampliada",style:{width:"200px",height:"200px"}})})]})}),o===null&&e.jsxs(e.Fragment,{children:[e.jsx(i,{item:!0,xs:12,children:e.jsx(J,{})}),e.jsx(i,{item:!0,xs:12,sx:{display:"flex",justifyContent:"center"},children:e.jsx(Ye,{count:Math.ceil(b.values.etiquetas.length/a),page:s,onChange:(c,D)=>{p(D)}})})]}),e.jsx(i,{item:!0,xs:12,children:e.jsxs(me,{sx:{justifyContent:o!==null?"flex-end":"space-between"},children:[o!==null&&e.jsx(T,{onClick:F,color:"primary",children:"Voltar à Lista"}),e.jsx(T,{color:"error",onClick:()=>t(!1),children:"Fechar"})]})})]})})})})})}function Fr(){const t=ye(),[C,y]=d.useState(!1),[s,p]=d.useState(!1),[a,o]=d.useState(!1),[w,R]=d.useState(!1),[_,b]=d.useState(null),[S,F]=d.useState(""),[c,D]=d.useState(""),[n,E]=d.useState([]),[f,L]=d.useState(!1),A=async()=>{try{const h=await $.get("/inventory/inventories");E(h.data.inventarios.rows)}catch(h){console.error("Erro ao buscar dados:",h)}};d.useEffect(()=>{A()},[]);const Q=()=>{y(!C)},O=()=>{R(!0)},K=()=>{L(!0)},z=()=>{p(!s)},H=d.useMemo(()=>[{id:"select",header:({table:h})=>e.jsx(xe,{checked:h.getIsAllRowsSelected(),indeterminate:h.getIsSomeRowsSelected(),onChange:h.getToggleAllRowsSelectedHandler()}),cell:({row:h})=>e.jsx(xe,{checked:h.getIsSelected(),disabled:!h.getCanSelect(),indeterminate:h.getIsSomeSelected(),onChange:h.getToggleSelectedHandler()}),meta:{className:"p-0"}},{accessorKey:"nome_item",header:"cod/item"},{accessorKey:"polo.polo",header:"polo"},{accessorKey:"departamento.departamento",header:"Departamento"},{accessorKey:"sala.sala",header:"Sala"},{accessorKey:"valor",header:"Valor do lote"},{accessorKey:"quantidade",header:"Quantidade de itens"},{id:"actions",header:"Ações",cell:({row:h})=>e.jsxs(l,{direction:"row",spacing:1,children:[e.jsx(ee,{title:"Vizualizar etiquetas",children:e.jsx(ie,{color:"primary",onClick:()=>{b(h.original),K()},children:e.jsx(Ze,{})})}),e.jsx(ee,{title:"Editar",children:e.jsx(ie,{color:"primary",onClick:()=>{b(h.original),O()},children:e.jsx(nr,{})})}),e.jsx(ee,{title:"Excluir",children:e.jsx(ie,{color:"error",onClick:()=>{F(h.original.id),y(!0),D(h.original.nome_item)},children:e.jsx(ar,{})})})]})}],[t]);return e.jsxs(e.Fragment,{children:[e.jsx(fr,{data:n,columns:H,modalToggler:()=>{o(!0),b(null),z()}}),e.jsx(mr,{id:S,title:S,open:C,handleClose:Q}),e.jsx(hr,{openModalCreate:s,modalToggler:z}),e.jsx(gr,{modalEdit:w,handleClose:R,data:_}),e.jsx(_r,{tagsInvetory:f,handleClose:L,data:_})]})}export{Fr as default};
