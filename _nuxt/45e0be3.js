(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{339:function(t,e,o){var content=o(341);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("8eebf0dc",content,!0,{sourceMap:!1})},340:function(t,e,o){"use strict";o(339)},341:function(t,e,o){(e=o(17)(!1)).push([t.i,"h1[data-v-2bc76190]{font-size:1.875rem;margin-top:2rem;margin-bottom:2rem;text-align:center}h1[data-v-2bc76190],h2[data-v-2bc76190]{width:100%}h2[data-v-2bc76190]{font-size:1.5rem;margin-top:5rem;margin-bottom:1.5rem}h3[data-v-2bc76190]{font-size:1.25rem;margin-top:2.5rem}.paragraph[data-v-2bc76190],h3[data-v-2bc76190],p[data-v-2bc76190]{width:100%;margin-bottom:1rem}.paragraph[data-v-2bc76190],p[data-v-2bc76190]{margin-top:.25rem;text-align:justify}span.text-2s[data-v-2bc76190]{font-size:.625rem}ul[data-v-2bc76190]{margin-bottom:1.5rem}ul.list-disc[data-v-2bc76190]{padding-left:3rem}li[data-v-2bc76190]{margin-top:.25rem;margin-bottom:.25rem}",""]),t.exports=e},342:function(t,e,o){"use strict";var n={name:"I18nPageWrapper"},r=(o(340),o(4)),component=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"w-full px-8 py-24 sm:px-20 md:px-32 lg:px-32"},[this._t("default")],2)}),[],!1,null,"2bc76190",null);e.a=component.exports},343:function(t,e,o){"use strict";o.r(e);o(361);var n={name:"SponsorCard",props:{logoUrl:{type:String,default:""},tag:{type:String,default:""},small:{type:Boolean,default:!1}},computed:{classObject:function(){return{sponsorCard:!0,"-small":this.small}}}},r=(o(364),o(4)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"show",rawName:"v-show",value:!!t.logoUrl,expression:"!!logoUrl"}],class:t.classObject},[o("img",{staticClass:"object-contain w-full",attrs:{src:t.logoUrl,alt:""}}),t._v(" "),t.tag?o("div",{staticClass:"sponsorCard__tag"},[t._v("\n        "+t._s(t.tag)+"\n    ")]):t._e()])}),[],!1,null,"4102aba4",null);e.default=component.exports},344:function(t,e,o){"use strict";o.r(e);var n=o(23),r={name:"CoreTextButton",components:{ExtLink:n.a,LocaleLink:n.b},props:{primary:{type:Boolean,default:!0},secondary:{type:Boolean,default:!1},rounded:{type:Boolean,default:!0},block:{type:Boolean,default:!1},href:{type:String,default:void 0},to:{type:String,default:void 0}},computed:{coreButtonClasses:function(){return{"core-button":!0,"--primary":this.primary,"--secondary":this.secondary,"--rounded":this.rounded,"--block":this.block}}}},l=(o(359),o(4)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{class:t.coreButtonClasses},[t.href?o("ext-link",{attrs:{href:t.href}},[t._t("default")],2):t.to?o("locale-link",{attrs:{to:t.to,customized:""}},[t._t("default")],2):t._t("default")],2)}),[],!1,null,"6ae6f336",null);e.default=component.exports;installComponents(component,{ExtLink:o(36).default,LocaleLink:o(31).default})},346:function(t,e,o){"use strict";o.r(e);var n=o(43),r={i18n:Object(n.a)({"en-us":{diamond:"Diamond",platinum:"Platinum",gold:"Gold",silver:"Silver",bronze:"Bronze",special:"Special Sponsorship","co-organizer":"Co-organizer",organizer:"Organizer"},"zh-hant":{diamond:"鑽石級贊助",platinum:"白金級贊助",gold:"金級贊助",silver:"銀級贊助",bronze:"銅級贊助",special:"特別贊助","co-organizer":"協辦單位",organizer:"主辦單位"}}),name:"SponsorCardCollection",props:{levelName:{type:String,default:""}}},l=(o(366),o(4)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col w-full"},[e("h3",{staticClass:"mt-12 mb-8 mx-1 text-xl"},[this._v(this._s(this.$t(this.levelName)))]),this._v(" "),e("div",{staticClass:"sponsorCardCollection__cardContainer justify-center md:justify-start"},[this._t("default")],2)])}),[],!1,null,"9172f448",null);e.default=component.exports},347:function(t,e,o){"use strict";o.r(e);o(38);var n=o(43),r=Object(n.a)({"en-us":{website:"Website",about:"About"},"zh-hant":{website:"官方網站",about:"關於"}}),l=o(343),c=o(344),d={i18n:r,name:"SponsorModal",components:{SponsorCard:l.default,TextButton:c.default},props:{value:{type:Boolean,default:!1},context:{type:Object,default:function(){return{}}}},methods:{close:function(){this.value=!1,this.$emit("input",!1)},getAttributeByLocale:function(t){var e="".concat(t,"_").concat({"en-us":"en_us","zh-hant":"zh_hant"}[this.$i18n.locale]);return this.context[e]}}},f=(o(368),o(4)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"sponsorModal"},[o("div",{staticClass:"lightBox"},[o("div",{staticClass:"lightBox__closeButton",on:{click:t.close}},[t._v("✕")]),t._v(" "),o("div",{staticClass:"lightBox__title"},[o("sponsor-card",{attrs:{"logo-url":t.context.logo_url,small:""}}),t._v(" "),o("h1",{staticClass:"text-xl mx-8 border-b-8 border-solid"},[t._v("\n                "+t._s(t.context.name)+"\n            ")])],1),t._v(" "),o("h2",{staticClass:"text-xl text-yellow-500 mt-4"},[t._v(t._s(t.$t("about")))]),t._v(" "),o("div",{staticClass:"lightBox__intro"},[o("p",{staticClass:"text-sm"},[t._v(t._s(t.getAttributeByLocale("intro")))])]),t._v(" "),o("div",{staticClass:"lightBox__buttons"},[o("text-button",{attrs:{href:t.context.website_url}},[t._v(t._s(t.$t("website")))])],1)])])}),[],!1,null,"6f998693",null);e.default=component.exports;installComponents(component,{SponsorCard:o(343).default,TextButton:o(344).default})},348:function(t,e,o){var content=o(360);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("7bfe5b6f",content,!0,{sourceMap:!1})},349:function(t,e,o){var content=o(365);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("147bc382",content,!0,{sourceMap:!1})},350:function(t,e,o){var content=o(367);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("e817889e",content,!0,{sourceMap:!1})},351:function(t,e,o){var content=o(369);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("c2ae12cc",content,!0,{sourceMap:!1})},352:function(t,e,o){var content=o(371);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("1b7833da",content,!0,{sourceMap:!1})},358:function(t,e,o){t.exports=o.p+"img/key-vision-logo.6abbf1c.png"},359:function(t,e,o){"use strict";o(348)},360:function(t,e,o){(e=o(17)(!1)).push([t.i,".core-button[data-v-6ae6f336]{display:inline-flex;align-items:center;justify-content:center;min-width:88px;height:2.25rem;padding:24px 40px;line-height:1.25rem;border-radius:5px;text-transform:uppercase;outline:none;font-weight:700;font-size:1rem;background-color:transparent}.core-button.--rounded[data-v-6ae6f336]{border-radius:9999px}.core-button.--primary[data-v-6ae6f336]{color:#c2a53a;border:.25rem solid #c2a53a}.core-button.--secondary[data-v-6ae6f336]{color:#c7c7c7;border:.25rem solid #c7c7c7}.core-button[data-v-6ae6f336]:hover{color:#7568f6;border-color:#7568f6}",""]),t.exports=e},361:function(t,e,o){"use strict";var n=o(5),r=o(362);n({target:"String",proto:!0,forced:o(363)("small")},{small:function(){return r(this,"small","","")}})},362:function(t,e,o){var n=o(27),r=/"/g;t.exports=function(t,e,o,l){var c=String(n(t)),d="<"+e;return""!==o&&(d+=" "+o+'="'+String(l).replace(r,"&quot;")+'"'),d+">"+c+"</"+e+">"}},363:function(t,e,o){var n=o(7);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},364:function(t,e,o){"use strict";o(349)},365:function(t,e,o){(e=o(17)(!1)).push([t.i,".sponsorCard[data-v-4102aba4]{width:10rem;height:10rem;position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));border-radius:1rem}.sponsorCard.-small[data-v-4102aba4]{width:5rem;height:5rem;min-width:100px}.sponsorCard__tag[data-v-4102aba4]{height:1.5rem;width:100%;position:absolute;display:flex;justify-content:center;align-items:center;font-size:.75rem;--bg-opacity:1;background-color:#4c51bf;background-color:rgba(76,81,191,var(--bg-opacity));bottom:20px}",""]),t.exports=e},366:function(t,e,o){"use strict";o(350)},367:function(t,e,o){(e=o(17)(!1)).push([t.i,".sponsorCardCollection__cardContainer[data-v-9172f448]{display:flex;flex-wrap:wrap}.sponsorCardCollection__cardContainer>.sponsorCard[data-v-9172f448]{margin:0 0 60px;padding:5px}@media (min-width:415px){.sponsorCardCollection__cardContainer>.sponsorCard[data-v-9172f448]{margin:5px 15px 65px 5px}}.sponsorCardCollection__cardContainer>.sponsorCard[data-v-9172f448]:hover{cursor:pointer;box-sizing:content-box;margin:0 10px 60px 0}",""]),t.exports=e},368:function(t,e,o){"use strict";o(351)},369:function(t,e,o){(e=o(17)(!1)).push([t.i,".sponsorModal[data-v-6f998693]{display:flex;justify-content:center;align-items:center;position:fixed;top:0;left:0;width:100%;height:100vh;background-color:rgba(18,16,35,.6);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);z-index:10000}.lightBox[data-v-6f998693]{display:flex;flex-direction:column;padding:1rem 2rem;border-radius:1rem;border-width:4px;--border-opacity:1;border-color:#ecc94b;border-color:rgba(236,201,75,var(--border-opacity));width:95%;padding:32px 28px 28px 32px}@media (min-width:415px){.lightBox[data-v-6f998693]{width:66%;padding:60px 48px 48px 60px}}.lightBox[data-v-6f998693]{height:80%;background-color:#121023}.lightBox__closeButton[data-v-6f998693]{position:relative;display:flex;justify-content:flex-end;--text-opacity:1;color:#ecc94b;color:rgba(236,201,75,var(--text-opacity));cursor:pointer;top:-40px;right:-20px}.lightBox__title[data-v-6f998693]{display:flex;align-items:center}.lightBox__intro[data-v-6f998693]{display:flex;margin-bottom:1rem;overflow-y:scroll;white-space:pre-line}.lightBox__buttons[data-v-6f998693]{display:flex}",""]),t.exports=e},370:function(t,e,o){"use strict";o(352)},371:function(t,e,o){var n=o(17),r=o(372),l=o(373);e=n(!1);var c=r(l);e.push([t.i,'.page-home .page-homeLandingFocus:before{position:absolute;top:48px;left:0;z-index:-10;display:block;width:100vw;height:calc(100vh - 48px);content:"";background-image:url('+c+');background-position:50%;background-size:cover}.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.text-golden{color:#c2a53a}.bg-golden-primary{background:#c2a53a}.bg-dark-primary{background:#212121}.bg-dark-secondary{background-color:#2b2b2b}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),t.exports=e},372:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},373:function(t,e,o){t.exports=o.p+"img/page-home-background.fb609d9.png"},385:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-homeLandingFocus__image mx-12 md:mx-0"},[e("img",{attrs:{src:o(358),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"font-serif"},[e("div",{staticClass:"text-3xl lg:text-5xl"},[this._v("PyCon Taiwan 2021")]),this._v(" "),e("div",{staticClass:"text-2xl lg:text-4xl"},[this._v("10th Anniversary")]),this._v(" "),e("div",{staticClass:"text-xl lg:text-3xl"},[this._v("21 - 22 Aug. NTU")])])}],r=(o(38),o(22)),l=o(86),c=o(43),d=Object(c.a)({"en-us":{pyconWelcome:"Welcome to PyCon TW 2021",sponsor:"Sponsor Us",sponsorList:"Sponsors",sponsorUs:"Be a Sponsor"},"zh-hant":{pyconWelcome:"歡迎來到 PyCon TW 2021",sponsor:"贊助我們",sponsorList:"贊助夥伴",sponsorUs:"成為贊助夥伴"}}),f=o(342),m=o(344),x=o(343),h=o(346),v=o(347);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var y={i18n:d,name:"PageIndex",components:{TextButton:m.default,I18nPageWrapper:f.a,SponsorCard:x.default,SponsorCardCollection:h.default,SponsorModal:v.default},data:function(){return{isOpened:!1,selectedSponsor:{},volunteerFormUrl:"https://forms.gle/wuG2w42cbhamyGdv9"}},fetchOnServer:!1,computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)(["sponsorsData"])),created:function(){this.$store.dispatch("$getSponsorsData")},methods:{showModal:function(t){this.isOpened=!0,this.selectedSponsor=t},getAttributeByLocale:function(data,t){return data["".concat(t,"_").concat({"en-us":"en_us","zh-hant":"zh_hant"}[this.$i18n.locale])]}}},C=(o(370),o(4)),component=Object(C.a)(y,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page-home"},[o("div",{staticClass:"page-homeLandingFocus flex flex-col-reverse justify-center items-center px-8 py-12 md:items-stretch sm:px-20 md:px-32 md:py-24 md:flex-row lg:px-40"},[o("div",{staticClass:"page-homeLandingFocus__mobileButtons flex mt-8 md:hidden"},[o("text-button",{attrs:{to:"/sponsor"}},[t._v(t._s(t.$t("sponsor")))])],1),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"page-homeLandingFocus__context flex flex-col text-golden text-center md:text-left mb-4 ml-0 md:mb-0 md:ml-8"},[t._m(1),t._v(" "),o("div",{staticClass:"page-homeLandingFocus__desktopButtons hidden md:flex md:mt-8"},[o("text-button",{attrs:{to:"/sponsor"}},[t._v(t._s(t.$t("sponsor")))])],1)])]),t._v(" "),o("i18n-page-wrapper",{staticClass:"pt-12"},[o("h1",{staticClass:"text-yellow-500"},[t._v(t._s(t.$t("sponsorList")))]),t._v(" "),t._l(t.sponsorsData,(function(e,i){return o("sponsor-card-collection",{key:"index_sponsor_level_"+i,attrs:{"level-name":e.level_name}},t._l(e.sponsors,(function(e,n){return o("sponsor-card",{key:"index_sponsor_level_"+i+"_sponsor_"+n,attrs:{"logo-url":e.logo_url,tag:t.getAttributeByLocale(e,"subtitle")},nativeOn:{click:function(o){return t.showModal(e)}}})})),1)})),t._v(" "),o("div",{staticClass:"text-center"},[o("text-button",{attrs:{to:"/sponsor"}},[t._v(t._s(t.$t("sponsorUs")))])],1)],2),t._v(" "),o("sponsor-modal",{attrs:{context:t.selectedSponsor},model:{value:t.isOpened,callback:function(e){t.isOpened=e},expression:"isOpened"}})],1)}),n,!1,null,null,null);e.default=component.exports;installComponents(component,{TextButton:o(344).default,SponsorCard:o(343).default,SponsorCardCollection:o(346).default,SponsorModal:o(347).default})}}]);