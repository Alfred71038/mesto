(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r,o,i,u,c){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._template=n,this._handleCardClick=r,this._likes=e.likes,this._userId=c,this._ownerId=e.owner._id,this._cardId=e._id,this._handleLikeCard=o,this._handleDislikeCard=i,this._handleCardDelete=u}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){var t=this,e=document.querySelector(this._template).content.querySelector(".element").cloneNode(!0);return this._elementImage=e.querySelector(".element__image"),this._buttonLike=e.querySelector(".element__place-reaction"),this._buttonDelete=e.querySelector(".element__delete-button"),this._countLike=e.querySelector(".element__place-count"),this._likes.filter((function(e){return e._id===t._userId})).length>0&&this._buttonLike.classList.add("element__place-reaction_active"),e}},{key:"countLike",value:function(t){this._countLike.textContent=t.likes.length}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._isOwner(),this._element.querySelector(".element__place-name").textContent=this._name,this._elementImage.src=this._link,this._elementImage.alt=this._name,this._element}},{key:"_setEventListeners",value:function(){var t=this;this._buttonLike.addEventListener("click",(function(){t._buttonLike.classList.contains("element__place-reaction_active")?t._handleDislikeCard(t):t._handleLikeCard(t)})),this._buttonDelete.addEventListener("click",(function(){t._handleCardDelete(t)})),this._elementImage.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"reactionButton",value:function(){this._buttonLike.classList.toggle("element__place-reaction_active")}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_isOwner",value:function(){this._userId!==this._ownerId&&this._buttonDelete.remove()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}const i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=n,this._formInput=e.formInput,this._popupInputTypeError=e.popupInputTypeError,this._popupSpanErrorActive=e.popupSpanErrorActive,this._popupButton=e.popupButton,this._popupButtonInactive=e.popupButtonInactive,this._formInputList=Array.from(this._form.querySelectorAll(this._formInput)),this._buttonElement=this._form.querySelector(this._popupButton)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this._form.querySelector(".".concat(t.id,"-error"));t.classList.add(this._popupInputTypeError),n.textContent=e,n.classList.add(this._popupSpanErrorActive)}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._popupInputTypeError),e.classList.remove(this._popupSpanErrorActive),e.textContent=""}},{key:"_isValid",value:function(t,e){t.validity.valid?this._hideInputError(t,e):this._showInputError(t,t.validationMessage,e)}},{key:"switchButton",value:function(){this._inputInvalid()?(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._popupButtonInactive)):(this._buttonElement.removeAttribute("disabled",!1),this._buttonElement.classList.remove(this._popupButtonInactive))}},{key:"_setEventListeners",value:function(){var t=this;this.switchButton(),this._formInputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t.switchButton()}))}))}},{key:"_inputInvalid",value:function(){return this._formInputList.some((function(t){return!t.validity.valid}))}},{key:"enableValidation",value:function(t){this._setEventListeners(t)}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var a=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,s(r.key),r)}}function s(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}var f=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.close()},(r=s(r="_closePopupByEsc"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(e)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._closePopupByEsc)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._closePopupByEsc)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",(function(e){e.currentTarget===e.target&&t.close(),e.target.classList.contains("popup__button-image")&&t.close()}))}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},m.apply(this,arguments)}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(r);if(o){var n=b(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__image"),e._popupSignature=e._popup.querySelector(".popup__signature"),e}return e=u,(n=[{key:"open",value:function(t,e){m(b(u.prototype),"open",this).call(this),this._popupImage.alt=t,this._popupImage.src=e,this._popupSignature.textContent=t}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},g.apply(this,arguments)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(r);if(o){var n=k(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=e,n._popupInputLIst=n._popup.querySelectorAll(".popup__input"),n._form=n._popup.querySelector(".popup__form"),n}return e=u,(n=[{key:"_submitInputPopup",value:function(){var t={};return this._popupInputLIst.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;g(k(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._submitInputPopup())}))}},{key:"close",value:function(){g(k(u.prototype),"close",this).call(this),this._form.reset()}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var P=function(){function t(e){var n=e.nameSelector,r=e.aboutMeSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar,o=t.id;this._name.textContent=e,this._about.textContent=n,this._avatar.src=r,this._userId=o}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}var q=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject(t.status)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"patchUserInfo",value:function(t){return fetch("".concat(this._url,"/users/me/"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"createCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addLike",value:function(t){return fetch("".concat(this._url,"/cards/likes/").concat(t),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"patchUserAvatar",value:function(t){var e=t.link;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({url:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"0d29d6a1-12b3-4f3a-8832-50cb159ade75","Content-Type":"application/json"}});function C(t,e){t?e.textContent.length>=9?e.textContent="Сохранение...":e.textContent="Создание...":e.textContent.length>=12?e.textContent="Сохранить":e.textContent="Создать"}function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},B.apply(this,arguments)}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}var D,U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(r);if(o){var n=A(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,n=t.popupSelector;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._form=e._popup.querySelector(".popup__form"),e}return e=u,(n=[{key:"handleSubmit",value:function(t){this._handleSubmit=t}},{key:"setEventListeners",value:function(){var t=this;B(A(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit()}))}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(f),V=document.querySelector("#profile"),M=document.querySelector("#card"),N=(document.querySelectorAll(".popup"),document.querySelector("#confirm"),document.querySelector("#avatar"),document.querySelector("#avatar-form")),z=(document.querySelectorAll(".popup__close-button"),document.querySelector(".profile__edit-button")),F=document.querySelector("#profile-form"),J=(document.querySelector(".profile"),document.querySelector(".profile__name"),document.querySelector(".profile__about-me"),document.querySelector(".profile__avatar")),G=V.querySelector(".popup__input_type_name"),H=V.querySelector(".popup__input_type_about-me"),$=document.querySelector(".profile__add-button"),K=document.querySelector("#card-form"),Q=(document.querySelector(".cards"),document.querySelector(".popup_zoom-image")),W=document.querySelector(".popup__button_card_create"),X=document.querySelector(".popup__button_profile_submit"),Y=document.querySelector(".popup__button_profile_avatar"),Z=(Q.querySelector(".popup__image"),Q.querySelector(".popup__signature"),M.querySelector(".popup__input_card-type-title"),M.querySelector(".popup__input_card-type-link"),document.querySelector(".popup__button")),tt=(document.querySelector(".element__place-count"),{popupForm:".popup__form",formInput:".popup__input",popupInputTypeError:"popup__form_input_type_error",popupSpanErrorActive:"popup__form_input-error-active",popupButton:".popup__button",popupButtonInactive:"popup__button_inactive"});function et(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}Promise.all([q.getUserInfo(),q.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,n)||function(t,e){if(t){if("string"==typeof t)return et(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?et(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];D=o._id,at.setUserInfo(o),ct.renderItems(i)})).catch((function(t){return console.log(t)}));var nt=function(t){q.addLike(t._cardId).then((function(e){t.reactionButton(),t.countLike(e)})).catch((function(t){return console.log(t)}))},rt=function(t){q.deleteCard(t._cardId).then((function(e){t.reactionButton(),t.countLike(e)})).catch((function(t){return console.log(t)}))};function ot(t){mt.open(),mt.handleSubmit((function(){C(!0,Z),q.deleteCard(t._cardId).then((function(){t.deleteCard(),mt.close()})).catch((function(t){return console.log(t)})).finally((function(){return C(!1,Z)}))}))}function it(t,e){yt.open(t,e)}var ut=function(t){var e=new n(t,"#elements-item-template",it,nt,rt,ot,D).generateCard();ct.addItem(e)},ct=new a({renderer:ut},".cards"),at=new P({nameSelector:".profile__name",aboutMeSelector:".profile__about-me",avatarSelector:".profile__avatar"}),lt=new E(".popup_avatar",(function(t){C(!0,Y),q.patchUserAvatar(t).then((function(t){at.setUserInfo(t),lt.close()})).catch((function(t){return console.log("Ошибка: ".concat(t))})).finally((function(){return C(!1,Y)}))}));lt.setEventListeners();var pt=new E(".popup_card",(function(t){C(!0,W),q.createCard(t).then((function(t){ut(t),pt.close()})).catch((function(t){return console.log(t)})).finally((function(){return C(!1,W)}))}));pt.setEventListeners(),z.addEventListener("click",(function(){var t=at.getUserInfo();G.value=t.name,H.value=t.about,ht.open()})),$.addEventListener("click",(function(t){pt.open(t),st.switchButton()})),J.addEventListener("click",(function(){console.log("клик на аватар"),console.log(lt),lt.open(),ft.switchButton()})),new i(tt,F).enableValidation();var st=new i(tt,K);st.enableValidation();var ft=new i(tt,N);ft.enableValidation();var yt=new d(".popup_zoom-image");yt.setEventListeners();var ht=new E(".popup_profile",(function(t,e){C(!0,X),q.patchUserInfo(t,e).then((function(t){at.setUserInfo(t),ht.close()})).catch((function(t){return console.log("Ошибка: ".concat(t))})).finally((function(){return C(!1,X)}))}));ht.setEventListeners();var mt=new U({popupSelector:".popup_confirm"});mt.setEventListeners()})();