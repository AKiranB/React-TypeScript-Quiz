(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{79:function(e,t,c){},87:function(e,t,c){},90:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),o=c(24),a=c.n(o),i=(c(79),c(19)),s=c(20),l=c.n(s),u=c(29),j=c(10),b=c(15),d=function(){var e=Object(u.a)(l.a.mark((function e(t,c,n){var r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(t,"&category=").concat(n,"&difficulty=").concat(c,"&type=multiple"),e.next=3,fetch(r);case 3:return e.next=5,e.sent.json();case 5:return o=e.sent,e.abrupt("return",o.results.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{answers:(t=[].concat(Object(i.a)(e.incorrect_answers),[e.correct_answer]),Object(i.a)(t).sort((function(){return Math.random()-.5})))});var t})));case 7:case"end":return e.stop()}}),e)})));return function(t,c,n){return e.apply(this,arguments)}}(),x=c(39),h=c(41),O=function(e){var t={"&quot;":'"',"&#039;":"'","&lt;":"<","&gt;":">","&amp;":"&"},c=new RegExp(Object.keys(t).join("|"),"gi");return e.replace(c,(function(e){return t[e]}))},g=c(4),m=function(e){return Object(g.jsx)(x.c,{children:Object(g.jsx)(x.d,Object(b.a)({marginTop:"90px",direction:"column",alignItems:"center",border:"1px",width:["sm","md","lg","xl"],padding:"30px",boxShadow:"rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;",backgroundColor:"#1391ad"},e))})},p=function(e){var t=e.question,c=e.answer,n=e.callback,r=e.userAnswer,o=e.questionNumber,a=e.totalQuestions,i=e.isCorrect,s=e.score;return Object(g.jsxs)("div",{children:[Object(g.jsxs)(m,{children:[Object(g.jsxs)(x.h,{color:"black",fontSize:["sm","md","lg"],children:["Score : ",s,Object(g.jsx)("div",{}),"Question : ",o," / ",a]}),Object(g.jsxs)(x.f,{children:[Object(g.jsx)("hr",{}),O(t)]})]}),Object(g.jsx)(x.d,{mt:"50px",direction:"column",justifyContent:"center",alignContent:"center",children:c.map((function(e,t){return Object(g.jsx)("div",{children:Object(g.jsx)(h.a,{m:"10px",width:["sm","md","lg","xl"],fontSize:["sm","md","lg","xl"],colorScheme:i,disabled:r,value:e,onClick:n,children:O(e)},t)},t)}))})]})},f=c(44),w=c(23),v=c(38),S=function(e){var t=Object(w.b)().toggleColorMode,c=Object(w.c)("dark","light"),n=Object(w.c)(v.a,v.b);return Object(g.jsx)(h.b,Object(b.a)({size:"md",fontSize:"lg",variant:"ghost",color:"current",onClick:t,icon:Object(g.jsx)(n,{}),"aria-label":"Switch to ".concat(c," mode")},e))},y=c.p+"static/media/quiz.e03f2b79.png",C=c(42),k=c(43),N=[{categoryName:"General Knowledge",categoryNumber:"9"},{categoryName:"Books",categoryNumber:"10"},{categoryName:"Film",categoryNumber:"11"},{categoryName:"Music",categoryNumber:"12"},{categoryName:"Computer Science",categoryNumber:"18"}],z=function(e){var t=e.setDifficulty,c=e.handleDropdownChange,n=N.map((function(e,t){return Object(g.jsx)("option",{value:e.categoryNumber,children:e.categoryName},t)}));return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(m,{children:Object(g.jsxs)(x.h,{color:"black",fontSize:["sm","md","lg","xl"],children:[Object(g.jsxs)(x.c,{mb:"20px",children:["Difficulty",Object(g.jsx)(C.b,{fontSize:["sm","md","lg","xl"],onChange:function(e){return t(e)},children:Object(g.jsxs)(x.g,{ml:"15px",direction:"row",children:[Object(g.jsx)(C.a,{value:"easy",children:"Easy"}),Object(g.jsx)(C.a,{value:"medium",children:"Medium"}),Object(g.jsx)(C.a,{value:"hard",children:"Hard"})]})})]}),Object(g.jsxs)(x.c,{children:["Category",Object(g.jsx)(k.a,{width:"200px",onChange:c,ml:"25px",fontSize:["sm","md","lg"],placeholder:"Select option",children:n})]})]})})})},q=10;var D=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],r=t[1],o=Object(n.useState)([]),a=Object(j.a)(o,2),s=a[0],b=a[1],O=Object(n.useState)(0),m=Object(j.a)(O,2),w=m[0],v=m[1],C=Object(n.useState)(0),k=Object(j.a)(C,2),N=k[0],D=k[1],F=Object(n.useState)([]),B=Object(j.a)(F,2),H=B[0],L=B[1],M=Object(n.useState)(!0),A=Object(j.a)(M,2),Q=A[0],R=A[1],_=Object(n.useState)("blue"),T=Object(j.a)(_,2),E=T[0],I=T[1],J=Object(n.useState)(""),G=Object(j.a)(J,2),P=G[0],V=G[1],Y=Object(n.useState)(""),Z=Object(j.a)(Y,2),K=Z[0],U=Z[1],W=Object(n.useState)(""),X=Object(j.a)(W,2),$=X[0],ee=X[1],te=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),R(!1),e.next=4,d(q,P,K);case 4:t=e.sent,b(t),v(0),L([]),D(0),r(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(x.b,{textAlign:"center",fontSize:"xl",children:Object(g.jsxs)(x.e,{dir:"column",minH:"100vh",children:[Object(g.jsx)(S,{justifySelf:"flex-end"}),Object(g.jsx)(x.c,{children:Object(g.jsx)(f.a,{marginBottom:"150px",position:"fixed",boxSize:["l"],src:y})}),Object(g.jsxs)("div",{className:"App",children:[Q?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(z,{handleDropdownChange:function(e){U(e.target.value)},setDifficulty:V}),Object(g.jsx)(h.a,{m:"30px",colorScheme:"blue",className:"start",onClick:te,children:"Start"})]}):null,Object(g.jsxs)(x.d,{flexDir:"column",marginBottom:"20px",children:[c&&Object(g.jsx)("p",{children:"Loading Questions..."}),c||Q?null:Object(g.jsx)(p,{questionNumber:N+1,totalQuestions:q,question:s[N].question,answer:s[N].answers,userAnswer:H?H[N]:void 0,callback:function(e){if(!Q){var t=e.currentTarget.value,c=s[N].correct_answer===t;c?(v((function(e){return e+1})),I("green"),ee("Good Job!")):(I("red"),ee('sorry! the correct answer is "'.concat(s[N].correct_answer,'"'))),9===H.length&&(console.log("hello"),ee("You scored ".concat(w," out of 10, good job!")));var n={question:s[N].question,answer:t,correct:c,correctAnswer:s[N].correct_answer};L((function(e){return[].concat(Object(i.a)(e),[n])}))}},isCorrect:E,score:w}),Object(g.jsx)(x.c,{children:Object(g.jsx)(x.a,{borderRadius:"5px",fontSize:"lg",m:"20px",width:"auto",children:$})}),Q||c||H.length!==N+1||9===N?null:Object(g.jsx)(x.c,{children:Object(g.jsx)(h.a,{backgroundColor:"#1391ad",width:"200px",className:"next",onClick:function(){var e=N+1;e===q?(console.log("hello"),ee("You scored ".concat(w," out of 10, good job!"))):(I("blue"),D(e),ee(""))},children:"Next Question"})}),H.length!==q||Q?null:Object(g.jsx)(x.c,{children:Object(g.jsx)(h.a,{backgroundColor:"#1391ad",width:"200px",className:"next",onClick:function(){R(!0),ee("")},children:"Retry"})})]})]})]})})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,92)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),o(e),a(e)}))},B=(c(87),c(12)),H=c(2),L={heading:"Raleway",body:"Raleway"},M=Object(H.c)({sm:"45em",md:"55em",lg:"65em",xl:"75em"}),A=Object(B.b)({colors:{black:"#16161D"},fonts:L,breakpoints:M,textStyles:{h1:{fontSize:"35px",lineHeight:"110%",letterSpacing:"-2%",fonts:L},h2:{fontSize:"35px",lineHeight:"110%",letterSpacing:"-2%"}},icons:{logo:{path:Object(g.jsxs)("svg",{width:"3000",height:"3163",viewBox:"0 0 3000 3163",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(g.jsx)("rect",{width:"3000",height:"3162.95",fill:"none"}),Object(g.jsx)("path",{d:"M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z",fill:"currentColor"})]}),viewBox:"0 0 3000 3163"}}});c(88),c(89);a.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(B.a,{theme:A,children:Object(g.jsx)(D,{})})}),document.getElementById("root")),F()}},[[90,1,2]]]);
//# sourceMappingURL=main.6b8f6c44.chunk.js.map