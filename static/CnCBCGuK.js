import{_ as H}from"./eVlCBXC_.js";import L from"./SpcEjXT5.js";import{f,o as p,j as m,w as i,k as g,s as U,q as n,v as w,ak as W,al as q,x as E,l as G,m as I,am as K,B as R,A as x,an as F,y as C,b as u,ao as J,ap as X,aq as Z,ar as Q,as as Y,at as A,g as ee,h as ae,au as te,c as V,a as b,d as S,t as se,n as N,r as T,av as oe,aw as ne,ax as D,_ as re,M as le,ay as ie,az as ce,S as de,aA as j,aB as ue,$ as pe,aC as fe}from"./BUqOXhEY.js";const _e=f({__name:"Button",props:{variant:{},size:{},class:{},asChild:{type:Boolean},as:{default:"button"}},setup(t){const o=t;return(a,l)=>(p(),m(n(W),{as:a.as,"as-child":a.asChild,class:U(n(w)(n(me)({variant:a.variant,size:a.size}),o.class))},{default:i(()=>[g(a.$slots,"default")]),_:3},8,["as","as-child","class"]))}}),me=q("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",xs:"h-7 rounded px-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),he=f({__name:"DropdownMenu",props:{defaultOpen:{type:Boolean},open:{type:Boolean},dir:{},modal:{type:Boolean}},emits:["update:open"],setup(t,{emit:o}){const e=E(t,o);return(s,y)=>(p(),m(n(K),G(I(n(e))),{default:i(()=>[g(s.$slots,"default")]),_:3},16))}}),ge=f({__name:"DropdownMenuTrigger",props:{disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(t){const a=R(t);return(l,e)=>(p(),m(n(F),x({class:"outline-none"},n(a)),{default:i(()=>[g(l.$slots,"default")]),_:3},16))}}),ye=f({__name:"DropdownMenuContent",props:{forceMount:{type:Boolean},loop:{type:Boolean},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","closeAutoFocus"],setup(t,{emit:o}){const a=t,l=o,e=C(()=>{const{class:y,...v}=a;return v}),s=E(e,l);return(y,v)=>(p(),m(n(X),null,{default:i(()=>[u(n(J),x(n(s),{class:n(w)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a.class)}),{default:i(()=>[g(y.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),ve=f({__name:"DropdownMenuGroup",props:{asChild:{type:Boolean},as:{}},setup(t){const o=t;return(a,l)=>(p(),m(n(Z),G(I(o)),{default:i(()=>[g(a.$slots,"default")]),_:3},16))}}),be=f({__name:"DropdownMenuItem",props:{disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{},inset:{type:Boolean}},setup(t){const o=t,a=C(()=>{const{class:e,...s}=o;return s}),l=R(a);return(e,s)=>(p(),m(n(Q),x(n(l),{class:n(w)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e.inset&&"pl-8",o.class)}),{default:i(()=>[g(e.$slots,"default")]),_:3},16,["class"]))}}),De=f({__name:"DropdownMenuSeparator",props:{asChild:{type:Boolean},as:{},class:{}},setup(t){const o=t,a=C(()=>{const{class:l,...e}=o;return e});return(l,e)=>(p(),m(n(Y),x(a.value,{class:n(w)("-mx-1 my-1 h-px bg-muted",o.class)}),null,16,["class"]))}}),we=f({__name:"DropdownMenuLabel",props:{asChild:{type:Boolean},as:{},class:{},inset:{type:Boolean}},setup(t){const o=t,a=C(()=>{const{class:e,...s}=o;return s}),l=R(a);return(e,s)=>(p(),m(n(A),x(n(l),{class:n(w)("px-2 py-1.5 text-sm font-semibold",e.inset&&"pl-8",o.class)}),{default:i(()=>[g(e.$slots,"default")]),_:3},16,["class"]))}}),xe={class:"p-4 flex flex-col gap-2 rounded-2xl md:rounded-2xl shadow-[0_0px_8px_0px_rgba(0,0,0,0.1)] bg-background border-2"},Be={class:"flex items-center gap-5"},Ce={class:"flex flex-wrap mr-auto"},Pe={class:"font-mono text-xl"},Me={class:"flex flex-wrap ml-auto"},$e={key:0},ze={key:1},Oe={class:"flex items-center gap-2"},Se=b("span",{class:"w-full"},"登入",-1),Ee=f({__name:"top",setup(t){const o=ee(),a=ae();te();const l={async loginWithGoogle(){const e=T("localhost:3000");window.location.host==="localhost:3000"?e.value="localhost:3000":e.value="bearyep.github.io/STP_Reservation/",console.log(e),await o.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.protocol+"//"+window.location.host+"/auth/callback"}})}};return(e,s)=>{const y=H,v=L,P=_e,B=ge,r=we,M=De,$=be,z=ve,O=ye,d=he;return p(),V("div",null,[b("div",xe,[b("div",Be,[b("div",Ce,[b("div",Pe,[u(y,{to:"/",class:"font-mono text-2xl mx-2"},{default:i(()=>[S(" STP預約系統 ")]),_:1})])]),b("div",Me,[n(a)?(p(),V("div",$e,[u(d,null,{default:i(()=>[u(B,{"as-child":""},{default:i(()=>[u(P,{size:"xs",variant:"ghost"},{default:i(()=>[u(v,{name:"ri:more-fill"})]),_:1})]),_:1}),u(O,null,{default:i(()=>[u(r,null,{default:i(()=>[S(se(n(a).user_metadata.full_name),1)]),_:1}),u(M),u(z,null,{default:i(()=>[u($,{class:"cursor-pointer",onClick:s[0]||(s[0]=_=>("navigateTo"in e?e.navigateTo:n(N))("/profile_edit"))},{default:i(()=>[S(" 個人資料編輯 ")]),_:1}),u($,{class:"cursor-pointer",onClick:s[1]||(s[1]=_=>("navigateTo"in e?e.navigateTo:n(N))("/logout"))},{default:i(()=>[S(" 登出 ")]),_:1})]),_:1})]),_:1})]),_:1})])):(p(),V("div",ze,[u(P,{variant:"outline",onClick:l.loginWithGoogle},{default:i(()=>[b("div",Oe,[u(v,{name:"devicon:google",size:"20"}),Se])]),_:1},8,["onClick"])]))])])])])}}}),Ge=f({__name:"Label",props:{for:{},asChild:{type:Boolean},as:{},class:{}},setup(t){const o=t,a=C(()=>{const{class:l,...e}=o;return e});return(l,e)=>(p(),m(n(oe),x(a.value,{class:n(w)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",o.class)}),{default:i(()=>[g(l.$slots,"default")]),_:3},16,["class"]))}}),Te=t=>t==="defer"||t===!1;function Ie(...t){var O;const o=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(o);let[a,l,e={}]=t;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof l!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const s=ne(),y=l,v=()=>D.value,P=()=>s.isHydrating?s.payload.data[a]:s.static.data[a];e.server=e.server??!0,e.default=e.default??v,e.getCachedData=e.getCachedData??P,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??D.deep,e.dedupe=e.dedupe??"cancel";const B=()=>e.getCachedData(a,s)!=null;if(!s._asyncData[a]||!e.immediate){(O=s.payload._errors)[a]??(O[a]=D.errorValue);const d=e.deep?T:re;s._asyncData[a]={data:d(e.getCachedData(a,s)??e.default()),pending:T(!B()),error:le(s.payload._errors,a),status:T("idle"),_default:e.default}}const r={...s._asyncData[a]};delete r._default,r.refresh=r.execute=(d={})=>{if(s._asyncDataPromises[a]){if(Te(d.dedupe??e.dedupe))return s._asyncDataPromises[a];s._asyncDataPromises[a].cancelled=!0}if((d._initial||s.isHydrating&&d._initial!==!1)&&B())return Promise.resolve(e.getCachedData(a,s));r.pending.value=!0,r.status.value="pending";const _=new Promise((h,c)=>{try{h(y(s))}catch(k){c(k)}}).then(async h=>{if(_.cancelled)return s._asyncDataPromises[a];let c=h;e.transform&&(c=await e.transform(h)),e.pick&&(c=Ve(c,e.pick)),s.payload.data[a]=c,r.data.value=c,r.error.value=D.errorValue,r.status.value="success"}).catch(h=>{if(_.cancelled)return s._asyncDataPromises[a];r.error.value=ue(h),r.data.value=n(e.default()),r.status.value="error"}).finally(()=>{_.cancelled||(r.pending.value=!1,delete s._asyncDataPromises[a])});return s._asyncDataPromises[a]=_,s._asyncDataPromises[a]},r.clear=()=>ke(s,a);const M=()=>r.refresh({_initial:!0}),$=e.server!==!1&&s.payload.serverRendered;{const d=pe();if(d&&!d._nuxtOnBeforeMountCbs){d._nuxtOnBeforeMountCbs=[];const c=d._nuxtOnBeforeMountCbs;ie(()=>{c.forEach(k=>{k()}),c.splice(0,c.length)}),ce(()=>c.splice(0,c.length))}$&&s.isHydrating&&(r.error.value||B())?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):d&&(s.payload.serverRendered&&s.isHydrating||e.lazy)&&e.immediate?d._nuxtOnBeforeMountCbs.push(M):e.immediate&&M();const _=fe();if(e.watch){const c=de(e.watch,()=>r.refresh());_&&j(c)}const h=s.hook("app:data:refresh",async c=>{(!c||c.includes(a))&&await r.refresh()});_&&j(h)}const z=Promise.resolve(s._asyncDataPromises[a]).then(()=>r);return Object.assign(z,r),z}function ke(t,o){o in t.payload.data&&(t.payload.data[o]=void 0),o in t.payload._errors&&(t.payload._errors[o]=D.errorValue),t._asyncData[o]&&(t._asyncData[o].data.value=void 0,t._asyncData[o].error.value=D.errorValue,t._asyncData[o].pending.value=!1,t._asyncData[o].status.value="idle"),o in t._asyncDataPromises&&(t._asyncDataPromises[o]&&(t._asyncDataPromises[o].cancelled=!0),t._asyncDataPromises[o]=void 0)}function Ve(t,o){const a={};for(const l of o)a[l]=t[l];return a}export{_e as _,Ge as a,Ee as b,Ie as u};
