import{n as ut,s as ue,t as de}from"./scheduler.Cb2xTO7j.js";new URL("sveltekit-internal://");function he(t,n){return t==="/"||n==="ignore"?t:n==="never"?t.endsWith("/")?t.slice(0,-1):t:n==="always"&&!t.endsWith("/")?t+"/":t}function pe(t){return t.split("%25").map(decodeURI).join("%25")}function ge(t){for(const n in t)t[n]=decodeURIComponent(t[n]);return t}function dt({href:t}){return t.split("#")[0]}const me=["href","pathname","search","toString","toJSON"];function _e(t,n,e){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(e(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of me)Object.defineProperty(r,a,{get(){return n(),t[a]},enumerable:!0,configurable:!0});return r}const ye="/__data.json",we=".html__data.json";function ve(t){return t.endsWith(".html")?t.replace(/\.html$/,we):t.replace(/\/$/,"")+ye}function be(...t){let n=5381;for(const e of t)if(typeof e=="string"){let r=e.length;for(;r;)n=n*33^e.charCodeAt(--r)}else if(ArrayBuffer.isView(e)){const r=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Ee(t){const n=atob(t),e=new Uint8Array(n.length);for(let r=0;r<n.length;r++)e[r]=n.charCodeAt(r);return e.buffer}const Gt=window.fetch;window.fetch=(t,n)=>((t instanceof Request?t.method:(n==null?void 0:n.method)||"GET")!=="GET"&&M.delete(yt(t)),Gt(t,n));const M=new Map;function ke(t,n){const e=yt(t,n),r=document.querySelector(e);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&M.set(e,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Ee(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,n)}function Se(t,n,e){if(M.size>0){const r=yt(t,e),a=M.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(e==null?void 0:e.cache))return new Response(a.body,a.init);M.delete(r)}}return window.fetch(n,e)}function yt(t,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${be(...a)}"]`}return r}const Ae=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Re(t){const n=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Le(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return ht(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ht(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const u=Ae.exec(c),[,h,g,d,_]=u;return n.push({name:d,matcher:_,optional:!!h,rest:!!g,chained:g?l===1&&i[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return ht(c)}).join("")}).join("")}/?$`),params:n}}function Ie(t){return!/^\([^)]+\)$/.test(t)}function Le(t){return t.slice(1).split("/").filter(Ie)}function Pe(t,n,e){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||e[c.matcher](l)){r[c.name]=l;const u=n[s+1],h=a[s+1];u&&!u.rest&&u.optional&&h&&c.chained&&(i=0),!u&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function ht(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Te({nodes:t,server_loads:n,dictionary:e,matchers:r}){const a=new Set(n);return Object.entries(e).map(([s,[c,l,u]])=>{const{pattern:h,params:g}=Re(s),d={id:s,exec:_=>{const f=h.exec(_);if(f)return Pe(f,g,r)},errors:[1,...u||[]].map(_=>t[_]),layouts:[0,...l||[]].map(i),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function Mt(t,n=JSON.parse){try{return n(sessionStorage[t])}catch{}}function Ut(t,n,e=JSON.stringify){const r=e(n);try{sessionStorage[t]=r}catch{}}const j=[];function wt(t,n=ut){let e;const r=new Set;function a(s){if(ue(t,s)&&(t=s,e)){const c=!j.length;for(const l of r)l[1](),j.push(l,t);if(c){for(let l=0;l<j.length;l+=2)j[l][0](j[l+1]);j.length=0}}}function o(s){a(s(t))}function i(s,c=ut){const l=[s,c];return r.add(l),r.size===1&&(e=n(a,o)||ut),s(t),()=>{r.delete(l),r.size===0&&e&&(e(),e=null)}}return{set:a,update:o,subscribe:i}}var Vt;const P=((Vt=globalThis.__sveltekit_1qo99ax)==null?void 0:Vt.base)??"";var Ft;const xe=((Ft=globalThis.__sveltekit_1qo99ax)==null?void 0:Ft.assets)??P,Ue="1722611780737",Ht="sveltekit:snapshot",Bt="sveltekit:scroll",vt="sveltekit:states",Kt="sveltekit:pageurl",N="sveltekit:history",q="sveltekit:navigation",J={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},z=location.origin;function bt(t){if(t instanceof URL)return t;let n=document.baseURI;if(!n){const e=document.getElementsByTagName("base");n=e.length?e[0].href:document.URL}return new URL(t,n)}function Et(){return{x:pageXOffset,y:pageYOffset}}function $(t,n){return t.getAttribute(`data-sveltekit-${n}`)}const Nt={...J,"":J.hover};function zt(t){let n=t.assignedSlot??t.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Yt(t,n){for(;t&&t!==n;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=zt(t)}}function gt(t,n){let e;try{e=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,a=!e||!!r||rt(e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(e==null?void 0:e.origin)===z&&t.hasAttribute("download");return{url:e,external:a,target:r,download:o}}function W(t){let n=null,e=null,r=null,a=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)r===null&&(r=$(s,"preload-code")),a===null&&(a=$(s,"preload-data")),n===null&&(n=$(s,"keepfocus")),e===null&&(e=$(s,"noscroll")),o===null&&(o=$(s,"reload")),i===null&&(i=$(s,"replacestate")),s=zt(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Nt[r??"off"],preload_data:Nt[a??"off"],keepfocus:c(n),noscroll:c(e),reload:c(o),replace_state:c(i)}}function Ot(t){const n=wt(t);let e=!0;function r(){e=!0,n.update(i=>i)}function a(i){e=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||e&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function Ne(){const{set:t,subscribe:n}=wt(!1);let e;async function r(){clearTimeout(e);try{const a=await fetch(`${xe}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Ue;return i&&(t(!0),clearTimeout(e)),i}catch{return!1}}return{subscribe:n,check:r}}function rt(t,n){return t.origin!==z||!t.pathname.startsWith(n)}const Oe=-1,je=-2,$e=-3,De=-4,Ce=-5,qe=-6;function Ve(t,n){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const e=t,r=Array(e.length);function a(o,i=!1){if(o===Oe)return;if(o===$e)return NaN;if(o===De)return 1/0;if(o===Ce)return-1/0;if(o===qe)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=e[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const u=new Set;r[o]=u;for(let d=1;d<s.length;d+=1)u.add(a(s[d]));break;case"Map":const h=new Map;r[o]=h;for(let d=1;d<s.length;d+=2)h.set(a(s[d]),a(s[d+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let d=1;d<s.length;d+=2)g[s[d]]=a(s[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const u=s[l];u!==je&&(c[l]=a(u))}}else{const c={};r[o]=c;for(const l in s){const u=s[l];c[l]=a(u)}}return r[o]}return a(0)}const Jt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Jt];const Fe=new Set([...Jt]);[...Fe];function Ge(t){return t.filter(n=>n!=null)}class at{constructor(n,e){this.status=n,typeof e=="string"?this.body={message:e}:e?this.body=e:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Wt{constructor(n,e){this.status=n,this.location=e}}class kt extends Error{constructor(n,e,r){super(r),this.status=n,this.text=e}}const Me="x-sveltekit-invalidated",He="x-sveltekit-trailing-slash";function X(t){return t instanceof at||t instanceof kt?t.status:500}function Be(t){return t instanceof kt?t.text:"Internal Error"}const O=Mt(Bt)??{},B=Mt(Ht)??{},x={url:Ot({}),page:Ot({}),navigating:wt(null),updated:Ne()};function ot(t){O[t]=Et()}function Xt(t,n){let e=t+1;for(;O[e];)delete O[e],e+=1;for(e=n+1;B[e];)delete B[e],e+=1}function V(t){return location.href=t.href,new Promise(()=>{})}function jt(){}let st,mt,Z,T,_t,F;const Zt=[],Q=[];let L=null;const Qt=[],Ke=[];let D=[],y={branch:[],error:null,url:null},St=!1,tt=!1,$t=!0,K=!1,G=!1,At=!1,Rt=!1,it,E,R,A,et;const H=new Set;async function rn(t,n,e){var a,o;document.URL!==location.href&&(location.href=location.href),F=t,st=Te(t),T=document.documentElement,_t=n,mt=t.nodes[0],Z=t.nodes[1],mt(),Z(),E=(a=history.state)==null?void 0:a[N],R=(o=history.state)==null?void 0:o[q],E||(E=R=Date.now(),history.replaceState({...history.state,[N]:E,[q]:R},""));const r=O[E];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),e?await tn(_t,e):Ze(location.href,{replaceState:!0}),Qe()}function ze(){Zt.length=0,Rt=!1}function te(t){Q.some(n=>n==null?void 0:n.snapshot)&&(B[t]=Q.map(n=>{var e;return(e=n==null?void 0:n.snapshot)==null?void 0:e.capture()}))}function ee(t){var n;(n=B[t])==null||n.forEach((e,r)=>{var a,o;(o=(a=Q[r])==null?void 0:a.snapshot)==null||o.restore(e)})}function Dt(){ot(E),Ut(Bt,O),te(R),Ut(Ht,B)}async function ne(t,n,e,r){return Y({type:"goto",url:bt(t),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:e,nav_token:r,accept:()=>{n.invalidateAll&&(Rt=!0)}})}async function Ye(t){if(t.id!==(L==null?void 0:L.id)){const n={};H.add(n),L={id:t.id,token:n,promise:ae({...t,preload:n}).then(e=>(H.delete(n),e.type==="loaded"&&e.state.error&&(L=null),e))}}return L.promise}async function pt(t){const n=st.find(e=>e.exec(oe(t)));n&&await Promise.all([...n.layouts,n.leaf].map(e=>e==null?void 0:e[1]()))}function re(t,n,e){var o;y=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),A=t.props.page,it=new F.root({target:n,props:{...t.props,stores:x,components:Q},hydrate:e}),ee(R);const a={from:null,to:{params:y.params,route:{id:((o=y.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};D.forEach(i=>i(a)),tt=!0}function nt({url:t,params:n,branch:e,status:r,error:a,route:o,form:i}){let s="never";if(P&&(t.pathname===P||t.pathname===P+"/"))s="always";else for(const d of e)(d==null?void 0:d.slash)!==void 0&&(s=d.slash);t.pathname=he(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:n,branch:e,error:a,route:o},props:{constructors:Ge(e).map(d=>d.node.component),page:A}};i!==void 0&&(c.props.form=i);let l={},u=!A,h=0;for(let d=0;d<Math.max(e.length,y.branch.length);d+=1){const _=e[d],f=y.branch[d];(_==null?void 0:_.data)!==(f==null?void 0:f.data)&&(u=!0),_&&(l={...l,..._.data},u&&(c.props[`data_${h}`]=l),h+=1)}return(!y.url||t.href!==y.url.href||y.error!==a||i!==void 0&&i!==A.form||u)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:u?l:A.data}),c}async function It({loader:t,parent:n,url:e,params:r,route:a,server_data_node:o}){var u,h,g;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((u=l.universal)!=null&&u.load){let d=function(...f){for(const m of f){const{href:b}=new URL(m,e);c.dependencies.add(b)}};const _={route:new Proxy(a,{get:(f,m)=>(s&&(c.route=!0),f[m])}),params:new Proxy(r,{get:(f,m)=>(s&&c.params.add(m),f[m])}),data:(o==null?void 0:o.data)??null,url:_e(e,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,m){let b;f instanceof Request?(b=f.url,m={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...m}):b=f;const I=new URL(b,e);return s&&d(I.href),I.origin===e.origin&&(b=I.href.slice(e.origin.length)),tt?Se(b,I.href,m):ke(b,m)},setHeaders:()=>{},depends:d,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,_)??null}return{node:l,loader:t,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((g=l.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function Ct(t,n,e,r,a,o){if(Rt)return!0;if(!a)return!1;if(a.parent&&t||a.route&&n||a.url&&e)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==y.params[i])return!0;for(const i of a.dependencies)if(Zt.some(s=>s(new URL(i))))return!0;return!1}function Lt(t,n){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?n??null:null}function Je(t,n){if(!t)return new Set(n.searchParams.keys());const e=new Set([...t.searchParams.keys(),...n.searchParams.keys()]);for(const r of e){const a=t.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&e.delete(r)}return e}function qt({error:t,url:n,route:e,params:r}){return{type:"loaded",state:{error:t,url:n,route:e,params:r,branch:[]},props:{page:A,constructors:[]}}}async function ae({id:t,invalidating:n,url:e,params:r,route:a,preload:o}){if((L==null?void 0:L.id)===t)return H.delete(L.token),L.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(p=>p==null?void 0:p().catch(()=>{})),l.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let u=null;const h=y.url?t!==y.url.pathname+y.url.search:!1,g=y.route?a.id!==y.route.id:!1,d=Je(y.url,e);let _=!1;const f=l.map((p,v)=>{var U;const k=y.branch[v],S=!!(p!=null&&p[0])&&((k==null?void 0:k.loader)!==p[1]||Ct(_,g,h,d,(U=k.server)==null?void 0:U.uses,r));return S&&(_=!0),S});if(f.some(Boolean)){try{u=await ce(e,f)}catch(p){const v=await C(p,{url:e,params:r,route:{id:t}});return H.has(o)?qt({error:v,url:e,params:r,route:a}):ct({status:X(p),error:v,url:e,route:a})}if(u.type==="redirect")return u}const m=u==null?void 0:u.nodes;let b=!1;const I=l.map(async(p,v)=>{var lt;if(!p)return;const k=y.branch[v],S=m==null?void 0:m[v];if((!S||S.type==="skip")&&p[1]===(k==null?void 0:k.loader)&&!Ct(b,g,h,d,(lt=k.universal)==null?void 0:lt.uses,r))return k;if(b=!0,(S==null?void 0:S.type)==="error")throw S;return It({loader:p[1],url:e,params:r,route:a,parent:async()=>{var xt;const Tt={};for(let ft=0;ft<v;ft+=1)Object.assign(Tt,(xt=await I[ft])==null?void 0:xt.data);return Tt},server_data_node:Lt(S===void 0&&p[0]?{type:"skip"}:S??null,p[0]?k==null?void 0:k.server:void 0)})});for(const p of I)p.catch(()=>{});const w=[];for(let p=0;p<l.length;p+=1)if(l[p])try{w.push(await I[p])}catch(v){if(v instanceof Wt)return{type:"redirect",location:v.location};if(H.has(o))return qt({error:await C(v,{params:r,url:e,route:{id:a.id}}),url:e,params:r,route:a});let k=X(v),S;if(m!=null&&m.includes(v))k=v.status??k,S=v.error;else if(v instanceof at)S=v.body;else{if(await x.updated.check())return await V(e);S=await C(v,{params:r,url:e,route:{id:a.id}})}const U=await We(p,w,i);return U?nt({url:e,params:r,branch:w.slice(0,U.idx).concat(U.node),status:k,error:S,route:a}):await ie(e,{id:a.id},S,k)}else w.push(void 0);return nt({url:e,params:r,branch:w,status:200,error:null,route:a,form:n?void 0:null})}async function We(t,n,e){for(;t--;)if(e[t]){let r=t;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await e[t](),loader:e[t],data:{},server:null,universal:null}}}catch{continue}}}async function ct({status:t,error:n,url:e,route:r}){const a={};let o=null;if(F.server_loads[0]===0)try{const l=await ce(e,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(e.origin!==z||e.pathname!==location.pathname||St)&&await V(e)}const s=await It({loader:mt,url:e,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Lt(o)}),c={node:await Z(),loader:Z,universal:null,server:null,data:null};return nt({url:e,params:a,branch:[s,c],status:t,error:n,route:null})}function Pt(t,n){if(!t||rt(t,P))return;let e;try{e=F.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const r=oe(e);for(const a of st){const o=a.exec(r);if(o)return{id:t.pathname+t.search,invalidating:n,route:a,params:ge(o),url:t}}}function oe(t){return pe(t.slice(P.length)||"/")}function se({url:t,type:n,intent:e,delta:r}){let a=!1;const o=fe(y,e,t,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return K||Qt.forEach(s=>s(i)),a?null:o}async function Y({type:t,url:n,popped:e,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=jt,block:u=jt}){const h=Pt(n,!1),g=se({url:n,type:t,delta:e==null?void 0:e.delta,intent:h});if(!g){u();return}const d=E,_=R;l(),K=!0,tt&&x.navigating.set(g.navigation),et=c;let f=h&&await ae(h);if(!f){if(rt(n,P))return await V(n);f=await ie(n,{id:null},await C(new kt(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,et!==c)return g.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await ct({status:500,error:await C(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return ne(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await x.updated.check()&&await V(n);if(ze(),ot(d),te(_),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=e?e.state:i,!e){const w=o?0:1,p={[N]:E+=w,[q]:R+=w,[vt]:i};(o?history.replaceState:history.pushState).call(history,p,"",n),o||Xt(E,R)}if(L=null,f.props.page.state=i,tt){y=f.state,f.props.page&&(f.props.page.url=n);const w=(await Promise.all(Ke.map(p=>p(g.navigation)))).filter(p=>typeof p=="function");if(w.length>0){let p=function(){D=D.filter(v=>!w.includes(v))};w.push(p),D.push(...w)}it.$set(f.props),At=!0}else re(f,_t,!1);const{activeElement:m}=document;await de();const b=e?e.scroll:a?Et():null;if($t){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const I=document.activeElement!==m&&document.activeElement!==document.body;!r&&!I&&en(),$t=!0,f.props.page&&(A=f.props.page),K=!1,t==="popstate"&&ee(R),g.fulfil(void 0),D.forEach(w=>w(g.navigation)),x.navigating.set(null)}async function ie(t,n,e,r){return t.origin===z&&t.pathname===location.pathname&&!St?await ct({status:r,error:e,url:t,route:n}):await V(t)}function Xe(){let t;T.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function n(o){r(o.composedPath()[0],1)}T.addEventListener("mousedown",n),T.addEventListener("touchstart",n,{passive:!0});const e=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(pt(i.target.href),e.unobserve(i.target))},{threshold:0});function r(o,i){const s=Yt(o,T);if(!s)return;const{url:c,external:l,download:u}=gt(s,P);if(l||u)return;const h=W(s);if(!h.reload)if(i<=h.preload_data){const g=Pt(c,!1);g&&Ye(g)}else i<=h.preload_code&&pt(c.pathname)}function a(){e.disconnect();for(const o of T.querySelectorAll("a")){const{url:i,external:s,download:c}=gt(o,P);if(s||c)continue;const l=W(o);l.reload||(l.preload_code===J.viewport&&e.observe(o),l.preload_code===J.eager&&pt(i.pathname))}}D.push(a),a()}function C(t,n){if(t instanceof at)return t.body;const e=X(t),r=Be(t);return F.hooks.handleError({error:t,event:n,status:e,message:r})??{message:r}}function Ze(t,n={}){return t=bt(t),t.origin!==z?Promise.reject(new Error("goto: invalid URL")):ne(t,n,0)}function an(t,n){ot(E);const e={[N]:E+=1,[q]:R,[Kt]:A.url.href,[vt]:n};history.pushState(e,"",bt(t)),At=!0,A={...A,state:n},it.$set({page:A}),Xt(E,R)}function Qe(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let r=!1;if(Dt(),!K){const a=fe(y,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Qt.forEach(i=>i(o))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Dt()}),(n=navigator.connection)!=null&&n.saveData||Xe(),T.addEventListener("click",async e=>{var g;if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=Yt(e.composedPath()[0],T);if(!r)return;const{url:a,external:o,target:i,download:s}=gt(r,P);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=W(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;if(o||c.reload){se({url:a,type:"link"})?K=!0:e.preventDefault();return}const[u,h]=a.href.split("#");if(h!==void 0&&u===dt(location)){const[,d]=y.url.href.split("#");if(d===h){e.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=r.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(G=!0,ot(E),t(a),!c.replace_state)return;G=!1}e.preventDefault(),await new Promise(d=>{requestAnimationFrame(()=>{setTimeout(d,0)}),setTimeout(d,100)}),Y({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),T.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(rt(i,P))return;const s=e.target,c=W(s);if(c.reload)return;e.preventDefault(),e.stopPropagation();const l=new FormData(s),u=a==null?void 0:a.getAttribute("name");u&&l.append(u,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(l).toString(),Y({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[N]){const a=e.state[N];if(et={},a===E)return;const o=O[a],i=e.state[vt]??{},s=new URL(e.state[Kt]??location.href),c=e.state[q],l=dt(location)===dt(y.url);if(c===R&&(At||l)){t(s),O[E]=Et(),o&&scrollTo(o.x,o.y),i!==A.state&&(A={...A,state:i},it.$set({page:A})),E=a;return}const h=a-E;await Y({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{E=a,R=c},block:()=>{history.go(-h)},nav_token:et})}else if(!G){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[N]:++E,[q]:R},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&x.navigating.set(null)});function t(e){y.url=e,x.page.set({...A,url:e}),x.page.notify()}}async function tn(t,{status:n=200,error:e,node_ids:r,params:a,route:o,data:i,form:s}){St=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Pt(c,!1)||{});let l;try{const u=r.map(async(d,_)=>{const f=i[_];return f!=null&&f.uses&&(f.uses=le(f.uses)),It({loader:F.nodes[d],url:c,params:a,route:o,parent:async()=>{const m={};for(let b=0;b<_;b+=1)Object.assign(m,(await u[b]).data);return m},server_data_node:Lt(f)})}),h=await Promise.all(u),g=st.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let _=0;_<d.length;_++)d[_]||h.splice(_,0,void 0)}l=nt({url:c,params:a,branch:h,status:n,error:e,form:s,route:g??null})}catch(u){if(u instanceof Wt){await V(new URL(u.location,location.href));return}l=await ct({status:X(u),error:await C(u,{url:c,params:a,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),re(l,t,!0)}async function ce(t,n){var a;const e=new URL(t);e.pathname=ve(t.pathname),t.pathname.endsWith("/")&&e.searchParams.append(He,"1"),e.searchParams.append(Me,n.map(o=>o?"1":"0").join(""));const r=await Gt(e.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new at(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(g){return Ve(g,{Promise:d=>new Promise((_,f)=>{i.set(d,{fulfil:_,reject:f})})})}let u="";for(;;){const{done:g,value:d}=await s.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const _=u.indexOf(`
`);if(_===-1)break;const f=JSON.parse(u.slice(0,_));if(u=u.slice(_+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(m=>{(m==null?void 0:m.type)==="data"&&(m.uses=le(m.uses),m.data=l(m.data))}),o(f);else if(f.type==="chunk"){const{id:m,data:b,error:I}=f,w=i.get(m);i.delete(m),I?w.reject(l(I)):w.fulfil(l(b))}}}})}function le(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function en(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const n=document.body,e=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),e!==null?n.setAttribute("tabindex",e):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function fe(t,n,e,r){var c,l;let a,o;const i=new Promise((u,h)=>{a=u,o=h});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:e&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:e},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{rn as a,an as p,x as s,wt as w};
