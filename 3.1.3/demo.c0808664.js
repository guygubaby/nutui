import{c as t}from"./mobile.b2064d64.js";import{m as e,r as l,o as i,e as s,j as c,k as d,g as n}from"./vendor.f7062dc0.js";import"./index.ddbbd981.js";const{createDemo:o}=t("cell");var a=o({setup:()=>({testClick:t=>{console.log("点击事件")},switchChecked:e(!0)})});const u={class:"demo"},m=n("h2",null,"基本用法",-1),r=n("h2",null,"直接使用插槽(slot)",-1),h=n("div",null,"自定义内容",-1),f=n("img",{class:"nut-icon",src:"https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"},null,-1),k=n("h2",null,"展示图标",-1),p=n("h2",null,"只展示 desc ，可通过 desc-text-align 调整内容位置",-1);a.render=function(t,e,n,o,a,g){const b=l("nut-cell"),j=l("nut-cell-group"),C=l("nut-switch");return i(),s("div",u,[m,c(b,{title:"我是标题",desc:"描述文字"}),c(b,{title:"我是标题","sub-title":"副标题描述",desc:"描述文字"}),c(b,{title:"点击测试",onClick:t.testClick},null,8,["onClick"]),c(b,{title:"圆角设置 0","round-radius":"0"}),r,c(b,{title:"我是标题",desc:"描述文字"},{default:d((()=>[h])),_:1}),c(j,{title:"链接 | 分组用法"},{default:d((()=>[c(b,{title:"链接","is-link":""}),c(b,{title:"URL 跳转",desc:"https://jd.com","is-link":"",url:"https://jd.com"}),c(b,{title:"路由跳转 ’/‘ ",to:"/"})])),_:1}),c(j,{title:"自定义右侧箭头区域"},{default:d((()=>[c(b,{title:"Switch"},{link:d((()=>[c(C,{modelValue:t.switchChecked,"onUpdate:modelValue":e[0]||(e[0]=e=>t.switchChecked=e)},null,8,["modelValue"])])),_:1})])),_:1}),c(j,{title:"自定义左侧 Icon 区域"},{default:d((()=>[c(b,{title:"图片"},{icon:d((()=>[f])),_:1})])),_:1}),k,c(b,{title:"姓名",icon:"my",desc:"张三",isLink:""}),p,c(b,{"desc-text-align":"left",desc:"张三"})])};export{a as default};
