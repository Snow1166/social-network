"use strict";(self.webpackChunkfirstapp=self.webpackChunkfirstapp||[]).push([[616],{5442:function(t,s,e){e.d(s,{e:function(){return a}});var r=e(8683),n=e(5987),i=e(2187),o=e(184),u=["input","meta"],a=function(t){var s=t.input,e=t.meta,a=(0,n.Z)(t,u),c=e.touched&&e.error;return(0,o.jsxs)("div",{className:i.Z.formControl+" "+(c?i.Z.error:" "),children:[(0,o.jsx)("div",{children:(0,o.jsx)(a.tag,(0,r.Z)((0,r.Z)({},a),s))}),(0,o.jsx)("div",{children:c&&(0,o.jsx)("span",{children:e.error})})]})}},2616:function(t,s,e){e.r(s),e.d(s,{default:function(){return X}});var r=e(8683),n=e(5671),i=e(3144),o=e(136),u=e(516),a=e(2791),c="ProfileInfo_head__ngVk7",l="ProfileInfo_descriptionBlock__XBXuJ",p=e(4353),f=e(9496),d=e(9439),h=e(184),j=function(t){var s=(0,a.useState)(!1),e=(0,d.Z)(s,2),r=e[0],n=e[1],i=(0,a.useState)(t.status),o=(0,d.Z)(i,2),u=o[0],c=o[1];return(0,a.useEffect)((function(){c(t.status)}),[t.status]),(0,h.jsx)("div",{children:r?(0,h.jsx)("div",{children:(0,h.jsx)("input",{onChange:function(t){c(t.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),t.updateStatus(u)},value:u,type:""})}):(0,h.jsx)("div",{children:(0,h.jsx)("span",{onDoubleClick:function(){n(!0)},children:t.status||"\u0417\u0430\u0434\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441"})})})},x=function(t){return t.profile?(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{children:(0,h.jsx)("img",{className:c,src:"https://yahont-hotel.ru/ckeditor_images/chernomorskoje_vid.jpg",alt:""})}),(0,h.jsxs)("div",{className:l,children:[(0,h.jsxs)("span",{children:[(0,h.jsx)("img",{src:t.profile.photos.large?t.profile.photos.large:p,alt:""}),(0,h.jsx)("h2",{children:t.profile.fullName}),(0,h.jsx)("div",{children:(0,h.jsx)(j,{status:t.status,updateStatus:t.updateStatus})}),(0,h.jsxs)("h3",{children:["\u041e\u0431\u043e \u043c\u043d\u0435: ",t.profile.aboutMe]})]}),(0,h.jsxs)("span",{children:[(0,h.jsx)("p",{children:"contacts:"}),(0,h.jsxs)("ul",{children:[(0,h.jsxs)("li",{children:["facebook: ",t.profile.contacts.facebook?t.profile.contacts.facebook:"\u041d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"]}),(0,h.jsxs)("li",{children:["website: ",t.profile.contacts.website?t.profile.contacts.website:"\u041d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"]}),(0,h.jsxs)("li",{children:["vk: ",t.profile.contacts.vk?t.profile.contacts.vk:"\u041d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"]}),(0,h.jsxs)("li",{children:["twitter: ",t.profile.contacts.twitter?t.profile.contacts.twitter:"\u041d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"]}),(0,h.jsxs)("li",{children:["instagram: ",t.profile.contacts.instagram?t.profile.contacts.instagram:"\u041d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"]}),(0,h.jsxs)("li",{children:["youtube: ",t.profile.contacts.youtube?t.profile.contacts.youtube:"\u041d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"]}),(0,h.jsxs)("li",{children:["github: ",t.profile.contacts.github?t.profile.contacts.github:"\u041d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"]}),(0,h.jsxs)("li",{children:["mainLink: ",t.profile.contacts.mainLink?t.profile.contacts.mainLink:"\u041d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"]})]}),(0,h.jsxs)("p",{children:["\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443: ",t.profile.lookingForAJobDescription?t.profile.lookingForAJobDescription:"\u041d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"]})]})]})]}):(0,h.jsx)(f.Z,{})},m=e(6070),g="MyPosts_posts__osR5r",v="MyPosts_postBlock__pQ6uD",k={},b=function(t){return(0,h.jsxs)("div",{className:k.item,children:[(0,h.jsx)("img",{className:"ava",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypj29pzM-egDEkWJsvNtRwymMjwR3XOnq3Q&usqp=CAU",alt:""}),t.post,(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{children:"like: "})," ",t.likesCount]})]})},_=e(6139),Z=e(704),C=e(5304),y=e(5442),P=(0,C.D)(30),A=a.memo((function(t){var s=t.profilePage.posts.map((function(t){return(0,h.jsx)(b,{post:t.post,likesCount:t.likesCount},t.id)}));return(0,h.jsxs)("div",{className:v,children:[(0,h.jsx)("h3",{children:"My post"}),(0,h.jsx)("p",{children:"new post"}),(0,h.jsx)("div",{children:(0,h.jsx)(S,{onSubmit:function(s){t.addPost(s.newPostBody)}})}),(0,h.jsx)("div",{className:g}),s]})})),S=(0,Z.Z)({form:"postsAddPostForm"})((function(t){return(0,h.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,h.jsx)(_.Z,{name:"newPostBody",component:y.e,tag:"textarea",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043f\u043e\u0441\u0442\u0430",validate:[C.C,P]}),(0,h.jsx)("button",{children:"Add post "})]})})),w=A,N=e(8687),F=(0,N.$j)((function(t){return{profilePage:t.profilePage}}),(function(t){return{addPost:function(s){return t((0,m.q2)(s))}}}))(w),M=function(t){return(0,h.jsxs)("div",{children:[(0,h.jsx)(x,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,h.jsx)(F,{store:t.store})]})},D=e(27),I=e(7689),q=e(7781),B=(e(1548),function(t){(0,o.Z)(e,t);var s=(0,u.Z)(e);function e(){return(0,n.Z)(this,e),s.apply(this,arguments)}return(0,i.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.router.params.userId;t||(this.props.userId?t=this.props.userId:(0,D.uX)("Login")),this.props.getProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return this.props.isAuth?(0,h.jsx)("div",{children:(0,h.jsx)(M,(0,r.Z)((0,r.Z)({},this.props),{},{profile:this.props.profile}))}):(0,h.jsx)(I.Fg,{to:"/login"})}}]),e}(a.Component));var X=(0,q.qC)((0,N.$j)((function(t){return{profile:t.profilePage.profile,isAuth:t.auth.isAuth,status:t.profilePage.profileStatus,userId:t.auth.userId}}),{getProfile:m.Ai,getStatus:m.lR,updateStatus:m.Nf}),(function(t){return function(s){var e=(0,I.TH)(),n=(0,I.s0)(),i=(0,I.UO)();return(0,h.jsx)(t,(0,r.Z)((0,r.Z)({},s),{},{router:{location:e,navigate:n,params:i}}))}}))(B)},1548:function(t,s,e){var r=e(8683),n=(e(2791),e(7689)),i=e(8687),o=e(184),u=function(t){return{isAuth:t.auth.isAuth}};s.Z=function(t){return(0,i.$j)(u)((function(s){return s.isAuth?(0,o.jsx)(t,(0,r.Z)({},s)):(0,o.jsx)(n.Fg,{to:"/login"})}))}},5304:function(t,s,e){e.d(s,{C:function(){return r},D:function(){return n}});var r=function(t){if(!t)return"Field is required"},n=function(t){return function(s){if(s.length>t)return"Max length is ".concat(t," symbol")}}},2187:function(t,s){s.Z={formControl:"FormControls_formControl__CAlX7",error:"FormControls_error__Zkh-E",errorMessage:"FormControls_errorMessage__feX+V"}},4353:function(t,s,e){t.exports=e.p+"static/media/user.5faf09a7795d28bf5a2b.png"}}]);
//# sourceMappingURL=616.9274523a.chunk.js.map