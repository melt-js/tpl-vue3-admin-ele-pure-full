import{a7 as m}from"./loadApp-DNNHLn0u.js";import{d as p,r as l,o as u,c as f,w as o,aq as t,as as c,a as s,a0 as _,ar as n,m as g}from"./index-C5IvqMyT.js";const v={class:"card-header"},w={class:"font-medium"},k={class:"mb-4 whitespace-pre-wrap rounded bg-[var(--el-fill-color-light)] p-4 text-sm"},y=p({name:"Markdown",__name:"index",setup(x){const a=g(`
\`\`\`ts
function sayHello(): void {
	console.log("Hello, World!");
}
sayHello();
\`\`\`
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
`);return(b,e)=>{const r=l("el-link"),d=l("el-card");return u(),f(d,{shadow:"never"},{header:o(()=>[t("div",v,[t("span",w,[e[2]||(e[2]=n(" Markdown组件，采用开源的 ",-1)),s(r,{href:"https://b3log.org/vditor/",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:o(()=>[...e[1]||(e[1]=[n(" Vditor ",-1)])]),_:1})])]),s(r,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/markdown",target:"_blank"},{default:o(()=>[...e[3]||(e[3]=[n(" 代码位置 src/views/markdown ",-1)])]),_:1})]),default:o(()=>[e[4]||(e[4]=t("p",{class:"my-4 font-medium"},"双向绑定",-1)),t("pre",k,c(a.value),1),s(_(m),{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=i=>a.value=i),options:{height:560,outline:{enable:!0,position:"right"}}},null,8,["modelValue"])]),_:1})}}});export{y as default};
