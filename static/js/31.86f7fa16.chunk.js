(this["webpackJsonpong-client"]=this["webpackJsonpong-client"]||[]).push([[31],{251:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(306),c=n.n(a),i=function(e,t){switch(e){case"success":n("Confirmaci\xf3n",t||"\xa1Se ha realizado con \xc9xito!");break;case"error":n("Error",t||"\xa1Ocurri\xf3 un Error!");break;case"info":n("Informaci\xf3n",t||"Informaci\xf3n gen\xe9rica")}function n(t,n){c.a.fire({title:t,text:n,icon:e,confirmButtonText:"OK"})}}},783:function(e,t,n){},841:function(e,t,n){"use strict";n.r(t),n.d(t,"Item",(function(){return H}));var a,c,i,r,s=n(31),o=(n(132),n(208)),l=n(202),j=n(61),d=n(238),b=n(512),m=n(513),x=n(514),h=n(242),u=n(227),g=n(0),O=n(776),p=n.n(O),f=(n(783),n(1)),v=function(e){var t=e.item;return Object(f.jsxs)("div",{className:"Carousel-container-item",children:[Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)(j.a,{variant:"h2",align:"right",style:{paddingRight:"100px"},children:t.name})}),Object(f.jsx)("img",{src:t.image,alt:t.title,className:"Carousel-img"})]})},w=function(e){var t=e.items;return Object(f.jsx)(p.a,{animation:"slide",navButtonsAlwaysVisible:!0,indicators:!0,autoPlay:!1,interval:"5000",className:"container-carousel",children:t.map((function(e,t){return Object(f.jsx)(v,{item:e},t)}))})},y=n(20),k=n(9),N=n(46),S=n(251),z=n(94),C=n(15),A=function(e){var t=e.title,n=e.description,a=e.image,c=e.direction?"row":"row-reverse",i=Object(o.a)((function(){return{container:{display:"flex",flexDirection:c,width:"90vw",boxShadow:"0px 2px 40px -1px rgb(0 0 0 / 20%), 0px 4px 50px 0px rgb(0 0 0 / 14%), 0px 1px 50px 0px rgb(0 0 0 / 12%)"},media:{maxWidth:"25vw",height:"35vh"}}}))(),r=a||"/images/placeholder/150x150.png";return Object(f.jsxs)(b.a,{className:i.container,children:[Object(f.jsx)(m.a,{className:i.media,component:"img",width:"300",image:r,alt:t}),Object(f.jsxs)(x.a,{children:[Object(f.jsx)(j.a,{align:"left",variant:"h5",children:t}),Object(f.jsx)(h.a,{}),Object(f.jsxs)(j.a,{align:"left",style:{color:"#555"},children:["\u201c",n?n.replace(/<[^>]*>/g," "):null,"\u201d"]})]})]})},I=n(784),W=n(806),_="#ececec",D=function(e){var t=e.variant,n=e.width,s=e.height,o=e.animation,l=e.className,j=e.style,d=Object(W.c)(a||(a=Object(I.a)(["\n    0% {background: ","}\n    100% {background: ","}\n  "])),_,"#dadada"),b=Object(W.a)(c||(c=Object(I.a)(["\n    width: ",";\n    height: ",";\n    border-radius: 5px;\n    background: ",";\n    animation: "," 1.5s alternate-reverse infinite\n      ease-in-out;\n  "])),n?"".concat(n,"px"):"100%",s?"".concat(s,"px"):"100%",_,o?"none":d),m=Object(W.a)(i||(i=Object(I.a)(["\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    background: ",";\n    animation: "," 1.5s alternate-reverse infinite\n      ease-in-out;\n  "])),n?"".concat(n,"px"):"100%",s?"".concat(s,"px"):"100%",_,o?"none":d),x=Object(W.a)(r||(r=Object(I.a)(["\n    width: ",";\n    height: 1.2rem;\n    border-radius: 5px;\n    background: ",";\n    animation: "," 1.5s alternate-reverse infinite\n      ease-in-out;\n  "])),n?"".concat(n,"%"):"100%",_,o?"none":d);return Object(W.b)("div",{css:function(){switch(t){default:return b;case"circle":return m;case"text":return x}},style:j,className:l})},E=Object(o.a)({mancha:{minWidth:"45%",margin:"0px auto",backgroundSize:"100%",backgroundPositionY:"center",backgroundImage:"url('https://res.cloudinary.com/dcea83ydd/image/upload/v1635917311/carpeta%20de%20pruebas%28%20no%20importante%29/mancha_amarilla_2_tgstmo.png')"}}),H=(t.default=function(){var e=E(),t=Object(y.b)(),n=Object(y.c)((function(e){return e.organization.organization[0]})),a=Object(g.useState)(null),c=Object(s.a)(a,2),i=c[0],r=c[1],o=Object(g.useState)(null),O=Object(s.a)(o,2),p=O[0],v=O[1],I=Object(g.useState)(null),W=Object(s.a)(I,2),_=W[0],H=W[1],T=Object(z.a)();return Object(g.useEffect)((function(){T.set(),t(Object(N.b)()),k.i.getAll().then((function(e){r(e.data.data.slice(0,3)),T.remove()})).catch((function(e){T.remove(),Object(S.a)("error")})),k.f.getAll().then((function(e){v(e.data.data.slice(0,3)),T.remove()})).catch((function(e){T.remove(),Object(S.a)("error")})),k.j.getAll().then((function(e){H(e.data.data.slice(0,4)),T.remove()})).catch((function(e){T.remove(),Object(S.a)("error")}))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(l.a,{m:3,children:n?Object(f.jsx)(j.a,{variant:"h2",className:e.mancha,children:n?n.welcome_text:null}):Object(f.jsx)(D,{variant:"rectangle",height:70})}),Object(f.jsx)(l.a,{boxShadow:1,mt:3,mb:3,sx:{width:"100%"},children:i?Object(f.jsx)(w,{items:i}):Object(f.jsx)(D,{variant:"rectangle",height:400})}),Object(f.jsxs)(l.a,{m:3,children:[Object(f.jsx)(l.a,{m:3,children:Object(f.jsx)(j.a,{variant:"h3",className:e.mancha,children:"Ultimas Novedades"})}),Object(f.jsx)(d.a,{container:!0,spacing:5,justifyContent:"space-around",children:p&&p.map((function(e){return Object(f.jsx)(d.a,{item:!0,xs:12,sm:6,md:4,children:Object(f.jsxs)(b.a,{style:{minHeight:"300px",boxShadow:"0px 2px 40px -1px rgb(0 0 0 / 20%), 0px 4px 50px 0px rgb(0 0 0 / 14%), 0px 1px 50px 0px rgb(0 0 0 / 12%)"},children:[Object(f.jsx)(m.a,{component:"img",height:"140",image:e.image,alt:e.name}),Object(f.jsxs)(x.a,{children:[Object(f.jsx)(j.a,{noWrap:!0,align:"left",variant:"h3",children:e.name}),Object(f.jsx)(h.a,{}),Object(f.jsx)(l.a,{marginTop:"25px",children:Object(f.jsx)(C.b,{to:"news/".concat(e.id),style:{textDecoration:"none"},children:Object(f.jsx)(u.a,{my:10,variant:"contained",fullWidth:!0,color:"primary",children:"Detalles"})})})]})]})},e.id)}))}),Object(f.jsx)(l.a,{m:4,children:Object(f.jsx)(C.b,{to:"/news",component:u.a,variant:"outlined",size:"large",color:"secondary",children:"Ver todas"})})]}),Object(f.jsxs)(l.a,{m:3,children:[Object(f.jsx)(l.a,{m:3,children:Object(f.jsx)(j.a,{variant:"h3",className:e.mancha,children:"Testimonios"})}),Object(f.jsx)(d.a,{container:!0,spacing:5,justifyContent:"space-around",children:_&&_.map((function(e){var t=e.id,n=e.name,a=e.description,c=e.image;return Object(f.jsx)(d.a,{item:!0,children:Object(f.jsx)(A,{title:n,description:a,image:c,direction:t%2===0})},t)}))})]})]})},function(e){var t=e.element;return Object(f.jsx)(d.a,{item:!0,xs:12,sm:6,md:3,style:{maxHeight:"400px",minHeight:"200px"},children:Object(f.jsx)("img",{src:t.image,alt:t.name,style:{width:"100%",height:"100%",objectFit:"cover"}})})})}}]);
//# sourceMappingURL=31.86f7fa16.chunk.js.map