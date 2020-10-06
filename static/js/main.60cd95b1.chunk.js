(this["webpackJsonpreact-certification-2020"]=this["webpackJsonpreact-certification-2020"]||[]).push([[0],{37:function(e,n,t){e.exports=t(68)},47:function(e,n,t){},65:function(e,n,t){},66:function(e,n,t){},67:function(e,n,t){},68:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(32),i=t.n(c),o=t(7),u=t(3),l=t(36),s=t(6),d=function(e){try{var n=window.localStorage.getItem(e);return JSON.parse(n)}catch(t){return console.error('Error parsing storage item "'.concat(e,'".')),null}},f=function(e,n){window.localStorage.setItem(e,JSON.stringify(n))},p=a.a.createContext(null);function m(){var e=Object(r.useContext)(p);if(!e)throw new Error('Can\'t use "useAuth" without an AuthProvider!');return e}var v=function(e){var n=e.children,t=Object(r.useState)(!1),c=Object(s.a)(t,2),i=c[0],o=c[1];Object(r.useEffect)((function(){var e=d("wa_cert_authenticated"),n=Boolean(e);o(n)}),[]);var u=Object(r.useCallback)((function(){o(!0),f("wa_cert_authenticated",!0)}),[]),l=Object(r.useCallback)((function(){o(!1),f("wa_cert_authenticated",!1)}),[]);return a.a.createElement(p.Provider,{value:{login:u,logout:l,authenticated:i}},n)};var h=function(e){var n=e.children,t=Object(l.a)(e,["children"]),r=m().authenticated;return a.a.createElement(u.b,Object.assign({},t,{render:function(){return r?n:a.a.createElement(u.a,{to:"/login"})}}))};t(47);var b=function(e){var n=e.header,t=e.children;return a.a.createElement("div",{className:"wrapper"},a.a.createElement("div",{className:"header-container"},n),a.a.createElement("main",{className:"content-container"},t))};function g(e){return Math.floor(Math.random()*e)}var x=t(1),E=t(2);function w(){var e=Object(x.a)(["\n  margin: none;\n  background: none;\n  border: none;\n  :hover {\n    cursor: pointer;\n  }\n"]);return w=function(){return e},e}function j(){var e=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #b3b3b3;\n  padding: 8px;\n  border-radius: 8px;\n  color: white;\n  font-size: 18px;\n  text-decoration: none;\n  border: none;\n\n  :hover {\n    cursor: pointer;\n  }\n"]);return j=function(){return e},e}function O(){var e=Object(x.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n"]);return O=function(){return e},e}function y(){var e=Object(x.a)(["\n  width: 100%;\n  height: auto;\n  line-height: 18px;\n  border-radius: 0 0 30px 30px;\n  padding: 0 30px;\n  background-color: white;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n"]);return y=function(){return e},e}var k=E.a.div(y()),C=E.a.div(O()),S=E.a.button(j()),V=E.a.button(w()),_=function(){var e=Object(u.g)(),n=m(),t=n.authenticated,r=n.logout;return a.a.createElement(k,null,a.a.createElement(C,null,t?a.a.createElement(o.b,{to:"/watchlist"},a.a.createElement(S,null,"My Whatchlist")):null,a.a.createElement(o.b,{to:"/search"},a.a.createElement(S,null,"Search"))),a.a.createElement(C,null,a.a.createElement(V,{type:"button",onClick:function(n){n.preventDefault(),e.push("/")}},a.a.createElement("h1",null,"Video Deck"))),a.a.createElement(C,null,t?a.a.createElement(o.b,{to:"/login"},a.a.createElement(S,{onClick:function(n){n.preventDefault(),r(),e.push("/logout")}},"Logout")):a.a.createElement(o.b,{to:"/login"},a.a.createElement(S,null,"Login"))))},D=a.a.createContext(null),I=function(){var e=Object(r.useContext)(D);if(!e)throw new Error('Can\'t use "useWatchlist" without a WatchlistProvider!');return e},N=function(e){var n=e.children,t=Object(r.useState)([]),c=Object(s.a)(t,2),i=c[0],o=c[1];Object(r.useEffect)((function(){var e=d("wl_vdeck_list")||[];o(e)}),[]);var u=Object(r.useCallback)((function(e,n,t){var r=i;r.push({id:e,title:n,data:t}),o(r),f("wl_vdeck_list",r)}),[i]),l=Object(r.useCallback)((function(e){var n=i;e>-1&&n.splice(e,1),o(n),f("wl_vdeck_list",n)}),[i]);return a.a.createElement(D.Provider,{value:{addVideo:u,removeVideo:l,watchlist:i}},n)},z=a.a.createContext(null);function L(){var e=Object(r.useContext)(z);if(!e)throw new Error('Can\'t use "useCurrentVideo" without an CurrentVideoProvider!');return e}var P=function(e){var n=e.children,t=Object(r.useState)({}),c=Object(s.a)(t,2),i=c[0],o=c[1];Object(r.useEffect)((function(){var e=d("cv-vdeck_video");o(e)}),[]);var u=Object(r.useCallback)((function(e){o(e),f("cv-vdeck_video",e)}),[]);return a.a.createElement(z.Provider,{value:{setVideo:u,currentVideo:i}},n)},A=t(5),T=t.n(A),W=t(12);function B(){var e=Object(x.a)(["\n  height: auto;\n  width: 100%;\n  border-radius: 3px;\n  margin-bottom: 8px;\n"]);return B=function(){return e},e}function R(){var e=Object(x.a)(["\n  font-size: 14px;\n  font-family: Arial Black;\n  text-overflow: ellipsis;\n"]);return R=function(){return e},e}function q(){var e=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 40%;\n  padding: 8px;\n"]);return q=function(){return e},e}function F(){var e=Object(x.a)(["\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  align-self: flex-start;\n  background-color: white;\n  height: 280px;\n  width: 280px;\n\n  margin: 8px;\n"]);return F=function(){return e},e}var J=E.a.div(F()),M=E.a.div(q()),X=E.a.span(R()),Y=E.a.img(B()),G=function(e){var n=e.videoSnippet,t=e.onClick,r=function(e){e.preventDefault(),t()};return a.a.createElement(J,{onClick:function(e){return r(e)}},a.a.createElement(M,null,a.a.createElement(Y,{src:n.thumbnails.high.url}),a.a.createElement(X,null," ",n.title," ")))};function Q(){var e=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  flex-wrap: wrap;\n"]);return Q=function(){return e},e}var H=E.a.div(Q()),U=function(e){var n=e.videos,t=L().setVideo,r=Object(u.g)(),c=function(){var e=Object(W.a)(T.a.mark((function e(n){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(n);case 2:"string"===typeof n.id?r.push("/video/".concat(n.id)):r.push("/video/".concat(n.id.videoId));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();if(n.length){var i=n.map((function(e){return a.a.createElement(G,{onClick:function(){return c(e)},videoSnippet:e.snippet,key:e.id})}));return a.a.createElement(H,null,i)}return a.a.createElement("span",null," LOADING... ")},Z=t(17),K=t.n(Z),$="AIzaSyDi9ZuwzXhuRAChIGImPHmj_ac79EDBnEA",ee=function(){var e=Object(r.useRef)(null),n=function(){var e=Object(r.useState)([]),n=Object(s.a)(e,2),t=n[0],a=n[1],c="https://www.googleapis.com/youtube/v3/videos";return Object(r.useEffect)((function(){(function(){var e=Object(W.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,setTimeout(Object(W.a)(T.a.mark((function e(){var n,t,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.a.get(c,{params:{part:"snippet",chart:"mostPopular",regionCode:"mx",videoCategoryId:"10",key:$}});case 2:return n=e.sent,e.next=5,n;case 5:t=e.sent,r=t.data.items,a(r);case 8:case"end":return e.stop()}}),e)}))),300);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error("YT Error: ",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()()}),[c]),{popularVids:t}}().popularVids;return a.a.createElement("div",{ref:e},a.a.createElement(U,{videos:n}))};t(65);var ne=function(){var e=m().login,n=Object(u.g)(),t=Object(r.useState)(""),c=Object(s.a)(t,2),i=c[0],o=c[1],l=Object(r.useState)(""),d=Object(s.a)(l,2),f=d[0],p=d[1],v=function(e,n){e.preventDefault(),n(e.target.value)};return a.a.createElement("section",{className:"login"},a.a.createElement("h1",null,"Welcome back!"),a.a.createElement("form",{onSubmit:function(t){t.preventDefault(),"wizeline"===i&&"rocks"===f&&(e(),n.push("/"))},className:"login-form"},a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"username"},a.a.createElement("strong",null,"username "),a.a.createElement("input",{required:!0,type:"text",id:"username",value:i,onChange:function(e){return v(e,o)}}))),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"password"},a.a.createElement("strong",null,"password "),a.a.createElement("input",{required:!0,type:"password",id:"password",value:f,onChange:function(e){return v(e,p)}}))),a.a.createElement("button",{type:"submit"},"login")))};t(66);var te=function(){return a.a.createElement("section",{className:"not-found"},a.a.createElement(o.b,{to:"/",className:"home-link"},"home"),a.a.createElement("img",{src:"404.gif",alt:"page not found"}))};var re=function(){return a.a.createElement("section",null,a.a.createElement("pre",null,"welcome, voyager...",a.a.createElement(o.b,{to:"/"}," \u2190 go back")),a.a.createElement("iframe",{width:"800",height:"450",allowFullScreen:!0,frameBorder:"0",title:"rick roll",src:"https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}))};function ae(){var e=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #b3b3b3;\n  padding: 8px;\n  border-radius: 50%;\n  color: white;\n  font-size: 18px;\n  font-weight: bolder;\n  text-decoration: none;\n  height: 40px;\n  width: 40px;\n\n  margin: none;\n  border: none;\n\n  :hover {\n    cursor: pointer;\n  }\n"]);return ae=function(){return e},e}function ce(){var e=Object(x.a)(["\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 24px;\n  height: auto;\n  width: 750px;\n  margin: 560px 8px 16px 8px;\n"]);return ce=function(){return e},e}function ie(){var e=Object(x.a)(["\n  width: 100%;\n  height: 100%;\n"]);return ie=function(){return e},e}function oe(){var e=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 720px;\n  height: 580px;\n"]);return oe=function(){return e},e}function ue(){var e=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n"]);return ue=function(){return e},e}var le=E.a.div(ue()),se=E.a.div(oe()),de=E.a.iframe(ie()),fe=E.a.div(ce()),pe=E.a.button(ae()),me=function(e){var n=e.videoId,t=m().authenticated,r=L().currentVideo,c=I().addVideo,i=r.snippet;return n&&i?a.a.createElement(fe,null,a.a.createElement(le,null,a.a.createElement(se,null,a.a.createElement(de,{title:n,className:"video-iframe",src:"https://www.youtube.com/embed/".concat(n),frameborder:"0",allowfullscreen:!0}))),a.a.createElement("h1",null,i.title||"null"),t?a.a.createElement("div",null,a.a.createElement(pe,{type:"button",onClick:function(e){e.preventDefault(),c(n,i.title,r)}},"+"),"Add to Watchlist!"):null):a.a.createElement("p",null," NULL ")};function ve(){var e=Object(x.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 67px;\n"]);return ve=function(){return e},e}var he=E.a.div(ve()),be=Object(u.h)((function(e){var n=e.match,t=Object(r.useRef)(null),c=n.params.id,i=function(e){var n=Object(r.useState)([]),t=Object(s.a)(n,2),a=t[0],c=t[1],i="https://www.googleapis.com/youtube/v3/search";return Object(r.useEffect)((function(){(function(){var n=Object(W.a)(T.a.mark((function n(){return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,setTimeout(Object(W.a)(T.a.mark((function n(){var t,r,a;return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,K.a.get(i,{params:{part:"snippet",relatedToVideoId:e,type:"video",key:$}});case 3:return t=n.sent,n.next=6,t;case 6:r=n.sent,a=r.data.items,c(a),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.error("YT Error: ",n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])}))),300);case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[e,i]),{relatedVids:a}}(c).relatedVids;return a.a.createElement(he,{ref:t},a.a.createElement(me,{videoId:c}),a.a.createElement(U,{videos:i}))}));function ge(){var e=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #b3b3b3;\n  padding: 8px;\n  border-radius: 50%;\n  color: white;\n  font-size: 18px;\n  font-weight: bolder;\n  text-decoration: none;\n  height: 24px;\n  width: 24px;\n\n  margin: none;\n  border: none;\n\n  :hover {\n    cursor: pointer;\n  }\n"]);return ge=function(){return e},e}function xe(){var e=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 80vw;\n"]);return xe=function(){return e},e}function Ee(){var e=Object(x.a)(["\n  :hover {\n    cursor: pointer;\n    text-decoration: underline;\n  }\n"]);return Ee=function(){return e},e}function we(){var e=Object(x.a)(["\n  background-color: white;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  background-color: white;\n  height: auto;\n  width: 100%;\n  padding: 0 8px;\n\n  margin: 8px;\n"]);return we=function(){return e},e}var je=E.a.div(we()),Oe=E.a.span(Ee()),ye=E.a.div(xe()),ke=E.a.button(ge()),Ce=function(){var e=Object(u.g)(),n=I(),t=n.watchlist,r=n.removeVideo,c=L().setVideo,i=function(){var n=Object(W.a)(T.a.mark((function n(t,r){return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,c(r.data);case 3:e.push("/video/".concat(r.id));case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return a.a.createElement(ye,null,t.map((function(e,n){return a.a.createElement(je,{key:e.id},a.a.createElement(Oe,{onClick:function(n){return i(n,e)}},e.title),a.a.createElement(ke,{onClick:function(e){return function(e,n){e.preventDefault(),r(n)}(e,n)}},"X"))})))},Se=Object(u.h)((function(){var e=Object(r.useRef)(null);return a.a.createElement("div",{ref:e},a.a.createElement(Ce,null))}));function Ve(){var e=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #b3b3b3;\n  padding: 8px;\n  border-radius: 8px;\n  color: white;\n  font-size: 18px;\n  text-decoration: none;\n\n  margin: none;\n  border: none;\n\n  :hover {\n    cursor: pointer;\n  }\n"]);return Ve=function(){return e},e}function _e(){var e=Object(x.a)(["\n  color: black;\n  font-size: 1.2rem;\n  width: 85%;\n  padding: 4px 8px;\n  border-radius: 15px;\n  border: 1px solid white;\n  background-color: rgba(0, 0, 0, 0.1);\n"]);return _e=function(){return e},e}function De(){var e=Object(x.a)(["\n  background-color: white;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  height: auto;\n  width: 100%;\n  padding: 8px;\n  margin: 8px 16px;\n"]);return De=function(){return e},e}function Ie(){var e=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  padding: 0 16px;\n  width: 100%;\n  height: 100%;\n"]);return Ie=function(){return e},e}function Ne(){var e=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  padding: 16px;\n  width: 100%;\n  height: 25%;\n"]);return Ne=function(){return e},e}function ze(){var e=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  padding: 16px;\n  width: 100%;\n  height: 100%;\n"]);return ze=function(){return e},e}var Le=E.a.div(ze()),Pe=E.a.div(Ne()),Ae=E.a.div(Ie()),Te=E.a.div(De()),We=E.a.input(_e()),Be=E.a.button(Ve()),Re=function(e){var n=function(e){var n=Object(r.useState)([]),t=Object(s.a)(n,2),a=t[0],c=t[1],i="https://www.googleapis.com/youtube/v3/search";return Object(r.useEffect)((function(){(function(){var n=Object(W.a)(T.a.mark((function n(){return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,setTimeout(Object(W.a)(T.a.mark((function n(){var t,r,a;return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,K.a.get(i,{params:{part:"snippet",maxResults:15,q:e,type:"video",key:$}});case 3:return t=n.sent,n.next=6,t;case 6:r=n.sent,a=r.data.items,c(a),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.error("YT Error: ",n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])}))),300);case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[e,i]),{foudVids:a,setFoundVids:c}}(e).foudVids;return a.a.createElement(U,{videos:n})},qe=function(){var e=Object(r.useState)(""),n=Object(s.a)(e,2),t=n[0],c=n[1],i=Object(r.useState)(""),o=Object(s.a)(i,2),u=o[0],l=o[1],d=Object(r.useState)(!1),f=Object(s.a)(d,2),p=f[0],m=f[1];return a.a.createElement(Le,null,a.a.createElement(Pe,null,a.a.createElement("h1",null,"Look for videos: "),a.a.createElement(Te,null,a.a.createElement(We,{required:!0,type:"text",id:"searchfield",value:t,onChange:function(e){e.preventDefault(),c(e.target.value)}}),a.a.createElement(Be,{type:"submit",onClick:function(e){e.preventDefault(),l(t),m(!0)}},"Search"))),a.a.createElement(Ae,null,p&&u?a.a.createElement(Re,{searchTerm:u}):null))},Fe=function(){return Object(r.useLayoutEffect)((function(){var e=document.body,n=function(){var n=g(100),t=g(100);e.style.setProperty("--bg-position","".concat(n,"% ").concat(t,"%"))},t=setInterval(n,3e3);return e.addEventListener("click",n),function(){clearInterval(t),e.removeEventListener("click",n)}}),[]),a.a.createElement(o.a,null,a.a.createElement(v,null,a.a.createElement(N,null,a.a.createElement(P,null,a.a.createElement(b,{header:a.a.createElement(_,null)},a.a.createElement(u.d,null,a.a.createElement(u.b,{exact:!0,path:"/"},a.a.createElement(ee,null)),a.a.createElement(u.b,{exact:!0,path:"/login"},a.a.createElement(ne,null)),a.a.createElement(u.b,{exact:!0,path:"/search"},a.a.createElement(qe,null)),a.a.createElement(u.b,{exact:!0,path:"/video/:id"},a.a.createElement(be,null)),a.a.createElement(h,{exact:!0,path:"/watchlist"},a.a.createElement(Se,null)),a.a.createElement(h,{exact:!0,path:"/secret"},a.a.createElement(re,null)),a.a.createElement(u.b,{path:"*"},a.a.createElement(te,null))))))))};t(67);i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Fe,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.60cd95b1.chunk.js.map