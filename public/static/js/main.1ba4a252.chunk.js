(this["webpackJsonpchallenge-frontend"]=this["webpackJsonpchallenge-frontend"]||[]).push([[0],{43:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),a=n(33),c=n.n(a),o=(n(43),n(12)),s=n(7),l=n.n(s),j=n(13),d=n(4),p=n.p+"static/media/defaultUserPhoto.a8adb48b.jpg",h=n(34),b=n.n(h).a.create({baseURL:"http://localhost/api/",headers:{"Content-type":"application/json"}}),u=n(0),x=Object(r.createContext)({}),O=function(e){var t=e.children,n=Object(r.useState)(null),i=Object(d.a)(n,2),a=i[0],c=i[1],o=Object(r.useState)(!1),s=Object(d.a)(o,2),h=s[0],O=s[1];Object(r.useEffect)((function(){var e=localStorage.getItem("User");c(e?{user:e,photoUrl:p}:null),O(!1)}),[h]);var f=function(){var e=Object(j.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.post("/auth",{user:t,password:n});case 3:200===e.sent.status&&localStorage.setItem("User",t),O(!0),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),"Error: ".concat(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(u.jsx)(x.Provider,{value:{user:a,handleAuthentication:f,handleLogOut:function(){O(!0),localStorage.clear()}},children:t})},f=function(){return Object(r.useContext)(x)},g=n(5);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var y=r.createElement("circle",{cx:11,cy:11,r:8}),w=r.createElement("line",{x1:21,y1:21,x2:16.65,y2:16.65});function k(e,t){var n=e.title,i=e.titleId,a=v(e,["title","titleId"]);return r.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-search",ref:t,"aria-labelledby":i},a),n?r.createElement("title",{id:i},n):null,y,w)}var C=r.forwardRef(k);n.p;function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var D=r.createElement("ellipse",{cx:12,cy:5,rx:9,ry:3}),P=r.createElement("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),z=r.createElement("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"});function I(e,t){var n=e.title,i=e.titleId,a=S(e,["title","titleId"]);return r.createElement("svg",E({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-database",ref:t,"aria-labelledby":i},a),n?r.createElement("title",{id:i},n):null,D,P,z)}var F,L=r.forwardRef(I),A=(n.p,"#212529"),B="#212529",U="#212529",R="#212529",N="#FFFFFF",V="#CED4DA",W="#BA3333",q="#E6EAEE",M="#E6EAEE",J="#FFC107",T="#212529",G="#393939",H="#f8f9fa",K="#FFC107",Q="#212529",X=n(2),Y=n(3),Z=Y.a.div(F||(F=Object(X.a)(["\n  width: ","px;\n  height: ","px;\n"])),(function(e){return e.width||0}),(function(e){return e.height||0})),$=function(e){var t=e.width,n=e.height;return Object(u.jsx)(Z,{width:t,height:n})};function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var te=r.createElement("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),ne=r.createElement("polyline",{points:"16 17 21 12 16 7"}),re=r.createElement("line",{x1:21,y1:12,x2:9,y2:12});function ie(e,t){var n=e.title,i=e.titleId,a=ee(e,["title","titleId"]);return r.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"#E6EAEE",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-log-out",ref:t,"aria-labelledby":i},a),n?r.createElement("title",{id:i},n):null,te,ne,re)}var ae,ce,oe,se,le,je,de,pe,he,be,ue,xe=r.forwardRef(ie),Oe=(n.p,Y.a.div(ae||(ae=Object(X.a)(["\n  position: relative;\n  top: 10px;\n  left: 55px;\n  width: 220px;\n  height: 77px;\n  display: flex;\n  cursor: pointer;\n  border-radius: 5px;\n  align-items: flex-end;\n  transition: 0.3s linear;\n  background-color: ",";\n\n  animation-name: dropDownContainer;\n  animation-duration: 0.3s;\n\n  @keyframes dropDownContainer {\n    from {\n      opacity: 0;\n      height: 50px;\n    }\n    to {\n      opacity: 1;\n      height: 77px;\n    }\n  }\n"])),A)),fe=Y.a.p(ce||(ce=Object(X.a)(["\n  font-size: 14px;\n  color: ",";\n"])),N),ge=Y.a.div(oe||(oe=Object(X.a)(["\n  width: 100%;\n  display: flex;\n  border-radius: 5px;\n  padding: 20px 10px;\n  align-items: center;\n  transition: 0.2s linear;\n  border-top: 2px solid ",";\n\n  &:hover {\n    transition: 0.2s linear;\n    background-color: ",";\n  }\n"])),G,G),me=function(){var e=f().handleLogOut;return Object(u.jsx)(Oe,{onClick:e,children:Object(u.jsxs)(ge,{children:[Object(u.jsx)(xe,{}),Object(u.jsx)($,{width:10}),Object(u.jsx)(fe,{children:"Deslogar"})]})})},ve=Y.a.div(se||(se=Object(X.a)(["\n  z-index: 10;\n"]))),ye=function(e){var t=e.imageURL;return Object(u.jsx)(ve,{children:Object(u.jsx)("img",{src:t,alt:"noUser",width:40,height:40,style:{borderRadius:20,border:"3px solid #FFFFFF",objectFit:"cover"}})})},we=Y.a.nav(le||(le=Object(X.a)(["\n  z-index: 100;\n  width: 100%;\n  height: 72px;\n  display: flex;\n  padding-left: 20px;\n  align-items: center;\n  padding-right: 20px;\n  background-color: ",";\n  box-shadow: 0 0.5rem 1rem rgba(33, 37, 45, 0.15);\n"])),B),ke=Y.a.div(je||(je=Object(X.a)(["\n  cursor: pointer;\n  padding-top: 3px;\n"]))),Ce=Y.a.div(de||(de=Object(X.a)(["\n  position: absolute;\n  top: 50px;\n"]))),Ee=Y.a.p(pe||(pe=Object(X.a)(["\n  color: ",";\n  font-size: ","px;\n"])),(function(e){return e.color}),(function(e){return e.size})),Se=Y.a.ul(he||(he=Object(X.a)(["\n  display: flex;\n  flex: 1;\n"]))),De=Y.a.li(be||(be=Object(X.a)(["\n  border-radius: 10px;\n  padding: 8px 10px 6px;\n  border-bottom-width: 5px;\n  transition: 0.3s linear;\n\n  &:hover {\n    transition: 0.3s linear;\n    background-color: ",";\n  }\n"])),G),Pe=Object(Y.a)(o.b)(ue||(ue=Object(X.a)(["\n  display: flex;\n  font-size: 13px;\n  font-weight: 500;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  color: ",";\n"])),(function(e){return e.isSelected?J:M})),ze=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],i=t[1],a=f().user,c=Object(g.g)(),o=J,s=M,l=N;return Object(u.jsxs)(we,{children:[Object(u.jsx)(ke,{onClick:function(){return i(!n)},children:Object(u.jsx)(ye,{imageURL:a.photoUrl})}),Object(u.jsx)($,{width:15}),Object(u.jsxs)(Ee,{color:l,weight:400,size:16,children:["Bem vindo, ",Object(u.jsx)("strong",{children:a.user})]}),Object(u.jsx)($,{width:75}),Object(u.jsx)(Ce,{children:n&&Object(u.jsx)(me,{})}),Object(u.jsxs)(Se,{children:[Object(u.jsx)(De,{children:Object(u.jsxs)(Pe,{to:"/registerCompany",isSelected:c.pathname.includes("/register"),children:[Object(u.jsx)(L,{stroke:c.pathname.includes("/register")?o:s}),Object(u.jsx)($,{height:3}),Object(u.jsx)(Ee,{color:c.pathname.includes("/register")?o:s,weight:500,size:13.6,children:"Cadastrar"})]})}),Object(u.jsx)($,{width:16}),Object(u.jsx)(De,{children:Object(u.jsxs)(Pe,{to:"/searchCompany",isSelected:c.pathname.includes("/search"),children:[Object(u.jsx)(C,{stroke:c.pathname.includes("/search")?o:s}),Object(u.jsx)($,{height:3}),Object(u.jsx)(Ee,{color:c.pathname.includes("/search")?o:s,weight:500,size:13.6,children:"Pesquisar"})]})})]})]})};function Ie(){return(Ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Fe(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var Le=r.createElement("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),Ae=r.createElement("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),Be=r.createElement("line",{x1:12,y1:22.08,x2:12,y2:12});function Ue(e,t){var n=e.title,i=e.titleId,a=Fe(e,["title","titleId"]);return r.createElement("svg",Ie({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"#212529",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-box",ref:t,"aria-labelledby":i},a),n?r.createElement("title",{id:i},n):null,Le,Ae,Be)}var Re=r.forwardRef(Ue);n.p;function Ne(){return(Ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ve(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var We=r.createElement("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),qe=r.createElement("polyline",{points:"2 17 12 22 22 17"}),Me=r.createElement("polyline",{points:"2 12 12 17 22 12"});function Je(e,t){var n=e.title,i=e.titleId,a=Ve(e,["title","titleId"]);return r.createElement("svg",Ne({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"#212529",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-layers",ref:t,"aria-labelledby":i},a),n?r.createElement("title",{id:i},n):null,We,qe,Me)}var Te,Ge,He,Ke,Qe,Xe,Ye=r.forwardRef(Je),Ze=(n.p,Y.a.div(Te||(Te=Object(X.a)(["\n  width: 240px;\n  height: 100%;\n  background-color: #f8f9fa;\n  border-right: 0.5px solid ",";\n"])),q)),$e=Y.a.p(Ge||(Ge=Object(X.a)(["\n  font-size: 14px;\n  color: ",";\n"])),R),_e=Y.a.ul(He||(He=Object(X.a)(["\n  display: flex;\n  flex: 1;\n"]))),et=Y.a.li(Ke||(Ke=Object(X.a)(["\n  border-radius: 10px;\n  padding: 8px 10px 6px;\n  transition: 0.3s linear;\n"]))),tt=Object(Y.a)(o.b)(Qe||(Qe=Object(X.a)(["\n  width: 210px;\n  height: 40px;\n  display: flex;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 5px;\n  align-items: center;\n  transition: 0.3s linear;\n  background-color: ",";\n\n  color: ",";\n\n  &:hover {\n    transition: 0.3s linear;\n    background-color: ",";\n  }\n"])),(function(e){return e.isSelected?J:H}),(function(e){return e.isSelected?J:H}),J),nt=function(e){var t=e.path,n=e.title,r=Object(g.g)();return Object(u.jsxs)(Ze,{children:[Object(u.jsx)($,{height:25}),Object(u.jsx)(_e,{children:Object(u.jsxs)(et,{children:[Object(u.jsxs)(tt,{to:t[0],isSelected:r.pathname===t[0],children:[Object(u.jsx)($,{width:10}),Object(u.jsx)(Ye,{}),Object(u.jsx)($,{width:10}),Object(u.jsx)($e,{children:n[0]})]}),Object(u.jsx)($,{height:10}),Object(u.jsxs)(tt,{to:t[1],isSelected:r.pathname===t[1],children:[Object(u.jsx)($,{width:10}),Object(u.jsx)(Re,{}),Object(u.jsx)($,{width:10}),Object(u.jsx)($e,{children:n[1]})]})]})})]})},rt=Y.a.div(Xe||(Xe=Object(X.a)([""]))),it=function(){return Object(u.jsxs)(rt,{children:[Object(u.jsx)(ze,{}),Object(u.jsx)(nt,{title:["Pesquisar empresa","Pesquisar sistema"],path:["/searchCompany","/searchData"]})]})};function at(){return(at=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ct(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var ot=r.createElement("circle",{cx:12,cy:12,r:10}),st=r.createElement("line",{x1:14.31,y1:8,x2:20.05,y2:17.94}),lt=r.createElement("line",{x1:9.69,y1:8,x2:21.17,y2:8}),jt=r.createElement("line",{x1:7.38,y1:12,x2:13.12,y2:2.06}),dt=r.createElement("line",{x1:9.69,y1:16,x2:3.95,y2:6.06}),pt=r.createElement("line",{x1:14.31,y1:16,x2:2.83,y2:16}),ht=r.createElement("line",{x1:16.62,y1:12,x2:10.88,y2:21.94});function bt(e,t){var n=e.title,i=e.titleId,a=ct(e,["title","titleId"]);return r.createElement("svg",at({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"#B5BBC1",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-aperture",ref:t,"aria-labelledby":i},a),n?r.createElement("title",{id:i},n):null,ot,st,lt,jt,dt,pt,ht)}var ut,xt,Ot,ft,gt,mt,vt,yt,wt,kt,Ct,Et,St,Dt,Pt,zt,It,Ft,Lt,At,Bt,Ut,Rt,Nt,Vt,Wt,qt,Mt,Jt,Tt,Gt,Ht,Kt,Qt,Xt,Yt,Zt,$t=r.forwardRef(bt),_t=(n.p,Y.a.div(ut||(ut=Object(X.a)(["\n  position: relative;\n  width: ",";\n\n  animation-name: dropDown;\n  animation-duration: 0.6s;\n\n  @keyframes dropDown {\n    from {\n      opacity: 0;\n      top: -20px;\n    }\n    to {\n      opacity: 1;\n      top: 0px;\n    }\n  }\n"])),(function(e){return e.width}))),en=Y.a.input(xt||(xt=Object(X.a)(["\n  width: 100%;\n  height: 35px;\n  border-radius: 5px;\n  padding-left: 10px;\n  padding-right: 20px;\n  transition: 0.3s linear;\n  border: 2px solid ",";\n\n  &:hover {\n    transition: 0.3s linear;\n    border-color: ",";\n  }\n"])),V,T),tn=Y.a.p(Ot||(Ot=Object(X.a)(["\n  font-size: 14px;\n  font-weight: 700;\n  color: ",";\n"])),R),nn=function(e){var t=e.title,n=e.width,r=void 0===n?"100%":n,i=e.handleOnChange;return Object(u.jsxs)(_t,{width:r,children:[Object(u.jsx)(tn,{children:t}),Object(u.jsx)($,{height:5}),Object(u.jsx)(en,{onChange:function(e){return i(e.target.value)}})]})},rn=Y.a.button(ft||(ft=Object(X.a)(["\n  height: 37px;\n  display: flex;\n  font-size: 14px;\n  cursor: pointer;\n  font-weight: 700;\n  position: relative;\n  border-radius: 5px;\n  align-items: center;\n  transition: 0.3s linear;\n  justify-content: center;\n  width: ",";\n  color: ",";\n  background-color: ",";\n\n  &:hover {\n    background-color: #ffcf41;\n    transition: 0.3s linear;\n  }\n\n  animation-name: dropDown;\n  animation-duration: 0.6s;\n\n  @keyframes dropDown {\n    from {\n      opacity: 0;\n      top: -20px;\n    }\n    to {\n      opacity: 1;\n      top: 0px;\n    }\n  }\n"])),(function(e){return e.width}),Q,K),an=function(e){var t=e.title,n=e.width,r=void 0===n?"100%":n,i=e.handleOnClick;return Object(u.jsx)(rn,{onClick:i,width:r,children:t})},cn=Y.a.div(gt||(gt=Object(X.a)(["\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  flex-direction: column;\n"]))),on=Y.a.div(mt||(mt=Object(X.a)(["\n  display: flex;\n  flex: 1;\n"]))),sn=Y.a.section(vt||(vt=Object(X.a)(["\n  display: flex;\n"]))),ln=Y.a.section(yt||(yt=Object(X.a)(["\n  flex: 1;\n  position: relative;\n\n  animation-name: dropDown;\n  animation-duration: 0.6s;\n\n  @keyframes dropDown {\n    from {\n      opacity: 0;\n      top: -10px;\n    }\n    to {\n      opacity: 1;\n      top: 0px;\n    }\n  }\n"]))),jn=Y.a.p(wt||(wt=Object(X.a)(["\n  position: relative;\n  font-size: ",";\n  font-weight: 700;\n  color: ",";\n"])),(function(e){return e.size}),R),dn=Y.a.div(kt||(kt=Object(X.a)(["\n  display: flex;\n  width: 100%;\n  height: 35px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  padding-left: 20px;\n  padding-right: 20px;\n  align-items: center;\n  transition: 0.3s linear;\n  background-color: ",";\n\n  animation-name: dropDown;\n  animation-duration: 0.6s;\n\n  @keyframes dropDown {\n    from {\n      opacity: 0;\n      top: -10px;\n    }\n    to {\n      opacity: 1;\n      top: 0px;\n    }\n  }\n"])),q),pn=(Y.a.div(Ct||(Ct=Object(X.a)(["\n  display: flex;\n  cursor: pointer;\n  margin-top: 20px;\n  align-items: center;\n\n  animation-name: dropDown;\n  animation-duration: 0.6s;\n\n  @keyframes dropDown {\n    from {\n      opacity: 0;\n      top: -20px;\n    }\n    to {\n      opacity: 1;\n      top: 0px;\n    }\n  }\n"]))),function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],i=t[1],a=Object(r.useState)(""),c=Object(d.a)(a,2),o=c[0],s=c[1],l=Object(r.useState)(["TOTVS","GSA"]),j=Object(d.a)(l,1)[0];return Object(u.jsxs)(cn,{children:[Object(u.jsx)(ze,{}),Object(u.jsxs)(on,{children:[Object(u.jsx)(nt,{title:["Cadastrar empresa","Cadastrar sistema"],path:["/registerCompany","/registerData"]}),Object(u.jsxs)(sn,{children:[Object(u.jsx)($,{width:50}),Object(u.jsxs)(ln,{children:[Object(u.jsx)($,{height:50}),Object(u.jsx)(jn,{size:14,children:"Cadastrar dados"}),Object(u.jsx)($,{height:40}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(dn,{onClick:function(){return i(!n)},children:[Object(u.jsx)($t,{}),Object(u.jsx)($,{width:10}),""===o?Object(u.jsx)(jn,{size:16,children:"Selecione uma empresa"}):Object(u.jsx)(jn,{size:16,children:o})]}),n&&j.map((function(e){return Object(u.jsxs)(dn,{onClick:function(){return s(e),void i(!1)},children:[Object(u.jsx)($,{width:35}),Object(u.jsx)(jn,{size:16,children:e})]})})),Object(u.jsx)($,{height:10}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)($,{height:15}),Object(u.jsx)(nn,{title:"Sistema",handleOnChange:function(){}}),Object(u.jsx)($,{height:15}),Object(u.jsx)(nn,{title:"Propriet\xe1rio do dado",handleOnChange:function(){}}),Object(u.jsx)($,{height:15}),Object(u.jsx)("div",{style:{display:"flex",marginBottom:20},children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(nn,{title:"Campo",handleOnChange:function(){}}),Object(u.jsx)($,{width:30}),Object(u.jsx)(nn,{title:"Valor",handleOnChange:function(){}}),Object(u.jsx)($,{width:10})]})}),Object(u.jsx)(an,{title:"Cadastrar",width:"100%",handleOnClick:function(){}})]})]})]})]})]})]})}),hn=Object(r.createContext)({}),bn=function(e){var t=e.children,n=Object(r.useState)(null),i=Object(d.a)(n,2),a=i[0],c=i[1],o=Object(r.useState)(!1),s=Object(d.a)(o,2),p=s[0],h=s[1];Object(r.useEffect)((function(){O(),h(!1)}),[p]);var x=function(){var e=Object(j.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,b.post("/company",{name:t,cnpj:n});case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),"Error: ".concat(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,b.get("/companies");case 4:(t=e.sent).data&&c(t.data.data),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),"Error: ".concat(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)(hn.Provider,{value:{company:a,handleAddCompany:x,handleGetAllCompanies:O},children:t})},un=function(){return Object(r.useContext)(hn)},xn=Y.a.div(Et||(Et=Object(X.a)([""]))),On=Y.a.p(St||(St=Object(X.a)(["\n  font-size: 16px;\n  color: ",";\n"])),R),fn=Y.a.ul(Dt||(Dt=Object(X.a)([""]))),gn=Y.a.li(Pt||(Pt=Object(X.a)([""]))),mn=function(e){var t=e.data;return Object(u.jsx)(xn,{children:Object(u.jsx)(fn,{children:null===t?Object(u.jsx)(On,{children:"Nenhuma empresa cadastrada"}):t.map((function(e){return Object(u.jsx)(gn,{children:Object(u.jsx)(On,{children:e.name})})}))})})},vn=Y.a.div(zt||(zt=Object(X.a)(["\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  flex-direction: column;\n"]))),yn=Y.a.div(It||(It=Object(X.a)(["\n  display: flex;\n  flex: 1;\n"]))),wn=Y.a.section(Ft||(Ft=Object(X.a)(["\n  display: flex;\n"]))),kn=Y.a.section(Lt||(Lt=Object(X.a)(["\n  flex: 1;\n  position: relative;\n\n  animation-name: dropDown;\n  animation-duration: 0.6s;\n\n  @keyframes dropDown {\n    from {\n      opacity: 0;\n      top: -10px;\n    }\n    to {\n      opacity: 1;\n      top: 0px;\n    }\n  }\n"]))),Cn=Y.a.p(At||(At=Object(X.a)(["\n  position: relative;\n  font-size: ",";\n  font-weight: 700;\n  color: ",";\n"])),(function(e){return e.size}),R),En=function(){var e=un().company;return Object(u.jsxs)(vn,{children:[Object(u.jsx)(ze,{}),Object(u.jsxs)(yn,{children:[Object(u.jsx)(nt,{title:["Pesquisar empresa","Pesquisar sistema"],path:["/searchCompany","/searchData"]}),Object(u.jsxs)(wn,{children:[Object(u.jsx)($,{width:50}),Object(u.jsxs)(kn,{children:[Object(u.jsx)($,{height:50}),Object(u.jsx)(Cn,{size:14,children:"Empresas cadastradas"}),Object(u.jsx)($,{height:40}),Object(u.jsx)(mn,{data:e})]})]})]})]})},Sn=Y.a.div(Bt||(Bt=Object(X.a)([""]))),Dn=Y.a.p(Ut||(Ut=Object(X.a)(["\n  font-size: 20px;\n  color: ",";\n"])),Q),Pn=function(e){var t=e.handleOnClick;return Object(u.jsxs)(Sn,{children:[Object(u.jsx)(Dn,{children:"Enviado com sucesso !"}),Object(u.jsx)($,{height:20}),Object(u.jsx)(an,{title:"Voltar",handleOnClick:function(){return t(!1)}})]})},zn=Y.a.div(Rt||(Rt=Object(X.a)(["\n  height: 5px;\n"]))),In=Y.a.p(Nt||(Nt=Object(X.a)(["\n  font-size: 13px;\n  color: ",";\n"])),W),Fn=function(e){var t=e.title;return Object(u.jsx)(zn,{children:Object(u.jsx)(In,{children:t})})},Ln=Y.a.div(Vt||(Vt=Object(X.a)(["\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  flex-direction: column;\n"]))),An=Y.a.p(Wt||(Wt=Object(X.a)(["\n  position: relative;\n  font-size: 16px;\n  font-weight: 700;\n  color: ",";\n\n  animation-name: dropDown;\n  animation-duration: 0.6s;\n\n  @keyframes dropDown {\n    from {\n      opacity: 0;\n      top: -20px;\n    }\n    to {\n      opacity: 1;\n      top: 0px;\n    }\n  }\n"])),R),Bn=Y.a.section(qt||(qt=Object(X.a)(["\n  display: flex;\n  flex: 1;\n"]))),Un=Y.a.div(Mt||(Mt=Object(X.a)(["\n  padding-left: 50px;\n"]))),Rn=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],i=t[1],a=Object(r.useState)(""),c=Object(d.a)(a,2),o=c[0],s=c[1],p=Object(r.useState)(!1),h=Object(d.a)(p,2),b=h[0],x=h[1],O=Object(r.useState)(""),f=Object(d.a)(O,2),g=f[0],m=f[1],v=un().handleAddCompany,y=function(e){return x(e)},w=function(){var e=Object(j.a)(l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!n.trim().length,r=!o.trim().length,!t&&!r){e.next=6;break}m("Todos os campos s\xe3o necess\xe1rios"),e.next=12;break;case 6:return m(""),e.next=9,v(n,o);case 9:i(""),s(""),y(!0);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)(Ln,{children:[Object(u.jsx)(ze,{}),Object(u.jsxs)(Bn,{children:[Object(u.jsx)(nt,{title:["Cadastrar empresa","Cadastrar sistema"],path:["/registerCompany","/registerData"]}),b?Object(u.jsxs)("div",{style:{marginLeft:50},children:[Object(u.jsx)($,{height:50}),Object(u.jsx)(Pn,{handleOnClick:y})]}):Object(u.jsxs)(Un,{children:[Object(u.jsx)($,{height:50}),Object(u.jsx)(An,{children:"Cadastrar empresa"}),Object(u.jsx)($,{height:30}),Object(u.jsx)(nn,{title:"Nome",width:"324px",handleOnChange:function(e){return i(e)}}),Object(u.jsx)($,{height:15}),Object(u.jsx)(nn,{title:"CNPJ",width:"324px",handleOnChange:function(e){return s(e)}}),Object(u.jsx)($,{height:5}),Object(u.jsx)(Fn,{title:g}),Object(u.jsx)($,{height:35}),Object(u.jsx)("div",{children:Object(u.jsx)(an,{title:"Cadastrar",width:"324px",handleOnClick:w})})]})]})]})},Nn=function(){return Object(u.jsxs)(g.d,{children:[Object(u.jsx)(g.b,{exact:!0,path:"/",render:function(){return Object(u.jsx)(g.a,{to:"/registerCompany"})}}),Object(u.jsx)(g.b,{path:"/registerCompany",component:Rn,exact:!0}),Object(u.jsx)(g.b,{path:"/registerData",component:pn,exact:!0}),Object(u.jsx)(g.b,{path:"/searchCompany",component:En,exact:!0}),Object(u.jsx)(g.b,{path:"/searchData",component:it,exact:!0})]})},Vn=n.p+"static/media/user.ae0d5342.svg",Wn=n.p+"static/media/eye-on.b2cf651f.svg",qn=n.p+"static/media/eye-off.ba1a651a.svg",Mn=Y.a.div(Jt||(Jt=Object(X.a)(["\n  position: relative;\n  height: 37px;\n  display: flex;\n  padding-left: 10px;\n  align-items: center;\n  border-radius: 5px;\n  padding-right: 20px;\n  transition: 0.3s linear;\n  border: 2px solid ",";\n\n  &:hover {\n    transition: 0.3s linear;\n    border-color: ",";\n  }\n\n  animation-name: dropDown;\n  animation-duration: 0.6s;\n\n  @keyframes dropDown {\n    from {\n      opacity: 0;\n      top: -20px;\n    }\n    to {\n      opacity: 1;\n      top: 0px;\n    }\n  }\n"])),V,T),Jn=Y.a.div(Tt||(Tt=Object(X.a)(["\n  padding-top: 5px;\n"]))),Tn=function(e){var t=e.isPassword,n=void 0!==t&&t,i=e.handleOnChange,a=Object(r.useState)(n),c=Object(d.a)(a,2),o=c[0],s=c[1];return Object(u.jsxs)(Mn,{children:[Object(u.jsx)("input",{type:o?"password":"text",maxLength:30,style:{height:37},onChange:function(e){return i(e.target.value)}}),n?Object(u.jsx)(Jn,{onClick:function(){return s(!o)},children:Object(u.jsx)("img",{src:o?qn:Wn,alt:"eyeOnIcon",width:24,height:24})}):Object(u.jsx)("img",{src:Vn,alt:"userIcon",width:24,height:24})]})},Gn=Y.a.footer(Gt||(Gt=Object(X.a)(["\n  width: 100%;\n  height: 30px;\n  background-color: ",";\n"])),U),Hn=function(){return Object(u.jsx)(Gn,{})},Kn=Y.a.div(Ht||(Ht=Object(X.a)(["\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  flex-direction: column;\n"]))),Qn=Y.a.header(Kt||(Kt=Object(X.a)(["\n  display: flex;\n  width: 100%;\n  height: 50px;\n  padding-left: 20px;\n  align-items: center;\n  padding-right: 20px;\n  background-color: ",";\n"])),B),Xn=Y.a.section(Qt||(Qt=Object(X.a)(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n"]))),Yn=Y.a.p(Xt||(Xt=Object(X.a)(["\n  position: relative;\n  font-size: 14px;\n  color: ",";\n\n  animation-name: dropDown;\n  animation-duration: 0.6s;\n\n  @keyframes dropDown {\n    from {\n      opacity: 0;\n      top: -20px;\n    }\n    to {\n      opacity: 1;\n      top: 0px;\n    }\n  }\n"])),(function(e){return e.color})),Zn=Y.a.p(Yt||(Yt=Object(X.a)(["\n  height: 20px;\n  font-size: 13px;\n  color: ",";\n"])),W),$n=Y.a.form(Zt||(Zt=Object(X.a)(["\n  width: 398px;\n  height: 300px;\n  padding: 38px;\n"]))),_n=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],i=t[1],a=Object(r.useState)(""),c=Object(d.a)(a,2),o=c[0],s=c[1],p=Object(r.useState)(""),h=Object(d.a)(p,2),b=h[0],x=h[1],O=R,g=f().handleAuthentication,m=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=!o.trim().length,r=!b.trim().length,t.preventDefault(),!n||!r){e.next=7;break}i("Campos usu\xe1rio e senha s\xe3o necess\xe1rios"),e.next=23;break;case 7:if(!n){e.next=11;break}i("Campo usu\xe1rio \xe9 necess\xe1rio"),e.next=23;break;case 11:if(!r){e.next=15;break}i("Campo senha \xe9 necess\xe1rio"),e.next=23;break;case 15:return e.prev=15,e.next=18,g(o,b);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(15),i("Usu\xe1rio ou senha inv\xe1lidos");case 23:case"end":return e.stop()}}),e,null,[[15,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)(Kn,{children:[Object(u.jsx)(Qn,{}),Object(u.jsx)(Xn,{children:Object(u.jsxs)($n,{onSubmit:function(e){return m(e)},children:[Object(u.jsx)(Yn,{color:O,children:"Usu\xe1rio"}),Object(u.jsx)($,{height:5}),Object(u.jsx)(Tn,{handleOnChange:function(e){return s(e)}}),Object(u.jsx)($,{height:20}),Object(u.jsx)(Yn,{color:O,children:"Senha"}),Object(u.jsx)($,{height:5}),Object(u.jsx)(Tn,{isPassword:!0,handleOnChange:function(e){return x(e)}}),Object(u.jsx)($,{height:10}),Object(u.jsx)(Zn,{children:n}),Object(u.jsx)($,{height:25}),Object(u.jsx)(an,{title:"Entrar"})]})}),Object(u.jsx)(Hn,{})]})},er=function(){return Object(u.jsx)(g.d,{children:Object(u.jsx)(g.b,{path:"/",children:Object(u.jsx)(_n,{})})})},tr=function(){var e=f().user;return Object(u.jsx)(o.a,{children:e?Object(u.jsx)(bn,{children:Object(u.jsx)(Nn,{})}):Object(u.jsx)(er,{})})};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(O,{children:Object(u.jsx)(tr,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.1ba4a252.chunk.js.map