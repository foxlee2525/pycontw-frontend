(window.webpackJsonp=window.webpackJsonp||[]).push([[61,10,15,23],{1034:function(t,e,n){"use strict";n.r(e);var o=n(81),r=Object(o.a)({"en-us":{title:"About",pageAbstract:["PyCon, also known as the Python Annual Conference, is the annual event of the global Python community.","PyCon is spontaneously organized by fellow locals, and now Taiwan has its own Python annual conference. This event aims to gather people who use Python in various fields in Taiwan to exchange their experiences, share the latest technological developments, and experience the unique enthusiasm of the community."],reason:"In addition to the speeches from the language features of Python to various application cases, we also attach great importance to the exchanges between participants and the possibility of cooperation between developers, providing a forum for entrepreneurs to exchange and discuss, and reach the community. The purpose of group skills and development.",reasonTitle:"{number} not to miss PyCon Taiwan",reasonNumber:"Four reasons",skill:"Python skills",speech:"Awesome speeches",share:"Share yourself",cooperation:"Look for cooperation",activityTitle:"What activities are there in the annual meeting?",kindsOFTalk:"{talkNumber} speeches",kindsOfActivity:"{activityNumber} activities",activityDesc:"There are a total of 3 speeches and 6 different activities in the annual meeting. It can be said to be very diverse, allowing you to absorb knowledge from the speech, and at the same time to meet many friends from various parties in the exchange activities.",activityDetails:["Speeches include: keynote speeches, general speeches, professional courses","Activities include: sprint, open space, lightning talk, JobFair, Poster Session, PyNight"],moreInfo:"If you want to learn more about each event or want to register for the above events, welcome to watch the agenda overview page.",og:{title:"About PyCon Taiwan",description:"About PyCon Taiwan"}},"zh-hant":{title:"關於",pageAbstract:["PyCon，亦即 Python 年會，是全球 Python 社群年度盛會。","PyCon 由各地同好自發籌辦，而現在台灣也有自己的 Python 年會了。這個活動旨在聚集台灣各領域應用 Python 的人，交流彼此的經驗心得，分享最新的技術發展，並親身體驗社群獨有的熱情。"],reasonTitle:"{number}不能錯過 PyCon Taiwan 的理由？",reasonNumber:"四個",reason:"年會除了有從 Python 的語言特性到各方面應用實例的精彩演講之外，我們也很重視與會者之間的交流以及促成開發者與贊助商合作可能，或提供創業者交流討論的園地，達到社群交流和發展的目的。",skill:"Python 技術分享",speech:"精彩出色的演講",share:"重視交流討論",cooperation:"促成合作的場域",activityTitle:"年會總共有哪些活動？",kindsOFTalk:"{talkNumber}種演講",kindsOfActivity:"{activityNumber}種交流活動",activityDesc:"年會總共有 3 種形式的演講與 6 種不同性質的交流活動。可以說是非常多元有趣，讓你可以從演講中吸取知識的同時，還能在交流活動中結識許多各方好友。",activityDetails:["演講包括：主題演講、一般演講、專業課程","交流活動包括：衝刺開發、開放空間、閃電秀、海報環節、JobFair、PyNight"],moreInfo:"若想要深入了解各活動或是想要報名以上活動，歡迎到議程總覽頁面觀看。",og:{title:"關於 PyCon Taiwan",description:"關於 PyCon Taiwan"}}}),c=n(522),d=n(538),l=n(519),m=n(541),h=n.n(m),f=n(753),v=n.n(f),x=n(754),y=n.n(x),w=n(755),_=n.n(w),k=n(756),C=n.n(k),P={i18n:r,name:"PageAbout",components:{I18nPageWrapper:c.default,Banner:d.default,CoreH1:l.default},data:function(){return{aboutBanner:h.a,introImgs:[{src:v.a,text:this.$i18n.t("skill")},{src:y.a,text:this.$i18n.t("speech")},{src:_.a,text:this.$i18n.t("share")},{src:C.a,text:this.$i18n.t("cooperation")}]}},methods:{getImgStyle:function(img){return{"background-image":"url(".concat(img,")"),"background-repeat":"no-repeat","background-position":"center center"}}},head:function(){return{title:this.$i18n.t("title"),meta:[{hid:"og:title",property:"og:title",content:this.$i18n.t("og.title")},{hid:"og:description",property:"og:description",content:this.$i18n.t("og.description")},{hid:"description",name:"description",content:this.$i18n.t("og.description")}]}}},T=(n(757),n(8)),component=Object(T.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("banner",[n("core-h1",{attrs:{title:t.$t("title")}}),t._v(" "),t._l(t.$t("pageAbstract"),(function(content,i){return n("p",{key:"abstract_"+i},[t._v("\n            "+t._s(content)+"\n        ")])}))],2),t._v(" "),n("i18n-page-wrapper",{attrs:{"use-bg-decoration":!1}},[n("i18n",{staticClass:"section-header",attrs:{path:"reasonTitle",tag:"p"},scopedSlots:t._u([{key:"number",fn:function(){return[n("span",{staticClass:"section-header section-header--highlight"},[t._v(t._s(t.$t("reasonNumber")))])]},proxy:!0}])}),t._v(" "),n("p",{staticClass:"section-description"},[t._v("\n            "+t._s(t.$t("reason"))+"\n        ")]),t._v(" "),n("div",{staticClass:"img-group"},t._l(t.introImgs,(function(img,i){return n("div",{key:"intro_img_"+i},[n("div",{staticClass:"img",style:t.getImgStyle(img.src)},[n("span",{staticClass:"img__text"},[t._v(t._s(img.text))])])])})),0),t._v(" "),n("p",{staticClass:"section-header"},[t._v("\n            "+t._s(t.$t("activityTitle"))+"\n        ")]),t._v(" "),n("p",{staticClass:"section-description"},[t._v("\n            "+t._s(t.$t("activityDesc"))+"\n        ")]),t._v(" "),n("div",{staticClass:"section-wrapper"},[n("i18n",{staticClass:"section-description",attrs:{path:"kindsOFTalk",tag:"span"},scopedSlots:t._u([{key:"talkNumber",fn:function(){return[n("span",{staticClass:"section-description section-description--highlight"},[t._v("3")])]},proxy:!0}])}),t._v(" "),n("span",{staticClass:"section-description section-description--highlight"},[t._v("+")]),t._v(" "),n("i18n",{staticClass:"section-description",attrs:{path:"kindsOfActivity",tag:"span"},scopedSlots:t._u([{key:"activityNumber",fn:function(){return[n("span",{staticClass:"section-description section-description--highlight"},[t._v("6")])]},proxy:!0}])})],1),t._v(" "),n("ul",{staticClass:"unordered-list"},t._l(t.$t("activityDetails"),(function(content,i){return n("li",{key:"activity_detail"+i},[n("p",{staticClass:"unordered-list__item"},[t._v(t._s(content))])])})),0),t._v(" "),n("p",{staticClass:"section-description"},[t._v("\n            "+t._s(t.$t("moreInfo"))+"\n        ")])],1)],1)}),[],!1,null,"590d0a4f",null);e.default=component.exports},515:function(t,e,n){var content=n(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("3cda5dc8",content,!0,{sourceMap:!1})},516:function(t,e,n){var content=n(521);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("042ecdbe",content,!0,{sourceMap:!1})},517:function(t,e,n){"use strict";n(515)},518:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,"h1[data-v-feb57f82]{padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;line-height:2;--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity));margin-bottom:0px}@media (min-width: 768px){h1[data-v-feb57f82]{margin-bottom:2.25rem}h1[data-v-feb57f82]{font-size:1.5rem;line-height:2rem}}h1[data-v-feb57f82]{text-shadow:#3643b5 2px 1px 0}",""]),o.locals={},t.exports=o},519:function(t,e,n){"use strict";n.r(e);var o={name:"CoreH1",props:{title:{type:String,required:!0},center:{type:Boolean,default:!1}},computed:{classObject:function(){return{"tracking-wider":"en-us"===this.$i18n.locale,"tracking-widest":"en-us"!==this.$i18n.locale,"text-center":this.center}}}},r=(n(517),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center font-serif"},[n("h1",{class:t.classObject},[t._v(t._s(t.title))])])}),[],!1,null,"feb57f82",null);e.default=component.exports},520:function(t,e,n){"use strict";n(516)},521:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,"h1[data-v-9ddb4acc]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-9ddb4acc]{margin-bottom:1.5rem;margin-top:5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-9ddb4acc]{margin-bottom:1rem;margin-top:2.5rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-9ddb4acc], p[data-v-9ddb4acc]{margin-bottom:1rem;margin-top:0.25rem;width:100%;text-align:justify}span.text-2s[data-v-9ddb4acc]{font-size:.625rem}ul[data-v-9ddb4acc]{margin-bottom:1.5rem}ul.list-disc[data-v-9ddb4acc]{padding-left:3rem}li[data-v-9ddb4acc]{margin-top:0.25rem;margin-bottom:0.25rem}.page-wrapper[data-v-9ddb4acc]{background-image:none;background-size:7%,5%,7%,7%,7%,7%,7%,5%,7%,7%,7%,7%;background-position:6% 100px, 4% 958px, 4% 1816px, 96% 529px, 96% 1125px, 96% 1721px, 4% 2674px, 4% 3532px, 4% 4390px, 96% 2317px, 96% 2913px, 96% 3509px;background-repeat:no-repeat}",""]),o.locals={},t.exports=o},522:function(t,e,n){"use strict";n.r(e);var o={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1},customY:{type:Boolean,default:!1},useBgDecoration:{type:Boolean,default:!0}},computed:{classObject:function(){return{"py-8":!this.customY,"md:py-20":!this.customY,"min-w-[272px]":!0,"mx-[24px]":!0,"w-auto":!0,"sm:mx-[32px]":!this.customX,"sm:w-auto":!this.customX,"md:mx-auto":!this.customX,"md:w-[706px]":!this.customX,"lg:mx-[168px]":!this.customX,"lg:w-auto":!this.customX,"xl:mx-auto":!this.customX,"xl:w-[1040px]":!this.customX}},pageWrapperClass:function(){return this.useBgDecoration?"bg-none lg:bg-wrapper bg-no-repeat bg-wrapper-top-left bg-wrapper-size":"bg-none"}}},r=(n(520),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.pageWrapperClass},[n("div",{class:t.classObject},[t._t("default")],2)])}),[],!1,null,"9ddb4acc",null);e.default=component.exports},525:function(t,e,n){var content=n(537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("b0f4efe6",content,!0,{sourceMap:!1})},536:function(t,e,n){"use strict";n(525)},537:function(t,e,n){var o=n(19),r=n(183),c=n(285),d=n(286),l=n(287),m=n(288),h=o((function(i){return i[1]})),f=r(c),v=r(d),x=r(l),y=r(m);h.push([t.i,".banner[data-v-acd58fb0]{display:flex;width:100%;align-items:center;justify-content:center;font-family:Noto Serif TC, -apple-system, serif;font-weight:600;background-image:url("+f+"),url("+v+"),url("+x+"),url("+y+");background-repeat:no-repeat;background-position:5% 135px, 50% 50%, 94% 99px, 85% 70%}@media (min-width: 768px){.banner[data-v-acd58fb0]{background-position:16% 37%, 50% 50%, 77% 30%, 72% 490px}}@media (min-width: 1194px){.banner[data-v-acd58fb0]{background-position:16% 37%, 50% 100%, 77% 30%, 72% 490px}}.banner[data-v-acd58fb0]{background-size:11%,72%,22%,7%}@media (min-width: 768px){.banner[data-v-acd58fb0]{background-size:6%,36%,9%,4%}}.banner[data-v-acd58fb0]{height:calc(100vh - 320px);min-height:560px}.banner-texts[data-v-acd58fb0]{margin-left:0.375rem;margin-right:0.375rem;text-align:center}@media (min-width: 768px){.banner-texts[data-v-acd58fb0]{margin-left:3.5rem;margin-right:3.5rem}}.banner-texts[data-v-acd58fb0]{max-width:930px}",""]),h.locals={},t.exports=h},538:function(t,e,n){"use strict";n.r(e);var o={name:"Banner"},r=(n(536),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("div",{staticClass:"banner-texts"},[t._t("default")],2)])}),[],!1,null,"acd58fb0",null);e.default=component.exports},541:function(t,e,n){t.exports=n.p+"img/Banner.62ce754.svg"},713:function(t,e,n){var content=n(758);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("ad58b2f2",content,!0,{sourceMap:!1})},753:function(t,e,n){t.exports=n.p+"img/Intro-1.83e9da1.png"},754:function(t,e,n){t.exports=n.p+"img/Intro-2.333d37f.png"},755:function(t,e,n){t.exports=n.p+"img/Intro-3.0d4643b.png"},756:function(t,e,n){t.exports=n.p+"img/Intro-4.15ee147.png"},757:function(t,e,n){"use strict";n(713)},758:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,".section-header[data-v-590d0a4f]{margin-top:0.75rem;margin-bottom:0.75rem;font-family:Noto Serif TC, -apple-system, serif;font-size:1rem;line-height:1.5rem;font-weight:700;--tw-text-opacity:1;color:rgba(240, 235, 245, var(--tw-text-opacity))}@media (min-width: 768px){.section-header[data-v-590d0a4f]{font-size:1.125rem;line-height:1.75rem}}.section-header--highlight[data-v-590d0a4f]{--tw-text-opacity:1;color:rgba(147, 135, 255, var(--tw-text-opacity))}.section-description[data-v-590d0a4f]{font-size:0.75rem;line-height:1rem}@media (min-width: 768px){.section-description[data-v-590d0a4f]{font-size:1rem;line-height:1.5rem}}.section-wrapper[data-v-590d0a4f]{margin-top:2.5rem;margin-bottom:2.5rem;display:flex;align-items:center;justify-content:space-evenly}.section-description--highlight[data-v-590d0a4f]{font-family:Noto Serif TC, -apple-system, serif;font-size:3rem;line-height:1}@media (min-width: 768px){.section-description--highlight[data-v-590d0a4f]{font-size:3.75rem;line-height:1}}.section-description--highlight[data-v-590d0a4f]{color:#7568f6;text-shadow:4px 6px 0 #4f4f4f;font-weight:700;margin:auto .5rem}.img-group[data-v-590d0a4f]{margin-left:0.5rem;margin-right:0.5rem;margin-top:1.75rem;margin-bottom:1.75rem;display:grid;grid-template-columns:repeat(2, minmax(0, 1fr))}@media (min-width: 768px){.img-group[data-v-590d0a4f]{margin-top:4rem;margin-bottom:4rem}.img-group[data-v-590d0a4f]{grid-template-columns:repeat(4, minmax(0, 1fr))}}.img[data-v-590d0a4f]{margin-top:0.75rem;margin-bottom:0.75rem;height:6rem;width:8rem}@media (min-width: 768px){.img[data-v-590d0a4f]{margin-left:0.5rem;margin-right:0.5rem}.img[data-v-590d0a4f]{height:10rem}.img[data-v-590d0a4f]{width:11rem}}.img[data-v-590d0a4f]{background-size:contain;background-repeat:no-repeat;display:flex;align-items:center;justify-content:center}.img__text[data-v-590d0a4f]{font-family:Noto Serif TC, -apple-system, serif;font-size:0.75rem;line-height:1rem;font-weight:700}@media (min-width: 768px){.img__text[data-v-590d0a4f]{font-size:1rem;line-height:1.5rem}}.unordered-list[data-v-590d0a4f]{margin:0px;font-size:0.75rem;line-height:1rem}@media (min-width: 768px){.unordered-list[data-v-590d0a4f]{margin:3rem}.unordered-list[data-v-590d0a4f]{list-style-type:disc}.unordered-list[data-v-590d0a4f]{font-size:1rem;line-height:1.5rem}}.unordered-list__item[data-v-590d0a4f]{--tw-text-opacity:1;color:rgba(147, 135, 255, var(--tw-text-opacity))}",""]),o.locals={},t.exports=o}}]);