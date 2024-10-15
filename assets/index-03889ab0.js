import{E as q,H as E,j as e,r as i,aG as M,bs as w,aH as O,i as h,ah as T,B as a,bt as $,T as o,az as k,aA as m,l as v}from"./index-4a286e5b.js";import{R as G}from"./react-qr-scanner.esm-fa06f5b5.js";import{L}from"./ListItem-92dcb3d1.js";var p={},Q=E;Object.defineProperty(p,"__esModule",{value:!0});var y=p.default=void 0,z=Q(q()),A=e;y=p.default=(0,z.default)((0,A.jsx)("path",{d:"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25m6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8"}),"Face");const V=()=>{const[u,l]=i.useState(!1),[f,d]=i.useState(!1),[g,B]=i.useState([]);i.useState(null);const[t,x]=i.useState(null),C=async s=>{try{const n=(await v.get(`/inventory/rooms/${s}`)).data.sala;x({type:"sala",nome:n.sala,itens:n.inventarios}),d(!0),l(!1)}catch(r){console.error(r)}},I=async s=>{try{const n=(await v.get(`/inventory/inventories/${s}`)).data.inventario;x({type:"inventario",nome:n.nome_item,quantidade:n.quantidade,valor:n.valor,fornecedor:n.fornecedor.nome}),d(!0),l(!1)}catch(r){console.error(r)}},b=s=>{if(s){const r=s.text||"",n=r.match(/Sala_ID: (\d+)/);if(n!=null&&n[1]){const c=n[1];C(c)}else{const c=r.match(/Inventario_Id:\s*(\d+)\s*\|\s*Item_Id:\s*(\d+)/);if(c){const F=parseInt(c[1]);I(F)}}}},S=s=>{console.error("Error scanning QR code:",s)},_=()=>{l(!0)},R=()=>{l(!1)},j=()=>{d(!1),x(null)};return e.jsxs(e.Fragment,{children:[e.jsxs(M,{sx:{width:600,margin:"0 auto",mt:4},hidden:f,children:[e.jsx(w,{title:"Visão Geral",sx:{textAlign:"center"}}),e.jsxs(O,{sx:{textAlign:"center"},children:[!u&&g.length===0&&e.jsx(h,{variant:"outlined",color:"primary",onClick:_,children:"Ler QR Code"}),u&&e.jsxs("div",{children:[e.jsx(G,{onScan:b,onError:S,style:{width:"100%"}}),e.jsx(h,{variant:"outlined",color:"secondary",onClick:R,children:"Fechar câmera"})]})]})]}),e.jsx(T,{open:f,onClose:j,children:e.jsxs(a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"50%",bgcolor:"background.paper",boxShadow:24,p:4},children:[(t==null?void 0:t.type)==="sala"&&e.jsxs(e.Fragment,{children:[e.jsxs(a,{sx:{display:"flex",alignItems:"center",justifyContent:"center",mb:2},children:[e.jsx($,{sx:{fontSize:40,mr:1}})," ",e.jsx(o,{variant:"h2",sx:{fontWeight:"bold",textTransform:"uppercase"},children:t.nome})]}),e.jsx(a,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(o,{variant:"h4",children:"Itens:"})}),e.jsx(a,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(k,{children:t.itens.map(s=>e.jsx(L,{children:e.jsx(m,{label:s.nome_item,color:"primary",variant:"light"})},s.id))})})]}),(t==null?void 0:t.type)==="inventario"&&e.jsxs(e.Fragment,{children:[e.jsx(a,{sx:{display:"flex",alignItems:"center",justifyContent:"center",mb:2},children:e.jsx(o,{variant:"h2",sx:{fontWeight:"bold",textTransform:"uppercase"},children:t.nome})}),e.jsxs(a,{sx:{display:"flex",alignItems:"center",justifyContent:"center",mb:2},children:[e.jsx(o,{variant:"h4",sx:{color:"gray",fontWeight:500},children:"Quantidade:"}),e.jsx(o,{variant:"h4",sx:{ml:1},children:t.quantidade})]}),e.jsxs(a,{sx:{display:"flex",alignItems:"center",justifyContent:"center",mb:2},children:[e.jsx(o,{variant:"body1",color:"secondary",children:"Valor de cada item:"}),e.jsx(m,{label:`${t.valor}`,color:"success",variant:"light"})]}),e.jsx(a,{sx:{display:"flex",alignItems:"center",justifyContent:"center",mt:3},children:e.jsx(m,{icon:e.jsx(y,{}),label:`Fornecedor: ${t.fornecedor}`,color:"primary",variant:"outlined",sx:{fontSize:"1rem",padding:"0.5rem 1rem"}})})]}),e.jsx(a,{sx:{display:"flex",justifyContent:"flex-end"},children:e.jsx(h,{variant:"outlined",onClick:j,sx:{mt:2},children:"Fechar"})})]})})]})};export{V as default};
