import{r as a,j as t,aG as ne,bs as oe,aH as ie,i,ah as L,B as c,T as x,az as de,aA as q,l as j}from"./index-aff1943f.js";import{R as z}from"./react-qr-scanner.esm-6652d270.js";import{L as le}from"./ListItem-a5655366.js";const fe=()=>{const[S,v]=a.useState(!1),[B,y]=a.useState(!1),[u,l]=a.useState([]),[ce,M]=a.useState(null),[I,H]=a.useState(null),[ue,b]=a.useState(!1),[E,U]=a.useState(null),[m,C]=a.useState(!1),[G,N]=a.useState(!1),[he,J]=a.useState([]),[_,g]=a.useState(!1),[w,k]=a.useState(!1),[A,h]=a.useState(""),[K,$]=a.useState(!1),[F,O]=a.useState(u),[P,T]=a.useState(!1),V=e=>{if(e){b(!0);const r=(e.text||"").match(/Sala_ID: (\d+)/);if(r!=null&&r[1]){const o=r[1];M(e),H(o),ee(o),setTimeout(()=>{b(!1)},2e3)}else console.error("Unrecognized QR code format."),b(!1)}},Q=e=>{if(e){J(e);const s=/Inventario_Id:\s*(\d+)\s*\|\s*Item_Id:\s*(\d+)/,r=e.text.match(s);if(r){const o=parseInt(r[1]),d=r[2];ae(d,"auditado",E,o)}else console.error("Dados de QR code inválidos")}},W=()=>{k(!0),Q()},X=()=>{k(!1),g(!1),P&&l(e=>e.map(s=>s.status==="Item auditado"?{...s,status:"Auditado",isEdited:!0}:s))},R=e=>{console.error("Error scanning QR code:",e)},Y=()=>{v(!0)},Z=()=>{v(!1)},ee=async e=>{try{const r=(await j.get(`/inventory/audits/${e}`)).data.items;l(r),y(!0),v(!1)}catch(s){console.error("Error fetching items:",s)}},te=async()=>{if(I)try{const s=(await j.post(`/inventory/audits/${I}`)).data.audit_id;U(s),C(!0)}catch(e){console.error("Error starting audit:",e)}},se=async()=>{if(I)try{const e=await j.post(`/inventory/audits/finish/${E}`);N(!0),v(!1),l([]),y(!1),C(!1)}catch(e){console.error("Error finishing audit:",e)}},ae=async(e,s,r,o)=>{const d="Auditado";try{const p=await j.post(`/inventory/audits/item/${r}`,{item_id:e,inventario_id:o});l(f=>f.map(n=>n.id===e&&n.inventario_id===o?{...n,status:d,isEdited:!0}:n)),O(f=>f.map(n=>n.id===e&&n.inventario_id===o?{...n,status:d,isEdited:!0}:n)),h("Item auditado com sucesso!"),$(!1),T(!0),setTimeout(()=>{h(""),T(!1)},3e3)}catch(p){console.error(`Error marking item as ${d}:`,p),h("Erro ao auditar o item. item já auditado."),$(!0),setTimeout(()=>{h("")},3e3)}};a.useEffect(()=>{!w&&A&&O(e=>e.map(s=>s.status==="Auditado"?{...s,isEdited:!0}:s))},[w,A]);const re=async(e,s,r,o)=>{const d="Avaria";try{const p=await j.post(`/inventory/audits/item/avaria/${r}`,{item_id:e,inventario_id:o,observacoes:"Defeito"});l(f=>f.map(n=>n.id===e&&n.inventario_id===o?{...n,status:d,isEdited:!0}:n))}catch(p){console.error(`Error marking item ${e} as ${d}:`,p)}},D=()=>{l([]),y(!1),C(!1)};return t.jsxs(t.Fragment,{children:[t.jsxs(ne,{sx:{width:600,margin:"0 auto",mt:4},hidden:u.length>0,children:[t.jsx(oe,{title:"Criar Auditoria",sx:{textAlign:"center"}}),t.jsxs(ie,{sx:{textAlign:"center"},children:[!S&&u.length===0&&t.jsx(i,{variant:"outlined",color:"primary",onClick:Y,children:"Ler QR Code"}),S&&t.jsxs("div",{children:[t.jsx(z,{onScan:V,onError:()=>R,style:{width:"100%"}}),t.jsx(i,{variant:"outlined",color:"secondary",onClick:Z,children:"Fechar camera"})]})]})]}),t.jsx(L,{open:B&&!_,onClose:()=>{y(!1),l([]),C(!1),g(!1)},"aria-labelledby":"modal-title","aria-describedby":"modal-description",children:t.jsxs(c,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"50%",bgcolor:"background.paper",boxShadow:24,p:4},children:[t.jsx(c,{sx:{display:"flex",justifyContent:"center"},children:t.jsx(x,{id:"modal-title",variant:"h6",component:"h2",children:"Lista de Itens"})}),t.jsx(x,{id:"modal-description",sx:{mt:2},children:t.jsx(de,{children:u&&u.length>0?u.map(e=>e!=null&&e.status?t.jsx(le,{children:t.jsxs(c,{sx:{display:"flex",justifyContent:"space-between",width:"100%"},children:[t.jsxs(x,{children:[e.nome,t.jsx(q,{label:e.status,color:e.status==="Auditado"?"success":"warning",variant:"light",size:"small",sx:{ml:1}})]}),e.isEdited&&t.jsx(x,{color:"success.main",sx:{ml:2},children:"✓ Feito"}),t.jsx(c,{children:m&&!S&&t.jsx(t.Fragment,{children:e.status==="Item não auditado"&&t.jsx(t.Fragment,{children:t.jsx(i,{variant:"outlined",color:"warning",onClick:()=>{re(e.id,"avaria",E,e.inventario_id)},disabled:e.status==="Avaria",sx:{mr:1},children:"Avaria"})})})})]})},`${e.id}-${e.inventario_id}`):null):t.jsx(x,{children:"Nenhum item disponível"})})}),t.jsx(c,{sx:{display:"flex",justifyContent:"flex-end",mt:2},children:F&&F.length>0&&F.every(e=>e.status==="Auditado"||e.status==="Item com avaria")?t.jsxs(t.Fragment,{children:[t.jsx(c,{sx:{flex:1,textAlign:"center"},children:t.jsx(x,{variant:"body1",color:"textSecondary",children:"Todos os itens já foram auditados"})}),t.jsx(i,{variant:"outlined",color:"primary",onClick:D,children:"Fechar"})]}):t.jsxs(t.Fragment,{children:[m&&t.jsx(i,{variant:"outlined",color:"success",onClick:()=>{W(),g(!0)},children:"Auditar"}),t.jsx(i,{variant:"text",color:"error",onClick:D,sx:{mr:1},children:"Cancelar Auditoria"}),m&&!G&&t.jsx(i,{variant:"outlined",color:"primary",onClick:se,children:"Finalizar Auditoria"}),!m&&t.jsx(i,{variant:"outlined",color:"primary",onClick:te,disabled:m,children:"Iniciar auditoria"})]})})]})}),t.jsx(L,{open:_,onClose:()=>{g(!1),k(!1),h("")},"aria-labelledby":"modal-title","aria-describedby":"modal-description",children:t.jsx(c,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"30%",bgcolor:"background.paper",boxShadow:24,p:4},children:w&&t.jsxs("div",{children:[A&&t.jsx(q,{label:A,color:K?"error":"success",onDelete:()=>{h("")},sx:{marginTop:2}}),t.jsx(z,{onScan:Q,onError:R,style:{width:"100%"}}),t.jsx(i,{variant:"outlined",color:"secondary",onClick:X,children:"Fechar câmera"})]})})})]})};export{fe as default};
