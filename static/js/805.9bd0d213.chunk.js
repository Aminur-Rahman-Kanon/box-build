"use strict";(self.webpackChunkboxdelabonita=self.webpackChunkboxdelabonita||[]).push([[805],{805:function(e,a,n){n.r(a),n.d(a,{default:function(){return E}});var i=n(2791),s={wrapper:"landingPage_wrapper__-dQuu",container:"landingPage_container__oWldy"},c=n(1922),l=n(3694),r=n(9439),t="landingPageContainer_container__JQ4YK",d="landingPageContainer_left__JeW-X",o="landingPageContainer_panelContainer__K7hXQ",u="landingPageContainer_headingSmallBlack__lA1XP",g="landingPageContainer_select__Y4THf",h="landingPageContainer_option__4cP4c",_="landingPageContainer_right__sE1dV",m="landingPageContainer_wrapper__oklA1",p="landingPageContainer_productContainer__fIBrL",x="landingPageContainer_product__jxxB9",j="landingPageContainer_bgContainer__Zo4kh",f="landingPageContainer_bg__TR8MX",N="landingPageContainer_banner__0tWrY",P="landingPageContainer_productHeading__XviEI",v="landingPageContainer_priceContainer__7d0KR",C="landingPageContainer_reducedPrice__CtR-W",b="landingPageContainer_mainPrice__dyPwf",y=n(317),k=n(1087),w=n(184),Z=function(e){var a=e.products,n=(0,i.useState)(""),s=(0,r.Z)(n,2),c=s[0],l=s[1],Z=(0,i.useState)(""),E=(0,r.Z)(Z,2),S=E[0],W=E[1],X=(0,i.useState)(""),B=(0,r.Z)(X,2),L=B[0],V=B[1],H=(0,i.useState)([]),K=(0,r.Z)(H,2),Q=K[0],R=K[1],Y=(0,i.useState)(!1),A=(0,r.Z)(Y,2),I=A[0],J=A[1];if((0,i.useEffect)((function(){if(c){var e=(Q.length?Q:a).filter((function(e){return e.category===c.toLowerCase()}));e.length?R(e):R([])}}),[c]),(0,i.useEffect)((function(){if(S){var e=S.split("-"),n=(0,r.Z)(e,2),i=n[0],s=n[1],c=(Q.length?Q:a).filter((function(e){return e.price.originalPrice>=Number(i)&&e.price.originalPrice<=Number(s)}));c.length?R(c):R([])}}),[S]),(0,i.useEffect)((function(){if(L){var e=Q.length?Q:a,n=[];e.forEach((function(e){e.color.length&&e.color.forEach((function(a){a.trim()===L.toLowerCase()&&n.push(e)}))})),n.length?R(n):R([])}}),[L]),(0,i.useEffect)((function(){J(!!(c||L||S))}),[c,L,S]),a){var M=y.W3.map((function(e){return(0,w.jsx)("option",{children:e.title},e.id)})),O=y.Hj.map((function(e){return(0,w.jsx)("option",{className:h,children:e},e)})),T=y.$_.map((function(e){return(0,w.jsx)("option",{className:h,children:e},e)})),U=(0,w.jsx)("div",{className:m,children:(0,w.jsx)("h3",{className:u,children:"Nothing found"})});return I&&Q.length?U=(0,w.jsx)("div",{className:m,children:(0,w.jsx)("div",{className:p,children:Q.map((function(e){return(0,w.jsxs)(k.rU,{to:"/bag/".concat(e.category,"/").concat(e.title),className:x,children:[(0,w.jsx)("div",{className:j,children:(0,w.jsx)("img",{src:Object.values(e.img)[0],alt:e.title,className:f})}),(0,w.jsxs)("div",{className:N,children:[(0,w.jsx)("h3",{className:u,children:e.title}),(0,w.jsxs)("div",{className:v,children:[(0,w.jsxs)("s",{style:e.price.discountedPrice?{display:"block"}:{display:"none"},className:C,children:["\u09f3",e.price.discountedPrice?e.price.originalPrice+e.price.discountedPrice:null]}),(0,w.jsxs)("span",{className:b,children:["\u09f3",e.price.originalPrice-e.price.discountedPrice]})]})]})]},e._id)}))})}):I&&!Q.length||(U=(0,w.jsx)("div",{className:m,children:(0,w.jsx)("div",{className:p,children:a.map((function(e){return(0,w.jsxs)(k.rU,{to:"/bag/".concat(e.category,"/").concat(e.title),className:x,children:[(0,w.jsx)("div",{className:j,children:(0,w.jsx)("img",{src:Object.values(e.img)[0],alt:e.title,className:f})}),(0,w.jsxs)("div",{className:N,children:[(0,w.jsx)("h3",{className:P,children:e.title}),(0,w.jsxs)("div",{className:v,children:[(0,w.jsxs)("s",{style:e.price.discountedPrice?{display:"block"}:{display:"none"},className:C,children:["\u09f3",e.price.discountedPrice>0?e.price.originalPrice+e.price.discountedPrice:null]}),(0,w.jsxs)("span",{className:b,children:["\u09f3",e.price.originalPrice-e.price.discountedPrice]})]})]})]},e._id)}))})})),(0,w.jsxs)("div",{className:t,children:[(0,w.jsxs)("div",{className:d,children:[(0,w.jsxs)("div",{className:o,children:[(0,w.jsx)("h3",{className:u,children:"Categories"}),(0,w.jsxs)("select",{defaultValue:"Please select a category",className:g,onChange:function(e){return l(e.target.value)},children:[(0,w.jsx)("option",{disabled:!0,className:h,children:"Please select a category"}),M]})]}),(0,w.jsxs)("div",{className:o,children:[(0,w.jsx)("h3",{className:u,children:"Price"}),(0,w.jsxs)("select",{defaultValue:"Please select a price range",className:g,onChange:function(e){return W(e.target.value)},children:[(0,w.jsx)("option",{disabled:!0,className:h,children:"Please select a price range"}),O]})]}),(0,w.jsxs)("div",{className:o,children:[(0,w.jsx)("h3",{className:u,children:"Colors"}),(0,w.jsxs)("select",{defaultValue:"Please select a color",className:g,onChange:function(e){return V(e.target.value)},children:[(0,w.jsx)("option",{disabled:!0,className:h,children:"Please select a color"}),T]})]})]}),(0,w.jsx)("div",{className:_,children:U})]})}},E=function(){var e=(0,i.useContext)(c.Z).product,a=e.isLoading?(0,w.jsx)("div",{className:s.container,children:(0,w.jsx)(l.Z,{spinner:!0})}):(0,w.jsx)("div",{className:s.container,children:e.data?(0,w.jsx)(Z,{products:e.data}):(0,w.jsx)("h2",{className:s.headingMediumBlack,children:"Nothing to display"})});return(0,w.jsx)("div",{className:s.wrapper,children:a})}}}]);
//# sourceMappingURL=805.9bd0d213.chunk.js.map