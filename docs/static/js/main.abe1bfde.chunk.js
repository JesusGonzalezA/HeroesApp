(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{34:function(e,a,r){},47:function(e,a,r){"use strict";r.r(a);var t=r(0),c=r(1),s=r(21),n=r.n(s),i=r(10),o=Object(c.createContext)(),l=r(4),h="[auth] login",j="[auth] logout",u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case h:return Object(l.a)(Object(l.a)({},a.payload),{},{logged:!0});case j:return{logged:!1};default:return e}},b=r(5),d=r(2),m=r(13),p=function(e){var a=e.isAuthenticated,r=e.component,c=Object(m.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",c.location.pathname),Object(t.jsx)(d.b,Object(l.a)(Object(l.a)({},c),{},{component:function(e){return a?Object(t.jsx)(r,Object(l.a)({},e)):Object(t.jsx)(d.a,{to:"/login"})}}))},O=function(e){var a=e.history,r=Object(c.useContext)(o).dispatch;return Object(t.jsxs)("div",{className:"m-5",children:[Object(t.jsx)("h1",{children:"Login"}),Object(t.jsx)("hr",{}),Object(t.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=localStorage.getItem("lastPath")||"/";r({type:h,payload:{name:"Jesus",email:"jesus@mail.com"}}),a.replace(e)},children:"Login"})]})},v=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],x=(r(34),function(e){var a=e.id,r=e.superhero,c=e.publisher,s=e.alter_ego,n=e.first_appearance,i=e.characters;return Object(t.jsxs)(b.b,{to:"./hero/".concat(a),className:"my-card",children:[Object(t.jsx)("img",{src:"./assets/heroes/".concat(a,".jpg"),className:"img img-responsive",alt:r}),Object(t.jsx)("div",{className:"profile-name",children:r}),Object(t.jsx)("div",{className:"profile-position",children:s}),Object(t.jsx)("div",{className:"profile-overview",children:Object(t.jsx)("div",{className:"profile-overview",children:Object(t.jsx)("div",{className:"row",children:Object(t.jsxs)("div",{className:"col-ms-4",children:[Object(t.jsx)("h3",{children:c}),Object(t.jsxs)("p",{children:["Primera aparici\xf3n: ",Object(t.jsx)("br",{}),n]}),s!==i&&Object(t.jsx)("p",{children:i})]})})})})]})}),f=function(e){var a=e.publisher,r=Object(c.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e," not valid"));return v.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(t.jsx)("div",{className:"card-columns animate__animated animate__fadeInLeft",children:r.map((function(e){return Object(t.jsx)(x,Object(l.a)({},e),e.id)}))})},g=function(){return Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{children:"Marvel Screen"}),Object(t.jsx)("hr",{}),Object(t.jsx)(f,{publisher:"Marvel Comics"})]})},C=function(e){var a=e.history,r=Object(d.i)().heroId,s=Object(c.useMemo)((function(){return e=r,v.find((function(a){return a.id===e}));var e}),[r]);if(!s)return Object(t.jsx)(d.a,{to:"/"});var n=s.superhero,i=s.publisher,o=s.alter_ego,l=s.first_appearance,h=s.characters;return Object(t.jsxs)("div",{className:"row mt-5",children:[Object(t.jsx)("div",{className:"col-4  animate__animated animate__fadeInLeft",children:Object(t.jsx)("img",{src:"../assets/heroes/".concat(r,".jpg"),className:"img-thumbnail",alt:n})}),Object(t.jsxs)("div",{className:"col-8",children:[Object(t.jsx)("h3",{children:n}),Object(t.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(t.jsxs)("li",{className:"list-group-item",children:[Object(t.jsx)("b",{children:"Alter ego: "})," ",o]}),Object(t.jsxs)("li",{className:"list-group-item",children:[Object(t.jsx)("b",{children:"Publisher: "})," ",i]}),Object(t.jsxs)("li",{className:"list-group-item",children:[Object(t.jsx)("b",{children:"First appearance: "})," ",l]})]}),Object(t.jsx)("br",{}),Object(t.jsx)("h5",{children:"Characters"}),Object(t.jsx)("p",{children:h}),Object(t.jsx)("button",{className:"btn btn-outline-info",onClick:function(){a.length<=2?a.push("/"):a.goBack()},children:"Return"})]})]})},_=function(){return Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{children:"DC Screen"}),Object(t.jsx)("hr",{}),Object(t.jsx)(f,{publisher:"DC Comics"})]})},N=function(){var e=Object(c.useContext)(o),a=e.user,r=e.dispatch,s=Object(d.g)();return Object(t.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark p-3",children:[Object(t.jsx)(b.b,{className:"navbar-brand",to:"/",children:"HeroesApp"}),Object(t.jsx)("div",{className:"navbar-collapse",children:Object(t.jsxs)("div",{className:"navbar-nav",children:[Object(t.jsx)(b.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(t.jsx)(b.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(t.jsx)(b.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(t.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(t.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(t.jsxs)("span",{className:"nav-item nav-link  text-info mr-5",children:["Hi ",a.name,"!"]}),Object(t.jsx)("button",{type:"button",className:"nav-item nav-link btn btn-danger",onClick:function(){s.replace("/login"),localStorage.removeItem("lastPath"),r({type:j})},children:Object(t.jsx)("i",{className:"fa fa-sign-out","aria-hidden":"true"})})]})})]})},y=r(23),S=r.n(y),k=r(12),M=function(e){var a=e.history,r=Object(d.h)(),s=S.a.parse(r.search).q,n=void 0===s?"":s,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(c.useState)(e),r=Object(i.a)(a,2),t=r[0],s=r[1];return[t,function(e){var a=e.target;s(Object(l.a)(Object(l.a)({},t),{},Object(k.a)({},a.name,a.value)))},function(){s(e)}]}({name:n}),h=Object(i.a)(o,2),j=h[0],u=h[1],b=j.name,m=Object(c.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:v.filter((function(a){return a.superhero.trim().toLowerCase().includes(e.trim().toLowerCase())}))}(n)}),[n]);return Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{children:"Search a hero"}),Object(t.jsx)("hr",{}),Object(t.jsxs)("div",{className:"row mt-5",children:[Object(t.jsxs)("div",{className:"col-5",children:[Object(t.jsx)("h4",{children:"Form"}),Object(t.jsx)("hr",{}),Object(t.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(b))},children:[Object(t.jsx)("input",{type:"text",placeholder:"Find your hero",className:"form-control",autoComplete:"off",name:"name",value:b,onChange:u}),Object(t.jsx)("button",{type:"submit",className:"btn btn-block mt-1 btn-outline-primary",children:"Search..."})]})]}),Object(t.jsxs)("div",{className:"col-7",children:[Object(t.jsx)("h4",{children:"Results"}),Object(t.jsx)("hr",{}),""===n&&Object(t.jsx)("div",{className:"alert alert-info",children:"Search a hero"}),""!==n&&0===m.length&&Object(t.jsxs)("div",{className:"alert alert-danger",children:["There is no a hero with ",n]}),Object(t.jsx)("div",{className:"animate__animated animate__fadeInRight",children:m.map((function(e){return Object(t.jsx)(x,Object(l.a)({},e),e.id)}))})]})]})]})},D=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(N,{}),Object(t.jsx)("div",{className:"container mt-5 text-center",children:Object(t.jsxs)(d.d,{children:[Object(t.jsx)(d.b,{exact:!0,path:"/marvel",component:g}),Object(t.jsx)(d.b,{exact:!0,path:"/dc",component:_}),Object(t.jsx)(d.b,{exact:!0,path:"/hero/:heroId",component:C}),Object(t.jsx)(d.b,{exact:!0,path:"/search",component:M}),Object(t.jsx)(d.a,{to:"/marvel"})]})})]})},w=function(e){var a=e.isAuthenticated,r=e.component,c=Object(m.a)(e,["isAuthenticated","component"]);return Object(t.jsx)(d.b,Object(l.a)(Object(l.a)({},c),{},{component:function(e){return a?Object(t.jsx)(d.a,{to:"/"}):Object(t.jsx)(r,Object(l.a)({},e))}}))},A=function(){var e=Object(c.useContext)(o).user;return Object(t.jsx)(b.a,{children:Object(t.jsx)("div",{children:Object(t.jsxs)(d.d,{children:[Object(t.jsx)(w,{path:"/login",isAuthenticated:e.logged,component:O}),Object(t.jsx)(p,{path:"/",isAuthenticated:e.logged,component:D})]})})})},B=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},J=function(){var e=Object(c.useReducer)(u,{},B),a=Object(i.a)(e,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r))}),[r]),Object(t.jsx)(o.Provider,{value:{user:r,dispatch:s},children:Object(t.jsx)(A,{})})};n.a.render(Object(t.jsx)(J,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.abe1bfde.chunk.js.map
