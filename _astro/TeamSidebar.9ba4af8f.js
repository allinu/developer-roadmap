import{TeamDropdown as d}from"./TeamDropdown.7538fbff.js";import{D as p}from"./dropdown.d1f25819.js";import{u as h}from"./use-team-id.3d0ab368.js";import{G as l}from"./group.ff3a3bf4.js";import{h as f}from"./hooks.module.7cc4e70a.js";import{u}from"./index.c54070cf.js";import{b as g}from"./team.12f2469e.js";import{o as e}from"./jsxRuntime.module.afbf92fe.js";import{k as b}from"./preact.module.7b19fc78.js";import"./http.82ebf0f1.js";import"./jwt.f0e0aa9c.js";import"./use-auth.13ac07ad.js";import"./use-outside-click.85d1a62f.js";import"./Spinner.95905af5.js";import"./use-toast.fb52de5d.js";import"./toast.1fe7142d.js";import"./index.a98c85f5.js";const x="/_astro/team-progress.cad98aeb.svg",w="/_astro/cog.8b137a0f.svg",y="/_astro/map.6fd5e39b.svg",q=({activePageId:r,children:i})=>{const[n,m]=f(!1),c=u(g),{teamId:s}=h(),o=[{title:"Progress",href:`/team/progress?t=${s}`,id:"progress",icon:x},{title:"Roadmaps",href:`/team/roadmaps?t=${s}`,id:"roadmaps",icon:y,hasWarning:c?.roadmaps?.length===0},{title:"Members",href:`/team/members?t=${s}`,id:"members",icon:l},{title:"Settings",href:`/team/settings?t=${s}`,id:"settings",icon:w}];return e(b,{children:[e("div",{class:"relative mb-5 block border-b p-4 shadow-inner md:hidden",children:[e("button",{class:"flex h-10 w-full items-center justify-between rounded-md border bg-white px-2 text-center text-sm font-medium text-gray-900",id:"settings-menu","aria-haspopup":"true","aria-expanded":"true",onClick:()=>m(!n),children:[o.find(t=>t.id===r)?.title,e("img",{alt:"menu",src:p,class:"h-4 w-4"})]}),n&&e("ul",{id:"settings-menu-dropdown",class:"absolute left-0 right-0 z-50 mt-1 space-y-1.5 bg-white p-2 shadow-lg",children:[e("li",{children:e("a",{href:"/team",class:`flex w-full items-center rounded px-3 py-1.5 text-sm text-slate-900 hover:bg-slate-200 ${r==="team"?"bg-slate-100":""}`,children:[e("img",{alt:"teams",src:l,class:"mr-2 h-4 w-4"}),"Personal Account / Teams"]})}),o.map(t=>{const a=r===t.id;return e("li",{children:e("a",{href:t.href,class:`flex w-full items-center rounded px-3 py-1.5 text-sm text-slate-900 hover:bg-slate-200 ${a?"bg-slate-100":""}`,children:[e("img",{alt:"menu icon",src:t.icon,className:"mr-2 h-4 w-4"}),t.title]})})})]})]}),e("div",{class:"container flex min-h-screen items-stretch",children:[e("aside",{class:"hidden w-44 shrink-0 border-r border-slate-200 py-10 md:block",children:[e(d,{}),e("nav",{children:e("ul",{class:"space-y-1",children:o.map(t=>{const a=r===t.id;return e("li",{children:e("a",{href:t.href,class:`font-regular flex w-full items-center border-r-2 px-2 py-1.5 text-sm ${a?"border-r-black bg-gray-100 text-black":"border-r-transparent text-gray-500 hover:border-r-gray-300"}`,children:e("span",{class:"flex flex-grow items-center justify-between",children:[e("span",{className:"flex",children:[e("img",{alt:"menu icon",src:t.icon,className:"mr-2 h-4 w-4"}),t.title]}),t.hasWarning&&e("span",{class:"relative mr-1 flex items-center",children:[e("span",{class:"relative rounded-full bg-red-200 p-1 text-xs"}),e("span",{class:"absolute bottom-0 left-0 right-0 top-0 animate-ping rounded-full bg-red-400 p-1 text-xs"})]})]})})})})})})]}),e("div",{className:"grow px-0 py-0 md:px-10 md:py-10",children:i})]})]})};export{q as TeamSidebar};
