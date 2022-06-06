const _u=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};_u();function fi(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const vu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yu=fi(vu);function Fa(t){return!!t||t===""}function di(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=me(r)?wu(r):di(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(me(t))return t;if(de(t))return t}}const bu=/;(?![^(]*\))/g,Eu=/:(.+)/;function wu(t){const e={};return t.split(bu).forEach(n=>{if(n){const r=n.split(Eu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function hi(t){let e="";if(me(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const r=hi(t[n]);r&&(e+=r+" ")}else if(de(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Iu=t=>me(t)?t:t==null?"":j(t)||de(t)&&(t.toString===Wa||!F(t.toString))?JSON.stringify(t,ja,2):String(t),ja=(t,e)=>e&&e.__v_isRef?ja(t,e.value):an(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Ha(e)?{[`Set(${e.size})`]:[...e.values()]}:de(e)&&!j(e)&&!Va(e)?String(e):e,ee={},on=[],$e=()=>{},Tu=()=>!1,Ru=/^on[^a-z]/,zr=t=>Ru.test(t),pi=t=>t.startsWith("onUpdate:"),be=Object.assign,mi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ou=Object.prototype.hasOwnProperty,q=(t,e)=>Ou.call(t,e),j=Array.isArray,an=t=>Gr(t)==="[object Map]",Ha=t=>Gr(t)==="[object Set]",F=t=>typeof t=="function",me=t=>typeof t=="string",gi=t=>typeof t=="symbol",de=t=>t!==null&&typeof t=="object",_i=t=>de(t)&&F(t.then)&&F(t.catch),Wa=Object.prototype.toString,Gr=t=>Wa.call(t),Su=t=>Gr(t).slice(8,-1),Va=t=>Gr(t)==="[object Object]",vi=t=>me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,yr=fi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Au=/-(\w)/g,Qe=Jr(t=>t.replace(Au,(e,n)=>n?n.toUpperCase():"")),Cu=/\B([A-Z])/g,wn=Jr(t=>t.replace(Cu,"-$1").toLowerCase()),Yr=Jr(t=>t.charAt(0).toUpperCase()+t.slice(1)),vs=Jr(t=>t?`on${Yr(t)}`:""),Wn=(t,e)=>!Object.is(t,e),br=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},kr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},xr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let lo;const Pu=()=>lo||(lo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ge;class ku{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ge&&(this.parent=Ge,this.index=(Ge.scopes||(Ge.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ge;try{return Ge=this,e()}finally{Ge=n}}}on(){Ge=this}off(){Ge=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function xu(t,e=Ge){e&&e.active&&e.effects.push(t)}const yi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},qa=t=>(t.w&Rt)>0,Ka=t=>(t.n&Rt)>0,Nu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Rt},Du=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];qa(s)&&!Ka(s)?s.delete(t):e[n++]=s,s.w&=~Rt,s.n&=~Rt}e.length=n}},Us=new WeakMap;let Nn=0,Rt=1;const Bs=30;let Be;const Dt=Symbol(""),$s=Symbol("");class bi{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,xu(this,r)}run(){if(!this.active)return this.fn();let e=Be,n=Et;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Be,Be=this,Et=!0,Rt=1<<++Nn,Nn<=Bs?Nu(this):uo(this),this.fn()}finally{Nn<=Bs&&Du(this),Rt=1<<--Nn,Be=this.parent,Et=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Be===this?this.deferStop=!0:this.active&&(uo(this),this.onStop&&this.onStop(),this.active=!1)}}function uo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Et=!0;const za=[];function In(){za.push(Et),Et=!1}function Tn(){const t=za.pop();Et=t===void 0?!0:t}function Pe(t,e,n){if(Et&&Be){let r=Us.get(t);r||Us.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=yi()),Ga(s)}}function Ga(t,e){let n=!1;Nn<=Bs?Ka(t)||(t.n|=Rt,n=!qa(t)):n=!t.has(Be),n&&(t.add(Be),Be.deps.push(t))}function it(t,e,n,r,s,i){const o=Us.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&j(t))o.forEach((c,u)=>{(u==="length"||u>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":j(t)?vi(n)&&a.push(o.get("length")):(a.push(o.get(Dt)),an(t)&&a.push(o.get($s)));break;case"delete":j(t)||(a.push(o.get(Dt)),an(t)&&a.push(o.get($s)));break;case"set":an(t)&&a.push(o.get(Dt));break}if(a.length===1)a[0]&&Fs(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Fs(yi(c))}}function Fs(t,e){const n=j(t)?t:[...t];for(const r of n)r.computed&&fo(r);for(const r of n)r.computed||fo(r)}function fo(t,e){(t!==Be||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Mu=fi("__proto__,__v_isRef,__isVue"),Ja=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(gi)),Lu=Ei(),Uu=Ei(!1,!0),Bu=Ei(!0),ho=$u();function $u(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)Pe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(G)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){In();const r=G(this)[e].apply(this,n);return Tn(),r}}),t}function Ei(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?tf:ec:e?Za:Qa).get(r))return r;const o=j(r);if(!t&&o&&q(ho,s))return Reflect.get(ho,s,i);const a=Reflect.get(r,s,i);return(gi(s)?Ja.has(s):Mu(s))||(t||Pe(r,"get",s),e)?a:pe(a)?o&&vi(s)?a:a.value:de(a)?t?tc(a):Ht(a):a}}const Fu=Ya(),ju=Ya(!0);function Ya(t=!1){return function(n,r,s,i){let o=n[r];if(Vn(o)&&pe(o)&&!pe(s))return!1;if(!t&&!Vn(s)&&(js(s)||(s=G(s),o=G(o)),!j(n)&&pe(o)&&!pe(s)))return o.value=s,!0;const a=j(n)&&vi(r)?Number(r)<n.length:q(n,r),c=Reflect.set(n,r,s,i);return n===G(i)&&(a?Wn(s,o)&&it(n,"set",r,s):it(n,"add",r,s)),c}}function Hu(t,e){const n=q(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&it(t,"delete",e,void 0),r}function Wu(t,e){const n=Reflect.has(t,e);return(!gi(e)||!Ja.has(e))&&Pe(t,"has",e),n}function Vu(t){return Pe(t,"iterate",j(t)?"length":Dt),Reflect.ownKeys(t)}const Xa={get:Lu,set:Fu,deleteProperty:Hu,has:Wu,ownKeys:Vu},qu={get:Bu,set(t,e){return!0},deleteProperty(t,e){return!0}},Ku=be({},Xa,{get:Uu,set:ju}),wi=t=>t,Xr=t=>Reflect.getPrototypeOf(t);function fr(t,e,n=!1,r=!1){t=t.__v_raw;const s=G(t),i=G(e);n||(e!==i&&Pe(s,"get",e),Pe(s,"get",i));const{has:o}=Xr(s),a=r?wi:n?Ri:qn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function dr(t,e=!1){const n=this.__v_raw,r=G(n),s=G(t);return e||(t!==s&&Pe(r,"has",t),Pe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function hr(t,e=!1){return t=t.__v_raw,!e&&Pe(G(t),"iterate",Dt),Reflect.get(t,"size",t)}function po(t){t=G(t);const e=G(this);return Xr(e).has.call(e,t)||(e.add(t),it(e,"add",t,t)),this}function mo(t,e){e=G(e);const n=G(this),{has:r,get:s}=Xr(n);let i=r.call(n,t);i||(t=G(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Wn(e,o)&&it(n,"set",t,e):it(n,"add",t,e),this}function go(t){const e=G(this),{has:n,get:r}=Xr(e);let s=n.call(e,t);s||(t=G(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&it(e,"delete",t,void 0),i}function _o(){const t=G(this),e=t.size!==0,n=t.clear();return e&&it(t,"clear",void 0,void 0),n}function pr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=G(o),c=e?wi:t?Ri:qn;return!t&&Pe(a,"iterate",Dt),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function mr(t,e,n){return function(...r){const s=this.__v_raw,i=G(s),o=an(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?wi:e?Ri:qn;return!e&&Pe(i,"iterate",c?$s:Dt),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[l(f[0]),l(f[1])]:l(f),done:h}},[Symbol.iterator](){return this}}}}function ct(t){return function(...e){return t==="delete"?!1:this}}function zu(){const t={get(i){return fr(this,i)},get size(){return hr(this)},has:dr,add:po,set:mo,delete:go,clear:_o,forEach:pr(!1,!1)},e={get(i){return fr(this,i,!1,!0)},get size(){return hr(this)},has:dr,add:po,set:mo,delete:go,clear:_o,forEach:pr(!1,!0)},n={get(i){return fr(this,i,!0)},get size(){return hr(this,!0)},has(i){return dr.call(this,i,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:pr(!0,!1)},r={get(i){return fr(this,i,!0,!0)},get size(){return hr(this,!0)},has(i){return dr.call(this,i,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:pr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=mr(i,!1,!1),n[i]=mr(i,!0,!1),e[i]=mr(i,!1,!0),r[i]=mr(i,!0,!0)}),[t,n,e,r]}const[Gu,Ju,Yu,Xu]=zu();function Ii(t,e){const n=e?t?Xu:Yu:t?Ju:Gu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(q(n,s)&&s in r?n:r,s,i)}const Qu={get:Ii(!1,!1)},Zu={get:Ii(!1,!0)},ef={get:Ii(!0,!1)},Qa=new WeakMap,Za=new WeakMap,ec=new WeakMap,tf=new WeakMap;function nf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rf(t){return t.__v_skip||!Object.isExtensible(t)?0:nf(Su(t))}function Ht(t){return Vn(t)?t:Ti(t,!1,Xa,Qu,Qa)}function sf(t){return Ti(t,!1,Ku,Zu,Za)}function tc(t){return Ti(t,!0,qu,ef,ec)}function Ti(t,e,n,r,s){if(!de(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=rf(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function cn(t){return Vn(t)?cn(t.__v_raw):!!(t&&t.__v_isReactive)}function Vn(t){return!!(t&&t.__v_isReadonly)}function js(t){return!!(t&&t.__v_isShallow)}function nc(t){return cn(t)||Vn(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function rc(t){return kr(t,"__v_skip",!0),t}const qn=t=>de(t)?Ht(t):t,Ri=t=>de(t)?tc(t):t;function sc(t){Et&&Be&&(t=G(t),Ga(t.dep||(t.dep=yi())))}function ic(t,e){t=G(t),t.dep&&Fs(t.dep)}function pe(t){return!!(t&&t.__v_isRef===!0)}function oc(t){return ac(t,!1)}function of(t){return ac(t,!0)}function ac(t,e){return pe(t)?t:new af(t,e)}class af{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:qn(e)}get value(){return sc(this),this._value}set value(e){e=this.__v_isShallow?e:G(e),Wn(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:qn(e),ic(this))}}function Mt(t){return pe(t)?t.value:t}const cf={get:(t,e,n)=>Mt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return pe(s)&&!pe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function cc(t){return cn(t)?t:new Proxy(t,cf)}class lf{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new bi(e,()=>{this._dirty||(this._dirty=!0,ic(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=G(this);return sc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function uf(t,e,n=!1){let r,s;const i=F(t);return i?(r=t,s=$e):(r=t.get,s=t.set),new lf(r,s,i||!s,n)}function wt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){tr(i,e,n)}return s}function Fe(t,e,n,r){if(F(t)){const i=wt(t,e,n,r);return i&&_i(i)&&i.catch(o=>{tr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Fe(t[i],e,n,r));return s}function tr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){wt(c,null,10,[t,o,a]);return}}ff(t,n,s,r)}function ff(t,e,n,r=!0){console.error(t)}let Nr=!1,Hs=!1;const Ce=[];let nt=0;const Un=[];let Dn=null,en=0;const Bn=[];let dt=null,tn=0;const lc=Promise.resolve();let Oi=null,Ws=null;function uc(t){const e=Oi||lc;return t?e.then(this?t.bind(this):t):e}function df(t){let e=nt+1,n=Ce.length;for(;e<n;){const r=e+n>>>1;Kn(Ce[r])<t?e=r+1:n=r}return e}function fc(t){(!Ce.length||!Ce.includes(t,Nr&&t.allowRecurse?nt+1:nt))&&t!==Ws&&(t.id==null?Ce.push(t):Ce.splice(df(t.id),0,t),dc())}function dc(){!Nr&&!Hs&&(Hs=!0,Oi=lc.then(gc))}function hf(t){const e=Ce.indexOf(t);e>nt&&Ce.splice(e,1)}function hc(t,e,n,r){j(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),dc()}function pf(t){hc(t,Dn,Un,en)}function pc(t){hc(t,dt,Bn,tn)}function Qr(t,e=null){if(Un.length){for(Ws=e,Dn=[...new Set(Un)],Un.length=0,en=0;en<Dn.length;en++)Dn[en]();Dn=null,en=0,Ws=null,Qr(t,e)}}function mc(t){if(Qr(),Bn.length){const e=[...new Set(Bn)];if(Bn.length=0,dt){dt.push(...e);return}for(dt=e,dt.sort((n,r)=>Kn(n)-Kn(r)),tn=0;tn<dt.length;tn++)dt[tn]();dt=null,tn=0}}const Kn=t=>t.id==null?1/0:t.id;function gc(t){Hs=!1,Nr=!0,Qr(t),Ce.sort((n,r)=>Kn(n)-Kn(r));const e=$e;try{for(nt=0;nt<Ce.length;nt++){const n=Ce[nt];n&&n.active!==!1&&wt(n,null,14)}}finally{nt=0,Ce.length=0,mc(),Nr=!1,Oi=null,(Ce.length||Un.length||Bn.length)&&gc(t)}}function mf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ee;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=r[l]||ee;h&&(s=n.map(m=>m.trim())),f&&(s=n.map(xr))}let a,c=r[a=vs(e)]||r[a=vs(Qe(e))];!c&&i&&(c=r[a=vs(wn(e))]),c&&Fe(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Fe(u,t,6,s)}}function _c(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!F(t)){const c=u=>{const l=_c(u,e,!0);l&&(a=!0,be(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(j(i)?i.forEach(c=>o[c]=null):be(o,i),r.set(t,o),o)}function Zr(t,e){return!t||!zr(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,wn(e))||q(t,e))}let xe=null,vc=null;function Dr(t){const e=xe;return xe=t,vc=t&&t.type.__scopeId||null,e}function xt(t,e=xe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ao(-1);const i=Dr(e),o=t(...s);return Dr(i),r._d&&Ao(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function ys(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:f,data:h,setupState:m,ctx:w,inheritAttrs:D}=t;let P,R;const E=Dr(t);try{if(n.shapeFlag&4){const $=s||r;P=Ue(l.call($,$,f,i,m,h,w)),R=c}else{const $=e;P=Ue($.length>1?$(i,{attrs:c,slots:a,emit:u}):$(i,null)),R=e.props?c:_f(c)}}catch($){$n.length=0,tr($,t,1),P=oe(Bt)}let A=P;if(R&&D!==!1){const $=Object.keys(R),{shapeFlag:V}=A;$.length&&V&7&&(o&&$.some(pi)&&(R=vf(R,o)),A=mn(A,R))}return n.dirs&&(A=mn(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),P=A,Dr(E),P}function gf(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Ur(r)){if(r.type!==Bt||r.children==="v-if"){if(e)return;e=r}}else return}return e}const _f=t=>{let e;for(const n in t)(n==="class"||n==="style"||zr(n))&&((e||(e={}))[n]=t[n]);return e},vf=(t,e)=>{const n={};for(const r in t)(!pi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function yf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?vo(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let f=0;f<l.length;f++){const h=l[f];if(o[h]!==r[h]&&!Zr(u,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?vo(r,o,u):!0:!!o;return!1}function vo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Zr(n,i))return!0}return!1}function Si({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const bf=t=>t.__isSuspense,Ef={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,u){t==null?If(e,n,r,s,i,o,a,c,u):Tf(t,e,n,r,s,o,a,c,u)},hydrate:Rf,create:Ai,normalize:Of},wf=Ef;function zn(t,e){const n=t.props&&t.props[e];F(n)&&n()}function If(t,e,n,r,s,i,o,a,c){const{p:u,o:{createElement:l}}=c,f=l("div"),h=t.suspense=Ai(t,s,r,e,f,n,i,o,a,c);u(null,h.pendingBranch=t.ssContent,f,null,r,h,i,o),h.deps>0?(zn(t,"onPending"),zn(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),ln(h,t.ssFallback)):h.resolve()}function Tf(t,e,n,r,s,i,o,a,{p:c,um:u,o:{createElement:l}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const h=e.ssContent,m=e.ssFallback,{activeBranch:w,pendingBranch:D,isInFallback:P,isHydrating:R}=f;if(D)f.pendingBranch=h,gt(h,D)?(c(D,h,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():P&&(c(w,m,n,r,s,null,i,o,a),ln(f,m))):(f.pendingId++,R?(f.isHydrating=!1,f.activeBranch=D):u(D,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=l("div"),P?(c(null,h,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():(c(w,m,n,r,s,null,i,o,a),ln(f,m))):w&&gt(h,w)?(c(w,h,n,r,s,f,i,o,a),f.resolve(!0)):(c(null,h,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0&&f.resolve()));else if(w&&gt(h,w))c(w,h,n,r,s,f,i,o,a),ln(f,h);else if(zn(e,"onPending"),f.pendingBranch=h,f.pendingId++,c(null,h,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:E,pendingId:A}=f;E>0?setTimeout(()=>{f.pendingId===A&&f.fallback(m)},E):E===0&&f.fallback(m)}}function Ai(t,e,n,r,s,i,o,a,c,u,l=!1){const{p:f,m:h,um:m,n:w,o:{parentNode:D,remove:P}}=u,R=xr(t.props&&t.props.timeout),E={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof R=="number"?R:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:l,isUnmounted:!1,effects:[],resolve(A=!1){const{vnode:$,activeBranch:V,pendingBranch:z,pendingId:ae,effects:he,parentComponent:ie,container:_e}=E;if(E.isHydrating)E.isHydrating=!1;else if(!A){const Ze=V&&z.transition&&z.transition.mode==="out-in";Ze&&(V.transition.afterLeave=()=>{ae===E.pendingId&&h(z,_e,Ve,0)});let{anchor:Ve}=E;V&&(Ve=w(V),m(V,ie,E,!0)),Ze||h(z,_e,Ve,0)}ln(E,z),E.pendingBranch=null,E.isInFallback=!1;let le=E.parent,Ee=!1;for(;le;){if(le.pendingBranch){le.effects.push(...he),Ee=!0;break}le=le.parent}Ee||pc(he),E.effects=[],zn($,"onResolve")},fallback(A){if(!E.pendingBranch)return;const{vnode:$,activeBranch:V,parentComponent:z,container:ae,isSVG:he}=E;zn($,"onFallback");const ie=w(V),_e=()=>{!E.isInFallback||(f(null,A,ae,ie,z,null,he,a,c),ln(E,A))},le=A.transition&&A.transition.mode==="out-in";le&&(V.transition.afterLeave=_e),E.isInFallback=!0,m(V,z,null,!0),le||_e()},move(A,$,V){E.activeBranch&&h(E.activeBranch,A,$,V),E.container=A},next(){return E.activeBranch&&w(E.activeBranch)},registerDep(A,$){const V=!!E.pendingBranch;V&&E.deps++;const z=A.vnode.el;A.asyncDep.catch(ae=>{tr(ae,A,0)}).then(ae=>{if(A.isUnmounted||E.isUnmounted||E.pendingId!==A.suspenseId)return;A.asyncResolved=!0;const{vnode:he}=A;Js(A,ae,!1),z&&(he.el=z);const ie=!z&&A.subTree.el;$(A,he,D(z||A.subTree.el),z?null:w(A.subTree),E,o,c),ie&&P(ie),Si(A,he.el),V&&--E.deps===0&&E.resolve()})},unmount(A,$){E.isUnmounted=!0,E.activeBranch&&m(E.activeBranch,n,A,$),E.pendingBranch&&m(E.pendingBranch,n,A,$)}};return E}function Rf(t,e,n,r,s,i,o,a,c){const u=e.suspense=Ai(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),l=c(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(),l}function Of(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=yo(r?n.default:n),t.ssFallback=r?yo(n.fallback):oe(Bt)}function yo(t){let e;if(F(t)){const n=pn&&t._c;n&&(t._d=!1,Je()),t=t(),n&&(t._d=!0,e=Ne,Mc())}return j(t)&&(t=gf(t)),t=Ue(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Sf(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):pc(t)}function ln(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,Si(r,s))}function Er(t,e){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[t]=e}}function je(t,e,n=!1){const r=fe||xe;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&F(e)?e.call(r.proxy):e}}function Af(t,e){return Ci(t,null,e)}const bo={};function un(t,e,n){return Ci(t,e,n)}function Ci(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ee){const a=fe;let c,u=!1,l=!1;if(pe(t)?(c=()=>t.value,u=js(t)):cn(t)?(c=()=>t,r=!0):j(t)?(l=!0,u=t.some(R=>cn(R)||js(R)),c=()=>t.map(R=>{if(pe(R))return R.value;if(cn(R))return Nt(R);if(F(R))return wt(R,a,2)})):F(t)?e?c=()=>wt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),Fe(t,a,3,[h])}:c=$e,e&&r){const R=c;c=()=>Nt(R())}let f,h=R=>{f=P.onStop=()=>{wt(R,a,4)}};if(Gn)return h=$e,e?n&&Fe(e,a,3,[c(),l?[]:void 0,h]):c(),$e;let m=l?[]:bo;const w=()=>{if(!!P.active)if(e){const R=P.run();(r||u||(l?R.some((E,A)=>Wn(E,m[A])):Wn(R,m)))&&(f&&f(),Fe(e,a,3,[R,m===bo?void 0:m,h]),m=R)}else P.run()};w.allowRecurse=!!e;let D;s==="sync"?D=w:s==="post"?D=()=>we(w,a&&a.suspense):D=()=>pf(w);const P=new bi(c,D);return e?n?w():m=P.run():s==="post"?we(P.run.bind(P),a&&a.suspense):P.run(),()=>{P.stop(),a&&a.scope&&mi(a.scope.effects,P)}}function Cf(t,e,n){const r=this.proxy,s=me(t)?t.includes(".")?yc(r,t):()=>r[t]:t.bind(r,r);let i;F(e)?i=e:(i=e.handler,n=e);const o=fe;Ot(this);const a=Ci(s,i.bind(r),n);return o?Ot(o):It(),a}function yc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Nt(t,e){if(!de(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),pe(t))Nt(t.value,e);else if(j(t))for(let n=0;n<t.length;n++)Nt(t[n],e);else if(Ha(t)||an(t))t.forEach(n=>{Nt(n,e)});else if(Va(t))for(const n in t)Nt(t[n],e);return t}function bc(t){return F(t)?{setup:t,name:t.name}:t}const wr=t=>!!t.type.__asyncLoader,Ec=t=>t.type.__isKeepAlive;function Pf(t,e){wc(t,"a",e)}function kf(t,e){wc(t,"da",e)}function wc(t,e,n=fe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(es(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ec(s.parent.vnode)&&xf(r,e,n,s),s=s.parent}}function xf(t,e,n,r){const s=es(e,t,r,!0);Tc(()=>{mi(r[e],s)},n)}function es(t,e,n=fe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;In(),Ot(n);const a=Fe(e,n,t,o);return It(),Tn(),a});return r?s.unshift(i):s.push(i),i}}const at=t=>(e,n=fe)=>(!Gn||t==="sp")&&es(t,e,n),Nf=at("bm"),Df=at("m"),Mf=at("bu"),Lf=at("u"),Ic=at("bum"),Tc=at("um"),Uf=at("sp"),Bf=at("rtg"),$f=at("rtc");function Ff(t,e=fe){es("ec",t,e)}function fb(t,e){const n=xe;if(n===null)return t;const r=rs(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=ee]=e[i];F(o)&&(o={mounted:o,updated:o}),o.deep&&Nt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u})}return t}function St(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(In(),Fe(c,n,8,[t.el,a,t,e]),Tn())}}const Rc="components";function Pi(t,e){return Hf(Rc,t,!0,e)||t}const jf=Symbol();function Hf(t,e,n=!0,r=!1){const s=xe||fe;if(s){const i=s.type;if(t===Rc){const a=vd(i);if(a&&(a===e||a===Qe(e)||a===Yr(Qe(e))))return i}const o=Eo(s[t]||i[t],e)||Eo(s.appContext[t],e);return!o&&r?i:o}}function Eo(t,e){return t&&(t[e]||t[Qe(e)]||t[Yr(Qe(e))])}const Vs=t=>t?$c(t)?rs(t)||t.proxy:Vs(t.parent):null,Mr=be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Vs(t.parent),$root:t=>Vs(t.root),$emit:t=>t.emit,$options:t=>Sc(t),$forceUpdate:t=>t.f||(t.f=()=>fc(t.update)),$nextTick:t=>t.n||(t.n=uc.bind(t.proxy)),$watch:t=>Cf.bind(t)}),Wf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==ee&&q(r,e))return o[e]=1,r[e];if(s!==ee&&q(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&q(u,e))return o[e]=3,i[e];if(n!==ee&&q(n,e))return o[e]=4,n[e];qs&&(o[e]=0)}}const l=Mr[e];let f,h;if(l)return e==="$attrs"&&Pe(t,"get",e),l(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ee&&q(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,q(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==ee&&q(s,e)?(s[e]=n,!0):r!==ee&&q(r,e)?(r[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ee&&q(t,o)||e!==ee&&q(e,o)||(a=i[0])&&q(a,o)||q(r,o)||q(Mr,o)||q(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let qs=!0;function Vf(t){const e=Sc(t),n=t.proxy,r=t.ctx;qs=!1,e.beforeCreate&&wo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:f,mounted:h,beforeUpdate:m,updated:w,activated:D,deactivated:P,beforeDestroy:R,beforeUnmount:E,destroyed:A,unmounted:$,render:V,renderTracked:z,renderTriggered:ae,errorCaptured:he,serverPrefetch:ie,expose:_e,inheritAttrs:le,components:Ee,directives:Ze,filters:Ve}=e;if(u&&qf(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const te in o){const J=o[te];F(J)&&(r[te]=J.bind(n))}if(s){const te=s.call(n,n);de(te)&&(t.data=Ht(te))}if(qs=!0,i)for(const te in i){const J=i[te],Oe=F(J)?J.bind(n,n):F(J.get)?J.get.bind(n,n):$e,zt=!F(J)&&F(J.set)?J.set.bind(n):$e,et=Ie({get:Oe,set:zt});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>et.value,set:qe=>et.value=qe})}if(a)for(const te in a)Oc(a[te],r,n,te);if(c){const te=F(c)?c.call(n):c;Reflect.ownKeys(te).forEach(J=>{Er(J,te[J])})}l&&wo(l,t,"c");function ce(te,J){j(J)?J.forEach(Oe=>te(Oe.bind(n))):J&&te(J.bind(n))}if(ce(Nf,f),ce(Df,h),ce(Mf,m),ce(Lf,w),ce(Pf,D),ce(kf,P),ce(Ff,he),ce($f,z),ce(Bf,ae),ce(Ic,E),ce(Tc,$),ce(Uf,ie),j(_e))if(_e.length){const te=t.exposed||(t.exposed={});_e.forEach(J=>{Object.defineProperty(te,J,{get:()=>n[J],set:Oe=>n[J]=Oe})})}else t.exposed||(t.exposed={});V&&t.render===$e&&(t.render=V),le!=null&&(t.inheritAttrs=le),Ee&&(t.components=Ee),Ze&&(t.directives=Ze)}function qf(t,e,n=$e,r=!1){j(t)&&(t=Ks(t));for(const s in t){const i=t[s];let o;de(i)?"default"in i?o=je(i.from||s,i.default,!0):o=je(i.from||s):o=je(i),pe(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function wo(t,e,n){Fe(j(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Oc(t,e,n,r){const s=r.includes(".")?yc(n,r):()=>n[r];if(me(t)){const i=e[t];F(i)&&un(s,i)}else if(F(t))un(s,t.bind(n));else if(de(t))if(j(t))t.forEach(i=>Oc(i,e,n,r));else{const i=F(t.handler)?t.handler.bind(n):e[t.handler];F(i)&&un(s,i,t)}}function Sc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Lr(c,u,o,!0)),Lr(c,e,o)),i.set(e,c),c}function Lr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Lr(t,i,n,!0),s&&s.forEach(o=>Lr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Kf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Kf={data:Io,props:Ct,emits:Ct,methods:Ct,computed:Ct,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:Ct,directives:Ct,watch:Gf,provide:Io,inject:zf};function Io(t,e){return e?t?function(){return be(F(t)?t.call(this,this):t,F(e)?e.call(this,this):e)}:e:t}function zf(t,e){return Ct(Ks(t),Ks(e))}function Ks(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ye(t,e){return t?[...new Set([].concat(t,e))]:e}function Ct(t,e){return t?be(be(Object.create(null),t),e):e}function Gf(t,e){if(!t)return e;if(!e)return t;const n=be(Object.create(null),t);for(const r in e)n[r]=ye(t[r],e[r]);return n}function Jf(t,e,n,r=!1){const s={},i={};kr(i,ts,1),t.propsDefaults=Object.create(null),Ac(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:sf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Yf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=G(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let f=0;f<l.length;f++){let h=l[f];if(Zr(t.emitsOptions,h))continue;const m=e[h];if(c)if(q(i,h))m!==i[h]&&(i[h]=m,u=!0);else{const w=Qe(h);s[w]=zs(c,a,w,m,t,!1)}else m!==i[h]&&(i[h]=m,u=!0)}}}else{Ac(t,e,s,i)&&(u=!0);let l;for(const f in a)(!e||!q(e,f)&&((l=wn(f))===f||!q(e,l)))&&(c?n&&(n[f]!==void 0||n[l]!==void 0)&&(s[f]=zs(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!q(e,f)&&!0)&&(delete i[f],u=!0)}u&&it(t,"set","$attrs")}function Ac(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(yr(c))continue;const u=e[c];let l;s&&q(s,l=Qe(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Zr(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=G(n),u=a||ee;for(let l=0;l<i.length;l++){const f=i[l];n[f]=zs(s,c,f,u[f],t,!q(u,f))}}return o}function zs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=q(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&F(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(Ot(s),r=u[n]=c.call(null,e),It())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===wn(n))&&(r=!0))}return r}function Cc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!F(t)){const l=f=>{c=!0;const[h,m]=Cc(f,e,!0);be(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return r.set(t,on),on;if(j(i))for(let l=0;l<i.length;l++){const f=Qe(i[l]);To(f)&&(o[f]=ee)}else if(i)for(const l in i){const f=Qe(l);if(To(f)){const h=i[l],m=o[f]=j(h)||F(h)?{type:h}:h;if(m){const w=So(Boolean,m.type),D=So(String,m.type);m[0]=w>-1,m[1]=D<0||w<D,(w>-1||q(m,"default"))&&a.push(f)}}}const u=[o,a];return r.set(t,u),u}function To(t){return t[0]!=="$"}function Ro(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Oo(t,e){return Ro(t)===Ro(e)}function So(t,e){return j(e)?e.findIndex(n=>Oo(n,t)):F(e)&&Oo(e,t)?0:-1}const Pc=t=>t[0]==="_"||t==="$stable",ki=t=>j(t)?t.map(Ue):[Ue(t)],Xf=(t,e,n)=>{if(e._n)return e;const r=xt((...s)=>ki(e(...s)),n);return r._c=!1,r},kc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Pc(s))continue;const i=t[s];if(F(i))e[s]=Xf(s,i,r);else if(i!=null){const o=ki(i);e[s]=()=>o}}},xc=(t,e)=>{const n=ki(e);t.slots.default=()=>n},Qf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),kr(e,"_",n)):kc(e,t.slots={})}else t.slots={},e&&xc(t,e);kr(t.slots,ts,1)},Zf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ee;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(be(s,e),!n&&a===1&&delete s._):(i=!e.$stable,kc(e,s)),o=e}else e&&(xc(t,e),o={default:1});if(i)for(const a in s)!Pc(a)&&!(a in o)&&delete s[a]};function Nc(){return{app:null,config:{isNativeTag:Tu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ed=0;function td(t,e){return function(r,s=null){F(r)||(r=Object.assign({},r)),s!=null&&!de(s)&&(s=null);const i=Nc(),o=new Set;let a=!1;const c=i.app={_uid:ed++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ed,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&F(u.install)?(o.add(u),u.install(c,...l)):F(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,f){if(!a){const h=oe(r,s);return h.appContext=i,l&&e?e(h,u):t(h,u,f),a=!0,c._container=u,u.__vue_app__=c,rs(h.component)||h.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function Gs(t,e,n,r,s=!1){if(j(t)){t.forEach((h,m)=>Gs(h,e&&(j(e)?e[m]:e),n,r,s));return}if(wr(r)&&!s)return;const i=r.shapeFlag&4?rs(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===ee?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==c&&(me(u)?(l[u]=null,q(f,u)&&(f[u]=null)):pe(u)&&(u.value=null)),F(c))wt(c,a,12,[o,l]);else{const h=me(c),m=pe(c);if(h||m){const w=()=>{if(t.f){const D=h?l[c]:c.value;s?j(D)&&mi(D,i):j(D)?D.includes(i)||D.push(i):h?(l[c]=[i],q(f,c)&&(f[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else h?(l[c]=o,q(f,c)&&(f[c]=o)):pe(c)&&(c.value=o,t.k&&(l[t.k]=o))};o?(w.id=-1,we(w,n)):w()}}}const we=Sf;function nd(t){return rd(t)}function rd(t,e){const n=Pu();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:f,nextSibling:h,setScopeId:m=$e,cloneNode:w,insertStaticContent:D}=t,P=(d,p,g,y=null,v=null,T=null,C=!1,I=null,O=!!p.dynamicChildren)=>{if(d===p)return;d&&!gt(d,p)&&(y=N(d),ke(d,v,T,!0),d=null),p.patchFlag===-2&&(O=!1,p.dynamicChildren=null);const{type:b,ref:M,shapeFlag:k}=p;switch(b){case xi:R(d,p,g,y);break;case Bt:E(d,p,g,y);break;case Ir:d==null&&A(p,g,y,C);break;case Le:Ze(d,p,g,y,v,T,C,I,O);break;default:k&1?z(d,p,g,y,v,T,C,I,O):k&6?Ve(d,p,g,y,v,T,C,I,O):(k&64||k&128)&&b.process(d,p,g,y,v,T,C,I,O,ne)}M!=null&&v&&Gs(M,d&&d.ref,T,p||d,!p)},R=(d,p,g,y)=>{if(d==null)r(p.el=a(p.children),g,y);else{const v=p.el=d.el;p.children!==d.children&&u(v,p.children)}},E=(d,p,g,y)=>{d==null?r(p.el=c(p.children||""),g,y):p.el=d.el},A=(d,p,g,y)=>{[d.el,d.anchor]=D(d.children,p,g,y,d.el,d.anchor)},$=({el:d,anchor:p},g,y)=>{let v;for(;d&&d!==p;)v=h(d),r(d,g,y),d=v;r(p,g,y)},V=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=h(d),s(d),d=g;s(p)},z=(d,p,g,y,v,T,C,I,O)=>{C=C||p.type==="svg",d==null?ae(p,g,y,v,T,C,I,O):_e(d,p,v,T,C,I,O)},ae=(d,p,g,y,v,T,C,I)=>{let O,b;const{type:M,props:k,shapeFlag:L,transition:B,patchFlag:K,dirs:X}=d;if(d.el&&w!==void 0&&K===-1)O=d.el=w(d.el);else{if(O=d.el=o(d.type,T,k&&k.is,k),L&8?l(O,d.children):L&16&&ie(d.children,O,null,y,v,T&&M!=="foreignObject",C,I),X&&St(d,null,y,"created"),k){for(const se in k)se!=="value"&&!yr(se)&&i(O,se,null,k[se],T,d.children,y,v,S);"value"in k&&i(O,"value",null,k.value),(b=k.onVnodeBeforeMount)&&ze(b,y,d)}he(O,d,d.scopeId,C,y)}X&&St(d,null,y,"beforeMount");const Q=(!v||v&&!v.pendingBranch)&&B&&!B.persisted;Q&&B.beforeEnter(O),r(O,p,g),((b=k&&k.onVnodeMounted)||Q||X)&&we(()=>{b&&ze(b,y,d),Q&&B.enter(O),X&&St(d,null,y,"mounted")},v)},he=(d,p,g,y,v)=>{if(g&&m(d,g),y)for(let T=0;T<y.length;T++)m(d,y[T]);if(v){let T=v.subTree;if(p===T){const C=v.vnode;he(d,C,C.scopeId,C.slotScopeIds,v.parent)}}},ie=(d,p,g,y,v,T,C,I,O=0)=>{for(let b=O;b<d.length;b++){const M=d[b]=I?ht(d[b]):Ue(d[b]);P(null,M,p,g,y,v,T,C,I)}},_e=(d,p,g,y,v,T,C)=>{const I=p.el=d.el;let{patchFlag:O,dynamicChildren:b,dirs:M}=p;O|=d.patchFlag&16;const k=d.props||ee,L=p.props||ee;let B;g&&At(g,!1),(B=L.onVnodeBeforeUpdate)&&ze(B,g,p,d),M&&St(p,d,g,"beforeUpdate"),g&&At(g,!0);const K=v&&p.type!=="foreignObject";if(b?le(d.dynamicChildren,b,I,g,y,K,T):C||Oe(d,p,I,null,g,y,K,T,!1),O>0){if(O&16)Ee(I,p,k,L,g,y,v);else if(O&2&&k.class!==L.class&&i(I,"class",null,L.class,v),O&4&&i(I,"style",k.style,L.style,v),O&8){const X=p.dynamicProps;for(let Q=0;Q<X.length;Q++){const se=X[Q],De=k[se],Gt=L[se];(Gt!==De||se==="value")&&i(I,se,De,Gt,v,d.children,g,y,S)}}O&1&&d.children!==p.children&&l(I,p.children)}else!C&&b==null&&Ee(I,p,k,L,g,y,v);((B=L.onVnodeUpdated)||M)&&we(()=>{B&&ze(B,g,p,d),M&&St(p,d,g,"updated")},y)},le=(d,p,g,y,v,T,C)=>{for(let I=0;I<p.length;I++){const O=d[I],b=p[I],M=O.el&&(O.type===Le||!gt(O,b)||O.shapeFlag&70)?f(O.el):g;P(O,b,M,null,y,v,T,C,!0)}},Ee=(d,p,g,y,v,T,C)=>{if(g!==y){for(const I in y){if(yr(I))continue;const O=y[I],b=g[I];O!==b&&I!=="value"&&i(d,I,b,O,C,p.children,v,T,S)}if(g!==ee)for(const I in g)!yr(I)&&!(I in y)&&i(d,I,g[I],null,C,p.children,v,T,S);"value"in y&&i(d,"value",g.value,y.value)}},Ze=(d,p,g,y,v,T,C,I,O)=>{const b=p.el=d?d.el:a(""),M=p.anchor=d?d.anchor:a("");let{patchFlag:k,dynamicChildren:L,slotScopeIds:B}=p;B&&(I=I?I.concat(B):B),d==null?(r(b,g,y),r(M,g,y),ie(p.children,g,M,v,T,C,I,O)):k>0&&k&64&&L&&d.dynamicChildren?(le(d.dynamicChildren,L,g,v,T,C,I),(p.key!=null||v&&p===v.subTree)&&Dc(d,p,!0)):Oe(d,p,g,M,v,T,C,I,O)},Ve=(d,p,g,y,v,T,C,I,O)=>{p.slotScopeIds=I,d==null?p.shapeFlag&512?v.ctx.activate(p,g,y,C,O):Kt(p,g,y,v,T,C,O):ce(d,p,O)},Kt=(d,p,g,y,v,T,C)=>{const I=d.component=dd(d,y,v);if(Ec(d)&&(I.ctx.renderer=ne),pd(I),I.asyncDep){if(v&&v.registerDep(I,te),!d.el){const O=I.subTree=oe(Bt);E(null,O,p,g)}return}te(I,d,p,g,v,T,C)},ce=(d,p,g)=>{const y=p.component=d.component;if(yf(d,p,g))if(y.asyncDep&&!y.asyncResolved){J(y,p,g);return}else y.next=p,hf(y.update),y.update();else p.el=d.el,y.vnode=p},te=(d,p,g,y,v,T,C)=>{const I=()=>{if(d.isMounted){let{next:M,bu:k,u:L,parent:B,vnode:K}=d,X=M,Q;At(d,!1),M?(M.el=K.el,J(d,M,C)):M=K,k&&br(k),(Q=M.props&&M.props.onVnodeBeforeUpdate)&&ze(Q,B,M,K),At(d,!0);const se=ys(d),De=d.subTree;d.subTree=se,P(De,se,f(De.el),N(De),d,v,T),M.el=se.el,X===null&&Si(d,se.el),L&&we(L,v),(Q=M.props&&M.props.onVnodeUpdated)&&we(()=>ze(Q,B,M,K),v)}else{let M;const{el:k,props:L}=p,{bm:B,m:K,parent:X}=d,Q=wr(p);if(At(d,!1),B&&br(B),!Q&&(M=L&&L.onVnodeBeforeMount)&&ze(M,X,p),At(d,!0),k&&H){const se=()=>{d.subTree=ys(d),H(k,d.subTree,d,v,null)};Q?p.type.__asyncLoader().then(()=>!d.isUnmounted&&se()):se()}else{const se=d.subTree=ys(d);P(null,se,g,y,d,v,T),p.el=se.el}if(K&&we(K,v),!Q&&(M=L&&L.onVnodeMounted)){const se=p;we(()=>ze(M,X,se),v)}(p.shapeFlag&256||X&&wr(X.vnode)&&X.vnode.shapeFlag&256)&&d.a&&we(d.a,v),d.isMounted=!0,p=g=y=null}},O=d.effect=new bi(I,()=>fc(b),d.scope),b=d.update=()=>O.run();b.id=d.uid,At(d,!0),b()},J=(d,p,g)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,Yf(d,p.props,y,g),Zf(d,p.children,g),In(),Qr(void 0,d.update),Tn()},Oe=(d,p,g,y,v,T,C,I,O=!1)=>{const b=d&&d.children,M=d?d.shapeFlag:0,k=p.children,{patchFlag:L,shapeFlag:B}=p;if(L>0){if(L&128){et(b,k,g,y,v,T,C,I,O);return}else if(L&256){zt(b,k,g,y,v,T,C,I,O);return}}B&8?(M&16&&S(b,v,T),k!==b&&l(g,k)):M&16?B&16?et(b,k,g,y,v,T,C,I,O):S(b,v,T,!0):(M&8&&l(g,""),B&16&&ie(k,g,y,v,T,C,I,O))},zt=(d,p,g,y,v,T,C,I,O)=>{d=d||on,p=p||on;const b=d.length,M=p.length,k=Math.min(b,M);let L;for(L=0;L<k;L++){const B=p[L]=O?ht(p[L]):Ue(p[L]);P(d[L],B,g,null,v,T,C,I,O)}b>M?S(d,v,T,!0,!1,k):ie(p,g,y,v,T,C,I,O,k)},et=(d,p,g,y,v,T,C,I,O)=>{let b=0;const M=p.length;let k=d.length-1,L=M-1;for(;b<=k&&b<=L;){const B=d[b],K=p[b]=O?ht(p[b]):Ue(p[b]);if(gt(B,K))P(B,K,g,null,v,T,C,I,O);else break;b++}for(;b<=k&&b<=L;){const B=d[k],K=p[L]=O?ht(p[L]):Ue(p[L]);if(gt(B,K))P(B,K,g,null,v,T,C,I,O);else break;k--,L--}if(b>k){if(b<=L){const B=L+1,K=B<M?p[B].el:y;for(;b<=L;)P(null,p[b]=O?ht(p[b]):Ue(p[b]),g,K,v,T,C,I,O),b++}}else if(b>L)for(;b<=k;)ke(d[b],v,T,!0),b++;else{const B=b,K=b,X=new Map;for(b=K;b<=L;b++){const Se=p[b]=O?ht(p[b]):Ue(p[b]);Se.key!=null&&X.set(Se.key,b)}let Q,se=0;const De=L-K+1;let Gt=!1,oo=0;const Pn=new Array(De);for(b=0;b<De;b++)Pn[b]=0;for(b=B;b<=k;b++){const Se=d[b];if(se>=De){ke(Se,v,T,!0);continue}let Ke;if(Se.key!=null)Ke=X.get(Se.key);else for(Q=K;Q<=L;Q++)if(Pn[Q-K]===0&&gt(Se,p[Q])){Ke=Q;break}Ke===void 0?ke(Se,v,T,!0):(Pn[Ke-K]=b+1,Ke>=oo?oo=Ke:Gt=!0,P(Se,p[Ke],g,null,v,T,C,I,O),se++)}const ao=Gt?sd(Pn):on;for(Q=ao.length-1,b=De-1;b>=0;b--){const Se=K+b,Ke=p[Se],co=Se+1<M?p[Se+1].el:y;Pn[b]===0?P(null,Ke,g,co,v,T,C,I,O):Gt&&(Q<0||b!==ao[Q]?qe(Ke,g,co,2):Q--)}}},qe=(d,p,g,y,v=null)=>{const{el:T,type:C,transition:I,children:O,shapeFlag:b}=d;if(b&6){qe(d.component.subTree,p,g,y);return}if(b&128){d.suspense.move(p,g,y);return}if(b&64){C.move(d,p,g,ne);return}if(C===Le){r(T,p,g);for(let k=0;k<O.length;k++)qe(O[k],p,g,y);r(d.anchor,p,g);return}if(C===Ir){$(d,p,g);return}if(y!==2&&b&1&&I)if(y===0)I.beforeEnter(T),r(T,p,g),we(()=>I.enter(T),v);else{const{leave:k,delayLeave:L,afterLeave:B}=I,K=()=>r(T,p,g),X=()=>{k(T,()=>{K(),B&&B()})};L?L(T,K,X):X()}else r(T,p,g)},ke=(d,p,g,y=!1,v=!1)=>{const{type:T,props:C,ref:I,children:O,dynamicChildren:b,shapeFlag:M,patchFlag:k,dirs:L}=d;if(I!=null&&Gs(I,null,g,d,!0),M&256){p.ctx.deactivate(d);return}const B=M&1&&L,K=!wr(d);let X;if(K&&(X=C&&C.onVnodeBeforeUnmount)&&ze(X,p,d),M&6)x(d.component,g,y);else{if(M&128){d.suspense.unmount(g,y);return}B&&St(d,null,p,"beforeUnmount"),M&64?d.type.remove(d,p,g,v,ne,y):b&&(T!==Le||k>0&&k&64)?S(b,p,g,!1,!0):(T===Le&&k&384||!v&&M&16)&&S(O,p,g),y&&_s(d)}(K&&(X=C&&C.onVnodeUnmounted)||B)&&we(()=>{X&&ze(X,p,d),B&&St(d,null,p,"unmounted")},g)},_s=d=>{const{type:p,el:g,anchor:y,transition:v}=d;if(p===Le){_(g,y);return}if(p===Ir){V(d);return}const T=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:C,delayLeave:I}=v,O=()=>C(g,T);I?I(d.el,T,O):O()}else T()},_=(d,p)=>{let g;for(;d!==p;)g=h(d),s(d),d=g;s(p)},x=(d,p,g)=>{const{bum:y,scope:v,update:T,subTree:C,um:I}=d;y&&br(y),v.stop(),T&&(T.active=!1,ke(C,d,p,g)),I&&we(I,p),we(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},S=(d,p,g,y=!1,v=!1,T=0)=>{for(let C=T;C<d.length;C++)ke(d[C],p,g,y,v)},N=d=>d.shapeFlag&6?N(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),Y=(d,p,g)=>{d==null?p._vnode&&ke(p._vnode,null,null,!0):P(p._vnode||null,d,p,null,null,null,g),mc(),p._vnode=d},ne={p:P,um:ke,m:qe,r:_s,mt:Kt,mc:ie,pc:Oe,pbc:le,n:N,o:t};let W,H;return e&&([W,H]=e(ne)),{render:Y,hydrate:W,createApp:td(Y,W)}}function At({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Dc(t,e,n=!1){const r=t.children,s=e.children;if(j(r)&&j(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=ht(s[i]),a.el=o.el),n||Dc(o,a))}}function sd(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const id=t=>t.__isTeleport,Le=Symbol(void 0),xi=Symbol(void 0),Bt=Symbol(void 0),Ir=Symbol(void 0),$n=[];let Ne=null;function Je(t=!1){$n.push(Ne=t?null:[])}function Mc(){$n.pop(),Ne=$n[$n.length-1]||null}let pn=1;function Ao(t){pn+=t}function Lc(t){return t.dynamicChildren=pn>0?Ne||on:null,Mc(),pn>0&&Ne&&Ne.push(t),t}function Lt(t,e,n,r,s,i){return Lc(ns(t,e,n,r,s,i,!0))}function Uc(t,e,n,r,s){return Lc(oe(t,e,n,r,s,!0))}function Ur(t){return t?t.__v_isVNode===!0:!1}function gt(t,e){return t.type===e.type&&t.key===e.key}const ts="__vInternal",Bc=({key:t})=>t??null,Tr=({ref:t,ref_key:e,ref_for:n})=>t!=null?me(t)||pe(t)||F(t)?{i:xe,r:t,k:e,f:!!n}:t:null;function ns(t,e=null,n=null,r=0,s=null,i=t===Le?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bc(e),ref:e&&Tr(e),scopeId:vc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Ni(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=me(n)?8:16),pn>0&&!o&&Ne&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ne.push(c),c}const oe=od;function od(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===jf)&&(t=Bt),Ur(t)){const a=mn(t,e,!0);return n&&Ni(a,n),pn>0&&!i&&Ne&&(a.shapeFlag&6?Ne[Ne.indexOf(t)]=a:Ne.push(a)),a.patchFlag|=-2,a}if(yd(t)&&(t=t.__vccOpts),e){e=ad(e);let{class:a,style:c}=e;a&&!me(a)&&(e.class=hi(a)),de(c)&&(nc(c)&&!j(c)&&(c=be({},c)),e.style=di(c))}const o=me(t)?1:bf(t)?128:id(t)?64:de(t)?4:F(t)?2:0;return ns(t,e,n,r,s,o,i,!0)}function ad(t){return t?nc(t)||ts in t?be({},t):t:null}function mn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?ld(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Bc(a),ref:e&&e.ref?n&&s?j(s)?s.concat(Tr(e)):[s,Tr(e)]:Tr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&mn(t.ssContent),ssFallback:t.ssFallback&&mn(t.ssFallback),el:t.el,anchor:t.anchor}}function nr(t=" ",e=0){return oe(xi,null,t,e)}function cd(t,e){const n=oe(Ir,null,t);return n.staticCount=e,n}function Ue(t){return t==null||typeof t=="boolean"?oe(Bt):j(t)?oe(Le,null,t.slice()):typeof t=="object"?ht(t):oe(xi,null,String(t))}function ht(t){return t.el===null||t.memo?t:mn(t)}function Ni(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ni(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ts in e)?e._ctx=xe:s===3&&xe&&(xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else F(e)?(e={default:e,_ctx:xe},n=32):(e=String(e),r&64?(n=16,e=[nr(e)]):n=8);t.children=e,t.shapeFlag|=n}function ld(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=hi([e.class,r.class]));else if(s==="style")e.style=di([e.style,r.style]);else if(zr(s)){const i=e[s],o=r[s];o&&i!==o&&!(j(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ze(t,e,n,r=null){Fe(t,e,7,[n,r])}const ud=Nc();let fd=0;function dd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ud,i={uid:fd++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ku(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cc(r,s),emitsOptions:_c(r,s),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:r.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=mf.bind(null,i),t.ce&&t.ce(i),i}let fe=null;const hd=()=>fe||xe,Ot=t=>{fe=t,t.scope.on()},It=()=>{fe&&fe.scope.off(),fe=null};function $c(t){return t.vnode.shapeFlag&4}let Gn=!1;function pd(t,e=!1){Gn=e;const{props:n,children:r}=t.vnode,s=$c(t);Jf(t,n,s,e),Qf(t,r);const i=s?md(t,e):void 0;return Gn=!1,i}function md(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=rc(new Proxy(t.ctx,Wf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?_d(t):null;Ot(t),In();const i=wt(r,t,0,[t.props,s]);if(Tn(),It(),_i(i)){if(i.then(It,It),e)return i.then(o=>{Js(t,o,e)}).catch(o=>{tr(o,t,0)});t.asyncDep=i}else Js(t,i,e)}else Fc(t,e)}function Js(t,e,n){F(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:de(e)&&(t.setupState=cc(e)),Fc(t,n)}let Co;function Fc(t,e,n){const r=t.type;if(!t.render){if(!e&&Co&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=be(be({isCustomElement:i,delimiters:a},o),c);r.render=Co(s,u)}}t.render=r.render||$e}Ot(t),In(),Vf(t),Tn(),It()}function gd(t){return new Proxy(t.attrs,{get(e,n){return Pe(t,"get","$attrs"),e[n]}})}function _d(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=gd(t))},slots:t.slots,emit:t.emit,expose:e}}function rs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(cc(rc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Mr)return Mr[n](t)}}))}function vd(t){return F(t)&&t.displayName||t.name}function yd(t){return F(t)&&"__vccOpts"in t}const Ie=(t,e)=>uf(t,e,Gn);function bd(t){const e=hd();let n=t();return It(),_i(n)&&(n=n.catch(r=>{throw Ot(e),r})),[n,()=>Ot(e)]}function jc(t,e,n){const r=arguments.length;return r===2?de(e)&&!j(e)?Ur(e)?oe(t,null,[e]):oe(t,e):oe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ur(n)&&(n=[n]),oe(t,e,n))}const Ed="3.2.36",wd="http://www.w3.org/2000/svg",kt=typeof document<"u"?document:null,Po=kt&&kt.createElement("template"),Id={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?kt.createElementNS(wd,t):kt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>kt.createTextNode(t),createComment:t=>kt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>kt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Po.innerHTML=r?`<svg>${t}</svg>`:t;const a=Po.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Td(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Rd(t,e,n){const r=t.style,s=me(n);if(n&&!s){for(const i in n)Ys(r,i,n[i]);if(e&&!me(e))for(const i in e)n[i]==null&&Ys(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const ko=/\s*!important$/;function Ys(t,e,n){if(j(n))n.forEach(r=>Ys(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Od(t,e);ko.test(n)?t.setProperty(wn(r),n.replace(ko,""),"important"):t[r]=n}}const xo=["Webkit","Moz","ms"],bs={};function Od(t,e){const n=bs[e];if(n)return n;let r=Qe(e);if(r!=="filter"&&r in t)return bs[e]=r;r=Yr(r);for(let s=0;s<xo.length;s++){const i=xo[s]+r;if(i in t)return bs[e]=i}return e}const No="http://www.w3.org/1999/xlink";function Sd(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(No,e.slice(6,e.length)):t.setAttributeNS(No,e,n);else{const i=yu(e);n==null||i&&!Fa(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Ad(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Fa(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Hc,Cd]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Xs=0;const Pd=Promise.resolve(),kd=()=>{Xs=0},xd=()=>Xs||(Pd.then(kd),Xs=Hc());function nn(t,e,n,r){t.addEventListener(e,n,r)}function Nd(t,e,n,r){t.removeEventListener(e,n,r)}function Dd(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Md(e);if(r){const u=i[e]=Ld(r,s);nn(t,a,u,c)}else o&&(Nd(t,a,o,c),i[e]=void 0)}}const Do=/(?:Once|Passive|Capture)$/;function Md(t){let e;if(Do.test(t)){e={};let n;for(;n=t.match(Do);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[wn(t.slice(2)),e]}function Ld(t,e){const n=r=>{const s=r.timeStamp||Hc();(Cd||s>=n.attached-1)&&Fe(Ud(r,n.value),e,5,[r])};return n.value=t,n.attached=xd(),n}function Ud(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Mo=/^on[a-z]/,Bd=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Td(t,r,s):e==="style"?Rd(t,n,r):zr(e)?pi(e)||Dd(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$d(t,e,r,s))?Ad(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Sd(t,e,r,s))};function $d(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Mo.test(e)&&F(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Mo.test(e)&&me(n)?!1:e in t}const Lo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return j(e)?n=>br(e,n):e};function Fd(t){t.target.composing=!0}function Uo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const db={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Lo(s);const i=r||s.props&&s.props.type==="number";nn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=xr(a)),t._assign(a)}),n&&nn(t,"change",()=>{t.value=t.value.trim()}),e||(nn(t,"compositionstart",Fd),nn(t,"compositionend",Uo),nn(t,"change",Uo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Lo(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&xr(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},jd=["ctrl","shift","alt","meta"],Hd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>jd.some(n=>t[`${n}Key`]&&!e.includes(n))},hb=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Hd[e[s]];if(i&&i(n,e))return}return t(n,...r)},Wd=be({patchProp:Bd},Id);let Bo;function Vd(){return Bo||(Bo=nd(Wd))}const qd=(...t)=>{const e=Vd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Kd(r);if(!s)return;const i=e._component;!F(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Kd(t){return me(t)?document.querySelector(t):t}var zd=Object.defineProperty,$o=Object.getOwnPropertySymbols,Gd=Object.prototype.hasOwnProperty,Jd=Object.prototype.propertyIsEnumerable,Fo=(t,e,n)=>e in t?zd(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Yd=(t,e)=>{for(var n in e||(e={}))Gd.call(e,n)&&Fo(t,n,e[n]);if($o)for(var n of $o(e))Jd.call(e,n)&&Fo(t,n,e[n]);return t},Wc="usehead",jo="head:count",Es="data-head-attrs",Xd=(t,e,n)=>{const r=n.createElement(t);for(const s of Object.keys(e)){let i=e[s];s==="key"||i===!1||(s==="children"?r.textContent=i:r.setAttribute(s,i))}return r};function Qd(t,e){if(t instanceof HTMLElement&&e instanceof HTMLElement){const n=e.getAttribute("nonce");if(n&&!t.getAttribute("nonce")){const r=e.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===t.nonce&&t.isEqualNode(r)}}return t.isEqualNode(e)}var Zd=t=>{const e=["key","id","name","property"];for(const n of e){const r=typeof t.getAttribute=="function"?t.hasAttribute(n)?t.getAttribute(n):void 0:t[n];if(r!==void 0)return{name:n,value:r}}},eh=()=>{const t=je(Wc);if(!t)throw new Error("You may forget to apply app.use(head)");return t},th=["title","meta","link","base","style","script","htmlAttrs","bodyAttrs"],nh=t=>{const e=[];for(const n of Object.keys(t))if(t[n]!=null){if(n==="title")e.push({tag:n,props:{children:t[n]}});else if(n==="base")e.push({tag:n,props:Yd({key:"default"},t[n])});else if(th.includes(n)){const r=t[n];Array.isArray(r)?r.forEach(s=>{e.push({tag:n,props:s})}):r&&e.push({tag:n,props:r})}}return e},Ho=(t,e)=>{const n=t.getAttribute(Es);if(n)for(const s of n.split(","))s in e||t.removeAttribute(s);const r=[];for(const s in e){const i=e[s];i!=null&&(i===!1?t.removeAttribute(s):t.setAttribute(s,i),r.push(s))}r.length?t.setAttribute(Es,r.join(",")):t.removeAttribute(Es)},rh=(t=window.document,e,n)=>{var r;const s=t.head;let i=s.querySelector(`meta[name="${jo}"]`);const o=i?Number(i.getAttribute("content")):0,a=[];if(i)for(let u=0,l=i.previousElementSibling;u<o;u++,l=l?.previousElementSibling||null)((r=l?.tagName)==null?void 0:r.toLowerCase())===e&&a.push(l);else i=t.createElement("meta"),i.setAttribute("name",jo),i.setAttribute("content","0"),s.append(i);let c=n.map(u=>Xd(u.tag,u.props,t));c=c.filter(u=>{for(let l=0;l<a.length;l++){const f=a[l];if(Qd(f,u))return a.splice(l,1),!1}return!0}),a.forEach(u=>{var l;return(l=u.parentNode)==null?void 0:l.removeChild(u)}),c.forEach(u=>{s.insertBefore(u,i)}),i.setAttribute("content",""+(o-a.length+c.length))},sh=()=>{let t=[],e=new Set;const n={install(r){r.config.globalProperties.$head=n,r.provide(Wc,n)},get headTags(){const r=[];return t.forEach(s=>{nh(s.value).forEach(o=>{if(o.tag==="meta"||o.tag==="base"||o.tag==="script"){const a=Zd(o.props);if(a){let c=-1;for(let u=0;u<r.length;u++){const l=r[u],f=l.props[a.name],h=o.props[a.name];if(l.tag===o.tag&&f===h){c=u;break}}c!==-1&&r.splice(c,1)}}r.push(o)})}),r},addHeadObjs(r){t.push(r)},removeHeadObjs(r){t=t.filter(s=>s!==r)},updateDOM(r=window.document){let s,i={},o={};const a={};for(const u of n.headTags){if(u.tag==="title"){s=u.props.children;continue}if(u.tag==="htmlAttrs"){Object.assign(i,u.props);continue}if(u.tag==="bodyAttrs"){Object.assign(o,u.props);continue}a[u.tag]=a[u.tag]||[],a[u.tag].push(u)}s!==void 0&&(r.title=s),Ho(r.documentElement,i),Ho(r.body,o);const c=new Set([...Object.keys(a),...e]);for(const u of c)rh(r,u,a[u]||[]);e.clear(),Object.keys(a).forEach(u=>e.add(u))}};return n},ih=typeof window<"u",oh=t=>{const e=oc(t),n=eh();n.addHeadObjs(e),ih&&(Af(()=>{n.updateDOM()}),Ic(()=>{n.removeHeadObjs(e),n.updateDOM()}))};function ah(t,e){const n=Pi("router-view");return Je(),Uc(n)}var Vc=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const ch={};var lh=Vc(ch,[["render",ah]]);function uh(){return qc().__VUE_DEVTOOLS_GLOBAL_HOOK__}function qc(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const fh=typeof Proxy=="function",dh="devtools-plugin:setup",hh="plugin:settings:set";let Jt,Qs;function ph(){var t;return Jt!==void 0||(typeof window<"u"&&window.performance?(Jt=!0,Qs=window.performance):typeof global<"u"&&((t=global.perf_hooks)===null||t===void 0?void 0:t.performance)?(Jt=!0,Qs=global.perf_hooks.performance):Jt=!1),Jt}function mh(){return ph()?Qs.now():Date.now()}class gh{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return mh()}},n&&n.on(hh,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:a,args:c,resolve:u})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function _h(t,e){const n=t,r=qc(),s=uh(),i=fh&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(dh,t,e);else{const o=i?new gh(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Kc="store";function zc(t){return t===void 0&&(t=null),je(t!==null?t:Kc)}function Rn(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function vh(t){return t!==null&&typeof t=="object"}function yh(t){return t&&typeof t.then=="function"}function bh(t,e){return function(){return t(e)}}function Gc(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Jc(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;ss(t,n,[],t._modules.root,!0),Di(t,n,e)}function Di(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,i={};Rn(s,function(o,a){i[a]=bh(o,t),Object.defineProperty(t.getters,a,{get:function(){return i[a]()},enumerable:!0})}),t._state=Ht({data:e}),t.strict&&Rh(t),r&&n&&t._withCommit(function(){r.data=null})}function ss(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=Mi(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var u=r.context=Eh(t,o,n);r.forEachMutation(function(l,f){var h=o+f;wh(t,h,l,u)}),r.forEachAction(function(l,f){var h=l.root?f:o+f,m=l.handler||l;Ih(t,h,m,u)}),r.forEachGetter(function(l,f){var h=o+f;Th(t,h,l,u)}),r.forEachChild(function(l,f){ss(t,e,n.concat(f),l,s)})}function Eh(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var c=Br(i,o,a),u=c.payload,l=c.options,f=c.type;return(!l||!l.root)&&(f=e+f),t.dispatch(f,u)},commit:r?t.commit:function(i,o,a){var c=Br(i,o,a),u=c.payload,l=c.options,f=c.type;(!l||!l.root)&&(f=e+f),t.commit(f,u,l)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return Yc(t,e)}},state:{get:function(){return Mi(t.state,n)}}}),s}function Yc(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function wh(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function Ih(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return yh(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function Th(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function Rh(t){un(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Mi(t,e){return e.reduce(function(n,r){return n[r]},t)}function Br(t,e,n){return vh(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var Oh="vuex bindings",Wo="vuex:mutations",ws="vuex:actions",Yt="vuex",Sh=0;function Ah(t,e){_h({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Oh]},function(n){n.addTimelineLayer({id:Wo,label:"Vuex Mutations",color:Vo}),n.addTimelineLayer({id:ws,label:"Vuex Actions",color:Vo}),n.addInspector({id:Yt,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===Yt)if(r.filter){var s=[];el(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[Zc(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===Yt){var s=r.nodeId;Yc(e,s),r.state=kh(Nh(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===Yt){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(Yt),n.sendInspectorState(Yt),n.addTimelineEvent({layerId:Wo,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=Sh++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:ws,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:ws,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var Vo=8702998,Ch=6710886,Ph=16777215,Xc={label:"namespaced",textColor:Ph,backgroundColor:Ch};function Qc(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Zc(t,e){return{id:e||"root",label:Qc(e),tags:t.namespaced?[Xc]:[],children:Object.keys(t._children).map(function(n){return Zc(t._children[n],e+n+"/")})}}function el(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[Xc]:[]}),Object.keys(e._children).forEach(function(s){el(t,e._children[s],n,r+s+"/")})}function kh(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=xh(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Qc(o):o,editable:!1,value:Zs(function(){return i[o]})}})}return s}function xh(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=Zs(function(){return t[n]})}else e[n]=Zs(function(){return t[n]})}),e}function Nh(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Zs(t){try{return t()}catch(e){return e}}var We=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},tl={namespaced:{configurable:!0}};tl.namespaced.get=function(){return!!this._rawModule.namespaced};We.prototype.addChild=function(e,n){this._children[e]=n};We.prototype.removeChild=function(e){delete this._children[e]};We.prototype.getChild=function(e){return this._children[e]};We.prototype.hasChild=function(e){return e in this._children};We.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};We.prototype.forEachChild=function(e){Rn(this._children,e)};We.prototype.forEachGetter=function(e){this._rawModule.getters&&Rn(this._rawModule.getters,e)};We.prototype.forEachAction=function(e){this._rawModule.actions&&Rn(this._rawModule.actions,e)};We.prototype.forEachMutation=function(e){this._rawModule.mutations&&Rn(this._rawModule.mutations,e)};Object.defineProperties(We.prototype,tl);var Wt=function(e){this.register([],e,!1)};Wt.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Wt.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};Wt.prototype.update=function(e){nl([],this.root,e)};Wt.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new We(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&Rn(n.modules,function(a,c){s.register(e.concat(c),a,r)})};Wt.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);!s||!s.runtime||n.removeChild(r)};Wt.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function nl(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;nl(t.concat(r),e.getChild(r),n.modules[r])}}function Dh(t){return new Re(t)}var Re=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Wt(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(h,m){return c.call(o,h,m)},this.commit=function(h,m,w){return u.call(o,h,m,w)},this.strict=s;var l=this._modules.root.state;ss(this,l,[],this._modules.root),Di(this,l),r.forEach(function(f){return f(n)})},Li={state:{configurable:!0}};Re.prototype.install=function(e,n){e.provide(n||Kc,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&Ah(e,this)};Li.state.get=function(){return this._state.data};Li.state.set=function(t){};Re.prototype.commit=function(e,n,r){var s=this,i=Br(e,n,r),o=i.type,a=i.payload,c={type:o,payload:a},u=this._mutations[o];!u||(this._withCommit(function(){u.forEach(function(f){f(a)})}),this._subscribers.slice().forEach(function(l){return l(c,s.state)}))};Re.prototype.dispatch=function(e,n){var r=this,s=Br(e,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(!!c){try{this._actionSubscribers.slice().filter(function(l){return l.before}).forEach(function(l){return l.before(a,r.state)})}catch{}var u=c.length>1?Promise.all(c.map(function(l){return l(o)})):c[0](o);return new Promise(function(l,f){u.then(function(h){try{r._actionSubscribers.filter(function(m){return m.after}).forEach(function(m){return m.after(a,r.state)})}catch{}l(h)},function(h){try{r._actionSubscribers.filter(function(m){return m.error}).forEach(function(m){return m.error(a,r.state,h)})}catch{}f(h)})})}};Re.prototype.subscribe=function(e,n){return Gc(e,this._subscribers,n)};Re.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Gc(r,this._actionSubscribers,n)};Re.prototype.watch=function(e,n,r){var s=this;return un(function(){return e(s.state,s.getters)},n,Object.assign({},r))};Re.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Re.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),ss(this,this.state,e,this._modules.get(e),r.preserveState),Di(this,this.state)};Re.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Mi(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Jc(this)};Re.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Re.prototype.hotUpdate=function(e){this._modules.update(e),Jc(this,!0)};Re.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Re.prototype,Li);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Mh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,f=(i&3)<<4|a>>4;let h=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(h=64)),r.push(n[l],n[f],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Mh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw Error();const h=i<<2|a>>4;if(r.push(h),u!==64){const m=a<<4&240|u>>2;if(r.push(m),f!==64){const w=u<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Lh=function(t){const e=rl(t);return sl.encodeByteArray(e,!0)},il=function(t){return Lh(t).replace(/\./g,"")},Uh=function(t){try{return sl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $h(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function Fh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hh(){const t=ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Wh(){return typeof indexedDB=="object"}function Vh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="FirebaseError";class On extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=qh,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rr.prototype.create)}}class rr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Kh(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new On(s,a,r)}}function Kh(t,e){return t.replace(zh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const zh=/\{\$([^}]+)}/g;function Gh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $r(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(qo(i)&&qo(o)){if(!$r(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function qo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Mn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ln(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Jh(t,e){const n=new Yh(t,e);return n.subscribe.bind(n)}class Yh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Xh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Is),s.error===void 0&&(s.error=Is),s.complete===void 0&&(s.complete=Is);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Is(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t){return t&&t._delegate?t._delegate:t}class gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Bh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ep(e))try{this.getOrInitializeService({instanceIdentifier:Pt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Pt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pt){return this.instances.has(e)}getOptions(e=Pt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pt){return this.component?this.component.multipleInstances?e:Pt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zh(t){return t===Pt?void 0:t}function ep(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const np={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},rp=re.INFO,sp={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},ip=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=sp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ol{constructor(e){this.name=e,this._logLevel=rp,this._logHandler=ip,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?np[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const op=(t,e)=>e.some(n=>t instanceof n);let Ko,zo;function ap(){return Ko||(Ko=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cp(){return zo||(zo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const al=new WeakMap,ei=new WeakMap,cl=new WeakMap,Ts=new WeakMap,Ui=new WeakMap;function lp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&al.set(n,t)}).catch(()=>{}),Ui.set(e,t),e}function up(t){if(ei.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ei.set(t,e)}let ti={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ei.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fp(t){ti=t(ti)}function dp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rs(this),e,...n);return cl.set(r,e.sort?e.sort():[e]),Tt(r)}:cp().includes(t)?function(...e){return t.apply(Rs(this),e),Tt(al.get(this))}:function(...e){return Tt(t.apply(Rs(this),e))}}function hp(t){return typeof t=="function"?dp(t):(t instanceof IDBTransaction&&up(t),op(t,ap())?new Proxy(t,ti):t)}function Tt(t){if(t instanceof IDBRequest)return lp(t);if(Ts.has(t))return Ts.get(t);const e=hp(t);return e!==t&&(Ts.set(t,e),Ui.set(e,t)),e}const Rs=t=>Ui.get(t);function pp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Tt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Tt(o.result),c.oldVersion,c.newVersion,Tt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const mp=["get","getKey","getAll","getAllKeys","count"],gp=["put","add","delete","clear"],Os=new Map;function Go(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Os.get(e))return Os.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=gp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||mp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Os.set(e,i),i}fp(t=>({...t,get:(e,n,r)=>Go(e,n)||t.get(e,n,r),has:(e,n)=>!!Go(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vp(t){const e=t.getComponent();return e?.type==="VERSION"}const ni="@firebase/app",Jo="0.7.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new ol("@firebase/app"),yp="@firebase/app-compat",bp="@firebase/analytics-compat",Ep="@firebase/analytics",wp="@firebase/app-check-compat",Ip="@firebase/app-check",Tp="@firebase/auth",Rp="@firebase/auth-compat",Op="@firebase/database",Sp="@firebase/database-compat",Ap="@firebase/functions",Cp="@firebase/functions-compat",Pp="@firebase/installations",kp="@firebase/installations-compat",xp="@firebase/messaging",Np="@firebase/messaging-compat",Dp="@firebase/performance",Mp="@firebase/performance-compat",Lp="@firebase/remote-config",Up="@firebase/remote-config-compat",Bp="@firebase/storage",$p="@firebase/storage-compat",Fp="@firebase/firestore",jp="@firebase/firestore-compat",Hp="firebase",Wp="9.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="[DEFAULT]",Vp={[ni]:"fire-core",[yp]:"fire-core-compat",[Ep]:"fire-analytics",[bp]:"fire-analytics-compat",[Ip]:"fire-app-check",[wp]:"fire-app-check-compat",[Tp]:"fire-auth",[Rp]:"fire-auth-compat",[Op]:"fire-rtdb",[Sp]:"fire-rtdb-compat",[Ap]:"fire-fn",[Cp]:"fire-fn-compat",[Pp]:"fire-iid",[kp]:"fire-iid-compat",[xp]:"fire-fcm",[Np]:"fire-fcm-compat",[Dp]:"fire-perf",[Mp]:"fire-perf-compat",[Lp]:"fire-rc",[Up]:"fire-rc-compat",[Bp]:"fire-gcs",[$p]:"fire-gcs-compat",[Fp]:"fire-fst",[jp]:"fire-fst-compat","fire-js":"fire-js",[Hp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new Map,ri=new Map;function qp(t,e){try{t.container.addComponent(e)}catch(n){Bi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jn(t){const e=t.name;if(ri.has(e))return Bi.debug(`There were multiple attempts to register component ${e}.`),!1;ri.set(e,t);for(const n of Fr.values())qp(n,t);return!0}function ul(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},$t=new rr("app","Firebase",Kp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=Wp;function Gp(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:ll,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw $t.create("bad-app-name",{appName:String(r)});const s=Fr.get(r);if(s){if($r(t,s.options)&&$r(n,s.config))return s;throw $t.create("duplicate-app",{appName:r})}const i=new tp(r);for(const a of ri.values())i.addComponent(a);const o=new zp(t,n,i);return Fr.set(r,o),o}function Jp(t=ll){const e=Fr.get(t);if(!e)throw $t.create("no-app",{appName:t});return e}function fn(t,e,n){var r;let s=(r=Vp[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bi.warn(a.join(" "));return}Jn(new gn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="firebase-heartbeat-database",Xp=1,Yn="firebase-heartbeat-store";let Ss=null;function fl(){return Ss||(Ss=pp(Yp,Xp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Yn)}}}).catch(t=>{throw $t.create("storage-open",{originalErrorMessage:t.message})})),Ss}async function Qp(t){try{return(await fl()).transaction(Yn).objectStore(Yn).get(dl(t))}catch(e){throw $t.create("storage-get",{originalErrorMessage:e.message})}}async function Yo(t,e){try{const r=(await fl()).transaction(Yn,"readwrite");return await r.objectStore(Yn).put(e,dl(t)),r.done}catch(n){throw $t.create("storage-set",{originalErrorMessage:n.message})}}function dl(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=1024,em=30*24*60*60*1e3;class tm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=em}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xo(),{heartbeatsToSend:n,unsentEntries:r}=nm(this._heartbeatsCache.heartbeats),s=il(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Xo(){return new Date().toISOString().substring(0,10)}function nm(t,e=Zp){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Qo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wh()?Vh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Qp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qo(t){return il(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t){Jn(new gn("platform-logger",e=>new _p(e),"PRIVATE")),Jn(new gn("heartbeat",e=>new tm(e),"PRIVATE")),fn(ni,Jo,t),fn(ni,Jo,"esm2017"),fn("fire-js","")}sm("");var im="firebase",om="9.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn(im,om,"app");function $i(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function hl(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const am=hl,pl=new rr("auth","Firebase",hl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new ol("@firebase/auth");function Rr(t,...e){Zo.logLevel<=re.ERROR&&Zo.error(`Auth (${is}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t,...e){throw Fi(t,...e)}function Ye(t,...e){return Fi(t,...e)}function cm(t,e,n){const r=Object.assign(Object.assign({},am()),{[e]:n});return new rr("auth","Firebase",r).create(e,{appName:t.name})}function Fi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pl.create(t,...e)}function U(t,e,...n){if(!t)throw Fi(e,...n)}function rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Rr(e),new Error(e)}function ot(t,e){t||rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=new Map;function st(t){ot(t instanceof Function,"Expected a class definition");let e=ea.get(t);return e?(ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ea.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t,e){const n=ul(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if($r(i,e??{}))return s;He(s,"already-initialized")}return n.initialize({options:e})}function um(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(st);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fm(){return ta()==="http:"||ta()==="https:"}function ta(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fm()||Fh()||"connection"in navigator)?navigator.onLine:!0}function hm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n){this.shortDelay=e,this.longDelay=n,ot(n>e,"Short delay should be less than long delay!"),this.isMobile=$h()||jh()}get(){return dm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t,e){ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=new ir(3e4,6e4);function or(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ar(t,e,n,r,s={}){return gl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=sr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ml.fetch()(_l(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function gl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},pm),e);try{const s=new gm(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw gr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw gr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw gr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw gr(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw cm(t,l,u);He(t,l)}}catch(s){if(s instanceof On)throw s;He(t,"network-request-failed")}}async function cr(t,e,n,r,s={}){const i=await ar(t,e,n,r,s);return"mfaPendingCredential"in i&&He(t,"multi-factor-auth-required",{_serverResponse:i}),i}function _l(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ji(t.config,s):`${t.config.apiScheme}://${s}`}class gm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ye(this.auth,"network-request-failed")),mm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ye(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _m(t,e){return ar(t,"POST","/v1/accounts:delete",e)}async function vm(t,e){return ar(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ym(t,e=!1){const n=Vt(t),r=await n.getIdToken(e),s=Hi(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Fn(As(s.auth_time)),issuedAtTime:Fn(As(s.iat)),expirationTime:Fn(As(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function As(t){return Number(t)*1e3}function Hi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Rr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Uh(n);return s?JSON.parse(s):(Rr("Failed to decode base64 JWT payload"),null)}catch(s){return Rr("Caught error parsing JWT payload as JSON",s),null}}function bm(t){const e=Hi(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof On&&Em(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Em({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fn(this.lastLoginAt),this.creationTime=Fn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Xn(t,vm(n,{idToken:r}));U(s?.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Rm(i.providerUserInfo):[],a=Tm(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!a?.length,l=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new vl(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,f)}async function Im(t){const e=Vt(t);await jr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Tm(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Rm(t){return t.map(e=>{var{providerId:n}=e,r=$i(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Om(t,e){const n=await gl(t,{},async()=>{const r=sr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=_l(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ml.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Om(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Qn;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qn,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ut{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=$i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Xn(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ym(this,e)}reload(){return Im(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ut(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await jr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xn(this,_m(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(u=n.createdAt)!==null&&u!==void 0?u:void 0,E=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:A,emailVerified:$,isAnonymous:V,providerData:z,stsTokenManager:ae}=n;U(A&&ae,e,"internal-error");const he=Qn.fromJSON(this.name,ae);U(typeof A=="string",e,"internal-error"),lt(f,e.name),lt(h,e.name),U(typeof $=="boolean",e,"internal-error"),U(typeof V=="boolean",e,"internal-error"),lt(m,e.name),lt(w,e.name),lt(D,e.name),lt(P,e.name),lt(R,e.name),lt(E,e.name);const ie=new Ut({uid:A,auth:e,email:h,emailVerified:$,displayName:f,isAnonymous:V,photoURL:w,phoneNumber:m,tenantId:D,stsTokenManager:he,createdAt:R,lastLoginAt:E});return z&&Array.isArray(z)&&(ie.providerData=z.map(_e=>Object.assign({},_e))),P&&(ie._redirectEventId=P),ie}static async _fromIdTokenResponse(e,n,r=!1){const s=new Qn;s.updateFromServerResponse(n);const i=new Ut({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await jr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yl.type="NONE";const na=yl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t,e,n){return`firebase:${t}:${e}:${n}`}class dn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Or(this.userKey,s.apiKey,i),this.fullPersistenceKey=Or("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ut._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new dn(st(na),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||st(na);const o=Or(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const f=Ut._fromJSON(e,l);u!==i&&(a=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new dn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new dn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tl(e))return"Blackberry";if(Rl(e))return"Webos";if(Wi(e))return"Safari";if((e.includes("chrome/")||El(e))&&!e.includes("edge/"))return"Chrome";if(Il(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function bl(t=ve()){return/firefox\//i.test(t)}function Wi(t=ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function El(t=ve()){return/crios\//i.test(t)}function wl(t=ve()){return/iemobile/i.test(t)}function Il(t=ve()){return/android/i.test(t)}function Tl(t=ve()){return/blackberry/i.test(t)}function Rl(t=ve()){return/webos/i.test(t)}function os(t=ve()){return/iphone|ipad|ipod/i.test(t)}function Sm(t=ve()){var e;return os(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Am(){return Hh()&&document.documentMode===10}function Ol(t=ve()){return os(t)||Il(t)||Rl(t)||Tl(t)||/windows phone/i.test(t)||wl(t)}function Cm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t,e=[]){let n;switch(t){case"Browser":n=ra(ve());break;case"Worker":n=`${ra(ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${is}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sa(this),this.idTokenSubscription=new sa(this),this.beforeStateQueue=new Pm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pl,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=st(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await dn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s?._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&c?.user&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jr(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Vt(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(st(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&st(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await dn.create(this,[st(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function as(t){return Vt(t)}class sa{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jh(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rt("not implemented")}_getIdTokenResponse(e){return rt("not implemented")}_linkToIdToken(e,n){return rt("not implemented")}_getReauthenticationResolver(e){return rt("not implemented")}}async function xm(t,e){return ar(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nm(t,e){return cr(t,"POST","/v1/accounts:signInWithPassword",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dm(t,e){return cr(t,"POST","/v1/accounts:signInWithEmailLink",or(t,e))}async function Mm(t,e){return cr(t,"POST","/v1/accounts:signInWithEmailLink",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Vi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Zn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Zn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Nm(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Dm(e,{email:this._email,oobCode:this._password});default:He(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return xm(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Mm(e,{idToken:n,email:this._email,oobCode:this._password});default:He(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hn(t,e){return cr(t,"POST","/v1/accounts:signInWithIdp",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm="http://localhost";class Ft extends Vi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ft(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):He("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=$i(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ft(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,hn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hn(e,n)}buildRequest(){const e={requestUri:Lm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=sr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bm(t){const e=Mn(Ln(t)).link,n=e?Mn(Ln(e)).deep_link_id:null,r=Mn(Ln(t)).deep_link_id;return(r?Mn(Ln(r)).link:null)||r||n||e||t}class qi{constructor(e){var n,r,s,i,o,a;const c=Mn(Ln(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Um((s=c.mode)!==null&&s!==void 0?s:null);U(u&&l&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Bm(e);try{return new qi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.providerId=Sn.PROVIDER_ID}static credential(e,n){return Zn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qi.parseLink(n);return U(r,"argument-error"),Zn._fromEmailAndCode(e,r.code,r.tenantId)}}Sn.PROVIDER_ID="password";Sn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Sn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Al{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends lr{constructor(){super("facebook.com")}static credential(e){return Ft._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com";_t.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends lr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ft._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vt.credential(n,r)}catch{return null}}}vt.GOOGLE_SIGN_IN_METHOD="google.com";vt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends lr{constructor(){super("github.com")}static credential(e){return Ft._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com";yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends lr{constructor(){super("twitter.com")}static credential(e,n){return Ft._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return bt.credential(n,r)}catch{return null}}}bt.TWITTER_SIGN_IN_METHOD="twitter.com";bt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $m(t,e){return cr(t,"POST","/v1/accounts:signUp",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ut._fromIdTokenResponse(e,r,s),o=ia(r);return new jt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ia(r);return new jt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ia(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends On{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Hr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Hr(e,n,r,s)}}function Cl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Hr._fromErrorAndOperation(t,i,e,r):i})}async function Fm(t,e,n=!1){const r=await Xn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jm(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Xn(t,Cl(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=Hi(i.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),jt._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&He(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pl(t,e,n=!1){const r="signIn",s=await Cl(t,r,e),i=await jt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Hm(t,e){return Pl(as(t),e)}async function Wm(t,e,n){const r=as(t),s=await $m(r,{returnSecureToken:!0,email:e,password:n}),i=await jt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Vm(t,e,n){return Hm(Vt(t),Sn.credential(e,n))}function qm(t,e,n,r){return Vt(t).onAuthStateChanged(e,n,r)}function Km(t){return Vt(t).signOut()}const Wr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wr,"1"),this.storage.removeItem(Wr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(){const t=ve();return Wi(t)||os(t)}const Gm=1e3,Jm=10;class xl extends kl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=zm()&&Cm(),this.fallbackToPolling=Ol(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Am()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Jm):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Gm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xl.type="LOCAL";const Ym=xl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl extends kl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Nl.type="SESSION";const Dl=Nl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new cs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Xm(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Ki("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return window}function Zm(t){Xe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function eg(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tg(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ng(){return Ml()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll="firebaseLocalStorageDb",rg=1,Vr="firebaseLocalStorage",Ul="fbase_key";class ur{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ls(t,e){return t.transaction([Vr],e?"readwrite":"readonly").objectStore(Vr)}function sg(){const t=indexedDB.deleteDatabase(Ll);return new ur(t).toPromise()}function ii(){const t=indexedDB.open(Ll,rg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Vr,{keyPath:Ul})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Vr)?e(r):(r.close(),await sg(),e(await ii()))})})}async function oa(t,e,n){const r=ls(t,!0).put({[Ul]:e,value:n});return new ur(r).toPromise()}async function ig(t,e){const n=ls(t,!1).get(e),r=await new ur(n).toPromise();return r===void 0?null:r.value}function aa(t,e){const n=ls(t,!0).delete(e);return new ur(n).toPromise()}const og=800,ag=3;class Bl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ii(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ag)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ml()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cs._getInstance(ng()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await eg(),!this.activeServiceWorker)return;this.sender=new Qm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ii();return await oa(e,Wr,"1"),await aa(e,Wr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>oa(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ig(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>aa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ls(s,!1).getAll();return new ur(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),og)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bl.type="LOCAL";const cg=Bl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ug(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ye("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",lg().appendChild(r)})}function fg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ir(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t,e){return e?st(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends Vi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hg(t){return Pl(t.auth,new zi(t),t.bypassAuthState)}function pg(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),jm(n,new zi(t),t.bypassAuthState)}async function mg(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Fm(n,new zi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hg;case"linkViaPopup":case"linkViaRedirect":return mg;case"reauthViaPopup":case"reauthViaRedirect":return pg;default:He(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=new ir(2e3,1e4);class sn extends $l{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,sn.currentPopupAction&&sn.currentPopupAction.cancel(),sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=Ki();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,gg.get())};e()}}sn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g="pendingRedirect",Sr=new Map;class vg extends $l{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Sr.get(this.auth._key());if(!e){try{const r=await yg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Sr.set(this.auth._key(),e)}return this.bypassAuthState||Sr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yg(t,e){const n=wg(e),r=Eg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function bg(t,e){Sr.set(t._key(),e)}function Eg(t){return st(t._redirectPersistence)}function wg(t){return Or(_g,t.config.apiKey,t.name)}async function Ig(t,e,n=!1){const r=as(t),s=dg(r,e),o=await new vg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=10*60*1e3;class Rg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Og(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Fl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ye(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Tg&&this.cachedEventUids.clear(),this.cachedEventUids.has(ca(e))}saveEventToCache(e){this.cachedEventUids.add(ca(e)),this.lastProcessedEventTime=Date.now()}}function ca(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Fl({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Og(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sg(t,e={}){return ar(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cg=/^https?/;async function Pg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Sg(t);for(const n of e)try{if(kg(n))return}catch{}He(t,"unauthorized-domain")}function kg(t){const e=si(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Cg.test(n))return!1;if(Ag.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=new ir(3e4,6e4);function la(){const t=Xe().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ng(t){return new Promise((e,n)=>{var r,s,i;function o(){la(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{la(),n(Ye(t,"network-request-failed"))},timeout:xg.get()})}if(!((s=(r=Xe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Xe().gapi)===null||i===void 0)&&i.load)o();else{const a=fg("iframefcb");return Xe()[a]=()=>{gapi.load?o():n(Ye(t,"network-request-failed"))},ug(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ar=null,e})}let Ar=null;function Dg(t){return Ar=Ar||Ng(t),Ar}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=new ir(5e3,15e3),Lg="__/auth/iframe",Ug="emulator/auth/iframe",Bg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$g=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fg(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ji(e,Ug):`https://${t.config.authDomain}/${Lg}`,r={apiKey:e.apiKey,appName:t.name,v:is},s=$g.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${sr(r).slice(1)}`}async function jg(t){const e=await Dg(t),n=Xe().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:Fg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ye(t,"network-request-failed"),a=Xe().setTimeout(()=>{i(o)},Mg.get());function c(){Xe().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Wg=500,Vg=600,qg="_blank",Kg="http://localhost";class ua{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zg(t,e,n,r=Wg,s=Vg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Hg),{width:r.toString(),height:s.toString(),top:i,left:o}),u=ve().toLowerCase();n&&(a=El(u)?qg:n),bl(u)&&(e=e||Kg,c.scrollbars="yes");const l=Object.entries(c).reduce((h,[m,w])=>`${h}${m}=${w},`,"");if(Sm(u)&&a!=="_self")return Gg(e||"",a),new ua(null);const f=window.open(e||"",a,l);U(f,t,"popup-blocked");try{f.focus()}catch{}return new ua(f)}function Gg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="__/auth/handler",Yg="emulator/auth/handler";function fa(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:is,eventId:s};if(e instanceof Al){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Gh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof lr){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Xg(t)}?${sr(a).slice(1)}`}function Xg({config:t}){return t.emulator?ji(t,Yg):`https://${t.authDomain}/${Jg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="webStorageSupport";class Qg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dl,this._completeRedirectFn=Ig,this._overrideRedirectResult=bg}async _openPopup(e,n,r,s){var i;ot((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=fa(e,n,r,si(),s);return zg(e,o,Ki())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Zm(fa(e,n,r,si(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ot(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jg(e),r=new Rg(e);return n.register("authEvent",s=>(U(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cs,{type:Cs},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[Cs];o!==void 0&&n(!!o),He(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Pg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ol()||Wi()||os()}}const Zg=Qg;var da="@firebase/auth",ha="0.20.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function n_(t){Jn(new gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{U(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),U(!o?.includes(":"),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sl(t)},l=new km(a,c,u);return um(l,n),l})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Jn(new gn("auth-internal",e=>{const n=as(e.getProvider("auth").getImmediate());return(r=>new e_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(da,ha,t_(t)),fn(da,ha,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(t=Jp()){const e=ul(t,"auth");return e.isInitialized()?e.getImmediate():lm(t,{popupRedirectResolver:Zg,persistence:[cg,Ym,Dl]})}n_("Browser");const s_={apiKey:"AIzaSyB1OQVtkXe18OXGWKw2_72aAsLZXl6RiSA",authDomain:"franq-7b8f8.firebaseapp.com",projectId:"franq-7b8f8",storageBucket:"franq-7b8f8.appspot.com",messagingSenderId:"131434206088",appId:"1:131434206088:web:c1470adce5e9c018e9603d"},i_=Gp(s_),_r=r_(i_),o_={async signin({commit:t},{email:e,password:n}){const r=await Vm(_r,e,n);t("user/setData",r,{root:!0})},async signup({commit:t},{email:e,password:n}){const r=await Wm(_r,e,n);t("user/setData",r,{root:!0})},async signout({commit:t}){await Km(_r),t("user/resetData",null,{root:!0})},async currentUser({commit:t,dispatch:e}){return await new Promise((n,r)=>{qm(_r,async s=>{s?(n(s),t("user/setData",s,{root:!0})):n(void 0)})})}};var a_={namespaced:!0,actions:o_};const c_=()=>({data:null}),l_={getData(t){return t.data},isAuthenticated(t){return!!t.data}},u_={setData(t,e){t.data=e},resetData(t){t.data=null}};var f_={namespaced:!0,state:c_,getters:l_,mutations:u_},Gi=Dh({modules:{auth:a_,user:f_}});const d_="modulepreload",pa={},h_="/",Ji=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${h_}${r}`,r in pa)return;pa[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":d_,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};var Yi={exports:{}},jl=function(e,n){return function(){for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];return e.apply(n,s)}},p_=jl,Xi=Object.prototype.toString,Qi=function(t){return function(e){var n=Xi.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function qt(t){return t=t.toLowerCase(),function(n){return Qi(n)===t}}function Zi(t){return Array.isArray(t)}function qr(t){return typeof t>"u"}function m_(t){return t!==null&&!qr(t)&&t.constructor!==null&&!qr(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}var Hl=qt("ArrayBuffer");function g_(t){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Hl(t.buffer),e}function __(t){return typeof t=="string"}function v_(t){return typeof t=="number"}function Wl(t){return t!==null&&typeof t=="object"}function Cr(t){if(Qi(t)!=="object")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}var y_=qt("Date"),b_=qt("File"),E_=qt("Blob"),w_=qt("FileList");function eo(t){return Xi.call(t)==="[object Function]"}function I_(t){return Wl(t)&&eo(t.pipe)}function T_(t){var e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||Xi.call(t)===e||eo(t.toString)&&t.toString()===e)}var R_=qt("URLSearchParams");function O_(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function S_(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function to(t,e){if(!(t===null||typeof t>"u"))if(typeof t!="object"&&(t=[t]),Zi(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.call(null,t[s],s,t)}function oi(){var t={};function e(s,i){Cr(t[i])&&Cr(s)?t[i]=oi(t[i],s):Cr(s)?t[i]=oi({},s):Zi(s)?t[i]=s.slice():t[i]=s}for(var n=0,r=arguments.length;n<r;n++)to(arguments[n],e);return t}function A_(t,e,n){return to(e,function(s,i){n&&typeof s=="function"?t[i]=p_(s,n):t[i]=s}),t}function C_(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}function P_(t,e,n,r){t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,n&&Object.assign(t.prototype,n)}function k_(t,e,n){var r,s,i,o={};e=e||{};do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)i=r[s],o[i]||(e[i]=t[i],o[i]=!0);t=Object.getPrototypeOf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e}function x_(t,e,n){t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;var r=t.indexOf(e,n);return r!==-1&&r===n}function N_(t){if(!t)return null;var e=t.length;if(qr(e))return null;for(var n=new Array(e);e-- >0;)n[e]=t[e];return n}var D_=function(t){return function(e){return t&&e instanceof t}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),ge={isArray:Zi,isArrayBuffer:Hl,isBuffer:m_,isFormData:T_,isArrayBufferView:g_,isString:__,isNumber:v_,isObject:Wl,isPlainObject:Cr,isUndefined:qr,isDate:y_,isFile:b_,isBlob:E_,isFunction:eo,isStream:I_,isURLSearchParams:R_,isStandardBrowserEnv:S_,forEach:to,merge:oi,extend:A_,trim:O_,stripBOM:C_,inherits:P_,toFlatObject:k_,kindOf:Qi,kindOfTest:qt,endsWith:x_,toArray:N_,isTypedArray:D_,isFileList:w_},Xt=ge;function ma(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Vl=function(e,n,r){if(!n)return e;var s;if(r)s=r(n);else if(Xt.isURLSearchParams(n))s=n.toString();else{var i=[];Xt.forEach(n,function(c,u){c===null||typeof c>"u"||(Xt.isArray(c)?u=u+"[]":c=[c],Xt.forEach(c,function(f){Xt.isDate(f)?f=f.toISOString():Xt.isObject(f)&&(f=JSON.stringify(f)),i.push(ma(u)+"="+ma(f))}))}),s=i.join("&")}if(s){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e},M_=ge;function us(){this.handlers=[]}us.prototype.use=function(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1};us.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};us.prototype.forEach=function(e){M_.forEach(this.handlers,function(r){r!==null&&e(r)})};var L_=us,U_=ge,B_=function(e,n){U_.forEach(e,function(s,i){i!==n&&i.toUpperCase()===n.toUpperCase()&&(e[n]=s,delete e[i])})},ql=ge;function _n(t,e,n,r,s){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}ql.inherits(_n,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Kl=_n.prototype,zl={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(t){zl[t]={value:t}});Object.defineProperties(_n,zl);Object.defineProperty(Kl,"isAxiosError",{value:!0});_n.from=function(t,e,n,r,s,i){var o=Object.create(Kl);return ql.toFlatObject(t,o,function(c){return c!==Error.prototype}),_n.call(o,t.message,e,n,r,s),o.name=t.name,i&&Object.assign(o,i),o};var An=_n,Gl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Me=ge;function $_(t,e){e=e||new FormData;var n=[];function r(i){return i===null?"":Me.isDate(i)?i.toISOString():Me.isArrayBuffer(i)||Me.isTypedArray(i)?typeof Blob=="function"?new Blob([i]):Buffer.from(i):i}function s(i,o){if(Me.isPlainObject(i)||Me.isArray(i)){if(n.indexOf(i)!==-1)throw Error("Circular reference detected in "+o);n.push(i),Me.forEach(i,function(c,u){if(!Me.isUndefined(c)){var l=o?o+"."+u:u,f;if(c&&!o&&typeof c=="object"){if(Me.endsWith(u,"{}"))c=JSON.stringify(c);else if(Me.endsWith(u,"[]")&&(f=Me.toArray(c))){f.forEach(function(h){!Me.isUndefined(h)&&e.append(l,r(h))});return}}s(c,l)}}),n.pop()}else e.append(o,r(i))}return s(t),e}var Jl=$_,Ps=An,F_=function(e,n,r){var s=r.config.validateStatus;!r.status||!s||s(r.status)?e(r):n(new Ps("Request failed with status code "+r.status,[Ps.ERR_BAD_REQUEST,Ps.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))},vr=ge,j_=vr.isStandardBrowserEnv()?function(){return{write:function(n,r,s,i,o,a){var c=[];c.push(n+"="+encodeURIComponent(r)),vr.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),vr.isString(i)&&c.push("path="+i),vr.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){var r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),H_=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},W_=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e},V_=H_,q_=W_,Yl=function(e,n){return e&&!V_(n)?q_(e,n):n},ks=ge,K_=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],z_=function(e){var n={},r,s,i;return e&&ks.forEach(e.split(`
`),function(a){if(i=a.indexOf(":"),r=ks.trim(a.substr(0,i)).toLowerCase(),s=ks.trim(a.substr(i+1)),r){if(n[r]&&K_.indexOf(r)>=0)return;r==="set-cookie"?n[r]=(n[r]?n[r]:[]).concat([s]):n[r]=n[r]?n[r]+", "+s:s}}),n},ga=ge,G_=ga.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a"),r;function s(i){var o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){var a=ga.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),ai=An,J_=ge;function Xl(t){ai.call(this,t??"canceled",ai.ERR_CANCELED),this.name="CanceledError"}J_.inherits(Xl,ai,{__CANCEL__:!0});var fs=Xl,Y_=function(e){var n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""},kn=ge,X_=F_,Q_=j_,Z_=Vl,ev=Yl,tv=z_,nv=G_,rv=Gl,tt=An,sv=fs,iv=Y_,_a=function(e){return new Promise(function(r,s){var i=e.data,o=e.headers,a=e.responseType,c;function u(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}kn.isFormData(i)&&kn.isStandardBrowserEnv()&&delete o["Content-Type"];var l=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(f+":"+h)}var m=ev(e.baseURL,e.url);l.open(e.method.toUpperCase(),Z_(m,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function w(){if(!!l){var R="getAllResponseHeaders"in l?tv(l.getAllResponseHeaders()):null,E=!a||a==="text"||a==="json"?l.responseText:l.response,A={data:E,status:l.status,statusText:l.statusText,headers:R,config:e,request:l};X_(function(V){r(V),u()},function(V){s(V),u()},A),l=null}}if("onloadend"in l?l.onloadend=w:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(w)},l.onabort=function(){!l||(s(new tt("Request aborted",tt.ECONNABORTED,e,l)),l=null)},l.onerror=function(){s(new tt("Network Error",tt.ERR_NETWORK,e,l,l)),l=null},l.ontimeout=function(){var E=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",A=e.transitional||rv;e.timeoutErrorMessage&&(E=e.timeoutErrorMessage),s(new tt(E,A.clarifyTimeoutError?tt.ETIMEDOUT:tt.ECONNABORTED,e,l)),l=null},kn.isStandardBrowserEnv()){var D=(e.withCredentials||nv(m))&&e.xsrfCookieName?Q_.read(e.xsrfCookieName):void 0;D&&(o[e.xsrfHeaderName]=D)}"setRequestHeader"in l&&kn.forEach(o,function(E,A){typeof i>"u"&&A.toLowerCase()==="content-type"?delete o[A]:l.setRequestHeader(A,E)}),kn.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),a&&a!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(c=function(R){!l||(s(!R||R&&R.type?new sv:R),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c))),i||(i=null);var P=iv(m);if(P&&["http","https","file"].indexOf(P)===-1){s(new tt("Unsupported protocol "+P+":",tt.ERR_BAD_REQUEST,e));return}l.send(i)})},ov=null,ue=ge,va=B_,ya=An,av=Gl,cv=Jl,lv={"Content-Type":"application/x-www-form-urlencoded"};function ba(t,e){!ue.isUndefined(t)&&ue.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function uv(){var t;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(t=_a),t}function fv(t,e,n){if(ue.isString(t))try{return(e||JSON.parse)(t),ue.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}var ds={transitional:av,adapter:uv(),transformRequest:[function(e,n){if(va(n,"Accept"),va(n,"Content-Type"),ue.isFormData(e)||ue.isArrayBuffer(e)||ue.isBuffer(e)||ue.isStream(e)||ue.isFile(e)||ue.isBlob(e))return e;if(ue.isArrayBufferView(e))return e.buffer;if(ue.isURLSearchParams(e))return ba(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var r=ue.isObject(e),s=n&&n["Content-Type"],i;if((i=ue.isFileList(e))||r&&s==="multipart/form-data"){var o=this.env&&this.env.FormData;return cv(i?{"files[]":e}:e,o&&new o)}else if(r||s==="application/json")return ba(n,"application/json"),fv(e);return e}],transformResponse:[function(e){var n=this.transitional||ds.transitional,r=n&&n.silentJSONParsing,s=n&&n.forcedJSONParsing,i=!r&&this.responseType==="json";if(i||s&&ue.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i)throw o.name==="SyntaxError"?ya.from(o,ya.ERR_BAD_RESPONSE,this,null,this.response):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ov},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ue.forEach(["delete","get","head"],function(e){ds.headers[e]={}});ue.forEach(["post","put","patch"],function(e){ds.headers[e]=ue.merge(lv)});var no=ds,dv=ge,hv=no,pv=function(e,n,r){var s=this||hv;return dv.forEach(r,function(o){e=o.call(s,e,n)}),e},Ql=function(e){return!!(e&&e.__CANCEL__)},Ea=ge,xs=pv,mv=Ql,gv=no,_v=fs;function Ns(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new _v}var vv=function(e){Ns(e),e.headers=e.headers||{},e.data=xs.call(e,e.data,e.headers,e.transformRequest),e.headers=Ea.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Ea.forEach(["delete","get","head","post","put","patch","common"],function(s){delete e.headers[s]});var n=e.adapter||gv.adapter;return n(e).then(function(s){return Ns(e),s.data=xs.call(e,s.data,s.headers,e.transformResponse),s},function(s){return mv(s)||(Ns(e),s&&s.response&&(s.response.data=xs.call(e,s.response.data,s.response.headers,e.transformResponse))),Promise.reject(s)})},Ae=ge,Zl=function(e,n){n=n||{};var r={};function s(l,f){return Ae.isPlainObject(l)&&Ae.isPlainObject(f)?Ae.merge(l,f):Ae.isPlainObject(f)?Ae.merge({},f):Ae.isArray(f)?f.slice():f}function i(l){if(Ae.isUndefined(n[l])){if(!Ae.isUndefined(e[l]))return s(void 0,e[l])}else return s(e[l],n[l])}function o(l){if(!Ae.isUndefined(n[l]))return s(void 0,n[l])}function a(l){if(Ae.isUndefined(n[l])){if(!Ae.isUndefined(e[l]))return s(void 0,e[l])}else return s(void 0,n[l])}function c(l){if(l in n)return s(e[l],n[l]);if(l in e)return s(void 0,e[l])}var u={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return Ae.forEach(Object.keys(e).concat(Object.keys(n)),function(f){var h=u[f]||i,m=h(f);Ae.isUndefined(m)&&h!==c||(r[f]=m)}),r},eu={version:"0.27.2"},yv=eu.version,pt=An,ro={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){ro[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});var wa={};ro.transitional=function(e,n,r){function s(i,o){return"[Axios v"+yv+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return function(i,o,a){if(e===!1)throw new pt(s(o," has been removed"+(n?" in "+n:"")),pt.ERR_DEPRECATED);return n&&!wa[o]&&(wa[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function bv(t,e,n){if(typeof t!="object")throw new pt("options must be an object",pt.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(t),s=r.length;s-- >0;){var i=r[s],o=e[i];if(o){var a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new pt("option "+i+" must be "+c,pt.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new pt("Unknown option "+i,pt.ERR_BAD_OPTION)}}var Ev={assertOptions:bv,validators:ro},tu=ge,wv=Vl,Ia=L_,Ta=vv,hs=Zl,Iv=Yl,nu=Ev,Qt=nu.validators;function vn(t){this.defaults=t,this.interceptors={request:new Ia,response:new Ia}}vn.prototype.request=function(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=hs(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var r=n.transitional;r!==void 0&&nu.assertOptions(r,{silentJSONParsing:Qt.transitional(Qt.boolean),forcedJSONParsing:Qt.transitional(Qt.boolean),clarifyTimeoutError:Qt.transitional(Qt.boolean)},!1);var s=[],i=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(i=i&&m.synchronous,s.unshift(m.fulfilled,m.rejected))});var o=[];this.interceptors.response.forEach(function(m){o.push(m.fulfilled,m.rejected)});var a;if(!i){var c=[Ta,void 0];for(Array.prototype.unshift.apply(c,s),c=c.concat(o),a=Promise.resolve(n);c.length;)a=a.then(c.shift(),c.shift());return a}for(var u=n;s.length;){var l=s.shift(),f=s.shift();try{u=l(u)}catch(h){f(h);break}}try{a=Ta(u)}catch(h){return Promise.reject(h)}for(;o.length;)a=a.then(o.shift(),o.shift());return a};vn.prototype.getUri=function(e){e=hs(this.defaults,e);var n=Iv(e.baseURL,e.url);return wv(n,e.params,e.paramsSerializer)};tu.forEach(["delete","get","head","options"],function(e){vn.prototype[e]=function(n,r){return this.request(hs(r||{},{method:e,url:n,data:(r||{}).data}))}});tu.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(hs(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}vn.prototype[e]=n(),vn.prototype[e+"Form"]=n(!0)});var Tv=vn,Rv=fs;function yn(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(s){e=s});var n=this;this.promise.then(function(r){if(!!n._listeners){var s,i=n._listeners.length;for(s=0;s<i;s++)n._listeners[s](r);n._listeners=null}}),this.promise.then=function(r){var s,i=new Promise(function(o){n.subscribe(o),s=o}).then(r);return i.cancel=function(){n.unsubscribe(s)},i},t(function(s){n.reason||(n.reason=new Rv(s),e(n.reason))})}yn.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};yn.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};yn.prototype.unsubscribe=function(e){if(!!this._listeners){var n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}};yn.source=function(){var e,n=new yn(function(s){e=s});return{token:n,cancel:e}};var Ov=yn,Sv=function(e){return function(r){return e.apply(null,r)}},Av=ge,Cv=function(e){return Av.isObject(e)&&e.isAxiosError===!0},Ra=ge,Pv=jl,Pr=Tv,kv=Zl,xv=no;function ru(t){var e=new Pr(t),n=Pv(Pr.prototype.request,e);return Ra.extend(n,Pr.prototype,e),Ra.extend(n,e),n.create=function(s){return ru(kv(t,s))},n}var Te=ru(xv);Te.Axios=Pr;Te.CanceledError=fs;Te.CancelToken=Ov;Te.isCancel=Ql;Te.VERSION=eu.version;Te.toFormData=Jl;Te.AxiosError=An;Te.Cancel=Te.CanceledError;Te.all=function(e){return Promise.all(e)};Te.spread=Sv;Te.isAxiosError=Cv;Yi.exports=Te;Yi.exports.default=Te;var Nv=Yi.exports;const Dv=Nv.create({baseURL:"https://api.hgbrasil.com/",params:{format:"json-cors",key:"8c06f166"}}),Mv=()=>Dv.get("finance",{params:{fields:"currencies, stocks"}}),Lv={name:"Finance",async setup(t){let e,n;const r=Ht({currencies:"",stocks:""}),s=async()=>{await Mv().then(i=>{const{currencies:o,stocks:a}=i.data.results;r.currencies=o,r.stocks=a}).catch(i=>console.log("onLoad e",i))};return[e,n]=bd(()=>s()),await e,n(),(i,o)=>(Je(),Lt("pre",null,Iu(r),1))}},Uv=ns("div",null,"loading...",-1),Bv={key:1,class:"bg-yellow-300"},$v=cd('<div class="text-2xl font-normal">Welcome to application normal 11111</div><div class="text-2xl font-medium">Welcome to application medium</div><div class="text-2xl font-semibold">Welcome to application semibold</div><div class="text-2xl font-bold">Welcome to application bold</div><div class="text-2xl font-extrabold">Welcome to application extrabold</div><div class="text-2xl font-black">Welcome to application black</div><div class="bg-blue-500 p-8">Bla Bli</div><div class="i-carbon:money text-5xl"></div><div class="font-serif text-3xl leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>',9),Fv=[$v],jv={name:"index",setup(t){const e=zc(),n=Ie(()=>e.getters["user/isAuthenticated"]);return oh({title:"Franq"}),(r,s)=>{const i=Lv;return Je(),Lt("div",null,[Mt(n)?(Je(),Uc(wf,{key:0},{default:xt(()=>[oe(i)]),fallback:xt(()=>[Uv]),_:1})):(Je(),Lt("div",Bv,Fv))])}}},Hv=()=>Ji(()=>import("./secret.917ece1e.js"),["assets/secret.917ece1e.js","assets/route-block.7fdbc26a.js"]),Wv=()=>Ji(()=>import("./signin.c4fac30f.js"),["assets/signin.c4fac30f.js","assets/route-block.7fdbc26a.js"]),Vv=()=>Ji(()=>import("./signup.46894c75.js"),["assets/signup.46894c75.js","assets/route-block.7fdbc26a.js"]),qv=[{name:"index",path:"/",component:jv,props:!0},{name:"secret",path:"/secret",component:Hv,props:!0,meta:{avoidLoggedOff:!0}},{name:"account-signin",path:"/account/signin",component:Wv,props:!0,meta:{avoidLoggedIn:!0}},{name:"account-signup",path:"/account/signup",component:Vv,props:!0,meta:{avoidLoggedIn:!0}}];/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const su=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Cn=t=>su?Symbol(t):"_vr_"+t,Kv=Cn("rvlm"),Oa=Cn("rvd"),ps=Cn("r"),iu=Cn("rl"),ci=Cn("rvl"),rn=typeof window<"u";function zv(t){return t.__esModule||su&&t[Symbol.toStringTag]==="Module"}const Z=Object.assign;function Ds(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const jn=()=>{},Gv=/\/$/,Jv=t=>t.replace(Gv,"");function Ms(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Zv(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Yv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Sa(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Xv(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&bn(e.matched[r],n.matched[s])&&ou(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ou(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Qv(t[n],e[n]))return!1;return!0}function Qv(t,e){return Array.isArray(t)?Aa(t,e):Array.isArray(e)?Aa(e,t):t===e}function Aa(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Zv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var er;(function(t){t.pop="pop",t.push="push"})(er||(er={}));var Hn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Hn||(Hn={}));function ey(t){if(!t)if(rn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Jv(t)}const ty=/^[^#]+#/;function ny(t,e){return t.replace(ty,"#")+e}function ry(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ms=()=>({left:window.pageXOffset,top:window.pageYOffset});function sy(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=ry(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ca(t,e){return(history.state?history.state.position-e:-1)+t}const li=new Map;function iy(t,e){li.set(t,e)}function oy(t){const e=li.get(t);return li.delete(t),e}let ay=()=>location.protocol+"//"+location.host;function au(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Sa(c,"")}return Sa(n,t)+r+s}function cy(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const m=au(t,location),w=n.value,D=e.value;let P=0;if(h){if(n.value=m,e.value=h,o&&o===w){o=null;return}P=D?h.position-D.position:0}else r(m);s.forEach(R=>{R(n.value,w,{delta:P,type:er.pop,direction:P?P>0?Hn.forward:Hn.back:Hn.unknown})})};function c(){o=n.value}function u(h){s.push(h);const m=()=>{const w=s.indexOf(h);w>-1&&s.splice(w,1)};return i.push(m),m}function l(){const{history:h}=window;!h.state||h.replaceState(Z({},h.state,{scroll:ms()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:f}}function Pa(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ms():null}}function ly(t){const{history:e,location:n}=window,r={value:au(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:ay()+t+c;try{e[l?"replaceState":"pushState"](u,"",h),s.value=u}catch(m){console.error(m),n[l?"replace":"assign"](h)}}function o(c,u){const l=Z({},e.state,Pa(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=Z({},s.value,e.state,{forward:c,scroll:ms()});i(l.current,l,!0);const f=Z({},Pa(r.value,c,null),{position:l.position+1},u);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function uy(t){t=ey(t);const e=ly(t),n=cy(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Z({location:"",base:t,go:r,createHref:ny.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function fy(t){return typeof t=="string"||t&&typeof t=="object"}function cu(t){return typeof t=="string"||typeof t=="symbol"}const ut={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},lu=Cn("nf");var ka;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ka||(ka={}));function En(t,e){return Z(new Error,{type:t,[lu]:!0},e)}function ft(t,e){return t instanceof Error&&lu in t&&(e==null||!!(t.type&e))}const xa="[^/]+?",dy={sensitive:!1,strict:!1,start:!0,end:!0},hy=/[.+*?^${}()[\]/\\]/g;function py(t,e){const n=Z({},dy,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const h=u[f];let m=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(hy,"\\$&"),m+=40;else if(h.type===1){const{value:w,repeatable:D,optional:P,regexp:R}=h;i.push({name:w,repeatable:D,optional:P});const E=R||xa;if(E!==xa){m+=10;try{new RegExp(`(${E})`)}catch($){throw new Error(`Invalid custom RegExp for param "${w}" (${E}): `+$.message)}}let A=D?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(A=P&&u.length<2?`(?:/${A})`:"/"+A),P&&(A+="?"),s+=A,m+=20,P&&(m+=-8),D&&(m+=-20),E===".*"&&(m+=-50)}l.push(m)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),f={};if(!l)return null;for(let h=1;h<l.length;h++){const m=l[h]||"",w=i[h-1];f[w.name]=m&&w.repeatable?m.split("/"):m}return f}function c(u){let l="",f=!1;for(const h of t){(!f||!l.endsWith("/"))&&(l+="/"),f=!1;for(const m of h)if(m.type===0)l+=m.value;else if(m.type===1){const{value:w,repeatable:D,optional:P}=m,R=w in u?u[w]:"";if(Array.isArray(R)&&!D)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const E=Array.isArray(R)?R.join("/"):R;if(!E)if(P)h.length<2&&t.length>1&&(l.endsWith("/")?l=l.slice(0,-1):f=!0);else throw new Error(`Missing required param "${w}"`);l+=E}}return l}return{re:o,score:r,keys:i,parse:a,stringify:c}}function my(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function gy(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=my(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const _y={type:0,value:""},vy=/[a-zA-Z0-9_]/;function yy(t){if(!t)return[[]];if(t==="/")return[[_y]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function f(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function h(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:vy.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function by(t,e,n){const r=py(yy(t.path),n),s=Z(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Ey(t,e){const n=[],r=new Map;e=Da({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,f,h){const m=!h,w=Iy(l);w.aliasOf=h&&h.record;const D=Da(e,l),P=[w];if("alias"in l){const A=typeof l.alias=="string"?[l.alias]:l.alias;for(const $ of A)P.push(Z({},w,{components:h?h.record.components:w.components,path:$,aliasOf:h?h.record:w}))}let R,E;for(const A of P){const{path:$}=A;if(f&&$[0]!=="/"){const V=f.record.path,z=V[V.length-1]==="/"?"":"/";A.path=f.record.path+($&&z+$)}if(R=by(A,f,D),h?h.alias.push(R):(E=E||R,E!==R&&E.alias.push(R),m&&l.name&&!Na(R)&&o(l.name)),"children"in w){const V=w.children;for(let z=0;z<V.length;z++)i(V[z],R,h&&h.children[z])}h=h||R,c(R)}return E?()=>{o(E)}:jn}function o(l){if(cu(l)){const f=r.get(l);f&&(r.delete(l),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(l);f>-1&&(n.splice(f,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let f=0;for(;f<n.length&&gy(l,n[f])>=0&&(l.record.path!==n[f].record.path||!uu(l,n[f]));)f++;n.splice(f,0,l),l.record.name&&!Na(l)&&r.set(l.record.name,l)}function u(l,f){let h,m={},w,D;if("name"in l&&l.name){if(h=r.get(l.name),!h)throw En(1,{location:l});D=h.record.name,m=Z(wy(f.params,h.keys.filter(E=>!E.optional).map(E=>E.name)),l.params),w=h.stringify(m)}else if("path"in l)w=l.path,h=n.find(E=>E.re.test(w)),h&&(m=h.parse(w),D=h.record.name);else{if(h=f.name?r.get(f.name):n.find(E=>E.re.test(f.path)),!h)throw En(1,{location:l,currentLocation:f});D=h.record.name,m=Z({},f.params,l.params),w=h.stringify(m)}const P=[];let R=h;for(;R;)P.unshift(R.record),R=R.parent;return{name:D,path:w,params:m,matched:P,meta:Ry(P)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function wy(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Iy(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Ty(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Ty(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Na(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ry(t){return t.reduce((e,n)=>Z(e,n.meta),{})}function Da(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function uu(t,e){return e.children.some(n=>n===t||uu(t,n))}const fu=/#/g,Oy=/&/g,Sy=/\//g,Ay=/=/g,Cy=/\?/g,du=/\+/g,Py=/%5B/g,ky=/%5D/g,hu=/%5E/g,xy=/%60/g,pu=/%7B/g,Ny=/%7C/g,mu=/%7D/g,Dy=/%20/g;function so(t){return encodeURI(""+t).replace(Ny,"|").replace(Py,"[").replace(ky,"]")}function My(t){return so(t).replace(pu,"{").replace(mu,"}").replace(hu,"^")}function ui(t){return so(t).replace(du,"%2B").replace(Dy,"+").replace(fu,"%23").replace(Oy,"%26").replace(xy,"`").replace(pu,"{").replace(mu,"}").replace(hu,"^")}function Ly(t){return ui(t).replace(Ay,"%3D")}function Uy(t){return so(t).replace(fu,"%23").replace(Cy,"%3F")}function By(t){return t==null?"":Uy(t).replace(Sy,"%2F")}function Kr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function $y(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(du," "),o=i.indexOf("="),a=Kr(o<0?i:i.slice(0,o)),c=o<0?null:Kr(i.slice(o+1));if(a in e){let u=e[a];Array.isArray(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Ma(t){let e="";for(let n in t){const r=t[n];if(n=Ly(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&ui(i)):[r&&ui(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Fy(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function xn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function mt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(En(4,{from:n,to:e})):f instanceof Error?a(f):fy(f)?a(En(2,{from:e,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},u=t.call(r&&r.instances[s],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(f=>a(f))})}function Ls(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(jy(a)){const u=(a.__vccOpts||a)[e];u&&s.push(mt(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=zv(u)?u.default:u;i.components[o]=l;const h=(l.__vccOpts||l)[e];return h&&mt(h,n,r,i,o)()}))}}return s}function jy(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function La(t){const e=je(ps),n=je(iu),r=Ie(()=>e.resolve(Mt(t.to))),s=Ie(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],f=n.matched;if(!l||!f.length)return-1;const h=f.findIndex(bn.bind(null,l));if(h>-1)return h;const m=Ua(c[u-2]);return u>1&&Ua(l)===m&&f[f.length-1].path!==m?f.findIndex(bn.bind(null,c[u-2])):h}),i=Ie(()=>s.value>-1&&qy(n.params,r.value.params)),o=Ie(()=>s.value>-1&&s.value===n.matched.length-1&&ou(n.params,r.value.params));function a(c={}){return Vy(c)?e[Mt(t.replace)?"replace":"push"](Mt(t.to)).catch(jn):Promise.resolve()}return{route:r,href:Ie(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Hy=bc({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:La,setup(t,{slots:e}){const n=Ht(La(t)),{options:r}=je(ps),s=Ie(()=>({[Ba(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ba(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:jc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Wy=Hy;function Vy(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qy(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ua(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ba=(t,e,n)=>t??e??n,Ky=bc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=je(ci),s=Ie(()=>t.route||r.value),i=je(Oa,0),o=Ie(()=>s.value.matched[i]);Er(Oa,i+1),Er(Kv,o),Er(ci,s);const a=oc();return un(()=>[a.value,o.value,t.name],([c,u,l],[f,h,m])=>{u&&(u.instances[l]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!bn(u,h)||!f)&&(u.enterCallbacks[l]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=s.value,u=o.value,l=u&&u.components[t.name],f=t.name;if(!l)return $a(n.default,{Component:l,route:c});const h=u.props[t.name],m=h?h===!0?c.params:typeof h=="function"?h(c):h:null,D=jc(l,Z({},m,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(u.instances[f]=null)},ref:a}));return $a(n.default,{Component:D,route:c})||D}}});function $a(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const zy=Ky;function Gy(t){const e=Ey(t.routes,t),n=t.parseQuery||$y,r=t.stringifyQuery||Ma,s=t.history,i=xn(),o=xn(),a=xn(),c=of(ut);let u=ut;rn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Ds.bind(null,_=>""+_),f=Ds.bind(null,By),h=Ds.bind(null,Kr);function m(_,x){let S,N;return cu(_)?(S=e.getRecordMatcher(_),N=x):N=_,e.addRoute(N,S)}function w(_){const x=e.getRecordMatcher(_);x&&e.removeRoute(x)}function D(){return e.getRoutes().map(_=>_.record)}function P(_){return!!e.getRecordMatcher(_)}function R(_,x){if(x=Z({},x||c.value),typeof _=="string"){const H=Ms(n,_,x.path),d=e.resolve({path:H.path},x),p=s.createHref(H.fullPath);return Z(H,d,{params:h(d.params),hash:Kr(H.hash),redirectedFrom:void 0,href:p})}let S;if("path"in _)S=Z({},_,{path:Ms(n,_.path,x.path).path});else{const H=Z({},_.params);for(const d in H)H[d]==null&&delete H[d];S=Z({},_,{params:f(_.params)}),x.params=f(x.params)}const N=e.resolve(S,x),Y=_.hash||"";N.params=l(h(N.params));const ne=Yv(r,Z({},_,{hash:My(Y),path:N.path})),W=s.createHref(ne);return Z({fullPath:ne,hash:Y,query:r===Ma?Fy(_.query):_.query||{}},N,{redirectedFrom:void 0,href:W})}function E(_){return typeof _=="string"?Ms(n,_,c.value.path):Z({},_)}function A(_,x){if(u!==_)return En(8,{from:x,to:_})}function $(_){return ae(_)}function V(_){return $(Z(E(_),{replace:!0}))}function z(_){const x=_.matched[_.matched.length-1];if(x&&x.redirect){const{redirect:S}=x;let N=typeof S=="function"?S(_):S;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=E(N):{path:N},N.params={}),Z({query:_.query,hash:_.hash,params:_.params},N)}}function ae(_,x){const S=u=R(_),N=c.value,Y=_.state,ne=_.force,W=_.replace===!0,H=z(S);if(H)return ae(Z(E(H),{state:Y,force:ne,replace:W}),x||S);const d=S;d.redirectedFrom=x;let p;return!ne&&Xv(r,N,S)&&(p=En(16,{to:d,from:N}),zt(N,N,!0,!1)),(p?Promise.resolve(p):ie(d,N)).catch(g=>ft(g)?ft(g,2)?g:Oe(g):te(g,d,N)).then(g=>{if(g){if(ft(g,2))return ae(Z(E(g.to),{state:Y,force:ne,replace:W}),x||d)}else g=le(d,N,!0,W,Y);return _e(d,N,g),g})}function he(_,x){const S=A(_,x);return S?Promise.reject(S):Promise.resolve()}function ie(_,x){let S;const[N,Y,ne]=Jy(_,x);S=Ls(N.reverse(),"beforeRouteLeave",_,x);for(const H of N)H.leaveGuards.forEach(d=>{S.push(mt(d,_,x))});const W=he.bind(null,_,x);return S.push(W),Zt(S).then(()=>{S=[];for(const H of i.list())S.push(mt(H,_,x));return S.push(W),Zt(S)}).then(()=>{S=Ls(Y,"beforeRouteUpdate",_,x);for(const H of Y)H.updateGuards.forEach(d=>{S.push(mt(d,_,x))});return S.push(W),Zt(S)}).then(()=>{S=[];for(const H of _.matched)if(H.beforeEnter&&!x.matched.includes(H))if(Array.isArray(H.beforeEnter))for(const d of H.beforeEnter)S.push(mt(d,_,x));else S.push(mt(H.beforeEnter,_,x));return S.push(W),Zt(S)}).then(()=>(_.matched.forEach(H=>H.enterCallbacks={}),S=Ls(ne,"beforeRouteEnter",_,x),S.push(W),Zt(S))).then(()=>{S=[];for(const H of o.list())S.push(mt(H,_,x));return S.push(W),Zt(S)}).catch(H=>ft(H,8)?H:Promise.reject(H))}function _e(_,x,S){for(const N of a.list())N(_,x,S)}function le(_,x,S,N,Y){const ne=A(_,x);if(ne)return ne;const W=x===ut,H=rn?history.state:{};S&&(N||W?s.replace(_.fullPath,Z({scroll:W&&H&&H.scroll},Y)):s.push(_.fullPath,Y)),c.value=_,zt(_,x,S,W),Oe()}let Ee;function Ze(){Ee||(Ee=s.listen((_,x,S)=>{const N=R(_),Y=z(N);if(Y){ae(Z(Y,{replace:!0}),N).catch(jn);return}u=N;const ne=c.value;rn&&iy(Ca(ne.fullPath,S.delta),ms()),ie(N,ne).catch(W=>ft(W,12)?W:ft(W,2)?(ae(W.to,N).then(H=>{ft(H,20)&&!S.delta&&S.type===er.pop&&s.go(-1,!1)}).catch(jn),Promise.reject()):(S.delta&&s.go(-S.delta,!1),te(W,N,ne))).then(W=>{W=W||le(N,ne,!1),W&&(S.delta?s.go(-S.delta,!1):S.type===er.pop&&ft(W,20)&&s.go(-1,!1)),_e(N,ne,W)}).catch(jn)}))}let Ve=xn(),Kt=xn(),ce;function te(_,x,S){Oe(_);const N=Kt.list();return N.length?N.forEach(Y=>Y(_,x,S)):console.error(_),Promise.reject(_)}function J(){return ce&&c.value!==ut?Promise.resolve():new Promise((_,x)=>{Ve.add([_,x])})}function Oe(_){return ce||(ce=!_,Ze(),Ve.list().forEach(([x,S])=>_?S(_):x()),Ve.reset()),_}function zt(_,x,S,N){const{scrollBehavior:Y}=t;if(!rn||!Y)return Promise.resolve();const ne=!S&&oy(Ca(_.fullPath,0))||(N||!S)&&history.state&&history.state.scroll||null;return uc().then(()=>Y(_,x,ne)).then(W=>W&&sy(W)).catch(W=>te(W,_,x))}const et=_=>s.go(_);let qe;const ke=new Set;return{currentRoute:c,addRoute:m,removeRoute:w,hasRoute:P,getRoutes:D,resolve:R,options:t,push:$,replace:V,go:et,back:()=>et(-1),forward:()=>et(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Kt.add,isReady:J,install(_){const x=this;_.component("RouterLink",Wy),_.component("RouterView",zy),_.config.globalProperties.$router=x,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Mt(c)}),rn&&!qe&&c.value===ut&&(qe=!0,$(s.location).catch(Y=>{}));const S={};for(const Y in ut)S[Y]=Ie(()=>c.value[Y]);_.provide(ps,x),_.provide(iu,Ht(S)),_.provide(ci,c);const N=_.unmount;ke.add(_),_.unmount=function(){ke.delete(_),ke.size<1&&(u=ut,Ee&&Ee(),Ee=null,c.value=ut,qe=!1,ce=!1),N()}}}}function Zt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Jy(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>bn(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>bn(u,c))||s.push(c))}return[n,r,s]}function Yy(){return je(ps)}const Xy={class:"flex bg-gray-100 justify-around p-8"},Qy=nr("Home"),Zy=nr("Signin"),eb=nr("Signup"),tb=nr("Secret"),nb={name:"Menu",setup(t){const e=Yy(),n=zc();Ie(()=>n.getters["user/getData"]);const r=Ie(()=>n.getters["user/isAuthenticated"]),s=()=>{n.dispatch("auth/signout").then(()=>e.push({name:"index"})).catch(i=>console.log("error",i))};return(i,o)=>{const a=Pi("router-link");return Je(),Lt("div",Xy,[oe(a,{to:{name:"index"}},{default:xt(()=>[Qy]),_:1}),Mt(r)?(Je(),Lt(Le,{key:1},[oe(a,{to:{name:"secret"}},{default:xt(()=>[tb]),_:1}),ns("a",{class:"cursor-pointer",onClick:s},"Signout")],64)):(Je(),Lt(Le,{key:0},[oe(a,{to:{name:"account-signin"}},{default:xt(()=>[Zy]),_:1}),oe(a,{to:{name:"account-signup"}},{default:xt(()=>[eb]),_:1})],64))])}}},rb={class:"p-12 space-y-12 font-sans"};function sb(t,e){const n=nb,r=Pi("router-view");return Je(),Lt("div",rb,[oe(n),oe(r)])}const ib={};var ob=Vc(ib,[["render",sb]]);const ab={default:ob};function cb(t){return t.map(e=>({path:e.path,component:ab[e.meta?.layout||"default"],children:[{...e,path:""}]}))}const lb=cb(qv),io=Gy({history:uy(),routes:lb,scrollBehavior(t,e,n){return{top:0}}});await Gi.dispatch("auth/currentUser");const gu=Ie(()=>Gi.getters["user/isAuthenticated"]);io.beforeEach(async(t,e,n)=>{t.matched.some(r=>r.meta.avoidLoggedIn)&&gu.value?n({name:"index"}):n()});io.beforeEach(async(t,e,n)=>{t.matched.some(r=>r.meta.avoidLoggedOff)?gu.value?n():n({name:"account-signin"}):n()});const gs=qd(lh),ub=sh();gs.use(Gi);gs.use(io);gs.use(ub);gs.mount("#app");export{ns as a,Yy as b,Lt as c,zc as d,hb as e,oe as f,Je as o,Ht as r,oh as u,db as v,fb as w};
