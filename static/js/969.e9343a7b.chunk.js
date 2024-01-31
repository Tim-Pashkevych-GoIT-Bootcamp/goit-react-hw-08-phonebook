"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[969],{6457:function(e,n,t){t.d(n,{b:function(){return a}});var r=t(184),a=function(e){var n=e.type,t=e.children,a="",c="";switch(n){case"info":a="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",c="alert-info";break;case"success":a="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",c="alert-success";break;case"warning":a="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",c="alert-warning";break;case"error":a="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",c="alert-error";break;default:a="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",c=""}return(0,r.jsxs)("div",{role:"alert",className:"alert ".concat(c),children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:a})}),(0,r.jsx)("span",{children:t})]})}},7229:function(e,n,t){t.d(n,{t:function(){return f},Ay:function(){return b},mF:function(){return y},OL:function(){return m},yt:function(){return p}});var r=t(1413),a=t(1134),c=t(4420),l=t(3634),i=t(6351),s=t(2791),o=t(1538),u=t(6457),d=t(184),f=function(e){var n=e.isDrawerOpen,t=(0,s.useRef)(null),f=(0,c.I0)(),h=(0,c.v9)(i.gY),x=(0,c.v9)(i.Uv),v=(0,c.v9)(i.jV),b=(0,a.cI)(),j=b.handleSubmit,w=b.reset;(0,s.useEffect)((function(){n&&t.current.focus()}),[n]);return(0,d.jsxs)(a.RV,(0,r.Z)((0,r.Z)({},b),{},{children:[x&&(0,d.jsx)(u.b,{type:"error",children:x}),(0,d.jsxs)("form",{className:"flex flex-col gap-5",name:"contactForm",autoComplete:"off",onSubmit:j((function(e){if(!v&&function(e){var n=e.name;return h.find((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))}(e))return f((0,o.sT)("Contact already added to your Phonebook")),void t.current.focus();v?f((0,l.Tk)({id:v.id,constact:e})).unwrap().then((function(e){w(),document.getElementById("add-contact-drawer").click()})).catch((function(e){})):f((0,l.rE)(e)).unwrap().then((function(e){w(),document.getElementById("add-contact-drawer").click()})).catch((function(e){}))})),children:[(0,d.jsx)(p,{label:"Name",name:"name",value:null===v||void 0===v?void 0:v.name,type:"text",placeholder:"Enter your Contact Full Name",required:!0,ref:t}),(0,d.jsx)(p,{label:"Number",name:"number",value:null===v||void 0===v?void 0:v.number,type:"tel",placeholder:"Enter your Contact Phone Number",required:!0}),(0,d.jsxs)(m,{type:"submit",btnType:v?"btn-warning":"btn-info",children:[v?"Update":"Add"," contact"]})]})]}))},m=function(e){var n=e.type,t=void 0===n?"button":n,r=e.btnType,a=void 0===r?"btn-info":r,c=e.onClick,l=e.children;return(0,d.jsx)("button",{className:"btn ".concat(a),type:t,onClick:c,children:l})},h=t(4925),x=["ref"],p=(0,s.forwardRef)((function(e,n){var t=e.label,c=e.type,l=e.name,i=e.value,o=e.placeholder,u=void 0===o?"":o,f=e.required,m=void 0!==f&&f,p=e.focus,v=void 0!==p&&p,b=(0,a.Gc)(),j=b.register,w=b.setValue,y=j(l),g=y.ref,k=(0,h.Z)(y,x);return(0,s.useEffect)((function(){w(l,i)}),[l,i,w]),(0,d.jsxs)("label",{className:"form-control w-full",children:[(0,d.jsx)("div",{className:"label",children:(0,d.jsx)("span",{className:"label-text",children:t})}),(0,d.jsx)("input",(0,r.Z)((0,r.Z)({type:c,name:l,autoFocus:v,required:m,placeholder:u},k),{},{ref:function(e){g(e),n&&(n.current=e)},className:"input input-bordered w-full "}))]})})),v=t(854),b=function(){var e=(0,c.v9)(i.Cc),n=(0,c.v9)(i.DI),t=(0,c.I0)();(0,s.useEffect)((function(){t((0,l.mk)())}),[t]);return(0,d.jsxs)(d.Fragment,{children:[e&&(0,d.jsx)(v.a,{}),n.length>0&&(0,d.jsx)("ul",{className:"flex flex-col divide-y-2",children:n.map((function(e,n){var r=e.id,a=e.name,c=e.number;return(0,d.jsxs)("li",{className:"flex flex-row gap-5 justify-start justify-items-center py-3",children:[(0,d.jsxs)("div",{className:"flex-grow",children:[(0,d.jsx)("div",{className:"text-xl font-bold capitalize",children:a}),(0,d.jsx)("div",{className:"",children:c})]}),(0,d.jsxs)("div",{className:"flex gap-3",children:[(0,d.jsx)(m,{btnType:"btn-warning",onClick:function(){return function(e){t((0,o.r1)(e)),document.getElementById("add-contact-drawer").click()}(r)},children:"Update"}),(0,d.jsx)(m,{btnType:"btn-error",onClick:function(){return function(e){t((0,l.GK)(e))}(r)},children:"Delete"})]})]},r)}))})]})},j=t(4808),w=t(3974),y=function(){var e=(0,c.I0)();return(0,d.jsxs)("div",{className:"relative mt-2 rounded-md shadow-sm",children:[(0,d.jsx)("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",children:(0,d.jsx)("span",{className:"text-gray-500 sm:text-sm",children:(0,d.jsx)(w.jRj,{size:20})})}),(0,d.jsx)("input",{type:"text",name:"filter",placeholder:"Search",className:"input input-bordered w-full px-10",onChange:function(n){return e((0,j.M)(n.target.value.trim()))}})]})}},969:function(e,n,t){t.r(n);var r=t(7229),a=t(2892),c=t(4420),l=t(6351),i=t(1538),s=t(184);n.default=function(){var e=(0,c.I0)(),n=(0,c.v9)(l.Vc),t=(0,c.v9)(l.jV);return(0,s.jsx)("div",{className:"flex justify-center min-h-screen bg-base-200",children:(0,s.jsxs)("div",{className:"max-w-lg w-full flex flex-col gap-10",children:[(0,s.jsx)(r.mF,{}),(0,s.jsx)(r.Ay,{}),(0,s.jsx)(a.d,{id:"add-contact-drawer",position:"end",onClick:function(){n&&t&&e((0,i.r1)(null)),e((0,i.wb)())},children:(0,s.jsx)(r.t,{isDrawerOpen:n})})]})})}}}]);
//# sourceMappingURL=969.e9343a7b.chunk.js.map