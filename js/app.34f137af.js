(function(e){function t(t){for(var n,r,l=t[0],u=t[1],s=t[2],c=0,v=[];c<l.length;c++)r=l[c],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&v.push(i[r][0]),i[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(v.length)v.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var u=a[r];0!==i[u]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},i={app:0},o=[];function r(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5ce8ed64"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a=i[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=n);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(e);var s=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(c);var a=i[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,a[1](s)}i[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/scold/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var p=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"56d7":function(e,t,a){"use strict";a.r(t);a("8a58");var n,i=a("e41f"),o=(a("46de"),a("a822")),r=(a("480b"),a("a37c")),l=(a("2b28"),a("9ed2")),u=(a("4d48"),a("d1e1")),s=(a("81e6"),a("9ffb")),c=(a("f06a"),a("20fb")),p=(a("38d5"),a("772a")),v=(a("66b9"),a("b650")),d=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}}),a("router-view")],1)},f=[],b=(a("034f"),a("2877")),H={},x=Object(b["a"])(H,m,f,!1,null,null,null),O=x.exports,h=(a("d3b7"),a("8c4f")),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("SCCal")],1)},S=[],y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("SC Calculator V0.0.2")]),a("van-form",{on:{submit:e.submit}},[a("div",[e._v(" 格式：物质名称 物质的量浓度 （科学计数法）"),a("br"),e._v(" 例如：HS- 9.5 -5 "),a("van-divider",[e._v("输入已存在物质")]),a("van-form",{on:{submit:e.addExistingIons}},[a("van-row",[a("van-col",{attrs:{span:"6"}},[a("van-field",{attrs:{"is-link":"",readonly:"",name:"ionNam",placeholder:"选择物质"},on:{click:function(t){e.cascaderShow=!0}},model:{value:e.fieldValue,callback:function(t){e.fieldValue=t},expression:"fieldValue"}}),a("van-popup",{attrs:{round:"",position:"bottom"},model:{value:e.cascaderShow,callback:function(t){e.cascaderShow=t},expression:"cascaderShow"}},[a("van-cascader",{attrs:{title:"已存在物质",options:e.options},on:{close:function(t){e.cascaderShow=!1},finish:e.onFinish},model:{value:e.cascaderValue,callback:function(t){e.cascaderValue=t},expression:"cascaderValue"}})],1)],1),a("van-col",{attrs:{span:"4"}},[a("van-field",{attrs:{type:"number",name:"ionNum",placeholder:"9.5"},model:{value:e.ionNumber,callback:function(t){e.ionNumber=t},expression:"ionNumber"}})],1),a("van-col",{attrs:{span:"6"}},[a("p",[e._v("*10^")])]),a("van-col",{attrs:{span:"8"}},[a("van-stepper",{attrs:{type:"number",name:"ionExp",min:"-14",max:"0",integer:""},model:{value:e.ExpStepper,callback:function(t){e.ExpStepper=t},expression:"ExpStepper"}})],1)],1),a("van-button",{attrs:{round:"",type:"primary","native-type":"submit"}},[e._v("添加")])],1),a("ul",e._l(e.cItem,(function(t){return a("li",{key:t.ionNam},[e._v(e._s(e.visDisplay(t.ionNam))+" : "+e._s(t.ionNum.toExponential(4))+" "),a("van-button",{attrs:{size:"mini",plain:"",type:"warning"},on:{click:function(a){return e.removeIon(t.ionNam)}}},[e._v("删除")])],1)})),0),a("van-notice-bar",{attrs:{color:"#1989fa",background:"#ecf9ff",scrollable:"",mode:"closeable",text:"如果溶液中已经有某些物质了，请在这里添加。H+和OH-不算在内。\n          如果没有的话可以留空。填写完点击绿色按钮添加。写错可以点击右侧的删除按钮移除。\n          "}}),a("van-divider",[e._v("填写pH和加入的物质")]),a("van-field",{attrs:{name:"ipim","is-link":"",readonly:"",placeholder:"选择物质"},on:{click:function(t){e.ipimShow=!0}},model:{value:e.ipim,callback:function(t){e.ipim=t},expression:"ipim"}}),a("van-popup",{attrs:{round:"",position:"bottom"},model:{value:e.ipimShow,callback:function(t){e.ipimShow=t},expression:"ipimShow"}},[a("van-cascader",{attrs:{title:"已存在物质",options:e.optionsIpim},on:{close:function(t){e.ipimShow=!1},finish:e.onFinishIpim},model:{value:e.ipimValue,callback:function(t){e.ipimValue=t},expression:"ipimValue"}})],1),a("van-field",{attrs:{type:"number",name:"pH",label:"pH",placeholder:"pH",rules:[{required:!0,message:"请填写pH"}]},model:{value:e.pH,callback:function(t){e.pH=t},expression:"pH"}}),a("van-notice-bar",{attrs:{color:"#1989fa",background:"#ecf9ff",scrollable:"",mode:"closeable",text:"请在这里填写溶液初始的pH数值以及加入的物质（不能留空）"}})],1),a("van-divider",[e._v("提交参数")]),a("div",{staticStyle:{margin:"16px"}},[a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("提交")])],1)],1),a("van-divider",[e._v("运算结果")]),""!=e.input_item?a("p",[e._v("出错的input:"+e._s(e.input_item)+"产生了-log("+e._s(e.cH)+")")]):e._e(),a("br"),""!=e.result?a("p",[e._v("pH : "+e._s(e.result))]):e._e(),a("p",[e._v(e._s(e.rions))]),""!=e.rions?a("van-button",{attrs:{plain:"",type:"primary"},on:{click:function(t){return e.rion2ci(e.rions)}}},[e._v("把输出结果作为下一次计算的输入")]):e._e(),a("van-divider",[e._v("目前支持的物质")]),e._m(0),e._m(1),e._m(2)],1)},C=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("'HCl', "),a("br"),e._v("'H2SO4', "),a("br"),e._v("'KOH', "),a("br"),e._v("'BaOH2', "),a("br"),e._v("'H2S': 7.05, "),a("br"),e._v("'HAc': 4.75, "),a("br"),e._v("'H2SO3(1)': 1.81, "),a("br"),e._v("'H3PO4(1)': 2.12, "),a("br"),e._v("'HCOOH': 3.75, "),a("br"),e._v("'Cu(OH)2' "),a("br")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("目前的问题:相对来说比较容易出现负根, 需要改进估算(目前是经过统计学改良(乱猜)的估算)方法;"),a("br"),e._v(" 因为懒, 所以加入物可以选很多（不行，绝对不行）"),a("br"),e._v(" “已经在溶液里的物质”部分可以乱写，但是加入的物质只有上面几个可选。 ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("更新日志（瞎写的）： "),a("br"),e._v(" 12月的某一天（具体可查github）：0.0.1，"),a("br"),e._v(" 2月某天（具体可查github）：0.0.2，改进弱酸，加入弱碱，加入/删除已知物质"),a("br"),e._v(" 同一天（以及第二天凌晨）：0.0.24，新功能之Cascader选择物质+将上次计算的结果保存为下次的初始值 and 5位有效数字 and Unicode Display Mode!"),a("br"),e._v(" btw 更改了icon ")])}],g=(a("c740"),a("a434"),a("b0c0"),a("b64b"),a("07ac"),a("acd8"),a("ade3")),w=(a("be7f"),a("565f")),N={name:"Cal",components:(n={},Object(g["a"])(n,p["a"].name,p["a"]),Object(g["a"])(n,v["a"].name,v["a"]),Object(g["a"])(n,w["a"].name,w["a"]),Object(g["a"])(n,c["a"].name,c["a"]),n),data:function(){return{ipim:"",pH:"",result:"",rions:"",input_item:"",cItem:[],GrandStepper:0,ExpStepper:-1,ionNumber:0,ionExponent:0,cascaderShow:!1,ipimShow:!1,cascaderValue:"",ipimValue:"",fieldValue:"",options:[{text:"强电解质相关",value:"0",children:[{text:"Cl⁻",value:"Cl-"},{text:"NO₃⁻",value:"NO3-"},{text:"SO₄²⁻",value:"SO42-"},{text:"Br⁻",value:"Br-"},{text:"ClO₃⁻",value:"ClO3-"},{text:"ClO₄⁻",value:"ClO4-"},{text:"SeO₄⁻",value:"SeO4-"},{text:"Li⁺",value:"Li+"},{text:"Na⁺",value:"Na+"},{text:"K⁺",value:"K+"},{text:"Rb⁺",value:"Rb+"},{text:"Cs⁺",value:"Cs+"},{text:"Ca²⁺",value:"Ca2+"},{text:"Sr²⁺",value:"Sr2+"},{text:"Ba²⁺",value:"Ba2+"}]},{text:"弱电解质相关",value:"1",children:[{text:"HF",value:"HF"},{text:"F⁻",value:"F-"},{text:"H₂S",value:"H2S"},{text:"HS⁻",value:"HS-"},{text:"HClO",value:"HClO"},{text:"ClO⁻",value:"ClO-"},{text:"HIO₃",value:"HIO3"},{text:"IO₃⁻",value:"IO3-"},{text:"H2SO₃",value:"H2SO3"},{text:"HSO₃⁻",value:"HSO3-"},{text:"H3PO₃",value:"H3PO3"},{text:"H₂PO₃",value:"H2PO3-"},{text:"NH₃·H₂O",value:"NH3·H2O"},{text:"NH₄⁺",value:"NH4+"},{text:"Mg²⁺",value:"Mg2+"},{text:"Cu²⁺",value:"Cu2+"},{text:"Al²⁺",value:"Al3+"},{text:"Fe²⁺",value:"Fe2+"},{text:"Fe³⁺",value:"Fe3+"}]},{text:"气体",value:"2",children:[]},{text:"碱金属",value:"3",children:[]}],optionsIpim:[{text:"强电解质相关",value:"0",children:[{text:"HCl",value:"HCl"},{text:"HNO₃",value:"HNO3"},{text:"H₂SO₄",value:"H2SO4"},{text:"HBr",value:"HBr"},{text:"HClO₃",value:"HClO3"},{text:"ClO₄⁻",value:"HClO4"},{text:"SeO₄⁻",value:"HSeO4"},{text:"LiOH",value:"LiOH"},{text:"NaOH",value:"NaOH"},{text:"KOH",value:"KOH"},{text:"RbOH",value:"RbOH"},{text:"CsOH",value:"CsOH"},{text:"Ca(OH)₂",value:"Ca(OH)2"},{text:"Sr(OH)₂",value:"Sr(OH)2"},{text:"Ba(OH)₂",value:"Ba(OH)2"}]},{text:"弱电解质相关",value:"1",children:[{text:"HF",value:"HF"},{text:"H₂S",value:"H2S"},{text:"HClO",value:"HClO"},{text:"HIO₃",value:"HIO3"},{text:"H2SO₃",value:"H2SO3"},{text:"H3PO₃",value:"H3PO3"},{text:"NH₃·H₂O",value:"NH3·H2O"},{text:"Mg(OH)₂",value:"Mg(OH)2"},{text:"Cu(OH)₂",value:"Cu(OH)2"},{text:"Al(OH)₃",value:"Al(OH)3"},{text:"Fe(OH)₂ ",value:"Fe(OH)2"},{text:"Fe(OH)₃",value:"Fe(OH)3"}]},{text:"气体",value:"2",children:[]},{text:"碱金属",value:"3",children:[]}]}},methods:{submit:function(e){var t=this;t.input_item="",t.result="";var a={ipim:t.ipim,pH:t.pH,cItem:t.cItem};console.log("submit",a),t.$http.post(t.$api+"phcal",a).then((function(e){console.log("res",e.data),0===e.data.error?(t.result=e.data.result,t.rions=e.data.ions,console.log(t.rions,"rions")):(t.cH=e.data.result,t.input_item={ipim:e.data.ipim,pH:e.data.pH})}))},addExistingIons:function(e){if(console.log("adding existing ions",e,this.ExpStepper),e){var t=e.ionNum;e.ionNum=parseFloat(t)*Math.pow(10,parseFloat(this.ExpStepper)),console.log(e);var a=this.cItem.findIndex((function(t){return t.ionNam===e.ionNam}));-1===a&&this.cItem.push(e),console.log(this.cItem)}},removeIon:function(e){var t=this.cItem.findIndex((function(t){return t.ionNam===e}));this.cItem.splice(t,1)},rion2ci:function(e){this.cItem.splice(0);for(var t=Object.keys(e),a=Object.values(e),n=0;n<t.length;n++)this.cItem.push({ionNam:t[n],ionNum:a[n]})},onFinish:function(e){var t=e.selectedOptions;this.cascaderShow=!1,this.fieldValue=t[1].value},onFinishIpim:function(e){var t=e.selectedOptions;this.ipimShow=!1,console.log(t),this.ipim=t[1].value},visDisplay:function(e){for(var t in this.options){var a=this.options[t].children.findIndex((function(t){return t.value===e}));if(-1!==a)return this.options[t].children[a].text}}}},I=N,k=Object(b["a"])(I,y,C,!1,null,null,null),j=k.exports,E={name:"Home",components:{SCCal:j}},F=E,P=Object(b["a"])(F,_,S,!1,null,null,null),V=P.exports;d["a"].use(h["a"]);var $=[{path:"/",name:"Home",component:V},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],M=new h["a"]({mode:"history",base:"/scold/",routes:$}),B=M,A=a("2f62");d["a"].use(A["a"]);var L=new A["a"].Store({state:{},mutations:{},actions:{},modules:{}}),K=a("bc3a"),T=a.n(K),R=a("2106"),q=a.n(R),D=a("4328"),J=a.n(D);d["a"].prototype.$http=T.a,d["a"].prototype.$qs=J.a,d["a"].prototype.$api="https://wx.aijuncai.com/sc/",d["a"].config.productionTip=!1,d["a"].use(q.a,T.a),d["a"].use(v["a"]),d["a"].use(p["a"]),d["a"].use(c["a"]),d["a"].use(s["a"]),d["a"].use(u["a"]),d["a"].use(l["a"]),d["a"].use(r["a"]),d["a"].use(o["a"]),d["a"].use(i["a"]),new d["a"]({router:B,store:L,render:function(e){return e(O)}}).$mount("#app")},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.34f137af.js.map