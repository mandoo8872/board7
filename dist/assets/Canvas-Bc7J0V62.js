import{r as w,g as yl,R as Kt,j as T}from"./index-CN418Rqv.js";const vl={},Us=t=>{let e;const n=new Set,i=(h,u)=>{const d=typeof h=="function"?h(e):h;if(!Object.is(d,e)){const f=e;e=u??(typeof d!="object"||d===null)?d:Object.assign({},e,d),n.forEach(p=>p(e,f))}},s=()=>e,l={setState:i,getState:s,getInitialState:()=>c,subscribe:h=>(n.add(h),()=>n.delete(h)),destroy:()=>{(vl?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(i,s,l);return l},wl=t=>t?Us(t):Us;var ro={exports:{}},oo={},ao={exports:{}},lo={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tt=w;function bl(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Cl=typeof Object.is=="function"?Object.is:bl,El=Tt.useState,Il=Tt.useEffect,Sl=Tt.useLayoutEffect,Tl=Tt.useDebugValue;function xl(t,e){var n=e(),i=El({inst:{value:n,getSnapshot:e}}),s=i[0].inst,r=i[1];return Sl(function(){s.value=n,s.getSnapshot=e,pi(s)&&r({inst:s})},[t,n,e]),Il(function(){return pi(s)&&r({inst:s}),t(function(){pi(s)&&r({inst:s})})},[t]),Tl(n),n}function pi(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Cl(t,n)}catch{return!0}}function kl(t,e){return e()}var Rl=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?kl:xl;lo.useSyncExternalStore=Tt.useSyncExternalStore!==void 0?Tt.useSyncExternalStore:Rl;ao.exports=lo;var Al=ao.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kn=w,Pl=Al;function Nl(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Dl=typeof Object.is=="function"?Object.is:Nl,Ol=Pl.useSyncExternalStore,Ml=Kn.useRef,Ll=Kn.useEffect,Fl=Kn.useMemo,zl=Kn.useDebugValue;oo.useSyncExternalStoreWithSelector=function(t,e,n,i,s){var r=Ml(null);if(r.current===null){var o={hasValue:!1,value:null};r.current=o}else o=r.current;r=Fl(function(){function l(f){if(!c){if(c=!0,h=f,f=i(f),s!==void 0&&o.hasValue){var p=o.value;if(s(p,f))return u=p}return u=f}if(p=u,Dl(h,f))return p;var b=i(f);return s!==void 0&&s(p,b)?(h=f,p):(h=f,u=b)}var c=!1,h,u,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,i,s]);var a=Ol(t,r[0],r[1]);return Ll(function(){o.hasValue=!0,o.value=a},[a]),zl(a),a};ro.exports=oo;var Wl=ro.exports;const Bl=yl(Wl),co={},{useDebugValue:jl}=Kt,{useSyncExternalStoreWithSelector:$l}=Bl;let Hs=!1;const Ul=t=>t;function Hl(t,e=Ul,n){(co?"production":void 0)!=="production"&&n&&!Hs&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Hs=!0);const i=$l(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return jl(i),i}const Vs=t=>{(co?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?wl(t):t,n=(i,s)=>Hl(e,i,s);return Object.assign(n,e),n},mt=t=>t?Vs(t):Vs,Zi=mt((t,e)=>({currentTool:"select",zoom:1,viewOffset:{x:0,y:0},selectedObjectId:null,creationMode:null,hoveredObjectId:null,setCurrentTool:n=>t({currentTool:n}),setZoom:n=>t({zoom:Math.max(.05,Math.min(5,n))}),setViewOffset:n=>t({viewOffset:n}),setSelectedObjectId:n=>t({selectedObjectId:n}),setCreationMode:n=>t({creationMode:n}),setHoveredObjectId:n=>t({hoveredObjectId:n}),zoomIn:()=>t(n=>({zoom:Math.min(5,n.zoom+.1)})),zoomOut:()=>t(n=>({zoom:Math.max(.05,n.zoom-.1)})),zoomAtPoint:(n,i,s,r)=>{const o=e(),a=1.1,l=n>0?Math.min(5,o.zoom*a):Math.max(.05,o.zoom/a);if(l===o.zoom)return;const c=r.height/2,h=s-c,u=l/o.zoom,d=o.viewOffset.x,f=o.viewOffset.y+h*(1-u);t({zoom:l,viewOffset:{x:d,y:f}})},resetZoom:()=>t({zoom:1,viewOffset:{x:0,y:0}}),fitToWindow:()=>t({zoom:1,viewOffset:{x:0,y:0}})}));mt(t=>({isDragging:!1,viewCam:{x:0,y:0},snapEnabled:!0,setIsDragging:e=>t({isDragging:e}),setViewCam:e=>t({viewCam:e}),setSnapEnabled:e=>t({snapEnabled:e}),panCanvas:(e,n)=>t(i=>({viewCam:{x:i.viewCam.x+e,y:i.viewCam.y+n}})),resetView:()=>t({viewCam:{x:0,y:0}})}));const Vl=mt(t=>({currentStroke:[],currentPressureStroke:[],isDrawing:!1,penColor:"#000000",penWidth:4,usePerfectFreehand:!0,lastActionTime:0,defaultColors:["#000000","#FF0000","#00FF00","#0000FF","#FFFF00","#FF00FF","#00FFFF","#FFA500","#800080","#A52A2A"],addPoint:(e,n,i=.5,s=0,r=0)=>t(o=>({currentStroke:[...o.currentStroke,e,n],currentPressureStroke:[...o.currentPressureStroke,{x:e,y:n,pressure:i,tiltX:s,tiltY:r}]})),startStroke:()=>t({isDrawing:!0,currentStroke:[]}),endStroke:()=>t({isDrawing:!1}),clearCurrentStroke:()=>t({currentStroke:[],currentPressureStroke:[]}),setPenColor:e=>t({penColor:e}),setPenWidth:e=>t({penWidth:e}),setUsePerfectFreehand:e=>t({usePerfectFreehand:e}),updateLastActionTime:()=>t({lastActionTime:Date.now()})}));var Gs={};/**
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
 */const uo={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const _=function(t,e){if(!t)throw Dt(e)},Dt=function(t){return new Error("Firebase Database ("+uo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const ho=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Gl=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},es={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(n[h],n[u],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ho(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Gl(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw new ql;const d=r<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),u!==64){const p=c<<6&192|u;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ql extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fo=function(t){const e=ho(t);return es.encodeByteArray(e,!0)},Rn=function(t){return fo(t).replace(/\./g,"")},Pi=function(t){try{return es.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Yl(t){return po(void 0,t)}function po(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Kl(n)||(t[n]=po(t[n],e[n]));return t}function Kl(t){return t!=="__proto__"}/**
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
 */function Ql(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xl=()=>Ql().__FIREBASE_DEFAULTS__,Jl=()=>{if(typeof process>"u"||typeof Gs>"u")return;const t=Gs.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Zl=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pi(t[1]);return e&&JSON.parse(e)},go=()=>{try{return Xl()||Jl()||Zl()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ec=t=>{var e,n;return(n=(e=go())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},tc=t=>{const e=ec(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},_o=()=>{var t;return(t=go())===null||t===void 0?void 0:t.config};/**
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
 */class mn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function nc(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Rn(JSON.stringify(n)),Rn(JSON.stringify(o)),""].join(".")}/**
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
 */function ic(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ic())}function sc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oc(){return uo.NODE_ADMIN===!0}function yo(){try{return typeof indexedDB=="object"}catch{return!1}}function vo(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function ac(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const lc="FirebaseError";class yt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=lc,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qn.prototype.create)}}class Qn{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?cc(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new yt(s,a,i)}}function cc(t,e){return t.replace(uc,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const uc=/\{\$([^}]+)}/g;/**
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
 */function nn(t){return JSON.parse(t)}function le(t){return JSON.stringify(t)}/**
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
 */const wo=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=nn(Pi(r[0])||""),n=nn(Pi(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},hc=function(t){const e=wo(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},dc=function(t){const e=wo(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ze(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function xt(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function qs(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function An(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Pn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Ys(r)&&Ys(o)){if(!Pn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Ys(t){return t!==null&&typeof t=="object"}/**
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
 */function fc(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class pc{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)i[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const d=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const d=(s<<5|s>>>27)+c+l+h+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Xn(t,e){return`${t} failed: ${e} argument `}/**
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
 */const gc=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,_(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Jn=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const _c=1e3,mc=2,yc=4*60*60*1e3,vc=.5;function Ks(t,e=_c,n=mc){const i=e*Math.pow(n,t),s=Math.round(vc*i*(Math.random()-.5)*2);return Math.min(yc,i+s)}/**
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
 */function Ge(t){return t&&t._delegate?t._delegate:t}class Ue{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const at="[DEFAULT]";/**
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
 */class wc{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new mn;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cc(e))try{this.getOrInitializeService({instanceIdentifier:at})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=at){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=at){return this.instances.has(e)}getOptions(e=at){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:bc(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=at){return this.component?this.component.multipleInstances?e:at:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bc(t){return t===at?void 0:t}function Cc(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ec{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wc(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Ic={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Sc=ee.INFO,Tc={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},xc=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Tc[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ts{constructor(e){this.name=e,this._logLevel=Sc,this._logHandler=xc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ic[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const kc=(t,e)=>e.some(n=>t instanceof n);let Qs,Xs;function Rc(){return Qs||(Qs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ac(){return Xs||(Xs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bo=new WeakMap,Ni=new WeakMap,Co=new WeakMap,gi=new WeakMap,ns=new WeakMap;function Pc(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Je(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bo.set(n,t)}).catch(()=>{}),ns.set(e,t),e}function Nc(t){if(Ni.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ni.set(t,e)}let Di={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ni.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Co.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Je(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Dc(t){Di=t(Di)}function Oc(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(_i(this),e,...n);return Co.set(i,e.sort?e.sort():[e]),Je(i)}:Ac().includes(t)?function(...e){return t.apply(_i(this),e),Je(bo.get(this))}:function(...e){return Je(t.apply(_i(this),e))}}function Mc(t){return typeof t=="function"?Oc(t):(t instanceof IDBTransaction&&Nc(t),kc(t,Rc())?new Proxy(t,Di):t)}function Je(t){if(t instanceof IDBRequest)return Pc(t);if(gi.has(t))return gi.get(t);const e=Mc(t);return e!==t&&(gi.set(t,e),ns.set(e,t)),e}const _i=t=>ns.get(t);function Eo(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Je(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Je(o.result),l.oldVersion,l.newVersion,Je(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Lc=["get","getKey","getAll","getAllKeys","count"],Fc=["put","add","delete","clear"],mi=new Map;function Js(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mi.get(e))return mi.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Fc.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Lc.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return mi.set(e,r),r}Dc(t=>({...t,get:(e,n,i)=>Js(e,n)||t.get(e,n,i),has:(e,n)=>!!Js(e,n)||t.has(e,n)}));/**
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
 */class zc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Wc(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Wc(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Oi="@firebase/app",Zs="0.10.13";/**
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
 */const He=new ts("@firebase/app"),Bc="@firebase/app-compat",jc="@firebase/analytics-compat",$c="@firebase/analytics",Uc="@firebase/app-check-compat",Hc="@firebase/app-check",Vc="@firebase/auth",Gc="@firebase/auth-compat",qc="@firebase/database",Yc="@firebase/data-connect",Kc="@firebase/database-compat",Qc="@firebase/functions",Xc="@firebase/functions-compat",Jc="@firebase/installations",Zc="@firebase/installations-compat",eu="@firebase/messaging",tu="@firebase/messaging-compat",nu="@firebase/performance",iu="@firebase/performance-compat",su="@firebase/remote-config",ru="@firebase/remote-config-compat",ou="@firebase/storage",au="@firebase/storage-compat",lu="@firebase/firestore",cu="@firebase/vertexai-preview",uu="@firebase/firestore-compat",hu="firebase",du="10.14.1";/**
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
 */const Mi="[DEFAULT]",fu={[Oi]:"fire-core",[Bc]:"fire-core-compat",[$c]:"fire-analytics",[jc]:"fire-analytics-compat",[Hc]:"fire-app-check",[Uc]:"fire-app-check-compat",[Vc]:"fire-auth",[Gc]:"fire-auth-compat",[qc]:"fire-rtdb",[Yc]:"fire-data-connect",[Kc]:"fire-rtdb-compat",[Qc]:"fire-fn",[Xc]:"fire-fn-compat",[Jc]:"fire-iid",[Zc]:"fire-iid-compat",[eu]:"fire-fcm",[tu]:"fire-fcm-compat",[nu]:"fire-perf",[iu]:"fire-perf-compat",[su]:"fire-rc",[ru]:"fire-rc-compat",[ou]:"fire-gcs",[au]:"fire-gcs-compat",[lu]:"fire-fst",[uu]:"fire-fst-compat",[cu]:"fire-vertex","fire-js":"fire-js",[hu]:"fire-js-all"};/**
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
 */const sn=new Map,pu=new Map,Li=new Map;function er(t,e){try{t.container.addComponent(e)}catch(n){He.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function nt(t){const e=t.name;if(Li.has(e))return He.debug(`There were multiple attempts to register component ${e}.`),!1;Li.set(e,t);for(const n of sn.values())er(n,t);for(const n of pu.values())er(n,t);return!0}function yn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const gu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ze=new Qn("app","Firebase",gu);/**
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
 */class _u{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ze.create("app-deleted",{appName:this._name})}}/**
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
 */const mu=du;function Io(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Mi,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ze.create("bad-app-name",{appName:String(s)});if(n||(n=_o()),!n)throw Ze.create("no-options");const r=sn.get(s);if(r){if(Pn(n,r.options)&&Pn(i,r.config))return r;throw Ze.create("duplicate-app",{appName:s})}const o=new Ec(s);for(const l of Li.values())o.addComponent(l);const a=new _u(n,i,o);return sn.set(s,a),a}function is(t=Mi){const e=sn.get(t);if(!e&&t===Mi&&_o())return Io();if(!e)throw Ze.create("no-app",{appName:t});return e}function yu(){return Array.from(sn.values())}function Fe(t,e,n){var i;let s=(i=fu[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),He.warn(a.join(" "));return}nt(new Ue(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const vu="firebase-heartbeat-database",wu=1,rn="firebase-heartbeat-store";let yi=null;function So(){return yi||(yi=Eo(vu,wu,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(rn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ze.create("idb-open",{originalErrorMessage:t.message})})),yi}async function bu(t){try{const n=(await So()).transaction(rn),i=await n.objectStore(rn).get(To(t));return await n.done,i}catch(e){if(e instanceof yt)He.warn(e.message);else{const n=Ze.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});He.warn(n.message)}}}async function tr(t,e){try{const i=(await So()).transaction(rn,"readwrite");await i.objectStore(rn).put(e,To(t)),await i.done}catch(n){if(n instanceof yt)He.warn(n.message);else{const i=Ze.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});He.warn(i.message)}}}function To(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Cu=1024,Eu=30*24*60*60*1e3;class Iu{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tu(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=nr();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Eu}),this._storage.overwrite(this._heartbeatsCache))}catch(i){He.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=nr(),{heartbeatsToSend:i,unsentEntries:s}=Su(this._heartbeatsCache.heartbeats),r=Rn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return He.warn(n),""}}}function nr(){return new Date().toISOString().substring(0,10)}function Su(t,e=Cu){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),ir(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ir(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Tu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yo()?vo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bu(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return tr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return tr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ir(t){return Rn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function xu(t){nt(new Ue("platform-logger",e=>new zc(e),"PRIVATE")),nt(new Ue("heartbeat",e=>new Iu(e),"PRIVATE")),Fe(Oi,Zs,t),Fe(Oi,Zs,"esm2017"),Fe("fire-js","")}xu("");var sr={};const rr="@firebase/database",or="1.0.8";/**
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
 */let xo="";function ku(t){xo=t}/**
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
 */class Ru{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),le(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:nn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Au{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ze(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ko=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ru(e)}}catch{}return new Au},ut=ko("localStorage"),Pu=ko("sessionStorage");/**
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
 */const It=new ts("@firebase/database"),Nu=function(){let t=1;return function(){return t++}}(),Ro=function(t){const e=gc(t),n=new pc;n.update(e);const i=n.digest();return es.encodeByteArray(i)},vn=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=vn.apply(null,i):typeof i=="object"?e+=le(i):e+=i,e+=" "}return e};let Qt=null,ar=!0;const Du=function(t,e){_(!0,"Can't turn on custom loggers persistently."),It.logLevel=ee.VERBOSE,Qt=It.log.bind(It)},he=function(...t){if(ar===!0&&(ar=!1,Qt===null&&Pu.get("logging_enabled")===!0&&Du()),Qt){const e=vn.apply(null,t);Qt(e)}},wn=function(t){return function(...e){he(t,...e)}},Fi=function(...t){const e="FIREBASE INTERNAL ERROR: "+vn(...t);It.error(e)},Ve=function(...t){const e=`FIREBASE FATAL ERROR: ${vn(...t)}`;throw It.error(e),new Error(e)},ve=function(...t){const e="FIREBASE WARNING: "+vn(...t);It.warn(e)},Ou=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ve("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ss=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Mu=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},kt="[MIN_NAME]",dt="[MAX_NAME]",vt=function(t,e){if(t===e)return 0;if(t===kt||e===dt)return-1;if(e===kt||t===dt)return 1;{const n=lr(t),i=lr(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Lu=function(t,e){return t===e?0:t<e?-1:1},Wt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+le(e))},rs=function(t){if(typeof t!="object"||t===null)return le(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=le(e[i]),n+=":",n+=rs(t[e[i]]);return n+="}",n},Ao=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function de(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Po=function(t){_(!ss(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},Fu=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},zu=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Wu(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const Bu=new RegExp("^-?(0*)\\d{1,10}$"),ju=-2147483648,$u=2147483647,lr=function(t){if(Bu.test(t)){const e=Number(t);if(e>=ju&&e<=$u)return e}return null},Ot=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ve("Exception was thrown by user callback.",n),e},Math.floor(0))}},Uu=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xt=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Hu{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ve(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Vu{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(he("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ve(e)}}class xn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}xn.OWNER="owner";/**
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
 */const os="5",No="v",Do="s",Oo="r",Mo="f",Lo=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Fo="ls",zo="p",zi="ac",Wo="websocket",Bo="long_polling";/**
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
 */class jo{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ut.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ut.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Gu(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function $o(t,e,n){_(typeof e=="string","typeof type must == string"),_(typeof n=="object","typeof params must == object");let i;if(e===Wo)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Bo)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Gu(t)&&(n.ns=t.namespace);const s=[];return de(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class qu{constructor(){this.counters_={}}incrementCounter(e,n=1){ze(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Yl(this.counters_)}}/**
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
 */const vi={},wi={};function as(t){const e=t.toString();return vi[e]||(vi[e]=new qu),vi[e]}function Yu(t,e){const n=t.toString();return wi[n]||(wi[n]=e()),wi[n]}/**
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
 */class Ku{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Ot(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const cr="start",Qu="close",Xu="pLPCommand",Ju="pRTLPCB",Uo="id",Ho="pw",Vo="ser",Zu="cb",eh="seg",th="ts",nh="d",ih="dframe",Go=1870,qo=30,sh=Go-qo,rh=25e3,oh=3e4;class Et{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=wn(e),this.stats_=as(n),this.urlFn=l=>(this.appCheckToken&&(l[zi]=this.appCheckToken),$o(n,Bo,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ku(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(oh)),Mu(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ls((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===cr)this.id=a,this.password=l;else if(o===Qu)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[cr]="t",i[Vo]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Zu]=this.scriptTagHolder.uniqueCallbackIdentifier),i[No]=os,this.transportSessionId&&(i[Do]=this.transportSessionId),this.lastSessionId&&(i[Fo]=this.lastSessionId),this.applicationId&&(i[zo]=this.applicationId),this.appCheckToken&&(i[zi]=this.appCheckToken),typeof location<"u"&&location.hostname&&Lo.test(location.hostname)&&(i[Oo]=Mo);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Et.forceAllow_=!0}static forceDisallow(){Et.forceDisallow_=!0}static isAvailable(){return Et.forceAllow_?!0:!Et.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Fu()&&!zu()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=fo(n),s=Ao(i,sh);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[ih]="t",i[Uo]=e,i[Ho]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=le(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ls{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Nu(),window[Xu+this.uniqueCallbackIdentifier]=e,window[Ju+this.uniqueCallbackIdentifier]=n,this.myIFrame=ls.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){he("frame writing exception"),a.stack&&he(a.stack),he(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||he("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Uo]=this.myID,e[Ho]=this.myPW,e[Vo]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+qo+i.length<=Go;){const o=this.pendingSegs.shift();i=i+"&"+eh+s+"="+o.seg+"&"+th+s+"="+o.ts+"&"+nh+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(rh)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{he("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const ah=16384,lh=45e3;let Nn=null;typeof MozWebSocket<"u"?Nn=MozWebSocket:typeof WebSocket<"u"&&(Nn=WebSocket);class De{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=wn(this.connId),this.stats_=as(n),this.connURL=De.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[No]=os,typeof location<"u"&&location.hostname&&Lo.test(location.hostname)&&(o[Oo]=Mo),n&&(o[Do]=n),i&&(o[Fo]=i),s&&(o[zi]=s),r&&(o[zo]=r),$o(e,Wo,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ut.set("previous_websocket_failure",!0);try{let i;oc(),this.mySock=new Nn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){De.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Nn!==null&&!De.forceDisallow_}static previouslyFailed(){return ut.isInMemoryStorage||ut.get("previous_websocket_failure")===!0}markConnectionHealthy(){ut.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=nn(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Ao(n,ah);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(lh))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}De.responsesRequiredToBeHealthy=2;De.healthyTimeout=3e4;/**
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
 */class on{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Et,De]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=De&&De.isAvailable();let i=n&&!De.previouslyFailed();if(e.webSocketOnly&&(n||ve("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[De];else{const s=this.transports_=[];for(const r of on.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);on.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}on.globalTransportInitialized_=!1;/**
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
 */const ch=6e4,uh=5e3,hh=10*1024,dh=100*1024,bi="t",ur="d",fh="s",hr="r",ph="e",dr="o",fr="a",pr="n",gr="p",gh="h";class _h{constructor(e,n,i,s,r,o,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=wn("c:"+this.id+":"),this.transportManager_=new on(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Xt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>dh?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>hh?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(bi in e){const n=e[bi];n===fr?this.upgradeIfSecondaryHealthy_():n===hr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===dr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Wt("t",e),i=Wt("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:fr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:pr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Wt("t",e),i=Wt("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Wt(bi,e);if(ur in e){const i=e[ur];if(n===gh){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===pr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===fh?this.onConnectionShutdown_(i):n===hr?this.onReset_(i):n===ph?Fi("Server Error: "+i):n===dr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fi("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),os!==i&&ve("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Xt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ch))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(uh))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ut.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Yo{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Ko{constructor(e){this.allowedEvents_=e,this.listeners_={},_(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){_(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Dn extends Ko{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!mo()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Dn}getInitialEvent(e){return _(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const _r=32,mr=768;class Q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function U(){return new Q("")}function O(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function it(t){return t.pieces_.length-t.pieceNum_}function te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Q(t.pieces_,e)}function cs(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function mh(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function an(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Qo(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Q(e,0)}function ne(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof Q)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new Q(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function ye(t,e){const n=O(t),i=O(e);if(n===null)return e;if(n===i)return ye(te(t),te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function yh(t,e){const n=an(t,0),i=an(e,0);for(let s=0;s<n.length&&s<i.length;s++){const r=vt(n[s],i[s]);if(r!==0)return r}return n.length===i.length?0:n.length<i.length?-1:1}function us(t,e){if(it(t)!==it(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Re(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(it(t)>it(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class vh{constructor(e,n){this.errorPrefix_=n,this.parts_=an(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Jn(this.parts_[i]);Xo(this)}}function wh(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Jn(e),Xo(t)}function bh(t){const e=t.parts_.pop();t.byteLength_-=Jn(e),t.parts_.length>0&&(t.byteLength_-=1)}function Xo(t){if(t.byteLength_>mr)throw new Error(t.errorPrefix_+"has a key path longer than "+mr+" bytes ("+t.byteLength_+").");if(t.parts_.length>_r)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_r+") or object contains a cycle "+lt(t))}function lt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class hs extends Ko{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new hs}getInitialEvent(e){return _(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Bt=1e3,Ch=60*5*1e3,yr=30*1e3,Eh=1.3,Ih=3e4,Sh="server_kill",vr=3;class $e extends Yo{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=$e.nextPersistentConnectionId_++,this.log_=wn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Bt,this.maxReconnectDelay_=Ch,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");hs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Dn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(le(r)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new mn,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;$e.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ze(e,"w")){const i=xt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ve(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||dc(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=yr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=hc(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+le(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Fi("Unrecognized action received from server: "+le(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Bt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Bt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Ih&&(this.reconnectDelay_=Bt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Eh)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+$e.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(u){_(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?he("getToken() completed but was canceled"):(he("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new _h(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{ve(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Sh)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ve(u),l())}}}interrupt(e){he("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){he("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qs(this.interruptReasons_)&&(this.reconnectDelay_=Bt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>rs(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new Q(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){he("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=vr&&(this.reconnectDelay_=yr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){he("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=vr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+xo.replace(/\./g,"-")]=1,mo()?e["framework.cordova"]=1:rc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Dn.getInstance().currentlyOnline();return qs(this.interruptReasons_)&&e}}$e.nextPersistentConnectionId_=0;$e.nextConnectionId_=0;/**
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
 */class M{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new M(e,n)}}/**
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
 */class Zn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new M(kt,e),s=new M(kt,n);return this.compare(i,s)!==0}minPost(){return M.MIN}}/**
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
 */let Sn;class Jo extends Zn{static get __EMPTY_NODE(){return Sn}static set __EMPTY_NODE(e){Sn=e}compare(e,n){return vt(e.name,n.name)}isDefinedOn(e){throw Dt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return M.MIN}maxPost(){return new M(dt,Sn)}makePost(e,n){return _(typeof e=="string","KeyIndex indexValue must always be a string."),new M(e,Sn)}toString(){return".key"}}const St=new Jo;/**
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
 */class Tn{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ue{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??ue.RED,this.left=s??we.EMPTY_NODE,this.right=r??we.EMPTY_NODE}copy(e,n,i,s,r){return new ue(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return we.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return we.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ue.RED=!0;ue.BLACK=!1;class Th{copy(e,n,i,s,r){return this}insert(e,n,i){return new ue(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class we{constructor(e,n=we.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new we(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ue.BLACK,null,null))}remove(e){return new we(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ue.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Tn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Tn(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Tn(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Tn(this.root_,null,this.comparator_,!0,e)}}we.EMPTY_NODE=new Th;/**
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
 */function xh(t,e){return vt(t.name,e.name)}function ds(t,e){return vt(t,e)}/**
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
 */let Wi;function kh(t){Wi=t}const Zo=function(t){return typeof t=="number"?"number:"+Po(t):"string:"+t},ea=function(t){if(t.isLeafNode()){const e=t.val();_(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ze(e,".sv"),"Priority must be a string or number.")}else _(t===Wi||t.isEmpty(),"priority of unexpected type.");_(t===Wi||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let wr;class ce{constructor(e,n=ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,_(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ea(this.priorityNode_)}static set __childrenNodeConstructor(e){wr=e}static get __childrenNodeConstructor(){return wr}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:O(e)===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=O(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(_(i!==".priority"||it(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Zo(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Po(this.value_):e+=this.value_,this.lazyHash_=Ro(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ce.__childrenNodeConstructor?-1:(_(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=ce.VALUE_TYPE_ORDER.indexOf(n),r=ce.VALUE_TYPE_ORDER.indexOf(i);return _(s>=0,"Unknown leaf type: "+n),_(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let ta,na;function Rh(t){ta=t}function Ah(t){na=t}class Ph extends Zn{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?vt(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return M.MIN}maxPost(){return new M(dt,new ce("[PRIORITY-POST]",na))}makePost(e,n){const i=ta(e);return new M(n,new ce("[PRIORITY-POST]",i))}toString(){return".priority"}}const ie=new Ph;/**
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
 */const Nh=Math.log(2);class Dh{constructor(e){const n=r=>parseInt(Math.log(r)/Nh,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const On=function(t,e,n,i){t.sort(e);const s=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=t[l],d=n?n(u):u,new ue(d,u.node,ue.BLACK,null,null);{const f=parseInt(h/2,10)+l,p=s(l,f),b=s(f+1,c);return u=t[f],d=n?n(u):u,new ue(d,u.node,ue.BLACK,p,b)}},r=function(l){let c=null,h=null,u=t.length;const d=function(p,b){const E=u-p,A=u;u-=p;const S=s(E+1,A),G=t[E],k=n?n(G):G;f(new ue(k,G.node,b,null,S))},f=function(p){c?(c.left=p,c=p):(h=p,c=p)};for(let p=0;p<l.count;++p){const b=l.nextBitIsOne(),E=Math.pow(2,l.count-(p+1));b?d(E,ue.BLACK):(d(E,ue.BLACK),d(E,ue.RED))}return h},o=new Dh(t.length),a=r(o);return new we(i||e,a)};/**
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
 */let Ci;const bt={};class je{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return _(bt&&ie,"ChildrenNode.ts has not been loaded"),Ci=Ci||new je({".priority":bt},{".priority":ie}),Ci}get(e){const n=xt(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof we?n:null}hasIndex(e){return ze(this.indexSet_,e.toString())}addIndex(e,n){_(e!==St,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(M.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=On(i,e.getCompare()):a=bt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new je(h,c)}addToIndexes(e,n){const i=An(this.indexes_,(s,r)=>{const o=xt(this.indexSet_,r);if(_(o,"Missing index implementation for "+r),s===bt)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(M.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),On(a,o.getCompare())}else return bt;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new M(e.name,a))),l.insert(e,e.node)}});return new je(i,this.indexSet_)}removeFromIndexes(e,n){const i=An(this.indexes_,s=>{if(s===bt)return s;{const r=n.get(e.name);return r?s.remove(new M(e.name,r)):s}});return new je(i,this.indexSet_)}}/**
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
 */let jt;class x{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&ea(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return jt||(jt=new x(new we(ds),null,je.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||jt}updatePriority(e){return this.children_.isEmpty()?this:new x(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?jt:n}}getChild(e){const n=O(e);return n===null?this:this.getImmediateChild(n).getChild(te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(_(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new M(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?jt:this.priorityNode_;return new x(s,o,r)}}updateChild(e,n){const i=O(e);if(i===null)return n;{_(O(e)!==".priority"||it(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(te(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(ie,(o,a)=>{n[o]=a.val(e),i++,r&&x.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Zo(this.getPriority().val())+":"),this.forEachChild(ie,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Ro(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new M(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new M(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new M(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,M.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,M.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bn?-1:0}withIndex(e){if(e===St||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new x(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===St||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(ie),s=n.getIterator(ie);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===St?null:this.indexMap_.get(e.toString())}}x.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Oh extends x{constructor(){super(new we(ds),x.EMPTY_NODE,je.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return x.EMPTY_NODE}isEmpty(){return!1}}const bn=new Oh;Object.defineProperties(M,{MIN:{value:new M(kt,x.EMPTY_NODE)},MAX:{value:new M(dt,bn)}});Jo.__EMPTY_NODE=x.EMPTY_NODE;ce.__childrenNodeConstructor=x;kh(bn);Ah(bn);/**
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
 */const Mh=!0;function ae(t,e=null){if(t===null)return x.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),_(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ce(n,ae(e))}if(!(t instanceof Array)&&Mh){const n=[];let i=!1;if(de(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ae(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new M(o,l)))}}),n.length===0)return x.EMPTY_NODE;const r=On(n,xh,o=>o.name,ds);if(i){const o=On(n,ie.getCompare());return new x(r,ae(e),new je({".priority":o},{".priority":ie}))}else return new x(r,ae(e),je.Default)}else{let n=x.EMPTY_NODE;return de(t,(i,s)=>{if(ze(t,i)&&i.substring(0,1)!=="."){const r=ae(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(ae(e))}}Rh(ae);/**
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
 */class Lh extends Zn{constructor(e){super(),this.indexPath_=e,_(!F(e)&&O(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?vt(e.name,n.name):r}makePost(e,n){const i=ae(e),s=x.EMPTY_NODE.updateChild(this.indexPath_,i);return new M(n,s)}maxPost(){const e=x.EMPTY_NODE.updateChild(this.indexPath_,bn);return new M(dt,e)}toString(){return an(this.indexPath_,0).join("/")}}/**
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
 */class Fh extends Zn{compare(e,n){const i=e.node.compareTo(n.node);return i===0?vt(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return M.MIN}maxPost(){return M.MAX}makePost(e,n){const i=ae(e);return new M(n,i)}toString(){return".value"}}const zh=new Fh;/**
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
 */function ia(t){return{type:"value",snapshotNode:t}}function Rt(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ln(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function cn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Wh(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class fs{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){_(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(ln(n,a)):_(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Rt(n,i)):o.trackChildChange(cn(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ie,(s,r)=>{n.hasChild(s)||i.trackChildChange(ln(s,r))}),n.isLeafNode()||n.forEachChild(ie,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(cn(s,r,o))}else i.trackChildChange(Rt(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?x.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class un{constructor(e){this.indexedFilter_=new fs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=un.getStartPost_(e),this.endPost_=un.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new M(n,i))||(i=x.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=x.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(x.EMPTY_NODE);const r=this;return n.forEachChild(ie,(o,a)=>{r.matches(new M(o,a))||(s=s.updateImmediateChild(o,x.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Bh{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new un(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new M(n,i))||(i=x.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=x.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=x.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(x.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,x.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,f)=>u(f,d)}else o=this.index_.getCompare();const a=e;_(a.numChildren()===this.limit_,"");const l=new M(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(h&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(cn(n,i,u)),a.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(ln(n,u));const b=a.updateImmediateChild(n,x.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Rt(d.name,d.node)),b.updateImmediateChild(d.name,d.node)):b}}else return i.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(ln(c.name,c.node)),r.trackChildChange(Rt(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,x.EMPTY_NODE)):e}}/**
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
 */class ps{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:kt}hasEnd(){return this.endSet_}getIndexEndValue(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:dt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ie}copy(){const e=new ps;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jh(t){return t.loadsAllData()?new fs(t.getIndex()):t.hasLimit()?new Bh(t):new un(t)}function br(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ie?n="$priority":t.index_===zh?n="$value":t.index_===St?n="$key":(_(t.index_ instanceof Lh,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=le(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=le(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+le(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=le(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+le(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Cr(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ie&&(e.i=t.index_.toString()),e}/**
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
 */class Mn extends Yo{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=wn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(_(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Mn.getListenId_(e,i),a={};this.listens_[o]=a;const l=br(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),xt(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const i=Mn.getListenId_(e,n);delete this.listens_[i]}get(e){const n=br(e._queryParams),i=e._path.toString(),s=new mn;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+fc(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=nn(a.responseText)}catch{ve("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&ve("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class $h{constructor(){this.rootNode_=x.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ln(){return{value:null,children:new Map}}function sa(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=O(e);t.children.has(i)||t.children.set(i,Ln());const s=t.children.get(i);e=te(e),sa(s,e,n)}}function Bi(t,e,n){t.value!==null?n(e,t.value):Uh(t,(i,s)=>{const r=new Q(e.toString()+"/"+i);Bi(s,r,n)})}function Uh(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class Hh{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&de(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const Er=10*1e3,Vh=30*1e3,Gh=5*60*1e3;class qh{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Hh(e);const i=Er+(Vh-Er)*Math.random();Xt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;de(e,(s,r)=>{r>0&&ze(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Xt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Gh))}}/**
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
 */var Oe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Oe||(Oe={}));function gs(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _s(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ms(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Fn{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Oe.ACK_USER_WRITE,this.source=gs()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Q(e));return new Fn(U(),n,this.revert)}}else return _(O(this.path)===e,"operationForChild called for unrelated child."),new Fn(te(this.path),this.affectedTree,this.revert)}}/**
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
 */class hn{constructor(e,n){this.source=e,this.path=n,this.type=Oe.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new hn(this.source,U()):new hn(this.source,te(this.path))}}/**
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
 */class ft{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Oe.OVERWRITE}operationForChild(e){return F(this.path)?new ft(this.source,U(),this.snap.getImmediateChild(e)):new ft(this.source,te(this.path),this.snap)}}/**
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
 */class At{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Oe.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new Q(e));return n.isEmpty()?null:n.value?new ft(this.source,U(),n.value):new At(this.source,U(),n)}else return _(O(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new At(this.source,te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class st{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=O(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Yh{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Kh(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Wh(o.childName,o.snapshotNode))}),$t(t,s,"child_removed",e,i,n),$t(t,s,"child_added",e,i,n),$t(t,s,"child_moved",r,i,n),$t(t,s,"child_changed",e,i,n),$t(t,s,"value",e,i,n),s}function $t(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>Xh(t,a,l)),o.forEach(a=>{const l=Qh(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Qh(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Xh(t,e,n){if(e.childName==null||n.childName==null)throw Dt("Should only compare child_ events.");const i=new M(e.childName,e.snapshotNode),s=new M(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function ei(t,e){return{eventCache:t,serverCache:e}}function Jt(t,e,n,i){return ei(new st(e,n,i),t.serverCache)}function ra(t,e,n,i){return ei(t.eventCache,new st(e,n,i))}function zn(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function pt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ei;const Jh=()=>(Ei||(Ei=new we(Lu)),Ei);class Z{constructor(e,n=Jh()){this.value=e,this.children=n}static fromObject(e){let n=new Z(null);return de(e,(i,s)=>{n=n.set(new Q(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:U(),value:this.value};if(F(e))return null;{const i=O(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(te(e),n);return r!=null?{path:ne(new Q(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=O(e),i=this.children.get(n);return i!==null?i.subtree(te(e)):new Z(null)}}set(e,n){if(F(e))return new Z(n,this.children);{const i=O(e),r=(this.children.get(i)||new Z(null)).set(te(e),n),o=this.children.insert(i,r);return new Z(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new Z(null):new Z(null,this.children);{const n=O(e),i=this.children.get(n);if(i){const s=i.remove(te(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new Z(null):new Z(this.value,r)}else return this}}get(e){if(F(e))return this.value;{const n=O(e),i=this.children.get(n);return i?i.get(te(e)):null}}setTree(e,n){if(F(e))return n;{const i=O(e),r=(this.children.get(i)||new Z(null)).setTree(te(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Z(this.value,o)}}fold(e){return this.fold_(U(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(ne(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,U(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(F(e))return null;{const r=O(e),o=this.children.get(r);return o?o.findOnPath_(te(e),ne(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,U(),n)}foreachOnPath_(e,n,i){if(F(e))return this;{this.value&&i(n,this.value);const s=O(e),r=this.children.get(s);return r?r.foreachOnPath_(te(e),ne(n,s),i):new Z(null)}}foreach(e){this.foreach_(U(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(ne(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class Me{constructor(e){this.writeTree_=e}static empty(){return new Me(new Z(null))}}function Zt(t,e,n){if(F(e))return new Me(new Z(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=ye(s,e);return r=r.updateChild(o,n),new Me(t.writeTree_.set(s,r))}else{const s=new Z(n),r=t.writeTree_.setTree(e,s);return new Me(r)}}}function ji(t,e,n){let i=t;return de(n,(s,r)=>{i=Zt(i,ne(e,s),r)}),i}function Ir(t,e){if(F(e))return Me.empty();{const n=t.writeTree_.setTree(e,new Z(null));return new Me(n)}}function $i(t,e){return wt(t,e)!=null}function wt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ye(n.path,e)):null}function Sr(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ie,(i,s)=>{e.push(new M(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new M(i,s.value))}),e}function et(t,e){if(F(e))return t;{const n=wt(t,e);return n!=null?new Me(new Z(n)):new Me(t.writeTree_.subtree(e))}}function Ui(t){return t.writeTree_.isEmpty()}function Pt(t,e){return oa(U(),t.writeTree_,e)}function oa(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(_(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=oa(ne(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(ne(t,".priority"),i)),n}}/**
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
 */function ti(t,e){return ua(e,t)}function Zh(t,e,n,i,s){_(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Zt(t.visibleWrites,e,n)),t.lastWriteId=i}function ed(t,e,n,i){_(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=ji(t.visibleWrites,e,n),t.lastWriteId=i}function td(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function nd(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);_(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&id(a,i.path)?s=!1:Re(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return sd(t),!0;if(i.snap)t.visibleWrites=Ir(t.visibleWrites,i.path);else{const a=i.children;de(a,l=>{t.visibleWrites=Ir(t.visibleWrites,ne(i.path,l))})}return!0}else return!1}function id(t,e){if(t.snap)return Re(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Re(ne(t.path,n),e))return!0;return!1}function sd(t){t.visibleWrites=aa(t.allWrites,rd,U()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function rd(t){return t.visible}function aa(t,e,n){let i=Me.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)Re(n,o)?(a=ye(n,o),i=Zt(i,a,r.snap)):Re(o,n)&&(a=ye(o,n),i=Zt(i,U(),r.snap.getChild(a)));else if(r.children){if(Re(n,o))a=ye(n,o),i=ji(i,a,r.children);else if(Re(o,n))if(a=ye(o,n),F(a))i=ji(i,U(),r.children);else{const l=xt(r.children,O(a));if(l){const c=l.getChild(te(a));i=Zt(i,U(),c)}}}else throw Dt("WriteRecord should have .snap or .children")}}return i}function la(t,e,n,i,s){if(!i&&!s){const r=wt(t.visibleWrites,e);if(r!=null)return r;{const o=et(t.visibleWrites,e);if(Ui(o))return n;if(n==null&&!$i(o,U()))return null;{const a=n||x.EMPTY_NODE;return Pt(o,a)}}}else{const r=et(t.visibleWrites,e);if(!s&&Ui(r))return n;if(!s&&n==null&&!$i(r,U()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Re(c.path,e)||Re(e,c.path))},a=aa(t.allWrites,o,e),l=n||x.EMPTY_NODE;return Pt(a,l)}}}function od(t,e,n){let i=x.EMPTY_NODE;const s=wt(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ie,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=et(t.visibleWrites,e);return n.forEachChild(ie,(o,a)=>{const l=Pt(et(r,new Q(o)),a);i=i.updateImmediateChild(o,l)}),Sr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=et(t.visibleWrites,e);return Sr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function ad(t,e,n,i,s){_(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=ne(e,n);if($i(t.visibleWrites,r))return null;{const o=et(t.visibleWrites,r);return Ui(o)?s.getChild(n):Pt(o,s.getChild(n))}}function ld(t,e,n,i){const s=ne(e,n),r=wt(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=et(t.visibleWrites,s);return Pt(o,i.getNode().getImmediateChild(n))}else return null}function cd(t,e){return wt(t.visibleWrites,e)}function ud(t,e,n,i,s,r,o){let a;const l=et(t.visibleWrites,e),c=wt(l,U());if(c!=null)a=c;else if(n!=null)a=Pt(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&h.length<s;)u(f,i)!==0&&h.push(f),f=d.getNext();return h}else return[]}function hd(){return{visibleWrites:Me.empty(),allWrites:[],lastWriteId:-1}}function Wn(t,e,n,i){return la(t.writeTree,t.treePath,e,n,i)}function ys(t,e){return od(t.writeTree,t.treePath,e)}function Tr(t,e,n,i){return ad(t.writeTree,t.treePath,e,n,i)}function Bn(t,e){return cd(t.writeTree,ne(t.treePath,e))}function dd(t,e,n,i,s,r){return ud(t.writeTree,t.treePath,e,n,i,s,r)}function vs(t,e,n){return ld(t.writeTree,t.treePath,e,n)}function ca(t,e){return ua(ne(t.treePath,e),t.writeTree)}function ua(t,e){return{treePath:t,writeTree:e}}/**
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
 */class fd{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;_(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),_(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,cn(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,ln(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,Rt(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,cn(i,e.snapshotNode,s.oldSnap));else throw Dt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class pd{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const ha=new pd;class ws{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new st(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return vs(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:pt(this.viewCache_),r=dd(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function gd(t){return{filter:t}}function _d(t,e){_(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),_(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function md(t,e,n,i,s){const r=new fd;let o,a;if(n.type===Oe.OVERWRITE){const c=n;c.source.fromUser?o=Hi(t,e,c.path,c.snap,i,s,r):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!F(c.path),o=jn(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===Oe.MERGE){const c=n;c.source.fromUser?o=vd(t,e,c.path,c.children,i,s,r):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Vi(t,e,c.path,c.children,i,s,a,r))}else if(n.type===Oe.ACK_USER_WRITE){const c=n;c.revert?o=Cd(t,e,c.path,i,s,r):o=wd(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===Oe.LISTEN_COMPLETE)o=bd(t,e,n.path,i,r);else throw Dt("Unknown operation type: "+n.type);const l=r.getChanges();return yd(e,o,l),{viewCache:o,changes:l}}function yd(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=zn(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(ia(zn(e)))}}function da(t,e,n,i,s,r){const o=e.eventCache;if(Bn(i,n)!=null)return e;{let a,l;if(F(n))if(_(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=pt(e),h=c instanceof x?c:x.EMPTY_NODE,u=ys(i,h);a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=Wn(i,pt(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=O(n);if(c===".priority"){_(it(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=Tr(i,n,h,l);u!=null?a=t.filter.updatePriority(h,u):a=o.getNode()}else{const h=te(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Tr(i,n,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=vs(i,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,h,s,r):a=o.getNode()}}return Jt(e,a,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function jn(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(F(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),f,null)}else{const f=O(n);if(!l.isCompleteForPath(n)&&it(n)>1)return e;const p=te(n),E=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=h.updatePriority(l.getNode(),E):c=h.updateChild(l.getNode(),f,E,p,ha,null)}const u=ra(e,c,l.isFullyInitialized()||F(n),h.filtersNodes()),d=new ws(s,u,r);return da(t,u,n,s,d,a)}function Hi(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const h=new ws(s,e,r);if(F(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Jt(e,c,!0,t.filter.filtersNodes());else{const u=O(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Jt(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=te(n),f=a.getNode().getImmediateChild(u);let p;if(F(d))p=i;else{const b=h.getCompleteChild(u);b!=null?cs(d)===".priority"&&b.getChild(Qo(d)).isEmpty()?p=b:p=b.updateChild(d,i):p=x.EMPTY_NODE}if(f.equals(p))l=e;else{const b=t.filter.updateChild(a.getNode(),u,p,d,h,o);l=Jt(e,b,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function xr(t,e){return t.eventCache.isCompleteForChild(e)}function vd(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const h=ne(n,l);xr(e,O(h))&&(a=Hi(t,a,h,c,s,r,o))}),i.foreach((l,c)=>{const h=ne(n,l);xr(e,O(h))||(a=Hi(t,a,h,c,s,r,o))}),a}function kr(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Vi(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;F(n)?c=i:c=new Z(null).setTree(n,i);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const f=e.serverCache.getNode().getImmediateChild(u),p=kr(t,f,d);l=jn(t,l,new Q(u),p,s,r,o,a)}}),c.children.inorderTraversal((u,d)=>{const f=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!f){const p=e.serverCache.getNode().getImmediateChild(u),b=kr(t,p,d);l=jn(t,l,new Q(u),b,s,r,o,a)}}),l}function wd(t,e,n,i,s,r,o){if(Bn(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(F(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return jn(t,e,n,l.getNode().getChild(n),s,r,a,o);if(F(n)){let c=new Z(null);return l.getNode().forEachChild(St,(h,u)=>{c=c.set(new Q(h),u)}),Vi(t,e,n,c,s,r,a,o)}else return e}else{let c=new Z(null);return i.foreach((h,u)=>{const d=ne(n,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),Vi(t,e,n,c,s,r,a,o)}}function bd(t,e,n,i,s){const r=e.serverCache,o=ra(e,r.getNode(),r.isFullyInitialized()||F(n),r.isFiltered());return da(t,o,n,i,ha,s)}function Cd(t,e,n,i,s,r){let o;if(Bn(i,n)!=null)return e;{const a=new ws(i,e,s),l=e.eventCache.getNode();let c;if(F(n)||O(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Wn(i,pt(e));else{const u=e.serverCache.getNode();_(u instanceof x,"serverChildren would be complete if leaf node"),h=ys(i,u)}h=h,c=t.filter.updateFullNode(l,h,r)}else{const h=O(n);let u=vs(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=t.filter.updateChild(l,h,u,te(n),a,r):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,x.EMPTY_NODE,te(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Wn(i,pt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Bn(i,U())!=null,Jt(e,c,o,t.filter.filtersNodes())}}/**
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
 */class Ed{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new fs(i.getIndex()),r=jh(i);this.processor_=gd(r);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(x.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(x.EMPTY_NODE,a.getNode(),null),h=new st(l,o.isFullyInitialized(),s.filtersNodes()),u=new st(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ei(u,h),this.eventGenerator_=new Yh(this.query_)}get query(){return this.query_}}function Id(t){return t.viewCache_.serverCache.getNode()}function Sd(t){return zn(t.viewCache_)}function Td(t,e){const n=pt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(O(e)).isEmpty())?n.getChild(e):null}function Rr(t){return t.eventRegistrations_.length===0}function xd(t,e){t.eventRegistrations_.push(e)}function Ar(t,e,n){const i=[];if(n){_(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function Pr(t,e,n,i){e.type===Oe.MERGE&&e.source.queryId!==null&&(_(pt(t.viewCache_),"We should always have a full cache before handling merges"),_(zn(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=md(t.processor_,s,e,n,i);return _d(t.processor_,r.viewCache),_(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,fa(t,r.changes,r.viewCache.eventCache.getNode(),null)}function kd(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ie,(r,o)=>{i.push(Rt(r,o))}),n.isFullyInitialized()&&i.push(ia(n.getNode())),fa(t,i,n.getNode(),e)}function fa(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return Kh(t.eventGenerator_,e,n,s)}/**
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
 */let $n;class pa{constructor(){this.views=new Map}}function Rd(t){_(!$n,"__referenceConstructor has already been defined"),$n=t}function Ad(){return _($n,"Reference.ts has not been loaded"),$n}function Pd(t){return t.views.size===0}function bs(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return _(r!=null,"SyncTree gave us an op for an invalid query."),Pr(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Pr(o,e,n,i));return r}}function ga(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Wn(n,s?i:null),l=!1;a?l=!0:i instanceof x?(a=ys(n,i),l=!1):(a=x.EMPTY_NODE,l=!1);const c=ei(new st(a,l,!1),new st(i,s,!1));return new Ed(e,c)}return o}function Nd(t,e,n,i,s,r){const o=ga(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),xd(o,n),kd(o,n)}function Dd(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=rt(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(Ar(c,n,i)),Rr(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(Ar(l,n,i)),Rr(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!rt(t)&&r.push(new(Ad())(e._repo,e._path)),{removed:r,events:o}}function _a(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function tt(t,e){let n=null;for(const i of t.views.values())n=n||Td(i,e);return n}function ma(t,e){if(e._queryParams.loadsAllData())return ni(t);{const i=e._queryIdentifier;return t.views.get(i)}}function ya(t,e){return ma(t,e)!=null}function rt(t){return ni(t)!=null}function ni(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Un;function Od(t){_(!Un,"__referenceConstructor has already been defined"),Un=t}function Md(){return _(Un,"Reference.ts has not been loaded"),Un}let Ld=1;class Nr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Z(null),this.pendingWriteTree_=hd(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function va(t,e,n,i,s){return Zh(t.pendingWriteTree_,e,n,i,s),s?Mt(t,new ft(gs(),e,n)):[]}function Fd(t,e,n,i){ed(t.pendingWriteTree_,e,n,i);const s=Z.fromObject(n);return Mt(t,new At(gs(),e,s))}function Qe(t,e,n=!1){const i=td(t.pendingWriteTree_,e);if(nd(t.pendingWriteTree_,e)){let r=new Z(null);return i.snap!=null?r=r.set(U(),!0):de(i.children,o=>{r=r.set(new Q(o),!0)}),Mt(t,new Fn(i.path,r,n))}else return[]}function Cn(t,e,n){return Mt(t,new ft(_s(),e,n))}function zd(t,e,n){const i=Z.fromObject(n);return Mt(t,new At(_s(),e,i))}function Wd(t,e){return Mt(t,new hn(_s(),e))}function Bd(t,e,n){const i=Es(t,n);if(i){const s=Is(i),r=s.path,o=s.queryId,a=ye(r,e),l=new hn(ms(o),a);return Ss(t,r,l)}else return[]}function Hn(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||ya(o,e))){const l=Dd(o,e,n,i);Pd(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(d,f)=>rt(f));if(h&&!u){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=Ud(d);for(let p=0;p<f.length;++p){const b=f[p],E=b.query,A=Ea(t,b);t.listenProvider_.startListening(en(E),dn(t,E),A.hashFn,A.onComplete)}}}!u&&c.length>0&&!i&&(h?t.listenProvider_.stopListening(en(e),null):c.forEach(d=>{const f=t.queryToTagMap.get(ii(d));t.listenProvider_.stopListening(en(d),f)}))}Hd(t,c)}return a}function wa(t,e,n,i){const s=Es(t,i);if(s!=null){const r=Is(s),o=r.path,a=r.queryId,l=ye(o,e),c=new ft(ms(a),l,n);return Ss(t,o,c)}else return[]}function jd(t,e,n,i){const s=Es(t,i);if(s){const r=Is(s),o=r.path,a=r.queryId,l=ye(o,e),c=Z.fromObject(n),h=new At(ms(a),l,c);return Ss(t,o,h)}else return[]}function Gi(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(d,f)=>{const p=ye(d,s);r=r||tt(f,p),o=o||rt(f)});let a=t.syncPointTree_.get(s);a?(o=o||rt(a),r=r||tt(a,U())):(a=new pa,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=x.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((f,p)=>{const b=tt(p,U());b&&(r=r.updateImmediateChild(f,b))}));const c=ya(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=ii(e);_(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=Vd();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const h=ti(t.pendingWriteTree_,s);let u=Nd(a,e,n,h,r,l);if(!c&&!o&&!i){const d=ma(a,e);u=u.concat(Gd(t,e,d))}return u}function Cs(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ye(o,e),c=tt(a,l);if(c)return c});return la(s,e,r,n,!0)}function $d(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const u=ye(c,n);i=i||tt(h,u)});let s=t.syncPointTree_.get(n);s?i=i||tt(s,U()):(s=new pa,t.syncPointTree_=t.syncPointTree_.set(n,s));const r=i!=null,o=r?new st(i,!0,!1):null,a=ti(t.pendingWriteTree_,e._path),l=ga(s,e,a,r?o.getNode():x.EMPTY_NODE,r);return Sd(l)}function Mt(t,e){return ba(e,t.syncPointTree_,null,ti(t.pendingWriteTree_,U()))}function ba(t,e,n,i){if(F(t.path))return Ca(t,e,n,i);{const s=e.get(U());n==null&&s!=null&&(n=tt(s,U()));let r=[];const o=O(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,h=ca(i,o);r=r.concat(ba(a,l,c,h))}return s&&(r=r.concat(bs(s,t,i,n))),r}}function Ca(t,e,n,i){const s=e.get(U());n==null&&s!=null&&(n=tt(s,U()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=ca(i,o),h=t.operationForChild(o);h&&(r=r.concat(Ca(h,a,l,c)))}),s&&(r=r.concat(bs(s,t,i,n))),r}function Ea(t,e){const n=e.query,i=dn(t,n);return{hashFn:()=>(Id(e)||x.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Bd(t,n._path,i):Wd(t,n._path);{const r=Wu(s,n);return Hn(t,n,null,r)}}}}function dn(t,e){const n=ii(e);return t.queryToTagMap.get(n)}function ii(t){return t._path.toString()+"$"+t._queryIdentifier}function Es(t,e){return t.tagToQueryMap.get(e)}function Is(t){const e=t.indexOf("$");return _(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Q(t.substr(0,e))}}function Ss(t,e,n){const i=t.syncPointTree_.get(e);_(i,"Missing sync point for query tag that we're tracking");const s=ti(t.pendingWriteTree_,e);return bs(i,n,s,null)}function Ud(t){return t.fold((e,n,i)=>{if(n&&rt(n))return[ni(n)];{let s=[];return n&&(s=_a(n)),de(i,(r,o)=>{s=s.concat(o)}),s}})}function en(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Md())(t._repo,t._path):t}function Hd(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=ii(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function Vd(){return Ld++}function Gd(t,e,n){const i=e._path,s=dn(t,e),r=Ea(t,n),o=t.listenProvider_.startListening(en(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)_(!rt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!F(c)&&h&&rt(h))return[ni(h).query];{let d=[];return h&&(d=d.concat(_a(h).map(f=>f.query))),de(u,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const h=l[c];t.listenProvider_.stopListening(en(h),dn(t,h))}}return o}/**
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
 */class Ts{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ts(n)}node(){return this.node_}}class xs{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ne(this.path_,e);return new xs(this.syncTree_,n)}node(){return Cs(this.syncTree_,this.path_)}}const qd=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Dr=function(t,e,n){if(!t||typeof t!="object")return t;if(_(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Yd(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Kd(t[".sv"],e);_(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Yd=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:_(!1,"Unexpected server value: "+t)}},Kd=function(t,e,n){t.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&_(!1,"Unexpected increment value: "+i);const s=e.node();if(_(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Ia=function(t,e,n,i){return ks(e,new xs(n,t),i)},Sa=function(t,e,n){return ks(t,new Ts(e),n)};function ks(t,e,n){const i=t.getPriority().val(),s=Dr(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Dr(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new ce(a,ae(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ce(s))),o.forEachChild(ie,(a,l)=>{const c=ks(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Rs{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function As(t,e){let n=e instanceof Q?e:new Q(e),i=t,s=O(n);for(;s!==null;){const r=xt(i.node.children,s)||{children:{},childCount:0};i=new Rs(s,i,r),n=te(n),s=O(n)}return i}function Lt(t){return t.node.value}function Ta(t,e){t.node.value=e,qi(t)}function xa(t){return t.node.childCount>0}function Qd(t){return Lt(t)===void 0&&!xa(t)}function si(t,e){de(t.node.children,(n,i)=>{e(new Rs(n,t,i))})}function ka(t,e,n,i){n&&!i&&e(t),si(t,s=>{ka(s,e,!0,i)}),n&&i&&e(t)}function Xd(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function En(t){return new Q(t.parent===null?t.name:En(t.parent)+"/"+t.name)}function qi(t){t.parent!==null&&Jd(t.parent,t.name,t)}function Jd(t,e,n){const i=Qd(n),s=ze(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,qi(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,qi(t))}/**
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
 */const Zd=/[\[\].#$\/\u0000-\u001F\u007F]/,ef=/[\[\].#$\u0000-\u001F\u007F]/,Ii=10*1024*1024,Ps=function(t){return typeof t=="string"&&t.length!==0&&!Zd.test(t)},Ra=function(t){return typeof t=="string"&&t.length!==0&&!ef.test(t)},tf=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ra(t)},nf=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ss(t)||t&&typeof t=="object"&&ze(t,".sv")},Aa=function(t,e,n,i){i&&e===void 0||ri(Xn(t,"value"),e,n)},ri=function(t,e,n){const i=n instanceof Q?new vh(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+lt(i));if(typeof e=="function")throw new Error(t+"contains a function "+lt(i)+" with contents = "+e.toString());if(ss(e))throw new Error(t+"contains "+e.toString()+" "+lt(i));if(typeof e=="string"&&e.length>Ii/3&&Jn(e)>Ii)throw new Error(t+"contains a string greater than "+Ii+" utf8 bytes "+lt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(de(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ps(o)))throw new Error(t+" contains an invalid key ("+o+") "+lt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);wh(i,o),ri(t,a,i),bh(i)}),s&&r)throw new Error(t+' contains ".value" child '+lt(i)+" in addition to actual children.")}},sf=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const r=an(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Ps(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(yh);let s=null;for(n=0;n<e.length;n++){if(i=e[n],s!==null&&Re(s,i))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},rf=function(t,e,n,i){const s=Xn(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];de(e,(o,a)=>{const l=new Q(o);if(ri(s,a,ne(n,l)),cs(l)===".priority"&&!nf(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),sf(s,r)},Pa=function(t,e,n,i){if(!Ra(n))throw new Error(Xn(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},of=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Pa(t,e,n)},Ns=function(t,e){if(O(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},af=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ps(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!tf(n))throw new Error(Xn(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class lf{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function oi(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!us(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Na(t,e,n){oi(t,n),Da(t,i=>us(i,e))}function Ae(t,e,n){oi(t,n),Da(t,i=>Re(i,e)||Re(e,i))}function Da(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(cf(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function cf(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Qt&&he("event: "+n.toString()),Ot(i)}}}/**
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
 */const uf="repo_interrupt",hf=25;class df{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lf,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ln(),this.transactionQueueTree_=new Rs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ff(t,e,n){if(t.stats_=as(t.repoInfo_),t.forceRestClient_||Uu())t.server_=new Mn(t.repoInfo_,(i,s,r,o)=>{Or(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Mr(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{le(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new $e(t.repoInfo_,e,(i,s,r,o)=>{Or(t,i,s,r,o)},i=>{Mr(t,i)},i=>{pf(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Yu(t.repoInfo_,()=>new qh(t.stats_,t.server_)),t.infoData_=new $h,t.infoSyncTree_=new Nr({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Cn(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ds(t,"connected",!1),t.serverSyncTree_=new Nr({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Ae(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function Oa(t){const n=t.infoData_.getNode(new Q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ai(t){return qd({timestamp:Oa(t)})}function Or(t,e,n,i,s){t.dataUpdateCount++;const r=new Q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=An(n,c=>ae(c));o=jd(t.serverSyncTree_,r,l,s)}else{const l=ae(n);o=wa(t.serverSyncTree_,r,l,s)}else if(i){const l=An(n,c=>ae(c));o=zd(t.serverSyncTree_,r,l)}else{const l=ae(n);o=Cn(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Nt(t,r)),Ae(t.eventQueue_,a,o)}function Mr(t,e){Ds(t,"connected",e),e===!1&&yf(t)}function pf(t,e){de(e,(n,i)=>{Ds(t,n,i)})}function Ds(t,e,n){const i=new Q("/.info/"+e),s=ae(n);t.infoData_.updateSnapshot(i,s);const r=Cn(t.infoSyncTree_,i,s);Ae(t.eventQueue_,i,r)}function Os(t){return t.nextWriteId_++}function gf(t,e,n){const i=$d(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(s=>{const r=ae(s).withIndex(e._queryParams.getIndex());Gi(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Cn(t.serverSyncTree_,e._path,r);else{const a=dn(t.serverSyncTree_,e);o=wa(t.serverSyncTree_,e._path,r,a)}return Ae(t.eventQueue_,e._path,o),Hn(t.serverSyncTree_,e,n,null,!0),r},s=>(In(t,"get for query "+le(e)+" failed: "+s),Promise.reject(new Error(s))))}function _f(t,e,n,i,s){In(t,"set",{path:e.toString(),value:n,priority:i});const r=ai(t),o=ae(n,i),a=Cs(t.serverSyncTree_,e),l=Sa(o,a,r),c=Os(t),h=va(t.serverSyncTree_,e,l,c,!0);oi(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(d,f)=>{const p=d==="ok";p||ve("set at "+e+" failed: "+d);const b=Qe(t.serverSyncTree_,c,!p);Ae(t.eventQueue_,e,b),Yi(t,s,d,f)});const u=Ls(t,e);Nt(t,u),Ae(t.eventQueue_,u,[])}function mf(t,e,n,i){In(t,"update",{path:e.toString(),value:n});let s=!0;const r=ai(t),o={};if(de(n,(a,l)=>{s=!1,o[a]=Ia(ne(e,a),ae(l),t.serverSyncTree_,r)}),s)he("update() called with empty data.  Don't do anything."),Yi(t,i,"ok",void 0);else{const a=Os(t),l=Fd(t.serverSyncTree_,e,o,a);oi(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,h)=>{const u=c==="ok";u||ve("update at "+e+" failed: "+c);const d=Qe(t.serverSyncTree_,a,!u),f=d.length>0?Nt(t,e):e;Ae(t.eventQueue_,f,d),Yi(t,i,c,h)}),de(n,c=>{const h=Ls(t,ne(e,c));Nt(t,h)}),Ae(t.eventQueue_,e,[])}}function yf(t){In(t,"onDisconnectEvents");const e=ai(t),n=Ln();Bi(t.onDisconnect_,U(),(s,r)=>{const o=Ia(s,r,t.serverSyncTree_,e);sa(n,s,o)});let i=[];Bi(n,U(),(s,r)=>{i=i.concat(Cn(t.serverSyncTree_,s,r));const o=Ls(t,s);Nt(t,o)}),t.onDisconnect_=Ln(),Ae(t.eventQueue_,U(),i)}function vf(t,e,n){let i;O(e._path)===".info"?i=Gi(t.infoSyncTree_,e,n):i=Gi(t.serverSyncTree_,e,n),Na(t.eventQueue_,e._path,i)}function wf(t,e,n){let i;O(e._path)===".info"?i=Hn(t.infoSyncTree_,e,n):i=Hn(t.serverSyncTree_,e,n),Na(t.eventQueue_,e._path,i)}function bf(t){t.persistentConnection_&&t.persistentConnection_.interrupt(uf)}function In(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),he(n,...e)}function Yi(t,e,n,i){e&&Ot(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Ma(t,e,n){return Cs(t.serverSyncTree_,e,n)||x.EMPTY_NODE}function Ms(t,e=t.transactionQueueTree_){if(e||li(t,e),Lt(e)){const n=Fa(t,e);_(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&Cf(t,En(e),n)}else xa(e)&&si(e,n=>{Ms(t,n)})}function Cf(t,e,n){const i=n.map(c=>c.currentWriteId),s=Ma(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const h=n[c];_(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=ye(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{In(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(Qe(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();li(t,As(t.transactionQueueTree_,e)),Ms(t,t.transactionQueueTree_),Ae(t.eventQueue_,e,h);for(let d=0;d<u.length;d++)Ot(u[d])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{ve("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Nt(t,e)}},o)}function Nt(t,e){const n=La(t,e),i=En(n),s=Fa(t,n);return Ef(t,s,i),i}function Ef(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ye(n,l.path);let h=!1,u;if(_(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,s=s.concat(Qe(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=hf)h=!0,u="maxretry",s=s.concat(Qe(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Ma(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){ri("transaction failed: Data returned ",f,l.path);let p=ae(f);typeof f=="object"&&f!=null&&ze(f,".priority")||(p=p.updatePriority(d.getPriority()));const E=l.currentWriteId,A=ai(t),S=Sa(p,d,A);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=S,l.currentWriteId=Os(t),o.splice(o.indexOf(E),1),s=s.concat(va(t.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),s=s.concat(Qe(t.serverSyncTree_,E,!0))}else h=!0,u="nodata",s=s.concat(Qe(t.serverSyncTree_,l.currentWriteId,!0))}Ae(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}li(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Ot(i[a]);Ms(t,t.transactionQueueTree_)}function La(t,e){let n,i=t.transactionQueueTree_;for(n=O(e);n!==null&&Lt(i)===void 0;)i=As(i,n),e=te(e),n=O(e);return i}function Fa(t,e){const n=[];return za(t,e,n),n.sort((i,s)=>i.order-s.order),n}function za(t,e,n){const i=Lt(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);si(e,s=>{za(t,s,n)})}function li(t,e){const n=Lt(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,Ta(e,n.length>0?n:void 0)}si(e,i=>{li(t,i)})}function Ls(t,e){const n=En(La(t,e)),i=As(t.transactionQueueTree_,e);return Xd(i,s=>{Si(t,s)}),Si(t,i),ka(i,s=>{Si(t,s)}),n}function Si(t,e){const n=Lt(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(_(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(_(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Qe(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ta(e,void 0):n.length=r+1,Ae(t.eventQueue_,En(e),s);for(let o=0;o<i.length;o++)Ot(i[o])}}/**
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
 */function If(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Sf(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ve(`Invalid query segment '${n}' in query '${t}'`)}return e}const Lr=function(t,e){const n=Tf(t),i=n.namespace;n.domain==="firebase.com"&&Ve(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Ve("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Ou();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new jo(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new Q(n.pathString)}},Tf=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(s=If(t.substring(h,u)));const d=Sf(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */const Fr="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",xf=function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Fr.charAt(n%64),n=Math.floor(n/64);_(n===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Fr.charAt(e[s]);return _(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class kf{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+le(this.snapshot.exportVal())}}class Rf{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Wa{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return _(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Fs{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return F(this._path)?null:cs(this._path)}get ref(){return new qe(this._repo,this._path)}get _queryIdentifier(){const e=Cr(this._queryParams),n=rs(e);return n==="{}"?"default":n}get _queryObject(){return Cr(this._queryParams)}isEqual(e){if(e=Ge(e),!(e instanceof Fs))return!1;const n=this._repo===e._repo,i=us(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+mh(this._path)}}class qe extends Fs{constructor(e,n){super(e,n,new ps,!1)}get parent(){const e=Qo(this._path);return e===null?null:new qe(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class fn{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Q(e),i=pn(this.ref,e);return new fn(this._node.getChild(n),i,ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new fn(s,pn(this.ref,i),ie)))}hasChild(e){const n=new Q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ge(t,e){return t=Ge(t),t._checkNotDeleted("ref"),e!==void 0?pn(t._root,e):t._root}function pn(t,e){return t=Ge(t),O(t._path)===null?of("child","path",e):Pa("child","path",e),new qe(t._repo,ne(t._path,e))}function Ki(t,e){t=Ge(t),Ns("push",t._path),Aa("push",e,t._path,!0);const n=Oa(t._repo),i=xf(n),s=pn(t,i),r=pn(t,i);let o;return o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function kn(t){return Ns("remove",t._path),Xe(t,null)}function Xe(t,e){t=Ge(t),Ns("set",t._path),Aa("set",e,t._path,!1);const n=new mn;return _f(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Ba(t,e){rf("update",e,t._path);const n=new mn;return mf(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function ja(t){t=Ge(t);const e=new Wa(()=>{}),n=new ci(e);return gf(t._repo,t,n).then(i=>new fn(i,new qe(t._repo,t._path),t._queryParams.getIndex()))}class ci{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new kf("value",this,new fn(e.snapshotNode,new qe(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Rf(this,e,n):null}matches(e){return e instanceof ci?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Af(t,e,n,i,s){const r=new Wa(n,void 0),o=new ci(r);return vf(t._repo,t,o),()=>wf(t._repo,t,o)}function Ut(t,e,n,i){return Af(t,"value",e)}Rd(qe);Od(qe);/**
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
 */const Pf="FIREBASE_DATABASE_EMULATOR_HOST",Qi={};let Nf=!1;function Df(t,e,n,i){t.repoInfo_=new jo(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function Of(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Ve("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),he("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Lr(r,s),a=o.repoInfo,l;typeof process<"u"&&sr&&(l=sr[Pf]),l?(r=`http://${l}?ns=${a.namespace}`,o=Lr(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new Vu(t.name,t.options,e);af("Invalid Firebase Database URL",o),F(o.path)||Ve("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Lf(a,t,c,new Hu(t.name,n));return new Ff(h,t)}function Mf(t,e){const n=Qi[e];(!n||n[t.key]!==t)&&Ve(`Database ${e}(${t.repoInfo_}) has already been deleted.`),bf(t),delete n[t.key]}function Lf(t,e,n,i){let s=Qi[e.name];s||(s={},Qi[e.name]=s);let r=s[t.toURLString()];return r&&Ve("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new df(t,Nf,n,i),s[t.toURLString()]=r,r}class Ff{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ff(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new qe(this._repo,U())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Mf(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ve("Cannot call "+e+" on a deleted database.")}}function zf(t=is(),e){const n=yn(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=tc("database");i&&Wf(n,...i)}return n}function Wf(t,e,n,i={}){t=Ge(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ve("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Ve('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new xn(xn.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:nc(i.mockUserToken,t.app.options.projectId);r=new xn(o)}Df(s,e,n,r)}/**
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
 */function Bf(t){ku(mu),nt(new Ue("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Of(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Fe(rr,or,t),Fe(rr,or,"esm2017")}$e.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};$e.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Bf();var jf="firebase",$f="10.14.1";/**
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
 */Fe(jf,$f,"app");const $a="@firebase/installations",zs="0.6.9";/**
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
 */const Ua=1e4,Ha=`w:${zs}`,Va="FIS_v2",Uf="https://firebaseinstallations.googleapis.com/v1",Hf=60*60*1e3,Vf="installations",Gf="Installations";/**
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
 */const qf={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},gt=new Qn(Vf,Gf,qf);function Ga(t){return t instanceof yt&&t.code.includes("request-failed")}/**
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
 */function qa({projectId:t}){return`${Uf}/projects/${t}/installations`}function Ya(t){return{token:t.token,requestStatus:2,expiresIn:Kf(t.expiresIn),creationTime:Date.now()}}async function Ka(t,e){const i=(await e.json()).error;return gt.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Qa({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Yf(t,{refreshToken:e}){const n=Qa(t);return n.append("Authorization",Qf(e)),n}async function Xa(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Kf(t){return Number(t.replace("s","000"))}function Qf(t){return`${Va} ${t}`}/**
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
 */async function Xf({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=qa(t),s=Qa(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:Va,appId:t.appId,sdkVersion:Ha},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await Xa(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Ya(c.authToken)}}else throw await Ka("Create Installation",l)}/**
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
 */function Ja(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Jf(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Zf=/^[cdef][\w-]{21}$/,Xi="";function ep(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=tp(t);return Zf.test(n)?n:Xi}catch{return Xi}}function tp(t){return Jf(t).substr(0,22)}/**
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
 */function ui(t){return`${t.appName}!${t.appId}`}/**
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
 */const Za=new Map;function el(t,e){const n=ui(t);tl(n,e),np(n,e)}function tl(t,e){const n=Za.get(t);if(n)for(const i of n)i(e)}function np(t,e){const n=ip();n&&n.postMessage({key:t,fid:e}),sp()}let ht=null;function ip(){return!ht&&"BroadcastChannel"in self&&(ht=new BroadcastChannel("[Firebase] FID Change"),ht.onmessage=t=>{tl(t.data.key,t.data.fid)}),ht}function sp(){Za.size===0&&ht&&(ht.close(),ht=null)}/**
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
 */const rp="firebase-installations-database",op=1,_t="firebase-installations-store";let Ti=null;function Ws(){return Ti||(Ti=Eo(rp,op,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_t)}}})),Ti}async function Vn(t,e){const n=ui(t),s=(await Ws()).transaction(_t,"readwrite"),r=s.objectStore(_t),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&el(t,e.fid),e}async function nl(t){const e=ui(t),i=(await Ws()).transaction(_t,"readwrite");await i.objectStore(_t).delete(e),await i.done}async function hi(t,e){const n=ui(t),s=(await Ws()).transaction(_t,"readwrite"),r=s.objectStore(_t),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&el(t,a.fid),a}/**
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
 */async function Bs(t){let e;const n=await hi(t.appConfig,i=>{const s=ap(i),r=lp(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===Xi?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ap(t){const e=t||{fid:ep(),registrationStatus:0};return il(e)}function lp(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(gt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=cp(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:up(t)}:{installationEntry:e}}async function cp(t,e){try{const n=await Xf(t,e);return Vn(t.appConfig,n)}catch(n){throw Ga(n)&&n.customData.serverCode===409?await nl(t.appConfig):await Vn(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function up(t){let e=await zr(t.appConfig);for(;e.registrationStatus===1;)await Ja(100),e=await zr(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Bs(t);return i||n}return e}function zr(t){return hi(t,e=>{if(!e)throw gt.create("installation-not-found");return il(e)})}function il(t){return hp(t)?{fid:t.fid,registrationStatus:0}:t}function hp(t){return t.registrationStatus===1&&t.registrationTime+Ua<Date.now()}/**
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
 */async function dp({appConfig:t,heartbeatServiceProvider:e},n){const i=fp(t,n),s=Yf(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:Ha,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await Xa(()=>fetch(i,a));if(l.ok){const c=await l.json();return Ya(c)}else throw await Ka("Generate Auth Token",l)}function fp(t,{fid:e}){return`${qa(t)}/${e}/authTokens:generate`}/**
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
 */async function js(t,e=!1){let n;const i=await hi(t.appConfig,r=>{if(!sl(r))throw gt.create("not-registered");const o=r.authToken;if(!e&&_p(o))return r;if(o.requestStatus===1)return n=pp(t,e),r;{if(!navigator.onLine)throw gt.create("app-offline");const a=yp(r);return n=gp(t,a),a}});return n?await n:i.authToken}async function pp(t,e){let n=await Wr(t.appConfig);for(;n.authToken.requestStatus===1;)await Ja(100),n=await Wr(t.appConfig);const i=n.authToken;return i.requestStatus===0?js(t,e):i}function Wr(t){return hi(t,e=>{if(!sl(e))throw gt.create("not-registered");const n=e.authToken;return vp(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function gp(t,e){try{const n=await dp(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Vn(t.appConfig,i),n}catch(n){if(Ga(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await nl(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Vn(t.appConfig,i)}throw n}}function sl(t){return t!==void 0&&t.registrationStatus===2}function _p(t){return t.requestStatus===2&&!mp(t)}function mp(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Hf}function yp(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function vp(t){return t.requestStatus===1&&t.requestTime+Ua<Date.now()}/**
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
 */async function wp(t){const e=t,{installationEntry:n,registrationPromise:i}=await Bs(e);return i?i.catch(console.error):js(e).catch(console.error),n.fid}/**
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
 */async function bp(t,e=!1){const n=t;return await Cp(n),(await js(n,e)).token}async function Cp(t){const{registrationPromise:e}=await Bs(t);e&&await e}/**
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
 */function Ep(t){if(!t||!t.options)throw xi("App Configuration");if(!t.name)throw xi("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw xi(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function xi(t){return gt.create("missing-app-config-values",{valueName:t})}/**
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
 */const rl="installations",Ip="installations-internal",Sp=t=>{const e=t.getProvider("app").getImmediate(),n=Ep(e),i=yn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Tp=t=>{const e=t.getProvider("app").getImmediate(),n=yn(e,rl).getImmediate();return{getId:()=>wp(n),getToken:s=>bp(n,s)}};function xp(){nt(new Ue(rl,Sp,"PUBLIC")),nt(new Ue(Ip,Tp,"PRIVATE"))}xp();Fe($a,zs);Fe($a,zs,"esm2017");/**
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
 */const Gn="analytics",kp="firebase_id",Rp="origin",Ap=60*1e3,Pp="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$s="https://www.googletagmanager.com/gtag/js";/**
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
 */const be=new ts("@firebase/analytics");/**
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
 */const Np={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ie=new Qn("analytics","Analytics",Np);/**
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
 */function Dp(t){if(!t.startsWith($s)){const e=Ie.create("invalid-gtag-resource",{gtagURL:t});return be.warn(e.message),""}return t}function ol(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Op(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Mp(t,e){const n=Op("firebase-js-sdk-policy",{createScriptURL:Dp}),i=document.createElement("script"),s=`${$s}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function Lp(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Fp(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await ol(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){be.error(a)}t("config",s,r)}async function zp(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await ol(n);for(const l of o){const c=a.find(u=>u.measurementId===l),h=c&&e[c.appId];if(h)r.push(h);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){be.error(r)}}function Wp(t,e,n,i){async function s(r,...o){try{if(r==="event"){const[a,l]=o;await zp(t,e,n,a,l)}else if(r==="config"){const[a,l]=o;await Fp(t,e,n,i,a,l)}else if(r==="consent"){const[a,l]=o;t("consent",a,l)}else if(r==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){be.error(a)}}return s}function Bp(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=Wp(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function jp(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes($s)&&n.src.includes(t))return n;return null}/**
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
 */const $p=30,Up=1e3;class Hp{constructor(e={},n=Up){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const al=new Hp;function Vp(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Gp(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:Vp(i)},r=Pp.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Ie.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function qp(t,e=al,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw Ie.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw Ie.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Qp;return setTimeout(async()=>{a.abort()},Ap),ll({appId:i,apiKey:s,measurementId:r},o,a,e)}async function ll(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=al){var r;const{appId:o,measurementId:a}=t;try{await Yp(i,e)}catch(l){if(a)return be.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await Gp(t);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!Kp(c)){if(s.deleteThrottleMetadata(o),a)return be.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const h=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?Ks(n,s.intervalMillis,$p):Ks(n,s.intervalMillis),u={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return s.setThrottleMetadata(o,u),be.debug(`Calling attemptFetch again in ${h} millis`),ll(t,u,i,s)}}function Yp(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(Ie.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Kp(t){if(!(t instanceof yt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Qp{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Xp(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}/**
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
 */async function Jp(){if(yo())try{await vo()}catch(t){return be.warn(Ie.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return be.warn(Ie.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Zp(t,e,n,i,s,r,o){var a;const l=qp(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&be.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>be.error(f)),e.push(l);const c=Jp().then(f=>{if(f)return i.getId()}),[h,u]=await Promise.all([l,c]);jp(r)||Mp(r,h.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Rp]="firebase",d.update=!0,u!=null&&(d[kp]=u),s("config",h.measurementId,d),h.measurementId}/**
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
 */class eg{constructor(e){this.app=e}_delete(){return delete tn[this.app.options.appId],Promise.resolve()}}let tn={},Br=[];const jr={};let ki="dataLayer",tg="gtag",$r,cl,Ur=!1;function ng(){const t=[];if(sc()&&t.push("This is a browser extension environment."),ac()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=Ie.create("invalid-analytics-context",{errorInfo:e});be.warn(n.message)}}function ig(t,e,n){ng();const i=t.options.appId;if(!i)throw Ie.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)be.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ie.create("no-api-key");if(tn[i]!=null)throw Ie.create("already-exists",{id:i});if(!Ur){Lp(ki);const{wrappedGtag:r,gtagCore:o}=Bp(tn,Br,jr,ki,tg);cl=r,$r=o,Ur=!0}return tn[i]=Zp(t,Br,jr,e,$r,ki,n),new eg(t)}function sg(t=is()){t=Ge(t);const e=yn(t,Gn);return e.isInitialized()?e.getImmediate():rg(t)}function rg(t,e={}){const n=yn(t,Gn);if(n.isInitialized()){const s=n.getImmediate();if(Pn(e,n.getOptions()))return s;throw Ie.create("already-initialized")}return n.initialize({options:e})}function og(t,e,n,i){t=Ge(t),Xp(cl,tn[t.app.options.appId],e,n,i).catch(s=>be.error(s))}const Hr="@firebase/analytics",Vr="0.10.8";function ag(){nt(new Ue(Gn,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return ig(i,s,n)},"PUBLIC")),nt(new Ue("analytics-internal",t,"PRIVATE")),Fe(Hr,Vr),Fe(Hr,Vr,"esm2017");function t(e){try{const n=e.getProvider(Gn).getImmediate();return{logEvent:(i,s,r)=>og(n,i,s,r)}}catch(n){throw Ie.create("interop-component-reg-failed",{reason:n})}}}ag();const lg={apiKey:"AIzaSyA2Ml7QMBlaUyKZyFu7j83I5Y2eM1COgkc",authDomain:"board7-4373c.firebaseapp.com",databaseURL:"https://board7-4373c-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"board7-4373c",storageBucket:"board7-4373c.firebasestorage.app",messagingSenderId:"298011654216",appId:"1:298011654216:web:084fb0f220aa7be5b4807d"},cg=()=>(console.log("🚀 Firebase: 배포환경 (board7-4373c) 사용"),lg),qn=cg(),ul=yu().length===0?Io(qn):is();let ug=null;if(qn.measurementId&&typeof window<"u")try{ug=sg(ul),console.log("📊 Firebase Analytics 초기화 완료")}catch(t){console.warn("⚠️ Firebase Analytics 초기화 실패:",t)}const _e=zf(ul),Ri={mode:"production",projectId:qn.projectId,databaseURL:qn.databaseURL};console.log("🔥 Firebase 초기화 완료:",{환경:Ri.mode,프로젝트:Ri.projectId,데이터베이스:Ri.databaseURL});function gn(t){return typeof t=="number"&&!isNaN(t)&&isFinite(t)}function hg(t){return gn(t.x)&&gn(t.y)}function dg(t){return gn(t.width)&&gn(t.height)&&t.width>0&&t.height>0}function Gr(t,e=0){return gn(t)?t:(console.warn(`Invalid number value: ${t}, using default: ${e}`),e)}function qr(t){const e={};for(const[n,i]of Object.entries(t))n==="x"||n==="y"?e[n]=Gr(i,0):n==="width"||n==="height"?e[n]=Gr(i,100):e[n]=i;return e}const fg=()=>{if(typeof window<"u"){let t=localStorage.getItem("board7_session_id");return t||(t=`user_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,localStorage.setItem("board7_session_id",t)),t}return`server_${Date.now()}_${Math.random().toString(36).substr(2,9)}`},_n=()=>fg(),pg=async(t,e,n=_n())=>{try{const i=ge(_e,`textObjects/${t}`),r=(await ja(i)).val();if(!r){const c={...e,id:t,lastModified:Date.now(),modifiedBy:n};return await Xe(i,c),!0}const o=Date.now(),a=r.lastModified||0;if(e.lastModified&&e.lastModified<a)return console.warn(`LWW: Update rejected for object ${t}. Server timestamp: ${a}, Client timestamp: ${e.lastModified}`),!1;const l={...e,lastModified:o,modifiedBy:n};return await Ba(i,l),console.log(`LWW: Object ${t} updated successfully by ${n}`),!0}catch(i){return console.error("LWW update failed:",i),!1}},gg=async(t,e,n=_n())=>{try{const i=ge(_e,`imageObjects/${t}`),r=(await ja(i)).val();if(!r){const c={...e,id:t,lastModified:Date.now(),modifiedBy:n};return await Xe(i,c),!0}const o=Date.now(),a=r.lastModified||0;if(e.lastModified&&e.lastModified<a)return console.warn(`LWW: Update rejected for object ${t}. Server timestamp: ${a}, Client timestamp: ${e.lastModified}`),!1;const l={...e,lastModified:o,modifiedBy:n};return await Ba(i,l),console.log(`LWW: Object ${t} updated successfully by ${n}`),!0}catch(i){return console.error("LWW update failed:",i),!1}},_g=async t=>{try{const e=Ki(ge(_e,"drawObjects"));if(!e.key)throw new Error("Failed to generate object ID");const n={...t,id:e.key,lastModified:Date.now(),modifiedBy:_n()};return await Xe(e,n),e.key}catch(e){throw console.error("Error creating draw object:",e),e}},di=mt((t,e)=>{let n=[];return{textObjects:[],imageObjects:[],drawObjects:[],floorImage:null,settings:{admin:{autoToolSwitch:!0,gridVisible:!0,gridSize:16,gridSnapEnabled:!0,defaultFontSize:16,defaultBoxWidth:200,defaultBoxHeight:60,objectCreationPosition:{x:260,y:950},defaultCheckboxSettings:{checkedColor:"#22c55e",uncheckedColor:"#f3f4f6",checkedBackgroundColor:"#ffffff",uncheckedBackgroundColor:"#ffffff",checkedBackgroundOpacity:1,uncheckedBackgroundOpacity:1},excelPasteSettings:{startPosition:{x:100,y:100},cellWidth:120,cellHeight:40,fontSize:14,fontColor:"#000000",backgroundColor:"#ffffff",maxRows:50,maxCols:50}},view:{virtualKeyboardEnabled:!0,touchMode:!0}},isLoading:!1,initializeFirebaseListeners:()=>{e().cleanupFirebaseListeners(),t({isLoading:!0});let i=0;const s=5,r=()=>{i++,i>=s&&t({isLoading:!1})},o=ge(_e,"textObjects"),a=Ut(o,E=>{const A=E.val(),S=A?Object.values(A):[];t({textObjects:S}),r()});n.push(a);const l=ge(_e,"imageObjects"),c=Ut(l,E=>{const A=E.val(),S=A?Object.values(A):[];t({imageObjects:S}),r()});n.push(c);const h=ge(_e,"drawObjects"),u=Ut(h,E=>{const A=E.val(),S=A?Object.values(A):[];t({drawObjects:S}),r()});n.push(u);const d=ge(_e,"floorImage"),f=Ut(d,E=>{const A=E.val();t({floorImage:A}),r()});n.push(f);const p=ge(_e,"settings"),b=Ut(p,E=>{const A=E.val();A&&t({settings:A}),r()});n.push(b)},cleanupFirebaseListeners:()=>{n.forEach(i=>i()),n=[]},addTextObject:async i=>{const s=ge(_e,"textObjects"),r=Ki(s),o=_n(),a={...i,id:r.key,lastModified:Date.now(),modifiedBy:o};return await Xe(r,a),r.key},updateTextObject:async(i,s)=>{const r=qr(s);await pg(i,r)||console.warn(`Failed to update text object ${i} due to LWW conflict`)},deleteTextObject:async i=>{const s=ge(_e,`textObjects/${i}`);await kn(s)},addImageObject:async i=>{const s=ge(_e,"imageObjects"),r=Ki(s),o=_n(),a={...i,id:r.key,lastModified:Date.now(),modifiedBy:o};return await Xe(r,a),r.key},updateImageObject:async(i,s)=>{const r=qr(s);await gg(i,r)||console.warn(`Failed to update image object ${i} due to LWW conflict`)},deleteImageObject:async i=>{const s=ge(_e,`imageObjects/${i}`);await kn(s)},deleteDrawObject:async i=>{const s=ge(_e,`drawObjects/${i}`);await kn(s)},setFloorImage:async i=>{const s=ge(_e,"floorImage");await Xe(s,i)},updateSettings:async(i,s)=>{const r=ge(_e,`settings/${i}`),o=e().settings[i];await Xe(r,{...o,...s})}}});mt(t=>({gridEnabled:!1,gridSize:10,snapEnabled:!0,setGridEnabled:e=>t({gridEnabled:e}),setGridSize:e=>t({gridSize:e}),setSnapEnabled:e=>t({snapEnabled:e})}));const mg=mt(t=>({defaultCheckedColor:"#10b981",defaultUncheckedColor:"#f3f4f6",checkedBackgroundColor:"#dcfce7",uncheckedBackgroundColor:"#ffffff",checkedBackgroundOpacity:.8,uncheckedBackgroundOpacity:1,setDefaultCheckedColor:e=>t({defaultCheckedColor:e}),setDefaultUncheckedColor:e=>t({defaultUncheckedColor:e}),setCheckedBackgroundColor:e=>t({checkedBackgroundColor:e}),setUncheckedBackgroundColor:e=>t({uncheckedBackgroundColor:e}),setCheckedBackgroundOpacity:e=>t({checkedBackgroundOpacity:e}),setUncheckedBackgroundOpacity:e=>t({uncheckedBackgroundOpacity:e})})),ct=mt((t,e)=>({selectedCellIds:new Set,isDragSelecting:!1,dragStartPoint:null,dragEndPoint:null,selectCell:(n,i=!1)=>{t(s=>{const r=new Set(s.selectedCellIds);return i?r.has(n)?r.delete(n):r.add(n):(r.clear(),r.add(n)),{selectedCellIds:r}})},selectCellsInRange:n=>{t(i=>{const s=new Set(i.selectedCellIds);return n.forEach(r=>s.add(r)),{selectedCellIds:s}})},deselectCell:n=>{t(i=>{const s=new Set(i.selectedCellIds);return s.delete(n),{selectedCellIds:s}})},clearSelection:()=>{t({selectedCellIds:new Set})},toggleCellSelection:n=>{t(i=>{const s=new Set(i.selectedCellIds);return s.has(n)?s.delete(n):s.add(n),{selectedCellIds:s}})},startDragSelection:(n,i)=>{t({isDragSelecting:!0,dragStartPoint:{x:n,y:i},dragEndPoint:{x:n,y:i}})},updateDragSelection:(n,i)=>{t(()=>({dragEndPoint:{x:n,y:i}}))},endDragSelection:()=>{t({isDragSelecting:!1,dragStartPoint:null,dragEndPoint:null})},isSelected:n=>e().selectedCellIds.has(n),getSelectedCount:()=>e().selectedCellIds.size,getSelectedCells:()=>Array.from(e().selectedCellIds)})),yg=({text:t,textStyle:e,fontSize:n,onChange:i,onBlur:s,onKeyDown:r})=>T.jsx("textarea",{value:t,onChange:o=>i(o.target.value),onBlur:s,onKeyDown:r,autoFocus:!0,"data-editing":"true",className:"w-full h-full bg-transparent border-none outline-none resize-none",style:{color:e.color,fontFamily:e.fontFamily,fontSize:`${n}px`,fontWeight:e.bold?"bold":"normal",fontStyle:e.italic?"italic":"normal",textAlign:e.horizontalAlign,lineHeight:"1.2",wordBreak:"break-word",cursor:"text"}}),hl=({onPointerDown:t,objectId:e})=>T.jsxs(T.Fragment,{children:[T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-nw-resize shadow-md",style:{left:-6,top:-6},onPointerDown:n=>t(n,"nw",e)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-ne-resize shadow-md",style:{right:-6,top:-6},onPointerDown:n=>t(n,"ne",e)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-sw-resize shadow-md",style:{left:-6,bottom:-6},onPointerDown:n=>t(n,"sw",e)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-se-resize shadow-md",style:{right:-6,bottom:-6},onPointerDown:n=>t(n,"se",e)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-n-resize shadow-md",style:{left:"50%",top:-6,transform:"translateX(-50%)"},onPointerDown:n=>t(n,"n",e)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-s-resize shadow-md",style:{left:"50%",bottom:-6,transform:"translateX(-50%)"},onPointerDown:n=>t(n,"s",e)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-w-resize shadow-md",style:{left:-6,top:"50%",transform:"translateY(-50%)"},onPointerDown:n=>t(n,"w",e)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-e-resize shadow-md",style:{right:-6,top:"50%",transform:"translateY(-50%)"},onPointerDown:n=>t(n,"e",e)})]}),vg=({obj:t,isSelected:e,isHovered:n,isViewPage:i,isDragging:s,currentX:r,currentY:o,currentWidth:a,currentHeight:l,currentTool:c,editingObjectId:h,editingText:u,onTextBoxClick:d,onObjectClick:f,onPointerDown:p,onResizePointerDown:b,onMouseEnter:E,onMouseLeave:A,onEditingTextChange:S,onFinishEdit:G,onKeyDown:k,updateTextObject:q})=>{var C,z;const{defaultCheckedColor:fe,defaultUncheckedColor:P,checkedBackgroundColor:pe,uncheckedBackgroundColor:me,checkedBackgroundOpacity:re,uncheckedBackgroundOpacity:X}=mg(),J=t.cellType==="cell"&&ct.getState().isSelected(t.id),$=t.boxStyle||{backgroundColor:"transparent",backgroundOpacity:1,borderColor:"#000000",borderWidth:0,borderRadius:0},H=t.textStyle||{color:"#000000",bold:!1,italic:!1,horizontalAlign:"left",verticalAlign:"middle",fontFamily:"Arial"},W=R=>{R.stopPropagation();const g=!t.checkboxChecked;q(t.id,{checkboxChecked:g,checkboxCheckedColor:t.checkboxCheckedColor||fe,checkboxUncheckedColor:t.checkboxUncheckedColor||P})},V=R=>{R.stopPropagation()};return T.jsxs("div",{className:`absolute select-none ${e?"ring-4 ring-blue-600":n?"ring-2 ring-gray-400":""}`,style:{left:r,top:o,width:a,height:l,opacity:t.opacity,zIndex:t.zIndex||0,cursor:h===t.id?"text":i?"default":s?"grabbing":(C=t.permissions)!=null&&C.movable?"grab":"default",border:`${$.borderWidth}px solid ${$.borderColor}`,borderRadius:`${$.borderRadius}px`,transition:s?"none":"all 0.1s ease",pointerEvents:c==="pen"||c==="eraser"?"none":"auto"},onClick:R=>{s?f(R,t.id):d(t,R)},onPointerDown:R=>p(R,t.id),onMouseEnter:E,onMouseLeave:A,children:[T.jsx("div",{className:"absolute inset-0",style:{backgroundColor:J?"#9ca3af":t.hasCheckbox&&t.checkboxChecked?t.checkedBackgroundColor||pe:t.hasCheckbox&&!t.checkboxChecked?t.uncheckedBackgroundColor||me:$.backgroundColor,opacity:J?.15:t.hasCheckbox&&t.checkboxChecked?t.checkedBackgroundOpacity??re:t.hasCheckbox&&!t.checkboxChecked?t.uncheckedBackgroundOpacity??X:$.backgroundOpacity,borderRadius:`${$.borderRadius}px`}}),T.jsx("div",{className:"relative z-10 h-full flex items-center",style:{justifyContent:H.horizontalAlign==="left"?"flex-start":H.horizontalAlign==="center"?"center":"flex-end",alignItems:H.verticalAlign==="top"?"flex-start":H.verticalAlign==="middle"?"center":"flex-end",padding:"8px"},children:h===t.id?T.jsx(yg,{text:u,textStyle:H,fontSize:t.fontSize||16,onChange:S,onBlur:G,onKeyDown:k}):T.jsxs("div",{style:{color:H.color,fontFamily:H.fontFamily,fontSize:`${t.fontSize||16}px`,fontWeight:H.bold?"bold":"normal",fontStyle:H.italic?"italic":"normal",textAlign:H.horizontalAlign,lineHeight:"1.2",wordBreak:"break-word",cursor:"pointer",display:"flex",alignItems:H.verticalAlign==="top"?"flex-start":H.verticalAlign==="middle"?"center":"flex-end",width:"100%",height:"100%"},children:[t.hasCheckbox&&T.jsx("div",{className:"checkbox-area",onClick:W,onPointerDown:V,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"35px",height:"35px",backgroundColor:t.checkboxChecked?t.checkboxCheckedColor||fe:t.checkboxUncheckedColor||P,border:`2px solid ${t.checkboxChecked?t.checkboxCheckedColor||fe:"#d1d5db"}`,borderRadius:"4px",marginRight:"8px",transition:"all 0.2s ease",userSelect:"none",flexShrink:0,pointerEvents:"auto",cursor:"pointer"},children:t.checkboxChecked&&T.jsx("svg",{className:"checkbox-area",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:T.jsx("path",{className:"checkbox-area",d:"M13.5 4.5L6 12L2.5 8.5",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),T.jsx("span",{style:{flex:1},children:t.text})]})}),e&&!i&&((z=t.permissions)==null?void 0:z.resizable)&&T.jsx(hl,{onPointerDown:b,objectId:t.id})]})},wg=({obj:t,isSelected:e,isHovered:n,isViewPage:i,isDragging:s,currentX:r,currentY:o,currentWidth:a,currentHeight:l,currentTool:c,editingObjectId:h,onObjectClick:u,onPointerDown:d,onResizePointerDown:f,onMouseEnter:p,onMouseLeave:b})=>{var E,A;return T.jsxs("div",{className:`absolute select-none ${e?"ring-4 ring-blue-600":n?"ring-2 ring-gray-400":""}`,style:{left:r,top:o,width:a,height:l,opacity:t.opacity,zIndex:t.zIndex||0,cursor:h===t.id?"text":i?"default":s?"grabbing":(E=t.permissions)!=null&&E.movable?"grab":"default",transition:s?"none":"all 0.1s ease",pointerEvents:c==="pen"||c==="eraser"?"none":"auto"},onClick:S=>u(S,t.id),onPointerDown:S=>d(S,t.id),onMouseEnter:p,onMouseLeave:b,children:[T.jsx("img",{src:t.src,alt:"",className:`w-full h-full ${t.maintainAspectRatio?"object-contain":"object-fill"}`,draggable:!1,style:{pointerEvents:"none"}}),e&&!i&&((A=t.permissions)==null?void 0:A.resizable)&&T.jsx(hl,{onPointerDown:f,objectId:t.id})]})},Yr={isDragging:!1,draggedObjectId:null,offset:{x:0,y:0},currentPosition:{x:0,y:0}},bg=()=>{const[t,e]=w.useState(Yr),n=w.useCallback((o,a,l)=>{e({isDragging:!0,draggedObjectId:o,offset:a,currentPosition:l})},[]),i=w.useCallback(o=>{e(a=>({...a,currentPosition:o}))},[]),s=w.useCallback(()=>{e(Yr)},[]),r=w.useCallback(o=>t.isDragging&&t.draggedObjectId===o,[t.isDragging,t.draggedObjectId]);return{dragState:t,startDrag:n,updateDragPosition:i,endDrag:s,isDraggingObject:r}},Kr={isResizing:!1,resizedObjectId:null,resizeHandle:null,startPosition:{x:0,y:0},startSize:{width:0,height:0},startObjectPosition:{x:0,y:0}},Cg=()=>{const[t,e]=w.useState(Kr),n=w.useCallback((o,a,l,c,h)=>{e({isResizing:!0,resizedObjectId:o,resizeHandle:a,startPosition:l,startSize:c,startObjectPosition:h})},[]),i=w.useCallback((o,a)=>{e(l=>({...l,currentSize:o,currentPosition:a}))},[]),s=w.useCallback(()=>{e(Kr)},[]),r=w.useCallback(o=>t.isResizing&&t.resizedObjectId===o,[t.isResizing,t.resizedObjectId]);return{resizeState:t,startResize:n,updateResize:i,endResize:s,isResizingObject:r}},Eg=(t,e,n=!1)=>{const[i,s]=w.useState(null),[r,o]=w.useState(""),a=w.useCallback(u=>{s(u.id),o(u.text),t(u.id,{isEditing:!0}),n?(e(u.id),setTimeout(()=>{window.dispatchEvent(new CustomEvent("activateVirtualKeyboard",{detail:{objectId:u.id}}))},100)):setTimeout(()=>{const d=document.querySelector('textarea[data-editing="true"]');if(d){const f=u.text.length;d.setSelectionRange(f,f),d.focus()}},0)},[n,t,e]),l=w.useCallback(async()=>{i&&r!==void 0&&(await t(i,{text:r,isEditing:!1}),s(null),o(""))},[i,r,t]),c=w.useCallback(()=>{s(null),o("")},[]),h=w.useCallback(u=>{o(u)},[]);return{editingObjectId:i,editingText:r,startInlineEdit:a,finishInlineEdit:l,cancelInlineEdit:c,updateEditingText:h}},Ig=()=>{const t=w.useRef(!1),e=w.useRef(0);w.useEffect(()=>{const r=navigator.userAgent.toLowerCase(),o=/iphone|ipad|ipod/.test(r),a=/safari/.test(r)&&!/chrome/.test(r);t.current=o||a},[]);const n=r=>{e.current=r},i=r=>t.current&&r-e.current<300,s=()=>{const r=navigator.userAgent.toLowerCase();return/iphone/.test(r)};return{isSafari:t.current,updatePointerEventTime:n,isGhostClick:i,isIPhone:s}},Sg=(t,e)=>{var i;return{handleClipboardPaste:w.useCallback(async()=>{try{if(!navigator.clipboard||!navigator.clipboard.read){console.warn("클립보드 API가 지원되지 않습니다.");return}const s=await navigator.clipboard.read();for(const r of s){const o=r.types.filter(a=>a.startsWith("image/"));if(o.length>0){const a=o[0],l=await r.getType(a),c=new FileReader;c.onload=async h=>{var p,b;const u=(p=h.target)==null?void 0:p.result,d=((b=e==null?void 0:e.admin)==null?void 0:b.objectCreationPosition)??{x:260,y:950},f=new Image;f.onload=async()=>{try{const S=200*(f.naturalHeight/f.naturalWidth),G={x:d.x,y:d.y,width:200,height:S,src:u,permissions:{editable:!0,movable:!0,resizable:!0,deletable:!0},zIndex:Date.now(),locked:!1,visible:!0,opacity:1,maintainAspectRatio:!0,lastModified:Date.now()};await t(G),console.log("클립보드 이미지가 성공적으로 붙여넣어졌습니다.")}catch(E){console.error("이미지 객체 생성 실패:",E)}},f.onerror=()=>{console.error("클립보드 이미지 로드 실패")},f.src=u},c.onerror=()=>{console.error("클립보드 이미지 읽기 실패")},c.readAsDataURL(l);break}}}catch(s){console.log("클립보드에서 이미지를 읽을 수 없습니다:",s)}},[(i=e==null?void 0:e.admin)==null?void 0:i.objectCreationPosition,t])}},Tg=(t,e,n,i,s,r,o,a)=>{const l=w.useCallback(async u=>{if(!u)return;const d=t.find(p=>p.id===u);if(d){const p={...d,x:d.x+20,y:d.y+20,isEditing:!1};delete p.id,await s(p);return}const f=e.find(p=>p.id===u);if(f){const p={...f,x:f.x+20,y:f.y+20};delete p.id,await r(p);return}},[t,e,s,r]),c=w.useCallback(async u=>{var p,b;if(!u)return;const d=t.find(E=>E.id===u);if(d&&((p=d.permissions)!=null&&p.deletable)){await n(u),a(null);return}const f=e.find(E=>E.id===u);if(f&&((b=f.permissions)!=null&&b.deletable)){await i(u),a(null);return}},[t,e,n,i,a]),h=w.useCallback(async()=>{const{getSelectedCells:u}=ct.getState(),d=u();if(d.length!==0)try{for(const f of d){const p=t.find(b=>b.id===f);p&&p.cellType==="cell"&&await o(f,{text:""})}console.log(`${d.length}개 셀의 텍스트 내용이 삭제되었습니다.`)}catch(f){console.error("셀 텍스트 일괄 삭제 실패:",f)}},[t,o]);return{handleDuplicateObject:l,handleDeleteObject:c,handleBulkClearCellText:h}},Yn=(t,e)=>Math.round(t/e)*e,xg=(t,e,n)=>({x:Yn(t,n),y:Yn(e,n)}),kg=(t,e,n,i=50,s=30)=>({width:Math.max(Yn(t,n),i),height:Math.max(Yn(e,n),s)}),dl=t=>{const e=window.getComputedStyle(t).transform;let n=1;if(e&&e!=="none"){const i=e.match(/matrix\(([^)]+)\)/);i&&(n=i[1].split(",").map(r=>parseFloat(r.trim()))[0])}return n},Ai=(t,e,n)=>{const i=n.getBoundingClientRect(),s=dl(n);return{x:(t-i.left)/s,y:(e-i.top)/s}},Qr=(t,e,n,i)=>{if(!n)return{position:t,size:e};const s=xg(t.x,t.y,i),r=e?kg(e.width,e.height,i):void 0;return{position:s,size:r}},Rg=(t,e,n)=>({x:t.x-e.x/n,y:t.y-e.y/n}),Ag=(t,e)=>({x:t.x-e.x,y:t.y-e.y}),Xr=(t,e,n,i)=>{const s=hg(t)?t:n||{x:0,y:0},r=e&&dg(e)?e:i;return{position:s,size:r}},Pg=t=>{const{handle:e,deltaX:n,deltaY:i,startSize:s,startPosition:r,maintainAspectRatio:o=!1,originalAspectRatio:a=1}=t;let l=s.width,c=s.height,h=r.x,u=r.y;switch(e){case"nw":l=Math.max(50,s.width-n),c=o?l/a:Math.max(30,s.height-i),h=r.x+(s.width-l),u=r.y+(s.height-c);break;case"ne":l=Math.max(50,s.width+n),c=o?l/a:Math.max(30,s.height-i),u=r.y+(s.height-c);break;case"sw":l=Math.max(50,s.width-n),c=o?l/a:Math.max(30,s.height+i),h=r.x+(s.width-l);break;case"se":l=Math.max(50,s.width+n),c=o?l/a:Math.max(30,s.height+i);break;case"n":o?(c=Math.max(30,s.height-i),l=c*a,h=r.x+(s.width-l)/2):c=Math.max(30,s.height-i),u=r.y+(s.height-c);break;case"s":o?(c=Math.max(30,s.height+i),l=c*a,h=r.x+(s.width-l)/2):c=Math.max(30,s.height+i);break;case"w":o?(l=Math.max(50,s.width-n),c=l/a,u=r.y+(s.height-c)/2):l=Math.max(50,s.width-n),h=r.x+(s.width-l);break;case"e":o?(l=Math.max(50,s.width+n),c=l/a,u=r.y+(s.height-c)/2):l=Math.max(50,s.width+n);break}return{newWidth:l,newHeight:c,newX:h,newY:u}},Ng=t=>{try{t.preventDefault(),t.stopPropagation()}catch(e){console.debug("preventDefault failed in context menu handler:",e)}return!1},Dg=(t,e,n)=>{if(t.key==="Enter"&&!t.shiftKey){try{t.preventDefault()}catch(i){console.debug("preventDefault failed in keydown handler:",i)}e()}else if(t.key==="Escape"){try{t.preventDefault()}catch(i){console.debug("preventDefault failed in keydown handler:",i)}n()}},Og=(t,e,n)=>{if(!t.cellPosition||!e.cellPosition||t.groupId!==e.groupId)return[];const i=Math.min(t.cellPosition.row,e.cellPosition.row),s=Math.max(t.cellPosition.row,e.cellPosition.row),r=Math.min(t.cellPosition.col,e.cellPosition.col),o=Math.max(t.cellPosition.col,e.cellPosition.col),a=[];return n.forEach(l=>{if(l.cellType==="cell"&&l.cellPosition&&l.groupId===t.groupId){const{row:c,col:h}=l.cellPosition;c>=i&&c<=s&&h>=r&&h<=o&&a.push(l.id)}}),a},Jr=(t,e,n)=>{if(n==="set")if(e)setTimeout(()=>{try{t.currentTarget.setPointerCapture(t.pointerId)}catch{console.debug("iPhone pointer capture failed, continuing without capture")}},0);else try{t.currentTarget.setPointerCapture(t.pointerId)}catch{}else try{t.currentTarget.releasePointerCapture(t.pointerId)}catch{}},Mg=({isViewPage:t=!1})=>{const{textObjects:e,imageObjects:n,updateTextObject:i,updateImageObject:s,deleteTextObject:r,deleteImageObject:o,addTextObject:a,addImageObject:l,settings:c}=di(),{selectedObjectId:h,hoveredObjectId:u,currentTool:d,setSelectedObjectId:f,setHoveredObjectId:p}=Zi(),{updatePointerEventTime:b,isGhostClick:E,isIPhone:A}=Ig(),{dragState:S,startDrag:G,updateDragPosition:k,endDrag:q,isDraggingObject:fe}=bg(),{resizeState:P,startResize:pe,updateResize:me,endResize:re,isResizingObject:X}=Cg(),{editingObjectId:J,editingText:$,startInlineEdit:H,finishInlineEdit:W,cancelInlineEdit:V,updateEditingText:C}=Eg(i,f,t),{handleClipboardPaste:z}=Sg(l,c),{handleDuplicateObject:R,handleDeleteObject:g,handleBulkClearCellText:v}=Tg(e,n,r,o,a,l,i,f),[y,I]=w.useState({clickCount:0,clickTimer:null}),N=w.useCallback(m=>{if(!J){if(m.ctrlKey&&m.key==="v"){try{m.preventDefault()}catch(B){console.debug("preventDefault failed in global keydown handler:",B)}z();return}if(!t){if(m.ctrlKey&&m.key==="d"){try{m.preventDefault()}catch(B){console.debug("preventDefault failed in global keydown handler:",B)}h&&R(h)}if(m.key==="Delete"){try{m.preventDefault()}catch(Y){console.debug("preventDefault failed in global keydown handler:",Y)}if(ct.getState().getSelectedCells().length>0){v();return}h&&g(h)}}}},[J,h,t,R,g,z,v]),D=w.useCallback((m,B)=>{var oe;b(m.timeStamp),m.stopPropagation();const Y=A();if((!Y||m.pointerType!=="touch")&&m.preventDefault(),J){W();return}const K=e.find(Ce=>Ce.id===B)||n.find(Ce=>Ce.id===B);if(!K||(f(B),p(null),!((oe=K.permissions)!=null&&oe.movable)))return;Jr(m,Y,"set");const j=m.currentTarget.getBoundingClientRect(),se={x:m.clientX-j.left,y:m.clientY-j.top};G(B,se,{x:K.x,y:K.y})},[J,W,e,n,f,p,b,A,G]),L=w.useCallback((m,B,Y)=>{var j;m.stopPropagation(),m.preventDefault();const K=e.find(se=>se.id===Y)||n.find(se=>se.id===Y);!K||!((j=K.permissions)!=null&&j.resizable)||pe(Y,B,{x:m.clientX,y:m.clientY},{width:K.width,height:K.height},{x:K.x,y:K.y})},[e,n,pe]),Se=w.useCallback(m=>{var B,Y,K,j;if(S.isDragging&&S.draggedObjectId){const se=m.currentTarget.closest("[data-canvas-container]");if(!se)return;const oe=Ai(m.clientX,m.clientY,se),Ce=dl(se),Le=Rg(oe,S.offset,Ce),xe=((B=c==null?void 0:c.admin)==null?void 0:B.gridSnapEnabled)??!1,Ke=((Y=c==null?void 0:c.admin)==null?void 0:Y.gridSize)??32,{position:Be}=Qr(Le,void 0,xe,Ke),Ee=e.find(zt=>zt.id===S.draggedObjectId)||n.find(zt=>zt.id===S.draggedObjectId),{position:ot}=Xr(Be,void 0,Ee?{x:Ee.x,y:Ee.y}:void 0);k(ot)}if(P.isResizing&&P.resizedObjectId){const se=m.currentTarget.closest("[data-canvas-container]");if(!se)return;const oe=Ai(m.clientX,m.clientY,se),Ce=Ai(P.startPosition.x,P.startPosition.y,se),Le=Ag(oe,Ce),xe=n.find(ml=>ml.id===P.resizedObjectId),Ke=(xe==null?void 0:xe.maintainAspectRatio)||!1,Be=xe?P.startSize.width/P.startSize.height:1,Ee=Pg({handle:P.resizeHandle,deltaX:Le.x,deltaY:Le.y,startSize:P.startSize,startPosition:P.startObjectPosition,maintainAspectRatio:Ke,originalAspectRatio:Be}),ot=((K=c==null?void 0:c.admin)==null?void 0:K.gridSnapEnabled)??!1,zt=((j=c==null?void 0:c.admin)==null?void 0:j.gridSize)??32,{position:gl,size:_l}=Qr({x:Ee.newX,y:Ee.newY},{width:Ee.newWidth,height:Ee.newHeight},ot,zt),fi=Xr(gl,_l);fi.size&&me(fi.size,fi.position)}},[S,P,e,n,c,k,me]),Ye=w.useCallback(m=>{if(Jr(m,A(),"release"),S.isDragging&&S.draggedObjectId){const B=S.currentPosition,Y=e.find(j=>j.id===S.draggedObjectId),K=n.find(j=>j.id===S.draggedObjectId);Y?i(S.draggedObjectId,B).catch(j=>{console.error("Failed to update text object position:",j)}):K&&s(S.draggedObjectId,B).catch(j=>{console.error("Failed to update image object position:",j)}),q()}if(P.isResizing&&P.resizedObjectId){const B=P.currentSize,Y=P.currentPosition;if(B&&Y){const K=e.find(oe=>oe.id===P.resizedObjectId),j=n.find(oe=>oe.id===P.resizedObjectId),se={x:Y.x,y:Y.y,width:B.width,height:B.height};K?i(P.resizedObjectId,se).catch(oe=>{console.error("Failed to update text object size/position:",oe)}):j&&s(P.resizedObjectId,se).catch(oe=>{console.error("Failed to update image object size/position:",oe)})}re()}},[S,P,e,n,i,s,q,re,A]),We=w.useCallback((m,B)=>{if(E(m.timeStamp))return;const Y=e.find(j=>j.id===B),K=(Y==null?void 0:Y.cellType)==="cell";if(!t&&d==="select"&&!K){const{clearSelection:j}=ct.getState();j(),f(B),m&&m.stopPropagation()}},[d,t,f,e,E]),Te=w.useCallback(m=>{if(E(m.timeStamp))return;if(m.currentTarget.focus(),J){W();return}if(!t&&d==="select"){if(m.target===m.currentTarget){f(null);const{clearSelection:Y}=ct.getState();Y()}}else if(t&&m.target===m.currentTarget){f(null);const{clearSelection:Y}=ct.getState();Y()}},[J,W,f,t,d,E]),Ft=w.useCallback((m,B)=>{if(d!=="select")return;if(J&&J!==m.id&&W(),m.cellType==="cell"){const{selectCell:j,selectCellsInRange:se,getSelectedCells:oe}=ct.getState(),Ce=y.clickCount+1;if(y.clickTimer&&clearTimeout(y.clickTimer),Ce===2)H(m),I({clickCount:0,clickTimer:null});else{const Le=B.ctrlKey||B.metaKey,xe=B.shiftKey;if(xe){const Be=oe();if(Be.length>0){const Ee=e.find(ot=>ot.id===Be[Be.length-1]);if(Ee&&Ee.cellType==="cell"&&Ee.cellPosition&&m.cellPosition){const ot=Og(Ee,m,e);se(ot)}}else j(m.id,!1)}else Le?j(m.id,!0):j(m.id,!1);!Le&&!xe&&f(null);const Ke=setTimeout(()=>{I({clickCount:0,clickTimer:null})},300);I({clickCount:Ce,clickTimer:Ke})}return}const K=y.clickCount+1;if(y.clickTimer&&clearTimeout(y.clickTimer),K===3)H(m),I({clickCount:0,clickTimer:null});else{We(B,m.id);const j=setTimeout(()=>{I({clickCount:0,clickTimer:null})},500);I({clickCount:K,clickTimer:j})}},[d,J,W,H,y,e,f,We]);return T.jsx("div",{className:"absolute inset-0",tabIndex:0,onClick:Te,onKeyDown:N,onPointerMove:Se,onPointerUp:Ye,onPointerLeave:Ye,onContextMenu:Ng,style:{touchAction:"none",pointerEvents:"auto",outline:"none"},children:[...e,...n].sort((m,B)=>(m.zIndex||0)-(B.zIndex||0)).map(m=>{const B="text"in m,Y="src"in m,K=fe(m.id),j=X(m.id),se=K?S.currentPosition.x:j&&P.currentPosition?P.currentPosition.x:m.x,oe=K?S.currentPosition.y:j&&P.currentPosition?P.currentPosition.y:m.y,Ce=j&&P.currentSize?P.currentSize.width:m.width,Le=j&&P.currentSize?P.currentSize.height:m.height,xe=h===m.id,Ke=u===m.id&&!t;return B?T.jsx(vg,{obj:m,isSelected:xe,isHovered:Ke,isViewPage:t,isDragging:K,isResizing:j,currentX:se,currentY:oe,currentWidth:Ce,currentHeight:Le,currentTool:d,editingObjectId:J,editingText:$,onTextBoxClick:Ft,onObjectClick:We,onPointerDown:D,onResizePointerDown:L,onMouseEnter:()=>p(m.id),onMouseLeave:()=>p(null),onEditingTextChange:C,onFinishEdit:W,onKeyDown:Be=>Dg(Be,W,V),updateTextObject:i},m.id):Y?T.jsx(wg,{obj:m,isSelected:xe,isHovered:Ke,isViewPage:t,isDragging:K,currentX:se,currentY:oe,currentWidth:Ce,currentHeight:Le,currentTool:d,editingObjectId:J,onObjectClick:We,onPointerDown:D,onResizePointerDown:L,onMouseEnter:()=>p(m.id),onMouseLeave:()=>p(null)},m.id):null})})},Lg=({isViewPage:t=!1})=>null;function Zr(t,e,n,i=s=>s){return t*i(.5-e*(.5-n))}function Fg(t){return[-t[0],-t[1]]}function Ne(t,e){return[t[0]+e[0],t[1]+e[1]]}function ke(t,e){return[t[0]-e[0],t[1]-e[1]]}function Pe(t,e){return[t[0]*e,t[1]*e]}function zg(t,e){return[t[0]/e,t[1]/e]}function Ht(t){return[t[1],-t[0]]}function eo(t,e){return t[0]*e[0]+t[1]*e[1]}function Wg(t,e){return t[0]===e[0]&&t[1]===e[1]}function Bg(t){return Math.hypot(t[0],t[1])}function jg(t){return t[0]*t[0]+t[1]*t[1]}function to(t,e){return jg(ke(t,e))}function fl(t){return zg(t,Bg(t))}function $g(t,e){return Math.hypot(t[1]-e[1],t[0]-e[0])}function Vt(t,e,n){let i=Math.sin(n),s=Math.cos(n),r=t[0]-e[0],o=t[1]-e[1],a=r*s-o*i,l=r*i+o*s;return[a+e[0],l+e[1]]}function Ji(t,e,n){return Ne(t,Pe(ke(e,t),n))}function no(t,e,n){return Ne(t,Pe(e,n))}var{min:Ct,PI:Ug}=Math,io=.275,Gt=Ug+1e-4;function Hg(t,e={}){let{size:n=16,smoothing:i=.5,thinning:s=.5,simulatePressure:r=!0,easing:o=C=>C,start:a={},end:l={},last:c=!1}=e,{cap:h=!0,easing:u=C=>C*(2-C)}=a,{cap:d=!0,easing:f=C=>--C*C*C+1}=l;if(t.length===0||n<=0)return[];let p=t[t.length-1].runningLength,b=a.taper===!1?0:a.taper===!0?Math.max(n,p):a.taper,E=l.taper===!1?0:l.taper===!0?Math.max(n,p):l.taper,A=Math.pow(n*i,2),S=[],G=[],k=t.slice(0,10).reduce((C,z)=>{let R=z.pressure;if(r){let g=Ct(1,z.distance/n),v=Ct(1,1-g);R=Ct(1,C+(v-C)*(g*io))}return(C+R)/2},t[0].pressure),q=Zr(n,s,t[t.length-1].pressure,o),fe,P=t[0].vector,pe=t[0].point,me=pe,re=pe,X=me,J=!1;for(let C=0;C<t.length;C++){let{pressure:z}=t[C],{point:R,vector:g,distance:v,runningLength:y}=t[C];if(C<t.length-1&&p-y<3)continue;if(s){if(r){let Te=Ct(1,v/n),Ft=Ct(1,1-Te);z=Ct(1,k+(Ft-k)*(Te*io))}q=Zr(n,s,z,o)}else q=n/2;fe===void 0&&(fe=q);let I=y<b?u(y/b):1,N=p-y<E?f((p-y)/E):1;q=Math.max(.01,q*Math.min(I,N));let D=(C<t.length-1?t[C+1]:t[C]).vector,L=C<t.length-1?eo(g,D):1,Se=eo(g,P)<0&&!J,Ye=L!==null&&L<0;if(Se||Ye){let Te=Pe(Ht(P),q);for(let Ft=1/13,m=0;m<=1;m+=Ft)re=Vt(ke(R,Te),R,Gt*m),S.push(re),X=Vt(Ne(R,Te),R,Gt*-m),G.push(X);pe=re,me=X,Ye&&(J=!0);continue}if(J=!1,C===t.length-1){let Te=Pe(Ht(g),q);S.push(ke(R,Te)),G.push(Ne(R,Te));continue}let We=Pe(Ht(Ji(D,g,L)),q);re=ke(R,We),(C<=1||to(pe,re)>A)&&(S.push(re),pe=re),X=Ne(R,We),(C<=1||to(me,X)>A)&&(G.push(X),me=X),k=z,P=g}let $=t[0].point.slice(0,2),H=t.length>1?t[t.length-1].point.slice(0,2):Ne(t[0].point,[1,1]),W=[],V=[];if(t.length===1){if(!(b||E)||c){let C=no($,fl(Ht(ke($,H))),-(fe||q)),z=[];for(let R=1/13,g=R;g<=1;g+=R)z.push(Vt(C,$,Gt*2*g));return z}}else{if(!(b||E&&t.length===1))if(h)for(let z=1/13,R=z;R<=1;R+=z){let g=Vt(G[0],$,Gt*R);W.push(g)}else{let z=ke(S[0],G[0]),R=Pe(z,.5),g=Pe(z,.51);W.push(ke($,R),ke($,g),Ne($,g),Ne($,R))}let C=Ht(Fg(t[t.length-1].vector));if(E||b&&t.length===1)V.push(H);else if(d){let z=no(H,C,q);for(let R=1/29,g=R;g<1;g+=R)V.push(Vt(z,H,Gt*3*g))}else V.push(Ne(H,Pe(C,q)),Ne(H,Pe(C,q*.99)),ke(H,Pe(C,q*.99)),ke(H,Pe(C,q)))}return S.concat(V,G.reverse(),W)}function Vg(t,e={}){var n;let{streamline:i=.5,size:s=16,last:r=!1}=e;if(t.length===0)return[];let o=.15+(1-i)*.85,a=Array.isArray(t[0])?t:t.map(({x:f,y:p,pressure:b=.5})=>[f,p,b]);if(a.length===2){let f=a[1];a=a.slice(0,-1);for(let p=1;p<5;p++)a.push(Ji(a[0],f,p/4))}a.length===1&&(a=[...a,[...Ne(a[0],[1,1]),...a[0].slice(2)]]);let l=[{point:[a[0][0],a[0][1]],pressure:a[0][2]>=0?a[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],c=!1,h=0,u=l[0],d=a.length-1;for(let f=1;f<a.length;f++){let p=r&&f===d?a[f].slice(0,2):Ji(u.point,a[f],o);if(Wg(u.point,p))continue;let b=$g(p,u.point);if(h+=b,f<d&&!c){if(h<s)continue;c=!0}u={point:p,pressure:a[f][2]>=0?a[f][2]:.5,vector:fl(ke(u.point,p)),distance:b,runningLength:h},l.push(u)}return l[0].vector=((n=l[1])==null?void 0:n.vector)||[0,0],l}function so(t,e={}){return Hg(Vg(t,e),e)}const Gg=()=>{var R;const t=w.useRef(null),e=w.useRef(!1),n=w.useRef(null),i=w.useRef(!1),s=w.useRef(null),r=w.useRef(!1),o=w.useRef(null),{currentStroke:a,currentPressureStroke:l,isDrawing:c,penColor:h,penWidth:u,usePerfectFreehand:d,addPoint:f,startStroke:p,endStroke:b,clearCurrentStroke:E}=Vl(),{drawObjects:A,settings:S,isLoading:G}=di(),{currentTool:k,setCurrentTool:q}=Zi();w.useEffect(()=>{const g=navigator.userAgent.toLowerCase(),v=/iphone|ipad|ipod/.test(g),y=/safari/.test(g)&&!/chrome/.test(g);r.current=v||y},[]);const fe=w.useCallback((g="mouse")=>{const v={size:u*2,thinning:.5,smoothing:.5,streamline:.5,easing:y=>y,start:{taper:0,easing:y=>y,cap:!0},end:{taper:100,easing:y=>y,cap:!0}};return g==="pen"?{...v,thinning:.7,smoothing:.3,streamline:.3}:g==="touch"?{...v,thinning:.4,smoothing:.7,streamline:.7,size:u*2.5}:v},[u]),P=w.useCallback((g,v,y)=>{if(v.length<2)return;g.save(),g.fillStyle=y,g.beginPath();const[I]=v;g.moveTo(I[0],I[1]);for(let N=1;N<v.length;N++){const[D,L]=v[N],[Se,Ye]=v[N-1],We=(Se+D)/2,Te=(Ye+L)/2;g.quadraticCurveTo(Se,Ye,We,Te)}g.closePath(),g.fill(),g.restore()},[]),pe=w.useCallback(()=>{var g;n.current&&(clearTimeout(n.current),n.current=null),(g=S==null?void 0:S.admin)!=null&&g.autoToolSwitch&&(n.current=setTimeout(()=>{q("select"),n.current=null},2e3))},[(R=S==null?void 0:S.admin)==null?void 0:R.autoToolSwitch,q]),me=w.useCallback(()=>{const g=t.current;if(!g)return;const v=g.parentElement;if(!v)return;const y=v.offsetWidth,I=v.offsetHeight;(g.width!==y||g.height!==I)&&(g.width=y,g.height=I,i.current||(i.current=!0,requestAnimationFrame(()=>{i.current&&!G&&($(),i.current=!1)})))},[G]),re=w.useCallback((g,v)=>{const y=t.current;if(!y)return{x:0,y:0};const I=y.getBoundingClientRect(),N=(g-I.left)/I.width*2160,D=(v-I.top)/I.height*3840;return{x:N,y:D}},[]),X=w.useCallback((g,v)=>{const y=t.current;return y?{x:g/2160*y.width,y:v/3840*y.height}:{x:0,y:0}},[]),J=w.useCallback(async(g,v)=>{for(const I of A)for(let N=0;N<I.points.length;N+=2)if(Math.sqrt((I.points[N]-g)**2+(I.points[N+1]-v)**2)<=20)try{const L=ge(_e,`drawObjects/${I.id}`);await kn(L);return}catch(L){console.error("❌ DrawLayer: Failed to erase stroke:",L)}},[A]),$=w.useCallback(()=>{const g=t.current;if(!g)return;const v=g.getContext("2d");if(v&&!(g.width===0||g.height===0)&&(v.clearRect(0,0,g.width,g.height),v.lineCap="round",v.lineJoin="round",A.forEach(y=>{var I;if(!(y.points.length<4))if(d&&y.usePerfectFreehand)try{const N=[];for(let D=0;D<y.points.length;D+=2){const L=X(y.points[D],y.points[D+1]);N.push([L.x,L.y,((I=y.pressure)==null?void 0:I[D/2])||.5])}if(N.length>=2){const D=fe(y.inputType||"mouse");D.size=y.width*2;const L=so(N,D);P(v,L,y.color)}}catch(N){console.warn("🚫 perfect-freehand 렌더링 실패, 기본 렌더링으로 대체:",N),v.beginPath(),v.strokeStyle=y.color,v.lineWidth=y.width;const D=X(y.points[0],y.points[1]);v.moveTo(D.x,D.y);for(let L=2;L<y.points.length;L+=2){const Se=X(y.points[L],y.points[L+1]);v.lineTo(Se.x,Se.y)}v.stroke()}else{v.beginPath(),v.strokeStyle=y.color,v.lineWidth=y.width;const N=X(y.points[0],y.points[1]);v.moveTo(N.x,N.y);for(let D=2;D<y.points.length;D+=2){const L=X(y.points[D],y.points[D+1]);v.lineTo(L.x,L.y)}v.stroke()}}),c&&a.length>=4))if(d&&l.length>=2)try{const y=l.map(L=>{const Se=X(L.x,L.y);return[Se.x,Se.y,L.pressure||.5]}),I=s.current&&r.current?"touch":"mouse",N=fe(I),D=so(y,N);P(v,D,h)}catch(y){console.warn("🚫 현재 스트로크 perfect-freehand 렌더링 실패:",y),v.beginPath(),v.strokeStyle=h,v.lineWidth=u;const I=X(a[0],a[1]);v.moveTo(I.x,I.y);for(let N=2;N<a.length;N+=2){const D=X(a[N],a[N+1]);v.lineTo(D.x,D.y)}v.stroke()}else{v.beginPath(),v.strokeStyle=h,v.lineWidth=u;const y=X(a[0],a[1]);v.moveTo(y.x,y.y);for(let I=2;I<a.length;I+=2){const N=X(a[I],a[I+1]);v.lineTo(N.x,N.y)}v.stroke()}},[A,a,l,c,h,u,d,X,G,fe,P]),H=w.useCallback(g=>{const v=navigator.userAgent.toLowerCase(),y=/iphone/.test(v),I=/ipad/.test(v);if(r.current){if(y)return!0;if(I&&(k==="eraser"&&s.current!==null&&g.pointerType==="touch"||k==="pen"&&g.pointerType!=="pen"&&g.pointerType!=="touch"&&g.pointerType!=="mouse"))return!1}return!0},[k]),W=w.useCallback(g=>{if(k!=="pen"&&k!=="eraser"||!H(g))return;const v=navigator.userAgent.toLowerCase(),y=/iphone/.test(v);if(!y&&s.current!==null&&s.current!==g.pointerId)return;(!y||g.pointerType!=="touch")&&g.preventDefault(),g.stopPropagation(),s.current=g.pointerId,n.current&&(clearTimeout(n.current),n.current=null),o.current&&(clearTimeout(o.current),o.current=null);const I=re(g.clientX,g.clientY);if(k==="pen"){p();const N=g.pressure||(y?.7:.5),D=g.tiltX||0,L=g.tiltY||0;f(I.x,I.y,N,D,L),$()}else k==="eraser"&&(e.current=!0,J(I.x,I.y))},[k,re,p,f,$,J,H]),V=w.useCallback(g=>{const v=navigator.userAgent.toLowerCase();if(!(!/iphone/.test(v)&&s.current!==g.pointerId)){if(k==="pen"&&c){g.preventDefault();const I=re(g.clientX,g.clientY),N=g.pressure||.5,D=g.tiltX||0,L=g.tiltY||0;f(I.x,I.y,N,D,L),$()}else if(k==="eraser"&&e.current){g.preventDefault();const I=re(g.clientX,g.clientY);J(I.x,I.y)}}},[c,k,re,f,$,J]),C=w.useCallback(async g=>{const v=navigator.userAgent.toLowerCase();if(!(!/iphone/.test(v)&&s.current!==g.pointerId)){if(c&&k==="pen"){if(b(),a.length>=4){const I=g.pointerType==="pen"?"pen":g.pointerType==="touch"?"touch":"mouse",N=l.map(L=>L.pressure||.5),D={points:a,color:h,width:u,createdAt:new Date().toISOString(),lastModified:Date.now(),usePerfectFreehand:d,pressure:N,inputType:I};try{await _g(D)}catch(L){console.error("❌ DrawLayer: Failed to save stroke:",L)}}E(),$(),pe()}k==="eraser"&&e.current&&(e.current=!1,pe()),s.current=null,r.current&&g.pointerType==="touch"&&(o.current=setTimeout(()=>{o.current=null},100))}},[c,k,a,b,h,u,E,$,pe]),z=w.useCallback(g=>{s.current===g.pointerId&&(c&&(b(),E(),$()),e.current&&(e.current=!1),s.current=null)},[c,b,E,$]);return w.useEffect(()=>{me();const g=()=>{setTimeout(me,100)};return window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[me]),w.useEffect(()=>{if(!G){const g=setTimeout(()=>{$()},100);return()=>clearTimeout(g)}},[G]),w.useEffect(()=>{G||$()},[A,G]),w.useEffect(()=>{(k==="pen"||k==="eraser")&&n.current&&(clearTimeout(n.current),n.current=null)},[k]),w.useEffect(()=>{c&&$()},[a,c]),w.useEffect(()=>()=>{n.current&&(clearTimeout(n.current),n.current=null),o.current&&(clearTimeout(o.current),o.current=null),s.current=null},[]),T.jsx("canvas",{ref:t,className:"absolute top-0 left-0 w-full h-full",onPointerDown:k==="pen"||k==="eraser"?W:void 0,onPointerMove:k==="pen"||k==="eraser"?V:void 0,onPointerUp:k==="pen"||k==="eraser"?C:void 0,onPointerCancel:k==="pen"||k==="eraser"?z:void 0,onPointerLeave:k==="pen"||k==="eraser"?C:void 0,onContextMenu:g=>g.preventDefault(),style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",touchAction:"none",cursor:k==="pen"?"crosshair":k==="eraser"?"grab":"default",pointerEvents:k==="pen"||k==="eraser"?"auto":"none",WebkitTouchCallout:"none",WebkitUserSelect:"none",WebkitTapHighlightColor:"transparent"}})},pl=Kt.memo(({gridEnabled:t,gridSize:e,canvasWidth:n,canvasHeight:i})=>{if(!t)return null;const s=[],r=[];for(let o=0;o<=n;o+=e)s.push(T.jsx("line",{x1:o,y1:0,x2:o,y2:i,stroke:"#e5e7eb",strokeWidth:1,opacity:.5},`v-${o}`));for(let o=0;o<=i;o+=e)r.push(T.jsx("line",{x1:0,y1:o,x2:n,y2:o,stroke:"#e5e7eb",strokeWidth:1,opacity:.5},`h-${o}`));return T.jsxs("svg",{className:"absolute inset-0 pointer-events-none",width:n,height:i,style:{zIndex:1},children:[s,r]})});pl.displayName="GridLayer";const qg=t=>t.split(`
`).filter(e=>e.trim()).map(e=>e.split("	")),Yg=()=>{var d;const{settings:t}=di(),[e,n]=Kt.useState(""),[i,s]=Kt.useState(!1);if(Kt.useEffect(()=>{const f=p=>{n(p.detail.data),s(p.detail.show)};return window.addEventListener("excel-preview-update",f),()=>{window.removeEventListener("excel-preview-update",f)}},[]),!i||!e.trim())return null;const r={excelPasteSettings:((d=t==null?void 0:t.admin)==null?void 0:d.excelPasteSettings)??{startPosition:{x:100,y:100},cellWidth:120,cellHeight:40,fontSize:14}},o=qg(e),{startPosition:a,cellWidth:l,cellHeight:c}=r.excelPasteSettings,h=Math.max(...o.map(f=>f.length))*l,u=o.length*c;return T.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none",zIndex:15},children:[T.jsx("div",{style:{position:"absolute",left:a.x,top:a.y,width:h,height:u,border:"3px dashed #fbbf24",backgroundColor:"rgba(251, 191, 36, 0.1)",borderRadius:"4px",boxShadow:"0 2px 8px rgba(251, 191, 36, 0.3)"}}),o.map((f,p)=>f.map((b,E)=>T.jsx("div",{style:{position:"absolute",left:a.x+E*l,top:a.y+p*c,width:l,height:c,border:"1px solid rgba(251, 191, 36, 0.4)",backgroundColor:"rgba(251, 191, 36, 0.05)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:`${r.excelPasteSettings.fontSize}px`,color:"rgba(251, 191, 36, 0.8)",fontWeight:"bold",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",padding:"2px"},children:b},`preview-${p}-${E}`))),T.jsxs("div",{style:{position:"absolute",left:a.x,top:a.y-30,backgroundColor:"rgba(251, 191, 36, 0.9)",color:"#ffffff",padding:"4px 8px",borderRadius:"4px",fontSize:"12px",fontWeight:"bold",whiteSpace:"nowrap",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.2)"},children:["📊 미리보기: ",o.length,"행 × ",Math.max(...o.map(f=>f.length)),"열"]})]})},qt=2160,Yt=3840,Qg=({isViewPage:t=!1})=>{var X,J,$,H;const e=w.useRef(null),n=w.useRef(null),[i,s]=w.useState(.15),{zoom:r,viewOffset:o,setZoom:a,zoomAtPoint:l,currentTool:c}=Zi(),{floorImage:h,settings:u}=di(),d={gridVisible:((X=u==null?void 0:u.admin)==null?void 0:X.gridVisible)??!0,gridSize:((J=u==null?void 0:u.admin)==null?void 0:J.gridSize)??32},f=w.useCallback(W=>{W.ctrlKey},[]);w.useEffect(()=>{r<.04&&a(1)},[r,a]),w.useEffect(()=>{const W=V=>{if(V.ctrlKey){try{V.preventDefault()}catch(v){console.debug("preventDefault failed in global wheel handler:",v)}if(!e.current||!n.current)return;const C=e.current.getBoundingClientRect(),z=V.clientX-C.left,R=V.clientY-C.top,g=-V.deltaY;l(g,z,R,C)}};return window.addEventListener("wheel",W,{passive:!1}),()=>{window.removeEventListener("wheel",W)}},[l]),w.useEffect(()=>{const W=V=>{if(V.ctrlKey&&(V.key==="+"||V.key==="=")){try{V.preventDefault()}catch(g){console.debug("preventDefault failed in global keydown handler:",g)}if(!e.current||!n.current)return;const C=e.current.getBoundingClientRect(),z=C.width/2,R=C.height/2;l(120,z,R,C)}if(V.ctrlKey&&V.key==="-"){try{V.preventDefault()}catch(g){console.debug("preventDefault failed in global keydown handler:",g)}if(!e.current||!n.current)return;const C=e.current.getBoundingClientRect(),z=C.width/2,R=C.height/2;l(-120,z,R,C)}};return window.addEventListener("keydown",W),()=>{window.removeEventListener("keydown",W)}},[l]),w.useEffect(()=>{const W=()=>{if(e.current){const C=e.current,z=C.clientWidth,R=C.clientHeight;if(z<=0||R<=0){s(.15);return}const g=z/qt,v=R/Yt,y=Math.min(g,v);s(Math.max(.1,y))}},V=setTimeout(W,100);return window.addEventListener("resize",W),()=>{clearTimeout(V),window.removeEventListener("resize",W)}},[r]);const p=i*r,b=qt*p,E=Yt*p,A=(($=e.current)==null?void 0:$.clientWidth)||0,S=((H=e.current)==null?void 0:H.clientHeight)||0,G=200,k=b>A,q=E>S,fe=k?b+G*2:A,P=q?E+G*2:S,pe=W=>{try{W.preventDefault(),W.stopPropagation()}catch(V){console.debug("preventDefault failed in Canvas context menu:",V)}return!1},me=W=>{if(W.touches.length===1){const V=setTimeout(()=>{try{W.preventDefault()}catch{}},200),C=()=>{clearTimeout(V),document.removeEventListener("touchend",C),document.removeEventListener("touchmove",C)};document.addEventListener("touchend",C,{once:!0}),document.addEventListener("touchmove",C,{once:!0})}},re=()=>c==="pen"||c==="eraser"?"crosshair":"default";return T.jsxs("div",{ref:e,onWheel:f,style:{position:"relative",width:"100%",height:"100%",overflowX:k?"auto":"hidden",overflowY:q?"auto":"hidden",backgroundColor:"transparent",cursor:re()},children:[(k||q)&&T.jsx("div",{style:{position:"absolute",top:0,left:0,width:fe,height:P,pointerEvents:"none",zIndex:1}}),T.jsxs("div",{ref:n,"data-canvas-container":!0,style:{position:"absolute",backgroundColor:"#ffffff",border:"1px solid #d1d5db",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)",width:qt,height:Yt,transform:`translate(${o.x}px, ${o.y}px) scale(${p})`,transformOrigin:"center center",left:k||q?fe/2:"50%",top:k||q?P/2:"50%",marginLeft:`-${qt/2}px`,marginTop:`-${Yt/2}px`,zIndex:10},onContextMenu:pe,onTouchStart:me,children:[h?T.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:`url(${h.path})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:0}}):T.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"#f9fafb",display:"flex",alignItems:"center",justifyContent:"center",zIndex:0},children:T.jsxs("div",{style:{color:"#9ca3af",fontSize:"24px",textAlign:"center"},children:["Board7 Canvas",T.jsx("br",{}),T.jsx("span",{style:{fontSize:"16px"},children:"2160 x 3840"})]})}),T.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:100},children:[T.jsx(pl,{gridEnabled:d.gridVisible,gridSize:d.gridSize,canvasWidth:qt,canvasHeight:Yt}),T.jsx(Lg,{}),T.jsx(Mg,{isViewPage:t}),T.jsx(Yg,{})]}),T.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:1e4,pointerEvents:c==="pen"||c==="eraser"?"auto":"none"},children:T.jsx(Gg,{isViewPage:t},`${p}-${o.x}-${o.y}`)})]}),T.jsxs("div",{style:{position:"absolute",bottom:"16px",left:"16px",backgroundColor:"rgba(0, 0, 0, 0.5)",color:"#ffffff",padding:"4px 12px",borderRadius:"4px",fontSize:"14px",zIndex:1e3},children:[Math.round(i*r*100),"%"]})]})};export{Qg as C,Zi as a,Vl as b,di as u};
