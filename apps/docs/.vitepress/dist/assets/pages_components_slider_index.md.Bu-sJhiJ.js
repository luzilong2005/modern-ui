const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/MaxValue.cQ4HVlcI.js","assets/chunks/index.DOkYiQFG.js","assets/chunks/framework.D0bRv6GJ.js","assets/chunks/Vertical.BnXWCWNz.js","assets/chunks/Sizes.YCmDSlKP.js","assets/chunks/Disabled.cDHR7s4k.js","assets/chunks/Basics.Dthu7Abu.js"])))=>i.map(i=>d[i]);
import{B as o,p as u,W as c,x as k,I as D,c as M,o as A,j as a,ah as m,J as t,ai as V,a as i,aj as v,k as l,w as n,ak as p}from"./chunks/framework.D0bRv6GJ.js";import{L as b,N as f}from"./chunks/index.DG-4cLGL.js";const g=`<template>\r
    <div>\r
        <div class="mb-4">\r
            <p>最大值为10的滑块: {{ value1 }}</p>\r
            <MuSlider v-model="value1" :max="10" />\r
        </div>\r
        <div class="mb-4">\r
            <p>最大值为50的滑块: {{ value2 }}</p>\r
            <MuSlider v-model="value2" :max="50" />\r
        </div>\r
        <div>\r
            <p>最大值为200的滑块: {{ value3 }}</p>\r
            <MuSlider v-model="value3" :max="200" />\r
        </div>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue';\r
import { MuSlider } from "modern-ui";\r
\r
const value1 = ref(3);\r
const value2 = ref(25);\r
const value3 = ref(100);\r
<\/script>\r
`,X=`<template>\r
    <div style="display: flex; align-items: center; height: 200px;">\r
        <MuSlider direction="vertical" v-model="value1" class="mr-4" />\r
        <MuSlider direction="vertical" v-model="value2" class="mr-4" />\r
        <MuSlider direction="vertical" v-model="value3" />\r
        <div class="ml-4">\r
            <p>滑块1: {{ value1 }}</p>\r
            <p>滑块2: {{ value2 }}</p>\r
            <p>滑块3: {{ value3 }}</p>\r
        </div>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue';\r
import { MuSlider } from "modern-ui";\r
\r
const value1 = ref(30);\r
const value2 = ref(50);\r
const value3 = ref(70);\r
<\/script>\r
`,B=`<template>\r
    <div>\r
        <div class="mb-4">\r
            <p class="mb-2">小尺寸</p>\r
            <MuSlider size="sm" v-model="smallValue" />\r
        </div>\r
        <div class="mb-4">\r
            <p class="mb-2">中等尺寸</p>\r
            <MuSlider size="md" v-model="mediumValue" />\r
        </div>\r
        <div>\r
            <p class="mb-2">大尺寸</p>\r
            <MuSlider size="lg" v-model="largeValue" />\r
        </div>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue';\r
import { MuSlider } from "modern-ui";\r
\r
const smallValue = ref(30);\r
const mediumValue = ref(50);\r
const largeValue = ref(70);\r
<\/script>\r
`,T=`<template>\r
    <div>\r
        <div class="mb-4">\r
            <p>禁用状态的滑块</p>\r
            <MuSlider :value="50" disabled />\r
        </div>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuSlider } from "modern-ui";\r
<\/script>\r
`,L=`<template>\r
    <div>\r
        <div class="mb-4">\r
            <p>当前值: {{ value }}</p>\r
            <MuSlider v-model="value" />\r
        </div>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue';\r
import { MuSlider } from "modern-ui";\r
\r
const value = ref(30);\r
<\/script>\r
`,H=JSON.parse('{"title":"Slider 滑块","description":"","frontmatter":{},"headers":[],"relativePath":"pages/components/slider/index.md","filePath":"pages/components/slider/index.md"}'),j={name:"pages/components/slider/index.md"},S=Object.assign(j,{setup(C){const h=o();u(async()=>{h.value=(await c(async()=>{const{default:d}=await import("./chunks/MaxValue.cQ4HVlcI.js");return{default:d}},__vite__mapDeps([0,1,2]))).default});const _=o();u(async()=>{_.value=(await c(async()=>{const{default:d}=await import("./chunks/Vertical.BnXWCWNz.js");return{default:d}},__vite__mapDeps([3,1,2]))).default});const w=o();u(async()=>{w.value=(await c(async()=>{const{default:d}=await import("./chunks/Sizes.YCmDSlKP.js");return{default:d}},__vite__mapDeps([4,1,2]))).default});const W=o();u(async()=>{W.value=(await c(async()=>{const{default:d}=await import("./chunks/Disabled.cDHR7s4k.js");return{default:d}},__vite__mapDeps([5,1,2]))).default});const r=k(!0),y=o();return u(async()=>{y.value=(await c(async()=>{const{default:d}=await import("./chunks/Basics.Dthu7Abu.js");return{default:d}},__vite__mapDeps([6,1,2]))).default}),(d,e)=>{const s=D("ClientOnly");return A(),M("div",null,[e[5]||(e[5]=a("h1",{id:"slider-滑块",tabindex:"-1"},[i("Slider 滑块 "),a("a",{class:"header-anchor",href:"#slider-滑块","aria-label":"Permalink to “Slider 滑块”"},"​")],-1)),e[6]||(e[6]=a("p",null,"用于在给定的范围内选择一个值。",-1)),e[7]||(e[7]=a("h2",{id:"基础用法",tabindex:"-1"},[i("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":"Permalink to “基础用法”"},"​")],-1)),m(t(l(b),null,null,512),[[v,r.value]]),t(s,null,{default:n(()=>[t(l(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{r.value=!1}),vueCode:l(L)},p({_:2},[y.value?{name:"vue",fn:n(()=>[t(l(y))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[8]||(e[8]=a("h2",{id:"禁用状态",tabindex:"-1"},[i("禁用状态 "),a("a",{class:"header-anchor",href:"#禁用状态","aria-label":"Permalink to “禁用状态”"},"​")],-1)),m(t(l(b),null,null,512),[[v,r.value]]),t(s,null,{default:n(()=>[t(l(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[1]||(e[1]=()=>{r.value=!1}),vueCode:l(T)},p({_:2},[W.value?{name:"vue",fn:n(()=>[t(l(W))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[9]||(e[9]=a("h2",{id:"不同尺寸",tabindex:"-1"},[i("不同尺寸 "),a("a",{class:"header-anchor",href:"#不同尺寸","aria-label":"Permalink to “不同尺寸”"},"​")],-1)),m(t(l(b),null,null,512),[[v,r.value]]),t(s,null,{default:n(()=>[t(l(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[2]||(e[2]=()=>{r.value=!1}),vueCode:l(B)},p({_:2},[w.value?{name:"vue",fn:n(()=>[t(l(w))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[10]||(e[10]=a("h2",{id:"垂直方向",tabindex:"-1"},[i("垂直方向 "),a("a",{class:"header-anchor",href:"#垂直方向","aria-label":"Permalink to “垂直方向”"},"​")],-1)),m(t(l(b),null,null,512),[[v,r.value]]),t(s,null,{default:n(()=>[t(l(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[3]||(e[3]=()=>{r.value=!1}),vueCode:l(X)},p({_:2},[_.value?{name:"vue",fn:n(()=>[t(l(_))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[11]||(e[11]=a("h2",{id:"自定义最大值",tabindex:"-1"},[i("自定义最大值 "),a("a",{class:"header-anchor",href:"#自定义最大值","aria-label":"Permalink to “自定义最大值”"},"​")],-1)),m(t(l(b),null,null,512),[[v,r.value]]),t(s,null,{default:n(()=>[t(l(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[4]||(e[4]=()=>{r.value=!1}),vueCode:l(g)},p({_:2},[h.value?{name:"vue",fn:n(()=>[t(l(h))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[12]||(e[12]=V('<h2 id="props-属性" tabindex="-1">Props 属性 <a class="header-anchor" href="#props-属性" aria-label="Permalink to “Props 属性”">​</a></h2><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>size</td><td><code>SliderSize</code></td><td><code>md</code></td><td>滑块尺寸，可选值为 <code>sm</code>、<code>md</code>、<code>lg</code></td></tr><tr><td>max</td><td><code>number</code></td><td><code>100</code></td><td>滑块最大值</td></tr><tr><td>value</td><td><code>number</code></td><td><code>0</code></td><td>滑块当前值（v-model绑定）</td></tr><tr><td>direction</td><td><code>SliderDirection</code></td><td><code>horizontal</code></td><td>滑块方向，可选值为 <code>horizontal</code>、<code>vertical</code></td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>是否禁用</td></tr></tbody></table>',2))])}}});export{H as __pageData,S as default};
