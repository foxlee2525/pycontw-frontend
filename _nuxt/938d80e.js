(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{511:function(t,e,n){var o=n(48),r=n(25),l=/"/g;t.exports=function(t,e,n,M){var c=r(o(t)),D="<"+e;return""!==n&&(D+=" "+n+'="'+r(M).replace(l,"&quot;")+'"'),D+">"+c+"</"+e+">"}},512:function(t,e,n){var o=n(7);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},556:function(t,e,n){"use strict";n.r(e);n(564);var o={name:"BulletinCard",components:{},props:{title:{type:String,default:""},description:{type:String,default:""},link:{type:String,default:""},isExternalLink:{type:Boolean,default:!1},icon:{type:String,default:""},showBulletin:{type:Boolean,default:!1}},methods:{onClick:function(){var t=this.$props,e=t.isExternalLink,link=t.link;e?window.open(link,"_blank"):this.$router.push(link)}}},r=n(9),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.showBulletin,expression:"showBulletin"}],staticClass:"relative flex h-64 w-48 flex-col items-center justify-center rounded-xl border-[1px] border-solid border-transparent bg-[#1f1c3b] text-[#a9a6d9] hover:cursor-pointer hover:border-[#746bb8] hover:bg-[#352d66] hover:text-[#f0ebf5] hover:shadow-[0_0_10px_10px_#352d66]",on:{click:t.onClick}},[o("div",{staticClass:"mt-[230%] xs:mt-[170%]"}),t._v(" "),o("img",{staticClass:"absolute top-[12.5%] scale-90 transform md:scale-100",attrs:{src:n(558)("./"+t.icon)}}),t._v(" "),o("div",{staticClass:"absolute top-[30%]"},[o("h2",{staticClass:"mb-5 mt-6 text-center font-serif text-base font-bold xs:mb-5 xs:mt-8 xs:text-xl"},[t._v("\n            "+t._s(t.title)+"\n        ")]),t._v(" "),o("p",{staticClass:"px-5 pb-6 text-[0.6rem] xs:text-[0.8rem]"},[t._v("\n            "+t._s(t.description)+"\n        ")])])])}),[],!1,null,null,null);e.default=component.exports},558:function(t,e,n){var map={"./Blog.svg":559,"./Discord.svg":560,"./HackMD.svg":561,"./PyCast.svg":562,"./YouTube.svg":563};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=558},559:function(t,e,n){t.exports=n.p+"img/Blog.348b5bb.svg"},560:function(t,e,n){t.exports=n.p+"img/Discord.db24e9d.svg"},561:function(t,e,n){t.exports=n.p+"img/HackMD.b872042.svg"},562:function(t,e,n){t.exports=n.p+"img/PyCast.bcca2a8.svg"},563:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjU3NDcgMzUuMzY2OUwzNS41MjAxIDMwLjIxNDhMMjYuNTc0NyAyNS4wNjI3VjM1LjM2NjlaIiBmaWxsPSIjOTI1OEJGIi8+CjxwYXRoIGQ9Ik0zMCAyLjcxNDg0QzE0LjgxNDUgMi43MTQ4NCAyLjUgMTUuMDI5MyAyLjUgMzAuMjE0OEMyLjUgNDUuNDAwNCAxNC44MTQ1IDU3LjcxNDggMzAgNTcuNzE0OEM0NS4xODU1IDU3LjcxNDggNTcuNSA0NS40MDA0IDU3LjUgMzAuMjE0OEM1Ny41IDE1LjAyOTMgNDUuMTg1NSAyLjcxNDg0IDMwIDIuNzE0ODRaTTQ3LjE4MzMgMzAuMjQzQzQ3LjE4MzMgMzAuMjQzIDQ3LjE4MzMgMzUuODIwMSA0Ni40NzU4IDM4LjUwOTRDNDYuMDc5MyAzOS45ODE0IDQ0LjkxODYgNDEuMTQyMSA0My40NDY2IDQxLjUzODJDNDAuNzU3MyA0Mi4yNDYxIDMwIDQyLjI0NjEgMzAgNDIuMjQ2MUMzMCA0Mi4yNDYxIDE5LjI3MDggNDIuMjQ2MSAxNi41NTM0IDQxLjUxMDFDMTUuMDgxNCA0MS4xMTQgMTMuOTIwNyAzOS45NTI5IDEzLjUyNDIgMzguNDgwOUMxMi44MTYzIDM1LjgyMDEgMTIuODE2MyAzMC4yMTQ4IDEyLjgxNjMgMzAuMjE0OEMxMi44MTYzIDMwLjIxNDggMTIuODE2MyAyNC42MzgxIDEzLjUyNDIgMjEuOTQ4OEMxMy45MjAzIDIwLjQ3NjggMTUuMTA5NSAxOS4yODc2IDE2LjU1MzQgMTguODkxNUMxOS4yNDI3IDE4LjE4MzYgMzAgMTguMTgzNiAzMCAxOC4xODM2QzMwIDE4LjE4MzYgNDAuNzU3MyAxOC4xODM2IDQzLjQ0NjYgMTguOTE5NkM0NC45MTg2IDE5LjMxNTcgNDYuMDc5MyAyMC40NzY4IDQ2LjQ3NTggMjEuOTQ4OEM0Ny4yMTE4IDI0LjYzODEgNDcuMTgzMyAzMC4yNDMgNDcuMTgzMyAzMC4yNDNaIiBmaWxsPSIjOTI1OEJGIi8+Cjwvc3ZnPgo="},564:function(t,e,n){"use strict";var o=n(6),r=n(511);o({target:"String",proto:!0,forced:n(512)("link")},{link:function(t){return r(this,"a","href",t)}})},667:function(t,e,n){"use strict";n.r(e);var o=n(115),r=n(556),l=n(79),M={i18n:Object(l.a)({"en-us":{blog:{title:"Blog",description:"Receive the latest news, must not miss the blog, we will push the latest information on blog."},hackmd:{title:"HackMD",description:"HackMD allows everyone to write knowledge. Write and share your knowledge in Markdown."},pycast:{title:"PyCast",description:"PyCast often invites Python speakers and volunteers over the years to talk about life and Python."},youtube:{title:"YouTube",description:"PyCon TW uploads the video on YouTube every year. Welcome to subscribe to our channel."},discord:{title:"Discord",description:"Join the PyConTW Discord server to get instant access to the latest topics of the conference online."}},"zh-hant":{blog:{title:"Blog",description:"馬上接收到 PyConTW 最新資訊，一定不能錯過部落格，我們會把最新的資訊推播到部落格上。"},hackmd:{title:"共同筆記",description:"HackMD 是能讓大家快速撰寫知識的管理平台，歡迎在 Markdown 中編寫並分享您的知識。"},pycast:{title:"PyCast",description:"PyCast 節目常邀請 Python 神人講者及歷年志工來聊聊與生活近況以及 Python 相關的二三事。"},youtube:{title:"YouTube",description:"PyCon TW 每年固定上傳議程錄影於 YouTube ，讓大家能一同觀看，歡迎訂閱我們的頻道。"},discord:{title:"Discord",description:"加入 PyConTW Discord 聊天室並加入今年伺服器即可在線上即時參與大會的最新話題。"}}}),name:"BulletinCardCollection",components:{BulletinCard:r.default},data:function(){return{landingBulletinsConfig:o.a}}},c=n(9),component=Object(c.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex w-full flex-col"},[n("div",{staticClass:"mt-9 grid grid-cols-1 place-items-center justify-center gap-10 md:mx-auto md:mt-0 md:w-10/12 md:grid-cols-3 lg:justify-start"},t._l(t.landingBulletinsConfig,(function(e,o){return n("bulletin-card",{key:"landing-bulletin-"+o,attrs:{title:t.$t(e.titleI18nKey),description:t.$t(e.descriptionI18nKey),link:e.link,"is-external-link":e.isExternalLink,icon:e.icon,"show-bulletin":e.showBulletin}})})),1)])}),[],!1,null,null,null);e.default=component.exports}}]);