(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{209:function(t,e,n){var content=n(241);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("88a537b8",content,!0,{sourceMap:!1})},210:function(t,e,n){var content=n(243);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("6759f5ab",content,!0,{sourceMap:!1})},240:function(t,e,n){"use strict";var o=n(209);n.n(o).a},241:function(t,e,n){(e=n(66)(!1)).push([t.i,".paginate-links{text-align:center;padding:0;margin:0;display:flex;flex-wrap:nowrap;align-items:center;justify-content:center;position:fixed;bottom:0;left:0;z-index:10;width:100vw;height:10vh;background-color:#fff;border-top:1px solid #cecece}.paginate-links li{display:block;width:32px;height:32px;line-height:32px;font-weight:700;color:#3a2c09;margin:0 2px}.paginate-links li button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border:1px solid #cecece;border-radius:3px;display:block;width:100%;height:100%;color:#333;font-weight:700;cursor:pointer;padding:0;margin:0}.paginate-links li.active button,.paginate-links li.left-arrow button,.paginate-links li.right-arrow button,.paginate-links li button:focus,.paginate-links li button:hover{color:#fff;border:1px solid #032f63;background-color:#032f63;opacity:1}.paginate-links li button:focus{outline:none;box-shadow:inset 0 0 0 2px #fff}.paginate-links li.disabled{display:none}.news-list{padding:10px 0;margin:0;width:calc(100vw - 10px);height:90vh;overflow-y:scroll;position:fixed;top:0;left:5px;z-index:0}.news-list ul{margin:0;padding:0;list-style-type:none;display:grid;grid-gap:10px}.news-list li{display:block;padding:0}.news-list a{display:block;background-color:#f9f9f9;padding:8px 10px;color:#333;font-weight:700;text-decoration:none;border:1px solid #cecece;border-radius:3px}.news-list a:focus,.news-list a:hover{background-color:#032f63;border:1px solid #032f63;color:#fff}.news-list a:focus{outline:none;box-shadow:inset 0 0 0 3px #fff}.news-list a:visited{color:#999}.news-list a:visited:focus,.news-list a:visited:hover{background-color:#032f63;border:1px solid #032f63;color:#fff}.off-screen{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}",""]),t.exports=e},242:function(t,e,n){"use strict";var o=n(210);n.n(o).a},243:function(t,e,n){(e=n(66)(!1)).push([t.i,"main{height:100vh}",""]),t.exports=e},244:function(t,e,n){"use strict";n.r(e);n(32);var o=n(9),r=n(2),l=n(219),c=n.n(l),d=(n(151),n(115),n(152),n(90),n(91),n(236)),f=n.n(d),h=r.a.extend({props:{data:{type:Array,default:function(){return[]}}},data:function(){return{lists:this.data,paginate:["lists"]}},methods:{textRender:function(text){return text.includes("Reading... ")?text.split("Reading... ").join("").replace(/^<[^>]h>|<[^>]*>$/g,""):text.includes("Reading… ")?text.split("Reading… ").join("").replace(/^<[^>]h>|<[^>]*>$/g,""):void 0},urlRender:function(text){if(null!==text)return text.match(/ <([^\s]+)/)[1].slice(0,-1)},emoji:function(text){return f.a.emojify(text)},onPageChange:function(){document.getElementsByClassName("news-list")[0].scrollTop=0},unix2ymd:function(t){var e=new Date(1e3*t);return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)}}}),x=(n(240),n(48)),m=Object(x.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("paginate-links",{attrs:{for:"lists","show-step-links":!1},on:{change:t.onPageChange}}),t._v(" "),n("paginate",{staticClass:"news-list",attrs:{tag:"nav",name:"lists",list:t.lists,per:20}},[n("ul",[t._l(t.paginated("lists"),(function(e){return[e.attachments?n("li",{key:e.iid},[e.attachments[0].title?n("a",{attrs:{href:e.attachments[0].title_link,title:"Read More: "+t.emoji(e.attachments[0].title),target:"_blank",rel:"noopener"}},[e.attachments[0].ts?n("span",{staticClass:"off-screen"},[t._v(t._s(t.unix2ymd(e.attachments[0].ts)))]):t._e(),t._v("\n            "+t._s(t.emoji(e.attachments[0].title))+"\n          ")]):n("a",{attrs:{href:t.urlRender(e.attachments[0].text),title:"Read More: "+t.emoji(e.attachments[0].text),target:"_blank",rel:"noopener"}},[e.attachments[0].ts?n("span",{staticClass:"off-screen"},[t._v(t._s(t.unix2ymd(e.attachments[0].ts)))]):t._e(),t._v("\n            "+t._s(t.emoji(t.textRender(e.attachments[0].text)))+"\n          ")])]):t._e()]}))],2)])],1)}),[],!1,null,null,null).exports,w=r.a.extend({components:{NewsList:m},asyncData:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.a.get("https://ou8tljek8g.execute-api.us-east-1.amazonaws.com/reading/readingFunctions");case 3:return o=n.sent,data=o.data,n.abrupt("return",{lists:data.api});case 8:n.prev=8,n.t0=n.catch(0),t({statusCode:404,message:"Connection Error"}),e.$sentry.captureException(new Error("Connection Error"));case 12:case"end":return n.stop()}}),n,null,[[0,8]])})))()}}),v=(n(242),Object(x.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("news-list",{attrs:{data:this.lists}})],1)}),[],!1,null,null,null));e.default=v.exports}}]);