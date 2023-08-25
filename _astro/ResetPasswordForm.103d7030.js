import{h as r,p as w}from"./hooks.module.6eb5c72e.js";import{h}from"./http.82ebf0f1.js";import{a as b,T as P}from"./jwt.f0e0aa9c.js";import{o as s}from"./jsxRuntime.module.c6f75409.js";import"./preact.module.346aa314.js";function L(){const[c,m]=r(""),[a,f]=r(""),[n,p]=r(""),[l,t]=r(!1),[d,i]=r("");return w(()=>{const o=new URLSearchParams(window.location.search).get("code");o?m(o):window.location.href="/login"},[]),s("form",{className:"mx-auto w-full",onSubmit:async e=>{if(e.preventDefault(),t(!0),a!==n){t(!1),i("Passwords do not match.");return}const{response:o,error:u}=await h("https://api.roadmap.sh/v1-reset-forgotten-password",{newPassword:a,confirmPassword:n,code:c});if(u?.message){t(!1),i(u.message);return}if(!o?.token){t(!1),i("Something went wrong. Please try again later.");return}const g=o.token;b.set(P,g,{path:"/",expires:30,domain:".roadmap.sh"}),window.location.href="/"},children:[s("input",{type:"password",className:"mb-2 mt-2 block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none transition duration-150 ease-in-out placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:!0,minLength:6,placeholder:"New Password",value:a,onInput:e=>f(e.target.value)}),s("input",{type:"password",className:"mt-2 block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none transition duration-150 ease-in-out placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:!0,minLength:6,placeholder:"Confirm New Password",value:n,onInput:e=>p(e.target.value)}),d&&s("p",{className:"mt-2 rounded-lg bg-red-100 p-2 text-red-700",children:d}),s("button",{type:"submit",disabled:l,className:"mt-2 inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400",children:l?"Please wait...":"Reset Password"})]})}export{L as default};
