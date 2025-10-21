const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/Dynamic.BHhxan9A.js","assets/chunks/index.DOkYiQFG.js","assets/chunks/framework.D0bRv6GJ.js","assets/chunks/Vertical.8SZ_Ys-M.js","assets/chunks/Sizes.DFQgvP5c.js","assets/chunks/Basics.tSTDYqjw.js"])))=>i.map(i=>d[i]);
import{B as i,p as u,W as c,x as w,I as k,c as B,o as L,j as a,ah as m,J as t,ai as M,a as n,aj as p,k as r,w as l,ak as v}from"./chunks/framework.D0bRv6GJ.js";import{L as b,N as h}from"./chunks/index.DG-4cLGL.js";const D=`<template>\r
    <div>\r
        <div class="mb-4">\r
            <MuProgress :value="progress" />\r
        </div>\r
        <div class="flex gap-2">\r
            <button @click="decrease" class="px-3 py-1 bg-gray-200 rounded">减少</button>\r
            <button @click="increase" class="px-3 py-1 bg-blue-500 text-white rounded">增加</button>\r
            <button @click="reset" class="px-3 py-1 bg-red-500 text-white rounded">重置</button>\r
        </div>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue';\r
import { MuProgress } from "modern-ui";\r
\r
const progress = ref(30);\r
\r
const decrease = () => {\r
    progress.value = Math.max(0, progress.value - 10);\r
};\r
\r
const increase = () => {\r
    progress.value = Math.min(100, progress.value + 10);\r
};\r
\r
const reset = () => {\r
    progress.value = 0;\r
};\r
<\/script>\r
`,V=`<template>\r
    <div style="display: flex; align-items: center; height: 200px;">\r
        <MuProgress direction="vertical" :value="30" class="mr-4" />\r
        <MuProgress direction="vertical" :value="50" class="mr-4" />\r
        <MuProgress direction="vertical" :value="70" />\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuProgress } from "modern-ui";\r
<\/script>\r
`,W=`<template>\r
    <div>\r
        <div class="mb-4">\r
            <p class="mb-2">小尺寸</p>\r
            <MuProgress size="sm" :value="30" />\r
        </div>\r
        <div class="mb-4">\r
            <p class="mb-2">中等尺寸</p>\r
            <MuProgress size="md" :value="50" />\r
        </div>\r
        <div>\r
            <p class="mb-2">大尺寸</p>\r
            <MuProgress size="lg" :value="70" />\r
        </div>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuProgress } from "modern-ui";\r
<\/script>\r
`,P=`<template>\r
    <div>\r
        <MuProgress :value="30" />\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuProgress } from "modern-ui";\r
<\/script>\r
`,x=JSON.parse('{"title":"Progress 进度条","description":"","frontmatter":{},"headers":[],"relativePath":"pages/components/progress/index.md","filePath":"pages/components/progress/index.md"}'),X={name:"pages/components/progress/index.md"},z=Object.assign(X,{setup(A){const f=i();u(async()=>{f.value=(await c(async()=>{const{default:s}=await import("./chunks/Dynamic.BHhxan9A.js");return{default:s}},__vite__mapDeps([0,1,2]))).default});const g=i();u(async()=>{g.value=(await c(async()=>{const{default:s}=await import("./chunks/Vertical.8SZ_Ys-M.js");return{default:s}},__vite__mapDeps([3,1,2]))).default});const y=i();u(async()=>{y.value=(await c(async()=>{const{default:s}=await import("./chunks/Sizes.DFQgvP5c.js");return{default:s}},__vite__mapDeps([4,1,2]))).default});const d=w(!0),_=i();return u(async()=>{_.value=(await c(async()=>{const{default:s}=await import("./chunks/Basics.tSTDYqjw.js");return{default:s}},__vite__mapDeps([5,1,2]))).default}),(s,e)=>{const o=k("ClientOnly");return L(),B("div",null,[e[4]||(e[4]=a("h1",{id:"progress-进度条",tabindex:"-1"},[n("Progress 进度条 "),a("a",{class:"header-anchor",href:"#progress-进度条","aria-label":"Permalink to “Progress 进度条”"},"​")],-1)),e[5]||(e[5]=a("p",null,"用于显示操作或任务的当前进度。",-1)),e[6]||(e[6]=a("h2",{id:"基础用法",tabindex:"-1"},[n("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":"Permalink to “基础用法”"},"​")],-1)),m(t(r(b),null,null,512),[[p,d.value]]),t(o,null,{default:l(()=>[t(r(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{d.value=!1}),vueCode:r(P)},v({_:2},[_.value?{name:"vue",fn:l(()=>[t(r(_))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[7]||(e[7]=a("h2",{id:"不同尺寸",tabindex:"-1"},[n("不同尺寸 "),a("a",{class:"header-anchor",href:"#不同尺寸","aria-label":"Permalink to “不同尺寸”"},"​")],-1)),m(t(r(b),null,null,512),[[p,d.value]]),t(o,null,{default:l(()=>[t(r(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[1]||(e[1]=()=>{d.value=!1}),vueCode:r(W)},v({_:2},[y.value?{name:"vue",fn:l(()=>[t(r(y))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[8]||(e[8]=a("h2",{id:"垂直进度条",tabindex:"-1"},[n("垂直进度条 "),a("a",{class:"header-anchor",href:"#垂直进度条","aria-label":"Permalink to “垂直进度条”"},"​")],-1)),m(t(r(b),null,null,512),[[p,d.value]]),t(o,null,{default:l(()=>[t(r(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[2]||(e[2]=()=>{d.value=!1}),vueCode:r(V)},v({_:2},[g.value?{name:"vue",fn:l(()=>[t(r(g))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[9]||(e[9]=a("h2",{id:"动态变化",tabindex:"-1"},[n("动态变化 "),a("a",{class:"header-anchor",href:"#动态变化","aria-label":"Permalink to “动态变化”"},"​")],-1)),m(t(r(b),null,null,512),[[p,d.value]]),t(o,null,{default:l(()=>[t(r(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[3]||(e[3]=()=>{d.value=!1}),vueCode:r(D)},v({_:2},[f.value?{name:"vue",fn:l(()=>[t(r(f))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[10]||(e[10]=M("",2))])}}});export{x as __pageData,z as default};
