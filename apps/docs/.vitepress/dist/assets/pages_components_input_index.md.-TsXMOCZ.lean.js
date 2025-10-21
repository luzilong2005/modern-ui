const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/Sizes.rjnXjEie.js","assets/chunks/index.DOkYiQFG.js","assets/chunks/framework.D0bRv6GJ.js","assets/chunks/WithIcon.epk-hy6K.js","assets/chunks/Password.fu7rr87f.js","assets/chunks/Clearable.CnbPbZGv.js","assets/chunks/Disabled.BTIYFYcq.js","assets/chunks/Basics.z5WGk_sl.js"])))=>i.map(i=>d[i]);
import{B as i,p as u,W as c,x as k,I as L,c as g,o as D,j as a,ah as p,J as e,ai as B,a as o,aj as m,k as d,w as n,ak as h}from"./chunks/framework.D0bRv6GJ.js";import{L as v,N as b}from"./chunks/index.DG-4cLGL.js";const H=`<template>\r
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">\r
        <MuInput placeholder="小尺寸" size="sm" />\r
        <MuInput placeholder="中等尺寸" size="md" />\r
        <MuInput placeholder="大尺寸" size="lg" />\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuInput } from "modern-ui";\r
<\/script>\r
`,M=`<template>\r
    <div>\r
        <MuInput placeholder="带图标的输入框">\r
            <template #prefix>\r
                <i class="icon-search"></i>\r
            </template>\r
        </MuInput>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuInput } from "modern-ui";\r
<\/script>\r
\r
<style>\r
.icon-search::before {\r
    content: "🔍";\r
}\r
</style>\r
`,A=`<template>\r
    <div>\r
        <MuInput type="password" placeholder="请输入密码" show-password v-model="password" />\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuInput } from "modern-ui";\r
import { ref } from "vue";\r
\r
const password = ref('');\r
<\/script>\r
`,T=`<template>\r
    <div>\r
        <MuInput placeholder="可清空的输入框" clearable v-model="inputValue" @clear="handleClear" />\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuInput } from "modern-ui";\r
import { ref } from "vue";\r
\r
const inputValue = ref('初始值');\r
\r
const handleClear = () => {\r
    console.log('输入框已清空');\r
};\r
<\/script>\r
`,j=`<template>\r
    <div>\r
        <MuInput placeholder="禁用状态" disabled />\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuInput } from "modern-ui";\r
<\/script>\r
`,C=`<template>\r
    <div>\r
        <MuInput placeholder="请输入内容" v-model="inputValue" />\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuInput } from "modern-ui";\r
import { ref } from "vue";\r
\r
const inputValue = ref('');\r
<\/script>\r
`,Z=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"pages/components/input/index.md","filePath":"pages/components/input/index.md"}'),x={name:"pages/components/input/index.md"},P=Object.assign(x,{setup(J){const f=i();u(async()=>{f.value=(await c(async()=>{const{default:r}=await import("./chunks/Sizes.rjnXjEie.js");return{default:r}},__vite__mapDeps([0,1,2]))).default});const w=i();u(async()=>{w.value=(await c(async()=>{const{default:r}=await import("./chunks/WithIcon.epk-hy6K.js");return{default:r}},__vite__mapDeps([3,1,2]))).default});const _=i();u(async()=>{_.value=(await c(async()=>{const{default:r}=await import("./chunks/Password.fu7rr87f.js");return{default:r}},__vite__mapDeps([4,1,2]))).default});const y=i();u(async()=>{y.value=(await c(async()=>{const{default:r}=await import("./chunks/Clearable.CnbPbZGv.js");return{default:r}},__vite__mapDeps([5,1,2]))).default});const V=i();u(async()=>{V.value=(await c(async()=>{const{default:r}=await import("./chunks/Disabled.BTIYFYcq.js");return{default:r}},__vite__mapDeps([6,1,2]))).default});const l=k(!0),W=i();return u(async()=>{W.value=(await c(async()=>{const{default:r}=await import("./chunks/Basics.z5WGk_sl.js");return{default:r}},__vite__mapDeps([7,1,2]))).default}),(r,t)=>{const s=L("ClientOnly");return D(),g("div",null,[t[6]||(t[6]=a("h1",{id:"input-输入框",tabindex:"-1"},[o("Input 输入框 "),a("a",{class:"header-anchor",href:"#input-输入框","aria-label":"Permalink to “Input 输入框”"},"​")],-1)),t[7]||(t[7]=a("p",null,"通过鼠标或键盘输入内容。",-1)),t[8]||(t[8]=a("h2",{id:"基础用法",tabindex:"-1"},[o("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":"Permalink to “基础用法”"},"​")],-1)),p(e(d(v),null,null,512),[[m,l.value]]),e(s,null,{default:n(()=>[e(d(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{l.value=!1}),vueCode:d(C)},h({_:2},[W.value?{name:"vue",fn:n(()=>[e(d(W))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[9]||(t[9]=a("h2",{id:"禁用状态",tabindex:"-1"},[o("禁用状态 "),a("a",{class:"header-anchor",href:"#禁用状态","aria-label":"Permalink to “禁用状态”"},"​")],-1)),p(e(d(v),null,null,512),[[m,l.value]]),e(s,null,{default:n(()=>[e(d(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[1]||(t[1]=()=>{l.value=!1}),vueCode:d(j)},h({_:2},[V.value?{name:"vue",fn:n(()=>[e(d(V))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[10]||(t[10]=a("h2",{id:"可清空",tabindex:"-1"},[o("可清空 "),a("a",{class:"header-anchor",href:"#可清空","aria-label":"Permalink to “可清空”"},"​")],-1)),p(e(d(v),null,null,512),[[m,l.value]]),e(s,null,{default:n(()=>[e(d(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[2]||(t[2]=()=>{l.value=!1}),vueCode:d(T)},h({_:2},[y.value?{name:"vue",fn:n(()=>[e(d(y))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[11]||(t[11]=a("h2",{id:"密码框",tabindex:"-1"},[o("密码框 "),a("a",{class:"header-anchor",href:"#密码框","aria-label":"Permalink to “密码框”"},"​")],-1)),p(e(d(v),null,null,512),[[m,l.value]]),e(s,null,{default:n(()=>[e(d(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[3]||(t[3]=()=>{l.value=!1}),vueCode:d(A)},h({_:2},[_.value?{name:"vue",fn:n(()=>[e(d(_))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[12]||(t[12]=a("h2",{id:"带图标",tabindex:"-1"},[o("带图标 "),a("a",{class:"header-anchor",href:"#带图标","aria-label":"Permalink to “带图标”"},"​")],-1)),p(e(d(v),null,null,512),[[m,l.value]]),e(s,null,{default:n(()=>[e(d(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[4]||(t[4]=()=>{l.value=!1}),vueCode:d(M)},h({_:2},[w.value?{name:"vue",fn:n(()=>[e(d(w))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[13]||(t[13]=a("h2",{id:"不同尺寸",tabindex:"-1"},[o("不同尺寸 "),a("a",{class:"header-anchor",href:"#不同尺寸","aria-label":"Permalink to “不同尺寸”"},"​")],-1)),p(e(d(v),null,null,512),[[m,l.value]]),e(s,null,{default:n(()=>[e(d(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[5]||(t[5]=()=>{l.value=!1}),vueCode:d(H)},h({_:2},[f.value?{name:"vue",fn:n(()=>[e(d(f))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[14]||(t[14]=B("",8))])}}});export{Z as __pageData,P as default};
