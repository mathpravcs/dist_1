import{u as S,r as u,j as e,M as v,B,G as i,L as D,S as o,T as I,F as L,c as A,a as h,A as C,b as k,I as p,O as j,d as x,e as M,f as F,g as O,h as P,i as q}from"./index-de6ef904.js";import{A as W}from"./AnimateButton-a92c7d39.js";import{E as G,a as T}from"./EyeOutlined-5af3390d.js";const V=()=>{const{login:w}=S(),[l,g]=u.useState(!1),[r,f]=u.useState(""),y=()=>{g(!l)},b=s=>{s.preventDefault()},E=()=>l?e.jsx(G,{}):e.jsx(T,{});return e.jsx(v,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,border:!1,boxShadow:!0,shadow:s=>s.customShadows.z1,children:e.jsx(B,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:e.jsxs(i,{container:!0,spacing:1,children:[e.jsx(i,{container:!0,justifyContent:"center",children:e.jsx(D,{})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(o,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:e.jsx(I,{variant:"h3",children:"Login"})})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(L,{initialValues:{email:"",password:"",submit:null},validationSchema:A().shape({email:h().email("Digite um e-mail válido").max(255).required("Digite seu e-mail"),password:h().max(255).required("Digite sua senha")}),onSubmit:async(s,{setErrors:d,setStatus:t,setSubmitting:a})=>{try{a(!0),await w(s.email,s.password)}catch(c){scriptedRef.current&&(t({success:!1}),f(c.response.data.errors),a(!1))}finally{a(!1)}},children:({errors:s,handleBlur:d,handleChange:t,handleSubmit:a,isSubmitting:c,touched:n,values:m})=>e.jsxs("form",{noValidate:!0,onSubmit:a,children:[r&&e.jsx(i,{item:!0,xs:12,marginBottom:2,children:e.jsx(C,{variant:"filled",severity:"error",icon:e.jsx(k,{}),children:r})}),e.jsxs(i,{container:!0,spacing:3,children:[e.jsxs(i,{item:!0,xs:12,children:[e.jsxs(o,{spacing:1,children:[e.jsx(p,{htmlFor:"email-login",children:"E-mail"}),e.jsx(j,{id:"email-login",type:"email",value:m.email,name:"email",onBlur:d,onChange:t,placeholder:"Digite seu e-mail",fullWidth:!0,error:!!((n.email&&s.email)??r)})]}),n.email&&s.email&&e.jsx(x,{error:!0,id:"standard-weight-helper-text-email-login",children:s.email})]}),e.jsxs(i,{item:!0,xs:12,children:[e.jsxs(o,{spacing:1,children:[e.jsx(p,{htmlFor:"password-login",children:"Senha"}),e.jsx(j,{fullWidth:!0,error:!!((n.password&&s.password)??r),id:"-password-login",type:l?"text":"password",value:m.password,name:"password",onBlur:d,onChange:t,endAdornment:e.jsx(M,{position:"end",children:e.jsx(F,{"aria-label":"toggle password visibility",onClick:y,onMouseDown:b,edge:"end",color:"secondary",children:E()})}),placeholder:"Digite sua senha"})]}),n.password&&s.password&&e.jsx(x,{error:!0,id:"standard-weight-helper-text-password-login",children:s.password})]}),e.jsx(i,{item:!0,xs:12,sx:{mt:-1},children:e.jsx(o,{direction:"row",justifyContent:"flex-end",alignItems:"center",spacing:2,children:e.jsx(O,{variant:"h6",component:P,to:"/esqueceu-a-senha",color:"text.primary",children:"Esqueceu a senha?"})})}),s.submit&&e.jsx(i,{item:!0,xs:12,children:e.jsx(x,{error:!0,children:s.submit})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(W,{children:e.jsx(q,{disableElevation:!0,disabled:c,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Login"})})})]})]})})})]})})})};export{V as default};
