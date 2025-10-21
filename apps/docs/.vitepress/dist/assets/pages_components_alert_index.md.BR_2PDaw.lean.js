const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/WithIcon.Bf5nbDCh.js","assets/chunks/index.DOkYiQFG.js","assets/chunks/framework.D0bRv6GJ.js","assets/chunks/Closable.Cl-WugjF.js","assets/chunks/Types.rdbb5rqL.js","assets/chunks/Basics.CiI_n5IV.js"])))=>i.map(i=>d[i]);
import{B as i,p as u,W as c,x as _,I as M,c as W,o as k,j as r,ah as p,J as t,ai as g,a as o,aj as m,k as l,w as n,ak as h}from"./chunks/framework.D0bRv6GJ.js";import{L as v,N as b}from"./chunks/index.DG-4cLGL.js";const L=`<template>\r
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">\r
        <MuAlert type="success" show-icon>成功提示</MuAlert>\r
        <MuAlert type="warning" show-icon>警告提示</MuAlert>\r
        <MuAlert type="info" show-icon>信息提示</MuAlert>\r
        <MuAlert type="error" show-icon>错误提示</MuAlert>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuAlert } from "modern-ui";\r
<\/script>\r
`,V=`<template>\r
    <div>\r
        <MuAlert closable @close="handleClose">这是一条可关闭的提示信息</MuAlert>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuAlert } from "modern-ui";\r
\r
const handleClose = () => {\r
    console.log('Alert已关闭');\r
};\r
<\/script>\r
`,D=`<template>\r
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">\r
        <MuAlert type="success">成功提示</MuAlert>\r
        <MuAlert type="warning">警告提示</MuAlert>\r
        <MuAlert type="info">信息提示</MuAlert>\r
        <MuAlert type="error">错误提示</MuAlert>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuAlert } from "modern-ui";\r
<\/script>\r
`,T=`<template>\r
    <div>\r
        <MuAlert>这是一条基本提示信息</MuAlert>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuAlert } from "modern-ui";\r
<\/script>\r
`,x=JSON.parse('{"title":"Alert 警告提示","description":"","frontmatter":{},"headers":[],"relativePath":"pages/components/alert/index.md","filePath":"pages/components/alert/index.md"}'),B={name:"pages/components/alert/index.md"},H=Object.assign(B,{setup(C){const f=i();u(async()=>{f.value=(await c(async()=>{const{default:d}=await import("./chunks/WithIcon.Bf5nbDCh.js");return{default:d}},__vite__mapDeps([0,1,2]))).default});const w=i();u(async()=>{w.value=(await c(async()=>{const{default:d}=await import("./chunks/Closable.Cl-WugjF.js");return{default:d}},__vite__mapDeps([3,1,2]))).default});const A=i();u(async()=>{A.value=(await c(async()=>{const{default:d}=await import("./chunks/Types.rdbb5rqL.js");return{default:d}},__vite__mapDeps([4,1,2]))).default});const a=_(!0),y=i();return u(async()=>{y.value=(await c(async()=>{const{default:d}=await import("./chunks/Basics.CiI_n5IV.js");return{default:d}},__vite__mapDeps([5,1,2]))).default}),(d,e)=>{const s=M("ClientOnly");return k(),W("div",null,[e[4]||(e[4]=r("h1",{id:"alert-警告提示",tabindex:"-1"},[o("Alert 警告提示 "),r("a",{class:"header-anchor",href:"#alert-警告提示","aria-label":"Permalink to “Alert 警告提示”"},"​")],-1)),e[5]||(e[5]=r("p",null,"用于页面中展示重要的提示信息。",-1)),e[6]||(e[6]=r("h2",{id:"基础用法",tabindex:"-1"},[o("基础用法 "),r("a",{class:"header-anchor",href:"#基础用法","aria-label":"Permalink to “基础用法”"},"​")],-1)),p(t(l(v),null,null,512),[[m,a.value]]),t(s,null,{default:n(()=>[t(l(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{a.value=!1}),vueCode:l(T)},h({_:2},[y.value?{name:"vue",fn:n(()=>[t(l(y))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[7]||(e[7]=r("h2",{id:"不同类型",tabindex:"-1"},[o("不同类型 "),r("a",{class:"header-anchor",href:"#不同类型","aria-label":"Permalink to “不同类型”"},"​")],-1)),p(t(l(v),null,null,512),[[m,a.value]]),t(s,null,{default:n(()=>[t(l(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[1]||(e[1]=()=>{a.value=!1}),vueCode:l(D)},h({_:2},[A.value?{name:"vue",fn:n(()=>[t(l(A))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[8]||(e[8]=r("h2",{id:"可关闭",tabindex:"-1"},[o("可关闭 "),r("a",{class:"header-anchor",href:"#可关闭","aria-label":"Permalink to “可关闭”"},"​")],-1)),p(t(l(v),null,null,512),[[m,a.value]]),t(s,null,{default:n(()=>[t(l(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[2]||(e[2]=()=>{a.value=!1}),vueCode:l(V)},h({_:2},[w.value?{name:"vue",fn:n(()=>[t(l(w))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[9]||(e[9]=r("h2",{id:"带图标",tabindex:"-1"},[o("带图标 "),r("a",{class:"header-anchor",href:"#带图标","aria-label":"Permalink to “带图标”"},"​")],-1)),p(t(l(v),null,null,512),[[m,a.value]]),t(s,null,{default:n(()=>[t(l(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[3]||(e[3]=()=>{a.value=!1}),vueCode:l(L)},h({_:2},[f.value?{name:"vue",fn:n(()=>[t(l(f))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[10]||(e[10]=g("",4))])}}});export{x as __pageData,H as default};
