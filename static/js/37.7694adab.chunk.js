(this["webpackJsonpong-client"]=this["webpackJsonpong-client"]||[]).push([[37],{849:function(e,t,a){"use strict";a.r(t);var c=a(79),n=a(31),r=a(0),i=a(238),s=a(202),o=a(820),l=a(821),j=a(824),b=a(823),d=a(819),u=a(832),O=a(845),h=a(822),p=a(61),x=a(227),f=a(352),g=a.n(f),m=a(354),w=a.n(m),v=a(353),C=a.n(v),y=a(123),k=a(9),P=a(839),S=a(831),I=a(15),A=a(20),E=a(27),D=function(e){return e.categories.categories},z=a(6),B=a.n(z),F=a(10),N=a(208),_=a(853),J=a(296),M=a.n(J),R=a(1),G=Object(N.a)({wrapper:{display:"flex",boxShadow:"0px 0px 3px #aaa",width:"60%",margin:"40px auto",padding:"7px",borderRadius:"5px"},input:{width:"100%"},SearchIcon:{width:"10%",display:"flex",justifyContent:"center",alignItems:"center"}}),W=function(e){var t=e.setActivitiesData,a=e.dataAPI,c=e.name,i=G(),s=Object(r.useState)(""),o=Object(n.a)(s,2),l=o[0],j=o[1],b=Object(r.useState)(!1),d=Object(n.a)(b,2),u=d[0],O=d[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(F.a)(B.a.mark((function e(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(l.length>=3)){e.next=5;break}return e.next=3,a.Get("".concat(c,"?search=").concat(l)).then((function(e){t(e.data.data),O(!1)}));case 3:e.next=6;break;case 5:u||a.getAll().then((function(e){t(e.data.data),O(!0)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[l]),Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)("div",{className:i.wrapper,children:[Object(R.jsx)(_.a,{placeholder:"Buscar Categoria...",onChange:function(e){return j(e.target.value)},inputProps:{"aria-label":"search"},className:i.input}),Object(R.jsx)("div",{className:i.SearchIcon,children:Object(R.jsx)(M.a,{})})]})})},q=a(94);t.default=function(e){var t=e.setElement,a=Object(A.c)((function(e){return e.categories.status})),f=Object(q.a)().loader,m=Object(A.b)(),v=Object(A.c)(D),z=window.innerWidth<=420,B=Object(r.useState)(0),F=Object(n.a)(B,2),N=F[0],_=F[1],J=Object(r.useState)(5),M=Object(n.a)(J,2),G=M[0],H=M[1],K=Object(r.useState)([]),L=Object(n.a)(K,2),Q=L[0],T=L[1];Object(r.useEffect)((function(){m(Object(E.d)()),T(v)}),[]);return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(s.a,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(R.jsx)(p.a,{variant:"h2",children:"Categor\xedas"}),Object(R.jsx)(W,{setActivitiesData:T,dataAPI:k.b,name:"categories"}),Object(R.jsx)(x.a,{variant:"contained",size:"large",href:"/backoffice/categories/create",style:{backgroundColor:"#9AC9FB",color:"#fafafa"},startIcon:Object(R.jsx)(g.a,{}),children:"Crear"})]}),"loading"===a?f:Object(R.jsx)(i.a,{item:!0,xs:12,children:Object(R.jsx)(d.a,{component:y.a,children:Object(R.jsxs)(o.a,{"aria-label":"custom pagination table",children:[Object(R.jsx)(l.a,{children:Object(R.jsxs)(h.a,{children:[Object(R.jsx)(b.a,{scope:"row",children:"Categor\xeda"}),Object(R.jsx)(b.a,{scope:"row",children:"Creado"}),Object(R.jsx)(b.a,{scope:"row",colSpan:2,children:" "})]})}),Object(R.jsx)(j.a,{children:(G>0?Object(c.a)(Q).sort((function(e,t){return e.created_at<t.created_at?-1:1})).slice(N*G,N*G+G):Q).map((function(e){return Object(R.jsxs)(h.a,{children:[Object(R.jsx)(b.a,{component:"th",scope:"row",children:e.name}),Object(R.jsx)(b.a,{component:"th",scope:"row",children:Object(P.a)(Object(S.a)(e.created_at),"dd/MM/yyyy")}),Object(R.jsx)(b.a,{style:{width:160},align:"center",children:Object(R.jsx)(I.b,{style:{textDecoration:"none"},to:"/backoffice/categories/edit",onClick:function(){return t(e)},children:Object(R.jsxs)(x.a,{variant:"contained",size:z?"small":"medium",onClick:function(){},style:{backgroundColor:"#59C371",color:"#fafafa"},children:[Object(R.jsx)(C.a,{})," ",z?"":"Editar"]})})}),Object(R.jsx)(b.a,{style:{width:160},align:"center",children:Object(R.jsxs)(x.a,{variant:"contained",size:z?"small":"medium",onClick:function(){return t=e.id,void(confirm("Eliminar categor\xeda")&&m(Object(E.b)(t)));var t},style:{backgroundColor:"#DB5752",color:"#fafafa"},children:[Object(R.jsx)(w.a,{})," ",z?"":"Eliminar"]})})]},e.name)}))}),Object(R.jsx)(u.a,{children:Object(R.jsx)(h.a,{children:Object(R.jsx)(O.a,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],colSpan:3,count:v.length,rowsPerPage:G,page:N,SelectProps:{inputProps:{"aria-label":"Datos por p\xe1gina"},native:!0},onPageChange:function(e,t){_(t)},onRowsPerPageChange:function(e){H(parseInt(e.target.value,10)),_(0)}})})})]})})})]})}}}]);
//# sourceMappingURL=37.7694adab.chunk.js.map