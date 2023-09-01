import{j as e}from"./jsx-runtime.391947bd.js";import{r as n}from"./index.ed373d49.js";import{C as $}from"./CheckIcon.5f09e048.js";import{B as z}from"./building.4e9dc788.js";import{d as R,h as E,a as T}from"./http.82ebf0f1.js";import{S as F}from"./Spinner.cc2f813e.js";import{p as I}from"./page.c1a8a472.js";import{U as L,S as A}from"./SelectRoadmapModal.e6de7e8a.js";import{g as M,s as C}from"./browser.bcc09af3.js";import{T as B}from"./TrashIcon.e0cd36d1.js";import{R as D}from"./RoleDropdown.d684c525.js";import{u as H}from"./use-toast.fb52de5d.js";import"./jwt.f0e0aa9c.js";import"./index.a98c85f5.js";import"./index.es.ebad3893.js";import"./resource-progress.e28c933e.js";/* empty css                       */import"./use-outside-click.54b69c89.js";import"./use-keydown.0305ad6b.js";import"./index.9435383e.js";import"./team.12f2469e.js";import"./close.bb7a0ac2.js";import"./toast.1fe7142d.js";function q(u){const{steps:t,activeIndex:a=0,completeSteps:s=[]}=u;return e.jsx("ol",{className:"flex w-full items-center text-gray-500",children:t.map((c,m)=>{const g=s.includes(m),f=a===m,o=m===t.length-1;return e.jsxs(e.Fragment,{children:[e.jsxs("li",{className:`flex items-center ${g||f?"text-black":"text-gray-400"}`,children:[g&&e.jsx($,{additionalClasses:"mr-2 top-[0.5px] w-[18px] h-[18px]"}),!g&&e.jsx("span",{className:"mr-2 font-semibold",children:m+1}),e.jsx("span",{className:"flex flex-grow",children:c.label})]}),!o&&e.jsx("li",{className:"mx-5 flex flex-grow rounded-md bg-gray-200",children:e.jsx("span",{className:"h-1 w-full"})})]})})})}const G={src:"/_astro/users.867d7978.svg",width:24,height:24,format:"svg"};function U(u){const{isLoading:t=!1,text:a="Next Step",type:s="button",loadingMessage:c="Please wait ..",onClick:m=()=>null,hasNextArrow:g=!0}=u;return e.jsx("button",{type:s,onClick:m,disabled:t,className:"rounded-md border border-black bg-black px-4 py-2 text-white disabled:opacity-50",children:t?e.jsxs("span",{className:"flex items-center justify-center",children:[e.jsx(F,{}),e.jsx("span",{className:"ml-2",children:c})]}):e.jsxs(e.Fragment,{children:[a,g&&e.jsx("span",{className:"ml-1",children:"→"})]})})}const Y=[{value:"company",label:"Company",icon:z,description:"Track the skills and learning progress of the tech team at your company"},{value:"study_group",label:"Study Group",icon:G,description:"Invite your friends or course-mates and track your learning progress together"}];function O(u){const{team:t,selectedTeamType:a,onStepComplete:s,setSelectedTeamType:c}=u,[m,g]=n.useState(!1),[f,o]=n.useState();async function x(){if(!t){s();return}g(!0),o("");const{response:d,error:y}=await R(`https://api.roadmap.sh/v1-update-team/${t._id}`,{name:t.name,website:t?.links?.website||void 0,type:a,gitHubUrl:t?.links?.github||void 0,...a==="company"&&{teamSize:t.teamSize,linkedInUrl:t?.links?.linkedIn||void 0}});if(y||!d){g(!1),o(y?.message||"Something went wrong");return}g(!1),o(""),s()}return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col sm:flex-row gap-3",children:Y.map(d=>e.jsxs("button",{className:`flex flex-grow flex-col items-center rounded-lg border px-5 py-12 ${d.value==a?"border-gray-400 bg-gray-100":"border-gray-300 hover:border-gray-400 hover:bg-gray-50"}`,onClick:()=>c(d.value),children:[e.jsx("img",{alt:d.label,src:d.icon,className:`mb-3 h-12 w-12 opacity-10 ${d.value===a?"opacity-100":""}`}),e.jsx("span",{className:"mb-2 block text-2xl font-bold",children:d.label}),e.jsx("span",{className:"text-sm text-gray-500 leading-[21px]",children:d.description})]}))}),f&&e.jsx("div",{className:"mt-4 text-sm text-red-500",children:f}),e.jsxs("div",{className:"mt-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2",children:[e.jsx("a",{href:"/account",className:"rounded-md border border-red-400 bg-white px-8 py-2 text-red-500 text-center",children:"Cancel"}),e.jsx(U,{type:"button",onClick:x,isLoading:m,text:"Next Step",loadingMessage:"Updating team .."})]})]})}const W=["1-5","6-10","11-25","26-50","51-100","101-200","201-500","501-1000","1000+"];function V(u){const{team:t,selectedTeamType:a,onBack:s,onStepComplete:c}=u,[m,g]=n.useState(""),f=n.useRef(null);n.useEffect(()=>{f.current&&f.current.focus()},[f]);const[o,x]=n.useState(!1),[d,y]=n.useState(t?.name||""),[j,v]=n.useState(t?.links?.website||""),[p,N]=n.useState(t?.links?.linkedIn||""),[r,i]=n.useState(t?.links?.github||""),[l,b]=n.useState(t?.teamSize||""),w=async h=>{if(h.preventDefault(),x(!0),!d||!a){x(!1);return}let S,k;if(t?._id){if({response:S,error:k}=await R(`https://api.roadmap.sh/v1-update-team/${t._id}`,{name:d,website:j||void 0,type:a,gitHubUrl:r||void 0,...a==="company"&&{teamSize:l,linkedInUrl:p||void 0}}),k||S?.status!=="ok"){g(k?.message||"Something went wrong. Please try again."),x(!1);return}c({...t,name:d,_id:t._id,links:{website:j||t?.links?.website,linkedIn:p||t?.links?.linkedIn,github:r||t?.links?.github},type:a,teamSize:l})}else{if({response:S,error:k}=await E("https://api.roadmap.sh/v1-create-team",{name:d,website:j||void 0,type:a,gitHubUrl:r||void 0,...a==="company"&&{teamSize:l,linkedInUrl:p||void 0},roadmapIds:[],bestPracticeIds:[]}),k||!S?._id){g(k?.message||"Something went wrong. Please try again."),x(!1);return}c(S)}};return e.jsxs("form",{onSubmit:w,children:[e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("label",{htmlFor:"name",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:a==="company"?"Company Name":"Group Name"}),e.jsx("input",{type:"text",name:"name",ref:f,autoFocus:!0,id:"name",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"Roadmap Inc.",disabled:o,required:!0,value:d,onInput:h=>y(h.target.value)})]}),a==="company"&&e.jsxs("div",{className:"mt-4 flex w-full flex-col",children:[e.jsx("label",{htmlFor:"website",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:"Website"}),e.jsx("input",{type:"url",name:"website",required:!0,id:"website",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://roadmap.sh",disabled:o,value:j,onInput:h=>v(h.target.value)})]}),a==="company"&&e.jsxs("div",{className:"mt-4 flex w-full flex-col",children:[e.jsx("label",{htmlFor:"website",className:"text-sm leading-none text-slate-500",children:"Company LinkedIn URL"}),e.jsx("input",{type:"url",name:"website",id:"website",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://www.linkedin.com/company/roadmapsh",disabled:o,value:p,onInput:h=>N(h.target.value)})]}),e.jsxs("div",{className:"mt-4 flex w-full flex-col",children:[e.jsx("label",{htmlFor:"website",className:"text-sm leading-none text-slate-500",children:"GitHub Organization URL"}),e.jsx("input",{type:"url",name:"website",id:"website",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://github.com/roadmapsh",disabled:o,value:r,onInput:h=>i(h.target.value)})]}),a==="company"&&e.jsxs("div",{className:"mt-4 flex w-full flex-col",children:[e.jsx("label",{htmlFor:"team-size",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:"Tech Team Size"}),e.jsxs("select",{name:"team-size",id:"team-size",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:a==="company",disabled:o,value:l,onChange:h=>b(h.target.value),children:[e.jsx("option",{value:"",selected:!0,children:"Select team size"}),W.map(h=>e.jsxs("option",{value:h,children:[h," people"]}))]})]}),m&&e.jsx("div",{className:"mt-4 flex w-full flex-col",children:e.jsx("span",{className:"text-sm text-red-500",children:m})}),e.jsxs("div",{className:"mt-4 flex flex-col items-center justify-between gap-2 md:flex-row",children:[e.jsxs("button",{type:"button",onClick:s,className:"rounded-md border border-red-400 bg-white px-4 py-2 text-red-500",children:[e.jsx("span",{className:"mr-1",children:"←"}),"Previous Step"]}),e.jsx(U,{isLoading:o,text:"Next Step",type:"submit",loadingMessage:"Creating team .."})]})]})}const J={src:"/_astro/chevron-down.d197d887.svg",width:24,height:24,format:"svg"};function K(u){const{onClick:t,selectedCount:a,singularName:s,pluralName:c}=u,m=a===1?s:c;return e.jsxs("div",{className:"flex cursor-text items-center justify-between rounded-md border border-gray-300 px-3 py-2.5 hover:border-gray-400/50 hover:bg-gray-50",role:"button",onClick:t,children:[a>0&&e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("p",{className:"mb-1.5 text-base font-medium text-gray-800",children:[a," ",m," selected"]}),e.jsx("p",{className:"text-sm text-gray-400",children:"Click to add or change selection"})]}),a===0&&e.jsx("div",{className:"flex flex-col",children:e.jsxs("p",{className:"text-base text-gray-400",children:["Click to select ",c]})}),e.jsx("img",{alt:s,src:J.src,className:"relative top-[1px] h-[17px] w-[17px] opacity-40"})]})}function Q(u){const{teamId:t,teamResourceConfig:a=[],setTeamResourceConfig:s}=u,[c,m]=n.useState(!1),[g,f]=n.useState([]),[o,x]=n.useState(""),[d,y]=n.useState("");async function j(){const{error:r,response:i}=await T("/pages.json");if(r){y(r.message||"Something went wrong. Please try again!");return}if(!i)return[];const l=i.filter(b=>b.group==="Roadmaps").sort((b,w)=>b.title==="Android"?1:b.title.localeCompare(w.title));return f(l),i}async function v(r){if(!t)return;I.set("Deleting resource");const{error:i,response:l}=await R(`https://api.roadmap.sh/v1-delete-team-resource-config/${t}`,{resourceId:r,resourceType:"roadmap"});if(i||!l){y(i?.message||"Error deleting roadmap");return}s(l)}async function p(r){I.set("Removing roadmap"),v(r).finally(()=>{I.set("")})}async function N(r){if(!t)return;I.set("Adding roadmap to team");const{error:i,response:l}=await R(`https://api.roadmap.sh/v1-update-team-resource-config/${t}`,{teamId:t,resourceId:r,resourceType:"roadmap",removed:[]});if(i||!l){y(i?.message||"Error adding roadmap");return}s(l)}return n.useEffect(()=>{j().finally()},[]),e.jsxs("div",{children:[o&&e.jsx(L,{onClose:()=>x(""),resourceId:o,resourceType:"roadmap",teamId:t,setTeamResourceConfig:s,defaultRemovedItems:a.find(r=>r.resourceId===o)?.removed||[]}),c&&e.jsx(A,{onClose:()=>m(!1),teamResourceConfig:a,allRoadmaps:g,teamId:t,onRoadmapAdd:r=>{N(r).finally(()=>{I.set("")})},onRoadmapRemove:r=>{p(r).finally(()=>{})}}),e.jsx("div",{className:"mt-3",children:e.jsx(K,{onClick:()=>{m(!0)},selectedCount:a.length,singularName:"roadmap",pluralName:"roadmaps"})}),!a.length&&e.jsx("p",{className:"mb-3 mt-2 text-base text-gray-400",children:"No roadmaps selected."}),a.length>0&&e.jsx("div",{className:"mt-4 grid grid-cols-1 sm:grid-cols-3 flex-wrap gap-2.5",children:a.map(({resourceId:r,removed:i})=>{const l=g.find(b=>b.id===r)?.title||"...";return e.jsxs("div",{className:"flex flex-col items-start rounded-md border border-gray-300",children:[e.jsxs("div",{className:"w-full px-3 pb-2 pt-4",children:[e.jsx("span",{className:"mb-0.5 block text-base font-medium leading-none text-black",children:l}),i.length>0?e.jsxs("span",{className:"text-xs leading-none text-gray-900",children:[i.length," topic",i.length>1?"s":""," removed"]}):e.jsx("span",{className:"text-xs italic leading-none text-gray-400/60",children:"No changes made .."})]}),e.jsxs("div",{className:"flex w-full justify-between p-3",children:[e.jsx("button",{type:"button",className:"text-xs text-gray-500 underline hover:text-black focus:outline-none",onClick:()=>x(r),children:"Customize"}),e.jsx("button",{type:"button",className:"text-xs text-red-500 underline hover:text-black",onClick:()=>p(r),children:"Remove"})]})]})})})]})}function X(u){const{team:t,onBack:a,onNext:s,teamResourceConfig:c,setTeamResourceConfig:m}=u;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-4 flex w-full flex-col",children:[e.jsxs("div",{className:"mb-1 mt-2",children:[e.jsx("h2",{className:"mb-1 md:mb-1.5 text-lg md:text-2xl font-bold",children:"Select Roadmaps"}),e.jsx("p",{className:"text-sm text-gray-700",children:"You can always add and customize your roadmaps later."})]}),e.jsx(Q,{teamId:t._id,teamResourceConfig:c,setTeamResourceConfig:m})]}),e.jsxs("div",{className:"mt-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2",children:[e.jsxs("button",{type:"button",onClick:a,className:"rounded-md border border-red-400 bg-white px-4 py-2 text-red-500",children:[e.jsx("span",{className:"mr-1",children:"←"}),"Previous Step"]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{type:"button",onClick:s,className:"flex-grow rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-500 hover:border-gray-400 hover:text-black md:flex-auto",children:"Skip for Now"}),e.jsxs("button",{type:"submit",disabled:c.length===0,onClick:s,className:"rounded-md border bg-black px-4 py-2 text-white disabled:opacity-50",children:["Next Step",e.jsx("span",{className:"ml-1",children:"→"})]})]})]})]})}function _(){return`${new Date().getTime()}`}function Z(u){const{onNext:t,onBack:a,team:s}=u,[c,m]=n.useState(""),[g,f]=n.useState(!1),o=n.useRef(null),[x,d]=n.useState([{id:_(),email:"",role:"member"}]);async function y(){f(!0);const{error:p,response:N}=await E(`https://api.roadmap.sh/v1-invite-team/${s?._id}`,{members:x});if(p||!N){m(p?.message||"Something went wrong"),f(!1);return}t()}function j(){o.current&&o.current.focus()}function v(p){p.preventDefault(),y().finally(()=>null)}return n.useEffect(()=>{j()},[x.length]),e.jsxs("form",{className:"mt-4 flex w-full flex-col",onSubmit:v,children:[e.jsxs("div",{className:"mb-1 mt-2",children:[e.jsx("h2",{className:"mb-1 md:mb-2 text-lg md:text-2xl font-bold",children:"Invite your Team"}),e.jsx("p",{className:"text-sm text-gray-700",children:"Use the form below to invite your team members to your team. You can also invite them later."})]}),e.jsx("div",{className:"mt-4 flex flex-col gap-1",children:x.map((p,N)=>e.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[e.jsx("input",{ref:N===x.length-1?o:null,autoFocus:!0,type:"email",name:"email",required:!0,id:"email",placeholder:"Email",value:p.email,onChange:r=>{const i=x.map(l=>l.id===p.id?{...l,email:r.target?.value}:l);d(i)},className:"flex-grow rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-900"}),e.jsx(D,{selectedRole:p.role,setSelectedRole:r=>{const i=x.map(l=>l.id===p.id?{...l,role:r}:l);d(i)}}),e.jsx("button",{disabled:x.length<=1,type:"button",className:"rounded-md border border-red-200 bg-white px-4 py-2 text-red-500 hover:bg-red-100 disabled:opacity-30",onClick:()=>{d(x.filter(r=>r.id!==p.id))},children:e.jsx(B,{className:"h-5 w-5"})})]},p.id))}),x.length<=30&&e.jsx("button",{onClick:()=>{d([...x,{id:_(),email:"",role:"member"}])},type:"button",className:"mt-2 rounded-md border border-dashed border-gray-400 py-2 text-sm text-gray-500 hover:border-gray-500 hover:text-gray-800",children:"+ Add another"}),c&&e.jsx("div",{className:"mt-2 text-sm font-medium text-red-500",role:"alert",children:c}),e.jsxs("div",{className:"mt-4 flex flex-col sm:flex-row items-stretch md:items-center justify-between gap-2",children:[e.jsxs("button",{type:"button",onClick:a,className:"rounded-md border border-red-400 bg-white px-4 py-2 text-red-500",children:[e.jsx("span",{className:"mr-1",children:"←"}),"Previous Step"]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{type:"button",onClick:t,className:"rounded-md flex-grow md:flex-auto border border-gray-300 bg-white px-4 py-2 text-gray-500 hover:border-gray-400 hover:text-black",children:"Skip for Now"}),e.jsx(U,{type:"submit",isLoading:g,text:"Send Invites",loadingMessage:"Updating team ..",hasNextArrow:!1})]})]})]})}function ee({team:u}){return e.jsx("div",{className:"mt-4 flex flex-col rounded-xl border py-12 text-center",children:e.jsxs("div",{className:"mb-1 flex flex-col items-center",children:[e.jsx($,{additionalClasses:"h-14 w-14 mb-4 opacity-100"}),e.jsx("h2",{className:"mb-2 text-2xl font-bold",children:"Team Created"}),e.jsx("p",{className:"text-sm text-gray-700",children:"Your team has been created. Happy learning!"}),e.jsx("a",{href:`/team/progress?t=${u._id}`,className:"mt-4 rounded-md bg-black px-5 py-1.5 text-sm text-white",children:"View Team"})]})})}function ke(){const{s:u,t}=M(),a=H(),[s,c]=n.useState(),[m,g]=n.useState(!!t&&!s?._id),[f,o]=n.useState(0);async function x(l,b){const{response:w,error:h}=await T(`https://api.roadmap.sh/v1-get-team/${l}`);if(h||!w){a.error(h?.message||"Error loading team"),window.location.href="/account";return}const S=parseInt(b,10),k=Array(S).fill(1).map((te,P)=>P);c(w),p(w.type),r(k),o(S),await j(l)}const[d,y]=n.useState([]);async function j(l){const{error:b,response:w}=await T(`https://api.roadmap.sh/v1-get-team-resource-config/${l}`);if(b||!Array.isArray(w)){console.error(b);return}y(w)}n.useEffect(()=>{!t||!u||s||(I.set("Fetching team"),g(!0),x(t,u).finally(()=>{g(!1),I.set("")}))},[t,u]);const[v,p]=n.useState(s?.type||"company"),[N,r]=n.useState([0]);if(m)return null;let i=null;return f===0?i=e.jsx(O,{team:s,selectedTeamType:v,setSelectedTeamType:p,onStepComplete:()=>{s?._id&&C({t:s._id,s:"1"}),r([0]),o(1)}}):f===1?i=e.jsx(V,{team:s,onBack:()=>{s?._id&&C({t:s._id,s:"0"}),o(0)},onStepComplete:l=>{const b=l._id;C({t:b,s:"2"}),r([0,1]),o(2),c(l)},selectedTeamType:v}):f===2?i=e.jsx(X,{team:s,teamResourceConfig:d,setTeamResourceConfig:y,onBack:()=>{s&&C({t:s._id,s:"1"}),o(1)},onNext:()=>{C({t,s:"3"}),r([0,1,2]),o(3)}}):f===3?i=e.jsx(Z,{team:s,onBack:()=>{s&&C({t:s._id,s:"2"}),o(2)},onNext:()=>{s&&C({t:s._id,s:"4"}),r([0,1,2,3]),o(4)}}):f===4&&(i=e.jsx(ee,{team:s})),e.jsxs("div",{className:"mx-auto max-w-[700px] py-1 md:py-6",children:[e.jsxs("div",{className:"mb-3 md:mb-8 pb-3 md:pb-0 border-b md:border-b-0 flex flex-col items-start md:items-center",children:[e.jsx("h1",{className:"text-xl md:text-4xl font-bold",children:"Create Team"}),e.jsx("p",{className:"mt-1 md:mt-2 text-sm md:text-base text-gray-500",children:"Complete the steps below to create your team"})]}),e.jsx("div",{className:"mb-8 mt-8 hidden sm:flex w-full",children:e.jsx(q,{activeIndex:f,completeSteps:N,steps:[{label:"Type"},{label:"Details"},{label:"Skills"},{label:"Members"}]})}),i]})}export{ke as CreateTeamForm};
