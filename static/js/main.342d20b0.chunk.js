(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(6),r=n.n(o),s=(n(14),n(9)),i=n(2),l=n.p+"static/media/Close_button.0a2678e1.svg",u=n.p+"static/media/Vector.4e8e0a1d.svg",d=n(0);var m=function(){return Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("img",{className:"header__logo",src:u,alt:"Around the US"})})},b=n.p+"static/media/edit_profile_button.8667ac4a.svg",_=n.p+"static/media/Add_button.d86bb2ed.svg",h=c.a.createContext();var f=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,o=e.onCardDelete,r=c.a.useContext(h),s=t.owner._id===r._id,i="button card__delete-button ".concat(s?"card__delete-button_visible":"card__delete-button_hidden"),l=t.likes.some((function(e){return e._id===r._id})),u="button card__like-button ".concat(l?"card__like-button_active":"card__like-button_inactive");return Object(d.jsxs)("article",{className:"card",children:[Object(d.jsx)("button",{className:i,type:"button",onClick:function(){o(t)}}),Object(d.jsx)("img",{className:"card__img",src:t.link,alt:t.name,onClick:function(){n(t)}}),Object(d.jsxs)("div",{className:"card__text-container",children:[Object(d.jsx)("h2",{className:"card__text",children:t.name}),Object(d.jsxs)("div",{className:"card__likes-container",children:[Object(d.jsx)("button",{className:u,type:"button",onClick:function(){a(t)}}),Object(d.jsx)("p",{className:"card__text card__text_likes-number",children:t.likes.length})]})]})]})};var j=function(e){var t=e.onEditAvatarClick,n=e.onEditProfileClick,a=e.onAddPlaceClick,o=e.onCardClick,r=e.cards,s=e.onCardLike,i=e.onCardDelete,l=c.a.useContext(h);return Object(d.jsxs)("main",{className:"content",children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsxs)("div",{className:"profile__avatar-container",children:[Object(d.jsx)("img",{src:l.avatar,className:"profile__avatar",alt:l.name}),Object(d.jsx)("button",{className:"button profile__avatar-button",onClick:t,type:"button",style:{backgroundImage:"url(".concat(b,")")}})]}),Object(d.jsxs)("div",{className:"profile__text-container",children:[Object(d.jsx)("h1",{className:"profile__name",children:l.name}),Object(d.jsx)("button",{className:"button profile__edit-button",type:"button",style:{backgroundImage:"url(".concat(b,")")},onClick:n}),Object(d.jsx)("p",{className:"profile__about",children:l.about})]})]}),Object(d.jsx)("button",{className:"button profile__add-button",type:"button",style:{backgroundImage:"url(".concat(_,")")},onClick:a})]}),Object(d.jsx)("section",{className:"elements",children:r.map((function(e){return Object(d.jsx)(f,{card:e,onCardClick:o,onCardLike:s,onCardDelete:i},e._id)}))})]})};var p=function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("p",{className:"footer__author",children:"\xa92021 Around The U.S. by Santiago S\xe1nchez-Romero"})})};var O=function(e){return Object(d.jsx)("div",{className:"modal modal_type_".concat(e.moldalType," ").concat(e.isOpen&&"modal_open"),children:Object(d.jsxs)("div",{className:"modal__box modal__box_type_".concat(e.moldalType),children:[Object(d.jsx)("button",{className:"modal__close-button modal__close-button_type_".concat(e.moldalType," button"),type:"button",style:{backgroundImage:"url(".concat(e.closeButtons,")")},onClick:e.onClose}),Object(d.jsxs)("form",{className:"modal__form modal__form_type_".concat(e.moldalType),name:"profile-form_type_".concat(e.moldalType),onSubmit:e.onSubmit,children:[Object(d.jsx)("h2",{className:"modal__text modal__text_type_".concat(e.moldalType),children:e.modalTitle}),e.children,Object(d.jsx)("button",{className:"button modal__save-button modal__save-button_type_".concat(e.moldalType),type:"submit",children:e.modalButtonText})]})]})})};var v=function(e){return Object(d.jsx)("div",{className:"modal modal_type_preview ".concat(e.selectedCard&&"modal_open"),children:Object(d.jsxs)("div",{className:"modal__box modal__box_type_preview",children:[Object(d.jsx)("button",{className:"modal__close-button modal__close-button_type_preview button",type:"button",style:{backgroundImage:"url(".concat(e.closeButtons,")")},onClick:e.onClose}),Object(d.jsxs)("figure",{className:"modal__preview-figure",children:[Object(d.jsx)("img",{className:"modal__preview-image",src:e.selectedCard&&e.selectedCard.link,alt:e.selectedCard&&e.selectedCard.name}),Object(d.jsx)("figcaption",{className:"modal__preview-caption",children:e.selectedCard&&e.selectedCard.name})]})]})})},x=n(7),C=n(8),k=new(function(){function e(t){Object(x.a)(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}return Object(C.a)(e,[{key:"_checkErrors",value:function(e){return e.ok?e.json():Promise.reject("Error ".concat(e.status))}},{key:"getProfile",value:function(){var e=this;return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then((function(t){return e._checkErrors(t)}))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then((function(t){return e._checkErrors(t)}))}},{key:"createCard",value:function(e){var t=this,n=e.name,a=e.link;return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:n,link:a})}).then((function(e){return t._checkErrors(e)}))}},{key:"changeProfileInfo",value:function(e){var t=this,n=e.name,a=e.about;return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:n,about:a})}).then((function(e){return t._checkErrors(e)}))}},{key:"changeProfileAvatar",value:function(e){var t=this,n=e.avatar;return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:n})}).then((function(e){return t._checkErrors(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return t._checkErrors(e)}))}},{key:"likeCard",value:function(e,t){var n=this,a=t?"DELETE":"PUT";return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:a,headers:this.headers}).then((function(e){return n._checkErrors(e)}))}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-13",headers:{authorization:"0f98077f-1b08-4829-ae57-6f81ab47380c","Content-Type":"application/json"}});var g=function(e){var t=c.a.useState(""),n=Object(i.a)(t,2),a=n[0],o=n[1],r=c.a.useState(""),s=Object(i.a)(r,2),l=s[0],u=s[1],m=c.a.useContext(h);return c.a.useEffect((function(){o(m.name),u(m.about)}),[m]),Object(d.jsx)("div",{children:Object(d.jsxs)(O,{modalType:"edit",modalTitle:"Edit Profile",modalButtonText:"Save",closeButtons:e.closeButtons,isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:a,about:l})},children:[Object(d.jsx)("input",{value:a,onChange:function(e){o(e.target.value)},id:"name-input",className:"modal__form-item modal__form-item_type_name",type:"text",name:"name",placeholder:"Name",required:!0,minLength:"2",maxLength:"40"}),Object(d.jsx)("span",{id:"name-input-error",className:"modal__error"}),Object(d.jsx)("input",{value:l,onChange:function(e){u(e.target.value)},id:"about-input",className:"modal__form-item modal__form-item_type_about",type:"text",name:"about",placeholder:"About Me",required:!0,minLength:"2",maxLength:"200"}),Object(d.jsx)("span",{id:"about-input-error",className:"modal__error"})]})})};var y=function(e){var t=c.a.useRef();return c.a.useEffect((function(){t.current.value=""}),[e.isOpen]),Object(d.jsx)("div",{children:Object(d.jsxs)(O,{isOpen:e.isOpen,moldalType:"avatar",modalTitle:"Change profile picture",modalButtonText:"Change",closeButtons:e.closeButtons,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:[Object(d.jsx)("input",{ref:t,id:"link-input-avatar",className:"modal__form-item modal__form-item_type_image-link",type:"url",name:"avatar",placeholder:"Image link",required:!0}),Object(d.jsx)("span",{id:"link-input-avatar-error",className:"modal__error"})]})})};var N=function(e){var t=c.a.useState(""),n=Object(i.a)(t,2),a=n[0],o=n[1],r=c.a.useState(""),s=Object(i.a)(r,2),l=s[0],u=s[1];return c.a.useEffect((function(){o(""),u("")}),[e.isOpen]),Object(d.jsx)("div",{children:Object(d.jsxs)(O,{isOpen:e.isOpen,moldalType:"add",modalTitle:"New Place",modalButtonText:"Create",closeButtons:e.closeButtons,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlaceSubmit({name:a,link:l})},children:[Object(d.jsx)("input",{value:a,onChange:function(e){o(e.target.value)},id:"title-input",className:"modal__form-item modal__form-item_type_title",type:"text",name:"title",placeholder:"Title",required:!0,minLength:"1",maxLength:"40"}),Object(d.jsx)("span",{id:"title-input-error",className:"modal__error"}),Object(d.jsx)("input",{value:l,onChange:function(e){u(e.target.value)},id:"link-input",className:"modal__form-item modal__form-item_type_image-link",type:"url",name:"link",placeholder:"Image link",required:!0}),Object(d.jsx)("span",{id:"link-input-error",className:"modal__error"})]})})};var T=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),r=Object(i.a)(o,2),u=r[0],b=r[1],_=Object(a.useState)(!1),f=Object(i.a)(_,2),x=f[0],C=f[1],T=Object(a.useState)(null),P=Object(i.a)(T,2),S=P[0],E=P[1],B=Object(a.useState)({}),U=Object(i.a)(B,2),A=U[0],L=U[1],w=Object(a.useState)([]),I=Object(i.a)(w,2),D=I[0],q=I[1];function J(){b(!1),c(!1),C(!1),E(null)}return Object(a.useEffect)((function(){k.getCards().then((function(e){q(e)})).catch((function(e){return console.error("Problem fetching cards cards: ".concat(e))}))}),[]),Object(a.useEffect)((function(){k.getProfile().then((function(e){L(e)})).catch((function(e){return console.error("Problem fetching profile data: ".concat(e))}))}),[]),Object(d.jsx)("div",{children:Object(d.jsxs)(h.Provider,{value:A,children:[Object(d.jsx)(m,{}),Object(d.jsx)(j,{onEditAvatarClick:function(){c(!0)},onEditProfileClick:function(){b(!0)},onAddPlaceClick:function(){C(!0)},onCardClick:function(e){E(e)},cards:D,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===A._id}));k.likeCard(e._id,t).then((function(t){q((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.error("Problem liking card: ".concat(e))}))},onCardDelete:function(e){k.deleteCard(e._id).then((function(){q(D.filter((function(t){return t!==e})))})).catch((function(e){return console.error("Problem deleting card: ".concat(e))}))}}),Object(d.jsx)(p,{}),Object(d.jsx)(O,{moldalType:"delete",modalTitle:"Are you sure?",modalButtonText:"Yes",closeButtons:l}),Object(d.jsx)(y,{isOpen:n,onClose:J,onUpdateAvatar:function(e){k.changeProfileAvatar(e).then((function(e){L(e),J()})).catch((function(e){return console.error("Problem updating avatar: ".concat(e))}))},closeButtons:l}),Object(d.jsx)(g,{isOpen:u,onClose:J,closeButtons:l,onUpdateUser:function(e){k.changeProfileInfo(e).then((function(e){L(e),J()})).catch((function(e){return console.error("Problem updating user: ".concat(e))}))}}),Object(d.jsx)(N,{isOpen:x,onClose:J,closeButtons:l,onAddPlaceSubmit:function(e){k.createCard(e).then((function(e){q([e].concat(Object(s.a)(D))),J()})).catch((function(e){return console.error("Problem adding new card: ".concat(e))}))}}),Object(d.jsx)(v,{closeButtons:l,selectedCard:S,onClose:J})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(T,{})}),document.getElementById("root")),P()}},[[16,1,2]]]);
//# sourceMappingURL=main.342d20b0.chunk.js.map