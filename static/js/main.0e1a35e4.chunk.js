(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{11:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),s=a.n(o),i=a(10),c=a(2),l=a(3),m=a(4),u=a(6),d=a(5),h=a(1),p=a.n(h),b=(a(7),function(e){var t=e.todos,a=e.changeStatus;return r.a.createElement("div",{className:"todo__list"},t.map((function(e){return r.a.createElement("div",{key:e.id,className:p()({todo:!0,"todo--done":e.completed})},r.a.createElement("p",{className:"todo__paragraph"},e.user.name),r.a.createElement("div",null,r.a.createElement("span",{className:"todo__paragraph"},"Todo:"),e.title),r.a.createElement("button",{type:"button",className:"todo__button",onClick:function(){return a(e.id,!0)}},r.a.createElement("span",{role:"img","aria-label":"check-mark"},"\u2705")," ","Done")," ",r.a.createElement("button",{type:"button",className:"todo__button",onClick:function(){return a(e.id,!1)}},r.a.createElement("span",{role:"img","aria-label":"clock"},"\ud83d\udd51")," ","In Process"))})))}),g=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={userId:"",id:e.props.todosLength,title:"",completed:!1,checkTitle:!1,checkUser:!1},e.setTitle=function(t){e.setState({title:t.target.value,checkTitle:!1})},e.selectUser=function(t){e.setState({userId:+t.target.value,checkUser:!1})},e.handleSubmit=function(t){t.preventDefault(),e.setState((function(t){var a=t.userId,n=t.id,r=t.title,o=t.completed,s=e.props,i=s.users,c=s.setNewTodo;return 0===r.length||""===r.trim()?{checkTitle:!0}:0===a.length?{checkUser:!0}:(c({userId:a,id:n+1,title:r,completed:o,user:i.find((function(e){return e.id===a}))}),{userId:"",id:n+1,title:"",completed:!1,checkTitle:!1,checkUser:!1})}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.users,t=this.state,a=t.title,n=t.userId,o=t.checkTitle,s=t.checkUser;return r.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},r.a.createElement("label",null,r.a.createElement("textarea",{type:"text",className:p()({form__item:!0,form__input:!0,form__error:o}),placeholder:"Write todo title here...",onChange:this.setTitle,value:a})),o&&r.a.createElement("span",{className:"form__error-span"},"Please, enter a title"),r.a.createElement("label",null,r.a.createElement("select",{onChange:this.selectUser,className:p()({form__item:!0,form__select:!0,form__error:s}),value:n},r.a.createElement("option",{value:"",hidden:!0},"Select a user"),e.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})))),s&&r.a.createElement("span",{className:"form__error-span"},"Please, select a user"),r.a.createElement("button",{type:"submit",className:"form__item form__button"},"Add todo"))}}]),a}(r.a.Component),f=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!0}],y=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={todos:f.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:y.find((function(t){return t.id===e.userId}))})}))},e.setNewTodo=function(t){e.setState((function(e){return{todos:[].concat(Object(i.a)(e.todos),[t])}}))},e.changeStatus=function(t,a){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(c.a)(Object(c.a)({},e),{},{completed:a}):e}))}}))},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("h1",null,"Add todo form"),r.a.createElement("p",null,r.a.createElement("span",null,"Users: "),y.length),r.a.createElement(g,{todos:this.state.todos,users:y,todosLength:f.length,setNewTodo:this.setNewTodo}),r.a.createElement(b,{todos:this.state.todos,changeStatus:this.changeStatus}))}}]),a}(r.a.Component);s.a.render(r.a.createElement(k,null),document.getElementById("root"))},7:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.0e1a35e4.chunk.js.map