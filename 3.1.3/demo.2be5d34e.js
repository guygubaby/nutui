var t=Object.defineProperty,e=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(e,r,n)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n;import{c}from"./mobile.b2064d64.js";import{a as p,A as o,r as i,o as u,e as d,g as f,j as _,k as b,l as v}from"./vendor.f7062dc0.js";import"./index.ddbbd981.js";const{createDemo:g}=c("steps");var h=g({props:{},setup(){const t=p({current1:1,current2:1,current3:1,current4:1,current5:1});return c=((t,e)=>{for(var r in e||(e={}))l.call(e,r)&&s(t,r,e[r]);if(n)for(var r of n(e))a.call(e,r)&&s(t,r,e[r]);return t})({},o(t)),e(c,r({handleStep:e=>{t[e]>=3?t[e]=1:t[e]+=1}}));var c}});const y={class:"demo padding"},m=f("h2",null,"基本用法",-1),j={class:"steps-wrapper"},w=v("1"),x=v("2"),O=v("3"),P={class:"steps-button"},S=v("下一步"),k=f("h2",null,"标题和描述信息",-1),C={class:"steps-wrapper"},D=v("1"),A={class:"steps-button",style:{"margin-top":"10px"}},E=v("下一步"),I=f("h2",null,"自定义图标",-1),q={class:"steps-wrapper"},z=v("1"),B=v("2"),F=v("3"),G=f("h2",null,"竖向步骤条",-1),H={class:"steps-wrapper",style:{height:"300px",padding:"15px 30px"}},J=v("1"),K=v("2"),L=v("3"),M=f("h2",null,"竖向步骤条",-1),N={class:"steps-wrapper",style:{height:"300px",padding:"15px 40px"}},Q=v("1"),R=v("2"),T=v("3");h.render=function(t,e,r,n,l,a){const s=i("nut-step"),c=i("nut-steps"),p=i("nut-button");return u(),d("div",y,[m,f("div",j,[_(c,{current:t.current1},{default:b((()=>[_(s,{title:"步骤一"},{default:b((()=>[w])),_:1}),_(s,{title:"步骤二"},{default:b((()=>[x])),_:1}),_(s,{title:"步骤三"},{default:b((()=>[O])),_:1})])),_:1},8,["current"]),f("div",P,[_(p,{type:"danger",onClick:e[0]||(e[0]=e=>t.handleStep("current1"))},{default:b((()=>[S])),_:1})])]),k,f("div",C,[_(c,{current:t.current2},{default:b((()=>[_(s,{title:"步骤一",content:"步骤描述"},{default:b((()=>[D])),_:1}),_(s,{title:"步骤二",content:"步骤描述"}),_(s,{title:"步骤三",content:"步骤描述"})])),_:1},8,["current"]),f("div",A,[_(p,{type:"danger",onClick:e[1]||(e[1]=e=>t.handleStep("current2"))},{default:b((()=>[E])),_:1})])]),I,f("div",q,[_(c,{current:"1"},{default:b((()=>[_(s,{title:"已完成",icon:"service"},{default:b((()=>[z])),_:1}),_(s,{title:"进行中",icon:"people"},{default:b((()=>[B])),_:1}),_(s,{title:"未开始",icon:"location2"},{default:b((()=>[F])),_:1})])),_:1})]),G,f("div",H,[_(c,{direction:"vertical",current:"2"},{default:b((()=>[_(s,{title:"已完成",content:"您的订单已经打包完成，商品已发出"},{default:b((()=>[J])),_:1}),_(s,{title:"进行中",content:"您的订单正在配送途中"},{default:b((()=>[K])),_:1}),_(s,{title:"未开始",content:"收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"},{default:b((()=>[L])),_:1})])),_:1})]),M,f("div",N,[_(c,{direction:"vertical","progress-dot":"",current:"2"},{default:b((()=>[_(s,{title:"已完成",content:"您的订单已经打包完成，商品已发出"},{default:b((()=>[Q])),_:1}),_(s,{title:"进行中",content:"您的订单正在配送途中"},{default:b((()=>[R])),_:1}),_(s,{title:"未开始",content:"<p>收货地址为：</p><p>北京市经济技术开发区科创十一街18号院京东大厦</p>"},{default:b((()=>[T])),_:1})])),_:1})])])};export{h as default};
