(function(){"use strict";var e={1230:function(e,a,l){var t=l(9242),n=l(3396);function i(e,a,l,t,i,o){const c=(0,n.up)("van-nav-bar"),d=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(c,{title:e.$route.meta.title,"left-text":"不动产智治"===e.$route.meta.title?"":"返回","right-text":"...","left-arrow":"不动产智治"!==e.$route.meta.title,onClickLeft:o.onClickLeft,onClickRight:o.onClickRight,fixed:"","safe-area-inset-top":"50"},null,8,["title","left-text","left-arrow","onClickLeft","onClickRight"]),e.$route.meta.keepAlive?((0,n.wg)(),(0,n.j4)(n.Ob,{key:0},[(0,n.Wm)(d)],1024)):((0,n.wg)(),(0,n.j4)(d,{key:1}))])}var o={name:"App",methods:{onClickLeft(){this.$router.go(-1),console.log("左边")},onClickRight(){console.log("右边")}}},c=l(89);const d=(0,c.Z)(o,[["render",i]]);var s=d,r=l(2483),u=l.p+"img/不动产信息.8a793919.png";const v=e=>((0,n.dD)("data-v-b05ba9ba"),e=e(),(0,n.Cn)(),e),m={class:"home"},p={class:"select-options-wrap"},_={class:"map-choose"},f=v((()=>(0,n._)("p",{class:"city-name"},"杭州市",-1))),h={class:"search-option-input"},b=(0,n.uE)('<div class="access-wrap" data-v-b05ba9ba><p class="today" data-v-b05ba9ba>今日访问量 0 次</p><p class="fenge" data-v-b05ba9ba>|</p><p class="history" data-v-b05ba9ba>历史访问量 28186240 次</p></div><div class="title" data-v-b05ba9ba><h2 data-v-b05ba9ba>我的不动产</h2><div class="more" data-v-b05ba9ba>更多 &gt;</div></div><div class="immovable-info-wrap" data-v-b05ba9ba><div class="immovable-info card" data-v-b05ba9ba><img src="'+u+'" alt="" data-v-b05ba9ba></div></div><div class="if-error" data-v-b05ba9ba>如有异议请点击反馈 》</div><div class="title" data-v-b05ba9ba><h2 data-v-b05ba9ba>我要查</h2><div class="more" data-v-b05ba9ba>更多 &gt;</div></div>',5),w={class:"want-search-wrap"},g={class:"icon-wrap"},k=v((()=>(0,n._)("div",null,"权属查询",-1))),W={class:"icon-wrap"},V=v((()=>(0,n._)("div",null,"电子证照",-1))),U={class:"icon-wrap"},y=v((()=>(0,n._)("div",null,"办理进度",-1))),x={class:"icon-wrap"},C=v((()=>(0,n._)("div",null,"客户信息",-1)));function H(e,a,l,t,i,o){const c=(0,n.up)("van-icon"),d=(0,n.up)("van-field"),s=(0,n.up)("van-notice-bar");return(0,n.wg)(),(0,n.iD)("div",m,[(0,n._)("div",p,[(0,n._)("div",_,[(0,n.Wm)(c,{name:"location-o"}),f,(0,n.Wm)(c,{name:"arrow-down"})]),(0,n._)("div",h,[(0,n.Wm)(d,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),placeholder:"请输入搜索条件","left-icon":"search"},null,8,["modelValue"])])]),(0,n.Wm)(s,{"left-icon":"volume-o",text:"涉密不上网，上网不涉密。"}),b,(0,n._)("div",w,[(0,n._)("div",{class:"card button-wrap",onClick:a[1]||(a[1]=e=>t.jumpClick("property_query"))},[(0,n._)("div",g,[(0,n.Wm)(c,{size:"28",name:"friends-o"})]),k]),(0,n._)("div",{class:"card button-wrap",onClick:a[2]||(a[2]=e=>t.jumpClick("electronic_license"))},[(0,n._)("div",W,[(0,n.Wm)(c,{size:"28",name:"photo-o"})]),V]),(0,n._)("div",{class:"card button-wrap",onClick:a[3]||(a[3]=e=>t.jumpClick("processing_progress"))},[(0,n._)("div",U,[(0,n.Wm)(c,{size:"28",name:"tosend"})]),y]),(0,n._)("div",{class:"card button-wrap",onClick:a[4]||(a[4]=e=>t.jumpClick("custom_info"))},[(0,n._)("div",x,[(0,n.Wm)(c,{size:"28",name:"link-o"})]),C])])])}l(560);var D=l(4870),j={name:"HomeView",setup(){const e=(0,D.iH)(""),a=(0,D.iH)(""),l=(0,r.tv)(),t=e=>{l.push({name:e})};return{value:e,text:a,jumpClick:t}}};const O=(0,c.Z)(j,[["render",H],["__scopeId","data-v-b05ba9ba"]]);var Z=O;const q=e=>((0,n.dD)("data-v-532e6994"),e=e(),(0,n.Cn)(),e),z={class:"processing-container"},A={class:"search-options"},$={class:"city-option"},I=q((()=>(0,n._)("div",null,"查询范围：",-1))),L=q((()=>(0,n._)("div",{class:"city-name"}," 杭州市上城区、拱墅区、西湖区、钱塘区、滨江区、萧山区、余杭区、临平区、富阳区、临安区和淳安县、 桐庐县、建德市 ",-1))),R={class:"flex-between search-info"},P=q((()=>(0,n._)("div",null,"查档用途",-1))),T={class:"flex-between search-mortgage"},X=q((()=>(0,n._)("div",null,"查询查封抵押",-1))),B=q((()=>(0,n._)("h3",{class:"pl-10"},"添加家庭成员信息",-1))),E={class:"flex-around"},F=q((()=>(0,n._)("span",{class:"book"},"《不动产权属信息查询须知》",-1))),M=q((()=>(0,n._)("div",{class:"footer"},[(0,n.Uk)(" 本服务由浙江政务服务网、浙江省自然资源厅提供服务咨询热线：杭州市- "),(0,n._)("a",{href:"tel:0571-87008160"},"0571-87008160")],-1)));function G(e,a,l,t,i,o){const c=(0,n.up)("van-icon"),d=(0,n.up)("van-radio"),s=(0,n.up)("van-radio-group"),r=(0,n.up)("van-divider"),u=(0,n.up)("van-button"),v=(0,n.up)("van-checkbox"),m=(0,n.up)("van-checkbox-group");return(0,n.wg)(),(0,n.iD)("div",z,[(0,n._)("div",A,[(0,n._)("div",$,[I,(0,n._)("div",null,[(0,n.Uk)("杭州市 "),(0,n.Wm)(c,{name:"exchange"})])]),L]),(0,n._)("div",R,[P,(0,n._)("div",null,[(0,n.Uk)("信息查询 "),(0,n.Wm)(c,{name:"arrow-down"})])]),(0,n._)("div",T,[X,(0,n.Wm)(s,{modelValue:t.checked,"onUpdate:modelValue":a[0]||(a[0]=e=>t.checked=e),class:"flex-between"},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{name:"1"},{default:(0,n.w5)((()=>[(0,n.Uk)("是")])),_:1}),(0,n.Wm)(d,{name:"2"},{default:(0,n.w5)((()=>[(0,n.Uk)("否")])),_:1})])),_:1},8,["modelValue"])]),B,(0,n.Wm)(r),(0,n._)("div",E,[(0,n.Wm)(u,{plain:"",hairline:"",type:"primary"},{default:(0,n.w5)((()=>[(0,n.Uk)("自动获取")])),_:1}),(0,n.Wm)(u,{plain:"",hairline:"",type:"primary"},{default:(0,n.w5)((()=>[(0,n.Uk)("手动添加")])),_:1})]),(0,n.Wm)(m,{modelValue:t.checkedbox,"onUpdate:modelValue":a[1]||(a[1]=e=>t.checkedbox=e),shape:"square",style:{padding:"10px"}},{default:(0,n.w5)((()=>[(0,n.Wm)(v,{name:"a"},{default:(0,n.w5)((()=>[(0,n.Uk)("我已阅读并同意"),F])),_:1})])),_:1},8,["modelValue"]),(0,n.Wm)(u,{type:"primary",style:{width:"100%"}},{default:(0,n.w5)((()=>[(0,n.Uk)("查 询")])),_:1}),M])}var K={setup(){let e=(0,D.iH)("1"),a=(0,D.iH)("a");return{checked:e,checkedbox:a}}};const Y=(0,c.Z)(K,[["render",G],["__scopeId","data-v-532e6994"]]);var J=Y;const N=e=>((0,n.dD)("data-v-453da70a"),e=e(),(0,n.Cn)(),e),Q={class:"electronic-container"},S={class:"flex-between search-wrap"},ee=N((()=>(0,n._)("div",null,"查询范围：",-1))),ae=N((()=>(0,n._)("h3",null,"申请信息",-1))),le={class:"person-info"},te={class:"choose-wrap"},ne=N((()=>(0,n._)("div",{class:"title"},"身份类型",-1))),ie={class:"choose-wrap"},oe=N((()=>(0,n._)("div",{class:"title"},"证书类型",-1))),ce=N((()=>(0,n._)("div",{class:"footer-notice"},[(0,n.Uk)(" 服务咨询热线：杭州市- "),(0,n._)("a",{href:"tel:0571-87008160"},"0571-87008160")],-1)));function de(e,a,l,t,i,o){const c=(0,n.up)("van-icon"),d=(0,n.up)("van-divider"),s=(0,n.up)("van-field"),r=(0,n.up)("van-radio"),u=(0,n.up)("van-radio-group"),v=(0,n.up)("van-button");return(0,n.wg)(),(0,n.iD)("div",Q,[(0,n._)("div",S,[ee,(0,n._)("div",null,[(0,n.Uk)("杭州市 "),(0,n.Wm)(c,{name:"exchange"})])]),ae,(0,n.Wm)(d),(0,n._)("div",le,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.arrList,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.label,class:"flex-between"},[(0,n.Wm)(s,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,label:e.label,"input-align":"right"},null,8,["modelValue","onUpdate:modelValue","label"]),(0,n.Wm)(d)])))),128)),(0,n._)("div",te,[ne,(0,n.Wm)(u,{modelValue:t.checked,"onUpdate:modelValue":a[0]||(a[0]=e=>t.checked=e),class:"choose-radio"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{name:"1"},{default:(0,n.w5)((()=>[(0,n.Uk)("领证人")])),_:1}),(0,n.Wm)(r,{name:"2"},{default:(0,n.w5)((()=>[(0,n.Uk)("权利人")])),_:1})])),_:1},8,["modelValue"])]),(0,n._)("div",ie,[oe,(0,n.Wm)(u,{modelValue:t.checked2,"onUpdate:modelValue":a[1]||(a[1]=e=>t.checked2=e),class:"choose-radio"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{name:"1"},{default:(0,n.w5)((()=>[(0,n.Uk)("电子证书")])),_:1}),(0,n.Wm)(r,{name:"2"},{default:(0,n.w5)((()=>[(0,n.Uk)("电子证明")])),_:1})])),_:1},8,["modelValue"])])]),(0,n.Wm)(v,{type:"primary",style:{width:"100%"},onClick:a[2]||(a[2]=a=>e.$router.push({name:"electronic_license_list"}))},{default:(0,n.w5)((()=>[(0,n.Uk)("查 询")])),_:1}),ce])}var se={setup(){let e=(0,D.iH)([{label:"姓名",value:"李*卉"},{label:"证件号码",value:"352***********52X"}]),a=(0,D.iH)("1"),l=(0,D.iH)("1");return{arrList:e,checked:a,checked2:l}}};const re=(0,c.Z)(se,[["render",de],["__scopeId","data-v-453da70a"]]);var ue=re,ve=l.p+"img/办理进度.72d9d831.jpeg";const me=e=>((0,n.dD)("data-v-caf82b30"),e=e(),(0,n.Cn)(),e),pe={class:"processing-container"},_e={class:"flex-between search-wrap"},fe=me((()=>(0,n._)("div",null,"查询范围：",-1))),he=me((()=>(0,n._)("img",{width:"100%",src:ve,alt:""},null,-1))),be={class:"button-wrap"},we=me((()=>(0,n._)("div",{class:"flex-between number"},[(0,n._)("div",{class:"start"},"业务编号"),(0,n._)("div",{class:"end-number"},"业务编号")],-1))),ge=me((()=>(0,n._)("div",{class:"footer-notice"},[(0,n.Uk)(" 服务咨询热线：杭州市- "),(0,n._)("a",{href:"tel:0571-87008160"},"0571-87008160")],-1)));function ke(e,a,l,t,i,o){const c=(0,n.up)("van-icon"),d=(0,n.up)("van-divider"),s=(0,n.up)("van-button");return(0,n.wg)(),(0,n.iD)("div",pe,[(0,n._)("div",_e,[fe,(0,n._)("div",null,[(0,n.Uk)("杭州市 "),(0,n.Wm)(c,{name:"exchange"})])]),he,(0,n._)("div",be,[we,(0,n.Wm)(d),(0,n.Wm)(s,{type:"primary",style:{width:"100%"}},{default:(0,n.w5)((()=>[(0,n.Uk)("查 询")])),_:1})]),ge])}var We={setup(){let e=(0,D.iH)();return{value:e}}};const Ve=(0,c.Z)(We,[["render",ke],["__scopeId","data-v-caf82b30"]]);var Ue=Ve;const ye=e=>((0,n.dD)("data-v-771bc8f6"),e=e(),(0,n.Cn)(),e),xe={class:"custom-info-container"},Ce={class:"custom-info"},He={class:"city-info"},De=ye((()=>(0,n._)("div",null,"所在地区：",-1))),je={class:"certificate-type-wrap"},Oe=ye((()=>(0,n._)("div",{class:"certificate-type"},"证书类型",-1))),Ze={class:"certificate-choose"},qe={class:"finaly-info"},ze=ye((()=>(0,n._)("div",{class:"bg title"},"不动产权证号",-1))),Ae={class:"bg street"},$e=ye((()=>(0,n._)("span",{class:"city-or-xian"},"XX市/县",-1))),Ie={class:"bg footer"},Le=ye((()=>(0,n._)("input",{type:"text",placeholder:"请输入"},null,-1))),Re={class:"button"},Pe=ye((()=>(0,n._)("div",{class:"no-info"},"暂无数据",-1))),Te=ye((()=>(0,n._)("div",{class:"footer-notice"},[(0,n.Uk)(" 服务咨询热线：杭州市- "),(0,n._)("a",{href:"tel:0571-87008160"},"0571-87008160")],-1)));function Xe(e,a,l,t,i,o){const c=(0,n.up)("van-icon"),d=(0,n.up)("van-field"),s=(0,n.up)("van-radio"),r=(0,n.up)("van-radio-group");return(0,n.wg)(),(0,n.iD)("div",xe,[(0,n._)("div",Ce,[(0,n._)("div",He,[De,(0,n._)("div",null,[(0,n.Uk)("杭州市 "),(0,n.Wm)(c,{name:"exchange"})])]),(0,n.Wm)(d,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),label:"坐落",placeholder:"请输入坐落，信息越完整，匹配越准确","input-align":"right"},null,8,["modelValue"]),(0,n._)("div",je,[Oe,(0,n._)("div",Ze,[(0,n.Wm)(r,{modelValue:t.checked,"onUpdate:modelValue":a[1]||(a[1]=e=>t.checked=e)},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{name:"1"},{default:(0,n.w5)((()=>[(0,n.Uk)("不动产权证号")])),_:1}),(0,n.Wm)(s,{name:"2"},{default:(0,n.w5)((()=>[(0,n.Uk)("旧证书号")])),_:1})])),_:1},8,["modelValue"])])]),(0,n._)("div",qe,[ze,(0,n._)("div",Ae,[(0,n.Uk)(" 浙（"),(0,n.Wm)(c,{name:"arrow-down"}),(0,n.Uk)("）"),$e]),(0,n._)("div",Ie,[(0,n.Uk)(" 不动产权第 "),Le,(0,n.Wm)(c,{size:"28",name:"scan"}),(0,n.Uk)(" 号 ")])]),(0,n._)("div",Re,[(0,n.Wm)(c,{name:"search",onClick:a[2]||(a[2]=a=>e.$router.push({name:"custom_info_detail"}))}),(0,n.Uk)("查询 ")])]),Pe,Te])}var Be={setup(){let e=(0,D.iH)(""),a=(0,D.iH)("1");return{value:e,checked:a}}};const Ee=(0,c.Z)(Be,[["render",Xe],["__scopeId","data-v-771bc8f6"]]);var Fe=Ee;const Me=e=>((0,n.dD)("data-v-edd50f2a"),e=e(),(0,n.Cn)(),e),Ge={class:"list-container"},Ke={class:"select-options-wrap"},Ye={class:"map-choose"},Je=Me((()=>(0,n._)("p",{class:"city-name"},"业务号",-1))),Ne={class:"search-option-input"},Qe={class:"list-wrap"},Se={class:"card"},ea={class:"flex"},aa=Me((()=>(0,n._)("p",null,"Z330101-20240104-0008863",-1))),la=Me((()=>(0,n._)("div",null,"临安区锦北街道 ****** 01室",-1))),ta={class:"flex"},na=Me((()=>(0,n._)("div",null,"浙（2024）****** 17号",-1))),ia=Me((()=>(0,n._)("div",{class:"diver"},"|",-1))),oa=Me((()=>(0,n._)("div",{class:"diver"},"|",-1))),ca=Me((()=>(0,n._)("div",null,"下载次数：0次",-1))),da=Me((()=>(0,n._)("div",{class:"no-more"},"没有更多了",-1))),sa=Me((()=>(0,n._)("div",{class:"no-more"},"没有更多了",-1))),ra=Me((()=>(0,n._)("div",{class:"no-more"},"没有更多了",-1))),ua=Me((()=>(0,n._)("div",{class:"footer-notice"},[(0,n.Uk)(" 服务咨询热线：杭州市- "),(0,n._)("a",{href:"tel:0571-87008160"},"0571-87008160")],-1)));function va(e,a,l,t,i,o){const c=(0,n.up)("van-icon"),d=(0,n.up)("van-field"),s=(0,n.up)("van-tag"),r=(0,n.up)("van-tab"),u=(0,n.up)("van-tabs");return(0,n.wg)(),(0,n.iD)("div",Ge,[(0,n._)("div",Ke,[(0,n._)("div",Ye,[(0,n.Wm)(c,{name:"description-o"}),Je,(0,n.Wm)(c,{name:"arrow-down"})]),(0,n._)("div",Ne,[(0,n.Wm)(d,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=a=>e.value=a),placeholder:"请输入关键词","left-icon":"search"},null,8,["modelValue"])])]),(0,n.Wm)(u,{active:t.active,"onUpdate:active":a[3]||(a[3]=e=>t.active=e)},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{title:"有效"},{default:(0,n.w5)((()=>[(0,n._)("div",Qe,[(0,n._)("div",Se,[(0,n._)("div",ea,[(0,n.Wm)(s,{color:"#b0c4de","text-color":"#000080"},{default:(0,n.w5)((()=>[(0,n.Uk)("业务号")])),_:1}),aa]),la,(0,n._)("div",ta,[na,ia,(0,n._)("div",{onClick:a[1]||(a[1]=a=>e.$router.push({name:"details_show",query:{show:"show"}}))},[(0,n.Wm)(c,{name:"description"}),(0,n.Uk)("证书 ")]),oa,(0,n._)("div",{onClick:a[2]||(a[2]=a=>e.$router.push({name:"details_show",query:{show:"download"}}))},[(0,n.Wm)(c,{name:"down"}),(0,n.Uk)("证书下载 ")])]),ca]),da])])),_:1}),(0,n.Wm)(r,{title:"无效"},{default:(0,n.w5)((()=>[sa])),_:1}),(0,n.Wm)(r,{title:"单元清单"},{default:(0,n.w5)((()=>[ra])),_:1})])),_:1},8,["active"]),ua])}var ma={setup(){const e=(0,D.iH)(0);return{active:e}}};const pa=(0,c.Z)(ma,[["render",va],["__scopeId","data-v-edd50f2a"]]);var _a=pa,fa=l(7139),ha=l.p+"img/电子权证原图.065fbbd0.png",ba=l.p+"img/电子附图.42935597.png";const wa=e=>((0,n.dD)("data-v-76d2f929"),e=e(),(0,n.Cn)(),e),ga={class:"details-container"},ka={class:"tabs-wrap flex"},Wa=wa((()=>(0,n._)("p",null,"权证信息",-1))),Va=wa((()=>(0,n._)("p",null,"电子权证",-1))),Ua=wa((()=>(0,n._)("p",null,"电子附图",-1))),ya={key:0,class:"zhengshu-wrap"},xa={class:"card zs-container"},Ca=wa((()=>(0,n._)("div",{class:"flex-between"},[(0,n._)("h3",null,"证书号"),(0,n._)("div",null,"浙(2024)杭州市不动产权第0008817号")],-1))),Ha={key:1,class:"ele-card"},Da=wa((()=>(0,n._)("img",{width:"100%",src:ha,alt:""},null,-1))),ja=[Da],Oa={key:2,class:"ele-card"},Za=wa((()=>(0,n._)("img",{width:"100%",src:ba,alt:""},null,-1))),qa=[Za];function za(e,a,l,t,i,o){const c=(0,n.up)("van-icon"),d=(0,n.up)("van-divider"),s=(0,n.up)("van-field"),r=(0,n.up)("van-cell-group");return(0,n.wg)(),(0,n.iD)("div",ga,[(0,n._)("div",ka,[(0,n._)("div",{onClick:a[0]||(a[0]=e=>t.clickHandle("1")),class:(0,fa.C_)("1"===t.value&&"active")},[(0,n.Wm)(c,{size:"30",name:"coupon"}),Wa],2),(0,n._)("div",{onClick:a[1]||(a[1]=e=>t.clickHandle("2")),class:(0,fa.C_)("2"===t.value&&"active")},[(0,n.Wm)(c,{size:"30",name:"award"}),Va],2),(0,n._)("div",{onClick:a[2]||(a[2]=e=>t.clickHandle("3")),class:(0,fa.C_)("3"===t.value&&"active")},[(0,n.Wm)(c,{size:"30",name:"photo"}),Ua],2)]),"1"===t.value?((0,n.wg)(),(0,n.iD)("div",ya,[(0,n._)("div",xa,[Ca,(0,n.Wm)(d),(0,n.Wm)(r,{inset:""},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{modelValue:t.a,"onUpdate:modelValue":a[3]||(a[3]=e=>t.a=e),label:"权利人","input-align":"right"},null,8,["modelValue"]),(0,n.Wm)(s,{modelValue:t.b,"onUpdate:modelValue":a[4]||(a[4]=e=>t.b=e),label:"共有情况","input-align":"right"},null,8,["modelValue"]),(0,n.Wm)(s,{modelValue:t.c,"onUpdate:modelValue":a[5]||(a[5]=e=>t.c=e),label:"坐落","input-align":"right"},null,8,["modelValue"]),(0,n.Wm)(s,{modelValue:t.d,"onUpdate:modelValue":a[6]||(a[6]=e=>t.d=e),label:"不动产单元号","input-align":"right"},null,8,["modelValue"]),(0,n.Wm)(s,{modelValue:t.e,"onUpdate:modelValue":a[7]||(a[7]=e=>t.e=e),label:"权利类型","input-align":"right"},null,8,["modelValue"]),(0,n.Wm)(s,{modelValue:t.f,"onUpdate:modelValue":a[8]||(a[8]=e=>t.f=e),label:"权利性质","input-align":"right"},null,8,["modelValue"]),(0,n.Wm)(s,{modelValue:t.g,"onUpdate:modelValue":a[9]||(a[9]=e=>t.g=e),label:"用途","input-align":"right"},null,8,["modelValue"]),(0,n.Wm)(s,{modelValue:t.h,"onUpdate:modelValue":a[10]||(a[10]=e=>t.h=e),label:"面积","input-align":"right"},null,8,["modelValue"]),(0,n.Wm)(s,{modelValue:t.i,"onUpdate:modelValue":a[11]||(a[11]=e=>t.i=e),label:"使用权限","input-align":"right"},null,8,["modelValue"]),(0,n.Wm)(s,{modelValue:t.j,"onUpdate:modelValue":a[12]||(a[12]=e=>t.j=e),label:"其他","input-align":"right"},null,8,["modelValue"])])),_:1})])])):(0,n.kq)("",!0),"2"===t.value?((0,n.wg)(),(0,n.iD)("div",Ha,ja)):(0,n.kq)("",!0),"3"===t.value?((0,n.wg)(),(0,n.iD)("div",Oa,qa)):(0,n.kq)("",!0)])}var Aa={setup(){const e=(0,r.yj)(),{query:{show:a}}=e;let l=(0,D.iH)();l.value="show"===a?"1":"download"===a?"2":"3";const t=e=>{l.value=e};let n=(0,D.iH)("李百卉"),i=(0,D.iH)("单独所有"),o=(0,D.iH)("临安区锦北街道溪庭B6幢2701室"),c=(0,D.iH)("330112007055GB00109F00040213"),d=(0,D.iH)("国有建设用地使用权/房屋 (构筑物)所有权"),s=(0,D.iH)("出让/存量房"),u=(0,D.iH)("城镇住宅用地/住宅"),v=(0,D.iH)("土地使用权面积4.6m/房屋建筑面积95.97m²"),m=(0,D.iH)("国有建设用地使用权2021年03月04日起2091年03月03日止"),p=(0,D.iH)("");return{value:l,clickHandle:t,a:n,b:i,c:o,d:c,e:d,f:s,g:u,h:v,i:m,j:p}}};const $a=(0,c.Z)(Aa,[["render",za],["__scopeId","data-v-76d2f929"]]);var Ia=$a,La=l.p+"img/不动产登记信息查询记录1.46ff1fa5.png",Ra=l.p+"img/不动产登记信息查询记录2.c8e5f734.png";const Pa=e=>((0,n.dD)("data-v-5f399b5a"),e=e(),(0,n.Cn)(),e),Ta={class:"cus-info-detail-container"},Xa=Pa((()=>(0,n._)("img",{width:"100%",src:La,alt:""},null,-1))),Ba=Pa((()=>(0,n._)("img",{width:"100%",src:Ra,alt:""},null,-1))),Ea=[Xa,Ba];function Fa(e,a,l,t,i,o){return(0,n.wg)(),(0,n.iD)("div",Ta,Ea)}var Ma={setup(){let e=(0,D.iH)();return{value:e}}};const Ga=(0,c.Z)(Ma,[["render",Fa],["__scopeId","data-v-5f399b5a"]]);var Ka=Ga;const Ya=[{path:"/",name:"home",component:Z,meta:{title:"不动产智治",keepAlive:!0}},{path:"/property_query",name:"property_query",component:J,meta:{title:"权属查询",keepAlive:!0}},{path:"/electronic_license",name:"electronic_license",component:ue,meta:{title:"电子证照",keepAlive:!0}},{path:"/processing_progress",name:"processing_progress",component:Ue,meta:{title:"办理进度",keepAlive:!0}},{path:"/custom_info",name:"custom_info",component:Fe,meta:{title:"客户信息",keepAlive:!0}},{path:"/custom_info_detail",name:"custom_info_detail",component:Ka,meta:{title:"客户信息详情",keepAlive:!0}},{path:"/electronic_license_list",name:"electronic_license_list",component:_a,meta:{title:"不动产-电子证照查询列表",keepAlive:!0}},{path:"/details_show",name:"details_show",component:Ia,meta:{title:"不动产-电子证照查询详情",keepAlive:!0}}],Ja=(0,r.p7)({history:(0,r.r5)(),routes:Ya});var Na=Ja,Qa=l(65),Sa=(0,Qa.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),el=l(5503);l(5110);const al=(0,t.ri)(s);al.use(Sa),al.use(Na),al.mount("#app"),al.use(el.ZPm)}},a={};function l(t){var n=a[t];if(void 0!==n)return n.exports;var i=a[t]={exports:{}};return e[t].call(i.exports,i,i.exports,l),i.exports}l.m=e,function(){var e=[];l.O=function(a,t,n,i){if(!t){var o=1/0;for(r=0;r<e.length;r++){t=e[r][0],n=e[r][1],i=e[r][2];for(var c=!0,d=0;d<t.length;d++)(!1&i||o>=i)&&Object.keys(l.O).every((function(e){return l.O[e](t[d])}))?t.splice(d--,1):(c=!1,i<o&&(o=i));if(c){e.splice(r--,1);var s=n();void 0!==s&&(a=s)}}return a}i=i||0;for(var r=e.length;r>0&&e[r-1][2]>i;r--)e[r]=e[r-1];e[r]=[t,n,i]}}(),function(){l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,{a:a}),a}}(),function(){l.d=function(e,a){for(var t in a)l.o(a,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){l.p=""}(),function(){var e={143:0};l.O.j=function(a){return 0===e[a]};var a=function(a,t){var n,i,o=t[0],c=t[1],d=t[2],s=0;if(o.some((function(a){return 0!==e[a]}))){for(n in c)l.o(c,n)&&(l.m[n]=c[n]);if(d)var r=d(l)}for(a&&a(t);s<o.length;s++)i=o[s],l.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return l.O(r)},t=self["webpackChunkkxj_demo"]=self["webpackChunkkxj_demo"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=l.O(void 0,[998],(function(){return l(1230)}));t=l.O(t)})();
//# sourceMappingURL=app.33f02c29.js.map