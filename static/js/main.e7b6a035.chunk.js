(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={list:"Statistics_list__3t4ri",item:"Statistics_item__ueLqD"}},,,function(e,t,n){e.exports={section:"Section_section__1Kdh9",title:"Section_title__uJivh"}},,function(e,t,n){e.exports={container:"Container_container__2ovEo"}},function(e,t,n){e.exports={button:"FeedbackOptions_button__3GZtR"}},,function(e,t,n){e.exports={message:"Notification_message__CE2tX"}},,,,,,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(6),i=n.n(s),r=(n(15),n(16),n(3)),o=n(7),l=n.n(o),u=n(0);var b=function(e){var t=e.children;return Object(u.jsx)("div",{className:l.a.container,children:t})},d=n(2),j=n.n(d);var h=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,s=e.positivePercentage;return Object(u.jsxs)("ul",{className:j.a.list,children:[Object(u.jsxs)("li",{className:j.a.item,children:["Good: ",t]}),Object(u.jsxs)("li",{className:j.a.item,children:["Neutral: ",n]}),Object(u.jsxs)("li",{className:j.a.item,children:["Bad: ",a]}),Object(u.jsxs)("li",{className:j.a.item,children:["Total: ",c]}),Object(u.jsxs)("li",{className:j.a.item,children:["Positive feedback: ",s,"%"]})]})},f=n(5),m=n.n(f);var O=function(e){var t=e.title,n=e.children;return Object(u.jsxs)("section",{className:m.a.section,children:[Object(u.jsx)("h2",{className:m.a.title,children:t}),n]})},x=n(8),v=n.n(x);var _=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(u.jsx)("button",{type:"button",className:v.a.button,onClick:function(){return n(e)},children:e},e)}))},p=n(9),g=n.n(p),k=n(10),N=n.n(k);function S(e){var t=e.message;return Object(u.jsx)("p",{className:N.a.message,children:t})}S.prototype={message:g.a.string.isrquired};var w=S;var P=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),i=Object(r.a)(s,2),o=i[0],l=i[1],d=Object(a.useState)(0),j=Object(r.a)(d,2),f=j[0],m=j[1],x=function(){return n+o+f};return Object(u.jsxs)(b,{children:[Object(u.jsx)(O,{title:"Please leave feedback",children:Object(u.jsx)(_,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e){case"good":c((function(e){return e+1}));break;case"neutral":l((function(e){return e+1}));break;case"bad":m((function(e){return e+1}));break;default:return}}})}),Object(u.jsx)(O,{title:"Statistics",children:x()?Object(u.jsx)(h,{good:n,neutral:o,bad:f,total:x(),positivePercentage:Math.round(n/x()*100)||0}):Object(u.jsx)(w,{message:"No feedback given"})})]})};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(P,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.e7b6a035.chunk.js.map