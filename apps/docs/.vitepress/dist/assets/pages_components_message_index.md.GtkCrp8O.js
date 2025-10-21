const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/Duration.itx9NUdD.js","assets/chunks/index.DOkYiQFG.js","assets/chunks/framework.D0bRv6GJ.js","assets/chunks/Closable.Big3Z1AX.js","assets/chunks/Types.ChIfKYTU.js","assets/chunks/Basics.CDud_aE_.js"])))=>i.map(i=>d[i]);
import{B as i,p as c,W as u,x as _,I as k,c as A,o as W,j as n,ah as m,J as t,ai as M,a as d,aj as p,k as a,w as o,ak as h}from"./chunks/framework.D0bRv6GJ.js";import{L as b,N as g}from"./chunks/index.DG-4cLGL.js";const D=`<template>\r
    <div>\r
        <button @click="showShortMessage" class="mr-2">短时间显示(1秒)</button>\r
        <button @click="showLongMessage">长时间显示(10秒)</button>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { messageApi } from "modern-ui";\r
\r
const showShortMessage = () => {\r
    messageApi.create({\r
        content: "这条消息只显示1秒",\r
        delay: 1000\r
    });\r
};\r
\r
const showLongMessage = () => {\r
    messageApi.create({\r
        content: "这条消息会显示10秒",\r
        delay: 10000\r
    });\r
};\r
<\/script>\r
`,C=`<template>\r
    <div>\r
        <button @click="showClosableMessage">显示可关闭消息</button>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { messageApi } from "modern-ui";\r
\r
const showClosableMessage = () => {\r
    messageApi.create({\r
        content: "这是一条可关闭的消息，点击右上角的关闭按钮可以关闭它",\r
        closable: true\r
    });\r
};\r
<\/script>\r
`,V=`<template>\r
    <div>\r
        <button @click="showPrimary" class="mr-2">主要</button>\r
        <button @click="showSecondary" class="mr-2">次要</button>\r
        <button @click="showSuccess" class="mr-2">成功</button>\r
        <button @click="showWarning" class="mr-2">警告</button>\r
        <button @click="showDanger">危险</button>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { messageApi } from "modern-ui";\r
\r
const showPrimary = () => {\r
    messageApi.primary("这是主要消息");\r
};\r
\r
const showSecondary = () => {\r
    messageApi.secondary("这是次要消息");\r
};\r
\r
const showSuccess = () => {\r
    messageApi.success("操作成功");\r
};\r
\r
const showWarning = () => {\r
    messageApi.warning("请注意，这是一个警告");\r
};\r
\r
const showDanger = () => {\r
    messageApi.danger("操作失败，请重试");\r
};\r
<\/script>\r
`,B=`<template>\r
    <div>\r
        <button @click="showMessage">显示消息</button>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { messageApi } from "modern-ui";\r
\r
const showMessage = () => {\r
    messageApi.create("这是一条消息提示");\r
};\r
<\/script>\r
`,Z=JSON.parse('{"title":"Message 消息提示","description":"","frontmatter":{},"headers":[],"relativePath":"pages/components/message/index.md","filePath":"pages/components/message/index.md"}'),L={name:"pages/components/message/index.md"},x=Object.assign(L,{setup(T){const v=i();c(async()=>{v.value=(await u(async()=>{const{default:r}=await import("./chunks/Duration.itx9NUdD.js");return{default:r}},__vite__mapDeps([0,1,2]))).default});const w=i();c(async()=>{w.value=(await u(async()=>{const{default:r}=await import("./chunks/Closable.Big3Z1AX.js");return{default:r}},__vite__mapDeps([3,1,2]))).default});const f=i();c(async()=>{f.value=(await u(async()=>{const{default:r}=await import("./chunks/Types.ChIfKYTU.js");return{default:r}},__vite__mapDeps([4,1,2]))).default});const s=_(!0),y=i();return c(async()=>{y.value=(await u(async()=>{const{default:r}=await import("./chunks/Basics.CDud_aE_.js");return{default:r}},__vite__mapDeps([5,1,2]))).default}),(r,e)=>{const l=k("ClientOnly");return W(),A("div",null,[e[4]||(e[4]=n("h1",{id:"message-消息提示",tabindex:"-1"},[d("Message 消息提示 "),n("a",{class:"header-anchor",href:"#message-消息提示","aria-label":"Permalink to “Message 消息提示”"},"​")],-1)),e[5]||(e[5]=n("p",null,"用于显示操作反馈信息。",-1)),e[6]||(e[6]=n("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),n("a",{class:"header-anchor",href:"#基础用法","aria-label":"Permalink to “基础用法”"},"​")],-1)),m(t(a(b),null,null,512),[[p,s.value]]),t(l,null,{default:o(()=>[t(a(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{s.value=!1}),vueCode:a(B)},h({_:2},[y.value?{name:"vue",fn:o(()=>[t(a(y))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[7]||(e[7]=n("h2",{id:"不同类型",tabindex:"-1"},[d("不同类型 "),n("a",{class:"header-anchor",href:"#不同类型","aria-label":"Permalink to “不同类型”"},"​")],-1)),m(t(a(b),null,null,512),[[p,s.value]]),t(l,null,{default:o(()=>[t(a(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[1]||(e[1]=()=>{s.value=!1}),vueCode:a(V)},h({_:2},[f.value?{name:"vue",fn:o(()=>[t(a(f))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[8]||(e[8]=n("h2",{id:"可关闭",tabindex:"-1"},[d("可关闭 "),n("a",{class:"header-anchor",href:"#可关闭","aria-label":"Permalink to “可关闭”"},"​")],-1)),m(t(a(b),null,null,512),[[p,s.value]]),t(l,null,{default:o(()=>[t(a(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[2]||(e[2]=()=>{s.value=!1}),vueCode:a(C)},h({_:2},[w.value?{name:"vue",fn:o(()=>[t(a(w))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[9]||(e[9]=n("h2",{id:"自定义持续时间",tabindex:"-1"},[d("自定义持续时间 "),n("a",{class:"header-anchor",href:"#自定义持续时间","aria-label":"Permalink to “自定义持续时间”"},"​")],-1)),m(t(a(b),null,null,512),[[p,s.value]]),t(l,null,{default:o(()=>[t(a(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[3]||(e[3]=()=>{s.value=!1}),vueCode:a(D)},h({_:2},[v.value?{name:"vue",fn:o(()=>[t(a(v))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[10]||(e[10]=M('<h2 id="api-方法" tabindex="-1">API 方法 <a class="header-anchor" href="#api-方法" aria-label="Permalink to “API 方法”">​</a></h2><table tabindex="0"><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>create</td><td>创建一条消息</td><td>(content: string) 或 (options: MessageCreationOptions)</td></tr><tr><td>primary</td><td>创建主要类型消息</td><td>(content: string) 或 (options: MessageCreationOptions)</td></tr><tr><td>secondary</td><td>创建次要类型消息</td><td>(content: string) 或 (options: MessageCreationOptions)</td></tr><tr><td>success</td><td>创建成功类型消息</td><td>(content: string) 或 (options: MessageCreationOptions)</td></tr><tr><td>warning</td><td>创建警告类型消息</td><td>(content: string) 或 (options: MessageCreationOptions)</td></tr><tr><td>danger</td><td>创建危险类型消息</td><td>(content: string) 或 (options: MessageCreationOptions)</td></tr></tbody></table><h2 id="messagecreationoptions-属性" tabindex="-1">MessageCreationOptions 属性 <a class="header-anchor" href="#messagecreationoptions-属性" aria-label="Permalink to “MessageCreationOptions 属性”">​</a></h2><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>type</td><td><code>MessageType</code></td><td><code>primary</code></td><td>消息类型，可选值为 <code>primary</code>、<code>secondary</code>、<code>success</code>、<code>warning</code>、<code>danger</code></td></tr><tr><td>content</td><td><code>string</code></td><td>—</td><td>消息内容</td></tr><tr><td>delay</td><td><code>number</code></td><td><code>3000</code></td><td>消息显示时间（毫秒）</td></tr><tr><td>closable</td><td><code>boolean</code></td><td><code>false</code></td><td>是否可关闭</td></tr></tbody></table>',4))])}}});export{Z as __pageData,x as default};
