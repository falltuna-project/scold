(function(e){function t(t){for(var r,i,u=t[0],l=t[1],c=t[2],p=0,f=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ad9cd609"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var c=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}a[e]=void 0}};var p=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/scold/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var s=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view")],1)},i=[],u=(n("034f"),n("2877")),l={},c=Object(u["a"])(l,o,i,!1,null,null,null),p=c.exports,s=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("SCCal")],1)},d=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("SC Calculator V0.0.1")]),n("van-form",{on:{submit:e.submit}},[n("van-field",{attrs:{name:"ipim",label:"加入物质名称",placeholder:"加入物质名称",rules:[{required:!0,message:"请填写加入物质名称"}]},model:{value:e.ipim,callback:function(t){e.ipim=t},expression:"ipim"}}),n("van-field",{attrs:{type:"number",name:"pH",label:"pH",placeholder:"pH",rules:[{required:!0,message:"请填写pH"}]},model:{value:e.pH,callback:function(t){e.pH=t},expression:"pH"}}),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("提交")])],1)],1),""!=e.input_item?n("p",[e._v("出错的input:"+e._s(e.input_item)+"产生了-log("+e._s(e.cH)+")")]):e._e(),n("br"),n("p",[e._v("运算结果: pH/cH"),n("br"),e._v(e._s(e.result))]),e._m(0),n("p",[e._v("目前的问题:特别容易出现负根, 需要改进估算(目前是乱估算)方法; 没有弱碱方程; ...")])],1)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("'HCl', "),n("br"),e._v("'H2SO4', "),n("br"),e._v("'KOH', "),n("br"),e._v("'BaOH2', "),n("br"),e._v("'H2S': 7.04, "),n("br"),e._v("'HAc': 4.75, "),n("br"),e._v("'HIO3': 0.8, "),n("br"),e._v("'H2SO3(1)': 1.81, "),n("br"),e._v("'H3PO4(1)': 2.12, "),n("br"),e._v("'HCOOH': 3.75, "),n("br"),e._v("'HClO(1)': 7.46, "),n("br"),e._v("'H2CO3(1)': 6.37 "),n("br")])}],b=(n("b0c0"),n("ade3")),h=n("0a08"),_=n("d933"),H=n("f84d"),y={name:"Cal",components:(r={},Object(b["a"])(r,h["a"].name,h["a"]),Object(b["a"])(r,_["a"].name,_["a"]),Object(b["a"])(r,H["a"].name,H["a"]),r),data:function(){return{ipim:"",pH:"",result:"",input_item:""}},methods:{submit:function(){var e=this;e.input_item="",console.log("submit!"),e.$http.get(e.$api+"phcal",{params:{ipim:e.ipim,pH:e.pH}}).then((function(t){console.log("res",t.data),0===t.data.error?e.result=t.data.result:(e.cH=t.data.result,e.input_item={ipim:t.data.ipim,pH:t.data.pH})}))}}},O=y,g=Object(u["a"])(O,m,v,!1,null,null,null),j=g.exports,w={name:"Home",components:{SCCal:j}},C=w,S=Object(u["a"])(C,f,d,!1,null,null,null),x=S.exports;a["a"].use(s["a"]);var P=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],$=new s["a"]({mode:"history",base:"/scold/",routes:P}),k=$,E=n("2f62");a["a"].use(E["a"]);var T=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}}),M=n("bc3a"),q=n.n(M),A=n("2106"),J=n.n(A);a["a"].prototype.$http=q.a,a["a"].prototype.$api="http://127.0.0.1:8000/",a["a"].config.productionTip=!1,a["a"].use(J.a,q.a),new a["a"]({router:k,store:T,render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.4228a443.js.map