import{r as g,k as v,j as e,G as i,S as d,T as n,h as b,F as y,c as E,a as S,l as k,A as x,b as w,I as A,O as B,d as h,m as D,i as F}from"./index-5e823bed.js";import{A as M}from"./AnimateButton-c747ed83.js";import{u as I}from"./useScriptRef-fa89cdac.js";const L=()=>{const[o,c]=g.useState(""),p=I(),j=v();return e.jsxs(i,{container:!0,spacing:3,children:[e.jsx(i,{item:!0,xs:12,children:e.jsxs(d,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[e.jsx(n,{variant:"h3",children:"Esqueceu a senha?"}),e.jsx(n,{component:b,to:"/login",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Voltar ao Login"})]})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(y,{initialValues:{email:"",submit:null},validationSchema:E().shape({email:S().email("Digite um e-mail válido").max(255).required("Digite seu e-mail")}),onSubmit:async(a,{setErrors:m,setStatus:s,setSubmitting:r})=>{try{r(!0),await k.post("/auth/forgot-password",{email:a.email}),s({success:!0,successMessage:"E-mail enviado com sucesso!"}),c(""),setTimeout(()=>{j("/verificar-email",{replace:!0})},1500)}catch(t){p.current&&(s({success:!1}),c(t.response.data.errors),r(!1))}finally{r(!1)}},children:({errors:a,handleBlur:m,handleChange:s,handleSubmit:r,isSubmitting:t,touched:u,values:f,status:l})=>e.jsxs("form",{noValidate:!0,onSubmit:r,children:[o&&e.jsx(i,{item:!0,xs:12,marginBottom:2,children:e.jsx(x,{variant:"filled",severity:"error",icon:e.jsx(w,{}),children:o})}),e.jsxs(i,{container:!0,spacing:3,children:[e.jsxs(i,{item:!0,xs:12,children:[e.jsxs(d,{spacing:1,children:[e.jsx(A,{htmlFor:"email-forgot",children:"E-mail"}),e.jsx(B,{fullWidth:!0,error:!!(u.email&&a.email),id:"email-forgot",type:"email",value:f.email,name:"email",onBlur:m,onChange:s,placeholder:"Digite seu e-mail"})]}),u.email&&a.email&&e.jsx(h,{error:!0,id:"helper-text-email-forgot",children:a.email})]}),l&&l.successMessage&&e.jsx(i,{item:!0,xs:12,children:e.jsx(D,{open:!0,autoHideDuration:6e3,children:e.jsx(x,{severity:"success",children:l.successMessage})})}),a.submit&&e.jsx(i,{item:!0,xs:12,children:e.jsx(h,{error:!0,children:a.submit})}),e.jsx(i,{item:!0,xs:12,sx:{mb:-2},children:e.jsx(n,{variant:"caption",children:"Será enviado um e-mail de recuperação de senha. Verifique sua caixa de entrada e a caixa de SPAM."})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(M,{children:e.jsx(F,{disableElevation:!0,disabled:t,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Enviar E-mail"})})})]})]})})})]})};export{L as default};
