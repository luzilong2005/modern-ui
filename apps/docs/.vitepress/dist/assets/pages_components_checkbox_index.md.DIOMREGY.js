const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/Disabled.ybsaSpyQ.js","assets/chunks/index.DOkYiQFG.js","assets/chunks/framework.D0bRv6GJ.js","assets/chunks/Group.BFJuOE6b.js","assets/chunks/WithLabel.BYujBZkr.js","assets/chunks/Sizes.DLvWTwYh.js","assets/chunks/Basics._CaByLEj.js"])))=>i.map(i=>d[i]);
import{B as i,p as c,W as u,x as C,I as W,c as y,o as g,j as d,ah as b,J as t,ai as L,a as n,aj as h,k as a,w as r,ak as m}from"./chunks/framework.D0bRv6GJ.js";import{L as p,N as v}from"./chunks/index.DG-4cLGL.js";const V=`<template>\r
    <div>\r
        <MuCheckbox label="未选中的禁用状态" disabled />\r
        <MuCheckbox label="选中的禁用状态" disabled :default-checked="true" />\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { MuCheckbox } from "modern-ui";\r
<\/script>\r
`,M=`<template>\r
    <div>\r
        <MuCheckboxGroup v-model="selectedValues" name="fruits">\r
            <MuCheckbox value="apple" label="苹果" />\r
            <MuCheckbox value="banana" label="香蕉" />\r
            <MuCheckbox value="orange" label="橙子" />\r
        </MuCheckboxGroup>\r
        <p>已选择: {{ selectedValues.join(', ') }}</p>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue';\r
import { MuCheckbox, MuCheckboxGroup } from "modern-ui";\r
\r
const selectedValues = ref<string[]>(['apple']);\r
<\/script>\r
`,D=`<template>
    <div style="display: flex; gap: 1rem;">
        <MuCheckbox label="HTML"/>
        <MuCheckbox label="CSS"/>
        <MuCheckbox label="JavaScript"/>
    </div>
</template>

<script setup lang="ts">
import { MuCheckbox } from "modern-ui";
<\/script>
`,A=`<template>
    <div style="display: flex; gap: 1rem;">
        <template v-for="item in CHECKBOX_SIZES" :key="item">
            <MuCheckbox :size="item" :label="item"/>
        </template>
    </div>
</template>

<script setup lang="ts">
import { MuCheckbox,CHECKBOX_SIZES } from "modern-ui";
<\/script>
`,B=`<template>
    <div>
        <MuCheckbox />
    </div>
</template>

<script setup lang="ts">
import { MuCheckbox } from "modern-ui";
<\/script>
`,N=JSON.parse('{"title":"Checkbox 复选框","description":"","frontmatter":{},"headers":[],"relativePath":"pages/components/checkbox/index.md","filePath":"pages/components/checkbox/index.md"}'),T={name:"pages/components/checkbox/index.md"},E=Object.assign(T,{setup(j){const f=i();c(async()=>{f.value=(await u(async()=>{const{default:o}=await import("./chunks/Disabled.ybsaSpyQ.js");return{default:o}},__vite__mapDeps([0,1,2]))).default});const k=i();c(async()=>{k.value=(await u(async()=>{const{default:o}=await import("./chunks/Group.BFJuOE6b.js");return{default:o}},__vite__mapDeps([3,1,2]))).default});const _=i();c(async()=>{_.value=(await u(async()=>{const{default:o}=await import("./chunks/WithLabel.BYujBZkr.js");return{default:o}},__vite__mapDeps([4,1,2]))).default});const w=i();c(async()=>{w.value=(await u(async()=>{const{default:o}=await import("./chunks/Sizes.DLvWTwYh.js");return{default:o}},__vite__mapDeps([5,1,2]))).default});const l=C(!0),x=i();return c(async()=>{x.value=(await u(async()=>{const{default:o}=await import("./chunks/Basics._CaByLEj.js");return{default:o}},__vite__mapDeps([6,1,2]))).default}),(o,e)=>{const s=W("ClientOnly");return g(),y("div",null,[e[5]||(e[5]=d("h1",{id:"checkbox-复选框",tabindex:"-1"},[n("Checkbox 复选框 "),d("a",{class:"header-anchor",href:"#checkbox-复选框","aria-label":"Permalink to “Checkbox 复选框”"},"​")],-1)),e[6]||(e[6]=d("p",null,"用于在多个选项中选择一个或多个选项。",-1)),e[7]||(e[7]=d("h2",{id:"基础用法",tabindex:"-1"},[n("基础用法 "),d("a",{class:"header-anchor",href:"#基础用法","aria-label":"Permalink to “基础用法”"},"​")],-1)),b(t(a(p),null,null,512),[[h,l.value]]),t(s,null,{default:r(()=>[t(a(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:a(B)},m({_:2},[x.value?{name:"vue",fn:r(()=>[t(a(x))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[8]||(e[8]=d("h2",{id:"大小",tabindex:"-1"},[n("大小 "),d("a",{class:"header-anchor",href:"#大小","aria-label":"Permalink to “大小”"},"​")],-1)),b(t(a(p),null,null,512),[[h,l.value]]),t(s,null,{default:r(()=>[t(a(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[1]||(e[1]=()=>{l.value=!1}),vueCode:a(A)},m({_:2},[w.value?{name:"vue",fn:r(()=>[t(a(w))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[9]||(e[9]=d("h2",{id:"带-label",tabindex:"-1"},[n("带 Label "),d("a",{class:"header-anchor",href:"#带-label","aria-label":"Permalink to “带 Label”"},"​")],-1)),b(t(a(p),null,null,512),[[h,l.value]]),t(s,null,{default:r(()=>[t(a(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[2]||(e[2]=()=>{l.value=!1}),vueCode:a(D)},m({_:2},[_.value?{name:"vue",fn:r(()=>[t(a(_))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[10]||(e[10]=d("h2",{id:"复选框组",tabindex:"-1"},[n("复选框组 "),d("a",{class:"header-anchor",href:"#复选框组","aria-label":"Permalink to “复选框组”"},"​")],-1)),b(t(a(p),null,null,512),[[h,l.value]]),t(s,null,{default:r(()=>[t(a(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[3]||(e[3]=()=>{l.value=!1}),vueCode:a(M)},m({_:2},[k.value?{name:"vue",fn:r(()=>[t(a(k))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[11]||(e[11]=d("h2",{id:"禁用状态",tabindex:"-1"},[n("禁用状态 "),d("a",{class:"header-anchor",href:"#禁用状态","aria-label":"Permalink to “禁用状态”"},"​")],-1)),b(t(a(p),null,null,512),[[h,l.value]]),t(s,null,{default:r(()=>[t(a(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"vitesse-light",darkTheme:"vitesse-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[4]||(e[4]=()=>{l.value=!1}),vueCode:a(V)},m({_:2},[f.value?{name:"vue",fn:r(()=>[t(a(f))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[12]||(e[12]=L('<h2 id="checkbox-props-属性" tabindex="-1">Checkbox Props 属性 <a class="header-anchor" href="#checkbox-props-属性" aria-label="Permalink to “Checkbox Props 属性”">​</a></h2><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td><code>string</code></td><td>—</td><td>复选框的id</td></tr><tr><td>name</td><td><code>string</code></td><td>—</td><td>复选框的name</td></tr><tr><td>label</td><td><code>string</code></td><td>—</td><td>复选框的标签</td></tr><tr><td>labelPosition</td><td><code>InlineInputLabelPosition</code></td><td>—</td><td>标签位置，可选值为 <code>left</code>、<code>right</code></td></tr><tr><td>size</td><td><code>CheckboxSize</code></td><td><code>md</code></td><td>复选框尺寸，可选值为 <code>sm</code>、<code>md</code>、<code>lg</code></td></tr><tr><td>value</td><td><code>string</code></td><td>—</td><td>复选框的值（在复选框组中使用）</td></tr><tr><td>defaultChecked</td><td><code>boolean</code></td><td><code>false</code></td><td>默认是否选中</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>是否禁用</td></tr></tbody></table><h2 id="checkbox-events-事件" tabindex="-1">Checkbox Events 事件 <a class="header-anchor" href="#checkbox-events-事件" aria-label="Permalink to “Checkbox Events 事件”">​</a></h2><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>状态改变时触发</td><td>(ev: Event, checked: boolean)</td></tr></tbody></table><h2 id="checkboxgroup-props-属性" tabindex="-1">CheckboxGroup Props 属性 <a class="header-anchor" href="#checkboxgroup-props-属性" aria-label="Permalink to “CheckboxGroup Props 属性”">​</a></h2><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>name</td><td><code>string</code></td><td>—</td><td>复选框组的name</td></tr><tr><td>values</td><td><code>Array&lt;string&gt;</code></td><td>—</td><td>复选框组选中的值（v-model绑定）</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>是否禁用整个复选框组</td></tr></tbody></table>',6))])}}});export{N as __pageData,E as default};
