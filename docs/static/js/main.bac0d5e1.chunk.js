(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(10),r=a.n(s),l=(a(18),a(1)),c=a(2),o=a(5),m=a(3),u=a(4),d=(a(19),a(20),function(e){function t(e){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"hero is-dark is-bold "+this.props.className},i.a.createElement("div",{className:"hero-body"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"title"},"Friend ranking"),i.a.createElement("h2",{className:"subtitle"},"Rank your friends"))))}}]),t}(i.a.Component)),h=(a(21),a(11)),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={friend:{name:""},valid:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"margin-bottom margin-top"},i.a.createElement("div",{className:"title has-text-white is-4"},"Add friend:"),i.a.createElement("form",{onSubmit:function(t){e.submit(t)},autoComplete:"off"},i.a.createElement("div",{className:"field is-horizontal"},i.a.createElement("div",{className:"field-body"},i.a.createElement("div",{className:"field"},i.a.createElement("p",{className:"control is-expanded has-icons-left"},i.a.createElement("input",{className:"input",type:"text",placeholder:"Name",name:"name",value:this.state.friend&&this.state.friend.name?this.state.friend.name:"",onChange:function(t){e.onNameChange(t)}}),i.a.createElement("span",{className:"icon is-small is-left"},i.a.createElement("span",{className:"oi","data-glyph":"person","aria-hidden":"true"})))),i.a.createElement("div",{className:"field"},i.a.createElement("p",{className:"control has-icons-left"},i.a.createElement("input",{className:"input",type:"number",name:"index",placeholder:"Rank",min:"1",max:this.props.maxRankNumber,value:void 0!==this.state.index?this.state.index:this.props.maxRankNumber,onChange:function(t){e.onIndexChange(t)}}),i.a.createElement("span",{className:"icon is-small is-left"},i.a.createElement("span",{className:"oi","data-glyph":"elevator","aria-hidden":"true"})))))),i.a.createElement("div",{className:"level submit-btn"},i.a.createElement("div",{className:"level-left"}),i.a.createElement("div",{className:"level-right"},i.a.createElement("button",{className:"button margin-left is-danger",type:"button",onClick:function(){e.clean()}},"Clean"),i.a.createElement("button",{className:"button margin-left "+(this.state.valid?"is-success":""),type:"submit",disabled:!this.state.valid},"Add")))))}},{key:"isValid",value:function(e,t){return e.name&&void 0!==t}},{key:"submit",value:function(e){e.preventDefault(),this.isValid(this.state.friend,this.state.index?this.state.index:this.props.maxRankNumber)&&(this.props.onSubmit(this.state.friend,this.state.index?this.state.index:this.props.maxRankNumber),this.clean())}},{key:"clean",value:function(){this.setState({friend:{name:""},index:void 0,valid:!1})}},{key:"onNameChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name,i=Object(h.a)({},n,a);this.setState({friend:i,valid:this.isValid(i,this.state.index?this.state.index:this.props.maxRankNumber)})}},{key:"onIndexChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:parseInt(t.value.toString().trim());a<1?a=1:a>this.props.maxRankNumber&&(a=this.props.maxRankNumber),this.setState({index:a,valid:this.isValid(this.state.friend,a)})}}]),t}(i.a.Component),p=function(e){function t(e){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"has-background-dark padding "+this.props.className},i.a.createElement("div",{className:"container"},i.a.createElement("div",null,i.a.createElement(f,{maxRankNumber:this.props.friends.length+1,onSubmit:function(t,a){return e.props.onSubmit(t,a)}})),i.a.createElement("div",{className:"columns is-mobile is-multiline"},this.props.friends.map(function(t,a){return e.getFriendCard(t,a)}))))}},{key:"getIcons",value:function(e){var t=this,a=e>0,n=e+1<this.props.friends.length;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"column is-full"},i.a.createElement("span",{className:"icon is-small "+(a?"enabled":"disabled"),onClick:a?function(a){t.props.raiseFriendRank(e)}:function(){}},i.a.createElement("span",{className:"oi","data-glyph":"caret-top",title:"Raise rank","aria-hidden":"true"}))),i.a.createElement("div",{className:"column is-full"},i.a.createElement("span",{className:"icon is-small "+(n?"enabled":"disabled"),onClick:n?function(a){t.props.lowerFriendRank(e)}:function(){}},i.a.createElement("span",{className:"oi","data-glyph":"caret-bottom",title:"Lower rank","aria-hidden":"true"}))))}},{key:"getFriendCard",value:function(e,t){var a=this;return i.a.createElement("div",{className:"column is-full",key:t},i.a.createElement("div",{className:"notification"},i.a.createElement("div",{className:"columns is-mobile"},i.a.createElement("div",{className:"column is-1"},i.a.createElement("div",{className:"columns is-multiline icons is-gapless is-mobile"},this.getIcons(t))),i.a.createElement("div",{className:"column"},i.a.createElement("div",{className:"friend-rank"},"Rank ",i.a.createElement("span",{className:"value"},t+1)),i.a.createElement("div",{className:"friend-name"},e.name)),i.a.createElement("div",{className:"column is-1"},i.a.createElement("div",{className:"columns is-multiline icons is-gapless is-mobile"},i.a.createElement("div",{className:"column is-full"},i.a.createElement("span",{className:"icon is-large has-text-danger enabled is-size-4",onClick:function(e){a.props.removeFriend(t)}},i.a.createElement("span",{className:"oi","data-glyph":"circle-x",title:"Remove friend","aria-hidden":"true"}))))))))}}]),t}(i.a.Component),v=a(6),b=a(7),k=function(){function e(){Object(l.a)(this,e)}return Object(c.a)(e,[{key:"getFriends",value:function(){var e=localStorage.getItem("friends");if(e)return JSON.parse(e);var t=new Array({name:"Rodrigo"},{name:"Kevin"},{name:"Luan"});return this.setFriends(t),t}},{key:"setFriends",value:function(e){localStorage.setItem("friends",JSON.stringify(e))}},{key:"raiseFriendRank",value:function(e,t){if(t>0){for(var a=new Array,n=0;n<e.length;n++)n===t-1?a.push(e[t]):n===t?a.push(e[t-1]):a.push(e[n]);return a}return Object(v.a)(Array,Object(b.a)(e))}},{key:"lowerFriendRank",value:function(e,t){if(t<e.length-1){for(var a=new Array,n=0;n<e.length;n++)n===t+1?a.push(e[t]):n===t?a.push(e[t+1]):a.push(e[n]);return a}return Object(v.a)(Array,Object(b.a)(e))}},{key:"addFriend",value:function(e,t,a){var n=a-1;if(n>=0&&n<=e.length){for(var i=new Array,s=0;s<=e.length;s++)if(s<n)i.push(e[s]);else if(s===n)i.push(t);else if(s>=n+1){var r=0===n?1:n;i.push(e[s-r])}return i}return Object(v.a)(Array,Object(b.a)(e))}},{key:"removeFriend",value:function(e,t){var a=Object(v.a)(Array,Object(b.a)(e));return a.splice(t,1),a}}]),e}(),N=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("footer",{className:"footer "+this.props.className},i.a.createElement("div",{className:"content has-text-centered"},i.a.createElement("p",null,i.a.createElement("strong",null,"react-friend-ranking")," made with \u2764 by Matheus Assis Rios.")))}}]),t}(i.a.Component),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).store=new k,a.state={friends:a.store.getFriends()},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"flex-wrapper"},i.a.createElement(d,{className:"flex-header"}),i.a.createElement(p,{className:"flex-auto",friends:this.state.friends,onSubmit:function(t,a){e.onSubmit(t,a)},removeFriend:function(t){e.removeFriend(t)},raiseFriendRank:function(t){e.raiseFriendRank(t)},lowerFriendRank:function(t){e.lowerFriendRank(t)}}),i.a.createElement(N,{className:"flex-footer"}))}},{key:"raiseFriendRank",value:function(e){this.setFriends(this.store.raiseFriendRank(this.state.friends,e))}},{key:"lowerFriendRank",value:function(e){this.setFriends(this.store.lowerFriendRank(this.state.friends,e))}},{key:"setFriends",value:function(e){this.store.setFriends(e),this.setState({friends:e})}},{key:"onSubmit",value:function(e,t){this.setFriends(this.store.addFriend(this.state.friends,e,t))}},{key:"removeFriend",value:function(e){this.setFriends(this.store.removeFriend(this.state.friends,e))}}]),t}(i.a.Component),y=function(e){function t(e){var a;return Object(l.a)(this,t),a=Object(o.a)(this,Object(m.a)(t).call(this,e)),document.title="React friend ranking",a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(E,null)}}]),t}(i.a.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(y,null)}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.bac0d5e1.chunk.js.map