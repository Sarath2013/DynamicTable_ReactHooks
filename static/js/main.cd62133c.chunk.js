(this["webpackJsonpdynamic-table-app"]=this["webpackJsonpdynamic-table-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),c=a.n(r),o=(a(13),a(6)),m=a(7),u=a(5);var i=l.a.memo((function(e){var t=this;function a(t,a){e.update(e.id,Object(u.a)({},a,t.target.value))}return l.a.createElement("tr",{className:"table-row form-group"},l.a.createElement("td",null,l.a.createElement("select",{className:"form-control",value:e.item,onChange:function(e){return a.call(t,e,"item")}},l.a.createElement("option",{value:"item1"},"Item 1"),l.a.createElement("option",{value:"item2"},"Item 2"),l.a.createElement("option",{value:"item3"},"Item 3"),l.a.createElement("option",{value:"item4"},"Item 4"))),l.a.createElement("td",null,l.a.createElement("select",{className:"form-control",value:e.by,onChange:function(e){return a.call(t,e,"by")}},l.a.createElement("option",{value:"by1"},"By 1"),l.a.createElement("option",{value:"by2"},"By 2"),l.a.createElement("option",{value:"by3"},"By 3"),l.a.createElement("option",{value:"by4"},"By 4"))),l.a.createElement("td",null,l.a.createElement("input",{className:"form-control",type:"number",value:e.harga,onChange:function(e){return a.call(t,e,"harga")}})),l.a.createElement("td",null,l.a.createElement("input",{className:"form-control",type:"number",value:e.qty,onChange:function(e){return a.call(t,e,"qty")}})),l.a.createElement("td",null,l.a.createElement("input",{className:"form-control",type:"number",value:e.subTotal,onChange:function(e){return a.call(t,e,"subTotal")}})),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-danger btn-sm",onClick:function(){e.update(e.id)}},l.a.createElement("i",{className:"fas fa-minus-circle"}))))})),s=["Item","By","Harga","Qty","Sub Total","Act"];var b=function(){var e=Object(n.useState)([{id:1,item:"item1",by:"by1",harga:"",qty:"",subTotal:""}]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useCallback)((function(e,t){var n=[];n=t?a.map((function(a){return e===a.id?Object.assign({},a,t):a})):a.filter((function(t){return e!==t.id})),r(n)}),[a]);return l.a.createElement("table",{className:"dynamic-table table table-bordered table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",{key:"header-tr"},s.map((function(e,t){return l.a.createElement("th",{key:t},l.a.createElement("div",null,e))})))),l.a.createElement("tbody",null,a.map((function(e){return l.a.createElement(i,{key:e.id,id:e.id,item:e.item,by:e.by,harga:e.harga,qty:e.qty,subTotal:e.subTotal,update:c})})),l.a.createElement("tr",{className:"tr-new",key:"tr-new"},l.a.createElement("td",{colSpan:"5"}),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-success",onClick:function(){var e=[].concat(Object(o.a)(a),[{id:a[a.length-1].id+1,item:"item1",by:"by1",harga:"",qty:"",subTotal:""}]);r(e)}},l.a.createElement("i",{className:"fas fa-plus"}),"New"))),l.a.createElement("tr",{className:"tr-submit",key:"tr-submit"},l.a.createElement("td",{colSpan:"5"}),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-success",onClick:function(){console.log(a)}},"Submit")))))};a(14),a(15);var d=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.cd62133c.chunk.js.map