(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(7),s=n.n(a),i=n(1),l=n(2),c=n(4),u=n(3),b=(n(13),n(5)),p=function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={isVisible:!1,goodsVisible:t.props.goods},t.startHandler=function(){t.setState((function(t){return{isVisible:!t.isVisible}}))},t.sortAlphabetHandler=function(){var e=t.props.goods;t.setState((function(){return{goodsVisible:Object(b.a)(e).sort((function(t,e){return t.localeCompare(e)}))}}))},t.reverseHandler=function(){t.setState((function(t){return{goodsVisible:Object(b.a)(t.goodsVisible).reverse()}}))},t.resetHandler=function(){var e=t.props.goods;t.setState((function(t){return{goodsVisible:e}}))},t.sortByLengthHandler=function(){var e=t.props.goods;t.setState((function(){return{goodsVisible:Object(b.a)(e).sort((function(t,e){return t.length-e.length}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,!this.state.isVisible&&o.a.createElement("button",{type:"button",onClick:this.startHandler},"Start"),o.a.createElement("button",{type:"button",onClick:this.reverseHandler},"Reverse"),o.a.createElement("button",{type:"button",onClick:this.sortAlphabetHandler},"Sort Alphabetically"),o.a.createElement("button",{type:"button",onClick:this.resetHandler},"Reset"),o.a.createElement("button",{type:"button",onClick:this.sortByLengthHandler},"Sort by length"),this.state.isVisible&&o.a.createElement("ul",null,this.state.goodsVisible.map((function(t){return o.a.createElement("li",{key:t},t)}))))}}]),n}(o.a.Component),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],g=function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={goods:d},t}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Goods"),o.a.createElement(p,{goods:this.state.goods}))}}]),n}(o.a.Component);s.a.render(o.a.createElement(g,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.7ec036cf.chunk.js.map