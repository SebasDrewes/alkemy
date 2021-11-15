(this["webpackJsonpong-client"]=this["webpackJsonpong-client"]||[]).push([[6],{346:function(e,a,t){"use strict";var r=t(2),n=t(4),o=t(32),i=t(0),s=(t(3),t(5)),l=t(8),c=t(13),d=i.forwardRef((function(e,a){var t=e.classes,o=e.className,l=e.component,d=void 0===l?"div":l,u=e.disableGutters,m=void 0!==u&&u,p=e.fixed,b=void 0!==p&&p,f=e.maxWidth,h=void 0===f?"lg":f,g=Object(n.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return i.createElement(d,Object(r.a)({className:Object(s.a)(t.root,o,b&&t.fixed,m&&t.disableGutters,!1!==h&&t["maxWidth".concat(Object(c.a)(String(h)))]),ref:a},g))}));a.a=Object(l.a)((function(e){return{root:Object(o.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(a,t){var r=e.breakpoints.values[t];return 0!==r&&(a[e.breakpoints.up(t)]={maxWidth:r}),a}),{}),maxWidthXs:Object(o.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(o.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(o.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(o.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(o.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)},495:function(e,a,t){"use strict";var r=t(4),n=t(2),o=t(0),i=(t(3),t(5)),s=t(19),l=t(8),c=t(123),d=t(95),u=Object(d.a)(o.createElement("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),m=Object(d.a)(o.createElement("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),p=Object(d.a)(o.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),b=Object(d.a)(o.createElement("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),f=Object(d.a)(o.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),h=t(209),g=t(13),j={success:o.createElement(u,{fontSize:"inherit"}),warning:o.createElement(m,{fontSize:"inherit"}),error:o.createElement(p,{fontSize:"inherit"}),info:o.createElement(b,{fontSize:"inherit"})},v=o.createElement(f,{fontSize:"small"}),x=o.forwardRef((function(e,a){var t=e.action,s=e.children,l=e.classes,d=e.className,u=e.closeText,m=void 0===u?"Close":u,p=e.color,b=e.icon,f=e.iconMapping,x=void 0===f?j:f,O=e.onClose,C=e.role,y=void 0===C?"alert":C,w=e.severity,k=void 0===w?"success":w,N=e.variant,E=void 0===N?"standard":N,_=Object(r.a)(e,["action","children","classes","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"]);return o.createElement(c.a,Object(n.a)({role:y,square:!0,elevation:0,className:Object(i.a)(l.root,l["".concat(E).concat(Object(g.a)(p||k))],d),ref:a},_),!1!==b?o.createElement("div",{className:l.icon},b||x[k]||j[k]):null,o.createElement("div",{className:l.message},s),null!=t?o.createElement("div",{className:l.action},t):null,null==t&&O?o.createElement("div",{className:l.action},o.createElement(h.a,{size:"small","aria-label":m,title:m,color:"inherit",onClick:O},v)):null)}));a.a=Object(l.a)((function(e){var a="light"===e.palette.type?s.b:s.j,t="light"===e.palette.type?s.j:s.b;return{root:Object(n.a)({},e.typography.body2,{borderRadius:e.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"}),standardSuccess:{color:a(e.palette.success.main,.6),backgroundColor:t(e.palette.success.main,.9),"& $icon":{color:e.palette.success.main}},standardInfo:{color:a(e.palette.info.main,.6),backgroundColor:t(e.palette.info.main,.9),"& $icon":{color:e.palette.info.main}},standardWarning:{color:a(e.palette.warning.main,.6),backgroundColor:t(e.palette.warning.main,.9),"& $icon":{color:e.palette.warning.main}},standardError:{color:a(e.palette.error.main,.6),backgroundColor:t(e.palette.error.main,.9),"& $icon":{color:e.palette.error.main}},outlinedSuccess:{color:a(e.palette.success.main,.6),border:"1px solid ".concat(e.palette.success.main),"& $icon":{color:e.palette.success.main}},outlinedInfo:{color:a(e.palette.info.main,.6),border:"1px solid ".concat(e.palette.info.main),"& $icon":{color:e.palette.info.main}},outlinedWarning:{color:a(e.palette.warning.main,.6),border:"1px solid ".concat(e.palette.warning.main),"& $icon":{color:e.palette.warning.main}},outlinedError:{color:a(e.palette.error.main,.6),border:"1px solid ".concat(e.palette.error.main),"& $icon":{color:e.palette.error.main}},filledSuccess:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.success.main},filledInfo:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.info.main},filledWarning:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.warning.main},filledError:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.error.main},icon:{marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9},message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiAlert"})(x)},512:function(e,a,t){"use strict";var r=t(2),n=t(4),o=t(0),i=(t(3),t(5)),s=t(123),l=t(8),c=o.forwardRef((function(e,a){var t=e.classes,l=e.className,c=e.raised,d=void 0!==c&&c,u=Object(n.a)(e,["classes","className","raised"]);return o.createElement(s.a,Object(r.a)({className:Object(i.a)(t.root,l),elevation:d?8:1,ref:a},u))}));a.a=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(c)},513:function(e,a,t){"use strict";var r=t(2),n=t(4),o=t(0),i=(t(3),t(5)),s=t(8),l=["video","audio","picture","iframe","img"],c=o.forwardRef((function(e,a){var t=e.children,s=e.classes,c=e.className,d=e.component,u=void 0===d?"div":d,m=e.image,p=e.src,b=e.style,f=Object(n.a)(e,["children","classes","className","component","image","src","style"]),h=-1!==l.indexOf(u),g=!h&&m?Object(r.a)({backgroundImage:'url("'.concat(m,'")')},b):b;return o.createElement(u,Object(r.a)({className:Object(i.a)(s.root,c,h&&s.media,-1!=="picture img".indexOf(u)&&s.img),ref:a,style:g,src:h?m||p:void 0},f),t)}));a.a=Object(s.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(c)},514:function(e,a,t){"use strict";var r=t(2),n=t(4),o=t(0),i=(t(3),t(5)),s=t(8),l=o.forwardRef((function(e,a){var t=e.classes,s=e.className,l=e.component,c=void 0===l?"div":l,d=Object(n.a)(e,["classes","className","component"]);return o.createElement(c,Object(r.a)({className:Object(i.a)(t.root,s),ref:a},d))}));a.a=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},541:function(e,a,t){"use strict";var r=t(4),n=t(32),o=t(2),i=t(0),s=(t(3),t(5)),l=t(8),c=t(236),d=i.forwardRef((function(e,a){var t,n=e.classes,l=e.className,d=e.component,u=void 0===d?"li":d,m=e.disableGutters,p=void 0!==m&&m,b=e.ListItemClasses,f=e.role,h=void 0===f?"menuitem":f,g=e.selected,j=e.tabIndex,v=Object(r.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(t=void 0!==j?j:-1),i.createElement(c.a,Object(o.a)({button:!0,role:h,tabIndex:t,component:u,selected:g,disableGutters:p,classes:Object(o.a)({dense:n.dense},b),className:Object(s.a)(n.root,l,g&&n.selected,!p&&n.gutters),ref:a},v))}));a.a=Object(l.a)((function(e){return{root:Object(o.a)({},e.typography.body1,Object(n.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(o.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(d)},544:function(e,a,t){"use strict";var r=t(2),n=t(4),o=t(0),i=(t(3),t(5)),s=t(8),l=o.forwardRef((function(e,a){var t=e.classes,s=e.className,l=e.row,c=void 0!==l&&l,d=Object(n.a)(e,["classes","className","row"]);return o.createElement("div",Object(r.a)({className:Object(i.a)(t.root,s,c&&t.row),ref:a},d))}));a.a=Object(s.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(l)},610:function(e,a,t){e.exports={textFieldContainer:"styles_textFieldContainer__Dhhlp",textFieldLabel:"styles_textFieldLabel__WNGal",textFieldControl:"styles_textFieldControl__2OQjA"}},611:function(e,a,t){e.exports={userFormContainer:"styles_userFormContainer__stL1R",formHeader:"styles_formHeader__YXyQ1",userForm:"styles_userForm__2qvdF",imageContainer:"styles_imageContainer__24jUw",imageUser:"styles_imageUser__2HhpZ",button:"styles_button__2F7pB"}},862:function(e,a,t){"use strict";t.r(a);var r=t(6),n=t.n(r),o=t(10),i=t(31),s=t(0),l=t(512),c=t(346),d=t(61),u=t(513),m=t(829),p=t(825),b=t(514),f=t(828),h=t(842),g=t(541),j=t(227),v=t(267),x=t(544),O=t(830),C=t(827),y=t(610),w=t.n(y),k=t(1);function N(e){var a=e.onChange,t=e.value,r=e.label,n=e.type,o=e.placeholder,i=e.controlId,s=e.error,l=e.endAdornment,c=e.id;return Object(k.jsxs)(x.a,{controlId:i,className:w.a.textFieldContainer,children:[Object(k.jsxs)(O.a,{className:w.a.textFieldLabel,children:[" ",r]}),Object(k.jsx)(f.a,{"aria-label":r,isInvalid:!!s,placeholder:o}),Object(k.jsx)(p.a,{value:t,id:c,onChange:a,type:n,endAdornment:l,className:w.a.textFieldControl}),Object(k.jsx)(C.a,{error:s,children:s})]})}var E=t(495),_=t(9),L=t(611),M=t.n(L),R=function(e){return new Promise((function(a,t){var r=new FileReader;r.readAsDataURL(e),r.onload=function(){return a(r.result)},r.onerror=function(e){return t(e)}}))};a.default=function(e){e.onSubmit;var a=e.titleForm,t=e.initialValues,r=Object(s.useState)(),x=Object(i.a)(r,2),O=x[0],C=x[1],y=Object(s.useRef)(),w=function(){var e=Object(o.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,_.k.update(a.id,a).then((function(){return console.log("User updated successfully")})).catch((function(e){return C(e.response.data.errors)}));case 3:e.next=7;break;case 5:return e.next=7,_.k.create(a).then((function(){return console.log("User created successfully")})).catch((function(e){return C(e.response.data.errors)}));case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),L=Object(v.e)({initialValues:t||{email:"@",password:"",name:"",role:0,profile_image:""},validate:function(e){var a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="El email es invalido"):a.email="El email es requerido.",e.password||(a.password="Contrase\xf1a requerida."),e.password.length<8&&(a.password="Tu contrase\xf1a debe tener minimo 8 caracteres."),e.name||(a.name="El nombre es requerido."),e.name.length<4&&(a.name="Tu nombre debe tener minimo 4 caracteres."),e.role||(a.role="Elija un rol."),a},onSubmit:function(e){w(e)},enableReinitialize:!0}),W=function(){var e=Object(o.a)(n.a.mark((function e(a){var t,r,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(i.a)(a.currentTarget.files,1),(r=t[0])&&(y.current.src=URL.createObjectURL(r)),e.next=4,R(r);case 4:o=e.sent,L.setFieldValue("profile_image",o);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(k.jsxs)(l.a,{variant:"outlined",className:M.a.userFormContainer,children:[Object(k.jsx)(c.a,{className:M.a.formHeader,children:Object(k.jsx)(d.a,{variant:"h3",children:a})}),Object(k.jsxs)("form",{onSubmit:L.handleSubmit,className:M.a.userForm,children:[Object(k.jsx)(u.a,{className:M.a.imageContainer,children:Object(k.jsxs)(m.a,{children:[Object(k.jsx)("img",{className:M.a.imageUser,ref:y,alt:L.values.profile_image,id:"profile_image"}),Object(k.jsx)(p.a,{type:"file",accept:"image.jpg image.png",name:"profile_image",onChange:W})]})}),Object(k.jsxs)(b.a,{children:[Object(k.jsx)(N,{onChange:L.handleChange,value:L.values.name,controlId:"name",label:"Nombre",placeholder:"Nombre",id:"name",error:L.errors.name,onBlur:L.handleBlur}),Object(k.jsx)(N,{onChange:L.handleChange,value:L.values.email,controlId:"email",type:"email",id:"email",label:"Email",placeholder:"Email",error:L.errors.email,onBlur:L.handleBlur}),Object(k.jsx)(N,{type:"password",label:"Contrase\xf1a",controlId:"password",placeholder:"Contrase\xf1a",id:"password",onChange:L.handleChange,value:L.values.password,error:L.errors.password,onBlur:L.handleBlur}),Object(k.jsxs)(f.a,{controlId:"role",children:[Object(k.jsx)(m.a,{id:"role",children:"Rol"}),Object(k.jsxs)(h.a,{value:L.values.role,error:L.errors.role,label:"Rol",name:"role",labelId:"role",onChange:L.handleChange,children:[Object(k.jsx)(g.a,{value:0,children:"Administrador"}),Object(k.jsx)(g.a,{value:1,children:"Regular"})]})]}),Object(k.jsx)(j.a,{type:"submit",variant:"contained",className:M.a.button,children:"Guardar"}),O&&Object(k.jsxs)(E.a,{severity:"Error",children:[" ",Object.values(O)]})]})]})]})}}}]);
//# sourceMappingURL=6.e9480b10.chunk.js.map