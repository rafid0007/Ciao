(this["webpackJsonpreact-commerce"]=this["webpackJsonpreact-commerce"]||[]).push([[0],{10:function(e,t,n){"use strict";t.a={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"}},17:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return o})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"j",(function(){return p})),n.d(t,"k",(function(){return f})),n.d(t,"i",(function(){return m}));var r=n(10),a=function(){return{type:r.a.GOOGLE_SIGN_IN_START}},c=function(e){return{type:r.a.EMAIL_SIGN_IN_START,payload:e}},i=function(e){return{type:r.a.SIGN_IN_SUCCESS,payload:e}},u=function(e){return{type:r.a.SIGN_IN_FAILURE,payload:e}},o=function(){return{type:r.a.CHECK_USER_SESSION}},s=function(){return{type:r.a.SIGN_OUT_START}},l=function(){return{type:r.a.SIGN_OUT_SUCCESS}},d=function(){return{type:r.a.SIGN_OUT_FAILURE}},p=function(e){return{type:r.a.SIGN_UP_START,payload:e}},f=function(e){var t=e.user,n=e.additionalData;return{type:r.a.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}},m=function(e){return{type:r.a.SIGN_UP_FAILURE,payload:e}}},18:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"f",(function(){return f}));var r=n(4),a=n.n(r),c=n(7),i=n(43),u=n(37),o=(n(81),n(83),function(){var e=Object(i.a)(a.a.mark((function e(t,n){var r,i,u,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=p.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return i=t.displayName,u=t.email,o=new Date,e.prev=9,e.next=12,r.set(Object(c.a)({displayName:i,email:u,created_at:o},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}()),s=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,r=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:r}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},l=function(){return new Promise((function(e,t){var n=d.onAuthStateChanged((function(t){n(),e(t)}),t)}))};u.a.initializeApp({apiKey:"AIzaSyDFW2QutpDo_nncZU9WQA5PBUa1BCUwE-8",authDomain:"react-commerce-db-b00aa.firebaseapp.com",databaseURL:"https://react-commerce-db-b00aa.firebaseio.com",projectId:"react-commerce-db-b00aa",storageBucket:"react-commerce-db-b00aa.appspot.com",messagingSenderId:"635617394575",appId:"1:635617394575:web:5cc7a066aa1e61bdb6d5fa",measurementId:"G-P3SYQD8WD5"});var d=u.a.auth(),p=u.a.firestore(),f=new u.a.auth.GoogleAuthProvider;f.setCustomParameters({prompt:"select_account"});u.a},21:function(e,t,n){"use strict";t.a={TOGGLE_CARD_HIDDEN:"TOGGLE_CARD_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM:"CLEAR_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_CART:"CLEAR_CART"}},26:function(e,t,n){"use strict";t.a={FETCH_COLLECTION_START:"FETCH_COLLECTION_START",FETCH_COLLECTION_SUCCESS:"FETCH_COLLECTION_SUCCESS",FETCH_COLLECTION_FAILURE:"FETCH_COLLECTION_FAILURE"}},33:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return o}));var r=n(21),a=function(){return{type:r.a.TOGGLE_CARD_HIDDEN}},c=function(e){return{type:r.a.ADD_ITEM,payload:e}},i=function(e){return{type:r.a.REMOVE_ITEM,payload:e}},u=function(e){return{type:r.a.CLEAR_ITEM,payload:e}},o=function(){return{type:r.a.CLEAR_CART}}},35:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return o}));var r=n(14),a=function(e){return e.cart},c=Object(r.a)([a],(function(e){return e.hidden})),i=Object(r.a)([a],(function(e){return e.cartItems})),u=Object(r.a)([i],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),o=Object(r.a)([i],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)}))},44:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(26),a=(n(18),function(){return{type:r.a.FETCH_COLLECTION_START}}),c=function(e){return{type:r.a.FETCH_COLLECTION_SUCCESS,payload:e}},i=function(e){return{type:r.a.FETCH_COLLECTION_FAILURE,payload:e}}},50:function(e,t,n){"use strict";var r=n(51),a=n(1),c=n.n(a);n(87);t.a=function(e){var t=e.isGoogleSignIn,n=e.inverted,a=e.children,i=Object(r.a)(e,["isGoogleSignIn","inverted","children"]);return c.a.createElement("button",Object.assign({className:"".concat(n?"inverted":"").concat(t?"google-sign-in":""," custom-button")},i),a)}},52:function(e,t,n){"use strict";var r=n(1),a=n.n(r),c=n(15),i=n(16);function u(){var e=Object(c.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return u=function(){return e},e}function o(){var e=Object(c.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return o=function(){return e},e}var s=i.a.div(o()),l=i.a.div(u());t.a=function(){return a.a.createElement(s,null,a.a.createElement(l,null))}},69:function(e,t,n){e.exports=n(94)},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(39),i=n.n(c),u=n(28),o=n(25),s=n(19),l=(n(95),n(41)),d=n(59),p=n.n(d),f=n(7),m=n(10),b={currentUser:null,error:null},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.a.SIGN_IN_SUCCESS:return Object(f.a)(Object(f.a)({},e),{},{currentUser:t.payload,error:null});case m.a.SIGN_IN_FAILURE:case m.a.SIGN_OUT_FAILURE:case m.a.SIGN_UP_FAILURE:return Object(f.a)(Object(f.a)({},e),{},{error:t.payload});case m.a.SIGN_OUT_SUCCESS:return Object(f.a)(Object(f.a)({},e),{},{currentUser:null,error:null});default:return e}},O=n(21),g=n(36),j=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(f.a)(Object(f.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(g.a)(e),[Object(f.a)(Object(f.a)({},t),{},{quantity:1})])},h=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(f.a)(Object(f.a)({},e),{},{quantity:e.quantity-1}):e}))},v={hidden:!0,cartItems:[]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.a.TOGGLE_CARD_HIDDEN:return Object(f.a)(Object(f.a)({},e),{},{hidden:!e.hidden});case O.a.ADD_ITEM:return Object(f.a)(Object(f.a)({},e),{},{cartItems:j(e.cartItems,t.payload)});case O.a.REMOVE_ITEM:return Object(f.a)(Object(f.a)({},e),{},{cartItems:h(e.cartItems,t.payload)});case O.a.CLEAR_ITEM:return Object(f.a)(Object(f.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case O.a.CLEAR_CART:return Object(f.a)(Object(f.a)({},e),{},{cartItems:[]});default:return e}},S={sections:[{title:"menswear",imageUrl:"https://i.ibb.co/7GD4fLP/mens.png",size:"large",id:5,linkUrl:"shop/mens"},{title:"womenswear",imageUrl:"https://i.ibb.co/8jBJrr3/home-women-1.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"hats",imageUrl:"https://i.ibb.co/PYNRFkw/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/Tm0bpM8/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"footwear",imageUrl:"https://i.ibb.co/vzrgc5F/footwear.png",id:3,linkUrl:"shop/sneakers"}]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;return t.type,e},x=n(26),C={collections:null,isFetching:!1,errorMessage:void 0},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.a.FETCH_COLLECTION_START:return Object(f.a)(Object(f.a)({},e),{},{isFetching:!0});case x.a.FETCH_COLLECTION_SUCCESS:return Object(f.a)(Object(f.a)({},e),{},{isFetching:!1,collections:t.payload});case x.a.FETCH_COLLECTION_FAILURE:return Object(f.a)(Object(f.a)({},e),{},{errorMessage:t.payload});default:return e}},_={key:"root",storage:p.a,whitelist:["cart"]},w=Object(s.c)({user:E,cart:y,directory:N,shop:I}),L=Object(l.a)(_,w),T=n(67),M=n(4),U=n.n(M),k=n(6),D=n(18),A=n(44),G=U.a.mark(z),R=U.a.mark(Q),P=U.a.mark(F);function z(){var e,t,n;return U.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=D.d.collection("collections"),r.next=4,e.get();case 4:return t=r.sent,r.next=7,Object(k.b)(D.b,t);case 7:return n=r.sent,r.next=10,Object(k.c)(Object(A.c)(n));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(k.c)(Object(A.a)(r.t0.message));case 16:case"end":return r.stop()}}),G,null,[[0,12]])}function Q(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.d)(x.a.FETCH_COLLECTION_START,z);case 2:case"end":return e.stop()}}),R)}function F(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([Object(k.b)(Q)]);case 2:case"end":return e.stop()}}),P)}var H=n(17),Z=U.a.mark(ae),K=U.a.mark(ce),Y=U.a.mark(ie),J=U.a.mark(ue),B=U.a.mark(oe),W=U.a.mark(se),V=U.a.mark(le),q=U.a.mark(de),X=U.a.mark(pe),$=U.a.mark(fe),ee=U.a.mark(me),te=U.a.mark(be),ne=U.a.mark(Ee),re=U.a.mark(Oe);function ae(e,t){var n,r;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(k.b)(D.c,e,t);case 3:return n=a.sent,a.next=6,n.get();case 6:return r=a.sent,a.next=9,Object(k.c)(Object(H.e)(Object(f.a)({id:r.id},r.data())));case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(0),a.next=15,Object(k.c)(Object(H.d)(a.t0));case 15:case"end":return a.stop()}}),Z,null,[[0,11]])}function ce(){var e,t;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,D.a.signInWithPopup(D.f);case 3:return e=n.sent,t=e.user,n.next=7,ae(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(k.c)(Object(H.d)(n.t0));case 13:case"end":return n.stop()}}),K,null,[[0,9]])}function ie(e){var t,n,r,a,c;return U.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,r=t.password,i.prev=1,i.next=4,D.a.signInWithEmailAndPassword(n,r);case 4:return a=i.sent,c=a.user,i.next=8,ae(c);case 8:i.next=15;break;case 10:return i.prev=10,i.t0=i.catch(1),alert("Please use correct username or password"),i.next=15,Object(k.c)(Object(H.d)(i.t0));case 15:case"end":return i.stop()}}),Y,null,[[1,10]])}function ue(){var e;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(D.e)();case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,ae(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(k.c)(Object(H.d)(t.t0));case 14:case"end":return t.stop()}}),J,null,[[0,10]])}function oe(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.signOut();case 3:return e.next=5,Object(k.c)(Object(H.h)());case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(H.f)(e.t0);case 11:case"end":return e.stop()}}),B,null,[[0,7]])}function se(e){var t,n,r,a,c,i;return U.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.payload,n=t.displayName,r=t.email,a=t.password,u.prev=1,u.next=4,D.a.createUserWithEmailAndPassword(r,a);case 4:return c=u.sent,i=c.user,u.next=8,Object(k.c)(Object(H.k)({user:i,additionalData:{displayName:n}}));case 8:u.next=15;break;case 10:return u.prev=10,u.t0=u.catch(1),alert(u.t0),u.next=15,Object(k.c)(Object(H.i)(u.t0));case 15:case"end":return u.stop()}}),W,null,[[1,10]])}function le(e){var t,n,r;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,n=t.user,r=t.additionalData,a.next=3,ae(n,r);case 3:case"end":return a.stop()}}),V)}function de(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.d)(m.a.GOOGLE_SIGN_IN_START,ce);case 2:case"end":return e.stop()}}),q)}function pe(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.d)(m.a.EMAIL_SIGN_IN_START,ie);case 2:case"end":return e.stop()}}),X)}function fe(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.d)(m.a.CHECK_USER_SESSION,ue);case 2:case"end":return e.stop()}}),$)}function me(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.d)(m.a.SIGN_OUT_START,oe);case 2:case"end":return e.stop()}}),ee)}function be(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.d)(m.a.SIGN_UP_START,se);case 2:case"end":return e.stop()}}),te)}function Ee(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.d)(m.a.SIGN_UP_SUCCESS,le);case 2:case"end":return e.stop()}}),ne)}function Oe(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([Object(k.b)(de),Object(k.b)(pe),Object(k.b)(fe),Object(k.b)(me),Object(k.b)(be),Object(k.b)(Ee)]);case 2:case"end":return e.stop()}}),re)}var ge=n(33),je=U.a.mark(ye),he=U.a.mark(Se),ve=U.a.mark(Ne);function ye(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.c)(Object(ge.b)());case 2:case"end":return e.stop()}}),je)}function Se(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.d)(m.a.SIGN_OUT_SUCCESS,ye);case 2:case"end":return e.stop()}}),he)}function Ne(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([Object(k.b)(Se)]);case 2:case"end":return e.stop()}}),ve)}var xe=U.a.mark(Ce);function Ce(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([Object(k.b)(F),Object(k.b)(Oe),Object(k.b)(Ne)]);case 2:case"end":return e.stop()}}),xe)}var Ie=Object(T.a)(),_e=[Ie];var we=Object(s.e)(L,s.a.apply(void 0,_e));Ie.run(Ce);var Le=Object(l.b)(we),Te=n(60),Me=(n(85),n(12)),Ue=n(14),ke=n(35);function De(){return(De=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ae(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ge=a.a.createElement("title",null,"Homepage"),Re=a.a.createElement("defs",null,a.a.createElement("image",{width:393,height:489,id:"img1",href:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDg5IDQ4OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg5IDQ4OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTQ0MC4xLDQyMi43bC0yOC0zMTUuM2MtMC42LTctNi41LTEyLjMtMTMuNC0xMi4zaC01Ny42QzM0MC4zLDQyLjUsMjk3LjMsMCwyNDQuNSwwcy05NS44LDQyLjUtOTYuNiw5NS4xSDkwLjMNCgkJYy03LDAtMTIuOCw1LjMtMTMuNCwxMi4zbC0yOCwzMTUuM2MwLDAuNC0wLjEsMC44LTAuMSwxLjJjMCwzNS45LDMyLjksNjUuMSw3My40LDY1LjFoMjQ0LjZjNDAuNSwwLDczLjQtMjkuMiw3My40LTY1LjENCgkJQzQ0MC4yLDQyMy41LDQ0MC4yLDQyMy4xLDQ0MC4xLDQyMi43eiBNMjQ0LjUsMjdjMzcuOSwwLDY4LjgsMzAuNCw2OS42LDY4LjFIMTc0LjlDMTc1LjcsNTcuNCwyMDYuNiwyNywyNDQuNSwyN3ogTTM2Ni44LDQ2Mg0KCQlIMTIyLjJjLTI1LjQsMC00Ni0xNi44LTQ2LjQtMzcuNWwyNi44LTMwMi4zaDQ1LjJ2NDFjMCw3LjUsNiwxMy41LDEzLjUsMTMuNXMxMy41LTYsMTMuNS0xMy41di00MWgxMzkuM3Y0MQ0KCQljMCw3LjUsNiwxMy41LDEzLjUsMTMuNXMxMy41LTYsMTMuNS0xMy41di00MWg0NS4ybDI2LjksMzAyLjNDNDEyLjgsNDQ1LjIsMzkyLjEsNDYyLDM2Ni44LDQ2MnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"})),Pe=a.a.createElement("style",null,"\n\t\ttspan { white-space:pre }\n\t"),ze=a.a.createElement("g",{id:"header"},a.a.createElement("g",{id:"icons"},a.a.createElement("use",{id:"shopping-bag (1)",href:"#img1",transform:"matrix(0.041,0,0,0.041,0,0)"}))),Qe=function(e){var t=e.svgRef,n=e.title,r=Ae(e,["svgRef","title"]);return a.a.createElement("svg",De({baseProfile:"tiny-ps",viewBox:"0 0 16 20",width:15,height:19,ref:t},r),void 0===n?Ge:n?a.a.createElement("title",null,n):null,Re,Pe,ze)},Fe=a.a.forwardRef((function(e,t){return a.a.createElement(Qe,De({svgRef:t},e))})),He=(n.p,n(86),Object(Ue.b)({itemCount:ke.b})),Ze=Object(o.b)(He,(function(e){return{toggleCartHidden:function(){return e(Object(ge.e)())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return a.a.createElement("div",{className:"cart-icon",onClick:t},a.a.createElement(Fe,{className:"shopping-icon"}),a.a.createElement("span",{className:"item-count"},n))})),Ke=n(50),Ye=(n(88),Object(r.memo)((function(e){var t=e.item,n=t.imageUrl,r=t.name,c=t.price,i=t.quantity;return a.a.createElement("div",{className:"cart-item"},a.a.createElement("img",{src:n,alt:"cart-item"}),a.a.createElement("div",{className:"item-details"},a.a.createElement("span",{className:"name"},r),a.a.createElement("span",{className:"price"},i," X $",c)))}))),Je=(n(89),Object(Ue.b)({cartItems:ke.a})),Be=Object(Me.g)(Object(o.b)(Je)((function(e){var t=e.cartItems,n=e.history,r=e.dispatch;return a.a.createElement("div",{className:"cart-dropdown"},a.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return a.a.createElement(Ye,{key:e.id,item:e})})):a.a.createElement("span",{className:"empty-message"},"Your cart is empty")),a.a.createElement(Ke.a,{onClick:function(){n.push("/checkout"),r(Object(ge.e)())}},"Checkout"))})));function We(){return(We=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ve(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var qe=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("path",{d:"M256.661,257.323c-135.275,0-245.333,110.059-245.333,245.333c0,5.888,4.779,10.667,10.667,10.667 s10.667-4.779,10.667-10.667c0-123.52,100.48-224,224-224s224,100.48,224,224c0,5.888,4.779,10.667,10.667,10.667 c5.888,0,10.667-4.779,10.667-10.667C501.995,367.36,391.936,257.323,256.661,257.323z"}))),Xe=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("path",{d:"M256.661,0c-64.683,0-117.333,52.629-117.333,117.333s52.651,117.333,117.333,117.333s117.333-52.629,117.333-117.333 S321.344,0,256.661,0z M256.661,213.333c-52.928,0-96-43.072-96-96s43.072-96,96-96c52.928,0,96,43.072,96,96 S309.589,213.333,256.661,213.333z"}))),$e=a.a.createElement("g",null),et=a.a.createElement("g",null),tt=a.a.createElement("g",null),nt=a.a.createElement("g",null),rt=a.a.createElement("g",null),at=a.a.createElement("g",null),ct=a.a.createElement("g",null),it=a.a.createElement("g",null),ut=a.a.createElement("g",null),ot=a.a.createElement("g",null),st=a.a.createElement("g",null),lt=a.a.createElement("g",null),dt=a.a.createElement("g",null),pt=a.a.createElement("g",null),ft=a.a.createElement("g",null),mt=function(e){var t=e.svgRef,n=e.title,r=Ve(e,["svgRef","title"]);return a.a.createElement("svg",We({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 513.323 513.323",style:{enableBackground:"new 0 0 513.323 513.323"},xmlSpace:"preserve",ref:t},r),n?a.a.createElement("title",null,n):null,qe,Xe,$e,et,tt,nt,rt,at,ct,it,ut,ot,st,lt,dt,pt,ft)},bt=a.a.forwardRef((function(e,t){return a.a.createElement(mt,We({svgRef:t},e))})),Et=(n.p,n(91),function(){return a.a.createElement(bt,{className:"userIcon"})}),Ot=Object(Ue.a)([function(e){return e.user}],(function(e){return e.currentUser})),gt=n(15),jt=n(16);function ht(){var e=Object(gt.a)(["\n      margin-left: 8px;\n      text-transform: uppercase;\n      @media (max-width: 600px) {\n          display: none;\n        }\n"]);return ht=function(){return e},e}function vt(){var e=Object(gt.a)(["\n      padding: 10px 15px;\n      cursor: pointer;\n      display: flex;\n      align-items: center;\n      transition: border-bottom 1s;\n      @media (max-width: 1280px) {\n          padding: 5px 8px;\n      }\n      "]);return vt=function(){return e},e}function yt(){var e=Object(gt.a)(["\n      padding: 10px 15px;\n      cursor: pointer;\n      display: flex;\n      align-items: center;\n      transition: border-bottom 1s;\n      &:hover{\n            border-bottom: 1px solid black;\n      }\n      @media (max-width: 1280px) {\n          padding: 5px 8px;\n      }\n      @media (max-width: 768px) {\n            display: none;\n      }\n"]);return yt=function(){return e},e}function St(){var e=Object(gt.a)(["\n    height: 100%;\n    display: flex;\n    align-items: center;\n    \n"]);return St=function(){return e},e}function Nt(){var e=Object(gt.a)(['\n      width: 40px;\n      height: 40px;\n      background-color: #000000;\n      font-size: 16px;\n      letter-spacing: 3px;\n      line-height: 32px;\n      color: #ffffff;\n      font-weight: 700;\n      font-family: "Montserrat", sans-serif;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin-right: 40px;\n      @media (max-width: 960px) {\n            margin-right: 20px;\n      }\n']);return Nt=function(){return e},e}function xt(){var e=Object(gt.a)(["\n    height: 100%;\n    display: flex;\n    align-items: center;\n"]);return xt=function(){return e},e}function Ct(){var e=Object(gt.a)(['\n  font-family: "Montserrat", sans-serif;\n  font-weight: 500;    \n  font-size: 12px;    \n  padding: 60px 60px;\n  background-color: transparent;\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  z-index: 20;    \n      \n  @media (max-width: 1280px) {\n    padding: 50px 50px;\n    margin-bottom: 20px;\n}\n  @media (max-width: 960px) {\n    padding: 30px 30px;\n    margin-bottom: 20px;\n}\n      \n  @media (max-width: 600px) {\n    padding: 20px 20px;\n    margin-bottom: 10px;\n}\n']);return Ct=function(){return e},e}var It=jt.a.div(Ct()),_t=jt.a.div(xt()),wt=Object(jt.a)(u.b)(Nt()),Lt=jt.a.div(St()),Tt=Object(jt.a)(u.b)(yt()),Mt=Object(jt.a)(u.b)(vt()),Ut=jt.a.span(ht()),kt=Object(Ue.b)({currentUser:Ot,hidden:ke.d}),Dt=Object(o.b)(kt,(function(e){return{signOutStart:function(){return e(Object(H.g)())}}}))((function(e){var t=e.currentUser,n=e.hidden,r=e.signOutStart;return a.a.createElement(It,null,a.a.createElement(_t,null,a.a.createElement(wt,{to:"/"},"C"),a.a.createElement(Tt,{to:"/shop/mens"},"MAN"),a.a.createElement(Tt,{to:"/shop/womens"},"WOMAN"),a.a.createElement(Tt,{to:"/shop/hats"},"HAT"),a.a.createElement(Tt,{to:"/shop/jackets"},"JACKET"),a.a.createElement(Tt,{to:"/shop/sneakers"},"FOOTWEAR")),a.a.createElement(Lt,null,a.a.createElement(Ze,null),a.a.createElement(Mt,{to:"/sign-in"},a.a.createElement(Et,null),a.a.createElement(Ut,null,t?t.displayName.split(" ")[0]:"ANONYMOUS")),t?a.a.createElement(Mt,{as:"div",onClick:r},"LOG OUT"):a.a.createElement(Mt,{to:"/sign-in"},"LOG IN")),n?null:a.a.createElement(Be,null))})),At=n(52),Gt=n(64),Rt=n(65),Pt=n(68),zt=n(66);function Qt(){var e=Object(gt.a)(["\n  font-size: 28px;\n  color: #2f8e89;\n"]);return Qt=function(){return e},e}function Ft(){var e=Object(gt.a)(["\n  display: inline-block;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 40vh;\n  height: 40vh;\n"]);return Ft=function(){return e},e}function Ht(){var e=Object(gt.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return Ht=function(){return e},e}var Zt=jt.a.div(Ht()),Kt=jt.a.div(Ft(),(function(e){var t=e.imageUrl;return"url(".concat(t,")")})),Yt=jt.a.h2(Qt()),Jt=function(e){Object(Pt.a)(n,e);var t=Object(zt.a)(n);function n(e){var r;return Object(Gt.a)(this,n),(r=t.call(this,e)).state={hasErrored:!1},r}return Object(Rt.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e)}},{key:"render",value:function(){return this.state.hasErrored?a.a.createElement(Zt,null,a.a.createElement(Kt,{imageUrl:"https://i.imgur.com/FOeYt4E.png"}),a.a.createElement(Yt,null," Oops!! The Page was not found!")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasErrored:!0}}}]),n}(a.a.Component),Bt=(n(92),n(93),function(){return a.a.createElement("div",{className:"footer"},a.a.createElement("div",{className:"footer_top"},a.a.createElement("div",{className:"footer_logo"},"C"),a.a.createElement("div",{className:"footer_copyright"},"All rights reserved \xa9 Mostafa Rafid")),a.a.createElement("hr",{className:"footer_divider"}),a.a.createElement("div",{className:"footer_bottom"},a.a.createElement("p",{className:"footer_quote"},"\"Don't be into trends. Don't make fashion own you, but you decide what you are, what you want to express by the way you dress and the way to live.\""),a.a.createElement("p",{className:"footer_quote_author"},"\u2014Gianni Versace")))}),Wt=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,143))})),Vt=Object(r.lazy)((function(){return n.e(9).then(n.bind(null,142))})),qt=Object(r.lazy)((function(){return Promise.all([n.e(3),n.e(8)]).then(n.bind(null,145))})),Xt=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,144))})),$t=Object(Ue.b)({currentUser:Ot}),en=Object(o.b)($t,(function(e){return{checkUserSession:function(){return e(Object(H.a)())}}}))((function(e){var t=e.currentUser,n=e.checkUserSession;return Object(r.useEffect)((function(){n()}),[n]),a.a.createElement(a.a.Fragment,null,a.a.createElement(Dt,null),a.a.createElement(Me.d,null,a.a.createElement(Jt,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(At.a,null)},a.a.createElement(Me.b,{exact:!0,path:"/",component:Wt}),a.a.createElement(Me.b,{path:"/shop",component:Vt}),a.a.createElement(Me.b,{exact:!0,path:"/checkout",component:qt}),a.a.createElement(Me.b,{exact:!0,path:"/sign-in",render:function(){return t?a.a.createElement(Me.a,{to:"/"}):a.a.createElement(Xt,null)}})))),a.a.createElement(Bt,null))}));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(o.a,{store:we},a.a.createElement(u.a,null,a.a.createElement(Te.a,{persistor:Le},a.a.createElement(en,null))))),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.acddf3fd.chunk.js.map