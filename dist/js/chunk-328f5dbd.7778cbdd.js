(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-328f5dbd"],{"1dde":function(t,r,n){var o=n("d039"),e=n("b622"),c=n("2d00"),a=e("species");t.exports=function(t){return c>=51||!o((function(){var r=[],n=r.constructor={};return n[a]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},"65f0":function(t,r,n){var o=n("861d"),e=n("e8b5"),c=n("b622"),a=c("species");t.exports=function(t,r){var n;return e(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!e(n.prototype)?o(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===r?0:r)}},8418:function(t,r,n){"use strict";var o=n("c04e"),e=n("9bf2"),c=n("5c6c");t.exports=function(t,r,n){var a=o(r);a in t?e.f(t,a,c(0,n)):t[a]=n}},"99af":function(t,r,n){"use strict";var o=n("23e7"),e=n("d039"),c=n("e8b5"),a=n("861d"),i=n("7b0b"),u=n("50c4"),f=n("8418"),s=n("65f0"),d=n("1dde"),p=n("b622"),l=n("2d00"),v=p("isConcatSpreadable"),h=9007199254740991,b="Maximum allowed index exceeded",w=l>=51||!e((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),y=d("concat"),x=function(t){if(!a(t))return!1;var r=t[v];return void 0!==r?!!r:c(t)},g=!w||!y;o({target:"Array",proto:!0,forced:g},{concat:function(t){var r,n,o,e,c,a=i(this),d=s(a,0),p=0;for(r=-1,o=arguments.length;r<o;r++)if(c=-1===r?a:arguments[r],x(c)){if(e=u(c.length),p+e>h)throw TypeError(b);for(n=0;n<e;n++,p++)n in c&&f(d,p,c[n])}else{if(p>=h)throw TypeError(b);f(d,p++,c)}return d.length=p,d}})},d2f1:function(t,r,n){"use strict";n.r(r);var o=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"home"},[n("h2",[t._v("單一產品頁面")]),n("h3",[t._v(t._s(t.product.title))]),n("p",[t._v(t._s(t.product.description))])])},e=[],c=(n("99af"),{dtat:function(){return{product:[]}},created:function(){var t=this,r=this.$route.params;this.$http.get("".concat("https://course-ec-api.hexschool.io/","api/").concat("8cc5a81d-e152-435e-9536-f56254d0ab7a","/ec/product/").concat(r)).then((function(r){console.log(r),t.product=r.data.data})).catch((function(t){console.log(t)}))}}),a=c,i=n("2877"),u=Object(i["a"])(a,o,e,!1,null,null,null);r["default"]=u.exports},e8b5:function(t,r,n){var o=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}}}]);
//# sourceMappingURL=chunk-328f5dbd.7778cbdd.js.map