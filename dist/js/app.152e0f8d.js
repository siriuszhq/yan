(function(t){function e(e){for(var r,a,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i={app:0},o=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b724a":"3160baf1","chunk-0c6a415b":"3f369963","chunk-64d6bd58":"7b8f8937","chunk-de361038":"b154b2b4","chunk-d8f8df66":"a7355248","chunk-eed8377c":"efbf07bc","chunk-2d0c4643":"a37298e5"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-0c6a415b":1,"chunk-64d6bd58":1,"chunk-de361038":1,"chunk-d8f8df66":1,"chunk-eed8377c":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0b724a":"31d6cfe0","chunk-0c6a415b":"d17cb8da","chunk-64d6bd58":"ca869dd8","chunk-de361038":"9ed25bdd","chunk-d8f8df66":"d6366a7d","chunk-eed8377c":"a8447681","chunk-2d0c4643":"31d6cfe0"}[t]+".css",i=s.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],f.parentNode.removeChild(f),n(o)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}i[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"22d1":function(t,e,n){"use strict";n("fc2f")},2872:function(t,e,n){t.exports=n.p+"img/shopcart.fbc81098.svg"},"2e94":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),n("main-tab-bar")],1)},i=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("TabBar",[r("tab-bar-item",{attrs:{path:"/home",activeColor:"red"}},[r("img",{attrs:{slot:"item-icon",src:n("9443"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("b508"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),r("tab-bar-item",{attrs:{path:"/category",activeColor:"red"}},[r("img",{attrs:{slot:"item-icon",src:n("57cd"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("a5ef"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),r("tab-bar-item",{attrs:{path:"/cart",activeColor:"red"}},[r("img",{attrs:{slot:"item-icon",src:n("2872"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("c3f8"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),r("tab-bar-item",{attrs:{path:"/profile",activeColor:"red"}},[r("img",{attrs:{slot:"item-icon",src:n("e55d"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("d151"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)},c=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},u=[],l={name:"TabBar"},d=l,f=(n("6ad5"),n("2877")),m=Object(f["a"])(d,s,u,!1,null,"80f75fa6",null),h=m.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?n("div",[t._t("item-icon-active")],2):n("div",[t._t("item-icon")],2),n("div",{style:t.activeStyle},[t._t("item-text")],2)])},b=[],v={name:"TabBarItem",props:{path:String,activeColor:{type:String,default:"red"}},data:function(){return{}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}},methods:{itemClick:function(){this.$router.push(this.path)}}},g=v,k=(n("8f20"),Object(f["a"])(g,p,b,!1,null,"50b1e733",null)),y=k.exports,_={name:"MainTabBar",components:{TabBar:h,TabBarItem:y}},x=_,w=Object(f["a"])(x,o,c,!1,null,"3aef86e8",null),O=w.exports,C={name:"App",components:{MainTabBar:O}},S=C,j=(n("034f"),Object(f["a"])(S,a,i,!1,null,null,null)),T=j.exports,E=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),P=function(){return Promise.all([n.e("chunk-2d0b724a"),n.e("chunk-de361038"),n.e("chunk-d8f8df66")]).then(n.bind(null,"b3d7"))},L=function(){return Promise.all([n.e("chunk-2d0b724a"),n.e("chunk-0c6a415b")]).then(n.bind(null,"bb51"))},$=function(){return n.e("chunk-2d0c4643").then(n.bind(null,"3b42"))},A=function(){return Promise.all([n.e("chunk-2d0b724a"),n.e("chunk-64d6bd58")]).then(n.bind(null,"c228"))},B=function(){return Promise.all([n.e("chunk-2d0b724a"),n.e("chunk-de361038"),n.e("chunk-eed8377c")]).then(n.bind(null,"6ab7"))};r["a"].use(E["a"]);var M,N=[{path:"",redirect:"/home"},{path:"/home",component:P},{path:"/cart",component:A},{path:"/category",component:L},{path:"/profile",component:$},{path:"/detail/:iid",component:B}],D=new E["a"]({routes:N,mode:"history"}),I=D,q=n("2f62"),J=n("ade3"),F="add_counter",H="add_to_cart",K=(M={},Object(J["a"])(M,F,(function(t,e){e.count++})),Object(J["a"])(M,H,(function(t,e){e.checked=!0,t.cartList.push(e)})),M),U=(n("7db0"),{addCart:function(t,e){return new Promise((function(n,r){var a=t.state.cartList.find((function(t){return t.iid===e.iid}));a?(t.commit(F,a),n("当前商品数量+1")):(e.count=1,t.commit(H,e),n("添加新商品成功"))}))}}),z={cartLength:function(t){return t.cartList.length},cartList:function(t){return t.cartList}};r["a"].use(q["a"]);var G={cartList:[]},Q=new q["a"].Store({state:G,mutations:K,actions:U,getters:z}),R=Q,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"toast"},[n("div",[t._v(t._s(t.message))])])},W=[],X={name:"Toast",data:function(){return{isShow:!1,message:""}},methods:{show:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"默认值",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500;用法,this.isShow=!0,this.message=e,setTimeout((function(){t.isShow=!1,t.message=" "}),n)}}},Y=X,Z=(n("22d1"),Object(f["a"])(Y,V,W,!1,null,"261c04ea",null)),tt=Z.exports,et={install:function(t){var e=r["a"].extend(tt),n=new e;n.$mount(document.createElement("div")),document.body.appendChild(n.$el),r["a"].prototype.$toast=n}},nt=et,rt=n("fe3c"),at=n.n(rt),it=n("caf9");r["a"].config.productionTip=!1,r["a"].use(nt),at.a.attach(document.body),r["a"].use(it["a"],{loading:n("bc5e")}),r["a"].prototype.$bus=new r["a"],new r["a"]({render:function(t){return t(T)},router:I,store:R}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.11368804.svg"},"6ad5":function(t,e,n){"use strict";n("2e94")},"85ec":function(t,e,n){},"8f20":function(t,e,n){"use strict";n("c681")},9443:function(t,e,n){t.exports=n.p+"img/home.43fd8010.svg"},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.e3dac1fb.svg"},b508:function(t,e,n){t.exports=n.p+"img/home_active.74d1cc4d.svg"},bc5e:function(t,e,n){t.exports=n.p+"img/placeholder.48bcea0d.png"},c3f8:function(t,e,n){t.exports=n.p+"img/shopcart_active.3857810e.svg"},c681:function(t,e,n){},d151:function(t,e,n){t.exports=n.p+"img/profile_active.3ba58f85.svg"},e55d:function(t,e,n){t.exports=n.p+"img/profile.c2b75dfe.svg"},fc2f:function(t,e,n){}});
//# sourceMappingURL=app.152e0f8d.js.map