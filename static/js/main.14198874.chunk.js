(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var n=s(0),i=s(1),a=s(21),c=s.n(a),r=s(2),o=s(8),l=s(3),j=[{name:"main",toPath:"/",content:"Main page",key:"0000"},{name:"users",toPath:"/users",content:"Users page",key:"0001"},{name:"tags",toPath:"/tags",content:"Tags page",key:"0010"},{name:"profile",toPath:"/profile",content:"Profile",key:"0011"}];var u=function(e){var t=e.itemInfo,s=t.name,i=t.toPath,a=t.content,c=e.switchContentBurger;return Object(n.jsx)("li",{className:"nav__item",children:Object(n.jsx)(o.b,{onClick:c,className:"nav__btn",name:s,to:i,children:a})})};var b=function(e){var t=e.navListClassName,s=e.switchContentBurger,i=e.navObj.map((function(e){return Object(n.jsx)(u,{itemInfo:e,switchContentBurger:s},e.key+Math.random())}));return Object(n.jsx)("ul",{className:t,children:i})};var h=function(e){var t=e.openNavigation,s=e.activeBurger,i=e.switchContentBurger,a=s?"nav__burger-icon burger-icon__toggle":"nav__burger-icon",c=s?"nav__list":"nav__list toggle-d";return Object(n.jsxs)("nav",{className:"header__nav",children:[Object(n.jsx)("button",{className:"nav__burger",onClick:t,children:Object(n.jsx)("svg",{className:a,"aria-hidden":"true",width:"20",height:"20",viewBox:"0 0 18 18",children:Object(n.jsx)("path",{d:"M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2zM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2zm16-7H1v4h16V6z"})})}),Object(n.jsx)(b,{navObj:j,switchContentBurger:i,navListClassName:c})]})};s(33);var d=function(e){var t=e.isHeader,s=t?"wrap__search w-35":"wrap__search w-10",i=t?"search":"content__search",a=t?"search-label":"content__search-label";return Object(n.jsxs)("div",{className:s,children:[Object(n.jsx)("label",{className:a}),Object(n.jsx)("input",{className:i,type:"text",readOnly:!0})]})};var m=function(e){var t=e.text,s=e.isSignIn,i=e.method,a=s?"btn__sign-in":"btn__ask";return a=e.isOut?"btn__sign-out":a,Object(n.jsx)("button",{className:a,onClick:i,children:t})};var _=function(e){var t=e.getCookie,s=Object(i.useState)("23423"),a=Object(r.a)(s,2),c=a[0],o=a[1];function l(e){c.length<=3||("keypress"===e.type&&"Enter"===e.key?(document.cookie="userId=".concat(c),t()):"click"===e.type&&(document.cookie="userId=".concat(c),t(c)))}return Object(n.jsxs)("div",{className:"wrap__search sign-in",children:[Object(n.jsx)("input",{className:"search",type:"text",value:c,onChange:function(e){o(e.target.value)},onKeyPress:l}),Object(n.jsx)(m,{text:"Sign In",method:l,isSignIn:!0})]})};var p=function(e){var t=e.getCookie;return Object(n.jsx)(m,{text:"Sign Out",method:function(){document.cookie="userId=0;",t("0000")},isOut:!0})};var v=function(e){if(!e.posts)return"";var t=e.posts,s=t.display_name,i=t.profile_image,a=e.switchContent,c=e.getCookie;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(p,{getCookie:c}),Object(n.jsx)(o.b,{to:"/profile",name:"profile",onClick:a,children:Object(n.jsxs)("div",{className:"header__user",children:[Object(n.jsx)("img",{src:i,alt:"user",className:"header__photo"}),Object(n.jsx)("p",{className:"header__login",children:s})]})})]})};s(34);var f=function(e){var t,s=e.posts,i=e.chooseContent,a=e.openNavigation,c=e.activeBurger,r=e.switchContent,o=e.switchContentBurger,l=e.getCookie;return t=void 0!==s.posts&&s.posts.length?Object(n.jsx)(v,{getCookie:l,posts:s.posts[0]}):Object(n.jsx)(_,{getCookie:l,switchContent:r}),Object(n.jsxs)("header",{className:"header",children:[Object(n.jsxs)("button",{className:"header__logo",children:[Object(n.jsx)("img",{src:"img/favicon.svg",alt:"stock questions",className:"header__logo-icon"}),Object(n.jsx)("span",{className:"header__logo-text",children:"stock questions"})]}),Object(n.jsx)(d,{isHeader:!0}),t,Object(n.jsx)(h,{chooseContent:i,openNavigation:a,activeBurger:c,switchContentBurger:o})]})},O=[{name:"main",toPath:"/",content:"Main page",key:"0000"},{name:"users",toPath:"/users",content:"Users page",key:"0001"},{name:"tags",toPath:"/tags",content:"Tags page",key:"0010"}];var x=function(e){var t=e.item,s=t.name,i=t.toPath,a=t.content,c=e.itemClassName,r=e.switchContent;return Object(n.jsx)("li",{className:c,children:Object(n.jsx)(o.b,{onClick:r,className:"main__nav-link",name:s,to:i,children:a})})};s(35);var g=function(e){var t=e.switchContent,s=e.choosenContent,i=O.map((function(e){var i=e.name===s?"main__nav-item main__nav-item_active":"main__nav-item";return Object(n.jsx)(x,{item:e,itemClassName:i,switchContent:t},e.key)}));return Object(n.jsx)("ul",{className:"main__nav",children:i})};var N=function(e){var t=e.tags.map((function(e){return Object(n.jsx)("button",{className:"question__tag",children:e},e)}));return Object(n.jsx)("div",{children:t})};var k=function(e){var t=e.borderTop,s=e.titleNone,i=e.choosePost,a=e.post,c=e.post,r=c.answer_count,l=c.score,j=c.view_count,u=c.body,b=c.title,h=c.tags,d=c.owner,m=t?"list__question b-top":"list__question",_=s?"question__title d-none":"question__title",p=s?"question__text_full":"question__text";return Object(n.jsxs)("div",{className:m,children:[Object(n.jsxs)("div",{className:"question__rating",children:[Object(n.jsx)("p",{className:"rating__number",children:l}),Object(n.jsx)("p",{className:"rating__text",children:"votes"}),Object(n.jsx)("p",{className:"rating__number",children:r}),Object(n.jsx)("p",{className:"rating__text",children:"answers"}),Object(n.jsxs)("p",{className:"rating__text",children:[j," views"]})]}),Object(n.jsxs)("div",{className:"question__describe",children:[Object(n.jsx)(o.b,{className:_,name:"post",to:"/post",onClick:function(){return i(a)},children:Object(n.jsx)("h3",{className:_,children:b})}),Object(n.jsx)("div",{className:p,dangerouslySetInnerHTML:{__html:u}}),Object(n.jsxs)("div",{className:"question__tags",children:[Object(n.jsx)(N,{tags:h}),Object(n.jsx)("div",{className:"question__infor",children:Object(n.jsx)("p",{className:"question__author",children:d.display_name})})]})]})]})};s(36);var y=function(e){var t=e.filterContent,s=e.method,i=t.map((function(e){return e.active?Object(n.jsx)("button",{className:"filter__btn filter__btn-active",onClick:function(){return s(e.path)},children:e.btn},e.key):Object(n.jsx)("button",{className:"filter__btn",onClick:function(){return s(e.path)},children:e.btn},e.key)}));return Object(n.jsx)("div",{className:"content__filter",children:i})};var w=function(e){var t=e.title,s=e.isAnswer?"":Object(n.jsx)(m,{text:"Ask Question"});return Object(n.jsxs)("div",{className:"content__header",children:[Object(n.jsx)("h2",{className:"title",children:t}),s]})};s(37);var C=function(e){var t=e.choosePost,s=Object(i.useState)({posts:[],isLoading:!1,error:null}),a=Object(r.a)(s,2),c=a[0],o=a[1],l=Object(i.useState)("https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow&filter=!LYA)NnjV0isg-d2(OzM7NX&key=9TT0ys3bQ*GHxowl*HitOg(("),j=Object(r.a)(l,2),u=j[0],b=j[1],h=Object(i.useState)([{btn:"Activity",key:"Activity_1",path:"activity",active:!0},{btn:"Votes",key:"Votes_2",path:"votes",active:!1},{btn:"Creation",key:"Creation_3",path:"creation",active:!1}]),d=Object(r.a)(h,2),m=d[0],_=d[1];if(Object(i.useEffect)((function(){fetch(u).then((function(e){return e.json()})).then((function(e){o({posts:e.items,isLoading:!0,error:c.error})}),(function(e){o({posts:c.items,isLoading:!0,error:e})}))}),[u]),!c.isLoading&&c.length)return"load";var p=c.posts.map((function(e){return Object(n.jsx)(k,{post:e,choosePost:t},e.question_id)}));return Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)(w,{title:"All Questions"}),Object(n.jsx)("div",{className:"filter__block flex-end",children:Object(n.jsx)(y,{filterContent:m,method:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"activity";b("https://api.stackexchange.com/2.2/questions?order=desc&sort=".concat(e,"&site=stackoverflow&filter=!LYA)NnjV0isg-d2(OzM7NX&key=9TT0ys3bQ*GHxowl*HitOg(("));var t=[!0,!1,!1];switch(e){case"activity":t=[!0,!1,!1];break;case"votes":t=[!1,!0,!1];break;case"creation":t=[!1,!1,!0];break;default:console.log("error in questions, changeFilter function")}_([{btn:"Activity",key:"Activity_1",path:"activity",active:t[0]},{btn:"Votes",key:"Votes_2",path:"votes",active:t[1]},{btn:"Creation",key:"Creation_3",path:"creation",active:t[2]}])}})}),Object(n.jsx)("div",{className:"content__list",children:p})]})},q=y;var H=function(e){var t=e.user,s=t.display_name,i=t.location,a=t.reputation,c=t.profile_image;return Object(n.jsxs)("div",{className:"user",children:[Object(n.jsx)("img",{src:c,alt:"",className:"user__icon"}),Object(n.jsxs)("div",{className:"user__describe",children:[Object(n.jsx)("p",{className:"user__title",children:s}),Object(n.jsx)("p",{className:"user__info",children:i}),Object(n.jsx)("p",{className:"user__number",children:a})]})]})};s(38);var T=function(){var e=Object(i.useState)({posts:[],isLoading:!1,error:null}),t=Object(r.a)(e,2),s=t[0],a=t[1],c=Object(i.useState)("https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&site=stackoverflow&filter=!--C9*_b0TpxT&key=9TT0ys3bQ*GHxowl*HitOg(("),o=Object(r.a)(c,2),l=o[0],j=o[1],u=Object(i.useState)([{btn:"Reputation",key:"Activity_1",path:"reputation",active:!0},{btn:"Creation",key:"Votes_2",path:"creation",active:!1},{btn:"Name",key:"Creation_3",path:"name",active:!1}]),b=Object(r.a)(u,2),h=b[0],m=b[1];Object(i.useEffect)((function(){fetch(l).then((function(e){return e.json()})).then((function(e){a({posts:e.items,isLoading:!0,error:s.error})}),(function(e){a({posts:s.items,isLoading:!0,error:e})}))}),[l]);var _="";return s.isLoading&&s.posts?_=s.posts.map((function(e){return Object(n.jsx)(H,{user:e},e.account_id)})):console.log("Not info"),Object(n.jsxs)("div",{className:"users__wrap content",children:[Object(n.jsx)("h2",{className:"title",children:"Users"}),Object(n.jsxs)("div",{className:"filter__block space-between",children:[Object(n.jsx)(d,{}),Object(n.jsx)(q,{filterContent:h,method:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"reputaion";j("https://api.stackexchange.com/2.2/users?order=desc&sort=".concat(e,"&site=stackoverflow&filter=!--C9*_b0TpxT&key=9TT0ys3bQ*GHxowl*HitOg(("));var t=[!0,!1,!1];switch(e){case"reputaion":t=[!0,!1,!1,!1];break;case"creation":t=[!1,!0,!1,!1];break;case"name":t=[!1,!1,!0,!1];break;default:console.log("error in questions, changeFilter function")}m([{btn:"Reputation",key:"Activity_1",path:"reputation",active:t[0]},{btn:"Creation",key:"Votes_2",path:"creation",active:t[1]},{btn:"Name",key:"Creation_3",path:"name",active:t[2]}])}})]}),Object(n.jsx)("div",{className:"users__list",children:_})]})};var L=function(e){var t=e.tag,s=t.count,i=t.name;return Object(n.jsxs)("div",{className:"tag",children:[Object(n.jsx)("p",{className:"tag__title",children:i}),Object(n.jsxs)("p",{className:"tag__describe",children:["Users can find special information by ",i," tag"]}),Object(n.jsxs)("p",{className:"tag__amount",children:[s," questions"]})]})};s(39);var S=function(){var e=Object(i.useState)({posts:[],isLoading:!1,error:null}),t=Object(r.a)(e,2),s=t[0],a=t[1],c=Object(i.useState)("https://api.stackexchange.com/2.2/tags?order=desc&sort=popular&site=stackoverflow&key=9TT0ys3bQ*GHxowl*HitOg(("),o=Object(r.a)(c,2),l=o[0],j=o[1],u=Object(i.useState)([{btn:"Popular",key:"Activity_1",path:"popular",active:!0},{btn:"Activity",key:"Votes_2",path:"activity",active:!1},{btn:"Name",key:"Creation_3",path:"name",active:!1}]),b=Object(r.a)(u,2),h=b[0],m=b[1];if(Object(i.useEffect)((function(){fetch(l).then((function(e){return e.json()})).then((function(e){a({posts:e.items,isLoading:!0,error:s.error})}),(function(e){a({posts:s.items,isLoading:!0,error:e})}))}),[l]),!s.isLoading&&s.length)return"load";var _=s.posts.map((function(e){return Object(n.jsx)(L,{tag:e},e.count+e.name)}));return Object(n.jsxs)("div",{className:"tags__wrap content",children:[Object(n.jsx)("h2",{className:"title",children:"Tags"}),Object(n.jsxs)("div",{className:"filter__block space-between",children:[Object(n.jsx)(d,{}),Object(n.jsx)(q,{filterContent:h,method:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"popular";j("https://api.stackexchange.com/2.2/tags?order=desc&sort=".concat(e,"&site=stackoverflow&key=9TT0ys3bQ*GHxowl*HitOg(("));var t=[!0,!1,!1];switch(e){case"popular":t=[!0,!1,!1];break;case"activity":t=[!1,!0,!1];break;case"name":t=[!1,!1,!0];break;default:console.log("error in questions, changeFilter function")}m([{btn:"Popular",key:"Activity_1",path:"popular",active:t[0]},{btn:"Activity",key:"Votes_2",path:"activity",active:t[1]},{btn:"Name",key:"Creation_3",path:"name",active:t[2]}])}})]}),Object(n.jsx)("div",{className:"tags__list",children:_})]})};function P(e){var t=e.profileNav,s=t.title,i=t.active,a=t.id,c=e.chooseContent,r=i?"nav__link-profile nav__link-profile_active":"nav__link-profile";return Object(n.jsx)("li",{className:"nav__item-profile",children:Object(n.jsx)("button",{onClick:c,"data-id":a,className:r,children:s})})}var A=function(e){var t=e.chooseContent,s=e.profileNav,i=e.navListClassName,a=s.map((function(e,i){return Object(n.jsx)(P,{profileNav:s[i],chooseContent:t},e.id)}));return Object(n.jsx)("ul",{className:i,children:a})};var B=function(e){var t=e.chooseContent,s=e.profileNav,i=e.activeBurger,a=e.openNavigation,c=i?"nav__burger-icon burger-icon__toggle":"nav__burger-icon",r=i?"profile__nav-list":"profile__nav-list toggle-nav";return Object(n.jsxs)("nav",{className:"profile__nav",children:[Object(n.jsx)("button",{className:"nav__burger toggle",onClick:a,children:Object(n.jsx)("svg",{className:c,"aria-hidden":"true",width:"20",height:"20",viewBox:"0 0 18 18",children:Object(n.jsx)("path",{d:"M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2zM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2zm16-7H1v4h16V6z"})})}),Object(n.jsx)(A,{navListClassName:r,profileNav:s,chooseContent:t})]})};var I=function(e){var t=e.choosenContent,s=t.title,i=t.img,a=t.alt,c=i?Object(n.jsx)("img",{src:i,alt:a,className:"profile__info-img"}):null;return Object(n.jsxs)("div",{className:"profile__info",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{className:"profile__title",children:s}),Object(n.jsxs)("div",{className:"profile__info-list",children:[Object(n.jsx)("p",{className:"info-list__item",children:"1 lorem lorem lorem lorem"}),Object(n.jsx)("p",{className:"info-list__item",children:"1 lorem lorem lorem lorem"}),Object(n.jsx)("p",{className:"info-list__item",children:"1 lorem lorem lorem lorem"}),Object(n.jsx)("p",{className:"info-list__item",children:"1 lorem lorem lorem lorem"}),Object(n.jsx)("p",{className:"info-list__item",children:"1 lorem lorem lorem lorem"})]})]}),c]})};var V=function(e){if(!e.posts)return"";var t=e.posts,s=t.about_me,i=t.answer_count,a=t.display_name,c=t.link,r=t.location,o=t.profile_image,l=t.question_count,j=t.reputation;return Object(n.jsxs)("div",{className:"profile__person",children:[Object(n.jsx)("img",{src:o,alt:"profile avatar",className:"profile__icon"}),Object(n.jsxs)("div",{className:"profile__description",children:[Object(n.jsx)("p",{className:"profile__name",children:a}),Object(n.jsx)("p",{className:"profile__city",children:r}),Object(n.jsx)("div",{dangerouslySetInnerHTML:{__html:s}}),Object(n.jsx)("a",{className:"profile__link",href:c,children:"Link to stackoverflow profile"}),Object(n.jsxs)("p",{className:"profile__text",children:[Object(n.jsx)("span",{className:"profile__text_bold",children:"Reputation:"})," ",j]}),Object(n.jsxs)("p",{className:"profile__text",children:[Object(n.jsx)("span",{className:"profile__text_bold",children:"Answer count:"})," ",i]}),Object(n.jsxs)("p",{className:"profile__text",children:[Object(n.jsx)("span",{className:"profile__text_bold",children:"Question count:"})," ",l]})]})]})},M={history:{title:"History of reputation changes",img:"./img/profile/chart.png",alt:"chart history of reputation changes"},posts:{title:"History of posts",img:null,alt:"chart history of reputation changes"},questions:{title:"Reputation of questions",img:"./img/profile/question.jpg",alt:"part interface"},answers:{title:"Comments",img:"./img/profile/answer.jpeg",alt:"part interface"},favorites:{title:"History of favorites",img:null},notifications:{title:"History of reputation notifications",img:null},privileges:{title:"Privileges",img:null},comments:{title:"Comments",img:null}},Q=[{title:"history of reputation",active:!0,id:"history"},{title:"posts",active:!1,id:"posts"},{title:"questions",active:!1,id:"questions"},{title:"answers",active:!1,id:"answers"},{title:"favorites",active:!1,id:"favorites"},{title:"notifications",active:!1,id:"notifications"},{title:"privileges",active:!1,id:"privileges"},{title:"comments",active:!1,id:"comments"}],z=s(19),G=s(13),E=s(18);function F(e,t,s){var n=e.findIndex((function(e){return e.id===t})),i=!e[n][s],a=Object(E.a)(Object(E.a)({},e[n]),{},Object(G.a)({},s,i));return[].concat(Object(z.a)(e.slice(0,n)),[a],Object(z.a)(e.slice(n+1)))}s(40);var R=function(e){var t=Object(i.useState)(Q),s=Object(r.a)(t,2),a=s[0],c=s[1],o=Object(i.useState)(M.history),l=Object(r.a)(o,2),j=l[0],u=l[1],b=Object(i.useState)(!1),h=Object(r.a)(b,2),d=h[0],m=h[1];function _(){m(!d)}var p=e.posts,v=!!p.posts&&p.posts[0];return p.posts&&p.posts.length?Object(n.jsxs)("div",{className:"profile",children:[Object(n.jsx)(V,{posts:v}),Object(n.jsx)(B,{chooseContent:function(e){_(),e.preventDefault();var t=e.target.dataset.id;u(M[t]);var s=a.find((function(e){return e.active})),n=F(a,s.id,"active");c(n),c(F(n,t,"active"))},profileNav:a,openNavigation:_,activeBurger:d}),Object(n.jsx)(I,{choosenContent:j})]}):" "};var U=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{className:"answers__title",children:"Your Answer"}),Object(n.jsx)("textarea",{className:"answer__write",cols:"30",rows:"10",readOnly:!0}),Object(n.jsx)(m,{text:"Write Answer"})]})};var X=function(e){var t=e.borderTop,s=e.answer,i=s.body,a=s.owner,c=s.score,r=t?"list__question b-top":"list__question";return Object(n.jsxs)("div",{className:r,children:[Object(n.jsxs)("div",{className:"question__rating",children:[Object(n.jsx)("p",{className:"rating__number",children:c}),Object(n.jsx)("p",{className:"rating__text",children:"votes"})]}),Object(n.jsxs)("div",{className:"question__describe",children:[Object(n.jsx)("div",{className:"question__text",dangerouslySetInnerHTML:{__html:i}}),Object(n.jsx)("div",{className:"question__tags",children:Object(n.jsx)("div",{className:"question__infor",children:Object(n.jsx)("p",{className:"question__author",children:a.display_name})})})]})]})};s(41);var Y=function(e){var t,s=e.post,i=e.answer_count,a=e.post.answers;return a&&(t=a.map((function(e){return Object(n.jsx)(X,{post:s,answer:e},e.answer_id)}))),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)(w,{title:s.title,isAnswer:!0}),Object(n.jsx)(k,{post:s,borderTop:!0,titleNone:!0}),Object(n.jsxs)("p",{className:"answers__amount",children:[i," answers"]}),t,Object(n.jsx)(U,{})]})};s(42);var J=function(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)("p",{className:"footer__text",children:"\xa9 Lorem ipsum dolor sit amet consectetur adipisicing elitm laboriosam ducimus quia necessitatibus aliquid maiores"})})};s(43),s(44);var Z=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),s=t[0],a=t[1],c=Object(i.useState)("main"),j=Object(r.a)(c,2),u=j[0],b=j[1],h=Object(i.useState)(),d=Object(r.a)(h,2),m=d[0],_=d[1],p=Object(i.useState)({posts:[],isLoading:!1,error:null}),v=Object(r.a)(p,2),O=v[0],x=v[1],N=document.cookie.split(";").find((function(e){return e.includes("userId")}));N&&(N=N.split("=")[1]);var k=Object(i.useState)("https://api.stackexchange.com/2.2/users/".concat(N,"?order=desc&sort=reputation&site=stackoverflow&filter=!--1nZv)ddfPX&key=9TT0ys3bQ*GHxowl*HitOg((")),y=Object(r.a)(k,2),w=y[0],q=y[1];if(Object(i.useEffect)((function(){fetch(w).then((function(e){return e.json()})).then((function(e){x({posts:e.items,isLoading:!0,error:O.error})}),(function(e){x({posts:O.items,isLoading:!0,error:e})}))}),[w]),!O.isLoading&&O.length)return"load";function H(e){b(e.target.name)}function L(){a(!s)}return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(o.a,{children:[Object(n.jsx)(f,{posts:O,switchContentBurger:function(e){L(),b(e.target.name)},openNavigation:L,switchContent:H,activeBurger:s,getCookie:function(e){q("https://api.stackexchange.com/2.2/users/".concat(e||N,"?order=desc&sort=reputation&site=stackoverflow&filter=!--1nZv)ddfPX&key=9TT0ys3bQ*GHxowl*HitOg(("))}}),Object(n.jsxs)("main",{className:"main",children:[Object(n.jsx)(g,{switchContent:H,choosenContent:u}),Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{path:"/users",children:Object(n.jsx)(T,{})}),Object(n.jsx)(l.a,{path:"/tags",children:Object(n.jsx)(S,{})}),Object(n.jsx)(l.a,{path:"/profile",children:Object(n.jsx)(R,{posts:O})}),Object(n.jsx)(l.a,{path:"/post",children:Object(n.jsx)(Y,{post:m})}),Object(n.jsx)(l.a,{path:"/",children:Object(n.jsx)(C,{choosePost:function(e){_(e)}})})]})]}),Object(n.jsx)(J,{})]})})};c.a.render(Object(n.jsx)(Z,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.14198874.chunk.js.map