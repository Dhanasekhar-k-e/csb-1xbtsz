(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{34:function(e,t,r){},40:function(e,t,r){"use strict";r.r(t);var n=r(9),a=r.n(n),i=r(20),s=(r(34),r(5)),c=r(6),o=r(26),u=r(25),d=r(24),j=r(2),h={method:"get",url:"https://api.github.com/search/users",params:{q:""}},l=function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).getData=function(e){n.setState({isLoading:!0,error:!1}),h.params.q=e,console.log(h),Object(d.a)(h).then((function(e){return n.setState({data:e.data.items,isLoading:!1,error:!1})})).catch((function(e){n.setState({error:!0,errorMessage:e,isLoading:!1})}))},n.state={query:"",data:[],isLoading:!0,error:!1,errorMessage:""},n}return Object(c.a)(r,[{key:"componentDidMount",value:function(){this.getData("dhanasekhar")}},{key:"render",value:function(){var e=this,t=this.state,r=t.isLoading,n=t.data,a=t.query,i=t.error,s=t.errorMessage;return console.log(s),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{value:a,placeholder:"search query",onChange:function(t){return e.setState({query:t.target.value})}}),Object(j.jsx)("button",{onClick:function(){return e.getData(a)},children:" SEARCH "}),r&&Object(j.jsx)("div",{children:" Loading ... "}),!r&&i&&Object(j.jsx)("div",{children:"Something went wrong"}),Object(j.jsx)("div",{children:!r&&!i&&n&&n.map((function(e){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:e.avatar_url,style:{width:"100px",borderRadius:"50px"},alt:e.login}),Object(j.jsx)("p",{children:e.login})]})},e.id)}))})]})}}]),r}(a.a.Component);function b(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"This is a react app using axios to get user names from github"}),Object(j.jsx)(l,{})]})}var g=document.getElementById("root");Object(i.createRoot)(g).render(Object(j.jsx)(n.StrictMode,{children:Object(j.jsx)(b,{})}))}},[[40,1,2]]]);
//# sourceMappingURL=main.79c51ee2.chunk.js.map