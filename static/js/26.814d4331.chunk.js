(this["webpackJsonpong-client"]=this["webpackJsonpong-client"]||[]).push([[26],{296:function(e,t,a){"use strict";var n=a(62),c=a(63);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(a(0)),i=(0,n(a(64)).default)(r.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=i},352:function(e,t,a){"use strict";var n=a(62),c=a(63);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(a(0)),i=(0,n(a(64)).default)(r.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=i},353:function(e,t,a){"use strict";var n=a(62),c=a(63);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(a(0)),i=(0,n(a(64)).default)(r.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=i},354:function(e,t,a){"use strict";var n=a(62),c=a(63);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(a(0)),i=(0,n(a(64)).default)(r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=i},603:function(e,t,a){},848:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return V}));var n=a(6),c=a.n(n),r=a(10),i=a(31),s=a(0),l=a(820),o=a(821),d=a(824),u=a(823),j=a(819),h=a(845),b=a(822),f=a(202),p=a(123),v=a(9),x=a(61),O=a(227),m=a(352),g=a.n(m),w=(a(603),a(354)),k=a.n(w),y=a(353),E=a.n(y),P=a(11),S=a(1),A=function(e){var t=e.activitiesData,a=e.setActivitiesData,n=e.row,c=e.index,r=e.id,i=e.setElement,s=Object(P.useHistory)();return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(b.a,{hover:!0,tabIndex:-1,children:[Object(S.jsx)(u.a,{component:"th",scope:"row",children:n.name}),Object(S.jsx)(u.a,{component:"th",scope:"row",children:Object(S.jsx)("img",{src:n.image,alt:n.name,style:{width:"60px"}})}),Object(S.jsx)(u.a,{component:"th",scope:"row",children:n.createdAt}),Object(S.jsx)(u.a,{align:"center",children:Object(S.jsxs)(O.a,{variant:"contained",className:"button-options background-green",onClick:function(){return function(e){i(e),s.push("/backoffice/activities/edit")}(n)},children:[Object(S.jsx)(E.a,{}),"Editar"]})}),Object(S.jsx)(u.a,{align:"center",children:Object(S.jsxs)(O.a,{variant:"contained",className:"button-options background-red",onClick:function(){return function(e){v.a.delete(e).then((function(){var n=t.filter((function(t){return t.id!==e}));a(n)}))}(r)},children:[Object(S.jsx)(k.a,{}),"Eliminar"]})})]},c)})},C=a(15),M=a(208),_=a(853),z=a(296),D=a.n(z),I=Object(M.a)({wrapper:{display:"flex",boxShadow:"0px 0px 3px #aaa",width:"60%",margin:"40px auto",padding:"7px",borderRadius:"5px"},input:{width:"100%"},SearchIcon:{width:"10%",display:"flex",justifyContent:"center",alignItems:"center"}}),N=function(e){var t=e.setActivitiesData,a=e.set,n=e.remove,l=I(),o=Object(s.useState)(""),d=Object(i.a)(o,2),u=d[0],j=d[1],h=Object(s.useState)(!1),b=Object(i.a)(h,2),f=b[0],p=b[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u.length>=3)){e.next=6;break}return a(),e.next=4,v.a.Get("activities?search=".concat(u)).then((function(e){t(e.data.data),p(!1),n()}));case 4:e.next=7;break;case 6:f||(a(),v.a.getAll().then((function(e){t(e.data.data),p(!0),n()})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[u]),Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:l.wrapper,children:[Object(S.jsx)(_.a,{placeholder:"Buscar Actividad...",onChange:function(e){return j(e.target.value)},inputProps:{"aria-label":"search"},className:l.input}),Object(S.jsx)("div",{className:l.SearchIcon,children:Object(S.jsx)(D.a,{})})]})})},H=a(94);function V(e){var t=e.setElement,a=s.useState([]),n=Object(i.a)(a,2),m=n[0],w=n[1],k=s.useState(0),y=Object(i.a)(k,2),E=y[0],P=y[1],M=s.useState(5),_=Object(i.a)(M,2),z=_[0],D=_[1],I=Object(H.a)(),V=I.state,F=I.set,L=I.remove,J=I.loader;return s.useEffect((function(){var e=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,F(),e.next=4,v.a.getAll();case 4:t=e.sent,t.data,L(),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:return e.prev=11,L(),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,9,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(f.a,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(S.jsx)(x.a,{variant:"h2",children:"Actividades"}),Object(S.jsx)(N,{setActivitiesData:w,set:F,remove:L}),Object(S.jsx)(C.b,{to:"/backoffice/activities/create",children:Object(S.jsx)(O.a,{className:"button-options background-light",startIcon:Object(S.jsx)(g.a,{}),children:"Crear"})})]}),V?J:Object(S.jsxs)(p.a,{sx:{width:"100%",overflow:"hidden"},children:[Object(S.jsx)(j.a,{sx:{maxHeight:440},children:Object(S.jsxs)(l.a,{stickyHeader:!0,"aria-label":"sticky table",style:{border:"1px solid #ccc"},children:[Object(S.jsx)(o.a,{children:Object(S.jsxs)(b.a,{children:[Object(S.jsx)(u.a,{children:"Name"}),Object(S.jsx)(u.a,{children:"Images"}),Object(S.jsx)(u.a,{children:"Created"}),Object(S.jsx)(u.a,{colSpan:2,align:"center",children:"options"})]})}),Object(S.jsx)(d.a,{children:m.slice(E*z,E*z+z).map((function(e,a){return Object(S.jsx)(A,{activitiesData:m,setElement:t,setActivitiesData:w,row:e,id:e.id},a)}))})]})}),Object(S.jsx)(h.a,{rowsPerPageOptions:[5,10,25,{label:"All",value:m.length}],component:"div",count:m.length,rowsPerPage:z,page:E,onPageChange:function(e,t){P(t)},onRowsPerPageChange:function(e){D(+e.target.value),P(0)}})]})]})}}}]);
//# sourceMappingURL=26.814d4331.chunk.js.map