(function(){var e={9776:function(e,a,t){"use strict";var n=t(9242),r=t(3396),s=t(7139);const i={key:3,class:"web-iframe",src:"/web/index.html",frameborder:"0"};function o(e,a,t,n,o,l){const c=(0,r.up)("Header"),u=(0,r.up)("MoreMenuPopup");return(0,r.wg)(),(0,r.iD)(r.HY,null,[e.isWeb?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(c,{key:0,showRightPopup:()=>e.$refs.MoreMenuPopup.open()},null,8,["showRightPopup"])),e.isWeb?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(u,{key:1,ref:"MoreMenuPopup"},null,512)),e.isWeb?(0,r.kq)("",!0):((0,r.wg)(!0),(0,r.iD)(r.HY,{key:2},(0,r.Ko)(e.components,(({name:e,isPlay:a},t)=>((0,r.wg)(),(0,r.j4)((0,r.LL)(e),{key:t,ref_for:!0,ref:e,isPlay:a,class:(0,s.C_)({"component-container":!0,"component-no-play":!a})},null,8,["isPlay","class"])))),128)),e.isWeb?((0,r.wg)(),(0,r.iD)("iframe",i)):(0,r.kq)("",!0)],64)}var l=t(4870);const c=(0,l.iH)(0),u=(0,l.iH)(0);var p=(0,r.aZ)({name:"App",provide:{viewMainTop:c,viewMainHeight:u},computed:{viewMainTop:()=>c,viewMainHeight:()=>u,isWeb:()=>window.isWeb},data(){return{components:[{name:"Welcome",isPlay:!0},{name:"Story",isPlay:!0},{name:"StarDuke",isPlay:!0},{name:"Nft",isPlay:!0},{name:"Tokenomics",isPlay:!0},{name:"Features",isPlay:!0},{name:"OfficalPartners",isPlay:!0},{name:"RoadMap",isPlay:!0},{name:"Footer",isPlay:!0}]}},mounted(){console.log("offsetTop",this),u.value=document.body.offsetHeight,this.initScrollListener()},methods:{initScrollListener(){const e=e=>{let a=!1;a||(window.requestAnimationFrame((()=>{c.value=e.target.scrollTop,console.clear(),this.components.forEach((({name:e},a)=>{if(this.$refs&&this.$refs[e]){const t=this.$refs[e][0].$el.offsetTop+u.value/5,n=this.$refs[e][0].$el.offsetTop+this.$refs[e][0].$el.offsetHeight;let r=c.value+u.value>t&&c.value<n;console.log("can i paly?",e,r,`viewMainTop: ${c.value}`,`viewMainHeight: ${u.value}`,`start: ${t}`,`end: ${n}`),-1!=["Header","Footer","MoreMenuPopup"].indexOf(e)&&(r=!0),this.components[a].isPlay=r}})),a=!1})),a=!0)};this.$el.parentElement.onscroll=e}}}),m=t(89);const g=(0,m.Z)(p,[["render",o]]);var d=g,f=(t(3924),t(5110),t(4609)),v=t.n(f),x=t(8420),W=t.n(x),P={install(e){console.log("requireBasic",e);const a=t(254);a.keys().forEach((t=>{const n=a(t),r=v()(W()(t.split("/").pop()?.replace(/\.\w+$/,"")));e.component(r,n.default||n)}))}};window.isWeb=!1,/Mobi|Android|iPhone/i.test(navigator.userAgent)||navigator.userAgent.match(/Mobi/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/iPhone/i)||(window.isWeb=!0);const k=(0,n.ri)(d);k.use(P),k.mount("#app"),window.context=k},3924:function(){"use strict";const e=16;function a(){const a=document.documentElement.clientWidth/375;document.documentElement.style.fontSize=e*Math.min(a,2)+"px"}a(),window.onresize=function(){a()}},9273:function(e,a,t){"use strict";t.r(a);var n=t(3396),r=t(4870),s=t(216);const i=(0,r.iH)(!1);a["default"]=(0,n.aZ)({props:["content"],methods:{open(){i.value=!0}},setup(e){const a=[{lable:"GAME",url:"http://game.starduke.io"},{lable:"MARKET",url:"http://game.starduke.io/h5/#/pages/trading/trading"},{lable:"SDK FARM",url:"#"},{lable:"LIQUIDITY",url:"#"},{lable:"DAO",url:"#"}],t=(0,r.iH)(NaN);return()=>(0,n.Wm)(s.G,{class:"more-menu-popup-wrapper",show:i.value,position:"right"},{default:()=>[(0,n.Wm)("div",{class:"popup-header"},[(0,n.Wm)("div",{class:"close-button"},[(0,n.Wm)("img",{class:"close-button-bg",src:"/images/MoreMenuPopup/CloseBg.png",alt:"",srcset:"/images/MoreMenuPopup/CloseBg@2x.png 2x,/images/MoreMenuPopup/CloseBg@3x.png 3x",onClick:()=>i.value=!1},null),(0,n.Wm)("img",{class:"close-button-x",src:"/images/MoreMenuPopup/CloseX.png",alt:"",srcset:"/images/MoreMenuPopup/CloseX@2x.png 2x,/images/MoreMenuPopup/CloseX@3x.png 3x",onClick:()=>i.value=!1},null)])]),(0,n.Wm)("div",{class:"menu-item-list"},[a.map(((e,a)=>(0,n.Wm)("div",{class:{"menu-item":!0,active:a===t.value},onClick:()=>{t.value=a,location.href=e.url}},[(0,n.Wm)("span",null,[e.lable]),(0,n.Wm)("img",{src:"/images/MoreMenuPopup/MenuItemActiveLine.png",alt:"",srcset:"/images/MoreMenuPopup/MenuItemActiveLine@3x.png 2x,/images/MoreMenuPopup/MenuItemActiveLine@3x.png 3x"},null)])))])]})}})},9005:function(e,a,t){"use strict";t.r(a);var n=t(3396);a["default"]=(0,n.aZ)({setup(){return()=>(0,n.Wm)("div",{class:"foolter-container"},[(0,n.Wm)("div",{class:"link-list-container"},[(0,n.Wm)("div",{class:"link-button",onClick:()=>location.href="https://docs.starduke.io/"},[(0,n.Wm)("span",null,[(0,n.Uk)("ABOUT US")])]),(0,n.Wm)("div",{class:"link-button"},[(0,n.Wm)("span",null,[(0,n.Uk)("VULNERABILITY BOUNTY")])]),(0,n.Wm)("div",{class:"link-button",onClick:()=>location.href="https://docs.starduke.io/"},[(0,n.Wm)("span",null,[(0,n.Uk)("Q&A")])]),(0,n.Wm)("div",{class:"link-button"},[(0,n.Wm)("span",null,[(0,n.Uk)("AUDIT")])])]),(0,n.Wm)("div",{class:"copyright-container"},[(0,n.Wm)("span",null,[(0,n.Uk)("Copyright © 2022.AII Rights Reserved")])])])}})},2186:function(e,a,t){"use strict";t.r(a);var n=t(3396);a["default"]=(0,n.aZ)({props:["showRightPopup"],setup(e){return()=>(0,n.Wm)("div",{class:"header-wrapper"},[(0,n.Wm)((0,n.up)("logo"),null,null),(0,n.Wm)("div",{class:"empty-block"},null),(0,n.Wm)((0,n.up)("start-button"),{onClick:()=>location.href="http://game.starduke.io"},null),(0,n.Wm)((0,n.up)("more-button"),{onClick:e.showRightPopup},null)])}})},3506:function(e,a,t){"use strict";t.r(a);var n=t(3396);a["default"]=(0,n.aZ)({setup(){return()=>(0,n.Wm)("div",{class:"logo-wrapper"},[(0,n.Wm)("img",{src:"/images/HorizontalStarDukeLogo/HorizontalStarDukeLogo.png",alt:"",srcset:"/images/HorizontalStarDukeLogo/HorizontalStarDukeLogo@2x.png 2x,/images/HorizontalStarDukeLogo/HorizontalStarDukeLogo@3x.png 3x"},null)])}})},1254:function(e,a,t){"use strict";t.r(a);var n=t(3396);a["default"]=(0,n.aZ)({setup(){return()=>(0,n.Wm)("div",{class:"more-button-wrapper"},[(0,n.Wm)("img",{src:"/images/HeaderMoreButton/HeaderMoreButton.png",alt:"",srcset:"/images/HeaderMoreButton/HeaderMoreButton@2x.png 2x,/images/HeaderMoreButton/HeaderMoreButton@3x.png 3x"},null)])}})},2354:function(e,a,t){"use strict";t.r(a);var n=t(3396);a["default"]=(0,n.aZ)({setup(){return()=>(0,n.Wm)("div",{class:"start-button-wrapper"},[(0,n.Wm)("img",{src:"/images/HeaderStartButton/HeaderStartButton.png",alt:"",srcset:"/images/HeaderStartButton/HeaderStartButton@2x.png 2x,/images/HeaderStartButton/HeaderStartButton@3x.png 3x"},null),(0,n.Wm)("span",null,[(0,n.Uk)("START")])])}})},5270:function(e,a,t){"use strict";t.r(a);var n=t(3396);a["default"]=(0,n.aZ)({setup(){return()=>(0,n.Wm)("div",{class:"welcome-wrapper"},[(0,n.Wm)((0,n.up)("banner"),{src:"/images/WelcomeBanner/WelcomeBanner.png",srcset:"/images/WelcomeBanner/WelcomeBanner@2x.png 2x,/images/WelcomeBanner/WelcomeBanner@3x.png"},null),(0,n.Wm)((0,n.up)("banner-description"),null,null),(0,n.Wm)((0,n.up)("enter-button"),null,null)])}})},4819:function(e,a,t){"use strict";t.r(a);var n=t(3396);a["default"]=(0,n.aZ)({setup(){return()=>(0,n.Wm)("div",{class:"banner-description-wrapper"},[(0,n.Wm)("span",{class:"large-description"},[(0,n.Uk)("WELCOME TO STAR DUKE")]),(0,n.Wm)("span",{class:"normal-description"},[(0,n.Uk)("A PLAY TO EARN GAME")]),(0,n.Wm)("span",{class:"normal-description"},[(0,n.Uk)("BASED ON BLOCKCHAIN")])])}})},3498:function(e,a,t){"use strict";t.r(a);var n=t(3396);a["default"]=(0,n.aZ)({setup(){return()=>(0,n.Wm)("div",{class:"enter-button-wrapper",onClick:()=>location.href="http://game.starduke.io/h5/#/pages/blind/blind"},[(0,n.Wm)("img",{src:"/images/WelcomeEnterButton/WelcomeEnterButton.png",alt:"",srcset:"/images/WelcomeEnterButton/WelcomeEnterButton@2x.png 2x,/images/WelcomeEnterButton/WelcomeEnterButton@3x.png 3x"},null),(0,n.Wm)("span",{class:"lable"},[(0,n.Uk)("PURCHASE MYSTERY BOX")])])}})},9751:function(e,a,t){"use strict";t.r(a);var n=t(3396);a["default"]=(0,n.aZ)({setup(){return()=>(0,n.Wm)("div",{class:"story-wrapper"},[(0,n.Wm)((0,n.up)("basic-title"),{content:"STORY"},null),(0,n.Wm)((0,n.up)("description"),{content:"In the future, the earth environment deteriorates \nand is no longer suitable for human habitation. \nMany countries jointly set up an organization for \nouter space exploration to search for a planet \nsuitable for the continuation\nof human civilization."},null),(0,n.Wm)((0,n.up)("basic-tip"),{class:"basic-tip-container",content:"A decentralized exploration game based on blockchain "},null),(0,n.Wm)("div",{class:"space-1"},null),(0,n.Wm)((0,n.up)("back-button"),{lable:"White paper",onClick:()=>location.href="https://docs.starduke.io/"},null),(0,n.Wm)("div",{class:"space-2"},null),(0,n.Wm)((0,n.up)("back-button"),{lable:"Tokenomics",onClick:()=>location.href="https://docs.starduke.io/our-token/star-duke-token"},null)])}})},3612:function(e,a,t){"use strict";t.r(a);var n=t(3396),r=t(4870);a["default"]=(0,n.aZ)({props:["lable"],setup(e){const a=(0,r.iH)(!1);return()=>(0,n.Wm)("div",{tabindex:"0",class:"back-button-wrapper",onFocus:()=>a.value=!0,onBlur:()=>a.value=!1},[(0,n.Wm)("img",{class:{active:a.value},src:"/images/StoryBackButton/StoryBackButtonActive.png",alt:"",srcset:"/images/StoryBackButton/StoryBackButtonActive@2x.png 2x,/images/StoryBackButton/StoryBackButtonActive@3x.png 3x"},null),(0,n.Wm)("img",{class:{active:!a.value},src:"/images/StoryBackButton/StoryBackButton.png",alt:"",srcset:"/images/StoryBackButton/StoryBackButton@2x.png 2x,/images/StoryBackButton/StoryBackButton@3x.png 3x"},null),(0,n.Wm)("span",null,[e.lable])])}})},6843:function(e,a,t){"use strict";t.r(a);var n=t(3396);a["default"]=(0,n.aZ)({props:["isPlay"],setup(e){return()=>(0,n.Wm)("div",{class:{"star-duke-wrapper":!0}},[(0,n.Wm)((0,n.up)("basic-title"),{content:"LAND IN STAR DUKE"},null),(0,n.Wm)("div",{class:"space-1"},null),(0,n.Wm)((0,n.up)("banner"),{src:"/images/StarDukeBanner/StarDukeBanner.png",srcset:"/images/StarDukeBanner/StarDukeBanner@2x.png 2x,/images/StarDukeBanner/StarDukeBanner@3x.png"},null),(0,n.Wm)("div",{class:"space-2"},null),(0,n.Wm)((0,n.up)("description"),{class:"description-1-container",content:"There are 300,000  NFT plots. Divided into 3 levels: R, SR, SSR"},null),(0,n.Wm)("div",{class:"space-3"},null),(0,n.Wm)((0,n.up)("description"),{class:"description-2-container",content:"Different quality levels correspond to different land types, and different land types have different income growth rates."},null),(0,n.Wm)("div",{class:"space-3"},null),(0,n.Wm)((0,n.up)("level-card"),{level:"R"},null),(0,n.Wm)("div",{class:"space-2"},null),(0,n.Wm)((0,n.up)("level-card"),{level:"SR"},null),(0,n.Wm)("div",{class:"space-2"},null),(0,n.Wm)((0,n.up)("level-card"),{level:"SSR"},null)])}})},8532:function(e,a,t){"use strict";t.r(a);var n=t(3396),r=t(4870);a["default"]=(0,n.aZ)({props:["level"],setup(e){const a=(0,r.iH)(!1);return()=>(0,n.Wm)("div",{tabindex:"0",class:"level-card-wrapper",onFocus:()=>a.value=!0,onBlur:()=>a.value=!1},[(0,n.Wm)("img",{class:{"bg-img":!0,active:a.value},src:"/images/StarDukeLevelCard/BgActive.png",alt:"",srcset:"/images/StarDukeLevelCard/BgActive@2x.png 2x,/images/StarDukeLevelCard/BgActive@3x.png 3x"},null),(0,n.Wm)("img",{class:{"bg-img":!0,active:!a.value},src:"/images/StarDukeLevelCard/Bg.png",alt:"",srcset:"/images/StarDukeLevelCard/Bg@2x.png 2x,/images/StarDukeLevelCard/Bg@3x.png 3x"},null),(()=>{let a;switch(e.level){case"R":a=(0,n.Wm)(n.HY,null,[(0,n.Wm)("img",{class:"content-img",src:"/images/StarDukeLevelCard/R-Content.png",alt:"",srcset:"/images/StarDukeLevelCard/R-Content@2x.png 2x,/images/StarDukeLevelCard/R-Content@3x.png 3x"},null),(0,n.Wm)("img",{class:"level-img",src:"/images/StarDukeLevelCard/R-Level.png",alt:"",srcset:"/images/StarDukeLevelCard/R-Level@2x.png 2x,/images/StarDukeLevelCard/R-Level@3x.png 3x"},null)]);break;case"SR":a=(0,n.Wm)(n.HY,null,[(0,n.Wm)("img",{class:"content-img",src:"/images/StarDukeLevelCard/SR-Content.png",alt:"",srcset:"/images/StarDukeLevelCard/SR-Content@2x.png 2x,/images/StarDukeLevelCard/SR-Content@3x.png 3x"},null),(0,n.Wm)("img",{class:"level-img",src:"/images/StarDukeLevelCard/SR-Level.png",alt:"",srcset:"/images/StarDukeLevelCard/SR-Level@2x.png 2x,/images/StarDukeLevelCard/SR-Level@3x.png 3x"},null)]);break;case"SSR":a=(0,n.Wm)(n.HY,null,[(0,n.Wm)("img",{class:"content-img",src:"/images/StarDukeLevelCard/SSR-Content.png",alt:"",srcset:"/images/StarDukeLevelCard/SSR-Content@2x.png 2x,/images/StarDukeLevelCard/SSR-Content@3x.png 3x"},null),(0,n.Wm)("img",{class:"level-img",src:"/images/StarDukeLevelCard/SSR-Level.png",alt:"",srcset:"/images/StarDukeLevelCard/SSR-Level@2x.png 2x,/images/StarDukeLevelCard/SSR-Level@3x.png 3x"},null)]);break;default:a=(0,n.Wm)(n.HY,null,[(0,n.Wm)("img",{class:"content-img",src:"",alt:"",srcset:""},null),(0,n.Wm)("img",{class:"level-img",src:"",alt:"",srcset:""},null)])}return a})()])}})},9473:function(e,a,t){"use strict";t.r(a);var n=t(3396);a["default"]=(0,n.aZ)({setup(){return()=>(0,n.Wm)("div",{class:"nft-wrapper"},[(0,n.Wm)((0,n.up)("basic-title"),{content:"NFT MYSTERY BOX"},null),(0,n.Wm)("div",{class:"space-15px"},null),(0,n.Wm)((0,n.up)("banner"),{src:"/images/NftBanner/NftBanner.png",srcset:"/images/NftBanner/NftBanner@2x.png 2x,/images/NftBanner/NftBanner@3x.png 3x"},null),(0,n.Wm)("div",{class:"space-15px"},null),(0,n.Wm)((0,n.up)("description"),{content:"R&D bases and spacecraft have 900000 NFT mystery boxes respectively. Divided into 3 levels and each level has 1-5 stars."},null),(0,n.Wm)("div",{class:"space-20px"},null),(0,n.Wm)((0,n.up)("star-line"),null,null)])}})},8282:function(e,a,t){"use strict";t.r(a);var n=t(3396);a["default"]=(0,n.aZ)({setup(){return()=>(0,n.Wm)("div",{class:"star-line-wrapper"},[(0,n.Wm)("img",{src:"/images/NftStars/NftStars.png",alt:"",srcset:"/images/NftStars/NftStars@2x.png 2x"},null)])}})},5397:function(e,a,t){"use strict";t.r(a);var n=t(3396),r=t(4870);a["default"]=(0,n.aZ)({props:["isPlay"],setup(e){const a=[{name:"Exchange and public offering",value:1e7},{name:"Ecosystem",value:1e7},{name:"Adviser",value:3e6},{name:"Game Rewards",value:4e7},{name:"Community",value:7e6},{name:"Market",value:5e6},{name:"Team",value:1e7},{name:"Private placement",value:15e6}],t=(0,r.iH)(NaN);return console.log("hello",e.isPlay),(0,n.YP)(e.isPlay,(e=>{console.log("hello",e)})),()=>(0,n.Wm)("div",{class:"tokenomics-wrapper"},[(0,n.Wm)((0,n.up)("basic-title"),{content:"TOKENOMICS"},null),e.isPlay?"heeeee":"nooooo",(0,n.Wm)((0,n.up)("pie-chart"),{activeIndex:t,onHover:e=>t.value=e},null),(0,n.Wm)("div",{id:"legendItems",class:"list-container"},[a.map(((e,a)=>(0,n.Wm)((0,n.up)("item-card"),{class:"item-card-container",active:a===t.value,option:e,onClick:()=>{t.value=a,console.log(t.value)}},null)))])])}})},7478:function(e,a,t){"use strict";t.r(a);var n=t(3396);const r=1e6;a["default"]=(0,n.aZ)({props:["active","option"],setup(e){return()=>(0,n.Wm)("div",{class:{"item-card-wrapper":!0,active:e.active}},[(0,n.Wm)("div",{class:"item-bg-container"},[(0,n.Wm)("img",{src:"/images/TokenomicsItemCard/Bg.png",alt:"",srcset:"/images/TokenomicsItemCard/Bg@2x.png 2x"},null)]),(0,n.Wm)("span",{class:"item-name"},[e.option.name]),(0,n.Wm)("span",{class:"item-value"},[e.option.value/r,(0,n.Uk)("%")]),(0,n.Wm)("span",{class:"item-tip"},[(0,n.Uk)("("),e.option.value,(0,n.Uk)(" token)")])])}})},3922:function(e,a,t){"use strict";t.r(a);var n=t(3396),r=t(4870),s=t(5140);let i;const o=(0,r.iH)(null);function l(e,a){i?i.destroy():s.kL.register({DoughnutController:s.jI,ArcElement:s.qi,Tooltip:s.u}),o.value?(i=new s.kL(o.value,{type:"doughnut",data:{labels:["Exchange and public offering","Ecosystem","Adviser","Game rewards","Community","Market","Team","Private placement"],datasets:[{label:"My First Dataset",data:[10,10,3,40,7,5,10,15],backgroundColor:"rgba(6, 15, 18, 1)",borderWidth:3,borderColor:"rgb(92, 105, 248)",hoverBackgroundColor:"rgba(147, 211, 255, 0.3)"}]},options:{animation:{duration:1},plugins:{legend:{display:!0},tooltip:{callbacks:{label:function(e){return e.label+":"+e.formattedValue+"%"}}}},onHover:a}}),e&&!isNaN(e)&&i.setActiveElements([{datasetIndex:0,index:e}])):console.log("no canvas element",o.value)}a["default"]=(0,n.aZ)({props:["activeIndex","onHover"],setup(e){let a=!1;function t(t,n){n&&n.length&&(e.onHover(n[0].index),a=!0)}return(0,n.bv)((()=>{l(e.activeIndex,t),console.log("!!!!",i)})),(0,n.YP)(e.activeIndex,(e=>{!a&&l(e,t),a=!1})),()=>(0,n.Wm)("div",{class:"pie-chart-wrapper"},[(0,n.Wm)("div",{class:"chart-container"},[(0,n.Wm)("canvas",{ref:o},null)]),(0,n.Wm)("div",{class:"logo-container"},[(0,n.Wm)("img",{src:"/images/TokenomicsPieChart/Logo.png",alt:"",srcset:"/images/TokenomicsPieChart/Logo@2x.png 2x,/images/TokenomicsPieChart/Logo@3x.png 3x"},null)])])}})},9565:function(e,a,t){"use strict";t.r(a);var n=t(3396),r=t(4870);a["default"]=(0,n.aZ)({setup(){const e=(0,r.iH)(NaN),a=[{icon:["/images/FeaturesCard/Icon1.png","/images/FeaturesCard/Icon1@2x.png","/images/FeaturesCard/Icon1@3x.png"],description:["/images/FeaturesCard/Description1.png","/images/FeaturesCard/Description1@2x.png","/images/FeaturesCard/Description1@3x.png"],tip:"ANYONE HAS THE OPPORTUNITY TO GET  HIGH-VALUE NFT"},{icon:["/images/FeaturesCard/Icon2.png","/images/FeaturesCard/Icon2@2x.png","/images/FeaturesCard/Icon2@3x.png"],description:["/images/FeaturesCard/Description2.png","/images/FeaturesCard/Description2@2x.png","/images/FeaturesCard/Description2@3x.png"],tip:"VARIOUS GAME MECHANICS EARN MONEY WHILE PLAYING"},{icon:["/images/FeaturesCard/Icon3.png","/images/FeaturesCard/Icon3@2x.png","/images/FeaturesCard/Icon3@3x.png"],description:["/images/FeaturesCard/Description3.png","/images/FeaturesCard/Description3@2x.png","/images/FeaturesCard/Description3@3x.png"],tip:"BUILD R&D BASES & SPACECRAFT TO EARN SDK TOKENS FOR FUNCTION UPGRADE"},{icon:["/images/FeaturesCard/Icon4.png","/images/FeaturesCard/Icon4@2x.png","/images/FeaturesCard/Icon4@3x.png"],description:["/images/FeaturesCard/Description4.png","/images/FeaturesCard/Description4@2x.png","/images/FeaturesCard/Description4@3x.png"],tip:"（COMING SOON）TAKE PART IN DAILY CHALLENGE ANDWIN REWARDS"},{icon:["/images/FeaturesCard/Icon5.png","/images/FeaturesCard/Icon5@2x.png","/images/FeaturesCard/Icon5@3x.png"],description:["/images/FeaturesCard/Description5.png","/images/FeaturesCard/Description5@2x.png","/images/FeaturesCard/Description5@3x.png"],tip:"EARN CLNY TOKEN BY STAKING LP TOKENS"},{icon:["/images/FeaturesCard/Icon6.png","/images/FeaturesCard/Icon6@2x.png","/images/FeaturesCard/Icon6@3x.png"],description:["/images/FeaturesCard/Description6.png","/images/FeaturesCard/Description6@2x.png","/images/FeaturesCard/Description6@3x.png"],tip:"NFT FROM MYSTERY BOXES CAN BE SOLD ON THE MARKET"}];return()=>(0,n.Wm)("div",{class:"features-wrapper"},[(0,n.Wm)((0,n.up)("basic-title"),{content:"SIX FEATURES"},null),(0,n.Wm)("div",{class:"space-24px"},null),(0,n.Wm)("div",{class:"features-list-container"},[a.map(((a,t)=>(0,n.Wm)((0,n.up)("features-card"),{class:"features-card-container",active:t===e.value,feature:a},null)))])])}})},5241:function(e,a,t){"use strict";t.r(a);var n=t(3396),r=t(4870);const s=e=>(0,n.Wm)("div",{class:"bg-wrapper"},[(0,n.Wm)("img",{class:{active:e.active},src:"/images/FeaturesCard/BgLight.png",alt:"",srcset:"/images/FeaturesCard/BgLight@2x.png 2x,/images/FeaturesCard/BgLight@3x.png 3x"},null),(0,n.Wm)("div",{class:"mask-block"},null)]);a["default"]=(0,n.aZ)({props:["feature"],setup(e){const a=(0,r.iH)(!1);return()=>(0,n.Wm)("div",{tabindex:"0",class:"features-card-wrapper",onFocus:()=>a.value=!0,onBlur:()=>a.value=!1},[(0,n.Wm)(s,{active:a.value},null),(0,n.Wm)("div",{class:"icon-image-wrapper"},[(0,n.Wm)("img",{src:e.feature.icon[0],alt:"",srcset:`${e.feature.icon[1]} 2x,${e.feature.icon[2]} 3x`},null)]),(0,n.Wm)("div",{class:"description-image-wrapper"},[(0,n.Wm)("img",{src:e.feature.description[0],alt:"",srcset:`${e.feature.description[1]} 2x,${e.feature.description[2]} 3x`},null)]),(0,n.Wm)("div",{class:"tip-span-wrapper"},[(0,n.Wm)("span",null,[e.feature.tip])])])}})},240:function(e,a,t){"use strict";t.r(a);var n=t(3396);a["default"]=(0,n.aZ)({setup(){const e=[["/images/OfficalPartners/Partner1.png","/images/OfficalPartners/Partner1@2x.png","/images/OfficalPartners/Partner1@3x.png"],["/images/OfficalPartners/Partner2.png","/images/OfficalPartners/Partner2@2x.png","/images/OfficalPartners/Partner2@3x.png"],["/images/OfficalPartners/Partner3.png","/images/OfficalPartners/Partner3@2x.png","/images/OfficalPartners/Partner3@3x.png"],["/images/OfficalPartners/Partner4.png","/images/OfficalPartners/Partner4@2x.png","/images/OfficalPartners/Partner4@3x.png"],["/images/OfficalPartners/Partner5.png","/images/OfficalPartners/Partner5@2x.png","/images/OfficalPartners/Partner5@3x.png"],["/images/OfficalPartners/Partner6.png","/images/OfficalPartners/Partner6@2x.png","/images/OfficalPartners/Partner6@3x.png"],["/images/OfficalPartners/Partner7.png","/images/OfficalPartners/Partner7@2x.png","/images/OfficalPartners/Partner7@3x.png"],["/images/OfficalPartners/Partner8.png","/images/OfficalPartners/Partner8@2x.png","/images/OfficalPartners/Partner8@3x.png"]],a=[{images:["/images/OfficalPartners/Icon1.png","/images/OfficalPartners/Icon1@2x.png","/images/OfficalPartners/Icon1@3x.png"],url:"https://www.coingecko.com/en/coins/starduke"},{images:["/images/OfficalPartners/Icon2.png","/images/OfficalPartners/Icon2@2x.png","/images/OfficalPartners/Icon2@3x.png"],url:"https://t.me/StarDuke"},{images:["/images/OfficalPartners/Icon3.png","/images/OfficalPartners/Icon3@2x.png","/images/OfficalPartners/Icon3@3x.png"],url:"#"},{images:["/images/OfficalPartners/Icon4.png","/images/OfficalPartners/Icon4@2x.png","/images/OfficalPartners/Icon4@3x.png"],url:"https://starduke.medium.com/"},{images:["/images/OfficalPartners/Icon5.png","/images/OfficalPartners/Icon5@2x.png","/images/OfficalPartners/Icon5@3x.png"],url:"#"},{images:["/images/OfficalPartners/Icon6.png","/images/OfficalPartners/Icon6@2x.png","/images/OfficalPartners/Icon6@3x.png"],url:"https://twitter.com/StarDukeGames"},{images:["/images/OfficalPartners/Icon7.png","/images/OfficalPartners/Icon7@2x.png","/images/OfficalPartners/Icon7@3x.png"],url:"https://bscscan.com/token/0x308757ba7F2172b89c73a4Cb8A7692d6Cd11E3dF"},{images:["/images/OfficalPartners/Icon8.png","/images/OfficalPartners/Icon8@2x.png","/images/OfficalPartners/Icon8@3x.png"],url:"https://discord.gg/3RQ9V255MB"},{images:["/images/OfficalPartners/Icon9.png","/images/OfficalPartners/Icon9@2x.png","/images/OfficalPartners/Icon9@3x.png"],url:"https://coinmarketcap.com/currencies/starduke/"}];return()=>(0,n.Wm)("div",{class:"offical-partners-wrapper"},[(0,n.Wm)((0,n.up)("basic-title"),{content:"OFFICAL PARTNERS"},null),(0,n.Wm)("div",{class:"offical-partners-list-container"},[e.map((e=>(0,n.Wm)((0,n.up)("offical-partners-card"),{class:"offical-partners-card-container",partner:e},null)))]),(0,n.Wm)("div",{class:"icon-list-container"},[a.map((e=>(0,n.Wm)((0,n.up)("offical-partners-icon"),{icon:e},null)))])])}})},1845:function(e,a,t){"use strict";t.r(a);var n=t(3396);a["default"]=(0,n.aZ)({props:["partner"],setup(e){return()=>(0,n.Wm)("div",{class:"offical-partners-card-wrapper"},[(0,n.Wm)("img",{src:e.partner[0],alt:"",srcset:`${e.partner[1]} 2x,${e.partner[2]} 3x`},null)])}})},538:function(e,a,t){"use strict";t.r(a);var n=t(3396);a["default"]=(0,n.aZ)({props:{icon:{type:Object,default:()=>({})}},setup(e){return()=>(0,n.Wm)("div",null,[(0,n.Wm)("a",{href:e.icon.url},[(0,n.Wm)("img",{src:e.icon.images[0],alt:"",srcset:`${e.icon.images[1]} 2x,${e.icon.images[2]} 3x`},null)])])}})},2897:function(e,a,t){"use strict";t.r(a);var n=t(3396),r=t(4870);a["default"]=(0,n.aZ)({setup(){const e=(0,r.iH)("PHASE1");return()=>(0,n.Wm)("div",{class:"road-map-container"},[(0,n.Wm)((0,n.up)("basic-title"),{content:"ROAD MAP"},null),(0,n.Wm)("div",{class:"tab-list-container"},[(0,n.Wm)((0,n.up)("pha-tab-button"),{onClick:()=>e.value="PHASE1",active:"PHASE1"===e.value,lable:"PHASE1: IN2022"},null),(0,n.Wm)((0,n.up)("pha-tab-button"),{onClick:()=>e.value="PHASE2",active:"PHASE2"===e.value,lable:"PHASE2"},null),(0,n.Wm)((0,n.up)("pha-tab-button"),{onClick:()=>e.value="PHASE3",active:"PHASE3"===e.value,lable:"PHASE3"},null)]),(0,n.Wm)((0,n.up)("time-axis"),{class:"time-axis-container"},null)])}})},7200:function(e,a,t){"use strict";t.r(a);var n=t(3396);a["default"]=(0,n.aZ)({props:["active","lable"],setup(e){return()=>(0,n.Wm)("div",{class:"pha-tab-button-wrapper"},[(0,n.Wm)("img",{class:{active:!e.active},src:"/images/RoadMapPhaButton/Bg.png",alt:"",srcset:"/images/RoadMapPhaButton/Bg@2x.png 2x,/images/RoadMapPhaButton/Bg@3x.png 3x"},null),(0,n.Wm)("img",{class:{active:e.active},src:"/images/RoadMapPhaButton/BgActive.png",alt:"",srcset:"/images/RoadMapPhaButton/BgActive@2x.png 2x,/images/RoadMapPhaButton/BgActive@3x.png 3x"},null),(0,n.Wm)("span",null,[e.lable])])}})},1334:function(e,a,t){"use strict";t.r(a);var n=t(3396);a["default"]=(0,n.aZ)({setup(){return()=>(0,n.Wm)("div",{class:"time-axis-wrapper"},[(0,n.Wm)("img",{class:"axis-image",src:"/images/RoadMapTimeAxis/Axis0607.png",alt:""},null)])}})},1688:function(e,a,t){"use strict";t.r(a);var n=t(3396);a["default"]=(0,n.aZ)({props:["src","srcset"],setup(e){return()=>(0,n.Wm)("div",{class:"common-banner-wrapper"},[(0,n.Wm)("img",{src:e.src,alt:"",srcset:e.srcset},null)])}})},2136:function(e,a,t){"use strict";t.r(a);var n=t(3396);a["default"]=(0,n.aZ)({props:["content"],setup(e){return()=>(0,n.Wm)("div",{class:"basic-tip-wrapper"},[(0,n.Wm)("span",null,[e.content])])}})},6691:function(e,a,t){"use strict";t.r(a);var n=t(3396);a["default"]=(0,n.aZ)({props:["content"],setup(e){return()=>(0,n.Wm)("div",{class:"basic-title-wrapper"},[(0,n.Wm)("span",null,[e.content])])}})},1002:function(e,a,t){"use strict";t.r(a);var n=t(3396);a["default"]=(0,n.aZ)({props:["content"],setup(e){return()=>(0,n.Wm)("div",{class:"description-wrapper"},[(0,n.Wm)("span",null,[e.content])])}})},254:function(e,a,t){var n={"./0_global/MoreMenuPopup.tsx":9273,"./10_footer/Footer.tsx":9005,"./1_header/Header.tsx":2186,"./1_header/components/Logo.tsx":3506,"./1_header/components/MoreButton.tsx":1254,"./1_header/components/StartButton.tsx":2354,"./2_welcome/Welcome.tsx":5270,"./2_welcome/components/BannerDescription.tsx":4819,"./2_welcome/components/EnterButton.tsx":3498,"./3_story/Story.tsx":9751,"./3_story/components/BackButton.tsx":3612,"./4_starDuke/StarDuke.tsx":6843,"./4_starDuke/components/LevelCard.tsx":8532,"./5_nft/Nft.tsx":9473,"./5_nft/components/StarLine.tsx":8282,"./6_tokenomics/Tokenomics.tsx":5397,"./6_tokenomics/components/ItemCard.tsx":7478,"./6_tokenomics/components/PieChart.tsx":3922,"./7_features/Features.tsx":9565,"./7_features/components/FeaturesCard.tsx":5241,"./8_officalPartners/OfficalPartners.tsx":240,"./8_officalPartners/components/OfficalPartnersCard.tsx":1845,"./8_officalPartners/components/OfficalPartnersIcon.tsx":538,"./9_roadMap/RoadMap.tsx":2897,"./9_roadMap/components/PhaTabButton.tsx":7200,"./9_roadMap/components/TimeAxis.tsx":1334,"./common/Banner.tsx":1688,"./common/BasicTip.tsx":2136,"./common/BasicTitle.tsx":6691,"./common/Description.tsx":1002};function r(e){var a=s(e);return t(a)}function s(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=254}},a={};function t(n){var r=a[n];if(void 0!==r)return r.exports;var s=a[n]={exports:{}};return e[n](s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(a,n,r,s){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],s=e[u][2];for(var o=!0,l=0;l<n.length;l++)(!1&s||i>=s)&&Object.keys(t.O).every((function(e){return t.O[e](n[l])}))?n.splice(l--,1):(o=!1,s<i&&(i=s));if(o){e.splice(u--,1);var c=r();void 0!==c&&(a=c)}}return a}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,r,s]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var r,s,i=n[0],o=n[1],l=n[2],c=0;if(i.some((function(a){return 0!==e[a]}))){for(r in o)t.o(o,r)&&(t.m[r]=o[r]);if(l)var u=l(t)}for(a&&a(n);c<i.length;c++)s=i[c],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(u)},n=self["webpackChunkhuobi_mobile_frontend"]=self["webpackChunkhuobi_mobile_frontend"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(9776)}));n=t.O(n)})();
//# sourceMappingURL=app.9ef9a29e.js.map