(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,n){e.exports={show:"styles_show__3QmGy",hide:"styles_hide__3Mdpc",app:"styles_app__1aTJl",title:"styles_title__1o_p0",filterBar:"styles_filterBar__VqvNr",ACTIVE_LinkContainer:"styles_ACTIVE_LinkContainer__3pFxB",ALL_LinkContainer:"styles_ALL_LinkContainer__30sO0",ALL_2_LinkContainer:"styles_ALL_2_LinkContainer__1hyI7",COMPLETED_LinkContainer:"styles_COMPLETED_LinkContainer__1Ecjf",ALLText:"styles_ALLText__3R1b_",ALL_2Text:"styles_ALL_2Text__8iHsX",COMPLETEDText:"styles_COMPLETEDText__18_jK",ACTIVEText:"styles_ACTIVEText__3l67a",ACTIVE:"styles_ACTIVE__3yGaR",ALL:"styles_ALL__nebSF",ALL_2:"styles_ALL_2__2i6p1",COMPLETED:"styles_COMPLETED__s7jXc",filterButton:"styles_filterButton__3u9DK",filterButtonActive:"styles_filterButtonActive__2RQCN",todoList:"styles_todoList__TTku6",messageSpan:"styles_messageSpan__3Iis7",todo:"styles_todo__2bICI",gradient:"styles_gradient__o5ohN",todoText:"styles_todoText__81yCF",deleteMode:"styles_deleteMode__3LWN9",deleteButton:"styles_deleteButton__1UQUF",checkCircle:"styles_checkCircle__29HBZ",checkCircleCompleted:"styles_checkCircleCompleted__2CaXO",todoInput:"styles_todoInput__1VzMc",todoSubmit:"styles_todoSubmit__bkgfG"}},15:function(e,t,n){e.exports=n(24)},24:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(6),r=n.n(c),i=n(2),l=n(1),s=n.n(l),u=Object(i.b)()(function(e){var t,n=e.dispatch,o=function(e){var o;e.preventDefault(),""!==t.value.trim()&&n((o=t.value.trim(),{type:"ADD_TODO",uid:"_"+Math.random().toString(36).substr(2,9),completed:!1,text:o})),t.value=""};return a.a.createElement("form",{onSubmit:function(e){o(e)}},a.a.createElement("input",{className:s.a.todoInput,ref:function(e){return t=e},type:"text",placeholder:"..."}),a.a.createElement("input",{type:"image",value:"+",src:"./add-icon.png",className:s.a.todoSubmit,alt:"Add sign"}))}),d=function(e){var t=e.text,n=e.uid,o=e.completed,c=e.onClick,r=e.toggleTodo,i=e.editTodo,l=(e.filter,e.mode);return a.a.createElement("li",null,a.a.createElement("div",{className:s.a.todo},a.a.createElement("button",{className:"".concat(s.a.deleteButton," ").concat("Delete"===l?s.a.show:s.a.hide),onClick:c},"X"),a.a.createElement("textarea",{className:s.a.todoText,maxLength:"35",rows:"2",cols:"50",value:t,onChange:function(e){i(n,e.target.value)}}),a.a.createElement("button",{uid:n,className:o?s.a.checkCircleCompleted:s.a.checkCircle,onClick:function(){r(n)}})))},_=function(e,t){switch(t){case"COMPLETED":return e.filter(function(e){return!0===e.completed});case"ACTIVE":return e.filter(function(e){return!1===e.completed});default:return e}},m=Object(i.b)(function(e){return{todos:_(e.todos,e.filter),filter:e.filter,mode:e.mode}},function(e){return{deleteTodo:function(t){return e(function(e){return{type:"DELETE_TODO",uid:e}}(t))},toggleTodo:function(t){return e(function(e){return{type:"TOGGLE_TODO",uid:e}}(t))},editTodo:function(t,n){return e(function(e,t){return{type:"EDIT_TODO",uid:e,text:t}}(t,n))}}})(function(e){var t=e.todos,n=e.toggleTodo,o=e.deleteTodo,c=e.editTodo,r=e.filter,i=e.mode;return a.a.createElement("ul",{className:s.a.todoList},a.a.createElement("div",{className:s.a.gradient}),0===t.length?a.a.createElement("span",{className:s.a.messageSpan},"You have no todos here."):t.map(function(e,t){return a.a.createElement(d,{key:t,uid:e.uid,text:e.text,completed:e.completed,editTodo:c,toggleTodo:n,onClick:function(){o(e.uid)},filter:r,mode:i})}))}),f=function(e){var t=e.dispatch,n=e.filter,o=e.activeFilter,c=function(e,t){switch(t){case"COMPLETED":return e.filter(function(e){return!0===e.completed});case"ACTIVE":return e.filter(function(e){return!1===e.completed});default:return e}}(e.todos,n);return a.a.createElement("div",{className:s.a["".concat(n,"_LinkContainer")]},a.a.createElement("button",{className:o===n||o==="".concat(n.substr(0,3))||o==="".concat(n.substr(0,3),"_2")?"".concat(s.a.filterButtonActive," ").concat(s.a["".concat(n)]):"".concat(s.a.filterButton," ").concat(s.a["".concat(n)]),onClick:function(){t(function(e){return{type:"UPDATE_FILTER",filter:e}}(n))}},c.length),a.a.createElement("span",{className:"".concat(s.a["".concat(n,"Text")])},"ALL_2"!==n?n:"ALL"))},E=Object(i.b)(function(e){return{activeFilter:e.filter,todos:e.todos}},function(e){return{dispatch:e}})(function(e){var t=e.activeFilter,n=e.todos,o=e.dispatch;return a.a.createElement("div",{className:s.a.filterBar},a.a.createElement(f,{activeFilter:t,todos:n,filter:"ACTIVE",dispatch:o}),a.a.createElement(f,{activeFilter:t,todos:n,filter:"ALL",dispatch:o}),a.a.createElement(f,{activeFilter:t,todos:n,filter:"ALL_2",dispatch:o}),a.a.createElement(f,{activeFilter:t,todos:n,filter:"COMPLETED",dispatch:o}))}),p=Object(i.b)(function(e){return{mode:e.mode,todos:e.todos}})(function(e){var t=e.dispatch,n=e.mode,o=e.todos;return a.a.createElement("button",{className:"".concat(s.a.deleteMode," ").concat(0===o.length?s.a.hide:s.a.show),onClick:function(e){t(function(e){return{type:"UPDATE_MODE",mode:e}}("Delete"===n?"Create":"Delete"))}},"DELETE TODOS")}),T=function(){return a.a.createElement("div",{className:s.a.app},a.a.createElement("h1",{className:s.a.title},"TODO"),a.a.createElement(E,null),a.a.createElement(m,null),a.a.createElement(p,null),a.a.createElement(u,null))},L=n(5),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ALL",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_FILTER":return t.filter;default:return e}},h=n(14),y=n(10),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(y.a)(e),[{uid:t.uid,text:t.text,completed:t.completed}]);case"DELETE_TODO":return Object(y.a)(e.filter(function(e){return e.uid!==t.uid}));case"EDIT_TODO":return e.map(function(e){return e.uid===t.uid?(e.text=t.text,e):e});case"TOGGLE_TODO":return e.map(function(e){return e.uid===t.uid?Object(h.a)({},e,{completed:!e.completed}):e});default:return e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Create",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_MODE":return t.mode;default:return e}},D=Object(L.b)({filter:C,todos:O,mode:v}),A=Object(L.c)(D);r.a.render(a.a.createElement(i.a,{store:A},a.a.createElement(T,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c8ccb8bf.chunk.js.map