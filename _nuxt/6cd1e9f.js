(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{460:function(t,o,c){var content=c(571);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(18).default)("645a3b07",content,!0,{sourceMap:!1})},476:function(t,o,c){"use strict";c.r(o);var e={name:"JobsCard",props:{sponsorName:{type:String,default:""},logoUrl:{type:String,default:""},active:{type:Boolean,default:!1}},computed:{classObject:function(){return{jobsCard:!0,"w-24":!0,"h-20":!0,"m-1":!0,"cursor-pointer":!this.active,"md:w-40":!0,"md:h-32":!0,"md:m-3":!0,"-active":this.active}}},methods:{onClick:function(t){this.$emit("click",t)}}},r=(c(570),c(6)),component=Object(r.a)(e,(function(){var t=this,o=t.$createElement,c=t._self._c||o;return c("div",{class:t.classObject,on:{click:t.onClick}},[c("img",{attrs:{src:t.logoUrl,alt:t.sponsorName}})])}),[],!1,null,"4ff555cb",null);o.default=component.exports},570:function(t,o,c){"use strict";c(460)},571:function(t,o,c){var e=c(17)((function(i){return i[1]}));e.push([t.i,".jobsCard[data-v-4ff555cb]{display:flex;border-radius:1rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));opacity:.2}.jobsCard.-active[data-v-4ff555cb],.jobsCard[data-v-4ff555cb]:hover{opacity:1}.jobsCard>img[data-v-4ff555cb]{width:100%;-o-object-fit:contain;object-fit:contain;border-radius:inherit}",""]),e.locals={},t.exports=e}}]);