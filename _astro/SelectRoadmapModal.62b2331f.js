import{_ as C,h as b,p as k}from"./hooks.module.7cc4e70a.js";import{D as z}from"./index.es.ebad3893.js";import{S as E}from"./Spinner.95905af5.js";import{d as D}from"./http.82ebf0f1.js";import{a as I}from"./resource-progress.b09662c1.js";/* empty css                       */import{u as T}from"./use-outside-click.85d1a62f.js";import{u as j}from"./use-keydown.41d75069.js";import{u as M}from"./use-toast.fb52de5d.js";import{o as e}from"./jsxRuntime.module.afbf92fe.js";import{C as P}from"./close.3a539829.js";function W(p){const{defaultRemovedItems:l=[],resourceId:s,resourceType:o,teamId:u,setTeamResourceConfig:v,onClose:c}=p,n=C(null),f=C(null),h=M(),[d,R]=b(!0),[g,w]=b(!1),[t,r]=b(l);k(()=>{function a(x){const y=x.target.closest(".clickable-group")?.dataset?.groupId;if(!y)return;const m=y.replace(/^\d+-/,"");t.includes(m)?(r(N=>N.filter($=>$!==m)),I(m,"reset")):(r(N=>[...N,m]),I(m,"removed"))}return document.addEventListener("click",a),()=>{document.removeEventListener("click",a)}},[t]);let i="https://roadmap.sh";o==="roadmap"?i+=`/${s}.json`:i+=`/best-practices/${s}.json`;async function B(a){const S=await(await fetch(a)).json(),y=await z(S,{fontURL:"/fonts/balsamiq.woff2"});n.current?.replaceChildren(y),t.forEach(m=>{I(m,"removed")})}j("Escape",()=>{c()}),T(f,()=>{c()});async function U(){if(t.length===0)return;w(!0);const{error:a,response:x}=await D(`https://api.roadmap.sh/v1-update-team-resource-config/${u}`,{teamId:u,resourceId:s,resourceType:o,removed:t});if(a||!x){h.error(a?.message||"Error adding roadmap");return}v(x),c()}return k(()=>{!n.current||!i||!s||!o||!u||B(i).catch(a=>{console.error(a),h.error("Something went wrong. Please try again!")}).finally(()=>{R(!1)})},[]),e("div",{class:"fixed left-0 right-0 top-0 z-50 h-full items-center justify-center overflow-y-auto overflow-x-hidden overscroll-contain bg-black/50",children:e("div",{class:"relative mx-auto h-full w-full max-w-4xl p-4 md:h-auto",children:e("div",{ref:f,class:"popup-body relative rounded-lg bg-white shadow",children:[e("div",{className:"sticky top-0 mb-3 rounded-2xl border-4 border-white bg-black p-4",children:[e("p",{className:"mb-2 text-gray-300",children:"Click and select the items to remove from the roadmap."}),e("div",{className:"flex flex-row items-center gap-1.5",children:[e("button",{disabled:t.length===0,onClick:()=>U().finally(()=>w(!1)),className:"rounded-md bg-blue-600 px-2.5 py-1.5 text-sm text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400",children:g?e("span",{className:"flex items-center gap-1.5",children:[e(E,{className:"h-3 w-3",innerFill:"white",isDualRing:!1})," ","Saving .."]}):"Save Changes"}),e("button",{onClick:c,className:"rounded-md bg-gray-600 px-2.5 py-1.5 text-sm text-white hover:bg-gray-700",children:"Cancel"})]})]}),e("div",{ref:n,className:"px-4"}),d&&e("div",{class:"flex w-full justify-center",children:e(E,{isDualRing:!1,className:"mb-4 mt-2 h-4 w-4 animate-spin fill-blue-600 text-gray-200 sm:h-8 sm:w-8"})})]})})})}function L(p){const{isSelected:l,onClick:s,title:o}=p;return e("button",{className:`group flex min-h-[35px] items-stretch overflow-hidden rounded-md text-sm ${l?"bg-black text-white transition-colors hover:bg-gray-700":"border border-gray-300 hover:bg-gray-100"}`,onClick:s,children:[e("span",{className:"flex items-center px-3",children:o}),l&&e("span",{className:"flex items-center bg-gray-700 px-3 text-xs text-white transition-colors",children:"×"}),!l&&e("span",{className:"flex items-center bg-gray-100 px-2.5 text-xs text-gray-500",children:"+"})]})}function X(p){const{onClose:l,allRoadmaps:s,onRoadmapAdd:o,onRoadmapRemove:u,teamResourceConfig:v}=p,c=C(null),n=C(null),[f,h]=b(s),[d,R]=b("");j("Escape",()=>{l()}),T(c,()=>{l()}),k(()=>{n.current&&n.current.focus()},[n]),k(()=>{if(d.length===0){h(s);return}const t=s.filter(r=>r.title.toLowerCase().includes(d.toLowerCase())||r.id.toLowerCase().includes(d.toLowerCase()));h(t)},[d,s]);const g=f.filter(t=>t?.metadata?.tags?.includes("role-roadmap")),w=f.filter(t=>t?.metadata?.tags?.includes("skill-roadmap"));return e("div",{class:"fixed left-0 right-0 top-0 z-50 h-full items-center justify-center overflow-y-auto overflow-x-hidden overscroll-contain bg-black/50",children:e("div",{class:"relative mx-auto h-full w-full max-w-2xl p-4 md:h-auto",children:e("div",{ref:c,class:"popup-body relative mt-4 overflow-hidden rounded-lg bg-white shadow",children:[e("button",{type:"button",className:"popup-close absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900",onClick:l,children:[e("img",{alt:"close",src:P,className:"h-4 w-4"}),e("span",{class:"sr-only",children:"Close modal"})]}),e("input",{ref:n,type:"text",placeholder:"Search roadmaps",className:"block w-full border-b px-5 pb-3.5 pt-4 outline-none placeholder:text-gray-400",value:d,onInput:t=>R(t.target.value)}),e("div",{className:"min-h-[200px] p-4",children:[e("span",{className:"block pb-3 text-xs uppercase text-gray-400",children:"Role Based Roadmaps"}),g.length===0&&e("p",{className:"mb-1 flex h-full items-start text-sm italic text-gray-400"}),g.length>0&&e("div",{className:"mb-5 flex flex-wrap items-center gap-2",children:g.map(t=>{const r=!!v.find(i=>i.resourceId===t.id);return e(L,{title:t.title,isSelected:r,onClick:()=>{r?u(t.id):o(t.id)}})})}),e("span",{className:"block pb-3 text-xs uppercase text-gray-400",children:"Skill Based Roadmaps"}),e("div",{className:"flex flex-wrap items-center gap-2",children:w.map(t=>{const r=!!v.find(i=>i.resourceId===t.id);return e(L,{title:t.title,isSelected:r,onClick:()=>{r?u(t.id):o(t.id)}})})})]})]})})})}export{X as S,W as U};
