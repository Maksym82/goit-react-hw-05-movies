"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[437],{228:function(n,t,e){e.d(t,{aV:function(){return s},up:function(){return p},zx:function(){return f}});var r,a,u,o=e(168),c=e(686),i=e(87),s=c.Z.ul(r||(r=(0,o.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: 5px;\n    list-style: none;\n    padding: 0;\n"]))),p=(0,c.Z)(i.rU)(a||(a=(0,o.Z)(["\n    font-size: 20px;\n    text-decoration: none;\n"]))),f=c.Z.button(u||(u=(0,o.Z)(["\n    width: 150px;\n    height: 50px;\n    background-color: blue;\n    color: white;\n    border-radius: 4px;\n    margin-bottom: 20px;\n"])))},437:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var r=e(433),a=e(861),u=e(439),o=e(687),c=e.n(o),i=e(791),s=e(689),p=e(87),f=e(228),d=e(966),l=e(273),h=e(184);var x,v,m,g=function(n){var t=(0,s.TH)();return console.log(n),(0,h.jsx)(f.aV,{children:n.movies.map((function(n){var e=n.id,r=n.title,a=n.poster_path;return r&&(0,h.jsx)("li",{children:(0,h.jsx)(f.up,{to:"/movies/".concat(e),state:{from:t},children:(0,h.jsx)(d.nD,{src:a?"".concat("https://image.tmdb.org/t/p/w500").concat(a):l,alt:r})},e)},e)}))})},Z=e(168),b=e(686),y=b.Z.form(x||(x=(0,Z.Z)(["\n    display: flex;\n    gap: 10px;\n    padding-top: 20px;\n"]))),w=b.Z.input(v||(v=(0,Z.Z)(["\n    width: 300px;\n"]))),k=b.Z.button(m||(m=(0,Z.Z)(["\n    padding: 5px;\n    border: 1px solid #978a8a;\n    border-radius: 2px;\n"])));var j=function(n){var t=n.onSubmit,e="";return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(y,{action:"",onSubmit:function(n){n.preventDefault();var r=n.currentTarget;e=r.elements.query.value,t(e),r.reset()},children:[(0,h.jsx)(w,{type:"text",name:"query",defaultValue:e}),(0,h.jsx)(k,{type:"submit",children:"Search"})]})})},_=e(390);var S=function(){var n,t=(0,s.TH)(),e=(0,i.useState)([]),o=(0,u.Z)(e,2),f=o[0],d=o[1],l=(0,p.lr)(),x=(0,u.Z)(l,2),v=x[0],m=x[1],Z=null!==(n=v.get("query"))&&void 0!==n?n:"";return(0,i.useEffect)((function(){if(Z){d([]);var n=function(){var n=(0,a.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,_.WK)(Z);case 3:t=n.sent,d((function(n){return[].concat((0,r.Z)(n),(0,r.Z)(t))})),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("Not found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}}),[Z]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(j,{location:t,onSubmit:function(n){m({query:n})}}),(0,h.jsx)(g,{movies:f})]})}},390:function(n,t,e){e.d(t,{WK:function(){return h},Y5:function(){return v},nA:function(){return g},wr:function(){return d}});var r=e(861),a=e(687),u=e.n(a),o=e(243),c="0888d5145581d4e91a57106a6f875732";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="https://api.themoviedb.org/3/trending/movie/day",s="https://api.themoviedb.org/3/search/movie",p="https://api.themoviedb.org/3/movie",f={params:{api_key:c,language:"en-US"}};function d(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i),f);case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return x=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={params:{api_key:c,language:"en-US",query:t}},n.next=3,o.Z.get("".concat(s),e);case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)}))),x.apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return m=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={params:{api_key:c}},n.next=3,o.Z.get("".concat(p,"/").concat(t),e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)}))),m.apply(this,arguments)}function g(n,t){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(u().mark((function n(t,e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/").concat(e),f);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},273:function(n,t,e){n.exports=e.p+"static/media/question.6566d466f2fa77fc52dc.png"}}]);
//# sourceMappingURL=437.b3c59409.chunk.js.map