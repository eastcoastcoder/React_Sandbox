!function(e){function t(t){for(var r,i,u=t[0],c=t[1],l=t[2],p=0,s=[];p<u.length;p++)i=u[p],o[i]&&s.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(t);s.length;)s.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={1:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=c;a.push([483,0]),n()}({123:function(e,t){e.exports={red:"_3VVpEJELUq1qlEGzAeLEsP",bold:"uRU0BwiKqBTokRuFo3M-D",Button:"_2a5mkr4aimUG87toAqTUHB",button:"_2a5mkr4aimUG87toAqTUHB",Red:"_3VVpEJELUq1qlEGzAeLEsP"}},271:function(e,t,n){"use strict";e.exports=n(484)},272:function(e,t){e.exports={Person:"_37wpphkRHeJS7mVddEDyK4",person:"_37wpphkRHeJS7mVddEDyK4"}},273:function(e,t){e.exports={App:"_2NQx7Tpg2cYBAFDWpWL5HZ",app:"_2NQx7Tpg2cYBAFDWpWL5HZ"}},483:function(e,t,n){e.exports=n(489)},484:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&"object"==typeof e&&"default"in e?e.default:e}(n(0)),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},i=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return r.Children.only(this.props.children)},t}(r.Component);t.AppContainer=i,t.hot=function(){return function(e){return e}},t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){},t.cold=function(e){return e}},485:function(e,t,n){"use strict";var r=n(486);function o(){}e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},486:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},487:function(e,t){},489:function(e,t,n){"use strict";n.r(t);var r=n(271),o=n(0),a=n.n(o),i=n(47),u=n.n(i),c=n(80),l=n.n(c),f=n(272),p=n.n(f),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var h=function(e,t){var n=function(n){function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,o.Component),y(r,[{key:"render",value:function(){return a.a.createElement("div",{className:t},a.a.createElement(e,s({ref:this.props.forwardedRef},this.props)))}}]),r}();return a.a.forwardRef(function(e,t){return a.a.createElement(n,s({},e,{forwardedRef:t}))})},b=function(e){return e.children},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var v=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return n=r=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.inputElement=a.a.createRef(),m(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),d(t,[{key:"componentDidMount",value:function(){0===this.props.position&&this.inputElement.current.focus()}},{key:"focus",value:function(){this.inputElement.current.focus()}},{key:"render",value:function(){var e=this.props,t=e.name,n=e.age,r=e.click,o=e.changed;return a.a.createElement(b,null,a.a.createElement(A.Consumer,null,function(e){return e&&a.a.createElement("p",null,"I'm authenticated.")}),a.a.createElement("p",{onClick:r},"I'm ",t,", my age is ",n,"."),a.a.createElement("input",{ref:this.inputElement,type:"text",onChange:o,value:t}))}}]),t}();v.propTypes={click:l.a.func,name:l.a.string,age:l.a.number,changed:l.a.func};var g=h(v,p.a.Person),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var w=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return n=r=_(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.lastPersonRef=a.a.createRef(),_(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["PureComponent"]),O(t,[{key:"componentDidMount",value:function(){this.lastPersonRef.current.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.persons,r=t.click,o=t.changed;return n.map(function(t,n){return a.a.createElement(g,{click:function(){return r(n)},name:t.name,position:n,age:t.age,key:t.id,ref:e.lastPersonRef,changed:function(e){return o(e,t.id)}})})}}]),t}(),E=n(123),P=n.n(E),j=function(e){var t=e.persons,n=e.togglePeopleHandler,r=e.visible,o=e.login,i=[],u=P.a.Button;return r&&(u=[P.a.Button,P.a.Red].join(" ")),t.length<=2&&i.push("red"),t.length<=1&&i.push("bold"),a.a.createElement(b,null,a.a.createElement("h1",null,"Hi, I'm a React App"),a.a.createElement("p",{className:i.join(" ")},"This is really working"),a.a.createElement("button",{className:u,onClick:n},"Toggle People"),a.a.createElement("button",{onClick:o},"Log in"))},k=n(273),C=n.n(k),T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function R(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function S(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var A=a.a.createContext(!1),H=h(function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=S(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.state={persons:[{id:1,name:"Max",age:12},{id:2,name:"Bill",age:22},{id:3,name:"Dave",age:44}],visible:!1,authenticated:!1,toggleClicked:0},r.togglePeopleHandler=function(){var e=r.state.visible;r.setState(function(t,n){return{visible:!e,toggleClicked:t.toggleClicked+1}})},r.nameChangeHandler=function(e,t){var n=r.state.persons.findIndex(function(e){return e.id===t}),o=T({},r.state.persons[n]);o.name=e.target.value;var a=[].concat(R(r.state.persons));a[n]=o,r.setState({persons:a})},r.deletePersonHandler=function(e){var t=[].concat(R(r.state.persons));t.splice(e,1),r.setState({persons:t})},r.loginHandler=function(){r.setState({authenticated:!0})},S(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["PureComponent"]),x(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.persons,r=t.visible,o=t.authenticated;return a.a.createElement(b,null,a.a.createElement("button",{onClick:function(){return e.setState({visible:!0})}},"Show Persons"),a.a.createElement(j,{visible:r,login:this.loginHandler,togglePeopleHandler:this.togglePeopleHandler,persons:n}),a.a.createElement(A.Provider,{value:o},r&&a.a.createElement(w,{persons:n,changed:this.nameChangeHandler,click:this.deletePersonHandler})))}}]),t}(),C.a.App);n(487);!function(e){u.a.render(a.a.createElement(r.AppContainer,null,a.a.createElement(e,null)),document.getElementById("root"))}(H)},80:function(e,t,n){e.exports=n(485)()}});
//# sourceMappingURL=app.4975f4f0bafdeb49b431.js.map