(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[731],{8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(c){l=!0,a=c}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,i=(o=r(7294))&&o.__esModule?o:{default:o},l=r(6273),c=r(387),u=r(7190);var s={};function f(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),o=i.default.useMemo((function(){var t=a(l.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?l.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),d=o.href,p=o.as,h=e.children,v=e.replace,m=e.shallow,y=e.scroll,_=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var b=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,g=a(u.useIntersection({rootMargin:"200px"}),2),j=g[0],x=g[1],A=i.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);i.default.useEffect((function(){var e=x&&r&&l.isLocalURL(d),t="undefined"!==typeof _?_:n&&n.locale,a=s[d+"%"+p+(t?"%"+t:"")];e&&!a&&f(n,d,p,{locale:t})}),[p,d,x,_,r,n]);var k={ref:A,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),t[a?"replace":"push"](r,n,{shallow:o,locale:c,scroll:i}))}(e,n,d,p,v,m,y,_)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof _?_:n&&n.locale,w=n&&n.isLocaleDomain&&l.getDomainLocale(p,C,n&&n.locales,n&&n.domainLocales);k.href=w||l.addBasePath(l.addLocale(p,C,n&&n.defaultLocale))}return i.default.cloneElement(t,k)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(c){l=!0,a=c}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,u=o.useRef(),s=a(o.useState(!1),2),f=s[0],d=s[1],p=a(o.useState(t?t.current:null),2),h=p[0],v=p[1],m=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{root:h,rootMargin:r}))}),[n,h,r,f]);return o.useEffect((function(){if(!l&&!f){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){t&&v(t.current)}),[t]),[m,f]};var o=r(7294),i=r(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map},9731:function(e,t,r){"use strict";r.d(t,{$_:function(){return f},h4:function(){return l},CU:function(){return h}});var n=r(5893),a=r(1664),o=r(9582),i=r.n(o);function l(){return(0,n.jsxs)("header",{className:i().header,children:[(0,n.jsx)(c,{name:"Spark: Lisbon",description:"5 minute talks with interesting people, interesting ideas"}),(0,n.jsxs)("nav",{className:i().nav,children:[(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("a",{children:"Talks"})}),(0,n.jsx)(a.default,{href:"/speaker-sign-up",children:(0,n.jsx)("a",{children:"Speaker sign up"})}),(0,n.jsx)(a.default,{href:"/contact-us",children:(0,n.jsx)("a",{children:"Contact us"})})]})]})}function c(e){var t=e.name,r=e.description;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("a",{className:i().titleAvatar})}),(0,n.jsxs)("div",{className:i().titleInfoArea,children:[(0,n.jsx)("h1",{className:i().titleName,children:t}),(0,n.jsx)("p",{className:i().titleDescription,children:r})]})]})}var u=r(6932),s=r.n(u);function f(){return(0,n.jsx)("footer",{className:s().footer,children:"TODO: email, telegram link"})}var d=r(4804),p=r.n(d);function h(e){var t=e.children;return(0,n.jsxs)("div",{className:p().container,children:[(0,n.jsx)(l,{}),(0,n.jsx)("main",{className:p().main,children:t}),(0,n.jsx)(f,{})]})}},6932:function(e){e.exports={footer:"footer_footer__RQUzZ"}},9582:function(e){e.exports={header:"header_header__cagQO",titleAvatar:"header_titleAvatar___4hI1",titleInfoArea:"header_titleInfoArea__amf6C",titleName:"header_titleName__k_uCU",titleDescription:"header_titleDescription__Cyb7U",nav:"header_nav___KPgb"}},4804:function(e){e.exports={container:"page-frame_container__31CsM",main:"page-frame_main__oy6nJ"}},1664:function(e,t,r){e.exports=r(8418)}}]);