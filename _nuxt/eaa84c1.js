(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{520:function(t,e,n){var content=n(541);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("30be6e4c",content,!0,{sourceMap:!1})},531:function(t,e,n){"use strict";n.r(e);var o={name:"BulletinCard",components:{},props:{title:{type:String,default:""},description:{type:String,default:""},linkTitle:{type:String,default:""},linkHref:{type:String,default:""},linkTo:{type:String,default:""},icon:{type:String,default:""}},computed:{classObject:function(){return{"bulletin--card":!0}}},methods:{onClick:function(){var t=this.$props,e=t.linkTo,n=t.linkHref;e?this.$router.push(e):n&&window.open(n,"_blank")}}},l=(n(540),n(6)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"show",rawName:"v-show",value:!!t.title,expression:"!!title"}],class:t.classObject,on:{click:t.onClick}},[o("div",{staticClass:"bulletin--card__dummy"}),t._v(" "),o("img",{staticClass:"bulletin--card__icon",attrs:{src:n(534)("./"+t.icon+".svg")}}),t._v(" "),o("div",{staticClass:"bulletin--card__content"},[o("h2",{staticClass:"bulletin--card__header"},[t._v(t._s(t.title))]),t._v(" "),o("p",{staticClass:"bulletin--card__description"},[t._v(t._s(t.description))])])])}),[],!1,null,"257526dd",null);e.default=component.exports},534:function(t,e,n){var map={"./Blog.svg":535,"./Discord.svg":536,"./HackMD.svg":537,"./PyCast.svg":538,"./Youtube.svg":539};function o(t){var e=l(t);return n(e)}function l(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=l,t.exports=o,o.id=534},535:function(t,e,n){t.exports=n.p+"img/Blog.348b5bb.svg"},536:function(t,e,n){t.exports=n.p+"img/Discord.db24e9d.svg"},537:function(t,e,n){t.exports=n.p+"img/HackMD.b872042.svg"},538:function(t,e,n){t.exports=n.p+"img/PyCast.bcca2a8.svg"},539:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjU3NDcgMzUuMzY2OUwzNS41MjAxIDMwLjIxNDhMMjYuNTc0NyAyNS4wNjI3VjM1LjM2NjlaIiBmaWxsPSIjOTI1OEJGIi8+CjxwYXRoIGQ9Ik0zMCAyLjcxNDg0QzE0LjgxNDUgMi43MTQ4NCAyLjUgMTUuMDI5MyAyLjUgMzAuMjE0OEMyLjUgNDUuNDAwNCAxNC44MTQ1IDU3LjcxNDggMzAgNTcuNzE0OEM0NS4xODU1IDU3LjcxNDggNTcuNSA0NS40MDA0IDU3LjUgMzAuMjE0OEM1Ny41IDE1LjAyOTMgNDUuMTg1NSAyLjcxNDg0IDMwIDIuNzE0ODRaTTQ3LjE4MzMgMzAuMjQzQzQ3LjE4MzMgMzAuMjQzIDQ3LjE4MzMgMzUuODIwMSA0Ni40NzU4IDM4LjUwOTRDNDYuMDc5MyAzOS45ODE0IDQ0LjkxODYgNDEuMTQyMSA0My40NDY2IDQxLjUzODJDNDAuNzU3MyA0Mi4yNDYxIDMwIDQyLjI0NjEgMzAgNDIuMjQ2MUMzMCA0Mi4yNDYxIDE5LjI3MDggNDIuMjQ2MSAxNi41NTM0IDQxLjUxMDFDMTUuMDgxNCA0MS4xMTQgMTMuOTIwNyAzOS45NTI5IDEzLjUyNDIgMzguNDgwOUMxMi44MTYzIDM1LjgyMDEgMTIuODE2MyAzMC4yMTQ4IDEyLjgxNjMgMzAuMjE0OEMxMi44MTYzIDMwLjIxNDggMTIuODE2MyAyNC42MzgxIDEzLjUyNDIgMjEuOTQ4OEMxMy45MjAzIDIwLjQ3NjggMTUuMTA5NSAxOS4yODc2IDE2LjU1MzQgMTguODkxNUMxOS4yNDI3IDE4LjE4MzYgMzAgMTguMTgzNiAzMCAxOC4xODM2QzMwIDE4LjE4MzYgNDAuNzU3MyAxOC4xODM2IDQzLjQ0NjYgMTguOTE5NkM0NC45MTg2IDE5LjMxNTcgNDYuMDc5MyAyMC40NzY4IDQ2LjQ3NTggMjEuOTQ4OEM0Ny4yMTE4IDI0LjYzODEgNDcuMTgzMyAzMC4yNDMgNDcuMTgzMyAzMC4yNDNaIiBmaWxsPSIjOTI1OEJGIi8+Cjwvc3ZnPgo="},540:function(t,e,n){"use strict";n(520)},541:function(t,e,n){var o=n(16)((function(i){return i[1]}));o.push([t.i,".bulletin--card[data-v-257526dd]{position:relative;display:flex;height:16rem;width:12rem;flex-direction:column;align-items:center;justify-content:center;border-radius:0.75rem;border:1px solid transparent;background:#1f1c3b;color:#a9a6d9}.bulletin--card[data-v-257526dd]:hover{border:1px solid #746bb8;background:#352d66;color:#f0ebf5;box-shadow:0 0 10px 10px #352d66;cursor:pointer}.bulletin--card__dummy[data-v-257526dd]{margin-top:230%}@media (min-width:375px){.bulletin--card__dummy[data-v-257526dd]{margin-top:170%}}.bulletin--card__icon[data-v-257526dd]{position:absolute;--tw-scale-x:.9;--tw-scale-y:.9;transform:var(--tw-transform);transform:var(--tw-transform)}@media (min-width: 834px){.bulletin--card__icon[data-v-257526dd]{--tw-scale-x:1;--tw-scale-y:1;transform:var(--tw-transform)}}.bulletin--card__icon[data-v-257526dd]{top:12.5%}.bulletin--card__content[data-v-257526dd]{position:absolute;top:30%}.bulletin--card__header[data-v-257526dd]{margin-top:1.5rem;margin-bottom:1.25rem;text-align:center;font-family:Noto Serif TC, -apple-system, serif;font-size:1rem;line-height:1.5rem;font-weight:700}@media (min-width:375px){.bulletin--card__header[data-v-257526dd]{margin-top:2rem}.bulletin--card__header[data-v-257526dd]{margin-bottom:1.25rem}.bulletin--card__header[data-v-257526dd]{font-size:1.25rem;line-height:1.75rem}}.bulletin--card__description[data-v-257526dd]{padding-left:1.25rem;padding-right:1.25rem;padding-bottom:1.5rem;font-size:.6rem}@media (min-width:375px){.bulletin--card__description[data-v-257526dd]{font-size:.8rem}}",""]),o.locals={},t.exports=o},542:function(t,e,n){var content=n(583);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("7c5f4f40",content,!0,{sourceMap:!1})},582:function(t,e,n){"use strict";n(542)},583:function(t,e,n){var o=n(16)((function(i){return i[1]}));o.push([t.i,".bulletinCardCollection__cardContainer[data-v-47d6b86d]{margin-top:2.25rem;display:grid;grid-template-columns:repeat(1, minmax(0, 1fr));place-items:center;gap:2.5rem}@media (min-width: 834px){.bulletinCardCollection__cardContainer[data-v-47d6b86d]{margin-left:auto;margin-right:auto}.bulletinCardCollection__cardContainer[data-v-47d6b86d]{margin-top:0px}.bulletinCardCollection__cardContainer[data-v-47d6b86d]{width:83.333333%}.bulletinCardCollection__cardContainer[data-v-47d6b86d]{grid-template-columns:repeat(3, minmax(0, 1fr))}}",""]),o.locals={},t.exports=o},633:function(t,e,n){"use strict";n.r(e);var o=n(531),l=n(76),r={i18n:Object(l.a)({"en-us":{bulletins:[{title:"HackMD",description:"HackMD allows everyone to write knowledge. Write and share your knowledge in Markdown.",linkTitle:"Go",linkHref:"https://hackmd.io/@pycontw/2021",icon:"HackMD"},{title:"Blog",description:"Receive the latest news, must not miss the blog, we will push the latest information on blog.",linkTitle:"",linkHref:"https://pycontw.blogspot.com/",icon:"Blog"},{title:"PyCast",description:"PyCast often invites Python speakers and volunteers over the years to talk about life and Python.",linkTitle:"",linkHref:"https://podcasts.apple.com/podcast/id1559843325",icon:"PyCast"},{title:"Youtube",description:"PyCon TW uploads the video on YouTube every year. Welcome to subscribe to our channel.",linkTitle:"",linkHref:"https://www.youtube.com/channel/UCHLnNgRnfGYDzPCCH8qGbQw",icon:"Youtube"}]},"zh-hant":{bulletins:[{title:"共同筆記",description:"HackMD 是能讓大家快速撰寫知識的管理平台，歡迎在 Markdown 中編寫並分享您的知識。",linkTitle:"",linkHref:"https://hackmd.io/@pycontw/2021",icon:"HackMD"},{title:"Blog",description:"馬上接收到 PyConTW 最新資訊，一定不能錯過部落格，我們會把最新的資訊推播到部落格上。",linkTitle:"",linkHref:"https://pycontw.blogspot.com/",icon:"Blog"},{title:"PyCast",description:"PyCast 節目常邀請 Python 神人講者及歷年志工來聊聊與生活近況以及 Python 相關的二三事。",linkTitle:"",linkHref:"https://podcasts.apple.com/podcast/id1559843325",icon:"PyCast"},{title:"Youtube",description:"PyCon TW 每年固定上傳議程錄影於 YouTube ，讓大家能一同觀看，歡迎訂閱我們的頻道。",linkTitle:"",linkHref:"https://www.youtube.com/channel/UCHLnNgRnfGYDzPCCH8qGbQw",icon:"Youtube"}]}}),name:"BulletinCardCollection",components:{BulletinCard:o.default}},d=(n(582),n(6)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col w-full"},[n("div",{staticClass:"\n            bulletinCardCollection__cardContainer\n            justify-center\n            lg:justify-start\n        "},t._l(t.$t("bulletins"),(function(t,i){return n("bulletin-card",{key:"index_bulletin_"+i,attrs:{title:t.title,description:t.description,"link-title":t.linkTitle,"link-href":t.linkHref,"link-to":t.linkTo,icon:t.icon}})})),1)])}),[],!1,null,"47d6b86d",null);e.default=component.exports}}]);