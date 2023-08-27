(window.webpackJsonp=window.webpackJsonp||[]).push([[64,12,25],{1039:function(e,t,o){"use strict";o.r(t);var n=o(523),r=o(520),m=o(81),c={layout:function(e){return e.query.ccip?"ccip":"default"},i18n:Object(m.a)({"en-us":{title:"Staff",contents:[{key:"chairperson",teamName:"Chairperson"},{key:"everywhere",teamName:"Everywhere"},{key:"program",teamName:"Program"},{key:"pycast",teamName:"PyCast"},{key:"development_web",teamName:"Development (web)"},{key:"development_data",teamName:"Development (data)"},{key:"development_infra",teamName:"Development (infra)"},{key:"venue",teamName:"Venue"},{key:"sponsorship",teamName:"Marketing - Sponsorship"},{key:"marketing",teamName:"Marketing - Planning"},{key:"pr",teamName:"Marketing - Public Relations"},{key:"registration",teamName:"Registration"},{key:"recruitment",teamName:"Recruitment"},{key:"design",teamName:"Design"},{key:"uiux",teamName:"UI/UX"},{key:"finance",teamName:"Finance"},{key:"photography",teamName:"Photography"},{key:"pycast",teamName:"PyCast"},{key:"reviewer",teamName:"Review Committee"}],og:{title:"Staff",description:"Staff of PyCon Taiwan 2023"}},"zh-hant":{title:"工作人員",contents:[{key:"chairperson",teamName:"主席"},{key:"everywhere",teamName:"到處都看得到他們"},{key:"program",teamName:"議程"},{key:"pycast",teamName:"PyCast"},{key:"development_web",teamName:"開發（網站）"},{key:"development_data",teamName:"開發（資料）"},{key:"development_infra",teamName:"開發（基礎設施）"},{key:"venue",teamName:"場務"},{key:"sponsorship",teamName:"贊助執行"},{key:"marketing",teamName:"行銷企劃"},{key:"pr",teamName:"社群媒體"},{key:"registration",teamName:"註冊"},{key:"recruitment",teamName:"招募"},{key:"design",teamName:"設計"},{key:"uiux",teamName:"使用者介面/體驗"},{key:"finance",teamName:"財務"},{key:"photography",teamName:"紀錄"},{key:"reviewer",teamName:"審稿委員"}],og:{title:"工作人員",description:"PyCon Taiwan 2023 工作人員"}}}),name:"PageStaff",components:{I18nPageWrapper:n.default,CoreH1:r.default},data:function(){return{memberList:{chairperson:[{name:"Pochun",photo:"everywhere/Pochun.jpg"},{name:"Winnie",photo:"everywhere/Winnie.jpg"}],everywhere:[{name:"Joe",photo:"everywhere/joe.jpg"},{name:"TP Chung",photo:"everywhere/TP Chung.jpg"},{name:"Taihsiang Ho",photo:"everywhere/tai.jpg"}],program:[{name:"TengLin Yu",photo:"program/TengLin.jpg"},{name:"Andy",photo:"program/Andy.jpg"},{name:"JunWei Song",photo:"program/JunWeiSong.jpg"},{name:"Jordan",photo:"program/Jordan.jpg"},{name:"Kir Chou",photo:"reviewer/kirchou.jpg"},{name:"Shirley",photo:"program/Shirley.jpg"},{name:"Lance",photo:"program/Lance.jpg"},{name:"jimmyyeh",photo:"cat-smile.jpg"},{name:"Kuan",photo:"registration/Kuan.jpg"},{name:"Connie",photo:"program/Connie.jpg"},{name:"JennyChu",photo:"cat-smile.jpg"},{name:"啟軒",photo:"program/Chihsuan.jpg"},{name:"Justin",photo:"program/Justin.jpg"},{name:"Derick",photo:"program/Derick.jpg"},{name:"Jaihua",photo:"venue/Jaihua.jpg"},{name:"Yider",photo:"program/Yider.jpg"},{name:"Kazan",photo:"web/Kazan.jpg"},{name:"James",photo:"program/James.jpg"},{name:"Baron",photo:"cat-smile.jpg"},{name:"kunxian",photo:"cat-smile.jpg"},{name:"定容",photo:"cat-smile.jpg"},{name:"Lois",photo:"program/Lois.jpg"},{name:"petertc",photo:"program/petertc.jpg"},{name:"Cicilia",photo:"cat-smile.jpg"},{name:"TingYi",photo:"program/TingYi.jpg"}],pycast:[{name:"Benson",photo:"pycast/Benson.jpg"},{name:"JoJo",photo:"sponsorship/JoJo.jpg"},{name:"subird",photo:"cat-smile.jpg"},{name:"Kir",photo:"pycast/Kir.jpg"},{name:"Heidi",photo:"cat-smile.jpg"},{name:"愛德華橙",photo:"cat-smile.jpg"},{name:"Fish",photo:"venue/Fish.jpg"},{name:"Leila",photo:"recruitment/Leila.jpg"},{name:"Carol",photo:"pycast/Carol.jpg"},{name:"Tumi",photo:"marketing/Tumi.jpg"},{name:"Anan",photo:"design/Anan.jpg"},{name:"Weifan",photo:"cat-smile.jpg"},{name:"subird",photo:"cat-smile.jpg"},{name:"Heidi",photo:"cat-smile.jpg"},{name:"愛德華橙",photo:"cat-smile.jpg"},{name:"Tumi",photo:"marketing/Tumi.jpg"},{name:"Anan",photo:"design/Anan.jpg"}],development_web:[{name:"Josix",photo:"web/Josix.jpg"},{name:"Matt Wang",photo:"web/Matt Wang.jpg"},{name:"furecool",photo:"web/furecool.jpg"},{name:"Gin",photo:"web/Gin.jpg"},{name:"Sivan",photo:"web/Sivan.jpg"},{name:"Winnie",photo:"web/Winnie.jpg"},{name:"Yucheng",photo:"registration/yucheng.jpg"},{name:"David Lu",photo:"registration/David Lu.jpg"},{name:"Erik",photo:"web/Erik.jpg"},{name:"Tim",photo:"cat-smile.jpg"},{name:"Kazan",photo:"web/Kazan.jpg"},{name:"Sean",photo:"infra/Sean.jpg"},{name:"Ben",photo:"cat-smile.jpg"},{name:"Dawn",photo:"cat-smile.jpg"},{name:"Ian",photo:"cat-smile.jpg"}],development_data:[{name:"Henry",photo:"data/Henry.jpg"},{name:"David Jr",photo:"data/David Jr.jpg"},{name:"Shirley",photo:"data/Shirley.jpg"},{name:"LY",photo:"registration/LY.jpg"},{name:"Angus",photo:"data/Angus_Yang.jpg"},{name:"Kuan",photo:"registration/Kuan.jpg"},{name:"CHWan",photo:"data/Chao-Hung_Wan.jpg"},{name:"Albert",photo:"cat-smile.jpg"}],development_infra:[{name:"Josix",photo:"web/Josix.jpg"},{name:"LY",photo:"registration/LY.jpg"},{name:"Sean",photo:"infra/Sean.jpg"},{name:"Ben",photo:"cat-smile.jpg"},{name:"Tim",photo:"cat-smile.jpg"}],venue:[{name:"Fish",photo:"venue/Fish.jpg"},{name:"Ray",photo:"venue/Ray.jpg"},{name:"Derek",photo:"venue/Derek.jpg"},{name:"阿嘉",photo:"venue/阿嘉.jpg"},{name:"Alison",photo:"venue/Alison.jpg"},{name:"Lzt",photo:"cat-smile.jpg"},{name:"Mark",photo:"venue/Mark.jpg"},{name:"Juihsiang",photo:"venue/Juihsiang.jpg"},{name:"Huei Lin",photo:"venue/Huei Lin.jpg"},{name:"Jaihua",photo:"venue/Jaihua.jpg"},{name:"Matthew",photo:"venue/Matthew.jpg"},{name:"Lucas",photo:"venue/Lucas.jpg"},{name:"Jenny",photo:"venue/Jenny.jpg"},{name:"Shirley",photo:"venue/Shirley.jpg"},{name:"9ukei",photo:"cat-smile.jpg"},{name:"Luke",photo:"venue/Luke.jpg"},{name:"TN Lee",photo:"program/TN Lee.jpg"},{name:"sunfish",photo:"venue/sunfish.jpg"},{name:"Yoyo",photo:"venue/Yoyo.jpg"},{name:"JunWei Song",photo:"program/JunWeiSong.jpg"},{name:"EJ",photo:"cat-smile.jpg"},{name:"Melissa",photo:"cat-smile.jpg"},{name:"Evita",photo:"cat-smile.jpg"},{name:"Joe",photo:"cat-smile.jpg"},{name:"Kalvin",photo:"cat-smile.jpg"},{name:"Angus",photo:"data/Angus_Yang.jpg"},{name:"Yider",photo:"program/Yider.jpg"},{name:"鈺馨",photo:"venue/鈺馨.jpg"}],sponsorship:[{name:"Kevin",photo:"sponsorship/Kevin.jpg"},{name:"Crystal",photo:"sponsorship/Crystal.jpg"},{name:"Adrian",photo:"sponsorship/Adrian.jpg"},{name:"Kazan",photo:"sponsorship/Kazan.jpg"},{name:"JoJo",photo:"sponsorship/JoJo.jpg"},{name:"Enzo",photo:"cat-smile.jpg"},{name:"Allen",photo:"sponsorship/Allen.jpg"},{name:"建桐",photo:"cat-smile.jpg"},{name:"Phoebe",photo:"cat-smile.jpg"},{name:"Karen",photo:"cat-smile.jpg"},{name:"Riven",photo:"cat-smile.jpg"},{name:"Emma",photo:"sponsorship/Emma.jpg"},{name:"Jonathan",photo:"cat-smile.jpg"},{name:"Aiden",photo:"cat-smile.jpg"},{name:"Raymond",photo:"sponsorship/Raymond.jpg"}],marketing:[{name:"Tumi",photo:"marketing/Tumi.jpg"},{name:"Wei",photo:"marketing/Wei.jpg"},{name:"Gobby",photo:"marketing/Gobby.jpg"}],pr:[{name:"9ukei",photo:"cat-smile.jpg"},{name:"tai",photo:"everywhere/tai.jpg"},{name:"TN Lee",photo:"program/TN Lee.jpg"},{name:"JennyChu",photo:"cat-smile.jpg"},{name:"Leila",photo:"recruitment/Leila.jpg"},{name:"Fish",photo:"venue/Fish.jpg"},{name:"阿球",photo:"pr/阿球.jpg"},{name:"Wei",photo:"pr/Wei.jpg"},{name:"鈺馨",photo:"pr/鈺馨.jpg"}],registration:[{name:"David Lu",photo:"registration/David Lu.jpg"},{name:"Derick",photo:"registration/Derick.jpg"},{name:"Leila",photo:"recruitment/Leila.jpg"},{name:"Li-Ying",photo:"registration/LY.jpg"},{name:"弘哲",photo:"registration/twtrubiks.jpg"},{name:"Yucheng",photo:"registration/yucheng.jpg"},{name:"Kuan",photo:"registration/Kuan.jpg"},{name:"Ben",photo:"cat-smile.jpg"},{name:"阿嘉",photo:"registration/阿嘉.jpg"},{name:"Luke",photo:"venue/Luke.jpg"},{name:"Connie",photo:"registration/Connie.jpg"},{name:"GTB",photo:"registration/GTB.jpg"},{name:"Liam",photo:"cat-smile.jpg"}],recruitment:[{name:"Leila",photo:"recruitment/Leila.jpg"},{name:"David Lu",photo:"registration/David Lu.jpg"}],design:[{name:"Andy",photo:"design/Andy.jpg"},{name:"zoey",photo:"cat-smile.jpg"},{name:"Andy_cheif",photo:"cat-smile.jpg"},{name:"Carol Cho",photo:"design/Carol.jpg"},{name:"Ben aka 本本",photo:"cat-smile.jpg"},{name:"家宜",photo:"cat-smile.jpg"},{name:"Joanne",photo:"design/Joanne.jpg"},{name:"JY",photo:"design/JY.jpg"}],uiux:[{name:"Anan",photo:"uiux/Anan.jpg"},{name:"Chris",photo:"uiux/Chris.jpg"},{name:"MotoMo",photo:"uiux/MotoMo.jpg"},{name:"Nancy",photo:"uiux/Nancy.jpg"},{name:"Kim Chiu 詩芸",photo:"uiux/Kim Chiu 詩芸.jpg"},{name:"Zoie",photo:"uiux/Zoie.jpg"},{name:"Angela",photo:"cat-smile.jpg"}],finance:[{name:"Rock",photo:"finance/ROCK.jpg"},{name:"Leila",photo:"finance/Leila.jpg"}],photography:[{name:"Andy",photo:"photography/Andy.jpg"},{name:"ZHEN",photo:"cat-smile.jpg"},{name:"Ricky",photo:"cat-smile.jpg"},{name:"Rong",photo:"cat-smile.jpg"},{name:"月太",photo:"cat-smile.jpg"},{name:"橋毅",photo:"cat-smile.jpg"},{name:"Deimos",photo:"photography/Deimos.jpg"},{name:"小光",photo:"cat-smile.jpg"}],reviewer:[{name:"游騰林",photo:"program/TengLin.jpg"},{name:"Chun Yu Tseng",photo:"reviewer/Chun Yu Tseng.jpg"},{name:"Kir Chou",photo:"reviewer/kirchou.jpg"},{name:"Liang-Bo Wang",photo:"reviewer/Liang-Bo Wang.jpg"},{name:"Sammy Fung",photo:"reviewer/Sammy Fung.jpg"},{name:"Tim Hsu",photo:"reviewer/tim-hsu.jpg"},{name:"Wei Lin",photo:"reviewer/Wei Lin.jpg"},{name:"Yu-Hsun Lee",photo:"reviewer/Yu-Hsun Lee.jpg"},{name:"Yuan Chao",photo:"reviewer/Yuan Chao.jpg"},{name:"阿哲",photo:"reviewer/阿哲.jpg"},{name:"Cheng-Lung Sung",photo:"cat-smile.jpg"},{name:"Zong-han Xie",photo:"reviewer/zonghan.jpg"},{name:"candy02058912",photo:"cat-smile.jpg"},{name:"Shuhsi Lin",photo:"reviewer/shuhsi.jpg"},{name:"黃坤賢",photo:"program/坤賢.jpg"},{name:"郭學聰",photo:"reviewer/郭學聰.jpg"},{name:"Maurice Ling",photo:"cat-smile.jpg"},{name:"Stanley Huang",photo:"cat-smile.jpg"},{name:"sosorry",photo:"cat-smile.jpg"},{name:"Jian-Ming Huang",photo:"cat-smile.jpg"},{name:"Kuo-tung Kao",photo:"cat-smile.jpg"},{name:"劉純睿",photo:"cat-smile.jpg"},{name:"Taihsiang Ho",photo:"cat-smile.jpg"},{name:"Po-Chun Lu",photo:"cat-smile.jpg"},{name:"Keith Yang",photo:"reviewer/keith.jpg"},{name:"Max Lai",photo:"cat-smile.jpg"},{name:"PeterWolf",photo:"cat-smile.jpg"},{name:"Ing Wei Tang",photo:"reviewer/ingwei.jpg"},{name:"柯維然",photo:"cat-smile.jpg"},{name:"Winnie",photo:"program/Winnie.jpg"},{name:"Jordan",photo:"program/Jordan.jpg"},{name:"Louie Lu",photo:"cat-smile.jpg"},{name:"廖偉涵",photo:"cat-smile.jpg"},{name:"Kilik Kuo",photo:"cat-smile.jpg"},{name:"petertc",photo:"program/petertc.jpg"},{name:"Yu-Chen Shu",photo:"cat-smile.jpg"},{name:"JunWei Song",photo:"program/JunWeiSong.jpg"}]}}},head:function(){return{title:this.$i18n.t("title"),meta:[{hid:"og:title",property:"og:title",content:this.$i18n.t("og.title")},{hid:"og:description",property:"og:description",content:this.$i18n.t("og.description")},{hid:"description",name:"description",content:this.$i18n.t("og.description")}]}}},h=(o(953),o(7)),component=Object(h.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i18n-page-wrapper",[n("core-h1",{attrs:{title:e.$t("title")}}),e._v(" "),n("div",e._l(e.$t("contents"),(function(content,i){return n("div",{key:"staff_content_"+i,staticClass:"team"},[n("div",{staticClass:"teamName"},[e._v("\n                "+e._s(content.teamName)+"\n            ")]),e._v(" "),n("div",{staticClass:"staffGroup"},e._l(e.memberList[content.key],(function(t,r){return n("div",{key:"staff_members_"+r,staticClass:"staff"},[n("div",{staticClass:"staffPhoto"},[n("img",{attrs:{src:o(830)("./"+t.photo)}})]),e._v(" "),n("div",{staticClass:"staffName"},[e._v("\n                        "+e._s(t.name)+"\n                    ")])])})),0)])})),0)],1)}),[],!1,null,"659aa5b2",null);t.default=component.exports},516:function(e,t,o){var content=o(519);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(19).default)("3cda5dc8",content,!0,{sourceMap:!1})},517:function(e,t,o){var content=o(522);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(19).default)("042ecdbe",content,!0,{sourceMap:!1})},518:function(e,t,o){"use strict";o(516)},519:function(e,t,o){var n=o(18)((function(i){return i[1]}));n.push([e.i,"h1[data-v-feb57f82]{padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;line-height:2;--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity));margin-bottom:0px}@media (min-width: 768px){h1[data-v-feb57f82]{margin-bottom:2.25rem}h1[data-v-feb57f82]{font-size:1.5rem;line-height:2rem}}h1[data-v-feb57f82]{text-shadow:#3643b5 2px 1px 0}",""]),n.locals={},e.exports=n},520:function(e,t,o){"use strict";o.r(t);var n={name:"CoreH1",props:{title:{type:String,required:!0},center:{type:Boolean,default:!1}},computed:{classObject:function(){return{"tracking-wider":"en-us"===this.$i18n.locale,"tracking-widest":"en-us"!==this.$i18n.locale,"text-center":this.center}}}},r=(o(518),o(7)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"flex justify-center font-serif"},[o("h1",{class:e.classObject},[e._v(e._s(e.title))])])}),[],!1,null,"feb57f82",null);t.default=component.exports},521:function(e,t,o){"use strict";o(517)},522:function(e,t,o){var n=o(18)((function(i){return i[1]}));n.push([e.i,"h1[data-v-9ddb4acc]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-9ddb4acc]{margin-bottom:1.5rem;margin-top:5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-9ddb4acc]{margin-bottom:1rem;margin-top:2.5rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-9ddb4acc], p[data-v-9ddb4acc]{margin-bottom:1rem;margin-top:0.25rem;width:100%;text-align:justify}span.text-2s[data-v-9ddb4acc]{font-size:.625rem}ul[data-v-9ddb4acc]{margin-bottom:1.5rem}ul.list-disc[data-v-9ddb4acc]{padding-left:3rem}li[data-v-9ddb4acc]{margin-top:0.25rem;margin-bottom:0.25rem}.page-wrapper[data-v-9ddb4acc]{background-image:none;background-size:7%,5%,7%,7%,7%,7%,7%,5%,7%,7%,7%,7%;background-position:6% 100px, 4% 958px, 4% 1816px, 96% 529px, 96% 1125px, 96% 1721px, 4% 2674px, 4% 3532px, 4% 4390px, 96% 2317px, 96% 2913px, 96% 3509px;background-repeat:no-repeat}",""]),n.locals={},e.exports=n},523:function(e,t,o){"use strict";o.r(t);var n={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1},customY:{type:Boolean,default:!1},useBgDecoration:{type:Boolean,default:!0}},computed:{classObject:function(){return{"py-8":!this.customY,"md:py-20":!this.customY,"min-w-[272px]":!0,"mx-[24px]":!0,"w-auto":!0,"sm:mx-[32px]":!this.customX,"sm:w-auto":!this.customX,"md:mx-auto":!this.customX,"md:w-[706px]":!this.customX,"lg:mx-[168px]":!this.customX,"lg:w-auto":!this.customX,"xl:mx-auto":!this.customX,"xl:w-[1040px]":!this.customX}},pageWrapperClass:function(){return this.useBgDecoration?"bg-none lg:bg-wrapper bg-no-repeat bg-wrapper-top-left bg-wrapper-size":"bg-none"}}},r=(o(521),o(7)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:e.pageWrapperClass},[o("div",{class:e.classObject},[e._t("default")],2)])}),[],!1,null,"9ddb4acc",null);t.default=component.exports},721:function(e,t,o){var content=o(954);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(19).default)("6d19efcd",content,!0,{sourceMap:!1})},830:function(e,t,o){var map={"./cat-smile.jpg":831,"./data/Angus_Yang.jpg":832,"./data/Chao-Hung_Wan.jpg":833,"./data/David Jr.jpg":834,"./data/Henry.jpg":835,"./data/Shirley.jpg":836,"./design/Anan.jpg":837,"./design/Andy.jpg":838,"./design/Carol.jpg":839,"./design/JY.jpg":840,"./design/Joanne.jpg":841,"./everywhere/Pochun.jpg":842,"./everywhere/TP Chung.jpg":843,"./everywhere/Winnie.jpg":844,"./everywhere/joe.jpg":845,"./everywhere/tai.jpg":846,"./finance/Leila.jpg":847,"./finance/ROCK.jpg":848,"./infra/Sean.jpg":849,"./infra/josix.jpg":850,"./marketing/Gobby.jpg":851,"./marketing/Tumi.jpg":852,"./marketing/Wei.jpg":853,"./photography/Andy.jpg":854,"./photography/Deimos.jpg":855,"./pr/Wei.jpg":856,"./pr/鈺馨.jpg":857,"./pr/阿球.jpg":858,"./program/Andy.jpg":859,"./program/Chihsuan.jpg":860,"./program/Connie.jpg":861,"./program/Derick.jpg":862,"./program/James.jpg":863,"./program/Jordan.jpg":864,"./program/JunWeiSong.jpg":865,"./program/Justin.jpg":866,"./program/Kazan.jpg":867,"./program/Lance.jpg":868,"./program/Lois.jpg":869,"./program/Shirley.jpg":870,"./program/TN Lee.jpg":871,"./program/TengLin.jpg":872,"./program/TingYi.jpg":873,"./program/Winnie.jpg":874,"./program/Yider.jpg":875,"./program/jaihua.jpg":876,"./program/petertc.jpg":877,"./program/坤賢.jpg":878,"./pycast/Benson.jpg":879,"./pycast/Carol.jpg":880,"./pycast/Fish.jpg":881,"./pycast/JoJo.jpg":882,"./pycast/Kir.jpg":883,"./pycast/Leila.jpg":884,"./pycast/Weifan.jpg":885,"./recruitment/Leila.jpg":886,"./registration/Connie.jpg":887,"./registration/David Lu.jpg":888,"./registration/Derick.jpg":889,"./registration/GTB.jpg":890,"./registration/Kuan.jpg":891,"./registration/LY.jpg":892,"./registration/twtrubiks.jpg":893,"./registration/yucheng.jpg":894,"./registration/阿嘉.jpg":895,"./reviewer/Chun Yu Tseng.jpg":896,"./reviewer/Liang-Bo Wang.jpg":897,"./reviewer/Sammy Fung.jpg":898,"./reviewer/Wei Lin.jpg":899,"./reviewer/Yu-Hsun Lee.jpg":900,"./reviewer/Yuan Chao.jpg":901,"./reviewer/ingwei.jpg":902,"./reviewer/keith.jpg":903,"./reviewer/kirchou.jpg":904,"./reviewer/shuhsi.jpg":905,"./reviewer/tim-hsu.jpg":906,"./reviewer/zonghan.jpg":907,"./reviewer/郭學聰.jpg":908,"./reviewer/阿哲.jpg":909,"./smile.svg":910,"./sponsorship/Adrian.jpg":911,"./sponsorship/Allen.jpg":912,"./sponsorship/Crystal.jpg":913,"./sponsorship/Emma.jpg":914,"./sponsorship/JoJo.jpg":915,"./sponsorship/Kazan.jpg":916,"./sponsorship/Kevin.jpg":917,"./sponsorship/Raymond.jpg":918,"./uiux/Anan.jpg":919,"./uiux/Chris.jpg":920,"./uiux/Kim Chiu 詩芸.jpg":921,"./uiux/MotoMo.jpg":922,"./uiux/Nancy.jpg":923,"./uiux/Zoie.jpg":924,"./venue/Alison.jpg":925,"./venue/Derek.jpg":926,"./venue/Fish.jpg":927,"./venue/Huei Lin.jpg":928,"./venue/Jaihua.jpg":929,"./venue/Jenny.jpg":930,"./venue/Juihsiang.jpg":931,"./venue/Lucas.jpg":932,"./venue/Luke.jpg":933,"./venue/Mark.jpg":934,"./venue/Matthew.jpg":935,"./venue/Ray.jpg":936,"./venue/Shirley.jpg":937,"./venue/Yoyo.jpg":938,"./venue/sunfish.jpg":939,"./venue/鈺馨.jpg":940,"./venue/阿嘉.jpg":941,"./web/David Lu.jpg":942,"./web/Erik.jpg":943,"./web/Gin.jpg":944,"./web/Ian.jpg":945,"./web/Josix.jpg":946,"./web/Kazan.jpg":947,"./web/LY.jpg":948,"./web/Matt Wang.jpg":949,"./web/Sivan.jpg":950,"./web/Winnie.jpg":951,"./web/furecool.jpg":952};function n(e){var t=r(e);return o(t)}function r(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=r,e.exports=n,n.id=830},831:function(e,t,o){e.exports=o.p+"img/cat-smile.87b0f81.jpg"},832:function(e,t,o){e.exports=o.p+"img/Angus_Yang.c1ff672.jpg"},833:function(e,t,o){e.exports=o.p+"img/Chao-Hung_Wan.ec88f7d.jpg"},834:function(e,t,o){e.exports=o.p+"img/David Jr.8d0d55c.jpg"},835:function(e,t,o){e.exports=o.p+"img/Henry.f86a82c.jpg"},836:function(e,t,o){e.exports=o.p+"img/Shirley.0007aae.jpg"},837:function(e,t,o){e.exports=o.p+"img/Anan.73fcc71.jpg"},838:function(e,t,o){e.exports=o.p+"img/Andy.1ce1175.jpg"},839:function(e,t,o){e.exports=o.p+"img/Carol.de8e6ac.jpg"},840:function(e,t,o){e.exports=o.p+"img/JY.b899116.jpg"},841:function(e,t,o){e.exports=o.p+"img/Joanne.580dd74.jpg"},842:function(e,t,o){e.exports=o.p+"img/Pochun.e7c68df.jpg"},843:function(e,t,o){e.exports=o.p+"img/TP Chung.4d55896.jpg"},844:function(e,t,o){e.exports=o.p+"img/Winnie.0af995d.jpg"},845:function(e,t,o){e.exports=o.p+"img/joe.3aede2f.jpg"},846:function(e,t,o){e.exports=o.p+"img/tai.4c6bc1c.jpg"},847:function(e,t,o){e.exports=o.p+"img/Leila.707cb24.jpg"},848:function(e,t,o){e.exports=o.p+"img/ROCK.591bb5c.jpg"},849:function(e,t,o){e.exports=o.p+"img/Sean.b5a7ddc.jpg"},850:function(e,t,o){e.exports=o.p+"img/josix.7f496cc.jpg"},851:function(e,t,o){e.exports=o.p+"img/Gobby.543ff70.jpg"},852:function(e,t,o){e.exports=o.p+"img/Tumi.e5bbf7b.jpg"},853:function(e,t,o){e.exports=o.p+"img/Wei.e1cb1be.jpg"},854:function(e,t,o){e.exports=o.p+"img/Andy.1ce1175.jpg"},855:function(e,t,o){e.exports=o.p+"img/Deimos.e00e5ae.jpg"},856:function(e,t,o){e.exports=o.p+"img/Wei.485b223.jpg"},857:function(e,t,o){e.exports=o.p+"img/鈺馨.2df2c4a.jpg"},858:function(e,t,o){e.exports=o.p+"img/阿球.3feff71.jpg"},859:function(e,t,o){e.exports=o.p+"img/Andy.162e7e1.jpg"},860:function(e,t,o){e.exports=o.p+"img/Chihsuan.db1a67b.jpg"},861:function(e,t,o){e.exports=o.p+"img/Connie.1aa6243.jpg"},862:function(e,t,o){e.exports=o.p+"img/Derick.79306cd.jpg"},863:function(e,t,o){e.exports=o.p+"img/James.1a63620.jpg"},864:function(e,t,o){e.exports=o.p+"img/Jordan.af000ff.jpg"},865:function(e,t,o){e.exports=o.p+"img/JunWeiSong.4b98a2c.jpg"},866:function(e,t,o){e.exports=o.p+"img/Justin.dec1f3d.jpg"},867:function(e,t,o){e.exports=o.p+"img/Kazan.60134f3.jpg"},868:function(e,t,o){e.exports=o.p+"img/Lance.4ff7e59.jpg"},869:function(e,t,o){e.exports=o.p+"img/Lois.eccaf01.jpg"},870:function(e,t,o){e.exports=o.p+"img/Shirley.0007aae.jpg"},871:function(e,t,o){e.exports=o.p+"img/TN Lee.8801592.jpg"},872:function(e,t,o){e.exports=o.p+"img/TengLin.b4dbd84.jpg"},873:function(e,t,o){e.exports=o.p+"img/TingYi.12001f0.jpg"},874:function(e,t,o){e.exports=o.p+"img/Winnie.7ad6625.jpg"},875:function(e,t,o){e.exports=o.p+"img/Yider.24a778a.jpg"},876:function(e,t,o){e.exports=o.p+"img/jaihua.05456c0.jpg"},877:function(e,t,o){e.exports=o.p+"img/petertc.cc52053.jpg"},878:function(e,t,o){e.exports=o.p+"img/坤賢.4aa2306.jpg"},879:function(e,t,o){e.exports=o.p+"img/Benson.2148c59.jpg"},880:function(e,t,o){e.exports=o.p+"img/Carol.de8e6ac.jpg"},881:function(e,t,o){e.exports=o.p+"img/Fish.25002ac.jpg"},882:function(e,t,o){e.exports=o.p+"img/JoJo.0af36f3.jpg"},883:function(e,t,o){e.exports=o.p+"img/Kir.3d95ac8.jpg"},884:function(e,t,o){e.exports=o.p+"img/Leila.707cb24.jpg"},885:function(e,t,o){e.exports=o.p+"img/Weifan.a2304a0.jpg"},886:function(e,t,o){e.exports=o.p+"img/Leila.707cb24.jpg"},887:function(e,t,o){e.exports=o.p+"img/Connie.1aa6243.jpg"},888:function(e,t,o){e.exports=o.p+"img/David Lu.e9d556b.jpg"},889:function(e,t,o){e.exports=o.p+"img/Derick.79306cd.jpg"},890:function(e,t,o){e.exports=o.p+"img/GTB.06ee555.jpg"},891:function(e,t,o){e.exports=o.p+"img/Kuan.da14897.jpg"},892:function(e,t,o){e.exports=o.p+"img/LY.b704873.jpg"},893:function(e,t,o){e.exports=o.p+"img/twtrubiks.5a7126a.jpg"},894:function(e,t,o){e.exports=o.p+"img/yucheng.657d9c5.jpg"},895:function(e,t,o){e.exports=o.p+"img/阿嘉.5ea5d6d.jpg"},896:function(e,t,o){e.exports=o.p+"img/Chun Yu Tseng.45b29a2.jpg"},897:function(e,t,o){e.exports=o.p+"img/Liang-Bo Wang.aa5145f.jpg"},898:function(e,t,o){e.exports=o.p+"img/Sammy Fung.8b9855f.jpg"},899:function(e,t,o){e.exports=o.p+"img/Wei Lin.f776793.jpg"},900:function(e,t,o){e.exports=o.p+"img/Yu-Hsun Lee.6a6020f.jpg"},901:function(e,t,o){e.exports=o.p+"img/Yuan Chao.8dbb6a1.jpg"},902:function(e,t,o){e.exports=o.p+"img/ingwei.d509821.jpg"},903:function(e,t,o){e.exports=o.p+"img/keith.2ba89d8.jpg"},904:function(e,t,o){e.exports=o.p+"img/kirchou.b2bfaad.jpg"},905:function(e,t,o){e.exports=o.p+"img/shuhsi.5efac5e.jpg"},906:function(e,t,o){e.exports=o.p+"img/tim-hsu.8c07630.jpg"},907:function(e,t,o){e.exports=o.p+"img/zonghan.44470fc.jpg"},908:function(e,t,o){e.exports=o.p+"img/郭學聰.5921701.jpg"},909:function(e,t,o){e.exports=o.p+"img/阿哲.d1e82ad.jpg"},910:function(e,t,o){e.exports=o.p+"img/smile.b45d768.svg"},911:function(e,t,o){e.exports=o.p+"img/Adrian.7ce34bb.jpg"},912:function(e,t,o){e.exports=o.p+"img/Allen.fda6583.jpg"},913:function(e,t,o){e.exports=o.p+"img/Crystal.e98193d.jpg"},914:function(e,t,o){e.exports=o.p+"img/Emma.c6de4ab.jpg"},915:function(e,t,o){e.exports=o.p+"img/JoJo.0af36f3.jpg"},916:function(e,t,o){e.exports=o.p+"img/Kazan.60134f3.jpg"},917:function(e,t,o){e.exports=o.p+"img/Kevin.15230cc.jpg"},918:function(e,t,o){e.exports=o.p+"img/Raymond.e44d7f9.jpg"},919:function(e,t,o){e.exports=o.p+"img/Anan.73fcc71.jpg"},920:function(e,t,o){e.exports=o.p+"img/Chris.def5260.jpg"},921:function(e,t,o){e.exports=o.p+"img/Kim Chiu 詩芸.9ed06cc.jpg"},922:function(e,t,o){e.exports=o.p+"img/MotoMo.c072355.jpg"},923:function(e,t,o){e.exports=o.p+"img/Nancy.6140880.jpg"},924:function(e,t,o){e.exports=o.p+"img/Zoie.981be6c.jpg"},925:function(e,t,o){e.exports=o.p+"img/Alison.5c886ac.jpg"},926:function(e,t,o){e.exports=o.p+"img/Derek.931bf8d.jpg"},927:function(e,t,o){e.exports=o.p+"img/Fish.25002ac.jpg"},928:function(e,t,o){e.exports=o.p+"img/Huei Lin.a71d093.jpg"},929:function(e,t,o){e.exports=o.p+"img/Jaihua.05456c0.jpg"},930:function(e,t,o){e.exports=o.p+"img/Jenny.436fa0b.jpg"},931:function(e,t,o){e.exports=o.p+"img/Juihsiang.3dcd1a6.jpg"},932:function(e,t,o){e.exports=o.p+"img/Lucas.d15597a.jpg"},933:function(e,t,o){e.exports=o.p+"img/Luke.3beba57.jpg"},934:function(e,t,o){e.exports=o.p+"img/Mark.9086011.jpg"},935:function(e,t,o){e.exports=o.p+"img/Matthew.e859345.jpg"},936:function(e,t,o){e.exports=o.p+"img/Ray.3360750.jpg"},937:function(e,t,o){e.exports=o.p+"img/Shirley.0007aae.jpg"},938:function(e,t,o){e.exports=o.p+"img/Yoyo.94cbb38.jpg"},939:function(e,t,o){e.exports=o.p+"img/sunfish.1795fcc.jpg"},940:function(e,t,o){e.exports=o.p+"img/鈺馨.2df2c4a.jpg"},941:function(e,t,o){e.exports=o.p+"img/阿嘉.5ea5d6d.jpg"},942:function(e,t,o){e.exports=o.p+"img/David Lu.e9d556b.jpg"},943:function(e,t,o){e.exports=o.p+"img/Erik.ee87aa0.jpg"},944:function(e,t,o){e.exports=o.p+"img/Gin.c263d22.jpg"},945:function(e,t,o){e.exports=o.p+"img/Ian.c5dc9dd.jpg"},946:function(e,t,o){e.exports=o.p+"img/Josix.44ccc3a.jpg"},947:function(e,t,o){e.exports=o.p+"img/Kazan.60134f3.jpg"},948:function(e,t,o){e.exports=o.p+"img/LY.b704873.jpg"},949:function(e,t,o){e.exports=o.p+"img/Matt Wang.c80ff6d.jpg"},950:function(e,t,o){e.exports=o.p+"img/Sivan.123b04f.jpg"},951:function(e,t,o){e.exports=o.p+"img/Winnie.5b010ef.jpg"},952:function(e,t,o){e.exports=o.p+"img/furecool.df43ee1.jpg"},953:function(e,t,o){"use strict";o(721)},954:function(e,t,o){var n=o(18)((function(i){return i[1]}));n.push([e.i,".team[data-v-659aa5b2]{margin-bottom:3rem}.teamName[data-v-659aa5b2]{margin-bottom:2.5rem;font-family:Noto Serif TC, -apple-system, serif;font-size:1rem;line-height:1.5rem;font-weight:700;--tw-text-opacity:1;color:rgba(147, 135, 255, var(--tw-text-opacity))}@media (min-width: 640px){.teamName[data-v-659aa5b2]{font-size:24px}}.staffGroup[data-v-659aa5b2]{display:grid;grid-template-columns:repeat(3, minmax(0, 1fr))}@media (min-width: 640px){.staffGroup[data-v-659aa5b2]{grid-template-columns:repeat(4, minmax(0, 1fr))}}@media (min-width: 768px){.staffGroup[data-v-659aa5b2]{grid-template-columns:repeat(4, minmax(0, 1fr))}}@media (min-width: 1194px){.staffGroup[data-v-659aa5b2]{grid-template-columns:repeat(5, minmax(0, 1fr))}}@media (min-width: 1440px){.staffGroup[data-v-659aa5b2]{grid-template-columns:repeat(6, minmax(0, 1fr))}}@media (min-width: 1600px){.staffGroup[data-v-659aa5b2]{grid-template-columns:repeat(8, minmax(0, 1fr))}}.staffGroup[data-v-659aa5b2]{-moz-column-gap:1rem;column-gap:1rem;row-gap:2rem}@media (min-width: 768px){.staffGroup[data-v-659aa5b2]{-moz-column-gap:2rem;column-gap:2rem}.staffGroup[data-v-659aa5b2]{row-gap:1rem}}.staffGroup[data-v-659aa5b2]{margin-left:0.125rem}@media (min-width: 1194px){.staffGroup[data-v-659aa5b2]{margin-left:3.5rem}}.staffPhoto[data-v-659aa5b2], .staffPhoto0[data-v-659aa5b2], .staffPhoto1[data-v-659aa5b2], .staffPhoto2[data-v-659aa5b2], .staffPhoto3[data-v-659aa5b2], .staffPhoto4[data-v-659aa5b2], .staffPhoto5[data-v-659aa5b2], .staffPhoto6[data-v-659aa5b2]{position:relative;padding-bottom:calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%)}.staffPhoto > *[data-v-659aa5b2], .staffPhoto0 > *[data-v-659aa5b2], .staffPhoto1 > *[data-v-659aa5b2], .staffPhoto2 > *[data-v-659aa5b2], .staffPhoto3 > *[data-v-659aa5b2], .staffPhoto4 > *[data-v-659aa5b2], .staffPhoto5 > *[data-v-659aa5b2], .staffPhoto6 > *[data-v-659aa5b2]{position:absolute;height:100%;width:100%;top:0;right:0;bottom:0;left:0}.staffPhoto[data-v-659aa5b2]{margin-bottom:0.75rem;--tw-aspect-w:1;--tw-aspect-h:1;width:100%}.staffPhoto img[data-v-659aa5b2]{border-radius:9999px;-o-object-fit:cover;object-fit:cover}.staffName[data-v-659aa5b2]{font-family:Noto Serif TC, -apple-system, serif;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}@media (min-width: 768px){.staffName[data-v-659aa5b2]{font-size:0.875rem;line-height:1.25rem}}.staffName[data-v-659aa5b2]{padding:0.125rem;text-align:center}",""]),n.locals={},e.exports=n}}]);