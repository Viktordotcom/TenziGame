(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(5),c=n.n(r),i=(n(10),n(2)),l=n(4),d=(n(11),n(12),n(0));function u(){return Object(d.jsxs)("nav",{children:[Object(d.jsx)("h1",{children:"Tenzies"}),Object(d.jsx)("p",{children:"Roll until all dice are the same. Click each die to freeze it at its current value between rolls."})]})}n(14);function h(e){var t=e.dices.map((function(t){return Object(d.jsx)("div",{className:t.hold?"dice hold":"dice",id:t.id,onClick:function(n){return e.freezeDice(n,t.id)},children:Object(d.jsx)("p",{children:t.value})},t.id)}));return Object(d.jsxs)("main",{children:[Object(d.jsx)("div",{className:"dice-container",children:t}),e.isGameOver?Object(d.jsx)("button",{onClick:e.newGame,children:"New Game"}):Object(d.jsx)("button",{onClick:e.rollDice,children:"Roll"})]})}var s=[{value:Math.floor(10*Math.random()),id:1,hold:!0},{value:Math.floor(10*Math.random()),id:2,hold:!1},{value:Math.floor(10*Math.random()),id:3,hold:!1},{value:Math.floor(10*Math.random()),id:4,hold:!1},{value:Math.floor(10*Math.random()),id:5,hold:!1},{value:Math.floor(10*Math.random()),id:6,hold:!1},{value:Math.floor(10*Math.random()),id:7,hold:!1},{value:Math.floor(10*Math.random()),id:8,hold:!0},{value:Math.floor(10*Math.random()),id:9,hold:!1},{value:Math.floor(10*Math.random()),id:10,hold:!1}];var f=function(){var e=o.a.useState(s),t=Object(l.a)(e,2),n=t[0],a=t[1],r=o.a.useState(!1),c=Object(l.a)(r,2),f=c[0],j=c[1];function m(){n.every((function(e){return e.value===n[0].value}))&&j(!0)}return o.a.useEffect((function(){m()}),[n]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(u,{}),Object(d.jsx)(h,{dices:n,rollDice:function(){a((function(e){return e.map((function(e){return!1===e.hold?Object(i.a)(Object(i.a)({},e),{},{value:Math.floor(10*Math.random())}):e}))}))},freezeDice:function(e,t){return e.stopPropagation(),a((function(e){return e.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{hold:!e.hold}):e}))}))},onGameOver:m,isGameOver:f,newGame:function(){a((function(e){return e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{hold:!1,value:Math.floor(10*Math.random())})}))})),j(!1)}})]})};c.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.8400146f.chunk.js.map