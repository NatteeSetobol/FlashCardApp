(this.webpackJsonpflashcard=this.webpackJsonpflashcard||[]).push([[0],{38:function(e,t,c){},50:function(e,t,c){},57:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var n,a=c(1),s=c.n(a),r=c(18),i=c.n(r),d=(c(50),c(77)),l=c(9),j=c(2),b=c(40),o=function e(t,c,n){Object(b.a)(this,e),this.id=t,this.username=c,this.password=n},u=(c(37),c(31)),O=c(24),h=c(14),x=Object(O.a)({reducerPath:"login",baseQuery:Object(h.d)({}),tagTypes:["Post","User"],endpoints:function(e){return{login:e.mutation({query:function(e){return{url:"user",method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:e}},invalidatesTags:["Post"]})}}}),m=x.useLoginMutation,f=(c(57),c(0)),p=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(j.a)(s,2),i=r[0],d=r[1],b=m(),O=Object(j.a)(b,2),h=O[0],x=O[1],p=x.data,y=(x.error,x.isLoading),k=x.isSuccess,v=x.isError,g=Object(a.useState)(!1),N=Object(j.a)(g,2),C=N[0],S=N[1],D=Object(l.f)();Object(a.useEffect)((function(){S(!1)}),[]);return k&&p&&(p.error?C&&(u.b.error(p.error),S(!1)):D.push("/index")),Object(f.jsxs)("div",{id:"main",children:[Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"comp",children:[Object(f.jsx)("div",{className:"compbox",children:Object(f.jsx)("label",{className:"col-form-label col-form-label-sm",children:"Username:"})}),Object(f.jsx)("div",{className:"compbox",children:Object(f.jsx)("input",{type:"name",className:"form-control form-control-sm",id:"email",placeholder:"username",onChange:function(e){n(e.target.value)},value:c})})]}),Object(f.jsxs)("div",{className:"comp",children:[Object(f.jsx)("div",{className:"compbox",children:Object(f.jsx)("label",{className:"col-form-label col-form-label-sm",children:"Password :"})}),Object(f.jsx)("div",{className:"compbox",children:Object(f.jsx)("input",{type:"password",className:"form-control form-control-sm",id:"password",placeholder:"password",onChange:function(e){d(e.target.value)},value:i})})]})]}),Object(f.jsxs)("div",{className:"comp",children:[Object(f.jsx)("div",{className:"compbox blankspot"}),Object(f.jsx)("div",{className:"compbox",children:Object(f.jsx)("button",{type:"submit",className:"btn btn-primary pull-right",onClick:function(){var e=new o(0,c,i);h(e),n(""),d(""),S(!0)},children:"Submit"})})]}),v?Object(f.jsx)(f.Fragment,{children:" Sorry, an Error has occured.   "}):k?Object(f.jsx)(f.Fragment,{}):y?Object(f.jsx)("div",{children:"loading..."}):null]})},y=function(){return Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-6 col-md-4"}),Object(f.jsx)("div",{className:"col-6 col-md-4",children:Object(f.jsx)(p,{})}),Object(f.jsx)("div",{className:"col-6 col-md-4"})]})})},k=c(4),v=c(16),g=c(19),N=(c(25),Object(O.a)({reducerPath:"Deck",baseQuery:Object(h.d)({}),endpoints:function(e){return{createDeck:e.mutation({query:function(e){return{url:"deck",method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:e}}}),getAllDecks:e.query({query:function(){return"/decks"}}),deleteDeck:e.mutation({query:function(e){return{url:"deck",method:"DELETE",headers:{"Content-Type":"application/json; charset=utf-8"},body:e}}})}}})),C=N.useDeleteDeckMutation,S=N.useCreateDeckMutation,D=N.useGetAllDecksQuery,F=c(3),T=Object(F.d)({name:"myDeck",initialState:{decks:[],selected:{},selectedCards:[],selectedCardIndex:0,delay1:-1,delay2:-1,delay3:-1,delay4:-1,delay5:-1},reducers:{setDelay1:function(e,t){e.delay1=t.payload},setDelay2:function(e,t){e.delay2=t.payload},setDelay3:function(e,t){e.delay3=t.payload},setDelay4:function(e,t){e.delay4=t.payload},setDelay5:function(e,t){e.delay5=t.payload},setDeck:function(e,t){e.decks=t.payload},addDeck:function(e,t){e.decks.concat(t.payload)},getDeck:function(e){return e},setSelectedDeck:function(e,t){e.selected=t.payload},setSelectedCards:function(e,t){e.selectedCards=t.payload},setSelectedCardIndex:function(e,t){e.selectedCardIndex=t.payload},updateCard:function(e,t){}}}),w=T.actions,E=w.setDelay1,B=w.setDelay2,I=w.setDelay3,P=w.setDelay4,L=w.setDelay5,q=(w.updateCard,w.setDeck),A=(w.getDeck,w.addDeck,w.setSelectedDeck),M=w.setSelectedCards,H=w.setSelectedCardIndex,Q=T.reducer,R=(c(63),function(e){var t=Object(a.useState)(!1),c=Object(j.a)(t,2),n=(c[0],c[1],Object(a.useState)({dname:""})),s=Object(j.a)(n,2),r=s[0],i=s[1],d=Object(a.useState)(!1),l=Object(j.a)(d,2),b=l[0],o=l[1],u=Object(a.useState)(""),O=Object(j.a)(u,2),h=O[0],x=O[1],m=S(),p=Object(j.a)(m,2),y=p[0],N=p[1],C=N.data,D=(N.error,N.isLoading),F=N.isSuccess,T=N.isError,w=Object(k.d)();b&&F&&C&&(C.error?x(C.error):(w(q(C.decks)),x("deck created!"),e.closeCallback()),o(!1));return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y({name:r.dname}),i({dname:""}),o(!0)},children:[Object(f.jsx)("div",{className:"mainContainer",children:Object(f.jsx)("div",{className:"subContainer",children:Object(f.jsx)("label",{className:"col-form-label col-form-label-sm",children:"Deck name"})})}),Object(f.jsxs)("div",{className:"mainContainer",children:[Object(f.jsx)("div",{className:"subContainer",children:Object(f.jsx)("input",{type:"text",name:"dname",id:"dname",className:"form-input",onChange:function(e){e.persist(),i((function(t){return Object(g.a)(Object(g.a)({},t),{},Object(v.a)({},e.target.name,e.target.value))}))},value:r.dname})}),Object(f.jsx)("div",{className:"subContainer",children:Object(f.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Create Deck"})})]}),T?Object(f.jsx)(f.Fragment,{children:" Sorry, an Error has occured. "}):F?Object(f.jsxs)(f.Fragment,{children:[" ",h," "]}):D?Object(f.jsx)(f.Fragment,{children:" loading "}):null]})})}),G=(c(38),c(64),c(76)),U=c(78),z=function(e){var t=Object(a.useState)(!1),c=Object(j.a)(t,2),n=c[0],s=c[1],r=C(),i=Object(j.a)(r,2),d=i[0],l=i[1],b=l.data,o=(l.error,l.isLoading),u=l.isSuccess,O=l.isError,h=(Object(k.e)((function(e){return e.myDecks.decks})),Object(k.e)((function(e){return e.myDecks.selected}))),x=Object(a.useState)(""),m=Object(j.a)(x,2),p=m[0],y=m[1],v=Object(k.d)();return n&&u&&b&&(b.error?y(b.error):(y("Deletion successfull!"),v(q(b)),e.closeCallback()),s(!1)),Object(f.jsx)("div",{children:Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d(h),s(!0)},children:[Object(f.jsx)("h6",{children:"Are you sure you want to delete this?"}),Object(f.jsx)("button",{type:"submit",className:"btn btn-primary",children:"yes"}),O?Object(f.jsx)(f.Fragment,{children:" Sorry, an Error has occured. "}):u?Object(f.jsxs)(f.Fragment,{children:[" ",p," "]}):o?Object(f.jsx)(f.Fragment,{children:" loading "}):null]})})},J=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=t[0],n=t[1],s=function(){return n(!1)},r=Object(a.useState)(!1),i=Object(j.a)(r,2),d=i[0],b=i[1],o=function(){return b(!1)},u=D(""),O=u.data,h=(u.error,u.isLoading),x=u.isSuccess,m=u.isError,p=Object(a.useState)(!1),y=Object(j.a)(p,2),v=y[0],g=y[1],N=Object(a.useState)(!1),C=Object(j.a)(N,2),S=(C[0],C[1]),F=Object(k.e)((function(e){return e.myDecks.decks})),T=Object(k.d)(),w=Object(l.f)();Object(a.useEffect)((function(){g(!1)}),[]);var E,B=function(e){return function(t){T(A(e)),w.push("/decks/"+e.id+"/")}},I=function(e){return function(t){T(A(e)),w.push("/settings/"+e.id+"/")}},P=function(e){return function(t){T(A(e)),n(!0)}};return x&&0==v&&O&&(T(q(O)),g(!0),S(!0)),Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"centering",children:[Object(f.jsxs)("div",{className:"container col-xxl-12 col-xxl-12",children:[Object(f.jsx)("div",{className:"row align-items-center",children:Object(f.jsxs)(G.a,{show:c,onHide:s,backdrop:"static",children:[Object(f.jsx)(G.a.Header,{children:Object(f.jsx)(G.a.Title,{children:"Delete Deck"})}),Object(f.jsx)(G.a.Body,{children:Object(f.jsx)(z,{closeCallback:function(e){s()}})}),Object(f.jsx)(G.a.Footer,{children:Object(f.jsx)(U.a,{variant:"secondary",onClick:s,children:"Close"})})]})}),Object(f.jsx)("div",{className:"row align-items-center",children:Object(f.jsxs)(G.a,{show:d,onHide:o,backdrop:"static",children:[Object(f.jsx)(G.a.Header,{children:Object(f.jsx)(G.a.Title,{children:"Create Deck"})}),Object(f.jsx)(G.a.Body,{children:Object(f.jsx)(R,{closeCallback:function(e){o()}})}),Object(f.jsx)(G.a.Footer,{children:Object(f.jsx)(U.a,{variant:"secondary",onClick:o,children:"Close"})})]})})]}),Object(f.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light static-top",children:Object(f.jsx)("div",{className:"container-fluid",children:Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:function(){return b(!0)},type:"button",className:"btn btn-primary",children:"Add Deck"})})})}),Object(f.jsxs)("table",{className:"table",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"col",children:"#"}),Object(f.jsx)("th",{scope:"col",children:"Deck Name"}),Object(f.jsx)("th",{scope:"col",children:"Due Date"}),Object(f.jsx)("th",{scope:"col",children:"Total Cards"}),Object(f.jsx)("th",{scope:"col",children:"Total Studed"}),Object(f.jsx)("th",{scope:"col"})]})}),Object(f.jsxs)("tbody",{children:[(E=F,E.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.id}),Object(f.jsx)("td",{children:Object(f.jsx)("a",{href:"#",onClick:B(e),children:e.name})}),Object(f.jsx)("td",{children:e.dueDate}),Object(f.jsx)("td",{children:e.totalCards}),Object(f.jsx)("td",{children:e.totalStudied}),Object(f.jsxs)("td",{children:[Object(f.jsx)("a",{href:"#",onClick:I(e),children:"Settings"}),Object(f.jsx)("button",{className:"btn btn-danger deleteButton",onClick:P(e),children:"Delete"})]})]})}))),m?Object(f.jsx)(f.Fragment,{children:" Sorry, an Error has occured. "}):x?Object(f.jsxs)(f.Fragment,{children:[" ","  "]}):h?Object(f.jsx)(f.Fragment,{children:" loading "}):null]})]})]})})},V=function(){var e=Object(l.f)(),t=Object(k.e)((function(e){return e.myDecks.selected}));return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h3",{className:"decktitle",children:t.name}),Object(f.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light static-top",children:Object(f.jsx)("div",{className:"container-fluid",children:Object(f.jsxs)("div",{className:"deckbuttons",children:[Object(f.jsx)("button",{type:"button",className:"deckbuttons btn btn-primary",onClick:function(){e.push("/study/"+t.id+"/")},children:"Study"}),Object(f.jsx)("button",{type:"button",className:"deckbuttons btn btn-primary",onClick:function(){e.push("/editdeck/"+t.id+"/")},children:"Edit deck"})]})})}),Object(f.jsx)("div",{className:"listcontent"}),Object(f.jsx)("div",{children:Object(f.jsxs)("ul",{className:"list-group",children:[Object(f.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:["Total cards in deck",Object(f.jsx)("span",{className:"badge bg-primary rounded-pill",children:"14"})]}),Object(f.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:["Total cards stuided:",Object(f.jsx)("span",{className:"badge bg-primary rounded-pill",children:"2"})]}),Object(f.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:["Next Addition:",Object(f.jsx)("span",{className:"badge bg-primary rounded-pill",children:"2021-09-04 17:54:29 "})]})]})})]})},K=Object(O.a)({reducerPath:"card",baseQuery:Object(h.d)({}),tagTypes:["Post","Card"],endpoints:function(e){return{createCard:e.mutation({query:function(e){return{url:"/card",method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:e}},invalidatesTags:["Post"]}),editCard:e.mutation({query:function(e){return{url:"/card",method:"PUT",headers:{"Content-Type":"application/json; charset=utf-8"},body:e}}}),deleteCard:e.mutation({query:function(e){return{url:"/card",method:"DELETE",headers:{"Content-Type":"application/json; charset=utf-8"},body:e}}}),getAllCards:e.query({query:function(e){return"/cards/"+e}}),getAllDueCards:e.query({query:function(e){return"/cards/"+e+"/due"}})}}}),W=K.useGetAllDueCardsQuery,X=K.useCreateCardMutation,Y=K.useGetAllCardsQuery,Z=K.useEditCardMutation,$=K.useDeleteCardMutation,_=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=(t[0],t[1]),n=Object(a.useState)({cardBack:"",cardFront:""}),s=Object(j.a)(n,2),r=s[0],i=s[1],d=Object(a.useState)(!1),l=Object(j.a)(d,2),b=l[0],o=l[1],u=Object(a.useState)(""),O=Object(j.a)(u,2),h=O[0],x=O[1],m=Z(),p=Object(j.a)(m,2),y=p[0],N=p[1],C=N.data,S=(N.error,N.isLoading),D=N.isSuccess,F=N.isError,T=Object(k.e)((function(e){return e.myDecks})),w=Object(k.d)(),E=Object(a.useState)({}),B=Object(j.a)(E,2);B[0],B[1];Object(a.useEffect)((function(){if(-1!=T.selectedCardIndex){var e=T.selectedCards[T.selectedCardIndex];i({cardBack:e.back,cardFront:e.front})}}),[null]);b&&D&&C&&(C.error?x(C.error):(w(M(C)),x("Edit successfull!"),c(!1)),o(!1));var I=function(e){e.persist(),i((function(t){return Object(g.a)(Object(g.a)({},t),{},Object(v.a)({},e.target.name,e.target.value))}))};return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:T.selectedCards[T.selectedCardIndex].id,deckId:0,front:r.cardFront,back:r.cardBack,dueDate:""};y(t),o(!0)},children:[Object(f.jsx)("h6",{children:"Card front"}),Object(f.jsx)("input",{type:"text",name:"cardFront",id:"cardFront",className:"form-input",onChange:I,value:r.cardFront}),Object(f.jsx)("h6",{children:"Card back"}),Object(f.jsx)("input",{type:"text",name:"cardBack",id:"cardBack",className:"form-input",onChange:I,value:r.cardBack}),Object(f.jsx)("h6",{})," ",Object(f.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"}),F?Object(f.jsx)(f.Fragment,{children:" Sorry, an Error has occured. "}):D?Object(f.jsxs)(f.Fragment,{children:[" ",h," "]}):S?Object(f.jsx)(f.Fragment,{children:" loading "}):null]})})},ee=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=(t[0],t[1]),n=Object(a.useState)({cardBack:"",cardFront:""}),s=Object(j.a)(n,2),r=s[0],i=s[1],d=Object(a.useState)(!1),l=Object(j.a)(d,2),b=l[0],o=l[1],u=Object(a.useState)(""),O=Object(j.a)(u,2),h=O[0],x=O[1],m=X(),p=Object(j.a)(m,2),y=p[0],N=p[1],C=N.data,S=(N.error,N.isLoading),D=N.isSuccess,F=N.isError,T=Object(k.e)((function(e){return e.myDecks.selected}));Object(k.d)();b&&D&&C&&(C.error?x(C.error):(x("card created!"),c(!1)),o(!1));var w=function(e){e.persist(),i((function(t){return Object(g.a)(Object(g.a)({},t),{},Object(v.a)({},e.target.name,e.target.value))}))};return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y({deckId:T.id,front:r.cardFront,back:r.cardBack}),i({cardBack:"",cardFront:""}),o(!0)},children:[Object(f.jsx)("h6",{children:"Card front"}),Object(f.jsx)("input",{type:"text",name:"cardFront",id:"cardFront",className:"form-input",onChange:w,value:r.cardFront}),Object(f.jsx)("h6",{children:"Card back"}),Object(f.jsx)("input",{type:"text",name:"cardBack",id:"cardBack",className:"form-input",onChange:w,value:r.cardBack}),Object(f.jsx)("h6",{}),Object(f.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Create Deck"}),F?Object(f.jsx)(f.Fragment,{children:" Sorry, an Error has occured. "}):D?Object(f.jsxs)(f.Fragment,{children:[" ",h," "]}):S?Object(f.jsx)(f.Fragment,{children:" loading "}):null]})})},te=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=(t[0],t[1],Object(a.useState)(!1)),n=Object(j.a)(c,2),s=n[0],r=n[1],i=Object(a.useState)(""),d=Object(j.a)(i,2),l=d[0],b=d[1],o=$(),u=Object(j.a)(o,2),O=u[0],h=u[1],x=h.data,m=(h.error,h.isLoading),p=h.isSuccess,y=h.isError,v=Object(k.d)(),g=(Object(k.e)((function(e){return e.myDecks.selectedCards})),Object(k.e)((function(e){return e.myDecks})));return s&&p&&x&&(x.error?b(x.error):(v(M(x)),b("Deletion successfull!")),r(!1)),Object(f.jsx)("div",{children:Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:g.selectedCards[g.selectedCardIndex].id,deckId:0,front:"",back:"",dueDate:""};O(t),r(!0)},children:[Object(f.jsx)("h6",{children:"Are you sure you want to delete this?"}),Object(f.jsx)("h6",{})," ",Object(f.jsx)("button",{type:"submit",className:"btn btn-primary",children:"yes"}),Object(f.jsx)("button",{type:"submit",className:"btn btn-primary",children:"no"}),y?Object(f.jsx)(f.Fragment,{children:" Sorry, an Error has occured. "}):p?Object(f.jsxs)(f.Fragment,{children:[" ",l," "]}):m?Object(f.jsx)(f.Fragment,{children:" loading "}):null]})})},ce=function(){var e,t=Object(k.e)((function(e){return e.myDecks.selected})),c=Object(k.e)((function(e){return e.myDecks.selectedCards})),n=Object(k.d)(),s=Y(t.id),r=s.data,i=(s.error,s.isLoading,s.isSuccess),d=(s.isError,Object(a.useState)(!1)),l=Object(j.a)(d,2),b=l[0],o=l[1],u=Object(a.useState)(!1),O=Object(j.a)(u,2),h=O[0],x=O[1],m=function(){return o(!1)},p=function(){return x(!1)},y=Object(a.useState)(!1),v=Object(j.a)(y,2),g=v[0],N=v[1],C=function(){return N(!1)},S=Object(a.useState)(!1),D=Object(j.a)(S,2),F=D[0],T=D[1],w=Object(a.useState)(!1),E=Object(j.a)(w,2),B=(E[0],E[1]),I=function(e){return function(){n(H(e)),x(!0)}},P=function(e){return function(){n(H(e)),N(!0)}};return i&&0==F&&r&&(n(M(r)),T(!0),B(!0)),Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"centering",children:[Object(f.jsx)("div",{className:"container col-xxl-12 col-xxl-12",children:Object(f.jsx)("div",{className:"row align-items-center",children:Object(f.jsxs)(G.a,{show:b,onHide:m,backdrop:"static",children:[Object(f.jsx)(G.a.Header,{children:Object(f.jsx)(G.a.Title,{children:"Create Card"})}),Object(f.jsx)(G.a.Body,{children:Object(f.jsx)(ee,{})}),Object(f.jsx)(G.a.Footer,{children:Object(f.jsx)(U.a,{variant:"secondary",onClick:m,children:"Close"})})]})})}),Object(f.jsx)("div",{className:"row align-items-center",children:Object(f.jsxs)(G.a,{show:h,onHide:p,backdrop:"static",children:[Object(f.jsx)(G.a.Header,{children:Object(f.jsx)(G.a.Title,{children:"Edit Card"})}),Object(f.jsx)(G.a.Body,{children:Object(f.jsx)(_,{})}),Object(f.jsx)(G.a.Footer,{children:Object(f.jsx)(U.a,{variant:"secondary",onClick:p,children:"Close"})})]})}),Object(f.jsx)("div",{className:"row align-items-center",children:Object(f.jsxs)(G.a,{show:g,onHide:C,backdrop:"static",children:[Object(f.jsx)(G.a.Header,{children:Object(f.jsx)(G.a.Title,{children:"Delete Card"})}),Object(f.jsx)(G.a.Body,{children:Object(f.jsx)(te,{})}),Object(f.jsx)(G.a.Footer,{children:Object(f.jsx)(U.a,{variant:"secondary",onClick:C,children:"Close"})})]})}),Object(f.jsx)("h3",{className:"decktitle",children:t.name}),Object(f.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light static-top",children:Object(f.jsx)("div",{className:"container-fluid",children:Object(f.jsx)("div",{className:"deckbuttons",children:Object(f.jsx)("button",{type:"button",className:"deckbuttons btn btn-primary",onClick:function(){return o(!0)},children:"+"})})})}),Object(f.jsx)("div",{children:Object(f.jsxs)("table",{className:"table",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"col",children:"#"}),Object(f.jsx)("th",{scope:"col",children:"Front"}),Object(f.jsx)("th",{scope:"col",children:"Back"}),Object(f.jsx)("th",{scope:"col",children:"Due"}),Object(f.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(f.jsx)("tbody",{children:(e=c,e.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:t+1}),Object(f.jsx)("td",{children:e.front}),Object(f.jsx)("td",{children:e.back}),Object(f.jsx)("td",{children:e.dueDate}),Object(f.jsxs)("td",{children:[Object(f.jsx)("button",{type:"button",className:"btn btn-primary",onClick:I(t),children:"Edit"}),Object(f.jsx)("button",{type:"button",className:"btn btn-danger",onClick:P(t),children:"Delete"})]})]})})))})]})})]})})},ne=c(43),ae=(c(66),c(44)),se=c.n(ae),re=function(e){var t=Object(a.useState)(""),c=Object(j.a)(t,2),n=c[0],s=c[1];Object(a.useEffect)((function(){s(""+e.value)}),[e.value]);return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:"input-group",children:[Object(f.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){var t=+n;++t,s(""+t),e.parentCallback(""+t)},children:"+"}),Object(f.jsx)("input",{type:"text",className:"form-control",placeholder:"","aria-label":"Recipient's username with two button addons",value:n,onChange:function(t){!function(t){s(t.target.value),e.parentCallback(t.target.value)}(t)}}),Object(f.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){var t=+n;--t,s(""+t),e.parentCallback(""+t)},children:"-"})]})})},ie=function(e){var t=Object(a.useState)(0),c=Object(j.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(0),i=Object(j.a)(r,2),d=i[0],l=i[1],b=Object(a.useState)(0),o=Object(j.a)(b,2),u=o[0],O=o[1],h=Object(a.useState)(0),x=Object(j.a)(h,2),m=(x[0],x[1],Object(a.useState)(!1)),p=Object(j.a)(m,2);p[0],p[1],Object(k.e)((function(e){return e.myDecks.delay2}));Object(a.useEffect)((function(){if(e.defaultSettings>0)if(e.defaultSettings<60)O(e.defaultSettings);else if(e.defaultSettings>=1440){var t=e.defaultSettings/24/60,c=(24*t*60-e.defaultSettings)/60,n=24*t*60-60*c-e.defaultSettings;s(t),l(c),O(n)}}),[e.defaultSettings]);return Object(f.jsx)("div",{children:Object(f.jsxs)("table",{children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Day"}),Object(f.jsx)("td",{children:"Hours"}),Object(f.jsx)("td",{children:"Mins"})]})}),Object(f.jsx)("tbody",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:Object(f.jsx)(re,{value:n,parentCallback:function(t){s(t),e.totalTimeCallback(u*(60*d)+24*n*60)}})}),Object(f.jsx)("td",{children:Object(f.jsx)(re,{value:d,parentCallback:function(t){l(t),e.totalTimeCallback(u*(60*d)+24*n*60)}})}),Object(f.jsx)("td",{children:Object(f.jsx)(re,{value:u,parentCallback:function(t){O(t),e.totalTimeCallback(u*(60*d)+24*n*60)}})})]})})]})})},de=Object(O.a)({reducerPath:"setting",baseQuery:Object(h.d)({}),endpoints:function(e){return{getSettings:e.query({query:function(e){return"/decksettings/"+e}}),saveSettings:e.mutation({query:function(e){return{url:"/decksettings",method:"PUT",headers:{"Content-Type":"application/json; charset=utf-8"},body:e}}})}}}),le=de.useSaveSettingsMutation,je=de.useGetSettingsQuery,be=function(e){var t=Object(k.e)((function(e){return e.myDecks.selected})),c=Object(a.useState)(1),n=Object(j.a)(c,2),s=(n[0],n[1],je(t.id)),r=s.data,i=(s.error,s.isLoading,s.isSuccess),d=(s.isError,Object(a.useState)(!1)),l=Object(j.a)(d,2),b=l[0],o=l[1],u=Object(a.useState)(""),O=Object(j.a)(u,2),h=O[0],x=O[1],m=Object(a.useState)(""),p=Object(j.a)(m,2),y=p[0],v=p[1],g=Object(a.useState)(!1),N=Object(j.a)(g,2),C=N[0],S=N[1],D=Object(a.useState)(0),F=Object(j.a)(D,2),T=F[0],w=F[1],q=Object(a.useState)(0),A=Object(j.a)(q,2),M=A[0],H=A[1],Q=Object(a.useState)(0),R=Object(j.a)(Q,2),G=R[0],U=R[1],z=Object(a.useState)(0),J=Object(j.a)(z,2),V=J[0],K=J[1],W=Object(a.useState)(0),X=Object(j.a)(W,2),Y=X[0],Z=X[1],$=Object(a.useState)(!1),_=Object(j.a)($,2),ee=_[0],te=_[1],ce=Object(a.useState)(!1),ae=Object(j.a)(ce,2),re=ae[0],de=ae[1],be=Object(a.useState)(!1),oe=Object(j.a)(be,2),ue=oe[0],Oe=oe[1],he=Object(a.useState)(!1),xe=Object(j.a)(he,2),me=xe[0],fe=xe[1],pe=le(),ye=Object(j.a)(pe,2),ke=ye[0];Object(ne.a)(ye[1]);var ve=Object(k.d)(),ge=Object(k.e)((function(e){return e.myDecks.delay1})),Ne=Object(k.e)((function(e){return e.myDecks.delay2})),Ce=Object(k.e)((function(e){return e.myDecks.delay3})),Se=Object(k.e)((function(e){return e.myDecks.delay4})),De=Object(k.e)((function(e){return e.myDecks.delay5}));Object(a.useEffect)((function(){0==ee&&(w(ge),H(Ne),U(Ce),K(Se),Z(De))}),[ge,Ne,Ce,Se,De]),-1!=ge&&0==ee&&(w(ge),te(!0)),-1!=Ne&&0==re&&(H(Ne),de(!0)),-1!=Ce&&0==ue&&(U(Ce),Oe(!0)),-1!=Se&&0==me&&(K(Se),fe(!0));var Fe=function(e){return function(){x(e)}},Te=function(e){return function(){v(e)}};return i&&0==b&&r&&(x(""+r.cardsPerDay),v(""+r.timer),S(r.randomize),ve(E(r.delay1)),ve(B(r.delay2)),ve(I(r.delay3)),ve(P(r.delay4)),ve(L(r.delay5)),o(!0)),Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:t.name}),Object(f.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light static-top",children:Object(f.jsx)("div",{className:"container-fluid",children:Object(f.jsx)("div",{className:"deckbuttons",children:Object(f.jsx)("button",{type:"button",className:"deckbuttons btn btn-primary",onClick:function(){ke({deckid:t.id,cardsPerDats:h,Timer:y,randomValue:C,delay1:T,delay2:M,delay3:G,delay4:V,delay5:Y})},children:"Save"})})})}),Object(f.jsxs)("table",{className:"table",children:[Object(f.jsx)("thead",{children:Object(f.jsx)("tr",{children:Object(f.jsx)("td",{children:"Deck Options"})})}),Object(f.jsxs)("tbody",{children:[Object(f.jsx)("tr",{children:Object(f.jsx)("td",{children:"Card added Per Day"})}),Object(f.jsx)("tr",{children:Object(f.jsx)("td",{children:Object(f.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic radio toggle button group",children:[Object(f.jsx)("input",{type:"radio",className:"btn-check",name:"btnradio",id:"btnradio1",checked:"1"==h}),Object(f.jsx)("label",{className:"btn btn-outline-primary",onClick:Fe("1"),children:"1"}),Object(f.jsx)("input",{type:"radio",className:"btn-check",name:"btnradio",id:"btnradio2",checked:"5"==h}),Object(f.jsx)("label",{className:"btn btn-outline-primary",onClick:Fe("5"),children:"5"}),Object(f.jsx)("input",{type:"radio",className:"btn-check",name:"btnradio",id:"btnradio3",checked:"10"==h}),Object(f.jsx)("label",{className:"btn btn-outline-primary",onClick:Fe("10"),children:"10"}),Object(f.jsx)("input",{type:"radio",className:"btn-check",name:"btnradio",id:"btnradio4",checked:"15"==h}),Object(f.jsx)("label",{className:"btn btn-outline-primary",onClick:Fe("15"),children:"15"})]})})}),Object(f.jsx)("tr",{children:Object(f.jsx)("td",{children:"Deck Timer"})}),Object(f.jsx)("tr",{children:Object(f.jsx)("td",{children:Object(f.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic radio toggle button group",children:[Object(f.jsx)("input",{type:"radio",className:"btn-check",name:"btnradio2",id:"btnradio1",checked:"0"==y}),Object(f.jsx)("label",{className:"btn btn-outline-primary",onClick:Te("1"),children:"Off"}),Object(f.jsx)("input",{type:"radio",className:"btn-check",name:"btnradio2",id:"btnradio2",checked:"5"==y}),Object(f.jsx)("label",{className:"btn btn-outline-primary",onClick:Te("5"),children:"5 Mins"}),Object(f.jsx)("input",{type:"radio",className:"btn-check",name:"btnradio2",id:"btnradio3",checked:"10"==y}),Object(f.jsx)("label",{className:"btn btn-outline-primary",onClick:Te("10"),children:"10 Mins"}),Object(f.jsx)("input",{type:"radio",className:"btn-check",name:"btnradio2",id:"btnradio4",checked:"15"==y}),Object(f.jsx)("label",{className:"btn btn-outline-primary",onClick:Te("15"),children:"15 Mins"}),Object(f.jsx)("input",{type:"radio",className:"btn-check",name:"btnradio2",id:"btnradio5",checked:"30"==y}),Object(f.jsx)("label",{className:"btn btn-outline-primary",onClick:Te("30"),children:"30 Mins"})]})})}),Object(f.jsx)("tr",{children:Object(f.jsx)("td",{children:"Randomize Cards"})}),Object(f.jsx)("tr",{children:Object(f.jsx)("td",{children:Object(f.jsx)(se.a,{checked:C,onlabel:"On",offlabel:"Off",onChange:function(e){S(e)}})})})]})]}),Object(f.jsxs)("table",{className:"table",children:[Object(f.jsx)("thead",{children:Object(f.jsx)("tr",{children:Object(f.jsx)("td",{children:"Card Options"})})}),Object(f.jsxs)("tbody",{children:[Object(f.jsx)("tr",{children:Object(f.jsxs)("td",{children:["Delay 1:",Object(f.jsx)(ie,{totalTimeCallback:function(e){ve(E(e))},defaultSettings:T})]})}),Object(f.jsx)("tr",{children:Object(f.jsxs)("td",{children:["Delay 2:",Object(f.jsx)(ie,{totalTimeCallback:function(e){ve(B(e))},defaultSettings:M})]})}),Object(f.jsx)("tr",{children:Object(f.jsxs)("td",{children:["Delay 3:",Object(f.jsx)(ie,{totalTimeCallback:function(e){ve(I(e))},defaultSettings:G})]})}),Object(f.jsx)("tr",{children:Object(f.jsxs)("td",{children:["Delay 4:",Object(f.jsx)(ie,{totalTimeCallback:function(e){ve(P(e))},defaultSettings:V})]})})]})]})]})},oe=(c(69),Object(F.d)({name:"myStudy",initialState:{cards:[],front:"",back:"",index:-1},reducers:{setCards:function(e,t){e.cards=t.payload},setFront:function(e,t){e.front=t.payload},setBack:function(e,t){e.back=t.payload},IncreaseIndex:function(e,t){e.index==e.cards.length-1?e.index=0:e.index=e.index+1}}})),ue=oe.actions,Oe=ue.IncreaseIndex,he=ue.setCards,xe=ue.setBack,me=ue.setFront,fe=oe.reducer,pe=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!0),r=Object(j.a)(s,2),i=r[0],d=r[1],l=Object(a.useState)(!1),b=Object(j.a)(l,2),o=b[0],u=b[1],O=Object(k.e)((function(e){return e.myDecks.selected})),h=Object(a.useState)(!1),x=Object(j.a)(h,2),m=x[0],p=x[1],y=Object(a.useState)(""),v=Object(j.a)(y,2),g=v[0],N=v[1],C=Object(a.useState)(""),S=Object(j.a)(C,2),D=S[0],F=S[1],T=Object(k.e)((function(e){return e.myStudy})),w=W(O.id),E=w.data,B=(w.error,w.isLoading),I=w.isSuccess,P=w.isError,L=Object(k.d)();Object(a.useEffect)((function(){N(T.front),F(T.back)}),[T.back]);var q=function(e){return function(){n(!1),d(!0),u(!1),L(me(T.cards[T.index].front)),L(xe(T.cards[T.index].back))}};return I&&E&&0==m&&(L(Oe("none")),L(he(E)),L(me(E[0].front)),L(xe(E[0].back)),p(!0)),Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:"flexbox",children:[Object(f.jsx)("div",{className:"box1"}),Object(f.jsx)("div",{className:"box2",children:Object(f.jsx)("div",{className:"topspace",children:I?Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:Object(f.jsx)("label",{className:"col-form-label col-form-label-sm",children:Object(f.jsx)("h3",{children:g})})}),Object(f.jsx)("div",{className:"buttonmargin",children:c&&Object(f.jsx)("label",{className:"col-form-label col-form-label-sm answerspace",children:D})}),Object(f.jsxs)("div",{className:"fake",children:[Object(f.jsx)("br",{}),Object(f.jsx)("br",{})]}),Object(f.jsx)("div",{className:"buttonmargin",children:i&&Object(f.jsx)("button",{className:"btn btn-primary buttonmargin",onClick:function(){n(!0),d(!1),u(!0),L(Oe("none"))},children:"Show Answer"})}),o&&Object(f.jsxs)("div",{className:"buttonmargin",children:[Object(f.jsx)("br",{})," ",Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic mixed styles example",children:[Object(f.jsx)("button",{type:"button",className:"btn btn-success",onClick:q(),children:"5 - Perfect"}),Object(f.jsx)("button",{type:"button",className:"btn btn-success",onClick:q(),children:"4 - Correct Response "}),Object(f.jsx)("button",{type:"button",className:"btn btn-success",onClick:q(),children:"3 - Correct Response with problems"}),Object(f.jsx)("button",{type:"button",className:"btn btn-warning",onClick:q(),children:"2 - Incorrect Response; correct easy to recall"}),Object(f.jsx)("button",{type:"button",className:"btn btn-warning",onClick:q(),children:"1 - Incorrect Response; correct one to remember"}),Object(f.jsx)("button",{type:"button",className:"btn btn-warning",onClick:q(),children:"0 - Incorrect Response; blank out"})]})]})]}):P?Object(f.jsx)("div",{children:"Sorry an Error has occured."}):B?Object(f.jsx)("div",{children:"Loading.."}):null})}),Object(f.jsx)("div",{className:"box1"})]})})},ye=(c(70),function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"flexbox",children:Object(f.jsx)("div",{className:"timebox",children:"Time: 10:00"})}),Object(f.jsx)("div",{className:"flexbox",children:Object(f.jsx)("div",{className:"topbox"})}),Object(f.jsx)("div",{className:"flexbox",children:Object(f.jsx)("div",{className:"middlebox",children:Object(f.jsx)(pe,{})})}),Object(f.jsx)("div",{className:"flexbox",children:Object(f.jsx)("div",{className:"bottombox"})})]})}),ke=function(e){return Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{exact:!0,path:"/",component:y}),Object(f.jsx)(l.a,{exact:!0,path:"/index",component:J}),Object(f.jsx)(l.a,{exact:!0,path:"/decks/:deckId",component:V}),Object(f.jsx)(l.a,{exact:!0,path:"/editdeck/:deckId",component:ce}),Object(f.jsx)(l.a,{exact:!0,path:"/settings/:deckId",component:be}),Object(f.jsx)(l.a,{exact:!0,path:"/study/:deckId",component:ye})]})},ve=c(26),ge=(c(71),function(e){return Object(f.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark static-top",children:Object(f.jsxs)("div",{className:"container-fluid",children:[Object(f.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(f.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(f.jsx)("span",{className:"navbar-toggler-icon"})}),Object(f.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"})]})})}),Ne=c(29),Ce=Object(F.a)({reducer:(n={myDecks:Q,myStudy:fe},Object(v.a)(n,x.reducerPath,x.reducer),Object(v.a)(n,N.reducerPath,N.reducer),Object(v.a)(n,K.reducerPath,K.reducer),Object(v.a)(n,de.reducerPath,de.reducer),n),middleware:function(e){return e().concat(x.middleware,N.middleware,K.middleware,de.middleware,Ne.a)}});var Se=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(u.a,{}),Object(f.jsx)(k.a,{store:Ce,children:Object(f.jsx)(ve.a,{children:Object(f.jsxs)(d.a,{children:[Object(f.jsx)(ge,{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)(ke,{})]})})})]})},De=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,79)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(Se,{})}),document.getElementById("root")),De()}},[[73,1,2]]]);
//# sourceMappingURL=main.b3c8a1fb.chunk.js.map