(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["movie"],{"01df":function(e,t,n){},"13b5":function(e,t,n){"use strict";n("31f1")},"25f0":function(e,t,n){"use strict";var r=n("e330"),o=n("5e77").PROPER,c=n("6eeb"),a=n("825a"),i=n("3a9b"),s=n("577e"),u=n("d039"),m=n("ad6d"),f="toString",l=RegExp.prototype,b=l[f],d=r(m),v=u((function(){return"/a/b"!=b.call({source:"a",flags:"b"})})),p=o&&b.name!=f;(v||p)&&c(RegExp.prototype,f,(function(){var e=a(this),t=s(e.source),n=e.flags,r=s(void 0===n&&i(l,e)&&!("flags"in l)?d(e):n);return"/"+t+"/"+r}),{unsafe:!0})},2909:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){if(Array.isArray(e))return r(e)}n.d(t,"a",(function(){return s}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function c(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n("fb6a"),n("b0c0");function a(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e){return o(e)||c(e)||a(e)||i()}},"31f1":function(e,t,n){},"345d":function(e,t,n){"use strict";n("ac64")},"408a":function(e,t,n){var r=n("e330");e.exports=r(1..valueOf)},"498a":function(e,t,n){"use strict";var r=n("23e7"),o=n("58a8").trim,c=n("c8d2");r({target:"String",proto:!0,forced:c("trim")},{trim:function(){return o(this)}})},"4d63":function(e,t,n){var r=n("83ab"),o=n("da84"),c=n("e330"),a=n("94ca"),i=n("7156"),s=n("9112"),u=n("9bf2").f,m=n("241c").f,f=n("3a9b"),l=n("44e7"),b=n("577e"),d=n("ad6d"),v=n("9f7f"),p=n("6eeb"),O=n("d039"),j=n("1a2d"),g=n("69f3").enforce,h=n("2626"),y=n("b622"),w=n("fce3"),x=n("107c"),C=y("match"),I=o.RegExp,E=I.prototype,N=o.SyntaxError,S=c(d),A=c(E.exec),R=c("".charAt),k=c("".replace),B=c("".indexOf),_=c("".slice),M=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,z=/a/g,T=/a/g,Y=new I(z)!==z,P=v.UNSUPPORTED_Y,D=r&&(!Y||P||w||x||O((function(){return T[C]=!1,I(z)!=z||I(T)==T||"/a/i"!=I(z,"i")}))),U=function(e){for(var t,n=e.length,r=0,o="",c=!1;r<=n;r++)t=R(e,r),"\\"!==t?c||"."!==t?("["===t?c=!0:"]"===t&&(c=!1),o+=t):o+="[\\s\\S]":o+=t+R(e,++r);return o},$=function(e){for(var t,n=e.length,r=0,o="",c=[],a={},i=!1,s=!1,u=0,m="";r<=n;r++){if(t=R(e,r),"\\"===t)t+=R(e,++r);else if("]"===t)i=!1;else if(!i)switch(!0){case"["===t:i=!0;break;case"("===t:A(M,_(e,r+1))&&(r+=2,s=!0),o+=t,u++;continue;case">"===t&&s:if(""===m||j(a,m))throw new N("Invalid capture group name");a[m]=!0,c[c.length]=[m,u],s=!1,m="";continue}s?m+=t:o+=t}return[o,c]};if(a("RegExp",D)){for(var F=function(e,t){var n,r,o,c,a,u,m=f(E,this),d=l(e),v=void 0===t,p=[],O=e;if(!m&&d&&v&&e.constructor===F)return e;if((d||f(E,e))&&(e=e.source,v&&(t="flags"in O?O.flags:S(O))),e=void 0===e?"":b(e),t=void 0===t?"":b(t),O=e,w&&"dotAll"in z&&(r=!!t&&B(t,"s")>-1,r&&(t=k(t,/s/g,""))),n=t,P&&"sticky"in z&&(o=!!t&&B(t,"y")>-1,o&&(t=k(t,/y/g,""))),x&&(c=$(e),e=c[0],p=c[1]),a=i(I(e,t),m?this:E,F),(r||o||p.length)&&(u=g(a),r&&(u.dotAll=!0,u.raw=F(U(e),n)),o&&(u.sticky=!0),p.length&&(u.groups=p)),e!==O)try{s(a,"source",""===O?"(?:)":O)}catch(j){}return a},L=function(e){e in F||u(F,e,{configurable:!0,get:function(){return I[e]},set:function(t){I[e]=t}})},V=m(I),G=0;V.length>G;)L(V[G++]);E.constructor=F,F.prototype=E,p(o,"RegExp",F)}h("RegExp")},"4df4":function(e,t,n){"use strict";var r=n("da84"),o=n("0366"),c=n("c65b"),a=n("7b0b"),i=n("9bdd"),s=n("e95a"),u=n("68ee"),m=n("07fa"),f=n("8418"),l=n("9a1f"),b=n("35a1"),d=r.Array;e.exports=function(e){var t=a(e),n=u(this),r=arguments.length,v=r>1?arguments[1]:void 0,p=void 0!==v;p&&(v=o(v,r>2?arguments[2]:void 0));var O,j,g,h,y,w,x=b(t),C=0;if(!x||this==d&&s(x))for(O=m(t),j=n?new this(O):d(O);O>C;C++)w=p?v(t[C],C):t[C],f(j,C,w);else for(h=l(t,x),y=h.next,j=n?new this:[];!(g=c(y,h)).done;C++)w=p?i(h,v,[g.value,C],!0):g.value,f(j,C,w);return j.length=C,j}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("e330"),o=n("1d80"),c=n("577e"),a=n("5899"),i=r("".replace),s="["+a+"]",u=RegExp("^"+s+s+"*"),m=RegExp(s+s+"*$"),f=function(e){return function(t){var n=c(o(t));return 1&e&&(n=i(n,u,"")),2&e&&(n=i(n,m,"")),n}};e.exports={start:f(1),end:f(2),trim:f(3)}},7156:function(e,t,n){var r=n("1626"),o=n("861d"),c=n("d2bb");e.exports=function(e,t,n){var a,i;return c&&r(a=t.constructor)&&a!==n&&o(i=a.prototype)&&i!==n.prototype&&c(e,i),e}},"9bdd":function(e,t,n){var r=n("825a"),o=n("2a62");e.exports=function(e,t,n,c){try{return c?t(r(n)[0],n[1]):t(n)}catch(a){o(e,"throw",a)}}},a630:function(e,t,n){var r=n("23e7"),o=n("4df4"),c=n("1c7e"),a=!c((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:a},{from:o})},a9e3:function(e,t,n){"use strict";var r=n("83ab"),o=n("da84"),c=n("e330"),a=n("94ca"),i=n("6eeb"),s=n("1a2d"),u=n("7156"),m=n("3a9b"),f=n("d9b5"),l=n("c04e"),b=n("d039"),d=n("241c").f,v=n("06cf").f,p=n("9bf2").f,O=n("408a"),j=n("58a8").trim,g="Number",h=o[g],y=h.prototype,w=o.TypeError,x=c("".slice),C=c("".charCodeAt),I=function(e){var t=l(e,"number");return"bigint"==typeof t?t:E(t)},E=function(e){var t,n,r,o,c,a,i,s,u=l(e,"number");if(f(u))throw w("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=j(u),t=C(u,0),43===t||45===t){if(n=C(u,2),88===n||120===n)return NaN}else if(48===t){switch(C(u,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+u}for(c=x(u,2),a=c.length,i=0;i<a;i++)if(s=C(c,i),s<48||s>o)return NaN;return parseInt(c,r)}return+u};if(a(g,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var N,S=function(e){var t=arguments.length<1?0:h(I(e)),n=this;return m(y,n)&&b((function(){O(n)}))?u(Object(t),n,S):t},A=r?d(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;A.length>R;R++)s(h,N=A[R])&&!s(S,N)&&p(S,N,v(h,N));S.prototype=y,y.constructor=S,i(o,g,S)}},ac64:function(e,t,n){},b0c0:function(e,t,n){var r=n("83ab"),o=n("5e77").EXISTS,c=n("e330"),a=n("9bf2").f,i=Function.prototype,s=c(i.toString),u=/^\s*function ([^ (]*)/,m=c(u.exec),f="name";r&&!o&&a(i,f,{configurable:!0,get:function(){try{return m(u,s(this))[1]}catch(e){return""}}})},b6fd:function(e,t,n){"use strict";n("bf3a")},bf3a:function(e,t,n){},c81c:function(e,t,n){"use strict";n("01df")},c8d2:function(e,t,n){var r=n("5e77").PROPER,o=n("d039"),c=n("5899"),a="​᠎";e.exports=function(e){return o((function(){return!!c[e]()||a[e]()!==a||r&&c[e].name!==e}))}},d28b:function(e,t,n){var r=n("746f");r("iterator")},e01a:function(e,t,n){"use strict";var r=n("23e7"),o=n("83ab"),c=n("da84"),a=n("e330"),i=n("1a2d"),s=n("1626"),u=n("3a9b"),m=n("577e"),f=n("9bf2").f,l=n("e893"),b=c.Symbol,d=b&&b.prototype;if(o&&s(b)&&(!("description"in d)||void 0!==b().description)){var v={},p=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:m(arguments[0]),t=u(d,this)?new b(e):void 0===e?b():b(e);return""===e&&(v[t]=!0),t};l(p,b),p.prototype=d,d.constructor=p;var O="Symbol(test)"==String(b("test")),j=a(d.toString),g=a(d.valueOf),h=/^Symbol\((.*)\)[^)]+$/,y=a("".replace),w=a("".slice);f(d,"description",{configurable:!0,get:function(){var e=g(this),t=j(e);if(i(v,e))return"";var n=O?w(t,7,-1):y(t,h,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},e6ee:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o=function(e){return Object(r["u"])("data-v-fe15f9e6"),e=e(),Object(r["s"])(),e},c={class:"movie-details"},a={class:"route"},i=o((function(){return Object(r["g"])("span",null,"Movies",-1)})),s={class:"flex row"},u={class:"subtitle"},m={class:"flex flex-info info"},f={class:"details"},l=Object(r["h"])(" | "),b={class:"details"},d=Object(r["h"])(" | "),v={class:"details"},p=Object(r["h"])(" | "),O={class:"details"},j={class:"youtube"},g=["src"],h={class:"cast-crew grid"},y={class:"director"},w=o((function(){return Object(r["g"])("h2",null,"Directed By:",-1)})),x={class:"cast"},C=o((function(){return Object(r["g"])("h2",null,"Actors:",-1)})),I={class:"actors grid"},E={class:"comments"},N=o((function(){return Object(r["g"])("h1",null,"Comments",-1)})),S={key:0,class:"error"},A=o((function(){return Object(r["g"])("label",null,"ERROR: ",-1)}));function R(e,t,n,o,R,k){var B=this,_=Object(r["z"])("router-link"),M=Object(r["z"])("Button"),z=Object(r["z"])("ListItem"),T=Object(r["z"])("CommentSection");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("div",c,[Object(r["g"])("div",a,[Object(r["g"])("h3",null,[Object(r["i"])(_,{to:"/movies"},{default:Object(r["I"])((function(){return[i]})),_:1}),Object(r["h"])("  / "+Object(r["B"])(R.movie.title),1)])]),Object(r["g"])("div",s,[Object(r["g"])("h1",null,[Object(r["h"])(Object(r["B"])(R.movie.title)+" ",1),Object(r["g"])("span",u,"("+Object(r["B"])(R.moment(R.movie.releaseDate).format("YYYY"))+")",1)]),Object(r["i"])(M,{title:"Edit",onBtnClick:t[0]||(t[0]=function(e){return k.editMovie(B.id)})})]),Object(r["g"])("div",m,[Object(r["g"])("span",f,Object(r["B"])(R.movie.rating.rating),1),l,Object(r["g"])("span",b,Object(r["B"])(R.movie.movieLength),1),d,Object(r["g"])("span",v,Object(r["B"])(R.movie.genre.genre),1),p,Object(r["g"])("span",O,Object(r["B"])(R.moment(R.movie.releaseDate).format("D MMMM YYYY")),1)]),Object(r["g"])("div",j,[Object(r["g"])("iframe",{width:"640",height:"360",src:R.videoEmbed,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,g)]),Object(r["g"])("div",h,[Object(r["g"])("div",y,[w,Object(r["i"])(_,{to:{name:"DirectorDetails",params:{id:R.movie.director.id}}},{default:Object(r["I"])((function(){return[Object(r["i"])(z,null,{default:Object(r["I"])((function(){return[Object(r["h"])(Object(r["B"])(R.movie.director.firstName)+" "+Object(r["B"])(R.movie.director.lastName),1)]})),_:1})]})),_:1},8,["to"])]),Object(r["g"])("aside",x,[C,Object(r["g"])("div",I,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(R.movie.actors,(function(e){return Object(r["r"])(),Object(r["f"])("div",{key:e.id,class:"actor"},[Object(r["i"])(_,{to:{name:"ActorDetails",params:{id:e.id}}},{default:Object(r["I"])((function(){return[Object(r["i"])(z,null,{default:Object(r["I"])((function(){return[Object(r["h"])(Object(r["B"])(e.firstName)+" "+Object(r["B"])(e.lastName),1)]})),_:2},1024)]})),_:2},1032,["to"])])})),128))])])])]),Object(r["g"])("div",E,[N,e.areErrors?(Object(r["r"])(),Object(r["f"])("div",S,[A,Object(r["g"])("h4",null,Object(r["B"])(e.error),1)])):Object(r["e"])("",!0),Object(r["i"])(T,{comments:R.movie.comments,parentId:R.movie.id,onAddComment:k.updateComments},null,8,["comments","parentId","onAddComment"])])],64)}var k=n("2909"),B=n("1da1"),_=(n("96cf"),n("d3b7"),n("99af"),n("4d63"),n("ac1f"),n("25f0"),n("c1df")),M=n.n(_),z=n("2a7d"),T=n("af40");function Y(e,t,n,o,c,a){var i=Object(r["z"])("NewComment"),s=Object(r["z"])("Comments");return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["i"])(i,{onSubmit:a.submit},null,8,["onSubmit"]),Object(r["i"])(s,{comments:n.comments},null,8,["comments"])])}n("a9e3");var P=function(e){return Object(r["u"])("data-v-48502992"),e=e(),Object(r["s"])(),e},D={key:0,class:"error"},U=P((function(){return Object(r["g"])("label",null,"Please correct the error:",-1)})),$={key:1,class:"new-comment"};function F(e,t,n,o,c,a){var i=Object(r["z"])("SmallButton"),s=Object(r["z"])("Card");return Object(r["r"])(),Object(r["d"])(s,null,{default:Object(r["I"])((function(){return[c.errors.length?(Object(r["r"])(),Object(r["f"])("div",D,[U,Object(r["g"])("ul",null,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(c.errors,(function(e){return Object(r["r"])(),Object(r["f"])("li",{key:e},Object(r["B"])(e),1)})),128))])])):Object(r["e"])("",!0),Object(r["i"])(i,{title:c.showNewComment?"Cancel":"Add Comment",onBtnClick:a.toggleNewComment},null,8,["title","onBtnClick"]),c.showNewComment?(Object(r["r"])(),Object(r["f"])("div",$,[Object(r["J"])(Object(r["g"])("input",{type:"text",class:"username",placeholder:"Name","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.username=e})},null,512),[[r["G"],c.username]]),Object(r["J"])(Object(r["g"])("textarea",{name:"comment",class:"textarea",id:"comment",rows:"1",placeholder:"Comment",onInput:t[1]||(t[1]=function(){return a.autoResize&&a.autoResize.apply(a,arguments)}),"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.comment=e})},null,544),[[r["G"],c.comment]]),Object(r["i"])(i,{title:"Submit",onBtnClick:a.submit},null,8,["onBtnClick"])])):Object(r["e"])("",!0)]})),_:1})}n("498a");var L=n("4aa9"),V={class:"card"};function G(e,t,n,o,c,a){return Object(r["r"])(),Object(r["f"])("div",V,[Object(r["y"])(e.$slots,"default",{},void 0,!0)])}var J={},X=(n("b6fd"),n("6b0d")),q=n.n(X);const H=q()(J,[["render",G],["__scopeId","data-v-6106b792"]]);var K=H,Q={name:"NewComment",components:{SmallButton:L["a"],Card:K},data:function(){return{errors:[],comment:"",username:"",showNewComment:!1}},methods:{toggleNewComment:function(){this.showNewComment=!this.showNewComment},autoResize:function(e){e.target.style.height="auto",e.target.style.height="".concat(e.target.scrollHeight,"px")},submit:function(){this.errors=[],this.username.trim()&&this.comment.trim()?(this.$emit("submit",{username:this.username,comment:this.comment}),this.comment="",this.username="",this.showNewComment=!this.showNewComment):this.errors.push("Name and Comment are required to submit")}},emits:["submit"]};n("13b5");const W=q()(Q,[["render",F],["__scopeId","data-v-48502992"]]);var Z=W;function ee(e,t,n,o,c,a){var i=Object(r["z"])("Comment");return Object(r["r"])(),Object(r["f"])("div",null,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(n.comments,(function(e){return Object(r["r"])(),Object(r["d"])(i,{key:e.id,comment:e},null,8,["comment"])})),128))])}var te={class:"user"},ne={class:"comment"};function re(e,t,n,o,c,a){var i=Object(r["z"])("Card");return Object(r["r"])(),Object(r["d"])(i,null,{default:Object(r["I"])((function(){return[Object(r["g"])("h2",te,Object(r["B"])(n.comment.username),1),Object(r["g"])("p",ne,Object(r["B"])(n.comment.comment),1)]})),_:1})}var oe={name:"Comment",components:{Card:K},props:{comment:Object}};n("c81c");const ce=q()(oe,[["render",re],["__scopeId","data-v-287beb08"]]);var ae=ce,ie={name:"Comments",components:{Comment:ae},props:{comments:Array}};const se=q()(ie,[["render",ee]]);var ue=se,me={name:"CommentSection",components:{NewComment:Z,Comments:ue},props:{comments:Array,parentId:Number},data:function(){return{error:"",areErrors:!1}},methods:{submit:function(e){e.parentId=this.parentId,this.$emit("addComment",e)}},emits:["addComment"],created:function(){return Object(B["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}};const fe=q()(me,[["render",Y]]);var le=fe,be={components:{Button:z["a"],ListItem:T["a"],CommentSection:le},props:["id"],data:function(){return{movie:{},moment:M.a,videoEmbed:"https://www.youtube.com/embed/"}},methods:{updateComments:function(e){var t=this;return Object(B["a"])(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.movieId=t.movie.id,n.next=3,fetch("api/comments/movies",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)});case 3:if(r=n.sent,t.areErrors=t.handleErrors(r),t.areErrors){n.next=12;break}return n.next=8,r.json();case 8:o=n.sent,t.movie.comments=[o].concat(Object(k["a"])(t.movie.comments)),n.next=14;break;case 12:c=r.json(),t.error=c.message;case 14:case"end":return n.stop()}}),n)})))()},editMovie:function(e){this.$router.push({name:"EditMovie",params:{id:e}})},fetchMovie:function(e){return Object(B["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("api/movies/".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))()},handleErrors:function(e){return!e.ok}},created:function(){var e=this;return Object(B["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchMovie(e.id);case 2:e.movie=t.sent,n=new RegExp(".*?=s*(.*)"),r=n.exec(e.movie.trailerUrl),e.videoEmbed+=r[1];case 6:case"end":return t.stop()}}),t)})))()}};n("345d");const de=q()(be,[["render",R],["__scopeId","data-v-fe15f9e6"]]);t["default"]=de},fb6a:function(e,t,n){"use strict";var r=n("23e7"),o=n("da84"),c=n("e8b5"),a=n("68ee"),i=n("861d"),s=n("23cb"),u=n("07fa"),m=n("fc6a"),f=n("8418"),l=n("b622"),b=n("1dde"),d=n("f36a"),v=b("slice"),p=l("species"),O=o.Array,j=Math.max;r({target:"Array",proto:!0,forced:!v},{slice:function(e,t){var n,r,o,l=m(this),b=u(l),v=s(e,b),g=s(void 0===t?b:t,b);if(c(l)&&(n=l.constructor,a(n)&&(n===O||c(n.prototype))?n=void 0:i(n)&&(n=n[p],null===n&&(n=void 0)),n===O||void 0===n))return d(l,v,g);for(r=new(void 0===n?O:n)(j(g-v,0)),o=0;v<g;v++,o++)v in l&&f(r,o,l[v]);return r.length=o,r}})}}]);
//# sourceMappingURL=movie.869a7273.js.map