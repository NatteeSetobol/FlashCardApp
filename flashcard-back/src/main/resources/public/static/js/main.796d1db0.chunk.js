(this.webpackJsonpflashcard=this.webpackJsonpflashcard||[]).push([[0],{38:function(e,t,c){},49:function(e,t,c){},56:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},68:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n,a=c(1),r=c.n(a),s=c(18),i=c.n(s),d=(c(49),c(74)),l=c(9),j=c(2),b=c(40),o=function e(t,c,n){Object(b.a)(this,e),this.id=t,this.username=c,this.password=n},u=(c(37),c(31)),O=c(24),h=c(14),x=Object(O.a)({reducerPath:"login",baseQuery:Object(h.d)({}),tagTypes:["Post","User"],endpoints:function(e){return{login:e.mutation({query:function(e){return{url:"user",method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:e}},invalidatesTags:["Post"]})}}}),m=x.useLoginMutation,p=(c(56),c(0)),f=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),s=Object(j.a)(r,2),i=s[0],d=s[1],b=m(),O=Object(j.a)(b,2),h=O[0],x=O[1],f=x.data,y=(x.error,x.isLoading),k=x.isSuccess,g=x.isError,v=Object(a.useState)(!1),C=Object(j.a)(v,2),N=C[0],S=C[1],D=Object(l.f)();Object(a.useEffect)((function(){S(!1)}),[]);return k&&f&&(f.error?N&&(u.b.error(f.error),S(!1)):D.push("/index")),Object(p.jsxs)("div",{id:"main",children:[Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"comp",children:[Object(p.jsx)("div",{className:"compbox",children:Object(p.jsx)("label",{className:"col-form-label col-form-label-sm",children:"Username:"})}),Object(p.jsx)("div",{className:"compbox",children:Object(p.jsx)("input",{type:"name",className:"form-control form-control-sm",id:"email",placeholder:"username",onChange:function(e){n(e.target.value)},value:c})})]}),Object(p.jsxs)("div",{className:"comp",children:[Object(p.jsx)("div",{className:"compbox",children:Object(p.jsx)("label",{className:"col-form-label col-form-label-sm",children:"Password :"})}),Object(p.jsx)("div",{className:"compbox",children:Object(p.jsx)("input",{type:"password",className:"form-control form-control-sm",id:"password",placeholder:"password",onChange:function(e){d(e.target.value)},value:i})})]})]}),Object(p.jsxs)("div",{className:"comp",children:[Object(p.jsx)("div",{className:"compbox blankspot"}),Object(p.jsx)("div",{className:"compbox",children:Object(p.jsx)("button",{type:"submit",className:"btn btn-primary pull-right",onClick:function(){var e=new o(0,c,i);h(e),n(""),d(""),S(!0)},children:"Submit"})})]}),g?Object(p.jsx)(p.Fragment,{children:" Sorry, an Error has occured.   "}):k?Object(p.jsx)(p.Fragment,{}):y?Object(p.jsx)("div",{children:"loading..."}):null]})},y=function(){return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-6 col-md-4"}),Object(p.jsx)("div",{className:"col-6 col-md-4",children:Object(p.jsx)(f,{})}),Object(p.jsx)("div",{className:"col-6 col-md-4"})]})})},k=c(4),g=c(16),v=c(19),C=(c(25),Object(O.a)({reducerPath:"Deck",baseQuery:Object(h.d)({}),endpoints:function(e){return{createDeck:e.mutation({query:function(e){return{url:"deck",method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:e}}}),getAllDecks:e.query({query:function(){return"/decks"}}),deleteDeck:e.mutation({query:function(e){return{url:"deck",method:"DELETE",headers:{"Content-Type":"application/json; charset=utf-8"},body:e}}})}}})),N=C.useDeleteDeckMutation,S=C.useCreateDeckMutation,D=C.useGetAllDecksQuery,F=c(3),T=Object(F.d)({name:"myDeck",initialState:{decks:[],selected:{},selectedCards:[],selectedCardIndex:0,delay1:-1,delay2:-1,delay3:-1,delay4:-1,delay5:-1},reducers:{setDelay1:function(e,t){e.delay1=t.payload},setDelay2:function(e,t){e.delay2=t.payload},setDelay3:function(e,t){e.delay3=t.payload},setDelay4:function(e,t){e.delay4=t.payload},setDelay5:function(e,t){e.delay5=t.payload},setDeck:function(e,t){e.decks=t.payload},addDeck:function(e,t){e.decks.concat(t.payload)},getDeck:function(e){return e},setSelectedDeck:function(e,t){e.selected=t.payload},setSelectedCards:function(e,t){e.selectedCards=t.payload},setSelectedCardIndex:function(e,t){e.selectedCardIndex=t.payload},updateCard:function(e,t){}}}),E=T.actions,w=E.setDelay1,B=E.setDelay2,P=E.setDelay3,I=E.setDelay4,L=E.setDelay5,q=(E.updateCard,E.setDeck),M=(E.getDeck,E.addDeck,E.setSelectedDeck),H=E.setSelectedCards,A=E.setSelectedCardIndex,Q=T.reducer,G=(c(62),function(e){var t=Object(a.useState)(!1),c=Object(j.a)(t,2),n=(c[0],c[1],Object(a.useState)({dname:""})),r=Object(j.a)(n,2),s=r[0],i=r[1],d=Object(a.useState)(!1),l=Object(j.a)(d,2),b=l[0],o=l[1],u=Object(a.useState)(""),O=Object(j.a)(u,2),h=O[0],x=O[1],m=S(),f=Object(j.a)(m,2),y=f[0],C=f[1],N=C.data,D=(C.error,C.isLoading),F=C.isSuccess,T=C.isError,E=Object(k.d)();b&&F&&N&&(N.error?x(N.error):(E(q(N.decks)),x("deck created!"),e.closeCallback()),o(!1));return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y({name:s.dname}),i({dname:""}),o(!0)},children:[Object(p.jsx)("div",{className:"mainContainer",children:Object(p.jsx)("div",{className:"subContainer",children:Object(p.jsx)("label",{className:"col-form-label col-form-label-sm",children:"Deck name"})})}),Object(p.jsxs)("div",{className:"mainContainer",children:[Object(p.jsx)("div",{className:"subContainer",children:Object(p.jsx)("input",{type:"text",name:"dname",id:"dname",className:"form-input",onChange:function(e){e.persist(),i((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(g.a)({},e.target.name,e.target.value))}))},value:s.dname})}),Object(p.jsx)("div",{className:"subContainer",children:Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Create Deck"})})]}),T?Object(p.jsx)(p.Fragment,{children:" Sorry, an Error has occured. "}):F?Object(p.jsxs)(p.Fragment,{children:[" ",h," "]}):D?Object(p.jsx)(p.Fragment,{children:" loading "}):null]})})}),U=(c(38),c(63),c(73)),z=c(75),J=function(e){var t=Object(a.useState)(!1),c=Object(j.a)(t,2),n=c[0],r=c[1],s=N(),i=Object(j.a)(s,2),d=i[0],l=i[1],b=l.data,o=(l.error,l.isLoading),u=l.isSuccess,O=l.isError,h=(Object(k.e)((function(e){return e.myDecks.decks})),Object(k.e)((function(e){return e.myDecks.selected}))),x=Object(a.useState)(""),m=Object(j.a)(x,2),f=m[0],y=m[1],g=Object(k.d)();return n&&u&&b&&(b.error?y(b.error):(y("Deletion successfull!"),g(q(b)),e.closeCallback()),r(!1)),Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d(h),r(!0)},children:[Object(p.jsx)("h6",{children:"Are you sure you want to delete this?"}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"yes"}),O?Object(p.jsx)(p.Fragment,{children:" Sorry, an Error has occured. "}):u?Object(p.jsxs)(p.Fragment,{children:[" ",f," "]}):o?Object(p.jsx)(p.Fragment,{children:" loading "}):null]})})},R=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=t[0],n=t[1],r=function(){return n(!1)},s=Object(a.useState)(!1),i=Object(j.a)(s,2),d=i[0],b=i[1],o=function(){return b(!1)},u=D(""),O=u.data,h=(u.error,u.isLoading),x=u.isSuccess,m=u.isError,f=Object(a.useState)(!1),y=Object(j.a)(f,2),g=y[0],v=y[1],C=Object(a.useState)(!1),N=Object(j.a)(C,2),S=(N[0],N[1]),F=Object(k.e)((function(e){return e.myDecks.decks})),T=Object(k.d)(),E=Object(l.f)();Object(a.useEffect)((function(){v(!1)}),[]);var w,B=function(e){return function(t){T(M(e)),E.push("/decks/"+e.id+"/")}},P=function(e){return function(t){T(M(e)),E.push("/settings/"+e.id+"/")}},I=function(e){return function(t){T(M(e)),n(!0)}};return x&&0==g&&O&&(T(q(O)),v(!0),S(!0)),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"centering",children:[Object(p.jsxs)("div",{className:"container col-xxl-12 col-xxl-12",children:[Object(p.jsx)("div",{className:"row align-items-center",children:Object(p.jsxs)(U.a,{show:c,onHide:r,backdrop:"static",children:[Object(p.jsx)(U.a.Header,{children:Object(p.jsx)(U.a.Title,{children:"Delete Deck"})}),Object(p.jsx)(U.a.Body,{children:Object(p.jsx)(J,{closeCallback:function(e){r()}})}),Object(p.jsx)(U.a.Footer,{children:Object(p.jsx)(z.a,{variant:"secondary",onClick:r,children:"Close"})})]})}),Object(p.jsx)("div",{className:"row align-items-center",children:Object(p.jsxs)(U.a,{show:d,onHide:o,backdrop:"static",children:[Object(p.jsx)(U.a.Header,{children:Object(p.jsx)(U.a.Title,{children:"Create Deck"})}),Object(p.jsx)(U.a.Body,{children:Object(p.jsx)(G,{closeCallback:function(e){o()}})}),Object(p.jsx)(U.a.Footer,{children:Object(p.jsx)(z.a,{variant:"secondary",onClick:o,children:"Close"})})]})})]}),Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light static-top",children:Object(p.jsx)("div",{className:"container-fluid",children:Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:function(){return b(!0)},type:"button",className:"btn btn-primary",children:"Add Deck"})})})}),Object(p.jsxs)("table",{className:"table",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"#"}),Object(p.jsx)("th",{scope:"col",children:"Deck Name"}),Object(p.jsx)("th",{scope:"col",children:"Due Date"}),Object(p.jsx)("th",{scope:"col",children:"Total Cards"}),Object(p.jsx)("th",{scope:"col",children:"Total Studed"}),Object(p.jsx)("th",{scope:"col"})]})}),Object(p.jsxs)("tbody",{children:[(w=F,w.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.id}),Object(p.jsx)("td",{children:Object(p.jsx)("a",{href:"#",onClick:B(e),children:e.name})}),Object(p.jsx)("td",{children:e.dueDate}),Object(p.jsx)("td",{children:e.totalCards}),Object(p.jsx)("td",{children:e.totalStudied}),Object(p.jsxs)("td",{children:[Object(p.jsx)("a",{href:"#",onClick:P(e),children:"Settings"}),Object(p.jsx)("button",{className:"btn btn-danger deleteButton",onClick:I(e),children:"Delete"})]})]})}))),m?Object(p.jsx)(p.Fragment,{children:" Sorry, an Error has occured. "}):x?Object(p.jsxs)(p.Fragment,{children:[" ","  "]}):h?Object(p.jsx)(p.Fragment,{children:" loading "}):null]})]})]})})},K=function(){var e=Object(l.f)(),t=Object(k.e)((function(e){return e.myDecks.selected}));return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{className:"decktitle",children:t.name}),Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light static-top",children:Object(p.jsx)("div",{className:"container-fluid",children:Object(p.jsxs)("div",{className:"deckbuttons",children:[Object(p.jsx)("button",{type:"button",className:"deckbuttons btn btn-primary",children:"Study"}),Object(p.jsx)("button",{type:"button",className:"deckbuttons btn btn-primary",onClick:function(){e.push("/editdeck/"+t.id+"/")},children:"Edit deck"})]})})}),Object(p.jsx)("div",{className:"listcontent"}),Object(p.jsx)("div",{children:Object(p.jsxs)("ul",{className:"list-group",children:[Object(p.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:["Total cards in deck",Object(p.jsx)("span",{className:"badge bg-primary rounded-pill",children:"14"})]}),Object(p.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:["Total cards stuided:",Object(p.jsx)("span",{className:"badge bg-primary rounded-pill",children:"2"})]}),Object(p.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:["Next Addition:",Object(p.jsx)("span",{className:"badge bg-primary rounded-pill",children:"2021-09-04 17:54:29 "})]})]})})]})},V=Object(O.a)({reducerPath:"card",baseQuery:Object(h.d)({}),tagTypes:["Post","Card"],endpoints:function(e){return{createCard:e.mutation({query:function(e){return{url:"/card",method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:e}},invalidatesTags:["Post"]}),editCard:e.mutation({query:function(e){return{url:"/card",method:"PUT",headers:{"Content-Type":"application/json; charset=utf-8"},body:e}}}),deleteCard:e.mutation({query:function(e){return{url:"/card",method:"DELETE",headers:{"Content-Type":"application/json; charset=utf-8"},body:e}}}),getAllCards:e.query({query:function(e){return"/cards/"+e}})}}}),W=V.useCreateCardMutation,X=V.useGetAllCardsQuery,Y=V.useEditCardMutation,Z=V.useDeleteCardMutation,$=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=(t[0],t[1]),n=Object(a.useState)({cardBack:"",cardFront:""}),r=Object(j.a)(n,2),s=r[0],i=r[1],d=Object(a.useState)(!1),l=Object(j.a)(d,2),b=l[0],o=l[1],u=Object(a.useState)(""),O=Object(j.a)(u,2),h=O[0],x=O[1],m=Y(),f=Object(j.a)(m,2),y=f[0],C=f[1],N=C.data,S=(C.error,C.isLoading),D=C.isSuccess,F=C.isError,T=Object(k.e)((function(e){return e.myDecks})),E=Object(k.d)(),w=Object(a.useState)({}),B=Object(j.a)(w,2);B[0],B[1];Object(a.useEffect)((function(){if(-1!=T.selectedCardIndex){var e=T.selectedCards[T.selectedCardIndex];i({cardBack:e.back,cardFront:e.front})}}),[null]);b&&D&&N&&(N.error?x(N.error):(E(H(N)),x("Edit successfull!"),c(!1)),o(!1));var P=function(e){e.persist(),i((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(g.a)({},e.target.name,e.target.value))}))};return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:T.selectedCards[T.selectedCardIndex].id,deckId:0,front:s.cardFront,back:s.cardBack,dueDate:""};y(t),o(!0)},children:[Object(p.jsx)("h6",{children:"Card front"}),Object(p.jsx)("input",{type:"text",name:"cardFront",id:"cardFront",className:"form-input",onChange:P,value:s.cardFront}),Object(p.jsx)("h6",{children:"Card back"}),Object(p.jsx)("input",{type:"text",name:"cardBack",id:"cardBack",className:"form-input",onChange:P,value:s.cardBack}),Object(p.jsx)("h6",{})," ",Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"}),F?Object(p.jsx)(p.Fragment,{children:" Sorry, an Error has occured. "}):D?Object(p.jsxs)(p.Fragment,{children:[" ",h," "]}):S?Object(p.jsx)(p.Fragment,{children:" loading "}):null]})})},_=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=(t[0],t[1]),n=Object(a.useState)({cardBack:"",cardFront:""}),r=Object(j.a)(n,2),s=r[0],i=r[1],d=Object(a.useState)(!1),l=Object(j.a)(d,2),b=l[0],o=l[1],u=Object(a.useState)(""),O=Object(j.a)(u,2),h=O[0],x=O[1],m=W(),f=Object(j.a)(m,2),y=f[0],C=f[1],N=C.data,S=(C.error,C.isLoading),D=C.isSuccess,F=C.isError,T=Object(k.e)((function(e){return e.myDecks.selected}));Object(k.d)();b&&D&&N&&(N.error?x(N.error):(x("card created!"),c(!1)),o(!1));var E=function(e){e.persist(),i((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(g.a)({},e.target.name,e.target.value))}))};return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y({deckId:T.id,front:s.cardFront,back:s.cardBack}),i({cardBack:"",cardFront:""}),o(!0)},children:[Object(p.jsx)("h6",{children:"Card front"}),Object(p.jsx)("input",{type:"text",name:"cardFront",id:"cardFront",className:"form-input",onChange:E,value:s.cardFront}),Object(p.jsx)("h6",{children:"Card back"}),Object(p.jsx)("input",{type:"text",name:"cardBack",id:"cardBack",className:"form-input",onChange:E,value:s.cardBack}),Object(p.jsx)("h6",{}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Create Deck"}),F?Object(p.jsx)(p.Fragment,{children:" Sorry, an Error has occured. "}):D?Object(p.jsxs)(p.Fragment,{children:[" ",h," "]}):S?Object(p.jsx)(p.Fragment,{children:" loading "}):null]})})},ee=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=(t[0],t[1],Object(a.useState)(!1)),n=Object(j.a)(c,2),r=n[0],s=n[1],i=Object(a.useState)(""),d=Object(j.a)(i,2),l=d[0],b=d[1],o=Z(),u=Object(j.a)(o,2),O=u[0],h=u[1],x=h.data,m=(h.error,h.isLoading),f=h.isSuccess,y=h.isError,g=Object(k.d)(),v=(Object(k.e)((function(e){return e.myDecks.selectedCards})),Object(k.e)((function(e){return e.myDecks})));return r&&f&&x&&(x.error?b(x.error):(g(H(x)),b("Deletion successfull!")),s(!1)),Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:v.selectedCards[v.selectedCardIndex].id,deckId:0,front:"",back:"",dueDate:""};O(t),s(!0)},children:[Object(p.jsx)("h6",{children:"Are you sure you want to delete this?"}),Object(p.jsx)("h6",{})," ",Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"yes"}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"no"}),y?Object(p.jsx)(p.Fragment,{children:" Sorry, an Error has occured. "}):f?Object(p.jsxs)(p.Fragment,{children:[" ",l," "]}):m?Object(p.jsx)(p.Fragment,{children:" loading "}):null]})})},te=function(){var e,t=Object(k.e)((function(e){return e.myDecks.selected})),c=Object(k.e)((function(e){return e.myDecks.selectedCards})),n=Object(k.d)(),r=X(t.id),s=r.data,i=(r.error,r.isLoading,r.isSuccess),d=(r.isError,Object(a.useState)(!1)),l=Object(j.a)(d,2),b=l[0],o=l[1],u=Object(a.useState)(!1),O=Object(j.a)(u,2),h=O[0],x=O[1],m=function(){return o(!1)},f=function(){return x(!1)},y=Object(a.useState)(!1),g=Object(j.a)(y,2),v=g[0],C=g[1],N=function(){return C(!1)},S=Object(a.useState)(!1),D=Object(j.a)(S,2),F=D[0],T=D[1],E=Object(a.useState)(!1),w=Object(j.a)(E,2),B=(w[0],w[1]),P=function(e){return function(){n(A(e)),x(!0)}},I=function(e){return function(){n(A(e)),C(!0)}};return i&&0==F&&s&&(n(H(s)),T(!0),B(!0)),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"centering",children:[Object(p.jsx)("div",{className:"container col-xxl-12 col-xxl-12",children:Object(p.jsx)("div",{className:"row align-items-center",children:Object(p.jsxs)(U.a,{show:b,onHide:m,backdrop:"static",children:[Object(p.jsx)(U.a.Header,{children:Object(p.jsx)(U.a.Title,{children:"Create Card"})}),Object(p.jsx)(U.a.Body,{children:Object(p.jsx)(_,{})}),Object(p.jsx)(U.a.Footer,{children:Object(p.jsx)(z.a,{variant:"secondary",onClick:m,children:"Close"})})]})})}),Object(p.jsx)("div",{className:"row align-items-center",children:Object(p.jsxs)(U.a,{show:h,onHide:f,backdrop:"static",children:[Object(p.jsx)(U.a.Header,{children:Object(p.jsx)(U.a.Title,{children:"Edit Card"})}),Object(p.jsx)(U.a.Body,{children:Object(p.jsx)($,{})}),Object(p.jsx)(U.a.Footer,{children:Object(p.jsx)(z.a,{variant:"secondary",onClick:f,children:"Close"})})]})}),Object(p.jsx)("div",{className:"row align-items-center",children:Object(p.jsxs)(U.a,{show:v,onHide:N,backdrop:"static",children:[Object(p.jsx)(U.a.Header,{children:Object(p.jsx)(U.a.Title,{children:"Delete Card"})}),Object(p.jsx)(U.a.Body,{children:Object(p.jsx)(ee,{})}),Object(p.jsx)(U.a.Footer,{children:Object(p.jsx)(z.a,{variant:"secondary",onClick:N,children:"Close"})})]})}),Object(p.jsx)("h3",{className:"decktitle",children:t.name}),Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light static-top",children:Object(p.jsx)("div",{className:"container-fluid",children:Object(p.jsx)("div",{className:"deckbuttons",children:Object(p.jsx)("button",{type:"button",className:"deckbuttons btn btn-primary",onClick:function(){return o(!0)},children:"+"})})})}),Object(p.jsx)("div",{children:Object(p.jsxs)("table",{className:"table",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"#"}),Object(p.jsx)("th",{scope:"col",children:"Front"}),Object(p.jsx)("th",{scope:"col",children:"Back"}),Object(p.jsx)("th",{scope:"col",children:"Due"}),Object(p.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(p.jsx)("tbody",{children:(e=c,e.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t+1}),Object(p.jsx)("td",{children:e.front}),Object(p.jsx)("td",{children:e.back}),Object(p.jsx)("td",{children:e.dueDate}),Object(p.jsxs)("td",{children:[Object(p.jsx)("button",{type:"button",className:"btn btn-primary",onClick:P(t),children:"Edit"}),Object(p.jsx)("button",{type:"button",className:"btn btn-danger",onClick:I(t),children:"Delete"})]})]})})))})]})})]})})},ce=(c(65),c(43)),ne=c.n(ce),ae=function(e){var t=Object(a.useState)(""),c=Object(j.a)(t,2),n=c[0],r=c[1];Object(a.useEffect)((function(){r(""+e.value)}),[e.value]);return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"input-group",children:[Object(p.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){var t=+n;++t,r(""+t),e.parentCallback(""+t)},children:"+"}),Object(p.jsx)("input",{type:"text",className:"form-control",placeholder:"","aria-label":"Recipient's username with two button addons",value:n,onChange:function(t){!function(t){r(t.target.value),e.parentCallback(t.target.value)}(t)}}),Object(p.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){var t=+n;--t,r(""+t),e.parentCallback(""+t)},children:"-"})]})})},re=function(e){var t=Object(a.useState)(0),c=Object(j.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(0),i=Object(j.a)(s,2),d=i[0],l=i[1],b=Object(a.useState)(0),o=Object(j.a)(b,2),u=o[0],O=o[1],h=Object(a.useState)(0),x=Object(j.a)(h,2),m=(x[0],x[1],Object(a.useState)(!1)),f=Object(j.a)(m,2);f[0],f[1],Object(k.e)((function(e){return e.myDecks.delay2}));Object(a.useEffect)((function(){if(e.defaultSettings>0)if(e.defaultSettings<60)O(e.defaultSettings);else if(e.defaultSettings>=1440){var t=e.defaultSettings/24/60,c=(24*t*60-e.defaultSettings)/60,n=24*t*60-60*c-e.defaultSettings;r(t),l(c),O(n)}}),[e.defaultSettings]);return Object(p.jsx)("div",{children:Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Day"}),Object(p.jsx)("td",{children:"Hours"}),Object(p.jsx)("td",{children:"Mins"})]})}),Object(p.jsx)("tbody",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsx)(ae,{value:n,parentCallback:function(t){r(t),e.totalTimeCallback(u*(60*d)+24*n*60)}})}),Object(p.jsx)("td",{children:Object(p.jsx)(ae,{value:d,parentCallback:function(t){l(t),e.totalTimeCallback(u*(60*d)+24*n*60)}})}),Object(p.jsx)("td",{children:Object(p.jsx)(ae,{value:u,parentCallback:function(t){l(t),e.totalTimeCallback(u*(60*d)+24*n*60)}})})]})})]})})},se=Object(O.a)({reducerPath:"setting",baseQuery:Object(h.d)({}),endpoints:function(e){return{getSettings:e.query({query:function(e){return"/decksettings/"+e}})}}}),ie=se.useGetSettingsQuery,de=function(e){var t=Object(k.e)((function(e){return e.myDecks.selected})),c=Object(a.useState)(1),n=Object(j.a)(c,2),r=(n[0],n[1],ie(t.id)),s=r.data,i=(r.error,r.isLoading,r.isSuccess),d=(r.isError,Object(a.useState)(!1)),l=Object(j.a)(d,2),b=l[0],o=l[1],u=Object(a.useState)(""),O=Object(j.a)(u,2),h=O[0],x=O[1],m=Object(a.useState)(""),f=Object(j.a)(m,2),y=f[0],g=f[1],v=Object(a.useState)(!1),C=Object(j.a)(v,2),N=C[0],S=C[1],D=Object(a.useState)(0),F=Object(j.a)(D,2),T=F[0],E=F[1],q=Object(a.useState)(0),M=Object(j.a)(q,2),H=M[0],A=M[1],Q=Object(a.useState)(0),G=Object(j.a)(Q,2),U=G[0],z=G[1],J=Object(a.useState)(0),R=Object(j.a)(J,2),K=R[0],V=R[1],W=Object(a.useState)(0),X=Object(j.a)(W,2),Y=(X[0],X[1]),Z=Object(a.useState)(!1),$=Object(j.a)(Z,2),_=$[0],ee=$[1],te=Object(k.d)(),ce=Object(k.e)((function(e){return e.myDecks.delay1})),ae=Object(k.e)((function(e){return e.myDecks.delay2})),se=Object(k.e)((function(e){return e.myDecks.delay3})),de=Object(k.e)((function(e){return e.myDecks.delay4})),le=Object(k.e)((function(e){return e.myDecks.delay5}));Object(a.useEffect)((function(){o(!1),E(ce),A(ae),z(se),V(de),Y(le)}),[ce,ae,se,de,le]),-1!=ae&&0==_&&(A(ae),ee(!0));var je=function(e){return function(){x(e)}},be=function(e){return function(){g(e)}};return i&&0==b&&s&&(x(""+s.cardsPerDay),g(""+s.timer),S(s.randomize),te(w(s.delay1)),te(B(s.delay2)),te(P(s.delay3)),te(I(s.delay4)),te(L(s.delay5)),o(!0)),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:t.name}),Object(p.jsxs)("table",{className:"table",children:[Object(p.jsx)("thead",{children:Object(p.jsx)("tr",{children:Object(p.jsx)("td",{children:"Deck Options"})})}),Object(p.jsxs)("tbody",{children:[Object(p.jsx)("tr",{children:Object(p.jsx)("td",{children:"Card added Per Day"})}),Object(p.jsx)("tr",{children:Object(p.jsx)("td",{children:Object(p.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic radio toggle button group",children:[Object(p.jsx)("input",{type:"radio",className:"btn-check",name:"btnradio",id:"btnradio1",checked:"1"==h}),Object(p.jsx)("label",{className:"btn btn-outline-primary",onClick:je("1"),children:"1"}),Object(p.jsx)("input",{type:"radio",className:"btn-check",name:"btnradio",id:"btnradio2",checked:"5"==h}),Object(p.jsx)("label",{className:"btn btn-outline-primary",onClick:je("5"),children:"5"}),Object(p.jsx)("input",{type:"radio",className:"btn-check",name:"btnradio",id:"btnradio3",checked:"10"==h}),Object(p.jsx)("label",{className:"btn btn-outline-primary",onClick:je("10"),children:"10"}),Object(p.jsx)("input",{type:"radio",className:"btn-check",name:"btnradio",id:"btnradio4",checked:"15"==h}),Object(p.jsx)("label",{className:"btn btn-outline-primary",onClick:je("15"),children:"15"})]})})}),Object(p.jsx)("tr",{children:Object(p.jsx)("td",{children:"Deck Timer"})}),Object(p.jsx)("tr",{children:Object(p.jsx)("td",{children:Object(p.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic radio toggle button group",children:[Object(p.jsx)("input",{type:"radio",className:"btn-check",name:"btnradio2",id:"btnradio1",checked:"0"==y}),Object(p.jsx)("label",{className:"btn btn-outline-primary",onClick:be("1"),children:"Off"}),Object(p.jsx)("input",{type:"radio",className:"btn-check",name:"btnradio2",id:"btnradio2",checked:"5"==y}),Object(p.jsx)("label",{className:"btn btn-outline-primary",onClick:be("5"),children:"5 Mins"}),Object(p.jsx)("input",{type:"radio",className:"btn-check",name:"btnradio2",id:"btnradio3",checked:"10"==y}),Object(p.jsx)("label",{className:"btn btn-outline-primary",onClick:be("10"),children:"10 Mins"}),Object(p.jsx)("input",{type:"radio",className:"btn-check",name:"btnradio2",id:"btnradio4",checked:"15"==y}),Object(p.jsx)("label",{className:"btn btn-outline-primary",onClick:be("15"),children:"15 Mins"}),Object(p.jsx)("input",{type:"radio",className:"btn-check",name:"btnradio2",id:"btnradio5",checked:"30"==y}),Object(p.jsx)("label",{className:"btn btn-outline-primary",onClick:be("30"),children:"30 Mins"})]})})}),Object(p.jsx)("tr",{children:Object(p.jsx)("td",{children:"Randomize Cards"})}),Object(p.jsx)("tr",{children:Object(p.jsx)("td",{children:Object(p.jsx)(ne.a,{checked:N,onlabel:"On",offlabel:"Off",onChange:function(e){S(e)}})})})]})]}),Object(p.jsxs)("table",{className:"table",children:[Object(p.jsx)("thead",{children:Object(p.jsx)("tr",{children:Object(p.jsx)("td",{children:"Card Options"})})}),Object(p.jsxs)("tbody",{children:[Object(p.jsx)("tr",{children:Object(p.jsxs)("td",{children:["Delay 1:",Object(p.jsx)(re,{totalTimeCallback:function(e){},defaultSettings:T})]})}),Object(p.jsx)("tr",{children:Object(p.jsxs)("td",{children:["Delay 2:",Object(p.jsx)(re,{totalTimeCallback:function(e){},defaultSettings:H})]})}),Object(p.jsx)("tr",{children:Object(p.jsxs)("td",{children:["Delay 3:",Object(p.jsx)(re,{totalTimeCallback:function(e){},defaultSettings:U})]})}),Object(p.jsx)("tr",{children:Object(p.jsxs)("td",{children:["Delay 4:",Object(p.jsx)(re,{totalTimeCallback:function(e){},defaultSettings:K})]})})]})]})]})},le=function(e){return Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/",component:y}),Object(p.jsx)(l.a,{exact:!0,path:"/index",component:R}),Object(p.jsx)(l.a,{exact:!0,path:"/decks/:deckId",component:K}),Object(p.jsx)(l.a,{exact:!0,path:"/editdeck/:deckId",component:te}),Object(p.jsx)(l.a,{exact:!0,path:"/settings/:deckId",component:de})]})},je=c(26),be=(c(68),function(e){return Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark static-top",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"})]})})}),oe=c(29),ue=Object(F.a)({reducer:(n={myDecks:Q},Object(g.a)(n,x.reducerPath,x.reducer),Object(g.a)(n,C.reducerPath,C.reducer),Object(g.a)(n,V.reducerPath,V.reducer),Object(g.a)(n,se.reducerPath,se.reducer),n),middleware:function(e){return e().concat(x.middleware,C.middleware,V.middleware,se.middleware,oe.a)}});var Oe=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(u.a,{}),Object(p.jsx)(k.a,{store:ue,children:Object(p.jsx)(je.a,{children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(be,{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(le,{})]})})})]})},he=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,76)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(Oe,{})}),document.getElementById("root")),he()}},[[70,1,2]]]);
//# sourceMappingURL=main.796d1db0.chunk.js.map