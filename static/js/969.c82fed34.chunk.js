"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[969],{6457:function(e,n,r){r.d(n,{b:function(){return c}});var t=r(184),c=function(e){var n=e.type,r=e.children,c="",a="";switch(n){case"info":c="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",a="alert-info";break;case"success":c="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",a="alert-success";break;case"warning":c="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",a="alert-warning";break;case"error":c="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",a="alert-error";break;default:c="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",a=""}return(0,t.jsxs)("div",{role:"alert",className:"alert ".concat(a),children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:c})}),(0,t.jsx)("span",{children:r})]})}},7229:function(e,n,r){r.d(n,{t:function(){return f},Ay:function(){return j},mF:function(){return y},OL:function(){return m},yt:function(){return v}});var t=r(1413),c=r(1134),a=r(4420),l=r(3634),i=r(6351),o=r(2791),s=r(1538),u=r(6457),d=r(184),f=function(e){var n=e.isDrawerOpen,r=(0,o.useRef)(null),f=(0,a.I0)(),h=(0,a.v9)(i.gY),x=(0,a.v9)(i.Uv),p=(0,a.v9)(i.jV),j=(0,c.cI)(),b=j.handleSubmit,w=j.reset;(0,o.useEffect)((function(){n&&r.current.focus()}),[n]);return(0,d.jsxs)(c.RV,(0,t.Z)((0,t.Z)({},j),{},{children:[x&&(0,d.jsx)(u.b,{type:"error",children:x}),(0,d.jsxs)("form",{className:"flex flex-col gap-5",name:"contactForm",autoComplete:"off",onSubmit:b((function(e){if(!p&&function(e){var n=e.name;return h.find((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))}(e))return f((0,s.sT)("Contact already added to your Phonebook")),void r.current.focus();p?f((0,l.Tk)({id:p.id,constact:e})).unwrap().then((function(e){w(),document.getElementById("add-contact-drawer").click()})).catch((function(e){})):f((0,l.rE)(e)).unwrap().then((function(e){w(),document.getElementById("add-contact-drawer").click()})).catch((function(e){}))})),children:[(0,d.jsx)(v,{label:"Name",name:"name",value:null===p||void 0===p?void 0:p.name,type:"text",placeholder:"Enter your Contact Full Name",required:!0,ref:r}),(0,d.jsx)(v,{label:"Number",name:"number",value:null===p||void 0===p?void 0:p.number,type:"tel",placeholder:"Enter your Contact Phone Number",required:!0}),(0,d.jsxs)(m,{type:"submit",color:p?"warning":"info",children:[p?"Update":"Add"," contact"]})]})]}))},m=function(e){var n=e.type,r=void 0===n?"button":n,t=e.color,c=void 0===t?"info":t,a=e.onClick,l=e.children;return(0,d.jsx)("button",{className:"btn btn-".concat(c),type:r,onClick:a,children:l})},h=r(4925),x=["ref"],v=(0,o.forwardRef)((function(e,n){var r=e.label,a=e.type,l=e.name,i=e.value,s=e.placeholder,u=void 0===s?"":s,f=e.required,m=void 0!==f&&f,v=e.focus,p=void 0!==v&&v,j=(0,c.Gc)(),b=j.register,w=j.setValue,y=b(l),g=y.ref,k=(0,h.Z)(y,x);return(0,o.useEffect)((function(){w(l,i)}),[l,i,w]),(0,d.jsxs)("label",{className:"form-control w-full",children:[(0,d.jsx)("div",{className:"label",children:(0,d.jsx)("span",{className:"label-text",children:r})}),(0,d.jsx)("input",(0,t.Z)((0,t.Z)({type:a,name:l,autoFocus:p,required:m,placeholder:u},k),{},{ref:function(e){g(e),n&&(n.current=e)},className:"input input-bordered w-full "}))]})})),p=r(854),j=function(){var e=(0,a.v9)(i.Cc),n=(0,a.v9)(i.DI),r=(0,a.I0)();(0,o.useEffect)((function(){r((0,l.mk)())}),[r]);return(0,d.jsxs)(d.Fragment,{children:[e&&(0,d.jsx)(p.a,{}),n.length>0&&(0,d.jsx)("ul",{className:"flex flex-col divide-y-2",children:n.map((function(e,n){var t=e.id,c=e.name,a=e.number;return(0,d.jsxs)("li",{className:"flex flex-row gap-5 justify-start justify-items-center py-3",children:[(0,d.jsxs)("div",{className:"flex-grow",children:[(0,d.jsx)("div",{className:"text-xl font-bold capitalize",children:c}),(0,d.jsx)("div",{className:"",children:a})]}),(0,d.jsxs)("div",{className:"flex gap-3",children:[(0,d.jsx)(m,{color:"warning",onClick:function(){return function(e){r((0,s.r1)(e)),document.getElementById("add-contact-drawer").click()}(t)},children:"Update"}),(0,d.jsx)(m,{color:"error",onClick:function(){return function(e){r((0,l.GK)(e))}(t)},children:"Delete"})]})]},t)}))})]})},b=r(4808),w=r(3974),y=function(){var e=(0,a.I0)();return(0,d.jsxs)("div",{className:"relative mt-2 rounded-md shadow-sm",children:[(0,d.jsx)("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",children:(0,d.jsx)("span",{className:"text-gray-500 sm:text-sm",children:(0,d.jsx)(w.jRj,{size:20})})}),(0,d.jsx)("input",{type:"text",name:"filter",placeholder:"Search",className:"input input-bordered w-full px-10",onChange:function(n){return e((0,b.M)(n.target.value.trim()))}})]})}},969:function(e,n,r){r.r(n);var t=r(7229),c=r(2892),a=r(4420),l=r(6351),i=r(1538),o=r(184);n.default=function(){var e=(0,a.I0)(),n=(0,a.v9)(l.Vc),r=(0,a.v9)(l.jV);return(0,o.jsx)("div",{className:"flex justify-center min-h-screen bg-base-200",children:(0,o.jsxs)("div",{className:"max-w-lg w-full flex flex-col gap-10",children:[(0,o.jsx)(t.mF,{}),(0,o.jsx)(t.Ay,{}),(0,o.jsx)(c.d,{id:"add-contact-drawer",position:"end",onClick:function(){n&&r&&e((0,i.r1)(null)),e((0,i.wb)())},children:(0,o.jsx)(t.t,{isDrawerOpen:n})})]})})}}}]);
//# sourceMappingURL=969.c82fed34.chunk.js.map