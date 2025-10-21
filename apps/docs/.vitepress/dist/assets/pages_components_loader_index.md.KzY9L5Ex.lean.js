const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/Custom.tPrJ3yWu.js","assets/chunks/index.DOkYiQFG.js","assets/chunks/framework.D0bRv6GJ.js","assets/chunks/createLucideIcon.B4SBO-5R.js","assets/chunks/Colors.DSBBN75p.js","assets/chunks/Sizes.oQgtmyWQ.js","assets/chunks/Types.ieoNDJHL.js","assets/chunks/Basics.CPgmPYp-.js"])))=>i.map(i=>d[i]);
import{B as s,p as u,W as c,x as y,I as k,c as D,o as M,j as r,ah as p,J as t,ai as B,a as o,aj as v,k as a,w as n,ak as m}from"./chunks/framework.D0bRv6GJ.js";import{L as b,N as f}from"./chunks/index.DG-4cLGL.js";const g=`<template>\r
    <div>\r
        <div class="mb-4">\r
            <p>自定义加载器</p>\r
            <MuLoader :custom-loading-spinner="CustomSpinner" />\r
        </div>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuLoader } from "modern-ui";\r
import { Loader2 } from "lucide-vue-next";\r
\r
// 自定义加载器组件\r
const CustomSpinner = Loader2;\r
<\/script>\r
`,T=`<template>\r
    <div>\r
        <div class="mb-4" style="--mu-loader-color: #3b82f6;">\r
            <p>蓝色</p>\r
            <MuLoader />\r
        </div>\r
        <div class="mb-4" style="--mu-loader-color: #ef4444;">\r
            <p>红色</p>\r
            <MuLoader />\r
        </div>\r
        <div class="mb-4" style="--mu-loader-color: #10b981;">\r
            <p>绿色</p>\r
            <MuLoader />\r
        </div>\r
        <div style="--mu-loader-color: #8b5cf6;">\r
            <p>紫色</p>\r
            <MuLoader />\r
        </div>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuLoader } from "modern-ui";\r
<\/script>\r
`,A=`<template>\r
    <div>\r
        <div class="mb-4">\r
            <p>小尺寸</p>\r
            <MuLoader :size="0.5" />\r
        </div>\r
        <div class="mb-4">\r
            <p>默认尺寸</p>\r
            <MuLoader :size="1" />\r
        </div>\r
        <div>\r
            <p>大尺寸</p>\r
            <MuLoader :size="2" />\r
        </div>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuLoader } from "modern-ui";\r
<\/script>\r
`,x=`<template>\r
    <div>\r
        <div class="mb-4">\r
            <p>圆形加载器</p>\r
            <MuLoader default-spinner="circle" />\r
        </div>\r
        <div>\r
            <p>点状加载器</p>\r
            <MuLoader default-spinner="dots" />\r
        </div>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuLoader } from "modern-ui";\r
<\/script>\r
`,C=`<template>\r
    <div>\r
        <MuLoader />\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuLoader } from "modern-ui";\r
<\/script>\r
`,R=JSON.parse('{"title":"Loader 加载器","description":"","frontmatter":{},"headers":[],"relativePath":"pages/components/loader/index.md","filePath":"pages/components/loader/index.md"}'),V={name:"pages/components/loader/index.md"},E=Object.assign(V,{setup(j){const h=s();u(async()=>{h.value=(await c(async()=>{const{default:d}=await import("./chunks/Custom.tPrJ3yWu.js");return{default:d}},__vite__mapDeps([0,1,2,3]))).default});const w=s();u(async()=>{w.value=(await c(async()=>{const{default:d}=await import("./chunks/Colors.DSBBN75p.js");return{default:d}},__vite__mapDeps([4,1,2]))).default});const _=s();u(async()=>{_.value=(await c(async()=>{const{default:d}=await import("./chunks/Sizes.oQgtmyWQ.js");return{default:d}},__vite__mapDeps([5,1,2]))).default});const W=s();u(async()=>{W.value=(await c(async()=>{const{default:d}=await import("./chunks/Types.ieoNDJHL.js");return{default:d}},__vite__mapDeps([6,1,2]))).default});const l=y(!0),L=s();return u(async()=>{L.value=(await c(async()=>{const{default:d}=await import("./chunks/Basics.CPgmPYp-.js");return{default:d}},__vite__mapDeps([7,1,2]))).default}),(d,e)=>{const i=k("ClientOnly");return M(),D("div",null,[e[5]||(e[5]=r("h1",{id:"loader-加载器",tabindex:"-1"},[o("Loader 加载器 "),r("a",{class:"header-anchor",href:"#loader-加载器","aria-label":"Permalink to “Loader 加载器”"},"​")],-1)),e[6]||(e[6]=r("p",null,"用于表示加载中的状态。",-1)),e[7]||(e[7]=r("h2",{id:"基础用法",tabindex:"-1"},[o("基础用法 "),r("a",{class:"header-anchor",href:"#基础用法","aria-label":"Permalink to “基础用法”"},"​")],-1)),p(t(a(b),null,null,512),[[v,l.value]]),t(i,null,{default:n(()=>[t(a(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:a(C)},m({_:2},[L.value?{name:"vue",fn:n(()=>[t(a(L))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[8]||(e[8]=r("h2",{id:"不同类型",tabindex:"-1"},[o("不同类型 "),r("a",{class:"header-anchor",href:"#不同类型","aria-label":"Permalink to “不同类型”"},"​")],-1)),p(t(a(b),null,null,512),[[v,l.value]]),t(i,null,{default:n(()=>[t(a(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[1]||(e[1]=()=>{l.value=!1}),vueCode:a(x)},m({_:2},[W.value?{name:"vue",fn:n(()=>[t(a(W))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[9]||(e[9]=r("h2",{id:"不同尺寸",tabindex:"-1"},[o("不同尺寸 "),r("a",{class:"header-anchor",href:"#不同尺寸","aria-label":"Permalink to “不同尺寸”"},"​")],-1)),p(t(a(b),null,null,512),[[v,l.value]]),t(i,null,{default:n(()=>[t(a(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[2]||(e[2]=()=>{l.value=!1}),vueCode:a(A)},m({_:2},[_.value?{name:"vue",fn:n(()=>[t(a(_))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[10]||(e[10]=r("h2",{id:"自定义颜色",tabindex:"-1"},[o("自定义颜色 "),r("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​")],-1)),p(t(a(b),null,null,512),[[v,l.value]]),t(i,null,{default:n(()=>[t(a(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[3]||(e[3]=()=>{l.value=!1}),vueCode:a(T)},m({_:2},[w.value?{name:"vue",fn:n(()=>[t(a(w))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[11]||(e[11]=r("h2",{id:"自定义加载器",tabindex:"-1"},[o("自定义加载器 "),r("a",{class:"header-anchor",href:"#自定义加载器","aria-label":"Permalink to “自定义加载器”"},"​")],-1)),p(t(a(b),null,null,512),[[v,l.value]]),t(i,null,{default:n(()=>[t(a(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[4]||(e[4]=()=>{l.value=!1}),vueCode:a(g)},m({_:2},[h.value?{name:"vue",fn:n(()=>[t(a(h))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[12]||(e[12]=B("",4))])}}});export{R as __pageData,E as default};
