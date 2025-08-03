import{r as S,g as Tl,R as Mt,j as T}from"./index-BAIBKV_r.js";const xl={},er=t=>{let e;const n=new Set,i=(d,u)=>{const h=typeof d=="function"?d(e):d;if(!Object.is(h,e)){const p=e;e=u??(typeof h!="object"||h===null)?h:Object.assign({},e,h),n.forEach(_=>_(e,p))}},s=()=>e,l={setState:i,getState:s,getInitialState:()=>c,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(xl?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(i,s,l);return l},kl=t=>t?er(t):er;var po={exports:{}},go={},_o={exports:{}},mo={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jt=S;function Rl(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Al=typeof Object.is=="function"?Object.is:Rl,Pl=jt.useState,Nl=jt.useEffect,Dl=jt.useLayoutEffect,Ol=jt.useDebugValue;function Ml(t,e){var n=e(),i=Pl({inst:{value:n,getSnapshot:e}}),s=i[0].inst,r=i[1];return Dl(function(){s.value=n,s.getSnapshot=e,Ei(s)&&r({inst:s})},[t,n,e]),Nl(function(){return Ei(s)&&r({inst:s}),t(function(){Ei(s)&&r({inst:s})})},[t]),Ol(n),n}function Ei(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Al(t,n)}catch{return!0}}function Ll(t,e){return e()}var Fl=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Ll:Ml;mo.useSyncExternalStore=jt.useSyncExternalStore!==void 0?jt.useSyncExternalStore:Fl;_o.exports=mo;var jl=_o.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var si=S,zl=jl;function Wl(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bl=typeof Object.is=="function"?Object.is:Wl,$l=zl.useSyncExternalStore,Ul=si.useRef,Hl=si.useEffect,Vl=si.useMemo,Gl=si.useDebugValue;go.useSyncExternalStoreWithSelector=function(t,e,n,i,s){var r=Ul(null);if(r.current===null){var o={hasValue:!1,value:null};r.current=o}else o=r.current;r=Vl(function(){function l(p){if(!c){if(c=!0,d=p,p=i(p),s!==void 0&&o.hasValue){var _=o.value;if(s(_,p))return u=_}return u=p}if(_=u,Bl(d,p))return _;var w=i(p);return s!==void 0&&s(_,w)?(d=p,_):(d=p,u=w)}var c=!1,d,u,h=n===void 0?null:n;return[function(){return l(e())},h===null?void 0:function(){return l(h())}]},[e,n,i,s]);var a=$l(t,r[0],r[1]);return Hl(function(){o.hasValue=!0,o.value=a},[a]),Gl(a),a};po.exports=go;var ql=po.exports;const Yl=Tl(ql),yo={},{useDebugValue:Kl}=Mt,{useSyncExternalStoreWithSelector:Ql}=Yl;let tr=!1;const Xl=t=>t;function Jl(t,e=Xl,n){(yo?"production":void 0)!=="production"&&n&&!tr&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),tr=!0);const i=Ql(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return Kl(i),i}const nr=t=>{(yo?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?kl(t):t,n=(i,s)=>Jl(e,i,s);return Object.assign(n,e),n},St=t=>t?nr(t):nr,ls=St((t,e)=>({currentTool:"select",zoom:1,viewOffset:{x:0,y:0},selectedObjectId:null,creationMode:null,hoveredObjectId:null,setCurrentTool:n=>t({currentTool:n}),setZoom:n=>t({zoom:Math.max(.05,Math.min(5,n))}),setViewOffset:n=>t({viewOffset:n}),setSelectedObjectId:n=>t({selectedObjectId:n}),setCreationMode:n=>t({creationMode:n}),setHoveredObjectId:n=>t({hoveredObjectId:n}),zoomIn:()=>t(n=>({zoom:Math.min(5,n.zoom+.1)})),zoomOut:()=>t(n=>({zoom:Math.max(.05,n.zoom-.1)})),zoomAtPoint:(n,i,s,r)=>{const o=e(),a=1.1,l=n>0?Math.min(5,o.zoom*a):Math.max(.05,o.zoom/a);if(l===o.zoom)return;const c=r.height/2,d=s-c,u=l/o.zoom,h=o.viewOffset.x,p=o.viewOffset.y+d*(1-u);t({zoom:l,viewOffset:{x:h,y:p}})},resetZoom:()=>t({zoom:1,viewOffset:{x:0,y:0}}),fitToWindow:()=>t({zoom:1,viewOffset:{x:0,y:0}})}));St(t=>({isDragging:!1,viewCam:{x:0,y:0},snapEnabled:!0,setIsDragging:e=>t({isDragging:e}),setViewCam:e=>t({viewCam:e}),setSnapEnabled:e=>t({snapEnabled:e}),panCanvas:(e,n)=>t(i=>({viewCam:{x:i.viewCam.x+e,y:i.viewCam.y+n}})),resetView:()=>t({viewCam:{x:0,y:0}})}));const Zl=St(t=>({currentStroke:[],currentPressureStroke:[],isDrawing:!1,penColor:"#000000",penWidth:4,usePerfectFreehand:!0,lastActionTime:0,defaultColors:["#000000","#FF0000","#00FF00","#0000FF","#FFFF00","#FF00FF","#00FFFF","#FFA500","#800080","#A52A2A"],addPoint:(e,n,i=.5,s=0,r=0)=>t(o=>({currentStroke:[...o.currentStroke,e,n],currentPressureStroke:[...o.currentPressureStroke,{x:e,y:n,pressure:i,tiltX:s,tiltY:r}]})),startStroke:()=>t({isDrawing:!0,currentStroke:[]}),endStroke:()=>t({isDrawing:!1}),clearCurrentStroke:()=>t({currentStroke:[],currentPressureStroke:[]}),setPenColor:e=>t({penColor:e}),setPenWidth:e=>t({penWidth:e}),setUsePerfectFreehand:e=>t({usePerfectFreehand:e}),updateLastActionTime:()=>t({lastActionTime:Date.now()})}));var ir={};/**
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
 */const vo={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const m=function(t,e){if(!t)throw Vt(e)},Vt=function(t){return new Error("Firebase Database ("+vo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const bo=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ec=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},cs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,d=r>>2,u=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(h=64)),i.push(n[d],n[u],n[h],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bo(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ec(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw new tc;const h=r<<2|a>>4;if(i.push(h),c!==64){const p=a<<4&240|c>>2;if(i.push(p),u!==64){const _=c<<6&192|u;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wo=function(t){const e=bo(t);return cs.encodeByteArray(e,!0)},jn=function(t){return wo(t).replace(/\./g,"")},Wi=function(t){try{return cs.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nc(t){return Co(void 0,t)}function Co(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ic(n)||(t[n]=Co(t[n],e[n]));return t}function ic(t){return t!=="__proto__"}/**
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
 */function sc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rc=()=>sc().__FIREBASE_DEFAULTS__,oc=()=>{if(typeof process>"u"||typeof ir>"u")return;const t=ir.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ac=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wi(t[1]);return e&&JSON.parse(e)},Io=()=>{try{return rc()||oc()||ac()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lc=t=>{var e,n;return(n=(e=Io())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cc=t=>{const e=lc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Eo=()=>{var t;return(t=Io())===null||t===void 0?void 0:t.config};/**
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
 */class Tn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function uc(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[jn(JSON.stringify(n)),jn(JSON.stringify(o)),""].join(".")}/**
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
 */function dc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function So(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dc())}function hc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pc(){return vo.NODE_ADMIN===!0}function To(){try{return typeof indexedDB=="object"}catch{return!1}}function xo(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function gc(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const _c="FirebaseError";class Tt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=_c,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ri.prototype.create)}}class ri{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?mc(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Tt(s,a,i)}}function mc(t,e){return t.replace(yc,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const yc=/\{\$([^}]+)}/g;/**
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
 */function hn(t){return JSON.parse(t)}function _e(t){return JSON.stringify(t)}/**
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
 */const ko=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=hn(Wi(r[0])||""),n=hn(Wi(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},vc=function(t){const e=ko(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},bc=function(t){const e=ko(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ke(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function zt(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function sr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zn(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Wn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(rr(r)&&rr(o)){if(!Wn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function rr(t){return t!==null&&typeof t=="object"}/**
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
 */function wc(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class Cc{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)i[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const h=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),d=1518500249):(c=r^o^a,d=1859775393):u<60?(c=r&o|a&(r|o),d=2400959708):(c=r^o^a,d=3395469782);const h=(s<<5|s>>>27)+c+l+d+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function oi(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Ic=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,m(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ai=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Ec=1e3,Sc=2,Tc=4*60*60*1e3,xc=.5;function or(t,e=Ec,n=Sc){const i=e*Math.pow(n,t),s=Math.round(xc*i*(Math.random()-.5)*2);return Math.min(Tc,i+s)}/**
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
 */function tt(t){return t&&t._delegate?t._delegate:t}class Je{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _t="[DEFAULT]";/**
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
 */class kc{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Tn;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ac(e))try{this.getOrInitializeService({instanceIdentifier:_t})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=_t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_t){return this.instances.has(e)}getOptions(e=_t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Rc(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=_t){return this.component?this.component.multipleInstances?e:_t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rc(t){return t===_t?void 0:t}function Ac(t){return t.instantiationMode==="EAGER"}/**
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
 */class Pc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kc(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const Nc={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},Dc=ie.INFO,Oc={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},Mc=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Oc[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class us{constructor(e){this.name=e,this._logLevel=Dc,this._logHandler=Mc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const Lc=(t,e)=>e.some(n=>t instanceof n);let ar,lr;function Fc(){return ar||(ar=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jc(){return lr||(lr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ro=new WeakMap,Bi=new WeakMap,Ao=new WeakMap,Si=new WeakMap,ds=new WeakMap;function zc(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ot(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ro.set(n,t)}).catch(()=>{}),ds.set(e,t),e}function Wc(t){if(Bi.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Bi.set(t,e)}let $i={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ao.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ot(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bc(t){$i=t($i)}function $c(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Ti(this),e,...n);return Ao.set(i,e.sort?e.sort():[e]),ot(i)}:jc().includes(t)?function(...e){return t.apply(Ti(this),e),ot(Ro.get(this))}:function(...e){return ot(t.apply(Ti(this),e))}}function Uc(t){return typeof t=="function"?$c(t):(t instanceof IDBTransaction&&Wc(t),Lc(t,Fc())?new Proxy(t,$i):t)}function ot(t){if(t instanceof IDBRequest)return zc(t);if(Si.has(t))return Si.get(t);const e=Uc(t);return e!==t&&(Si.set(t,e),ds.set(e,t)),e}const Ti=t=>ds.get(t);function Po(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=ot(o);return i&&o.addEventListener("upgradeneeded",l=>{i(ot(o.result),l.oldVersion,l.newVersion,ot(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Hc=["get","getKey","getAll","getAllKeys","count"],Vc=["put","add","delete","clear"],xi=new Map;function cr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xi.get(e))return xi.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Vc.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Hc.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return xi.set(e,r),r}Bc(t=>({...t,get:(e,n,i)=>cr(e,n)||t.get(e,n,i),has:(e,n)=>!!cr(e,n)||t.has(e,n)}));/**
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
 */class Gc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qc(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function qc(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ui="@firebase/app",ur="0.10.13";/**
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
 */const Ze=new us("@firebase/app"),Yc="@firebase/app-compat",Kc="@firebase/analytics-compat",Qc="@firebase/analytics",Xc="@firebase/app-check-compat",Jc="@firebase/app-check",Zc="@firebase/auth",eu="@firebase/auth-compat",tu="@firebase/database",nu="@firebase/data-connect",iu="@firebase/database-compat",su="@firebase/functions",ru="@firebase/functions-compat",ou="@firebase/installations",au="@firebase/installations-compat",lu="@firebase/messaging",cu="@firebase/messaging-compat",uu="@firebase/performance",du="@firebase/performance-compat",hu="@firebase/remote-config",fu="@firebase/remote-config-compat",pu="@firebase/storage",gu="@firebase/storage-compat",_u="@firebase/firestore",mu="@firebase/vertexai-preview",yu="@firebase/firestore-compat",vu="firebase",bu="10.14.1";/**
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
 */const Hi="[DEFAULT]",wu={[Ui]:"fire-core",[Yc]:"fire-core-compat",[Qc]:"fire-analytics",[Kc]:"fire-analytics-compat",[Jc]:"fire-app-check",[Xc]:"fire-app-check-compat",[Zc]:"fire-auth",[eu]:"fire-auth-compat",[tu]:"fire-rtdb",[nu]:"fire-data-connect",[iu]:"fire-rtdb-compat",[su]:"fire-fn",[ru]:"fire-fn-compat",[ou]:"fire-iid",[au]:"fire-iid-compat",[lu]:"fire-fcm",[cu]:"fire-fcm-compat",[uu]:"fire-perf",[du]:"fire-perf-compat",[hu]:"fire-rc",[fu]:"fire-rc-compat",[pu]:"fire-gcs",[gu]:"fire-gcs-compat",[_u]:"fire-fst",[yu]:"fire-fst-compat",[mu]:"fire-vertex","fire-js":"fire-js",[vu]:"fire-js-all"};/**
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
 */const fn=new Map,Cu=new Map,Vi=new Map;function dr(t,e){try{t.container.addComponent(e)}catch(n){Ze.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ut(t){const e=t.name;if(Vi.has(e))return Ze.debug(`There were multiple attempts to register component ${e}.`),!1;Vi.set(e,t);for(const n of fn.values())dr(n,t);for(const n of Cu.values())dr(n,t);return!0}function xn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Iu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},at=new ri("app","Firebase",Iu);/**
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
 */class Eu{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw at.create("app-deleted",{appName:this._name})}}/**
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
 */const Su=bu;function No(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Hi,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw at.create("bad-app-name",{appName:String(s)});if(n||(n=Eo()),!n)throw at.create("no-options");const r=fn.get(s);if(r){if(Wn(n,r.options)&&Wn(i,r.config))return r;throw at.create("duplicate-app",{appName:s})}const o=new Pc(s);for(const l of Vi.values())o.addComponent(l);const a=new Eu(n,i,o);return fn.set(s,a),a}function hs(t=Hi){const e=fn.get(t);if(!e&&t===Hi&&Eo())return No();if(!e)throw at.create("no-app",{appName:t});return e}function Tu(){return Array.from(fn.values())}function Ye(t,e,n){var i;let s=(i=wu[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ze.warn(a.join(" "));return}ut(new Je(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const xu="firebase-heartbeat-database",ku=1,pn="firebase-heartbeat-store";let ki=null;function Do(){return ki||(ki=Po(xu,ku,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(pn)}catch(n){console.warn(n)}}}}).catch(t=>{throw at.create("idb-open",{originalErrorMessage:t.message})})),ki}async function Ru(t){try{const n=(await Do()).transaction(pn),i=await n.objectStore(pn).get(Oo(t));return await n.done,i}catch(e){if(e instanceof Tt)Ze.warn(e.message);else{const n=at.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ze.warn(n.message)}}}async function hr(t,e){try{const i=(await Do()).transaction(pn,"readwrite");await i.objectStore(pn).put(e,Oo(t)),await i.done}catch(n){if(n instanceof Tt)Ze.warn(n.message);else{const i=at.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ze.warn(i.message)}}}function Oo(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Au=1024,Pu=30*24*60*60*1e3;class Nu{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ou(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=fr();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Pu}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Ze.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fr(),{heartbeatsToSend:i,unsentEntries:s}=Du(this._heartbeatsCache.heartbeats),r=jn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Ze.warn(n),""}}}function fr(){return new Date().toISOString().substring(0,10)}function Du(t,e=Au){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),pr(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),pr(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Ou{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return To()?xo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ru(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return hr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return hr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function pr(t){return jn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Mu(t){ut(new Je("platform-logger",e=>new Gc(e),"PRIVATE")),ut(new Je("heartbeat",e=>new Nu(e),"PRIVATE")),Ye(Ui,ur,t),Ye(Ui,ur,"esm2017"),Ye("fire-js","")}Mu("");var gr={};const _r="@firebase/database",mr="1.0.8";/**
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
 */let Mo="";function Lu(t){Mo=t}/**
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
 */class Fu{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),_e(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:hn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class ju{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ke(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Lo=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Fu(e)}}catch{}return new ju},yt=Lo("localStorage"),zu=Lo("sessionStorage");/**
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
 */const Lt=new us("@firebase/database"),Wu=function(){let t=1;return function(){return t++}}(),Fo=function(t){const e=Ic(t),n=new Cc;n.update(e);const i=n.digest();return cs.encodeByteArray(i)},kn=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=kn.apply(null,i):typeof i=="object"?e+=_e(i):e+=i,e+=" "}return e};let on=null,yr=!0;const Bu=function(t,e){m(!0,"Can't turn on custom loggers persistently."),Lt.logLevel=ie.VERBOSE,on=Lt.log.bind(Lt)},Ce=function(...t){if(yr===!0&&(yr=!1,on===null&&zu.get("logging_enabled")===!0&&Bu()),on){const e=kn.apply(null,t);on(e)}},Rn=function(t){return function(...e){Ce(t,...e)}},Gi=function(...t){const e="FIREBASE INTERNAL ERROR: "+kn(...t);Lt.error(e)},et=function(...t){const e=`FIREBASE FATAL ERROR: ${kn(...t)}`;throw Lt.error(e),new Error(e)},Pe=function(...t){const e="FIREBASE WARNING: "+kn(...t);Lt.warn(e)},$u=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},fs=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Uu=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Wt="[MIN_NAME]",bt="[MAX_NAME]",xt=function(t,e){if(t===e)return 0;if(t===Wt||e===bt)return-1;if(e===Wt||t===bt)return 1;{const n=vr(t),i=vr(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Hu=function(t,e){return t===e?0:t<e?-1:1},Kt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+_e(e))},ps=function(t){if(typeof t!="object"||t===null)return _e(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=_e(e[i]),n+=":",n+=ps(t[e[i]]);return n+="}",n},jo=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Ie(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const zo=function(t){m(!fs(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},Vu=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Gu=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function qu(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const Yu=new RegExp("^-?(0*)\\d{1,10}$"),Ku=-2147483648,Qu=2147483647,vr=function(t){if(Yu.test(t)){const e=Number(t);if(e>=Ku&&e<=Qu)return e}return null},Gt=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Pe("Exception was thrown by user callback.",n),e},Math.floor(0))}},Xu=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},an=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Ju{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Pe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Zu{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pe(e)}}class Ln{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ln.OWNER="owner";/**
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
 */const gs="5",Wo="v",Bo="s",$o="r",Uo="f",Ho=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Vo="ls",Go="p",qi="ac",qo="websocket",Yo="long_polling";/**
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
 */class Ko{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=yt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&yt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ed(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Qo(t,e,n){m(typeof e=="string","typeof type must == string"),m(typeof n=="object","typeof params must == object");let i;if(e===qo)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Yo)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ed(t)&&(n.ns=t.namespace);const s=[];return Ie(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class td{constructor(){this.counters_={}}incrementCounter(e,n=1){Ke(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return nc(this.counters_)}}/**
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
 */const Ri={},Ai={};function _s(t){const e=t.toString();return Ri[e]||(Ri[e]=new td),Ri[e]}function nd(t,e){const n=t.toString();return Ai[n]||(Ai[n]=e()),Ai[n]}/**
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
 */class id{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Gt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const br="start",sd="close",rd="pLPCommand",od="pRTLPCB",Xo="id",Jo="pw",Zo="ser",ad="cb",ld="seg",cd="ts",ud="d",dd="dframe",ea=1870,ta=30,hd=ea-ta,fd=25e3,pd=3e4;class Ot{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Rn(e),this.stats_=_s(n),this.urlFn=l=>(this.appCheckToken&&(l[qi]=this.appCheckToken),Qo(n,Yo,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new id(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(pd)),Uu(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ms((...r)=>{const[o,a,l,c,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===br)this.id=a,this.password=l;else if(o===sd)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[br]="t",i[Zo]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[ad]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Wo]=gs,this.transportSessionId&&(i[Bo]=this.transportSessionId),this.lastSessionId&&(i[Vo]=this.lastSessionId),this.applicationId&&(i[Go]=this.applicationId),this.appCheckToken&&(i[qi]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ho.test(location.hostname)&&(i[$o]=Uo);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ot.forceAllow_=!0}static forceDisallow(){Ot.forceDisallow_=!0}static isAvailable(){return Ot.forceAllow_?!0:!Ot.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Vu()&&!Gu()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=wo(n),s=jo(i,hd);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[dd]="t",i[Xo]=e,i[Jo]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=_e(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ms{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Wu(),window[rd+this.uniqueCallbackIdentifier]=e,window[od+this.uniqueCallbackIdentifier]=n,this.myIFrame=ms.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ce("frame writing exception"),a.stack&&Ce(a.stack),Ce(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Xo]=this.myID,e[Jo]=this.myPW,e[Zo]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ta+i.length<=ea;){const o=this.pendingSegs.shift();i=i+"&"+ld+s+"="+o.seg+"&"+cd+s+"="+o.ts+"&"+ud+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(fd)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const gd=16384,_d=45e3;let Bn=null;typeof MozWebSocket<"u"?Bn=MozWebSocket:typeof WebSocket<"u"&&(Bn=WebSocket);class Ve{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Rn(this.connId),this.stats_=_s(n),this.connURL=Ve.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Wo]=gs,typeof location<"u"&&location.hostname&&Ho.test(location.hostname)&&(o[$o]=Uo),n&&(o[Bo]=n),i&&(o[Vo]=i),s&&(o[qi]=s),r&&(o[Go]=r),Qo(e,qo,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,yt.set("previous_websocket_failure",!0);try{let i;pc(),this.mySock=new Bn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ve.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Bn!==null&&!Ve.forceDisallow_}static previouslyFailed(){return yt.isInMemoryStorage||yt.get("previous_websocket_failure")===!0}markConnectionHealthy(){yt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=hn(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=jo(n,gd);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(_d))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ve.responsesRequiredToBeHealthy=2;Ve.healthyTimeout=3e4;/**
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
 */class gn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ot,Ve]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ve&&Ve.isAvailable();let i=n&&!Ve.previouslyFailed();if(e.webSocketOnly&&(n||Pe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ve];else{const s=this.transports_=[];for(const r of gn.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);gn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}gn.globalTransportInitialized_=!1;/**
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
 */const md=6e4,yd=5e3,vd=10*1024,bd=100*1024,Pi="t",wr="d",wd="s",Cr="r",Cd="e",Ir="o",Er="a",Sr="n",Tr="p",Id="h";class Ed{constructor(e,n,i,s,r,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Rn("c:"+this.id+":"),this.transportManager_=new gn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=an(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>bd?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>vd?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pi in e){const n=e[Pi];n===Er?this.upgradeIfSecondaryHealthy_():n===Cr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ir&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Kt("t",e),i=Kt("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Tr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Er,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Sr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Kt("t",e),i=Kt("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Kt(Pi,e);if(wr in e){const i=e[wr];if(n===Id){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Sr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===wd?this.onConnectionShutdown_(i):n===Cr?this.onReset_(i):n===Cd?Gi("Server Error: "+i):n===Ir?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gi("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),gs!==i&&Pe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),an(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(md))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):an(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(yd))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Tr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(yt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class na{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class ia{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class $n extends ia{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!So()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new $n}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const xr=32,kr=768;class Z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function q(){return new Z("")}function j(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function dt(t){return t.pieces_.length-t.pieceNum_}function se(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Z(t.pieces_,e)}function ys(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Sd(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function _n(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function sa(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Z(e,0)}function ue(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof Z)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new Z(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function Ae(t,e){const n=j(t),i=j(e);if(n===null)return e;if(n===i)return Ae(se(t),se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Td(t,e){const n=_n(t,0),i=_n(e,0);for(let s=0;s<n.length&&s<i.length;s++){const r=xt(n[s],i[s]);if(r!==0)return r}return n.length===i.length?0:n.length<i.length?-1:1}function vs(t,e){if(dt(t)!==dt(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function We(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(dt(t)>dt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class xd{constructor(e,n){this.errorPrefix_=n,this.parts_=_n(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ai(this.parts_[i]);ra(this)}}function kd(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ai(e),ra(t)}function Rd(t){const e=t.parts_.pop();t.byteLength_-=ai(e),t.parts_.length>0&&(t.byteLength_-=1)}function ra(t){if(t.byteLength_>kr)throw new Error(t.errorPrefix_+"has a key path longer than "+kr+" bytes ("+t.byteLength_+").");if(t.parts_.length>xr)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xr+") or object contains a cycle "+mt(t))}function mt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class bs extends ia{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new bs}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Qt=1e3,Ad=60*5*1e3,Rr=30*1e3,Pd=1.3,Nd=3e4,Dd="server_kill",Ar=3;class Xe extends na{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Xe.nextPersistentConnectionId_++,this.log_=Rn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Qt,this.maxReconnectDelay_=Ad,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");bs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$n.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(_e(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Tn,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Xe.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ke(e,"w")){const i=zt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Pe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||bc(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=vc(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+_e(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Gi("Unrecognized action received from server: "+_e(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Qt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Qt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Nd&&(this.reconnectDelay_=Qt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Pd)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Xe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(u){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new Ed(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,p=>{Pe(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Dd)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Pe(u),l())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],sr(this.interruptReasons_)&&(this.reconnectDelay_=Qt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>ps(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new Z(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ar&&(this.reconnectDelay_=Rr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ar&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Mo.replace(/\./g,"-")]=1,So()?e["framework.cordova"]=1:fc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$n.getInstance().currentlyOnline();return sr(this.interruptReasons_)&&e}}Xe.nextPersistentConnectionId_=0;Xe.nextConnectionId_=0;/**
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
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
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
 */class li{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new z(Wt,e),s=new z(Wt,n);return this.compare(i,s)!==0}minPost(){return z.MIN}}/**
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
 */let On;class oa extends li{static get __EMPTY_NODE(){return On}static set __EMPTY_NODE(e){On=e}compare(e,n){return xt(e.name,n.name)}isDefinedOn(e){throw Vt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(bt,On)}makePost(e,n){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,On)}toString(){return".key"}}const Ft=new oa;/**
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
 */class Mn{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class be{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??be.RED,this.left=s??Ne.EMPTY_NODE,this.right=r??Ne.EMPTY_NODE}copy(e,n,i,s,r){return new be(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ne.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Ne.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}be.RED=!0;be.BLACK=!1;class Od{copy(e,n,i,s,r){return this}insert(e,n,i){return new be(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ne{constructor(e,n=Ne.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ne(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,be.BLACK,null,null))}remove(e){return new Ne(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,be.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Mn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Mn(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Mn(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Mn(this.root_,null,this.comparator_,!0,e)}}Ne.EMPTY_NODE=new Od;/**
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
 */function Md(t,e){return xt(t.name,e.name)}function ws(t,e){return xt(t,e)}/**
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
 */let Yi;function Ld(t){Yi=t}const aa=function(t){return typeof t=="number"?"number:"+zo(t):"string:"+t},la=function(t){if(t.isLeafNode()){const e=t.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ke(e,".sv"),"Priority must be a string or number.")}else m(t===Yi||t.isEmpty(),"priority of unexpected type.");m(t===Yi||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Pr;class ve{constructor(e,n=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),la(this.priorityNode_)}static set __childrenNodeConstructor(e){Pr=e}static get __childrenNodeConstructor(){return Pr}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:j(e)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=j(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(m(i!==".priority"||dt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+aa(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=zo(this.value_):e+=this.value_,this.lazyHash_=Fo(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ve.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=ve.VALUE_TYPE_ORDER.indexOf(n),r=ve.VALUE_TYPE_ORDER.indexOf(i);return m(s>=0,"Unknown leaf type: "+n),m(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let ca,ua;function Fd(t){ca=t}function jd(t){ua=t}class zd extends li{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?xt(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(bt,new ve("[PRIORITY-POST]",ua))}makePost(e,n){const i=ca(e);return new z(n,new ve("[PRIORITY-POST]",i))}toString(){return".priority"}}const de=new zd;/**
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
 */const Wd=Math.log(2);class Bd{constructor(e){const n=r=>parseInt(Math.log(r)/Wd,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Un=function(t,e,n,i){t.sort(e);const s=function(l,c){const d=c-l;let u,h;if(d===0)return null;if(d===1)return u=t[l],h=n?n(u):u,new be(h,u.node,be.BLACK,null,null);{const p=parseInt(d/2,10)+l,_=s(l,p),w=s(p+1,c);return u=t[p],h=n?n(u):u,new be(h,u.node,be.BLACK,_,w)}},r=function(l){let c=null,d=null,u=t.length;const h=function(_,w){const k=u-_,$=u;u-=_;const Q=s(k+1,$),oe=t[k],N=n?n(oe):oe;p(new be(N,oe.node,w,null,Q))},p=function(_){c?(c.left=_,c=_):(d=_,c=_)};for(let _=0;_<l.count;++_){const w=l.nextBitIsOne(),k=Math.pow(2,l.count-(_+1));w?h(k,be.BLACK):(h(k,be.BLACK),h(k,be.RED))}return d},o=new Bd(t.length),a=r(o);return new Ne(i||e,a)};/**
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
 */let Ni;const Nt={};class Qe{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return m(Nt&&de,"ChildrenNode.ts has not been loaded"),Ni=Ni||new Qe({".priority":Nt},{".priority":de}),Ni}get(e){const n=zt(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ne?n:null}hasIndex(e){return Ke(this.indexSet_,e.toString())}addIndex(e,n){m(e!==Ft,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(z.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Un(i,e.getCompare()):a=Nt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Qe(d,c)}addToIndexes(e,n){const i=zn(this.indexes_,(s,r)=>{const o=zt(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),s===Nt)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(z.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Un(a,o.getCompare())}else return Nt;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new z(e.name,a))),l.insert(e,e.node)}});return new Qe(i,this.indexSet_)}removeFromIndexes(e,n){const i=zn(this.indexes_,s=>{if(s===Nt)return s;{const r=n.get(e.name);return r?s.remove(new z(e.name,r)):s}});return new Qe(i,this.indexSet_)}}/**
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
 */let Xt;class R{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&la(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Xt||(Xt=new R(new Ne(ws),null,Qe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xt}updatePriority(e){return this.children_.isEmpty()?this:new R(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Xt:n}}getChild(e){const n=j(e);return n===null?this:this.getImmediateChild(n).getChild(se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(m(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new z(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Xt:this.priorityNode_;return new R(s,o,r)}}updateChild(e,n){const i=j(e);if(i===null)return n;{m(j(e)!==".priority"||dt(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(se(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(de,(o,a)=>{n[o]=a.val(e),i++,r&&R.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+aa(this.getPriority().val())+":"),this.forEachChild(de,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Fo(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new z(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,z.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===An?-1:0}withIndex(e){if(e===Ft||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new R(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ft||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(de),s=n.getIterator(de);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ft?null:this.indexMap_.get(e.toString())}}R.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class $d extends R{constructor(){super(new Ne(ws),R.EMPTY_NODE,Qe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return R.EMPTY_NODE}isEmpty(){return!1}}const An=new $d;Object.defineProperties(z,{MIN:{value:new z(Wt,R.EMPTY_NODE)},MAX:{value:new z(bt,An)}});oa.__EMPTY_NODE=R.EMPTY_NODE;ve.__childrenNodeConstructor=R;Ld(An);jd(An);/**
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
 */const Ud=!0;function ge(t,e=null){if(t===null)return R.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ve(n,ge(e))}if(!(t instanceof Array)&&Ud){const n=[];let i=!1;if(Ie(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ge(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new z(o,l)))}}),n.length===0)return R.EMPTY_NODE;const r=Un(n,Md,o=>o.name,ws);if(i){const o=Un(n,de.getCompare());return new R(r,ge(e),new Qe({".priority":o},{".priority":de}))}else return new R(r,ge(e),Qe.Default)}else{let n=R.EMPTY_NODE;return Ie(t,(i,s)=>{if(Ke(t,i)&&i.substring(0,1)!=="."){const r=ge(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(ge(e))}}Fd(ge);/**
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
 */class Hd extends li{constructor(e){super(),this.indexPath_=e,m(!B(e)&&j(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?xt(e.name,n.name):r}makePost(e,n){const i=ge(e),s=R.EMPTY_NODE.updateChild(this.indexPath_,i);return new z(n,s)}maxPost(){const e=R.EMPTY_NODE.updateChild(this.indexPath_,An);return new z(bt,e)}toString(){return _n(this.indexPath_,0).join("/")}}/**
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
 */class Vd extends li{compare(e,n){const i=e.node.compareTo(n.node);return i===0?xt(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const i=ge(e);return new z(n,i)}toString(){return".value"}}const Gd=new Vd;/**
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
 */function da(t){return{type:"value",snapshotNode:t}}function Bt(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function mn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function yn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function qd(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Cs{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(mn(n,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Bt(n,i)):o.trackChildChange(yn(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(de,(s,r)=>{n.hasChild(s)||i.trackChildChange(mn(s,r))}),n.isLeafNode()||n.forEachChild(de,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(yn(s,r,o))}else i.trackChildChange(Bt(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?R.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class vn{constructor(e){this.indexedFilter_=new Cs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=vn.getStartPost_(e),this.endPost_=vn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new z(n,i))||(i=R.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=R.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(R.EMPTY_NODE);const r=this;return n.forEachChild(de,(o,a)=>{r.matches(new z(o,a))||(s=s.updateImmediateChild(o,R.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Yd{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new vn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new z(n,i))||(i=R.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=R.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=R.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(R.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,R.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,p)=>u(p,h)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const l=new z(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,l);if(d&&!i.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(yn(n,i,u)),a.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(mn(n,u));const w=a.updateImmediateChild(n,R.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Bt(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return i.isEmpty()?e:d&&o(c,l)>=0?(r!=null&&(r.trackChildChange(mn(c.name,c.node)),r.trackChildChange(Bt(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,R.EMPTY_NODE)):e}}/**
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
 */class Is{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=de}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Wt}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:bt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===de}copy(){const e=new Is;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Kd(t){return t.loadsAllData()?new Cs(t.getIndex()):t.hasLimit()?new Yd(t):new vn(t)}function Nr(t){const e={};if(t.isDefault())return e;let n;if(t.index_===de?n="$priority":t.index_===Gd?n="$value":t.index_===Ft?n="$key":(m(t.index_ instanceof Hd,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=_e(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=_e(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+_e(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=_e(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+_e(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Dr(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==de&&(e.i=t.index_.toString()),e}/**
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
 */class Hn extends na{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Rn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Hn.getListenId_(e,i),a={};this.listens_[o]=a;const l=Nr(e._queryParams);this.restRequest_(r+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),zt(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,n){const i=Hn.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Nr(e._queryParams),i=e._path.toString(),s=new Tn;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+wc(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=hn(a.responseText)}catch{Pe("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Pe("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Qd{constructor(){this.rootNode_=R.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Vn(){return{value:null,children:new Map}}function ha(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=j(e);t.children.has(i)||t.children.set(i,Vn());const s=t.children.get(i);e=se(e),ha(s,e,n)}}function Ki(t,e,n){t.value!==null?n(e,t.value):Xd(t,(i,s)=>{const r=new Z(e.toString()+"/"+i);Ki(s,r,n)})}function Xd(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class Jd{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ie(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const Or=10*1e3,Zd=30*1e3,eh=5*60*1e3;class th{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Jd(e);const i=Or+(Zd-Or)*Math.random();an(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Ie(e,(s,r)=>{r>0&&Ke(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),an(this.reportStats_.bind(this),Math.floor(Math.random()*2*eh))}}/**
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
 */var Ge;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ge||(Ge={}));function Es(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ss(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ts(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Gn{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Ge.ACK_USER_WRITE,this.source=Es()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Z(e));return new Gn(q(),n,this.revert)}}else return m(j(this.path)===e,"operationForChild called for unrelated child."),new Gn(se(this.path),this.affectedTree,this.revert)}}/**
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
 */class bn{constructor(e,n){this.source=e,this.path=n,this.type=Ge.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new bn(this.source,q()):new bn(this.source,se(this.path))}}/**
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
 */class wt{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Ge.OVERWRITE}operationForChild(e){return B(this.path)?new wt(this.source,q(),this.snap.getImmediateChild(e)):new wt(this.source,se(this.path),this.snap)}}/**
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
 */class $t{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Ge.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new Z(e));return n.isEmpty()?null:n.value?new wt(this.source,q(),n.value):new $t(this.source,q(),n)}else return m(j(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new $t(this.source,se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ht{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const n=j(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class nh{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ih(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(qd(o.childName,o.snapshotNode))}),Jt(t,s,"child_removed",e,i,n),Jt(t,s,"child_added",e,i,n),Jt(t,s,"child_moved",r,i,n),Jt(t,s,"child_changed",e,i,n),Jt(t,s,"value",e,i,n),s}function Jt(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>rh(t,a,l)),o.forEach(a=>{const l=sh(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function sh(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function rh(t,e,n){if(e.childName==null||n.childName==null)throw Vt("Should only compare child_ events.");const i=new z(e.childName,e.snapshotNode),s=new z(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function ci(t,e){return{eventCache:t,serverCache:e}}function ln(t,e,n,i){return ci(new ht(e,n,i),t.serverCache)}function fa(t,e,n,i){return ci(t.eventCache,new ht(e,n,i))}function qn(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ct(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Di;const oh=()=>(Di||(Di=new Ne(Hu)),Di);class ne{constructor(e,n=oh()){this.value=e,this.children=n}static fromObject(e){let n=new ne(null);return Ie(e,(i,s)=>{n=n.set(new Z(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:q(),value:this.value};if(B(e))return null;{const i=j(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(se(e),n);return r!=null?{path:ue(new Z(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=j(e),i=this.children.get(n);return i!==null?i.subtree(se(e)):new ne(null)}}set(e,n){if(B(e))return new ne(n,this.children);{const i=j(e),r=(this.children.get(i)||new ne(null)).set(se(e),n),o=this.children.insert(i,r);return new ne(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new ne(null):new ne(null,this.children);{const n=j(e),i=this.children.get(n);if(i){const s=i.remove(se(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new ne(null):new ne(this.value,r)}else return this}}get(e){if(B(e))return this.value;{const n=j(e),i=this.children.get(n);return i?i.get(se(e)):null}}setTree(e,n){if(B(e))return n;{const i=j(e),r=(this.children.get(i)||new ne(null)).setTree(se(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new ne(this.value,o)}}fold(e){return this.fold_(q(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(ue(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,q(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(B(e))return null;{const r=j(e),o=this.children.get(r);return o?o.findOnPath_(se(e),ue(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,q(),n)}foreachOnPath_(e,n,i){if(B(e))return this;{this.value&&i(n,this.value);const s=j(e),r=this.children.get(s);return r?r.foreachOnPath_(se(e),ue(n,s),i):new ne(null)}}foreach(e){this.foreach_(q(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(ue(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class qe{constructor(e){this.writeTree_=e}static empty(){return new qe(new ne(null))}}function cn(t,e,n){if(B(e))return new qe(new ne(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Ae(s,e);return r=r.updateChild(o,n),new qe(t.writeTree_.set(s,r))}else{const s=new ne(n),r=t.writeTree_.setTree(e,s);return new qe(r)}}}function Qi(t,e,n){let i=t;return Ie(n,(s,r)=>{i=cn(i,ue(e,s),r)}),i}function Mr(t,e){if(B(e))return qe.empty();{const n=t.writeTree_.setTree(e,new ne(null));return new qe(n)}}function Xi(t,e){return kt(t,e)!=null}function kt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ae(n.path,e)):null}function Lr(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(de,(i,s)=>{e.push(new z(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new z(i,s.value))}),e}function lt(t,e){if(B(e))return t;{const n=kt(t,e);return n!=null?new qe(new ne(n)):new qe(t.writeTree_.subtree(e))}}function Ji(t){return t.writeTree_.isEmpty()}function Ut(t,e){return pa(q(),t.writeTree_,e)}function pa(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=pa(ue(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(ue(t,".priority"),i)),n}}/**
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
 */function ui(t,e){return ya(e,t)}function ah(t,e,n,i,s){m(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=cn(t.visibleWrites,e,n)),t.lastWriteId=i}function lh(t,e,n,i){m(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=Qi(t.visibleWrites,e,n),t.lastWriteId=i}function ch(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function uh(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);m(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&dh(a,i.path)?s=!1:We(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return hh(t),!0;if(i.snap)t.visibleWrites=Mr(t.visibleWrites,i.path);else{const a=i.children;Ie(a,l=>{t.visibleWrites=Mr(t.visibleWrites,ue(i.path,l))})}return!0}else return!1}function dh(t,e){if(t.snap)return We(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&We(ue(t.path,n),e))return!0;return!1}function hh(t){t.visibleWrites=ga(t.allWrites,fh,q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function fh(t){return t.visible}function ga(t,e,n){let i=qe.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)We(n,o)?(a=Ae(n,o),i=cn(i,a,r.snap)):We(o,n)&&(a=Ae(o,n),i=cn(i,q(),r.snap.getChild(a)));else if(r.children){if(We(n,o))a=Ae(n,o),i=Qi(i,a,r.children);else if(We(o,n))if(a=Ae(o,n),B(a))i=Qi(i,q(),r.children);else{const l=zt(r.children,j(a));if(l){const c=l.getChild(se(a));i=cn(i,q(),c)}}}else throw Vt("WriteRecord should have .snap or .children")}}return i}function _a(t,e,n,i,s){if(!i&&!s){const r=kt(t.visibleWrites,e);if(r!=null)return r;{const o=lt(t.visibleWrites,e);if(Ji(o))return n;if(n==null&&!Xi(o,q()))return null;{const a=n||R.EMPTY_NODE;return Ut(o,a)}}}else{const r=lt(t.visibleWrites,e);if(!s&&Ji(r))return n;if(!s&&n==null&&!Xi(r,q()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(We(c.path,e)||We(e,c.path))},a=ga(t.allWrites,o,e),l=n||R.EMPTY_NODE;return Ut(a,l)}}}function ph(t,e,n){let i=R.EMPTY_NODE;const s=kt(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(de,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=lt(t.visibleWrites,e);return n.forEachChild(de,(o,a)=>{const l=Ut(lt(r,new Z(o)),a);i=i.updateImmediateChild(o,l)}),Lr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=lt(t.visibleWrites,e);return Lr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function gh(t,e,n,i,s){m(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=ue(e,n);if(Xi(t.visibleWrites,r))return null;{const o=lt(t.visibleWrites,r);return Ji(o)?s.getChild(n):Ut(o,s.getChild(n))}}function _h(t,e,n,i){const s=ue(e,n),r=kt(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=lt(t.visibleWrites,s);return Ut(o,i.getNode().getImmediateChild(n))}else return null}function mh(t,e){return kt(t.visibleWrites,e)}function yh(t,e,n,i,s,r,o){let a;const l=lt(t.visibleWrites,e),c=kt(l,q());if(c!=null)a=c;else if(n!=null)a=Ut(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=h.getNext();for(;p&&d.length<s;)u(p,i)!==0&&d.push(p),p=h.getNext();return d}else return[]}function vh(){return{visibleWrites:qe.empty(),allWrites:[],lastWriteId:-1}}function Yn(t,e,n,i){return _a(t.writeTree,t.treePath,e,n,i)}function xs(t,e){return ph(t.writeTree,t.treePath,e)}function Fr(t,e,n,i){return gh(t.writeTree,t.treePath,e,n,i)}function Kn(t,e){return mh(t.writeTree,ue(t.treePath,e))}function bh(t,e,n,i,s,r){return yh(t.writeTree,t.treePath,e,n,i,s,r)}function ks(t,e,n){return _h(t.writeTree,t.treePath,e,n)}function ma(t,e){return ya(ue(t.treePath,e),t.writeTree)}function ya(t,e){return{treePath:t,writeTree:e}}/**
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
 */class wh{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;m(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),m(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,yn(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,mn(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,Bt(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,yn(i,e.snapshotNode,s.oldSnap));else throw Vt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Ch{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const va=new Ch;class Rs{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new ht(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ks(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ct(this.viewCache_),r=bh(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function Ih(t){return{filter:t}}function Eh(t,e){m(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Sh(t,e,n,i,s){const r=new wh;let o,a;if(n.type===Ge.OVERWRITE){const c=n;c.source.fromUser?o=Zi(t,e,c.path,c.snap,i,s,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!B(c.path),o=Qn(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===Ge.MERGE){const c=n;c.source.fromUser?o=xh(t,e,c.path,c.children,i,s,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=es(t,e,c.path,c.children,i,s,a,r))}else if(n.type===Ge.ACK_USER_WRITE){const c=n;c.revert?o=Ah(t,e,c.path,i,s,r):o=kh(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===Ge.LISTEN_COMPLETE)o=Rh(t,e,n.path,i,r);else throw Vt("Unknown operation type: "+n.type);const l=r.getChanges();return Th(e,o,l),{viewCache:o,changes:l}}function Th(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=qn(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(da(qn(e)))}}function ba(t,e,n,i,s,r){const o=e.eventCache;if(Kn(i,n)!=null)return e;{let a,l;if(B(n))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ct(e),d=c instanceof R?c:R.EMPTY_NODE,u=xs(i,d);a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=Yn(i,Ct(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=j(n);if(c===".priority"){m(dt(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const u=Fr(i,n,d,l);u!=null?a=t.filter.updatePriority(d,u):a=o.getNode()}else{const d=se(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Fr(i,n,o.getNode(),l);h!=null?u=o.getNode().getImmediateChild(c).updateChild(d,h):u=o.getNode().getImmediateChild(c)}else u=ks(i,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,d,s,r):a=o.getNode()}}return ln(e,a,o.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function Qn(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(B(n))c=d.updateFullNode(l.getNode(),i,null);else if(d.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,i);c=d.updateFullNode(l.getNode(),p,null)}else{const p=j(n);if(!l.isCompleteForPath(n)&&dt(n)>1)return e;const _=se(n),k=l.getNode().getImmediateChild(p).updateChild(_,i);p===".priority"?c=d.updatePriority(l.getNode(),k):c=d.updateChild(l.getNode(),p,k,_,va,null)}const u=fa(e,c,l.isFullyInitialized()||B(n),d.filtersNodes()),h=new Rs(s,u,r);return ba(t,u,n,s,h,a)}function Zi(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const d=new Rs(s,e,r);if(B(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=ln(e,c,!0,t.filter.filtersNodes());else{const u=j(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=ln(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=se(n),p=a.getNode().getImmediateChild(u);let _;if(B(h))_=i;else{const w=d.getCompleteChild(u);w!=null?ys(h)===".priority"&&w.getChild(sa(h)).isEmpty()?_=w:_=w.updateChild(h,i):_=R.EMPTY_NODE}if(p.equals(_))l=e;else{const w=t.filter.updateChild(a.getNode(),u,_,h,d,o);l=ln(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function jr(t,e){return t.eventCache.isCompleteForChild(e)}function xh(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const d=ue(n,l);jr(e,j(d))&&(a=Zi(t,a,d,c,s,r,o))}),i.foreach((l,c)=>{const d=ue(n,l);jr(e,j(d))||(a=Zi(t,a,d,c,s,r,o))}),a}function zr(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function es(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;B(n)?c=i:c=new ne(null).setTree(n,i);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),_=zr(t,p,h);l=Qn(t,l,new Z(u),_,s,r,o,a)}}),c.children.inorderTraversal((u,h)=>{const p=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!p){const _=e.serverCache.getNode().getImmediateChild(u),w=zr(t,_,h);l=Qn(t,l,new Z(u),w,s,r,o,a)}}),l}function kh(t,e,n,i,s,r,o){if(Kn(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(B(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Qn(t,e,n,l.getNode().getChild(n),s,r,a,o);if(B(n)){let c=new ne(null);return l.getNode().forEachChild(Ft,(d,u)=>{c=c.set(new Z(d),u)}),es(t,e,n,c,s,r,a,o)}else return e}else{let c=new ne(null);return i.foreach((d,u)=>{const h=ue(n,d);l.isCompleteForPath(h)&&(c=c.set(d,l.getNode().getChild(h)))}),es(t,e,n,c,s,r,a,o)}}function Rh(t,e,n,i,s){const r=e.serverCache,o=fa(e,r.getNode(),r.isFullyInitialized()||B(n),r.isFiltered());return ba(t,o,n,i,va,s)}function Ah(t,e,n,i,s,r){let o;if(Kn(i,n)!=null)return e;{const a=new Rs(i,e,s),l=e.eventCache.getNode();let c;if(B(n)||j(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Yn(i,Ct(e));else{const u=e.serverCache.getNode();m(u instanceof R,"serverChildren would be complete if leaf node"),d=xs(i,u)}d=d,c=t.filter.updateFullNode(l,d,r)}else{const d=j(n);let u=ks(i,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=t.filter.updateChild(l,d,u,se(n),a,r):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,R.EMPTY_NODE,se(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Yn(i,Ct(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Kn(i,q())!=null,ln(e,c,o,t.filter.filtersNodes())}}/**
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
 */class Ph{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Cs(i.getIndex()),r=Kd(i);this.processor_=Ih(r);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(R.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(R.EMPTY_NODE,a.getNode(),null),d=new ht(l,o.isFullyInitialized(),s.filtersNodes()),u=new ht(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ci(u,d),this.eventGenerator_=new nh(this.query_)}get query(){return this.query_}}function Nh(t){return t.viewCache_.serverCache.getNode()}function Dh(t){return qn(t.viewCache_)}function Oh(t,e){const n=Ct(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild(j(e)).isEmpty())?n.getChild(e):null}function Wr(t){return t.eventRegistrations_.length===0}function Mh(t,e){t.eventRegistrations_.push(e)}function Br(t,e,n){const i=[];if(n){m(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function $r(t,e,n,i){e.type===Ge.MERGE&&e.source.queryId!==null&&(m(Ct(t.viewCache_),"We should always have a full cache before handling merges"),m(qn(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=Sh(t.processor_,s,e,n,i);return Eh(t.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,wa(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Lh(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(de,(r,o)=>{i.push(Bt(r,o))}),n.isFullyInitialized()&&i.push(da(n.getNode())),wa(t,i,n.getNode(),e)}function wa(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return ih(t.eventGenerator_,e,n,s)}/**
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
 */let Xn;class Ca{constructor(){this.views=new Map}}function Fh(t){m(!Xn,"__referenceConstructor has already been defined"),Xn=t}function jh(){return m(Xn,"Reference.ts has not been loaded"),Xn}function zh(t){return t.views.size===0}function As(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return m(r!=null,"SyncTree gave us an op for an invalid query."),$r(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat($r(o,e,n,i));return r}}function Ia(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Yn(n,s?i:null),l=!1;a?l=!0:i instanceof R?(a=xs(n,i),l=!1):(a=R.EMPTY_NODE,l=!1);const c=ci(new ht(a,l,!1),new ht(i,s,!1));return new Ph(e,c)}return o}function Wh(t,e,n,i,s,r){const o=Ia(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Mh(o,n),Lh(o,n)}function Bh(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=ft(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(Br(c,n,i)),Wr(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(Br(l,n,i)),Wr(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!ft(t)&&r.push(new(jh())(e._repo,e._path)),{removed:r,events:o}}function Ea(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ct(t,e){let n=null;for(const i of t.views.values())n=n||Oh(i,e);return n}function Sa(t,e){if(e._queryParams.loadsAllData())return di(t);{const i=e._queryIdentifier;return t.views.get(i)}}function Ta(t,e){return Sa(t,e)!=null}function ft(t){return di(t)!=null}function di(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Jn;function $h(t){m(!Jn,"__referenceConstructor has already been defined"),Jn=t}function Uh(){return m(Jn,"Reference.ts has not been loaded"),Jn}let Hh=1;class Ur{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ne(null),this.pendingWriteTree_=vh(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function xa(t,e,n,i,s){return ah(t.pendingWriteTree_,e,n,i,s),s?qt(t,new wt(Es(),e,n)):[]}function Vh(t,e,n,i){lh(t.pendingWriteTree_,e,n,i);const s=ne.fromObject(n);return qt(t,new $t(Es(),e,s))}function st(t,e,n=!1){const i=ch(t.pendingWriteTree_,e);if(uh(t.pendingWriteTree_,e)){let r=new ne(null);return i.snap!=null?r=r.set(q(),!0):Ie(i.children,o=>{r=r.set(new Z(o),!0)}),qt(t,new Gn(i.path,r,n))}else return[]}function Pn(t,e,n){return qt(t,new wt(Ss(),e,n))}function Gh(t,e,n){const i=ne.fromObject(n);return qt(t,new $t(Ss(),e,i))}function qh(t,e){return qt(t,new bn(Ss(),e))}function Yh(t,e,n){const i=Ns(t,n);if(i){const s=Ds(i),r=s.path,o=s.queryId,a=Ae(r,e),l=new bn(Ts(o),a);return Os(t,r,l)}else return[]}function Zn(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Ta(o,e))){const l=Bh(o,e,n,i);zh(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const d=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(h,p)=>ft(p));if(d&&!u){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const p=Xh(h);for(let _=0;_<p.length;++_){const w=p[_],k=w.query,$=Pa(t,w);t.listenProvider_.startListening(un(k),wn(t,k),$.hashFn,$.onComplete)}}}!u&&c.length>0&&!i&&(d?t.listenProvider_.stopListening(un(e),null):c.forEach(h=>{const p=t.queryToTagMap.get(hi(h));t.listenProvider_.stopListening(un(h),p)}))}Jh(t,c)}return a}function ka(t,e,n,i){const s=Ns(t,i);if(s!=null){const r=Ds(s),o=r.path,a=r.queryId,l=Ae(o,e),c=new wt(Ts(a),l,n);return Os(t,o,c)}else return[]}function Kh(t,e,n,i){const s=Ns(t,i);if(s){const r=Ds(s),o=r.path,a=r.queryId,l=Ae(o,e),c=ne.fromObject(n),d=new $t(Ts(a),l,c);return Os(t,o,d)}else return[]}function ts(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(h,p)=>{const _=Ae(h,s);r=r||ct(p,_),o=o||ft(p)});let a=t.syncPointTree_.get(s);a?(o=o||ft(a),r=r||ct(a,q())):(a=new Ca,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=R.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((p,_)=>{const w=ct(_,q());w&&(r=r.updateImmediateChild(p,w))}));const c=Ta(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=hi(e);m(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=Zh();t.queryToTagMap.set(h,p),t.tagToQueryMap.set(p,h)}const d=ui(t.pendingWriteTree_,s);let u=Wh(a,e,n,d,r,l);if(!c&&!o&&!i){const h=Sa(a,e);u=u.concat(ef(t,e,h))}return u}function Ps(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ae(o,e),c=ct(a,l);if(c)return c});return _a(s,e,r,n,!0)}function Qh(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const u=Ae(c,n);i=i||ct(d,u)});let s=t.syncPointTree_.get(n);s?i=i||ct(s,q()):(s=new Ca,t.syncPointTree_=t.syncPointTree_.set(n,s));const r=i!=null,o=r?new ht(i,!0,!1):null,a=ui(t.pendingWriteTree_,e._path),l=Ia(s,e,a,r?o.getNode():R.EMPTY_NODE,r);return Dh(l)}function qt(t,e){return Ra(e,t.syncPointTree_,null,ui(t.pendingWriteTree_,q()))}function Ra(t,e,n,i){if(B(t.path))return Aa(t,e,n,i);{const s=e.get(q());n==null&&s!=null&&(n=ct(s,q()));let r=[];const o=j(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=ma(i,o);r=r.concat(Ra(a,l,c,d))}return s&&(r=r.concat(As(s,t,i,n))),r}}function Aa(t,e,n,i){const s=e.get(q());n==null&&s!=null&&(n=ct(s,q()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=ma(i,o),d=t.operationForChild(o);d&&(r=r.concat(Aa(d,a,l,c)))}),s&&(r=r.concat(As(s,t,i,n))),r}function Pa(t,e){const n=e.query,i=wn(t,n);return{hashFn:()=>(Nh(e)||R.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Yh(t,n._path,i):qh(t,n._path);{const r=qu(s,n);return Zn(t,n,null,r)}}}}function wn(t,e){const n=hi(e);return t.queryToTagMap.get(n)}function hi(t){return t._path.toString()+"$"+t._queryIdentifier}function Ns(t,e){return t.tagToQueryMap.get(e)}function Ds(t){const e=t.indexOf("$");return m(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Z(t.substr(0,e))}}function Os(t,e,n){const i=t.syncPointTree_.get(e);m(i,"Missing sync point for query tag that we're tracking");const s=ui(t.pendingWriteTree_,e);return As(i,n,s,null)}function Xh(t){return t.fold((e,n,i)=>{if(n&&ft(n))return[di(n)];{let s=[];return n&&(s=Ea(n)),Ie(i,(r,o)=>{s=s.concat(o)}),s}})}function un(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Uh())(t._repo,t._path):t}function Jh(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=hi(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function Zh(){return Hh++}function ef(t,e,n){const i=e._path,s=wn(t,e),r=Pa(t,n),o=t.listenProvider_.startListening(un(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)m(!ft(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!B(c)&&d&&ft(d))return[di(d).query];{let h=[];return d&&(h=h.concat(Ea(d).map(p=>p.query))),Ie(u,(p,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(un(d),wn(t,d))}}return o}/**
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
 */class Ms{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ms(n)}node(){return this.node_}}class Ls{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ue(this.path_,e);return new Ls(this.syncTree_,n)}node(){return Ps(this.syncTree_,this.path_)}}const tf=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Hr=function(t,e,n){if(!t||typeof t!="object")return t;if(m(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return nf(t[".sv"],e,n);if(typeof t[".sv"]=="object")return sf(t[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},nf=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:m(!1,"Unexpected server value: "+t)}},sf=function(t,e,n){t.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&m(!1,"Unexpected increment value: "+i);const s=e.node();if(m(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Na=function(t,e,n,i){return Fs(e,new Ls(n,t),i)},Da=function(t,e,n){return Fs(t,new Ms(e),n)};function Fs(t,e,n){const i=t.getPriority().val(),s=Hr(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Hr(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new ve(a,ge(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ve(s))),o.forEachChild(de,(a,l)=>{const c=Fs(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class js{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function zs(t,e){let n=e instanceof Z?e:new Z(e),i=t,s=j(n);for(;s!==null;){const r=zt(i.node.children,s)||{children:{},childCount:0};i=new js(s,i,r),n=se(n),s=j(n)}return i}function Yt(t){return t.node.value}function Oa(t,e){t.node.value=e,ns(t)}function Ma(t){return t.node.childCount>0}function rf(t){return Yt(t)===void 0&&!Ma(t)}function fi(t,e){Ie(t.node.children,(n,i)=>{e(new js(n,t,i))})}function La(t,e,n,i){n&&!i&&e(t),fi(t,s=>{La(s,e,!0,i)}),n&&i&&e(t)}function of(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Nn(t){return new Z(t.parent===null?t.name:Nn(t.parent)+"/"+t.name)}function ns(t){t.parent!==null&&af(t.parent,t.name,t)}function af(t,e,n){const i=rf(n),s=Ke(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,ns(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,ns(t))}/**
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
 */const lf=/[\[\].#$\/\u0000-\u001F\u007F]/,cf=/[\[\].#$\u0000-\u001F\u007F]/,Oi=10*1024*1024,Ws=function(t){return typeof t=="string"&&t.length!==0&&!lf.test(t)},Fa=function(t){return typeof t=="string"&&t.length!==0&&!cf.test(t)},uf=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Fa(t)},df=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!fs(t)||t&&typeof t=="object"&&Ke(t,".sv")},ja=function(t,e,n,i){i&&e===void 0||pi(oi(t,"value"),e,n)},pi=function(t,e,n){const i=n instanceof Z?new xd(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+mt(i));if(typeof e=="function")throw new Error(t+"contains a function "+mt(i)+" with contents = "+e.toString());if(fs(e))throw new Error(t+"contains "+e.toString()+" "+mt(i));if(typeof e=="string"&&e.length>Oi/3&&ai(e)>Oi)throw new Error(t+"contains a string greater than "+Oi+" utf8 bytes "+mt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Ie(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ws(o)))throw new Error(t+" contains an invalid key ("+o+") "+mt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);kd(i,o),pi(t,a,i),Rd(i)}),s&&r)throw new Error(t+' contains ".value" child '+mt(i)+" in addition to actual children.")}},hf=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const r=_n(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Ws(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Td);let s=null;for(n=0;n<e.length;n++){if(i=e[n],s!==null&&We(s,i))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},ff=function(t,e,n,i){const s=oi(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];Ie(e,(o,a)=>{const l=new Z(o);if(pi(s,a,ue(n,l)),ys(l)===".priority"&&!df(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),hf(s,r)},za=function(t,e,n,i){if(!Fa(n))throw new Error(oi(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},pf=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),za(t,e,n)},Bs=function(t,e){if(j(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},gf=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ws(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!uf(n))throw new Error(oi(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class _f{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gi(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!vs(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Wa(t,e,n){gi(t,n),Ba(t,i=>vs(i,e))}function Be(t,e,n){gi(t,n),Ba(t,i=>We(i,e)||We(e,i))}function Ba(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(mf(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function mf(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();on&&Ce("event: "+n.toString()),Gt(i)}}}/**
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
 */const yf="repo_interrupt",vf=25;class bf{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new _f,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Vn(),this.transactionQueueTree_=new js,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function wf(t,e,n){if(t.stats_=_s(t.repoInfo_),t.forceRestClient_||Xu())t.server_=new Hn(t.repoInfo_,(i,s,r,o)=>{Vr(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Gr(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{_e(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Xe(t.repoInfo_,e,(i,s,r,o)=>{Vr(t,i,s,r,o)},i=>{Gr(t,i)},i=>{Cf(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=nd(t.repoInfo_,()=>new th(t.stats_,t.server_)),t.infoData_=new Qd,t.infoSyncTree_=new Ur({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Pn(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),$s(t,"connected",!1),t.serverSyncTree_=new Ur({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Be(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function $a(t){const n=t.infoData_.getNode(new Z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function _i(t){return tf({timestamp:$a(t)})}function Vr(t,e,n,i,s){t.dataUpdateCount++;const r=new Z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=zn(n,c=>ge(c));o=Kh(t.serverSyncTree_,r,l,s)}else{const l=ge(n);o=ka(t.serverSyncTree_,r,l,s)}else if(i){const l=zn(n,c=>ge(c));o=Gh(t.serverSyncTree_,r,l)}else{const l=ge(n);o=Pn(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ht(t,r)),Be(t.eventQueue_,a,o)}function Gr(t,e){$s(t,"connected",e),e===!1&&Tf(t)}function Cf(t,e){Ie(e,(n,i)=>{$s(t,n,i)})}function $s(t,e,n){const i=new Z("/.info/"+e),s=ge(n);t.infoData_.updateSnapshot(i,s);const r=Pn(t.infoSyncTree_,i,s);Be(t.eventQueue_,i,r)}function Us(t){return t.nextWriteId_++}function If(t,e,n){const i=Qh(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(s=>{const r=ge(s).withIndex(e._queryParams.getIndex());ts(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Pn(t.serverSyncTree_,e._path,r);else{const a=wn(t.serverSyncTree_,e);o=ka(t.serverSyncTree_,e._path,r,a)}return Be(t.eventQueue_,e._path,o),Zn(t.serverSyncTree_,e,n,null,!0),r},s=>(Dn(t,"get for query "+_e(e)+" failed: "+s),Promise.reject(new Error(s))))}function Ef(t,e,n,i,s){Dn(t,"set",{path:e.toString(),value:n,priority:i});const r=_i(t),o=ge(n,i),a=Ps(t.serverSyncTree_,e),l=Da(o,a,r),c=Us(t),d=xa(t.serverSyncTree_,e,l,c,!0);gi(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,p)=>{const _=h==="ok";_||Pe("set at "+e+" failed: "+h);const w=st(t.serverSyncTree_,c,!_);Be(t.eventQueue_,e,w),is(t,s,h,p)});const u=Vs(t,e);Ht(t,u),Be(t.eventQueue_,u,[])}function Sf(t,e,n,i){Dn(t,"update",{path:e.toString(),value:n});let s=!0;const r=_i(t),o={};if(Ie(n,(a,l)=>{s=!1,o[a]=Na(ue(e,a),ge(l),t.serverSyncTree_,r)}),s)Ce("update() called with empty data.  Don't do anything."),is(t,i,"ok",void 0);else{const a=Us(t),l=Vh(t.serverSyncTree_,e,o,a);gi(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const u=c==="ok";u||Pe("update at "+e+" failed: "+c);const h=st(t.serverSyncTree_,a,!u),p=h.length>0?Ht(t,e):e;Be(t.eventQueue_,p,h),is(t,i,c,d)}),Ie(n,c=>{const d=Vs(t,ue(e,c));Ht(t,d)}),Be(t.eventQueue_,e,[])}}function Tf(t){Dn(t,"onDisconnectEvents");const e=_i(t),n=Vn();Ki(t.onDisconnect_,q(),(s,r)=>{const o=Na(s,r,t.serverSyncTree_,e);ha(n,s,o)});let i=[];Ki(n,q(),(s,r)=>{i=i.concat(Pn(t.serverSyncTree_,s,r));const o=Vs(t,s);Ht(t,o)}),t.onDisconnect_=Vn(),Be(t.eventQueue_,q(),i)}function xf(t,e,n){let i;j(e._path)===".info"?i=ts(t.infoSyncTree_,e,n):i=ts(t.serverSyncTree_,e,n),Wa(t.eventQueue_,e._path,i)}function kf(t,e,n){let i;j(e._path)===".info"?i=Zn(t.infoSyncTree_,e,n):i=Zn(t.serverSyncTree_,e,n),Wa(t.eventQueue_,e._path,i)}function Rf(t){t.persistentConnection_&&t.persistentConnection_.interrupt(yf)}function Dn(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function is(t,e,n,i){e&&Gt(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Ua(t,e,n){return Ps(t.serverSyncTree_,e,n)||R.EMPTY_NODE}function Hs(t,e=t.transactionQueueTree_){if(e||mi(t,e),Yt(e)){const n=Va(t,e);m(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&Af(t,Nn(e),n)}else Ma(e)&&fi(e,n=>{Hs(t,n)})}function Af(t,e,n){const i=n.map(c=>c.currentWriteId),s=Ua(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const d=n[c];m(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=Ae(e,d.path);r=r.updateChild(u,d.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Dn(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(st(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&u.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();mi(t,zs(t.transactionQueueTree_,e)),Hs(t,t.transactionQueueTree_),Be(t.eventQueue_,e,d);for(let h=0;h<u.length;h++)Gt(u[h])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Pe("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Ht(t,e)}},o)}function Ht(t,e){const n=Ha(t,e),i=Nn(n),s=Va(t,n);return Pf(t,s,i),i}function Pf(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ae(n,l.path);let d=!1,u;if(m(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,s=s.concat(st(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=vf)d=!0,u="maxretry",s=s.concat(st(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Ua(t,l.path,o);l.currentInputSnapshot=h;const p=e[a].update(h.val());if(p!==void 0){pi("transaction failed: Data returned ",p,l.path);let _=ge(p);typeof p=="object"&&p!=null&&Ke(p,".priority")||(_=_.updatePriority(h.getPriority()));const k=l.currentWriteId,$=_i(t),Q=Da(_,h,$);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=Q,l.currentWriteId=Us(t),o.splice(o.indexOf(k),1),s=s.concat(xa(t.serverSyncTree_,l.path,Q,l.currentWriteId,l.applyLocally)),s=s.concat(st(t.serverSyncTree_,k,!0))}else d=!0,u="nodata",s=s.concat(st(t.serverSyncTree_,l.currentWriteId,!0))}Be(t.eventQueue_,n,s),s=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}mi(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Gt(i[a]);Hs(t,t.transactionQueueTree_)}function Ha(t,e){let n,i=t.transactionQueueTree_;for(n=j(e);n!==null&&Yt(i)===void 0;)i=zs(i,n),e=se(e),n=j(e);return i}function Va(t,e){const n=[];return Ga(t,e,n),n.sort((i,s)=>i.order-s.order),n}function Ga(t,e,n){const i=Yt(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);fi(e,s=>{Ga(t,s,n)})}function mi(t,e){const n=Yt(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,Oa(e,n.length>0?n:void 0)}fi(e,i=>{mi(t,i)})}function Vs(t,e){const n=Nn(Ha(t,e)),i=zs(t.transactionQueueTree_,e);return of(i,s=>{Mi(t,s)}),Mi(t,i),La(i,s=>{Mi(t,s)}),n}function Mi(t,e){const n=Yt(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(m(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(st(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Oa(e,void 0):n.length=r+1,Be(t.eventQueue_,Nn(e),s);for(let o=0;o<i.length;o++)Gt(i[o])}}/**
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
 */function Nf(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Df(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Pe(`Invalid query segment '${n}' in query '${t}'`)}return e}const qr=function(t,e){const n=Of(t),i=n.namespace;n.domain==="firebase.com"&&et(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&et("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||$u();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ko(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new Z(n.pathString)}},Of=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(s=Nf(t.substring(d,u)));const h=Df(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */const Yr="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Mf=function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Yr.charAt(n%64),n=Math.floor(n/64);m(n===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Yr.charAt(e[s]);return m(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class Lf{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+_e(this.snapshot.exportVal())}}class Ff{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class qa{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Gs{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return B(this._path)?null:ys(this._path)}get ref(){return new nt(this._repo,this._path)}get _queryIdentifier(){const e=Dr(this._queryParams),n=ps(e);return n==="{}"?"default":n}get _queryObject(){return Dr(this._queryParams)}isEqual(e){if(e=tt(e),!(e instanceof Gs))return!1;const n=this._repo===e._repo,i=vs(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Sd(this._path)}}class nt extends Gs{constructor(e,n){super(e,n,new Is,!1)}get parent(){const e=sa(this._path);return e===null?null:new nt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Cn{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Z(e),i=In(this.ref,e);return new Cn(this._node.getChild(n),i,de)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Cn(s,In(this.ref,i),de)))}hasChild(e){const n=new Z(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Se(t,e){return t=tt(t),t._checkNotDeleted("ref"),e!==void 0?In(t._root,e):t._root}function In(t,e){return t=tt(t),j(t._path)===null?pf("child","path",e):za("child","path",e),new nt(t._repo,ue(t._path,e))}function ss(t,e){t=tt(t),Bs("push",t._path),ja("push",e,t._path,!0);const n=$a(t._repo),i=Mf(n),s=In(t,i),r=In(t,i);let o;return o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Fn(t){return Bs("remove",t._path),rt(t,null)}function rt(t,e){t=tt(t),Bs("set",t._path),ja("set",e,t._path,!1);const n=new Tn;return Ef(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Ya(t,e){ff("update",e,t._path);const n=new Tn;return Sf(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Ka(t){t=tt(t);const e=new qa(()=>{}),n=new yi(e);return If(t._repo,t,n).then(i=>new Cn(i,new nt(t._repo,t._path),t._queryParams.getIndex()))}class yi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new Lf("value",this,new Cn(e.snapshotNode,new nt(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ff(this,e,n):null}matches(e){return e instanceof yi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function jf(t,e,n,i,s){const r=new qa(n,void 0),o=new yi(r);return xf(t._repo,t,o),()=>kf(t._repo,t,o)}function Zt(t,e,n,i){return jf(t,"value",e)}Fh(nt);$h(nt);/**
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
 */const zf="FIREBASE_DATABASE_EMULATOR_HOST",rs={};let Wf=!1;function Bf(t,e,n,i){t.repoInfo_=new Ko(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function $f(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||et("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=qr(r,s),a=o.repoInfo,l;typeof process<"u"&&gr&&(l=gr[zf]),l?(r=`http://${l}?ns=${a.namespace}`,o=qr(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new Zu(t.name,t.options,e);gf("Invalid Firebase Database URL",o),B(o.path)||et("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Hf(a,t,c,new Ju(t.name,n));return new Vf(d,t)}function Uf(t,e){const n=rs[e];(!n||n[t.key]!==t)&&et(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Rf(t),delete n[t.key]}function Hf(t,e,n,i){let s=rs[e.name];s||(s={},rs[e.name]=s);let r=s[t.toURLString()];return r&&et("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new bf(t,Wf,n,i),s[t.toURLString()]=r,r}class Vf{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(wf(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new nt(this._repo,q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Uf(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&et("Cannot call "+e+" on a deleted database.")}}function Gf(t=hs(),e){const n=xn(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=cc("database");i&&qf(n,...i)}return n}function qf(t,e,n,i={}){t=tt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&et("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&et('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Ln(Ln.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:uc(i.mockUserToken,t.app.options.projectId);r=new Ln(o)}Bf(s,e,n,r)}/**
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
 */function Yf(t){Lu(Su),ut(new Je("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return $f(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Ye(_r,mr,t),Ye(_r,mr,"esm2017")}Xe.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Xe.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Yf();var Kf="firebase",Qf="10.14.1";/**
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
 */Ye(Kf,Qf,"app");const Qa="@firebase/installations",qs="0.6.9";/**
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
 */const Xa=1e4,Ja=`w:${qs}`,Za="FIS_v2",Xf="https://firebaseinstallations.googleapis.com/v1",Jf=60*60*1e3,Zf="installations",ep="Installations";/**
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
 */const tp={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},It=new ri(Zf,ep,tp);function el(t){return t instanceof Tt&&t.code.includes("request-failed")}/**
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
 */function tl({projectId:t}){return`${Xf}/projects/${t}/installations`}function nl(t){return{token:t.token,requestStatus:2,expiresIn:ip(t.expiresIn),creationTime:Date.now()}}async function il(t,e){const i=(await e.json()).error;return It.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function sl({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function np(t,{refreshToken:e}){const n=sl(t);return n.append("Authorization",sp(e)),n}async function rl(t){const e=await t();return e.status>=500&&e.status<600?t():e}function ip(t){return Number(t.replace("s","000"))}function sp(t){return`${Za} ${t}`}/**
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
 */async function rp({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=tl(t),s=sl(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:Za,appId:t.appId,sdkVersion:Ja},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await rl(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:nl(c.authToken)}}else throw await il("Create Installation",l)}/**
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
 */function ol(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function op(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ap=/^[cdef][\w-]{21}$/,os="";function lp(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=cp(t);return ap.test(n)?n:os}catch{return os}}function cp(t){return op(t).substr(0,22)}/**
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
 */function vi(t){return`${t.appName}!${t.appId}`}/**
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
 */const al=new Map;function ll(t,e){const n=vi(t);cl(n,e),up(n,e)}function cl(t,e){const n=al.get(t);if(n)for(const i of n)i(e)}function up(t,e){const n=dp();n&&n.postMessage({key:t,fid:e}),hp()}let vt=null;function dp(){return!vt&&"BroadcastChannel"in self&&(vt=new BroadcastChannel("[Firebase] FID Change"),vt.onmessage=t=>{cl(t.data.key,t.data.fid)}),vt}function hp(){al.size===0&&vt&&(vt.close(),vt=null)}/**
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
 */const fp="firebase-installations-database",pp=1,Et="firebase-installations-store";let Li=null;function Ys(){return Li||(Li=Po(fp,pp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Et)}}})),Li}async function ei(t,e){const n=vi(t),s=(await Ys()).transaction(Et,"readwrite"),r=s.objectStore(Et),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&ll(t,e.fid),e}async function ul(t){const e=vi(t),i=(await Ys()).transaction(Et,"readwrite");await i.objectStore(Et).delete(e),await i.done}async function bi(t,e){const n=vi(t),s=(await Ys()).transaction(Et,"readwrite"),r=s.objectStore(Et),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&ll(t,a.fid),a}/**
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
 */async function Ks(t){let e;const n=await bi(t.appConfig,i=>{const s=gp(i),r=_p(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===os?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function gp(t){const e=t||{fid:lp(),registrationStatus:0};return dl(e)}function _p(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(It.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=mp(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:yp(t)}:{installationEntry:e}}async function mp(t,e){try{const n=await rp(t,e);return ei(t.appConfig,n)}catch(n){throw el(n)&&n.customData.serverCode===409?await ul(t.appConfig):await ei(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function yp(t){let e=await Kr(t.appConfig);for(;e.registrationStatus===1;)await ol(100),e=await Kr(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Ks(t);return i||n}return e}function Kr(t){return bi(t,e=>{if(!e)throw It.create("installation-not-found");return dl(e)})}function dl(t){return vp(t)?{fid:t.fid,registrationStatus:0}:t}function vp(t){return t.registrationStatus===1&&t.registrationTime+Xa<Date.now()}/**
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
 */async function bp({appConfig:t,heartbeatServiceProvider:e},n){const i=wp(t,n),s=np(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:Ja,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await rl(()=>fetch(i,a));if(l.ok){const c=await l.json();return nl(c)}else throw await il("Generate Auth Token",l)}function wp(t,{fid:e}){return`${tl(t)}/${e}/authTokens:generate`}/**
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
 */async function Qs(t,e=!1){let n;const i=await bi(t.appConfig,r=>{if(!hl(r))throw It.create("not-registered");const o=r.authToken;if(!e&&Ep(o))return r;if(o.requestStatus===1)return n=Cp(t,e),r;{if(!navigator.onLine)throw It.create("app-offline");const a=Tp(r);return n=Ip(t,a),a}});return n?await n:i.authToken}async function Cp(t,e){let n=await Qr(t.appConfig);for(;n.authToken.requestStatus===1;)await ol(100),n=await Qr(t.appConfig);const i=n.authToken;return i.requestStatus===0?Qs(t,e):i}function Qr(t){return bi(t,e=>{if(!hl(e))throw It.create("not-registered");const n=e.authToken;return xp(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Ip(t,e){try{const n=await bp(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await ei(t.appConfig,i),n}catch(n){if(el(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ul(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ei(t.appConfig,i)}throw n}}function hl(t){return t!==void 0&&t.registrationStatus===2}function Ep(t){return t.requestStatus===2&&!Sp(t)}function Sp(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Jf}function Tp(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function xp(t){return t.requestStatus===1&&t.requestTime+Xa<Date.now()}/**
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
 */async function kp(t){const e=t,{installationEntry:n,registrationPromise:i}=await Ks(e);return i?i.catch(console.error):Qs(e).catch(console.error),n.fid}/**
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
 */async function Rp(t,e=!1){const n=t;return await Ap(n),(await Qs(n,e)).token}async function Ap(t){const{registrationPromise:e}=await Ks(t);e&&await e}/**
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
 */function Pp(t){if(!t||!t.options)throw Fi("App Configuration");if(!t.name)throw Fi("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Fi(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Fi(t){return It.create("missing-app-config-values",{valueName:t})}/**
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
 */const fl="installations",Np="installations-internal",Dp=t=>{const e=t.getProvider("app").getImmediate(),n=Pp(e),i=xn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Op=t=>{const e=t.getProvider("app").getImmediate(),n=xn(e,fl).getImmediate();return{getId:()=>kp(n),getToken:s=>Rp(n,s)}};function Mp(){ut(new Je(fl,Dp,"PUBLIC")),ut(new Je(Np,Op,"PRIVATE"))}Mp();Ye(Qa,qs);Ye(Qa,qs,"esm2017");/**
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
 */const ti="analytics",Lp="firebase_id",Fp="origin",jp=60*1e3,zp="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Xs="https://www.googletagmanager.com/gtag/js";/**
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
 */const De=new us("@firebase/analytics");/**
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
 */const Wp={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Fe=new ri("analytics","Analytics",Wp);/**
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
 */function Bp(t){if(!t.startsWith(Xs)){const e=Fe.create("invalid-gtag-resource",{gtagURL:t});return De.warn(e.message),""}return t}function pl(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function $p(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Up(t,e){const n=$p("firebase-js-sdk-policy",{createScriptURL:Bp}),i=document.createElement("script"),s=`${Xs}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function Hp(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Vp(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await pl(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){De.error(a)}t("config",s,r)}async function Gp(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await pl(n);for(const l of o){const c=a.find(u=>u.measurementId===l),d=c&&e[c.appId];if(d)r.push(d);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){De.error(r)}}function qp(t,e,n,i){async function s(r,...o){try{if(r==="event"){const[a,l]=o;await Gp(t,e,n,a,l)}else if(r==="config"){const[a,l]=o;await Vp(t,e,n,i,a,l)}else if(r==="consent"){const[a,l]=o;t("consent",a,l)}else if(r==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){De.error(a)}}return s}function Yp(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=qp(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function Kp(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Xs)&&n.src.includes(t))return n;return null}/**
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
 */const Qp=30,Xp=1e3;class Jp{constructor(e={},n=Xp){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const gl=new Jp;function Zp(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function eg(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:Zp(i)},r=zp.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Fe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function tg(t,e=gl,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw Fe.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw Fe.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new sg;return setTimeout(async()=>{a.abort()},jp),_l({appId:i,apiKey:s,measurementId:r},o,a,e)}async function _l(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=gl){var r;const{appId:o,measurementId:a}=t;try{await ng(i,e)}catch(l){if(a)return De.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await eg(t);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!ig(c)){if(s.deleteThrottleMetadata(o),a)return De.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const d=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?or(n,s.intervalMillis,Qp):or(n,s.intervalMillis),u={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(o,u),De.debug(`Calling attemptFetch again in ${d} millis`),_l(t,u,i,s)}}function ng(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(Fe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ig(t){if(!(t instanceof Tt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class sg{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function rg(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}/**
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
 */async function og(){if(To())try{await xo()}catch(t){return De.warn(Fe.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return De.warn(Fe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ag(t,e,n,i,s,r,o){var a;const l=tg(t);l.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&De.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>De.error(p)),e.push(l);const c=og().then(p=>{if(p)return i.getId()}),[d,u]=await Promise.all([l,c]);Kp(r)||Up(r,d.measurementId),s("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[Fp]="firebase",h.update=!0,u!=null&&(h[Lp]=u),s("config",d.measurementId,h),d.measurementId}/**
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
 */class lg{constructor(e){this.app=e}_delete(){return delete dn[this.app.options.appId],Promise.resolve()}}let dn={},Xr=[];const Jr={};let ji="dataLayer",cg="gtag",Zr,ml,eo=!1;function ug(){const t=[];if(hc()&&t.push("This is a browser extension environment."),gc()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=Fe.create("invalid-analytics-context",{errorInfo:e});De.warn(n.message)}}function dg(t,e,n){ug();const i=t.options.appId;if(!i)throw Fe.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)De.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Fe.create("no-api-key");if(dn[i]!=null)throw Fe.create("already-exists",{id:i});if(!eo){Hp(ji);const{wrappedGtag:r,gtagCore:o}=Yp(dn,Xr,Jr,ji,cg);ml=r,Zr=o,eo=!0}return dn[i]=ag(t,Xr,Jr,e,Zr,ji,n),new lg(t)}function hg(t=hs()){t=tt(t);const e=xn(t,ti);return e.isInitialized()?e.getImmediate():fg(t)}function fg(t,e={}){const n=xn(t,ti);if(n.isInitialized()){const s=n.getImmediate();if(Wn(e,n.getOptions()))return s;throw Fe.create("already-initialized")}return n.initialize({options:e})}function pg(t,e,n,i){t=tt(t),rg(ml,dn[t.app.options.appId],e,n,i).catch(s=>De.error(s))}const to="@firebase/analytics",no="0.10.8";function gg(){ut(new Je(ti,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return dg(i,s,n)},"PUBLIC")),ut(new Je("analytics-internal",t,"PRIVATE")),Ye(to,no),Ye(to,no,"esm2017");function t(e){try{const n=e.getProvider(ti).getImmediate();return{logEvent:(i,s,r)=>pg(n,i,s,r)}}catch(n){throw Fe.create("interop-component-reg-failed",{reason:n})}}}gg();const _g={apiKey:"AIzaSyA2Ml7QMBlaUyKZyFu7j83I5Y2eM1COgkc",authDomain:"board7-4373c.firebaseapp.com",databaseURL:"https://board7-4373c-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"board7-4373c",storageBucket:"board7-4373c.firebasestorage.app",messagingSenderId:"298011654216",appId:"1:298011654216:web:084fb0f220aa7be5b4807d"},mg=()=>(console.log("🚀 Firebase: 배포환경 (board7-4373c) 사용"),_g),ni=mg(),yl=Tu().length===0?No(ni):hs();let yg=null;if(ni.measurementId&&typeof window<"u")try{yg=hg(yl),console.log("📊 Firebase Analytics 초기화 완료")}catch(t){console.warn("⚠️ Firebase Analytics 초기화 실패:",t)}const Te=Gf(yl),zi={mode:"production",projectId:ni.projectId,databaseURL:ni.databaseURL};console.log("🔥 Firebase 초기화 완료:",{환경:zi.mode,프로젝트:zi.projectId,데이터베이스:zi.databaseURL});function En(t){return typeof t=="number"&&!isNaN(t)&&isFinite(t)}function io(t){return En(t.x)&&En(t.y)}function vg(t){return En(t.width)&&En(t.height)&&t.width>0&&t.height>0}function so(t,e=0){return En(t)?t:(console.warn(`Invalid number value: ${t}, using default: ${e}`),e)}function ro(t){const e={};for(const[n,i]of Object.entries(t))n==="x"||n==="y"?e[n]=so(i,0):n==="width"||n==="height"?e[n]=so(i,100):e[n]=i;return e}const bg=()=>{if(typeof window<"u"){let t=localStorage.getItem("board7_session_id");return t||(t=`user_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,localStorage.setItem("board7_session_id",t)),t}return`server_${Date.now()}_${Math.random().toString(36).substr(2,9)}`},Sn=()=>bg(),wg=async(t,e,n=Sn())=>{try{const i=Se(Te,`textObjects/${t}`),r=(await Ka(i)).val();if(!r){const c={...e,id:t,lastModified:Date.now(),modifiedBy:n};return await rt(i,c),!0}const o=Date.now(),a=r.lastModified||0;if(e.lastModified&&e.lastModified<a)return console.warn(`LWW: Update rejected for object ${t}. Server timestamp: ${a}, Client timestamp: ${e.lastModified}`),!1;const l={...e,lastModified:o,modifiedBy:n};return await Ya(i,l),console.log(`LWW: Object ${t} updated successfully by ${n}`),!0}catch(i){return console.error("LWW update failed:",i),!1}},Cg=async(t,e,n=Sn())=>{try{const i=Se(Te,`imageObjects/${t}`),r=(await Ka(i)).val();if(!r){const c={...e,id:t,lastModified:Date.now(),modifiedBy:n};return await rt(i,c),!0}const o=Date.now(),a=r.lastModified||0;if(e.lastModified&&e.lastModified<a)return console.warn(`LWW: Update rejected for object ${t}. Server timestamp: ${a}, Client timestamp: ${e.lastModified}`),!1;const l={...e,lastModified:o,modifiedBy:n};return await Ya(i,l),console.log(`LWW: Object ${t} updated successfully by ${n}`),!0}catch(i){return console.error("LWW update failed:",i),!1}},Ig=async t=>{try{const e=ss(Se(Te,"drawObjects"));if(!e.key)throw new Error("Failed to generate object ID");const n={...t,id:e.key,lastModified:Date.now(),modifiedBy:Sn()};return await rt(e,n),e.key}catch(e){throw console.error("Error creating draw object:",e),e}},wi=St((t,e)=>{let n=[];return{textObjects:[],imageObjects:[],drawObjects:[],floorImage:null,settings:{admin:{autoToolSwitch:!0,gridVisible:!0,gridSize:16,gridSnapEnabled:!0,defaultFontSize:16,defaultBoxWidth:200,defaultBoxHeight:60,objectCreationPosition:{x:260,y:950},defaultCheckboxSettings:{checkedColor:"#22c55e",uncheckedColor:"#f3f4f6",checkedBackgroundColor:"#ffffff",uncheckedBackgroundColor:"#ffffff",checkedBackgroundOpacity:1,uncheckedBackgroundOpacity:1},excelPasteSettings:{startPosition:{x:100,y:100},cellWidth:120,cellHeight:40,fontSize:14,fontColor:"#000000",backgroundColor:"#ffffff",maxRows:50,maxCols:50}},view:{virtualKeyboardEnabled:!0,touchMode:!0}},isLoading:!1,initializeFirebaseListeners:()=>{e().cleanupFirebaseListeners(),t({isLoading:!0});let i=0;const s=5,r=()=>{i++,i>=s&&t({isLoading:!1})},o=Se(Te,"textObjects"),a=Zt(o,k=>{const $=k.val(),Q=$?Object.values($):[];t({textObjects:Q}),r()});n.push(a);const l=Se(Te,"imageObjects"),c=Zt(l,k=>{const $=k.val(),Q=$?Object.values($):[];t({imageObjects:Q}),r()});n.push(c);const d=Se(Te,"drawObjects"),u=Zt(d,k=>{const $=k.val(),Q=$?Object.values($):[];t({drawObjects:Q}),r()});n.push(u);const h=Se(Te,"floorImage"),p=Zt(h,k=>{const $=k.val();t({floorImage:$}),r()});n.push(p);const _=Se(Te,"settings"),w=Zt(_,k=>{const $=k.val();$&&t({settings:$}),r()});n.push(w)},cleanupFirebaseListeners:()=>{n.forEach(i=>i()),n=[]},addTextObject:async i=>{const s=Se(Te,"textObjects"),r=ss(s),o=Sn(),a={...i,id:r.key,lastModified:Date.now(),modifiedBy:o};return await rt(r,a),r.key},updateTextObject:async(i,s)=>{const r=ro(s);await wg(i,r)||console.warn(`Failed to update text object ${i} due to LWW conflict`)},deleteTextObject:async i=>{const s=Se(Te,`textObjects/${i}`);await Fn(s)},addImageObject:async i=>{const s=Se(Te,"imageObjects"),r=ss(s),o=Sn(),a={...i,id:r.key,lastModified:Date.now(),modifiedBy:o};return await rt(r,a),r.key},updateImageObject:async(i,s)=>{const r=ro(s);await Cg(i,r)||console.warn(`Failed to update image object ${i} due to LWW conflict`)},deleteImageObject:async i=>{const s=Se(Te,`imageObjects/${i}`);await Fn(s)},deleteDrawObject:async i=>{const s=Se(Te,`drawObjects/${i}`);await Fn(s)},setFloorImage:async i=>{const s=Se(Te,"floorImage");await rt(s,i)},updateSettings:async(i,s)=>{const r=Se(Te,`settings/${i}`),o=e().settings[i];await rt(r,{...o,...s})}}});St(t=>({gridEnabled:!1,gridSize:10,snapEnabled:!0,setGridEnabled:e=>t({gridEnabled:e}),setGridSize:e=>t({gridSize:e}),setSnapEnabled:e=>t({snapEnabled:e})}));const Eg=St(t=>({defaultCheckedColor:"#10b981",defaultUncheckedColor:"#f3f4f6",checkedBackgroundColor:"#dcfce7",uncheckedBackgroundColor:"#ffffff",checkedBackgroundOpacity:.8,uncheckedBackgroundOpacity:1,setDefaultCheckedColor:e=>t({defaultCheckedColor:e}),setDefaultUncheckedColor:e=>t({defaultUncheckedColor:e}),setCheckedBackgroundColor:e=>t({checkedBackgroundColor:e}),setUncheckedBackgroundColor:e=>t({uncheckedBackgroundColor:e}),setCheckedBackgroundOpacity:e=>t({checkedBackgroundOpacity:e}),setUncheckedBackgroundOpacity:e=>t({uncheckedBackgroundOpacity:e})})),gt=St((t,e)=>({selectedCellIds:new Set,isDragSelecting:!1,dragStartPoint:null,dragEndPoint:null,selectCell:(n,i=!1)=>{t(s=>{const r=new Set(s.selectedCellIds);return i?r.has(n)?r.delete(n):r.add(n):(r.clear(),r.add(n)),{selectedCellIds:r}})},selectCellsInRange:n=>{t(i=>{const s=new Set(i.selectedCellIds);return n.forEach(r=>s.add(r)),{selectedCellIds:s}})},deselectCell:n=>{t(i=>{const s=new Set(i.selectedCellIds);return s.delete(n),{selectedCellIds:s}})},clearSelection:()=>{t({selectedCellIds:new Set})},toggleCellSelection:n=>{t(i=>{const s=new Set(i.selectedCellIds);return s.has(n)?s.delete(n):s.add(n),{selectedCellIds:s}})},startDragSelection:(n,i)=>{t({isDragSelecting:!0,dragStartPoint:{x:n,y:i},dragEndPoint:{x:n,y:i}})},updateDragSelection:(n,i)=>{t(()=>({dragEndPoint:{x:n,y:i}}))},endDragSelection:()=>{t({isDragSelecting:!1,dragStartPoint:null,dragEndPoint:null})},isSelected:n=>e().selectedCellIds.has(n),getSelectedCount:()=>e().selectedCellIds.size,getSelectedCells:()=>Array.from(e().selectedCellIds)})),ii=(t,e)=>Math.round(t/e)*e,oo=(t,e,n)=>({x:ii(t,n),y:ii(e,n)}),Sg=(t,e,n,i=50,s=30)=>({width:Math.max(ii(t,n),i),height:Math.max(ii(e,n),s)}),Tg=({isViewPage:t=!1})=>{var Js;const e=S.useRef(!1),n=S.useRef(0),{textObjects:i,imageObjects:s,updateTextObject:r,updateImageObject:o,deleteTextObject:a,deleteImageObject:l,addTextObject:c,addImageObject:d,settings:u}=wi(),{selectedObjectId:h,hoveredObjectId:p,currentTool:_,setSelectedObjectId:w,setHoveredObjectId:k}=ls(),{defaultCheckedColor:$,defaultUncheckedColor:Q,checkedBackgroundColor:oe,uncheckedBackgroundColor:N,checkedBackgroundOpacity:re,uncheckedBackgroundOpacity:je}=Eg();Mt.useEffect(()=>{const f=navigator.userAgent.toLowerCase(),C=/iphone|ipad|ipod/.test(f),x=/safari/.test(f)&&!/chrome/.test(f);e.current=C||x},[]);const[X,xe]=S.useState({isDragging:!1,draggedObjectId:null,offset:{x:0,y:0},currentPosition:{x:0,y:0}}),[y,he]=S.useState({isResizing:!1,resizedObjectId:null,resizeHandle:null,startPosition:{x:0,y:0},startSize:{width:0,height:0},startObjectPosition:{x:0,y:0}}),[W,ke]=S.useState(null),[J,fe]=S.useState(""),[ee,G]=S.useState(0),[E,U]=S.useState(null),M=S.useCallback(f=>{ke(f.id),fe(f.text),r(f.id,{isEditing:!0}),t?(w(f.id),setTimeout(()=>{window.dispatchEvent(new CustomEvent("activateVirtualKeyboard",{detail:{objectId:f.id}}))},100)):setTimeout(()=>{const C=document.querySelector('textarea[data-editing="true"]');if(C){const x=f.text.length;C.setSelectionRange(x,x),C.focus()}},0)},[t,r,w]),g=S.useCallback(async()=>{W&&J!==void 0&&(await r(W,{text:J,isEditing:!1}),ke(null),fe(""))},[W,J,r]),v=S.useCallback(()=>{ke(null),fe("")},[]),b=S.useCallback(async()=>{if(!h)return;const f=i.find(x=>x.id===h);if(f){const x={...f,x:f.x+20,y:f.y+20,isEditing:!1};delete x.id,await c(x);return}const C=s.find(x=>x.id===h);if(C){const x={...C,x:C.x+20,y:C.y+20};delete x.id,await d(x);return}},[h,i,s,c,d]),A=S.useCallback(async()=>{var x,L;if(!h)return;const f=i.find(D=>D.id===h);if(f&&((x=f.permissions)!=null&&x.deletable)){await a(h),w(null);return}const C=s.find(D=>D.id===h);if(C&&((L=C.permissions)!=null&&L.deletable)){await l(h),w(null);return}},[h,i,s,a,l,w]),O=S.useCallback(async()=>{const{getSelectedCells:f}=gt.getState(),C=f();if(C.length!==0)try{for(const x of C){const L=i.find(D=>D.id===x);L&&L.cellType==="cell"&&await r(x,{text:""})}console.log(`${C.length}개 셀의 텍스트 내용이 삭제되었습니다.`)}catch(x){console.error("셀 텍스트 일괄 삭제 실패:",x)}},[i,r]),F=S.useCallback(async()=>{try{if(!navigator.clipboard||!navigator.clipboard.read){console.warn("클립보드 API가 지원되지 않습니다.");return}const f=await navigator.clipboard.read();for(const C of f){const x=C.types.filter(L=>L.startsWith("image/"));if(x.length>0){const L=x[0],D=await C.getType(L),Y=new FileReader;Y.onload=async Ee=>{var $e,Re;const me=($e=Ee.target)==null?void 0:$e.result,ae=((Re=u==null?void 0:u.admin)==null?void 0:Re.objectCreationPosition)??{x:260,y:950},le=new Image;le.onload=async()=>{try{const we=200*(le.naturalHeight/le.naturalWidth),I={x:ae.x,y:ae.y,width:200,height:we,src:me,permissions:{editable:!0,movable:!0,resizable:!0,deletable:!0},zIndex:Date.now(),locked:!1,visible:!0,opacity:1,maintainAspectRatio:!0,lastModified:Date.now()};await d(I),console.log("클립보드 이미지가 성공적으로 붙여넣어졌습니다.")}catch(pe){console.error("이미지 객체 생성 실패:",pe)}},le.onerror=()=>{console.error("클립보드 이미지 로드 실패")},le.src=me},Y.onerror=()=>{console.error("클립보드 이미지 읽기 실패")},Y.readAsDataURL(D);break}}}catch(f){console.log("클립보드에서 이미지를 읽을 수 없습니다:",f)}},[(Js=u==null?void 0:u.admin)==null?void 0:Js.objectCreationPosition,d]),H=S.useCallback(f=>{if(!W){if(f.ctrlKey&&f.key==="v"){try{f.preventDefault()}catch(C){console.debug("preventDefault failed in global keydown handler:",C)}F();return}if(!t){if(f.ctrlKey&&f.key==="d"){try{f.preventDefault()}catch(C){console.debug("preventDefault failed in global keydown handler:",C)}h&&b()}if(f.key==="Delete"){try{f.preventDefault()}catch(x){console.debug("preventDefault failed in global keydown handler:",x)}if(gt.getState().getSelectedCells().length>0){O();return}h&&A()}}}},[W,h,t,b,A,F]),Oe=S.useCallback((f,C)=>{var ae;n.current=f.timeStamp;const x=navigator.userAgent.toLowerCase(),L=/iphone/.test(x);if(f.stopPropagation(),(!L||f.pointerType!=="touch")&&f.preventDefault(),W){g();return}const D=i.find(le=>le.id===C)||s.find(le=>le.id===C);if(!D)return;if(w(C),k(null),!((ae=D.permissions)!=null&&ae.movable)){console.log("Object not movable, skipping drag:",C);return}if(L)setTimeout(()=>{try{f.currentTarget.setPointerCapture(f.pointerId)}catch{console.debug("iPhone pointer capture failed, continuing without capture")}},0);else try{f.currentTarget.setPointerCapture(f.pointerId)}catch{}const Y=f.currentTarget.getBoundingClientRect(),Ee=f.clientX-Y.left,me=f.clientY-Y.top;xe({isDragging:!0,draggedObjectId:C,offset:{x:Ee,y:me},currentPosition:{x:D.x,y:D.y}})},[W,g,i,s,w,k]),ce=S.useCallback((f,C,x)=>{var D;f.stopPropagation(),f.preventDefault();const L=i.find(Y=>Y.id===x)||s.find(Y=>Y.id===x);L&&(D=L.permissions)!=null&&D.resizable&&he({isResizing:!0,resizedObjectId:x,resizeHandle:C,startPosition:{x:f.clientX,y:f.clientY},startSize:{width:L.width,height:L.height},startObjectPosition:{x:L.x,y:L.y}})},[i,s]),Rt=f=>{var C,x,L,D;if(X.isDragging&&X.draggedObjectId){const Y=f.currentTarget.closest("[data-canvas-container]");if(!Y)return;const Ee=Y.getBoundingClientRect(),me=window.getComputedStyle(Y).transform;let ae=1;if(me&&me!=="none"){const te=me.match(/matrix\(([^)]+)\)/);te&&(ae=te[1].split(",").map(V=>parseFloat(V.trim()))[0])}const le=(f.clientX-Ee.left)/ae,$e=(f.clientY-Ee.top)/ae,Re={x:le-X.offset.x/ae,y:$e-X.offset.y/ae};let pe=Re;const ye=((C=u==null?void 0:u.admin)==null?void 0:C.gridSnapEnabled)??!1,we=((x=u==null?void 0:u.admin)==null?void 0:x.gridSize)??32;ye&&(pe=oo(Re.x,Re.y,we));const I=i.find(te=>te.id===X.draggedObjectId)||s.find(te=>te.id===X.draggedObjectId);let P=pe;!io(pe)&&I&&(P={x:I.x,y:I.y}),xe(te=>({...te,currentPosition:P}))}if(y.isResizing&&y.resizedObjectId){const Y=f.currentTarget.closest("[data-canvas-container]");if(!Y)return;const Ee=Y.getBoundingClientRect(),me=window.getComputedStyle(Y).transform;let ae=1;if(me&&me!=="none"){const Pt=me.match(/matrix\(([^)]+)\)/);Pt&&(ae=Pt[1].split(",").map(Sl=>parseFloat(Sl.trim()))[0])}const le=(f.clientX-Ee.left)/ae,$e=(f.clientY-Ee.top)/ae,Re=(y.startPosition.x-Ee.left)/ae,pe=(y.startPosition.y-Ee.top)/ae,ye=le-Re,we=$e-pe;let I=y.startSize.width,P=y.startSize.height,te=y.startObjectPosition.x,K=y.startObjectPosition.y;const V=s.find(Pt=>Pt.id===y.resizedObjectId),Le=(V==null?void 0:V.maintainAspectRatio)||!1,it=V?y.startSize.width/y.startSize.height:1;switch(y.resizeHandle){case"nw":I=Math.max(50,y.startSize.width-ye),P=Le?I/it:Math.max(30,y.startSize.height-we),te=y.startObjectPosition.x+(y.startSize.width-I),K=y.startObjectPosition.y+(y.startSize.height-P);break;case"ne":I=Math.max(50,y.startSize.width+ye),P=Le?I/it:Math.max(30,y.startSize.height-we),K=y.startObjectPosition.y+(y.startSize.height-P);break;case"sw":I=Math.max(50,y.startSize.width-ye),P=Le?I/it:Math.max(30,y.startSize.height+we),te=y.startObjectPosition.x+(y.startSize.width-I);break;case"se":I=Math.max(50,y.startSize.width+ye),P=Le?I/it:Math.max(30,y.startSize.height+we);break;case"n":Le?(P=Math.max(30,y.startSize.height-we),I=P*it,te=y.startObjectPosition.x+(y.startSize.width-I)/2):P=Math.max(30,y.startSize.height-we),K=y.startObjectPosition.y+(y.startSize.height-P);break;case"s":Le?(P=Math.max(30,y.startSize.height+we),I=P*it,te=y.startObjectPosition.x+(y.startSize.width-I)/2):P=Math.max(30,y.startSize.height+we);break;case"w":Le?(I=Math.max(50,y.startSize.width-ye),P=I/it,K=y.startObjectPosition.y+(y.startSize.height-P)/2):I=Math.max(50,y.startSize.width-ye),te=y.startObjectPosition.x+(y.startSize.width-I);break;case"e":Le?(I=Math.max(50,y.startSize.width+ye),P=I/it,K=y.startObjectPosition.y+(y.startSize.height-P)/2):I=Math.max(50,y.startSize.width+ye);break}let Ci={x:te,y:K},Ii={width:I,height:P};const El=((L=u==null?void 0:u.admin)==null?void 0:L.gridSnapEnabled)??!1,Zs=((D=u==null?void 0:u.admin)==null?void 0:D.gridSize)??32;El&&(Ci=oo(te,K,Zs),Ii=Sg(I,P,Zs)),io(Ci)&&vg(Ii)&&he(Pt=>({...Pt,currentSize:Ii,currentPosition:Ci}))}},Me=S.useCallback(f=>{try{f.currentTarget.releasePointerCapture(f.pointerId)}catch{}if(X.isDragging&&X.draggedObjectId){const C=X.currentPosition,x=i.find(D=>D.id===X.draggedObjectId),L=s.find(D=>D.id===X.draggedObjectId);x?r(X.draggedObjectId,{x:C.x,y:C.y}).catch(D=>{console.error("Failed to update text object position:",D)}):L&&o(X.draggedObjectId,{x:C.x,y:C.y}).catch(D=>{console.error("Failed to update image object position:",D)}),xe({isDragging:!1,draggedObjectId:null,offset:{x:0,y:0},currentPosition:{x:0,y:0}})}if(y.isResizing&&y.resizedObjectId){const C=y.currentSize,x=y.currentPosition;if(C&&x){const L=i.find(Y=>Y.id===y.resizedObjectId),D=s.find(Y=>Y.id===y.resizedObjectId);L?r(y.resizedObjectId,{x:x.x,y:x.y,width:C.width,height:C.height}).catch(Y=>{console.error("Failed to update text object size/position:",Y)}):D&&o(y.resizedObjectId,{x:x.x,y:x.y,width:C.width,height:C.height}).catch(Y=>{console.error("Failed to update image object size/position:",Y)})}he({isResizing:!1,resizedObjectId:null,resizeHandle:"",startPosition:{x:0,y:0},startSize:{width:0,height:0},startObjectPosition:{x:0,y:0}})}},[X,y,i,s,r,o]),pt=S.useCallback((f,C)=>{if(e.current&&f.timeStamp-n.current<300)return;const x=i.find(D=>D.id===C),L=(x==null?void 0:x.cellType)==="cell";if(!t&&_==="select"&&!L){const{clearSelection:D}=gt.getState();D(),w(C),f&&f.stopPropagation()}},[_,t,w,i]),At=S.useCallback(f=>{if(e.current&&f.timeStamp-n.current<300)return;if(f.currentTarget.focus(),W){g();return}if(!t&&_==="select"){if(f.target===f.currentTarget){w(null);const{clearSelection:x}=gt.getState();x()}}else if(t&&f.target===f.currentTarget){w(null);const{clearSelection:x}=gt.getState();x()}},[W,g,w,t,_]),wl=(f,C)=>{if(_!=="select")return;if(W&&W!==f.id&&g(),f.cellType==="cell"){const{selectCell:D,selectCellsInRange:Y,getSelectedCells:Ee}=gt.getState(),me=ee+1;if(G(me),E&&clearTimeout(E),me===2)M(f),G(0),U(null);else{const ae=C.ctrlKey||C.metaKey,le=C.shiftKey;if(le){const Re=Ee();if(Re.length>0){const pe=i.find(ye=>ye.id===Re[Re.length-1]);if(pe&&pe.cellType==="cell"&&pe.cellPosition&&f.cellPosition){const ye=Math.min(pe.cellPosition.row,f.cellPosition.row),we=Math.max(pe.cellPosition.row,f.cellPosition.row),I=Math.min(pe.cellPosition.col,f.cellPosition.col),P=Math.max(pe.cellPosition.col,f.cellPosition.col),te=[];i.forEach(K=>{if(K.cellType==="cell"&&K.cellPosition&&K.groupId===f.groupId){const{row:V,col:Le}=K.cellPosition;V>=ye&&V<=we&&Le>=I&&Le<=P&&te.push(K.id)}}),Y(te)}}else D(f.id,!1)}else ae?D(f.id,!0):D(f.id,!1);!ae&&!le&&w(null);const $e=setTimeout(()=>{G(0),U(null)},300);U($e)}return}const L=ee+1;if(G(L),E&&clearTimeout(E),L===3)M(f),G(0),U(null);else{pt(C,f.id);const D=setTimeout(()=>{G(0),U(null)},500);U(D)}},Cl=f=>{if(f.key==="Enter"&&!f.shiftKey){try{f.preventDefault()}catch(C){console.debug("preventDefault failed in keydown handler:",C)}g()}else if(f.key==="Escape"){try{f.preventDefault()}catch(C){console.debug("preventDefault failed in keydown handler:",C)}v()}},Il=f=>{try{f.preventDefault(),f.stopPropagation()}catch(C){console.debug("preventDefault failed in context menu handler:",C)}return!1};return T.jsx("div",{className:"absolute inset-0",tabIndex:0,onClick:At,onKeyDown:H,onPointerMove:Rt,onPointerUp:Me,onPointerLeave:Me,onContextMenu:Il,style:{touchAction:"none",pointerEvents:"auto",outline:"none"},children:[...i,...s].sort((f,C)=>(f.zIndex||0)-(C.zIndex||0)).map(f=>{var Re,pe,ye,we;const C="text"in f,x="src"in f,L=X.isDragging&&X.draggedObjectId===f.id,D=y.isResizing&&y.resizedObjectId===f.id,Y=L?X.currentPosition.x:D&&y.currentPosition?y.currentPosition.x:f.x,Ee=L?X.currentPosition.y:D&&y.currentPosition?y.currentPosition.y:f.y,me=D&&y.currentSize?y.currentSize.width:f.width,ae=D&&y.currentSize?y.currentSize.height:f.height,le=h===f.id,$e=p===f.id&&!t;if(C){const I=f,P=I.cellType==="cell"&&gt.getState().isSelected(f.id),te=I.boxStyle||{backgroundColor:"transparent",backgroundOpacity:1,borderColor:"#000000",borderWidth:0,borderRadius:0},K=I.textStyle||{color:"#000000",bold:!1,italic:!1,horizontalAlign:"left",verticalAlign:"middle",fontFamily:"Arial"};return T.jsxs("div",{className:`absolute select-none ${le?"ring-4 ring-blue-600":$e?"ring-2 ring-gray-400":""}`,style:{left:Y,top:Ee,width:me,height:ae,opacity:f.opacity,zIndex:f.zIndex||0,cursor:W===f.id?"text":t?"default":L?"grabbing":(Re=f.permissions)!=null&&Re.movable?"grab":"default",border:`${te.borderWidth}px solid ${te.borderColor}`,borderRadius:`${te.borderRadius}px`,transition:L?"none":"all 0.1s ease",pointerEvents:_==="pen"||_==="eraser"?"none":"auto"},onClick:V=>{L?pt(V,f.id):wl(I,V)},onPointerDown:V=>Oe(V,f.id),onMouseEnter:()=>k(f.id),onMouseLeave:()=>k(null),children:[T.jsx("div",{className:"absolute inset-0",style:{backgroundColor:P?"#9ca3af":I.hasCheckbox&&I.checkboxChecked?I.checkedBackgroundColor||oe:I.hasCheckbox&&!I.checkboxChecked?I.uncheckedBackgroundColor||N:te.backgroundColor,opacity:P?.15:I.hasCheckbox&&I.checkboxChecked?I.checkedBackgroundOpacity??re:I.hasCheckbox&&!I.checkboxChecked?I.uncheckedBackgroundOpacity??je:te.backgroundOpacity,borderRadius:`${te.borderRadius}px`}}),T.jsx("div",{className:"relative z-10 h-full flex items-center",style:{justifyContent:K.horizontalAlign==="left"?"flex-start":K.horizontalAlign==="center"?"center":"flex-end",alignItems:K.verticalAlign==="top"?"flex-start":K.verticalAlign==="middle"?"center":"flex-end",padding:"8px"},children:W===f.id?T.jsx("textarea",{value:J,onChange:V=>fe(V.target.value),onBlur:g,onKeyDown:Cl,autoFocus:!0,"data-editing":"true",className:"w-full h-full bg-transparent border-none outline-none resize-none",style:{color:K.color,fontFamily:K.fontFamily,fontSize:`${I.fontSize||16}px`,fontWeight:K.bold?"bold":"normal",fontStyle:K.italic?"italic":"normal",textAlign:K.horizontalAlign,lineHeight:"1.2",wordBreak:"break-word",cursor:"text"}}):T.jsxs("div",{style:{color:K.color,fontFamily:K.fontFamily,fontSize:`${I.fontSize||16}px`,fontWeight:K.bold?"bold":"normal",fontStyle:K.italic?"italic":"normal",textAlign:K.horizontalAlign,lineHeight:"1.2",wordBreak:"break-word",cursor:"pointer",display:"flex",alignItems:K.verticalAlign==="top"?"flex-start":K.verticalAlign==="middle"?"center":"flex-end",width:"100%",height:"100%"},children:[I.hasCheckbox&&T.jsx("div",{className:"checkbox-area",onClick:V=>{V.stopPropagation();const Le=!I.checkboxChecked;r(I.id,{checkboxChecked:Le,checkboxCheckedColor:I.checkboxCheckedColor||$,checkboxUncheckedColor:I.checkboxUncheckedColor||Q})},onPointerDown:V=>{V.stopPropagation()},style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"35px",height:"35px",backgroundColor:I.checkboxChecked?I.checkboxCheckedColor||$:I.checkboxUncheckedColor||Q,border:`2px solid ${I.checkboxChecked?I.checkboxCheckedColor||$:"#d1d5db"}`,borderRadius:"4px",marginRight:"8px",transition:"all 0.2s ease",userSelect:"none",flexShrink:0,pointerEvents:"auto",cursor:"pointer"},children:I.checkboxChecked&&T.jsx("svg",{className:"checkbox-area",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:T.jsx("path",{className:"checkbox-area",d:"M13.5 4.5L6 12L2.5 8.5",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),T.jsx("span",{style:{flex:1},children:I.text})]})}),le&&!t&&((pe=f.permissions)==null?void 0:pe.resizable)&&T.jsxs(T.Fragment,{children:[T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-nw-resize shadow-md",style:{left:-6,top:-6},onPointerDown:V=>ce(V,"nw",f.id)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-ne-resize shadow-md",style:{right:-6,top:-6},onPointerDown:V=>ce(V,"ne",f.id)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-sw-resize shadow-md",style:{left:-6,bottom:-6},onPointerDown:V=>ce(V,"sw",f.id)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-se-resize shadow-md",style:{right:-6,bottom:-6},onPointerDown:V=>ce(V,"se",f.id)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-n-resize shadow-md",style:{left:"50%",top:-6,transform:"translateX(-50%)"},onPointerDown:V=>ce(V,"n",f.id)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-s-resize shadow-md",style:{left:"50%",bottom:-6,transform:"translateX(-50%)"},onPointerDown:V=>ce(V,"s",f.id)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-w-resize shadow-md",style:{left:-6,top:"50%",transform:"translateY(-50%)"},onPointerDown:V=>ce(V,"w",f.id)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-e-resize shadow-md",style:{right:-6,top:"50%",transform:"translateY(-50%)"},onPointerDown:V=>ce(V,"e",f.id)})]})]},f.id)}else if(x){const I=f;return T.jsxs("div",{className:`absolute select-none ${le?"ring-4 ring-blue-600":$e?"ring-2 ring-gray-400":""}`,style:{left:Y,top:Ee,width:me,height:ae,opacity:f.opacity,zIndex:f.zIndex||0,cursor:W===f.id?"text":t?"default":L?"grabbing":(ye=f.permissions)!=null&&ye.movable?"grab":"default",transition:L?"none":"all 0.1s ease",pointerEvents:_==="pen"||_==="eraser"?"none":"auto"},onClick:P=>pt(P,f.id),onPointerDown:P=>Oe(P,f.id),onMouseEnter:()=>k(f.id),onMouseLeave:()=>k(null),children:[T.jsx("img",{src:I.src,alt:"",className:`w-full h-full ${I.maintainAspectRatio?"object-contain":"object-fill"}`,draggable:!1,style:{pointerEvents:"none"}}),le&&!t&&((we=f.permissions)==null?void 0:we.resizable)&&T.jsxs(T.Fragment,{children:[T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-nw-resize shadow-md",style:{left:-6,top:-6},onPointerDown:P=>ce(P,"nw",f.id)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-ne-resize shadow-md",style:{right:-6,top:-6},onPointerDown:P=>ce(P,"ne",f.id)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-sw-resize shadow-md",style:{left:-6,bottom:-6},onPointerDown:P=>ce(P,"sw",f.id)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-se-resize shadow-md",style:{right:-6,bottom:-6},onPointerDown:P=>ce(P,"se",f.id)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-n-resize shadow-md",style:{left:"50%",top:-6,transform:"translateX(-50%)"},onPointerDown:P=>ce(P,"n",f.id)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-s-resize shadow-md",style:{left:"50%",bottom:-6,transform:"translateX(-50%)"},onPointerDown:P=>ce(P,"s",f.id)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-w-resize shadow-md",style:{left:-6,top:"50%",transform:"translateY(-50%)"},onPointerDown:P=>ce(P,"w",f.id)}),T.jsx("div",{className:"absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-e-resize shadow-md",style:{right:-6,top:"50%",transform:"translateY(-50%)"},onPointerDown:P=>ce(P,"e",f.id)})]})]},f.id)}return null})})},xg=({isViewPage:t=!1})=>null;function ao(t,e,n,i=s=>s){return t*i(.5-e*(.5-n))}function kg(t){return[-t[0],-t[1]]}function He(t,e){return[t[0]+e[0],t[1]+e[1]]}function ze(t,e){return[t[0]-e[0],t[1]-e[1]]}function Ue(t,e){return[t[0]*e,t[1]*e]}function Rg(t,e){return[t[0]/e,t[1]/e]}function en(t){return[t[1],-t[0]]}function lo(t,e){return t[0]*e[0]+t[1]*e[1]}function Ag(t,e){return t[0]===e[0]&&t[1]===e[1]}function Pg(t){return Math.hypot(t[0],t[1])}function Ng(t){return t[0]*t[0]+t[1]*t[1]}function co(t,e){return Ng(ze(t,e))}function vl(t){return Rg(t,Pg(t))}function Dg(t,e){return Math.hypot(t[1]-e[1],t[0]-e[0])}function tn(t,e,n){let i=Math.sin(n),s=Math.cos(n),r=t[0]-e[0],o=t[1]-e[1],a=r*s-o*i,l=r*i+o*s;return[a+e[0],l+e[1]]}function as(t,e,n){return He(t,Ue(ze(e,t),n))}function uo(t,e,n){return He(t,Ue(e,n))}var{min:Dt,PI:Og}=Math,ho=.275,nn=Og+1e-4;function Mg(t,e={}){let{size:n=16,smoothing:i=.5,thinning:s=.5,simulatePressure:r=!0,easing:o=E=>E,start:a={},end:l={},last:c=!1}=e,{cap:d=!0,easing:u=E=>E*(2-E)}=a,{cap:h=!0,easing:p=E=>--E*E*E+1}=l;if(t.length===0||n<=0)return[];let _=t[t.length-1].runningLength,w=a.taper===!1?0:a.taper===!0?Math.max(n,_):a.taper,k=l.taper===!1?0:l.taper===!0?Math.max(n,_):l.taper,$=Math.pow(n*i,2),Q=[],oe=[],N=t.slice(0,10).reduce((E,U)=>{let M=U.pressure;if(r){let g=Dt(1,U.distance/n),v=Dt(1,1-g);M=Dt(1,E+(v-E)*(g*ho))}return(E+M)/2},t[0].pressure),re=ao(n,s,t[t.length-1].pressure,o),je,X=t[0].vector,xe=t[0].point,y=xe,he=xe,W=y,ke=!1;for(let E=0;E<t.length;E++){let{pressure:U}=t[E],{point:M,vector:g,distance:v,runningLength:b}=t[E];if(E<t.length-1&&_-b<3)continue;if(s){if(r){let Me=Dt(1,v/n),pt=Dt(1,1-Me);U=Dt(1,N+(pt-N)*(Me*ho))}re=ao(n,s,U,o)}else re=n/2;je===void 0&&(je=re);let A=b<w?u(b/w):1,O=_-b<k?p((_-b)/k):1;re=Math.max(.01,re*Math.min(A,O));let F=(E<t.length-1?t[E+1]:t[E]).vector,H=E<t.length-1?lo(g,F):1,Oe=lo(g,X)<0&&!ke,ce=H!==null&&H<0;if(Oe||ce){let Me=Ue(en(X),re);for(let pt=1/13,At=0;At<=1;At+=pt)he=tn(ze(M,Me),M,nn*At),Q.push(he),W=tn(He(M,Me),M,nn*-At),oe.push(W);xe=he,y=W,ce&&(ke=!0);continue}if(ke=!1,E===t.length-1){let Me=Ue(en(g),re);Q.push(ze(M,Me)),oe.push(He(M,Me));continue}let Rt=Ue(en(as(F,g,H)),re);he=ze(M,Rt),(E<=1||co(xe,he)>$)&&(Q.push(he),xe=he),W=He(M,Rt),(E<=1||co(y,W)>$)&&(oe.push(W),y=W),N=U,X=g}let J=t[0].point.slice(0,2),fe=t.length>1?t[t.length-1].point.slice(0,2):He(t[0].point,[1,1]),ee=[],G=[];if(t.length===1){if(!(w||k)||c){let E=uo(J,vl(en(ze(J,fe))),-(je||re)),U=[];for(let M=1/13,g=M;g<=1;g+=M)U.push(tn(E,J,nn*2*g));return U}}else{if(!(w||k&&t.length===1))if(d)for(let U=1/13,M=U;M<=1;M+=U){let g=tn(oe[0],J,nn*M);ee.push(g)}else{let U=ze(Q[0],oe[0]),M=Ue(U,.5),g=Ue(U,.51);ee.push(ze(J,M),ze(J,g),He(J,g),He(J,M))}let E=en(kg(t[t.length-1].vector));if(k||w&&t.length===1)G.push(fe);else if(h){let U=uo(fe,E,re);for(let M=1/29,g=M;g<1;g+=M)G.push(tn(U,fe,nn*3*g))}else G.push(He(fe,Ue(E,re)),He(fe,Ue(E,re*.99)),ze(fe,Ue(E,re*.99)),ze(fe,Ue(E,re)))}return Q.concat(G,oe.reverse(),ee)}function Lg(t,e={}){var n;let{streamline:i=.5,size:s=16,last:r=!1}=e;if(t.length===0)return[];let o=.15+(1-i)*.85,a=Array.isArray(t[0])?t:t.map(({x:p,y:_,pressure:w=.5})=>[p,_,w]);if(a.length===2){let p=a[1];a=a.slice(0,-1);for(let _=1;_<5;_++)a.push(as(a[0],p,_/4))}a.length===1&&(a=[...a,[...He(a[0],[1,1]),...a[0].slice(2)]]);let l=[{point:[a[0][0],a[0][1]],pressure:a[0][2]>=0?a[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],c=!1,d=0,u=l[0],h=a.length-1;for(let p=1;p<a.length;p++){let _=r&&p===h?a[p].slice(0,2):as(u.point,a[p],o);if(Ag(u.point,_))continue;let w=Dg(_,u.point);if(d+=w,p<h&&!c){if(d<s)continue;c=!0}u={point:_,pressure:a[p][2]>=0?a[p][2]:.5,vector:vl(ze(u.point,_)),distance:w,runningLength:d},l.push(u)}return l[0].vector=((n=l[1])==null?void 0:n.vector)||[0,0],l}function fo(t,e={}){return Mg(Lg(t,e),e)}const Fg=()=>{var M;const t=S.useRef(null),e=S.useRef(!1),n=S.useRef(null),i=S.useRef(!1),s=S.useRef(null),r=S.useRef(!1),o=S.useRef(null),{currentStroke:a,currentPressureStroke:l,isDrawing:c,penColor:d,penWidth:u,usePerfectFreehand:h,addPoint:p,startStroke:_,endStroke:w,clearCurrentStroke:k}=Zl(),{drawObjects:$,settings:Q,isLoading:oe}=wi(),{currentTool:N,setCurrentTool:re}=ls();S.useEffect(()=>{const g=navigator.userAgent.toLowerCase(),v=/iphone|ipad|ipod/.test(g),b=/safari/.test(g)&&!/chrome/.test(g);r.current=v||b},[]);const je=S.useCallback((g="mouse")=>{const v={size:u*2,thinning:.5,smoothing:.5,streamline:.5,easing:b=>b,start:{taper:0,easing:b=>b,cap:!0},end:{taper:100,easing:b=>b,cap:!0}};return g==="pen"?{...v,thinning:.7,smoothing:.3,streamline:.3}:g==="touch"?{...v,thinning:.4,smoothing:.7,streamline:.7,size:u*2.5}:v},[u]),X=S.useCallback((g,v,b)=>{if(v.length<2)return;g.save(),g.fillStyle=b,g.beginPath();const[A]=v;g.moveTo(A[0],A[1]);for(let O=1;O<v.length;O++){const[F,H]=v[O],[Oe,ce]=v[O-1],Rt=(Oe+F)/2,Me=(ce+H)/2;g.quadraticCurveTo(Oe,ce,Rt,Me)}g.closePath(),g.fill(),g.restore()},[]),xe=S.useCallback(()=>{var g;n.current&&(clearTimeout(n.current),n.current=null),(g=Q==null?void 0:Q.admin)!=null&&g.autoToolSwitch&&(n.current=setTimeout(()=>{re("select"),n.current=null},2e3))},[(M=Q==null?void 0:Q.admin)==null?void 0:M.autoToolSwitch,re]),y=S.useCallback(()=>{const g=t.current;if(!g)return;const v=g.parentElement;if(!v)return;const b=v.offsetWidth,A=v.offsetHeight;(g.width!==b||g.height!==A)&&(g.width=b,g.height=A,i.current||(i.current=!0,requestAnimationFrame(()=>{i.current&&!oe&&(J(),i.current=!1)})))},[oe]),he=S.useCallback((g,v)=>{const b=t.current;if(!b)return{x:0,y:0};const A=b.getBoundingClientRect(),O=(g-A.left)/A.width*2160,F=(v-A.top)/A.height*3840;return{x:O,y:F}},[]),W=S.useCallback((g,v)=>{const b=t.current;return b?{x:g/2160*b.width,y:v/3840*b.height}:{x:0,y:0}},[]),ke=S.useCallback(async(g,v)=>{for(const A of $)for(let O=0;O<A.points.length;O+=2)if(Math.sqrt((A.points[O]-g)**2+(A.points[O+1]-v)**2)<=20)try{const H=Se(Te,`drawObjects/${A.id}`);await Fn(H);return}catch(H){console.error("❌ DrawLayer: Failed to erase stroke:",H)}},[$]),J=S.useCallback(()=>{const g=t.current;if(!g)return;const v=g.getContext("2d");if(v&&!(g.width===0||g.height===0)&&(v.clearRect(0,0,g.width,g.height),v.lineCap="round",v.lineJoin="round",$.forEach(b=>{var A;if(!(b.points.length<4))if(h&&b.usePerfectFreehand)try{const O=[];for(let F=0;F<b.points.length;F+=2){const H=W(b.points[F],b.points[F+1]);O.push([H.x,H.y,((A=b.pressure)==null?void 0:A[F/2])||.5])}if(O.length>=2){const F=je(b.inputType||"mouse");F.size=b.width*2;const H=fo(O,F);X(v,H,b.color)}}catch(O){console.warn("🚫 perfect-freehand 렌더링 실패, 기본 렌더링으로 대체:",O),v.beginPath(),v.strokeStyle=b.color,v.lineWidth=b.width;const F=W(b.points[0],b.points[1]);v.moveTo(F.x,F.y);for(let H=2;H<b.points.length;H+=2){const Oe=W(b.points[H],b.points[H+1]);v.lineTo(Oe.x,Oe.y)}v.stroke()}else{v.beginPath(),v.strokeStyle=b.color,v.lineWidth=b.width;const O=W(b.points[0],b.points[1]);v.moveTo(O.x,O.y);for(let F=2;F<b.points.length;F+=2){const H=W(b.points[F],b.points[F+1]);v.lineTo(H.x,H.y)}v.stroke()}}),c&&a.length>=4))if(h&&l.length>=2)try{const b=l.map(H=>{const Oe=W(H.x,H.y);return[Oe.x,Oe.y,H.pressure||.5]}),A=s.current&&r.current?"touch":"mouse",O=je(A),F=fo(b,O);X(v,F,d)}catch(b){console.warn("🚫 현재 스트로크 perfect-freehand 렌더링 실패:",b),v.beginPath(),v.strokeStyle=d,v.lineWidth=u;const A=W(a[0],a[1]);v.moveTo(A.x,A.y);for(let O=2;O<a.length;O+=2){const F=W(a[O],a[O+1]);v.lineTo(F.x,F.y)}v.stroke()}else{v.beginPath(),v.strokeStyle=d,v.lineWidth=u;const b=W(a[0],a[1]);v.moveTo(b.x,b.y);for(let A=2;A<a.length;A+=2){const O=W(a[A],a[A+1]);v.lineTo(O.x,O.y)}v.stroke()}},[$,a,l,c,d,u,h,W,oe,je,X]),fe=S.useCallback(g=>{const v=navigator.userAgent.toLowerCase(),b=/iphone/.test(v),A=/ipad/.test(v);if(r.current){if(b)return!0;if(A&&(N==="eraser"&&s.current!==null&&g.pointerType==="touch"||N==="pen"&&g.pointerType!=="pen"&&g.pointerType!=="touch"&&g.pointerType!=="mouse"))return!1}return!0},[N]),ee=S.useCallback(g=>{if(N!=="pen"&&N!=="eraser"||!fe(g))return;const v=navigator.userAgent.toLowerCase(),b=/iphone/.test(v);if(!b&&s.current!==null&&s.current!==g.pointerId)return;(!b||g.pointerType!=="touch")&&g.preventDefault(),g.stopPropagation(),s.current=g.pointerId,n.current&&(clearTimeout(n.current),n.current=null),o.current&&(clearTimeout(o.current),o.current=null);const A=he(g.clientX,g.clientY);if(N==="pen"){_();const O=g.pressure||(b?.7:.5),F=g.tiltX||0,H=g.tiltY||0;p(A.x,A.y,O,F,H),J()}else N==="eraser"&&(e.current=!0,ke(A.x,A.y))},[N,he,_,p,J,ke,fe]),G=S.useCallback(g=>{const v=navigator.userAgent.toLowerCase();if(!(!/iphone/.test(v)&&s.current!==g.pointerId)){if(N==="pen"&&c){g.preventDefault();const A=he(g.clientX,g.clientY),O=g.pressure||.5,F=g.tiltX||0,H=g.tiltY||0;p(A.x,A.y,O,F,H),J()}else if(N==="eraser"&&e.current){g.preventDefault();const A=he(g.clientX,g.clientY);ke(A.x,A.y)}}},[c,N,he,p,J,ke]),E=S.useCallback(async g=>{const v=navigator.userAgent.toLowerCase();if(!(!/iphone/.test(v)&&s.current!==g.pointerId)){if(c&&N==="pen"){if(w(),a.length>=4){const A=g.pointerType==="pen"?"pen":g.pointerType==="touch"?"touch":"mouse",O=l.map(H=>H.pressure||.5),F={points:a,color:d,width:u,createdAt:new Date().toISOString(),lastModified:Date.now(),usePerfectFreehand:h,pressure:O,inputType:A};try{await Ig(F)}catch(H){console.error("❌ DrawLayer: Failed to save stroke:",H)}}k(),J(),xe()}N==="eraser"&&e.current&&(e.current=!1,xe()),s.current=null,r.current&&g.pointerType==="touch"&&(o.current=setTimeout(()=>{o.current=null},100))}},[c,N,a,w,d,u,k,J,xe]),U=S.useCallback(g=>{s.current===g.pointerId&&(c&&(w(),k(),J()),e.current&&(e.current=!1),s.current=null)},[c,w,k,J]);return S.useEffect(()=>{y();const g=()=>{setTimeout(y,100)};return window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[y]),S.useEffect(()=>{if(!oe){const g=setTimeout(()=>{J()},100);return()=>clearTimeout(g)}},[oe]),S.useEffect(()=>{oe||J()},[$,oe]),S.useEffect(()=>{(N==="pen"||N==="eraser")&&n.current&&(clearTimeout(n.current),n.current=null)},[N]),S.useEffect(()=>{c&&J()},[a,c]),S.useEffect(()=>()=>{n.current&&(clearTimeout(n.current),n.current=null),o.current&&(clearTimeout(o.current),o.current=null),s.current=null},[]),T.jsx("canvas",{ref:t,className:"absolute top-0 left-0 w-full h-full",onPointerDown:N==="pen"||N==="eraser"?ee:void 0,onPointerMove:N==="pen"||N==="eraser"?G:void 0,onPointerUp:N==="pen"||N==="eraser"?E:void 0,onPointerCancel:N==="pen"||N==="eraser"?U:void 0,onPointerLeave:N==="pen"||N==="eraser"?E:void 0,onContextMenu:g=>g.preventDefault(),style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",touchAction:"none",cursor:N==="pen"?"crosshair":N==="eraser"?"grab":"default",pointerEvents:N==="pen"||N==="eraser"?"auto":"none",WebkitTouchCallout:"none",WebkitUserSelect:"none",WebkitTapHighlightColor:"transparent"}})},bl=Mt.memo(({gridEnabled:t,gridSize:e,canvasWidth:n,canvasHeight:i})=>{if(!t)return null;const s=[],r=[];for(let o=0;o<=n;o+=e)s.push(T.jsx("line",{x1:o,y1:0,x2:o,y2:i,stroke:"#e5e7eb",strokeWidth:1,opacity:.5},`v-${o}`));for(let o=0;o<=i;o+=e)r.push(T.jsx("line",{x1:0,y1:o,x2:n,y2:o,stroke:"#e5e7eb",strokeWidth:1,opacity:.5},`h-${o}`));return T.jsxs("svg",{className:"absolute inset-0 pointer-events-none",width:n,height:i,style:{zIndex:1},children:[s,r]})});bl.displayName="GridLayer";const jg=t=>t.split(`
`).filter(e=>e.trim()).map(e=>e.split("	")),zg=()=>{var h;const{settings:t}=wi(),[e,n]=Mt.useState(""),[i,s]=Mt.useState(!1);if(Mt.useEffect(()=>{const p=_=>{n(_.detail.data),s(_.detail.show)};return window.addEventListener("excel-preview-update",p),()=>{window.removeEventListener("excel-preview-update",p)}},[]),!i||!e.trim())return null;const r={excelPasteSettings:((h=t==null?void 0:t.admin)==null?void 0:h.excelPasteSettings)??{startPosition:{x:100,y:100},cellWidth:120,cellHeight:40,fontSize:14}},o=jg(e),{startPosition:a,cellWidth:l,cellHeight:c}=r.excelPasteSettings,d=Math.max(...o.map(p=>p.length))*l,u=o.length*c;return T.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none",zIndex:15},children:[T.jsx("div",{style:{position:"absolute",left:a.x,top:a.y,width:d,height:u,border:"3px dashed #fbbf24",backgroundColor:"rgba(251, 191, 36, 0.1)",borderRadius:"4px",boxShadow:"0 2px 8px rgba(251, 191, 36, 0.3)"}}),o.map((p,_)=>p.map((w,k)=>T.jsx("div",{style:{position:"absolute",left:a.x+k*l,top:a.y+_*c,width:l,height:c,border:"1px solid rgba(251, 191, 36, 0.4)",backgroundColor:"rgba(251, 191, 36, 0.05)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:`${r.excelPasteSettings.fontSize}px`,color:"rgba(251, 191, 36, 0.8)",fontWeight:"bold",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",padding:"2px"},children:w},`preview-${_}-${k}`))),T.jsxs("div",{style:{position:"absolute",left:a.x,top:a.y-30,backgroundColor:"rgba(251, 191, 36, 0.9)",color:"#ffffff",padding:"4px 8px",borderRadius:"4px",fontSize:"12px",fontWeight:"bold",whiteSpace:"nowrap",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.2)"},children:["📊 미리보기: ",o.length,"행 × ",Math.max(...o.map(p=>p.length)),"열"]})]})},sn=2160,rn=3840,$g=({isViewPage:t=!1})=>{var W,ke,J,fe;const e=S.useRef(null),n=S.useRef(null),[i,s]=S.useState(.15),{zoom:r,viewOffset:o,setZoom:a,zoomAtPoint:l,currentTool:c}=ls(),{floorImage:d,settings:u}=wi(),h={gridVisible:((W=u==null?void 0:u.admin)==null?void 0:W.gridVisible)??!0,gridSize:((ke=u==null?void 0:u.admin)==null?void 0:ke.gridSize)??32},p=S.useCallback(ee=>{ee.ctrlKey},[]);S.useEffect(()=>{r<.04&&a(1)},[r,a]),S.useEffect(()=>{const ee=G=>{if(G.ctrlKey){try{G.preventDefault()}catch(v){console.debug("preventDefault failed in global wheel handler:",v)}if(!e.current||!n.current)return;const E=e.current.getBoundingClientRect(),U=G.clientX-E.left,M=G.clientY-E.top,g=-G.deltaY;l(g,U,M,E)}};return window.addEventListener("wheel",ee,{passive:!1}),()=>{window.removeEventListener("wheel",ee)}},[l]),S.useEffect(()=>{const ee=G=>{if(G.ctrlKey&&(G.key==="+"||G.key==="=")){try{G.preventDefault()}catch(g){console.debug("preventDefault failed in global keydown handler:",g)}if(!e.current||!n.current)return;const E=e.current.getBoundingClientRect(),U=E.width/2,M=E.height/2;l(120,U,M,E)}if(G.ctrlKey&&G.key==="-"){try{G.preventDefault()}catch(g){console.debug("preventDefault failed in global keydown handler:",g)}if(!e.current||!n.current)return;const E=e.current.getBoundingClientRect(),U=E.width/2,M=E.height/2;l(-120,U,M,E)}};return window.addEventListener("keydown",ee),()=>{window.removeEventListener("keydown",ee)}},[l]),S.useEffect(()=>{const ee=()=>{if(e.current){const E=e.current,U=E.clientWidth,M=E.clientHeight;if(U<=0||M<=0){s(.15);return}const g=U/sn,v=M/rn,b=Math.min(g,v);s(Math.max(.1,b))}},G=setTimeout(ee,100);return window.addEventListener("resize",ee),()=>{clearTimeout(G),window.removeEventListener("resize",ee)}},[r]);const _=i*r,w=sn*_,k=rn*_,$=((J=e.current)==null?void 0:J.clientWidth)||0,Q=((fe=e.current)==null?void 0:fe.clientHeight)||0,oe=200,N=w>$,re=k>Q,je=N?w+oe*2:$,X=re?k+oe*2:Q,xe=ee=>{try{ee.preventDefault(),ee.stopPropagation()}catch(G){console.debug("preventDefault failed in Canvas context menu:",G)}return!1},y=ee=>{if(ee.touches.length===1){const G=setTimeout(()=>{try{ee.preventDefault()}catch{}},200),E=()=>{clearTimeout(G),document.removeEventListener("touchend",E),document.removeEventListener("touchmove",E)};document.addEventListener("touchend",E,{once:!0}),document.addEventListener("touchmove",E,{once:!0})}},he=()=>c==="pen"||c==="eraser"?"crosshair":"default";return T.jsxs("div",{ref:e,onWheel:p,style:{position:"relative",width:"100%",height:"100%",overflowX:N?"auto":"hidden",overflowY:re?"auto":"hidden",backgroundColor:"transparent",cursor:he()},children:[(N||re)&&T.jsx("div",{style:{position:"absolute",top:0,left:0,width:je,height:X,pointerEvents:"none",zIndex:1}}),T.jsxs("div",{ref:n,"data-canvas-container":!0,style:{position:"absolute",backgroundColor:"#ffffff",border:"1px solid #d1d5db",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)",width:sn,height:rn,transform:`translate(${o.x}px, ${o.y}px) scale(${_})`,transformOrigin:"center center",left:N||re?je/2:"50%",top:N||re?X/2:"50%",marginLeft:`-${sn/2}px`,marginTop:`-${rn/2}px`,zIndex:10},onContextMenu:xe,onTouchStart:y,children:[d?T.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:`url(${d.path})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:0}}):T.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"#f9fafb",display:"flex",alignItems:"center",justifyContent:"center",zIndex:0},children:T.jsxs("div",{style:{color:"#9ca3af",fontSize:"24px",textAlign:"center"},children:["Board7 Canvas",T.jsx("br",{}),T.jsx("span",{style:{fontSize:"16px"},children:"2160 x 3840"})]})}),T.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:100},children:[T.jsx(bl,{gridEnabled:h.gridVisible,gridSize:h.gridSize,canvasWidth:sn,canvasHeight:rn}),T.jsx(xg,{}),T.jsx(Tg,{isViewPage:t}),T.jsx(zg,{})]}),T.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:1e4,pointerEvents:c==="pen"||c==="eraser"?"auto":"none"},children:T.jsx(Fg,{isViewPage:t},`${_}-${o.x}-${o.y}`)})]}),T.jsxs("div",{style:{position:"absolute",bottom:"16px",left:"16px",backgroundColor:"rgba(0, 0, 0, 0.5)",color:"#ffffff",padding:"4px 12px",borderRadius:"4px",fontSize:"14px",zIndex:1e3},children:[Math.round(i*r*100),"%"]})]})};export{$g as C,ls as a,gt as b,Zl as c,wi as u};
