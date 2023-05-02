(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}t.r(e),t.d(e,{rr:()=>Q,aJ:()=>K,HN:()=>X,Kg:()=>G,sX:()=>J,sF:()=>H,ve:()=>z});var o=function(){function t(e,n,r,o,i,u,c){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._template=n,this._handleCardClick=r,this._likes=e.likes,this._userId=c,this._ownerId=e.owner._id,this._cardId=e._id,this._handleLikeCard=o,this._handleDislikeCard=i,this._handleCardDelete=u}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){var t=this,e=document.querySelector(this._template).content.querySelector(".element").cloneNode(!0);return this._elementImage=e.querySelector(".element__image"),this._buttonLike=e.querySelector(".element__place-reaction"),this._buttonDelete=e.querySelector(".element__delete-button"),this._countLike=e.querySelector(".element__place-count"),this._countLike.textContent=this._likes.length,this._likes.filter((function(e){return e._id===t._userId})).length>0&&this._buttonLike.classList.add("element__place-reaction_active"),e}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._isOwner(),this._element.querySelector(".element__place-name").textContent=this._name,this._elementImage.src=this._link,this._elementImage.alt=this._name,this._element}},{key:"_setEventListeners",value:function(){var t=this;this._buttonLike.addEventListener("click",(function(){t._buttonLike.classList.contains("element__place-reaction_active")?t._handleDislikeCard(t):t._handleLikeCard(t)})),this._buttonDelete.addEventListener("click",(function(){t._handleCardDelete(t)})),this._elementImage.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"reactionButton",value:function(){this._buttonLike.classList.toggle("element__place-reaction_active")}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_isOwner",value:function(){this._userId!==this._ownerId&&this._buttonDelete.remove()}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}const c=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=n,this._formInput=e.formInput,this._popupInputTypeError=e.popupInputTypeError,this._popupSpanErrorActive=e.popupSpanErrorActive,this._popupButton=e.popupButton,this._popupButtonInactive=e.popupButtonInactive,this._formInputList=Array.from(this._form.querySelectorAll(this._formInput)),this._buttonElement=this._form.querySelector(this._popupButton)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this._form.querySelector(".".concat(t.id,"-error"));t.classList.add(this._popupInputTypeError),n.textContent=e,n.classList.add(this._popupSpanErrorActive)}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._popupInputTypeError),e.classList.remove(this._popupSpanErrorActive),e.textContent=""}},{key:"_isValid",value:function(t,e){t.validity.valid?this._hideInputError(t,e):this._showInputError(t,t.validationMessage,e)}},{key:"switchButton",value:function(){this._inputInvalid()?(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._popupButtonInactive)):(this._buttonElement.removeAttribute("disabled",!1),this._buttonElement.classList.remove(this._popupButtonInactive))}},{key:"_setEventListeners",value:function(){var t=this;this.switchButton(),this._formInputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t.switchButton()}))}))}},{key:"_inputInvalid",value:function(){return this._formInputList.some((function(t){return!t.validity.valid}))}},{key:"enableValidation",value:function(t){this._setEventListeners(t)}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var p=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,y(r.key),r)}}function y(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===s(e)?e:String(e)}var h=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.close()},(r=y(r="_closePopupByEsc"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(e)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._closePopupByEsc)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._closePopupByEsc)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",(function(e){e.currentTarget===e.target&&t.close(),e.target.classList.contains("popup__button-image")&&t.close()}))}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},b.apply(this,arguments)}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(r);if(o){var n=_(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__image"),e._popupSignature=e._popup.querySelector(".popup__signature"),e}return e=u,(n=[{key:"open",value:function(t,e){b(_(u.prototype),"open",this).call(this),this._popupImage.alt=t,this._popupImage.src=e,this._popupSignature.textContent=t}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},k.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(o){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=e,n._popupInputLIst=n._popup.querySelectorAll(".popup__input"),n._form=n._popup.querySelector(".popup__form"),n}return e=u,(n=[{key:"_submitInputPopup",value:function(){var t={};return this._popupInputLIst.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;k(O(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._submitInputPopup())}))}},{key:"close",value:function(){k(O(u.prototype),"close",this).call(this),this._form.reset()}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}var L=function(){function t(e){var n=e.nameSelector,r=e.aboutMeSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar,o=t.id;this._name.textContent=e,this._about.textContent=n,this._avatar.src=r,this._userId=o}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}var T=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject(t.status)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"patchUserInfo",value:function(t){return fetch("".concat(this._url,"/users/me/"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"createCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addLike",value:function(t){return fetch("".concat(this._url,"/cards/likes/").concat(t),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"patchUserAvatar",value:function(t){var e=t.link;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({url:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"0d29d6a1-12b3-4f3a-8832-50cb159ade75","Content-Type":"application/json"}});function R(t,e){t?e.textContent.length>=9?e.textContent="Сохранение...":e.textContent="Создание...":e.textContent.length>=12?e.textContent="Сохранить":e.textContent="Создать"}function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=U(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},A.apply(this,arguments)}function D(t,e){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},D(t,e)}function U(t){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},U(t)}var F,M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&D(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=U(r);if(o){var n=U(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===B(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,n=t.popupSelector;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._confirmButton=e._popup.querySelector(".popup__button_confirm"),e}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;A(U(u.prototype),"setEventListeners",this).call(this),this._confirmButton.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit()}))}},{key:"handleSubmit",value:function(t){this._handleSubmit=t}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h),N=document.querySelector("#profile"),V=document.querySelector("#card"),J=(document.querySelectorAll(".popup"),document.querySelector("#confirm"),document.querySelector("#avatar"),document.querySelector("#form-avatar"),document.querySelectorAll(".popup__close-button"),document.querySelector(".profile__edit-button")),z=document.querySelector("#profile-form"),H=(document.querySelector(".profile"),document.querySelector(".profile__name"),document.querySelector(".profile__about-me"),document.querySelector(".profile__avatar")),G=N.querySelector(".popup__input_type_name"),K=N.querySelector(".popup__input_type_about-me"),X=document.querySelector(".profile__add-button"),Q=document.querySelector("#card-form"),W=(document.querySelector(".cards"),document.querySelector(".popup_zoom-image")),Y=(document.querySelector(".popup__button_card_create"),W.querySelector(".popup__image"),W.querySelector(".popup__signature"),V.querySelector(".popup__input_card-type-title"),V.querySelector(".popup__input_card-type-link"),{popupForm:".popup__form",formInput:".popup__input",popupInputTypeError:"popup__form_input_type_error",popupSpanErrorActive:"popup__form_input-error-active",popupButton:".popup__button",popupButtonInactive:"popup__button_inactive"});T.getUserInfo().then((function(t){console.log(t),F=t._id,rt.setUserInfo(t)})).catch((function(t){return console.log(t)})),T.getInitialCards().then((function(t){console.log(t),nt.renderItems(t)})).catch((function(t){return console.log(t)}));var Z=function(t){T.addLike(t._cardId).then((function(e){t.reactionButton(),t._countLike.textContent=e.likes.length})).catch((function(t){return console.log(t)}))},$=function(t){T.deleteCard(t._cardId).then((function(e){t.reactionButton(),t._countLike.textContent=e.likes.length})).catch((function(t){return console.log(t)}))};function tt(t){lt.open(),lt.handleSubmit((function(){R(!0,e.popupButton),T.deleteCard(t._cardId).then((function(){t.deleteCard(),lt.close()})).catch((function(t){return console.log(t)})).finally((function(){return R(!1,e.popupButton)}))}))}function et(t,e){ut.open(t,e)}var nt=new p({renderer:function(t){var e=new o(t,"#elements-item-template",et,Z,$,tt,F).generateCard();nt.addItem(e)}},".cards"),rt=new L({nameSelector:".profile__name",aboutMeSelector:".profile__about-me",avatarSelector:".profile__avatar"}),ot=new P(".popup_avatar",(function(t){R(!0,e.popupButton),T.patchUserAvatar(t).then((function(t){rt.setUserInfo(t)})).catch((function(t){return console.log("Ошибка: ".concat(t))})).finally((function(){return R(!1,e.popupButton)}))}));ot.setEventListeners(),J.addEventListener("click",(function(){var t=rt.getUserInfo();G.value=t.name,K.value=t.about,ct.open()})),X.addEventListener("click",(function(t){at.open(t),it.switchButton()})),H.addEventListener("click",(function(){console.log("клик на аватар"),console.log(ot),ot.open()})),new c(Y,z).enableValidation();var it=new c(Y,Q);it.enableValidation();var ut=new S(".popup_zoom-image");ut.setEventListeners();var ct=new P(".popup_profile",(function(t,n){R(!0,e.popupButton),T.patchUserInfo(t,n).then((function(t){rt.setUserInfo(t)})).catch((function(t){return console.log("Ошибка: ".concat(t))})).finally((function(){return R(!1,e.popupButton)}))}));ct.setEventListeners();var at=new P(".popup_card",handleFormSubmitCard);at.setEventListeners();var lt=new M({popupSelector:".popup_confirm"});lt.setEventListeners()})();