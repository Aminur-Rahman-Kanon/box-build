"use strict";(self.webpackChunkboxdelabonita=self.webpackChunkboxdelabonita||[]).push([[330],{6926:function(t,a,e){e.d(a,{Z:function(){return p}});var r=e(4165),c=e(5861),n=e(9439),s=e(2791),o=e(1922),i={addToBagBtn:"addToBagBtn_addToBagBtn__5Ujmb"},l=e(9806),d=e(1632),u=e(9085),m=e(9537),_=e(184),p=function(t){var a,e=t.disable,p=t.product,x=t.title,h=t.color,j=(0,s.useContext)(o.Z).setAddItem,C=(0,s.useState)(!1),I=(0,n.Z)(C,2),b=I[0],v=I[1];return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("button",{disabled:!e,className:i.addToBagBtn,onClick:function(){return(a=a||(0,c.Z)((0,r.Z)().mark((function t(){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(v(!0),p.title){t.next=4;break}return v(!1),t.abrupt("return",u.Am.error("Failed",{style:{textTransform:"capitalize",fontWeight:"600"}}));case 4:if(h){t.next=7;break}return v(!1),t.abrupt("return",u.Am.info("Please Select a Color",{style:{backgroundColor:"#067FD0",textTransform:"capitalize",fontWeight:"600"}}));case 7:"success"===(a=(0,m.Xq)(p,h))?(v(!1),u.Am.success("".concat(p.title," added to cart"),{style:{backgroundColor:"#4b7d37",textTransform:"capitalize",fontWeight:"600"}}),j((function(t){return t+1}))):(v(!1),u.Am.error("".concat(a),{style:{fontWeight:"600",textTransform:"capitalize"}}));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)},children:b?(0,_.jsx)(l.G,{"data-testid":"spinner",icon:d.LM3,spinPulse:!0,className:i.loader}):(0,_.jsx)("span",{className:i.btn,children:x})})})}},7330:function(t,a,e){e.r(a),e.d(a,{default:function(){return N}});var r=e(9439),c=e(2791),n=e(1922),s={cartContainerMain:"cart_cartContainerMain__Rlofx",cartContainer:"cart_cartContainer__ePzRj",cartItemContainer:"cart_cartItemContainer__SJFIE",cartLabels:"cart_cartLabels__3rXYP",cartLabel:"cart_cartLabel__JxZrC",cartItemElements:"cart_cartItemElements__O1SY6",cartItemElement:"cart_cartItemElement__VyB5C",cartItemImgContainerMain:"cart_cartItemImgContainerMain__ZI-YC",cartItems:"cart_cartItems__uTLyY",cartItem:"cart_cartItem__geCgB",cartImgContainer:"cart_cartImgContainer__rW8P2",cartImg:"cart_cartImg__MFylJ",cartInfoContainer:"cart_cartInfoContainer__pwBSi",cartTitle:"cart_cartTitle__+eC6a",colorContainer:"cart_colorContainer__rw9L+",colors:"cart_colors__mxMjV",quantityBtn:"cart_quantityBtn__jlSkc",quantityCount:"cart_quantityCount__pGug+",subtotal:"cart_subtotal__2791r",cartDetailsContainer:"cart_cartDetailsContainer__tZCtZ",couponInputContainer:"cart_couponInputContainer__JbwuI",couponInput:"cart_couponInput__dFvC0",couponBtn:"cart_couponBtn__UAwut",totalContainer:"cart_totalContainer__THFza",totalItem:"cart_totalItem__LqDun",totalLabel:"cart_totalLabel__XajBy",cartFooterContainer:"cart_cartFooterContainer__6huap",cartFooterItem:"cart_cartFooterItem__+2AjJ",cartFooterImg:"cart_cartFooterImg__y25wR",cartFooterBtn:"cart_cartFooterBtn__48Fb6",couponContainer:"cart_couponContainer__Y3hkY",totalItems:"cart_totalItems__DwDdc"},o=e(7689),i=e(5889),l=e(9726),d=e(3703),u=e(6926),m=e(9085),_=(e(5462),e(5743)),p=e(4165),x=e(5861),h={removeAllProductsBtn:"removeAllProducts_removeAllProductsBtn__M3fzS"},j=e(9806),C=e(1632),I=e(9537),b=e(184),v=function(t){var a,e=t.title,n=t.cb,s=(0,c.useState)(!1),o=(0,r.Z)(s,2),i=o[0],l=o[1];return(0,b.jsx)("button",{className:h.removeAllProductsBtn,onClick:function(){return(a=a||(0,x.Z)((0,p.Z)().mark((function t(){return(0,p.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l(!0),"success"!==(0,I.mu)(e)){t.next=8;break}return l(!1),n((function(t){return t-1})),t.abrupt("return",m.Am.success("".concat(e," removed"),{style:{backgroundColor:"#4b7d37",textTransform:"capitalize",fontWeight:"600"}}));case 8:return l(!1),t.abrupt("return",m.Am.error("Failed, try again",{style:{textTransform:"capitalize",fontWeight:"600"}}));case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)},disabled:!e,children:i?(0,b.jsx)(j.G,{"data-testid":"spinner",icon:C.LM3,spinPulse:!0,className:h.spinner}):(0,b.jsx)("span",{className:h.btnTitle,children:"Remove"})})};var N=function(){var t=(0,c.useContext)(n.Z),a=t.addItem,e=(0,c.useState)({}),p=(0,r.Z)(e,2),x=p[0],h=p[1],j=(0,c.useState)(""),C=(0,r.Z)(j,2),N=C[0],f=C[1];(0,c.useEffect)((function(){var t=(0,I.ck)();h(t)}),[a]);var g=(0,o.s0)(),y=0,B=null;return B=Object.keys(x).length?Object.values(x).map((function(a){return y+=a.quantity*a.price,(0,b.jsxs)("div",{className:s.cartItem,children:[(0,b.jsxs)("div",{className:s.cartItemImgContainerMain,children:[(0,b.jsx)("div",{className:s.cartImgContainer,children:(0,b.jsx)("img",{src:Object.values(a.product.img)[0],alt:a.product.title,className:s.cartImg})}),(0,b.jsxs)("div",{className:s.cartInfoContainer,children:[(0,b.jsx)("p",{className:s.cartTitle,children:a.product.title}),(0,b.jsx)("p",{className:s.cartTitle,children:"Item id: fghy22kl2"}),(0,b.jsxs)("p",{className:s.cartTitle,children:["price: \u09f3",a.price*a.quantity]})]})]}),(0,b.jsxs)("div",{className:s.cartItemElements,children:[(0,b.jsx)("div",{className:s.cartItemElement,children:(0,b.jsx)("div",{className:s.colorContainer,children:a.color.length?a.color.map((function(t,a){return(0,b.jsx)("div",{className:s.colors,style:{backgroundColor:"".concat(t)}},a)})):(0,b.jsx)("span",{children:"No colors"})})}),(0,b.jsxs)("div",{className:s.cartItemElement,children:[(0,b.jsx)("div",{className:s.quantityBtn,children:(0,b.jsx)(u.Z,{disable:!0,title:"+",product:a.product,color:a.color[0]})}),(0,b.jsx)("div",{className:s.quantityCount,children:a.quantity}),(0,b.jsx)("div",{className:s.quantityBtn,children:(0,b.jsx)(_.Z,{title:"-",product:a.product,cb:t.setAddItem})})]}),(0,b.jsx)("div",{className:s.cartItemElement,children:(0,b.jsxs)("span",{className:s.subtotal,children:["\u09f3",a.price]})}),(0,b.jsx)("div",{className:s.cartItemElement,children:(0,b.jsx)(v,{title:a.product.title,cb:t.setAddItem})})]})]},a.product._id)})):(0,b.jsx)("div",{children:(0,b.jsx)("h4",{className:s.cartH4,children:"No item in the cart"})}),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m.Ix,{autoClose:1800,hideProgressBar:!0,pauseOnHover:!0,theme:"colored",style:{fontSize:"13px"},transition:m.Mi}),(0,b.jsx)("section",{className:s.cartContainerMain,children:(0,b.jsxs)("div",{className:s.cartContainer,children:[(0,b.jsxs)("div",{className:s.cartItemContainer,children:[(0,b.jsxs)("div",{className:s.cartLabels,children:[(0,b.jsx)("div",{className:s.cartLabel,children:"Products"}),(0,b.jsx)("div",{className:s.cartLabel,children:"Colors"}),(0,b.jsx)("div",{className:s.cartLabel,children:"Quantity"}),(0,b.jsx)("div",{className:s.cartLabel,children:"Subtotal"}),(0,b.jsx)("div",{className:s.cartLabel,children:"Actions"})]}),(0,b.jsx)("div",{className:s.cartItems,children:B})]}),(0,b.jsxs)("div",{className:s.cartDetailsContainer,children:[(0,b.jsx)("div",{className:s.couponContainer,children:(0,b.jsxs)("div",{className:s.couponInputContainer,children:[(0,b.jsx)("input",{type:"text","data-testid":"coupon-input",placeholder:"Enter coupon code",className:s.couponInput,onChange:function(t){return f(t.target.value)}}),(0,b.jsx)("button",{disabled:!N,className:s.couponBtn,children:"Apply coupon"})]})}),(0,b.jsx)("div",{className:s.totalContainer,children:(0,b.jsx)("div",{className:s.totalItems,children:(0,b.jsx)("div",{className:s.totalItem,children:(0,b.jsxs)("span",{className:s.totalLabel,children:["Subtotal: \u09f3",y]})})})})]}),(0,b.jsxs)("div",{className:s.cartFooterContainer,children:[(0,b.jsxs)("div",{className:s.cartFooterItem,children:[(0,b.jsx)("img",{src:l,alt:"master card",className:s.cartFooterImg}),(0,b.jsx)("img",{src:d,alt:"cash on delivery",className:s.cartFooterImg}),(0,b.jsx)("img",{src:i,alt:"bkash",className:s.cartFooterImg})]}),(0,b.jsxs)("div",{className:s.cartFooterItem,children:[(0,b.jsx)("button",{onClick:function(){return g(-1)},className:s.cartFooterBtn,children:"Continue Shopping"}),(0,b.jsx)("button",{onClick:function(){return g("/checkout")},className:s.cartFooterBtn,children:"Checkout"})]})]})]})})]})}}}]);
//# sourceMappingURL=330.e1aaaca8.chunk.js.map