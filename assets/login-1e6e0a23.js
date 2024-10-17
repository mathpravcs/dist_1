import{u as S,r as u,j as e,M as v,B,G as i,L as D,S as o,T as I,F as L,c as A,a as h,A as C,I as p,O as j,b as m,d as M,e as k,f as F,g as O,h as P}from"./index-58b69ef5.js";import{A as q}from"./AnimateButton-ef4314e4.js";import{M as W}from"./index-ddd491d3.js";import{E as G,a as T}from"./EyeOutlined-2c2e2be5.js";const H=()=>{const{login:w}=S(),[l,g]=u.useState(!1),[a,f]=u.useState(""),y=()=>{g(!l)},b=s=>{s.preventDefault()},E=()=>l?e.jsx(G,{}):e.jsx(T,{});return e.jsx(v,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,border:!1,boxShadow:!0,shadow:s=>s.customShadows.z1,children:e.jsx(B,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:e.jsxs(i,{container:!0,spacing:1,children:[e.jsx(i,{container:!0,justifyContent:"center",children:e.jsx(D,{})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(o,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:e.jsx(I,{variant:"h3",children:"Login"})})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(L,{initialValues:{email:"",password:"",submit:null},validationSchema:A().shape({email:h().email("Digite um e-mail válido").max(255).required("Digite seu e-mail"),password:h().max(255).required("Digite sua senha")}),onSubmit:async(s,{setErrors:d,setStatus:t,setSubmitting:r})=>{try{r(!0),await w(s.email,s.password)}catch(c){scriptedRef.current&&(t({success:!1}),f(c.response.data.errors),r(!1))}finally{r(!1)}},children:({errors:s,handleBlur:d,handleChange:t,handleSubmit:r,isSubmitting:c,touched:n,values:x})=>e.jsxs("form",{noValidate:!0,onSubmit:r,children:[a&&e.jsx(i,{item:!0,xs:12,marginBottom:2,children:e.jsx(C,{variant:"filled",severity:"error",icon:e.jsx(W,{}),children:a})}),e.jsxs(i,{container:!0,spacing:3,children:[e.jsxs(i,{item:!0,xs:12,children:[e.jsxs(o,{spacing:1,children:[e.jsx(p,{htmlFor:"email-login",children:"E-mail"}),e.jsx(j,{id:"email-login",type:"email",value:x.email,name:"email",onBlur:d,onChange:t,placeholder:"Digite seu e-mail",fullWidth:!0,error:!!((n.email&&s.email)??a)})]}),n.email&&s.email&&e.jsx(m,{error:!0,id:"standard-weight-helper-text-email-login",children:s.email})]}),e.jsxs(i,{item:!0,xs:12,children:[e.jsxs(o,{spacing:1,children:[e.jsx(p,{htmlFor:"password-login",children:"Senha"}),e.jsx(j,{fullWidth:!0,error:!!((n.password&&s.password)??a),id:"-password-login",type:l?"text":"password",value:x.password,name:"password",onBlur:d,onChange:t,endAdornment:e.jsx(M,{position:"end",children:e.jsx(k,{"aria-label":"toggle password visibility",onClick:y,onMouseDown:b,edge:"end",color:"secondary",children:E()})}),placeholder:"Digite sua senha"})]}),n.password&&s.password&&e.jsx(m,{error:!0,id:"standard-weight-helper-text-password-login",children:s.password})]}),e.jsx(i,{item:!0,xs:12,sx:{mt:-1},children:e.jsx(o,{direction:"row",justifyContent:"flex-end",alignItems:"center",spacing:2,children:e.jsx(F,{variant:"h6",component:O,to:"/esqueceu-a-senha",color:"text.primary",children:"Esqueceu a senha?"})})}),s.submit&&e.jsx(i,{item:!0,xs:12,children:e.jsx(m,{error:!0,children:s.submit})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(q,{children:e.jsx(P,{disableElevation:!0,disabled:c,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Login"})})})]})]})})})]})})})};export{H as default};
