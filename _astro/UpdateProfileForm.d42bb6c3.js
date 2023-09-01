import{j as e}from"./jsx-runtime.391947bd.js";import{r as s}from"./index.ed373d49.js";import{h as U,a as L}from"./http.82ebf0f1.js";import{p as $}from"./page.c1a8a472.js";import{U as G}from"./UploadProfilePicture.fff1271b.js";import"./jwt.f0e0aa9c.js";import"./index.a98c85f5.js";function M(){const[i,c]=s.useState(""),[d,k]=s.useState(""),[S,P]=s.useState(""),[u,m]=s.useState(""),[f,p]=s.useState(""),[x,g]=s.useState(""),[h,b]=s.useState(""),[w,a]=s.useState(!1),[y,o]=s.useState(""),[v,j]=s.useState(""),F=async t=>{t.preventDefault(),a(!0),o(""),j("");const{response:l,error:r}=await U("https://api.roadmap.sh/v1-update-profile",{name:i,github:u||void 0,linkedin:x||void 0,twitter:f||void 0,website:h||void 0});if(r||!l){a(!1),o(r?.message||"Something went wrong");return}await N(),j("Profile updated successfully")},N=async()=>{a(!0);const{error:t,response:l}=await L("https://api.roadmap.sh/v1-me");if(t||!l){a(!1),o(t?.message||"Something went wrong");return}const{name:r,email:I,links:n,avatar:E}=l;c(r),P(I),m(n?.github||""),g(n?.linkedin||""),p(n?.twitter||""),b(n?.website||""),k(E||""),a(!1)};return s.useEffect(()=>{N().finally(()=>{$.set("")})},[]),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-8 hidden md:block",children:[e.jsx("h2",{className:"text-3xl font-bold sm:text-4xl",children:"Profile"}),e.jsx("p",{className:"mt-2 text-gray-400",children:"Update your profile details below."})]}),e.jsx(G,{type:"avatar",label:"Profile picture",avatarUrl:d?`https://dodrc8eu8m09s.cloudfront.net/avatars/${d}`:"/images/default-avatar.png"}),e.jsxs("form",{className:"mt-4 space-y-4",onSubmit:F,children:[e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("label",{htmlFor:"name",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:"Name"}),e.jsx("input",{type:"text",name:"name",id:"name",className:"mt-2 block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:!0,placeholder:"John Doe",value:i,onInput:t=>c(t.target.value)})]}),e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("label",{htmlFor:"email",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:"Email"}),e.jsx("input",{type:"email",name:"email",id:"email",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:!0,disabled:!0,placeholder:"john@example.com",value:S})]}),e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("label",{htmlFor:"github",className:"text-sm leading-none text-slate-500",children:"Github"}),e.jsx("input",{type:"text",name:"github",id:"github",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://github.com/username",value:u,onInput:t=>m(t.target.value)})]}),e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("label",{htmlFor:"twitter",className:"text-sm leading-none text-slate-500",children:"Twitter"}),e.jsx("input",{type:"text",name:"twitter",id:"twitter",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://twitter.com/username",value:f,onInput:t=>p(t.target.value)})]}),e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("label",{htmlFor:"linkedin",className:"text-sm leading-none text-slate-500",children:"LinkedIn"}),e.jsx("input",{type:"text",name:"linkedin",id:"linkedin",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://www.linkedin.com/in/username/",value:x,onInput:t=>g(t.target.value)})]}),e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("label",{htmlFor:"website",className:"text-sm leading-none text-slate-500",children:"Website"}),e.jsx("input",{type:"text",name:"website",id:"website",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://example.com",value:h,onInput:t=>b(t.target.value)})]}),y&&e.jsx("p",{className:"mt-2 rounded-lg bg-red-100 p-2 text-red-700",children:y}),v&&e.jsx("p",{className:"mt-2 rounded-lg bg-green-100 p-2 text-green-700",children:v}),e.jsx("button",{type:"submit",disabled:w,className:"inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400",children:w?"Please wait...":"Continue"})]})]})}export{M as UpdateProfileForm};
