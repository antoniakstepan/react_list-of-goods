(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),s=n.n(a),i=(n(13),n(1)),l=n(4),c=n(5),u=n(7),b=n(6),p=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={isVisible:!1,goodsVisible:e.props.goods},e.startHandler=function(){e.setState((function(e){return{isVisible:!e.isVisible}}))},e.sortAlphabetHandler=function(){var t=e.props.goods,n=Object(i.a)(t).sort((function(e,t){return e.localeCompare(t)}));e.setState({goodsVisible:n})},e.reverseHandler=function(){e.setState((function(e){return{goodsVisible:Object(i.a)(e.goodsVisible).reverse()}}))},e.resetHandler=function(){var t=e.props.goods;e.setState((function(e){return{goodsVisible:t}}))},e.sortByLengthHandler=function(){var t=e.props.goods,n=Object(i.a)(t).sort((function(e,t){return e.length-t.length}));e.setState({goodsVisible:n})},e}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,!this.state.isVisible&&o.a.createElement("button",{type:"button",onClick:this.startHandler},"Start"),o.a.createElement("button",{type:"button",onClick:this.reverseHandler},"Reverse"),o.a.createElement("button",{type:"button",onClick:this.sortAlphabetHandler},"Sort Alphabetically"),o.a.createElement("button",{type:"button",onClick:this.resetHandler},"Reset"),o.a.createElement("button",{type:"button",onClick:this.sortByLengthHandler},"Sort by length"),this.state.isVisible&&o.a.createElement("ul",null,this.state.goodsVisible.map((function(e){return o.a.createElement("li",{key:e},e)}))))}}]),n}(o.a.Component),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Goods"),o.a.createElement(p,{goods:d}))};s.a.render(o.a.createElement(g,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.259dd85a.chunk.js.map