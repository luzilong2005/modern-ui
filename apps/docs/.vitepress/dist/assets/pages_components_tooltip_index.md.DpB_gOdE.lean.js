const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/Delay.D0aHx0eY.js","assets/chunks/index.DOkYiQFG.js","assets/chunks/framework.D0bRv6GJ.js","assets/chunks/Offset.C0Qj_lR0.js","assets/chunks/Sizes.Ddzjvyls.js","assets/chunks/Triggers.DprnLuZq.js","assets/chunks/Positions.2OrbyXKB.js","assets/chunks/Basics.C6BSP5Vr.js"])))=>i.map(i=>d[i]);
import{B as s,p as u,W as c,x as y,I as g,c as k,o as A,j as n,ah as p,J as e,ai as X,a as i,aj as b,k as o,w as a,ak as m}from"./chunks/framework.D0bRv6GJ.js";import{L as v,N as f}from"./chunks/index.DG-4cLGL.js";const D=`<template>\r
    <div class="flex gap-4">\r
        <MuTooltip content="无延迟(0ms)" :delay="0">\r
            <button>无延迟</button>\r
        </MuTooltip>\r
        <MuTooltip content="短延迟(500ms)" :delay="500">\r
            <button>短延迟</button>\r
        </MuTooltip>\r
        <MuTooltip content="默认延迟(1000ms)" :delay="1000">\r
            <button>默认延迟</button>\r
        </MuTooltip>\r
        <MuTooltip content="长延迟(2000ms)" :delay="2000">\r
            <button>长延迟</button>\r
        </MuTooltip>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuTooltip } from "modern-ui";\r
<\/script>\r
`,W=`<template>\r
    <div class="flex gap-4">\r
        <MuTooltip content="默认偏移量(8px)" :offset="8">\r
            <button>默认偏移量</button>\r
        </MuTooltip>\r
        <MuTooltip content="大偏移量(20px)" :offset="20">\r
            <button>大偏移量</button>\r
        </MuTooltip>\r
        <MuTooltip content="自定义偏移量[x: 10, y: 20]" :offset="[10, 20]">\r
            <button>自定义偏移量</button>\r
        </MuTooltip>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuTooltip } from "modern-ui";\r
<\/script>\r
`,V=`<template>\r
    <div class="flex gap-4">\r
        <MuTooltip content="小尺寸" size="sm">\r
            <button>小尺寸</button>\r
        </MuTooltip>\r
        <MuTooltip content="中等尺寸" size="md">\r
            <button>中等尺寸</button>\r
        </MuTooltip>\r
        <MuTooltip content="大尺寸" size="lg">\r
            <button>大尺寸</button>\r
        </MuTooltip>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuTooltip } from "modern-ui";\r
<\/script>\r
`,B=`<template>\r
    <div class="flex gap-4">\r
        <MuTooltip content="悬停触发" trigger="hover">\r
            <button>悬停触发</button>\r
        </MuTooltip>\r
        <MuTooltip content="点击触发" trigger="click">\r
            <button>点击触发</button>\r
        </MuTooltip>\r
        <MuTooltip content="右键触发" trigger="contextmenu">\r
            <button>右键触发</button>\r
        </MuTooltip>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuTooltip } from "modern-ui";\r
<\/script>\r
`,L=`<template>\r
    <div class="flex flex-wrap gap-4">\r
        <div class="flex flex-col items-center">\r
            <MuTooltip content="顶部" position="top">\r
                <button>top</button>\r
            </MuTooltip>\r
        </div>\r
        <div class="flex flex-col items-center">\r
            <MuTooltip content="顶部左侧" position="top-start">\r
                <button>top-start</button>\r
            </MuTooltip>\r
        </div>\r
        <div class="flex flex-col items-center">\r
            <MuTooltip content="顶部右侧" position="top-end">\r
                <button>top-end</button>\r
            </MuTooltip>\r
        </div>\r
        <div class="flex flex-col items-center">\r
            <MuTooltip content="底部" position="bottom">\r
                <button>bottom</button>\r
            </MuTooltip>\r
        </div>\r
        <div class="flex flex-col items-center">\r
            <MuTooltip content="底部左侧" position="bottom-start">\r
                <button>bottom-start</button>\r
            </MuTooltip>\r
        </div>\r
        <div class="flex flex-col items-center">\r
            <MuTooltip content="底部右侧" position="bottom-end">\r
                <button>bottom-end</button>\r
            </MuTooltip>\r
        </div>\r
        <div class="flex flex-col items-center">\r
            <MuTooltip content="左侧" position="left">\r
                <button>left</button>\r
            </MuTooltip>\r
        </div>\r
        <div class="flex flex-col items-center">\r
            <MuTooltip content="左侧顶部" position="left-start">\r
                <button>left-start</button>\r
            </MuTooltip>\r
        </div>\r
        <div class="flex flex-col items-center">\r
            <MuTooltip content="左侧底部" position="left-end">\r
                <button>left-end</button>\r
            </MuTooltip>\r
        </div>\r
        <div class="flex flex-col items-center">\r
            <MuTooltip content="右侧" position="right">\r
                <button>right</button>\r
            </MuTooltip>\r
        </div>\r
        <div class="flex flex-col items-center">\r
            <MuTooltip content="右侧顶部" position="right-start">\r
                <button>right-start</button>\r
            </MuTooltip>\r
        </div>\r
        <div class="flex flex-col items-center">\r
            <MuTooltip content="右侧底部" position="right-end">\r
                <button>right-end</button>\r
            </MuTooltip>\r
        </div>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuTooltip } from "modern-ui";\r
<\/script>\r
`,j=`<template>\r
    <div>\r
        <MuTooltip content="这是一个工具提示">\r
            <button>悬停显示提示</button>\r
        </MuTooltip>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuTooltip } from "modern-ui";\r
<\/script>\r
`,Z=JSON.parse('{"title":"Tooltip 工具提示","description":"","frontmatter":{},"headers":[],"relativePath":"pages/components/tooltip/index.md","filePath":"pages/components/tooltip/index.md"}'),H={name:"pages/components/tooltip/index.md"},J=Object.assign(H,{setup(C){const h=s();u(async()=>{h.value=(await c(async()=>{const{default:r}=await import("./chunks/Delay.D0aHx0eY.js");return{default:r}},__vite__mapDeps([0,1,2]))).default});const T=s();u(async()=>{T.value=(await c(async()=>{const{default:r}=await import("./chunks/Offset.C0Qj_lR0.js");return{default:r}},__vite__mapDeps([3,1,2]))).default});const M=s();u(async()=>{M.value=(await c(async()=>{const{default:r}=await import("./chunks/Sizes.Ddzjvyls.js");return{default:r}},__vite__mapDeps([4,1,2]))).default});const w=s();u(async()=>{w.value=(await c(async()=>{const{default:r}=await import("./chunks/Triggers.DprnLuZq.js");return{default:r}},__vite__mapDeps([5,1,2]))).default});const _=s();u(async()=>{_.value=(await c(async()=>{const{default:r}=await import("./chunks/Positions.2OrbyXKB.js");return{default:r}},__vite__mapDeps([6,1,2]))).default});const l=y(!0),x=s();return u(async()=>{x.value=(await c(async()=>{const{default:r}=await import("./chunks/Basics.C6BSP5Vr.js");return{default:r}},__vite__mapDeps([7,1,2]))).default}),(r,t)=>{const d=g("ClientOnly");return A(),k("div",null,[t[6]||(t[6]=n("h1",{id:"tooltip-工具提示",tabindex:"-1"},[i("Tooltip 工具提示 "),n("a",{class:"header-anchor",href:"#tooltip-工具提示","aria-label":"Permalink to “Tooltip 工具提示”"},"​")],-1)),t[7]||(t[7]=n("p",null,"用于在鼠标悬停或点击时显示额外的信息。",-1)),t[8]||(t[8]=n("h2",{id:"基础用法",tabindex:"-1"},[i("基础用法 "),n("a",{class:"header-anchor",href:"#基础用法","aria-label":"Permalink to “基础用法”"},"​")],-1)),p(e(o(v),null,null,512),[[b,l.value]]),e(d,null,{default:a(()=>[e(o(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{l.value=!1}),vueCode:o(j)},m({_:2},[x.value?{name:"vue",fn:a(()=>[e(o(x))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[9]||(t[9]=n("h2",{id:"不同位置",tabindex:"-1"},[i("不同位置 "),n("a",{class:"header-anchor",href:"#不同位置","aria-label":"Permalink to “不同位置”"},"​")],-1)),p(e(o(v),null,null,512),[[b,l.value]]),e(d,null,{default:a(()=>[e(o(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[1]||(t[1]=()=>{l.value=!1}),vueCode:o(L)},m({_:2},[_.value?{name:"vue",fn:a(()=>[e(o(_))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[10]||(t[10]=n("h2",{id:"不同触发方式",tabindex:"-1"},[i("不同触发方式 "),n("a",{class:"header-anchor",href:"#不同触发方式","aria-label":"Permalink to “不同触发方式”"},"​")],-1)),p(e(o(v),null,null,512),[[b,l.value]]),e(d,null,{default:a(()=>[e(o(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[2]||(t[2]=()=>{l.value=!1}),vueCode:o(B)},m({_:2},[w.value?{name:"vue",fn:a(()=>[e(o(w))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[11]||(t[11]=n("h2",{id:"不同尺寸",tabindex:"-1"},[i("不同尺寸 "),n("a",{class:"header-anchor",href:"#不同尺寸","aria-label":"Permalink to “不同尺寸”"},"​")],-1)),p(e(o(v),null,null,512),[[b,l.value]]),e(d,null,{default:a(()=>[e(o(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[3]||(t[3]=()=>{l.value=!1}),vueCode:o(V)},m({_:2},[M.value?{name:"vue",fn:a(()=>[e(o(M))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[12]||(t[12]=n("h2",{id:"自定义偏移量",tabindex:"-1"},[i("自定义偏移量 "),n("a",{class:"header-anchor",href:"#自定义偏移量","aria-label":"Permalink to “自定义偏移量”"},"​")],-1)),p(e(o(v),null,null,512),[[b,l.value]]),e(d,null,{default:a(()=>[e(o(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[4]||(t[4]=()=>{l.value=!1}),vueCode:o(W)},m({_:2},[T.value?{name:"vue",fn:a(()=>[e(o(T))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[13]||(t[13]=n("h2",{id:"自定义延迟",tabindex:"-1"},[i("自定义延迟 "),n("a",{class:"header-anchor",href:"#自定义延迟","aria-label":"Permalink to “自定义延迟”"},"​")],-1)),p(e(o(v),null,null,512),[[b,l.value]]),e(d,null,{default:a(()=>[e(o(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[5]||(t[5]=()=>{l.value=!1}),vueCode:o(D)},m({_:2},[h.value?{name:"vue",fn:a(()=>[e(o(h))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[14]||(t[14]=X("",4))])}}});export{Z as __pageData,J as default};
