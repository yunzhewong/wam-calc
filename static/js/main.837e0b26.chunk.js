(this["webpackJsonpwam-calc"]=this["webpackJsonpwam-calc"]||[]).push([[0],{14:function(e,t,r){},9:function(e,t,r){"use strict";r.r(t);var n=r(6),c=r(2),s=r(3),a=r(5),i=r(4),j=r(1),l=r.n(j),h=r(8),o=r.n(h),b=(r(14),r(0)),d=function(e){Object(a.a)(r,e);var t=Object(i.a)(r);function r(e){return Object(c.a)(this,r),t.call(this,e)}return Object(s.a)(r,[{key:"render",value:function(){var e=this.props.subjArray;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"You entered: "}),Object(b.jsxs)("table",{class:"center",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:" Year "},"year"),Object(b.jsx)("th",{children:" Semester "},"sem"),Object(b.jsx)("th",{children:" Subject Code "},"code"),Object(b.jsx)("th",{children:" Subject Title "},"title"),Object(b.jsx)("th",{children:" Final Mark "},"mark"),Object(b.jsx)("th",{children:" Credit Points "},"credit")]})}),Object(b.jsx)("tbody",{children:e.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.year},6*t),Object(b.jsx)("td",{children:e.sem},6*t+1),Object(b.jsx)("td",{children:e.code},6*t+2),Object(b.jsx)("td",{children:e.title},6*t+3),Object(b.jsx)("td",{children:e.mark},6*t+4),Object(b.jsx)("td",{children:e.credit},6*t+5)]})}))})]})]})}}]),r}(l.a.Component),u=function(e){Object(a.a)(r,e);var t=Object(i.a)(r);function r(e){return Object(c.a)(this,r),t.call(this,e)}return Object(s.a)(r,[{key:"render",value:function(){for(var e=this.props.subjArray,t=0,r=0,n=0;n<e.length;n++){var c=parseFloat(e[n].credit);t+=parseFloat(e[n].mark)*c,r+=c}var s="",a="n",i="";return(t/=r)>=80?(s="H1",i="First Class Honours"):t>=75?(s="H2A",i="Second Class Honours Division A"):t>=70?(s="H2B",i="Second Class Honours Division B"):t>=65?(s="H3",i="Third Class Honours"):t>=50?(a="",s="P",i="Pass"):(s="N",i="Fail"),Object(b.jsxs)("div",{children:[Object(b.jsxs)("h1",{children:["Your Weighted Average Mark is ",Math.round(100*t)/100]}),Object(b.jsxs)("h2",{children:["This counts as a",a," ",s,": ",i]})]})}}]),r}(l.a.Component),O=function(e){Object(a.a)(r,e);var t=Object(i.a)(r);function r(e){return Object(c.a)(this,r),t.call(this,e)}return Object(s.a)(r,[{key:"render",value:function(){var e=this.props.value.split("\n").map((function(e){var t=e.split("\t");return{year:t[0],sem:t[1],code:t[2],title:t[3],mark:t[5],credit:t[8]}}));e.length;return Object(b.jsxs)("div",{class:"center",children:[Object(b.jsx)(d,{subjArray:e}),Object(b.jsx)(u,{subjArray:e})]})}}]),r}(l.a.Component),x=function(e){Object(a.a)(r,e);var t=Object(i.a)(r);function r(e){var s;return Object(c.a)(this,r),(s=t.call(this,e)).state={value:"",refreshCount:0},s.handleChange=s.handleChange.bind(Object(n.a)(s)),s}return Object(s.a)(r,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){var e=this.state.value;return Object(b.jsxs)("div",{class:"center",children:[Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsx)("label",{children:"Copy-Paste your results page table into this text-box."}),Object(b.jsx)("br",{}),Object(b.jsx)("textarea",{value:this.state.value,onChange:this.handleChange,rows:"24",cols:"150"})]}),""!=e&&Object(b.jsx)(O,{value:e})]})}}]),r}(l.a.Component);o.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.837e0b26.chunk.js.map