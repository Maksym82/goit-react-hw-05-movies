"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[562],{228:function(n,e,t){t.d(e,{aV:function(){return u},up:function(){return p},zx:function(){return d}});var r,a,i,o=t(168),s=t(686),c=t(87),u=s.Z.ul(r||(r=(0,o.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: 5px;\n    list-style: none;\n    padding: 0;\n"]))),p=(0,s.Z)(c.rU)(a||(a=(0,o.Z)(["\n    font-size: 20px;\n    text-decoration: none;\n"]))),d=s.Z.button(i||(i=(0,o.Z)(["\n    width: 150px;\n    height: 50px;\n    background-color: blue;\n    color: white;\n    border-radius: 4px;\n    margin-bottom: 20px;\n"])))},562:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,a,i,o,s,c,u,p=t(861),d=t(439),l=t(687),h=t.n(l),f=t(791),x=t(689),v=t(87),m=t(390),g=t(168),Z=t(686),w=Z.Z.div(r||(r=(0,g.Z)(["\n  display: flex;\n  margin-bottom: 20px;\n"]))),b=Z.Z.div(a||(a=(0,g.Z)(["\n  padding: 20px;\n"]))),j=Z.Z.h2(i||(i=(0,g.Z)(["\n  margin-top: 0;\n"]))),y=Z.Z.p(o||(o=(0,g.Z)(["\n  text-align: justify;\n"]))),k=Z.Z.div(s||(s=(0,g.Z)(["\n  border-top: 1px solid gray;\n  border-bottom: 1px solid gray;\n"]))),_=Z.Z.ul(c||(c=(0,g.Z)(["\n  list-style: none;\n"]))),U=(0,Z.Z)(v.OL)(u||(u=(0,g.Z)(["\n  display: block;\n  text-decoration: none;\n  margin-bottom: 10px;\n"]))),L=t(273),O=t(228),S=t(184);var z=function(){var n,e=(0,f.useState)({}),t=(0,d.Z)(e,2),r=t[0],a=t[1],i=(0,x.UO)().movieId;(0,f.useEffect)((function(){if(i){var n=function(){var n=(0,p.Z)(h().mark((function n(){var e;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,m.Y5)(i);case 3:e=n.sent,console.log(e),a(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error("Not found");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}}),[i]);var o=r.title,s=r.release_date,c=r.vote_average,u=r.overview,l=r.genres,g=r.poster_path,Z=new Date(s).getFullYear(),z=(null===(n=(0,x.TH)().state)||void 0===n?void 0:n.from)||"/";return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(v.OL,{to:z,children:(0,S.jsx)(O.zx,{children:"Go Back"})}),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(w,{children:[(0,S.jsx)("img",{src:g?"https://image.tmdb.org/t/p/w300"+g:L,width:250,height:400,alt:"poster"}),(0,S.jsxs)(b,{children:[(0,S.jsxs)(j,{children:[o," (",Z,")"]}),(0,S.jsxs)("p",{children:["User score: ",Math.round(10*c),"%"]}),(0,S.jsx)("h3",{children:"Overview"}),(0,S.jsx)(y,{children:u}),(0,S.jsx)("h3",{children:"Genres"}),l?l.map((function(n){return n.name+" "})):"Not information"]})]}),(0,S.jsxs)(k,{children:[(0,S.jsx)("h3",{children:"Additional information"}),(0,S.jsxs)(_,{children:[(0,S.jsx)("li",{children:(0,S.jsx)(U,{to:"cast",children:"Cast"})}),(0,S.jsx)("li",{children:(0,S.jsx)(U,{to:"review",children:"Review"})})]})]})]}),(0,S.jsx)(f.Suspense,{fallback:(0,S.jsx)("div",{children:"Loading..."}),children:(0,S.jsx)(x.j3,{})})]})}},390:function(n,e,t){t.d(e,{WK:function(){return f},Y5:function(){return v},nA:function(){return g},wr:function(){return l}});var r=t(861),a=t(687),i=t.n(a),o=t(243),s="0888d5145581d4e91a57106a6f875732";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="https://api.themoviedb.org/3/trending/movie/day",u="https://api.themoviedb.org/3/search/movie",p="https://api.themoviedb.org/3/movie",d={params:{api_key:s,language:"en-US"}};function l(){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c),d);case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return x.apply(this,arguments)}function x(){return x=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={params:{api_key:s,language:"en-US",query:e}},n.next=3,o.Z.get("".concat(u),t);case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)}))),x.apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return m=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={params:{api_key:s}},n.next=3,o.Z.get("".concat(p,"/").concat(e),t);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)}))),m.apply(this,arguments)}function g(n,e){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(i().mark((function n(e,t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/").concat(t),d);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},273:function(n,e,t){n.exports=t.p+"static/media/question.6566d466f2fa77fc52dc.png"}}]);
//# sourceMappingURL=562.72daa083.chunk.js.map