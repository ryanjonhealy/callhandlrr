(this.webpackJsonpcallhandlrr=this.webpackJsonpcallhandlrr||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(2),c=n.n(r),a=n(7),o=n.n(a),s=(n(14),n(0)),u=n.n(s),i=n(3),l=n(4),h=n(5),f=n(9),p=n(8),d=(n(16),function(){function t(){Object(l.a)(this,t)}return Object(h.a)(t,[{key:"getAllCustomers",value:function(){var t=Object(i.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://techtestcalllogapi.azurewebsites.net/api/Customer",{}).then((function(t){return t.json()})).then((function(t){return console.log("\ud83d\ude80 ~ data",t),t})).catch((function(t){console.log(t)}));case 2:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getCustomer",value:function(){var t=Object(i.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://techtestcalllogapi.azurewebsites.net/api/Customer/"+e,{mode:"no-cors"}).then((function(t){return t.json()})).then((function(t){return console.log("\ud83d\ude80 ~ data",t),t})).catch((function(t){console.log(t)}));case 2:return t.abrupt("return");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),t}()),v=n(1),b=function(t){Object(f.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).services=new d,t.state={Customers:[]},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=Object(i.a)(u.a.mark((function t(){var e=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.services.getAllCustomers().then((function(t){console.log("\ud83d\ude80 ~ data",t),e.setState({Customers:t})}));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsx)("div",{className:"App",children:this.state.Customers?this.state.Customers.map((function(t,e){var n;return console.log("\ud83d\ude80 ~ item",t),n=t?t.name:null,Object(v.jsx)("div",{children:n})})):Object(v.jsx)("div",{})})}}]),n}(r.Component),j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),r(t),c(t),a(t),o(t)}))};o.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(b,{})}),document.getElementById("root")),j()}},[[18,1,2]]]);
//# sourceMappingURL=main.20b27450.chunk.js.map