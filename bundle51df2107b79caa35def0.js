!function(e){function t(t){for(var r,s,a=t[0],l=t[1],c=t[2],d=0,_=[];d<a.length;d++)s=a[d],i[s]&&_.push(i[s][0]),i[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);_.length;)_.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==i[l]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={1:0};var o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=l;o.push([61,0]),n()}([,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SOURCES={tmFeed:{title:"TM Feed",url:"https://cors-anywhere.herokuapp.com/https://tmfeed.ru/api/v1/habrahabr-geektimes_top_daily.json",jsonProperties:{url:"url",title:"title",comments:"comments_count",site:"site",created:"time_published"}},redditHot:{title:"Reddit Hot",api:"reddit",url:"https://www.reddit.com/hot.json",jsonProperties:{url:"url",title:"title",comments:"num_comments",site:"subreddit",created:"created_utc"}},reactjsSubreddit:{title:"reactjs(reddit)",api:"reddit",url:"https://www.reddit.com/r/reactjs.json",jsonProperties:{url:"url",title:"title",comments:"num_comments",site:"subreddit",created:"created_utc"}},todayILearnedSubreddit:{title:"todayilearned (reddit)",api:"reddit",url:"https://www.reddit.com/r/todayilearned.json",jsonProperties:{url:"url",title:"title",comments:"num_comments",site:"subreddit",created:"created_utc"}},VC:{title:"VC.ru",api:"rssfeed",url:"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvc.ru%2Frss%2Fall",jsonProperties:{url:"link",title:"title",comments:"",site:"VC",created:"pubDate"}},theVerge:{title:"The Verge",api:"rssfeed",url:"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theverge.com%2Frss%2Findex.xml",jsonProperties:{url:"link",title:"title",comments:"",site:"The Verge",created:"pubDate"}},nineTo5mac:{title:"9to5Mac",api:"rssfeed",url:"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2F9to5mac.com%2Ffeed%2F",jsonProperties:{url:"link",title:"title",comments:"",site:"9to5Mac",created:"pubDate"}}}},,,,,,,function(e,t,n){e.exports=n.p+"newsIcon.png"},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SELECT_SOURCE="SELECT_SOURCE",t.INVALIDATE_SOURCE="INVALIDATE_SOURCE",t.REQUEST_POSTS="REQUEST_POSTS",t.RECEIVE_POSTS="RECEIVE_POSTS",t.SELECT_SOURCES="SELECT_SOURCES",t.SELECT_ALL="SELECT_ALL",t.UNSELECT_ALL="UNSELECT_ALL",t.TOGGLE_MENU="TOGGLE_MENU"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchPostsIfNeeded=t.receivePosts=t.requestPosts=t.invalidateSource=t.unSelectAll=t.selectAll=t.selectSource=t.toggleMenu=void 0;var r,i=n(21),o=n(20),s=(r=o)&&r.__esModule?r:{default:r},a=n(11);t.toggleMenu=function(){return{type:i.TOGGLE_MENU}},t.selectSource=function(e){return{type:i.SELECT_SOURCE,sourceList:e}},t.selectAll=function(e){return{type:i.SELECT_ALL,sourceList:e}},t.unSelectAll=function(e){return{type:i.UNSELECT_ALL,sourceList:e}},t.invalidateSource=function(e){return{type:i.INVALIDATE_SOURCE,source:e}};var l=t.requestPosts=function(e){return{type:i.REQUEST_POSTS,source:e}},c=t.receivePosts=function(e,t){return{type:i.RECEIVE_POSTS,source:e,posts:t,receivedAt:Date.now()}},u=(t.fetchPostsIfNeeded=function(e){return function(t,n){if(function(e,t){var n=e.postsBySource[t];return!n||!n.isFetching&&n.didInvalidate}(n(),e))return t(function(e){return function(t){return t(l(e)),(0,s.default)(e.url).then(function(e){return e.json()}).then(function(n){var r=u(e,n);return t(c(e,r))})}}(e))}},function(e,t){var n=[];return e===a.SOURCES.tmFeed?(t.posts.map(function(t){n.push({title:t[e.jsonProperties.title],url:t[e.jsonProperties.url],comments:t[e.jsonProperties.comments],site:t[e.jsonProperties.site],created:Date.parse(t[e.jsonProperties.created])})}),n):e===a.SOURCES.redditNews?(t.map(function(t){return n.push({title:t[e.jsonProperties.title],url:t[e.jsonProperties.url],comments:t[e.jsonProperties.comments],site:e.jsonProperties.site,created:1e3*t[e.jsonProperties.created]})}),n):"reddit"===e.api?(t.data.children.map(function(t){n.push({title:t.data[e.jsonProperties.title],url:t.data[e.jsonProperties.url],comments:t.data[e.jsonProperties.comments],site:t.data[e.jsonProperties.site],created:1e3*t.data[e.jsonProperties.created]})}),n):"rssfeed"===e.api?(t.items.map(function(t){n.push({title:t[e.jsonProperties.title],url:t[e.jsonProperties.url],comments:t[e.jsonProperties.comments],site:e.jsonProperties.site,created:new Date(t[e.jsonProperties.created].replace(/-/g,"/"))})}),n):void 0})},,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];return Object.values(e).map(function(e){return Object.assign({},t[e.title]={isSelected:n,properties:e})}),t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),i=n(21);var o=(0,r.combineReducers)({postsBySource:function(){var e,t,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments[1];switch(o.type){case i.INVALIDATE_SOURCE:case i.REQUEST_POSTS:case i.RECEIVE_POSTS:return Object.assign({},r,(e={},t=o.source.title,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,didInvalidate:!0,items:[]},t=arguments[1];switch(t.type){case i.INVALIDATE_SOURCE:return Object.assign({},e,{didInvalidate:!0});case i.REQUEST_POSTS:return Object.assign({},e,{isFetching:!0,didInvalidate:!1});case i.RECEIVE_POSTS:return Object.assign({},e,{isFetching:!1,didInvalidate:!1,items:t.posts,lastUpdated:t.receivedAt});default:return e}}(r[o.source],o),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e));default:return r}},selectedSources:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case i.SELECT_SOURCE:var n=Object.assign({},e);return t.sourceList.map(function(e){n[e].isSelected=!n[e].isSelected}),n;case i.SELECT_ALL:return n=Object.assign({},e),t.sourceList.map(function(e){n[e].isSelected=!0}),n;case i.UNSELECT_ALL:return n=Object.assign({},e),t.sourceList.map(function(e){n[e].isSelected=!1}),n;default:return e}},toggleMenu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(arguments[1].type){case i.TOGGLE_MENU:return Object.assign({},e,{isVisible:!e.isVisible});default:return e}}});t.default=o},function(e,t,n){e.exports=n.p+"loading.svg"},function(e,t,n){(t=e.exports=n(7)(!1)).push([e.i,"/* Container */\n.App__content___1LOdY {\n    transition: all .5s;\n    padding: 10px;\n    width: 100%;\n}\n\n.App__visible___m0sgx {\n    -webkit-transform: translateX(250px);\n    \n}\n@media (min-width: 480px) {\n    .App__visible___m0sgx {\n        width: calc(100% - 250px);\n    }\n}\n\n@media (max-width: 480px) {\n    .App__visible___m0sgx {\n        transition: .5s;\n    }\n    .App__visible___m0sgx a {\n        opacity: 0.1;\n    }\n}\n\n.App__info___2gRNK {\n    height:100vh;\n    display: block;\n    text-align: center;\n    padding-top: 40vh;\n    font-size: 15px;\n}\n\n.App__text___2V97K {\n    opacity: 0.54;\n}\n\n.App__loading___1WUzR {\n    opacity: 1;\n}\n\n.App__hamburger___2nzNs {\n    display: inline-block;\n    cursor: pointer;\n}\n\n.App__bar1___Jshzf, .App__bar2___3q_51, .App__bar3___6p1Wm {\n    width: 35px;\n    height: 5px;\n    background-color: #ff5252;\n    margin: 6px 0;\n    transition: 0.5s;\n}\n\n.App__change___3aUOZ .App__bar1___Jshzf {\n    -webkit-transform: rotate(-45deg) translate(-9px, -6px);\n    transform: rotate(-45deg) translate(-9px, 6px);\n}\n\n.App__change___3aUOZ .App__bar2___3q_51{opacity: 0;}\n\n.App__change___3aUOZ .App__bar3___6p1Wm {\n    -webkit-transform: rotate(45deg) translate(9px);\n    transform: rotate(45deg) translate(-9px, -6px);\n}\n",""]),t.locals={content:"App__content___1LOdY",visible:"App__visible___m0sgx",info:"App__info___2gRNK",text:"App__text___2V97K",loading:"App__loading___1WUzR",hamburger:"App__hamburger___2nzNs",bar1:"App__bar1___Jshzf",bar2:"App__bar2___3q_51",bar3:"App__bar3___6p1Wm",change:"App__change___3aUOZ"}},function(e,t,n){var r=n(37);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(6)(r,i);r.locals&&(e.exports=r.locals)},,function(e,t,n){(t=e.exports=n(7)(!1)).push([e.i,'\n/* General sidemenu stylings */\n.SideMenu__sidemenu___2vikh {\n    height: 100vh;\n    width: 250px;\n    position: fixed;\n    top: 0;\n    left: 0;\n    transition: 0.5s;\n    overflow-x: hidden;\n    background-color: #fff;\n    /* top layer */\n    z-index: 9999;\n    border-right: 1px solid rgba(0,0,0,.125);\n}\n/* Slide to the left (hide)  */\n.SideMenu__hidden___1hoQS{\n    transform: translateX(-250px)\n}\n\n.SideMenu__container___1uCNX {\n    padding-top: 20px;\n    padding-left: 20px;\n    width: 250px;\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n.SideMenu__titleContainer___1Py2O {\n    border-bottom: 1px solid rgba(0,0,0,.125);\n    display: flex;\n    margin-right: 10px;\n}\n/*in title container*/\n.SideMenu__icon___mKLy2 { \n    width: 30px;\n    height: 30px;\n}\n/*in title container*/\n.SideMenu__text___2Hoef {\n    margin-left: 10px;\n    padding-bottom: 10px;\n}\n\n.SideMenu__sourceList___1B1cF {\n    margin-top: 20px;\n    list-style-type: none;\n    padding: 0;\n}\n\n.SideMenu__menuItem___1wj8j {\n    font-size: 15px;\n    transition: 0.3s;\n    padding-bottom: 8px;\n}\n\n/* The container */\n.SideMenu__menuItem___1wj8j {\n    display: block;\n    position: relative;\n    padding-left: 30px;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n/* Hide the browser\'s default checkbox */\n.SideMenu__menuItem___1wj8j input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n}\n\n/* Create a custom checkbox */\n.SideMenu__checkmark___3yy_8 {\n    position: absolute;\n    top: 1px;\n    left: 0;\n    height: 20px;\n    width: 20px;\n    background-color: #fff;\n    border: 1px solid;\n}\n\n\n/* When the checkbox is checked, add a background */\n.SideMenu__menuItem___1wj8j input:checked ~ .SideMenu__checkmark___3yy_8 {\n    background-color:#ff5252;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n.SideMenu__checkmark___3yy_8:after {\n    content: "";\n    position: absolute;\n    display: none;\n}\n\n/* Show the checkmark when checked */\n.SideMenu__menuItem___1wj8j input:checked ~ .SideMenu__checkmark___3yy_8:after {\n    display: block;\n}\n\n/* Style the checkmark/indicator */\n.SideMenu__checkmark___3yy_8:after {\n    left: 7px;\n    top: 1px;\n    width: 5px;\n    height: 13px;\n    border: solid white;\n    border-width: 0 2px 2px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n\n.SideMenu__clearButton___3zEpr {\n    border: none;\n    background: none;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    font-size: 15px;\n    color: rgba(0, 0, 0, 0.54);\n    font-weight: 400;\n}\n.SideMenu__clearButton___3zEpr:hover{\n    color: rgba(0, 0, 0, 0.54);\n    cursor: pointer;\n}\n\n.SideMenu__clearButton___3zEpr:focus {\n    outline: none;\n}\n',""]),t.locals={sidemenu:"SideMenu__sidemenu___2vikh",hidden:"SideMenu__hidden___1hoQS",container:"SideMenu__container___1uCNX",titleContainer:"SideMenu__titleContainer___1Py2O",icon:"SideMenu__icon___mKLy2",text:"SideMenu__text___2Hoef",sourceList:"SideMenu__sourceList___1B1cF",menuItem:"SideMenu__menuItem___1wj8j",checkmark:"SideMenu__checkmark___3yy_8",clearButton:"SideMenu__clearButton___3zEpr"}},function(e,t,n){var r=n(40);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(6)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(1)),i=n(5),o=s(n(41));function s(e){return e&&e.__esModule?e:{default:e}}console.log(o.default);t.default=(0,i.connect)(function(e){return{selectedSources:e.selectedSources,showMenu:e.toggleMenu}})(function(e){var t=e.onClick,i=e.selectedSources,s=e.onSelectAll,a=e.onUnselectAll,l=e.showMenu,c="#ff5252",u="rgba(0, 0, 0, 0.54)",d=Object.keys(i).map(function(e){return e});return r.default.createElement("div",null,r.default.createElement("nav",{className:o.default.sidemenu+" "+(l.isVisible?o.default.visible:o.default.hidden)},r.default.createElement("div",{className:o.default.container},r.default.createElement("div",{className:o.default.titleContainer},r.default.createElement("div",null,r.default.createElement("img",{className:o.default.icon,src:n(18)})),r.default.createElement("h3",{className:o.default.text},r.default.createElement("a",{onClick:function(e){return s(e,d)},className:"d-inline-block align-top"},"All in one")),r.default.createElement("button",{onClick:function(e){return a(e,d)},className:o.default.clearButton,"data-dismiss":"alert","aria-label":"Close"},r.default.createElement("span",{"aria-hidden":"true"},"clear"))),r.default.createElement("ul",{className:o.default.sourceList},d.map(function(e){return r.default.createElement("li",null,r.default.createElement("label",{className:o.default.menuItem,style:i[e].isSelected?{color:c}:{color:u}},i[e].properties.title,r.default.createElement("input",{className:o.default.input,type:"checkbox",onChange:function(n){return t(n,[e])},checked:i[e].isSelected}),r.default.createElement("span",{className:o.default.checkmark})))})))))})},function(e,t,n){(t=e.exports=n(7)(!1)).push([e.i,".Posts__title___7EoL6 {\n    font-size: 15px;\n    font-weight: 350;\n    margin-bottom: 5px;\n}\n\n.Posts__info___SZNdZ {\n    opacity: 0.54;\n    justify-content: space-between;\n    display: flex;\n    text-overflow: clip;\n}\n",""]),t.locals={title:"Posts__title___7EoL6",info:"Posts__info___SZNdZ"}},function(e,t,n){var r=n(43);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(6)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(1)),i=a(n(0)),o=n(5),s=(n(11),a(n(44)));function a(e){return e&&e.__esModule?e:{default:e}}var l="Just now",c=" minute ago",u=" minutes ago",d=" hour ago",_=" hours ago",p="yesterday",f=" days ago";var m=function(e){var t=e.posts;e.selectedSource;return r.default.createElement("div",null,r.default.createElement("ul",{className:"list-group list-group-flush"},t.map(function(e,t){return r.default.createElement("a",{href:e.url,target:"_blank",className:"list-group-item list-group-item-action flex-column align-items-start",key:t},r.default.createElement("div",{className:"d-flex w-100 justify-content-between"},r.default.createElement("p",{className:s.default.title},e.title)),r.default.createElement("div",{className:""+s.default.info},r.default.createElement("small",null,e.site),r.default.createElement("small",null,(n=e.created,i="",o=Date.now(),m={month:"long",day:"numeric",year:"numeric"},(a=(o-n)/1e3)<60?l:a<3600?""+(i=Math.round(a/60))+(1===i?c:u):a<86400?""+(i=Math.round(a/3600))+(1===i?d:_):a<172800?p:a<60480?""+(i=Math.round(a/3600*24))+f:""+((i=new Date(n)).getFullYear(),new Date(o).getFullYear(),i.toLocaleDateString("en-US",m))))));var n,i,o,a,m})))};m.propTypes={posts:i.default.array.isRequired},t.default=(0,o.connect)(function(e){return{selectedSource:e.selectedSource}})(m)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(i)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),s=p(o),a=n(5),l=n(22),c=p(n(45)),u=p(n(42)),d=p(n(17)),_=p(n(38));function p(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),i(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.dispatch,n=e.selectedSources;e.postsBySource;Object.entries(n).map(function(e){var n=r(e,2),i=(n[0],n[1]);!0===i.isSelected&&t((0,l.fetchPostsIfNeeded)(i.properties))})}},{key:"componentWillReceiveProps",value:function(e){if(e.selectedSources!==this.props.selectedSources){var t=e.dispatch,n=e.selectedSources;e.postsBySource,e.posts;Object.entries(n).map(function(e){var n=r(e,2),i=(n[0],n[1]);i.isSelected&&t((0,l.fetchPostsIfNeeded)(i.properties))})}}},{key:"handleSelectSource",value:function(e,t){(0,this.props.dispatch)((0,l.selectSource)(t))}},{key:"handleSelectAll",value:function(e,t){(0,this.props.dispatch)((0,l.selectAll)(t))}},{key:"handleUnselectAll",value:function(e,t){(0,this.props.dispatch)((0,l.unSelectAll)(t))}},{key:"handleToggle",value:function(){(0,this.props.dispatch)((0,l.toggleMenu)())}},{key:"render",value:function(){var e=this.props,t=e.posts,r=(e.postsBySource,e.selectedSources),i=e.toggleMenu,o=!0;return Object.values(r).map(function(e){if(e.isSelected)return o=!1}),s.default.createElement("div",null,s.default.createElement("div",null,s.default.createElement(u.default,{onClick:this.handleSelectSource.bind(this),onSelectAll:this.handleSelectAll.bind(this),onUnselectAll:this.handleUnselectAll.bind(this)})),s.default.createElement("div",{className:_.default.content+" "+(i.isVisible?_.default.visible:_.default.hidden)},s.default.createElement("div",{class:_.default.hamburger,onClick:this.handleToggle.bind(this),className:i.isVisible?_.default.change:""},s.default.createElement("div",{class:""+_.default.bar1}),s.default.createElement("div",{class:""+_.default.bar2}),s.default.createElement("div",{class:""+_.default.bar3})),!0===o?s.default.createElement("div",{className:_.default.info},s.default.createElement("p",{className:_.default.text},"Select source")):0===t.length?s.default.createElement("div",{className:_.default.info},s.default.createElement("img",{className:_.default.loading,src:n(36)})):s.default.createElement("div",null,s.default.createElement(c.default,{posts:t}))))}}]),t}();t.default=(0,a.connect)(function(e){var t=e.postsBySource,n=e.selectedSources,i=e.toggleMenu,o=[];return Object.entries(n).map(function(e){var n=r(e,2),i=n[0];if(n[1].isSelected)return t[i]&&t[i].items?t[i].items.map(function(e){return o.push(e)}):[]}),o=d.default.sortBy(o,[function(e){return-e.created}]),{postsBySource:t,selectedSources:n,posts:o,toggleMenu:i}})(f)},,function(e,t,n){(e.exports=n(7)(!1)).push([e.i,"body {\n    font-family: Roboto, sans-serif;\n}",""])},function(e,t,n){var r=n(48);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(6)(r,i);r.locals&&(e.exports=r.locals)},,,,,,,,,,,,function(e,t,n){"use strict";var r=_(n(1)),i=_(n(24)),o=n(5),s=_(n(23)),a=n(9),l=(n(22),n(19),_(n(49)),_(n(46))),c=_(n(35)),u=n(11),d=_(n(34));function _(e){return e&&e.__esModule?e:{default:e}}n(18);var p,f={postsBySource:{},selectedSources:(0,d.default)(u.SOURCES,{},!1),toggleMenu:{isVisible:!0}},m=(p=f,(0,a.createStore)(c.default,p,(0,a.applyMiddleware)(s.default)));i.default.render(r.default.createElement(o.Provider,{store:m},r.default.createElement(l.default,null)),document.querySelector(".wrapper"))}]);