import{r as v,g as Tu,R as Tn,j as T}from"./index-ChAjzawX.js";const ku={},Zr=t=>{let e;const n=new Set,i=(u,d)=>{const h=typeof u=="function"?u(e):u;if(!Object.is(h,e)){const f=e;e=d??(typeof h!="object"||h===null)?h:Object.assign({},e,h),n.forEach(p=>p(e,f))}},s=()=>e,c={setState:i,getState:s,getInitialState:()=>l,subscribe:u=>(n.add(u),()=>n.delete(u)),destroy:()=>{(ku?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},l=e=t(i,s,c);return c},Ru=t=>t?Zr(t):Zr;var Da={exports:{}},Ma={},La={exports:{}},Fa={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var en=v;function Au(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pu=typeof Object.is=="function"?Object.is:Au,Nu=en.useState,xu=en.useEffect,Ou=en.useLayoutEffect,Du=en.useDebugValue;function Mu(t,e){var n=e(),i=Nu({inst:{value:n,getSnapshot:e}}),s=i[0].inst,r=i[1];return Ou(function(){s.value=n,s.getSnapshot=e,us(s)&&r({inst:s})},[t,n,e]),xu(function(){return us(s)&&r({inst:s}),t(function(){us(s)&&r({inst:s})})},[t]),Du(n),n}function us(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pu(t,n)}catch{return!0}}function Lu(t,e){return e()}var Fu=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Lu:Mu;Fa.useSyncExternalStore=en.useSyncExternalStore!==void 0?en.useSyncExternalStore:Fu;La.exports=Fa;var Uu=La.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zi=v,Wu=Uu;function zu(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ju=typeof Object.is=="function"?Object.is:zu,Bu=Wu.useSyncExternalStore,$u=zi.useRef,Hu=zi.useEffect,Vu=zi.useMemo,Gu=zi.useDebugValue;Ma.useSyncExternalStoreWithSelector=function(t,e,n,i,s){var r=$u(null);if(r.current===null){var o={hasValue:!1,value:null};r.current=o}else o=r.current;r=Vu(function(){function c(f){if(!l){if(l=!0,u=f,f=i(f),s!==void 0&&o.hasValue){var p=o.value;if(s(p,f))return d=p}return d=f}if(p=d,ju(u,f))return p;var w=i(f);return s!==void 0&&s(p,w)?(u=f,p):(u=f,d=w)}var l=!1,u,d,h=n===void 0?null:n;return[function(){return c(e())},h===null?void 0:function(){return c(h())}]},[e,n,i,s]);var a=Bu(t,r[0],r[1]);return Hu(function(){o.hasValue=!0,o.value=a},[a]),Gu(a),a};Da.exports=Ma;var qu=Da.exports;const Ku=Tu(qu),Ua={},{useDebugValue:Yu}=Tn,{useSyncExternalStoreWithSelector:Qu}=Ku;let eo=!1;const Xu=t=>t;function Ju(t,e=Xu,n){(Ua?"production":void 0)!=="production"&&n&&!eo&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),eo=!0);const i=Qu(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return Yu(i),i}const to=t=>{(Ua?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?Ru(t):t,n=(i,s)=>Ju(e,i,s);return Object.assign(n,e),n},Ut=t=>t?to(t):to,er=Ut((t,e)=>({currentTool:"select",zoom:1,viewOffset:{x:0,y:0},selectedObjectId:null,creationMode:null,hoveredObjectId:null,setCurrentTool:n=>t({currentTool:n}),setZoom:n=>t({zoom:Math.max(.05,Math.min(5,n))}),setViewOffset:n=>t({viewOffset:n}),setSelectedObjectId:n=>t({selectedObjectId:n}),setCreationMode:n=>t({creationMode:n}),setHoveredObjectId:n=>t({hoveredObjectId:n}),zoomIn:()=>t(n=>({zoom:Math.min(5,n.zoom+.1)})),zoomOut:()=>t(n=>({zoom:Math.max(.05,n.zoom-.1)})),zoomAtPoint:(n,i,s,r)=>{const o=e(),a=1.1,c=n>0?Math.min(5,o.zoom*a):Math.max(.05,o.zoom/a);if(c===o.zoom)return;const l=r.height/2,u=s-l,d=c/o.zoom,h=o.viewOffset.x,f=o.viewOffset.y+u*(1-d);t({zoom:c,viewOffset:{x:h,y:f}})},resetZoom:()=>t({zoom:1,viewOffset:{x:0,y:0}}),fitToWindow:()=>t({zoom:1,viewOffset:{x:0,y:0}})}));Ut(t=>({isDragging:!1,viewCam:{x:0,y:0},snapEnabled:!0,setIsDragging:e=>t({isDragging:e}),setViewCam:e=>t({viewCam:e}),setSnapEnabled:e=>t({snapEnabled:e}),panCanvas:(e,n)=>t(i=>({viewCam:{x:i.viewCam.x+e,y:i.viewCam.y+n}})),resetView:()=>t({viewCam:{x:0,y:0}})}));const Zu=Ut(t=>({currentStroke:[],currentPressureStroke:[],isDrawing:!1,penColor:"#000000",penWidth:4,usePerfectFreehand:!0,lastActionTime:0,defaultColors:["#000000","#FF0000","#00FF00","#0000FF","#FFFF00","#FF00FF","#00FFFF","#FFA500","#800080","#A52A2A"],addPoint:(e,n,i=.5,s=0,r=0)=>t(o=>({currentStroke:[...o.currentStroke,e,n],currentPressureStroke:[...o.currentPressureStroke,{x:e,y:n,pressure:i,tiltX:s,tiltY:r}]})),startStroke:()=>t({isDrawing:!0,currentStroke:[]}),endStroke:()=>t({isDrawing:!1}),clearCurrentStroke:()=>t({currentStroke:[],currentPressureStroke:[]}),setPenColor:e=>t({penColor:e}),setPenWidth:e=>t({penWidth:e}),setUsePerfectFreehand:e=>t({usePerfectFreehand:e}),updateLastActionTime:()=>t({lastActionTime:Date.now()})}));var no={};/**
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
 */const Wa={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const m=function(t,e){if(!t)throw cn(e)},cn=function(t){return new Error("Firebase Database ("+Wa.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const za=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ed=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},tr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(h=64)),i.push(n[u],n[d],n[h],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(za(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ed(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||l==null||d==null)throw new td;const h=r<<2|a>>4;if(i.push(h),l!==64){const f=a<<4&240|l>>2;if(i.push(f),d!==64){const p=l<<6&192|d;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class td extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ja=function(t){const e=za(t);return tr.encodeByteArray(e,!0)},mi=function(t){return ja(t).replace(/\./g,"")},_i=function(t){try{return tr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nd(t){return Ba(void 0,t)}function Ba(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!id(n)||(t[n]=Ba(t[n],e[n]));return t}function id(t){return t!=="__proto__"}/**
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
 */function sd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rd=()=>sd().__FIREBASE_DEFAULTS__,od=()=>{if(typeof process>"u"||typeof no>"u")return;const t=no.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ad=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_i(t[1]);return e&&JSON.parse(e)},nr=()=>{try{return rd()||od()||ad()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$a=t=>{var e,n;return(n=(e=nr())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cd=t=>{const e=$a(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Ha=()=>{var t;return(t=nr())===null||t===void 0?void 0:t.config},Va=t=>{var e;return(e=nr())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Qn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function ld(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[mi(JSON.stringify(n)),mi(JSON.stringify(o)),""].join(".")}/**
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
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ir(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function ud(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ga(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dd(){const t=Se();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hd(){return Wa.NODE_ADMIN===!0}function Ka(){try{return typeof indexedDB=="object"}catch{return!1}}function Ya(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function fd(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const pd="FirebaseError";class qe extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=pd,Object.setPrototypeOf(this,qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wt.prototype.create)}}class Wt{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?gd(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new qe(s,a,i)}}function gd(t,e){return t.replace(md,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const md=/\{\$([^}]+)}/g;/**
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
 */function Dn(t){return JSON.parse(t)}function he(t){return JSON.stringify(t)}/**
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
 */const Qa=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=Dn(_i(r[0])||""),n=Dn(_i(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},_d=function(t){const e=Qa(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},yd=function(t){const e=Qa(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ke(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function tn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function As(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yi(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Mn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(io(r)&&io(o)){if(!Mn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function io(t){return t!==null&&typeof t=="object"}/**
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
 */function ln(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class vd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)i[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let d=0;d<80;d++){d<40?d<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):d<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const h=(s<<5|s>>>27)+l+c+u+i[d]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function wd(t,e){const n=new bd(t,e);return n.subscribe.bind(n)}class bd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Id(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=ds),s.error===void 0&&(s.error=ds),s.complete===void 0&&(s.complete=ds);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Id(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ds(){}function ji(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Cd=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,m(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Bi=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Ed=1e3,Sd=2,Td=4*60*60*1e3,kd=.5;function so(t,e=Ed,n=Sd){const i=e*Math.pow(n,t),s=Math.round(kd*i*(Math.random()-.5)*2);return Math.min(Td,i+s)}/**
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
 */function Ie(t){return t&&t._delegate?t._delegate:t}class Be{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const kt="[DEFAULT]";/**
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
 */class Rd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Qn;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pd(e))try{this.getOrInitializeService({instanceIdentifier:kt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kt){return this.instances.has(e)}getOptions(e=kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ad(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=kt){return this.component?this.component.multipleInstances?e:kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ad(t){return t===kt?void 0:t}function Pd(t){return t.instantiationMode==="EAGER"}/**
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
 */class Nd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Rd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const xd={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Od=X.INFO,Dd={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Md=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Dd[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $i{constructor(e){this.name=e,this._logLevel=Od,this._logHandler=Md,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Ld=(t,e)=>e.some(n=>t instanceof n);let ro,oo;function Fd(){return ro||(ro=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ud(){return oo||(oo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xa=new WeakMap,Ps=new WeakMap,Ja=new WeakMap,hs=new WeakMap,sr=new WeakMap;function Wd(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(_t(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xa.set(n,t)}).catch(()=>{}),sr.set(e,t),e}function zd(t){if(Ps.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ps.set(t,e)}let Ns={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ps.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ja.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _t(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jd(t){Ns=t(Ns)}function Bd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(fs(this),e,...n);return Ja.set(i,e.sort?e.sort():[e]),_t(i)}:Ud().includes(t)?function(...e){return t.apply(fs(this),e),_t(Xa.get(this))}:function(...e){return _t(t.apply(fs(this),e))}}function $d(t){return typeof t=="function"?Bd(t):(t instanceof IDBTransaction&&zd(t),Ld(t,Fd())?new Proxy(t,Ns):t)}function _t(t){if(t instanceof IDBRequest)return Wd(t);if(hs.has(t))return hs.get(t);const e=$d(t);return e!==t&&(hs.set(t,e),sr.set(e,t)),e}const fs=t=>sr.get(t);function Za(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=_t(o);return i&&o.addEventListener("upgradeneeded",c=>{i(_t(o.result),c.oldVersion,c.newVersion,_t(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Hd=["get","getKey","getAll","getAllKeys","count"],Vd=["put","add","delete","clear"],ps=new Map;function ao(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ps.get(e))return ps.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Vd.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Hd.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ps.set(e,r),r}jd(t=>({...t,get:(e,n,i)=>ao(e,n)||t.get(e,n,i),has:(e,n)=>!!ao(e,n)||t.has(e,n)}));/**
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
 */class Gd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qd(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function qd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xs="@firebase/app",co="0.10.13";/**
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
 */const nt=new $i("@firebase/app"),Kd="@firebase/app-compat",Yd="@firebase/analytics-compat",Qd="@firebase/analytics",Xd="@firebase/app-check-compat",Jd="@firebase/app-check",Zd="@firebase/auth",eh="@firebase/auth-compat",th="@firebase/database",nh="@firebase/data-connect",ih="@firebase/database-compat",sh="@firebase/functions",rh="@firebase/functions-compat",oh="@firebase/installations",ah="@firebase/installations-compat",ch="@firebase/messaging",lh="@firebase/messaging-compat",uh="@firebase/performance",dh="@firebase/performance-compat",hh="@firebase/remote-config",fh="@firebase/remote-config-compat",ph="@firebase/storage",gh="@firebase/storage-compat",mh="@firebase/firestore",_h="@firebase/vertexai-preview",yh="@firebase/firestore-compat",vh="firebase",wh="10.14.1";/**
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
 */const Os="[DEFAULT]",bh={[xs]:"fire-core",[Kd]:"fire-core-compat",[Qd]:"fire-analytics",[Yd]:"fire-analytics-compat",[Jd]:"fire-app-check",[Xd]:"fire-app-check-compat",[Zd]:"fire-auth",[eh]:"fire-auth-compat",[th]:"fire-rtdb",[nh]:"fire-data-connect",[ih]:"fire-rtdb-compat",[sh]:"fire-fn",[rh]:"fire-fn-compat",[oh]:"fire-iid",[ah]:"fire-iid-compat",[ch]:"fire-fcm",[lh]:"fire-fcm-compat",[uh]:"fire-perf",[dh]:"fire-perf-compat",[hh]:"fire-rc",[fh]:"fire-rc-compat",[ph]:"fire-gcs",[gh]:"fire-gcs-compat",[mh]:"fire-fst",[yh]:"fire-fst-compat",[_h]:"fire-vertex","fire-js":"fire-js",[vh]:"fire-js-all"};/**
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
 */const Ln=new Map,Ih=new Map,Ds=new Map;function lo(t,e){try{t.container.addComponent(e)}catch(n){nt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ge(t){const e=t.name;if(Ds.has(e))return nt.debug(`There were multiple attempts to register component ${e}.`),!1;Ds.set(e,t);for(const n of Ln.values())lo(n,t);for(const n of Ih.values())lo(n,t);return!0}function zt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qe(t){return t.settings!==void 0}/**
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
 */const Ch={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yt=new Wt("app","Firebase",Ch);/**
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
 */class Eh{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}/**
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
 */const un=wh;function ec(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Os,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw yt.create("bad-app-name",{appName:String(s)});if(n||(n=Ha()),!n)throw yt.create("no-options");const r=Ln.get(s);if(r){if(Mn(n,r.options)&&Mn(i,r.config))return r;throw yt.create("duplicate-app",{appName:s})}const o=new Nd(s);for(const c of Ds.values())o.addComponent(c);const a=new Eh(n,i,o);return Ln.set(s,a),a}function Hi(t=Os){const e=Ln.get(t);if(!e&&t===Os&&Ha())return ec();if(!e)throw yt.create("no-app",{appName:t});return e}function Sh(){return Array.from(Ln.values())}function Me(t,e,n){var i;let s=(i=bh[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nt.warn(a.join(" "));return}Ge(new Be(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Th="firebase-heartbeat-database",kh=1,Fn="firebase-heartbeat-store";let gs=null;function tc(){return gs||(gs=Za(Th,kh,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fn)}catch(n){console.warn(n)}}}}).catch(t=>{throw yt.create("idb-open",{originalErrorMessage:t.message})})),gs}async function Rh(t){try{const n=(await tc()).transaction(Fn),i=await n.objectStore(Fn).get(nc(t));return await n.done,i}catch(e){if(e instanceof qe)nt.warn(e.message);else{const n=yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nt.warn(n.message)}}}async function uo(t,e){try{const i=(await tc()).transaction(Fn,"readwrite");await i.objectStore(Fn).put(e,nc(t)),await i.done}catch(n){if(n instanceof qe)nt.warn(n.message);else{const i=yt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});nt.warn(i.message)}}}function nc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ah=1024,Ph=30*24*60*60*1e3;class Nh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Oh(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ho();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ph}),this._storage.overwrite(this._heartbeatsCache))}catch(i){nt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ho(),{heartbeatsToSend:i,unsentEntries:s}=xh(this._heartbeatsCache.heartbeats),r=mi(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return nt.warn(n),""}}}function ho(){return new Date().toISOString().substring(0,10)}function xh(t,e=Ah){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),fo(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),fo(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Oh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ka()?Ya().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Rh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return uo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return uo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function fo(t){return mi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Dh(t){Ge(new Be("platform-logger",e=>new Gd(e),"PRIVATE")),Ge(new Be("heartbeat",e=>new Nh(e),"PRIVATE")),Me(xs,co,t),Me(xs,co,"esm2017"),Me("fire-js","")}Dh("");var po={};const go="@firebase/database",mo="1.0.8";/**
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
 */let ic="";function Mh(t){ic=t}/**
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
 */class Lh{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),he(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Dn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Fh{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ke(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const sc=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Lh(e)}}catch{}return new Fh},Pt=sc("localStorage"),Uh=sc("sessionStorage");/**
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
 */const Yt=new $i("@firebase/database"),Wh=function(){let t=1;return function(){return t++}}(),rc=function(t){const e=Cd(t),n=new vd;n.update(e);const i=n.digest();return tr.encodeByteArray(i)},Xn=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Xn.apply(null,i):typeof i=="object"?e+=he(i):e+=i,e+=" "}return e};let kn=null,_o=!0;const zh=function(t,e){m(!0,"Can't turn on custom loggers persistently."),Yt.logLevel=X.VERBOSE,kn=Yt.log.bind(Yt)},ye=function(...t){if(_o===!0&&(_o=!1,kn===null&&Uh.get("logging_enabled")===!0&&zh()),kn){const e=Xn.apply(null,t);kn(e)}},Jn=function(t){return function(...e){ye(t,...e)}},Ms=function(...t){const e="FIREBASE INTERNAL ERROR: "+Xn(...t);Yt.error(e)},it=function(...t){const e=`FIREBASE FATAL ERROR: ${Xn(...t)}`;throw Yt.error(e),new Error(e)},Ee=function(...t){const e="FIREBASE WARNING: "+Xn(...t);Yt.warn(e)},jh=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ee("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},rr=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Bh=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},nn="[MIN_NAME]",xt="[MAX_NAME]",jt=function(t,e){if(t===e)return 0;if(t===nn||e===xt)return-1;if(e===nn||t===xt)return 1;{const n=yo(t),i=yo(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},$h=function(t,e){return t===e?0:t<e?-1:1},mn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+he(e))},or=function(t){if(typeof t!="object"||t===null)return he(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=he(e[i]),n+=":",n+=or(t[e[i]]);return n+="}",n},oc=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function ve(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ac=function(t){m(!rr(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,c;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(s?1:0),l.reverse();const u=l.join("");let d="";for(c=0;c<64;c+=8){let h=parseInt(u.substr(c,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Hh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Vh=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Gh(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const qh=new RegExp("^-?(0*)\\d{1,10}$"),Kh=-2147483648,Yh=2147483647,yo=function(t){if(qh.test(t)){const e=Number(t);if(e>=Kh&&e<=Yh)return e}return null},dn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ee("Exception was thrown by user callback.",n),e},Math.floor(0))}},Qh=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Rn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Xh{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Ee(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Jh{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ye("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ee(e)}}class li{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}li.OWNER="owner";/**
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
 */const ar="5",cc="v",lc="s",uc="r",dc="f",hc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,fc="ls",pc="p",Ls="ac",gc="websocket",mc="long_polling";/**
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
 */class _c{constructor(e,n,i,s,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Zh(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function yc(t,e,n){m(typeof e=="string","typeof type must == string"),m(typeof n=="object","typeof params must == object");let i;if(e===gc)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===mc)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Zh(t)&&(n.ns=t.namespace);const s=[];return ve(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class ef{constructor(){this.counters_={}}incrementCounter(e,n=1){Ke(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return nd(this.counters_)}}/**
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
 */const ms={},_s={};function cr(t){const e=t.toString();return ms[e]||(ms[e]=new ef),ms[e]}function tf(t,e){const n=t.toString();return _s[n]||(_s[n]=e()),_s[n]}/**
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
 */class nf{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&dn(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const vo="start",sf="close",rf="pLPCommand",of="pRTLPCB",vc="id",wc="pw",bc="ser",af="cb",cf="seg",lf="ts",uf="d",df="dframe",Ic=1870,Cc=30,hf=Ic-Cc,ff=25e3,pf=3e4;class qt{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Jn(e),this.stats_=cr(n),this.urlFn=c=>(this.appCheckToken&&(c[Ls]=this.appCheckToken),yc(n,mc,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new nf(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(pf)),Bh(()=>{if(this.isClosed_)return;this.scriptTagHolder=new lr((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===vo)this.id=a,this.password=c;else if(o===sf)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[vo]="t",i[bc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[af]=this.scriptTagHolder.uniqueCallbackIdentifier),i[cc]=ar,this.transportSessionId&&(i[lc]=this.transportSessionId),this.lastSessionId&&(i[fc]=this.lastSessionId),this.applicationId&&(i[pc]=this.applicationId),this.appCheckToken&&(i[Ls]=this.appCheckToken),typeof location<"u"&&location.hostname&&hc.test(location.hostname)&&(i[uc]=dc);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){qt.forceAllow_=!0}static forceDisallow(){qt.forceDisallow_=!0}static isAvailable(){return qt.forceAllow_?!0:!qt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Hh()&&!Vh()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=he(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=ja(n),s=oc(i,hf);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[df]="t",i[vc]=e,i[wc]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=he(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class lr{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Wh(),window[rf+this.uniqueCallbackIdentifier]=e,window[of+this.uniqueCallbackIdentifier]=n,this.myIFrame=lr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ye("frame writing exception"),a.stack&&ye(a.stack),ye(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ye("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[vc]=this.myID,e[wc]=this.myPW,e[bc]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Cc+i.length<=Ic;){const o=this.pendingSegs.shift();i=i+"&"+cf+s+"="+o.seg+"&"+lf+s+"="+o.ts+"&"+uf+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(ff)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{ye("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const gf=16384,mf=45e3;let vi=null;typeof MozWebSocket<"u"?vi=MozWebSocket:typeof WebSocket<"u"&&(vi=WebSocket);class We{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Jn(this.connId),this.stats_=cr(n),this.connURL=We.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[cc]=ar,typeof location<"u"&&location.hostname&&hc.test(location.hostname)&&(o[uc]=dc),n&&(o[lc]=n),i&&(o[fc]=i),s&&(o[Ls]=s),r&&(o[pc]=r),yc(e,gc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pt.set("previous_websocket_failure",!0);try{let i;hd(),this.mySock=new vi(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){We.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&vi!==null&&!We.forceDisallow_}static previouslyFailed(){return Pt.isInMemoryStorage||Pt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Pt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Dn(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=he(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=oc(n,gf);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(mf))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}We.responsesRequiredToBeHealthy=2;We.healthyTimeout=3e4;/**
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
 */class Un{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[qt,We]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=We&&We.isAvailable();let i=n&&!We.previouslyFailed();if(e.webSocketOnly&&(n||Ee("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[We];else{const s=this.transports_=[];for(const r of Un.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Un.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Un.globalTransportInitialized_=!1;/**
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
 */const _f=6e4,yf=5e3,vf=10*1024,wf=100*1024,ys="t",wo="d",bf="s",bo="r",If="e",Io="o",Co="a",Eo="n",So="p",Cf="h";class Ef{constructor(e,n,i,s,r,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Jn("c:"+this.id+":"),this.transportManager_=new Un(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Rn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>wf?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>vf?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ys in e){const n=e[ys];n===Co?this.upgradeIfSecondaryHealthy_():n===bo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Io&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=mn("t",e),i=mn("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:So,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Co,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Eo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=mn("t",e),i=mn("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=mn(ys,e);if(wo in e){const i=e[wo];if(n===Cf){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Eo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===bf?this.onConnectionShutdown_(i):n===bo?this.onReset_(i):n===If?Ms("Server Error: "+i):n===Io?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ms("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ar!==i&&Ee("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Rn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(_f))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Rn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(yf))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:So,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ec{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Sc{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class wi extends Sc{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ir()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new wi}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const To=32,ko=768;class J{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function G(){return new J("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function It(t){return t.pieces_.length-t.pieceNum_}function te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new J(t.pieces_,e)}function ur(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Sf(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Wn(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Tc(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new J(e,0)}function se(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof J)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new J(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function Ce(t,e){const n=F(t),i=F(e);if(n===null)return e;if(n===i)return Ce(te(t),te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Tf(t,e){const n=Wn(t,0),i=Wn(e,0);for(let s=0;s<n.length&&s<i.length;s++){const r=jt(n[s],i[s]);if(r!==0)return r}return n.length===i.length?0:n.length<i.length?-1:1}function dr(t,e){if(It(t)!==It(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function De(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(It(t)>It(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class kf{constructor(e,n){this.errorPrefix_=n,this.parts_=Wn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Bi(this.parts_[i]);kc(this)}}function Rf(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Bi(e),kc(t)}function Af(t){const e=t.parts_.pop();t.byteLength_-=Bi(e),t.parts_.length>0&&(t.byteLength_-=1)}function kc(t){if(t.byteLength_>ko)throw new Error(t.errorPrefix_+"has a key path longer than "+ko+" bytes ("+t.byteLength_+").");if(t.parts_.length>To)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+To+") or object contains a cycle "+Rt(t))}function Rt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class hr extends Sc{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new hr}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const _n=1e3,Pf=60*5*1e3,Ro=30*1e3,Nf=1.3,xf=3e4,Of="server_kill",Ao=3;class tt extends Ec{constructor(e,n,i,s,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=tt.nextPersistentConnectionId_++,this.log_=Jn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_n,this.maxReconnectDelay_=Pf,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");hr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&wi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(he(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Qn,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;tt.warnOnListenWarnings_(c,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ke(e,"w")){const i=tn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ee(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||yd(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ro)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=_d(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+he(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ms("Unrecognized action received from server: "+he(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_n,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_n,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>xf&&(this.reconnectDelay_=_n),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Nf)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+tt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(d){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ye("getToken() completed but was canceled"):(ye("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new Ef(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{Ee(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Of)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ee(d),c())}}}interrupt(e){ye("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ye("Resuming connection for reason: "+e),delete this.interruptReasons_[e],As(this.interruptReasons_)&&(this.reconnectDelay_=_n,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>or(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new J(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){ye("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ao&&(this.reconnectDelay_=Ro,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ye("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ao&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ic.replace(/\./g,"-")]=1,ir()?e["framework.cordova"]=1:qa()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=wi.getInstance().currentlyOnline();return As(this.interruptReasons_)&&e}}tt.nextPersistentConnectionId_=0;tt.nextConnectionId_=0;/**
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
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
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
 */class Vi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new U(nn,e),s=new U(nn,n);return this.compare(i,s)!==0}minPost(){return U.MIN}}/**
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
 */let oi;class Rc extends Vi{static get __EMPTY_NODE(){return oi}static set __EMPTY_NODE(e){oi=e}compare(e,n){return jt(e.name,n.name)}isDefinedOn(e){throw cn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(xt,oi)}makePost(e,n){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,oi)}toString(){return".key"}}const Qt=new Rc;/**
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
 */class ai{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class me{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??me.RED,this.left=s??Te.EMPTY_NODE,this.right=r??Te.EMPTY_NODE}copy(e,n,i,s,r){return new me(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Te.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Te.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}me.RED=!0;me.BLACK=!1;class Df{copy(e,n,i,s,r){return this}insert(e,n,i){return new me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Te{constructor(e,n=Te.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Te(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,me.BLACK,null,null))}remove(e){return new Te(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,me.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ai(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ai(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ai(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ai(this.root_,null,this.comparator_,!0,e)}}Te.EMPTY_NODE=new Df;/**
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
 */function Mf(t,e){return jt(t.name,e.name)}function fr(t,e){return jt(t,e)}/**
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
 */let Fs;function Lf(t){Fs=t}const Ac=function(t){return typeof t=="number"?"number:"+ac(t):"string:"+t},Pc=function(t){if(t.isLeafNode()){const e=t.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ke(e,".sv"),"Priority must be a string or number.")}else m(t===Fs||t.isEmpty(),"priority of unexpected type.");m(t===Fs||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Po;class ge{constructor(e,n=ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Pc(this.priorityNode_)}static set __childrenNodeConstructor(e){Po=e}static get __childrenNodeConstructor(){return Po}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:F(e)===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=F(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(m(i!==".priority"||It(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ac(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ac(this.value_):e+=this.value_,this.lazyHash_=rc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ge.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=ge.VALUE_TYPE_ORDER.indexOf(n),r=ge.VALUE_TYPE_ORDER.indexOf(i);return m(s>=0,"Unknown leaf type: "+n),m(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Nc,xc;function Ff(t){Nc=t}function Uf(t){xc=t}class Wf extends Vi{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?jt(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(xt,new ge("[PRIORITY-POST]",xc))}makePost(e,n){const i=Nc(e);return new U(n,new ge("[PRIORITY-POST]",i))}toString(){return".priority"}}const re=new Wf;/**
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
 */const zf=Math.log(2);class jf{constructor(e){const n=r=>parseInt(Math.log(r)/zf,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const bi=function(t,e,n,i){t.sort(e);const s=function(c,l){const u=l-c;let d,h;if(u===0)return null;if(u===1)return d=t[c],h=n?n(d):d,new me(h,d.node,me.BLACK,null,null);{const f=parseInt(u/2,10)+c,p=s(c,f),w=s(f+1,l);return d=t[f],h=n?n(d):d,new me(h,d.node,me.BLACK,p,w)}},r=function(c){let l=null,u=null,d=t.length;const h=function(p,w){const S=d-p,q=d;d-=p;const C=s(S+1,q),N=t[S],K=n?n(N):N;f(new me(K,N.node,w,null,C))},f=function(p){l?(l.left=p,l=p):(u=p,l=p)};for(let p=0;p<c.count;++p){const w=c.nextBitIsOne(),S=Math.pow(2,c.count-(p+1));w?h(S,me.BLACK):(h(S,me.BLACK),h(S,me.RED))}return u},o=new jf(t.length),a=r(o);return new Te(i||e,a)};/**
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
 */let vs;const $t={};class Xe{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return m($t&&re,"ChildrenNode.ts has not been loaded"),vs=vs||new Xe({".priority":$t},{".priority":re}),vs}get(e){const n=tn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Te?n:null}hasIndex(e){return Ke(this.indexSet_,e.toString())}addIndex(e,n){m(e!==Qt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(U.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=bi(i,e.getCompare()):a=$t;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Xe(u,l)}addToIndexes(e,n){const i=yi(this.indexes_,(s,r)=>{const o=tn(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),s===$t)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(U.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),bi(a,o.getCompare())}else return $t;else{const a=n.get(e.name);let c=s;return a&&(c=c.remove(new U(e.name,a))),c.insert(e,e.node)}});return new Xe(i,this.indexSet_)}removeFromIndexes(e,n){const i=yi(this.indexes_,s=>{if(s===$t)return s;{const r=n.get(e.name);return r?s.remove(new U(e.name,r)):s}});return new Xe(i,this.indexSet_)}}/**
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
 */let yn;class R{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Pc(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return yn||(yn=new R(new Te(fr),null,Xe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||yn}updatePriority(e){return this.children_.isEmpty()?this:new R(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?yn:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(m(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new U(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?yn:this.priorityNode_;return new R(s,o,r)}}updateChild(e,n){const i=F(e);if(i===null)return n;{m(F(e)!==".priority"||It(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(te(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(re,(o,a)=>{n[o]=a.val(e),i++,r&&R.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ac(this.getPriority().val())+":"),this.forEachChild(re,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":rc(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new U(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,U.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Zn?-1:0}withIndex(e){if(e===Qt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new R(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Qt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(re),s=n.getIterator(re);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Qt?null:this.indexMap_.get(e.toString())}}R.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Bf extends R{constructor(){super(new Te(fr),R.EMPTY_NODE,Xe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return R.EMPTY_NODE}isEmpty(){return!1}}const Zn=new Bf;Object.defineProperties(U,{MIN:{value:new U(nn,R.EMPTY_NODE)},MAX:{value:new U(xt,Zn)}});Rc.__EMPTY_NODE=R.EMPTY_NODE;ge.__childrenNodeConstructor=R;Lf(Zn);Uf(Zn);/**
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
 */const $f=!0;function de(t,e=null){if(t===null)return R.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ge(n,de(e))}if(!(t instanceof Array)&&$f){const n=[];let i=!1;if(ve(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=de(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),n.push(new U(o,c)))}}),n.length===0)return R.EMPTY_NODE;const r=bi(n,Mf,o=>o.name,fr);if(i){const o=bi(n,re.getCompare());return new R(r,de(e),new Xe({".priority":o},{".priority":re}))}else return new R(r,de(e),Xe.Default)}else{let n=R.EMPTY_NODE;return ve(t,(i,s)=>{if(Ke(t,i)&&i.substring(0,1)!=="."){const r=de(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(de(e))}}Ff(de);/**
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
 */class Hf extends Vi{constructor(e){super(),this.indexPath_=e,m(!j(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?jt(e.name,n.name):r}makePost(e,n){const i=de(e),s=R.EMPTY_NODE.updateChild(this.indexPath_,i);return new U(n,s)}maxPost(){const e=R.EMPTY_NODE.updateChild(this.indexPath_,Zn);return new U(xt,e)}toString(){return Wn(this.indexPath_,0).join("/")}}/**
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
 */class Vf extends Vi{compare(e,n){const i=e.node.compareTo(n.node);return i===0?jt(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const i=de(e);return new U(n,i)}toString(){return".value"}}const Gf=new Vf;/**
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
 */function Oc(t){return{type:"value",snapshotNode:t}}function sn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function zn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function jn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function qf(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class pr{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(zn(n,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(sn(n,i)):o.trackChildChange(jn(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(re,(s,r)=>{n.hasChild(s)||i.trackChildChange(zn(s,r))}),n.isLeafNode()||n.forEachChild(re,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(jn(s,r,o))}else i.trackChildChange(sn(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?R.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Bn{constructor(e){this.indexedFilter_=new pr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Bn.getStartPost_(e),this.endPost_=Bn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new U(n,i))||(i=R.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=R.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(R.EMPTY_NODE);const r=this;return n.forEachChild(re,(o,a)=>{r.matches(new U(o,a))||(s=s.updateImmediateChild(o,R.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Kf{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Bn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new U(n,i))||(i=R.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=R.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=R.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(R.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,R.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const c=new U(n,i),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=s.getChildAfterChild(this.index_,l,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,c);if(u&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(jn(n,i,d)),a.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(zn(n,d));const w=a.updateImmediateChild(n,R.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(sn(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return i.isEmpty()?e:u&&o(l,c)>=0?(r!=null&&(r.trackChildChange(zn(l.name,l.node)),r.trackChildChange(sn(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(l.name,R.EMPTY_NODE)):e}}/**
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
 */class gr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=re}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:nn}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:xt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===re}copy(){const e=new gr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Yf(t){return t.loadsAllData()?new pr(t.getIndex()):t.hasLimit()?new Kf(t):new Bn(t)}function No(t){const e={};if(t.isDefault())return e;let n;if(t.index_===re?n="$priority":t.index_===Gf?n="$value":t.index_===Qt?n="$key":(m(t.index_ instanceof Hf,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=he(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=he(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+he(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=he(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+he(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function xo(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==re&&(e.i=t.index_.toString()),e}/**
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
 */class Ii extends Ec{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Jn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ii.getListenId_(e,i),a={};this.listens_[o]=a;const c=No(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let d=u;if(l===404&&(d=null,l=null),l===null&&this.onDataUpdate_(r,d,!1,i),tn(this.listens_,o)===a){let h;l?l===401?h="permission_denied":h="rest_error:"+l:h="ok",s(h,null)}})}unlisten(e,n){const i=Ii.getListenId_(e,n);delete this.listens_[i]}get(e){const n=No(e._queryParams),i=e._path.toString(),s=new Qn;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ln(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Dn(a.responseText)}catch{Ee("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&Ee("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Qf{constructor(){this.rootNode_=R.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ci(){return{value:null,children:new Map}}function Dc(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=F(e);t.children.has(i)||t.children.set(i,Ci());const s=t.children.get(i);e=te(e),Dc(s,e,n)}}function Us(t,e,n){t.value!==null?n(e,t.value):Xf(t,(i,s)=>{const r=new J(e.toString()+"/"+i);Us(s,r,n)})}function Xf(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class Jf{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ve(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const Oo=10*1e3,Zf=30*1e3,ep=5*60*1e3;class tp{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Jf(e);const i=Oo+(Zf-Oo)*Math.random();Rn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;ve(e,(s,r)=>{r>0&&Ke(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Rn(this.reportStats_.bind(this),Math.floor(Math.random()*2*ep))}}/**
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
 */var ze;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ze||(ze={}));function mr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _r(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function yr(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ei{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=ze.ACK_USER_WRITE,this.source=mr()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new J(e));return new Ei(G(),n,this.revert)}}else return m(F(this.path)===e,"operationForChild called for unrelated child."),new Ei(te(this.path),this.affectedTree,this.revert)}}/**
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
 */class $n{constructor(e,n){this.source=e,this.path=n,this.type=ze.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new $n(this.source,G()):new $n(this.source,te(this.path))}}/**
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
 */class Ot{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=ze.OVERWRITE}operationForChild(e){return j(this.path)?new Ot(this.source,G(),this.snap.getImmediateChild(e)):new Ot(this.source,te(this.path),this.snap)}}/**
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
 */class rn{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=ze.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new J(e));return n.isEmpty()?null:n.value?new Ot(this.source,G(),n.value):new rn(this.source,G(),n)}else return m(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new rn(this.source,te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ct{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class np{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ip(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(qf(o.childName,o.snapshotNode))}),vn(t,s,"child_removed",e,i,n),vn(t,s,"child_added",e,i,n),vn(t,s,"child_moved",r,i,n),vn(t,s,"child_changed",e,i,n),vn(t,s,"value",e,i,n),s}function vn(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,c)=>rp(t,a,c)),o.forEach(a=>{const c=sp(t,a,r);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function sp(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function rp(t,e,n){if(e.childName==null||n.childName==null)throw cn("Should only compare child_ events.");const i=new U(e.childName,e.snapshotNode),s=new U(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function Gi(t,e){return{eventCache:t,serverCache:e}}function An(t,e,n,i){return Gi(new Ct(e,n,i),t.serverCache)}function Mc(t,e,n,i){return Gi(t.eventCache,new Ct(e,n,i))}function Si(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Dt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let ws;const op=()=>(ws||(ws=new Te($h)),ws);class ee{constructor(e,n=op()){this.value=e,this.children=n}static fromObject(e){let n=new ee(null);return ve(e,(i,s)=>{n=n.set(new J(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:G(),value:this.value};if(j(e))return null;{const i=F(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(te(e),n);return r!=null?{path:se(new J(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=F(e),i=this.children.get(n);return i!==null?i.subtree(te(e)):new ee(null)}}set(e,n){if(j(e))return new ee(n,this.children);{const i=F(e),r=(this.children.get(i)||new ee(null)).set(te(e),n),o=this.children.insert(i,r);return new ee(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new ee(null):new ee(null,this.children);{const n=F(e),i=this.children.get(n);if(i){const s=i.remove(te(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new ee(null):new ee(this.value,r)}else return this}}get(e){if(j(e))return this.value;{const n=F(e),i=this.children.get(n);return i?i.get(te(e)):null}}setTree(e,n){if(j(e))return n;{const i=F(e),r=(this.children.get(i)||new ee(null)).setTree(te(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new ee(this.value,o)}}fold(e){return this.fold_(G(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(se(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,G(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(j(e))return null;{const r=F(e),o=this.children.get(r);return o?o.findOnPath_(te(e),se(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,G(),n)}foreachOnPath_(e,n,i){if(j(e))return this;{this.value&&i(n,this.value);const s=F(e),r=this.children.get(s);return r?r.foreachOnPath_(te(e),se(n,s),i):new ee(null)}}foreach(e){this.foreach_(G(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(se(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class je{constructor(e){this.writeTree_=e}static empty(){return new je(new ee(null))}}function Pn(t,e,n){if(j(e))return new je(new ee(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Ce(s,e);return r=r.updateChild(o,n),new je(t.writeTree_.set(s,r))}else{const s=new ee(n),r=t.writeTree_.setTree(e,s);return new je(r)}}}function Ws(t,e,n){let i=t;return ve(n,(s,r)=>{i=Pn(i,se(e,s),r)}),i}function Do(t,e){if(j(e))return je.empty();{const n=t.writeTree_.setTree(e,new ee(null));return new je(n)}}function zs(t,e){return Bt(t,e)!=null}function Bt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ce(n.path,e)):null}function Mo(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(re,(i,s)=>{e.push(new U(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new U(i,s.value))}),e}function vt(t,e){if(j(e))return t;{const n=Bt(t,e);return n!=null?new je(new ee(n)):new je(t.writeTree_.subtree(e))}}function js(t){return t.writeTree_.isEmpty()}function on(t,e){return Lc(G(),t.writeTree_,e)}function Lc(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Lc(se(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(se(t,".priority"),i)),n}}/**
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
 */function qi(t,e){return zc(e,t)}function ap(t,e,n,i,s){m(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Pn(t.visibleWrites,e,n)),t.lastWriteId=i}function cp(t,e,n,i){m(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=Ws(t.visibleWrites,e,n),t.lastWriteId=i}function lp(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function up(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);m(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&dp(a,i.path)?s=!1:De(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return hp(t),!0;if(i.snap)t.visibleWrites=Do(t.visibleWrites,i.path);else{const a=i.children;ve(a,c=>{t.visibleWrites=Do(t.visibleWrites,se(i.path,c))})}return!0}else return!1}function dp(t,e){if(t.snap)return De(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&De(se(t.path,n),e))return!0;return!1}function hp(t){t.visibleWrites=Fc(t.allWrites,fp,G()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function fp(t){return t.visible}function Fc(t,e,n){let i=je.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)De(n,o)?(a=Ce(n,o),i=Pn(i,a,r.snap)):De(o,n)&&(a=Ce(o,n),i=Pn(i,G(),r.snap.getChild(a)));else if(r.children){if(De(n,o))a=Ce(n,o),i=Ws(i,a,r.children);else if(De(o,n))if(a=Ce(o,n),j(a))i=Ws(i,G(),r.children);else{const c=tn(r.children,F(a));if(c){const l=c.getChild(te(a));i=Pn(i,G(),l)}}}else throw cn("WriteRecord should have .snap or .children")}}return i}function Uc(t,e,n,i,s){if(!i&&!s){const r=Bt(t.visibleWrites,e);if(r!=null)return r;{const o=vt(t.visibleWrites,e);if(js(o))return n;if(n==null&&!zs(o,G()))return null;{const a=n||R.EMPTY_NODE;return on(o,a)}}}else{const r=vt(t.visibleWrites,e);if(!s&&js(r))return n;if(!s&&n==null&&!zs(r,G()))return null;{const o=function(l){return(l.visible||s)&&(!i||!~i.indexOf(l.writeId))&&(De(l.path,e)||De(e,l.path))},a=Fc(t.allWrites,o,e),c=n||R.EMPTY_NODE;return on(a,c)}}}function pp(t,e,n){let i=R.EMPTY_NODE;const s=Bt(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(re,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=vt(t.visibleWrites,e);return n.forEachChild(re,(o,a)=>{const c=on(vt(r,new J(o)),a);i=i.updateImmediateChild(o,c)}),Mo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=vt(t.visibleWrites,e);return Mo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function gp(t,e,n,i,s){m(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=se(e,n);if(zs(t.visibleWrites,r))return null;{const o=vt(t.visibleWrites,r);return js(o)?s.getChild(n):on(o,s.getChild(n))}}function mp(t,e,n,i){const s=se(e,n),r=Bt(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=vt(t.visibleWrites,s);return on(o,i.getNode().getImmediateChild(n))}else return null}function _p(t,e){return Bt(t.visibleWrites,e)}function yp(t,e,n,i,s,r,o){let a;const c=vt(t.visibleWrites,e),l=Bt(c,G());if(l!=null)a=l;else if(n!=null)a=on(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=h.getNext();for(;f&&u.length<s;)d(f,i)!==0&&u.push(f),f=h.getNext();return u}else return[]}function vp(){return{visibleWrites:je.empty(),allWrites:[],lastWriteId:-1}}function Ti(t,e,n,i){return Uc(t.writeTree,t.treePath,e,n,i)}function vr(t,e){return pp(t.writeTree,t.treePath,e)}function Lo(t,e,n,i){return gp(t.writeTree,t.treePath,e,n,i)}function ki(t,e){return _p(t.writeTree,se(t.treePath,e))}function wp(t,e,n,i,s,r){return yp(t.writeTree,t.treePath,e,n,i,s,r)}function wr(t,e,n){return mp(t.writeTree,t.treePath,e,n)}function Wc(t,e){return zc(se(t.treePath,e),t.writeTree)}function zc(t,e){return{treePath:t,writeTree:e}}/**
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
 */class bp{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;m(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),m(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,jn(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,zn(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,sn(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,jn(i,e.snapshotNode,s.oldSnap));else throw cn("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Ip{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const jc=new Ip;class br{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ct(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return wr(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Dt(this.viewCache_),r=wp(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function Cp(t){return{filter:t}}function Ep(t,e){m(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Sp(t,e,n,i,s){const r=new bp;let o,a;if(n.type===ze.OVERWRITE){const l=n;l.source.fromUser?o=Bs(t,e,l.path,l.snap,i,s,r):(m(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!j(l.path),o=Ri(t,e,l.path,l.snap,i,s,a,r))}else if(n.type===ze.MERGE){const l=n;l.source.fromUser?o=kp(t,e,l.path,l.children,i,s,r):(m(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=$s(t,e,l.path,l.children,i,s,a,r))}else if(n.type===ze.ACK_USER_WRITE){const l=n;l.revert?o=Pp(t,e,l.path,i,s,r):o=Rp(t,e,l.path,l.affectedTree,i,s,r)}else if(n.type===ze.LISTEN_COMPLETE)o=Ap(t,e,n.path,i,r);else throw cn("Unknown operation type: "+n.type);const c=r.getChanges();return Tp(e,o,c),{viewCache:o,changes:c}}function Tp(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Si(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Oc(Si(e)))}}function Bc(t,e,n,i,s,r){const o=e.eventCache;if(ki(i,n)!=null)return e;{let a,c;if(j(n))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Dt(e),u=l instanceof R?l:R.EMPTY_NODE,d=vr(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const l=Ti(i,Dt(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=F(n);if(l===".priority"){m(It(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const d=Lo(i,n,u,c);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=te(n);let d;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const h=Lo(i,n,o.getNode(),c);h!=null?d=o.getNode().getImmediateChild(l).updateChild(u,h):d=o.getNode().getImmediateChild(l)}else d=wr(i,l,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),l,d,u,s,r):a=o.getNode()}}return An(e,a,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function Ri(t,e,n,i,s,r,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(j(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),f,null)}else{const f=F(n);if(!c.isCompleteForPath(n)&&It(n)>1)return e;const p=te(n),S=c.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?l=u.updatePriority(c.getNode(),S):l=u.updateChild(c.getNode(),f,S,p,jc,null)}const d=Mc(e,l,c.isFullyInitialized()||j(n),u.filtersNodes()),h=new br(s,d,r);return Bc(t,d,n,s,h,a)}function Bs(t,e,n,i,s,r,o){const a=e.eventCache;let c,l;const u=new br(s,e,r);if(j(n))l=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=An(e,l,!0,t.filter.filtersNodes());else{const d=F(n);if(d===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),i),c=An(e,l,a.isFullyInitialized(),a.isFiltered());else{const h=te(n),f=a.getNode().getImmediateChild(d);let p;if(j(h))p=i;else{const w=u.getCompleteChild(d);w!=null?ur(h)===".priority"&&w.getChild(Tc(h)).isEmpty()?p=w:p=w.updateChild(h,i):p=R.EMPTY_NODE}if(f.equals(p))c=e;else{const w=t.filter.updateChild(a.getNode(),d,p,h,u,o);c=An(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Fo(t,e){return t.eventCache.isCompleteForChild(e)}function kp(t,e,n,i,s,r,o){let a=e;return i.foreach((c,l)=>{const u=se(n,c);Fo(e,F(u))&&(a=Bs(t,a,u,l,s,r,o))}),i.foreach((c,l)=>{const u=se(n,c);Fo(e,F(u))||(a=Bs(t,a,u,l,s,r,o))}),a}function Uo(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function $s(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;j(n)?l=i:l=new ee(null).setTree(n,i);const u=e.serverCache.getNode();return l.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),p=Uo(t,f,h);c=Ri(t,c,new J(d),p,s,r,o,a)}}),l.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const p=e.serverCache.getNode().getImmediateChild(d),w=Uo(t,p,h);c=Ri(t,c,new J(d),w,s,r,o,a)}}),c}function Rp(t,e,n,i,s,r,o){if(ki(s,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(j(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Ri(t,e,n,c.getNode().getChild(n),s,r,a,o);if(j(n)){let l=new ee(null);return c.getNode().forEachChild(Qt,(u,d)=>{l=l.set(new J(u),d)}),$s(t,e,n,l,s,r,a,o)}else return e}else{let l=new ee(null);return i.foreach((u,d)=>{const h=se(n,u);c.isCompleteForPath(h)&&(l=l.set(u,c.getNode().getChild(h)))}),$s(t,e,n,l,s,r,a,o)}}function Ap(t,e,n,i,s){const r=e.serverCache,o=Mc(e,r.getNode(),r.isFullyInitialized()||j(n),r.isFiltered());return Bc(t,o,n,i,jc,s)}function Pp(t,e,n,i,s,r){let o;if(ki(i,n)!=null)return e;{const a=new br(i,e,s),c=e.eventCache.getNode();let l;if(j(n)||F(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ti(i,Dt(e));else{const d=e.serverCache.getNode();m(d instanceof R,"serverChildren would be complete if leaf node"),u=vr(i,d)}u=u,l=t.filter.updateFullNode(c,u,r)}else{const u=F(n);let d=wr(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=c.getImmediateChild(u)),d!=null?l=t.filter.updateChild(c,u,d,te(n),a,r):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,R.EMPTY_NODE,te(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ti(i,Dt(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||ki(i,G())!=null,An(e,l,o,t.filter.filtersNodes())}}/**
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
 */class Np{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new pr(i.getIndex()),r=Yf(i);this.processor_=Cp(r);const o=n.serverCache,a=n.eventCache,c=s.updateFullNode(R.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(R.EMPTY_NODE,a.getNode(),null),u=new Ct(c,o.isFullyInitialized(),s.filtersNodes()),d=new Ct(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Gi(d,u),this.eventGenerator_=new np(this.query_)}get query(){return this.query_}}function xp(t){return t.viewCache_.serverCache.getNode()}function Op(t){return Si(t.viewCache_)}function Dp(t,e){const n=Dt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function Wo(t){return t.eventRegistrations_.length===0}function Mp(t,e){t.eventRegistrations_.push(e)}function zo(t,e,n){const i=[];if(n){m(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function jo(t,e,n,i){e.type===ze.MERGE&&e.source.queryId!==null&&(m(Dt(t.viewCache_),"We should always have a full cache before handling merges"),m(Si(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=Sp(t.processor_,s,e,n,i);return Ep(t.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,$c(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Lp(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(re,(r,o)=>{i.push(sn(r,o))}),n.isFullyInitialized()&&i.push(Oc(n.getNode())),$c(t,i,n.getNode(),e)}function $c(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return ip(t.eventGenerator_,e,n,s)}/**
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
 */let Ai;class Hc{constructor(){this.views=new Map}}function Fp(t){m(!Ai,"__referenceConstructor has already been defined"),Ai=t}function Up(){return m(Ai,"Reference.ts has not been loaded"),Ai}function Wp(t){return t.views.size===0}function Ir(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return m(r!=null,"SyncTree gave us an op for an invalid query."),jo(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(jo(o,e,n,i));return r}}function Vc(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Ti(n,s?i:null),c=!1;a?c=!0:i instanceof R?(a=vr(n,i),c=!1):(a=R.EMPTY_NODE,c=!1);const l=Gi(new Ct(a,c,!1),new Ct(i,s,!1));return new Np(e,l)}return o}function zp(t,e,n,i,s,r){const o=Vc(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Mp(o,n),Lp(o,n)}function jp(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=Et(t);if(s==="default")for(const[c,l]of t.views.entries())o=o.concat(zo(l,n,i)),Wo(l)&&(t.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=t.views.get(s);c&&(o=o.concat(zo(c,n,i)),Wo(c)&&(t.views.delete(s),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!Et(t)&&r.push(new(Up())(e._repo,e._path)),{removed:r,events:o}}function Gc(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function wt(t,e){let n=null;for(const i of t.views.values())n=n||Dp(i,e);return n}function qc(t,e){if(e._queryParams.loadsAllData())return Ki(t);{const i=e._queryIdentifier;return t.views.get(i)}}function Kc(t,e){return qc(t,e)!=null}function Et(t){return Ki(t)!=null}function Ki(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Pi;function Bp(t){m(!Pi,"__referenceConstructor has already been defined"),Pi=t}function $p(){return m(Pi,"Reference.ts has not been loaded"),Pi}let Hp=1;class Bo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ee(null),this.pendingWriteTree_=vp(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Yc(t,e,n,i,s){return ap(t.pendingWriteTree_,e,n,i,s),s?hn(t,new Ot(mr(),e,n)):[]}function Vp(t,e,n,i){cp(t.pendingWriteTree_,e,n,i);const s=ee.fromObject(n);return hn(t,new rn(mr(),e,s))}function pt(t,e,n=!1){const i=lp(t.pendingWriteTree_,e);if(up(t.pendingWriteTree_,e)){let r=new ee(null);return i.snap!=null?r=r.set(G(),!0):ve(i.children,o=>{r=r.set(new J(o),!0)}),hn(t,new Ei(i.path,r,n))}else return[]}function ei(t,e,n){return hn(t,new Ot(_r(),e,n))}function Gp(t,e,n){const i=ee.fromObject(n);return hn(t,new rn(_r(),e,i))}function qp(t,e){return hn(t,new $n(_r(),e))}function Kp(t,e,n){const i=Er(t,n);if(i){const s=Sr(i),r=s.path,o=s.queryId,a=Ce(r,e),c=new $n(yr(o),a);return Tr(t,r,c)}else return[]}function Ni(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Kc(o,e))){const c=jp(o,e,n,i);Wp(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!s){const u=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(h,f)=>Et(f));if(u&&!d){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const f=Xp(h);for(let p=0;p<f.length;++p){const w=f[p],S=w.query,q=Zc(t,w);t.listenProvider_.startListening(Nn(S),Hn(t,S),q.hashFn,q.onComplete)}}}!d&&l.length>0&&!i&&(u?t.listenProvider_.stopListening(Nn(e),null):l.forEach(h=>{const f=t.queryToTagMap.get(Yi(h));t.listenProvider_.stopListening(Nn(h),f)}))}Jp(t,l)}return a}function Qc(t,e,n,i){const s=Er(t,i);if(s!=null){const r=Sr(s),o=r.path,a=r.queryId,c=Ce(o,e),l=new Ot(yr(a),c,n);return Tr(t,o,l)}else return[]}function Yp(t,e,n,i){const s=Er(t,i);if(s){const r=Sr(s),o=r.path,a=r.queryId,c=Ce(o,e),l=ee.fromObject(n),u=new rn(yr(a),c,l);return Tr(t,o,u)}else return[]}function Hs(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(h,f)=>{const p=Ce(h,s);r=r||wt(f,p),o=o||Et(f)});let a=t.syncPointTree_.get(s);a?(o=o||Et(a),r=r||wt(a,G())):(a=new Hc,t.syncPointTree_=t.syncPointTree_.set(s,a));let c;r!=null?c=!0:(c=!1,r=R.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((f,p)=>{const w=wt(p,G());w&&(r=r.updateImmediateChild(f,w))}));const l=Kc(a,e);if(!l&&!e._queryParams.loadsAllData()){const h=Yi(e);m(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=Zp();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const u=qi(t.pendingWriteTree_,s);let d=zp(a,e,n,u,r,c);if(!l&&!o&&!i){const h=qc(a,e);d=d.concat(eg(t,e,h))}return d}function Cr(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Ce(o,e),l=wt(a,c);if(l)return l});return Uc(s,e,r,n,!0)}function Qp(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(l,u)=>{const d=Ce(l,n);i=i||wt(u,d)});let s=t.syncPointTree_.get(n);s?i=i||wt(s,G()):(s=new Hc,t.syncPointTree_=t.syncPointTree_.set(n,s));const r=i!=null,o=r?new Ct(i,!0,!1):null,a=qi(t.pendingWriteTree_,e._path),c=Vc(s,e,a,r?o.getNode():R.EMPTY_NODE,r);return Op(c)}function hn(t,e){return Xc(e,t.syncPointTree_,null,qi(t.pendingWriteTree_,G()))}function Xc(t,e,n,i){if(j(t.path))return Jc(t,e,n,i);{const s=e.get(G());n==null&&s!=null&&(n=wt(s,G()));let r=[];const o=F(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=Wc(i,o);r=r.concat(Xc(a,c,l,u))}return s&&(r=r.concat(Ir(s,t,i,n))),r}}function Jc(t,e,n,i){const s=e.get(G());n==null&&s!=null&&(n=wt(s,G()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=Wc(i,o),u=t.operationForChild(o);u&&(r=r.concat(Jc(u,a,c,l)))}),s&&(r=r.concat(Ir(s,t,i,n))),r}function Zc(t,e){const n=e.query,i=Hn(t,n);return{hashFn:()=>(xp(e)||R.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Kp(t,n._path,i):qp(t,n._path);{const r=Gh(s,n);return Ni(t,n,null,r)}}}}function Hn(t,e){const n=Yi(e);return t.queryToTagMap.get(n)}function Yi(t){return t._path.toString()+"$"+t._queryIdentifier}function Er(t,e){return t.tagToQueryMap.get(e)}function Sr(t){const e=t.indexOf("$");return m(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new J(t.substr(0,e))}}function Tr(t,e,n){const i=t.syncPointTree_.get(e);m(i,"Missing sync point for query tag that we're tracking");const s=qi(t.pendingWriteTree_,e);return Ir(i,n,s,null)}function Xp(t){return t.fold((e,n,i)=>{if(n&&Et(n))return[Ki(n)];{let s=[];return n&&(s=Gc(n)),ve(i,(r,o)=>{s=s.concat(o)}),s}})}function Nn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new($p())(t._repo,t._path):t}function Jp(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=Yi(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function Zp(){return Hp++}function eg(t,e,n){const i=e._path,s=Hn(t,e),r=Zc(t,n),o=t.listenProvider_.startListening(Nn(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)m(!Et(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,u,d)=>{if(!j(l)&&u&&Et(u))return[Ki(u).query];{let h=[];return u&&(h=h.concat(Gc(u).map(f=>f.query))),ve(d,(f,p)=>{h=h.concat(p)}),h}});for(let l=0;l<c.length;++l){const u=c[l];t.listenProvider_.stopListening(Nn(u),Hn(t,u))}}return o}/**
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
 */class kr{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new kr(n)}node(){return this.node_}}class Rr{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=se(this.path_,e);return new Rr(this.syncTree_,n)}node(){return Cr(this.syncTree_,this.path_)}}const tg=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},$o=function(t,e,n){if(!t||typeof t!="object")return t;if(m(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ng(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ig(t[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ng=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:m(!1,"Unexpected server value: "+t)}},ig=function(t,e,n){t.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&m(!1,"Unexpected increment value: "+i);const s=e.node();if(m(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},el=function(t,e,n,i){return Ar(e,new Rr(n,t),i)},tl=function(t,e,n){return Ar(t,new kr(e),n)};function Ar(t,e,n){const i=t.getPriority().val(),s=$o(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=$o(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new ge(a,de(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ge(s))),o.forEachChild(re,(a,c)=>{const l=Ar(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
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
 */class Pr{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Nr(t,e){let n=e instanceof J?e:new J(e),i=t,s=F(n);for(;s!==null;){const r=tn(i.node.children,s)||{children:{},childCount:0};i=new Pr(s,i,r),n=te(n),s=F(n)}return i}function fn(t){return t.node.value}function nl(t,e){t.node.value=e,Vs(t)}function il(t){return t.node.childCount>0}function sg(t){return fn(t)===void 0&&!il(t)}function Qi(t,e){ve(t.node.children,(n,i)=>{e(new Pr(n,t,i))})}function sl(t,e,n,i){n&&!i&&e(t),Qi(t,s=>{sl(s,e,!0,i)}),n&&i&&e(t)}function rg(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ti(t){return new J(t.parent===null?t.name:ti(t.parent)+"/"+t.name)}function Vs(t){t.parent!==null&&og(t.parent,t.name,t)}function og(t,e,n){const i=sg(n),s=Ke(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Vs(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Vs(t))}/**
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
 */const ag=/[\[\].#$\/\u0000-\u001F\u007F]/,cg=/[\[\].#$\u0000-\u001F\u007F]/,bs=10*1024*1024,xr=function(t){return typeof t=="string"&&t.length!==0&&!ag.test(t)},rl=function(t){return typeof t=="string"&&t.length!==0&&!cg.test(t)},lg=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),rl(t)},ug=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!rr(t)||t&&typeof t=="object"&&Ke(t,".sv")},ol=function(t,e,n,i){i&&e===void 0||Xi(ji(t,"value"),e,n)},Xi=function(t,e,n){const i=n instanceof J?new kf(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Rt(i));if(typeof e=="function")throw new Error(t+"contains a function "+Rt(i)+" with contents = "+e.toString());if(rr(e))throw new Error(t+"contains "+e.toString()+" "+Rt(i));if(typeof e=="string"&&e.length>bs/3&&Bi(e)>bs)throw new Error(t+"contains a string greater than "+bs+" utf8 bytes "+Rt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(ve(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!xr(o)))throw new Error(t+" contains an invalid key ("+o+") "+Rt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Rf(i,o),Xi(t,a,i),Af(i)}),s&&r)throw new Error(t+' contains ".value" child '+Rt(i)+" in addition to actual children.")}},dg=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const r=Wn(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!xr(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Tf);let s=null;for(n=0;n<e.length;n++){if(i=e[n],s!==null&&De(s,i))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},hg=function(t,e,n,i){const s=ji(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];ve(e,(o,a)=>{const c=new J(o);if(Xi(s,a,se(n,c)),ur(c)===".priority"&&!ug(a))throw new Error(s+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),dg(s,r)},al=function(t,e,n,i){if(!rl(n))throw new Error(ji(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},fg=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),al(t,e,n)},Or=function(t,e){if(F(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},pg=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!xr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!lg(n))throw new Error(ji(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class gg{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ji(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!dr(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function cl(t,e,n){Ji(t,n),ll(t,i=>dr(i,e))}function Le(t,e,n){Ji(t,n),ll(t,i=>De(i,e)||De(e,i))}function ll(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(mg(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function mg(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();kn&&ye("event: "+n.toString()),dn(i)}}}/**
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
 */const _g="repo_interrupt",yg=25;class vg{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new gg,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ci(),this.transactionQueueTree_=new Pr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function wg(t,e,n){if(t.stats_=cr(t.repoInfo_),t.forceRestClient_||Qh())t.server_=new Ii(t.repoInfo_,(i,s,r,o)=>{Ho(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Vo(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{he(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new tt(t.repoInfo_,e,(i,s,r,o)=>{Ho(t,i,s,r,o)},i=>{Vo(t,i)},i=>{bg(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=tf(t.repoInfo_,()=>new tp(t.stats_,t.server_)),t.infoData_=new Qf,t.infoSyncTree_=new Bo({startListening:(i,s,r,o)=>{let a=[];const c=t.infoData_.getNode(i._path);return c.isEmpty()||(a=ei(t.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Dr(t,"connected",!1),t.serverSyncTree_=new Bo({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,c)=>{const l=o(a,c);Le(t.eventQueue_,i._path,l)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function ul(t){const n=t.infoData_.getNode(new J(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Zi(t){return tg({timestamp:ul(t)})}function Ho(t,e,n,i,s){t.dataUpdateCount++;const r=new J(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const c=yi(n,l=>de(l));o=Yp(t.serverSyncTree_,r,c,s)}else{const c=de(n);o=Qc(t.serverSyncTree_,r,c,s)}else if(i){const c=yi(n,l=>de(l));o=Gp(t.serverSyncTree_,r,c)}else{const c=de(n);o=ei(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=an(t,r)),Le(t.eventQueue_,a,o)}function Vo(t,e){Dr(t,"connected",e),e===!1&&Sg(t)}function bg(t,e){ve(e,(n,i)=>{Dr(t,n,i)})}function Dr(t,e,n){const i=new J("/.info/"+e),s=de(n);t.infoData_.updateSnapshot(i,s);const r=ei(t.infoSyncTree_,i,s);Le(t.eventQueue_,i,r)}function Mr(t){return t.nextWriteId_++}function Ig(t,e,n){const i=Qp(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(s=>{const r=de(s).withIndex(e._queryParams.getIndex());Hs(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ei(t.serverSyncTree_,e._path,r);else{const a=Hn(t.serverSyncTree_,e);o=Qc(t.serverSyncTree_,e._path,r,a)}return Le(t.eventQueue_,e._path,o),Ni(t.serverSyncTree_,e,n,null,!0),r},s=>(ni(t,"get for query "+he(e)+" failed: "+s),Promise.reject(new Error(s))))}function Cg(t,e,n,i,s){ni(t,"set",{path:e.toString(),value:n,priority:i});const r=Zi(t),o=de(n,i),a=Cr(t.serverSyncTree_,e),c=tl(o,a,r),l=Mr(t),u=Yc(t.serverSyncTree_,e,c,l,!0);Ji(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,f)=>{const p=h==="ok";p||Ee("set at "+e+" failed: "+h);const w=pt(t.serverSyncTree_,l,!p);Le(t.eventQueue_,e,w),Gs(t,s,h,f)});const d=Fr(t,e);an(t,d),Le(t.eventQueue_,d,[])}function Eg(t,e,n,i){ni(t,"update",{path:e.toString(),value:n});let s=!0;const r=Zi(t),o={};if(ve(n,(a,c)=>{s=!1,o[a]=el(se(e,a),de(c),t.serverSyncTree_,r)}),s)ye("update() called with empty data.  Don't do anything."),Gs(t,i,"ok",void 0);else{const a=Mr(t),c=Vp(t.serverSyncTree_,e,o,a);Ji(t.eventQueue_,c),t.server_.merge(e.toString(),n,(l,u)=>{const d=l==="ok";d||Ee("update at "+e+" failed: "+l);const h=pt(t.serverSyncTree_,a,!d),f=h.length>0?an(t,e):e;Le(t.eventQueue_,f,h),Gs(t,i,l,u)}),ve(n,l=>{const u=Fr(t,se(e,l));an(t,u)}),Le(t.eventQueue_,e,[])}}function Sg(t){ni(t,"onDisconnectEvents");const e=Zi(t),n=Ci();Us(t.onDisconnect_,G(),(s,r)=>{const o=el(s,r,t.serverSyncTree_,e);Dc(n,s,o)});let i=[];Us(n,G(),(s,r)=>{i=i.concat(ei(t.serverSyncTree_,s,r));const o=Fr(t,s);an(t,o)}),t.onDisconnect_=Ci(),Le(t.eventQueue_,G(),i)}function Tg(t,e,n){let i;F(e._path)===".info"?i=Hs(t.infoSyncTree_,e,n):i=Hs(t.serverSyncTree_,e,n),cl(t.eventQueue_,e._path,i)}function Go(t,e,n){let i;F(e._path)===".info"?i=Ni(t.infoSyncTree_,e,n):i=Ni(t.serverSyncTree_,e,n),cl(t.eventQueue_,e._path,i)}function kg(t){t.persistentConnection_&&t.persistentConnection_.interrupt(_g)}function ni(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ye(n,...e)}function Gs(t,e,n,i){e&&dn(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function dl(t,e,n){return Cr(t.serverSyncTree_,e,n)||R.EMPTY_NODE}function Lr(t,e=t.transactionQueueTree_){if(e||es(t,e),fn(e)){const n=fl(t,e);m(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&Rg(t,ti(e),n)}else il(e)&&Qi(e,n=>{Lr(t,n)})}function Rg(t,e,n){const i=n.map(l=>l.currentWriteId),s=dl(t,e,i);let r=s;const o=s.hash();for(let l=0;l<n.length;l++){const u=n[l];m(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Ce(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{ni(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(pt(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();es(t,Nr(t.transactionQueueTree_,e)),Lr(t,t.transactionQueueTree_),Le(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)dn(d[h])}else{if(l==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ee("transaction at "+c.toString()+" failed: "+l);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=l}an(t,e)}},o)}function an(t,e){const n=hl(t,e),i=ti(n),s=fl(t,n);return Ag(t,s,i),i}function Ag(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Ce(n,c.path);let u=!1,d;if(m(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,d=c.abortReason,s=s.concat(pt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=yg)u=!0,d="maxretry",s=s.concat(pt(t.serverSyncTree_,c.currentWriteId,!0));else{const h=dl(t,c.path,o);c.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){Xi("transaction failed: Data returned ",f,c.path);let p=de(f);typeof f=="object"&&f!=null&&Ke(f,".priority")||(p=p.updatePriority(h.getPriority()));const S=c.currentWriteId,q=Zi(t),C=tl(p,h,q);c.currentOutputSnapshotRaw=p,c.currentOutputSnapshotResolved=C,c.currentWriteId=Mr(t),o.splice(o.indexOf(S),1),s=s.concat(Yc(t.serverSyncTree_,c.path,C,c.currentWriteId,c.applyLocally)),s=s.concat(pt(t.serverSyncTree_,S,!0))}else u=!0,d="nodata",s=s.concat(pt(t.serverSyncTree_,c.currentWriteId,!0))}Le(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}es(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)dn(i[a]);Lr(t,t.transactionQueueTree_)}function hl(t,e){let n,i=t.transactionQueueTree_;for(n=F(e);n!==null&&fn(i)===void 0;)i=Nr(i,n),e=te(e),n=F(e);return i}function fl(t,e){const n=[];return pl(t,e,n),n.sort((i,s)=>i.order-s.order),n}function pl(t,e,n){const i=fn(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Qi(e,s=>{pl(t,s,n)})}function es(t,e){const n=fn(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,nl(e,n.length>0?n:void 0)}Qi(e,i=>{es(t,i)})}function Fr(t,e){const n=ti(hl(t,e)),i=Nr(t.transactionQueueTree_,e);return rg(i,s=>{Is(t,s)}),Is(t,i),sl(i,s=>{Is(t,s)}),n}function Is(t,e){const n=fn(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(m(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(pt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?nl(e,void 0):n.length=r+1,Le(t.eventQueue_,ti(e),s);for(let o=0;o<i.length;o++)dn(i[o])}}/**
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
 */function Pg(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Ng(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ee(`Invalid query segment '${n}' in query '${t}'`)}return e}const qo=function(t,e){const n=xg(t),i=n.namespace;n.domain==="firebase.com"&&it(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&it("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||jh();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new _c(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new J(n.pathString)}},xg=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(s=Pg(t.substring(u,d)));const h=Ng(t.substring(Math.min(t.length,d)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */const Ko="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Og=function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Ko.charAt(n%64),n=Math.floor(n/64);m(n===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Ko.charAt(e[s]);return m(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class Dg{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+he(this.snapshot.exportVal())}}class Mg{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class gl{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ur{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return j(this._path)?null:ur(this._path)}get ref(){return new ot(this._repo,this._path)}get _queryIdentifier(){const e=xo(this._queryParams),n=or(e);return n==="{}"?"default":n}get _queryObject(){return xo(this._queryParams)}isEqual(e){if(e=Ie(e),!(e instanceof Ur))return!1;const n=this._repo===e._repo,i=dr(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Sf(this._path)}}class ot extends Ur{constructor(e,n){super(e,n,new gr,!1)}get parent(){const e=Tc(this._path);return e===null?null:new ot(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Vn{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new J(e),i=Gn(this.ref,e);return new Vn(this._node.getChild(n),i,re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Vn(s,Gn(this.ref,i),re)))}hasChild(e){const n=new J(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function we(t,e){return t=Ie(t),t._checkNotDeleted("ref"),e!==void 0?Gn(t._root,e):t._root}function Gn(t,e){return t=Ie(t),F(t._path)===null?fg("child","path",e):al("child","path",e),new ot(t._repo,se(t._path,e))}function qs(t,e){t=Ie(t),Or("push",t._path),ol("push",e,t._path,!0);const n=ul(t._repo),i=Og(n),s=Gn(t,i),r=Gn(t,i);let o;return o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function ui(t){return Or("remove",t._path),gt(t,null)}function gt(t,e){t=Ie(t),Or("set",t._path),ol("set",e,t._path,!1);const n=new Qn;return Cg(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ml(t,e){hg("update",e,t._path);const n=new Qn;return Eg(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function _l(t){t=Ie(t);const e=new gl(()=>{}),n=new ts(e);return Ig(t._repo,t,n).then(i=>new Vn(i,new ot(t._repo,t._path),t._queryParams.getIndex()))}class ts{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new Dg("value",this,new Vn(e.snapshotNode,new ot(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Mg(this,e,n):null}matches(e){return e instanceof ts?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Lg(t,e,n,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const c=n,l=(u,d)=>{Go(t._repo,t,a),c(u,d)};l.userCallback=n.userCallback,l.context=n.context,n=l}const o=new gl(n,r||void 0),a=new ts(o);return Tg(t._repo,t,a),()=>Go(t._repo,t,a)}function wn(t,e,n,i){return Lg(t,"value",e,n,i)}Fp(ot);Bp(ot);/**
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
 */const Fg="FIREBASE_DATABASE_EMULATOR_HOST",Ks={};let Ug=!1;function Wg(t,e,n,i){t.repoInfo_=new _c(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function zg(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||it("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ye("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=qo(r,s),a=o.repoInfo,c;typeof process<"u"&&po&&(c=po[Fg]),c?(r=`http://${c}?ns=${a.namespace}`,o=qo(r,s),a=o.repoInfo):o.repoInfo.secure;const l=new Jh(t.name,t.options,e);pg("Invalid Firebase Database URL",o),j(o.path)||it("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Bg(a,t,l,new Xh(t.name,n));return new $g(u,t)}function jg(t,e){const n=Ks[e];(!n||n[t.key]!==t)&&it(`Database ${e}(${t.repoInfo_}) has already been deleted.`),kg(t),delete n[t.key]}function Bg(t,e,n,i){let s=Ks[e.name];s||(s={},Ks[e.name]=s);let r=s[t.toURLString()];return r&&it("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new vg(t,Ug,n,i),s[t.toURLString()]=r,r}class $g{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(wg(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ot(this._repo,G())),this._rootInternal}_delete(){return this._rootInternal!==null&&(jg(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&it("Cannot call "+e+" on a deleted database.")}}function Hg(t=Hi(),e){const n=zt(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=cd("database");i&&Vg(n,...i)}return n}function Vg(t,e,n,i={}){t=Ie(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&it("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&it('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new li(li.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:ld(i.mockUserToken,t.app.options.projectId);r=new li(o)}Wg(s,e,n,r)}/**
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
 */function Gg(t){Mh(un),Ge(new Be("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return zg(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Me(go,mo,t),Me(go,mo,"esm2017")}tt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};tt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Gg();var qg="firebase",Kg="10.14.1";/**
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
 */Me(qg,Kg,"app");const yl="@firebase/installations",Wr="0.6.9";/**
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
 */const vl=1e4,wl=`w:${Wr}`,bl="FIS_v2",Yg="https://firebaseinstallations.googleapis.com/v1",Qg=60*60*1e3,Xg="installations",Jg="Installations";/**
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
 */const Zg={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Mt=new Wt(Xg,Jg,Zg);function Il(t){return t instanceof qe&&t.code.includes("request-failed")}/**
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
 */function Cl({projectId:t}){return`${Yg}/projects/${t}/installations`}function El(t){return{token:t.token,requestStatus:2,expiresIn:tm(t.expiresIn),creationTime:Date.now()}}async function Sl(t,e){const i=(await e.json()).error;return Mt.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Tl({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function em(t,{refreshToken:e}){const n=Tl(t);return n.append("Authorization",nm(e)),n}async function kl(t){const e=await t();return e.status>=500&&e.status<600?t():e}function tm(t){return Number(t.replace("s","000"))}function nm(t){return`${bl} ${t}`}/**
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
 */async function im({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=Cl(t),s=Tl(t),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:bl,appId:t.appId,sdkVersion:wl},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await kl(()=>fetch(i,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:El(l.authToken)}}else throw await Sl("Create Installation",c)}/**
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
 */function Rl(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function sm(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const rm=/^[cdef][\w-]{21}$/,Ys="";function om(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=am(t);return rm.test(n)?n:Ys}catch{return Ys}}function am(t){return sm(t).substr(0,22)}/**
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
 */function ns(t){return`${t.appName}!${t.appId}`}/**
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
 */const Al=new Map;function Pl(t,e){const n=ns(t);Nl(n,e),cm(n,e)}function Nl(t,e){const n=Al.get(t);if(n)for(const i of n)i(e)}function cm(t,e){const n=lm();n&&n.postMessage({key:t,fid:e}),um()}let Nt=null;function lm(){return!Nt&&"BroadcastChannel"in self&&(Nt=new BroadcastChannel("[Firebase] FID Change"),Nt.onmessage=t=>{Nl(t.data.key,t.data.fid)}),Nt}function um(){Al.size===0&&Nt&&(Nt.close(),Nt=null)}/**
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
 */const dm="firebase-installations-database",hm=1,Lt="firebase-installations-store";let Cs=null;function zr(){return Cs||(Cs=Za(dm,hm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Lt)}}})),Cs}async function xi(t,e){const n=ns(t),s=(await zr()).transaction(Lt,"readwrite"),r=s.objectStore(Lt),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Pl(t,e.fid),e}async function xl(t){const e=ns(t),i=(await zr()).transaction(Lt,"readwrite");await i.objectStore(Lt).delete(e),await i.done}async function is(t,e){const n=ns(t),s=(await zr()).transaction(Lt,"readwrite"),r=s.objectStore(Lt),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Pl(t,a.fid),a}/**
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
 */async function jr(t){let e;const n=await is(t.appConfig,i=>{const s=fm(i),r=pm(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===Ys?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function fm(t){const e=t||{fid:om(),registrationStatus:0};return Ol(e)}function pm(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Mt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=gm(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:mm(t)}:{installationEntry:e}}async function gm(t,e){try{const n=await im(t,e);return xi(t.appConfig,n)}catch(n){throw Il(n)&&n.customData.serverCode===409?await xl(t.appConfig):await xi(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function mm(t){let e=await Yo(t.appConfig);for(;e.registrationStatus===1;)await Rl(100),e=await Yo(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await jr(t);return i||n}return e}function Yo(t){return is(t,e=>{if(!e)throw Mt.create("installation-not-found");return Ol(e)})}function Ol(t){return _m(t)?{fid:t.fid,registrationStatus:0}:t}function _m(t){return t.registrationStatus===1&&t.registrationTime+vl<Date.now()}/**
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
 */async function ym({appConfig:t,heartbeatServiceProvider:e},n){const i=vm(t,n),s=em(t,n),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:wl,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await kl(()=>fetch(i,a));if(c.ok){const l=await c.json();return El(l)}else throw await Sl("Generate Auth Token",c)}function vm(t,{fid:e}){return`${Cl(t)}/${e}/authTokens:generate`}/**
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
 */async function Br(t,e=!1){let n;const i=await is(t.appConfig,r=>{if(!Dl(r))throw Mt.create("not-registered");const o=r.authToken;if(!e&&Im(o))return r;if(o.requestStatus===1)return n=wm(t,e),r;{if(!navigator.onLine)throw Mt.create("app-offline");const a=Em(r);return n=bm(t,a),a}});return n?await n:i.authToken}async function wm(t,e){let n=await Qo(t.appConfig);for(;n.authToken.requestStatus===1;)await Rl(100),n=await Qo(t.appConfig);const i=n.authToken;return i.requestStatus===0?Br(t,e):i}function Qo(t){return is(t,e=>{if(!Dl(e))throw Mt.create("not-registered");const n=e.authToken;return Sm(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function bm(t,e){try{const n=await ym(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await xi(t.appConfig,i),n}catch(n){if(Il(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await xl(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await xi(t.appConfig,i)}throw n}}function Dl(t){return t!==void 0&&t.registrationStatus===2}function Im(t){return t.requestStatus===2&&!Cm(t)}function Cm(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Qg}function Em(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Sm(t){return t.requestStatus===1&&t.requestTime+vl<Date.now()}/**
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
 */async function Tm(t){const e=t,{installationEntry:n,registrationPromise:i}=await jr(e);return i?i.catch(console.error):Br(e).catch(console.error),n.fid}/**
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
 */async function km(t,e=!1){const n=t;return await Rm(n),(await Br(n,e)).token}async function Rm(t){const{registrationPromise:e}=await jr(t);e&&await e}/**
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
 */function Am(t){if(!t||!t.options)throw Es("App Configuration");if(!t.name)throw Es("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Es(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Es(t){return Mt.create("missing-app-config-values",{valueName:t})}/**
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
 */const Ml="installations",Pm="installations-internal",Nm=t=>{const e=t.getProvider("app").getImmediate(),n=Am(e),i=zt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},xm=t=>{const e=t.getProvider("app").getImmediate(),n=zt(e,Ml).getImmediate();return{getId:()=>Tm(n),getToken:s=>km(n,s)}};function Om(){Ge(new Be(Ml,Nm,"PUBLIC")),Ge(new Be(Pm,xm,"PRIVATE"))}Om();Me(yl,Wr);Me(yl,Wr,"esm2017");/**
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
 */const Oi="analytics",Dm="firebase_id",Mm="origin",Lm=60*1e3,Fm="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$r="https://www.googletagmanager.com/gtag/js";/**
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
 */const ke=new $i("@firebase/analytics");/**
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
 */const Um={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Pe=new Wt("analytics","Analytics",Um);/**
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
 */function Wm(t){if(!t.startsWith($r)){const e=Pe.create("invalid-gtag-resource",{gtagURL:t});return ke.warn(e.message),""}return t}function Ll(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function zm(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function jm(t,e){const n=zm("firebase-js-sdk-policy",{createScriptURL:Wm}),i=document.createElement("script"),s=`${$r}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function Bm(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function $m(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const c=(await Ll(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){ke.error(a)}t("config",s,r)}async function Hm(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Ll(n);for(const c of o){const l=a.find(d=>d.measurementId===c),u=l&&e[l.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){ke.error(r)}}function Vm(t,e,n,i){async function s(r,...o){try{if(r==="event"){const[a,c]=o;await Hm(t,e,n,a,c)}else if(r==="config"){const[a,c]=o;await $m(t,e,n,i,a,c)}else if(r==="consent"){const[a,c]=o;t("consent",a,c)}else if(r==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){ke.error(a)}}return s}function Gm(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=Vm(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function qm(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes($r)&&n.src.includes(t))return n;return null}/**
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
 */const Km=30,Ym=1e3;class Qm{constructor(e={},n=Ym){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Fl=new Qm;function Xm(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Jm(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:Xm(i)},r=Fm.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Pe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Zm(t,e=Fl,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw Pe.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw Pe.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new n_;return setTimeout(async()=>{a.abort()},Lm),Ul({appId:i,apiKey:s,measurementId:r},o,a,e)}async function Ul(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=Fl){var r;const{appId:o,measurementId:a}=t;try{await e_(i,e)}catch(c){if(a)return ke.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Jm(t);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!t_(l)){if(s.deleteThrottleMetadata(o),a)return ke.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((r=l==null?void 0:l.customData)===null||r===void 0?void 0:r.httpStatus)===503?so(n,s.intervalMillis,Km):so(n,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,d),ke.debug(`Calling attemptFetch again in ${u} millis`),Ul(t,d,i,s)}}function e_(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(Pe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function t_(t){if(!(t instanceof qe)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class n_{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function i_(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}/**
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
 */async function s_(){if(Ka())try{await Ya()}catch(t){return ke.warn(Pe.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ke.warn(Pe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function r_(t,e,n,i,s,r,o){var a;const c=Zm(t);c.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&ke.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>ke.error(f)),e.push(c);const l=s_().then(f=>{if(f)return i.getId()}),[u,d]=await Promise.all([c,l]);qm(r)||jm(r,u.measurementId),s("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[Mm]="firebase",h.update=!0,d!=null&&(h[Dm]=d),s("config",u.measurementId,h),u.measurementId}/**
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
 */class o_{constructor(e){this.app=e}_delete(){return delete xn[this.app.options.appId],Promise.resolve()}}let xn={},Xo=[];const Jo={};let Ss="dataLayer",a_="gtag",Zo,Wl,ea=!1;function c_(){const t=[];if(Ga()&&t.push("This is a browser extension environment."),fd()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=Pe.create("invalid-analytics-context",{errorInfo:e});ke.warn(n.message)}}function l_(t,e,n){c_();const i=t.options.appId;if(!i)throw Pe.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ke.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Pe.create("no-api-key");if(xn[i]!=null)throw Pe.create("already-exists",{id:i});if(!ea){Bm(Ss);const{wrappedGtag:r,gtagCore:o}=Gm(xn,Xo,Jo,Ss,a_);Wl=r,Zo=o,ea=!0}return xn[i]=r_(t,Xo,Jo,e,Zo,Ss,n),new o_(t)}function u_(t=Hi()){t=Ie(t);const e=zt(t,Oi);return e.isInitialized()?e.getImmediate():d_(t)}function d_(t,e={}){const n=zt(t,Oi);if(n.isInitialized()){const s=n.getImmediate();if(Mn(e,n.getOptions()))return s;throw Pe.create("already-initialized")}return n.initialize({options:e})}function h_(t,e,n,i){t=Ie(t),i_(Wl,xn[t.app.options.appId],e,n,i).catch(s=>ke.error(s))}const ta="@firebase/analytics",na="0.10.8";function f_(){Ge(new Be(Oi,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return l_(i,s,n)},"PUBLIC")),Ge(new Be("analytics-internal",t,"PRIVATE")),Me(ta,na),Me(ta,na,"esm2017");function t(e){try{const n=e.getProvider(Oi).getImmediate();return{logEvent:(i,s,r)=>h_(n,i,s,r)}}catch(n){throw Pe.create("interop-component-reg-failed",{reason:n})}}}f_();function Hr(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function zl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const p_=zl,jl=new Wt("auth","Firebase",zl());/**
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
 */const Di=new $i("@firebase/auth");function g_(t,...e){Di.logLevel<=X.WARN&&Di.warn(`Auth (${un}): ${t}`,...e)}function di(t,...e){Di.logLevel<=X.ERROR&&Di.error(`Auth (${un}): ${t}`,...e)}/**
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
 */function st(t,...e){throw Vr(t,...e)}function He(t,...e){return Vr(t,...e)}function Bl(t,e,n){const i=Object.assign(Object.assign({},p_()),{[e]:n});return new Wt("auth","Firebase",i).create(e,{appName:t.name})}function bt(t){return Bl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vr(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return jl.create(t,...e)}function P(t,e,...n){if(!t)throw Vr(e,...n)}function Je(t){const e="INTERNAL ASSERTION FAILED: "+t;throw di(e),new Error(e)}function rt(t,e){t||Je(e)}/**
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
 */function Qs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function m_(){return ia()==="http:"||ia()==="https:"}function ia(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function __(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(m_()||Ga()||"connection"in navigator)?navigator.onLine:!0}function y_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ii{constructor(e,n){this.shortDelay=e,this.longDelay=n,rt(n>e,"Short delay should be less than long delay!"),this.isMobile=ir()||qa()}get(){return __()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gr(t,e){rt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class $l{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const v_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const w_=new ii(3e4,6e4);function ss(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function pn(t,e,n,i,s={}){return Hl(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=ln(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},r);return ud()||(l.referrerPolicy="no-referrer"),$l.fetch()(Gl(t,t.config.apiHost,n,a),l)})}async function Hl(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},v_),e);try{const s=new b_(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ci(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ci(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ci(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ci(t,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Bl(t,u,l);st(t,u)}}catch(s){if(s instanceof qe)throw s;st(t,"network-request-failed",{message:String(s)})}}async function Vl(t,e,n,i,s={}){const r=await pn(t,e,n,i,s);return"mfaPendingCredential"in r&&st(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Gl(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Gr(t.config,s):`${t.config.apiScheme}://${s}`}class b_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(He(this.auth,"network-request-failed")),w_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ci(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=He(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function I_(t,e){return pn(t,"POST","/v1/accounts:delete",e)}async function ql(t,e){return pn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function On(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function C_(t,e=!1){const n=Ie(t),i=await n.getIdToken(e),s=qr(i);P(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:On(Ts(s.auth_time)),issuedAtTime:On(Ts(s.iat)),expirationTime:On(Ts(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ts(t){return Number(t)*1e3}function qr(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return di("JWT malformed, contained fewer than 3 sections"),null;try{const s=_i(n);return s?JSON.parse(s):(di("Failed to decode base64 JWT payload"),null)}catch(s){return di("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function sa(t){const e=qr(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qn(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof qe&&E_(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function E_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class S_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xs{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=On(this.lastLoginAt),this.creationTime=On(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mi(t){var e;const n=t.auth,i=await t.getIdToken(),s=await qn(t,ql(n,{idToken:i}));P(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Kl(r.providerUserInfo):[],a=k_(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Xs(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function T_(t){const e=Ie(t);await Mi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function k_(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Kl(t){return t.map(e=>{var{providerId:n}=e,i=Hr(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function R_(t,e){const n=await Hl(t,{},async()=>{const i=ln({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=Gl(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$l.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function A_(t,e){return pn(t,"POST","/v2/accounts:revokeToken",ss(t,e))}/**
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
 */class Xt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sa(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){P(e.length!==0,"internal-error");const n=sa(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(P(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await R_(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Xt;return i&&(P(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(P(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(P(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xt,this.toJSON())}_performRefresh(){return Je("not implemented")}}/**
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
 */function lt(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ze{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=Hr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new S_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Xs(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await qn(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return C_(this,e)}reload(){return T_(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ze(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Mi(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qe(this.auth.app))return Promise.reject(bt(this.auth));const e=await this.getIdToken();return await qn(this,I_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,c,l,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,q=(l=n.createdAt)!==null&&l!==void 0?l:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:K,isAnonymous:$,providerData:ie,stsTokenManager:y}=n;P(N&&y,e,"internal-error");const _e=Xt.fromJSON(this.name,y);P(typeof N=="string",e,"internal-error"),lt(d,e.name),lt(h,e.name),P(typeof K=="boolean",e,"internal-error"),P(typeof $=="boolean",e,"internal-error"),lt(f,e.name),lt(p,e.name),lt(w,e.name),lt(S,e.name),lt(q,e.name),lt(C,e.name);const ce=new Ze({uid:N,auth:e,email:h,emailVerified:K,displayName:d,isAnonymous:$,photoURL:p,phoneNumber:f,tenantId:w,stsTokenManager:_e,createdAt:q,lastLoginAt:C});return ie&&Array.isArray(ie)&&(ce.providerData=ie.map(ae=>Object.assign({},ae))),S&&(ce._redirectEventId=S),ce}static async _fromIdTokenResponse(e,n,i=!1){const s=new Xt;s.updateFromServerResponse(n);const r=new Ze({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Mi(r),r}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];P(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Kl(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new Xt;a.updateFromIdToken(i);const c=new Ze({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Xs(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
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
 */const ra=new Map;function et(t){rt(t instanceof Function,"Expected a class definition");let e=ra.get(t);return e?(rt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ra.set(t,e),e)}/**
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
 */class Yl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yl.type="NONE";const oa=Yl;/**
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
 */function hi(t,e,n){return`firebase:${t}:${e}:${n}`}class Jt{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=hi(this.userKey,s.apiKey,r),this.fullPersistenceKey=hi("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ze._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Jt(et(oa),e,i);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||et(oa);const o=hi(i,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=Ze._fromJSON(e,u);l!==r&&(a=d),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Jt(r,e,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Jt(r,e,i))}}/**
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
 */function aa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ql(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tu(e))return"Blackberry";if(nu(e))return"Webos";if(Xl(e))return"Safari";if((e.includes("chrome/")||Jl(e))&&!e.includes("edge/"))return"Chrome";if(eu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Ql(t=Se()){return/firefox\//i.test(t)}function Xl(t=Se()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jl(t=Se()){return/crios\//i.test(t)}function Zl(t=Se()){return/iemobile/i.test(t)}function eu(t=Se()){return/android/i.test(t)}function tu(t=Se()){return/blackberry/i.test(t)}function nu(t=Se()){return/webos/i.test(t)}function Kr(t=Se()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function P_(t=Se()){var e;return Kr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function N_(){return dd()&&document.documentMode===10}function iu(t=Se()){return Kr(t)||eu(t)||nu(t)||tu(t)||/windows phone/i.test(t)||Zl(t)}/**
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
 */function su(t,e=[]){let n;switch(t){case"Browser":n=aa(Se());break;case"Worker":n=`${aa(Se())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${un}/${i}`}/**
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
 */class x_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function O_(t,e={}){return pn(t,"GET","/v2/passwordPolicy",ss(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const D_=6;class M_{constructor(e){var n,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:D_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class L_{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ca(this),this.idTokenSubscription=new ca(this),this.beforeStateQueue=new x_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=et(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Jt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ql(this,{idToken:e}),i=await Ze._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Qe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Mi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=y_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qe(this.app))return Promise.reject(bt(this));const n=e?Ie(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qe(this.app)?Promise.reject(bt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qe(this.app)?Promise.reject(bt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(et(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await O_(this),n=new M_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wt("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await A_(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&et(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await Jt.create(this,[et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,i,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=su(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&g_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rs(t){return Ie(t)}class ca{constructor(e){this.auth=e,this.observer=null,this.addObserver=wd(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Yr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function F_(t){Yr=t}function U_(t){return Yr.loadJS(t)}function W_(){return Yr.gapiScript}function z_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function j_(t,e){const n=zt(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Mn(r,e??{}))return s;st(s,"already-initialized")}return n.initialize({options:e})}function B_(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(et);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function $_(t,e,n){const i=rs(t);P(i._canInitEmulator,i,"emulator-config-failed"),P(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=ru(e),{host:o,port:a}=H_(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),V_()}function ru(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function H_(t){const e=ru(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:la(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:la(o)}}}function la(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function V_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ou{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Je("not implemented")}_getIdTokenResponse(e){return Je("not implemented")}_linkToIdToken(e,n){return Je("not implemented")}_getReauthenticationResolver(e){return Je("not implemented")}}/**
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
 */async function Zt(t,e){return Vl(t,"POST","/v1/accounts:signInWithIdp",ss(t,e))}/**
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
 */const G_="http://localhost";class Ft extends ou{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ft(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):st("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=Hr(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Ft(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zt(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Zt(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zt(e,n)}buildRequest(){const e={requestUri:G_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ln(n)}return e}}/**
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
 */class au{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class si extends au{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ut extends si{constructor(){super("facebook.com")}static credential(e){return Ft._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ut.credential(e.oauthAccessToken)}catch{return null}}}ut.FACEBOOK_SIGN_IN_METHOD="facebook.com";ut.PROVIDER_ID="facebook.com";/**
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
 */class dt extends si{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ft._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return dt.credential(n,i)}catch{return null}}}dt.GOOGLE_SIGN_IN_METHOD="google.com";dt.PROVIDER_ID="google.com";/**
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
 */class ht extends si{constructor(){super("github.com")}static credential(e){return Ft._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.GITHUB_SIGN_IN_METHOD="github.com";ht.PROVIDER_ID="github.com";/**
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
 */class ft extends si{constructor(){super("twitter.com")}static credential(e,n){return Ft._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ft.credential(n,i)}catch{return null}}}ft.TWITTER_SIGN_IN_METHOD="twitter.com";ft.PROVIDER_ID="twitter.com";/**
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
 */async function q_(t,e){return Vl(t,"POST","/v1/accounts:signUp",ss(t,e))}/**
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
 */class St{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await Ze._fromIdTokenResponse(e,i,s),o=ua(i);return new St({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=ua(i);return new St({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function ua(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function K_(t){var e;if(Qe(t.app))return Promise.reject(bt(t));const n=rs(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new St({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await q_(n,{returnSecureToken:!0}),s=await St._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(s.user),s}/**
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
 */class Li extends qe{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Li.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Li(e,n,i,s)}}function cu(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Li._fromErrorAndOperation(t,r,e,i):r})}async function Y_(t,e,n=!1){const i=await qn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return St._forOperation(t,"link",i)}/**
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
 */async function Q_(t,e,n=!1){const{auth:i}=t;if(Qe(i.app))return Promise.reject(bt(i));const s="reauthenticate";try{const r=await qn(t,cu(i,s,e,t),n);P(r.idToken,i,"internal-error");const o=qr(r.idToken);P(o,i,"internal-error");const{sub:a}=o;return P(t.uid===a,i,"user-mismatch"),St._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&st(i,"user-mismatch"),r}}/**
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
 */async function X_(t,e,n=!1){if(Qe(t.app))return Promise.reject(bt(t));const i="signIn",s=await cu(t,i,e),r=await St._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function J_(t,e,n,i){return Ie(t).onIdTokenChanged(e,n,i)}function Z_(t,e,n){return Ie(t).beforeAuthStateChanged(e,n)}async function da(t){return Ie(t).delete()}const Fi="__sak";/**
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
 */class lu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fi,"1"),this.storage.removeItem(Fi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ey=1e3,ty=10;class uu extends lu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=iu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);N_()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ty):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},ey)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}uu.type="LOCAL";const ny=uu;/**
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
 */class du extends lu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}du.type="SESSION";const hu=du;/**
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
 */function iy(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class os{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new os(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await iy(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}os.receivers=[];/**
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
 */function Qr(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class sy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Qr("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ve(){return window}function ry(t){Ve().location.href=t}/**
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
 */function fu(){return typeof Ve().WorkerGlobalScope<"u"&&typeof Ve().importScripts=="function"}async function oy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ay(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function cy(){return fu()?self:null}/**
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
 */const pu="firebaseLocalStorageDb",ly=1,Ui="firebaseLocalStorage",gu="fbase_key";class ri{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function as(t,e){return t.transaction([Ui],e?"readwrite":"readonly").objectStore(Ui)}function uy(){const t=indexedDB.deleteDatabase(pu);return new ri(t).toPromise()}function Js(){const t=indexedDB.open(pu,ly);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Ui,{keyPath:gu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Ui)?e(i):(i.close(),await uy(),e(await Js()))})})}async function ha(t,e,n){const i=as(t,!0).put({[gu]:e,value:n});return new ri(i).toPromise()}async function dy(t,e){const n=as(t,!1).get(e),i=await new ri(n).toPromise();return i===void 0?null:i.value}function fa(t,e){const n=as(t,!0).delete(e);return new ri(n).toPromise()}const hy=800,fy=3;class mu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Js(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>fy)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=os._getInstance(cy()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await oy(),!this.activeServiceWorker)return;this.sender=new sy(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ay()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Js();return await ha(e,Fi,"1"),await fa(e,Fi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>ha(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>dy(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=as(s,!1).getAll();return new ri(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mu.type="LOCAL";const py=mu;new ii(3e4,6e4);/**
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
 */function gy(t,e){return e?et(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Xr extends ou{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function my(t){return X_(t.auth,new Xr(t),t.bypassAuthState)}function _y(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),Q_(n,new Xr(t),t.bypassAuthState)}async function yy(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),Y_(n,new Xr(t),t.bypassAuthState)}/**
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
 */class _u{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return my;case"linkViaPopup":case"linkViaRedirect":return yy;case"reauthViaPopup":case"reauthViaRedirect":return _y;default:st(this.auth,"internal-error")}}resolve(e){rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vy=new ii(2e3,1e4);class Kt extends _u{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Kt.currentPopupAction&&Kt.currentPopupAction.cancel(),Kt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){rt(this.filter.length===1,"Popup operations only handle one event");const e=Qr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(He(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(He(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(He(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vy.get())};e()}}Kt.currentPopupAction=null;/**
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
 */const wy="pendingRedirect",fi=new Map;class by extends _u{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=fi.get(this.auth._key());if(!e){try{const i=await Iy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}fi.set(this.auth._key(),e)}return this.bypassAuthState||fi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Iy(t,e){const n=Sy(e),i=Ey(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function Cy(t,e){fi.set(t._key(),e)}function Ey(t){return et(t._redirectPersistence)}function Sy(t){return hi(wy,t.config.apiKey,t.name)}async function Ty(t,e,n=!1){if(Qe(t.app))return Promise.reject(bt(t));const i=rs(t),s=gy(i,e),o=await new by(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const ky=10*60*1e3;class Ry{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ay(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!yu(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(He(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ky&&this.cachedEventUids.clear(),this.cachedEventUids.has(pa(e))}saveEventToCache(e){this.cachedEventUids.add(pa(e)),this.lastProcessedEventTime=Date.now()}}function pa(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ay(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yu(t);default:return!1}}/**
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
 */async function Py(t,e={}){return pn(t,"GET","/v1/projects",e)}/**
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
 */const Ny=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xy=/^https?/;async function Oy(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Py(t);for(const n of e)try{if(Dy(n))return}catch{}st(t,"unauthorized-domain")}function Dy(t){const e=Qs(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!xy.test(n))return!1;if(Ny.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const My=new ii(3e4,6e4);function ga(){const t=Ve().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ly(t){return new Promise((e,n)=>{var i,s,r;function o(){ga(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ga(),n(He(t,"network-request-failed"))},timeout:My.get()})}if(!((s=(i=Ve().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Ve().gapi)===null||r===void 0)&&r.load)o();else{const a=z_("iframefcb");return Ve()[a]=()=>{gapi.load?o():n(He(t,"network-request-failed"))},U_(`${W_()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw pi=null,e})}let pi=null;function Fy(t){return pi=pi||Ly(t),pi}/**
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
 */const Uy=new ii(5e3,15e3),Wy="__/auth/iframe",zy="emulator/auth/iframe",jy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},By=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $y(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gr(e,zy):`https://${t.config.authDomain}/${Wy}`,i={apiKey:e.apiKey,appName:t.name,v:un},s=By.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${ln(i).slice(1)}`}async function Hy(t){const e=await Fy(t),n=Ve().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:$y(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jy,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=He(t,"network-request-failed"),a=Ve().setTimeout(()=>{r(o)},Uy.get());function c(){Ve().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const Vy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gy=500,qy=600,Ky="_blank",Yy="http://localhost";class ma{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Qy(t,e,n,i=Gy,s=qy){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Vy),{width:i.toString(),height:s.toString(),top:r,left:o}),l=Se().toLowerCase();n&&(a=Jl(l)?Ky:n),Ql(l)&&(e=e||Yy,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[f,p])=>`${h}${f}=${p},`,"");if(P_(l)&&a!=="_self")return Xy(e||"",a),new ma(null);const d=window.open(e||"",a,u);P(d,t,"popup-blocked");try{d.focus()}catch{}return new ma(d)}function Xy(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const Jy="__/auth/handler",Zy="emulator/auth/handler",ev=encodeURIComponent("fac");async function _a(t,e,n,i,s,r){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:un,eventId:s};if(e instanceof au){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",As(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof si){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${ev}=${encodeURIComponent(c)}`:"";return`${tv(t)}?${ln(a).slice(1)}${l}`}function tv({config:t}){return t.emulator?Gr(t,Zy):`https://${t.authDomain}/${Jy}`}/**
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
 */const ks="webStorageSupport";class nv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hu,this._completeRedirectFn=Ty,this._overrideRedirectResult=Cy}async _openPopup(e,n,i,s){var r;rt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await _a(e,n,i,Qs(),s);return Qy(e,o,Qr())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await _a(e,n,i,Qs(),s);return ry(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(rt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await Hy(e),i=new Ry(e);return n.register("authEvent",s=>(P(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ks,{type:ks},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[ks];o!==void 0&&n(!!o),st(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Oy(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return iu()||Xl()||Kr()}}const iv=nv;var ya="@firebase/auth",va="1.7.9";/**
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
 */class sv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rv(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ov(t){Ge(new Be("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;P(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:su(t)},l=new L_(i,s,r,c);return B_(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Ge(new Be("auth-internal",e=>{const n=rs(e.getProvider("auth").getImmediate());return(i=>new sv(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Me(ya,va,rv(t)),Me(ya,va,"esm2017")}/**
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
 */const av=5*60,cv=Va("authIdTokenMaxAge")||av;let wa=null;const lv=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>cv)return;const s=n==null?void 0:n.token;wa!==s&&(wa=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function uv(t=Hi()){const e=zt(t,"auth");if(e.isInitialized())return e.getImmediate();const n=j_(t,{popupRedirectResolver:iv,persistence:[py,ny,hu]}),i=Va("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=lv(r.toString());Z_(n,o,()=>o(n.currentUser)),J_(n,a=>o(a))}}const s=$a("auth");return s&&$_(n,`http://${s}`),n}function dv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}F_({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=He("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",dv().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ov("Browser");const hv={apiKey:"AIzaSyA2Ml7QMBlaUyKZyFu7j83I5Y2eM1COgkc",authDomain:"board7-4373c.firebaseapp.com",databaseURL:"https://board7-4373c-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"board7-4373c",storageBucket:"board7-4373c.firebasestorage.app",messagingSenderId:"298011654216",appId:"1:298011654216:web:084fb0f220aa7be5b4807d"},fv=()=>(console.log("🚀 Firebase: 배포환경 (board7-4373c) 사용"),hv),mt=fv(),Jr=Sh().length===0?ec(mt):Hi();let pv=null;if(mt.measurementId&&typeof window<"u")try{pv=u_(Jr),console.log("📊 Firebase Analytics 초기화 완료")}catch(t){console.warn("⚠️ Firebase Analytics 초기화 실패:",t)}const be=Hg(Jr),Ht=uv(Jr),gi={mode:"production",projectId:mt.projectId,databaseURL:mt.databaseURL};console.log("🔥 Firebase 초기화 완료:",{환경:gi.mode,프로젝트:gi.projectId,데이터베이스:gi.databaseURL});let Vt=null;const ew=async()=>{try{if(Ht.currentUser&&Ht.currentUser.isAnonymous){Vt=Ht.currentUser;return}Vt=(await K_(Ht)).user,await new Promise(i=>setTimeout(i,100));const e=async()=>{if(Vt)try{await da(Vt)}catch(i){console.warn("⚠️ Firebase Auth: 익명 계정 삭제 실패:",i)}};window.addEventListener("beforeunload",e);const n=async()=>{if(Vt)try{await da(Vt)}catch(i){console.warn("⚠️ Firebase Auth: 페이지 숨김 시 계정 삭제 실패:",i)}};window.addEventListener("pagehide",n)}catch(t){console.error("❌ Firebase Auth: 익명 로그인 실패!",{error:t,code:t==null?void 0:t.code,message:t==null?void 0:t.message,customData:t==null?void 0:t.customData}),(t==null?void 0:t.code)==="auth/operation-not-allowed"?(console.error("🔧 Firebase Console에서 Anonymous Authentication을 활성화해야 합니다!"),console.error("📍 해결 방법: https://console.firebase.google.com/ > 프로젝트 선택 > Authentication > Sign-in method > Anonymous 활성화"),console.error("🎯 현재 프로젝트:",gi.projectId)):(t==null?void 0:t.code)==="auth/api-key-not-valid"?console.error("🔑 Firebase API 키가 올바르지 않습니다:",mt.apiKey):(t==null?void 0:t.code)==="auth/network-request-failed"?console.error("🌐 네트워크 연결 문제가 발생했습니다."):(console.error("🚨 예상치 못한 오류:",(t==null?void 0:t.code)||"UNKNOWN_ERROR"),console.error("🔍 전체 오류 내용:",t)),console.error("🔍 현재 Auth 상태:",{currentUser:Ht.currentUser,appName:Ht.app.name,config:{apiKey:mt.apiKey.substring(0,10)+"...",authDomain:mt.authDomain,projectId:mt.projectId}})}};function Kn(t){return typeof t=="number"&&!isNaN(t)&&isFinite(t)}function gv(t){return Kn(t.x)&&Kn(t.y)}function mv(t){return Kn(t.width)&&Kn(t.height)&&t.width>0&&t.height>0}function ba(t,e=0){return Kn(t)?t:(console.warn(`Invalid number value: ${t}, using default: ${e}`),e)}function Ia(t){const e={};for(const[n,i]of Object.entries(t))n==="x"||n==="y"?e[n]=ba(i,0):n==="width"||n==="height"?e[n]=ba(i,100):e[n]=i;return e}const _v=()=>{if(typeof window<"u"){let t=localStorage.getItem("board7_session_id");return t||(t=`user_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,localStorage.setItem("board7_session_id",t)),t}return`server_${Date.now()}_${Math.random().toString(36).substr(2,9)}`},Yn=()=>_v(),yv=async(t,e,n=Yn())=>{try{const i=we(be,`textObjects/${t}`),r=(await _l(i)).val();if(!r){const l={...e,id:t,lastModified:Date.now(),modifiedBy:n};return await gt(i,l),!0}const o=Date.now(),a=r.lastModified||0;if(e.lastModified&&e.lastModified<a)return console.warn(`LWW: Update rejected for object ${t}. Server timestamp: ${a}, Client timestamp: ${e.lastModified}`),!1;const c={...e,lastModified:o,modifiedBy:n};return await ml(i,c),console.log(`LWW: Object ${t} updated successfully by ${n}`),!0}catch(i){return console.error("LWW update failed:",i),!1}},vv=async(t,e,n=Yn())=>{try{const i=we(be,`imageObjects/${t}`),r=(await _l(i)).val();if(!r){const l={...e,id:t,lastModified:Date.now(),modifiedBy:n};return await gt(i,l),!0}const o=Date.now(),a=r.lastModified||0;if(e.lastModified&&e.lastModified<a)return console.warn(`LWW: Update rejected for object ${t}. Server timestamp: ${a}, Client timestamp: ${e.lastModified}`),!1;const c={...e,lastModified:o,modifiedBy:n};return await ml(i,c),console.log(`LWW: Object ${t} updated successfully by ${n}`),!0}catch(i){return console.error("LWW update failed:",i),!1}},wv=async t=>{try{const e=qs(we(be,"drawObjects"));if(!e.key)throw new Error("Failed to generate object ID");const n={...t,id:e.key,lastModified:Date.now(),modifiedBy:Yn()};return await gt(e,n),e.key}catch(e){throw console.error("Error creating draw object:",e),e}},cs=Ut((t,e)=>{let n=[];return{textObjects:[],imageObjects:[],drawObjects:[],floorImage:null,settings:{admin:{autoToolSwitch:!0,gridVisible:!0,gridSize:16,gridSnapEnabled:!0,defaultFontSize:16,defaultBoxWidth:200,defaultBoxHeight:60,objectCreationPosition:{x:260,y:950},defaultCheckboxSettings:{checkedColor:"#22c55e",uncheckedColor:"#f3f4f6",checkedBackgroundColor:"#ffffff",uncheckedBackgroundColor:"#ffffff",checkedBackgroundOpacity:1,uncheckedBackgroundOpacity:1},excelPasteSettings:{startPosition:{x:100,y:100},cellWidth:120,cellHeight:40,fontSize:14,fontColor:"#000000",backgroundColor:"#ffffff",maxRows:50,maxCols:50}},view:{virtualKeyboardEnabled:!0,touchMode:!0}},isLoading:!1,initializeFirebaseListeners:()=>{e().cleanupFirebaseListeners(),t({isLoading:!0});let i=0;const s=5,r=()=>{i++,i>=s&&t({isLoading:!1})},o=()=>{r()},a=(C,N)=>{r()},c=we(be,"textObjects"),l=wn(c,C=>{const N=C.val(),K=N?Object.values(N):[];t({textObjects:K}),o()},C=>{a()});n.push(l);const u=we(be,"imageObjects"),d=wn(u,C=>{const N=C.val(),K=N?Object.values(N):[];t({imageObjects:K}),o()},C=>{a()});n.push(d);const h=we(be,"drawObjects"),f=wn(h,C=>{const N=C.val(),K=N?Object.values(N):[];t({drawObjects:K}),o()},C=>{a()});n.push(f);const p=we(be,"floorImage"),w=wn(p,C=>{const N=C.val();t({floorImage:N}),o()},C=>{a()});n.push(w);const S=we(be,"settings"),q=wn(S,C=>{const N=C.val();N&&t({settings:N}),o()},C=>{a()});n.push(q)},cleanupFirebaseListeners:()=>{n.forEach(i=>i()),n=[]},addTextObject:async i=>{const s=we(be,"textObjects"),r=qs(s),o=Yn(),a={...i,id:r.key,lastModified:Date.now(),modifiedBy:o};return await gt(r,a),r.key},updateTextObject:async(i,s)=>{const r=Ia(s);await yv(i,r)||console.warn(`Failed to update text object ${i} due to LWW conflict`)},deleteTextObject:async i=>{const s=we(be,`textObjects/${i}`);await ui(s)},addImageObject:async i=>{const s=we(be,"imageObjects"),r=qs(s),o=Yn(),a={...i,id:r.key,lastModified:Date.now(),modifiedBy:o};return await gt(r,a),r.key},updateImageObject:async(i,s)=>{const r=Ia(s);await vv(i,r)||console.warn(`Failed to update image object ${i} due to LWW conflict`)},deleteImageObject:async i=>{const s=we(be,`imageObjects/${i}`);await ui(s)},deleteDrawObject:async i=>{const s=we(be,`drawObjects/${i}`);await ui(s)},setFloorImage:async i=>{const s=we(be,"floorImage");await gt(s,i)},updateSettings:async(i,s)=>{const r=we(be,`settings/${i}`),o=e().settings[i];await gt(r,{...o,...s})}}});Ut(t=>({gridEnabled:!1,gridSize:10,snapEnabled:!0,setGridEnabled:e=>t({gridEnabled:e}),setGridSize:e=>t({gridSize:e}),setSnapEnabled:e=>t({snapEnabled:e})}));const bv=Ut(t=>({defaultCheckedColor:"#10b981",defaultUncheckedColor:"#f3f4f6",checkedBackgroundColor:"#dcfce7",uncheckedBackgroundColor:"#ffffff",checkedBackgroundOpacity:.8,uncheckedBackgroundOpacity:1,setDefaultCheckedColor:e=>t({defaultCheckedColor:e}),setDefaultUncheckedColor:e=>t({defaultUncheckedColor:e}),setCheckedBackgroundColor:e=>t({checkedBackgroundColor:e}),setUncheckedBackgroundColor:e=>t({uncheckedBackgroundColor:e}),setCheckedBackgroundOpacity:e=>t({checkedBackgroundOpacity:e}),setUncheckedBackgroundOpacity:e=>t({uncheckedBackgroundOpacity:e})})),At=Ut((t,e)=>({selectedCellIds:new Set,isDragSelecting:!1,dragStartPoint:null,dragEndPoint:null,selectCell:(n,i=!1)=>{t(s=>{const r=new Set(s.selectedCellIds);return i?r.has(n)?r.delete(n):r.add(n):(r.clear(),r.add(n)),{selectedCellIds:r}})},selectCellsInRange:n=>{t(i=>{const s=new Set(i.selectedCellIds);return n.forEach(r=>s.add(r)),{selectedCellIds:s}})},deselectCell:n=>{t(i=>{const s=new Set(i.selectedCellIds);return s.delete(n),{selectedCellIds:s}})},clearSelection:()=>{t({selectedCellIds:new Set})},toggleCellSelection:n=>{t(i=>{const s=new Set(i.selectedCellIds);return s.has(n)?s.delete(n):s.add(n),{selectedCellIds:s}})},startDragSelection:(n,i)=>{t({isDragSelecting:!0,dragStartPoint:{x:n,y:i},dragEndPoint:{x:n,y:i}})},updateDragSelection:(n,i)=>{t(()=>({dragEndPoint:{x:n,y:i}}))},endDragSelection:()=>{t({isDragSelecting:!1,dragStartPoint:null,dragEndPoint:null})},isSelected:n=>e().selectedCellIds.has(n),getSelectedCount:()=>e().selectedCellIds.size,getSelectedCells:()=>Array.from(e().selectedCellIds)})),Iv=({text:t,textStyle:e,fontSize:n,onChange:i,onBlur:s,onKeyDown:r})=>T.jsx("textarea",{value:t,onChange:o=>i(o.target.value),onBlur:s,onKeyDown:r,autoFocus:!0,"data-editing":"true",className:"w-full h-full bg-transparent border-none outline-none resize-none",style:{color:e.color,fontFamily:e.fontFamily,fontSize:`${n}px`,fontWeight:e.bold?"bold":"normal",fontStyle:e.italic?"italic":"normal",textAlign:e.horizontalAlign,lineHeight:"1.2",wordBreak:"break-word",cursor:"text"}}),vu=({onPointerDown:t,objectId:e})=>T.jsxs(T.Fragment,{children:[T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-nw-resize shadow-md",style:{left:-6,top:-6},onPointerDown:n=>t(n,"nw",e)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-ne-resize shadow-md",style:{right:-6,top:-6},onPointerDown:n=>t(n,"ne",e)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-sw-resize shadow-md",style:{left:-6,bottom:-6},onPointerDown:n=>t(n,"sw",e)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-se-resize shadow-md",style:{right:-6,bottom:-6},onPointerDown:n=>t(n,"se",e)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-n-resize shadow-md",style:{left:"50%",top:-6,transform:"translateX(-50%)"},onPointerDown:n=>t(n,"n",e)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-s-resize shadow-md",style:{left:"50%",bottom:-6,transform:"translateX(-50%)"},onPointerDown:n=>t(n,"s",e)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-w-resize shadow-md",style:{left:-6,top:"50%",transform:"translateY(-50%)"},onPointerDown:n=>t(n,"w",e)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-e-resize shadow-md",style:{right:-6,top:"50%",transform:"translateY(-50%)"},onPointerDown:n=>t(n,"e",e)})]}),Cv=({obj:t,isSelected:e,isHovered:n,isViewPage:i,isDragging:s,currentX:r,currentY:o,currentWidth:a,currentHeight:c,currentTool:l,editingObjectId:u,editingText:d,onTextBoxClick:h,onObjectClick:f,onPointerDown:p,onResizePointerDown:w,onMouseEnter:S,onMouseLeave:q,onEditingTextChange:C,onFinishEdit:N,onKeyDown:K,updateTextObject:$})=>{var E,H;const{defaultCheckedColor:ie,defaultUncheckedColor:y,checkedBackgroundColor:_e,uncheckedBackgroundColor:ce,checkedBackgroundOpacity:ae,uncheckedBackgroundOpacity:fe}=bv(),ne=t.cellType==="cell"&&At.getState().isSelected(t.id),Z=t.boxStyle||{backgroundColor:"transparent",backgroundOpacity:1,borderColor:"#000000",borderWidth:0,borderRadius:0},O=t.textStyle||{color:"#000000",bold:!1,italic:!1,horizontalAlign:"left",verticalAlign:"middle",fontFamily:"Arial"},W=A=>{A.stopPropagation();const z=!t.checkboxChecked;$(t.id,{checkboxChecked:z,checkboxCheckedColor:t.checkboxCheckedColor||ie,checkboxUncheckedColor:t.checkboxUncheckedColor||y})},x=A=>{A.stopPropagation()};return T.jsxs("div",{className:`absolute select-none ${e?"ring-4 ring-blue-600":n?"ring-2 ring-gray-400":""}`,style:{left:r,top:o,width:a,height:c,opacity:t.opacity,zIndex:t.zIndex||0,cursor:u===t.id?"text":i?"default":s?"grabbing":(E=t.permissions)!=null&&E.movable?"grab":"default",border:`${Z.borderWidth}px solid ${Z.borderColor}`,borderRadius:`${Z.borderRadius}px`,transition:s?"none":"all 0.1s ease",pointerEvents:l==="pen"||l==="eraser"?"none":"auto"},onClick:A=>{s?f(A,t.id):h(t,A)},onPointerDown:A=>p(A,t.id),onMouseEnter:S,onMouseLeave:q,children:[T.jsx("div",{className:"absolute inset-0",style:{backgroundColor:ne?"#9ca3af":t.hasCheckbox&&t.checkboxChecked?t.checkedBackgroundColor||_e:t.hasCheckbox&&!t.checkboxChecked?t.uncheckedBackgroundColor||ce:Z.backgroundColor,opacity:ne?.15:t.hasCheckbox&&t.checkboxChecked?t.checkedBackgroundOpacity??ae:t.hasCheckbox&&!t.checkboxChecked?t.uncheckedBackgroundOpacity??fe:Z.backgroundOpacity,borderRadius:`${Z.borderRadius}px`}}),T.jsx("div",{className:"relative z-10 h-full flex items-center",style:{justifyContent:O.horizontalAlign==="left"?"flex-start":O.horizontalAlign==="center"?"center":"flex-end",alignItems:O.verticalAlign==="top"?"flex-start":O.verticalAlign==="middle"?"center":"flex-end",padding:"8px"},children:u===t.id?T.jsx(Iv,{text:d,textStyle:O,fontSize:t.fontSize||16,onChange:C,onBlur:N,onKeyDown:K}):T.jsxs("div",{style:{color:O.color,fontFamily:O.fontFamily,fontSize:`${t.fontSize||16}px`,fontWeight:O.bold?"bold":"normal",fontStyle:O.italic?"italic":"normal",textAlign:O.horizontalAlign,lineHeight:"1.2",wordBreak:"break-word",cursor:"pointer",display:"flex",alignItems:O.verticalAlign==="top"?"flex-start":O.verticalAlign==="middle"?"center":"flex-end",width:"100%",height:"100%"},children:[t.hasCheckbox&&T.jsx("div",{className:"checkbox-area",onClick:W,onPointerDown:x,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"35px",height:"35px",backgroundColor:t.checkboxChecked?t.checkboxCheckedColor||ie:t.checkboxUncheckedColor||y,border:`2px solid ${t.checkboxChecked?t.checkboxCheckedColor||ie:"#d1d5db"}`,borderRadius:"4px",marginRight:"8px",transition:"all 0.2s ease",userSelect:"none",flexShrink:0,pointerEvents:"auto",cursor:"pointer"},children:t.checkboxChecked&&T.jsx("svg",{className:"checkbox-area",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:T.jsx("path",{className:"checkbox-area",d:"M13.5 4.5L6 12L2.5 8.5",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),T.jsx("span",{style:{flex:1},children:t.text})]})}),e&&!i&&((H=t.permissions)==null?void 0:H.resizable)&&T.jsx(vu,{onPointerDown:w,objectId:t.id})]})},Ev=({obj:t,isSelected:e,isHovered:n,isViewPage:i,isDragging:s,currentX:r,currentY:o,currentWidth:a,currentHeight:c,currentTool:l,editingObjectId:u,onObjectClick:d,onPointerDown:h,onResizePointerDown:f,onMouseEnter:p,onMouseLeave:w})=>{var S,q;return T.jsxs("div",{className:`absolute select-none ${e?"ring-4 ring-blue-600":n?"ring-2 ring-gray-400":""}`,style:{left:r,top:o,width:a,height:c,opacity:t.opacity,zIndex:t.zIndex||0,cursor:u===t.id?"text":i?"default":s?"grabbing":(S=t.permissions)!=null&&S.movable?"grab":"default",transition:s?"none":"all 0.1s ease",pointerEvents:l==="pen"||l==="eraser"?"none":"auto"},onClick:C=>d(C,t.id),onPointerDown:C=>h(C,t.id),onMouseEnter:p,onMouseLeave:w,children:[T.jsx("img",{src:t.src,alt:"",className:`w-full h-full ${t.maintainAspectRatio?"object-contain":"object-fill"}`,draggable:!1,style:{pointerEvents:"none"}}),e&&!i&&((q=t.permissions)==null?void 0:q.resizable)&&T.jsx(vu,{onPointerDown:f,objectId:t.id})]})},Ca={isDragging:!1,draggedObjectId:null,offset:{x:0,y:0},currentPosition:{x:0,y:0}},Sv=()=>{const[t,e]=v.useState(Ca),n=v.useCallback((o,a,c)=>{e({isDragging:!0,draggedObjectId:o,offset:a,currentPosition:c})},[]),i=v.useCallback(o=>{e(a=>({...a,currentPosition:o}))},[]),s=v.useCallback(()=>{e(Ca)},[]),r=v.useCallback(o=>t.isDragging&&t.draggedObjectId===o,[t.isDragging,t.draggedObjectId]);return{dragState:t,startDrag:n,updateDragPosition:i,endDrag:s,isDraggingObject:r}},Ea={isResizing:!1,resizedObjectId:null,resizeHandle:null,startPosition:{x:0,y:0},startSize:{width:0,height:0},startObjectPosition:{x:0,y:0}},Tv=()=>{const[t,e]=v.useState(Ea),n=v.useCallback((o,a,c,l,u)=>{e({isResizing:!0,resizedObjectId:o,resizeHandle:a,startPosition:c,startSize:l,startObjectPosition:u})},[]),i=v.useCallback((o,a)=>{e(c=>({...c,currentSize:o,currentPosition:a}))},[]),s=v.useCallback(()=>{e(Ea)},[]),r=v.useCallback(o=>t.isResizing&&t.resizedObjectId===o,[t.isResizing,t.resizedObjectId]);return{resizeState:t,startResize:n,updateResize:i,endResize:s,isResizingObject:r}},kv=(t,e,n=!1)=>{const[i,s]=v.useState(null),[r,o]=v.useState(""),a=v.useCallback(d=>{s(d.id),o(d.text),t(d.id,{isEditing:!0}),n?(e(d.id),setTimeout(()=>{window.dispatchEvent(new CustomEvent("activateVirtualKeyboard",{detail:{objectId:d.id}}))},100)):setTimeout(()=>{const h=document.querySelector('textarea[data-editing="true"]');if(h){const f=d.text.length;h.setSelectionRange(f,f),h.focus()}},0)},[n,t,e]),c=v.useCallback(async()=>{i&&r!==void 0&&(await t(i,{text:r,isEditing:!1}),s(null),o(""))},[i,r,t]),l=v.useCallback(()=>{s(null),o("")},[]),u=v.useCallback(d=>{o(d)},[]);return{editingObjectId:i,editingText:r,startInlineEdit:a,finishInlineEdit:c,cancelInlineEdit:l,updateEditingText:u}},Rv=()=>{const t=v.useRef(!1),e=v.useRef(0);v.useEffect(()=>{const r=navigator.userAgent.toLowerCase(),o=/iphone|ipad|ipod/.test(r),a=/safari/.test(r)&&!/chrome/.test(r);t.current=o||a},[]);const n=r=>{e.current=r},i=r=>t.current&&r-e.current<300,s=()=>{const r=navigator.userAgent.toLowerCase();return/iphone/.test(r)};return{isSafari:t.current,updatePointerEventTime:n,isGhostClick:i,isIPhone:s}},Av=(t,e)=>{var i;return{handleClipboardPaste:v.useCallback(async()=>{try{if(!navigator.clipboard||!navigator.clipboard.read){console.warn("클립보드 API가 지원되지 않습니다.");return}const s=await navigator.clipboard.read();for(const r of s){const o=r.types.filter(a=>a.startsWith("image/"));if(o.length>0){const a=o[0],c=await r.getType(a),l=new FileReader;l.onload=async u=>{var p,w;const d=(p=u.target)==null?void 0:p.result,h=((w=e==null?void 0:e.admin)==null?void 0:w.objectCreationPosition)??{x:260,y:950},f=new Image;f.onload=async()=>{try{const C=200*(f.naturalHeight/f.naturalWidth),N={x:h.x,y:h.y,width:200,height:C,src:d,permissions:{editable:!0,movable:!0,resizable:!0,deletable:!0},zIndex:Date.now(),locked:!1,visible:!0,opacity:1,maintainAspectRatio:!0,lastModified:Date.now()};await t(N),console.log("클립보드 이미지가 성공적으로 붙여넣어졌습니다.")}catch(S){console.error("이미지 객체 생성 실패:",S)}},f.onerror=()=>{console.error("클립보드 이미지 로드 실패")},f.src=d},l.onerror=()=>{console.error("클립보드 이미지 읽기 실패")},l.readAsDataURL(c);break}}}catch(s){console.log("클립보드에서 이미지를 읽을 수 없습니다:",s)}},[(i=e==null?void 0:e.admin)==null?void 0:i.objectCreationPosition,t])}},Pv=(t,e,n,i,s,r,o,a)=>{const c=v.useCallback(async d=>{if(!d)return;const h=t.find(p=>p.id===d);if(h){const p={...h,x:h.x+20,y:h.y+20,isEditing:!1};delete p.id,await s(p);return}const f=e.find(p=>p.id===d);if(f){const p={...f,x:f.x+20,y:f.y+20};delete p.id,await r(p);return}},[t,e,s,r]),l=v.useCallback(async d=>{var p,w;if(!d)return;const h=t.find(S=>S.id===d);if(h&&((p=h.permissions)!=null&&p.deletable)){await n(d),a(null);return}const f=e.find(S=>S.id===d);if(f&&((w=f.permissions)!=null&&w.deletable)){await i(d),a(null);return}},[t,e,n,i,a]),u=v.useCallback(async()=>{const{getSelectedCells:d}=At.getState(),h=d();if(h.length!==0)try{for(const f of h){const p=t.find(w=>w.id===f);p&&p.cellType==="cell"&&await o(f,{text:""})}console.log(`${h.length}개 셀의 텍스트 내용이 삭제되었습니다.`)}catch(f){console.error("셀 텍스트 일괄 삭제 실패:",f)}},[t,o]);return{handleDuplicateObject:c,handleDeleteObject:l,handleBulkClearCellText:u}},Wi=(t,e)=>Math.round(t/e)*e,Nv=(t,e,n)=>({x:Wi(t,n),y:Wi(e,n)}),xv=(t,e,n,i=50,s=30)=>({width:Math.max(Wi(t,n),i),height:Math.max(Wi(e,n),s)}),wu=t=>{const e=window.getComputedStyle(t).transform;let n=1;if(e&&e!=="none"){const i=e.match(/matrix\(([^)]+)\)/);i&&(n=i[1].split(",").map(r=>parseFloat(r.trim()))[0])}return n},Rs=(t,e,n)=>{const i=n.getBoundingClientRect(),s=wu(n);return{x:(t-i.left)/s,y:(e-i.top)/s}},Sa=(t,e,n,i)=>{if(!n)return{position:t,size:e};const s=Nv(t.x,t.y,i),r=e?xv(e.width,e.height,i):void 0;return{position:s,size:r}},Ov=(t,e,n)=>({x:t.x-e.x/n,y:t.y-e.y/n}),Dv=(t,e)=>({x:t.x-e.x,y:t.y-e.y}),Ta=(t,e,n,i)=>{const s=gv(t)?t:n||{x:0,y:0},r=e&&mv(e)?e:i;return{position:s,size:r}},Mv=t=>{const{handle:e,deltaX:n,deltaY:i,startSize:s,startPosition:r,maintainAspectRatio:o=!1,originalAspectRatio:a=1}=t;let c=s.width,l=s.height,u=r.x,d=r.y;switch(e){case"nw":c=Math.max(50,s.width-n),l=o?c/a:Math.max(30,s.height-i),u=r.x+(s.width-c),d=r.y+(s.height-l);break;case"ne":c=Math.max(50,s.width+n),l=o?c/a:Math.max(30,s.height-i),d=r.y+(s.height-l);break;case"sw":c=Math.max(50,s.width-n),l=o?c/a:Math.max(30,s.height+i),u=r.x+(s.width-c);break;case"se":c=Math.max(50,s.width+n),l=o?c/a:Math.max(30,s.height+i);break;case"n":o?(l=Math.max(30,s.height-i),c=l*a,u=r.x+(s.width-c)/2):l=Math.max(30,s.height-i),d=r.y+(s.height-l);break;case"s":o?(l=Math.max(30,s.height+i),c=l*a,u=r.x+(s.width-c)/2):l=Math.max(30,s.height+i);break;case"w":o?(c=Math.max(50,s.width-n),l=c/a,d=r.y+(s.height-l)/2):c=Math.max(50,s.width-n),u=r.x+(s.width-c);break;case"e":o?(c=Math.max(50,s.width+n),l=c/a,d=r.y+(s.height-l)/2):c=Math.max(50,s.width+n);break}return{newWidth:c,newHeight:l,newX:u,newY:d}},Lv=t=>{try{t.preventDefault(),t.stopPropagation()}catch(e){console.debug("preventDefault failed in context menu handler:",e)}return!1},Fv=(t,e,n)=>{if(t.key==="Enter"&&!t.shiftKey){try{t.preventDefault()}catch(i){console.debug("preventDefault failed in keydown handler:",i)}e()}else if(t.key==="Escape"){try{t.preventDefault()}catch(i){console.debug("preventDefault failed in keydown handler:",i)}n()}},Uv=(t,e,n)=>{if(!t.cellPosition||!e.cellPosition||t.groupId!==e.groupId)return[];const i=Math.min(t.cellPosition.row,e.cellPosition.row),s=Math.max(t.cellPosition.row,e.cellPosition.row),r=Math.min(t.cellPosition.col,e.cellPosition.col),o=Math.max(t.cellPosition.col,e.cellPosition.col),a=[];return n.forEach(c=>{if(c.cellType==="cell"&&c.cellPosition&&c.groupId===t.groupId){const{row:l,col:u}=c.cellPosition;l>=i&&l<=s&&u>=r&&u<=o&&a.push(c.id)}}),a},ka=(t,e,n)=>{if(n==="set")if(e)setTimeout(()=>{try{t.currentTarget.setPointerCapture(t.pointerId)}catch{console.debug("iPhone pointer capture failed, continuing without capture")}},0);else try{t.currentTarget.setPointerCapture(t.pointerId)}catch{}else try{t.currentTarget.releasePointerCapture(t.pointerId)}catch{}},Wv=({isViewPage:t=!1})=>{const{textObjects:e,imageObjects:n,updateTextObject:i,updateImageObject:s,deleteTextObject:r,deleteImageObject:o,addTextObject:a,addImageObject:c,settings:l}=cs(),{selectedObjectId:u,hoveredObjectId:d,currentTool:h,setSelectedObjectId:f,setHoveredObjectId:p}=er(),{updatePointerEventTime:w,isGhostClick:S,isIPhone:q}=Rv(),{dragState:C,startDrag:N,updateDragPosition:K,endDrag:$,isDraggingObject:ie}=Sv(),{resizeState:y,startResize:_e,updateResize:ce,endResize:ae,isResizingObject:fe}=Tv(),{editingObjectId:ne,editingText:Z,startInlineEdit:O,finishInlineEdit:W,cancelInlineEdit:x,updateEditingText:E}=kv(i,f,t),{handleClipboardPaste:H}=Av(c,l),{handleDuplicateObject:A,handleDeleteObject:z,handleBulkClearCellText:Ne}=Pv(e,n,r,o,a,c,i,f),[pe,g]=v.useState({clickCount:0,clickTimer:null}),b=v.useCallback(_=>{if(!ne){if(_.ctrlKey&&_.key==="v"){try{_.preventDefault()}catch(B){console.debug("preventDefault failed in global keydown handler:",B)}H();return}if(!t){if(_.ctrlKey&&_.key==="d"){try{_.preventDefault()}catch(B){console.debug("preventDefault failed in global keydown handler:",B)}u&&A(u)}if(_.key==="Delete"){try{_.preventDefault()}catch(Y){console.debug("preventDefault failed in global keydown handler:",Y)}if(At.getState().getSelectedCells().length>0){Ne();return}u&&z(u)}}}},[ne,u,t,A,z,H,Ne]),I=v.useCallback((_,B)=>{var ue;w(_.timeStamp),_.stopPropagation();const Y=q();if((!Y||_.pointerType!=="touch")&&_.preventDefault(),ne){W();return}const Q=e.find(Re=>Re.id===B)||n.find(Re=>Re.id===B);if(!Q||(f(B),p(null),!((ue=Q.permissions)!=null&&ue.movable)))return;ka(_,Y,"set");const V=_.currentTarget.getBoundingClientRect(),oe={x:_.clientX-V.left,y:_.clientY-V.top};N(B,oe,{x:Q.x,y:Q.y})},[ne,W,e,n,f,p,w,q,N]),k=v.useCallback((_,B,Y)=>{var V;_.stopPropagation(),_.preventDefault();const Q=e.find(oe=>oe.id===Y)||n.find(oe=>oe.id===Y);!Q||!((V=Q.permissions)!=null&&V.resizable)||_e(Y,B,{x:_.clientX,y:_.clientY},{width:Q.width,height:Q.height},{x:Q.x,y:Q.y})},[e,n,_e]),D=v.useCallback(_=>{var B,Y,Q,V;if(C.isDragging&&C.draggedObjectId){const oe=_.currentTarget.closest("[data-canvas-container]");if(!oe)return;const ue=Rs(_.clientX,_.clientY,oe),Re=wu(oe),$e=Ov(ue,C.offset,Re),xe=((B=l==null?void 0:l.admin)==null?void 0:B.gridSnapEnabled)??!1,ct=((Y=l==null?void 0:l.admin)==null?void 0:Y.gridSize)??32,{position:Ye}=Sa($e,void 0,xe,ct),Ae=e.find(gn=>gn.id===C.draggedObjectId)||n.find(gn=>gn.id===C.draggedObjectId),{position:Tt}=Ta(Ye,void 0,Ae?{x:Ae.x,y:Ae.y}:void 0);K(Tt)}if(y.isResizing&&y.resizedObjectId){const oe=_.currentTarget.closest("[data-canvas-container]");if(!oe)return;const ue=Rs(_.clientX,_.clientY,oe),Re=Rs(y.startPosition.x,y.startPosition.y,oe),$e=Dv(ue,Re),xe=n.find(Su=>Su.id===y.resizedObjectId),ct=(xe==null?void 0:xe.maintainAspectRatio)||!1,Ye=xe?y.startSize.width/y.startSize.height:1,Ae=Mv({handle:y.resizeHandle,deltaX:$e.x,deltaY:$e.y,startSize:y.startSize,startPosition:y.startObjectPosition,maintainAspectRatio:ct,originalAspectRatio:Ye}),Tt=((Q=l==null?void 0:l.admin)==null?void 0:Q.gridSnapEnabled)??!1,gn=((V=l==null?void 0:l.admin)==null?void 0:V.gridSize)??32,{position:Cu,size:Eu}=Sa({x:Ae.newX,y:Ae.newY},{width:Ae.newWidth,height:Ae.newHeight},Tt,gn),ls=Ta(Cu,Eu);ls.size&&ce(ls.size,ls.position)}},[C,y,e,n,l,K,ce]),M=v.useCallback(_=>{if(ka(_,q(),"release"),C.isDragging&&C.draggedObjectId){const B=C.currentPosition,Y=e.find(V=>V.id===C.draggedObjectId),Q=n.find(V=>V.id===C.draggedObjectId);Y?i(C.draggedObjectId,B).catch(V=>{console.error("Failed to update text object position:",V)}):Q&&s(C.draggedObjectId,B).catch(V=>{console.error("Failed to update image object position:",V)}),$()}if(y.isResizing&&y.resizedObjectId){const B=y.currentSize,Y=y.currentPosition;if(B&&Y){const Q=e.find(ue=>ue.id===y.resizedObjectId),V=n.find(ue=>ue.id===y.resizedObjectId),oe={x:Y.x,y:Y.y,width:B.width,height:B.height};Q?i(y.resizedObjectId,oe).catch(ue=>{console.error("Failed to update text object size/position:",ue)}):V&&s(y.resizedObjectId,oe).catch(ue=>{console.error("Failed to update image object size/position:",ue)})}ae()}},[C,y,e,n,i,s,$,ae,q]),L=v.useCallback((_,B)=>{if(S(_.timeStamp))return;const Y=e.find(V=>V.id===B),Q=(Y==null?void 0:Y.cellType)==="cell";if(!t&&h==="select"&&!Q){const{clearSelection:V}=At.getState();V(),f(B),_&&_.stopPropagation()}},[h,t,f,e,S]),le=v.useCallback(_=>{if(S(_.timeStamp))return;if(_.currentTarget.focus(),ne){W();return}if(!t&&h==="select"){if(_.target===_.currentTarget){f(null);const{clearSelection:Y}=At.getState();Y()}}else if(t&&_.target===_.currentTarget){f(null);const{clearSelection:Y}=At.getState();Y()}},[ne,W,f,t,h,S]),at=v.useCallback((_,B)=>{if(h!=="select")return;if(ne&&ne!==_.id&&W(),_.cellType==="cell"){const{selectCell:V,selectCellsInRange:oe,getSelectedCells:ue}=At.getState(),Re=pe.clickCount+1;if(pe.clickTimer&&clearTimeout(pe.clickTimer),Re===2)O(_),g({clickCount:0,clickTimer:null});else{const $e=B.ctrlKey||B.metaKey,xe=B.shiftKey;if(xe){const Ye=ue();if(Ye.length>0){const Ae=e.find(Tt=>Tt.id===Ye[Ye.length-1]);if(Ae&&Ae.cellType==="cell"&&Ae.cellPosition&&_.cellPosition){const Tt=Uv(Ae,_,e);oe(Tt)}}else V(_.id,!1)}else $e?V(_.id,!0):V(_.id,!1);!$e&&!xe&&f(null);const ct=setTimeout(()=>{g({clickCount:0,clickTimer:null})},300);g({clickCount:Re,clickTimer:ct})}return}const Q=pe.clickCount+1;if(pe.clickTimer&&clearTimeout(pe.clickTimer),Q===3)O(_),g({clickCount:0,clickTimer:null});else{L(B,_.id);const V=setTimeout(()=>{g({clickCount:0,clickTimer:null})},500);g({clickCount:Q,clickTimer:V})}},[h,ne,W,O,pe,e,f,L]);return T.jsx("div",{className:"absolute inset-0",tabIndex:0,onClick:le,onKeyDown:b,onPointerMove:D,onPointerUp:M,onPointerLeave:M,onContextMenu:Lv,style:{touchAction:"none",pointerEvents:"auto",outline:"none"},children:[...e,...n].sort((_,B)=>(_.zIndex||0)-(B.zIndex||0)).map(_=>{const B="text"in _,Y="src"in _,Q=ie(_.id),V=fe(_.id),oe=Q?C.currentPosition.x:V&&y.currentPosition?y.currentPosition.x:_.x,ue=Q?C.currentPosition.y:V&&y.currentPosition?y.currentPosition.y:_.y,Re=V&&y.currentSize?y.currentSize.width:_.width,$e=V&&y.currentSize?y.currentSize.height:_.height,xe=u===_.id,ct=d===_.id&&!t;return B?T.jsx(Cv,{obj:_,isSelected:xe,isHovered:ct,isViewPage:t,isDragging:Q,isResizing:V,currentX:oe,currentY:ue,currentWidth:Re,currentHeight:$e,currentTool:h,editingObjectId:ne,editingText:Z,onTextBoxClick:at,onObjectClick:L,onPointerDown:I,onResizePointerDown:k,onMouseEnter:()=>p(_.id),onMouseLeave:()=>p(null),onEditingTextChange:E,onFinishEdit:W,onKeyDown:Ye=>Fv(Ye,W,x),updateTextObject:i},_.id):Y?T.jsx(Ev,{obj:_,isSelected:xe,isHovered:ct,isViewPage:t,isDragging:Q,currentX:oe,currentY:ue,currentWidth:Re,currentHeight:$e,currentTool:h,editingObjectId:ne,onObjectClick:L,onPointerDown:I,onResizePointerDown:k,onMouseEnter:()=>p(_.id),onMouseLeave:()=>p(null)},_.id):null})})},zv=({isViewPage:t=!1})=>null;function Ra(t,e,n,i=s=>s){return t*i(.5-e*(.5-n))}function jv(t){return[-t[0],-t[1]]}function Ue(t,e){return[t[0]+e[0],t[1]+e[1]]}function Oe(t,e){return[t[0]-e[0],t[1]-e[1]]}function Fe(t,e){return[t[0]*e,t[1]*e]}function Bv(t,e){return[t[0]/e,t[1]/e]}function bn(t){return[t[1],-t[0]]}function Aa(t,e){return t[0]*e[0]+t[1]*e[1]}function $v(t,e){return t[0]===e[0]&&t[1]===e[1]}function Hv(t){return Math.hypot(t[0],t[1])}function Vv(t){return t[0]*t[0]+t[1]*t[1]}function Pa(t,e){return Vv(Oe(t,e))}function bu(t){return Bv(t,Hv(t))}function Gv(t,e){return Math.hypot(t[1]-e[1],t[0]-e[0])}function In(t,e,n){let i=Math.sin(n),s=Math.cos(n),r=t[0]-e[0],o=t[1]-e[1],a=r*s-o*i,c=r*i+o*s;return[a+e[0],c+e[1]]}function Zs(t,e,n){return Ue(t,Fe(Oe(e,t),n))}function Na(t,e,n){return Ue(t,Fe(e,n))}var{min:Gt,PI:qv}=Math,xa=.275,Cn=qv+1e-4;function Kv(t,e={}){let{size:n=16,smoothing:i=.5,thinning:s=.5,simulatePressure:r=!0,easing:o=E=>E,start:a={},end:c={},last:l=!1}=e,{cap:u=!0,easing:d=E=>E*(2-E)}=a,{cap:h=!0,easing:f=E=>--E*E*E+1}=c;if(t.length===0||n<=0)return[];let p=t[t.length-1].runningLength,w=a.taper===!1?0:a.taper===!0?Math.max(n,p):a.taper,S=c.taper===!1?0:c.taper===!0?Math.max(n,p):c.taper,q=Math.pow(n*i,2),C=[],N=[],K=t.slice(0,10).reduce((E,H)=>{let A=H.pressure;if(r){let z=Gt(1,H.distance/n),Ne=Gt(1,1-z);A=Gt(1,E+(Ne-E)*(z*xa))}return(E+A)/2},t[0].pressure),$=Ra(n,s,t[t.length-1].pressure,o),ie,y=t[0].vector,_e=t[0].point,ce=_e,ae=_e,fe=ce,ne=!1;for(let E=0;E<t.length;E++){let{pressure:H}=t[E],{point:A,vector:z,distance:Ne,runningLength:pe}=t[E];if(E<t.length-1&&p-pe<3)continue;if(s){if(r){let le=Gt(1,Ne/n),at=Gt(1,1-le);H=Gt(1,K+(at-K)*(le*xa))}$=Ra(n,s,H,o)}else $=n/2;ie===void 0&&(ie=$);let g=pe<w?d(pe/w):1,b=p-pe<S?f((p-pe)/S):1;$=Math.max(.01,$*Math.min(g,b));let I=(E<t.length-1?t[E+1]:t[E]).vector,k=E<t.length-1?Aa(z,I):1,D=Aa(z,y)<0&&!ne,M=k!==null&&k<0;if(D||M){let le=Fe(bn(y),$);for(let at=1/13,_=0;_<=1;_+=at)ae=In(Oe(A,le),A,Cn*_),C.push(ae),fe=In(Ue(A,le),A,Cn*-_),N.push(fe);_e=ae,ce=fe,M&&(ne=!0);continue}if(ne=!1,E===t.length-1){let le=Fe(bn(z),$);C.push(Oe(A,le)),N.push(Ue(A,le));continue}let L=Fe(bn(Zs(I,z,k)),$);ae=Oe(A,L),(E<=1||Pa(_e,ae)>q)&&(C.push(ae),_e=ae),fe=Ue(A,L),(E<=1||Pa(ce,fe)>q)&&(N.push(fe),ce=fe),K=H,y=z}let Z=t[0].point.slice(0,2),O=t.length>1?t[t.length-1].point.slice(0,2):Ue(t[0].point,[1,1]),W=[],x=[];if(t.length===1){if(!(w||S)||l){let E=Na(Z,bu(bn(Oe(Z,O))),-(ie||$)),H=[];for(let A=1/13,z=A;z<=1;z+=A)H.push(In(E,Z,Cn*2*z));return H}}else{if(!(w||S&&t.length===1))if(u)for(let H=1/13,A=H;A<=1;A+=H){let z=In(N[0],Z,Cn*A);W.push(z)}else{let H=Oe(C[0],N[0]),A=Fe(H,.5),z=Fe(H,.51);W.push(Oe(Z,A),Oe(Z,z),Ue(Z,z),Ue(Z,A))}let E=bn(jv(t[t.length-1].vector));if(S||w&&t.length===1)x.push(O);else if(h){let H=Na(O,E,$);for(let A=1/29,z=A;z<1;z+=A)x.push(In(H,O,Cn*3*z))}else x.push(Ue(O,Fe(E,$)),Ue(O,Fe(E,$*.99)),Oe(O,Fe(E,$*.99)),Oe(O,Fe(E,$)))}return C.concat(x,N.reverse(),W)}function Yv(t,e={}){var n;let{streamline:i=.5,size:s=16,last:r=!1}=e;if(t.length===0)return[];let o=.15+(1-i)*.85,a=Array.isArray(t[0])?t:t.map(({x:f,y:p,pressure:w=.5})=>[f,p,w]);if(a.length===2){let f=a[1];a=a.slice(0,-1);for(let p=1;p<5;p++)a.push(Zs(a[0],f,p/4))}a.length===1&&(a=[...a,[...Ue(a[0],[1,1]),...a[0].slice(2)]]);let c=[{point:[a[0][0],a[0][1]],pressure:a[0][2]>=0?a[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],l=!1,u=0,d=c[0],h=a.length-1;for(let f=1;f<a.length;f++){let p=r&&f===h?a[f].slice(0,2):Zs(d.point,a[f],o);if($v(d.point,p))continue;let w=Gv(p,d.point);if(u+=w,f<h&&!l){if(u<s)continue;l=!0}d={point:p,pressure:a[f][2]>=0?a[f][2]:.5,vector:bu(Oe(d.point,p)),distance:w,runningLength:u},c.push(d)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function Oa(t,e={}){return Kv(Yv(t,e),e)}const Qv=()=>{var pe;const t=v.useRef(null),e=v.useRef(!1),n=v.useRef(null),i=v.useRef(!1),s=v.useRef(null),r=v.useRef(!1),o=v.useRef(null),a=v.useRef(!0),c=v.useRef(null),l=v.useRef(null),{currentStroke:u,currentPressureStroke:d,isDrawing:h,penColor:f,penWidth:p,usePerfectFreehand:w,addPoint:S,startStroke:q,endStroke:C,clearCurrentStroke:N}=Zu(),{drawObjects:K,settings:$,isLoading:ie}=cs(),{currentTool:y,setCurrentTool:_e}=er();v.useEffect(()=>{const g=navigator.userAgent.toLowerCase(),b=/iphone|ipad|ipod/.test(g),I=/safari/.test(g)&&!/chrome/.test(g);r.current=b||I},[]);const ce=v.useCallback((g="mouse")=>{const b={size:p*2,thinning:.5,smoothing:.5,streamline:.5,easing:I=>I,start:{taper:0,easing:I=>I,cap:!0},end:{taper:100,easing:I=>I,cap:!0}};return g==="pen"?{...b,thinning:.7,smoothing:.3,streamline:.3}:g==="touch"?{...b,thinning:.4,smoothing:.7,streamline:.7,size:p*2.5}:b},[p]),ae=v.useCallback((g,b,I)=>{if(b.length<2)return;g.save(),g.fillStyle=I,g.beginPath();const[k]=b;g.moveTo(k[0],k[1]);for(let D=1;D<b.length;D++){const[M,L]=b[D],[le,at]=b[D-1],_=(le+M)/2,B=(at+L)/2;g.quadraticCurveTo(le,at,_,B)}g.closePath(),g.fill(),g.restore()},[]),fe=v.useCallback(()=>{var g;n.current&&(clearTimeout(n.current),n.current=null),(g=$==null?void 0:$.admin)!=null&&g.autoToolSwitch&&(n.current=setTimeout(()=>{_e("select"),n.current=null},2e3))},[(pe=$==null?void 0:$.admin)==null?void 0:pe.autoToolSwitch,_e]),ne=v.useCallback(()=>{const g=t.current;if(!g||!a.current)return;const b=g.parentElement;if(!b)return;const I=b.offsetWidth,k=b.offsetHeight;(g.width!==I||g.height!==k)&&(g.width=I,g.height=k,!i.current&&a.current&&(i.current=!0,l.current=requestAnimationFrame(()=>{i.current&&!ie&&a.current&&(x(),i.current=!1),l.current=null})))},[ie]),Z=v.useCallback((g,b)=>{const I=t.current;if(!I)return{x:0,y:0};const k=I.getBoundingClientRect(),D=(g-k.left)/k.width*2160,M=(b-k.top)/k.height*3840;return{x:D,y:M}},[]),O=v.useCallback((g,b)=>{const I=t.current;return I?{x:g/2160*I.width,y:b/3840*I.height}:{x:0,y:0}},[]),W=v.useCallback(async(g,b)=>{for(const k of K)for(let D=0;D<k.points.length;D+=2)if(Math.sqrt((k.points[D]-g)**2+(k.points[D+1]-b)**2)<=20)try{const L=we(be,`drawObjects/${k.id}`);await ui(L);return}catch(L){console.error("❌ DrawLayer: Failed to erase stroke:",L)}},[K]),x=v.useCallback(()=>{const g=t.current;if(!g)return;const b=g.getContext("2d");if(b&&!(g.width===0||g.height===0)&&(b.clearRect(0,0,g.width,g.height),b.lineCap="round",b.lineJoin="round",K.forEach(I=>{var k;if(!(I.points.length<4))if(w&&I.usePerfectFreehand)try{const D=[];for(let M=0;M<I.points.length;M+=2){const L=O(I.points[M],I.points[M+1]);D.push([L.x,L.y,((k=I.pressure)==null?void 0:k[M/2])||.5])}if(D.length>=2){const M=ce(I.inputType||"mouse");M.size=I.width*2;const L=Oa(D,M);ae(b,L,I.color)}}catch(D){console.warn("🚫 perfect-freehand 렌더링 실패, 기본 렌더링으로 대체:",D),b.beginPath(),b.strokeStyle=I.color,b.lineWidth=I.width;const M=O(I.points[0],I.points[1]);b.moveTo(M.x,M.y);for(let L=2;L<I.points.length;L+=2){const le=O(I.points[L],I.points[L+1]);b.lineTo(le.x,le.y)}b.stroke()}else{b.beginPath(),b.strokeStyle=I.color,b.lineWidth=I.width;const D=O(I.points[0],I.points[1]);b.moveTo(D.x,D.y);for(let M=2;M<I.points.length;M+=2){const L=O(I.points[M],I.points[M+1]);b.lineTo(L.x,L.y)}b.stroke()}}),h&&u.length>=4))if(w&&d.length>=2)try{const I=d.map(L=>{const le=O(L.x,L.y);return[le.x,le.y,L.pressure||.5]}),k=s.current&&r.current?"touch":"mouse",D=ce(k),M=Oa(I,D);ae(b,M,f)}catch(I){console.warn("🚫 현재 스트로크 perfect-freehand 렌더링 실패:",I),b.beginPath(),b.strokeStyle=f,b.lineWidth=p;const k=O(u[0],u[1]);b.moveTo(k.x,k.y);for(let D=2;D<u.length;D+=2){const M=O(u[D],u[D+1]);b.lineTo(M.x,M.y)}b.stroke()}else{b.beginPath(),b.strokeStyle=f,b.lineWidth=p;const I=O(u[0],u[1]);b.moveTo(I.x,I.y);for(let k=2;k<u.length;k+=2){const D=O(u[k],u[k+1]);b.lineTo(D.x,D.y)}b.stroke()}},[K,u,d,h,f,p,w,O,ie,ce,ae]),E=v.useCallback(g=>{const b=navigator.userAgent.toLowerCase(),I=/iphone/.test(b),k=/ipad/.test(b);if(r.current){if(I)return!0;if(k&&(y==="eraser"&&s.current!==null&&g.pointerType==="touch"||y==="pen"&&g.pointerType!=="pen"&&g.pointerType!=="touch"&&g.pointerType!=="mouse"))return!1}return!0},[y]),H=v.useCallback(g=>{if(y!=="pen"&&y!=="eraser"||!E(g))return;const b=navigator.userAgent.toLowerCase(),I=/iphone/.test(b);if(!I&&s.current!==null&&s.current!==g.pointerId)return;(!I||g.pointerType!=="touch")&&g.preventDefault(),g.stopPropagation(),s.current=g.pointerId,n.current&&(clearTimeout(n.current),n.current=null),o.current&&(clearTimeout(o.current),o.current=null);const k=Z(g.clientX,g.clientY);if(y==="pen"){q();const D=g.pressure||(I?.7:.5),M=g.tiltX||0,L=g.tiltY||0;S(k.x,k.y,D,M,L),x()}else y==="eraser"&&(e.current=!0,W(k.x,k.y))},[y,Z,q,S,x,W,E]),A=v.useCallback(g=>{const b=navigator.userAgent.toLowerCase();if(!(!/iphone/.test(b)&&s.current!==g.pointerId)){if(y==="pen"&&h){g.preventDefault();const k=Z(g.clientX,g.clientY),D=g.pressure||.5,M=g.tiltX||0,L=g.tiltY||0;S(k.x,k.y,D,M,L),x()}else if(y==="eraser"&&e.current){g.preventDefault();const k=Z(g.clientX,g.clientY);W(k.x,k.y)}}},[h,y,Z,S,x,W]),z=v.useCallback(async g=>{const b=navigator.userAgent.toLowerCase();if(!(!/iphone/.test(b)&&s.current!==g.pointerId)){if(h&&y==="pen"){if(C(),u.length>=4){const k=g.pointerType==="pen"?"pen":g.pointerType==="touch"?"touch":"mouse",D=d.map(L=>L.pressure||.5),M={points:u,color:f,width:p,createdAt:new Date().toISOString(),lastModified:Date.now(),usePerfectFreehand:w,pressure:D,inputType:k};try{await wv(M)}catch(L){console.error("❌ DrawLayer: Failed to save stroke:",L)}}N(),x(),fe()}y==="eraser"&&e.current&&(e.current=!1,fe()),s.current=null,r.current&&g.pointerType==="touch"&&(o.current=setTimeout(()=>{o.current=null},100))}},[h,y,u,C,f,p,N,x,fe]),Ne=v.useCallback(g=>{s.current===g.pointerId&&(h&&(C(),N(),x()),e.current&&(e.current=!1),s.current=null)},[h,C,N,x]);return v.useEffect(()=>{ne();const g=()=>{a.current&&setTimeout(ne,100)};return window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g),a.current=!1,l.current&&(cancelAnimationFrame(l.current),l.current=null),i.current=!1}},[ne]),v.useEffect(()=>{if(!ie&&a.current)return c.current=setTimeout(()=>{a.current&&x(),c.current=null},100),()=>{c.current&&(clearTimeout(c.current),c.current=null)}},[ie]),v.useEffect(()=>{ie||x()},[K,ie]),v.useEffect(()=>{(y==="pen"||y==="eraser")&&n.current&&(clearTimeout(n.current),n.current=null)},[y]),v.useEffect(()=>{h&&x()},[u,h]),v.useEffect(()=>()=>{a.current=!1,n.current&&(clearTimeout(n.current),n.current=null),o.current&&(clearTimeout(o.current),o.current=null),c.current&&(clearTimeout(c.current),c.current=null),l.current&&(cancelAnimationFrame(l.current),l.current=null),i.current=!1,s.current=null},[]),T.jsx("canvas",{ref:t,className:"absolute top-0 left-0 w-full h-full",onPointerDown:y==="pen"||y==="eraser"?H:void 0,onPointerMove:y==="pen"||y==="eraser"?A:void 0,onPointerUp:y==="pen"||y==="eraser"?z:void 0,onPointerCancel:y==="pen"||y==="eraser"?Ne:void 0,onPointerLeave:y==="pen"||y==="eraser"?z:void 0,onContextMenu:g=>g.preventDefault(),style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",touchAction:"none",cursor:y==="pen"?"crosshair":y==="eraser"?"grab":"default",pointerEvents:y==="pen"||y==="eraser"?"auto":"none",WebkitTouchCallout:"none",WebkitUserSelect:"none",WebkitTapHighlightColor:"transparent"}})},Iu=Tn.memo(({gridEnabled:t,gridSize:e,canvasWidth:n,canvasHeight:i})=>{if(!t)return null;const s=[],r=[];for(let o=0;o<=n;o+=e)s.push(T.jsx("line",{x1:o,y1:0,x2:o,y2:i,stroke:"#e5e7eb",strokeWidth:1,opacity:.5},`v-${o}`));for(let o=0;o<=i;o+=e)r.push(T.jsx("line",{x1:0,y1:o,x2:n,y2:o,stroke:"#e5e7eb",strokeWidth:1,opacity:.5},`h-${o}`));return T.jsxs("svg",{className:"absolute inset-0 pointer-events-none",width:n,height:i,style:{zIndex:1},children:[s,r]})});Iu.displayName="GridLayer";const Xv=t=>t.split(`
`).filter(e=>e.trim()).map(e=>e.split("	")),Jv=()=>{var h;const{settings:t}=cs(),[e,n]=Tn.useState(""),[i,s]=Tn.useState(!1);if(Tn.useEffect(()=>{const f=p=>{n(p.detail.data),s(p.detail.show)};return window.addEventListener("excel-preview-update",f),()=>{window.removeEventListener("excel-preview-update",f)}},[]),!i||!e.trim())return null;const r={excelPasteSettings:((h=t==null?void 0:t.admin)==null?void 0:h.excelPasteSettings)??{startPosition:{x:100,y:100},cellWidth:120,cellHeight:40,fontSize:14}},o=Xv(e),{startPosition:a,cellWidth:c,cellHeight:l}=r.excelPasteSettings,u=Math.max(...o.map(f=>f.length))*c,d=o.length*l;return T.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none",zIndex:15},children:[T.jsx("div",{style:{position:"absolute",left:a.x,top:a.y,width:u,height:d,border:"3px dashed #fbbf24",backgroundColor:"rgba(251, 191, 36, 0.1)",borderRadius:"4px",boxShadow:"0 2px 8px rgba(251, 191, 36, 0.3)"}}),o.map((f,p)=>f.map((w,S)=>T.jsx("div",{style:{position:"absolute",left:a.x+S*c,top:a.y+p*l,width:c,height:l,border:"1px solid rgba(251, 191, 36, 0.4)",backgroundColor:"rgba(251, 191, 36, 0.05)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:`${r.excelPasteSettings.fontSize}px`,color:"rgba(251, 191, 36, 0.8)",fontWeight:"bold",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",padding:"2px"},children:w},`preview-${p}-${S}`))),T.jsxs("div",{style:{position:"absolute",left:a.x,top:a.y-30,backgroundColor:"rgba(251, 191, 36, 0.9)",color:"#ffffff",padding:"4px 8px",borderRadius:"4px",fontSize:"12px",fontWeight:"bold",whiteSpace:"nowrap",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.2)"},children:["📊 미리보기: ",o.length,"행 × ",Math.max(...o.map(f=>f.length)),"열"]})]})},En=2160,Sn=3840,tw=({isViewPage:t=!1})=>{var fe,ne,Z,O;const e=v.useRef(null),n=v.useRef(null),[i,s]=v.useState(.15),{zoom:r,viewOffset:o,setZoom:a,zoomAtPoint:c,currentTool:l}=er(),{floorImage:u,settings:d}=cs(),h={gridVisible:((fe=d==null?void 0:d.admin)==null?void 0:fe.gridVisible)??!0,gridSize:((ne=d==null?void 0:d.admin)==null?void 0:ne.gridSize)??32},f=v.useCallback(W=>{W.ctrlKey},[]);v.useEffect(()=>{r<.04&&a(1)},[r,a]),v.useEffect(()=>{const W=x=>{if(x.ctrlKey){try{x.preventDefault()}catch(Ne){console.debug("preventDefault failed in global wheel handler:",Ne)}if(!e.current||!n.current)return;const E=e.current.getBoundingClientRect(),H=x.clientX-E.left,A=x.clientY-E.top,z=-x.deltaY;c(z,H,A,E)}};return window.addEventListener("wheel",W,{passive:!1}),()=>{window.removeEventListener("wheel",W)}},[c]),v.useEffect(()=>{const W=x=>{if(x.ctrlKey&&(x.key==="+"||x.key==="=")){try{x.preventDefault()}catch(z){console.debug("preventDefault failed in global keydown handler:",z)}if(!e.current||!n.current)return;const E=e.current.getBoundingClientRect(),H=E.width/2,A=E.height/2;c(120,H,A,E)}if(x.ctrlKey&&x.key==="-"){try{x.preventDefault()}catch(z){console.debug("preventDefault failed in global keydown handler:",z)}if(!e.current||!n.current)return;const E=e.current.getBoundingClientRect(),H=E.width/2,A=E.height/2;c(-120,H,A,E)}};return window.addEventListener("keydown",W),()=>{window.removeEventListener("keydown",W)}},[c]),v.useEffect(()=>{const W=()=>{if(e.current){const E=e.current,H=E.clientWidth,A=E.clientHeight;if(H<=0||A<=0){s(.15);return}const z=H/En,Ne=A/Sn,pe=Math.min(z,Ne);s(Math.max(.1,pe))}},x=setTimeout(W,100);return window.addEventListener("resize",W),()=>{clearTimeout(x),window.removeEventListener("resize",W)}},[r]);const p=i*r,w=En*p,S=Sn*p,q=((Z=e.current)==null?void 0:Z.clientWidth)||0,C=((O=e.current)==null?void 0:O.clientHeight)||0,N=200,K=w>q,$=S>C,ie=K?w+N*2:q,y=$?S+N*2:C,_e=W=>{try{W.preventDefault(),W.stopPropagation()}catch(x){console.debug("preventDefault failed in Canvas context menu:",x)}return!1},ce=W=>{if(W.touches.length===1){const x=setTimeout(()=>{try{W.preventDefault()}catch{}},200),E=()=>{clearTimeout(x),document.removeEventListener("touchend",E),document.removeEventListener("touchmove",E)};document.addEventListener("touchend",E,{once:!0}),document.addEventListener("touchmove",E,{once:!0})}},ae=()=>l==="pen"||l==="eraser"?"crosshair":"default";return T.jsxs("div",{ref:e,onWheel:f,style:{position:"relative",width:"100%",height:"100%",overflowX:K?"auto":"hidden",overflowY:$?"auto":"hidden",backgroundColor:"transparent",cursor:ae()},children:[(K||$)&&T.jsx("div",{style:{position:"absolute",top:0,left:0,width:ie,height:y,pointerEvents:"none",zIndex:1}}),T.jsxs("div",{ref:n,"data-canvas-container":!0,style:{position:"absolute",backgroundColor:"#ffffff",border:"1px solid #d1d5db",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)",width:En,height:Sn,transform:`translate(${o.x}px, ${o.y}px) scale(${p})`,transformOrigin:"center center",left:K||$?ie/2:"50%",top:K||$?y/2:"50%",marginLeft:`-${En/2}px`,marginTop:`-${Sn/2}px`,zIndex:10},onContextMenu:_e,onTouchStart:ce,children:[u?T.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:`url(${u.path})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:0}}):T.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"#f9fafb",display:"flex",alignItems:"center",justifyContent:"center",zIndex:0},children:T.jsxs("div",{style:{color:"#9ca3af",fontSize:"24px",textAlign:"center"},children:["Board7 Canvas",T.jsx("br",{}),T.jsx("span",{style:{fontSize:"16px"},children:"2160 x 3840"})]})}),T.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:100},children:[T.jsx(Iu,{gridEnabled:h.gridVisible,gridSize:h.gridSize,canvasWidth:En,canvasHeight:Sn}),T.jsx(zv,{}),T.jsx(Wv,{isViewPage:t}),T.jsx(Jv,{})]}),T.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:1e4,pointerEvents:l==="pen"||l==="eraser"?"auto":"none"},children:T.jsx(Qv,{isViewPage:t})})]}),T.jsxs("div",{style:{position:"absolute",bottom:"16px",left:"16px",backgroundColor:"rgba(0, 0, 0, 0.5)",color:"#ffffff",padding:"4px 12px",borderRadius:"4px",fontSize:"14px",zIndex:1e3},children:[Math.round(i*r*100),"%"]})]})};export{tw as C,cs as a,er as b,Zu as c,ew as s,At as u};
