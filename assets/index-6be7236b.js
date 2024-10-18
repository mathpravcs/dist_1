import{r as a,j as t,aw as pe,bp as me,ax as fe,h as i,ae as z,B as l,T as h,aq as ge,ar as B,at as je,k as g}from"./index-58255262.js";import{R as U}from"./react-qr-scanner.esm-90199038.js";import{L as ve}from"./ListItem-ba261057.js";const Ee=()=>{const[A,j]=a.useState(!1),[H,v]=a.useState(!1),[x,c]=a.useState([]),[ye,N]=a.useState(null),[I,G]=a.useState(null),[Ce,b]=a.useState(!1),[E,J]=a.useState(null),[p,y]=a.useState(!1),[K,V]=a.useState(!1),[Se,W]=a.useState([]),[T,C]=a.useState(!1),[w,k]=a.useState(!1),[S,u]=a.useState(""),[X,Q]=a.useState(!1),[F,R]=a.useState(x),[Y,D]=a.useState(!1),[_,Z]=a.useState(1),$=10,[ee,te]=a.useState(null),se=(e,s)=>{Z(s)},O=x.slice((_-1)*$,_*$),ae=e=>{if(e){b(!0);const r=(e.text||"").match(/Sala_ID: (\d+)/);if(r!=null&&r[1]){const o=r[1];N(e),G(o),P(o),setTimeout(()=>{b(!1)},2e3)}else console.error("Unrecognized QR code format."),b(!1)}},L=e=>{if(e){W(e);const s=/Inventario_Id:\s*(\d+)\s*\|\s*Item_Id:\s*(\d+)/,r=e.text.match(s);if(r){const o=parseInt(r[1]),d=r[2];he(d,"auditado",E,o)}else console.error("Dados de QR code inválidos")}},re=()=>{k(!0),L()},ne=()=>{k(!1),C(!1),Y&&c(e=>e.map(s=>s.status==="Item auditado"?{...s,status:"Auditado",isEdited:!0}:s))},M=e=>{console.error("Error scanning QR code:",e)},oe=()=>{j(!0)},ie=()=>{j(!1)},P=async e=>{try{const r=(await g.get(`/inventory/audits/${e}`)).data.items;c(r),v(!0),j(!1),te(e)}catch(s){console.error("Error fetching items:",s)}},de=async()=>{if(I)try{const s=(await g.post(`/inventory/audits/${I}`)).data.audit_id;J(s),y(!0)}catch(e){console.error("Error starting audit:",e)}},ce=async()=>{if(I)try{const e=await g.post(`/inventory/audits/finish/${E}`);V(!0),j(!1),c([]),v(!1),y(!1)}catch(e){console.error("Error finishing audit:",e)}},le=async()=>{new Audio("/src/assets/songs/successAudio.mp3").play()},ue=async()=>{new Audio("/src/assets/songs/error.mp3").play()},he=async(e,s,r,o)=>{const d="Auditado";try{const m=await g.post(`/inventory/audits/item/${r}`,{item_id:e,inventario_id:o});c(f=>f.map(n=>n.id===e&&n.inventario_id===o?{...n,status:d,isEdited:!0}:n)),R(f=>f.map(n=>n.id===e&&n.inventario_id===o?{...n,status:d,isEdited:!0}:n)),u("Item auditado com sucesso!"),Q(!1),D(!0),le(),setTimeout(()=>{u(""),D(!1)},3e3)}catch(m){console.error(`Error marking item as ${d}:`,m),u("Erro ao auditar o item. item já auditado."),Q(!0),ue(),setTimeout(()=>{u("")},3e3)}P(ee)};a.useEffect(()=>{!w&&S&&R(e=>e.map(s=>s.status==="Auditado"?{...s,isEdited:!0}:s))},[w,S]);const xe=async(e,s,r,o)=>{const d="Avaria";try{const m=await g.post(`/inventory/audits/item/avaria/${r}`,{item_id:e,inventario_id:o,observacoes:"Defeito"});c(f=>f.map(n=>n.id===e&&n.inventario_id===o?{...n,status:d,isEdited:!0}:n))}catch(m){console.error(`Error marking item ${e} as ${d}:`,m)}},q=()=>{c([]),v(!1),y(!1)};return t.jsxs(t.Fragment,{children:[t.jsxs(pe,{sx:{width:600,margin:"0 auto",mt:4},hidden:x.length>0,children:[t.jsx(me,{title:"Criar Auditoria",sx:{textAlign:"center"}}),t.jsxs(fe,{sx:{textAlign:"center"},children:[!A&&x.length===0&&t.jsx(i,{variant:"outlined",color:"primary",onClick:oe,children:"Ler QR Code"}),A&&t.jsxs("div",{children:[t.jsx(U,{onScan:ae,onError:M,style:{width:"100%"},facingMode:"rear"}),t.jsx(i,{variant:"outlined",color:"secondary",onClick:ie,children:"Fechar câmera"})]})]})]}),t.jsx(z,{open:H&&!T,onClose:()=>{v(!1),c([]),y(!1),C(!1)},"aria-labelledby":"modal-title","aria-describedby":"modal-description",children:t.jsxs(l,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"50%",bgcolor:"background.paper",boxShadow:24,p:4},children:[t.jsx(l,{sx:{display:"flex",justifyContent:"center"},children:t.jsx(h,{id:"modal-title",variant:"h6",component:"h2",children:"Lista de Itens"})}),t.jsxs(h,{id:"modal-description",sx:{mt:2},children:[t.jsx(ge,{children:O&&O.length>0?O.map(e=>e!=null&&e.status?t.jsx(ve,{children:t.jsxs(l,{sx:{display:"flex",justifyContent:"space-between",width:"100%"},children:[t.jsxs(h,{children:[e.nome,t.jsx(B,{label:e.status,color:e.status==="Auditado"?"success":"warning",variant:"light",size:"small",sx:{ml:1}})]}),e.isEdited&&t.jsx(h,{color:"success.main",sx:{ml:2},children:"✓ Feito"}),t.jsx(l,{children:p&&!A&&t.jsx(t.Fragment,{children:e.status==="Item não auditado"&&t.jsx(t.Fragment,{children:t.jsx(i,{variant:"outlined",color:"warning",onClick:()=>{xe(e.id,"avaria",E,e.inventario_id)},disabled:e.status==="Avaria",sx:{mr:1},children:"Avaria"})})})})]})},`${e.id}-${e.inventario_id}`):null):t.jsx(h,{children:"Nenhum item disponível"})}),t.jsx(je,{count:Math.ceil(x.length/$),page:_,onChange:se,sx:{display:"flex",justifyContent:"center",mt:2}})]}),t.jsx(l,{sx:{display:"flex",justifyContent:"flex-end",mt:2},children:F&&F.length>0&&F.every(e=>e.status==="Auditado"||e.status==="Item com avaria")?t.jsxs(t.Fragment,{children:[t.jsx(l,{sx:{flex:1,textAlign:"center"},children:t.jsx(h,{variant:"body1",color:"textSecondary",children:"Todos os itens já foram auditados"})}),t.jsx(i,{variant:"outlined",color:"primary",onClick:q,children:"Fechar"})]}):t.jsxs(t.Fragment,{children:[p&&t.jsx(i,{variant:"outlined",color:"success",onClick:()=>{re(),C(!0)},children:"Auditar"}),t.jsx(i,{variant:"text",color:"error",onClick:q,sx:{mr:1},children:"Cancelar Auditoria"}),p&&!K&&t.jsx(i,{variant:"outlined",color:"primary",onClick:ce,children:"Finalizar Auditoria"}),!p&&t.jsx(i,{variant:"outlined",color:"primary",onClick:de,disabled:p,children:"Iniciar auditoria"})]})})]})}),t.jsx(z,{open:T,onClose:()=>{C(!1),k(!1),u("")},"aria-labelledby":"modal-title","aria-describedby":"modal-description",children:t.jsx(l,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"30%",bgcolor:"background.paper",boxShadow:24,p:4},children:w&&t.jsxs("div",{children:[S&&t.jsx(B,{label:S,color:X?"error":"success",onDelete:()=>{u("")},sx:{marginTop:2}}),t.jsx(U,{onScan:L,onError:M,style:{width:"100%"},facingMode:"rear"}),t.jsx(i,{variant:"outlined",color:"secondary",onClick:ne,children:"Fechar câmera"})]})})})]})};export{Ee as default};
