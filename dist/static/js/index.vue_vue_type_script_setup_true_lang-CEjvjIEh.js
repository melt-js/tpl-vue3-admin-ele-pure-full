var _e=Object.defineProperty;var j=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var q=(e,t,n)=>t in e?_e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,I=(e,t)=>{for(var n in t||(t={}))ue.call(t,n)&&q(e,n,t[n]);if(j)for(var n of j(t))se.call(t,n)&&q(e,n,t[n]);return e};var L=(e,t,n)=>new Promise((s,u)=>{var y=a=>{try{m(n.next(a))}catch(b){u(b)}},i=a=>{try{m(n.throw(a))}catch(b){u(b)}},m=a=>a.done?s(a.value):Promise.resolve(a.value).then(y,i);m((n=n.apply(e,t)).next())});import{a as re}from"./data-MuHSxjsp.js";import{D as le,m as de}from"./loadApp-CQAEZ7rC.js";import{a as me,cf as ce,d as Y,U as K,a1 as ve,G as f,T as V,R,o as r,c as $,ap as c,ad as z,av as U,a9 as G,aK as J,au as Q,a7 as g,b0 as C,as as W,b5 as X,ak as h,aq as M,ax as F,ar as P,al as be,r as pe,V as E}from"./index-B73EkWyN.js";const Z=function(e){let t=Array.isArray(e)?[]:{};if(e&&typeof e=="object")for(let n in e)e.hasOwnProperty(n)&&(e[n]&&typeof e[n]=="object"?t[n]=Z(e[n]):t[n]=e[n]);return t};var w=Y({name:"MouseMenu",props:{appendToBody:{type:Boolean,default:!0},menuWidth:{type:Number,default:200},menuList:{type:Array,required:!0},menuHiddenFn:{type:Function},hasIcon:{type:Boolean,default:!1},iconType:{type:String,default:"font-icon"},menuWrapperCss:Object,menuItemCss:Object,el:{type:Object,required:!0},params:{type:[String,Number,Array,Object]},useLongPressInMobile:Boolean,longPressDuration:Number,longPressPreventDefault:[Function,Boolean],injectCloseListener:{type:Boolean,default:!0},customClass:String,disabled:{type:Function}},emits:["open","close"],expose:["show","close","showMenu"],setup(e,{emit:t}){const n=f(0),s=f(0),u=f(!1),y=f(0),i=f(0),m=f(!1),a=f(null),b=f([]),B=V(()=>e.menuList.some(_=>_.children&&_.children.length>0)),x=f(10),k=f();K(m,_=>L(null,null,function*(){var l,d;if(_){yield R();let v=k.value;e.menuWrapperCss&&Object.keys(e.menuWrapperCss).map(p=>{v.style.setProperty(`--menu-${p}`,e.menuWrapperCss&&e.menuWrapperCss[p])}),e.menuItemCss&&Object.keys(e.menuItemCss).map(p=>{v.style.setProperty(`--menu-item-${p}`,e.menuItemCss&&e.menuItemCss[p])});let o=(d=(l=e.menuItemCss)==null?void 0:l.arrowSize)==null?void 0:d.match(/\d+/);o?x.value=~~o[0]||10:x.value=10,v.style.setProperty("--menu-item-arrowRealSize",x.value/2+"px"),t("open",e.params,a.value,e.el)}else t("close",e.params,a.value,e.el)}));const ee=(_,l)=>{_.disabled||_.fn&&typeof _.fn=="function"&&_.fn(e.params,a.value,e.el,l)===!1||(m.value=!1)},ne=(_,l)=>{if(!_.disabled){if(_.fn&&typeof _.fn=="function"&&!_.disabled){if(_.fn(e.params,a.value,e.el,l)===!1)return;u.value=!1}m.value=!1}},ae=(_,l)=>L(null,null,function*(){if(l.children&&!l.disabled){u.value=!0,yield R();const d=_.currentTarget;if(!d)return;const{offsetWidth:v}=d,o=d.querySelector(".__menu__sub__wrapper");if(!o)return;const{offsetWidth:p,offsetHeight:S}=o,{innerWidth:oe,innerHeight:A}=window,{top:D,left:O}=d.getBoundingClientRect();O+v+p>oe-5?n.value=O-p+5:n.value=O+v,D+S>A-5?s.value=A-S:s.value=D+5}}),N=(_,l,d,v)=>_.map(o=>(o.children&&(o.children=N(o.children,l,d,v)),o.label&&typeof o.label=="function"&&(o.label=o.label(v,l,d)),o.tips&&typeof o.tips=="function"&&(o.tips=o.tips(v,l,d)),o.icon&&typeof o.icon=="function"&&(o.icon=o.icon(v,l,d)),o.hidden&&typeof o.hidden=="function"&&(o.hidden=o.hidden(v,l,d)),o.disabled&&typeof o.disabled=="function"&&(o.disabled=o.disabled(v,l,d)),o)),te=(_=0,l=0)=>L(null,null,function*(){if(a.value=document.elementFromPoint(_-1,l-1),e.menuHiddenFn?m.value=!e.menuHiddenFn(e.params,a.value,e.el):m.value=!0,!m.value)return;b.value=Z(e.menuList),b.value=N(b.value,a.value,e.el,e.params),yield R();const{innerWidth:d,innerHeight:v}=window,p=k.value.offsetHeight,S=e.menuWidth||200;i.value=_+S+1>d?d-S-5:_+1,y.value=l+p+1>v?v-p-5:l+1}),ie=()=>{m.value=!1},T=V(()=>e.useLongPressInMobile&&"ontouchstart"in window?"touchstart":"mousedown"),H=_=>{k.value&&!k.value.contains(_.currentTarget)&&(m.value=!1,document.oncontextmenu=null)};return K(()=>e.injectCloseListener,_=>{_?document.addEventListener(T.value,H):document.removeEventListener(T.value,H)},{immediate:!0}),ve(()=>{document.removeEventListener(T.value,H)}),{subLeft:n,subTop:s,hoverFlag:u,menuTop:y,menuLeft:i,showMenu:m,clickDomEl:a,calcMenuList:b,arrowSize:x,hasSubMenu:B,MenuWrapper:k,handleMenuItemClick:ee,handleSubMenuItemClick:ne,handleMenuMouseEnter:ae,show:te,close:ie,clickEventKey:T}}});const he=["onMouseenter"],fe={key:0,class:"__menu__item-icon"},ye=["innerHTML"],we={class:"__menu__item-label"},ge={class:"__menu__item-tips"},Ce={class:"__menu__item-arrow-after"},ke={key:0,class:"__menu__item-icon"},Se=["innerHTML"],Me={class:"__menu__sub__item-label"},xe={class:"__menu__sub__item-tips"};function Te(e,t,n,s,u,y){return r(),$(be,{to:"body",disabled:!e.appendToBody},[e.showMenu?(r(),c("div",{key:0,ref:"MenuWrapper",class:W(["__menu__wrapper",e.customClass]),style:P({width:`${e.menuWidth}px`,top:`${e.menuTop}px`,left:`${e.menuLeft}px`})},[(r(!0),c(z,null,U(e.calcMenuList,(i,m)=>(r(),c(z,null,[!i.hidden&&!i.line?(r(),c("div",G({key:m,class:["__menu__item",i.disabled&&"disabled",i.customClass]},{[J(e.clickEventKey)]:Q(a=>e.handleMenuItemClick(i,a),["stop"])},{onMouseenter:a=>e.handleMenuMouseEnter(a,i)}),[e.hasIcon?(r(),c("div",fe,[e.iconType==="font-icon"?g((r(),c("i",{key:0,class:W(i.icon)},null,2)),[[C,i.icon]]):e.iconType==="svg-icon"?g((r(),c("div",{key:1,class:"__menu__item-icon-svg",innerHTML:i.icon},null,8,ye)),[[C,i.icon]]):e.iconType==="vnode-icon"?(r(),$(X(i.icon),{key:2})):h("v-if",!0)])):h("v-if",!0),M("span",we,F(i.label),1),M("span",ge,F(i.tips||""),1),e.hasSubMenu?(r(),c("span",{key:1,class:W(["__menu__item-arrow",{show:e.hasSubMenu&&i.children}]),style:P({width:e.arrowSize+"px",height:e.arrowSize+"px"})},[g(M("span",Ce,null,512),[[C,e.hasSubMenu&&i.children]])],6)):h("v-if",!0),i.children&&i.children.length>0&&!i.disabled?g((r(),c("div",{key:2,class:"__menu__sub__wrapper",style:P({width:`${e.menuWidth}px`,top:`${e.subTop}px`,left:`${e.subLeft}px`})},[(r(!0),c(z,null,U(i.children,(a,b)=>(r(),c(z,null,[!a.hidden&&!a.line?(r(),c("div",G({key:b,class:["__menu__sub__item",a.disabled&&"disabled",a.customClass]},{[J(e.clickEventKey)]:Q(B=>e.handleSubMenuItemClick(a,B),["stop"])}),[e.hasIcon?(r(),c("div",ke,[e.iconType==="font-icon"?g((r(),c("i",{key:0,class:W(a.icon)},null,2)),[[C,a.icon]]):e.iconType==="svg-icon"?g((r(),c("div",{key:1,class:"__menu__item-icon-svg",innerHTML:a.icon},null,8,Se)),[[C,a.icon]]):e.iconType==="vnode-icon"?(r(),$(X(a.icon),{key:2})):h("v-if",!0)])):h("v-if",!0),M("span",Me,F(a.label),1),M("span",xe,F(a.tips||""),1)],16)):h("v-if",!0),a.line?(r(),c("div",{key:b,class:"__menu__line"})):h("v-if",!0)],64))),256))],4)),[[C,e.hoverFlag]]):h("v-if",!0)],16,he)):h("v-if",!0),!i.hidden&&i.line?(r(),c("div",{key:m,class:"__menu__line"})):h("v-if",!0)],64))),256))],6)):h("v-if",!0)],8,["disabled"])}function Le(e,t){t===void 0&&(t={});var n=t.insertAt;if(typeof document!="undefined"){var s=document.head||document.getElementsByTagName("head")[0],u=document.createElement("style");u.type="text/css",n==="top"&&s.firstChild?s.insertBefore(u,s.firstChild):s.appendChild(u),u.styleSheet?u.styleSheet.cssText=e:u.appendChild(document.createTextNode(e))}}var ze=`.__menu__mask[data-v-3d21bc0a] {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
}
.__menu__wrapper[data-v-3d21bc0a] {
  --menu-background: #c8f2f0;
  --menu-boxShadow: 0 1px 5px #888;
  --menu-padding: 5px 0;
  --menu-borderRadius: 0;
  --menu-item-height: 30px;
  --menu-item-padding: 0 10px;
  --menu-item-iconSize: 20px;
  --menu-item-iconFontSize: 14px;
  --menu-item-iconColor: #484852;
  --menu-item-labelColor: #484852;
  --menu-item-labelFontSize: 14px;
  --menu-item-tipsColor: #889;
  --menu-item-tipsFontSize: 12px;
  --menu-item-arrowColor: #484852;
  --menu-item-disabledColor: #bcc;
  --menu-item-hoverBackground: rgba(255, 255, 255, 0.8);
  --menu-item-hoverIconColor: inherit;
  --menu-item-hoverLabelColor: inherit;
  --menu-item-hoverTipsColor: inherit;
  --menu-item-hoverArrowColor: inherit;
  --menu-lineColor: #ccc;
  --menu-lineMargin: 5px 0;
}
.__menu__wrapper[data-v-3d21bc0a] {
  position: fixed;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
  z-index: 99999;
}
.__menu__line[data-v-3d21bc0a],
.__menu__sub__line[data-v-3d21bc0a] {
  border-top: 1px solid var(--menu-lineColor);
  margin: var(--menu-lineMargin);
}
.__menu__item[data-v-3d21bc0a],
.__menu__sub__item[data-v-3d21bc0a] {
  display: flex;
  height: var(--menu-item-height);
  align-items: center;
  cursor: pointer;
  padding: var(--menu-item-padding);
}
.__menu__item .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon[data-v-3d21bc0a] {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--menu-item-iconColor);
  width: var(--menu-item-iconSize);
  height: var(--menu-item-iconSize);
}
.__menu__item .__menu__item-icon i[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon i[data-v-3d21bc0a] {
  font-size: var(--menu-item-iconFontSize);
}
.__menu__item .__menu__item-icon .__menu__item-icon-svg[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon .__menu__item-icon-svg[data-v-3d21bc0a] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.__menu__item .__menu__item-label[data-v-3d21bc0a],
.__menu__item .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-label[data-v-3d21bc0a],
.__menu__sub__item .__menu__sub__item-label[data-v-3d21bc0a] {
  width: 100%;
  max-height: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  font-size: var(--menu-item-labelFontSize);
  color: var(--menu-item-labelColor);
  margin-right: 5px;
  overflow: hidden;
}
.__menu__item .__menu__item-tips[data-v-3d21bc0a],
.__menu__item .__menu__sub__item-tips[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-tips[data-v-3d21bc0a],
.__menu__sub__item .__menu__sub__item-tips[data-v-3d21bc0a] {
  font-size: var(--menu-item-tipsFontSize);
  color: var(--menu-item-tipsColor);
}
.__menu__item .__menu__item-arrow[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-arrow[data-v-3d21bc0a] {
  width: 10px;
  height: 10px;
  margin-left: 5px;
  position: relative;
}
.__menu__item.disabled[data-v-3d21bc0a],
.__menu__sub__item.disabled[data-v-3d21bc0a] {
  cursor: not-allowed;
}
.__menu__item.disabled .__menu__item-icon[data-v-3d21bc0a],
.__menu__item.disabled .__menu__item-label[data-v-3d21bc0a],
.__menu__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__item.disabled .__menu__item-tips[data-v-3d21bc0a],
.__menu__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-label[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-tips[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-disabledColor);
}
.__menu__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a] {
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-disabledColor);
}
.__menu__item[data-v-3d21bc0a]:not(.disabled):hover {
  background: var(--menu-item-hoverBackground);
}
.__menu__item:not(.disabled):hover .__menu__item-icon[data-v-3d21bc0a] {
  color: var(--menu-item-hoverIconColor);
}
.__menu__item:not(.disabled):hover .__menu__item-label[data-v-3d21bc0a] {
  color: var(--menu-item-hoverLabelColor);
}
.__menu__item:not(.disabled):hover .__menu__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-hoverTipsColor);
}
.__menu__item:not(.disabled):hover .__menu__item-arrow[data-v-3d21bc0a] {
  color: var(--menu-item-hoverArrowColor);
}
.__menu__sub__item[data-v-3d21bc0a]:not(.disabled):hover {
  background: var(--menu-item-hoverBackground);
}
.__menu__sub__item:not(.disabled):hover .__menu__sub__item-label[data-v-3d21bc0a] {
  color: var(--menu-item-hoverLabelColor);
}
.__menu__sub__item:not(.disabled):hover .__menu__sub__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-hoverTipsColor);
}
.__menu__item-icon[data-v-3d21bc0a] {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  margin-right: 4px;
}
.__menu__item-arrow.show .__menu__item-arrow-after[data-v-3d21bc0a] {
  position: absolute;
  width: 0;
  height: 0;
  left: 8px;
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-arrowColor);
  border-top: var(--menu-item-arrowRealSize) solid transparent;
  border-bottom: var(--menu-item-arrowRealSize) solid transparent;
}
.__menu__sub__wrapper[data-v-3d21bc0a] {
  position: fixed;
  visibility: hidden;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
}
.__menu__item:hover .__menu__sub__wrapper[data-v-3d21bc0a] {
  visibility: visible;
}`;Le(ze);w.render=Te;w.__scopeId="data-v-3d21bc0a";w.__file="packages/mouse-menu/mouse-menu.vue";function We(e,t,n){let s=document.createElement(e);return s.setAttribute("class",t),s}w.install=e=>{e.component(w.name,w)};function Fe(e){var u;const t="__mouse__menu__container";let n;document.querySelector(`.${t}`)?n=document.querySelector(`.${t}`):n=We("div",t);const s=me(w,e);return ce(s,n),document.body.appendChild(n),(u=s.component)==null?void 0:u.proxy}function $e(){const e=f(le(re,!0)),t=[{label:"ID",prop:"id"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"}],n={menuList:[{label:({id:u})=>`ID为：${u}`,disabled:!0},{label:"修改",tips:"Edit",fn:u=>de(`您修改了第 ${e.value.findIndex(y=>y.id===u.id)+1} 行，数据为：${JSON.stringify(u)}`,{type:"success"})}]};function s(u,y,i){i.preventDefault();const{x:m,y:a}=i;Fe(I({el:i.currentTarget,params:u,menuWrapperCss:{background:"var(--el-bg-color)"},menuItemCss:{labelColor:"var(--el-text-color)",hoverLabelColor:"var(--el-color-primary)",hoverTipsColor:"var(--el-color-primary)"}},n)).show(m,a)}return{columns:t,dataList:e,showMouseMenu:s}}const Pe=Y({__name:"index",setup(e){const{columns:t,dataList:n,showMouseMenu:s}=$e();return(u,y)=>{const i=pe("pure-table");return r(),$(i,{"row-key":"id",border:"",data:E(n),columns:E(t),onRowContextmenu:E(s)},null,8,["data","columns","onRowContextmenu"])}}});export{Pe as _};
