const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/WithText.BXD4FjWH.js","assets/chunks/index.DOkYiQFG.js","assets/chunks/framework.D0bRv6GJ.js","assets/chunks/Disabled.BJoVuj0y.js","assets/chunks/Sizes.D_8oD_6_.js","assets/chunks/WithLabel.DCg_EFJi.js","assets/chunks/Basics.C69A7xBN.js"])))=>i.map(i=>d[i]);
import{B as s,p as u,W as c,x as X,I as C,c as V,o as g,j as d,ah as m,J as t,ai as j,a as i,aj as h,k as a,w as n,ak as v}from"./chunks/framework.D0bRv6GJ.js";import{L as p,N as b}from"./chunks/index.DG-4cLGL.js";const D=`<template>\r
    <div>\r
        <div class="mb-4">\r
            <p>当前状态: {{ isChecked ? '开启' : '关闭' }}</p>\r
            <MuSwitch v-model="isChecked" />\r
        </div>\r
        <div>\r
            <p>自动保存: {{ autoSave ? '已开启' : '已关闭' }}</p>\r
            <MuSwitch v-model="autoSave" label="自动保存" />\r
        </div>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue';\r
import { MuSwitch } from "modern-ui";\r
\r
const isChecked = ref(true);\r
const autoSave = ref(false);\r
<\/script>\r
`,M=`<template>\r
    <div>\r
        <div class="mb-4">\r
            <p class="mb-2">未选中的禁用状态</p>\r
            <MuSwitch disabled :default-checked="false" />\r
        </div>\r
        <div>\r
            <p class="mb-2">选中的禁用状态</p>\r
            <MuSwitch disabled :default-checked="true" />\r
        </div>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuSwitch } from "modern-ui";\r
<\/script>\r
`,W=`<template>\r
    <div>\r
        <div class="mb-4">\r
            <p class="mb-2">小尺寸</p>\r
            <MuSwitch size="sm" v-model="smallValue" />\r
        </div>\r
        <div class="mb-4">\r
            <p class="mb-2">中等尺寸</p>\r
            <MuSwitch size="md" v-model="mediumValue" />\r
        </div>\r
        <div>\r
            <p class="mb-2">大尺寸</p>\r
            <MuSwitch size="lg" v-model="largeValue" />\r
        </div>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue';\r
import { MuSwitch } from "modern-ui";\r
\r
const smallValue = ref(false);\r
const mediumValue = ref(true);\r
const largeValue = ref(false);\r
<\/script>\r
`,A=`<template>\r
    <div>\r
        <div class="mb-4">\r
            <MuSwitch v-model="value1" label="标签在右侧" />\r
        </div>\r
        <div>\r
            <MuSwitch v-model="value2" label="标签在左侧" label-position="left" />\r
        </div>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue';\r
import { MuSwitch } from "modern-ui";\r
\r
const value1 = ref(true);\r
const value2 = ref(false);\r
<\/script>\r
`,T=`<template>\r
    <div>\r
        <p>当前状态: {{ isChecked }}</p>\r
        <MuSwitch v-model="isChecked" />\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue';\r
import { MuSwitch } from "modern-ui";\r
\r
const isChecked = ref(false);\r
<\/script>\r
`,H=JSON.parse('{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"pages/components/switch/index.md","filePath":"pages/components/switch/index.md"}'),B={name:"pages/components/switch/index.md"},S=Object.assign(B,{setup(L){const f=s();u(async()=>{f.value=(await c(async()=>{const{default:r}=await import("./chunks/WithText.BXD4FjWH.js");return{default:r}},__vite__mapDeps([0,1,2]))).default});const w=s();u(async()=>{w.value=(await c(async()=>{const{default:r}=await import("./chunks/Disabled.BJoVuj0y.js");return{default:r}},__vite__mapDeps([3,1,2]))).default});const _=s();u(async()=>{_.value=(await c(async()=>{const{default:r}=await import("./chunks/Sizes.D_8oD_6_.js");return{default:r}},__vite__mapDeps([4,1,2]))).default});const k=s();u(async()=>{k.value=(await c(async()=>{const{default:r}=await import("./chunks/WithLabel.DCg_EFJi.js");return{default:r}},__vite__mapDeps([5,1,2]))).default});const l=X(!0),y=s();return u(async()=>{y.value=(await c(async()=>{const{default:r}=await import("./chunks/Basics.C69A7xBN.js");return{default:r}},__vite__mapDeps([6,1,2]))).default}),(r,e)=>{const o=C("ClientOnly");return g(),V("div",null,[e[5]||(e[5]=d("h1",{id:"switch-开关",tabindex:"-1"},[i("Switch 开关 "),d("a",{class:"header-anchor",href:"#switch-开关","aria-label":"Permalink to “Switch 开关”"},"​")],-1)),e[6]||(e[6]=d("p",null,"用于表示打开或关闭状态的切换控件。",-1)),e[7]||(e[7]=d("h2",{id:"基础用法",tabindex:"-1"},[i("基础用法 "),d("a",{class:"header-anchor",href:"#基础用法","aria-label":"Permalink to “基础用法”"},"​")],-1)),m(t(a(p),null,null,512),[[h,l.value]]),t(o,null,{default:n(()=>[t(a(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:a(T)},v({_:2},[y.value?{name:"vue",fn:n(()=>[t(a(y))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[8]||(e[8]=d("h2",{id:"带标签",tabindex:"-1"},[i("带标签 "),d("a",{class:"header-anchor",href:"#带标签","aria-label":"Permalink to “带标签”"},"​")],-1)),m(t(a(p),null,null,512),[[h,l.value]]),t(o,null,{default:n(()=>[t(a(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[1]||(e[1]=()=>{l.value=!1}),vueCode:a(A)},v({_:2},[k.value?{name:"vue",fn:n(()=>[t(a(k))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[9]||(e[9]=d("h2",{id:"不同尺寸",tabindex:"-1"},[i("不同尺寸 "),d("a",{class:"header-anchor",href:"#不同尺寸","aria-label":"Permalink to “不同尺寸”"},"​")],-1)),m(t(a(p),null,null,512),[[h,l.value]]),t(o,null,{default:n(()=>[t(a(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[2]||(e[2]=()=>{l.value=!1}),vueCode:a(W)},v({_:2},[_.value?{name:"vue",fn:n(()=>[t(a(_))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[10]||(e[10]=d("h2",{id:"禁用状态",tabindex:"-1"},[i("禁用状态 "),d("a",{class:"header-anchor",href:"#禁用状态","aria-label":"Permalink to “禁用状态”"},"​")],-1)),m(t(a(p),null,null,512),[[h,l.value]]),t(o,null,{default:n(()=>[t(a(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[3]||(e[3]=()=>{l.value=!1}),vueCode:a(M)},v({_:2},[w.value?{name:"vue",fn:n(()=>[t(a(w))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[11]||(e[11]=d("h2",{id:"文字描述",tabindex:"-1"},[i("文字描述 "),d("a",{class:"header-anchor",href:"#文字描述","aria-label":"Permalink to “文字描述”"},"​")],-1)),m(t(a(p),null,null,512),[[h,l.value]]),t(o,null,{default:n(()=>[t(a(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[4]||(e[4]=()=>{l.value=!1}),vueCode:a(D)},v({_:2},[f.value?{name:"vue",fn:n(()=>[t(a(f))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[12]||(e[12]=j("",6))])}}});export{H as __pageData,S as default};
