!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require(void 0)):"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.FadeImage=e(require(void 0)):t.FadeImage=e(t.React)}(this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=5)}([function(t,e,n){"use strict";function r(t){var e=t.getBoundingClientRect(),n=document.documentElement;return e.top>=0&&e.top<=(window.innerHeight||n.clientHeight)&&e.left>=0&&e.right<=(window.innerWidth||n.clientWidth)}e.a=r},function(t,e){t.exports={container:"fade-image_container",center:"fade-image_center",fadeImg:"fade-image_fadeImg",loaded:"fade-image_loaded"}},function(t,e,n){(function(e){function n(t,e,n){function r(e){var n=m,r=v;return m=v=void 0,E=e,g=t.apply(r,n)}function i(t){return E=t,b=setTimeout(l,e),_?r(t):g}function a(t){var n=t-w,r=t-E,o=e-n;return T?j(o,y-r):o}function c(t){var n=t-w,r=t-E;return void 0===w||n>=e||n<0||T&&r>=y}function l(){var t=x();if(c(t))return f(t);b=setTimeout(l,a(t))}function f(t){return b=void 0,I&&m?r(t):(m=v=void 0,g)}function p(){void 0!==b&&clearTimeout(b),E=0,m=w=v=b=void 0}function d(){return void 0===b?g:f(x())}function h(){var t=x(),n=c(t);if(m=arguments,v=this,w=t,n){if(void 0===b)return i(w);if(T)return b=setTimeout(l,e),r(w)}return void 0===b&&(b=setTimeout(l,e)),g}var m,v,y,g,b,w,E=0,_=!1,T=!1,I=!0;if("function"!=typeof t)throw new TypeError(s);return e=u(e)||0,o(n)&&(_=!!n.leading,T="maxWait"in n,y=T?O(u(n.maxWait)||0,e):y,I="trailing"in n?!!n.trailing:I),h.cancel=p,h.flush=d,h}function r(t,e,r){var i=!0,a=!0;if("function"!=typeof t)throw new TypeError(s);return o(r)&&(i="leading"in r?!!r.leading:i,a="trailing"in r?!!r.trailing:a),n(t,e,{leading:i,maxWait:e,trailing:a})}function o(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function i(t){return!!t&&"object"==typeof t}function a(t){return"symbol"==typeof t||i(t)&&w.call(t)==l}function u(t){if("number"==typeof t)return t;if(a(t))return c;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var n=d.test(t);return n||h.test(t)?m(t.slice(2),n?2:8):p.test(t)?c:+t}var s="Expected a function",c=NaN,l="[object Symbol]",f=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,h=/^0o[0-7]+$/i,m=parseInt,v="object"==typeof e&&e&&e.Object===Object&&e,y="object"==typeof self&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),b=Object.prototype,w=b.toString,O=Math.max,j=Math.min,x=function(){return g.Date.now()};t.exports=r}).call(e,n(10))},function(t,e,n){t.exports=n(8)()},function(e,n){e.exports=t},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),u=n.n(a),s=n(3),c=n.n(s),l=n(2),f=n.n(l),p=n(0),d=n(1),h=n.n(d),m=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},y=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),g=function(t){function e(t){r(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.onImgLoad=n.onImgLoad.bind(n),n.onImgError=n.onImgError.bind(n),n.scrollHandler=f()(n.scrollHandler.bind(n),200,{leading:!0}),n.state={src:n.props.src,isLoaded:!1},n}return i(e,t),y(e,[{key:"onImgLoad",value:function(){this.setState(v({},this.state,{isLoaded:!0})),window.removeEventListener("scroll",this.scrollHandler)}},{key:"onImgError",value:function(){this.setState(v({},this.state,{isLoaded:!1})),window.removeEventListener("scroll",this.scrollHandler)}},{key:"componentDidMount",value:function(){this.scrollHandler(),window.addEventListener("scroll",this.scrollHandler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollHandler)}},{key:"scrollHandler",value:function(){n.i(p.a)(this.refs.container)&&!this.state.loaded&&this.loadImage()}},{key:"loadImage",value:function(){this.imageElement.src=this.state.src}},{key:"componentWillReceiveProps",value:function(t){this.state.src!==t.src&&this.setState({isLoaded:!1,src:t.src},this.loadImage)}},{key:"render",value:function(){var t=this,e=[h.a.fadeImg],n=this.state.isLoaded?h.a.loaded:null;e.push(n);var r={},o=void 0,i=void 0;if(this.props.ratio){var a=this.props.ratio.split(":"),s=m(a,2);o=s[0],i=s[1]}else this.props.height&&this.props.width&&(o=this.props.width,i=this.props.height);return r={paddingBottom:i/o*100+"%"},u.a.createElement("div",{ref:"container",className:h.a.container,style:r},this.state.isLoaded?null:this.props.loaderComponent,u.a.createElement("img",{ref:function(e){return t.imageElement=e},className:e.join(" "),onLoad:this.onImgLoad,onError:this.onImgError,style:this.props.style,alt:this.props.alt}))}}]),e}(a.Component);e.default=g,g.propTypes={src:c.a.string,ratio:c.a.string,width:c.a.number,height:c.a.number,loaderComponent:c.a.element},g.defaultProps={src:"",ratio:"4:3",loaderComponent:null}},function(t,e,n){"use strict";function r(t){return function(){return t}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(t){return t},t.exports=o},function(t,e,n){"use strict";function r(t,e,n,r,i,a,u,s){if(o(e),!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,i,a,u,s],f=0;c=new Error(e.replace(/%s/g,function(){return l[f++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var o=function(t){};t.exports=r},function(t,e,n){"use strict";var r=n(6),o=n(7),i=n(9);t.exports=function(){function t(t,e,n,r,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e};return n.checkPropTypes=r,n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n}])});