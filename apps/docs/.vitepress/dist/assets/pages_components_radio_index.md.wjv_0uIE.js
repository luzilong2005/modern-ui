const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/Sizes.Cbbp0yw-.js","assets/chunks/index.DOkYiQFG.js","assets/chunks/framework.D0bRv6GJ.js","assets/chunks/Group.6NxD7X0v.js","assets/chunks/Disabled.jDiXxRxJ.js","assets/chunks/Basics.gXd1Y8yc.js"])))=>i.map(i=>d[i]);
import{B as s,p as u,W as c,x as y,I as k,c as R,o as V,j as a,ah as m,J as t,ai as L,a as i,aj as p,k as d,w as r,ak as b}from"./chunks/framework.D0bRv6GJ.js";import{L as v,N as h}from"./chunks/index.DG-4cLGL.js";const M=`<template>\r
    <div>\r
        <div class="mb-4">\r
            <p class="mb-2">小尺寸</p>\r
            <MuRadio size="sm" value="small" label="小尺寸单选框" />\r
        </div>\r
        <div class="mb-4">\r
            <p class="mb-2">中等尺寸</p>\r
            <MuRadio size="md" value="medium" label="中等尺寸单选框" />\r
        </div>\r
        <div>\r
            <p class="mb-2">大尺寸</p>\r
            <MuRadio size="lg" value="large" label="大尺寸单选框" />\r
        </div>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuRadio } from "modern-ui";\r
<\/script>\r
`,D=`<template>\r
    <div>\r
        <MuRadioGroup v-model="selectedValue" name="fruits">\r
            <MuRadio value="apple" label="苹果" />\r
            <MuRadio value="banana" label="香蕉" />\r
            <MuRadio value="orange" label="橙子" />\r
        </MuRadioGroup>\r
        <p>已选择: {{ selectedValue }}</p>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue';\r
import { MuRadio, MuRadioGroup } from "modern-ui";\r
\r
const selectedValue = ref<string>('apple');\r
<\/script>\r
`,W=`<template>\r
    <div>\r
        <MuRadio value="option1" label="未选中的禁用状态" disabled />\r
        <MuRadio value="option2" label="选中的禁用状态" disabled :default-checked="true" />\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuRadio } from "modern-ui";\r
<\/script>\r
`,B=`<template>\r
    <div>\r
        <MuRadio value="option1" label="选项1" />\r
        <MuRadio value="option2" label="选项2" />\r
        <MuRadio value="option3" label="选项3" />\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuRadio } from "modern-ui";\r
<\/script>\r
`,C=JSON.parse('{"title":"Radio 单选框","description":"","frontmatter":{},"headers":[],"relativePath":"pages/components/radio/index.md","filePath":"pages/components/radio/index.md"}'),A={name:"pages/components/radio/index.md"},H=Object.assign(A,{setup(T){const f=s();u(async()=>{f.value=(await c(async()=>{const{default:o}=await import("./chunks/Sizes.Cbbp0yw-.js");return{default:o}},__vite__mapDeps([0,1,2]))).default});const _=s();u(async()=>{_.value=(await c(async()=>{const{default:o}=await import("./chunks/Group.6NxD7X0v.js");return{default:o}},__vite__mapDeps([3,1,2]))).default});const w=s();u(async()=>{w.value=(await c(async()=>{const{default:o}=await import("./chunks/Disabled.jDiXxRxJ.js");return{default:o}},__vite__mapDeps([4,1,2]))).default});const l=y(!0),g=s();return u(async()=>{g.value=(await c(async()=>{const{default:o}=await import("./chunks/Basics.gXd1Y8yc.js");return{default:o}},__vite__mapDeps([5,1,2]))).default}),(o,e)=>{const n=k("ClientOnly");return V(),R("div",null,[e[4]||(e[4]=a("h1",{id:"radio-单选框",tabindex:"-1"},[i("Radio 单选框 "),a("a",{class:"header-anchor",href:"#radio-单选框","aria-label":"Permalink to “Radio 单选框”"},"​")],-1)),e[5]||(e[5]=a("p",null,"用于在多个选项中选择单个选项。",-1)),e[6]||(e[6]=a("h2",{id:"基础用法",tabindex:"-1"},[i("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":"Permalink to “基础用法”"},"​")],-1)),m(t(d(v),null,null,512),[[p,l.value]]),t(n,null,{default:r(()=>[t(d(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:d(B)},b({_:2},[g.value?{name:"vue",fn:r(()=>[t(d(g))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[7]||(e[7]=a("h2",{id:"禁用状态",tabindex:"-1"},[i("禁用状态 "),a("a",{class:"header-anchor",href:"#禁用状态","aria-label":"Permalink to “禁用状态”"},"​")],-1)),m(t(d(v),null,null,512),[[p,l.value]]),t(n,null,{default:r(()=>[t(d(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[1]||(e[1]=()=>{l.value=!1}),vueCode:d(W)},b({_:2},[w.value?{name:"vue",fn:r(()=>[t(d(w))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[8]||(e[8]=a("h2",{id:"单选框组",tabindex:"-1"},[i("单选框组 "),a("a",{class:"header-anchor",href:"#单选框组","aria-label":"Permalink to “单选框组”"},"​")],-1)),m(t(d(v),null,null,512),[[p,l.value]]),t(n,null,{default:r(()=>[t(d(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[2]||(e[2]=()=>{l.value=!1}),vueCode:d(D)},b({_:2},[_.value?{name:"vue",fn:r(()=>[t(d(_))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[9]||(e[9]=a("h2",{id:"不同尺寸",tabindex:"-1"},[i("不同尺寸 "),a("a",{class:"header-anchor",href:"#不同尺寸","aria-label":"Permalink to “不同尺寸”"},"​")],-1)),m(t(d(v),null,null,512),[[p,l.value]]),t(n,null,{default:r(()=>[t(d(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[3]||(e[3]=()=>{l.value=!1}),vueCode:d(M)},b({_:2},[f.value?{name:"vue",fn:r(()=>[t(d(f))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[10]||(e[10]=L('<h2 id="radio-props-属性" tabindex="-1">Radio Props 属性 <a class="header-anchor" href="#radio-props-属性" aria-label="Permalink to “Radio Props 属性”">​</a></h2><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td><code>string</code></td><td>—</td><td>单选框的id</td></tr><tr><td>name</td><td><code>string</code></td><td>—</td><td>单选框的name</td></tr><tr><td>label</td><td><code>string</code></td><td>—</td><td>单选框的标签</td></tr><tr><td>labelPosition</td><td><code>InlineInputLabelPosition</code></td><td><code>right</code></td><td>标签位置，可选值为 <code>left</code>、<code>right</code></td></tr><tr><td>size</td><td><code>RadioSize</code></td><td><code>md</code></td><td>单选框尺寸，可选值为 <code>sm</code>、<code>md</code>、<code>lg</code></td></tr><tr><td>value</td><td><code>string</code></td><td>—</td><td>单选框的值（在单选框组中使用）</td></tr><tr><td>defaultChecked</td><td><code>boolean</code></td><td><code>false</code></td><td>默认是否选中</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>是否禁用</td></tr></tbody></table><h2 id="radio-events-事件" tabindex="-1">Radio Events 事件 <a class="header-anchor" href="#radio-events-事件" aria-label="Permalink to “Radio Events 事件”">​</a></h2><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>状态改变时触发</td><td>(ev: Event, checked: boolean)</td></tr></tbody></table><h2 id="radiogroup-props-属性" tabindex="-1">RadioGroup Props 属性 <a class="header-anchor" href="#radiogroup-props-属性" aria-label="Permalink to “RadioGroup Props 属性”">​</a></h2><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>name</td><td><code>string</code></td><td>—</td><td>单选框组的name</td></tr><tr><td>label</td><td><code>string</code></td><td>—</td><td>单选框组的标签</td></tr><tr><td>size</td><td><code>RadioSize</code></td><td><code>md</code></td><td>单选框组尺寸，可选值为 <code>sm</code>、<code>md</code>、<code>lg</code></td></tr><tr><td>value</td><td><code>string</code></td><td>—</td><td>单选框组选中的值（v-model绑定）</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>是否禁用整个单选框组</td></tr></tbody></table>',6))])}}});export{C as __pageData,H as default};
